---
title: "Cursor (code editor)"
slug: "cursor"
categories:
  - "Software_development_tools"
  - "AI_pair_programming"
  - "Integrated_development_environments"
  - "Artificial_intelligence_applications"
---

**Cursor** is an [AI](/wiki/artificial_intelligence)-first code editor developed by **Anysphere Inc.**, a San Francisco-based startup founded in 2022. Built as a fork of [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1), Cursor integrates [large language models](/wiki/large_language_model) directly into the development environment, offering features such as intelligent code completion, conversational AI assistance, multi-file editing, and autonomous agent capabilities.[&#91;1&#93;](#cite_note-cursor-features-1)[&#91;2&#93;](#cite_note-prismic-review-2) Unlike extensions that layer AI on top of an existing editor, Cursor was designed from the ground up as an AI-native IDE, rebuilding the editing experience around AI-driven workflows while retaining full compatibility with VS Code extensions, themes, and keybindings.[&#91;3&#93;](#cite_note-vscode-fork-3)

By early 2026, Cursor had surpassed $2 billion in annualized recurring revenue, attracted over 2 million users (including more than 1 million paying subscribers), and was used by developers at more than half of Fortune 500 companies.[&#91;4&#93;](#cite_note-techbuzz-2b-4)[&#91;5&#93;](#cite_note-panto-stats-5) The company's valuation reached $29.3 billion following a $2.3 billion Series D round in November 2025.[&#91;6&#93;](#cite_note-series-d-6)

## Company

### Anysphere Inc.

Cursor is built by Anysphere Inc., headquartered at 2261 Market Street in San Francisco, California. The company was incorporated in 2022 by four [MIT](/index.php?title=Massachusetts_Institute_of_Technology&action=edit&redlink=1) students who shared a conviction that AI should not merely assist coding but serve as the foundation of how developers work.[&#91;7&#93;](#cite_note-founding-story-7)[&#91;8&#93;](#cite_note-tfn-founding-8)

### Founders

| Name | Role | Background |
| --- | --- | --- |
| Michael Truell | CEO | Worked on LLM-driven recommendation systems and statistical research at MIT |
| Sualeh Asif | Chief Product Officer | Studied computer science at MIT; leads product vision and user experience |
| Arvid Lunnemark | Former Chief Technology Officer | Studied computer science at MIT; left Anysphere in October 2025 to found Integrous Research, a safety-focused AI research lab |
| Aman Sanger | Chief Operating Officer | Studied computer science at MIT; manages operations, growth strategy, and developer community |

All four co-founders left MIT before completing their degrees to pursue Anysphere full-time. Following the company's $2.3 billion Series D at a $29.3 billion valuation in November 2025, all four co-founders became billionaires, each under 30 years of age.[&#91;9&#93;](#cite_note-entrepreneur-billionaires-9)

### Funding History

| Date | Round | Amount | Valuation | Lead Investors |
| --- | --- | --- | --- | --- |
| April 2022 | Pre-Seed | $400K | N/A | Angel investors |
| October 2023 | Seed | $8 million | N/A | [OpenAI](/wiki/openai) Startup Fund |
| August 2024 | Series A | $60 million | $400 million | Andreessen Horowitz |
| December 2024 | Series B | $100 million | $2.6 billion | Thrive Capital |
| June 2025 | Series C | $900 million | $9.9 billion | Thrive Capital, Andreessen Horowitz, Accel, DST Global |
| November 2025 | Series D | $2.3 billion | $29.3 billion | Accel, Coatue Management |

Notable investors across these rounds include [OpenAI](/wiki/openai) Startup Fund, Thrive Capital, Andreessen Horowitz, Accel, Coatue Management, Benchmark, Index Ventures, DST Global, [Google](/index.php?title=Google&action=edit&redlink=1), [Nvidia](/index.php?title=Nvidia&action=edit&redlink=1), Stripe co-founder Patrick Collison, former [GitHub](/index.php?title=GitHub&action=edit&redlink=1) CEO Nat Friedman, and Dropbox co-founder Arash Ferdowsi.[&#91;10&#93;](#cite_note-techcrunch-seriesb-10)[&#91;11&#93;](#cite_note-techcrunch-seriesc-11)[&#91;6&#93;](#cite_note-series-d-6) As of December 2025, Anysphere's total funding has reached approximately $3.5 billion.[&#91;8&#93;](#cite_note-tfn-founding-8)

## History

### Early Development (2022-2023)

Anysphere began development of Cursor in April 2022 after raising a $400K pre-seed round. The founders identified a gap in existing AI coding tools, which they viewed as limited add-ons rather than truly integrated experiences. In early 2023, Anysphere participated in [OpenAI](/wiki/openai)'s accelerator program, and in March 2023, the company publicly launched Cursor as an IDE built on VS Code with AI capabilities woven into the core editing experience.[&#91;12&#93;](#cite_note-openai-fund-12)[&#91;7&#93;](#cite_note-founding-story-7)

In October 2023, Anysphere announced an $8 million seed round led by the OpenAI Startup Fund, with angel investments from former GitHub CEO Nat Friedman and Dropbox co-founder Arash Ferdowsi, validating the product's early traction among developers.[&#91;12&#93;](#cite_note-openai-fund-12)

### Rapid Growth (2024-2025)

Cursor's growth accelerated dramatically through 2024. By January 2025, the editor had crossed $100 million in annual recurring revenue (ARR), reportedly achieving this milestone without significant marketing spend. The company's Series A ($60 million at a $400 million valuation) and Series B ($100 million at $2.6 billion) came just months apart, reflecting rapidly escalating investor interest.[&#91;10&#93;](#cite_note-techcrunch-seriesb-10)[&#91;13&#93;](#cite_note-saastr-1b-13)

In June 2025, the company raised $900 million in its Series C at a $9.9 billion valuation and disclosed that it had surpassed $500 million in ARR, with more than half of Fortune 500 companies having developers using the tool.[&#91;11&#93;](#cite_note-techcrunch-seriesc-11) By November 2025, ARR exceeded $1 billion, making it one of the fastest software products to reach that threshold.[&#91;13&#93;](#cite_note-saastr-1b-13)

### Major Releases

**Version 0.45 (January 2025):** Introduced repository-level rules for AI behavior configuration.[&#91;14&#93;](#cite_note-changelog-14)

**Version 0.50 (2025):** Introduced Background Agents for parallel task execution, a unified pricing model, and a redesigned inline edit experience.[&#91;14&#93;](#cite_note-changelog-14)

**Version 1.0 (June 2025):** A milestone release that introduced BugBot for automated code review, made Background Agents available to all users, and added Jupyter Notebook support.[&#91;15&#93;](#cite_note-devclass-1-0-15)

**Version 2.0 (October 29, 2025):** A major overhaul featuring the proprietary Composer coding model, an agent-centered interface redesign, support for running up to eight agents in parallel using git worktree isolation, browser integration, voice control, and automatic context gathering.[&#91;16&#93;](#cite_note-cursor-2-0-16)

### 2026 and Beyond

By February 2026, Bloomberg reported that Cursor's annualized revenue run-rate had exceeded $2 billion, roughly doubling in the span of three months.[&#91;4&#93;](#cite_note-techbuzz-2b-4) Enterprise customers accounted for approximately 60% of revenue after a strategic shift toward organizational sales.[&#91;5&#93;](#cite_note-panto-stats-5)

## Technical Architecture

### VS Code Fork

Cursor is built as a [fork](/index.php?title=Fork_(software_development)&action=edit&redlink=1) of Microsoft's [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1). The decision to fork rather than build an extension was driven by the limitations of VS Code's extension API, which was not designed for the deep, system-level AI integration that Cursor's team envisioned. By forking the editor, Anysphere gained the ability to modify the core UI, intercept editing operations at a low level, and build features like diff-aware predictions and multi-file agent edits that would be impossible within the constraints of an extension.[&#91;3&#93;](#cite_note-vscode-fork-3)[&#91;17&#93;](#cite_note-lowcode-fork-17)

Because Cursor shares the same extension API and architecture as VS Code, most VS Code extensions install and function identically. Developers can import their existing settings, themes, keybindings, and extensions when switching from VS Code to Cursor, resulting in a minimal learning curve.[&#91;3&#93;](#cite_note-vscode-fork-3)

### Codebase Indexing

Cursor employs a [Retrieval-Augmented Generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG) approach to understand entire codebases. When a user enables codebase indexing, the following process occurs:[&#91;18&#93;](#cite_note-tds-indexing-18)[&#91;19&#93;](#cite_note-bytebytego-19)

1. **Chunking:** Files are split locally into semantic units (functions, classes, or blocks of approximately 500 tokens) using AST-based chunking that preserves code structure.

2. **Embedding:** Each chunk is uploaded to Cursor's servers to compute vector embeddings. The plaintext code ceases to exist on the server after the embedding is computed.

3. **Storage:** Embeddings and metadata (obfuscated file paths and line ranges) are stored in Turbopuffer, a serverless high-performance vector database optimized for fast semantic search.

4. **Retrieval:** When a developer makes a query, the query is embedded and sent to Turbopuffer for nearest-neighbor search. The results return only metadata (file paths and line ranges), and the actual code is fetched from the local filesystem.

5. **Generation:** The retrieved code chunks are provided as context alongside the query to the selected [LLM](/wiki/large_language_model), which generates a context-aware response.

This architecture allows Cursor to provide repository-wide understanding with up to 272,000 tokens of context through embedding-based retrieval, while ensuring that raw source code is never persistently stored in the cloud.[&#91;18&#93;](#cite_note-tds-indexing-18) Cursor's internal benchmarking shows that its semantic search delivers a 12.5% improvement in code retrieval accuracy over previous implementations, with gains ranging from 6.5% to 23.5% depending on the AI model used.[&#91;20&#93;](#cite_note-semantic-search-20)

### Infrastructure Scale

Cursor's backend handles over 1 million transactions per second at peak load and serves billions of AI code completions daily. Many features, including real-time autocomplete, are powered by in-house models running on cloud servers. The system sends only encrypted code snippets to minimize latency and protect data security.[&#91;19&#93;](#cite_note-bytebytego-19)

## Core Features

### Tab (Autocomplete)

Cursor Tab is a specialized autocomplete system powered by a custom, fine-tuned model that predicts the developer's next editing action. Unlike standard autocomplete that only suggests text at the cursor position, Tab can predict multi-line edits, cursor movements, and even deletions based on the surrounding context. As the developer types, suggestions appear inline; pressing the Tab key accepts the suggestion.[&#91;1&#93;](#cite_note-cursor-features-1)[&#91;2&#93;](#cite_note-prismic-review-2)

The system is particularly effective for repetitive patterns. For example, if a developer adds quotation marks to one string in an array, Tab can predict and offer to apply the same transformation to all remaining strings.[&#91;21&#93;](#cite_note-emgoto-getting-started-21)

### Agent (Chat and Composer)

In earlier versions of Cursor, the Chat interface (for read-only queries about code) and the Composer (for making code edits) were separate features. Starting with Cursor 2.0, these were unified into a single interface called **Agent**, which combines conversational capabilities with the ability to directly edit files, create new files, run terminal commands, install packages, and perform multi-step tasks.[&#91;22&#93;](#cite_note-docs-overview-22)[&#91;16&#93;](#cite_note-cursor-2-0-16)

Agent mode (the default mode) can autonomously explore a codebase using semantic search, identify relevant files, propose coordinated changes across multiple files, and execute those changes with developer approval. Developers describe what they want in natural language, and the agent creates a plan and implements it.[&#91;22&#93;](#cite_note-docs-overview-22)

Key Agent capabilities include:

| Capability | Description |
| --- | --- |
| Code editing | Multi-file edits with diff previews before applying changes |
| File creation | Create new files and directory structures |
| Terminal commands | Run shell commands, install packages, execute build scripts |
| Codebase search | Semantic and keyword search across the entire project |
| Web browsing | Built-in browser that can pass selected elements and DOM context back to the agent |
| Context gathering | Automatic identification of relevant files, documentation, and dependencies |

### Composer Model

Introduced with Cursor 2.0, Composer is Anysphere's proprietary coding model specifically designed for building software inside the Cursor IDE. It is a mixture-of-experts model trained through [reinforcement learning](/wiki/reinforcement_learning), where the model was placed inside real codebases to learn to use actual development tools such as semantic search, file editors, and terminal commands.[&#91;16&#93;](#cite_note-cursor-2-0-16)[&#91;23&#93;](#cite_note-codecademy-2-0-23)

As of early 2026, two versions are available: Composer 1 ($1.25 per million input tokens) and Composer 1.5 ($3.50 per million input tokens).[&#91;24&#93;](#cite_note-models-pricing-24)

### Background Agents

Background Agents allow developers to offload tasks to AI agents that run in isolated environments, either using [git](/index.php?title=Git&action=edit&redlink=1) worktrees or remote machines. Up to eight agents can run simultaneously from a single prompt, each operating on its own copy of the codebase to prevent conflicts. Background agents are useful for tasks like fixing code style issues, conducting investigations, and writing first drafts of medium-sized pull requests.[&#91;14&#93;](#cite_note-changelog-14)[&#91;15&#93;](#cite_note-devclass-1-0-15)

### BugBot

BugBot is Cursor's automated pull request reviewer. It connects to [GitHub](/index.php?title=GitHub&action=edit&redlink=1), monitors repositories, and automatically reviews pull requests when they are created or updated. BugBot identifies logic bugs, suggests fixes, and leaves comments with links to open the relevant code directly in Cursor. The BugBot Autofix feature uses cloud agents to automatically test and fix issues in PRs, accelerating code review cycles.[&#91;15&#93;](#cite_note-devclass-1-0-15)[&#91;25&#93;](#cite_note-bugbot-review-25)

BugBot performance metrics have improved significantly over time: the average number of issues identified per run nearly doubled in the six months following its release, while the resolution rate increased from 52% to 76%.[&#91;25&#93;](#cite_note-bugbot-review-25)

### Inline Editing

Cursor supports inline code editing triggered by the keyboard shortcut Cmd+K (macOS) or Ctrl+K (Windows/Linux). Developers can select a block of code and describe the desired change in natural language, and the AI generates a diff-style edit preview that can be accepted or rejected.[&#91;2&#93;](#cite_note-prismic-review-2)

### MCP Support

Cursor supports the [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) (MCP), enabling integration with external tools and data sources. Two types of MCP servers are supported: Local Stdio (runs on the developer's machine and streams responses via standard input/output) and Streamable HTTP (operates as an independent process handling multiple client connections). MCP servers can provide additional context, tools, and capabilities to the Cursor agent, such as integration with databases, APIs, project management tools, and deployment services.[&#91;26&#93;](#cite_note-mcp-docs-26)

### Memories

Memories allow Cursor to retain facts and preferences from conversations and apply them in future sessions. This creates a persistent knowledge base for each project, enabling the AI to remember coding conventions, architectural decisions, and other project-specific context without requiring the developer to re-explain them.[&#91;2&#93;](#cite_note-prismic-review-2)

## AI Model Integration

Cursor provides access to a broad range of frontier AI models from multiple providers. Developers can switch between models on a per-conversation basis, choosing the best model for each task.[&#91;24&#93;](#cite_note-models-pricing-24)

### Supported Models

| Provider | Models | Notes |
| --- | --- | --- |
| [Anthropic](/wiki/anthropic) | [Claude](/wiki/claude) 4 Sonnet, Claude 4 Sonnet 1M, Claude 4.5 Haiku, Claude 4.5 Opus, Claude 4.5 Sonnet, Claude 4.6 Opus, Claude 4.6 Opus (Fast), Claude 4.6 Sonnet | Opus and Sonnet variants require Max Mode on request-based plans |
| [OpenAI](/wiki/openai) | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) variants (standard, Fast, Mini), GPT-5-Codex, GPT-5.1 Codex, GPT-5.2, GPT-5.3 Codex, GPT-5.4 | Pricing ranges from $0.25 to $2.50 per million input tokens |
| [Google](/index.php?title=Google&action=edit&redlink=1) | [Gemini](/index.php?title=Gemini_(language_model)&action=edit&redlink=1) 2.5 Flash, Gemini 3 Flash, Gemini 3 Pro, Gemini 3 Pro Image Preview, Gemini 3.1 Pro | Gemini 2.5 Flash is the fastest and cheapest option ($0.30/M input) |
| Cursor | Composer 1, Composer 1.5 | Proprietary models trained for agentic coding |
| [xAI](/index.php?title=XAI&action=edit&redlink=1) | Grok Code | Lowest cost option at $0.20 per million input tokens |
| Moonshot | Kimi K2.5 | $0.60 per million input tokens; hidden by default |

### Custom Models

Cursor's Custom Models feature allows developers to bring any [OpenAI](/wiki/openai)-compatible endpoint into the IDE. This means developers who are already paying for API access through providers like Anthropic, OpenAI, or Google can connect those endpoints directly, or use local models and alternative providers like [DeepSeek](/index.php?title=DeepSeek&action=edit&redlink=1).[&#91;27&#93;](#cite_note-custom-models-27)

### Usage Pools

Cursor organizes model usage into two pools:[&#91;24&#93;](#cite_note-models-pricing-24)

- **Auto + Composer Pool:** Lower-cost agentic coding using Cursor's own Composer model, with generous usage limits on paid plans.
- **API Pool:** Individual model pricing at provider rates, with monthly included credits ranging from $20 to $400 depending on the subscription tier.

## Cursor Rules

[Cursor Rules](/wiki/cursor_rules) allow developers to define custom instructions that guide the AI's behavior within a project. These rules can specify coding conventions, framework preferences, architectural guidelines, SDK versions, and other project-specific context that the AI should follow when generating or editing code.[&#91;28&#93;](#cite_note-rules-docs-28)

### Rule Types

| Type | Location | Scope |
| --- | --- | --- |
| Project Rules | `.cursor/rules/` directory | Automatically included when matching files are referenced; support glob patterns for targeted application |
| Global Rules | Cursor settings | Applied across all projects for a given user |
| Legacy `.cursorrules` | Project root | Still supported for backward compatibility but deprecated in favor of Project Rules |

### Creating and Managing Rules

Rules can be created through several methods:[&#91;28&#93;](#cite_note-rules-docs-28)

- **Command Palette:** Use `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux) and select "New Cursor Rule"
- **In-Conversation Generation:** Use the `/Generate Cursor Rules` slash command to create rules based on decisions made during a conversation
- **Manual File Creation:** Create `.mdc` files in the `.cursor/rules/` directory

### Best Practices

Effective cursor rules are explicit about SDK versions and framework versions, include real-world examples demonstrating complete task implementations, and are kept up to date as project dependencies evolve. Outdated rules can lead the AI to generate deprecated code patterns or miss new features.[&#91;29&#93;](#cite_note-trigger-rules-29) A community-maintained collection of example rules is available through the [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) GitHub repository.[&#91;30&#93;](#cite_note-awesome-cursorrules-30)

## Pricing

Cursor uses a credit-based pricing system, introduced in June 2025, replacing the earlier request-based model. Each paid plan includes a monthly credit pool (denominated in dollars) that depletes based on which AI models the developer uses. Annual billing provides a 20% discount.[&#91;31&#93;](#cite_note-pricing-page-31)

### Individual Plans

| Plan | Price | Key Features |
| --- | --- | --- |
| Hobby (Free) | $0/month | Limited Agent requests, limited Tab completions; no credit card required |
| Pro | $20/month | Extended Agent limits, access to frontier models, MCPs, skills, hooks, cloud agents; $20/month API credit pool |
| Pro+ | $60/month | Everything in Pro with 3x usage on all OpenAI, Claude, and Gemini models; $60/month API credit pool |
| Ultra | $200/month | Everything in Pro with 20x usage on all OpenAI, Claude, and Gemini models; priority access to new features; $200/month API credit pool |

### Business Plans

| Plan | Price | Key Features |
| --- | --- | --- |
| Teams | $40/user/month | All Pro features plus shared chats, commands, and rules; centralized team billing; usage analytics and reporting; org-wide privacy mode controls; role-based access control; SAML/OIDC SSO |
| Enterprise | Custom pricing | All Teams features plus pooled usage, invoice/PO billing, SCIM seat management, AI code tracking API and audit logs, granular admin and model controls, priority support and account management |

### BugBot Pricing

| Plan | Price | Details |
| --- | --- | --- |
| Pro | $40/user/month | Reviews up to 200 PRs per month; 14-day trial included |
| Teams | $40/user/month | Reviews all PRs; includes analytics dashboard |
| Enterprise | Custom pricing | 30-day org-wide trial with advanced analytics |

## Privacy and Security

### Privacy Mode

Cursor offers a Privacy Mode that can be enabled in settings or enforced by a team administrator. When Privacy Mode is active, no code data is stored by Cursor or any third-party model provider, and code is never used for training purposes. For users with Privacy Mode enabled, the codebase index stores only vector embeddings and obfuscated file paths, never raw source code.[&#91;32&#93;](#cite_note-privacy-docs-32)[&#91;33&#93;](#cite_note-security-page-33)

### Data Handling

| Data Type | Handling |
| --- | --- |
| Code snippets (with Privacy Mode) | Not stored; exist only for the duration of the request |
| Codebase embeddings | Stored in Turbopuffer as vectors with obfuscated file paths; no plaintext code |
| Git history | Commit SHAs and parent information indexed; commit messages and file diffs are not indexed |
| Account data | Deleted within 30 days of account deletion |

### File Exclusion

Developers can create a `.cursorignore` file in the project root to block specific files and directories from being sent to Cursor's servers or included in AI requests. This is useful for excluding sensitive files such as credentials, environment variables, or proprietary code.[&#91;32&#93;](#cite_note-privacy-docs-32)

### Compliance

Cursor holds SOC 2 Type II certification, verified through independent audit. The company conducts annual penetration testing by third-party security firms and implements AES-256 encryption at rest and TLS 1.2+ encryption in transit. Cursor maintains zero data retention agreements with its AI model providers, including [OpenAI](/wiki/openai) and [Anthropic](/wiki/anthropic). The platform is compliant with [GDPR](/index.php?title=GDPR&action=edit&redlink=1) and [CCPA](/index.php?title=CCPA&action=edit&redlink=1) requirements and offers SAML-based SSO for enterprise deployments.[&#91;33&#93;](#cite_note-security-page-33)[&#91;34&#93;](#cite_note-enterprise-security-34)

## Growth and Adoption

### Revenue Milestones

| Date | ARR Milestone | Notes |
| --- | --- | --- |
| January 2025 | $100 million | Achieved within 20 months of launch, reportedly without marketing spend |
| June 2025 | $500 million | Disclosed at Series C announcement |
| November 2025 | $1 billion | One of the fastest SaaS products to reach this milestone |
| February 2026 | $2 billion | Doubled in approximately three months |

### User Metrics

As of early 2026, Cursor has approximately 2 million users, with over 1 million paying subscribers. This yields roughly $500 in average revenue per user annually. Enterprise customers account for approximately 60% of revenue.[&#91;5&#93;](#cite_note-panto-stats-5)[&#91;35&#93;](#cite_note-devgraphiq-stats-35)

### Enterprise Adoption

More than half of Fortune 500 companies had developers using Cursor as of June 2025.[&#91;11&#93;](#cite_note-techcrunch-seriesc-11) The company has increasingly focused on enterprise sales, offering team management features, centralized billing, SSO, and compliance controls to support organizational deployment.[&#91;34&#93;](#cite_note-enterprise-security-34)

## Competition

Cursor competes in a rapidly evolving market for AI-assisted development tools. The competitive landscape includes IDE-integrated assistants, standalone AI editors, and terminal-based coding agents.

### Competitive Landscape

| Tool | Developer | Type | Pricing (Individual) | Key Differentiator |
| --- | --- | --- | --- | --- |
| **Cursor** | Anysphere | VS Code fork (IDE) | Free / $20-$200/month | Deep AI integration, agent mode, codebase understanding, Composer model |
| [GitHub Copilot](/wiki/github_copilot) | [GitHub](/index.php?title=GitHub&action=edit&redlink=1) / [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) | VS Code extension + IDE features | $10-$39/month | Largest market share (~42%), tight GitHub integration, enterprise adoption |
| Windsurf | Codeium / Cognition | VS Code fork (IDE) | Free / $15+/month | Strong free tier, acquired by Cognition (makers of Devin) in 2026 |
| [Claude Code](/wiki/claude_code) | [Anthropic](/wiki/anthropic) | Terminal-based agent | Usage-based / subscription | Best reasoning model ([Claude](/wiki/claude)), handles 40+ file refactors, terminal-native |
| OpenAI Codex | [OpenAI](/wiki/openai) | Cloud-based agent | Usage-based | Parallel tasking, cloud execution environment |
| Google Antigravity | [Google](/index.php?title=Google&action=edit&redlink=1) | IDE | Varies | Google ecosystem integration |
| Kiro | [Amazon](/index.php?title=Amazon&action=edit&redlink=1) | IDE | Varies | AWS ecosystem integration |

### Market Position

As of early 2026, [GitHub Copilot](/wiki/github_copilot) holds approximately 42% market share in AI coding tools, while Cursor holds approximately 18%. However, Cursor's revenue per user is substantially higher than Copilot's, reflecting its position as a premium product favored by professional developers and power users.[&#91;36&#93;](#cite_note-digidai-comparison-36)

### Differentiation

Cursor differentiates from competitors primarily through its depth of AI integration. While [GitHub Copilot](/wiki/github_copilot) functions as an add-on to VS Code, Cursor rebuilt the editor around AI, enabling features like diff-aware predictions, multi-agent parallel execution, and deep codebase understanding that are difficult to replicate through extensions alone. Compared to [Claude Code](/wiki/claude_code), which operates in the terminal and excels at large-scale autonomous refactoring, Cursor provides a more visual, IDE-based experience with an "autonomy slider" that lets developers control how much independence the AI has, ranging from basic tab completion to fully autonomous agent mode.[&#91;37&#93;](#cite_note-builder-comparison-37)[&#91;36&#93;](#cite_note-digidai-comparison-36)

### OpenAI Acquisition Talks

In 2025, reports from TechCrunch and Bloomberg indicated that [OpenAI](/wiki/openai) held acquisition discussions with both Cursor and Windsurf. Cursor reportedly walked away from the negotiations. OpenAI subsequently reached an agreement in principle to acquire Windsurf for $3 billion, though that deal ultimately collapsed. Google later hired Windsurf's CEO and key R&D staff in a $2.4 billion licensing arrangement, and Cognition (makers of [Devin](/index.php?title=Devin_(AI)&action=edit&redlink=1)) signed a $250 million deal to acquire the remaining business and intellectual property.[&#91;38&#93;](#cite_note-openai-windsurf-38)[&#91;39&#93;](#cite_note-vinventures-openai-39)

## Version History

| Version | Release Period | Notable Features |
| --- | --- | --- |
| Early versions (0.x) | 2023-2024 | Initial VS Code fork with Chat and Tab features, basic AI code completion |
| 0.45 | January 2025 | Repository rules for AI behavior configuration |
| 0.50 | 2025 | Background Agents, unified pricing model, redesigned inline edit |
| 1.0 | June 2025 | BugBot, Background Agents GA, Jupyter Notebook support |
| 1.4 | 2025 | Improved Agent tools, steerability, usage visibility |
| 2.0 | October 29, 2025 | Composer model, agent-centered interface, multi-agent parallel execution (up to 8), browser integration, voice control |
| 2.5 | February 2026 | Plugins, long-running agents |

## See Also

- [Cursor Rules](/wiki/cursor_rules)
- [Claude Code](/wiki/claude_code)
- [GitHub Copilot](/wiki/github_copilot)
- [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1)
- [AI pair programming](/index.php?title=AI_pair_programming&action=edit&redlink=1)
- [Large language model](/wiki/large_language_model)
- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)
- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)
- [Anthropic](/wiki/anthropic)
- [OpenAI](/wiki/openai)

## References

1. [&#8593;](#cite_ref-cursor-features-1) "Features." Cursor. Retrieved 19 Mar 2026 from [https://cursor.com/features](https://cursor.com/features).

2. &#8593; [2.0](#cite_ref-prismic-review-2-0) [2.1](#cite_ref-prismic-review-2-1) [2.2](#cite_ref-prismic-review-2-2) "Cursor AI Review (2026): Features, Workflow, & Why I Use It." Prismic. Retrieved 19 Mar 2026 from [https://prismic.io/blog/cursor-ai](https://prismic.io/blog/cursor-ai).

3. &#8593; [3.0](#cite_ref-vscode-fork-3-0) [3.1](#cite_ref-vscode-fork-3-1) [3.2](#cite_ref-vscode-fork-3-2) Kay, A. "Cursor: The fork of VS Code with AI built in." Medium. Retrieved 19 Mar 2026 from [https://medium.com/@andrew_kay/cursor-the-fork-of-vs-code-with-ai-built-in-754a9bda5b64](https://medium.com/@andrew_kay/cursor-the-fork-of-vs-code-with-ai-built-in-754a9bda5b64).

4. &#8593; [4.0](#cite_ref-techbuzz-2b-4-0) [4.1](#cite_ref-techbuzz-2b-4-1) "Cursor Hits $2B ARR, Doubles Revenue in Just 3 Months." TechBuzz AI. Retrieved 19 Mar 2026 from [https://www.techbuzz.ai/articles/cursor-hits-2b-arr-doubles-revenue-in-just-3-months](https://www.techbuzz.ai/articles/cursor-hits-2b-arr-doubles-revenue-in-just-3-months).

5. &#8593; [5.0](#cite_ref-panto-stats-5-0) [5.1](#cite_ref-panto-stats-5-1) [5.2](#cite_ref-panto-stats-5-2) "Cursor AI Statistics 2026: Users, Revenue and Adoption." Panto AI. Retrieved 19 Mar 2026 from [https://www.getpanto.ai/blog/cursor-ai-statistics](https://www.getpanto.ai/blog/cursor-ai-statistics).

6. &#8593; [6.0](#cite_ref-series-d-6-0) [6.1](#cite_ref-series-d-6-1) "Anysphere's Cursor soars to $29B valuation with $2.3B round led by Accel, Coatue." TechFundingNews. Retrieved 19 Mar 2026 from [https://techfundingnews.com/anysphere-soars-to-29-3b-valuation-with-2-3b-funding-redefining-the-future-of-coding/](https://techfundingnews.com/anysphere-soars-to-29-3b-valuation-with-2-3b-funding-redefining-the-future-of-coding/).

7. &#8593; [7.0](#cite_ref-founding-story-7-0) [7.1](#cite_ref-founding-story-7-1) "Founder Story: Michael Truell of Cursor AI." Frederick AI. Retrieved 19 Mar 2026 from [https://www.frederick.ai/blog/michael-truell-cursor-ai](https://www.frederick.ai/blog/michael-truell-cursor-ai).

8. &#8593; [8.0](#cite_ref-tfn-founding-8-0) [8.1](#cite_ref-tfn-founding-8-1) "Meet Cursor: How Anysphere's MIT-born AI startup hit a $9.9B valuation in 3 years." TechFundingNews. Retrieved 19 Mar 2026 from [https://techfundingnews.com/meet-cursor-how-anyspheres-mit-born-ai-startup-hit-a-9-9b-valuation-in-3-years/](https://techfundingnews.com/meet-cursor-how-anyspheres-mit-born-ai-startup-hit-a-9-9b-valuation-in-3-years/).

9. [&#8593;](#cite_ref-entrepreneur-billionaires-9) "This AI Startup Just Made Its 4 Co-Founders Billionaires." Entrepreneur. Retrieved 19 Mar 2026 from [https://www.entrepreneur.com/business-news/ai-coding-startup-anysphere-mints-4-new-billionaires/499651](https://www.entrepreneur.com/business-news/ai-coding-startup-anysphere-mints-4-new-billionaires/499651).

10. &#8593; [10.0](#cite_ref-techcrunch-seriesb-10-0) [10.1](#cite_ref-techcrunch-seriesb-10-1) "In just 4 months, AI coding assistant Cursor raised another $100M at a $2.6B valuation." TechCrunch (19 Dec 2024). Retrieved 19 Mar 2026 from [https://techcrunch.com/2024/12/19/in-just-4-months-ai-coding-assistant-cursor-raised-another-100m-at-a-2-5b-valuation-led-by-thrive-sources-say/](https://techcrunch.com/2024/12/19/in-just-4-months-ai-coding-assistant-cursor-raised-another-100m-at-a-2-5b-valuation-led-by-thrive-sources-say/).

11. &#8593; [11.0](#cite_ref-techcrunch-seriesc-11-0) [11.1](#cite_ref-techcrunch-seriesc-11-1) [11.2](#cite_ref-techcrunch-seriesc-11-2) "Cursor's Anysphere nabs $9.9B valuation, soars past $500M ARR." TechCrunch (5 Jun 2025). Retrieved 19 Mar 2026 from [https://techcrunch.com/2025/06/05/cursors-anysphere-nabs-9-9b-valuation-soars-past-500m-arr/](https://techcrunch.com/2025/06/05/cursors-anysphere-nabs-9-9b-valuation-soars-past-500m-arr/).

12. &#8593; [12.0](#cite_ref-openai-fund-12-0) [12.1](#cite_ref-openai-fund-12-1) "We Raised $8M from OpenAI." Anysphere Blog. Retrieved 19 Mar 2026 from [https://anysphere.inc/blog/openai-fund](https://anysphere.inc/blog/openai-fund).

13. &#8593; [13.0](#cite_ref-saastr-1b-13-0) [13.1](#cite_ref-saastr-1b-13-1) "Cursor Hit $1B ARR in 24 Months: The Fastest Scaling SaaS Ever?" SaaStr. Retrieved 19 Mar 2026 from [https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/](https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/).

14. &#8593; [14.0](#cite_ref-changelog-14-0) [14.1](#cite_ref-changelog-14-1) [14.2](#cite_ref-changelog-14-2) "Changelog." Cursor. Retrieved 19 Mar 2026 from [https://cursor.com/changelog](https://cursor.com/changelog).

15. &#8593; [15.0](#cite_ref-devclass-1-0-15-0) [15.1](#cite_ref-devclass-1-0-15-1) [15.2](#cite_ref-devclass-1-0-15-2) "Cursor AI editor hits 1.0 milestone, including BugBot and high-risk background agents." DevClass (6 Jun 2025). Retrieved 19 Mar 2026 from [https://devclass.com/2025/06/06/cursor-ai-editor-hits-1-0-milestone-including-bugbot-and-high-risk-background-agents/](https://devclass.com/2025/06/06/cursor-ai-editor-hits-1-0-milestone-including-bugbot-and-high-risk-background-agents/).

16. &#8593; [16.0](#cite_ref-cursor-2-0-16-0) [16.1](#cite_ref-cursor-2-0-16-1) [16.2](#cite_ref-cursor-2-0-16-2) Koli, S. "Cursor 2.0 Released: The Dawn of Agentic Coding." Medium. Retrieved 19 Mar 2026 from [https://medium.com/@sameerkoli/cursor-2-0-released-the-dawn-of-agentic-coding-251a10641ed4](https://medium.com/@sameerkoli/cursor-2-0-released-the-dawn-of-agentic-coding-251a10641ed4).

17. [&#8593;](#cite_ref-lowcode-fork-17) "Is Cursor AI a VS Code Fork? Everything Explained." LowCode Agency. Retrieved 19 Mar 2026 from [https://www.lowcode.agency/blog/is-cursor-ai-vs-code-fork](https://www.lowcode.agency/blog/is-cursor-ai-vs-code-fork).

18. &#8593; [18.0](#cite_ref-tds-indexing-18-0) [18.1](#cite_ref-tds-indexing-18-1) "How Cursor Actually Indexes Your Codebase." Towards Data Science. Retrieved 19 Mar 2026 from [https://towardsdatascience.com/how-cursor-actually-indexes-your-codebase/](https://towardsdatascience.com/how-cursor-actually-indexes-your-codebase/).

19. &#8593; [19.0](#cite_ref-bytebytego-19-0) [19.1](#cite_ref-bytebytego-19-1) "How Cursor Serves Billions of AI Code Completions Every Day." ByteByteGo. Retrieved 19 Mar 2026 from [https://blog.bytebytego.com/p/how-cursor-serves-billions-of-ai](https://blog.bytebytego.com/p/how-cursor-serves-billions-of-ai).

20. [&#8593;](#cite_ref-semantic-search-20) "Cursor AI Semantic Search: 12.5% Better Code Agent Accuracy." Digital Applied. Retrieved 19 Mar 2026 from [https://www.digitalapplied.com/blog/cursor-semantic-search-coding-ai-guide](https://www.digitalapplied.com/blog/cursor-semantic-search-coding-ai-guide).

21. [&#8593;](#cite_ref-emgoto-getting-started-21) "Getting started with Cursor AI." emgoto. Retrieved 19 Mar 2026 from [https://www.emgoto.com/cursor/](https://www.emgoto.com/cursor/).

22. &#8593; [22.0](#cite_ref-docs-overview-22-0) [22.1](#cite_ref-docs-overview-22-1) "Overview." Cursor Docs. Retrieved 19 Mar 2026 from [https://docs.cursor.com/chat/overview](https://docs.cursor.com/chat/overview).

23. [&#8593;](#cite_ref-codecademy-2-0-23) "Cursor 2.0: New AI Model Explained." Codecademy. Retrieved 19 Mar 2026 from [https://www.codecademy.com/article/cursor-2-0-new-ai-model-explained](https://www.codecademy.com/article/cursor-2-0-new-ai-model-explained).

24. &#8593; [24.0](#cite_ref-models-pricing-24-0) [24.1](#cite_ref-models-pricing-24-1) [24.2](#cite_ref-models-pricing-24-2) "Models & Pricing." Cursor Docs. Retrieved 19 Mar 2026 from [https://cursor.com/docs/models](https://cursor.com/docs/models).

25. &#8593; [25.0](#cite_ref-bugbot-review-25-0) [25.1](#cite_ref-bugbot-review-25-1) "Cursor AI Review 2026: $29.3B Code Editor With Background Agents & BugBot." AI Tool Analysis. Retrieved 19 Mar 2026 from [https://aitoolanalysis.com/cursor-ai-review/](https://aitoolanalysis.com/cursor-ai-review/).

26. [&#8593;](#cite_ref-mcp-docs-26) "MCP." Cursor Docs. Retrieved 19 Mar 2026 from [https://cursor.com/docs/cli/mcp](https://cursor.com/docs/cli/mcp).

27. [&#8593;](#cite_ref-custom-models-27) "Cursor Custom AI Models: Connect Claude, Gemini, DeepSeek." Markaicode. Retrieved 19 Mar 2026 from [https://markaicode.com/cursor-custom-ai-models-claude-gemini-deepseek/](https://markaicode.com/cursor-custom-ai-models-claude-gemini-deepseek/).

28. &#8593; [28.0](#cite_ref-rules-docs-28-0) [28.1](#cite_ref-rules-docs-28-1) "Rules." Cursor Docs. Retrieved 19 Mar 2026 from [https://docs.cursor.com/context/rules](https://docs.cursor.com/context/rules).

29. [&#8593;](#cite_ref-trigger-rules-29) "How to write great Cursor Rules." Trigger.dev. Retrieved 19 Mar 2026 from [https://trigger.dev/blog/cursor-rules](https://trigger.dev/blog/cursor-rules).

30. [&#8593;](#cite_ref-awesome-cursorrules-30) "awesome-cursorrules." GitHub. Retrieved 19 Mar 2026 from [https://github.com/PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules).

31. [&#8593;](#cite_ref-pricing-page-31) "Pricing." Cursor. Retrieved 19 Mar 2026 from [https://cursor.com/pricing](https://cursor.com/pricing).

32. &#8593; [32.0](#cite_ref-privacy-docs-32-0) [32.1](#cite_ref-privacy-docs-32-1) "Privacy & Security." Cursor Docs. Retrieved 19 Mar 2026 from [https://docs.cursor.com/account/privacy](https://docs.cursor.com/account/privacy).

33. &#8593; [33.0](#cite_ref-security-page-33-0) [33.1](#cite_ref-security-page-33-1) "Security." Cursor. Retrieved 19 Mar 2026 from [https://cursor.com/security](https://cursor.com/security).

34. &#8593; [34.0](#cite_ref-enterprise-security-34-0) [34.1](#cite_ref-enterprise-security-34-1) "Enterprise." Cursor. Retrieved 19 Mar 2026 from [https://cursor.com/enterprise](https://cursor.com/enterprise).

35. [&#8593;](#cite_ref-devgraphiq-stats-35) "Cursor Statistics 2025: The Complete Data Analysis Report." DevGraphiq. Retrieved 19 Mar 2026 from [https://devgraphiq.com/cursor-statistics/](https://devgraphiq.com/cursor-statistics/).

36. &#8593; [36.0](#cite_ref-digidai-comparison-36-0) [36.1](#cite_ref-digidai-comparison-36-1) "Cursor vs GitHub Copilot: The $36 Billion War for the Future of How Software Gets Written." DigidAI (8 Feb 2026). Retrieved 19 Mar 2026 from [https://digidai.github.io/2026/02/08/cursor-vs-github-copilot-ai-coding-tools-deep-comparison/](https://digidai.github.io/2026/02/08/cursor-vs-github-copilot-ai-coding-tools-deep-comparison/).

37. [&#8593;](#cite_ref-builder-comparison-37) "Cursor vs Windsurf vs GitHub Copilot." Builder.io. Retrieved 19 Mar 2026 from [https://www.builder.io/blog/cursor-vs-windsurf-vs-github-copilot](https://www.builder.io/blog/cursor-vs-windsurf-vs-github-copilot).

38. [&#8593;](#cite_ref-openai-windsurf-38) "OpenAI to acquire AI coding tool Windsurf for $3B." Computerworld. Retrieved 19 Mar 2026 from [https://www.computerworld.com/article/3978426/openai-to-acquire-ai-coding-tool-windsurf-for-3b.html](https://www.computerworld.com/article/3978426/openai-to-acquire-ai-coding-tool-windsurf-for-3b.html).

39. [&#8593;](#cite_ref-vinventures-openai-39) "OpenAI's Big Move in AI Coding: Cursor, Windsurf, and What It Means for Founders." Vin Ventures. Retrieved 19 Mar 2026 from [https://www.vinventures.net/post/openai-s-big-move-in-ai-coding-cursor-windsurf-and-what-it-means-for-founders](https://www.vinventures.net/post/openai-s-big-move-in-ai-coding-cursor-windsurf-and-what-it-means-for-founders).
