---
title: "Tabular Q-learning"
slug: "tabular_q-learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Tabular Q-learning is a fundamental reinforcement learning algorithm used in the field of [machine learning](/wiki/machine_learning). It is a value-based approach that helps agents learn optimal policies through interaction with their environment. The algorithm aims to estimate the expected cumulative reward or *value* for each state-action pair in a discrete environment.

## Q-learning Algorithm

Q-learning is a model-free, off-policy algorithm that operates in discrete-time, finite Markov Decision Processes (MDPs). The core idea behind the algorithm is to iteratively update a table called the *Q-table*, which represents the estimated value of each state-action pair in the environment. 

### Initialization

Initially, the Q-table contains arbitrary values for each state-action pair. The agent explores the environment and updates the table based on the rewards it receives and the estimated future values of the subsequent states. 

### Q-Value Update Rule

The Q-values are updated using the following rule, known as the Bellman equation:

Q(s, a) ← Q(s, a) + α[R(s, a) + γmaxa'Q(s', a') − Q(s, a)]

where:

- Q(s, a): The current estimate of the Q-value for state *s* and action *a*.

- α: The learning rate (0 ≤ α ≤ 1), which determines how much new information is considered versus the current estimate.

- R(s, a): The immediate reward received after performing action *a* in state *s*.

- γ: The discount factor (0 ≤ γ ≤ 1), which determines the importance of future rewards compared to immediate rewards.

- maxa'Q(s', a'): The maximum estimated Q-value over all possible actions *a' * in the next state *s' *.

The agent repeats this update rule for each state-action pair it encounters, gradually improving its estimates of the optimal Q-values.

## Exploration and Exploitation

An essential aspect of tabular Q-learning is striking a balance between exploration and exploitation. The agent must explore the environment to discover new state-action pairs and learn their values, while also exploiting its current knowledge to maximize rewards.

### Epsilon-Greedy Strategy

The epsilon-greedy strategy is a common approach to balancing exploration and exploitation. With probability *ε* (0 < ε < 1), the agent selects a random action (exploration), and with probability *1 − ε*, the agent selects the action with the highest estimated Q-value (exploitation). The value of *ε* is often decayed over time, allowing the agent to focus more on exploitation as its knowledge of the environment improves.

## Applications

Tabular Q-learning has been applied to various domains, including robotics, game playing, and resource allocation. However, due to its reliance on a discrete state and action space, it has limitations when applied to continuous or high-dimensional problems. In such cases, other reinforcement learning algorithms like [Deep Q-Networks](/index.php?title=Deep_Q-Networks&action=edit&redlink=1) (DQNs) or [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO) are used.

## Explain Like I'm 5 (ELI5)

Tabular Q-learning is like a game where you try to find the best path to get the most points. You have a map (Q-table) that tells you how many points you can get for each step. In the beginning, the map isn't very accurate, so you need to explore and update it as you go. 

As you play more, you learn better ways to get points. Sometimes, you try new paths (exploration) to see if you can find a better way. Other times, you use what you've learned (exploitation) to get the most points. Over time,