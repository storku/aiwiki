---
title: "Linear model"
slug: "linear_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Linear Models in Machine Learning

Linear models are a class of statistical models and machine learning algorithms that assume a linear relationship between input features and output. They are often used for regression and classification tasks due to their simplicity and ease of interpretation.

### Introduction

In machine learning, [linear models](/index.php?title=Linear_models&action=edit&redlink=1) are used to predict a target variable based on one or more input features. These models assume that the relationship between the input features and the output variable can be approximated by a linear function. Linear models are popular because they are simple to understand, computationally efficient, and can be easily trained on large datasets.

### Types of Linear Models

There are several types of linear models, each suited for different tasks and applications. Some common types include:

- **Linear Regression**: A model used to predict a continuous target variable based on one or more input features. It is often used for forecasting and understanding relationships between variables.

- **Logistic Regression**: A model used for binary classification tasks, where the goal is to predict one of two possible classes. Logistic regression uses the logistic function to transform the linear model's output into probabilities, which can then be thresholded to make a class prediction.

- **Ridge Regression**: A variation of linear regression that includes a regularization term to prevent overfitting. This term penalizes large model coefficients, leading to a more robust model.

- **Lasso Regression**: Another variation of linear regression that uses a different type of regularization to promote sparsity in the model coefficients. This can lead to a more interpretable model with fewer non-zero coefficients.

### Assumptions and Limitations

Linear models make certain assumptions about the data, and it is important to be aware of these when using them in practice. Some key assumptions include:

- **Linearity**: The relationship between the input features and the output variable is assumed to be linear. This may not always hold true, and in such cases, linear models may not perform well.

- **Independence of Errors**: The errors in the model are assumed to be independent of each other. If this assumption is violated, the model's performance may be affected.

- **Normality of Errors**: The errors are assumed to be normally distributed. This assumption is important for the validity of certain statistical tests and measures of model performance.

Despite these assumptions and limitations, linear models are a powerful tool for many applications in machine learning, and their simplicity and interpretability make them an attractive choice for many practitioners.

## Explain Like I'm 5 (ELI5)

A linear model in machine learning is like a recipe that helps us predict something by combining different ingredients. Imagine you're trying to predict how yummy a cake will be based on the amount of sugar, flour, and chocolate chips you use. A linear model would tell you how much each ingredient contributes to the cake's yumminess, and then you can use this information to make the best cake possible. These models are simple, easy to understand, and can be used for many different tasks, but they do have some limitations. They assume that the relationship between the ingredients and the yumminess is always the same and that the ingredients don't affect each other.