---
title: "LoRA"
slug: "lora"
categories:
  - "Machine_learning"
  - "Deep_learning"
  - "Artificial_intelligence"
  - "Natural_language_processing"
  - "Computer_vision"
  - "2021_in_computing"
  - "Parameter-efficient_fine-tuning"
---

**Low-Rank Adaptation (LoRA)** is a [parameter-efficient fine-tuning](/wiki/parameter-efficient_fine-tuning) (PEFT) technique that reduces trainable parameters by up to **10,000x** while matching or exceeding full [fine-tuning](/wiki/fine-tuning) performance. By freezing pre-trained model weights and injecting trainable [low-rank decomposition](/wiki/low-rank_approximation) matrices into [neural network](/wiki/neural_network) layers, LoRA enables fine-tuning of massive models like [GPT-3](/wiki/gpt-3) 175B on consumer hardware with **3x less GPU memory** and **zero inference latency overhead**.[&#91;1&#93;](#cite_note-hu2021-1) Originally developed at [Microsoft](/wiki/microsoft) Research in 2021 for [large language models](/wiki/large_language_model), LoRA has become the dominant adaptation method across AI domains including [diffusion models](/wiki/diffusion_models), [vision transformers](/wiki/vision_transformer), and [multimodal systems](/wiki/multimodal_learning), with over 60,000 public adapters deployed on platforms like [Hugging Face](/wiki/hugging_face) and CivitAI.[&#91;2&#93;](#cite_note-hf_peft-2) The original paper, "LoRA: Low-Rank Adaptation of Large Language Models," was presented at [ICLR](/wiki/iclr) 2022 and has become one of the most cited works in the parameter-efficient fine-tuning literature, with the number of related publications demonstrating exponential growth year over year.[&#91;3&#93;](#cite_note-survey2024-3)

## Core concept and mathematical foundations

LoRA addresses a fundamental challenge in modern AI: as models scale to billions of parameters, traditional fine-tuning becomes prohibitively expensive. The technique builds on theoretical work demonstrating that pre-trained language models have low "[intrinsic dimensionality](/wiki/intrinsic_dimensionality)," meaning they can learn effectively in much smaller subspaces than their full parameter count suggests.[&#91;4&#93;](#cite_note-aghajanyan2020-4) In a striking demonstration of this principle, Aghajanyan et al. (2020) showed that [RoBERTa](/wiki/roberta) could be effectively fine-tuned by optimizing in extremely small subspaces, achieving 90% of full fine-tuning performance on the MRPC task with only 200 trainable parameters through random projection.[&#91;4&#93;](#cite_note-aghajanyan2020-4) LoRA applies this insight by hypothesizing that weight updates during adaptation also possess low intrinsic rank, meaning most adaptation can occur along relatively few dimensions.

### Mathematical formulation

The mathematical formulation elegantly decomposes weight updates. For any pre-trained weight matrix **W₀ ∈ ℝ^(d x k)**, LoRA constrains updates via low-rank decomposition:

**W₀ + ΔW = W₀ + BA**

where **B ∈ ℝ^(d x r)** and **A ∈ ℝ^(r x k)** with rank **r << min(d, k)**. During training, W₀ remains frozen while only the low-rank matrices B and A are updated. The modified forward pass becomes:

**h = W₀x + (α/r) · BAx**

where α is a scaling hyperparameter typically set to twice the rank.[&#91;1&#93;](#cite_note-hu2021-1)

This decomposition achieves dramatic parameter reduction. A full update matrix with dimensions 10,000 x 10,000 requires 100 million parameters, but with rank r = 8, the low-rank factorization needs only **r(d + k) = 160,000 parameters**, a **625x reduction**. The initialization strategy ensures continuity: matrix A uses random [Gaussian initialization](/wiki/weight_initialization) (typically [Kaiming-uniform](/wiki/weight_initialization)) while B initializes to zero, guaranteeing **ΔW = BA = 0** at training start so the model begins from exact pre-trained weights.[&#91;1&#93;](#cite_note-hu2021-1)

### Theoretical justification

The theoretical justification comes from subspace analysis showing that [singular value decompositions](/wiki/singular_value_decomposition) of low-rank and higher-rank LoRA matrices share significant overlap in their top singular directions. Research demonstrates that adaptation matrices truly have very low rank; even r = 1 or r = 2 suffices for many tasks despite full-rank dimensions exceeding 12,000.[&#91;1&#93;](#cite_note-hu2021-1) Importantly, LoRA's learned updates amplify directions that were de-emphasized during pre-training, enabling task-specific feature learning without [catastrophic forgetting](/wiki/catastrophic_forgetting) of pre-trained knowledge.

The low-rank constraint also provides an implicit form of [regularization](/wiki/regularization). Because the model can only update along a limited number of dimensions, it is forced to learn only the most essential adaptations for the target task. This prevents overfitting, particularly when training data is scarce, and helps the model retain more of its general knowledge from pre-training.

## History and development

### Origins at Microsoft Research

Eight researchers at [Microsoft Corporation](/wiki/microsoft) created LoRA, with Edward J. Hu and Yelong Shen as equal first authors alongside Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, and Weizhu Chen. The team first submitted their paper "LoRA: Low-Rank Adaptation of Large Language Models" to [arXiv](/wiki/arxiv) on **June 17, 2021** (arXiv:2106.09685), with publication at the International Conference on Learning Representations (**[ICLR](/wiki/iclr) 2022**).[&#91;1&#93;](#cite_note-hu2021-1)[&#91;5&#93;](#cite_note-openreview-5) Edward Hu, who invented LoRA during his AI residency at Microsoft Research, later joined [OpenAI](/wiki/openai) and pursued doctoral studies under [Yoshua Bengio](/wiki/yoshua_bengio) at [Mila](/wiki/mila) in Montreal.[&#91;6&#93;](#cite_note-edwardhu-6) The team also released loralib, a [PyTorch](/wiki/pytorch) package for integrating LoRA into existing models, alongside the paper.[&#91;7&#93;](#cite_note-msft_github-7)

### Theoretical foundations

The work built directly on groundbreaking research by Armen Aghajanyan and colleagues who published "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning" in December 2020.[&#91;4&#93;](#cite_note-aghajanyan2020-4) That paper demonstrated pre-trained language models could be effectively fine-tuned by optimizing in extremely small subspaces, achieving 90% of full fine-tuning performance on RoBERTa with just 200 trainable parameters through random projection. This empirical evidence that learned models reside on low intrinsic dimensions provided the theoretical foundation for LoRA's hypothesis that weight updates during adaptation also have low intrinsic rank.

### Original experimental validation

The original LoRA paper validated the approach across multiple architectures. On GPT-3 175B, LoRA with rank r = 4 achieved **73.4% accuracy on WikiSQL** versus 73.8% for full fine-tuning while reducing trainable parameters from 175 billion to just **4.7 million** (roughly 18 million parameters when applied to all attention layers).[&#91;1&#93;](#cite_note-hu2021-1)[&#91;8&#93;](#cite_note-IBM-8) On RoBERTa, LoRA with only 0.3 million parameters outperformed full fine-tuning's 125 million parameters. The breakthrough enabled inference with zero latency overhead by merging weights (W = W₀ + BA) during deployment, unlike adapter methods that added 20-30% latency.

### Rapid adoption and ecosystem growth

Adoption exploded rapidly. By late 2022, members of the [Stable Diffusion](/wiki/stable_diffusion) community adapted LoRA for fine-tuning the diffusion model's cross-attention layers, enabling the model to learn new visual concepts and styles from a small number of images without full model retraining.[&#91;9&#93;](#cite_note-HFSD-9) Hugging Face integrated LoRA into their [PEFT](/wiki/peft) library in February 2023, making it accessible to millions of developers.[&#91;2&#93;](#cite_note-hf_peft-2) The **Alpaca-LoRA** project (early 2023) demonstrated that it was possible to replicate the instruction-following capabilities of Stanford's Alpaca model by fine-tuning the LLaMA 7B model using LoRA on a single consumer GPU (an RTX 4090) in a matter of hours, becoming a landmark moment for community-driven open-source AI development.[&#91;10&#93;](#cite_note-alpaca-10)

By 2024-2025, major companies including [Apple](/wiki/apple_inc), Microsoft, OpenAI, [NVIDIA](/wiki/nvidia), [Google](/wiki/google), and [Meta](/wiki/meta) deployed LoRA in production systems. Apple's introduction of Apple Intelligence at WWDC 2024 notably uses LoRA adapters on top of quantized on-device models (approximately 3 billion parameters) to dynamically specialize the system for tasks like email summarization, notification management, and writing assistance, demonstrating LoRA's viability for consumer edge devices.[&#91;11&#93;](#cite_note-apple2024-11) Meanwhile, the research community generated dozens of variants and extensions addressing specific limitations.

## Technical architecture and algorithm

### Adapter injection and initialization

LoRA integrates seamlessly into [transformer](/wiki/transformer) architectures by targeting specific linear layers. For transformer attention mechanisms with model dimension d_model (typically 768 to 12,288), LoRA modifies the query, key, value, and output projection matrices. Each projection matrix **W_q ∈ ℝ^(d_model x d_model)** receives corresponding LoRA matrices **B_q ∈ ℝ^(d_model x r)** and **A_q ∈ ℝ^(r x d_model)**, transforming the forward pass to **h = W_q x + B_q A_q x**.[&#91;1&#93;](#cite_note-hu2021-1)

The initialization strategy is crucial for stable training. Matrix A is initialized from a random Gaussian distribution (typically using Kaiming-uniform initialization), while matrix B is initialized to zero. This ensures that at the beginning of training, the adapted model is identical to the base model (since BA = 0), providing a stable starting point and preventing abrupt, potentially destabilizing changes to the model's behavior. The adaptation is learned gradually as B's weights move away from zero during training.[&#91;1&#93;](#cite_note-hu2021-1)

### Gradient flow and backpropagation

The [gradient](/wiki/gradient) flow during [backpropagation](/wiki/backpropagation) follows standard chain rule mechanics but only updates the low-rank matrices. For loss L, gradients compute as:

- **∂L/∂B = (∂L/∂h)(Ax^T)**
- **∂L/∂A = B^T(∂L/∂h)(x^T)**

The frozen W₀ receives no gradient updates. This dramatically reduces optimizer memory requirements. With [Adam](/wiki/adam_optimizer) requiring 3x parameters for weights plus two momentum states, LoRA eliminates optimizer states for billions of frozen parameters, storing only 3r(d + k) additional values for the low-rank adapters.[&#91;1&#93;](#cite_note-hu2021-1)

Computational complexity remains tractable. The forward pass for W₀x requires O(d²) operations while the LoRA component BAx requires O(r(d + k)) ≈ O(2rd) for square matrices, representing minimal overhead when r << d. For GPT-3 175B with d = 12,288 and r = 4, each LoRA-modified layer adds approximately **100,000 operations** versus **150 million** for the frozen matrix, a negligible **0.07% increase**. During inference, weight merging eliminates even this small overhead, producing a single matrix W = W₀ + BA with identical dimensions and computational requirements as the original.[&#91;1&#93;](#cite_note-hu2021-1)

### Rank-stabilized scaling

The rank-stabilized scaling factor α/r serves critical purposes beyond simple magnitude control. When adjusting rank during experimentation, maintaining constant α means the effective scaling changes proportionally: if doubling rank from 8 to 16, the same α value automatically halves the per-parameter influence, stabilizing training dynamics. Recent research introduced alternative scaling α/√r (rsLoRA) that prevents gradient collapse at higher ranks, enabling effective use of r > 64 where standard scaling fails.[&#91;12&#93;](#cite_note-rslora-12)

### Weight merging for deployment

A distinctive advantage of LoRA over other adapter-based methods is the ability to merge the learned adapter weights back into the base model after training. By computing W = W₀ + BA, the resulting model has identical architecture and computational cost to the original pre-trained model. This "train as adapter, deploy as native" capability means that at inference time there is no additional latency, no extra memory overhead, and no routing logic needed. The merged model behaves exactly as if it had been fully fine-tuned, but was trained with a fraction of the compute and memory.

## Parameter configuration and hyperparameters

### Rank selection

The rank hyperparameter r fundamentally controls LoRA's capacity-efficiency tradeoff. The original paper demonstrated that even r = 1 performs competitively on many tasks, a remarkable finding suggesting adaptation's intrinsic dimension is extraordinarily low.[&#91;1&#93;](#cite_note-hu2021-1)

| Task Complexity | Recommended Rank (r) | Approximate Trainable Params (7B model) | Use Cases |
| --- | --- | --- | --- |
| Simple style/format changes | 4-8 | ~2-4 million (0.03-0.06%) | Tone adjustment, output formatting |
| Standard instruction tuning | 16-32 | ~4-8 million (0.06-0.12%) | Chat fine-tuning, domain adaptation |
| Complex task learning | 32-64 | ~8-16 million (0.12-0.24%) | Specialized reasoning, code generation |
| Substantial knowledge injection | 64-256 | ~16-50 million (0.24-0.75%) | Domain-specific knowledge, continued pretraining |

Sebastian Raschka's practical guidance recommends starting with **r = 16** as a reliable default, then adjusting based on training behavior.[&#91;13&#93;](#cite_note-sebastian2024-13) For a 7B parameter model, rank 8 adds approximately **4.2 million trainable parameters** (0.06%), while rank 256 adds approximately **20.3 million** (0.3%).

### Alpha parameter

The alpha parameter α scales LoRA updates via α/r before adding to frozen weights. Common practice sets **α = 2r**, producing an effective scaling factor of 2, though α = r (scaling factor 1) offers more conservative adaptation.[&#91;14&#93;](#cite_note-determined-14) Crucially, research shows α and learning rate are mathematically interchangeable: tuning α roughly equals tuning learning rate with appropriate initialization. The recommended workflow fixes α early then adjusts only learning rate and rank, simplifying hyperparameter search. For extreme cases, alpha can be scaled down post-training (multiplying by 0.5) to reduce overfitting, effectively averaging between pre-trained and fine-tuned weights.

### Target module selection

Target module selection significantly impacts performance. While original research focused on query and value projection matrices (W_q, W_v) in attention layers, subsequent work (particularly the [QLoRA](/wiki/qlora) paper) demonstrated that **targeting all linear layers** including attention projections (q_proj, k_proj, v_proj, o_proj) and [MLP](/wiki/multilayer_perceptron) layers (gate_proj, up_proj, down_proj) substantially improves results.[&#91;15&#93;](#cite_note-dettmers2023-15) Attention-only configurations underperform badly, though they save minimal memory. Modern best practice enables LoRA on all major linear layers for optimal adaptation quality. In PEFT, the setting `target_modules="all-linear"` automates this configuration.

### Additional training hyperparameters

Additional hyperparameters include [dropout](/wiki/dropout) (typically 0.05-0.1, though recent research questions its reliability for short fine-tuning runs), [learning rate](/wiki/learning_rate) (2e-4 to 5e-4 for standard LoRA, significantly higher than full fine-tuning's typical 1e-5 to 3e-5), and training [epochs](/wiki/epoch) (1-3 recommended to prevent overfitting).[&#91;13&#93;](#cite_note-sebastian2024-13) For distributed training, effective batch size of 16 balances stability and performance, often achieved via small per-device batches (2-4) with gradient accumulation (4-8 steps).

| Hyperparameter | Typical Range | Recommended Start | Purpose |
| --- | --- | --- | --- |
| Rank (r) | 4-256 | 16 | Controls adaptation capacity |
| Alpha (α) | r to 4r | 2r | Scales LoRA influence |
| Learning Rate | 1e-4 to 5e-4 | 2e-4 | Update step size |
| Dropout | 0 to 0.1 | 0.05 | Regularization |
| Epochs | 1-5 | 3 | Training iterations |
| Effective Batch Size | 8-32 | 16 | Training stability |
| Target Modules | Attention-only to all-linear | all-linear | Which layers receive LoRA adapters |

## Advantages over traditional fine-tuning

### Parameter and memory efficiency

LoRA achieves **10,000x parameter reduction** while maintaining or exceeding full fine-tuning performance. On GPT-3 175B, LoRA with 4.7 million trainable parameters matched full fine-tuning's 175 billion parameters on WikiSQL (73.4% vs 73.8%) and actually surpassed it on MNLI-matched (91.7% vs 89.5%).[&#91;1&#93;](#cite_note-hu2021-1) On RoBERTa base, LoRA with 0.3 million parameters outperformed full fine-tuning's 125 million parameters across the [GLUE benchmark](/wiki/glue_benchmark) (87.2% vs 86.4% average accuracy). This performance parity stems from LoRA's implicit regularization: the low-rank constraint forces models to learn only the most essential adaptations, preventing overfitting particularly on small datasets.

Memory savings transform hardware requirements. Full fine-tuning GPT-3 175B demands **1.2TB [VRAM](/wiki/vram)** across multiple high-end GPUs, while LoRA reduces this to **350GB**, a **3x reduction**.[&#91;1&#93;](#cite_note-hu2021-1) For 7B parameter models, full fine-tuning requires 2+ GPUs totaling 73GB VRAM, but LoRA enables single-GPU training on **14-18GB consumer hardware**. Storage efficiency proves equally dramatic: LoRA checkpoints occupy **35MB** versus **350GB** for full models, enabling deployment of 100 task-specific adapters in 3.5GB versus 35TB for 100 full models. Optimizer state savings compound benefits: eliminating Adam states for frozen parameters saves an additional **2/3 VRAM**.

### Training speed

Training speed increases alongside memory efficiency. GPT-3 175B processes **43.1 tokens/second** per [V100](/wiki/nvidia_v100) GPU with LoRA versus **32.5 tokens/second** for full fine-tuning, a **25% throughput improvement**.[&#91;1&#93;](#cite_note-hu2021-1) This acceleration comes from fewer gradient computations and reduced memory bandwidth requirements. Variants like LoRA+ achieve **2x training speedups** through differential learning rates for matrices A and B,[&#91;16&#93;](#cite_note-loraplus-16) while specialized frameworks like [Unsloth](/wiki/unsloth) report additional 2x performance gains through Triton kernel optimization.[&#91;17&#93;](#cite_note-unsloth-17)

### Zero inference latency

Zero inference latency represents a unique LoRA advantage. By merging weights before deployment (W = W₀ + BA), the adapted model requires identical computation as the original: no additional forward pass operations, no dynamic adapter selection overhead.[&#91;1&#93;](#cite_note-hu2021-1) This contrasts sharply with adapter-based methods that impose **20-30% latency penalties** in online scenarios with small batch sizes. For production serving, a single base model can dynamically load different LoRA adapters (35MB each) to switch tasks in seconds, whereas full fine-tuned models require loading entire 350GB checkpoints.

### Low-data regime advantages

The technique excels in low-data regimes where full fine-tuning typically overfits. On MNLI with only 100 training examples, LoRA achieved **63.8% accuracy** versus **60.2%** for full fine-tuning.[&#91;1&#93;](#cite_note-hu2021-1) The low-rank constraint acts as strong regularization, preventing catastrophic forgetting of pre-trained capabilities. LoRA models maintain better performance on out-of-domain tasks and preserve more general knowledge while specializing for target tasks. Research titled "LoRA Learns Less and Forgets Less" confirms this fundamental tradeoff: LoRA retains more pre-trained knowledge (less forgetting) but may learn less in domains distant from pre-training data.[&#91;18&#93;](#cite_note-biderman2024-18)

## Limitations and performance boundaries

### Performance gaps on complex tasks

Mathematical reasoning and complex programming represent LoRA's most significant performance gaps. Research from [Anyscale](/wiki/anyscale) and Columbia University/[Databricks](/wiki/databricks) consistently shows full fine-tuning **substantially outperforms** LoRA on math datasets like [GSM8k](/wiki/gsm8k), the largest gap observed across benchmarks.[&#91;19&#93;](#cite_note-anyscale2023-19) Complex code generation similarly shows **4-6% lower** performance with LoRA, with full fine-tuning requiring fewer training examples to reach equivalent capabilities. The low-rank constraint appears insufficient for capturing intricate multi-step reasoning patterns these domains demand.

### Rank selection challenges

Rank selection remains frustratingly task-dependent with no universal heuristics. Optimal rank varies from 1 to 256+ depending on model size, dataset characteristics, and task complexity; practitioners must explore this hyperparameter space empirically for each configuration.[&#91;20&#93;](#cite_note-plora2024-20) Setting rank too low creates insufficient capacity for task-specific information, while excessive rank increases memory usage and risks overfitting with diminishing returns. The original paper demonstrated performance saturation (increasing rank beyond 4-8 provided minimal benefit on tested tasks), yet later research shows higher ranks (64-128) prove essential for complex domains.

### Learning stability

Learning stability requires careful hyperparameter tuning. Anyscale research documented "drastic differences in evaluation loss" from small learning rate changes, noting LoRA demands more careful tuning than full fine-tuning for stable training.[&#91;19&#93;](#cite_note-anyscale2023-19) In SQL task experiments, reducing learning rate from 1e-4 to 3e-5 proved necessary to stabilize training, illustrating the trickier optimization landscape created by limited parameters.

### Structural differences from full fine-tuning

Recent research revealed "intruder dimensions," which are high-ranking singular vectors in LoRA updates that are orthogonal to the pre-trained weight structure.[&#91;21&#93;](#cite_note-illusion2024-21) While LoRA matches target task accuracy, these structural differences cause models to become **worse predictors of pre-training distributions** and **adapt less robustly to sequential multi-task learning**. Higher-rank, rank-stabilized LoRA mitigates this issue but sacrifices efficiency advantages.

### Additional limitations

Information loss from matrix decomposition may introduce minor losses in models that are not heavily over-parameterized.[&#91;8&#93;](#cite_note-IBM-8) Batch size sensitivity poses practical constraints: research demonstrates LoRA performance **degrades faster** than full fine-tuning as batch size increases, independent of rank configuration.[&#91;22&#93;](#cite_note-gradientflow-22) When dataset size exceeds LoRA's inherent parameter storage capacity, such as in continued pretraining scenarios with millions of examples, full fine-tuning becomes necessary.

## QLoRA: Quantized Low-Rank Adaptation

### Background and motivation

**QLoRA (Quantized LoRA)** emerged in May 2023 from [University of Washington](/wiki/university_of_washington) researchers Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, and Luke Zettlemoyer, with the paper first posted to arXiv on May 23, 2023 (arXiv:2305.14314).[&#91;15&#93;](#cite_note-dettmers2023-15) It was later presented as an **oral paper at [NeurIPS](/wiki/neurips) 2023**, one of the most prestigious venues in machine learning. QLoRA's central contribution is enabling fine-tuning of models with up to 65 billion parameters on a single 48GB GPU while preserving full 16-bit fine-tuning task performance, a feat that was previously impossible without multi-GPU setups costing tens of thousands of dollars.

### Technical innovations

QLoRA introduces three key innovations that work together to achieve dramatic memory savings without sacrificing performance:

**4-bit NormalFloat (NF4) quantization:** Most quantization schemes use uniform quantization with evenly distributed quantization levels. However, neural network weights typically follow approximately normal distributions with most values clustered near zero. NF4 is an information-theoretically optimal data type for normally distributed data. It allocates more quantization levels to values near zero (where most weights are concentrated) and fewer levels to the tails of the distribution, achieving better accuracy per bit than standard 4-bit integer or floating-point representations.[&#91;15&#93;](#cite_note-dettmers2023-15)

**Double quantization:** Standard quantization requires storing quantization constants (scale factors and zero points) for each block of weights, which can add significant memory overhead. QLoRA's double quantization technique quantizes these quantization constants themselves, saving an average of about **0.37 bits per parameter** (approximately **3 GB for a 65B model**). Specifically, QLoRA divides parameters into blocks of 64, calculates a quantization constant for each block, and then further quantizes those constants into FP8 format using a secondary block size of 256.[&#91;15&#93;](#cite_note-dettmers2023-15)

**Paged optimizers:** During training, memory spikes can occur when processing mini-batches with long sequence lengths. QLoRA uses NVIDIA unified memory (the same mechanism behind CPU-GPU page transfers in operating systems) to automatically page optimizer states between GPU and CPU memory. This prevents out-of-memory errors during training spikes. With a batch size of 16, paged optimizers provide the same training speed as regular optimizers for 65B models on 48GB GPUs.[&#91;15&#93;](#cite_note-dettmers2023-15)

### QLoRA architecture

In the QLoRA architecture, the base model weights are stored in the 4-bit NF4 storage data type, but computations (forward and backward passes) are performed in 16-bit [BFloat16](/wiki/bfloat16) precision. During each forward pass, QLoRA dequantizes weights from 4-bit to BFloat16 on the fly, performs the computation, and then the LoRA adapter gradients flow through the dequantized weights. Only the LoRA adapter weights (in higher precision) are updated during backpropagation. This approach means the base model's memory footprint is reduced by approximately 4x compared to standard FP16 storage, while the adaptation quality remains equivalent to full 16-bit fine-tuning.[&#91;15&#93;](#cite_note-dettmers2023-15)

### Guanaco and benchmark results

The researchers used QLoRA to fine-tune more than 1,000 models across 8 instruction datasets, multiple model types ([LLaMA](/wiki/llama), [T5](/wiki/t5)), and model scales (7B, 13B, 33B, and 65B parameters). Their best model family, **Guanaco**, trained on only the OASST1 dataset, reached **99.3% of [ChatGPT](/wiki/chatgpt) performance** on the Vicuna benchmark while requiring only 24 hours of fine-tuning on a single GPU.[&#91;15&#93;](#cite_note-dettmers2023-15) The Guanaco 65B model outperformed all previously released open models and was competitive with commercial systems, demonstrating that state-of-the-art chatbot performance was achievable without access to massive compute clusters.

### Memory savings breakdown

| Configuration | Memory Required | Notes |
| --- | --- | --- |
| 65B full fine-tuning (16-bit) | >780 GB | Requires multiple high-end GPUs |
| 65B QLoRA (4-bit NF4 + double quant) | <48 GB | Single 48GB GPU (e.g., A6000 or A100-48GB) |
| 33B QLoRA | ~24 GB | Consumer GPU (e.g., RTX 3090/4090) |
| 13B QLoRA | ~12 GB | Mid-range consumer GPU |
| 7B QLoRA | ~6.5 GB | Low-end consumer GPU |

QLoRA trades **33% increased runtime** for this memory reduction due to the quantization/dequantization overhead during each forward and backward pass. However, this tradeoff is widely considered acceptable given the dramatic hardware accessibility improvements. Integration into Hugging Face PEFT and the bitsandbytes library made QLoRA the de facto standard for memory-constrained fine-tuning scenarios.[&#91;2&#93;](#cite_note-hf_peft-2)

### Impact and significance

QLoRA's practical impact on the AI community cannot be overstated. Before QLoRA, fine-tuning a 65B parameter model required hardware costing $100,000 or more. QLoRA made it possible on a single GPU costing under $5,000. This dramatically lowered the barrier to entry for researchers, hobbyists, and organizations in developing countries. The paper also established important findings about LoRA hyperparameters, notably that targeting all linear layers (not just attention projections) yields substantially better results, a finding that has become standard practice.[&#91;15&#93;](#cite_note-dettmers2023-15)

## Variant methods and extensions

### DoRA (Weight-Decomposed Low-Rank Adaptation)

**[DoRA](/wiki/dora)** from NVIDIA Research Taiwan, published February 2024 and accepted as an **[ICML](/wiki/icml) 2024 Oral** (1.5% acceptance rate), decomposes pre-trained weights into magnitude and direction components.[&#91;23&#93;](#cite_note-dora2024-23) The key insight behind DoRA is an analysis of the learning patterns of LoRA versus full fine-tuning. The authors observed that full fine-tuning tends to make large changes to the direction of weight vectors while keeping their magnitudes relatively stable. Standard LoRA, by contrast, changes both magnitude and direction in a coupled manner, which limits its expressiveness.

DoRA addresses this by decomposing a pre-trained weight matrix W₀ into its magnitude (m) and directional (V) components:

**W' = m x (V + ΔV) / ||V + ΔV||**

LoRA is applied only to the directional component V, while the magnitude m is trained as a separate set of parameters. This decomposition more closely mimics full fine-tuning's learning pattern. DoRA achieves **+3.7% improvement on [LLaMA](/wiki/llama)-7B** and **+1.0% on LLaMA-13B** for commonsense reasoning, consistently outperforming LoRA across LLaMA, [LLaVA](/wiki/llava), and VL-BART with zero additional inference overhead (the magnitude and direction can be merged back into a single weight matrix for deployment).[&#91;23&#93;](#cite_note-dora2024-23) DoRA is fully supported in the Hugging Face PEFT library for Linear, Conv1d, and Conv2d layers, as well as bitsandbytes-quantized layers. **QDoRA** extends the approach to quantized training, combining QLoRA's memory efficiency with DoRA's performance gains.[&#91;24&#93;](#cite_note-pravi-24)

### LoRA+ (Efficient Low Rank Adaptation)

**[LoRA+](/wiki/lora_plus)** (February 2024) by Soufiane Hayou, Nikhil Ghosh, and Bin Yu achieves **1-2% accuracy improvements** and **up to 2x training speedup** through the surprisingly simple modification of using different learning rates for adapter matrices A and B.[&#91;16&#93;](#cite_note-loraplus-16) The theoretical insight comes from scaling arguments in the infinite-width limit: the original LoRA updates both matrices with the same learning rate, but this does not allow efficient feature learning in large-width networks. LoRA+ corrects this by setting the learning rate of B to be λ times that of A, where λ >> 1 (typically λ = 16). More formally, stable feature learning requires η_A = Θ(n^-1) and η_B = Θ(1), meaning matrix B's learning rate should be significantly larger. The technique requires no additional computational cost beyond standard LoRA, merely a learning rate scheduler adjustment. LoRA+ was published at ICML 2024.[&#91;16&#93;](#cite_note-loraplus-16)

### AdaLoRA (Adaptive Budget Allocation)

**[AdaLoRA](/wiki/adalora)** (March 2023, ICLR 2023) dynamically allocates parameter budgets among weight matrices using importance scores derived from singular value decomposition.[&#91;25&#93;](#cite_note-adalora-25) It parameterizes weight updates using SVD and prunes the least important singular values during training. Different layers receive different ranks based on task requirements, concentrating parameters where they matter most and outperforming uniform-rank LoRA with identical total parameter budgets. The approach addresses LoRA's suboptimal uniform distribution assumption, though requiring calling `update_and_allocate()` during training adds implementation complexity.

### PiSSA (Principal Singular Values and Singular Vectors Adaptation)

**[PiSSA](/wiki/pissa)**, accepted as a [NeurIPS](/wiki/neurips) 2024 Spotlight, initializes adapter matrices with principal components from singular value decomposition of original weights rather than random noise.[&#91;26&#93;](#cite_note-pissa2024-26) This "train principal components, freeze residuals" approach contrasts with LoRA's "train noise and zero" strategy, achieving **dramatically faster convergence** and superior accuracy. On Mistral-7B, PiSSA reached **72.86% on GSM8K** versus LoRA's **67.7%** (+5.16%). On LLaMA-3-70B with quantization (QPiSSA), performance hit **86.05%** versus QLoRA's **81.73%**. PiSSA is supported in Hugging Face PEFT as an initialization method.

### VeRA (Vector-based Random Matrix Adaptation)

**[VeRA](/wiki/vera)** freezes a single pair of random low-rank matrices shared across all layers, training only small scaling vectors d and b.[&#91;27&#93;](#cite_note-vera-27) This radical approach achieves **10x fewer trainable parameters** than LoRA, reducing GPT-3 adapter parameters from 75.5M to 2.8M, while maintaining performance. The storage efficiency proves critical for deploying hundreds of task-specific modules.

### GaLore (Gradient Low-Rank Projection)

**[GaLore](/wiki/galore)** (March 2024, published at ICML 2024) takes a different approach by projecting full-parameter gradients into a low-rank space rather than adding low-rank adapters.[&#91;28&#93;](#cite_note-galore-28) GaLore leverages the fact that the gradient matrix itself becomes low-rank during training. It computes projection matrices to project the gradient and its optimizer states into a low-rank form, periodically updating these projections every ~200 iterations. GaLore reduces memory usage by up to **65.5% in optimizer states** while maintaining full-parameter training quality, and demonstrated for the first time the feasibility of pre-training a 7B model on a consumer GPU with 24GB memory (such as an NVIDIA RTX 4090) without model parallelism, checkpointing, or offloading strategies.

### Additional notable variants

| Variant | Core Innovation | Key Benefit(s) | Primary Use Case |
| --- | --- | --- | --- |
| **LoRA** (Baseline) | Low-rank decomposition of weight updates (ΔW = BA) | Parameter and memory efficiency, no inference latency | General-purpose efficient fine-tuning |
| **[QLoRA](/wiki/qlora)** | Combines LoRA with 4-bit quantization of the base model | Drastically reduced memory footprint | Fine-tuning very large models on single, consumer-grade GPUs |
| **[DoRA](/wiki/dora)** | Decomposes weights into magnitude and direction; fine-tunes direction | Improved training stability and performance over LoRA | Tasks requiring higher fidelity or more stable training |
| **[QDoRA](/wiki/qdora)** | Hybrid of QLoRA and DoRA | Memory-efficient high performance | Memory-constrained scenarios requiring best accuracy |
| **[AdaLoRA](/wiki/adalora)** | Dynamically allocates rank based on layer importance scores | Better performance for a given parameter budget | Scenarios with very strict parameter or memory constraints |
| **[LoRA+](/wiki/lora_plus)** | Uses different learning rates for the A and B matrices | Faster convergence and improved performance | Optimizing training speed and final model quality |
| **[PiSSA](/wiki/pissa)** | SVD-based initialization of adapter matrices | Dramatically faster convergence, better accuracy | Complex tasks requiring fast training |
| **[GaLore](/wiki/galore)** | Full-parameter gradient projection into low-rank space | Pre-training and fine-tuning on consumer GPUs | Memory-efficient full-parameter training |
| **[LongLoRA](/wiki/longlora)** | Uses sparse attention during fine-tuning to extend context | Efficiently adapts models to handle longer input sequences | Fine-tuning for long-document summarization, RAG, etc. |
| **[VeRA](/wiki/vera)** | Shared frozen matrices with trainable scaling vectors | 10x fewer parameters than LoRA | Extreme parameter efficiency requirements |
| **[S-LoRA](/wiki/slora)** | Optimized memory management and batching for serving | Enables serving thousands of LoRA adapters concurrently | Production environments with many customized models |

Further variants include:

- **[LongLoRA](/wiki/longlora):** Extends context windows efficiently for long-document tasks through sparse local attention during fine-tuning, adapting models like LLaMA 2 to handle inputs of up to 100k tokens[&#91;29&#93;](#cite_note-longLora-29)

- **[LoRA-FA](/wiki/lora-fa) (Frozen-A LoRA):** Provides **1.4x memory reduction** by freezing projection-down matrix A, closely related to the FFA-LoRA variant used in federated learning contexts[&#91;30&#93;](#cite_note-lorafa-30)

- **[DyLoRA](/wiki/dylora):** Enables **4-7x faster training** through dynamic rank sampling across a range during training[&#91;31&#93;](#cite_note-dylora-31)

- **[LoRA-XS](/wiki/lora-xs):** Achieves **100x storage reduction** by inserting small trainable matrices between frozen low-rank SVD components

- **[Tied-LoRA](/wiki/tied-lora):** Applies weight tying to the low-rank matrices to further improve parameter efficiency[&#91;32&#93;](#cite_note-researchgate-32)

- **[LoHa](/wiki/loha) and [LoKr](/wiki/lokr):** Use [Hadamard](/wiki/hadamard_product) and [Kronecker](/wiki/kronecker_product) products for alternative decompositions

- **[MoLE](/wiki/mole) (Mixture of LoRA Experts):** Treats layer-wise LoRAs as distinct experts with learnable gating for multi-task scenarios

- **[MELoRA](/wiki/melora) (Mini-Ensemble Low-Rank Adapters):** Decomposes LoRA modules into smaller mini-LoRAs and stacks them in parallel, addressing the issue that merge-and-reinit procedures do not necessarily guarantee an increase in effective rank

- **[CorDA](/wiki/corda) (Context-Oriented Decomposition Adaptation):** Accepted at NeurIPS 2024, builds task-aware LoRA adapters from weight decomposition oriented by the context of the task, achieving faster convergence than PiSSA

- **[rsLoRA](/wiki/rslora):** Uses α/√r scaling instead of α/r to prevent gradient collapse at higher ranks, enabling effective fine-tuning with r > 64

## Comparison with other PEFT methods

LoRA is one of several distinct approaches within the PEFT landscape. These methods can be broadly categorized by where they intervene in the model: modifying weights, altering the architecture, or manipulating activations. LoRA's unique strength lies in its ability to modify weights in a powerful yet non-invasive way that disappears at inference time.

### Adapter tuning

[Adapter tuning](/wiki/adapter_tuning) (or "Adapters") was one of the earliest PEFT techniques, introduced by Houlsby et al. in 2019. It involves inserting small, fully connected "bottleneck" layers between the existing layers of a pre-trained model.[&#91;33&#93;](#cite_note-houlsby2019-33) These adapter modules typically consist of a down-projection, a non-linearity, and an up-projection. During fine-tuning, only the parameters of these new adapter layers are trained.

**Key difference from LoRA:** While both methods add a small number of trainable parameters, adapters add new modules to the model's computational graph. These modules remain during inference, which can introduce a **20-30% latency penalty** for small batch sizes. LoRA, by contrast, modifies the existing weight matrices through a low-rank update that can be merged back into the original weights, resulting in zero inference latency. This "train-as-adapter, deploy-as-native" capability is a primary reason for LoRA's widespread adoption over traditional adapters for latency-sensitive applications.

### Prefix-tuning and prompt tuning

[Prefix-tuning](/wiki/prefix-tuning) (Li & Liang, 2021) and its simplification, [Prompt Tuning](/wiki/prompt_tuning), operate on the model's activations rather than its weights.[&#91;34&#93;](#cite_note-li2021-34) These methods freeze the entire pre-trained model and instead learn a small set of continuous vectors, or "soft prompts," that are prepended to the input sequence or the hidden states of each layer. These learned prefixes steer the model's behavior towards the desired task without modifying any of its parameters.

**Key difference from LoRA:** The primary distinction is the target of modification. LoRA updates the model's internal parameters (weights), whereas prefix/prompt tuning manipulates the model's internal states (activations) through modified inputs. While prefix/prompt tuning can be highly parameter-efficient and can sometimes work even with black-box API access to a model, LoRA is generally considered more expressive and often achieves higher performance because it has more direct control over the model's computations.

### BitFit

BitFit (Bias-term Fine-tuning) is one of the most spartan PEFT methods, introduced by Ben Zaken et al. in 2021. It involves freezing all of the model's main weight matrices and fine-tuning only the bias parameters and the task-specific classification head.[&#91;35&#93;](#cite_note-bitfit-35) Since bias terms constitute a tiny fraction of a model's total parameters (often <0.1%), this approach is extremely parameter-efficient.

**Key difference from LoRA:** BitFit modifies a very sparse subset of existing parameters, whereas LoRA introduces new parameters to approximate a dense update to the main weight matrices. While BitFit is highly efficient, its expressive power is limited because it can only shift the activation functions' outputs, not change the learned relationships within the weight matrices. On GPT-3 175B, BitFit with 14.2M parameters reached 71.3% WikiSQL accuracy, reasonable but underperforming LoRA's 73.4% with 4.7M parameters.

### Comprehensive PEFT comparison

| Method | Trainable Parameters | GPU Memory Reduction | Inference Latency | Performance on Benchmarks | Forgetting of Pre-trained Knowledge |
| --- | --- | --- | --- | --- | --- |
| [Full Fine-Tuning](/wiki/fine-tuning) | 100% (e.g., 175B for GPT-3) | None | None | High (baseline) | High[&#91;21&#93;](#cite_note-illusion2024-21) |
| LoRA | 0.01%-0.1% | 3x | None | Matches/Exceeds FT[&#91;1&#93;](#cite_note-hu2021-1) | Low |
| QLoRA | 0.01%-0.1% (4-bit base) | 6-12x | None (after merge) | Matches 16-bit FT[&#91;15&#93;](#cite_note-dettmers2023-15) | Low |
| [Adapters](/wiki/adapter_tuning) | 0.3%-6% | Moderate | +20-30% | Slightly below FT | Moderate[&#91;1&#93;](#cite_note-hu2021-1) |
| [Prefix-Tuning](/wiki/prefix-tuning) | Small (prefix vectors) | High | Reduces sequence length | Non-monotonic; good in low-data | Low[&#91;36&#93;](#cite_note-datacamp-36) |
| [BitFit](/wiki/bitfit) | <0.1% | High | None | Below LoRA | Low |
| [GaLore](/wiki/galore) | 100% (low-rank gradients) | ~65% optimizer reduction | None | Matches full FT | Similar to full FT |

## Applications across AI domains

### Large language models

[Large language models](/wiki/large_language_model) represent LoRA's primary application domain. Models from [GPT-2](/wiki/gpt-2) to GPT-3 175B, [Llama](/wiki/llama) 2 (7B, 13B, 70B), Llama 3.1 (8B, 70B, 405B), [Mistral](/wiki/mistral)-7B, [Falcon](/wiki/falcon), [Qwen](/wiki/qwen), RoBERTa, and [DeBERTa](/wiki/deberta) leverage LoRA for instruction tuning, domain adaptation, and task specialization.[&#91;1&#93;](#cite_note-hu2021-1)[&#91;37&#93;](#cite_note-pytorch_torchtune-37) Common use cases include:

- SQL query generation and semantic parsing
- Grammar correction and text classification
- Legal document analysis and medical terminology adaptation
- Financial report generation and risk analysis
- Multi-task learning with dynamic adapter switching
- Question answering and dialogue summarization
- Instruction following and chat fine-tuning

The **Alpaca-LoRA** project demonstrated that it was possible to replicate the instruction-following capabilities of Stanford's Alpaca model by fine-tuning the LLaMA 7B model using LoRA on a single consumer GPU (an RTX 4090) in a matter of hours.[&#91;10&#93;](#cite_note-alpaca-10) [IBM](/wiki/ibm) deploys Granite 3.0 models with LoRA for hallucination reduction,[&#91;8&#93;](#cite_note-IBM-8) while enterprises use multiple LoRA adapters as a "menu" of specialized capabilities built atop shared base models. Performance metrics show **95-99%** of full fine-tuning quality with training times around 3 hours on [A100](/wiki/nvidia_a100) GPUs for 7B models with 50,000 examples.

### Diffusion models and image generation

Diffusion model applications exploded in popularity with Stable Diffusion and [FLUX](/wiki/flux) adopters creating thousands of style, character, and technique LoRAs. In late 2022, the technique was adapted for fine-tuning diffusion model's cross-attention layers within the [U-Net](/wiki/u-net) architecture.[&#91;9&#93;](#cite_note-HFSD-9) CivitAI hosts popular adapters including:

- **Style specialization:** Arcane style, [Studio Ghibli](/wiki/studio_ghibli) aesthetic, pixel art, cyberpunk themes, oil painting, anime
- **Artist styles:** Greg Rutkowski, WLOP, Jim Lee styles with 1-10MB file sizes
- **Character replication:** Shinobu Kochou, Zero Two, Princess Zelda with consistent generation
- **Technical enhancements:** Detail Tweaker, Hyper-SD (119,000+ downloads for speed optimization)
- **Control methods:** [Stability AI](/wiki/stability_ai)'s Control-LoRA for depth maps, canny edges, sketch colorization

The small file size of LoRA adapters (often 1-10 MB versus 2-7GB for full checkpoints) makes them easy to distribute and combine.[&#91;38&#93;](#cite_note-civitai-38) This has led to the rise of platforms where creators can share thousands of LoRA files, allowing users to mix and match adapters to achieve highly customized results. Hugging Face hosts over **60,000 LoRA models** with categories spanning text-to-image, image-to-image, and emerging image-to-video.[&#91;39&#93;](#cite_note-hf_models-39)

FLUX models (released 2024) introduced new considerations for LoRA training. The DiT (Diffusion Transformer) architecture used by FLUX requires different training approaches compared to the U-Net architecture of Stable Diffusion. Community best practices for FLUX LoRAs recommend smaller datasets (20-30 images often outperform 800), natural language captions, and a learning rate of approximately 1.5e-4 for 3,000 steps. FLUX LoRAs with rank 16 and all components trained can require over 40GB of VRAM for training.[&#91;38&#93;](#cite_note-civitai-38)

### Vision models

[Vision models](/wiki/computer_vision) employ LoRA for image classification, object detection, segmentation, and synthetic image detection. Fine-tuning [Vision Transformers](/wiki/vision_transformer) (ViT) with LoRA achieves **96% validation accuracy** on Food-101 with approximately 147,000 trainable parameters versus 86 million for the full model.[&#91;40&#93;](#cite_note-hf_image_lora-40) [DeepLabv3](/wiki/deeplabv3) leverages LoRA adapters for semantic segmentation, while Bi-LORA detects [GAN](/wiki/gan) and diffusion-generated images. Medical imaging applications use LoRA-adapted vision models for CT scan and X-ray analysis with domain-specific adaptations that preserve general visual understanding.

### Multimodal applications

[Multimodal](/wiki/multimodal_learning) vision-language models represent rapid growth areas. Llama-3.2-11B-Vision-Instruct fine-tunes with LoRA for medical diagnosis processing CT scans alongside text descriptions.[&#91;41&#93;](#cite_note-multimodal2024-41) [BLIP-2](/wiki/blip-2) adapters enable multimodal sentiment analysis combining images and captions. Novel architectures include:

- **Vision as LoRA (VoRA):** Integrates vision directly into LLMs through LoRA layers without separate vision encoders[&#91;42&#93;](#cite_note-vora2025-42)
- **Mixture of LoRA (MixLoRA):** Handles multimodal instruction tuning with conditional mixtures reducing task interference
- **LoCAL/SV-RAG:** Uses dual LoRA adapters for retrieval and question answering on hundreds of visually-rich pages[&#91;43&#93;](#cite_note-local2024-43)

### On-device and edge deployment

LoRA has proven particularly valuable for edge and on-device AI deployment. Apple's Apple Intelligence system uses LoRA adapters atop quantized on-device models (approximately 3B parameters) to dynamically specialize for tasks like email summarization, notification management, and writing assistance on iPhone, iPad, and Mac devices, generating 30 tokens per second on iPhone 15 Pro.[&#91;11&#93;](#cite_note-apple2024-11) The EdgeLoRA framework demonstrates efficient serving across NVIDIA Jetson devices and Raspberry Pi 5, capable of handling thousands of LoRA adapters on resource-constrained hardware.[&#91;44&#93;](#cite_note-edgelora-44) Federated LoRA enables lightweight fine-tuning across devices without centralizing data, preserving user privacy while allowing continuous learning from local signals.

### Production deployments at scale

Production deployments at scale validate LoRA's practical viability. [Together AI](/wiki/together_ai) serves hundreds of LoRA adapters atop single base models with pay-per-token pricing, partnering with [Salesforce](/wiki/salesforce), [Zomato](/wiki/zomato), and [The Washington Post](/wiki/the_washington_post).[&#91;45&#93;](#cite_note-together2024-45) [Fireworks AI](/wiki/fireworks_ai) reports **100x cost-efficiency improvements** using multi-LoRA with FireAttention, partnering with Cresta for enterprise AI.[&#91;46&#93;](#cite_note-fireworks-46) [Microsoft Azure](/wiki/microsoft_azure) AI deploys Llama 3.1 fine-tuned LoRAs, while Databricks uses LoRA for product description generation. S-LoRA from UC Berkeley demonstrates serving **1,000 LoRAs on a single GPU** via dynamic adapter swapping.[&#91;47&#93;](#cite_note-slora-47)

## LoRA adapter merging and composition

### Merging techniques

An important practical consideration when working with multiple LoRA adapters is the ability to merge and compose them. Several techniques have been developed for combining multiple specialized LoRA adapters into a single model:

**TIES (TrIm, Elect, and Merge):** A three-step method where redundant parameters are first trimmed, then conflicting signs are resolved into an aggregated vector, and finally the parameters whose signs match the aggregate sign are averaged. TIES is a natural fit for LoRA merging because LoRA adapters are already task-specific tensors.[&#91;48&#93;](#cite_note-peft_merging-48)

**DARE (Drop And REscale):** First randomly prunes values of the task weight based on a specified fraction (1 - density), then rescales the pruned task weights by 1/density. DARE can be applied as a plug-in to any existing merging method, including linear arithmetic and TIES.

**Weighted averaging:** The simplest approach, where adapter weights from multiple LoRAs are combined using weighted sums. The Hugging Face PEFT library supports this natively through its adapter composition API.

**SVD compression:** Reduces the dimensionality of merged adapters through singular value decomposition, maintaining performance while reducing storage requirements.

These techniques enable practical multi-task learning scenarios where a single model can handle multiple specialized tasks. The Hugging Face PEFT library has integrated TIES, DARE, and other merging strategies as first-class features since 2024.[&#91;48&#93;](#cite_note-peft_merging-48)

## Implementation frameworks and ecosystem

### Hugging Face PEFT

[Hugging Face](/wiki/hugging_face) PEFT (Parameter-Efficient Fine-Tuning) serves as the primary LoRA implementation with version 0.17.0+ supporting LoRA, LoRA+, DoRA, QLoRA, AdaLoRA, LoHa, LoKr, VeRA, and other variants.[&#91;2&#93;](#cite_note-hf_peft-2) The library integrates seamlessly with [Transformers](/wiki/transformers), [Diffusers](/wiki/diffusers), and [Accelerate](/wiki/accelerate), training only **0.19% of parameters** for models like bigscience/mt0-large. Advanced features include multiple adapter composition, dynamic adapter switching, and sophisticated initialization methods (Gaussian, LoftQ, EVA, OLoRA, PiSSA, CorDA). Recent releases added DoRA support, [AWQ](/wiki/awq)/[AQLM](/wiki/aqlm) quantization compatibility, VB-LoRA, LoRA-FA, and adapter merging methods (TIES, DARE).

Example Python code using PEFT:

```python
from peft import get_peft_model, LoraConfig
from transformers import AutoModelForCausalLM

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules="all-linear",
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 4,194,304 || all params: 6,742,609,920 || trainable%: 0.0622
```

For QLoRA, the configuration adds quantization:

```python
from transformers import BitsAndBytesConfig
import torch

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_compute_dtype=torch.bfloat16
)
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b-hf",
    quantization_config=bnb_config
)
model = get_peft_model(model, lora_config)
```

### Axolotl

[Axolotl](/wiki/axolotl) is an open-source fine-tuning framework that streamlines post-training for large language models using YAML-based configuration files.[&#91;49&#93;](#cite_note-axolotl-49) Axolotl supports LoRA, QLoRA, full fine-tuning, and numerous optimization techniques. Key features include:

- **LoRA optimizations (2025):** Custom autograd functions and Triton kernels for optimized LoRA fine-tuning, including SwiGLU/GEGLU activation kernels, fused QKV projection, and optimized MLP path
- **ScatterMoE LoRA:** LoRA fine-tuning directly on Mixture-of-Experts expert weights using custom Triton kernels
- **Sequence parallelism:** Ring FlashAttention for long-context fine-tuning distributed across GPUs
- **Multi-GPU support:** Distributed Data Parallelism (DDP), FSDP, DeepSpeed, and sequence parallelism
- **Multimodal support:** Fine-tuning multimodal models (beta as of March 2025)
- **Recent model support (2025):** Qwen3, Qwen2.5-VL, Granite 4, HunYuan, and others

### LLaMA-Factory

[LLaMA-Factory](/wiki/llama-factory) is an open-source toolkit that provides a unified interface for fine-tuning over 100 different LLMs and VLMs, including a web UI called LlamaBoard for no-code configuration.[&#91;50&#93;](#cite_note-llamafactory-50) The framework supports 16-bit full fine-tuning, frozen fine-tuning, LoRA fine-tuning, and QLoRA with 2/3/4/5/6/8-bit quantization via AQLM, AWQ, GPTQ, LLM.int8, HQQ, and EETQ. Optimization algorithms include GaLore, BAdam, DoRA, LongLoRA, LoRA+, LoftQ, PiSSA, and Muon. LLaMA-Factory supports export of LoRA adapters as merged models for Hugging Face and provides inference backends including vLLM and SGLang.

### Unsloth

[Unsloth](/wiki/unsloth) is an optimization library that achieves **2-2.7x faster** training and **up to 74% less memory** compared to standard Hugging Face Transformers implementations.[&#91;17&#93;](#cite_note-unsloth-17) Unsloth works by overwriting modeling code with manually derived backpropagation steps rewritten as Triton kernels, achieving zero accuracy degradation compared to standard QLoRA (no approximations are made in the optimized code). Practical benefits include reducing training times from 12+ hours to under 2 hours, and enabling 9B parameter model fine-tuning on 24GB VRAM using LoRA 16-bit, or on just 6.5GB VRAM using QLoRA 4-bit quantization.

### Microsoft loralib

Microsoft's original LoRA repository provides the foundational loralib [PyTorch](/wiki/pytorch) implementation validated in the ICLR 2022 paper.[&#91;7&#93;](#cite_note-msft_github-7) While Hugging Face PEFT has become the recommended successor for most use cases, the Microsoft implementation remains valuable for understanding core concepts and reproduces the original research results.

### PyTorch torchtune

PyTorch's torchtune offers native LoRA implementation optimized for the Llama model family with built-in recipes, gradient checkpointing, and [FSDP](/wiki/fsdp) support across versions 0.2 through 0.6.[&#91;37&#93;](#cite_note-pytorch_torchtune-37) Torchtune provides a curated set of fine-tuning recipes that balance flexibility with ease-of-use, supporting single-GPU and multi-GPU configurations.

### TensorFlow/Keras

[TensorFlow](/wiki/tensorflow)/[Keras](/wiki/keras) 3 provides multi-backend LoRA support (TensorFlow, [JAX](/wiki/jax), PyTorch) through KerasHub with native integration in the [Gemma](/wiki/gemma) model family.[&#91;51&#93;](#cite_note-google_keras-51) The `model.backbone.enable_lora()` method offers simple API access with configurable rank and target modules. JAX optimization proves particularly effective for [TPU](/wiki/tpu) deployments.

### Distributed training and quantization

Distributed training frameworks integrate comprehensively: [DeepSpeed](/wiki/deepspeed) works seamlessly with PEFT, FSDP supports QDoRA, and Accelerate enables multi-GPU training. Quantization frameworks including [bitsandbytes](/wiki/bitsandbytes) (4-bit and 8-bit for QLoRA), AWQ (supported in PEFT v0.9.0+), AQLM (2-bit quantization), and [GPTQ](/wiki/gptq) all prove compatible with LoRA training.

### Model serving platforms

Model serving platforms enable production deployment. [Text Generation Inference](/wiki/text_generation_inference) (TGI v2.1.1+) serves multiple LoRAs simultaneously from Hugging Face Hub with dynamic adapter loading.[&#91;52&#93;](#cite_note-tgi_multi-52) [Vertex AI](/wiki/vertex_ai) offers custom multi-adapter handlers, [FriendliAI](/wiki/friendliai) enables per-request adapter switching, and [Optimum Neuron](/wiki/optimum_neuron) fuses LoRA for AWS [Inferentia](/wiki/inferentia)/[Trainium](/wiki/trainium). Diffusers supports LoRA for Stable Diffusion, [SDXL](/wiki/sdxl), and FLUX with [DreamBooth](/wiki/dreambooth)+LoRA combinations.[&#91;53&#93;](#cite_note-hf_diffusers-53)

### Platform repositories

Platform repositories host thousands of public adapters. Hugging Face Hub serves as the primary repository for text-to-image, LLM, and multimodal adapters with one-click loading via PEFT.[&#91;39&#93;](#cite_note-hf_models-39) CivitAI focuses on Stable Diffusion and FLUX models with on-site training, supporting SD1.5, SDXL, Flux, and Pony Diffusion V6 XL.[&#91;38&#93;](#cite_note-civitai-38) Community features include auto-captioning with WD Tagger 1.4 and JoyCaption, training data sharing, and model card generation.

| Framework | Primary Focus | LoRA Features | Quantization Support |
| --- | --- | --- | --- |
| [Hugging Face PEFT](/wiki/peft) | Universal PEFT library | LoRA, DoRA, AdaLoRA, LoRA+, VeRA, LoHa, LoKr | bitsandbytes, AWQ, AQLM, GPTQ |
| [Axolotl](/wiki/axolotl) | Streamlined LLM fine-tuning | LoRA, QLoRA, custom Triton kernels, ScatterMoE LoRA | 4-bit, 8-bit via bitsandbytes |
| [LLaMA-Factory](/wiki/llama-factory) | 100+ model unified fine-tuning | LoRA, DoRA, LoRA+, PiSSA, GaLore, LoftQ | AQLM, AWQ, GPTQ, HQQ, EETQ |
| [Unsloth](/wiki/unsloth) | Speed optimization | LoRA, QLoRA with 2x speedup | 4-bit, 8-bit via bitsandbytes |
| [PyTorch torchtune](/wiki/torchtune) | Native PyTorch recipes | LoRA with Llama optimization | Integrated quantization |
| [Keras/KerasHub](/wiki/keras) | Multi-backend (TF, JAX, PyTorch) | LoRA via enable_lora() | Framework-native quantization |

## Performance metrics and comparative analysis

### GPT-3 175B results

Comprehensive benchmarking reveals LoRA's strengths and boundaries across model scales and task types. On GPT-3 175B, LoRA with **4.7 million trainable parameters** (0.0027% of base model) achieved 73.4% WikiSQL accuracy versus 73.8% for full fine-tuning with 175 billion parameters, and **91.7% MNLI-matched accuracy** actually surpassing full fine-tuning's 89.5%.[&#91;1&#93;](#cite_note-hu2021-1) On SAMSum dialogue summarization, LoRA scored 53.8/29.8/45.9 (Rouge-1/2/L) compared to 52.0/28.0/44.5 for full fine-tuning.

### RoBERTa GLUE benchmark results

RoBERTa on GLUE benchmark demonstrates parameter efficiency extremes. Full fine-tuning's 125 million parameters achieved 86.4% average accuracy while LoRA with **0.3 million parameters** (0.24% of full model) reached **87.2%**, outperforming with **417x fewer parameters**.[&#91;1&#93;](#cite_note-hu2021-1) RoBERTa large showed similar patterns: 355 million parameters at 88.9% accuracy versus 0.8 million LoRA parameters at 89.0%, a **444x reduction** with superior results.

### Rank sensitivity analysis

Rank sensitivity analysis on GPT-3 WikiSQL revealed performance plateaus:

| Rank (r) | Trainable Params | WikiSQL Accuracy |
| --- | --- | --- |
| 1 | 4.7M | 73.4% |
| 2 | 9.4M | 73.3% |
| 4 | 18.8M | 73.7% |
| 8 | 37.7M | 73.8% |
| 64 | 301.9M | 73.6% |

These results demonstrate minimal benefit from higher ranks on this task and validate the low intrinsic rank hypothesis.[&#91;1&#93;](#cite_note-hu2021-1)

### Memory and speed comparisons

Memory and speed comparisons quantify practical advantages:

| Model | Method | Trainable Params | MNLI Accuracy | WikiSQL Accuracy | SAMSum Rouge-L | Storage Size | VRAM Required |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [GPT-3 175B](/wiki/gpt-3) | Full FT | 175,255.8M | 89.5% | 73.8% | 44.5 | 350 GB | 1,200 GB |
| [GPT-3 175B](/wiki/gpt-3) | LoRA (r=4) | 4.7M | **91.7%** | 73.4% | **45.9** | **35 MB** | **350 GB** |
| [RoBERTa base](/wiki/roberta) | Full FT | 125.0M | 87.6% | - | - | ~500 MB | ~8 GB |
| [RoBERTa base](/wiki/roberta) | LoRA | 0.3M | **87.5%** | - | - | **~2 MB** | **~4 GB** |
| [DeBERTa XXL](/wiki/deberta) | Full FT | 1,500M | 91.8% | - | - | ~6 GB | ~50 GB |
| [DeBERTa XXL](/wiki/deberta) | LoRA | 4.7M | **91.9%** | - | - | **~19 MB** | **~16 GB** |
| [Llama 2 7B](/wiki/llama) | Full FT | 6,738M | - | - | - | ~14 GB | 73 GB (2 GPU) |
| [Llama 2 7B](/wiki/llama) | LoRA (r=16) | 4.2M | - | - | - | **~8 MB** | **14 GB (1 GPU)** |

GPT-3 175B processes **43.1 tokens/second** per V100 GPU with LoRA versus **32.5 tokens/second** for full fine-tuning, a simultaneous **3x memory reduction** and **25% speed increase**.[&#91;1&#93;](#cite_note-hu2021-1)

### Domain-specific performance gaps

Performance gaps emerge in specific domains. Mathematical reasoning on GSM8k shows LoRA's largest underperformance; research consistently reports "substantial gaps" though exact magnitudes vary by configuration.[&#91;19&#93;](#cite_note-anyscale2023-19) Complex programming tasks demonstrate **4-6% lower scores**, with full fine-tuning requiring fewer examples to reach equivalent capability. Typical instruction tuning and domain adaptation tasks show **2% absolute difference** (95% vs 97% accuracy patterns), while many NLU tasks favor LoRA by **1-3%** due to implicit regularization preventing overfitting.

### Low-data regime analysis

Low-data regime analysis reveals LoRA advantages. On MNLI with only 100 training examples, LoRA achieved **63.8% accuracy** versus **60.2%** for full fine-tuning.[&#91;1&#93;](#cite_note-hu2021-1) The low-rank constraint provides strong regularization when data scarcity would cause full fine-tuning to overfit, making LoRA particularly effective for few-shot adaptation scenarios with hundreds to low thousands of examples.

## Federated learning and privacy-preserving fine-tuning

LoRA has become a key enabler for privacy-preserving [federated learning](/wiki/federated_learning) with large language models. In federated settings, multiple clients collaboratively train a shared model without centralizing their private data. LoRA's small adapter size makes it particularly well-suited for this paradigm, as only the lightweight adapter weights need to be communicated between clients and the central server, dramatically reducing communication overhead compared to exchanging full model updates.[&#91;54&#93;](#cite_note-ffa-lora-54)

However, applying LoRA in federated settings introduces unique challenges. Data heterogeneity across clients, multi-step local updates, and the amplification of noise from [differential privacy](/wiki/differential_privacy) mechanisms can make LoRA training unstable. Several variants have been developed to address these issues:

- **FFA-LoRA (Federated Freeze A LoRA):** Fixes the randomly initialized non-zero matrices and only fine-tunes the zero-initialized matrices, improving stability under differential privacy noise (ICLR 2024)[&#91;54&#93;](#cite_note-ffa-lora-54)
- **FLoRA:** Constructs an expanded low-rank subspace via stacking, providing a principled way to aggregate clients with different ranks without padding or truncation
- **Te-LoRA (Tensor-aggregated LoRA):** Addresses aggregation noise and misalignment through alternating-freeze training and alignment mechanisms (ICCV 2025)
- **FedSA-LoRA-DP:** Combines selective aggregation of low-rank parameters with differential privacy, providing strong privacy guarantees while maintaining communication efficiency

These developments are enabling privacy-preserving model customization across industries including healthcare, finance, and personal devices.

## Democratization of AI fine-tuning

LoRA and QLoRA have fundamentally transformed who can participate in AI development. Before these techniques, fine-tuning a large language model required access to expensive multi-GPU clusters costing hundreds of thousands of dollars, effectively restricting model customization to well-funded corporations and research labs. The combination of LoRA's parameter efficiency with QLoRA's quantization has made it possible to fine-tune models with billions of parameters on consumer-grade hardware costing under $2,000.[&#91;15&#93;](#cite_note-dettmers2023-15)

The impact has been felt across several dimensions:

**Hardware accessibility:** A 7-billion-parameter model that previously required over 50GB of memory for fine-tuning can now be fine-tuned on a single consumer GPU with 24GB of VRAM using LoRA, or on as little as 6.5GB with QLoRA. This has enabled researchers at universities in developing countries, independent hobbyists, and small startups to customize state-of-the-art models for their specific needs.

**Open-source ecosystem:** Community members have applied LoRA fine-tuning recipes to open models like [Pythia](/wiki/pythia), LLaMA, [Mistral](/wiki/mistral), and [Qwen](/wiki/qwen), producing thousands of specialized adapters shared freely on Hugging Face and CivitAI. Projects like Alpaca-LoRA demonstrated that competitive instruction-following models could be created in hours on a single GPU.[&#91;10&#93;](#cite_note-alpaca-10)

**Education and research:** Students and researchers worldwide can experiment with model fine-tuning using free or low-cost cloud GPU instances (such as Google Colab). Modern PEFT methods achieve 95% of full fine-tuning performance while training less than 1% of parameters, making sophisticated AI customization accessible to organizations of all sizes.

**Enterprise adoption:** Companies can deploy task-specific LoRA adapters on top of shared base models, reducing infrastructure costs while enabling rapid iteration on specialized capabilities. Multiple LoRA adapters can be stored and swapped dynamically, with each adapter occupying only megabytes rather than gigabytes of storage.

## Deployment considerations and best practices

### Rank selection strategy

Successful LoRA deployment begins with rank selection based on adaptation complexity. Start with **r = 16** as a reliable default, then adjust based on training behavior.[&#91;13&#93;](#cite_note-sebastian2024-13) Undertrained models (high validation loss, poor task performance) benefit from increasing rank to 32-64, while overtrained models (training loss <0.2, large train-validation gap) should reduce rank to 8 or lower. Simple style and formatting tasks succeed with r = 4-8, standard instruction tuning works with r = 16-32, complex domain adaptation requires r = 32-64, and substantial knowledge injection demands r = 64-256.

### Alpha and scaling configuration

Set alpha to **2r** (twice the rank) following widespread best practice, producing an effective scaling factor of 2.[&#91;14&#93;](#cite_note-determined-14) Crucially, maintain constant alpha when adjusting rank during experimentation. Research demonstrates alpha and learning rate are mathematically interchangeable, so fixing alpha early then tuning only learning rate simplifies hyperparameter search. For high ranks exceeding 64, enable rank-stabilized LoRA (`use_rslora=True`) with α/√r scaling to prevent gradient collapse.[&#91;12&#93;](#cite_note-rslora-12)

### Target module strategy

Target all major linear layers for optimal adaptation quality. While original research focused on query and value projections, comprehensive studies prove **targeting all layers** (q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj) substantially improves results.[&#91;15&#93;](#cite_note-dettmers2023-15) Use auto-detection features (`target_modules="all-linear"`) in modern PEFT versions to simplify configuration.

### Training recommendations

Training hyperparameters require careful tuning. Set learning rate to **2e-4** as the standard LoRA starting point (2-10x higher than full fine-tuning's typical 1e-5 to 3e-5).[&#91;13&#93;](#cite_note-sebastian2024-13) Train for **1-3 epochs maximum** since training beyond 3 epochs typically causes overfitting. Use effective batch size of **16** through gradient accumulation (for example, batch_size = 2 with gradient_accumulation_steps = 8 for memory efficiency). Enable gradient checkpointing to reduce activation memory at minimal computational cost. Apply moderate weight decay (0.01) and dropout (0.05) for regularization.

### Memory optimization for consumer hardware

Memory optimization proves critical for consumer hardware deployment. Combine QLoRA's 4-bit quantization with standard LoRA training to enable 65B models on 48GB GPUs. Configure bitsandbytes with `load_in_4bit=True`, `bnb_4bit_quant_type="nf4"`, and `bnb_4bit_use_double_quant=True`.[&#91;15&#93;](#cite_note-dettmers2023-15) Enable gradient checkpointing (`gradient_checkpointing=True`) to trade computation for memory. Start with lower ranks (r = 8) during development then scale up once workflows stabilize. Use frameworks like Unsloth for additional 2x speed and 70% memory improvements with zero accuracy loss.

### Inference deployment strategies

Inference deployment offers two strategies. **Merged weights** (W = W₀ + BA) provide **zero latency overhead** but fix the adapter, making this ideal for single-task deployment.[&#91;1&#93;](#cite_note-hu2021-1) **Separate weights** enable dynamic adapter switching with **minimal latency** (2-5% depending on batch and sequence length), necessary for multi-task serving where different requests need different adapters. Production systems like Text Generation Inference and Fireworks AI serve hundreds of LoRAs by keeping base models in memory and swapping lightweight adapters per request.[&#91;52&#93;](#cite_note-tgi_multi-52)[&#91;46&#93;](#cite_note-fireworks-46)

### Monitoring and troubleshooting

Monitor training carefully for stability issues. Unstable training (loss spikes, NaN gradients) warrants reducing learning rate by 2-5x or enabling mixed precision (`fp16=True` or `bf16=True`). Slow convergence suggests increasing learning rate or rank. Large train-validation gaps indicate overfitting; reduce epochs, increase regularization, or lower rank. Training loss <0.2 generally signals overfitting. Consider early stopping or post-training alpha scaling (multiply by 0.5) to reduce LoRA influence.

### Documentation and versioning

Model card documentation should specify rank, alpha, target modules, training dataset size, base model version, intended use cases, and known limitations. Version adapters systematically as base models update. LoRA weights trained on Llama-2-7B may not transfer to Llama-3-8B without retraining. Store adapters alongside base model information for reproducibility, and test adapter merging versus dynamic loading to verify inference behavior matches expectations.

### Production serving at scale

For production serving at scale, leverage multi-LoRA frameworks like S-LoRA (1,000 adapters per GPU), TGI multi-adapter support, or Fireworks AI's FireAttention stack.[&#91;47&#93;](#cite_note-slora-47)[&#91;52&#93;](#cite_note-tgi_multi-52)[&#91;46&#93;](#cite_note-fireworks-46) Implement request routing to direct queries to appropriate task-specific adapters. Monitor memory usage as adapter count scales: hundreds of 35MB adapters remain manageable while thousands may require more sophisticated caching strategies.

## Current research directions and future work

### Initialization strategies

The LoRA research landscape in 2024-2025 focuses on several primary directions. Initialization strategies represent active investigation with methods like PiSSA, CorDA (Context-Oriented Decomposition Adaptation, achieving faster convergence than PiSSA), EVA (Explained Variance Adaptation with data-driven SVD-based initialization), OLoRA (orthogonal initialization of matrices A and B), and LoftQ (quantization-aware initialization) all demonstrating that proper initialization enables substantially faster convergence and better final performance than LoRA's default random initialization.[&#91;26&#93;](#cite_note-pissa2024-26)[&#91;3&#93;](#cite_note-survey2024-3)

### Dynamic allocation and adaptive methods

Dynamic allocation methods address rank distribution challenges. AdaLoRA and DyLoRA enable adaptive parameter budgets where different layers receive different ranks based on task-specific importance rather than uniform distribution.[&#91;25&#93;](#cite_note-adalora-25)[&#91;31&#93;](#cite_note-dylora-31) QDyLoRA combines this flexibility with quantization for memory-constrained scenarios.[&#91;55&#93;](#cite_note-qdylora-55) Research shows optimal rank varies dramatically by layer and task, with top attention layers often needing higher capacity while middle layers suffice with minimal adaptation.

### Extreme efficiency variants

Extreme efficiency variants push parameter reduction limits. LoRA-XS achieves over **100x storage reduction** compared to standard LoRA through inserting tiny trainable matrices between frozen SVD components. VeRA demonstrated **97% parameter reduction** (75.5M to 2.8M) remains viable.[&#91;27&#93;](#cite_note-vera-27) 1LoRA introduces single-parameter per module adaptation showing extreme compression possibilities.[&#91;56&#93;](#cite_note-1lora-56)

### Theoretical understanding

Theoretical understanding deepens through computational complexity analysis. Research published June 2024 (updated June 2025) examines phase transition behavior in LoRA efficiency, proving almost linear approximation algorithms exist for certain rank regimes.[&#91;57&#93;](#cite_note-complexity2024-57) Work titled "LoRA Learns Less and Forgets Less" reveals the fundamental tradeoff: LoRA retains more original capabilities (less forgetting) but learns less efficiently in domains distant from pre-training (less learning).[&#91;18&#93;](#cite_note-biderman2024-18)

### Multi-task and reasoning capabilities

Multi-task and reasoning capabilities expand through specialized architectures. X-LoRA introduces mixture-of-experts gating for dynamic LoRA selection at token and layer granularity. Research on "Tina: Tiny Reasoning Models via LoRA" explores memory-efficient reasoning through LoRA decomposition. Agent-based systems use LoRA modules as tools, with research surveying LoRA-driven agents where different adapters represent specialized agent roles or capabilities. LoraRetriever encodes each LoRA adapter into a vector space and selects the top-k experts most similar to a query prompt, then fuses them via interpolation or on-the-fly composition.

### Survey and categorization of the field

A comprehensive survey published July 2024 (updated October 2024, arXiv 2407.11046) categorizes LoRA methods into downstream adaptation improvements, cross-task generalization approaches, efficiency-improving techniques, and data privacy-preserving methods.[&#91;3&#93;](#cite_note-survey2024-3) The survey documents the exponential growth of LoRA-related publications and maintains a GitHub repository tracking rapid developments.

### Open problems

Open problems demanding attention include optimal rank selection heuristics (currently requiring task-specific experimentation), target module selection guidance (which layers to adapt for which tasks), hyperparameter tuning complexity, memory optimization for edge deployment, efficient batching with mixed adapters (different samples using different LoRAs), adapter pruning strategies, catastrophic forgetting in sequential multi-task learning, zero-shot adapter transfer across model families, and dynamic adapter selection without routing models. Theoretical challenges include formal approximation quality bounds, understanding intrinsic dimension requirements, convergence guarantees, and generalization bounds from statistical learning theory perspectives.

## See also

- [Parameter-efficient fine-tuning](/wiki/parameter-efficient_fine-tuning)
- [Fine-tuning](/wiki/fine-tuning)
- [Transfer learning](/wiki/transfer_learning)
- [Low-rank approximation](/wiki/low-rank_approximation)
- [Matrix factorization](/wiki/matrix_factorization)
- [Adapter modules](/wiki/adapter_tuning)
- [Prompt tuning](/wiki/prompt_tuning)
- [Prefix-tuning](/wiki/prefix-tuning)
- [Quantization](/wiki/quantization)
- [Attention (machine learning)](/wiki/attention_mechanism)
- [Large language model](/wiki/large_language_model)
- [Stable Diffusion](/wiki/stable_diffusion)
- [Hugging Face](/wiki/hugging_face)
- [Federated learning](/wiki/federated_learning)

## References

1. ↑ [1.00](#cite_ref-hu2021_1-0) [1.01](#cite_ref-hu2021_1-1) [1.02](#cite_ref-hu2021_1-2) [1.03](#cite_ref-hu2021_1-3) [1.04](#cite_ref-hu2021_1-4) [1.05](#cite_ref-hu2021_1-5) [1.06](#cite_ref-hu2021_1-6) [1.07](#cite_ref-hu2021_1-7) [1.08](#cite_ref-hu2021_1-8) [1.09](#cite_ref-hu2021_1-9) [1.10](#cite_ref-hu2021_1-10) [1.11](#cite_ref-hu2021_1-11) [1.12](#cite_ref-hu2021_1-12) [1.13](#cite_ref-hu2021_1-13) [1.14](#cite_ref-hu2021_1-14) [1.15](#cite_ref-hu2021_1-15) [1.16](#cite_ref-hu2021_1-16) [1.17](#cite_ref-hu2021_1-17) [1.18](#cite_ref-hu2021_1-18) [1.19](#cite_ref-hu2021_1-19) [1.20](#cite_ref-hu2021_1-20) Hu, Edward J., et al. "LoRA: Low-Rank Adaptation of Large Language Models." arXiv preprint arXiv:2106.09685 (2021). Published at ICLR 2022. [https://arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685)

2. ↑ [2.0](#cite_ref-hf_peft_2-0) [2.1](#cite_ref-hf_peft_2-1) [2.2](#cite_ref-hf_peft_2-2) [2.3](#cite_ref-hf_peft_2-3) Hugging Face PEFT Documentation. [https://huggingface.co/docs/peft](https://huggingface.co/docs/peft)

3. ↑ [3.0](#cite_ref-survey2024_3-0) [3.1](#cite_ref-survey2024_3-1) [3.2](#cite_ref-survey2024_3-2) Tian, Yixiao, et al. "A Survey on LoRA of Large Language Models." arXiv preprint arXiv:2407.11046 (2024). Frontiers of Computer Science. [https://arxiv.org/abs/2407.11046](https://arxiv.org/abs/2407.11046)

4. ↑ [4.0](#cite_ref-aghajanyan2020_4-0) [4.1](#cite_ref-aghajanyan2020_4-1) [4.2](#cite_ref-aghajanyan2020_4-2) Aghajanyan, Armen, et al. "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning." arXiv preprint arXiv:2012.13255 (2020). [https://arxiv.org/abs/2012.13255](https://arxiv.org/abs/2012.13255)

5. [↑](#cite_ref-openreview_5-0) LoRA: Low-Rank Adaptation of Large Language Models. OpenReview ICLR 2022. [https://openreview.net/forum?id=nZeVKeeFYf9](https://openreview.net/forum?id=nZeVKeeFYf9)

6. [↑](#cite_ref-edwardhu_6-0) Edward Hu personal website. [https://edwardjhu.com/about/](https://edwardjhu.com/about/)

7. ↑ [7.0](#cite_ref-msft_github_7-0) [7.1](#cite_ref-msft_github_7-1) Microsoft. "LoRA: Code for loralib." GitHub. [https://github.com/microsoft/LoRA](https://github.com/microsoft/LoRA)

8. ↑ [8.0](#cite_ref-IBM_8-0) [8.1](#cite_ref-IBM_8-1) [8.2](#cite_ref-IBM_8-2) IBM. "What is LoRA (Low-Rank Adaption)?" 2024. [https://www.ibm.com/think/topics/lora](https://www.ibm.com/think/topics/lora)

9. ↑ [9.0](#cite_ref-HFSD_9-0) [9.1](#cite_ref-HFSD_9-1) Cuenca, Pedro; Paul, Sayak (2023). "Using LoRA for Efficient Stable Diffusion Fine-Tuning." Hugging Face blog. [https://huggingface.co/blog/lora](https://huggingface.co/blog/lora)

10. ↑ [10.0](#cite_ref-alpaca_10-0) [10.1](#cite_ref-alpaca_10-1) [10.2](#cite_ref-alpaca_10-2) tloen. "Alpaca-LoRA: Instruction-tuning LLaMA on consumer hardware." GitHub. [https://github.com/tloen/alpaca-lora](https://github.com/tloen/alpaca-lora)

11. ↑ [11.0](#cite_ref-apple2024_11-0) [11.1](#cite_ref-apple2024_11-1) Apple Machine Learning Research. "Introducing Apple's On-Device and Server Foundation Models." June 2024. [https://machinelearning.apple.com/research/introducing-apple-foundation-models](https://machinelearning.apple.com/research/introducing-apple-foundation-models)

12. ↑ [12.0](#cite_ref-rslora_12-0) [12.1](#cite_ref-rslora_12-1) Kalajdzievski, Damjan. "Rank-Stabilized LoRA: Unlocking the Potential of LoRA Fine-Tuning." Hugging Face Blog, 2024. [https://huggingface.co/blog/damjan-k/rslora](https://huggingface.co/blog/damjan-k/rslora)

13. ↑ [13.0](#cite_ref-sebastian2024_13-0) [13.1](#cite_ref-sebastian2024_13-1) [13.2](#cite_ref-sebastian2024_13-2) [13.3](#cite_ref-sebastian2024_13-3) Raschka, Sebastian. "Practical Tips for Finetuning LLMs Using LoRA." Magazine, 2024. [https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms](https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms)

14. ↑ [14.0](#cite_ref-determined_14-0) [14.1](#cite_ref-determined_14-1) Determined AI. "Finding the best LoRA parameters." 2024. [https://www.determined.ai/blog/lora-parameters](https://www.determined.ai/blog/lora-parameters)

15. ↑ [15.0](#cite_ref-dettmers2023_15-0) [15.1](#cite_ref-dettmers2023_15-1) [15.2](#cite_ref-dettmers2023_15-2) [15.3](#cite_ref-dettmers2023_15-3) [15.4](#cite_ref-dettmers2023_15-4) [15.5](#cite_ref-dettmers2023_15-5) [15.6](#cite_ref-dettmers2023_15-6) [15.7](#cite_ref-dettmers2023_15-7) [15.8](#cite_ref-dettmers2023_15-8) Dettmers, Tim, et al. "QLoRA: Efficient Finetuning of Quantized LLMs." NeurIPS 2023 (Oral). arXiv preprint arXiv:2305.14314 (2023). [https://arxiv.org/abs/2305.14314](https://arxiv.org/abs/2305.14314)

16. ↑ [16.0](#cite_ref-loraplus_16-0) [16.1](#cite_ref-loraplus_16-1) [16.2](#cite_ref-loraplus_16-2) Hayou, Soufiane, et al. "LoRA+: Efficient Low Rank Adaptation of Large Models." ICML 2024. arXiv preprint arXiv:2402.12354 (2024). [https://arxiv.org/abs/2402.12354](https://arxiv.org/abs/2402.12354)

17. ↑ [17.0](#cite_ref-unsloth_17-0) [17.1](#cite_ref-unsloth_17-1) Hugging Face Blog. "Make LLM Fine-tuning 2x faster with Unsloth and TRL." [https://huggingface.co/blog/unsloth-trl](https://huggingface.co/blog/unsloth-trl)

18. ↑ [18.0](#cite_ref-biderman2024_18-0) [18.1](#cite_ref-biderman2024_18-1) Biderman, Dan, et al. "LoRA Learns Less and Forgets Less." arXiv preprint (2024). [https://arxiv.org/abs/2405.09673](https://arxiv.org/abs/2405.09673)

19. ↑ [19.0](#cite_ref-anyscale2023_19-0) [19.1](#cite_ref-anyscale2023_19-1) [19.2](#cite_ref-anyscale2023_19-2) Anyscale. "Fine-Tuning LLMs: LoRA or Full-Parameter? An In-Depth Analysis with Llama 2." 2023. [https://www.anyscale.com/blog/fine-tuning-llms-lora-or-full-parameter-an-in-depth-analysis-with-llama-2](https://www.anyscale.com/blog/fine-tuning-llms-lora-or-full-parameter-an-in-depth-analysis-with-llama-2)

20. [↑](#cite_ref-plora2024_20-0) Zhang, Jiaming, et al. "PLoRA: Efficient LoRA Hyperparameter Tuning for Large Models." arXiv preprint arXiv:2508.02932 (2024). [https://arxiv.org/html/2508.02932v1](https://arxiv.org/html/2508.02932v1)

21. ↑ [21.0](#cite_ref-illusion2024_21-0) [21.1](#cite_ref-illusion2024_21-1) Biderman, Davison, et al. "LoRA vs Full Fine-tuning: An Illusion of Equivalence." arXiv preprint arXiv:2410.21228 (2024). [https://arxiv.org/abs/2410.21228](https://arxiv.org/abs/2410.21228)

22. [↑](#cite_ref-gradientflow_22-0) Gradient Flow. "Customizing LLMs: When to Choose LoRA or Full Fine-Tuning." 2024. [https://gradientflow.com/lora-or-full-fine-tuning/](https://gradientflow.com/lora-or-full-fine-tuning/)

23. ↑ [23.0](#cite_ref-dora2024_23-0) [23.1](#cite_ref-dora2024_23-1) Liu, Shih-Yang, et al. "DoRA: Weight-Decomposed Low-Rank Adaptation." ICML 2024 (Oral). arXiv preprint arXiv:2402.09353. [https://arxiv.org/abs/2402.09353](https://arxiv.org/abs/2402.09353)

24. [↑](#cite_ref-pravi_24-0) Pravi. "Efficient Fine-Tuning of LLMs with LoRA, QLoRA and DoRA." 2024. [https://pravi.tech/posts/fine-tuning/](https://pravi.tech/posts/fine-tuning/)

25. ↑ [25.0](#cite_ref-adalora_25-0) [25.1](#cite_ref-adalora_25-1) Zhang, Qingru, et al. "AdaLoRA: Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning." ICLR 2023. [https://arxiv.org/abs/2303.10512](https://arxiv.org/abs/2303.10512)

26. ↑ [26.0](#cite_ref-pissa2024_26-0) [26.1](#cite_ref-pissa2024_26-1) Meng, Fanxu, et al. "PiSSA: Principal Singular Values and Singular Vectors Adaptation of Large Language Models." NeurIPS 2024 Spotlight. [https://arxiv.org/abs/2404.02948](https://arxiv.org/abs/2404.02948)

27. ↑ [27.0](#cite_ref-vera_27-0) [27.1](#cite_ref-vera_27-1) Kopiczko, Dawid Jan, et al. "VeRA: Vector-based Random Matrix Adaptation." 2024. [https://arxiv.org/abs/2310.10196](https://arxiv.org/abs/2310.10196)

28. [↑](#cite_ref-galore_28-0) Zhao, Jiawei, et al. "GaLore: Memory-Efficient LLM Training by Gradient Low-Rank Projection." ICML 2024. [https://arxiv.org/abs/2403.03507](https://arxiv.org/abs/2403.03507)

29. [↑](#cite_ref-longLora_29-0) Chen, Yukang, et al. "LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models." arXiv preprint arXiv:2309.12307 (2023). [https://arxiv.org/abs/2309.12307](https://arxiv.org/abs/2309.12307)

30. [↑](#cite_ref-lorafa_30-0) Zhang, Longteng, et al. "LoRA-FA: Memory-efficient Low-rank Adaptation for Large Language Models Fine-tuning." OpenReview 2024. [https://openreview.net/forum?id=RbKThNNFxr](https://openreview.net/forum?id=RbKThNNFxr)

31. ↑ [31.0](#cite_ref-dylora_31-0) [31.1](#cite_ref-dylora_31-1) Valipour, Mojtaba, et al. "DyLoRA: Parameter-Efficient Tuning of Pre-trained Models using Dynamic Search-Free Low-Rank Adaptation." EACL 2023. [https://aclanthology.org/2023.eacl-main.239/](https://aclanthology.org/2023.eacl-main.239/)

32. [↑](#cite_ref-researchgate_32-0) Konakovsky, Adnan. "Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning." ResearchGate 2024. [https://www.researchgate.net/publication/369379949_Adaptive_Budget_Allocation_for_Parameter-Efficient_Fine-Tuning](https://www.researchgate.net/publication/369379949_Adaptive_Budget_Allocation_for_Parameter-Efficient_Fine-Tuning)

33. [↑](#cite_ref-houlsby2019_33-0) Houlsby, Neil, et al. "Parameter-Efficient Transfer Learning for NLP." ICML 2019.

34. [↑](#cite_ref-li2021_34-0) Li, Xiang Lisa, and Percy Liang. "Prefix-tuning: Optimizing continuous prompts for generation." ACL 2021.

35. [↑](#cite_ref-bitfit_35-0) Ben Zaken, Elad, et al. "BitFit: Simple parameter-efficient fine-tuning for transformer-based masked language-models." ACL 2022.

36. [↑](#cite_ref-datacamp_36-0) DataCamp. "Mastering Low-Rank Adaptation (LoRA)." 2024. [https://www.datacamp.com/tutorial/mastering-low-rank-adaptation-lora-enhancing-large-language-models-for-efficient-adaptation](https://www.datacamp.com/tutorial/mastering-low-rank-adaptation-lora-enhancing-large-language-models-for-efficient-adaptation)

37. ↑ [37.0](#cite_ref-pytorch_torchtune_37-0) [37.1](#cite_ref-pytorch_torchtune_37-1) PyTorch. "Fine-Tuning Llama2 with LoRA." torchtune documentation. [https://docs.pytorch.org/torchtune/stable/tutorials/lora_finetune.html](https://docs.pytorch.org/torchtune/stable/tutorials/lora_finetune.html)

38. ↑ [38.0](#cite_ref-civitai_38-0) [38.1](#cite_ref-civitai_38-1) [38.2](#cite_ref-civitai_38-2) CivitAI. "LoRA Models and How to Use Them with Stable Diffusion." 2024. [https://civitai.com/articles/2099/](https://civitai.com/articles/2099/)

39. ↑ [39.0](#cite_ref-hf_models_39-0) [39.1](#cite_ref-hf_models_39-1) Hugging Face. "Models tagged with 'lora'." [https://huggingface.co/models?other=lora](https://huggingface.co/models?other=lora)

40. [↑](#cite_ref-hf_image_lora_40-0) Hugging Face. "Image classification using LoRA." PEFT documentation. [https://huggingface.co/docs/peft/main/en/task_guides/image_classification_lora](https://huggingface.co/docs/peft/main/en/task_guides/image_classification_lora)

41. [↑](#cite_ref-multimodal2024_41-0) Jiang, Haixin, et al. "Multimodal Instruction Tuning with Conditional Mixture of LoRA." arXiv preprint arXiv:2402.15896 (2024).

42. [↑](#cite_ref-vora2025_42-0) Vision as LoRA. arXiv preprint arXiv:2503.20680 (2025).

43. [↑](#cite_ref-local2024_43-0) LoRA-Contextualizing Adaptation of Large Multimodal Models. arXiv preprint arXiv:2411.01106 (2024).

44. [↑](#cite_ref-edgelora_44-0) EdgeLoRA: An Efficient Multi-Tenant LLM Serving System on Edge Devices. arXiv preprint arXiv:2507.01438 (2025). [https://arxiv.org/abs/2507.01438](https://arxiv.org/abs/2507.01438)

45. [↑](#cite_ref-together2024_45-0) Together AI. "Serverless Multi-LoRA." 2024. [https://www.together.ai/blog/serverless-multi-lora](https://www.together.ai/blog/serverless-multi-lora)

46. ↑ [46.0](#cite_ref-fireworks_46-0) [46.1](#cite_ref-fireworks_46-1) [46.2](#cite_ref-fireworks_46-2) Fireworks AI. "Multi-LoRA: Personalize AI at scale." 2024. [https://fireworks.ai/blog/multi-lora](https://fireworks.ai/blog/multi-lora)

47. ↑ [47.0](#cite_ref-slora_47-0) [47.1](#cite_ref-slora_47-1) Sheng, Ying, et al. "S-LoRA: Serving Thousands of Concurrent LoRA Adapters." 2024. [https://arxiv.org/abs/2311.03285](https://arxiv.org/abs/2311.03285)

48. ↑ [48.0](#cite_ref-peft_merging_48-0) [48.1](#cite_ref-peft_merging_48-1) Hugging Face Blog. "PEFT welcomes new merging methods." 2024. [https://huggingface.co/blog/peft_merging](https://huggingface.co/blog/peft_merging)

49. [↑](#cite_ref-axolotl_49-0) Axolotl Documentation. [https://docs.axolotl.ai/](https://docs.axolotl.ai/)

50. [↑](#cite_ref-llamafactory_50-0) Zheng, Yaowei, et al. "LlamaFactory: Unified Efficient Fine-Tuning of 100+ Language Models." arXiv preprint arXiv:2403.13372 (2024). [https://arxiv.org/abs/2403.13372](https://arxiv.org/abs/2403.13372)

51. [↑](#cite_ref-google_keras_51-0) Google AI. "Fine-tune Gemma in Keras using LoRA." 2024. [https://ai.google.dev/gemma/docs/core/lora_tuning](https://ai.google.dev/gemma/docs/core/lora_tuning)

52. ↑ [52.0](#cite_ref-tgi_multi_52-0) [52.1](#cite_ref-tgi_multi_52-1) [52.2](#cite_ref-tgi_multi_52-2) Hugging Face. "TGI Multi-LoRA: Deploy Once, Serve 30 Models." 2024. [https://huggingface.co/blog/multi-lora-serving](https://huggingface.co/blog/multi-lora-serving)

53. [↑](#cite_ref-hf_diffusers_53-0) Hugging Face. "LoRA for Diffusion Models." Diffusers documentation. [https://huggingface.co/docs/diffusers/en/training/lora](https://huggingface.co/docs/diffusers/en/training/lora)

54. ↑ [54.0](#cite_ref-ffa-lora_54-0) [54.1](#cite_ref-ffa-lora_54-1) Sun, Yuxin, et al. "Improving LoRA in Privacy-preserving Federated Learning." ICLR 2024. [https://arxiv.org/abs/2403.12313](https://arxiv.org/abs/2403.12313)

55. [↑](#cite_ref-qdylora_55-0) QDyLoRA: Quantized Dynamic Low-Rank Adaptation. arXiv preprint arXiv:2402.10462 (2024). [https://arxiv.org/abs/2402.10462](https://arxiv.org/abs/2402.10462)

56. [↑](#cite_ref-1lora_56-0) 1LoRA: A Parameter-Efficient Fine-Tuning Approach. arXiv preprint arXiv:2503.08333 (2024). [https://www.arxiv.org/pdf/2503.08333](https://www.arxiv.org/pdf/2503.08333)

57. [↑](#cite_ref-complexity2024_57-0) Computational Complexity of Low-Rank Adaptation. arXiv preprint (2024).

## External links

- [Official Microsoft LoRA implementation](https://github.com/microsoft/LoRA)
- [Hugging Face PEFT documentation](https://huggingface.co/docs/peft)
- [Original LoRA paper on arXiv](https://arxiv.org/abs/2106.09685)
- [LoRA paper on OpenReview (ICLR 2022)](https://openreview.net/forum?id=nZeVKeeFYf9)
- [QLoRA paper on arXiv](https://arxiv.org/abs/2305.14314)
- [QLoRA GitHub repository](https://github.com/artidoro/qlora)
- [DoRA GitHub repository (NVIDIA)](https://github.com/NVlabs/DoRA)
- [Low-rank Adaptation for Fast Text-to-Image Diffusion Fine-tuning](https://github.com/cloneofsimo/lora)
- [CivitAI LoRA model repository](https://civitai.com/models)
- [Axolotl fine-tuning framework](https://github.com/axolotl-ai-cloud/axolotl)
- [LLaMA-Factory fine-tuning toolkit](https://github.com/hiyouga/LlamaFactory)
- [Unsloth optimization library](https://github.com/unslothai/unsloth)
- [A Survey on LoRA of Large Language Models](https://arxiv.org/abs/2407.11046)
