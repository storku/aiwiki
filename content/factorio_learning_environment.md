---
title: "Factorio Learning Environment"
slug: "factorio_learning_environment"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Game-Based_AI_Evaluation"
  - "Long-term_Planning_Benchmarks"
  - "Resource_Optimization_Benchmarks"
  - "2025_Benchmarks"
  - "Open-Ended_Benchmarks"
---**

| Factorio Learning Environment |
| --- |
| Overview |
| Full name | Factorio Learning Environment |
| Abbreviation | FLE |
| Description | An open-ended AI evaluation environment based on Factorio testing long-term planning, program synthesis, and resource optimization |
| Release date | 2025-03-06 |
| Latest version | 1.0 |
| Benchmark updated | 2025-03 |
| Authors | [Jack Hopkins](/index.php?title=Jack_Hopkins&action=edit&redlink=1), [Mart Bakler](/index.php?title=Mart_Bakler&action=edit&redlink=1), [Akbir Khan](/index.php?title=Akbir_Khan&action=edit&redlink=1) |
| Organization | [Independent researchers](/index.php?title=Independent_researchers&action=edit&redlink=1) |
| Technical Details |
| Type | [Long-term Planning](/index.php?title=Long-term_Planning&action=edit&redlink=1), [Resource Optimization](/index.php?title=Resource_Optimization&action=edit&redlink=1), [Program Synthesis](/index.php?title=Program_Synthesis&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1), [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1) |
| Task format | [Game-based automation challenges](/index.php?title=Game-based_automation_challenges&action=edit&redlink=1) |
| Number of tasks | 8 lab-play tasks + open-ended factory building |
| Total examples | N/A (interactive environment) |
| Evaluation metric | [Task completion](/index.php?title=Task_completion&action=edit&redlink=1), [Factory size](/index.php?title=Factory_size&action=edit&redlink=1), [Resource throughput](/index.php?title=Resource_throughput&action=edit&redlink=1) |
| Domains | [Automation](/index.php?title=Automation&action=edit&redlink=1), [Manufacturing](/index.php?title=Manufacturing&action=edit&redlink=1), [Resource management](/index.php?title=Resource_management&action=edit&redlink=1), [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1) |
| Languages | English, Python API |
| Performance |
| Human performance | Expert players achieve millions of resources/second |
| Baseline | Basic automation only |
| SOTA score | Electric drilling automation |
| SOTA model | [Claude 3.5-Sonnet](/index.php?title=Claude_3.5-Sonnet&action=edit&redlink=1) |
| SOTA date | 2025-03 |
| Saturated | No |
| Resources |
| Website | [Official website](https://jackhopkins.github.io/factorio-learning-environment/) |
| Paper | [Paper](https://arxiv.org/abs/2503.09617) |
| GitHub | [Repository](https://github.com/JackHopkins/factorio-learning-environment) |
| Dataset | [N/A (procedural generation) Download] |
| License | Open source

 |

Factorio Learning Environment** (**FLE**) is an innovative [artificial intelligence](/wiki/artificial_intelligence) evaluation environment based on the popular automation game [Factorio](/index.php?title=Factorio&action=edit&redlink=1), designed to test [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) on complex, open-ended tasks involving long-term planning, [program synthesis](/index.php?title=Program_synthesis&action=edit&redlink=1), and resource optimization. Released in March 2025 by Jack Hopkins, Mart Bakler, and Akbir Khan[&#91;1&#93;](#cite_note-fle2025-1), FLE addresses the critical need for new benchmarks as existing evaluations become saturated by rapidly improving language models. The environment provides exponentially scaling challenges ranging from basic automation to complex factories processing millions of resources per second, revealing fundamental limitations in current AI systems' [spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1) and long-term planning capabilities.

## Overview

FLE leverages the rich complexity of Factorio, a game centered on building and optimizing automated production chains, to create an evaluation environment that tests capabilities poorly measured by traditional benchmarks. Unlike static question-answering or code generation tasks, FLE requires agents to navigate a dynamic world, manage resources, plan complex production pipelines, and continuously optimize their strategies over extended time horizons.

### Motivation

The creation of FLE was motivated by several factors:

- **Benchmark Saturation**: LLMs are rapidly achieving high scores on existing benchmarks

- **Limited Open-Endedness**: Most benchmarks have fixed upper bounds on performance

- **Poor Long-Term Evaluation**: Few benchmarks test planning over thousands of steps

- **Lack of Spatial Reasoning Tests**: Traditional benchmarks poorly evaluate spatial understanding

- **Real-World Complexity Gap**: Need for evaluations that mirror real-world complexity

## Environment Design

### Core Game Mechanics

FLE is built on Factorio's core mechanics, which provide a rich problem space:

| Mechanic | Description | AI Challenge |
| --- | --- | --- |
| Resource Extraction | Mining ore and gathering materials | Optimization and placement |
| Crafting System | Combining items to create complex products | Recipe planning and sequencing |
| Automation | Building machines and conveyor systems | Spatial layout and logistics |
| Research Tree | Unlocking new technologies | Strategic planning and prioritization |
| Power Management | Generating and distributing electricity | Resource allocation |
| Scaling | Exponential growth of production | Long-term optimization |

### Two Evaluation Settings

FLE provides two distinct evaluation modes to test different aspects of intelligence:

#### Lab-Play Mode

| Aspect | Details |
| --- | --- |
| **Tasks** | 8 structured challenges |
| **Resources** | Fixed, limited resources |
| **Objective** | Complete specific goals |
| **Focus** | Problem-solving under constraints |
| **Time Horizon** | Short to medium term |
| **Difficulty** | Progressive, from basic to complex |

The eight lab-play tasks test specific skills:
1. **Basic Crafting**: Create simple items from raw materials
2. **Automation Setup**: Build basic automated production
3. **Power Systems**: Establish electricity generation
4. **Circuit Manufacturing**: Create electronic circuits
5. **Advanced Automation**: Complex multi-stage production
6. **Logistics Networks**: Optimize material transport
7. **Research Goals**: Unlock specific technologies
8. **Efficiency Challenge**: Maximize output with minimal resources

#### Open-Play Mode

| Aspect | Details |
| --- | --- |
| **Task** | Build the largest possible factory |
| **Resources** | Procedurally generated infinite map |
| **Objective** | Maximize production throughput |
| **Focus** | Open-ended optimization |
| **Time Horizon** | Unbounded long-term |
| **Difficulty** | Self-scaling based on progress |

## Technical Implementation

### Agent Interface

FLE provides a Python API for agent interaction:

```python
from factorio_env import FactorioEnv

1. Initialize environment

env = FactorioEnv(mode='lab-play', task_id=1)

1. Agent interaction loop

observation = env.reset()
done = False

while not done:

   # Agent decides action based on observation
   action = agent.get_action(observation)
   
   # Execute action in environment
   observation, reward, done, info = env.step(action)
   
   # Action types include:
   # - move(direction)
   # - mine(position)
   # - craft(item, quantity)
   # - place(building, position)
   # - connect(pos1, pos2)  # For belts/pipes
   # - research(technology)

```

### Observation Space

Agents receive rich observations including:

| Observation Type | Information Provided | Format |
| --- | --- | --- |
| Map View | Local area around agent | 2D grid array |
| Inventory | Current items and quantities | Dictionary |
| Production Stats | Resource flow rates | Time series data |
| Research Status | Available and completed technologies | Tree structure |
| Power Grid | Electricity generation and consumption | Network graph |
| Recipe Book | Available crafting recipes | Structured database |

### Action Space

| Action Category | Examples | Complexity |
| --- | --- | --- |
| Movement | Walk, rotate | Low |
| Resource Gathering | Mine ore, chop trees | Low |
| Crafting | Create items from inventory | Medium |
| Building Placement | Place machines, belts, inserters | High |
| Configuration | Set machine recipes, circuit conditions | High |
| Research | Select technology to unlock | Strategic |

## Evaluation Results

### Model Performance (March 2025)

| Model | Lab-Play Success | Open-Play Achievement | Key Strengths | Key Weaknesses |
| --- | --- | --- | --- | --- |
| [Claude 3.5-Sonnet](/index.php?title=Claude_3.5-Sonnet&action=edit&redlink=1) | 3/8 tasks | Electric drilling automation | Complex crafting, research investment | Spatial layout errors |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 2/8 tasks | Basic automation only | Short-term planning | Poor error recovery |
| [GPT-4o-Mini](/index.php?title=GPT-4o-Mini&action=edit&redlink=1) | 1/8 tasks | Manual operation only | Basic crafting | Limited planning horizon |
| [Deepseek-v3](/index.php?title=Deepseek-v3&action=edit&redlink=1) | 2/8 tasks | Basic automation | Resource management | Spatial reasoning |
| [Gemini-2-Flash](/index.php?title=Gemini-2-Flash&action=edit&redlink=1) | 1/8 tasks | Manual operation | Fast execution | Complex automation failure |
| [Llama-3.3-70B](/index.php?title=Llama-3.3-70B&action=edit&redlink=1) | 1/8 tasks | Manual operation | Open-source best | Constrained reasoning |

### Key Findings

#### Spatial Reasoning Limitations

All evaluated models demonstrated significant spatial reasoning deficits[&#91;1&#93;](#cite_note-fle2025-1):

| Issue | Description | Frequency |
| --- | --- | --- |
| Collision Errors | Attempting to place objects in occupied spaces | 45% |
| Connectivity Failures | Improper belt/pipe connections | 38% |
| Layout Inefficiency | Suboptimal spatial arrangements | 62% |
| Distance Misjudgment | Incorrect range calculations | 31% |

#### Temporal Planning Challenges

| Planning Horizon | Success Rate | Limiting Factor |
| --- | --- | --- |
| Immediate (1-10 steps) | 85% | Good performance |
| Short-term (10-100 steps) | 45% | Error accumulation |
| Medium-term (100-1000 steps) | 12% | Lost context |
| Long-term (1000+ steps) | <5% | No coherent strategy |

### Open-Play Performance Analysis

In the unbounded open-play setting, [Claude 3.5-Sonnet](/index.php?title=Claude_3.5-Sonnet&action=edit&redlink=1) achieved the best results:

| Milestone | Step Count | Achievement |
| --- | --- | --- |
| Initial Setup | 0-500 | Manual resource gathering |
| Basic Automation | 500-1500 | Stone furnaces, manual feeding |
| Research Investment | 1500-3000 | Technology unlocking |
| **Electric Drilling** | 3000+ | Automated ore extraction |
| Production Boost | 3000-5000 | Increased iron plate output |
| Plateau | 5000+ | Failed to achieve next automation level |

Despite this progress, no model achieved complex automation milestones that human players routinely reach, such as:

- Electronic circuit manufacturing chains

- Oil processing and refining

- Robot-based logistics networks

- Nuclear power generation

## Comparison with Other Benchmarks

### Unique Characteristics

| Feature | FLE | Traditional Benchmarks |
| --- | --- | --- |
| Time Horizon | Thousands of steps | Single step or few steps |
| State Space | Continuous, high-dimensional | Discrete, limited |
| Objective | Open-ended optimization | Fixed target |
| Feedback | Delayed rewards | Immediate scoring |
| Complexity Growth | Exponential | Linear or fixed |
| Spatial Reasoning | Critical | Minimal or absent |

### Complementary Evaluations

| Benchmark | Focus | Similarity to FLE |
| --- | --- | --- |
| [MineDojo](/index.php?title=MineDojo&action=edit&redlink=1) | Minecraft tasks | Game-based, open-world |
| [NetHack Learning Environment](/index.php?title=NetHack_Learning_Environment&action=edit&redlink=1) | Roguelike gameplay | Sequential decision-making |
| [ALFRED](/index.php?title=ALFRED&action=edit&redlink=1) | Household tasks | Spatial reasoning, planning |
| [BabyAI](/index.php?title=BabyAI&action=edit&redlink=1) | Instruction following | Multi-step goals |
| [Crafter](/index.php?title=Crafter&action=edit&redlink=1) | Survival game | Resource management |

## Insights and Implications

### Revealed Limitations

FLE exposes several fundamental limitations in current LLMs:

1. **Spatial Reasoning Deficit**: Models struggle with 2D spatial relationships despite handling complex language tasks
2. **Error Recovery**: Poor ability to diagnose and correct mistakes in constrained environments
3. **Long-Term Coherence**: Strategies deteriorate over extended time horizons
4. **Compositional Planning**: Difficulty combining simple skills into complex behaviors
5. **Resource Optimization**: Suboptimal allocation and prioritization decisions

### Promising Capabilities

Despite limitations, models demonstrated some encouraging abilities:

| Capability | Evidence | Implications |
| --- | --- | --- |
| Basic Automation Understanding | Successful simple crafting | Foundation for complex systems |
| Research Prioritization | Strategic technology unlocking | Goal-directed behavior |
| Incremental Improvement | Production increases over time | Learning from environment |
| Tool Use | Utilizing game mechanics | Adaptation to interfaces |

## Installation and Usage

### Installation

FLE can be installed via pip:

```bash

1. Install via pip

pip install factorio-learning-environment

1. Or using uv

uv add factorio-learning-environment
```

### Basic Usage Example

```python
import factorio_env as fle

1. Create environment

env = fle.FactorioEnv(

   mode='lab-play',
   task_id=1,
   render_mode='human'  # For visualization

)

1. Run evaluation

observation = env.reset()
total_reward = 0

for step in range(10000):

   # Your agent logic here
   action = agent.policy(observation)
   
   observation, reward, done, info = env.step(action)
   total_reward += reward
   
   if done:
       print(f"Task completed! Total reward: {total_reward}")
       break

```

## Future Directions

### Planned Enhancements

| Enhancement | Description | Timeline |
| --- | --- | --- |
| Multi-Agent Support | Cooperative factory building | 2025 Q4 |
| Combat Scenarios | Defense against biters | 2026 Q1 |
| Mod Support | Custom content and rules | 2026 Q2 |
| Curriculum Learning | Progressive difficulty tasks | Ongoing |
| Human Demonstrations | Learning from expert play | Research phase |

### Research Opportunities

1. **Hybrid Approaches**: Combining LLMs with specialized spatial reasoning modules
2. **Hierarchical Planning**: Multi-level goal decomposition strategies
3. **Memory Systems**: External memory for long-term planning
4. **Program Synthesis**: Generating automation blueprints
5. **Transfer Learning**: Applying Factorio skills to other domains

## Significance

FLE represents a crucial step toward more realistic AI evaluation, moving beyond saturated benchmarks to test capabilities essential for real-world applications. By requiring agents to plan over extended time horizons, manage complex spatial relationships, and continuously optimize in an open-ended environment, FLE reveals that despite impressive progress in language understanding, current AI systems still lack fundamental reasoning capabilities that humans take for granted.

The benchmark's exponentially scaling challenges ensure it will remain relevant as AI capabilities improve, while its open-ended nature provides a rich playground for developing and testing new approaches to machine intelligence. As models struggle with tasks that experienced Factorio players find routine, FLE serves as both a humbling reminder of current limitations and a concrete target for advancing toward more capable AI systems.

## See Also

- [Factorio](/index.php?title=Factorio&action=edit&redlink=1)

- [Long-term Planning](/index.php?title=Long-term_Planning&action=edit&redlink=1)

- [Resource Optimization](/index.php?title=Resource_Optimization&action=edit&redlink=1)

- [Game-Based AI Evaluation](/index.php?title=Game-Based_AI_Evaluation&action=edit&redlink=1)

- [Spatial Reasoning](/index.php?title=Spatial_Reasoning&action=edit&redlink=1)

- [Open-Ended Learning](/index.php?title=Open-Ended_Learning&action=edit&redlink=1)

- [MineDojo](/index.php?title=MineDojo&action=edit&redlink=1)

- [NetHack Learning Environment](/index.php?title=NetHack_Learning_Environment&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-fle2025_1-0) [1.1](#cite_ref-fle2025_1-1) Hopkins, J., Bakler, M., & Khan, A. (2025). "Factorio Learning Environment". arXiv:2503.09617. Retrieved from [https://arxiv.org/abs/2503.09617](https://arxiv.org/abs/2503.09617)

Cite error: `<ref>` tag with name "github" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "website" defined in `<references>` is not used in prior text.