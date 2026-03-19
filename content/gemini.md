---
title: "Gemini (AI model)"
slug: "gemini"
categories:
  - "Large_language_models"
  - "Google"
  - "Multimodal_models"
  - "Artificial_intelligence"
---

**Gemini** is a family of [large language models](/wiki/large_language_model) and multimodal AI models developed by [Google DeepMind](/wiki/google_deepmind). First announced at [Google I/O](/wiki/google_io) on May 10, 2023, and officially launched on December 6, 2023, Gemini represents Google's most ambitious effort in [artificial intelligence](/wiki/artificial_intelligence), designed to be natively multimodal and capable of processing text, images, audio, video, and code. The model family spans multiple size tiers, from the lightweight on-device Nano models to the flagship Ultra and Pro variants, and has undergone several major generational updates since its initial release.

Gemini also serves as the brand name for Google's consumer-facing AI chatbot (formerly known as [Google Bard](/wiki/google_bard)), which was rebranded to Gemini in February 2024. The Gemini models power a wide range of Google products and services, including [Google Search](/wiki/google_search), [Google Workspace](/wiki/google_workspace), [Android](/wiki/android), and the [Google Cloud](/wiki/google_cloud) platform through [Vertex AI](/wiki/vertex_ai).

## History

### Predecessors: LaMDA, PaLM, and Bard

Before Gemini, Google's AI efforts were centered around several earlier model families. [LaMDA](/wiki/lamda) (Language Model for Dialogue Applications) powered Google's initial conversational AI experiments, while [PaLM](/wiki/palm) (Pathways Language Model) and its successor PaLM 2 served as Google's primary large language models in 2022 and 2023.

On February 6, 2023, Google announced **Bard**, a conversational AI chatbot initially powered by LaMDA, positioning it as a response to [OpenAI](/wiki/openai)'s [ChatGPT](/wiki/chatgpt). However, the Bard launch suffered an immediate setback. During a promotional demonstration shared on Twitter, Bard incorrectly stated that the James Webb Space Telescope had taken the first pictures of a planet outside our solar system. In reality, the first image of an exoplanet was captured by the European Southern Observatory's Very Large Telescope in 2004. This factual error was widely reported and caused Alphabet's stock to drop approximately 7.7%, wiping roughly $100 billion from the company's market capitalization.

Google opened early access to Bard on March 21, 2023, initially to users in the United States and the United Kingdom. On March 31, 2023, Google CEO Sundar Pichai announced plans to upgrade Bard by switching its underlying model from LaMDA to PaLM, a more powerful language model. This transition was completed in subsequent updates.

### Gemini 1.0 Launch (December 2023)

On May 10, 2023, during the Google I/O keynote, Pichai and Google DeepMind CEO Demis Hassabis announced that a new model called Gemini was under development, positioning it as a next-generation successor to PaLM 2.

On December 6, 2023, Google officially launched **Gemini 1.0** at a virtual press conference, unveiling it in three model sizes:

- **Gemini Ultra**: The most capable variant, designed for highly complex tasks
- **Gemini Pro**: A mid-range model designed for a wide range of tasks
- **Gemini Nano**: A compact model optimized for on-device deployment

Google claimed that Gemini Ultra outperformed state-of-the-art results on 30 of 32 widely used academic benchmarks in large language model research. Most notably, Gemini Ultra achieved a score of 90.0% on the MMLU (Massive Multitask Language Understanding) benchmark, making it the first model to surpass human expert performance on this test, which evaluates knowledge across 57 subjects including math, physics, history, law, medicine, and ethics. OpenAI's GPT-4 scored 86.4% on the same benchmark at the time.

At launch, Gemini Pro was integrated into Bard as its underlying model, replacing PaLM 2. Gemini Nano was deployed on the Pixel 8 Pro, making it the first smartphone engineered to run Gemini Nano on-device, powering features such as Summarize in the Recorder app and Smart Reply in Gboard.

Gemini Ultra was not immediately made available to the general public. It was initially accessible only to select customers, developers, partners, and safety experts for testing and evaluation.

