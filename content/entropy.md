---
title: "Entropy"
slug: "entropy"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), entropy is a fundamental concept that is derived from information theory. It is used to measure the impurity or randomness in a set of data. Entropy has various applications in machine learning, such as decision tree construction, feature selection, and information gain calculation. Understanding entropy and its implications is essential for designing and implementing effective machine learning algorithms.

## Entropy in Information Theory=

[Information theory](/index.php?title=Information_theory&action=edit&redlink=1) is a branch of applied mathematics and electrical engineering that deals with the quantification, storage, and communication of information. Entropy, as defined by [Claude Shannon](/index.php?title=Claude_Shannon&action=edit&redlink=1), is a measure of the uncertainty or randomness associated with a set of possible outcomes. Mathematically, entropy is represented as:

### Formula

Entropy (H) is calculated using the following formula:

H(X) = -∑P(x) * log₂P(x)

where X is a discrete random variable representing the set of possible outcomes, P(x) is the probability of each outcome x occurring, and the summation is taken over all possible outcomes. The logarithm is base 2, which means the unit of entropy is bits.

## Entropy in Machine Learning

In machine learning, entropy is applied to measure the impurity or randomness of a dataset, particularly in the context of supervised learning. It is used in various applications, such as decision tree construction, feature selection, and calculating information gain.

### Decision Trees

[Decision trees](/index.php?title=Decision_trees&action=edit&redlink=1) are a popular machine learning algorithm used for both classification and regression tasks. The construction of an optimal decision tree involves selecting the best attribute or feature to split the data at each node. Entropy is used to measure the impurity of the data at each node, and the attribute with the highest information gain is selected for splitting. Information gain is calculated as the difference between the entropy before and after the split.

### Feature Selection

Entropy can also be applied in feature selection, a process of selecting a subset of relevant features for constructing an effective machine learning model. By calculating the entropy of each feature with respect to the target variable, it is possible to rank the features based on their discriminative power. Features with low entropy are considered less informative and can be eliminated, resulting in a simpler and more interpretable model.

## Explain Like I'm 5 (ELI5)

Entropy, in machine learning, is like trying to figure out how messy a room is. If the room is very messy and things are all mixed up, it has high entropy. If the room is clean and well-organized, it has low entropy. In machine learning, we use entropy to understand how mixed up or uncertain our data is. This helps us make better decisions and build smarter machines that can learn from the data.