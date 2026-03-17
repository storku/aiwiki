---
title: "Bias (math) or bias term"
slug: "bias_math_or_bias_term"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In the context of [Machine Learning](/index.php?title=Machine_Learning&action=edit&redlink=1), **bias** is a term used to describe the systematic error that a learning algorithm may have when trying to predict the true underlying relationship between input features and output targets. The **bias term**, also known as the **intercept** or simply **bias**, is a constant value added to the prediction function of a model, usually denoted as *b* or *w₀*, which helps in adjusting the output and improving the model's performance.

## Bias and Variance Tradeoff=

In machine learning, achieving a balance between bias and [variance](/index.php?title=Variance&action=edit&redlink=1) is essential for obtaining an optimal model. The bias-variance tradeoff refers to the tradeoff between the two types of errors that can occur when training a machine learning model:

### Bias Error

Bias error refers to the error caused by the model's inability to capture the true relationship between the input features and the output targets. A high bias indicates that the model's assumptions are too simplistic, leading to **underfitting** and poor generalization to new, unseen data. 

### Variance Error

Variance error, on the other hand, occurs when a model is too sensitive to small fluctuations in the training data. This sensitivity can lead to **overfitting**, where the model becomes highly accurate on the training data but performs poorly on unseen data due to its inability to generalize.

## Bias in Linear Regression

In [Linear Regression](/index.php?title=Linear_Regression&action=edit&redlink=1), the bias term plays a crucial role in improving the model's performance. Linear regression models the relationship between input features (independent variables) and output targets (dependent variables) as a linear function. The equation for a simple linear regression model is given by:

*y = w₁x + b*

Here, *y* is the output target, *x* is the input feature, *w₁* is the weight associated with the input feature, and *b* is the bias term. The bias term allows the linear regression model to fit the data better by adjusting the output, essentially shifting the line vertically to minimize the errors.

## Explain Like I'm 5 (ELI5)

Imagine you have a group of friends, and you want to predict how tall they will be when they grow up based on their current height. To do this, you might look at how tall their parents are and use that information to make your prediction. The bias term is like adding a little extra height to your prediction to make it more accurate, because maybe kids in your town are generally taller than kids in other towns. By adding the bias term, your predictions can be better adjusted and more accurate.