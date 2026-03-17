---
title: "Categorical data"
slug: "categorical_data"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), categorical data represents qualitative or nominal [features](/wiki/feature) rather than numerical or [continuous features](/wiki/continuous_feature). It often represents attributes or characteristics of objects or events which cannot be quantified quantitatively. Categorical data plays an essential role in many machine learning tasks such as [classification](/wiki/classification), [clustering](/wiki/clustering) and [regression](/wiki/regression).

Categorical data is sometimes known as [discrete features](/wiki/discrete_feature).

## Types of Categorical Data

Categorical data can be divided into two main types: nominal and ordinal. Nominal data refers to categories without natural order or ranking, such as car colors (red, blue, green) or country names (USA, France, China). On the other hand, ordinal data includes categories with natural order or ranking such as level of education (high school, college or graduate school) or product ratings (1 star, 2 stars or 3 stars) among many more examples.

## Representation of Categorical Data

Categorical data is commonly represented with [one-hot encoding](/wiki/one-hot_encoding), which transforms each category value into a binary vector of 0s and 1s. Each binary vector has the same length as the number of categories, with 1 being placed at each position corresponding to that category. For instance, if we have categorical variable representing car colors (red, blue, and green), one-hot encoding could read red = [1, 0, 0], blue = [0, 1, 0], and green = [0, 0, 1].

## Applications of Categorical Data

Categorical data is essential for many machine learning tasks, such as classification, clustering and regression. In classification tasks, categorical information is utilized to predict the class or category of an object or event. For instance, categorical data such as the color of a car can be used to predict its class--such as sedan or SUV--when clustering tasks. Categorical features help cluster similar objects or events together for analysis. For instance, we can use country names (categorical data) to group similar products based on their market or consumer preferences. Regression tasks use categorical features to predict numerical values based on those same attributes. For instance, one could use educational level (ordinal data) as an indication for salary prediction (numerical value) of an individual.

## Explain Like I'm 5 (ELI5)

Categorical data is like different kinds of candy. Nominal candy looks like different colors of M&M's with no order; ordinal candy has an established hierarchy from small to large. We use categorical data in computer programs to understand things that cannot be quantified numerically - such as what something is, group similar items together, or estimate how much something costs based on other similar things.