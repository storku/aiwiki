---
title: "Training"
slug: "training"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), training enables the [model](/wiki/model) to learn from [data](/index.php?title=Data&action=edit&redlink=1). The goal of training a model is to determine the optimal [parameters](/index.php?title=Parameters&action=edit&redlink=1) ([weights](/wiki/weights) and [biases](/wiki/biases)) for the model so it can [accurately](/index.php?title=Accurate&action=edit&redlink=1) make predictions when presented with new data.

## Purpose of Training

Training involves discovering patterns and relationships amongst the data which can be used for making predictions about unseen data. Training allows the model to generalize from what it has seen so that it can accurately make predictions even when presented with unknown variables.

## Types of Training

Machine learning employs various types of training, such as [supervised learning](/wiki/supervised_learning), [unsupervised learning](/wiki/unsupervised_learning), [semi-supervised learning](/wiki/semi-supervised_learning) and [reinforcement learning](/wiki/reinforcement_learning).

### Supervised Learning

[Supervised learning](/wiki/supervised_learning) is the most common type of machine learning training. This method involves providing the [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) with a [labeled dataset](/index.php?title=Labeled_dataset&action=edit&redlink=1), in which each [data point](/index.php?title=Data_point&action=edit&redlink=1) has an assigned [class](/wiki/class) [label](/wiki/label). The algorithm then utilizes this labeled data to learn relationships between [features](/wiki/features) in the data and their corresponding labels. Ultimately, supervised learning aims to build a model capable of accurately predicting labels for new, unseen [data sets](/wiki/data_sets).

### Unsupervised Learning

[Unsupervised learning](/wiki/unsupervised_learning) is a type of machine-learning training in which an algorithm is given data that has not yet been labeled. The objective is for this algorithm to discover patterns and relationships without the assistance of labeled information. Unsupervised learning is often employed for [clustering](/wiki/clustering) and [dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1) tasks, as it allows the computer to recognize structure within data that may otherwise go undetected.

### Semi-Supervised Learning

Semi-supervised learning is a type of training that incorporates elements from both supervised and unsupervised learning methods. In this type of scenario, an algorithm receives some [labeled data](/wiki/labeled_data) but most of it remains [unlabeled](/index.php?title=Unlabeled&action=edit&redlink=1). The algorithm then utilizes this labeled information to direct its learning process and make predictions about unlabeled data.

### Reinforcement Learning

[Reinforcement learning](/wiki/reinforcement_learning) is a type of training in which an algorithm learns from its own actions and the outcomes. In reinforcement learning, an algorithm is given an environment and set of actions it can take within that environment; then it learns which actions produce the most favorable outcomes based on feedback from its environment.

## Role of Training in the Machine Learning Process

Training is an integral step in machine learning, as it enables the algorithm to learn from data and make accurate predictions. After training is complete, the algorithm can be deployed and used for making new predictions on new data sets. However, training does not happen once; it may need retrained over time as new data becomes available or underlying patterns change within the data.

## Explain Like I'm 5 (ELI5)

Training a robot to complete an assignment requires giving it examples and teaching it from those examples. Once trained, the robot can use what it's learned to complete the task on its own even if it has never seen the task before. The more examples provided to your robotic assistant, the better equipped it will become at performing that particular job.

## Explain Like I'm 5 (ELI5)

Picture having a big box of crayons and wanting to teach a robot how to color. Since the robot doesn't know how yet, you must demonstrate for it.

Take out one crayon at a time and show the robot what color it is. Let them try to color with it - it may not match exactly, but that's okay; with your help each time, it becomes better at coloring.

Training a machine learning model is kind of like training a robot. You give it some [examples](/wiki/examples), and it tries to learn from them. The more examples you give it, the better it gets at coloring on its own.