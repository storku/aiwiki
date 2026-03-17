---
title: "Tf.keras"
slug: "tf_keras"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**tf.keras** is a high-level neural networks API, integrated within the [TensorFlow](/wiki/tensorflow) machine learning framework. Developed by the Google Brain Team, tf.keras is designed to facilitate the creation, training, and evaluation of deep learning models. It is designed for quick prototyping and is user-friendly, modular, and extensible. In this article, we explore the key features and components of tf.keras, its advantages, and its implementation in TensorFlow.

## Features

### User-friendly

tf.keras offers a user-friendly interface, simplifying the process of creating and training deep learning models. The API provides clear and concise error messages and supports a variety of common use cases, such as multi-input and multi-output models, shared layers, and model subclassing.

### Modularity

tf.keras promotes modularity by enabling users to construct models using a variety of interchangeable components, such as layers, optimizers, and loss functions. This allows for the creation of complex architectures with minimal code.

### Extensibility

tf.keras is designed with extensibility in mind, allowing users to easily create custom layers, loss functions, and optimizers, or modify existing ones. This enables the implementation of novel and cutting-edge research ideas with relative ease.

## Components

### Models

In tf.keras, models are organized as a sequence or a graph of layers. There are two main types of models available:

- **Sequential model**: A linear stack of layers, suitable for simple feedforward neural networks.

- **Functional API**: A more flexible approach that allows the creation of complex models with multiple inputs, outputs, or shared layers.

### Layers

Layers are the fundamental building blocks of neural networks in tf.keras. They are responsible for transforming the input data and extracting features. Some common types of layers include:

- **Dense**: Fully connected layer.

- **Convolutional**: Convolutional layer, typically used in image processing tasks.

- **Recurrent**: Recurrent layer, suitable for sequence-based tasks, such as natural language processing.

### Optimizers

Optimizers in tf.keras are responsible for updating the model's weights during training. They aim to minimize the loss function by adjusting the weights based on the gradients calculated through [backpropagation](/wiki/backpropagation). Some popular optimizers include:

- **Stochastic Gradient Descent (SGD)**: A basic optimizer that updates the weights using the gradient of the loss function.

- **Adam**: An adaptive learning rate optimizer that combines the benefits of two popular extensions of SGD, AdaGrad and RMSProp.

### Loss Functions

Loss functions quantify the difference between the predicted output and the true output (or target). They guide the optimizer in updating the model's weights. Common loss functions in tf.keras include:

- **Mean Squared Error (MSE)**: Used for regression tasks, it calculates the squared difference between the predicted and true values.

- **Categorical Crossentropy**: Commonly used for multi-class classification tasks, it measures the similarity between the predicted probability distribution and the true distribution.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of LEGO bricks, and you want to build something amazing. **tf.keras** is like the instruction manual that helps you put the LEGO bricks together in the right way to create a cool model. It gives you simple steps to follow and makes sure you understand what you're doing.

The LEGO bricks are like the different parts of a machine learning model, such as layers, and tf.keras helps you combine them to create something powerful. It also helps you fix any mistakes and change your model if you want to try something new.