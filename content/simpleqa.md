---
title: "SimpleQA"
slug: "simpleqa"
categories:
  - "AI_Benchmarks"
  - "Factuality_Benchmarks"
  - "Question_Answering_Benchmarks"
  - "2024_Benchmarks"
  - "OpenAI"
  - "AI_Safety_Benchmarks"
---**

| SimpleQA |
| --- |
| Overview |
| Full name | SimpleQA: Measuring Short-Form Factuality in Large Language Models |
| Abbreviation | SimpleQA |
| Description | A factuality benchmark measuring language models' ability to answer short, fact-seeking questions accurately without hallucination |
| Release date | 2024-11-07 |
| Latest version | 1.0 |
| Benchmark updated | 2024-11 |
| Authors | [Jason Wei and colleagues](/index.php?title=Jason_Wei_and_colleagues&action=edit&redlink=1) |
| Organization | [OpenAI](/wiki/openai) |
| Technical Details |
| Type | [Factuality](/index.php?title=Factuality&action=edit&redlink=1), [Question Answering](/index.php?title=Question_Answering&action=edit&redlink=1), [Hallucination Detection](/index.php?title=Hallucination_Detection&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Short-form question answering](/index.php?title=Short-form_question_answering&action=edit&redlink=1) |
| Number of tasks | Multiple topic domains |
| Total examples | 4,326 questions |
| Evaluation metric | [Accuracy](/wiki/accuracy), [F-score](/index.php?title=F-score&action=edit&redlink=1), [Not Attempted rate](/index.php?title=Not_Attempted_rate&action=edit&redlink=1) |
| Domains | [Science & Technology](/index.php?title=Science_%26_Technology&action=edit&redlink=1), [Politics](/wiki/politics), [Art](/wiki/art), [History](/index.php?title=History&action=edit&redlink=1), [Entertainment](/wiki/entertainment), [Geography](/wiki/geography) |
| Languages | English |
| Performance |
| Human performance | Not explicitly measured |
| Baseline | 8.6% (GPT-4o-mini) |
| SOTA score | 42.7% |
| SOTA model | [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) |
| SOTA date | 2024-10 |
| Saturated | No |
| Resources |
| Website | [Official website](https://openai.com/index/introducing-simpleqa/) |
| Paper | [Paper](https://arxiv.org/abs/2411.04368) |
| GitHub | [Repository](https://github.com/openai/simple-evals) |
| Dataset | [Download](https://huggingface.co/datasets/basicv8vc/SimpleQA) |
| License | MIT

 |

SimpleQA** is a [factuality](/index.php?title=Factuality&action=edit&redlink=1) [benchmark](/wiki/benchmark) designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' ability to answer short, fact-seeking questions accurately without [hallucination](/wiki/hallucination). Released on November 7, 2024, by [OpenAI](/wiki/openai)[&#91;1&#93;](#cite_note-simpleqa_openai-1), SimpleQA addresses the critical challenge of AI hallucinations by focusing on 4,326 questions with single, indisputable answers that test models' factual knowledge as of December 31, 2023. The benchmark reveals that even the most advanced models achieve less than 50% accuracy, with [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) leading at 42.7%, highlighting significant room for improvement in AI factuality[&#91;2&#93;](#cite_note-simpleqa_paper-2).

## Overview

SimpleQA represents a focused approach to measuring one of the most fundamental capabilities of AI systems: providing accurate factual information. Unlike comprehensive knowledge benchmarks that test reasoning or complex understanding, SimpleQA specifically targets the problem of hallucination, when models confidently provide incorrect information. The benchmark consists of carefully curated questions designed to have single, verifiable answers that do not change over time, making it an ideal tool for assessing and tracking improvements in model factuality[&#91;2&#93;](#cite_note-simpleqa_paper-2).

### Significance

The development of SimpleQA addresses several critical needs in AI evaluation:

- **Hallucination Detection**: Direct measurement of factual accuracy versus fabricated responses

- **Calibration Assessment**: Evaluating whether model confidence aligns with accuracy

- **Automated Evaluation**: AI-powered grading system enables scalable assessment

- **Factuality Focus**: Pure test of knowledge accuracy without reasoning complexity

- **Benchmark Simplicity**: Short questions with clear answers facilitate rapid evaluation

## Dataset Structure

### Question Distribution by Domain

SimpleQA's 4,326 questions span diverse knowledge domains:

| Domain | Number of Questions | Percentage | Example Topics |
| --- | --- | --- | --- |
| **Science & Technology** | 858 | 19.8% | Physics, biology, computing, engineering |
| **Politics** | 709 | 16.4% | Government, elections, political figures |
| **Art** | 550 | 12.7% | Visual arts, music, literature, film |
| **History** | ~475 | ~11% | Historical events, dates, figures |
| **Entertainment** | ~430 | ~10% | Movies, TV shows, celebrities |
| **Geography** | ~390 | ~9% | Countries, cities, landmarks |
| **Other** | ~914 | ~21.1% | Sports, business, general knowledge |

### Answer Type Distribution

The benchmark includes various answer types to test different factual knowledge:

| Answer Type | Percentage | Example | Characteristics |
| --- | --- | --- | --- |
| **Dates** | 32.8% | "When was the iPhone first released?" | Temporal facts |
| **People** | 24.1% | "Who invented the telephone?" | Historical figures, creators |
| **Numbers** | 15.3% | "How many planets are in our solar system?" | Quantities, measurements |
| **Places** | 9.9% | "Where is the Eiffel Tower located?" | Geographic locations |
| **Other** | 18.0% | Various factual answers | Diverse fact types |

### Question Characteristics

Each SimpleQA question meets specific criteria[&#91;2&#93;](#cite_note-simpleqa_paper-2):

| Criterion | Description | Purpose |
| --- | --- | --- |
| **Single Answer** | One indisputable correct answer | Eliminates ambiguity |
| **Time-Invariant** | Answer doesn't change over time | Consistent evaluation |
| **Challenging** | Difficult for frontier models | Meaningful differentiation |
| **Verifiable** | Factual as of Dec 31, 2023 | Objective grading |
| **Short-Form** | Brief question and answer | Efficient evaluation |

## Creation Methodology

### Two-Stage Data Collection

SimpleQA employed a rigorous creation process:

| Stage | Process | Quality Control |
| --- | --- | --- |
| **Stage 1: Question Creation** | AI trainers generate challenging questions | Focus on model failure points |
| **Stage 2: Verification** | Independent trainer verifies answers | Ensures accuracy and clarity |
| **Review** | Quality checks and filtering | Remove ambiguous questions |
| **Calibration** | Test on frontier models | Confirm difficulty level |

### Quality Assurance

The benchmark underwent extensive quality control:

1. **Independent Verification**: Each question-answer pair verified by separate trainer
2. **Model Testing**: Questions tested on frontier models during creation
3. **Temporal Cutoff**: All facts verified as of December 31, 2023
4. **Ambiguity Removal**: Questions with multiple valid answers excluded
5. **Difficulty Calibration**: Ensured questions challenge top models

## Evaluation Methodology

### Grading System

SimpleQA uses an automated AI-powered grading system[&#91;1&#93;](#cite_note-simpleqa_openai-1):

| Grade | Description | Example Response | Impact |
| --- | --- | --- | --- |
| **Correct** | Factually accurate answer | "Paris" for "Capital of France?" | Positive score |
| **Incorrect** | Wrong or inaccurate answer | "London" for "Capital of France?" | Negative score |
| **Not Attempted** | Model declines to answer | "I don't have enough information" | Neutral (shows calibration) |

### Evaluation Metrics

The benchmark employs multiple metrics for comprehensive assessment:

| Metric | Formula | Description | Interpretation |
| --- | --- | --- | --- |
| **Overall Correct** | Correct / Total | Percentage of all questions answered correctly | Primary accuracy measure |
| **Correct Given Attempted** | Correct / Attempted | Accuracy when model tries to answer | Confidence accuracy |
| **F-score** | Harmonic mean | Balance of coverage and accuracy | Overall performance |
| **Not Attempted Rate** | Not Attempted / Total | Percentage of questions declined | Calibration measure |

## Current Performance

### Model Leaderboard (October 2024)

| Rank | Model | Correct % | Incorrect % | Not Attempted % | F-score |
| --- | --- | --- | --- | --- | --- |
| 1 | [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) | 42.7% | 29.8% | 27.5% | 44.8 |
| 2 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 38.2% | 59.0% | 2.8% | 38.5 |
| 3 | [Claude-3.5-Sonnet](/index.php?title=Claude-3.5-Sonnet&action=edit&redlink=1) | 28.9% | 36.1% | 35.0% | ~32 |
| 4 | [Claude-3-Opus](/index.php?title=Claude-3-Opus&action=edit&redlink=1) | 23.5% | 40.5% | 36.0% | ~28 |
| 5 | [GPT-4o-mini](/index.php?title=GPT-4o-mini&action=edit&redlink=1) | 8.6% | 76.6% | 14.8% | ~10 |

### Performance Analysis

Key observations from model performance[&#91;2&#93;](#cite_note-simpleqa_paper-2):

| Finding | Implication | Impact |
| --- | --- | --- |
| No model exceeds 50% | Significant factuality challenges remain | Need for improvement |
| High "Not Attempted" rates | Better calibration in some models | Trade-off with coverage |
| Size-performance correlation | Larger models generally more accurate | Scaling helps but insufficient |
| o1 models lead | Reasoning-focused models perform better | Architecture matters |

## Calibration and Confidence

### Model Calibration Analysis

SimpleQA reveals important insights about model confidence:

| Model Type | Confidence Pattern | Actual Accuracy | Calibration Quality |
| --- | --- | --- | --- |
| **o1 models** | Conservative, decline more | Higher when attempting | Well-calibrated |
| **GPT-4o** | High confidence | Moderate accuracy | Overconfident |
| **Claude models** | Moderate confidence | Lower accuracy | Reasonably calibrated |
| **Smaller models** | Variable confidence | Low accuracy | Poorly calibrated |

### Answer Consistency

Testing across 100 attempts reveals:

- **Consistent Models**: o1-preview shows high consistency in answers

- **Variable Models**: Smaller models show significant variation

- **Confidence Correlation**: Higher consistency correlates with accuracy

## Hallucination Detection

### Types of Hallucinations Identified

SimpleQA effectively identifies various hallucination patterns:

| Hallucination Type | Frequency | Example | Models Affected |
| --- | --- | --- | --- |
| **Factual Errors** | High | Wrong dates, names | All models |
| **Confident Fabrication** | Medium | Invented facts stated confidently | GPT-4o, smaller models |
| **Partial Correctness** | Medium | Right category, wrong specifics | Most models |
| **Temporal Confusion** | Low | Outdated or future information | Various |

### Hallucination Mitigation

The benchmark reveals strategies that reduce hallucinations:

1. **Uncertainty Expression**: Models that decline uncertain questions perform better
2. **Reasoning Chains**: o1 models' reasoning approach reduces errors
3. **Calibration Training**: Better confidence calibration correlates with accuracy

## Research Impact

### Contributions to AI Safety

SimpleQA advances AI safety research through:

| Contribution | Description | Impact |
| --- | --- | --- |
| **Factuality Metric** | Standardized measurement of accuracy | Enables progress tracking |
| **Hallucination Baseline** | Quantifies current hallucination rates | Sets improvement targets |
| **Calibration Assessment** | Measures confidence-accuracy alignment | Improves reliability |
| **Automated Evaluation** | Scalable assessment method | Accelerates research |

### Related Benchmarks

| Benchmark | Focus | Relation to SimpleQA |
| --- | --- | --- |
| [TruthfulQA](/index.php?title=TruthfulQA&action=edit&redlink=1) | Truthfulness and bias | Broader scope, reasoning-heavy |
| **SimpleQA** | Pure factuality | Focused, automated evaluation |
| [MMLU](/wiki/mmlu) | Comprehensive knowledge | More complex, multi-domain |
| [TriviaQA](/index.php?title=TriviaQA&action=edit&redlink=1) | Trivia knowledge | Similar but less curated |

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **English Only** | Single language coverage | Limited global applicability |
| **Static Dataset** | Fixed question set | Risk of overfitting |
| **Limited Scope** | Short factual questions only | Doesn't test complex knowledge |
| **Temporal Cutoff** | Knowledge as of Dec 2023 | Requires updates |

### Future Directions

1. **Multilingual Expansion**: Extending to other languages
2. **Dynamic Updates**: Regular question additions
3. **Domain Expansion**: More specialized knowledge areas
4. **Complexity Levels**: Graduated difficulty tiers
5. **Real-time Evaluation**: Live fact-checking capabilities

## Applications

### Practical Use Cases

- **Model Development**: Benchmark for reducing hallucinations

- **Safety Testing**: Pre-deployment factuality assessment

- **Research Tool**: Studying hallucination patterns

- **Product Evaluation**: Comparing commercial AI systems

- **Training Data**: Improving factual accuracy in models

## Significance

SimpleQA provides a crucial benchmark for one of AI's most pressing challenges: hallucination and factual inaccuracy. By focusing exclusively on short, verifiable facts with single correct answers, it offers a clean measurement of model factuality without confounding factors like reasoning complexity or ambiguity. The finding that even the best models achieve less than 50% accuracy highlights the significant work remaining in developing truly reliable AI systems.

The benchmark's automated evaluation system and focused scope make it an efficient tool for tracking progress in reducing hallucinations, while its careful curation ensures meaningful and consistent assessment across different models. As AI systems become more widely deployed, SimpleQA's role in measuring and improving factual accuracy becomes increasingly critical for building trustworthy AI.

## See Also

- [AI Hallucination](/index.php?title=AI_Hallucination&action=edit&redlink=1)

- [Factuality in AI](/index.php?title=Factuality_in_AI&action=edit&redlink=1)

- [TruthfulQA](/index.php?title=TruthfulQA&action=edit&redlink=1)

- [Question Answering Systems](/index.php?title=Question_Answering_Systems&action=edit&redlink=1)

- [OpenAI](/wiki/openai)

- [AI Safety](/index.php?title=AI_Safety&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-simpleqa_openai_1-0) [1.1](#cite_ref-simpleqa_openai_1-1) OpenAI. (2024). "Introducing SimpleQA". Retrieved from [https://openai.com/index/introducing-simpleqa/](https://openai.com/index/introducing-simpleqa/)

2. ↑ [2.0](#cite_ref-simpleqa_paper_2-0) [2.1](#cite_ref-simpleqa_paper_2-1) [2.2](#cite_ref-simpleqa_paper_2-2) [2.3](#cite_ref-simpleqa_paper_2-3) Wei, J., et al. (2024). "SimpleQA: Measuring Short-Form Factuality in Large Language Models". arXiv:2411.04368. Retrieved from [https://arxiv.org/abs/2411.04368](https://arxiv.org/abs/2411.04368)