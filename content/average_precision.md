---
title: "Average precision"
slug: "average_precision"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Average precision** is a widely used evaluation metric in the field of [machine learning](/wiki/machine_learning) and information retrieval. It measures the effectiveness of an algorithm in retrieving relevant instances within a ranked list of items. This metric is particularly useful in scenarios where the list of items contains a large number of irrelevant items, such as in search engines and recommender systems. In this article, we will discuss the concept, its calculation, and its relevance to machine learning tasks.

## Average Precision Calculation

### Basic Concept

The concept of average precision builds upon the notion of *precision* and *recall* in information retrieval. Precision refers to the proportion of relevant items among the retrieved items, while recall measures the proportion of relevant items that are actually retrieved from the total relevant items. Average precision can be defined as the average of the precision values obtained at different levels of recall.

### Mathematical Formula

Mathematically, average precision is calculated as follows:

AP = Σ(P(k) * Δr(k))

where:

- **AP** is the average precision.

- **P(k)** is the precision at rank *k* (the proportion of relevant items among the top *k* retrieved items).

- **Δr(k)** is the change in recall at rank *k* (the difference in recall between ranks *k-1* and *k*).

This calculation is performed over all possible recall values in the ranked list of items.

## Relevance to Machine Learning Tasks

Average precision is widely used in machine learning tasks that involve ranking or classification. For example, in [Information Retrieval](/index.php?title=Information_Retrieval&action=edit&redlink=1) tasks like document retrieval and search engines, average precision is a key evaluation metric to assess the quality of the ranked list of retrieved documents. In classification tasks, such as [object detection](/index.php?title=Object_detection&action=edit&redlink=1) and [image classification](/index.php?title=Image_classification&action=edit&redlink=1), it is used to evaluate the performance of models by examining their precision-recall curves.

A closely related metric to average precision is the **Mean Average Precision** (MAP), which is the average of the average precision values across multiple queries or tasks. MAP is often used as a single number summary to compare the performance of different models or algorithms.

## Explain Like I'm 5 (ELI5)

Imagine you have a toy box with many different types of toys. Your friend asks you to find all the cars in the box, and you start looking for them. Every time you find a car, you put it on a table. You also might pick up some other toys by mistake, like planes or boats. Your friend wants to know how well you're doing at finding the cars, so they use something called "average precision" to measure your success.

Average precision is a way of checking how good you are at finding the cars (relevant items) without picking up too many wrong toys (irrelevant items). It combines two ideas: "precision," which measures how many of the toys on the table are actually cars, and "recall," which measures how many of the cars in the toy box you've found so far. Average precision is the average of the precision values at different points in your search, taking into account how much of the total cars you've found.

In the world of computers and [machine learning](/wiki/machine_learning), average precision is used to measure how well algorithms can find the right information or make accurate predictions. It's an important way of checking if a computer program is doing a good job and if it can be trusted to give good results.