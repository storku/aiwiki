---
title: "Computer-use agent"
slug: "computer-use_agent"
categories:
  - "Pages_with_reference_errors"
  - "Artificial_intelligence"
  - "Machine_learning"
  - "Computer_vision"
  - "Human–computer_interaction"
  - "Automation_software"
  - "Multimodal_learning"
  - "Natural_language_processing"
  - "Software_agents"
  - "Graphical_user_interfaces"
  - "2023_in_computing"
  - "2024_in_computing"
  - "2025_in_computing"
---[Template:Infobox AI technology](/index.php?title=Template:Infobox_AI_technology&action=edit&redlink=1)

A **computer-use agent** (**CUA**) is a type of [software agent](/index.php?title=Agent_(artificial_intelligence)&action=edit&redlink=1) in [artificial intelligence](/wiki/artificial_intelligence) that performs tasks by directly operating a general-purpose computer's [graphical user interface](/index.php?title=Graphical_user_interface&action=edit&redlink=1) (GUI) the way a human does by "seeing" the screen, moving a cursor, clicking, typing, and interacting with windows and applications.[&#91;1&#93;](#cite_note-anthropic-2024-1) Unlike tool-calling approaches that rely on predefined [APIs](/index.php?title=Application_programming_interface&action=edit&redlink=1), CUAs aim to generalize across arbitrary software by treating the computer itself as the universal interface.[&#91;2&#93;](#cite_note-openai-cua-2025-2) They represent an advancement in [AI agent](/wiki/ai_agent) technology, combining [computer vision](/wiki/computer_vision), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and [reinforcement learning](/wiki/reinforcement_learning) to handle open-ended tasks.[&#91;3&#93;](#cite_note-a16z-rise-3)

