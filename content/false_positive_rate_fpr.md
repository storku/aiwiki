---
title: "False positive rate (FPR)"
slug: "false_positive_rate_fpr"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

False positive rate (FPR) is the proportion of actual negative [examples](/wiki/example) for which the model mistakenly predicted the positive [class](/wiki/class). [Machine learning models](/wiki/machine_learning_models) use [classification](/wiki/classification) [models](/wiki/models) to predict whether an [input](/index.php?title=Input&action=edit&redlink=1) belongs to a certain [class](/wiki/class) or not. Unfortunately, these predictions aren't always correct and sometimes the model may indicate that an input belongs in one class when it actually doesn't - this is known as a false positive and the rate at which false positives occur is known as the false positive rate (FPR).

## What is false positive rate (FPR)?

False Positive Rate (FPR) is a performance [metric](/wiki/metric) used to gauge how often [classification models](/wiki/classification_model) incorrectly classify negative instances as positives. Put differently, FPR measures the proportion of negative instances incorrectly classified as positive by the model. Calculated by dividing total false positives by total true negatives and false positives.

false positive rate = [false positives](/wiki/false_positive) / (false positives + [true negatives](/wiki/true_negative))

False positives are errors that occur when a model incorrectly predicts an input belongs to a certain class when it does not. These false positives can have serious repercussions depending on the application of the model; for instance, in medical diagnosis they could prompt unnecessary surgeries or biopsies which are both invasive and expensive.

## How is false positive rate used in machine learning?

False positive rate (FPR) is used to evaluate the performance of a classification model, particularly when dealing with [binary classification](/wiki/binary_classification) [tasks](/index.php?title=Tasks&action=edit&redlink=1). In binary classification, the model predicts whether an input belongs to one of two classes - commonly referred to as the positive class and negative class - based on historical data.

When assessing the performance of a binary classification model, several performance metrics are utilized: [accuracy](/wiki/accuracy), [precision](/wiki/precision), [recall](/wiki/recall) and [F1 score](/index.php?title=F1_score&action=edit&redlink=1). False positive rate is another crucial performance metric that should be taken into consideration, especially when false positives have significant repercussions.

## How is false positive rate calculated?

False positive rate (FPR) is calculated as the number of [false positives](/index.php?title=False_positives&action=edit&redlink=1) divided by the sum of [true negatives](/wiki/true_negative) and false positives, represented by this formula:

FPR = (FP + TN), where FP represents the number of false positives and TN represents true negatives. False positives refer to instances that are predicted as positive by the model but are actually negative; on the other hand, true negatives refer to instances that were correctly predicted as negative by the model.

## What is a good false positive rate?

The ideal false positive rate varies based on the application and any associated costs. For some applications, such as email spam detection, a low false positive rate is desirable to minimize false positives that incorrectly classify legitimate emails as spam. Conversely, in fraud detection applications it may be acceptable to have higher false positive rates in order to detect more instances of fraud even if some legitimate transactions are flagged as fraudulent.

Ideally, a false positive rate of zero is ideal as it shows that the model makes no false positive predictions. Unfortunately, in practice, this rarely occurs due to an often high false negative rate.

## Explain Like I'm 5 (ELI5)

False positive rate is like when your teacher thinks you did your homework, but you actually didn't. The false positive rate is the number of times your teacher thinks you did your homework when you didn't, divided by the total number of times your teacher thinks you did your homework. A low false positive rate means your teacher doesn't think you did your homework very often when you didn't, which is good. But sometimes it's okay for your teacher to think you did your homework when you didn't, depending on why you didn't do it.