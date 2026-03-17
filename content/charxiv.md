---
title: "CharXiv"
slug: "charxiv"
categories:
  - "AI_Benchmarks"
  - "Multimodal_Benchmarks"
  - "Visual_Reasoning"
  - "Chart_Understanding"
  - "2024_Benchmarks"
  - "Princeton_NLP"
  - "NeurIPS_Datasets"
---**

| CharXiv |
| --- |
| Overview |
| Full name | Charting Gaps in Realistic Chart Understanding in Multimodal LLMs |
| Abbreviation | CharXiv |
| Description | A comprehensive evaluation suite for assessing chart understanding capabilities in multimodal large language models |
| Release date | 2024-06-26 |
| Latest version | 1.0 |
| Benchmark updated | 2024-06 |
| Authors | [Zirui Wang](/index.php?title=Zirui_Wang&action=edit&redlink=1),&#160;[Mengzhou Xia](/index.php?title=Mengzhou_Xia&action=edit&redlink=1),&#160;[Luxi He](/index.php?title=Luxi_He&action=edit&redlink=1),&#160;[Howard Chen](/index.php?title=Howard_Chen&action=edit&redlink=1),&#160;[Yitao Liu](/index.php?title=Yitao_Liu&action=edit&redlink=1),&#160;[Richard Zhu](/index.php?title=Richard_Zhu&action=edit&redlink=1),&#160;[Kaiqu Liang](/index.php?title=Kaiqu_Liang&action=edit&redlink=1),&#160;[Xindi Wu](/index.php?title=Xindi_Wu&action=edit&redlink=1),&#160;[Haotian Liu](/index.php?title=Haotian_Liu&action=edit&redlink=1),&#160;[Sadhika Malladi](/index.php?title=Sadhika_Malladi&action=edit&redlink=1),&#160;[Alexis Chevalier](/index.php?title=Alexis_Chevalier&action=edit&redlink=1),&#160;[Sanjeev Arora](/index.php?title=Sanjeev_Arora&action=edit&redlink=1),&#160;[Danqi Chen](/index.php?title=Danqi_Chen&action=edit&redlink=1) |
| Organization | [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1),&#160;[University of Wisconsin-Madison](/index.php?title=University_of_Wisconsin-Madison&action=edit&redlink=1),&#160;[The University of Hong Kong](/index.php?title=The_University_of_Hong_Kong&action=edit&redlink=1) |
| Technical Details |
| Type | [Chart Understanding](/index.php?title=Chart_Understanding&action=edit&redlink=1),&#160;[Visual Reasoning](/index.php?title=Visual_Reasoning&action=edit&redlink=1),&#160;[Multimodal Evaluation](/index.php?title=Multimodal_Evaluation&action=edit&redlink=1) |
| Modality | [Vision](/index.php?title=Vision&action=edit&redlink=1),&#160;[Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Open-vocabulary question answering](/index.php?title=Open-vocabulary_question_answering&action=edit&redlink=1) |
| Number of tasks | 2 (descriptive and reasoning) |
| Total examples | 2,323 charts with 10,000+ questions |
| Evaluation metric | [Accuracy (GPT-based evaluation)](/index.php?title=Accuracy_(GPT-based_evaluation)&action=edit&redlink=1) |
| Domains | [Scientific charts from multiple disciplines](/index.php?title=Scientific_charts_from_multiple_disciplines&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 80.5% |
| Baseline | Varies by model type |
| SOTA score | 60.2% |
| SOTA model | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | No |
| Resources |
| Website | [Official website](https://princeton-nlp.github.io/CharXiv/) |
| Paper | [Paper](https://arxiv.org/abs/2406.18521) |
| GitHub | [Repository](https://github.com/princeton-nlp/CharXiv) |
| Dataset | [Download](https://huggingface.co/datasets/princeton-nlp/CharXiv) |
| License | CC BY-SA 4.0 (data), Apache 2.0 (code)

 |

CharXiv** is a comprehensive [benchmark](/wiki/benchmark) designed to evaluate [chart understanding](/index.php?title=Chart_understanding&action=edit&redlink=1) capabilities in [Multimodal Large Language Models](/index.php?title=Multimodal_Large_Language_Models&action=edit&redlink=1) (MLLMs). Released on June 26, 2024, by researchers from [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1), [University of Wisconsin-Madison](/index.php?title=University_of_Wisconsin-Madison&action=edit&redlink=1), and [The University of Hong Kong](/index.php?title=The_University_of_Hong_Kong&action=edit&redlink=1)[&#91;1&#93;](#cite_note-charxiv_paper-1), CharXiv addresses critical limitations in existing chart understanding benchmarks by providing realistic, challenging charts manually sourced from scientific papers. The benchmark reveals a substantial performance gap between current AI models and human capabilities, with the best model ([Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1)) achieving only 60.2% accuracy compared to 80.5% human performance.

## Overview

CharXiv represents a paradigm shift in evaluating [visual reasoning](/index.php?title=Visual_reasoning&action=edit&redlink=1) capabilities of AI systems by focusing on realistic chart understanding scenarios. Unlike existing benchmarks that rely on oversimplified, synthetic, or homogeneous charts, CharXiv features 2,323 high-resolution charts manually extracted from [arXiv](/index.php?title=ArXiv&action=edit&redlink=1) scientific papers, accompanied by over 10,000 carefully crafted questions. The benchmark evaluates two fundamental aspects of chart comprehension: descriptive understanding (examining basic chart elements) and reasoning capabilities (synthesizing information across complex visual elements)[&#91;1&#93;](#cite_note-charxiv_paper-1).

The benchmark's name, a portmanteau of "Chart" and "arXiv," reflects its foundation in real scientific visualizations. By sourcing charts directly from academic papers, CharXiv ensures that models are tested on the types of complex, nuanced visualizations they would encounter in real-world applications, from scientific research to business analytics.

### Significance

CharXiv's importance in the field of AI evaluation stems from several key contributions:

- **Realistic Complexity**: First benchmark to systematically evaluate models on natural, challenging charts from actual scientific papers

- **Quality Assurance**: All charts and questions manually curated and verified by human experts

- **Robustness Testing**: Reveals model fragility with performance drops up to 34.5% from simple variations

- **Performance Gap Exposure**: Uncovers ~20% gap between best models and human performance

- **Evaluation Standard**: Adopted by major AI labs for frontier model assessment

## Dataset Composition

### Chart Collection and Curation

CharXiv's charts undergo a rigorous selection process[&#91;2&#93;](#cite_note-charxiv_github-2):

| Stage | Process | Quality Control |
| --- | --- | --- |
| **Source Selection** | ArXiv papers across disciplines | Ensure diversity |
| **Chart Extraction** | High-resolution image capture | Maintain visual clarity |
| **Manual Review** | Expert examination | Remove low-quality/ambiguous charts |
| **Annotation** | Question generation by experts | Multiple review rounds |
| **Verification** | Answer validation | Ensure correctness |

### Dataset Statistics

The benchmark comprises carefully balanced components:

| Component | Quantity | Description |
| --- | --- | --- |
| **Total Charts** | 2,323 | High-resolution scientific visualizations |
| **Validation Set** | 1,000 charts | 5,000 questions for development |
| **Test Set** | 1,323 charts | Hidden test for evaluation |
| **Questions per Chart** | 5 | 4 descriptive + 1 reasoning |
| **Total Questions** | 10,000+ | Open-vocabulary short answers |
| **Unanswerable Questions** | 1 per chart | Tests model calibration |

### Chart Types and Domains

CharXiv encompasses diverse visualization types from multiple scientific fields:

| Chart Category | Examples | Complexity Features |
| --- | --- | --- |
| **Statistical Plots** | Bar charts, histograms, box plots | Multiple series, error bars, annotations |
| **Line Graphs** | Time series, trend lines | Multiple axes, logarithmic scales |
| **Scatter Plots** | Correlations, distributions | Overlapping points, regression lines |
| **Heatmaps** | Matrices, correlations | Color gradients, hierarchical clustering |
| **Specialized** | Confusion matrices, ROC curves | Domain-specific notations |
| **Compound** | Multi-panel figures | Cross-panel relationships |

## Question Design

### Descriptive Questions

Descriptive questions test basic chart comprehension[&#91;1&#93;](#cite_note-charxiv_paper-1):

| Question Type | Focus Area | Example |
| --- | --- | --- |
| **Data Retrieval** | Extracting specific values | "What is the value at x=5?" |
| **Element Identification** | Recognizing chart components | "What does the blue line represent?" |
| **Trend Recognition** | Identifying patterns | "Is the trend increasing or decreasing?" |
| **Comparison** | Relating multiple elements | "Which category has the highest value?" |

### Reasoning Questions

Reasoning questions require deeper analysis:

| Reasoning Type | Cognitive Requirement | Example Task |
| --- | --- | --- |
| **Synthesis** | Combining multiple data points | "What conclusion can be drawn from comparing trends?" |
| **Inference** | Drawing implications | "What might explain this pattern?" |
| **Calculation** | Performing computations | "What is the percentage change?" |
| **Extrapolation** | Extending beyond data | "What would likely happen if this trend continues?" |

### Unanswerable Questions

Each chart includes one intentionally unanswerable question to test model [calibration](/index.php?title=Calibration&action=edit&redlink=1):

- Tests ability to recognize information limitations

- Prevents overconfident responses

- Evaluates uncertainty handling

## Evaluation Methodology

### Evaluation Framework

CharXiv employs a sophisticated evaluation pipeline[&#91;3&#93;](#cite_note-charxiv_website-3):

| Component | Implementation | Purpose |
| --- | --- | --- |
| **Setting** | Zero-shot with natural instructions | Real-world usage simulation |
| **Scoring** | GPT API-based evaluation | Consistent semantic matching |
| **Metrics** | Accuracy percentage | Clear performance measurement |
| **Quality Control** | Human verification samples | Ensure scoring reliability |

### Technical Implementation

The evaluation process follows three steps:

```python

1. 

python src/generate.py --model [model_name]

1. 

python src/evaluate.py --responses [response_file]

1. 

python src/get_stats.py --evaluation [eval_file]
```

### Scoring Criteria

Responses are evaluated based on:

- **Semantic Correctness**: Answer conveys correct information

- **Precision**: Appropriate level of detail

- **Relevance**: Directly addresses the question

- **Format Compliance**: Follows answer format requirements

## Performance Analysis

### Current Leaderboard

Performance as of 2024[&#91;1&#93;](#cite_note-charxiv_paper-1):

| Rank | Model | Overall Accuracy | Descriptive | Reasoning | Gap to Human |
| --- | --- | --- | --- | --- | --- |
| - | **Human Performance** | **80.5%** | **85.2%** | **71.3%** | **0%** |
| 1 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 60.2% | 65.8% | 48.9% | -20.3% |
| 2 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 47.1% | 52.3% | 36.7% | -33.4% |
| 3 | [InternVL Chat V2.0](/index.php?title=InternVL_Chat_V2.0&action=edit&redlink=1) 76B | 38.9% | 43.2% | 30.1% | -41.6% |
| 4 | [Gemini-1.5-Pro](/index.php?title=Gemini-1.5-Pro&action=edit&redlink=1) | 35.7% | 40.1% | 27.2% | -44.8% |
| 5 | [InternVL Chat V1.5](/index.php?title=InternVL_Chat_V1.5&action=edit&redlink=1) | 29.2% | 33.5% | 20.8% | -51.3% |

### Performance Insights

Key findings from evaluations reveal:

| Finding | Implication | Research Direction |
| --- | --- | --- |
| **20-40% Human Gap** | Significant room for improvement | Enhanced visual reasoning |
| **Descriptive > Reasoning** | Basic tasks easier than synthesis | Better integration capabilities |
| **Model Fragility** | 34.5% drop from variations | Robustness improvements |
| **Proprietary Advantage** | Closed models outperform open | Open-source advancement needed |

### Model Adoption

CharXiv has become a standard evaluation for frontier models:

| Model Family | Adoption Status | Use Case |
| --- | --- | --- |
| [GPT-4](/wiki/gpt-4) variants | Official benchmark | Performance tracking |
| [Qwen2.5-VL](/index.php?title=Qwen2.5-VL&action=edit&redlink=1) | Integrated | Development validation |
| [InternVL](/index.php?title=InternVL&action=edit&redlink=1) series | Standard eval | Version comparison |
| [Llama 3.2 Vision](/index.php?title=Llama_3.2_Vision&action=edit&redlink=1) | Included | Capability assessment |
| [Molmo](/index.php?title=Molmo&action=edit&redlink=1), [NVLM](/index.php?title=NVLM&action=edit&redlink=1) | Adopted | Multimodal evaluation |

## Robustness Analysis

### Stress Testing Results

CharXiv includes systematic robustness evaluations[&#91;1&#93;](#cite_note-charxiv_paper-1):

| Perturbation Type | Average Performance Drop | Most Affected Models |
| --- | --- | --- |
| **Question Rephrasing** | -12.3% | Smaller models |
| **Chart Color Changes** | -8.7% | Vision encoders |
| **Axis Relabeling** | -15.2% | All models |
| **Data Point Removal** | -34.5% | Reasoning tasks |

### Failure Modes

Common failure patterns identified:

- **Hallucination**: Inventing data points not present

- **Misalignment**: Confusing chart elements

- **Overcounting**: Errors in element enumeration

- **Scale Misreading**: Incorrect axis interpretation

## Technical Specifications

### Repository Structure

| Directory | Contents | Purpose |
| --- | --- | --- |
| `data/` | QA pairs and metadata | Core dataset |
| `images/` | Chart images | Visual inputs |
| `results/` | Model outputs | Evaluation tracking |
| `src/` | Python evaluation code | Processing pipeline |
| `scripts/` | Utility scripts | Automation tools |

### Usage Guidelines

| Aspect | Specification | Rationale |
| --- | --- | --- |
| **Intended Use** | Evaluation only | Prevent overfitting |
| **Training Prohibition** | Not for model training | Maintain test integrity |
| **Data License** | CC BY-SA 4.0 | Academic sharing |
| **Code License** | Apache 2.0 | Open development |
| **Chart Rights** | Original authors | Respect copyright |

## Research Impact

### Influence on Field

CharXiv has catalyzed several research directions:

| Area | Impact | Active Research |
| --- | --- | --- |
| **Visual Reasoning** | New architectures | Enhanced encoders |
| **Robustness** | Stress testing adoption | Invariance training |
| **Multimodal Integration** | Better fusion methods | Cross-modal attention |
| **Evaluation Standards** | Realistic benchmarks | Domain-specific tests |

### Related Benchmarks

| Benchmark | Focus | Relation to CharXiv |
| --- | --- | --- |
| [ChartQA](/index.php?title=ChartQA&action=edit&redlink=1) | Simple charts | Less complex, synthetic |
| [PlotQA](/index.php?title=PlotQA&action=edit&redlink=1) | Plot understanding | Narrower scope |
| [FigureQA](/index.php?title=FigureQA&action=edit&redlink=1) | Figure reasoning | Binary questions only |
| [DVQA](/index.php?title=DVQA&action=edit&redlink=1) | Bar chart QA | Single chart type |
| **CharXiv** | Realistic scientific charts | Comprehensive, natural |

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **English Only** | Single language | Limited global applicability |
| **Scientific Focus** | ArXiv papers primarily | May miss business charts |
| **Static Evaluation** | Fixed question set | Potential memorization |
| **Answer Format** | Short answers only | Misses explanations |

### Future Directions

Planned and potential extensions:

1. **Multilingual Support**: Expanding to non-English charts
2. **Interactive Evaluation**: Multi-turn chart discussions
3. **Domain Expansion**: Business, journalism, education charts
4. **Explanation Requirements**: Reasoning process evaluation
5. **Dynamic Generation**: Procedural question creation

## Significance

CharXiv represents a crucial advancement in evaluating multimodal AI systems' chart understanding capabilities. By introducing realistic, challenging charts from actual scientific papers and revealing a substantial 20-40% performance gap between current models and human performance, it exposes previously hidden weaknesses in visual reasoning systems. The benchmark's stress testing reveals that even top models suffer performance drops up to 34.5% from simple variations, highlighting the fragility of current approaches.

As data visualization becomes increasingly central to communication across science, business, and media, CharXiv provides essential infrastructure for developing AI systems capable of genuine chart comprehension. Its adoption by major AI labs and integration into frontier model evaluations establishes it as a critical milestone for measuring progress toward human-level visual understanding capabilities.

## See Also

- [Chart Understanding](/index.php?title=Chart_Understanding&action=edit&redlink=1)

- [Multimodal Large Language Models](/index.php?title=Multimodal_Large_Language_Models&action=edit&redlink=1)

- [Visual Reasoning](/index.php?title=Visual_Reasoning&action=edit&redlink=1)

- [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1)

- [ChartQA](/index.php?title=ChartQA&action=edit&redlink=1)

- [Scientific Figure Analysis](/index.php?title=Scientific_Figure_Analysis&action=edit&redlink=1)

- [Vision-Language Models](/index.php?title=Vision-Language_Models&action=edit&redlink=1)

## References

1. 
2. 
3.