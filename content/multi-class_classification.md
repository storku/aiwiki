---
title: "Multi-class classification"
slug: "multi-class_classification"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Multi-class classification is a type of [supervised learning](/wiki/supervised_learning) problem in [machine learning](/wiki/machine_learning) where an algorithm is tasked with categorizing instances into one of multiple possible classes. In contrast to [binary classification](/wiki/binary_classification), which deals with only two classes, multi-class classification handles three or more classes. This article provides an overview of multi-class classification, discusses common techniques and evaluation methods, and concludes with a simplified explanation of the topic.

## Techniques for Multi-Class Classification

There are several approaches to address multi-class classification problems in machine learning, including direct methods that can handle multiple classes inherently and indirect methods that transform multi-class problems into a series of binary classification tasks.

### Direct Methods

Direct methods, also known as "all-at-once" methods, are designed to handle multi-class classification problems without the need for modification. Some popular direct methods include:

- [Multinomial logistic regression](/index.php?title=Multinomial_logistic_regression&action=edit&redlink=1): An extension of logistic regression that can handle multiple classes.

- [Decision trees](/index.php?title=Decision_trees&action=edit&redlink=1): A tree-like structure where each internal node represents a decision based on an attribute, and leaf nodes represent the class labels.

- [Random forests](/index.php?title=Random_forests&action=edit&redlink=1): An ensemble method that combines multiple decision trees to improve classification performance.

- [Support vector machines (SVM)](/index.php?title=Support_vector_machines_(SVM)&action=edit&redlink=1) with the "one-against-all" strategy: A method that trains multiple SVMs, one for each class, and selects the class with the highest output score.

### Indirect Methods

Indirect methods convert multi-class problems into multiple binary classification problems, which can then be solved using binary classifiers. Two common indirect methods are:

- One-vs-One (OvO): This approach trains a separate classifier for every pair of classes. For a problem with *N* classes, it requires training *N*(N-1)/2* classifiers.

- One-vs-Rest (OvR) or One-vs-All (OvA): This method involves training a separate classifier for each class, treating the given class as the positive class and all other classes as the negative class.

## Evaluation Metrics

Evaluating the performance of multi-class classification models requires metrics that can handle multiple classes. Common evaluation metrics for multi-class classification include:

- [Confusion matrix](/wiki/confusion_matrix): A table that shows the number of correct and incorrect predictions made by a classifier, organized by class.

- [Precision, recall, and F1-score](/index.php?title=Precision,_recall,_and_F1-score&action=edit&redlink=1): These metrics, originally used for binary classification, can be extended to multi-class problems by averaging the scores over all classes, either through macro-averaging or micro-averaging.

- [Accuracy](/wiki/accuracy): The proportion of correctly classified instances out of the total instances.

- [Cohen's Kappa](/index.php?title=Cohen%27s_Kappa&action=edit&redlink=1): A statistic that measures the agreement between the predicted and true class labels, taking into account the agreement that occurs by chance.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of different fruits, like apples, bananas, and oranges. You want a machine to sort these fruits into their proper groups. Multi-class classification is like teaching the machine to recognize and group the fruits into their correct categories. 

In machine learning, there are different ways to teach the machine how to do this sorting. Some methods, called direct methods, can sort all the fruits at once. Other methods, called indirect methods, break the problem down into smaller parts, like comparing apples to bananas, apples to oranges, and bananas to oranges, before putting everything together.

To check how well the machine is sorting the fruits, we use special measurements called evaluation metrics. These help us see if the machine is putting the fruits into the right groups or making mistakes.