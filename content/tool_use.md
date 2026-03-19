---
title: "Tool Use in Large Language Models"
slug: "tool_use"
categories:
  - "Machine_learning_terms"
  - "Artificial_intelligence"
  - "Terms"
  - "Natural_Language_Processing"
---

**Tool use** (also called **function calling** or **tool calling**) is a capability of [large language models](/wiki/llm) (LLMs) that enables them to interact with external tools, APIs, databases, and software systems beyond their core text generation abilities. Rather than relying solely on knowledge encoded in their parameters during training, tool-augmented LLMs can invoke external functions to retrieve real-time information, perform calculations, execute code, query databases, and take actions in the real world. This capability has become a foundational building block for [agentic AI](/wiki/ai) systems and is now supported by all major LLM providers, including [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), and [Google](/wiki/google).

## Overview

At its core, tool use allows an LLM to recognize when a user's request requires capabilities beyond text generation and to signal that a specific external function should be called with particular arguments. The LLM itself does not execute the function. Instead, it produces a structured output (typically in JSON format) specifying which function to call and what arguments to pass. The application code then executes the function, returns the result to the model, and the model incorporates that result into its final response.

This architecture transforms LLMs from static knowledge systems into dynamic agents that can interact with the world. A model with tool use can check live weather data, search the web, run Python code, send emails, query a database, control a browser, or interact with virtually any software system that exposes an API.

| Aspect | Without Tool Use | With Tool Use |
| --- | --- | --- |
| Knowledge | Limited to training data cutoff | Can access real-time information |
| Computation | Prone to arithmetic errors | Can use calculators and code interpreters |
| Actions | Can only generate text | Can interact with external systems |
| Data access | No access to private data | Can query databases and APIs |
| Reliability | May hallucinate facts | Can verify information from authoritative sources |

## History and Research Background

The idea of augmenting language models with external tools has evolved through several key milestones in research and product development.

### Early Foundations (2021-2022)

The concept of tool-augmented language models predates the modern function calling APIs by several years. Some of the foundational research includes:

**WebGPT (December 2021):** [OpenAI](/wiki/openai) published the WebGPT paper, which fine-tuned [GPT-3](/wiki/gpt_models) to answer long-form questions using a text-based web-browsing environment. The model could submit search queries, follow links, and scroll through web pages. Trained using imitation learning and optimized with human feedback, the best model produced answers preferred 56% of the time over those written by human demonstrators. WebGPT demonstrated that language models could effectively use tools (web browsing) to improve factual accuracy.

**MRKL Systems (2022):** AI21 Labs introduced MRKL (Modular Reasoning, Knowledge, and Language) systems, a neuro-symbolic architecture that combines large language models with external tools like calculators and APIs. A MRKL system consists of a set of modules (such as a calculator, weather API, or database) and a router that decides how to direct incoming natural language queries to the appropriate module. This work laid the groundwork for how modern LLMs dispatch tool calls.

**ReAct (2022):** Yao et al. introduced the ReAct framework, where LLMs generate both reasoning traces and task-specific actions in an interleaved manner. ReAct extended MRKL systems by adding the ability to reason about which actions to perform. The framework combines "Reason Only" approaches (like [chain-of-thought prompting](/wiki/prompt_engineering)) with "Act Only" paradigms, enabling dynamic reasoning while interacting with external environments. ReAct became highly influential in the design of LLM agent systems.

**TALM (May 2022):** Aaron Parisi, Yao Zhao, and Noah Fiedel published the TALM (Tool Augmented Language Models) paper, presenting a text-only approach to augmenting language models with non-differentiable tools. TALM used an iterative "self-play" technique to bootstrap performance starting from just a few tool demonstrations. The paper showed that at a given model scale, tool-augmented models significantly outperformed non-augmented LMs on both knowledge-heavy question answering and reasoning-oriented math tasks.

### Toolformer and the Research Breakthrough (February 2023)

The **Toolformer** paper by Timo Schick, Jane Dwivedi-Yu, Roberto Dessi, Roberta Raileanu, Maria Lomeli, Luke Zettlemoyer, Nicola Cancedda, and Thomas Scialom (published February 9, 2023, by [Meta AI](/wiki/meta)) represented a major advance. Toolformer showed that LLMs can teach themselves to use external tools via simple APIs in a self-supervised manner, requiring nothing more than a handful of demonstrations for each API.

