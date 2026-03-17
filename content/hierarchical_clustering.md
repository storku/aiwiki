---
title: "Hierarchical clustering"
slug: "hierarchical_clustering"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Hierarchical clustering is a method of [cluster analysis](/index.php?title=Cluster_analysis&action=edit&redlink=1) in [machine learning](/wiki/machine_learning) and [statistics](/index.php?title=Statistics&action=edit&redlink=1) used to group similar objects into clusters based on a measure of similarity or distance between them. This approach organizes data into a tree-like structure, called a dendrogram, that represents the nested hierarchical relationships among the clusters. Hierarchical clustering can be categorized into two primary approaches: agglomerative and divisive.

## Agglomerative Clustering=

Agglomerative clustering, also known as bottom-up clustering, is a technique that begins with each data point being considered as an individual cluster. The algorithm iteratively merges the closest pairs of clusters until there is only one cluster left, which contains all data points. The main steps involved in agglomerative clustering are as follows:

1. Compute the pairwise [distance](/index.php?title=Distance&action=edit&redlink=1) or similarity between every data point.
2. Merge the two closest clusters.
3. Update the distance or similarity matrix based on the newly formed cluster.
4. Repeat steps 2 and 3 until only one cluster remains.

There are various linkage criteria used to determine the distance between clusters, such as single-linkage, complete-linkage, average-linkage, and Ward's method. These criteria influence the shape and compactness of the resulting clusters.

## Divisive Clustering=

Divisive clustering, also known as top-down clustering, is the reverse process of agglomerative clustering. It starts with a single cluster containing all data points and recursively splits the cluster into smaller sub-clusters. The main steps involved in divisive clustering are as follows:

1. Start with a single cluster containing all data points.
2. Identify the cluster to be split.
3. Divide the selected cluster into two or more sub-clusters based on a chosen criterion.
4. Repeat steps 2 and 3 until each data point forms its own cluster.

Divisive clustering is less common than agglomerative clustering, as it is computationally more expensive and usually requires a predefined number of clusters.

## Advantages and Disadvantages

Hierarchical clustering offers several advantages, such as:

- It provides a hierarchical representation of the data, which can be helpful for understanding the structure of the data and the relationships between clusters.

- It does not require specifying the number of clusters a priori, as the dendrogram can be cut at any level to obtain the desired number of clusters.

However, it also has some disadvantages:

- The algorithm's complexity can be high, especially for large datasets, resulting in increased computational cost.

- The results can be sensitive to the choice of distance metric and linkage criterion, which may lead to different clustering outcomes.

- Hierarchical clustering is sensitive to outliers and noise, which can affect the clustering quality.

## Explain Like I'm 5 (ELI5)

Hierarchical clustering is a way to group similar things together in a tree-like structure. Imagine you have a big box of differently shaped and colored toys. You want to group them based on their shapes and colors. First, you find the toys that are the most similar and put them in smaller boxes. You keep doing this until all the toys are in small boxes based on their similarities. Finally, you stack these small boxes on top of each other to create a big pyramid of boxes. This pyramid shows how the toys are related to each other in groups.