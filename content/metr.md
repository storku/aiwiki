---
title: "METR"
slug: "metr"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "AI_Safety_Organizations"
  - "Autonomy_Evaluation"
  - "Long-horizon_Task_Benchmarks"
  - "AI_Risk_Assessment"
  - "2022_Establishments"
  - "Nonprofit_Organizations"
---**

| METR |
| --- |
| Overview |
| Full name | Model Evaluation & Threat Research |
| Abbreviation | METR |
| Description | A nonprofit research organization evaluating frontier AI systems' autonomous capabilities and associated catastrophic risks |
| Release date | 2022 |
| Latest version | RE-Bench (2024-11) |
| Benchmark updated | 2025-01 |
| Authors | [Beth Barnes](/index.php?title=Beth_Barnes&action=edit&redlink=1), [METR research team](/index.php?title=METR_research_team&action=edit&redlink=1) |
| Organization | [METR (formerly ARC Evals)](/index.php?title=METR_(formerly_ARC_Evals)&action=edit&redlink=1) |
| Technical Details |
| Type | [Autonomy Evaluation](/index.php?title=Autonomy_Evaluation&action=edit&redlink=1), [Long-horizon Tasks](/index.php?title=Long-horizon_Tasks&action=edit&redlink=1), [AI Safety Assessment](/index.php?title=AI_Safety_Assessment&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1), [Multi-modal](/index.php?title=Multi-modal&action=edit&redlink=1) |
| Task format | [Interactive environments, Multi-step tasks, Research engineering](/index.php?title=Interactive_environments,_Multi-step_tasks,_Research_engineering&action=edit&redlink=1) |
| Number of tasks | 200+ task families, 2000+ individual tasks |
| Total examples | Varies by suite (7 in RE-Bench, 189 in HCAST) |
| Evaluation metric | [Task completion rate](/index.php?title=Task_completion_rate&action=edit&redlink=1), [Time horizon](/index.php?title=Time_horizon&action=edit&redlink=1), [Reliability threshold](/index.php?title=Reliability_threshold&action=edit&redlink=1) |
| Domains | [Software engineering](/index.php?title=Software_engineering&action=edit&redlink=1), [ML research](/index.php?title=ML_research&action=edit&redlink=1), [Cybersecurity](/wiki/cybersecurity), [AI R&D](/index.php?title=AI_R%26D&action=edit&redlink=1) |
| Languages | English, Python, Multiple programming languages |
| Performance |
| Human performance | Expert baseline established per task |
| Baseline | Task-dependent |
| SOTA score | ~50-minute time horizon |
| SOTA model | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) |
| SOTA date | 2024-11 |
| Saturated | No |
| Resources |
| Website | [Official website](https://metr.org/) |
| Paper | [Paper](https://arxiv.org/abs/2503.14499) |
| GitHub | [Repository](https://github.com/METR) |
| Dataset | [Download](https://github.com/METR/public-tasks) |
| License | Open source (varies by component) |
| Predecessor | [ARC Evals](/index.php?title=ARC_Evals&action=edit&redlink=1) |

METR** (**Model Evaluation and Threat Research**), pronounced "meter," is a nonprofit research organization specializing in evaluating [frontier AI systems](/index.php?title=Frontier_AI_systems&action=edit&redlink=1)' autonomous capabilities and their associated catastrophic risks. Founded in 2022 and spun off from the [Alignment Research Center](/index.php?title=Alignment_Research_Center&action=edit&redlink=1) in December 2023, METR develops scientific methods to assess AI systems' ability to complete complex, long-horizon tasks without human intervention[&#91;1&#93;](#cite_note-metr_main-1). The organization's groundbreaking work includes the development of the 50% task completion time horizon metric, which shows that AI capabilities for autonomous task completion have been doubling approximately every 7 months since 2019[&#91;2&#93;](#cite_note-metr_paper-2).

## Overview

METR addresses a critical gap in AI safety evaluation by systematically measuring how well AI systems can operate autonomously on real-world tasks that take humans hours, days, or even weeks to complete. Unlike traditional benchmarks that focus on discrete, short-duration problems, METR's evaluations simulate realistic working conditions where AI agents must navigate complex environments, use tools, recover from errors, and maintain coherent strategies over extended periods[&#91;3&#93;](#cite_note-lesswrong-3).

### Mission and Significance

METR's mission centers on understanding and quantifying the risks posed by increasingly capable autonomous AI systems. The organization serves as an independent third-party evaluator for major AI companies, providing crucial safety assessments before model deployments. Their work is particularly significant because:

- It provides early warning signals for dangerous capability emergence

- It enables evidence-based policy decisions about AI development

- It offers standardized methodologies for comparing human and AI performance

- It helps identify capability thresholds that could lead to catastrophic outcomes

## Organizational Structure

### History and Formation

METR's evolution reflects the growing recognition of autonomous AI capabilities as a critical safety concern:

| Year | Event | Significance |
| --- | --- | --- |
| 2022 | Founded as ARC Evals | Part of Alignment Research Center under Paul Christiano |
| 2023 | Evaluated [GPT-4](/wiki/gpt-4) | First major pre-deployment evaluation |
| 2023 (Dec) | Spun off as METR | Independent 501(c)(3) nonprofit status |
| 2024 | Released RE-Bench | First public benchmark with human baselines |
| 2025 | Published autonomy paper | Comprehensive analysis of capability trends |

### Leadership and Team

- CEO and Founder**: [Beth Barnes](/index.php?title=Beth_Barnes&action=edit&redlink=1)

Former [OpenAI](/wiki/openai) alignment researcher
Previously at [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)
Leading expert in AI safety evaluation
The organization employs researchers, engineers, and safety specialists with backgrounds in [machine learning](/wiki/machine_learning), [cybersecurity](/wiki/cybersecurity), and [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1).

## Evaluation Methodology

### The 50% Task Completion Time Horizon

METR's core innovation is the 50% task completion time horizon metric[&#91;2&#93;](#cite_note-metr_paper-2), which measures:

| Component | Description | Measurement |
| --- | --- | --- |
| **Time Horizon** | Length of tasks AI can complete | Measured in human-equivalent hours |
| **Reliability Threshold** | Success rate requirement | Typically 50% or 80% |
| **Human Baseline** | Expert completion time | Established through controlled studies |
| **Growth Rate** | Capability improvement over time | Currently doubling every ~7 months |

### Evaluation Process

METR's evaluation process follows a rigorous protocol:

1. **Task Selection**: Choose representative tasks from target domains
2. **Human Baseline**: Establish expert performance benchmarks
3. **Environment Setup**: Create reproducible evaluation environments
4. **Agent Evaluation**: Run AI systems through identical tasks
5. **Statistical Analysis**: Compare performance across metrics
6. **Capability Elicitation**: Apply post-training enhancements to avoid underestimation

## Benchmark Suites

### RE-Bench (Research Engineering Benchmark)

Released in November 2024, RE-Bench represents METR's most comprehensive public evaluation suite[&#91;4&#93;](#cite_note-rebench-4).

#### Task Environments

| Environment | Description | Human Time | Key Skills |
| --- | --- | --- | --- |
| **Scaling Laws** | Fit scaling laws to model performance data | 2-4 hours | Statistical analysis, ML theory |
| **GPU Kernels** | Optimize CUDA kernels for performance | 3-5 hours | Low-level programming, hardware knowledge |
| **Competition Code** | Solve programming competition problems | 1-3 hours | Algorithms, problem-solving |
| **ML Debugging** | Fix training pipeline issues | 2-4 hours | Debugging, ML engineering |
| **Architecture Design** | Design novel model architectures | 4-6 hours | Deep learning, experimentation |
| **Data Processing** | Build efficient data pipelines | 2-3 hours | Systems programming, optimization |
| **Research Replication** | Reproduce paper results | 4-8 hours | Scientific methodology, coding |

#### Performance Results (2024)

| Model | Average Score | Best Task | Worst Task | Time Horizon |
| --- | --- | --- | --- | --- |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 42% | GPU Kernels (68%) | Research Replication (12%) | ~50 minutes |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 38% | Competition Code (61%) | Scaling Laws (15%) | ~40 minutes |
| [o1-preview](/index.php?title=O1-preview&action=edit&redlink=1) | 35% | Competition Code (58%) | Architecture Design (8%) | ~35 minutes |
| Human Expert | 85% | Varies | Varies | N/A |
| Human Median | 65% | Varies | Varies | N/A |

### HCAST (Human-Calibrated Autonomy Software Tasks)

HCAST provides a broader evaluation across 189 diverse tasks[&#91;5&#93;](#cite_note-autonomy_guide-5).

#### Task Categories

| Category | Number of Tasks | Example Tasks | Difficulty Range |
| --- | --- | --- | --- |
| **Cybersecurity** | 45 | Vulnerability discovery, exploit development | Minutes to days |
| **AI R&D** | 38 | Model training, hyperparameter optimization | Hours to days |
| **Software Engineering** | 62 | Full-stack development, API integration | Minutes to hours |
| **General Reasoning** | 44 | Research synthesis, data analysis | Minutes to hours |

### METR Task Standard

The METR Task Standard provides a unified framework for task definition[&#91;6&#93;](#cite_note-task_standard-6):

```typescript
interface METRTask {

 name: string;
 description: string;
 instructions: string;
 resources: {
   cpu: number;
   memory: string;
   gpu?: boolean;
   auxVMs?: VMConfig[];
 };
 scoring: ScoringFunction;
 timeLimit: number;
 humanBaseline?: HumanPerformance;

}
```

## Capability Growth Analysis

### Exponential Progress Tracking

METR's research reveals consistent exponential growth in AI autonomous capabilities[&#91;2&#93;](#cite_note-metr_paper-2):

| Year | Representative Model | Time Horizon | Doubling Period |
| --- | --- | --- | --- |
| 2019 | GPT-2 | ~5 minutes | - |
| 2020 | GPT-3 | ~10 minutes | 12 months |
| 2022 | GPT-3.5 | ~20 minutes | 9 months |
| 2023 | GPT-4 | ~30 minutes | 8 months |
| 2024 | Claude 3.5 Sonnet | ~50 minutes | 7 months |
| 2025 (projected) | Next-gen models | ~90 minutes | 7 months |

### Critical Capability Thresholds

METR identifies several critical thresholds for autonomous capabilities:

| Threshold | Time Horizon | Risk Level | Potential Consequences |
| --- | --- | --- | --- |
| **Current** | 50 minutes | Low-Medium | Limited autonomous operation |
| **Near-term** | 40 hours | High | AI R&D acceleration |
| **Medium-term** | 1 week | Very High | Autonomous replication risk |
| **Long-term** | 1 month | Critical | Full autonomous agency |

## Threat Models and Safety Assessment

### Primary Threat Scenarios

METR evaluates AI systems against several catastrophic risk scenarios[&#91;1&#93;](#cite_note-metr_main-1):

#### Autonomous Replication and Adaptation (ARA)

- AI systems maintaining their own infrastructure

- Resource acquisition without human oversight

- Evasion of shutdown attempts

- Self-improvement capabilities

#### Rogue AI Scenarios

- Pursuit of misaligned goals

- Sabotage of AI safety research

- Weight exfiltration and unauthorized copying

- Human manipulation and deception

### Evaluation Categories

| Category | Capabilities Tested | Risk Assessment |
| --- | --- | --- |
| **Cyber Offense** | Vulnerability discovery, exploit development | High risk at week+ horizon |
| **ML R&D** | Model improvement, architecture search | Critical at 40-hour horizon |
| **Persuasion** | Human manipulation, social engineering | Moderate current risk |
| **Self-proliferation** | Resource acquisition, infrastructure setup | High risk at week+ horizon |

## Industry Partnerships and Impact

### Corporate Collaborations

METR works with leading AI companies on pre-deployment evaluations:

| Company | Models Evaluated | Collaboration Type |
| --- | --- | --- |
| [OpenAI](/wiki/openai) | GPT-4, GPT-5, o1 series | Pre-deployment safety assessment |
| [Anthropic](/wiki/anthropic) | Claude series | Capability evaluation |
| [DeepSeek](/wiki/deepseek) | DeepSeek-V3 | Preliminary assessment |
| Others | Various | Confidential evaluations |

### Policy Integration

METR's work influences AI governance at multiple levels:

- **International**: Recognized by 27 nations at the AI Seoul Summit

- **National**: Member of NIST AI Safety Institute Consortium

- **Corporate**: Integration with company safety frameworks

- **Academic**: Peer-reviewed research publications

## Technical Infrastructure

### Vivaria Platform (Legacy)

METR's original evaluation platform[&#91;7&#93;](#cite_note-vivaria-7):

- 100,000+ evaluation runs completed

- Docker-based containerization

- Web UI for visualization

- Being phased out in favor of Inspect

### Current Tools and Resources

| Tool | Purpose | Availability |
| --- | --- | --- |
| **Task Standard** | Standardized task format | Open source |
| **Public Tasks** | Example evaluations | ~20 tasks public |
| **RE-Bench** | Research engineering benchmark | Fully public |
| **Evaluation Guides** | Methodology documentation | Public documentation |

## Future Directions and Research

### Ongoing Projects

1. **Extended Time Horizons**: Evaluating week+ autonomous operation
2. **Multi-agent Scenarios**: Collaborative and competitive dynamics
3. **Real-world Deployment**: Field testing in controlled environments
4. **Capability Elicitation**: Advanced prompting and scaffolding techniques

### Research Priorities

| Priority | Description | Timeline |
| --- | --- | --- |
| **Dangerous Capabilities** | Comprehensive threat modeling | Ongoing |
| **Human-AI Comparison** | Improved baseline methodologies | 2025 |
| **Policy Integration** | Regulatory framework development | 2025-2026 |
| **Open Science** | Public dataset expansion | Continuous |

## Limitations and Challenges

### Current Limitations

1. **Ecological Validity**: Laboratory tasks may not fully represent real-world scenarios
2. **Capability Elicitation**: Difficulty in extracting maximum performance from models
3. **Human Baselines**: Variation in expert performance complicates comparisons
4. **Resource Constraints**: Expensive and time-consuming evaluations
5. **Rapid Obsolescence**: Fast AI progress quickly dates benchmarks

### Methodological Challenges

| Challenge | Description | Mitigation Strategy |
| --- | --- | --- |
| **Task Selection Bias** | Non-representative task choices | Diverse domain coverage |
| **Overfitting Risk** | Models trained on evaluation tasks | Private test sets |
| **Measurement Precision** | Uncertainty in time horizons | Statistical modeling |
| **Generalization** | From benchmarks to real capabilities | Multiple evaluation suites |

## Significance

METR represents a crucial evolution in AI safety evaluation, moving beyond traditional benchmarks to assess the autonomous capabilities that pose the greatest potential risks. By establishing rigorous methodologies for measuring long-horizon task completion and maintaining independence from AI developers, METR provides essential infrastructure for responsible AI development.

The organization's findings, particularly the exponential growth in autonomous capabilities with a doubling time of approximately 7 months, serve as a critical early warning system for the AI safety community. As AI systems approach human-level performance on increasingly complex tasks, METR's evaluations become ever more vital for informing policy decisions, corporate safety measures, and research priorities.

With projections suggesting AI systems could handle month-long tasks within 5-10 years if current trends continue, METR's work provides the empirical foundation necessary for navigating the transition to increasingly autonomous AI systems while minimizing catastrophic risks.

## See Also

- [AI Safety](/index.php?title=AI_Safety&action=edit&redlink=1)

- [Autonomous AI Systems](/index.php?title=Autonomous_AI_Systems&action=edit&redlink=1)

- [Alignment Research Center](/index.php?title=Alignment_Research_Center&action=edit&redlink=1)

- [Frontier AI](/index.php?title=Frontier_AI&action=edit&redlink=1)

- [AI Evaluation](/index.php?title=AI_Evaluation&action=edit&redlink=1)

- [Long-horizon Tasks](/index.php?title=Long-horizon_Tasks&action=edit&redlink=1)

- [Catastrophic Risk](/index.php?title=Catastrophic_Risk&action=edit&redlink=1)

- [Beth Barnes](/index.php?title=Beth_Barnes&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-metr_main_1-0) [1.1](#cite_ref-metr_main_1-1) METR. (2025). "Model Evaluation and Threat Research". Retrieved from [https://metr.org/](https://metr.org/)

2. ↑ [2.0](#cite_ref-metr_paper_2-0) [2.1](#cite_ref-metr_paper_2-1) [2.2](#cite_ref-metr_paper_2-2) METR Team. (2025). "Measuring AI Ability to Complete Long Tasks". arXiv:2503.14499. Retrieved from [https://arxiv.org/abs/2503.14499](https://arxiv.org/abs/2503.14499)

3. [↑](#cite_ref-lesswrong_3-0) METR. (2025). "METR: Measuring AI ability to complete long tasks". LessWrong. Retrieved from [https://www.lesswrong.com/posts/deesrjitvXM4xYGZd/metr-measuring-ai-ability-to-complete-long-tasks](https://www.lesswrong.com/posts/deesrjitvXM4xYGZd/metr-measuring-ai-ability-to-complete-long-tasks)

4. [↑](#cite_ref-rebench_4-0) METR. (2024). "RE-Bench: Research Engineering Benchmark". GitHub. Retrieved from [https://github.com/METR/RE-Bench](https://github.com/METR/RE-Bench)

5. [↑](#cite_ref-autonomy_guide_5-0) METR. (2025). "Autonomy Evaluations Guide". Retrieved from [https://metr.github.io/autonomy-evals-guide/](https://metr.github.io/autonomy-evals-guide/)

6. [↑](#cite_ref-task_standard_6-0) METR. (2024). "METR Task Standard". GitHub. Retrieved from [https://github.com/METR/task-standard](https://github.com/METR/task-standard)

7. [↑](#cite_ref-vivaria_7-0) METR. (2024). "Vivaria". GitHub. Retrieved from [https://github.com/METR/vivaria](https://github.com/METR/vivaria)

Cite error: `<ref>` tag with name "wikipedia" defined in `<references>` is not used in prior text.