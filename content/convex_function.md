---
title: "Convex function"
slug: "convex_function"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

A **convex function** is a type of function that has particular mathematical properties, which are especially useful in the field of [machine learning](/wiki/machine_learning). Formally, a function *f* : *R^n* → *R* is called convex if, for all points *x* and *y* in its domain and for any scalar *t* in the range of 0 ≤ *t* ≤ 1, the following inequality holds:

f(tx + (1 - t)y) ≤ tf(x) + (1 - t)f(y)

This property ensures that the function exhibits a "bowl" or "curved" shape, and thus, any local minimum found within its domain is also the global minimum.

## Convex functions in machine learning

In machine learning, convex functions are often employed in the optimization of [loss functions](/index.php?title=Loss_functions&action=edit&redlink=1) and [regularization](/wiki/regularization) techniques, as they provide certain advantages in terms of computational efficiency and convergence.

### Loss functions

Loss functions are used to measure the discrepancy between the predicted and true values in a machine learning model. A convex loss function guarantees that there is a unique minimum, allowing optimization algorithms such as [gradient descent](/wiki/gradient_descent) to converge efficiently to the global minimum. Examples of convex loss functions include mean squared error (MSE) for regression problems and hinge loss for support vector machines.

### Regularization

Regularization techniques help prevent [overfitting](/wiki/overfitting) in machine learning models by adding a penalty term to the loss function. Convex regularization functions, such as L1 and L2 regularization, are commonly used due to their mathematical properties, which aid in the convergence of optimization algorithms.

## Explain Like I'm 5 (ELI5)

Imagine you have a bowl filled with water, and you want to find the lowest point inside the bowl. A convex function is like the shape of the bowl. In machine learning, we use these bowl-like functions to help us find the best possible answer, or the lowest point in the bowl. Since the shape of the bowl is smooth and curved, we can be sure that once we find the lowest point, it's the best possible answer. This makes it easier and faster for our computers to learn and make accurate predictions.