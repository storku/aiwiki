---
title: "Claude Code"
slug: "claude_code"
categories:
  - "Pages_with_reference_errors"
  - "Anthropic"
  - "Artificial_intelligence_applications"
  - "Command-line_software"
  - "Software_development_tools"
  - "2025_software"
  - "Claude"
  - "AI_pair_programming"
  - "Terminal_emulators"
  - "Cross-platform_software"
  - "Proprietary_software"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

[*](/wiki/file_claude_code_logo1_png)

See also: [Claude](/wiki/claude)*
**Claude Code** is an [AI](/wiki/artificial_intelligence)-powered [command-line](/index.php?title=Command-line_interface&action=edit&redlink=1) tool for [agentic coding](/index.php?title=Software_engineering&action=edit&redlink=1) developed by [Anthropic](/wiki/anthropic). First released as a beta [research preview](/index.php?title=Research_preview&action=edit&redlink=1) alongside Claude 3.7 Sonnet on February 24, 2025, and made generally available on May 22, 2025, Claude Code enables developers to delegate coding tasks to [Claude](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1) directly from their [terminal](/index.php?title=Terminal_emulator&action=edit&redlink=1).[&#91;1&#93;](#cite_note-sonnet37-1)[&#91;2&#93;](#cite_note-claude4-2) 

On September 29, 2025, Anthropic released Claude Code version 2.0 with significant enhancements including checkpoints for safe rollbacks, a native [VS Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1) extension, terminal v2.0 UX improvements, and the renamed Claude Agent SDK (formerly Claude Code SDK).[&#91;3&#93;](#cite_note-autonomy-3)[&#91;4&#93;](#cite_note-sonnet45-4)

## Overview

Claude Code functions as an AI [pair programmer](/index.php?title=Pair_programming&action=edit&redlink=1) that understands entire [codebases](/index.php?title=Codebase&action=edit&redlink=1) and assists developers through [natural language](/index.php?title=Natural_language_processing&action=edit&redlink=1) commands. The tool executes routine tasks, explains complex code, handles [Git](/index.php?title=Git&action=edit&redlink=1) workflows, and performs multi-file edits without requiring additional servers, remote code indexing, or complex setup.[&#91;5&#93;](#cite_note-overview-5) It operates on the [Unix philosophy](/index.php?title=Unix_philosophy&action=edit&redlink=1), making it composable and scriptable within existing developer workflows.[&#91;6&#93;](#cite_note-cli-ref-6)

The tool utilizes [Claude](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1) models, with [Claude Sonnet 4.5](/wiki/claude_sonnet_4_5) (model ID: **claude-sonnet-4-5-20250929**) as the default model as of September 29, 2025. Users with Max subscriptions also have access to Claude Opus 4.1 (**claude-opus-4-1-20250805**) for more complex tasks.[&#91;4&#93;](#cite_note-sonnet45-4) Claude Code achieved state-of-the-art performance on the [SWE-bench](/wiki/swe-bench) Verified benchmark with a 77.2% score for Claude Sonnet 4.5, surpassing previous models and competitors.[&#91;4&#93;](#cite_note-sonnet45-4)[&#91;7&#93;](#cite_note-benchmarks2025-7)

As of September 2025, Claude Code generates [run rate](/index.php?title=Run_rate&action=edit&redlink=1) revenue of over $500 million and serves more than 300,000 business accounts, with over 5 million downloads on [npm](/index.php?title=Npm&action=edit&redlink=1).[&#91;8&#93;](#cite_note-pymnts-8)[&#91;9&#93;](#cite_note-npm-9)

## Popular Commands

- **[Claude --dangerously-skip-permissions](/wiki/claude_--dangerously-skip-permissions)** - Run Claude Code without permission prompts (use with caution)

- **claude -p "query"** - Execute a programmatic query and exit

- **claude update** - Update to latest version

- **claude mcp** - Configure Model Context Protocol servers

- **/rewind** - Restore to previous checkpoint (v2.0+)

## Popular Combinations

- **[Claude Code Playwright](/wiki/claude_code_playwright)** - for testing

## Features

### Core Capabilities

Claude Code provides comprehensive development assistance through several key features:

| Feature | Description | Example Tasks |
| --- | --- | --- |
| Build Features from Descriptions | Describe desired functionality in plain English; Claude creates a plan, writes code, and verifies it works | Refactors, API migrations, new feature implementation |
| Debug and Fix Issues | Describe bugs or paste error messages; Claude analyzes the codebase, identifies problems, and implements fixes | "Why is auth failing on refresh?" |
| File Management | Edit files and fix bugs across entire codebases with automatic context awareness | Multi-file refactoring |
| Code Analysis | Answer questions about code architecture and logic using agentic search | "Map out the payment module" |
| Testing & Quality | Execute and fix tests, [linting](/index.php?title=Lint_(software)&action=edit&redlink=1), and other quality checks | "Run tests and fix failures in CI" |
| [Version Control](/index.php?title=Version_control&action=edit&redlink=1) | Search git history, resolve [merge conflicts](/index.php?title=Merge_conflict&action=edit&redlink=1), create commits and [pull requests](/index.php?title=Pull_request&action=edit&redlink=1) | "Open a PR implementing ticket #124" |
| Codebase Understanding | Agentic search to understand project structure without manual context selection | Automatic project exploration |
| Multi-file Editing | Make coordinated changes across multiple files simultaneously | Large-scale refactoring |
| Command Execution | Run [shell commands](/index.php?title=Shell_script&action=edit&redlink=1) and command line tools | "Build and start the dev server" |
| Checkpoints | Automatically save code state before changes with instant rollback capability (v2.0+) | Safe experimentation |

### Advanced Features

The tool includes several advanced capabilities that distinguish it from traditional coding assistants:

- **Deep Codebase Awareness**: Automatically explores and understands project structure through agentic search using tools like [grep](/index.php?title=Grep&action=edit&redlink=1), find, and [glob](/index.php?title=Glob&action=edit&redlink=1) commands[&#91;5&#93;](#cite_note-overview-5)

- **[MCP](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) Integration**: Functions as both MCP server and client for extended tool access, supporting integrations with enterprise systems like [Jira](/index.php?title=Jira&action=edit&redlink=1), [Google Drive](/index.php?title=Google_Drive&action=edit&redlink=1), [Figma](/index.php?title=Figma&action=edit&redlink=1), and [Slack](/index.php?title=Slack&action=edit&redlink=1)[&#91;5&#93;](#cite_note-overview-5)

- **IDE Integration**: Native extensions for [VS Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1) (generally available as of September 29, 2025) and beta extensions for [JetBrains](/index.php?title=JetBrains&action=edit&redlink=1) IDEs with inline edit display and real-time changes[&#91;3&#93;](#cite_note-autonomy-3)[&#91;10&#93;](#cite_note-ide-10)

- **GitHub Integration**: Can read issues, write code, run tests, submit pull requests, and automate workflows via [GitHub Actions](/index.php?title=GitHub_Actions&action=edit&redlink=1)[&#91;5&#93;](#cite_note-overview-5)[&#91;11&#93;](#cite_note-gh-actions-docs-11)

- **Background Tasks**: Supports GitHub Actions integration for automated workflows and ensures uninterrupted running of development servers[&#91;2&#93;](#cite_note-claude4-2)

- **Checkpoints and Rewind**: Automatically saves code states before each change, allowing rewinds via `/rewind` or double-Esc; applies to Claude's edits (not user shell commands)[&#91;3&#93;](#cite_note-autonomy-3)

- **Terminal 2.0 UX**: Enhanced interface with Ctrl+R for command history search, improved status displays, and more transparent development flows[&#91;3&#93;](#cite_note-autonomy-3)

- **Sub Agents**: Supports parallel development, such as simultaneous front-end and back-end work; delegate specialized tasks to parallel agents for complex workflows[&#91;12&#93;](#cite_note-taiwanpost-12)

- **Hooks**: Automatically trigger actions at specific points in development workflow, such as running tests after code changes or checks before submissions[&#91;12&#93;](#cite_note-taiwanpost-12)

- **Autonomous Operation**: Can maintain focus for 30+ hours on complex, multi-step tasks with Claude Sonnet 4.5, including building full production-grade applications with over 11,000 lines of code[&#91;4&#93;](#cite_note-sonnet45-4)

- **Context Management**: Automatic context compaction and summarization to prevent context window exhaustion[&#91;13&#93;](#cite_note-agent-sdk-13)

## Technical Specifications

### System Requirements

| Component | Requirement |
| --- | --- |
| Operating System | [macOS](/index.php?title=MacOS&action=edit&redlink=1) 10.15+, [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1) 20.04+/[Debian](/index.php?title=Debian&action=edit&redlink=1) 10+, [Windows](/index.php?title=Microsoft_Windows&action=edit&redlink=1) 10+ (via [WSL](/index.php?title=Windows_Subsystem_for_Linux&action=edit&redlink=1) 1/2 or [Git for Windows](/index.php?title=Git_for_Windows&action=edit&redlink=1)) |
| Hardware | Minimum 4GB [RAM](/index.php?title=Random-access_memory&action=edit&redlink=1) (8GB recommended for large codebases) |
| Software | [Node.js](/index.php?title=Node.js&action=edit&redlink=1) 18+ and [npm](/index.php?title=Npm&action=edit&redlink=1) |
| Network | Internet connection required (authentication & model inference) |
| Supported Shells | [Bash](/index.php?title=Bash&action=edit&redlink=1), [Zsh](/index.php?title=Z_shell&action=edit&redlink=1), [Fish](/index.php?title=Fish_(Unix_shell)&action=edit&redlink=1) |
| Dependencies | [Git](/index.php?title=Git&action=edit&redlink=1), [ripgrep](/index.php?title=Ripgrep&action=edit&redlink=1) (recommended) |
| Availability | Only in Anthropic's [supported countries](https://www.anthropic.com/supported-countries) |

The tool is available only in countries and regions supported by Anthropic.[&#91;14&#93;](#cite_note-setup-14)

## Installation

Claude Code can be installed through multiple methods:

### NPM Installation (Global)

# Prerequisite: Node.js 18+
npm install -g @anthropic-ai/claude-code

# Start in your project directory
cd your-awesome-project
claude

The current stable version is 1.0.128 as of September 2025.[&#91;9&#93;](#cite_note-npm-9)

### Native Binary Installation (Beta)

# For macOS, Linux, WSL - Stable version
curl -fsSL https://claude.ai/install.sh | bash

# Latest version
curl -fsSL https://claude.ai/install.sh | bash -s latest

# Specific version (example: 1.0.128)
curl -fsSL https://claude.ai/install.sh | bash -s 1.0.128

For Windows:

- PowerShell: irm https://claude.ai/install.ps1 | iex

- CMD: ```
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd

```

Post-installation, run `claude doctor` to verify. For Alpine Linux or musl-based systems, install additional dependencies like libgcc, libstdc++, and ripgrep.[&#91;14&#93;](#cite_note-setup-14)

### Local Installation

After global installation, use `claude migrate-installer` to switch to local mode to avoid permission issues with auto-updates.[&#91;14&#93;](#cite_note-setup-14)

### Authentication

Authenticate via Claude Console (default for billing), Claude App (for Pro/Max plans), or enterprise platforms like [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) and [Google Cloud Vertex AI](/index.php?title=Google_Cloud_Vertex_AI&action=edit&redlink=1). Credentials are stored securely.[&#91;14&#93;](#cite_note-setup-14)[&#91;15&#93;](#cite_note-pricing-15)

## Usage

### Command Syntax

Claude Code supports various command-line options for different use cases:

| Command | Description | Example |
| --- | --- | --- |
| **claude** | Start interactive [REPL](/index.php?title=Read%E2%80%93eval%E2%80%93print_loop&action=edit&redlink=1) | **claude** |
| **claude "query"** | Start REPL with initial prompt | **claude "explain this project"** |
| **claude -p "query"** | Query via SDK, then exit | **claude -p "explain this function"** |
| claude -p "query"**** | Process piped content | claude -p "explain"**** |
| **claude -c** | Continue most recent conversation | **claude -c** |
| **claude -c -p "query"** | Continue via SDK | **claude -c -p "Check for type errors"** |
| **claude -r "<session-id>" "query"** | Resume session by ID | **claude -r "abc123" "Finish this PR"** |
| **claude --model** | Select AI model (sonnet/opus) | **claude --model opus** |
| **claude --resume** | Resume from recent sessions | **claude --resume** |
| **claude --continue** | Continue last session | **claude --continue** |
| **claude update** | Update to latest version | **claude update** |
| **claude mcp** | Configure MCP servers | See MCP docs |

### CLI Flags

Additional flags enhance functionality:

| Flag | Description | Example |
| --- | --- | --- |
| **--add-dir** | Add working directories | **claude --add-dir ../apps ../lib** |
| **--allowedTools** | Allow tools without prompt | **claude --allowedTools "Bash(git log:*)" "Read"** |
| **--disallowedTools** | Disallow tools | **claude --disallowedTools "Edit"** |
| **--print**, **-p** | Print response without interactive mode | **claude -p "query"** |
| **--append-system-prompt** | Append to system prompt (with --print) | **claude --append-system-prompt "Custom instruction"** |
| **--output-format** | Output format (text, json, stream-json) | **claude -p --output-format json** |
| **--input-format** | Input format (text, stream-json) | **claude -p --input-format stream-json** |
| **--verbose** | Enable verbose logging | **claude --verbose** |
| **--max-turns** | Limit agentic turns | **claude -p --max-turns 3** |
| **--permission-mode** | Set permission mode | **claude --permission-mode plan** |
| **--dangerously-skip-permissions** | Skip permissions (use with caution) | **claude --dangerously-skip-permissions** |

### Interactive Commands

Within the interactive REPL, users can access various slash commands:

| Command | Description |
| --- | --- |
| **/clear** | Reset context window |
| **/bug** | Report issues directly to Anthropic |
| **/config** | Access configuration settings |
| **/model** | Switch between available models |
| **/status** | Check usage limits and billing |
| **/vim** | Enable [Vim](/index.php?title=Vim_(text_editor)&action=edit&redlink=1) keybindings |
| **/terminal-setup** | Configure terminal shortcuts |
| **/rewind** | Restore to previous checkpoint (v2.0+) |
| **/agents** | Create custom subagents |
| **/init** | Generate CLAUDE.md documentation file |
| **/compact** | Summarize conversation to save context |
| **/export** | Export conversation for sharing |
| **/statusline** | Customize status line display |
| **/install-github-app** | Set up GitHub integration |
| **/login** | Switch authentication |
| **/logout** | Log out |

### Unix Philosophy Integration

Claude Code follows [Unix philosophy](/index.php?title=Unix_philosophy&action=edit&redlink=1) principles, allowing integration with existing command-line tools:[&#91;6&#93;](#cite_note-cli-ref-6)

# Process piped content
tail -f app.log | claude -p "alert me if you see repeated 5xx and suggest fixes"

# Batch annotate files
for file in *.js; do
  claude -p "Add JSDoc comments to this file:" < "$file" > "${file}.documented"
done

# Automated workflows
for f in src/**/*.ts; do
  claude -p "Add TSDoc to this file:" < "$f" > "${f%.ts}.annotated.ts"
done

## Claude Agent SDK

On September 29, 2025, Anthropic renamed the Claude Code SDK to the Claude Agent SDK, reflecting its broader capabilities beyond coding.[&#91;13&#93;](#cite_note-agent-sdk-13) The SDK provides developers with the same infrastructure that powers Claude Code, including:

### SDK Components

| Component | Description |
| --- | --- |
| Context Management | Automatic compaction and context management |
| Rich Tool Ecosystem | File operations, code execution, web search, and MCP extensibility |
| Advanced Permissions | Fine-grained control over agent capabilities |
| Production Essentials | Built-in error handling, session management, and monitoring |
| Optimized Integration | Automatic prompt caching and performance optimizations |

### Example Implementation

import anyio
from claude_code_sdk import query

async def main():
    async for message in query(prompt="What is 2 + 2?"):
        print(message)

anyio.run(main)

The SDK is available for [Python](/index.php?title=Python_(programming_language)&action=edit&redlink=1) and [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1), enabling developers to build various types of agents including [SRE](/index.php?title=Site_reliability_engineering&action=edit&redlink=1) agents, code review agents, legal assistants, and finance advisors.[&#91;13&#93;](#cite_note-agent-sdk-13)

## Pricing and Licensing

Claude Code is available through multiple subscription tiers and deployment options:[&#91;15&#93;](#cite_note-pricing-15)

| Plan | Price (USD) | Features | Best For |
| --- | --- | --- | --- |
| Pro | $20/month**($17/mo annual) | 10-40 prompts every 5 hours
Sonnet 4.5 access only
40-80 hours of Sonnet 4.5 weekly | Light work on small repositories (<1,000 lines) |
| Max 5x Pro | $100/month | 50-200 prompts every 5 hours
Sonnet 4.5 and Opus 4.1 access
140-280 hours of Sonnet 4.5 weekly
15-35 hours of Opus 4.1 weekly | Regular use with medium codebases |
| Max 20x Pro | $200/month | 200-800 prompts every 5 hours
Sonnet 4.5 and Opus 4.1 access
240-480 hours of Sonnet 4.5 weekly
24-40 hours of Opus 4.1 weekly | Power users with large codebases |
| API | Pay-as-you-go | Standard API pricing
$3/$15 per million tokens (Sonnet 4.5)
No per-seat fees | Enterprise deployments and custom integrations |
| Team | Custom | Centralized billing
Admin controls | Small to medium teams |
| Enterprise | Custom | [SSO](/index.php?title=Single_sign-on&action=edit&redlink=1) and [SCIM](/index.php?title=SCIM&action=edit&redlink=1)
Priority support | Large organizations |
| Education | Custom | University-wide access
Discounted rates | Academic institutions |

Enterprise customers can also access Claude Code through [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) and [Google Cloud Vertex AI](/index.php?title=Google_Cloud_Platform&action=edit&redlink=1).[&#91;5&#93;](#cite_note-overview-5)

### Usage Management

Claude Code implements automatic model switching to prevent users from exhausting their limits too quickly:

- Max 5x users: Automatically switches from Opus 4.1 to Sonnet 4.5 at 20% usage

- Max 20x users: Automatically switches from Opus 4.1 to Sonnet 4.5 at 50% usage

Users can override this behavior using the `/model` command.[&#91;15&#93;](#cite_note-pricing-15)

## Performance

Claude Code has demonstrated strong performance on coding benchmarks:

| Benchmark | Model | Score | Notes |
| --- | --- | --- | --- |
| SWE-bench Verified | Claude Sonnet 4.5 | 77.2% | State-of-the-art as of September 2025; average of 10 trials, 82.0% with high-compute setup[&#91;4&#93;](#cite_note-sonnet45-4) |
| SWE-bench Verified | Claude Opus 4 | 72.5% | State-of-the-art as of May 2025[&#91;2&#93;](#cite_note-claude4-2) |
| SWE-bench Verified | Claude Sonnet 4 | 72.7% | As of May 2025[&#91;2&#93;](#cite_note-claude4-2) |
| [OSWorld](/index.php?title=OSWorld&action=edit&redlink=1) | Claude Sonnet 4.5 | 61.4% | Real-world computer task benchmark[&#91;4&#93;](#cite_note-sonnet45-4)[&#91;8&#93;](#cite_note-pymnts-8) |
| Terminal-bench | Claude Opus 4 | 43.2% | Terminal automation benchmark[&#91;2&#93;](#cite_note-claude4-2) |
| Sustained Performance | Claude Sonnet 4.5 | 30+ hours | Autonomous coding, building 11K-line apps[&#91;4&#93;](#cite_note-sonnet45-4) |
| Sustained Performance | Claude Opus 4 | 7 hours | Autonomous refactor validated by [Rakuten](/index.php?title=Rakuten&action=edit&redlink=1)[&#91;2&#93;](#cite_note-claude4-2) |
| Internal Code Editing | Claude Sonnet 4.5 | 0% error rate | Reduced from 9% on Sonnet 4[&#91;4&#93;](#cite_note-sonnet45-4) |

Industry partners have reported significant improvements in development workflows:

- [Cursor](/index.php?title=Cursor_(company)&action=edit&redlink=1)**: Called Claude Opus 4 "state-of-the-art for coding"; Sonnet 4.5 further advances complex changes[&#91;2&#93;](#cite_note-claude4-2)[&#91;4&#93;](#cite_note-sonnet45-4)

- **[Replit](/index.php?title=Replit&action=edit&redlink=1)**: Reported "dramatic advancements for complex changes across multiple files"[&#91;2&#93;](#cite_note-claude4-2)

- **[GitHub](/index.php?title=GitHub&action=edit&redlink=1)**: Introduced Claude Sonnet 4.5 as the model powering GitHub Copilot coding agent[&#91;16&#93;](#cite_note-github-copilot-16)

- **[Sourcegraph](/index.php?title=Sourcegraph&action=edit&redlink=1)**: Described it as "substantial leap in software development"[&#91;2&#93;](#cite_note-claude4-2)

- **Augment Code**: Higher success rates in complex tasks for Sonnet 4.5[&#91;4&#93;](#cite_note-sonnet45-4)

- **iGent**: Excellence in autonomous app development[&#91;4&#93;](#cite_note-sonnet45-4)

- **Manus**: Improved instruction following and outputs[&#91;4&#93;](#cite_note-sonnet45-4)

- **Block**: Boosts code quality in agents[&#91;4&#93;](#cite_note-sonnet45-4)

- **Cognition**: Handles complex challenges better[&#91;4&#93;](#cite_note-sonnet45-4)

## Version History

| Date | Version/Release | Description |
| --- | --- | --- |
| March 2023 | Initial Claude | First Claude model released[&#91;2&#93;](#cite_note-claude4-2) |
| February 24, 2025 | Claude 3.7 Sonnet | Released with Claude Code beta research preview[&#91;1&#93;](#cite_note-sonnet37-1) |
| April 18, 2025 | Best Practices | Published Claude Code best practices guide[&#91;17&#93;](#cite_note-best-practices-17) |
| May 22, 2025 | Claude 4 GA | Claude Opus 4 and Sonnet 4 released; Claude Code announced as Generally Available[&#91;2&#93;](#cite_note-claude4-2) |
| May 23, 2025 | Cloud Integration | Extended availability to AWS Bedrock and Google Vertex AI[&#91;5&#93;](#cite_note-overview-5) |
| June 2025 | IDE Extensions | VS Code and JetBrains beta extensions released[&#91;2&#93;](#cite_note-claude4-2) |
| June 26, 2025 | Desktop Extensions | One-click MCP server installation for browsers[&#91;18&#93;](#cite_note-deskext-18) |
| June 30, 2025 | Hooks Support | Claude Code hooks support added[&#91;19&#93;](#cite_note-release-notes-19) |
| July 4, 2025 | Subagents | Custom subagents feature released[&#91;20&#93;](#cite_note-changelog-20) |
| August 2025 | Rate Limits | New weekly rate limits introduced for Pro and Max plans[&#91;21&#93;](#cite_note-techcrunch-21) |
| September 29, 2025 | Claude Code 2.0 | Checkpoints, VS Code extension (GA), terminal v2.0, Claude Agent SDK released[&#91;3&#93;](#cite_note-autonomy-3) |
| September 29, 2025 | [Claude Sonnet 4.5](/wiki/claude_sonnet_4_5) | New default model with 30+ hour autonomous operation capability[&#91;4&#93;](#cite_note-sonnet45-4) |

## Integration Capabilities

### IDE Integration

Claude Code integrates with major [IDEs](/index.php?title=Integrated_development_environment&action=edit&redlink=1) through dedicated extensions:

- **[Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1)**: Native extension (generally available as of September 2025) with inline edit display, dedicated sidebar panel, and real-time changes[&#91;3&#93;](#cite_note-autonomy-3)[&#91;22&#93;](#cite_note-vscodeext-22)

- **[JetBrains](/index.php?title=JetBrains&action=edit&redlink=1)**: Beta extension with inline edit display, integrated via AI chat and JetBrains AI subscription[&#91;23&#93;](#cite_note-jetbrains-23)

Installation is available through running Claude Code in the IDE terminal or via extension marketplaces.[&#91;3&#93;](#cite_note-autonomy-3)

### Development Platform Integration

| Platform | Integration Type | Capabilities |
| --- | --- | --- |
| [GitHub](/index.php?title=GitHub&action=edit&redlink=1)/[GitLab](/index.php?title=GitLab&action=edit&redlink=1) | Full workflow | Issues, PRs, commits, code review, @claude mentions |
| [GitHub Actions](/index.php?title=GitHub_Actions&action=edit&redlink=1) | Background tasks | Automated CI/CD workflows, official Claude Code Action[&#91;24&#93;](#cite_note-gh-actions-market-24) |
| [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) | API Provider | Enterprise deployment |
| [Google Vertex AI](/index.php?title=Google_Cloud_Platform&action=edit&redlink=1) | API Provider | Enterprise deployment |
| [GitHub Copilot](/wiki/github_copilot) | Model Integration | Claude Sonnet 4.5 available in Copilot[&#91;16&#93;](#cite_note-github-copilot-16) |

### Model Context Protocol (MCP)

Claude Code supports the [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) (MCP) for connecting to external tools and services. It can function as both an MCP server and client, enabling:

- Database connections

- API integrations (including [Google Drive](/index.php?title=Google_Drive&action=edit&redlink=1), [Jira](/index.php?title=Jira&action=edit&redlink=1), [Figma](/index.php?title=Figma&action=edit&redlink=1), [Slack](/index.php?title=Slack&action=edit&redlink=1))

- Custom tool development

- External service connectivity[&#91;5&#93;](#cite_note-overview-5)

## Best Practices

### Context Management

Claude Code uses a special **CLAUDE.md** file for persistent context and project documentation. This file can contain:[&#91;17&#93;](#cite_note-best-practices-17)

- Project-specific instructions and conventions

- Repository etiquette and coding standards

- Developer environment setup requirements

- Custom commands and workflows

- Project architecture documentation

The file is automatically loaded when Claude Code starts in a directory and can be placed at:

- Project root (checked into version control)

- Parent directories (for monorepos)

- User home directory (~/.claude/CLAUDE.md) for global settings

### Custom Commands

Users can create custom slash commands by placing [Markdown](/index.php?title=Markdown&action=edit&redlink=1) files in the **.claude/commands/** directory. These commands become available as reusable prompts within Claude Code sessions and can accept arguments.[&#91;17&#93;](#cite_note-best-practices-17)[&#91;25&#93;](#cite_note-slash-25)

### Workflow Patterns

Recommended workflow patterns include:[&#91;17&#93;](#cite_note-best-practices-17)

1. Read relevant files and context first without writing code

2. Use subagents for complex problems to preserve context

3. Create a plan before implementing changes

4. Use checkpoints before major edits

5. Clear context between unrelated tasks

6. Monitor usage with `/status` command

## Limitations

As of September 2025, Claude Code has several documented limitations:[&#91;5&#93;](#cite_note-overview-5)

- Potential for AI-generated mistakes in responses

- Tool execution reliability requires enhancement

- Limited support for very long-running commands

- Terminal rendering capability issues

- Context window can fill with irrelevant conversation during extended sessions

- Performance can degrade with accumulated irrelevant content

- OS/platform detection problems in [WSL](/index.php?title=Windows_Subsystem_for_Linux&action=edit&redlink=1)

- Potential [npm](/index.php?title=Npm&action=edit&redlink=1) permission errors

- Node.js conflicts in WSL environments

- Difficulties handling very long pasted content

- VS Code terminal truncation of long pastes

- Usage limits based on subscription; heavy users may hit caps sooner with large codebases or Opus

Known technical issues include OS detection problems in certain WSL environments and difficulties handling complex terminal UI elements.[&#91;14&#93;](#cite_note-setup-14)

## Data Privacy

Anthropic updated its consumer [privacy](/index.php?title=Privacy&action=edit&redlink=1) terms in late August–September 2025. For Claude Code when used via Free/Pro/Max consumer accounts:

- Users can choose whether chats/coding sessions are used to train models. If enabled, retention is up to 5 years; if disabled, retention is up to 30 days. (These settings apply to new or resumed chats/sessions only.)[&#91;26&#93;](#cite_note-policy-update-26)[&#91;27&#93;](#cite_note-privacy-center-27)

- These consumer policies do **not** apply to commercial/government/education contracts or API use via providers like [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) and [Vertex AI](/index.php?title=Google_Cloud_Platform&action=edit&redlink=1)[&#91;26&#93;](#cite_note-policy-update-26)

- User feedback is used for improvements but **not** for generative model training[&#91;5&#93;](#cite_note-overview-5)

- Feedback transcripts are stored for only 30 days[&#91;5&#93;](#cite_note-overview-5)

- Limited retention periods with restricted access to session data[&#91;5&#93;](#cite_note-overview-5)

- Compliance with Anthropic's commercial [Terms of Service](/index.php?title=Terms_of_Service&action=edit&redlink=1)[&#91;5&#93;](#cite_note-overview-5)

- Optional telemetry can be disabled; environment variables allow opt-out[&#91;28&#93;](#cite_note-datausage-28)

- Local-first approach with no cloud storage of code[&#91;29&#93;](#cite_note-security-29)

## Reception

Claude Code has received positive reception from the developer community. As of September 2025, it has over 5 million downloads on npm.[&#91;9&#93;](#cite_note-npm-9) The tool has been praised for its deep codebase understanding and ability to perform complex, multi-file refactoring tasks.

Industry analysts have noted that Claude Code represents a shift from simple code completion to truly agentic development assistance. The introduction of checkpoints and autonomous operation capabilities in version 2.0 has been particularly well-received by power users who require extended coding sessions.[&#91;30&#93;](#cite_note-implicator-30)

Community resources have emerged around Claude Code, including the awesome-claude-code repository for slash-commands and guides.[&#91;31&#93;](#cite_note-awesome-31) A Claude Code CLI Cheatsheet has been published to help developers maximize their usage.[&#91;32&#93;](#cite_note-cheatsheet-shipyard-32)

## See also

- [Claude (AI assistant)](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1)

- [Anthropic](/wiki/anthropic)

- [AI pair programming](/index.php?title=AI_pair_programming&action=edit&redlink=1)

- [GitHub Copilot](/wiki/github_copilot)

- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)

- [Cursor](/index.php?title=Cursor_(company)&action=edit&redlink=1)

- [Replit](/index.php?title=Replit&action=edit&redlink=1)

- [SDK](/index.php?title=Software_development_kit&action=edit&redlink=1)

- [Terminal emulator](/index.php?title=Terminal_emulator&action=edit&redlink=1)

- [Command-line interface](/index.php?title=Command-line_interface&action=edit&redlink=1)

## External links

- [Official Claude Code website](https://www.anthropic.com/claude-code)

- [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code)

- [Claude Code GitHub repository](https://github.com/anthropics/claude-code)

- [Claude Code on npm](https://www.npmjs.com/package/@anthropic-ai/claude-code)

- [Claude Code VS Code Extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)

- [Claude Code community resources](https://claudelog.com)

## References

1. ↑ [1.0](#cite_ref-sonnet37_1-0) [1.1](#cite_ref-sonnet37_1-1) ["Claude 3.7 Sonnet and Claude Code"](https://www.anthropic.com/news/claude-3-7-sonnet).&#32;Anthropic.&#32;2025-02-24.&#32;[https://www.anthropic.com/news/claude-3-7-sonnet](https://www.anthropic.com/news/claude-3-7-sonnet).&#32;Retrieved 2025-09-30.

2. ↑ [2.00](#cite_ref-claude4_2-0) [2.01](#cite_ref-claude4_2-1) [2.02](#cite_ref-claude4_2-2) [2.03](#cite_ref-claude4_2-3) [2.04](#cite_ref-claude4_2-4) [2.05](#cite_ref-claude4_2-5) [2.06](#cite_ref-claude4_2-6) [2.07](#cite_ref-claude4_2-7) [2.08](#cite_ref-claude4_2-8) [2.09](#cite_ref-claude4_2-9) [2.10](#cite_ref-claude4_2-10) [2.11](#cite_ref-claude4_2-11) ["Introducing Claude 4"](https://www.anthropic.com/news/claude-4).&#32;Anthropic.&#32;2025-05-22.&#32;[https://www.anthropic.com/news/claude-4](https://www.anthropic.com/news/claude-4).&#32;Retrieved 2025-09-30.

3. ↑ [3.0](#cite_ref-autonomy_3-0) [3.1](#cite_ref-autonomy_3-1) [3.2](#cite_ref-autonomy_3-2) [3.3](#cite_ref-autonomy_3-3) [3.4](#cite_ref-autonomy_3-4) [3.5](#cite_ref-autonomy_3-5) [3.6](#cite_ref-autonomy_3-6) ["Enabling Claude Code to work more autonomously"](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously).&#32;Anthropic.&#32;2025-09-29.&#32;[https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously).&#32;Retrieved 2025-09-30.

4. ↑ [4.00](#cite_ref-sonnet45_4-0) [4.01](#cite_ref-sonnet45_4-1) [4.02](#cite_ref-sonnet45_4-2) [4.03](#cite_ref-sonnet45_4-3) [4.04](#cite_ref-sonnet45_4-4) [4.05](#cite_ref-sonnet45_4-5) [4.06](#cite_ref-sonnet45_4-6) [4.07](#cite_ref-sonnet45_4-7) [4.08](#cite_ref-sonnet45_4-8) [4.09](#cite_ref-sonnet45_4-9) [4.10](#cite_ref-sonnet45_4-10) [4.11](#cite_ref-sonnet45_4-11) [4.12](#cite_ref-sonnet45_4-12) [4.13](#cite_ref-sonnet45_4-13) [4.14](#cite_ref-sonnet45_4-14) ["Introducing Claude Sonnet 4.5"](https://www.anthropic.com/news/claude-sonnet-4-5).&#32;Anthropic.&#32;2025-09-29.&#32;[https://www.anthropic.com/news/claude-sonnet-4-5](https://www.anthropic.com/news/claude-sonnet-4-5).&#32;Retrieved 2025-09-30.

5. ↑ [5.00](#cite_ref-overview_5-0) [5.01](#cite_ref-overview_5-1) [5.02](#cite_ref-overview_5-2) [5.03](#cite_ref-overview_5-3) [5.04](#cite_ref-overview_5-4) [5.05](#cite_ref-overview_5-5) [5.06](#cite_ref-overview_5-6) [5.07](#cite_ref-overview_5-7) [5.08](#cite_ref-overview_5-8) [5.09](#cite_ref-overview_5-9) [5.10](#cite_ref-overview_5-10) [5.11](#cite_ref-overview_5-11) ["Claude Code Overview"](https://docs.anthropic.com/en/docs/claude-code/overview).&#32;Anthropic.&#32;[https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview).&#32;Retrieved 2025-09-30.

6. ↑ [6.0](#cite_ref-cli-ref_6-0) [6.1](#cite_ref-cli-ref_6-1) ["CLI Reference"](https://docs.anthropic.com/en/docs/claude-code/cli-reference).&#32;Anthropic.&#32;[https://docs.anthropic.com/en/docs/claude-code/cli-reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference).&#32;Retrieved 2025-09-30.

7. [↑](#cite_ref-benchmarks2025_7-0) ["Introducing Claude Sonnet 4.5"](https://www.anthropic.com/news/claude-sonnet-4-5).&#32;Anthropic.&#32;2025-09-29.&#32;[https://www.anthropic.com/news/claude-sonnet-4-5](https://www.anthropic.com/news/claude-sonnet-4-5).&#32;Retrieved 2025-09-30.

8. ↑ [8.0](#cite_ref-pymnts_8-0) [8.1](#cite_ref-pymnts_8-1) ["Anthropic Launches Claude Sonnet 4.5 and Introduces Claude Agent SDK"](https://www.pymnts.com/artificial-intelligence-2/2025/anthropic-claude-sonnet-4-5-introduces-claude-agent-sdk/).&#32;PYMNTS.&#32;2025-09-29.&#32;[https://www.pymnts.com/artificial-intelligence-2/2025/anthropic-claude-sonnet-4-5-introduces-claude-agent-sdk/](https://www.pymnts.com/artificial-intelligence-2/2025/anthropic-claude-sonnet-4-5-introduces-claude-agent-sdk/).&#32;Retrieved 2025-09-30.

9. ↑ [9.0](#cite_ref-npm_9-0) [9.1](#cite_ref-npm_9-1) [9.2](#cite_ref-npm_9-2) ["@anthropic-ai/claude-code"](https://www.npmjs.com/package/@anthropic-ai/claude-code).&#32;npm.&#32;[https://www.npmjs.com/package/@anthropic-ai/claude-code](https://www.npmjs.com/package/@anthropic-ai/claude-code).&#32;Retrieved 2025-09-30.

10. [↑](#cite_ref-ide_10-0) ["Visual Studio Code"](https://docs.claude.com/en/docs/claude-code/ide-integrations).&#32;Anthropic.&#32;[https://docs.claude.com/en/docs/claude-code/ide-integrations](https://docs.claude.com/en/docs/claude-code/ide-integrations).&#32;Retrieved 2025-09-30.

11. [↑](#cite_ref-gh-actions-docs_11-0) ["Claude Code GitHub Actions"](https://docs.claude.com/en/docs/claude-code/github-actions).&#32;Anthropic.&#32;[https://docs.claude.com/en/docs/claude-code/github-actions](https://docs.claude.com/en/docs/claude-code/github-actions).&#32;Retrieved 2025-09-30.

12. ↑ [12.0](#cite_ref-taiwanpost_12-0) [12.1](#cite_ref-taiwanpost_12-1) ["大數軟體LargitData on X"](https://twitter.com/LargitData1/status/1973011236242726953).&#32;X (formerly Twitter).&#32;2025-09-30.&#32;[https://twitter.com/LargitData1/status/1973011236242726953](https://twitter.com/LargitData1/status/1973011236242726953).&#32;Retrieved 2025-09-30.

13. ↑ [13.0](#cite_ref-agent-sdk_13-0) [13.1](#cite_ref-agent-sdk_13-1) [13.2](#cite_ref-agent-sdk_13-2) ["Building agents with the Claude Agent SDK"](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk).&#32;Anthropic.&#32;2025-09-29.&#32;[https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk).&#32;Retrieved 2025-09-30.

14. ↑ [14.0](#cite_ref-setup_14-0) [14.1](#cite_ref-setup_14-1) [14.2](#cite_ref-setup_14-2) [14.3](#cite_ref-setup_14-3) [14.4](#cite_ref-setup_14-4) ["Claude Code Setup Guide"](https://docs.anthropic.com/en/docs/claude-code/setup).&#32;Anthropic.&#32;[https://docs.anthropic.com/en/docs/claude-code/setup](https://docs.anthropic.com/en/docs/claude-code/setup).&#32;Retrieved 2025-09-30. Cite error: Invalid `<ref>` tag; name "setup" defined multiple times with different content

15. ↑ [15.0](#cite_ref-pricing_15-0) [15.1](#cite_ref-pricing_15-1) [15.2](#cite_ref-pricing_15-2) ["Using Claude Code with your Pro or Max plan"](https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan).&#32;Anthropic.&#32;[https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan](https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan).&#32;Retrieved 2025-09-30.

16. ↑ [16.0](#cite_ref-github-copilot_16-0) [16.1](#cite_ref-github-copilot_16-1) ["Anthropic Claude Sonnet 4.5 is in public preview for GitHub Copilot"](https://github.blog/changelog/2025-09-29-anthropic-claude-sonnet-4-5-is-in-public-preview-for-github-copilot/).&#32;GitHub.&#32;2025-09-29.&#32;[https://github.blog/changelog/2025-09-29-anthropic-claude-sonnet-4-5-is-in-public-preview-for-github-copilot/](https://github.blog/changelog/2025-09-29-anthropic-claude-sonnet-4-5-is-in-public-preview-for-github-copilot/).&#32;Retrieved 2025-09-30.

17. ↑ [17.0](#cite_ref-best-practices_17-0) [17.1](#cite_ref-best-practices_17-1) [17.2](#cite_ref-best-practices_17-2) [17.3](#cite_ref-best-practices_17-3) ["Claude Code Best Practices"](https://www.anthropic.com/engineering/claude-code-best-practices).&#32;Anthropic.&#32;2025-04-18.&#32;[https://www.anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices).&#32;Retrieved 2025-09-30.

18. [↑](#cite_ref-deskext_18-0) ["Claude Desktop Extensions"](https://www.anthropic.com/engineering/desktop-extensions).&#32;Anthropic.&#32;2025-06-26.&#32;[https://www.anthropic.com/engineering/desktop-extensions](https://www.anthropic.com/engineering/desktop-extensions).&#32;Retrieved 2025-09-30.

19. [↑](#cite_ref-release-notes_19-0) ["Claude Code – Release notes"](https://docs.anthropic.com/en/release-notes/claude-code).&#32;Anthropic.&#32;[https://docs.anthropic.com/en/release-notes/claude-code](https://docs.anthropic.com/en/release-notes/claude-code).&#32;Retrieved 2025-09-30. Cite error: Invalid `<ref>` tag; name "release-notes" defined multiple times with different content

20. [↑](#cite_ref-changelog_20-0) ["ClaudeLog - Claude Code Changelog"](https://claudelog.com/claude-code-changelog/).&#32;ClaudeLog.&#32;2025-07-04.&#32;[https://claudelog.com/claude-code-changelog/](https://claudelog.com/claude-code-changelog/).&#32;Retrieved 2025-09-30.

21. [↑](#cite_ref-techcrunch_21-0) ["Anthropic unveils new rate limits to curb Claude Code power users"](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/).&#32;TechCrunch.&#32;2025-07-28.&#32;[https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/](https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/).&#32;Retrieved 2025-09-30.

22. [↑](#cite_ref-vscodeext_22-0) ["Claude Code for VS Code"](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code).&#32;Visual Studio Marketplace.&#32;[https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code).&#32;Retrieved 2025-09-30.

23. [↑](#cite_ref-jetbrains_23-0) ["Introducing Claude Agent in JetBrains IDEs"](https://blog.jetbrains.com/ai/2025/09/introducing-claude-agent-in-jetbrains-ides/).&#32;JetBrains.&#32;2025-09-29.&#32;[https://blog.jetbrains.com/ai/2025/09/introducing-claude-agent-in-jetbrains-ides/](https://blog.jetbrains.com/ai/2025/09/introducing-claude-agent-in-jetbrains-ides/).&#32;Retrieved 2025-09-30.

24. [↑](#cite_ref-gh-actions-market_24-0) ["Claude Code Action (official) – GitHub Marketplace"](https://github.com/marketplace/actions/claude-code-action-official).&#32;GitHub.&#32;[https://github.com/marketplace/actions/claude-code-action-official](https://github.com/marketplace/actions/claude-code-action-official).&#32;Retrieved 2025-09-30.

25. [↑](#cite_ref-slash_25-0) ["Slash commands"](https://docs.claude.com/en/docs/claude-code/slash-commands).&#32;Anthropic.&#32;[https://docs.claude.com/en/docs/claude-code/slash-commands](https://docs.claude.com/en/docs/claude-code/slash-commands).&#32;Retrieved 2025-09-30.

26. ↑ [26.0](#cite_ref-policy-update_26-0) [26.1](#cite_ref-policy-update_26-1) ["Updates to our Consumer Terms and Privacy Policy"](https://www.anthropic.com/news/updates-to-our-consumer-terms).&#32;Anthropic.&#32;2025-08-28.&#32;[https://www.anthropic.com/news/updates-to-our-consumer-terms](https://www.anthropic.com/news/updates-to-our-consumer-terms).&#32;Retrieved 2025-09-30.

27. [↑](#cite_ref-privacy-center_27-0) ["How long do you store my data?"](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data).&#32;Anthropic Privacy Center.&#32;[https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data).&#32;Retrieved 2025-09-30.

28. [↑](#cite_ref-datausage_28-0) ["Data usage"](https://docs.claude.com/en/docs/claude-code/data-usage).&#32;Anthropic.&#32;[https://docs.claude.com/en/docs/claude-code/data-usage](https://docs.claude.com/en/docs/claude-code/data-usage).&#32;Retrieved 2025-09-30.

29. [↑](#cite_ref-security_29-0) ["Security"](https://docs.claude.com/en/docs/claude-code/security).&#32;Anthropic.&#32;[https://docs.claude.com/en/docs/claude-code/security](https://docs.claude.com/en/docs/claude-code/security).&#32;Retrieved 2025-09-30.

30. [↑](#cite_ref-implicator_30-0) ["Claude Code Gets Checkpoints, VS Code, Agent SDK Updates"](https://www.implicator.ai/claude-codes-quiet-power-play-tooling-not-trophies/).&#32;Implicator AI.&#32;2025-09-29.&#32;[https://www.implicator.ai/claude-codes-quiet-power-play-tooling-not-trophies/](https://www.implicator.ai/claude-codes-quiet-power-play-tooling-not-trophies/).&#32;Retrieved 2025-09-30.

31. [↑](#cite_ref-awesome_31-0) ["awesome-claude-code"](https://github.com/hesreallyhim/awesome-claude-code).&#32;GitHub.&#32;2025-09-20.&#32;[https://github.com/hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code).&#32;Retrieved 2025-09-30.

32. [↑](#cite_ref-cheatsheet-shipyard_32-0) ["Claude Code CLI Cheatsheet"](https://shipyard.build/blog/claude-code-cheat-sheet/).&#32;Shipyard.&#32;2025-08-18.&#32;[https://shipyard.build/blog/claude-code-cheat-sheet/](https://shipyard.build/blog/claude-code-cheat-sheet/).&#32;Retrieved 2025-09-30.