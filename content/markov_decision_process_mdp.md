---
title: "Markov decision process (MDP)"
slug: "markov_decision_process_mdp"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Markov Decision Process (MDP)

Markov Decision Process (MDP) is a mathematical model in machine learning and decision theory, used for modeling decision-making problems in stochastic environments. MDPs provide a formal framework for decision-making under uncertainty, taking into account the probabilistic nature of state transitions, the rewards or penalties associated with actions, and the influence of the decision-maker's choices on the system's evolution. MDPs are widely employed in fields such as reinforcement learning, control theory, and operations research.

### Definition

A Markov Decision Process is defined by a tuple (S, A, P, R, γ), where:

- S is a finite set of states, representing the possible situations in the environment.

- A is a finite set of actions, describing the available choices for the decision-maker.

- P is the state-transition probability function, P(s'|s, a), which defines the likelihood of transitioning from state s to state s' after taking action a.

- R is the reward function, R(s, a, s'), giving the immediate reward obtained after transitioning from state s to state s' via action a.

- γ is the discount factor, a real number between 0 and 1, determining the relative importance of immediate and future rewards.

The objective of an MDP is to find an optimal policy, which is a mapping from states to actions, π: S → A, that maximizes the expected cumulative reward over time. An optimal policy, denoted as π*, can be found using various algorithms such as [Value Iteration](/index.php?title=Value_Iteration&action=edit&redlink=1) or [Policy Iteration](/index.php?title=Policy_Iteration&action=edit&redlink=1).

### Assumptions

MDPs are based on several key assumptions:

1. **Markov property:** The future system dynamics depend only on the current state and action, and not on the history of previous states and actions.
2. **Stationarity:** The state-transition probabilities and reward function remain constant over time.
3. **Fully observable:** The decision-maker has complete knowledge of the current state at all times.

## Applications

Markov Decision Processes have been applied to a variety of domains, including:

- [Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1): MDPs serve as the foundation for reinforcement learning, a subfield of machine learning concerned with learning optimal policies through trial and error.

- Robotics: In robotics, MDPs have been employed for path planning, navigation, and control of autonomous agents.

- Finance: MDPs are used in finance to model and optimize investment strategies and asset allocation.

- Healthcare: MDPs can be applied to medical decision-making, such as patient treatment planning and disease management.

## Explain Like I'm 5 (ELI5)

Imagine you are playing a video game where you control a character who has to make decisions. The game world is made up of different situations or "states," and you can choose from a set of actions in each state. The game is a bit unpredictable, so when you choose an action, there's a chance that you might not end up where you expect. Sometimes, you get points or rewards for doing well.

A Markov Decision Process (MDP) is like a set of rules that helps you play this game in the best way possible. It helps you figure out which actions to take in each situation so that you can get the most points over time. The MDP doesn't care about what happened before, only what the current situation is and what you can do next. It helps you make the best decisions, even when the game is unpredictable.