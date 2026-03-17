---
title: "LiveBench"
slug: "livebench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Natural_Language_Processing"
  - "Machine_Learning_Evaluation"
  - "2024_in_artificial_intelligence"
---**

| LiveBench |
| --- |
| Overview |
| Full name | LiveBench |
| Description | A challenging, contamination-free [large language model](/wiki/large_language_model) benchmark designed to evaluate [LLMs](/wiki/llm) with objective, automatically-scorable questions that are regularly updated from recent sources
Property "Description" (as page type) with input value "A challenging, contamination-free [large language model](/wiki/large_language_model) benchmark designed to evaluate [LLMs](/wiki/llm) with objective, automatically-scorable questions that are regularly updated from recent sources" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| Release date | 2024-06-12 |
| Latest version | 2025-08-19 |
| Benchmark updated | 2025-08-19 |
| Authors | [Colin White](/index.php?title=Colin_White&action=edit&redlink=1), [Samuel Dooley](/index.php?title=Samuel_Dooley&action=edit&redlink=1), [Manley Roberts](/index.php?title=Manley_Roberts&action=edit&redlink=1), [Arka Pal](/index.php?title=Arka_Pal&action=edit&redlink=1), [Ben Feuer](/index.php?title=Ben_Feuer&action=edit&redlink=1), [Siddhartha Jain](/index.php?title=Siddhartha_Jain&action=edit&redlink=1), [Ravid Shwartz-Ziv](/index.php?title=Ravid_Shwartz-Ziv&action=edit&redlink=1), [Neel Jain](/index.php?title=Neel_Jain&action=edit&redlink=1), [Khalid Saifullah](/index.php?title=Khalid_Saifullah&action=edit&redlink=1), [Sreemanti Dey](/index.php?title=Sreemanti_Dey&action=edit&redlink=1), [Shubh Agrawal](/index.php?title=Shubh_Agrawal&action=edit&redlink=1), [Sandeep Singh Sandha](/index.php?title=Sandeep_Singh_Sandha&action=edit&redlink=1), [Siddartha Naidu](/index.php?title=Siddartha_Naidu&action=edit&redlink=1), [Chinmay Hegde](/index.php?title=Chinmay_Hegde&action=edit&redlink=1), [Yann LeCun](/index.php?title=Yann_LeCun&action=edit&redlink=1), [Tom Goldstein](/index.php?title=Tom_Goldstein&action=edit&redlink=1), [Willie Neiswanger](/index.php?title=Willie_Neiswanger&action=edit&redlink=1), [Micah Goldblum](/index.php?title=Micah_Goldblum&action=edit&redlink=1) |
| Organization | [Abacus.AI](/index.php?title=Abacus.AI&action=edit&redlink=1), [NYU](/index.php?title=NYU&action=edit&redlink=1), [NVIDIA](/wiki/nvidia), [University of Maryland](/index.php?title=University_of_Maryland&action=edit&redlink=1), [USC](/index.php?title=USC&action=edit&redlink=1) |
| Technical Details |
| Type | [General Language Understanding](/index.php?title=General_Language_Understanding&action=edit&redlink=1), [Reasoning](/index.php?title=Reasoning&action=edit&redlink=1), [Mathematics](/index.php?title=Mathematics&action=edit&redlink=1), [Coding](/index.php?title=Coding&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice, Open-ended, Code generation, Mathematical proofs](/index.php?title=Multiple_choice,_Open-ended,_Code_generation,_Mathematical_proofs&action=edit&redlink=1) |
| Number of tasks | 18 |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Objective ground-truth scoring](/index.php?title=Objective_ground-truth_scoring&action=edit&redlink=1) |
| Domains | [Mathematics](/index.php?title=Mathematics&action=edit&redlink=1), [Coding](/index.php?title=Coding&action=edit&redlink=1), [Reasoning](/index.php?title=Reasoning&action=edit&redlink=1), [Language](/index.php?title=Language&action=edit&redlink=1), [Data Analysis](/wiki/data_analysis), [Instruction Following](/index.php?title=Instruction_Following&action=edit&redlink=1) |
| Languages | English |
| Performance

 |
