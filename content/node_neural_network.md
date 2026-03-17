---
title: "Node (neural network)"
slug: "node_neural_network"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning), a node, also known as a neuron or unit, is a fundamental component of a [neural network](/wiki/neural_network). It is responsible for receiving, processing, and transmitting information within the network. The functioning of nodes is inspired by the biological neurons found in the human brain, although the two differ significantly in their complexity and operation.

## Structure and Function

### Input and Output

A node in a neural network typically consists of an input, a processing mechanism, and an output. The input receives signals from other nodes or external data sources, while the output transmits the processed signal to subsequent nodes in the network. Each input connection is associated with a [weight](/wiki/weight), which determines the importance of the input signal.

### Activation Function

The processing mechanism within a node includes an [activation function](/wiki/activation_function), which is a mathematical function used to transform the sum of the weighted input signals. This transformation is necessary to introduce non-linearity into the network, enabling it to model complex relationships between input and output data. Common activation functions include the [sigmoid function](/wiki/sigmoid_function), [hyperbolic tangent function](/index.php?title=Hyperbolic_tangent_function&action=edit&redlink=1), and [rectified linear unit (ReLU)](/index.php?title=Rectified_linear_unit_(ReLU)&action=edit&redlink=1).

## Types of Nodes

Nodes in a neural network can be classified into different types based on their role in the network. The primary categories include:

### Input Nodes

Input nodes, also known as input neurons or input units, are responsible for receiving and processing data from external sources. They typically do not have an activation function, as they directly transmit the input data to the next layer of nodes in the network.

### Hidden Nodes

Hidden nodes, also referred to as hidden neurons or hidden units, are situated between the input and output layers in a multi-layer neural network. These nodes perform complex transformations on the input data, enabling the network to model non-linear relationships between input and output variables.

### Output Nodes

Output nodes, also known as output neurons or output units, are responsible for producing the final output of the neural network. The output layer may consist of a single node for binary classification problems or multiple nodes for multi-class classification and regression tasks. The activation function in the output nodes is often different from that used in hidden nodes, as it is chosen to suit the specific problem being solved.

## Explain Like I'm 5 (ELI5)

Imagine you have a big group of friends, and you want to pass a message to someone far away. To do this, you whisper the message to the person next to you, who then whispers it to the person next to them, and so on. In this situation, each person is like a node in a neural network. They receive the message (input), process it (activation function), and pass it along (output). Some friends might be better listeners, so their whispers have more influence (weights). Just like in our game of whispers, nodes in a neural network help pass and change information to solve problems or make decisions.