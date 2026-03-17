---
title: "Cursor Rules"
slug: "cursor_rules"
categories:
  - "Stubs"
  - "Terms"
  - "Artificial_intelligence_terms"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Cursor_Rules&action=edit).* 

*See also: [Artificial intelligence terms](/wiki/artificial_intelligence_terms)*
Cursor Rules are a key feature in [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1), an AI-powered code editor forked from [VS Code](/index.php?title=VS_Code&action=edit&redlink=1), designed to assist developers by generating code, suggesting edits, and automating repetitive tasks. These rules allow users to define custom instructions that guide the AI's behavior, tailoring its output to meet project-specific needs, coding standards, and personal preferences. Historically stored in a single [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1) file, they are now typically organized as [.mdc](/index.php?title=.mdc&action=edit&redlink=1) files within nested [/rules](/index.php?title=/rules&action=edit&redlink=1) directories in a project's root or subdirectories, offering a mechanism to enhance the AI's context awareness and consistency.

## Overview

### What Are Cursor Rules?

Cursor Rules are text-based instructions that developers provide to [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) to influence how it generates and edits code. They serve as a way to "teach" the AI about your project’s conventions, structure, and requirements, reducing the need for repetitive manual corrections and improving the relevance of its suggestions.

### Why Use Cursor Rules?

The benefits of using Cursor Rules include:

1. **Customized AI Behavior**: Tailor the AI’s output to align with your project’s specific needs, such as preferred libraries, frameworks, or coding patterns.

2. **Consistency**: Enforce coding standards (for example [DRY](/index.php?title=DRY&action=edit&redlink=1) principles, proper typing) across your codebase.

3. **Context Awareness**: Provide details about your project’s purpose, file structure, or commonly used functions, leading to more accurate suggestions and fewer "hallucinations" (for example fictional functions).

4. **Improved Productivity**: Reduce manual editing by preemptively addressing recurring issues or preferences, allowing faster development of boilerplate or repetitive code.

5. **Team Alignment**: Share rules with team members to ensure consistent AI assistance across collaborative projects.

6. **Problem Mitigation**: Address specific issues, such as "Do not revert nullish coalescing operators in [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) code," to prevent repeated mistakes.

Without rules, [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) relies solely on its training data and immediate prompt context, which can result in generic or suboptimal output. Cursor Rules bridge this gap by embedding project-specific knowledge into the AI’s decision-making process.

## Setting Up Your Cursor Rules

### Basic Setup

1. **Locate or Create the Rules File**:

