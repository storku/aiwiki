---
title: "Dimension reduction"
slug: "dimension_reduction"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Dimension Reduction in Machine Learning

Dimension reduction, also known as dimensionality reduction, is a fundamental technique in the field of [machine learning](/wiki/machine_learning) and [data analysis](/wiki/data_analysis). The primary goal of dimension reduction is to reduce the number of features or variables in a dataset while preserving its underlying structure and information. This process aids in improving computational efficiency, reducing the risk of overfitting, and enhancing interpretability. There are two primary approaches to dimension reduction: feature selection and feature extraction.

### Feature Selection

Feature selection is a process that involves selecting a subset of the most relevant features or variables from the original dataset. This approach is particularly useful when dealing with high-dimensional datasets that may contain redundant or irrelevant information. There are various techniques employed for feature selection, including filter methods, wrapper methods, and embedded methods.

#### Filter Methods

Filter methods evaluate the relevance of each feature independently, typically by measuring their correlation with the target variable. These methods are computationally efficient and do not rely on any specific machine learning model. Examples of filter methods include Pearson's correlation coefficient, mutual information, and chi-squared tests.

#### Wrapper Methods

Wrapper methods use a specific machine learning model to evaluate the usefulness of feature subsets. The selection process is performed iteratively, adding or removing features until an optimal subset is found. While these methods can produce better results than filter methods, they are more computationally expensive. Examples of wrapper methods include forward selection, backward elimination, and recursive feature elimination.

#### Embedded Methods

Embedded methods incorporate feature selection as part of the training process of a machine learning model. These methods can take advantage of the model's specific characteristics to identify important features. Examples of embedded methods include LASSO (Least Absolute Shrinkage and Selection Operator) and decision tree-based methods such as random forests and gradient boosting machines.

### Feature Extraction

Feature extraction is a process that involves transforming the original high-dimensional dataset into a lower-dimensional space while retaining most of the information. This transformation is typically achieved using linear or nonlinear techniques.

#### Linear Techniques

Linear techniques assume that the data can be represented in a lower-dimensional space using linear combinations of the original features. Popular linear techniques include Principal Component Analysis (PCA), Linear Discriminant Analysis (LDA), and Singular Value Decomposition (SVD).

#### Nonlinear Techniques

Nonlinear techniques are employed when the data's underlying structure cannot be adequately represented by linear techniques. These techniques can capture complex relationships between features and can reveal patterns that are not visible in the linear space. Examples of nonlinear techniques include t-Distributed Stochastic Neighbor Embedding (t-SNE), Isomap, and Locally Linear Embedding (LLE).

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of differently shaped and colored LEGO bricks. You want to find the best way to build something with them, but there are so many pieces that it's hard to know where to start. Dimension reduction is like sorting out the LEGO bricks by their shape and color, so you can easily see which pieces are the most important and useful for your project. By doing this, you can build your creation more easily and quickly.