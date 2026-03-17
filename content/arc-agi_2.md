---
title: "ARC-AGI 2"
slug: "arc-agi_2"
categories:
  - "Pages_containing_cite_templates_with_deprecated_parameters"
  - "Pages_with_broken_file_links"
  - "AI_Benchmarks"
  - "Artificial_Intelligence"
  - "Machine_Learning"
  - "Cognitive_Science"
  - "2025_in_artificial_intelligence"
---**

| ARC-AGI 2 |
| --- |
| [File:ARC-AGI-logo.png](/index.php?title=Special:Upload&wpDestFile=ARC-AGI-logo.png) |
| ARC-AGI 2 benchmark logo |
| Overview |
| Full name | Abstraction and Reasoning Corpus for Artificial General Intelligence 2 |
| Abbreviation | ARC-AGI 2 |
| Description | A benchmark for measuring general intelligence through abstract reasoning and pattern recognition tasks |
| Release date | 2025-03-26 |
| Latest version | 2.0 |
| Authors | [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1), [Mike Knoop](/index.php?title=Mike_Knoop&action=edit&redlink=1), [Greg Kamradt](/index.php?title=Greg_Kamradt&action=edit&redlink=1), [Bryan Landers](/index.php?title=Bryan_Landers&action=edit&redlink=1), [Henry Pinkard](/index.php?title=Henry_Pinkard&action=edit&redlink=1) |
| Organization | [ARC Prize Foundation](/index.php?title=ARC_Prize_Foundation&action=edit&redlink=1) |
| Technical Details |
| Type | [Abstract Reasoning](/index.php?title=Abstract_Reasoning&action=edit&redlink=1), [General Intelligence](/index.php?title=General_Intelligence&action=edit&redlink=1) |
| Modality | [Visual](/index.php?title=Visual&action=edit&redlink=1), [Symbolic](/index.php?title=Symbolic&action=edit&redlink=1) |
| Task format | [Grid transformation](/index.php?title=Grid_transformation&action=edit&redlink=1) |
| Number of tasks | 1,000+ (see Dataset Composition) |
| Total examples | 1,120 public tasks (1,000 training, 120 evaluation), 240 private tasks |
| Evaluation metric | [Pass@2](/index.php?title=Pass@2&action=edit&redlink=1), [Binary Accuracy](/index.php?title=Binary_Accuracy&action=edit&redlink=1) |
| Domains | [Pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1), [Logical reasoning](/index.php?title=Logical_reasoning&action=edit&redlink=1), [Abstraction](/index.php?title=Abstraction&action=edit&redlink=1), [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1), [Fluid intelligence](/index.php?title=Fluid_intelligence&action=edit&redlink=1) |
| Languages | Language-agnostic |
| Performance |
| Human performance | 60% (average), 66% (public evaluation set), 100% (collective) |
| Baseline | 0-2% |
| SOTA score | 3-4% |
| SOTA model | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) |
| SOTA date | 2025-03 |
| Saturated | No |
| Resources |
| Website | [Official website](https://arcprize.org) |
| Paper | [Paper](https://arxiv.org/abs/2505.11831) |
| GitHub | [Repository](https://github.com/arcprize/ARC-AGI-2) |
| Dataset | [Download](https://github.com/arcprize/ARC-AGI-2/releases) |
| License | Apache 2.0 |
| Predecessor | [ARC-AGI 1 (2019)](/index.php?title=ARC-AGI_1_(2019)&action=edit&redlink=1) |
| Successor | [ARC-AGI 3 (planned 2026)](/index.php?title=ARC-AGI_3_(planned_2026)&action=edit&redlink=1) |

ARC-AGI 2** (**Abstraction and Reasoning Corpus for Artificial General Intelligence 2**) is an [artificial intelligence](/wiki/artificial_intelligence) [benchmark](/wiki/benchmark) designed to measure genuine [reasoning](/index.php?title=Reasoning&action=edit&redlink=1) and [problem-solving](/index.php?title=Problem-solving&action=edit&redlink=1) capabilities in [AI systems](/index.php?title=AI_systems&action=edit&redlink=1). Released on March 26, 2025, by the [ARC Prize Foundation](/index.php?title=ARC_Prize_Foundation&action=edit&redlink=1), it serves as a critical test for progress toward [artificial general intelligence](/wiki/artificial_general_intelligence) (AGI) by focusing on tasks that are "easy for humans, hard for AI."[&#91;1&#93;](#cite_note-announcement-1)

## Overview

ARC-AGI 2 tests [fluid intelligence](/index.php?title=Fluid_intelligence&action=edit&redlink=1) through visual grid-based puzzles that require [abstract reasoning](/index.php?title=Abstract_reasoning&action=edit&redlink=1), [pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1), and the ability to generalize from just a few examples. Unlike traditional AI benchmarks that can be solved through scaling and memorization, ARC-AGI 2 demands true cognitive flexibility and efficient adaptation to entirely novel problems.[&#91;2&#93;](#cite_note-technical-2)

The benchmark reveals a dramatic performance gap between humans and AI: while humans achieve 60-100% accuracy (with collective human performance near 100%), frontier [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) like [GPT-4](/wiki/gpt-4) and [Claude](/index.php?title=Claude_(AI_assistant)&action=edit&redlink=1) score only 0-5%.[&#91;2&#93;](#cite_note-technical-2) This gap highlights fundamental limitations in current AI architectures and the need for breakthrough approaches beyond pure scaling.

The benchmark is designed to be language-agnostic, focusing purely on visual and symbolic reasoning rather than linguistic capabilities, ensuring universal applicability across different cultures and languages.[&#91;3&#93;](#cite_note-guide-3)

## History and Development

### Original ARC Benchmark

The original ARC benchmark was introduced in 2019 by [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1), a [Google](/index.php?title=Google&action=edit&redlink=1) AI researcher and creator of the [Keras](/wiki/keras) deep learning library. In his paper "On the Measure of Intelligence," Chollet defined intelligence as "skill-acquisition efficiency" – the ability to rapidly adapt to novel challenges with minimal data.[&#91;4&#93;](#cite_note-intelligence-4)

[ARC-AGI 1](/wiki/arc-agi_1) consisted of 800 puzzle-like tasks that challenged [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) systems. Initial competitions in 2020 saw winning scores of just 21%, with progress remaining slow through 2024, when most systems plateaued around 33-34% despite massive increases in model scale and compute power.[&#91;5&#93;](#cite_note-2024report-5)

### OpenAI o3 Breakthrough

In December 2024, [OpenAI](/wiki/openai)'s [o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) model achieved 87.5% accuracy on ARC-AGI 1, surpassing average human performance for the first time. However, this achievement required $20,000 per task in compute costs, highlighting severe efficiency limitations.[&#91;6&#93;](#cite_note-o3breakthrough-6) The o3 model's performance dropped to just 3-4% on ARC-AGI 2, demonstrating that its approach doesn't represent true human-like intelligence.[&#91;2&#93;](#cite_note-technical-2)

### ARC Prize Foundation

In January 2025, Chollet co-founded the ARC Prize Foundation, a 501(c)(3) [non-profit organization](/index.php?title=Non-profit_organization&action=edit&redlink=1), with [Mike Knoop](/index.php?title=Mike_Knoop&action=edit&redlink=1) (co-founder of [Zapier](/index.php?title=Zapier&action=edit&redlink=1)) and [Greg Kamradt](/index.php?title=Greg_Kamradt&action=edit&redlink=1) (former [Salesforce](/index.php?title=Salesforce&action=edit&redlink=1) engineering director). The foundation's mission extends beyond maintaining benchmarks to actively guiding researchers, industry, and regulators toward safe and beneficial AGI development through open-source research incentives.[&#91;7&#93;](#cite_note-foundation-7)

## Technical Specifications

### Dataset Composition

The ARC-AGI 2 dataset contains the following components:[&#91;2&#93;](#cite_note-technical-2)

| Component | Number of Tasks | Purpose | Accessibility |
| --- | --- | --- | --- |
| Public Training Set | 1,000 | Training and development | Fully public |
| Public Evaluation Set | 120 | Research evaluation | Fully public |
| Semi-Private Evaluation Set | 120 | Leaderboard scoring | Semi-private |
| Private Evaluation Set | 120 | Final competition evaluation | Fully private |

Every evaluation task has been verified solvable by at least two humans within two attempts, with testing involving over 400 participants to ensure fairness and prevent impossible challenges.[&#91;2&#93;](#cite_note-technical-2) The average human performance on the public evaluation set is 66%, with collective human performance approaching 100%.[&#91;1&#93;](#cite_note-announcement-1)

### Task Format

Tasks utilize a [JSON](/index.php?title=JSON&action=edit&redlink=1) schema with the following characteristics:

- Grid sizes range from 1×1 to 30×30 cells

- Integer values 0-9 represent different colors

- Most tasks provide 2-5 demonstration pairs showing the transformation rule

- Solvers must infer the pattern and apply it to 1-3 test cases

- Success requires pixel-perfect accuracy – every cell must match exactly[&#91;3&#93;](#cite_note-guide-3)

The tasks are stored in JSON format with each task containing:

- "train": 3-5 demonstration input-output grid pairs

- "test": 1-2 test input grids where the system must generate the correct output grid[&#91;8&#93;](#cite_note-github-8)

### Evaluation Methodology

The benchmark employs:

- **Pass@2 scoring**: Two attempts allowed per test input

- **Binary scoring**: Complete success or failure (no partial credit)

- **Efficiency constraints**: $0.42 per task maximum cost for competition

- **Isolated environment**: No internet access during evaluation[&#91;2&#93;](#cite_note-technical-2)

### Cognitive Domains

ARC-AGI 2 evaluates five core knowledge priors based on [developmental psychology](/index.php?title=Developmental_psychology&action=edit&redlink=1) research:

1. **[Object permanence](/index.php?title=Object_permanence&action=edit&redlink=1)**: Understanding objects maintain existence when occluded

2. **Goal-directedness**: Recognizing intentional behavior

3. **Elementary number sense**: Basic counting and quantity

4. **[Geometry](/index.php?title=Geometry&action=edit&redlink=1) and [topology](/index.php?title=Topology&action=edit&redlink=1)**: Spatial relationships and symmetry

5. **[Causality](/index.php?title=Causality&action=edit&redlink=1)**: Understanding cause-effect relationships[&#91;4&#93;](#cite_note-intelligence-4)

The benchmark incorporates higher complexity challenges including:

- **Symbolic Interpretation** – interpreting patterns as abstract symbols with meaning

- **Compositional Reasoning** – combining multiple interacting rules

- **Contextual Rule Application** – applying rules conditionally based on context cues[&#91;2&#93;](#cite_note-technical-2)

## Performance Metrics

### Human Performance

Extensive testing with over 400 participants established robust baselines:

- Average test-takers: **60% accuracy**

- Public evaluation set average: **66% accuracy**

- Expert performers: **97-98% accuracy**

- Collective human performance: **~100% accuracy**

- Average completion time: **2.3 minutes per task**

- Cost per task (including incentives): **$17**[&#91;2&#93;](#cite_note-technical-2)

Performance shows no correlation with demographics, education, or specialized knowledge, confirming the benchmark tests general reasoning abilities accessible to all humans.

### AI Performance

| Model | ARC-AGI 1 Score | ARC-AGI 2 Score | Performance Drop |
| --- | --- | --- | --- |
| [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) (high compute) | 87.5% | 3-4% | 95.7% |
| OpenAI o3 (low compute) | 75.7% | ~3% | 96.0% |
| [OpenAI o1-pro](/index.php?title=OpenAI_o1-pro&action=edit&redlink=1) | ~50% | ~1.3% | 97.4% |
| [DeepSeek R1](/index.php?title=DeepSeek_R1&action=edit&redlink=1) | ~45% | ~1% | 97.8% |
| [Claude 3.7](/index.php?title=Claude_3.7&action=edit&redlink=1) | ~50% | 0.9% | 98.2% |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~45% | ~0% | ~100% |
| 2024 Competition Winners | 55.5% | 2.5% | 95.5% |

This represents a reduction of over 20× in performance, successfully resetting the benchmark challenge.[&#91;2&#93;](#cite_note-technical-2)

## ARC Prize 2025 Competition

### Prize Structure

The ARC Prize 2025 offers over $1 million in total prizes:

- **Grand Prize**: $700,000 for achieving 85% accuracy on private evaluation

- **Paper Prizes**: $75,000 for conceptual breakthroughs

- **Top Score Prizes**: $50,000

- **Additional Prizes**: $175,000 (to be announced)

- **Minimum Guaranteed Payout**: $125,000[&#91;1&#93;](#cite_note-announcement-1)

### Competition Details

- **Duration**: March 26 - November 3, 2025

- **Platform**: [Kaggle](/index.php?title=Kaggle&action=edit&redlink=1)

- **Compute Resources**: L4×4 GPUs with 96GB memory

- **Budget Constraint**: $50 total compute budget ($0.42 per task maximum)

- **Open Source Requirement**: All prize-eligible submissions must use MIT or Apache-2.0 licenses

- **Efficiency Focus**: Solutions must demonstrate resource-efficient reasoning rather than brute-force approaches[&#91;3&#93;](#cite_note-guide-3)

### Historical Impact

The 2024 ARC competition attracted:

- 1,430 teams submitting 17,789 entries

- Over 40 research papers generated

- At least 7 well-funded startups pivoting to focus on ARC-AGI

- Major AI labs launching dedicated research programs[&#91;5&#93;](#cite_note-2024report-5)

## Unique Features

### Measuring True Intelligence

ARC-AGI 2 uniquely measures **skill-acquisition efficiency** rather than demonstrated skills. While benchmarks like [MMLU](/wiki/mmlu) or [HumanEval](/wiki/humaneval) test accumulated knowledge, ARC-AGI 2 requires rapid adaptation to entirely novel challenges.[&#91;4&#93;](#cite_note-intelligence-4) This focus on [fluid intelligence](/index.php?title=Fluid_intelligence&action=edit&redlink=1) rather than [crystallized intelligence](/index.php?title=Crystallized_intelligence&action=edit&redlink=1) provides a more accurate measure of general reasoning capabilities.

### Resistance to Scaling

Unlike most AI challenges that yield to increased compute power, ARC-AGI 2 becomes economically infeasible to brute-force. The benchmark ensures that even with unlimited computational resources, systems lacking genuine reasoning capabilities cannot achieve high scores.[&#91;2&#93;](#cite_note-technical-2) The efficiency constraints enforce a maximum cost of $0.42 per task, preventing solutions that rely on massive computational resources.[&#91;1&#93;](#cite_note-announcement-1)

### Universal Cognitive Assessment

The benchmark exclusively tests cognitive primitives universal to human intelligence, avoiding cultural biases or specialized knowledge requirements. This universality makes it an ideal benchmark for comparing artificial and human intelligence on equal footing.[&#91;4&#93;](#cite_note-intelligence-4) The language-agnostic design ensures global applicability without favoring any particular linguistic or cultural background.

## Future Developments

### ARC-AGI 3

The ARC Prize Foundation announced ARC-AGI 3 for 2026, featuring:

- Interactive agent-based reasoning tasks

- Early previews showing 0% AI performance versus 100% human success

- Another order-of-magnitude increase in challenge difficulty[&#91;7&#93;](#cite_note-foundation-7)

### Research Directions

The 2024-2025 period catalyzed fundamental changes in AI research:

- **[Test-time training](/index.php?title=Test-time_training&action=edit&redlink=1)**: Systems adapting to specific tasks during evaluation

- **[Program synthesis](/index.php?title=Program_synthesis&action=edit&redlink=1)**: Combining neural guidance with discrete search

- **[Neuro-symbolic hybrids](/index.php?title=Neuro-symbolic_AI&action=edit&redlink=1)**: Integrating symbolic reasoning with neural networks

- **Biologically-inspired architectures**: Drawing from cognitive science insights[&#91;5&#93;](#cite_note-2024report-5)

## Significance

ARC-AGI 2 represents a critical benchmark in the journey toward AGI, highlighting the substantial gap between current AI capabilities and human-level general intelligence. By focusing on tasks that are "easy for humans, hard for AI," it provides a clear metric for measuring genuine progress in artificial intelligence research.[&#91;1&#93;](#cite_note-announcement-1) The benchmark's resistance to brute-force approaches and emphasis on efficiency ensures that progress will require fundamental breakthroughs in how AI systems reason and generalize, rather than simply scaling existing approaches.

## See Also

- [Artificial general intelligence](/wiki/artificial_general_intelligence)

- [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1)

- [Intelligence testing](/index.php?title=Intelligence_testing&action=edit&redlink=1)

- [Machine learning benchmarks](/index.php?title=Machine_learning_benchmarks&action=edit&redlink=1)

- [Reasoning system](/index.php?title=Reasoning_system&action=edit&redlink=1)

- [Pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1)

- [Fluid intelligence](/index.php?title=Fluid_intelligence&action=edit&redlink=1)

- [Abstract reasoning](/index.php?title=Abstract_reasoning&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-announcement_1-0) [1.1](#cite_ref-announcement_1-1) [1.2](#cite_ref-announcement_1-2) [1.3](#cite_ref-announcement_1-3) [1.4](#cite_ref-announcement_1-4) ["Announcing ARC-AGI-2 and ARC Prize 2025"](https://arcprize.org/blog/announcing-arc-agi-2-and-arc-prize-2025).&#32;ARC Prize Foundation.&#32;2025-03-26.&#32;[https://arcprize.org/blog/announcing-arc-agi-2-and-arc-prize-2025](https://arcprize.org/blog/announcing-arc-agi-2-and-arc-prize-2025).

2. ↑ [2.0](#cite_ref-technical_2-0) [2.1](#cite_ref-technical_2-1) [2.2](#cite_ref-technical_2-2) [2.3](#cite_ref-technical_2-3) [2.4](#cite_ref-technical_2-4) [2.5](#cite_ref-technical_2-5) [2.6](#cite_ref-technical_2-6) [2.7](#cite_ref-technical_2-7) [2.8](#cite_ref-technical_2-8) [2.9](#cite_ref-technical_2-9) Chollet, François
Knoop, Mike
Kamradt, Greg
Landers, Bryan
Pinkard, Henry (2025-05-17) "ARC-AGI-2
A New Challenge for Frontier AI Reasoning Systems". *arXiv*:[2505.11831](https://arxiv.org/abs/2505.11831).

3. ↑ [3.0](#cite_ref-guide_3-0) [3.1](#cite_ref-guide_3-1) [3.2](#cite_ref-guide_3-2) ["ARC Prize - Official Guide"](https://arcprize.org/guide).&#32;ARC Prize Foundation.&#32;[https://arcprize.org/guide](https://arcprize.org/guide).

4. ↑ [4.0](#cite_ref-intelligence_4-0) [4.1](#cite_ref-intelligence_4-1) [4.2](#cite_ref-intelligence_4-2) [4.3](#cite_ref-intelligence_4-3) Chollet, François (2019-11-05) "On the Measure of Intelligence". *arXiv*:[1911.01547](https://arxiv.org/abs/1911.01547).

5. ↑ [5.0](#cite_ref-2024report_5-0) [5.1](#cite_ref-2024report_5-1) [5.2](#cite_ref-2024report_5-2)  (2024-12-06) "ARC Prize 2024: Technical Report". *arXiv*:[2412.04604](https://arxiv.org/abs/2412.04604).

6. [↑](#cite_ref-o3breakthrough_6-0) ["OpenAI o3 Breakthrough High Score on ARC-AGI-Pub"](https://arcprize.org/blog/oai-o3-pub-breakthrough).&#32;ARC Prize Foundation.&#32;2024-12-20.&#32;[https://arcprize.org/blog/oai-o3-pub-breakthrough](https://arcprize.org/blog/oai-o3-pub-breakthrough).

7. ↑ [7.0](#cite_ref-foundation_7-0) [7.1](#cite_ref-foundation_7-1) ["ARC Prize Foundation - a North Star for AGI"](https://arcprize.org/blog/arc-prize-2025).&#32;ARC Prize Foundation.&#32;2025-01-08.&#32;[https://arcprize.org/blog/arc-prize-2025](https://arcprize.org/blog/arc-prize-2025).

8. [↑](#cite_ref-github_8-0) ["ARC-AGI-2 GitHub Repository"](https://github.com/arcprize/ARC-AGI-2).&#32;ARC Prize Foundation.&#32;[https://github.com/arcprize/ARC-AGI-2](https://github.com/arcprize/ARC-AGI-2).

## External Links

- [Official ARC Prize website](https://arcprize.org)

- [ARC-AGI-2 GitHub repository](https://github.com/arcprize/ARC-AGI-2)

- [ARC-AGI-2 Technical Paper](https://arxiv.org/abs/2505.11831)

- [ARC Prize 2025 Competition on Kaggle](https://kaggle.com/competitions/arc-prize-2025)