CUAs typically combine a [large language model](/wiki/large_language_model) (LLM) with [computer vision](/wiki/computer_vision) and an action executor (for example, a [virtual machine](/index.php?title=Virtual_machine&action=edit&redlink=1) or a remote desktop session), enabling end-to-end perception, reasoning, and control loops.[&#91;4&#93;](#cite_note-openai-docs-computer-use-4)[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5) Early deployments are experimental and can be error-prone, but rapid progress since 2022 has made "computer use" a central paradigm in building [autonomous agents](/index.php?title=Autonomous_agent&action=edit&redlink=1) for software workflows.[&#91;1&#93;](#cite_note-anthropic-2024-1)[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)

## Terminology

- **Computer-use agent (CUA)** - a general term for agents that operate computers via on-screen interaction

- **GUI agent** - emphasizes interaction with [graphical user interfaces](/index.php?title=Graphical_user_interface&action=edit&redlink=1)

- **Desktop agent** - focuses on desktop environment automation

- **Self-operating computer (SOC)** - popularized by an open-source framework that allows a multimodal model to observe pixels and emit mouse/keyboard actions[&#91;7&#93;](#cite_note-soc-repo-2023-7)

- **Computer-Using Agent** - [OpenAI](/wiki/openai)'s specific terminology for their implementation[&#91;2&#93;](#cite_note-openai-cua-2025-2)

## Core Characteristics

- **Universal interface**: Operates any on-screen software (within OS and permission limits) rather than only API-integrated tools[&#91;2&#93;](#cite_note-openai-cua-2025-2)

- **Perception-action loop**: Iteratively reads screen state (image + text), plans, and executes actions such as `click(x,y)` and `type("text")` until the goal is reached or a stop condition fires[&#91;4&#93;](#cite_note-openai-docs-computer-use-4)

- **Multimodal reasoning**: Combines text-based planning with visual grounding to locate and manipulate UI elements[&#91;8&#93;](#cite_note-gui-survey-2025-8)

- **Environment abstraction**: Runs inside controlled sandboxes such as [virtual machines](/index.php?title=Virtual_machine&action=edit&redlink=1), remote desktops, or browser emulators to improve safety and reproducibility[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5)[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)

- **Agentic autonomy**: Can chain steps across applications (for example [web browser](/index.php?title=Web_browser&action=edit&redlink=1) + spreadsheet + email) with minimal human intervention, while remaining subject to guardrails and approvals[&#91;1&#93;](#cite_note-anthropic-2024-1)

## Technical Architecture

### Core Components

Typical CUAs include the following components:

1. **Perception** - captures screen frames and auxiliary signals (window hierarchy, [OCR](/index.php?title=OCR&action=edit&redlink=1)). The vision component uses [computer vision](/wiki/computer_vision) and [multimodal AI](/index.php?title=Multimodal_AI&action=edit&redlink=1) models to interpret screenshots and identify interactive elements such as buttons, text fields, menus, and other GUI components[&#91;4&#93;](#cite_note-openai-docs-computer-use-4)

2. **Reasoning and planning** - uses an [LLM](/wiki/llm) (sometimes with tool-use memory or [reinforcement learning](/wiki/reinforcement_learning) fine-tuning) to decide the next high-level step. This component breaks down complex instructions into actionable steps and maintains context across interactions[&#91;8&#93;](#cite_note-gui-survey-2025-8)

3. **Grounding** - maps plan tokens to concrete UI targets (coordinates, elements, shortcuts)[&#91;9&#93;](#cite_note-osworld-site-9)

4. **Action executor** - sends clicks, keystrokes, scrolls, and window commands to the target environment. Translates decisions into specific computer interactions at precise coordinates[&#91;4&#93;](#cite_note-openai-docs-computer-use-4)

5. **Monitoring and recovery** - detects failure modes (pop-ups, navigation drift) and triggers retries, backtracking, or human handoff[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5)

### Implementation Approaches

| Approach | Description | Advantages | Limitations |
| --- | --- | --- | --- |
| Pure Vision | Relies solely on visual interpretation of screen pixels | Platform-agnostic, works with any GUI | May struggle with complex layouts |
| DOM-Enhanced | Combines vision with web page structure analysis | Higher accuracy for web tasks | Limited to browser environments |
| Hybrid Systems | Integrates multiple data sources including OS APIs | Most accurate and reliable | Platform-specific implementations required |
| Container-Based | Runs in isolated virtual environments | Enhanced security and scalability | Additional infrastructure overhead |

## History

| Year | Milestone |
| --- | --- |
| 2022 | [Adept](/index.php?title=Adept&action=edit&redlink=1) introduces **ACT-1**, a transformer trained to use digital tools via a Chrome extension, an early demonstration of end-to-end GUI action from model outputs[&#91;10&#93;](#cite_note-adept-act1-2022-10) |
| November 2023 | The open-source **Self-Operating Computer** framework by OthersideAI shows a multimodal model operating a desktop using the same inputs/outputs as a human (pixels and mouse/keyboard)[&#91;7&#93;](#cite_note-soc-repo-2023-7) |
| 2024 | Frameworks like LaVague and Skyvern emerged, combining LLMs with vision for web agent automation[&#91;11&#93;](#cite_note-github-acu-11) |
| October 22, 2024 | **[Anthropic](/wiki/anthropic)** publicly announces "computer use" in beta for Claude 3.5 Sonnet, enabling on-screen control (look, move cursor, click, type) via API, marking the first major commercial implementation[&#91;1&#93;](#cite_note-anthropic-2024-1) |
| January 23, 2025 | **[OpenAI](/wiki/openai)** publishes a formal description of a **Computer-Using Agent** and provides a documented Computer Use tool that runs a continuous observe-plan-act loop, introduced as part of "Operator" research preview[&#91;2&#93;](#cite_note-openai-cua-2025-2)[&#91;4&#93;](#cite_note-openai-docs-computer-use-4) |
| February 24, 2025 | **[Anthropic](/wiki/anthropic)** releases Claude 3.7 Sonnet with improved computer use capabilities and extended thinking mode[&#91;12&#93;](#cite_note-claude-37-release-12) |
| March 2025 | **[Azure OpenAI](/index.php?title=Microsoft_Azure&action=edit&redlink=1)** documents "Computer Use (preview)" for building agents that interact with computer UIs; major cloud providers publish prescriptive guidance patterns[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5) |
| March 2025 | Simular AI releases **Agent S2**, an open-source modular framework outperforming proprietary CUAs on benchmarks like OSWorld[&#91;13&#93;](#cite_note-simular-s2-13) |
| September 2025 | **[Anthropic](/wiki/anthropic)** releases Claude Sonnet 4.5, achieving state-of-the-art 61.4% success rate on OSWorld benchmark and 77.2% on SWE-bench Verified[&#91;14&#93;](#cite_note-claude-45-release-14) |

## Functionality

CUAs operate through an iterative loop of perception, reasoning, and action:

### Interaction Model

Many implementations expose a loop in which the agent:

1. **Observes** the current screen through screenshot capture or pixel analysis

2. **Proposes** an action based on visual interpretation and task context

3. **Executes** the action via simulated mouse/keyboard input

4. **Receives** updated observations and tool feedback

5. **Repeats** until task completion or failure[&#91;4&#93;](#cite_note-openai-docs-computer-use-4)

### Process Flow

1. **Perception**: The agent receives screenshots or raw pixel data to analyze the current screen state, using [computer vision](/wiki/computer_vision) to identify elements like buttons, text fields, and menus[&#91;2&#93;](#cite_note-openai-cua-2025-2)[&#91;15&#93;](#cite_note-anthropic-develop-15)

2. **Reasoning**: Leveraging LLMs, the agent plans actions based on user instructions, past context, and self-correction for errors. Techniques like [chain-of-thought prompting](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1) enable adaptation to dynamic interfaces[&#91;3&#93;](#cite_note-a16z-rise-3)[&#91;2&#93;](#cite_note-openai-cua-2025-2)

3. **Action**: The agent emulates inputs via virtual mouse (for example pixel-based cursor movement) and keyboard, performing clicks, types, scrolls, or drags[&#91;1&#93;](#cite_note-anthropic-2024-1)

Public SDKs document low-level actions such as `click(x,y)`, `type(text)`, and clipboard/file operations, executed by a host process controlling a VM or remote session. This loop allows CUAs to handle tasks requiring dozens of steps, such as form filling or software testing.[&#91;16&#93;](#cite_note-labellerr-guide-16) Limitations include challenges with scrolling, zooming, and short-lived UI elements due to screenshot-based (non-video) perception.[&#91;15&#93;](#cite_note-anthropic-develop-15)

## Major Implementations

### Anthropic Claude Computer Use

[Anthropic](/wiki/anthropic) released computer use capabilities in beta with Claude 3.5 Sonnet in October 2024, allowing developers to direct Claude to use computers through the [Anthropic API](/index.php?title=Anthropic_API&action=edit&redlink=1).[&#91;1&#93;](#cite_note-anthropic-2024-1) The implementation includes specialized tools:

- **computer_20241022** - Original computer tool for Claude 3.5 Sonnet

- **computer_20250124** - Enhanced version with additional features for Claude 4

- **bash_20241022** - Command line interface tool

- **text_editor_20241022** - Text editing capabilities[&#91;17&#93;](#cite_note-anthropic-computer-use-17)

Training focused on simple software like calculators and text editors, with restricted internet access for safety. Anthropic's research emphasized pixel counting for accuracy, with generalization from limited examples.[&#91;15&#93;](#cite_note-anthropic-develop-15) Early adopters included companies like [Asana](/index.php?title=Asana&action=edit&redlink=1), [Canva](/index.php?title=Canva&action=edit&redlink=1), and [DoorDash](/index.php?title=DoorDash&action=edit&redlink=1), using it for multi-step automation.[&#91;1&#93;](#cite_note-anthropic-2024-1)

Claude Sonnet 4.5, released in September 2025, represents the current state-of-the-art with a 61.4% success rate on OSWorld benchmark, a significant improvement from the 14.9% achieved by the October 2024 version.[&#91;14&#93;](#cite_note-claude-45-release-14)

### OpenAI Computer-Using Agent

[OpenAI](/wiki/openai) introduced the Computer-Using Agent (CUA) in January 2025 as part of its "Operator" research preview, built on [GPT-4o](/wiki/gpt-4)'s vision capabilities with advanced reasoning.[&#91;2&#93;](#cite_note-openai-cua-2025-2)[&#91;18&#93;](#cite_note-openai-operator-18) The CUA model achieves:

- 38.1% success rate on OSWorld benchmark for full computer use

- 58.1% success rate on WebArena

- 87% success rate on WebVoyager for web-based tasks[&#91;2&#93;](#cite_note-openai-cua-2025-2)

The implementation uses reinforcement learning for reasoning and handles GUI interactions via screenshots. It's integrated into Operator and requires user confirmations for sensitive actions.[&#91;18&#93;](#cite_note-openai-operator-18)

### Microsoft Azure Computer-Using Agent

[Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) announced the Computer-Using Agent capabilities in Azure AI Foundry in March 2025, featuring integration with the Responses API. The implementation focuses on enterprise integration with [Windows 365](/index.php?title=Windows_365&action=edit&redlink=1) and [Azure Virtual Desktop](/index.php?title=Azure_Virtual_Desktop&action=edit&redlink=1).[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)

### Open-Source Implementations

| Framework | Description | Release Date | Key Features |
| --- | --- | --- | --- |
| **Self-Operating Computer** | Vision-based computer control | November 2023 | Screenshot analysis, basic automation, multimodal control[&#91;7&#93;](#cite_note-soc-repo-2023-7) |
| **OpenInterpreter** | General-purpose control with Python | 2024 | Extensible, LLM integration[&#91;11&#93;](#cite_note-github-acu-11) |
| **Agent S2** | Modular framework for GUIs | March 2025 | Hierarchical planning, 34.5% OSWorld score[&#91;13&#93;](#cite_note-simular-s2-13) |
| **LaVague** | Web agent framework | 2024 | Modular architecture, vision + LLMs[&#91;11&#93;](#cite_note-github-acu-11) |
| **Skyvern** | Browser workflow automation | 2024 | HTML extraction, task automation[&#91;11&#93;](#cite_note-github-acu-11) |
| **Cua Framework** | Containerized environments for CUAs | 2025 | Docker-like deployment, OS virtualization[&#91;19&#93;](#cite_note-github-cua-19) |
| **Browser-Use** | Web-specific agent | 2025 | 89.1% WebVoyager success rate, DOM + vision[&#91;20&#93;](#cite_note-browser-use-20) |
| **UFO Agents** | Windows-specific control | 2025 | Windows API integration, enhanced accuracy[&#91;21&#93;](#cite_note-microsoft-cua-21) |
| **AutoGen** | Distributed agent framework | 2024 | Multi-agent coordination[&#91;11&#93;](#cite_note-github-acu-11) |
| **NatBot** | Browser-specific automation | 2024 | GPT-4 Vision integration[&#91;11&#93;](#cite_note-github-acu-11) |

## Performance Benchmarks

Researchers have proposed interactive benchmarks to evaluate CUAs in realistic settings.

### OSWorld

OSWorld is a comprehensive benchmark for evaluating [multimodal](/index.php?title=Multimodal&action=edit&redlink=1) agents in real computer environments across [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1), [Windows](/index.php?title=Windows&action=edit&redlink=1), and [macOS](/index.php?title=MacOS&action=edit&redlink=1). It includes 369 tasks involving real web and desktop applications, file I/O operations, and cross-application workflows.[&#91;9&#93;](#cite_note-osworld-site-9)

| Model | Success Rate | Multi-step Score | Notes |
| --- | --- | --- | --- |
| Human Performance | 72.4% | N/A | Baseline human capability |
| Claude Sonnet 4.5 | 61.4% | N/A | Current state-of-the-art (September 2025)[&#91;14&#93;](#cite_note-claude-45-release-14) |
| OpenAI CUA | 38.1% | N/A | January 2025 release[&#91;2&#93;](#cite_note-openai-cua-2025-2) |
| Agent S2 | 34.5% | N/A | 50-step configuration[&#91;13&#93;](#cite_note-simular-s2-13) |
| Claude 3.5 Sonnet | 14.9% | 22.0% | October 2024 version[&#91;1&#93;](#cite_note-anthropic-2024-1) |
| Previous Best (2024) | 12.0% | N/A | Prior to CUA models |

### OSWorld-Human

OSWorld-Human provides annotated trajectories with human optimal steps. Across 16 agents tested, even the best took **1.4–2.7×** the human step count on average, indicating significant efficiency gaps.[&#91;22&#93;](#cite_note-osworld-human-2025-22)

### WebArena

WebArena evaluates web browsing agents using self-hosted open-source websites that simulate real-world scenarios in [e-commerce](/index.php?title=E-commerce&action=edit&redlink=1), [content management systems](/index.php?title=Content_management_system&action=edit&redlink=1), and social platforms. It tests complex, multi-step web interactions offline.[&#91;23&#93;](#cite_note-webarena-23)

- OpenAI CUA: 58.1% success rate[&#91;2&#93;](#cite_note-openai-cua-2025-2)

### WebVoyager

WebVoyager tests agent performance on live websites including [Amazon](/index.php?title=Amazon&action=edit&redlink=1), [GitHub](/index.php?title=GitHub&action=edit&redlink=1), and [Google Maps](/index.php?title=Google_Maps&action=edit&redlink=1), evaluating real-world web navigation and task completion capabilities. The benchmark includes 586 diverse web tasks.[&#91;24&#93;](#cite_note-webvoyager-24)

- Browser-Use: 89.1% success rate[&#91;20&#93;](#cite_note-browser-use-20)

- OpenAI CUA: 87% success rate[&#91;2&#93;](#cite_note-openai-cua-2025-2)

### macOSWorld

macOSWorld introduces the first comprehensive [macOS](/index.php?title=MacOS&action=edit&redlink=1) benchmark with 202+ multilingual interactive tasks. It reports distinct performance tiers with >30% success for some proprietary CUAs in its evaluations.[&#91;25&#93;](#cite_note-macosworld-2025-25)

### AndroidWorld

AndroidWorld evaluates mobile GUI tasks:

- Agent S2: 50% success rate[&#91;13&#93;](#cite_note-simular-s2-13)

## Applications

CUAs automate repetitive tasks in various domains:

### Enterprise Automation

- [Customer service](/index.php?title=Customer_service&action=edit&redlink=1) automation through multi-step workflow execution

- [IT operations](/index.php?title=IT_operations&action=edit&redlink=1) management and system maintenance

- [Data entry](/index.php?title=Data_entry&action=edit&redlink=1) and form processing across legacy systems without APIs

- [Software testing](/index.php?title=Software_testing&action=edit&redlink=1) and [quality assurance](/index.php?title=Quality_assurance&action=edit&redlink=1) automation

- Enterprise process automation across heterogeneous legacy systems[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5)[&#91;26&#93;](#cite_note-rapid-innovation-26)

### Software Development

- Automated code generation and debugging

- Application testing across different environments

- [Continuous integration](/index.php?title=Continuous_integration&action=edit&redlink=1) and deployment processes

- Documentation generation and maintenance

- Developer tooling inside isolated environments[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)[&#91;27&#93;](#cite_note-github-openai-sample-27)

### Office Workflows

- File handling and organization

- Spreadsheet operations and data manipulation

- Calendar management and scheduling

- Email processing and response automation[&#91;1&#93;](#cite_note-anthropic-2024-1)

### Research and Analysis

- Web research and information gathering

- [Data analysis](/wiki/data_analysis) across multiple sources

- Report generation from various applications

- Competitive intelligence gathering

- Data migration and [RPA](/index.php?title=Robotic_process_automation&action=edit&redlink=1)-style tasks with free-form reasoning[&#91;5&#93;](#cite_note-aws-prescriptive-2025-5)

### Accessibility

- Assisting users with disabilities in GUI navigation

- Automating repetitive tasks for users with motor impairments

- Providing alternative interaction methods for standard software

- Accessibility augmentation by translating natural-language intents into GUI actions[&#91;8&#93;](#cite_note-gui-survey-2025-8)[&#91;2&#93;](#cite_note-openai-cua-2025-2)

Companies like [DoorDash](/index.php?title=DoorDash&action=edit&redlink=1) use CUAs for internal processes requiring hundreds of steps, while [Replit](/index.php?title=Replit&action=edit&redlink=1) uses Anthropic's tool for code evaluation.[&#91;1&#93;](#cite_note-anthropic-2024-1)

## Security Considerations

### Prompt Injection Vulnerabilities

CUAs are susceptible to [prompt injection](/wiki/prompt_injection) attacks where malicious instructions embedded in content can override intended behavior. This vulnerability is particularly concerning as CUAs can execute actions on behalf of users.[&#91;17&#93;](#cite_note-anthropic-computer-use-17)

#### Types of Prompt Injection

- **Direct injection**: Malicious commands entered directly by users

- **Indirect injection**: Hidden instructions in external content like websites, documents, or images

- **Cross-modal attacks**: Exploiting interactions between different input modalities in multimodal systems[&#91;28&#93;](#cite_note-owasp-prompt-28)

### Mitigation Strategies

| Strategy | Description | Effectiveness |
| --- | --- | --- |
| Containerization | Run CUAs in isolated [virtual machines](/index.php?title=Virtual_machine&action=edit&redlink=1) or [Docker](/index.php?title=Docker&action=edit&redlink=1) containers | High for system isolation |
| Least Privilege | Restrict CUA access to minimum necessary resources | Medium-High for damage limitation |
| Human Oversight | Require approval for sensitive operations | High for critical actions |
| Input Validation | Filter and sanitize user inputs and external content | Medium, not foolproof |
| Monitoring | Track CUA actions and detect anomalous behavior | High for incident response |
| Classifiers | Detect harmful content and restrict actions | Medium-High for known threats |
| Blocklists | Prevent access to sensitive domains/applications | High for defined restrictions |

### Best Practices

Organizations deploying CUAs should implement:[&#91;29&#93;](#cite_note-ibm-prompt-29)[&#91;15&#93;](#cite_note-anthropic-develop-15)

1. Use dedicated virtual environments with minimal privileges

2. Avoid providing access to sensitive accounts or data

3. Implement strict approval workflows for high-stakes operations

4. Regular security audits and [penetration testing](/index.php?title=Penetration_testing&action=edit&redlink=1)

5. User training on CUA risks and safe usage

6. Multiple layered security controls ([defense in depth](/index.php?title=Defense_in_depth&action=edit&redlink=1))

7. Instrumenting logging/telemetry to support audits and incident response

8. Privacy policies and deployment docs emphasizing consent

[Anthropic](/wiki/anthropic) implements classifiers to detect harm, restrictions on election-related tasks, and ASL-2 compliance.[&#91;15&#93;](#cite_note-anthropic-develop-15) [OpenAI](/wiki/openai) includes refusals for harmful tasks, blocklists, user confirmations, and evaluations against frontier risks like autonomous replication.[&#91;2&#93;](#cite_note-openai-cua-2025-2)

## Limitations and Challenges

Independent evaluations and benchmark studies report that state-of-the-art CUAs still struggle with robust GUI grounding, long-horizon plans, and operational knowledge of unfamiliar applications.[&#91;9&#93;](#cite_note-osworld-site-9)[&#91;25&#93;](#cite_note-macosworld-2025-25)[&#91;22&#93;](#cite_note-osworld-human-2025-22)

### Performance Limitations

- **Latency**: Current implementations are slower than human-directed actions, limiting real-time applications[&#91;17&#93;](#cite_note-anthropic-computer-use-17)

- **Accuracy**: Vision-based coordinate detection can be unreliable, especially with complex interfaces

- **Context limitations**: Token limits restrict the amount of information agents can process simultaneously

- **Efficiency**: Even high-performing agents often take more steps than necessary compared with humans[&#91;22&#93;](#cite_note-osworld-human-2025-22)

### Technical Challenges

- Difficulty handling dynamic elements (for example pop-ups, date pickers, dropdown menus) due to static screenshots[&#91;15&#93;](#cite_note-anthropic-develop-15)

- Struggles with [CAPTCHAs](/index.php?title=CAPTCHA&action=edit&redlink=1) and anti-automation measures

- Limited ability to understand context across multiple applications

- Challenges with non-standard or custom UI elements[&#91;30&#93;](#cite_note-zbrain-cua-30)

- Problems with scrolling, zooming, and short-lived UI elements due to screenshot-based (non-video) perception[&#91;15&#93;](#cite_note-anthropic-develop-15)

### Reliability Issues

- Success rates remain below human performance (61.4% vs 72.4% on OSWorld for best models)[&#91;14&#93;](#cite_note-claude-45-release-14)

- Susceptibility to errors when interfaces change unexpectedly

- Potential for cascading failures in multi-step processes[&#91;2&#93;](#cite_note-openai-cua-2025-2)

- Dependency on high-quality vision models and potential for cumulative errors in long tasks[&#91;31&#93;](#cite_note-understandingai-deadend-31)

Users may find interfaces confusing without clear benefits over traditional tools.[&#91;31&#93;](#cite_note-understandingai-deadend-31)

## Future Developments

### Technical Roadmap

Industry leaders have outlined several advancement areas:

- Enhanced multimodal models with better visual understanding

- Improved reasoning capabilities for complex task planning

- Integration with specialized APIs when available for hybrid approaches

- Development of CUA-specific training datasets and benchmarks[&#91;18&#93;](#cite_note-openai-operator-18)

- Video stream perception to replace static screenshots

- Better mobile support and cross-platform compatibility

- Integration with [agentic AI](/index.php?title=Agentic_AI&action=edit&redlink=1) for collaborative workflows[&#91;3&#93;](#cite_note-a16z-rise-3)

### Standardization Efforts

The [llms.txt](/index.php?title=Llms.txt&action=edit&redlink=1) proposal suggests a standardized format for websites to provide AI-readable information, potentially improving CUA reliability while maintaining human usability.[&#91;21&#93;](#cite_note-microsoft-cua-21) This would allow websites to expose structured data specifically for AI consumption.

### Integration with Existing Systems

Future developments include:

- Native OS integration for improved performance

- Combination with traditional [RPA](/index.php?title=RPA&action=edit&redlink=1) for deterministic tasks

- Enhanced security frameworks specifically designed for CUAs

- Standardized evaluation metrics and benchmarks[&#91;6&#93;](#cite_note-azure-computer-use-2025-6)

Open-source efforts like Agent S2 emphasize modularity for scalability.[&#91;13&#93;](#cite_note-simular-s2-13) By mid-2025, CUAs are seen as foundational for "agentic coworkers."[&#91;3&#93;](#cite_note-a16z-rise-3)

## Impact and Implications

### Economic Impact

Organizations implementing CUAs report significant operational improvements:

- 30-50% reduction in manual workload

- 65% faster data processing times

- 35% increase in customer retention through improved service

- Significant cost savings from reduced human error[&#91;26&#93;](#cite_note-rapid-innovation-26)

### Workforce Implications

CUAs are reshaping workplace dynamics by:

- Automating routine digital tasks

- Enabling workers to focus on higher-value activities

- Creating new roles in CUA management and oversight

- Requiring new skills in AI collaboration and supervision[&#91;21&#93;](#cite_note-microsoft-cua-21)

### Ethical Considerations

The deployment of CUAs raises important ethical questions:

- Privacy concerns regarding automated data access and screen content reading

- Accountability for agent-initiated actions

- Potential for misuse in surveillance or unauthorized access

- Need for transparent disclosure when CUAs interact with humans[&#91;32&#93;](#cite_note-anthropic-announcement-32)

- Potential for fraud, [cybersecurity](/wiki/cybersecurity) vulnerabilities, and malicious use[&#91;33&#93;](#cite_note-pushsecurity-impact-33)

- Job displacement in automation-heavy fields[&#91;34&#93;](#cite_note-ieee-ready-34)

## See Also

- [Autonomous agent](/index.php?title=Autonomous_agent&action=edit&redlink=1)

- [Robotic process automation](/index.php?title=Robotic_process_automation&action=edit&redlink=1)

- [User interface](/index.php?title=User_interface&action=edit&redlink=1)

- [VNC](/index.php?title=Virtual_network_computing&action=edit&redlink=1)

- [Software testing](/index.php?title=Software_testing&action=edit&redlink=1)

- [Agent (artificial intelligence)](/index.php?title=Agent_(artificial_intelligence)&action=edit&redlink=1)

- [Web browser](/index.php?title=Web_browser&action=edit&redlink=1)

- [Artificial general intelligence](/wiki/artificial_general_intelligence)

- [Large language model](/wiki/large_language_model)

- [Multimodal learning](/index.php?title=Multimodal_learning&action=edit&redlink=1)

- [Computer vision](/wiki/computer_vision)

- [Prompt engineering](/wiki/prompt_engineering)

- [AI safety](/index.php?title=AI_safety&action=edit&redlink=1)

- [Human–computer interaction](/index.php?title=Human%E2%80%93computer_interaction&action=edit&redlink=1)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Reinforcement learning](/wiki/reinforcement_learning)

## References

1. ↑ [1.0](#cite_ref-anthropic-2024_1-0) [1.1](#cite_ref-anthropic-2024_1-1) [1.2](#cite_ref-anthropic-2024_1-2) [1.3](#cite_ref-anthropic-2024_1-3) [1.4](#cite_ref-anthropic-2024_1-4) [1.5](#cite_ref-anthropic-2024_1-5) [1.6](#cite_ref-anthropic-2024_1-6) [1.7](#cite_ref-anthropic-2024_1-7) [1.8](#cite_ref-anthropic-2024_1-8) [1.9](#cite_ref-anthropic-2024_1-9) Anthropic (22 October 2024). "Introducing computer use, a new Claude 3.5 Sonnet, and more." [https://www.anthropic.com/news/3-5-models-and-computer-use](https://www.anthropic.com/news/3-5-models-and-computer-use)

2. ↑ [2.00](#cite_ref-openai-cua-2025_2-0) [2.01](#cite_ref-openai-cua-2025_2-1) [2.02](#cite_ref-openai-cua-2025_2-2) [2.03](#cite_ref-openai-cua-2025_2-3) [2.04](#cite_ref-openai-cua-2025_2-4) [2.05](#cite_ref-openai-cua-2025_2-5) [2.06](#cite_ref-openai-cua-2025_2-6) [2.07](#cite_ref-openai-cua-2025_2-7) [2.08](#cite_ref-openai-cua-2025_2-8) [2.09](#cite_ref-openai-cua-2025_2-9) [2.10](#cite_ref-openai-cua-2025_2-10) [2.11](#cite_ref-openai-cua-2025_2-11) [2.12](#cite_ref-openai-cua-2025_2-12) [2.13](#cite_ref-openai-cua-2025_2-13) OpenAI (23 January 2025). "Computer-Using Agent." [https://openai.com/index/computer-using-agent/](https://openai.com/index/computer-using-agent/)

3. ↑ [3.0](#cite_ref-a16z-rise_3-0) [3.1](#cite_ref-a16z-rise_3-1) [3.2](#cite_ref-a16z-rise_3-2) [3.3](#cite_ref-a16z-rise_3-3) a16z. (August 28, 2025). "The Rise of Computer Use and Agentic Coworkers". [https://a16z.com/the-rise-of-computer-use-and-agentic-coworkers/](https://a16z.com/the-rise-of-computer-use-and-agentic-coworkers/)

4. ↑ [4.0](#cite_ref-openai-docs-computer-use_4-0) [4.1](#cite_ref-openai-docs-computer-use_4-1) [4.2](#cite_ref-openai-docs-computer-use_4-2) [4.3](#cite_ref-openai-docs-computer-use_4-3) [4.4](#cite_ref-openai-docs-computer-use_4-4) [4.5](#cite_ref-openai-docs-computer-use_4-5) OpenAI Platform Docs. "Computer use." [https://platform.openai.com/docs/guides/tools-computer-use](https://platform.openai.com/docs/guides/tools-computer-use)

5. ↑ [5.0](#cite_ref-aws-prescriptive-2025_5-0) [5.1](#cite_ref-aws-prescriptive-2025_5-1) [5.2](#cite_ref-aws-prescriptive-2025_5-2) [5.3](#cite_ref-aws-prescriptive-2025_5-3) [5.4](#cite_ref-aws-prescriptive-2025_5-4) [5.5](#cite_ref-aws-prescriptive-2025_5-5) Amazon Web Services (2025). "Computer-use agents - AWS Prescriptive Guidance." [https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/computer-use-agents.html](https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/computer-use-agents.html)

6. ↑ [6.0](#cite_ref-azure-computer-use-2025_6-0) [6.1](#cite_ref-azure-computer-use-2025_6-1) [6.2](#cite_ref-azure-computer-use-2025_6-2) [6.3](#cite_ref-azure-computer-use-2025_6-3) [6.4](#cite_ref-azure-computer-use-2025_6-4) [6.5](#cite_ref-azure-computer-use-2025_6-5) Microsoft Learn (25 March 2025). "Announcing the Responses API and Computer-Using Agent in Azure AI Foundry." [https://azure.microsoft.com/en-us/blog/announcing-the-responses-api-and-computer-using-agent-in-azure-ai-foundry/](https://azure.microsoft.com/en-us/blog/announcing-the-responses-api-and-computer-using-agent-in-azure-ai-foundry/)

7. ↑ [7.0](#cite_ref-soc-repo-2023_7-0) [7.1](#cite_ref-soc-repo-2023_7-1) [7.2](#cite_ref-soc-repo-2023_7-2) OthersideAI (2023). "Self-Operating Computer Framework." [https://github.com/OthersideAI/self-operating-computer](https://github.com/OthersideAI/self-operating-computer)

8. ↑ [8.0](#cite_ref-gui-survey-2025_8-0) [8.1](#cite_ref-gui-survey-2025_8-1) [8.2](#cite_ref-gui-survey-2025_8-2) Guo, Y. et al. (2025). "GUI Agents with Foundation Models: A Comprehensive Survey." arXiv:2411.04890v2 / OpenReview (2025). [https://arxiv.org/abs/2411.04890](https://arxiv.org/abs/2411.04890) ; [https://openreview.net/forum?id=CzMnCp6TFl](https://openreview.net/forum?id=CzMnCp6TFl)

9. ↑ [9.0](#cite_ref-osworld-site_9-0) [9.1](#cite_ref-osworld-site_9-1) [9.2](#cite_ref-osworld-site_9-2) OSWorld (2024). "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments." [https://os-world.github.io/](https://os-world.github.io/) and [https://github.com/xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld)

10. [↑](#cite_ref-adept-act1-2022_10-0) Adept (14 September 2022). "ACT-1: Transformer for Actions." [https://www.adept.ai/blog/act-1](https://www.adept.ai/blog/act-1)

11. ↑ [11.0](#cite_ref-github-acu_11-0) [11.1](#cite_ref-github-acu_11-1) [11.2](#cite_ref-github-acu_11-2) [11.3](#cite_ref-github-acu_11-3) [11.4](#cite_ref-github-acu_11-4) [11.5](#cite_ref-github-acu_11-5) GitHub - trycua/acu. "A curated list of resources about AI agents for Computer Use". [https://github.com/trycua/acu](https://github.com/trycua/acu)

12. [↑](#cite_ref-claude-37-release_12-0) Anthropic (24 February 2025). "Claude 3.7 Sonnet and Claude Code". [https://www.anthropic.com/news/claude-3-7-sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)

13. ↑ [13.0](#cite_ref-simular-s2_13-0) [13.1](#cite_ref-simular-s2_13-1) [13.2](#cite_ref-simular-s2_13-2) [13.3](#cite_ref-simular-s2_13-3) [13.4](#cite_ref-simular-s2_13-4) Simular AI. (March 12, 2025). "Agent S2 - Open, Modular, and Scalable Framework for Computer Use Agents". [https://www.simular.ai/articles/agent-s2](https://www.simular.ai/articles/agent-s2)

14. ↑ [14.0](#cite_ref-claude-45-release_14-0) [14.1](#cite_ref-claude-45-release_14-1) [14.2](#cite_ref-claude-45-release_14-2) [14.3](#cite_ref-claude-45-release_14-3) Anthropic (29 September 2025). "Claude Sonnet 4.5". [https://www.anthropic.com/claude/sonnet](https://www.anthropic.com/claude/sonnet)

15. ↑ [15.0](#cite_ref-anthropic-develop_15-0) [15.1](#cite_ref-anthropic-develop_15-1) [15.2](#cite_ref-anthropic-develop_15-2) [15.3](#cite_ref-anthropic-develop_15-3) [15.4](#cite_ref-anthropic-develop_15-4) [15.5](#cite_ref-anthropic-develop_15-5) [15.6](#cite_ref-anthropic-develop_15-6) Anthropic. (2024). "Developing a computer use model". [https://www.anthropic.com/news/developing-computer-use](https://www.anthropic.com/news/developing-computer-use)

16. [↑](#cite_ref-labellerr-guide_16-0) Labellerr. (March 5, 2025). "Computer Use Agent: Guide to Functionality & Benefits". [https://www.labellerr.com/blog/computer-use-agent-guide-to-functionality-benefits/](https://www.labellerr.com/blog/computer-use-agent-guide-to-functionality-benefits/)

17. ↑ [17.0](#cite_ref-anthropic-computer-use_17-0) [17.1](#cite_ref-anthropic-computer-use_17-1) [17.2](#cite_ref-anthropic-computer-use_17-2) Anthropic. (2025). "Computer use (beta)". Anthropic Documentation. [https://docs.anthropic.com/en/docs/build-with-claude/computer-use](https://docs.anthropic.com/en/docs/build-with-claude/computer-use)

18. ↑ [18.0](#cite_ref-openai-operator_18-0) [18.1](#cite_ref-openai-operator_18-1) [18.2](#cite_ref-openai-operator_18-2) OpenAI. (2025). "Introducing Operator". [https://openai.com/index/introducing-operator/](https://openai.com/index/introducing-operator/)

19. [↑](#cite_ref-github-cua_19-0) GitHub. (2025). "trycua/cua: Open-source infrastructure for Computer-Use Agents". [https://github.com/trycua/cua](https://github.com/trycua/cua)

20. ↑ [20.0](#cite_ref-browser-use_20-0) [20.1](#cite_ref-browser-use_20-1) Browser Use. (2025). "Browser Use = state of the art Web Agent". [https://browser-use.com/posts/sota-technical-report](https://browser-use.com/posts/sota-technical-report)

21. ↑ [21.0](#cite_ref-microsoft-cua_21-0) [21.1](#cite_ref-microsoft-cua_21-1) [21.2](#cite_ref-microsoft-cua_21-2) Microsoft. (2025). "Computer Use Agents (CUAs) for Enhanced Automation". Microsoft Tech Community. [https://techcommunity.microsoft.com/blog/aiplatformblog/the-future-of-ai-computer-use-agents-have-arrived/4401025](https://techcommunity.microsoft.com/blog/aiplatformblog/the-future-of-ai-computer-use-agents-have-arrived/4401025)

22. ↑ [22.0](#cite_ref-osworld-human-2025_22-0) [22.1](#cite_ref-osworld-human-2025_22-1) [22.2](#cite_ref-osworld-human-2025_22-2) Abhyankar, R. et al. (2025). "Benchmarking the Efficiency of Computer-Use Agents." arXiv:2506.16042. [https://arxiv.org/abs/2506.16042](https://arxiv.org/abs/2506.16042)

23. [↑](#cite_ref-webarena_23-0) WebArena. (2024). "WebArena: A Realistic Web Environment for Building Autonomous Agents".

24. [↑](#cite_ref-webvoyager_24-0) WebVoyager. (2024). "Building an End-to-End Web Agent with Large Multimodal Models". arXiv:2401.13919. [https://arxiv.org/abs/2401.13919](https://arxiv.org/abs/2401.13919)

25. ↑ [25.0](#cite_ref-macosworld-2025_25-0) [25.1](#cite_ref-macosworld-2025_25-1) Yang, P. et al. (2025). "macOSWorld: A Multilingual Interactive Benchmark for GUI Agents." arXiv:2506.04135. [https://arxiv.org/abs/2506.04135](https://arxiv.org/abs/2506.04135)

26. ↑ [26.0](#cite_ref-rapid-innovation_26-0) [26.1](#cite_ref-rapid-innovation_26-1) Rapid Innovation. (2025). "A Detailed Guide to Computer Using Agent (CUA) Models". Medium. [https://medium.com/@rapidinnovation/a-detailed-guide-to-computer-using-agent-cua-models-41dcbf864552](https://medium.com/@rapidinnovation/a-detailed-guide-to-computer-using-agent-cua-models-41dcbf864552)

27. [↑](#cite_ref-github-openai-sample_27-0) OpenAI. (2025). "openai-cua-sample-app". GitHub. [https://github.com/openai/openai-cua-sample-app](https://github.com/openai/openai-cua-sample-app)

28. [↑](#cite_ref-owasp-prompt_28-0) OWASP. (2025). "LLM01:2025 Prompt Injection". OWASP Gen AI Security Project. [https://genai.owasp.org/llmrisk/llm01-prompt-injection/](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

29. [↑](#cite_ref-ibm-prompt_29-0) IBM. (2025). "Protect Against Prompt Injection". IBM Think. [https://www.ibm.com/think/insights/prevent-prompt-injection](https://www.ibm.com/think/insights/prevent-prompt-injection)

30. [↑](#cite_ref-zbrain-cua_30-0) ZBrain. (2025). "Computer-using agent (CUA) models". ZBrain AI. [https://zbrain.ai/cua-models/](https://zbrain.ai/cua-models/)

31. ↑ [31.0](#cite_ref-understandingai-deadend_31-0) [31.1](#cite_ref-understandingai-deadend_31-1) Understanding AI. (June 26, 2025). "Computer-use agents seem like a dead end". [https://www.understandingai.org/p/computer-use-agents-seem-like-a-dead](https://www.understandingai.org/p/computer-use-agents-seem-like-a-dead)

32. [↑](#cite_ref-anthropic-announcement_32-0) Anthropic. (2024). "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku". [https://www.anthropic.com/news/3-5-models-and-computer-use](https://www.anthropic.com/news/3-5-models-and-computer-use)

33. [↑](#cite_ref-pushsecurity-impact_33-0) Push Security. (January 28, 2025). "How Computer-Using Agents can be leveraged in cyber attacks". [https://pushsecurity.com/blog/considering-the-impact-of-computer-using-agents/](https://pushsecurity.com/blog/considering-the-impact-of-computer-using-agents/)

34. [↑](#cite_ref-ieee-ready_34-0) IEEE Spectrum. (February 13, 2025). "Are You Ready to Let an AI Agent Use Your Computer?". [https://spectrum.ieee.org/ai-agents-computer-use](https://spectrum.ieee.org/ai-agents-computer-use)

Cite error: `<ref>` tag with name "deepmind-webagent-iclr-2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "reddit-anthropic" defined in `<references>` is not used in prior text.