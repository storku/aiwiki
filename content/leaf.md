---
title: "Leaf"
slug: "leaf"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), a **leaf** is an essential component of decision tree-based algorithms, such as [decision trees](/index.php?title=Decision_trees&action=edit&redlink=1), [random forests](/index.php?title=Random_forests&action=edit&redlink=1), and [gradient boosting machines](/index.php?title=Gradient_boosting_machines&action=edit&redlink=1). A leaf, also known as a terminal node, is the endpoint of a branch in a decision tree, which is used to make predictions based on a set of input features. In this article, we will discuss the concept of leaves, their role in decision tree-based algorithms, and how they contribute to the prediction process.

## Decision Tree Structure

Decision trees are a popular and intuitive method for both classification and regression tasks in machine learning. They operate by recursively partitioning the feature space, dividing it into regions based on the input features. A decision tree consists of the following components:

- **[Root node](/index.php?title=Root_node&action=edit&redlink=1)**: The starting point of the tree, where the feature space is initially divided.

- **[Internal nodes](/index.php?title=Internal_nodes&action=edit&redlink=1)**: Nodes that represent a decision point based on a specific feature value, leading to further subdivisions of the feature space.

- **[Leaves](/index.php?title=Leaves&action=edit&redlink=1) (terminal nodes)**: The endpoints of the branches, where the prediction is made based on the majority class (in classification tasks) or the average target value (in regression tasks) of the instances within the corresponding region.

### Leaf Impurity and Split Criteria

To determine the optimal decision points and divisions of the feature space, decision tree algorithms rely on split criteria that measure the impurity of the leaves. The goal is to minimize impurity in order to create leaves with homogenous groups of instances. Common split criteria include:

- **[Gini impurity](/wiki/gini_impurity)**: Measures the probability of an incorrect classification when randomly selecting an instance from a leaf and predicting its class.

- **[Entropy](/wiki/entropy)**: Measures the degree of randomness or disorder within a leaf, with higher entropy indicating more mixed classes.

- **[Mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) (MSE)**: Used in regression tasks to measure the average squared difference between the predicted and true target values in a leaf.

## Ensemble Methods and Leaves

[Ensemble methods](/index.php?title=Ensemble_methods&action=edit&redlink=1), such as random forests and gradient boosting machines, utilize multiple decision trees to make predictions. By aggregating the predictions of multiple trees, these methods can mitigate the risk of overfitting and improve overall predictive performance. The role of leaves in ensemble methods is similar to that in individual decision trees, with the key difference being the aggregation of predictions from multiple trees.

## Explain Like I'm 5 (ELI5)

Imagine you are playing a guessing game where you have to identify an animal based on certain clues. In this game, you can ask questions like "Does it have fur?" or "Can it fly?" to help you guess the correct animal. A decision tree works in a similar way, asking questions about data to make predictions.

In the guessing game, each question leads you closer to the correct answer. When you finally reach the correct animal, you've reached the end of your questions, and that's like reaching a "leaf" in the decision tree. The leaf is the final point where the decision tree makes a prediction based on the information it has gathered from the questions it asked.