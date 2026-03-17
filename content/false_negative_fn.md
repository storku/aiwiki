---
title: "False negative (FN)"
slug: "false_negative_fn"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [binary classification](/wiki/binary_classification), a **false negative** can be defined as when the model incorrectly classifies an [input](/index.php?title=Input&action=edit&redlink=1) into the negative [class](/wiki/class) when it should have been classified as positive. For instance, in medical diagnosis tasks, false negatives may occur when models predict that patients do not have diseases when they actually do have them. Such false negatives have serious repercussions as patients may not receive appropriate treatments due to misclassified data.

## How to measure False Negatives?

To evaluate the performance of a [machine learning](/wiki/machine_learning) [model](/wiki/model), various [metrics](/wiki/metric) are employed. [Recall](/wiki/recall) is a commonly used metric to measure false negatives.

[Recall](/wiki/recall), also known as [true positive rate](/wiki/true_positive_rate) (TPR), is defined as the ratio of correctly identified positive instances to all actual positive instances. In other words, recall measures the percentage of correctly classified positive instances according to a model's predictions. A low recall value suggests that the model may fail to recognize many positives, leading to more false negatives than usual.

## Causes of False Negatives

False negatives can occur for various reasons, such as [model](/wiki/model) complexity, imbalanced [datasets](/wiki/datasets) and inadequate [training data](/wiki/training_data). Without enough training data, models that cannot capture all distributions of data will produce more false negatives; on the other hand, too complex models may lead to [overfitting](/wiki/overfitting) which also produces false negatives.

Another frequent cause of false negatives is imbalanced datasets. An imbalanced dataset occurs when one [class](/wiki/class) has significantly more instances than the other, leading to models being [biased](/wiki/bias_ethics_fairness) towards the [majority class](/wiki/majority_class) and producing more false negatives for minorities.

## Strategies to reduce False Negatives

There are several strategies to reduce false negatives in machine learning models. One of the most efficient solutions is using more [training data](/wiki/training_data), which helps the model capture all distributions of data. Furthermore, data augmentation techniques like [oversampling](/wiki/oversampling) minority [classes](/wiki/class) or undersampling majority classes can help balance out the [dataset](/wiki/dataset).

One strategy is to use a different evaluation metric such as [precision](/wiki/precision) or [F1 score](/index.php?title=F1_score&action=edit&redlink=1), which accounts for both false positives and false negatives. Precision measures the percentage of true positive predictions out of all positive predictions, while F1 score is an average of precision and recall.

Finally, selecting an appropriate model for the problem at hand is critical. A model that's too simplistic may not be able to fully capture all of the complexity in your data.

## Explain Like I'm 5 (ELI5)

In machine learning, a false negative is like believing your friend isn't there when they actually are.

Imagine playing hide and seek with your friend. If you say, "My friend is not in the house!" when in fact they were hiding behind the couch, that would be considered a false negative - meaning you missed finding them even though they were there!

Machine learning teaches computers how to recognize objects, such as pictures of dogs. A false negative occurs when the computer incorrectly assumes a photo is not actually of a dog when it actually is one.

Playing the computer game of "find the dog" but being unable to locate a canine in the picture is unacceptable - we want our machines to accurately recognize dogs.