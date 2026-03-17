---
title: "Feature engineering"
slug: "feature_engineering"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Feature engineering is a crucial process in [machine learning](/wiki/machine_learning) that involves selecting, extracting, and transforming relevant [features](/wiki/feature) or variables from raw data to enhance the [accuracy](/wiki/accuracy) and performance of [machine learning models](/wiki/machine_learning_models). This complex task necessitates domain knowledge, creativity, and proficiency with data manipulation techniques. The goal of feature engineering is to turn raw [data](/index.php?title=Data&action=edit&redlink=1) into an informative representation that can be easily comprehended by machine learning models.

## What are features in machine learning?

[Features](/wiki/feature) in [machine learning](/wiki/machine_learning) refer to attributes or characteristics of [data](/index.php?title=Data&action=edit&redlink=1) that can be used to describe or distinguish different [classes](/wiki/class) or groups. Features typically appear as columns within a [dataset](/wiki/dataset), with each row representing an [example](/wiki/example) or [data point](/index.php?title=Data_point&action=edit&redlink=1). For instance, when looking at houses from a dataset, features might include their number of bedrooms, living room size, age of the house and location.

Features are integral in machine learning, as they form the basis for understanding patterns and making predictions. Unfortunately, not all features are equally valuable; some may be irrelevant, redundant, or noisy which negatively impacts model performance. Therefore, feature engineering plays an essential role in identifying and selecting pertinent and informative features for a given problem.

## Why is feature engineering important?

Feature engineering is essential in machine learning for several reasons. Firstly, it improves performance and [accuracy](/wiki/accuracy) of [models](/wiki/models) by providing a more informative representation of data. Secondly, it reduces [dimensionality](/index.php?title=Dimensionality&action=edit&redlink=1) by eliminating irrelevant or redundant features which simplifies the learning process and increases computational efficiency. Thirdly, feature engineering helps address issues like [overfitting](/wiki/overfitting) or [underfitting](/wiki/underfitting) by maintaining an appropriate balance between [bias](/wiki/bias) and [variance](/index.php?title=Variance&action=edit&redlink=1). Finally, feature engineering improves the interpretability and explainability of machine learning models - essential qualities required in many real-world applications.

## What are the types of feature engineering?

Feature engineering can be broadly classified into three main types: [feature selection](/index.php?title=Feature_selection&action=edit&redlink=1), [feature extraction](/wiki/feature_extraction), and [feature transformation](/index.php?title=Feature_transformation&action=edit&redlink=1).

### Feature Selection

[Feature selection](/index.php?title=Feature_selection&action=edit&redlink=1) is the process of selecting a subset of relevant features from an expansive set. This can be done through various techniques like [correlation analysis](/index.php?title=Correlation_analysis&action=edit&redlink=1), [mutual information](/index.php?title=Mutual_information&action=edit&redlink=1), [chi-square tests](/index.php?title=Chi-square_tests&action=edit&redlink=1) and [recursive feature elimination](/index.php?title=Recursive_feature_elimination&action=edit&redlink=1). The aim is to reduce data dimensionality while maintaining or improving the performance of a machine learning model.

### Feature Extraction

[Feature extraction](/wiki/feature_extraction) is the process of creating new features from existing data through various mathematical or statistical transformations. Examples of feature extraction techniques include [Principal Component Analysis](/index.php?title=Principal_Component_Analysis&action=edit&redlink=1) (PCA), [Singular Value Decomposition](/index.php?title=Singular_Value_Decomposition&action=edit&redlink=1) (SVD), and [Non-negative Matrix Factorization](/index.php?title=Non-negative_Matrix_Factorization&action=edit&redlink=1) (NMF). The goal of feature extraction is to create a more informative and compact representation of data which could then enhance machine learning models' performance.

### Feature Transformation

[Feature transformation](/index.php?title=Feature_transformation&action=edit&redlink=1) involves altering the original features by applying mathematical or statistical functions such as logarithmic, exponential or power functions. The purpose of feature transformation is to [normalize](/index.php?title=Normalize&action=edit&redlink=1) data or make it more suitable for a machine learning model. Common feature transformation techniques include [scaling](/wiki/scaling), [centering](/index.php?title=Centering&action=edit&redlink=1) and [normalization](/wiki/normalization).

## How is feature engineering done in practice?

1. [Data exploration](/index.php?title=Data_exploration&action=edit&redlink=1): The initial step is to explore the data and gain an understanding of its features and their relationships with the target variable. Doing this helps identify any missing values, outliers, or other data quality issues that need to be addressed.

2. [Feature selection](/index.php?title=Feature_selection&action=edit&redlink=1): The next step in feature selection is to identify features that are pertinent to the problem being solved. This process involves analyzing the correlations between features and the target variable, eliminating any redundant or low correlation elements that do not contribute to understanding the situation at hand.

3. [Feature transformation](/index.php?title=Feature_transformation&action=edit&redlink=1): Once features have been selected, they may need to be enhanced for use in a machine learning model. This can involve techniques like [scaling](/wiki/scaling), [normalization](/wiki/normalization), [encoding categorical variables](/index.php?title=Encoding_categorical_variables&action=edit&redlink=1) and [creating new features from existing ones](/wiki/feature_cross).

4. [Feature extraction](/wiki/feature_extraction): Sometimes, raw input data may lack relevant features or cannot be easily identified. In such cases, feature extraction can be employed to create new ones from the raw data. This can be accomplished using techniques like [principal component analysis](/index.php?title=Principal_component_analysis&action=edit&redlink=1) (PCA) or [clustering](/wiki/clustering).

5. Iteration: Feature engineering is an iterative process, in which the performance of the model is evaluated after each step and feature selection and transformation decisions are refined according to those results. This cycle continues until desired levels of model performance are reached.

## Explain Like I'm 5 (ELI5)

Feature engineering is like equipping yourself with the right tools to solve a puzzle.

Imagine you have a puzzle with pieces of all different shapes and sizes. With the appropriate tools, like magnifying glasses or tweezers, it will be much easier to put the pieces back together. This is similar to feature engineering - we select the appropriate "tools" so the computer can better comprehend data.

Machine learning is the practice of teaching computers to recognize things, like pictures of animals. To do this, we give the computer some "clues" or features about the image such as "it has four legs" or "it has pointy ears." Feature engineering involves selecting the best clues for giving to a computer so that it can make an accurate prediction.

By choosing the right features, we can help the computer learn more quickly and accurately. It's like having the right tools to put a puzzle together faster and with fewer mistakes.