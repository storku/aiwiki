---
title: "Centroid-based clustering"
slug: "centroid-based_clustering"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Centroid-based clustering is a class of [machine learning](/wiki/machine_learning) algorithms that group data points into clusters based on the similarity of their features. These algorithms rely on the computation of centroids, which represent the central points of clusters in the feature space. The most well-known centroid-based clustering algorithm is the [K-means algorithm](/index.php?title=K-means_algorithm&action=edit&redlink=1).

## Centroid-based Clustering Algorithms

Centroid-based clustering algorithms aim to partition a dataset into a predefined number of clusters, where each cluster is represented by its centroid. The centroid is a central point in the feature space, which is usually calculated as the mean or median of the data points belonging to the cluster.

Some widely used centroid-based clustering algorithms include:

- [K-means algorithm](/index.php?title=K-means_algorithm&action=edit&redlink=1)

- [K-medoids algorithm](/index.php?title=K-medoids_algorithm&action=edit&redlink=1)

- [K-medians algorithm](/index.php?title=K-medians_algorithm&action=edit&redlink=1)

- [K-mode algorithm](/index.php?title=K-mode_algorithm&action=edit&redlink=1)

- [K-prototype algorithm](/index.php?title=K-prototype_algorithm&action=edit&redlink=1)

### K-means Algorithm

The K-means algorithm is the most popular centroid-based clustering algorithm. It aims to partition a dataset into *K* clusters, where each cluster is represented by its centroid, minimizing the within-cluster sum of squares (WCSS). The K-means algorithm is an iterative process that alternates between updating the cluster assignments and updating the centroids. It is known for its simplicity and efficiency, but it is sensitive to the initial selection of centroids and might converge to a local minimum.

### K-medoids Algorithm

The K-medoids algorithm is a variation of the K-means algorithm that uses the medoid (a data point in the dataset) as the cluster center instead of the mean. This change makes the algorithm more robust to noise and outliers compared to K-means. However, it is computationally more expensive, as it requires the pairwise distance between all data points.

### K-medians Algorithm

The K-medians algorithm is another variant of the K-means algorithm, which uses the median of the data points in each cluster as the centroid. This approach reduces the influence of outliers and noise but is computationally more expensive than K-means, as it requires sorting the data points for each cluster.

### K-mode Algorithm

The K-mode algorithm is designed for clustering categorical data by using the mode (the most frequent value) as the centroid. It replaces the Euclidean distance used in K-means with a similarity measure based on the number of matching categories between data points.

### K-prototype Algorithm

The K-prototype algorithm combines the K-means and K-mode algorithms to handle datasets with mixed numerical and categorical features. It uses a weighted distance metric that combines the Euclidean distance for numerical features and a similarity measure for categorical features.

## Explain Like I'm 5 (ELI5)

Centroid-based clustering is a way to group similar things together by finding the "middle" or "average" point of each group. Imagine you have a bunch of colorful balls and you want to sort them by color. You can put each ball into a group based on how close its color is to the average color of that group. That way, all the balls in one group will be similar in color. This is what centroid-based clustering does with data, so we can easily find and understand patterns in the information.