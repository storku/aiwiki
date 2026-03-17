---
title: "Decision tree"
slug: "decision_tree"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), a **decision tree** is a popular and widely used model that helps in making predictions based on a series of decisions. The decision tree model can be used for both classification and regression tasks, and it works by recursively splitting the input data into subsets based on the values of the input features, ultimately making a prediction.

## Structure of a Decision Tree

### Nodes

A decision tree consists of three types of nodes:

- **Root node**: The topmost node in the tree that represents the entire dataset.

- **Internal nodes**: Nodes that represent decision points, which split the dataset based on a particular feature value.

- **Leaf nodes**: Terminal nodes that correspond to the final predictions or outcomes of the model.

### Branches

**Branches** in a decision tree connect nodes and represent the decision path taken based on the feature values. Each branch corresponds to a specific decision rule, such as "age < 30" or "salary > 50,000".

## Construction of a Decision Tree

The construction of a decision tree involves two main steps: *splitting* and *pruning*. 

### Splitting

The process of splitting involves recursively partitioning the dataset into subsets based on the values of the input features. Several splitting criteria can be used to determine the best feature to split on, including:

- **Gini impurity**: Measures the impurity or randomness in a dataset, with the goal of minimizing the impurity in each subset after splitting.

- **Information gain**: Based on [entropy](/wiki/entropy), it measures the reduction in uncertainty after splitting a dataset.

- **Variance reduction**: Used for regression tasks, it aims to minimize the variance of the target variable within each subset.

### Pruning

Pruning is the process of simplifying the decision tree by removing branches that do not significantly contribute to the model's performance. This can help reduce the complexity of the model and prevent [overfitting](/wiki/overfitting). There are two main types of pruning:

- **Pre-pruning**: Involves setting a stopping criterion, such as a maximum tree depth or a minimum number of samples per leaf, during the tree construction process.

- **Post-pruning**: Involves pruning the tree after it has been fully constructed, by removing or collapsing branches that have low significance.

## Advantages and Disadvantages

### Advantages

- **Interpretability**: Decision trees are easy to understand and visualize, making them a popular choice for interpretable machine learning models.

- **Minimal data preprocessing**: Decision trees do not require feature scaling or normalization and can handle missing data and categorical features effectively.

### Disadvantages

- **Overfitting**: Decision trees are prone to overfitting, especially when the tree is deep and complex.

- **Instability**: Small changes in the data can lead to significant changes in the structure of the tree, making them unstable.

## Explain Like I'm 5 (ELI5)

A decision tree in machine learning is like a game of 20 questions. Imagine you're trying to guess what object someone is thinking of by asking yes-or-no questions. With each question, you get closer to the answer based on the person's response. In machine learning, a decision tree works similarly by asking questions about the data and using the answers to make predictions or decisions. The tree is made up of decisions (like questions) and final answers (the predictions), connected by branches (the yes or no answers).