| SOTA score | 78.59 |
| SOTA model | [GPT-5 High](/index.php?title=GPT-5_High&action=edit&redlink=1) |
| SOTA date | 2025-08-19 |
| Saturated | No |
| Resources |
| Website | [Official website](https://livebench.ai/) |
| Paper | [Paper](https://arxiv.org/abs/2406.19314) |
| GitHub | [Repository](https://github.com/LiveBench/LiveBench)

 |

LiveBench** is a comprehensive [benchmark](/wiki/benchmark) for evaluating [large language models](/wiki/large_language_model) (LLMs) that addresses the critical challenge of [test set contamination](/index.php?title=Test_set_contamination&action=edit&redlink=1) in [AI evaluation](/index.php?title=AI_evaluation&action=edit&redlink=1). Released on June 12, 2024, and continuously updated monthly, LiveBench provides a contamination-free evaluation framework by sourcing questions from recent, previously unseen materials. The benchmark was developed by a team of 18 researchers from [Abacus.AI](/index.php?title=Abacus.AI&action=edit&redlink=1), [New York University](/index.php?title=New_York_University&action=edit&redlink=1), [NVIDIA](/wiki/nvidia), [University of Maryland](/index.php?title=University_of_Maryland&action=edit&redlink=1), and [University of Southern California](/index.php?title=University_of_Southern_California&action=edit&redlink=1), and is scheduled to appear as a Spotlight Paper at [ICLR](/index.php?title=ICLR&action=edit&redlink=1) 2025.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-website-2)

## Overview

LiveBench represents a significant advancement in [LLM evaluation](/index.php?title=LLM_evaluation&action=edit&redlink=1) by introducing a dynamic, continuously updated benchmark that prevents models from being trained on test data. Unlike traditional static benchmarks that can become obsolete due to data leakage into training sets, LiveBench releases new questions monthly sourced from recent [mathematics](/index.php?title=Mathematics&action=edit&redlink=1) competitions, [arXiv](/index.php?title=ArXiv&action=edit&redlink=1) papers, news articles, and [IMDb](/index.php?title=IMDb&action=edit&redlink=1) movie synopses.[&#91;1&#93;](#cite_note-arxiv-1)

The benchmark is designed with three core principles:

1. **Contamination resistance**: Questions are sourced from materials released after most LLMs' training cutoff dates

2. **Objective evaluation**: All questions have verifiable, objective ground-truth answers that can be scored automatically without requiring [LLM judges](/index.php?title=LLM_judges&action=edit&redlink=1) or human evaluation

3. **Comprehensive coverage**: Tasks span multiple domains testing diverse capabilities of language models

## Methodology

### Question Sourcing

LiveBench employs a unique approach to question generation by drawing from multiple contemporary sources:[&#91;3&#93;](#cite_note-github-3)

- **Mathematics competitions**: Problems from recent high school math competitions including [AMC12](/index.php?title=AMC12&action=edit&redlink=1), [AIME](/wiki/aime), and [International Mathematical Olympiad](/index.php?title=International_Mathematical_Olympiad&action=edit&redlink=1) (IMO) from the past 12 months

- **Academic papers**: Questions based on recently published [arXiv](/index.php?title=ArXiv&action=edit&redlink=1) papers

- **Current events**: Tasks derived from recent news articles, particularly from [The Guardian](/index.php?title=The_Guardian&action=edit&redlink=1)

- **Entertainment content**: Plot-based questions from recent [IMDb](/index.php?title=IMDb&action=edit&redlink=1) movie synopses

- **Enhanced benchmarks**: Harder, contamination-limited versions of tasks from previous benchmarks such as [Big-Bench Hard](/index.php?title=Big-Bench_Hard&action=edit&redlink=1), [AMPS](/index.php?title=AMPS&action=edit&redlink=1), and [IFEval](/index.php?title=IFEval&action=edit&redlink=1)

### Evaluation Framework

The evaluation process in LiveBench is designed to be fully automated and objective. Each question has a verifiable ground-truth answer, eliminating potential biases introduced by [LLM judges](/index.php?title=LLM_judges&action=edit&redlink=1) or [human crowdsourcing](/index.php?title=Human_crowdsourcing&action=edit&redlink=1). The scoring system uses accuracy-based metrics, with scores reported on a scale of 0 to 100.[&#91;1&#93;](#cite_note-arxiv-1)

Models can be evaluated using the provided Python scripts that support both API-based and local model inference. The framework includes:

- Parallel evaluation capabilities for efficient processing

- Support for multiple API providers including [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), and others

- Configurable model parameters and retry mechanisms

- [Docker](/index.php?title=Docker&action=edit&redlink=1) support for agentic coding tasks

## Task Categories

LiveBench currently comprises 18 diverse tasks organized into six main categories:[&#91;2&#93;](#cite_note-website-2)

### Reasoning

The reasoning category includes advanced logical puzzles and deduction tasks:

- **Web of Lies**: Enhanced versions from [Big-Bench Hard](/index.php?title=Big-Bench_Hard&action=edit&redlink=1) requiring complex logical deduction

- **Zebra Puzzles**: Positional reasoning tasks adapted from [bAbI](/index.php?title=BAbI&action=edit&redlink=1) and traditional logic puzzles

- **Spatial Reasoning**: Tasks testing understanding of spatial relationships and transformations

### Coding

Coding tasks evaluate [code generation](/index.php?title=Code_generation&action=edit&redlink=1) and completion abilities:

- **Code Generation**: Problems sourced from [LeetCode](/index.php?title=LeetCode&action=edit&redlink=1) and competitive programming platforms

- **Code Completion**: Tasks from [GitHub](/index.php?title=GitHub&action=edit&redlink=1) repositories requiring understanding of existing codebases

- **Agentic Coding**: A subcategory added in 2025 testing autonomous coding agent capabilities in multi-turn development environments

### Mathematics

Mathematical tasks span multiple difficulty levels:

- **Competition Problems**: Recent problems from [AMC](/index.php?title=AMC&action=edit&redlink=1), [AIME](/wiki/aime), and [IMO](/index.php?title=IMO&action=edit&redlink=1)

- **Proof-Based Questions**: Fill-in-the-blank mathematical proofs from prestigious competitions

- **AMPS Hard**: Enhanced versions of problems from the [AMPS](/index.php?title=AMPS&action=edit&redlink=1) dataset

### Data Analysis

Data analysis tasks test [tabular reasoning](/index.php?title=Tabular_reasoning&action=edit&redlink=1) and data manipulation:

- **Column Type Annotation**: Identifying appropriate data types for table columns

- **Table Join Prediction**: Determining correct join operations between tables

- **Table Reformatting**: Restructuring data according to specifications

- Sources include recent datasets from [Kaggle](/index.php?title=Kaggle&action=edit&redlink=1) and [Socrata](/index.php?title=Socrata&action=edit&redlink=1)

### Language

Language comprehension tasks evaluate understanding and manipulation of text:

- **Word Puzzles**: [Connections](/index.php?title=Connections&action=edit&redlink=1) and word association challenges

- **Typo Fixing**: Identifying and correcting intentional errors in text

- **Plot Unscrambling**: Reordering narrative elements from movie plots

### Instruction Following

Tests ability to follow complex, multi-step instructions:

- **News Article Tasks**: Following instructions based on recent [Guardian](/index.php?title=Guardian&action=edit&redlink=1) articles

- **Multi-constraint Problems**: Tasks requiring adherence to multiple simultaneous constraints

## Performance Results

### Current Leaderboard (August 2025)

The LiveBench leaderboard as of August 19, 2025, shows the following top performers:[&#91;2&#93;](#cite_note-website-2)

| Rank | Model | Organization | Global Average | Reasoning | Coding | Mathematics | Data Analysis | Language | Instruction Following |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) High | [OpenAI](/wiki/openai) | 78.59% | 98.17% | 75.31% | 92.77% | 71.63% | 80.83% | 88.11% |
| 2 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) Medium | [OpenAI](/wiki/openai) | 76.45% | 96.58% | 73.25% | 89.95% | 72.38% | 78.99% | 88.99% |
| 3 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) Low | [OpenAI](/wiki/openai) | 75.34% | 90.47% | 72.49% | 85.33% | 69.72% | 78.73% | 88.99% |
| 4 | [o3](/index.php?title=O3&action=edit&redlink=1) Pro High | [OpenAI](/wiki/openai) | 74.72% | 94.67% | 76.78% | 84.75% | 69.40% | 79.88% | 85.87% |
| 5 | [o3](/index.php?title=O3&action=edit&redlink=1) High | [OpenAI](/wiki/openai) | 74.61% | 94.67% | 76.71% | 85.00% | 67.02% | 76.00% | 86.17% |
| 6 | [Claude](/wiki/claude) 4.1 Opus Thinking | [Anthropic](/wiki/anthropic) | 73.48% | 93.19% | 73.96% | 91.16% | 71.14% | 71.21% | 80.38% |
| 7 | [Claude](/wiki/claude) 4 Opus Thinking | [Anthropic](/wiki/anthropic) | 72.93% | 90.47% | 73.25% | 88.25% | 70.73% | 73.72% | 80.74% |
| 8 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) Mini High | [OpenAI](/wiki/openai) | 72.20% | 91.44% | 66.41% | 90.69% | 71.95% | 75.63% | 85.90% |
| 9 | [Grok](/wiki/grok) 4 | [xAI](/wiki/xai) | 72.11% | 97.78% | 71.34% | 88.84% | 69.53% | 75.83% | 78.12% |
| 10 | [Claude](/wiki/claude) 4 Sonnet Thinking | [Anthropic](/wiki/anthropic) | 72.08% | 95.25% | 73.58% | 85.25% | 69.84% | 70.19% | 80.43% |

Note: [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) was officially released by [OpenAI](/wiki/openai) on August 7, 2025,[&#91;4&#93;](#cite_note-gpt5-4) achieving top performance on LiveBench shortly after its release.

### Historical Performance

#### November 2024 Results

In November 2024, [o1-preview](/index.php?title=O1-preview&action=edit&redlink=1) from [OpenAI](/wiki/openai) achieved a global average score of 64.74%, marking the first model to exceed 60% accuracy on LiveBench.[&#91;5&#93;](#cite_note-nov2024-5)

#### Initial 2024 Results

At launch in June 2024, the top-performing model was [Claude-3.5 Sonnet](/index.php?title=Claude-3.5_Sonnet&action=edit&redlink=1), achieving 61.2% overall accuracy. Other notable performances included:

- [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1): 53.79%

- [GPT-4 Turbo](/index.php?title=GPT-4_Turbo&action=edit&redlink=1): 53.34%

- [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1): 51.92%

These results highlighted the benchmark's difficulty, with even state-of-the-art models struggling to achieve high accuracy.[&#91;6&#93;](#cite_note-aisec-6)

## Technical Implementation

### Running Evaluations

LiveBench provides a comprehensive evaluation framework accessible through [Python](/index.php?title=Python&action=edit&redlink=1) scripts:[&#91;3&#93;](#cite_note-github-3)

```python
python run_livebench.py \

   --model [model_name] \
   --bench-name [benchmark_name] \
   --livebench-release-option 2024-11-25

```

Key features include:

- Support for [OpenAI](/wiki/openai)-compatible API endpoints

- Configurable model parameters (temperature, max tokens, etc.)

- Parallel evaluation for improved efficiency

- Custom scoring methods for new tasks

- Comprehensive logging and result visualization

### Monthly Updates

The benchmark follows a regular update schedule:

- New questions released on the 25th of each month

- Questions remain private for one month before public release

- Tasks gradually increase in difficulty over time

- New task categories added periodically

The benchmark completely refreshes every 6 months to ensure contamination-free evaluation.[&#91;2&#93;](#cite_note-website-2)

## Impact and Recognition

### Academic Recognition

LiveBench has received significant recognition in the [machine learning](/wiki/machine_learning) community:

- **ICLR 2025 Spotlight Paper**: Selected as a Spotlight presentation at the International Conference on Learning Representations[&#91;7&#93;](#cite_note-iclr-7)

- **Industry Adoption**: Major AI organizations including [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), [Google](/index.php?title=Google&action=edit&redlink=1), and [Meta](/wiki/meta) regularly submit their models for evaluation

- **Community Engagement**: Open submission process allows any researcher to evaluate their models

### Addressing Key Challenges

LiveBench addresses several critical challenges in [LLM evaluation](/index.php?title=LLM_evaluation&action=edit&redlink=1):

1. **Test Set Contamination**: By using recently released materials, LiveBench ensures models haven't been trained on test data

2. **Evaluation Bias**: Objective scoring eliminates biases from subjective evaluation methods

3. **Benchmark Saturation**: Regular updates prevent the benchmark from becoming saturated as models improve

4. **Comprehensive Assessment**: Multiple task categories provide a holistic evaluation of model capabilities

## Future Developments

The LiveBench team has outlined several planned improvements:[&#91;3&#93;](#cite_note-github-3)

- **Task Expansion**: Addition of new task categories including multimodal reasoning and long-context understanding

- **Difficulty Scaling**: Introduction of harder task variants as model capabilities improve

- **Language Support**: Potential expansion beyond English to support multilingual evaluation

- **Community Tasks**: Framework for community-contributed tasks with rigorous quality control

## Related Benchmarks

LiveBench complements and builds upon several existing benchmarks:

- **[Big-Bench Hard](/index.php?title=Big-Bench_Hard&action=edit&redlink=1)**: LiveBench includes enhanced versions of BBH tasks

- **[AMPS](/index.php?title=AMPS&action=edit&redlink=1)**: Mathematical reasoning tasks adapted and made more challenging

- **[IFEval](/index.php?title=IFEval&action=edit&redlink=1)**: Instruction following tasks with increased complexity

- **[LiveCodeBench](/wiki/livecodebench)**: Sister benchmark focused specifically on coding tasks

- **[LiveSWEBench](/index.php?title=LiveSWEBench&action=edit&redlink=1)**: New benchmark for AI coding agents launched in 2025

## See Also

- [Large language model](/wiki/large_language_model)

- [AI benchmarking](/index.php?title=AI_benchmarking&action=edit&redlink=1)

- [Test set contamination](/index.php?title=Test_set_contamination&action=edit&redlink=1)

- [Machine learning evaluation](/index.php?title=Machine_learning_evaluation&action=edit&redlink=1)

- [ICLR](/index.php?title=ICLR&action=edit&redlink=1)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arxiv_1-0) [1.1](#cite_ref-arxiv_1-1) [1.2](#cite_ref-arxiv_1-2) White, Colin, et al. "LiveBench: A Challenging, Contamination-Limited LLM Benchmark." arXiv preprint arXiv:2406.19314 (2024). Cite error: Invalid `<ref>` tag; name "arxiv" defined multiple times with different content

2. ↑ [2.0](#cite_ref-website_2-0) [2.1](#cite_ref-website_2-1) [2.2](#cite_ref-website_2-2) [2.3](#cite_ref-website_2-3) LiveBench Official Website. [https://livebench.ai/](https://livebench.ai/) Accessed 2025. Cite error: Invalid `<ref>` tag; name "website" defined multiple times with different content

3. ↑ [3.0](#cite_ref-github_3-0) [3.1](#cite_ref-github_3-1) [3.2](#cite_ref-github_3-2) LiveBench GitHub Repository. [https://github.com/LiveBench/LiveBench](https://github.com/LiveBench/LiveBench) Accessed 2025. Cite error: Invalid `<ref>` tag; name "github" defined multiple times with different content

4. [↑](#cite_ref-gpt5_4-0) OpenAI. "Introducing GPT-5." August 7, 2025. [https://openai.com/index/introducing-gpt-5/](https://openai.com/index/introducing-gpt-5/)

5. [↑](#cite_ref-nov2024_5-0) CTOL Digital Solutions. "LiveBench's Latest November AI LLM Showdown." November 2024. Cite error: Invalid `<ref>` tag; name "nov2024" defined multiple times with different content

6. [↑](#cite_ref-aisec_6-0) AI Security Central. "LiveBench is an open LLM benchmark using contamination-free test data." 2024. Cite error: Invalid `<ref>` tag; name "aisec" defined multiple times with different content

7. [↑](#cite_ref-iclr_7-0) ICLR 2025. "LiveBench: A Challenging, Contamination-Limited LLM Benchmark." Spotlight Paper. Cite error: Invalid `<ref>` tag; name "iclr" defined multiple times with different content

## External Links

- [Official LiveBench Website](https://livebench.ai/)

- [LiveBench GitHub Repository](https://github.com/LiveBench/LiveBench)

- [LiveBench Paper on arXiv](https://arxiv.org/abs/2406.19314)

- [LiveBench OpenReview Page](https://openreview.net/forum?id=sKYHBTAxVa)