The key innovation was that Toolformer learned when and how to call tools (a calculator, a Q&A system, two different search engines, a translation system, and a calendar) without requiring extensive supervised training data. The model decided which APIs to call, when to call them, what arguments to pass, and how to incorporate the results into future token prediction. The resulting model achieved substantially improved zero-shot performance across a variety of downstream tasks, often competitive with much larger models, without sacrificing its core language modeling abilities.

### Gorilla (May 2023)

Around the same time, researchers at UC Berkeley and Microsoft published **Gorilla**, a finetuned LLaMA-based model that surpassed the performance of [GPT-4](/wiki/gpt-4) on writing API calls. Gorilla introduced retriever-aware training, where the instruction-tuned dataset included retrieved API documentation for reference. This approach taught the model to parse and answer questions based on provided documentation, allowing it to adapt to changes in API documentation while reducing hallucination errors. The team also introduced APIBench, a comprehensive evaluation dataset consisting of APIs from HuggingFace, TorchHub, and TensorFlow Hub.

### LangChain and Agent Frameworks (2022-2023)

[LangChain](/wiki/langchain), launched as an open-source project by Harrison Chase and Ankush Gola in late 2022, became one of the first widely adopted frameworks for connecting LLMs to tools. LangChain offered integrations and core abstractions that made it straightforward to connect foundation models to external data and APIs. The framework popularized several agent patterns, including Tool Calling Agents, ReAct Agents, and Structured Chat Agents. LangChain played a significant role in demonstrating the practical value of tool-augmented LLMs to the developer community and helped drive adoption of the paradigm.

## OpenAI Function Calling

[OpenAI](/wiki/openai) was the first major LLM provider to ship a production-ready function calling API, launching the capability on **June 13, 2023**. The feature was released alongside new versions of GPT-3.5 Turbo and [GPT-4](/wiki/gpt-4).

### How It Works

Developers define functions using JSON Schema and pass them to the API alongside user messages. The model then determines whether a function should be called and, if so, returns a JSON object containing the function name and arguments. The developer's application executes the function and passes the result back to the model, which uses it to formulate its response.

### Evolution of OpenAI's Function Calling

| Date | Milestone | Details |
| --- | --- | --- |
| March 2023 | ChatGPT Plugins announced | First-party browsing and code interpreter tools; third-party plugins from Expedia, Wolfram, Zapier, and others |
| June 13, 2023 | Function calling launched | Available for GPT-3.5 Turbo and GPT-4; developers could define functions via JSON Schema |
| July 6, 2023 | Code Interpreter GA | Sandboxed Python execution environment available to all ChatGPT Plus users |
| November 6, 2023 | Parallel function calling | Models released on or after this date support calling multiple functions simultaneously |
| June 2024 | Structured Outputs | Setting `strict: true` in function definitions guarantees arguments match the provided JSON Schema exactly |
| October 2024 | Schema auto-generation | "Generate Anything" feature allows developers to auto-generate valid function schemas from descriptions or code |
| January 23, 2025 | Operator launched | Browser-controlling agent powered by the Computer-Using Agent (CUA) model |

### ChatGPT Plugins and Code Interpreter

Before the function calling API, OpenAI explored tool use through **ChatGPT Plugins**, announced in March 2023. OpenAI hosted two plugins of their own: a web browser and a code interpreter. Third-party plugins enabled ChatGPT to interact with services like Expedia, Wolfram Alpha, Instacart, and Zapier. While plugins were eventually deprecated in favor of GPTs and the Assistants API, they demonstrated the commercial potential of tool-augmented LLMs.

The **Code Interpreter** (later renamed to "Advanced Data Analysis") provided ChatGPT with a working Python interpreter in a sandboxed, firewalled execution environment. Code ran in a persistent session for the duration of a chat conversation, enabling mathematical problem solving, data analysis, visualization, and file format conversion.

### Parallel Function Calling

Starting with models released on November 6, 2023, OpenAI introduced **parallel function calling**, allowing models to request multiple function calls simultaneously rather than sequentially. This significantly improved efficiency for queries requiring multiple independent pieces of information.

### Structured Outputs

