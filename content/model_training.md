---
title: "Model training"
slug: "model_training"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Model training in [machine learning](/wiki/machine_learning) refers to the process of developing a mathematical model capable of making predictions or decisions based on input data. This is achieved by iteratively adjusting the model's parameters until it can accurately generalize from the training data to previously unseen data. The ultimate goal of this process is to create a model that can perform well on new, real-world data without being overly tailored to the training data, a phenomenon known as [overfitting](/wiki/overfitting).

## Types of Model Training

There are several methods for training machine learning models, each with its own strengths and weaknesses. The three primary types of model training are supervised learning, unsupervised learning, and reinforcement learning.

### Supervised Learning

[Supervised learning](/wiki/supervised_learning) is the most common type of model training, where a model is trained on a labeled dataset. The dataset contains input-output pairs, with the output serving as the ground truth or target. The goal of supervised learning is for the model to learn the relationship between the input and output, allowing it to make accurate predictions on new, unseen data. Supervised learning can be further divided into two categories: regression and classification problems.

### Unsupervised Learning

[Unsupervised learning](/wiki/unsupervised_learning) is a type of model training that deals with unlabeled data. In this approach, the model attempts to discover underlying patterns, relationships, or structures within the data without any explicit guidance. Common unsupervised learning techniques include clustering, dimensionality reduction, and density estimation.

### Reinforcement Learning

[Reinforcement learning](/wiki/reinforcement_learning) is a type of model training where an agent learns to make decisions by interacting with an environment. The agent receives feedback in the form of rewards or penalties, which it uses to update its model and improve its decision-making process. Reinforcement learning is particularly useful in situations where the optimal solution is not known beforehand, and the agent must learn through trial and error.

## Training Algorithms

Machine learning models are trained using various algorithms that minimize a loss function, which measures the difference between the model's predictions and the true values. Some popular training algorithms include gradient descent, backpropagation, and expectation-maximization.

### Gradient Descent

[Gradient descent](/wiki/gradient_descent) is a widely used optimization algorithm in machine learning that minimizes the loss function by iteratively adjusting the model's parameters. It works by computing the gradient of the loss function with respect to the parameters and updating the parameters in the opposite direction of the gradient.

### Backpropagation

[Backpropagation](/wiki/backpropagation) is an essential training algorithm for deep learning, particularly for artificial neural networks. It is an extension of gradient descent that involves computing the gradient of the loss function with respect to each weight by applying the chain rule, then updating the weights in a process known as weight updates.

### Expectation-Maximization

[Expectation-maximization](/index.php?title=Expectation-maximization&action=edit&redlink=1) (EM) is an iterative optimization algorithm commonly used in unsupervised learning, specifically for problems involving latent variables. The EM algorithm alternates between two steps: the expectation step, which computes the expected value of the latent variables given the current model parameters, and the maximization step, which updates the model parameters based on the expectations calculated in the previous step.

## Explain Like I'm 5 (ELI5)

Imagine you want to teach a robot how to recognize different shapes. You show the robot pictures of squares, circles, and triangles, telling it which shape is in each picture. The robot then tries to remember what makes each shape unique so it can recognize them later. This is like supervised learning, where the robot learns from labeled examples.

Now, let's say you don't tell the robot what shapes are in the pictures. Instead, you let it look at the pictures and try to figure out what makes them different on its own. This is like unsup