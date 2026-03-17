---
title: "Confusion matrix"
slug: "confusion_matrix"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning) and [pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1), a **confusion matrix**, also known as an **error matrix** or **classification matrix**, is a specific table layout that allows for visualization and analysis of the performance of an algorithm, usually a classifier. It is a useful tool to assess the correctness and accuracy of a classification model by comparing the predicted outcomes with the actual outcomes, providing insights into the types of errors that the model is making.

## Structure of a Confusion Matrix

### Binary Classification

In the simplest case, a confusion matrix deals with a binary classification problem, where the model classifies instances into one of two classes. In this case, the confusion matrix is a 2x2 table consisting of the following elements:

- [True Positive](/index.php?title=True_Positive&action=edit&redlink=1) (TP): The number of instances correctly classified as positive.

- [True Negative](/index.php?title=True_Negative&action=edit&redlink=1) (TN): The number of instances correctly classified as negative.

- [False Positive](/index.php?title=False_Positive&action=edit&redlink=1) (FP): The number of instances incorrectly classified as positive when they are actually negative (Type I error).

- [False Negative](/index.php?title=False_Negative&action=edit&redlink=1) (FN): The number of instances incorrectly classified as negative when they are actually positive (Type II error).

### Multiclass Classification

For a multiclass classification problem, where the model classifies instances into more than two classes, the confusion matrix is expanded to an *n* x *n* table. Each row represents the instances in an actual class, while each column represents the instances in a predicted class. The diagonal elements represent the number of instances correctly classified for each class, and the off-diagonal elements indicate the instances misclassified.

## Performance Metrics

Confusion matrices provide valuable information that can be used to calculate various performance metrics. Some common metrics include:

- [Accuracy](/wiki/accuracy): The proportion of correctly classified instances out of the total instances.

- [Precision](/wiki/precision): The proportion of true positive instances out of the instances predicted as positive.

- [Recall](/wiki/recall) or [Sensitivity](/wiki/sensitivity): The proportion of true positive instances out of the instances that are actually positive.

- [Specificity](/index.php?title=Specificity&action=edit&redlink=1): The proportion of true negative instances out of the instances that are actually negative.

- [F1 Score](/index.php?title=F1_Score&action=edit&redlink=1): The harmonic mean of precision and recall, providing a balanced measure of the model's performance.

These metrics can help in identifying the strengths and weaknesses of a classification model and guide further improvements.

## Explain Like I'm 5 (ELI5)

Imagine you are sorting your toys into two boxes: one box for red toys and another for blue toys. You sort them quickly and make some mistakes. A confusion matrix is like a table that helps you understand how well you sorted the toys. It tells you how many toys you put in the right box (like red toys in the red box) and how many you put in the wrong box (like red toys in the blue box).

You can use this table to learn how good you are at sorting toys and figure out how to get better at it. If you were sorting toys into more than two boxes (like red, blue, and green), the table would be bigger to show how well you sorted all the different colors.