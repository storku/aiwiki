---
title: "MathArena"
slug: "matharena"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Mathematical_Reasoning"
  - "Mathematics_Competitions"
  - "Natural_Language_Processing"
  - "2025_in_artificial_intelligence"
---**

| MathArena |
| --- |
| Overview |
| Full name | MathArena: Evaluating LLMs on Uncontaminated Math Competitions |
| Description | A benchmark for evaluating [large language models](/wiki/large_language_model) on uncontaminated math competitions with both final-answer and proof-based problems
Property "Description" (as page type) with input value "A benchmark for evaluating [large language models](/wiki/large_language_model) on uncontaminated math competitions with both final-answer and proof-based problems" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| Release date | 2025-05-29 |
| Latest version | MathArena Apex |
| Benchmark updated | 2025-08-18 |
| Authors | [Mislav Balunović](/index.php?title=Mislav_Balunovi%C4%87&action=edit&redlink=1), [Jasper Dekoninck](/index.php?title=Jasper_Dekoninck&action=edit&redlink=1), [Ivo Petrov](/index.php?title=Ivo_Petrov&action=edit&redlink=1), [Nikola Jovanović](/index.php?title=Nikola_Jovanovi%C4%87&action=edit&redlink=1), [Martin Vechev](/index.php?title=Martin_Vechev&action=edit&redlink=1) |
| Organization | [ETH Zürich](/index.php?title=ETH_Z%C3%BCrich&action=edit&redlink=1), [SRI Lab](/index.php?title=SRI_Lab&action=edit&redlink=1) |
| Technical Details |
| Type | [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1), [Proof Writing](/index.php?title=Proof_Writing&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Mathematical Notation](/index.php?title=Mathematical_Notation&action=edit&redlink=1) |
| Task format | [Final answers, Mathematical proofs, Code-based solutions](/index.php?title=Final_answers,_Mathematical_proofs,_Code-based_solutions&action=edit&redlink=1) |
| Number of tasks | 149+ |
| Total examples | Varies by competition |
| Evaluation metric | [Pass@1 Accuracy](/index.php?title=Pass@1_Accuracy&action=edit&redlink=1), [Human-judged proof scores](/index.php?title=Human-judged_proof_scores&action=edit&redlink=1) |
| Domains | [Algebra](/index.php?title=Algebra&action=edit&redlink=1), [Number Theory](/index.php?title=Number_Theory&action=edit&redlink=1), [Combinatorics](/index.php?title=Combinatorics&action=edit&redlink=1), [Geometry](/index.php?title=Geometry&action=edit&redlink=1), [Analysis](/index.php?title=Analysis&action=edit&redlink=1) |
| Languages | English, Mathematical LaTeX |
| Performance |
| Human performance | 35.7% (USAMO 2025 median) |
| SOTA score | 31.0 |
| SOTA model | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) |
| SOTA date | 2025-08-18 |
| Saturated | No |
| Resources |
| Website | [Official website](https://matharena.ai/) |
| Paper | [Paper](https://arxiv.org/abs/2505.23281) |
| GitHub | [Repository](https://github.com/eth-sri/matharena) |
| Dataset | [Download](https://huggingface.co/datasets/matharena)

 |

MathArena** is a comprehensive [benchmark](/wiki/benchmark) designed to evaluate [large language models](/wiki/large_language_model) (LLMs) on uncontaminated [mathematical](/index.php?title=Mathematical&action=edit&redlink=1) competitions and olympiads. Developed by researchers at [ETH Zürich](/index.php?title=ETH_Z%C3%BCrich&action=edit&redlink=1)'s SRI Lab and released in May 2025, MathArena addresses critical issues in existing mathematical benchmarks by providing real-time evaluation on newly released problems and introducing the first systematic assessment of [proof writing](/index.php?title=Proof_writing&action=edit&redlink=1) capabilities in AI systems. The platform evaluates models on actual [mathematical competitions](/index.php?title=Mathematical_competitions&action=edit&redlink=1) including [AIME](/wiki/aime), [USAMO](/index.php?title=USAMO&action=edit&redlink=1), [IMO](/index.php?title=IMO&action=edit&redlink=1) (International Mathematical Olympiad), and [Project Euler](/index.php?title=Project_Euler&action=edit&redlink=1), ensuring that test problems have not been encountered during model training.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-website-2)

## Overview

MathArena represents a paradigm shift in evaluating mathematical capabilities of [AI systems](/index.php?title=AI_systems&action=edit&redlink=1) by focusing on genuine [mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1) rather than pattern recognition from potentially contaminated training data. The benchmark uniquely combines evaluation of computational problem-solving with formal [mathematical proof](/index.php?title=Mathematical_proof&action=edit&redlink=1) writing, providing a comprehensive assessment of mathematical intelligence in LLMs.[&#91;1&#93;](#cite_note-arxiv-1)

The platform operates on a principle of continuous evaluation, adding new problems as they are released from official mathematical competitions worldwide. This approach ensures that models are tested on problems they could not have seen during training, providing an authentic measure of their mathematical reasoning capabilities rather than their ability to retrieve memorized solutions.

### Key Innovations

MathArena introduces several groundbreaking features to mathematical AI evaluation:

- **Contamination elimination**: Real-time evaluation on newly released competition problems

- **Proof-writing assessment**: First benchmark to systematically evaluate formal mathematical proofs

- **Human expert evaluation**: [IMO](/index.php?title=IMO&action=edit&redlink=1)-level judges assess proof quality and rigor

- **Multi-format support**: Handles final-answer, proof-based, and code-based mathematical problems

- **Transparency**: Open-source implementation with detailed methodology

## Methodology

### Problem Categories

MathArena evaluates models across three distinct problem types:[&#91;2&#93;](#cite_note-website-2)

#### Final-Answer Competitions

These problems require numerical or algebraic answers without formal proofs:

- **[AIME](/wiki/aime)** (American Invitational Mathematics Examination)

- **[HMMT](/index.php?title=HMMT&action=edit&redlink=1)** (Harvard-MIT Mathematics Tournament)

- **BRUMO** (Brown University Mathematics Olympiad)

- **SMT** (Stanford Mathematics Tournament)

Models are evaluated using Pass@1 accuracy, with 4 standard runs per problem to account for variance in generation.

#### Proof-Based Competitions

These require formal mathematical proofs judged by human experts:

- **[USAMO](/index.php?title=USAMO&action=edit&redlink=1)** (USA Mathematical Olympiad)

- **[IMO](/index.php?title=IMO&action=edit&redlink=1)** (International Mathematical Olympiad)

- **[Putnam Competition](/index.php?title=Putnam_Competition&action=edit&redlink=1)**

Each proof is scored on a 7-point scale by experienced judges with [olympiad](/index.php?title=Olympiad&action=edit&redlink=1)-level expertise. Responses are anonymized and evaluated independently by two judges to ensure fairness.

#### Math+Code Problems

- **[Project Euler](/index.php?title=Project_Euler&action=edit&redlink=1)**: Computational mathematics problems requiring both mathematical insight and programming implementation

Models can use either custom scaffolding with multi-turn code execution or provider-specific code interpreters.

### MathArena Apex

Introduced in August 2025, MathArena Apex is a curated collection of recent final-answer problems specifically selected to challenge state-of-the-art models. These problems are evaluated with 16 runs per model (compared to 4 standard runs) for more robust statistical analysis.[&#91;3&#93;](#cite_note-apex-3)

### Evaluation Framework

The evaluation process employs rigorous statistical methods:[&#91;1&#93;](#cite_note-arxiv-1)

- **Standard evaluation**: 4 runs per problem for final-answer questions

- **Apex evaluation**: 16 runs per problem for enhanced statistical significance

- **Token limits**: 64,000 tokens standard (128,000 for specific models)

- **Cost tracking**: Detailed USD cost calculation per model evaluation

- **Confidence intervals**: Statistical analysis with configurable significance levels

For proof-based problems:

- **Scoring system**: 7 points per problem (IMO standard)

- **Judge selection**: 4 experienced judges with olympiad-level expertise

- **Double-blind review**: Anonymized responses graded independently

- **Real-time assessment**: Evaluation begins immediately after problem release

## Performance Results

### IMO 2025 Results

Performance on the International Mathematical Olympiad 2025 problems (6 problems, 42 points total):[&#91;2&#93;](#cite_note-website-2)

| Rank | Model | Organization | Score | Percentage | Medal Achievement |
| --- | --- | --- | --- | --- | --- |
| 1 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro | [Google](/index.php?title=Google&action=edit&redlink=1) | 13 points | 31.0% | Below Bronze (requires 19 points) |
| 2 | [Grok](/wiki/grok) 4 (updated prompt) | [xAI](/wiki/xai) | 9 points | 21.43% | No medal |
| 3 | [o3](/index.php?title=O3&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 8 points | 19.05% | No medal |
| 4 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 7 points | 16.67% | No medal |
| 5 | [Claude](/wiki/claude) 4 Sonnet | [Anthropic](/wiki/anthropic) | 6 points | 14.29% | No medal |

No model achieved the Bronze medal threshold of 19/42 points, highlighting the difficulty of IMO problems.

### USAMO 2025 Performance

USA Mathematical Olympiad 2025 results (6 problems, 42 points total, proof-based):[&#91;4&#93;](#cite_note-proof-4)

| Rank | Model | Organization | Score | Percentage |
| --- | --- | --- | --- | --- |
| 1 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro | [Google](/index.php?title=Google&action=edit&redlink=1) | 10.1 points | 24.0% |
| 2 | [o3](/index.php?title=O3&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 9.2 points | 21.9% |
| 3 | [o4-mini](/index.php?title=O4-mini&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 8.1 points | 19.3% |
| 4 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 7.5 points | 17.9% |
| 5 | [Claude](/wiki/claude) 4 Opus | [Anthropic](/wiki/anthropic) | 6.8 points | 16.2% |

**Human median performance**: 35.7%

### Final-Answer Competition Performance

Top models on numerical problem competitions achieve significantly higher scores:[&#91;2&#93;](#cite_note-website-2)

| Model | Average Accuracy | Strength |
| --- | --- | --- |
| [o3](/index.php?title=O3&action=edit&redlink=1) HIGH | 87% | Exceeds top 1% human performance |
| [o4-mini](/index.php?title=O4-mini&action=edit&redlink=1) HIGH | 86% | Exceeds top 1% human performance |
| [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro | 86% | Exceeds top 1% human performance |
| [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) | 82% | Strong performance |
| [Claude](/wiki/claude) 4 Opus | 79% | Strong performance |

### MathArena Apex Results

Performance on the specially curated challenging problems (as of August 2025):[&#91;3&#93;](#cite_note-apex-3)

| Rank | Model | Accuracy | Cost (USD) |
| --- | --- | --- | --- |
| 1 | [Qwen](/wiki/qwen)3-A22B-2507-Think | 5.21% | $9.89 |
| 2 | [Grok](/wiki/grok) 4 | 2.08% | $99.39 |
| 3 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) (High) Agent | 2.08% | $183.79 |
| 4 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1)-mini (high) | 1.04% | $13.42 |
| 5 | [GLM](/index.php?title=GLM&action=edit&redlink=1) 4.5 | 1.04% | $14.50 |

These results demonstrate that even state-of-the-art models struggle with carefully selected challenging problems.

## Problem Domains and Difficulty

### Mathematical Domains Covered

MathArena problems span the full spectrum of competition mathematics:[&#91;1&#93;](#cite_note-arxiv-1)

- **[Algebra](/index.php?title=Algebra&action=edit&redlink=1)**: Polynomial equations, functional equations, inequalities

- **[Number Theory](/index.php?title=Number_Theory&action=edit&redlink=1)**: Divisibility, modular arithmetic, Diophantine equations

- **[Combinatorics](/index.php?title=Combinatorics&action=edit&redlink=1)**: Counting, graph theory, combinatorial geometry

- **[Geometry](/index.php?title=Geometry&action=edit&redlink=1)**: Euclidean geometry, coordinate geometry, transformations

- **[Analysis](/index.php?title=Analysis&action=edit&redlink=1)**: Calculus, sequences, series (primarily in Putnam)

- **[Discrete Mathematics](/index.php?title=Discrete_Mathematics&action=edit&redlink=1)**: Logic, set theory, algorithms

### Difficulty Classification

MathArena uses a color-coded system to indicate problem difficulty based on model performance:[&#91;2&#93;](#cite_note-website-2)

| Color | Success Rate | Interpretation |
| --- | --- | --- |
| Green | >75% | Routinely solved by models |
| Yellow | 25-75% | Moderate difficulty |
| Orange | 1-24% | Very challenging |
| Red | 0% | Unsolved by any model |

### Performance Analysis by Domain

Research reveals significant variation in model performance across mathematical domains:[&#91;1&#93;](#cite_note-arxiv-1)

- **Strongest performance**: Algebra and Number Theory problems

- **Moderate performance**: Analysis and discrete mathematics

- **Weakest performance**: Combinatorics and Geometry problems

This pattern suggests that current LLMs excel at symbolic manipulation and pattern-based reasoning but struggle with spatial reasoning and complex combinatorial arguments.

## Contamination Analysis

### Evidence of Training Data Contamination

MathArena's analysis revealed significant contamination in existing benchmarks:[&#91;1&#93;](#cite_note-arxiv-1)

#### AIME 2024 Contamination

Models showed anomalous performance on AIME 2024 problems:

- Expected performance based on human percentiles: ~25-30%

- Actual model performance: ~85-90%

- Conclusion: Strong evidence of training data contamination

#### Comparison with Fresh Problems

When evaluated on genuinely new problems:

- Performance drops by 50-70% compared to potentially contaminated benchmarks

- Models struggle with novel problem formulations

- Significant gap between memorization and genuine reasoning

### Contamination Prevention Measures

MathArena implements several strategies to ensure evaluation integrity:

- **Real-time evaluation**: Problems added immediately upon public release

- **Embargo period**: No public release of solutions during evaluation

- **Version tracking**: Monitoring of problem appearances in training corpora

- **Statistical analysis**: Detection of anomalous performance patterns

## Technical Implementation

### Infrastructure

MathArena provides a comprehensive evaluation framework:[&#91;5&#93;](#cite_note-github-5)

- **Open source**: Complete codebase available on GitHub

- **Package management**: UV package manager for dependencies

- **Dataset hosting**: Problems and solutions on [HuggingFace](/index.php?title=HuggingFace&action=edit&redlink=1)

- **API support**: Integration with major LLM providers

### Evaluation Pipeline

The standard evaluation process consists of:

1. **Problem selection**: Choosing competitions and specific problems

2. **Model configuration**: Setting token limits and generation parameters

3. **Response generation**: Multiple runs per problem for statistical validity

4. **Answer extraction**: Parsing numerical answers or proof text

5. **Scoring**: Automated for final answers, human judges for proofs

6. **Statistical analysis**: Confidence intervals and significance testing

### Dataset Format

MathArena datasets follow a standardized structure:[&#91;5&#93;](#cite_note-github-5)

- **Required fields**:

 * `problem_idx`: Unique identifier
 * `problem`: LaTeX-formatted problem statement
 * `answer`: Ground truth (optional for proof problems)

- **Optional fields**:

```
 * `points`: Maximum score
 * `sample_solution`: Example solution
 * `grading_scheme`: Scoring rubric
 * `difficulty`: Problem difficulty rating

```

## Human Evaluation Process

### Judge Selection and Training

MathArena employs expert mathematicians for proof evaluation:[&#91;4&#93;](#cite_note-proof-4)

- **Qualification requirements**: IMO-level competition experience

- **Training process**: Calibration on sample problems with known scores

- **Ongoing quality control**: Inter-rater reliability monitoring

- **Judge pool**: 4 core judges with additional experts for specific domains

### Grading Methodology

The proof grading process follows [IMO](/index.php?title=IMO&action=edit&redlink=1) standards:

1. **Anonymization**: All model identifiers removed

2. **Independent review**: Two judges score each proof separately

3. **Score reconciliation**: Discussion for scores differing by >2 points

4. **Final score**: Average of two judge scores

5. **Appeals process**: Third judge for contested scores

### Evaluation Criteria

Proofs are assessed on multiple dimensions:

- **Correctness**: Mathematical validity of arguments

- **Completeness**: All cases considered and proven

- **Rigor**: Formal mathematical exposition

- **Clarity**: Logical flow and presentation

- **Innovation**: Creative problem-solving approaches

## Impact and Significance

### Research Community Impact

MathArena has influenced mathematical AI research through:[&#91;1&#93;](#cite_note-arxiv-1)

- **Benchmark adoption**: Used by major AI labs for model development

- **Methodology influence**: Contamination-aware evaluation becoming standard

- **Dataset contributions**: Open Proof Corpus with 5,000+ evaluated proofs

- **Research direction**: Renewed focus on genuine reasoning vs. memorization

### Industry Adoption

Leading AI companies use MathArena for:

- **Model evaluation**: Assessing mathematical capabilities

- **Training validation**: Ensuring models aren't overfitting to known problems

- **Competitive analysis**: Comparing model performance

- **Development priorities**: Identifying areas for improvement

### Educational Applications

MathArena data supports:

- **AI tutoring systems**: Understanding common solution approaches

- **Problem generation**: Creating new mathematical challenges

- **Student assessment**: Comparing human and AI performance

- **Curriculum development**: Identifying conceptual difficulties

## Limitations and Future Work

### Current Limitations

MathArena acknowledges several constraints:[&#91;1&#93;](#cite_note-arxiv-1)

- **Language limitation**: Currently English-only problems

- **Competition focus**: May not represent all mathematical reasoning

- **Human evaluation bottleneck**: Proof grading requires expert time

- **Cost considerations**: Expensive to run comprehensive evaluations

### Planned Extensions

The MathArena team has outlined future developments:

- **Multilingual support**: Problems in multiple languages

- **Automated proof checking**: Integration with formal verification systems

- **Interactive problem solving**: Multi-turn mathematical dialogue

- **Curriculum coverage**: Beyond competition mathematics

- **Real-time leaderboard**: Continuous model evaluation

## Related Benchmarks

MathArena complements and improves upon existing mathematical benchmarks:

- **[GSM8K](/index.php?title=GSM8K&action=edit&redlink=1)**: Grade school math problems (contamination issues identified)

- **[MATH](/wiki/math)**: High school competition problems (static dataset)

- **[MMLU](/wiki/mmlu) Mathematics**: Multiple choice questions (limited depth)

- **[Minerva](/index.php?title=Minerva&action=edit&redlink=1)**: Mathematical reasoning benchmark

- **[MathVista](/index.php?title=MathVista&action=edit&redlink=1)**: Visual mathematical reasoning

- **[OlympiadBench](/index.php?title=OlympiadBench&action=edit&redlink=1)**: Olympiad problems (predecessor to MathArena)

## See Also

- [Mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [International Mathematical Olympiad](/index.php?title=International_Mathematical_Olympiad&action=edit&redlink=1)

- [Proof assistant](/index.php?title=Proof_assistant&action=edit&redlink=1)

- [Automated theorem proving](/index.php?title=Automated_theorem_proving&action=edit&redlink=1)

- [Mathematics competitions](/index.php?title=Mathematics_competitions&action=edit&redlink=1)

- [AI benchmarking](/index.php?title=AI_benchmarking&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arxiv_1-0) [1.1](#cite_ref-arxiv_1-1) [1.2](#cite_ref-arxiv_1-2) [1.3](#cite_ref-arxiv_1-3) [1.4](#cite_ref-arxiv_1-4) [1.5](#cite_ref-arxiv_1-5) [1.6](#cite_ref-arxiv_1-6) [1.7](#cite_ref-arxiv_1-7) Balunović, Mislav, et al. "MathArena: Evaluating LLMs on Uncontaminated Math Competitions." arXiv preprint arXiv:2505.23281 (2025). Cite error: Invalid `<ref>` tag; name "arxiv" defined multiple times with different content

2. ↑ [2.0](#cite_ref-website_2-0) [2.1](#cite_ref-website_2-1) [2.2](#cite_ref-website_2-2) [2.3](#cite_ref-website_2-3) [2.4](#cite_ref-website_2-4) MathArena Official Website. [https://matharena.ai/](https://matharena.ai/) Accessed August 2025.

3. ↑ [3.0](#cite_ref-apex_3-0) [3.1](#cite_ref-apex_3-1) MathArena Team. "MathArena Apex: Challenging SOTA Models." August 2025. [https://matharena.ai/apex](https://matharena.ai/apex)

4. ↑ [4.0](#cite_ref-proof_4-0) [4.1](#cite_ref-proof_4-1) Petrov, Ivo, et al. "Proof or Bluff? Evaluating LLMs on 2025 USA Math Olympiad." arXiv:2503.21934 (2025). Cite error: Invalid `<ref>` tag; name "proof" defined multiple times with different content

5. ↑ [5.0](#cite_ref-github_5-0) [5.1](#cite_ref-github_5-1) MathArena GitHub Repository. [https://github.com/eth-sri/matharena](https://github.com/eth-sri/matharena) Accessed August 2025.

## External Links

- [Official MathArena Website](https://matharena.ai/)

- [MathArena GitHub Repository](https://github.com/eth-sri/matharena)

- [MathArena Paper on arXiv](https://arxiv.org/abs/2505.23281)

- [MathArena Datasets on HuggingFace](https://huggingface.co/datasets/matharena)

- [ETH Zürich SRI Lab](https://srilab.ethz.ch/)