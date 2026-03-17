---
title: "Decision forest"
slug: "decision_forest"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **decision forest** (also known as a **random forest**) is an ensemble learning method in machine learning that combines multiple decision trees to generate a more accurate and robust prediction model. This method is widely used in classification and regression tasks, and it can handle both categorical and numerical input features. Decision forests are known for their ability to mitigate overfitting and improve generalization in comparison to single decision trees.

## Background

### Decision Trees

A [decision tree](/wiki/decision_tree) is a tree-like structure used in machine learning for making decisions based on certain conditions. Each internal node of the tree represents a condition on an input feature, while the branches emerging from the node represent possible values for that feature. The leaf nodes of the tree represent the final predictions, either in the form of class labels for classification problems or continuous values for regression problems. Decision trees are popular due to their simplicity, interpretability, and ability to handle both categorical and numerical input features.

### Ensemble Learning

[Ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1) is a machine learning approach that combines multiple models to obtain a more accurate and stable prediction. The main idea behind ensemble learning is that a group of weak learners can be combined to create a strong learner. Weak learners are models that perform slightly better than random guessing, while a strong learner is a model that achieves high accuracy. Ensemble methods can be divided into two main categories: bagging and boosting. Bagging reduces the variance of the model by averaging the outputs of several base models, while boosting focuses on combining weak learners to create a strong learner by iteratively adjusting their weights.

## Decision Forest Algorithm

### Construction

The decision forest algorithm begins by creating a number of decision trees using a process called **bootstrap aggregating** or **bagging**. For each tree, a random sample of the training data is drawn with replacement, which means that some instances may be repeated while others may not be included in the sample. Next, a decision tree is grown using the selected subset of the data. During the tree construction process, a random subset of input features is considered for each split, which introduces additional randomness into the model and helps to prevent overfitting. The process is repeated until the desired number of trees has been created.

### Prediction

For classification tasks, the decision forest makes a prediction by aggregating the class labels predicted by each individual tree. This is typically done using a majority vote, in which the class label with the highest number of votes is chosen as the final prediction. For regression tasks, the decision forest computes the average of the continuous values predicted by each individual tree to generate the final prediction.

## Advantages and Limitations

### Advantages

- **Robustness**: Decision forests are less prone to overfitting than single decision trees due to the random sampling and feature selection processes.

- **Accuracy**: By combining multiple trees, decision forests often achieve higher accuracy than individual decision trees.

- **Parallelization**: The construction and prediction processes for each tree can be performed in parallel, allowing for efficient implementation on multi-core processors or distributed computing systems.

### Limitations

- **Interpretability**: While individual decision trees are easy to interpret, the ensemble nature of decision forests makes them more challenging to understand.

- **Training time**: The construction of multiple decision trees can be computationally expensive, particularly for large datasets and a high number of trees.

## Explain Like I'm 5 (ELI5)

A decision forest is like a group of wise people who work together to make a better decision than they could individually. Each person (tree) in the group has their own way of making decisions, and they use different information to do it. When they all make a decision, they talk to each