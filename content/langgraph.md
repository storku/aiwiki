---
title: "LangGraph"
slug: "langgraph"
categories:
  - "Artificial_intelligence"
  - "Software_frameworks"
  - "Agents"
  - "Open-source_software"
---

*See also: [LangChain](/wiki/langchain), [AI agent](/wiki/ai_agent), and [Large language model](/wiki/large_language_model)*

**LangGraph** is an open-source framework for building stateful, multi-actor agent applications as graphs. Developed by [LangChain](/wiki/langchain), Inc. and first released in January 2024, LangGraph models agent workflows using nodes, edges, and state, providing developers with fine-grained control over both the flow and state of their [AI agent](/wiki/ai_agent) applications. The framework is available in both [Python](/wiki/python) and [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1)/[TypeScript](/index.php?title=TypeScript&action=edit&redlink=1) and is released under the [MIT License](/index.php?title=MIT_License&action=edit&redlink=1).

LangGraph is designed for building production-grade agent systems that require durable execution, human-in-the-loop interaction, persistent state management, and complex multi-step workflows. It is trusted by companies including Klarna, Replit, Elastic, Uber, and LinkedIn for powering agent systems in production environments.

## History

### Initial Release

LangGraph was introduced in January 2024 as part of the [LangChain](/wiki/langchain) ecosystem. The project was motivated by the limitations of existing agent architectures, which relied on linear or simple loop-based execution patterns. Harrison Chase and the LangChain team recognized that many real-world agent workflows are better represented as graphs with branching logic, cycles, and shared state, rather than as linear chains.

The initial release provided the core graph primitives (StateGraph, nodes, edges, and conditional routing) along with integration points to LangChain's existing model and tool abstractions.

### LangGraph Platform

On May 14, 2025, LangChain, Inc. launched the **LangGraph Platform** into general availability, providing managed infrastructure for deploying long-running, stateful AI agents. The platform includes features for scaling, monitoring, and managing agents in production environments.

### Version 1.0

On September 2, 2025, LangChain announced 1.0 alpha releases of both LangGraph and LangChain in Python and JavaScript. The 1.0 general availability release followed in late October 2025, marking LangGraph as the first stable major release in the durable agent framework space.

### Version History

| Version | Release Date | Key Changes |
| --- | --- | --- |
| 0.1 (Initial) | January 2024 | Core graph primitives, StateGraph, conditional edges |
| 0.2 | Mid 2024 | Improved persistence, prebuilt agents, subgraph support |
| 1.0 Alpha | September 2, 2025 | Stabilized API surface for Python and JavaScript |
| 1.0 GA | Late October 2025 | First stable major release, production-ready guarantees |
| 1.1 | Early 2026 | `version="v2"` streaming format with full type safety |

## Architecture

LangGraph models agent workflows as directed graphs consisting of three fundamental building blocks: **State**, **Nodes**, and **Edges**. This graph-based architecture provides explicit control over execution flow, state transitions, and error handling.

### State

State is the shared, central data structure that flows through a LangGraph workflow. It is typically defined as a Python `TypedDict` or [Pydantic](/index.php?title=Pydantic&action=edit&redlink=1) model and carries all relevant information from one node to the next. The State definition includes the schema of the graph and optional **reducer functions** that specify how to apply updates when multiple nodes produce outputs concurrently.

Reducer functions are critical for multi-agent systems. For example, a common pattern uses an `add_messages` reducer that appends new messages to an existing list rather than overwriting it, preventing data loss when multiple agents contribute to the same conversation state.

```python
from typing import Annotated, TypedDict
from langgraph.graph import add_messages

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    current_step: str
    results: dict
```

### Nodes

Nodes are Python functions that encode the logic of the agent. Each node receives the current state as input, performs computation or side effects (such as calling an LLM, executing a tool, or querying a database), and returns an updated state. Nodes serve as the fundamental units of work within a LangGraph workflow.

Common node patterns include:

| Node Type | Purpose |
| --- | --- |
| LLM Node | Calls a [large language model](/wiki/large_language_model) to generate text or make decisions |
| Tool Node | Executes external tools or functions based on LLM tool-calling output |
| Human Node | Pauses execution and waits for human input or approval |
| Router Node | Evaluates state and determines the next execution path |
| Aggregator Node | Combines results from parallel execution branches |

### Edges

Edges define the transitions between nodes. LangGraph supports two primary edge types:

