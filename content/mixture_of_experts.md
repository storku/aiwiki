---
title: "Mixture of Experts"
slug: "mixture_of_experts"
---

**Mixture of Experts** (**MoE**) is a [machine learning](/wiki/machine_learning) architecture in which multiple specialized sub-networks, called "experts," are combined with a learned gating (routing) mechanism that selects which experts process each input. Rather than activating all parameters for every input, MoE models activate only a sparse subset of experts per token or example, achieving high model capacity with substantially lower computational cost than equivalently sized dense models. Originally proposed in 1991 by Jacobs, Jordan, Nowlan, and Hinton, the MoE paradigm has become one of the most important architectural patterns in modern [large language models](/wiki/large_language_model), underpinning systems such as Mixtral, [DeepSeek](/wiki/deepseek)-V3, Grok-1, DBRX, and [Llama](/wiki/llama) 4.

## History

### Origins (1991)

The Mixture of Experts concept was introduced in the 1991 paper "Adaptive Mixtures of Local Experts" by Robert A. Jacobs, Michael I. Jordan, Steven J. Nowlan, and Geoffrey E. Hinton, published in *Neural Computation*. Jacobs and Jordan were at the Massachusetts Institute of Technology, while Nowlan and Hinton were at the University of Toronto. The paper presented a supervised learning procedure for systems composed of many separate networks, each of which learns to handle a subset of the training cases. A gating network dynamically assigns input data to the appropriate expert, and the authors proposed an error function that fostered competition among experts, promoting true specialization. The key innovation was a "stochastic one-out-of-n selector" that selectively activates a single expert for each input case instead of using a linear combination of all outputs.

### Hierarchical Mixtures of Experts (1994)

In 1994, Jordan and Jacobs extended the framework with "Hierarchical Mixtures of Experts and the EM Algorithm," published in *Neural Computation*. This work introduced a tree-structured architecture in which both the mixture coefficients and the mixture components are generalized linear models, with learning treated as a maximum likelihood problem using an Expectation-Maximization (EM) algorithm. The hierarchical formulation allowed for more complex decision boundaries and laid theoretical groundwork for later developments.

### Early Applications

Through the 1990s and 2000s, MoE models found applications in speech recognition, handwriting recognition, and other pattern recognition tasks. However, the architecture remained relatively niche in the broader machine learning community, partly because of the difficulty of training gating networks at scale and partly because computational hardware was not yet suited to exploiting sparse activation patterns efficiently.

### Revival with Sparsely-Gated MoE (2017)

The modern renaissance of MoE began with the 2017 paper "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer" by Noam Shazeer, Azalia Mirhoseini, Krzysztof Maziarz, Andy Davis, Quoc Le, Geoffrey Hinton, and Jeff Dean at [Google](/wiki/google). This work introduced a Sparsely-Gated MoE layer consisting of up to thousands of feed-forward sub-networks with a trainable gating network that determines a sparse combination of experts for each example. Applied between stacked [LSTM](/wiki/lstm) layers for language modeling and machine translation, the approach achieved greater than 1,000x improvements in model capacity with only minor losses in computational efficiency. The largest model described in the paper contained 137 billion parameters. This paper established the noisy top-k gating mechanism and the use of auxiliary losses for load balancing, both of which remain foundational techniques.

### GShard (2020)

Google's GShard, published in June 2020, demonstrated scaling of Sparsely-Gated MoE within the [Transformer](/wiki/transformer) architecture for multilingual neural machine translation. Using top-2 routing with expert capacity constraints, GShard scaled a Transformer model beyond 600 billion parameters across 2,048 TPU v3 accelerators, trained in just 4 days. Compared to dense scaling, which required more than ten times the training time (235 TPU core years) while trailing in quality, GShard proved that conditional computation was far more practical for scaling.

### Switch Transformers (2021)

The Switch Transformer, introduced by William Fedus, Barret Zoph, and Noam Shazeer at Google in January 2021, simplified the MoE routing mechanism by replacing top-k expert selection with a switch that routes each token to exactly one expert (k=1). This reduced routing computation, lowered communication costs, and, counter-intuitively, preserved model quality. The paper also introduced techniques for stable training with lower-precision formats (bfloat16). Switch Transformers achieved up to 7x increases in pre-training speed with the same computational resources compared to T5-Base and T5-Large. The largest Switch Transformer model, Switch-C, contained 1.571 trillion parameters and was trained on the 807 GB Colossal Clean Crawled Corpus (C4).

