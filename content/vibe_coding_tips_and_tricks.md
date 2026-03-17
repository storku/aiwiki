---
title: "Vibe Coding Tips and Tricks"
slug: "vibe_coding_tips_and_tricks"
categories:
  - "Tips_and_Tricks"
---*See also: [Vibe Coding](/wiki/vibe_coding)*

## Planning and Preparation

### Requirements, Not Solutions

- **Concept**: [LLMs](/wiki/llms) fill unspecified gaps with guesses from their [training data](/wiki/training_data), which might not align with your needs.

- **Tip**: Always spell out your requirements clearly before asking an LLM to code. For example, asking for a visualization might get you an SVG unless you specify "interactive," prompting a React app instead. Clear specs prevent chaos for both [AI](/wiki/ai) and human teams.

### Preparatory Refactoring

- **Concept**: Refactoring first makes changes easier, but LLMs tend to mash everything together without a plan.

- **Tip**: Refactor your code before tasking the LLM with new features. Without guidance, an LLM might fix an import error but also add unrelated (sometimes wrong) type annotations. Divide and conquer is key. Avoid letting the AI rewrite everything at once.

### Mise en Place

- **Concept**: A broken setup derails LLMs, much like missing ingredients ruin a recipe.

- **Tip**: Set up your environment (rules, [MCP](/index.php?title=MCP&action=edit&redlink=1) servers, docs) beforehand. [Vibe coding](/wiki/vibe_coding) a live production environment is like "randomly copy-pasting StackOverflow commands," disaster awaits.

### Walking Skeleton

- **Concept**: A minimal end-to-end system helps identify next steps early.

- **Tip**: Build a basic working system first, then flesh it out. LLMs shine here, letting you see what's next. This approach, credited to lessons from Stanford, has never been easier with AI.

## Code Structure and Management

### Keep Files Small

- **Concept**: Large files overwhelm LLM [context windows](/wiki/context_window) and slow down [tools](/index.php?title=Tools&action=edit&redlink=1).

- **Tip**: Split big files (such as 471KB) into smaller ones. Some LLMs struggle with 128KB files given a 200k token limit. Applying 55 edits to a 64KB file in [Cursor](/index.php?title=Cursor&action=edit&redlink=1) 0.45.17 lags too. LLMs can handle the import drudgery.

### Use Static Types

- **Concept**: Static types catch errors LLMs might miss, though [Python](/index.php?title=Python&action=edit&redlink=1) and [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) dominate their training.

- **Tip**: Use strict type checker settings (for example [TypeScript](/index.php?title=TypeScript&action=edit&redlink=1), [mypy](/index.php?title=Mypy&action=edit&redlink=1)) to guide LLMs via type errors. Some suggested types could auto-generate code from specs, which is worth exploring.

### Rule of Three

- **Concept**: Duplication is fine once or twice, but three times call for refactoring. LLMs don't naturally do this.

- **Tip**: [Prompt](/wiki/prompt) LLMs to refactor after the third instance. They'll copy-paste endlessly otherwise. Some argue that AI might stretch this to "10ish" within a file, but across files, three keep truth singular.

### Use Automatic Code Formatting

- **Concept**: LLMs falter at mechanical style rules (such as no trailing spaces).

- **Tip**: Use tools like *gofmt* or *black* to save LLM capacity for harder tasks. Don't waste tokens on lint fixes. Automation's better.

### Stateless Tools

