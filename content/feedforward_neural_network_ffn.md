---
title: "Feedforward neural network (FFN)"
slug: "feedforward_neural_network_ffn"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **feedforward neural network** (FFN) is a type of artificial neural network used in machine learning that is characterized by its unidirectional flow of information, from input to output, without any loops or cycles. The network is composed of layers of interconnected nodes, known as neurons or artificial neurons, that process and transmit information. Feedforward neural networks have been used extensively in various applications such as pattern recognition, classification, and function approximation.

## Architecture

### Layers

A typical feedforward neural network consists of three main types of layers: the [input layer](/wiki/input_layer), one or more [hidden layers](/index.php?title=Hidden_layers&action=edit&redlink=1), and the [output layer](/wiki/output_layer). Each layer is composed of a number of neurons or nodes, which are interconnected with neurons in the adjacent layers.

- **Input layer:** The input layer receives the input data or features and passes them on to the next layer. The number of neurons in the input layer corresponds to the dimensionality of the input data.

- **Hidden layer(s):** Hidden layers perform transformations on the data received from the previous layer. They consist of a varying number of neurons, depending on the network's complexity and the problem being solved.

- **Output layer:** The output layer produces the final output, such as class labels or numerical predictions. The number of neurons in the output layer depends on the desired output format, which is often determined by the specific problem at hand.

### Neurons

A neuron in a feedforward neural network is a computational unit that receives inputs from other neurons, processes them, and generates an output. The processing of inputs typically involves two steps: a weighted sum calculation and the application of an [activation function](/wiki/activation_function).

- **Weighted sum:** The neuron computes a weighted sum of its input values, where each input is multiplied by a corresponding weight. The weights are learned by the network during training and adjusted to minimize the error between the predicted and actual outputs.

- **Activation function:** The activation function is applied to the weighted sum, introducing non-linearity into the network. This non-linearity allows the neural network to learn complex patterns and relationships in the data. Common activation functions include the sigmoid, hyperbolic tangent (tanh), and rectified linear unit (ReLU).

## Training

Feedforward neural networks are typically trained using a supervised learning algorithm called [backpropagation](/wiki/backpropagation), which adjusts the weights of the connections between neurons to minimize the error between the network's predictions and the actual target values. The training process involves the following steps:

1. **Forward pass:** Input data is passed through the network, layer by layer, until the output layer generates a prediction.
2. **Error calculation:** The error between the predicted output and the actual target value is calculated, usually using a loss function such as mean squared error or cross-entropy.
3. **Backward pass:** The error is propagated back through the network, and the weights are updated using gradient descent or a similar optimization algorithm.

## Explain Like I'm 5 (ELI5)

Imagine you have a big factory that makes toys. The factory has many workers, and they all have different jobs. The workers are like neurons in a feedforward neural network. The first group of workers takes the raw materials and starts to build the toy. They pass their work to the next group, who does more work on the toy. Finally, the last group of workers finishes the toy and sends it out of the factory.

In a feedforward neural network, the data goes through different layers of neurons, just like the toy moving through the factory. Each layer does something different to the data, and the information flows in one direction, from the input to the output. The factory workers (neurons) also learn how to do their jobs better by getting feedback