In June 2024, OpenAI launched **Structured Outputs**, a feature that guarantees the arguments generated by the model for a function call exactly match the JSON Schema provided in the function definition. By setting `strict: true`, developers can ensure that every function call from the model is schema-compliant. Under the hood, strict mode leverages constrained decoding, where grammar rules compiled from the JSON Schema guide the model's token generation to prevent any invalid output.

## Anthropic Tool Use

[Anthropic](/wiki/anthropic) introduced tool use for its [Claude](/wiki/CLAUDE) model family through a beta program starting in **April 2024**, with **general availability announced on May 30, 2024** across the entire Claude 3 model family on the Anthropic Messages API, Amazon Bedrock, and Google Cloud's Vertex AI.

### Implementation

Anthropic's tool use integrates tools directly into the message structure. Messages contain arrays of content blocks with different types: `text`, `image`, `tool_use`, and `tool_result`. When Claude determines a tool should be used, it returns a `tool_use` content block specifying the tool name and input arguments. The developer executes the tool and returns a `tool_result` block, after which Claude formulates its final response.

Each tool is defined with a name, description, and an `input_schema` following JSON Schema format. Claude participates in a multi-step conversation where it signals its intent to use a predefined tool, waits for the result, and then formulates a final response based on that result.

### Advanced Tool Use Features

Anthropic has continued to expand its tool use capabilities with several advanced features:

**Tool Search Tool:** Allows Claude to use search tools to access thousands of tools without consuming its entire context window, solving the scalability challenge of providing many tool definitions.

**Programmatic Tool Calling:** Enables Claude to orchestrate tools through code rather than through individual API round-trips. Instead of requesting tools one at a time with each result being returned to its context, Claude writes code that calls multiple tools, processes their outputs, and controls what information actually enters its context window. This reduces latency and context consumption for complex multi-tool workflows.

## Google Gemini Function Calling

Google introduced function calling capabilities with the launch of **Gemini 1.0 in December 2023**. The feature has been supported and enhanced across subsequent Gemini model versions, including Gemini 1.5 and the Gemini 2.0 series.

### Function Calling Modes

The [Gemini](/wiki/gemini) API provides three distinct modes for controlling how the model uses provided tools:

| Mode | Behavior | Use Case |
| --- | --- | --- |
| AUTO (default) | Model decides whether to generate text or suggest a function call based on context | Most flexible; recommended for most scenarios |
| ANY | Model is constrained to always predict a function call; guarantees schema adherence | When every prompt must result in a function call |
| NONE | Model is prohibited from making function calls | Equivalent to sending a request without function declarations |

### Compositional Function Calling

Gemini supports compositional (sequential) function calling, where the model chains multiple function calls together to fulfill a complex request. For example, to answer "Get the temperature in my current location," the Gemini API might first invoke a `get_current_location()` function followed by a `get_weather()` function that takes the location as a parameter.

### Use Cases

Google categorizes function calling into three primary use cases:

1. **Augmenting Knowledge:** Accessing information from external sources like databases, APIs, and knowledge bases
2. **Extending Capabilities:** Using external tools to perform computations and extend model limitations (such as using a calculator or creating charts)
3. **Taking Actions:** Interacting with external systems via APIs (scheduling appointments, creating invoices, sending emails, controlling smart home devices)

## Other Providers

Tool use and function calling have become a standard capability across the LLM ecosystem. Several other providers support the feature:

| Provider | Model(s) | Notes |
| --- | --- | --- |
| Mistral AI | Mistral Large, Mistral Medium | Supports tool chat templates; parallel tool calling available on larger models |
| xAI | Grok | Function calling with JSON output; works alongside built-in agentic tools like web search |
| Alibaba | Qwen 2.5+ | Hermes-style tool use; supports parallel, multi-step, and multi-turn tool calls |
| Cohere | Command R+ | Tool use integrated into the Command series |
| Meta | Llama 3.1+ | Open-source models with tool calling support |

## How Function Calling Works Technically

Understanding the technical mechanics of function calling is essential for developers building tool-augmented LLM applications.

### Step-by-Step Process

The function calling workflow follows a consistent pattern across providers:

**Step 1: Tool Definition.** The developer defines available tools using JSON Schema, specifying the function name, a natural language description, and the expected parameters with their types and constraints.

