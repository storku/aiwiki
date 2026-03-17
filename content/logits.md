---
title: "Logits"
slug: "logits"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Logits in Machine Learning

In the field of [machine learning](/wiki/machine_learning), logits refer to the unnormalized probability values that are output by a classification model before they are transformed into actual probabilities. Logits are often associated with neural networks, particularly in the context of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) and [artificial intelligence](/wiki/artificial_intelligence). These values serve as a crucial intermediate step in the process of predicting class probabilities and are passed through an activation function, such as the [softmax function](/index.php?title=Softmax_function&action=edit&redlink=1), to obtain normalized probabilities for each class.

### Logits and Classification Models

In classification tasks, machine learning models are trained to predict the probabilities of input data points belonging to different classes. Logits are the intermediate values produced by the model, which are then transformed into probabilities. For instance, in a [binary classification](/wiki/binary_classification) problem, a model might predict the probability of an input belonging to class 1, while the remaining probability corresponds to class 0. Logits, in this case, would be the raw values that are fed into the activation function to generate these probabilities.

#### Activation Functions

Activation functions play a key role in transforming logits into probabilities. Commonly used activation functions for this purpose include:

- **[Softmax function](/index.php?title=Softmax_function&action=edit&redlink=1):** The softmax function is widely used in multi-class classification problems, where the goal is to assign an input to one of several possible categories. It normalizes the logits into a probability distribution over the classes, ensuring that the probabilities add up to 1.

- **[Sigmoid function](/wiki/sigmoid_function):** The sigmoid function is primarily used for binary classification tasks. It takes a single logit value as input and outputs a probability between 0 and 1.

### Logits in Neural Networks

In the context of [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1), logits are the outputs of the final layer of neurons before the activation function. They are often computed as a linear combination of the outputs from the previous layer, with the addition of bias terms. During the training process, the model learns the optimal weights and biases to minimize the classification error, adjusting the logits to yield better predictions.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of fruits, and you want to teach a robot to guess which fruit it's looking at. The robot learns from a bunch of examples and starts making predictions. To make these predictions, the robot first comes up with some numbers, called logits, that represent how much it thinks the fruit looks like each type of fruit it knows. Then, the robot transforms these logits into probabilities, which are easier to understand because they add up to 100%. The activation function is like a magical calculator that helps the robot turn those logits into probabilities.