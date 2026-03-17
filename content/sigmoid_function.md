---
title: "Sigmoid function"
slug: "sigmoid_function"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, the **sigmoid function** is a widely used mathematical function that transforms input values into probabilities, ranging from 0 to 1. It is often employed in various types of machine learning algorithms, particularly in [artificial neural networks](/index.php?title=Artificial_neural_networks&action=edit&redlink=1) and [logistic regression](/wiki/logistic_regression) models, to map continuous inputs to probabilities for binary classification tasks. The sigmoid function is characterized by its distinctive S-shaped curve, which is also known as the logistic curve.

## Definition and Mathematical Representation

The sigmoid function, denoted as σ(x), is mathematically defined as:

σ(x) = \(\frac{1}{1 + e^{-x}}\)
where *x* represents the input value and *e* is the base of the natural logarithm, approximately equal to 2.71828. The function compresses input values into a range between 0 and 1, with the output approaching 0 as *x* tends to negative infinity and approaching 1 as *x* tends to positive infinity.

### Properties

The sigmoid function possesses several key properties that make it suitable for machine learning applications:

- **Differentiable:** The sigmoid function is smooth and differentiable, which is essential for gradient-based optimization algorithms such as [gradient descent](/wiki/gradient_descent).

- **Monotonic:** The function is strictly increasing, meaning that the output will increase as the input increases, and vice versa. This property ensures that the function preserves the order of input values.

- **Range:** The function's output range is limited to the open interval (0, 1), making it ideal for representing probabilities or binary decisions.

- **Centered:** The sigmoid function is symmetric around the origin and its midpoint, which occurs at *x* = 0, corresponds to a probability of 0.5.

## Applications in Machine Learning

The sigmoid function is commonly used in machine learning as an [activation function](/wiki/activation_function) in artificial neural networks, especially in binary classification problems. In this context, the sigmoid function maps the weighted input sum to a probability, allowing the network to make binary decisions based on the threshold, typically set at 0.5. Additionally, it is the primary activation function for logistic regression, where it maps the linear combination of input features to a probability estimate.

## Explain Like I'm 5 (ELI5)

Imagine you have a long line of numbers, some positive and some negative. You want to squeeze these numbers into a smaller range, from 0 to 1, so that you can easily compare them. The sigmoid function does exactly that! It's like a magical slide that takes each number and slides it into the 0 to 1 range. This is very helpful in machine learning because it helps computers understand things like probabilities and make decisions based on them.