---
title: "DeepSeek 3.0"
slug: "deepseek_3_0"
categories:
  - "Large_Language_Models"
  - "Artificial_Intelligence"
  - "DeepSeek_Project"
  - "Open_Source_Models"
---**DeepSeek 3.0** is an [open-source](/index.php?title=Open-source&action=edit&redlink=1) [Mixture-of-Experts (MoE)](/index.php?title=Mixture-of-Experts_(MoE)&action=edit&redlink=1) [large language model (LLM)](/index.php?title=Large_language_model_(LLM)&action=edit&redlink=1) developed by the [DeepSeek-AI](/wiki/deepseek-ai) team. With a total of 671 billion parameters, of which 37 billion are activated per token, DeepSeek-V3 balances high performance on a wide range of tasks with a cost-effective training scheme. Notably, it integrates [Multi-head Latent Attention (MLA)](/index.php?title=Multi-head_Latent_Attention_(MLA)&action=edit&redlink=1) and a specialized [MoE architecture](/index.php?title=MoE_architecture&action=edit&redlink=1) called [DeepSeekMoE](/index.php?title=DeepSeekMoE&action=edit&redlink=1), leveraging advancements in [load balancing](/index.php?title=Load_balancing&action=edit&redlink=1) and [multi-token prediction](/index.php?title=Multi-token_prediction&action=edit&redlink=1).

## [Overview](/index.php?title=Overview&action=edit&redlink=1)

