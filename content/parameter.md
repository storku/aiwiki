---
title: "Parameter"
slug: "parameter"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning, a **parameter** refers to a variable that is adjusted during the model training process to minimize errors and improve the accuracy of the model's predictions. These parameters enable the model to learn from data and represent the relationship between input features and target outputs. This article will provide an overview of parameters in machine learning, including their role in the learning process, types, and their distinction from hyperparameters.

## Role of Parameters in Machine Learning

Parameters play a crucial role in the learning process of machine learning models. They are the primary components that a model uses to adapt its predictions to the data provided during training. As the model encounters new data, it adjusts its parameters to improve the accuracy of its predictions. This process is known as **optimization** or **fitting the model** to the data.

### Optimization Algorithms

Optimization algorithms, such as [Gradient Descent](/index.php?title=Gradient_Descent&action=edit&redlink=1), are employed to adjust the model parameters iteratively to minimize the difference between the model's predictions and the true output values. This difference, also known as the **loss** or **cost** function, serves as a measure of how well the model is performing. By minimizing this loss, the model is able to generalize and make accurate predictions on unseen data.

## Types of Parameters

Depending on the machine learning model, various types of parameters may be used. Two common examples are **weights** and **biases** in neural networks, and **coefficients** in linear regression.

### Weights and Biases

In [Neural Networks](/index.php?title=Neural_Networks&action=edit&redlink=1), weights and biases are the parameters that are adjusted during training. These values are used to determine the strength of connections between neurons in the network. Weights control the influence of input features on the output, while biases provide a constant value to the linear combination of inputs and weights. Adjusting these parameters allows the neural network to learn complex patterns and make accurate predictions.

### Coefficients

In [Linear Regression](/index.php?title=Linear_Regression&action=edit&redlink=1), coefficients represent the relationship between input features and the target output. These coefficients are multiplied with the input features to produce a predicted output value. Adjusting the coefficients during the training process allows the linear regression model to minimize the difference between its predictions and the true output values.

## Parameters vs. Hyperparameters

In contrast to parameters, **hyperparameters** are the settings that govern the overall structure and behavior of a machine learning model. They are not learned during the training process, but rather are set by the practitioner before training begins. Examples of hyperparameters include the learning rate, number of layers in a neural network, and the type of activation function used.

## Explain Like I'm 5 (ELI5)

Parameters in machine learning are like knobs and dials on a machine that help it learn and make good predictions. As the machine sees more examples and learns, it adjusts these knobs and dials to get better at its job. Different types of machines have different kinds of parameters, but they all work in a similar way to help the machine learn from data.