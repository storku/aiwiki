---
title: "Input layer"
slug: "input_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Input layer is the first [layer](/wiki/layer) of a [neural network](/wiki/neural_network). It contains the [feature vector](/wiki/feature_vector) of the [input data](/index.php?title=Input_data&action=edit&redlink=1) ([example](/wiki/example)).

The input layer is typically the initial stage in a neural network and consists of [neurons](/wiki/neuron) that process input data. Here, the number of neurons is equal to the number of [features](/wiki/features) present in the input data - for instance, if an image has 28 height of pixels and 28 width of pixels, respectively, with three color channels (red, green and blue), then we would expect there to be 28 * 28 * 3 = 2352 neurons in this layer.

Each neuron in the input layer is connected to all neurons in the next [layer](/wiki/layer), typically a [hidden layer](/wiki/hidden_layer), allowing the neuron to pass on input data for processing. These connections between neurons are known as [weights](/wiki/weights) and represent the strength of the connection. Weights are updated during [training](/wiki/training) in order to minimize [errors](/index.php?title=Error&action=edit&redlink=1) between actual [output](/index.php?title=Output&action=edit&redlink=1) and desired output ([label](/wiki/label)).

## Activation Function in the Input Layer

In the input layer, [activation functions](/wiki/activation_function) are typically linear or nonexistent and pass on input data without modification. This is because most input data is raw and unprocessed; it's up to subsequent layers to extract meaningful information from it.

## Role of the Input Layer in Machine Learning

The input layer is the starting point of a [machine learning model](/wiki/machine_learning_model), and it plays an integral role in its operation. It receives raw input data and passes it on to the next layer for further processing, ultimately producing meaningful information.

In a sense, the input layer acts as a link between raw input data and the final output produced by the model. Its task is to give the model all of the information it needs in order to make accurate predictions while simultaneously aiding its capacity for learning and improvement over time.

## Explain Like I'm 5 (ELI5)

Okay! Let's say you want your computer to learn to recognize different shapes. For this task, show the machine a variety of shapes and explain what each one is called.

The initial step is to give shapes to the computer. Think of an input layer as a big basket where shapes can be placed. From there, the computer can analyze these shapes and begin learning from them.

Just as you need to put your toys in a basket before playing with them, the computer needs to have the shapes in the input layer before it can begin learning about them.