### Rebranding Bard to Gemini (February 2024)

On February 8, 2024, Google unified its consumer AI products under the Gemini brand. The Bard chatbot was renamed **Gemini**, and the "Duet AI" branding used for Google Cloud and Workspace AI features was also retired in favor of the Gemini name. Alongside the rebrand, Google launched:

- **Gemini Advanced**: A premium tier powered by Gemini Ultra 1.0, offering more advanced reasoning, planning, and content generation capabilities
- **Gemini mobile app**: A dedicated Android app, with Gemini also integrated into the Google app on iOS
- **Google One AI Premium Plan**: A subscription at $19.99/month that included Gemini Advanced access along with 2 TB of Google One cloud storage

The rebranding was motivated by a desire to consolidate Google's various AI products under a single, recognizable brand. It also represented a strategic response to the rapid rise of ChatGPT and an attempt to reset brand perception following the earlier Bard hallucination incident.

### Gemini 1.5 (February-May 2024)

On February 15, 2024, Google introduced **Gemini 1.5 Pro** in a limited developer preview. This release marked a significant architectural advancement, as Gemini 1.5 adopted a new Mixture-of-Experts (MoE) architecture that improved both efficiency and capability. The headline feature was a dramatically expanded context window of up to 1 million tokens, allowing the model to process approximately one hour of video, 11 hours of audio, over 30,000 lines of code, or more than 700,000 words in a single prompt.

Google later expanded the context window for Gemini 1.5 Pro to **2 million tokens**, making it the largest context window available in any commercial large language model at the time. With 2 million tokens, users could process nearly a full day of audio, one to two hours of video, over 60,000 lines of code, or more than 1.5 million words.

At Google I/O in May 2024, Google announced **Gemini 1.5 Flash**, a faster and more cost-efficient variant designed specifically for high-volume, high-frequency developer use cases. Flash retained a 1-million-token context window while offering significantly lower latency and cost compared to 1.5 Pro.

### Gemini 2.0 (December 2024 - February 2025)

On December 11, 2024, Google announced the Gemini 2.0 family, positioning it as the model generation designed for the "agentic era." The first release was an experimental version of **Gemini 2.0 Flash**, featuring:

- A Multimodal Live API for real-time audio and video interactions
- Native image generation and controllable text-to-speech
- Integrated Google Search as a tool
- A 1-million-token context window

On December 19, 2024, Google released **Gemini 2.0 Flash Thinking Experimental**, a reasoning-optimized model that displays its thought process before producing an answer. Similar in concept to OpenAI's o1 model, Flash Thinking "thinks out loud," pausing to consider related prompts and reasoning steps before summarizing what it considers to be the most accurate answer. The model debuted at the top of the Chatbot Arena LLM Leaderboard upon release.

On January 30, 2025, Gemini 2.0 Flash became generally available as the new default model in the Gemini app, featuring higher rate limits and improved performance.

On February 5, 2025, Google released additional models in the 2.0 family:

- **Gemini 2.0 Pro (Experimental)**: Google's strongest model at the time for coding performance and complex prompts, with a 2-million-token context window
- **Gemini 2.0 Flash-Lite**: The most cost-efficient model in the lineup, outperforming Gemini 1.5 Flash on benchmarks while maintaining the same price and speed

### Gemini 2.5 (March 2025 onward)

On March 25, 2025, Google unveiled **Gemini 2.5 Pro**, describing it as their most intelligent model to date. Gemini 2.5 Pro is a "thinking model" that reasons through its thoughts before responding, producing enhanced performance and improved accuracy. Key achievements at launch included:

- Debuting at #1 on the LMArena leaderboard with a score of 1,443, significantly ahead of competitors
- Achieving 86.7% on AIME 2025 (math competition benchmark)
- Scoring 84.0% on GPQA Diamond (graduate-level science)
- Reaching 18.8% on Humanity's Last Exam without tool use, compared to GPT-4.5's 6.4%
- Scoring 63.8% on SWE-Bench Verified (software engineering)

