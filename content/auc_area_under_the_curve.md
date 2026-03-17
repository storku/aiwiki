---
title: "AUC (Area Under the Curve)"
slug: "auc_area_under_the_curve"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), the **Area Under the ROC Curve (AUC)** is a popular [metric](/wiki/metric) to assess the performance of [binary classification](/wiki/binary_classification) [models](/wiki/models). This measure assesses its ability to discriminate between positive and negative [classes](/wiki/class) based on [output](/index.php?title=Output&action=edit&redlink=1) probabilities from the model.

## What is AUC?

AUC is a measure of the area under the curve on a [Receiver Operating Characteristic (ROC) curve](/index.php?title=Receiver_Operating_Characteristic_(ROC)_curve&action=edit&redlink=1), which illustrates the trade-off between [true positive rate](/wiki/true_positive_rate) (TPR) and [false positive rate](/index.php?title=False_positive_rate&action=edit&redlink=1) (FPR) for binary classifiers. The ROC graph plots TPR on one y-axis against FPR on another at various probability thresholds.

The AUC score for a classifier ranges between 0 and 1, with 0.5 being the score for a random classifier and 1.0 representing perfection. A higher AUC indicates that the classifier has improved at distinguishing between positive and negative classes.

The AUC score provides a snapshot of the classifier's performance across all potential probability thresholds, meaning it is unaffected by the specific threshold used for [classification](/wiki/classification), which may vary depending on the application.

## Why Is AUC Used?

AUC is used to assess the performance of binary classifiers when their classes have significantly more samples than another. In such cases, [accuracy](/wiki/accuracy) may not reflect true [precision](/wiki/precision) since a classifier may achieve high accuracy by simply correctly predicting which [majority class](/wiki/majority_class) will pass inspection.

AUC provides a more thorough assessment of a classifier's ability to correctly classify positive and negative classes, regardless of class distribution. It has become widely used in various applications such as credit scoring, medical diagnosis, and fraud detection.

## How is AUC Calculated?

The AUC score is calculated by integrating the ROC curve. This plots TPR against FPR at various probability thresholds, and then integrating that curve gives us our AUC score.

To approximate the integration of an ROC curve, numerical methods such as trapezoidal rule, Simpson's rule or Riemann sum can be employed. These numerical formulas provide a close approximation to the area under the curve.

## Factors Affecting AUC

The accuracy of an algorithm's AUC score can vary based on several factors, including the quality and quantity of [training data](/wiki/training_data), [feature selection](/index.php?title=Feature_selection&action=edit&redlink=1), and [hyperparameter tuning](/index.php?title=Hyperparameter_tuning&action=edit&redlink=1) used for model tuning.

The choice of [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) can significantly influence an AUC score. Some algorithms may be better suited for certain types of data or may perform better on small or large datasets, depending on its quality and quantity. Furthermore, training data quality and quantity also factor into calculating an AUC score since classifiers only learn patterns present in training data.

The [features](/wiki/feature) used to train the classifier can have an important influence on its AUC score. Selecting relevant features that are helpful for classification can improve the performance of the classifier. Furthermore, tuning [hyperparameters](/wiki/hyperparameters) of a model may influence its AUC score; selecting suitable values will improve performance overall.

## Explain Like I'm 5 (ELI5)

AUC is like a score that tells us how well a robot is at discriminating things apart. For instance, if it has been trained to distinguish between cats and dogs, its score would be based on how many cats it can identify from all other items it examines. The higher this number is, the better equipped the robot becomes at telling cats from dogs."