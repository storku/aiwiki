---
title: "Outlier detection"
slug: "outlier_detection"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Outlier Detection in Machine Learning

Outlier detection, also referred to as anomaly detection or novelty detection, is a process in [machine learning](/wiki/machine_learning) and [statistics](/index.php?title=Statistics&action=edit&redlink=1) that involves identifying data points, observations, or patterns that significantly deviate from the expected behavior or the majority of the data. These deviations, known as outliers, can indicate errors in data collection, unusual events, or the presence of previously unknown phenomena. Outlier detection plays a crucial role in various applications, such as fraud detection, system health monitoring, and data cleansing.

## Types of Outliers

Outliers can be classified into three main categories:

### Point Outliers

Point outliers, also known as global outliers, are individual data points that significantly deviate from the rest of the data set. These outliers can be caused by random noise, measurement errors, or genuine anomalies. 

### Contextual Outliers

Contextual outliers, or conditional outliers, are data points that deviate significantly from their expected behavior within a specific context or environment. These outliers may not necessarily be anomalous in other contexts or when considered in isolation.

### Collective Outliers

Collective outliers are groups or clusters of data points that together exhibit abnormal behavior. These outliers are not necessarily anomalous individually, but their collective behavior deviates significantly from the norm.

## Outlier Detection Techniques

Various outlier detection techniques can be applied to identify outliers in a data set, depending on the nature of the data and the specific requirements of the application. These techniques can be broadly divided into two categories: supervised and unsupervised.

### Supervised Outlier Detection

Supervised outlier detection techniques rely on labeled data, where each data point is associated with a known class or category, such as "normal" or "outlier". [Supervised learning](/wiki/supervised_learning) algorithms, such as [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM), decision trees, and neural networks, are used to build a model that can classify new data points as either normal or anomalous.

### Unsupervised Outlier Detection

Unsupervised outlier detection techniques do not require labeled data and instead work by identifying patterns or structures within the data set that may indicate the presence of outliers. Common unsupervised techniques include clustering algorithms, such as [k-means](/wiki/k-means) and DBSCAN, and density-based methods, such as Local Outlier Factor (LOF) and Kernel Density Estimation (KDE).

## Explain Like I'm 5 (ELI5)

Imagine you have a box of differently shaped toys, and most of them are squares and circles. Suddenly, you find a triangle among them. This triangle is different from the majority of the toys in the box, so we can say it's an "outlier" or a "special" toy. In machine learning, we use different techniques to find these special data points, which are called outliers. These outliers can help us understand if there's something wrong with our data or if there's something new and interesting happening.