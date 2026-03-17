---
title: "False positive (FP)"
slug: "false_positive_fp"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

False positive (FP) refers to a situation when the [model](/wiki/model) predicts an event has taken place but has not; this can happen when it recognizes a pattern similar to what was desired but which does not match exactly. FPs have serious repercussions, especially within healthcare where misdiagnosis could lead to incorrect treatments and negative outcomes.

- Predicted true, actually false.

## Definition of False Positive

In machine learning, a false positive occurs when the model predicts a positive result for an [example](/wiki/example) that is actually negative. This means the model has identified some [feature](/wiki/feature) or pattern similar to what was desired but which does not match up perfectly. For instance, in medical testing, this could mean diagnosing someone with an illness they do not actually have.

## Causes of False Positives

False positives in machine learning models can occur for several reasons. One of the most frequent causes is [overfitting](/wiki/overfitting), wherein the model has learned noise in [training data](/wiki/training_data) instead of patterns. Overfitting occurs when the model is too complex and can result in high [accuracy](/wiki/accuracy) on the training data, but poor performance on new, unseen data.

Another potential cause of false positives is a [class](/wiki/class) imbalance, where there are significantly more negative examples in the training data than positive ones. When this occurs, the model may be [biased](/wiki/bias_ethics_fairness) towards predicting negative outcomes and produces false positives for positive samples.

Furthermore, the selection of the [classification](/wiki/classification) threshold can influence the number of false positives. A higher threshold will reduce false positives but may also result in more false negatives - where a negative sample is incorrectly classified as positive.

## Effects of False Positives

False positives can have serious repercussions, depending on the context. In healthcare, for instance, a false positive diagnosis could prompt unnecessary medical procedures and treatments that cause physical, emotional, and financial strain to patients and their families. Similarly, in finance, a false positive in fraud detection could result in the suspension or closure of legitimate accounts - damaging both the reputation of the financial institution as well as inconveniencing customers.

## Minimizing False Positives

Machine learning models can be improved to minimize false positives by applying [cross-validation](/wiki/cross-validation) techniques such as [k-fold](/index.php?title=K-fold&action=edit&redlink=1) cross-validation to evaluate their performance on new data sets. This helps identify overfitting and enhances the generalization of the model.

Another approach is to balance the class distribution by [oversampling](/wiki/oversampling) positive predictions or [undersampling](/wiki/undersampling) negative ones. This can reduce bias towards negative predictions and enhance model accuracy.

Finally, selecting an appropriate threshold for classification can help minimize false positives. This is accomplished by calculating the [Receiver Operating Characteristic (ROC) curve](/index.php?title=Receiver_Operating_Characteristic_(ROC)_curve&action=edit&redlink=1) and selecting a threshold that maximizes true positive rates while minimizing false positive rates.

## Explain Like I'm 5 (ELI5)

Machine learning is the process in which a computer program is taught to recognize different objects, like pictures of cats or dogs, or detect if someone is sick. Unfortunately, sometimes this computer can make an error and indicate someone is indeed sick when they aren't; this is known as a false positive - similar to when your friend thinks they see you walking down the street but it turns out it's actually someone else looking like you! False positives can have serious repercussions when dealing with important matters like medicine or money since these errors cause issues for those affected.