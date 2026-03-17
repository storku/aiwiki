---
title: "Iteration"
slug: "iteration"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), Iteration is when a [model](/wiki/model) [updates](/index.php?title=Update&action=edit&redlink=1) it's [parameters](/index.php?title=Parameters&action=edit&redlink=1) ([weights](/wiki/weights) and [biases](/wiki/biases)) one time during [training](/wiki/training). The number of [example]]s the model processes in each iteration is determined by the [hyperparameter](/wiki/hyperparameter) [batch size](/wiki/batch_size). If the batch size is 50, the model processes 50 examples before updating it's parameters - that is one iteration.

Machine learning involves iteration, which is the process of optimizing parameters in a model to enable accurate [predictions](/wiki/prediction) on [new data](/index.php?title=New_data&action=edit&redlink=1). This involves adjusting the parameters based on [errors](/index.php?title=Error&action=edit&redlink=1) made during [training](/wiki/training) on a [training](/wiki/training_data) [dataset](/wiki/dataset). By repeating this process multiple times, the model learns from its errors and improves its [accuracy](/wiki/accuracy).

One common application of iteration in machine learning is [gradient descent](/wiki/gradient_descent), an [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) designed to find the minimum [cost function](/index.php?title=Cost_function&action=edit&redlink=1). In gradient descent, the model's parameters are updated iteratively based on the [gradient](/wiki/gradient) of the [cost function](/index.php?title=Cost_function&action=edit&redlink=1) with respect to the parameters.

## What Happens in an Iteration?

In training a [neural network](/wiki/neural_network), a single iteration includes:

1. A forward pass to calculate the [loss](/wiki/loss) on a single [batch](/wiki/batch) of data.

2. A backward pass ([backpropagation](/wiki/backpropagation)) to modify the network's [parameters](/index.php?title=Parameters&action=edit&redlink=1) based on the loss and the rate at which it is learning ([learning rate](/wiki/learning_rate)).

## Types of Iterations

Machine learning often employs several types of iterations, such as:

1. [Stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD): when each iteration uses only 1 [example](/wiki/example) of the [training data](/wiki/training_data). After processing just 1 example, the model updates its weights and biases. While it is fast, SGD can be [unstable](/wiki/unstable).

2. [Mini-batch gradient descent](/index.php?title=Mini-batch_gradient_descent&action=edit&redlink=1): when each iteration uses a randomly chosen subset of training data to balance speed of [convergence](/wiki/convergence) with [stability](/wiki/stability) in the optimization process.

3. [Batch gradient descent](/index.php?title=Batch_gradient_descent&action=edit&redlink=1): when each iteration uses all of the training data. This form of gradient descent offers [stability](/wiki/stability) but may be computationally expensive for large datasets.

## Explain Like I'm 5 (ELI5)

Iteration in machine learning is like making educated guesses to find the correct answer. Imagine playing a guessing game with friends and they tell you if your guess is too high or low; using that information, you can use it to make an even better guess the next time around. This process of making one guess and using feedback for further refinement is known as iteration.

Machine learning relies on iteration to help computers learn from data. The computer begins with an initial guess about how to make predictions, and then updates its guess according to how well it did. This cycle continues until it gets as close to the right answer as possible.