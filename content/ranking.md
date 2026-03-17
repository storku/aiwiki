---
title: "Ranking"
slug: "ranking"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), ranking refers to the process of sorting a set of items in a specific order based on their relevance, importance, or some other predefined criteria. This process has become increasingly important in a wide range of applications, such as information retrieval, recommendation systems, and natural language processing. By utilizing machine learning algorithms and models, ranking systems can automatically learn the underlying patterns and relationships among data points, ultimately improving the sorting and retrieval of relevant information.

## Ranking Algorithms

There are several widely-used ranking algorithms in machine learning, which can be categorized into two main groups: pointwise and pairwise approaches.

### Pointwise Approaches

Pointwise ranking algorithms treat the ranking problem as a regression or classification problem, where each individual item is assigned a score or label. Some of the most commonly used pointwise algorithms include:

- [Linear Regression](/index.php?title=Linear_Regression&action=edit&redlink=1): A simple method to estimate the relationship between an item's features and its score.

- [Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1): A tree-like model that recursively splits the feature space based on the most discriminative features, leading to a prediction at each leaf node.

- [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM): A technique that seeks to maximize the margin between the classes in a high-dimensional space.

### Pairwise Approaches

Pairwise ranking algorithms, on the other hand, focus on the relative order of items in a list. The goal is to minimize the number of incorrectly ordered pairs. Some popular pairwise algorithms include:

- [RankNet](/index.php?title=RankNet&action=edit&redlink=1): A neural network-based method that models the probability that one item should be ranked higher than another.

- [RankBoost](/index.php?title=RankBoost&action=edit&redlink=1): An algorithm based on the AdaBoost framework that iteratively assigns higher weights to incorrectly ordered pairs.

- [RankSVM](/index.php?title=RankSVM&action=edit&redlink=1): A modification of the Support Vector Machines algorithm, which is optimized for the pairwise ranking problem.

## Evaluation Metrics

To assess the performance of ranking algorithms, various evaluation metrics are employed, including:

### Mean Average Precision (MAP)

MAP measures the average precision across all queries, where precision is calculated as the fraction of relevant items retrieved divided by the total number of items retrieved.

### Normalized Discounted Cumulative Gain (NDCG)

NDCG evaluates the quality of the ranking by considering the position of relevant items in the ranked list, with higher relevance items preferred at higher ranks.

### Precision at k (P@k)

P@k measures the fraction of relevant items among the top-k ranked items.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of different toys, and you want to sort them by how much you like them. Ranking in machine learning is like that – it helps to sort things in a specific order based on how important or relevant they are. There are different ways (algorithms) to sort the toys, and each one has its own way of deciding which toy should go where. To know if the sorting was done correctly, we use some special tools (evaluation metrics) to measure how well the toys were sorted.