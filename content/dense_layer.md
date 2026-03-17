---
title: "Dense layer"
slug: "dense_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Dense Layer in Machine Learning

A **dense layer** in machine learning, also referred to as a **fully connected layer** or simply **FC layer**, is a fundamental architectural component of [artificial neural networks](/index.php?title=Artificial_neural_networks&action=edit&redlink=1) (ANNs) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) models. The dense layer functions as a linear transformation followed by an optional non-linear [activation function](/wiki/activation_function), which facilitates the learning and representation of complex patterns and relationships in the input data.

### Structure and Function of Dense Layers

Dense layers consist of a set of interconnected [neurons](/index.php?title=Neurons&action=edit&redlink=1) or nodes, wherein each node in a given layer is connected to every node in the adjacent layer. These connections are assigned [weights](/wiki/weights) and [biases](/wiki/biases), which are learned by the model during the [training](/wiki/training) process. The dense layer computes the weighted sum of its inputs, adds the bias term, and applies the activation function to generate its output.

Mathematically, the output of a dense layer can be represented as follows:

*y = f(Wx + b)*

where *y* represents the output, *W* denotes the weight matrix, *x* signifies the input vector, *b* is the bias vector, and *f* symbolizes the activation function.

The choice of activation function, such as [ReLU](/wiki/relu), sigmoid, or [tanh](/index.php?title=Tanh&action=edit&redlink=1), plays a crucial role in introducing non-linearity to the model, enabling it to approximate complex functions and capture intricate relationships in the data.

### Applications of Dense Layers

Dense layers are employed across a wide range of machine learning tasks and are a fundamental building block in various types of neural networks, including [feedforward neural networks](/index.php?title=Feedforward_neural_networks&action=edit&redlink=1), [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs), and [recurrent neural networks](/index.php?title=Recurrent_neural_networks&action=edit&redlink=1) (RNNs).

In feedforward neural networks, dense layers are utilized to build the entire architecture, while in CNNs, they are typically used as the final layers after a series of convolutional and pooling layers to produce the output, such as classification or regression results. In RNNs, dense layers can be employed to generate the output at each time step or to process the final hidden state for sequence-based tasks.

## Explain Like I'm 5 (ELI5)

Imagine you have a big group of friends, and they are all standing in a line. Each person has a different number of candies, and they want to share them with the person next to them. A dense layer in machine learning is like these friends, but instead of sharing candies, they are sharing information.

Each friend represents a small part of the whole picture, and they all work together to understand it better. They share this information by talking to their neighbors, and these neighbors do the same. The more they share, the better they understand the picture. In the end, the last person in the line can tell you what they've learned, which is the result of the dense layer in a machine learning model.