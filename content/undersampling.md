---
title: "Undersampling"
slug: "undersampling"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Overview

Undersampling is a technique used in [machine learning](/wiki/machine_learning) to address the issue of imbalanced datasets. In this context, an imbalanced dataset refers to a dataset where the classes are not represented equally. This can lead to poor performance for certain machine learning algorithms, as they may be biased towards the majority class. Undersampling involves reducing the number of instances in the majority class, with the goal of achieving a more balanced distribution of classes. This technique can improve the performance of machine learning models when dealing with imbalanced datasets.

## Approaches to Undersampling=

There are several methods for performing undersampling in machine learning, with each approach having its own set of advantages and disadvantages. Some of the most common techniques include:

### Random Undersampling

Random undersampling is the simplest method for reducing the number of instances in the majority class. It involves randomly selecting a subset of the majority class instances and removing them from the dataset. This method is easy to implement and computationally inexpensive, but it may lead to loss of potentially valuable information.

### Tomek Links

[Tomek Links](/index.php?title=Tomek_Links&action=edit&redlink=1) is an undersampling technique that identifies pairs of instances from different classes that are close to each other in the feature space. These pairs, called Tomek Links, are formed by instances of the majority class and the minority class that are nearest neighbors to each other. By removing the majority class instances involved in the Tomek Links, the minority class instances become more distinct, which can improve the performance of machine learning models.

### Neighborhood Cleaning Rule

The Neighborhood Cleaning Rule (NCR) is an undersampling technique that combines both Tomek Links and the [Wilson's Edited Nearest Neighbor](/index.php?title=Wilson%27s_Edited_Nearest_Neighbor&action=edit&redlink=1) (ENN) rule. The method involves removing majority class instances that are identified as noise by the ENN rule and those involved in Tomek Links. This approach can help to better define the decision boundary between classes while also reducing the number of majority class instances.

## Advantages and Disadvantages

Undersampling can offer several benefits when dealing with imbalanced datasets, such as:

- Improving the performance of machine learning models by reducing the bias towards the majority class.

- Reducing computational complexity and training time, as fewer instances need to be processed.

However, there are also some disadvantages to using undersampling techniques:

- Potential loss of valuable information due to the removal of instances from the majority class.

- The risk of overfitting, especially when the minority class is very small in comparison to the majority class.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of 100 marbles, with 90 red marbles and 10 blue marbles. You want to teach a robot to recognize the difference between the two colors. If the robot only sees red marbles most of the time, it might get really good at identifying red but not so good at identifying blue.

Undersampling is like taking some of the red marbles out of the bag to make the number of red and blue marbles more even. This way, the robot gets to see more blue marbles and can learn to recognize both colors better.