```json
{
  "name": "get_weather",
  "description": "Get current weather for a given location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name, e.g. San Francisco"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"]
      }
    },
    "required": ["location"]
  }
}
```

**Step 2: Model Inference.** The tool definitions are sent to the model alongside the user's message. The model processes the prompt, determines whether any tools are needed, and (if so) outputs a structured JSON object specifying the tool name and arguments.

**Step 3: Function Execution.** The application code receives the model's tool call request, validates it, and executes the actual function. The LLM never executes functions directly; this is a critical architectural principle. The application retains full control over execution, including security checks, rate limiting, and error handling.

**Step 4: Result Integration.** The function's return value is sent back to the model as a tool result message. The model then incorporates the result into its reasoning and generates a natural language response for the user.

### Constrained Decoding

Under the hood, many providers use **constrained decoding** (also called guided generation) to ensure the model's output conforms to the defined schema. This technique works by converting the JSON Schema into grammar rules that guide the model's token generation process. At each step during generation, the decoding algorithm masks out any tokens that would produce invalid JSON or violate schema constraints, guaranteeing that every tool call is well-formed.

Libraries like **Outlines** and **Formatron** implement constrained decoding for open-source models, supporting regex patterns, JSON schemas, Pydantic models, and context-free grammars.

### Parallel and Sequential Tool Calls

Modern LLMs support two patterns for multi-tool workflows:

- **Parallel tool calls:** The model requests multiple independent function calls simultaneously. For example, fetching weather data for three cities at once. This reduces latency by allowing concurrent execution.
- **Sequential tool calls:** The model requests one tool call at a time, using the result of each call to inform subsequent calls. This is necessary when calls have data dependencies, such as first looking up a user's location and then fetching weather for that location.

## Types of Tools

LLM tool use encompasses a wide variety of external capabilities. Tools can be broadly categorized by their function:

### Code Execution

Code execution tools provide the model with a sandboxed programming environment (typically Python) for running calculations, processing data, generating visualizations, or applying complex logic. Examples include OpenAI's Code Interpreter (Advanced Data Analysis) and Anthropic's code execution sandbox. Code execution is especially valuable for mathematical reasoning, data analysis, and tasks that require deterministic computation.

### Web Search

Web search tools allow the model to query search engines (Google, Bing, DuckDuckGo, or specialized search APIs) to retrieve up-to-date information. This capability addresses one of the fundamental limitations of LLMs: that their knowledge is frozen at training time. Web search tools are essential for tasks requiring current events, recent publications, or rapidly changing information.

### API Calls

Generic API calling tools enable the model to make HTTP requests (GET, POST, PUT, DELETE) to third-party services. This allows the model to interact with virtually any web service, including payment processors, CRM systems, social media platforms, and enterprise software. API tools are the most versatile category and form the backbone of many agentic applications.

### Database Queries

SQL and NoSQL database tools let the model query structured data stores directly. When a model needs transactional data, customer records, or anything with defined schemas, database tools provide fast, reliable, and precise lookups. The model generates a query (such as SQL), the application validates and executes it, and the results are returned for the model to interpret.

### File Operations

File operation tools allow the model to read, write, create, and manipulate files on a file system. These tools are commonly used in coding assistants and development environments, enabling the model to browse codebases, edit source files, and manage project structures.

### Specialized Tools

Beyond the major categories, tools can encompass calculators, translation services, calendar systems, email senders, image generators, and any other external system that can be invoked programmatically.

## Model Context Protocol (MCP)

The **Model Context Protocol (MCP)** is an open standard introduced by [Anthropic](/wiki/anthropic) in **November 2024** to standardize the way AI systems integrate with external tools, data sources, and systems. MCP addresses what Anthropic described as an "N x M" data integration problem: before MCP, connecting agents to tools required a custom integration for each pairing, creating fragmentation and duplicated effort that made it difficult to scale connected systems.

### Architecture

MCP follows a client-host-server architecture built on JSON-RPC:

| Component | Role | Example |
| --- | --- | --- |
| MCP Host | The AI-powered application that coordinates and manages one or multiple MCP clients | Claude Desktop, an IDE, or a custom AI application |
| MCP Client | A component integrated within the host that maintains a connection to an MCP server | The MCP client inside Claude Desktop |
| MCP Server | A standalone program that provides context and capabilities to MCP clients | A GitHub server for repository access, a PostgreSQL server for database operations |

