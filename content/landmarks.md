---
title: "Landmarks"
slug: "landmarks"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, the term "landmarks" is often used in the context of manifold learning and dimensionality reduction techniques, where the goal is to uncover the underlying structure of high-dimensional data by representing it in a lower-dimensional space. One popular method for achieving this is by using landmark-based methods, which rely on a set of carefully selected reference points (i.e., landmarks) to capture the intrinsic geometry of the data. In this article, we will discuss the concept of landmarks, their role in machine learning algorithms, and provide an overview of some popular landmark-based techniques.

## Role of Landmarks in Machine Learning

Landmarks play a crucial role in several machine learning tasks, including dimensionality reduction, clustering, and data visualization. They serve as reference points or anchors to represent the intrinsic geometry of the data while preserving its local and global structure.

### Dimensionality Reduction

In high-dimensional data, it is often difficult to discern patterns or relationships between variables due to the [curse of dimensionality](/index.php?title=Curse_of_dimensionality&action=edit&redlink=1). Landmark-based dimensionality reduction methods help mitigate this issue by selecting a subset of representative points from the data and mapping the remaining points to a lower-dimensional space in a way that preserves the distances between points and landmarks. Some popular landmark-based dimensionality reduction techniques include:

- [Landmark Isomap](/index.php?title=Landmark_Isomap&action=edit&redlink=1): An extension of the Isomap algorithm, which uses a subset of landmark points to compute geodesic distances and construct a lower-dimensional representation of the data.

- [Landmark Multidimensional Scaling (LMDS)](/index.php?title=Landmark_Multidimensional_Scaling_(LMDS)&action=edit&redlink=1): A variant of classical multidimensional scaling, which employs a set of landmark points to approximate the pairwise dissimilarities between all points in the dataset, followed by a mapping to a lower-dimensional space.

### Clustering

Landmarks can also be used to improve the efficiency and effectiveness of clustering algorithms. By selecting a set of representative landmarks, clustering algorithms can use these points as proxies to assess the similarity between data points, reducing the computational complexity of the task. Some landmark-based clustering algorithms include:

- [K-medoids](/index.php?title=K-medoids&action=edit&redlink=1): A partition-based clustering algorithm that uses medoids, which are representative objects or landmarks, as cluster centers. The algorithm aims to minimize the sum of distances between data points and their corresponding medoids.

- [Landmark-based Spectral Clustering](/index.php?title=Landmark-based_Spectral_Clustering&action=edit&redlink=1): An approach that leverages a set of landmark points to construct an affinity matrix, which is then used to perform spectral clustering on the reduced dataset.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of differently-shaped toys, and you want to organize them by their shapes. If you had to compare every toy to every other toy, it would take a long time. Instead, you can pick a few "landmark" toys that represent the main shapes (like a square, a circle, and a triangle), and then quickly compare the rest of the toys to these landmarks.

In machine learning, landmarks are like these special toys. They help us understand and organize complex data by giving us reference points to compare other data points. By using landmarks, we can more easily find patterns and relationships in the data, even when it is very complicated.