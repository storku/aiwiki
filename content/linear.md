---
title: "Linear"
slug: "linear"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Linear Models in Machine Learning

### Introduction

In machine learning, linear models are a class of algorithms that utilize a linear relationship between input features and the output variable to make predictions. These models assume that the relationship between the input features ([independent variables](/index.php?title=Independent_variables&action=edit&redlink=1)) and the output ([dependent variable](/index.php?title=Dependent_variable&action=edit&redlink=1)) can be represented by a straight line, or more generally, a hyperplane in higher-dimensional spaces. This simplifying assumption makes linear models easy to understand, computationally efficient, and suitable for a wide range of applications.

### Types of Linear Models

There are several types of linear models that are commonly used in machine learning, including:

- **[Linear Regression](/index.php?title=Linear_Regression&action=edit&redlink=1)** - A regression technique that models the relationship between one or more independent variables and a continuous dependent variable. It aims to find the best-fitting line (or hyperplane) that describes the relationship between the input features and the output variable.

- **[Logistic Regression](/index.php?title=Logistic_Regression&action=edit&redlink=1)** - A classification technique that models the probability of a binary outcome (for example success/failure, 1/0) based on one or more independent variables. It uses the logistic function to transform the linear output into a probability value between 0 and 1.

- **[Support Vector Machines (SVM)](/index.php?title=Support_Vector_Machines_(SVM)&action=edit&redlink=1)** with linear kernel - A powerful classification and regression technique that seeks to find the optimal hyperplane that separates data points belonging to different classes or predicts a continuous output value. When using a linear kernel, the model assumes a linear relationship between the input features and the output.

### Assumptions and Limitations

Linear models make several key assumptions that may limit their applicability in certain situations:

- **Linearity** - The relationship between the input features and the output variable is assumed to be linear. This assumption may not hold true for all real-world problems, and if the relationship is more complex, linear models might not provide accurate predictions.

- **Independence of Errors** - The errors (residuals) in the model are assumed to be independent of each other. This means that the error at one observation should not affect the error at another observation. If this assumption is violated, it may lead to biased results.

- **Homoscedasticity** - The variance of the errors should be constant across all levels of the independent variables. If this assumption is not met, the model may suffer from heteroscedasticity, which could impact the accuracy of predictions and the validity of hypothesis tests.

Despite these limitations, linear models often serve as a good starting point for understanding more complex models and can be useful in practice when the assumptions are approximately satisfied.

## Explain Like I'm 5 (ELI5)

In machine learning, linear models are like trying to draw a straight line to show the relationship between things. For example, imagine you have a pile of apples and you want to know how much they weigh. You could use a linear model to guess the weight based on the number of apples. This works well if the relationship between the number of apples and their weight is simple, like a straight line. But if the relationship is more complicated, like a curvy line, then the linear model might not work as well.