This separation of concerns means a single MCP server can work with any MCP-compatible AI application, and a single AI application can connect to any number of MCP servers without bespoke integrations.

### Transport Layer

MCP supports two primary transport methods:

- **STDIO (Standard Input/Output):** For local integrations where the server runs in the same environment as the client
- **HTTP with Server-Sent Events (SSE):** For remote connections, using HTTP for client requests and SSE for server responses and streaming

### Capability Negotiation

MCP uses a capability-based negotiation system where clients and servers explicitly declare their supported features during initialization. This allows the protocol to evolve while maintaining backward compatibility.

### Adoption and Governance

Following its announcement, MCP was rapidly adopted by major AI providers. [OpenAI](/wiki/openai) and Google DeepMind both adopted the protocol. SDKs were released for Python, TypeScript, C#, and Java. In **December 2025**, Anthropic donated MCP to the **Agentic AI Foundation (AAIF)**, a directed fund under the Linux Foundation co-founded by Anthropic, Block, and OpenAI, with support from additional companies.

### Specification Evolution

| Version | Date | Key Changes |
| --- | --- | --- |
| Initial Release | November 2024 | Core client-host-server architecture, tool and resource primitives |
| June 2025 Specification | June 2025 | First stable specification for connecting agents to external tools and data sources |
| November 2025 Specification | November 2025 | Modern authorization, asynchronous execution, enterprise governance features; expanded beyond synchronous tool calling into long-running, governed workflows |

## Computer Use and Browser Use

A specialized and rapidly evolving form of tool use involves LLMs directly controlling computer interfaces, including desktop environments and web browsers.

### Anthropic Computer Use

In **October 2024**, [Anthropic](/wiki/anthropic) became the first major AI company to introduce a general-purpose computer-using model. Released as a beta feature with Claude 3.5 Sonnet, computer use allows Claude to interact with graphical user interfaces by taking screenshots, interpreting screen content, and simulating keyboard and mouse input (clicking, typing, and scrolling).

Computer use enables tasks such as:

- Collecting data from the web and entering it into a spreadsheet
- Building, deploying, and debugging websites
- Navigating desktop applications
- Filling out forms and completing multi-step workflows

Anthropic described the feature as an "experiment" at launch, noting it was "imperfect" and "at times cumbersome and error-prone," but expected rapid improvement based on developer feedback.

### OpenAI Operator and CUA

On **January 23, 2025**, [OpenAI](/wiki/openai) launched **Operator**, an agent that uses its own browser to perform tasks on the web. Powered by a new model called the **Computer-Using Agent (CUA)**, Operator combines GPT-4o's vision capabilities with advanced reasoning through [reinforcement learning](/wiki/reinforcement_learning). CUA is trained to interact with graphical user interfaces (buttons, menus, text fields) in the same way humans do.

Operator can handle tasks such as filling out forms, ordering groceries, and browsing the web autonomously. It was initially released as a research preview for ChatGPT Pro subscribers in the United States.

### Browser Use Framework

**Browser Use** is an open-source framework that creates a bridge between LLMs and web browsers. It uses a hybrid approach combining DOM parsing techniques with vision-based analysis. The framework loads web pages using automation tools like Playwright, processes the Document Object Model (DOM) to identify interactive elements (buttons, links, input fields, forms), and enables the LLM to interact with them. Browser Use supports multiple models and is designed for flexibility and customization.

### Challenges with Computer and Browser Use

Computer use presents unique challenges compared to traditional function calling. Models can struggle with precise bounding box prediction for small or densely packed interface elements. Even models with built-in bounding box interfaces frequently misidentify small targets such as calendar cells or icon grids. The approach also raises security concerns, as giving an AI model control over a computer environment creates a larger attack surface.

## Training Models for Tool Use

Training LLMs to use tools effectively requires specialized techniques beyond standard language model pre-training.

### Supervised Fine-Tuning (SFT)

The most common approach involves creating training datasets of tool-call traces, where the model learns to generate specific tool-using schemas (typically in XML or JSON format). A "tool" role is added to the conversation format, and the model is trained on samples that demonstrate when and how to invoke tools. This teaches the model the syntactic patterns and semantic reasoning required for effective tool use.

