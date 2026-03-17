---
title: "Reinforcement learning"
slug: "reinforcement_learning"
categories:
  - "Reinforcement_learning"
  - "Machine_learning"
  - "Artificial_intelligence"
  - "Computational_neuroscience"
  - "Behavioral_concepts"
---[Template:Infobox algorithm](/index.php?title=Template:Infobox_algorithm&action=edit&redlink=1)

**Reinforcement learning** (**RL**) is an area of [machine learning](/wiki/machine_learning) concerned with how [intelligent agents](/index.php?title=Intelligent_agent&action=edit&redlink=1) ought to take actions in an environment in order to maximize the notion of cumulative reward.[&#91;1&#93;](#cite_note-sutton2018-1) Reinforcement learning is one of three basic machine learning paradigms, alongside [supervised learning](/wiki/supervised_learning) and [unsupervised learning](/wiki/unsupervised_learning).[&#91;2&#93;](#cite_note-IBM-2)

Unlike supervised learning which requires labeled input/output pairs, and unlike unsupervised learning which focuses on finding hidden structure in unlabeled data, reinforcement learning focuses on finding a balance between exploration (of uncharted territory) and exploitation (of current knowledge) through trial-and-error interaction with an environment.[&#91;3&#93;](#cite_note-AWS-3) The environment is typically formulated as a [Markov decision process](/index.php?title=Markov_decision_process&action=edit&redlink=1) (MDP), as many reinforcement learning algorithms utilize [dynamic programming](/index.php?title=Dynamic_programming&action=edit&redlink=1) techniques.[&#91;4&#93;](#cite_note-bellman1957-4)

## Overview

Reinforcement learning achieved widespread recognition through several landmark achievements. In 2016, [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)'s [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1) defeated world champion [Lee Sedol](/index.php?title=Lee_Sedol&action=edit&redlink=1) in the complex game of [Go](/index.php?title=Go_(game)&action=edit&redlink=1)[&#91;5&#93;](#cite_note-Silver2016-5), a feat previously thought to be decades away. In 2019, [OpenAI Five](/index.php?title=OpenAI_Five&action=edit&redlink=1) defeated the reigning world champion team in [Dota 2](/index.php?title=Dota_2&action=edit&redlink=1)[&#91;6&#93;](#cite_note-OpenAI2019-6), demonstrating RL's ability to handle complex team-based strategy games.

The field emerged from the convergence of multiple intellectual traditions. The psychology of animal learning, beginning with [Edward Thorndike](/index.php?title=Edward_Thorndike&action=edit&redlink=1)'s Law of Effect in 1911, established that behaviors followed by satisfying consequences tend to be repeated. The mathematical framework came from [optimal control](/index.php?title=Optimal_control&action=edit&redlink=1) theory and [Richard Bellman](/index.php?title=Richard_Bellman&action=edit&redlink=1)'s development of dynamic programming in the 1950s. These threads were unified in the modern field through the work of [Richard Sutton](/index.php?title=Richard_Sutton&action=edit&redlink=1) and [Andrew Barto](/index.php?title=Andrew_Barto&action=edit&redlink=1), who received the 2024 [Turing Award](/index.php?title=Turing_Award&action=edit&redlink=1) for their foundational contributions.[&#91;7&#93;](#cite_note-turing2024-7)

## Core Concepts

### Agent-Environment Interaction

Reinforcement learning problems involve an [agent](/wiki/agent) interacting with an [environment](/wiki/environment) through a cycle of observation, action, and reward.[&#91;3&#93;](#cite_note-AWS-3) At each discrete time step t:

1. The agent observes the current **[state](/wiki/state)** st of the environment

2. Based on its **[policy](/index.php?title=Policy_(reinforcement_learning)&action=edit&redlink=1)** π, the agent selects an **[action](/wiki/action)** at

3. The environment transitions to a new state st+1 according to transition probabilities P(s'|s,a)

4. The agent receives a scalar **[reward](/index.php?title=Reward_signal&action=edit&redlink=1)** rt+1 indicating the immediate benefit of that action

The agent's objective is to learn a policy that maximizes the **expected [return](/index.php?title=Return_(reinforcement_learning)&action=edit&redlink=1)** (cumulative reward), typically discounted by factor γ (gamma) where 0 ≤ γ ≤ 1:[&#91;1&#93;](#cite_note-sutton2018-1)

Gt = Rt+1 + γRt+2 + γ²Rt+3 + ... = Σk=0∞ γkRt+k+1

### Key Components

| Component | Description | Example |
| --- | --- | --- |
| **Agent** | The learner and decision-maker | Robot, game-playing AI, trading algorithm |
| **Environment** | External world the agent interacts with | Maze, chess board, stock market |
| **State (s)** | Complete description of environment configuration | Board position in chess |
| **Action (a)** | Choice available to the agent | Move piece, buy/sell stock |
| **Reward (r)** | Immediate feedback signal | Points scored, profit/loss |
| **Policy (π)** | Agent's strategy mapping states to actions | "If in state X, take action Y" |
| **Value Function** | Expected long-term reward from a state | Position evaluation in chess |
| **Model** | Agent's representation of environment dynamics | Predicted next state and reward |

### Value Functions

[Value functions](/index.php?title=Value_function&action=edit&redlink=1) are central to reinforcement learning, estimating the expected return from states or state-action pairs:[&#91;1&#93;](#cite_note-sutton2018-1)

- **State-value function Vπ(s)**: Expected return starting from state s and following policy π

- **Action-value function Qπ(s,a)**: Expected return from taking action a in state s, then following policy π

The optimal value functions satisfy the [Bellman optimality equations](/wiki/bellman_equation):[&#91;4&#93;](#cite_note-bellman1957-4)

- V*(s) = maxa Σs' P(s'|s,a)[R(s,a,s') + γV*(s')]

- Q*(s,a) = Σs' P(s'|s,a)[R(s,a,s') + γ maxa' Q*(s',a')]

### Exploration vs. Exploitation

One fundamental challenge in reinforcement learning is the **[exploration-exploitation tradeoff](/index.php?title=Exploration-exploitation_tradeoff&action=edit&redlink=1)**.[&#91;2&#93;](#cite_note-IBM-2) The agent must balance:

- **Exploration**: Trying new actions to discover potentially better strategies

- **Exploitation**: Using current knowledge to maximize immediate rewards

Common strategies include [ε-greedy](/index.php?title=%CE%95-greedy&action=edit&redlink=1) (acting randomly with probability ε), [upper confidence bound](/index.php?title=Upper_confidence_bound&action=edit&redlink=1) (UCB), and [Thompson sampling](/index.php?title=Thompson_sampling&action=edit&redlink=1).

## Mathematical Foundations

### Markov Decision Processes

Reinforcement learning problems are formally modeled as **[Markov Decision Processes](/index.php?title=Markov_Decision_Process&action=edit&redlink=1)** (MDPs), defined by the tuple (S, A, P, R, γ):[&#91;8&#93;](#cite_note-puterman1994-8)

- **S**: Finite set of states (state space)

- **A**: Finite set of actions (action space)

- **P(s'|s,a)**: State transition probability function

- **R(s,a,s')**: Reward function

- **γ**: Discount factor (0 ≤ γ < 1)

The **[Markov property](/wiki/markov_property)** states that the future depends only on the current state, not on the sequence of events that preceded it: P(st+1|st,at,st-1,...,s0) = P(st+1|st,at)

## Algorithm Taxonomy

| Category | Description | Examples |
| --- | --- | --- |
| **Model-Based vs. Model-Free** | Whether agent learns environment dynamics | Model-Based: Dyna-Q, AlphaZero**Model-Free: Q-Learning, PPO |
| Value-Based vs. Policy-Based** | What the agent learns | Value-Based: Q-Learning, DQN**Policy-Based: REINFORCE, PPO |
| On-Policy vs. Off-Policy** | Source of learning data | On-Policy: SARSA, A2C**Off-Policy: Q-Learning, DQN |
| Tabular vs. Function Approximation** | State representation method | Tabular: Classic Q-Learning**Function Approx: Deep RL |

## Key Algorithms

### Q-Learning

[Q-learning](/wiki/q-learning) is a model-free, off-policy algorithm that learns the optimal action-value function.[&#91;9&#93;](#cite_note-Watkins1989-9) The update rule is:

Q(s,a) ← Q(s,a) + α[r + γ maxa' Q(s',a') - Q(s,a)]

where α is the learning rate. Q-learning converges to the optimal Q-function with probability 1 under certain conditions.

### Deep Q-Networks (DQN)

[Deep Q-Networks](/index.php?title=Deep_Q-Networks&action=edit&redlink=1) revolutionized RL by using [deep neural networks](/index.php?title=Deep_neural_networks&action=edit&redlink=1) to approximate Q-values for high-dimensional state spaces.[&#91;10&#93;](#cite_note-Mnih2015-10) Key innovations include:

- Experience replay**: Stores transitions in buffer and samples randomly for training

- **Target network**: Separate network for computing target values, updated periodically

DQN achieved human-level performance on 29 of 49 Atari games using only raw pixel inputs.

### Policy Gradient Methods

Policy gradient methods directly optimize parameterized policies by gradient ascent on expected return.[&#91;11&#93;](#cite_note-williams1992-11) The [REINFORCE](/index.php?title=REINFORCE&action=edit&redlink=1) algorithm updates policy parameters θ using:

∇θJ(θ) ≈ Σt Gt ∇θ log πθ(at|st)

### Proximal Policy Optimization (PPO)

[Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) constrains policy updates to prevent catastrophic performance drops.[&#91;12&#93;](#cite_note-schulman2017-12) PPO optimizes a clipped surrogate objective:

LCLIP(θ) = E[min(rt(θ)Ât, clip(rt(θ), 1-ε, 1+ε)Ât)]

where rt(θ) = πθ(at|st)/πθold(at|st) and ε is typically 0.2.

### Actor-Critic Methods

Actor-critic algorithms combine value-based and policy-based approaches:[&#91;13&#93;](#cite_note-konda2000-13)

- **Actor**: Policy network that selects actions

- **Critic**: Value network that evaluates actions

Examples include [A2C](/index.php?title=A2C&action=edit&redlink=1), [A3C](/index.php?title=A3C&action=edit&redlink=1), [SAC](/index.php?title=SAC&action=edit&redlink=1), and [DDPG](/index.php?title=DDPG&action=edit&redlink=1).

## Algorithm Comparison

| Algorithm | Type | Year | Key Innovation | Best For | Sample Efficiency |
| --- | --- | --- | --- | --- | --- |
| [Q-Learning](/index.php?title=Q-Learning&action=edit&redlink=1) | Value, Off-policy | 1989 | Model-free optimal control | Tabular tasks | Low |
| [SARSA](/index.php?title=SARSA&action=edit&redlink=1) | Value, On-policy | 1994 | On-policy TD control | Safe learning | Low |
| [DQN](/wiki/dqn) | Value, Off-policy | 2013 | Deep RL with replay buffer | Discrete actions, visual input | Medium |
| [DDPG](/index.php?title=DDPG&action=edit&redlink=1) | Actor-Critic, Off-policy | 2015 | Continuous action DQN | Continuous control | Medium |
| [TRPO](/index.php?title=TRPO&action=edit&redlink=1) | Policy, On-policy | 2015 | Trust region constraints | Stable learning | Low |
| [PPO](/index.php?title=PPO&action=edit&redlink=1) | Policy, On-policy | 2017 | Clipped surrogate objective | General purpose | Low |
| [A3C](/index.php?title=A3C&action=edit&redlink=1) | Actor-Critic, On-policy | 2016 | Asynchronous parallel training | CPU-based training | Low |
| [SAC](/index.php?title=SAC&action=edit&redlink=1) | Actor-Critic, Off-policy | 2018 | Maximum entropy RL | Continuous control | High |
| [TD3](/index.php?title=TD3&action=edit&redlink=1) | Actor-Critic, Off-policy | 2018 | Twin critics, delayed updates | Continuous control | High |
| [AlphaZero](/index.php?title=AlphaZero&action=edit&redlink=1) | Model-based | 2017 | Self-play with MCTS | Perfect info games | Very High |
| [MuZero](/index.php?title=MuZero&action=edit&redlink=1) | Model-based | 2020 | Learned latent dynamics | Games without rules | Very High |

## Historical Milestones

| Year | Milestone | Key Contributor(s) | Significance |
| --- | --- | --- | --- |
| 1911 | Law of Effect | [Edward Thorndike](/index.php?title=Edward_Thorndike&action=edit&redlink=1) | Established principle that rewarded actions are reinforced |
| 1950s | Dynamic Programming & Bellman Equation | [Richard Bellman](/index.php?title=Richard_Bellman&action=edit&redlink=1) | Mathematical framework for sequential decision-making |
| 1959 | Checkers Program | [Arthur Samuel](/index.php?title=Arthur_Samuel&action=edit&redlink=1) | First self-learning game program, coined "machine learning" |
| 1963 | MENACE | [Donald Michie](/index.php?title=Donald_Michie&action=edit&redlink=1) | Matchbox machine that learned tic-tac-toe |
| 1988 | Temporal Difference Learning | [Richard Sutton](/index.php?title=Richard_Sutton&action=edit&redlink=1) | Unified Monte Carlo and dynamic programming methods |
| 1989 | [Q-Learning](/index.php?title=Q-Learning&action=edit&redlink=1) | [Christopher Watkins](/index.php?title=Christopher_Watkins&action=edit&redlink=1) | Model-free off-policy control algorithm |
| 1992 | [TD-Gammon](/index.php?title=TD-Gammon&action=edit&redlink=1) | [Gerald Tesauro](/index.php?title=Gerald_Tesauro&action=edit&redlink=1) | Achieved world-class backgammon performance |
| 1992 | REINFORCE Algorithm | [Ronald Williams](/index.php?title=Ronald_Williams&action=edit&redlink=1) | Fundamental policy gradient algorithm |
| 1998 | "Reinforcement Learning: An Introduction" | [Richard Sutton](/index.php?title=Richard_Sutton&action=edit&redlink=1), [Andrew Barto](/index.php?title=Andrew_Barto&action=edit&redlink=1) | Seminal textbook defining the field |
| 2013-2015 | [Deep Q-Networks](/index.php?title=Deep_Q-Networks&action=edit&redlink=1) | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | Deep RL breakthrough on Atari games |
| 2016 | [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1) defeats Lee Sedol | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | First AI to defeat world champion at Go |
| 2017 | [AlphaGo Zero](/index.php?title=AlphaGo_Zero&action=edit&redlink=1) | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | Learned Go from scratch through self-play |
| 2018 | [AlphaZero](/index.php?title=AlphaZero&action=edit&redlink=1) | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | Mastered chess, shogi, and Go in 24 hours |
| 2019 | [OpenAI Five](/index.php?title=OpenAI_Five&action=edit&redlink=1) | [OpenAI](/wiki/openai) | Defeated Dota 2 world champions |
| 2019 | [AlphaStar](/index.php?title=AlphaStar&action=edit&redlink=1) | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | Achieved Grandmaster in StarCraft II |
| 2024 | Turing Award | [Richard Sutton](/index.php?title=Richard_Sutton&action=edit&redlink=1), [Andrew Barto](/index.php?title=Andrew_Barto&action=edit&redlink=1) | Recognition for RL foundations |

## Applications

### Game Playing

Reinforcement learning has achieved superhuman performance in numerous games:

- **Board Games**: [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1), [AlphaZero](/index.php?title=AlphaZero&action=edit&redlink=1), and [MuZero](/index.php?title=MuZero&action=edit&redlink=1) revolutionized game AI[&#91;14&#93;](#cite_note-Silver2018-14)

- **Video Games**: DQN mastered 49 Atari games; [OpenAI Five](/index.php?title=OpenAI_Five&action=edit&redlink=1) conquered Dota 2; [AlphaStar](/index.php?title=AlphaStar&action=edit&redlink=1) reached Grandmaster in StarCraft II[&#91;15&#93;](#cite_note-Vinyals2019-15)

- **Poker**: [Pluribus](/index.php?title=Pluribus&action=edit&redlink=1) defeated professional players in 6-player no-limit Texas Hold'em

### Robotics

RL enables robots to learn complex motor skills through trial and error:

- **Locomotion**: [Boston Dynamics](/index.php?title=Boston_Dynamics&action=edit&redlink=1) robots use RL for walking and navigation[&#91;16&#93;](#cite_note-boston2023-16)

- **Manipulation**: Robotic hands solving [Rubik's Cube](/index.php?title=Rubik%27s_Cube&action=edit&redlink=1), grasping diverse objects

- **Assembly**: Industrial robots learning assembly sequences

- **Sim-to-Real Transfer**: Training in simulation before real-world deployment

### Autonomous Vehicles

Self-driving cars employ RL for:

- Path planning and trajectory optimization

- Lane changing and merging decisions

- Adaptive cruise control

- Traffic light negotiation

- [Waymo](/index.php?title=Waymo&action=edit&redlink=1) reports over 20 million autonomous miles driven[&#91;17&#93;](#cite_note-waymo2023-17)

### Healthcare

RL applications in medicine include:

- **Treatment Optimization**: Dynamic treatment regimes for chronic diseases[&#91;18&#93;](#cite_note-healthcare2023-18)

- **Drug Discovery**: Molecular design and optimization

- **Personalized Medicine**: Adaptive clinical trials

- **Resource Allocation**: ICU bed management, staff scheduling

### Finance and Trading

Financial applications include:

- **Algorithmic Trading**: Automated trading strategies[&#91;19&#93;](#cite_note-finance2023-19)

- **Portfolio Management**: Dynamic asset allocation

- **Risk Management**: Credit scoring, fraud detection

- **Market Making**: Liquidity provision strategies

### Energy and Sustainability

- **Data Center Cooling**: [Google](/index.php?title=Google&action=edit&redlink=1) achieved 40% energy reduction using RL[&#91;20&#93;](#cite_note-google2016-20)

- **Smart Grids**: Load balancing and demand response

- **Wind Farms**: Turbine control optimization

- **Building Management**: HVAC system optimization

### Natural Language Processing

- **[Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF)**: Training [ChatGPT](/wiki/chatgpt), [Claude](/wiki/claude), [GPT-4](/wiki/gpt-4)[&#91;21&#93;](#cite_note-ouyang2022-21)

- **Dialogue Systems**: Conversational AI optimization

- **Machine Translation**: Improving translation quality

- **Text Summarization**: Generating concise summaries

## Development Tools and Frameworks

| Framework | Language | GitHub Stars | Backend | Best For |
| --- | --- | --- | --- | --- |
| [OpenAI Gym](/wiki/openai_gym)/[Gymnasium](/index.php?title=Gymnasium&action=edit&redlink=1) | Python | 35,000+ | Agnostic | Environment standard |
| [Ray RLlib](/index.php?title=Ray_RLlib&action=edit&redlink=1) | Python | 33,000+ | Multiple | Production, distributed training |
| [Stable-Baselines3](/index.php?title=Stable-Baselines3&action=edit&redlink=1) | Python | 9,000+ | PyTorch | Reliable implementations |
| [Unity ML-Agents](/index.php?title=Unity_ML-Agents&action=edit&redlink=1) | C#/Python | 17,000+ | PyTorch | 3D/VR/AR simulation |
| [TorchRL](/index.php?title=TorchRL&action=edit&redlink=1) | Python | 2,300+ | PyTorch | Research flexibility |
| [TF-Agents](/index.php?title=TF-Agents&action=edit&redlink=1) | Python | 2,800+ | TensorFlow | TF ecosystem |
| [Tianshou](/index.php?title=Tianshou&action=edit&redlink=1) | Python | 7,800+ | PyTorch | Modular design |
| [ACME](/index.php?title=ACME&action=edit&redlink=1) | Python | 3,400+ | JAX/TF | DeepMind research |

### Simulation Environments

- **Physics Simulators**: [MuJoCo](/index.php?title=MuJoCo&action=edit&redlink=1), [PyBullet](/index.php?title=PyBullet&action=edit&redlink=1), [Isaac Gym](/index.php?title=Isaac_Gym&action=edit&redlink=1)

- **Game Environments**: [ALE](/index.php?title=ALE&action=edit&redlink=1) (Atari), [MineRL](/index.php?title=MineRL&action=edit&redlink=1) (Minecraft)

- **Multi-Agent**: [PettingZoo](/index.php?title=PettingZoo&action=edit&redlink=1), [SMAC](/index.php?title=SMAC&action=edit&redlink=1)

- **Autonomous Driving**: [CARLA](/index.php?title=CARLA&action=edit&redlink=1), [SUMO](/index.php?title=SUMO&action=edit&redlink=1)

- **Robotics**: [RoboSuite](/index.php?title=RoboSuite&action=edit&redlink=1), [Meta-World](/index.php?title=Meta-World&action=edit&redlink=1)

## Challenges and Limitations

### Sample Inefficiency

RL algorithms often require millions of interactions to learn:[&#91;22&#93;](#cite_note-kaiser2020-22)

- DQN: 200 million frames for Atari (equivalent to 924 hours of human play)

- OpenAI Five: 45,000 years of Dota 2 gameplay

- AlphaGo Zero: 4.9 million self-play games

Solutions include model-based RL, transfer learning, and curriculum learning.

### Exploration Challenges

Effective exploration remains difficult in:

- **Sparse Reward Environments**: Where rewards are rare

- **Large State Spaces**: Exponential growth of possibilities

- **Safety-Critical Domains**: Where exploration risks catastrophic failure

Approaches include [curiosity-driven learning](/index.php?title=Curiosity-driven_learning&action=edit&redlink=1), [intrinsic motivation](/index.php?title=Intrinsic_motivation&action=edit&redlink=1), and [safe exploration](/index.php?title=Safe_exploration&action=edit&redlink=1).

### Reward Specification

Designing appropriate reward functions is challenging:[&#91;23&#93;](#cite_note-hadfield2017-23)

- **Reward Hacking**: Agents exploit unintended loopholes

- **Reward Shaping**: Manual engineering is difficult and error-prone

- **Multi-Objective Optimization**: Balancing competing goals

Solutions include [inverse reinforcement learning](/index.php?title=Inverse_reinforcement_learning&action=edit&redlink=1), [preference learning](/index.php?title=Preference_learning&action=edit&redlink=1), and [reward modeling](/index.php?title=Reward_modeling&action=edit&redlink=1).

### Generalization and Transfer

RL agents often fail to generalize:

- **Domain Shift**: Performance degrades in new environments

- **Sim-to-Real Gap**: Policies trained in simulation fail in reality

- **Catastrophic Forgetting**: Learning new tasks overwrites old knowledge

Research areas include [meta-learning](/wiki/meta-learning), [domain randomization](/index.php?title=Domain_randomization&action=edit&redlink=1), and [continual learning](/index.php?title=Continual_learning&action=edit&redlink=1).

### Interpretability and Safety

- **Black Box Policies**: Neural networks lack interpretability

- **Verification Challenges**: Difficult to prove safety guarantees

- **Adversarial Vulnerabilities**: Susceptible to adversarial attacks

- **Alignment Problem**: Ensuring AI goals align with human values

## Current Research Directions

### Offline Reinforcement Learning

[Offline RL](/index.php?title=Offline_RL&action=edit&redlink=1) learns from fixed datasets without environment interaction:[&#91;24&#93;](#cite_note-levine2020-24)

- Conservative Q-Learning (CQL)

- Implicit Q-Learning (IQL)

- Decision Transformers

- Applications in healthcare and robotics where exploration is expensive

### Multi-Agent Reinforcement Learning

[Multi-agent RL](/index.php?title=Multi-agent_RL&action=edit&redlink=1) addresses scenarios with multiple learning agents:[&#91;25&#93;](#cite_note-zhang2021-25)

- Cooperative: Team coordination and communication

- Competitive: Game theory and Nash equilibria

- Mixed: Social dilemmas and negotiation

- Applications in autonomous driving, robotics swarms

### Hierarchical Reinforcement Learning

[Hierarchical RL](/index.php?title=Hierarchical_RL&action=edit&redlink=1) decomposes complex tasks into subtasks:

- Options framework for temporal abstraction

- Goal-conditioned policies

- Feudal networks

- Applications in long-horizon planning

### Model-Based Reinforcement Learning

Leveraging learned environment models for planning:[&#91;26&#93;](#cite_note-moerland2023-26)

- World models and imagination

- [MuZero](/index.php?title=MuZero&action=edit&redlink=1): Planning without knowing rules

- [Dreamer](/index.php?title=Dreamer&action=edit&redlink=1): Visual model-based RL

- Differentiable physics simulators

### Reinforcement Learning from Human Feedback (RLHF)

Aligning AI systems with human preferences:[&#91;27&#93;](#cite_note-christiano2017-27)

- Preference modeling from comparisons

- Constitutional AI for value alignment

- AI feedback (RLAIF) for scalability

- Applications in large language models

### Foundation Models and Transformers

Integration with large-scale pre-trained models:

- Decision Transformers: RL as sequence modeling

- Gato: Generalist agent for multiple domains

- RT-1/RT-2: Vision-language-action models for robotics

- Pre-trained world models from internet-scale data

## See Also

[Template:Columns-list](/index.php?title=Template:Columns-list&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-sutton2018_1-0) [1.1](#cite_ref-sutton2018_1-1) [1.2](#cite_ref-sutton2018_1-2) Sutton, R.S. and Barto, A.G. (2018). "Reinforcement Learning: An Introduction (2nd ed.)". MIT Press. [[1]](http://incompleteideas.net/book/the-book-2nd.html)

2. ↑ [2.0](#cite_ref-IBM_2-0) [2.1](#cite_ref-IBM_2-1) IBM, "What is reinforcement learning?" IBM Think Blog. [[2]](https://www.ibm.com/think/topics/reinforcement-learning)

3. ↑ [3.0](#cite_ref-AWS_3-0) [3.1](#cite_ref-AWS_3-1) Amazon Web Services, "What is Reinforcement Learning?" AWS Machine Learning Guide. [[3]](https://aws.amazon.com/what-is/reinforcement-learning/)

4. ↑ [4.0](#cite_ref-bellman1957_4-0) [4.1](#cite_ref-bellman1957_4-1) Bellman, R. (1957). "Dynamic Programming". Princeton University Press. [[4]](https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming)

5. [↑](#cite_ref-Silver2016_5-0) Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." Nature, 529(7587):484–489. [[5]](https://www.nature.com/articles/nature16961)

6. [↑](#cite_ref-OpenAI2019_6-0) OpenAI, "OpenAI Five defeats Dota 2 world champions" (Blog post, April 15, 2019). [[6]](https://openai.com/blog/openai-five-defeats-dota-2-world-champions/)

7. [↑](#cite_ref-turing2024_7-0) ACM, "Andrew Barto and Richard Sutton are the recipients of the 2024 ACM A.M. Turing Award". [[7]](https://awards.acm.org/about/2024-turing)

8. [↑](#cite_ref-puterman1994_8-0) Puterman, M.L. (1994). "Markov Decision Processes: Discrete Stochastic Dynamic Programming". Wiley. [[8]](https://onlinelibrary.wiley.com/doi/book/10.1002/9780470316887)

9. [↑](#cite_ref-Watkins1989_9-0) Watkins, C.J.C.H. (1989). "Learning from Delayed Rewards" (Ph.D. thesis, University of Cambridge). [[9]](https://www.cs.rhul.ac.uk/~chrisw/new_thesis.pdf)

10. [↑](#cite_ref-Mnih2015_10-0) Mnih, V. et al. (2015). "Human-level control through deep reinforcement learning." Nature, 518(7540):529–533. [[10]](https://www.nature.com/articles/nature14236)

11. [↑](#cite_ref-williams1992_11-0) Williams, R.J. (1992). "Simple statistical gradient-following algorithms for connectionist reinforcement learning". Machine Learning, 8(3-4):229-256. [[11]](https://link.springer.com/article/10.1007/BF00992696)

12. [↑](#cite_ref-schulman2017_12-0) Schulman, J. et al. (2017). "Proximal Policy Optimization Algorithms". arXiv preprint. [[12]](https://arxiv.org/abs/1707.06347)

13. [↑](#cite_ref-konda2000_13-0) Konda, V.R. and Tsitsiklis, J.N. (2000). "Actor-critic algorithms". Advances in Neural Information Processing Systems. [[13]](https://papers.nips.cc/paper/1999/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html)

14. [↑](#cite_ref-Silver2018_14-0) Silver, D. et al. (2018). "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play." Science, 362(6419):1140–1144. [[14]](https://www.science.org/doi/10.1126/science.aar6404)

15. [↑](#cite_ref-Vinyals2019_15-0) Vinyals, O. et al. (2019). "Grandmaster level in StarCraft II using multi-agent reinforcement learning." Nature, 575:350–354. [[15]](https://doi.org/10.1038/s41586-019-1724-z)

16. [↑](#cite_ref-boston2023_16-0) Boston Dynamics, "Starting on the Right Foot with Reinforcement Learning". [[16]](https://bostondynamics.com/blog/starting-on-the-right-foot-with-reinforcement-learning/)

17. [↑](#cite_ref-waymo2023_17-0) Waymo, "Waymo One surpasses 20 million rider-only miles". [[17]](https://waymo.com/blog/2023/08/waymo-one-doubles-service-area.html)

18. [↑](#cite_ref-healthcare2023_18-0) Liu, Y. et al. (2023). "Reinforcement Learning for Clinical Decision Support: A Comprehensive Survey". Medical Image Analysis. [[18]](https://www.sciencedirect.com/science/article/pii/S1361841523000348)

19. [↑](#cite_ref-finance2023_19-0) Hambly, B. et al. (2023). "Recent Advances in Reinforcement Learning in Finance". Mathematical Finance. [[19]](https://onlinelibrary.wiley.com/doi/10.1111/mafi.12382)

20. [↑](#cite_ref-google2016_20-0) DeepMind, "DeepMind AI Reduces Google Data Centre Cooling Bill by 40%". [[20]](https://deepmind.google/discover/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/)

21. [↑](#cite_ref-ouyang2022_21-0) Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback". NeurIPS. [[21]](https://arxiv.org/abs/2203.02155)

22. [↑](#cite_ref-kaiser2020_22-0) Kaiser, L. et al. (2020). "Model-Based Reinforcement Learning for Atari". ICLR. [[22]](https://arxiv.org/abs/1903.00374)

23. [↑](#cite_ref-hadfield2017_23-0) Hadfield-Menell, D. et al. (2017). "The Off-Switch Game". IJCAI. [[23]](https://arxiv.org/abs/1611.08219)

24. [↑](#cite_ref-levine2020_24-0) Levine, S. et al. (2020). "Offline Reinforcement Learning: Tutorial, Review, and Perspectives". arXiv. [[24]](https://arxiv.org/abs/2005.01643)

25. [↑](#cite_ref-zhang2021_25-0) Zhang, K. et al. (2021). "Multi-Agent Reinforcement Learning: A Selective Overview". Foundations and Trends in Machine Learning. [[25]](https://arxiv.org/abs/1911.10635)

26. [↑](#cite_ref-moerland2023_26-0) Moerland, T.M. et al. (2023). "Model-based Reinforcement Learning: A Survey". Foundations and Trends in Machine Learning. [[26]](https://arxiv.org/abs/2006.16712)

27. [↑](#cite_ref-christiano2017_27-0) Christiano, P. et al. (2017). "Deep Reinforcement Learning from Human Preferences". NeurIPS. [[27]](https://arxiv.org/abs/1706.03741)

## External Links

- [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book.html) - Sutton and Barto's textbook

- [OpenAI Spinning Up](https://spinningup.openai.com/) - Educational resource for deep RL

- [Gymnasium](https://gymnasium.farama.org/) - Standard RL environment library

- [Stable-Baselines3 Documentation](https://stable-baselines3.readthedocs.io/)

- [Ray RLlib Documentation](https://docs.ray.io/en/latest/rllib/index.html)

- [DeepMind Research](https://deepmind.com/research)

[Template:Machine learning](/index.php?title=Template:Machine_learning&action=edit&redlink=1)

[Template:Navbox](/index.php?title=Template:Navbox&action=edit&redlink=1)
[Template:Game artificial intelligence](/index.php?title=Template:Game_artificial_intelligence&action=edit&redlink=1)