- **Normal edges**: Fixed transitions from one node to another, used when the next step is always the same
- **Conditional edges**: Dynamic routing based on the current state, enabling branching logic where the LLM or custom functions determine which node executes next

Conditional edges are one of the most powerful features in LangGraph, allowing developers to implement decision trees, error recovery paths, and loop-until-done patterns within a single graph definition.

### Graph Types

#### StateGraph

`StateGraph` is the primary graph class in LangGraph. It is parameterized by a user-defined State type and provides methods for adding nodes, edges, and conditional edges. After definition, the graph is compiled into a runnable that can be invoked, streamed, or batched.

```python
from langgraph.graph import StateGraph, START, END

graph = StateGraph(AgentState)
graph.add_node("agent", call_agent)
graph.add_node("tools", execute_tools)
graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_continue, {
    "continue": "tools",
    "end": END
})
graph.add_edge("tools", "agent")
app = graph.compile()
```

#### MessageGraph

`MessageGraph` is a specialized subclass of StateGraph where the entire state is a single, append-only list of messages. Each node receives the message list as input and returns zero or more messages as output. This simplified interface is useful for straightforward conversational agents that do not require complex state management.

## Key Features

### Persistence and Checkpointing

LangGraph's standout feature is its built-in state persistence. The framework persists workflow state at every node transition, creating checkpoints that enable several important capabilities:

- **Fault tolerance**: If a workflow fails at step 7 of 10, it resumes from step 7 instead of starting over
- **Time-travel debugging**: Developers can rewind to any previous checkpoint, inspect the state, and replay execution from that point
- **Deterministic replay**: Checkpointed states enable reproducible execution for testing and debugging

LangGraph supports multiple persistence backends, including in-memory storage for development, SQLite for local deployments, and PostgreSQL for production environments.

### Human-in-the-Loop

LangGraph treats human intervention as a first-class capability. Developers can design graphs with explicit **breakpoints** where execution pauses, allowing a human operator to:

- Inspect the current agent state
- Approve or reject proposed actions before they are executed
- Edit the agent's memory or planned next steps
- Resume execution with modified state

This capability is essential for high-stakes applications in domains such as healthcare, finance, and legal services, where autonomous agent actions require human oversight.

### Memory Management

LangGraph provides layered memory management:

| Memory Type | Scope | Use Case |
| --- | --- | --- |
| Short-term (thread) memory | Within a single conversation thread | Maintaining context during a multi-turn interaction |
| Cross-thread memory | Across multiple threads for the same user | Remembering user preferences across sessions |
| Long-term memory | Persistent storage across all interactions | Building knowledge bases from agent experiences |

Short-term memory persists within active threads and can be checkpointed at any node. Long-term memory supports entity memory, vector store retrievers, and sophisticated retrieval patterns for agent knowledge management.

### Streaming

LangGraph provides comprehensive streaming support for real-time agent monitoring:

- **Token streaming**: Stream individual tokens as they are generated by the LLM
- **Node streaming**: Receive updates as each node completes execution
- **State streaming**: Monitor state changes in real time as the graph executes
- **Custom event streaming**: Emit custom events from within nodes for application-specific monitoring

Version 1.1 introduced `version="v2"`, an opt-in streaming format that provides full type safety for `stream()`, `astream()`, `invoke()`, and `ainvoke()` methods.

### Subgraphs

LangGraph supports composing graphs hierarchically through subgraphs. A subgraph is a complete LangGraph workflow that is embedded as a single node within a parent graph. This enables:

- **Modular design**: Complex agent systems can be decomposed into reusable sub-workflows
- **Team coordination**: Different agent teams can be implemented as separate subgraphs and orchestrated by a supervisor graph
- **Encapsulation**: Subgraphs maintain their own internal state, exposing only relevant information to the parent graph

## Prebuilt Components

### create_react_agent

LangGraph provides a prebuilt implementation of a tool-calling [ReAct](/index.php?title=ReAct&action=edit&redlink=1)-style agent through the `create_react_agent` function. This agent iterates through a Reasoning, Action, Observation loop:

1. **Reasoning**: The LLM analyzes the current state and decides what to do
2. **Action**: The agent calls one or more tools based on the LLM's decision
3. **Observation**: The tool results are fed back to the LLM for further reasoning

The prebuilt ReAct agent supports all LangGraph features, including persistence, human-in-the-loop breakpoints, and streaming.

### ToolNode

`ToolNode` is a prebuilt node for executing tool calls. It automatically parses tool-calling output from LLMs, dispatches calls to the appropriate tool functions, and formats the results as tool messages for the next iteration.

