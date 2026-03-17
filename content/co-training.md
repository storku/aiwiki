---
title: "Co-training"
slug: "co-training"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Co-training in Machine Learning

Co-training is a semi-supervised learning technique in the domain of [machine learning](/wiki/machine_learning). It leverages both labeled and unlabeled data to improve the performance of classifiers. The technique was first introduced by Avrim Blum and Tom Mitchell in their 1998 paper, *[Combining Labeled and Unlabeled Data with Co-Training](/index.php?title=Combining_Labeled_and_Unlabeled_Data_with_Co-Training&action=edit&redlink=1)*. Co-training is particularly useful when labeled data is scarce, as it makes use of the additional information present in the unlabeled data.

### Overview

Co-training is based on the assumption that the input features can be split into two disjoint, yet complementary, subsets. The basic idea is to train two classifiers, each on one of these subsets of features. These classifiers then iteratively label the unlabeled data, and the newly labeled data is added to the training set for the other classifier. The process continues until a stopping criterion is met or the classifiers reach a certain level of agreement.

### Algorithm

The co-training algorithm can be summarized as follows:

1. Split the input features into two disjoint sets, A and B.

2. Initialize two classifiers, C_A and C_B, one for each feature set.

3. Train C_A and C_B on the available labeled data, using their respective feature sets.

4. Select a batch of unlabeled data points.

5. Label the selected data points using C_A and C_B, and add the confidently labeled data points to the labeled data set for the other classifier.

6. Update C_A and C_B with the new labeled data.

7. Repeat steps 4-6 until a stopping criterion is met.

### Applications

Co-training has been applied to various fields, including [text classification](/index.php?title=Text_classification&action=edit&redlink=1), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and [bioinformatics](/index.php?title=Bioinformatics&action=edit&redlink=1). It has been particularly successful in situations where labeled data is expensive or time-consuming to obtain, and where the assumption of feature independence holds true.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of differently shaped and colored toys, and you want to teach your two friends, Alice and Bob, how to sort them. However, you only have a few toys with labels telling which group they belong to. Alice will learn to sort toys based on their shape, while Bob will learn to sort them based on their color.

First, you show Alice and Bob the labeled toys and explain how to sort them. Then, you give them some unlabeled toys to practice on. They start sorting the toys, and if they are very sure about a toy's group, they will put a label on it. Then, they swap the newly labeled toys with each other to learn from each other's confident decisions. This process continues until Alice and Bob agree on how to sort the toys, or they don't find any new toys they are confident about.

This is similar to how co-training works in machine learning. Two classifiers learn from a small amount of labeled data and then teach each other using unlabeled data that they are confident about. This helps them get better at their job, even when there isn't a lot of labeled data available.