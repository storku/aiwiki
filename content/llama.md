---
title: "LLaMA (Large Language Model Meta AI)"
slug: "llama"
---

**LLaMA** (Large Language Model Meta AI), commonly written as **Llama** in later releases, is a family of [large language models](/wiki/large_language_model) developed by Meta's Fundamental AI Research (FAIR) team. First released in February 2023, the Llama series has grown into one of the most widely adopted open-weight model families in the AI ecosystem, with over 1.2 billion downloads by April 2025. The model family spans multiple generations, from the original LLaMA with 7B to 65B parameters, through Llama 2 and Llama 3 with increasingly capable dense [transformer](/wiki/transformer) architectures, to Llama 4's [mixture of experts](/wiki/mixture_of_experts) design. Llama models are released under Meta's Community License Agreement, which allows broad commercial use but does not meet the formal Open Source Definition maintained by the Open Source Initiative.

## Overview

The Llama model family represents [Meta](/wiki/meta)'s strategy to build an open AI ecosystem, driven in large part by CEO Mark Zuckerberg's conviction that open-weight models accelerate innovation and prevent lock-in to closed ecosystems. Zuckerberg has drawn parallels to the history of Linux: an open platform that over time became more advanced, more secure, and more broadly supported than proprietary Unix alternatives. Each successive Llama generation has expanded in scale, capability, and accessibility, progressing from a research-only release in 2023 to models that rival or exceed leading proprietary systems like [GPT-4](/wiki/gpt-4) and Claude 3.5 Sonnet on multiple benchmarks.

Llama models serve a wide range of use cases including text generation, code completion, multilingual translation, document understanding, image reasoning, and on-device inference. The ecosystem around Llama includes derivative projects such as llama.cpp (which enables CPU inference), thousands of community fine-tuned variants on [Hugging Face](/wiki/hugging_face), and enterprise deployments at companies like Goldman Sachs, AT&T, DoorDash, and Shopify.

## Model history

### Complete release timeline

| Generation | Model | Release date | Parameters | Context length | Key features |
| --- | --- | --- | --- | --- | --- |
| LLaMA 1 | 7B, 13B, 33B, 65B | February 24, 2023 | 7B to 65B | 2,048 tokens | First release; research-only license |
| Llama 2 | 7B, 13B, 70B | July 18, 2023 | 7B to 70B | 4,096 tokens | Open commercial license; RLHF fine-tuning |
| Code Llama | 7B, 13B, 34B, 70B | August 24, 2023 | 7B to 70B | 16,384 tokens | Code-specialized; Python variant; infilling |
| Llama 3 | 8B, 70B | April 18, 2024 | 8B, 70B | 8,192 tokens | 128K vocabulary; GQA on all sizes; 15T training tokens |
| Llama 3.1 | 8B, 70B, 405B | July 23, 2024 | 8B to 405B | 128,000 tokens | First openly available frontier model; multilingual |
| Llama 3.2 | 1B, 3B, 11B, 90B | September 25, 2024 | 1B to 90B | 128,000 tokens | First Llama with vision; edge/mobile models |
| Llama 3.3 | 70B | December 6, 2024 | 70B | 128,000 tokens | 405B-level performance at 70B cost |
| Llama 4 Scout | 17B active / 109B total | April 5, 2025 | 109B (16 experts) | 10M tokens | MoE architecture; iRoPE; natively multimodal |
| Llama 4 Maverick | 17B active / 400B total | April 5, 2025 | 400B (128 experts) | 1M tokens | MoE; beats GPT-4o on multimodal benchmarks |
| Llama 4 Behemoth | 288B active / ~2T total | In development | ~2T (16 experts) | TBD | Teacher model for distillation; not yet released |

### LLaMA 1 (February 2023)

The original LLaMA was announced on February 24, 2023, with an accompanying paper titled "LLaMA: Open and Efficient Foundation Language Models" by Hugo Touvron and colleagues at Meta FAIR. The paper was published on arXiv (2302.13971) and demonstrated a key finding: that state-of-the-art performance could be achieved using only publicly available datasets, without relying on proprietary data.

LLaMA 1 came in four sizes (7B, 13B, 33B, and 65B parameters) and was trained on between 1 trillion and 1.4 trillion tokens. A notable result was that LLaMA-13B outperformed GPT-3 (175B) on most benchmarks despite being over 10 times smaller, and LLaMA-65B was competitive with Chinchilla-70B and PaLM-540B. The model weights were initially released under a non-commercial research license, available only to approved researchers on a case-by-case basis. However, the weights were leaked online shortly after the announcement, which paradoxically accelerated community adoption and spawned numerous derivative projects.

#### LLaMA 1 architecture

LLaMA 1 used a standard auto-regressive decoder-only [transformer](/wiki/transformer) architecture with several modifications:

- Pre-normalization using RMSNorm (Root Mean Square Layer Normalization)
- SwiGLU activation function in the feed-forward layers (replacing ReLU)
- Rotary Positional Embeddings (RoPE) instead of absolute positional embeddings

