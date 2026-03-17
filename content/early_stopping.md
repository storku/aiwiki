---
title: "Early stopping"
slug: "early_stopping"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) seeks to train a [model](/wiki/model) that can make accurate predictions on new [data](/index.php?title=Data&action=edit&redlink=1). Unfortunately, during [training](/wiki/training) it is common for the model to [overfit](/index.php?title=Overfit&action=edit&redlink=1) the [training data](/wiki/training_data); that is, it becomes too complex and includes irrelevant details or noise in the [dataset](/wiki/dataset). Unfortunately, [overfitting](/wiki/overfitting) can lead to poor performance when faced with new data. Early stopping is an approach used to prevent overfitting and improve [generalization](/wiki/generalization) by monitoring model performance during training and stopping when its performance on [validation sets](/wiki/validation_set) starts to deteriorate.

## What is early stopping?

Early stopping is a [regularization](/wiki/regularization) technique used in [machine learning](/wiki/machine_learning) to prevent [overfitting](/wiki/overfitting). It involves monitoring the model's performance on a separate [validation set](/wiki/validation_set) during [training](/wiki/training) and stopping before it begins overfitting on that data set. The goal of early stopping is that your model should perform well both on the training set and validation set so it can [generalize](/index.php?title=Generalize&action=edit&redlink=1) well across new data sets.

## How does early stopping work?

Early stopping occurs by comparing the performance of a model on both the [training set](/wiki/training_set) and validation set during training. The validation set is an omitted portion of data from the training set that allows us to assess its suitability for unseen data. As the model learns on this set, its performance on the validation set is monitored at regular intervals; if [validation loss](/wiki/validation_loss) starts to increase, then training is stopped and the model with the best [validation](/wiki/validation) performance is selected as the final model.

Early stopping can be implemented using various criteria, such as monitoring validation loss or [accuracy](/wiki/accuracy). The criteria used to terminate training can be set based on domain knowledge or determined empirically through experimentation. One popular approach involves using a [patience](/index.php?title=Patience&action=edit&redlink=1) [parameter](/wiki/parameter) which controls how many [epochs](/wiki/epoch) of training may continue without improvement in validation performance. If after these specified number of epochs have passed without improvement in validation performance, training is then terminated.

## Why is early stopping important?

Early stopping is an essential technique in machine learning because it helps avoid overfitting and enhances the model's capacity to generalize to new data. Overfitting occurs when a model becomes too complex and starts fitting irrelevant details from training data, leading to poor performance on new instances. Early stopping can prevent this from occurring by terminating the training process before the model starts overfitting on existing data.

Early stopping can save both time and resources by preventing the model from continuing to train inefficiently. Training [deep neural networks](/wiki/deep_neural_network) is computationally expensive, so stopping early helps conserve both time and resources.

## Explain Like I'm 5 (ELI5)

Early stopping is a technique used to stop training a computer program when it becomes too adept at remembering what it has already seen and not good at predicting new information. It's like practicing riding your bike without your mom telling you to stop, so as not to get hurt. When the computer program gets too proficient in what it already knows, it may not be capable of learning new things; thus, early stopping helps the program be equally proficient at both what it already knows and what it will discover.