---
title: "Gini impurity"
slug: "gini_impurity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), Gini impurity is a metric used to measure the impurity or disorder within a dataset. It is commonly employed in decision tree algorithms, such as the [Classification and Regression Tree (CART)](/index.php?title=Classification_and_Regression_Tree_(CART)&action=edit&redlink=1) algorithm, to decide the best splitting points for nodes. The Gini impurity index quantifies the probability of misclassification by calculating the degree of purity in a dataset, which helps in selecting the most relevant features and building a more accurate model.

## Gini Impurity Index

The Gini impurity index (I) for a dataset is calculated using the following formula:

*I = 1 - Σ(p_i)^2*
Where *p_i* represents the proportion of each class *i* in the dataset. The Gini impurity index ranges from 0 to 1, with 0 representing a completely pure dataset containing only one class, and 1 representing the highest level of impurity in which classes are evenly distributed.

### Example

Consider a binary classification problem with two classes: A and B. Suppose we have a dataset containing 40 instances of class A and 60 instances of class B. The Gini impurity index for this dataset would be calculated as follows:

- The proportion of class A in the dataset: *p_A = 40/100 = 0.4*

- The proportion of class B in the dataset: *p_B = 60/100 = 0.6*

- The Gini impurity index: *I = 1 - (0.4^2 + 0.6^2) = 1 - (0.16 + 0.36) = 1 - 0.52 = 0.48*

## Application in Decision Trees

In decision tree algorithms, Gini impurity is used to identify the best feature and split point for each node. The process involves calculating the weighted average Gini impurity for each potential split and selecting the one that results in the largest reduction in impurity. The algorithm iteratively applies this process to construct the decision tree, leading to a more accurate and generalizable model.

## Explain Like I'm 5 (ELI5)

Imagine you have a big jar of differently colored marbles. Gini impurity is a way to measure how mixed up the colors are in the jar. If all the marbles are the same color, the Gini impurity is 0, which means there's no mixing. If the colors are evenly mixed, the Gini impurity is higher.

In machine learning, we use Gini impurity to help us make decisions about how to split our data when building a decision tree. It helps us find the best way to separate the different "colors" (or classes) in our data, so our model can make better predictions.