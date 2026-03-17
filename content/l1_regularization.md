---
title: "L1 regularization"
slug: "l1_regularization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## L1 Regularization in Machine Learning

L1 regularization, also known as Lasso regularization or L1 norm, is a widely used regularization technique in machine learning and statistical modeling to prevent overfitting and enhance the generalization of the model. It achieves this by introducing a penalty term in the optimization objective that encourages sparsity in the model parameters.

### Overview

Regularization techniques are employed in various machine learning algorithms to control the complexity of the model and reduce the risk of overfitting. Overfitting occurs when a model performs exceptionally well on the training data but poorly on unseen data, which is usually the result of an overly complex model capturing noise in the data rather than the true underlying patterns. L1 regularization is one such technique that addresses this issue by imposing a constraint on the absolute values of the model's parameters.

### L1 Regularization in Linear Models

In linear models, such as linear regression and logistic regression, L1 regularization adds an extra term to the loss function that is proportional to the sum of the absolute values of the model's coefficients. By doing so, it encourages sparsity in the parameter estimates, effectively reducing the number of features considered by the model. This can be particularly useful when dealing with high-dimensional datasets or when the dataset contains many irrelevant or redundant features.

### Advantages and Disadvantages

The primary advantage of L1 regularization is its ability to produce sparse models, which not only helps in mitigating overfitting but also improves the interpretability of the model by retaining only the most important features. Furthermore, L1 regularization can serve as a feature selection mechanism, especially in cases where there are a large number of features compared to the number of samples.

However, L1 regularization also has its limitations. When multiple features are highly correlated, L1 regularization tends to arbitrarily select one feature among the group, which can lead to suboptimal solutions. Additionally, L1 regularization may not perform well in cases where all features are equally important or contribute significantly to the model's prediction.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to build a model to predict something, like the price of a toy. You have a lot of information to work with, like the toy's color, size, material, and many other things. But some of these factors might not really matter, like whether the toy has a tiny scratch on it. L1 regularization is like a teacher who helps you focus on what's really important when making your prediction. By doing this, the teacher helps you build a simpler model that works well not just for the toys you already know about, but also for new toys you haven't seen before.