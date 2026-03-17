---
title: "Positive class"
slug: "positive_class"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), the term **positive class** refers to one of the two possible outcomes in a binary classification problem. Binary classification is a type of [supervised learning](/wiki/supervised_learning) where the objective is to categorize a given input into one of two mutually exclusive categories or classes. These classes are often labeled as the positive and negative classes. The positive class is typically the target class or the class of interest, whereas the negative class represents the other, less interesting outcome.

## Role of Positive Class in Binary Classification

Binary classification is a fundamental task in machine learning that is widely applicable in various domains, such as medical diagnosis, spam detection, and sentiment analysis. In these tasks, the positive class plays a crucial role in defining the objective of the learning algorithm and quantifying its performance.

### Medical Diagnosis

In a medical diagnosis problem, the positive class might represent the presence of a specific disease or condition, while the negative class represents its absence. For example, in a [breast cancer](/index.php?title=Breast_cancer&action=edit&redlink=1) detection problem, the positive class would represent patients with breast cancer, and the negative class would represent healthy patients. The goal of the machine learning model in this case is to accurately identify patients belonging to the positive class, minimizing both false positives and false negatives.

### Spam Detection

In the context of [spam detection](/index.php?title=Spam_detection&action=edit&redlink=1), the positive class represents spam emails, and the negative class represents legitimate emails. The machine learning model's objective is to correctly classify emails as spam or legitimate, minimizing the number of false positives (legitimate emails classified as spam) and false negatives (spam emails classified as legitimate).

### Sentiment Analysis

In [sentiment analysis](/wiki/sentiment_analysis), the positive class might represent positive sentiment, and the negative class could represent negative sentiment. The machine learning model would be trained to analyze text and determine the sentiment expressed, aiming to accurately classify the text into the positive or negative class.

## Performance Metrics

The choice of positive class affects the evaluation of a machine learning model's performance using various [performance metrics](/index.php?title=Performance_metrics&action=edit&redlink=1). Some common performance metrics that depend on the positive class are precision, recall, and the F1 score. These metrics help in assessing the model's ability to correctly identify instances of the positive class while minimizing misclassification of instances from the negative class.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of red and green apples. Your job is to sort the apples into two groups: one group with all the red apples and another group with all the green apples. In this case, the red apples could be the "positive class" and the green apples the "negative class." The positive class is just the group you're more interested in, like finding all the red apples. In machine learning, the positive class is the outcome we want to find, like finding people who have a certain illness, detecting spam emails, or figuring out if a message is happy or sad.