- Historically, [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) used a single [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1) file in the project root. As of version 0.47.x, it supports nested [.cursor/rules/*.mdc](/index.php?title=.cursor/rules/*.mdc&action=edit&redlink=1) files for granular control (for example in [monorepos](/index.php?title=Monorepos&action=edit&redlink=1)).

- To create a new rule: Open [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1), press Cmd+Shift+P (or Ctrl+Shift+P), and select "[New Cursor Rule](/index.php?title=New_Cursor_Rule&action=edit&redlink=1)". This generates an [.mdc](/index.php?title=.mdc&action=edit&redlink=1) file in the appropriate directory.

2. **Add Instructions**:

- Write plain text or structured instructions. Start with a brief project overview, followed by specific guidelines.

- Example:

  # Project Overview
 This is a Next.js project using TypeScript, Tailwind CSS, and Supabase for authentication and database management.

 # Rules
 - Use nullish coalescing (??) instead of || for default values in JavaScript/TypeScript.
 - Follow a flat file structure: no nested folders beyond /components, /lib, and /pages.
 - Prefer functional components over class components in React.
 
3. **Apply and Test**:

- Save the file. [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) automatically applies the rules to its suggestions within the project scope.

- Test by asking the AI to generate code and verify adherence to your instructions.

### Finding Inspiration

- **Community Resources**: Explore repositories like [Awesome CursorRules](/index.php?title=Awesome_CursorRules&action=edit&redlink=1) ([GitHub](/index.php?title=GitHub&action=edit&redlink=1) link) for curated [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1) examples across stacks (for example [React](/index.php?title=React&action=edit&redlink=1), [Python](/index.php?title=Python&action=edit&redlink=1), [Go](/index.php?title=Go&action=edit&redlink=1)).

- **Adapt and Simplify**: Copy relevant rules for your tech stack, but keep them minimal to avoid overwhelming the AI with excessive input.

## Best Practices for Using Cursor Rules

### Keep It Simple

- Start with a minimal set of rules (for example 5-10 lines) and expand as needed. Overloading the file with details can confuse the AI or degrade performance.

- Example: Instead of listing every best practice ([DRY](/index.php?title=DRY&action=edit&redlink=1), [SOLID](/index.php?title=SOLID&action=edit&redlink=1)), focus on project-specific quirks, like "Always use [fetch](/index.php?title=Fetch&action=edit&redlink=1) over [axios](/index.php?title=Axios&action=edit&redlink=1) for API calls."

### Address Recurring Issues

- If the AI repeatedly makes mistakes (for example forgetting nullish coalescing in [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1)), add a rule:

  Use ?? for default values instead of || in JavaScript/TypeScript.
 
- For dynamic fixes, ask [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) in a chat: "Write me a [Cursor Rule](/index.php?title=Cursor_Rule&action=edit&redlink=1) to stop doing X," and append the output to your rules file.

### Provide Project Context

- Include a brief description of the project and its structure at the top:

 ```
 This is a Django app with a REST API, using PostgreSQL and structured as: /apps, /core, /utils.
 
```

- This helps the AI understand the bigger picture without needing constant manual context in prompts.

### Use Nested Rules for Large Projects

- In [monorepos](/index.php?title=Monorepos&action=edit&redlink=1) or complex projects, leverage nested [.cursor/rules/*.mdc](/index.php?title=.cursor/rules/*.mdc&action=edit&redlink=1) files for specific subdirectories:
[/rules/frontend.mdc](/index.php?title=/rules/frontend.mdc&action=edit&redlink=1) for [React](/index.php?title=React&action=edit&redlink=1)-specific rules.

- [/rules/backend.mdc](/index.php?title=/rules/backend.mdc&action=edit&redlink=1) for [Python](/index.php?title=Python&action=edit&redlink=1)/[Django](/index.php?title=Django&action=edit&redlink=1) rules.

### Pair with Manual Context

- Combine rules with explicit file references in prompts (for example @utils.ts @schedule.ts) to guide the AI to relevant code, enhancing accuracy without bloating the rules file.

## Tips for Optimizing Cursor AI with Rules

### General Workflow Tips

- **Use [Composer](/index.php?title=Composer&action=edit&redlink=1) (Agent) Sparingly**: Reserve [Composer](/index.php?title=Composer&action=edit&redlink=1) for simple, low-impact changes (for example boilerplate generation). Use [Chat (Ask)](/index.php?title=Chat_(Ask)&action=edit&redlink=1) for complex tasks to maintain control over edits.

- **Review Every Change**: Never blindly accept AI-generated code. Treat it like a junior developer’s [pull request](/index.php?title=Pull_request&action=edit&redlink=1), verify it works and fits your intent.

- **Ask Clarifying Questions**: Prompt the AI with "Is this the best way to do this?" or "Have you considered X?" to refine its output.

- **Break Down Big Tasks**: For foundational features, ask the AI to pose questions first (for example "What questions do you have before coding this?") to ensure it understands requirements.

### Avoiding Common Pitfalls

- **Bug Fixing Caution**: [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) struggles with complex bug fixes, often introducing new issues. Use it for trivial bugs only; manually handle critical ones.

- **Over-Reliance**: Regularly refactor key code manually to maintain understanding and improve future AI outputs. Over-dependence can atrophy coding skills, especially for juniors.

- **Context Overload**: Too much input (long rules or chats) can degrade output quality. Keep interactions concise.

- **Secrets Management**: Add sensitive files (for example [.env](/index.php?title=.env&action=edit&redlink=1)) to [.cursorignore](/index.php?title=.cursorignore&action=edit&redlink=1) to prevent accidental exposure.

### Language and Stack Considerations

- [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1)’s performance varies by language and stack. It excels with popular frameworks like [Next.js](/index.php?title=Next.js&action=edit&redlink=1), [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1), and [Python](/index.php?title=Python&action=edit&redlink=1) but may falter with less common ones like [Elixir](/index.php?title=Elixir&action=edit&redlink=1). Adjust rules and expectations accordingly.

## Example Cursor Rules

Here’s a sample [.mdc](/index.php?title=.mdc&action=edit&redlink=1) file for a typical web project:

```
# Project Overview
A Next.js 15 app with React 19, TypeScript, Tailwind CSS, and Vercel AI SDK. Uses a monorepo structure with /apps and /packages.

# Rules
- Use ?? over || for default values in TypeScript.
- Prefer arrow functions over function declarations.
- Organize components in /apps/web/components with a flat structure.
- Use Tailwind classes over inline CSS.
- Avoid unnecessary null checks; trust TypeScript's type system unless specified.

```

## Advanced Usage

- **Dynamic Rules**: Ask [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) to generate rules on the fly (for example "Create a rule to enforce X") and append them to your file.

- **Team Collaboration**: Share [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1) files via version control to align AI behavior across a team.

- **Experimentation**: Test different models (for example [Claude 3.7](/index.php?title=Claude_3.7&action=edit&redlink=1), [DeepSeek R1](/index.php?title=DeepSeek_R1&action=edit&redlink=1)) with your rules to find the best fit for your stack.

## Limitations and Considerations

- **AI Variability**: Output quality depends on the underlying model (for example [Claude](/wiki/claude), [GPT](/wiki/gpt)), which may change with updates or degrade over time.

- **Skill Atrophy**: Overuse without manual coding can weaken reasoning and problem-solving skills, a concern echoed by developers on [Hacker News](/index.php?title=Hacker_News&action=edit&redlink=1).

- **Cost and Context**: [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1)’s flat-fee model may lead to context pruning, reducing effectiveness for large codebases. Alternatives like [Cline](/index.php?title=Cline&action=edit&redlink=1) (pay-per-token) might offer better control.

## How to Use

### Method One (Manual)

1. Install [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1) (or update to the latest version).

2. Create a [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1) or [.mdc](/index.php?title=.mdc&action=edit&redlink=1) file in your project’s root or via Cmd+Shift+P → [New Cursor Rule](/index.php?title=New_Cursor_Rule&action=edit&redlink=1).

3. Populate with guidelines, references, and known pitfalls.

4. Test and refine based on AI output.

### Method Two (Using Extension)

1. Install [Cursor AI](/index.php?title=Cursor_AI&action=edit&redlink=1).

2. Install the [vscode-cursor-rules](/index.php?title=Vscode-cursor-rules&action=edit&redlink=1) extension (if available).

3. Open the command palette (Cmd+Shift+P or Ctrl+Shift+P) and select “Cursor Rules: Add [.cursorrules](/index.php?title=.cursorrules&action=edit&redlink=1).”

4. Choose a template and customize.

## Resources

- [Awesome CursorRules](https://github.com/PatrickJS/awesome-cursorrules)]: A [GitHub](/index.php?title=GitHub&action=edit&redlink=1) repository (link) with a collection of [[.cursorrules] examples for various stacks.

- [Cursor Forum](/index.php?title=Cursor_Forum&action=edit&redlink=1): Official support and user discussions (link).

*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Cursor_Rules&action=edit).*