**Gemini 2.5 Flash** was unveiled at Google Cloud Next on April 9, 2025, and released on May 20, 2025. It was the first Flash model to include thinking capabilities, with an adjustable reasoning control that allows users to prioritize either faster responses or deeper analysis. Like 2.5 Pro, it features a 1-million-token context window.

## Architecture and Technical Details

### Transformer Foundation

All Gemini models are built on the [Transformer](/wiki/transformer) architecture, specifically using a decoder-only design. The models receive interleaved multimodal tokens (text, visual, audio, video) and employ Multi-Query Attention for improved latency and scalable context windows.

### Native Multimodality

Unlike some competing models that process different modalities through separate systems, Gemini was designed from the ground up to be natively multimodal. The models are trained to simultaneously understand and reason across text, images, audio, video, and code. Distinct encoders are used for each modality (for example, a Vision Transformer for image and video input), which project data into a shared embedding space that is fused via cross-modal attention mechanisms.

### Mixture of Experts (MoE)

Starting with Gemini 1.5, the model family adopted a **sparse Mixture-of-Experts** architecture. While a traditional Transformer functions as one large neural network, MoE models are divided into smaller "expert" sub-networks. The model dynamically routes each input token to a subset of the most relevant expert pathways (typically activating 2 out of many available experts per token). This approach allows the model to scale total capacity and knowledge without proportionally increasing the compute cost per inference, since only a fraction of the model's parameters are active for any given input.

Google has been a pioneer of MoE techniques in deep learning, with prior research contributions including Sparsely-Gated MoE, GShard-Transformer, Switch-Transformer, and M4.

The Gemini 2.5 technical report confirms that 2.5 models are sparse mixture-of-experts transformers with native multimodal support for text, vision, and audio inputs.

### Training Infrastructure

Gemini 1.0 models were trained on multiple 4,096-chip pods of Google's TPUv4 accelerators, distributed across multiple data centers. At the scale required for Gemini Ultra training, Google combined SuperPods across multiple data centers using Google's intra-cluster and inter-cluster network infrastructure. Within super-pods, model parallelism was employed, while data parallelism was used across them.

Google co-founder Sergey Brin came out of semi-retirement to assist in the development of the original Gemini model and was credited as a "core contributor."

### Context Windows

| Model | Input Context Window | Maximum Output Tokens |
| --- | --- | --- |
| Gemini 1.0 Pro | 32,768 tokens | 8,192 tokens |
| Gemini 1.0 Ultra | 32,768 tokens | 8,192 tokens |
| Gemini 1.5 Pro | 2,000,000 tokens | 8,192 tokens |
| Gemini 1.5 Flash | 1,000,000 tokens | 8,192 tokens |
| Gemini 2.0 Flash | 1,048,576 tokens | 8,192 tokens |
| Gemini 2.0 Pro | 2,097,152 tokens | 8,192 tokens |
| Gemini 2.5 Pro | 1,048,576 tokens | 65,536 tokens |
| Gemini 2.5 Flash | 1,048,576 tokens | 65,536 tokens |

The context window represents the total number of tokens that can be processed in a single request, encompassing all input tokens (prompts, chat history, uploaded documents, images) and output tokens combined.

## Model Versions

### Gemini 1.0 Family

| Model | Target Use Case | Parameters | Release Date |
| --- | --- | --- | --- |
| Gemini 1.0 Ultra | Complex reasoning, multimodal tasks | Not disclosed | December 6, 2023 (announced); February 8, 2024 (public) |
| Gemini 1.0 Pro | General-purpose tasks | Not disclosed | December 6, 2023 |
| Gemini Nano-1 | On-device, low-memory devices | 1.8 billion | December 6, 2023 |
| Gemini Nano-2 | On-device, higher-memory devices | 3.25 billion | December 6, 2023 |

**Gemini Nano** models are distilled from the larger Gemini models, retaining strong capabilities despite their compact size. Nano-1 targets devices with limited memory, while Nano-2 provides improved performance for devices with more available resources. Both run through Android's AICore system service, leveraging the device's TPU or NPU for low-latency local inference, and can operate without an internet connection.

