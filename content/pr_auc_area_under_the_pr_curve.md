---
title: "PR AUC (area under the PR curve)"
slug: "pr_auc_area_under_the_pr_curve"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning, the evaluation of classification models is a critical task. One common metric used to measure the performance of such models is the PR AUC, or Area Under the Precision-Recall (PR) Curve. The PR AUC is particularly useful when dealing with imbalanced datasets, where the proportion of positive and negative samples is unequal. 

## Precision-Recall Curve

### Definition

The [Precision-Recall Curve](/index.php?title=Precision-Recall_Curve&action=edit&redlink=1) is a graphical representation of a classifier's performance, which plots the precision (positive predictive value) against the recall (sensitivity) for different probability thresholds. Precision is the proportion of true positive predictions among all positive predictions, while recall is the proportion of true positive predictions among all actual positive samples. In other words, precision measures the accuracy of positive predictions, and recall measures the ability to identify all relevant instances.

### Relationship to PR AUC

The PR AUC is the area under the precision-recall curve, which is calculated by integrating the curve over the recall axis. A larger PR AUC indicates better classifier performance, as it implies that the model has both high precision and high recall. The maximum possible PR AUC value is 1, which corresponds to a perfect classifier that identifies all positive instances with no false positives.

## Comparison with ROC AUC

In addition to the PR AUC, another commonly used metric in machine learning is the [ROC AUC](/index.php?title=ROC_AUC&action=edit&redlink=1), or Area Under the Receiver Operating Characteristic (ROC) Curve. The ROC curve plots the true positive rate (recall or sensitivity) against the false positive rate (1-specificity) for different probability thresholds. While both the PR AUC and ROC AUC are used to evaluate classifier performance, the PR AUC is more suitable for imbalanced datasets due to its focus on precision and recall, whereas the ROC AUC is more sensitive to true positive and false positive rates.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you have to find special rocks among a pile of normal rocks. You have a tool that helps you identify the special rocks, but it's not always correct. The PR AUC is a number that tells you how good your tool is at finding the special rocks without accidentally picking up normal rocks. 

The PR AUC is based on two things: how many of the rocks your tool thinks are special actually are special (precision), and how many of the special rocks your tool can find out of all the special rocks in the pile (recall). If the PR AUC is a high number (closer to 1), that means your tool is really good at finding the special rocks without making many mistakes.