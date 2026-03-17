---
title: "SimpleBench"
slug: "simplebench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Reasoning"
  - "Common_Sense"
  - "Natural_Language_Processing"
  - "2024_in_artificial_intelligence"
---**

| SimpleBench |
| --- |
| Overview |
| Full name | SimpleBench: The Text Benchmark in which Unspecialized Human Performance Exceeds that of Current Frontier Models |
| Description | A benchmark testing [large language models](/wiki/large_language_model) on basic spatial, temporal, and social reasoning where humans significantly outperform AI
Property "Description" (as page type) with input value "A benchmark testing [large language models](/wiki/large_language_model) on basic spatial, temporal, and social reasoning where humans significantly outperform AI" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| Release date | 2024-10-31 |
| Latest version | 1.0 |
| Benchmark updated | 2024-12-20 |
| Authors | [Philip](/index.php?title=Philip&action=edit&redlink=1), [Hemang](/index.php?title=Hemang&action=edit&redlink=1) |
| Organization | [AI Explained](/index.php?title=AI_Explained&action=edit&redlink=1), [AI Insiders](/index.php?title=AI_Insiders&action=edit&redlink=1) |
| Technical Details |
| Type | [Reasoning](/index.php?title=Reasoning&action=edit&redlink=1), [Common Sense](/index.php?title=Common_Sense&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice (6 options)](/index.php?title=Multiple_choice_(6_options)&action=edit&redlink=1) |
| Number of tasks | 3 |
| Total examples | 200+ |
| Evaluation metric | [AVG@5 (Average accuracy across 5 runs)](/index.php?title=AVG@5_(Average_accuracy_across_5_runs)&action=edit&redlink=1) |
| Domains | [Spatial Reasoning](/index.php?title=Spatial_Reasoning&action=edit&redlink=1), [Temporal Reasoning](/index.php?title=Temporal_Reasoning&action=edit&redlink=1), [Social Intelligence](/index.php?title=Social_Intelligence&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 83.7 |
| Baseline | 16.67 |
| SOTA score | 62.4 |
| SOTA model | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) |
| SOTA date | 2025-06-05 |
| Saturated | No |
| Resources |
| Website | [Official website](https://simple-bench.com/) |
| GitHub | [Repository](https://github.com/simple-bench/SimpleBench) |
| Dataset | [Download](https://huggingface.co/datasets/Impulse2000/simple_bench_public-20-12-2024) |
| License | MIT License

 |

SimpleBench** is a [benchmark](/wiki/benchmark) designed to evaluate [large language models](/wiki/large_language_model) (LLMs) on fundamental [reasoning](/index.php?title=Reasoning&action=edit&redlink=1) tasks where unspecialized humans consistently outperform current AI systems. Released on October 31, 2024, by Philip of AI Explained and Hemang, SimpleBench tests [spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1), [temporal reasoning](/index.php?title=Temporal_reasoning&action=edit&redlink=1), and [social intelligence](/index.php?title=Social_intelligence&action=edit&redlink=1) through over 200 multiple-choice questions that require only high school-level knowledge. The benchmark is notable for revealing a significant performance gap between humans (83.7% accuracy) and the best-performing AI models (62.4% accuracy), highlighting fundamental limitations in current [artificial intelligence](/wiki/artificial_intelligence) systems' ability to perform basic common-sense reasoning.[&#91;1&#93;](#cite_note-report-1)[&#91;2&#93;](#cite_note-website-2)

## Overview

SimpleBench emerged from the observation that while [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) excel at tasks requiring memorized knowledge and approximate reasoning, such as passing bar exams, solving complex mathematics problems, and writing code, they struggle with basic reasoning tasks that humans find trivial. The benchmark specifically targets areas where [common sense](/index.php?title=Common_sense&action=edit&redlink=1) and intuitive understanding are more important than specialized knowledge or pattern recognition.[&#91;1&#93;](#cite_note-report-1)

The benchmark's design philosophy centers on creating questions that:

- Require only high school-level knowledge to answer

- Test fundamental reasoning rather than memorized facts

- Are easily solvable by humans without specialized training

- Reveal genuine understanding versus pattern matching

This approach makes SimpleBench unique among AI benchmarks, as it is one of the few evaluation frameworks where human performance significantly and consistently exceeds that of state-of-the-art AI models, even as these models continue to improve on other benchmarks.[&#91;2&#93;](#cite_note-website-2)

## Methodology

### Question Design

SimpleBench questions are carefully crafted to test three core reasoning capabilities:[&#91;1&#93;](#cite_note-report-1)

#### Spatial Reasoning

Questions evaluate understanding of:

- Physical relationships between objects

- Gravitational effects and support structures

- Geometric and positional concepts

- Basic physics intuitions (for example unsupported objects fall)

#### Temporal Reasoning

Questions assess comprehension of:

- Duration estimation and time relationships

- Sequence understanding and ordering

- Cause-and-effect temporal chains

- Time-based planning and scheduling

#### Social Intelligence

Questions test ability to:

- Predict human behavior in common situations

- Understand social norms and conventions

- Interpret interpersonal dynamics

- Apply theory of mind concepts

Additionally, the benchmark includes **linguistic adversarial robustness** questions, "trick questions" designed to test whether models can identify and handle misleading or ambiguous language constructs.

### Evaluation Framework

The evaluation protocol employs rigorous statistical methods to ensure reliable results:[&#91;1&#93;](#cite_note-report-1)

| Parameter | Value | Purpose |
| --- | --- | --- |
| Runs per question | 5 | Statistical reliability |
| Temperature | 0.7 | Controlled randomness |
| Top-p | 0.95 | Nucleus sampling |
| Prompting | Chain-of-Thought | Step-by-step reasoning |
| Answer format | Multiple choice (A-F) | 6 options per question |
| Scoring metric | AVG@5 | Average across 5 runs |

For models like the [o1 series](/index.php?title=O1_series&action=edit&redlink=1) where temperature cannot be controlled, default settings are used with the same number of evaluation runs.

### Dataset Structure

SimpleBench maintains a careful balance between transparency and test integrity:[&#91;3&#93;](#cite_note-huggingface-3)

- **Public sample**: 10 questions available for inspection

- **Private test set**: 200+ questions kept confidential

- **Format**: JSON with question_id, prompt, and answer fields

- **License**: MIT License for code and public samples

This structure prevents [test set contamination](/index.php?title=Test_set_contamination&action=edit&redlink=1) while allowing researchers to understand the benchmark's nature.

## Performance Results

### Current Leaderboard (2025)

The SimpleBench leaderboard reveals a persistent gap between human and AI performance:[&#91;2&#93;](#cite_note-website-2)

| Rank | Model | Organization | Score (AVG@5) | Gap from Human |
| --- | --- | --- | --- | --- |
| - | **Human Baseline** | - | **83.7%** | 0% |
| 1 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro (06-05) | [Google](/index.php?title=Google&action=edit&redlink=1) | 62.4% | -21.3% |
| 2 | [Grok](/wiki/grok) 4 | [xAI](/wiki/xai) | 60.5% | -23.2% |
| 3 | [Claude](/wiki/claude) 4.1 Opus | [Anthropic](/wiki/anthropic) | 60.0% | -23.7% |
| 4 | [Claude](/wiki/claude) 4 Opus (thinking) | [Anthropic](/wiki/anthropic) | 58.8% | -24.9% |
| 5 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) (high) | [OpenAI](/wiki/openai) | 56.7% | -27.0% |
| 6 | [o3](/index.php?title=O3&action=edit&redlink=1) (high) | [OpenAI](/wiki/openai) | 53.1% | -30.6% |
| 7 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro (03-25) | [Google](/index.php?title=Google&action=edit&redlink=1) | 51.6% | -32.1% |
| 8 | [Claude](/wiki/claude) 3.7 Sonnet (thinking) | [Anthropic](/wiki/anthropic) | 46.4% | -37.3% |
| 9 | [Claude](/wiki/claude) 4 Sonnet (thinking) | [Anthropic](/wiki/anthropic) | 45.5% | -38.2% |
| 10 | [Claude](/wiki/claude) 3.7 Sonnet | [Anthropic](/wiki/anthropic) | 44.9% | -38.8% |
| 11 | [o1-preview](/index.php?title=O1-preview&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 41.7% | -42.0% |
| 12 | [Claude](/wiki/claude) 3.5 Sonnet | [Anthropic](/wiki/anthropic) | 41.4% | -42.3% |
| 13 | [DeepSeek](/wiki/deepseek) R1 | [DeepSeek](/wiki/deepseek) | 40.8% | -42.9% |
| - | **Random Baseline** | - | **16.67%** | -67.0% |

### Human Performance Analysis

Human evaluation provides crucial context for understanding the benchmark:[&#91;1&#93;](#cite_note-report-1)

| Participant Group | Average Score | Sample Size | Notes |
| --- | --- | --- | --- |
| Unspecialized adults | 83.7% | 9 participants | No special preparation |
| Motivated individuals | 92% | Not specified | Given time and incentive |
| Random guessing | 16.67% | Theoretical | 1/6 probability |

The significant gap between human performance and even the best AI models (21.3% difference) demonstrates that current LLMs lack fundamental reasoning capabilities that humans take for granted.

### Performance Trends

Analysis of model performance reveals several patterns:[&#91;2&#93;](#cite_note-website-2)

- **Thinking models**: Models with explicit reasoning steps (for example Claude with thinking) show modest improvements

- **Scale limitations**: Larger models don't necessarily perform better on SimpleBench

- **Architecture variance**: Different model architectures show similar struggles with basic reasoning

- **Specialized vs. general**: Models optimized for specific tasks (math, coding) may perform worse on common-sense reasoning

## Technical Implementation

### Installation and Setup

SimpleBench provides a straightforward evaluation framework:[&#91;4&#93;](#cite_note-github-4)

```bash

1. Installation

git clone [https://github.com/simple-bench/SimpleBench](https://github.com/simple-bench/SimpleBench)
cd SimpleBench
pip install -r requirements.txt

1. Running evaluation

python run_benchmark.py \

 --model_name=gpt-4o \
 --dataset_path=simple_bench_public.json

```

### Requirements

- **Python**: Version 3.10.11 or higher

- **Package manager**: UV for dependency management

- **API keys**: Required for model providers (OpenAI, Anthropic, Google, etc.)

- **Hardware**: Minimal requirements (CPU-based evaluation)

### Evaluation Metrics

SimpleBench introduces specialized metrics for robust evaluation:[&#91;1&#93;](#cite_note-report-1)

- **AVG@5**: Average accuracy across 5 independent runs

- **EAG@5**: Extreme Averaging - newly introduced metric for outlier detection

- **Per-category scores**: Breakdown by spatial, temporal, and social reasoning

- **Consistency analysis**: Variance across multiple runs

## Significance and Impact

### Research Implications

SimpleBench has revealed critical insights about current AI limitations:[&#91;1&#93;](#cite_note-report-1)

1. **Knowledge vs. Understanding**: Models excel at retrieving memorized information but struggle with basic reasoning

2. **Pattern matching limitations**: Current architectures rely heavily on pattern recognition rather than genuine comprehension

3. **Common sense gap**: The inability to perform simple reasoning tasks humans find trivial

4. **Benchmark contamination**: Success on other benchmarks may reflect memorization rather than capability

### Theoretical Contributions

The benchmark challenges several assumptions about AI progress:

- **Scaling hypothesis**: Larger models don't necessarily improve on basic reasoning

- **Emergent abilities**: Some fundamental capabilities may not emerge from scale alone

- **Evaluation validity**: High scores on complex benchmarks may mask basic deficiencies

- **Human-AI parity**: True human-level AI requires more than pattern matching

### Industry Impact

SimpleBench influences AI development by:

- **Highlighting gaps**: Identifying fundamental reasoning deficiencies

- **Guiding research**: Directing attention to neglected capabilities

- **Tempering expectations**: Providing realistic assessment of AI limitations

- **Benchmark diversity**: Encouraging evaluation beyond traditional metrics

## Comparison with Other Benchmarks

SimpleBench occupies a unique position in the benchmark landscape:

| Benchmark | Focus | Human Performance | AI Performance | Gap |
| --- | --- | --- | --- | --- |
| SimpleBench | Basic reasoning | 83.7% | 62.4% (best) | 21.3% |
| [MMLU](/wiki/mmlu) | Academic knowledge | 89.8% | ~90% | ~0% |
| [HumanEval](/wiki/humaneval) | Coding | Variable | >90% | AI exceeds |
| [ARC](/index.php?title=ARC&action=edit&redlink=1) | Science reasoning | 80% | 96% | AI exceeds |
| [HellaSwag](/wiki/hellaswag) | Common sense | 95.6% | 95% | ~0% |

SimpleBench stands out as one of the few benchmarks where humans maintain a substantial and persistent advantage over AI systems.

## Limitations and Criticisms

### Current Limitations

SimpleBench acknowledges several constraints:[&#91;1&#93;](#cite_note-report-1)

- **Limited public dataset**: Only 10 public examples available

- **English-only**: Questions limited to English language

- **Multiple choice format**: May not capture full reasoning process

- **Domain coverage**: Focus on specific reasoning types

### Potential Improvements

Researchers have proposed enhancements:[&#91;5&#93;](#cite_note-notso-5)

- **Iterative reasoning**: Multi-step evaluation approaches

- **Feedback mechanisms**: Learning from incorrect attempts

- **Hybrid approaches**: Combining symbolic and neural methods

- **Expanded domains**: Additional reasoning categories

## Future Directions

### Planned Developments

The SimpleBench team has outlined future plans:[&#91;2&#93;](#cite_note-website-2)

- **Dataset expansion**: Additional questions and categories

- **Multilingual support**: Versions in other languages

- **Dynamic updates**: Regular addition of new questions

- **Human studies**: Expanded human performance baselines

### Research Opportunities

SimpleBench opens several research avenues:

- **Reasoning architectures**: New approaches to basic reasoning

- **Hybrid systems**: Combining neural and symbolic methods

- **Transfer learning**: Leveraging human reasoning patterns

- **Interpretability**: Understanding why models fail on simple tasks

## Related Work

SimpleBench builds upon and complements other reasoning benchmarks:

- **[BIG-Bench](/index.php?title=BIG-Bench&action=edit&redlink=1)**: Broader task coverage but less focus on basic reasoning

- **[Winograd Schema Challenge](/index.php?title=Winograd_Schema_Challenge&action=edit&redlink=1)**: Common sense but narrower scope

- **[bAbI](/index.php?title=BAbI&action=edit&redlink=1)**: Reasoning tasks but synthetic rather than natural

- **[PIQA](/index.php?title=PIQA&action=edit&redlink=1)**: Physical reasoning but different format

- **[Social IQa](/index.php?title=Social_IQa&action=edit&redlink=1)**: Social intelligence but more complex scenarios

## See Also

- [Common sense reasoning](/index.php?title=Common_sense_reasoning&action=edit&redlink=1)

- [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1)

- [Temporal reasoning](/index.php?title=Temporal_reasoning&action=edit&redlink=1)

- [Social intelligence](/index.php?title=Social_intelligence&action=edit&redlink=1)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [AI benchmarking](/index.php?title=AI_benchmarking&action=edit&redlink=1)

- [Human-AI comparison](/index.php?title=Human-AI_comparison&action=edit&redlink=1)

- [Theory of mind](/index.php?title=Theory_of_mind&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-report_1-0) [1.1](#cite_ref-report_1-1) [1.2](#cite_ref-report_1-2) [1.3](#cite_ref-report_1-3) [1.4](#cite_ref-report_1-4) [1.5](#cite_ref-report_1-5) [1.6](#cite_ref-report_1-6) [1.7](#cite_ref-report_1-7) Philip and Hemang. "SimpleBench: The Text Benchmark in which Unspecialized Human Performance Exceeds that of Current Frontier Models." October 31, 2024. Cite error: Invalid `<ref>` tag; name "report" defined multiple times with different content

2. ↑ [2.0](#cite_ref-website_2-0) [2.1](#cite_ref-website_2-1) [2.2](#cite_ref-website_2-2) [2.3](#cite_ref-website_2-3) [2.4](#cite_ref-website_2-4) SimpleBench Official Website. [https://simple-bench.com/](https://simple-bench.com/) Accessed August 2025.

3. [↑](#cite_ref-huggingface_3-0) SimpleBench Dataset. Hugging Face. [https://huggingface.co/datasets/Impulse2000/simple_bench_public-20-12-2024](https://huggingface.co/datasets/Impulse2000/simple_bench_public-20-12-2024) Cite error: Invalid `<ref>` tag; name "huggingface" defined multiple times with different content

4. [↑](#cite_ref-github_4-0) SimpleBench GitHub Repository. [https://github.com/simple-bench/SimpleBench](https://github.com/simple-bench/SimpleBench) Accessed August 2025.

5. [↑](#cite_ref-notso_5-0) Researchers. "A NotSo Simple Way to Beat Simple Bench." arXiv:2412.12173 (2024). Cite error: Invalid `<ref>` tag; name "notso" defined multiple times with different content

## External Links

- [Official SimpleBench Website](https://simple-bench.com/)

- [SimpleBench GitHub Repository](https://github.com/simple-bench/SimpleBench)

- [SimpleBench Public Dataset on Hugging Face](https://huggingface.co/datasets/Impulse2000/simple_bench_public-20-12-2024)

- [AI Explained YouTube Channel](https://www.youtube.com/@aiexplained-official)