---
title: "Precision"
slug: "precision"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the context of [machine learning](/wiki/machine_learning), *precision* is a fundamental metric used to evaluate the performance of classification models. Precision measures the accuracy of positive predictions made by a model, specifically the proportion of true positive instances among all instances classified as positive. This metric is particularly important in cases where the cost of false positives is high, such as in medical diagnosis or spam detection.

## Formulation

The precision of a classification model is mathematically defined as the ratio of true positive predictions (TP) to the sum of true positive predictions and false positive predictions (FP). Mathematically, it can be expressed as:

*Precision = (TP) / (TP + FP)*
Where:

- *TP* represents the number of true positive predictions

- *FP* represents the number of false positive predictions

## Comparison with Other Metrics=

### Recall

Recall, also known as *sensitivity* or *true positive rate*, is another crucial performance metric in machine learning. While precision measures the accuracy of positive predictions, recall evaluates the proportion of actual positive instances that were correctly identified by the model. The mathematical formula for recall is:

*Recall = (TP) / (TP + FN)*
Where:

- *TP* represents the number of true positive predictions

- *FN* represents the number of false negative predictions

### F1 Score

The F1 score is the harmonic mean of precision and recall and serves as a single metric to assess the trade-off between these two performance measures. The F1 score is particularly useful when dealing with imbalanced datasets, as it takes into account both false positives and false negatives. The mathematical formula for the F1 score is:

*F1 Score = 2 * (Precision * Recall) / (Precision + Recall)*
## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you have to find and collect red apples hidden in a basket full of fruits. Precision in machine learning is like counting how many red apples you picked up without accidentally grabbing any green apples. If you picked up 10 red apples and 2 green apples, your precision would be 10 out of 12 or about 83%. Precision helps us understand how good a machine is at identifying the right things without making mistakes.