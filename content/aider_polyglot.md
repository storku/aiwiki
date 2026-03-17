---
title: "Aider Polyglot"
slug: "aider_polyglot"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "Multi-language_Benchmarks"
  - "2024_Benchmarks"
---**

| Aider Polyglot |
| --- |
| Overview |
| Full name | Aider Polyglot Coding Benchmark |
| Abbreviation | Aider Polyglot |
| Description | A challenging multi-language code generation benchmark testing LLMs on 225 difficult Exercism coding exercises across six programming languages |
| Release date | 2024-12-21 |
| Latest version | 1.0 |
| Benchmark updated | 2025-08-13 |
| Authors | [Paul Gauthier](/index.php?title=Paul_Gauthier&action=edit&redlink=1) |
| Organization | [Aider AI](/index.php?title=Aider_AI&action=edit&redlink=1) |
| Technical Details |
| Type | [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Code Editing](/index.php?title=Code_Editing&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [Code completion and editing](/index.php?title=Code_completion_and_editing&action=edit&redlink=1) |
| Number of tasks | 225 |
| Total examples | 225 |
| Evaluation metric | [Percent Correct](/index.php?title=Percent_Correct&action=edit&redlink=1), [Edit Format Accuracy](/index.php?title=Edit_Format_Accuracy&action=edit&redlink=1) |
| Domains | [Software Engineering](/index.php?title=Software_Engineering&action=edit&redlink=1), [Programming](/wiki/programming) |
| Languages | C++, Go, Java, JavaScript, Python, Rust |
| Performance |
| Human performance | Not reported |
| Baseline | 3.6% (GPT-4o-mini) |
| SOTA score | 84.9% (standard model), 92.9% (agent system) |
| SOTA model | [o3-pro (high) / Refact.ai Agent](/index.php?title=O3-pro_(high)_/_Refact.ai_Agent&action=edit&redlink=1) |
| SOTA date | 2025-08 |
| Saturated | No |
| Resources |
| Website | [Official website](https://aider.chat/docs/leaderboards/) |
| GitHub | [Repository](https://github.com/Aider-AI/polyglot-benchmark) |
| Dataset | [Download](https://github.com/Aider-AI/polyglot-benchmark) |
| Predecessor | [Aider Code Editing Benchmark](/index.php?title=Aider_Code_Editing_Benchmark&action=edit&redlink=1) |

Aider Polyglot** is a challenging [code generation](/index.php?title=Code_generation&action=edit&redlink=1) benchmark that evaluates [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' ability to solve complex programming problems across six major programming languages. Released on December 21, 2024, by [Aider AI](/index.php?title=Aider_AI&action=edit&redlink=1) creator [Paul Gauthier](/index.php?title=Paul_Gauthier&action=edit&redlink=1), the benchmark consists of 225 carefully selected [Exercism](/index.php?title=Exercism&action=edit&redlink=1) coding exercises designed to test models' capabilities in [C++](/index.php?title=C%2B%2B&action=edit&redlink=1), [Go](/index.php?title=Go&action=edit&redlink=1), [Java](/index.php?title=Java&action=edit&redlink=1), [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1), [Python](/index.php?title=Python&action=edit&redlink=1), and [Rust](/index.php?title=Rust&action=edit&redlink=1). It represents a significant evolution from the original Python-only Aider benchmark, providing better differentiation between frontier models through increased difficulty and language diversity.

## Overview

Aider Polyglot was created to address the saturation of existing code generation benchmarks, where top models were achieving 80%+ scores, making meaningful comparisons difficult. The benchmark specifically tests whether AI can write new code that integrates seamlessly into existing codebases and successfully apply changes to source files without human intervention.

### Design Philosophy

The benchmark was designed with several key objectives:

- **Prevent Saturation**: Re-calibrate scoring so top LLMs occupy 5-50% range

- **Language Diversity**: Test across multiple programming paradigms and syntax styles

- **Real-World Relevance**: Focus on practical code editing rather than generation from scratch

- **Difficulty Balance**: Select problems that challenge but don't completely stump models

### Problem Selection Methodology

The 225 problems were carefully selected from 697 available Exercism exercises through empirical testing:
1. Seven top coding models attempted all 697 problems
2. Problems solved by 3 or fewer models were selected
3. Final set balanced difficulty across languages
4. Ensured sufficient headroom for future model improvements

## Technical Specifications

### Language Distribution

The benchmark's 225 problems are distributed across six programming languages:

| Language | Number of Problems | Percentage | Paradigm |
| --- | --- | --- | --- |
| [JavaScript](/index.php?title=JavaScript&action=edit&redlink=1) | 49 | 21.8% | Multi-paradigm, Dynamic |
| [Java](/index.php?title=Java&action=edit&redlink=1) | 47 | 20.9% | Object-oriented, Static |
| [Go](/index.php?title=Go&action=edit&redlink=1) | 39 | 17.3% | Concurrent, Static |
| [Python](/index.php?title=Python&action=edit&redlink=1) | 34 | 15.1% | Multi-paradigm, Dynamic |
| [Rust](/index.php?title=Rust&action=edit&redlink=1) | 30 | 13.3% | Systems, Memory-safe |
| [C++](/index.php?title=C%2B%2B&action=edit&redlink=1) | 26 | 11.6% | Multi-paradigm, Systems |
| **Total** | **225** | **100%** | Various |

### Evaluation Methodology

#### Primary Metrics

| Metric | Description | Significance |
| --- | --- | --- |
| Percent Correct | Percentage of problems solved correctly | Primary performance indicator |
| Edit Format Accuracy | Percentage using correct diff format | Implementation quality measure |
| Cost | Average cost per problem attempt | Efficiency metric |
| Pass Rate | Problems passing all test cases | Functional correctness |

#### Edit Format Requirements

The benchmark requires models to:

- Generate precise search-and-replace instructions

- Use proper diff format for code modifications

- Apply changes without breaking existing code

- Maintain code style and conventions

### Problem Characteristics

Problems in Aider Polyglot typically involve:

- **Algorithm Implementation**: Sorting, searching, graph algorithms

- **Data Structure Manipulation**: Trees, lists, maps, custom structures

- **String Processing**: Parsing, transformation, pattern matching

- **Mathematical Computation**: Number theory, geometry, statistics

- **System Design**: API design, class hierarchies, module organization

## Performance Analysis

### Official Leaderboard (August 13, 2025)

| Rank | Model | Percent Correct | Cost | Organization |
| --- | --- | --- | --- | --- |
| 1 | [o3-pro](/index.php?title=O3-pro&action=edit&redlink=1) (high) | 84.9% | $146.32 | [OpenAI](/wiki/openai) |
| 2 | [gemini-2.5-pro-preview](/index.php?title=Gemini-2.5-pro-preview&action=edit&redlink=1) (32k think) | 83.1% | $49.88 | [Google DeepMind](/wiki/google_deepmind) |
| 3 | [o3](/index.php?title=O3&action=edit&redlink=1) (high) | 81.3% | $21.23 | [OpenAI](/wiki/openai) |
| 4 | [Grok-4](/index.php?title=Grok-4&action=edit&redlink=1) (high) | 79.6% | $59.62 | [xAI](/wiki/xai) |
| 5 | [gemini-2.5-pro-preview](/index.php?title=Gemini-2.5-pro-preview&action=edit&redlink=1) (default think) | 79.1% | $19.29 | [Google DeepMind](/wiki/google_deepmind) |
| 6 | [o1](/index.php?title=O1&action=edit&redlink=1) (high) | 61.7% | $74.66 | [OpenAI](/wiki/openai) |
| 7 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 45.3% | $3.12 | [Anthropic](/wiki/anthropic) |
| 8 | [Gemini Experimental](/index.php?title=Gemini_Experimental&action=edit&redlink=1) | 38.2% | - | [Google DeepMind](/wiki/google_deepmind) |
| 9 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~25% | - | [OpenAI](/wiki/openai) |
| 10 | [GPT-4o-mini](/index.php?title=GPT-4o-mini&action=edit&redlink=1) | 3.6% | $0.14 | [OpenAI](/wiki/openai) |

### Agent System Performance

In addition to standard model evaluations, agent systems have achieved higher scores:

| Agent System | Base Model | Score | Date | Notes |
| --- | --- | --- | --- | --- |
| [Refact.ai](/index.php?title=Refact.ai&action=edit&redlink=1) Agent | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | 92.9% | April 2025 | 30 steps, enforced test execution |
| [Refact.ai](/index.php?title=Refact.ai&action=edit&redlink=1) Agent (Thinking) | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | 93.3% | April 2025 | With thinking mode enabled |
| Aider | Various | 60.4% | 2024 | Original agent baseline |

Note: Agent systems use iterative approaches with multiple attempts and self-correction, achieving higher scores than single-pass model evaluations.

### Performance Trends

#### Initial Release (December 2024)

- [o1](/index.php?title=O1&action=edit&redlink=1) topped the initial leaderboard with 61.7%

- Top models occupied the 5-50% range as intended

- Clear differentiation between model capabilities

#### Evolution (2024-2025)

- Rapid improvements in reasoning models

- Introduction of "thinking" modes in models

- Agent systems pushing boundaries beyond 90%

#### Language-Specific Performance

While detailed per-language scores aren't publicly available, analysis suggests:

- **Easiest**: Python, JavaScript (familiar syntax, extensive training data)

- **Moderate**: Java, Go (structured, well-documented)

- **Hardest**: Rust, C++ (complex memory management, ownership semantics)

### Model Categories Performance

| Category | Score Range | Examples | Characteristics |
| --- | --- | --- | --- |
| Frontier Reasoning | 75-85% | o3-pro, gemini-2.5-pro | Advanced reasoning, high compute |
| Agent Systems | 85-93% | Refact.ai Agent | Iterative, self-correcting |
| Top Tier | 45-75% | Claude 3.5, o1 | Strong general capability |
| Mid Tier | 15-45% | GPT-4o, older models | Good but limited on complex tasks |
| Entry Level | <15% | GPT-4o-mini, open models | Basic capability, frequent failures |

## Comparison with Other Benchmarks

### vs Original Aider Benchmark

| Aspect | Original Aider | Aider Polyglot |
| --- | --- | --- |
| Languages | Python only | 6 languages |
| Problems | 133 (all Exercism Python) | 225 (hardest from 697) |
| Top Score | 84.2% (saturating) | 84.9% (room for growth) |
| Difficulty | Moderate | High |
| Release | 2023 | December 21, 2024 |

### vs Other Code Benchmarks

#### [SWE-bench](/wiki/swe-bench)

- **Similarity**: Real-world code editing tasks

- **Difference**: Aider Polyglot uses cleaner, self-contained problems

- **Advantage**: More reliable evaluation, less ambiguity

#### [HumanEval](/wiki/humaneval)

- **Similarity**: Code generation from description

- **Difference**: Aider Polyglot requires editing existing code

- **Advantage**: Better reflects real development workflows

#### [MBPP](/index.php?title=MBPP&action=edit&redlink=1)

- **Similarity**: Multiple programming problems

- **Difference**: Aider Polyglot spans multiple languages

- **Advantage**: Tests language-agnostic programming ability

## Implementation Details

### Testing Infrastructure

The benchmark employs:

- **Exercism Test Suites**: Comprehensive unit tests for each problem

- **Language-Specific Runners**: Native testing frameworks for each language

- **Automated Validation**: Immediate feedback on solution correctness

- **Diff Application**: Tools to apply model-generated edits

### Problem Structure

Each problem includes:
1. **Starter Code**: Initial implementation skeleton
2. **Test Suite**: Comprehensive unit tests
3. **Instructions**: Problem description and requirements
4. **Expected Output**: Reference solution behavior

### Evaluation Process

| Step | Action | Validation |
| --- | --- | --- |
| 1 | Model receives problem description and starter code | Input formatting check |
| 2 | Model generates edit instructions | Diff format validation |
| 3 | Edits applied to source files | Syntax verification |
| 4 | Test suite executed | Functional correctness |
| 5 | Results recorded | Performance metrics |

## Significance and Impact

### Industry Implications

- **Model Development**: Drives improvements in code reasoning capabilities

- **Tool Integration**: Influences AI coding assistant design

- **Hiring Standards**: Provides objective measure of coding capability

- **Research Direction**: Guides focus on multi-language proficiency

### Research Value

The benchmark provides insights into:

- **Cross-Language Transfer**: How well models generalize across languages

- **Problem-Solving Strategies**: Common approaches and failure modes

- **Edit Format Understanding**: Models' ability to work with existing code

- **Reasoning Depth**: Correlation between thinking time and performance

## Limitations and Criticisms

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Limited Languages | Only 6 languages covered | Misses domain-specific languages |
| Exercism Focus | All problems from one source | Potential style bias |
| Static Dataset | Fixed 225 problems | Risk of overfitting |
| Edit Format | Specific diff requirement | May not match all workflows |
| No Debugging | Only generation tested | Misses fix/refactor capabilities |

### Methodological Concerns

- **Problem Selection Bias**: Selection based on initial model performance

- **Language Imbalance**: Uneven distribution across languages

- **Test Coverage**: May not capture all programming skills

- **Version Control**: No git integration or collaboration testing

## Future Directions

### Planned Improvements

- **Language Expansion**: Adding TypeScript, Swift, Kotlin

- **Problem Diversity**: Including debugging, refactoring tasks

- **Dynamic Generation**: Procedural problem creation

- **Collaboration Testing**: Multi-agent coding scenarios

### Research Opportunities

- **Language-Specific Optimization**: Tailored approaches per language

- **Transfer Learning**: Leveraging knowledge across languages

- **Edit Strategy**: Optimal diff generation techniques

- **Error Recovery**: Handling compilation and runtime errors

## Related Benchmarks

- **[SWE-bench](/wiki/swe-bench)**: Software engineering tasks

- **[HumanEval](/wiki/humaneval)**: Python code generation

- **[MBPP](/index.php?title=MBPP&action=edit&redlink=1)**: Python programming problems

- **[CodeContests](/index.php?title=CodeContests&action=edit&redlink=1)**: Competitive programming

- **[APPS](/index.php?title=APPS&action=edit&redlink=1)**: Algorithmic problem solving

- **[MultiPL-E](/index.php?title=MultiPL-E&action=edit&redlink=1)**: Multi-language evaluation

- **[CodeXGLUE](/index.php?title=CodeXGLUE&action=edit&redlink=1)**: Code understanding and generation

## See Also

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [Programming Language Models](/index.php?title=Programming_Language_Models&action=edit&redlink=1)

- [AI Pair Programming](/index.php?title=AI_Pair_Programming&action=edit&redlink=1)

- [Exercism](/index.php?title=Exercism&action=edit&redlink=1)

- [Software Engineering AI](/index.php?title=Software_Engineering_AI&action=edit&redlink=1)

- [Multi-language Programming](/index.php?title=Multi-language_Programming&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "aider_polyglot" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "leaderboard" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "refact" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "medium_refact" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "llmdb" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "claude37" defined in `<references>` has group attribute "" which does not appear in prior text.