---
title: "Hidden layer"
slug: "hidden_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A [neural network](/wiki/neural_network) consists of multiple layers: the [input layer](/wiki/input_layer), where [data](/index.php?title=Data&action=edit&redlink=1) is first introduced, and the [output layer](/wiki/output_layer), where [predictions](/wiki/prediction) are made. Between these layers may exist one or more hidden layers which cannot be observed directly by humans and do not form part of either [input](/index.php?title=Input&action=edit&redlink=1) or [output](/index.php?title=Output&action=edit&redlink=1) [datasets](/wiki/datasets). Instead, hidden layers provide an intermediate representation of input that the neural network can use to make its predictions.

Each hidden layer consist of one or more [neuron](/wiki/neuron) also known as [node](/index.php?title=Node&action=edit&redlink=1). Each node in hidden layer uses the output from its predecessor as input and applies an [optimization function](/index.php?title=Optimization_function&action=edit&redlink=1) to it. Usually [non-linear](/index.php?title=Non-linear&action=edit&redlink=1), this helps the neural network capture complex patterns in data. The output from these nodes is then fed back into the next hidden layer, with this process continuing until an output layer produces a prediction.

The number of hidden layers and nodes per layer are key [hyperparameters](/wiki/hyperparameters) that can significantly influence the performance of a neural network. Too few hidden layers or nodes may prevent your network from learning complex patterns, while too many could lead to [overfitting](/wiki/overfitting)--wherein one performs well on [training data](/wiki/training_data) but poorly on new data.

## Why are Hidden Layers Important?

Hidden layers enable neural networks to learn and represent complex relationships between input data and output data ([label](/wiki/label)). In essence, hidden layers act as [feature](/wiki/feature) detectors, recognizing important aspects of input data that influence prediction [accuracy](/wiki/accuracy). Each hidden layer in a neural network can learn to represent [higher-level features](/index.php?title=Higher-level_feature&action=edit&redlink=1) of input data based on the [lower-level features](/index.php?title=Lower-level_feature&action=edit&redlink=1) learned in previous layers.

[Image recognition](/wiki/image_recognition) [tasks](/index.php?title=Tasks&action=edit&redlink=1) often begin with multiple hidden layers that learn to detect [edges](/index.php?title=Edges&action=edit&redlink=1) and [corners](/index.php?title=Corners&action=edit&redlink=1) in an image, while the second hidden layer learns more complex [shapes](/index.php?title=Shapes&action=edit&redlink=1) like circles or rectangles. Finally, the final output layer uses these features to make a prediction about what object is present in the picture.

Without hidden layers, a neural network would only be capable of capturing [linear](/wiki/linear) relationships between input and output data, not being able to recognize complex patterns present within it.

## Training Hidden Layers

Training a neural network with hidden layers involves adjusting the [weights](/wiki/weights) and [biases](/wiki/biases) of nodes within each layer to minimize the difference between predicted output and [actual output](/wiki/actual_output). This is typically accomplished using an [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) like [gradient descent](/wiki/gradient_descent), which alters weights and biases according to the steepest descent of the [loss function](/wiki/loss_function).

During training, a neural network learns to adjust the weights and biases of nodes within each hidden layer to represent increasingly complex patterns in data. As such, training a neural network with multiple hidden layers can be computationally expensive and necessitate large amounts of training data.

## Explain Like I'm 5 (ELI5)

A hidden layer is like a secret room inside an enormous house. From outside, we can only see its front door (input layer) and backdoor (output layer), but what lies within is invisible - that's where the hidden layer exists. Although not easily seen, its presence helps the house understand more about what lies outside, Just like how the hidden layer helps the neural network know more about the relationships between input data and its [label](/wiki/label).