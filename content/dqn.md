---
title: "DQN"
slug: "dqn"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Overview

The **Deep Q-Network** (**DQN**) is an advanced model-free, online, off-policy reinforcement learning (RL) technique that combines the strengths of both deep neural networks and Q-learning. DQN was proposed by Volodymyr Mnih, et al. in their 2015 paper [Playing Atari with Deep Reinforcement Learning](/index.php?title=Deep_Learning_for_Atari_Game_Play&action=edit&redlink=1). The primary motivation behind DQN was to address the challenges of high-dimensional state spaces in RL problems, particularly those prevalent in video games, robotics, and other complex environments.

## Background

### Reinforcement Learning

[Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1) (RL) is a subfield of machine learning where an agent learns to make decisions in an environment by interacting with it and receiving feedback in the form of rewards or penalties. The agent aims to maximize the cumulative reward over time. RL algorithms, such as Q-learning and SARSA, are built upon the concept of estimating the optimal state-action value function, also known as the **Q-function**.

### Deep Learning

[Deep Learning](/index.php?title=Deep_Learning&action=edit&redlink=1) is a subset of machine learning that focuses on using artificial neural networks, particularly deep neural networks, to model complex patterns and representations in data. These deep networks have proven to be particularly effective at processing large and complex data sets, such as images, text, and speech.

## Deep Q-Networks

DQN is an extension of the classic Q-learning algorithm that leverages deep learning to approximate the Q-function. By using a deep neural network as a function approximator, DQN can handle high-dimensional state spaces and large action spaces, which are typically challenging for traditional RL methods.

### Experience Replay

One of the key innovations of the DQN algorithm is the introduction of an **experience replay** buffer, which stores the agent's past experiences as tuples of (state, action, reward, next state, done). During training, DQN samples mini-batches of experiences from this buffer to update the Q-network. This approach helps to break the correlations between consecutive samples, improving the stability and efficiency of the learning process.

### Target Network

DQN also employs a separate **target network** with identical architecture to the Q-network, which is used to calculate the target Q-values for the update step. The weights of the target network are updated periodically by copying the weights from the Q-network, further stabilizing the learning process.

### Double DQN

In an effort to address the overestimation of Q-values often encountered in DQN, Hado van Hasselt, et al. introduced the [Double DQN](/index.php?title=Double_DQN&action=edit&redlink=1) (DDQN) algorithm in their 2015 paper [Deep Reinforcement Learning with Double Q-learning](/index.php?title=Deep_Reinforcement_Learning_with_Double_Q-learning&action=edit&redlink=1). The key improvement in DDQN is to decouple the action selection and target Q-value estimation, thereby reducing the overestimation bias in the learning process.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you control a character, and your goal is to collect as many coins as possible. In this game, you have a little helper (the DQN algorithm) that watches you play and learns from your actions. The helper remembers what you did, where you went, and how many coins you collected. It then uses this information to figure out the best possible moves for you to make in the future.

The DQN helper uses its "brain" (a deep neural network) to learn how to make good decisions. It also has a special trick called "experience replay" that helps it remember and learn from your past actions more effectively. It keeps a diary of your experiences, and it occasionally looks back at its diary to learn from what happened before. This way, it gets better at making decisions as you keep playing the game.