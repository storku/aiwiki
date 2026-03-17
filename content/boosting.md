---
title: "Boosting"
slug: "boosting"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Boosting is an ensemble technique in [machine learning](/wiki/machine_learning) that aims to improve the predictive accuracy of a model by combining the outputs of multiple weak learners. The concept of boosting was first introduced by Schapire (1990) and Freund (1995), who later developed the widely used algorithm AdaBoost (Adaptive Boosting) with Schapire in 1997. Boosting algorithms work by iteratively adjusting the weights of data points based on the previous model's performance, allowing subsequent weak learners to focus on more challenging instances.

## Boosting Algorithm

### Weak Learners

In the context of boosting, a weak learner is a simple [base model](/index.php?title=Base_model&action=edit&redlink=1) or classifier that performs only slightly better than random guessing. Examples of weak learners include decision trees with a limited depth, linear regression models, and logistic regression models. Boosting algorithms typically employ weak learners as they offer faster training times and help prevent overfitting.

### Weighted Voting

Boosting algorithms combine the outputs of multiple weak learners using a weighted voting mechanism. The weights assigned to each weak learner are based on their performance, with better-performing models receiving higher weights. The final output or prediction is derived by summing the weighted votes of all weak learners in the ensemble.

### Iterative Learning

A key aspect of boosting algorithms is their iterative learning process. The algorithms sequentially add new weak learners to the ensemble, with each learner focusing on the instances misclassified by the previous learners. By doing so, the ensemble model continuously improves its performance over time.

## Popular Boosting Algorithms

Several boosting algorithms have been developed over the years, some of which are:

- [AdaBoost](/index.php?title=AdaBoost&action=edit&redlink=1) (Adaptive Boosting): A widely used boosting algorithm that adjusts the weights of data points based on the error rates of the weak learners in the ensemble.

- [Gradient Boosting](/index.php?title=Gradient_Boosting&action=edit&redlink=1): This algorithm minimizes a loss function by iteratively adding weak learners to the ensemble, while updating the weights based on the gradient descent optimization technique.

- [XGBoost](/index.php?title=XGBoost&action=edit&redlink=1) (Extreme Gradient Boosting): An optimized version of gradient boosting that offers improved performance and parallelization capabilities.

- [LightGBM](/index.php?title=LightGBM&action=edit&redlink=1): A gradient boosting algorithm designed to handle large-scale and high-dimensional data, offering faster training times and improved accuracy.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to solve a puzzle with a group of friends. Each of you can solve a small part of the puzzle, but none of you can complete it alone. Boosting is like having each friend focus on the parts they're good at, and then putting all the pieces together to finish the puzzle. In machine learning, each friend represents a simple model called a weak learner. By working together, these weak learners become a strong team that can solve the whole puzzle, or in the case of machine learning, make accurate predictions.