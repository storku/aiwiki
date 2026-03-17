---
title: "LLM Benchmarks Timeline"
slug: "llm_benchmarks_timeline"
categories:
  - "Benchmarks"
  - "Timelines"
  - "Aggregate_pages"
---*See also: [LLM Comparisons](/wiki/llm_comparisons)&#160;and [LLM Rankings](/wiki/llm_rankings)*
Timeline of [benchmarks](/wiki/benchmarks) surpassed by [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs).

## 2024

| Benchmark | Category | Date Created | Date Defeated | Killed By | Defeated By Model | Original Score | Final Score | Details | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [ARC-AGI](/index.php?title=ARC-AGI&action=edit&redlink=1) | Reasoning | 2019-11 | 2024-12 | Saturation | [O3](/index.php?title=O3&action=edit&redlink=1) | Human Baseline: ~80% | O3: 87.5% | Abstract reasoning challenge with visual pattern completion tasks created by François Chollet. | [Paper](https://arxiv.org/abs/1911.01547), [Website](https://arcs-benchmark.org) |
| [MATH](/wiki/math) | Mathematics | 2021-03 | 2024-09 | Saturation | [O1](/index.php?title=O1&action=edit&redlink=1) | Average CS PhD: ~40% | O1: 94.8% | 12K challenging competition math problems from AMC/AIME, requiring complex multi-step reasoning. | [Paper](https://arxiv.org/abs/2103.03874), [GitHub](https://github.com/hendrycks/math) |
| [BIG-Bench-Hard](/index.php?title=BIG-Bench-Hard&action=edit&redlink=1) | Multi-task | 2022-10 | 2024-06 | Saturation | [Sonnet 3.5](/index.php?title=Sonnet_3.5&action=edit&redlink=1) | Average Human: 67.7% | Sonnet 3.5: 93.1% | A curated suite of 23 challenging tasks from BIG-Bench. | [Paper](https://arxiv.org/abs/2210.09261), [GitHub](https://github.com/suzgunmirac/BIG-Bench-Hard), [Evidence](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf) |
| [HumanEval](/wiki/humaneval) | Coding | 2021-07 | 2024-05 | Saturation | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | Unspecified | GPT-4o: 90.2% | 164 Python programming problems testing coding abilities. | [Paper](https://arxiv.org/abs/2107.03374), [GitHub](https://github.com/openai/human-eval), [Evidence](https://openai.com/index/hello-gpt-4o/) |
| [IFEval](/index.php?title=IFEval&action=edit&redlink=1) | Instruction Following | 2023-11 | 2024-03 | Saturation | [LLama 3.3 70B](/index.php?title=LLama_3.3_70B&action=edit&redlink=1) | Unspecified | LLama 3.3 70B: 92.1% | Evaluation suite testing multi-step instruction-following capabilities. | [Paper](https://arxiv.org/abs/2311.07911), [GitHub](https://github.com/google-research/google-research/tree/master/instruction_following_eval), [Evidence](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md) |

## 2023

| Benchmark | Category | Date Created | Date Defeated | Killed By | Defeated By Model | Original Score | Final Score | Details | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) | Mathematics | 2021-10 | 2023-11 | Saturation | [GPT-4](/wiki/gpt-4) | Unspecified | GPT-4: 92.0% | 8.5K grade school math word problems requiring step-by-step solutions. | [Paper](https://arxiv.org/abs/2110.14168), [GitHub](https://github.com/openai/grade-school-math), [Evidence](https://cdn.openai.com/papers/gpt-4.pdf) |
| [Turing Test](/index.php?title=Turing_Test&action=edit&redlink=1) | Conversation | 1950-10 | 2023-03 | Saturation | [GPT-4](/wiki/gpt-4) | Interrogator > 50% | Interrogator 46% | The original AI benchmark proposed by Alan Turing in 1950 (the "imitation game"). | [Paper](https://courses.cs.umbc.edu/471/papers/turing.pdf), [Evidence](https://arxiv.org/pdf/2405.08007) |
| [ARC (AI2)](/index.php?title=ARC_(AI2)&action=edit&redlink=1) | Reasoning | 2018-03 | 2023-03 | Saturation | [GPT-4](/wiki/gpt-4) | Unspecified | GPT-4: 96.3% | Grade-school multiple-choice reasoning tasks testing logical, spatial, temporal reasoning. | [Paper](https://arxiv.org/abs/1803.05457), [Website](https://leaderboard.allenai.org/arc/submissions/get-started), [Evidence](https://cdn.openai.com/papers/gpt-4.pdf) |
| [HellaSwag](/wiki/hellaswag) | Common Sense | 2019-05 | 2023-03 | Saturation | [GPT-4](/wiki/gpt-4) | Human: 95.6% | GPT-4: 95.3% | Multiple-choice questions about everyday scenarios with adversarial filtering. | [Paper](https://arxiv.org/abs/1905.07830), [Website](https://rowanzellers.com/hellaswag/), [Evidence](https://cdn.openai.com/papers/gpt-4.pdf) |
| [MMLU](/wiki/mmlu) | Knowledge | 2020-09 | 2023-03 | Saturation | [GPT-4](/wiki/gpt-4) | 95th pct Human: 87.0% | GPT-4: 87.3% | 57 subjects from real-world sources (professional exams) testing breadth and depth of knowledge. | [Paper](https://arxiv.org/abs/2009.03300), [GitHub](https://github.com/hendrycks/test), [Evidence](https://cdn.openai.com/papers/gpt-4.pdf) |
| [WinoGrande](/index.php?title=WinoGrande&action=edit&redlink=1) | Common Sense | 2019-07 | 2023-03 | Saturation | [GPT-4](/wiki/gpt-4) | Human: 94% | GPT-4: 87.5% | Enhanced WSC with 44K problems testing common-sense pronoun resolution. | [Paper](https://arxiv.org/abs/1907.10641), [Website](https://winogrande.allenai.org/), [Evidence](https://cdn.openai.com/papers/gpt-4.pdf) |

## Pre-2023

### 2022

| Benchmark | Category | Date Created | Date Defeated | Killed By Model | Defeated By | Original Score | Final Score | Details | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [BIG-Bench](/index.php?title=BIG-Bench&action=edit&redlink=1) | Multi-task | 2021-06 | 2022-04 | Saturation | [Palm 540B](/index.php?title=Palm_540B&action=edit&redlink=1) | Human: 49.8% | Palm 540B: 61.4% | 204 tasks spanning linguistics, math, common-sense reasoning, and more. | [Paper](https://arxiv.org/abs/2206.04615), [GitHub](https://github.com/google/BIG-bench), [Evidence](https://arxiv.org/pdf/2204.02311) |

### 2019

| Benchmark | Category | Date Created | Date Defeated | Killed By | Defeated By Model | Original Score | Final Score | Details | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [SuperGLUE](/index.php?title=SuperGLUE&action=edit&redlink=1) | Language | 2019-05 | 2019-10 | Saturation | [T5](/index.php?title=T5&action=edit&redlink=1) | Human: 89.8% | T5: 89.3% | More challenging language understanding tasks (word sense, causal reasoning, RC). | [Paper](https://arxiv.org/abs/1905.00537), [Website](https://super.gluebenchmark.com/) |
| [WSC](/index.php?title=WSC&action=edit&redlink=1) | Common Sense | 2012-05 | 2019-07 | Saturation | [ROBERTA (w SFT)](/index.php?title=ROBERTA_(w_SFT)&action=edit&redlink=1) | Human: 96.5% | ROBERTA (w SFT): 90.1% | Carefully crafted sentence pairs with ambiguous pronoun references. | [Paper](https://cdn.aaai.org/ocs/4492/4492-21843-1-PB.pdf), [Website](https://cs.nyu.edu/~davise/papers/WinogradSchemas/WS.html) |
| [GLUE](/index.php?title=GLUE&action=edit&redlink=1) | Language | 2018-05 | 2019-06 | Saturation | [XLNet](/index.php?title=XLNet&action=edit&redlink=1) | Human: 87.1% | XLNet: 88.4% | Nine tasks for evaluating NLU (inference, paraphrase, similarity, etc.). | [Paper](https://arxiv.org/abs/1804.07461), [Website](https://gluebenchmark.com/) |
| [TriviaQA](/index.php?title=TriviaQA&action=edit&redlink=1) | Knowledge | 2017-05 | 2019-06 | Saturation | [SpanBERT](/index.php?title=SpanBERT&action=edit&redlink=1) | Human: 79.7% | SpanBERT: 83.6% | 650K QA-evidence triples requiring cross-sentence reasoning. | [Paper](https://arxiv.org/abs/1705.03551), [Website](http://nlp.cs.washington.edu/triviaqa/) |
| [SQuAD v2.0](/index.php?title=SQuAD_v2.0&action=edit&redlink=1) | Language | 2018-05 | 2019-04 | Saturation | [BERT](/wiki/bert) | Human: 89.5% | BERT: 89.5% | Extension of SQuAD adding unanswerable questions. | [Paper](https://arxiv.org/abs/1806.03822), [Website](https://rajpurkar.github.io/SQuAD-explorer/) |
| [SQuAD](/index.php?title=SQuAD&action=edit&redlink=1) | Language | 2016-05 | 2019-03 | Saturation | [BERT](/wiki/bert) | Human: 91.2% | BERT: 93.2% | 100,000+ QA tasks on Wikipedia articles. | [Paper](https://arxiv.org/abs/1606.05250), [Website](https://rajpurkar.github.io/SQuAD-explorer/) |

### 2018

| Benchmark | Category | Date Created | Date Defeated | Killed By | Defeated By Model | Original Score | Final Score | Details | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [SWAG](/index.php?title=SWAG&action=edit&redlink=1) | Common Sense | 2018-05 | 2018-10 | Saturation | [BERT](/wiki/bert) | Human: 88% | BERT: 86% | 113K multiple-choice questions about grounded situations (common sense “next step”). | [Paper](https://arxiv.org/abs/1808.05326), [Website](https://rowanzellers.com/swag/) |

## References

[website](https://r0bk.github.io/killedbyllm/)
[github](https://github.com/R0bk/killedbyllm)