| Parameter | 7B | 13B | 33B | 65B |
| --- | --- | --- | --- | --- |
| Dimension | 4,096 | 5,120 | 6,656 | 8,192 |
| Attention heads | 32 | 40 | 52 | 64 |
| Layers | 32 | 40 | 60 | 80 |
| Learning rate | 3.0e-4 | 3.0e-4 | 1.5e-4 | 1.5e-4 |
| Batch size | 4M tokens | 4M tokens | 4M tokens | 4M tokens |
| Training tokens | 1T | 1T | 1.4T | 1.4T |

The training data comprised approximately 1.4 trillion tokens from the following sources:

| Source | Proportion |
| --- | --- |
| CCNet (CommonCrawl) | 67% |
| C4 | 15% |
| GitHub | 4.5% |
| Wikipedia | 4.5% |
| Books | 4.5% |
| ArXiv | 2.5% |
| Stack Exchange | 2% |

The Wikipedia and Books data included content in 20 languages: Bulgarian, Catalan, Czech, Danish, German, English, Spanish, French, Croatian, Hungarian, Italian, Dutch, Polish, Portuguese, Romanian, Russian, Slovenian, Serbian, Swedish, and Ukrainian.

#### LLaMA 1 benchmark results

| Benchmark | 7B | 13B | 33B | 65B |
| --- | --- | --- | --- | --- |
| BoolQ | 76.5 | 78.1 | 83.1 | 85.3 |
| PIQA | 79.8 | 80.1 | 82.3 | 82.8 |
| SIQA | 48.9 | 50.4 | 50.4 | 52.3 |
| HellaSwag | 76.1 | 79.2 | 82.8 | 84.2 |
| WinoGrande | 70.1 | 73.0 | 76.0 | 77.0 |
| ARC-e | 76.7 | 78.1 | 81.4 | 81.5 |
| ARC-c | 47.6 | 52.7 | 57.8 | 56.0 |
| OBQA | 57.2 | 56.4 | 58.6 | 60.2 |

### Llama 2 (July 2023)

On July 18, 2023, Meta released Llama 2 in partnership with Microsoft. This was a landmark release because it marked the first time Meta offered Llama models under a permissive commercial license (the Llama 2 Community License Agreement), making the weights freely available for both research and commercial use. Llama 2 shipped in three sizes: 7B, 13B, and 70B parameters.

Llama 2 was trained on 2 trillion tokens, a 40% increase over LLaMA 1. The context window doubled from 2,048 to 4,096 tokens. The 70B model introduced Grouped-Query Attention (GQA) to improve inference scalability, a technique that would be adopted across all sizes in later generations. The architecture otherwise remained largely unchanged from LLaMA 1.

In addition to the base pretrained models, Meta released Llama 2 Chat variants that were fine-tuned for dialogue using supervised fine-tuning (SFT) on 27,540 prompt-response pairs, followed by [reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF). The accompanying paper, "Llama 2: Open Foundation and Fine-Tuned Chat Models" (arXiv: 2307.09288), described the alignment process in detail.

### Code Llama (August 2023)

Code Llama, released on August 24, 2023, was a family of code-specialized models built on top of Llama 2. It came in three flavors across four sizes (7B, 13B, 34B, and 70B):

| Variant | Description |
| --- | --- |
| Code Llama | Foundation model for general code generation |
| Code Llama - Python | Further fine-tuned on 100B tokens of Python code |
| Code Llama - Instruct | Instruction-tuned for natural language programming queries |

All Code Llama models were trained on an additional 500 billion tokens of code-heavy data (85% open-source GitHub code, 8% natural language about code, 7% general natural language). They supported sequence lengths of 16,384 tokens during training and showed improvements on inputs up to 100,000 tokens. The 7B, 13B, and 70B variants also supported fill-in-the-middle (infilling) capability, enabling code completion based on surrounding context.

### Llama 3 (April 2024)

Llama 3 was released on April 18, 2024, initially with 8B and 70B parameter sizes. It represented a substantial leap in performance driven primarily by improvements in data quality, data diversity, and training scale rather than architectural changes. The underlying architecture remained a standard dense decoder-only [transformer](/wiki/transformer), but with several important refinements.

#### Architecture and training

Llama 3 adopted Grouped-Query Attention (GQA) across all model sizes (not just the largest, as in Llama 2), using 8 key-value heads to improve inference speed and reduce key-value cache size during decoding. A new tokenizer expanded the vocabulary to 128,256 tokens (up from 32,000 in Llama 2), using a tiktoken-based tokenizer that encodes text more efficiently and provides better support for non-English languages.

| Parameter | 8B | 70B |
| --- | --- | --- |
| Layers | 32 | 80 |
| Hidden dimension | 4,096 | 8,192 |
| FFN dimension | 14,336 | 28,672 |
| Attention heads | 32 | 64 |
| Key-value heads (GQA) | 8 | 8 |
| Vocabulary size | 128,256 | 128,256 |
| Context length | 8,192 | 8,192 |
| Training tokens | 15T+ | 15T+ |