### Reinforcement Learning

After supervised fine-tuning, reinforcement learning is used to refine tool use behavior. Labs train models in sandboxed environments (browsers, terminals, code repositories) to improve the model's ability to bridge the gap between "knowing about" tools and "doing things" with them. [Reinforcement learning from human feedback (RLHF)](/wiki/reinforcement_learning_from_human_feedback) trains LLM behavior with human-labeled feedback, aligning tool use with user preferences and safety requirements.

### Self-Supervised and Bootstrapped Approaches

The Toolformer approach demonstrated that models can learn tool use in a self-supervised manner. The model generates candidate tool calls, evaluates whether each call actually improved prediction quality, and retains only the helpful ones for training. Similarly, TALM used an iterative self-play technique to bootstrap tool use performance from just a few demonstrations.

### Training Datasets and Benchmarks

Several datasets and benchmarks have been developed to support tool use training and evaluation:

| Dataset/Benchmark | Description | Scale |
| --- | --- | --- |
| ToolBench | Open platform for training and evaluating LLMs for tool learning (ICLR 2024 spotlight) | 16,464 real-world RESTful APIs across 49 categories; 126,486 multi-turn instruction-solution pairs |
| API-Bank | Benchmark for tool-augmented LLMs with a runnable evaluation system | 73 API tools with 314 annotated dialogues (753 API calls); training set of 1,888 dialogues from 2,138 APIs |
| APIBench | Evaluation dataset introduced with Gorilla | APIs from HuggingFace, TorchHub, and TensorFlow Hub (1,645 API calls after filtering) |
| Berkeley Function Calling Leaderboard (BFCL) | Comprehensive benchmark evaluating function calling across multiple dimensions | V1 through V4, progressing from single-call AST evaluation to holistic agentic evaluation |

### Berkeley Function Calling Leaderboard

The **Berkeley Function Calling Leaderboard (BFCL)**, created by the team behind Gorilla, has become the standard benchmark for evaluating LLM tool use capabilities. The benchmark uses a novel Abstract Syntax Tree (AST) evaluation method that examines the structure of each tool call rather than executing every tool, allowing it to scale to thousands of functions.

BFCL has evolved through four versions:

- **BFCL-v1:** Introduced AST as an evaluation metric
- **BFCL-v2:** Added enterprise and open-source contributed functions
- **BFCL-v3:** Introduced multi-turn interactions
- **BFCL-v4:** Introduced holistic agentic evaluation

Results have revealed that top models excel at one-shot function calling but can still struggle when required to maintain context, manage long conversations, or decide when not to act.

### Specialized Open-Source Models

Several open-source models have been specifically optimized for tool use:

**NexusRaven-V2** (by Nexusflow): A 13-billion parameter model instruction-tuned from CodeLlama-13B that surpasses GPT-4 by 7% in function calling success rates on human-generated use cases involving nested and composite functions. Notably, NexusRaven-V2 was trained without any proprietary LLM data, enabling enterprises to fully own the model used for building copilots and agents.

**Gorilla:** A finetuned LLaMA-based model specialized for API calling, capable of adapting to changes in API documentation through retriever-aware training.

## Challenges

### Reliability

Tool use reliability remains a significant challenge. Models may generate syntactically valid but semantically incorrect tool calls, choose the wrong tool for a task, or fail to use tools when they should. Hallucination is particularly problematic: models may fabricate tool names, invent nonexistent API endpoints, or generate plausible-looking but incorrect arguments. Even with constrained decoding guaranteeing valid JSON, the logical correctness of tool calls depends on the model's understanding of the tool's purpose and the user's intent.

### Security

Tool use significantly expands the attack surface of LLM applications. Key security concerns include:

**[Prompt Injection](/wiki/prompt_injection):** Identified by OWASP as the top security vulnerability for LLM applications (LLM01:2025), prompt injection exploits the model's reliance on user inputs by inserting hidden or malicious instructions. Indirect prompt injection is especially dangerous for tool-using models, as malicious instructions can be embedded in data retrieved by tools (such as web pages or documents), causing the model to execute unintended tool calls.

**Excessive Agency (OWASP LLM06:2025):** This vulnerability arises when LLM-based systems are granted overly broad permissions, autonomy, or functionality. Examples include agents with delete permissions when read-only would suffice, agents accessing all user files when scoped access is appropriate, and agents executing commands without human approval when oversight is critical.

