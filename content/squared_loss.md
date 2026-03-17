---
title: "Squared loss"
slug: "squared_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Squared Loss

Squared loss, also known as mean squared error (MSE) or L2 loss, is a widely used [loss function](/wiki/loss_function) in [machine learning](/wiki/machine_learning) and [statistical modeling](/index.php?title=Statistical_modeling&action=edit&redlink=1) for measuring the discrepancy between predicted values and true values in a given dataset. The objective of any machine learning model is to minimize the loss function, which in turn improves the model's prediction accuracy.

### Definition

Formally, the squared loss is defined as the average of the squared differences between the predicted values (outputs) and the true values (targets). Given a dataset of *N* data points, with predicted values *ŷ_i* and true values *y_i*, the squared loss can be expressed mathematically as follows:

*L(ŷ, y) = (1/N) Σ_{i=1}^{N} (ŷ_i - y_i)^2*
where *L* is the squared loss, and the summation runs over all the data points.

### Properties

Some key properties of the squared loss function include:

- **Continuity and differentiability**: Squared loss is a smooth and continuous function, which makes it amenable to optimization algorithms, such as [gradient descent](/wiki/gradient_descent) and its variants.

- **Sensitivity to outliers**: Squared loss is sensitive to outliers, as the error term is squared, leading to a higher penalty for larger errors. This may result in the model being overly influenced by outliers.

- **Interpretability**: The squared loss function has a clear interpretation, as it measures the average squared difference between predicted and true values. This allows for easy comparison between different models and training methods.

## Applications

Squared loss is commonly employed in regression problems, such as [linear regression](/wiki/linear_regression), [ridge regression](/index.php?title=Ridge_regression&action=edit&redlink=1), and [support vector regression](/index.php?title=Support_vector_regression&action=edit&redlink=1). It is also applicable to other machine learning tasks, such as [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1), [ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1), and [Bayesian modeling](/index.php?title=Bayesian_modeling&action=edit&redlink=1). In some cases, it may be combined with other loss functions or regularizers to achieve specific learning objectives or to address particular issues, such as overfitting or robustness to outliers.

## Explain Like I'm 5 (ELI5)

Imagine you have a toy car, and you want to push it to a specific spot on the floor. Each time you push the car, you measure how far it is from the spot you wanted it to reach. This distance is called an "error." Now, instead of just adding up all the errors, you square them (multiply each error by itself) and then find their average. This gives you a number that tells you how well you're doing in getting the car to the right spot. In machine learning, this number is called the "squared loss," and it helps us understand how well our computer models are doing in predicting things.