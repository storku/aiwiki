---
title: "Claude --dangerously-skip-permissions"
slug: "claude_--dangerously-skip-permissions"
categories:
  - "Claude"
---*See also: [Claude](/wiki/claude)*
The **claude --dangerously-skip-permissions** flag is an officially documented command-line option for [Claude Code](/wiki/claude_code), [Anthropic](/wiki/anthropic)'s terminal-based [AI](/wiki/ai) coding assistant.[&#91;1&#93;](#cite_note-anthropic-security-1) This flag bypasses all permission prompts, allowing Claude Code to execute commands and modify files without user approval. While designed for containerized environments without internet access, it has become widely adopted by developers seeking uninterrupted AI-assisted coding workflows.[&#91;2&#93;](#cite_note-steinberger-2)

## What This Command Does

### Core Functionality

The `--dangerously-skip-permissions` flag completely disables Claude Code's permission system, granting unrestricted access to:

- **File System Operations**: Read, write, edit, and delete files without approval

- **Shell Command Execution**: Run any [bash](/index.php?title=Bash&action=edit&redlink=1) commands without confirmation

- **Network Operations**: Fetch web content and make network requests freely

- **Process Control**: Start, stop, and manipulate system processes

- **Tool Usage**: Execute all available tools without permission checks[&#91;3&#93;](#cite_note-anthropic-best-practices-3)

### Visual Indicator

When active, Claude Code displays:

WARNING: Claude Code running in Bypass Permissions mode

## Purpose and Functionality

### Official Purpose

According to Anthropic's documentation, this flag is intended "only for Docker containers with no internet" to enable:[&#91;1&#93;](#cite_note-anthropic-security-1)

- **Automated Workflows**: Unattended code generation and modification

- **[CI/CD](/index.php?title=CI/CD&action=edit&redlink=1) Integration**: Headless operation in build pipelines

- **Batch Processing**: Large-scale automated refactoring

- **Testing Automation**: Continuous test generation and execution

### Real-World Application

Developers have expanded usage beyond official recommendations for:[&#91;4&#93;](#cite_note-tsai-4)

- **Productivity Enhancement**: Eliminating "permission fatigue" from constant approval prompts

- **Complex Multi-Step Operations**: Enabling Claude to complete lengthy tasks without interruption

- **Development Workflow Transformation**: Shifting from [IDE](/index.php?title=IDE&action=edit&redlink=1)-centric to AI-first development patterns

## When and How It's Used

### Command Syntax

# Basic usage
claude --dangerously-skip-permissions

# With additional options
claude --dangerously-skip-permissions --model sonnet --verbose

# Headless mode for automation
claude -p "fix all lint errors" --dangerously-skip-permissions --output-format json

### Common Use Cases

1. **Automated Code Maintenance**
- Fixing lint errors across entire codebases

- Updating dependencies and resolving conflicts

- Refactoring legacy code patterns

2. **Content Generation**
- Creating boilerplate code and project scaffolding

- Generating comprehensive test suites

- Writing documentation and [API](/index.php?title=API&action=edit&redlink=1) specifications

3. **System Administration**
- Automating development environment setup

- Managing [dotfiles](/index.php?title=Dotfiles&action=edit&redlink=1) and configurations

- Performing bulk file operations

4. **CI/CD Automation**
- Automated [PR](/index.php?title=Pull_request&action=edit&redlink=1) reviews and labeling

- Pre-commit hook execution

- Build script optimization[&#91;5&#93;](#cite_note-builder-5)

### Developer Workflows

Many developers create aliases for convenience:[&#91;2&#93;](#cite_note-steinberger-2)

alias cc="claude --dangerously-skip-permissions"
alias claude-yolo="claude --dangerously-skip-permissions"

## Associated Risks and Warnings

### Critical Security Risks

1. **Data Loss**: Potential for irreversible file deletion or corruption

2. **System Compromise**: Unrestricted command execution can damage system integrity

3. **Data Exfiltration**: Vulnerability to [prompt injection](/wiki/prompt_injection) attacks that steal sensitive data

4. **Malware Installation**: Possibility of downloading and executing malicious code

5. **Credential Exposure**: Risk of exposing API keys, passwords, and secrets[&#91;1&#93;](#cite_note-anthropic-security-1)

### Official Warnings

Anthropic's documentation explicitly states:

**
"Letting Claude run arbitrary commands is risky and can result in data loss, system corruption, or even data exfiltration (for example via prompt injection attacks)."[&#91;1&#93;](#cite_note-anthropic-security-1)

### Attack Vectors

- Prompt Injection**: Malicious instructions hidden in files or fetched content

- **Command Chaining**: Complex attack sequences bypassing security measures

- **Persistence Mechanisms**: Installation of backdoors or malware

- **Privilege Escalation**: Inheriting elevated permissions when run as root[&#91;6&#93;](#cite_note-ronacher-6)

## Technical Documentation

### Permission System Architecture

Claude Code uses a configurable permission system that is completely bypassed when using this flag:[&#91;1&#93;](#cite_note-anthropic-security-1)

- **Default Mode**: Strict read-only permissions by default

- **Permission Requests**: Additional actions (editing files, running tests, executing commands) require explicit permission

- **Configurable Tools**: Users can allow or deny specific tools:
**File Operations**: Read, Write, Edit, Create

- **Shell Commands**: Bash (with granular command filtering)

- **Network Tools**: WebFetch, WebSearch

- **MCP Tools**: Model Context Protocol server tools

**Granular Control**: Permissions can be set per-tool or with wildcards (for example `Bash(git:*)` for all git commands)
### Implementation Details

- **Affected Tools**: Edit, Write, Bash, WebFetch, MCP servers

- **Scope**: All operations execute without approval prompts

- **Persistence**: Flag must be specified each session

- **Configuration**: Cannot be permanently set in config files for safety[&#91;7&#93;](#cite_note-cli-reference-7)

### Integration with Other Features

Works with Claude Code's ecosystem:

- **MCP Servers**: All MCP tools execute without permission

- **Slash Commands**: Custom commands run unrestricted

- **Hooks**: Pre/post operation hooks execute automatically

- **Headless Mode**: Combines with `-p` flag for full automation[&#91;3&#93;](#cite_note-anthropic-best-practices-3)

## Official Anthropic Documentation

### Primary Sources

1. **CLI Reference**: Listed in official command-line documentation at `docs.anthropic.com/en/docs/claude-code/cli-reference`[&#91;7&#93;](#cite_note-cli-reference-7)

2. **Best Practices Guide**: Documented under "Safe YOLO mode" at `anthropic.com/engineering/claude-code-best-practices`[&#91;3&#93;](#cite_note-anthropic-best-practices-3)

3. **Security Documentation**: Detailed warnings at `docs.anthropic.com/s/claude-code-security`[&#91;1&#93;](#cite_note-anthropic-security-1)

### Official Recommendations

Anthropic strongly recommends:

- Using only in [Docker](/index.php?title=Docker&action=edit&redlink=1) containers without internet access

- Implementing the official [devcontainer](/index.php?title=Devcontainer&action=edit&redlink=1) reference configuration

- Maintaining comprehensive backup strategies

- Preferring granular `--allowedTools` configuration[&#91;1&#93;](#cite_note-anthropic-security-1)

### Container Reference Implementation

Anthropic provides an official Docker setup:

- Repository: `github.com/anthropics/claude-code/.devcontainer`

- Features: Custom firewall, network isolation, security boundaries

- Purpose: Safe environment for unrestricted operation[&#91;8&#93;](#cite_note-devcontainer-8)

## Context Within Claude Code Ecosystem

### Claude Code Overview

Claude Code is Anthropic's terminal-based AI coding assistant that:

- Provides CLI-first development workflows

- Integrates with [VS Code](/index.php?title=VS_Code&action=edit&redlink=1), [Cursor](/index.php?title=Cursor_(IDE)&action=edit&redlink=1), and [JetBrains](/index.php?title=JetBrains&action=edit&redlink=1) IDEs

- Supports Model Context Protocol (MCP) for extensibility

- Offers sophisticated context management[&#91;9&#93;](#cite_note-overview-9)

### Relationship to Other Tools

- **vs Cursor's YOLO Mode**: More granular control but similar risks[&#91;10&#93;](#cite_note-haihai-10)

- **vs [GitHub Copilot](/wiki/github_copilot)**: Offers autonomous execution vs inline suggestions

- **vs Traditional CLIs**: Adds AI reasoning to command execution

### Alternative Approaches

# Granular permissions (recommended)
claude --allowedTools "Edit,Bash(git:*),Read"

# Session-based approval
# Use Shift+Tab during session to toggle permissions

# Configuration file approach
# Set allowedTools in ~/.claude.json

## Security Implications

### Threat Model

1. **Immediate Risks**
- Accidental data destruction

- Exposure of sensitive information

- System configuration damage

2. **Attack Surface**
- Malicious repository content

- Compromised dependencies

- Prompt injection via documentation

3. **Blast Radius**
- Full access to user-accessible files

- Network access for data transmission

- Process manipulation capabilities[&#91;1&#93;](#cite_note-anthropic-security-1)

### Mitigation Strategies

1. **Container Isolation** (Strongly Recommended)
```
docker run -it --rm \
  -v "$(pwd):/workspace" \
  --network none \
  --read-only \
  claude-container

```

2. **Backup Systems**
- Hourly snapshots ([Arq](/index.php?title=Arq&action=edit&redlink=1), [Time Machine](/index.php?title=Time_Machine&action=edit&redlink=1))

- [Git](/index.php?title=Git&action=edit&redlink=1) commit before sessions

- Cloud backup synchronization

3. **Network Restrictions**
- Firewall rules limiting outbound traffic

- [DNS](/index.php?title=DNS&action=edit&redlink=1) filtering for known threats

- Proxy monitoring for suspicious activity[&#91;11&#93;](#cite_note-solberg-11)

## Best Practices for Usage

### For Individual Developers

1. **Start Conservative**
- Use standard permissions initially

- Gradually adopt `--allowedTools`

- Reserve dangerous mode for isolated tasks

2. **Implement Safeguards**
- Maintain comprehensive backups

- Use version control religiously

- Work in disposable environments

3. **Monitor Activity**
- Enable verbose logging

- Review executed commands

- Audit file modifications[&#91;3&#93;](#cite_note-anthropic-best-practices-3)

### For Teams and Organizations

1. **Policy Development**
- Establish clear usage guidelines

- Mandate containerization requirements

- Define acceptable use cases

2. **Infrastructure Support**
- Provide secure container environments

- Implement centralized logging

- Offer backup automation

3. **Training and Education**
- Security awareness programs

- Best practices documentation

- Incident response procedures[&#91;3&#93;](#cite_note-anthropic-best-practices-3)

### Community-Developed Solutions

1. **Docker Wrappers**
- `claude-code-yolo`: Full containerization with credential passthrough[&#91;12&#93;](#cite_note-claude-yolo-12)

- `claude-docker`: Development environment isolation

- Custom devcontainer configurations

2. **Safety Frameworks**
- Automated backup scripts

- Permission management tools

- Audit logging systems[&#91;13&#93;](#cite_note-claudebox-13)

## Related Commands and Flags

### Permission Management Flags

```
# Selective permission bypass
--allowedTools "Edit,Write,Bash(git:*)"

# Explicit tool blocking
--disallowedTools "Bash(rm:*),Bash(curl:*)"

# Debug MCP permissions
--mcp-debug

```

### Workflow Enhancement Flags

```
# Headless automation
-p, --print "prompt"

# Output formatting
--output-format json
--input-format stream-json

# Context management
--continue
--resume <session-id>
--add-dir <path>

```

### Configuration Commands

```
# View current permissions
claude config get allowedTools

# Manage MCP servers
claude mcp list
claude mcp add <n> <command>

# Initialize project
claude init

```

## Conclusion

The `--dangerously-skip-permissions` flag represents a powerful but risky feature in Claude Code's arsenal. While officially intended for isolated container environments, its adoption by the developer community highlights the tension between safety and productivity in AI-assisted development. Success with this flag requires understanding its risks, implementing appropriate safeguards, and maintaining disciplined development practices.

For most use cases, Anthropic's recommendation to use granular `--allowedTools` configuration provides a safer alternative that balances productivity with security. However, for developers who choose to use dangerous mode, the combination of container isolation, comprehensive backups, and careful monitoring can mitigate most risks while unlocking significant productivity gains.

As AI-assisted development continues to evolve, the patterns established around this flag, balancing automation with safety, community solutions for risk mitigation, and graduated trust models, will likely influence future tool design and best practices in the field.

## See Also

- [Claude Code](/wiki/claude_code)

- [Anthropic](/wiki/anthropic)

- [AI-assisted development](/index.php?title=AI-assisted_development&action=edit&redlink=1)

- [Prompt injection](/wiki/prompt_injection)

- [Docker](/index.php?title=Docker&action=edit&redlink=1)

- [Model Context Protocol](/index.php?title=Model_Context_Protocol&action=edit&redlink=1)

## External Links

- [Official Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)

- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

- [Claude Code GitHub Repository](https://github.com/anthropics/claude-code)

## References

1. ↑ [1.0](#cite_ref-anthropic-security_1-0) [1.1](#cite_ref-anthropic-security_1-1) [1.2](#cite_ref-anthropic-security_1-2) [1.3](#cite_ref-anthropic-security_1-3) [1.4](#cite_ref-anthropic-security_1-4) [1.5](#cite_ref-anthropic-security_1-5) [1.6](#cite_ref-anthropic-security_1-6) [1.7](#cite_ref-anthropic-security_1-7) Anthropic. "Security - Anthropic". Retrieved from [https://docs.anthropic.com/en/docs/claude-code/security](https://docs.anthropic.com/en/docs/claude-code/security)

2. ↑ [2.0](#cite_ref-steinberger_2-0) [2.1](#cite_ref-steinberger_2-1) Peter Steinberger. "Claude Code is My Computer". Retrieved from [https://steipete.me/posts/2025/claude-code-is-my-computer](https://steipete.me/posts/2025/claude-code-is-my-computer)

3. ↑ [3.0](#cite_ref-anthropic-best-practices_3-0) [3.1](#cite_ref-anthropic-best-practices_3-1) [3.2](#cite_ref-anthropic-best-practices_3-2) [3.3](#cite_ref-anthropic-best-practices_3-3) [3.4](#cite_ref-anthropic-best-practices_3-4) Anthropic. "Claude Code Best Practices". Retrieved from [https://www.anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices)

4. [↑](#cite_ref-tsai_4-0) Michael Tsai. "Claude Code Experience". Retrieved from [https://mjtsai.com/blog/2025/06/27/claude-code-experience/](https://mjtsai.com/blog/2025/06/27/claude-code-experience/)

5. [↑](#cite_ref-builder_5-0) Builder.io. "How I use Claude Code (+ my best tips)". Retrieved from [https://www.builder.io/blog/claude-code](https://www.builder.io/blog/claude-code)

6. [↑](#cite_ref-ronacher_6-0) Armin Ronacher. "Agentic Coding Recommendations". Retrieved from [https://lucumr.pocoo.org/2025/6/12/agentic-coding/](https://lucumr.pocoo.org/2025/6/12/agentic-coding/)

7. ↑ [7.0](#cite_ref-cli-reference_7-0) [7.1](#cite_ref-cli-reference_7-1) Anthropic. "CLI reference - Anthropic". Retrieved from [https://docs.anthropic.com/en/docs/claude-code/cli-reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference)

8. [↑](#cite_ref-devcontainer_8-0) Anthropic. "Development containers - Anthropic". Retrieved from [https://docs.anthropic.com/en/docs/claude-code/devcontainer](https://docs.anthropic.com/en/docs/claude-code/devcontainer)

9. [↑](#cite_ref-overview_9-0) Anthropic. "Claude Code overview - Anthropic". Retrieved from [https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview)

10. [↑](#cite_ref-haihai_10-0) HaiHai Labs. "Cursor Agent vs. Claude Code". Retrieved from [https://www.haihai.ai/cursor-vs-claude-code/](https://www.haihai.ai/cursor-vs-claude-code/)

11. [↑](#cite_ref-solberg_11-0) Jökull Sólberg. "Running Claude Code Safely in Devcontainers". Retrieved from [https://www.solberg.is/claude-devcontainer](https://www.solberg.is/claude-devcontainer)

12. [↑](#cite_ref-claude-yolo_12-0) GitHub. "claude-code-yolo". Retrieved from [https://github.com/thevibeworks/claude-code-yolo](https://github.com/thevibeworks/claude-code-yolo)

13. [↑](#cite_ref-claudebox_13-0) GitHub. "claudebox". Retrieved from [https://github.com/RchGrav/claudebox](https://github.com/RchGrav/claudebox)