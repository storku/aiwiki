---
title: "LangChain"
slug: "langchain"
categories:
  - "Artificial_intelligence"
  - "Software_frameworks"
  - "Libraries"
  - "Open-source_software"
  - "Prompt_engineering"
---

*See also: [Prompt engineering](/wiki/prompt_engineering), [LangGraph](/wiki/langgraph), and [Large language model](/wiki/large_language_model)*

**LangChain** is an open-source software framework designed to facilitate the development of applications powered by [large language models](/wiki/large_language_model) (LLMs). Created by Harrison Chase and first released in October 2022, the framework provides modular abstractions and a comprehensive ecosystem of integrations that allow developers to build data-aware, [agentic](/wiki/ai_agent) applications that connect with external data sources and interact with their environment. LangChain is available as both a [Python](/wiki/python) and [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1)/[JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) package and is maintained by LangChain, Inc., a venture-backed startup headquartered in San Francisco.

As of 2025, LangChain has accumulated over 117,000 [GitHub](/wiki/github) stars and averages approximately 28 million downloads per month on [PyPI](/index.php?title=PyPI&action=edit&redlink=1), making it one of the most widely adopted frameworks for building LLM-powered applications. The company describes itself as "the agent engineering platform" and its ecosystem is trusted by companies including Klarna, LinkedIn, Uber, Replit, and Elastic.

## History

### Founding and Early Development

Harrison Chase conceived LangChain in late October 2022 while working as a machine learning engineer at Robust Intelligence, a startup focused on AI model testing and validation. Chase, a Harvard University graduate with a degree in statistics and computer science (class of 2017), had previously worked at Kensho Technologies, a fintech startup where he led the entity linking team. His experience at both companies gave him insight into the challenges developers faced when building applications on top of large language models.

The first public tweet about LangChain appeared on October 24, 2022, and the project quickly gained traction in the open-source community. Initially released as a single Python package, LangChain provided a simple abstraction layer over LLM APIs, prompt templates, and chains (sequences of calls to LLMs and other utilities).

### Incorporation and Early Funding

LangChain was incorporated as a company in January 2023. By April 2023, the startup had raised over $20 million in funding at a valuation of at least $200 million. This included a $10 million seed investment from [Benchmark](/index.php?title=Benchmark_(venture_capital)&action=edit&redlink=1), announced just one week before [Sequoia Capital](/index.php?title=Sequoia_Capital&action=edit&redlink=1) led a larger round.

### Growth and Product Expansion

