---
title: "Claude Skills"
slug: "claude_skills"
categories:
  - "Artificial_intelligence"
  - "Claude_AI"
  - "Anthropic"
  - "AI_agents"
  - "Machine_learning"
  - "Natural_language_processing"
  - "2025_software"
  - "AI_development_tools"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

**Claude Skills** (also referred to as **Agent Skills**) are modular capabilities developed by [Anthropic](/wiki/anthropic) for the [Claude](/wiki/claude_ai) platform that package repeatable workflows, instructions, reference materials, and optional executable scripts into discoverable components that Claude can automatically load when relevant to a task.[&#91;1&#93;](#cite_note-anthropic-news-1) Introduced on October 16, 2025, Skills transform Claude from a general-purpose [AI assistant](/index.php?title=AI_assistant&action=edit&redlink=1) into a specialized agent for specific workflows while maintaining efficiency through progressive disclosure of context.[&#91;2&#93;](#cite_note-anthropic-engineering-2)

Skills work across [Claude](/wiki/claude_ai) apps, [Claude Code](/wiki/claude_code), and the [Claude Developer Platform (API)](/index.php?title=Claude_API&action=edit&redlink=1), enabling users to create consistent, specialized behaviors without prompt overhead. Anthropic also publishes a public repository of example skills and the engineering design pattern underpinning the Skills system.[&#91;3&#93;](#cite_note-github-skills-3)

## Overview

A **Skill** is a directory-based package that contains:

- A required **`SKILL.md`** file with [YAML](/index.php?title=YAML&action=edit&redlink=1) frontmatter (name and description) and [Markdown](/index.php?title=Markdown&action=edit&redlink=1) instructions

- Optional supporting reference files (templates, brand assets, additional documentation)

- Optional executable scripts that Claude can run when code is more reliable or efficient than pure text generation[&#91;2&#93;](#cite_note-anthropic-engineering-2)

Claude uses a **progressive disclosure** mechanism to manage Skills efficiently: it preloads only lightweight metadata (name and description) for all installed skills at session start; when a user request suggests a skill is relevant, Claude reads the full `SKILL.md` and any linked files; if appropriate, it may execute bundled scripts within its code execution environment.[&#91;4&#93;](#cite_note-support-what-4)

## Architecture and Design

### Progressive Disclosure

The core design principle behind Claude Skills is progressive disclosure, which operates on three levels:[&#91;2&#93;](#cite_note-anthropic-engineering-2)

| Level | Content | Token Usage | When Loaded |
| --- | --- | --- | --- |
| 1. Metadata | Name and description from YAML frontmatter | ~30-50 tokens per skill | At session start |
| 2. Core Instructions | Full SKILL.md file content | Variable (hundreds to thousands) | When skill is triggered |
| 3. Additional Resources | Referenced files, scripts, templates | As needed | Only when specifically required |

This architecture ensures that Claude's [context window](/wiki/context_window) remains efficient, as skills that aren't relevant to the current task don't consume tokens beyond their minimal metadata.[&#91;5&#93;](#cite_note-medium-pawel-5)

### File Structure

A minimal `SKILL.md` uses YAML frontmatter and Markdown content:[&#91;6&#93;](#cite_note-docs-code-skills-6)

---
name: pdf-processing
description: Extract text, fill forms, and merge PDFs. Use when working with PDF files or forms.
version: 1.0.0
---
# PDF Processing

## Instructions
[Detailed instructions for the skill]

## Examples
[Usage examples]

## Key Characteristics

| Characteristic | Description |
| --- | --- |
| Composable | Multiple skills can stack and work together seamlessly; Claude autonomously identifies and coordinates the set of relevant skills.[&#91;1&#93;](#cite_note-anthropic-news-1) |
| Portable | The same skill format works across Claude apps, Claude Code, and the API—"build once, use everywhere."[&#91;1&#93;](#cite_note-anthropic-news-1) |
| Efficient | Progressive disclosure keeps context use minimal until needed; reduces prompt bloat and token consumption.[&#91;2&#93;](#cite_note-anthropic-engineering-2) |
| Powerful | Skills may include executable code for deterministic operations (for example PDF form extraction) inside Claude's sandboxed container.[&#91;2&#93;](#cite_note-anthropic-engineering-2) |
| Secure | Skills operate in isolated environments with no data persistence between sessions.[&#91;7&#93;](#cite_note-support-using-7) |

## Availability and Access

Skills were announced publicly on October 16, 2025. Availability varies by platform:[&#91;1&#93;](#cite_note-anthropic-news-1)

| Platform | Availability | Requirements |
| --- | --- | --- |
| [Claude.ai](/index.php?title=Claude.ai&action=edit&redlink=1) apps | Pro, Max, Team, Enterprise plans | Code execution and file creation enabled |
| [Claude Code](/wiki/claude_code) | All users with Claude Code access | Installed via plugins or filesystem |
| Claude API | All API users | Code Execution Tool beta enabled |
| Claude Agent SDK | All SDK users | Standard SDK requirements |

For Team and Enterprise users, administrators must first enable Skills organization-wide before individual members can use them.[&#91;7&#93;](#cite_note-support-using-7)

## Built-in Skills

Anthropic provides built-in document Skills that Claude can invoke automatically when appropriate:[&#91;7&#93;](#cite_note-support-using-7)

### Document Processing Skills

| skill_id | Capability | Description |
| --- | --- | --- |
| `docx` | Word documents | Creates, edits, and analyzes [Microsoft Word](/index.php?title=Microsoft_Word&action=edit&redlink=1) documents with support for tracked changes, comments, and formatting preservation |
| `xlsx` | Excel spreadsheets | Generates [Microsoft Excel](/index.php?title=Microsoft_Excel&action=edit&redlink=1) spreadsheets with formulas, data analysis, and visualization capabilities |
| `pptx` | PowerPoint presentations | Creates [Microsoft PowerPoint](/index.php?title=Microsoft_PowerPoint&action=edit&redlink=1) presentations with layouts, templates, and automated slide generation |
| `pdf` | PDF manipulation | Comprehensive [PDF](/index.php?title=PDF&action=edit&redlink=1) handling including form filling, text extraction, merging, and splitting |

### Example Skills Repository

Anthropic's GitHub repository includes diverse example Skills:[&#91;3&#93;](#cite_note-github-skills-3)

| Category | Skill Name | Description |
| --- | --- | --- |
| Creative & Design | algorithmic-art | Generates art using [p5.js](/index.php?title=P5.js&action=edit&redlink=1) with seeded randomness and particle systems |
| canvas-design | Creates visual art in PNG and PDF formats using design philosophies |
| slack-gif-creator | Produces animated GIFs optimized for [Slack](/index.php?title=Slack&action=edit&redlink=1)'s size constraints |
| Development & Technical | artifacts-builder | Builds HTML artifacts using [React](/index.php?title=React&action=edit&redlink=1) and [Tailwind CSS](/index.php?title=Tailwind_CSS&action=edit&redlink=1) |
| mcp-server | Guides creation of [MCP](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) servers for API integration |
| webapp-testing | Tests web applications using [Playwright](/index.php?title=Playwright&action=edit&redlink=1) |
| Enterprise & Communication | brand-guidelines | Applies brand colors, typography, and organizational standards |
| internal-comms | Writes internal communications like reports and newsletters |
| theme-factory | Styles artifacts with professional themes |
| Meta Skills | skill-creator | Interactive guidance for creating new Skills |
| template-skill | Basic template for starting new Skills |

## Technical Implementation

### Code Execution Environment

Skills operate within Claude's [sandboxed](/index.php?title=Sandboxing&action=edit&redlink=1) code execution environment, which provides:[&#91;8&#93;](#cite_note-claude-docs-8)

- Filesystem access for reading skill content

- Ability to execute scripts and commands

- Network isolation with configurable access controls

- No data persistence between sessions

- Pre-installed libraries and packages

The Code Execution Tool beta must be enabled for Skills to function.[&#91;1&#93;](#cite_note-anthropic-news-1)

### API Integration

The API supports both Anthropic-managed and custom Skills through:[&#91;9&#93;](#cite_note-docs-api-guide-9)

| Requirement | Details |
| --- | --- |
| Beta headers | `code-execution-2025-08-25`, `skills-2025-10-02`, `files-api-2025-04-14` |
| Endpoints | `/v1/skills` for management; Messages API for execution |
| Skill specification | List in `container.skills` with type, skill_id, and optional version |
| File outputs | Generated files include `file_id` for download via Files API |
| Per-request limit | Maximum 8 Skills per request |
| Upload size limit | Under 8 MB for custom skills |

Example API usage:

{
  "container": {
    "skills": [
      {"type": "anthropic", "skill_id": "xlsx", "version": "1.0.0"},
      {"type": "custom", "skill_id": "brand-guidelines", "version": "latest"}
    ]
  }
}

### Claude Code Integration

In [Claude Code](/wiki/claude_code), Skills are discovered from:[&#91;6&#93;](#cite_note-docs-code-skills-6)

- **Personal Skills**: `~/.claude/skills/`

- **Project Skills**: `.claude/skills/` (in the repository)

- **Plugin-bundled Skills**: via Claude Code plugins/marketplaces

## Creating Custom Skills

There are two primary paths for creating custom Skills:[&#91;10&#93;](#cite_note-support-create-custom-10)

### Manual Creation

1. Create a folder with the skill name (lowercase, hyphens, max 64 characters)
2. Add `SKILL.md` with YAML frontmatter and Markdown instructions
3. Include optional scripts, templates, or reference files
4. Upload as ZIP file (Claude apps) or place in appropriate directory (Claude Code/API)

### Conversational Creation

1. Enable the built-in **skill-creator** Skill in Settings
2. Describe the desired workflow to Claude
3. Claude generates properly structured Skill folder
4. Test and iterate on the generated skill[&#91;11&#93;](#cite_note-support-create-convo-11)

## Enterprise Adoption

Several major organizations have implemented Claude Skills for production workflows:

### Rakuten

[Rakuten](/index.php?title=Rakuten&action=edit&redlink=1), the Japanese e-commerce giant, uses Skills to transform finance operations. According to Yusuke Kaji, General Manager of AI at Rakuten: "Skills streamline our management accounting and finance workflows. Claude processes multiple spreadsheets, catches critical anomalies, and generates reports using our procedures. What once took a day, we can now accomplish in an hour."[&#91;12&#93;](#cite_note-venturebeat-12)

### Box

[Box](/index.php?title=Box_(company)&action=edit&redlink=1) leverages Skills to make corporate content repositories more actionable. Yashodha Bhavnani, Head of AI at Box, stated: "Skills teaches Claude how to work with Box content. Users can transform stored files into PowerPoint presentations, Excel spreadsheets, and Word documents that follow their organization's standards—saving hours of effort."[&#91;1&#93;](#cite_note-anthropic-news-1)

### Notion

[Notion](/index.php?title=Notion&action=edit&redlink=1) integrated Skills to provide more predictable results and reduce prompt complexity. The company reports that Skills enable Claude to work seamlessly with Notion, taking users "from questions to action faster" with "less prompt wrangling on complex tasks."[&#91;1&#93;](#cite_note-anthropic-news-1)

### Canva

[Canva](/index.php?title=Canva&action=edit&redlink=1) uses Skills to streamline design workflows and maintain brand consistency across generated content.[&#91;1&#93;](#cite_note-anthropic-news-1)

## Security and Privacy

### Sandboxing Architecture

Claude Skills operate within a comprehensive sandboxing system that provides:[&#91;13&#93;](#cite_note-anthropic-sandboxing-13)

- **Filesystem isolation**: Restricted access to specified directories only

- **Network isolation**: Controlled access through proxy servers with domain allowlists

- **Process isolation**: Prevention of system-level modifications

- **No persistence**: Data doesn't persist between sessions

### Security Best Practices

Organizations implementing Skills should follow these guidelines:[&#91;14&#93;](#cite_note-skywork-security-14)

- Only install Skills from trusted sources

- Audit skill contents before deployment

- Review code dependencies and bundled resources

- Implement least-privilege access controls

- Monitor skill execution logs

- Avoid skills with prompt injection risks or data exfiltration attempts

Custom Skills uploaded in apps are private to the individual account; sharing requires separate uploads or API deployment.[&#91;7&#93;](#cite_note-support-using-7)

## Comparison with Related Technologies

### Skills vs. Model Context Protocol (MCP)

While both Claude Skills and the [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1) aim to extend AI capabilities, they differ significantly:[&#91;15&#93;](#cite_note-mcp-comparison-15)

| Aspect | Claude Skills | Model Context Protocol |
| --- | --- | --- |
| Architecture | Markdown files with optional scripts | Full protocol specification with servers |
| Token efficiency | 30-50 tokens until loaded | Thousands to tens of thousands |
| Complexity | Simple folder structure | Requires API design knowledge |
| Primary function | Teaching HOW to perform tasks | Connecting TO external systems |
| Portability | Cross-platform by default | Vendor-neutral but complex |
| Use case | Procedural knowledge and workflows | External service integration |

Developer and AI researcher [Simon Willison](/index.php?title=Simon_Willison&action=edit&redlink=1) noted that Skills "might be a bigger deal than MCP," citing their simplicity and effectiveness.[&#91;16&#93;](#cite_note-simon-willison-16)

### Skills vs. Other Claude Features

- **Vs. Projects**: Projects provide static context bounded to specific chats, while Skills are dynamic and available everywhere.[&#91;17&#93;](#cite_note-support-teach-17)

- **Vs. Custom Instructions**: Custom instructions apply broadly, whereas Skills are task-specific and load on-demand.[&#91;4&#93;](#cite_note-support-what-4)

- **Vs. Regular Prompting**: Skills reduce repetition by packaging complex workflows that would otherwise require extensive prompting.[&#91;17&#93;](#cite_note-support-teach-17)

## Best Practices

### Development Guidelines

- Write specific, clear descriptions (max 1024 characters) that specify what the Skill does and when to use it

- Focus each skill on a single capability or workflow

- Test skills with various prompts to ensure reliable activation

- Version skills appropriately for updates

- Document examples and edge cases in the SKILL.md file[&#91;6&#93;](#cite_note-docs-code-skills-6)

### Troubleshooting

Common issues and solutions:[&#91;7&#93;](#cite_note-support-using-7)

- **Non-activation**: Check description clarity and YAML syntax

- **Incorrect behavior**: Review instructions and examples

- **Performance issues**: Optimize scripts and reduce file sizes

- **Access problems**: Verify enablement settings and permissions

## Future Development

Anthropic has announced plans for several enhancements:[&#91;1&#93;](#cite_note-anthropic-news-1)

- Simplified skill creation workflows

- Enterprise-wide deployment capabilities

- Ability for agents to create, edit, and evaluate Skills autonomously

- Integration with external tools and Model Context Protocol servers

- Community marketplace for sharing Skills

- Enhanced versioning and rollback capabilities

## Timeline

| Date | Milestone | Source |
| --- | --- | --- |
| October 16, 2025 | Public announcement of Agent Skills; availability across Claude apps, Claude Code, and API | [&#91;1&#93;](#cite_note-anthropic-news-1) |
| October 2025 | Launch of public GitHub repository with example Skills | [&#91;3&#93;](#cite_note-github-skills-3) |
| October 2025 | Integration announced with enterprise partners (Box, Notion, Canva, Rakuten) | [&#91;1&#93;](#cite_note-anthropic-news-1) |

## See Also

- [Claude (AI)](/wiki/claude_ai)

- [Claude Code](/wiki/claude_code)

- [Claude API](/index.php?title=Claude_API&action=edit&redlink=1)

- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)

- [Anthropic](/wiki/anthropic)

- [AI agents](/index.php?title=AI_agents&action=edit&redlink=1)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [Prompt engineering](/wiki/prompt_engineering)

- [Function calling](/index.php?title=Function_calling&action=edit&redlink=1)

- [Tool Use (AI)](/index.php?title=Tool_Use_(AI)&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-anthropic-news_1-0) [1.01](#cite_ref-anthropic-news_1-1) [1.02](#cite_ref-anthropic-news_1-2) [1.03](#cite_ref-anthropic-news_1-3) [1.04](#cite_ref-anthropic-news_1-4) [1.05](#cite_ref-anthropic-news_1-5) [1.06](#cite_ref-anthropic-news_1-6) [1.07](#cite_ref-anthropic-news_1-7) [1.08](#cite_ref-anthropic-news_1-8) [1.09](#cite_ref-anthropic-news_1-9) [1.10](#cite_ref-anthropic-news_1-10) ["Claude Skills: Customize AI for your workflows"](https://www.anthropic.com/news/skills).&#32;Anthropic.&#32;October 16, 2025.&#32;[https://www.anthropic.com/news/skills](https://www.anthropic.com/news/skills).

2. ↑ [2.0](#cite_ref-anthropic-engineering_2-0) [2.1](#cite_ref-anthropic-engineering_2-1) [2.2](#cite_ref-anthropic-engineering_2-2) [2.3](#cite_ref-anthropic-engineering_2-3) [2.4](#cite_ref-anthropic-engineering_2-4) ["Equipping agents for the real world with Agent Skills"](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills).&#32;Anthropic.&#32;October 16, 2025.&#32;[https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills).

3. ↑ [3.0](#cite_ref-github-skills_3-0) [3.1](#cite_ref-github-skills_3-1) [3.2](#cite_ref-github-skills_3-2) ["Public repository for Skills"](https://github.com/anthropics/skills).&#32;GitHub.&#32;October 2025.&#32;[https://github.com/anthropics/skills](https://github.com/anthropics/skills).

4. ↑ [4.0](#cite_ref-support-what_4-0) [4.1](#cite_ref-support-what_4-1) ["What are Skills?"](https://support.claude.com/en/articles/12512176-what-are-skills).&#32;Claude Help Center.&#32;October 2025.&#32;[https://support.claude.com/en/articles/12512176-what-are-skills](https://support.claude.com/en/articles/12512176-what-are-skills).

5. [↑](#cite_ref-medium-pawel_5-0) Pawel&#32;(October 2025).&#32;["Claude Skills: The AI Feature That Actually Solves a Real Problem"](https://medium.com/@meshuggah22/claude-skills-the-ai-feature-that-actually-solves-a-real-problem-c149b54b0846).&#32;Medium.&#32;[https://medium.com/@meshuggah22/claude-skills-the-ai-feature-that-actually-solves-a-real-problem-c149b54b0846](https://medium.com/@meshuggah22/claude-skills-the-ai-feature-that-actually-solves-a-real-problem-c149b54b0846).

6. ↑ [6.0](#cite_ref-docs-code-skills_6-0) [6.1](#cite_ref-docs-code-skills_6-1) [6.2](#cite_ref-docs-code-skills_6-2) ["Agent Skills (Claude Code)"](https://docs.claude.com/en/docs/claude-code/skills).&#32;Claude Docs.&#32;October 2025.&#32;[https://docs.claude.com/en/docs/claude-code/skills](https://docs.claude.com/en/docs/claude-code/skills).

7. ↑ [7.0](#cite_ref-support-using_7-0) [7.1](#cite_ref-support-using_7-1) [7.2](#cite_ref-support-using_7-2) [7.3](#cite_ref-support-using_7-3) [7.4](#cite_ref-support-using_7-4) ["Using Skills in Claude"](https://support.claude.com/en/articles/12512180-using-skills-in-claude).&#32;Claude Help Center.&#32;October 2025.&#32;[https://support.claude.com/en/articles/12512180-using-skills-in-claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude).

8. [↑](#cite_ref-claude-docs_8-0) ["Agent Skills Documentation"](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview).&#32;Anthropic.&#32;October 2025.&#32;[https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview).

9. [↑](#cite_ref-docs-api-guide_9-0) ["Using Agent Skills with the API"](https://docs.claude.com/en/api/skills-guide).&#32;Claude Docs.&#32;October 2025.&#32;[https://docs.claude.com/en/api/skills-guide](https://docs.claude.com/en/api/skills-guide).

10. [↑](#cite_ref-support-create-custom_10-0) ["How to create custom Skills"](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills).&#32;Claude Help Center.&#32;October 2025.&#32;[https://support.claude.com/en/articles/12512198-how-to-create-custom-skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills).

11. [↑](#cite_ref-support-create-convo_11-0) ["How to create a skill with Claude through conversation"](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation).&#32;Claude Help Center.&#32;October 2025.&#32;[https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation).

12. [↑](#cite_ref-venturebeat_12-0) ["How Anthropic's 'Skills' make Claude faster, cheaper, and more consistent for enterprise AI"](https://venturebeat.com/ai/how-anthropics-skills-make-claude-faster-cheaper-and-more-consistent-for).&#32;VentureBase.&#32;October 2025.&#32;[https://venturebeat.com/ai/how-anthropics-skills-make-claude-faster-cheaper-and-more-consistent-for](https://venturebeat.com/ai/how-anthropics-skills-make-claude-faster-cheaper-and-more-consistent-for).

13. [↑](#cite_ref-anthropic-sandboxing_13-0) ["Making Claude Code more secure and autonomous with sandboxing"](https://www.anthropic.com/engineering/claude-code-sandboxing).&#32;Anthropic.&#32;October 2025.&#32;[https://www.anthropic.com/engineering/claude-code-sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing).

14. [↑](#cite_ref-skywork-security_14-0) ["Are Claude Skills Secure? Threat Model, Permissions & Best Practices"](https://skywork.ai/blog/ai-agent/claude-skills-security-threat-model-permissions-best-practices-2025/).&#32;Skywork AI.&#32;October 2025.&#32;[https://skywork.ai/blog/ai-agent/claude-skills-security-threat-model-permissions-best-practices-2025/](https://skywork.ai/blog/ai-agent/claude-skills-security-threat-model-permissions-best-practices-2025/).

15. [↑](#cite_ref-mcp-comparison_15-0) ["Claude Skills vs. MCP: The Complete Guide to Extending Claude AI"](https://www.mcplist.ai/blog/claude-skills-vs-mcp-guide/).&#32;MCP Directory.&#32;October 2025.&#32;[https://www.mcplist.ai/blog/claude-skills-vs-mcp-guide/](https://www.mcplist.ai/blog/claude-skills-vs-mcp-guide/).

16. [↑](#cite_ref-simon-willison_16-0) Simon Willison&#32;(October 16, 2025).&#32;["Claude Skills are awesome, maybe a bigger deal than MCP"](https://simonwillison.net/2025/Oct/16/claude-skills/).&#32;[https://simonwillison.net/2025/Oct/16/claude-skills/](https://simonwillison.net/2025/Oct/16/claude-skills/).

17. ↑ [17.0](#cite_ref-support-teach_17-0) [17.1](#cite_ref-support-teach_17-1) ["Teach Claude your way of working using skills"](https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills).&#32;Claude Help Center.&#32;October 2025.&#32;[https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills](https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills).