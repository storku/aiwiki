---
title: "Model Context Protocol"
slug: "model_context_protocol"
categories:
  - "Artificial_intelligence"
  - "Protocols"
  - "Anthropic"
  - "Software_development_tools"
  - "Open_standards"
---

The **Model Context Protocol** (**MCP**) is an open standard and [open-source](/index.php?title=Open-source_software&action=edit&redlink=1) protocol for connecting [artificial intelligence](/wiki/artificial_intelligence) systems, particularly [large language models](/wiki/large_language_model) (LLMs), to external tools, data sources, and services. Developed by [Anthropic](/wiki/anthropic) and publicly released on November 25, 2024, MCP provides a universal, vendor-neutral interface that replaces fragmented, custom integrations with a single standardized protocol.[&#91;1&#93;](#cite_note-anthropic-announce-1)[&#91;2&#93;](#cite_note-wikipedia-mcp-2) The protocol is built on [JSON-RPC](/index.php?title=JSON-RPC&action=edit&redlink=1) 2.0, uses a client-server architecture, and defines a set of core primitives (Tools, Resources, Prompts, and Sampling) that together form a vocabulary for human-AI-tool interaction.[&#91;3&#93;](#cite_note-spec-architecture-3)

MCP has been widely adopted across the AI industry. By late 2025, it had become the de facto connectivity standard for [agentic AI](/index.php?title=Agentic_AI&action=edit&redlink=1) applications, with first-class support from [OpenAI](/wiki/openai), [Google DeepMind](/index.php?title=Google_DeepMind&action=edit&redlink=1), and [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), among others.[&#91;4&#93;](#cite_note-pento-year-4) In December 2025, Anthropic donated MCP to the Agentic AI Foundation (AAIF), a directed fund under the [Linux Foundation](/index.php?title=Linux_Foundation&action=edit&redlink=1), co-founded by Anthropic, Block, and OpenAI.[&#91;5&#93;](#cite_note-aaif-donation-5)

## Origins and History

### Internal Development

MCP originated from internal work at Anthropic in mid-2024. David Soria Parra, who joined Anthropic in April 2024, was working on internal developer tooling as part of an effort to empower more employees to integrate deeply with the company's models. The project emerged from his frustration with constantly copying code between [Claude](/wiki/claude_ai) Desktop and his IDE.[&#91;6&#93;](#cite_note-dsp-interview-6) Inside Anthropic, teams noticed that their internal prototypes kept converging on similar patterns for requesting data, invoking tools, and handling long-running tasks. Soria Parra and co-creator Justin Spahr-Summers formalized these patterns into the Model Context Protocol.[&#91;7&#93;](#cite_note-latentspace-7)

An early internal hackathon at Anthropic saw every entry built on MCP, which went viral within the company and validated the protocol's utility before its public release.[&#91;6&#93;](#cite_note-dsp-interview-6)

### Public Release

On November 25, 2024, Anthropic open-sourced MCP along with software development kits (SDKs) for [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1) and [Python](/index.php?title=Python_(programming_language)&action=edit&redlink=1), pre-built MCP servers for popular enterprise systems (including [Google Drive](/index.php?title=Google_Drive&action=edit&redlink=1), [Slack](/index.php?title=Slack_(software)&action=edit&redlink=1), [GitHub](/index.php?title=GitHub&action=edit&redlink=1), [Git](/index.php?title=Git&action=edit&redlink=1), [PostgreSQL](/index.php?title=PostgreSQL&action=edit&redlink=1), and [Puppeteer](/index.php?title=Puppeteer_(software)&action=edit&redlink=1)), and the full protocol specification under the initial version 2024-11-05.[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Industry Adoption Timeline

| Date | Milestone |
| --- | --- |
| November 25, 2024 | Anthropic open-sources MCP with initial specification (version 2024-11-05), TypeScript and Python SDKs, and pre-built servers |
| January-February 2025 | AI IDEs including [Cursor](/wiki/cursor_rules) and Windsurf begin supporting MCP |
| March 2025 | [OpenAI](/wiki/openai) announces MCP support in its Agents SDK, Responses API, and [ChatGPT](/wiki/chatgpt) desktop application; specification version 2025-03-26 released with Streamable HTTP and OAuth framework |
| April 2025 | Google DeepMind confirms MCP support in upcoming Gemini models |
| May 2025 | Microsoft announces MCP support at Build 2025; GitHub and Microsoft join MCP's steering committee |
| June 2025 | Specification version 2025-06-18 released with elicitation, structured tool output, and enhanced security |
| November 2025 | First anniversary specification (version 2025-11-25) released with async Tasks, server identity, and registry support |
| December 2025 | Anthropic donates MCP to the Agentic AI Foundation under the Linux Foundation |

### Growth Metrics

MCP's growth trajectory has been remarkable. Server downloads grew from approximately 100,000 in November 2024 to over 8 million by April 2025.[&#91;4&#93;](#cite_note-pento-year-4) By the protocol's first anniversary in November 2025, the ecosystem had expanded to over 97 million monthly SDK downloads, more than 10,000 active servers, and first-class client support across major AI platforms including ChatGPT, [Claude](/wiki/claude_ai), Cursor, Gemini, [Microsoft Copilot](/wiki/microsoft_copilot), and [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1).[&#91;5&#93;](#cite_note-aaif-donation-5)[&#91;8&#93;](#cite_note-anniversary-spec-8)

## Architecture

### Overview

MCP follows a client-server architecture built on [JSON-RPC](/index.php?title=JSON-RPC&action=edit&redlink=1) 2.0 and provides a stateful session protocol focused on context exchange and sampling coordination between clients and servers. The architecture involves three distinct roles: hosts, clients, and servers.[&#91;3&#93;](#cite_note-spec-architecture-3)

### Hosts, Clients, and Servers

| Component | Role | Examples |
| --- | --- | --- |
| **Host** | The AI application that users interact with; acts as the container and coordinator that creates and manages multiple MCP clients | [Claude](/wiki/claude_ai) Desktop, [Claude Code](/wiki/claude_code), IDEs with AI features |
| **Client** | Maintains a 1:1 connection with a particular MCP server; created and managed by the host | Protocol client instances within the host application |
| **Server** | Exposes capabilities (tools, resources, prompts) to clients through the standardized MCP interface | Database connectors, file system servers, API wrappers |

The host process creates and manages separate MCP client connections for each MCP server it communicates with. Each client maintains a dedicated, one-to-one relationship with its server, ensuring clean separation of concerns. The server provides the actual functionality, exposing tools, resources, and prompts that the AI model can use during interactions.[&#91;3&#93;](#cite_note-spec-architecture-3)[&#91;9&#93;](#cite_note-kubiya-architecture-9)

### Capability Negotiation

MCP uses a capability-based negotiation system. During the initialization phase, both client and server explicitly declare their supported features, creating a contract for their interaction. This prevents runtime errors and enables graceful degradation when features are not available.[&#91;10&#93;](#cite_note-spec-lifecycle-10)

The initialization sequence proceeds as follows:

1. The client sends an `initialize` request containing its supported protocol version, capabilities, and client information. This request must not be part of a JSON-RPC batch.
2. The server responds with its own supported protocol version, advertised capabilities (such as tools, resources, logging, and prompts), and optional instructions for the client.
3. The client sends an `initialized` notification to signal readiness.
4. Until the `initialized` notification is received, the server should not send requests other than logging or pings.[&#91;10&#93;](#cite_note-spec-lifecycle-10)

### Connection Lifecycle

The MCP connection lifecycle consists of three phases:

| Phase | Description |
| --- | --- |
| **Initialization** | Protocol version negotiation, capability exchange, and readiness signaling between client and server |
| **Operation** | Normal message exchange according to negotiated capabilities; both sides may send requests, responses, and notifications |
| **Shutdown** | Clean disconnection through a close notification or transport disconnection |

During the operation phase, the client and server exchange messages according to the negotiated capabilities. Both parties can send requests and notifications as defined by the protocol, and both must be prepared to handle incoming messages at any time.[&#91;10&#93;](#cite_note-spec-lifecycle-10)

## Core Primitives

MCP defines four core primitives that together form the building blocks of AI-tool interaction. Each primitive serves a distinct purpose and has different control semantics.[&#91;3&#93;](#cite_note-spec-architecture-3)

### Overview of Primitives

| Primitive | Control | Direction | Description |
| --- | --- | --- | --- |
| **Tools** | Model-controlled | Server → Client | Executable functions that allow models to perform actions or retrieve information |
| **Resources** | Application-controlled | Server → Client | Structured data or content that provides additional context to the model |
| **Prompts** | User-controlled | Server → Client | Pre-defined templates or instructions that guide language model interactions |
| **Sampling** | Server-initiated | Client → Server | Allows servers to request LLM completions through the client |

### Tools

Tools enable AI models to perform actions and interact with external systems. Each tool defines a specific operation with typed inputs and outputs, described using [JSON Schema](/index.php?title=JSON_Schema&action=edit&redlink=1). When a model invokes a tool, the MCP client sends the request to the appropriate server, which executes the operation and returns the result.[&#91;11&#93;](#cite_note-spec-tools-11)

Tools are model-controlled, meaning the AI model decides when and how to use them based on the conversation context and user intent. Examples include querying a database, creating a file, sending a message, or executing a shell command.

#### Tool Annotations

Introduced in specification version 2025-03-26, tool annotations provide metadata hints about tool behavior. These annotations help clients categorize and present tools appropriately, and enable safety measures such as user confirmation prompts for destructive operations.[&#91;11&#93;](#cite_note-spec-tools-11)

| Annotation | Description |
| --- | --- |
| `readOnlyHint` | Indicates the tool does not modify its environment |
| `destructiveHint` | Indicates the tool may perform destructive updates (only meaningful when `readOnlyHint` is false) |
| `idempotentHint` | Indicates repeated calls with the same arguments have no additional effect (only meaningful when `readOnlyHint` is false) |
| `openWorldHint` | Indicates the tool interacts with external entities beyond the server's controlled environment |

All annotation properties are hints and are not guaranteed to affect tool behavior. They serve as informational metadata for clients and AI models.[&#91;11&#93;](#cite_note-spec-tools-11)

### Resources

Resources provide structured access to information that the AI application can retrieve and use as context. They function as read-only, addressable content entities exposed by the server, acting as a well-organized library that models can read and reference but not alter.[&#91;12&#93;](#cite_note-spec-resources-12)

Each resource is uniquely identified by a [URI](/index.php?title=Uniform_Resource_Identifier&action=edit&redlink=1). Resources can contain either text data (plain text, log files, JSON/XML data, configuration files encoded as UTF-8) or binary data (images, audio files, PDFs encoded in base64). Resources can also be annotated with metadata such as audience, priority, and last modified timestamp.[&#91;12&#93;](#cite_note-spec-resources-12)

#### Resource Templates

For dynamic content, servers can expose parameterized resources using URI templates following [RFC 6570](/index.php?title=RFC_6570&action=edit&redlink=1) standards. For example, a server might expose a template like `file://{path}` that allows clients to request any file by specifying the path parameter. Unlike static resources with fixed URIs, templates enable resources whose URIs and content are generated based on parameters.[&#91;12&#93;](#cite_note-spec-resources-12)

### Prompts

Prompts provide reusable, parameterized message templates that MCP server authors can define to guide language model interactions. They allow servers to package interaction patterns, similar to saved queries or macros, that standardize how certain tasks are presented to the AI.[&#91;13&#93;](#cite_note-spec-prompts-13)

Each prompt has a name (unique identifier), an optional description, and an optional list of arguments. Arguments have names, optional descriptions, and a `required` boolean flag. Prompts are user-controlled, meaning the user or host application typically selects which prompts to use, rather than the model selecting them autonomously.[&#91;13&#93;](#cite_note-spec-prompts-13)

Use cases for prompts include code generation templates that accept a programming language as an argument, domain-specific analysis workflows, and standardized output formatting instructions.

### Sampling

Sampling is a capability that allows servers to request LLM completions through the client, enabling sophisticated agentic behaviors while maintaining security and privacy. Unlike the other primitives where clients initiate requests to servers, sampling reverses the flow: the server sends a `sampling/createMessage` request to the client.[&#91;14&#93;](#cite_note-spec-sampling-14)

The sampling request flow operates as follows:

1. The MCP server sends a `sampling/createMessage` request to the MCP client.
2. The client reviews the request and can modify it.
3. The client sends the request to an LLM and receives a completion.
4. The client reviews the completion.
5. The client returns the result to the server.

This enables servers to implement agentic behaviors by allowing LLM calls to occur nested inside other MCP server features. For example, a server can use AI to make decisions based on available information, create structured data outputs, complete multi-step workflows, or analyze and respond to external data. The human-in-the-loop design ensures that users can review and approve both the request before sending it to the LLM and the completion before it is returned to the server.[&#91;14&#93;](#cite_note-spec-sampling-14)

### Elicitation

Introduced in specification version 2025-06-18, elicitation enables servers to request additional structured information from users during interactions. The server sends an elicitation request with a JSON Schema defining the expected response structure, and the client presents this to the user for input. Only primitive types (string, number, boolean) are supported. Servers must not use elicitation to request sensitive information, and clients should clearly present what information is being requested and why.[&#91;15&#93;](#cite_note-spec-elicitation-15)

## Transport Mechanisms

MCP defines standardized transport mechanisms for client-server communication. The protocol has evolved from two original transports to a refined pair, with the legacy HTTP+SSE transport deprecated in favor of Streamable HTTP.[&#91;16&#93;](#cite_note-spec-transports-16)

### Current Transports

| Transport | Use Case | Communication Model | Protocol Version |
| --- | --- | --- | --- |
| **stdio** | Local MCP connections | Standard input/output streams; client spawns server as a child process | All versions |
| **Streamable HTTP** | Remote MCP connections | HTTP POST and GET requests with optional Server-Sent Events streaming | 2025-03-26 onward |

#### stdio

The stdio transport is designed for local MCP connections and enables communication over standard input and standard output. The client spawns the MCP server as a child process, and communication occurs through the process's stdin and stdout streams. This transport is simple, requires no network configuration, and is ideal for single-user, local tool integrations.[&#91;16&#93;](#cite_note-spec-transports-16)

#### Streamable HTTP

Streamable HTTP is the standard transport method for remote MCP connections, introduced in the 2025-03-26 specification. The server operates as an independent process that can handle multiple client connections. It provides a single HTTP endpoint (the MCP endpoint) that supports both POST and GET methods, and the server can optionally use Server-Sent Events (SSE) to stream multiple server messages.[&#91;16&#93;](#cite_note-spec-transports-16)

Key advantages of Streamable HTTP include support for stateless servers (removing the need for always-on, long-lived connections), compatibility with standard HTTP infrastructure (middleware, proxies, and hosting platforms), and the ability to use plain HTTP without requiring SSE.[&#91;17&#93;](#cite_note-fka-sse-deprecated-17)

### Legacy Transport: HTTP+SSE

The original HTTP+SSE transport, introduced in specification version 2024-11-05, used Server-Sent Events for server-to-client streaming and HTTP POST requests for client-to-server communication. This transport was deprecated in the 2025-03-26 specification in favor of Streamable HTTP. However, it continues to be supported for existing implementations, and many servers still use it.[&#91;17&#93;](#cite_note-fka-sse-deprecated-17)

## Specification Versions

The MCP specification has gone through several revisions, each adding significant new capabilities.

### Version History

| Version | Release Date | Key Changes |
| --- | --- | --- |
| **2024-11-05** | November 25, 2024 | Initial release; stdio and HTTP+SSE transports; core primitives (Tools, Resources, Prompts, Sampling); no standardized authorization model |
| **2025-03-26** | March 26, 2025 | Streamable HTTP replaces HTTP+SSE; OAuth 2.1-inspired authorization framework; tool annotations; JSON-RPC batching (later removed) |
| **2025-06-18** | June 18, 2025 | Elicitation capability; structured tool output; comprehensive security best practices documentation; removal of JSON-RPC batching; enhanced OAuth guidance |
| **2025-11-25** | November 25, 2025 | Async Tasks for long-running operations; stateless MCP as default; server identity via .well-known URLs; official community-driven registry; mandatory PKCE for OAuth |

### Specification 2024-11-05 (Initial Release)

The initial specification established the core architecture with the client-server model, JSON-RPC 2.0 messaging, and the four core primitives. It defined two transport mechanisms (stdio and HTTP+SSE) but did not include a standardized authorization model.[&#91;18&#93;](#cite_note-spec-changelog-18)

### Specification 2025-03-26

This version introduced several major changes. The Streamable HTTP transport replaced HTTP+SSE as the primary remote transport. An authorization framework inspired by [OAuth](/index.php?title=OAuth&action=edit&redlink=1) 2.1 was added. Tool annotations were introduced, allowing tools to describe their behavior (read-only, destructive, idempotent, open-world). JSON-RPC batching was added to allow bundling multiple requests in a single call.[&#91;18&#93;](#cite_note-spec-changelog-18)

### Specification 2025-06-18

The June 2025 release introduced the elicitation capability, allowing servers to request structured user input during interactions. Structured tool output enabled tools to return predictable data formats for better integration. Comprehensive security best practices documentation was added, covering token validation, resource isolation, and threat mitigation. JSON-RPC batching, which had been introduced in the previous version, was removed to simplify protocol implementation.[&#91;18&#93;](#cite_note-spec-changelog-18)

### Specification 2025-11-25 (First Anniversary)

Released on MCP's first anniversary, this version introduced Tasks, a new abstraction for tracking asynchronous work performed by MCP servers. Tasks support states including working, input_required, completed, failed, and cancelled. The specification also adopted stateless MCP as the default, removing the mandatory initialization handshake and allowing each request to be self-contained. Server identity was introduced through `.well-known` URLs (MCP Server Cards), enabling servers to advertise their capabilities via public metadata files. An official community-driven registry for discovering MCP servers was also launched. Proof Key for Code Exchange (PKCE) became mandatory for OAuth authorization flows.[&#91;8&#93;](#cite_note-anniversary-spec-8)[&#91;19&#93;](#cite_note-workos-nov-spec-19)

## Security and Authorization

### OAuth 2.1 Framework

Starting with specification version 2025-03-26, MCP incorporates an authorization framework inspired by OAuth 2.1. All authorization server endpoints must be served over [HTTPS](/index.php?title=HTTPS&action=edit&redlink=1), and all redirect URIs must be either localhost or use HTTPS.[&#91;20&#93;](#cite_note-spec-authorization-20)

### Key Security Requirements

| Requirement | Description |
| --- | --- |
| **PKCE** | Mandatory from 2025-11-25; clients must use S256 code challenge method when technically capable; prevents authorization code interception and injection attacks |
| **Redirect URI Validation** | Authorization servers must validate exact redirect URIs against pre-registered values to prevent redirection attacks |
| **State Parameters** | Clients should use and verify state parameters in the authorization code flow |
| **Token Scoping** | Resource indicators allow clients to specify the intended audience of access tokens, preventing token reuse across servers |
| **Client ID Metadata Documents** | Introduced in 2025-11-25 to standardize client identification and registration |

### Security Best Practices

The 2025-06-18 specification introduced comprehensive security best practices documentation covering token validation, resource isolation, and threat mitigation. Servers must not use elicitation to request sensitive information. Clients should present elicitation requests clearly, indicating what information is being requested and why.[&#91;20&#93;](#cite_note-spec-authorization-20)[&#91;21&#93;](#cite_note-auth0-spec-update-21)

## Utility Features

Beyond the core primitives, MCP provides several cross-cutting utility features.

### Roots

Roots define the boundaries of where servers can operate within the filesystem. They allow servers to understand which directories and files they have access to. Clients that support roots can provide a list of root URIs to the server, and servers can request this list and receive notifications when it changes.[&#91;3&#93;](#cite_note-spec-architecture-3)

### Logging

MCP provides a standardized way for servers to send structured log messages to clients. Clients can control logging verbosity by setting minimum log levels. Servers send notifications containing severity levels, optional logger names, and arbitrary JSON-serializable data.[&#91;22&#93;](#cite_note-spec-logging-22)

### Progress Tracking

MCP supports optional progress tracking for long-running operations through notification messages. Either side can send progress notifications to provide updates about operation status, enabling better user experience for operations that take significant time to complete.[&#91;3&#93;](#cite_note-spec-architecture-3)

### Tasks

Introduced in specification version 2025-11-25, Tasks provide an abstraction for tracking work being performed by an MCP server. Any request can be augmented with a task that allows the client to query its status and retrieve its results up to a server-defined duration after the task is created. Tasks support multiple states (working, input_required, completed, failed, cancelled) and are particularly useful for expensive computations, workflow automation, batch processing, and multi-step operations.[&#91;8&#93;](#cite_note-anniversary-spec-8)

## Adoption and Ecosystem

### Client Support

MCP clients are the applications that connect to MCP servers and expose their capabilities to users and AI models. The ecosystem of MCP clients has grown rapidly since the protocol's launch.

| Client | Developer | Type | Notes |
| --- | --- | --- | --- |
| [Claude](/wiki/claude_ai) Desktop | [Anthropic](/wiki/anthropic) | Desktop application | Built-in MCP client; one of the first MCP hosts |
| [Claude Code](/wiki/claude_code) | [Anthropic](/wiki/anthropic) | CLI / IDE extension | Functions as both MCP server and client; supports `claude mcp serve` |
| [ChatGPT](/wiki/chatgpt) Desktop | [OpenAI](/wiki/openai) | Desktop application | MCP support added March 2025 |
| Cursor | Anysphere | AI-powered IDE | One-click MCP server setup; one of the earliest third-party adopters |
| Windsurf | Codeium | AI-powered IDE | MCP support added early 2025 |
| [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1) | [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) | IDE | MCP support for AI assistant features |
| [GitHub Copilot](/wiki/github_copilot) | GitHub / [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) | AI coding assistant | MCP integration in Copilot Studio |
| JetBrains AI Assistant | [JetBrains](/index.php?title=JetBrains&action=edit&redlink=1) | IDE plugin | MCP client support for JetBrains IDEs |
| Gemini | [Google DeepMind](/index.php?title=Google_DeepMind&action=edit&redlink=1) | AI platform | MCP support confirmed April 2025 |
| Zed | Zed Industries | Code editor | MCP integration for AI features |
| Sourcegraph | Sourcegraph | Code intelligence | MCP support for code search and analysis |

### MCP Server Ecosystem

MCP servers provide the actual functionality that AI models can access. The ecosystem has grown to include thousands of servers covering a wide range of use cases.

#### Official Reference Servers

Anthropic and the MCP community maintain official reference servers in the [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) GitHub repository.[&#91;23&#93;](#cite_note-github-servers-23)

| Server | Category | Description |
| --- | --- | --- |
| Filesystem | Storage | Direct access to the local file system with configurable permissions |
| GitHub | Development | Repository management, issues, pull requests, and code search |
| Git | Development | Git operations including status, diff, log, and commit |
| Google Drive | Storage | File listing, searching, and content retrieval from Google Drive |
| Slack | Communication | Channel management, messaging, and search |
| PostgreSQL | Database | Database querying and schema inspection |
| Puppeteer | Automation | Browser automation for web scraping and testing |
| Brave Search | Search | Web search via the Brave Search API |
| Google Maps | Location | Geocoding, directions, and place information |

#### Third-Party Server Categories

The broader ecosystem includes servers spanning many domains:

| Category | Examples | Description |
| --- | --- | --- |
| **Database** | PostgreSQL, Redis, Couchbase, MongoDB | Natural language querying and data management for various database systems |
| **Communication** | Slack, Discord, Email | AI-powered messaging, channel management, and notification handling |
| **Development** | GitHub, GitLab, Jira, Linear | Issue tracking, code review, and project management integration |
| **Cloud** | AWS, Azure, Google Cloud | Cloud resource management and deployment automation |
| **Design** | Figma | Design file inspection and asset extraction |
| **Productivity** | Notion, Google Workspace, Zapier | Document management, workflow automation, and knowledge base access |
| **Monitoring** | Sentry, Datadog, Raygun | Error tracking, performance monitoring, and log analysis |
| **Integration Platforms** | Pipedream, Zapier, Rube | Multi-app connectors (Pipedream supports 2,500+ APIs; Zapier connects to 8,000+ apps) |

Community-curated lists such as [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) on GitHub catalog the growing ecosystem.[&#91;24&#93;](#cite_note-awesome-mcp-24)

### Claude Code as MCP Host and Server

[Claude Code](/wiki/claude_code) has a particularly deep MCP integration, functioning as both an MCP client and an MCP server. As a client, Claude Code can connect to any configured MCP server to access external tools and data. As a server (via `claude mcp serve`), it exposes its own built-in tools (Bash, Read, Write, Edit, LS, GrepTool, GlobTool, Replace) to other MCP clients.[&#91;25&#93;](#cite_note-claude-code-mcp-25)

Claude Code also implements MCP tool search, which dynamically loads tools on-demand instead of preloading all configured tools, preventing tool definitions from consuming excessive context window space. The maximum allowed MCP output can be configured via the `MAX_MCP_OUTPUT_TOKENS` environment variable, with a default limit of 25,000 tokens.[&#91;25&#93;](#cite_note-claude-code-mcp-25)

## Comparison with Function Calling

Function calling (also known as tool use), popularized by OpenAI and adopted by Meta, Google, and others, was the first mainstream approach to connecting LLMs with external tools. MCP and function calling are complementary rather than competing technologies; function calling is a model-level capability, while MCP is an integration protocol.[&#91;26&#93;](#cite_note-mcp-vs-fc-26)

| Aspect | Function Calling | Model Context Protocol |
| --- | --- | --- |
| **Level** | Model capability (the model outputs structured JSON to invoke functions) | Integration protocol for tool hosting and discovery |
| **Scope** | Defined per-request; tool definitions sent with each LLM API call | Defined per-server; tools registered once and available to any compatible client |
| **Portability** | Typically provider-specific (OpenAI, Anthropic, Google each have their own format) | Universal; define tools once, any MCP-compatible model can use them |
| **Architecture** | Inline; tool definitions embedded in LLM requests | Client-server; MCP servers are standalone processes |
| **Reusability** | Tool definitions often scattered across application code | MCP servers are reusable, version-controlled components that can be shared across applications |
| **Discovery** | No built-in discovery mechanism | Servers can advertise capabilities; registries enable discovery |
| **State Management** | Stateless per-request | Stateful sessions with capability negotiation (or stateless in 2025-11-25) |
| **Best For** | Simple applications using a single model provider | Cross-model compatibility, larger projects, production systems with multiple tool integrations |

In practice, function calling is often used inside MCP. For example, the OpenAI Agents SDK uses function calling to invoke tools that are exposed by MCP servers. The two technologies work together, with MCP providing the standardized hosting and discovery layer while function calling provides the model-level invocation mechanism.[&#91;26&#93;](#cite_note-mcp-vs-fc-26)[&#91;27&#93;](#cite_note-zilliz-comparison-27)

## Open Source Specification and SDKs

### Specification Repository

The MCP specification is open source and maintained in the [modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol) GitHub organization. The specification documents are published at [modelcontextprotocol.io](https://modelcontextprotocol.io). Community contributions are managed through a Specification Enhancement Proposal (SEP) process.[&#91;23&#93;](#cite_note-github-servers-23)

### Official SDKs

Official SDKs are maintained in the modelcontextprotocol GitHub organization, covering a wide range of programming languages.

| SDK | Repository | Package | Notes |
| --- | --- | --- | --- |
| TypeScript | modelcontextprotocol/typescript-sdk | `@modelcontextprotocol/sdk` (npm) | Ideal for Node.js and React-based stacks |
| Python | modelcontextprotocol/python-sdk | `mcp` (PyPI) | Includes FastMCP for rapid server development |
| Java/Kotlin | modelcontextprotocol/kotlin-sdk | Maven Central | Maintained in collaboration with JetBrains |
| C# / .NET | modelcontextprotocol/csharp-sdk | NuGet | Supported by Microsoft |
| Go | modelcontextprotocol/go-sdk | Go module | Community-driven |
| Swift | modelcontextprotocol/swift-sdk | Swift Package | For Apple platform development |
| Rust | modelcontextprotocol/rust-sdk | Crates.io | Systems-level MCP implementations |
| Ruby | modelcontextprotocol/ruby-sdk | RubyGems | For Ruby applications |
| PHP | modelcontextprotocol/php-sdk | Packagist | For PHP applications |

### Educational Resources

Microsoft maintains the [mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners) open-source curriculum, which introduces MCP fundamentals through real-world examples in .NET, Java, TypeScript, JavaScript, Rust, and Python.[&#91;28&#93;](#cite_note-ms-mcp-beginners-28)

## Governance and Foundation

### Agentic AI Foundation

In December 2025, Anthropic donated MCP to the newly established Agentic AI Foundation (AAIF), a directed fund under the [Linux Foundation](/index.php?title=Linux_Foundation&action=edit&redlink=1). The foundation was co-founded by Anthropic, Block, and OpenAI, with support from Google, Microsoft, [AWS](/index.php?title=Amazon_Web_Services&action=edit&redlink=1), [Cloudflare](/index.php?title=Cloudflare&action=edit&redlink=1), and Bloomberg.[&#91;5&#93;](#cite_note-aaif-donation-5)[&#91;29&#93;](#cite_note-lf-aaif-press-29)

MCP joined two other founding projects under AAIF: goose (by Block), an open-source AI agent framework, and AGENTS.md (by OpenAI), a standard for describing agent capabilities. The move was characterized as formalizing MCP's vendor-neutrality and long-term independence, placing it under the same neutral stewardship model that supports projects like [Kubernetes](/index.php?title=Kubernetes&action=edit&redlink=1), [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), and [Node.js](/index.php?title=Node.js&action=edit&redlink=1).[&#91;5&#93;](#cite_note-aaif-donation-5)

### Governance Structure

The AAIF Governing Board makes decisions regarding strategic investment, budget allocation, member recruitment, and approval of new projects. Individual projects, including MCP, maintain full autonomy over their technical direction and day-to-day operations. The protocol's existing maintainers continue to steer its development, guided by community input through the SEP process. The Linux Foundation provides neutral infrastructure but does not dictate technical direction.[&#91;29&#93;](#cite_note-lf-aaif-press-29)[&#91;30&#93;](#cite_note-github-blog-lf-30)

## Impact on the AI Agent Ecosystem

### Standardization of Tool Integration

Before MCP, connecting an AI model to external tools required building custom integrations for each combination of model provider and tool. This resulted in an M x N integration problem, where M models and N tools required M times N separate integrations. MCP reduces this to an M + N problem: each model implements the MCP client protocol once, and each tool implements the MCP server protocol once, enabling any model to work with any tool through the shared standard.[&#91;1&#93;](#cite_note-anthropic-announce-1)

### Enabling Agentic Workflows

MCP has become a foundational building block for AI agent systems. By providing a standardized way for agents to discover and invoke tools, access contextual data, and coordinate multi-step workflows, MCP enables more sophisticated agentic behaviors. The protocol's sampling capability, in particular, allows for nested LLM calls within server operations, enabling recursive agent architectures where tools themselves can reason and make decisions.[&#91;14&#93;](#cite_note-spec-sampling-14)

### Enterprise Adoption

Enterprise adoption of MCP has accelerated significantly. Integration platforms like Pipedream (2,500+ APIs), Zapier (8,000+ apps), and Rube (500+ apps) have built MCP server connectors, making it straightforward for organizations to expose their existing tools and services to AI systems. IDE integration has been one of MCP's fastest-growing adoption vectors, with Cursor and Windsurf offering one-click MCP server setup, allowing AI assistants to access project files, run terminal commands, and interact with version control directly through the protocol.[&#91;4&#93;](#cite_note-pento-year-4)

### Relationship to Other Protocols

MCP exists alongside other emerging standards for AI agent interoperability. Google's Agent-to-Agent (A2A) protocol, for example, focuses on communication between agents rather than between agents and tools. While MCP addresses the agent-to-tool connection, A2A addresses agent-to-agent coordination. The two protocols are complementary and can be used together in multi-agent systems.[&#91;27&#93;](#cite_note-zilliz-comparison-27)

## See Also

- [Anthropic](/wiki/anthropic)
- [Claude](/wiki/claude_ai)
- [Claude Code](/wiki/claude_code)
- [Large language model](/wiki/large_language_model)
- [AI agent](/wiki/ai_agent)
- [OpenAI](/wiki/openai)
- [GitHub Copilot](/wiki/github_copilot)
- [Microsoft Copilot](/wiki/microsoft_copilot)
- [ChatGPT](/wiki/chatgpt)

## References

1. ↑ [1.0](#cite_ref-anthropic-announce_1-0) [1.1](#cite_ref-anthropic-announce_1-1) [1.2](#cite_ref-anthropic-announce_1-2) "Introducing the Model Context Protocol." Anthropic (25 Nov 2024). Retrieved 19 Mar 2026 from [https://www.anthropic.com/news/model-context-protocol](https://www.anthropic.com/news/model-context-protocol).

2. [↑](#cite_ref-wikipedia-mcp_2-0) "Model Context Protocol." Wikipedia. Retrieved 19 Mar 2026 from [https://en.wikipedia.org/wiki/Model_Context_Protocol](https://en.wikipedia.org/wiki/Model_Context_Protocol).

3. ↑ [3.0](#cite_ref-spec-architecture_3-0) [3.1](#cite_ref-spec-architecture_3-1) [3.2](#cite_ref-spec-architecture_3-2) [3.3](#cite_ref-spec-architecture_3-3) [3.4](#cite_ref-spec-architecture_3-4) "Architecture." Model Context Protocol Specification. Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-06-18/architecture](https://modelcontextprotocol.io/specification/2025-06-18/architecture).

4. ↑ [4.0](#cite_ref-pento-year_4-0) [4.1](#cite_ref-pento-year_4-1) [4.2](#cite_ref-pento-year_4-2) "A Year of MCP: From Internal Experiment to Industry Standard." Pento (2025). Retrieved 19 Mar 2026 from [https://www.pento.ai/blog/a-year-of-mcp-2025-review](https://www.pento.ai/blog/a-year-of-mcp-2025-review).

5. ↑ [5.0](#cite_ref-aaif-donation_5-0) [5.1](#cite_ref-aaif-donation_5-1) [5.2](#cite_ref-aaif-donation_5-2) [5.3](#cite_ref-aaif-donation_5-3) "Donating the Model Context Protocol and establishing the Agentic AI Foundation." Anthropic (Dec 2025). Retrieved 19 Mar 2026 from [https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation).

6. ↑ [6.0](#cite_ref-dsp-interview_6-0) [6.1](#cite_ref-dsp-interview_6-1) "Anthropic and the Model Context Protocol with David Soria Parra." Software Engineering Daily (13 May 2025). Retrieved 19 Mar 2026 from [https://softwareengineeringdaily.com/2025/05/13/anthropic-and-the-model-context-protocol-with-david-soria-parra/](https://softwareengineeringdaily.com/2025/05/13/anthropic-and-the-model-context-protocol-with-david-soria-parra/).

7. [↑](#cite_ref-latentspace_7-0) "The Creators of Model Context Protocol." Latent Space Podcast. Retrieved 19 Mar 2026 from [https://podcasts.apple.com/ec/podcast/the-creators-of-model-context-protocol/id1674008350?i=1000702137438](https://podcasts.apple.com/ec/podcast/the-creators-of-model-context-protocol/id1674008350?i=1000702137438).

8. ↑ [8.0](#cite_ref-anniversary-spec_8-0) [8.1](#cite_ref-anniversary-spec_8-1) [8.2](#cite_ref-anniversary-spec_8-2) "One Year of MCP: November 2025 Spec Release." Model Context Protocol Blog (25 Nov 2025). Retrieved 19 Mar 2026 from [http://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/](http://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/).

9. [↑](#cite_ref-kubiya-architecture_9-0) "Model Context Protocol (MCP): Architecture, Components & Workflow." Kubiya. Retrieved 19 Mar 2026 from [https://www.kubiya.ai/blog/model-context-protocol-mcp-architecture-components-and-workflow](https://www.kubiya.ai/blog/model-context-protocol-mcp-architecture-components-and-workflow).

10. ↑ [10.0](#cite_ref-spec-lifecycle_10-0) [10.1](#cite_ref-spec-lifecycle_10-1) [10.2](#cite_ref-spec-lifecycle_10-2) "Lifecycle." Model Context Protocol Specification (2025-03-26). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle](https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle).

11. ↑ [11.0](#cite_ref-spec-tools_11-0) [11.1](#cite_ref-spec-tools_11-1) [11.2](#cite_ref-spec-tools_11-2) "Tools." Model Context Protocol Specification. Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/legacy/concepts/tools](https://modelcontextprotocol.io/legacy/concepts/tools).

12. ↑ [12.0](#cite_ref-spec-resources_12-0) [12.1](#cite_ref-spec-resources_12-1) [12.2](#cite_ref-spec-resources_12-2) "Resources." Model Context Protocol Specification (2025-06-18). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-06-18/server/resources](https://modelcontextprotocol.io/specification/2025-06-18/server/resources).

13. ↑ [13.0](#cite_ref-spec-prompts_13-0) [13.1](#cite_ref-spec-prompts_13-1) "Prompts." Model Context Protocol. Retrieved 19 Mar 2026 from [https://modelcontextprotocol.info/docs/concepts/prompts/](https://modelcontextprotocol.info/docs/concepts/prompts/).

14. ↑ [14.0](#cite_ref-spec-sampling_14-0) [14.1](#cite_ref-spec-sampling_14-1) [14.2](#cite_ref-spec-sampling_14-2) "Sampling." Model Context Protocol Specification (2025-06-18). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-06-18/client/sampling](https://modelcontextprotocol.io/specification/2025-06-18/client/sampling).

15. [↑](#cite_ref-spec-elicitation_15-0) "Elicitation." Model Context Protocol Specification (2025-06-18). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation](https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation).

16. ↑ [16.0](#cite_ref-spec-transports_16-0) [16.1](#cite_ref-spec-transports_16-1) [16.2](#cite_ref-spec-transports_16-2) "Transports." Model Context Protocol Specification (2025-03-26). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-03-26/basic/transports](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports).

17. ↑ [17.0](#cite_ref-fka-sse-deprecated_17-0) [17.1](#cite_ref-fka-sse-deprecated_17-1) "Why MCP Deprecated SSE and Went with Streamable HTTP." fka.dev (6 Jun 2025). Retrieved 19 Mar 2026 from [https://blog.fka.dev/blog/2025-06-06-why-mcp-deprecated-sse-and-go-with-streamable-http/](https://blog.fka.dev/blog/2025-06-06-why-mcp-deprecated-sse-and-go-with-streamable-http/).

18. ↑ [18.0](#cite_ref-spec-changelog_18-0) [18.1](#cite_ref-spec-changelog_18-1) [18.2](#cite_ref-spec-changelog_18-2) "Key Changes." Model Context Protocol Specification (2025-03-26). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-03-26/changelog](https://modelcontextprotocol.io/specification/2025-03-26/changelog).

19. [↑](#cite_ref-workos-nov-spec_19-0) "MCP 2025-11-25 is here: async Tasks, better OAuth, extensions, and a smoother agentic future." WorkOS (Nov 2025). Retrieved 19 Mar 2026 from [https://workos.com/blog/mcp-2025-11-25-spec-update](https://workos.com/blog/mcp-2025-11-25-spec-update).

20. ↑ [20.0](#cite_ref-spec-authorization_20-0) [20.1](#cite_ref-spec-authorization_20-1) "Authorization." Model Context Protocol Specification (2025-11-25). Retrieved 19 Mar 2026 from [https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization).

21. [↑](#cite_ref-auth0-spec-update_21-0) "Model Context Protocol (MCP) Spec Updates from June 2025." Auth0 Blog. Retrieved 19 Mar 2026 from [https://auth0.com/blog/mcp-specs-update-all-about-auth/](https://auth0.com/blog/mcp-specs-update-all-about-auth/).

22. [↑](#cite_ref-spec-logging_22-0) "Logging." Model Context Protocol Specification. Retrieved 19 Mar 2026 from [https://modelcontextprotocol.info/specification/draft/server/utilities/logging/](https://modelcontextprotocol.info/specification/draft/server/utilities/logging/).

23. ↑ [23.0](#cite_ref-github-servers_23-0) [23.1](#cite_ref-github-servers_23-1) "Model Context Protocol Servers." GitHub. Retrieved 19 Mar 2026 from [https://github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers).

24. [↑](#cite_ref-awesome-mcp_24-0) "Awesome MCP Servers." GitHub. Retrieved 19 Mar 2026 from [https://github.com/punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers).

25. ↑ [25.0](#cite_ref-claude-code-mcp_25-0) [25.1](#cite_ref-claude-code-mcp_25-1) "Connect Claude Code to tools via MCP." Claude Code Documentation. Retrieved 19 Mar 2026 from [https://code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp).

26. ↑ [26.0](#cite_ref-mcp-vs-fc_26-0) [26.1](#cite_ref-mcp-vs-fc_26-1) "MCP vs. Function Calling: How They Differ and Which to Use." Descope Blog. Retrieved 19 Mar 2026 from [https://www.descope.com/blog/post/mcp-vs-function-calling](https://www.descope.com/blog/post/mcp-vs-function-calling).

27. ↑ [27.0](#cite_ref-zilliz-comparison_27-0) [27.1](#cite_ref-zilliz-comparison_27-1) "Function Calling vs. MCP vs. A2A: Developer's Guide to AI Agent Protocols." Zilliz Blog. Retrieved 19 Mar 2026 from [https://zilliz.com/blog/function-calling-vs-mcp-vs-a2a-developers-guide-to-ai-agent-protocols](https://zilliz.com/blog/function-calling-vs-mcp-vs-a2a-developers-guide-to-ai-agent-protocols).

28. [↑](#cite_ref-ms-mcp-beginners_28-0) "MCP for Beginners." Microsoft / GitHub. Retrieved 19 Mar 2026 from [https://github.com/microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners).

29. ↑ [29.0](#cite_ref-lf-aaif-press_29-0) [29.1](#cite_ref-lf-aaif-press_29-1) "Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF)." Linux Foundation Press Release. Retrieved 19 Mar 2026 from [https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation).

30. [↑](#cite_ref-github-blog-lf_30-0) "MCP joins the Linux Foundation: What this means for developers building the next era of AI tools and agents." GitHub Blog. Retrieved 19 Mar 2026 from [https://github.blog/open-source/maintainers/mcp-joins-the-linux-foundation-what-this-means-for-developers-building-the-next-era-of-ai-tools-and-agents/](https://github.blog/open-source/maintainers/mcp-joins-the-linux-foundation-what-this-means-for-developers-building-the-next-era-of-ai-tools-and-agents/).