**Output Handling:** When applications do not properly handle outputs generated by LLMs, those outputs can introduce injection risks, particularly when rendered or executed in other systems (such as web pages or databases).

### Error Handling

Robust error handling is essential for production tool use systems. Tools may fail due to network errors, rate limits, invalid inputs, permission issues, or service outages. The model must be able to gracefully handle failure responses, retry when appropriate, and communicate errors clearly to the user. Designing effective error handling patterns that work across the model-application boundary requires careful engineering.

### Scalability

As the number of available tools grows, maintaining model performance becomes challenging. Including many tool definitions in the prompt consumes context window space and can confuse the model about which tool to select. Solutions like Anthropic's Tool Search Tool and MCP's architecture help address this, but tool selection at scale remains an active area of research.

### Latency

Tool use inherently adds latency to LLM responses because each tool call requires at least one additional round-trip between the model and the application (and potentially additional round-trips to external services). Multi-step tool use workflows can result in significantly longer response times compared to direct text generation.

### Cost

Each tool call iteration consumes additional tokens (for both the request and the response), increasing the cost of API usage. Complex agentic workflows that involve many sequential tool calls can accumulate significant costs, especially with larger models.

## Impact on Agentic AI

Tool use is widely regarded as the enabling capability that transforms LLMs from conversational assistants into autonomous agents. The progression from chatbots to agents has been described as: if 2023 was the year of the generative AI chatbot and 2024 was the year of the "copilot," then 2025 is the year of the AI agent, representing a fundamental shift from AI systems that suggest to systems that act.

### Market Growth

The agentic AI market is projected to grow from $5.25 billion in 2024 to $199.05 billion by 2034, representing a compound annual growth rate of approximately 43.84%. Gartner predicts that 40% of enterprise applications will embed AI agents by the end of 2026, up from less than 5% in 2025.

### Enterprise Adoption

As of 2025, 79% of organizations report some level of agentic AI adoption, with 96% planning to expand their usage. Companies report average returns on investment of 171%, with U.S. enterprises achieving 192% ROI from agentic deployments. Practical results include logistics teams cutting delays by up to 40% and customer support organizations reducing call times by nearly 25%.

### Multi-Agent Systems

Tool use has enabled the development of multi-agent systems where multiple specialized AI agents collaborate on complex tasks. Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025. In these systems, each agent has access to specific tools suited to its role, and agents coordinate through message passing and shared state to accomplish goals that no single agent could handle alone.

### Agentic Frameworks

Several frameworks have emerged to support the development of tool-using AI agents:

| Framework | Developer | Key Features |
| --- | --- | --- |
| [LangChain](/wiki/langchain) / LangGraph | LangChain, Inc. | Agent abstractions, tool integrations, graph-based agent orchestration |
| AutoGen | Microsoft | Multi-agent conversation framework with tool use |
| CrewAI | CrewAI | Role-based multi-agent systems with tool integration |
| Semantic Kernel | Microsoft | Enterprise AI orchestration with function calling support |
| Qwen-Agent | Alibaba | Agent framework built on Qwen models with MCP support |

## See Also

- [Large language model](/wiki/llm)
- [Prompt engineering](/wiki/prompt_engineering)
- [Prompt injection](/wiki/prompt_injection)
- [OpenAI](/wiki/openai)
- [Anthropic](/wiki/anthropic)
- [GPT-4](/wiki/gpt-4)
- [Claude](/wiki/CLAUDE)
- [Gemini](/wiki/gemini)
- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)
- [LangChain](/wiki/langchain)
- [Natural language processing](/wiki/natural_language_processing)

## References

