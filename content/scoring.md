---
title: "Scoring"
slug: "scoring"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Overview

In the field of [machine learning](/wiki/machine_learning), scoring refers to the process of evaluating a trained model's performance based on its ability to make predictions on a given dataset. The scoring process typically involves comparing the model's predictions to the actual or true values, also known as ground truth or targets. A variety of evaluation metrics are used to quantify the model's performance, with the choice of metric often depending on the nature of the problem at hand, such as classification, regression, or clustering.

## Types of Scoring Metrics

### Classification Metrics

Classification is a type of machine learning problem in which a model is trained to predict the class or category of an input data point. Common classification metrics include:

- [Accuracy](/wiki/accuracy): The proportion of correctly predicted instances out of the total instances in the dataset.

- [Precision](/wiki/precision): The proportion of true positive predictions out of all positive predictions made by the model.

- [Recall](/wiki/recall): The proportion of true positive predictions out of all actual positive instances in the dataset.

- [F1 Score](/index.php?title=F1_Score&action=edit&redlink=1): A weighted average of precision and recall that balances the trade-off between the two metrics.

- [Area Under the ROC Curve (AUC-ROC)](/index.php?title=Area_Under_the_ROC_Curve_(AUC-ROC)&action=edit&redlink=1): A measure of a classifier's ability to discriminate between positive and negative instances, with values ranging from 0 to 1.

### Regression Metrics

Regression is a type of machine learning problem where the model predicts a continuous value. Common regression metrics include:

- [Mean Squared Error (MSE)](/wiki/mean_squared_error_mse): The average of the squared differences between the predicted and true values.

- [Root Mean Squared Error (RMSE)](/wiki/root_mean_squared_error_rmse): The square root of the mean squared error, which has the same units as the predicted and true values.

- [Mean Absolute Error (MAE)](/wiki/mean_absolute_error_mae): The average of the absolute differences between the predicted and true values.

- [R-squared](/index.php?title=R-squared&action=edit&redlink=1): A measure of how well the predicted values match the variability of the true values, with values ranging from 0 to 1.

### Clustering Metrics

Clustering is an unsupervised learning technique that groups similar data points together. Common clustering metrics include:

- [Silhouette Score](/index.php?title=Silhouette_Score&action=edit&redlink=1): A measure of how well-clustered the data points are, with values ranging from -1 to 1.

- [Davies-Bouldin Index](/index.php?title=Davies-Bouldin_Index&action=edit&redlink=1): A measure of the average similarity between clusters, with lower values indicating better clustering.

- [Calinski-Harabasz Index](/index.php?title=Calinski-Harabasz_Index&action=edit&redlink=1): A measure of the ratio of between-cluster dispersion to within-cluster dispersion, with higher values indicating better clustering.

## Model Selection and Cross-validation

In order to choose the best model for a given problem, multiple models with different hyperparameters or architectures may be trained and scored. [Cross-validation](/wiki/cross-validation) is a technique used to assess the performance of a model on different subsets of the training data, which helps to prevent overfitting and provides a more robust estimate of the model's performance.

## Explain Like I'm 5 (ELI5)

Scoring in machine learning is like giving a report card to a robot. The robot learns from examples and then tries to guess the answers to new questions. Scoring helps us know how well the robot is doing at guessing the right answers. There are different ways to score the robot, depending on what kind of questions it's trying to answer. Sometimes we want to know if the robot can put things into the right groups, and sometimes we want to know if it can guess a number really well. We use these scores to pick the best robot for the job.