The models were pretrained on over 15 trillion tokens from publicly available sources, representing a seven-fold increase over Llama 2's training data. The dataset included four times more code than Llama 2, and over 5% consisted of high-quality non-English data covering more than 30 languages. Data quality was maintained through a multi-stage filtering pipeline using heuristic filters, NSFW filters, semantic deduplication, and quality classifiers trained to identify high-quality text.

Training was conducted on dual 24,000-GPU clusters using a combination of data, model, and pipeline parallelism. Meta achieved over 400 TFLOPS per GPU in compute utilization and an overall effective training uptime exceeding 95%. This made Llama 3 training approximately three times more efficient than Llama 2.

Post-training combined supervised fine-tuning (SFT), rejection sampling, proximal policy optimization (PPO), and direct preference optimization (DPO) to produce instruction-tuned variants.

#### Llama 3 benchmark performance

| Benchmark | Llama 3 8B | Llama 3 70B | GPT-3.5 Turbo | GPT-4 (reference) |
| --- | --- | --- | --- | --- |
| MMLU (5-shot) | 68.4 | 82.0 | 70.0 | 86.4 |
| HumanEval (0-shot) | 62.2 | 81.7 | 48.1 | 85.9 |
| GSM8K (8-shot, CoT) | 79.6 | 93.0 | 57.1 | 92.0 |

Llama 3 70B significantly outperformed GPT-3.5 Turbo on all benchmarks and approached GPT-4 on math reasoning (GSM8K), while Llama 3 8B delivered strong performance for its size class.

### Llama 3.1 (July 2024)

Released on July 23, 2024, Llama 3.1 introduced the 405B parameter model, making it the first openly available model to rival top closed-source AI systems on a broad range of tasks. The release included updated 8B and 70B variants alongside the flagship 405B model.

#### Architecture

Llama 3.1 maintained the same dense decoder-only transformer architecture as Llama 3, with Meta explicitly choosing not to use a mixture of experts design in favor of training stability and simplicity. Key architectural components included:

- Grouped-Query Attention (GQA) with 8 key-value heads across all sizes
- Rotary Positional Embeddings (RoPE) with a base frequency of 500,000, enabling stable 128K context
- RMSNorm for layer normalization
- SwiGLU activation function in feed-forward layers

| Parameter | 8B | 70B | 405B |
| --- | --- | --- | --- |
| Layers | 32 | 80 | 126 |
| Hidden dimension | 4,096 | 8,192 | 16,384 |
| FFN dimension | 14,336 | 28,672 | 53,248 |
| Attention heads | 32 | 64 | 128 |
| Key-value heads (GQA) | 8 | 8 | 8 |
| Context length | 128K | 128K | 128K |
| Vocabulary size | 128,256 | 128,256 | 128,256 |

#### Extended context window

The most significant change in Llama 3.1 was the expansion of the context window from 8,192 tokens to 128,000 tokens, a 16x increase. For the 405B model, Meta achieved this through a six-stage progressive training process: the model was initially trained with an 8K context window, then the context was gradually increased across six stages, ending at 128K. This long-context training phase used approximately 800 billion additional training tokens.

#### Training at scale

The 405B model was trained on over 15 trillion tokens using more than 16,000 NVIDIA H100 GPUs, consuming 30.84 million GPU hours. The training dataset maintained the same scale as Llama 3 but incorporated improved data curation. The vocabulary was expanded to 128,256 tokens by combining 100,000 tokens from the tiktoken tokenizer with 28,000 additional tokens to better support non-English languages.

#### Multilingual support

Llama 3.1 officially supported eight languages: English, French, German, Hindi, Italian, Portuguese, Spanish, and Thai.

#### Benchmark performance

Llama 3.1 405B achieved competitive results against the leading closed-source models available at the time of its release.

| Benchmark | Llama 3.1 8B | Llama 3.1 70B | Llama 3.1 405B | GPT-4o | Claude 3.5 Sonnet |
| --- | --- | --- | --- | --- | --- |
| MMLU (5-shot) | 73.0 | 86.0 | 88.6 | 88.7 | 88.3 |
| HumanEval (0-shot) | 72.6 | 80.5 | 89.0 | 90.2 | 92.0 |
| GSM8K (8-shot, CoT) | 84.5 | 95.1 | 96.8 | 96.1 | 96.4 |
| MMLU Pro (5-shot) | 48.3 | 66.4 | 73.3 | 74.0 | 77.0 |
| Multilingual MGSM | 68.9 | 86.9 | 91.6 | 91.6 | 91.6 |

On GSM8K (grade school math), Llama 3.1 405B scored 96.8%, surpassing both GPT-4o and Claude 3.5 Sonnet. On general knowledge (MMLU), it was within 0.1 points of GPT-4o. For tool use (BFCL benchmark), Llama 3.1 405B scored 88.5%, competitive with Claude 3.5 Sonnet's 90.2%.

#### Safety tools

Alongside the model release, Meta introduced Llama Guard 3 (a multilingual safety classifier for content moderation) and Prompt Guard (a prompt injection filter). Over 25 ecosystem partners, including AWS, NVIDIA, Databricks, and Google Cloud, offered Llama 3.1 support on launch day.

