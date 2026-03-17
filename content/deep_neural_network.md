---
title: "Deep neural network"
slug: "deep_neural_network"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **deep neural network** (DNN) is a type of [artificial neural network](/index.php?title=Artificial_neural_network&action=edit&redlink=1) (ANN) used in [machine learning](/wiki/machine_learning) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) that consists of multiple interconnected layers of artificial neurons. DNNs have gained significant attention in recent years due to their ability to effectively model complex and large-scale data, leading to breakthroughs in various domains, such as [computer vision](/wiki/computer_vision), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1).

## Architecture

### Layers

A deep neural network is composed of an [input layer](/wiki/input_layer), multiple [hidden layers](/index.php?title=Hidden_layers&action=edit&redlink=1), and an [output layer](/wiki/output_layer). Each layer consists of a number of artificial neurons or nodes, also known as units, which are responsible for performing mathematical operations on incoming data. The term "deep" refers to the presence of multiple hidden layers, which enable the network to learn increasingly abstract and complex representations of the input data.

### Neurons

The fundamental building blocks of deep neural networks are the artificial neurons, also referred to as [perceptrons](/index.php?title=Perceptrons&action=edit&redlink=1) or nodes. These neurons are responsible for processing and transforming the input data using mathematical operations, such as linear transformations and [activation functions](/index.php?title=Activation_functions&action=edit&redlink=1).

### Weights and Biases

The connections between the neurons in a deep neural network are determined by weights and biases. These are adjustable parameters that the network learns during the training process. The weights and biases play a crucial role in determining the output of the network, as they essentially dictate how much influence one neuron has on another.

## Training Process

The training process of a deep neural network involves adjusting the weights and biases of the network through an iterative process known as [backpropagation](/wiki/backpropagation) and [gradient descent](/wiki/gradient_descent). During training, the network is presented with input data and corresponding target outputs. The network's goal is to minimize the difference between its predictions and the target outputs, also known as the [loss function](/wiki/loss_function). By adjusting the weights and biases through gradient descent, the network gradually improves its predictive performance.

## Applications

Deep neural networks have been employed in a wide range of applications, including:

- [Image classification](/index.php?title=Image_classification&action=edit&redlink=1) and [object detection](/index.php?title=Object_detection&action=edit&redlink=1) in computer vision

- [Speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1) and synthesis in audio processing

- [Natural language understanding](/wiki/natural_language_understanding) and generation in natural language processing

- [Reinforcement learning](/wiki/reinforcement_learning) for decision-making and control in robotics and autonomous systems

## Explain Like I'm 5 (ELI5)

A deep neural network is like a very smart machine that can learn from examples to make decisions or predictions. Imagine you have a large box with many layers of interconnected balls inside. These balls represent neurons, and each layer is responsible for learning something more and more complicated about the data you give it. 

When we want to teach the machine, we give it examples and tell it the right answer for each example. The machine will then try to find the best way to connect the balls to make the right decisions. It does this by adjusting the connections between the balls (weights and biases) so that it can make better predictions next time. 

Deep neural networks can be used in many areas, such as recognizing objects in pictures, understanding spoken words, or even playing games!