---
title: "MMMLU"
slug: "mmmlu"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Multilingual_Benchmarks"
  - "Knowledge_Benchmarks"
  - "2023_Benchmarks"
---**

| MMMLU |
| --- |
| Overview |
| Full name | Multilingual Massive Multitask Language Understanding |
| Abbreviation | Multilingual MMLU |
| Description | Multilingual evaluation frameworks based on the Massive Multitask Language Understanding benchmark, including translations and adaptations for 26+ languages |
| Release date | ~2023 |
| Latest version | Various |
| Benchmark updated | 2024 |
| Authors | [University of Oregon NLP group](/index.php?title=University_of_Oregon_NLP_group&action=edit&redlink=1), [Various research teams](/index.php?title=Various_research_teams&action=edit&redlink=1) |
| Organization | [University of Oregon](/index.php?title=University_of_Oregon&action=edit&redlink=1), [Multiple institutions](/index.php?title=Multiple_institutions&action=edit&redlink=1) |
| Technical Details |
| Type | [Knowledge Assessment](/index.php?title=Knowledge_Assessment&action=edit&redlink=1), [Multilingual Evaluation](/index.php?title=Multilingual_Evaluation&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple choice](/index.php?title=Multiple_choice&action=edit&redlink=1) |
| Number of tasks | Varies (MMLU: 15,908; MMLU-ProX: 11,829 per language) |
| Total examples | Varies by implementation |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Zero-shot](/index.php?title=Zero-shot&action=edit&redlink=1), [Few-shot](/index.php?title=Few-shot&action=edit&redlink=1) |
| Domains | [STEM](/index.php?title=STEM&action=edit&redlink=1), [Humanities](/index.php?title=Humanities&action=edit&redlink=1), [Social Sciences](/index.php?title=Social_Sciences&action=edit&redlink=1), [Professional](/index.php?title=Professional&action=edit&redlink=1) |
| Languages | 26-29 languages including English, Chinese, Spanish, French, German, Russian, Arabic, Hindi, and others |
| Performance |
| Human performance | 89.8% (domain experts on English MMLU) |
| Baseline | 25% (random chance) |
| SOTA score | ~88% (on English MMLU) |
| SOTA model | [Claude 3.5 Sonnet, GPT-4o, Llama 3.1 405B](/index.php?title=Claude_3.5_Sonnet,_GPT-4o,_Llama_3.1_405B&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | Partially (English version) |
| Resources |
| Paper | [(original MMLU) Paper](https://arxiv.org/abs/2009.03300) |
| GitHub | [Repository](https://github.com/nlp-uoregon/mlmm-evaluation)

 |
| Predecessor | [MMLU](/wiki/mmlu) |
| Successor | [MMLU-ProX](/index.php?title=MMLU-ProX&action=edit&redlink=1) |

Multilingual MMLU** refers to various multilingual adaptations and extensions of the [Measuring Massive Multitask Language Understanding](/index.php?title=Measuring_Massive_Multitask_Language_Understanding&action=edit&redlink=1) (MMLU) benchmark, designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' knowledge and reasoning capabilities across multiple languages and diverse subject areas. The most notable implementations include the mlmm-evaluation framework covering 26 languages and MMLU-ProX covering 29 languages, addressing the critical need for culturally and linguistically diverse AI assessment.

## Overview

Multilingual MMLU initiatives represent significant efforts to extend AI benchmarking beyond English, addressing the limitations of the original MMLU benchmark. While MMLU became the standard for evaluating language models' multitask capabilities with over 100 million downloads by 2024, its English-only format overlooked the linguistic and cultural diversity essential for global AI deployment.

### Key Implementations

#### mlmm-evaluation Framework

Developed by the [University of Oregon](/index.php?title=University_of_Oregon&action=edit&redlink=1) NLP group, this framework includes:

- 26 languages supported

- Three benchmark tasks: [ARC](/index.php?title=ARC&action=edit&redlink=1), [HellaSwag](/wiki/hellaswag), and MMLU

- Questions translated from English using [ChatGPT](/wiki/chatgpt)

- Part of the Okapi framework for multilingual instruction-tuned LLMs

#### MMLU-ProX

A more recent comprehensive benchmark featuring:

- 29 languages covered

- 11,829 identical questions per language

- Rigorous translation process using multiple LLMs

- Expert review for accuracy and cultural relevance

- Lite version with 658 questions per language available

### Background and Motivation

The original [MMLU](/wiki/mmlu) benchmark, released on September 7, 2020, by [Dan Hendrycks](/index.php?title=Dan_Hendrycks&action=edit&redlink=1) and colleagues, revolutionized AI evaluation by testing models across 57 subjects with 15,908 questions ranging from [STEM](/index.php?title=STEM&action=edit&redlink=1) fields to [humanities](/index.php?title=Humanities&action=edit&redlink=1). However, its English-only format created several limitations:

- **Language Bias**: Models optimized for English performance

- **Cultural Blindness**: Missing diverse cultural contexts and knowledge

- **Global Applicability**: Limited relevance for non-English applications

- **Fairness Concerns**: Inability to assess multilingual capabilities

These limitations motivated the development of multilingual versions to create more inclusive and comprehensive evaluation metrics.

## Technical Specifications

### Language Coverage

#### mlmm-evaluation Languages (26)

The framework supports: Russian, German, Chinese, French, Spanish, Italian, Dutch, Vietnamese, Indonesian, Arabic, Hungarian, Romanian, Danish, Slovak, Ukrainian, Catalan, Serbian, Croatian, Hindi, Bengali, Tamil, Nepali, Malayalam, Marathi, Telugu, and Kannada.

#### MMLU-ProX Languages (29)

Includes the above languages plus additional coverage for even broader evaluation.

### Language Distribution by Family

| Language Family | Example Languages | Script Type |
| --- | --- | --- |
| Indo-European | English, Spanish, French, German, Italian, Dutch, Russian, Ukrainian, Romanian, Danish, Slovak, Serbian, Croatian, Hindi, Bengali, Marathi, Nepali | Latin, Cyrillic, Devanagari |
| Sino-Tibetan | Chinese (Simplified/Traditional) | Chinese characters |
| Dravidian | Tamil, Telugu, Malayalam, Kannada | Various scripts |
| Austronesian | Indonesian, Malay | Latin |
| Afro-Asiatic | Arabic | Arabic script |
| Uralic | Hungarian | Latin |
| Austroasiatic | Vietnamese | Latin with diacritics |

### Subject Distribution

The benchmarks maintain the original MMLU's 57 subjects across four major categories:

| Category | Number of Subjects | Example Topics |
| --- | --- | --- |
| STEM | 18 | Mathematics, Physics, Chemistry, Biology, Computer Science, Engineering |
| Humanities | 14 | History, Philosophy, Literature, Law, Ethics |
| Social Sciences | 13 | Psychology, Sociology, Economics, Political Science, Geography |
| Other | 12 | Professional Medicine, Business, Nutrition, Marketing |

### Translation Methodology

#### mlmm-evaluation Approach

1. **Automated Translation**: Using [ChatGPT](/wiki/chatgpt) for initial translation
2. **Direct Translation**: Maintaining question structure and format
3. **Batch Processing**: Efficient translation of large question sets

#### MMLU-ProX Approach

1. **Multi-LLM Translation**: Multiple powerful LLMs for initial translation
2. **Expert Review**: Native speaker verification
3. **Cultural Adaptation**: Ensuring cultural relevance
4. **Terminology Consistency**: Standardized technical terms
5. **Quality Assurance**: Rigorous validation process

### Evaluation Metrics

| Metric | Description | Implementation |
| --- | --- | --- |
| Zero-shot Accuracy | Direct answer without examples | Standard evaluation |
| Few-shot Accuracy | Performance with 5 examples | Enhanced context |
| Cross-lingual Transfer | Performance correlation across languages | Language comparison |
| Performance Gap | Difference from English baseline | Fairness assessment |

## Performance Analysis

### Cross-Language Performance Patterns

Research reveals significant performance disparities:

| Language Category | Performance Gap | Key Factors |
| --- | --- | --- |
| High-resource languages | Minimal drop | Large training data, similar structure |
| Medium-resource languages | Moderate drop | Adequate training data |
| Low-resource languages | Up to 24.3% drop | Limited training data |

### Model Performance Comparison

Leading models show varying multilingual capabilities on English MMLU (2024):

| Model | English MMLU | Notes |
| --- | --- | --- |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | ~88% | Strong multilingual capabilities |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~88% | Consistent across languages |
| [Llama 3.1 405B](/index.php?title=Llama_3.1_405B&action=edit&redlink=1) | ~88% | Open-source leader |
| Earlier models | <70% | Significant multilingual gaps |

### Key Findings

#### Performance Disparities

- High-resource languages maintain near-English performance

- Low-resource languages show gaps up to 24.3%

- Script differences (for example Arabic, Chinese) impact performance

- Cultural context affects certain subject areas

#### Subject-Specific Variations

- STEM subjects show more consistent cross-lingual performance

- Humanities and social sciences show greater variation

- Culture-specific topics exhibit largest performance gaps

## Challenges and Limitations

### Translation Quality Issues

| Issue | Description | Impact | Mitigation |
| --- | --- | --- | --- |
| Semantic Drift | Meaning changes in translation | Accuracy reduction | Human verification |
| Cultural Concepts | Untranslatable terms | Question invalidity | Cultural adaptation |
| Technical Terms | Inconsistent terminology | Confusion | Standardized glossaries |
| Idiomatic Expressions | Loss of nuance | Comprehension issues | Contextual rewriting |

### Evaluation Challenges

- **Data Contamination**: Translated versions may appear in training data

- **Script Differences**: Comparing across writing systems

- **Cultural Bias**: Questions may favor certain cultural contexts

- **Resource Imbalance**: Unequal language representation in training

### Inherited MMLU Issues

Multilingual versions inherit problems from original MMLU:

- ~6.5% questions estimated to contain errors

- Data contamination risks

- Approaching saturation in English

- Static question set vulnerable to memorization

## Applications and Impact

### Research Applications

- **Cross-lingual Transfer Learning**: Understanding knowledge transfer mechanisms

- **Language Model Architecture**: Optimizing for multilingual performance

- **Cultural AI Studies**: Investigating cultural biases in AI systems

- **Low-resource Language Development**: Improving models for underserved languages

### Practical Applications

| Application | Use Case | Key Benefit |
| --- | --- | --- |
| Global Deployment | Multinational AI services | Fair performance assessment |
| Education Technology | Multilingual tutoring systems | Language-appropriate evaluation |
| Healthcare AI | Medical diagnosis systems | Culturally sensitive assessment |
| Legal Technology | International law applications | Jurisdiction-specific validation |

### Policy Implications

- **AI Governance**: Ensuring equitable AI performance globally

- **Language Rights**: Supporting linguistic diversity in AI

- **Digital Divide**: Addressing technology gaps across languages

- **International Standards**: Developing multilingual AI benchmarks

## Related Benchmarks

### Multilingual Benchmarks

- **[XGLUE](/index.php?title=XGLUE&action=edit&redlink=1)**: Cross-lingual benchmark suite

- **[XTREME](/index.php?title=XTREME&action=edit&redlink=1)**: Cross-lingual TRansfer Evaluation

- **[XQuAD](/index.php?title=XQuAD&action=edit&redlink=1)**: Cross-lingual Question Answering

- **[MLQA](/index.php?title=MLQA&action=edit&redlink=1)**: Multilingual Question Answering

- **[FLORES](/index.php?title=FLORES&action=edit&redlink=1)**: Machine translation benchmark

- **[MMLU-ProX](/index.php?title=MMLU-ProX&action=edit&redlink=1)**: Enhanced multilingual MMLU with 29 languages

### MMLU Variants

- **[MMLU](/wiki/mmlu)**: Original English-only version

- **[MMLU-Pro](/wiki/mmlu-pro)**: Enhanced difficulty with 10 answer choices

- **[MMLU-Redux](/index.php?title=MMLU-Redux&action=edit&redlink=1)**: Cleaned version addressing errors

- **[CMMLU](/index.php?title=CMMLU&action=edit&redlink=1)**: Chinese-specific MMLU adaptation

## Future Directions

### Proposed Improvements

1. **Native Content Creation**: Questions originally written in each language
2. **Cultural Validation**: Expert review by cultural specialists
3. **Dynamic Question Generation**: Preventing data contamination
4. **Multimodal Extensions**: Adding visual and audio components
5. **Code-switching Tests**: Evaluating multilingual mixing

### Research Opportunities

- **Zero-shot Cross-lingual Transfer**: Improving without multilingual training

- **Cultural Knowledge Graphs**: Building culture-specific knowledge bases

- **Adaptive Evaluation**: Language-specific difficulty adjustment

- **Fairness Metrics**: Developing equitable multilingual assessments

## See Also

- [Multilingual AI](/index.php?title=Multilingual_AI&action=edit&redlink=1)

- [Cross-lingual Transfer Learning](/index.php?title=Cross-lingual_Transfer_Learning&action=edit&redlink=1)

- [Language Model Evaluation](/index.php?title=Language_Model_Evaluation&action=edit&redlink=1)

- [Cultural AI](/index.php?title=Cultural_AI&action=edit&redlink=1)

- [MMLU](/wiki/mmlu)

- [MMLU-Pro](/wiki/mmlu-pro)

- [Low-resource Languages in AI](/index.php?title=Low-resource_Languages_in_AI&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "mmlu_original" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "wikipedia_mmlu" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mlmm_eval" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "mmlu_prox" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "huggingface_leaderboard" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "helm" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "klu_mmlu" defined in `<references>` has group attribute "" which does not appear in prior text.