---
title: "CrewAI"
slug: "crewai"
categories:
  - "Artificial_intelligence"
  - "Software_frameworks"
  - "Agents"
  - "Open-source_software"
---

**CrewAI** is an open-source [Python](/wiki/python_(programming_language)) framework for orchestrating role-playing, autonomous [AI agents](/wiki/ai_agent) that collaborate to tackle complex tasks. Created by Joao Moura and released on [GitHub](/wiki/github) in late 2023, CrewAI enables developers to define teams of agents with distinct roles, goals, and tools, then coordinate their work through structured processes. The framework is built entirely from scratch without dependencies on [LangChain](/wiki/langchain) or other agent frameworks, and is designed to be lightweight and production-ready.[&#91;1&#93;](#cite_note-1)[&#91;2&#93;](#cite_note-2)

As of March 2026, CrewAI has accumulated over 45,900 stars on GitHub, powers more than 12 million daily agent executions in production, and is used by a reported 60% of Fortune 500 companies.[&#91;3&#93;](#cite_note-3)[&#91;4&#93;](#cite_note-4)

## History

### Founding and Early Development

CrewAI was created by Joao (Joe) Moura, a Brazilian software engineer with close to 20 years of experience in languages including Ruby, [Python](/wiki/python_(programming_language)), and [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1). Before founding CrewAI, Moura served as Director of AI Engineering at Clearbit, a data enrichment company that was later acquired by [HubSpot](/index.php?title=HubSpot&action=edit&redlink=1). After the acquisition, Moura returned to open-source development and launched CrewAI as a Python library in late 2023.[&#91;5&#93;](#cite_note-5)[&#91;6&#93;](#cite_note-6)

The framework gained rapid traction on GitHub. Within months of its release, enterprise teams were experimenting with it to orchestrate agents that could collaborate on complex tasks. By January 2024, the project had attracted significant community interest, and within six months of its commercial launch, CrewAI had onboarded 150 enterprise customers.[&#91;4&#93;](#cite_note-4)

### Funding

CrewAI raised $18 million in a Series A round led by Insight Partners in October 2024, coinciding with the launch of its enterprise cloud subscription plan, CrewAI Enterprise. Total funding reached approximately $24.5 million across multiple rounds. Notable investors include Blitzscaling Ventures, Craft Ventures, and Earl Grey Capital, along with prominent angel investors such as Andrew Ng and Dharmesh Shah (co-founder and CTO of HubSpot).[&#91;4&#93;](#cite_note-4)[&#91;7&#93;](#cite_note-7)

### Version History

| Version | Release Period | Notable Changes |
| --- | --- | --- |
| 0.x | Late 2023 to mid-2024 | Initial release; core agent, task, and crew abstractions; sequential and hierarchical processes |
| 0.177.0 | Late 2024 | Stability improvements prior to 1.0 |
| 1.0 | Early 2025 | GA release; native MCP support via crewai-tools-mcp; removal of LangChain dependencies |
| 1.1.0 | Mid-2025 | New features and improvements |
| 1.9.0 | Late 2025 | Enhanced MCP integration and tool calling |
| 1.10.1 | Early 2026 | Current stable release; support for A2A communication; Anthropic tool search support |
| 1.11.0rc1 | March 2026 | Pre-release with ongoing improvements |

CrewAI requires Python 3.10 or later (up to Python 3.13).[&#91;8&#93;](#cite_note-8)

## Architecture

CrewAI follows a role-based architecture modeled on the metaphor of a human team, or "crew." The framework's core philosophy is: define agents, assign them roles, give them tools, and run a mission. The architecture consists of four primary abstractions: Agents, Tasks, Crews, and Tools.[&#91;1&#93;](#cite_note-1)

### Agents

An Agent in CrewAI is an [LLM](/wiki/large_language_model)-powered unit with a name, role, and goal. Each agent is designed to simulate a specialist within a team, carrying out work autonomously while optionally collaborating with other agents.

#### Agent Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `role` | Yes | Defines the agent's function and expertise within the crew |
| `goal` | Yes | The individual objective guiding the agent's decision-making |
| `backstory` | Yes | Provides context and personality to enrich agent interactions |
| `llm` | No | Language model powering the agent (defaults to GPT-4) |
| `tools` | No | List of capabilities or functions available to the agent |
| `memory` | No | Enables the agent to maintain conversation history across interactions |
| `allow_delegation` | No | Allows the agent to delegate tasks to other agents |
| `allow_code_execution` | No | Enables code execution (default: False) |
| `code_execution_mode` | No | "safe" (Docker) or "unsafe" (direct execution) |
| `max_iter` | No | Maximum iterations before providing best answer (default: 20) |
| `max_execution_time` | No | Timeout in seconds for task execution |
| `max_rpm` | No | Maximum requests per minute to avoid rate limits |
| `reasoning` | No | Enables planning before task execution |
| `multimodal` | No | Enables processing of both text and visual content |
| `verbose` | No | Enables detailed execution logs |
| `cache` | No | Enables caching for tool usage (default: True) |

A basic agent definition in Python:

```python
from crewai import Agent
from crewai_tools import SerperDevTool

researcher = Agent(
    role="Research Analyst",
    goal="Find and summarize information about specific topics",
    backstory="You are an experienced researcher with attention to detail",
    tools=[SerperDevTool()],
    verbose=True
)
```

Agents can optionally specify their own LLM (including local models through [Ollama](/wiki/ollama) or LM Studio), enable reasoning and memory, and provide custom system, prompt, or response templates.[&#91;9&#93;](#cite_note-9)

### Tasks

A Task in CrewAI encapsulates a work assignment for an agent. Tasks define what needs to be done, what the expected output looks like, and which agent is responsible for execution.

#### Task Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `description` | Yes | A clear statement of what the task entails |
| `expected_output` | Yes | A description of what the task's completion looks like |
| `agent` | No | The agent responsible for executing the task |
| `tools` | No | Resources limited to this specific task |
| `context` | No | Output from other tasks used as input |
| `async_execution` | No | Enables non-blocking task processing |
| `human_input` | No | Triggers human review of agent results |
| `output_file` | No | File path for storing task results |
| `output_json` | No | Pydantic model for structured JSON output |
| `output_pydantic` | No | Pydantic model for structured output |
| `guardrail` | No | Functions that validate output before proceeding |
| `callback` | No | Function executed after task completion |

A basic task definition:

```python
from crewai import Task

research_task = Task(
    description="Research the latest developments in quantum computing",
    expected_output="A comprehensive summary of recent breakthroughs",
    agent=researcher,
    tools=[search_tool],
    output_file="research_output.md"
)
```

Tasks support guardrails for output validation (with configurable retry limits), callbacks for post-completion processing, and conditional logic for dynamic workflow control.[&#91;10&#93;](#cite_note-10)

### Crews

A Crew is the top-level orchestration unit that brings agents and tasks together. It defines which agents participate, which tasks they execute, and what process governs the execution flow.

#### Crew Parameters

| Parameter | Required | Description |
| --- | --- | --- |
| `agents` | Yes | List of agents in the crew |
| `tasks` | Yes | List of tasks assigned to the crew |
| `process` | No | Execution flow: sequential or hierarchical (default: sequential) |
| `verbose` | No | Enables logging (default: False) |
| `memory` | No | Enables short-term, long-term, and entity memory |
| `cache` | No | Caches tool execution results (default: True) |
| `manager_llm` | No | Required for hierarchical process; coordinates agent delegation |
| `max_rpm` | No | Rate limiting; overrides individual agent settings |
| `output_log_file` | No | Saves execution logs in .txt or .json format |

A crew can be defined either through YAML configuration files (the recommended approach for larger projects) or directly in Python code:

```python
from crewai import Crew, Process

crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.sequential,
    verbose=True,
    memory=True
)

result = crew.kickoff(inputs={"topic": "AI Safety"})
```

Crews support multiple execution methods: `kickoff()` for synchronous execution, `kickoff_for_each()` for sequential execution across multiple inputs, and `akickoff()` for native async execution.[&#91;11&#93;](#cite_note-11)

### Process Types

CrewAI supports two process types for controlling how tasks are executed, with a third planned for future development.

**Sequential Process.** Tasks execute one after another in the order defined in the task list. The output of one task serves as context for the next. Each task is assigned to a specific agent, and agents work autonomously without a central coordinator. This is the default process type.[&#91;12&#93;](#cite_note-12)

**Hierarchical Process.** Tasks are organized in a managerial hierarchy, where a manager agent (powered by a specified `manager_llm` or custom `manager_agent`) allocates tasks to worker agents based on their capabilities. The manager reviews outputs, assesses task completion, and can reassign work as needed. Tasks are not pre-assigned; instead, the manager delegates dynamically.[&#91;12&#93;](#cite_note-12)

**Consensual Process (Planned).** A future process type aiming for collaborative, democratic decision-making among agents regarding task execution. This process is not yet implemented in the codebase.[&#91;12&#93;](#cite_note-12)

## Key Features

### Flows

CrewAI Flows are a production-ready, event-driven workflow orchestration system introduced as the enterprise architecture for building and deploying multi-agent systems. While Crews represent teams of autonomous agents, Flows provide granular, event-driven control over complex automations with precise execution ordering.

Flows use Python decorators to define how and when each part of a workflow runs. They support conditional logic, loops, branching, and event-driven patterns, allowing dynamic and responsive workflows that adapt to changing conditions. Flows run over 12 million executions per day across industries including finance, government, and field operations.[&#91;13&#93;](#cite_note-13)

Key capabilities of Flows include:

- **State management**: Flows support both unstructured state (dictionary-style) for agility and structured state (using [Pydantic](/index.php?title=Pydantic&action=edit&redlink=1) models) for type safety, schema validation, and auto-completion.
- **Event system**: CrewAI includes an event bus that allows developers to create listeners triggered when events are emitted. Enterprise customers can register webhooks with authentication tokens for any event.
- **Native Crew integration**: Flows can contain and orchestrate multiple Crews as steps within a larger workflow.

### Memory System

CrewAI provides a comprehensive memory system that supports adaptive-depth recall using composite scoring that blends semantic similarity, recency, and importance. The memory system uses an LLM to analyze content when saving and comprises several components.[&#91;14&#93;](#cite_note-14)

| Memory Type | Description |
| --- | --- |
| Short-term memory | Temporarily stores recent interactions using Retrieval-Augmented Generation (RAG) |
| Long-term memory | Preserves insights and learnings from past executions for future reference |
| Entity memory | Captures and organizes information about entities (people, places, concepts) encountered during tasks |
| Cache | Stores tool execution results to speed up repeated operations |

### LLM Support

CrewAI uses a factory pattern to route model requests to native SDK implementations for optimal performance, with automatic fallback to [LiteLLM](/index.php?title=LiteLLM&action=edit&redlink=1) for broader model coverage. Natively supported providers include [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic) (Messages API), and [AWS](/index.php?title=Amazon_Web_Services&action=edit&redlink=1) Bedrock (Converse API). When a model does not match any native provider, the system falls back to LiteLLM, providing access to over 200 models through a unified interface. Local models can be integrated via [Ollama](/wiki/ollama) and LM Studio.[&#91;15&#93;](#cite_note-15)

### Tools and Integrations

CrewAI agents can integrate with external tools, APIs, and databases. The framework provides a dedicated `crewai-tools` package with pre-built tools, and developers can create custom tools as Python functions. Notable integration capabilities include:

- **MCP (Model Context Protocol)**: Native support via `crewai-tools-mcp`, allowing agents to discover and use tools hosted on MCP servers. The `MCPServerAdapter` supports both local servers communicating over standard I/O and remote servers using HTTP Server-Sent Events.[&#91;16&#93;](#cite_note-16)
- **A2A (Agent-to-Agent)**: Support for inter-agent task delegation, where agents can dynamically pass tasks to one another based on a parent-child hierarchy.[&#91;3&#93;](#cite_note-3)
- **Code execution**: Agents can execute code in safe (Docker-sandboxed) or unsafe (direct) modes.

### Enterprise Platform (CrewAI AMP)

CrewAI AMP (Agent Management Platform) extends the open-source framework with production deployment, monitoring, and scaling capabilities. The platform provides a unified control plane, real-time observability, secure integrations, role-based access controls, policy-driven approvals, and immutable audit logs for every agent execution. It supports both cloud-based and on-premise deployment and is available through the [AWS](/index.php?title=Amazon_Web_Services&action=edit&redlink=1) Marketplace.[&#91;17&#93;](#cite_note-17)

| Feature | Description |
| --- | --- |
| Deployment | Managed infrastructure with one-click deployment; REST API access |
| Monitoring | Detailed execution traces, logs, and performance dashboards |
| Security | Role-based access control (RBAC), deployment history, streaming logs |
| Scaling | Designed for millions of agentic workflow executions |
| Support | Dedicated 24/7 enterprise support |

## Usage Example

The following example demonstrates a complete CrewAI workflow that creates a research and writing team:

```python
from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

# Define tools
search_tool = SerperDevTool()

# Define agents
researcher = Agent(
    role="Senior Research Analyst",
    goal="Discover cutting-edge developments in AI",
    backstory="You are a veteran researcher known for uncovering insights.",
    tools=[search_tool],
    verbose=True
)

writer = Agent(
    role="Tech Content Strategist",
    goal="Craft compelling content on tech advancements",
    backstory="You are a renowned content strategist known for clarity.",
    verbose=True
)

# Define tasks
research_task = Task(
    description="Identify the next big trend in AI for 2026.",
    expected_output="A comprehensive report with key findings.",
    agent=researcher
)

write_task = Task(
    description="Write an engaging article based on the research findings.",
    expected_output="A four-paragraph article formatted in markdown.",
    agent=writer,
    context=[research_task]
)

# Assemble and run the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    process=Process.sequential
)

result = crew.kickoff()
print(result)
```

For larger projects, CrewAI recommends using the `CrewBase` class with YAML configuration files for agents and tasks:

```python
from crewai import Agent, Task, Crew, CrewBase, agent, task, crew

@CrewBase
class ResearchCrew:
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @agent
    def researcher(self) -> Agent:
        return Agent(config=self.agents_config['researcher'])

    @task
    def research_task(self) -> Task:
        return Task(config=self.tasks_config['research_task'])

    @crew
    def crew(self) -> Crew:
        return Crew(agents=self.agents, tasks=self.tasks)

ResearchCrew().crew().kickoff(inputs={"topic": "Quantum Computing"})
```

## Comparison with Other Frameworks

### CrewAI vs. AutoGen

| Aspect | CrewAI | [AutoGen](/wiki/autogen) |
| --- | --- | --- |
| Design philosophy | Role-based, structured task orchestration | Conversation-based, message-passing agents |
| Ease of setup | Faster to prototype; higher-level abstractions | More configuration required; greater flexibility |
| Process model | Sequential and hierarchical with manager agents | GroupChat, round-robin, selector-based, and swarm patterns |
| Code execution | Optional, with Docker sandboxing | Built-in, Docker-sandboxed by default |
| Human-in-the-loop | Via `human_input` parameter on tasks | Via `UserProxyAgent` acting as human proxy |
| Best for | Workflow automation, content generation, structured pipelines | Technical applications, complex reasoning, coding tasks |
| Production readiness | Production-focused with enterprise platform (AMP) | Research-oriented; merged into Microsoft Agent Framework |
| Development status | Active, independent development | Maintenance mode; succeeded by Microsoft Agent Framework |

### CrewAI vs. LangGraph

[LangGraph](/index.php?title=LangGraph&action=edit&redlink=1) (by [LangChain](/wiki/langchain)) uses a graph-based approach where nodes represent computation steps and edges define transitions. CrewAI provides a higher-level abstraction focused on agent roles and team dynamics, making it faster to prototype structured workflows. LangGraph offers more fine-grained control over execution flow and is better suited for stateful production pipelines with durable execution requirements.[&#91;18&#93;](#cite_note-18)

## Adoption and Community

CrewAI has experienced rapid growth since its 2023 launch. Key adoption metrics include:

| Metric | Value (as of early 2026) |
| --- | --- |
| GitHub stars | 45,900+ |
| Daily agent executions | 12 million+ |
| Fortune 500 adoption | Approximately 60% |
| Enterprise customers | 150+ (within first six months) |
| Community certifications | 100,000+ developers certified via learn.crewai.com |
| Monthly automations | 475 million+ |
| Latest stable version | 1.10.1 |

The project maintains an active community forum at community.crewai.com and offers comprehensive documentation at docs.crewai.com. CrewAI also provides educational courses through its learning platform, with over 100,000 developers having completed certification courses.[&#91;3&#93;](#cite_note-3)[&#91;4&#93;](#cite_note-4)

## See Also

- [AutoGen](/wiki/autogen)
- [LangChain](/wiki/langchain)
- [AI agent](/wiki/ai_agent)
- [Large language model](/wiki/large_language_model)
- [Multi-agent system](/index.php?title=Multi-agent_system&action=edit&redlink=1)
- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)
- [Prompt engineering](/wiki/prompt_engineering)

## References

1. &#91;1&#93;(#cite_note-1) CrewAI GitHub Repository. "Framework for orchestrating role-playing, autonomous AI agents." Retrieved March 2026 from [https://github.com/crewAIInc/crewAI](https://github.com/crewAIInc/crewAI).

2. &#91;2&#93;(#cite_note-2) CrewAI Official Website. "The Leading Multi-Agent Platform." Retrieved March 2026 from [https://crewai.com/](https://crewai.com/).

3. &#91;3&#93;(#cite_note-3) CrewAI Framework 2025: Complete Review. Latenode Blog. Retrieved March 2026 from [https://latenode.com/blog/ai-frameworks-technical-infrastructure/crewai-framework/crewai-framework-2025-complete-review-of-the-open-source-multi-agent-ai-platform](https://latenode.com/blog/ai-frameworks-technical-infrastructure/crewai-framework/crewai-framework-2025-complete-review-of-the-open-source-multi-agent-ai-platform).

4. &#91;4&#93;(#cite_note-4) Insight Partners. "How CrewAI is orchestrating the next generation of AI Agents." Retrieved March 2026 from [https://www.insightpartners.com/ideas/crewai-scaleup-ai-story/](https://www.insightpartners.com/ideas/crewai-scaleup-ai-story/).

5. &#91;5&#93;(#cite_note-5) ODSC. "CrewAI and the Future of Autonomous Agents with Joao Moura." Medium. Retrieved March 2026 from [https://odsc.medium.com/crewai-and-the-future-of-autonomous-agents-with-jo%C3%A3o-moura-b95312988d4b](https://odsc.medium.com/crewai-and-the-future-of-autonomous-agents-with-jo%C3%A3o-moura-b95312988d4b).

6. &#91;6&#93;(#cite_note-6) Software Engineering Daily. "Crew AI with Joao Moura." (3 Jun 2025). Retrieved March 2026 from [https://softwareengineeringdaily.com/2025/06/03/crew-ai-with-joao-moura/](https://softwareengineeringdaily.com/2025/06/03/crew-ai-with-joao-moura/).

7. &#91;7&#93;(#cite_note-7) Pulse2. "CrewAI: Multi-Agent Platform Raises $18 Million (Series A)." Retrieved March 2026 from [https://pulse2.com/crewai-multi-agent-platform-raises-18-million-series-a/](https://pulse2.com/crewai-multi-agent-platform-raises-18-million-series-a/).

8. &#91;8&#93;(#cite_note-8) CrewAI on PyPI. Retrieved March 2026 from [https://pypi.org/project/crewai/](https://pypi.org/project/crewai/).

9. &#91;9&#93;(#cite_note-9) CrewAI Documentation: Agents. Retrieved March 2026 from [https://docs.crewai.com/en/concepts/agents](https://docs.crewai.com/en/concepts/agents).

10. &#91;10&#93;(#cite_note-10) CrewAI Documentation: Tasks. Retrieved March 2026 from [https://docs.crewai.com/en/concepts/tasks](https://docs.crewai.com/en/concepts/tasks).

11. &#91;11&#93;(#cite_note-11) CrewAI Documentation: Crews. Retrieved March 2026 from [https://docs.crewai.com/en/concepts/crews](https://docs.crewai.com/en/concepts/crews).

12. &#91;12&#93;(#cite_note-12) CrewAI Documentation: Processes. Retrieved March 2026 from [https://docs.crewai.com/en/concepts/processes](https://docs.crewai.com/en/concepts/processes).

13. &#91;13&#93;(#cite_note-13) CrewAI Flows. Retrieved March 2026 from [https://crewai.com/crewai-flows](https://crewai.com/crewai-flows).

14. &#91;14&#93;(#cite_note-14) CrewAI Documentation: Memory. Retrieved March 2026 from [https://docs.crewai.com/en/concepts/memory](https://docs.crewai.com/en/concepts/memory).

15. &#91;15&#93;(#cite_note-15) CrewAI LLM Integration. DeepWiki. Retrieved March 2026 from [https://deepwiki.com/crewAIInc/crewAI/4-llm-integration](https://deepwiki.com/crewAIInc/crewAI/4-llm-integration).

16. &#91;16&#93;(#cite_note-16) CrewAI Documentation: MCP Servers as Tools. Retrieved March 2026 from [https://docs.crewai.com/en/mcp/overview](https://docs.crewai.com/en/mcp/overview).

17. &#91;17&#93;(#cite_note-17) CrewAI AMP Documentation. Retrieved March 2026 from [https://docs.crewai.com/en/enterprise/introduction](https://docs.crewai.com/en/enterprise/introduction).

18. &#91;18&#93;(#cite_note-18) AI Agent Frameworks: CrewAI vs AutoGen vs LangGraph Compared (2026). Design Revision. Retrieved March 2026 from [https://designrevision.com/blog/ai-agent-frameworks](https://designrevision.com/blog/ai-agent-frameworks).