### ST-MoE (2022)

In 2022, Barret Zoph and colleagues published "ST-MoE: Designing Stable and Transferable Sparse Expert Models." This work introduced the router z-loss, a technique that penalizes large logits entering the gating network to improve numerical stability during training. ST-MoE scaled to 269 billion parameters with computational cost comparable to a 32 billion dense encoder-decoder Transformer, and for the first time, a sparse model achieved state-of-the-art performance in transfer learning across tasks including reasoning, summarization, and question answering.

## Architecture

### Overview

In a standard [Transformer](/wiki/transformer) architecture, each layer consists of a self-[attention](/wiki/attention_mechanism) block followed by a feed-forward network (FFN). In an MoE Transformer, some or all of the FFN layers are replaced with MoE layers. An MoE layer contains multiple expert networks (each typically an independent FFN) and a gating (router) network that determines which experts process each token. The attention layers and embedding layers remain shared across all tokens.

### Components

An MoE layer has two primary components:

**Expert Networks:** Each expert is typically a standard FFN (a linear-ReLU-linear or linear-SiLU-linear network). In a model with N experts, each expert has its own independent set of weights. Only a subset of experts (typically 1 or 2) is activated per token, making the computation sparse.

**Gating (Router) Network:** The router is usually a simple linear layer that takes the token representation as input and produces a score (logit) for each expert. These scores are passed through a softmax function, and the top-k experts with the highest scores are selected. The router output also determines the weights used to combine the selected experts' outputs.

### Mathematical Formulation

Given an input token representation x, the output y of an MoE layer is computed as:

```
y = sum over i in TopK: G(x)_i * E_i(x)
```

where E_i(x) is the output of expert i, and G(x)_i is the gating weight for expert i.

The gating function G is typically computed as:

```
G(x) = Softmax(KeepTopK(H(x), k))
```

where H(x) = x * W_g (a linear transformation), and KeepTopK sets all values outside the top-k to negative infinity, causing them to become zero after softmax.

In the noisy top-k gating variant introduced by Shazeer et al. (2017), tunable Gaussian noise is added before the top-k selection:

```
H(x)_i = (x * W_g)_i + StandardNormal() * Softplus((x * W_noise)_i)
```

This noise encourages exploration of different routing paths during training and helps with load balancing.

### Sparse vs. Dense MoE

| Property | Dense MoE | Sparse MoE |
| --- | --- | --- |
| Experts activated per token | All experts | Top-k experts (typically 1 or 2) |
| Computational cost | Proportional to total parameters | Proportional to active parameters |
| Gating mechanism | Soft weighting of all experts | Hard selection of top-k experts |
| Scalability | Limited | Scales to trillions of parameters |
| Use in modern LLMs | Rare | Standard approach |

Modern large language models overwhelmingly use Sparse MoE, where only a small fraction of experts are activated for each token. This is the key innovation that allows MoE models to have very large total parameter counts while maintaining reasonable computational costs.

### Expert Capacity

To prevent any single expert from being overwhelmed during training, MoE implementations introduce a capacity factor, a hyperparameter that defines a buffer for how many tokens each expert can process in a batch:

```
Expert Capacity = (tokens_per_batch / num_experts) * capacity_factor
```

When a capacity factor greater than 1.0 is used, it provides a buffer for imbalanced routing. Switch Transformers found that a capacity factor of 1.0 to 1.25 works well. Tokens that exceed an expert's capacity may be dropped or sent via a residual connection to the next layer. The capacity factor creates a direct trade-off between model quality and communication cost.

## Routing Mechanisms

The routing (gating) mechanism is one of the most critical design decisions in MoE architectures. Several approaches have been developed.

### Top-1 Routing

Top-1 routing directs each token to a single expert. This is the simplest sparse routing strategy and was popularized by the Switch Transformer. It minimizes computation and communication overhead but requires careful load balancing to prevent expert collapse.

### Top-2 Routing

Top-2 routing sends each token to two experts and combines their outputs with learned weights. This approach is used in Mixtral 8x7B and GShard. It provides more robust routing at the cost of approximately doubling the per-token computation compared to top-1 routing.

