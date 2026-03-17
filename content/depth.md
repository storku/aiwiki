---
title: "Depth"
slug: "depth"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Depth is an essential concept in [machine learning](/wiki/machine_learning), particularly [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1), where it refers to the number of [layers](/wiki/layer) within a [neural network](/wiki/neural_network). Neural networks consist of interconnected artificial [neurons](/wiki/neuron) that process and transform data. The depth of a network is determined by its number of layers and has an immense effect on its performance; more layers equals greater complexity for your model.

## How to Calculate Depth of a Neural Network

Depth = number of [hidden layers](/index.php?title=Hidden_layers&action=edit&redlink=1) + number of [output layers](/wiki/output_layer) (usually 1) + number of any [embedding layers](/wiki/embedding_layer)

A neural network with 8 hidden layers and 1 output layer would have the depth of 9

- Note that [input layer](/wiki/input_layer) does not affect depth

## What is depth in machine learning?

Machine learning experts refer to depth as the number of layers in a neural network. Neural networks are computational [models](/wiki/models) inspired by the structure and function of the human brain, consisting of interconnected layers of artificial neurons that process [input data](/index.php?title=Input_data&action=edit&redlink=1) and transform it. Each neuron receives input data, performs some computation, then outputs its result onto the next layer.

The depth of a neural network is determined by its number of layers. A shallow network with only one hidden layer is known as a shallow one, while one or more hidden layers constitutes a deep network. Note that input layer is excluded when counting layers; so for example, an input-output neural network with one input layer, one output layer, and two hidden ones would be classified as deep in depth.

## Why is depth important in machine learning?

The depth of a neural network is an important factor that affects its performance. Deeper networks are capable of learning more complex [features](/wiki/features) and representations of data, leading to better results on complex tasks such as [image recognition](/wiki/image_recognition) or [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1). Unfortunately, deeper networks require more computational resources and suffer from [vanishing gradients](/index.php?title=Vanishing_gradient&action=edit&redlink=1) which make training them more challenging.

Vanishing gradients refer to the phenomenon whereby the [gradient](/wiki/gradient) becomes extremely small as it propagates back through a network during [training](/wiki/training). This issue makes learning difficult for the network and may lead to poor performance. To combat this issue, various techniques have been developed such as different [activation functions](/wiki/activation_function), [normalization](/wiki/normalization) techniques and skip connections.

## What are some examples of deep neural networks?

Deep neural networks are widely used in various applications. [Convolutional neural network](/wiki/convolutional_neural_network) (CNN) is one of the most well-known, often employed for image recognition tasks. CNNs consist of multiple [convolution layers](/index.php?title=Convolution_layer&action=edit&redlink=1) which learn and extract features from an input image before passing those details along to fully connected layers which perform [classification](/wiki/classification) or [regression](/wiki/regression) on it.

Another example of a deep neural network is the [recurrent neural network](/wiki/recurrent_neural_network) (RNN), which is commonly employed for natural language processing tasks. RNNs consist of multiple layers that process input data such as words in sentences before producing outputs like sentences or translations of that input text.

## Explain Like I'm 5 (ELI5)

Depth in machine learning refers to the number of layers a computer program can learn through. Much like we learn by taking small steps, computers learn by going through many layers until they become adept at things like recognizing pictures or understanding words. The more layers a program has, the greater its capacity for mastery; however, having too many can make learning difficult so people have come up with ways to facilitate faster progress.