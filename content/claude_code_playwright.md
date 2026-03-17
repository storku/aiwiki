---
title: "Claude Code Playwright"
slug: "claude_code_playwright"
categories:
  - "Articles_with_short_description"
  - "Test_automation_tools"
  - "Artificial_intelligence_applications"
  - "Software_testing"
  - "Command-line_software"
  - "2024_software"
  - "Browser_automation"
---Short description: AI-assisted test automation using Claude Code with Playwright framework

[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

**Claude Code Playwright** refers to the practice and integration of using [Claude Code](/wiki/claude_code), Anthropic's agentic coding tool available in the terminal, IDEs, and via API, with [Playwright](/index.php?title=Playwright_(software)&action=edit&redlink=1) test automation framework through the [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) (MCP). This combination enables developers to generate, execute, and maintain browser automation and [end-to-end tests](/index.php?title=End-to-end_testing&action=edit&redlink=1) using natural language commands and AI-assisted automation.[&#91;1&#93;](#cite_note-checkly-1)[&#91;2&#93;](#cite_note-anthropic-overview-2) It is both a workflow pattern and a technical integration that allows [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) like [Claude](/index.php?title=Claude_(AI_model)&action=edit&redlink=1) to interact with web browsers in a structured, deterministic manner, effectively giving Claude Code "vision" into web applications without relying on screenshot-based tools.[&#91;3&#93;](#cite_note-youtube-designer-3)

The term "Claude Code Playwright" emerged in 2025 as shorthand for this specific workflow, popularized through developer blogs, Reddit discussions, and YouTube tutorials that demonstrate how the combination addresses limitations in AI coding assistants, such as the inability to visually inspect or iterate on web-based outputs.[&#91;4&#93;](#cite_note-willison-4)[&#91;5&#93;](#cite_note-reddit-speed-5)

## Overview

The integration consists of three main components that work together to provide AI-driven browser automation:

- **[Claude Code](/wiki/claude_code)** - A CLI-based agentic coding assistant that uses Anthropic's AI models to understand codebases, execute routine development tasks, and automate coding from natural language instructions[&#91;2&#93;](#cite_note-anthropic-overview-2)[&#91;6&#93;](#cite_note-anthropic-bestpractices-6)

- **[Playwright](/index.php?title=Playwright_(software)&action=edit&redlink=1)** - An open-source browser automation and testing framework developed by Microsoft, providing one API to drive [Chromium](/index.php?title=Chromium&action=edit&redlink=1), [Firefox](/index.php?title=Firefox&action=edit&redlink=1), and [WebKit](/index.php?title=WebKit&action=edit&redlink=1)[&#91;7&#93;](#cite_note-playwright-site-7)

- **[Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) (MCP)** - A standardized protocol for connecting AI systems with external tools and data sources, enabling structured browser interaction[&#91;8&#93;](#cite_note-anthropic-mcp-8)

The Playwright MCP server acts as a bridge between Claude Code and the browser, providing deterministic, text-based snapshots of web pages through Playwright's accessibility tree rather than pixel-based inputs, making it lightweight and LLM-friendly.[&#91;9&#93;](#cite_note-executeautomation-9)[&#91;10&#93;](#cite_note-github-mcp-10)

## History

[Playwright](/index.php?title=Playwright&action=edit&redlink=1) was released by [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) in 2020 as an evolution of the Puppeteer project, gaining rapid adoption for cross-browser testing with built-in test runner, assertions, tracing, and parallelization capabilities.[&#91;11&#93;](#cite_note-playwright-github-11)

[Claude Code](/wiki/claude_code) was introduced by [Anthropic](/wiki/anthropic) in early 2025 as a terminal-based agentic coding tool designed to accelerate software development. It integrates with [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) and newer models to perform tasks like mapping entire codebases in seconds and executing routine coding operations.[&#91;12&#93;](#cite_note-anthropic-product-12)[&#91;13&#93;](#cite_note-zapier-13)

The [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) was [open-sourced](/index.php?title=Open_source&action=edit&redlink=1) by [Anthropic](/wiki/anthropic) on November 25, 2024, as a standard for connecting AI assistants to external systems.[&#91;8&#93;](#cite_note-anthropic-mcp-8) Following this release, ExecuteAutomation and Microsoft developed Playwright MCP server implementations to enable browser automation capabilities for Claude and other AI systems.[&#91;10&#93;](#cite_note-github-mcp-10)[&#91;14&#93;](#cite_note-github-microsoft-mcp-14)

The integration of Claude Code with Playwright MCP was first documented in July 2025 by developer Simon Willison, who detailed how to add the MCP server to Claude Code for browser automation tasks.[&#91;4&#93;](#cite_note-willison-4) Subsequent tutorials expanded on its use for self-correcting AI workflows, such as fixing UI bugs in real-time and generating Playwright tests.[&#91;15&#93;](#cite_note-youtube-debug-15) By mid-2025, it had become a key technique for enhancing AI-driven web development.

## Architecture

### Technical Components

| Component | Description | Function |
| --- | --- | --- |
| Claude Code CLI | Command-line interface for AI coding assistance | Processes natural language commands and generates code |
| MCP Server | Middleware implementing the Model Context Protocol | Bridges communication between AI and browser |
| Playwright Core | Browser automation framework | Controls actual browser interactions |
| JSON-RPC | Communication protocol | Facilitates message passing between components |
| Accessibility Tree | Structured page representation | Provides deterministic element identification |

### Dynamic Element Identification

Unlike traditional Playwright automation that relies on [CSS selectors](/index.php?title=CSS_selectors&action=edit&redlink=1) or [XPath](/index.php?title=XPath&action=edit&redlink=1) expressions, the Playwright MCP uses a dynamic element identification system:[&#91;16&#93;](#cite_note-terry-yaml-16)

1. Web page is loaded in browser

2. Playwright MCP scans the page's accessibility tree

3. Unique `ref_id` is assigned to each interactive element

4. Structured accessibility snapshot is created

5. Claude Code receives the element map with semantic information

6. User writes natural language test steps

7. Claude matches descriptions to `ref_id` values or uses accessible locators

8. Precise browser actions are executed

This approach enables Claude to "see" the browser output and iterate on code by identifying visual or functional issues and generating fixes autonomously.[&#91;3&#93;](#cite_note-youtube-designer-3)

## Features

### Core Capabilities

- **Natural Language Test Generation** - Write tests using plain English descriptions that Claude converts to Playwright code[&#91;17&#93;](#cite_note-apitest-17)

- **Self-Correction Capabilities** - Claude can iterate on code by analyzing browser output, identifying issues, and generating fixes autonomously[&#91;3&#93;](#cite_note-youtube-designer-3)

- **Structured Browser Interaction** - Utilizes Playwright's accessibility tree for deterministic, text-based page interactions without visual processing[&#91;14&#93;](#cite_note-github-microsoft-mcp-14)

- **Browser Control** - Launch, navigate, and interact with web browsers programmatically across Chromium, Firefox, and WebKit

- **Screenshot and PDF Generation** - Capture screenshots and generate PDFs during test execution for debugging

- **Code Generation** - Automatically generate Playwright test scripts from recorded sessions or natural language

- **Context Extraction** - Retrieve DOM elements and page structure for analysis

- **Session Persistence** - Maintain browser state across test runs with persistent user profiles

- **Custom JavaScript Execution** - Run arbitrary JavaScript in the browser context

### Supported Operations

The Playwright MCP server provides several tools accessible through Claude:[&#91;18&#93;](#cite_note-playwright-docs-18)

| Tool Name | Function | Parameters |
| --- | --- | --- |
| browser_navigate | Navigates to specified URLs | url (string) |
| browser_click | Performs click actions on elements | selector (string), options (object) |
| browser_fill | Fills form fields with data | selector (string), value (string) |
| browser_snapshot | Captures structured snapshot of current page | None |
| browser_screenshot | Takes screenshot of page | path (string), fullPage (boolean) |
| browser_generate_pdf | Generates PDF of current page | path (string) |
| browser_execute_js | Executes custom JavaScript on page | script (string) |
| get_context | Retrieves page accessibility tree | None |
| launch_browser | Opens new browser instance | headless (boolean), channel (string) |

### Language Bindings

Playwright supports multiple first-party client libraries that Claude Code can target by adjusting prompts and file paths:[&#91;7&#93;](#cite_note-playwright-site-7)

| Language | Package/Artifact | Example Run Command | Installation |
| --- | --- | --- | --- |
| [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1)/[JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) | @playwright/test | `npx playwright test` | `npm init playwright@latest` |
| [Python](/index.php?title=Python&action=edit&redlink=1) | playwright + pytest | `pytest` | `pip install playwright pytest-playwright` |
| [.NET](/index.php?title=.NET&action=edit&redlink=1) (C#) | Microsoft.Playwright | `dotnet test` | `dotnet add package Microsoft.Playwright` |
| [Java](/index.php?title=Java&action=edit&redlink=1) | com.microsoft.playwright | `mvn test` / `gradle test` | Maven/Gradle dependency |

## Installation and Configuration

### Prerequisites

- [Node.js](/index.php?title=Node.js&action=edit&redlink=1) (version 14 or higher, 18+ recommended)

- [npm](/index.php?title=Npm&action=edit&redlink=1) or [yarn](/index.php?title=Yarn&action=edit&redlink=1) package manager

- Claude Pro subscription or Claude Code access

- MCP-compatible client ([VS Code](/index.php?title=VS_Code&action=edit&redlink=1), [Cursor](/index.php?title=Cursor_(code_editor)&action=edit&redlink=1), or Claude Desktop)

### Installation Methods

#### Using npm (Global Installation)

# Install globally
npm install -g @executeautomation/playwright-mcp-server

# Or use with npx
npx @executeautomation/playwright-mcp-server

#### Claude Code CLI Integration

Add Playwright MCP to Claude Code using the command:[&#91;4&#93;](#cite_note-willison-4)

# Initialize Playwright in project
npm init playwright@latest

# Add MCP server to Claude Code
claude mcp add playwright npx @playwright/mcp@latest

# For headless mode or custom options
claude mcp add playwright npx @playwright/mcp@latest --headless --no-sandbox

# Start Claude Code
claude

This persists the configuration in `~/.claude.json`.

#### Claude Desktop Configuration

Add to `claude_desktop_config.json`:[&#91;19&#93;](#cite_note-madewithlove-19)

{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}

#### Project-Level Configuration

Create `.mcp.json` in project root:[&#91;20&#93;](#cite_note-nikiforov-20)

{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {
        "HEADLESS": "false",
        "BROWSER": "chromium"
      }
    }
  }
}

#### Docker Deployment

For scalable headless deployment:

FROM mcr.microsoft.com/playwright:v1.40.0-focal
RUN npm install -g @playwright/mcp@latest
ENTRYPOINT ["npx", "@playwright/mcp@latest"]

## Usage

### Basic Test Generation

To generate a Playwright test using Claude Code:[&#91;1&#93;](#cite_note-checkly-1)

1. Navigate to project directory

2. Run `claude` to start interactive session

3. Use natural language to describe test scenario

4. Claude will generate and execute Playwright code

Example prompt:

Please test the login functionality:
1. Navigate to https://example.com/login
2. Enter username "testuser"
3. Enter password "testpass"
4. Click login button
5. Verify successful login by checking for welcome message

### Common Claude Code Prompts

These illustrate natural-language tasks developers often ask Claude Code to perform with Playwright:[&#91;2&#93;](#cite_note-anthropic-overview-2)

- "Migrate selectors to `getByRole`/`getByLabelText` accessible locators and update failing specs accordingly."

- "Split long E2E test into smaller specs and add `test.step` annotations for trace readability."

- "Refactor to Page Object Model and deduplicate auth flows across tests."

- "Create CI workflow that runs on push, uploads HTML report, and retains traces on failure."

- "Generate tests for the shopping cart flow including add, remove, and checkout operations."

- "Debug why the login test is flaky and add proper waits or assertions."

### Advanced Features

#### Custom Commands

Store reusable test templates in `.claude/commands/` directory:[&#91;21&#93;](#cite_note-anthropic-practices-21)

# .claude/commands/test-login.md
Test user authentication flow with following steps:
$ARGUMENTS

#### YAML-Based Testing

The Claude Code Playwright integration supports YAML-based test definitions:[&#91;16&#93;](#cite_note-terry-yaml-16)

name: E2E Test Suite
tags:
  - smoke
  - regression
environment:
  url: https://staging.example.com
steps:
  - include: "login"
  - "Click Add to Cart button for first product"
  - "Verify cart contains 1 item"
  - "Navigate to checkout"
  - "Complete purchase with test card"
  - "Verify order confirmation"

#### Example TypeScript Test

Below is a minimal Playwright test that Claude Code could generate or edit:[&#91;22&#93;](#cite_note-playwright-intro-22)

import { test, expect } from &#39;@playwright/test&#39;;

test.describe(&#39;User Authentication&#39;, () => {
  test(&#39;successful login flow&#39;, async ({ page }) => {
    await page.goto(&#39;https://example.com/login&#39;);
    
    // Using accessible locators
    await page.getByLabel(&#39;Email&#39;).fill(&#39;user@example.com&#39;);
    await page.getByLabel(&#39;Password&#39;).fill(&#39;secure_password&#39;);
    await page.getByRole(&#39;button&#39;, { name: &#39;Sign In&#39; }).click();
    
    // Verify successful login
    await expect(page.getByText(&#39;Welcome back&#39;)).toBeVisible();
    await expect(page).toHaveURL(&#39;/dashboard&#39;);
  });
});

## Best Practices

### Context Management

- Use `/clear` command frequently between unrelated tasks to manage token limits[&#91;23&#93;](#cite_note-sid-cooking-23)

- Implement `/compact` when approaching context limits

- Store project-specific instructions in `CLAUDE.md` file

- Keep prompts focused on specific test scenarios

### Test Organization

| Practice | Description | Example |
| --- | --- | --- |
| Page Object Model | Encapsulate page interactions in reusable classes | LoginPage, CheckoutPage classes |
| Test Fixtures | Share common setup between tests | Authentication, database seeding |
| Parameterized Steps | Create flexible, reusable step libraries | Generic click, fill, verify functions |
| Environment Configuration | Support multiple test environments | dev/staging/production configs |
| Session Management | Maintain browser state efficiently | Persistent auth contexts |
| Parallel Execution | Run tests concurrently for speed | Sharding, worker configuration |

### Security and Licensing Considerations

- **Source Review** - Treat AI-proposed diffs as suggestions, review for data exposure, flaky waits, or brittle selectors before committing[&#91;6&#93;](#cite_note-anthropic-bestpractices-6)

- **Permissions** - Avoid using `--dangerously-skip-permissions` in production environments[&#91;24&#93;](#cite_note-builder-24)

- **Tool Access** - Define specific tool permissions for Claude in configuration

- **Sensitive Data** - Store credentials and sensitive data in environment variables, never in code

- **Licensing** - Playwright is [Apache License 2.0](/index.php?title=Apache_License_2.0&action=edit&redlink=1); Claude Code usage is governed by Anthropic's service terms[&#91;11&#93;](#cite_note-playwright-github-11)

### Running at Scale

- **CI/CD Integration** - Playwright runs on most CI systems with official guides for GitHub Actions, Azure Pipelines, Jenkins, CircleCI[&#91;25&#93;](#cite_note-playwright-ci-25)

- **Cloud Execution** - Microsoft offers Azure Playwright Testing for at-scale hosted parallel execution[&#91;26&#93;](#cite_note-azure-playwright-26)

- **Model Access** - Claude models are accessible via Claude API and cloud platforms like [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1), enabling enterprise routing and governance[&#91;27&#93;](#cite_note-aws-bedrock-27)

## Challenges and Limitations

### Technical Limitations

- Browser storage APIs ([localStorage](/index.php?title=LocalStorage&action=edit&redlink=1), [sessionStorage](/index.php?title=SessionStorage&action=edit&redlink=1)) are not supported in Claude.ai artifacts[&#91;8&#93;](#cite_note-anthropic-mcp-8)

- Maximum of 20 tool calls per research session

- Context window limitations requiring periodic clearing

- Manual permission granting for each operation (unless overridden)

### Performance Issues

- Users have reported slow browser interactions (>4 seconds for navigation) in environments like WSL2[&#91;5&#93;](#cite_note-reddit-speed-5)

- Token usage for repeated snapshots can be inefficient for large-scale testing

- Generated scripts may fail due to non-unique selectors, requiring manual overrides[&#91;5&#93;](#cite_note-reddit-speed-5)

### Workarounds

- For WSL2 performance: Consider using native Windows or Linux environments

- For token efficiency: Use targeted snapshots rather than full-page captures

- For selector issues: Prefer accessible locators (getByRole, getByLabel) over CSS selectors

## Applications and Use Cases

### Primary Use Cases

- **Exploratory Testing** - Discover unexpected issues through AI-driven exploration[&#91;20&#93;](#cite_note-nikiforov-20)

- **Test Generation** - Automatically create comprehensive test suites from specifications

- **Self-Correcting UI Development** - Build and refine UIs with automatic visual verification[&#91;3&#93;](#cite_note-youtube-designer-3)

- **Regression Testing** - Maintain and update existing test suites as applications evolve

- **API Testing** - Test REST APIs and GraphQL endpoints with Playwright's request context[&#91;17&#93;](#cite_note-apitest-17)

- **Visual Testing** - Verify UI components, layouts, and visual regressions

- **Cross-browser Testing** - Ensure compatibility across Chromium, Firefox, and WebKit

- **Migration Projects** - Convert existing Selenium or Puppeteer tests to Playwright

### Industry Adoption

Companies and organizations using Claude Code Playwright include:

- [Block](/index.php?title=Block,_Inc.&action=edit&redlink=1) - Integrated MCP for agentic systems development[&#91;8&#93;](#cite_note-anthropic-mcp-8)

- [Apollo](/index.php?title=Apollo_GraphQL&action=edit&redlink=1) - Adopted for test automation workflows

- Development tool companies including [Replit](/index.php?title=Replit&action=edit&redlink=1), Codeium, and [Sourcegraph](/index.php?title=Sourcegraph&action=edit&redlink=1)

## Relationship to Tool/Use Protocols

Although not required for this workflow, teams can connect Playwright-related tools or repositories to Claude via the [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) (MCP) so the assistant can fetch code, open issues, or retrieve documentation through standardized tool connectors. This enables:[&#91;28&#93;](#cite_note-mcp-docs-28)

- Direct access to test repositories

- Integration with issue tracking systems

- Real-time documentation retrieval

- Cross-tool workflow automation

## Community and Ecosystem

### Related Projects

- **claude-test CLI** - YAML-based testing framework for Claude Code[&#91;16&#93;](#cite_note-terry-yaml-16)

- **Playwright MCP Registry** - Community-driven collection of MCP servers

- **Awesome Claude Code** - Curated list of Claude Code commands and workflows[&#91;29&#93;](#cite_note-awesome-29)

- **Playwright Test Generator** - Chrome extension for recording user interactions

### Development Tools

- [TypeScript SDK](/index.php?title=TypeScript_SDK&action=edit&redlink=1) for building custom MCP servers

- [Python SDK](/index.php?title=Python_SDK&action=edit&redlink=1) for MCP implementation

- Integration with [VS Code](/index.php?title=VS_Code&action=edit&redlink=1), [Cursor IDE](/index.php?title=Cursor_IDE&action=edit&redlink=1), [WebStorm](/index.php?title=WebStorm&action=edit&redlink=1), and other development environments

- [Chrome DevTools](/index.php?title=Chrome_DevTools&action=edit&redlink=1) integration for debugging

### Community Resources

- Official Playwright Discord server with 30,000+ members

- Claude Code community forums

- Stack Overflow tags: `playwright`, `claude-code`

- YouTube tutorials and courses on Claude Code Playwright workflows

## See Also

- [Claude (AI model)](/index.php?title=Claude_(AI_model)&action=edit&redlink=1)

- [Claude Code](/wiki/claude_code)

- [Playwright (software)](/index.php?title=Playwright_(software)&action=edit&redlink=1)

- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)

- [Test automation](/index.php?title=Test_automation&action=edit&redlink=1)

- [End-to-end testing](/index.php?title=End-to-end_testing&action=edit&redlink=1)

- [Artificial intelligence in software testing](/index.php?title=Artificial_intelligence_in_software_testing&action=edit&redlink=1)

- [Browser automation](/index.php?title=Browser_automation&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

## References

1. ↑ [1.0](#cite_ref-checkly_1-0) [1.1](#cite_ref-checkly_1-1) Schaeflein, Stefan. "Generating end-to-end tests with AI and Playwright MCP." Checkly. July 17, 2025.

2. ↑ [2.0](#cite_ref-anthropic-overview_2-0) [2.1](#cite_ref-anthropic-overview_2-1) [2.2](#cite_ref-anthropic-overview_2-2) Anthropic. "Claude Code overview." docs.claude.com/en/docs/claude-code/overview.

3. ↑ [3.0](#cite_ref-youtube-designer_3-0) [3.1](#cite_ref-youtube-designer_3-1) [3.2](#cite_ref-youtube-designer_3-2) [3.3](#cite_ref-youtube-designer_3-3) Turn Claude Code into a Self-Correcting Designer with Playwright MCP. YouTube. 2025.

4. ↑ [4.0](#cite_ref-willison_4-0) [4.1](#cite_ref-willison_4-1) [4.2](#cite_ref-willison_4-2) Willison, Simon. "TIL: Using Playwright MCP with Claude Code." July 1, 2025.

5. ↑ [5.0](#cite_ref-reddit-speed_5-0) [5.1](#cite_ref-reddit-speed_5-1) [5.2](#cite_ref-reddit-speed_5-2) Reddit. "Claude code + playwright mcp - how did you speed up the browser?" r/ClaudeAI. 2025.

6. ↑ [6.0](#cite_ref-anthropic-bestpractices_6-0) [6.1](#cite_ref-anthropic-bestpractices_6-1) Anthropic Engineering. "Claude Code: Best practices for agentic coding." April 18, 2025.

7. ↑ [7.0](#cite_ref-playwright-site_7-0) [7.1](#cite_ref-playwright-site_7-1) Playwright. "Fast and reliable end-to-end testing." playwright.dev.

8. ↑ [8.0](#cite_ref-anthropic-mcp_8-0) [8.1](#cite_ref-anthropic-mcp_8-1) [8.2](#cite_ref-anthropic-mcp_8-2) [8.3](#cite_ref-anthropic-mcp_8-3) Anthropic. "Introducing the Model Context Protocol." November 25, 2024.

9. [↑](#cite_ref-executeautomation_9-0) Kumar, Karthik. "Make Playwright UI Testing Smart with Model Context Protocol of Claude AI." Medium. December 9, 2024.

10. ↑ [10.0](#cite_ref-github-mcp_10-0) [10.1](#cite_ref-github-mcp_10-1) ExecuteAutomation. "Playwright Model Context Protocol Server." GitHub. 2024.

11. ↑ [11.0](#cite_ref-playwright-github_11-0) [11.1](#cite_ref-playwright-github_11-1) Microsoft. "microsoft/playwright" (repository and license: Apache-2.0). github.com/microsoft/playwright.

12. [↑](#cite_ref-anthropic-product_12-0) Anthropic. "Coding - Claude Code." claude.com/solutions/coding.

13. [↑](#cite_ref-zapier_13-0) Kumar, Harry. "What is Claude Code? The AI coding tool anyone can use." Zapier. August 5, 2025.

14. ↑ [14.0](#cite_ref-github-microsoft-mcp_14-0) [14.1](#cite_ref-github-microsoft-mcp_14-1) Microsoft. "microsoft/playwright-mcp: Playwright MCP server." GitHub. 2025.

15. [↑](#cite_ref-youtube-debug_15-0) Playwright MCP + Claude Code = The END of Manual Debugging. YouTube. July 14, 2025.

16. ↑ [16.0](#cite_ref-terry-yaml_16-0) [16.1](#cite_ref-terry-yaml_16-1) [16.2](#cite_ref-terry-yaml_16-2) So, Terry. "A YAML-based Playwright MCP automation testing framework designed for Claude Code." GitHub. 2025.

17. ↑ [17.0](#cite_ref-apitest_17-0) [17.1](#cite_ref-apitest_17-1) Pathak, Kailash. "API Testing with LLM(Claude) and Playwright MCP." Medium. August 26, 2025.

18. [↑](#cite_ref-playwright-docs_18-0) Bansal, Ashish. "How to Use playwright-mcp with Claude Desktop - Complete Guide." Playwright MCP Docs. 2025.

19. [↑](#cite_ref-madewithlove_19-0) Wijnands, Sander. "Claude as tester using Playwright and GitHub MCP." MadeWithLove. July 22, 2025.

20. ↑ [20.0](#cite_ref-nikiforov_20-0) [20.1](#cite_ref-nikiforov_20-1) Nikiforov, Oleksii. "Testing with Playwright and Claude Code." September 6, 2025.

21. [↑](#cite_ref-anthropic-practices_21-0) Cherny, Boris. "Claude Code Best Practices." Anthropic Engineering Blog. 2025.

22. [↑](#cite_ref-playwright-intro_22-0) Playwright Docs. "Introduction / Getting started." playwright.dev/docs/intro.

23. [↑](#cite_ref-sid-cooking_23-0) Bharath, Siddharth. "Cooking with Claude Code: The Complete Guide." July 8, 2025.

24. [↑](#cite_ref-builder_24-0) Builder.io. "How I use Claude Code (+ my best tips)." July 16, 2025.

25. [↑](#cite_ref-playwright-ci_25-0) Playwright Docs. "Setting up CI." playwright.dev/docs/ci-intro.

26. [↑](#cite_ref-azure-playwright_26-0) Microsoft Learn. "Microsoft Playwright Testing." learn.microsoft.com/en-us/azure/playwright-testing/.

27. [↑](#cite_ref-aws-bedrock_27-0) AWS News Blog. "Introducing Claude Sonnet 4.5 in Amazon Bedrock." September 29, 2025.

28. [↑](#cite_ref-mcp-docs_28-0) Claude Docs. "Model Context Protocol (MCP)." docs.claude.com/en/docs/mcp.

29. [↑](#cite_ref-awesome_29-0) Him, Hesreally. "Awesome Claude Code." GitHub. 2025.

## External Links

- [Official Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)

- [Model Context Protocol GitHub Organization](https://github.com/modelcontextprotocol)

- [Microsoft Playwright MCP Server Repository](https://github.com/microsoft/playwright-mcp)

- [ExecuteAutomation MCP Playwright Repository](https://github.com/executeautomation/mcp-playwright)

- [Official Playwright Documentation](https://playwright.dev)

- [YouTube Tutorials on Claude Code Playwright](https://www.youtube.com/results?search_query=claude+code+playwright)