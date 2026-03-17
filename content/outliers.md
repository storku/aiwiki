---
title: "Outliers"
slug: "outliers"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Outliers in Machine Learning

In the field of machine learning, outliers are data points that deviate significantly from the majority of the other data points in a given dataset. These data points can have a substantial impact on the results and performance of machine learning algorithms, potentially leading to erroneous or misleading conclusions. This article discusses the concept of outliers, their implications in machine learning, and common techniques for detecting and handling outliers.

### Definition and Characteristics

An outlier is an observation that lies an abnormal distance from other values in a random sample drawn from a population. In the context of machine learning, outliers can arise from a variety of sources, such as errors in data collection, data entry, or data preprocessing, or they may represent genuine extreme values in the data distribution. Outliers can be classified into two categories: univariate and multivariate. Univariate outliers occur in a single variable or feature, while multivariate outliers are a combination of unusual values across multiple variables.

Outliers can have a significant impact on the performance of machine learning models, especially those that are sensitive to the presence of extreme values, such as linear regression, k-means clustering, and principal component analysis. Consequently, identifying and handling outliers is an essential step in the data preprocessing stage to ensure the robustness and accuracy of the resulting models.

### Detection Techniques

There are several techniques for detecting outliers in a dataset, including:

- **Statistical methods**: These methods are based on the assumption that the majority of the data points in a dataset follow a specific distribution, such as a Gaussian or normal distribution. Common statistical techniques for identifying outliers include the Z-score method, the IQR method, and the Grubbs' test.

- **Visualization techniques**: Visualization techniques, such as box plots, scatter plots, and histograms, can provide a visual representation of the data and help identify potential outliers.

- **Machine learning algorithms**: Some machine learning algorithms, such as DBSCAN and Local Outlier Factor (LOF), are specifically designed to identify outliers in the data.

### Handling Outliers

After detecting outliers, there are several strategies to handle them, depending on the context and the nature of the data. These strategies include:

- **Removing outliers**: Outliers can be removed from the dataset if they are deemed to be the result of errors or noise. However, this approach should be used with caution, as it may lead to loss of valuable information or introduce bias in the data.

- **Transforming the data**: Applying transformations, such as log, square root, or inverse transformations, can help reduce the impact of outliers on the machine learning model.

- **Imputing the missing values**: If outliers are considered missing values, they can be replaced with more representative values, such as the mean, median, or mode of the variable.

- **Using robust algorithms**: Some machine learning algorithms, such as Huber regression, RANSAC, and robust PCA, are less sensitive to outliers and can be used to build models that are more resistant to their effects.

## Explain Like I'm 5 (ELI5)

Outliers in machine learning are like the odd-looking fruits in a basket of fruit. Most of the fruits look normal, but a few might be really big, small, or have a strange shape. These odd fruits can make it hard to figure out what the "typical" fruit should look like.

In the same way, outliers in a dataset are points that are very different from the rest. They can make it difficult for a computer to learn patterns in the data, so it's important to find and deal with them. We can do this by using special techniques to spot the outliers, and then either remove them, change the data in some way, or use