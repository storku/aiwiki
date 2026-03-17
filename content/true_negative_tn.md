---
title: "True negative (TN)"
slug: "true_negative_tn"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

True negative (TN) is when the [machine learning model](/wiki/machine_learning_model) correctly predicts the [negative class](/wiki/negative_class). [Machine learning](/wiki/machine_learning) [classification](/wiki/classification) is the process of accurately predicting a data point's class based on features. This classification can lead to four distinct outcomes: [true positive (TP)](/wiki/true_positive_tp), true negative (TN), [false positive (FP)](/wiki/false_positive_fp) and [false negative (FN)](/wiki/false_negative_fn).

## What is True Negative (TN)?

True Negative (TN) is one of the possible outcomes in a [binary classification](/wiki/binary_classification) problem when the [model](/wiki/model) predicts a negative result when the result or [label](/wiki/label) is in fact negative. In other words, when the model correctly recognizes a data point as not belonging to any class, it is treated as a true negative.

Let us consider a machine learning model that predicts whether an email is spam or not. If the model correctly predicts that an email is not spam and it indeed is not, this would be considered a true negative result, meaning the model correctly identified that this input data point does not belong in a certain class.

## Why is True Negative important?

True negatives are essential in machine learning as they help gauge the overall [accuracy](/wiki/accuracy) of a model. Accuracy refers to how accurately it predicts correct outcomes; an abundance of true negatives indicates that the model is performing well and can be trusted to make accurate predictions.

In some instances, the true negative rate is more critical than the true positive rate. For instance, in medical diagnosis, a high true negative rate helps prevent [false positives](/wiki/false_positive) which could lead to unnecessary medical treatments or surgeries.

## Factors that affect True Negative

The [true negative rate](/index.php?title=True_negative_rate&action=edit&redlink=1) is dependent upon factors such as the quality and quantity of [training data](/wiki/training_data), model [complexity](/index.php?title=Complexity&action=edit&redlink=1), and [hyperparameter](/wiki/hyperparameter) selection. If these training data are insufficiently representative of actual [test data](/wiki/test_data), a model might struggle to accurately predict negative data points. Furthermore, if it's too simple, it might not capture all [features](/wiki/features) that distinguish negative from positive data points; conversely, if it's too complex it could [overfit](/index.php?title=Overfit&action=edit&redlink=1) and perform poorly on actual testing data.

## Explain Like I'm 5 (ELI5)

Machine learning often refers to a "true negative," such as when your mom inspects your room for messes and doesn't find any, even though you didn't make them.

Imagine your mom checking your room and saying, "Good job, there are no messes in here!" This would be a true negative as there was no mess made and she correctly identified that there weren't any in the room.

Machine learning teaches computers how to recognize things, like pictures of dogs. A true negative is when the computer correctly determines that something is not a dog when it actually is one.

So it's like the computer playing "find the dog", correctly saying "this picture is not a dog" when there is none present. This is good as we want the computer to be able to accurately identify when something isn't a dog.