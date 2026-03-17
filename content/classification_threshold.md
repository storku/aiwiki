---
title: "Classification threshold"
slug: "classification_threshold"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), [classification](/wiki/classification) is a task where the goal is to assign an [input](/index.php?title=Input&action=edit&redlink=1) [data point](/index.php?title=Data_point&action=edit&redlink=1) to one of several predefined categories or [classes](/wiki/class). One critical decision that must be made while performing classification is setting the classification threshold; this determines when the [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) assigns a data point to one [class](/wiki/class) or another.

## Classification Threshold in Binary Classification

In [binary classification](/wiki/binary_classification), the classification threshold converts the [logistic regression model](/index.php?title=Logistic_regression_model&action=edit&redlink=1)'s raw output into a prediction of the positive or negative class. The classification threshold is set by a person, and not by the model during [training](/wiki/training).

A logistic regression model produces a raw value of between 0 to 1. Then:

- If the classification threshold is higher than the raw value, the positive class will be predicted.

- If the classification threshold is lower than the raw value, the negative class will be predicted.

Let's say, for example, that the threshold for classification is 0.7. The model will predict the positive class if the raw value exceeds 0.7. If the raw value is below 0.7, the model will predict the negative class.

The classification threshold choice strongly impacts the number of [false positives](/wiki/false_positive) as well as [false negatives](/wiki/false_negative).

## What is Classification Threshold?

The classification threshold is a value that indicates the minimum probability that data belonging to one class should be included within that group. It can be set as either a fixed value or dynamically adjusted based on data characteristics.

The classification threshold is critical in determining the [precision](/wiki/precision) and [recall](/wiki/recall) of a [classification model](/wiki/classification_model). Precision refers to the proportion of predicted positive cases that turn out to be true, while recall measures how accurately actual positive cases are identified as such by the model. When choosing a threshold value for classification, keep in mind that both precision and recall may be compromised; often there is an inherent trade-off between them.

## How is Classification Threshold Used?

When a new data point is fed into the classification model, it generates a probability score for each class. This score serves as evidence of the model's confidence that this particular data point belongs in that category. Once determined which class the data point belongs in, this probability score helps determine its classification.

If the score for a particular class exceeds its threshold value, the model assigns that data point to that class; otherwise, it assigns it to another or treats it as an outlier. The threshold can be adjusted in order to optimize performance on specific [metrics](/wiki/metric) like precision or recall rate.

## Threshold Selection Strategies

When selecting a classification threshold value, considerations must be taken into account both the application's needs and the characteristics of the data. Different strategies can be employed in selecting this value; some examples include:

### Fixed Threshold Strategy

The fixed threshold strategy involves setting a predetermined threshold value for all classification tasks. Although straightforward and easy to implement, this approach may not work optimally in all circumstances.

### Threshold based on ROC Curve

The [Receiver Operating Characteristic (ROC) curve](/index.php?title=Receiver_Operating_Characteristic_(ROC)_curve&action=edit&redlink=1) is a visual representation of the tradeoff between a [true positive rate](/wiki/true_positive_rate) and a [false positive rate](/index.php?title=False_positive_rate&action=edit&redlink=1). A threshold value can be selected based on this curve to optimize the model's performance.

### Threshold based on Precision-Recall Curve

The [precision-recall curve](/wiki/precision-recall_curve) is a graphical illustration of the tradeoff between precision and recall. By using this curve, one can select an optimal threshold value based on the model's performance.

### Dynamic Threshold Strategy

Dynamic threshold strategy involves setting the threshold value based on data characteristics. For instance, it could be set higher for critical applications where false positives are more costly. This strategy requires more complex implementation and may necessitate continuous monitoring of the model's performance.

## Explain Like I'm 5 (ELI5)

When we ask the computer to examine a picture and tell us whether it's of a dog or a cat, it gives us an approximate number that indicates how likely it is either one is. If the number is high, then the computer thinks it's probably a dog; if low, then it thinks it might be a cat.

Sometimes, however, the computer can't tell if a number is from a dog or cat and needs help deciding. That's where classification thresholds come into play; we can decide on an outcome by setting a number.