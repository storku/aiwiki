---
title: "Generalized linear model"
slug: "generalized_linear_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Generalized Linear Models (GLMs)

Generalized Linear Models (GLMs) are a class of statistical models that extend the [linear regression](/wiki/linear_regression) model, allowing for response variables with distributions other than the normal distribution. GLMs were first introduced by John Nelder and Robert Wedderburn in 1972, and have since become a fundamental tool in statistical modeling and machine learning.

### Components of a Generalized Linear Model

A GLM consists of three primary components:

1. 
2. 
3. 

#### Random Component

The random component in a GLM specifies the probability distribution of the response variable. In contrast to linear regression, which assumes the response variable is normally distributed, GLMs allow for a variety of distributions such as [Poisson](/index.php?title=Poisson_distribution&action=edit&redlink=1), [binomial](/index.php?title=Binomial_distribution&action=edit&redlink=1), or [gamma](/index.php?title=Gamma_distribution&action=edit&redlink=1), among others. The chosen distribution must be a member of the [exponential family](/index.php?title=Exponential_family_of_distributions&action=edit&redlink=1).

#### Systematic Component

The systematic component in a GLM is analogous to the linear predictor in a linear regression model. It is a linear combination of the predictor variables, which can be represented mathematically as:

β₀ + β₁ * X₁ + β₂ * X₂ + ... + βₚ * Xₚ

where β₀, β₁, ..., βₚ are the model coefficients and X₁, X₂, ..., Xₚ are the predictor variables.

#### Link Function

The link function in a GLM connects the random and systematic components. It is a continuous function that transforms the expected value of the response variable to the linear predictor. Common link functions include the [logit](/index.php?title=Logit_function&action=edit&redlink=1), [probit](/index.php?title=Probit_function&action=edit&redlink=1), and [log-link](/index.php?title=Log-link_function&action=edit&redlink=1), among others. The choice of the link function depends on the specific problem being modeled and the distribution of the response variable.

## Applications of Generalized Linear Models

GLMs have a wide range of applications across various fields, including but not limited to economics, biology, social sciences, and engineering. Some common applications of GLMs include:

- [Logistic regression](/wiki/logistic_regression), used for binary classification problems.

- [Poisson regression](/index.php?title=Poisson_regression&action=edit&redlink=1), used for modeling count data.

- [Gamma regression](/index.php?title=Gamma_regression&action=edit&redlink=1), used for modeling continuous, positively skewed data.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of LEGO bricks of different colors and shapes. You want to build a wall with a specific pattern, and you need to figure out how many of each type of brick you need. A generalized linear model (GLM) is like a set of instructions that helps you decide how many of each type of brick to use, and in what order, to build your wall.

In the world of math and statistics, GLMs help us understand how different pieces of information, like the LEGO bricks, are related to one another. By using GLMs, we can make predictions and understand the patterns in our data better.