---
title: "Loss"
slug: "loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), *loss* refers to a quantitative measure of the discrepancy between a model's predicted outputs and the true or observed values. It serves as an evaluation metric to assess the performance of a machine learning algorithm during the training process. By minimizing the loss function, practitioners aim to improve the model's accuracy and generalization capabilities.

## Loss Functions

### Regression Loss Functions

Regression loss functions are utilized in regression problems, where the goal is to predict continuous values. Common regression loss functions include:

- **[Mean Squared Error (MSE)](/wiki/mean_squared_error_mse)**: The MSE measures the average squared difference between the predicted and true values. It is sensitive to outliers, as larger errors are penalized more severely.

- **[Mean Absolute Error (MAE)](/wiki/mean_absolute_error_mae)**: The MAE calculates the average absolute difference between predicted and true values. It is less sensitive to outliers compared to the MSE.

- **[Huber Loss](/index.php?title=Huber_Loss&action=edit&redlink=1)**: The Huber loss combines the best of both the MSE and MAE, as it is less sensitive to outliers while maintaining differentiability at zero error.

### Classification Loss Functions

Classification loss functions are employed in classification problems, where the objective is to predict discrete class labels. Widely used classification loss functions include:

- **[Cross-Entropy Loss](/index.php?title=Cross-Entropy_Loss&action=edit&redlink=1)**: Also known as log loss, cross-entropy loss measures the difference between the predicted probability distribution and the true distribution for the target class labels. It is commonly used in multi-class classification tasks.

- **[Hinge Loss](/index.php?title=Hinge_Loss&action=edit&redlink=1)**: Hinge loss is typically used for support vector machines and is suitable for binary classification tasks. It penalizes predictions that are on the incorrect side of the decision boundary or too close to it.

- **[Kullback-Leibler Divergence](/index.php?title=Kullback-Leibler_Divergence&action=edit&redlink=1)**: The Kullback-Leibler (KL) divergence, a measure of dissimilarity between two probability distributions, can be employed as a loss function to compare the predicted distribution with the true distribution.

## Optimization

To minimize the loss function, [optimization algorithms](/index.php?title=Optimization_algorithms&action=edit&redlink=1) like [gradient descent](/wiki/gradient_descent) and its variants ([stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1), [Adam](/index.php?title=Adam&action=edit&redlink=1), [RMSProp](/index.php?title=RMSProp&action=edit&redlink=1), etc.) are used to iteratively adjust the model's parameters. By minimizing the loss, the model learns to make predictions that are as close as possible to the true values, ultimately improving its performance.

## Regularization

In machine learning, [regularization](/wiki/regularization) techniques are employed to prevent [overfitting](/wiki/overfitting) by adding a penalty term to the loss function. Popular regularization methods include [L1 regularization](/wiki/l1_regularization), [L2 regularization](/wiki/l2_regularization), and [dropout](/index.php?title=Dropout&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you have to guess the number of candies in a jar. Each time you guess, you receive feedback on how far off your guess was. This feedback, or the difference between your guess and the actual number of candies, is like the "loss" in machine learning. The goal is to keep guessing until you minimize this difference and get as close as possible to the correct answer. In machine learning, we use mathematical functions called "loss functions" to measure how far off our predictions are from the true values. We want to minimize the loss to make our predictions better.