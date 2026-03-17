---
title: "Ridge regularization"
slug: "ridge_regularization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, regularization is a technique used to prevent overfitting and improve the generalization of models by adding a penalty term to the objective function. Ridge regularization, also known as L2 regularization or Tikhonov regularization, is a specific type of regularization that adds a squared L2-norm of the model parameters to the loss function. This article discusses the underlying principles of ridge regularization, its implementation in linear regression, and its advantages and disadvantages.

## Ridge Regularization: Theoretical Background

Ridge regularization introduces a penalty term proportional to the sum of the squared values of the model's parameters, excluding the bias term. The penalty term is controlled by a hyperparameter, lambda (λ), which determines the strength of the regularization. The modified objective function with ridge regularization can be expressed as:

Objective function = Loss function + λ * (||w||²)

Here, 'w' represents the vector of model parameters, and '||w||²' denotes the squared L2-norm of the vector.

### Advantages

There are several advantages to using ridge regularization in machine learning models:

- Reduces overfitting by limiting the magnitude of the model parameters, thus promoting generalization.

- Improves model stability by handling multicollinearity, a situation in which predictor variables are highly correlated.

- Smooths the optimization landscape, making it easier for optimization algorithms to find good solutions.

### Disadvantages

Despite its benefits, ridge regularization also has some drawbacks:

- It does not perform variable selection, which may result in suboptimal models when there are irrelevant features.

- The optimal value of λ must be determined through techniques such as cross-validation, which can be computationally expensive.

## Ridge Regularization in Linear Regression

In the context of linear regression, ridge regularization modifies the ordinary least squares (OLS) objective function by adding the squared L2-norm of the weight vector. This results in the following ridge-regularized objective function:

Objective function = ||y - Xw||² + λ * (||w||²)

Here, 'y' represents the target vector, 'X' is the design matrix, and 'w' is the weight vector. By minimizing this objective function, the ridge-regularized linear regression model can be fit to the data.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to learn how to kick a soccer ball into a goal. You practice by kicking the ball at different angles and speeds. At first, you only focus on making goals without any obstacles, but in a real game, there will be other players blocking your way.

Ridge regularization is like adding imaginary players in your practice to make it more challenging. By doing this, you'll learn how to kick the ball more accurately and adapt to different situations. In the world of machine learning, ridge regularization helps a model avoid "overfitting," which means it's too focused on the training data and won't work well in real-world situations.