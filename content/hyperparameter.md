---
title: "Hyperparameter"
slug: "hyperparameter"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) involves finding the optimal set of [parameters](/index.php?title=Parameters&action=edit&redlink=1) that allows the [model](/wiki/model) to make accurate [predictions](/index.php?title=Predictions&action=edit&redlink=1) on new [data](/index.php?title=Data&action=edit&redlink=1). Unfortunately, certain parameters cannot be learned from [training data](/wiki/training_data) and must be set before [training](/wiki/training) the model - these are known as hyperparameters - which play a significant role in determining the model's performance.

## Definition

Hyperparameters are parameters set before training a [machine learning model](/wiki/machine_learning_model) that influence its behavior and performance. Unlike regular parameters ([weights](/wiki/weights) and [biases](/wiki/biases), which are learned from data during training, hyperparameters must be set by an outside party and may significantly impact the final result of the model.

## Examples

Some common hyperparameters in machine learning include:

- [Learning rate](/wiki/learning_rate): This hyperparameter controls the step size used to update parameters in a model during training. A high learning rate may cause the model to [converge](/index.php?title=Converge&action=edit&redlink=1) quickly, but may also overshoot its optimal solution and produce suboptimal performance. Conversely, a low learning rate could cause slow convergence or get stuck in suboptimal solutions.

- Number of [Hidden layers](/wiki/hidden_layer): This hyperparameter determines the number of [layers](/wiki/layer) in a [neural network](/wiki/neural_network) model. A deep network with many hidden layers can capture complex [features](/wiki/features) and patterns in data but may also be susceptible to [overfitting](/wiki/overfitting). On the other hand, a shallow network with few hidden layers may be easier to train but may not capture all relevant information present in the [dataset](/wiki/dataset).

- [Regularization](/wiki/regularization) strength: This hyperparameter determines the strength of a penalty term used to prevent overfitting in a model. A high regularization strength can help avoid this problem, but may also lead to [underfitting](/wiki/underfitting) the training data. On the other hand, low regularization strengths may provide a good fit with training data but may not generalize well to new data sources.

## Optimization

Selecting the optimal set of hyperparameters for machine learning models is a vital task, often involving hyperparameter optimization. This involves searching for the optimal set of hyperparameters that produces the best performance from a model. There are various methods available for optimizing hyperparameters, such as:

- [Grid search](/index.php?title=Grid_search&action=edit&redlink=1): This method involves evaluating a model's performance against a grid of hyperparameter values. While this can be time-consuming for models with many parameters, it is simple to implement and usually produces promising outcomes.

- [Random search](/index.php?title=Random_search&action=edit&redlink=1): This technique involves randomly selecting hyperparameters from a distribution and evaluating the model's performance for each set. While it may be faster than grid search in models with many hyperparameters, it does not guarantee finding the optimal set of hyperparameters.

- [Bayesian optimization](/wiki/bayesian_optimization): This technique involves creating a probabilistic model of the hyperparameters and using it to select the most promising set for evaluation. It can be more efficient than grid search or random search, often producing good results with fewer evaluations.

## Explain Like I'm 5 (ELI5)

Imagine you are teaching a robot how to play a game, but first it needs to know the rules it should follow. These instructions serve as hyperparameters in machine learning - they dictate how the robot should act and react when playing the game.

For example, you could instruct the robot to take one step at a time or two steps at once. This is similar to setting the learning rate hyperparameter on machine learning models; it tells them how much to adjust their predictions based on new data they encounter.

You could instruct the robot to pay close attention to other players or focus solely on itself. This is similar to setting a regularization strength hyperparameter in machine learning models - how much attention should be paid to training data to prevent overfitting.