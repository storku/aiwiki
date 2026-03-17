---
title: "Mean Squared Error (MSE)"
slug: "mean_squared_error_mse"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Mean Squared Error (MSE)

Mean Squared Error (MSE) is a widely used metric to evaluate the performance of regression models in machine learning. It measures the average of the squared differences between the predicted values and the actual values. MSE is suitable for evaluating continuous variables and is particularly useful when dealing with datasets that include outliers, as it emphasizes larger errors due to the squaring operation. The lower the MSE, the better the model's performance in predicting the target variable.

### Formulation

Mathematically, the Mean Squared Error is defined as follows:

MSE = (1/n) * Σ(Pi - Yi)^2

Where:

- n is the number of data points or observations

- Pi is the predicted value for the i-th observation

- Yi is the actual value for the i-th observation

- Σ represents the summation operation

The formula calculates the difference between the predicted and actual values for each observation, squares the differences, and then computes their average. The result is a single non-negative value representing the overall performance of the model.

### Pros and Cons

Some advantages of using MSE as a performance metric include:

- It is easily interpretable, as it is expressed in the same units as the target variable.

- It penalizes larger errors more heavily, which can be beneficial when dealing with datasets containing outliers.

However, MSE also has some drawbacks:

- It is sensitive to the scale of the data, which can make it difficult to compare the performance of models trained on different datasets.

- Since the errors are squared, models with larger prediction errors may be disproportionately penalized, even if their overall performance is satisfactory.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to guess how many candies are in a jar. Each time you guess, you might be a little bit wrong. Mean Squared Error (MSE) is a way to measure how wrong your guesses are, on average. You take the difference between your guess and the actual number of candies, square it (multiply it by itself), and then find the average of all those squared differences.

If your guesses are pretty close to the actual number, the MSE will be small. If your guesses are way off, the MSE will be larger. This helps us understand how good our guessing method (or a machine learning model) is at predicting the right answer.