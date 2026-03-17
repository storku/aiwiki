---
title: "Epoch"
slug: "epoch"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), an epoch is a term used to indicate one complete pass through the entire [training](/wiki/training) [dataset](/wiki/dataset) during the learning process. In one epoch, each [example](/wiki/example) in the dataset has been processed once. The number of epochs can be set by the user and determines how often the algorithm will traverse all data points (examples).

## The Concept of an Epoch

Machine learning refers to an epoch as a single pass through the entire training dataset. During this step, data is divided into small [batches](/wiki/batch) and processed iteratively by the machine learning [algorithm](/index.php?title=Algorithm&action=edit&redlink=1). The number of iterations needed to process all data in the training dataset at once is known as an epoch.

At each iteration, the machine learning model updates its parameters to minimize errors between predictions and actual outputs from the training dataset. This involves adjusting [model](/wiki/model) [weights](/wiki/weights) and [biases](/wiki/bias) using [backpropagation](/wiki/backpropagation) algorithm. The goal is to optimize these parameters so that it can make accurate predictions on new data sets.

## The Importance of Epochs

The number of epochs is an important parameter when training machine learning models. A higher number can lead to [overfitting](/wiki/overfitting), when the model becomes too specialized in its training data and fails to capture new patterns present in new data sets. On the other hand, a lower number may cause [underfitting](/wiki/underfitting) - when too simple a model becomes and fails to capture underlying patterns present in data.

The optimal number of epochs depends on the complexity of a problem, the size of the dataset, and which learning algorithm is employed. In practice, [validation sets](/wiki/validation_set) are commonly used to estimate model performance when learning new data during training. A validation set is an untrained subset of the training dataset that serves only to evaluate performance during instruction. Monitoring model output on this validation set helps prevent overfitting by stopping training before it becomes too specialized in that data set. This approach is known as early stopping and helps prevent model overfitting by stopping early enough in its progression that it becomes overfitted within its training data set.

## Explain Like I'm 5 (ELI5)

Machine learning epochs are like playing a memory game. You have cards with pictures on them and try to match them all together - each attempt at matching all of the cards is known as an epoch. The more times you play the game (more epochs), the better at it you become; however, playing too often could lead to mastery over old cards and lead to mistakes when dealing with new ones. Thus, it is essential that you stop playing at an appropriate point so that both old and new cards remain balanced.