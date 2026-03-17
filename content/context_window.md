---
title: "Context window"
slug: "context_window"
categories:
  - "Natural_language_processing"
  - "Large_language_models"
  - "Artificial_intelligence"
  - "Machine_learning"
  - "Deep_learning"
---In the field of [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1) ([LLMs](/wiki/llm)), a **context window** (also called **context length**) refers to the maximum number of [tokens](/wiki/tokens) that an [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)) model can process and respond to simultaneously during both training and [inference](/wiki/inference).[&#91;1&#93;](#cite_note-ibm1-1)[&#91;2&#93;](#cite_note-mckinsey1-2) The context window determines the span of information an AI model can consider—its "working memory"—when generating responses, analyzing documents, or performing complex reasoning tasks. It defines how much of a conversation or document the model can use as context before earlier parts are "forgotten" by the model.[&#91;1&#93;](#cite_note-ibm1-1)

Since the introduction of [GPT-1](/wiki/gpt-1) with 512 tokens in 2018, context windows have grown exponentially to over 10 million tokens in specialized models like [Meta](/wiki/meta)'s [Llama](/index.php?title=Llama&action=edit&redlink=1) 4 Scout, fundamentally transforming the capabilities of artificial intelligence systems.[&#91;3&#93;](#cite_note-llama4-3) This rapid expansion—representing a roughly 20,000x increase in seven years—has unlocked applications previously impossible, from analyzing entire legal case files to understanding massive codebases and synthesizing extensive research literature in a single session.

## Fundamental Concepts

### Definition and Core Mechanics

A context window functions as a [large language model](/wiki/large_language_model)'s working memory—the maximum number of tokens the model can process simultaneously. Unlike human memory, which can selectively recall information from across a lifetime, [transformer](/wiki/transformer)-based models operate on a fixed window: when input exceeds this limit, older information must be truncated or the model fails to process the request.[&#91;1&#93;](#cite_note-ibm1-1)

The context window encompasses both input and output tokens. For instance, [OpenAI](/wiki/openai)'s [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) has a 128,000-token context window but limits output generation to 16,384 tokens, meaning the total conversation history plus the model's response cannot exceed 128,000 tokens.[&#91;4&#93;](#cite_note-openai_community1-4) This distinction between total context capacity and maximum output length has important practical implications for application design.

LLMs process text using fixed-size context windows with a **sliding window** approach. As new tokens are fed in (for example, as a conversation progresses), older tokens eventually fall outside the window and are no longer consulted by the model's attention mechanism.[&#91;5&#93;](#cite_note-wiki_transformer-5) This can cause models to lose track of earlier details—a chatbot may go off-topic or contradict something from earlier once that information slips out of context.

Smaller context windows lead models to "forget" the content of recent conversations, which can cause them to go off topic. After a few thousand words, they may forget their initial instructions, leading to responses based only on the last information in their context window.[&#91;6&#93;](#cite_note-wiggers1-6)

### Tokenization: The Foundation of Context

[Tokens](/wiki/tokens) form the fundamental units that models process, and understanding [tokenization](/index.php?title=Tokenization&action=edit&redlink=1) is essential to grasping context window limitations. **A token does not equal a word**—it represents the smallest meaningful unit a model recognizes, which can be a complete word, a subword fragment, punctuation, or even a single character.[&#91;7&#93;](#cite_note-hf1-7) In English, the approximate ratio is 1.5 tokens per word, meaning "Hello, world!" might consume 3-4 tokens rather than 2.

#### Major Tokenization Algorithms

**[Byte-Pair Encoding](/index.php?title=Byte-Pair_Encoding&action=edit&redlink=1) (BPE)**, originally a compression algorithm adapted for [NLP](/wiki/nlp) by Sennrich et al. in 2016, forms the backbone of models like [GPT-2](/wiki/gpt-2), [GPT-3](/wiki/gpt-3), and [GPT-4](/wiki/gpt-4).[&#91;8&#93;](#cite_note-hf2-8) BPE begins with individual characters as its vocabulary and iteratively merges the most frequent adjacent character pairs into new tokens until reaching a predefined vocabulary size (typically 32,000-50,000 tokens). This approach balances vocabulary size against the ability to represent any text, including rare words or neologisms.

**Byte-Level BPE**, used by GPT-2 and successors, operates on raw UTF-8 bytes rather than characters, guaranteeing that any Unicode character can be represented using just 256 base tokens. This innovation eliminates "unknown" tokens entirely while maintaining a manageable vocabulary size.[&#91;8&#93;](#cite_note-hf2-8)

**[WordPiece](/index.php?title=WordPiece&action=edit&redlink=1)**, developed by Google and used in [BERT](/wiki/bert) and related models, employs a likelihood-based merging criterion. Rather than simply choosing the most frequent pair, WordPiece selects merges that maximize the probability of the training data, often producing more semantically meaningful subword units.[&#91;9&#93;](#cite_note-hf3-9)

**[Unigram](/index.php?title=Unigram&action=edit&redlink=1)**, implemented in models like [XLNet](/index.php?title=XLNet&action=edit&redlink=1) and [ALBERT](/index.php?title=ALBERT&action=edit&redlink=1), reverses the BPE approach. It starts with a massive vocabulary of all possible substrings and progressively removes tokens that contribute least to the likelihood of the training corpus, ultimately retaining only the most informative units.[&#91;8&#93;](#cite_note-hf2-8)

**[SentencePiece](/index.php?title=SentencePiece&action=edit&redlink=1)**, a language-agnostic tokenizer used in [T5](/index.php?title=T5&action=edit&redlink=1), XLNet, and modern multilingual models, treats input as a raw stream of Unicode characters (including spaces) rather than pre-tokenized words.[&#91;10&#93;](#cite_note-hf4-10) This design proves critical for languages without explicit word boundaries, such as Chinese, Japanese, and Thai, where traditional tokenization fails.

#### Language Bias in Tokenization

Tokenization efficiency varies dramatically across languages, creating significant inequities in context window utilization. Research demonstrates that the same sentence translated into Telugu requires approximately 7 times more tokens than its English equivalent despite having fewer characters.[&#91;1&#93;](#cite_note-ibm1-1) English speakers can effectively fit 2-3 times more semantic content into the same context window compared to speakers of many Asian and African languages. This bias stems from training data composition—models trained predominantly on English text develop tokenizers optimized for English morphology and character patterns.

### The Attention Mechanism

At the heart of context windows lies the **[self-attention mechanism](/index.php?title=Self-attention_mechanism&action=edit&redlink=1)**, introduced in the landmark 2017 paper "[Attention Is All You Need](/index.php?title=Attention_Is_All_You_Need&action=edit&redlink=1)" by Vaswani et al.[&#91;11&#93;](#cite_note-wiki_attention-11) This mechanism, which has accumulated over 173,000 citations, fundamentally changed how neural networks process sequential data.

#### Self-Attention Mathematics

Self-attention allows each token to weigh the relevance of every other token in the sequence. For each token, the model computes three vectors through learned linear transformations:

- **Query (Q)**: Represents what the current token is looking for

- **Key (K)**: Represents what each token offers

- **Value (V)**: Represents the actual information each token contains

The attention output is computed as:[&#91;12&#93;](#cite_note-ibm2-12)

`Attention(Q, K, V) = softmax(QK^T / √d_k) × V`

Where d_k is the dimension of the key vectors. The scaling factor √d_k prevents the dot products from growing too large, which would push the softmax function into regions with extremely small gradients, hampering learning.

#### Multi-Head Attention

Rather than performing attention once, transformer models split the Q, K, and V matrices into multiple "heads" (typically 8-32), each learning different relationships.[&#91;5&#93;](#cite_note-wiki_transformer-5) For example, one attention head might focus on syntactic dependencies while another captures semantic relationships or long-range coreference. The outputs of all heads are concatenated and projected through a final linear layer.

Original transformer specifications used 512-dimensional embeddings split across 8 heads, giving each head 64 dimensions. Modern large language models often use far larger dimensions (4096-8192) with proportionally more heads.

## Computational Complexity and Scaling Challenges

### The Quadratic Barrier

The most fundamental limitation of context windows stems from self-attention's **O(n²) computational complexity** with respect to sequence length n.[&#91;13&#93;](#cite_note-arxiv_complexity-13) When computing attention, each token must attend to every other token, creating an n×n attention matrix. Doubling the sequence length quadruples memory requirements and computational cost.

For a concrete example: processing 1,000 tokens requires 1 million attention computations, while processing 10,000 tokens requires 100 million—a 100-fold increase for a 10-fold increase in context. This quadratic scaling creates severe bottlenecks as context windows expand.

#### Mathematical Foundations

Google researchers (Duman Keles et al., 2023) proved that self-attention time complexity is **necessarily quadratic** unless the Strong Exponential Time Hypothesis (SETH) is false—a fundamental result in computational complexity theory.[&#91;13&#93;](#cite_note-arxiv_complexity-13) This means no algorithmic trick can reduce attention to linear time without sacrificing the full expressivity of standard attention or making implausible assumptions about computational hardness.

The memory complexity presents an even more pressing constraint. Modern GPUs are memory-bandwidth-bound rather than compute-bound, meaning data transfer between GPU memory levels (SRAM, HBM, system RAM) becomes the bottleneck.[&#91;14&#93;](#cite_note-flashattention1-14) Standard attention constantly moves the large n×n attention matrix between fast on-chip SRAM (~20MB capacity) and slower High Bandwidth Memory (~40-80GB), creating severe inefficiencies.

### Scaling Requirements

For large-scale models processing long sequences, the [KV cache](/index.php?title=KV_cache&action=edit&redlink=1) (key-value pairs stored for each token) requires substantial memory. Modern production systems typically require **approximately 1MB per token** of GPU memory for the KV cache alone, excluding model parameters and activation memory.[&#91;15&#93;](#cite_note-tds1-15)

When context windows extend to 128,000 tokens, memory requirements increase dramatically. Without optimizations, moving from a 4,000-token to a 128,000-token context window increases memory needs substantially—approaching the square of the length increase due to the quadratic attention complexity.[&#91;12&#93;](#cite_note-ibm2-12)

## Historical Evolution of Context Windows

| Year | Model | Context Window | Notes |
| --- | --- | --- | --- |
| 2018 | [GPT-1](/wiki/gpt-1) | 512 tokens | First GPT model |
| 2018 | [BERT](/wiki/bert) | 512 tokens | Bidirectional encoder |
| 2019 | [GPT-2](/wiki/gpt-2) | 1,024 tokens | Doubled context |
| 2020 | [GPT-3](/wiki/gpt-3) | 2,048 tokens | 175B parameters |
| 2022 | [ChatGPT](/wiki/chatgpt) (GPT-3.5) | 4,096 tokens | Initial release |
| 2023 | [GPT-3.5-Turbo-16K](/index.php?title=GPT-3.5-Turbo-16K&action=edit&redlink=1) | 16,384 tokens | 4x increase |
| 2023 | [GPT-4](/wiki/gpt-4) | 8,192 / 32,768 tokens | Two variants |
| 2023 | [Claude](/wiki/claude) 2 | 100,000 tokens | First 100K model |
| 2023 | [Claude 2.1](/index.php?title=Claude_2.1&action=edit&redlink=1) | 200,000 tokens | Industry milestone |
| 2023 | [GPT-4 Turbo](/index.php?title=GPT-4_Turbo&action=edit&redlink=1) | 128,000 tokens | Major expansion |
| 2024 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 1.5 Pro | 1,000,000 tokens | Million-token milestone |
| 2024 | [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | 2,000,000 tokens | Extended further |
| 2024 | [Llama 3](/index.php?title=Llama_3&action=edit&redlink=1) | 8,192 tokens | Open source |
| 2024 | [Llama 3.1](/index.php?title=Llama_3.1&action=edit&redlink=1) | 128,000 tokens | 16x increase |
| 2025 | [GPT-4.1](/index.php?title=GPT-4.1&action=edit&redlink=1) | ~1,000,000 tokens | API release |
| 2025 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) | 256,000 tokens (API) | Latest flagship |
| 2025 | [Claude Sonnet 4.5](/wiki/claude_sonnet_4_5) | 200,000 / 1,000,000 tokens | Beta extended context |
| 2025 | [Llama 4](/index.php?title=Llama_4&action=edit&redlink=1) Scout | 10,000,000 tokens | Open source record |
| 2025 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro | ~1,000,000 tokens | Current generation |

### Early Era: 2018-2020

**GPT-1** (June 2018), OpenAI's first Generative Pre-trained Transformer, launched with a modest **512-token context window**—roughly 350-400 words or about one page of text.[&#91;16&#93;](#cite_note-wiki_gpt3-16) This marked the beginning of the transformer's dominance in language modeling, though the limited context constrained practical applications.

**BERT** (October 2018), Google's bidirectional encoder model, maintained the same **512-token limit** but processed context differently.[&#91;17&#93;](#cite_note-wiki_bert-17) Unlike GPT's left-to-right generation, BERT considered both preceding and following context simultaneously, proving highly effective for classification and information extraction tasks within its limited window.

**GPT-2** (February 2019) doubled the context to **1,024 tokens**, a seemingly modest improvement that expanded the model's ability to maintain narrative coherence. With 1.5 billion parameters, GPT-2 demonstrated unprecedented text generation quality.

**GPT-3** (June 11, 2020) doubled context again to **2,048 tokens**—equivalent to approximately 1,500 words or 3-4 pages.[&#91;16&#93;](#cite_note-wiki_gpt3-16) With 175 billion parameters, GPT-3 demonstrated remarkable few-shot learning capabilities, establishing new benchmarks for in-context learning.

### Rapid Expansion: 2022-2023

**GPT-3.5-Turbo** (November 2022), the model powering ChatGPT's initial release, featured a **4,096-token context window**, enabling conversations spanning approximately 3,000 words.[&#91;1&#93;](#cite_note-ibm1-1) This represented a significant milestone as it brought conversational AI to mainstream audiences.

**GPT-3.5-Turbo-16K** (June 2023) achieved a **16,384-token context window**—equivalent to roughly 20 pages of text.[&#91;18&#93;](#cite_note-humanfirst1-18) This expansion enabled processing of much longer documents and extended conversations.

**GPT-4** (March 14, 2023) launched with two variants: an **8,192-token** standard model and a **32,768-token** extended version (GPT-4-32k).[&#91;19&#93;](#cite_note-techtarget1-19) The 32K version could handle about 25,000 words of text (around 50 pages), enabling use cases such as analyzing lengthy documents.

**Claude 2** (July 2023), from [Anthropic](/wiki/anthropic), achieved a breakthrough **100,000-token context window**—roughly 75,000 words or 300 pages.[&#91;20&#93;](#cite_note-anthropic1-20) This represented an 11x increase over Claude 1's 9,000-token window and marked the first time a production model could process entire books. Anthropic demonstrated this capability by having Claude read the full text of *The Great Gatsby* (~72K tokens) and identify a single altered sentence, which it successfully did in under 22 seconds.

**Claude 2.1** (November 21, 2023) doubled this achievement to **200,000 tokens** (150,000 words or 500+ pages).[&#91;21&#93;](#cite_note-anthropic2-21) This capacity allowed Claude to digest and explain dense financial reports, compare themes across legal contracts, or sift through thousands of lines of code for debugging assistance.

**GPT-4 Turbo** (November 6, 2023) countered with a **128,000-token context window**—equivalent to roughly 300 pages of text or 96,000 words.[&#91;22&#93;](#cite_note-openai_turbo-22) This represented OpenAI's most significant context expansion to date.

### The Million-Token Milestone: 2024

**Gemini 1.5 Pro** (February 15, 2024) shattered previous records with a **1,000,000-token context window**—a 5x leap capable of processing approximately 700,000 words, 11 hours of audio, or 1 hour of video.[&#91;23&#93;](#cite_note-google2-23) The model utilized a [Mixture-of-Experts](/index.php?title=Mixture-of-Experts&action=edit&redlink=1) (MoE) architecture, activating only a subset of parameters per input token, which helped manage computational costs.

**Gemini 1.5 Pro - 2 Million Tokens** (June 27, 2024) extended the context to **2,000,000 tokens**—equivalent to approximately 1.4 million words, 22 hours of audio, or 2 hours of video.[&#91;24&#93;](#cite_note-google3-24) This represented the largest commercially available context window at the time.

**Meta's Llama Family** progressed rapidly:

- **Llama 2** (July 2023): 4,096 tokens

- **Llama 3** (April 2024): 8,192 tokens

- **Llama 3.1** (July 2024): 128,000 tokens—a 16x jump[&#91;25&#93;](#cite_note-meta1-25)

**Mistral AI's Evolution**:

- **Mistral 7B** (September 2023): 4,096 tokens with sliding window attention

- **Mistral Large 2** (July 2024): 128,000 tokens with 123 billion parameters[&#91;26&#93;](#cite_note-mistral1-26)

**Cohere's Command Models** (2024) featured **Command R** and **Command R+**, both with **128,000-token context windows** optimized for [retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG).[&#91;27&#93;](#cite_note-cohere1-27)

### Specialized Models Push Boundaries: 2025

**GPT-4.1** (April 2025) features **approximately 1 million tokens** of context—described officially as supporting "up to 1 million tokens of context."[&#91;28&#93;](#cite_note-openai_gpt41-28) All three models in the GPT-4.1 family (GPT-4.1, GPT-4.1 mini, and GPT-4.1 nano) share this context window capacity. The models show significant improvements in coding performance, scoring 54.6% on SWE-bench Verified, and demonstrate enhanced long-context comprehension capabilities.

**GPT-5** (August 2025) represents OpenAI's latest flagship model with a **256,000-token context window** available via API, with some sources indicating up to 400,000 total tokens (272,000 input + 128,000 output).[&#91;29&#93;](#cite_note-openai_gpt5-29)[&#91;30&#93;](#cite_note-9to5mac_gpt5-30) GPT-5 unifies advanced reasoning with general-purpose capabilities and features an intelligent router that automatically determines the appropriate amount of "thinking" needed for each query.

**Claude Sonnet 4.5** (September 2025) offers **200,000 tokens standard** with **1,000,000 tokens** available via beta header.[&#91;31&#93;](#cite_note-anthropic_sonnet45-31) The model achieves 77.2% on SWE-bench Verified, demonstrating strong software engineering capabilities. Claude Opus 4.1 maintains 200,000 tokens with 64,000-token output maximum.

**Meta Llama 4** (April 2025) achieved the most dramatic expansion:

- **Llama 4 Scout**: **10,000,000 tokens**—the longest context window for an open-source model[&#91;3&#93;](#cite_note-llama4-3)

- **Llama 4 Maverick**: **1,000,000 tokens** with 400B parameters

**Specialized Ultra-Long Context Models**:

- **MiniMax-Text-01** (January 2025): **4,000,000 tokens** with 456B parameters[&#91;32&#93;](#cite_note-codingscape1-32)

- **Magic.dev LTM-2-Mini**: **100,000,000 tokens**—claimed as the largest context window, capable of processing approximately 10 million lines of code[&#91;33&#93;](#cite_note-magic1-33)

## Technical Mechanisms and Optimizations

### Flash Attention: The Efficiency Revolution

**[Flash Attention](/index.php?title=Flash_Attention&action=edit&redlink=1)** (Dao et al., 2022) fundamentally transformed context window feasibility by addressing the memory bandwidth bottleneck.[&#91;14&#93;](#cite_note-flashattention1-14) The core insight: modern GPUs are memory-bound, not compute-bound. Standard attention constantly transfers the large n×n attention matrix between fast on-chip SRAM and slower High Bandwidth Memory, wasting time on data movement.

Flash Attention employs three innovations:

1. **Tiling**: Breaks computation into blocks that fit in SRAM

2. **Fused Operations**: Computes attention entirely in SRAM without writing intermediate results to HBM

3. **Recomputation**: Recalculates attention during the backward pass rather than storing intermediate values

Results on various sequence lengths:[&#91;14&#93;](#cite_note-flashattention1-14)

- **15% speedup** on BERT-large (512 tokens)

- **3x speedup** on GPT-2 (1K tokens)

- **59x memory reduction** for inference at 16,384 tokens

- Enables sequences up to **64K tokens** on standard hardware

**Flash Attention-2** (2023) improved parallelization, achieving **2x speedup** over Flash Attention-1 through better GPU utilization and reduced synchronization overhead.[&#91;34&#93;](#cite_note-stanford1-34)

**Flash Attention-3** (2024), optimized for NVIDIA H100 GPUs, introduces warp specialization, pingpong scheduling, and incoherent processing.[&#91;35&#93;](#cite_note-tridao1-35) Performance achievements:

- **1.5-2.0x faster** than Flash Attention-2 with FP16

- **740 TFLOPS** (75% of H100's theoretical maximum)

- **1.2 PFLOPS** with FP8 precision

### Rotary Position Embedding (RoPE)

**[RoPE](/index.php?title=RoPE&action=edit&redlink=1)**, introduced by Su et al. (2021), revolutionized how transformers handle positional information.[&#91;36&#93;](#cite_note-arxiv_rope-36) Unlike absolute positional encodings, RoPE encodes position through rotation matrices applied to query and key vectors.

For each position, RoPE rotates Q and K vectors in 2D planes with rotation angle proportional to position and inversely proportional to dimension. This design creates several advantages:

1. **Sequence Length Flexibility**: No fixed maximum length during training

2. **Decaying Inter-token Dependency**: Attention naturally decreases with distance

3. **Parameter-Free**: No additional parameters beyond standard attention

4. **Relative Position Encoding**: Captures relative distances between tokens

**Adoption**: RoPE powers [Llama 3](/index.php?title=Llama_3&action=edit&redlink=1), [Gemma](/index.php?title=Gemma&action=edit&redlink=1), [Qwen](/wiki/qwen), Mistral, and most modern open-source models.[&#91;37&#93;](#cite_note-arxiv_rope_analysis-37)

### Ring Attention: Distributed Context Processing

**[Ring Attention](/index.php?title=Ring_Attention&action=edit&redlink=1)** (Liu et al., ICLR 2024) enables context windows to scale linearly with the number of available devices by distributing attention computation across GPUs in a ring topology.[&#91;38&#93;](#cite_note-arxiv_ring-38)

Mechanism:

1. Partition Q, K, V across N devices arranged in a ring

2. Each device computes local attention on its chunk

3. K and V blocks circulate around the ring

4. Each device processes N iterations, once per K/V block

5. Communication overlaps with computation

**Scaling**: Context length scales linearly with device count. With this approach, adding more GPUs directly increases the maximum context window the system can handle efficiently.

**Striped Attention** (2023) extends Ring Attention for causal transformers, providing better load balancing across devices.[&#91;39&#93;](#cite_note-arxiv_striped-39)

### Sparse Attention Methods

Sparse attention mechanisms reduce computational complexity by limiting which tokens attend to each other, trading some expressivity for efficiency.

**[BigBird](/index.php?title=BigBird&action=edit&redlink=1)** (Google, NeurIPS 2020) combines three attention patterns to achieve O(n) complexity:[&#91;40&#93;](#cite_note-google_bigbird-40)

1. **Global Attention**: Fixed tokens attend to all positions

2. **Local Attention**: Sliding window for immediate context

3. **Random Attention**: Sparse random connections for long-range dependencies

**[Longformer](/index.php?title=Longformer&action=edit&redlink=1)** (Beltagy et al., 2020) pioneered sliding window attention with O(n×w) complexity, where each token attends to w/2 neighbors on each side.[&#91;41&#93;](#cite_note-hf_longformer-41) This proved effective for document-level tasks while maintaining manageable computational costs.

| Mechanism | Key Idea | Computational Complexity | Primary Advantage |
| --- | --- | --- | --- |
| Full Attention (Baseline) | Every token attends to every other token | O(n²) | Maximum expressiveness; captures all dependencies |
| Sliding Window Attention | Each token attends to a fixed window of local neighbors | O(n × w) | High efficiency for local context tasks |
| Longformer | Combines sliding window attention with a few global tokens | O(n) | Balances local and global context for document-level tasks |
| BigBird | Combines sliding window, global, and random attention | O(n) | Universal approximator of full attention with theoretical guarantees |
| Reformer | Groups similar tokens using Locality-Sensitive Hashing (LSH) | O(n log n) | Extreme memory efficiency, suitable for very long sequences |
| Linformer | Projects Key and Value matrices to a lower dimension (low-rank approximation) | O(n) | Achieves linear complexity with strong theoretical foundation |

### KV Cache Optimization

The **Key-Value (KV) cache** stores computed key and value vectors for previously processed tokens, enabling efficient autoregressive generation.[&#91;42&#93;](#cite_note-rohan1-42) However, the KV cache can become a significant memory bottleneck for long contexts.

#### Grouped Query Attention (GQA) and Multi-Query Attention (MQA)

Instead of every query head having dedicated key/value heads, GQA shares K/V heads across multiple query heads:

- Standard: 32 Q heads, 32 K heads, 32 V heads

- GQA: 32 Q heads, 8 K heads, 8 V heads (4x reduction in KV cache)

- MQA: 32 Q heads, 1 K head, 1 V head (32x reduction in KV cache)

**Adoption**: [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1), Llama 3, Mistral, and Falcon use GQA, reducing KV cache size by 4-8x with minimal quality degradation. This optimization is crucial for enabling longer context windows with constrained memory budgets.

#### Quantization

Modern systems quantize KV cache to FP8 or INT8 precision, achieving **2-4x memory reduction**. TensorRT-LLM and vLLM both support quantized caching in production deployments, allowing models to handle longer contexts with the same hardware.

### ALiBi: Attention with Linear Biases

**[ALiBi](/index.php?title=ALiBi&action=edit&redlink=1)** (Press et al., ICLR 2022) eliminates positional embeddings entirely, instead biasing attention scores with a simple linear penalty based on distance.[&#91;12&#93;](#cite_note-ibm2-12) This remarkably simple approach enables:

- **Training on short sequences, inferring on longer sequences** without fine-tuning

- **Reduced memory usage** compared to sinusoidal positional embeddings

- **Better perplexity** on long-document benchmarks like WikiText-103

The method applies a constant negative bias to attention scores proportional to the distance between tokens, naturally causing the model to pay more attention to nearby tokens.

**Adoption**: MPT (MosaicML), BLOOM (BigScience), Replit Code models, and Falcon variants successfully use ALiBi for position encoding.

## Limitations and Challenges

### The Lost in the Middle Problem

The landmark paper **"Lost in the Middle: How Language Models Use Long Contexts"** (Liu et al., 2023) revealed a critical limitation: even models with large context windows fail to robustly use information throughout their entire context.[&#91;43&#93;](#cite_note-synthesis1-43)

#### Key Findings

**U-Shaped Performance Curve**: Model accuracy varies dramatically based on where relevant information appears:

- **Highest performance**: Information at the very beginning or end of context

- **Lowest performance**: Information in the middle of context

- **Performance drop**: 20-30% accuracy decrease when relevant information shifts from start/end to middle positions[&#91;43&#93;](#cite_note-synthesis1-43)

This attention bias means that even if a document fits within the window, there is no guarantee the model will effectively use information in the middle sections, making it less reliable for tasks where critical details may appear anywhere in a long document.

**Multi-Document QA Experiments**: When presented with multiple documents where only one contains the answer:

- GPT-3.5-Turbo-16K: Severe degradation for middle documents

- Claude-1.3 (100K): Nearly perfect performance across all positions (notable exception)

#### Universal Problem

Critically, simply extending context windows doesn't solve this problem. Models with 100K+ token windows exhibit the same U-shaped performance pattern—they can process more tokens but don't effectively use middle content. This suggests the issue is architectural rather than merely a capacity limitation.

### Computational Costs and Scaling

**Memory Bandwidth Bottleneck**: Modern inference is primarily limited by memory bandwidth rather than compute. Loading the KV cache from HBM to SRAM for each generated token becomes the dominant cost, especially for long contexts.

**Quadratic Cost Scaling**: While techniques like FlashAttention reduce memory overhead, the fundamental O(n²) time complexity remains for full attention. Processing 128K tokens requires significantly more attention computations than processing shorter sequences.

**Production Costs**: Major cloud providers price long-context processing with significant premiums:

- Anthropic: Higher pricing tiers for contexts exceeding 200K tokens

- Google: Context caching features to amortize costs for repeated long prompts[&#91;44&#93;](#cite_note-google_long_context-44)

**Time-to-First-Token (TTFT)**: The prefill phase (processing the initial prompt) grows with context length. Processing very long contexts can take several seconds before generation begins, impacting user experience for interactive applications.

### Accuracy Degradation with Longer Contexts

**Redundant Information**: Research shows that as context grows beyond certain thresholds, redundant information increasingly hampers performance.[&#91;45&#93;](#cite_note-deepchecks1-45) The model's limited "attention budget" gets diluted across many tokens, reducing focus on the most relevant information.

**Attention Dilution**: With fixed model capacity distributed across thousands or millions of tokens, the effective "attention budget" per token decreases as context length increases.

**Training-Inference Mismatch**: Most models train on shorter sequences (4K-32K tokens) and extend to longer contexts through positional encoding interpolation techniques. This mismatch can lead to degraded performance at extreme context lengths.

## Applications and Use Cases

### Document Analysis and Summarization

**Legal Document Review**: Models with 200K+ token context windows can process entire legal contracts, court filings, or patent applications in a single pass. Law firms use Claude Enterprise (with extended context) to analyze multi-document case files, identifying key clauses and potential issues without manual chunking.

**Academic Research**: Researchers upload multiple papers simultaneously, asking models to synthesize findings across literature. Models with million-token contexts can process dozens of academic papers at once, identifying trends, contradictions, and research gaps.

**Medical Records**: Healthcare providers analyze patient histories spanning years, combining clinical notes, lab results, and imaging reports. Long context windows enable comprehensive analysis while maintaining HIPAA compliance through proper access controls.

### Coding and Software Development

**Codebase Understanding**: Models like GPT-4.1 and Claude Sonnet 4 with large context windows can ingest entire codebases—tens of thousands of lines of code—enabling:

- Cross-file refactoring with full dependency awareness

- Bug identification requiring understanding of interactions across modules

- Documentation generation that captures system-wide architecture

- Code review with complete project context

**SWE-bench Performance**: Modern models demonstrate real-world software engineering capability on benchmarks like SWE-bench Verified, with top models achieving 70-80% accuracy on verified tasks that require understanding and modifying real GitHub repositories.

### Long-Form Content Generation

**Book Writing**: Authors use 128K+ context windows to maintain consistency across novel chapters, tracking character development, plot threads, and world-building details throughout lengthy works.

**Screenplay Development**: Hollywood writers leverage long context for multi-episode story arcs with large ensemble casts, ensuring character consistency and plot continuity across entire seasons.

### Conversational AI and Customer Service

**Multi-Turn Conversations**: Customer service bots maintain context across extended conversations. A 32K-token window enables approximately 50-100 conversation turns with full history, preventing repetitive questions and maintaining conversational coherence.

**Technical Support**: Support agents assisted by AI can reference entire conversation histories, previous tickets, documentation, and knowledge base articles simultaneously, providing more informed and contextually appropriate assistance.

### Multimodal Applications

**Video Analysis**: Models like Gemini 2.0 Pro process extended video content for applications including:

- Content moderation across long videos

- Sports game analysis with play-by-play understanding

- Educational video summarization

- Security footage review

**Audio Processing**: Long-context models handle extended audio recordings, enabling:

- Podcast transcription and summarization

- Meeting minutes generation

- Audio content search and indexing

- Multi-speaker conversation analysis

## Current State: October 2025

| Model | Context Window | Output Limit | Released |
| --- | --- | --- | --- |
| GPT-5 | 256,000 tokens | 128,000 tokens | August 2025 |
| GPT-4.1 | ~1,000,000 tokens | ~32,000 tokens | April 2025 |
| GPT-4o | 128,000 tokens | 16,384 tokens | May 2024 |
| Claude Sonnet 4.5 | 200,000 / 1,000,000 tokens* | 64,000 tokens | September 2025 |
| Claude Opus 4.1 | 200,000 tokens | 64,000 tokens | August 2025 |
| Gemini 2.5 Pro | ~1,000,000 tokens | ~65,000 tokens | 2025 |
| Gemini 2.0 Pro | ~2,000,000 tokens | ~8,000 tokens | 2025 |
| Llama 4 Scout | 10,000,000 tokens | — | April 2025 |
| Llama 4 Maverick | 1,000,000 tokens | — | April 2025 |
| MiniMax-Text-01 | 4,000,000 tokens | — | January 2025 |
| Mistral Large 2 | 128,000 tokens | — | July 2024 |

*1M tokens with beta header

### OpenAI Models

The **GPT-5 series** (August 2025) represents OpenAI's flagship offering with **256,000-token context windows** available via API:[&#91;29&#93;](#cite_note-openai_gpt5-29)[&#91;30&#93;](#cite_note-9to5mac_gpt5-30)

- **GPT-5**: Standard model with unified reasoning

- **GPT-5-mini**: Cost-efficient variant maintaining strong performance

- **GPT-5-nano**: Smallest and fastest model in the family

The **GPT-4.1 series** (April 2025) features **approximately 1 million tokens** of context across all variants (GPT-4.1, GPT-4.1 mini, and GPT-4.1 nano).[&#91;28&#93;](#cite_note-openai_gpt41-28) These models show particular strength in coding tasks and long-context comprehension.

The **GPT-4o series** continues with **128,000-token context windows**, including GPT-4o-mini as a cost-efficient option.[&#91;46&#93;](#cite_note-openai_4o_mini-46)

### Anthropic Claude Models

**Claude Sonnet 4.5** (September 2025): **200,000 tokens standard / 1,000,000 tokens with beta header**, with 64,000-token output maximum. Achieves 77.2% on SWE-bench Verified.[&#91;47&#93;](#cite_note-anthropic_claude-47)

**Claude Opus 4.1** (August 2025): **200,000 tokens**, optimized for complex reasoning tasks. Achieves 74.5% on SWE-bench Verified.

**Claude Haiku 4.5**: **200,000 tokens**, fastest model with competitive pricing for high-throughput applications.

**Claude Enterprise**: Previously offered **500,000 tokens** with GitHub integration and enterprise security features.[&#91;48&#93;](#cite_note-constellation1-48)

### Google Gemini Models

**Gemini 2.5 Pro**: Features **approximately 1 million tokens** context window with extended thinking capabilities and multimodal processing.[&#91;49&#93;](#cite_note-google_gemini-49)

**Gemini 2.0 Pro (Experimental)**: Supports **up to 2 million tokens**—among Google's largest context windows for experimental use cases.[&#91;49&#93;](#cite_note-google_gemini-49)

**Gemini 2.0 Flash**: **1,000,000 tokens** with multimodal input support and optimized for lower latency applications.

### Meta Llama Models

**Llama 4 Scout** (April 2025): **10,000,000 tokens**—unprecedented for open-source models. With 109B parameters (17B active via MoE), it demonstrates that ultra-long context is achievable in open models.[&#91;3&#93;](#cite_note-llama4-3)

**Llama 4 Maverick** (April 2025): **1,000,000 tokens** with 400B parameters, competitive with closed-source models on many benchmarks.

**Llama 3.2**: **128,000 tokens** for the 1B and 3B parameter variants, bringing long-context capability to smaller models suitable for edge deployment.

### Other Notable Models

**MiniMax-Text-01** (January 2025): **4,000,000 tokens** with 456B parameters—longest context from a Chinese AI startup, demonstrating global competition in long-context capabilities.[&#91;32&#93;](#cite_note-codingscape1-32)

**Magic.dev LTM-2-Mini**: Claims **100,000,000 tokens** context window, potentially capable of processing approximately 10 million lines of code, though practical performance at such scales requires verification.[&#91;33&#93;](#cite_note-magic1-33)

**Mistral Large 2** (July 2024): **128,000 tokens** with 123B parameters, competitive in multilingual tasks and code generation.[&#91;26&#93;](#cite_note-mistral1-26)

## Retrieval-Augmented Generation vs. Long Context

The advent of multi-million token context windows has sparked debate about whether **[Retrieval-Augmented Generation](/index.php?title=Retrieval-Augmented_Generation&action=edit&redlink=1) (RAG)** will become obsolete or remain complementary to long context.

### RAG Architecture

RAG decouples the knowledge source from the context window through a two-stage process:[&#91;50&#93;](#cite_note-aws_rag-50)

1. **Retrieval**: When a user submits a query, the system uses an information retrieval component (often vector search) to find the most relevant snippets from a large external knowledge base

2. **Generation**: These retrieved snippets are added to the prompt and fed into the LLM's context window, which then generates a response based on this focused information

### Continued Relevance of RAG

Despite massive context windows, RAG maintains several key advantages:[&#91;51&#93;](#cite_note-databricks_rag-51)

- **Scalability and Cost**: Enterprise knowledge bases can contain petabytes of data, far exceeding even the most ambitious context windows. RAG scales to virtually unlimited data sizes and is more cost-effective because the LLM only processes small, relevant chunks of text per query.

- **Data Freshness and Dynamism**: RAG systems can connect to real-time databases and information sources, ensuring responses are based on the most up-to-date information and overcoming the "knowledge cutoff" problem inherent in a model's static training data.

- **Performance and Reliability**: By pre-filtering information and providing only the most relevant context, RAG improves the signal-to-noise ratio, helping to mitigate the "lost in the middle" problem and leading to more accurate responses.

- **Security and Access Control**: In enterprise settings, RAG allows for robust security. Access controls can be implemented at the retrieval step, ensuring the LLM only sees data the specific user is authorized to view.

### Hybrid Approaches

Rather than being competitors, RAG and long context windows are increasingly seen as complementary technologies that converge into a powerful hybrid architecture. In this model, RAG acts as a coarse-grained filter, retrieving a large but relevant set of documents from a massive corpus. This curated set can then be fed into a million-token model for deep, cross-document reasoning and synthesis—combining RAG's scalability with long context's analytical depth.

## Future Directions and Emerging Trends

### Architectural Innovations

**Hybrid Architectures**: Combining transformers with alternative mechanisms:

- **State Space Models (SSMs)**: Models like [Mamba](/index.php?title=Mamba&action=edit&redlink=1) achieve linear complexity while maintaining strong performance

- **Selective Attention**: Dynamic determination of which tokens warrant full attention

- **Hierarchical Processing**: Multi-level architectures processing information at different granularities[&#91;52&#93;](#cite_note-arxiv_survey-52)

**Retrieval-Augmented Long Context**: Future systems will likely combine retrieval with long context windows, using retrieval to identify relevant passages then processing within long contexts for deep synthesis.

### Hardware Co-Design

**Specialized Accelerators**: Future AI chips will incorporate:

- Dedicated attention computation units optimized for sparse patterns

- Enhanced on-chip memory for larger SRAM caches

- Custom interconnects for efficient KV cache distribution

**Memory Innovations**: Advances in HBM3, HBM4, and 3D-stacked memory will enable higher bandwidth and larger capacity, reducing the memory bottleneck that currently limits context window scaling.

### Compression and Efficiency

**Learned Sparsity**: Rather than hand-crafted sparse attention patterns, models will learn which tokens require attention through neural architecture search and training-time optimization.

**Token Pruning**: Intelligent removal of redundant tokens through adaptive compression, maintaining semantic content while reducing computational load.[&#91;53&#93;](#cite_note-arxiv_core_context-53)

**Quantization Advances**: Beyond FP8 and INT8 to 4-bit and 2-bit KV cache quantization with adaptive precision based on token importance.

### Infinite Context Research

**Recurrent Memory Mechanisms**: Approaches like [Infini-attention](/index.php?title=Infini-attention&action=edit&redlink=1) point toward models that maintain bounded memory while processing unlimited sequences through selective compression and retention.[&#91;54&#93;](#cite_note-arxiv_infini-54)

**Streaming Inference**: Processing continuous streams without fixed context boundaries, with selective forgetting mechanisms that prioritize important information while discarding redundant details.

### Improved Long-Context Understanding

**Addressing Lost in Middle**: Active research focuses on:

- Architectural modifications ensuring uniform attention across positions

- Training procedures emphasizing middle-context utilization

- Hybrid attention patterns that maintain global awareness[&#91;43&#93;](#cite_note-synthesis1-43)

**Evaluation Methodologies**: Development of better benchmarks beyond synthetic needle-in-haystack tests, including:

- Multi-hop inference requiring integration of distant information

- Domain-specific evaluations in legal, medical, and scientific contexts

- Real-world task performance metrics

## References

1. ↑ [1.0](#cite_ref-ibm1_1-0) [1.1](#cite_ref-ibm1_1-1) [1.2](#cite_ref-ibm1_1-2) [1.3](#cite_ref-ibm1_1-3) [1.4](#cite_ref-ibm1_1-4) IBM (2025). What is a context window? IBM Think. [https://www.ibm.com/think/topics/context-window](https://www.ibm.com/think/topics/context-window)

2. [↑](#cite_ref-mckinsey1_2-0) McKinsey & Company (2024). What is a context window? [https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-a-context-window](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-a-context-window)

3. ↑ [3.0](#cite_ref-llama4_3-0) [3.1](#cite_ref-llama4_3-1) [3.2](#cite_ref-llama4_3-2) Meta AI (2025). Introducing Meta Llama 4. [https://ai.meta.com/blog/llama-4-multimodal-intelligence/](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)

4. [↑](#cite_ref-openai_community1_4-0) OpenAI Community (2024). GPT-4o context window confusion. [https://community.openai.com/t/gpt-4o-context-window-confusion/761439](https://community.openai.com/t/gpt-4o-context-window-confusion/761439)

5. ↑ [5.0](#cite_ref-wiki_transformer_5-0) [5.1](#cite_ref-wiki_transformer_5-1) Wikipedia (2024). Transformer (deep learning architecture). [https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture)](https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture))

6. [↑](#cite_ref-wiggers1_6-0) Wiggers, K. (2023). OpenAI is Testing a Version of GPT-4 that Can 'Remember' Long Conversations. TechCrunch. [https://techcrunch.com/2023/03/14/openai-is-testing-a-version-of-gpt-4-that-can-remember-long-conversations/](https://techcrunch.com/2023/03/14/openai-is-testing-a-version-of-gpt-4-that-can-remember-long-conversations/)

7. [↑](#cite_ref-hf1_7-0) Hugging Face (2024). Byte-Pair Encoding tokenization. [https://huggingface.co/learn/llm-course/en/chapter6/5](https://huggingface.co/learn/llm-course/en/chapter6/5)

8. ↑ [8.0](#cite_ref-hf2_8-0) [8.1](#cite_ref-hf2_8-1) [8.2](#cite_ref-hf2_8-2) Hugging Face (2024). Summary of the tokenizers. [https://huggingface.co/docs/transformers/tokenizer_summary](https://huggingface.co/docs/transformers/tokenizer_summary)

9. [↑](#cite_ref-hf3_9-0) Hugging Face (2024). Understanding Tokenizers in Hugging Face Transformers. [https://medium.com/@satyamtank03/understanding-tokenizers-in-hugging-face-transformers-a-simple-guide-b4a8bdc049db](https://medium.com/@satyamtank03/understanding-tokenizers-in-hugging-face-transformers-a-simple-guide-b4a8bdc049db)

10. [↑](#cite_ref-hf4_10-0) Hugging Face (2024). Breaking Language into Tokens. [https://huggingface.co/blog/royswastik/transformer-tokenization-vocabulary-creation](https://huggingface.co/blog/royswastik/transformer-tokenization-vocabulary-creation)

11. [↑](#cite_ref-wiki_attention_11-0) Wikipedia (2024). Attention Is All You Need. [https://en.wikipedia.org/wiki/Attention_Is_All_You_Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need)

12. ↑ [12.0](#cite_ref-ibm2_12-0) [12.1](#cite_ref-ibm2_12-1) [12.2](#cite_ref-ibm2_12-2) IBM Research (2024). Why larger LLM context windows are all the rage. [https://research.ibm.com/blog/larger-context-window](https://research.ibm.com/blog/larger-context-window)

13. ↑ [13.0](#cite_ref-arxiv_complexity_13-0) [13.1](#cite_ref-arxiv_complexity_13-1) arXiv (2022). On The Computational Complexity of Self-Attention. [https://arxiv.org/abs/2209.04881](https://arxiv.org/abs/2209.04881)

14. ↑ [14.0](#cite_ref-flashattention1_14-0) [14.1](#cite_ref-flashattention1_14-1) [14.2](#cite_ref-flashattention1_14-2) arXiv (2022). FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness. [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)

15. [↑](#cite_ref-tds1_15-0) Towards Data Science (2024). De-Coded: Understanding Context Windows for Transformer Models. [https://towardsdatascience.com/de-coded-understanding-context-windows-for-transformer-models-cd1baca6427e](https://towardsdatascience.com/de-coded-understanding-context-windows-for-transformer-models-cd1baca6427e)

16. ↑ [16.0](#cite_ref-wiki_gpt3_16-0) [16.1](#cite_ref-wiki_gpt3_16-1) Wikipedia (2024). GPT-3. [https://en.wikipedia.org/wiki/GPT-3](https://en.wikipedia.org/wiki/GPT-3)

17. [↑](#cite_ref-wiki_bert_17-0) Wikipedia (2024). BERT (language model). [https://en.wikipedia.org/wiki/BERT_(language_model)](https://en.wikipedia.org/wiki/BERT_(language_model))

18. [↑](#cite_ref-humanfirst1_18-0) HumanFirst (2023). The OpenAI GPT-3.5 Turbo Model Has A 16k Context Window. [https://www.humanfirst.ai/blog/openai-gpt-3-5-turbo-model-with-16k-context-window](https://www.humanfirst.ai/blog/openai-gpt-3-5-turbo-model-with-16k-context-window)

19. [↑](#cite_ref-techtarget1_19-0) TechTarget (2024). GPT-3.5 vs. GPT-4: Biggest differences to consider. [https://www.techtarget.com/searchenterpriseai/tip/GPT-35-vs-GPT-4-Biggest-differences-to-consider](https://www.techtarget.com/searchenterpriseai/tip/GPT-35-vs-GPT-4-Biggest-differences-to-consider)

20. [↑](#cite_ref-anthropic1_20-0) Anthropic (2023). Introducing 100K Context Windows. [https://www.anthropic.com/news/100k-context-windows](https://www.anthropic.com/news/100k-context-windows)

21. [↑](#cite_ref-anthropic2_21-0) Anthropic (2023). Introducing Claude 2.1. [https://www.anthropic.com/news/claude-2-1](https://www.anthropic.com/news/claude-2-1)

22. [↑](#cite_ref-openai_turbo_22-0) OpenAI (2023). New models and developer products announced at DevDay. [https://openai.com/index/new-models-and-developer-products-announced-at-devday/](https://openai.com/index/new-models-and-developer-products-announced-at-devday/)

23. [↑](#cite_ref-google2_23-0) Google (2024). What is a long context window? Google DeepMind engineers explain. [https://blog.google/technology/ai/long-context-window-ai-models/](https://blog.google/technology/ai/long-context-window-ai-models/)

24. [↑](#cite_ref-google3_24-0) Google Developers (2024). Gemini 1.5 Pro 2M context window available. [https://developers.googleblog.com/en/new-features-for-the-gemini-api-and-google-ai-studio/](https://developers.googleblog.com/en/new-features-for-the-gemini-api-and-google-ai-studio/)

25. [↑](#cite_ref-meta1_25-0) Meta AI (2024). Introducing Llama 3.1. [https://ai.meta.com/blog/meta-llama-3-1/](https://ai.meta.com/blog/meta-llama-3-1/)

26. ↑ [26.0](#cite_ref-mistral1_26-0) [26.1](#cite_ref-mistral1_26-1) Mistral AI (2024). Large Enough. [https://mistral.ai/news/mistral-large-2407](https://mistral.ai/news/mistral-large-2407)

27. [↑](#cite_ref-cohere1_27-0) Cohere (2024). Command R+ Model. [https://docs.cohere.com/docs/command-r-plus](https://docs.cohere.com/docs/command-r-plus)

28. ↑ [28.0](#cite_ref-openai_gpt41_28-0) [28.1](#cite_ref-openai_gpt41_28-1) OpenAI (2025). Introducing GPT-4.1 in the API. [https://openai.com/index/gpt-4-1/](https://openai.com/index/gpt-4-1/)

29. ↑ [29.0](#cite_ref-openai_gpt5_29-0) [29.1](#cite_ref-openai_gpt5_29-1) OpenAI (2025). Introducing GPT-5. [https://openai.com/index/introducing-gpt-5/](https://openai.com/index/introducing-gpt-5/)

30. ↑ [30.0](#cite_ref-9to5mac_gpt5_30-0) [30.1](#cite_ref-9to5mac_gpt5_30-1) 9to5Mac (2025). Here's everything OpenAI announced at its GPT-5 event. [https://9to5mac.com/2025/08/08/heres-everything-openai-announced-at-its-gpt-5-event/](https://9to5mac.com/2025/08/08/heres-everything-openai-announced-at-its-gpt-5-event/)

31. [↑](#cite_ref-anthropic_sonnet45_31-0) Anthropic (2025). Models overview - Claude Docs. [https://docs.claude.com/en/docs/about-claude/models/overview](https://docs.claude.com/en/docs/about-claude/models/overview)

32. ↑ [32.0](#cite_ref-codingscape1_32-0) [32.1](#cite_ref-codingscape1_32-1) CodingScape (2025). LLMs with largest context windows. [https://codingscape.com/blog/llms-with-largest-context-windows](https://codingscape.com/blog/llms-with-largest-context-windows)

33. ↑ [33.0](#cite_ref-magic1_33-0) [33.1](#cite_ref-magic1_33-1) Magic.dev (2024). 100M Token Context Windows. [https://magic.dev/blog/100m-token-context-windows](https://magic.dev/blog/100m-token-context-windows)

34. [↑](#cite_ref-stanford1_34-0) Stanford CRFM (2023). FlashAttention-2. [https://crfm.stanford.edu/2023/07/17/flash2.html](https://crfm.stanford.edu/2023/07/17/flash2.html)

35. [↑](#cite_ref-tridao1_35-0) Tri Dao (2024). FlashAttention-3: Fast and Accurate Attention. [https://tridao.me/blog/2024/flash3/](https://tridao.me/blog/2024/flash3/)

36. [↑](#cite_ref-arxiv_rope_36-0) arXiv (2021). RoFormer: Enhanced Transformer with Rotary Position Embedding. [https://arxiv.org/pdf/2104.09864](https://arxiv.org/pdf/2104.09864)

37. [↑](#cite_ref-arxiv_rope_analysis_37-0) arXiv (2024). Round and Round We Go! What makes Rotary Positional Encodings useful? [https://arxiv.org/html/2410.06205v1](https://arxiv.org/html/2410.06205v1)

38. [↑](#cite_ref-arxiv_ring_38-0) arXiv (2023). Ring Attention with Blockwise Transformers. [https://arxiv.org/abs/2310.01889](https://arxiv.org/abs/2310.01889)

39. [↑](#cite_ref-arxiv_striped_39-0) arXiv (2023). Striped Attention: Faster Ring Attention for Causal Transformers. [https://arxiv.org/abs/2311.09431](https://arxiv.org/abs/2311.09431)

40. [↑](#cite_ref-google_bigbird_40-0) Google Research (2020). Constructing Transformers For Longer Sequences with Sparse Attention Methods. [https://research.google/blog/constructing-transformers-for-longer-sequences-with-sparse-attention-methods/](https://research.google/blog/constructing-transformers-for-longer-sequences-with-sparse-attention-methods/)

41. [↑](#cite_ref-hf_longformer_41-0) Hugging Face (2020). Longformer documentation. [https://huggingface.co/transformers/v2.11.0/model_doc/longformer.html](https://huggingface.co/transformers/v2.11.0/model_doc/longformer.html)

42. [↑](#cite_ref-rohan1_42-0) Rohan Paul (2024). KV Caching in LLM Inference. [https://www.rohan-paul.com/p/kv-caching-in-llm-inference-a-comprehensive](https://www.rohan-paul.com/p/kv-caching-in-llm-inference-a-comprehensive)

43. ↑ [43.0](#cite_ref-synthesis1_43-0) [43.1](#cite_ref-synthesis1_43-1) [43.2](#cite_ref-synthesis1_43-2) Synthesis AI (2024). Lost in Context: How Much Can You Fit into a Transformer. [https://synthesis.ai/2024/04/08/lost-in-context-how-much-can-you-fit-into-a-transformer/](https://synthesis.ai/2024/04/08/lost-in-context-how-much-can-you-fit-into-a-transformer/)

44. [↑](#cite_ref-google_long_context_44-0) Google Cloud (2024). Getting started with long context. [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/long-context](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/long-context)

45. [↑](#cite_ref-deepchecks1_45-0) Deepchecks (2024). How Does The Context Window Size Affect LLM Performance? [https://www.deepchecks.com/question/how-does-context-window-size-affect-llm-performance/](https://www.deepchecks.com/question/how-does-context-window-size-affect-llm-performance/)

46. [↑](#cite_ref-openai_4o_mini_46-0) OpenAI (2024). GPT-4o mini: advancing cost-efficient intelligence. [https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/)

47. [↑](#cite_ref-anthropic_claude_47-0) Wikipedia (2025). Claude (language model). [https://en.wikipedia.org/wiki/Claude_(language_model)](https://en.wikipedia.org/wiki/Claude_(language_model))

48. [↑](#cite_ref-constellation1_48-0) Constellation Research (2024). Anthropic launches Claude Enterprise with 500K context window. [https://www.constellationr.com/blog-news/insights/anthropic-launches-claude-enterprise-500k-context-window-github-integration](https://www.constellationr.com/blog-news/insights/anthropic-launches-claude-enterprise-500k-context-window-github-integration)

49. ↑ [49.0](#cite_ref-google_gemini_49-0) [49.1](#cite_ref-google_gemini_49-1) Google AI (2025). Gemini Models. [https://ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models)

50. [↑](#cite_ref-aws_rag_50-0) AWS (2024). What is Retrieval-Augmented Generation (RAG)? [https://aws.amazon.com/what-is/retrieval-augmented-generation/](https://aws.amazon.com/what-is/retrieval-augmented-generation/)

51. [↑](#cite_ref-databricks_rag_51-0) Databricks (2024). Long context RAG: when and how to leverage long context models for RAG. [https://www.databricks.com/blog/long-context-rag-performance-llms](https://www.databricks.com/blog/long-context-rag-performance-llms)

52. [↑](#cite_ref-arxiv_survey_52-0) arXiv (2024). Beyond the Limits: A Survey of Techniques to Extend Context Length. [https://arxiv.org/html/2402.02244v2](https://arxiv.org/html/2402.02244v2)

53. [↑](#cite_ref-arxiv_core_context_53-0) arXiv (2024). Core Context Aware Transformers. [https://arxiv.org/html/2412.12465](https://arxiv.org/html/2412.12465)

54. [↑](#cite_ref-arxiv_infini_54-0) arXiv (2024). Leave No Context Behind: Efficient Infinite Context Transformers. [https://arxiv.org/html/2404.07143v1](https://arxiv.org/html/2404.07143v1)

## See Also

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [Attention mechanism](/index.php?title=Attention_mechanism&action=edit&redlink=1)

- [GPT-4](/wiki/gpt-4)

- [Claude (language model)](/index.php?title=Claude_(language_model)&action=edit&redlink=1)

- [Gemini (language model)](/index.php?title=Gemini_(language_model)&action=edit&redlink=1)

- [Llama (language model)](/index.php?title=Llama_(language_model)&action=edit&redlink=1)

- [Token (natural language processing)](/index.php?title=Token_(natural_language_processing)&action=edit&redlink=1)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)

- [In-context learning](/wiki/in-context_learning)

## External Links

- [Anthropic Official Website](https://www.anthropic.com/)

- [OpenAI Official Website](https://openai.com/)

- [Google AI for Developers](https://ai.google.dev/)

- [Meta AI](https://ai.meta.com/)