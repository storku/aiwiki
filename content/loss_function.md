---
title: "Loss function"
slug: "loss_function"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), a **loss function** (also known as a cost function or objective function) is a crucial mathematical formulation that quantifies the difference between the predicted outcome of a model and the actual or desired outcome. Loss functions serve as the basis for optimization, enabling the model to iteratively adjust its parameters to minimize this difference and improve its performance.

## Role in Machine Learning

Loss functions are integral components of [supervised learning](/wiki/supervised_learning) algorithms, where the model is trained on a labeled dataset containing input-output pairs. By quantifying the error or discrepancy between the model's predictions and the true labels, the loss function provides a means of evaluating and refining the model's performance.

### Types of Loss Functions

There are various types of loss functions, each tailored to specific problem domains and types of data. Some common categories include:

- **Regression Loss Functions:** Used in [regression](/wiki/regression) tasks, where the model predicts a continuous numerical value. Examples include Mean Squared Error (MSE) and Mean Absolute Error (MAE).

- **Classification Loss Functions:** Used in [classification](/wiki/classification) tasks, where the model predicts discrete class labels. Examples include Cross-Entropy Loss, Hinge Loss, and Zero-One Loss.

- **Ranking Loss Functions:** Used in ranking problems, where the model predicts an ordering of items based on their relevance or preference. Examples include RankNet Loss and LambdaMART Loss.

## Optimization and Training

During the training process, the loss function serves as the guiding signal for adjusting the model's parameters. This is typically achieved through an [optimization](/index.php?title=Optimization&action=edit&redlink=1) algorithm such as Gradient Descent, which calculates the gradients of the loss function with respect to the model's parameters and updates them in the direction of the steepest decrease in the loss.

As the model's parameters are updated iteratively, the value of the loss function generally decreases, indicating that the model's predictions are becoming closer to the actual outcomes. The goal of the training process is to find a set of parameters that minimize the loss function, resulting in the best possible performance of the model on the given data.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to learn how to throw a ball into a basket. Each time you throw the ball, you can see whether you missed the basket, hit the rim, or got the ball in. You try to change the way you throw the ball to get better results. In machine learning, the loss function is like a scorekeeper that tells you how far your throw was from the basket. It helps the computer figure out how to adjust its predictions to get better and better, just like you adjust your throw to get the ball in the basket.