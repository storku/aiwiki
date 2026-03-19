---
title: "AutoGen"
slug: "autogen"
categories:
  - "Artificial_intelligence"
  - "Software_frameworks"
  - "Agents"
  - "Microsoft"
  - "Open-source_software"
---

**AutoGen** is an open-source [Python](/wiki/python_(programming_language)) framework developed by [Microsoft Research](/index.php?title=Microsoft_Research&action=edit&redlink=1) for building [AI agents](/wiki/ai_agent) and facilitating cooperation among multiple agents to solve tasks through multi-agent conversation. First released in September 2023 as a spinoff from the FLAML (Fast Library for Automated Machine Learning) project, AutoGen introduced the concept of "conversable agents" and "conversation programming" as a unified paradigm for building [large language model](/wiki/large_language_model) applications.[&#91;1&#93;](#cite_note-1)[&#91;2&#93;](#cite_note-2)

The framework allows developers to create customizable agents that can operate in various modes combining LLMs, human inputs, and tools. AutoGen agents communicate through natural language messages, supporting both autonomous and human-in-the-loop workflows. As of early 2026, the project has accumulated over 54,500 stars on [GitHub](/wiki/github), making it one of the most popular [open-source](/index.php?title=Open-source_software&action=edit&redlink=1) AI agent frameworks.[&#91;3&#93;](#cite_note-3)[&#91;4&#93;](#cite_note-4)

In October 2025, [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) announced the merger of AutoGen with [Semantic Kernel](/index.php?title=Semantic_Kernel&action=edit&redlink=1) into the unified Microsoft Agent Framework, placing AutoGen into maintenance mode for critical bug fixes and security patches while directing new feature development to the combined framework.[&#91;5&#93;](#cite_note-5)

## History

### Origins and Research Paper

AutoGen originated from research at [Microsoft Research](/index.php?title=Microsoft_Research&action=edit&redlink=1), with the foundational paper titled "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation" submitted to arXiv on August 16, 2023 (arXiv:2308.08155). The paper was authored by a team of researchers from Microsoft Research, Pennsylvania State University, the University of Washington, and Xidian University. Key authors included Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W. White, Doug Burger, and Chi Wang.[&#91;1&#93;](#cite_note-1)[&#91;6&#93;](#cite_note-6)

The paper demonstrated that AutoGen's multi-agent conversation approach could effectively address tasks across diverse domains including mathematics, coding, question answering, operations research, online decision-making, and entertainment. The core innovation was the introduction of conversable agents and conversation programming, which unified and automated multi-agent interactions in LLM applications.[&#91;1&#93;](#cite_note-1)

### Early Versions (v0.1 to v0.2)

AutoGen was released as an open-source framework in September 2023, growing rapidly in community adoption. The v0.2 release established the foundational architecture centered on `ConversableAgent`, `AssistantAgent`, `UserProxyAgent`, and `GroupChat` classes. By May 2024, AutoGen had more than 290 community contributors on GitHub and 890,000 downloads of the Python package.[&#91;7&#93;](#cite_note-7)

Key features of v0.2 included:

- **ConversableAgent**: The base class for all agents, enabling seamless communication between AI entities
- **AssistantAgent**: An LLM-based agent that generates code and content
- **UserProxyAgent**: A proxy for human users that can execute code, solicit feedback, or provide auto-feedback
- **GroupChat**: Multi-agent conversation orchestration with configurable speaker selection

### The AG2 Fork (2024)

In September 2024, some of the original creators of AutoGen, including Chi Wang and Qingyun Wu, departed Microsoft and created a community-driven fork of the project called AG2 (originally styled as "AutoGen 2.0"). The fork led to a complex split of project resources.[&#91;8&#93;](#cite_note-8)[&#91;9&#93;](#cite_note-9)

| Resource | Controlled By |
| --- | --- |
| GitHub repository (microsoft/autogen) | Microsoft |
| PyPI packages (autogen, pyautogen) | AG2 / Original creators |
| Discord community | AG2 / Original creators |
| New AG2 GitHub repository (ag2ai/ag2) | AG2 community |

AG2 maintained the familiar architecture of AutoGen 0.2, offering stability and backward compatibility under community governance. Microsoft, meanwhile, pursued a complete architectural reimagining in AutoGen 0.4. The split caused significant confusion in the community, with developers needing to choose between two codebases with distinct feature sets and development philosophies. Microsoft published a blog post titled "Clearing Up AutoGen Fork Confusion" in November 2024 to address the situation.[&#91;8&#93;](#cite_note-8)

### AutoGen v0.4 (2025)

AutoGen v0.4 represented a complete redesign of the framework, focusing on improved code quality, robustness, usability, and scalability of agentic workflows. The release adopted a layered, modular architecture based on the actor model for distributed, scalable, event-driven systems.[&#91;10&#93;](#cite_note-10)

### Microsoft Agent Framework (2025-2026)

In October 2025, Microsoft announced the Microsoft Agent Framework, an open-source SDK and runtime that unifies AutoGen's agent abstractions with Semantic Kernel's enterprise features. The framework combines AutoGen's orchestration patterns (GroupChat, GraphFlow, event-driven runtimes) with Semantic Kernel's session-based state management, type safety, middleware, telemetry, and model support.[&#91;5&#93;](#cite_note-5)[&#91;11&#93;](#cite_note-11)

| Date | Milestone |
| --- | --- |
| August 2023 | Research paper submitted to arXiv |
| September 2023 | Open-source release of AutoGen |
| September 2024 | AG2 fork by original creators |
| November 2024 | "Clearing Up Fork Confusion" blog post |
| Early 2025 | AutoGen v0.4 released |
| October 2025 | Microsoft Agent Framework public preview; AutoGen enters maintenance mode |
| February 2026 | Microsoft Agent Framework Release Candidate 1.0 |
| Q1 2026 (target) | Microsoft Agent Framework 1.0 GA |

## Architecture

AutoGen v0.4 uses a layered and modular architecture that allows users to target the level of abstraction their scenario requires. The framework consists of two primary API layers: a Core API and an AgentChat API built on top of it.[&#91;10&#93;](#cite_note-10)

### Core API

The Core API provides a scalable, event-driven actor framework for creating agentic workflows. Agents in the Core layer communicate through asynchronous messages, supporting both event-driven and request/response interaction patterns. This layer is designed for developers who need fine-grained control over agent behavior and communication patterns.[&#91;10&#93;](#cite_note-10)

Key characteristics of the Core API:

- **Asynchronous messaging**: Agents communicate through async message passing rather than synchronous function calls
- **Actor model**: Based on the actor model for distributed computing, enabling scalable multi-agent systems
- **Event-driven patterns**: Supports building proactive and long-running agents using event-driven architectures
- **Pluggable components**: Custom agents, tools, memory, and models can be integrated through well-defined interfaces

### AgentChat API

The AgentChat API is a higher-level, task-driven framework built on the Core API. It provides pre-built agent types and team orchestration patterns designed for rapid prototyping and common multi-agent scenarios.[&#91;12&#93;](#cite_note-12)

#### Agent Types

| Agent Type | Description |
| --- | --- |
| `AssistantAgent` | An LLM-based agent that uses language models and tools to generate responses. Described as a "kitchen sink agent" for prototyping and educational purposes. |
| `UserProxyAgent` | Acts as a proxy for a human user. Can execute code, solicit human feedback, or provide auto-feedback based on code execution results. |
| `CodeExecutorAgent` | Specialized agent for executing code in sandboxed environments. |
| Custom agents | Developers can implement custom agent classes by extending base types. |

All agents share common attributes and methods:

| Attribute/Method | Description |
| --- | --- |
| `name` | A unique string identifier for the agent |
| `description` | Text describing the agent's purpose (used by team orchestrators for speaker selection) |
| `run()` | Executes the agent with a task, returning a `TaskResult` |
| `run_stream()` | Returns an iterator of messages and events, ending with a `TaskResult` |

A basic agent definition in AutoGen v0.4:

```python
from autogen_agentchat.agents import AssistantAgent
from autogen_ext.models.openai import OpenAIChatCompletionClient

# Define a tool as a Python function
async def web_search(query: str) -> str:
    """Find information on the web"""
    return "Results for: " + query

# Create model client
model_client = OpenAIChatCompletionClient(model="gpt-4o")

# Create agent
agent = AssistantAgent(
    name="research_assistant",
    model_client=model_client,
    tools=[web_search],
    system_message="You are a helpful research assistant. Use tools to find information.",
)

# Run the agent
result = await agent.run(task="What are the latest trends in AI?")
```

#### Team Types

AutoGen v0.4 provides several pre-built team patterns for multi-agent collaboration.[&#91;12&#93;](#cite_note-12)

| Team Type | Description |
| --- | --- |
| `RoundRobinGroupChat` | Agents take turns speaking in a round-robin fashion. Each agent broadcasts its response to all others, maintaining shared context. |
| `SelectorGroupChat` | Uses a ChatCompletion model to dynamically select the next speaker after each message, based on agent descriptions and conversation context. |
| `MagenticOneGroupChat` | A generalist multi-agent system for solving open-ended web and file-based tasks across various domains. |
| `Swarm` | Uses `HandoffMessage` signals for agent transitions, allowing agents to pass control based on conversation flow. |

A team definition example:

```python
from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.teams import RoundRobinGroupChat
from autogen_agentchat.conditions import TextMentionTermination
from autogen_ext.models.openai import OpenAIChatCompletionClient

model_client = OpenAIChatCompletionClient(model="gpt-4o")

# Define agents
primary = AssistantAgent(
    "primary",
    model_client=model_client,
    system_message="You are a helpful AI assistant. Solve tasks carefully.",
)

critic = AssistantAgent(
    "critic",
    model_client=model_client,
    system_message="Provide constructive feedback. Say 'APPROVE' when satisfied.",
)

# Define termination condition
termination = TextMentionTermination("APPROVE")

# Create team
team = RoundRobinGroupChat(
    [primary, critic],
    termination_condition=termination
)

# Run the team
result = await team.run(task="Write a haiku about artificial intelligence.")
```

### Termination Conditions

AutoGen provides several built-in termination conditions that control when a team stops execution:

- **TextMentionTermination**: Stops when a specific text string appears in an agent's response
- **MaxMessageTermination**: Stops after a specified number of messages
- **ExternalTermination**: Allows external control to stop the team, letting the current agent complete its turn before stopping
- **Custom conditions**: Developers can implement custom termination logic

## Key Features

### Code Execution

Code execution is one of AutoGen's distinguishing capabilities. The `AssistantAgent` can generate Python code, which the `UserProxyAgent` or `CodeExecutorAgent` executes in a sandboxed environment. As of AutoGen 0.2.8, code execution inside a [Docker](/index.php?title=Docker_(software)&action=edit&redlink=1) container became the default setting, using the `python:3-slim` image (customizable).[&#91;13&#93;](#cite_note-13)

The `DockerCommandLineCodeExecutor` creates a Docker container and runs all commands within it, preventing agents from accessing sensitive data on the host system. AutoGen also supports execution through Azure Container Apps for cloud-based sandboxing. When running AutoGen itself inside a Docker container, the Docker socket can be mounted to allow spawning sibling containers on the host.[&#91;13&#93;](#cite_note-13)

### Human-in-the-Loop

AutoGen's `UserProxyAgent` enables flexible human-in-the-loop workflows. The agent can be configured to always solicit human feedback, provide automatic feedback based on code execution results, or combine both approaches. The system supports asynchronous human-in-the-loop interactions, where an agent team can complete a task, flag it for human review, and pause until approval is received.[&#91;14&#93;](#cite_note-14)

### Observability and Telemetry

AutoGen v0.4 includes built-in support for tracing and observability powered by [OpenTelemetry](/index.php?title=OpenTelemetry&action=edit&redlink=1). The framework follows OpenTelemetry Semantic Conventions for agents and tools, as well as the Semantic Conventions for GenAI Systems. Compatible backends include Jaeger and Zipkin for trace collection and analysis.[&#91;15&#93;](#cite_note-15)

Observability features include:

- **Message tracing**: Recording the flow of messages between agents
- **Metric tracking**: Monitoring performance metrics including execution time and token usage
- **Cost tracking**: Tracking the monetary cost of LLM API calls
- **Debugging tools**: Tools for identifying bottlenecks, tracing decision paths, and diagnosing failures

### State Management

AutoGen v0.4 introduced capabilities for saving and restoring task progress, enabling agents to resume paused actions where they left off. Teams can be reset using the `reset()` method, which clears team state and all agent histories. Individual agents implement an `on_reset()` callback for custom cleanup logic.[&#91;10&#93;](#cite_note-10)

### AutoGen Studio

AutoGen Studio is a low-code interface for building, testing, and deploying multi-agent workflows. It provides a visual drag-and-drop builder where developers can compose agents into teams without writing code.[&#91;16&#93;](#cite_note-16)

| Feature | Description |
| --- | --- |
| Visual builder | Drag-and-drop interface for composing agents, tools, and workflows |
| Agent library | Pre-defined agents that can be customized with models, prompts, and skills |
| Testing | Immediate workflow testing with insights into agent actions, costs, and outcomes |
| Inner monologue | Renders agent reasoning, showing message counts and cost per task |
| Real-time control | Mid-execution control and message flow visualization |
| Export | Workflows exportable as APIs, JSON files, or Dockerfiles |
| Sharing | Skills, agents, and workflows can be downloaded, shared, and reused |

AutoGen Studio is built on the AutoGen framework and inherits its features, while providing an intuitive interface accessible to developers with limited coding experience. It supports customization of agents with foundation models, prompts, skills (Python functions), and workflows through the graphical interface.[&#91;16&#93;](#cite_note-16)

## Conversation Patterns

AutoGen's core design innovation is the use of multi-agent conversation as the primary programming paradigm. The framework supports several conversation patterns.[&#91;1&#93;](#cite_note-1)

### Two-Agent Chat

The simplest pattern involves two agents in a back-and-forth conversation. A typical configuration pairs an `AssistantAgent` (which generates code or content) with a `UserProxyAgent` (which executes code and provides feedback). The conversation continues until a termination condition is met or a maximum number of turns is reached.

### GroupChat

GroupChat enables conversations among three or more agents, managed by a `GroupChatManager` that selects the next speaker. Speaker selection can be automatic (using an LLM to decide), round-robin, random, or manual. The GroupChat class accepts parameters including the list of agents, message history, and maximum number of rounds.[&#91;2&#93;](#cite_note-2)

```python
import autogen

# Define multiple agents
user_proxy = autogen.UserProxyAgent(
    name="user_proxy",
    human_input_mode="TERMINATE",
    code_execution_config={"work_dir": "coding"}
)

coder = autogen.AssistantAgent(
    name="coder",
    llm_config=llm_config,
    system_message="You are a Python developer."
)

reviewer = autogen.AssistantAgent(
    name="reviewer",
    llm_config=llm_config,
    system_message="You are a code reviewer."
)

# Create GroupChat
groupchat = autogen.GroupChat(
    agents=[user_proxy, coder, reviewer],
    messages=[],
    max_round=12
)

manager = autogen.GroupChatManager(
    groupchat=groupchat,
    llm_config=llm_config
)

# Start the conversation
user_proxy.initiate_chat(
    manager,
    message="Write a Python function that calculates Fibonacci numbers."
)
```

### Nested Chat

Nested chat allows an agent to trigger a separate, contained conversation as part of its response generation. This pattern is useful for breaking down complex tasks into sub-tasks handled by specialized agent groups.

### Sequential Chat

Sequential chat chains multiple two-agent conversations together, where the output of one conversation feeds into the next. This pattern is useful for multi-stage pipelines where each stage requires different agent expertise.

## Comparison with Other Frameworks

### AutoGen vs. CrewAI

| Aspect | AutoGen | [CrewAI](/wiki/crewai) |
| --- | --- | --- |
| Design philosophy | Conversation-based, message-passing agents | Role-based, structured task orchestration |
| Core abstraction | Conversable agents communicating via messages | Agents with roles, goals, and backstories assigned to tasks |
| Code execution | Built-in, Docker-sandboxed by default | Optional, configurable sandboxing |
| Human-in-the-loop | `UserProxyAgent` with configurable input modes | `human_input` parameter on tasks |
| Orchestration patterns | GroupChat, Swarm, Selector, MagenticOne | Sequential and hierarchical processes |
| Low-code interface | AutoGen Studio (drag-and-drop) | YAML configuration with decorators |
| Learning curve | Steeper; more flexible but more to configure | Gentler; faster to prototype |
| Best for | Complex reasoning, coding tasks, research | Workflow automation, content pipelines |
| Current status | Maintenance mode; succeeded by Microsoft Agent Framework | Active, independent development |

A common recommendation is to choose CrewAI when you know how to solve a problem and want to automate the process, and AutoGen when you want agents to collaboratively figure out a solution. CrewAI is generally faster to prototype structured workflows, while AutoGen excels at flexible, human-in-the-loop conversations.[&#91;17&#93;](#cite_note-17)

### AutoGen vs. LangGraph

[LangGraph](/index.php?title=LangGraph&action=edit&redlink=1) (by [LangChain](/wiki/langchain)) provides a graph-based approach where nodes represent computation steps and edges define transitions. AutoGen's conversation-based approach is more natural for open-ended, collaborative problem-solving, while LangGraph's explicit graph structure offers more deterministic control over execution flow. LangGraph is tightly integrated with the LangChain ecosystem, whereas AutoGen is framework-independent.[&#91;18&#93;](#cite_note-18)

## Adoption and Community

AutoGen has been one of the most widely adopted open-source AI agent frameworks since its release. Key metrics include:

| Metric | Value |
| --- | --- |
| GitHub stars | 54,500+ (as of early 2026) |
| Contributors | 559 |
| Releases | 98 |
| Commits | 3,776 |
| Issues resolved | 2,488 |
| Python downloads | 890,000+ (as of May 2024) |

The project has attracted contributions from researchers at Microsoft Research, academic institutions (Pennsylvania State University, University of Washington), and Microsoft product teams (Microsoft Fabric, ML.NET).[&#91;7&#93;](#cite_note-7)

AutoGen's influence extends beyond its own codebase. The conversable agent pattern and GroupChat orchestration model introduced by AutoGen have been adopted or adapted by several other frameworks in the AI agent ecosystem. A Microsoft Research study from late 2025 showed that AutoGen reduced debugging time by 43% for complex coding tasks, where the multi-agent review process caught errors that single-agent systems missed.[&#91;17&#93;](#cite_note-17)

## Microsoft Agent Framework

The Microsoft Agent Framework represents the next evolution of AutoGen's technology. Announced in October 2025, it is an open-source SDK and runtime that unifies AutoGen's agent abstractions with [Semantic Kernel](/index.php?title=Semantic_Kernel&action=edit&redlink=1)'s enterprise-grade capabilities.[&#91;5&#93;](#cite_note-5)[&#91;11&#93;](#cite_note-11)

### Architecture

The framework supports two orchestration modes:

| Mode | Description |
| --- | --- |
| Agent Orchestration | LLM-driven, creative reasoning and decision-making for open-ended tasks |
| Workflow Orchestration | Business-logic driven, deterministic multi-agent workflows for repeatable enterprise processes |

AutoGen's orchestration patterns (GroupChat, GraphFlow, event-driven runtimes) are unified under the framework's Workflow abstraction, while Semantic Kernel contributes session-based state management, type safety, filters, telemetry, and extensive model and embedding support.[&#91;5&#93;](#cite_note-5)

### Migration Path

Microsoft published migration guides for both AutoGen and Semantic Kernel users transitioning to the Agent Framework. AutoGen and Semantic Kernel continue to receive critical bug fixes and security patches but will not receive significant new features. The strategic consolidation directs the community toward the Agent Framework for new capabilities.[&#91;11&#93;](#cite_note-11)

### Timeline

| Date | Milestone |
| --- | --- |
| October 2025 | Public preview release |
| February 19, 2026 | Release Candidate 1.0 |
| Q1 2026 (target) | 1.0 GA with stable APIs, production-grade support, enterprise readiness certification |
| Q2 2026 (planned) | Process Framework GA for deterministic business workflow orchestration |

The framework supports both Python and .NET, broadening the developer audience beyond AutoGen's Python-only ecosystem.[&#91;5&#93;](#cite_note-5)

## Installation

AutoGen requires Python 3.10 or later. Installation via pip:

```bash
pip install -U "autogen-agentchat" "autogen-ext[openai]"
```

For AutoGen Studio:

```bash
pip install autogenstudio
```

For Docker-based code execution (recommended for production):

```bash
pip install "autogen-agentchat[docker]"
```

The AG2 community fork is installable separately via the `ag2` package on PyPI.[&#91;8&#93;](#cite_note-8)

## See Also

- [CrewAI](/wiki/crewai)
- [LangChain](/wiki/langchain)
- [AI agent](/wiki/ai_agent)
- [Large language model](/wiki/large_language_model)
- [Multi-agent system](/index.php?title=Multi-agent_system&action=edit&redlink=1)
- [Semantic Kernel](/index.php?title=Semantic_Kernel&action=edit&redlink=1)
- [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1)
- [Prompt engineering](/wiki/prompt_engineering)

## References

1. &#91;1&#93;(#cite_note-1) Wu, Q., Bansal, G., Zhang, J., et al. (2023). "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation." arXiv:2308.08155. Retrieved March 2026 from [https://arxiv.org/abs/2308.08155](https://arxiv.org/abs/2308.08155).

2. &#91;2&#93;(#cite_note-2) AutoGen GitHub Repository. "A programming framework for agentic AI." Retrieved March 2026 from [https://github.com/microsoft/autogen](https://github.com/microsoft/autogen).

3. &#91;3&#93;(#cite_note-3) The Agent Times. "AutoGen Hits 54,534 Stars." Retrieved March 2026 from [https://theagenttimes.com/articles/they-just-cant-get-enough-of-our-infrastructure-autogen-hits-54534-stars](https://theagenttimes.com/articles/they-just-cant-get-enough-of-our-infrastructure-autogen-hits-54534-stars).

4. &#91;4&#93;(#cite_note-4) AutoGen Official Documentation. Retrieved March 2026 from [https://microsoft.github.io/autogen/](https://microsoft.github.io/autogen/).

5. &#91;5&#93;(#cite_note-5) Microsoft Azure Blog. "Introducing Microsoft Agent Framework." Retrieved March 2026 from [https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/).

6. &#91;6&#93;(#cite_note-6) Microsoft Research. "AutoGen: Enabling next-generation large language model applications." Retrieved March 2026 from [https://www.microsoft.com/en-us/research/blog/autogen-enabling-next-generation-large-language-model-applications/](https://www.microsoft.com/en-us/research/blog/autogen-enabling-next-generation-large-language-model-applications/).

7. &#91;7&#93;(#cite_note-7) Microsoft Research. "AutoGen Project Page." Retrieved March 2026 from [https://www.microsoft.com/en-us/research/project/autogen/](https://www.microsoft.com/en-us/research/project/autogen/).

8. &#91;8&#93;(#cite_note-8) Microsoft AutoGen Blog. "Clearing Up AutoGen Fork Confusion." (November 2024). Retrieved March 2026 from [https://microsoft.github.io/autogen/0.2/blog/2024/11/14/confusion-created-by-forks/](https://microsoft.github.io/autogen/0.2/blog/2024/11/14/confusion-created-by-forks/).

9. &#91;9&#93;(#cite_note-9) AG2 GitHub Repository. "AG2 (formerly AutoGen): The Open-Source AgentOS." Retrieved March 2026 from [https://github.com/ag2ai/ag2](https://github.com/ag2ai/ag2).

10. &#91;10&#93;(#cite_note-10) Microsoft Research. "AutoGen v0.4: Reimagining the foundation of agentic AI for scale, extensibility, and robustness." Retrieved March 2026 from [https://www.microsoft.com/en-us/research/blog/autogen-v0-4-reimagining-the-foundation-of-agentic-ai-for-scale-extensibility-and-robustness/](https://www.microsoft.com/en-us/research/blog/autogen-v0-4-reimagining-the-foundation-of-agentic-ai-for-scale-extensibility-and-robustness/).

11. &#91;11&#93;(#cite_note-11) Visual Studio Magazine. "Semantic Kernel + AutoGen = Open-Source 'Microsoft Agent Framework'." (October 2025). Retrieved March 2026 from [https://visualstudiomagazine.com/articles/2025/10/01/semantic-kernel-autogen--open-source-microsoft-agent-framework.aspx](https://visualstudiomagazine.com/articles/2025/10/01/semantic-kernel-autogen--open-source-microsoft-agent-framework.aspx).

12. &#91;12&#93;(#cite_note-12) AutoGen Documentation: Agents Tutorial. Retrieved March 2026 from [https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tutorial/agents.html](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tutorial/agents.html).

13. &#91;13&#93;(#cite_note-13) AutoGen Documentation: Code Execution in Docker. Retrieved March 2026 from [https://microsoft.github.io/autogen/0.2/blog/2024/01/23/Code-execution-in-docker/](https://microsoft.github.io/autogen/0.2/blog/2024/01/23/Code-execution-in-docker/).

14. &#91;14&#93;(#cite_note-14) AutoGen Documentation: Multi-agent Conversation Framework. Retrieved March 2026 from [https://microsoft.github.io/autogen/0.2/docs/Use-Cases/agent_chat/](https://microsoft.github.io/autogen/0.2/docs/Use-Cases/agent_chat/).

15. &#91;15&#93;(#cite_note-15) AutoGen Documentation: Tracing and Observability. Retrieved March 2026 from [https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tracing.html](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/tracing.html).

16. &#91;16&#93;(#cite_note-16) Microsoft Research. "Introducing AutoGen Studio: A low-code interface for building multi-agent workflows." Retrieved March 2026 from [https://www.microsoft.com/en-us/research/blog/introducing-autogen-studio-a-low-code-interface-for-building-multi-agent-workflows/](https://www.microsoft.com/en-us/research/blog/introducing-autogen-studio-a-low-code-interface-for-building-multi-agent-workflows/).

17. &#91;17&#93;(#cite_note-17) Helicone. "CrewAI vs. AutoGen: Which Open-Source Framework is Better for Building AI Agents?" Retrieved March 2026 from [https://www.helicone.ai/blog/crewai-vs-autogen](https://www.helicone.ai/blog/crewai-vs-autogen).

18. &#91;18&#93;(#cite_note-18) DataCamp. "CrewAI vs LangGraph vs AutoGen: Choosing the Right Multi-Agent AI Framework." Retrieved March 2026 from [https://www.datacamp.com/tutorial/crewai-vs-langgraph-vs-autogen](https://www.datacamp.com/tutorial/crewai-vs-langgraph-vs-autogen).
