---
title: "Markov property"
slug: "markov_property"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

The **Markov property** is a fundamental concept in the fields of probability theory, statistics, and machine learning. It is named after the Russian mathematician [Andrey Markov](/index.php?title=Andrey_Markov&action=edit&redlink=1), who first formalized the idea in the early 20th century. The Markov property describes a stochastic process, where the future state of a system depends only on its current state and not on its previous history.

## Markov Chains

### Definition

A **Markov chain** is a stochastic model that captures the Markov property. It consists of a set of states, and transitions between these states occur with specified probabilities. Mathematically, a Markov chain is defined by a set of states (S), a transition matrix (P) of probabilities, and an initial state distribution (π). The transition matrix P represents the probability of transitioning from one state to another, with the element P_ij denoting the probability of transitioning from state i to state j.

### Applications

Markov chains have been widely used in various fields, including:

- [Computer Science](/index.php?title=Computer_Science&action=edit&redlink=1): In algorithms for text generation, parsing, and speech recognition

- [Finance](/wiki/finance): To model stock price movements and option pricing

- [Biology](/index.php?title=Biology&action=edit&redlink=1): For DNA sequence analysis and modeling biological processes

- [Operations Research](/index.php?title=Operations_Research&action=edit&redlink=1): In the study of queuing theory and resource allocation problems

## Markov Decision Processes

A **Markov Decision Process** (MDP) is an extension of a Markov chain that incorporates decision-making under uncertainty. An MDP is defined by a tuple (S, A, P, R, γ), where S represents the set of states, A is the set of actions, P is the state transition probability matrix, R is the reward function, and γ is the discount factor.

MDPs are widely used in [Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1) (RL), a subfield of machine learning focused on training agents to make decisions by interacting with an environment. RL algorithms, such as Q-learning and Policy Gradient methods, solve MDPs by learning an optimal policy that maximizes the expected cumulative reward over time.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a simple board game with your friends. The game has several spaces, and each turn, you roll a dice to see how many spaces you'll move. The Markov property means that, no matter where you were before or how you got there, your next move depends only on your current space and the dice roll. It's like having a short memory, only remembering where you are now and not worrying about the past.

Markov chains and Markov decision processes are like more complicated versions of this game, where you have different actions or choices to make, and maybe even rewards or points to earn. These ideas help us understand and solve problems in many areas, from computers understanding what we say to figuring out the best strategies for games and businesses.