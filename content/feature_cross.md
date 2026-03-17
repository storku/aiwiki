---
title: "Feature cross"
slug: "feature_cross"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) rely heavily on [features](/wiki/feature) to extract useful information from [data](/index.php?title=Data&action=edit&redlink=1). [Feature engineering](/wiki/feature_engineering) is the process of selecting and manipulating raw data to create new ones that better depict patterns and relationships present in it. One advanced feature engineering technique used is [feature crossing](/index.php?title=Feature_crossing&action=edit&redlink=1).

## What is Feature Crossing?

Feature crossing is a technique for creating new features by combining two or more existing ones in a [dataset](/wiki/dataset). In other words, it captures the interaction between these features. This approach works especially well when the relationship between them is nonlinear or individual elements are not enough to fully capture patterns present in data.

Feature crossing is the process of creating new features by multiplying or adding two or more existing ones. For instance, if we have two features A and B, then we can create C by multiplying A by B; that is, C = A*B. Alternatively, adding A to B results in D as D = A + B.

Feature crossing can be performed on any number of features using any mathematical operation. The new features that result from feature crossing can then be fed into a machine learning algorithm just like their predecessors were used as input.

## Why use Feature Crossing?

Feature crossing can be especially useful when individual features fail to capture patterns in data. For instance, a dataset with features representing age and income of individuals might reveal that these alone cannot accurately predict whether someone will purchase a given product; however, multiplying these two factors together yields an accurate predictor.

Furthermore, feature crossing can help visualize non-linear relationships between features. For instance, if we had a dataset with features representing temperature and humidity, the relationship might not be linear. However, if we created a new feature by multiplying temperature and humidity together, this new measure might be better at predicting some outcome.

## How to Implement Feature Crossing?

To implement feature crossing, we must identify which features should be combined and with which mathematical operation. This can be accomplished through domain knowledge, trial-and-error methods, or automated feature selection algorithms.

Once we've identified the features to combine, we can generate new ones by applying our chosen mathematical operation. Finally, we incorporate both sets of features as input to a machine learning algorithm.

## Examples of Feature Crossing

Let us illustrate feature crossing with an example: suppose we have a dataset with features representing individuals' age and income, along with a target variable showing whether they have purchased a product. On its own, these factors alone cannot predict whether someone will purchase the item; however, multiplying these two factors together produces an effective predictor of purchasing behavior.

Another example is a dataset with features representing temperature and humidity, along with a target variable that indicates whether rain will fall on any given day. We might observe that the relationship between temperature and humidity isn't linear; however, if we create a new feature by multiplying temperature and humidity together, this new indicator becomes better at predicting whether it will rain.

## Explain Like I'm 5 (ELI5)

Machine learning uses feature crossing to create new ways of looking at old data in order to help computers find answers to questions. It's like mixing together your favorite foods to create something even better than the originals! By combining two or more pieces of information and applying some math, we can generate new data which is more helpful in answering our inquiries.