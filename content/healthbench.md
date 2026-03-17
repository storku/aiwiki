---
title: "HealthBench"
slug: "healthbench"
categories:
  - "AI_Benchmarks"
  - "Healthcare_AI"
  - "Medical_Benchmarks"
  - "2025_Benchmarks"
  - "OpenAI"
  - "Multilingual_Benchmarks"
---**

| HealthBench |
| --- |
| Overview |
| Full name | HealthBench |
| Abbreviation | HealthBench |
| Description | A comprehensive evaluation benchmark for AI in healthcare that assesses models in realistic medical scenarios and workflows |
| Release date | 2025-05-12 |
| Latest version | 1.0 |
| Benchmark updated | 2025-05 |
| Authors | [Karan Singhal and OpenAI Health AI Team](/index.php?title=Karan_Singhal_and_OpenAI_Health_AI_Team&action=edit&redlink=1) |
| Organization | [OpenAI](/wiki/openai) |
| Technical Details |
| Type | [Healthcare AI](/index.php?title=Healthcare_AI&action=edit&redlink=1), [Medical Question Answering](/index.php?title=Medical_Question_Answering&action=edit&redlink=1), [Clinical Decision Support](/index.php?title=Clinical_Decision_Support&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Conversational](/index.php?title=Conversational&action=edit&redlink=1) |
| Task format | [Multi-turn dialogue, Clinical scenarios](/index.php?title=Multi-turn_dialogue,_Clinical_scenarios&action=edit&redlink=1) |
| Number of tasks | 5,000 |
| Total examples | 5,000 health conversations across 26 specialties |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Communication Quality](/index.php?title=Communication_Quality&action=edit&redlink=1), [Completeness](/index.php?title=Completeness&action=edit&redlink=1), [Context-Seeking](/index.php?title=Context-Seeking&action=edit&redlink=1), [Instruction Following](/index.php?title=Instruction_Following&action=edit&redlink=1), [Safety](/index.php?title=Safety&action=edit&redlink=1) |
| Domains | [Emergency Medicine](/index.php?title=Emergency_Medicine&action=edit&redlink=1), [Cardiology](/index.php?title=Cardiology&action=edit&redlink=1), [Pediatrics](/index.php?title=Pediatrics&action=edit&redlink=1), [Global Health](/index.php?title=Global_Health&action=edit&redlink=1), [Primary Care](/index.php?title=Primary_Care&action=edit&redlink=1), [And 21 other medical specialties](/index.php?title=And_21_other_medical_specialties&action=edit&redlink=1) |
| Languages | 49 languages including English, Spanish, French, Amharic, Nepali |
| Performance |
| Human performance | Expert physician baseline |
| Baseline | 0.16 (GPT-3.5 Turbo) |
| SOTA score | 0.60 |
| SOTA model | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) |
| SOTA date | 2025-05 |
| Saturated | No |
| Resources |
| Website | [Official website](https://openai.com/index/healthbench/) |
| Paper | [Paper](https://cdn.openai.com/pdf/bd7a39d5-9e9f-47b3-903c-8b847ca650c7/healthbench_paper.pdf) |
| GitHub | [Available on GitHub Repository] |
| Dataset | [Available through OpenAI Download] |
| License | CC BY-NC-4.0

 |

HealthBench** is a comprehensive [artificial intelligence](/wiki/artificial_intelligence) evaluation [benchmark](/wiki/benchmark) for healthcare applications, designed to assess [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) in realistic medical scenarios and clinical workflows. Released on May 12, 2025, by [OpenAI](/wiki/openai)[&#91;1&#93;](#cite_note-healthbench_openai-1), HealthBench represents a significant advancement in healthcare AI evaluation, moving beyond traditional medical exam questions to capture the complexity and nuance of real-world clinical interactions. The benchmark was developed in collaboration with 262 physicians from 60 countries, creating an unprecedented scale of medical expertise validation in AI evaluation[&#91;2&#93;](#cite_note-healthbench_paper-2).

## Overview

HealthBench addresses a critical gap in healthcare AI evaluation by providing a shared standard for assessing model performance and safety in health contexts. Unlike traditional medical [question-answering](/index.php?title=Question-answering&action=edit&redlink=1) benchmarks that rely on exam-style questions, HealthBench evaluates models through 5,000 realistic health conversations spanning 26 medical specialties and 49 languages. The benchmark employs 48,562 unique physician-created rubric criteria to assess multiple dimensions of performance including clinical accuracy, communication quality, completeness, context-seeking ability, instruction following, and safety[&#91;2&#93;](#cite_note-healthbench_paper-2).

### Significance

The development of HealthBench marks OpenAI's first major healthcare AI initiative and establishes a new standard for evaluating AI systems in medical contexts. The benchmark is particularly significant for several reasons:

- **Realistic Scenarios**: Captures complex, multi-turn clinical conversations rather than isolated questions

- **Global Perspective**: Includes 49 languages and diverse cultural health contexts

- **Safety Focus**: Explicitly evaluates the ability to avoid harmful medical advice

- **Physician Validation**: Unprecedented involvement of 262 physicians from 60 countries

- **Comprehensive Coverage**: Spans 26 medical specialties from emergency medicine to global health

## Development and Methodology

### Physician Collaboration

HealthBench was developed through extensive collaboration with medical professionals. The development process involved:

| Contributor Type | Number | Role |
| --- | --- | --- |
| Core Physician Contributors | 262 | Created scenarios, rubrics, and expert responses |
| Countries Represented | 60 | Provided diverse cultural and healthcare system perspectives |
| Medical Specialties | 26 | Ensured comprehensive clinical coverage |
| Additional Reviewers | 250+ | Validated and refined evaluation criteria |

### Conversation Design

The benchmark's 5,000 health conversations were carefully designed to reflect real-world clinical interactions[&#91;1&#93;](#cite_note-healthbench_openai-1):

- **Multi-turn Structure**: Average of 2.6 turns per conversation (58.3% single-turn, remainder multi-turn)

- **Scenario Types**: Patient-provider interactions, clinical decision support, emergency situations, routine care

- **Complexity Levels**: From straightforward inquiries to complex differential diagnoses

- **Cultural Sensitivity**: Scenarios adapted for different healthcare systems and cultural contexts

## Dataset Structure

### Medical Specialties Coverage

HealthBench covers 26 medical specialties, ensuring comprehensive evaluation across different clinical domains:

| Category | Specialties Included |
| --- | --- |
| Primary Care | Family Medicine, Internal Medicine, Pediatrics |
| Specialized Medicine | Cardiology, Neurology, Oncology, Endocrinology |
| Surgical Specialties | General Surgery, Orthopedics, Neurosurgery |
| Emergency Services | Emergency Medicine, Critical Care, Trauma |
| Mental Health | Psychiatry, Psychology, Addiction Medicine |
| Global Health | Tropical Medicine, Public Health, Epidemiology |
| Other Specialties | Radiology, Pathology, Anesthesiology, and more |

### Thematic Categories

The benchmark organizes conversations into seven key themes[&#91;2&#93;](#cite_note-healthbench_paper-2):

| Theme | Percentage | Description |
| --- | --- | --- |
| Global Health | 21.9% | Healthcare in resource-limited settings, tropical diseases |
| Handling Uncertainty | 21.4% | Appropriate hedging, acknowledging limitations |
| Emergency Referrals | 15.7% | Recognizing urgent conditions requiring immediate care |
| Context-Seeking | 12.3% | Requesting necessary information for diagnosis |
| Patient Communication | 11.8% | Clear, empathetic explanations for patients |
| Health Data Tasks | 9.2% | Interpreting lab results, imaging, clinical data |
| Expertise-Tailored | 7.7% | Adapting communication for different audiences |

## Evaluation Framework

### Rubric-Based Assessment

HealthBench employs a sophisticated rubric-based evaluation system:

1. **Custom Criteria**: Each conversation has physician-created evaluation criteria
2. **Weighted Scoring**: Criteria weighted by clinical importance
3. **Multi-dimensional**: Assesses six key dimensions of performance
4. **Total Criteria**: 48,562 unique evaluation points across all conversations

### Evaluation Dimensions

| Dimension | Description | Weight |
| --- | --- | --- |
| **Accuracy** | Clinical correctness of medical information | High |
| **Communication Quality** | Clarity, appropriateness, and empathy in responses | High |
| **Completeness** | Thoroughness in addressing all relevant aspects | Medium |
| **Context-Seeking** | Ability to request necessary additional information | Medium |
| **Instruction Following** | Adherence to specific requirements and constraints | Medium |
| **Safety** | Avoiding potentially harmful recommendations | Critical |

### Evaluation Process

The evaluation methodology uses [GPT-4.1](/index.php?title=GPT-4.1&action=edit&redlink=1) as an automated evaluator[&#91;1&#93;](#cite_note-healthbench_openai-1):

1. **Response Generation**: Model generates response to conversation prompt
2. **Criteria Application**: GPT-4.1 evaluates response against physician-created rubric
3. **Weighted Scoring**: Scores weighted according to clinical importance
4. **Aggregation**: Individual criteria scores combined for overall performance metric

## Current Performance

### Model Leaderboard (May 2025)

| Rank | Model | Score | Notable Strengths | Limitations |
| --- | --- | --- | --- | --- |
| 1 | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) | 0.60 | Comprehensive responses, safety awareness | Computational cost |
| 2 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | ~0.55 | Strong clinical reasoning | Variable across specialties |
| 3 | [Grok 3](/index.php?title=Grok_3&action=edit&redlink=1) | ~0.54 | Good general knowledge | Limited context-seeking |
| 4 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | ~0.48 | Clear communication | Lower clinical accuracy |
| 5 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~0.42 | Fast responses | 15.8% error rate |
| Baseline | [GPT-3.5 Turbo](/index.php?title=GPT-3.5_Turbo&action=edit&redlink=1) | 0.16 | Basic functionality | Significant limitations |

### Performance Trends

Recent developments in healthcare AI performance on HealthBench:

- **28% Improvement**: OpenAI's frontier models improved by 28% in recent months

- **Human Parity**: For April 2025 models (o3 and GPT-4.1), physicians could no longer improve upon AI responses when given reference answers

- **Rapid Progress**: Significant performance gains across all major model families

## Key Findings and Insights

### Model Capabilities

Analysis of model performance reveals several important patterns[&#91;2&#93;](#cite_note-healthbench_paper-2):

| Capability | Best Performers | Key Challenges |
| --- | --- | --- |
| Clinical Accuracy | o3, Gemini 2.5 Pro | Rare conditions, complex cases |
| Safety Awareness | o3, GPT-4.1 | Recognizing contraindications |
| Communication | Claude models | Technical vs. lay language balance |
| Context-Seeking | o3 | Knowing when to request information |
| Multilingual | Gemini 2.5 Pro | Low-resource languages |

### Language Performance

HealthBench evaluates models across 49 languages, revealing significant disparities:

- **High-Resource Languages**: English, Spanish, French show best performance

- **Medium-Resource**: Arabic, Chinese, Hindi show moderate performance

- **Low-Resource**: Amharic, Nepali, Swahili show significant performance gaps

- **Code-Switching**: Models struggle with mixed-language conversations

## Impact and Reception

### Expert Endorsements

The benchmark has received significant recognition from the medical and AI communities:

- **Nigam Shah, Ph.D.** ([Stanford Health Care](/index.php?title=Stanford_Health_Care&action=edit&redlink=1)): Described HealthBench as "unprecedented" in scale and "directionally aligned" with academic research[&#91;1&#93;](#cite_note-healthbench_openai-1)

- **Medical Community**: Praised for moving beyond saturated QA benchmarks

- **AI Researchers**: Recognized as establishing new standards for healthcare AI evaluation

### Research Applications

HealthBench has already influenced several research directions:

1. **On-Device Healthcare AI**: Stanford researchers adapted HealthBench for evaluating lightweight models
2. **Multilingual Medical AI**: Focus on improving performance in underserved languages
3. **Safety Research**: New methods for detecting and preventing harmful medical advice
4. **Clinical Workflow Integration**: Studies on practical deployment in healthcare settings

## Limitations and Future Directions

### Current Limitations

Despite its comprehensive nature, HealthBench has several acknowledged limitations:

| Limitation | Description | Future Work |
| --- | --- | --- |
| Text-Only | Currently limited to conversational text | Multimodal extensions planned |
| Automated Evaluation | Relies on GPT-4.1 for scoring | Human evaluation studies ongoing |
| Static Scenarios | Fixed set of conversations | Dynamic scenario generation considered |
| Western Bias | Despite diversity, some Western medical bias | Expanding global representation |

### Future Extensions

Planned improvements and extensions to HealthBench include:

- **Multimodal Capabilities**: Integration of medical imaging, lab results, and clinical data

- **Real-Time Updates**: Dynamic scenario generation based on emerging health issues

- **Specialized Versions**: Domain-specific variants for radiology, pathology, etc.

- **Clinical Validation**: Prospective studies in real healthcare settings

## Technical Implementation

### Access and Usage

HealthBench is available under the [CC BY-NC-4.0](/index.php?title=CC_BY-NC-4.0&action=edit&redlink=1) license, allowing non-commercial use with attribution[&#91;1&#93;](#cite_note-healthbench_openai-1):

```python

1. Example usage of HealthBench evaluation

from healthbench import HealthBenchEvaluator

evaluator = HealthBenchEvaluator()
results = evaluator.evaluate(

   model=your_model,
   conversations=healthbench_dataset,
   metrics=['accuracy', 'safety', 'communication']

)

print(f"Overall Score: {results['overall_score']}")
print(f"Safety Score: {results['safety_score']}")
```

### Dataset Format

Each conversation in HealthBench follows a structured format:

```json
{

 "conversation_id": "HB_001234",
 "specialty": "Emergency Medicine",
 "languages": ["English"],
 "turns": [
   {
     "role": "patient",
     "content": "I've had severe chest pain for 2 hours..."
   },
   {
     "role": "assistant",
     "content": "..."
   }
 ],
 "rubric": {
   "criteria": [...],
   "weights": [...],
   "safety_critical": [...]
 }

}
```

## Significance

HealthBench represents a watershed moment in healthcare AI evaluation, establishing rigorous standards for assessing AI systems in medical contexts. By combining unprecedented physician involvement, realistic scenarios, comprehensive coverage, and sophisticated evaluation methodology, it provides the foundation for developing safer, more effective healthcare AI systems. The benchmark's emphasis on global health, multilingual support, and safety makes it particularly valuable for ensuring AI benefits all populations equitably.

As AI systems approach and potentially exceed human performance on HealthBench, the benchmark serves as both a measure of progress and a guide for responsible development. Its open availability and transparent methodology enable researchers worldwide to contribute to advancing healthcare AI while maintaining high standards for safety and efficacy.

## See Also

- [Medical AI Benchmarks](/index.php?title=Medical_AI_Benchmarks&action=edit&redlink=1)

- [OpenAI](/wiki/openai)

- [Healthcare AI](/index.php?title=Healthcare_AI&action=edit&redlink=1)

- [Clinical Decision Support Systems](/index.php?title=Clinical_Decision_Support_Systems&action=edit&redlink=1)

- [Multilingual NLP](/index.php?title=Multilingual_NLP&action=edit&redlink=1)

- [AI Safety in Healthcare](/index.php?title=AI_Safety_in_Healthcare&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-healthbench_openai_1-0) [1.1](#cite_ref-healthbench_openai_1-1) [1.2](#cite_ref-healthbench_openai_1-2) [1.3](#cite_ref-healthbench_openai_1-3) [1.4](#cite_ref-healthbench_openai_1-4) OpenAI. (2025). "Introducing HealthBench: Evaluating AI for health". Retrieved from [https://openai.com/index/healthbench/](https://openai.com/index/healthbench/)

2. ↑ [2.0](#cite_ref-healthbench_paper_2-0) [2.1](#cite_ref-healthbench_paper_2-1) [2.2](#cite_ref-healthbench_paper_2-2) [2.3](#cite_ref-healthbench_paper_2-3) Singhal, K., et al. (2025). "HealthBench: A Comprehensive Evaluation Framework for AI in Healthcare". OpenAI. Retrieved from [https://cdn.openai.com/pdf/bd7a39d5-9e9f-47b3-903c-8b847ca650c7/healthbench_paper.pdf](https://cdn.openai.com/pdf/bd7a39d5-9e9f-47b3-903c-8b847ca650c7/healthbench_paper.pdf)