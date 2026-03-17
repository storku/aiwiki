---
title: "Normalization"
slug: "normalization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Normalization in Machine Learning

Normalization is a crucial preprocessing step in machine learning that aims to scale features or data points to a standardized range or distribution. By transforming the data to a common scale, it helps machine learning algorithms converge faster and achieve better performance. This is particularly important for algorithms that are sensitive to the scale of input features, such as [gradient descent](/wiki/gradient_descent)-based algorithms and distance-based methods like [k-nearest neighbors](/index.php?title=K-nearest_neighbors&action=edit&redlink=1).

### Types of Normalization

There are several techniques for normalizing data in machine learning, each with its own advantages and limitations. Some of the most common methods include:

#### Min-Max Scaling

Min-max scaling, also known as feature scaling, linearly scales the data to a specified range, typically [0, 1]. This method involves computing the minimum and maximum values of each feature and then scaling the data accordingly. While min-max scaling is simple and easy to implement, it can be sensitive to outliers.

#### Z-score Normalization

Z-score normalization, or standardization, transforms the data so that it has a mean of 0 and a standard deviation of 1. This is done by subtracting the mean and dividing by the standard deviation for each data point. This method is less sensitive to outliers than min-max scaling and is widely used in machine learning.

#### L1 and L2 Normalization

L1 and L2 normalization are two methods that scale the data based on vector norms. L1 normalization, also known as least absolute deviations, scales the data so that the sum of the absolute values of each feature is equal to 1. L2 normalization, or least squares, scales the data so that the sum of the squared values of each feature is equal to 1. These methods can be useful when dealing with sparse data or when incorporating regularization in machine learning models.

### When to Use Normalization

Normalization is often used when the input features have different scales, units, or magnitudes. For example, if one feature measures height in meters and another measures weight in kilograms, normalizing the data can help ensure that each feature contributes equally to the model's predictions. However, normalization may not always be necessary or beneficial, particularly when the input features are already on similar scales or when the model can inherently handle different scales, such as tree-based methods like [random forests](/index.php?title=Random_forests&action=edit&redlink=1) or [decision trees](/index.php?title=Decision_trees&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Normalization is like turning different-sized boxes into boxes of the same size so that they can be stacked neatly. In machine learning, we often have data with different sizes or scales, which can make it harder for the computer to learn from the data. By making everything the same size, or "normalizing" the data, we help the computer learn more easily and make better predictions.