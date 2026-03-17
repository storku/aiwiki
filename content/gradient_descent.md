---
title: "Gradient descent"
slug: "gradient_descent"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Gradient descent is a popular [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) in [machine learning](/wiki/machine_learning). Its goal is to minimize the [loss](/wiki/loss) of the [model](/wiki/model) during [training](/wiki/training). To accomplish this, gradient descent adjusts the [weights](/wiki/weights) and [biases](/wiki/biases) of the model during each [training](/wiki/training) [iteration](/wiki/iteration).

## How Gradient Descent Works

Gradient descent works by iteratively altering the [parameters](/index.php?title=Parameters&action=edit&redlink=1) of a model in order to obtain the steepest descent of the [cost function](/index.php?title=Cost_function&action=edit&redlink=1), which measures how well it's performing. Gradient descent wants to find parameters that minimize this cost function.

The algorithm starts with an initial set of parameters and iteratively updates the parameters until it reaches a minimum point in the cost function. At each iteration, the gradient of the cost function is computed with respect to the parameters. This gradient is represented as a vector pointing in the direction of the steepest increase in the cost function. To minimize this cost function, parameters are updated in direct opposition to that direction.

The update rule for parameters is determined by a [learning rate](/wiki/learning_rate), which controls the step size of each iteration. A small learning rate may lead to slow [convergence](/wiki/convergence), while an excessively high one could cause the model to [overshoot](/index.php?title=Overshoot&action=edit&redlink=1) the minimum point.

## Types of Gradient Descent

Gradient descent can be divided into three types: [batch gradient descent](/index.php?title=Batch_gradient_descent&action=edit&redlink=1), [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1), and [mini-batch gradient descent](/index.php?title=Mini-batch_gradient_descent&action=edit&redlink=1).

### Batch Gradient Descent

[Batch gradient descent](/index.php?title=Batch_gradient_descent&action=edit&redlink=1) updates the parameters after computing the gradient of a cost function over all [training datasets](/wiki/training_dataset). Although it can be computationally expensive for large datasets, it can converge to the [global minimum](/index.php?title=Global_minimum&action=edit&redlink=1) in terms of this cost function.

### Stochastic Gradient Descent

[Stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) updates the parameters after computing the gradient of a cost function for one training [example](/wiki/example). It is less computationally expensive than batch gradient descent, though it may converge to a local minimum in the cost function.

### Mini-Batch Gradient Descent

Mini-batch gradient descent is a method for updating parameters after computing the gradient of a cost function for a small set of training [examples](/wiki/examples). It offers an alternative to batch gradient descent and stochastic gradient descent, being less computationally intensive than batch gradient descent and capable of converge to either global minimum or local minimum in the cost function.

## Regularization

Gradient descent can also be enhanced with [regularization](/wiki/regularization) techniques, which reduce overfitting and enhance the generalization of the model. Regularization techniques like [L1](/wiki/l1_regularization) or [L2](/wiki/l2_regularization) add a penalty term to the cost function that penalizes large parameter values; this encourages models to use smaller parameter values while helping prevent overfitting.

## Explain Like I'm 5 (ELI5)

Gradient descent is like finding the fastest route down a steep mountain. Imagine yourself perched atop this immense peak, eager to reach its base as quickly as possible.

To expedite your descent down the mountain, take steps in the direction that will bring you down the fastest. You can tell which way to go by looking at the slope beneath your feet; if one direction is steeper than another, that is likely where you should head.

Take a step in that direction, then look again at the slope. Repeat this process until you reach the bottom.

Machine learning utilizes gradient descent to determine the best values for certain parameters that influence predictions. We examine how changing these parameters affects how accurately our predictions match actual outcomes and use gradient descent to find these values that will give our forecasts maximum [precision](/wiki/precision).