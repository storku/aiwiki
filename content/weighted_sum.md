---
title: "Weighted sum"
slug: "weighted_sum"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), a weighted sum is an [algorithmic](/index.php?title=Algorithm&action=edit&redlink=1) mathematical operation used to combine multiple [input](/index.php?title=Input&action=edit&redlink=1) values by assigning [weights](/wiki/weights) to each. It's fundamental in many machine learning algorithms such as [linear regression](/wiki/linear_regression), [neural networks](/wiki/neural_network) and [decision trees](/wiki/decision_tree); this transformation transforms input data into one single [output](/index.php?title=Output&action=edit&redlink=1) value which can then be used for prediction, [classification](/wiki/classification) or passed into a [activation function](/wiki/activation_function).

## Definition of Weighted Sum

A weighted sum is a mathematical operation that takes multiple input values and assigns them weights, then adds them together. In machine learning contexts, this operation could be described as follows:

Given an input vector x = [x1, x2,..., xn] and a weight vector w = [w1, w2,..., wn], the weighted sum of x with respect to w is defined as:

weighted sum = (x1 * w1) + (x2 * w2) +... + (xn * wn)

## Example

|  |
| --- |
| input values | input weights |
| 3 | 2.1 |
| 1.5 | 0.7 |
| -2 | 1.3 |

weighted sum = 4.75 = (3 * 2.1) + (1.5 * 0.7) + (-2 * 1.3)

## How Weighted Sum is Used in Machine Learning

Machine learning utilizes the weighted sum operation to transform input data into a single output value that can be used for prediction or classification. The weights assigned to each input value are learned during the [training](/wiki/training) phase of a machine learning algorithm and adjusted accordingly, helping reduce [error](/index.php?title=Error&action=edit&redlink=1) between predicted output and actual output.

The weighted sum operation is used in many machine learning algorithms, such as linear regression, neural networks, and decision trees. In linear regression, the weighted sum helps calculate a predicted output value that follows a linear function of input values. In neural networks, it serves as input to an activation function that produces each neuron's output. Finally, decision trees use weighted sums to estimate probability of certain outcomes given certain input values.

## Advantages of Weighted Sum

Weighted sum operations have several advantages in machine learning. One major benefit is that they enable input values to be combined in a flexible manner by assigning different weights to each input value. This enables the machine learning algorithm to learn complex relationships between input values and their outputs.

Another advantage of the weighted sum operation is its simplicity and efficiency in computation, even for large [datasets](/wiki/dataset). As such, it has become a go-to choice in many machine learning algorithms.

## Limitations of Weighted Sum

Though weighted sum operations offer many advantages, they also have some drawbacks in machine learning. One such drawback is its assumption that input values are independent from one another - which may not always be the case. This can lead to inaccurate predictions or classifications if there are strong correlations between input values.

Another drawback of machine learning algorithms is that weights are assigned to each input value during training, which can be time-consuming and computationally expensive for large datasets. This may lead to overfitting, where they learn too closely to the training data and do not generalize well when faced with new data.

## Explain Like I'm 5 (ELI5)

A weighted sum is like adding up a bunch of numbers, with some more important than others. It's like when playing a game and certain items give you more points than others; the game then sums all your points to determine your performance. In machine learning, a weighted sum is employed to take all information and turn it into one number. The computer decides which pieces of information are more significant and uses them together to make predictions or decisions.