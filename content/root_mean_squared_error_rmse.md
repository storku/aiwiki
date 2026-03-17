---
title: "Root Mean Squared Error (RMSE)"
slug: "root_mean_squared_error_rmse"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning, **Root Mean Squared Error (RMSE)** is a widely used metric for evaluating the performance of regression models. It quantifies the difference between the predicted values and the true values by calculating the square root of the average of the squared differences. The RMSE is particularly useful because it gives a measure of error that is interpretable in the same unit as the original values, and it assigns a higher weight to larger errors.

## Definition

The Root Mean Squared Error is defined as the square root of the mean squared error (MSE), which in turn is the average of the squared differences between the predicted values and the actual values. Mathematically, it can be represented as:

*RMSE = √(Σ(Pi - Oi)² / N)*
where:

- *Pi* is the predicted value for the i-th observation,

- *Oi* is the actual value for the i-th observation,

- *N* is the total number of observations,

- and *Σ* denotes the sum over all observations.

## Properties and Interpretation=

The RMSE has several important properties that make it a popular choice for evaluating the performance of regression models:

- **Scale-dependent:** The RMSE is dependent on the scale of the target variable, which means that its value is interpretable in the same unit as the original values.

- **Sensitive to large errors:** Due to the squaring of differences, the RMSE is more sensitive to large errors than other metrics, such as the mean absolute error (MAE). This property can be beneficial when it is crucial to penalize large deviations.

- **Non-negative:** The RMSE is always a non-negative value, with a value of 0 indicating a perfect fit between the predicted values and the actual values.

It is important to note that the RMSE should be used in conjunction with other evaluation metrics, such as the [coefficient of determination](/index.php?title=Coefficient_of_determination&action=edit&redlink=1) (R²), to gain a comprehensive understanding of the model's performance.

## Explain Like I'm 5 (ELI5)

Imagine you are trying to guess the weight of a few bags of apples. After guessing the weight of each bag, you want to know how far off your guesses were from the actual weights. The Root Mean Squared Error (RMSE) helps you do that. It measures how far off your guesses were on average, but it cares more about big mistakes than small ones. The RMSE is useful because it tells you how far off your guesses were in the same unit (like pounds or kilograms) that you were guessing in the first place.