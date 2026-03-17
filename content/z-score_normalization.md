---
title: "Z-score normalization"
slug: "z-score_normalization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Z-score normalization is a type of [data scaling](/index.php?title=Data_scaling&action=edit&redlink=1) that transforms [data](/index.php?title=Data&action=edit&redlink=1) values to have a [mean](/index.php?title=Mean&action=edit&redlink=1) of zero and [standard deviation](/index.php?title=Standard_deviation&action=edit&redlink=1) of one. This transformation occurs by subtracting the mean from each value and dividing by its standard deviation. The results are known as [Z-scores](/index.php?title=Z-score&action=edit&redlink=1), which indicate how far away from the mean each data point is.

Data [normalization](/wiki/normalization) in [machine learning](/wiki/machine_learning) is a critical preprocessing step that helps boost the performance of many [algorithms](/index.php?title=Algorithm&action=edit&redlink=1). Normalization involves scaling data to a specified range or distribution to reduce the impact of differences in scale or units of [features](/wiki/feature).

## Simple Example

A [feature](/wiki/feature) with the mean of 500 and a standard deviation of 100.

|  |
| --- |
| raw value | Z-score |
| 500 | 0 |
| 600 | 1 |
| 355 | -1.45 |

[Model](/wiki/model) will train on the Z-score instead of raw values

## Why is Z-score normalization used?

Z-score normalization is a technique commonly used in machine learning to address the issue of [feature scaling](/index.php?title=Feature_scaling&action=edit&redlink=1). When features in a dataset have different scales or units, it can cause issues for certain machine learning algorithms that rely on distance-based calculations such as [k-nearest neighbors](/index.php?title=K-nearest_neighbors&action=edit&redlink=1) (KNN) or [support vector machines](/index.php?title=Support_vector_machine&action=edit&redlink=1) (SVM), which require equal weighting across all features in the analysis. With Z-score normalization, however, we can standardize these dimensions so that each contributes equally to our analysis.

## How is Z-score normalization performed?

Z-score normalization is a straightforward formula that can be applied to each feature within an array. It consists of:

Z = (x - µ) / σ

- Z is the Z-score for a particular data value

- x is its original data value

- µ stands for mean of all data values in that feature

- σ stands for standard deviation of those data values for the feature

To apply Z-score normalization to a dataset, we must perform the following steps:

1. Calculate the mean and standard deviation for each feature in the [dataset](/wiki/dataset).

2. For each data value within a feature, subtract its mean value and divide by its standard deviation.

3. These values correspond to Z-scores for each data point.

## Real-life Example

Let us assume we have a dataset with two features, height (in cm) and weight (in kg), that we would like to apply Z-score normalization to. The data values for these features can be seen in the following table:

| Height (cm) | Weight (kg) |
| --- | --- |
| 180 | 85 |
| 150 | 55 |

Before applying Z-score normalization to the dataset, we must first calculate the mean and standard deviation for each feature. These values can be found in the following table:

| Features | Mean | Standard Deviation |
| --- | --- | --- |
| Height (cm) | 166 | 10.954 |
| Weight (kg) | 65.6 | 14.834 |

By applying the formula for Z-score normalization to each data value in our dataset, we can calculate Z-scores individually. The results are displayed in the following table:

| Height Z-score | Weight Z-score |
| --- | --- |
| 1.27807 | 1.30781 |
| -1.46065 | -0.71457 |

## Explain Like I'm 5 (ELI5)

Hey there! Have you ever noticed how when having different-sized toys, it can be challenging to compare them? Well, in machine learning it works similarly - sometimes numbers may appear huge while other times they may appear tiny. Comparing and using these numbers in calculations can be tricky since the larger ones often have greater effects than their smaller counterparts.

Z-score normalization can help! It's a way of making all numbers the same size so we can compare them more easily. Imagine having an automated machine that could shrink or grow each toy so they were all the same size, no matter their original dimensions!

To do this, we utilize some math to calculate the average size and spread of all numbers. Then we adjust each one so it fits within this average and spread, creating similar-sized numbers so we can compare and use them more conveniently.