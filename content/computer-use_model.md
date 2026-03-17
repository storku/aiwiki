---
title: "Computer-use model"
slug: "computer-use_model"
categories:
  - "Artificial_intelligence"
  - "Computer_vision"
  - "Natural_language_processing"
  - "Machine_learning"
  - "User_interface_techniques"
  - "Automation_software"
---[Template:Infobox technology](/index.php?title=Template:Infobox_technology&action=edit&redlink=1)

A **computer-use model** is a specialized type of [artificial intelligence](/wiki/artificial_intelligence) model that enables [autonomous agents](/index.php?title=Autonomous_agents&action=edit&redlink=1) to interact with [graphical user interfaces](/index.php?title=Graphical_user_interfaces&action=edit&redlink=1) (GUIs) by perceiving screen content and executing actions like clicking, typing, and scrolling, similar to how humans use computers.[&#91;1&#93;](#cite_note-anthropic-1)[&#91;2&#93;](#cite_note-openai-2) These models represent a significant advancement in [AI agents](/index.php?title=AI_agents&action=edit&redlink=1), allowing them to control computers through visual understanding rather than programmatic [APIs](/index.php?title=APIs&action=edit&redlink=1), making them capable of automating complex digital tasks across various applications and operating systems.[&#91;3&#93;](#cite_note-gemini-3)

## Overview

Computer-use models combine [vision-language models](/index.php?title=Vision-language_models&action=edit&redlink=1) (VLMs) with [reinforcement learning](/wiki/reinforcement_learning) capabilities to understand and interact with computer screens through pixel-level visual processing.[&#91;2&#93;](#cite_note-openai-2) Unlike traditional automation approaches that require specific APIs or scripting for each application, computer-use models can control any software that has a graphical interface, using the same visual cues and input methods that humans use.[&#91;3&#93;](#cite_note-gemini-3) This universal approach makes them particularly valuable for tasks that span multiple applications or require interaction with legacy systems that lack modern APIs.[&#91;4&#93;](#cite_note-ieee-4)

While many agent systems integrate through structured [APIs](/index.php?title=Application_programming_interface&action=edit&redlink=1), a large portion of digital work still happens in GUIs including form filling, dashboards, and behind-login workflows. Computer-use models address this gap by powering agents that can operate like human users, navigating web pages and applications by clicking, typing and scrolling.[&#91;3&#93;](#cite_note-gemini-3)

The fundamental innovation of computer-use models is their ability to translate high-level instructions into low-level computer actions by:

- Perceiving screen content through [screenshot](/index.php?title=Screenshot&action=edit&redlink=1) analysis

- Understanding the spatial layout and purpose of UI elements

- Generating appropriate mouse and keyboard actions

- Adapting to dynamic changes in the interface

- Learning from feedback to improve performance over time[&#91;5&#93;](#cite_note-simular-5)

## History

The concept of computer-use models emerged as part of the broader development of multimodal [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) capable of processing visual inputs. Early research focused on visual question answering and image captioning, but by 2024, advancements allowed models to actively control UIs.

The first public beta of a computer-use model was introduced by [Anthropic](/wiki/anthropic) on October 22, 2024, with an upgraded [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) model featuring "computer use" capabilities. This allowed [Claude](/index.php?title=Claude_(AI_model)&action=edit&redlink=1) to perceive screens and perform actions like cursor movement and typing.[&#91;1&#93;](#cite_note-anthropic-1)[&#91;6&#93;](#cite_note-anthropic-dev-6)

In July 2025, [OpenAI](/wiki/openai) released a preview of its Computer Use tool via [Azure OpenAI](/index.php?title=Azure_OpenAI&action=edit&redlink=1), enabling models to interact with browsers, desktops, and applications across operating systems like Windows, macOS, and Ubuntu.[&#91;7&#93;](#cite_note-azure-7)

On October 7, 2025, [Google DeepMind](/wiki/google_deepmind) announced the Gemini 2.5 Computer Use model, built on [Gemini 2.5 Pro](/index.php?title=Gemini_(language_model)&action=edit&redlink=1), optimized primarily for web browsers and mobile UIs. The model became available through the [Gemini API](/index.php?title=Gemini_API&action=edit&redlink=1) via [Google AI Studio](/index.php?title=Google_AI_Studio&action=edit&redlink=1) and [Vertex AI](/index.php?title=Vertex_AI&action=edit&redlink=1).[&#91;3&#93;](#cite_note-gemini-3)[&#91;8&#93;](#cite_note-9to5google-8)

## Technical Architecture

### Core Components

Computer-use models typically consist of several integrated components working in an iterative loop:[&#91;3&#93;](#cite_note-gemini-3)[&#91;9&#93;](#cite_note-gemini-docs-9)

1. **Visual Perception Module**: Processes screenshots using [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) or [vision transformers](/index.php?title=Vision_transformers&action=edit&redlink=1) to understand screen content

2. **Language Understanding Module**: Interprets user instructions and maintains context using [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

3. **Action Planning Module**: Uses [chain-of-thought reasoning](/index.php?title=Chain-of-thought_reasoning&action=edit&redlink=1) to decompose tasks into executable steps[&#91;2&#93;](#cite_note-openai-2)

4. **Action Execution Module**: Translates high-level decisions into specific UI actions (clicks, keystrokes, scrolls)

5. **Feedback Processing Module**: Evaluates action results and adjusts strategy based on observed changes

### Agent Loop

At a high level, agents using computer-use models follow a repeated loop:[&#91;9&#93;](#cite_note-gemini-docs-9)

1. **Send Request**: The application invokes the Computer Use tool with the user's goal, a screenshot of the current GUI, the current URL, and optionally recent action history and constraints (for example excluded actions)

2. **Receive Model Response**: The model analyzes these inputs and generates a response, typically containing one or more function calls representing UI actions (for example open browser, click, type) and may include a safety decision (for example "requires confirmation")

3. **Execute Actions**: Client-side code executes allowed actions (prompting the end user for confirmation when required), then captures a fresh screenshot/URL

4. **Capture New State**: If the action has been executed, the client captures a new screenshot of the GUI and the current URL

5. **Send Function Response**: The new state is returned to the model as function responses, and the loop repeats from step 2

This process continues until the task is complete, an error occurs, or termination due to safety response or user decision. The loop is conceptually similar to [function calling](/index.php?title=Function_calling&action=edit&redlink=1) with tools, but specialized for GUI manipulation.[&#91;9&#93;](#cite_note-gemini-docs-9)

### Coordinate System

Most computer-use models employ a normalized coordinate system where screen positions are represented on a 1000x1000 grid regardless of actual screen resolution.[&#91;9&#93;](#cite_note-gemini-docs-9) This approach ensures consistency across different display configurations. The model outputs normalized coordinates that are then converted to actual pixel values by the client implementation:

- X coordinates: 0-999 (left to right)

- Y coordinates: 0-999 (top to bottom)

- Actual pixel position = (normalized_coordinate / 1000) × screen_dimension

The recommended screen size for use with computer-use models is 1440×900 pixels, though models work with any resolution.[&#91;9&#93;](#cite_note-gemini-docs-9)

### Training Methodology

Computer-use models are typically trained using a combination of:[&#91;10&#93;](#cite_note-rlvlm-10)

1. **[Supervised Fine-tuning](/index.php?title=Supervised_Fine-tuning&action=edit&redlink=1) (SFT)**: Initial training on human demonstrations of UI interactions

2. **[Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1) (RL)**: Optimization through trial-and-error with reward signals

3. **[Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF)**: Refinement based on human preferences and corrections[&#91;11&#93;](#cite_note-rlhf-11)

4. **[Imitation Learning](/index.php?title=Imitation_Learning&action=edit&redlink=1)**: Learning from recorded sequences of expert human interactions

## Major Implementations

### Google Gemini Computer Use

Released on October 7, 2025, [Google DeepMind](/wiki/google_deepmind)'s Gemini 2.5 Computer Use model is a specialized variant of Gemini 2.5 Pro optimized for browser control.[&#91;3&#93;](#cite_note-gemini-3) Key features include:

- Model code: `gemini-2.5-computer-use-preview-10-2025`

- Specialized for web browser automation with promise for mobile UI control

- 13 predefined UI actions (click_at, type_text_at, scroll_document, etc.)

- Built-in safety monitoring with per-step safety service

- Performance: 70.3% on Online-Mind2Web benchmark, 34.7% on WebVoyager, 70.9% on AndroidWorld[&#91;12&#93;](#cite_note-marktechpost-12)

- Powers [Project Mariner](/index.php?title=Project_Mariner&action=edit&redlink=1), [Firebase](/index.php?title=Firebase&action=edit&redlink=1) Testing Agent, and some agentic capabilities in AI Mode in [Search](/index.php?title=Google_Search&action=edit&redlink=1)[&#91;3&#93;](#cite_note-gemini-3)

- Available via [Google AI Studio](/index.php?title=Google_AI_Studio&action=edit&redlink=1) and [Vertex AI](/index.php?title=Vertex_AI&action=edit&redlink=1)

Early testers report significant results:

- **Poke.com** (AI assistant): "50% faster and better than the next best solutions"[&#91;3&#93;](#cite_note-gemini-3)

- **Autotab** (AI agent): "18% performance increase on hardest evals"[&#91;3&#93;](#cite_note-gemini-3)

- **Google payments platform**: "Successfully rehabilitates over 60% of executions" for failed UI tests[&#91;3&#93;](#cite_note-gemini-3)

### OpenAI Computer-Using Agent (CUA)

[OpenAI](/wiki/openai)'s Computer-Using Agent (CUA) powers the Operator product and combines [GPT-4o](/wiki/gpt-4)'s vision capabilities with reinforcement learning.[&#91;2&#93;](#cite_note-openai-2) Released in July 2025 via [Azure OpenAI](/index.php?title=Azure_OpenAI&action=edit&redlink=1), it achieves:

- 58.1% success rate on WebArena benchmark

- 87% success rate on WebVoyager benchmark

- 38.1% success rate on OSWorld benchmark

- Supports cross-platform operation (Windows, macOS, Linux)[&#91;13&#93;](#cite_note-convergence-13)

### Anthropic Claude Computer Use

[Anthropic](/wiki/anthropic)'s Claude 3.5 Sonnet was the first frontier AI model to offer computer use capabilities in public beta (October 22, 2024).[&#91;1&#93;](#cite_note-anthropic-1) Features include:

- Pixel counting navigation method

- 14.9% score on OSWorld (screenshot-only)

- 22.0% score on OSWorld (with additional steps)

- Available through API for developer integration

- Early adopters include [Asana](/index.php?title=Asana&action=edit&redlink=1), [DoorDash](/index.php?title=DoorDash&action=edit&redlink=1), and [Replit](/index.php?title=Replit&action=edit&redlink=1) for multi-step automation[&#91;1&#93;](#cite_note-anthropic-1)

## Benchmarks and Evaluation

| Model | OSWorld | WebArena | WebVoyager | Online-Mind2Web | AndroidWorld |
| --- | --- | --- | --- | --- | --- |
| [OpenAI CUA](/index.php?title=OpenAI_CUA&action=edit&redlink=1) | 38.1% | 58.1% | 87% | - | - |
| [Gemini 2.5 Computer Use](/index.php?title=Gemini_2.5_Computer_Use&action=edit&redlink=1) | - | - | 34.7% | 70.3% | 70.9% |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 14.9-22% | - | - | - | - |
| Human Performance | 72.36% | - | - | - | - |

### OSWorld

[OSWorld](/index.php?title=OSWorld&action=edit&redlink=1) is a comprehensive benchmark for evaluating multimodal agents on open-ended computer tasks across Ubuntu, Windows, and macOS.[&#91;14&#93;](#cite_note-osworld-14) The benchmark consists of 369 tasks involving:

- Real web and desktop applications

- OS file I/O operations

- Multi-application workflows

- Cross-platform compatibility testing[&#91;15&#93;](#cite_note-osworld_neurips-15)

### WebArena

[WebArena](/index.php?title=WebArena&action=edit&redlink=1) evaluates web browsing agents using self-hosted open-source websites that simulate real-world scenarios in [e-commerce](/index.php?title=E-commerce&action=edit&redlink=1), content management systems, and social platforms.[&#91;2&#93;](#cite_note-openai-2) It tests abilities including form filling, multi-step navigation, information extraction, and transaction completion.

### WebVoyager

[WebVoyager](/index.php?title=WebVoyager&action=edit&redlink=1) tests model performance on live websites including Amazon, GitHub, and Google Maps, evaluating real-world web interaction capabilities.[&#91;2&#93;](#cite_note-openai-2)

[Browserbase](/index.php?title=Browserbase&action=edit&redlink=1) collaboration with Google DeepMind reported Gemini 2.5 Computer Use leading in accuracy, speed, and cost under matched constraints, with public evaluation traces across thousands of human-verified runs.[&#91;16&#93;](#cite_note-browserbase-16)

## Supported Actions

Computer-use models typically support a standardized set of UI actions. Developers must implement the execution logic for these actions on their client-side application:[&#91;9&#93;](#cite_note-gemini-docs-9)

| Action | Description | Parameters |
| --- | --- | --- |
| open_web_browser | Opens the web browser | None |
| click_at | Click at specific coordinates | x, y coordinates |
| type_text_at | Type text at location | x, y, text, clear_before_typing, press_enter |
| scroll_document | Scroll entire page | direction (up/down/left/right) |
| scroll_at | Scroll specific element/region | x, y, direction, magnitude |
| drag_and_drop | Drag element to new location | start x,y, destination x,y |
| key_combination | Press keyboard shortcuts | keys (for example "Control+C") |
| hover_at | Hover mouse at location | x, y coordinates |
| navigate | Go to URL | url |
| wait_5_seconds | Pause execution | None |
| go_back/go_forward | Navigate browser history | None |
| search | Go to default search engine | None |

Developers can also add custom user-defined functions (for example `open_app`, `long_press_at` for mobile) and exclude specific predefined functions to constrain behavior.[&#91;9&#93;](#cite_note-gemini-docs-9)

## Applications

Computer-use models have numerous practical applications across industries:[&#91;3&#93;](#cite_note-gemini-3)[&#91;5&#93;](#cite_note-simular-5)

### Business Automation

- Data entry and form processing across multiple websites

- Cross-application workflow automation

- Report generation from multiple sources

- Customer service automation

- Invoice and document processing

### Software Development

- [UI testing](/index.php?title=UI_testing&action=edit&redlink=1) and quality assurance (Google's payments team recovered 60% of failed tests)[&#91;3&#93;](#cite_note-gemini-3)

- Automated debugging and cross-browser compatibility testing

- Accessibility testing

- Performance monitoring

- Firebase Testing Agent and similar tools[&#91;3&#93;](#cite_note-gemini-3)

### Research and Analysis

- Web scraping and data collection (for example gathering product information, prices, and reviews)

- Competitive intelligence gathering

- Market research automation

- Academic research assistance

- Content aggregation

### Personal Productivity

- Email management and calendar scheduling

- File organization

- Online shopping assistance (for example finding "highly rated smart fridges with touchscreen")

- Social media management

- Personal assistant applications (Poke.com reports 50% speed improvement)[&#91;3&#93;](#cite_note-gemini-3)

## Safety and Security

Computer-use models introduce unique risks including intentional misuse, unexpected model behavior, and vulnerability to prompt injections and scams. To address these, implementations use layered safety approaches:[&#91;3&#93;](#cite_note-gemini-3)[&#91;9&#93;](#cite_note-gemini-docs-9)

### Built-in Safety

- **Per-step safety service**: An out-of-model, inference-time safety service assesses each action before execution

- **Safety decisions**: Actions classified as regular/allowed, requires_confirmation, or blocked

- **Training-level safety**: Features trained directly into models to avoid harmful actions

### Prompt Injection Attacks

[Prompt injection](/wiki/prompt_injection) represents one of the most significant security risks for computer-use models.[&#91;17&#93;](#cite_note-owasp-17) These attacks can occur through:

- **Direct injection**: Malicious instructions embedded in user input[&#91;18&#93;](#cite_note-paloalto-18)

- **Indirect injection**: Hidden commands in external content (web pages, documents)[&#91;19&#93;](#cite_note-ibm-19)

- **Stored injection**: Persistent malicious prompts in training data or memory[&#91;20&#93;](#cite_note-lakera-20)

### Mitigation Strategies

Organizations implementing computer-use models should employ multiple layers of security:[&#91;21&#93;](#cite_note-aws-21)

1. **Sandboxed Execution**: Run agents in isolated [virtual machines](/index.php?title=Virtual_machines&action=edit&redlink=1) or [containers](/index.php?title=Docker_container&action=edit&redlink=1)[&#91;1&#93;](#cite_note-anthropic-1)

2. **Human-in-the-Loop (HITL)**: Require human confirmation for sensitive actions (for example purchases, CAPTCHA interactions)[&#91;9&#93;](#cite_note-gemini-docs-9)

3. **System Instructions**: Custom safety policies to block or require confirmation for high-stakes actions

4. **Access Control**: Implement strict permission boundaries and authentication

5. **Content Filtering**: Use guardrails to detect and block malicious inputs[&#91;7&#93;](#cite_note-azure-7)

6. **Monitoring and Logging**: Track all agent actions for audit and forensics

7. **Rate Limiting**: Prevent abuse through action frequency restrictions

8. **Allowlists/Blocklists**: Control which websites agents can access

### Ethical Considerations

The deployment of computer-use models raises several ethical concerns:

- Privacy implications of screen content analysis

- Potential for unauthorized data access or exfiltration

- Risk of perpetuating biases in automated decisions

- Impact on employment in data entry and similar fields

- Need for transparency in automated actions[&#91;22&#93;](#cite_note-salesforce-22)

## Technical Infrastructure

### Virtual Network Computing (VNC)

Many computer-use implementations rely on [VNC](/index.php?title=VNC&action=edit&redlink=1) (Virtual Network Computing) protocol for remote desktop access.[&#91;23&#93;](#cite_note-vnc-23) VNC provides:

- Platform-independent remote control

- [Remote Frame Buffer](/index.php?title=Remote_Frame_Buffer&action=edit&redlink=1) (RFB) protocol for screen sharing

- Pixel-level screen capture capabilities

- Mouse and keyboard event transmission

- Support for various encoding methods (Raw, RRE, Hextile, ZRLE, Tight)[&#91;24&#93;](#cite_note-ultravnc-24)

### Implementation Requirements

Deploying computer-use models typically requires:[&#91;25&#93;](#cite_note-osworld_github-25)[&#91;9&#93;](#cite_note-gemini-docs-9)

- Execution environment (cloud VM, local container, or sandboxed system)

- Screenshot capture mechanism

- Input device emulation (mouse/keyboard control)

- Client-side action executor (for example [Playwright](/index.php?title=Playwright&action=edit&redlink=1), [Selenium](/index.php?title=Selenium&action=edit&redlink=1))

- Browser automation runtime

- Safety monitoring system

- Logging and audit infrastructure

Google provides a reference implementation on [GitHub](/index.php?title=GitHub&action=edit&redlink=1) demonstrating setup and example loops for browser control agents.[&#91;26&#93;](#cite_note-github-26)

## Future Developments

### Research Directions

Current research in computer-use models focuses on:[&#91;27&#93;](#cite_note-acu-27)

- Improving accuracy on complex, multi-step tasks (current best: 38% vs 72% human performance)

- Reducing latency for real-time interactions

- Enhancing spatial reasoning capabilities

- Developing better safety mechanisms against prompt injection

- Extending support to mobile and embedded systems

- Desktop OS-level control optimization

### Emerging Trends

- **Multimodal Integration**: Combining screen understanding with audio and video processing[&#91;28&#93;](#cite_note-vlm2025-28)

- **Continual Learning**: Models that improve through experience and retain task-specific knowledge[&#91;5&#93;](#cite_note-simular-5)

- **Specialized Agents**: Domain-specific models optimized for particular industries or applications

- **Federated Learning**: Privacy-preserving training across distributed deployments

- **Neuromorphic Computing**: Hardware acceleration for more efficient inference

## Limitations

Current computer-use models face several technical limitations:[&#91;1&#93;](#cite_note-anthropic-1)[&#91;2&#93;](#cite_note-openai-2)[&#91;9&#93;](#cite_note-gemini-docs-9)

- **Preview Status**: Models are experimental with potential for errors and security vulnerabilities

- **Accuracy Gap**: Best models achieve only ~38% success on complex OS tasks versus 72% human performance[&#91;14&#93;](#cite_note-osworld-14)

- **Spatial Reasoning**: Difficulty with precise positioning and complex layouts

- **Dynamic Content**: Challenges with animations, videos, and rapidly changing interfaces

- **Security Restrictions**: Cannot autonomously handle CAPTCHAs, authentication flows, or payment systems[&#91;4&#93;](#cite_note-ieee-4)

- **Context Windows**: Limited ability to maintain long interaction histories

- **Error Recovery**: Difficulty recovering from unexpected states or errors

- **Platform Optimization**: Variable performance across different operating systems and environments

## Open Source Projects

Several open-source initiatives support computer-use model development:

- **[OSWorld](/index.php?title=OSWorld&action=edit&redlink=1)**: Benchmark and evaluation framework for cross-platform agent testing[&#91;25&#93;](#cite_note-osworld_github-25)

- **[ScreenAgent](/index.php?title=ScreenAgent&action=edit&redlink=1)**: Computer control agent with visual language model[&#91;29&#93;](#cite_note-screenagent-29)

- **[Self-Operating Computer](/index.php?title=Self-Operating_Computer&action=edit&redlink=1)**: Framework for multimodal AI computer control[&#91;30&#93;](#cite_note-hyperwrite-30)

- **[Agent S2](/index.php?title=Agent_S2&action=edit&redlink=1)**: Modular framework with visual grounding and memory mechanisms[&#91;5&#93;](#cite_note-simular-5)

- **[Google Computer Use Preview](/index.php?title=Google_Computer_Use_Preview&action=edit&redlink=1)**: Reference implementation for Gemini model[&#91;26&#93;](#cite_note-github-26)

## See Also

- [Agent (artificial intelligence)](/index.php?title=Agent_(artificial_intelligence)&action=edit&redlink=1)

- [Robotic process automation](/index.php?title=Robotic_process_automation&action=edit&redlink=1)

- [UI automation](/index.php?title=UI_automation&action=edit&redlink=1)

- [Vision-language models](/index.php?title=Vision-language_models&action=edit&redlink=1)

- [Reinforcement learning](/wiki/reinforcement_learning)

- [Function calling](/index.php?title=Function_calling&action=edit&redlink=1)

- [Prompt engineering](/wiki/prompt_engineering)

- [Prompt injection](/wiki/prompt_injection)

- [AI safety](/index.php?title=AI_safety&action=edit&redlink=1)

- [Virtual Network Computing](/index.php?title=Virtual_Network_Computing&action=edit&redlink=1)

- [Web scraping](/index.php?title=Web_scraping&action=edit&redlink=1)

- [End-user programming](/index.php?title=End-user_programming&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-anthropic_1-0) [1.1](#cite_ref-anthropic_1-1) [1.2](#cite_ref-anthropic_1-2) [1.3](#cite_ref-anthropic_1-3) [1.4](#cite_ref-anthropic_1-4) [1.5](#cite_ref-anthropic_1-5) [https://www.anthropic.com/news/3-5-models-and-computer-use](https://www.anthropic.com/news/3-5-models-and-computer-use)

2. ↑ [2.0](#cite_ref-openai_2-0) [2.1](#cite_ref-openai_2-1) [2.2](#cite_ref-openai_2-2) [2.3](#cite_ref-openai_2-3) [2.4](#cite_ref-openai_2-4) [2.5](#cite_ref-openai_2-5) [2.6](#cite_ref-openai_2-6) [https://openai.com/index/computer-using-agent/](https://openai.com/index/computer-using-agent/)

3. ↑ [3.00](#cite_ref-gemini_3-0) [3.01](#cite_ref-gemini_3-1) [3.02](#cite_ref-gemini_3-2) [3.03](#cite_ref-gemini_3-3) [3.04](#cite_ref-gemini_3-4) [3.05](#cite_ref-gemini_3-5) [3.06](#cite_ref-gemini_3-6) [3.07](#cite_ref-gemini_3-7) [3.08](#cite_ref-gemini_3-8) [3.09](#cite_ref-gemini_3-9) [3.10](#cite_ref-gemini_3-10) [3.11](#cite_ref-gemini_3-11) [3.12](#cite_ref-gemini_3-12) [3.13](#cite_ref-gemini_3-13) [3.14](#cite_ref-gemini_3-14) [https://blog.google/technology/google-deepmind/gemini-computer-use-model/](https://blog.google/technology/google-deepmind/gemini-computer-use-model/)

4. ↑ [4.0](#cite_ref-ieee_4-0) [4.1](#cite_ref-ieee_4-1) [https://spectrum.ieee.org/ai-agents-computer-use](https://spectrum.ieee.org/ai-agents-computer-use)

5. ↑ [5.0](#cite_ref-simular_5-0) [5.1](#cite_ref-simular_5-1) [5.2](#cite_ref-simular_5-2) [5.3](#cite_ref-simular_5-3) [https://www.simular.ai/articles/agent-s2](https://www.simular.ai/articles/agent-s2)

6. [↑](#cite_ref-anthropic-dev_6-0) [https://www.anthropic.com/news/developing-computer-use](https://www.anthropic.com/news/developing-computer-use)

7. ↑ [7.0](#cite_ref-azure_7-0) [7.1](#cite_ref-azure_7-1) [https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/computer-use](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/computer-use)

8. [↑](#cite_ref-9to5google_8-0) [https://9to5google.com/2025/10/07/gemini-2-5-computer-use-model/](https://9to5google.com/2025/10/07/gemini-2-5-computer-use-model/)

9. ↑ [9.00](#cite_ref-gemini-docs_9-0) [9.01](#cite_ref-gemini-docs_9-1) [9.02](#cite_ref-gemini-docs_9-2) [9.03](#cite_ref-gemini-docs_9-3) [9.04](#cite_ref-gemini-docs_9-4) [9.05](#cite_ref-gemini-docs_9-5) [9.06](#cite_ref-gemini-docs_9-6) [9.07](#cite_ref-gemini-docs_9-7) [9.08](#cite_ref-gemini-docs_9-8) [9.09](#cite_ref-gemini-docs_9-9) [9.10](#cite_ref-gemini-docs_9-10) [https://ai.google.dev/gemini-api/docs/computer-use](https://ai.google.dev/gemini-api/docs/computer-use)

10. [↑](#cite_ref-rlvlm_10-0) [https://proceedings.mlr.press/v235/wang24bn.html](https://proceedings.mlr.press/v235/wang24bn.html)

11. [↑](#cite_ref-rlhf_11-0) [https://encord.com/blog/guide-to-rlhf/](https://encord.com/blog/guide-to-rlhf/)

12. [↑](#cite_ref-marktechpost_12-0) [https://www.marktechpost.com/2025/10/08/google-ai-introduces-gemini-2-5-computer-use-preview-a-browser-control-model-to-power-ai-agents-to-interact-with-user-interfaces/](https://www.marktechpost.com/2025/10/08/google-ai-introduces-gemini-2-5-computer-use-preview-a-browser-control-model-to-power-ai-agents-to-interact-with-user-interfaces/)

13. [↑](#cite_ref-convergence_13-0) [https://www.convergenceindia.org/industry-news/artificial-intelligence/test-scores-of-chatgpts-all-new-computer-using-agent-operator-might-blow-your-minds-119000/](https://www.convergenceindia.org/industry-news/artificial-intelligence/test-scores-of-chatgpts-all-new-computer-using-agent-operator-might-blow-your-minds-119000/)

14. ↑ [14.0](#cite_ref-osworld_14-0) [14.1](#cite_ref-osworld_14-1) [https://os-world.github.io/](https://os-world.github.io/)

15. [↑](#cite_ref-osworld_neurips_15-0) [https://neurips.cc/virtual/2024/poster/97468](https://neurips.cc/virtual/2024/poster/97468)

16. [↑](#cite_ref-browserbase_16-0) [https://www.browserbase.com/blog/evaluating-browser-agents](https://www.browserbase.com/blog/evaluating-browser-agents)

17. [↑](#cite_ref-owasp_17-0) [https://genai.owasp.org/llmrisk/llm01-prompt-injection/](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

18. [↑](#cite_ref-paloalto_18-0) [https://www.paloaltonetworks.com/cyberpedia/what-is-a-prompt-injection-attack](https://www.paloaltonetworks.com/cyberpedia/what-is-a-prompt-injection-attack)

19. [↑](#cite_ref-ibm_19-0) [https://www.ibm.com/think/topics/prompt-injection](https://www.ibm.com/think/topics/prompt-injection)

20. [↑](#cite_ref-lakera_20-0) [https://www.lakera.ai/blog/guide-to-prompt-injection](https://www.lakera.ai/blog/guide-to-prompt-injection)

21. [↑](#cite_ref-aws_21-0) [https://aws.amazon.com/blogs/security/safeguard-your-generative-ai-workloads-from-prompt-injections/](https://aws.amazon.com/blogs/security/safeguard-your-generative-ai-workloads-from-prompt-injections/)

22. [↑](#cite_ref-salesforce_22-0) [https://www.salesforce.com/blog/prompt-injection-detection/](https://www.salesforce.com/blog/prompt-injection-detection/)

23. [↑](#cite_ref-vnc_23-0) [https://en.wikipedia.org/wiki/VNC](https://en.wikipedia.org/wiki/VNC)

24. [↑](#cite_ref-ultravnc_24-0) [https://uvnc.com/docs/ultravnc-viewer/71-ultravnc-viewer-gui.html](https://uvnc.com/docs/ultravnc-viewer/71-ultravnc-viewer-gui.html)

25. ↑ [25.0](#cite_ref-osworld_github_25-0) [25.1](#cite_ref-osworld_github_25-1) [https://github.com/xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld)

26. ↑ [26.0](#cite_ref-github_26-0) [26.1](#cite_ref-github_26-1) [https://github.com/google/computer-use-preview](https://github.com/google/computer-use-preview)

27. [↑](#cite_ref-acu_27-0) [https://github.com/trycua/acu](https://github.com/trycua/acu)

28. [↑](#cite_ref-vlm2025_28-0) [https://huggingface.co/blog/vlms-2025](https://huggingface.co/blog/vlms-2025)

29. [↑](#cite_ref-screenagent_29-0) [https://github.com/niuzaisheng/ScreenAgent](https://github.com/niuzaisheng/ScreenAgent)

30. [↑](#cite_ref-hyperwrite_30-0) [https://www.hyperwriteai.com/self-operating-computer](https://www.hyperwriteai.com/self-operating-computer)