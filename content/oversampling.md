---
title: "Oversampling"
slug: "oversampling"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Oversampling in Machine Learning

Oversampling is a technique used in the field of [machine learning](/wiki/machine_learning) to address the issue of imbalanced data by increasing the number of samples in the minority class. This process aims to achieve a balanced distribution of classes within the dataset, which ultimately leads to improved performance of machine learning algorithms. 

### Imbalanced Data

Imbalanced data occurs when the distribution of samples among different classes in a dataset is unequal. The unequal distribution may lead to biased predictions, as the machine learning model tends to favor the majority class during training. As a result, the performance metrics, such as accuracy, can be misleading, and the model may not generalize well to unseen data. In order to address this issue, a variety of techniques have been developed, including oversampling, undersampling, and cost-sensitive learning. 

### Oversampling Techniques

There are several oversampling techniques that can be employed to balance the class distribution in a dataset. These techniques can be divided into two main categories: random oversampling and synthetic oversampling. 

#### Random Oversampling

[Random oversampling](/index.php?title=Random_oversampling&action=edit&redlink=1) involves randomly duplicating instances from the minority class, increasing the frequency of the minority class in the dataset. This method is simple to implement, but it may lead to overfitting, as the model may become too reliant on the replicated samples.

#### Synthetic Oversampling

Synthetic oversampling techniques create new instances of the minority class by generating synthetic samples. One of the most popular synthetic oversampling methods is the Synthetic Minority Over-sampling Technique (SMOTE). [SMOTE](/index.php?title=SMOTE&action=edit&redlink=1) works by selecting instances from the minority class, then interpolating between them and their k-nearest neighbors to create new, synthetic samples. This approach helps to reduce the risk of overfitting compared to random oversampling, as the model is not solely reliant on duplicated samples.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bag of differently shaped and colored toys. You want to teach a friend to recognize these shapes and colors, but there are many more of one type of toy than the others. To help your friend learn better, you decide to add more of the toys that are less common, so they have a chance to see them more often. This is like oversampling in machine learning: we add more examples of the less common types of data to make it easier for the computer to learn about them.