### Llama 3.2 (September 2024)

Released on September 25, 2024, Llama 3.2 marked two significant firsts for the Llama family: vision capabilities and lightweight models designed for edge and mobile deployment. The release comprised four model sizes spanning two distinct categories.

#### Lightweight text models (1B and 3B)

The 1B and 3B models were designed specifically for on-device inference on mobile phones, wearables, and IoT devices. Rather than training from scratch, Meta created these models through a combination of structured pruning (reducing the Llama 3.1 8B model) and knowledge distillation (using logits from the 8B and 70B models during pretraining to recover performance lost during pruning).

| Property | 1B | 3B |
| --- | --- | --- |
| Parameters | 1.23B | 3.21B |
| Architecture | Dense transformer (decoder-only) | Dense transformer (decoder-only) |
| Context length | 128K tokens | 128K tokens |
| Training tokens | Up to 9T | Up to 9T |
| GPU memory required | ~1.8 GB | ~3.4 GB |
| GQA key-value heads | 8 | 8 |

These models were optimized for Qualcomm and MediaTek hardware on launch day and for Arm processors (which power 99% of mobile devices). Meta recommended the PyTorch ExecuTorch framework for on-device inference. Despite their small size, the 3B model outperformed Gemma 2 2.6B and Phi 3.5-mini on instruction following, summarization, prompt rewriting, and tool-use benchmarks.

#### Vision models (11B and 90B)

The 11B and 90B models were the first Llama models to support image understanding. They were built on top of the Llama 3.1 8B and 70B text models respectively, with a new vision architecture added through adapter weights rather than retraining the entire model.

The vision architecture consisted of:

1. A pretrained image encoder that converts images into token representations
2. Cross-attention adapter layers that feed image encoder representations into the language model
3. During adapter training, the image encoder parameters were updated but the language model parameters were frozen, preserving all text-only capabilities

This design made the vision models drop-in replacements for their text-only counterparts. Training proceeded in two stages: first on large-scale image-text pairs for broad visual understanding, then on high-quality domain-specific data. Post-training included supervised fine-tuning, rejection sampling, and direct preference optimization.

The vision models supported use cases including:

- Document-level understanding (charts, graphs, tables)
- Image captioning and description
- Visual grounding (locating objects in images based on natural language descriptions)
- Multi-image reasoning

The 11B and 90B vision models were competitive with Claude 3 Haiku and GPT-4o mini on image recognition and visual understanding tasks, while the 90B model approached GPT-4o on several vision benchmarks.

#### Multilingual support

All Llama 3.2 models supported eight languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai.

### Llama 3.3 (December 2024)

Released on December 6, 2024, Llama 3.3 was a text-only 70B instruction-tuned model that delivered performance comparable to the much larger Llama 3.1 405B while requiring significantly fewer computational resources. This made it approximately 5x cheaper to run than the 405B model.

#### Architecture and training

Llama 3.3 70B used the same optimized transformer architecture as Llama 3.1 70B, with 80 layers, an 8,192-dimensional hidden state, 64 attention heads, and 8 key-value heads for GQA. It supported a 128K token context length. The model was pretrained on approximately 15 trillion tokens from publicly available sources, and fine-tuning incorporated over 25 million synthetically generated examples in addition to publicly available instruction datasets. Meta reported that training consumed 39.3 million GPU hours on NVIDIA H100 80GB GPUs.

#### Benchmark performance

| Benchmark | Llama 3.3 70B | Llama 3.1 405B | Difference |
| --- | --- | --- | --- |
| MMLU (5-shot) | 86.0 | 88.6 | -2.6 |
| HumanEval (0-shot) | 88.4 | 89.0 | -0.6 |
| GSM8K (8-shot, CoT) | 95.1 | 96.8 | -1.7 |

The gaps between Llama 3.3 70B and Llama 3.1 405B were minimal across benchmarks: 2.6 points on MMLU (roughly 3% difference), 0.6 points on HumanEval (less than 1% difference), and 1.7 points on GSM8K. For most practical applications, these differences are negligible, making Llama 3.3 70B an efficient alternative when compute resources or cost are constrained.

Llama 3.3 demonstrated particular strengths in instruction following, multilingual tasks, and coding. It was made available through Hugging Face, the official Llama website, and cloud platforms including Amazon Bedrock.

### Llama 4 (April 2025)

Released on April 5, 2025, Llama 4 represented the most significant architectural departure in the Llama family's history. It introduced a [mixture of experts](/wiki/mixture_of_experts) (MoE) architecture and native multimodal capabilities, with two publicly released models (Scout and Maverick) and a third (Behemoth) still in development.

#### Mixture of experts architecture

Unlike previous Llama generations, which used dense transformer architectures where every parameter is activated for every input token, Llama 4 adopted an MoE design. In this approach, each transformer layer contains multiple "expert" sub-networks, and a gating function activates only the experts best suited to process each token. This allows the model to maintain the knowledge capacity of a very large model while keeping inference costs comparable to a much smaller one.

