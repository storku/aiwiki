---
title: "Bellman equation"
slug: "bellman_equation"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Bellman Equation in Machine Learning

The Bellman equation, named after its inventor Richard Bellman, is a fundamental concept in the field of reinforcement learning (RL), a subdomain of machine learning. The equation describes the optimal value function, which is a key element in solving many sequential decision-making problems. The Bellman equation serves as the foundation for various RL algorithms, including value iteration, policy iteration, and Q-learning.

### Definition

In reinforcement learning, an agent interacts with an environment by taking actions and receiving rewards, with the goal of maximizing its cumulative reward over time. The agent's behavior is determined by a policy, which is a mapping from states to actions.

The value function, denoted as V(s), represents the expected cumulative reward that an agent can achieve from state *s* by following a specific policy. The optimal value function, V*(s), is the maximum value that an agent can achieve from state *s* across all possible policies.

The Bellman equation relates the value of a state to the value of its successor states, accounting for the immediate reward received and the discounted future rewards. The equation can be expressed as:

V*(s) = max_a { R(s, a) + γ ∑_s' P(s'|s, a) V*(s') }

where:

- *s* is the current state

- *a* is an action taken in state *s*

- R(s, a) is the immediate reward received for taking action *a* in state *s*

- γ is the discount factor (0 ≤ γ ≤ 1), which determines the importance of future rewards compared to immediate rewards

- P(s'|s, a) is the transition probability of reaching state *s'*, given that action *a* is taken in state *s*

- V*(s') is the optimal value of the successor state *s'*.

### Applications

The Bellman equation is used in numerous algorithms and approaches within reinforcement learning, such as:

- [Value Iteration](/index.php?title=Value_Iteration&action=edit&redlink=1): A dynamic programming algorithm that iteratively updates the value function based on the Bellman equation until it converges to the optimal value function.

- [Policy Iteration](/index.php?title=Policy_Iteration&action=edit&redlink=1): Another dynamic programming algorithm that alternates between policy evaluation (updating the value function for a given policy) and policy improvement (updating the policy based on the value function).

- [Q-Learning](/index.php?title=Q-Learning&action=edit&redlink=1): A model-free, off-policy RL algorithm that estimates the action-value function, Q(s, a), which represents the expected cumulative reward from state *s* when taking action *a* and then following the optimal policy.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a video game, and you're in a room with multiple doors. Each door leads to a different room, and you want to find the best path to get the most points. The Bellman equation helps you decide which door to choose by considering the points you'd get immediately and the points you'd get in the future rooms. This way, you can find the best path that gives you the most points overall.

In machine learning, the Bellman equation is used to help computer programs (called "agents") make the best decisions when they interact with different environments, like playing a game or navigating a maze. The equation helps these agents learn the best way to behave in order to reach their goals.