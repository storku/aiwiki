---
title: "Perceptron"
slug: "perceptron"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **perceptron** is a type of linear classifier and an early form of artificial neural network, which was introduced by Frank Rosenblatt in 1957. Perceptrons are designed to model simple decision-making processes in machine learning, and are primarily used for binary classification tasks, where the goal is to distinguish between two possible outcomes. Although they have been largely superseded by more advanced algorithms, they remain an important concept in the field of machine learning due to their simplicity and historical significance.

## Structure

### Single-Layer Perceptron

The perceptron consists of a single layer of artificial neurons, also called nodes or units. Each neuron receives one or more input values, multiplies each input by an associated weight, and then sums the products. The sum is then passed through an activation function, typically a step function, which outputs the final classification decision. The weights are adjustable parameters that are learned by the perceptron during the training process.

### Multi-Layer Perceptron

A **[multi-layer perceptron](/index.php?title=Multi-layer_perceptron&action=edit&redlink=1)** (MLP) is an extension of the basic perceptron, consisting of multiple layers of interconnected neurons. An MLP typically includes an input layer, one or more hidden layers, and an output layer. The addition of hidden layers allows MLPs to model more complex, non-linear relationships between input features and output classifications, thus increasing their expressive power.

## Learning Algorithm

The learning process of a perceptron involves adjusting the weights of the connections between neurons so as to minimize the classification error on a given dataset. This is achieved through a process called **supervised learning**, where the perceptron is provided with labeled input-output pairs, and its weights are updated iteratively using a learning rule. The most common learning rule is the **perceptron learning rule**, which adjusts the weights based on the difference between the desired output and the perceptron's prediction for each training example.

## Limitations

Perceptrons have several limitations, which have motivated the development of more advanced machine learning techniques. One major limitation is the **XOR problem**, which demonstrates that single-layer perceptrons cannot solve problems that are not linearly separable. This issue can be addressed by using multi-layer perceptrons, but training them requires more advanced algorithms, such as [backpropagation](/wiki/backpropagation).

## Explain Like I'm 5 (ELI5)

Imagine you have a group of animals, and you want to decide if an animal is a bird or a fish. A perceptron works like a decision maker, looking at different features of the animals, such as if they have wings or fins. The perceptron learns from examples of birds and fish, and uses this knowledge to make a decision. It's like having a friend who has seen lots of birds and fish, and they can help you decide which category an animal belongs to based on its features.

However, a perceptron can only make simple decisions, like choosing between birds and fish. If the problem is more complicated, like figuring out if an animal is a mammal, a reptile, or a bird, a perceptron might not be able to do it. That's when we use more advanced methods, like a multi-layer perceptron, which is like having a group of friends who are all experts in different areas, working together to make a decision.