### Noisy Top-k Gating

Introduced by Shazeer et al. (2017), this method adds tunable Gaussian noise to the router logits before applying the top-k selection and softmax. The noise acts as regularization, encouraging exploration of different routing paths and helping distribute tokens more evenly across experts.

### Expert Choice Routing

Expert Choice routing, introduced at NeurIPS 2022, inverts the standard approach: instead of each token selecting its top-k experts, each expert selects its top-k tokens. This guarantees perfectly balanced loads across experts, allows a variable number of experts per token, and has demonstrated substantial gains in training efficiency and downstream performance. However, it can complicate autoregressive generation because the number of experts processing each token is not predetermined.

### Soft MoE

Soft MoE, proposed by Puigcerver et al. (2023), replaces discrete expert selection with fully differentiable soft assignment. Each expert receives a different weighted combination of all input tokens, and the final output is a weighted sum of all expert outputs. This eliminates the training instabilities associated with hard gating (no dropped tokens, no expert collapse, no routing instability) and scales effectively to hundreds of experts. However, because Soft MoE breaks token causality, it is not directly suitable for autoregressive language models and has been primarily applied to vision tasks.

### ReLU Routing (ReMoE)

ReMoE (2024) introduces ReLU routing as a drop-in replacement for TopK routing, making the MoE layer fully differentiable. The ReLU gate directly controls the active state of each expert, with the number of active experts determined by the sparsity of the ReLU function rather than a fixed k value.

### Comparison of Routing Mechanisms

| Routing Method | Experts per Token | Load Balance | Differentiable | Used In |
| --- | --- | --- | --- | --- |
| Top-1 | 1 (fixed) | Requires auxiliary loss | No (discrete) | Switch Transformer |
| Top-2 | 2 (fixed) | Requires auxiliary loss | No (discrete) | Mixtral, GShard |
| Noisy top-k | k (fixed) | Noise helps balance | Partially | Shazeer et al. (2017) |
| Expert Choice | Variable | Guaranteed balanced | No (discrete) | EC routing (2022) |
| Soft MoE | All (weighted) | Inherently balanced | Yes | Vision models |
| ReLU routing | Variable (sparse) | Learned sparsity | Yes | ReMoE (2024) |

## Load Balancing

Load balancing is one of the most important and challenging aspects of training MoE models. Without explicit mechanisms to distribute tokens across experts, the router tends to converge toward sending most tokens to a small number of "popular" experts, leading to expert collapse and wasted capacity.

### Auxiliary Load Balancing Loss

The most common approach adds an auxiliary loss term to the training objective that encourages uniform utilization of experts. This loss penalizes the router when the fraction of tokens routed to each expert deviates from a uniform distribution. The auxiliary loss coefficient must be carefully tuned: too small, and load imbalance persists; too large, and the interference gradients impair model performance and reduce expert specialization.

### Router Z-Loss

Introduced in ST-MoE (2022), the router z-loss penalizes large logits in the gating network. Large logits can cause numerical instability when passed through the softmax function (due to round-off errors in the exponential computation), even when using full float32 precision. By constraining logit magnitudes, the z-loss improves training stability without degrading model quality.

### Auxiliary-Loss-Free Load Balancing

DeepSeek-V3 pioneered an auxiliary-loss-free strategy for load balancing. Instead of adding auxiliary losses that can interfere with training gradients, DeepSeek-V3 introduces a bias term to the gating value that is used only for routing decisions. This bias is manually adjusted when an expert becomes overloaded or underloaded, eliminating the hyperparameter sensitivity of auxiliary loss approaches and avoiding the trade-off between load balance and expert specialization.

### Capacity Factor Management

The capacity factor determines the maximum number of tokens each expert can process. Setting it too low causes token dropping (which can hurt quality), while setting it too high wastes computation and memory. Dropless MoE implementations, such as MegaBlocks, reformulate the MoE computation using block-sparse operations so that expert capacity can be dynamically sized and efficiently computed on modern GPU kernels, eliminating the need for token dropping entirely.

## Challenges

### Expert Collapse

