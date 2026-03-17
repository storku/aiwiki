---
title: "Fully connected layer"
slug: "fully_connected_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Fully Connected Layer in Machine Learning

The fully connected layer, also known as a dense layer, is an essential component in various machine learning models, particularly deep learning architectures such as [artificial neural networks](/index.php?title=Artificial_neural_networks&action=edit&redlink=1) (ANNs) and [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs). This layer serves to connect each neuron in one layer to every neuron in the subsequent layer, enabling information to be transmitted and processed throughout the network.

### Structure and Function

In a fully connected layer, every neuron is connected to all the neurons in the preceding and succeeding layers. This architecture is characterized by a high degree of connectivity and is typically implemented as a matrix multiplication operation. The input data is transformed using linear combinations of learned weights and biases associated with each neuron in the layer. This operation is followed by the application of a non-linear [activation function](/wiki/activation_function) to the resulting values, introducing non-linearities into the model and allowing it to learn complex patterns and relationships in the data.

### Applications

Fully connected layers are utilized in a wide range of machine learning applications, including but not limited to:

- [Classification](/wiki/classification): Assigning input data to one of several predefined categories.

- [Regression](/wiki/regression): Predicting a continuous-valued output based on input data.

- [Dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1): Reducing the dimensionality of the input data while preserving its essential structure and features.

In deep learning models, such as ANNs and CNNs, fully connected layers are typically placed at the end of the network, following one or more [hidden layers](/index.php?title=Hidden_layers&action=edit&redlink=1) that extract features from the input data. These layers are responsible for integrating the extracted features and producing the final output or prediction.

## Explain Like I'm 5 (ELI5)

Imagine you're at a big party, and you want to play a game of telephone. A fully connected layer in machine learning is like everyone at the party being connected to every other person. In this game, you would tell a secret to everyone you're connected to, and they would do the same, passing the secret along. The idea is that by the time the secret reaches the last person, it has gone through many people who have helped refine it, much like how a fully connected layer in a computer program helps process information.