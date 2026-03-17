---
title: "Experience replay"
slug: "experience_replay"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Experience Replay is a technique used in machine learning, particularly in reinforcement learning, to improve the efficiency and stability of the learning process. It is widely used in algorithms such as [Deep Q-Network](/index.php?title=Deep_Q-Network&action=edit&redlink=1) (DQN), [Asynchronous Advantage Actor-Critic](/index.php?title=Asynchronous_Advantage_Actor-Critic&action=edit&redlink=1) (A3C), and other deep reinforcement learning methods. Experience Replay allows the agent to store past experiences in a memory buffer and then reuse these experiences during training, allowing for more effective learning and mitigating issues such as catastrophic forgetting and sample inefficiency.

## Experience Replay in Reinforcement Learning

Reinforcement learning is a type of machine learning where an agent learns to make decisions by interacting with an environment. The agent learns a policy, which is a mapping from states to actions, that maximizes the expected cumulative reward over time. However, learning directly from consecutive samples in the environment can lead to problems such as high correlation between consecutive samples, non-stationarity, and inefficient use of collected experiences. Experience Replay addresses these issues by introducing a memory buffer to store and reuse past experiences during training.

### Experience Replay Buffer

The Experience Replay Buffer is a data structure, often implemented as a circular buffer, which stores a fixed number of past experiences. An experience, also known as a transition, consists of the tuple (s, a, r, s', d), where:

- s is the current state of the environment.

- a is the action taken by the agent.

- r is the reward received after taking the action.

- s' is the next state of the environment.

- d is a boolean indicating whether the next state is terminal.

During training, the agent samples mini-batches of experiences from the buffer uniformly at random, and uses these samples to update its policy or value function. This sampling process breaks the correlation between consecutive samples and mitigates the non-stationarity issue.

## Benefits of Experience Replay

Experience Replay offers several benefits for reinforcement learning agents, including:

- Improved sample efficiency: By reusing stored experiences, the agent can learn more effectively from a limited number of interactions with the environment.

- Stabilized learning: Randomly sampling experiences breaks the correlation between consecutive samples and reduces the impact of non-stationarity on the learning process.

- Reduced catastrophic forgetting: By revisiting past experiences, the agent is less likely to forget previously learned knowledge when encountering new experiences.

- Increased computational efficiency: By utilizing batch updates, the agent can take advantage of GPU parallelization for faster learning.

## Limitations and Extensions

While Experience Replay offers significant benefits, it also has some limitations and has been extended in various ways to address these shortcomings:

- Prioritized Experience Replay: Instead of sampling experiences uniformly at random, prioritized experience replay assigns a priority to each experience based on the magnitude of the associated temporal-difference (TD) error. Experiences with higher priorities are sampled more frequently, allowing the agent to focus on learning from more important transitions.

- Hindsight Experience Replay: In scenarios where the agent receives sparse rewards, hindsight experience replay helps the agent learn from unsuccessful experiences by reinterpreting them as successful ones in a different context.

## Explain Like I'm 5 (ELI5)

Imagine you're learning to ride a bike. Every time you try, you remember what happened: how you balanced, how you pedaled, and whether you fell or not. Experience Replay in machine learning is like keeping a scrapbook of all your bike-riding memories. Instead of learning only from your most recent attempt, you can look back at your scrapbook and learn from all your past experiences. This helps you get better at riding the bike faster and more efficiently.