Expert collapse occurs when the router converges to using only a small subset of available experts, effectively ignoring the rest. This can happen in two forms: some experts receive very few tokens and become underutilized, or multiple experts become functionally redundant, learning near-identical representations. Load balancing losses and stochastic routing mechanisms help prevent collapse, but the problem remains a persistent challenge, especially as the number of experts increases.

### Training Instability

MoE models are more prone to training instability than dense models. Sources of instability include large router logits (addressed by the z-loss), abrupt changes in routing decisions during training, and interactions between the auxiliary load balancing loss and the primary training objective. Mixed-precision training (using bfloat16 for expert computations and full precision for the router) is a common strategy for improving stability.

### Memory Requirements

Although MoE models activate only a fraction of their parameters per token, all parameters must be loaded into GPU memory (VRAM) for inference. The gating network needs access to all experts to make routing decisions. A model with 100 billion total parameters requires the same amount of VRAM as a 100 billion dense model, even if it only activates 15 billion parameters during inference. This creates a significant gap between computational efficiency and memory efficiency.

### Distributed Training Complexity

Training large MoE models requires expert parallelism, where different experts are distributed across different GPUs or nodes. This introduces all-to-all communication patterns: tokens must be dispatched from the GPU where they were processed to the GPU hosting their assigned expert, and results must be returned. This communication overhead can consume over 40% of total runtime in large-scale training, making high-bandwidth interconnects critical for MoE training efficiency.

### Fine-Tuning Difficulties

MoE models have historically been more prone to overfitting during fine-tuning than dense models, particularly on small downstream tasks. The large number of parameters relative to the active computation creates a regularization challenge. Successful fine-tuning strategies include using higher dropout rates for expert (sparse) layers compared to dense layers, freezing non-expert weights and updating only the dense portions, and multi-task instruction tuning. Research has shown that MoE models benefit disproportionately more from instruction tuning compared to dense models.

### Serving and Deployment

Serving MoE models at scale introduces unique challenges. The stochastic nature of routing leads to unstable batching and fragmented workloads. Sparse expert activation creates irregular memory access patterns. When experts are distributed across multiple GPUs, token dispatch and aggregation operations place significant strain on memory bandwidth. Techniques for practical deployment include knowledge distillation (compressing an MoE into a dense model), expert merging, quantization, and sentence-level routing (routing entire sequences to single experts to extract serving sub-networks).

## MoE vs. Dense Models

| Aspect | MoE Models | Dense Models |
| --- | --- | --- |
| Computational cost per token | Low (only active experts compute) | High (all parameters compute) |
| Total parameters | Very high (hundreds of billions to trillions) | Moderate (typically up to hundreds of billions) |
| Memory (VRAM) required | High (all experts loaded) | Proportional to parameter count |
| Training speed | Faster for equivalent quality (up to 4-7x speedup) | Slower per quality unit |
| Inference latency | Lower per token (comparable to smaller dense model) | Proportional to model size |
| Architecture complexity | Complex (routing, load balancing, expert parallelism) | Simple (standard FFN layers) |
| Fine-tuning | More prone to overfitting; benefits greatly from instruction tuning | Straightforward; well-understood behavior |
| Scalability | Excellent (can add experts without proportional compute increase) | Limited by compute budget |
| Hardware requirements | Requires high-bandwidth interconnects for expert parallelism | Standard GPU setups |
| Best use case | High-throughput serving; large-scale pretraining with fixed compute | Resource-constrained deployment; narrow-domain fine-tuning |

Research from Epoch AI and others has shown that MoE models can achieve up to 70% lower computation costs compared to dense models of similar quality, and MoE pretraining can be 4x to 7x faster than dense model pretraining for equivalent performance levels.

## Expert Parallelism

Expert parallelism is a distributed computing strategy designed specifically for MoE models. Unlike data parallelism (which replicates the full model across devices and partitions data) or model parallelism (which partitions the model across devices and replicates data), expert parallelism distributes individual experts across different devices.

In expert parallelism, non-MoE layers (attention, embeddings) behave like data parallelism, with each device processing its own partition of the data. For MoE layers, tokens are routed across devices to reach their assigned expert via all-to-all communication. After expert processing, results are returned to the originating device.

In practice, large-scale MoE training combines multiple parallelism strategies: data parallelism to scale across nodes, tensor parallelism to split large matrices within each expert, and expert parallelism to distribute experts across GPUs. Finding the optimal configuration requires balancing memory, computation, and communication costs.

