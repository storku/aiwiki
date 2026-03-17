---
title: "K-median"
slug: "k-median"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

The **k-median** algorithm is a popular unsupervised learning technique in the field of [machine learning](/wiki/machine_learning) and [data science](/index.php?title=Data_science&action=edit&redlink=1). It is a variant of the well-known [k-means clustering](/index.php?title=K-means_clustering&action=edit&redlink=1) algorithm, which aims to partition a set of data points into *k* distinct clusters, where each data point belongs to the cluster with the nearest mean. The k-median algorithm, on the other hand, seeks to minimize the sum of distances between each data point and the median of its assigned cluster.

## K-Median Algorithm

The k-median algorithm is an iterative process that follows these general steps:

1. Initialize *k* medians randomly or using a pre-determined method.

2. Assign each data point to the cluster with the closest median.

3. Recompute the median of each cluster.

4. Repeat steps 2 and 3 until the medians converge or a stopping criterion is met.

It should be noted that the k-median algorithm is sensitive to the initial choice of medians, and different initializations can lead to different final clusterings. To mitigate this issue, several techniques can be employed, such as running the algorithm multiple times with different initializations or using advanced initialization methods like the [k-means++](/index.php?title=K-means%2B%2B&action=edit&redlink=1) technique.

### Distance Metric

A key component of the k-median algorithm is the choice of distance metric used to compute the distances between data points and medians. The most common distance metric used is the [Manhattan distance](/index.php?title=Manhattan_distance&action=edit&redlink=1), also known as the L1 norm, which calculates the sum of the absolute differences between coordinates. However, other distance metrics can be used depending on the specific problem and the characteristics of the data being clustered.

## Applications

K-median clustering has numerous applications across various fields, including:

- [Image segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1): Partitioning an image into distinct regions based on pixel intensity or color.

- [Anomaly detection](/wiki/anomaly_detection): Identifying unusual patterns or outliers in data.

- [Market segmentation](/index.php?title=Market_segmentation&action=edit&redlink=1): Grouping customers based on their preferences, behaviors, or demographics.

- [Document clustering](/index.php?title=Document_clustering&action=edit&redlink=1): Organizing large collections of text documents into meaningful categories.

## Advantages and Disadvantages

The k-median algorithm offers some advantages over the k-means algorithm, including:

- Robustness to outliers: Medians are less sensitive to extreme values than means, making the k-median algorithm more robust in the presence of outliers.

- Interpretability: Medians are easier to interpret as they represent actual data points, whereas means may not correspond to any real-world observation.

However, the k-median algorithm also has some drawbacks:

- Computationally expensive: Calculating medians requires sorting the data, which can be more time-consuming than computing means, especially for large datasets.

- Less stable: The k-median algorithm may be more sensitive to small changes in the data, as the medians can change more drastically than the means.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of different colored marbles, and you want to group them based on their colors. The k-median algorithm helps you do this by picking a few marbles as "representative" colors and then grouping the rest of the marbles based on which representative color they're closest to. The k-median algorithm is like the k-means algorithm, but instead of using the average color, it uses the "middle" color, which makes it better at handling weird or unusual colors (outliers).