- **Concept**: Tools with state (for example shell's working directory) confuse LLMs.

- **Tip**: Avoid stateful tools or run commands from one directory. Some LLMs can't track "cd" commands, so isolating workspaces (such as one per NPM module) helps.

## Task Execution

### Stop Digging

- **Concept**: LLMs grind away at bad tasks instead of pivoting.

- **Tip**: Pre-plan with a reasoning model or use a watchdog LLM to catch trouble. A [Monte Carlo test](/index.php?title=Monte_Carlo_test&action=edit&redlink=1) fix once spiraled into relaxed conditions instead of a deterministic refactor.

### Bulldozer Method

- **Concept**: LLMs excel at brute-force tasks humans avoid.

- **Tip**: Let them plow through mass refactoring (for example in [Haskell](/index.php?title=Haskell&action=edit&redlink=1)). Inspect the output and they won't self-improve like humans.

### Black Box Testing

- **Concept**: LLMs peek at implementations, breaking black-box principles.

- **Tip**: Mask internals to enforce boundaries. One case saw an LLM compute a test constant from code instead of preserving it.

### Respect the Spec

- **Concept**: LLMs might tweak APIs or delete tests unless constrained.

- **Tip**: Review changes to keep specs intact. An LLM once replaced a test with "assert True".

## Debugging and Review

### Scientific Debugging

- **Concept**: LLMs guess fixes instead of reasoning systematically.

- **Tip**: Use [reasoning models](/index.php?title=Reasoning_models&action=edit&redlink=1) (such as [Grok 3](/index.php?title=Grok_3&action=edit&redlink=1)) or root cause yourself and guide the AI. Avoid vibe-guessing loops.

### Memento

- **Concept**: LLMs lack memory beyond context, like the movie *Memento*’s protagonist.

- **Tip**: Feed docs and context explicitly. A misloaded file can derail an LLM, like rewriting a README for testing.

### The Tail Wagging the Dog

- **Concept**: Irrelevant context distracts LLMs from the main goal.

- **Tip**: Prompt carefully. [Claude Code](/wiki/claude_code)'s subagent trick keeps focus.

### Know Your Limits

- **Concept**: LLMs won't admit ignorance without prompting.

- **Tip**: Give tools or refine prompts to avoid tangents. An LLM once faked shell calls with scripts.

## Culture and Style

### Culture Eats Strategy

- **Concept**: LLMs reflect their "latent space" (prompts, codebase, fine-tuning).

- **Tip**: Shift its culture to match your style. One case async'd a codebase to steer an LLM off-sync Python.

### Read the Docs

- **Concept**: LLMs hallucinate without docs for niche frameworks.

- **Tip**: Feed manuals via Cursor's URL drop. One fix resolved YAML errors this way.

### Use MCP Servers

- **Concept**: [Model Context Protocol servers](/index.php?title=Model_Context_Protocol_server&action=edit&redlink=1) enhance context fetching.

- **Tip**: Use [Cursor Agent](/index.php?title=Cursor_Agent&action=edit&redlink=1) mode with [Anthropic](/wiki/anthropic)'s built-ins; they're safer than shell YOLO mode.

## Examples from Practice

- **Nondeterministic Chaos**: An LLM was asked to fix Monte Carlo tests, but it relaxed conditions instead of spotting nondeterminism, plan ahead.

- **Test Overhaul**: An LLM turned a hardcoded test constant into a computed one, breaking black-box rules and mask implementations.

- **Directory Confusion**: In a TypeScript monorepo, an LLM lost track of *cd* commands, single-directory setups saved the day.

- ** Type Annotation Mess**: Fixing an import, an LLM added wrong type hints, pre-refactor or limit scope.

- **Spec Violation**: An LLM renamed a dict key *pass* to *pass_* in a public API, review for alignment.

## Community Insights and Workflow Recommendations

Community discussions highlight:

- LLMs err differently from humans: our intuition fails, so design workflows to catch AI-specific mistakes.

- They're like "very smart junior programmers": broad knowledge, weak big-picture thinking.

- Pairing with an LLM feels like arguing with a stubborn intern: great for tedium, awful for precision.

- Don't bank on future fixes: these issues might linger, so plan for today.

**Workflow Recommendations**:

- ** Plan Before Coding**: Use a reasoning model to outline tasks and break them into small, clear steps.

- **Sandbox Changes**: Test LLM outputs in isolation (for example, a branch) before merging.

- **Iterate and Review**: Refine prompts iteratively, checking each change against specs.

- ** Leverage Automation**: Pair LLMs with linters and formatters for mechanical fixes.

- **Maintain Context**: Keep docs and rules handy. LLMs need constant grounding.

## Tools and Models

- **[Cursor](/index.php?title=Cursor&action=edit&redlink=1)**: A go-to tool with integration and agent mode, praised for QoL (like TAB completion).

- **[Sonnet 3.7](/index.php?title=Sonnet_3.7&action=edit&redlink=1)**: Strong for coding but quirky, excels at brute force, falters at reasoning.

- "[MCP Servers](/index.php?title=MCP_Server&action=edit&redlink=1)": Enhance context fetching, which is safer than raw shell access.