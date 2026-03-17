---
title: "GPQA Diamond"
slug: "gpqa_diamond"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Science_Benchmarks"
  - "Expert-Level_Benchmarks"
  - "2023_Benchmarks"
---**

| GPQA Diamond |
| --- |
| Overview |
| Full name | Graduate-Level Google-Proof Q&A Benchmark - Diamond Subset |
| Abbreviation | GPQA Diamond |
| Description | A challenging subset of graduate-level, Google-proof science questions testing PhD-level knowledge in biology, physics, and chemistry |
| Release date | 2023-11-20 |
| Latest version | 1.0 |
| Benchmark updated | 2023-11-20 |
| Authors | [David Rein](/index.php?title=David_Rein&action=edit&redlink=1), [Betty Li Hou](/index.php?title=Betty_Li_Hou&action=edit&redlink=1), [Asa Cooper Stickland](/index.php?title=Asa_Cooper_Stickland&action=edit&redlink=1), [Jackson Petty](/index.php?title=Jackson_Petty&action=edit&redlink=1), [Richard Yuanzhe Pang](/index.php?title=Richard_Yuanzhe_Pang&action=edit&redlink=1), [Julien Dirani](/index.php?title=Julien_Dirani&action=edit&redlink=1), [Julian Michael](/index.php?title=Julian_Michael&action=edit&redlink=1), [Samuel R. Bowman](/index.php?title=Samuel_R._Bowman&action=edit&redlink=1) |
| Organization | [New York University](/index.php?title=New_York_University&action=edit&redlink=1), [Anthropic](/wiki/anthropic) |
| Technical Details |
| Type | [Scientific Reasoning](/index.php?title=Scientific_Reasoning&action=edit&redlink=1), [Expert Knowledge](/index.php?title=Expert_Knowledge&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice](/index.php?title=Multiple_choice&action=edit&redlink=1) |
| Number of tasks | 198 |
| Total examples | 198 |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Zero-shot Chain-of-Thought](/index.php?title=Zero-shot_Chain-of-Thought&action=edit&redlink=1) |
| Domains | [Biology](/index.php?title=Biology&action=edit&redlink=1), [Physics](/index.php?title=Physics&action=edit&redlink=1), [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 65% (PhD experts), 34% (skilled non-experts) |
| Baseline | 39% (GPT-4) |
| SOTA score | 92.4% |
| SOTA model | [Aristotle X1 Verify (Autopoiesis Sciences)](/index.php?title=Aristotle_X1_Verify_(Autopoiesis_Sciences)&action=edit&redlink=1) |
| SOTA date | 2025-01 |
| Saturated | Near saturation |
| Resources |
| Paper | [Paper](https://arxiv.org/abs/2311.12022) |
| GitHub | [Repository](https://github.com/idavidrein/gpqa) |
| Dataset | [Download](https://huggingface.co/datasets/Idavidrein/gpqa) |
| Predecessor | [GPQA (full set)](/index.php?title=GPQA_(full_set)&action=edit&redlink=1) |

GPQA Diamond** is a challenging [AI benchmark](/wiki/ai_benchmark) consisting of 198 PhD-level multiple-choice questions in [biology](/index.php?title=Biology&action=edit&redlink=1), [physics](/index.php?title=Physics&action=edit&redlink=1), and [chemistry](/index.php?title=Chemistry&action=edit&redlink=1). Released on November 20, 2023, it represents the most difficult subset of the Graduate-Level Google-Proof Q&A Benchmark (GPQA), specifically designed to test [artificial intelligence](/wiki/artificial_intelligence) systems on questions that require deep scientific expertise and cannot be easily answered through web searches.

## Overview

GPQA Diamond was created to address a critical challenge in AI development: how to supervise and validate AI systems that may exceed human capabilities in specialized domains. The benchmark consists of questions where PhD experts achieve 65% accuracy (74% when discounting clear mistakes identified in retrospect), while skilled non-experts with unrestricted internet access only achieve 34% accuracy despite spending over 30 minutes per question on average.

### Purpose and Motivation

The primary motivation behind GPQA Diamond is to enable [scalable oversight](/index.php?title=Scalable_oversight&action=edit&redlink=1) experiments for future AI systems. As AI capabilities approach and potentially surpass human expertise in scientific domains, researchers need robust methodologies for human experts to effectively supervise and validate AI outputs. The significant performance gap between experts and non-experts on GPQA Diamond makes it ideal for testing oversight methods that could help humans reliably obtain truthful information from superhuman AI systems.

### Google-Proof Design

A unique characteristic of GPQA Diamond is its "Google-proof" nature. Questions are specifically crafted so that:

- They cannot be easily answered through web searches

- They require deep domain understanding beyond surface-level knowledge

- They test integration of multiple concepts and principles

- They resist simple pattern matching or information retrieval approaches

## Technical Specifications

### Dataset Composition

GPQA Diamond consists of 198 questions selected from the larger GPQA dataset of 448 questions based on difficulty and quality criteria:

| Domain | Number of Questions | Subdisciplines Covered |
| --- | --- | --- |
| [Biology](/index.php?title=Biology&action=edit&redlink=1) | ~66 | Molecular biology, Genetics, Biochemistry, Cell biology, Ecology |
| [Physics](/index.php?title=Physics&action=edit&redlink=1) | ~66 | Quantum mechanics, Statistical mechanics, Electromagnetism, Classical mechanics |
| [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1) | ~66 | Organic chemistry, Physical chemistry, Inorganic chemistry, Analytical chemistry |

### Question Development Process

The questions were developed through a rigorous multi-stage process:

1. **Expert Creation**: Questions written by domain experts with PhDs or pursuing PhDs
2. **Difficulty Calibration**: Questions range from "hard undergraduate" to "post-graduate level"
3. **Validation Process**: Multiple rounds of review by independent experts
4. **Non-Expert Testing**: Skilled validators attempt questions with web access
5. **Diamond Selection**: Most challenging and high-quality questions selected for Diamond subset

### Evaluation Methodology

| Evaluation Metric | Description | Implementation |
| --- | --- | --- |
| Zero-shot Accuracy | Direct answer selection without examples | Standard evaluation protocol |
| [Chain-of-Thought](/index.php?title=Chain-of-Thought&action=edit&redlink=1) (CoT) | Step-by-step reasoning before answer | Common for reasoning models |
| Few-shot Learning | Providing example questions and answers | Used in some evaluations |
| Expert Baseline | PhD holders in relevant domain | 65% accuracy benchmark |
| Non-Expert Baseline | Skilled individuals with web access | 34% accuracy benchmark |

## Performance Analysis

### Current Leaderboard

As of 2025, the following models have achieved notable performance on GPQA Diamond:

| Rank | Model | Accuracy (%) | Organization | Date |
| --- | --- | --- | --- | --- |
| 1 | Aristotle X1 Verify | 92.4 | [Autopoiesis Sciences](/index.php?title=Autopoiesis_Sciences&action=edit&redlink=1) | January 2025 |
| 2 | [xAI Grok](/index.php?title=XAI_Grok&action=edit&redlink=1) 4 Heavy | 88.9 | [xAI](/wiki/xai) | 2025 |
| 3 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | 86.4 | [Google DeepMind](/wiki/google_deepmind) | 2025 |
| 4 | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) | 83.3 | [OpenAI](/wiki/openai) | December 2024 |
| 5 | [OpenAI o1](/index.php?title=OpenAI_o1&action=edit&redlink=1) | 78.0 | [OpenAI](/wiki/openai) | September 2024 |
| 6 | [Claude Sonnet 4](/index.php?title=Claude_Sonnet_4&action=edit&redlink=1) | 78.2 | [Anthropic](/wiki/anthropic) | August 2025 |
| 7 | [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | ~60 | [Anthropic](/wiki/anthropic) | March 2024 |
| 8 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 59.4 | [Anthropic](/wiki/anthropic) | June 2024 |
| 9 | [GPT-4](/wiki/gpt-4) (baseline) | 39.0 | [OpenAI](/wiki/openai) | November 2023 |

Note: Some scores may vary depending on evaluation methodology and date of testing.

### Key Innovation: Aristotle X1 Verify

The top-performing system, Aristotle X1 Verify by [Autopoiesis Sciences](/index.php?title=Autopoiesis_Sciences&action=edit&redlink=1), achieved 92.4% accuracy while also solving a critical AI challenge: calibration. Unlike most AI systems whose confidence scores don't align with actual accuracy, Aristotle X1 embeds systematic doubt into every layer of reasoning, achieving both high accuracy and reliable confidence estimates. The system also achieved 96.1% on SimpleQA, OpenAI's factuality benchmark.

### Performance Trends

#### Rapid Progress

The benchmark has seen dramatic improvements:

- **Initial Release (2023)**: GPT-4 baseline at 39%

- **Mid-2024**: Claude 3 Opus reaches ~60%

- **Late 2024**: o1 and o3 approach 80%

- **Early 2025**: Aristotle X1 Verify exceeds 90%

This represents a more than doubling of performance in just over one year, with recent models approaching and exceeding human expert performance.

#### Domain-Specific Performance

Analysis reveals significant variation across scientific domains:

- **Physics**: Generally highest performance

- **Biology**: Moderate performance

- **Chemistry**: Lowest performance, especially organic chemistry

### Saturation Analysis

As of 2025, GPQA Diamond shows signs of near saturation:

| Indicator | Status | Implications |
| --- | --- | --- |
| Score Clustering | Models clustered around 80-90% | Approaching ceiling effect |
| Consistent Failures | ~20% questions consistently missed | Potential benchmark limitations |
| Error Analysis | ~8% questions potentially invalid | Some noise in dataset |
| Performance Plateau | Diminishing returns on improvements | Near-saturation |

Analysis by Epoch AI suggests approximately 8% of questions may have validity issues, with most "impossible" questions actually being valid but requiring specialized knowledge. The benchmark appears to have ~90% valid questions, with models struggling due to legitimate challenges rather than question errors.

## Key Challenges

### Persistent Difficulty Areas

Models consistently struggle with questions requiring:

1. **Specialized Procedural Knowledge**: Multi-step experimental procedures
2. **Non-standard Computation**: Problems requiring unusual mathematical approaches
3. **Domain-Specific Intuition**: Questions needing field-specific heuristics
4. **Integration Across Subfields**: Problems combining multiple specialized areas
5. **Organic Chemistry**: Particularly challenging for current AI systems

### Question Validity Analysis

Recent investigation of the most challenging questions revealed:

- Approximately 8% may have validity issues

- Most "impossible" questions are actually valid but require specialized knowledge

- Organic chemistry questions show highest difficulty-to-validity ratio

- 2.25 out of 6 examined hardest questions potentially invalid (per Epoch AI analysis)

## Applications and Impact

### Research Applications

GPQA Diamond serves several critical research purposes:

- **[Scalable Oversight](/index.php?title=Scalable_Oversight&action=edit&redlink=1)**: Testing methods for supervising superhuman AI

- **[Capability Evaluation](/index.php?title=Capability_Evaluation&action=edit&redlink=1)**: Measuring progress toward expert-level AI

- **[Safety Research](/index.php?title=Safety_Research&action=edit&redlink=1)**: Understanding AI limitations in high-stakes domains

- **[Alignment Research](/index.php?title=Alignment_Research&action=edit&redlink=1)**: Ensuring AI systems provide truthful information

### Practical Implications

#### Scientific Research

- Evaluating AI readiness for research assistance

- Identifying knowledge gaps in AI systems

- Benchmarking progress toward AI scientists

#### Education

- Testing AI tutoring capabilities at graduate level

- Developing advanced educational AI systems

- Understanding limits of AI in specialized education

#### Industry Applications

- Assessing AI for technical consulting

- Evaluating domain-specific AI assistants

- Benchmarking enterprise AI capabilities

## Limitations and Criticisms

### Format Limitations

- **Multiple Choice Format**: May not reflect real scientific reasoning

- **Static Questions**: Vulnerable to memorization over time

- **Limited Scope**: Only covers three scientific domains

- **English Only**: Language limitation

### Evaluation Concerns

- **Small Dataset Size**: 198 questions limits statistical power

- **Question Quality**: ~8% potentially problematic questions

- **Saturation Risk**: Approaching performance ceiling with 92.4% SOTA

- **Lack of Explanation Evaluation**: Only tests final answers

## Future Directions

### Proposed Improvements

Researchers have suggested several enhancements:

1. **Remove Multiple Choice**: Test free-form answer generation
2. **Skill-Based Classification**: Group questions by required competencies
3. **Dynamic Question Generation**: Create new questions automatically
4. **Research Assistant Tasks**: Test practical scientific work capabilities
5. **Multi-modal Questions**: Include diagrams, graphs, and equations

### Next Generation Benchmarks

Potential successors to GPQA Diamond might include:

- Interactive problem-solving tasks

- Real laboratory procedure simulations

- Literature review and synthesis tasks

- Novel hypothesis generation challenges

## Related Benchmarks

- **[MMLU](/wiki/mmlu)**: Broader knowledge benchmark including science

- **[ScienceQA](/index.php?title=ScienceQA&action=edit&redlink=1)**: Elementary to high school science questions

- **[PubMedQA](/index.php?title=PubMedQA&action=edit&redlink=1)**: Biomedical literature comprehension

- **[ChemBench](/index.php?title=ChemBench&action=edit&redlink=1)**: Chemistry-specific benchmark

- **[PhysicsBench](/index.php?title=PhysicsBench&action=edit&redlink=1)**: Physics problem-solving benchmark

- **[AIME](/wiki/aime)**: Mathematical reasoning benchmark

- **[ARC](/index.php?title=ARC&action=edit&redlink=1)**: Science reasoning challenge

## See Also

- [Scalable Oversight](/index.php?title=Scalable_Oversight&action=edit&redlink=1)

- [Expert-Level AI](/index.php?title=Expert-Level_AI&action=edit&redlink=1)

- [Scientific AI](/index.php?title=Scientific_AI&action=edit&redlink=1)

- [AI Safety Benchmarks](/index.php?title=AI_Safety_Benchmarks&action=edit&redlink=1)

- [Superhuman AI](/index.php?title=Superhuman_AI&action=edit&redlink=1)

- [Chain-of-Thought Reasoning](/index.php?title=Chain-of-Thought_Reasoning&action=edit&redlink=1)

- [AI Calibration](/index.php?title=AI_Calibration&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "gpqa_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "epoch_analysis" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "autopoiesis" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "klu" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "artificial_analysis" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "openreview" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "claude4" defined in `<references>` has group attribute "" which does not appear in prior text.