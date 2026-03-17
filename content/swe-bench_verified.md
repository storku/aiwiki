---
title: "SWE-bench Verified"
slug: "swe-bench_verified"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Software_Engineering_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "2024_Benchmarks"
  - "Princeton_University"
  - "OpenAI"
---**

| SWE-bench Verified |
| --- |
| Overview |
| Full name | Software Engineering Benchmark - Verified |
| Abbreviation | SWE-bench V |
| Description | A human-validated subset of real-world GitHub issues for evaluating AI models' autonomous software engineering capabilities |
| Release date | 2024-08-13 |
| Latest version | 1.0 |
| Benchmark updated | 2024-08 |
| Authors | [Carlos E. Jimenez](/index.php?title=Carlos_E._Jimenez&action=edit&redlink=1), [John Yang](/index.php?title=John_Yang&action=edit&redlink=1), [Alexander Wettig](/index.php?title=Alexander_Wettig&action=edit&redlink=1), [Shunyu Yao](/index.php?title=Shunyu_Yao&action=edit&redlink=1), [Kexin Pei](/index.php?title=Kexin_Pei&action=edit&redlink=1), [Ofir Press](/index.php?title=Ofir_Press&action=edit&redlink=1), [Karthik Narasimhan](/index.php?title=Karthik_Narasimhan&action=edit&redlink=1) |
| Organization | [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), [OpenAI](/wiki/openai) |
| Technical Details |
| Type | [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Bug Fixing](/index.php?title=Bug_Fixing&action=edit&redlink=1), [Software Engineering](/index.php?title=Software_Engineering&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [GitHub issue resolution](/index.php?title=GitHub_issue_resolution&action=edit&redlink=1) |
| Number of tasks | 500 |
| Total examples | 500 verified issues |
| Evaluation metric | [Resolve rate](/index.php?title=Resolve_rate&action=edit&redlink=1), [Test pass rate](/index.php?title=Test_pass_rate&action=edit&redlink=1) |
| Domains | [Web frameworks](/index.php?title=Web_frameworks&action=edit&redlink=1), [Scientific computing](/index.php?title=Scientific_computing&action=edit&redlink=1), [Documentation](/index.php?title=Documentation&action=edit&redlink=1), [Machine learning](/wiki/machine_learning) |
| Languages | Python |
| Performance |
| Human performance | 100% (verified solvable) |
| Baseline | 33.2% (GPT-4o at launch) |
| SOTA score | 74.5% |
| SOTA model | [Claude Opus 4.1](/index.php?title=Claude_Opus_4.1&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://www.swebench.com/) |
| Paper | [Paper](https://arxiv.org/abs/2310.06770) |
| GitHub | [Repository](https://github.com/SWE-bench/SWE-bench) |
| Dataset | [Download](https://huggingface.co/datasets/princeton-nlp/SWE-bench_Verified) |
| License | MIT |
| Predecessor | [SWE-bench](/wiki/swe-bench) |

SWE-bench Verified** is a rigorously validated [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) [benchmark](/wiki/benchmark) designed to evaluate [artificial intelligence](/wiki/artificial_intelligence) models' ability to autonomously resolve real-world [GitHub](/index.php?title=GitHub&action=edit&redlink=1) issues. Released on August 13, 2024, through a collaboration between [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1) and [OpenAI](/wiki/openai) Preparedness, SWE-bench Verified consists of 500 carefully selected and human-verified problems from the original [SWE-bench](/wiki/swe-bench) dataset. Each problem requires an AI model to understand a bug report or feature request, navigate a complex codebase, write solution code, and ensure all tests pass, mirroring the complete workflow of a professional software engineer.

## Overview

SWE-bench Verified addresses critical limitations in the original SWE-bench dataset by ensuring all included problems are solvable and fairly evaluated. The benchmark tests whether AI systems can perform end-to-end software engineering tasks: from understanding issue descriptions to implementing working solutions that pass comprehensive test suites[&#91;1&#93;](#cite_note-openai2024-1).

### Motivation

The creation of SWE-bench Verified was motivated by several factors:

- **Quality Issues**: 68.3% of original SWE-bench samples had problems with underspecified descriptions or unfair test criteria

- **Evaluation Reliability**: Need for accurate measurement of AI coding capabilities

- **Real-World Relevance**: Focus on actual software engineering tasks rather than synthetic problems

- **Autonomous Capability**: Testing complete problem-solving rather than code completion

## Problem Characteristics

### Repository Distribution

SWE-bench Verified draws from 12 popular Python open-source projects:

| Repository | Description | Approximate % of Dataset |
| --- | --- | --- |
| [Django](/index.php?title=Django&action=edit&redlink=1) | Web framework | ~45% |
| [SymPy](/index.php?title=SymPy&action=edit&redlink=1) | Symbolic mathematics | ~15% |
| [Sphinx](/index.php?title=Sphinx&action=edit&redlink=1) | Documentation generator | ~10% |
| [Matplotlib](/wiki/matplotlib) | Plotting library | ~8% |
| [Scikit-learn](/wiki/scikit-learn) | Machine learning library | ~7% |
| [Flask](/index.php?title=Flask&action=edit&redlink=1) | Micro web framework | ~5% |
| [Requests](/index.php?title=Requests&action=edit&redlink=1) | HTTP library | ~3% |
| [Pytest](/index.php?title=Pytest&action=edit&redlink=1) | Testing framework | ~2% |
| [Astropy](/index.php?title=Astropy&action=edit&redlink=1) | Astronomy tools | ~2% |
| [Xarray](/index.php?title=Xarray&action=edit&redlink=1) | N-D labeled arrays | ~1% |
| [Seaborn](/index.php?title=Seaborn&action=edit&redlink=1) | Statistical visualization | ~1% |
| [Pylint](/index.php?title=Pylint&action=edit&redlink=1) | Code analysis | ~1% |

The five largest repositories (Django, SymPy, Sphinx, Matplotlib, Scikit-learn) account for over 80% of the benchmark[&#91;2&#93;](#cite_note-epoch2024-2).

### Problem Categories

| Category | Description | Example Tasks |
| --- | --- | --- |
| Bug Fixes | Resolving reported bugs | Fixing edge cases, correcting logic errors |
| Feature Implementation | Adding new functionality | Implementing requested features |
| Performance Issues | Optimization problems | Improving efficiency, reducing memory usage |
| Documentation | Documentation-related issues | Updating docstrings, fixing examples |
| Compatibility | Cross-version compatibility | Python version compatibility fixes |
| Testing | Test-related issues | Fixing test failures, adding test coverage |

### Difficulty Distribution

| Difficulty | Number of Problems | Time to Solve | Description |
| --- | --- | --- | --- |
| Easy | 196 | <15 minutes | Simple bug fixes, minor changes |
| Medium | 259 | 15-60 minutes | Moderate complexity, multiple file changes |
| Hard | 45 | >1 hour | Complex issues, architectural changes |

## Human Validation Process

### Validation Methodology

The validation process involved rigorous human review:

| Step | Process | Outcome |
| --- | --- | --- |
| Annotator Selection | 93 Python-experienced developers recruited | Expert review team assembled |
| Review Protocol | Detailed rubric for evaluation | Consistent assessment criteria |
| Triple Review | Each problem reviewed by 3 independent annotators | Multiple perspectives |
| Quality Criteria | Assessed clarity, test appropriateness, solvability | Comprehensive evaluation |
| Filtering | Problems failing criteria removed | 68.3% filtered out |

### Validation Criteria

| Criterion | Description | Failure Rate |
| --- | --- | --- |
| Problem Clarity | Issue description must be unambiguous | 38.3% |
| Test Fairness | Tests must not incorrectly fail valid solutions | 61.1% |
| Solvability | Problem must be solvable with provided information | Variable |
| Reproducibility | Issue must be reproducible in test environment | Variable |

## Evaluation Methodology

### Task Structure

For each problem, an AI agent receives:

- **Codebase**: Complete repository at specific commit

- **Issue Description**: Original GitHub issue text

- **Test Environment**: Docker container with dependencies

The agent must:
1. Understand the issue description
2. Explore and understand the codebase
3. Identify relevant files and functions
4. Implement a solution
5. Verify the solution passes all tests

### Test Categories

| Test Type | Description | Purpose |
| --- | --- | --- |
| FAIL_TO_PASS | Tests that should fail before fix, pass after | Verify issue is resolved |
| PASS_TO_PASS | Tests that should remain passing | Ensure no regression |
| Additional Tests | Other repository tests | Comprehensive validation |

Both FAIL_TO_PASS and PASS_TO_PASS tests must succeed for a solution to be considered correct.

### Scoring Metrics

| Metric | Description | Calculation |
| --- | --- | --- |
| Resolve Rate | Percentage of issues fully resolved | (Resolved issues / Total issues) × 100% |
| Pass@k | Success rate within k attempts | Percentage resolved in k tries |
| Test Pass Rate | Individual test success rate | (Passing tests / Total tests) × 100% |
| Partial Credit | Credit for partial solutions | Based on test subsets passed |

## Performance Analysis

### Current Leaderboard (2025)

| Rank | Model | Resolve Rate | Organization | Cost/Test | Time (avg) |
| --- | --- | --- | --- | --- | --- |
| 1 | [Claude Opus 4.1](/index.php?title=Claude_Opus_4.1&action=edit&redlink=1) | 74.5% | [Anthropic](/wiki/anthropic) | ~$2.50 | ~600s |
| 2 | [Claude Sonnet 4](/index.php?title=Claude_Sonnet_4&action=edit&redlink=1) | 72.7% (80.2% with parallel compute) | [Anthropic](/wiki/anthropic) | $1.24 | 426s |
| 3 | [Claude Opus 4](/index.php?title=Claude_Opus_4&action=edit&redlink=1) | 72.5% (79.4% with parallel compute) | [Anthropic](/wiki/anthropic) | ~$2.50 | ~600s |
| 4 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) (scaffolded) | 70.2% | [Anthropic](/wiki/anthropic) | ~$1.50 | ~500s |
| 5 | [Augment Agent](/index.php?title=Augment_Agent&action=edit&redlink=1) (Claude 3.7 + o1) | 65.4% | [Augment Code](/index.php?title=Augment_Code&action=edit&redlink=1) | Variable | Variable |
| 6 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | 63.8% | [Google](/index.php?title=Google&action=edit&redlink=1) | ~$2.00 | ~500s |
| 7 | [Grok 4](/index.php?title=Grok_4&action=edit&redlink=1) | 58.6% | [xAI](/wiki/xai) | ~$2.00 | ~550s |
| 8 | [DeepSeek R1-0528](/index.php?title=DeepSeek_R1-0528&action=edit&redlink=1) | 57.6% | [DeepSeek](/wiki/deepseek) | ~$0.50 | ~400s |
| 9 | [GPT-4.1](/index.php?title=GPT-4.1&action=edit&redlink=1) | 54.6% | [OpenAI](/wiki/openai) | ~$2.00 | ~400s |
| 10 | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) | 49.8% | [OpenAI](/wiki/openai) | ~$3.00 | ~700s |
| 11 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) (upgraded) | 49.0% | [Anthropic](/wiki/anthropic) | ~$1.00 | ~450s |
| 12 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 33.2% | [OpenAI](/wiki/openai) | ~$1.50 | ~350s |

### Historical Progress

| Date | Best Score | Model | Key Innovation |
| --- | --- | --- | --- |
| Aug 2024 | 33.2% | GPT-4o | Baseline at launch |
| Oct 2024 | 45% | Previous SOTA | Improved scaffolding |
| Dec 2024 | 49% | Claude 3.5 Sonnet | Better code understanding |
| Feb 2025 | 57.6% | DeepSeek R1 | Reasoning improvements |
| Apr 2025 | 72.7% | Claude Opus 4 | Advanced problem solving |

## Agent Architectures

### Successful Approaches

| Approach | Description | Performance Impact |
| --- | --- | --- |
| Agentless | Direct patch generation without complex agents | Baseline approach |
| SWE-agent | Interactive agent with specialized tools | +15-20% over baseline |
| Hybrid Models | Combining multiple models (for example Claude + o1) | +20-25% improvement |
| Custom Scaffolding | Task-specific prompting and tooling | +8-10% improvement |
| Multi-attempt | Multiple solution attempts with verification | +5-10% improvement |

### Tool Usage

Successful agents typically use:

| Tool | Function | Usage Frequency |
| --- | --- | --- |
| File Browser | Navigate repository structure | High |
| Code Search | Find relevant code sections | High |
| File Editor | Modify source files | High |
| Test Runner | Execute tests | Medium |
| Debugger | Debug failing tests | Low |
| Documentation Reader | Access project docs | Medium |

## Skills Evaluated

### Core Competencies

| Skill | Description | Importance |
| --- | --- | --- |
| Code Comprehension | Understanding existing codebases | Critical |
| Debugging | Identifying root causes of issues | Critical |
| Implementation | Writing correct solution code | Critical |
| Testing | Understanding and passing test suites | High |
| Navigation | Finding relevant files and functions | High |
| Problem Analysis | Understanding issue descriptions | High |

### Technical Skills

| Area | Specific Skills | Frequency |
| --- | --- | --- |
| Python Proficiency | Syntax, idioms, standard library | Very High |
| Framework Knowledge | Django, Flask, etc. | High |
| Algorithm Design | Efficient problem solving | Medium |
| API Understanding | Library interfaces | High |
| Error Handling | Exception management | Medium |
| Performance Optimization | Efficiency improvements | Low |

## Limitations and Criticisms

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Python Only | Limited to Python repositories | Reduced generalizability |
| Bug Fix Focus | ~80% bug fixes vs. feature development | Skewed task distribution |
| Repository Bias | Django dominates dataset | Overrepresentation |
| Short Tasks | Most solvable in <1 hour | Limited complexity |
| Structured Descriptions | More LLM-friendly than typical issues | Easier than real-world |

### Methodological Concerns

1. **Data Contamination Risk**: Public GitHub issues may appear in training data
2. **Test Suite Quality**: Some test suites may not fully specify requirements
3. **Limited Scope**: Doesn't test full software development lifecycle
4. **Single Language**: Python-only limits broader applicability

## Related Benchmarks

### Comparison with Other Benchmarks

| Benchmark | Focus | Size | Key Difference |
| --- | --- | --- | --- |
| [SWE-bench](/wiki/swe-bench) (original) | Unfiltered GitHub issues | 2,294 | Includes unsolvable problems |
| **SWE-bench Verified** | Validated GitHub issues | 500 | Human-verified quality |
| [HumanEval](/wiki/humaneval) | Function implementation | 164 | Synthetic problems |
| [MBPP](/index.php?title=MBPP&action=edit&redlink=1) | Basic programming | 974 | Simple tasks |
| [CodeContests](/index.php?title=CodeContests&action=edit&redlink=1) | Competitive programming | 10,000+ | Algorithm focus |
| [Multi-SWE-bench](/index.php?title=Multi-SWE-bench&action=edit&redlink=1) | Multilingual issues | Variable | Multiple languages |

### Complementary Evaluations

- **[SWE-bench Multimodal](/index.php?title=SWE-bench_Multimodal&action=edit&redlink=1)**: Includes visual elements in issues

- **[SWE-Lancer](/index.php?title=SWE-Lancer&action=edit&redlink=1)**: Focus on freelance-style tasks

- **[SWE-rebench](/index.php?title=SWE-rebench&action=edit&redlink=1)**: Continuous evaluation with new issues

- **[CodeXGLUE](/index.php?title=CodeXGLUE&action=edit&redlink=1)**: Broader code intelligence tasks

## Implementation and Usage

### Setup and Installation

```bash

1. Install SWE-bench

pip install swebench

1. Download the verified dataset

from datasets import load_dataset
dataset = load_dataset("princeton-nlp/SWE-bench_Verified")

1. Set up evaluation environment

docker pull swebench/evaluation:latest
```

### Evaluation Example

```python

1. Example evaluation script

from swebench import evaluate_model

def run_evaluation(model, dataset):

   results = []
   for problem in dataset:
       # Model attempts to solve the issue
       solution = model.solve_issue(
           repo=problem['repo'],
           issue=problem['issue_description'],
           base_commit=problem['base_commit']
       )
       
       # Run tests to verify solution
       test_results = run_tests(solution, problem['tests'])
       results.append(test_results)
   
   return calculate_metrics(results)

```

## Impact and Applications

### Research Contributions

| Area | Contribution | Impact |
| --- | --- | --- |
| Agent Development | Driving sophisticated coding agents | Rapid progress in AI coding |
| Evaluation Standards | Setting rigorous benchmarking standards | Improved measurement |
| Tool Development | Inspiring new developer tools | Practical applications |
| Training Methods | New approaches to code generation | Better models |

### Industry Applications

1. **Automated Bug Fixing**: Production systems for automatic issue resolution
2. **Code Review Assistance**: AI-powered code review tools
3. **Developer Productivity**: IDE integrations for issue solving
4. **Training Data**: Improving code generation models
5. **Hiring Assessment**: Evaluating human developer skills

## Future Directions

### Planned Improvements

| Enhancement | Description | Timeline |
| --- | --- | --- |
| Language Expansion | Support for Java, JavaScript, Go | 2025-2026 |
| Feature Development | More feature implementation tasks | 2025 |
| Longer Tasks | Multi-day software projects | 2026 |
| Multi-file Edits | Complex refactoring tasks | 2025 |
| Real-time Updates | Continuous benchmark updates | Ongoing |

### Research Opportunities

1. **Multi-Agent Collaboration**: Teams of AI agents working together
2. **Human-AI Collaboration**: Hybrid approaches to problem solving
3. **Cross-Repository Learning**: Transfer learning across codebases
4. **Explanation Generation**: Understanding AI problem-solving strategies
5. **Error Prevention**: Proactive bug detection before deployment

## Significance

SWE-bench Verified represents a crucial milestone in evaluating AI's practical software engineering capabilities. By focusing on real-world problems from production codebases, it provides a realistic assessment of whether AI systems can perform the day-to-day tasks of professional developers. The benchmark's rapid adoption and the intense competition to improve scores demonstrate its value to both research and industry.

The progression from 33% to over 70% resolution rates in less than a year shows remarkable progress in AI coding capabilities. However, the remaining gap to human performance (100% by definition, as problems are human-verified as solvable) indicates substantial room for improvement. As models continue to advance, SWE-bench Verified serves as a critical measure of progress toward truly autonomous software engineering.

## See Also

- [SWE-bench](/wiki/swe-bench)

- [Software Engineering](/index.php?title=Software_Engineering&action=edit&redlink=1)

- [GitHub](/index.php?title=GitHub&action=edit&redlink=1)

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [AI Benchmarks](/index.php?title=AI_Benchmarks&action=edit&redlink=1)

- [Claude](/wiki/claude)

- [OpenAI](/wiki/openai)

- [Automated Programming](/index.php?title=Automated_Programming&action=edit&redlink=1)

## References

1. [↑](#cite_ref-openai2024_1-0) OpenAI. (2024). "Introducing SWE-bench Verified". August 13, 2024. Retrieved from [https://openai.com/index/introducing-swe-bench-verified/](https://openai.com/index/introducing-swe-bench-verified/)

2. [↑](#cite_ref-epoch2024_2-0) Epoch AI. (2024). "What skills does SWE-bench Verified evaluate?". Retrieved from [https://epoch.ai/blog/what-skills-does-swe-bench-verified-evaluate](https://epoch.ai/blog/what-skills-does-swe-bench-verified-evaluate)

Cite error: `<ref>` tag with name "jimenez2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "princeton2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "augment2025" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "anthropic2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "swebench2025" defined in `<references>` is not used in prior text.