---
title: "GPQA"
slug: "gpqa"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Scientific_Reasoning_Benchmarks"
  - "Graduate-Level_Benchmarks"
  - "2023_Benchmarks"
  - "NYU_Research"
  - "Expert_Knowledge_Evaluation"
---**

| GPQA |
| --- |
| Overview |
| Full name | Graduate-Level Google-Proof Q&A Benchmark |
| Abbreviation | GPQA |
| Description | A challenging dataset of graduate-level multiple-choice questions designed to be "Google-proof" and test deep domain knowledge |
| Release date | 2023-11-20 |
| Latest version | 1.0 |
| Benchmark updated | 2023-11 |
| Authors | [David Rein](/index.php?title=David_Rein&action=edit&redlink=1), [Betty Li Hou](/index.php?title=Betty_Li_Hou&action=edit&redlink=1), [Asa Cooper Stickland](/index.php?title=Asa_Cooper_Stickland&action=edit&redlink=1), [Jackson Petty](/index.php?title=Jackson_Petty&action=edit&redlink=1), [Richard Yuanzhe Pang](/index.php?title=Richard_Yuanzhe_Pang&action=edit&redlink=1), [Julien Dirani](/index.php?title=Julien_Dirani&action=edit&redlink=1), [Julian Michael](/index.php?title=Julian_Michael&action=edit&redlink=1), [Samuel R. Bowman](/index.php?title=Samuel_R._Bowman&action=edit&redlink=1) |
| Organization | [New York University](/index.php?title=New_York_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Scientific Reasoning](/index.php?title=Scientific_Reasoning&action=edit&redlink=1), [Graduate-Level Knowledge](/index.php?title=Graduate-Level_Knowledge&action=edit&redlink=1), [Expert Q&A](/index.php?title=Expert_Q%26A&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple-choice (4 options)](/index.php?title=Multiple-choice_(4_options)&action=edit&redlink=1) |
| Number of tasks | 3 domains |
| Total examples | 448 (main), 546 (extended), 198 (diamond) |
| Evaluation metric | [Accuracy](/wiki/accuracy) |
| Domains | [Biology](/index.php?title=Biology&action=edit&redlink=1), [Physics](/index.php?title=Physics&action=edit&redlink=1), [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 65% (PhD experts), 34% (non-experts with web access) |
| Baseline | 39% (GPT-4, 2023) |
| SOTA score | 87.5% |
| SOTA model | [Grok 4](/index.php?title=Grok_4&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://github.com/idavidrein/gpqa/) |
| Paper | [Paper](https://arxiv.org/abs/2311.12022) |
| GitHub | [Repository](https://github.com/idavidrein/gpqa/) |
| Dataset | [Download](https://huggingface.co/datasets/idavidrein/gpqa) |
| License | MIT

 |

GPQA** (**Graduate-Level Google-Proof Q&A Benchmark**) is a challenging [benchmark](/wiki/benchmark) dataset of graduate-level [multiple-choice questions](/index.php?title=Multiple-choice_questions&action=edit&redlink=1) designed to test advanced scientific knowledge and reasoning capabilities in [artificial intelligence](/wiki/artificial_intelligence) systems. Released in November 2023 by researchers at [New York University](/index.php?title=New_York_University&action=edit&redlink=1)[&#91;1&#93;](#cite_note-gpqa_paper-1), GPQA addresses the challenge of evaluating AI systems on questions that cannot be easily answered through [web searches](/index.php?title=Web_searches&action=edit&redlink=1), requiring deep domain expertise and complex multi-step reasoning. The benchmark features questions written and validated by PhD-level domain experts across biology, physics, and chemistry, with a notable performance gap between experts (65%) and non-experts with internet access (34%).

## Overview

GPQA represents a significant advancement in evaluating AI systems' capabilities on expert-level knowledge that goes beyond simple information retrieval. The benchmark's defining characteristic is its "Google-proof" nature, questions are specifically crafted to resist solution through web searches, even when given unlimited time and internet access. This design philosophy ensures that models must demonstrate genuine understanding and reasoning rather than sophisticated search and retrieval capabilities[&#91;1&#93;](#cite_note-gpqa_paper-1).

### Significance

The development of GPQA addresses several critical challenges in AI evaluation:

- **Scalable Oversight**: Tests AI systems on knowledge that may exceed typical human capabilities

- **Expert-Level Evaluation**: Provides genuine graduate-level assessment beyond undergraduate benchmarks

- **Reasoning vs. Retrieval**: Distinguishes between information lookup and deep understanding

- **Future-Proofing**: Designed for AI systems that may surpass human expertise

- **Scientific Rigor**: Questions validated by domain experts ensure accuracy and relevance

## Dataset Structure

### Dataset Variants

GPQA consists of three carefully curated variants, each serving different evaluation purposes:

| Variant | Number of Questions | Description | Primary Use |
| --- | --- | --- | --- |
| **GPQA Extended** | 546 | Complete dataset including all validated questions | Comprehensive evaluation |
| **GPQA Main** | 448 | Primary dataset excluding preliminary questions | Standard benchmarking |
| **GPQA Diamond** | 198 | Most challenging subset | Discrimination between expert and non-expert performance |

### Domain Distribution

The questions span three core scientific disciplines:

| Domain | Approximate Coverage | Topics Included | Expertise Required |
| --- | --- | --- | --- |
| **Biology** | ~33% | Molecular biology, genetics, biochemistry, cell biology | Graduate/PhD level |
| **Physics** | ~33% | Quantum mechanics, statistical mechanics, relativity, particle physics | Graduate/PhD level |
| **Chemistry** | ~33% | Organic chemistry, physical chemistry, inorganic chemistry | Graduate/PhD level |

### Question Characteristics

Each GPQA question exhibits several defining features[&#91;1&#93;](#cite_note-gpqa_paper-1):

- **Length**: Extended problem statements requiring careful parsing

- **Complexity**: Multi-step reasoning chains necessary for solution

- **Precision**: Unambiguous correct answers validated by experts

- **Difficulty**: Challenging even for PhD-level domain experts

- **Independence**: Cannot be solved through simple web searches

## Creation Methodology

### Expert Question Writing

The creation process involved rigorous expert participation:

| Stage | Participants | Process | Outcome |
| --- | --- | --- | --- |
| **Writing** | PhD students/holders | Create original graduate-level questions | Initial question pool |
| **Validation** | Domain experts | Review for accuracy and clarity | Validated questions |
| **Testing** | Non-experts with web access | Attempt solutions with internet | Difficulty verification |
| **Refinement** | Original authors | Address feedback and ambiguities | Final questions |

### Quality Control

GPQA employs multiple quality assurance mechanisms:

1. **Expert Agreement**: Multiple experts must agree on correct answer
2. **Non-Expert Testing**: Ensures questions are genuinely difficult
3. **Web Search Resistance**: Verified through non-expert attempts with internet
4. **Clarity Review**: Questions refined to eliminate ambiguity
5. **Answer Validation**: All answers double-checked by domain experts

## Diamond Subset Creation

The GPQA Diamond subset represents the most discriminative questions:

### Selection Criteria

Questions qualify for Diamond subset if[&#91;1&#93;](#cite_note-gpqa_paper-1):

- At least one expert answered correctly

- No more than one out of three non-experts answered correctly

- Clear separation between expert and non-expert performance

### Performance Characteristics

| Group | Diamond Performance | Main Dataset Performance | Performance Gap |
| --- | --- | --- | --- |
| **PhD Experts** | 69.7% | 65% | Consistent high performance |
| **Non-Experts + Web** | <33% | 34% | Significant difficulty |
| **Random Baseline** | 25% | 25% | Four-option multiple choice |

## Human Performance Analysis

### Expert Performance

Detailed analysis of expert performance reveals:

| Metric | Value | Notes |
| --- | --- | --- |
| **Overall Accuracy** | 65% | Across all domains |
| **Adjusted Accuracy** | 74% | Excluding identified errors |
| **Time per Question** | 15-30 minutes | Typical expert solving time |
| **Confidence** | High | Experts generally confident in answers |
| **Diamond Subset** | 69.7% | Slightly higher on curated subset |

### Non-Expert Performance

Non-expert validators with unrestricted internet access achieved:

| Metric | Value | Notes |
| --- | --- | --- |
| **Overall Accuracy** | 34% | Despite >30 minutes per question |
| **Web Search Success** | Minimal | Questions resist Google searches |
| **Time Investment** | >30 minutes | Extended effort with internet |
| **Strategy** | Varied | Combined search, reasoning, guessing |

## Model Performance Evolution

### Current Leaderboard (2024-2025)

Performance on GPQA Diamond subset:

| Rank | Model | Accuracy | Date | Key Innovation |
| --- | --- | --- | --- | --- |
| 1 | [Grok 4](/index.php?title=Grok_4&action=edit&redlink=1) | 87.5% | 2025 | Advanced reasoning |
| 2 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) | 87.3% | 2025 | Scaled architecture |
| 3 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | 86.4% | 2025 | Multimodal training |
| 4 | [Grok 3](/index.php?title=Grok_3&action=edit&redlink=1) [Beta] | 84.6% | 2024 | Efficient reasoning |
| 5 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) (Thinking) | 84.8% | 2024 | Extended reasoning |
| 6 | [Claude Sonnet 4](/index.php?title=Claude_Sonnet_4&action=edit&redlink=1) | 83.8% | 2025 | Improved architecture |
| 7 | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) | 83.3% | 2024 | Reasoning chains |

### Performance Progression

The rapid improvement in model performance on GPQA:

| Period | Best Performance | Leading Model | Improvement Rate |
| --- | --- | --- | --- |
| Nov 2023 | 39% | GPT-4 | Baseline |
| Early 2024 | 50.4% | Claude 3 Opus | +11.4% |
| Mid 2024 | 59.4% | Claude 3.5 Sonnet | +9% |
| Late 2024 | 84.8% | Claude 3.7 Sonnet | +25.4% |
| 2025 | 87.5% | Grok 4 | +2.7% |

## Evaluation Methodology

### Standard Evaluation Protocols

GPQA supports multiple evaluation approaches[&#91;1&#93;](#cite_note-gpqa_paper-1):

| Method | Description | Typical Performance | Use Case |
| --- | --- | --- | --- |
| **Zero-shot** | Direct answering without examples | Lower | Baseline capability |
| **Zero-shot CoT** | Step-by-step reasoning | Medium | Reasoning assessment |
| **5-shot CoT** | Five examples with reasoning | Higher | Best performance |
| **Answer-only** | No reasoning required | Lowest | Minimal baseline |

### Implementation Details

Standard evaluation setup:
```python

1. Example GPQA evaluation

from gpqa import GPQADataset, evaluate

dataset = GPQADataset(variant="diamond")
model_responses = model.generate(

   dataset.questions,
   method="zero-shot-cot",
   temperature=0.0

)
accuracy = evaluate(model_responses, dataset.answers)
```

## Key Features and Innovations

### Google-Proof Design

The benchmark's resistance to web searches is achieved through:

1. **Original Problems**: Novel questions not found online
2. **Complex Integration**: Requires synthesizing multiple concepts
3. **Deep Reasoning**: Multi-step derivations necessary
4. **Specialized Knowledge**: Graduate-level expertise required
5. **Time Constraints**: Even with web access, solutions take >30 minutes

### Scalable Oversight Application

GPQA serves as a testbed for [scalable oversight](/index.php?title=Scalable_oversight&action=edit&redlink=1) research:

- **Superhuman Domains**: Questions approaching limits of human expertise

- **Validation Methods**: Testing approaches for verifying AI outputs

- **Trust Calibration**: Understanding when to rely on AI vs. human judgment

- **Safety Research**: Ensuring AI systems provide reliable expert-level advice

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **Domain Coverage** | Limited to physics, chemistry, biology | Excludes other fields |
| **Format Restriction** | Multiple-choice only | Doesn't test generation |
| **English Only** | No multilingual support | Limited accessibility |
| **Static Dataset** | Fixed question set | Risk of contamination |
| **Size** | Relatively small (448 questions) | Statistical limitations |

### Ethical Considerations

- **Data Contamination**: Request not to publicize examples to prevent training contamination

- **Expert Verification**: Ensures accuracy in critical scientific domains

- **Access Control**: Password protection maintains dataset integrity

## Research Impact

### Applications

GPQA has influenced several research directions:

| Application | Description | Status |
| --- | --- | --- |
| **Scalable Oversight** | Methods for supervising superhuman AI | Active research |
| **Scientific AI** | Developing expert-level scientific assistants | Ongoing |
| **Evaluation Methods** | New approaches to testing expert knowledge | Expanding |
| **Reasoning Research** | Understanding deep scientific reasoning | Advancing |

### Related Benchmarks

| Benchmark | Focus | Difficulty | Comparison to GPQA |
| --- | --- | --- | --- |
| [MMLU](/wiki/mmlu) | Broad knowledge | Undergraduate | Easier, broader |
| [ScienceQA](/index.php?title=ScienceQA&action=edit&redlink=1) | K-12 science | Elementary/High school | Much easier |
| [ARC](/index.php?title=ARC&action=edit&redlink=1) | Science reasoning | Elementary | Basic level |
| **GPQA** | Graduate science | PhD level | Most challenging |

## Future Directions

### Planned Extensions

1. **Domain Expansion**: Adding mathematics, computer science, engineering
2. **Format Diversity**: Free-response and proof-based questions
3. **Multilingual Versions**: Translations for global accessibility
4. **Dynamic Generation**: Procedurally generated questions
5. **Multimodal Integration**: Including diagrams and equations

## Significance

GPQA represents a crucial benchmark for evaluating AI systems at the frontier of human expertise. By focusing on graduate-level questions that resist simple web searches, it provides genuine assessment of deep scientific understanding and reasoning. The dramatic performance improvements from 39% to 87.5% in less than two years demonstrate rapid progress in AI capabilities while highlighting the remaining gap to consistent expert-level performance.

The benchmark's emphasis on "Google-proof" questions and scalable oversight makes it particularly valuable for developing AI systems that can reliably assist with expert-level tasks where human verification may be challenging. As AI systems approach and potentially exceed human expert performance on GPQA, the benchmark serves as both a measure of progress and a tool for understanding how to safely deploy advanced AI in scientific domains.

## See Also

- [Scalable Oversight](/index.php?title=Scalable_Oversight&action=edit&redlink=1)

- [Scientific Reasoning Benchmarks](/index.php?title=Scientific_Reasoning_Benchmarks&action=edit&redlink=1)

- [MMLU](/wiki/mmlu)

- [Graduate-Level AI Evaluation](/index.php?title=Graduate-Level_AI_Evaluation&action=edit&redlink=1)

- [Chain-of-Thought Prompting](/index.php?title=Chain-of-Thought_Prompting&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-gpqa_paper_1-0) [1.1](#cite_ref-gpqa_paper_1-1) [1.2](#cite_ref-gpqa_paper_1-2) [1.3](#cite_ref-gpqa_paper_1-3) [1.4](#cite_ref-gpqa_paper_1-4) Rein, D., Hou, B. L., Stickland, A. C., Petty, J., Pang, R. Y., Dirani, J., Michael, J., & Bowman, S. R. (2023). "GPQA: A Graduate-Level Google-Proof Q&A Benchmark". First Conference on Language Modeling, 2024. arXiv:2311.12022. Retrieved from [https://arxiv.org/abs/2311.12022](https://arxiv.org/abs/2311.12022)

Cite error: `<ref>` tag with name "gpqa_github" defined in `<references>` is not used in prior text.