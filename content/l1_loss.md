---
title: "L1 loss"
slug: "l1_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, various loss functions are used to measure the discrepancy between predicted values and actual values. L1 loss, also known as *Least Absolute Deviations* (LAD) or *Least Absolute Errors* (LAE), is one such loss function used in regression problems to estimate model parameters. L1 loss calculates the sum of absolute differences between predicted and actual values, making it robust to outliers and noise in the data.

## Mathematical Definition

L1 loss function is defined as the sum of the absolute differences between the predicted values (denoted as *ŷ*) and the actual values (denoted as *y*) for each data point in the dataset. The mathematical representation of L1 loss can be written as:

### Formulation

L1 loss is formulated as:

L1(y, ŷ) = Σ |y - ŷ|
Where:

- *y* represents the actual value of the data point

- *ŷ* represents the predicted value of the data point

- Σ denotes the summation over all data points in the dataset

- |.| represents the absolute value function

## Properties

L1 loss has several important properties that make it suitable for specific machine learning tasks:

### Robustness to Outliers

Due to its nature of summing absolute differences, L1 loss is less sensitive to outliers compared to other loss functions like [Mean Squared Error](/index.php?title=Mean_Squared_Error&action=edit&redlink=1) (MSE). This makes L1 loss suitable for regression problems where the data contains outliers or noise.

### Non-differentiability

L1 loss is non-differentiable at the origin (0), which can pose challenges during the optimization process. However, this property also encourages sparsity in the learned model parameters, making it useful for feature selection in high-dimensional datasets.

### Computational Efficiency

While L1 loss is not as computationally efficient as some other loss functions like MSE, it is relatively simple to implement and can be efficiently optimized using specialized algorithms, such as the [Least Absolute Shrinkage and Selection Operator](/index.php?title=Least_Absolute_Shrinkage_and_Selection_Operator&action=edit&redlink=1) (LASSO) for linear regression.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you need to guess how many candies are in a jar. For every guess you make, you'll get points based on how far off your guess is from the actual number of candies. If you're really close, you get fewer points, and if you're far off, you get more points. The goal is to make guesses that get you the least amount of points possible.

In this game, L1 loss is like the points you get based on the difference between your guess and the actual number of candies. Instead of looking at how far off you are in total, it looks at the absolute difference – so it doesn't matter if you overestimate or underestimate the number of candies. This way, even if your guess is sometimes way off, it doesn't affect your score as much as if you were using a different scoring system. This makes L1 loss helpful in situations where the data has some extreme values or mistakes.