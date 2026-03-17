---
title: "Centroid"
slug: "centroid"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Centroid in Machine Learning

The **centroid** is a central concept in machine learning, particularly in the realm of clustering algorithms. It is a geometrical point that represents the average of all data points in a particular cluster or group. Centroids are used to calculate the similarity or distance between data points, which helps in grouping similar data points together and separating dissimilar ones.

### Definition

In mathematical terms, the centroid *C* of a set of *n* data points in a *d*-dimensional space can be defined as:

*C = (1/n) * Σ (x_i)*
where *x_i* represents the *i*-th data point, and *n* is the total number of data points in the set.

The centroid acts as the center of mass for a given set of data points and can be thought of as the representative point of that group.

### Application in Clustering Algorithms

Centroids play a crucial role in various clustering algorithms, such as the [K-means](/wiki/k-means) algorithm, which is widely used in machine learning tasks. Clustering algorithms aim to partition a dataset into *k* distinct groups, where each group contains data points that are more similar to one another than to data points in other groups. Centroids are used to calculate similarity or distance metrics, such as Euclidean distance, Manhattan distance, or cosine similarity, which in turn helps determine the grouping of data points.

#### K-means Algorithm

The [K-means](/wiki/k-means) algorithm is an iterative procedure that involves the following steps:

1. Initialization: Randomly select *k* initial centroids from the dataset.
2. Assignment: Assign each data point to the nearest centroid, forming *k* clusters.
3. Update: Recalculate the centroids for each cluster by taking the mean of all data points in that cluster.
4. Repeat steps 2 and 3 until convergence is reached, i.e., the centroids do not change significantly or a predetermined number of iterations have been performed.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of different colored balls on the floor. You want to group these balls by color, so you place a small box (centroid) for each color group. Then, you start placing the balls in the box that is closest to their color. After you have placed all the balls, you might notice that the boxes' positions don't represent the middle of each color group very well. So, you move the boxes to the middle of each color group and start the process again. You keep doing this until the boxes don't need to be moved anymore.

In machine learning, this is what centroids do. They help find the "middle" or average of groups of similar data points. This is especially useful when you want to group data together to make sense of it or to make predictions.