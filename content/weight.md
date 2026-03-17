---
title: "Weight"
slug: "weight"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) uses weight as a fundamental concept to represent the strength of connections between nodes in a [neural network](/wiki/neural_network). These connections form the basis for [models](/wiki/models)' capacity to make accurate [predictions](/wiki/prediction) and [classifications](/wiki/classification) by learning patterns from [data](/index.php?title=Data&action=edit&redlink=1). Understanding how weights are allocated and adjusted is essential in comprehending how a neural network functions.

Weight is a value in the model that multiplies by another value. [Training](/wiki/training) determines the ideal values of weights while [inference](/wiki/inference) uses the weights to make predictions.

## What is weight?

Machine learning assigns weights to connections between nodes in a neural network. Each node serves as either an [input](/index.php?title=Input&action=edit&redlink=1) value or [feature](/wiki/feature), and these connections help model relationships and patterns in data. Weights are assigned to these connections to measure the strength of this relationship between input features and model [outputs](/index.php?title=Output&action=edit&redlink=1).

When a neural network is initially constructed, its weights are usually assigned random values and the model's output will be inaccurate or unpredictable. As the model learns from input data, however, those weights are adjusted in order to improve [accuracy](/wiki/accuracy) of predictions. The goal of training a neural network is to find optimal values that minimize [errors](/index.php?title=Error&action=edit&redlink=1) between predicted output and actual output.

## How are weights used in a neural network?

Weights are utilized in neural networks to calculate the weighted sum of inputs at each node. This weighted sum then passes through an [activation function](/wiki/activation_function), which creates the output from that node. As this activation function is nonlinear, it adds flexibility to the model and allows it to recognize complex relationships and patterns found within data.

A weighted sum of inputs at a node is calculated by multiplying each input by its associated weight and then summing the results. The weight assigned to an input connection determines its contribution to the output of that node; if it's large, then that input has greater influence over output than if it were small, thus having less influence.

## How are weights updated during training?

When training a neural network, the weights are updated using [backpropagation](/wiki/backpropagation). This [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) calculates the [gradient](/wiki/gradient) of error with respect to the weights and uses it as input for updating the weights in a direction which minimizes that error.

Calculating the gradient of an error with respect to weights in a neural network requires applying the chain rule of calculus. This formula allows us to propagate the error backwards through each layer from output layer back towards input layer.

The gradient of error with respect to weights is used as input for an [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) such as [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD). This optimizes the weights in order to minimize error. The [learning rate](/wiki/learning_rate) is a [hyperparameter](/wiki/hyperparameter) which determines how big these updates will be.

## Explain Like I'm 5 (ELI5)

Have you ever tried lifting a heavy box or bag of toys? Did it feel heavier than lifting the lighter one? That's because heavy items typically contain more weight.

Machine learning also utilizes something called "weight." This is like a number that tells the computer how important each thing is when it's trying to learn something new.

Imagine you have a variety of toys to store away in your toy box. Some are larger than others, so you need to ensure they fit securely within the container. You could give larger toys more weight so they have greater significance than smaller ones, for instance.

Machine learning uses weight to help the computer determine which things are more crucial for it to learn from. It's like teaching the machine how to pay attention to what matters most so that it can learn better.