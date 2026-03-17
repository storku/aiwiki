---
title: "Trajectory"
slug: "trajectory"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Trajectory in Machine Learning

Trajectory in machine learning refers to the sequence of decisions, actions, and states that a model undergoes as it learns to solve a particular problem. The concept of trajectory is especially important in the context of [reinforcement learning](/wiki/reinforcement_learning) and [optimization](/index.php?title=Optimization&action=edit&redlink=1) algorithms, where an agent iteratively refines its knowledge and actions in order to achieve better performance.

### Reinforcement Learning Trajectories

In the domain of reinforcement learning (RL), an agent interacts with an environment in order to learn an optimal policy, which is a mapping from states to actions. A trajectory in this context is a sequence of state-action pairs (s_t, a_t) that the agent experiences while exploring the environment. Trajectories are essential for understanding the learning process in RL, as they can provide valuable information about the agent's performance, the quality of the learned policy, and the convergence of the learning algorithm.

A critical aspect of RL trajectories is the concept of [reward](/wiki/reward) and [discount factor](/index.php?title=Discount_factor&action=edit&redlink=1). The reward is a scalar value that indicates how desirable a specific action is in a given state, while the discount factor determines the present value of future rewards. In order to learn an optimal policy, an agent seeks to maximize the expected sum of discounted rewards over time.

### Optimization Algorithm Trajectories

In the context of optimization algorithms, a trajectory represents the path traversed by an algorithm in the search space as it converges towards a local or global minimum. For example, [gradient descent](/wiki/gradient_descent) and its variants, such as [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD) and [Adam](/index.php?title=Adam_optimizer&action=edit&redlink=1), are optimization algorithms that update the model's parameters iteratively based on the gradient of the loss function. The trajectory, in this case, is the sequence of parameter updates that the algorithm performs during the optimization process.

Trajectories in optimization algorithms can be analyzed to study the convergence properties of the algorithm, the sensitivity to hyperparameters (for example learning rate), and the potential presence of saddle points or local minima in the search space.

## Explain Like I'm 5 (ELI5)

Imagine you are playing a video game, and you need to go from one point to another. As you move, you try different paths and learn from your mistakes. In machine learning, this is called a "trajectory." A trajectory is like a path or journey that the computer takes to learn how to do something better. In some types of machine learning, the computer tries to make the best choices to get the most points. In other types, the computer follows a path to find the best way to solve a problem. By looking at these paths, scientists can understand how well the computer is learning and if it's doing a good job.