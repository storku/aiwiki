---
title: "Qwen"
slug: "qwen"
categories:
  - "Large_language_models"
  - "Artificial_intelligence"
  - "Alibaba_Group"
  - "Chinese_artificial_intelligence"
  - "Natural_language_processing"
  - "Deep_learning_software"
  - "Multimodal_learning"
  - "2023_software"
---[Template:Infobox LLM](/index.php?title=Template:Infobox_LLM&action=edit&redlink=1)

![Qwen logo1.png](https://qqcb8dyk5bp2il4c.public.blob.vercel-storage.com/wiki/images/1/17/Qwen_logo1.png)

**Qwen** (also called **Tongyi Qianwen**, [Chinese](/index.php?title=Chinese_language&action=edit&redlink=1): 通义千问; [pinyin](/index.php?title=Pinyin&action=edit&redlink=1): Tōngyì Qiānwèn; literally "to comprehend the meaning, [and to answer] a thousand kinds of questions") is a family of [large language models](/wiki/large_language_model) (LLMs) and [multimodal models](/wiki/multimodal_model) developed by [Alibaba Cloud](/wiki/alibaba_cloud), the cloud computing division of Chinese technology company [Alibaba Group](/index.php?title=Alibaba_Group&action=edit&redlink=1).[&#91;1&#93;](#cite_note-wikipedia-1) The name "Qwen" is derived from the Chinese brand Tongyi Qianwen and refers to the large language model family built by [Alibaba Cloud](/wiki/alibaba_cloud)'s Qwen Team.[&#91;2&#93;](#cite_note-huggingface-2) As of February 2025, Qwen models have become one of the most widely adopted [open-source](/index.php?title=Open-source&action=edit&redlink=1) models globally, with more than 78,000 derivative models developed on [Hugging Face](/wiki/hugging_face) based on the Qwen family since it was first open-sourced in 2023, and over 40 million downloads.[&#91;3&#93;](#cite_note-qvq-alibaba-3) All top 10 open-source LLMs on Hugging Face's Open LLM Leaderboard were trained and developed on updated open-source versions of Qwen.[&#91;4&#93;](#cite_note-scmp-4)

## History

### Early Development

[Alibaba](/index.php?title=Alibaba&action=edit&redlink=1) first launched a beta version of Qwen on April 11, 2023, during the Alibaba Cloud Summit under the name Tongyi Qianwen.[&#91;5&#93;](#cite_note-cnbc_11_April_2023-5) The initial architecture was based on the [LLaMA](/wiki/llama) framework developed by [Meta AI](/wiki/meta_ai).[&#91;1&#93;](#cite_note-wikipedia-1) Initially, it was integrated into various Alibaba business applications, including the workplace collaboration tool [DingTalk](/index.php?title=DingTalk&action=edit&redlink=1) and the voice assistant Tmall Genie.[&#91;6&#93;](#cite_note-reuters-initial-launch-6) The model received approval from the Chinese government and was publicly released in September 2023.[&#91;7&#93;](#cite_note-SCMP_13_September_2023-7)

### Open Source Release

In a significant move to foster a broader AI ecosystem, [Alibaba Cloud](/wiki/alibaba_cloud) began open-sourcing its models in August 2023. The first models released were **Qwen-7B** and its chat-fine-tuned variant, **Qwen-7B-Chat**.[&#91;8&#93;](#cite_note-reuters_August_3_2023-8) This was followed by the release of **Qwen-1.8B** in November 2023, aimed at low-latency and resource-constrained environments.[&#91;9&#93;](#cite_note-huggingface-1.8b-9) In December 2023, Alibaba released the 72B parameter model, which demonstrated performance comparable to leading proprietary models like [GPT-3.5](/index.php?title=GPT-3.5&action=edit&redlink=1) on several benchmarks.[&#91;10&#93;](#cite_note-chinadaily_2023-12-01-10)

### Development Timeline

| Date (UTC) | Generation / model | Key details |
| --- | --- | --- |
| 2023-04-11 | [Tongyi Qianwen](/index.php?title=Tongyi_Qianwen&action=edit&redlink=1) (beta) | Initial corporate announcement by Alibaba Cloud for a company-scale LLM initiative.[&#91;5&#93;](#cite_note-cnbc_11_April_2023-5) |
| 2023-08-03 | [Qwen-7B](/index.php?title=Qwen-7B&action=edit&redlink=1) / [Qwen-7B-Chat](/index.php?title=Qwen-7B-Chat&action=edit&redlink=1) | First broadly distributed open weights via ModelScope and [Hugging Face](/wiki/hugging_face). Quantized INT4 chat variant followed on 2023-08-21.[&#91;11&#93;](#cite_note-gh_release2023-11) |
| 2023-09-13 | Qwen (public release) | Model approved by Chinese government for public release.[&#91;7&#93;](#cite_note-SCMP_13_September_2023-7) |
| 2023-11-30 | [Qwen-72B](/index.php?title=Qwen-72B&action=edit&redlink=1) | 72-billion parameter model released, competitive with GPT-3.5.[&#91;12&#93;](#cite_note-venturebeat-72b-12) |
| 2024-02-05 | [Qwen1.5](/index.php?title=Qwen1.5&action=edit&redlink=1) | Models ranging from 0.5B to 110B parameters with 32K context window.[&#91;13&#93;](#cite_note-qwen-1.5-blog-13) |
| 2024-06-06 | [Qwen2](/index.php?title=Qwen2&action=edit&redlink=1) | Enhanced capabilities with dense and sparse models, up to 72B parameters.[&#91;14&#93;](#cite_note-qwen2-blog-14) |
| 2024-07-15 | [Qwen2](/index.php?title=Qwen2&action=edit&redlink=1) (tech report) | Technical report describes sizes from 0.5B to 72B and an MoE variant (57B-A14B) with efficiency optimizations and long-context support.[&#91;15&#93;](#cite_note-qwen2_report-15) |
| 2024-09-19 | [Qwen2.5](/index.php?title=Qwen2.5&action=edit&redlink=1) | 18 trillion token training, multilingual support, 128K context.[&#91;16&#93;](#cite_note-qwen2.5-blog-16) |
| 2024-09-18 | [Qwen2.5-Math](/index.php?title=Qwen2.5-Math&action=edit&redlink=1) | Math-specialized instruction models (1.5B/7B/72B).[&#91;17&#93;](#cite_note-qwen25_math-17) |
| 2024-09 | [Qwen2-VL](/index.php?title=Qwen2-VL&action=edit&redlink=1) | Vision-language series with dynamic resolution tokenization strategy.[&#91;18&#93;](#cite_note-qwen2_vl-18) |
| 2024-11-28 | [QwQ-32B-Preview](/index.php?title=QwQ-32B-Preview&action=edit&redlink=1) | Open-source reasoning model designed to compete with [OpenAI](/wiki/openai)'s o1.[&#91;19&#93;](#cite_note-qwq-venturebeat-19) |
| 2025-01-28 | [Qwen2.5-Max](/index.php?title=Qwen2.5-Max&action=edit&redlink=1) | Large-scale MoE model claiming superiority over [DeepSeek](/wiki/deepseek) V3.[&#91;20&#93;](#cite_note-qwen2.5-max-20) |
| 2025-01-29 | [Qwen2.5-VL](/index.php?title=Qwen2.5-VL&action=edit&redlink=1) | Enhanced video understanding with temporal reasoning.[&#91;21&#93;](#cite_note-qwen2.5-vl-21) |
| 2025-04-28 | [Qwen3](/index.php?title=Qwen3&action=edit&redlink=1) | Thinking/non-thinking modes, enhanced reasoning, 36 trillion tokens.[&#91;22&#93;](#cite_note-qwen3-blog-22) |
| 2025-07-23 | [Qwen3-Coder](/index.php?title=Qwen3-Coder&action=edit&redlink=1) | Open-source coding-focused models emphasizing agentic coding workflows.[&#91;23&#93;](#cite_note-reuters_q3coder-23) |
| 2025-07-24 | [Qwen-MT](/index.php?title=Qwen-MT&action=edit&redlink=1) | Translation model supporting 92 languages.[&#91;24&#93;](#cite_note-qwen-mt-24) |
| 2025-08-04 | [Qwen-Image](/index.php?title=Qwen-Image&action=edit&redlink=1) | Image generation model with complex text rendering.[&#91;25&#93;](#cite_note-qwen-image-25) |
| 2025-09-05 | [Qwen3-Max](/index.php?title=Qwen3-Max&action=edit&redlink=1) | Flagship hosted model with competitive performance.[&#91;22&#93;](#cite_note-qwen3-blog-22) |
| 2025-09-11 | [Qwen3-Next](/index.php?title=Qwen3-Next&action=edit&redlink=1) | Optimized model with >10x throughput improvement.[&#91;22&#93;](#cite_note-qwen3-blog-22) |
| 2025-09-23 | [Qwen3Guard](/index.php?title=Qwen3Guard&action=edit&redlink=1) | Safety guardrail model for real-time moderation.[&#91;26&#93;](#cite_note-qwen3guard-26) |

## Architecture and Technical Features

### Core Architecture

Qwen models are based on the [Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architecture, which is the standard for modern LLMs. Key architectural features include:

- **Attention Mechanism**: Uses [self-attention](/index.php?title=Self-attention&action=edit&redlink=1) mechanism. The Qwen2 series introduced [Group Query Attention](/index.php?title=Group_Query_Attention&action=edit&redlink=1) (GQA) in larger models to improve inference speed and reduce memory usage.[&#91;14&#93;](#cite_note-qwen2-blog-14)

- **Tokenizer**: Custom tokenizer with over 150,000 token vocabulary size, efficiently representing text from multiple languages and reducing token count for non-English text.[&#91;13&#93;](#cite_note-qwen-1.5-blog-13)

- **Position Embeddings**: Evolution from Absolute Position Embeddings (ALiBi) to [Rotary Position Embeddings](/index.php?title=Rotary_Position_Embeddings&action=edit&redlink=1) (RoPE) for better long-context performance, with multimodal variants using M-RoPE (Multimodal Rotary Position Embedding).[&#91;18&#93;](#cite_note-qwen2_vl-18)

- **Architecture Types**: Both dense and [Mixture of Experts](/wiki/mixture_of_experts) (MoE) variants, with MoE models activating only a subset of parameters per token for efficiency.[&#91;22&#93;](#cite_note-qwen3-blog-22)

### Training Data Scale

The evolution of training data demonstrates significant scaling:

- Qwen: Initial training on multilingual datasets

- [Qwen2](/index.php?title=Qwen2&action=edit&redlink=1): 7 trillion tokens[&#91;15&#93;](#cite_note-qwen2_report-15)

- [Qwen2.5](/index.php?title=Qwen2.5&action=edit&redlink=1): 18 trillion tokens[&#91;27&#93;](#cite_note-qwen2.5-paper-27)

- [Qwen2.5-Max](/index.php?title=Qwen2.5-Max&action=edit&redlink=1): Over 20 trillion tokens[&#91;20&#93;](#cite_note-qwen2.5-max-20)

- [Qwen3](/index.php?title=Qwen3&action=edit&redlink=1): 36 trillion tokens in 119 languages and dialects[&#91;1&#93;](#cite_note-wikipedia-1)

The pre-training data includes high-quality Chinese language data, multilingual text, code, mathematics, and multimodal data, supporting over 29 core languages and up to 92 languages in translation variants.

### Model Sizes and Variants

#### Qwen3 Dense Models

- [Qwen3-0.6B](/index.php?title=Qwen3-0.6B&action=edit&redlink=1)

- [Qwen3-1.7B](/index.php?title=Qwen3-1.7B&action=edit&redlink=1)

- [Qwen3-4B](/index.php?title=Qwen3-4B&action=edit&redlink=1)

- [Qwen3-8B](/index.php?title=Qwen3-8B&action=edit&redlink=1)

- [Qwen3-14B](/index.php?title=Qwen3-14B&action=edit&redlink=1)

- [Qwen3-32B](/index.php?title=Qwen3-32B&action=edit&redlink=1)

#### Qwen3 MoE Models

- [Qwen3-30B-A3B](/index.php?title=Qwen3-30B-A3B&action=edit&redlink=1) (30 billion total parameters, 3 billion activated)

- [Qwen3-235B-A22B](/index.php?title=Qwen3-235B-A22B&action=edit&redlink=1) (235 billion total parameters, 22 billion activated)

### Thinking and Non-Thinking Modes

Qwen3 introduces a hybrid approach to problem-solving with two distinct modes:[&#91;22&#93;](#cite_note-qwen3-blog-22)

- **Thinking Mode**: The model takes time to reason step by step before delivering the final answer, ideal for complex problems requiring deeper thought

- **Non-Thinking Mode**: Provides quick, near-instant responses suitable for simpler questions where speed is prioritized

- **Thinking Budget**: Users can control how much "thinking" the model performs based on the task at hand

## Multimodal Capabilities

### Qwen-VL Series

The Qwen-VL (Vision-Language) series represents Qwen's multimodal models that can process both text and images:

#### Qwen2-VL

Released in August 2024, featuring:[&#91;28&#93;](#cite_note-qwen2-vl-paper-28)

- Naive Dynamic Resolution mechanism for processing images of varying resolutions

- [Multimodal Rotary Position Embedding](/index.php?title=Multimodal_Rotary_Position_Embedding&action=edit&redlink=1) (M-RoPE) for effective fusion of positional information

- Support for videos over 20 minutes

- Understanding of images at various resolutions and ratios

- Fine-grained resolution and document parsing

#### Qwen2.5-VL

Released in January 2025, featuring:[&#91;21&#93;](#cite_note-qwen2.5-vl-21)

- Enhanced [OCR](/index.php?title=OCR&action=edit&redlink=1) recognition capabilities

- Multi-scenario, multi-language, and multi-orientation text recognition

- Visual localization with bounding boxes

- Structured output generation for documents, forms, and tables

- Temporal reasoning for video understanding

- Dynamic resolution and multi-image analysis

#### Qwen3-VL

The latest vision-language model featuring:[&#91;29&#93;](#cite_note-qwen3-vl-github-29)

- Visual Agent capabilities for PC/mobile GUI operation

- Advanced spatial perception and 3D grounding

- DeepStack architecture for fine-grained visual detail capture

- Text-Timestamp Alignment for precise video event localization

### Qwen2.5-Omni

End-to-end multimodal model with unique capabilities:[&#91;30&#93;](#cite_note-qwen-omni-30)

- Thinker-Talker architecture for simultaneous text and speech generation

- Real-time voice and video chat support

- TMRoPE (Time-aligned Multimodal RoPE) for synchronizing video and audio timestamps

- Processing of text, images, videos, and audio inputs

- Bilingual support (English/Chinese) with low-latency interaction

### QVQ (Visual Reasoning Model)

QVQ-72B-Preview is an experimental research model for enhanced visual reasoning:[&#91;3&#93;](#cite_note-qvq-alibaba-3)

- 70.3% on [MMMU](/wiki/mmmu) (Multimodal Massive Multi-task Understanding) benchmark

- Superior performance on MathVision and OlympiadBench

- Advanced multidisciplinary understanding and reasoning abilities

### Qwen-Audio

Large language audio models supporting:[&#91;31&#93;](#cite_note-alibaba-cloud-doc-31)

- Cross-modal processing between text and audio

- Support for 30+ languages

- Speech recognition and sound interpretation

- Processing of audio up to 30 minutes

## Specialized Models

| Variant | Release Date | Parameters | Focus | Key Features |
| --- | --- | --- | --- | --- |
| [Qwen2.5-Coder](/index.php?title=Qwen2.5-Coder&action=edit&redlink=1) | September 2024 | 0.5B to 32B | Coding | Code generation, reasoning, fixing; 88.2 on HumanEval; state-of-the-art open-source code model[&#91;16&#93;](#cite_note-qwen2.5-blog-16) |
| [Qwen2.5-Math](/index.php?title=Qwen2.5-Math&action=edit&redlink=1) | September 2024 | 1.5B to 72B | Mathematics | Mathematical reasoning with CoT, PoT, and TIR; 72.0 on MathVista; surpasses GPT-4o[&#91;17&#93;](#cite_note-qwen25_math-17) |
| [Qwen-MT](/index.php?title=Qwen-MT&action=edit&redlink=1) | July 2025 | Based on Qwen3 | Translation | 92 languages covering 95% of global population; reinforcement learning for accuracy[&#91;24&#93;](#cite_note-qwen-mt-24) |
| [Qwen3Guard](/index.php?title=Qwen3Guard&action=edit&redlink=1) | September 2025 | Based on Qwen3 | Safety | Real-time moderation, risk classification; SOTA on multilingual safety benchmarks[&#91;26&#93;](#cite_note-qwen3guard-26) |
| [QwQ-32B-Preview](/index.php?title=QwQ-32B-Preview&action=edit&redlink=1) | November 2024 | 32B | Reasoning | Enhanced multi-step reasoning; outperforms o1 in benchmarks; Apache 2.0 license[&#91;32&#93;](#cite_note-qwq-alibaba-32) |
| [Qwen-Image](/index.php?title=Qwen-Image&action=edit&redlink=1) | August 2025 | 20B | Image Generation | Complex text rendering, multi-line layouts, high visual quality[&#91;25&#93;](#cite_note-qwen-image-25) |
| [Qwen-Image-Edit](/index.php?title=Qwen-Image-Edit&action=edit&redlink=1) | August 2025 | Based on Qwen-Image | Image Editing | Precise text editing, semantic/appearance control[&#91;25&#93;](#cite_note-qwen-image-25) |

## Performance and Benchmarks

### Qwen3 Performance

Qwen3-235B-A22B achieves competitive results compared to other top-tier models:[&#91;22&#93;](#cite_note-qwen3-blog-22)

| Benchmark | Qwen3-235B-A22B | Qwen3-30B-A3B | QwQ-32B |
| --- | --- | --- | --- |
| [Arena-Hard](/index.php?title=Arena-Hard&action=edit&redlink=1) | 95.6 | 91.0 | 89.5 |
| [AIME 2024](/wiki/aime_2024) | 85.7 | 80.4 | Superior |
| [LiveCodeBench](/wiki/livecodebench) | 70.7 | - | Strong |
| [CodeForces](/index.php?title=CodeForces&action=edit&redlink=1) Elo | - | 1974 | - |

### Comparative Benchmarks

| Model | MMLU-Redux (EN) | HumanEval (EN) | MathVista (EN) | Notes |
| --- | --- | --- | --- | --- |
| [Qwen3-235B-A22B](/index.php?title=Qwen3-235B-A22B&action=edit&redlink=1) | 88.5 | N/A | N/A | Highest in series for general knowledge |
| [Qwen2.5-72B-Instruct](/index.php?title=Qwen2.5-72B-Instruct&action=edit&redlink=1) | 68.8 (MMLU-Pro) | N/A | N/A | Instruction-tuned |
| [Qwen2.5-Coder-32B](/index.php?title=Qwen2.5-Coder-32B&action=edit&redlink=1) | N/A | 88.2 | N/A | Coding SOTA |
| [Qwen2.5-Math-32B](/index.php?title=Qwen2.5-Math-32B&action=edit&redlink=1) | N/A | N/A | 72.0 | Math reasoning champion |
| [Qwen2.5-Max](/index.php?title=Qwen2.5-Max&action=edit&redlink=1) | Comparable to GPT-4o | Surpasses DeepSeek V3 | N/A | Overall competitive |

Additional benchmarks include [CMMLU](/index.php?title=CMMLU&action=edit&redlink=1) for Chinese language understanding, [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) for math word problems, and [BFCL](/index.php?title=BFCL&action=edit&redlink=1) for tool and function-calling capabilities.[&#91;33&#93;](#cite_note-qwen-leaderboard-33)

## Capabilities

Qwen models support a comprehensive array of tasks:

- **Multilingual Processing**: Core models handle 29 languages, with Qwen-MT extending to 92 languages covering 95% of the global population[&#91;24&#93;](#cite_note-qwen-mt-24)

- **Long-Context Understanding**: Up to 128K tokens, enabling analysis of extensive documents, codebases, or conversations

- **Coding and Mathematics**: Specialized models achieve state-of-the-art results with Qwen2.5-Coder scoring 88.2 on HumanEval and Qwen2.5-Math achieving 72.0 on MathVista

- **Multimodal Tasks**: Image generation/editing, video grounding, audio transcription, and multi-modal reasoning

- **Safety and Moderation**: Qwen3Guard provides real-time detection with categorized risk levels

- **Agentic and Reasoning**: Models like QwQ-32B support advanced chain-of-thought reasoning, tool use, and multi-step tasks

- **Structured Data Analysis**: Enhanced capabilities for processing tables, forms, and structured documents

- **Real-time Interaction**: Support for low-latency voice and video chat through Omni models

## Deployment and Accessibility

### Open Source Availability

Most Qwen models are released under the [Apache 2.0 license](/index.php?title=Apache_License&action=edit&redlink=1), making them available for both research and commercial use.[&#91;22&#93;](#cite_note-qwen3-blog-22) However, some larger models like the original Qwen-72B were released under a more restrictive "Tongyi Qianwen LICENSE AGREEMENT" that requires approval for commercial applications with over 100 million monthly active users.[&#91;34&#93;](#cite_note-72b-license-info-34)

Models are distributed through:

- [Hugging Face](/wiki/hugging_face)[&#91;2&#93;](#cite_note-huggingface-2)

- ModelScope[&#91;2&#93;](#cite_note-huggingface-2)

- [GitHub](/index.php?title=GitHub&action=edit&redlink=1) repositories[&#91;35&#93;](#cite_note-qwen3-github-35)

### Commercial Services

[Alibaba Cloud](/wiki/alibaba_cloud) provides commercial APIs through:[&#91;36&#93;](#cite_note-alibaba-pricing-36)

- Alibaba Cloud Model Studio

- DashScope API service

- Qwen Chat web interface (chat.qwen.ai)

### Deployment Frameworks

Qwen models support deployment through various frameworks:[&#91;35&#93;](#cite_note-qwen3-github-35)

- [vLLM](/index.php?title=VLLM&action=edit&redlink=1) for high-throughput inference

- [SGLang](/index.php?title=SGLang&action=edit&redlink=1) for large-scale deployment

- [TensorRT-LLM](/index.php?title=TensorRT-LLM&action=edit&redlink=1) for NVIDIA GPU optimization

- [Ollama](/wiki/ollama) for local deployment

- [llama.cpp](/index.php?title=Llama.cpp&action=edit&redlink=1) for CPU and GPU inference

- Integration with popular AI frameworks

## Applications

Qwen powers diverse applications including:

- **Enterprise AI Solutions**: Document analysis, customer service automation, and business intelligence

- **Software Development**: Code generation, debugging, and agentic coding workflows through Qwen3-Coder

- **Education**: Personalized tutoring, especially in mathematics and programming

- **Healthcare**: Medical document analysis and research assistance

- **E-commerce**: Product descriptions, customer support, and recommendation systems

- **Creative Content**: Story writing, article generation, and image creation

- **Research**: Academic paper analysis and scientific computing

Fine-tuned versions, such as "Liberated Qwen" by Abacus AI, remove content restrictions for specialized use cases.[&#91;1&#93;](#cite_note-wikipedia-1) The models support real-time interactions and are used in agentic frameworks for autonomous tasks.

## Languages Supported

Qwen models provide extensive multilingual support, with Qwen3 supporting 119 languages and dialects.[&#91;1&#93;](#cite_note-wikipedia-1) Core language support includes:

[Template:Div col](/index.php?title=Template:Div_col&action=edit&redlink=1)

- Chinese (Simplified and Traditional)

- English

- French

- Spanish

- Portuguese

- German

- Italian

- Russian

- Japanese

- Korean

- Vietnamese

- Thai

- Arabic

- Turkish

- Indonesian

- Dutch

- Polish

- Swedish

- Hindi

- Hebrew

- Finnish

- Danish

- Norwegian

- Czech

- Hungarian

- Romanian

- Greek

- Bulgarian

- Ukrainian

[Template:Div col end](/index.php?title=Template:Div_col_end&action=edit&redlink=1)

## Limitations and Considerations

While Qwen models demonstrate strong capabilities, they have known limitations:[&#91;37&#93;](#cite_note-qwq-datacamp-37)

- **Language mixing**: Models may unexpectedly switch between languages during generation

- **Circular reasoning**: Can get stuck in repetitive reasoning loops, particularly in complex multi-step problems

- **Safety concerns**: Require stronger safety features and guardrails for production deployment

- **Performance gaps**: While strong in math and coding, improvements needed in common sense reasoning

- **Context limitations**: Although supporting long contexts, performance may degrade with extremely long inputs

- **Computational requirements**: Larger models require significant GPU resources for deployment

## Impact and Adoption

Since its initial open-source release in 2023, the Qwen family has achieved significant adoption milestones:

- Over 40 million downloads across platforms[&#91;3&#93;](#cite_note-qvq-alibaba-3)

- More than 78,000 derivative models developed on [Hugging Face](/wiki/hugging_face)[&#91;3&#93;](#cite_note-qvq-alibaba-3)

- Powers all top 10 open-source LLMs on Hugging Face's Open LLM Leaderboard as of February 2025[&#91;4&#93;](#cite_note-scmp-4)

- Integrated into numerous commercial applications across Alibaba's ecosystem

- Adopted by enterprises globally for various AI applications

The development reflects [Alibaba](/index.php?title=Alibaba&action=edit&redlink=1)'s ambition to position Qwen as a foundational "operating system" for AI, akin to [Android](/index.php?title=Android&action=edit&redlink=1) in mobile computing.[&#91;38&#93;](#cite_note-reddit-roadmap-38)

## See also

- [Large language model](/wiki/large_language_model)

- [Multimodal learning](/index.php?title=Multimodal_learning&action=edit&redlink=1)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [Mixture of Experts](/wiki/mixture_of_experts)

- [Alibaba Cloud](/wiki/alibaba_cloud)

- [Alibaba Group](/index.php?title=Alibaba_Group&action=edit&redlink=1)

- [DeepSeek](/wiki/deepseek)

- [LLaMA](/wiki/llama)

- [GPT-4](/wiki/gpt-4)

- [Artificial intelligence in China](/index.php?title=Artificial_intelligence_in_China&action=edit&redlink=1)

- [Reinforcement learning](/wiki/reinforcement_learning)

## References

1. ↑ [1.0](#cite_ref-wikipedia_1-0) [1.1](#cite_ref-wikipedia_1-1) [1.2](#cite_ref-wikipedia_1-2) [1.3](#cite_ref-wikipedia_1-3) [1.4](#cite_ref-wikipedia_1-4) [https://en.wikipedia.org/wiki/Qwen](https://en.wikipedia.org/wiki/Qwen)

2. ↑ [2.0](#cite_ref-huggingface_2-0) [2.1](#cite_ref-huggingface_2-1) [2.2](#cite_ref-huggingface_2-2) [https://huggingface.co/Qwen](https://huggingface.co/Qwen)

3. ↑ [3.0](#cite_ref-qvq-alibaba_3-0) [3.1](#cite_ref-qvq-alibaba_3-1) [3.2](#cite_ref-qvq-alibaba_3-2) [3.3](#cite_ref-qvq-alibaba_3-3) [https://www.alibabacloud.com/blog/alibaba-cloud-unveils-new-research-model-for-enhanced-visual-reasoning_601914](https://www.alibabacloud.com/blog/alibaba-cloud-unveils-new-research-model-for-enhanced-visual-reasoning_601914)

4. ↑ [4.0](#cite_ref-scmp_4-0) [4.1](#cite_ref-scmp_4-1) [https://www.scmp.com/tech/big-tech/article/3298233/alibabas-qwen-powers-top-10-open-source-models-china-ai-know-how-goes-beyond-deepseek](https://www.scmp.com/tech/big-tech/article/3298233/alibabas-qwen-powers-top-10-open-source-models-china-ai-know-how-goes-beyond-deepseek)

5. ↑ [5.0](#cite_ref-cnbc_11_April_2023_5-0) [5.1](#cite_ref-cnbc_11_April_2023_5-1) [https://www.cnbc.com/2023/04/11/alibaba-launches-tongyi-qianwen-ai-model-similar-to-gpt.html](https://www.cnbc.com/2023/04/11/alibaba-launches-tongyi-qianwen-ai-model-similar-to-gpt.html)

6. [↑](#cite_ref-reuters-initial-launch_6-0) [https://www.reuters.com/technology/alibaba-cloud-launches-its-chatgpt-rival-tongyi-qianwen-2023-04-11/](https://www.reuters.com/technology/alibaba-cloud-launches-its-chatgpt-rival-tongyi-qianwen-2023-04-11/)

7. ↑ [7.0](#cite_ref-SCMP_13_September_2023_7-0) [7.1](#cite_ref-SCMP_13_September_2023_7-1) [https://www.scmp.com/tech/big-tech/article/3234661/alibabas-ai-model-tongyi-qianwen-approved-public-release-china](https://www.scmp.com/tech/big-tech/article/3234661/alibabas-ai-model-tongyi-qianwen-approved-public-release-china)

8. [↑](#cite_ref-reuters_August_3_2023_8-0) [https://www.reuters.com/technology/alibaba-launches-open-source-ai-model-qwen-2023-08-03/](https://www.reuters.com/technology/alibaba-launches-open-source-ai-model-qwen-2023-08-03/)

9. [↑](#cite_ref-huggingface-1.8b_9-0) [https://huggingface.co/Qwen/Qwen-1_8B](https://huggingface.co/Qwen/Qwen-1_8B)

10. [↑](#cite_ref-chinadaily_2023-12-01_10-0) [https://www.chinadaily.com.cn/a/202312/01/WS6569a8a7a31090682a5f5b5e.html](https://www.chinadaily.com.cn/a/202312/01/WS6569a8a7a31090682a5f5b5e.html)

11. [↑](#cite_ref-gh_release2023_11-0) [https://github.com/QwenLM/Qwen](https://github.com/QwenLM/Qwen)

12. [↑](#cite_ref-venturebeat-72b_12-0) [https://venturebeat.com/ai/alibaba-clouds-new-qwen-72b-llm-tops-open-source-rankings-and-rivals-gpt-4/](https://venturebeat.com/ai/alibaba-clouds-new-qwen-72b-llm-tops-open-source-rankings-and-rivals-gpt-4/)

13. ↑ [13.0](#cite_ref-qwen-1.5-blog_13-0) [13.1](#cite_ref-qwen-1.5-blog_13-1) [https://qwenlm.github.io/blog/qwen1.5/](https://qwenlm.github.io/blog/qwen1.5/)

14. ↑ [14.0](#cite_ref-qwen2-blog_14-0) [14.1](#cite_ref-qwen2-blog_14-1) [https://qwenlm.github.io/blog/qwen2/](https://qwenlm.github.io/blog/qwen2/)

15. ↑ [15.0](#cite_ref-qwen2_report_15-0) [15.1](#cite_ref-qwen2_report_15-1) [https://arxiv.org/abs/2407.10671](https://arxiv.org/abs/2407.10671)

16. ↑ [16.0](#cite_ref-qwen2.5-blog_16-0) [16.1](#cite_ref-qwen2.5-blog_16-1) [https://qwenlm.github.io/blog/qwen2.5/](https://qwenlm.github.io/blog/qwen2.5/)

17. ↑ [17.0](#cite_ref-qwen25_math_17-0) [17.1](#cite_ref-qwen25_math_17-1) [https://arxiv.org/html/2409.12122v1](https://arxiv.org/html/2409.12122v1)

18. ↑ [18.0](#cite_ref-qwen2_vl_18-0) [18.1](#cite_ref-qwen2_vl_18-1) [https://arxiv.org/abs/2409.12191](https://arxiv.org/abs/2409.12191)

19. [↑](#cite_ref-qwq-venturebeat_19-0) [https://venturebeat.com/ai/alibaba-releases-qwen-with-questions-an-open-reasoning-model-that-beats-o1-preview/](https://venturebeat.com/ai/alibaba-releases-qwen-with-questions-an-open-reasoning-model-that-beats-o1-preview/)

20. ↑ [20.0](#cite_ref-qwen2.5-max_20-0) [20.1](#cite_ref-qwen2.5-max_20-1) [https://qwenlm.github.io/blog/qwen2.5-max/](https://qwenlm.github.io/blog/qwen2.5-max/)

21. ↑ [21.0](#cite_ref-qwen2.5-vl_21-0) [21.1](#cite_ref-qwen2.5-vl_21-1) [https://qwenlm.github.io/blog/qwen2.5-vl/](https://qwenlm.github.io/blog/qwen2.5-vl/)

22. ↑ [22.0](#cite_ref-qwen3-blog_22-0) [22.1](#cite_ref-qwen3-blog_22-1) [22.2](#cite_ref-qwen3-blog_22-2) [22.3](#cite_ref-qwen3-blog_22-3) [22.4](#cite_ref-qwen3-blog_22-4) [22.5](#cite_ref-qwen3-blog_22-5) [22.6](#cite_ref-qwen3-blog_22-6) [https://qwenlm.github.io/blog/qwen3/](https://qwenlm.github.io/blog/qwen3/)

23. [↑](#cite_ref-reuters_q3coder_23-0) [https://www.reuters.com/world/china/alibaba-launches-open-source-ai-coding-model-touted-its-most-advanced-date-2025-07-23/](https://www.reuters.com/world/china/alibaba-launches-open-source-ai-coding-model-touted-its-most-advanced-date-2025-07-23/)

24. ↑ [24.0](#cite_ref-qwen-mt_24-0) [24.1](#cite_ref-qwen-mt_24-1) [24.2](#cite_ref-qwen-mt_24-2) [https://qwenlm.github.io/blog/qwen-mt/](https://qwenlm.github.io/blog/qwen-mt/)

25. ↑ [25.0](#cite_ref-qwen-image_25-0) [25.1](#cite_ref-qwen-image_25-1) [25.2](#cite_ref-qwen-image_25-2) [https://qwenlm.github.io/blog/qwen-image/](https://qwenlm.github.io/blog/qwen-image/)

26. ↑ [26.0](#cite_ref-qwen3guard_26-0) [26.1](#cite_ref-qwen3guard_26-1) [https://qwenlm.github.io/blog/qwen3guard/](https://qwenlm.github.io/blog/qwen3guard/)

27. [↑](#cite_ref-qwen2.5-paper_27-0) [https://arxiv.org/abs/2412.15115](https://arxiv.org/abs/2412.15115)

28. [↑](#cite_ref-qwen2-vl-paper_28-0) [https://arxiv.org/abs/2409.12191](https://arxiv.org/abs/2409.12191)

29. [↑](#cite_ref-qwen3-vl-github_29-0) [https://github.com/QwenLM/Qwen3-VL](https://github.com/QwenLM/Qwen3-VL)

30. [↑](#cite_ref-qwen-omni_30-0) [https://github.com/QwenLM/Qwen2.5-Omni](https://github.com/QwenLM/Qwen2.5-Omni)

31. [↑](#cite_ref-alibaba-cloud-doc_31-0) [https://www.alibabacloud.com/help/en/model-studio/what-is-qwen-llm](https://www.alibabacloud.com/help/en/model-studio/what-is-qwen-llm)

32. [↑](#cite_ref-qwq-alibaba_32-0) [https://www.alibabacloud.com/blog/alibaba-cloud-unveils-open-source-ai-reasoning-model-qwq-and-new-image-editing-tool_601813](https://www.alibabacloud.com/blog/alibaba-cloud-unveils-open-source-ai-reasoning-model-qwq-and-new-image-editing-tool_601813)

33. [↑](#cite_ref-qwen-leaderboard_33-0) [https://qwenlm.github.io/share/leaderboard/](https://qwenlm.github.io/share/leaderboard/)

34. [↑](#cite_ref-72b-license-info_34-0) [https://www.infoq.com/news/2023/12/alibaba-qwen-72b-llm/](https://www.infoq.com/news/2023/12/alibaba-qwen-72b-llm/)

35. ↑ [35.0](#cite_ref-qwen3-github_35-0) [35.1](#cite_ref-qwen3-github_35-1) [https://github.com/QwenLM/Qwen3](https://github.com/QwenLM/Qwen3)

36. [↑](#cite_ref-alibaba-pricing_36-0) [https://www.alibabacloud.com/help/en/model-studio/models](https://www.alibabacloud.com/help/en/model-studio/models)

37. [↑](#cite_ref-qwq-datacamp_37-0) [https://www.datacamp.com/blog/qwq-32b-preview](https://www.datacamp.com/blog/qwq-32b-preview)

38. [↑](#cite_ref-reddit-roadmap_38-0) [https://www.reddit.com/r/LocalLLaMA/comments/1nq182d/alibaba_just_unveiled_their_qwen_roadmap_the/](https://www.reddit.com/r/LocalLLaMA/comments/1nq182d/alibaba_just_unveiled_their_qwen_roadmap_the/)

## External links

- [Official Qwen website](https://qwenlm.github.io/)

- [Qwen Chat interface](https://chat.qwen.ai/)

- [GitHub organization](https://github.com/QwenLM)

- [Hugging Face models](https://huggingface.co/Qwen)

- [Alibaba Cloud Qwen page](https://www.alibabacloud.com/en/solutions/generative-ai/qwen)

- [ModelScope models](https://modelscope.cn/organization/qwen)