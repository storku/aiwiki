---
title: "MMMU"
slug: "mmmu"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Multimodal_Benchmarks"
  - "Vision-Language_Benchmarks"
  - "Academic_Benchmarks"
  - "2023_Benchmarks"
---**

| MMMU |
| --- |
| Overview |
| Full name | Massive Multi-discipline Multimodal Understanding and Reasoning Benchmark |
| Abbreviation | MMMU |
| Description | A massive multi-discipline multimodal benchmark evaluating expert-level understanding and reasoning across college-level subjects |
| Release date | 2023-11 |
| Latest version | 1.0 |
| Benchmark updated | 2023-12-04 |
| Authors | [Xiang Yue](/index.php?title=Xiang_Yue&action=edit&redlink=1), [Yuansheng Ni](/index.php?title=Yuansheng_Ni&action=edit&redlink=1), [Kai Zhang](/index.php?title=Kai_Zhang&action=edit&redlink=1), [Tianyu Zheng](/index.php?title=Tianyu_Zheng&action=edit&redlink=1), [Et al.](/index.php?title=Et_al.&action=edit&redlink=1) |
| Organization | [Ohio State University](/index.php?title=Ohio_State_University&action=edit&redlink=1), [University of Waterloo](/index.php?title=University_of_Waterloo&action=edit&redlink=1) |
| Technical Details |
| Type | [Multimodal Understanding](/index.php?title=Multimodal_Understanding&action=edit&redlink=1), [Expert Knowledge](/index.php?title=Expert_Knowledge&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Vision (Images)](/index.php?title=Vision_(Images)&action=edit&redlink=1) |
| Task format | [Multiple choice, Open-ended](/index.php?title=Multiple_choice,_Open-ended&action=edit&redlink=1) |
| Number of tasks | 11,500 |
| Total examples | 11,500 |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Zero-shot performance](/index.php?title=Zero-shot_performance&action=edit&redlink=1) |
| Domains | [Art & Design](/index.php?title=Art_%26_Design&action=edit&redlink=1), [Business](/wiki/business), [Science](/wiki/science), [Health & Medicine](/index.php?title=Health_%26_Medicine&action=edit&redlink=1), [Humanities & Social Science](/index.php?title=Humanities_%26_Social_Science&action=edit&redlink=1), [Tech & Engineering](/index.php?title=Tech_%26_Engineering&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not formally reported |
| Baseline | 22.3% (Random guess baseline) |
| SOTA score | 69.1% |
| SOTA model | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | No |
| Resources |
| Website | [Official website](https://mmmu-benchmark.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2311.16502) |
| GitHub | [Repository](https://github.com/MMMU-Benchmark/MMMU) |
| Dataset | [Download](https://huggingface.co/datasets/MMMU/MMMU)

 |
| Successor | [MMMU-Pro](/index.php?title=MMMU-Pro&action=edit&redlink=1) |

MMMU** (Massive Multi-discipline Multimodal Understanding and Reasoning Benchmark) is a comprehensive [multimodal AI](/index.php?title=Multimodal_AI&action=edit&redlink=1) benchmark designed to evaluate models' expert-level understanding and reasoning capabilities across college-level subjects. Released in November 2023 by researchers from [Ohio State University](/index.php?title=Ohio_State_University&action=edit&redlink=1) and [University of Waterloo](/index.php?title=University_of_Waterloo&action=edit&redlink=1), MMMU contains 11,500 meticulously collected questions from college exams, quizzes, and textbooks, representing one of the most challenging benchmarks for assessing [artificial general intelligence](/wiki/artificial_general_intelligence) in multimodal contexts.

## Overview

MMMU addresses a critical gap in AI evaluation by testing models on tasks that require both advanced [visual perception](/index.php?title=Visual_perception&action=edit&redlink=1) and domain-specific knowledge reasoning. Unlike existing multimodal benchmarks that focus on elementary visual understanding, MMMU demands college-level subject expertise combined with sophisticated reasoning about diverse visual content including charts, diagrams, maps, tables, music sheets, and chemical structures.

### Motivation

The development of MMMU was motivated by several key observations:

- Existing multimodal benchmarks primarily tested basic visual recognition rather than expert knowledge

- Real-world professional tasks require understanding complex visual information with domain expertise

- The path to [artificial general intelligence](/wiki/artificial_general_intelligence) requires mastery of diverse academic disciplines

- Current models showed poor generalization to less common visual formats

The benchmark aims to evaluate whether AI systems can achieve human expert-level performance across multiple academic disciplines, a crucial milestone toward AGI.

## Technical Specifications

### Dataset Composition

MMMU's 11,500 questions are distributed across six core disciplines:

| Discipline | Number of Subjects | Question Count | Example Topics |
| --- | --- | --- | --- |
| [Art & Design](/index.php?title=Art_%26_Design&action=edit&redlink=1) | 8 | ~1,900 | Art History, Design Principles, Music Theory |
| [Business](/wiki/business) | 5 | ~1,900 | Accounting, Economics, Finance, Management |
| [Science](/wiki/science) | 6 | ~1,900 | Biology, Chemistry, Physics, Earth Science |
| [Health & Medicine](/index.php?title=Health_%26_Medicine&action=edit&redlink=1) | 5 | ~1,900 | Clinical Medicine, Basic Medicine, Diagnostics |
| [Humanities & Social Science](/index.php?title=Humanities_%26_Social_Science&action=edit&redlink=1) | 9 | ~1,900 | History, Literature, Psychology, Sociology |
| [Tech & Engineering](/index.php?title=Tech_%26_Engineering&action=edit&redlink=1) | 7 | ~1,900 | Computer Science, Electrical Engineering, Materials Science |

The benchmark spans **30 subjects** and **183 subfields**, ensuring comprehensive coverage of college-level knowledge.

### Image Type Diversity

MMMU includes 30 heterogeneous image types, making it uniquely challenging:

| Category | Image Types | Frequency | Challenge Level |
| --- | --- | --- | --- |
| Common Visuals | Photos, Paintings, Sketches | High | Low-Medium |
| Scientific Diagrams | Chemical structures, Biological diagrams, Physics diagrams | Medium | High |
| Data Visualizations | Charts, Graphs, Tables, Heatmaps | High | Medium |
| Technical Drawings | Blueprints, Circuit diagrams, Flowcharts | Medium | High |
| Maps & Geography | Topographic maps, Political maps, Weather maps | Medium | Medium |
| Specialized Notation | Music sheets, Mathematical proofs, Code snippets | Low | Very High |
| Medical Imagery | X-rays, MRI scans, Microscopy images | Low | Very High |

### Question Types and Formats

| Question Type | Percentage | Description | Example |
| --- | --- | --- | --- |
| Multiple Choice | 70% | Select from 4-5 options | "Which chemical structure represents benzene?" |
| Multiple Response | 15% | Select all correct answers | "Identify all impressionist paintings" |
| Fill-in-the-blank | 10% | Complete missing information | "The GDP formula is: GDP = C + I + G + ___" |
| Open-ended | 5% | Short answer responses | "Explain the mechanism shown in the diagram" |

### Evaluation Methodology

#### Zero-shot Evaluation

MMMU employs strict zero-shot evaluation:

- No fine-tuning on MMMU data allowed

- No few-shot examples provided

- Models must rely on pre-training knowledge

- Ensures fair comparison across models

#### Skill Assessment

The benchmark evaluates three core skills:

| Skill | Description | Weight | Assessment Method |
| --- | --- | --- | --- |
| [Perception](/index.php?title=Perception&action=edit&redlink=1) | Ability to accurately interpret visual information | 30% | Image recognition accuracy |
| [Knowledge](/index.php?title=Knowledge&action=edit&redlink=1) | Domain-specific factual understanding | 35% | Subject matter correctness |
| [Reasoning](/index.php?title=Reasoning&action=edit&redlink=1) | Logical inference and problem-solving | 35% | Multi-step reasoning tasks |

## Performance Analysis

### Current Leaderboard (2024-2025)

| Rank | Model | Overall Score | Art & Design | Business | Science | Health & Medicine | Humanities | Tech & Engineering |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 69.1% | 72.3% | 71.5% | 67.2% | 74.8% | 78.9% | 59.8% |
| 2 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 68.3% | 70.8% | 69.4% | 66.1% | 73.2% | 77.5% | 58.4% |
| 3 | [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | 62.2% | 64.5% | 65.3% | 60.8% | 68.9% | 73.1% | 52.7% |
| 4 | [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | 59.4% | 63.2% | 62.8% | 57.3% | 65.7% | 71.8% | 48.9% |
| 5 | [Gemini Ultra](/index.php?title=Gemini_Ultra&action=edit&redlink=1) | 59.4% | 58.1% | 62.7% | 56.9% | 71.3% | 78.3% | 53.0% |
| 6 | [GPT-4V](/index.php?title=GPT-4V&action=edit&redlink=1) | 56.8% | 65.3% | 64.3% | 54.7% | 63.5% | 76.3% | 41.7% |
| 7 | [Qwen-VL-MAX](/index.php?title=Qwen-VL-MAX&action=edit&redlink=1) | 46.8% | 48.3% | 47.9% | 45.2% | 50.1% | 55.4% | 38.7% |

### Performance Insights

#### By Image Type

Models show significant performance variation across image types:

| Image Type | Best Performance | Worst Performance | Performance Gap |
| --- | --- | --- | --- |
| Photos & Paintings | 75-80% | 40-45% | 35% |
| Charts & Graphs | 65-70% | 35-40% | 30% |
| Chemical Structures | 35-40% | 15-20% | 20% |
| Music Sheets | 25-30% | 10-15% | 15% |
| Geometric Shapes | 30-35% | Near random | 30% |

#### Key Findings

1. **Performance Ceiling**: Even the best models (GPT-4o) achieve only ~69% accuracy
2. **Domain Disparities**: Models excel in Humanities (75-79%) but struggle with Tech & Engineering (41-60%)
3. **Visual Generalization**: Poor performance on uncommon image types indicates limited visual generalization
4. **Open-Source Gap**: Significant performance gap between proprietary and open-source models (20-25%)

## MMMU-Pro: Enhanced Version

### Overview

[MMMU-Pro](/index.php?title=MMMU-Pro&action=edit&redlink=1) is a more challenging variant introduced in 2024:

- Filtered for higher difficulty questions

- Added vision-indispensable requirements

- Reduced OCR-solvable questions

- Augmented options from 4 to 10 choices

### Performance Comparison

| Model | MMMU Score | MMMU-Pro Score | Performance Drop |
| --- | --- | --- | --- |
| GPT-4o | 69.1% | 26.9% | -42.2% |
| Claude 3.5 Sonnet | 68.3% | 25.8% | -42.5% |
| Gemini 1.5 Pro | 62.2% | 22.3% | -39.9% |
| Open-source Best | 46.8% | 16.8% | -30.0% |

## Challenges and Insights

### Critical Challenges for Current Models

| Challenge | Description | Impact | Example |
| --- | --- | --- | --- |
| Domain-Specific Notation | Understanding specialized symbols and conventions | High error rates | Musical notation, chemical formulas |
| Multi-step Reasoning | Complex problems requiring sequential logic | 40-50% failure rate | Physics problem solving |
| Cross-modal Integration | Combining visual and textual information | Inconsistent performance | Diagram-based questions |
| Rare Visual Formats | Processing uncommon image types | Near-random performance | Circuit diagrams, music sheets |

### Error Analysis

Common failure modes include:
1. **Perception Errors** (30%): Misinterpreting visual elements
2. **Knowledge Gaps** (35%): Lacking domain-specific information
3. **Reasoning Failures** (25%): Incorrect logical inference
4. **Integration Errors** (10%): Failing to combine visual and textual cues

## Applications and Impact

### Research Applications

MMMU enables several research directions:

- **Multimodal Architecture Design**: Optimizing models for diverse visual inputs

- **Knowledge Integration**: Combining visual perception with domain expertise

- **Generalization Studies**: Understanding transfer to rare visual formats

- **Curriculum Learning**: Progressive training on increasing difficulty

### Educational Applications

- **AI Tutoring Systems**: Assessing readiness for college-level instruction

- **Automated Grading**: Evaluating capability for academic assessment

- **Study Assistants**: Testing comprehension of educational materials

- **Accessibility Tools**: Understanding complex academic visuals

### Professional Applications

| Field | Application | MMMU Relevance |
| --- | --- | --- |
| Medicine | Diagnostic assistance | Medical image interpretation |
| Engineering | Design validation | Technical drawing comprehension |
| Finance | Report analysis | Chart and data visualization understanding |
| Education | Content creation | Multi-discipline knowledge integration |
| Research | Literature review | Scientific diagram interpretation |

## Dataset Access and Usage

### Access Methods

```python

1. Using Hugging Face Datasets

from datasets import load_dataset
dataset = load_dataset("MMMU/MMMU")

1. Direct download

2. Available at: [https://huggingface.co/datasets/MMMU/MMMU](https://huggingface.co/datasets/MMMU/MMMU)

```

### Evaluation Server

- **Launch Date**: December 4, 2023

- **URL**: [https://mmmu-benchmark.github.io/](https://mmmu-benchmark.github.io/)

- **Submission Format**: JSON with predictions

- **Evaluation Frequency**: Daily limits apply

- **Metrics Provided**: Overall and per-discipline scores

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| English Only | Questions in English language | Limited global applicability |
| Static Dataset | Fixed set of questions | Potential for overfitting |
| College Focus | US college curriculum bias | May not reflect global standards |
| Limited Interactivity | No multi-turn reasoning | Doesn't test dialogue capabilities |
| Answer Format | Mostly multiple choice | May not capture full understanding |

### Future Directions

1. **Multilingual Extension**: Versions in other languages
2. **Dynamic Generation**: Procedurally generated questions
3. **Interactive Tasks**: Multi-turn problem solving
4. **Video Understanding**: Extension to video content
5. **Real-time Updates**: Incorporating current events and discoveries

## Related Benchmarks

- **[MMLU](/wiki/mmlu)**: Text-only multitask understanding

- **[VQA](/index.php?title=VQA&action=edit&redlink=1)**: Visual question answering

- **[ScienceQA](/index.php?title=ScienceQA&action=edit&redlink=1)**: Multimodal science questions

- **[ChartQA](/index.php?title=ChartQA&action=edit&redlink=1)**: Chart understanding

- **[AI2D](/index.php?title=AI2D&action=edit&redlink=1)**: Diagram understanding

- **[TextVQA](/index.php?title=TextVQA&action=edit&redlink=1)**: Text reading in images

- **[MathVista](/index.php?title=MathVista&action=edit&redlink=1)**: Mathematical reasoning with visuals

## See Also

- [Multimodal AI](/index.php?title=Multimodal_AI&action=edit&redlink=1)

- [Vision-Language Models](/index.php?title=Vision-Language_Models&action=edit&redlink=1)

- [College-level AI Evaluation](/index.php?title=College-level_AI_Evaluation&action=edit&redlink=1)

- [Expert Systems](/index.php?title=Expert_Systems&action=edit&redlink=1)

- [Visual Reasoning](/index.php?title=Visual_Reasoning&action=edit&redlink=1)

- [Academic Benchmarks](/index.php?title=Academic_Benchmarks&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "mmmu_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmmu_website" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmmu_github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmmu_huggingface" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmmu_cvpr" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmmu_pro" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "medium_mmmu" defined in `<references>` has group attribute "" which does not appear in prior text.