NVIDIA's Hybrid Expert Parallel (Hybrid-EP) library optimizes all-to-all communication in MoE models, achieving near hardware-limit bandwidth with minimal streaming multiprocessor usage in both intra-node and inter-node topologies.

## Expert Specialization

Research into how MoE experts specialize has revealed interesting patterns:

**Encoder Experts** tend to specialize in recognizable token groups. Studies have identified experts that preferentially handle punctuation tokens, proper nouns, or specific grammatical patterns. This suggests that encoder-side routing learns meaningful linguistic categories.

**Decoder Experts** show less clear-cut specialization. In multilingual settings, load balancing mechanisms prevent any single expert from becoming a "language expert," distributing linguistic knowledge more evenly across all experts.

**Shared Experts,** as introduced in the DeepSeekMoE architecture, are experts that are always activated for every token. These shared experts capture common knowledge that is useful across all inputs, reducing redundancy among the routed experts and allowing them to specialize more effectively.

## Notable MoE Models

### Landmark Research Models

| Model | Year | Organization | Total Params | Active Params | Experts | Routing | Key Contribution |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sparsely-Gated MoE | 2017 | [Google](/wiki/google) | 137B | Varies | Up to thousands | Noisy top-k | First large-scale sparse MoE |
| GShard | 2020 | Google | 600B+ | Varies | Varies | Top-2 | Scaled MoE translation model |
| [Switch Transformer](/wiki/switch_transformer) | 2021 | Google | 1.571T | Varies | Up to 2,048 | Top-1 | Simplified routing; trillion-scale |
| ST-MoE | 2022 | Google | 269B | ~32B equiv. | Varies | Top-k with z-loss | Router z-loss; stable training |
| V-MoE | 2022 | Google | 15B | Varies | 24 MoE layers | Top-k | Largest vision model (at time) |

### Production and Open-Weight MoE Models

| Model | Release Date | Organization | Total Params | Active Params | Experts (per layer) | Experts Selected | Context Length |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Mixtral 8x7B](/wiki/mixtral) | Dec 2023 | [Mistral AI](/wiki/mistral_ai) | 47B | 13B | 8 | 2 | 32K |
| [Mixtral 8x22B](/wiki/mixtral) | Apr 2024 | Mistral AI | 141B | 39B | 8 | 2 | 64K |
| [Grok-1](/wiki/grok) | Mar 2024 | [xAI](/wiki/xai) | 314B | ~86B | 8 | 2 | 8,192 |
| [DBRX](/wiki/dbrx) | Mar 2024 | [Databricks](/wiki/databricks) | 132B | 36B | 16 | 4 | 32K |
| [Jamba](/wiki/jamba) | Mar 2024 | [AI21 Labs](/wiki/ai21_labs) | 52B | 12B | 16 | 2 | 256K |
| Jamba 1.5 | Aug 2024 | AI21 Labs | 398B | 94B | Varies | Varies | 256K |
| [DeepSeek-V2](/wiki/deepseek) | May 2024 | [DeepSeek](/wiki/deepseek) | 236B | 21B | 2 shared + 160 routed | 6 routed | 128K |
| [DeepSeek-V3](/wiki/deepseek) | Dec 2024 | DeepSeek | 671B | 37B | 1 shared + 256 routed | 8 routed | 128K |
| [Qwen](/wiki/qwen) 1.5-MoE | Mar 2024 | [Alibaba](/wiki/alibaba) | Varies | 2.7B | Varies | Varies | Varies |
| Qwen3-235B-A22B | Apr 2025 | Alibaba | 235B | 22B | 128 | 8 | 128K |
| [Llama 4](/wiki/llama) Scout | Apr 2025 | [Meta](/wiki/meta) | ~109B | 17B | 16 | 1 + shared | 10M |
| [Llama 4](/wiki/llama) Maverick | Apr 2025 | Meta | 400B | 17B | 128 routed + 1 shared | 1 routed + shared | 1M |
| Llama 4 Behemoth | 2025 | Meta | ~2T | 288B | 16 | Varies | Varies |
| Qwen3-Next 80B-A3B | 2026 | Alibaba | 80B | 3B | 512 routed + 1 shared | 10 routed + shared | Varies |