Throughout 2023, LangChain rapidly expanded its feature set and ecosystem. Key milestones included the introduction of [LangChain Expression Language](#langchain-expression-language-lcel) (LCEL) in August 2023, the launch of [LangServe](#langserve) in October 2023, and the beta release of [LangSmith](#langsmith) in July 2023.

In February 2024, LangChain announced a $25 million Series A funding round led by Sequoia Capital. That same month, the company released LangSmith as a generally available product and introduced [LangGraph](/wiki/langgraph), a new library for building stateful, graph-based agent workflows.

### Unicorn Status

In October 2025, LangChain raised $125 million in new funding at a $1.25 billion valuation, officially reaching unicorn status. The round was led by IVP, with participation from existing investors Sequoia Capital and Benchmark, and new backers including CapitalG, Sapphire Ventures, ServiceNow Ventures, Workday Ventures, Cisco Investments, Datadog, and Databricks. The funding was earmarked for expanding LangSmith, growing the open-source contributions, and scaling the LangGraph Platform.

### Funding History

| Date | Round | Amount | Valuation | Lead Investor(s) |
| --- | --- | --- | --- | --- |
| April 2023 | Seed | $10 million | ~$200 million | Benchmark |
| April 2023 | Seed Extension | $10+ million | ~$200 million | Sequoia Capital |
| February 2024 | Series A | $25 million | Not disclosed | Sequoia Capital |
| October 2025 | Series B | $125 million | $1.25 billion | IVP |

## Company

LangChain, Inc. is a privately held artificial intelligence company based in San Francisco, California. The company was co-founded by Harrison Chase, who serves as CEO. The team has grown from a small open-source project to a company with employees spanning engineering, developer relations, and go-to-market functions.

LangChain's business model combines open-source software (LangChain, [LangGraph](/wiki/langgraph), and related libraries) with commercial products ([LangSmith](#langsmith) for observability and evaluation, and LangGraph Platform for managed agent deployment). The open-source libraries are released under the [MIT License](/index.php?title=MIT_License&action=edit&redlink=1), while LangSmith and LangGraph Platform are proprietary SaaS products.

Major investors include Sequoia Capital, Benchmark, IVP, CapitalG (Alphabet's independent growth fund), Sapphire Ventures, ServiceNow Ventures, Workday Ventures, Cisco Investments, Datadog, and Databricks.

## Architecture and Package Structure

LangChain's architecture underwent a significant restructuring beginning in late 2023, evolving from a monolithic package into a modular, multi-package ecosystem. This restructuring separated core abstractions from community integrations and provider-specific packages, enabling independent versioning and more focused development.

### Package Ecosystem

| Package | Description | License |
| --- | --- | --- |
| `langchain-core` | Base abstractions, interfaces, protocols, and LCEL | MIT |
| `langchain` | High-level utilities, pre-built chains, and agent architectures | MIT |
| `langchain-community` | Third-party integrations maintained by the community | MIT |
| `langchain-openai` | [OpenAI](/wiki/openai) provider integration | MIT |
| `langchain-anthropic` | [Anthropic](/wiki/anthropic) provider integration | MIT |
| `langchain-google-genai` | [Google](/index.php?title=Google&action=edit&redlink=1) Generative AI integration | MIT |
| `langchain-tests` | Standardized test suites for integration packages | MIT |
| `langgraph` | Graph-based agent orchestration framework | MIT |
| `langsmith` (SDK) | Client SDK for the LangSmith platform | MIT |

#### langchain-core

The `langchain-core` package contains the base abstractions that power the entire LangChain ecosystem. These abstractions are designed to be modular and minimal, including the [Runnable](/index.php?title=Runnable&action=edit&redlink=1) protocol, message types, embedding interfaces, language model base classes, output parsers, and the LangChain Expression Language. The package is kept lightweight with minimal dependencies to allow broad compatibility.

#### Partner Packages

Provider integrations are structured as independent packages following a consistent naming convention: `langchain-{provider}` (for example, `langchain-openai`, `langchain-anthropic`, `langchain-google-genai`). Each partner package wraps a specific provider's SDK and exposes LangChain-compatible classes. This modular design allows users to install only the provider packages they need and enables each integration to be versioned and released independently.

#### langchain-community

The `langchain-community` package contains community-maintained third-party integrations that implement the base interfaces defined in `langchain-core`. This package includes integrations for vector stores, document loaders, tools, retrievers, and other components contributed by the open-source community.

## Components

LangChain's comprehensive set of components enables developers to build applications utilizing language models. These abstractions and implementations are driven by a large and active community, with more than 300 contributors to the Python repository and hundreds more across the broader ecosystem.

### Model Integrations

LangChain provides integrations with a broad range of model providers and hosting platforms, including [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), [Google](/index.php?title=Google&action=edit&redlink=1) (Gemini), [Meta](/wiki/meta) (Llama), [Mistral AI](/index.php?title=Mistral_AI&action=edit&redlink=1), [Cohere](/index.php?title=Cohere&action=edit&redlink=1), [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1), [Azure OpenAI](/index.php?title=Azure_OpenAI&action=edit&redlink=1), [Hugging Face](/wiki/hugging_face), and many others. These integrations provide a unified interface through the `BaseChatModel` and `BaseLLM` abstractions, allowing developers to switch between providers with minimal code changes.

### Document Loaders

The framework includes a collection of over 160 document loaders, allowing developers to ingest data from a wide variety of sources including PDFs, web pages, databases, cloud storage services, APIs, and file systems. Each loader converts raw data into LangChain's `Document` format, which includes both content and metadata.

### Text Splitting Methods

LangChain provides more than 10 methods for dividing text data into manageable chunks, making it simpler for language models to process and utilize the data. Splitting strategies include recursive character splitting, token-based splitting, HTML/Markdown-aware splitting, and semantic chunking based on embedding similarity.

### Vector Store Integrations

The framework features integrations with numerous [vector databases](/index.php?title=Vector_database&action=edit&redlink=1) including [Pinecone](/index.php?title=Pinecone&action=edit&redlink=1), [Weaviate](/index.php?title=Weaviate&action=edit&redlink=1), [Chroma](/index.php?title=Chroma&action=edit&redlink=1), [FAISS](/index.php?title=FAISS&action=edit&redlink=1), [Qdrant](/index.php?title=Qdrant&action=edit&redlink=1), [Milvus](/index.php?title=Milvus&action=edit&redlink=1), and [pgvector](/index.php?title=Pgvector&action=edit&redlink=1). These integrations support [retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG) workflows, allowing developers to store and retrieve document embeddings for use in LLM applications.

### Tools and Tool Calling

LangChain includes a collection of tools that facilitate the use of language models in various applications, including web search, code execution, calculators, API calls, and database queries. The framework supports the tool-calling capabilities built into modern LLMs from [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), [Google](/index.php?title=Google&action=edit&redlink=1), and other providers, enabling structured function calling within agent workflows.

## LangChain Expression Language (LCEL)

**LangChain Expression Language** (LCEL) is a declarative, domain-specific language introduced in August 2023 for composing LangChain components into chains and workflows. LCEL uses a pipe (`|`) operator to chain components together, providing a concise and readable syntax for building complex LLM pipelines.

### Runnable Interface

At the foundation of LCEL is the **Runnable** protocol. Every LCEL-compatible component, whether it is a prompt template, an LLM, an output parser, a retriever, or a custom function, implements the same Runnable interface. This uniform interface provides several standard methods:

| Method | Description |
| --- | --- |
| `invoke()` | Process a single input synchronously |
| `ainvoke()` | Process a single input asynchronously |
| `batch()` | Process multiple inputs in parallel |
| `abatch()` | Process multiple inputs asynchronously in parallel |
| `stream()` | Stream output tokens as they are generated |
| `astream()` | Stream output tokens asynchronously |

### Key Capabilities

LCEL was designed from the outset to support putting prototypes into production with no code changes. Its key capabilities include:

- **Streaming**: First-class support for streaming output tokens, enabling lower time-to-first-token for end users
- **Parallel execution**: Independent tasks within a chain run concurrently by default, maximizing throughput
- **Async support**: Every chain can be run asynchronously, integrating seamlessly with async web frameworks
- **Retries and fallbacks**: Built-in support for retrying failed steps and configuring fallback chains
- **Tracing**: Automatic integration with [LangSmith](#langsmith) for observability and debugging

### Example

A typical LCEL chain might look like:

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_template("Tell me about {topic}")
model = ChatOpenAI(model="gpt-4o")
parser = StrOutputParser()

chain = prompt | model | parser
result = chain.invoke({"topic": "artificial intelligence"})
```

This declarative syntax replaced the older, more verbose `LLMChain` and `SequentialChain` patterns that characterized earlier versions of LangChain.

## Pre-built Chains and Agents

### Chains

Chains enable developers to assemble components in a specific order to perform particular tasks, such as summarizing documents, querying databases, or performing retrieval-augmented generation. While the legacy `Chain` class is still supported, LCEL is now the recommended approach for building new chains. Common patterns include:

- **Retrieval chains**: Combine a retriever with an LLM for question answering over documents
- **Summarization chains**: Process long documents through map-reduce, refine, or stuff strategies
- **SQL chains**: Convert natural language queries into SQL and execute them against databases

### Agents

Agents are dynamic systems where the sequence of steps is determined by an LLM at runtime, rather than being hardcoded. The LLM decides which tools to call, in what order, and how to interpret the results. As of 2025, LangChain recommends using [LangGraph](/wiki/langgraph) for all new agent implementations, as it provides more control over agent behavior through its graph-based architecture.

Legacy agent types include:

- **ReAct agents**: Follow the Reasoning-Action-Observation loop pattern
- **OpenAI Functions/Tools agents**: Leverage provider-specific tool-calling APIs
- **Structured Chat agents**: Handle multi-input tools with structured arguments

### Agent Toolkits

LangChain provides specialized agent toolkits that equip agents with curated sets of tools for specific domains, including SQL databases, pandas DataFrames, file management, and API interaction. Each toolkit bundles related tools with appropriate prompt templates and agent configurations.

## LangSmith

**LangSmith** is a proprietary observability, evaluation, and monitoring platform developed by LangChain, Inc. for LLM-powered applications. Initially released in beta in July 2023 and made generally available in February 2024, LangSmith works with any LLM framework (not just LangChain) and supports tracing through Python, TypeScript, Go, and Java SDKs.

### Features

| Feature | Description |
| --- | --- |
| Tracing | End-to-end tracing of LLM calls, tool invocations, and chain execution with full input/output visibility |
| Evaluation | Build datasets from production traces, define custom evaluators, and systematically test prompt changes or model swaps |
| Monitoring | Real-time dashboards for latency, cost, error rates, and custom quality scores |
| Prompt Management | Version-controlled prompt templates with A/B testing capabilities |
| Annotation | Human review and labeling of model outputs for quality assessment |
| Online Evaluation | Score quality with automated evaluators running on production traffic |

### Compatibility

LangSmith traces applications built with [OpenAI](/wiki/openai) SDK, [Anthropic](/wiki/anthropic) SDK, Vercel AI SDK, [LlamaIndex](/index.php?title=LlamaIndex&action=edit&redlink=1), and custom implementations, in addition to LangChain and [LangGraph](/wiki/langgraph). This framework-agnostic approach has broadened its adoption beyond the LangChain ecosystem.

### Deployment Options

LangSmith is available as a managed cloud service, a bring-your-own-cloud (BYOC) option, and a self-hosted deployment for teams with data residency requirements.

### Pricing

| Plan | Price | Included Traces | Retention |
| --- | --- | --- | --- |
| Developer | Free | 5,000 traces/month | 14 days |
| Plus | $39/seat/month | Additional at $5 per 10K traces | Up to 400 days |
| Enterprise | Custom | Custom | Custom |

## LangServe

**LangServe** is a deployment tool introduced in October 2023 for hosting LCEL chains as production-ready REST APIs. Built on top of [FastAPI](/index.php?title=FastAPI&action=edit&redlink=1), LangServe automatically generates multiple endpoints for each deployed chain:

- `/invoke` for single synchronous requests
- `/batch` for processing multiple inputs
- `/stream` for streaming responses
- `/stream_log` for streaming intermediate steps

LangServe also provides an auto-generated playground interface for testing deployed chains in a web browser. As of 2025, LangServe is in maintenance mode, receiving only bug fixes but no new features. LangChain, Inc. now recommends using the LangGraph Platform for production deployments of agent applications.

## Community and Ecosystem

### Adoption

LangChain is one of the most widely adopted frameworks for building LLM-powered applications. Key adoption metrics as of late 2025 include:

| Metric | Value |
| --- | --- |
| GitHub Stars | 117,000+ |
| GitHub Forks | 19,000+ |
| Monthly PyPI Downloads | ~28 million |
| Contributors (Python) | 300+ |
| GitHub Star Growth (Q1 2024 to Q1 2025) | 220% increase |
| Download Growth (Q1 2024 to Q1 2025) | 300% increase |

### Production Users

Major companies using LangChain and its ecosystem in production include:

- **Klarna**: Over 2.5 million customer conversations powered by LangChain-based agents
- **LinkedIn**: SQL Bot for internal employee queries
- **Uber**: Automated code migration workflows
- **Replit**: AI-powered coding assistant features
- **Elastic**: Search and observability integrations

### Integrations Ecosystem

LangChain's ecosystem extends beyond the core framework through a broad network of integrations and partner packages. The community-maintained `langchain-community` package provides integrations for hundreds of third-party services, while first-party partner packages offer tighter, more frequently updated integrations with major LLM providers.

## Relationship to LangGraph

[LangGraph](/wiki/langgraph), released in January 2024, is a separate library in the LangChain ecosystem designed for building stateful, multi-actor agent workflows as graphs. While LangChain provides the foundational abstractions and integrations, LangGraph adds graph-based orchestration primitives including stateful nodes, cyclical workflows, persistence, and human-in-the-loop capabilities.

As of 2025, LangChain, Inc. recommends using LangGraph for all new agent implementations. The two libraries are complementary: LangChain provides the building blocks (model integrations, prompt templates, output parsers, tools), and LangGraph provides the orchestration layer for composing these building blocks into reliable agent systems.

## Criticisms

LangChain has faced several criticisms from the developer community:

- **Abstraction overhead**: Some developers have criticized LangChain for introducing unnecessary layers of abstraction over relatively simple API calls, making debugging more difficult and code harder to understand
- **Rapid API changes**: The framework's fast-moving development has led to frequent breaking changes, particularly during the transition from the legacy chain API to LCEL
- **Complexity**: Critics argue that simpler applications can be built more efficiently with direct API calls rather than through the LangChain abstraction layer
- **Documentation churn**: The pace of change has sometimes outstripped documentation updates, leading to outdated examples and guides

LangChain, Inc. has addressed some of these concerns through the modular package restructuring, the stabilization of `langchain-core`, and improved documentation practices.

## See Also

- [LangGraph](/wiki/langgraph)
- [Large language model](/wiki/large_language_model)
- [Prompt engineering](/wiki/prompt_engineering)
- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)
- [AI agent](/wiki/ai_agent)
- [OpenAI](/wiki/openai)
- [Anthropic](/wiki/anthropic)
- [Vector database](/index.php?title=Vector_database&action=edit&redlink=1)
- [Hugging Face](/wiki/hugging_face)

## References

1. Wikipedia (2025). LangChain. [https://en.wikipedia.org/wiki/LangChain](https://en.wikipedia.org/wiki/LangChain)

2. Fortune (2025). Exclusive: Early AI darling LangChain is now a unicorn with a fresh $125 million in funding. [https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/](https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/)

3. Sequoia Capital (2023). Partnering with LangChain: The LLM Application Framework. [https://sequoiacap.com/article/partnering-with-langchain-the-llm-application-framework/](https://sequoiacap.com/article/partnering-with-langchain-the-llm-application-framework/)

4. LangChain Blog (2023). LangChain Expression Language. [https://blog.langchain.com/langchain-expression-language/](https://blog.langchain.com/langchain-expression-language/)

5. LangChain Blog (2023). The New LangChain Architecture: LangChain-Core and LangChain-Community. [https://blog.langchain.com/the-new-langchain-architecture-langchain-core-v0-1-langchain-community-and-a-path-to-langchain-v0-1/](https://blog.langchain.com/the-new-langchain-architecture-langchain-core-v0-1-langchain-community-and-a-path-to-langchain-v0-1/)

6. LangChain (2025). LangSmith: AI Agent and LLM Observability Platform. [https://www.langchain.com/langsmith/observability](https://www.langchain.com/langsmith/observability)

7. LangChain (2025). LangSmith Plans and Pricing. [https://www.langchain.com/pricing](https://www.langchain.com/pricing)

8. GitHub (2025). langchain-ai/langserve. [https://github.com/langchain-ai/langserve](https://github.com/langchain-ai/langserve)

9. LangChain Blog (2025). Reflections on Three Years of Building LangChain. [https://blog.langchain.com/three-years-langchain/](https://blog.langchain.com/three-years-langchain/)

10. Frederick.ai (2024). Founder Story: Harrison Chase of LangChain. [https://www.frederick.ai/blog/harrison-chase-langchain](https://www.frederick.ai/blog/harrison-chase-langchain)

11. Harrison Chase on X (2025). Announcement of $125M funding at $1.25B valuation. [https://x.com/hwchase17/status/1980680421706006663](https://x.com/hwchase17/status/1980680421706006663)

12. DataCamp (2025). LangChain vs LangGraph vs LangSmith vs LangFlow: Key Differences Explained. [https://www.datacamp.com/tutorial/langchain-vs-langgraph-vs-langsmith-vs-langflow](https://www.datacamp.com/tutorial/langchain-vs-langgraph-vs-langsmith-vs-langflow)

13. GitHub (2025). langchain-ai/langchain. [https://github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)

14. PyPI (2025). langchain package download statistics. [https://pypistats.org/packages/langchain](https://pypistats.org/packages/langchain)

15. IBM (2025). What Is LangChain? [https://www.ibm.com/think/topics/langchain](https://www.ibm.com/think/topics/langchain)

16. WifiTalents (2026). Langchain Statistics: Data Reports 2026. [https://wifitalents.com/langchain-statistics/](https://wifitalents.com/langchain-statistics/)
