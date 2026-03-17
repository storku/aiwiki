---
title: "Test set"
slug: "test_set"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Test Set in Machine Learning

### Definition

In the context of [machine learning](/wiki/machine_learning), the **test set** refers to a subset of data that is distinct from the data used for model training and validation. It is typically utilized to evaluate the performance and generalization capabilities of a machine learning model after the training and validation processes are complete. Test sets play a vital role in ensuring that a model can perform well on previously unseen data and provide unbiased estimates of its performance.

### Purpose

The primary purpose of a test set is to assess the [generalization](/wiki/generalization) ability of a machine learning model. Generalization refers to the model's capability to make accurate predictions on new, unseen data. By comparing the model's performance on the training set, validation set, and test set, practitioners can diagnose potential issues, such as [overfitting](/wiki/overfitting) or [underfitting](/wiki/underfitting), and make informed decisions regarding the model's applicability to real-world scenarios.

### Creation

To create a test set, the initial dataset is generally divided into three parts: the training set, the validation set, and the test set. A common practice is to split the data using a 70-15-15 or 80-10-10 ratio, with the largest portion allocated for training, and the remaining portions for validation and testing, respectively. Various [data splitting](/index.php?title=Data_splitting&action=edit&redlink=1) techniques, such as random sampling or stratified sampling, can be used to ensure that the test set is representative of the overall data distribution.

### Performance Metrics

The performance of a machine learning model on the test set is measured using specific [performance metrics](/index.php?title=Performance_metrics&action=edit&redlink=1), which may vary depending on the type of problem being addressed (for example classification, regression, or clustering). Some common performance metrics include:

- Accuracy, precision, recall, and F1 score for classification problems

- Mean squared error (MSE), mean absolute error (MAE), and R-squared for regression problems

- Adjusted Rand index, silhouette score, and mutual information for clustering problems

These metrics provide a quantitative assessment of the model's performance, allowing researchers and practitioners to compare different models or model configurations objectively.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to teach a robot how to recognize different shapes. You show the robot lots of pictures of circles, squares, and triangles to help it learn. These pictures are like the training set in machine learning.

But, you also want to know if the robot can recognize shapes it hasn't seen before. So, you save some pictures of circles, squares, and triangles that the robot hasn't seen during the learning process. These new pictures are called the test set.

When the robot has finished learning from the training set, you show it the test set pictures. If the robot can correctly recognize the shapes in the test set, then you can be more confident that it has learned how to recognize shapes in general, not just the ones it saw during training.