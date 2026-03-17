---
title: "Split"
slug: "split"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Overview

In [machine learning](/wiki/machine_learning), the term *split* generally refers to the process of dividing a dataset into two or more non-overlapping parts, typically for the purposes of training, validation, and testing a machine learning model. These distinct subsets enable the evaluation and fine-tuning of model performance, helping to prevent overfitting and allowing for an unbiased estimation of the model's ability to generalize to unseen data.

## Dataset Splitting Techniques

There are various techniques for splitting datasets in machine learning, with the choice of method largely depending on the nature of the data and the problem being addressed. Some common approaches include:

### Random Split

Random split is a simple method that randomly assigns data points to training, validation, and test sets. The split ratio is usually determined by the user, with common choices being 70:15:15 or 80:10:10 for the training, validation, and test sets, respectively. The random split method assumes that the data points are independent and identically distributed (i.i.d.), making it inappropriate for time-series data or data with inherent structure.

### K-Fold Cross-Validation

[K-Fold Cross-Validation](/index.php?title=K-Fold_Cross-Validation&action=edit&redlink=1) is a technique that divides the dataset into *k* equally-sized folds. In each iteration, one fold is used for validation, while the remaining *k-1* folds are used for training the model. This process is repeated *k* times, with each fold used exactly once for validation. The average performance across all iterations serves as the overall model performance metric. Although computationally expensive, k-fold cross-validation provides a more robust estimate of model performance, particularly for smaller datasets.

### Stratified Split

Stratified split is a method that maintains the distribution of the target variable in the training, validation, and test sets. This is particularly useful when dealing with imbalanced datasets, where some classes are underrepresented. By preserving the class distribution in each subset, stratified split helps ensure that the model is trained and evaluated on a representative sample of the data.

### Time-Series Split

For [time-series data](/index.php?title=Time-series_data&action=edit&redlink=1), a time-based split is often employed to preserve the temporal structure of the data. In this approach, data points are assigned to the training, validation, and test sets based on their timestamps, ensuring that future data is not used to predict past events. This can help prevent data leakage and provide a more realistic assessment of the model's performance on time-series problems.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bag of differently-shaped puzzle pieces, and you want to teach your friend how to put them together correctly. First, you need to show your friend some examples, so they learn how the pieces fit together. Then, you want to see if your friend can do it on their own, by giving them new pieces they haven't seen before.

In machine learning, this is what we do when we "split" the data. We divide it into different parts, so the computer can learn from some examples, practice with others, and then we can test how well it does on completely new pieces. We do this using different methods, like dividing the data randomly, making sure the different shapes are balanced, or keeping the order of the pieces if they belong to a sequence.