---
title: "False negative rate"
slug: "false_negative_rate"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

The **false negative rate** ([Type II error](/index.php?title=Type_II_error&action=edit&redlink=1)) in [machine learning](/wiki/machine_learning) refers to the proportion of positive instances that the algorithm incorrectly classifies as negative. This is an important metric when evaluating the performance of machine learning models, particularly when assessing the capability of the model to accurately identify positive cases. The false negative rate is complementary to the [sensitivity (recall)](/index.php?title=Sensitivity_(recall)&action=edit&redlink=1) of the model.

## Calculating False Negative Rate

### Confusion Matrix

To calculate the false negative rate, it is essential to first understand the concept of a [confusion matrix](/wiki/confusion_matrix). A confusion matrix is a table that presents the number of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN) resulting from the classification performed by a machine learning model. The matrix illustrates the performance of the model in predicting each class in a [binary classification](/wiki/binary_classification) problem.

### Formula

The false negative rate (FNR) can be computed using the following formula:

FNR = FN / (FN + TP)

where:

- FN: The number of false negatives.

- TP: The number of true positives.

This formula calculates the proportion of actual positive instances that the model has incorrectly classified as negative.

## Impact on Model Performance

The false negative rate is an important metric when assessing the performance of a machine learning model, as it helps to identify scenarios where the model fails to recognize positive instances. In applications where missing positive instances can have severe consequences, such as medical diagnosis or fraud detection, minimizing the false negative rate is crucial.

However, it is important to note that the false negative rate must be considered in conjunction with other performance metrics, such as [accuracy](/wiki/accuracy), [precision](/wiki/precision), and [F1 score](/index.php?title=F1_score&action=edit&redlink=1), to obtain a comprehensive understanding of a model's performance.

## Explain Like I'm 5 (ELI5)

Imagine you are playing a game where you need to find all the red balls hidden in a room full of different colored balls. Each time you find a red ball, you are doing something right. However, sometimes you might miss a red ball and think it's not red when it actually is. This is called a false negative, and the false negative rate tells us how often we make this mistake. In machine learning, this is important because we want to know how well our model can find the important things (like the red balls) without missing them.