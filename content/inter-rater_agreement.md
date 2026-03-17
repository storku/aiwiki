---
title: "Inter-rater agreement"
slug: "inter-rater_agreement"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Inter-rater agreement, also referred to as inter-rater reliability or inter-annotator agreement, is a measure of the degree of consistency or consensus among multiple raters or annotators when evaluating a set of items, such as classifying data points in a [machine learning](/wiki/machine_learning) task. This measure is essential in various machine learning and [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP) applications, where human-annotated data is used to train, evaluate, or fine-tune models.

## Importance of Inter-rater Agreement

### Model Performance

The quality of the annotated data used for training and evaluation has a direct impact on the performance of machine learning models. Inter-rater agreement ensures that the labels assigned to the data points are consistent and reliable, reducing the noise in the dataset and ultimately improving the model's performance.

### Bias and Generalizability

A high level of inter-rater agreement reduces the risk of introducing bias from individual raters, leading to a more representative and generalizable dataset. Diverse perspectives among raters are valuable, but the consensus ensures that the labels reflect a shared understanding of the underlying concept, rather than individual idiosyncrasies.

## Methods for Measuring Inter-rater Agreement

There are several statistical methods available for quantifying inter-rater agreement, including:

### Percent Agreement

The simplest method for measuring inter-rater agreement is percent agreement, which calculates the proportion of items on which all raters agree. While easy to compute, this method does not take into account the possibility of agreement occurring by chance.

### Cohen's Kappa

[Cohen's Kappa](/index.php?title=Cohen%27s_Kappa&action=edit&redlink=1) is a widely-used measure for inter-rater agreement that accounts for the possibility of agreement occurring by chance. Kappa values range from -1 (complete disagreement) to 1 (perfect agreement), with values close to 0 indicating agreement that is no better than chance.

### Fleiss' Kappa

Fleiss' Kappa is an extension of Cohen's Kappa, designed to handle more than two raters. Similar to Cohen's Kappa, it ranges from -1 (complete disagreement) to 1 (perfect agreement), with values close to 0 indicating agreement that is no better than chance.

### Intraclass Correlation Coefficient (ICC)

The [Intraclass Correlation Coefficient](/index.php?title=Intraclass_Correlation_Coefficient&action=edit&redlink=1) (ICC) is another method for assessing inter-rater agreement, particularly for continuous or ordinal data. It measures the degree of consistency among raters, with values ranging from 0 (no consistency) to 1 (perfect consistency).

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of apples and oranges, and you ask your friends to help you sort them. Inter-rater agreement is like making sure all your friends agree on which fruit is an apple and which is an orange. In machine learning, this agreement helps make sure the computer learns the right things from the examples we give it. The more your friends agree on the fruits, the better the computer will learn.