1. Schick, T., Dwivedi-Yu, J., Dessi, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., Cancedda, N., & Scialom, T. (2023). "Toolformer: Language Models Can Teach Themselves to Use Tools." arXiv:2302.04761. Retrieved from [https://arxiv.org/abs/2302.04761](https://arxiv.org/abs/2302.04761).

2. Parisi, A., Zhao, Y., & Fiedel, N. (2022). "TALM: Tool Augmented Language Models." arXiv:2205.12255. Retrieved from [https://arxiv.org/abs/2205.12255](https://arxiv.org/abs/2205.12255).

3. Nakano, R., Hilton, J., Balaji, S., et al. (2021). "WebGPT: Browser-assisted question-answering with human feedback." arXiv:2112.09332. Retrieved from [https://arxiv.org/abs/2112.09332](https://arxiv.org/abs/2112.09332).

4. Yao, S., et al. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." arXiv:2210.03629. Retrieved from [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629).

5. Patil, S. G., et al. (2023). "Gorilla: Large Language Model Connected with Massive APIs." arXiv:2305.15334. Retrieved from [https://arxiv.org/abs/2305.15334](https://arxiv.org/abs/2305.15334).

6. OpenAI. (2023). "Function calling and other API updates." Retrieved from [https://openai.com/index/function-calling-and-other-api-updates/](https://openai.com/index/function-calling-and-other-api-updates/).

7. OpenAI. (2023). "ChatGPT plugins." Retrieved from [https://openai.com/index/chatgpt-plugins/](https://openai.com/index/chatgpt-plugins/).

8. OpenAI. (2024). "Introducing Structured Outputs in the API." Retrieved from [https://openai.com/index/introducing-structured-outputs-in-the-api/](https://openai.com/index/introducing-structured-outputs-in-the-api/).

9. OpenAI. "Function calling." OpenAI API Documentation. Retrieved from [https://platform.openai.com/docs/guides/function-calling](https://platform.openai.com/docs/guides/function-calling).

10. OpenAI. (2025). "Introducing Operator." Retrieved from [https://openai.com/index/introducing-operator/](https://openai.com/index/introducing-operator/).

11. Anthropic. "Tool use with Claude." Claude API Docs. Retrieved from [https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

12. Anthropic. "Introducing advanced tool use on the Claude Developer Platform." Retrieved from [https://www.anthropic.com/engineering/advanced-tool-use](https://www.anthropic.com/engineering/advanced-tool-use).

13. Anthropic. (2024). "Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku." Retrieved from [https://www.anthropic.com/news/3-5-models-and-computer-use](https://www.anthropic.com/news/3-5-models-and-computer-use).

14. Google. "Function calling with the Gemini API." Google AI for Developers. Retrieved from [https://ai.google.dev/gemini-api/docs/function-calling](https://ai.google.dev/gemini-api/docs/function-calling).

15. Anthropic. (2024). "Introducing the Model Context Protocol." Retrieved from [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol).

16. Model Context Protocol. "Specification." Retrieved from [https://modelcontextprotocol.io/specification/2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25).

17. Model Context Protocol. "Architecture." Retrieved from [https://modelcontextprotocol.io/specification/2025-06-18/architecture](https://modelcontextprotocol.io/specification/2025-06-18/architecture).

18. "Model Context Protocol." Wikipedia. Retrieved from [https://en.wikipedia.org/wiki/Model_Context_Protocol](https://en.wikipedia.org/wiki/Model_Context_Protocol).

19. Qin, Y., et al. (2023). "ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs." arXiv:2307.16789. Retrieved from [https://arxiv.org/abs/2307.16789](https://arxiv.org/abs/2307.16789).

20. Li, M., et al. (2023). "API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs." arXiv:2304.08244. Retrieved from [https://arxiv.org/abs/2304.08244](https://arxiv.org/abs/2304.08244).

21. Berkeley Function Calling Leaderboard (BFCL). Retrieved from [https://gorilla.cs.berkeley.edu/leaderboard.html](https://gorilla.cs.berkeley.edu/leaderboard.html).

22. Nexusflow. (2023). "NexusRaven-V2-13B." Retrieved from [https://huggingface.co/Nexusflow/NexusRaven-V2-13B](https://huggingface.co/Nexusflow/NexusRaven-V2-13B).

23. OWASP. "OWASP Top 10 for Large Language Model Applications." Retrieved from [https://owasp.org/www-project-top-10-for-large-language-model-applications/](https://owasp.org/www-project-top-10-for-large-language-model-applications/).

24. OWASP. "LLM01:2025 Prompt Injection." Retrieved from [https://genai.owasp.org/llmrisk/llm01-prompt-injection/](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).

25. Gartner. (2025). "Gartner Predicts 40% of Enterprise Apps Will Feature Task-Specific AI Agents by 2026." Retrieved from [https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025).
