---
title: "Random forest"
slug: "random_forest"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Random Forest](/index.php?title=Random_Forest&action=edit&redlink=1) is a versatile and powerful ensemble learning method used in [machine learning](/wiki/machine_learning). It is designed to improve the accuracy and stability of predictions by combining multiple individual decision trees, each of which is trained on a random subset of the available data. This technique helps to overcome the limitations of a single decision tree, such as overfitting and high variance, while preserving the benefits of interpretability and ease of use.

## Algorithm

### Construction

The Random Forest algorithm constructs a collection of decision trees during the training phase. Each tree is created using a different subset of the training data, which is obtained through a process called [bootstrap sampling](/index.php?title=Bootstrap_sampling&action=edit&redlink=1) or bagging. For each tree, a random set of features is selected at each split in the tree, which helps to de-correlate the trees and increase the diversity of the ensemble.

### Prediction

Once the trees are constructed, the Random Forest algorithm makes predictions by combining the output of each individual tree. In a classification task, the majority vote of the trees is taken as the final prediction, while in a regression task, the average prediction of the trees is used.

## Advantages

Random Forest offers several advantages over single decision trees or other machine learning algorithms. These include:

- Improved accuracy: By aggregating the output of multiple trees, Random Forest can achieve higher accuracy and generalization performance.

- Robustness to overfitting: The use of bootstrap sampling and random feature selection helps to reduce the likelihood of overfitting, which is a common issue in single decision trees.

- Handling missing values: The algorithm is capable of handling missing data effectively by using surrogate splits in the decision trees.

- Interpretability: The relative importance of features can be assessed using measures like the [Gini impurity](/wiki/gini_impurity) or [permutation importance](/index.php?title=Permutation_importance&action=edit&redlink=1).

## Limitations

Despite its many advantages, Random Forest also has some limitations:

- Scalability: The algorithm can be computationally expensive, especially for large datasets, due to the need to construct and store multiple decision trees.

- Interpretability trade-off: While individual decision trees are highly interpretable, the ensemble nature of Random Forest can make it more challenging to interpret the final model.

- Performance ceiling: Although the algorithm is robust and accurate, it may not always outperform other state-of-the-art machine learning techniques like [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) or [gradient boosting](/wiki/gradient_boosting).

## Explain Like I'm 5 (ELI5)

Imagine you're trying to predict whether it will rain tomorrow. You ask several friends, each with a different way of guessing, like looking at the sky, checking the weather app, or observing the behavior of animals. Each friend gives their opinion, and you take the most common answer as your final prediction.

In machine learning, Random Forest works in a similar way. It uses many "friends" (decision trees) that each look at different parts of the data to make their predictions. Then, it combines their answers to get a final prediction. This makes Random Forest more accurate and reliable than just asking one friend (a single decision tree).