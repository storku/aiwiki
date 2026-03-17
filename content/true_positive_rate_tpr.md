---
title: "True positive rate (TPR)"
slug: "true_positive_rate_tpr"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

True positive rate (TPR), also referred to as **Sensitivity**, is a [metric](/wiki/metric) used to [evaluate](/index.php?title=Evaluate&action=edit&redlink=1) the performance of [binary classification models](/index.php?title=Binary_classification_model&action=edit&redlink=1). TPR measures how many positive cases are correctly [classified](/index.php?title=Classified&action=edit&redlink=1) as such by the [model](/wiki/model) out of all of the actual positives in the [dataset](/wiki/dataset). In other words, TPR is the percent of actual positives that are predicted as positive.

True positive rate is the same as [recall](/wiki/recall).

## Mathematical Definition

The true positive rate (TPR) is calculated as the number of [true positive (TP)](/wiki/true_positive_tp) divided by the sum of the sum of the number of true positive (TP) and the number of [false negative (FN)](/wiki/false_negative_fn). Mathematically, this can be represented as:

TPR = true positives / (true positives + [false negatives](/wiki/false_negative)) OR true positives / all actual positives

True positives are cases in which the model accurately predicts a positive class, and false negatives occur when it incorrectly predicts a negative class for a positive case.

## Interpretation of TPR

The true positive rate is an essential metric when assessing the performance of binary classification models, particularly when false negatives are more critical than [false positives](/wiki/false_positive). For instance, in medical diagnosis, a false negative result could result in serious harm; thus it's essential to have a high TPR in this scenario.

A high TPR value indicates the model can correctly identify a large proportion of positive cases as positive, which is desirable in many applications. Conversely, a low TPR value indicates the model is failing to identify an abundance of positive cases, leading to more false negatives.

## Explain Like I'm 5 (ELI5)

True positive rate is an indicator of how well a machine learning model performs its task. Imagine playing hide and seek with your friends, with the objective being to find all those who are hiding. If you succeed in finding all your friends who are hiding, then congratulations - your model did its job successfully!

Similar to a machine learning model, which attempts to identify all positive cases within a dataset. If it succeeds in finding all of them, we can say it did a good job and give it a high true positive rate; on the contrary, if some positive cases are missed, then its accuracy drops off and we attribute a low true positive rate.