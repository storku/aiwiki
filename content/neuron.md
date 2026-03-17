---
title: "Neuron"
slug: "neuron"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning, a **neuron** refers to an elementary unit within an artificial neural network (ANN). These units, also known as nodes or artificial neurons, are inspired by biological neurons found in the nervous systems of living organisms. Neurons in ANNs serve to process and transmit information through the network, enabling various machine learning tasks such as classification, regression, and pattern recognition.

## Neuron Structure and Function

### Components

A neuron in a machine learning context consists of the following components:

- **Input values (x)**: A set of input values, which represent the features of the data. These values are fed into the neuron from either the input layer of the network or from the outputs of other neurons in previous layers.

- **Weights (w)**: A set of adjustable parameters that determine the neuron's strength of connection to other neurons. Weights are multiplied by the input values and summed in the neuron.

- **Bias (b)**: An additional adjustable parameter, which is added to the weighted sum of the input values. The bias allows the neuron to adjust its output based on the input values, irrespective of the weights.

- **Activation function (f)**: A mathematical function that takes the weighted sum of the input values plus the bias as input and produces the neuron's output value. Common activation functions include the sigmoid, hyperbolic tangent (tanh), and rectified linear unit (ReLU) functions.

### Functioning

The neuron processes its input values by performing the following steps:

1. Calculate the weighted sum of the input values and weights.
2. Add the bias to the weighted sum.
3. Apply the activation function to the result obtained in the previous step.

The output of the activation function is then passed on to the next layer of neurons in the network, or serves as the final output of the ANN.

## Types of Neurons

Neurons can be classified into different types based on their roles in the network:

- **Input neurons**: These neurons serve as the entry points for data into the network. They receive input values directly from the dataset and pass them on to the subsequent layers.

- **Hidden neurons**: Located in the hidden layers of the network, these neurons process and transmit information between the input and output layers. Hidden neurons play a crucial role in learning complex patterns and relationships in the data.

- **Output neurons**: Found in the output layer, these neurons produce the final output of the network, such as the predicted class labels or numerical values.

## Explain Like I'm 5 (ELI5)

Imagine that a neuron in machine learning is like a tiny worker in a big factory. This worker gets some information from other workers (input values), and then does some calculations using their own tools (weights and bias). After that, the worker passes the result through a special machine (activation function) that helps to decide what kind of work the worker will do next.

There are different types of workers, like those who receive raw materials (input neurons), those who do the main work inside the factory (hidden neurons), and those who pack the final products (output neurons). By working together, all these workers can create complex and useful things.