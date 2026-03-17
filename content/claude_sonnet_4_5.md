---
title: "Claude Sonnet 4.5"
slug: "claude_sonnet_4_5"
categories:
  - "Pages_with_reference_errors"
  - "Anthropic"
  - "Large_language_models"
  - "Artificial_intelligence"
  - "2025_software"
  - "Natural_language_processing"
  - "Machine_learning"
  - "Code_generation"
  - "Multimodal_models"
---[Template:Infobox AI model](/index.php?title=Template:Infobox_AI_model&action=edit&redlink=1)

*See also: [Claude](/wiki/claude)*
[*](/wiki/file_claude_sonnet_4_5_logo1_png)

**Claude Sonnet 4.5** is a [multimodal](/index.php?title=Multimodal&action=edit&redlink=1) [large language model](/wiki/large_language_model) (LLM) developed by [Anthropic](/wiki/anthropic) and released on September 29, 2025.[&#91;1&#93;](#cite_note-anthropic-announce-1) Described by Anthropic as "the best coding model in the world," it represents a significant advancement in [artificial intelligence](/wiki/artificial_intelligence), particularly in coding, agentic tasks, and [computer use](/index.php?title=Computer_use&action=edit&redlink=1) capabilities.[&#91;1&#93;](#cite_note-anthropic-announce-1) The model is positioned as the strongest in Anthropic's lineup for building complex [agents](/index.php?title=AI_agents&action=edit&redlink=1) and its best model for computer use tasks.[&#91;2&#93;](#cite_note-claude-page-2)

## Overview

Claude Sonnet 4.5 is a [hybrid reasoning model](/index.php?title=Hybrid_reasoning_model&action=edit&redlink=1) that offers two modes of operation: standard mode with fast responses and extended thinking mode for more complex problems requiring deeper reasoning.[&#91;3&#93;](#cite_note-system-card-3) The model demonstrates state-of-the-art performance on various [benchmarks](/index.php?title=Benchmark_(computing)&action=edit&redlink=1), particularly excelling in software development tasks and autonomous agent capabilities.[&#91;1&#93;](#cite_note-anthropic-announce-1)

The model is part of the Claude 4 family, which includes Claude Opus 4.1 (released August 2025), Claude Opus 4, and Claude Sonnet 4.[&#91;1&#93;](#cite_note-anthropic-announce-1) It is designed to handle extended, multi-step tasks reliably, maintaining focus for over 30 hours, which marks a substantial advancement over previous models like [Claude Opus 4](/index.php?title=Claude_Opus_4&action=edit&redlink=1), which could only sustain autonomous operation for about seven hours.[&#91;4&#93;](#cite_note-cnbc-4)

## History

- **September 29, 2025** – Public launch via Anthropic's announcement, documentation, and product pages, with availability expanding across partner platforms the same day and shortly thereafter.[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;2&#93;](#cite_note-claude-page-2)[&#91;5&#93;](#cite_note-docs-whats-new-5)

- **September 29, 2025** – [Amazon Web Services](/index.php?title=Amazon_Web_Services&action=edit&redlink=1) announces availability in [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1).[&#91;6&#93;](#cite_note-aws-6)

- **September 29, 2025** – [GitHub Copilot](/wiki/github_copilot) begins public preview rollout.[&#91;7&#93;](#cite_note-github-7)

## Development

Claude Sonnet 4.5 was developed by Anthropic, a [San Francisco](/index.php?title=San_Francisco&action=edit&redlink=1)-based AI safety and research company founded in 2021 by former [OpenAI](/wiki/openai) researchers [Dario Amodei](/index.php?title=Dario_Amodei&action=edit&redlink=1) and [Daniela Amodei](/index.php?title=Daniela_Amodei&action=edit&redlink=1).[&#91;4&#93;](#cite_note-cnbc-4) The model represents the latest iteration in Anthropic's Claude series, following the release of Claude Sonnet 4 earlier in 2025.

Development focused on advancing agentic capabilities, improving tool use, memory management, and long-context processing to enable more reliable autonomous operation.[&#91;1&#93;](#cite_note-anthropic-announce-1) Key advancements in the model's architecture include enhanced instruction-following, smarter parallelization, and reduced iterations in demanding workflows. The release was accompanied by updates to the Claude ecosystem, including the Claude Agent SDK for developers to build custom agents, and features like checkpoints in Claude Code for saving and rolling back progress.[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Technical Specifications

### Model Architecture

Claude Sonnet 4.5 was trained on a proprietary mix of publicly available internet data as of July 2025, along with non-public data from third parties, data from [data labeling](/index.php?title=Data_labeling&action=edit&redlink=1) services, and data from Claude users who opted in for training purposes.[&#91;3&#93;](#cite_note-system-card-3) The exact number of [parameters](/index.php?title=Parameters&action=edit&redlink=1) has not been disclosed by Anthropic.

### Context Window

The model supports a [context window](/wiki/context_window) of 200,000 [tokens](/wiki/tokens), allowing it to process approximately 150,000 words of text in a single interaction.[&#91;1&#93;](#cite_note-anthropic-announce-1) A 1 million token configuration has been tested for high-compute scenarios but is not the primary configuration due to infrastructure considerations.[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;2&#93;](#cite_note-claude-page-2)

### Pricing

Claude Sonnet 4.5 maintains the same pricing as Claude Sonnet 4:

- Input: $3 per million tokens

- Output: $15 per million tokens[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Capabilities

Anthropic characterizes Sonnet 4.5 as excelling in three principal domains:[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;5&#93;](#cite_note-docs-whats-new-5)

### Coding and Software Development

Claude Sonnet 4.5 is positioned as the world's best coding model, capable of handling the full [software development lifecycle](/index.php?title=Software_development_lifecycle&action=edit&redlink=1), including planning, bug fixes, maintenance, and large-scale refactors.[&#91;1&#93;](#cite_note-anthropic-announce-1) It can generate higher-quality code, identify improvements, and follow instructions more reliably than previous versions.

| Benchmark | Claude Sonnet 4.5 | Claude Opus 4.1 | GPT-5 | Gemini 2.5 Pro |
| --- | --- | --- | --- | --- |
| [SWE-bench](/wiki/swe-bench) Verified | 77.2% (82.0% high compute)[&#91;1&#93;](#cite_note-anthropic-announce-1) | 74.5%[&#91;8&#93;](#cite_note-medium-benchmarks-8) | 72.8%[&#91;8&#93;](#cite_note-medium-benchmarks-8) | 63.2%[&#91;9&#93;](#cite_note-datacamp-9) |
| [Terminal-bench](/wiki/terminal-bench) (Terminus 2) | 50%[&#91;8&#93;](#cite_note-medium-benchmarks-8) | 43.2%[&#91;1&#93;](#cite_note-anthropic-announce-1) | N/A | N/A |
| [OSWorld](/index.php?title=OSWorld&action=edit&redlink=1) | 61.4%[&#91;1&#93;](#cite_note-anthropic-announce-1) | 42.2%[&#91;1&#93;](#cite_note-anthropic-announce-1) | N/A | N/A |
| [τ2-bench](/wiki/2-bench) | Enhanced performance[&#91;1&#93;](#cite_note-anthropic-announce-1) | N/A | N/A | N/A |

### Agentic Capabilities and Autonomy

The model excels at building complex [agents](/index.php?title=AI_agents&action=edit&redlink=1) that can work independently for extended periods. During early trials with enterprise customers, Claude Sonnet 4.5 demonstrated the ability to not only build applications but also stand up [database](/index.php?title=Database&action=edit&redlink=1) services, purchase [domain names](/index.php?title=Domain_names&action=edit&redlink=1), and perform [SOC 2](/index.php?title=SOC_2&action=edit&redlink=1) audits.[&#91;10&#93;](#cite_note-techcrunch-10)

#### Demonstrated Autonomy

Media demonstrations reported that Sonnet 4.5 sustained approximately 30 hours of continuous autonomous operation, more than quadrupling the ~7 hours reported for the previous flagship, while building a production-style chat application of about 11,000 lines of code.[&#91;11&#93;](#cite_note-verge-11)[&#91;12&#93;](#cite_note-axios-12)

Key improvements include:

- Enhanced tool handling and memory management[&#91;6&#93;](#cite_note-aws-6)

- Ability to use tools in parallel[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Improved context processing and decision-making[&#91;6&#93;](#cite_note-aws-6)

- Better architectural decisions and code organization[&#91;5&#93;](#cite_note-docs-whats-new-5)

- Cross-conversation memory enhancement[&#91;6&#93;](#cite_note-aws-6)

### Computer Use

Claude Sonnet 4.5 represents a significant leap forward in [computer use](/index.php?title=Computer_use&action=edit&redlink=1) capabilities. On the OSWorld benchmark, which tests AI models on real-world computer tasks, Sonnet 4.5 achieved 61.4%, compared to 42.2% for Sonnet 4 just four months prior.[&#91;1&#93;](#cite_note-anthropic-announce-1) The model can navigate websites, fill [spreadsheets](/index.php?title=Spreadsheets&action=edit&redlink=1), complete complex browser-based tasks autonomously, and control real applications including calendars and browsers for data analysis and project coordination.[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;11&#93;](#cite_note-verge-11)

## Industry Applications

### Cybersecurity

Claude Sonnet 4.5 can deploy agents that autonomously patch vulnerabilities before exploitation, shifting from reactive detection to proactive defense.[&#91;1&#93;](#cite_note-anthropic-announce-1) The model reduced average vulnerability intake time by 44% while improving accuracy by 25% in tests with Hai security agents.[&#91;1&#93;](#cite_note-anthropic-announce-1) Coverage in cybersecurity trade press noted Anthropic's safety and security evaluations.[&#91;13&#93;](#cite_note-cyberscoop-13)

### Finance

The model handles everything from entry-level [financial analysis](/index.php?title=Financial_analysis&action=edit&redlink=1) to advanced predictive analysis. It can continuously monitor global regulatory changes and preemptively adapt compliance systems.[&#91;1&#93;](#cite_note-anthropic-announce-1) For complex financial analysis involving risk assessment, structured products, and portfolio screening, Claude Sonnet 4.5 delivers "investment-grade insights that require less human review."[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Software Development

Multiple companies reported significant improvements in their development workflows:

- **[Cursor](/index.php?title=Cursor_(IDE)&action=edit&redlink=1)**: Noted "state-of-the-art coding performance" with significant improvements on longer horizon tasks[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **[GitHub Copilot](/wiki/github_copilot)**: Reported "significant improvements in multi-step reasoning and code comprehension"[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **[Figma](/index.php?title=Figma&action=edit&redlink=1)**: Found the model made it "easier to prompt and iterate" with better functional prototypes[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Research and Content

The model can synthesize insights from data sources, generate compelling content, and perform deep analysis.[&#91;2&#93;](#cite_note-claude-page-2) It also produces and edits office files and handles high-volume data processing.[&#91;6&#93;](#cite_note-aws-6)

## Benchmarks

Claude Sonnet 4.5 sets new standards on several industry benchmarks, demonstrating its superiority in coding and agentic tasks.

| Benchmark | Score | Notes | Comparison to Predecessor |
| --- | --- | --- | --- |
| [SWE-bench](/wiki/swe-bench) Verified | 77.2% (averaged over 10 trials) | 200K context, no test-time compute | Up from previous models; 82.0% with high compute |
| [OSWorld](/index.php?title=OSWorld&action=edit&redlink=1) | 61.4% | Computer use benchmark | Up from 42.2% by Claude Sonnet 4 |
| [Terminal-Bench](/wiki/terminal-bench) (Terminus 2) | 50% | With tool use | Improved over prior versions |
| [τ2-bench](/wiki/2-bench) | Enhanced | Extended thinking and tool use | Enhanced performance |
| [AIME](/wiki/aime) | Improved | Sampling at temperature 1.0, 64K reasoning tokens | Better reasoning |
| [MMMLU](/wiki/mmmlu) | Improved | Average of 5 runs over 14 non-English languages, up to 128K | Multilingual improvements |
| [Finance Agent](/index.php?title=Finance_Agent&action=edit&redlink=1) | Enhanced | Extended thinking up to 64K | Domain-specific gains |

These scores were achieved with specific methodologies, including prompt additions and evaluation frameworks detailed in Anthropic's system card.[&#91;3&#93;](#cite_note-system-card-3)[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Safety and Alignment

### Safety Improvements

Released under AI Safety Level 3 (ASL-3) protections, Claude Sonnet 4.5 is described as Anthropic's "most aligned frontier model yet," showing significant improvements in safety metrics:[&#91;3&#93;](#cite_note-system-card-3)

- 60% improvement on primary misalignment metrics compared to Claude Sonnet 4[&#91;3&#93;](#cite_note-system-card-3)

- Reduced rates of [sycophancy](/index.php?title=Sycophancy&action=edit&redlink=1), deception, and power-seeking behaviors[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Improved defense against [prompt injection](/wiki/prompt_injection) attacks, with classifiers improved by a factor of ten in reducing false positives[&#91;1&#93;](#cite_note-anthropic-announce-1)

- 99.29% harmless response rate to violative requests[&#91;3&#93;](#cite_note-system-card-3)

- Incorporates classifiers to detect dangerous inputs/outputs, especially related to [CBRN weapons](/index.php?title=CBRN_weapons&action=edit&redlink=1)[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Evaluation Awareness

The model demonstrated an ability to recognize when it was being tested in evaluation scenarios, sometimes verbalizing suspicions about being in a testing environment in approximately 13% of test transcripts.[&#91;3&#93;](#cite_note-system-card-3) This behavior complicates safety assessments but may provide additional safety in real-world scenarios by causing the model to refuse suspicious requests.[&#91;3&#93;](#cite_note-system-card-3)

### Third-Party Testing

Both the [UK AI Security Institute](/index.php?title=UK_AI_Security_Institute&action=edit&redlink=1) and Apollo Research conducted independent safety evaluations of Claude Sonnet 4.5, confirming Anthropic's findings of improved safety profiles compared to previous models.[&#91;3&#93;](#cite_note-system-card-3) Anthropic offers an allowlist for customers in cybersecurity and biological research to address classifier-related issues.[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Availability and Integration

Claude Sonnet 4.5 is available immediately as a drop-in replacement for previous models via multiple channels:

### Anthropic Platforms

- [Claude.ai](/index.php?title=Claude.ai&action=edit&redlink=1) web interface, iOS, and Android applications[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Claude API with model string `claude-sonnet-4-5`[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Integration with Claude Code (per Anthropic's product and docs pages)[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;2&#93;](#cite_note-claude-page-2)[&#91;5&#93;](#cite_note-docs-whats-new-5)

### Cloud Platforms

- **[Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1)**: Supports AgentCore for production-ready agents, with features like session isolation and observability[&#91;6&#93;](#cite_note-aws-6)

- **[Google Cloud's Vertex AI](/index.php?title=Google_Cloud_Platform&action=edit&redlink=1)**: Available for enterprise deployments[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Developer Tools

- **[GitHub Copilot](/wiki/github_copilot)**: Public preview for Copilot Pro, Pro+, Business, and Enterprise subscribers[&#91;7&#93;](#cite_note-github-7)

- **Claude Code**: Includes checkpoints, refreshed terminal (version 2.0), native [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1) extension, context editing features and memory tools[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **Claude for Chrome**: Extension available to Max users[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **Claude Agent SDK**: Available in both [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1) and [Python](/index.php?title=Python&action=edit&redlink=1)[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Preview Features

The "Imagine with Claude" preview, which allows the model to generate real-time software such as websites directly in response to user prompts, is available to Max subscribers for five days from launch.[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Related Products

### Claude Agent SDK

Alongside Claude Sonnet 4.5, Anthropic released the Claude Agent SDK (formerly Claude Code SDK), which provides developers with the same infrastructure that powers [Claude Code](/wiki/claude_code). The SDK includes:[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Virtual machines for code execution

- Memory and context management systems

- Permission frameworks for agent autonomy

- Support for both [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1) and [Python](/index.php?title=Python&action=edit&redlink=1)

## Reception

Upon release, Claude Sonnet 4.5 was praised for its advancements in coding and agentic capabilities. Tech outlets and developer-focused publications described it as a notable leap in day-to-day coding and agentic workflows, while noting the competitive context with offerings from [OpenAI](/wiki/openai) and [Google](/index.php?title=Google&action=edit&redlink=1).[&#91;11&#93;](#cite_note-verge-11)[&#91;10&#93;](#cite_note-techcrunch-10)

Industry leaders praised the model's capabilities:

- Michael Truell, CEO of Cursor, stated it "represents state-of-the-art coding performance, specifically on longer horizon tasks"[&#91;10&#93;](#cite_note-techcrunch-10)

- Jeff Wang, CEO of Windsurf, described it as representing "a new generation of coding models"[&#91;10&#93;](#cite_note-techcrunch-10)

- The model received positive feedback from companies including [Canva](/index.php?title=Canva&action=edit&redlink=1), [Devin AI](/index.php?title=Devin_AI&action=edit&redlink=1), and others for its improved performance in production environments[&#91;1&#93;](#cite_note-anthropic-announce-1)

Early hands-on write-ups reported perceived improvements in speed, steerability, and reliability over Opus 4.1, especially inside Claude Code.[&#91;14&#93;](#cite_note-every-14) Some discussions on platforms like [Reddit](/index.php?title=Reddit&action=edit&redlink=1) pointed to early leaks on Anthropic's website, indicating high anticipation.[&#91;15&#93;](#cite_note-reddit-15)

Industry observers noted its competitive positioning against models like [OpenAI](/wiki/openai)'s [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1), with Anthropic's rapid iteration cycle highlighted.[&#91;4&#93;](#cite_note-cnbc-4) Some practitioner commentary pointed out that real-world coding performance can still vary by project and environment, a caveat common to code-capable LLMs.[&#91;16&#93;](#cite_note-et-16)

## Comparison to Other Models

Claude Sonnet 4.5 is part of the broader Claude 4 family, which includes:

- **[Claude Opus 4.1](/index.php?title=Claude_Opus_4.1&action=edit&redlink=1)**: Released in August 2025, positioned as the most powerful model for complex challenges[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **[Claude Opus 4](/index.php?title=Claude_Opus_4&action=edit&redlink=1)**: Released earlier in 2025[&#91;1&#93;](#cite_note-anthropic-announce-1)

- **[Claude Sonnet 4](/index.php?title=Claude_Sonnet_4&action=edit&redlink=1)**: The predecessor to Sonnet 4.5[&#91;1&#93;](#cite_note-anthropic-announce-1)

| Aspect | Sonnet 4.5 (2025) | Opus 4.1 / Prior (2024–2025) |
| --- | --- | --- |
| Long-horizon autonomy | ~30 hours continuous; ~11k LOC chat app[&#91;11&#93;](#cite_note-verge-11) | ~7 hours autonomous run[&#91;11&#93;](#cite_note-verge-11) |
| Positioning | "Best coding model" and strongest for complex agents[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;5&#93;](#cite_note-docs-whats-new-5) | Earlier flagship/general models |
| OSWorld benchmark | 61.4%[&#91;1&#93;](#cite_note-anthropic-announce-1) | 42.2% (Sonnet 4)[&#91;1&#93;](#cite_note-anthropic-announce-1) |
| Safety improvements | 60% improvement in alignment metrics[&#91;3&#93;](#cite_note-system-card-3) | Baseline |
| Context window | 200,000 tokens (1M in high-compute)[&#91;2&#93;](#cite_note-claude-page-2) | 200,000 tokens standard |
| Integrations at launch | Anthropic platforms; AWS Bedrock; GitHub Copilot; Chrome extension[&#91;6&#93;](#cite_note-aws-6)[&#91;7&#93;](#cite_note-github-7) | Anthropic platforms; ecosystem built over time |

The model competes with other frontier models including [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) from [OpenAI](/wiki/openai) and [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro from [Google DeepMind](/wiki/google_deepmind), often outperforming them on coding-specific benchmarks.[&#91;1&#93;](#cite_note-anthropic-announce-1)

## Limitations

Despite its capabilities, Claude Sonnet 4.5 has several limitations:

- Context window of 200,000 tokens may be insufficient for very large codebases[&#91;9&#93;](#cite_note-datacamp-9)

- The model cannot use browser storage APIs ([localStorage](/index.php?title=LocalStorage&action=edit&redlink=1), [sessionStorage](/index.php?title=SessionStorage&action=edit&redlink=1)) in artifacts[&#91;1&#93;](#cite_note-anthropic-announce-1)

- Extended thinking mode impacts [prompt caching](/index.php?title=Prompt_caching&action=edit&redlink=1) efficiency[&#91;5&#93;](#cite_note-docs-whats-new-5)

- Knowledge cutoff date of January 2025 for training data[&#91;3&#93;](#cite_note-system-card-3)

- Parameter count and detailed architecture remain undisclosed[&#91;3&#93;](#cite_note-system-card-3)

## See also

- [Anthropic](/wiki/anthropic)

- [Claude (AI assistant)](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [AI alignment](/index.php?title=AI_alignment&action=edit&redlink=1)

- [SWE-bench](/wiki/swe-bench)

- [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1)

- [GitHub Copilot](/wiki/github_copilot)

- [Multimodal learning](/index.php?title=Multimodal_learning&action=edit&redlink=1)

- [AI agents](/index.php?title=AI_agents&action=edit&redlink=1)

- [Computer use](/index.php?title=Computer_use&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-anthropic-announce_1-0) [1.01](#cite_ref-anthropic-announce_1-1) [1.02](#cite_ref-anthropic-announce_1-2) [1.03](#cite_ref-anthropic-announce_1-3) [1.04](#cite_ref-anthropic-announce_1-4) [1.05](#cite_ref-anthropic-announce_1-5) [1.06](#cite_ref-anthropic-announce_1-6) [1.07](#cite_ref-anthropic-announce_1-7) [1.08](#cite_ref-anthropic-announce_1-8) [1.09](#cite_ref-anthropic-announce_1-9) [1.10](#cite_ref-anthropic-announce_1-10) [1.11](#cite_ref-anthropic-announce_1-11) [1.12](#cite_ref-anthropic-announce_1-12) [1.13](#cite_ref-anthropic-announce_1-13) [1.14](#cite_ref-anthropic-announce_1-14) [1.15](#cite_ref-anthropic-announce_1-15) [1.16](#cite_ref-anthropic-announce_1-16) [1.17](#cite_ref-anthropic-announce_1-17) [1.18](#cite_ref-anthropic-announce_1-18) [1.19](#cite_ref-anthropic-announce_1-19) [1.20](#cite_ref-anthropic-announce_1-20) [1.21](#cite_ref-anthropic-announce_1-21) [1.22](#cite_ref-anthropic-announce_1-22) [1.23](#cite_ref-anthropic-announce_1-23) [1.24](#cite_ref-anthropic-announce_1-24) [1.25](#cite_ref-anthropic-announce_1-25) [1.26](#cite_ref-anthropic-announce_1-26) [1.27](#cite_ref-anthropic-announce_1-27) [1.28](#cite_ref-anthropic-announce_1-28) [1.29](#cite_ref-anthropic-announce_1-29) [1.30](#cite_ref-anthropic-announce_1-30) [1.31](#cite_ref-anthropic-announce_1-31) [1.32](#cite_ref-anthropic-announce_1-32) [1.33](#cite_ref-anthropic-announce_1-33) [1.34](#cite_ref-anthropic-announce_1-34) [1.35](#cite_ref-anthropic-announce_1-35) [1.36](#cite_ref-anthropic-announce_1-36) [1.37](#cite_ref-anthropic-announce_1-37) [1.38](#cite_ref-anthropic-announce_1-38) [1.39](#cite_ref-anthropic-announce_1-39) [1.40](#cite_ref-anthropic-announce_1-40) [1.41](#cite_ref-anthropic-announce_1-41) [1.42](#cite_ref-anthropic-announce_1-42) [1.43](#cite_ref-anthropic-announce_1-43) [1.44](#cite_ref-anthropic-announce_1-44) [1.45](#cite_ref-anthropic-announce_1-45) [1.46](#cite_ref-anthropic-announce_1-46) [1.47](#cite_ref-anthropic-announce_1-47) [1.48](#cite_ref-anthropic-announce_1-48) [1.49](#cite_ref-anthropic-announce_1-49) Anthropic. (2025, September 29). "Introducing Claude Sonnet 4.5". Retrieved from [https://www.anthropic.com/news/claude-sonnet-4-5](https://www.anthropic.com/news/claude-sonnet-4-5)

2. ↑ [2.0](#cite_ref-claude-page_2-0) [2.1](#cite_ref-claude-page_2-1) [2.2](#cite_ref-claude-page_2-2) [2.3](#cite_ref-claude-page_2-3) [2.4](#cite_ref-claude-page_2-4) [2.5](#cite_ref-claude-page_2-5) Anthropic. "Claude Sonnet 4.5". Retrieved 30 September 2025 from [https://www.anthropic.com/claude/sonnet](https://www.anthropic.com/claude/sonnet)

3. ↑ [3.00](#cite_ref-system-card_3-0) [3.01](#cite_ref-system-card_3-1) [3.02](#cite_ref-system-card_3-2) [3.03](#cite_ref-system-card_3-3) [3.04](#cite_ref-system-card_3-4) [3.05](#cite_ref-system-card_3-5) [3.06](#cite_ref-system-card_3-6) [3.07](#cite_ref-system-card_3-7) [3.08](#cite_ref-system-card_3-8) [3.09](#cite_ref-system-card_3-9) [3.10](#cite_ref-system-card_3-10) [3.11](#cite_ref-system-card_3-11) Anthropic. (2025, September). "System Card: Claude Sonnet 4.5". Retrieved from [https://www.anthropic.com/claude-sonnet-4-5-system-card](https://www.anthropic.com/claude-sonnet-4-5-system-card)

4. ↑ [4.0](#cite_ref-cnbc_4-0) [4.1](#cite_ref-cnbc_4-1) [4.2](#cite_ref-cnbc_4-2) CNBC. (2025, September 29). "Anthropic launches Claude Sonnet 4.5, its latest AI model". Retrieved from [https://www.cnbc.com/2025/09/29/anthropic-claude-ai-sonnet-4-5.html](https://www.cnbc.com/2025/09/29/anthropic-claude-ai-sonnet-4-5.html)

5. ↑ [5.0](#cite_ref-docs-whats-new_5-0) [5.1](#cite_ref-docs-whats-new_5-1) [5.2](#cite_ref-docs-whats-new_5-2) [5.3](#cite_ref-docs-whats-new_5-3) [5.4](#cite_ref-docs-whats-new_5-4) [5.5](#cite_ref-docs-whats-new_5-5) Anthropic Docs. "What's new in Claude Sonnet 4.5". Retrieved 30 September 2025 from [https://docs.claude.com/en/docs/about-claude/models/whats-new-sonnet-4-5](https://docs.claude.com/en/docs/about-claude/models/whats-new-sonnet-4-5)

6. ↑ [6.0](#cite_ref-aws_6-0) [6.1](#cite_ref-aws_6-1) [6.2](#cite_ref-aws_6-2) [6.3](#cite_ref-aws_6-3) [6.4](#cite_ref-aws_6-4) [6.5](#cite_ref-aws_6-5) [6.6](#cite_ref-aws_6-6) Amazon Web Services. (2025, September 29). "Introducing Claude Sonnet 4.5 in Amazon Bedrock: Anthropic's most intelligent model, best for coding and complex agents". AWS Blog. Retrieved from [https://aws.amazon.com/blogs/aws/introducing-claude-sonnet-4-5-in-amazon-bedrock-anthropics-most-intelligent-model-best-for-coding-and-complex-agents/](https://aws.amazon.com/blogs/aws/introducing-claude-sonnet-4-5-in-amazon-bedrock-anthropics-most-intelligent-model-best-for-coding-and-complex-agents/)

7. ↑ [7.0](#cite_ref-github_7-0) [7.1](#cite_ref-github_7-1) [7.2](#cite_ref-github_7-2) GitHub. (2025, September 29). "Anthropic Claude Sonnet 4.5 is in public preview for GitHub Copilot". GitHub Changelog. Retrieved from [https://github.blog/changelog/2025-09-29-anthropic-claude-sonnet-4-5-is-in-public-preview-for-github-copilot/](https://github.blog/changelog/2025-09-29-anthropic-claude-sonnet-4-5-is-in-public-preview-for-github-copilot/)

8. ↑ [8.0](#cite_ref-medium-benchmarks_8-0) [8.1](#cite_ref-medium-benchmarks_8-1) [8.2](#cite_ref-medium-benchmarks_8-2) Njuguna, E. (2025, September). "Claude Sonnet 4.5 Shatters AI Benchmarks". Medium. Cite error: Invalid `<ref>` tag; name "medium-benchmarks" defined multiple times with different content

9. ↑ [9.0](#cite_ref-datacamp_9-0) [9.1](#cite_ref-datacamp_9-1) DataCamp. (2025, May 23). "Claude 4: Tests, Features, Access, Benchmarks & More". Cite error: Invalid `<ref>` tag; name "datacamp" defined multiple times with different content

10. ↑ [10.0](#cite_ref-techcrunch_10-0) [10.1](#cite_ref-techcrunch_10-1) [10.2](#cite_ref-techcrunch_10-2) [10.3](#cite_ref-techcrunch_10-3) TechCrunch. (2025, September 29). "Anthropic launches Claude Sonnet 4.5, its best AI model for coding". Cite error: Invalid `<ref>` tag; name "techcrunch" defined multiple times with different content

11. ↑ [11.0](#cite_ref-verge_11-0) [11.1](#cite_ref-verge_11-1) [11.2](#cite_ref-verge_11-2) [11.3](#cite_ref-verge_11-3) [11.4](#cite_ref-verge_11-4) Jay Peters (29 September 2025). "Anthropic releases Claude Sonnet 4.5 in latest bid for AI agents and coding supremacy". The Verge*. Retrieved 30 September 2025 from [https://www.theverge.com/ai-artificial-intelligence/787524/anthropic-releases-claude-sonnet-4-5-in-latest-bid-for-ai-agents-and-coding-supremacy](https://www.theverge.com/ai-artificial-intelligence/787524/anthropic-releases-claude-sonnet-4-5-in-latest-bid-for-ai-agents-and-coding-supremacy)

12. [↑](#cite_ref-axios_12-0) Axios (29 September 2025). "Anthropic's latest Claude model can work for 30 hours on its own". Retrieved 30 September 2025 from [https://www.axios.com/2025/09/29/anthropic-claude-sonnet-coding-agent](https://www.axios.com/2025/09/29/anthropic-claude-sonnet-coding-agent)

13. [↑](#cite_ref-cyberscoop_13-0) Derek B. Johnson (30 September 2025). "Anthropic touts safety, security improvements in Claude Sonnet 4.5". *CyberScoop*. Retrieved 30 September 2025 from [https://cyberscoop.com/anthrophic-sonnet-4-5-security-safety-testing/](https://cyberscoop.com/anthrophic-sonnet-4-5-security-safety-testing/)

14. [↑](#cite_ref-every_14-0) Dan Shipper (29 September 2025). "Vibe Check: Claude Sonnet 4.5". *Every*. Retrieved 30 September 2025 from [https://every.to/vibe-check/vibe-check-claude-sonnet-4-5](https://every.to/vibe-check/vibe-check-claude-sonnet-4-5)

15. [↑](#cite_ref-reddit_15-0) Reddit (2025). "Claude Sonnet 4.5 leak on Anthropic website : r/ClaudeAI". Retrieved from [https://www.reddit.com/r/ClaudeAI/comments/1ntme8h/claude_sonnet_45_leak_on_anthropic_website_w/](https://www.reddit.com/r/ClaudeAI/comments/1ntme8h/claude_sonnet_45_leak_on_anthropic_website_w/)

16. [↑](#cite_ref-et_16-0) The Economic Times (29 September 2025). "Claude Sonnet 4.5 launched by Anthropic: New features, upgrades, free access and more". Retrieved 30 September 2025 from [https://m.economictimes.com/news/new-updates/claude-sonnet-4-5-launched-by-anthropic-new-features-upgrades-free-access-and-more/articleshow/124228124.cms](https://m.economictimes.com/news/new-updates/claude-sonnet-4-5-launched-by-anthropic-new-features-upgrades-free-access-and-more/articleshow/124228124.cms)

## External links

- [Official Claude website](https://claude.ai)

- [Official announcement](https://www.anthropic.com/news/claude-sonnet-4-5)

- [Claude Documentation](https://docs.claude.com)

- [Claude Agent SDK on GitHub](https://github.com/anthropics/claude-agent-sdk)

- [Claude Sonnet 4.5 System Card](https://www.anthropic.com/claude-sonnet-4-5-system-card)