DeepSeek-V3 is designed to push the boundaries of open-source large language models, achieving strong results in [knowledge](/index.php?title=Knowledge&action=edit&redlink=1), [code](/index.php?title=Code&action=edit&redlink=1), and [mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1). The model was pre-trained on [14.8 trillion](/index.php?title=14.8_trillion&action=edit&redlink=1) diverse tokens and subsequently underwent [Supervised Fine-Tuning (SFT)](/index.php?title=Supervised_Fine-Tuning_(SFT)&action=edit&redlink=1) and [Reinforcement Learning (RL)](/index.php?title=Reinforcement_Learning_(RL)&action=edit&redlink=1). It is released under an open-source license, with checkpoints publicly available at [https://github.com/deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3).

Despite the large model size, DeepSeek-V3’s architectural and engineering optimizations enable its training to be completed with approximately 2.788 million H800 GPU hours. The total cost is estimated at USD $5.576 million (assuming $2 per GPU hour), which includes:

2.664 million GPU hours for pre-training
119 thousand GPU hours for context-length extension (up to 128K tokens)
5 thousand GPU hours for post-training

### Key Features

- **Mixture-of-Experts (MoE) Architecture**: Employs a large-scale MoE (DeepSeekMoE) where each feed-forward layer consists of both shared experts and routed experts. This design offers cost-effective scaling to 671B total parameters.

- **Multi-head Latent Attention (MLA)**: Reduces memory overhead during inference via low-rank compression of keys and values, while preserving high-quality attention performance.

- **Auxiliary-Loss-Free Load Balancing**: Avoids performance degradation caused by traditional auxiliary-loss-based balancing methods, instead using a bias-based token-routing strategy that dynamically ensures balanced expert utilization.

- **Multi-Token Prediction (MTP)**: Trains the model to predict multiple future tokens at each position, improving data efficiency and enabling speculative decoding for faster inference.

- **FP8 Mixed-Precision Training**: Incorporates a fine-grained quantization strategy with increased internal accumulation precision to maintain training stability, while reducing training times and GPU memory usage.

- **Efficient Distributed Training**: Uses the custom *DualPipe* algorithm for pipeline parallelism, which overlaps computation and communication (particularly cross-node all-to-all operations in MoE layers). This near-zero overhead design maximizes training throughput across large GPU clusters.

## Architecture

### Basic Structure

DeepSeek-V3 follows the Transformer framework, extending it with:

Multi-head Latent Attention (MLA): Compresses key and value vectors into a low-dimensional latent representation. This approach lowers memory usage in the key-value cache for autoregressive generation.

DeepSeekMoE: Uses a large number of fine-grained experts to improve training cost-efficiency. Each MoE layer contains both routed experts (each token is directed to a subset of them based on learned affinity) and shared experts.

### Load Balancing

Traditional MoE models rely on an auxiliary loss to prevent routing collapse. DeepSeek-V3 introduces an “auxiliary-loss-free” approach, adding a bias to the affinity scores for gating and adjusting them step-by-step to prevent any expert from becoming overloaded. This eliminates the performance penalty often seen with large auxiliary loss values.

A small sequence-wise balance loss is additionally applied to prevent extreme imbalance within individual sequences, but it is set to a very low weight to minimize its impact on the model’s main objective.

### Multi-Token Prediction (MTP)

Besides predicting the next token, DeepSeek-V3 also predicts an additional token at each timestep.

Implementation: Sequential modules generate multiple tokens (for example token+1, token+2), each with its own output head but sharing embedding and other components.

Benefits: Densifies training signals, boosts final performance on various benchmarks, and enables speculative decoding during inference.

## Training Infrastructure

### GPU Cluster and Parallelism

DeepSeek-V3 is trained on a cluster of 2,048 NVIDIA H800 GPUs. Each node has 8 GPUs connected via NVLink/NVSwitch, while nodes are interconnected via InfiniBand (IB).

Key parallelization strategies include:

- Pipeline Parallelism (PP16): Splits the model layers across GPUs, with a novel scheduler called “DualPipe” that reduces pipeline bubbles and overlaps forward/backward phases with communication.

- Expert Parallelism (EP64): MoE experts are distributed across multiple nodes, achieving nearly full overlap of computation and cross-node all-to-all communication.

- Data Parallelism (ZeRO-1): Reduces memory overhead by sharding optimizer states.

### FP8 Mixed-Precision Training

DeepSeek-V3 adopts a specialized low-precision framework to accelerate training. By default, compute-intensive matrix multiplications run in FP8, combined with carefully designed fine-grained quantization and higher-precision accumulation (BF16 or FP32) for stability. The approach significantly reduces both memory use and training time.

### Memory and Communication Optimizations

Recomputation Strategy: Recomputes certain layers (for example RMSNorm) in the backward pass to lower memory usage.

Low-Precision Optimizer States: Stores first- and second-moment terms in BF16 to reduce memory footprint.

Dispatch & Combine Kernels: Customized all-to-all kernels that adapt to both IB and NVLink bandwidth, limiting SM usage to only ~20 SMs per GPU.

## Pre-Training

DeepSeek-V3 is pretrained on 14.8 trillion tokens featuring multilingual text (English, Chinese, etc.), mathematics, programming data, and more. It employs the Fill-in-Middle (FIM) strategy for ~10% of sequences, adding variety to the training objective.
Hyper-parameters for pre-training include: *Sequence Length: 4K tokens (later extended up to 128K)

- Optimizer: AdamW with a maximum learning rate of 2.2×10^-4

- Batch Size: Gradually increases up to 15,360

- Gradient Clipping Norm: 1.0

### Long Context Extension

After base pre-training, DeepSeek-V3’s context window is extended from 4K to 32K, then from 32K to 128K, using the YaRN method. This process preserves the model’s capabilities while enabling it to handle extremely long input sequences. In testing, DeepSeek-V3 maintains robust performance on tasks with inputs up to 128K tokens (for example the “Needle in a Haystack” test).

## Post-Training

Post-training involves two main phases:

### Supervised Fine-Tuning (SFT)

A curated 1.5M-instance instruction dataset covers code, math, role-play, and knowledge Q&A. Distillation from DeepSeek-R1 ensures high reasoning accuracy. The final SFT stage takes the base model and adapts it to user queries and various instructions.

### Reinforcement Learning (RL)

DeepSeek-V3 uses: *Rule-Based Reward Models: For tasks with hard-checkable correctness (for example math solutions, code testcases).

- Model-Based Reward Models: For open-ended or creative tasks lacking a single correct answer.

Additionally, the Group Relative Policy Optimization (GRPO) approach replaces large critic models with group-based sampling to estimate advantages. This method significantly improves alignment and generation quality.

## Performance and Benchmarks

DeepSeek-V3 achieves state-of-the-art results among open-source LLMs, and often rivals or matches popular closed-source systems (for example GPT-4o and Claude-3.5). Highlights include:

1. Knowledge: Achieves top-tier scores on MMLU, MMLU-Pro, and GPQA-Diamond, showcasing broad subject knowledge.

2. Code: Dominates code generation benchmarks (for example HumanEval, LiveCodeBench) and demonstrates strong results in engineering tasks (SWE-bench Verified).

3. Math & Reasoning: Scores 90.2% EM on MATH-500 and 39.2% Pass@1 on AIME 2024, outperforming many closed-source models without “long chain-of-thought” style prompting.

## Limitations

Large Deployment Units: Efficient inference typically requires multi-node (multiple GPUs) setups, which can be resource-intensive for smaller organizations.

Throughput vs. Latency Balance: Despite major improvements (2× speedup vs. previous versions), further optimizations could be pursued for real-time user interactions.

## Future Directions

According to the DeepSeek-AI team, future work for DeepSeek-V3 (and subsequent iterations) involves: *Further exploration of efficient architectures (potentially beyond Transformers)

- Improved data curation and training signal sources for scaling

- Enhanced “deep thinking” or extended chain-of-thought reasoning

- More comprehensive benchmarking to reduce overfitting on common benchmarks

## References

1. DeepSeek-AI. *DeepSeek-V3 Technical Report*. 2024. [GitHub link](https://github.com/deepseek-ai/DeepSeek-V3)

2. Dai, D. et al. *DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models.* (2024).

3. Peng, B. et al. *YaRN: Efficient Context Window Extension of Large Language Models.* (2023).

4. Wang, L. et al. *Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts.* (2024).