---
title: "MMLU-Pro"
slug: "mmlu-pro"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Language_Understanding_Benchmarks"
  - "Multi-task_Benchmarks"
  - "2024_Benchmarks"
  - "Knowledge_Benchmarks"
  - "Reasoning_Benchmarks"
---**

| MMLU-Pro |
| --- |
| Overview |
| Full name | Massive Multitask Language Understanding Professional |
| Abbreviation | MMLU-Pro |
| Description | A more robust and challenging multi-task language understanding benchmark with 10-choice questions |
| Release date | 2024-06 |
| Latest version | 1.0 |
| Benchmark updated | 2024-10 |
| Authors | [Yubo Wang](/index.php?title=Yubo_Wang&action=edit&redlink=1), [Xueguang Ma](/index.php?title=Xueguang_Ma&action=edit&redlink=1), [Ge Zhang](/index.php?title=Ge_Zhang&action=edit&redlink=1), [Et al.](/index.php?title=Et_al.&action=edit&redlink=1) |
| Organization | [TIGER-AI Lab](/index.php?title=TIGER-AI_Lab&action=edit&redlink=1) |
| Technical Details |
| Type | [Knowledge](/index.php?title=Knowledge&action=edit&redlink=1), [Reasoning](/index.php?title=Reasoning&action=edit&redlink=1), [Multi-task Understanding](/index.php?title=Multi-task_Understanding&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice (10 options)](/index.php?title=Multiple_choice_(10_options)&action=edit&redlink=1) |
| Number of tasks | 12,000+ |
| Total examples | 12,000+ |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Chain-of-Thought performance](/index.php?title=Chain-of-Thought_performance&action=edit&redlink=1) |
| Domains | [14 domains (Biology](/index.php?title=14_domains_(Biology&action=edit&redlink=1), [Business](/wiki/business), [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1), [Computer Science](/index.php?title=Computer_Science&action=edit&redlink=1), [Etc.)](/index.php?title=Etc.)&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | ~90% (estimated) |
| Baseline | Random guess: 10% |
| SOTA score | 83.5% |
| SOTA model | [OpenAI o1](/index.php?title=OpenAI_o1&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://huggingface.co/spaces/TIGER-Lab/MMLU-Pro) |
| Paper | [Paper](https://arxiv.org/abs/2406.01574) |
| GitHub | [Repository](https://github.com/TIGER-AI-Lab/MMLU-Pro) |
| Dataset | [Download](https://huggingface.co/datasets/TIGER-Lab/MMLU-Pro) |
| License | MIT |
| Predecessor | [MMLU](/wiki/mmlu) |

MMLU-Pro** (Massive Multitask Language Understanding Professional) is an advanced [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' capabilities across challenging multi-task language understanding problems. Released in June 2024 by the [TIGER-AI Lab](/index.php?title=TIGER-AI_Lab&action=edit&redlink=1), MMLU-Pro extends the original [MMLU](/wiki/mmlu) benchmark by incorporating more complex reasoning-focused questions, expanding answer choices from four to ten options, and eliminating trivial or noisy questions, resulting in a more robust and discriminative evaluation framework.

## Overview

MMLU-Pro addresses the performance saturation observed in the original MMLU benchmark, where frontier models had converged to scores between 86-87%, making it difficult to distinguish between model capabilities. By increasing both the difficulty and robustness of questions while reducing prompt sensitivity, MMLU-Pro provides a more challenging and stable evaluation environment for modern language models.

### Motivation

The development of MMLU-Pro was driven by several critical observations:

- Performance saturation on original MMLU, with top models clustering at 86-87% accuracy

- High sensitivity to prompt variations in MMLU (4-5% variance)

- Limited discrimination between frontier models

- Insufficient emphasis on reasoning versus pure knowledge recall

- Presence of trivial and noisy questions in the original dataset

The benchmark specifically targets the need for more challenging evaluations that can differentiate between increasingly capable AI systems while providing more stable and reliable measurements.

## Technical Specifications

### Dataset Composition

MMLU-Pro comprises over 12,000 rigorously curated questions spanning 14 diverse domains:

| Domain | Description | Question Types | Approximate Count |
| --- | --- | --- | --- |
| [Biology](/index.php?title=Biology&action=edit&redlink=1) | Life sciences and biological systems | Conceptual, analytical | ~850 |
| [Business](/wiki/business) | Commerce, management, economics | Case studies, theory | ~850 |
| [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1) | Chemical processes and reactions | Problem-solving, theory | ~850 |
| [Computer Science](/index.php?title=Computer_Science&action=edit&redlink=1) | Programming, algorithms, theory | Code analysis, concepts | ~850 |
| [Economics](/index.php?title=Economics&action=edit&redlink=1) | Economic theory and applications | Models, analysis | ~850 |
| [Engineering](/index.php?title=Engineering&action=edit&redlink=1) | Applied sciences and design | Technical problems | ~850 |
| [Health](/wiki/health) | Medical and health sciences | Clinical, research | ~850 |
| [History](/index.php?title=History&action=edit&redlink=1) | Historical events and analysis | Factual, interpretive | ~850 |
| [Law](/wiki/law) | Legal principles and applications | Case law, theory | ~850 |
| [Mathematics](/index.php?title=Mathematics&action=edit&redlink=1) | Pure and applied mathematics | Problem-solving | ~850 |
| [Philosophy](/index.php?title=Philosophy&action=edit&redlink=1) | Philosophical concepts and reasoning | Logical analysis | ~850 |
| [Physics](/index.php?title=Physics&action=edit&redlink=1) | Physical sciences and mechanics | Calculations, concepts | ~850 |
| [Psychology](/index.php?title=Psychology&action=edit&redlink=1) | Human behavior and cognition | Theory, research | ~850 |
| Other | Miscellaneous disciplines | Various | ~850 |

### Key Improvements Over MMLU

| Feature | MMLU | MMLU-Pro | Improvement |
| --- | --- | --- | --- |
| Answer Choices | 4 options | 10 options | 150% increase |
| Random Guess Rate | 25% | 10% | 60% reduction |
| Prompt Sensitivity | 4-5% variance | ~2% variance | 50-60% reduction |
| Question Quality | Mixed quality | Curated, noise-free | Significant improvement |
| Reasoning Focus | Limited | Enhanced | Major emphasis |
| Total Questions | 15,908 | 12,000+ | Quality over quantity |

## Evaluation Methodology

### Answer Format

Each question in MMLU-Pro follows a standardized format:

- **Question Stem**: The main question or problem statement

- **10 Answer Options**: Labeled A through J

- **Single Correct Answer**: Exactly one correct option

- **Distractors**: Nine plausible but incorrect options

### Scoring System

| Metric | Description | Calculation |
| --- | --- | --- |
| Overall Accuracy | Percentage of correct answers | (Correct / Total) × 100% |
| Domain Accuracy | Performance per subject area | (Correct in domain / Total in domain) × 100% |
| CoT Performance | Accuracy with Chain-of-Thought | CoT correct / Total × 100% |
| Direct Answer | Accuracy without reasoning | Direct correct / Total × 100% |
| CoT Gain | Improvement from reasoning | CoT accuracy - Direct accuracy |

### Prompt Robustness

MMLU-Pro tested 24 different prompt styles to ensure stability:

| Prompt Category | Variations | Impact on Score |
| --- | --- | --- |
| Instruction Format | 6 styles | <1% variance |
| Few-shot Examples | 0-5 examples | ~1.5% variance |
| Output Format | 6 formats | <1% variance |
| Task Framing | 6 approaches | <1% variance |

## Performance Analysis

### Current Leaderboard (2025)

| Rank | Model | Overall Accuracy | CoT Gain | Organization |
| --- | --- | --- | --- | --- |
| 1 | [OpenAI o1](/index.php?title=OpenAI_o1&action=edit&redlink=1) | 83.5% | +8% | OpenAI |
| 2 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) (Thinking) | 82.7% | +7% | Anthropic |
| 3 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 78.2% | +5% | OpenAI |
| 4 | [Gemini 2.0 Flash](/index.php?title=Gemini_2.0_Flash&action=edit&redlink=1) | 77.4% | +4% | Google |
| 5 | [DeepSeek-V3](/index.php?title=DeepSeek-V3&action=edit&redlink=1) | ~75% | +6% | DeepSeek |
| 6 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 73.1% | +4% | Anthropic |
| 7 | [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | 72.8% | +3% | Google |
| 8 | [Llama 3.1 405B](/index.php?title=Llama_3.1_405B&action=edit&redlink=1) | 68.5% | +3% | Meta |

### Performance Insights

#### Accuracy Drop from MMLU

Models experience significant accuracy reduction when evaluated on MMLU-Pro:

| Model Category | MMLU Score | MMLU-Pro Score | Drop |
| --- | --- | --- | --- |
| Frontier Models | 86-87% | 70-83% | 16-20% |
| High-Performance | 80-85% | 60-70% | 20-25% |
| Mid-Range | 70-80% | 45-60% | 25-30% |
| Smaller Models | 60-70% | 35-45% | 30-33% |

#### Chain-of-Thought Impact

MMLU-Pro shows distinct CoT benefits unlike original MMLU:

- **Positive CoT Effect**: All models benefit from reasoning chains

- **Average Gain**: 4-8% improvement with CoT

- **Reasoning Indicator**: Strong CoT gains indicate reasoning-heavy questions

- **Contrast with MMLU**: Original MMLU showed minimal or negative CoT impact

## Domain-Specific Performance

### Subject Area Analysis

| Domain | Top Model Performance | Average Performance | Difficulty Rating |
| --- | --- | --- | --- |
| Mathematics | 85% | 65% | Very High |
| Physics | 82% | 62% | Very High |
| Computer Science | 88% | 70% | High |
| Chemistry | 80% | 60% | High |
| Engineering | 79% | 59% | High |
| Biology | 84% | 68% | Medium-High |
| Economics | 81% | 65% | Medium-High |
| Business | 83% | 67% | Medium |
| Psychology | 85% | 70% | Medium |
| History | 87% | 72% | Medium |
| Law | 78% | 58% | High |
| Philosophy | 82% | 66% | Medium-High |
| Health | 86% | 71% | Medium |
| Other | 80% | 65% | Variable |

## Implementation

### Installation and Setup

```bash

1. Clone the repository

git clone [https://github.com/TIGER-AI-Lab/MMLU-Pro](https://github.com/TIGER-AI-Lab/MMLU-Pro)
cd MMLU-Pro

1. Install dependencies

pip install -r requirements.txt

1. Download dataset

python download_data.py
```

### Running Evaluations

```python

1. Basic evaluation

python evaluate.py --model "gpt-4" --method "direct"

1. With Chain-of-Thought

python evaluate.py --model "gpt-4" --method "cot"

1. Specific domains

python evaluate.py --model "gpt-4" --domains "math,physics,cs"

1. All 24 prompt styles

python evaluate.py --model "gpt-4" --test-prompts
```

### Dataset Access

```python
from datasets import load_dataset

1. Load MMLU-Pro dataset

dataset = load_dataset("TIGER-Lab/MMLU-Pro")

1. Access specific split

test_set = dataset['test']
validation_set = dataset['validation']

1. Filter by domain

math_questions = dataset.filter(lambda x: x['domain'] == 'mathematics')
```

## Challenges and Insights

### Key Challenges for Models

| Challenge | Description | Impact |
| --- | --- | --- |
| Distractor Quality | High-quality incorrect options | Reduces guessing success |
| Reasoning Depth | Multi-step problem solving required | Challenges surface knowledge |
| Domain Expertise | Specialized knowledge needed | Tests breadth and depth |
| Option Discrimination | Subtle differences between choices | Requires precise understanding |
| Complex Integration | Cross-domain reasoning | Tests holistic understanding |

### Common Failure Modes

1. **Surface Pattern Matching**: Selecting answers based on superficial similarities
2. **Incomplete Reasoning**: Stopping analysis before reaching correct conclusion
3. **Domain Confusion**: Applying incorrect domain knowledge
4. **Distractor Attraction**: Being misled by plausible but incorrect options
5. **Prompt Misinterpretation**: Despite reduced sensitivity, some variation remains

## Applications and Impact

### Research Applications

| Application | Purpose | Value |
| --- | --- | --- |
| Model Development | Identifying capability gaps | Targeted improvements |
| Architecture Comparison | Evaluating design choices | Technical insights |
| Training Optimization | Measuring learning progress | Performance tracking |
| Reasoning Studies | Understanding model cognition | Theoretical advancement |

### Practical Applications

- **Educational Assessment**: Evaluating AI tutoring capabilities

- **Professional Certification**: Testing domain expertise

- **Recruitment Tools**: Assessing AI for skill evaluation

- **Research Assistance**: Measuring research support capabilities

- **Decision Support**: Evaluating analytical reasoning

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| English Only | Single language focus | Limited global applicability |
| Multiple Choice Format | Restricted response type | May not capture full capabilities |
| Static Dataset | Fixed question set | Potential for overfitting |
| Academic Focus | Emphasis on formal knowledge | May miss practical skills |
| Cultural Bias | Western academic perspective | Limited cultural diversity |

### Future Directions

1. **Multilingual Extension**: Versions in multiple languages
2. **Dynamic Generation**: Procedurally generated questions
3. **Free-Form Responses**: Open-ended answer formats
4. **Multimodal Integration**: Adding visual and audio components
5. **Adaptive Testing**: Difficulty adjustment based on performance
6. **Real-World Tasks**: Practical application scenarios

## Related Benchmarks

- **[MMLU](/wiki/mmlu)**: Original Massive Multitask Language Understanding

- **[GPQA](/wiki/gpqa)**: Graduate-level science questions

- **[ARC](/index.php?title=ARC&action=edit&redlink=1)**: AI2 Reasoning Challenge

- **[HellaSwag](/wiki/hellaswag)**: Commonsense reasoning

- **[BigBench](/index.php?title=BigBench&action=edit&redlink=1)**: Diverse capability evaluation

- **[AGIEval](/index.php?title=AGIEval&action=edit&redlink=1)**: Human-level exam questions

- **[MATH](/wiki/math)**: Mathematics problem solving

## Significance

MMLU-Pro represents a crucial evolution in language model evaluation, addressing the saturation problem of its predecessor while providing more robust and discriminative assessment. Its reduced prompt sensitivity and enhanced focus on reasoning make it particularly valuable for:

- Distinguishing between frontier model capabilities

- Tracking genuine progress in AI development

- Identifying reasoning versus memorization abilities

- Providing stable performance measurements

- Guiding model development priorities

The benchmark's success in revealing performance differences previously hidden by MMLU's ceiling effect makes it an essential tool for advancing toward more capable AI systems.

## See Also

- [Language Model Evaluation](/index.php?title=Language_Model_Evaluation&action=edit&redlink=1)

- [Multi-task Learning](/index.php?title=Multi-task_Learning&action=edit&redlink=1)

- [Chain-of-Thought Reasoning](/index.php?title=Chain-of-Thought_Reasoning&action=edit&redlink=1)

- [Knowledge Benchmarks](/index.php?title=Knowledge_Benchmarks&action=edit&redlink=1)

- [Academic Question Answering](/index.php?title=Academic_Question_Answering&action=edit&redlink=1)

- [AI Evaluation Metrics](/index.php?title=AI_Evaluation_Metrics&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "mmlu_pro_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmlu_pro_github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmlu_pro_hf" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmlu_pro_space" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "neurips2024" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "vals_benchmark" defined in `<references>` has group attribute "" which does not appear in prior text.