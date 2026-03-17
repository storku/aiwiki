---
title: "Rank (ordinality)"
slug: "rank_ordinality"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, **rank** or **ordinality** refers to a specific type of data that represents a relative order or position among a set of items. Unlike continuous numerical data, which can take any value within a range, or categorical data, which consists of discrete values with no inherent order, ordinal data possesses an inherent order or ranking, but the intervals between the values are not necessarily consistent or meaningful. This unique characteristic of ordinal data makes it essential to develop specialized techniques and algorithms in machine learning that can effectively capture the information contained in these rankings.

## Ordinal Data

### Definition

Ordinal data consists of values that can be ranked or ordered, but the differences between those values are not necessarily quantifiable or meaningful. The data can be represented by a set of categories or labels, each having a relative position within the dataset. Examples of ordinal data include movie ratings, educational levels, and survey responses based on Likert scales.

### Challenges

Handling ordinal data in machine learning poses several challenges. The primary issue is the inconsistency or lack of meaning in the intervals between values. This inconsistency means that traditional distance-based metrics, such as Euclidean distance, may not accurately represent the relationship between the ranked values. Another challenge is that ordinal data is often treated as categorical or numerical data, which can lead to the misinterpretation or loss of valuable information embedded in the ranking.

## Ordinal Regression

Ordinal regression, also known as **ordered regression**, is a type of supervised learning technique specifically designed to model ordinal data. The primary goal of ordinal regression is to predict the relative order or ranking of an observation, rather than an exact numerical value. Popular ordinal regression models include [Proportional Odds Model](/index.php?title=Proportional_Odds_Model&action=edit&redlink=1), [Ordered Logit](/index.php?title=Ordered_Logit&action=edit&redlink=1), and [Ordered Probit](/index.php?title=Ordered_Probit&action=edit&redlink=1).

### Assumptions

Ordinal regression models rely on a set of assumptions that must be satisfied for the model to produce reliable results. These assumptions include:

- The dependent variable is ordinal

- The independent variables have a linear relationship with the dependent variable's logits or probits

- The model's error terms are independent and identically distributed

### Performance Evaluation

Evaluating the performance of an ordinal regression model requires metrics that can capture the unique characteristics of ordinal data. Common evaluation metrics for ordinal regression include the [Kendall's Tau](/index.php?title=Kendall%27s_Tau&action=edit&redlink=1), [Spearman's Rank Correlation Coefficient](/index.php?title=Spearman%27s_Rank_Correlation_Coefficient&action=edit&redlink=1), and the [Weighted Kappa](/index.php?title=Weighted_Kappa&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you're in a race with your friends. Instead of measuring how fast each of you runs, you only care about who comes in first, second, third, and so on. This order of finishing the race is called **rank** or **ordinality** in machine learning. It's different from knowing how fast everyone runs because it only tells you the order, not the actual speeds.

When we use computers to help us understand data like this, we need special ways to handle it. That's because the difference between coming in first and second might be different than the difference between coming in second and third. There are specific tools in machine learning, called ordinal regression models, to work with this kind of data and help us make predictions based on the order of things.