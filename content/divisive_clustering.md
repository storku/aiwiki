---
title: "Divisive clustering"
slug: "divisive_clustering"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Divisive Clustering

Divisive clustering, also referred to as "top-down" clustering, is a hierarchical clustering method employed in machine learning and data analysis. It involves recursively partitioning a dataset into smaller subsets, where each subset represents a cluster. This process starts with a single cluster encompassing all data points and proceeds by iteratively dividing the clusters until a certain stopping criterion is met. 

## Approaches to Divisive Clustering

### DIANA

The DIANA (Divisive Analysis) algorithm is a widely used method for divisive clustering. It was introduced by Kaufman and Rousseeuw in 1990 as an alternative to the [agglomerative](/wiki/agglomerative_clustering) approach. The algorithm begins by calculating the dissimilarity between data points, typically using a distance metric such as Euclidean distance. The cluster with the highest average dissimilarity is then divided into two smaller clusters, and the process continues iteratively until the desired number of clusters is obtained or another stopping criterion is satisfied.

### Bisecting K-Means

The bisecting K-means algorithm is another common method for divisive clustering, which combines elements of both the [K-means clustering](/index.php?title=K-means_clustering&action=edit&redlink=1) algorithm and the hierarchical clustering approach. In this method, the algorithm iteratively selects the cluster with the largest size or highest variance and divides it into two smaller clusters using the K-means algorithm with K=2. This process continues until a predetermined number of clusters are generated or another stopping criterion is met.

## Performance and Applications

Divisive clustering methods, in general, have a higher computational complexity compared to agglomerative methods due to their top-down nature. Despite this, they can sometimes produce more accurate and stable cluster assignments, particularly in cases where the dataset has a complex structure or contains noise. Divisive clustering algorithms have been applied in various domains, including text mining, image segmentation, gene expression analysis, and social network analysis.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of different toys, and you want to organize them into smaller groups. Divisive clustering is like starting with all the toys in one big group and then splitting them into smaller groups based on their similarities. You keep splitting the groups until you have the number of groups you want or until the toys in each group are similar enough. In machine learning, this method helps to organize data into clusters, which can be helpful for understanding the data or making predictions.