| Property | Scout | Maverick | Behemoth (in development) |
| --- | --- | --- | --- |
| Total parameters | ~109B | ~400B | ~2T |
| Active parameters per token | 17B | 17B | 288B |
| Number of experts | 16 | 128 | 16 |
| Context length (pretrained) | 256K | 256K | TBD |
| Context length (instruct) | 10M | 1M | TBD |
| Pretraining tokens | ~40T | ~22T | 30T+ |

Both Scout and Maverick share the same 17 billion active parameters per token, meaning inference costs are similar for both models despite Maverick having nearly four times the total parameter count.

#### iRoPE architecture

Llama 4 introduced the iRoPE (interleaved Rotary Positional Embedding) architecture, a novel approach to positional encoding designed to support extremely long context windows. The "i" stands for "interleaved," reflecting Meta's long-term goal of supporting theoretically infinite context lengths in future iterations.

The iRoPE architecture works by alternating between two types of attention layers:

- **RoPE layers** (three out of every four layers): These use standard Rotary Position Embeddings and chunked attention, providing strong sensitivity to nearby tokens with exponential decay for distant ones. They capture local patterns and relationships.
- **NoPE layers** (every fourth layer): These deliberately omit positional embeddings entirely, using the full causal mask over the entire context. They provide equal attention to all tokens regardless of distance, enabling global connections between distant parts of the input.

Additionally, Meta applied temperature scaling in the NoPE layers (but not in the RoPE layers) to improve generalization across arbitrary context lengths. This combination of interleaved NoPE layers and temperature scaling is what Meta collectively refers to as the iRoPE architecture. The result is Llama 4 Scout's industry-leading 10-million-token context window.

#### Native multimodality

Unlike Llama 3.2's adapter-based approach to vision, Llama 4 features native multimodality through early fusion. Text and image tokens are unified within a single transformer backbone from the start of training, rather than being integrated through separate adapter layers. The vision encoder is based on an improved version of MetaCLIP.

Both Scout and Maverick can process text and image inputs, with capabilities including:

- Multi-image reasoning (responding to prompts about multiple images simultaneously)
- Document and chart understanding
- Image grounding (identifying specific regions within images)
- Visual question answering

Scout was pretrained with up to 48 images per sequence, while both models were fine-tuned with up to 8 images in post-training.

#### Training details

Llama 4 models were trained on data encompassing 200 languages, with specific fine-tuning support for 12 languages: Arabic, English, French, German, Hindi, Indonesian, Italian, Portuguese, Spanish, Tagalog, Thai, and Vietnamese. Training used FP8 precision without quality sacrifice.

Meta introduced MetaP, a hyperparameter setting technique that enables hyperparameters to transfer across different batch sizes and model architectures, reducing the need for extensive hyperparameter search.

The post-training pipeline consisted of three stages: lightweight supervised fine-tuning, online reinforcement learning, and lightweight direct preference optimization. Meta applied filtering to remove more than 50% of "easy" training examples, focusing the model's learning on more challenging data.

#### Benchmark performance

| Benchmark | Llama 4 Scout | Llama 4 Maverick | GPT-4o | Gemini 2.0 Flash |
| --- | --- | --- | --- | --- |
| MMLU Pro | 74.3 | 80.5 | N/A | 77.6 |
| GPQA Diamond | 57.2 | 69.8 | 53.6 | 60.1 |
| LMArena ELO | N/A | 1,417 | lower | lower |

Scout outperformed every other open-weight model on both MMLU Pro and GPQA Diamond at the time of release. Maverick surpassed GPT-4o and Gemini 2.0 Flash on coding, reasoning, multilingual, and image understanding benchmarks. On the LMArena chat benchmark, Maverick achieved an ELO of 1,417, exceeding GPT-4o, Gemini 2.0 Flash, and DeepSeek V3.

On visual understanding benchmarks, Scout achieved 83-89% accuracy on tasks including DocVQA (document understanding) and 69% on the MMMU benchmark. However, independent evaluations noted that the models showed some weaknesses on long-context tasks despite the large context window.

Scout fits on a single NVIDIA H100 GPU when using Int4 quantization, while Maverick can be deployed on a single H100 DGX host or through distributed inference.

#### Llama 4 Behemoth

Behemoth is the largest model in the Llama 4 family, with approximately 2 trillion total parameters, 288 billion active parameters, and 16 experts. It serves primarily as a teacher model for knowledge distillation: both Scout and Maverick were distilled from Behemoth using a novel dynamic weighting loss function. Meta reported that on STEM benchmarks, Behemoth outperformed GPT-4.5, Claude Sonnet 3.7, and Gemini 2.0 Pro.

At the time of the Scout and Maverick release, Behemoth was still in training. Reports from May 2025 indicated that Meta postponed its release from early summer to fall 2025 or later.

## Architecture evolution

### Key architectural changes across generations

