---
title: "MMLU"
slug: "mmlu"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Natural_Language_Processing"
  - "Machine_Learning_Evaluation"
  - "2020_in_artificial_intelligence"
  - "University_of_California,_Berkeley"
---**

| MMLU |
| --- |
| Overview |
| Full name | Measuring Massive Multitask Language Understanding |
| Abbreviation | MMLU |
| Description | A comprehensive benchmark evaluating [large language models](/wiki/large_language_model) across 57 diverse academic subjects through multiple-choice questions
Property "Description" (as page type) with input value "A comprehensive benchmark evaluating [large language models](/wiki/large_language_model) across 57 diverse academic subjects through multiple-choice questions" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| Release date | 2020-09-07 |
| Latest version | MMLU-Pro |
| Benchmark updated | 2024-06-03 |
| Authors | [Dan Hendrycks](/index.php?title=Dan_Hendrycks&action=edit&redlink=1), [Collin Burns](/index.php?title=Collin_Burns&action=edit&redlink=1), [Steven Basart](/index.php?title=Steven_Basart&action=edit&redlink=1), [Andy Zou](/index.php?title=Andy_Zou&action=edit&redlink=1), [Mantas Mazeika](/index.php?title=Mantas_Mazeika&action=edit&redlink=1), [Dawn Song](/index.php?title=Dawn_Song&action=edit&redlink=1), [Jacob Steinhardt](/index.php?title=Jacob_Steinhardt&action=edit&redlink=1) |
| Organization | [University of California](/index.php?title=University_of_California&action=edit&redlink=1), [Berkeley](/index.php?title=Berkeley&action=edit&redlink=1) |
| Technical Details |
| Type | [Multitask Language Understanding](/index.php?title=Multitask_Language_Understanding&action=edit&redlink=1), [Knowledge Evaluation](/index.php?title=Knowledge_Evaluation&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice (4 options)](/index.php?title=Multiple_choice_(4_options)&action=edit&redlink=1) |
| Number of tasks | 57 |
| Total examples | 15908 |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Macro-average](/index.php?title=Macro-average&action=edit&redlink=1) |
| Domains | [STEM](/index.php?title=STEM&action=edit&redlink=1), [Humanities](/index.php?title=Humanities&action=edit&redlink=1), [Social Sciences](/index.php?title=Social_Sciences&action=edit&redlink=1), [Professional Fields](/index.php?title=Professional_Fields&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 89.8 |
| Baseline | 25.0 |
| SOTA score | 90.0 |
| SOTA model | [GPT-4 o1-preview](/index.php?title=GPT-4_o1-preview&action=edit&redlink=1) |
| SOTA date | 2025-01-01 |
| Saturated | Yes |
| Resources |
| Website | [Official website](https://github.com/hendrycks/test) |
| Paper | [Paper](https://arxiv.org/abs/2009.03300) |
| GitHub | [Repository](https://github.com/hendrycks/test) |
| Dataset | [Download](https://huggingface.co/datasets/cais/mmlu) |
| License | MIT License |
| Successor | [MMLU-Pro](/wiki/mmlu-pro) |

MMLU** (Measuring Massive Multitask Language Understanding) is a comprehensive [benchmark](/wiki/benchmark) designed to evaluate [large language models](/wiki/large_language_model) across 57 diverse academic and professional subjects through [multiple-choice questions](/index.php?title=Multiple-choice_questions&action=edit&redlink=1). Created by researchers at the [University of California, Berkeley](/index.php?title=University_of_California,_Berkeley&action=edit&redlink=1) and released in September 2020, MMLU has become one of the most widely adopted benchmarks for assessing general knowledge and reasoning capabilities in [artificial intelligence](/wiki/artificial_intelligence) systems. The benchmark consists of 15,908 questions spanning topics from elementary mathematics to professional law, with difficulty levels ranging from high school to expert professional knowledge.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-wikipedia-2)

## Overview

MMLU was developed to address the need for a comprehensive evaluation framework that could assess [language models](/index.php?title=Language_models&action=edit&redlink=1) across multiple domains simultaneously, testing both [world knowledge](/index.php?title=World_knowledge&action=edit&redlink=1) and [problem-solving](/index.php?title=Problem-solving&action=edit&redlink=1) abilities. The benchmark emerged from the recognition that existing evaluation methods often focused on narrow domains or specific tasks, failing to capture the breadth of knowledge required for [artificial general intelligence](/wiki/artificial_general_intelligence).[&#91;1&#93;](#cite_note-arxiv-1)

The benchmark's design philosophy emphasizes [zero-shot](/index.php?title=Zero-shot&action=edit&redlink=1) and [few-shot learning](/wiki/few-shot_learning), evaluating models on their pre-trained knowledge without task-specific fine-tuning. This approach provides insights into the general capabilities of language models rather than their ability to memorize specific datasets. By 2024, MMLU had been downloaded over 100 million times, establishing itself as a standard evaluation metric in the AI research community.[&#91;2&#93;](#cite_note-wikipedia-2)

## Methodology

### Dataset Construction

MMLU's questions were sourced from various educational materials including textbooks, online resources, and practice exams. The dataset was carefully curated to ensure:[&#91;1&#93;](#cite_note-arxiv-1)

- **Diverse coverage**: Questions span 57 subjects across four major categories

- **Difficulty variation**: Content ranges from elementary to professional level

- **Standardized format**: All questions use 4-option multiple choice (A, B, C, D)

- **Quality control**: Manual review to ensure accuracy and clarity

### Dataset Structure

The complete MMLU dataset is organized as follows:

| Component | Number of Questions | Purpose |
| --- | --- | --- |
| Development Set | 285 (5 per subject) | Few-shot examples |
| Validation Set | 1,540 | Hyperparameter tuning |
| Test Set | 14,079 | Main evaluation |
| **Total** | **15,908** | Complete benchmark |

### Evaluation Paradigms

MMLU supports multiple evaluation approaches:[&#91;1&#93;](#cite_note-arxiv-1)

- **Zero-shot**: Direct evaluation without examples

- **Few-shot**: Up to 5 examples per subject provided

- **Chain-of-thought**: Models can show reasoning steps

- **Direct answer**: Models provide only the letter choice

The primary metric is accuracy through exact string matching, where models must produce the correct letter (A, B, C, or D) to receive credit.

## Subject Categories

### STEM (22 subjects)

The STEM category covers scientific and technical fields:

#### Mathematics and Physics

- [Abstract Algebra](/index.php?title=Abstract_Algebra&action=edit&redlink=1)

- [College Mathematics](/index.php?title=College_Mathematics&action=edit&redlink=1)

- [Elementary Mathematics](/index.php?title=Elementary_Mathematics&action=edit&redlink=1)

- [High School Mathematics](/index.php?title=High_School_Mathematics&action=edit&redlink=1)

- [College Physics](/index.php?title=College_Physics&action=edit&redlink=1)

- [High School Physics](/index.php?title=High_School_Physics&action=edit&redlink=1)

- [Conceptual Physics](/index.php?title=Conceptual_Physics&action=edit&redlink=1)

- [High School Statistics](/index.php?title=High_School_Statistics&action=edit&redlink=1)

#### Life Sciences

- [Anatomy](/index.php?title=Anatomy&action=edit&redlink=1)

- [College Biology](/index.php?title=College_Biology&action=edit&redlink=1)

- [High School Biology](/index.php?title=High_School_Biology&action=edit&redlink=1)

- [Medical Genetics](/index.php?title=Medical_Genetics&action=edit&redlink=1)

- [Virology](/index.php?title=Virology&action=edit&redlink=1)

#### Chemistry and Computer Science

- [College Chemistry](/index.php?title=College_Chemistry&action=edit&redlink=1)

- [High School Chemistry](/index.php?title=High_School_Chemistry&action=edit&redlink=1)

- [College Computer Science](/index.php?title=College_Computer_Science&action=edit&redlink=1)

- [High School Computer Science](/index.php?title=High_School_Computer_Science&action=edit&redlink=1)

- [Computer Security](/index.php?title=Computer_Security&action=edit&redlink=1)

- [Machine Learning](/index.php?title=Machine_Learning&action=edit&redlink=1)

#### Applied Sciences

- [Astronomy](/index.php?title=Astronomy&action=edit&redlink=1)

- [Clinical Knowledge](/index.php?title=Clinical_Knowledge&action=edit&redlink=1)

- [College Medicine](/index.php?title=College_Medicine&action=edit&redlink=1)

- [Electrical Engineering](/index.php?title=Electrical_Engineering&action=edit&redlink=1)

### Humanities (13 subjects)

The humanities category encompasses history, philosophy, and law:

#### History

- [High School European History](/index.php?title=High_School_European_History&action=edit&redlink=1)

- [High School US History](/index.php?title=High_School_US_History&action=edit&redlink=1)

- [High School World History](/index.php?title=High_School_World_History&action=edit&redlink=1)

- [Prehistory](/index.php?title=Prehistory&action=edit&redlink=1)

#### Philosophy and Logic

- [Philosophy](/index.php?title=Philosophy&action=edit&redlink=1)

- [Formal Logic](/index.php?title=Formal_Logic&action=edit&redlink=1)

- [Logical Fallacies](/index.php?title=Logical_Fallacies&action=edit&redlink=1)

- [Moral Disputes](/index.php?title=Moral_Disputes&action=edit&redlink=1)

- [Moral Scenarios](/index.php?title=Moral_Scenarios&action=edit&redlink=1)

#### Law and Religion

- [International Law](/index.php?title=International_Law&action=edit&redlink=1)

- [Jurisprudence](/index.php?title=Jurisprudence&action=edit&redlink=1)

- [Professional Law](/index.php?title=Professional_Law&action=edit&redlink=1)

- [World Religions](/index.php?title=World_Religions&action=edit&redlink=1)

### Social Sciences (12 subjects)

Social sciences cover economics, psychology, and society:

#### Economics

- [Econometrics](/index.php?title=Econometrics&action=edit&redlink=1)

- [High School Macroeconomics](/index.php?title=High_School_Macroeconomics&action=edit&redlink=1)

- [High School Microeconomics](/index.php?title=High_School_Microeconomics&action=edit&redlink=1)

#### Psychology and Sociology

- [High School Psychology](/index.php?title=High_School_Psychology&action=edit&redlink=1)

- [Professional Psychology](/index.php?title=Professional_Psychology&action=edit&redlink=1)

- [Human Aging](/index.php?title=Human_Aging&action=edit&redlink=1)

- [Human Sexuality](/index.php?title=Human_Sexuality&action=edit&redlink=1)

- [Sociology](/index.php?title=Sociology&action=edit&redlink=1)

#### Politics and Geography

- [High School Geography](/index.php?title=High_School_Geography&action=edit&redlink=1)

- [High School Government and Politics](/index.php?title=High_School_Government_and_Politics&action=edit&redlink=1)

- [US Foreign Policy](/index.php?title=US_Foreign_Policy&action=edit&redlink=1)

- [Business Ethics](/index.php?title=Business_Ethics&action=edit&redlink=1)

### Professional and Other (10 subjects)

Professional fields and miscellaneous topics:

- [Professional Accounting](/index.php?title=Professional_Accounting&action=edit&redlink=1)

- [Professional Medicine](/index.php?title=Professional_Medicine&action=edit&redlink=1)

- [Management](/index.php?title=Management&action=edit&redlink=1)

- [Marketing](/wiki/marketing)

- [Public Relations](/index.php?title=Public_Relations&action=edit&redlink=1)

- [Nutrition](/index.php?title=Nutrition&action=edit&redlink=1)

- [Security Studies](/index.php?title=Security_Studies&action=edit&redlink=1)

- [Global Facts](/index.php?title=Global_Facts&action=edit&redlink=1)

- [Miscellaneous](/index.php?title=Miscellaneous&action=edit&redlink=1)

## Performance Results

### Current Leaderboard (2025)

Top performing models on MMLU have approached human expert performance:[&#91;3&#93;](#cite_note-leaderboard-3)

| Rank | Model | Organization | MMLU Score | Evaluation Type |
| --- | --- | --- | --- | --- |
| 1 | [GPT-4](/wiki/gpt-4) o1-preview | [OpenAI](/wiki/openai) | 90.0% | 5-shot |
| 2 | [Claude](/wiki/claude) 3.5 Sonnet | [Anthropic](/wiki/anthropic) | 88.3% | 5-shot |
| 3 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 88.0% | 5-shot |
| 4 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 1.5 Pro | [Google](/index.php?title=Google&action=edit&redlink=1) | 83.7% | 5-shot |
| 5 | [LLaMA](/wiki/llama) 3.1 405B | [Meta](/wiki/meta) | 88.0% | 5-shot |
| 6 | [Claude](/wiki/claude) 3 Opus | [Anthropic](/wiki/anthropic) | 77.35% | 5-shot |
| 7 | [Qwen](/wiki/qwen) 2.5 72B | [Alibaba](/index.php?title=Alibaba&action=edit&redlink=1) | 85.3% | 5-shot |
| - | Human Expert | - | 89.8% | - |
| - | Random Baseline | - | 25.0% | - |

### Historical Performance Evolution

The progression of model performance on MMLU demonstrates rapid advancement in AI capabilities:

| Year | Best Model | Score | Key Milestone |
| --- | --- | --- | --- |
| 2020 | GPT-3 175B | 43.9% | Initial benchmark release |
| 2021 | Gopher 280B | 60.0% | First model above 50% |
| 2022 | PaLM 540B | 69.3% | Significant architecture improvements |
| 2023 | GPT-4 | 86.4% | Approaching human performance |
| 2024 | Multiple models | ~88% | Benchmark saturation begins |
| 2025 | GPT-4 o1-preview | 90.0% | Exceeds human expert performance |

### Performance by Subject Category

Analysis reveals significant variation in model performance across domains:[&#91;1&#93;](#cite_note-arxiv-1)

| Category | Average Score (Top Models) | Easiest Subject | Hardest Subject |
| --- | --- | --- | --- |
| STEM | 85% | High School Mathematics (92%) | Abstract Algebra (65%) |
| Humanities | 87% | World Religions (91%) | Formal Logic (72%) |
| Social Sciences | 89% | Marketing (93%) | Econometrics (70%) |
| Professional | 86% | Management (90%) | Professional Law (75%) |

## Quality Analysis and Limitations

### Identified Issues

Research has revealed several quality concerns in the MMLU dataset:[&#91;4&#93;](#cite_note-redux-4)

- **Error rate**: Approximately 6.5% of questions contain errors

- **Multiple correct answers**: 4% of questions have ambiguous answers

- **Unclear questions**: 14% lack sufficient clarity

- **Subject-specific errors**: Virology has 33% incorrect answers

- **Cultural bias**: Western-centric knowledge representation

### Data Contamination

Studies suggest potential [data contamination](/index.php?title=Data_contamination&action=edit&redlink=1) issues:

- Many questions appear in online educational resources

- Some models show anomalously high performance on specific subjects

- Performance gaps between MMLU and newer, uncontaminated benchmarks

## MMLU Variants

### MMLU-Pro

Released in June 2024, MMLU-Pro addresses limitations of the original benchmark:[&#91;5&#93;](#cite_note-mmlupro-5)

Key improvements:

- **10 answer choices** instead of 4 (reducing random guess accuracy to 10%)

- **12,000+ questions** across 14 consolidated domains

- **Reasoning focus**: Emphasis on complex reasoning over memorization

- **Quality control**: Eliminated trivial and noisy questions

- **Performance impact**: 16-33% accuracy drop compared to original MMLU

### Other Notable Variants

Several specialized versions have been developed:

| Variant | Focus | Key Features | Release |
| --- | --- | --- | --- |
| MMLU-Redux | Error correction | Fixed ~1,000 problematic questions | 2024 |
| MMLU-SR | Stress testing | Modified terminology to test robustness | 2024 |
| CodeMMLU | Programming | Software engineering focus | 2024 |
| Mobile-MMLU | Efficiency | Optimized for mobile deployment | 2025 |
| IndicMMLU-Pro | Multilingual | Indian languages support | 2025 |

## Technical Implementation

### Dataset Access

MMLU is available through multiple platforms:[&#91;6&#93;](#cite_note-github-6)

- **GitHub**: Original repository with evaluation scripts

- **Hugging Face**: Dataset hosting and easy integration

- **API Access**: Through various evaluation platforms

### Evaluation Protocol

Standard evaluation procedure:

```python

1. Example evaluation format

Question: [Question text]
A) [Option A]
B) [Option B]  
C) [Option C]
D) [Option D]
Answer: [Correct letter]
```

Models are evaluated on:

- Exact match accuracy

- Macro-average across all subjects

- Optional: Per-category and per-subject analysis

### Integration with LLM Frameworks

MMLU is integrated into major evaluation frameworks:

- **[EleutherAI](/index.php?title=EleutherAI&action=edit&redlink=1) lm-evaluation-harness**

- **[Hugging Face](/wiki/hugging_face) evaluate library**

- **[OpenAI](/wiki/openai) evals**

- **Custom evaluation pipelines**

## Impact and Significance

### Research Impact

MMLU has significantly influenced [AI research](/index.php?title=AI_research&action=edit&redlink=1):[&#91;2&#93;](#cite_note-wikipedia-2)

- **100+ million downloads** as of 2024

- **Standard benchmark** in model releases

- **2,000+ citations** in academic literature

- **Industry adoption** by all major AI labs

### Educational Applications

The benchmark has applications beyond model evaluation:

- **Curriculum development**: Identifying knowledge gaps

- **Educational assessment**: Comparing AI and human performance

- **Tutoring systems**: Baseline for educational AI

- **Knowledge mapping**: Understanding model capabilities

### Benchmark Saturation

By 2025, MMLU is considered largely saturated:[&#91;2&#93;](#cite_note-wikipedia-2)

- Top models achieve 85-90% accuracy

- Minimal differentiation between leading systems

- Shift toward more challenging benchmarks

- Continued value for mid-tier model evaluation

## Future Directions

### Ongoing Developments

The MMLU ecosystem continues to evolve:

- **Quality improvements**: Ongoing error correction efforts

- **Multilingual extensions**: Adaptations for non-English languages

- **Domain specialization**: Field-specific variants

- **Reasoning focus**: Shift from knowledge to reasoning evaluation

### Successor Benchmarks

Several benchmarks build upon MMLU's foundation:

- **[MMLU-Pro](/wiki/mmlu-pro)**: More challenging with 10-option questions

- **[GPQA](/wiki/gpqa)**: Graduate-level questions

- **[ARC](/index.php?title=ARC&action=edit&redlink=1)**: Advanced reasoning challenges

- **[BigBench](/index.php?title=BigBench&action=edit&redlink=1)**: Broader task diversity

## See Also

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [Benchmark (computing)](/index.php?title=Benchmark_(computing)&action=edit&redlink=1)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Multiple choice](/index.php?title=Multiple_choice&action=edit&redlink=1)

- [Zero-shot learning](/index.php?title=Zero-shot_learning&action=edit&redlink=1)

- [Few-shot learning](/wiki/few-shot_learning)

- [AI evaluation](/index.php?title=AI_evaluation&action=edit&redlink=1)

- [Knowledge representation](/index.php?title=Knowledge_representation&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arxiv_1-0) [1.1](#cite_ref-arxiv_1-1) [1.2](#cite_ref-arxiv_1-2) [1.3](#cite_ref-arxiv_1-3) [1.4](#cite_ref-arxiv_1-4) Hendrycks, Dan, et al. "Measuring Massive Multitask Language Understanding." arXiv preprint arXiv:2009.03300 (2020). Cite error: Invalid `<ref>` tag; name "arxiv" defined multiple times with different content

2. ↑ [2.0](#cite_ref-wikipedia_2-0) [2.1](#cite_ref-wikipedia_2-1) [2.2](#cite_ref-wikipedia_2-2) [2.3](#cite_ref-wikipedia_2-3) Wikipedia. "MMLU." [https://en.wikipedia.org/wiki/MMLU](https://en.wikipedia.org/wiki/MMLU) Accessed 2025. Cite error: Invalid `<ref>` tag; name "wikipedia" defined multiple times with different content

3. [↑](#cite_ref-leaderboard_3-0) Various AI leaderboards. Accessed January 2025. Cite error: Invalid `<ref>` tag; name "leaderboard" defined multiple times with different content

4. [↑](#cite_ref-redux_4-0) Gema, Aryo Pradipta, et al. "Are We Done with MMLU?" arXiv:2406.04127 (2024). Cite error: Invalid `<ref>` tag; name "redux" defined multiple times with different content

5. [↑](#cite_ref-mmlupro_5-0) Wang, Yubo, et al. "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark." arXiv:2406.01574 (2024). Cite error: Invalid `<ref>` tag; name "mmlupro" defined multiple times with different content

6. [↑](#cite_ref-github_6-0) MMLU GitHub Repository. [https://github.com/hendrycks/test](https://github.com/hendrycks/test) Accessed 2025. Cite error: Invalid `<ref>` tag; name "github" defined multiple times with different content

## External Links

- [Official MMLU GitHub Repository](https://github.com/hendrycks/test)

- [MMLU Paper on arXiv](https://arxiv.org/abs/2009.03300)

- [MMLU Dataset on Hugging Face](https://huggingface.co/datasets/cais/mmlu)

- [MMLU Wikipedia Page](https://en.wikipedia.org/wiki/MMLU)

- [MMLU-Pro Paper](https://arxiv.org/abs/2406.01574)