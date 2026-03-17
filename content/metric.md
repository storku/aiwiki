---
title: "Metric"
slug: "metric"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), a **metric** refers to a quantitative measure that is used to evaluate the performance of an algorithm or model. Metrics help researchers and practitioners understand the effectiveness of their models in solving a particular task and allow for comparison with other models. Several types of metrics exist, each tailored to different types of tasks or problems, such as classification, regression, or clustering. This article provides an overview of various machine learning metrics and their applications, as well as an explanation of these concepts in simpler terms.

## Classification Metrics

Classification is a task in which a model is trained to categorize data points into one of several predefined classes. Common classification metrics include:

### Accuracy

[Accuracy](/wiki/accuracy) is the proportion of correctly classified instances out of the total instances in the dataset. It is a popular metric for classification problems but can be misleading in cases of class imbalance, where the proportion of instances belonging to one class is much higher than the other(s).

### Precision, Recall, and F1-Score

Precision and recall are complementary metrics that measure the performance of a classifier in terms of [false positives](/index.php?title=False_positives&action=edit&redlink=1) and [false negatives](/index.php?title=False_negatives&action=edit&redlink=1).

- **Precision** (also known as positive predictive value) is the proportion of true positive instances among instances predicted as positive.

- **Recall** (also known as sensitivity or true positive rate) is the proportion of true positive instances among instances that are actually positive.

The **F1-score** is the harmonic mean of precision and recall, providing a single value to represent the trade-off between these two metrics.

## Regression Metrics

Regression tasks involve predicting continuous numerical values. Common regression metrics include:

### Mean Squared Error (MSE)

[Mean Squared Error](/index.php?title=Mean_Squared_Error&action=edit&redlink=1) (MSE) is the average of the squared differences between the predicted and actual values. It is a widely-used metric in regression tasks, as it emphasizes larger errors and is differentiable, making it suitable for gradient-based optimization algorithms.

### Root Mean Squared Error (RMSE)

[Root Mean Squared Error](/index.php?title=Root_Mean_Squared_Error&action=edit&redlink=1) (RMSE) is the square root of the mean squared error. It has the same unit as the target variable and is more interpretable than MSE.

### Mean Absolute Error (MAE)

[Mean Absolute Error](/index.php?title=Mean_Absolute_Error&action=edit&redlink=1) (MAE) is the average of the absolute differences between the predicted and actual values. It is less sensitive to outliers compared to MSE and RMSE.

## Clustering Metrics

Clustering is an unsupervised learning task that involves grouping similar data points together. Common clustering metrics include:

### Adjusted Rand Index (ARI)

[Adjusted Rand Index](/index.php?title=Adjusted_Rand_Index&action=edit&redlink=1) (ARI) measures the similarity between two clusterings, taking into account the chance of random agreement. ARI values range from -1 to 1, with 1 indicating perfect agreement and 0 indicating agreement no better than random.

### Silhouette Score

The [Silhouette Score](/index.php?title=Silhouette_Score&action=edit&redlink=1) measures the cohesion and separation of clusters by calculating the average silhouette coefficient for each data point. A higher score indicates better clustering, with a maximum value of 1.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you have to guess what kind of fruit is in a bag without looking. After guessing, you can check if you're right or wrong. In this game, a **metric** is a way to measure how good you are at guessing. There are different ways to measure your performance, like counting how many fruits you guessed correctly, or checking how often you guessed one fruit when it was actually another. Just like in this game, in machine learning, a metric helps us know how well our computer program is doing its job.