| Feature | LLaMA 1 | Llama 2 | Llama 3 / 3.1 / 3.2 / 3.3 | Llama 4 |
| --- | --- | --- | --- | --- |
| Architecture type | Dense transformer | Dense transformer | Dense transformer | Mixture of experts |
| Positional encoding | RoPE | RoPE | RoPE (freq 500K) | iRoPE (interleaved RoPE + NoPE) |
| Attention | Multi-head | Multi-head (GQA on 70B) | GQA on all sizes | GQA + MoE routing |
| Activation function | SwiGLU | SwiGLU | SwiGLU | SwiGLU |
| Normalization | RMSNorm | RMSNorm | RMSNorm | RMSNorm |
| Vocabulary size | 32K | 32K | 128K | 128K |
| Max context length | 2K | 4K | 128K | 10M (Scout) |
| Multimodal support | No | No | Vision adapter (3.2) | Native early fusion |
| Training data scale | 1-1.4T tokens | 2T tokens | 15T+ tokens | 22-40T tokens |

### Grouped-Query Attention

Grouped-Query Attention (GQA) is a key efficiency technique adopted across the Llama family. In standard multi-head [attention](/wiki/attention), each attention head has its own set of query, key, and value projections. GQA reduces memory bandwidth requirements by sharing key and value heads across multiple query heads. In Llama 3 and later models, 8 key-value heads are shared across 32 to 128 query heads depending on model size. This reduces the size of the key-value cache during decoding and improves inference throughput without significantly affecting model quality.

### Rotary Positional Embeddings

Rotary Positional Embeddings (RoPE) encode positional information by rotating query and key vectors based on their relative positions in the sequence. This approach generalizes better to longer sequences than absolute positional embeddings. In Llama 3.1, the RoPE base frequency was set to 500,000, which enabled stable training and inference at 128K token context lengths. In Llama 4, the iRoPE variant interleaves RoPE layers with NoPE (no positional embedding) layers to achieve context windows of up to 10 million tokens.

## Licensing and open-weight debate

### Llama Community License Agreement

Meta releases Llama models under a custom license called the Llama Community License Agreement. This license grants a non-exclusive, worldwide, non-transferable, and royalty-free license to use, reproduce, distribute, copy, create derivative works of, and modify the model weights. However, it includes several notable restrictions:

| Restriction | Details |
| --- | --- |
| 700M MAU threshold | If the licensee or its affiliates have more than 700 million monthly active users, they must request a separate license from Meta, which Meta may grant at its sole discretion |
| Competitor restriction | The model weights may not be used to improve any other large language model (excluding Llama itself or its derivatives) |
| Attribution requirement | Products built with Llama must prominently display "Built with Llama" on websites, user interfaces, blog posts, or documentation |
| Acceptable Use Policy | Use must comply with Meta's Acceptable Use Policy and all applicable laws and regulations |

The 700 million MAU threshold effectively means that only other very large technology companies (those that compete with Meta at scale) are excluded from the free license. For the vast majority of companies, startups, and individual developers, the license imposes no practical barriers to commercial use.

### Open source controversy

The Open Source Initiative (OSI) has repeatedly stated that Meta's Llama license does not qualify as open source under the Open Source Definition. The OSI's position is that a license qualifying as open source may not discriminate against persons, groups, or fields of endeavor. The Llama license's restrictions on commercial use above the 700M MAU threshold, the prohibition on using the model to train competing LLMs, and the requirement to obtain a separate license for large-scale users all fail to meet these criteria.

Critics have accused Meta of "open washing," meaning the company benefits from the positive associations of the term "open source" while not truly meeting its definition. Meta and its supporters counter that the term "open weights" is more accurate and that releasing model weights at all represents a significant contribution to the AI community that closed-source competitors do not provide. Meta does not release training data or the full training code alongside model weights, further distinguishing its approach from traditional open-source practices.

Despite this debate, the practical impact of Meta's approach has been substantial. The availability of Llama weights has enabled a large ecosystem of derivative models, research, and commercial applications that would not exist if the models were entirely closed.

## Safety and responsible AI

### Llama Guard

Meta has released a series of safety classifier models alongside the main Llama releases:

| Model | Base model | Capabilities | Release |
| --- | --- | --- | --- |
| Llama Guard 1 | Llama 2 7B | Text-only input/output safety classification | December 2023 |
| Llama Guard 2 | Llama 3 8B | Updated taxonomy, improved classification | April 2024 |
| Llama Guard 3 (1B) | Llama 3.2 1B | Lightweight safety classification for edge | September 2024 |
| Llama Guard 3 (8B) | Llama 3.1 8B | Multilingual safety classification (8 languages) | July 2024 |
| Llama Guard 3 (11B-Vision) | Llama 3.2 11B | Text and image safety evaluation | September 2024 |
| Llama Guard 4 (12B) | Llama 4 Scout (pruned) | Multimodal safety; multi-image support | April 2025 |

Llama Guard models are aligned to the MLCommons standardized hazards taxonomy and can classify content in both LLM inputs (prompt classification) and LLM outputs (response classification). The model outputs a text label indicating whether content is safe or unsafe, along with the specific hazard categories violated. Llama Guard 4, with 12 billion parameters, is pruned from the Llama 4 Scout model and supports safety classification when multiple images are given as input.

### Prompt Guard

