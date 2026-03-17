---
title: "Bias"
slug: "bias"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms) and [Bias (ethics/fairness)](/wiki/bias_ethics_fairness)*
In a [neural network](/wiki/neural_network), bias is an additional [input](/index.php?title=Input&action=edit&redlink=1) value that is added to the weighted sum of the input values in each neuron, before the [activation function](/wiki/activation_function) is applied. It provides the network with the ability to adjust the output of the neuron independent of the input.

So for a machine learning model, bias is a parameter symbolized by either: *b* or *w0*

More formally, in a neural network, each neuron receives inputs from the previous layer, which are multiplied by a weight and summed up. This weighted sum is then passed through an activation function to produce the output of the neuron. The bias term provides an additional constant input to the neuron that can shift the output of the activation function in a certain direction.

The bias term is learned during the training process, along with the [weights](/wiki/weight). The bias value is adjusted to minimize the error between the predicted output and the actual output. The presence of the bias term allows the neural network to model more complex relationships between the input and output.