### GPT-4 (Rumored MoE)

In June 2023, George Hotz (founder of Comma.ai) publicly claimed that [GPT-4](/wiki/gpt-4) uses a Mixture of Experts architecture with a total of approximately 1.76 trillion parameters. The specific configuration has been reported in two versions: either 8 experts of 220 billion parameters each, or 16 experts of approximately 111 billion parameters each. [OpenAI](/wiki/openai) has never officially confirmed or denied these claims, and GPT-4's architecture remains proprietary. Regardless of the specific configuration, the rumored use of MoE in GPT-4 contributed to widespread industry interest in the architecture.

### DeepSeekMoE Innovations

DeepSeek's MoE architecture introduced two key innovations that have influenced subsequent work:

**Fine-Grained Expert Segmentation:** Instead of using a small number of large experts, DeepSeekMoE splits experts into many smaller ones (e.g., 256 routed experts in DeepSeek-V3). By splitting the FFN intermediate hidden dimension, this segmentation allows for more flexible combinations of activated experts and facilitates more precise knowledge specialization at a higher level of granularity.

**Shared Expert Isolation:** DeepSeekMoE isolates specific experts as "shared experts" that are always activated for every token. These shared experts capture common knowledge across different contexts, reducing redundancy among the routed experts. In DeepSeek-V2, each MoE layer contains 2 shared experts and 160 routed experts, with 6 routed experts activated per token.

### DBRX Fine-Grained MoE

DBRX, released by Databricks in March 2024, uses a fine-grained MoE architecture with 16 experts (choosing 4 per token), in contrast to Mixtral and Grok-1 which use 8 experts and choose 2. This configuration provides 65 times more possible combinations of experts, improving model quality. DBRX also uses "dropless" MoE routing via MegaBlocks, which reformulates MoE computation using block-sparse operations to avoid token dropping entirely.

### Jamba: Hybrid Architecture

Jamba, developed by AI21 Labs and released in March 2024, combines the MoE architecture with a hybrid Transformer-[Mamba](/wiki/mamba) design. The model interleaves Transformer attention layers with Mamba (state space model) layers in a 1:7 ratio, and applies MoE to every other MLP layer. Each MoE layer contains 16 experts with top-2 routing. This hybrid approach provides high throughput and small memory footprint compared to pure Transformer models, while achieving strong performance on benchmarks up to 256K token context lengths.

### Llama 4 MoE

Llama 4, released by Meta in April 2025, represents Meta's first use of the MoE architecture in the Llama family. The models use alternating dense and MoE layers for inference efficiency. Llama 4 Maverick uses 128 routed experts plus 1 shared expert, with each token sent to the shared expert and one routed expert. Llama 4 Behemoth, a teacher model with nearly 2 trillion total parameters and 288 billion active parameters, uses 16 experts. Meta highlighted that MoE architectures deliver higher quality compared to dense models given a fixed training [FLOPs](/wiki/flops) budget.

## Applications Beyond Language

### Vision

V-MoE, developed by Google, applies sparse MoE to the [Vision Transformer](/wiki/vision_transformer) (ViT) architecture by replacing dense FFN layers with sparse mixtures of independent FFNs. A 15 billion parameter V-MoE model achieved 90.35% test accuracy on ImageNet, near state-of-the-art at the time of publication. MoE-LLaVA extends MoE to large vision-language models, achieving performance comparable to dense models with approximately 3 billion sparsely activated parameters.

### Machine Translation

MoE has been extensively applied to machine translation, where different experts can specialize in different language pairs or linguistic phenomena. GShard demonstrated this at scale, training a 600B+ parameter multilingual translation model that achieved superior quality compared to dense models while training in a fraction of the time.

### Multi-Task Learning

M3ViT and related work apply MoE to multi-task learning in vision, where different experts specialize in different tasks (e.g., segmentation, detection, classification) while sharing a common backbone. The routing mechanism allows the model to dynamically allocate capacity based on task requirements.

## Inference Optimization

### Quantization

Quantization techniques can dramatically reduce the memory footprint of MoE models. QMoE demonstrated that a 1.6 trillion parameter Switch Transformer could be quantized to less than 1 bit per parameter, reducing the model from 3.2 TB to 160 GB, making deployment on commodity hardware feasible.