### Gemini 1.5 Family

| Model | Key Feature | Context Window | Release Date |
| --- | --- | --- | --- |
| Gemini 1.5 Pro | MoE architecture, long context | Up to 2M tokens | February 15, 2024 |
| Gemini 1.5 Flash | Speed and cost efficiency | 1M tokens | May 2024 (Google I/O) |

Gemini 1.5 Pro represented a generational leap, achieving near-perfect retrieval accuracy (over 99%) across its context window of up to 10 million tokens in research settings. The model surpassed Gemini 1.0 Pro and performed at a level comparable to 1.0 Ultra on a wide array of benchmarks, while requiring significantly less compute to train.

### Gemini 2.0 Family

| Model | Key Feature | Context Window | Release Date |
| --- | --- | --- | --- |
| Gemini 2.0 Flash | Speed, multimodal output, agentic features | 1M tokens | December 11, 2024 (experimental); January 30, 2025 (GA) |
| Gemini 2.0 Flash Thinking | Reasoning and chain-of-thought | 1M tokens | December 19, 2024 |
| Gemini 2.0 Pro (Experimental) | Best coding and complex prompts | 2M tokens | February 5, 2025 |
| Gemini 2.0 Flash-Lite | Cost efficiency | 1M tokens | February 5, 2025 |

The 2.0 generation was designed for the "agentic era," with built-in tool use, multimodal generation (native image output and text-to-speech), and real-time interaction capabilities through the Multimodal Live API.

### Gemini 2.5 Family

| Model | Key Feature | Context Window | Release Date |
| --- | --- | --- | --- |
| Gemini 2.5 Pro | Thinking model, top reasoning | 1M tokens | March 25, 2025 |
| Gemini 2.5 Flash | Thinking with adjustable reasoning | 1M tokens | May 20, 2025 |

The 2.5 generation introduced "thinking" capabilities as a core feature, where models reason through their thought process before generating a response. This approach leads to improved accuracy on complex tasks requiring multi-step reasoning, mathematical problem-solving, and scientific analysis.

## Benchmarks and Performance

### Gemini 1.0 Ultra Benchmarks (December 2023)

| Benchmark | Gemini 1.0 Ultra | GPT-4 (at the time) |
| --- | --- | --- |
| MMLU (5-shot) | 90.0% | 86.4% |
| GSM8K (math) | 94.4% | 92.0% |
| MATH | 53.2% | 52.9% |
| HumanEval (coding) | 74.4% | 67.0% |
| Natural2Code | 74.9% | 73.9% |
| HellaSwag | 87.8% | 95.3% |

Google's reported MMLU score used a chain-of-thought prompting approach, which some researchers noted was not directly comparable to the standard 5-shot evaluation method used by other model developers. GPT-4 outperformed Gemini Ultra only on the HellaSwag benchmark among the major evaluations.

### Gemini 2.5 Pro Benchmarks (March 2025)

