---
title: "Sampling bias"
slug: "sampling_bias"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Sampling bias in [machine learning](/wiki/machine_learning) is a type of bias that occurs when the data used for training and testing a model does not accurately represent the underlying population. This can lead to a model that performs poorly in real-world applications, as it is not able to generalize well to the broader population. In this article, we will discuss the various causes and types of sampling bias, the consequences of sampling bias in machine learning, and techniques to mitigate sampling bias. Finally, we will provide a simple explanation of the concept for readers without a background in the field.

## Causes and Types of Sampling Bias

There are several causes and types of sampling bias that can occur in machine learning. These include, but are not limited to:

### Non-random Sampling

Non-random sampling occurs when the data used to train and test a model is not collected in a random manner. This can result in a biased sample that does not accurately represent the underlying population. Examples of non-random sampling include convenience sampling, judgment sampling, and quota sampling.

### Underrepresentation

Underrepresentation occurs when certain classes or groups within the population are not adequately represented in the training and testing data. This can lead to a model that does not perform well on underrepresented groups, which can have negative consequences in real-world applications, particularly in fields like [medicine](/index.php?title=Medicine&action=edit&redlink=1) and [finance](/wiki/finance).

### Temporal Bias

Temporal bias occurs when the data used to train and test a model is collected during a specific time period that does not accurately represent the broader population over time. This can result in a model that does not perform well when applied to data from different time periods.

## Consequences of Sampling Bias in Machine Learning

Sampling bias can have several consequences for machine learning models, including:

### Reduced Model Accuracy

When a model is trained on biased data, it can lead to reduced accuracy and performance in real-world applications. This is because the model is not able to generalize well to the broader population, as it has been trained on a biased sample.

### Ethical and Social Implications

Sampling bias can have significant ethical and social implications, particularly when machine learning models are used in sensitive areas like healthcare, finance, or criminal justice. If certain groups are underrepresented in the training data, the model may produce unfair or biased outcomes for these groups.

## Mitigating Sampling Bias

There are several techniques that can be used to mitigate sampling bias in machine learning, including:

### Random Sampling

To ensure a representative sample, it is important to use random sampling techniques when collecting data for training and testing machine learning models.

### Stratified Sampling

Stratified sampling can be used to ensure that each class or group within the population is adequately represented in the training and testing data. This involves dividing the population into strata, or groups, and then selecting a random sample from each group.

### Cross-Validation

Cross-validation is a technique that can help mitigate the effects of sampling bias by using different subsets of the data for training and testing. This can help ensure that the model is able to generalize well to the broader population.

## Explain Like I'm 5 (ELI5)

Sampling bias in machine learning is like having a basket of fruits with apples, oranges, and bananas, but you only pick apples to learn about all fruits. This makes your understanding of fruits incomplete and not accurate, because you didn't include the other fruits in your learning process. So, when you need to identify or talk about oranges and bananas, you won't be able to do it well. To avoid this problem, we should try to learn from a mix of all the fruits, not just focusing on one type.