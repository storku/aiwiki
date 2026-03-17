---
title: "Feature"
slug: "feature"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Feature is an [input](/index.php?title=Input&action=edit&redlink=1) variable to a [machine learning model](/wiki/machine_learning_model). An [example](/wiki/example) consists of 1 or more features.

[Machine learning](/wiki/machine_learning) takes into account features, which are quantifiable aspects or characteristics of a data point that are used to build predictive [models](/wiki/models). These elements also referred to as predictors or independent variables, are selected based on their capacity for explaining variations in the dependent variable - that is, the target variable that the model seeks to predict also known as [label](/wiki/label).

Features are an integral component of machine learning [algorithms](/index.php?title=Algorithm&action=edit&redlink=1), as they influence the accuracy and effectiveness of the resulting models. By selecting relevant features and creating a suitable model, machine learning algorithms can learn patterns and relationships within data and use them to make predictions on new, unseen data sets.

## Example

| Features | Label |
| --- | --- |
| Location | Bedroom # | Bathroom # | Price |
| Midtown | 3 | 2 | $800,000 |
| Uptown | 2 | 2 | $500,000 |

## Types of Features

Features can be broadly divided into three types: numerical, categorical and text. Each requires a distinct approach when preprocessing and feature engineering.

### Numerical Features

Numeric features are variables that take on numerical values, such as age, height, weight or temperature. These features may either be [continuous](/wiki/continuous) or [discrete](/index.php?title=Discrete&action=edit&redlink=1); continuous ones take any value within a range while discrete ones only accept specific ones.

Machine learning often employs standardization or [normalization](/wiki/normalization) of numerical features to a common scale, which can help enhance the [accuracy](/wiki/accuracy) of resulting models. Standardization involves subtracting the mean and dividing by the standard deviation; conversely, normalization involves scaling values between 0 and 1.

### Categorical Features

Categorical features are variables that take on a set of values or categories, such as gender, color, occupation. Usually represented as strings or integers, categorical features can be [one-hot encoded](/wiki/one-hot_encoding) - this means each category is represented as a binary variable.

One-hot encoding involves creating a new binary variable for each category, setting it to 1 if the data point belongs to that category and 0 otherwise. This enables machine learning algorithms to treat each category as its own feature, potentially improving model accuracy.

### Text Features

Text features are variables containing [natural language](/index.php?title=Natural_language&action=edit&redlink=1) text, such as product reviews, customer feedback, news articles and more. They require a different approach to feature engineering due to their often unstructured nature and high noise content.

Machine learning typically preprocesses text features and transforms them into numerical representations such as a [bag-of-words](/index.php?title=Bag-of-words&action=edit&redlink=1) matrix or [TF-IDF](/index.php?title=TF-IDF&action=edit&redlink=1) matrix. A bag-of-words matrix represents each document as a vector of word counts, while the TF-IDF matrix displays each document's term frequencies adjusted for their importance within the corpus.

## Feature Selection

[Feature selection](/index.php?title=Feature_selection&action=edit&redlink=1) is the process of identifying and selecting the most important features for a machine learning problem. Its aim is to reduce data dimensionality while retaining informative elements pertinent to the target variable.

When selecting features for feature selection, there are three primary methods: filter methods, wrapper methods and embedded methods. Filter methods involve ranking features based on statistical significance or correlation with the target variable and selecting those with the highest ranking. Wrapper methods evaluate different subsets of features using a machine learning algorithm and selecting those which produce optimal performance. Embedded methods incorporate feature selection into training of the machine learning algorithm itself.

## Feature Engineering

[Feature engineering](/wiki/feature_engineering) is the process of creating new features from existing ones in order to enhance the accuracy and usefulness of models generated. This involves applying domain-specific knowledge in order to transform or combine raw features into more informative representations.

Feature engineering can involve several techniques, such as [scaling](/wiki/scaling), [normalization](/wiki/normalization), [binning](/wiki/binning), [one-hot encoding](/wiki/one-hot_encoding) of polynomial features and interaction terms. The purpose is to extract the most informative signal from data while reducing noise and redundancy within features.

## Explain Like I'm 5 (ELI5)

Machine learning works like this: features are like cues that assist the computer in discovering something.

Imagine playing a guessing game with your friend where they must guess which animal you are thinking of. You might provide some clues such as "it has fur" or "it's really big." These features act like cues to help them identify which animal it is you have in mind.

Machine learning involves providing features to a computer so it can learn about something, like pictures of animals. We might give the computer cues such as "it has four legs" or "it has pointy ears." These cues help the machine recognize which animal is in a picture quickly and accurately.

By giving the computer numerous features, it can learn to recognize patterns in data and make predictions on its own. It's like how you can guess what animal your friend is thinking of based on clues provided.