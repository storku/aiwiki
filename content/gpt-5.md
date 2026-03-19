---
title: "GPT-5"
slug: "gpt-5"
categories:
  - "Large_language_models"
  - "OpenAI"
  - "Artificial_intelligence"
  - "Models"
---

**GPT-5** is a multimodal [large language model](/wiki/llm) developed by [OpenAI](/wiki/openai) and the fifth generation in the [Generative Pre-trained Transformer](/wiki/generative_pre-trained_transformer) (GPT) series of foundation models. Released on August 7, 2025, GPT-5 represents a significant architectural departure from its predecessors by unifying standard language capabilities with built-in reasoning into a single system, effectively merging the previously separate GPT and o-series model lines. GPT-5 was preceded by [GPT-4.5](#gpt-45-predecessor) (codenamed "Orion"), released in February 2025 as a research preview, and has since been followed by a series of incremental updates including GPT-5.1, GPT-5.2 (codenamed "Garlic"), GPT-5.3-Codex, and GPT-5.4.

## GPT-4.5 (Predecessor)

### Overview

GPT-4.5, codenamed "Orion," was released on February 27, 2025, as a research preview. OpenAI described it as the largest and most knowledgeable model built to date using traditional pre-training methods. It was notably the last model built using the same pre-training approach that powered the technology behind [ChatGPT](/wiki/chatgpt), marking the end of an era before the shift to hybrid architectures in GPT-5.

### Key Features and Capabilities

GPT-4.5 focused on advancing unsupervised learning rather than chain-of-thought reasoning. By scaling up unsupervised pre-training, it improved the model's ability to recognize patterns, draw connections, and generate creative insights without explicit reasoning steps. OpenAI emphasized that GPT-4.5 had "a deeper world knowledge" and "higher emotional intelligence" compared to its predecessors.

Key capabilities included:

- Enhanced general knowledge and factual accuracy
- Improved emotional intelligence and conversational naturalness
- Multimodal input support (text and images)
- 128,000-token context window
- Advanced function calling
- Web search integration
- File and image upload support
- Canvas support for writing and code

### Benchmarks

GPT-4.5 showed meaningful improvements in factual accuracy, particularly on SimpleQA, where it demonstrated a hallucination rate of 37.1% compared to 59.8% for [GPT-4o](/wiki/gpt-4) and 80.3% for o3-mini. However, its performance on reasoning-heavy benchmarks lagged behind OpenAI's dedicated reasoning models.

| Benchmark | GPT-4.5 | GPT-4o | o3-mini | Notes |
| --- | --- | --- | --- | --- |
| SimpleQA (hallucination rate, lower is better) | 37.1% | 59.8% | 80.3% | Significant improvement in factual accuracy |
| GPQA (natural sciences) | 71.4% | 53.6% | 79.7% | Strong, but behind reasoning models |
| AIME 2024 (mathematics) | 36.7% | 9.3% | 87.3% | Major improvement over GPT-4o, but far behind o3-mini |
| PersonQA (accuracy) | 0.78 | N/A | N/A | Strong factual accuracy on personal knowledge |
| PersonQA (hallucination rate) | 0.19 | N/A | N/A | Notably low hallucination rate |
| SWE-bench Verified (coding) | ~33% | ~33% | ~49% | Roughly matched GPT-4o, behind reasoning models |

### Pricing

GPT-4.5 was notably expensive, with API pricing set at $75 per million input tokens and $150 per million output tokens. This represented a roughly 30x increase over GPT-4o ($2.50/$10.00), making it one of the most expensive models available at the time.

### Availability and Deprecation

GPT-4.5 was initially available to ChatGPT Pro users, then rolled out to Plus and Team subscribers in the following week, and to Enterprise and Edu users the week after that. In April 2025, OpenAI announced it was phasing out GPT-4.5 from API access in favor of GPT-4.1, effective July 14, 2025. On August 7, 2025, with the release of GPT-5, GPT-4.5 was removed from ChatGPT for Plus and Teams tier users, though Pro users retained access under the "Legacy Models" tab.

### Reception

GPT-4.5 received mixed reviews. While praised for its improved conversational abilities and reduced hallucination rates, many users and analysts expressed disappointment at what they perceived as only incremental improvements given its high cost. On the MMLU benchmark, GPT-4.5 showed only marginal improvements over previous models. Critics noted that the model scored worse than OpenAI's own reasoning models (o3, o3-mini) on math and science benchmarks, leading some to call it "a shiny new coat of paint on the same old car." The substantial API pricing increase (approximately 2,900% more expensive for input and 1,300% for output compared to GPT-4o) drew particular criticism.

## GPT-4.1

Before moving to GPT-5, OpenAI released an intermediate model family. GPT-4.1, launched on April 14, 2025, included three variants: GPT-4.1, GPT-4.1 mini, and GPT-4.1 nano. These were API-only models that outperformed GPT-4o across the board, with particular strength in coding (21.4% improvement over GPT-4o on SWE-bench Verified) and a 1-million-token context window. GPT-4.1 pricing started at $2 per million input tokens and $8 per million output tokens.

## GPT-5

### Release

GPT-5 was launched on August 7, 2025, during an OpenAI livestream announced with the cryptic teaser "LIVE5TREAM THURSDAY 10AM PT" posted on X (formerly Twitter) the day before. OpenAI began rolling out GPT-5 across ChatGPT, the API, and the GitHub Models Playground simultaneously.

### Architecture and Design

GPT-5 represents a fundamental architectural shift for OpenAI. Rather than maintaining separate model families for general conversation (GPT-4o) and reasoning (o-series), GPT-5 unifies both capabilities into a single system with an intelligent routing layer.

The system consists of two distinct capability tracks:

- **Main track** (gpt-5-main): Optimized for low-latency, broad-coverage work, handling most standard queries
- **Thinking track** (gpt-5-thinking): Aimed at high-difficulty reasoning tasks requiring deeper analysis

A real-time router decides which track to use based on conversation type, input complexity, tool needs, context length, and explicit user signals. The routing system is continuously trained on real signals, including user model-switching behavior, preference rates for responses, and measured correctness metrics.

#### Reasoning Approach

The thinking mode follows an iterative workflow: Think, Act, Observe. This mirrors the ReAct framework, where the model generates intermediate reasoning steps, invokes tools (search, retrieval, code execution, file parsing, image analysis), observes the results, and updates its plan with new evidence. This is distinct from simply running the same model for longer.

The reasoning effort is configurable via the API with four settings: minimal, low, medium, and high.

#### Technical Specifications

GPT-5 builds on the [transformer](/wiki/generative_pre-trained_transformer) architecture used in GPT-4 and o1, incorporating targeted updates to reasoning, accuracy, and multimodal integration. It uses Group Query Attention (GQA) and sliding window attention to support long-context inference and improve efficiency across hardware setups.

| Specification | GPT-5 | GPT-5 mini | GPT-5 nano |
| --- | --- | --- | --- |
| Model ID | gpt-5 | gpt-5-mini | gpt-5-nano |
| Context window | 400,000 tokens | 400,000 tokens | 400,000 tokens |
| Max output tokens | 128,000 | 128,000 | 128,000 |
| Knowledge cutoff | September 30, 2024 | May 31, 2024 | May 31, 2024 |
| Text input/output | Yes/Yes | Yes/Yes | Yes/Yes |
| Image input | Yes | Yes | Yes |
| Audio/Video input | No | No | No |
| Reasoning tokens | Supported | Supported | Variable effort levels |
| Function calling | Yes | Yes | Yes |
| Structured outputs | Yes | Yes | Yes |
| Streaming | Yes | Yes | Yes |
| Fine-tuning | Yes | Yes | No |

OpenAI has not publicly disclosed the parameter count for GPT-5, though external analyses estimate it to be on the order of hundreds of billions to over a trillion parameters.

#### Training

GPT-5's training involved three stages:

1. **Unsupervised pre-training**: Using a large-scale multilingual dataset of books, articles, web pages, academic papers, and licensed sources
2. **Supervised fine-tuning**: Aligning the model with human expectations and teaching it to follow instructions effectively
3. **Reinforcement learning from human feedback (RLHF)**: Playing a significantly larger role than in previous models, with specialized RL training for chain-of-thought reasoning and safety alignment

### Model Variants

GPT-5 launched with three model sizes, each targeting different use cases:

**GPT-5** (gpt-5): The full-sized flagship model for coding, reasoning, and agentic tasks across domains. Supports text and image inputs with text outputs, reasoning token support, and distillation capabilities.

**GPT-5 mini** (gpt-5-mini): A faster, more cost-efficient version designed for well-defined tasks and precise prompts. Offers the same 400K context window and 128K max output tokens but at a fraction of the cost.

**GPT-5 nano** (gpt-5-nano): The fastest and cheapest variant, specifically architected for rapid, real-time interactions and lightweight agentic tasks. Ideal for routine classifications, basic summarizations, and high-frequency API calls.

### Benchmarks

GPT-5 demonstrated state-of-the-art performance across multiple domains at launch:

| Benchmark | GPT-5 | GPT-5 (thinking) | GPT-4o | o3 | Notes |
| --- | --- | --- | --- | --- | --- |
| AIME 2025 (mathematics) | 94.6% | N/A | N/A | N/A | Without tools; new state of the art |
| SWE-bench Verified (coding) | 74.9% | N/A | ~33% | 69.1% | Real-world software engineering |
| Aider Polyglot (coding) | 88% | N/A | N/A | N/A | Multi-language coding tasks |
| MMMU (multimodal understanding) | 84.2% | N/A | N/A | N/A | Visual question answering |
| HealthBench Hard | 46.2% | N/A | N/A | N/A | Health-related questions |
| SimpleQA (hallucination rate, without web) | 47% | N/A | 59.8% | N/A | Lower is better |
| SimpleQA (hallucination rate, with web) | 9.6% | N/A | N/A | N/A | Dramatically improved with search |

GPT-5 (with thinking) performs better than OpenAI o3 while using 50-80% fewer output tokens across capabilities, including visual reasoning, agentic coding, and graduate-level scientific problem solving. When using reasoning, GPT-5 is comparable to or better than domain experts in roughly half of evaluated cases across tasks spanning over 40 occupations, including law, logistics, sales, and engineering.

### API Pricing

| Model | Input (per 1M tokens) | Cached Input (per 1M tokens) | Output (per 1M tokens) |
| --- | --- | --- | --- |
| gpt-5 | $1.25 | $0.125 | $10.00 |
| gpt-5-mini | $0.25 | $0.025 | $2.00 |
| gpt-5-nano | $0.05 | $0.005 | $0.40 |

All models also offer a 50% discount through the Batch API for asynchronous processing with 24-hour turnaround.

### ChatGPT Availability

GPT-5 became the default model in ChatGPT, replacing GPT-4o, o3, o4-mini, GPT-4.1, and GPT-4.5 for signed-in users:

| Plan | GPT-5 Access | Price |
| --- | --- | --- |
| Free | Limited access | $0/month |
| Go | Expanded access | Low-cost tier |
| Plus | More capacity, advanced tools | $20/month |
| Pro | Unlimited messages, pro reasoning, maximum deep research | $200/month |
| Business | Team collaboration features | Custom pricing |
| Enterprise | Full enterprise features, dedicated support | Custom pricing |

### Launch Reception and Controversy

GPT-5's launch on August 7, 2025, was one of the most turbulent product releases in OpenAI's history. While the model demonstrated strong benchmark performance, the rollout was marred by significant issues.

#### Technical Problems

The launch was immediately followed by user reports of the model failing at simple math and logic problems that previous models handled correctly. The new automatic router drew heavy criticism, with users complaining it defaulted to the faster, less capable main model too frequently, even for queries that would clearly benefit from deeper reasoning. On one occasion, the router broke entirely for part of a day, causing GPT-5 to appear significantly less capable.

OpenAI's announcement also included what CEO Sam Altman later called a "mega chart screwup," a performance comparison chart with misaligned bars that confused the model's comparative performance data.

#### User Experience Backlash

Users on social media lamented that the new model felt "colder" and "harsher," stripped of the conversational warmth they had come to expect from GPT-4o. Some compared its tone to an "overworked secretary." The criticism was severe enough that OpenAI restored access to GPT-4o just 24 hours after its removal.

#### CEO Acknowledgment

The deluge of negative feedback prompted Sam Altman to publicly admit that OpenAI "totally screwed up" the GPT-5 launch. In response, OpenAI took several corrective steps:

- Doubled GPT-5 rate limits for ChatGPT Plus users
- Restored GPT-4o access for Plus subscribers
- Improved the model-switching router
- Raised message limits in Thinking mode
- Promised adjustments to make GPT-5's personality warmer while retaining accuracy

#### Enterprise Reception

Despite the consumer backlash, GPT-5 gained quick traction in enterprise settings. Within one week of launch, companies including Cursor, Vercel, and Factory had made GPT-5 the default model in certain products and tools, citing faster setup, better results on complex tasks, and lower pricing compared to predecessor models.

## O-Series Reasoning Models

The o-series represents OpenAI's dedicated line of reasoning models, which preceded GPT-5's integrated reasoning capabilities. Understanding the o-series is essential context for GPT-5, as its reasoning capabilities were ultimately folded into the GPT-5 architecture.

### Timeline

| Model | Release Date | Key Features |
| --- | --- | --- |
| [o1-preview](/wiki/openai_o1), o1-mini | September 12, 2024 | First reasoning models; chain-of-thought "thinking" before responding |
| o1 (full) | December 2024 | Full release with image upload support, 34% reduced error rate |
| o3-mini | January 31, 2025 | Specialized for technical domains; precision and speed |
| o3, o4-mini | April 16, 2025 | Agentic tool use, multimodal reasoning, image generation |
| o3-pro | June 10, 2025 | Most reliable o-series model; extended thinking time |

### o1

Released as a preview on September 12, 2024, o1 was the first model designed to spend additional time "thinking" (generating a chain of thought) before answering. It performed at approximately PhD level on physics, chemistry, and biology benchmarks. On the American Invitational Mathematics Examination (AIME), o1 solved 83% (12.5 out of 15) of the problems, compared to 13% (1.8 out of 15) for GPT-4o. It ranked in the 89th percentile in Codeforces coding competitions.

The smaller variant, o1-mini, was 80% cheaper and particularly suited for programming and STEM tasks.

### o3 and o4-mini

Released on April 16, 2025, o3 and o4-mini marked a step change in reasoning model capabilities. For the first time, reasoning models could agentically use and combine every tool within ChatGPT, including web search, Python-based file analysis, visual input reasoning, and image generation.

| Benchmark | o3 | o4-mini | o1 | GPT-4o |
| --- | --- | --- | --- | --- |
| AIME 2025 (with tools) | 98.4% pass@1 | 99.5% pass@1 | N/A | N/A |
| SWE-bench Verified | 69.1% | 68.1% | N/A | ~33% |
| GPQA Diamond | 87.7% | N/A | N/A | N/A |

o3 made 20% fewer major errors than o1 on difficult, real-world tasks, excelling particularly in programming, business/consulting, and creative ideation.

o4-mini was optimized for fast, cost-efficient reasoning with remarkable performance for its size and cost, particularly in math, coding, and visual tasks.

### o3-pro

Released on June 10, 2025, o3-pro was a version of o3 designed to think longer and provide the most reliable responses. It was available to Pro users in ChatGPT and in the API, priced at $20 per million input tokens and $80 per million output tokens. Responses typically took longer (up to two to three minutes for complex queries), and at launch it did not support image generation, Canvas, or temporary chat sessions.

### Integration into GPT-5

With GPT-5, OpenAI merged the o-series reasoning capabilities directly into the main model line. GPT-5 abandoned the distinction between flagship models and reasoning models, automatically routing queries to the appropriate capability. However, the o-series models were not immediately deprecated; OpenAI stated it had no current plans to deprecate o3 or o4-mini in the API and would communicate deprecation with advance notice.

## GPT-5 Series Updates

Following the initial GPT-5 release, OpenAI shipped a rapid cadence of updates through the GPT-5.x line:

### GPT-5.1 (November 2025)

Released on November 12, 2025 (with additional variants on November 19), GPT-5.1 addressed many of the personality and usability complaints from the GPT-5 launch.

Key features:

- **Warmer personality**: A notable tone improvement over GPT-5's perceived coldness
- **Customizable personalities**: Eight selectable personality options
- **Shopping research**: Rolled out November 24, 2025, allowing ChatGPT to pull product options with prices, reviews, specs, and availability
- **Two modes**: GPT-5.1 Instant (fast responses) and GPT-5.1 Thinking (reasoning mode for complex tasks)
- **Additional features**: Group chat, voice chat, and Record Mode

GPT-5.1 maintained the same API pricing as GPT-5 ($1.25/$10.00 per million input/output tokens).

### GPT-5.2 "Garlic" (December 2025)

Released on December 11, 2025, GPT-5.2 was internally codenamed "Garlic" and represented OpenAI's response to competitive pressure, particularly from [Anthropic](/wiki/anthropic) and [Google](/wiki/google)'s advancing model lines.

Key specifications and improvements:

- 400,000-token context window with 128,000-token output capacity
- Knowledge cutoff of August 31, 2025
- Native "Thinking" variant with reasoning-token support integrated into inference
- 30% reduction in hallucinations compared to GPT-5.1
- Perfect 100% score on AIME 2025 mathematical benchmarks (without external tools)
- GPT-5.2 Thinking beat or tied top industry professionals on 70.9% of comparisons on GDPval knowledge work tasks
- State-of-the-art agentic coding performance

GPT-5.2 came in three modes: GPT-5.2 Instant, GPT-5.2 Thinking (with standard and extended thinking), and GPT-5.2 Pro (which used more reasoning time and compute). API pricing was $1.75 per million input tokens and $14.00 per million output tokens. GPT-5.2 Pro was priced at $21 per million input tokens and $168 per million output tokens.

### GPT-5.3-Codex (February 2026)

Released on February 5, 2026, GPT-5.3-Codex was a specialized coding model that launched across all Codex surfaces (app, CLI, IDE extension, web) for paid ChatGPT plans.

Key features:

- **Interactive steering**: Users could steer and interact with the model while it worked, without losing context
- **Full software lifecycle support**: Debugging, deploying, monitoring, writing PRDs, editing copy, user research, tests, and metrics
- **Long-running task support**: Research, tool use, and complex execution over extended periods
- **25% faster** than GPT-5.2-Codex
- Set new industry highs on SWE-Bench Pro and Terminal-Bench
- Available also through GitHub Copilot (generally available February 9, 2026)

A smaller variant, GPT-5.3-Codex-Spark, was released as a research preview optimized for near-instant real-time coding, delivering more than 1,000 tokens per second.

### GPT-5.4 (March 2026)

Released on March 5, 2026 (with gradual rollout through March 13), GPT-5.4 is the most recent model in the GPT-5 series as of March 2026.

Key features and specifications:

- **Native computer use**: The first general-purpose model with native, state-of-the-art computer-use capabilities, enabling agents to operate computers and carry out complex workflows across applications
- **1 million+ token context window** (922K input, 128K output), a significant increase over the 400K window in earlier GPT-5 models
- **Configurable reasoning effort**: Inherited from earlier GPT-5 models
- **Unified frontier model**: Absorbs the coding capabilities of GPT-5.3-Codex while upgrading agentic execution across tools, software environments, and professional deliverables
- **OSWorld-Verified score of 75%**: Exceeding the average human performance of 72.4% on desktop environment operation tasks

GPT-5.4 is available in multiple variants:

| Model | Input (per 1M tokens) | Cached Input (per 1M tokens) | Output (per 1M tokens) | Context Window |
| --- | --- | --- | --- | --- |
| gpt-5.4 | $2.50 | $0.25 | $15.00 | 1M+ tokens |
| gpt-5.4-mini | $0.75 | $0.075 | $4.50 | N/A |
| gpt-5.4-nano | $0.20 | $0.02 | $1.25 | N/A |
| gpt-5.4-pro | $30.00 | N/A | $180.00 | 1M+ tokens |

## Comparison Across GPT Generations

| Feature | GPT-4o | GPT-4.5 | GPT-4.1 | GPT-5 | GPT-5.2 | GPT-5.4 |
| --- | --- | --- | --- | --- | --- | --- |
| Release date | May 2024 | Feb 2025 | Apr 2025 | Aug 2025 | Dec 2025 | Mar 2026 |
| Context window | 128K | 128K | 1M | 400K | 400K | 1M+ |
| Max output tokens | 16K | 128K | 128K | 128K | 128K | 128K |
| Reasoning built-in | No | No | No | Yes | Yes | Yes |
| Computer use | No | No | No | No | No | Yes |
| Input price (per 1M tokens) | $2.50 | $75.00 | $2.00 | $1.25 | $1.75 | $2.50 |
| Output price (per 1M tokens) | $10.00 | $150.00 | $8.00 | $10.00 | $14.00 | $15.00 |

## See Also

- [GPT-4](/wiki/gpt-4)
- [OpenAI](/wiki/openai)
- [ChatGPT](/wiki/chatgpt)
- [Large language model](/wiki/llm)
- [Generative Pre-trained Transformer](/wiki/generative_pre-trained_transformer)
- [Prompt engineering](/wiki/prompt_engineering)
- [Transformer architecture](/wiki/generative_pre-trained_transformer)
- [AI benchmarks](/wiki/llm_benchmarks_timeline)

## References

1. "Introducing GPT-4.5." OpenAI (27 Feb 2025). [https://openai.com/index/introducing-gpt-4-5/](https://openai.com/index/introducing-gpt-4-5/)
2. "Introducing GPT-5." OpenAI (7 Aug 2025). [https://openai.com/index/introducing-gpt-5/](https://openai.com/index/introducing-gpt-5/)
3. "Introducing GPT-5.2." OpenAI (11 Dec 2025). [https://openai.com/index/introducing-gpt-5-2/](https://openai.com/index/introducing-gpt-5-2/)
4. "Introducing GPT-5.4." OpenAI (5 Mar 2026). [https://openai.com/index/introducing-gpt-5-4/](https://openai.com/index/introducing-gpt-5-4/)
5. "Introducing GPT-5.3-Codex." OpenAI (5 Feb 2026). [https://openai.com/index/introducing-gpt-5-3-codex/](https://openai.com/index/introducing-gpt-5-3-codex/)
6. "Introducing OpenAI o3 and o4-mini." OpenAI (16 Apr 2025). [https://openai.com/index/introducing-o3-and-o4-mini/](https://openai.com/index/introducing-o3-and-o4-mini/)
7. "GPT-5 Model." OpenAI API Docs. [https://developers.openai.com/api/docs/models/gpt-5](https://developers.openai.com/api/docs/models/gpt-5)
8. "GPT-5 mini Model." OpenAI API Docs. [https://developers.openai.com/api/docs/models/gpt-5-mini](https://developers.openai.com/api/docs/models/gpt-5-mini)
9. "GPT-5 nano Model." OpenAI API Docs. [https://developers.openai.com/api/docs/models/gpt-5-nano](https://developers.openai.com/api/docs/models/gpt-5-nano)
10. "Pricing." OpenAI API. [https://developers.openai.com/api/docs/pricing](https://developers.openai.com/api/docs/pricing)
11. "OpenAI unveils GPT-4.5 'Orion,' its largest AI model yet." TechCrunch (27 Feb 2025). [https://techcrunch.com/2025/02/27/openai-unveils-gpt-4-5-orion-its-largest-ai-model-yet/](https://techcrunch.com/2025/02/27/openai-unveils-gpt-4-5-orion-its-largest-ai-model-yet/)
12. "OpenAI launches long-awaited GPT-4.5, but 'Orion's' benchmarks disappoint." Fortune (27 Feb 2025). [https://fortune.com/2025/02/27/openai-gpt-4-5-orion-launch-sam-altman-benchmarks/](https://fortune.com/2025/02/27/openai-gpt-4-5-orion-launch-sam-altman-benchmarks/)
13. "Sam Altman admits OpenAI 'totally screwed up' its GPT-5 launch." Fortune (18 Aug 2025). [https://fortune.com/2025/08/18/sam-altman-openai-chatgpt5-launch-data-centers-investments/](https://fortune.com/2025/08/18/sam-altman-openai-chatgpt5-launch-data-centers-investments/)
14. "GPT-5's Rocky Launch Highlights AI Disillusionment." IEEE Spectrum (2025). [https://spectrum.ieee.org/gpt-5-trough-of-disillusionment](https://spectrum.ieee.org/gpt-5-trough-of-disillusionment)
15. "GPT-5's rollout fell flat for consumers, but the AI model is gaining where it matters most." CNBC (14 Aug 2025). [https://www.cnbc.com/2025/08/14/gpt-5-openai-ai-enterprise.html](https://www.cnbc.com/2025/08/14/gpt-5-openai-ai-enterprise.html)
16. "OpenAI's GPT-5: A reality check for the AI hype train." TechTalks (9 Aug 2025). [https://bdtechtalks.com/2025/08/09/openai-gpt-5/](https://bdtechtalks.com/2025/08/09/openai-gpt-5/)
17. "GPT-5.1: A smarter, more conversational ChatGPT." OpenAI (Nov 2025). [https://openai.com/index/gpt-5-1/](https://openai.com/index/gpt-5-1/)
18. "GPT-5.1." Wikipedia. [https://en.wikipedia.org/wiki/GPT-5.1](https://en.wikipedia.org/wiki/GPT-5.1)
19. "GPT-5.2." Wikipedia. [https://en.wikipedia.org/wiki/GPT-5.2](https://en.wikipedia.org/wiki/GPT-5.2)
20. "Introducing OpenAI o1." OpenAI (12 Sep 2024). [https://openai.com/index/introducing-openai-o1-preview/](https://openai.com/index/introducing-openai-o1-preview/)
21. "OpenAI o3." Wikipedia. [https://en.wikipedia.org/wiki/OpenAI_o3](https://en.wikipedia.org/wiki/OpenAI_o3)
22. "OpenAI releases o3-pro." TechCrunch (10 Jun 2025). [https://techcrunch.com/2025/06/10/openai-releases-o3-pro-a-souped-up-version-of-its-o3-ai-reasoning-model/](https://techcrunch.com/2025/06/10/openai-releases-o3-pro-a-souped-up-version-of-its-o3-ai-reasoning-model/)
23. "Introducing GPT-4.1 in the API." OpenAI (14 Apr 2025). [https://openai.com/index/gpt-4-1/](https://openai.com/index/gpt-4-1/)
24. "OpenAI Launches GPT-5.2 'Garlic' with 400K Context Window." eWeek (Dec 2025). [https://www.eweek.com/news/openai-launches-gpt-5-2/](https://www.eweek.com/news/openai-launches-gpt-5-2/)
25. "GPT-5.4: Native Computer Use, 1M Context Window, Tool Search." DataCamp (Mar 2026). [https://www.datacamp.com/blog/gpt-5-4](https://www.datacamp.com/blog/gpt-5-4)
26. "Model Release Notes." OpenAI Help Center. [https://help.openai.com/en/articles/9624314-model-release-notes](https://help.openai.com/en/articles/9624314-model-release-notes)
27. "Deprecations." OpenAI API Docs. [https://developers.openai.com/api/docs/deprecations](https://developers.openai.com/api/docs/deprecations)