### Knowledge Distillation

MoE models can be distilled into smaller dense models, retaining 30-40% of the sparsity gains while dramatically reducing serving complexity. This approach allows the benefits of MoE-scale pretraining to be captured in deployment-friendly dense architectures.

### Expert Merging

Expert merging aggregates expert weights to reduce the total parameter count at inference time. This trades model quality for reduced memory requirements and simpler serving.

### Expert Offloading

For resource-constrained environments, expert offloading stores inactive experts in CPU memory or disk and loads them into GPU memory on demand. This enables running large MoE models on hardware that cannot fit all experts simultaneously, at the cost of increased latency from data transfers.

## Scaling Laws

Research on MoE scaling has established several empirical findings:

- Increasing the number of experts improves sample efficiency and training speed, but with diminishing returns beyond 256 to 512 experts.
- Memory cost increases linearly with the number of experts.
- Quality improvements are consistent when scaling from 2 to 2,048 experts, though the marginal benefit decreases.
- MoE models achieve better performance per FLOP than dense models, meaning that for a fixed compute budget, MoE training produces higher-quality models.
- DeepSeek-V3, with 671 billion total parameters and 37 billion active parameters, was pre-trained on 14.8 trillion tokens using only 2.788 million H800 GPU hours, demonstrating the compute efficiency of well-designed MoE architectures.

## Training Tips and Best Practices

Based on published research and practitioner experience, the following guidelines have emerged for training MoE models:

| Aspect | Recommendation |
| --- | --- |
| Number of experts | Start with 8 per layer; scale up as needed |
| Routing | Top-2 is a robust default; top-1 if communication is bottleneck |
| Capacity factor | 1.0 to 1.25 for training; adjust during evaluation |
| Precision | bfloat16 for experts; full precision for router |
| Auxiliary loss | Keep enabled but use small coefficient |
| Router z-loss | Enable for training stability |
| Learning rate | 2-3x higher than equivalent dense model |
| Batch size | Can be smaller than dense model equivalents |
| Fine-tuning dropout | Use higher dropout for expert layers than dense layers |
| Instruction tuning | Strongly recommended; MoE benefits more than dense models |

## See Also

- [Transformer](/wiki/transformer)
- [Large language model](/wiki/large_language_model)
- [Attention mechanism](/wiki/attention_mechanism)
- [Sparse model](/wiki/sparse_model)
- [DeepSeek](/wiki/deepseek)
- [Mixtral](/wiki/mixtral)
- [Llama](/wiki/llama)
- [GPT-4](/wiki/gpt-4)
- [Scaling laws](/wiki/scaling_laws)
- [Model parallelism](/wiki/model_parallelism)
- [Knowledge distillation](/wiki/knowledge_distillation)
- [Mamba](/wiki/mamba)

## References

