---
title: "Reward"
slug: "reward"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Reward in Machine Learning

In the field of [machine learning](/wiki/machine_learning), the concept of **reward** plays a crucial role in the process of learning from interaction with the environment. Reward is used as a measure of success, guiding the learning process in [reinforcement learning](/wiki/reinforcement_learning) algorithms. The objective of reinforcement learning algorithms is to maximize the cumulative reward over time. This allows the learning agent to evaluate its decisions and adapt its behavior to achieve the best possible outcome.

### Definition

The reward, denoted as *R*, is a scalar value that quantifies the desirability of an outcome, state, or action taken by an agent. It is provided by the environment as a feedback signal, indicating the success or failure of a particular action taken in a given state. The reward function, denoted as *R(s, a, s')*, maps a state-action pair *(s, a)* and the subsequent state *s' * to a real number that represents the immediate reward received by the agent.

### Objective

In reinforcement learning, the primary objective of an agent is to learn a policy, denoted as *π(a|s)*, which is a mapping from states to actions that maximizes the expected cumulative reward over time. This objective is often formalized as the maximization of the [expected return](/index.php?title=Expected_return&action=edit&redlink=1) *G_t* which is the sum of discounted rewards received from time step *t* onward:

*G_t = R_{t+1} + γR_{t+2} + γ^2R_{t+3} + ...*

where *γ* is a discount factor in the range of *0 ≤ γ ≤ 1*. The discount factor determines the importance of future rewards in comparison to immediate ones. A smaller *γ* value makes the agent focus on immediate rewards, while a larger value encourages the agent to consider the long-term consequences of its actions.

### Reward Shaping

In order to guide the learning process effectively, it is essential to design a suitable reward function. [Reward shaping](/index.php?title=Reward_shaping&action=edit&redlink=1) is the process of modifying or augmenting the reward function to improve the efficiency and performance of reinforcement learning algorithms. Proper reward shaping can facilitate faster convergence to the optimal policy and improve exploration by encouraging the agent to visit informative states.

### Exploration and Exploitation

During the learning process, an agent must balance the trade-off between [exploration](/index.php?title=Exploration&action=edit&redlink=1) and exploitation. Exploration refers to the agent's act of trying new actions and visiting new states, while exploitation means selecting the action that the agent believes to be the best according to its current knowledge. Balancing exploration and exploitation is vital for the agent to learn the optimal policy, as it must gather sufficient information about the environment while also maximizing its cumulative reward.

## Explain Like I'm 5 (ELI5)

Imagine you are teaching a robot to find the tastiest ice cream in a park. Every time the robot tries a new ice cream, you give it a score (reward) based on how tasty the ice cream is. The robot's goal is to find the best ice cream by getting the highest score (reward) possible. In machine learning, the reward helps the robot (agent) know if it's doing a good job or not, and it helps the robot decide which actions to take. The robot needs to try different ice creams (explore) and also remember the best ones (exploit) to make the best decisions.