---
title: "Unsupervised machine learning"
slug: "unsupervised_machine_learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Unsupervised machine learning or **unsupervised training** is a type of [machine learning](/wiki/machine_learning) in which the [model](/wiki/model) is [trained](/index.php?title=Trained&action=edit&redlink=1) using [unlabeled data](/wiki/unlabeled_data). Unsupervised learning aims to recognize patterns or relationships without prior knowledge about their [labels](/wiki/label) or categories. Unsupervised learning can be especially useful when there is no preexisting knowledge about the data and manual labeling would be too time-consuming, costly or impossible.

Unsupervised learning involves giving a model an array of data points and asking it to discover structure or relationships within it. Without any prior knowledge, the model must discover patterns on its own. Furthermore, there is no feedback regarding the [accuracy](/wiki/accuracy) of its predictions since there are no labels with which to compare them.

The opposite of unsupervised machine learning is [supervised machine learning](/wiki/supervised_machine_learning).

## Types of Unsupervised Machine Learning

Unsupervised machine learning typically consists of two primary processes: clustering and dimensionality reduction.

### Clustering

[Clustering](/wiki/clustering) is an unsupervised learning technique used to group similar data points together. The objective of clustering is to discover natural groupings within the data. Clustering can be beneficial for tasks such as [customer segmentation](/index.php?title=Customer_segmentation&action=edit&redlink=1), [anomaly detection](/wiki/anomaly_detection) and [image segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1).

Clustering [algorithms](/index.php?title=Algorithms&action=edit&redlink=1) range from [k-means](/wiki/k-means) to [hierarchical clustering](/wiki/hierarchical_clustering) and [density-based clustering](/index.php?title=Density-based_clustering&action=edit&redlink=1). K-means is one of the most popular algorithms, breaking data up into k clusters that represent similar data points. Hierarchical clustering creates a treelike structure of clusters with one root node representing all data points and leaf nodes representing individual points. Density-based clustering works by identifying high density regions within data.

### Dimensionality Reduction

[Dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1) is an unsupervised learning technique used to reduce the number of [features](/wiki/features) in data. The objective is to simplify the information while maintaining as much detail as possible. Dimensionality reduction can be beneficial for tasks such as [data visualization](/index.php?title=Data_visualization&action=edit&redlink=1), [noise reduction](/index.php?title=Noise_reduction&action=edit&redlink=1), and [feature extraction](/wiki/feature_extraction).

Dimensionality reduction algorithms range from [principal component analysis](/index.php?title=Principal_component_analysis&action=edit&redlink=1) (PCA), [independent component analysis](/index.php?title=Independent_component_analysis&action=edit&redlink=1) (ICA), and ppt-distributed stochastic neighbor embedding]] (t-SNE). PCA is a popular dimensionality reduction technique that works by projecting data onto a lower-dimensional space while retaining as much variance as possible. ICA separates data into independent components. Finally, t-SNE provides an effective means of visualizing high dimensional data sets.

## Applications of Unsupervised Machine Learning

Unsupervised machine learning has numerous applications in various fields, such as:

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): Unsupervised learning is used to identify topics and themes from unstructured text data.

- Image and video analysis: Unsupervised learning can be applied to recognize objects, scenes, and events captured in images and videos.

- Anomaly Detection: Unsupervised learning can be employed to detect unusual patterns in data that could indicate anomalies or outliers.

- Fraud Detection: Unsupervised learning can be employed to detect fraudulent behavior by recognizing patterns inconsistent with normal patterns.

- Customer Segmentation: Unsupervised learning is utilized to group customers with similar characteristics together.

## Explain Like I'm 5 (ELI5)

Imagine you have a collection of bright toys, but you don't know their names or what they do. You want to organize them into groups based on colors or shapes, but no one can tell you which group each one belongs in.

Unsupervised machine learning is like using your eyes and brain to figure out which toys are similar, then group them according to function without anyone providing you with a name for each toy or its function.

Unsupervised machine learning helps computers organize similar items in a vast collection of data without anyone explicitly telling it what each thing is or what its purpose should be. Instead, the computer simply searches for patterns and similarities among data points, then groups them according to those findings.