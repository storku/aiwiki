---
title: "MGSM"
slug: "mgsm"
categories:
  - "AI_Benchmarks"
  - "Multilingual_Benchmarks"
  - "Mathematical_Reasoning_Benchmarks"
  - "2022_Benchmarks"
  - "Google_Research"
  - "Nearly_Saturated_Benchmarks"
---**

| MGSM |
| --- |
| Overview |
| Full name | Multilingual Grade School Math |
| Abbreviation | MGSM |
| Description | A multilingual benchmark evaluating mathematical reasoning across 10 typologically diverse languages using grade-school math problems |
| Release date | 2022-10-06 |
| Latest version | 1.0 |
| Benchmark updated | 2022-10 |
| Authors | [Freda Shi](/index.php?title=Freda_Shi&action=edit&redlink=1), [Mirac Suzgun](/index.php?title=Mirac_Suzgun&action=edit&redlink=1), [Markus Freitag](/index.php?title=Markus_Freitag&action=edit&redlink=1), [Nathanael Schärli](/index.php?title=Nathanael_Sch%C3%A4rli&action=edit&redlink=1), [And others](/index.php?title=And_others&action=edit&redlink=1) |
| Organization | [Google Research](/index.php?title=Google_Research&action=edit&redlink=1) |
| Technical Details |
| Type | [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1), [Multilingual Evaluation](/index.php?title=Multilingual_Evaluation&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Word problems requiring multi-step arithmetic](/index.php?title=Word_problems_requiring_multi-step_arithmetic&action=edit&redlink=1) |
| Number of tasks | 10 languages |
| Total examples | 2,500 (250 per language) |
| Evaluation metric | [Exact match accuracy](/index.php?title=Exact_match_accuracy&action=edit&redlink=1) |
| Domains | [Elementary mathematics](/index.php?title=Elementary_mathematics&action=edit&redlink=1), [Arithmetic word problems](/index.php?title=Arithmetic_word_problems&action=edit&redlink=1) |
| Languages | Spanish, French, German, Russian, Chinese, Japanese, Thai, Swahili, Bengali, Telugu |
| Performance |
| Human performance | Based on GSM8K validation |
| Baseline | Varies by language and model |
| SOTA score | 91.60% |
| SOTA model | [Claude 3.5 Sonnet, Meta Llama 3.1 405B](/index.php?title=Claude_3.5_Sonnet,_Meta_Llama_3.1_405B&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | Nearly |
| Resources |
| Website | [Official website](https://github.com/google-research/url-nlp) |
| Paper | [Paper](https://arxiv.org/abs/2210.03057) |
| GitHub | [Repository](https://github.com/google-research/url-nlp) |
| Dataset | [Download](https://huggingface.co/datasets/juletxara/mgsm) |
| License | CC-BY-SA 4.0 |
| Predecessor | [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) |

MGSM** (**Multilingual Grade School Math**) is a [benchmark](/wiki/benchmark) dataset designed to evaluate the [mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1) capabilities of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) across multiple languages. Released in October 2022 by [Google Research](/index.php?title=Google_Research&action=edit&redlink=1)[&#91;1&#93;](#cite_note-mgsm_paper-1), MGSM extends the popular [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) benchmark by manually translating 250 grade-school math problems into 10 typologically diverse languages. The benchmark specifically evaluates whether [chain-of-thought reasoning](/index.php?title=Chain-of-thought_reasoning&action=edit&redlink=1) capabilities transfer across languages, revealing that mathematical reasoning emerges as a universal capability in sufficiently large language models.

## Overview

MGSM addresses a critical gap in AI evaluation by extending mathematical reasoning assessment beyond English to include diverse languages from different linguistic families and writing systems. The benchmark consists of elementary-level arithmetic word problems that require multi-step reasoning to solve, making it an ideal test for evaluating whether models can perform complex cognitive tasks in languages beyond their primary training language. By maintaining consistent problem structure across all languages, MGSM enables direct comparison of reasoning capabilities across linguistic boundaries[&#91;1&#93;](#cite_note-mgsm_paper-1).

### Significance

The development of MGSM has several important implications for multilingual AI:

- **Universal Reasoning**: Demonstrates that mathematical reasoning transfers across languages

- **Inclusive Evaluation**: Includes underrepresented languages like Swahili, Bengali, and Telugu

- **Chain-of-Thought Testing**: Evaluates reasoning process quality across languages

- **Scaling Insights**: Shows that reasoning capabilities emerge with model scale regardless of language

- **Benchmark Standardization**: Provides consistent evaluation methodology across diverse languages

## Language Coverage

### Languages Included

MGSM covers 10 languages selected for typological diversity and global representation:

| Language | Code | Script | Language Family | Speakers (millions) | Resource Level |
| --- | --- | --- | --- | --- | --- |
| **Spanish** | es | Latin | Indo-European (Romance) | 559 | High |
| **French** | fr | Latin | Indo-European (Romance) | 280 | High |
| **German** | de | Latin | Indo-European (Germanic) | 132 | High |
| **Russian** | ru | Cyrillic | Indo-European (Slavic) | 258 | High |
| **Chinese** | zh | Chinese characters | Sino-Tibetan | 1,118 | High |
| **Japanese** | ja | Mixed (Kanji/Kana) | Japonic | 128 | High |
| **Thai** | th | Thai | Kra-Dai | 61 | Medium |
| **Swahili** | sw | Latin | Niger-Congo | 200 | Low |
| **Bengali** | bn | Bengali | Indo-European (Indo-Aryan) | 273 | Medium-Low |
| **Telugu** | te | Telugu | Dravidian | 96 | Low |

### Language Selection Rationale

The languages were chosen to represent:

- **Script Diversity**: Latin, Cyrillic, Chinese, Arabic-derived, and unique scripts

- **Typological Variety**: Different word orders, morphological systems, and syntactic structures

- **Resource Availability**: Mix of high-resource and low-resource languages

- **Global Coverage**: Languages from different continents and cultural contexts

## Dataset Structure

### Problem Characteristics

Each problem in MGSM follows the grade-school math format:

| Characteristic | Description | Example |
| --- | --- | --- |
| **Problem Type** | Multi-step arithmetic word problems | "John has 5 apples..." |
| **Operations Required** | Addition, subtraction, multiplication, division | 2-8 steps typical |
| **Answer Format** | Single numerical value | Integer or decimal |
| **Complexity Level** | Elementary school (grades 3-5) | Basic arithmetic |
| **Average Length** | 2-5 sentences | Context-dependent |

### Data Format

Each MGSM example contains:

```json
{

 "question": "Problem text in target language",
 "answer": "Step-by-step solution with reasoning",
 "answer_number": 42,
 "equation_solution": "(5 × 8) + 2 = 42"

}
```

### Translation Process

The translation methodology ensured quality and consistency[&#91;1&#93;](#cite_note-mgsm_paper-1):

1. **Professional Translation**: Native speakers with mathematical knowledge
2. **Cultural Adaptation**: Numbers and contexts adapted where necessary
3. **Verification**: Multiple reviewers checked each translation
4. **Consistency Checks**: Ensuring mathematical equivalence across languages

## Evaluation Methodology

### Standard Evaluation Protocol

MGSM employs a standardized evaluation approach:

| Component | Specification | Purpose |
| --- | --- | --- |
| **Metric** | Exact match accuracy | Clear, unambiguous scoring |
| **Temperature** | 0 (deterministic) | Reproducible results |
| **Few-shot Examples** | 8 per language | Consistent prompting |
| **Answer Extraction** | "Answer:" format | Standardized parsing |
| **Numerical Tolerance** | Exact integer match | Objective evaluation |

### Evaluation Modes

MGSM supports two primary evaluation modes:

| Mode | Description | Code | Use Case |
| --- | --- | --- | --- |
| **Direct Answer** | Model provides answer only | `mgsm_direct_*` | Baseline performance |
| **Chain-of-Thought** | Model shows reasoning steps | `mgsm_cot_native_*` | Reasoning evaluation |

## Performance Analysis

### Current Leaderboard (2025)

Top performing models on MGSM (average across all languages):

| Rank | Model | Average Accuracy | Best Language | Worst Language |
| --- | --- | --- | --- | --- |
| 1 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 91.60% | English/German | Bengali |
| 1 | [Meta Llama 3.1 405B](/index.php?title=Meta_Llama_3.1_405B&action=edit&redlink=1) | 91.60% | Spanish | Telugu |
| 3 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~90.5% | French | Swahili |
| 4 | [Gemini Ultra](/index.php?title=Gemini_Ultra&action=edit&redlink=1) | ~89% | Chinese | Bengali |
| 5 | [GPT-4](/wiki/gpt-4) | ~88% | German | Telugu |

### Language-Specific Performance

Performance varies significantly across languages[&#91;1&#93;](#cite_note-mgsm_paper-1):

| Language Category | Languages | Typical Performance | Performance Gap |
| --- | --- | --- | --- |
| **High-Resource** | Spanish, French, German | 85-92% | Baseline |
| **Asian Languages** | Chinese, Japanese, Thai | 80-88% | -5% to -10% |
| **Low-Resource** | Swahili, Bengali, Telugu | 70-85% | -10% to -20% |

### Chain-of-Thought Impact

The effect of chain-of-thought prompting on MGSM:

| Model Size | Direct Answer | With CoT | Improvement |
| --- | --- | --- | --- |
| Small (<10B) | 20-30% | 25-35% | +5% |
| Medium (10-50B) | 40-60% | 55-75% | +15% |
| Large (>50B) | 70-85% | 85-92% | +10-15% |

## Key Findings

### Emergent Multilingual Reasoning

Research using MGSM revealed several important insights[&#91;1&#93;](#cite_note-mgsm_paper-1):

1. **Scale-Dependent Emergence**: Mathematical reasoning in non-English languages emerges at similar model scales as English
2. **Universal Capabilities**: Sufficiently large models show consistent reasoning across all languages
3. **Transfer Learning**: Models trained primarily on English data can reason in other languages
4. **Resource Gap**: Performance gap between high and low-resource languages decreases with scale

### Cross-Lingual Consistency

Analysis of reasoning patterns across languages shows:

| Aspect | Finding | Implication |
| --- | --- | --- |
| **Solution Strategies** | Consistent across languages | Universal mathematical reasoning |
| **Error Patterns** | Similar mistakes in all languages | Common failure modes |
| **CoT Quality** | Varies by language resource level | Training data influence |
| **Numerical Accuracy** | Uniform across languages | Arithmetic is language-agnostic |

## Limitations and Challenges

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **Limited Scope** | Only 250 problems per language | Statistical significance |
| **Translation Bias** | Some cultural contexts don't translate | Reduced naturalness |
| **Elementary Level** | Grade-school problems only | Doesn't test advanced math |
| **Near Saturation** | Top models achieve >90% | Limited discrimination |

### Technical Challenges

- **Tokenization Differences**: Various scripts affect token efficiency

- **Number Representation**: Different numeral systems across languages

- **Cultural Context**: Some word problems assume Western contexts

- **Evaluation Consistency**: Ensuring fair comparison across languages

## Research Impact

### Influence on Multilingual AI

MGSM has significantly influenced multilingual AI research:

| Area | Impact | Development |
| --- | --- | --- |
| **Evaluation Standards** | Established multilingual reasoning benchmarks | Adoption in major evaluations |
| **Model Development** | Drove improvements in multilingual capabilities | Better cross-lingual transfer |
| **Low-Resource Languages** | Highlighted performance gaps | Targeted improvements |
| **Reasoning Research** | Showed universal reasoning emergence | Theoretical insights |

### Related Benchmarks

| Benchmark | Focus | Relation to MGSM |
| --- | --- | --- |
| [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) | English math reasoning | Parent dataset |
| **MGSM** | Multilingual math | Current benchmark |
| [MSVAMP](/index.php?title=MSVAMP&action=edit&redlink=1) | Multilingual variations | Complementary |
| [MathQA-ML](/index.php?title=MathQA-ML&action=edit&redlink=1) | Multilingual complex math | More advanced |

## Applications and Use Cases

### Practical Applications

Technologies evaluated on MGSM support:

- **Educational Technology**: Multilingual tutoring systems

- **Financial Services**: Cross-border calculation assistance

- **Scientific Computing**: International collaboration tools

- **Translation Services**: Mathematical document translation

## Future Directions

### Potential Extensions

1. **More Languages**: Expanding to 50+ languages
2. **Difficulty Levels**: Adding algebra and geometry
3. **Multimodal Problems**: Including diagrams and graphs
4. **Cultural Adaptation**: Region-specific problem contexts
5. **Dynamic Generation**: Procedurally generated problems

## Significance

MGSM has demonstrated that mathematical reasoning is a universal capability that emerges in large language models regardless of language, challenging assumptions about language-specific limitations in AI systems. By showing that models can perform complex reasoning in low-resource languages like Bengali and Telugu nearly as well as in high-resource languages, MGSM provides evidence that fundamental cognitive capabilities in AI transcend linguistic boundaries.

The benchmark's near-saturation with top models achieving over 90% accuracy suggests both the remarkable progress in multilingual AI and the need for more challenging multilingual reasoning benchmarks. MGSM remains valuable for evaluating new models and understanding how reasoning capabilities transfer across languages, particularly for underrepresented languages in AI research.

## See Also

- [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1)

- [Multilingual AI Evaluation](/index.php?title=Multilingual_AI_Evaluation&action=edit&redlink=1)

- [Mathematical Reasoning Benchmarks](/index.php?title=Mathematical_Reasoning_Benchmarks&action=edit&redlink=1)

- [Chain-of-Thought Prompting](/index.php?title=Chain-of-Thought_Prompting&action=edit&redlink=1)

- [Google Research](/index.php?title=Google_Research&action=edit&redlink=1)

- [Low-Resource Languages in AI](/index.php?title=Low-Resource_Languages_in_AI&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-mgsm_paper_1-0) [1.1](#cite_ref-mgsm_paper_1-1) [1.2](#cite_ref-mgsm_paper_1-2) [1.3](#cite_ref-mgsm_paper_1-3) [1.4](#cite_ref-mgsm_paper_1-4) Shi, F., Suzgun, M., Freitag, M., Schärli, N., Li, L. H., Khandelwal, A., Levy, I., Ding, A. S., Brahma, S., Wei, J., Bosma, M., Zhao, V., Huang, Y., & Zhou, D. (2022). "Language Models are Multilingual Chain-of-Thought Reasoners". arXiv:2210.03057. Retrieved from [https://arxiv.org/abs/2210.03057](https://arxiv.org/abs/2210.03057)