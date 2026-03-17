---
title: "Baseline"
slug: "baseline"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), the term **baseline** refers to a simple or naïve model that serves as a reference point against which the performance of more sophisticated models is compared. Establishing a baseline is essential in machine learning tasks, as it provides a starting point to measure the improvement achieved by more advanced techniques. Baselines can be established using simple statistical measures, random choice, or basic heuristics, depending on the problem domain and the available data.

## Types of Baseline Models

### Statistical Measures

Statistical measures, such as the mean or median of the training data, can be used as a baseline for regression problems. In these cases, the baseline model predicts the average value of the target variable for all input instances. For classification problems, the mode (most frequent class) can be used as a baseline.

### Random Choice

In some machine learning problems, especially those involving multi-class classification, a random choice baseline can be employed. This type of baseline involves randomly selecting a class from the possible set of classes for each instance. The performance of this baseline is expected to be relatively low, providing a lower bound against which more sophisticated models can be compared.

### Heuristics

Heuristics are simple, rule-based methods for solving problems. When applicable, heuristics can be used as baseline models in machine learning. For example, in natural language processing tasks, such as sentiment analysis, a heuristic baseline might involve predicting the sentiment based on the presence of certain keywords in the text.

## Performance Metrics

To compare the performance of a baseline model with more advanced models, appropriate [performance metrics](/index.php?title=Performance_metrics&action=edit&redlink=1) must be selected. Common metrics for regression problems include mean squared error (MSE), mean absolute error (MAE), and R-squared. For classification problems, metrics such as accuracy, precision, recall, and F1-score are commonly used.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to guess how many jellybeans are in a jar. You don't know the exact number, but you can make a simple guess, like saying there are 100 jellybeans. This simple guess is like a baseline in machine learning. It's a starting point to help you figure out if other, more complicated ways of guessing are better or not. If your friend uses a fancy method to guess the number of jellybeans and gets a number close to 100, then you know their method isn't much better than your simple guess. But if they guess a number that's very different from 100 and it turns out to be correct, you know their method is better than your baseline.