| Benchmark | Score | Category |
| --- | --- | --- |
| LMArena | 1,443 (rank #1) | Overall |
| AIME 2024 (math) | 92.0% | Mathematics |
| AIME 2025 (math) | 86.7% | Mathematics |
| GPQA Diamond | 84.0% | Graduate-level science |
| Humanity's Last Exam | 18.8% | General knowledge |
| SWE-Bench Verified | 63.8% | Software engineering |
| LiveCodeBench v5 | 70.4% | Coding |
| Aider Polyglot | 74.0% | Coding |
| MRCR (128K context) | 91.5% | Long-context comprehension |

Gemini 2.5 Pro achieved these scores without test-time compute scaling techniques such as majority voting, which would further improve results at additional cost.

## Products and Consumer Access

### Gemini App

The Gemini app (formerly Bard) is Google's primary consumer-facing AI assistant. Available as a web application at gemini.google.com, as a dedicated Android app, and integrated into the Google app on iOS, it provides conversational AI capabilities powered by the latest Gemini models.

Key features include:

- **Conversational AI**: Multi-turn dialogue with context retention
- **Multimodal input**: Support for text, image, and document uploads
- **Image generation**: Powered by Google's Imagen models
- **Gemini Live**: Real-time voice conversations with the AI, supporting natural interruptions and turn-taking
- **Deep Research**: An advanced research mode that breaks down complex queries into sub-tasks, browses hundreds of websites, and generates comprehensive, source-grounded reports
- **Extensions**: Integration with Google services including Gmail, Google Drive, Google Maps, Google Flights, and YouTube

### Gemini Live

Gemini Live enables real-time, voice-based conversations with the Gemini AI. The feature supports natural dialogue patterns including mid-sentence interruptions, understanding of acoustic cues like pitch and pace, and the ability to see and discuss visual content shared by the user. The underlying Multimodal Live API supports over 70 languages and utilizes WebSockets for low-latency, bidirectional communication.

### Subscription Tiers

| Plan | Price (USD/month) | Key Features |
| --- | --- | --- |
| Gemini (Free) | $0 | Access to Gemini Flash models, basic features |
| Google AI Pro (formerly Gemini Advanced) | $19.99 | Gemini 2.5 Pro, 1M token context, Deep Research, NotebookLM integration, 2 TB storage, 1,000 AI credits/month |
| Google AI Ultra | $249.99 | Highest usage limits, 30 TB storage, 25,000 AI credits/month, priority access to new features |

At Google I/O 2025, the "Google One AI Premium" plan and "Gemini Advanced" branding were renamed to "Google AI Pro," and the higher-tier "Google AI Ultra" plan was introduced.

### NotebookLM

[NotebookLM](/wiki/notebooklm) is a Google AI-powered research and note-taking tool that leverages Gemini models. Key capabilities include:

- Processing up to 300 sources per notebook
- Generating "Audio Overviews" where AI hosts discuss uploaded material
- Creating "Video Overviews" with visual aids and slides
- Deep Research integration for thorough investigation of topics
- Conversion of notes and research into structured slide presentations
- Support for Google Sheets, Drive URLs, images, PDFs, and .docx files

## Developer Access and API

### Google AI Studio

[Google AI Studio](/wiki/google_ai_studio) is Google's free, web-based development environment for prototyping and experimenting with Gemini models. It provides:

- Immediate access to Gemini models with a standard Google account
- No credit card required for basic usage
- Prompt prototyping and testing tools
- API key generation for the Gemini Developer API

### Gemini Developer API

The Gemini API allows developers to integrate Gemini models into their applications. It offers three tiers:

| Tier | Target | Features |
| --- | --- | --- |
| Free | Developers and small projects | Rate-limited access to Gemini models |
| Paid | Production applications | Higher rate limits, advanced models, data not used for Google product improvement |
| Enterprise (Vertex AI) | Large-scale deployments | Custom security, compliance, support, and SLAs |

Pricing follows a usage-based model charged per 1,000 tokens. Key pricing features include batch mode processing at a 50% cost reduction, context caching at 10% of the base input price, and optional grounding via Google Search at additional cost.

### Vertex AI

[Vertex AI](/wiki/vertex_ai) is Google Cloud's enterprise AI platform that provides managed access to Gemini models with additional features for production deployments. Beyond token-based pricing, Vertex AI costs may include compute allocation, networking, storage, monitoring, and compliance features. Vertex AI supports fine-tuning (including supervised fine-tuning), model evaluation, and enterprise-grade security and compliance controls.

### Supported Capabilities

| Capability | Description | Available In |
| --- | --- | --- |
| Text generation | Writing, analysis, summarization, translation | All Gemini models |
| Vision | Image and video understanding | All Gemini models |
| Audio processing | Speech recognition, audio analysis | All Gemini models |
| Code generation | Programming across multiple languages | All Gemini models |
| Function calling | Integration with external tools and APIs | API and Vertex AI |
| Grounding with Google Search | Real-time information retrieval | API and Vertex AI |
| Context caching | Reuse of repeated input content at reduced cost | API and Vertex AI |
| JSON mode | Structured output generation | API and Vertex AI |
| Live API | Real-time audio/video streaming interactions | Gemini 2.0+ models |

## Integration with Google Products

### Google Search

Gemini powers AI-generated summaries and overviews in Google Search. At Google I/O 2025, Google announced an expanded "AI Mode" in Search that provides conversational, AI-powered responses to complex queries. This feature uses Gemini models to synthesize information from multiple web sources into comprehensive answers.

### Google Workspace

Gemini is integrated across the Google Workspace suite of productivity applications:

- **Google Docs**: AI-powered writing assistance, content suggestions, and document summarization
- **Google Sheets**: Formula generation, data analysis, and automated insights
- **Google Slides**: Presentation creation and content organization
- **Gmail**: Email drafting, summarization, and Smart Reply
- **Google Meet**: Note-taking, summarization, and real-time captioning
- **Google Drive**: Intelligent search and content discovery across stored files

In December 2025, Google launched **Workspace Studio**, an automation tool that allows users to design, manage, and share AI agents powered by Gemini. Workspace Studio follows an "if this, then that" automation model with full integration across Gmail, Chat, Drive, and other Google productivity apps.

### Android

Gemini serves as the default AI assistant on Android devices, replacing Google Assistant for AI-powered tasks. Integration includes:

- **On-device AI**: Gemini Nano running locally on supported devices (Pixel 8 Pro, Pixel 9 series, Samsung Galaxy S24 series, and others) for offline-capable features
- **System-level integration**: Overlay assistant accessible from any screen
- **Third-party app support**: Gemini Nano available to Android developers through the AICore system service

### Project Astra

**Project Astra** (Advanced Seeing and Talking Responsive Agent) is a Google DeepMind research prototype exploring capabilities for a universal AI assistant. Built on Gemini 2.0's agent framework, Project Astra can:

- Process live video and audio streams in real time with minimal latency
- Understand objects in context and highlight important elements on screen
- Answer questions using Google apps like Search, Maps, and Lens
- Maintain natural conversations without interruptions or time lag

Project Astra was first demonstrated at Google I/O 2024 and received significant updates at Google I/O 2025, when its capabilities began rolling out to Google Search, the Gemini app, and developer APIs.

## Competition

Gemini competes directly with other frontier AI model families in both the consumer and enterprise markets.

### Primary Competitors

| Model Family | Developer | Key Strengths |
| --- | --- | --- |
| [GPT-4](/wiki/gpt-4) / GPT-4o / GPT-5 | [OpenAI](/wiki/openai) | Market leader, broad consumer adoption via [ChatGPT](/wiki/chatgpt) |
| [Claude](/wiki/claude) | [Anthropic](/wiki/anthropic) | Enterprise focus, strong coding performance, AI safety emphasis |
| [Llama](/wiki/llama) | [Meta](/wiki/meta) | Open-source, widely adopted for custom deployments |
| DeepSeek | DeepSeek | Cost-efficient, strong reasoning capabilities |
| Grok | [xAI](/wiki/xai) | Integration with X (formerly Twitter), real-time data |

### Market Position

Google's primary competitive advantage lies in its distribution. Gemini is integrated into products used by billions of people, including Google Search, Android, Chrome, and Google Workspace. By late 2025, Google reported that Gemini had reached approximately 750 million monthly active users, driven largely by its integration across Google's ecosystem rather than standalone chatbot adoption.

In the consumer AI chatbot market, ChatGPT has maintained market leadership, though its share has declined as competitors have gained ground. Google's Gemini has emerged as the second-largest AI chatbot by market share.

In the enterprise API market, Gemini competes on price, performance, and integration with Google Cloud services. Google has positioned its Flash models as particularly cost-competitive alternatives, with aggressive pricing that undercuts many competitors.

## Controversies

### Image Generation Bias (February 2024)

In February 2024, shortly after the Gemini rebrand, the model's image generation capabilities drew significant criticism. Users discovered that when asked to generate images of historical figures or groups, Gemini consistently produced racially diverse depictions in contexts where such diversity was historically inaccurate. Specific examples included:

- America's Founding Fathers depicted as people of color
- 1943 German soldiers shown as non-white individuals in Nazi uniforms
- The Pope depicted as a non-white woman
- Ancient Greek warriors portrayed as Asian men and women

The issue stemmed from Google's tuning of the model to ensure diversity in image generation. This tuning "failed to account for cases that should clearly not show a range," according to Google's public statement. The model had also become overly cautious, refusing to respond to certain innocuous prompts that it misinterpreted as sensitive.

On February 22, 2024, Google paused Gemini's ability to generate images of people entirely, stating it would re-release an "improved" version. Google Senior Vice President Prabhakar Raghavan acknowledged that the tool "missed the mark" and committed to addressing the issues. Image generation of people was later restored in a limited capacity for Gemini Advanced subscribers using the Imagen 3 model, with stricter guidelines in place.

### MMLU Benchmark Methodology

When Google announced Gemini 1.0 Ultra's 90.0% score on MMLU, some researchers questioned the testing methodology. Google used a chain-of-thought prompting approach that allowed the model to reason through its answers, rather than the standard few-shot evaluation method used to benchmark other models like GPT-4. Critics argued this made the comparison misleading, though Google maintained that the approach was valid and better reflected the model's true capabilities.

### Privacy Concerns

Google's use of human reviewers to evaluate and improve Gemini models has raised privacy concerns. Some user conversations with Gemini are reviewed by human annotators as part of the model improvement process, meaning that sensitive information shared in chats could potentially be seen by Google employees or contractors. Google advises users not to enter confidential information in Gemini conversations.

### Bard Hallucination Incident

While technically a pre-Gemini incident, the February 2023 Bard launch error (in which the chatbot incorrectly stated that the James Webb Space Telescope took the first picture of an exoplanet) had lasting reputational consequences for Google's AI efforts. The resulting $100 billion drop in Alphabet's market value underscored the financial risks associated with AI product launches and contributed to the decision to rebrand Bard as Gemini in 2024.

## Gemini Robotics

On March 12, 2025, Google announced **Gemini Robotics**, a vision-language-action model based on the Gemini 2.0 family. This model is designed to enable robots to understand and interact with the physical world, bridging the gap between language understanding and physical action. Gemini Robotics represents an extension of the Gemini model family beyond traditional software applications into physical AI systems.

## See Also

- [Google DeepMind](/wiki/google_deepmind)
- [Large language model](/wiki/large_language_model)
- [Google Bard](/wiki/google_bard)
- [Transformer (machine learning model)](/wiki/transformer)
- [Mixture of Experts](/wiki/mixture_of_experts)
- [ChatGPT](/wiki/chatgpt)
- [Claude](/wiki/claude)
- [GPT-4](/wiki/gpt-4)
- [OpenAI](/wiki/openai)
- [Anthropic](/wiki/anthropic)
- [Google AI Studio](/wiki/google_ai_studio)
- [Vertex AI](/wiki/vertex_ai)
- [NotebookLM](/wiki/notebooklm)
- [Multimodal learning](/wiki/multimodal_learning)
- [PaLM](/wiki/palm)
- [LaMDA](/wiki/lamda)
- [Google Workspace](/wiki/google_workspace)

## References

1. "Introducing Gemini: Google's most capable AI model yet." Google Blog (December 6, 2023). [https://blog.google/technology/ai/google-gemini-ai/](https://blog.google/technology/ai/google-gemini-ai/)

2. "Google announces Gemini 1.0 with Nano, Pro, and Ultra sizes, launching today in Bard." 9to5Google (December 6, 2023). [https://9to5google.com/2023/12/06/google-gemini-1-0/](https://9to5google.com/2023/12/06/google-gemini-1-0/)

3. "Introducing Gemini 1.5, Google's next-generation AI model." Google Blog (February 2024). [https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/](https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/)

4. "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context." arXiv (2024). [https://arxiv.org/abs/2403.05530](https://arxiv.org/abs/2403.05530)

5. "Google Bard is now Gemini: How to try Ultra 1.0 and new mobile app." Google Blog (February 8, 2024). [https://blog.google/products/gemini/bard-gemini-advanced-app/](https://blog.google/products/gemini/bard-gemini-advanced-app/)

6. "Google introduces Gemini 2.0: A new AI model for the agentic era." Google Blog (December 11, 2024). [https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)

7. "Gemini 2.0 model updates: 2.0 Flash, Flash-Lite, Pro Experimental." Google Blog (February 2025). [https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/](https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/)

8. "Gemini 2.5: Our newest Gemini model with thinking." Google Blog (March 2025). [https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/)

9. "Google I/O 2025: Updates to Gemini 2.5 from Google DeepMind." Google Blog (May 2025). [https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-updates-io-2025/](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-updates-io-2025/)

10. "Google pauses Gemini AI image generator after inaccuracies." CNBC (February 22, 2024). [https://www.cnbc.com/2024/02/22/google-pauses-gemini-ai-image-generator-after-inaccuracies.html](https://www.cnbc.com/2024/02/22/google-pauses-gemini-ai-image-generator-after-inaccuracies.html)

11. "Gemini image generation got it wrong. We'll do better." Google Blog (February 2024). [https://blog.google/products/gemini/gemini-image-generation-issue/](https://blog.google/products/gemini/gemini-image-generation-issue/)

12. "Google shares lose $100 billion after company's AI chatbot makes an error during demo." CNN Business (February 8, 2023). [https://www.cnn.com/2023/02/08/tech/google-ai-bard-demo-error](https://www.cnn.com/2023/02/08/tech/google-ai-bard-demo-error)

13. "Google opens early access to Bard, its AI chatbot." TechCrunch (March 21, 2023). [https://techcrunch.com/2023/03/21/google-opens-early-access-to-bard-its-ai-chatbot/](https://techcrunch.com/2023/03/21/google-opens-early-access-to-bard-its-ai-chatbot/)

14. "Gemini Developer API pricing." Google AI for Developers. [https://ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing)

15. "Models." Gemini API, Google AI for Developers. [https://ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models)

16. "'Gemini 2.0 Flash Thinking' is Google's first reasoning model." 9to5Google (December 19, 2024). [https://9to5google.com/2024/12/19/gemini-2-0-flash-thinking/](https://9to5google.com/2024/12/19/gemini-2-0-flash-thinking/)

17. "Google's Gemini 2.5 Pro model tops LMArena by close to 40 points." R&D World Online (March 2025). [https://www.rdworldonline.com/googles-gemini-2-5-pro-model-tops-lmarena-by-40-points-outperforms-competitors-in-scientific-reasoning/](https://www.rdworldonline.com/googles-gemini-2-5-pro-model-tops-lmarena-by-40-points-outperforms-competitors-in-scientific-reasoning/)

18. "Pixel 8 Pro: the first smartphone with AI built in, now running Gemini Nano." Google Blog (December 2023). [https://blog.google/products/pixel/pixel-feature-drop-december-2023/](https://blog.google/products/pixel/pixel-feature-drop-december-2023/)

19. "Gemini 2.5 Pro and Flash capabilities." Google Cloud Blog. [https://cloud.google.com/blog/products/ai-machine-learning/expanding-gemini-2-5-flash-and-pro-capabilities](https://cloud.google.com/blog/products/ai-machine-learning/expanding-gemini-2-5-flash-and-pro-capabilities)

20. "Google Gemini." Britannica. [https://www.britannica.com/technology/Google-Gemini](https://www.britannica.com/technology/Google-Gemini)

21. "Gemini Live API overview." Google AI for Developers. [https://ai.google.dev/gemini-api/docs/live-api](https://ai.google.dev/gemini-api/docs/live-api)

22. "Project Astra." Google DeepMind. [https://deepmind.google/models/project-astra/](https://deepmind.google/models/project-astra/)

23. "Vertex AI Pricing." Google Cloud. [https://cloud.google.com/vertex-ai/generative-ai/pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)

24. "NotebookLM adds Deep Research and support for more source types." Google Blog. [https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-deep-research-file-types/](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-deep-research-file-types/)

25. "Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context." Google DeepMind Technical Report (2025). [https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
