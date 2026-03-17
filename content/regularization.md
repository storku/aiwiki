---
title: "Regularization"
slug: "regularization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Regularization in Machine Learning

Regularization is a technique used in machine learning to prevent overfitting, which occurs when a model learns to perform well on the training data but does not generalize well to unseen data. Regularization works by adding a penalty term to the objective function, which encourages the model to select simpler solutions that are more likely to generalize to new data. There are several types of regularization techniques, such as L1 and L2 regularization, which are applied depending on the specific problem and model.

### L1 Regularization

L1 regularization, also known as Lasso regularization, adds the absolute values of the model weights to the objective function. This penalty term encourages the model to use fewer features and drives some feature weights to zero, effectively performing feature selection. L1 regularization is particularly useful when dealing with high-dimensional data or when it is suspected that only a subset of features is relevant for the task. For more details, see [Lasso (statistics)](/index.php?title=Lasso_(statistics)&action=edit&redlink=1).

### L2 Regularization

L2 regularization, also known as Ridge regularization, adds the squared values of the model weights to the objective function. This penalty term discourages the model from using large weights, resulting in a smoother, less complex solution. L2 regularization can help mitigate multicollinearity, a situation where predictor variables are highly correlated. This technique is often used in linear regression and logistic regression models. For more information, see [Ridge regression](/index.php?title=Ridge_regression&action=edit&redlink=1).

### Elastic Net Regularization

Elastic Net regularization is a combination of L1 and L2 regularization techniques. It includes both the absolute values and squared values of the model weights in the penalty term. This hybrid approach enables the model to take advantage of both L1 and L2 regularization properties, such as feature selection and smoother solutions. Elastic Net regularization is particularly useful when dealing with data that has a mix of important and irrelevant features, as well as multicollinearity. For more details, see [Elastic Net (statistics)](/index.php?title=Elastic_Net_(statistics)&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you're building a sandcastle using a limited amount of sand. You want your sandcastle to look great and be as sturdy as possible. In machine learning, the sand represents the information we have, and the sandcastle is the model we build.

Sometimes, when we build our sandcastle (or model), we focus too much on making it look perfect using the sand we have, and we forget that it needs to be sturdy enough to withstand waves or wind (unseen data). Regularization is like adding some water or using a different technique while building our sandcastle to make it stronger and more resilient. This way, it will look good and be sturdy, even when faced with new challenges.