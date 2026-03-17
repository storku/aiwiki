---
title: "Nonlinear"
slug: "nonlinear"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Nonlinear methods in machine learning refer to a class of algorithms and techniques that are designed to model complex relationships between input and output variables, which cannot be adequately captured by linear models. These nonlinear models are particularly useful in situations where the underlying relationships between variables are more intricate or involve higher-order interactions. In this article, we will discuss the concept of nonlinearity in machine learning, its importance, and some popular nonlinear techniques.

## Types of Nonlinearity

### Neural Networks

[Neural Networks](/index.php?title=Neural_Networks&action=edit&redlink=1) are a popular class of nonlinear models inspired by the structure and function of biological neural systems. They consist of interconnected nodes or neurons arranged in layers. By adjusting the weights and biases of the connections between these neurons, neural networks can learn intricate patterns and relationships in the input data. This enables them to model complex functions and solve various machine learning problems, such as image recognition, natural language processing, and reinforcement learning.

### Kernel Methods

[Kernel methods](/index.php?title=Kernel_methods&action=edit&redlink=1) are a class of techniques that transform the input data into a higher-dimensional space, where linear methods can be applied more effectively. This transformation is achieved through a kernel function, which computes the similarity between data points in the new space. Some popular kernel functions include the Gaussian radial basis function (RBF) and the polynomial kernel. Kernel methods are widely used in support vector machines (SVMs) and Gaussian process regression, among other machine learning techniques.

### Decision Trees and Ensemble Methods

[Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1) are a class of nonlinear models that recursively split the input data into subsets based on feature values, forming a tree-like structure. The final output is determined by the majority class or the mean value of the target variable in the terminal nodes (leaves) of the tree. Ensemble methods, such as [Random Forest](/index.php?title=Random_Forest&action=edit&redlink=1) and [Gradient Boosting](/index.php?title=Gradient_Boosting&action=edit&redlink=1), combine multiple decision trees to improve the overall performance and reduce the risk of overfitting.

## Nonlinearity in Feature Engineering

Nonlinear relationships can also be captured through the process of [feature engineering](/wiki/feature_engineering), which involves the creation of new features from existing ones, often through nonlinear transformations or interactions. Some common nonlinear feature engineering techniques include polynomial feature expansion, radial basis function expansion, and interaction terms.

## Explain Like I'm 5 (ELI5)

Imagine you are trying to draw a line that best fits a group of points on a piece of paper. If the points form a straight line, it's easy to draw a line that fits them perfectly. However, if the points form a curve or any other shape, a straight line wouldn't be able to fit them well. In machine learning, we use different techniques called "nonlinear methods" to find the best curve or shape that fits the data points, instead of just a straight line. These techniques help us better understand the relationship between the data and make more accurate predictions.