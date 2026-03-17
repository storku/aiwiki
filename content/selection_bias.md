---
title: "Selection bias"
slug: "selection_bias"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Selection bias in [machine learning](/wiki/machine_learning) refers to the phenomenon where the sample data used to train or evaluate a machine learning model does not accurately represent the underlying population or the target domain. This issue arises when the training data is collected or selected in a way that introduces systematic errors, which can lead to biased predictions or conclusions when the model is applied to real-world scenarios. Understanding and addressing selection bias is crucial in ensuring that machine learning models provide accurate, reliable, and generalizable results.

## Causes of Selection Bias

There are several reasons that selection bias may occur in machine learning:

### Non-random Sampling

In many cases, selection bias is introduced when the data used to train a machine learning model is collected through non-random sampling methods. If the sample is not representative of the population, the model may learn patterns or associations that do not generalize well to new data points. Examples of non-random sampling include convenience sampling, snowball sampling, and quota sampling.

### Data Preprocessing

Data preprocessing is an essential step in machine learning, involving cleaning, transforming, and encoding the raw data. However, if this process is not carefully designed, it can inadvertently introduce selection bias. For instance, removing outliers or imputing missing values based on incorrect assumptions may lead to a biased dataset that no longer reflects the true population distribution.

### Labeling Bias

In supervised learning, the quality of the labeled data is of utmost importance. When the labeling process is influenced by the annotator's subjective beliefs or preferences, it may introduce bias into the dataset. This type of bias, called labeling bias, can cause the machine learning model to learn incorrect relationships between the input features and the target variable.

## Effects of Selection Bias

Selection bias in machine learning can have several negative consequences:

### Reduced Model Performance

When a model is trained on a biased dataset, its performance on new, unseen data may be negatively affected. The model may fail to generalize well to the target domain, leading to inaccurate predictions and reduced overall effectiveness.

### Algorithmic Bias

Selection bias can lead to [algorithmic bias](/index.php?title=Algorithmic_bias&action=edit&redlink=1), a situation in which the machine learning model exhibits systematic errors in its predictions. Algorithmic bias can be problematic, especially in sensitive applications such as credit scoring, hiring, and medical diagnostics, where biased predictions can lead to unfair treatment or negative outcomes for certain groups or individuals.

## Mitigating Selection Bias

There are several techniques that can be employed to mitigate the effects of selection bias in machine learning:

### Ensuring Representative Sampling

Using random sampling methods, such as simple random sampling or stratified sampling, can help ensure that the training dataset is representative of the population. This reduces the likelihood of selection bias and improves the model's generalizability.

### Cross-Validation

Cross-validation is a technique that involves partitioning the dataset into multiple subsets and iteratively training and testing the model on different combinations of these subsets. This helps to evaluate the model's performance more robustly and identify potential issues related to selection bias.

### Re-sampling Techniques

Re-sampling techniques, such as bootstrapping and [SMOTE](/index.php?title=SMOTE&action=edit&redlink=1) (Synthetic Minority Over-sampling Technique), can be used to balance the dataset or generate new samples that better represent the underlying population. This can help mitigate the effects of selection bias on the model's performance.

## Explain Like I'm 5 (ELI5)

Selection bias in machine learning is like trying to guess what a whole group of people like to eat based on the preferences of just a few of your friends. If you only ask your friends who love pizza, you might think that everyone loves pizza. But this isn't true because you didn't include other people who might like different foods. In machine learning, if we don't collect the right data that represents