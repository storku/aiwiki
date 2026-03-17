---
title: "Probabilistic regression model"
slug: "probabilistic_regression_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Probabilistic Regression Model

Probabilistic regression models are a class of [machine learning](/wiki/machine_learning) techniques that predict the relationship between input features and a continuous target variable by estimating a probability distribution of the target variable. These models account for uncertainties in the predictions by providing a range of possible outcomes and their associated probabilities. Probabilistic regression models are widely used in various fields, including finance, economics, and natural sciences, to make more informed decisions based on the uncertainty of the predictions.

### Types of Probabilistic Regression Models

There are several types of probabilistic regression models, including:

- [Bayesian linear regression](/index.php?title=Bayesian_linear_regression&action=edit&redlink=1): A variation of classical linear regression that incorporates prior knowledge of the regression coefficients and calculates their posterior distribution given the observed data. The output is a probability distribution over the possible values of the target variable.

- [Gaussian process regression](/index.php?title=Gaussian_process_regression&action=edit&redlink=1): A nonparametric approach that models the target variable as a sample from a Gaussian process, which is a collection of random variables with a joint Gaussian distribution. The output is a probability distribution over the possible values of the target variable, with a mean function and a covariance function defining the shape of the distribution.

- [Generalized linear models](/index.php?title=Generalized_linear_models&action=edit&redlink=1) (GLMs): A class of models that extend linear regression to allow for non-normal distributions of the target variable by using a link function to connect the input features with the target variable. GLMs can be used for probabilistic regression by fitting a probability distribution to the target variable.

## Estimating Uncertainty

Probabilistic regression models estimate the uncertainty in their predictions by providing a probability distribution over the possible values of the target variable. The shape of the distribution conveys information about the likelihood of different outcomes, with a wider distribution indicating greater uncertainty. In contrast, a narrower distribution suggests a higher degree of confidence in the prediction.

### Measuring Uncertainty

There are several ways to quantify the uncertainty in the predictions of a probabilistic regression model, including:

- Standard deviation: The square root of the variance, which measures the average dispersion of the predicted values from the mean. A larger standard deviation indicates greater uncertainty in the predictions.

- Confidence intervals: A range of values within which the true value of the target variable is expected to lie with a specified probability, typically 95% or 99%. Wider confidence intervals indicate greater uncertainty in the predictions.

- Prediction intervals: Similar to confidence intervals, but they account for both the uncertainty in the regression coefficients and the inherent variability of the target variable. Prediction intervals provide a range of values within which a new observation is expected to fall with a specified probability, given the input features.

## Explain Like I'm 5 (ELI5)

Imagine you want to guess how many points your favorite basketball player will score in the next game. You know their average score and their best and worst games. A probabilistic regression model is like a smart friend who uses this information to guess not just one number but a range of numbers, like between 20 and 30 points. This friend also tells you how sure they are about this guess. If they're very sure, the range of numbers will be smaller, like between 25 and 28 points. If they're not so sure, the range will be bigger, like between 15 and 35 points. This way, you can have a better idea of what might happen in the game and make decisions based on that information.