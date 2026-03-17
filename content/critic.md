---
title: "Critic"
slug: "critic"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Critic in Machine Learning

In machine learning, a critic refers to a component or model that evaluates and provides feedback on the performance of another model, typically a learning agent. The term is commonly associated with [reinforcement learning](/wiki/reinforcement_learning) and [actor-critic methods](/index.php?title=Actor-critic_methods&action=edit&redlink=1), where it is used to estimate the value function or provide a performance gradient for the learning agent.

### Reinforcement Learning and Critic

[Reinforcement learning](/wiki/reinforcement_learning) (RL) is a subfield of machine learning that focuses on training agents to make decisions in an environment to maximize some notion of cumulative reward. The agent learns by interacting with the environment, receiving feedback in the form of rewards or penalties, and adjusting its decision-making process accordingly.

In RL, the value function is an essential component used to estimate the expected cumulative reward an agent can receive from a given state or state-action pair. A critic in RL is responsible for approximating the value function and providing the agent with feedback on its actions.

### Actor-Critic Methods

[Actor-critic methods](/index.php?title=Actor-critic_methods&action=edit&redlink=1) are a class of reinforcement learning algorithms that consist of two interacting components: the actor and the critic. The actor is responsible for selecting actions, while the critic evaluates the actor's performance by estimating the value function.

The critic helps the actor improve its policy by providing an estimate of the expected return (reward) for taking specific actions in certain states. The actor then updates its policy based on this feedback to improve its decision-making process.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to learn how to ride a bike. The critic in this situation would be like a helpful friend who watches you ride and gives you advice on how to balance better or pedal more efficiently. In machine learning, a critic is like that friend, giving feedback to another part of the system called the "actor" to help it improve its decisions and actions. The critic helps the actor learn to make better choices over time by telling it how well it's doing at a particular task.