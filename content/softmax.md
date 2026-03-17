---
title: "Softmax"
slug: "softmax"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), the **softmax function** is a widely used mathematical function for transforming a vector of numerical values into a probability distribution. Softmax is particularly useful in classification tasks where the goal is to assign an input to one of several possible categories. Softmax is often employed in combination with neural networks, such as [multilayer perceptrons](/index.php?title=Multilayer_perceptrons&action=edit&redlink=1) and [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1).

## Definition

The softmax function, denoted by σ(•), takes an input vector *x* of dimension *n* and maps it to a probability distribution over *n* classes. Formally, the softmax function is defined as follows:

σ(x)_i = exp(x_i) / Σ_j exp(x_j)

where

- i ∈ {1, 2, ..., n}

- x_i is the i-th component of the input vector *x*

- exp(•) is the [exponential function](/index.php?title=Exponential_function&action=edit&redlink=1)

## Properties

The softmax function possesses several important properties that make it suitable for classification tasks in machine learning:

### Normalization

The output of the softmax function is a probability distribution. The sum of all elements in the output vector is equal to 1:

Σ_i σ(x)_i = 1

This property ensures that the output can be interpreted as probabilities, which simplifies the interpretation of results in classification tasks.

### Monotonicity

The softmax function is monotonic, meaning that if x_i > x_j, then σ(x)_i > σ(x)_j. In other words, a higher input value will result in a higher probability after applying the softmax function. This property is crucial for preserving the relative order of input values when transforming them into probabilities.

### Differentiability

The softmax function is differentiable, which makes it suitable for use in gradient-based optimization algorithms, such as [gradient descent](/wiki/gradient_descent) or [backpropagation](/wiki/backpropagation). This property is particularly important in the context of training neural networks, where the goal is to minimize a loss function by adjusting the model's parameters.

## Applications

In machine learning, the softmax function is most commonly used in the output layer of neural networks for multi-class classification problems. Some examples include:

- [Image classification](/index.php?title=Image_classification&action=edit&redlink=1): Assigning an input image to one of several categories (for example distinguishing between cats and dogs)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): Predicting the next word in a sentence or identifying the part of speech of a given word

- [Reinforcement learning](/wiki/reinforcement_learning): Selecting the best action to take in a given state, based on the estimated rewards for each action

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of numbers, and you want to turn them into something that shows how likely each number is to be the "winner." The softmax function does just that. It takes the numbers, makes them bigger if they're more positive and smaller if they're more negative, and then squishes them all together so they add up to 1. This way, you can easily see which number has the highest chance of being the "winner." Softmax is often used in computers to help them learn and make decisions based on the information they get.