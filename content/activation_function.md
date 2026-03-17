---
title: "Activation function"
slug: "activation_function"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*

## Introduction

An activation function in [machine learning](/wiki/machine_learning) is a mathematical function applied to the [output](/index.php?title=Output&action=edit&redlink=1) of a [neuron](/wiki/neuron) in a [neural network](/wiki/neural_network). This determines what happens next based on [input](/index.php?title=Input&action=edit&redlink=1) to the neuron and is an essential element of its [architecture](/index.php?title=Architecture&action=edit&redlink=1). The activation function enables neural networks to learn [nonlinear](/wiki/nonlinear) (complex) relationships between [features](/wiki/feature) and the [label](/wiki/label).

## What is an Activation Function?

An activation function is a nonlinear equation applied to the weighted sum of inputs to a neuron. This transforms the inputs into an output with non-linear characteristics which then serve as input for subsequent layers of neurons.

Neural networks employ various activation functions, such as [sigmoid](/index.php?title=Sigmoid&action=edit&redlink=1), [tanh](/index.php?title=Tanh&action=edit&redlink=1), [ReLU](/wiki/relu) (rectified linear unit), and [softmax](/wiki/softmax). The choice of activation function depends on the problem being solved and the design of the neural network itself.

The activation function is an essential element of a neural network model, as it introduces nonlinearity into the equation and allows the network to simulate intricate connections between input and output.

## Why Use Activation Functions?

Activation functions in neural networks introduce nonlinearity into the model. Without an activation function, neural network output would simply be a linear combination of inputs that cannot accurately model complex relationships between them.

The activation function allows a neural network to model non-linear relationships between input and output, making it more powerful and expressive. Furthermore, it helps prevent the [vanishing gradient](/index.php?title=Vanishing_gradient&action=edit&redlink=1) problem that can arise when training deep neural networks.

## Types of Activation Functions

In neural networks, activation functions come in many forms such as:

### Sigmoid

The [sigmoid](/index.php?title=Sigmoid&action=edit&redlink=1) function is a popular activation function that maps any input value to an integer between 0 and 1. This makes it useful in [binary classification](/wiki/binary_classification) problems where either zero or one must be produced as the output.

### Tanh

The [tanh](/index.php?title=Tanh&action=edit&redlink=1) function is a hyperbolic tangent function that maps any input value to an integer between -1 and 1. This hyperbolic tangent function can be useful in [regression](/wiki/regression) problems where the output may take on an array of values.

### ReLU

The [rectified linear unit](/index.php?title=Rectified_linear_unit&action=edit&redlink=1) (ReLU) function is a popular activation function that maps any input value to either 0, or the value itself. This makes the ReLU function ideal for deep neural networks, helping prevent the vanishing gradient problem.

### Softmax

The [softmax](/wiki/softmax) function is a popular activation function used in the [output layer](/wiki/output_layer) of neural networks for [multi-class classification](/wiki/multi-class_classification) problems. This activation function maps input into an interval probability distribution over output [classes](/wiki/class).

## Explain Like I'm 5 (ELI5)

Activation functions are like special glasses that help computers see better. They alter pictures, sounds, or other items by altering their hue or brightness; this makes it easier for the computer to differentiate what the picture or sound is and how best to process it. Different glasses are used for various tasks like seeing colors or finding loudest noise.