---
title: "Estimator"
slug: "estimator"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Estimator in Machine Learning

In the context of machine learning, an **estimator** is an algorithm or function that approximates a target function or model based on a set of input data. The primary goal of an estimator is to make predictions or infer properties of an unknown function using observed data. Estimators can be broadly categorized into two types: **parametric** and **non-parametric**.

## Parametric Estimators

Parametric estimators assume that the target function or model belongs to a specific family of functions, described by a finite number of parameters. This assumption simplifies the estimation problem by reducing the search space. Examples of parametric estimators include:

### Linear Regression

[Linear regression](/wiki/linear_regression) is a popular technique for modeling the relationship between a dependent variable and one or more independent variables. In the case of simple linear regression, the estimator assumes that the relationship between the dependent and independent variables can be described by a linear equation with two parameters (slope and intercept).

### Logistic Regression

[Logistic regression](/wiki/logistic_regression) is a form of regression analysis that models the probability of an outcome in a binary classification problem. Like linear regression, it assumes a linear relationship between the independent variables and the log-odds of the probability of an outcome.

## Non-Parametric Estimators

Non-parametric estimators make fewer assumptions about the underlying function or model, allowing for more flexibility in the estimation process. Some common non-parametric estimation methods include:

### K-Nearest Neighbors

The [k-nearest neighbors](/index.php?title=K-nearest_neighbors&action=edit&redlink=1) (KNN) algorithm is a non-parametric method that can be used for both classification and regression tasks. It estimates the target function by considering the labels or values of the k nearest data points in the feature space.

### Kernel Density Estimation

[Kernel density estimation](/index.php?title=Kernel_density_estimation&action=edit&redlink=1) (KDE) is a non-parametric method used to estimate the probability density function of a random variable. It operates by placing a kernel function (for example Gaussian) at each data point and summing the resulting functions to obtain a smooth density estimate.

## Bias and Variance in Estimators

The performance of an estimator can be evaluated in terms of its bias and variance. [Bias](/wiki/bias) measures the difference between the expected value of the estimator and the true value of the parameter being estimated, while [variance](/index.php?title=Variance&action=edit&redlink=1) quantifies the spread of the estimator's values. A good estimator should have low bias and low variance, but there is often a trade-off between the two.

## Explain Like I'm 5 (ELI5)

An estimator in machine learning is like a detective trying to guess what happened based on clues. Some detectives have a fixed way of thinking (parametric estimators), and they use specific patterns to solve cases. Other detectives are more open-minded (non-parametric estimators) and use all the clues they can find to understand what happened. The goal of an estimator is to make the best guess possible based on the clues (data) they have, and the best detectives are those who can make accurate guesses with the least amount of errors.