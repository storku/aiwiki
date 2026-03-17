---
title: "Predictive rate parity"
slug: "predictive_rate_parity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Predictive rate parity is an important concept in the field of machine learning, particularly in the context of fairness and bias. It is a metric used to measure the fairness of a machine learning model, especially in cases where the model makes predictions for different groups within a dataset. The goal of achieving predictive rate parity is to ensure that the model's predictions are equitable across these groups, minimizing the potential for discrimination or bias.

## Predictive Rate Parity Definition

Predictive rate parity is achieved when the probability of a positive prediction given a true positive is equal across all groups. In other words, for a given classifier, the ratio of true positive predictions to the total number of positive predictions should be the same for all groups. Mathematically, this can be expressed as:

P(\hat{Y}=1 | Y=1, G=g) = P(\hat{Y}=1 | Y=1, G=h)

where:

- P denotes probability

- \hat{Y} represents the predicted outcome

- Y is the true outcome

- G is the group variable (for example race, gender, etc.)

- g and h represent two different groups

Achieving predictive rate parity is important for ensuring that a model is fair and does not discriminate against any particular group.

### Relation to Other Fairness Metrics

Predictive rate parity is related to other fairness metrics in machine learning, such as [demographic parity](/wiki/demographic_parity), [equalized odds](/wiki/equalized_odds), and [equal opportunity](/index.php?title=Equal_opportunity&action=edit&redlink=1). These metrics also aim to measure the fairness of a classifier's predictions across different groups, but they focus on different aspects of the model's performance. For example, demographic parity requires that the proportion of positive predictions is the same across groups, while equalized odds ensures that the model has the same true positive rate and false positive rate for each group.

## Challenges in Achieving Predictive Rate Parity

Achieving predictive rate parity can be challenging due to several factors. These include the presence of imbalanced data, differing base rates for different groups, and the trade-offs between achieving predictive rate parity and other performance metrics, such as accuracy.

### Imbalanced Data

Imbalanced data refers to situations where one or more groups are underrepresented in the dataset. This can lead to biased predictions, as the classifier may have insufficient information about the underrepresented group(s) to make accurate predictions. Addressing imbalanced data often requires techniques such as resampling or the use of synthetic data.

### Differing Base Rates

Differing base rates for different groups can make it difficult to achieve predictive rate parity. If the prevalence of a certain outcome is different for different groups, a classifier may be more likely to make biased predictions. In such cases, it may be necessary to adjust the classifier's decision threshold or apply other fairness-enhancing techniques to achieve predictive rate parity.

### Trade-offs

There can be trade-offs between achieving predictive rate parity and other performance metrics. For example, improving predictive rate parity might come at the cost of reduced overall accuracy. Deciding on the appropriate balance between fairness and other performance metrics depends on the specific context and the consequences of biased predictions.

## Explain Like I'm 5 (ELI5)

Predictive rate parity is like having a teacher who gives out stickers to students for doing well on a test. The teacher wants to make sure they are fair and give out stickers to all students who deserve them, no matter which group they belong to (for example boys or girls, younger or older students). The teacher has achieved predictive rate parity when the chance of getting a sticker is the same for students from different groups who did well on the test. This helps make sure that the teacher is treating everyone fairly and not favoring one group over another.