Introduced with Llama 3.1, Prompt Guard is a separate model designed to detect prompt injection attacks and jailbreaking attempts. It acts as a filter layer that can be deployed before user inputs reach the main Llama model.

### Red teaming and external evaluation

For each major Llama release, Meta conducts extensive red teaming exercises with both internal and external experts. The company has also partnered with organizations such as Thorn (for child safety evaluation) and engaged independent security researchers to identify vulnerabilities before public release.

## Community adoption and ecosystem

### Download and usage statistics

| Date | Cumulative downloads |
| --- | --- |
| July 2024 | ~350 million |
| December 2024 | ~650 million |
| April 2025 | ~1.2 billion |

Daily download rates averaged approximately one million by late 2024. The Llama developer ecosystem includes over 20,000 derivative models published on [Hugging Face](/wiki/hugging_face), and GitHub repositories mentioning Llama increased 15-fold since the original release.

### Notable ecosystem projects

| Project | Description |
| --- | --- |
| llama.cpp | CPU-based inference engine enabling Llama to run on consumer hardware without a GPU |
| Ollama | User-friendly tool for running Llama models locally |
| Text Generation Inference (TGI) | Hugging Face's optimized serving framework supporting Llama |
| vLLM | High-throughput serving engine with PagedAttention for efficient Llama deployment |
| ExecuTorch | Meta's framework for on-device inference of Llama 3.2 1B/3B models |

### Enterprise adoption

Fortune 500 companies piloting Llama-based solutions reached approximately 50% adoption through 2024 and 2025. Notable enterprise deployments include Goldman Sachs, AT&T, DoorDash, and Shopify, which have used Llama for customer service automation, code generation, and internal knowledge management. Enterprise spending on Llama-based solutions is projected to reach $2.5 billion by 2026.

### Cloud platform availability

Llama models are supported across all major cloud platforms:

| Platform | Details |
| --- | --- |
| Amazon Bedrock (AWS) | Managed access to Llama models for AWS customers |
| Google Cloud Vertex AI | Llama models available through Model Garden |
| Microsoft Azure | Llama available through Azure AI model catalog |
| NVIDIA NIM | Optimized inference containers for Llama models |
| Oracle Cloud | Llama 3.1 and 4 available through OCI Generative AI |
| IBM watsonx | Llama 3.1, 3.2, and 4 models available |

## Meta's AI strategy

Meta's decision to release Llama as open weights is rooted in both philosophical conviction and business strategy. Mark Zuckerberg published a detailed letter in July 2024 titled "Open Source AI Is the Path Forward," in which he articulated several arguments:

1. **Avoiding platform lock-in**: Meta's experience competing against Apple's closed iOS ecosystem shaped Zuckerberg's belief that the next generation of computing (AI and AR/VR) must be built on open platforms to prevent any single company from controlling access.

2. **Ecosystem network effects**: An open model benefits from community contributions including efficiency improvements, hardware optimizations, fine-tuning techniques, and safety research. These improvements compound over time, making the open model better than any single organization could achieve alone.

3. **Commoditizing the complement**: By making foundation models freely available, Meta shifts competitive differentiation to areas where it has advantages, such as its massive social media data, user-facing products (Instagram, WhatsApp, Facebook), and hardware investments (Reality Labs).

4. **Security through transparency**: Zuckerberg argued that open models are ultimately more secure because they receive scrutiny from thousands of external researchers, similar to how open-source software benefits from community auditing.

5. **National competitiveness**: Meta has positioned Llama as critical to maintaining American leadership in AI, arguing that open US-developed models are preferable to having global AI development dominated by closed models from any single country.

However, Zuckerberg has also signaled limits to this openness. In July 2025, he indicated that Meta would likely not open-source all of its "superintelligence" AI models, suggesting that future, more capable systems may be released under more restrictive terms or kept entirely proprietary.

## Ethical considerations and limitations

### Known limitations

Llama models, like all large language models, are subject to several well-documented limitations:

- **Hallucination**: The models can generate plausible-sounding but factually incorrect information
- **Bias**: Training on internet data means the models reflect biases present in web text, including biases related to gender, race, religion, and other attributes
- **Toxicity**: Without safety fine-tuning, base models can generate toxic, offensive, or harmful content
- **Language bias**: Despite multilingual training data, performance is strongest in English and may vary significantly for other languages and dialects
- **Knowledge cutoff**: Models have a training data cutoff and cannot access information beyond that date without external tools

### Bias evaluation (LLaMA 1)

Meta's original bias evaluation of LLaMA 1 using the CrowS-Pairs benchmark showed the following results (lower scores indicate lower bias):

| Category | Score |
| --- | --- |
| Gender | 70.6 |
| Religion | 79.0 |
| Race/Color | 57.0 |
| Sexual orientation | 81.0 |
| Age | 70.1 |
| Nationality | 64.2 |
| Disability | 66.7 |
| Physical appearance | 77.8 |
| Socioeconomic status | 71.5 |
| Average | 66.6 |

### Intended use

Meta positions Llama as a foundation model suitable for a wide range of downstream applications, including:

