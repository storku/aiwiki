---
title: "Multi-head Latent Attention"
slug: "multi-head_latent_attention"
categories:
  - "Attention_mechanisms"
  - "Deep_learning"
  - "Neural_networks"
  - "Transformer_models"
  - "Machine_learning"
---[Template:Infobox attention mechanism](/index.php?title=Template:Infobox_attention_mechanism&action=edit&redlink=1)

**Multi-head Latent Attention** (**MLA**) is an innovative [attention mechanism](/index.php?title=Attention_mechanism&action=edit&redlink=1) for [transformer](/index.php?title=Transformer_(machine_learning)&action=edit&redlink=1) models that achieves a 93.3% reduction in [key-value cache](/index.php?title=Key-value_cache&action=edit&redlink=1) size while maintaining or exceeding the performance of traditional [multi-head attention](/index.php?title=Multi-head_attention&action=edit&redlink=1).[&#91;1&#93;](#cite_note-deepseek-v2-1) Introduced by [DeepSeek-AI](/wiki/deepseek-ai) in May 2024 as part of the DeepSeek-V2 model, MLA addresses the critical memory bottleneck that limits [inference](/wiki/inference) throughput and [context length](/index.php?title=Context_length&action=edit&redlink=1) in [large language models](/wiki/large_language_model).

Unlike previous approaches such as [Multi-Query Attention](/index.php?title=Multi-Query_Attention&action=edit&redlink=1) (MQA) or [Grouped-Query Attention](/index.php?title=Grouped-Query_Attention&action=edit&redlink=1) (GQA) that reduced or grouped attention heads, MLA uses **low-rank joint compression** of keys and values into a compact latent representation.[&#91;1&#93;](#cite_note-deepseek-v2-1) This enables models to support 128K token contexts with 5.76x greater inference throughput and 42.5% lower training costs compared to traditional approaches.[&#91;1&#93;](#cite_note-deepseek-v2-1)

## Background and motivation

The development of MLA emerged from DeepSeek-AI's effort to create economical large-scale language models. In [autoregressive](/index.php?title=Autoregressive&action=edit&redlink=1) text generation, a model generates output one token at a time, with each newly generated token being added to the input sequence for the next step. Traditional [multi-head attention](/index.php?title=Multi-head_attention&action=edit&redlink=1) mechanisms store full-dimensional key and value matrices for every attention head at every sequence position, creating enormous memory requirements that scale linearly with context length.[&#91;2&#93;](#cite_note-lior-sinai-2)

### The KV cache problem

In the original [Transformer](/index.php?title=Transformer_(machine_learning)&action=edit&redlink=1) architecture, introduced in the paper "[Attention Is All You Need](/index.php?title=Attention_Is_All_You_Need&action=edit&redlink=1)", the model relies on a mechanism called [Multi-head Attention](/index.php?title=Multi-head_Attention&action=edit&redlink=1) (MHA).[&#91;3&#93;](#cite_note-attention-paper-3) For each token in an input sequence, the model computes three vectors: a Query (Q), a Key (K), and a Value (V). The attention score between any two tokens is calculated based on the similarity of their Q and K vectors, enabling the model to capture complex, long-range dependencies. The computational complexity of this operation is quadratic with respect to the sequence length, O(N² · d), where N is the sequence length and d is the model dimension.[&#91;4&#93;](#cite_note-planetbanatt-4)

A naive implementation would require recomputing the K and V vectors for all previous tokens at every single generation step. To avoid this redundant computation, a technique called **KV caching** is used. The K and V vectors for all tokens in the context are computed once and stored in memory (the KV cache). For each new token, the model only needs to compute its own K and V vectors and append them to the cache.[&#91;4&#93;](#cite_note-planetbanatt-4)

While this dramatically speeds up inference, it introduces a new bottleneck: memory. For a model with 128 heads and 128-dimensional heads, the system must cache 32,768 values per token per layer. For a 60-layer model processing an 8K context, this consumes over 30 gigabytes of GPU memory just for the key-value cache.[&#91;2&#93;](#cite_note-lior-sinai-2) This memory bottleneck limits the batch sizes that can be processed simultaneously, directly constraining inference speed and making long-context applications economically infeasible. The size of the KV cache grows linearly with the sequence length and the number of attention heads, and for modern LLMs with billions of parameters, many attention heads, and very long context windows (for example 128,000 tokens or more), the KV cache can quickly exceed the capacity of a single [GPU](/index.php?title=GPU&action=edit&redlink=1).[&#91;5&#93;](#cite_note-transmla-5)

Key researchers Huazuo Gao and Wangding Zeng are credited with the core architectural breakthroughs that enabled MLA's development.[&#91;1&#93;](#cite_note-deepseek-v2-1)

### Predecessor architectures: MQA and GQA

To address the KV cache problem, several variants of MHA were developed as performance-for-efficiency trade-offs:

- **[Multi-Query Attention](/index.php?title=Multi-Query_Attention&action=edit&redlink=1) (MQA)**: This approach uses the standard number of Query heads but shares a single Key and a single Value head across all of them. MQA uses a single shared key and value for all heads, drastically reducing memory usage but at the cost of some accuracy degradation.[&#91;6&#93;](#cite_note-mqa-6) This limits the model's expressive capacity and can lead to degradation in model quality.[&#91;7&#93;](#cite_note-shirley-li-7)

- **[Grouped-Query Attention](/index.php?title=Grouped-Query_Attention&action=edit&redlink=1) (GQA)**: GQA offers a compromise between MHA and MQA. It divides the Query heads into several groups and shares a single Key and Value head within each group. This provides a balance, reducing the KV cache size significantly compared to MHA while often preserving more model quality than MQA.[&#91;8&#93;](#cite_note-gqa-8) GQA shares keys and values among groups of heads (instead of all heads), achieving intermediate memory savings with a smaller accuracy penalty than MQA.[&#91;7&#93;](#cite_note-shirley-li-7)

However, both methods sacrifice some modeling capacity compared to full multi-head attention.[&#91;7&#93;](#cite_note-shirley-li-7) **Multi-head Latent Attention (MLA)** was developed to strike a better balance between memory efficiency and model fidelity. It compresses the key/value space into a latent vector rather than sharing actual keys, preserving distinct per-head representations and attention flexibility.[&#91;9&#93;](#cite_note-ml-mastery-9)[&#91;10&#93;](#cite_note-datacrunch-10)

### Comparison of attention mechanisms

The table below summarizes the differences between standard multi-head attention and its memory-saving variants:

| Attention Mechanism | Key/Value Sharing Strategy | KV Cache per Token | Relative Memory | Effect on Performance |
| --- | --- | --- | --- | --- |
| **Standard Multi-Head Attention (MHA)** | Separate K and V for each head (no sharing) | 2 × n_h × d_h | 100% (baseline) | Baseline accuracy (full modeling capacity) |
| **Multi-Query Attention (MQA)** | One shared K and V across all heads | 2 × d_h | ~3% (if n_h=32) | Some quality drop (single KV limits attention diversity)[&#91;6&#93;](#cite_note-mqa-6) |
| **Grouped-Query Attention (GQA)** | K and V shared within groups of heads | 2 × n_g × d_h | ~12.5% (if 8 heads/group) | Slight quality drop (better than MQA, still below MHA)[&#91;8&#93;](#cite_note-gqa-8) |
| **Multi-Head Latent Attention (MLA)** | No direct sharing; uses learned low-rank latent vectors for K and V | (d_c + d^R_h) | ~6–10% of MHA | Minimal to no loss; can improve performance[&#91;4&#93;](#cite_note-planetbanatt-4)[&#91;7&#93;](#cite_note-shirley-li-7) |

*Notes:* n_h = number of heads; n_g = number of groups. Memory percentages are illustrative; actual savings depend on model settings (e.g. number of heads or latent dimension). The performance effect assumes comparable model size and training; MLA's learned projections give it greater expressiveness than fixed sharing in MQA/GQA, often closing the gap with or exceeding MHA.[&#91;10&#93;](#cite_note-datacrunch-10)

## Technical architecture

### Core mechanism

MLA fundamentally reimagines how transformer models cache and retrieve attention information. The core idea behind MLA is to use [low-rank approximation](/index.php?title=Low-rank_approximation&action=edit&redlink=1) to compress the information needed for the Key and Value vectors.[&#91;9&#93;](#cite_note-ml-mastery-9) MLA introduces a shared down-projection matrix and separate up-projection matrices, where the compressed latent dimension is much smaller than the full K and V dimensions combined.[&#91;9&#93;](#cite_note-ml-mastery-9) The mechanism operates through three key phases:

1. **Compression phase (Down-projection to latent space)**: Input tokens are projected down to a compact [latent space](/index.php?title=Latent_space&action=edit&redlink=1) using a compression matrix. Instead of directly projecting the input hidden state to the full-sized K and V vectors, MLA first projects it into a much smaller, low-dimensional "latent vector."

2. **Caching phase**: Only the compressed latent vectors are stored in memory, not full keys and values. Since the latent dimension is significantly smaller than the full K and V dimensions combined, the memory required for the cache is drastically reduced.

3. **Decompression phase (Up-projection during attention)**: Full-dimensional keys and values are reconstructed on-the-fly during attention computation. When attention needs to be computed, the cached latent vector is "decompressed" back into the full-sized K and V vectors for each head using separate up-projection matrices.

This workflow effectively trades increased computational cost (more matrix multiplications for the down- and up-projections) for reduced memory access cost (loading a much smaller cache from memory).[&#91;5&#93;](#cite_note-transmla-5)[&#91;4&#93;](#cite_note-planetbanatt-4) On modern hardware like GPUs, which are often limited by memory bandwidth rather than raw compute power, this is a highly favorable trade-off that leads to significant gains in overall inference speed.[&#91;11&#93;](#cite_note-hardware-centric-11)

### Mathematical formulation

#### Preliminaries: Standard Multi-Head Attention

Given an input hidden state h_t ∈ ℝ^d for a token at timestep t, where d is the model dimension, standard MHA computes the Query (q_t), Key (k_t), and Value (v_t) vectors using projection matrices W_Q, W_K, W_V ∈ ℝ^(n_h·d_h × d):

q_t = W_Q h_t

k_t = W_K h_t

v_t = W_V h_t

Here, n_h is the number of heads and d_h is the dimension per head. The resulting vectors are then reshaped into n_h separate heads, and the attention output is calculated using the scaled dot-product attention formula.[&#91;3&#93;](#cite_note-attention-paper-3)

#### MLA formulation

MLA modifies the computation of the Key and Value vectors through **low-rank compression**. It replaces the standard W^K and W^V projection matrices with a low-rank factorization that produces a shared latent representation for keys and values.[&#91;4&#93;](#cite_note-planetbanatt-4) MLA introduces a shared down-projection matrix W^{DKV} ∈ ℝ^(d_c × d) and separate up-projection matrices W^{UK}, W^{UV} ∈ ℝ^(n_h·d_h × d_c), where d_c is the compressed latent dimension and typically d_c ≪ n_h·d_h.

**1. Latent KV Compression:** The hidden state h_t is first projected into a shared, compressed latent vector c^{KV}_t ∈ ℝ^{d_c}:

c^{KV}_t = W^{DKV} h_t

This small vector c^{KV}_t is what gets stored in the KV cache. Importantly, the same compressed vector c^{KV}_t is used for all heads' keys and values, meaning only d_c values per token need to be stored in the KV cache (instead of storing K_t and V_t for every head).[&#91;1&#93;](#cite_note-deepseek-v2-1)[&#91;7&#93;](#cite_note-shirley-li-7)

**2. Attention Computation with Latent States:** The Query vector q_t is computed as in standard MHA. The full Key and Value vectors are reconstructed from the latent vector c^{KV}_t on-the-fly:

q_t = W_Q h_t

k_t = W^{UK} c^{KV}_t

v_t = W^{UV} c^{KV}_t

Two up-projection matrices then map this latent vector to the high-dimensional key and value spaces: W^{UK} ∈ ℝ^(d_c × n_h·d_h) and W^{UV} ∈ ℝ^(d_c × n_h·d_h). This yields the keys K_t = c^{KV}_t W^{UK} and values V_t = c^{KV}_t W^{UV}, which can be split into per-head vectors.[&#91;9&#93;](#cite_note-ml-mastery-9) The attention mechanism then proceeds with these reconstructed q_t, k_t, and v_t vectors as in standard MHA.[&#91;1&#93;](#cite_note-deepseek-v2-1)

For the query projection, MLA can similarly apply a low-rank factorization (W^{DQ} and W^{UQ}) to compress queries during training, though query vectors are not cached during inference:[&#91;9&#93;](#cite_note-ml-mastery-9)

c^Q_t = W^{DQ} h_t

q^C_t = W^{UQ} c^Q_t

where c^Q_t ∈ ℝ^{d'_c}, W^{DQ} ∈ ℝ^(d'_c × d), and W^{UQ} ∈ ℝ^(n_h·d_h × d'_c).

The joint compression of K and V into a single latent vector is a key design choice. It forces the model to learn a more general and compact representation from which both the token's identity (Key) and its content (Value) can be derived. This constraint can act as a form of regularization, which may contribute to MLA's ability to maintain or even improve performance over MHA.[&#91;1&#93;](#cite_note-deepseek-v2-1)

In DeepSeek-V2, hyperparameters include n_h = 128, d_h = 128, d_c = 512, d'_c = 1,536, and a decoupled per-head dimension d^R_h = 64.[&#91;1&#93;](#cite_note-deepseek-v2-1) For DeepSeek-V2, the standard 16,384-dimensional key-value representation compresses down to just 512 dimensions—a 32-fold reduction.[&#91;1&#93;](#cite_note-deepseek-v2-1) Each attention head gets its own unique up-projection, preserving the expressiveness of having distinct keys and values per head despite sharing the same compact latent representation. Additional RMSNorm layers and scaling factors are applied at bottlenecks in DeepSeek-V3.[&#91;12&#93;](#cite_note-deepseek-v3-12)

MLA is implemented using an improved version of FlashAttention-2 for faster computation.[&#91;13&#93;](#cite_note-flash-attention-13)

| Parameter | DeepSeek-V2 | DeepSeek-V3 |
| --- | --- | --- |
| KV compression dimension | 512 | 512 |
| Query compression dimension | 1,536 | 1,536 |
| Number of attention heads | 128 | 128 |
| Head dimension | 128 | 128 |
| Standard cache size per token | 32,768 | 32,768 |
| MLA cache size per token | 576 | 576 |
| Cache reduction | 98.2% | 98.2% |

### Decoupled rotary position embeddings

A critical technical challenge MLA solves is compatibility with [Rotary Position Embeddings](/index.php?title=Rotary_Position_Embeddings&action=edit&redlink=1) (RoPE), a widely-used positional encoding that applies rotation matrices to queries and keys.[&#91;1&#93;](#cite_note-deepseek-v2-1)[&#91;14&#93;](#cite_note-rope-paper-14) Modern LLMs heavily rely on [Rotary Positional Embeddings (RoPE)](/index.php?title=Rotary_positional_encoding&action=edit&redlink=1) to encode the relative position of tokens. RoPE works by rotating the Query and Key vectors based on their absolute position in the sequence.[&#91;15&#93;](#cite_note-medium-karl-15) 

However, applying RoPE in MLA requires special handling, because the rotation operations on keys and queries interfere with the low-rank decomposition.[&#91;4&#93;](#cite_note-planetbanatt-4)[&#91;7&#93;](#cite_note-shirley-li-7) Standard RoPE is incompatible with low-rank compression because the position-dependent rotations prevent weight matrices from being absorbed and merged during inference. A direct application of RoPE after the up-projection would require decompressing the entire KV cache at every generation step, defeating the purpose of the compression.[&#91;16&#93;](#cite_note-rope-incompatibility-16)

To solve this, the DeepSeek-V2 paper introduced **Decoupled RoPE**.[&#91;15&#93;](#cite_note-medium-karl-15)[&#91;4&#93;](#cite_note-planetbanatt-4) This technique modifies the structure of the Q and K heads by splitting them into two parts: one part that carries positional information (the "rope" part) and one that does not (the "nope" part).[&#91;7&#93;](#cite_note-shirley-li-7) MLA introduces decoupled RoPE that separates positional encoding from the main key projection. In practice, an additional set of auxiliary query (and/or key) vectors are maintained solely for the purpose of applying RoPE, while the primary key latent remains unrotated.[&#91;7&#93;](#cite_note-shirley-li-7) 

The model maintains additional multi-head query vectors q^R and a shared key k^R specifically for positional information. These receive RoPE transformations while compressed components remain position-independent.[&#91;1&#93;](#cite_note-deepseek-v2-1) The solution uses additional multi-head queries q^R_{t,i} ∈ ℝ^{d^R_h} and a shared key k^R_t ∈ ℝ^{d^R_h}:

q^R_t = RoPE(W^{QR} c^Q_t)

k^R_t = RoPE(W^{KR} h_t)

where W^{QR} ∈ ℝ^(d^R_h·n_h × d'_c) and W^{KR} ∈ ℝ^(d^R_h × d). Final queries and keys are formed by concatenation:

q_{t,i} = [q^C_{t,i}; q^R_{t,i}]

k_{t,i} = [k^C_{t,i}; k^R_t]

Attention is then computed with a scaled denominator:

o_{t,i} = Σ_j Softmax_j((q_{t,i}^T k_{j,i})/√(d_h + d^R_h)) v^C_{j,i}

The total KV cache per token becomes (d_c + d^R_h)·l, including the decoupled key.[&#91;7&#93;](#cite_note-shirley-li-7) The shared RoPE key k^R_t is broadcast to all attention heads, adding only 64 dimensions to the cache per token.[&#91;1&#93;](#cite_note-deepseek-v2-1) This architectural decision allows weight matrices for the non-RoPE components to be pre-multiplied and absorbed during inference, eliminating the need to explicitly materialize full key and query matrices. The decoupled RoPE technique enables MLA to be compatible with positional encodings and long-context support.

The positional rotations are applied only to the designated "rope" part of the vectors. This allows the model to efficiently integrate positional information without interfering with the compression and decompression process, preserving the efficiency gains of MLA. The necessity of a specialized solution like Decoupled RoPE highlights an important trend in advanced model design: as individual components become more optimized, they lose their modularity. An efficient attention mechanism like MLA is not a simple "drop-in" replacement for MHA but an architectural shift that can have cascading effects on other parts of the model, such as positional encodings.

### Weight absorption optimization

During inference, MLA avoids expensive full reconstruction of keys and values at every step by computing attention in the latent space when possible. In particular, DeepSeek's implementation uses a "weight absorption" trick: the key up-projection matrix can be merged with the query projection for computing attention scores, so that the dot-product QK^T is effectively calculated in the compressed d_c-dimensional space.[&#91;10&#93;](#cite_note-datacrunch-10) 

MLA enables significant runtime optimization through weight absorption. The model pre-computes merged weight matrices:[&#91;2&#93;](#cite_note-lior-sinai-2)

- For attention scores: W^{KQ} = (W^{UK})^T W^{UQ}

- For value output: W^{OV} = W^O W^{UV}

This allows attention computation as:

- S = (C^{KV})^T W^{KQ} C^Q

- Y = W^{OV} C^{KV} Z

where Z contains attention weights. Concretely, for a query q_i and a cached latent c^{KV}_j from a past token j, the attention score can be written as q_i^T W^{UK} c^{KV}_j^T, which equals (W^{UK}^T q_i)^T c^{KV}_j. The term W^{UK}^T q_i is a transformed query of dimension d_c, so the dot-product now involves two d_c-dimensional vectors instead of the full head dimension d_h.[&#91;10&#93;](#cite_note-datacrunch-10) This optimization means the softmax attention is computed over compressed representations. 

Only after obtaining the attention weights does the model apply them to the full value vectors, which are reconstructed by V_t = c^{KV}_t W^{UV} as needed.[&#91;9&#93;](#cite_note-ml-mastery-9) By minimizing how often the large up-projection is applied, MLA achieves faster inference than a naïve implementation. This reduces memory bandwidth by approximately 32-fold while requiring only a one-time pre-computation of merged weights at model loading.[&#91;2&#93;](#cite_note-lior-sinai-2) In summary, the KV cache stores only compressed vectors, and the model performs most computations in the low-dimensional latent space, decompressing to full per-head values only at the final combination stage.

## Performance characteristics

### Computational efficiency

MLA has been shown to greatly improve memory efficiency and inference speed for large language models. MLA achieves a remarkable transformation in attention mechanics that breaks the traditional performance-efficiency tradeoff. The DeepSeek-V2 [MoE](/wiki/mixture_of_experts) model (236B parameters) demonstrated that using MLA could shrink KV cache storage by **93.3%** and achieve over **5× higher** generation throughput, compared to a baseline with standard attention, while maintaining strong accuracy.[&#91;1&#93;](#cite_note-deepseek-v2-1) DeepSeek-V3, an upgraded model released in 2025, also adopted MLA along with other innovations to enable 128K token context lengths for long-text reasoning.[&#91;7&#93;](#cite_note-shirley-li-7)

Benchmark results demonstrate:[&#91;1&#93;](#cite_note-deepseek-v2-1)

- 7B parameter models with MLA outperform equivalent MHA models by approximately 2%

- DeepSeek-V2 achieves 78.5 on [MMLU](/wiki/mmlu) and 78.9 on [BBH](/index.php?title=BBH&action=edit&redlink=1), compared to 71.3 and 68.7 for the 67B dense predecessor

- Over 50,000 tokens per second generation throughput on 8 H800 GPUs

- 5.76-fold throughput increase over DeepSeek 67B

Empirically, MLA's performance impact is minimal or even positive: it retained model quality better than GQA/MQA alternatives in ablation studies, and DeepSeek reported that adding MLA actually *improved* certain benchmarks relative to their previous model version.[&#91;4&#93;](#cite_note-planetbanatt-4)[&#91;10&#93;](#cite_note-datacrunch-10) Beyond DeepSeek's own models, external researchers have explored applying MLA to other LLMs.

Real-world production benchmarks from [vLLM](/index.php?title=VLLM&action=edit&redlink=1) implementations show 3.4x throughput improvements on 8 H200 GPUs specifically attributable to MLA, with additional 40% gains from [FP8](/index.php?title=FP8&action=edit&redlink=1) quantization optimizations.[&#91;17&#93;](#cite_note-redhat-vllm-17)

| Metric | DeepSeek 67B | DeepSeek-V2 | Improvement |
| --- | --- | --- | --- |
| MMLU score | 71.3 | 78.5 | +7.2 points |
| BBH score | 68.7 | 78.9 | +10.2 points |
| Generation throughput | ~8,700 tps | 50,000+ tps | 5.76x |
| Training GPU hours/trillion tokens | 300,600 | 172,800 | 42.5% reduction |
| Activated parameters | 67B | 21B | 68.7% reduction |

### Arithmetic intensity transformation

Beyond raw throughput, MLA fundamentally changes the computational profile of attention. Traditional attention is **memory-bound**—performance limited by memory bandwidth rather than compute capacity—with an arithmetic intensity around 1 FLOP per byte of memory accessed.[&#91;10&#93;](#cite_note-datacrunch-10)

MLA increases arithmetic intensity to approximately 235 FLOPs per byte at practical sequence lengths, transforming attention into a **compute-bound** operation that fully utilizes GPU tensor cores.[&#91;10&#93;](#cite_note-datacrunch-10) This shift is visible in [roofline analysis](/index.php?title=Roofline_model&action=edit&redlink=1):

- Standard attention achieves only 4-5 teraFLOPs per second regardless of sequence length

- MLA scales to approach the hardware's theoretical maximum of 990 teraFLOPs per second on H200 GPUs[&#91;10&#93;](#cite_note-datacrunch-10)

### Training efficiency

The training efficiency improvements prove equally substantial. DeepSeek-V2 required 172,800 GPU hours per trillion tokens trained, compared to 300,600 hours for DeepSeek 67B—a 42.5% reduction.[&#91;1&#93;](#cite_note-deepseek-v2-1) For the full training run of 8.1 trillion tokens, this translates to real cost savings of millions of dollars.

DeepSeek-V3, with 671B parameters, trained for just 2.788 million H800 GPU hours at an estimated cost of $5.576 million[&#91;12&#93;](#cite_note-deepseek-v3-12)—roughly 100-fold less than the billion-dollar budgets reported for comparable models from major tech companies.

## Comparison with other attention mechanisms

### Evolution from multi-head attention

The lineage from Multi-Head Attention to MLA spans seven years of transformer optimization research:[&#91;4&#93;](#cite_note-planetbanatt-4)

- **2017**: [Multi-Head Attention](/index.php?title=Attention_Is_All_You_Need&action=edit&redlink=1) (MHA) established the standard with separate key-value heads for each query head

- **2019**: [Multi-Query Attention](/index.php?title=Multi-Query_Attention&action=edit&redlink=1) (MQA) reduced memory by using a single shared KV head across all queries[&#91;6&#93;](#cite_note-mqa-6)

- **2023**: [Grouped-Query Attention](/index.php?title=Grouped-Query_Attention&action=edit&redlink=1) (GQA) interpolated between MHA and MQA by grouping query heads[&#91;8&#93;](#cite_note-gqa-8)

- **2024**: Multi-head Latent Attention (MLA) uses low-rank compression while maintaining distinct per-head keys and values

| Mechanism | Cache size per token | Cache size formula | Quality | Typical models |
| --- | --- | --- | --- | --- |
| MHA | 2 × n_h × d_h | 2n_h d_h l | Baseline | GPT-2, GPT-3 |
| MQA | 2 × d_h | 2d_h l | -5 to -10% | PaLM, Falcon |
| GQA | 2 × n_g × d_h | 2n_g d_h l | -1 to -2% | [LLaMA](/wiki/llama)-2, [LLaMA](/wiki/llama)-3, [Mistral](/wiki/mistral_ai) |
| MLA | (d_c + d_h^R) | (d_c + d^R_h)l ≈ 9/2 d_h l | +1 to +2% | [DeepSeek](/wiki/deepseek)-V2, DeepSeek-V3 |

Note: n_h = number of heads; n_g = number of groups; l = number of layers; d_h = head dimension; d_c = compressed latent dimension; d^R_h = decoupled RoPE dimension.

### Comparison with grouped-query attention

MLA achieves cache sizes equivalent to GQA with only 2.25 groups—far more aggressive compression than typically used (GQA models commonly use 8-24 groups). Yet remarkably, MLA demonstrates superior performance to even standard MHA on multiple benchmarks.[&#91;1&#93;](#cite_note-deepseek-v2-1)

Theoretical analysis proves that any GQA configuration can be represented as an MLA configuration with equivalent KV cache overhead, but the reverse is not true—MLA possesses strictly greater expressive power.[&#91;5&#93;](#cite_note-transmla-5) The key difference lies in the mechanism:

- **GQA**: Forces multiple query heads to share identical key-value representations, limiting the diversity of attention patterns

- **MLA**: Uses low-rank compression to preserve distinct keys and values per head reconstructed from a shared compressed representation

The computational trade-offs favor different mechanisms in different regimes. MLA requires approximately 4x more floating-point operations than MHA due to the compression and decompression matrix multiplications.[&#91;2&#93;](#cite_note-lior-sinai-2) However, modern GPU inference is memory-bandwidth-limited, not compute-limited. MLA's reduced memory traffic more than compensates for increased operations at practical sequence lengths of 8K-128K tokens.

## Models implementing MLA

### DeepSeek model family

DeepSeek-AI has deployed MLA across its entire model family since introducing the mechanism:

**DeepSeek-V2** (May 2024)[&#91;1&#93;](#cite_note-deepseek-v2-1)

- 236B total parameters, 21B activated per token

- 128K token context window

- Trained on 8.1 trillion tokens

- First production implementation of MLA

**DeepSeek-V3** (December 2024)[&#91;12&#93;](#cite_note-deepseek-v3-12)

- 671B total parameters, 37B activated per token

- 61 transformer layers with 256 routed experts plus one shared expert

- Trained on 14.8 trillion tokens

- Cost: $5.576 million for training

- Performance matches or exceeds GPT-4 and Claude 3.5 Sonnet

**DeepSeek-R1** (2025)

- Same V3 architecture optimized for reasoning tasks

- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF) training

- Multi-step thought processes

**DeepSeek-V3.2-Exp** (2025)

- Adds DeepSeek Sparse Attention (DSA) on top of MLA

- Fine-grained sparse attention patterns

- Experimental long-context optimizations

### TransMLA conversion framework

The TransMLA framework, published in January 2025 and accepted as a spotlight presentation at [NeurIPS](/index.php?title=NeurIPS&action=edit&redlink=1) 2025, enables retrofitting GQA-based models to use MLA architecture without training from scratch.[&#91;5&#93;](#cite_note-transmla-5) For example, Meng et al. (2025) introduced **TransMLA**, a method to convert Grouped-Query Attention models (such as Llama-2) into MLA-based models. In their experiments, converting a 7B-parameter GQA model to MLA compressed ~93% of the KV cache and yielded a **10.6×** inference speedup at an 8K context length, without significant output quality loss after a brief fine-tuning.[&#91;5&#93;](#cite_note-transmla-5) This highlights MLA's practical benefit for enabling longer contexts and faster generation in resource-constrained deployments.

The conversion process:

1. Restructures attention layers to use low-rank compression

2. Preserves learned representations through techniques like RoRoPE (PCA-based RoPE concentration) and FreqFold (frequency grouping)

3. Fine-tunes on just 6 billion tokens (approximately 3% of original training data)

The framework demonstrates:[&#91;5&#93;](#cite_note-transmla-5)

- 10.6x inference speedup at 8K context length for LLaMA-2-7B

- 93% KV cache compression

- Full compatibility with DeepSeek-optimized inference frameworks

- Support for LLaMA, Qwen, and Mixtral families

| Metric | Original GQA | After MLA conversion |
| --- | --- | --- |
| KV cache size | 100% | 7% |
| Inference throughput (8K context) | 1.0x | 10.6x |
| MMLU score | 45.3 | 45.1 |
| Fine-tuning tokens required | N/A | 6 billion |
| Fine-tuning GPU hours | N/A | 100-200 |

MLA's successful use in DeepSeek and follow-up works suggests that learned latent attention could become a common technique to scale sequence lengths in future [large language models](/wiki/large_language_model). By balancing memory savings with modeling flexibility, multi-head latent attention allows models to handle long sequences more efficiently than standard multi-head attention, without the severe accuracy trade-offs of earlier methods.

## Deployment and applications

### Cloud platforms

Production deployments of MLA-based models span multiple cloud platforms:[&#91;18&#93;](#cite_note-medium-gal-18)

- **Google Cloud Vertex Model Garden**: One-click deployment optimized for GKE environments

- **Alibaba Cloud PAI**: Model Gallery with vLLM or BladeLLM acceleration

- **FireworksAI**: On-demand GPU deployment with multi-token prediction optimizations

### Inference frameworks

The inference framework ecosystem has matured rapidly around MLA:[&#91;17&#93;](#cite_note-redhat-vllm-17)

- **vLLM** (version 0.6.6+): Optimized MLA kernels with FP8 and BF16 precision modes

- **SGLang**: Day-one AMD GPU support alongside NVIDIA

- **LightLLM**: Multi-machine tensor-parallel deployments

PyTorch implementations of MLA are available, such as in Sebastian Raschka's "LLMs-from-Scratch" repository, demonstrating memory savings (for example 75% vs. MHA) and speedups.[&#91;19&#93;](#cite_note-raschka-19)

These frameworks implement specialized operators including broadcasted batched matrix multiplication and weight absorption optimizations critical for realizing MLA's theoretical speedups.

### Production deployment patterns

Production deployment patterns for DeepSeek-V3:[&#91;12&#93;](#cite_note-deepseek-v3-12)

**Prefill operations** (processing input prompts)

- 4 nodes with 32 GPUs

- 4-way tensor parallelism

- 8-way data parallelism

- 32-way expert parallelism

**Decoding operations** (generating output tokens)

- 40 nodes with 320 GPUs

- 320-way expert parallelism

- Dedicated GPUs for redundant and shared experts

- Throughput: Over 50,000 tokens per second

## Limitations and challenges

### Implementation complexity

Despite proven benefits, MLA faces implementation complexity that limits broader adoption:[&#91;2&#93;](#cite_note-lior-sinai-2)

- Requires five matrix multiplications versus three for standard MHA

- Naive implementations without weight absorption may perform slower than optimized MHA

- Particularly challenging on CPU or when processing short sequences below 1,400 tokens

The decoupled RoPE mechanism adds mathematical and implementation complexity. Broadcasting operations for the shared RoPE key across all attention heads require efficient GPU kernels; without proper optimization, virtual replication can introduce performance overhead.[&#91;2&#93;](#cite_note-lior-sinai-2)

### Industry adoption

Major AI companies remain invested in GQA-based architectures despite MLA's demonstrated advantages. OpenAI, Anthropic, Google, and Meta have made no public announcements regarding MLA adoption, likely due to:[&#91;4&#93;](#cite_note-planetbanatt-4)

- Substantial existing infrastructure optimized for GQA

- Custom silicon and kernel libraries

- Distributed training frameworks

- Engineering risk and validation burden for production systems

The TransMLA framework reduces barriers for open-source models, but closed-source developers may wait for hardware vendors to provide native MLA acceleration before investing in migration.[&#91;5&#93;](#cite_note-transmla-5)

### Quality considerations

Quality concerns center on the effects of lossy low-rank compression on specific capabilities. While aggregate benchmark scores match or exceed MHA, detailed ablation studies directly comparing MLA and GQA at equivalent cache sizes remain limited.[&#91;4&#93;](#cite_note-planetbanatt-4)

Some researchers note that training perplexity occasionally shows slight degradation with MLA, though this could indicate beneficial regularization rather than harmful information loss. The optimal compression ratio remains an open hyperparameter requiring empirical tuning per model architecture and scale. There is a theoretical risk that important, fine-grained information could be lost during the down-projection to the latent space. The performance of the model becomes dependent on the choice of the latent dimension d_c, which is a critical hyperparameter balancing compression ratio and information fidelity.[&#91;9&#93;](#cite_note-ml-mastery-9)[&#91;4&#93;](#cite_note-planetbanatt-4)

### Training and adoption challenges

MLA is an architectural feature that must be incorporated during a model's pre-training. Converting an existing model pre-trained with MHA or GQA to use MLA is a non-trivial task that can lead to a significant drop in performance without extensive fine-tuning.[&#91;5&#93;](#cite_note-transmla-5) This creates a significant "path dependency" and a barrier to adoption, as organizations with large investments in existing GQA-based models may be hesitant to retrain them from scratch. The development of post-training conversion methods like TransMLA is a direct response to this challenge.[&#91;5&#93;](#cite_note-transmla-5)

## Theoretical foundations

### Low-rank factorization

MLA's low-rank factorization approach builds on decades of research into matrix compression and efficient neural architectures. The key insight is that the key-value matrices in transformer attention, while high-dimensional, can be well-approximated through a compressed bottleneck without significant information loss.[&#91;1&#93;](#cite_note-deepseek-v2-1) This compression is applied jointly to keys and values, making MLA particularly effective for [Mixture-of-Experts](/index.php?title=Mixture-of-Experts&action=edit&redlink=1) (MoE) models like DeepSeek-V2, which has 236B total parameters but activates only 21B per token.

The technique is rooted in matrix approximation methods like singular value decomposition (SVD), where a matrix M ∈ ℝ^(n×m) is approximated as M ≈ UV with U ∈ ℝ^(n×r), V ∈ ℝ^(r×m), and r ≪ n, m.[&#91;9&#93;](#cite_note-ml-mastery-9)

Mathematical analysis proves that for any GQA configuration with n_g groups, there exists an MLA configuration with equivalent or smaller KV cache that can represent the same function class. Conversely, MLA can express attention patterns impossible for GQA to represent, establishing strict theoretical superiority in modeling capacity.[&#91;5&#93;](#cite_note-transmla-5)

### Expressive power

The expressive power advantage stems from MLA's ability to reconstruct distinct keys and values for each attention head from the shared latent representation. While GQA forces heads to share identical KV matrices, MLA's per-head up-projection matrices W^{UK}_i and W^{UV}_i enable each head to extract different information from the compressed representation.[&#91;1&#93;](#cite_note-deepseek-v2-1)

This architectural choice preserves the diversity of attention patterns that makes multi-head attention effective while dramatically reducing the cached information. The compression bottleneck may provide regularization that prevents overfitting to spurious correlations in attention patterns.[&#91;1&#93;](#cite_note-deepseek-v2-1)

Theoretical proofs in TransMLA show MLA's superior expressive power over GQA under equivalent KV overhead, as any GQA layer can be expressed as MLA, but not vice versa.[&#91;5&#93;](#cite_note-transmla-5)

## Future directions

### Hardware optimization

Hardware optimization represents a critical frontier for MLA adoption. The DeepSeek technical reports explicitly request hardware features:[&#91;12&#93;](#cite_note-deepseek-v3-12)

- Communication offload processors for all-to-all operations

- Native tile-wise and block-wise quantization support in tensor cores

- Higher FP8 accumulation precision for fine-grained mixed precision

- Near-memory computing for quantization operations

- Efficient transposed GEMM operations

### Alternative architectures

Alternative attention architectures continue to emerge:[&#91;15&#93;](#cite_note-medium-karl-15)

- **Tensor Product Attention** (TPA): Unifies MHA, MQA, and GQA as special cases

- **DeepSeek Sparse Attention** (DSA): Layers fine-grained sparsity on top of MLA in DeepSeek-V3.2-Exp

- **Hybrid architectures**: Different attention mechanisms for different layers

Subsequent works include optimizations for economical inference and integrations with sparse attention.[&#91;20&#93;](#cite_note-economical-20)[&#91;21&#93;](#cite_note-deepseek-exp-21)

### Research directions

The TransMLA framework roadmap includes:[&#91;5&#93;](#cite_note-transmla-5)

- Extending support to Gemma2 and other model families

- Exploring variants like Gated Linear Attention (GLA)

- Developing MLA-specific inference acceleration strategies

- Investigating optimal compression ratios for different scales

- Releasing converted model checkpoints

### Democratization implications

MLA enables researchers and small organizations to train frontier-scale models within constrained budgets, breaking the monopoly on cutting-edge AI held by the wealthiest technology companies.[&#91;12&#93;](#cite_note-deepseek-v3-12) This accessibility may accelerate innovation by diversifying the pool of researchers working on fundamental questions in large language model development and deployment.

## Related concepts

The term "latent attention" is used in different contexts, and it is important to distinguish MLA from other mechanisms that use similar terminology.

### Perceiver: Iterative latent attention

The [Perceiver](/index.php?title=Perceiver&action=edit&redlink=1) architecture, introduced by [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1), also uses a "latent array" and an attention bottleneck.[&#91;22&#93;](#cite_note-perceiver-22) However, its purpose is fundamentally different. The Perceiver is designed to handle extremely high-dimensional and multi-modal inputs (such as images, audio, and point clouds) that are too large for a standard Transformer. It uses an asymmetric [cross-attention](/index.php?title=Cross-attention&action=edit&redlink=1) mechanism where a small, fixed-size latent array iteratively "queries" the massive input data to distill it into a manageable representation.[&#91;22&#93;](#cite_note-perceiver-22)

The bottleneck in the Perceiver serves to decouple the network's depth from the input's size, solving a problem at the input encoding stage. In contrast, MLA's latent vector is a mechanism for compressing the internal KV cache to improve inference efficiency for standard sequential data, addressing a bottleneck in the model's state management during generation.

### Low-Rank Adaptation (LoRA)

[Low-Rank Adaptation](/index.php?title=Low-Rank_Adaptation&action=edit&redlink=1) (LoRA) is a popular technique for parameter-efficient fine-tuning (PEFT) of large models. LoRA also uses low-rank matrix decomposition, but for a different purpose.[&#91;23&#93;](#cite_note-lora-23) It freezes the large, pre-trained weight matrices of a model and injects small, trainable low-rank "adapter" matrices alongside them. During fine-tuning, only these small adapters are updated, dramatically reducing the number of trainable parameters.[&#91;24&#93;](#cite_note-lora-mla-24)

MLA, on the other hand, uses low-rank decomposition as a permanent, integral part of the model's core architecture to optimize inference, not as a temporary adapter for efficient training. MLA draws from low-rank adaptations like LoRA and efficient attention variants.[&#91;23&#93;](#cite_note-lora-23)

## See also

- [Attention mechanism](/index.php?title=Attention_mechanism&action=edit&redlink=1)

- [Attention (machine learning)](/index.php?title=Attention_(machine_learning)&action=edit&redlink=1)

- [Transformer (machine learning)](/index.php?title=Transformer_(machine_learning)&action=edit&redlink=1)

- [Multi-head attention](/index.php?title=Multi-head_attention&action=edit&redlink=1)

- [Grouped-query attention](/index.php?title=Grouped-query_attention&action=edit&redlink=1)

- [Multi-query attention](/index.php?title=Multi-query_attention&action=edit&redlink=1)

- [DeepSeek](/wiki/deepseek)

- [Key-value cache](/index.php?title=Key-value_cache&action=edit&redlink=1)

- [Mixture of experts](/wiki/mixture_of_experts)

- [Large language model](/wiki/large_language_model)

- [Rotary positional encoding](/index.php?title=Rotary_positional_encoding&action=edit&redlink=1)

- [Low-rank adaptation](/wiki/low-rank_adaptation)

- [Perceiver](/index.php?title=Perceiver&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-deepseek-v2_1-0) [1.01](#cite_ref-deepseek-v2_1-1) [1.02](#cite_ref-deepseek-v2_1-2) [1.03](#cite_ref-deepseek-v2_1-3) [1.04](#cite_ref-deepseek-v2_1-4) [1.05](#cite_ref-deepseek-v2_1-5) [1.06](#cite_ref-deepseek-v2_1-6) [1.07](#cite_ref-deepseek-v2_1-7) [1.08](#cite_ref-deepseek-v2_1-8) [1.09](#cite_ref-deepseek-v2_1-9) [1.10](#cite_ref-deepseek-v2_1-10) [1.11](#cite_ref-deepseek-v2_1-11) [1.12](#cite_ref-deepseek-v2_1-12) [1.13](#cite_ref-deepseek-v2_1-13) [1.14](#cite_ref-deepseek-v2_1-14) [1.15](#cite_ref-deepseek-v2_1-15) [1.16](#cite_ref-deepseek-v2_1-16) [1.17](#cite_ref-deepseek-v2_1-17) [1.18](#cite_ref-deepseek-v2_1-18) [1.19](#cite_ref-deepseek-v2_1-19) DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model. DeepSeek-AI, May 2024. [https://arxiv.org/abs/2405.04434](https://arxiv.org/abs/2405.04434)

2. ↑ [2.0](#cite_ref-lior-sinai_2-0) [2.1](#cite_ref-lior-sinai_2-1) [2.2](#cite_ref-lior-sinai_2-2) [2.3](#cite_ref-lior-sinai_2-3) [2.4](#cite_ref-lior-sinai_2-4) [2.5](#cite_ref-lior-sinai_2-5) [2.6](#cite_ref-lior-sinai_2-6) DeepSeek's Multi-Head Latent Attention. Lior Sinai, February 2025. [https://liorsinai.github.io/machine-learning/2025/02/22/mla.html](https://liorsinai.github.io/machine-learning/2025/02/22/mla.html)

3. ↑ [3.0](#cite_ref-attention-paper_3-0) [3.1](#cite_ref-attention-paper_3-1) Attention Is All You Need. Vaswani, Ashish, et al., 2017. [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

4. ↑ [4.00](#cite_ref-planetbanatt_4-0) [4.01](#cite_ref-planetbanatt_4-1) [4.02](#cite_ref-planetbanatt_4-2) [4.03](#cite_ref-planetbanatt_4-3) [4.04](#cite_ref-planetbanatt_4-4) [4.05](#cite_ref-planetbanatt_4-5) [4.06](#cite_ref-planetbanatt_4-6) [4.07](#cite_ref-planetbanatt_4-7) [4.08](#cite_ref-planetbanatt_4-8) [4.09](#cite_ref-planetbanatt_4-9) [4.10](#cite_ref-planetbanatt_4-10) [4.11](#cite_ref-planetbanatt_4-11) Understanding Multi-Head Latent Attention. Planet Banatt. [https://planetbanatt.net/articles/mla.html](https://planetbanatt.net/articles/mla.html)

5. ↑ [5.00](#cite_ref-transmla_5-0) [5.01](#cite_ref-transmla_5-1) [5.02](#cite_ref-transmla_5-2) [5.03](#cite_ref-transmla_5-3) [5.04](#cite_ref-transmla_5-4) [5.05](#cite_ref-transmla_5-5) [5.06](#cite_ref-transmla_5-6) [5.07](#cite_ref-transmla_5-7) [5.08](#cite_ref-transmla_5-8) [5.09](#cite_ref-transmla_5-9) [5.10](#cite_ref-transmla_5-10) [5.11](#cite_ref-transmla_5-11) TransMLA: Multi-head Latent Attention Is All You Need. Fanxu Meng, Pingzhi Tang, et al., January 2025. [https://arxiv.org/abs/2502.07864](https://arxiv.org/abs/2502.07864)

6. ↑ [6.0](#cite_ref-mqa_6-0) [6.1](#cite_ref-mqa_6-1) [6.2](#cite_ref-mqa_6-2) Fast Transformer Decoding: One Write-Head is All You Need. Noam Shazeer, 2019. [https://arxiv.org/abs/1911.02150](https://arxiv.org/abs/1911.02150)

7. ↑ [7.0](#cite_ref-shirley-li_7-0) [7.1](#cite_ref-shirley-li_7-1) [7.2](#cite_ref-shirley-li_7-2) [7.3](#cite_ref-shirley-li_7-3) [7.4](#cite_ref-shirley-li_7-4) [7.5](#cite_ref-shirley-li_7-5) [7.6](#cite_ref-shirley-li_7-6) [7.7](#cite_ref-shirley-li_7-7) [7.8](#cite_ref-shirley-li_7-8) [7.9](#cite_ref-shirley-li_7-9) DeepSeek V3 Explained: (1) Multi-Head Latent Attention. Shirley Li, Medium, January 2025. [https://medium.com/data-science/deepseek-v3-explained-1-multi-head-latent-attention-ed6bee2a67c4](https://medium.com/data-science/deepseek-v3-explained-1-multi-head-latent-attention-ed6bee2a67c4)

8. ↑ [8.0](#cite_ref-gqa_8-0) [8.1](#cite_ref-gqa_8-1) [8.2](#cite_ref-gqa_8-2) GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints. Josh Ainslie et al., 2023. [https://arxiv.org/abs/2305.13245](https://arxiv.org/abs/2305.13245)

9. ↑ [9.0](#cite_ref-ml-mastery_9-0) [9.1](#cite_ref-ml-mastery_9-1) [9.2](#cite_ref-ml-mastery_9-2) [9.3](#cite_ref-ml-mastery_9-3) [9.4](#cite_ref-ml-mastery_9-4) [9.5](#cite_ref-ml-mastery_9-5) [9.6](#cite_ref-ml-mastery_9-6) [9.7](#cite_ref-ml-mastery_9-7) A Gentle Introduction to Multi-Head Latent Attention (MLA). Adrian Tam, Machine Learning Mastery, September 2025. [https://machinelearningmastery.com/a-gentle-introduction-to-multi-head-latent-attention-mla/](https://machinelearningmastery.com/a-gentle-introduction-to-multi-head-latent-attention-mla/)

10. ↑ [10.0](#cite_ref-datacrunch_10-0) [10.1](#cite_ref-datacrunch_10-1) [10.2](#cite_ref-datacrunch_10-2) [10.3](#cite_ref-datacrunch_10-3) [10.4](#cite_ref-datacrunch_10-4) [10.5](#cite_ref-datacrunch_10-5) [10.6](#cite_ref-datacrunch_10-6) [10.7](#cite_ref-datacrunch_10-7) Multi-Head Latent Attention: Benefits in Memory and Computation. DataCrunch. [https://datacrunch.io/blog/multi-head-latent-attention-benefits-in-memory-and-computation](https://datacrunch.io/blog/multi-head-latent-attention-benefits-in-memory-and-computation)

11. [↑](#cite_ref-hardware-centric_11-0) Hardware-Centric Analysis of DeepSeek's Multi-Head Latent Attention. Robin Geens and Marian Verhelst, June 2025. [https://arxiv.org/abs/2506.02523](https://arxiv.org/abs/2506.02523)

12. ↑ [12.0](#cite_ref-deepseek-v3_12-0) [12.1](#cite_ref-deepseek-v3_12-1) [12.2](#cite_ref-deepseek-v3_12-2) [12.3](#cite_ref-deepseek-v3_12-3) [12.4](#cite_ref-deepseek-v3_12-4) [12.5](#cite_ref-deepseek-v3_12-5) DeepSeek-V3 Technical Report. DeepSeek-AI, December 2024. [https://arxiv.org/pdf/2412.19437](https://arxiv.org/pdf/2412.19437)

13. [↑](#cite_ref-flash-attention_13-0) FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)

14. [↑](#cite_ref-rope-paper_14-0) RoFormer: Enhanced Transformer with Rotary Position Embedding. [https://arxiv.org/abs/2104.09864](https://arxiv.org/abs/2104.09864)

15. ↑ [15.0](#cite_ref-medium-karl_15-0) [15.1](#cite_ref-medium-karl_15-1) [15.2](#cite_ref-medium-karl_15-2) Attention Evolved: How Multi-Head Latent Attention Works. Karl Weinmeister, Medium, August 2025. [https://medium.com/google-cloud/attention-evolved-how-multi-head-latent-attention-works-427a922dd6a1](https://medium.com/google-cloud/attention-evolved-how-multi-head-latent-attention-works-427a922dd6a1)

16. [↑](#cite_ref-rope-incompatibility_16-0) DeepSeek's Multi-Head Latent Attention (MLA). Sulbha Jindal, Medium, June 2024. [https://medium.com/@sulbha.jindal/deepseeks-multi-head-latent-attention-mla-00771d802ae8](https://medium.com/@sulbha.jindal/deepseeks-multi-head-latent-attention-mla-00771d802ae8)

17. ↑ [17.0](#cite_ref-redhat-vllm_17-0) [17.1](#cite_ref-redhat-vllm_17-1) Enhancing DeepSeek models with MLA and FP8 optimizations in vLLM. Red Hat. [https://www.redhat.com/en/blog/enhancing-deepseek-models-mla-and-fp8-optimizations-vllm](https://www.redhat.com/en/blog/enhancing-deepseek-models-mla-and-fp8-optimizations-vllm)

18. [↑](#cite_ref-medium-gal_18-0) DeepSeek-V3 (and R1!) Architecture. Gal Hyams, Medium. [https://medium.com/@galhyams/deepseek-v3-and-r1-architecture-5e5ae796c7a9](https://medium.com/@galhyams/deepseek-v3-and-r1-architecture-5e5ae796c7a9)

19. [↑](#cite_ref-raschka_19-0) Multi-Head Latent Attention (MLA). Sebastian Raschka. [https://sebastianraschka.com/llms-from-scratch/ch04/05_mla/](https://sebastianraschka.com/llms-from-scratch/ch04/05_mla/)

20. [↑](#cite_ref-economical_20-0) Towards Economical Inference: Enabling DeepSeek's Multi-Head Latent Attention on Consumer-Grade GPUs. [https://arxiv.org/abs/2502.14837](https://arxiv.org/abs/2502.14837)

21. [↑](#cite_ref-deepseek-exp_21-0) Introducing DeepSeek-V3.2-Exp. DeepSeek API Documentation. [https://api-docs.deepseek.com/news/news250929](https://api-docs.deepseek.com/news/news250929)

22. ↑ [22.0](#cite_ref-perceiver_22-0) [22.1](#cite_ref-perceiver_22-1) Perceiver: General Perception with Iterative Attention. Andrew Jaegle et al., March 2021. [https://arxiv.org/abs/2103.03206](https://arxiv.org/abs/2103.03206)

23. ↑ [23.0](#cite_ref-lora_23-0) [23.1](#cite_ref-lora_23-1) LoRA: Low-Rank Adaptation of Large Language Models. [https://arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685)

24. [↑](#cite_ref-lora-mla_24-0) DeepSeek's Multi-Head Latent Attention. Lior Sinai, February 2025. [https://liorsinai.github.io/machine-learning/2025/02/22/mla.html](https://liorsinai.github.io/machine-learning/2025/02/22/mla.html)