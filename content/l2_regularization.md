---
title: "L2 regularization"
slug: "l2_regularization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

L2 regularization, also known as [ridge regression](/index.php?title=Ridge_regression&action=edit&redlink=1) or Tikhonov regularization, is a technique employed in machine learning to prevent [overfitting](/wiki/overfitting) and improve the generalization of a model. It is a form of regularization that adds a penalty term to the objective function, which helps in constraining the model's complexity. L2 regularization is particularly useful for linear regression models, but can also be applied to other types of models.

## L2 Regularization in Machine Learning

### Regularization Techniques

In machine learning, the goal is to develop models that can perform well on unseen data. However, it is common for models to fit the training data too closely, leading to overfitting. Regularization techniques, such as L2 regularization, are used to address this issue by introducing additional constraints on the model's parameters, which helps to control the complexity of the model and improve generalization.

### How L2 Regularization Works

L2 regularization works by adding a penalty term to the objective function that is proportional to the squared Euclidean norm of the model's parameters. This penalty term encourages the model to have smaller parameter values, resulting in a smoother and less complex model. L2 regularization effectively shrinks the coefficients of the model, which reduces the risk of overfitting and improves the model's performance on new data.

## Advantages and Disadvantages

### Advantages

1. **Prevents overfitting:** L2 regularization helps to prevent overfitting by constraining the model's complexity and encouraging simpler solutions.
2. **Stability:** Ridge regression is more stable than ordinary linear regression, especially when the features are multicollinear or the input matrix is ill-conditioned.
3. **Better generalization:** Models with L2 regularization tend to perform better on unseen data, as they prioritize solutions that are more likely to generalize well.

### Disadvantages

1. **Bias:** L2 regularization introduces bias into the model, as it favors simpler solutions with smaller coefficients. This might lead to underfitting in some cases.
2. **Hyperparameter tuning:** The strength of the L2 regularization penalty term is controlled by a hyperparameter, which requires careful tuning to achieve optimal performance.

## Explain Like I'm 5 (ELI5)

Imagine you're building a toy car with LEGO bricks. You have a big box of LEGO pieces, and you want your car to drive well on different surfaces like carpets, hardwood floors, and sidewalks. If you use too many complicated pieces, the car might work great on the carpet but not on the sidewalk. That's like overfitting in machine learning.

L2 regularization is like having a rule that you can't use too many fancy LEGO pieces. This way, your car will be simpler and work better on all surfaces. It might not be perfect on any one surface, but it will work well enough on all of them. That's like a machine learning model that doesn't overfit and can perform well on new, unseen data.