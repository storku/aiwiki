---
title: "ARC-AGI 3"
slug: "arc-agi_3"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Interactive_Reasoning_Benchmarks"
  - "Game-Based_AI_Evaluation"
  - "General_Intelligence_Benchmarks"
  - "2026_Benchmarks"
  - "Upcoming_Benchmarks"
---**

| ARC-AGI 3 |
| --- |
| Overview |
| Full name | Abstraction and Reasoning Corpus for Artificial General Intelligence - Version 3 (Interactive Reasoning Benchmark) |
| Abbreviation | ARC-AGI-3 / IRB |
| Description | An interactive reasoning benchmark using game environments to test AI's skill-acquisition efficiency in novel situations |
| Release date | 2026 (planned) |
| Latest version | Preview (6 games) |
| Benchmark updated | 2025 |
| Authors | [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1), [Mike Knoop and team](/index.php?title=Mike_Knoop_and_team&action=edit&redlink=1) |
| Organization | [ARC Prize Foundation (non-profit)](/index.php?title=ARC_Prize_Foundation_(non-profit)&action=edit&redlink=1) |
| Technical Details |
| Type | [Interactive Reasoning](/index.php?title=Interactive_Reasoning&action=edit&redlink=1), [Game-based Intelligence](/index.php?title=Game-based_Intelligence&action=edit&redlink=1), [Adaptive Learning](/index.php?title=Adaptive_Learning&action=edit&redlink=1) |
| Modality | [Interactive games](/index.php?title=Interactive_games&action=edit&redlink=1), [Visual](/index.php?title=Visual&action=edit&redlink=1), [Action-based](/index.php?title=Action-based&action=edit&redlink=1) |
| Task format | [Game environments requiring exploration and goal achievement](/index.php?title=Game_environments_requiring_exploration_and_goal_achievement&action=edit&redlink=1) |
| Number of tasks | ~100 environments (planned), 6 in preview |
| Total examples | N/A (learning through interaction) |
| Evaluation metric | [Task completion](/index.php?title=Task_completion&action=edit&redlink=1), [Learning efficiency](/index.php?title=Learning_efficiency&action=edit&redlink=1), [Goal achievement](/index.php?title=Goal_achievement&action=edit&redlink=1) |
| Domains | [Exploration](/index.php?title=Exploration&action=edit&redlink=1), [Planning](/index.php?title=Planning&action=edit&redlink=1), [Memory](/index.php?title=Memory&action=edit&redlink=1), [Goal acquisition](/index.php?title=Goal_acquisition&action=edit&redlink=1), [Alignment](/index.php?title=Alignment&action=edit&redlink=1) |
| Languages | Language-agnostic (game-based) |
| Performance |
| Human performance | Quick solving (minutes) |
| Baseline | Near 0% (current AI) |
| SOTA score | <5%
Property "SOTA score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA model | [Unknown entry](/index.php?title=Unknown_entry&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://arcprize.org/arc-agi/3/) |
| Paper | [TBD Paper] |
| GitHub | [Repository](https://three.arcprize.org/) |
| Dataset | [Download](https://three.arcprize.org/) |
| License | TBD |
| Predecessor | [ARC-AGI 2](/wiki/arc-agi_2) |

ARC-AGI 3** is an innovative [interactive reasoning benchmark](/index.php?title=Interactive_reasoning_benchmark&action=edit&redlink=1) (IRB) designed to evaluate [artificial general intelligence](/wiki/artificial_general_intelligence) through game-based environments that test an AI system's ability to learn, adapt, and achieve goals in novel situations without prior instructions. Created by [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1), [Mike Knoop](/index.php?title=Mike_Knoop&action=edit&redlink=1) (co-founder of [Zapier](/index.php?title=Zapier&action=edit&redlink=1)), and the [ARC Prize Foundation](/index.php?title=ARC_Prize_Foundation&action=edit&redlink=1) (a non-profit organization), ARC-AGI 3 represents a fundamental paradigm shift from static puzzle-solving to dynamic, interactive evaluation of intelligence. Set to fully launch in 2026 with approximately 100 unique game environments, it currently offers a developer preview with 6 games that consistently stump state-of-the-art AI systems while being easily solvable by humans[&#91;1&#93;](#cite_note-arc3main-1).

## Overview

ARC-AGI 3 pioneers the concept of Interactive Reasoning Benchmarks (IRBs), moving beyond the static grid-based puzzles of [ARC-AGI 1](/wiki/arc-agi_1) and [ARC-AGI 2](/wiki/arc-agi_2) to create a rich, game-based medium for testing experience-driven competence. The benchmark measures "skill-acquisition efficiency", how quickly an AI can understand and master completely new environments, mirroring the human ability to rapidly learn unfamiliar games through exploration and experimentation[&#91;2&#93;](#cite_note-decoder2025-2).

### Evolution from Previous Versions

| Version | Format | Focus | Key Innovation |
| --- | --- | --- | --- |
| [ARC-AGI 1](/wiki/arc-agi_1) | Static grid puzzles | Pattern recognition | Minimal examples |
| [ARC-AGI 2](/wiki/arc-agi_2) | Enhanced grid puzzles | Harder abstractions | Expanded task set |
| **ARC-AGI 3** | Interactive games | Adaptive learning | Dynamic environments |

The transition to interactive environments addresses limitations of static benchmarks by requiring AI systems to:

- Discover game mechanics through trial and error

- Adapt strategies based on feedback

- Pursue goals without explicit instructions

- Demonstrate genuine understanding through action

## Design Philosophy

### Core Principles

ARC-AGI 3 is built on five fundamental capabilities that define intelligent behavior:

| Capability | Description | Why It Matters |
| --- | --- | --- |
| **Exploration** | Discovering environment mechanics through interaction | Essential for learning without instructions |
| **Perception → Planning → Action** | Processing information, forming strategies, executing decisions | Core cognitive loop |
| **Memory** | Retaining and utilizing learned information | Enables skill accumulation |
| **Goal Acquisition** | Understanding and pursuing objectives autonomously | Demonstrates intentionality |
| **Alignment** | Adapting behavior to achieve desired outcomes | Shows genuine understanding |

### Interactive Reasoning Paradigm

Unlike traditional benchmarks that present static problems, ARC-AGI 3's interactive approach:

- **No Prior Instructions**: Agents must discover objectives through exploration

- **Real-time Feedback**: Actions produce immediate environmental responses

- **Multi-step Solutions**: Success requires sequential decision-making

- **Emergent Complexity**: Simple rules create rich problem spaces

## Benchmark Structure

### Current Preview (2025)

The developer preview includes 6 games:

| Status | Number | Availability | Purpose |
| --- | --- | --- | --- |
| Public Games | 3 | Currently available | Testing and development |
| Private Games | 3 | August 2025 release | Competition evaluation |

### Full Release Plan (2026)

| Component | Quantity | Description |
| --- | --- | --- |
| Total Environments | ~100 | Diverse game types and mechanics |
| Public Set | ~50 | Open for research and development |
| Private Set | ~50 | Reserved for official evaluation |
| Difficulty Range | Variable | From simple to complex mechanics |

## Game Design Principles

### Key Characteristics

Each ARC-AGI 3 game environment is designed with specific properties:

| Property | Implementation | Rationale |
| --- | --- | --- |
| **Simplicity** | Minimalist graphics and mechanics | Focus on reasoning, not perception |
| **Novelty** | Unique, unpublished game mechanics | Prevents memorization |
| **Learnability** | Humans solve in minutes | Tests genuine intelligence gap |
| **Determinism** | Consistent rules and physics | Enables systematic learning |
| **Objectivity** | Clear success/failure states | Unambiguous evaluation |

### Example Game Categories

While specific games remain confidential to prevent pre-training, categories include:

| Category | Description | Cognitive Skills Tested |
| --- | --- | --- |
| Physics Puzzles | Manipulate objects with realistic physics | Causal reasoning, prediction |
| Navigation Tasks | Find paths through dynamic mazes | Spatial reasoning, planning |
| Resource Management | Collect and utilize limited resources | Optimization, strategy |
| Pattern Games | Discover and exploit hidden rules | Abstraction, generalization |
| Multi-agent Scenarios | Interact with other entities | Theory of mind, adaptation |

## Evaluation Methodology

### Performance Metrics

| Metric | Description | Measurement |
| --- | --- | --- |
| **Task Completion** | Successfully achieving game objectives | Binary success/failure |
| **Learning Efficiency** | Steps/time to first success | Lower is better |
| **Consistency** | Maintaining performance across attempts | Success rate |
| **Generalization** | Transfer between similar games | Cross-game performance |
| **Exploration Quality** | Systematic vs. random exploration | Action diversity metrics |

### Evaluation Protocol

1. **Initialization**: Agent enters unknown game environment
2. **Exploration Phase**: Discover mechanics through interaction
3. **Learning Phase**: Develop understanding of rules and objectives
4. **Execution Phase**: Apply learned knowledge to achieve goals
5. **Verification**: Assess consistency across multiple runs

## Current Performance

### AI vs. Human Comparison (2025 Preview)

| Performer | Success Rate | Time to Solution | Notes |
| --- | --- | --- | --- |
| Humans | ~100% | Minutes | Intuitive understanding |
| Current AI Systems | <5% | Usually fail | Cannot discover objectives |
| Best AI Entry | ~5% | Hours | Unknown methodology |
| [GPT-4](/wiki/gpt-4) class models | ~0% | N/A | Fail to understand format |

The stark performance gap demonstrates that despite remarkable progress on static benchmarks like [ARC-AGI 1](/wiki/arc-agi_1), current AI systems fundamentally lack the adaptive intelligence required for novel interactive environments[&#91;2&#93;](#cite_note-decoder2025-2).

### Why AI Systems Struggle

| Challenge | Description | AI Limitation |
| --- | --- | --- |
| **No Training Data** | Games are novel and unpublished | Cannot rely on memorization |
| **Implicit Objectives** | Goals must be discovered | Lack autonomous exploration |
| **Sequential Learning** | Require building on discoveries | Poor credit assignment |
| **Real-time Adaptation** | Must adjust strategies dynamically | Limited online learning |
| **Causal Understanding** | Need to model cause-effect | Correlation-based learning fails |

## Development and Community

### Preview Agent Competition

The ARC Prize Foundation, in collaboration with [Hugging Face](/wiki/hugging_face), hosted a Preview Agent Competition in 2025:

| Aspect | Details |
| --- | --- |
| **Duration** | Early 2025 - August 19, 2025 |
| **Participants** | Open to all researchers |
| **Partners** | Hugging Face (developer preview collaboration) |
| **Objective** | Develop agents for preview games |
| **Results** | Most entries failed completely |
| **Winner** | Unknown entry with ~5% success |

### Community Contributions

The ARC Prize Foundation actively seeks community involvement:

| Contribution Type | Description | Impact |
| --- | --- | --- |
| **Game Design** | Create new test environments | Expands benchmark diversity |
| **Agent Development** | Build and test AI systems | Advances solution approaches |
| **Research** | Theoretical work on interactive reasoning | Deepens understanding |
| **Funding** | Donations above $5,000 fund new games | Enables expansion |

## Technical Implementation

### Game Engine Architecture

```python

1. Conceptual ARC-AGI 3 game interface

class ARC3Game:

   def __init__(self):
       self.state = self.reset()
       
   def reset(self):
       """Initialize game to starting state"""
       return initial_state
       
   def step(self, action):
       """Execute action and return new state"""
       new_state = self.physics_engine(self.state, action)
       reward = self.evaluate_progress(new_state)
       done = self.check_completion(new_state)
       return new_state, reward, done
       
   def render(self):
       """Visualize current game state"""
       return visual_representation(self.state)

```

### Agent Interface

```python
class ARC3Agent:

   def __init__(self):
       self.memory = []
       self.strategy = None
       
   def perceive(self, observation):
       """Process game state"""
       features = self.extract_features(observation)
       self.memory.append(features)
       
   def plan(self):
       """Determine next action based on learning"""
       if not self.strategy:
           return self.explore()  # Random exploration
       return self.exploit()  # Use learned strategy
       
   def act(self, game):
       """Execute planned action"""
       action = self.plan()
       return game.step(action)

```

## Theoretical Framework

### Intelligence as Skill Acquisition

ARC-AGI 3 embodies Chollet's definition of intelligence as "skill-acquisition efficiency"[&#91;3&#93;](#cite_note-chollet2019-3):

| Component | Measurement in ARC-AGI 3 |
| --- | --- |
| **Generalization** | Success on novel games |
| **Learning Speed** | Steps to first success |
| **Prior Efficiency** | Leveraging basic physics/logic |
| **Adaptation** | Adjusting to game variations |
| **Transfer** | Applying knowledge across games |

### Comparison with Other Paradigms

| Paradigm | Focus | Limitation | ARC-AGI 3 Advantage |
| --- | --- | --- | --- |
| Supervised Learning | Pattern matching | Requires labeled data | No labels needed |
| Reinforcement Learning | Reward optimization | Needs many episodes | Few-shot learning |
| Language Models | Text prediction | No embodied reasoning | Physical interaction |
| Vision Models | Image understanding | Static analysis | Dynamic environments |

## Impact and Significance

### Implications for AGI Research

ARC-AGI 3's interactive approach has profound implications:

1. **Embodied Intelligence**: Demonstrates need for action-based learning
2. **Exploration vs. Exploitation**: Highlights importance of curiosity
3. **Causal Reasoning**: Shows limitations of correlation-based learning
4. **Transfer Learning**: Tests true generalization capabilities
5. **Autonomy**: Measures genuine goal-directed behavior

### Relationship to Real-World Intelligence

| Real-World Skill | ARC-AGI 3 Analog | Why It Matters |
| --- | --- | --- |
| Learning new software | Discovering game mechanics | Adaptation to novel interfaces |
| Scientific discovery | Exploring cause-effect | Hypothesis testing |
| Problem solving | Achieving game objectives | Goal-directed reasoning |
| Tool use | Manipulating game objects | Understanding affordances |

## Future Directions

### Roadmap to 2026

| Timeline | Milestone | Description |
| --- | --- | --- |
| Q3 2025 | Private games release | 3 additional preview games |
| Q4 2025 | Community beta | Expanded testing with ~20 games |
| Q1 2026 | Full dataset completion | 100 games finalized |
| Q2 2026 | Official launch | Public competition begins |
| 2026+ | Continuous expansion | Community-contributed games |

### Research Opportunities

1. **Curiosity-Driven Learning**: Developing intrinsic motivation systems
2. **World Models**: Building internal representations of game physics
3. **Meta-Learning**: Learning to learn new games efficiently
4. **Compositional Reasoning**: Combining learned skills
5. **Human-AI Collaboration**: Hybrid approaches to game solving

## Challenges and Limitations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **Limited Preview** | Only 6 games available | Insufficient for robust testing |
| **Game Complexity** | Simple 2D environments | May not capture all intelligence aspects |
| **Discrete Actions** | Limited action spaces | Doesn't test continuous control |
| **Single-Agent Focus** | Most games are solo | Limited social reasoning |

### Open Questions

- Can success on ARC-AGI 3 predict real-world capability?

- What is the minimum architecture for interactive reasoning?

- How much compute is needed for human-level performance?

- Can language models be adapted for game-based reasoning?

## Significance

ARC-AGI 3 represents a crucial evolution in AGI evaluation, moving from static pattern recognition to dynamic, interactive reasoning. By requiring AI systems to learn through exploration and achieve goals without instructions, it exposes fundamental limitations in current approaches while pointing toward new research directions. The benchmark's emphasis on skill-acquisition efficiency in novel environments directly addresses core aspects of general intelligence that have proven elusive for existing AI systems.

The near-complete failure of current AI on tasks that humans solve effortlessly underscores how far we remain from achieving artificial general intelligence, despite impressive progress on other benchmarks. ARC-AGI 3 stands as both a humbling reminder of this gap and a concrete target for advancing toward truly intelligent systems.

## See Also

- [ARC-AGI 1](/wiki/arc-agi_1)

- [ARC-AGI 2](/wiki/arc-agi_2)

- [Interactive Reasoning](/index.php?title=Interactive_Reasoning&action=edit&redlink=1)

- [François Chollet](/index.php?title=Fran%C3%A7ois_Chollet&action=edit&redlink=1)

- [Artificial General Intelligence](/index.php?title=Artificial_General_Intelligence&action=edit&redlink=1)

- [Game-Based AI Evaluation](/index.php?title=Game-Based_AI_Evaluation&action=edit&redlink=1)

- [Skill Acquisition](/index.php?title=Skill_Acquisition&action=edit&redlink=1)

- [ARC Prize](/index.php?title=ARC_Prize&action=edit&redlink=1)

## References

1. [↑](#cite_ref-arc3main_1-0) ARC Prize. (2025). "ARC-AGI-3: Interactive Reasoning Benchmark". Retrieved from [https://arcprize.org/arc-agi/3/](https://arcprize.org/arc-agi/3/)

2. ↑ [2.0](#cite_ref-decoder2025_2-0) [2.1](#cite_ref-decoder2025_2-1) The Decoder. (2025). "New ARC-AGI-3 benchmark shows that humans still outperform LLMs at pretty basic thinking". Retrieved from [https://the-decoder.com/new-arc-agi-3-benchmark-shows-that-humans-still-outperform-llms-at-pretty-basic-thinking/](https://the-decoder.com/new-arc-agi-3-benchmark-shows-that-humans-still-outperform-llms-at-pretty-basic-thinking/)

3. [↑](#cite_ref-chollet2019_3-0) Chollet, F. (2019). "On the Measure of Intelligence". arXiv:1911.01547. Retrieved from [https://arxiv.org/abs/1911.01547](https://arxiv.org/abs/1911.01547)

Cite error: `<ref>` tag with name "preview" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "eweek2025" defined in `<references>` is not used in prior text.