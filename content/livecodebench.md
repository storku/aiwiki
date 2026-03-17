---
title: "LiveCodeBench"
slug: "livecodebench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "Programming_Benchmarks"
  - "2024_Benchmarks"
  - "Contamination-Free_Benchmarks"
  - "Software_Engineering_Benchmarks"
---**

| LiveCodeBench |
| --- |
| Overview |
| Full name | Live Code Benchmark |
| Abbreviation | LCB |
| Description | A holistic and contamination-free evaluation benchmark for code LLMs with continuous updates |
| Release date | 2024-03 |
| Latest version | v6 |
| Benchmark updated | 2025-04 |
| Authors | [Naman Jain](/index.php?title=Naman_Jain&action=edit&redlink=1), [King Han](/index.php?title=King_Han&action=edit&redlink=1), [Alex Gu](/index.php?title=Alex_Gu&action=edit&redlink=1), [Et al.](/index.php?title=Et_al.&action=edit&redlink=1) |
| Organization | [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1), [MIT](/index.php?title=MIT&action=edit&redlink=1), [Ion Stoica Lab](/index.php?title=Ion_Stoica_Lab&action=edit&redlink=1) |
| Technical Details |
| Type | [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Code Understanding](/index.php?title=Code_Understanding&action=edit&redlink=1), [Multi-task](/index.php?title=Multi-task&action=edit&redlink=1) |
| Modality | [Text (Code)](/index.php?title=Text_(Code)&action=edit&redlink=1) |
| Task format | [Code generation, self-repair, test output prediction, execution](/index.php?title=Code_generation,_self-repair,_test_output_prediction,_execution&action=edit&redlink=1) |
| Number of tasks | 1055+ (as of v6) |
| Total examples | 1055+ |
| Evaluation metric | [Pass@1](/index.php?title=Pass@1&action=edit&redlink=1), [Pass@k](/index.php?title=Pass@k&action=edit&redlink=1), [Execution accuracy](/index.php?title=Execution_accuracy&action=edit&redlink=1) |
| Domains | [Competitive programming](/index.php?title=Competitive_programming&action=edit&redlink=1), [Software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) |
| Languages | Multiple programming languages |
| Performance |
| Human performance | Variable by task |
| Baseline | ~20-30% (smaller models) |
| SOTA score | 73.3% |
| SOTA model | [DeepSeek R1-0528](/index.php?title=DeepSeek_R1-0528&action=edit&redlink=1) |
| SOTA date | 2025-05 |
| Saturated | No |
| Resources |
| Website | [Official website](https://livecodebench.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2403.07974) |
| GitHub | [Repository](https://github.com/LiveCodeBench/LiveCodeBench) |
| Dataset | [Download](https://github.com/LiveCodeBench/LiveCodeBench) |
| License | MIT

 |

LiveCodeBench** is a comprehensive [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to provide holistic and contamination-free evaluation of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) for code-related tasks. Released in March 2024 by researchers from [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1), [MIT](/index.php?title=MIT&action=edit&redlink=1), and other institutions, LiveCodeBench addresses the critical issue of data contamination in code benchmarks by continuously collecting new problems from competitive programming platforms including [LeetCode](/index.php?title=LeetCode&action=edit&redlink=1), [AtCoder](/index.php?title=AtCoder&action=edit&redlink=1), and [CodeForces](/index.php?title=CodeForces&action=edit&redlink=1), ensuring models are evaluated on problems they haven't encountered during training.

## Overview

LiveCodeBench revolutionizes code model evaluation by implementing a dynamic, continuously updating benchmark that prevents the common problem of test set contamination. Unlike static benchmarks where models may have seen test problems during training, LiveCodeBench maintains temporal integrity by tagging problems with release dates and evaluating models only on problems released after their training cutoff dates.

### Motivation

The development of LiveCodeBench was driven by several critical challenges in code model evaluation:

- Widespread contamination in existing static benchmarks

- Limited scope of evaluation focusing only on code generation

- Lack of real-world software engineering task coverage

- Need for holistic assessment of coding capabilities

- Absence of temporal tracking for fair model comparison

The benchmark specifically addresses the need for comprehensive evaluation that mirrors real-world software development practices, including debugging, testing, and code understanding.

## Technical Architecture

### Core Components

| Component | Description | Function |
| --- | --- | --- |
| Problem Collector | Automated system for gathering new problems | Maintains fresh evaluation data |
| Temporal Tagger | Date-based problem classification | Ensures contamination-free evaluation |
| Multi-task Evaluator | Comprehensive task assessment framework | Holistic capability measurement |
| Execution Environment | Sandboxed code execution system | Validates functional correctness |

### Problem Sources

LiveCodeBench aggregates problems from three major competitive programming platforms:

| Platform | Problem Types | Update Frequency | Difficulty Range |
| --- | --- | --- | --- |
| [LeetCode](/index.php?title=LeetCode&action=edit&redlink=1) | Algorithm, data structures | Weekly contests | Easy to Hard |
| [AtCoder](/index.php?title=AtCoder&action=edit&redlink=1) | Mathematical, algorithmic | Regular contests | Beginner to Expert |
| [CodeForces](/index.php?title=CodeForces&action=edit&redlink=1) | Competitive programming | Bi-weekly rounds | Div 3 to Div 1 |

### Dataset Evolution

| Version | Release Date | Problem Count | Coverage Period |
| --- | --- | --- | --- |
| v1 | March 2024 | 400 | May 2023 - March 2024 |
| v4 | September 2024 | 713 | May 2023 - September 2024 |
| v5 | January 2025 | 880 | May 2023 - January 2025 |
| v6 | April 2025 | 1055 | May 2023 - April 2025 |

## Evaluation Tasks

### Task Categories

LiveCodeBench evaluates models across four primary task categories:

| Task | Description | Real-world Relevance | Evaluation Metric |
| --- | --- | --- | --- |
| Code Generation | Generate complete solutions from problem descriptions | Core programming skill | Pass@1, Pass@k |
| Self-Repair | Fix bugs in provided incorrect code | Debugging capability | Repair success rate |
| Test Output Prediction | Predict outputs for given test cases | Code understanding | Prediction accuracy |
| Code Execution | Trace and predict execution behavior | Runtime analysis | Execution accuracy |

### Difficulty Levels

Problems are categorized into three difficulty tiers:

| Level | Description | Typical Complexity | Success Rate Range |
| --- | --- | --- | --- |
| Easy | Basic algorithms and data structures | O(n), O(n log n) | 60-80% |
| Medium | Intermediate algorithms, optimization | O(n²), dynamic programming | 30-60% |
| Hard | Advanced algorithms, complex logic | Complex DP, graphs | 10-30% |

## Contamination Prevention

### Temporal Windowing

LiveCodeBench implements a sophisticated contamination prevention system:

| Strategy | Implementation | Benefit |
| --- | --- | --- |
| Release Dating | Each problem tagged with publication date | Temporal tracking |
| Model Cutoff Dates | Track training data cutoffs for all models | Fair comparison |
| Dynamic Filtering | Only evaluate on post-cutoff problems | Contamination-free |
| Red Flagging | Mark potentially contaminated results | Transparency |

### Contamination Detection

The benchmark can identify potential contamination through:

- Performance drops on newer problems

- Anomalous accuracy patterns

- Temporal performance analysis

- Cross-reference with model training dates

## Performance Analysis

### Current Leaderboard (2025)

| Rank | Model | Pass@1 Overall | Code Generation | Self-Repair | Test Prediction |
| --- | --- | --- | --- | --- | --- |
| 1 | [DeepSeek R1-0528](/index.php?title=DeepSeek_R1-0528&action=edit&redlink=1) | 73.3% | 75% | 68% | 72% |
| 2 | [GPT-4 Turbo](/index.php?title=GPT-4_Turbo&action=edit&redlink=1) | 71.2% | 73% | 66% | 70% |
| 3 | [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | 70.8% | 71% | 65% | 74% |
| 4 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 69.5% | 72% | 64% | 68% |
| 5 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 67.3% | 69% | 62% | 66% |
| 6 | [DeepSeek-Coder-33B](/index.php?title=DeepSeek-Coder-33B&action=edit&redlink=1) | 63.5% | 65% | 58% | 62% |
| 7 | [Phind-CodeLlama-34B](/index.php?title=Phind-CodeLlama-34B&action=edit&redlink=1) | 61.2% | 63% | 56% | 60% |
| 8 | [CodeLlama-70B](/index.php?title=CodeLlama-70B&action=edit&redlink=1) | 58.7% | 60% | 54% | 57% |

### Performance Insights

#### Task-Specific Observations

- **Code Generation**: Models excel at standard algorithmic problems

- **Self-Repair**: Significant performance drop compared to generation

- **Test Prediction**: Claude models show particular strength

- **Execution Tracing**: Most challenging task across all models

#### Contamination Effects

DeepSeek models exhibit notable performance patterns:

- Pre-September 2023 problems: ~80% accuracy

- Post-September 2023 problems: ~63% accuracy

- Clear indication of potential contamination in earlier problems

## Implementation

### Installation and Setup

```bash

1. Clone the repository

git clone [https://github.com/LiveCodeBench/LiveCodeBench](https://github.com/LiveCodeBench/LiveCodeBench)
cd LiveCodeBench

1. Install dependencies

pip install -e .

1. Download latest dataset

python scripts/download_data.py --version v6
```

### Running Evaluations

```python

1. Basic evaluation

from livecodebench import LiveCodeBench

1. Initialize benchmark

lcb = LiveCodeBench(version='v6')

1. Evaluate model on recent problems

results = lcb.evaluate(

   model='gpt-4',
   tasks=['code_generation', 'self_repair'],
   date_range=('2024-01-01', '2025-04-01')

)

1. Get contamination-free results

clean_results = lcb.evaluate_clean(

   model='gpt-4',
   cutoff_date='2023-09-01'

)
```

### Custom Problem Filtering

```python

1. Filter by difficulty

easy_problems = lcb.filter_problems(difficulty='easy')

1. Filter by platform

leetcode_only = lcb.filter_problems(source='leetcode')

1. Temporal filtering

recent_problems = lcb.filter_problems(

   start_date='2025-01-01',
   end_date='2025-04-01'

)
```

## Holistic Evaluation Framework

### Multi-Scenario Assessment

| Scenario | Description | Metrics | Weight |
| --- | --- | --- | --- |
| Generation Only | Pure code synthesis | Pass@1, Pass@5 | 40% |
| Generation + Repair | Initial attempt + self-correction | Combined success | 25% |
| Understanding | Test prediction + execution | Accuracy | 20% |
| Full Pipeline | All tasks combined | Weighted average | 15% |

### Real-World Alignment

LiveCodeBench's tasks mirror actual software development:

| Development Phase | LiveCodeBench Task | Skill Tested |
| --- | --- | --- |
| Implementation | Code Generation | Algorithm design |
| Debugging | Self-Repair | Error identification |
| Testing | Test Output Prediction | Code comprehension |
| Review | Execution Tracing | Logic verification |

## Significance and Impact

### Research Applications

| Application | Purpose | Value |
| --- | --- | --- |
| Model Development | Identifying capability gaps | Targeted improvement |
| Contamination Studies | Understanding data leakage | Evaluation integrity |
| Temporal Analysis | Tracking progress over time | Historical comparison |
| Task Transfer | Cross-task performance correlation | Capability understanding |

### Industry Applications

- **Hiring Assessment**: Evaluating coding interview tools

- **IDE Integration**: Testing code completion systems

- **Educational Tools**: Assessing programming tutors

- **Code Review**: Evaluating automated review systems

- **DevOps**: Testing CI/CD automation capabilities

## Challenges and Limitations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Platform Dependency | Relies on external contest platforms | Data availability |
| Language Coverage | Primarily Python, Java, C++ | Limited scope |
| Problem Types | Focus on algorithmic challenges | May miss practical tasks |
| Execution Cost | Requires sandboxed execution | Resource intensive |
| Update Frequency | Depends on contest schedules | Irregular additions |

### Future Directions

1. **Expanded Problem Sources**: Integration with more platforms
2. **Enterprise Tasks**: Real-world software engineering problems
3. **Multi-language Support**: Broader programming language coverage
4. **Interactive Debugging**: Multi-turn problem-solving
5. **Team Collaboration**: Multi-agent coding scenarios
6. **Documentation Tasks**: Code documentation generation

## Related Benchmarks

- **[HumanEval](/wiki/humaneval)**: Classic code generation benchmark

- **[MBPP](/index.php?title=MBPP&action=edit&redlink=1)**: Python programming problems

- **[SWE-bench](/wiki/swe-bench)**: Software engineering tasks

- **[CodeContests](/index.php?title=CodeContests&action=edit&redlink=1)**: Competitive programming dataset

- **[APPS](/index.php?title=APPS&action=edit&redlink=1)**: Algorithmic problem solving

- **[BigCodeBench](/index.php?title=BigCodeBench&action=edit&redlink=1)**: Large-scale code evaluation

- **[MultiPL-E](/index.php?title=MultiPL-E&action=edit&redlink=1)**: Multi-language code generation

## Significance

LiveCodeBench represents a paradigm shift in code model evaluation, addressing the critical contamination problem that undermines many existing benchmarks. Its continuous update mechanism and holistic evaluation approach provide:

- Reliable contamination-free assessment

- Comprehensive capability evaluation beyond generation

- Temporal tracking for fair model comparison

- Real-world task alignment

- Sustainable evaluation framework for future models

The benchmark's ability to detect contamination and provide genuine performance metrics makes it essential for advancing code-capable AI systems.

## See Also

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [Program Synthesis](/index.php?title=Program_Synthesis&action=edit&redlink=1)

- [Automated Debugging](/index.php?title=Automated_Debugging&action=edit&redlink=1)

- [Competitive Programming](/index.php?title=Competitive_Programming&action=edit&redlink=1)

- [Software Engineering AI](/index.php?title=Software_Engineering_AI&action=edit&redlink=1)

- [Benchmark Contamination](/index.php?title=Benchmark_Contamination&action=edit&redlink=1)

- [Temporal Evaluation](/index.php?title=Temporal_Evaluation&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "lcb_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "lcb_website" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "lcb_github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "lcb_leaderboard" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "hf_blog" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "marktechpost" defined in `<references>` has group attribute "" which does not appear in prior text.