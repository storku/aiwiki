---
title: "Bayesian optimization"
slug: "bayesian_optimization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Bayesian optimization is a global optimization technique in the field of machine learning, primarily used for hyperparameter tuning and expensive black-box optimization problems. The approach is based on the principles of Bayesian inference, where prior knowledge is updated with observed data to make better predictions about the unknown function. Bayesian optimization has been widely used in various applications, including neural network architecture design, automatic machine learning (AutoML), and reinforcement learning.

## Bayesian Optimization Components

### Surrogate Model

The core component of Bayesian optimization is the surrogate model, which is used to approximate the unknown target function. Gaussian Processes (GPs) are the most commonly used surrogate models in Bayesian optimization due to their ability to model complex functions with uncertainty estimates. GPs are non-parametric models that define a prior distribution over functions, which is updated with observed data to form a posterior distribution.

### Acquisition Function

The acquisition function guides the exploration-exploitation trade-off in Bayesian optimization. It is a utility function that determines the next point to sample in the search space by balancing the exploitation of regions with high predicted performance and the exploration of regions with high uncertainty. Commonly used acquisition functions include Expected Improvement (EI), Probability of Improvement (PI), and Upper Confidence Bound (UCB).

## Algorithm Overview

The Bayesian optimization algorithm consists of the following steps:

1. Define a surrogate model (for example Gaussian Process) and an acquisition function (for example Expected Improvement).
2. Sample a few initial points in the search space and evaluate the target function.
3. Update the surrogate model with the observed data.
4. Optimize the acquisition function to find the next point to sample in the search space.
5. Evaluate the target function at the new point and update the surrogate model.
6. Repeat steps 4-5 until a stopping criterion is met, such as a predefined number of iterations or a convergence threshold.

## Advantages and Limitations

### Advantages

- Bayesian optimization is sample-efficient, making it particularly useful for expensive optimization problems.

- The method incorporates uncertainty estimates, enabling a more informed exploration-exploitation trade-off.

- It is a global optimization technique, reducing the risk of converging to local optima.

### Limitations

- Bayesian optimization may suffer from high computational complexity, particularly in high-dimensional search spaces.

- The performance of Bayesian optimization depends on the choice of the surrogate model and acquisition function.

- It assumes that the target function is smooth, which may not be the case for all optimization problems.

## Applications

Bayesian optimization has been successfully applied in various machine learning tasks, such as:

- Hyperparameter tuning for [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) models and other machine learning algorithms.

- Neural architecture search for designing optimal neural network structures.

- [Reinforcement learning](/wiki/reinforcement_learning) optimization, where the goal is to learn a policy that maximizes the expected cumulative reward.

## Explain Like I'm 5 (ELI5)

Bayesian optimization is a smart way to find the best solution for a problem by trying out different options, like finding the perfect recipe for a cake. Instead of trying every single possibility, it uses a "best guess" method, which helps it find the best option quicker. It also considers how sure it is about its guesses and decides whether it should try something new or stick with what it knows. This approach is used in computer programs to make them learn better and faster.