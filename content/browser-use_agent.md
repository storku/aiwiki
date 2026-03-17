---
title: "Browser-use agent"
slug: "browser-use_agent"
categories:
  - "Artificial_intelligence_applications"
  - "Web_automation"
  - "Browser_automation"
  - "Software_agents"
  - "Natural_language_processing_software"
  - "Human-computer_interaction"
  - "Autonomous_agents"
  - "Large_language_models"
  - "2024_software"
  - "2025_software"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

A **Browser-Use Agent** (**BUA**), also known as an **autonomous web agent** or **LLM-based browser agent**, is a type of [artificial intelligence](/wiki/artificial_intelligence) [software agent](/index.php?title=Software_agent&action=edit&redlink=1) designed to operate a standard [web browser](/index.php?title=Web_browser&action=edit&redlink=1) through its [graphical user interface](/index.php?title=Graphical_user_interface&action=edit&redlink=1) (GUI) to accomplish goals specified by users in [natural language](/index.php?title=Natural_language&action=edit&redlink=1).[&#91;1&#93;](#cite_note-WebArena-1)[&#91;2&#93;](#cite_note-openai-operator-2) Unlike traditional [web scraping](/index.php?title=Web_scraping&action=edit&redlink=1), [API](/index.php?title=API&action=edit&redlink=1)-based approaches, or simple automation scripts that follow predefined rules, BUAs leverage the reasoning and understanding capabilities of [large language models](/wiki/large_language_model) (LLMs) combined with browser automation technologies to dynamically perceive web page content, plan sequences of actions, and execute them to complete complex, multi-step tasks across diverse websites without bespoke integration.[&#91;3&#93;](#cite_note-Mind2Web-3)[&#91;4&#93;](#cite_note-browser-use-github-4)

These agents represent a significant advancement toward creating general-purpose digital assistants that can handle real-world web-based tasks, such as booking travel, managing online shopping, conducting detailed information searches, or completing data entry, without direct human intervention for each step.[&#91;5&#93;](#cite_note-OpenAIWebGPT-5)

## Terminology and Definition

The term "browser-use agent" is used in research and industry to describe agents that complete tasks by controlling a web browser, rather than calling site-specific APIs.[&#91;6&#93;](#cite_note-vb-browseruse-6) It encompasses systems that:

- Render or inspect webpages through visual or DOM-based perception

- Plan multi-step procedures using LLM reasoning

- Execute low-level browser actions (click, type, select, navigate) to achieve goals such as booking, data extraction, or account management[&#91;7&#93;](#cite_note-verge-operator-7)

BUAs are distinguished from [computer-use agents](/wiki/computer-use_agent) (CUAs), which operate in broader desktop environments beyond browsers, by their focus on web-specific interactions within browser instances.[&#91;8&#93;](#cite_note-openai-cua-8)

## History

The concept of browser-use agents emerged from the convergence of advances in [large language models](/wiki/large_language_model) and web automation technologies.

### Early Development (2021-2023)

- **2021**: OpenAI's WebGPT demonstrated early browser-assisted question-answering with human feedback[&#91;5&#93;](#cite_note-OpenAIWebGPT-5)

- **2022**: Adept AI introduced ACT-1, a model trained to use common software tools including web browsers[&#91;9&#93;](#cite_note-AdeptACT1-9)

- **2023**: Academic benchmarks WebArena and Mind2Web established standardized evaluation frameworks[&#91;1&#93;](#cite_note-WebArena-1)[&#91;3&#93;](#cite_note-Mind2Web-3)

### Modern Era (2024-2025)

- **October 2024**: [Anthropic](/wiki/anthropic) released Computer Use feature for Claude models[&#91;10&#93;](#cite_note-anthropic-computer-use-10)

- **December 2024**: [Google](/index.php?title=Google&action=edit&redlink=1) DeepMind unveiled Project Mariner built on Gemini 2.0[&#91;11&#93;](#cite_note-datacamp-operator-11)

- **January 2025**:
OpenAI announced Operator on January 23, powered by the [Computer-Using Agent](/wiki/computer-using_agent) (CUA) model[&#91;2&#93;](#cite_note-openai-operator-2)[&#91;8&#93;](#cite_note-openai-cua-8)

- Browser-Use open-source library reached 21,000+ GitHub stars[&#91;12&#93;](#cite_note-infoworld-browser-use-12)

- OpenAI later integrated Operator capabilities into ChatGPT Agent mode, with the standalone operator.chatgpt.com site scheduled for deprecation[&#91;13&#93;](#cite_note-chatgpt-agent-13)

## Rationale

Many real-world workflows remain locked behind human-oriented web interfaces. BUAs aim to generalize across diverse sites without bespoke integration by:[&#91;14&#93;](#cite_note-browsegym-arxiv-14)

1. Interpreting on-page content and structure through perception systems

2. Mapping high-level instructions to concrete browser interactions

3. Adapting to website changes without reprogramming

4. Reducing fragmented evaluation through unified testbeds

## Architecture and Core Components

A BUA's operation follows a perception-reasoning-action loop where it perceives the state of a web page, reasons about the next best action toward its goal, and executes that action. This cycle repeats until task completion or failure determination.[&#91;15&#93;](#cite_note-AgentTuning-15)

| Component | Description | Technologies | Implementation Details |
| --- | --- | --- | --- |
| **Perception Layer** | Understands content and layout of current web page | [DOM](/index.php?title=Document_Object_Model&action=edit&redlink=1) parsing, [CSS](/index.php?title=CSS&action=edit&redlink=1) selectors, [XPath](/index.php?title=XPath&action=edit&redlink=1), Accessibility Tree APIs, [Vision Models](/index.php?title=Vision_transformer&action=edit&redlink=1) | • DOM extraction for interactive elements**• Screenshot processing (base64 encoding)
• Visual analysis for layout understanding
• Text extraction and semantic parsing |
| Reasoning & Planning Layer** | Core decision-making powered by LLMs | [GPT-4](/wiki/gpt-4), [Claude](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1), [Gemini](/index.php?title=Gemini_(chatbot)&action=edit&redlink=1), [Llama](/index.php?title=Llama_(Meta)&action=edit&redlink=1), [Chain-of-thought prompting](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1), [ReAct framework](/index.php?title=ReAct_(prompting)&action=edit&redlink=1) | • Task decomposition into sub-goals**• Multi-step action planning
• Context management across pages
• Error detection and recovery strategies |
| Action Execution Layer** | Translates abstract actions into browser commands | [Selenium](/index.php?title=Selenium_(software)&action=edit&redlink=1), [Playwright](/index.php?title=Playwright&action=edit&redlink=1), [Puppeteer](/index.php?title=Puppeteer&action=edit&redlink=1), Browser [Extensions](/index.php?title=Browser_extension&action=edit&redlink=1), Chrome DevTools Protocol | • Low-level control (click, type, scroll)**• Multi-browser support
• Headless and visible modes
• Session management |
| Memory Management** | Maintains state and context | Vector databases, Session storage, [RL](/wiki/reinforcement_learning) memories | • Working memory for active tasks**• Persistent memory across sessions
• Semantic memory for knowledge
• Episodic memory for action history |
| Safety & Monitoring** | Ensures safe operation and compliance | Refusal mechanisms, Audit logging, Permission systems | • Prompt injection prevention**• Sensitive action gates
• User approval workflows
• Activity logging and rollback |

## Technical Implementation

### Browser Automation Frameworks

| Framework | Primary Use Case | Advantages | Limitations | BUA Adoption |
| --- | --- | --- | --- | --- |
| [Playwright](/index.php?title=Playwright&action=edit&redlink=1) | Cross-browser automation | Fast, reliable, modern API, built-in waiting | Newer ecosystem | Preferred for most BUAs[&#91;16&#93;](#cite_note-dzone-browser-use-16) |
| [Selenium](/index.php?title=Selenium&action=edit&redlink=1) | Traditional web testing | Mature, wide language support | Slower, more complex setup | Legacy support |
| [Puppeteer](/index.php?title=Puppeteer&action=edit&redlink=1) | Chrome/Chromium control | Direct CDP access, lightweight | Chrome-only | Specialized use cases |
| CDP (Chrome DevTools Protocol) | Low-level browser control | Maximum control, performance | Complex, browser-specific | Advanced implementations |

### Processing Modes

| Mode | Description | Token Usage | Speed | Accuracy | Best For |
| --- | --- | --- | --- | --- | --- |
| Snapshot Mode** | Uses accessibility tree for element identification | Low (500-2K) | Fast (<1s) | High for simple pages | Form filling, standard layouts |
| **Vision Mode** | Processes screenshots for visual understanding | High (5K-15K) | Slow (2-5s) | High for complex layouts | Dynamic content, visual elements |
| **Hybrid Mode** | Combines DOM parsing with visual processing | Medium (2K-8K) | Medium (1-3s) | Highest overall | General-purpose automation |
| **Streaming Mode** | Continuous observation and action | Very High | Real-time | Variable | Interactive applications |

### Language Model Integration

BUAs support various LLM providers with different capabilities:[&#91;17&#93;](#cite_note-adasci-guide-17)

| Provider | Models | Vision Support | Cost (per 1M tokens) | Latency | Best Use Case |
| --- | --- | --- | --- | --- | --- |
| [OpenAI](/wiki/openai) | GPT-4o, GPT-4-turbo | Yes | $5-15 | Low | Production systems |
| [Anthropic](/wiki/anthropic) | Claude 3.5 Sonnet, Claude 3 Opus | Yes | $3-15 | Low | Complex reasoning |
| [Google](/index.php?title=Google&action=edit&redlink=1) | Gemini 1.5 Pro, Gemini 2.0 | Yes | $3.5-7 | Low | Multimodal tasks |
| Open Source | Llama 3, Mistral, Qwen | Limited | $0.5-2 | Variable | Cost-sensitive applications |

## Performance Benchmarks

### Standardized Evaluation Frameworks

| Benchmark | Focus Area | Task Count | Characteristics | Key Metrics |
| --- | --- | --- | --- | --- |
| **[WebArena](/index.php?title=WebArena&action=edit&redlink=1)** | Realistic multi-site environment | 812 tasks | Self-hostable sites across e-commerce, CMS, social platforms; execution-based evaluation | Task success rate, efficiency score[&#91;1&#93;](#cite_note-WebArena-1) |
| **[Mind2Web](/index.php?title=Mind2Web&action=edit&redlink=1)** | Cross-website generalization | 2,350 tasks | 137 websites, real-world task diversity, action sequence annotation | Element accuracy, action F1 score[&#91;3&#93;](#cite_note-Mind2Web-3) |
| **[WebVoyager](/index.php?title=WebVoyager&action=edit&redlink=1)** | Live website interaction | 643 tasks | Amazon, GitHub, Google Maps, real-time execution | End-to-end success rate[&#91;8&#93;](#cite_note-openai-cua-8) |
| **[VisualWebArena](/index.php?title=VisualWebArena&action=edit&redlink=1)** | Multimodal/visual tasks | 910 tasks | Image-heavy tasks, visual grounding requirements | Visual element accuracy[&#91;18&#93;](#cite_note-visualwebarena-18) |
| **[BrowserGym](/index.php?title=BrowserGym&action=edit&redlink=1)** | Unified ecosystem | 5,000+ tasks | Standardized obs/action spaces, cross-benchmark evaluation | Aggregate performance score[&#91;14&#93;](#cite_note-browsegym-arxiv-14) |
| **[WebShop](/index.php?title=WebShop&action=edit&redlink=1)** | E-commerce navigation | 12,087 products | Product search and selection, attribute matching | Purchase success rate, reward score[&#91;19&#93;](#cite_note-WebShop-19) |
| **[OSWorld](/index.php?title=OSWorld&action=edit&redlink=1)** | Full OS control | 369 tasks | Ubuntu, Windows, macOS environments | Cross-platform success rate[&#91;8&#93;](#cite_note-openai-cua-8) |

### Comparative Performance (2025)

| Agent/Model | WebArena | WebVoyager | Mind2Web | OSWorld | Average |
| --- | --- | --- | --- | --- | --- |
| **Human Baseline** | 78.2% | 90.0% | 85.3% | 72.4% | 81.5% |
| **Browser-Use (Open Source)** | 51.2% | 89.1% | 73.4% | N/A | 71.2% |
| **CUA (OpenAI)** | 58.1% | 87.0% | 76.2% | 38.1% | 64.9% |
| **Computer Use (Anthropic)** | 45.3% | 56.0% | 62.1% | 22.0% | 46.4% |
| **Mariner (Google)** | 52.4% | 83.5% | 71.3% | N/A | 69.1% |

## Major Implementations

### [OpenAI Operator](/index.php?title=OpenAI_Operator&action=edit&redlink=1)

Released January 23, 2025, Operator is powered by the Computer-Using Agent (CUA) model, combining [GPT-4o](/wiki/gpt-4)'s vision capabilities with [reinforcement learning](/wiki/reinforcement_learning):[&#91;2&#93;](#cite_note-openai-operator-2)[&#91;8&#93;](#cite_note-openai-cua-8)

- **Architecture**: Iterative perception-reasoning-action loop with self-correction

- **Safety Features**: Refusal mechanisms, user approval gates for sensitive actions

- **Performance**: Industry-leading scores on WebArena (58.1%) and WebVoyager (87%)

- **Availability**: Initially required ChatGPT Pro subscription; later integrated into ChatGPT Agent mode[&#91;13&#93;](#cite_note-chatgpt-agent-13)

### Browser-Use Library

An open-source [Python](/index.php?title=Python&action=edit&redlink=1) library enabling LLM-powered browser interaction via natural language:[&#91;4&#93;](#cite_note-browser-use-github-4)

- **Statistics**: 21,000+ GitHub stars, 1,000+ forks (as of January 2025)

- **Features**: Multi-model support, memory-enabled workflows, cloud/local execution

- **License**: MIT License

- **Integration**: Supports OpenAI, Anthropic, Google, and open-source models

### Anthropic Computer Use

Released October 2024, enables [Claude](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1) models to interact with computer interfaces:[&#91;10&#93;](#cite_note-anthropic-computer-use-10)

- **Approach**: Visual perception and simulated input

- **Models**: Claude 3.5 Sonnet optimized for computer use

- **Applications**: Desktop and web automation

### Google Project Mariner

Experimental agent from [Google DeepMind](/wiki/google_deepmind) for autonomous web navigation:[&#91;11&#93;](#cite_note-datacamp-operator-11)

- **Foundation**: Built on Gemini 2.0

- **Focus**: Research-oriented, multimodal understanding

- **Performance**: 83.5% on WebVoyager benchmark

## Applications and Use Cases

### Enterprise Automation

- **Business Process Automation**: Replacing traditional [RPA](/index.php?title=Robotic_Process_Automation&action=edit&redlink=1) with adaptive agents

- **Data Integration**: Cross-platform data extraction and synchronization

- **Compliance Monitoring**: Automated regulatory checks and reporting

- **Supply Chain Management**: Vendor portal navigation and order processing

### E-Commerce and Services

- **Price Monitoring**: Real-time competitor analysis and dynamic pricing

- **Inventory Management**: Multi-marketplace stock synchronization

- **Customer Service**: Automated order tracking and status updates

- **Review Aggregation**: Sentiment analysis across platforms

### Research and Analysis

- **Academic Research**: Literature review automation, citation gathering

- **Market Intelligence**: Trend analysis, competitor monitoring

- **Financial Analysis**: Earnings report extraction, market data compilation

- **Patent Research**: Prior art searches, classification analysis

### Quality Assurance

- **Automated Testing**: End-to-end user journey validation[&#91;20&#93;](#cite_note-ministry-testing-20)

- **Accessibility Testing**: [WCAG](/index.php?title=WCAG&action=edit&redlink=1) compliance verification

- **Cross-browser Testing**: Compatibility validation across platforms

- **Performance Testing**: Load testing, response time measurement

### Personal Productivity

- **Travel Planning**: Multi-site booking coordination

- **Job Applications**: Resume parsing, application submission

- **Content Aggregation**: News curation, research compilation

- **Social Media Management**: Cross-platform posting and monitoring

## Challenges and Limitations

### Technical Challenges

- **Dynamic Content Handling**:
Modern [SPAs](/index.php?title=Single-page_application&action=edit&redlink=1) with [AJAX](/index.php?title=AJAX&action=edit&redlink=1) pose navigation challenges

- Asynchronous loading requires sophisticated waiting strategies

- Virtual scrolling and lazy loading complicate element discovery[&#91;21&#93;](#cite_note-skyvern-webbench-21)

- **Element Identification**:
[Shadow DOM](/index.php?title=Shadow_DOM&action=edit&redlink=1) and [iframes](/index.php?title=Iframe&action=edit&redlink=1) create isolation barriers

- Dynamic ID generation prevents reliable selectors

- Similar elements require disambiguation strategies[&#91;22&#93;](#cite_note-browser-use-sota-22)

- **State Management**:
Session persistence across page transitions

- Handling authentication and [2FA](/index.php?title=Two-factor_authentication&action=edit&redlink=1)

- Recovery from unexpected logouts or timeouts[&#91;23&#93;](#cite_note-openai-sessions-23)

- **Error Recovery**:
[CAPTCHA](/index.php?title=CAPTCHA&action=edit&redlink=1) solving limitations

- Popup and modal dialog handling

- Network failure and retry logic[&#91;24&#93;](#cite_note-skyvern-github-24)

### Performance Limitations

| Issue | Impact | Current Solutions | Future Approaches |
| --- | --- | --- | --- |
| LLM Inference Latency | 2-5 second delays per action | Caching, batching | Edge deployment, model optimization |
| Token Consumption | $0.10-1.00 per complex task | Efficient prompting, mode selection | Specialized models, compression |
| Memory Limitations | Context window constraints | Summarization, pruning | Extended context models |
| Reliability | 60-90% success rates | Retry logic, fallbacks | Reinforcement learning, self-improvement |

### Safety, Security, and Ethical Concerns

- **Security Risks**:[&#91;8&#93;](#cite_note-openai-cua-8)
[Prompt injection](/wiki/prompt_injection) attacks from malicious websites

- Credential theft through compromised agents

- Cross-site scripting (XSS) vulnerabilities

- Data exfiltration risks

- **Privacy Concerns**:
Processing of sensitive personal information

- Screenshot capture of private data

- Audit trail storage and retention

- **Misuse Prevention**:
Automated spam and harassment potential

- Unauthorized web scraping at scale

- Terms of service violations

- Legal compliance challenges

## Notable Research Projects

### Academic Initiatives

- **[WebGPT](/index.php?title=WebGPT&action=edit&redlink=1) ([OpenAI](/wiki/openai))**: Pioneering work on browser-assisted question-answering with human feedback, establishing foundations for modern BUAs[&#91;5&#93;](#cite_note-OpenAIWebGPT-5)

- **[Mind2Web](/index.php?title=Mind2Web&action=edit&redlink=1) (OSU & [Allen AI](/index.php?title=Allen_AI&action=edit&redlink=1))**: Large-scale dataset and framework for developing generalist web agents, testing cross-website generalization[&#91;3&#93;](#cite_note-Mind2Web-3)

- **[WebArena](/index.php?title=WebArena&action=edit&redlink=1) (CMU)**: Realistic benchmark environment with self-hosted websites for reproducible agent evaluation[&#91;1&#93;](#cite_note-WebArena-1)

- **[AgentTuning](/index.php?title=AgentTuning&action=edit&redlink=1)**: Research on enabling generalized agent abilities through fine-tuning LLMs for web tasks[&#91;15&#93;](#cite_note-AgentTuning-15)

### Industry Research

- **[Adept ACT-1](/index.php?title=Adept_ACT-1&action=edit&redlink=1)**: Universal action transformer for software interface control[&#91;9&#93;](#cite_note-AdeptACT1-9)

- **[Google Multimodal Web Navigation](/index.php?title=Google_Multimodal_Web_Navigation&action=edit&redlink=1)**: Research on instruction-finetuned foundation models for web navigation[&#91;25&#93;](#cite_note-GoogleWebAgent-25)

### Open Source Frameworks

- **[LangChain](/wiki/langchain)/[LlamaIndex](/index.php?title=LlamaIndex&action=edit&redlink=1)**: Provide building blocks for BUA development[&#91;26&#93;](#cite_note-langchain-agents-26)

- **[BrowserGym](/index.php?title=BrowserGym&action=edit&redlink=1)**: Unified ecosystem for web agent research and evaluation[&#91;14&#93;](#cite_note-browsegym-arxiv-14)

- **[Skyvern](/index.php?title=Skyvern&action=edit&redlink=1)**: Open-source browser automation with LLMs and computer vision[&#91;24&#93;](#cite_note-skyvern-github-24)

## Future Directions

### Technical Developments

- **Enhanced Perception**:
Perception tokens for improved visual reasoning[&#91;27&#93;](#cite_note-arxiv-perception-27)

- 3D understanding of page layouts

- Video comprehension for dynamic content

- **Improved Planning**:
Hierarchical task decomposition

- Long-horizon reasoning capabilities

- Multi-objective optimization

- **Self-Improvement**:
Online learning from execution feedback

- Automated test generation and validation

- Self-healing adaptation to website changes[&#91;20&#93;](#cite_note-ministry-testing-20)

### Industry Adoption Trajectory

- **2025-2026**: Early adoption in QA and testing

- **2026-2027**: Enterprise RPA replacement begins

- **2027-2028**: Consumer-facing agent assistants

- **2028-2030**: Ubiquitous web automation

### Emerging Standards and Protocols

- Development of agent-specific web protocols

- Standardized safety and permission frameworks

- Industry benchmarks for reliability certification

- Regulatory compliance frameworks

## Comparison with Related Technologies

| Aspect | Browser-Use Agent (BUA) | Computer-Use Agent (CUA) | Traditional RPA | Web Scraping |
| --- | --- | --- | --- | --- |
| **Scope** | Web browsers | Full desktop OS | Predefined workflows | Data extraction only |
| **Adaptability** | High (LLM-based) | High (LLM-based) | Low (scripted) | Low (rule-based) |
| **Setup Complexity** | Medium | High | High | Low |
| **Maintenance** | Self-adapting | Self-adapting | Frequent updates needed | Regular updates needed |
| **Cost** | $0.10-1.00/task | $0.50-2.00/task | High initial, low per-task | Low |
| **Use Cases** | General web automation | Any desktop application | Repetitive business processes | Data collection |
| **Error Handling** | Intelligent recovery | Intelligent recovery | Basic retry logic | Minimal |

## See also

- [Artificial intelligence](/wiki/artificial_intelligence)

- [Large language model](/wiki/large_language_model)

- [Web scraping](/index.php?title=Web_scraping&action=edit&redlink=1)

- [Robotic Process Automation](/index.php?title=Robotic_Process_Automation&action=edit&redlink=1)

- [Selenium (software)](/index.php?title=Selenium_(software)&action=edit&redlink=1)

- [Playwright (software)](/index.php?title=Playwright_(software)&action=edit&redlink=1)

- [Software agent](/index.php?title=Software_agent&action=edit&redlink=1)

- [Computer vision](/wiki/computer_vision)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Reinforcement learning](/wiki/reinforcement_learning)

- [Human-computer interaction](/index.php?title=Human-computer_interaction&action=edit&redlink=1)

- [Web automation](/index.php?title=Web_automation&action=edit&redlink=1)

- [Autonomous agent](/index.php?title=Autonomous_agent&action=edit&redlink=1)

- [Prompt engineering](/wiki/prompt_engineering)

- [Chain-of-thought prompting](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-WebArena_1-0) [1.1](#cite_ref-WebArena_1-1) [1.2](#cite_ref-WebArena_1-2) [1.3](#cite_ref-WebArena_1-3) Zhou, Tianbao et al. (2023). "WebArena: A Realistic Web Environment for Building Autonomous Agents." arXiv preprint arXiv:2307.13854. Retrieved from [https://arxiv.org/abs/2307.13854](https://arxiv.org/abs/2307.13854)

2. ↑ [2.0](#cite_ref-openai-operator_2-0) [2.1](#cite_ref-openai-operator_2-1) [2.2](#cite_ref-openai-operator_2-2) OpenAI. (2025). "Introducing Operator." Retrieved from [https://openai.com/index/introducing-operator/](https://openai.com/index/introducing-operator/)

3. ↑ [3.0](#cite_ref-Mind2Web_3-0) [3.1](#cite_ref-Mind2Web_3-1) [3.2](#cite_ref-Mind2Web_3-2) [3.3](#cite_ref-Mind2Web_3-3) Deng, Xiang et al. (2023). "Mind2Web: Towards a Generalist Agent for the Web." arXiv preprint arXiv:2306.06070. Retrieved from [https://arxiv.org/abs/2306.06070](https://arxiv.org/abs/2306.06070)

4. ↑ [4.0](#cite_ref-browser-use-github_4-0) [4.1](#cite_ref-browser-use-github_4-1) Browser-Use Team. (2025). "Browser-Use: Make websites accessible for AI agents." GitHub. Retrieved from [https://github.com/browser-use/browser-use](https://github.com/browser-use/browser-use)

5. ↑ [5.0](#cite_ref-OpenAIWebGPT_5-0) [5.1](#cite_ref-OpenAIWebGPT_5-1) [5.2](#cite_ref-OpenAIWebGPT_5-2) Nakano, Reiichiro et al. (2021). "WebGPT: Browser-assisted question-answering with human feedback." arXiv preprint arXiv:2112.09332. Retrieved from [https://arxiv.org/abs/2112.09332](https://arxiv.org/abs/2112.09332)

6. [↑](#cite_ref-vb-browseruse_6-0) VentureBeat. (2025). "The rise of browser-use agents: Why Convergence's Proxy is beating OpenAI's Operator." Retrieved from industry sources

7. [↑](#cite_ref-verge-operator_7-0) The Verge. (2025). "OpenAI's new Operator AI agent can do things on the web for you." Retrieved from [https://www.theverge.com/2025/1/23/operator-openai](https://www.theverge.com/2025/1/23/operator-openai)

8. ↑ [8.0](#cite_ref-openai-cua_8-0) [8.1](#cite_ref-openai-cua_8-1) [8.2](#cite_ref-openai-cua_8-2) [8.3](#cite_ref-openai-cua_8-3) [8.4](#cite_ref-openai-cua_8-4) [8.5](#cite_ref-openai-cua_8-5) OpenAI. (2025). "Computer-Using Agent." Retrieved from [https://openai.com/index/computer-using-agent/](https://openai.com/index/computer-using-agent/)

9. ↑ [9.0](#cite_ref-AdeptACT1_9-0) [9.1](#cite_ref-AdeptACT1_9-1) Adept AI. (2022). "ACT-1: A new frontier for models that take actions on your computer." Retrieved from [https://www.adept.ai/blog/act-1](https://www.adept.ai/blog/act-1)

10. ↑ [10.0](#cite_ref-anthropic-computer-use_10-0) [10.1](#cite_ref-anthropic-computer-use_10-1) Anthropic. (2024). "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku." Retrieved from [https://www.anthropic.com/news/3-5-models-and-computer-use](https://www.anthropic.com/news/3-5-models-and-computer-use)

11. ↑ [11.0](#cite_ref-datacamp-operator_11-0) [11.1](#cite_ref-datacamp-operator_11-1) DataCamp. (2025). "OpenAI's Operator: Examples, Use Cases, Competition & More." Retrieved from [https://www.datacamp.com/blog/operator](https://www.datacamp.com/blog/operator)

12. [↑](#cite_ref-infoworld-browser-use_12-0) InfoWorld. (2025). "Browser Use: An open-source AI agent to automate web-based tasks." Retrieved from [https://www.infoworld.com/article/3812644/browser-use-an-open-source-ai-agent-to-automate-web-based-tasks.html](https://www.infoworld.com/article/3812644/browser-use-an-open-source-ai-agent-to-automate-web-based-tasks.html)

13. ↑ [13.0](#cite_ref-chatgpt-agent_13-0) [13.1](#cite_ref-chatgpt-agent_13-1) OpenAI. (2025). "Introducing ChatGPT agent: bridging research and action." Retrieved from [https://openai.com/index/introducing-chatgpt-agent/](https://openai.com/index/introducing-chatgpt-agent/)

14. ↑ [14.0](#cite_ref-browsegym-arxiv_14-0) [14.1](#cite_ref-browsegym-arxiv_14-1) [14.2](#cite_ref-browsegym-arxiv_14-2) Le Sellier De Chezelles, T. et al. (2024). "The BrowserGym Ecosystem for Web Agent Research." arXiv:2412.05467. Retrieved from [https://arxiv.org/abs/2412.05467](https://arxiv.org/abs/2412.05467)

15. ↑ [15.0](#cite_ref-AgentTuning_15-0) [15.1](#cite_ref-AgentTuning_15-1) Zeng, Aohan et al. (2023). "AgentTuning: Enabling Generalized Agent Abilities for LLMs." arXiv preprint arXiv:2310.12823. Retrieved from [https://arxiv.org/abs/2310.12823](https://arxiv.org/abs/2310.12823)

16. [↑](#cite_ref-dzone-browser-use_16-0) DZone. (2025). "Build an AI Browser Agent With LLMs, Playwright, Browser-Use." Retrieved from [https://dzone.com/articles/build-ai-browser-agent-llms-playwright-browser-use](https://dzone.com/articles/build-ai-browser-agent-llms-playwright-browser-use)

17. [↑](#cite_ref-adasci-guide_17-0) ADASCI. (2025). "A Practical Guide to Enabling AI Agent Browser Control using Browser-use." Retrieved from [https://adasci.org/a-practical-guide-to-enabling-ai-agent-browser-control-using-browser-use/](https://adasci.org/a-practical-guide-to-enabling-ai-agent-browser-control-using-browser-use/)

18. [↑](#cite_ref-visualwebarena_18-0) Web-Arena-x. (2024-2025). "VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks." GitHub. Retrieved from project site

19. [↑](#cite_ref-WebShop_19-0) Yao, Shunyu et al. (2022). "WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents." arXiv preprint arXiv:2207.01206. Retrieved from [https://arxiv.org/abs/2207.01206](https://arxiv.org/abs/2207.01206)

20. ↑ [20.0](#cite_ref-ministry-testing_20-0) [20.1](#cite_ref-ministry-testing_20-1) Ministry of Testing. (2025). "Creating self-healing automated tests with AI and Playwright." Retrieved from [https://www.ministryoftesting.com/articles/creating-self-healing-automated-tests-with-ai-and-playwright](https://www.ministryoftesting.com/articles/creating-self-healing-automated-tests-with-ai-and-playwright)

21. [↑](#cite_ref-skyvern-webbench_21-0) Skyvern. (2025). "Web Bench - A new way to compare AI Browser Agents." Retrieved from [https://blog.skyvern.com/web-bench-a-new-way-to-compare-ai-browser-agents/](https://blog.skyvern.com/web-bench-a-new-way-to-compare-ai-browser-agents/)

22. [↑](#cite_ref-browser-use-sota_22-0) Browser-Use. (2025). "Browser Use = state of the art Web Agent." Retrieved from [https://browser-use.com/posts/sota-technical-report](https://browser-use.com/posts/sota-technical-report)

23. [↑](#cite_ref-openai-sessions_23-0) OpenAI. (2025). "Context Engineering - Short-Term Memory Management with Sessions." Retrieved from [https://cookbook.openai.com/examples/agents_sdk/session_memory](https://cookbook.openai.com/examples/agents_sdk/session_memory)

24. ↑ [24.0](#cite_ref-skyvern-github_24-0) [24.1](#cite_ref-skyvern-github_24-1) Skyvern. (2025). "Automate browser-based workflows with LLMs and Computer Vision." GitHub. Retrieved from [https://github.com/Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern)

25. [↑](#cite_ref-GoogleWebAgent_25-0) Furuta, Hiroki et al. (2023). "Multimodal Web Navigation with Instruction-Finetuned Foundation Models." arXiv preprint arXiv:2305.11854. Retrieved from [https://arxiv.org/abs/2305.11854](https://arxiv.org/abs/2305.11854)

26. [↑](#cite_ref-langchain-agents_26-0) LangChain. (2025). "Agent architectures." Retrieved from [https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/](https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/)

27. [↑](#cite_ref-arxiv-perception_27-0) arXiv. (2024). "Perception Tokens Enhance Visual Reasoning in Multimodal Language Models." Retrieved from [https://arxiv.org/html/2412.03548v1](https://arxiv.org/html/2412.03548v1)

## External links

- [Browser-Use on GitHub](https://github.com/browser-use/browser-use)

- [Browser-Use Official Website](https://browser-use.com/)

- [OpenAI Operator](https://openai.com/index/introducing-operator/)

- [WebArena Benchmark](https://webarena.dev/)

- [Skyvern on GitHub](https://github.com/Skyvern-AI/skyvern)

- [Browserbase](https://www.browserbase.com)

- [WebArena GitHub Repository](https://github.com/web-arena-x/webarena)

- [Mind2Web Dataset](https://github.com/OSU-NLP-Group/Mind2Web)

- [WebShop Benchmark](https://webshop-pnlp.github.io/)