---
title: "Target"
slug: "target"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), the term **target** refers to the variable or outcome that a learning algorithm aims to predict, estimate, or classify. The target is also commonly referred to as a **label** or **ground truth**. Machine learning models utilize target data during the training phase to learn patterns, relationships, or rules, and subsequently generalize these findings to make predictions on unseen data. Targets can be continuous, categorical, or binary depending on the specific problem being addressed.

## Types of Targets

There are three primary types of targets in machine learning, which correspond to different types of learning problems:

### Continuous Targets

Continuous targets are associated with [regression](/wiki/regression) problems, where the goal is to predict a continuous numeric value. Examples of continuous targets include predicting house prices, sales figures, or stock prices. In these cases, the learning algorithm is tasked with estimating a numeric value that minimizes some error metric, such as mean squared error or mean absolute error.

### Categorical Targets

Categorical targets involve predicting one of several predefined categories or classes, which is the basis for [classification](/wiki/classification) problems. Examples of categorical targets include classifying emails as spam or not spam, determining whether an image contains a cat or a dog, and identifying the topic of a news article. Categorical targets can be further divided into two subtypes: binary and multi-class.

#### Binary Targets

Binary targets consist of two possible classes or categories. Common examples include predicting whether a patient has a specific medical condition (yes or no), whether a transaction is fraudulent, or whether a customer will make a purchase.

#### Multi-class Targets

Multi-class targets involve three or more categories or classes. Examples include classifying hand-written digits from 0 to 9, identifying the breed of a dog in an image, or categorizing news articles into distinct topics such as politics, sports, or technology.

## Supervised Learning and Targets

Targets play a crucial role in [supervised learning](/wiki/supervised_learning), a subset of machine learning in which an algorithm is provided with labeled training data, including both input features and corresponding target values. The algorithm leverages this information to learn a relationship between input features and targets, which can then be applied to make predictions for new, unseen data.

## Explain Like I'm 5 (ELI5)

Imagine you're teaching a robot to recognize different types of fruit. You show the robot lots of pictures of apples, bananas, and oranges, and you tell it the name of each fruit in the picture. The name of the fruit is the "target" because that's what the robot is trying to learn to predict. So, when you show the robot a new picture of a fruit it has never seen before, it can use what it learned to tell you the name of that fruit.