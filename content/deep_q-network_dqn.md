---
title: "Deep Q-Network (DQN)"
slug: "deep_q-network_dqn"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, **Deep Q-Network (DQN)** is an algorithm that combines the concepts of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) and [reinforcement learning](/wiki/reinforcement_learning) to create a robust and efficient model for solving complex problems. The DQN algorithm, introduced by researchers at DeepMind in 2013[&#91;1&#93;](#cite_note-1), utilizes a deep neural network to approximate the Q-function, which represents the expected cumulative reward for taking a particular action in a given state. This approach has demonstrated significant success in various applications, including playing Atari games and controlling robotic systems.

## Background

### Reinforcement Learning

[Reinforcement learning](/wiki/reinforcement_learning) (RL) is a subfield of machine learning that deals with training an agent to learn optimal actions within an environment by interacting with it and receiving feedback in the form of rewards. The objective of the agent is to learn a policy that maximizes the cumulative reward over time. A key concept in RL is the Q-function, which estimates the expected return (or value) of taking an action in a given state.

### Deep Learning

[Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) is a subfield of machine learning that focuses on deep neural networks, which consist of multiple layers of interconnected nodes or neurons. These networks are capable of learning complex, non-linear relationships within data, making them suitable for tasks like image and speech recognition, natural language processing, and other high-dimensional problems.

## Deep Q-Network

A Deep Q-Network (DQN) is an algorithm that combines reinforcement learning and deep learning by using a deep neural network to approximate the Q-function. The input to the network is the current state of the environment, and the output is a vector of Q-values representing the expected cumulative rewards for each possible action.

### Experience Replay

An essential component of the DQN algorithm is the use of **experience replay**, which is a technique that stores the agent's past experiences, including states, actions, rewards, and subsequent states, in a buffer called the replay memory. During training, the DQN samples random mini-batches of experiences from the replay memory to update the network's weights. This process helps break the correlations between consecutive samples, improving the stability and efficiency of the learning process.

### Target Network

Another critical aspect of the DQN algorithm is the **target network**, which is a copy of the main network that is updated less frequently. The target network is used to compute the target Q-values during training, reducing the risk of oscillations and divergence due to the correlation between the Q-function and the network's weights.

## Applications

DQN has been successfully applied to a variety of tasks, including:

- Playing Atari games, where the algorithm outperformed human experts and previous methods in several games<ref>{{cite journal |title=Human-level control through deep reinforcement learning |author=Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Andrei A. Rusu, Joel Veness, Marc G. Bellemare, Alex Graves, Martin Riedmiller, Andreas K. Fidjeland, Georg Ostrovski, Stig Petersen, Charles Beattie, Amir Sadik, Ioannis Antonoglou, Helen King, Dharshan Kumaran, Daan Wierstra, Shane Legg, Demis Hassabis |journal=Nature |volume=518 |pages=529–533 |year

1. [↑](#cite_ref-1) [Template:Cite journal](/index.php?title=Template:Cite_journal&action=edit&redlink=1)