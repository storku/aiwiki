---
title: "Information gain"
slug: "information_gain"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Information Gain in Machine Learning

Information gain is a crucial concept in the field of [machine learning](/wiki/machine_learning), particularly when dealing with decision trees and feature selection. It is a metric used to measure the decrease in uncertainty or entropy after splitting a dataset based on a particular attribute. The primary goal of information gain is to identify the most informative attribute, which can be used to construct an effective decision tree or perform feature selection more efficiently.

### Entropy

Entropy is a measure of the disorder or randomness in a dataset. In the context of machine learning, entropy quantifies the uncertainty or impurity of a given dataset. Mathematically, entropy is defined as:

*H(S) = -∑ p(i) * log₂ p(i)*
where *H(S)* is the entropy of dataset *S*, *p(i)* represents the probability of class *i* in the dataset, and the summation runs over all classes. A lower entropy value signifies a more organized dataset, while a higher entropy value denotes a more chaotic dataset.

### Calculating Information Gain

Information gain is computed by comparing the entropy of the dataset before and after splitting it based on an attribute. The information gain, denoted as *IG(A)*, for a given attribute *A* is defined as:

*IG(A) = H(S) - ∑ [(|S_v| / |S|) * H(S_v)]*
where *H(S)* is the entropy of the original dataset *S*, *S_v* is a subset of *S* after splitting on attribute *A*, and the summation runs over all possible values of the attribute. The term *(|S_v| / |S|) * H(S_v)* is the weighted average entropy of the subsets after splitting.

### Applications in Decision Trees and Feature Selection

Information gain plays a vital role in constructing decision trees, such as [ID3](/index.php?title=ID3&action=edit&redlink=1) and [C4.5](/index.php?title=C4.5&action=edit&redlink=1) algorithms. These algorithms utilize information gain to determine the best attribute to split the dataset at each node in the tree. By selecting the attribute with the highest information gain, the algorithm can build a more accurate and efficient decision tree.

Information gain is also used in feature selection, which is the process of identifying the most relevant attributes to be used in a machine learning model. By ranking features based on their information gain, one can effectively reduce the dimensionality of the dataset and improve the performance of the model.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of differently colored and shaped toy blocks. You want to organize these blocks quickly, and you can only ask yes or no questions about the blocks' properties, like color or shape. Information gain helps you find out which question to ask first to organize the blocks the fastest.

In machine learning, we use information gain to choose the best question (or attribute) to split our data, making it easier to understand and predict. It's like finding the best way to organize our toy blocks.