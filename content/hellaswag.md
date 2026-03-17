---
title: "HellaSwag"
slug: "hellaswag"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Commonsense_Reasoning_Benchmarks"
  - "Natural_Language_Processing_Benchmarks"
  - "2019_Benchmarks"
  - "Allen_Institute_for_AI"
  - "Adversarial_Benchmarks"
---**

| HellaSwag |
| --- |
| Overview |
| Full name | Harder Endings, Longer contexts, and Low-shot Activities for Situations With Adversarial Generations |
| Abbreviation | HellaSwag |
| Description | A challenging commonsense reasoning benchmark using adversarial filtering to test physical understanding in language models |
| Release date | 2019-05-19 |
| Latest version | 1.0 |
| Benchmark updated | 2019 |
| Authors | [Rowan Zellers](/index.php?title=Rowan_Zellers&action=edit&redlink=1), [Ari Holtzman](/index.php?title=Ari_Holtzman&action=edit&redlink=1), [Yonatan Bisk](/index.php?title=Yonatan_Bisk&action=edit&redlink=1), [Ali Farhadi](/index.php?title=Ali_Farhadi&action=edit&redlink=1), [Yejin Choi](/index.php?title=Yejin_Choi&action=edit&redlink=1) |
| Organization | [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1), [University of Washington](/index.php?title=University_of_Washington&action=edit&redlink=1), [Carnegie Mellon University](/index.php?title=Carnegie_Mellon_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Commonsense Reasoning](/index.php?title=Commonsense_Reasoning&action=edit&redlink=1), [Natural Language Inference](/index.php?title=Natural_Language_Inference&action=edit&redlink=1), [Sentence Completion](/index.php?title=Sentence_Completion&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple-choice sentence completion](/index.php?title=Multiple-choice_sentence_completion&action=edit&redlink=1) |
| Number of tasks | 59,950 |
| Total examples | 59,950 questions (39,905 train, 10,042 val, 10,003 test) |
| Evaluation metric | [Accuracy](/wiki/accuracy) |
| Domains | [ActivityNet](/index.php?title=ActivityNet&action=edit&redlink=1), [WikiHow](/index.php?title=WikiHow&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 95.6% |
| Baseline | <48% (BERT-Large, 2019)
Property "Baseline score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA score | 95.3% |
| SOTA model | [GPT-4 (10-shot)](/index.php?title=GPT-4_(10-shot)&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | Nearly (GPT-4 matches human performance) |
| Resources |
| Website | [Official website](https://rowanzellers.com/hellaswag/) |
| Paper | [Paper](https://arxiv.org/abs/1905.07830) |
| GitHub | [Repository](https://github.com/rowanz/hellaswag) |
| Dataset | [Download](https://huggingface.co/datasets/Rowan/hellaswag) |
| License | MIT |
| Predecessor | [SWAG](/index.php?title=SWAG&action=edit&redlink=1) |
| Successor | [HellaSwag-Pro](/index.php?title=HellaSwag-Pro&action=edit&redlink=1) |

HellaSwag** (**Harder Endings, Longer contexts, and Low-shot Activities for Situations With Adversarial Generations**) is a challenging [commonsense reasoning](/index.php?title=Commonsense_reasoning&action=edit&redlink=1) benchmark designed to evaluate [language models](/index.php?title=Language_models&action=edit&redlink=1)' understanding of physical situations and everyday activities. Created by researchers from the [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1), [University of Washington](/index.php?title=University_of_Washington&action=edit&redlink=1), and [Carnegie Mellon University](/index.php?title=Carnegie_Mellon_University&action=edit&redlink=1) and published at ACL 2019[&#91;1&#93;](#cite_note-hellaswag_paper-1), HellaSwag uses a novel [adversarial filtering](/index.php?title=Adversarial_filtering&action=edit&redlink=1) technique to create sentence completion tasks that are trivial for humans (95.6% accuracy) but initially proved extremely challenging for state-of-the-art models (<48% accuracy). The benchmark has become a standard evaluation for measuring progress in [physical commonsense](/index.php?title=Physical_commonsense&action=edit&redlink=1) understanding, with modern models like [GPT-4](/wiki/gpt-4) finally achieving human-level performance.

## Overview

HellaSwag represents a significant advancement in evaluating true commonsense understanding in AI systems. Unlike benchmarks that can be solved through pattern matching or memorization, HellaSwag specifically targets the "Goldilocks zone" of complexity, generating wrong answers that are superficially plausible and contain expected words but violate physical commonsense in ways obvious to humans[&#91;2&#93;](#cite_note-hellaswag_huggingface-2). This approach revealed that models achieving impressive performance on other benchmarks fundamentally lacked understanding of basic physical interactions and causal relationships.

### The Commonsense Challenge

HellaSwag addresses a critical question in AI: Can machines truly understand and reason about the physical world, or do they merely memorize statistical patterns? The benchmark focuses on:

- **Physical causality**: Understanding cause-and-effect in real-world scenarios

- **Temporal reasoning**: Predicting what happens next in sequences of events

- **Activity understanding**: Comprehending how everyday tasks unfold

- **Contextual coherence**: Maintaining logical consistency across sentences

## Adversarial Filtering Methodology

### The Creation Process

HellaSwag's key innovation lies in its sophisticated adversarial filtering (AF) technique[&#91;1&#93;](#cite_note-hellaswag_paper-1):

| Stage | Process | Purpose |
| --- | --- | --- |
| **1. Generation** | GPT generates candidate wrong answers | Create plausible-sounding distractors |
| **2. Discrimination** | BERT-Large filters easy-to-detect options | Remove obvious wrong answers |
| **3. Iteration** | Multiple rounds of generation and filtering | Increase difficulty progressively |
| **4. Human Validation** | Crowd workers evaluate final options | Ensure human solvability |
| **5. Selection** | Top 59,950 most challenging examples retained | Create final dataset |

### The Goldilocks Zone

The adversarial filtering targets a specific difficulty profile:

| Characteristic | Human Perception | Model Perception |
| --- | --- | --- |
| **Grammaticality** | Correct | Correct |
| **Vocabulary** | Appropriate | Appropriate |
| **Surface plausibility** | Somewhat believable | Very believable |
| **Physical coherence** | Obviously wrong | Unclear |
| **Causal logic** | Violated | Not detected |

## Dataset Structure

### Composition and Sources

HellaSwag draws from two primary sources to ensure diversity:

| Source | Examples | Domain | Difficulty for Models |
| --- | --- | --- | --- |
| **ActivityNet Captions** | ~25,000 | Video descriptions | Moderate |
| **WikiHow** | ~45,000 | How-to articles | Very Hard |
| **Total** | 59,950 | Mixed | Challenging |

### Data Splits

| Split | Size | Purpose | Evaluation Type |
| --- | --- | --- | --- |
| **Training** | 39,905 | Model training | Standard |
| **Validation** | 10,042 | Hyperparameter tuning | In-domain & out-of-domain |
| **Test** | 10,003 | Final evaluation | In-domain & out-of-domain |

### Task Format

Each HellaSwag example consists of:

```
{

 "activity_label": "Making a sandwich",
 "context": "A person takes two slices of bread from a loaf. They open a jar of peanut butter.",
 "endings": [
   "They spread peanut butter on one slice.",  // Correct
   "They put the jar in the refrigerator and walk away.",  // Adversarial
   "They start cutting the bread into small pieces.",  // Adversarial
   "They throw the bread in the trash."  // Adversarial
 ],
 "label": 0

}
```

## Performance Evolution

### Historical Performance (2019)

At release, HellaSwag revealed a massive performance gap:

| Model | Accuracy | Gap to Human |
| --- | --- | --- |
| Humans | 95.6% | - |
| BERT-Large | 47.3% | 48.3% |
| GPT (original) | 41.7% | 53.9% |
| LSTM + ELMo | 38.0% | 57.6% |
| Random Baseline | 25.0% | 70.6% |

### Current Performance (2024-2025)

Modern models have largely closed the gap:

| Model | Setting | Accuracy | Year |
| --- | --- | --- | --- |
| [GPT-4](/wiki/gpt-4) | 10-shot | 95.3% | 2024 |
| Humans | - | 95.6% | - |
| [Claude-3 Opus](/index.php?title=Claude-3_Opus&action=edit&redlink=1) | Few-shot | ~93% | 2024 |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | Few-shot | 88-90% | 2024 |
| [GPT-3.5](/index.php?title=GPT-3.5&action=edit&redlink=1) | 10-shot | 85.5% | 2023 |
| [Falcon-40B](/index.php?title=Falcon-40B&action=edit&redlink=1) | Fine-tuned | 85.3% | 2023 |
| [LLaMA-2-70B](/index.php?title=LLaMA-2-70B&action=edit&redlink=1) | Fine-tuned | ~82% | 2023 |

## Comparison with SWAG

### Evolution from SWAG to HellaSwag

HellaSwag builds upon and improves the earlier SWAG benchmark:

| Aspect | SWAG | HellaSwag |
| --- | --- | --- |
| **Size** | 113,000 examples | 70,000 examples |
| **Generation Model** | Simple LM | GPT |
| **Filtering Models** | Basic classifiers | BERT-Large ensemble |
| **Human Accuracy** | 88% | 95.6% |
| **Initial SOTA** | ~86% | <48% |
| **Difficulty** | Moderate | High |
| **Focus** | General situations | Physical commonsense |

### Cross-Training Analysis

Experiments revealed the increased difficulty of HellaSwag[&#91;1&#93;](#cite_note-hellaswag_paper-1):

| Training | Evaluation | Performance Drop |
| --- | --- | --- |
| SWAG | HellaSwag | -12% |
| HellaSwag | SWAG | -15% |
| Joint training | Both | Best overall |

## Key Findings and Insights

### Domain-Specific Analysis

Performance varies significantly across domains:

| Domain | Human Accuracy | BERT-Large (2019) | Difficulty Factor |
| --- | --- | --- | --- |
| ActivityNet | 94.1% | 53.3% | Moderate |
| WikiHow | 96.5% | 45.0% | Very High |
| Out-of-domain | 95.2% | 35.6% | Extreme |

### Error Analysis

Common failure modes in early models included:

1. **Temporal confusion**: Mixing up order of events
2. **Physical impossibilities**: Suggesting actions that violate physics
3. **Context ignorance**: Completions that ignore established context
4. **Causal breaks**: Missing cause-effect relationships
5. **Object permanence**: Forgetting about mentioned objects

## Impact on NLP Research

### Methodological Contributions

HellaSwag introduced several influential concepts:

| Contribution | Description | Adoption |
| --- | --- | --- |
| **Adversarial Filtering** | Using models to create hard examples | Widely adopted |
| **Human-in-the-loop validation** | Ensuring human solvability | Standard practice |
| **Goldilocks complexity** | Targeting optimal difficulty | Design principle |
| **Physical commonsense focus** | Emphasizing real-world understanding | Research direction |

### Spawned Research

HellaSwag has inspired numerous follow-up works:

- **HellaSwag-Pro (2024)**: Bilingual extension with 11,200 cases

- **GoldenSwag**: Corrected subset addressing validity issues

- **Physical reasoning benchmarks**: PIGLeT, PIQA, and others

- **Adversarial dataset creation**: Methodology applied across domains

## Limitations and Criticisms

### Identified Issues

Recent research has identified several limitations[&#91;3&#93;](#cite_note-hellaswag_deepgram-3):

| Issue | Description | Impact |
| --- | --- | --- |
| **Grammatical errors** | Some examples contain typos | Affects 5-10% of data |
| **Multiple valid answers** | Some questions have >1 correct option | Evaluation ambiguity |
| **Context ambiguity** | Unclear or incomplete contexts | Interpretation variance |
| **Construct validity** | May not fully capture commonsense | Theoretical concern |

### Saturation Concerns

With GPT-4 achieving near-human performance, questions arise about:

1. **Benchmark saturation**: Is HellaSwag still useful for evaluation?
2. **True understanding**: Do high scores indicate genuine commonsense?
3. **Generalization**: Performance on real-world tasks vs. benchmark
4. **Need for evolution**: Requirements for next-generation benchmarks

## Technical Implementation

### Using HellaSwag

```python
from datasets import load_dataset

1. Load HellaSwag dataset

dataset = load_dataset("Rowan/hellaswag")

1. Access splits

train_data = dataset['train']
val_data = dataset['validation']
test_data = dataset['test']

1. Example evaluation

def evaluate_model(model, data):

   correct = 0
   for example in data:
       context = example['ctx']
       endings = example['endings']
       label = example['label']
       
       # Model predicts best ending
       prediction = model.predict(context, endings)
       
       if prediction == label:
           correct += 1
   
   accuracy = correct / len(data)
   return accuracy

```

### Evaluation Protocols

| Protocol | Description | Use Case |
| --- | --- | --- |
| **Zero-shot** | No training examples | Test true generalization |
| **Few-shot** | 1-10 examples | Standard evaluation |
| **Fine-tuned** | Full training set | Maximum performance |
| **Out-of-domain** | Held-out categories | Generalization testing |

## Future Directions

### Evolution and Extensions

| Direction | Description | Status |
| --- | --- | --- |
| **Multilingual versions** | Extending beyond English | In progress (HellaSwag-Pro) |
| **Harder adversarial filtering** | More sophisticated generation | Research ongoing |
| **Multimodal integration** | Adding visual context | Proposed |
| **Dynamic updating** | Continuous difficulty adjustment | Conceptual |

## Significance

HellaSwag has played a crucial role in advancing our understanding of commonsense reasoning in AI systems. By revealing the gap between surface-level language proficiency and genuine physical understanding, it pushed the field toward developing models with deeper comprehension capabilities. The benchmark's adversarial filtering methodology has become a standard approach for creating challenging evaluations, influencing dataset design across NLP.

While modern models have largely conquered HellaSwag, achieving human-level performance, the benchmark's legacy continues through its methodological contributions and the research directions it inspired. The journey from <48% to >95% accuracy represents not just numerical progress but fundamental improvements in how language models understand and reason about the physical world, a capability essential for AI systems that interact with real-world environments.

## See Also

- [SWAG](/index.php?title=SWAG&action=edit&redlink=1)

- [Commonsense Reasoning](/index.php?title=Commonsense_Reasoning&action=edit&redlink=1)

- [Adversarial Filtering](/index.php?title=Adversarial_Filtering&action=edit&redlink=1)

- [Allen Institute for AI](/index.php?title=Allen_Institute_for_AI&action=edit&redlink=1)

- [Physical Commonsense](/index.php?title=Physical_Commonsense&action=edit&redlink=1)

- [Natural Language Inference](/index.php?title=Natural_Language_Inference&action=edit&redlink=1)

- [Benchmark Saturation](/index.php?title=Benchmark_Saturation&action=edit&redlink=1)

- [GPT-4](/wiki/gpt-4)

## References

1. ↑ [1.0](#cite_ref-hellaswag_paper_1-0) [1.1](#cite_ref-hellaswag_paper_1-1) [1.2](#cite_ref-hellaswag_paper_1-2) Zellers, R., Holtzman, A., Bisk, Y., Farhadi, A., & Choi, Y. (2019). "HellaSwag: Can a Machine Really Finish Your Sentence?". Proceedings of ACL 2019. arXiv:1905.07830. Retrieved from [https://arxiv.org/abs/1905.07830](https://arxiv.org/abs/1905.07830)

2. [↑](#cite_ref-hellaswag_huggingface_2-0) Zellers, R. (2019). "HellaSwag Dataset". HuggingFace Datasets. Retrieved from [https://huggingface.co/datasets/Rowan/hellaswag](https://huggingface.co/datasets/Rowan/hellaswag)

3. [↑](#cite_ref-hellaswag_deepgram_3-0) Deepgram. (2024). "HellaSwag LLM Benchmark Guide". Retrieved from [https://deepgram.com/learn/hellaswag-llm-benchmark-guide](https://deepgram.com/learn/hellaswag-llm-benchmark-guide)

Cite error: `<ref>` tag with name "hellaswag_github" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "hellaswag_leaderboard" defined in `<references>` is not used in prior text.