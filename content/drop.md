---
title: "DROP"
slug: "drop"
categories:
  - "AI_Benchmarks"
  - "Reading_Comprehension_Benchmarks"
  - "Mathematical_Reasoning_Benchmarks"
  - "2019_Benchmarks"
  - "Allen_Institute_for_AI"
  - "Discrete_Reasoning"
---**

| DROP |
| --- |
| Overview |
| Full name | Discrete Reasoning Over Paragraphs |
| Abbreviation | DROP |
| Description | A reading comprehension benchmark requiring discrete reasoning and mathematical operations over paragraphs |
| Release date | 2019-03-01 |
| Latest version | 1.0 |
| Benchmark updated | 2019-04 |
| Authors | [Dheeru Dua](/index.php?title=Dheeru_Dua&action=edit&redlink=1), [Yizhong Wang](/index.php?title=Yizhong_Wang&action=edit&redlink=1), [Pradeep Dasigi](/index.php?title=Pradeep_Dasigi&action=edit&redlink=1), [Gabriel Stanovsky](/index.php?title=Gabriel_Stanovsky&action=edit&redlink=1), [Sameer Singh](/index.php?title=Sameer_Singh&action=edit&redlink=1), [Matt Gardner](/index.php?title=Matt_Gardner&action=edit&redlink=1) |
| Organization | [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1), [UC Irvine](/index.php?title=UC_Irvine&action=edit&redlink=1) |
| Technical Details |
| Type | [Reading Comprehension](/index.php?title=Reading_Comprehension&action=edit&redlink=1), [Discrete Reasoning](/index.php?title=Discrete_Reasoning&action=edit&redlink=1), [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Extractive/Abstractive Question Answering](/index.php?title=Extractive/Abstractive_Question_Answering&action=edit&redlink=1) |
| Number of tasks | 5 reasoning types |
| Total examples | approximately 96,000 questions |
| Evaluation metric | [F1 Score](/index.php?title=F1_Score&action=edit&redlink=1), [Exact Match](/index.php?title=Exact_Match&action=edit&redlink=1) |
| Domains | [Sports](/wiki/sports), [History](/index.php?title=History&action=edit&redlink=1), [Wikipedia articles](/index.php?title=Wikipedia_articles&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 96.0% F1 |
| Baseline | 32.7% F1 (2019) |
| SOTA score | 87.1% F1 |
| SOTA model | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | No |
| Resources |
| Website | [Official website](https://allenai.org/data/drop) |
| Paper | [Paper](https://arxiv.org/abs/1903.00161) |
| GitHub | [Repository](https://github.com/allenai/allennlp-reading-comprehension) |
| Dataset | [Download](https://huggingface.co/datasets/ucinlp/drop) |
| License | CC BY-SA 4.0

 |

DROP** (**Discrete Reasoning Over Paragraphs**) is a [reading comprehension](/index.php?title=Reading_comprehension&action=edit&redlink=1) [benchmark](/wiki/benchmark) that requires [artificial intelligence](/wiki/artificial_intelligence) systems to perform discrete reasoning operations over textual content. Released in March 2019 by researchers from the [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1) and [UC Irvine](/index.php?title=UC_Irvine&action=edit&redlink=1)[&#91;1&#93;](#cite_note-drop_paper-1), DROP challenged the prevailing paradigm in reading comprehension by requiring systems to perform mathematical operations, counting, sorting, and comparison operations rather than simply extracting text spans. The benchmark contains approximately 96,000 questions created adversarially to expose weaknesses in contemporary reading comprehension systems.

## Overview

DROP represents a significant advancement in evaluating genuine comprehension and reasoning capabilities in AI systems. Unlike traditional reading comprehension benchmarks that primarily test span extraction abilities, DROP requires models to understand paragraph content comprehensively and perform discrete operations including addition, subtraction, counting, sorting, and comparison. This design philosophy ensures that systems must develop true understanding rather than relying on superficial pattern matching[&#91;1&#93;](#cite_note-drop_paper-1).

### Significance

The development of DROP addressed critical limitations in existing reading comprehension evaluation:

- **Beyond Span Extraction**: Requires mathematical and logical operations over text

- **Multi-step Reasoning**: Questions demand combining multiple pieces of information

- **Reference Resolution**: Systems must resolve pronouns and references across passages

- **Adversarial Robustness**: Questions specifically designed to defeat baseline systems

- **Practical Relevance**: Operations mirror real-world information processing tasks

## Dataset Structure

### Question Categories

DROP organizes questions into five primary reasoning categories[&#91;1&#93;](#cite_note-drop_paper-1):

| Category | Percentage | Description | Example Operation |
| --- | --- | --- | --- |
| **Addition/Subtraction** | ~25% | Mathematical operations on numbers in text | "How many more yards did X gain than Y?" |
| **Counting** | ~20% | Counting entities or events | "How many touchdowns were scored in the game?" |
| **Selection** | ~20% | Choosing specific items based on criteria | "Who scored the longest touchdown?" |
| **Minimum/Maximum** | ~18% | Finding extreme values | "What was the shortest field goal?" |
| **Comparison** | ~17% | Comparing quantities or attributes | "Which team had more first downs?" |

### Answer Types

DROP supports multiple answer formats to accommodate different reasoning operations:

| Answer Type | Frequency | Description | Example |
| --- | --- | --- | --- |
| **Number** | ~45% | Numeric values with optional units | "42 yards", "7 touchdowns" |
| **Text Span** | ~40% | Extracted from passage or question | "New England Patriots" |
| **Date** | ~15% | Temporal information | "September 15, 2018" |

### Data Distribution

The dataset is divided into standard splits:

| Split | Number of Questions | Number of Passages | Purpose |
| --- | --- | --- | --- |
| **Training** | ~77,400 | ~6,700 | Model training |
| **Development** | ~9,540 | ~950 | Hyperparameter tuning |
| **Test** | ~9,500+ | ~950 | Final evaluation (hidden) |
| **Total** | 96,567 | ~8,600 | Complete dataset |

## Creation Methodology

### Adversarial Collection Process

DROP employed a sophisticated adversarial collection methodology[&#91;1&#93;](#cite_note-drop_paper-1):

1. **Baseline System**: [BiDAF](/index.php?title=BiDAF&action=edit&redlink=1) model trained on [SQuAD](/index.php?title=SQuAD&action=edit&redlink=1) used as adversary
2. **Worker Instructions**: Crowdworkers instructed to create questions the baseline cannot answer
3. **Question Validation**: Multiple workers validate each question-answer pair
4. **Iterative Refinement**: Questions refined based on validation feedback
5. **Quality Control**: Automatic and manual checks ensure question quality

### Source Material

The passages in DROP are drawn from:

| Source | Percentage | Content Type | Characteristics |
| --- | --- | --- | --- |
| **Sports Game Summaries** | ~60% | NFL game descriptions | Rich in numbers, statistics, events |
| **Wikipedia History** | ~40% | Historical articles | Dates, quantities, comparisons |

These sources were chosen for their natural abundance of quantitative information and discrete facts amenable to mathematical reasoning.

## Evaluation Methodology

### Metrics

DROP uses two primary evaluation metrics:

| Metric | Description | Calculation | Use Case |
| --- | --- | --- | --- |
| **F1 Score** | Token-level overlap | Harmonic mean of precision and recall | Primary metric |
| **Exact Match (EM)** | Complete answer match | Binary exact match after normalization | Secondary metric |

### Answer Normalization

The evaluation script performs extensive normalization[&#91;2&#93;](#cite_note-drop_github-2):

- Remove articles (a, an, the)

- Convert to lowercase

- Remove punctuation

- Normalize numbers (for example "one" → "1")

- Handle date formats consistently

### Evaluation Challenges

Several technical challenges have been identified:

| Challenge | Description | Impact | Mitigation |
| --- | --- | --- | --- |
| **Tokenization Issues** | Different tokenizers affect scoring | Score variations | Standardized preprocessing |
| **Number Formatting** | Various valid number representations | False negatives | Comprehensive normalization |
| **Multiple Valid Answers** | Some questions have multiple correct answers | Underestimated performance | Set-based evaluation |

## Performance Evolution

### Current Leaderboard (2024)

| Rank | Model | F1 Score | EM Score | Key Innovation |
| --- | --- | --- | --- | --- |
| 1 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 87.1 | ~85 | Advanced reasoning |
| 2 | [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | 78.9 | ~76 | Long context understanding |
| 3 | [GPT-4 Turbo](/index.php?title=GPT-4_Turbo&action=edit&redlink=1) | ~77 | ~74 | Improved mathematical reasoning |
| 4 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~75 | ~72 | Optimized architecture |
| - | Human Performance | 96.0 | 94.1 | Expert baseline |

### Historical Progression

The dramatic improvement in DROP performance over time:

| Year | Best Model | F1 Score | Improvement | Key Development |
| --- | --- | --- | --- | --- |
| 2019 | BiDAF (baseline) | 32.7 | - | Initial baseline |
| 2019 | NAQANet | 47.0 | +14.3 | Numerical reasoning modules |
| 2020 | QDGAT | 70.6 | +23.6 | Graph attention networks |
| 2021 | T5-large | 79.1 | +8.5 | Pretrained transformers |
| 2023 | GPT-4 | ~82 | +3 | Large language models |
| 2024 | Claude 3.5 Sonnet | 87.1 | +5.1 | Enhanced reasoning |

## Key Techniques and Innovations

### Successful Approaches

Research on DROP has led to several important technical innovations:

| Technique | Impact | Description | Representative Models |
| --- | --- | --- | --- |
| **Numerical Reasoning Modules** | High | Specialized components for mathematical operations | NAQANet, NumNet |
| **Graph Neural Networks** | Medium | Representing passage structure as graphs | QDGAT |
| **Program Synthesis** | High | Generating executable programs for reasoning | NeRd, OPERA |
| **Chain-of-Thought** | High | Step-by-step reasoning generation | GPT-4, Claude |
| **Tool Use** | Medium | Calculator and symbolic math integration | Various LLMs |

### Architecture Evolution

The progression of architectures successful on DROP:

1. **Early Neural Models** (2019): BiDAF with numerical heads
2. **Graph-Based Models** (2020): QDGAT, HGN
3. **Pretrained Transformers** (2021): T5, BART with task-specific fine-tuning
4. **Large Language Models** (2023+): GPT-4, Claude with few-shot prompting

## Challenges and Limitations

### Dataset Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **Domain Specificity** | Heavy focus on sports and history | Limited generalization |
| **Annotation Artifacts** | Patterns in crowdsourced questions | Potential shortcuts |
| **Evaluation Issues** | Normalization and tokenization problems | Scoring inconsistencies |
| **Static Nature** | Fixed question set | Risk of overfitting |

### Known Technical Issues

Several technical issues have been documented:

- **Answer Normalization**: The Hugging Face team identified problems with the original normalization

- **Preprocessing Errors**: EleutherAI found systematic errors in official preprocessing

- **Token Handling**: Models sometimes receive 0 F1 due to formatting issues

## Research Impact

### Influence on Field

DROP has significantly influenced reading comprehension research:

| Area | Impact | Development |
| --- | --- | --- |
| **Numerical Reasoning** | Spurred research in mathematical NLP | NumNet, MathQA |
| **Multi-hop Reasoning** | Advanced multi-step reasoning research | HotpotQA follow-up |
| **Program Synthesis** | Integration of symbolic reasoning | Neural program synthesis |
| **Evaluation Methods** | More comprehensive evaluation metrics | Beyond span extraction |

### Related Benchmarks

| Benchmark | Year | Focus | Relation to DROP |
| --- | --- | --- | --- |
| [SQuAD](/index.php?title=SQuAD&action=edit&redlink=1) | 2016 | Span extraction | Predecessor, simpler |
| **DROP** | 2019 | Discrete reasoning | Current benchmark |
| [IIRC](/index.php?title=IIRC&action=edit&redlink=1) | 2020 | Multi-hop reasoning | Complementary focus |
| [NumGLUE](/index.php?title=NumGLUE&action=edit&redlink=1) | 2022 | Numerical reasoning | Specialized follow-up |

## Applications and Use Cases

### Practical Applications

Technologies developed for DROP have found applications in:

- **Financial Analysis**: Extracting and computing financial metrics from reports

- **Sports Analytics**: Automated game summary analysis

- **Historical Research**: Quantitative analysis of historical texts

- **Educational Systems**: Automated problem solving and tutoring

## Future Directions

### Ongoing Research

Current research directions inspired by DROP include:

1. **Compositional Reasoning**: Breaking complex operations into primitive steps
2. **Symbolic Integration**: Combining neural and symbolic approaches
3. **Explainable Reasoning**: Generating interpretable reasoning chains
4. **Robust Evaluation**: Addressing normalization and scoring issues
5. **Domain Extension**: Expanding beyond sports and history

## Significance

DROP has fundamentally advanced the field of reading comprehension by demonstrating that true understanding requires more than pattern matching and span extraction. The benchmark's requirement for discrete mathematical and logical operations over text pushed the development of models with genuine reasoning capabilities. The improvement from 32.7% to 87.1% F1 score represents not just numerical progress but qualitative advances in how AI systems process and reason about textual information.

While current models have made significant progress, the gap to human performance (96% F1) indicates remaining challenges in achieving robust, generalizable reasoning over text. DROP continues to serve as a valuable benchmark for developing and evaluating reading comprehension systems that can perform practical, real-world information processing tasks.

## See Also

- [Reading Comprehension Benchmarks](/index.php?title=Reading_Comprehension_Benchmarks&action=edit&redlink=1)

- [SQuAD](/index.php?title=SQuAD&action=edit&redlink=1)

- [Mathematical Reasoning in NLP](/index.php?title=Mathematical_Reasoning_in_NLP&action=edit&redlink=1)

- [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1)

- [Discrete Reasoning](/index.php?title=Discrete_Reasoning&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-drop_paper_1-0) [1.1](#cite_ref-drop_paper_1-1) [1.2](#cite_ref-drop_paper_1-2) [1.3](#cite_ref-drop_paper_1-3) Dua, D., Wang, Y., Dasigi, P., Stanovsky, G., Singh, S., & Gardner, M. (2019). "DROP: A Reading Comprehension Benchmark Requiring Discrete Reasoning Over Paragraphs". NAACL 2019. arXiv:1903.00161. Retrieved from [https://arxiv.org/abs/1903.00161](https://arxiv.org/abs/1903.00161)

2. [↑](#cite_ref-drop_github_2-0) Allen Institute for AI. (2019). "DROP Evaluation Script". GitHub. Retrieved from [https://github.com/allenai/allennlp-reading-comprehension](https://github.com/allenai/allennlp-reading-comprehension)