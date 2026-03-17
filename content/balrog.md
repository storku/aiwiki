---
title: "BALROG"
slug: "balrog"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Game-Based_AI_Evaluation"
  - "Agentic_AI_Benchmarks"
  - "Vision-Language_Model_Benchmarks"
  - "2024_Benchmarks"
  - "Multi-Game_Benchmarks"
---**

| BALROG |
| --- |
| Overview |
| Full name | Benchmarking Agentic LLM and VLM Reasoning On Games |
| Abbreviation | BALROG |
| Description | A benchmark evaluating agentic LLM and VLM capabilities through diverse challenging game environments |
| Release date | 2024-11 |
| Latest version | 1.0 |
| Benchmark updated | 2025-04 |
| Authors | [Davide Paglieri](/index.php?title=Davide_Paglieri&action=edit&redlink=1), [Bartłomiej Cupiał](/index.php?title=Bart%C5%82omiej_Cupia%C5%82&action=edit&redlink=1), [Sam Coward](/index.php?title=Sam_Coward&action=edit&redlink=1), [Ulyana Piterbarg](/index.php?title=Ulyana_Piterbarg&action=edit&redlink=1), [Maciej Wołczyk](/index.php?title=Maciej_Wo%C5%82czyk&action=edit&redlink=1), [Akbir Khan](/index.php?title=Akbir_Khan&action=edit&redlink=1), [Eduardo Pignatelli](/index.php?title=Eduardo_Pignatelli&action=edit&redlink=1), [Łukasz Kuciński](/index.php?title=%C5%81ukasz_Kuci%C5%84ski&action=edit&redlink=1), [Lerrel Pinto](/index.php?title=Lerrel_Pinto&action=edit&redlink=1), [Rob Fergus](/index.php?title=Rob_Fergus&action=edit&redlink=1), [Jakob Nicolaus Foerster](/index.php?title=Jakob_Nicolaus_Foerster&action=edit&redlink=1), [Jack Parker-Holder](/index.php?title=Jack_Parker-Holder&action=edit&redlink=1), [Tim Rocktäschel](/index.php?title=Tim_Rockt%C3%A4schel&action=edit&redlink=1) |
| Organization | [UCL DARK Lab](/index.php?title=UCL_DARK_Lab&action=edit&redlink=1), [Oxford](/index.php?title=Oxford&action=edit&redlink=1), [NYU](/index.php?title=NYU&action=edit&redlink=1) |
| Technical Details |
| Type | [Agentic Reasoning](/index.php?title=Agentic_Reasoning&action=edit&redlink=1), [Game-Based Evaluation](/index.php?title=Game-Based_Evaluation&action=edit&redlink=1), [Long-Horizon Planning](/index.php?title=Long-Horizon_Planning&action=edit&redlink=1) |
| Modality | [Text (LLM)](/index.php?title=Text_(LLM)&action=edit&redlink=1), [Vision + Text (VLM)](/index.php?title=Vision_%2B_Text_(VLM)&action=edit&redlink=1) |
| Task format | [Interactive game environments](/index.php?title=Interactive_game_environments&action=edit&redlink=1) |
| Number of tasks | 6 game environments (procedurally generated instances) |
| Total examples | Unlimited (procedural generation) |
| Evaluation metric | [Progress percentage](/index.php?title=Progress_percentage&action=edit&redlink=1), [Task completion](/index.php?title=Task_completion&action=edit&redlink=1) |
| Domains | [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1), [Planning](/index.php?title=Planning&action=edit&redlink=1), [Exploration](/index.php?title=Exploration&action=edit&redlink=1), [Problem-solving](/index.php?title=Problem-solving&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Non-expert: seconds to minutes; Expert: varies by game |
| Baseline | Varies by environment |
| SOTA score | 43.6% (LLM), 35.7% (VLM) |
| SOTA model | [Grok-4 (LLM), Gemini-2.5-Pro-Exp-03-25 (VLM)](/index.php?title=Grok-4_(LLM),_Gemini-2.5-Pro-Exp-03-25_(VLM)&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://balrogai.com/) |
| Paper | [Paper](https://arxiv.org/abs/2411.13543) |
| GitHub | [Repository](https://github.com/balrog-ai/BALROG) |
| Dataset | [N/A (procedural generation) Download] |
| License | Open source

 |

BALROG** (**Benchmarking Agentic LLM and VLM Reasoning On Games**) is a comprehensive [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate the agentic capabilities of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) and [vision-language models](/index.php?title=Vision-language_models&action=edit&redlink=1) (VLMs) through diverse and challenging game environments. Released in November 2024 by researchers from [University College London](/index.php?title=University_College_London&action=edit&redlink=1)'s DARK Lab, [Oxford University](/index.php?title=Oxford_University&action=edit&redlink=1), and [New York University](/index.php?title=New_York_University&action=edit&redlink=1)[&#91;1&#93;](#cite_note-balrog2024-1), BALROG addresses the critical need to assess AI systems' ability to plan, reason spatially, and explore in dynamic, interactive environments over extended time horizons.

## Overview

BALROG represents a significant advancement in AI evaluation by moving beyond static benchmarks to test models in interactive, procedurally generated game environments. The benchmark incorporates six diverse games ranging from simple grid-based tasks solvable by non-experts in seconds to complex roguelike adventures that take humans years to master. By requiring agents to make sequential decisions, adapt to changing environments, and pursue long-term goals, BALROG reveals fundamental limitations in current AI systems' reasoning and decision-making capabilities.

### Key Innovation

Unlike traditional benchmarks that can be solved through memorization or pattern matching, BALROG's procedurally generated environments ensure that models must genuinely understand and reason about their surroundings. The benchmark uniquely offers both text-based (LLM) and vision-based (VLM) evaluation modes, enabling direct comparison of how different input modalities affect agent performance.

## Game Environments

BALROG evaluates agents across six carefully selected game environments, each testing different aspects of intelligence:

### Environment Details

| Game | Type | Difficulty | Key Skills Tested | Time to Master |
| --- | --- | --- | --- | --- |
| [BabyAI](/index.php?title=BabyAI&action=edit&redlink=1) | Grid-based instruction following | Easy | Language understanding, navigation | Minutes |
| [Crafter](/index.php?title=Crafter&action=edit&redlink=1) | Survival crafting game | Medium | Resource management, planning | Hours |
| [TextWorld](/index.php?title=TextWorld&action=edit&redlink=1) | Text adventure | Medium | Natural language understanding, exploration | Hours |
| [Baba Is AI](/index.php?title=Baba_Is_AI&action=edit&redlink=1) | Rule manipulation puzzle | Hard | Logical reasoning, creativity | Days |
| [MiniHack](/index.php?title=MiniHack&action=edit&redlink=1) | Roguelike dungeon crawler | Hard | Tactical planning, adaptation | Weeks |
| [NetHack](/index.php?title=NetHack&action=edit&redlink=1) | Complex roguelike | Extreme | Long-term strategy, vast knowledge | Years |

### Why These Games?

Each game was selected for specific reasons:

| Game | Selection Rationale | Unique Contribution |
| --- | --- | --- |
| BabyAI | Tests basic instruction following | Baseline language grounding |
| Crafter | Open-ended survival challenges | Resource optimization |
| TextWorld | Pure text-based reasoning | Language-only evaluation |
| Baba Is AI | Meta-level rule manipulation | Abstract reasoning |
| MiniHack | Controlled complexity roguelike | Tactical decision-making |
| NetHack | Ultimate complexity test | Long-horizon planning |

## Evaluation Methodology

### Performance Metrics

BALROG uses several metrics to evaluate agent performance:

| Metric | Description | Calculation |
| --- | --- | --- |
| **Progress %** | Percentage of game objectives completed | (Completed objectives / Total objectives) × 100 |
| **Success Rate** | Binary task completion | Number of successful runs / Total runs |
| **Efficiency** | Steps taken to achieve goals | Compared to human baseline |
| **Exploration** | Coverage of game state space | Unique states visited / Possible states |
| **Adaptation** | Learning from failures | Performance improvement over episodes |

### Evaluation Protocol

1. **Environment Initialization**: Random seed generates unique game instance
2. **Agent Deployment**: Model receives initial observation
3. **Action Loop**: Agent takes actions based on observations
4. **Feedback Processing**: Environment provides new state and rewards
5. **Termination**: Episode ends on success, failure, or timeout
6. **Aggregation**: Results averaged across multiple random seeds

### Input Modalities

BALROG supports two evaluation modes:

| Mode | Input Type | Advantages | Challenges |
| --- | --- | --- | --- |
| **LLM Mode** | Text descriptions | Rich semantic information | Lacks spatial details |
| **VLM Mode** | Visual + text | Complete information | Requires visual reasoning |

## Performance Results

### Current Leaderboard (2025)

#### LLM Performance

| Rank | Model | Overall Progress % | BabyAI | Crafter | TextWorld | Baba Is AI | MiniHack | NetHack |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [Grok-4](/index.php?title=Grok-4&action=edit&redlink=1) | 43.6% | 82% | 45% | 68% | 35% | 28% | 4% |
| 2 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 41.2% | 78% | 42% | 65% | 32% | 25% | 5% |
| 3 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 38.9% | 75% | 40% | 62% | 30% | 22% | 4% |
| 4 | [DeepSeek-R1-671B](/index.php?title=DeepSeek-R1-671B&action=edit&redlink=1) | 37.5% | 73% | 38% | 60% | 28% | 20% | 6% |
| 5 | [Gemini 2.0 Pro](/index.php?title=Gemini_2.0_Pro&action=edit&redlink=1) | 35.8% | 70% | 35% | 58% | 25% | 18% | 9% |

#### VLM Performance

| Rank | Model | Overall Progress % | BabyAI | Crafter | Baba Is AI | MiniHack | NetHack |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [Gemini-2.5-Pro-Exp-03-25](/index.php?title=Gemini-2.5-Pro-Exp-03-25&action=edit&redlink=1) | 35.7% | 68% | 38% | 28% | 32% | 13% |
| 2 | [GPT-4V](/index.php?title=GPT-4V&action=edit&redlink=1) | 32.4% | 65% | 35% | 25% | 28% | 9% |
| 3 | [Claude 3.5 Vision](/index.php?title=Claude_3.5_Vision&action=edit&redlink=1) | 30.1% | 62% | 32% | 22% | 25% | 10% |
| 4 | [Llama 3.2 Vision](/index.php?title=Llama_3.2_Vision&action=edit&redlink=1) | 25.8% | 55% | 28% | 18% | 20% | 8% |

### Key Findings

#### Vision Deficiency Paradox

One of BALROG's most surprising findings is that VLMs consistently underperform LLMs despite having access to richer visual information[&#91;1&#93;](#cite_note-balrog2024-1):

| Observation | Impact | Potential Cause |
| --- | --- | --- |
| VLMs score 5-10% lower | Counterintuitive result | Visual processing interferes with reasoning |
| Spatial errors increase | More collision mistakes | Poor visual-spatial grounding |
| Slower decision-making | Longer inference times | Processing overhead |

#### Game-Specific Insights

| Game | Best Performance | Key Challenge | Failure Mode |
| --- | --- | --- | --- |
| BabyAI | 82% (Grok-4) | Multi-step instructions | Forgetting earlier objectives |
| Crafter | 45% (Grok-4) | Resource prioritization | Suboptimal crafting sequences |
| TextWorld | 68% (Grok-4) | Spatial mental models | Getting lost in mazes |
| Baba Is AI | 35% (Grok-4) | Rule modification | Cannot reason about meta-rules |
| MiniHack | 28% (Grok-4) | Combat tactics | Poor threat assessment |
| NetHack | 9% (Gemini 2.0) | Vast complexity | Overwhelming state space |

## Technical Implementation

### Architecture

```python

1. BALROG evaluation framework

from balrog import BALROGBenchmark

1. Initialize benchmark

benchmark = BALROGBenchmark(

   games=['babyai', 'crafter', 'textworld', 'baba', 'minihack', 'nethack'],
   mode='llm',  # or 'vlm' for vision mode
   num_episodes=100

)

1. Evaluate an agent

results = benchmark.evaluate(

   agent=my_agent,
   verbose=True,
   save_trajectories=True

)

1. Access detailed metrics

for game, metrics in results.items():

   print(f"{game}: {metrics['progress']:.1%} progress")
   print(f"  Success rate: {metrics['success_rate']:.1%}")
   print(f"  Avg steps: {metrics['avg_steps']}")

```

### Agent Interface

```python
class BALROGAgent:

   def __init__(self, model):
       self.model = model
       self.memory = []
       
   def act(self, observation):
       """
       Generate action based on observation
       
       Args:
           observation: Game state (text or image+text)
       
       Returns:
           action: String action command
       """
       # Add observation to memory
       self.memory.append(observation)
       
       # Generate action using model
       prompt = self.construct_prompt(observation)
       action = self.model.generate(prompt)
       
       return action

```

## Procedural Generation

### Ensuring Generalization

BALROG's use of procedural generation is crucial for valid evaluation:

| Aspect | Implementation | Benefit |
| --- | --- | --- |
| **Random Seeds** | Unique seed per episode | Prevents memorization |
| **Level Generation** | Algorithmic map creation | Infinite variety |
| **Item Placement** | Randomized locations | Tests exploration |
| **Enemy Behavior** | Stochastic patterns | Requires adaptation |
| **Objective Variation** | Different goals each run | Tests flexibility |

## Comparison with Other Benchmarks

### Unique Positioning

| Feature | BALROG | Traditional Benchmarks | Other Game Benchmarks |
| --- | --- | --- | --- |
| Multiple Games | 6 diverse games | Single task type | Usually 1 game |
| Difficulty Range | Seconds to years | Fixed difficulty | Limited range |
| Modality Options | LLM and VLM | Usually one | Typically vision-only |
| Procedural Generation | All environments | Static datasets | Some procedural |
| Human Baseline | Clear comparisons | Often missing | Variable |

### Related Benchmarks

| Benchmark | Similarity | Key Difference |
| --- | --- | --- |
| [MineDojo](/index.php?title=MineDojo&action=edit&redlink=1) | Game-based evaluation | Single game (Minecraft) |
| [FLE](/wiki/factorio_learning_environment) | Long-horizon planning | Focus on automation |
| [ALFRED](/index.php?title=ALFRED&action=edit&redlink=1) | Sequential tasks | Household domain only |
| [BabyAI](/index.php?title=BabyAI&action=edit&redlink=1) (standalone) | Included in BALROG | Limited scope |
| [ALE](/index.php?title=Atari_Learning_Environment&action=edit&redlink=1) | Game evaluation | Simpler games |

## Insights and Implications

### Revealed Limitations

BALROG exposes several fundamental limitations in current AI systems:

1. **Poor Transfer Learning**: Skills from easier games don't transfer to harder ones
2. **Limited Exploration**: Models struggle with systematic exploration strategies
3. **Weak Spatial Reasoning**: Even with visual input, spatial understanding is poor
4. **Short Planning Horizons**: Long-term strategic planning remains elusive
5. **Inability to Learn from Failure**: Models don't effectively adapt from mistakes

### Research Directions

| Direction | Motivation | Potential Approach |
| --- | --- | --- |
| Memory Systems | Address forgetting | External memory banks |
| Hierarchical Planning | Enable long-term goals | Goal decomposition |
| World Models | Improve prediction | Learn environment dynamics |
| Curiosity Mechanisms | Better exploration | Intrinsic motivation |
| Multi-modal Integration | Fix vision paradox | Better VLM architectures |

## Community and Development

### Open Source Ecosystem

BALROG maintains an active open-source community:

| Component | Status | Location |
| --- | --- | --- |
| Core Framework | Published | github.com/balrog-ai/BALROG |
| Leaderboard | Live | balrogai.com |
| Documentation | Comprehensive | GitHub wiki |
| Model Submissions | Open | Via pull requests |
| Discord Community | Active | Linked from website |

### NVIDIA Collaboration

In January 2025, [NVIDIA](/wiki/nvidia) provided NIM microservices for evaluating models like [DeepSeek-R1](/index.php?title=DeepSeek-R1&action=edit&redlink=1) on BALROG, demonstrating industry interest in the benchmark[&#91;2&#93;](#cite_note-nvidia2025-2).

## Future Directions

### Planned Enhancements

| Enhancement | Description | Timeline |
| --- | --- | --- |
| Additional Games | Expand to 10+ environments | 2025 Q4 |
| Multi-agent Support | Cooperative/competitive play | 2026 Q1 |
| Continuous Learning | Persistent agent improvement | 2026 Q2 |
| Human Studies | Detailed human baselines | Ongoing |
| Real-time Evaluation | Streaming game play | 2026 |

### Research Opportunities

1. **Hybrid Architectures**: Combining symbolic and neural approaches
2. **Curriculum Learning**: Progressive training across games
3. **Meta-Learning**: Learning to play new games quickly
4. **Interpretability**: Understanding agent decision-making
5. **Efficiency**: Reducing computational requirements

## Significance

BALROG represents a critical benchmark for evaluating true agentic AI capabilities. By requiring models to navigate diverse, procedurally generated game environments, it tests essential skills like planning, exploration, and adaptation that are fundamental to general intelligence. The benchmark's finding that current state-of-the-art models achieve less than 44% progress overall, and that vision paradoxically hinders rather than helps performance, reveals how far we remain from achieving robust, general-purpose AI agents.

The diversity of games, from simple instruction-following to complex roguelikes, provides a comprehensive evaluation framework that will remain challenging as AI capabilities advance. BALROG's emphasis on procedural generation ensures that future progress will reflect genuine reasoning improvements rather than dataset memorization, making it a valuable long-term benchmark for the AI community.

## See Also

- [Game-Based AI Evaluation](/index.php?title=Game-Based_AI_Evaluation&action=edit&redlink=1)

- [Agentic AI](/index.php?title=Agentic_AI&action=edit&redlink=1)

- [Vision-Language Models](/index.php?title=Vision-Language_Models&action=edit&redlink=1)

- [NetHack Learning Environment](/index.php?title=NetHack_Learning_Environment&action=edit&redlink=1)

- [BabyAI](/index.php?title=BabyAI&action=edit&redlink=1)

- [Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1)

- [Long-Horizon Planning](/index.php?title=Long-Horizon_Planning&action=edit&redlink=1)

- [UCL DARK Lab](/index.php?title=UCL_DARK_Lab&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-balrog2024_1-0) [1.1](#cite_ref-balrog2024_1-1) Paglieri, D., Cupiał, B., Coward, S., et al. (2024). "BALROG: Benchmarking Agentic LLM and VLM Reasoning On Games". arXiv:2411.13543. Retrieved from [https://arxiv.org/abs/2411.13543](https://arxiv.org/abs/2411.13543)

2. [↑](#cite_ref-nvidia2025_2-0) NVIDIA. (2025). "Benchmarking Agentic LLM and VLM Reasoning for Gaming with NVIDIA NIM". Retrieved from [https://developer.nvidia.com/blog/benchmarking-agentic-llm-and-vlm-reasoning-for-gaming-with-nvidia-nim](https://developer.nvidia.com/blog/benchmarking-agentic-llm-and-vlm-reasoning-for-gaming-with-nvidia-nim)

Cite error: `<ref>` tag with name "website" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "github" defined in `<references>` is not used in prior text.