---
title: "Minority class"
slug: "minority_class"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), the minority class is the less common [label](/wiki/label) in a [dataset that is imbalanced](/wiki/class-imbalanced_dataset). For example, in a [dataset](/wiki/dataset) where there are 80% "yes" and 20% "no", "no" is the minority [class](/wiki/class). The opposite of the majority class the [majority class](/wiki/majority_class).

A [classification model](/wiki/classification_model) trained on an [class-imbalanced dataset](/wiki/class-imbalanced_dataset) is likely to be [biased](/wiki/biased) towards the majority class and may not be able to [accurately](/index.php?title=Accurately&action=edit&redlink=1) predict the minority one. In real-life [applications](/wiki/applications), the minority class often holds greater interest due to its representation of important target variables such as fraud detection or disease diagnosis.

## The Challenge of Minority Class

The issue with the minority class is that machine learning models tend to perform poorly when predicting it. This is because most algorithms are designed for overall accuracy, meaning they favor the majority class. As a result, minority classes are frequently misclassified as the majority group, leading to poor predictive performance.

Furthermore, minority class samples often exhibit different distributional and structural properties than the majority class, further compounding the problem. For instance, fraudulent transactions tend to be rare events that happen in less than 1% of total population; as a result, features like transaction amount, location and time of day may vary significantly between classes.

## Why is Minority Class Important?

Though underrepresented, the minority class can be of greater value in practical applications. In many real-world scenarios, the minority represents critical events or rare occurrences that require special attention from stakeholders. For instance, in medicine, patients with rare diseases require extra care, while financial domains may encounter high-risk transactions that need immediate action.

## Approaches to Handling Minority Class

When it comes to dealing with the minority class in machine learning, there are various approaches. One popular solution is [oversampling](/wiki/oversampling) the minority class or [undersampling](/wiki/undersampling) the majority. Another strategy involves using different [evaluation metrics](/index.php?title=Evaluation_metrics&action=edit&redlink=1) that focus on minority performance such as [precision](/wiki/precision), [recall](/wiki/recall), and [F1-score](/index.php?title=F1-score&action=edit&redlink=1) instead of overall [accuracy](/wiki/accuracy).

Recently, several advanced techniques have been proposed to address the minority class problem, such as [ensemble methods](/index.php?title=Ensemble_methods&action=edit&redlink=1), [cost-sensitive learning](/index.php?title=Cost-sensitive_learning&action=edit&redlink=1) and [active learning](/wiki/active_learning). These approaches aim to enhance a model's performance on minorities by either changing the [classification threshold](/wiki/classification_threshold) or including additional information about them.

## Explain Like I'm 5 (ELI5)

Machine learning utilizes computers to predict things based on past data. But sometimes, certain events happen too rarely for our computer to pick up on; these rare instances are known as the minority class. To guarantee our computer can still recognize them, we employ special methods like special glasses that enable it to see things that may otherwise go unseen.