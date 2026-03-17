---
title: "Subsampling"
slug: "subsampling"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

Subsampling, also known as **downsampling**, is a technique used in [machine learning](/wiki/machine_learning) and [statistics](/index.php?title=Statistics&action=edit&redlink=1) to reduce the size of a dataset by selecting a smaller representative subset of the data. This process is applied to decrease the computational complexity and memory requirements of machine learning algorithms, while maintaining the quality of the obtained results. Subsampling is especially useful when dealing with large-scale datasets or when computational resources are limited.

## Methods of Subsampling

There are various methods used for subsampling in machine learning, depending on the type of data and the problem being addressed. Some common methods include:

### Random Subsampling

[Random subsampling](/index.php?title=Random_subsampling&action=edit&redlink=1) is a simple and widely used method that involves selecting a random subset of the dataset without replacement. This means that each data point has an equal probability of being included in the subsample, and once it is selected, it cannot be chosen again. This method is effective in maintaining the overall distribution and characteristics of the original dataset.

### Stratified Subsampling

In [stratified subsampling](/index.php?title=Stratified_subsampling&action=edit&redlink=1), the dataset is divided into different groups, or strata, based on certain characteristics such as class labels or other features. A proportionate number of samples are then selected from each group to ensure that the subsample maintains the same distribution of these characteristics as the original dataset. This method is particularly useful for imbalanced datasets or datasets with categorical variables.

### Cluster-based Subsampling

[Cluster-based subsampling](/index.php?title=Cluster-based_subsampling&action=edit&redlink=1) involves using clustering algorithms, such as [K-means clustering](/index.php?title=K-means_clustering&action=edit&redlink=1) or [hierarchical clustering](/wiki/hierarchical_clustering), to group similar data points together. A representative sample is then selected from each cluster to form the subsample. This method is suitable for datasets with complex structures or high-dimensional features, as it aims to preserve the underlying structure of the data.

## Advantages and Limitations

Subsampling offers several advantages and limitations in machine learning applications:

### Advantages

- Reduces computational complexity and memory requirements, enabling faster training of machine learning algorithms.

- Allows for the exploration of multiple subsets of the data, potentially providing different perspectives and insights into the problem being studied.

- Can be used in combination with other techniques, such as [cross-validation](/wiki/cross-validation), to improve the robustness of the results.

### Limitations

- May introduce sampling bias if the subsampling method does not properly represent the overall distribution and characteristics of the original dataset.

- Reducing the size of the dataset may lead to loss of information and decrease the accuracy of the machine learning models.

- The choice of subsampling method and the size of the subsample can significantly affect the performance of the machine learning algorithm.

## Explain Like I'm 5 (ELI5)

Imagine you have a huge bag of differently colored marbles, and you want to study the colors. However, it takes too much time to look at all the marbles one by one. Subsampling is like taking a small handful of marbles out of the bag, making sure you still have a mix of all the different colors. By studying just this smaller group of marbles, you can learn about the whole bag without spending as much time or effort. In machine learning, subsampling helps us work with smaller parts of large datasets to make the learning process faster and easier.