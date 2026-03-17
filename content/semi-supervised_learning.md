---
title: "Semi-supervised learning"
slug: "semi-supervised_learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Semi-supervised learning is a type of [machine learning](/wiki/machine_learning) approach that combines elements of both supervised and unsupervised learning methods. It leverages a small amount of labeled data along with a larger volume of unlabeled data to train models. This article will provide an overview of semi-supervised learning, discuss its advantages and challenges, and present commonly used techniques.

## Motivation and Advantages

### Limited Labeled Data

One of the main motivations for using semi-supervised learning is the scarcity of labeled data. Obtaining a large amount of labeled data can be expensive, time-consuming, and often requires domain expertise. Semi-supervised learning takes advantage of the available unlabeled data to improve model performance without requiring a substantial increase in labeled data.

### Improved Model Performance

Semi-supervised learning can lead to improved model performance compared to strictly supervised or unsupervised learning methods. By leveraging both labeled and unlabeled data, semi-supervised learning can help models generalize better and reduce overfitting, which may result in better predictions on new, unseen data.

## Techniques and Approaches

### Self-Training

In self-training, an initial model is trained using the available labeled data. The model then generates predictions on the unlabeled data, and the most confident predictions are incorporated as new labeled data points. The model is then retrained on the combined labeled dataset, and the process is repeated iteratively until a desired level of performance is achieved.

### Co-Training

Co-training involves training two or more models simultaneously on different views (i.e., different feature sets) of the labeled data. Each model generates predictions for the unlabeled data, and the most confident predictions from each model are used to augment the labeled data of the other model(s). The models are then retrained on the updated labeled datasets, and the process is repeated iteratively.

### Graph-Based Methods

Graph-based methods model the relationships between data points in the form of a graph, with nodes representing data points and edges representing similarity or distance between them. The graph is used to propagate label information from labeled to unlabeled nodes, helping the model to infer labels for the unlabeled data points.

### Consistency Regularization

Consistency regularization encourages the model to produce consistent predictions for similar data points or for different transformations of the same data point. This approach can help improve the model's generalization by leveraging the structure present in the unlabeled data.

## Challenges

### Model Confidence

A challenge in semi-supervised learning is determining the model's confidence in its predictions. Incorrectly incorporating low-confidence predictions into the labeled dataset may degrade model performance or introduce biases. Various techniques, such as thresholding based on prediction probabilities or using information theoretic measures, can be employed to address this issue.

### Domain Adaptation

Domain adaptation refers to the challenge of applying a model trained on one domain (for example source) to a different but related domain (for example target). In semi-supervised learning, the labeled and unlabeled data may come from different domains, making it difficult for the model to learn a consistent representation. Techniques such as domain adaptation or domain adversarial training can be employed to mitigate this issue.

## Explain Like I'm 5 (ELI5)

Imagine you're learning to recognize different types of fruits by looking at pictures. Your teacher shows you a few pictures of apples, oranges, and bananas with their names (labeled data). Then, your teacher gives you a large pile of pictures without names (unlabeled data). 

Semi-supervised learning is like using the pictures you already know (labeled data) to help you guess the names of the new pictures (unlabeled data). You might be more sure about some guesses than others, but you can