- Question answering and information retrieval
- Text summarization and content generation
- Code generation and programming assistance
- Multilingual translation
- Document understanding and analysis
- On-device AI applications (Llama 3.2 1B/3B)
- Multimodal reasoning with images (Llama 3.2 11B/90B, Llama 4)

Meta emphasizes that base (pretrained) models should not be deployed in user-facing applications without additional fine-tuning, safety evaluation, and alignment. The instruction-tuned variants incorporate safety guardrails but are not guaranteed to prevent all harmful outputs.

## See also

- [Large language model](/wiki/large_language_model)
- [Transformer](/wiki/transformer)
- [Mixture of experts](/wiki/mixture_of_experts)
- [Attention](/wiki/attention)
- [Meta](/wiki/meta)
- [GPT-4](/wiki/gpt-4)
- [Hugging Face](/wiki/hugging_face)
- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)
- [OpenAI](/wiki/openai)
- [DeepSeek](/wiki/deepseek)

## References

1. Touvron, H. et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." arXiv:2302.13971. [https://arxiv.org/abs/2302.13971](https://arxiv.org/abs/2302.13971)

2. "Introducing Meta Llama 3: The most capable openly available LLM to date." Meta AI Blog (April 18, 2024). [https://ai.meta.com/blog/meta-llama-3/](https://ai.meta.com/blog/meta-llama-3/)

3. "Introducing Llama 3.1: Our most capable models to date." Meta AI Blog (July 23, 2024). [https://ai.meta.com/blog/meta-llama-3-1/](https://ai.meta.com/blog/meta-llama-3-1/)

4. "Llama 3.2: Revolutionizing edge AI and vision with open, customizable models." Meta AI Blog (September 25, 2024). [https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)

5. "The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation." Meta AI Blog (April 5, 2025). [https://ai.meta.com/blog/llama-4-multimodal-intelligence/](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)

6. Llama Team, AI @ Meta. (2024). "The Llama 3 Herd of Models." arXiv:2407.21783. [https://arxiv.org/abs/2407.21783](https://arxiv.org/abs/2407.21783)

7. Touvron, H. et al. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models." arXiv:2307.09288. [https://arxiv.org/abs/2307.09288](https://arxiv.org/abs/2307.09288)

8. Roziere, B. et al. (2023). "Code Llama: Open Foundation Models for Code." arXiv:2308.12950. [https://arxiv.org/abs/2308.12950](https://arxiv.org/abs/2308.12950)

9. "Llama 3.1 Community License Agreement." Meta. [https://www.llama.com/llama3_1/license/](https://www.llama.com/llama3_1/license/)

10. "Llama 4 Community License Agreement." Meta. [https://www.llama.com/llama4/license/](https://www.llama.com/llama4/license/)

11. "Meta's LLaMa license is still not Open Source." Open Source Initiative Blog. [https://opensource.org/blog/metas-llama-license-is-still-not-open-source](https://opensource.org/blog/metas-llama-license-is-still-not-open-source)

12. Zuckerberg, M. (2024). "Open Source AI Is the Path Forward." Meta Blog (July 23, 2024). [https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/](https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/)

13. "With 10x growth since 2023, Llama is the leading engine of AI innovation." Meta AI Blog. [https://ai.meta.com/blog/llama-usage-doubled-may-through-july-2024/](https://ai.meta.com/blog/llama-usage-doubled-may-through-july-2024/)

14. "What You Need to Know About Meta Llama 3.3 70B." Hyperstack Cloud. [https://www.hyperstack.cloud/blog/thought-leadership/what-is-meta-llama-3-3-70b-features-use-cases-more](https://www.hyperstack.cloud/blog/thought-leadership/what-is-meta-llama-3-3-70b-features-use-cases-more)

15. "Meta unveils a new, more efficient Llama model." TechCrunch (December 6, 2024). [https://techcrunch.com/2024/12/06/meta-unveils-a-new-more-efficient-llama-model/](https://techcrunch.com/2024/12/06/meta-unveils-a-new-more-efficient-llama-model/)

16. "Meta to postpone release of Llama 4 Behemoth model, report claims." SiliconANGLE (May 15, 2025). [https://siliconangle.com/2025/05/15/meta-postpone-release-llama-4-behemoth-model-report-claims/](https://siliconangle.com/2025/05/15/meta-postpone-release-llama-4-behemoth-model-report-claims/)

17. "Llama (language model)." Wikipedia. [https://en.wikipedia.org/wiki/Llama_(language_model)](https://en.wikipedia.org/wiki/Llama_(language_model))

18. "Introducing Code Llama, a state-of-the-art large language model for coding." Meta AI Blog (August 24, 2023). [https://ai.meta.com/blog/code-llama-large-language-model-coding/](https://ai.meta.com/blog/code-llama-large-language-model-coding/)

19. "Unmatched Performance and Efficiency: Llama 4." Meta. [https://www.llama.com/models/llama-4/](https://www.llama.com/models/llama-4/)

20. "Welcome Llama 4 Maverick & Scout on Hugging Face." Hugging Face Blog. [https://huggingface.co/blog/llama4-release](https://huggingface.co/blog/llama4-release)
