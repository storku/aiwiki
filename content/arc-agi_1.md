---
title: "ARC-AGI 1"
slug: "arc-agi_1"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Abstract_Reasoning_Benchmarks"
  - "Visual_Reasoning_Benchmarks"
  - "General_Intelligence_Benchmarks"
  - "2019_Benchmarks"
---**

| ARC-AGI 1 |
| --- |
| Overview |
| Full name | Abstraction and Reasoning Corpus for Artificial General Intelligence - Version 1 |
| Abbreviation | ARC-AGI-1 |
| Description | A benchmark testing abstract reasoning and pattern recognition through visual puzzles requiring minimal examples |
| Release date | 2019 |
| Latest version | 1.0 |
| Benchmark updated | 2019 |
| Authors | [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1) |
| Organization | [Google AI](/index.php?title=Google_AI&action=edit&redlink=1) |
| Technical Details |
| Type | [Abstract Reasoning](/index.php?title=Abstract_Reasoning&action=edit&redlink=1), [General Intelligence](/index.php?title=General_Intelligence&action=edit&redlink=1), [Visual Reasoning](/index.php?title=Visual_Reasoning&action=edit&redlink=1) |
| Modality | [Visual (Grid-based)](/index.php?title=Visual_(Grid-based)&action=edit&redlink=1) |
| Task format | [Input-output grid transformations](/index.php?title=Input-output_grid_transformations&action=edit&redlink=1) |
| Number of tasks | 1,000 (400 training, 400 public eval, 200 private) |
| Total examples | ~3 examples per task |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Pass@3](/index.php?title=Pass@3&action=edit&redlink=1) |
| Domains | [Pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1), [Logical reasoning](/index.php?title=Logical_reasoning&action=edit&redlink=1), [Abstraction](/index.php?title=Abstraction&action=edit&redlink=1), [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1) |
| Languages | Language-agnostic (visual) |
| Performance |
| Human performance | 73-85% |
| Baseline | 0% (GPT-3, 2020) |
| SOTA score | 87.5% |
| SOTA model | [OpenAI o3 (high compute)](/index.php?title=OpenAI_o3_(high_compute)&action=edit&redlink=1) |
| SOTA date | 2024-12 |
| Saturated | Yes (by o3) |
| Resources |
| Website | [Official website](https://arcprize.org/arc-agi/1/) |
| Paper | [Paper](https://arxiv.org/abs/1911.01547) |
| GitHub | [Repository](https://github.com/fchollet/ARC-AGI) |
| Dataset | [Download](https://github.com/fchollet/ARC-AGI) |
| License | Apache 2.0 |
| Successor | [ARC-AGI 2](/wiki/arc-agi_2) |

ARC-AGI 1** (**Abstraction and Reasoning Corpus for Artificial General Intelligence - Version 1**) is a landmark [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [abstract reasoning](/index.php?title=Abstract_reasoning&action=edit&redlink=1) and [general intelligence](/index.php?title=General_intelligence&action=edit&redlink=1) capabilities through visual puzzle-solving tasks. Created by [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1), the creator of [Keras](/wiki/keras), and introduced in his 2019 paper "On the Measure of Intelligence"[&#91;1&#93;](#cite_note-chollet2019-1), ARC-AGI 1 tests an AI system's ability to learn and generalize from minimal information, a fundamental aspect of human intelligence that had long eluded artificial systems.

## Overview

ARC-AGI 1 represents a paradigm shift in AI evaluation, moving away from benchmarks that can be solved through [pattern matching](/index.php?title=Pattern_matching&action=edit&redlink=1) or memorization toward testing genuine reasoning capabilities. The benchmark consists of 1,000 grid-based visual reasoning problems (800 public, 200 private), each providing only about three example input-output pairs. Test-takers must infer the underlying transformation rule and apply it to new inputs, mimicking the human ability to rapidly acquire new skills from limited examples.

### Significance

From its introduction in 2019 until late 2024, ARC-AGI 1 stood as one of the most challenging benchmarks for [artificial general intelligence](/wiki/artificial_general_intelligence) (AGI). While humans could effortlessly solve 73-85% of the tasks, AI systems struggled dramatically, with early models like [GPT-3](/wiki/gpt-3) achieving 0% accuracy. This stark performance gap highlighted fundamental differences between human cognition and machine learning approaches, making ARC-AGI 1 a crucial milestone on the path to AGI[&#91;2&#93;](#cite_note-arcprize-2).

## Design Philosophy

### Core Principles

ARC-AGI 1 is built on several key principles that distinguish it from traditional AI benchmarks:

| Principle | Description | Rationale |
| --- | --- | --- |
| Minimal Examples | Each task provides only ~3 input-output pairs | Tests rapid learning ability |
| Novel Problems | Tasks are unique and unpublished | Prevents memorization |
| Visual Format | Grid-based representations | Language-agnostic evaluation |
| Human Priors | Based on innate human cognitive abilities | Fair human-AI comparison |
| Abstraction Focus | Requires identifying abstract patterns | Tests general intelligence |

### Theoretical Foundation

The benchmark is grounded in [Algorithmic Information Theory](/index.php?title=Algorithmic_Information_Theory&action=edit&redlink=1), with Chollet defining intelligence as "skill-acquisition efficiency", the ability to convert limited experience and priors into broad problem-solving capabilities[&#91;1&#93;](#cite_note-chollet2019-1). This definition emphasizes:

- **Generalization**: Applying learned patterns to new situations

- **Sample Efficiency**: Learning from minimal examples

- **Abstraction**: Identifying underlying rules and structures

- **Transfer Learning**: Applying knowledge across domains

## Task Structure

### Dataset Composition

ARC-AGI 1's 1,000 tasks are divided into distinct sets:

| Dataset | Number of Tasks | Purpose | Accessibility |
| --- | --- | --- | --- |
| Training Set | 400 | Algorithm development and training | Public |
| Public Evaluation | 400 | Initial testing and validation | Public |
| Private Test Sets | 200 | Competition and final evaluation | Private |

### Task Characteristics

Each ARC-AGI 1 task consists of:

- **Input-Output Examples**: Typically 3 demonstration pairs showing the transformation

- **Test Input**: A new grid requiring the same transformation

- **Grid Format**: 2D arrays with dimensions up to 30×30

- **Color Palette**: 10 distinct colors (0-9)

- **Transformation Types**: Various logical, spatial, and abstract operations

### Common Transformation Types

| Type | Description | Example |
| --- | --- | --- |
| Pattern Completion | Fill in missing parts of patterns | Complete symmetrical designs |
| Object Manipulation | Move, rotate, or transform objects | Rotate shapes 90 degrees |
| Counting Operations | Apply numerical rules | Duplicate objects based on count |
| Spatial Reasoning | Understand spatial relationships | Mirror across axes |
| Color Mapping | Apply color transformation rules | Replace colors conditionally |
| Logical Operations | Apply if-then rules | Change based on neighbors |
| Abstraction | Identify abstract concepts | Recognize "sameness" or "difference" |

## Evaluation Methodology

### Scoring System

| Metric | Description | Calculation |
| --- | --- | --- |
| Task Success | Correctly solve all test inputs for a task | Binary (pass/fail) |
| Accuracy | Percentage of tasks solved | (Solved tasks / Total tasks) × 100% |
| Pass@3 | Success within 3 attempts per test input | Standard evaluation metric |
| Compute Efficiency | Resources used for solving | Time and computational cost |

### Evaluation Protocol

1. **Presentation**: System receives example input-output pairs
2. **Learning**: Infer the transformation rule from examples
3. **Application**: Apply the rule to test input(s)
4. **Submission**: Provide up to 3 candidate answers
5. **Verification**: Exact match required for success

## Performance History

### AI Model Performance Timeline

| Year | Model | Accuracy | Organization | Notes |
| --- | --- | --- | --- | --- |
| 2020 | [GPT-3](/wiki/gpt-3) | 0% | [OpenAI](/wiki/openai) | Complete failure on visual reasoning |
| 2021 | Early attempts | <5% | Various | Rule-based approaches |
| 2022 | Specialized solvers | ~15% | Academic teams | Task-specific methods |
| 2023 | [GPT-4](/wiki/gpt-4) | ~0% | [OpenAI](/wiki/openai) | Still struggled with format |
| 2024 (early) | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 5% | [OpenAI](/wiki/openai) | Slight improvement |
| 2024 (Sept) | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | ~21% | [Anthropic](/wiki/anthropic) | Better visual understanding |
| 2024 (Sept) | [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) | ~21% | [OpenAI](/wiki/openai) | Reasoning improvements |
| 2024 (Dec) | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) (low compute) | 75.7% | [OpenAI](/wiki/openai) | Major breakthrough |
| 2024 (Dec) | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) (high compute) | 87.5% | [OpenAI](/wiki/openai) | Exceeded human average |

### Human Performance

| Study | Performance | Sample Size | Notes |
| --- | --- | --- | --- |
| NYU Study (2024) | 73.3-77.2% | 790 crowd workers | Average performance |
| Expert Solvers | 85-95% | Small sample | With unlimited time |
| Solvability Study | 98.7% | 800 tasks | At least one human can solve |
| Competition Target | 85% | N/A | ARC Prize threshold |

## The o3 Breakthrough

### December 2024 Achievement

In December 2024, [OpenAI](/wiki/openai)'s o3 model achieved a historic breakthrough on ARC-AGI 1[&#91;3&#93;](#cite_note-o3breakthrough-3):

| Configuration | Score | Compute Cost | Significance |
| --- | --- | --- | --- |
| Low Compute ($10k limit) | 75.7% | ~$10,000 | Approaching human average |
| High Compute (172x) | 87.5% | ~$1.7M | Exceeded human average |

This achievement marked the first time an AI system effectively "solved" ARC-AGI 1, surpassing the average human performance of 73-85% and meeting the original benchmark goals.

### Technical Approach

While OpenAI has not disclosed full technical details, o3's success likely involves:

- **Advanced Reasoning**: Chain-of-thought and multi-step reasoning

- **Program Synthesis**: Generating code to solve transformations

- **Search Algorithms**: Exploring solution spaces efficiently

- **Test-Time Compute**: Extensive computation during inference

## ARC Prize Competition

### Competition Structure

The [ARC Prize](/index.php?title=ARC_Prize&action=edit&redlink=1) was established to incentivize progress on the benchmark:

| Prize Tier | Requirement | Award | Status |
| --- | --- | --- | --- |
| Progress Prizes | Incremental improvements | Variable | Ongoing |
| Grand Prize | 85% accuracy within efficiency limits | $700,000 | Achieved by o3* |
| Open Source Prize | Public solution meeting criteria | $100,000 | Available |

- Note: o3's high-compute solution exceeded efficiency limits for the Grand Prize.

### Notable Submissions

- **Kaggle Ensemble (2024)**: 81% using multiple low-compute solutions

- **Academic Teams**: Various approaches achieving 15-30%

- **Industry Labs**: Proprietary solutions reaching 40-50%

## Technical Implementation

### Dataset Access

```python

1. Loading ARC-AGI 1 dataset

import json
import requests

1. Download training data

url = "[https://github.com/fchollet/ARC-AGI/raw/master/data/training](https://github.com/fchollet/ARC-AGI/raw/master/data/training)"
response = requests.get(url)
training_data = json.loads(response.text)

1. Each task contains train and test examples

for task_id, task in training_data.items():

   train_examples = task['train']
   test_examples = task['test']
   
   for example in train_examples:
       input_grid = example['input']
       output_grid = example['output']

```

### Evaluation Framework

```python
def evaluate_solution(prediction, target):

   """
   Evaluate if prediction matches target exactly
   """
   return prediction == target

def pass_at_3(predictions, target):

   """
   Check if any of 3 predictions is correct
   """
   return any(evaluate_solution(pred, target) 
              for pred in predictions[:3])

```

## Impact and Legacy

### Contributions to AI Research

| Area | Contribution | Impact |
| --- | --- | --- |
| Benchmark Design | Introduced minimal-example paradigm | Influenced future benchmarks |
| AGI Definition | Formalized intelligence as skill-acquisition | Theoretical framework |
| Evaluation Methods | Visual, language-agnostic testing | Broader applicability |
| Research Focus | Shifted attention to reasoning | New research directions |

### Influence on Subsequent Work

1. **[ARC-AGI 2](/wiki/arc-agi_2)**: More challenging successor released in 2025
2. **Reasoning Models**: Inspired development of o1, o3, and similar systems
3. **Program Synthesis**: Renewed interest in code generation for problem-solving
4. **Cognitive Architectures**: Focus on human-like reasoning systems

## Limitations and Criticisms

### Known Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Visual Only | Limited to grid-based problems | Doesn't test other modalities |
| Discrete Space | No continuous reasoning | Limited scope |
| Small Dataset | Only 1,000 tasks | Potential for overfitting |
| Compute Scaling | Can be "solved" with enough compute | Questions efficiency |

### Criticisms

- **Narrow Intelligence**: Success on ARC doesn't guarantee general intelligence

- **Compute Arms Race**: o3's solution required massive computational resources

- **Gaming Potential**: Specialized solvers might not transfer to other domains

## Future Directions

### ARC-AGI 2 and Beyond

With ARC-AGI 1 effectively solved, the community has moved to [ARC-AGI 2](/wiki/arc-agi_2), which presents significantly harder challenges:

- Current SOTA models achieve only 1-1.3% on ARC-AGI 2

- Human performance remains at ~60%

- New prize pool of $1 million for reaching human-level performance

### Research Opportunities

1. **Efficiency Improvements**: Solving ARC with less compute
2. **Transfer Learning**: Applying ARC solutions to other domains
3. **Explainability**: Understanding how models solve tasks
4. **Hybrid Systems**: Combining symbolic and neural approaches

## Significance

ARC-AGI 1's journey from an "unsolvable" benchmark in 2019 to being conquered by o3 in 2024 represents a watershed moment in AI development. It demonstrated that with sufficient advances in reasoning capabilities and computational resources, AI systems can match and exceed human performance on abstract reasoning tasks. However, the massive compute requirements and the immediate introduction of the much harder ARC-AGI 2 remind us that the path to true AGI remains challenging.

The benchmark's legacy extends beyond its specific tasks, having fundamentally shaped how the AI community thinks about intelligence, evaluation, and the goals of artificial general intelligence research.

## See Also

- [ARC-AGI 2](/wiki/arc-agi_2)

- [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1)

- [Abstract Reasoning](/index.php?title=Abstract_Reasoning&action=edit&redlink=1)

- [Artificial General Intelligence](/index.php?title=Artificial_General_Intelligence&action=edit&redlink=1)

- [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1)

- [Visual Reasoning](/index.php?title=Visual_Reasoning&action=edit&redlink=1)

- [Program Synthesis](/index.php?title=Program_Synthesis&action=edit&redlink=1)

- [ARC Prize](/index.php?title=ARC_Prize&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-chollet2019_1-0) [1.1](#cite_ref-chollet2019_1-1) Chollet, F. (2019). "On the Measure of Intelligence". arXiv:1911.01547. Retrieved from [https://arxiv.org/abs/1911.01547](https://arxiv.org/abs/1911.01547)

2. [↑](#cite_ref-arcprize_2-0) ARC Prize. (2024). "What is ARC-AGI?". Retrieved from [https://arcprize.org/arc-agi](https://arcprize.org/arc-agi)

3. [↑](#cite_ref-o3breakthrough_3-0) ARC Prize. (2024). "OpenAI o3 Breakthrough High Score on ARC-AGI-Pub". Retrieved from [https://arcprize.org/blog/oai-o3-pub-breakthrough](https://arcprize.org/blog/oai-o3-pub-breakthrough)

Cite error: `<ref>` tag with name "nyu2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "leaderboard" defined in `<references>` is not used in prior text.