### Prebuilt Agent Templates

LangGraph provides several agent templates that can be customized for specific use cases, including:

- **Chat agents**: Conversational assistants with tool access
- **Multi-agent supervisors**: Systems where a supervisor agent delegates tasks to worker agents
- **Plan-and-execute agents**: Agents that create a plan before executing steps
- **Reflection agents**: Agents that critique and improve their own outputs

## LangGraph Platform

The **LangGraph Platform** is a proprietary, purpose-built deployment platform for hosting long-running, stateful agent workflows in production. Launched into general availability on May 14, 2025, the platform provides:

- **Managed infrastructure**: Automatic scaling, load balancing, and high availability
- **Task queues**: Background task execution for long-running agent operations
- **Cron jobs**: Scheduled agent execution for periodic tasks
- **Monitoring and observability**: Integration with [LangSmith](/wiki/langchain#langsmith) for tracing and evaluation
- **API endpoints**: RESTful and streaming APIs for agent interaction

### Deployment Options

| Option | Description | Target Users |
| --- | --- | --- |
| LangGraph Cloud | Fully managed SaaS deployment | Teams seeking minimal operational overhead |
| Self-hosted | Deploy on your own infrastructure using Docker | Organizations with data residency requirements |
| Bring-your-own-cloud (BYOC) | Managed deployment in your cloud account | Enterprises needing cloud control with managed operations |

## Comparison with Other Agent Frameworks

LangGraph operates in a competitive landscape alongside several other agent orchestration frameworks. Each framework takes a different architectural approach to building multi-agent systems.

### Framework Comparison

| Feature | [LangGraph](/wiki/langgraph) | [CrewAI](/index.php?title=CrewAI&action=edit&redlink=1) | [AutoGen](/index.php?title=AutoGen&action=edit&redlink=1) | [OpenAI Agents SDK](/index.php?title=OpenAI_Agents_SDK&action=edit&redlink=1) |
| --- | --- | --- | --- | --- |
| Architecture | Graph-based (nodes, edges, state) | Role-based (crew, agents, tasks) | Conversational (message passing) | Handoff-based (agent transfer) |
| State management | Typed state schemas with reducers | Shared context object | Message history | Handoff context |
| Persistence | Built-in checkpointing at every node | Checkpoint support | Message persistence | Limited |
| Human-in-the-loop | First-class breakpoints with state editing | Task-level checkpoints | Human agent in conversation | Handoff to human |
| Learning curve | Steepest (graph theory concepts required) | Most beginner-friendly (YAML configs) | Moderate (Pythonic agent classes) | Low (minimal API) |
| Multi-agent patterns | Supervisor, hierarchical, collaborative | Sequential crew execution | Group chat, nested conversations | Agent handoffs |
| Production readiness | Most battle-tested (v1.0, enterprise adoption) | Active development | Maintenance mode (Microsoft) | Early stage |
| Framework dependency | Works with [LangChain](/wiki/langchain) or standalone | Independent | Independent | OpenAI-specific |

### When to Choose LangGraph

LangGraph is particularly well-suited for applications that require:

- **Complex branching logic**: Workflows with multiple decision points and conditional paths
- **State persistence**: Long-running agents that need to survive failures and resume execution
- **Human oversight**: Applications requiring human approval gates or manual intervention
- **Fine-grained control**: Precise control over execution order, error recovery, and state transitions
- **Production deployment**: Enterprise-grade reliability with observability and monitoring

### When Other Frameworks May Be Better

- **CrewAI** may be preferable for quick prototyping of team-based workflows with minimal boilerplate
- **AutoGen** (or its successor, Microsoft Agent Framework) may be better suited for conversational multi-agent scenarios like brainstorming or collaborative writing
- **OpenAI Agents SDK** is the simplest option for applications using only OpenAI models that need basic agent handoff patterns

## Integration with the LangChain Ecosystem

LangGraph integrates closely with the broader [LangChain](/wiki/langchain) ecosystem:

- **LangChain models and tools**: LangGraph can use any LangChain-compatible chat model, tool, or retriever as components within graph nodes
- **LangSmith**: Automatic tracing of graph execution, including node-level timing, state snapshots, and tool call details
- **LCEL**: LangGraph nodes can contain LCEL chains, combining the declarative composition of LCEL with the stateful orchestration of LangGraph
- **LangGraph Platform**: Managed deployment infrastructure specifically designed for LangGraph applications

However, LangGraph can also be used independently of LangChain. The core `langgraph` package depends only on `langchain-core` for base abstractions, and developers can use it with direct API calls to model providers if they prefer to avoid the full LangChain abstraction layer.

## Use Cases

### Customer Service Automation

Companies like Klarna use LangGraph to power customer service agents that handle over 2.5 million conversations. These agents route customer queries through multi-step workflows involving intent classification, knowledge retrieval, action execution (such as processing refunds), and escalation to human agents when needed.

### Code Generation and Migration

Uber uses LangGraph-based agents for automated code migration workflows, where agents analyze existing codebases, generate migration plans, apply code transformations, run tests, and iterate on failures, all within a single persistent workflow.

### Research and Analysis

LangGraph enables research agents that decompose complex questions into sub-tasks, execute parallel searches, synthesize findings, and produce structured reports. The persistence layer allows these long-running research processes to span multiple sessions.

### Enterprise Workflow Automation

Organizations use LangGraph to build approval-gated workflows where AI agents draft documents, proposals, or analyses, then pause for human review before proceeding with downstream actions such as sending emails, updating databases, or triggering external processes.

## See Also

- [LangChain](/wiki/langchain)
- [AI agent](/wiki/ai_agent)
- [Large language model](/wiki/large_language_model)
- [Prompt engineering](/wiki/prompt_engineering)
- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)
- [CrewAI](/index.php?title=CrewAI&action=edit&redlink=1)
- [AutoGen](/index.php?title=AutoGen&action=edit&redlink=1)
- [Multi-agent system](/index.php?title=Multi-agent_system&action=edit&redlink=1)

