---
title: "Regression model"
slug: "regression_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A regression model in [machine learning](/wiki/machine_learning) is a type of supervised learning algorithm that is designed to predict continuous output values, based on input features. The main goal of regression models is to understand the relationships between the dependent variable (target) and the independent variables (features). Regression models have been widely adopted in various fields such as finance, healthcare, and economics, due to their ability to accurately predict outcomes and analyze data.

## Types of Regression Models

There are several types of regression models that can be used to analyze different types of data and relationships. Some of the most common regression models include:

### Linear Regression

[Linear regression](/wiki/linear_regression) is the simplest form of regression, which assumes a linear relationship between the input features and the output. This model attempts to fit a straight line to the data, minimizing the differences between the predicted and actual values.

### Polynomial Regression

Polynomial regression is an extension of linear regression, where the relationship between the input features and the output is modeled as an nth-degree polynomial. This allows for more complex, nonlinear relationships to be captured by the model.

### Ridge Regression

Ridge regression is a variant of linear regression that includes a regularization term to prevent overfitting. This technique can be particularly useful when there are multicollinearity issues or a high number of input features.

### Lasso Regression

[Lasso regression](/index.php?title=Lasso_regression&action=edit&redlink=1) is another regularization technique, similar to ridge regression. However, lasso regression tends to produce sparser models by encouraging some feature coefficients to be exactly zero, which can lead to better interpretability and feature selection.

### Logistic Regression

Although the name may suggest otherwise, [logistic regression](/wiki/logistic_regression) is used for classification problems, where the output is a discrete value. It models the probability of an outcome based on input features, using the logistic function to produce probabilities between 0 and 1.

## Performance Evaluation

To assess the performance of a regression model, various metrics can be employed. Some of the most common performance evaluation metrics include:

### Mean Squared Error (MSE)

MSE measures the average squared difference between the predicted and actual values. It is widely used due to its simplicity and interpretability.

### Root Mean Squared Error (RMSE)

RMSE is the square root of MSE, which provides an error metric that is on the same scale as the target variable.

### Mean Absolute Error (MAE)

MAE calculates the average absolute difference between the predicted and actual values, providing a more robust measure against outliers.

### R-Squared (R²)

R-squared is a measure of the proportion of variance in the target variable that is explained by the model. A higher R² value indicates better performance.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of points on a graph, and you want to draw a line that best represents the relationship between these points. A regression model in machine learning is like a tool that helps you draw that line. It looks at the data and figures out the best way to draw the line so that it can make good predictions about new data points. There are different types of regression models that can help you draw different kinds of lines, depending on the shape of the data.