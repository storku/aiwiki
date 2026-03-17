---
title: "Backpropagation"
slug: "backpropagation"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Backpropagation is a technique used to train [artificial neural networks](/index.php?title=Artificial_neural_network&action=edit&redlink=1), [machine learning models](/wiki/machine_learning_models) inspired by the structure and function of the human brain. This process adjusts the weights assigned to connections within the network in order to minimize [errors](/index.php?title=Error&action=edit&redlink=1) between [predictions](/wiki/prediction) and actual [input](/index.php?title=Input&action=edit&redlink=1) values.

The backpropagation algorithm is often employed in conjunction with [supervised learning](/wiki/supervised_learning) tasks, in which the network is provided a set of input-output pairs and asked to learn a mapping from inputs to outputs. The algorithm consists of two primary steps: [forward propagation](/index.php?title=Forward_propagation&action=edit&redlink=1) and [backward propagation](/index.php?title=Backward_propagation&action=edit&redlink=1).

## Forward Propagation

In the forward propagation step, input data is routed through a network, and output is calculated by applying an [activation function](/wiki/activation_function) to the weighted sum of inputs at each neuron. An activation function is an algebraic formula that determines a neuron's output given its inputs; common activation functions include [Sigmoid](/index.php?title=Sigmoid&action=edit&redlink=1), [ReLU](/wiki/relu) and [Tanh](/index.php?title=Tanh&action=edit&redlink=1).

## Backward Propagation

In the backward propagation step, the [weights](/wiki/weights) of the network are adjusted. The aim is to minimize any error between predictions and actual values by using a [loss function](/wiki/loss_function) such as [mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) or [cross-entropy](/wiki/cross-entropy).

Calculating the [gradient](/wiki/gradient) of a loss function with respect to weights requires using the chain rule of calculus. This rule states that to obtain the derivative of a composite function, one must multiply its derivative by that of its inner function. In backpropagation, however, we assume that the outer function is the loss function and its inner one represents activation levels for neurons.

To adjust the weights on a network, an [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) such as [gradient descent](/wiki/gradient_descent) is employed; here, the weights are updated in the opposite direction to that of the loss function's gradient. This process is repeated multiple times until there is a minimal error between predictions and true values.

## Explain Like I'm 5 (ELI5)

Backpropagation is a technique used by computers to learn new tasks, like recognizing pictures or understanding speech. This process helps the computer determine whether it got an answer correct or incorrect and makes adjustments so it can do better next time around - just like when teachers mark tests and tell you what went wrong and how you can improve for future attempts. Backpropagation allows computers to learn on their own.