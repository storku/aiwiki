---
title: "Ollama"
slug: "ollama"
categories:
  - "Artificial_intelligence_applications"
  - "Machine_learning_software"
  - "Free_software_programmed_in_Go"
  - "Software_using_the_MIT_license"
  - "2021_software"
  - "Natural_language_processing_software"
  - "Cross-platform_software"
  - "Y_Combinator_companies"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

![Ollama logo1.png](/images/thumb/8/88/Ollama_logo1.png/350px-Ollama_logo1.png)

**Ollama** is an [open-source](/index.php?title=Open-source_software&action=edit&redlink=1) tool designed to simplify the deployment and management of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) locally on personal computers and servers.[&#91;1&#93;](#cite_note-kdnuggets-1) It provides a streamlined interface for downloading, running, and managing various open-source LLMs without requiring [cloud computing](/index.php?title=Cloud_computing&action=edit&redlink=1) services or extensive technical expertise, positioning itself as "[Docker](/index.php?title=Docker&action=edit&redlink=1) for LLMs."[&#91;2&#93;](#cite_note-medium-deploy-2)

## History

Ollama was founded in 2021 by [Jeffrey Morgan](/index.php?title=Jeffrey_Morgan&action=edit&redlink=1) and [Michael Chiang](/index.php?title=Michael_Chiang&action=edit&redlink=1) in [Palo Alto, California](/index.php?title=Palo_Alto,_California&action=edit&redlink=1).[&#91;3&#93;](#cite_note-ycombinator-3)[&#91;4&#93;](#cite_note-pitchbook-4) The company participated in [Y Combinator](/index.php?title=Y_Combinator&action=edit&redlink=1)'s Winter 2021 batch and raised $125,000 in [pre-seed funding](/index.php?title=Pre-seed_funding&action=edit&redlink=1) from investors including Y Combinator, Essence Venture Capital, Rogue Capital, and Sunflower Capital.[&#91;5&#93;](#cite_note-byteplus-owner-5)

Prior to founding Ollama, Morgan and Chiang, along with Sean Li, created [Kitematic](/index.php?title=Kitematic&action=edit&redlink=1), a tool designed to simplify [Docker](/index.php?title=Docker&action=edit&redlink=1) container management on [macOS](/index.php?title=MacOS&action=edit&redlink=1), which was eventually acquired by Docker, Inc.[&#91;6&#93;](#cite_note-byteplus-behind-6)[&#91;7&#93;](#cite_note-uwaterloo-7) Jeffrey Morgan and Sean Li graduated from the [University of Waterloo](/index.php?title=University_of_Waterloo&action=edit&redlink=1) (BASc 2013, Software Engineering), while Michael Chiang was an electrical engineering student there at the time of Kitematic's acquisition.[&#91;7&#93;](#cite_note-uwaterloo-7) This experience in making complex command-line tools accessible through simpler interfaces directly influenced Ollama's design philosophy.[&#91;6&#93;](#cite_note-byteplus-behind-6)

The platform quickly gained traction in the [open-source](/index.php?title=Open-source&action=edit&redlink=1) AI community for its ease of use and Docker-like simplicity in managing LLMs.[&#91;5&#93;](#cite_note-byteplus-owner-5) Initial releases focused on core functionality for running models like [LLaMA 2](/index.php?title=LLaMA_2&action=edit&redlink=1), with subsequent updates introducing features such as multimodal support and tool calling.[&#91;8&#93;](#cite_note-tool-support-8)

### Key Milestones

| Date | Milestone | Notes |
| --- | --- | --- |
| 2021 | Company Founded | Participated in Y Combinator W21 batch |
| March 23, 2021 | Pre-seed Funding | Raised $125,000 from Y Combinator and other investors[&#91;9&#93;](#cite_note-crunchbase-9) |
| 2023 | Public Launch | Basic model management and inference capabilities |
| February 8, 2024 | [OpenAI](/wiki/openai) Compatibility | Initial compatibility with the OpenAI Chat Completions API at `/v1/chat/completions`[&#91;10&#93;](#cite_note-openai-compat-10) |
| February 15, 2024 | Windows Preview | Native Windows build with built-in GPU acceleration and always-on API[&#91;11&#93;](#cite_note-win-preview-11) |
| March 14, 2024 | AMD GPU Preview | Preview acceleration on supported AMD Radeon/Instinct cards on Windows and Linux[&#91;12&#93;](#cite_note-amd-12) |
| July 30, 2025 | Desktop App | Official GUI app for macOS/Windows with file drag-and-drop and context-length controls[&#91;13&#93;](#cite_note-new-app-13) |
| September 19, 2025 | Cloud Models (Preview) | Option to run larger models on datacenter hardware while maintaining local workflows[&#91;14&#93;](#cite_note-cloud-models-14) |
| September 26, 2025 | Version 0.12.3 | Latest stable release with web search API and performance optimizations[&#91;15&#93;](#cite_note-releases-15) |

## Architecture and Technical Implementation

### Core Technology

Ollama is built primarily in [Go](/index.php?title=Go_(programming_language)&action=edit&redlink=1) and leverages [llama.cpp](/index.php?title=Llama.cpp&action=edit&redlink=1) as its underlying inference engine through [CGo](/index.php?title=CGo&action=edit&redlink=1) bindings.[&#91;16&#93;](#cite_note-picovoice-16)[&#91;17&#93;](#cite_note-medium-arch-17) The [llama.cpp](/index.php?title=Llama.cpp&action=edit&redlink=1) project, created by [Georgi Gerganov](/index.php?title=Georgi_Gerganov&action=edit&redlink=1) in March 2023, provides an efficient [C++](/index.php?title=C%2B%2B&action=edit&redlink=1) implementation of LLaMA and other language models, enabling them to run on consumer-grade hardware.[&#91;16&#93;](#cite_note-picovoice-16)

### Model Format

Ollama primarily uses the [GGUF](/index.php?title=GGUF&action=edit&redlink=1) (GPT-Generated Unified Format) file format for storing and loading models.[&#91;18&#93;](#cite_note-huggingface-gguf-18) GGUF replaced the earlier GGML format and provides better compatibility, metadata handling, and performance optimization for [quantized](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1) models.[&#91;19&#93;](#cite_note-markhneedham-19) This quantization is what allows massive models (for example 70 billion parameters) to run on machines with limited [VRAM](/index.php?title=VRAM&action=edit&redlink=1).

Ollama can also import models from specific [Safetensors](/index.php?title=Safetensors&action=edit&redlink=1) directories for supported architectures (for example Llama, Mistral, Gemma, Phi).[&#91;20&#93;](#cite_note-modelfile-docs-20)

## Features

### Core Capabilities

| Area | Details | Notes |
| --- | --- | --- |
| Server & Port | Local HTTP server at `127.0.0.1:11434` | Configurable via `OLLAMA_HOST` environment variable[&#91;21&#93;](#cite_note-faq-21) |
| Core Endpoints | `/api/generate`, `/api/chat`, `/api/embeddings`, model management | Streaming JSON supported[&#91;22&#93;](#cite_note-api-docs-22) |
| OpenAI Compatibility | `/v1/chat/completions` | Drop-in replacement for many OpenAI-based clients[&#91;10&#93;](#cite_note-openai-compat-10) |
| Local-First Design | All processing occurs locally | Ensures complete data privacy[&#91;2&#93;](#cite_note-medium-deploy-2) |
| Multimodal Support | Text, images, and other data types | Self-contained projection layers[&#91;23&#93;](#cite_note-multimodal-23) |
| Tool Calling | External function calls | Enhances reasoning and automation[&#91;8&#93;](#cite_note-tool-support-8) |
| Cloud Integration | Hybrid mode for larger models | Maintains local workflows (v0.12.0+)[&#91;14&#93;](#cite_note-cloud-models-14) |
| Performance | Flash attention, GPU/CPU overlap | Batch processing for efficiency[&#91;15&#93;](#cite_note-releases-15) |

### Modelfile

A key component of Ollama is the **Modelfile**, which serves as a blueprint for creating and sharing models.[&#91;20&#93;](#cite_note-modelfile-docs-20) Similar to a [Dockerfile](/index.php?title=Dockerfile&action=edit&redlink=1), the Modelfile defines model behavior and configuration.

| Instruction | Description | Example |
| --- | --- | --- |
| FROM | (Required) Specifies the base model or local GGUF path | `FROM llama3.2` or `FROM ./model.gguf` |
| PARAMETER | Sets model parameters | `PARAMETER temperature 0.7`
`PARAMETER num_ctx 4096` |
| SYSTEM | Defines system message/persona | `SYSTEM "You are a helpful assistant"` |
| TEMPLATE | Sets prompt template format | `TEMPLATE "[INST] [Template:.System](/index.php?title=Template:.System&action=edit&redlink=1) [Template:.Prompt](/index.php?title=Template:.Prompt&action=edit&redlink=1) [/INST]"` |
| ADAPTER | Applies [LoRA](/wiki/lora)/QLoRA adapters | `ADAPTER /path/to/adapter.bin` |
| LICENSE | Specifies model license | `LICENSE "MIT"` |
| MESSAGE | Provides conversation history for few-shot learning | `MESSAGE user "What is 1+1?"`
`MESSAGE assistant "2"` |

#### Example Modelfile

# Specify the base model
FROM llama3.2

# Set model parameters
PARAMETER temperature 0.8
PARAMETER num_ctx 4096
PARAMETER stop </s>

# Set the system message
SYSTEM """
You are an expert Python programming assistant.
Always provide clear, concise code examples.
Your responses must be formatted in Markdown.
"""

# Define the chat template
TEMPLATE """
<|start_header_id|>system<|end_header_id|>
{{ .System }}<|eot_id|>
<|start_header_id|>user<|end_header_id|>
{{ .Prompt }}<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
"""

This custom model can be created with: `ollama create my-assistant -f ./Modelfile`

### Command-Line Interface

| Command | Description | Example |
| --- | --- | --- |
| `ollama run` | Runs a model interactively | `ollama run llama3.2` |
| `ollama pull` | Downloads a model | `ollama pull gemma:2b` |
| `ollama create` | Creates custom model from Modelfile | `ollama create mymodel -f ./Modelfile` |
| `ollama list` | Lists installed models | `ollama list` |
| `ollama rm` | Removes a model | `ollama rm llama3.2` |
| `ollama cp` | Copies a model | `ollama cp llama3.2 mymodel` |
| `ollama push` | Uploads model to registry | `ollama push mymodel` |
| `ollama serve` | Starts the Ollama server | `ollama serve` |

### REST API

Ollama exposes a [REST API](/index.php?title=REST_API&action=edit&redlink=1) on port 11434 by default, providing programmatic access to model functionality:[&#91;22&#93;](#cite_note-api-docs-22)

| Endpoint | Method | Description | Example |
| --- | --- | --- | --- |
| `/api/generate` | POST | Generate text completion | `curl -X POST [http://localhost:11434/api/generate](http://localhost:11434/api/generate) -d '{"model":"llama3.2","prompt":"Hello"}'` |
| `/api/chat` | POST | Chat conversation interface | `curl -X POST [http://localhost:11434/api/chat](http://localhost:11434/api/chat) -d '{"model":"llama3.2","messages":[{"role":"user","content":"Hi"}]}'` |
| `/api/embeddings` | POST | Generate text embeddings | `curl -X POST [http://localhost:11434/api/embeddings](http://localhost:11434/api/embeddings) -d '{"model":"llama3.2","prompt":"Test"}'` |
| `/api/pull` | POST | Download a model | `curl -X POST [http://localhost:11434/api/pull](http://localhost:11434/api/pull) -d '{"name":"llama3.2"}'` |
| `/api/show` | POST | Show model information | `curl -X POST [http://localhost:11434/api/show](http://localhost:11434/api/show) -d '{"name":"llama3.2"}'` |
| `/api/list` | GET | List installed models | `curl [http://localhost:11434/api/list](http://localhost:11434/api/list)` |

## Supported Models

Ollama supports a wide range of open-source language models, continuously updated as new models are released:[&#91;24&#93;](#cite_note-library-24)

| Model Name | Parameters | Category | Description | Creator |
| --- | --- | --- | --- | --- |
| [Llama 3.2](/wiki/llama) | 1B, 3B, 11B, 90B | Source/Fine-Tuned | Meta's latest open-source LLM with improved reasoning and tool support | [Meta AI](/wiki/meta_ai) |
| [Gemma 2](/index.php?title=Google_Gemma&action=edit&redlink=1) | 2B, 9B, 27B | Source | Google's lightweight models for efficient on-device inference | [Google](/index.php?title=Google&action=edit&redlink=1) |
| [DeepSeek-R1](/wiki/deepseek) | 7B, 67B | Tools/Multimodal | Hybrid model supporting thinking modes for complex tasks | DeepSeek AI |
| [Mistral](/wiki/mistral_ai) / Mixtral | 7B, 8x7B, 8x22B | Source | High-efficiency models, often outperforming larger models | [Mistral AI](/wiki/mistral_ai) |
| [Qwen2.5](/wiki/qwen) | Up to 72B | Source | Alibaba's multilingual models supporting 128K tokens | [Alibaba](/index.php?title=Alibaba_Group&action=edit&redlink=1) |
| [Phi 4](/index.php?title=Microsoft_Phi&action=edit&redlink=1) | 3B, 14B | Fine-Tuned | Microsoft's small language models for efficient reasoning | [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) |
| [CodeLlama](/index.php?title=CodeLlama&action=edit&redlink=1) | 7B, 13B, 34B | Code | Specialized for code generation and programming tasks | [Meta AI](/wiki/meta_ai) |
| [LLaVA](/index.php?title=LLaVA_(model)&action=edit&redlink=1) | 7B, 13B | Multimodal | Visual language model for text and image understanding | Various |
| Snowflake Arctic Embed | 568M | Embedding | Multilingual embedding model for retrieval tasks | Snowflake |
| Firefunction | 7B | Tools | Function-calling model for automation and integration | Various |
| [Vicuna](/index.php?title=Vicuna&action=edit&redlink=1), [Alpaca](/index.php?title=Alpaca&action=edit&redlink=1) | Various | Fine-Tuned | LLaMA derivatives with specialized capabilities | Various |

## Installation

### System Requirements

| Platform | Minimum Version | Installation Method |
| --- | --- | --- |
| macOS | 11 Big Sur or later | Download `.dmg` from official website |
| Linux | Ubuntu 18.04 or equivalent | sh |
| Windows | Windows 10 22H2 or later | Download `.exe` installer |
| Docker | Any platform | `docker pull ollama/ollama` |

| Model Size | RAM Required | Storage | GPU VRAM (Optional) |
| --- | --- | --- | --- |
| 3B parameters | 8GB | 10GB+ | 4GB |
| 7B parameters | 16GB | 20GB+ | 8GB |
| 13B parameters | 32GB | 40GB+ | 16GB |
| 70B parameters | 64GB+ | 100GB+ | 48GB+ |

### GPU Support

- [NVIDIA](/wiki/nvidia) GPUs via [CUDA](/wiki/cuda) (compute capability 5.0+)

- [AMD](/index.php?title=AMD&action=edit&redlink=1) GPUs via [ROCm](/index.php?title=ROCm&action=edit&redlink=1) (preview support)

- [Apple Silicon](/index.php?title=Apple_Silicon&action=edit&redlink=1) via [Metal](/index.php?title=Metal_(API)&action=edit&redlink=1)

- [Intel Arc](/index.php?title=Intel_Arc&action=edit&redlink=1) GPUs (experimental)

## Integration and Ecosystem

### Programming Languages

Ollama provides official client libraries:[&#91;25&#93;](#cite_note-pypi-25)

- [Python](/index.php?title=Python_(programming_language)&action=edit&redlink=1) - `pip install ollama`

- [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) / [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1) - `npm install ollama`

- [Go](/index.php?title=Go_(programming_language)&action=edit&redlink=1) - Native API support

### Third-Party Integrations

#### Development Frameworks

- [LangChain](/wiki/langchain) - LLM application framework

- [LlamaIndex](/index.php?title=LlamaIndex&action=edit&redlink=1) - Data framework for LLMs

- [AutoGen](/index.php?title=AutoGen&action=edit&redlink=1) - Multi-agent systems

- [Semantic Kernel](/index.php?title=Semantic_Kernel&action=edit&redlink=1) - Microsoft's AI orchestration

- [Spring AI](/index.php?title=Spring_AI&action=edit&redlink=1) - Java/Spring integration[&#91;26&#93;](#cite_note-spring-26)

#### User Interfaces

- [Open WebUI](/index.php?title=Open_WebUI&action=edit&redlink=1) - Web-based chat interface

- [Continue.dev](/index.php?title=Continue.dev&action=edit&redlink=1) - VS Code extension

- [AnythingLLM](/index.php?title=AnythingLLM&action=edit&redlink=1) - Multi-model chat application

- Various mobile applications for [iOS](/index.php?title=IOS&action=edit&redlink=1) and [Android](/index.php?title=Android&action=edit&redlink=1)

#### Database and Infrastructure

- [PostgreSQL](/index.php?title=PostgreSQL&action=edit&redlink=1) with pgai extension[&#91;27&#93;](#cite_note-pgai-27)

- [IoT](/index.php?title=IoT&action=edit&redlink=1) device integrations[&#91;28&#93;](#cite_note-iot-28)

## Privacy and Security

### Privacy Features

By default, Ollama operates entirely locally:[&#91;21&#93;](#cite_note-faq-21)

- Server binds to `127.0.0.1:11434` (loopback interface only)

- No prompts or responses sent to external servers

- Complete data privacy for sensitive information

- Offline operation after model download

To expose on a network, users must explicitly set `OLLAMA_HOST` environment variable (for example `OLLAMA_HOST=0.0.0.0:11434`).

### Security Vulnerabilities

Ollama has addressed several security vulnerabilities:[&#91;29&#93;](#cite_note-oligo-29)

| CVE | Description | Affected Versions | Status |
| --- | --- | --- | --- |
| CVE-2024-37032 | Remote code execution via API misconfiguration (Probllama) | <0.1.34 | Fixed[&#91;30&#93;](#cite_note-probllama-30) |
| CVE-2025-0312 | Malicious GGUF model exploitation | ≤0.3.14 | Fixed[&#91;31&#93;](#cite_note-nvd-31) |
| CNVD-2025-04094 | Unauthorized access due to improper configuration | Various | Configuration issue[&#91;32&#93;](#cite_note-nsfocus-32) |

Users are advised to keep Ollama updated and configure securely, especially when exposing APIs.

## Comparisons with Similar Tools

### Ollama vs. LM Studio

| Feature | Ollama | LM Studio |
| --- | --- | --- |
| Interface | CLI-focused | GUI-focused |
| License | MIT (open source) | Proprietary (free to use) |
| Model Sources | Ollama registry + GGUF | Hugging Face + GGUF |
| Concurrent Handling | Excellent (batching) | Limited |
| macOS Performance | Good | Better (MLX support) |
| Automation | Excellent | Limited |
| API | Built-in REST API | Available |

Ollama is preferred for its flexibility in integrations and developer-centric approach, while LM Studio offers a more user-friendly GUI.[&#91;33&#93;](#cite_note-comparison-33)

## Community and Reception

Ollama has a vibrant community on [GitHub](/index.php?title=GitHub&action=edit&redlink=1), with over 90,000 stars and active contributions focusing on performance and compatibility.[&#91;34&#93;](#cite_note-github-main-34) It has been praised for advancing local AI technologies, cost savings, and accessibility.[&#91;35&#93;](#cite_note-local-ai-35)

### Licensing Controversy

Some criticism has arisen regarding licensing compliance issues with dependencies like [llama.cpp](/index.php?title=Llama.cpp&action=edit&redlink=1), with community members raising concerns about proper attribution.[&#91;36&#93;](#cite_note-reddit-license-36) The Ollama team has been working to address these concerns.

## Significance and Impact

Ollama has been a key driver in the [democratization](/index.php?title=Democratization&action=edit&redlink=1) of large language models by:[&#91;37&#93;](#cite_note-impact-37)

- Enabling developers to build and test AI-powered applications locally without cost

- Allowing researchers to experiment with various open-source models easily

- Empowering hobbyists to run state-of-the-art AI on personal computers

- Enhancing privacy for users who can leverage powerful AI without data leaving their machine

- Fostering a community-driven approach to AI development

The tool is widely used in education, research, and enterprise for privacy-sensitive applications and has become a foundational tool in the [open-source AI](/index.php?title=Open-source_AI&action=edit&redlink=1) movement.

## See Also

- [Large language model](/wiki/large_language_model)

- [llama.cpp](/index.php?title=Llama.cpp&action=edit&redlink=1)

- [GGUF](/index.php?title=GGUF&action=edit&redlink=1)

- [LangChain](/wiki/langchain)

- [LlamaIndex](/index.php?title=LlamaIndex&action=edit&redlink=1)

- [Hugging Face](/wiki/hugging_face)

- [Docker](/index.php?title=Docker&action=edit&redlink=1)

- [Local AI](/index.php?title=Local_AI&action=edit&redlink=1)

- [Mixture of Experts](/wiki/mixture_of_experts)

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)

- [Embeddings](/index.php?title=Embeddings&action=edit&redlink=1)

## References

1. [↑](#cite_ref-kdnuggets_1-0) Bala Priya C&#32;(May 7, 2024).&#32;["Ollama Tutorial: Running LLMs Locally Made Super Simple"](https://www.kdnuggets.com/ollama-tutorial-running-llms-locally-made-super-simple).&#32;KDnuggets.&#32;[https://www.kdnuggets.com/ollama-tutorial-running-llms-locally-made-super-simple](https://www.kdnuggets.com/ollama-tutorial-running-llms-locally-made-super-simple).

2. ↑ [2.0](#cite_ref-medium-deploy_2-0) [2.1](#cite_ref-medium-deploy_2-1) Vijaykumar&#32;(May 5, 2025).&#32;["Deploy LLMs Locally with Ollama: Your Complete Guide to Local AI Development"](https://medium.com/@bluudit/deploy-llms-locally-with-ollama-your-complete-guide-to-local-ai-development).&#32;Medium.&#32;[https://medium.com/@bluudit/deploy-llms-locally-with-ollama-your-complete-guide-to-local-ai-development](https://medium.com/@bluudit/deploy-llms-locally-with-ollama-your-complete-guide-to-local-ai-development).

3. [↑](#cite_ref-ycombinator_3-0) ["Ollama - Y Combinator"](https://www.ycombinator.com/companies/ollama).&#32;Y Combinator.&#32;[https://www.ycombinator.com/companies/ollama](https://www.ycombinator.com/companies/ollama).

4. [↑](#cite_ref-pitchbook_4-0) ["Ollama Company Profile"](https://pitchbook.com/profiles/company/537457-42).&#32;PitchBook.&#32;[https://pitchbook.com/profiles/company/537457-42](https://pitchbook.com/profiles/company/537457-42).

5. ↑ [5.0](#cite_ref-byteplus-owner_5-0) [5.1](#cite_ref-byteplus-owner_5-1) ["Who Is the Owner of Ollama? Discover the Leadership"](https://www.byteplus.com/en/topic/375310).&#32;BytePlus.&#32;[https://www.byteplus.com/en/topic/375310](https://www.byteplus.com/en/topic/375310).

6. ↑ [6.0](#cite_ref-byteplus-behind_6-0) [6.1](#cite_ref-byteplus-behind_6-1) ["Who Is Behind Ollama? Discover the Founders & Team"](https://www.byteplus.com/en/topic/418063).&#32;BytePlus.&#32;[https://www.byteplus.com/en/topic/418063](https://www.byteplus.com/en/topic/418063).

7. ↑ [7.0](#cite_ref-uwaterloo_7-0) [7.1](#cite_ref-uwaterloo_7-1) ["Software startup with Waterloo Engineering roots acquired by Docker Inc."](https://uwaterloo.ca/engineering/news/software-startup-waterloo-engineering-roots-acquired-docker).&#32;University of Waterloo.&#32;May 21, 2024.&#32;[https://uwaterloo.ca/engineering/news/software-startup-waterloo-engineering-roots-acquired-docker](https://uwaterloo.ca/engineering/news/software-startup-waterloo-engineering-roots-acquired-docker).

8. ↑ [8.0](#cite_ref-tool-support_8-0) [8.1](#cite_ref-tool-support_8-1) ["Tool support"](https://ollama.com/blog/tool-support).&#32;Ollama Blog.&#32;July 25, 2024.&#32;[https://ollama.com/blog/tool-support](https://ollama.com/blog/tool-support).

9. [↑](#cite_ref-crunchbase_9-0) ["Ollama Pre Seed Round"](https://www.crunchbase.com/funding_round/ollama-pre-seed--c51b44d8).&#32;Crunchbase.&#32;March 23, 2021.&#32;[https://www.crunchbase.com/funding_round/ollama-pre-seed--c51b44d8](https://www.crunchbase.com/funding_round/ollama-pre-seed--c51b44d8).

10. ↑ [10.0](#cite_ref-openai-compat_10-0) [10.1](#cite_ref-openai-compat_10-1) ["OpenAI compatibility"](https://ollama.com/blog/openai-compatibility).&#32;Ollama Blog.&#32;[https://ollama.com/blog/openai-compatibility](https://ollama.com/blog/openai-compatibility).

11. [↑](#cite_ref-win-preview_11-0) ["Windows preview"](https://ollama.com/blog/windows-preview).&#32;Ollama Blog.&#32;February 15, 2024.&#32;[https://ollama.com/blog/windows-preview](https://ollama.com/blog/windows-preview).

12. [↑](#cite_ref-amd_12-0) ["Ollama now supports AMD graphics cards"](https://ollama.com/blog/amd-support).&#32;Ollama Blog.&#32;March 14, 2024.&#32;[https://ollama.com/blog/amd-support](https://ollama.com/blog/amd-support).

13. [↑](#cite_ref-new-app_13-0) ["Ollama's new app"](https://ollama.com/blog/new-app).&#32;Ollama Blog.&#32;July 30, 2025.&#32;[https://ollama.com/blog/new-app](https://ollama.com/blog/new-app).

14. ↑ [14.0](#cite_ref-cloud-models_14-0) [14.1](#cite_ref-cloud-models_14-1) ["Cloud models"](https://ollama.com/blog/cloud-models).&#32;Ollama Blog.&#32;September 19, 2025.&#32;[https://ollama.com/blog/cloud-models](https://ollama.com/blog/cloud-models).

15. ↑ [15.0](#cite_ref-releases_15-0) [15.1](#cite_ref-releases_15-1) ["Releases - ollama/ollama"](https://github.com/ollama/ollama/releases).&#32;GitHub.&#32;[https://github.com/ollama/ollama/releases](https://github.com/ollama/ollama/releases).

16. ↑ [16.0](#cite_ref-picovoice_16-0) [16.1](#cite_ref-picovoice_16-1) ["llama.cpp vs. ollama: Running LLMs Locally for Enterprises"](https://picovoice.ai/blog/local-llms-llamacpp-ollama/).&#32;Picovoice.&#32;[https://picovoice.ai/blog/local-llms-llamacpp-ollama/](https://picovoice.ai/blog/local-llms-llamacpp-ollama/).

17. [↑](#cite_ref-medium-arch_17-0) ["Ollama: How It Works Internally"](https://medium.com/@laiso/ollama-under-the-hood-f8ed0f14d90c).&#32;Medium.&#32;July 5, 2024.&#32;[https://medium.com/@laiso/ollama-under-the-hood-f8ed0f14d90c](https://medium.com/@laiso/ollama-under-the-hood-f8ed0f14d90c).

18. [↑](#cite_ref-huggingface-gguf_18-0) ["Use Ollama with any GGUF Model on Hugging Face Hub"](https://huggingface.co/docs/hub/en/ollama).&#32;Hugging Face.&#32;[https://huggingface.co/docs/hub/en/ollama](https://huggingface.co/docs/hub/en/ollama).

19. [↑](#cite_ref-markhneedham_19-0) Mark Needham&#32;(October 18, 2023).&#32;["Ollama: Running GGUF Models from Hugging Face"](https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/).&#32;Mark Needham.&#32;[https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/](https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/).

20. ↑ [20.0](#cite_ref-modelfile-docs_20-0) [20.1](#cite_ref-modelfile-docs_20-1) ["Modelfile Documentation"](https://github.com/ollama/ollama/blob/main/docs/modelfile.md).&#32;GitHub - ollama/ollama.&#32;[https://github.com/ollama/ollama/blob/main/docs/modelfile.md](https://github.com/ollama/ollama/blob/main/docs/modelfile.md).

21. ↑ [21.0](#cite_ref-faq_21-0) [21.1](#cite_ref-faq_21-1) ["Ollama FAQ"](https://ollama.com/docs/faq).&#32;Ollama Docs.&#32;[https://ollama.com/docs/faq](https://ollama.com/docs/faq).

22. ↑ [22.0](#cite_ref-api-docs_22-0) [22.1](#cite_ref-api-docs_22-1) ["API Documentation"](https://github.com/ollama/ollama/blob/main/docs/api.md).&#32;GitHub - ollama/ollama.&#32;[https://github.com/ollama/ollama/blob/main/docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md).

23. [↑](#cite_ref-multimodal_23-0) ["Ollama's new engine for multimodal models"](https://ollama.com/blog/multimodal-models).&#32;Ollama.&#32;[https://ollama.com/blog/multimodal-models](https://ollama.com/blog/multimodal-models).

24. [↑](#cite_ref-library_24-0) ["Ollama Model Library"](https://ollama.com/library).&#32;Ollama.&#32;[https://ollama.com/library](https://ollama.com/library).

25. [↑](#cite_ref-pypi_25-0) ["ollama - PyPI"](https://pypi.org/project/ollama/).&#32;Python Package Index.&#32;[https://pypi.org/project/ollama/](https://pypi.org/project/ollama/).

26. [↑](#cite_ref-spring_26-0) ["Spring AI with Ollama Tool Support"](https://spring.io/blog/2024/07/26/spring-ai-with-ollama-tool-support).&#32;Spring.&#32;July 26, 2024.&#32;[https://spring.io/blog/2024/07/26/spring-ai-with-ollama-tool-support](https://spring.io/blog/2024/07/26/spring-ai-with-ollama-tool-support).

27. [↑](#cite_ref-pgai_27-0) ["Use Open-Source LLMs in PostgreSQL With Ollama and Pgai"](https://www.tigerdata.com/blog/use-open-source-llms-in-postgresql-with-ollama-and-pgai).&#32;TigerData.&#32;June 28, 2024.&#32;[https://www.tigerdata.com/blog/use-open-source-llms-in-postgresql-with-ollama-and-pgai](https://www.tigerdata.com/blog/use-open-source-llms-in-postgresql-with-ollama-and-pgai).

28. [↑](#cite_ref-iot_28-0) ["Unlock Smart Home Potential with Ollama & IoT Devices"](https://www.arsturn.com/blog/integrating-ollama-with-iot-devices).&#32;Arsturn.&#32;August 26, 2024.&#32;[https://www.arsturn.com/blog/integrating-ollama-with-iot-devices](https://www.arsturn.com/blog/integrating-ollama-with-iot-devices).

29. [↑](#cite_ref-oligo_29-0) ["More Models, More ProbLLMs: New Vulnerabilities in Ollama"](https://www.oligo.security/blog/more-models-more-probllms).&#32;Oligo Security.&#32;October 30, 2024.&#32;[https://www.oligo.security/blog/more-models-more-probllms](https://www.oligo.security/blog/more-models-more-probllms).

30. [↑](#cite_ref-probllama_30-0) ["Probllama: Ollama Remote Code Execution Vulnerability"](https://www.wiz.io/blog/probllama-ollama-vulnerability-cve-2024-37032).&#32;Wiz.&#32;June 24, 2024.&#32;[https://www.wiz.io/blog/probllama-ollama-vulnerability-cve-2024-37032](https://www.wiz.io/blog/probllama-ollama-vulnerability-cve-2024-37032).

31. [↑](#cite_ref-nvd_31-0) ["CVE-2025-0312 Detail"](https://nvd.nist.gov/vuln/detail/CVE-2025-0312).&#32;NVD.&#32;March 20, 2025.&#32;[https://nvd.nist.gov/vuln/detail/CVE-2025-0312](https://nvd.nist.gov/vuln/detail/CVE-2025-0312).

32. [↑](#cite_ref-nsfocus_32-0) ["Ollama Unauthorized Access Vulnerability Due to Improper Configuration"](https://nsfocusglobal.com/ollama-unauthorized-access-vulnerability-due-to-misconfiguration-cnvd-2025-04094/).&#32;NSFOCUS.&#32;March 13, 2025.&#32;[https://nsfocusglobal.com/ollama-unauthorized-access-vulnerability-due-to-misconfiguration-cnvd-2025-04094/](https://nsfocusglobal.com/ollama-unauthorized-access-vulnerability-due-to-misconfiguration-cnvd-2025-04094/).

33. [↑](#cite_ref-comparison_33-0) ["Choosing Your Local LLM: Ollama or LM Studio?"](https://www.2am.tech/blog/ollama-vs-lm-studio).&#32;2am.tech.&#32;September 4, 2025.&#32;[https://www.2am.tech/blog/ollama-vs-lm-studio](https://www.2am.tech/blog/ollama-vs-lm-studio).

34. [↑](#cite_ref-github-main_34-0) ["ollama/ollama - GitHub"](https://github.com/ollama/ollama).&#32;GitHub.&#32;[https://github.com/ollama/ollama](https://github.com/ollama/ollama).

35. [↑](#cite_ref-local-ai_35-0) ["Ollama's Contribution to Local AI Technologies"](https://www.arsturn.com/blog/ollamas-contribution-to-the-emergence-of-local-ai-technologies).&#32;Arsturn.&#32;April 24, 2025.&#32;[https://www.arsturn.com/blog/ollamas-contribution-to-the-emergence-of-local-ai-technologies](https://www.arsturn.com/blog/ollamas-contribution-to-the-emergence-of-local-ai-technologies).

36. [↑](#cite_ref-reddit-license_36-0) ["Ollama violating llama.cpp license for over a year"](https://www.reddit.com/r/LocalLLaMA/comments/1ko1iob/ollama_violating_llamacpp_license_for_over_a_year/).&#32;Reddit.&#32;May 16, 2025.&#32;[https://www.reddit.com/r/LocalLLaMA/comments/1ko1iob/ollama_violating_llamacpp_license_for_over_a_year/](https://www.reddit.com/r/LocalLLaMA/comments/1ko1iob/ollama_violating_llamacpp_license_for_over_a_year/).

37. [↑](#cite_ref-impact_37-0) ["Unlocking AI's Potential: Ollama's Local Revolution in AI Development"](https://fahrenheit.hashnode.dev/unlocking-ais-potential-ollamas-local-revolution-in-ai-development).&#32;Hashnode.&#32;January 29, 2025.&#32;[https://fahrenheit.hashnode.dev/unlocking-ais-potential-ollamas-local-revolution-in-ai-development](https://fahrenheit.hashnode.dev/unlocking-ais-potential-ollamas-local-revolution-in-ai-development).

## External Links

- [Official Website](https://ollama.com)

- [Ollama on GitHub](https://github.com/ollama/ollama)

- [Ollama Docker Hub](https://hub.docker.com/r/ollama/ollama)

- [Ollama integration with Hugging Face](https://huggingface.co/docs/hub/en/ollama)

- [Official Documentation](https://docs.ollama.com)