## References

1. LangChain (2025). LangGraph: Agent Orchestration Framework for Reliable AI Agents. [https://www.langchain.com/langgraph](https://www.langchain.com/langgraph)

2. GitHub (2025). langchain-ai/langgraph: Build resilient language agents as graphs. [https://github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)

3. LangChain Docs (2025). LangGraph overview. [https://docs.langchain.com/oss/python/langgraph/overview](https://docs.langchain.com/oss/python/langgraph/overview)

4. LangChain Blog (2025). LangChain and LangGraph 1.0 Alpha Releases. [https://blog.langchain.com/langchain-langchain-1-0-alpha-releases/](https://blog.langchain.com/langchain-langchain-1-0-alpha-releases/)

5. LangChain Changelog (2025). LangGraph 1.0 is now generally available. [https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available](https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available)

6. LangChain Blog (2025). LangGraph Release Week Recap. [https://blog.langchain.com/langgraph-release-week-recap/](https://blog.langchain.com/langgraph-release-week-recap/)

7. DataCamp (2025). CrewAI vs LangGraph vs AutoGen: Choosing the Right Multi-Agent AI Framework. [https://www.datacamp.com/tutorial/crewai-vs-langgraph-vs-autogen](https://www.datacamp.com/tutorial/crewai-vs-langgraph-vs-autogen)

8. Real Python (2025). LangGraph: Build Stateful AI Agents in Python. [https://realpython.com/langgraph-python/](https://realpython.com/langgraph-python/)

9. Latenode (2025). LangGraph AI Framework 2025: Complete Architecture Guide. [https://latenode.com/blog/ai-frameworks-technical-infrastructure/langgraph-multi-agent-orchestration/langgraph-ai-framework-2025-complete-architecture-guide-multi-agent-orchestration-analysis](https://latenode.com/blog/ai-frameworks-technical-infrastructure/langgraph-multi-agent-orchestration/langgraph-ai-framework-2025-complete-architecture-guide-multi-agent-orchestration-analysis)

10. Sparkco.ai (2025). Mastering LangGraph State Management in 2025. [https://sparkco.ai/blog/mastering-langgraph-state-management-in-2025](https://sparkco.ai/blog/mastering-langgraph-state-management-in-2025)

11. PyPI (2025). langgraph package. [https://pypi.org/project/langgraph/](https://pypi.org/project/langgraph/)

12. Fortune (2025). Exclusive: Early AI darling LangChain is now a unicorn with a fresh $125 million in funding. [https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/](https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/)

13. Wikipedia (2025). LangChain. [https://en.wikipedia.org/wiki/LangChain](https://en.wikipedia.org/wiki/LangChain)

14. Google AI for Developers (2025). ReAct agent from scratch with Gemini and LangGraph. [https://ai.google.dev/gemini-api/docs/langgraph-example](https://ai.google.dev/gemini-api/docs/langgraph-example)
