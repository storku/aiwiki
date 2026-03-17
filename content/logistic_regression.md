---
title: "Logistic regression"
slug: "logistic_regression"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Logistic regression is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome. In the context of [machine learning](/wiki/machine_learning), logistic regression is a supervised learning algorithm used for solving binary classification problems. It predicts the probability of an event occurring based on the given input features.

## Logistic Regression Model

### Model Formulation

The logistic regression model calculates the probability of an outcome by transforming the linear combination of input features using the logistic function. The logistic function, also known as the sigmoid function, maps any real-valued input to a value between 0 and 1, representing a probability.

### Binary Classification

Logistic regression is particularly well-suited for binary classification tasks, where there are two possible outcomes or classes. The model estimates the probability of an instance belonging to one class, and the probability of the other class is calculated as the complement. A decision threshold is then applied to determine the predicted class label.

## Training and Evaluation

### Training

To train a logistic regression model, the algorithm uses a technique called [maximum likelihood estimation](/index.php?title=Maximum_likelihood_estimation&action=edit&redlink=1) (MLE) to find the optimal model parameters. MLE aims to maximize the likelihood of observing the data given the model parameters, thus finding the best-fitting model for the observed data.

### Evaluation Metrics

The performance of a logistic regression model can be assessed using various evaluation metrics, such as accuracy, precision, recall, F1-score, and area under the [receiver operating characteristic](/index.php?title=Receiver_operating_characteristic&action=edit&redlink=1) (ROC) curve. These metrics help in determining the effectiveness of the model in correctly classifying instances and provide a basis for model selection and optimization.

## Applications

Logistic regression is used in numerous applications across various domains, including medical diagnosis, marketing, credit scoring, and natural language processing. Its simplicity, interpretability, and ease of implementation make it a popular choice for many binary classification problems.

## Explain Like I'm 5 (ELI5)

Imagine you want to figure out if a fruit is an apple or an orange based on its color and size. Logistic regression is like a magical tool that helps you find the best way to use color and size information to predict if the fruit is an apple or an orange. It does this by learning from examples of apples and oranges you've seen before. When you show it a new fruit, it can then tell you if it's more likely to be an apple or an orange.