1. Jacobs, R. A., Jordan, M. I., Nowlan, S. J., & Hinton, G. E. (1991). "Adaptive Mixtures of Local Experts." *Neural Computation*, 3(1), 79-87. [https://direct.mit.edu/neco/article/3/1/79/5560/Adaptive-Mixtures-of-Local-Experts](https://direct.mit.edu/neco/article/3/1/79/5560/Adaptive-Mixtures-of-Local-Experts)

2. Jordan, M. I. & Jacobs, R. A. (1994). "Hierarchical Mixtures of Experts and the EM Algorithm." *Neural Computation*, 6(2), 181-214. [https://direct.mit.edu/neco/article/6/2/181/5779/Hierarchical-Mixtures-of-Experts-and-the-EM](https://direct.mit.edu/neco/article/6/2/181/5779/Hierarchical-Mixtures-of-Experts-and-the-EM)

3. Shazeer, N., Mirhoseini, A., Maziarz, K., Davis, A., Le, Q., Hinton, G., & Dean, J. (2017). "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer." *arXiv:1701.06538*. [https://arxiv.org/abs/1701.06538](https://arxiv.org/abs/1701.06538)

4. Lepikhin, D., Lee, H., Xu, Y., Chen, D., Firat, O., Huang, Y., Krikun, M., Shazeer, N., & Chen, Z. (2020). "GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding." *arXiv:2006.16668*. [https://arxiv.org/abs/2006.16668](https://arxiv.org/abs/2006.16668)

5. Fedus, W., Zoph, B., & Shazeer, N. (2021). "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity." *Journal of Machine Learning Research*, 23(120), 1-40. [https://arxiv.org/abs/2101.03961](https://arxiv.org/abs/2101.03961)

6. Zoph, B., Bello, I., Kumar, S., Du, N., Huang, Y., Dean, J., Shazeer, N., & Fedus, W. (2022). "ST-MoE: Designing Stable and Transferable Sparse Expert Models." *arXiv:2202.08906*. [https://arxiv.org/abs/2202.08906](https://arxiv.org/abs/2202.08906)

7. Jiang, A. Q., Sablayrolles, A., Roux, A., Mensch, A., Savary, B., Bamford, C., ... & Sayed, W. E. (2024). "Mixtral of Experts." *arXiv:2401.04088*. [https://arxiv.org/abs/2401.04088](https://arxiv.org/abs/2401.04088)

8. DeepSeek-AI. (2024). "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models." *arXiv:2401.06066*. [https://arxiv.org/abs/2401.06066](https://arxiv.org/abs/2401.06066)

9. DeepSeek-AI. (2024). "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model." *arXiv:2405.04434*. [https://arxiv.org/abs/2405.04434](https://arxiv.org/abs/2405.04434)

10. DeepSeek-AI. (2024). "DeepSeek-V3 Technical Report." *arXiv:2412.19437*. [https://arxiv.org/abs/2412.19437](https://arxiv.org/abs/2412.19437)

11. Databricks. (2024). "Introducing DBRX: A New State-of-the-Art Open LLM." [https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm)

12. Lieber, O., Lenz, B., Bata, H., et al. (2024). "Jamba: A Hybrid Transformer-Mamba Language Model." *arXiv:2403.19887*. [https://arxiv.org/abs/2403.19887](https://arxiv.org/abs/2403.19887)

13. xAI. (2024). "Open Release of Grok-1." [https://x.ai/news/grok-os](https://x.ai/news/grok-os)

14. Meta AI. (2025). "The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation." [https://ai.meta.com/blog/llama-4-multimodal-intelligence/](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)

15. Qwen Team. (2025). "Qwen3 Technical Report." *arXiv:2505.09388*. [https://arxiv.org/abs/2505.09388](https://arxiv.org/abs/2505.09388)

16. Puigcerver, J., Riquelme, C., Mustafa, B., & Houlsby, N. (2023). "From Sparse to Soft Mixtures of Experts." *ICLR 2024*. [https://arxiv.org/abs/2308.00951](https://arxiv.org/abs/2308.00951)

17. Sanseviero, O., Tunstall, L., Schmid, P., Mangrulkar, S., Belkada, Y., & Cuenca, P. (2023). "Mixture of Experts Explained." *Hugging Face Blog*. [https://huggingface.co/blog/moe](https://huggingface.co/blog/moe)

18. Wang, Z., Zeng, Y., Yan, Z., Gu, Y., & Wang, Y. (2024). "ReMoE: Fully Differentiable Mixture-of-Experts with ReLU Routing." *arXiv:2412.14711*. [https://arxiv.org/abs/2412.14711](https://arxiv.org/abs/2412.14711)

19. Wang, Z., Dai, Z., Oymak, S., & Zhou, D. (2024). "Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts." *arXiv:2408.15664*. [https://arxiv.org/abs/2408.15664](https://arxiv.org/abs/2408.15664)

20. Riquelme, C., Puigcerver, J., Mustafa, B., et al. (2021). "Scaling Vision with Sparse Mixture of Experts." *NeurIPS 2021*. [https://research.google/blog/scaling-vision-with-sparse-mixture-of-experts/](https://research.google/blog/scaling-vision-with-sparse-mixture-of-experts/)

21. Lin, B., Tang, Z., Ye, Y., et al. (2024). "MoE-LLaVA: Mixture of Experts for Large Vision-Language Models." *arXiv:2401.15947*. [https://arxiv.org/abs/2401.15947](https://arxiv.org/abs/2401.15947)

22. Mistral AI. (2024). "Cheaper, Better, Faster, Stronger" (Mixtral 8x22B announcement). [https://mistral.ai/news/mixtral-8x22b](https://mistral.ai/news/mixtral-8x22b)
