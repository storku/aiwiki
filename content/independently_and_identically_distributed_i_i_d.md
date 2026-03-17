---
title: "Independently and identically distributed (i.i.d.)"
slug: "independently_and_identically_distributed_i_i_d"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) often make the assumption of independently and identically distributed (i.i.d.) [data](/index.php?title=Data&action=edit&redlink=1), which implies each data point is drawn independently from a given probability distribution. This assumption is essential for many machine learning algorithms as it permits powerful mathematical operations to make predictions based on observed patterns in the data.

## Definition of i.i.d. data

Formally speaking, a group of data points is considered independent if each is independently generated from the same probability distribution. This implies that the occurrence of one data point does not influence another and the probability of observing any particular one remains unchanged for all in the [dataset](/wiki/dataset).

In practice, it is often assumed that i.i.d. data comes randomly from a given distribution. For instance, in the case of supervised learning, where models are trained to predict an output variable based on input features, i.i.d. data would mean that the input features and target variable are independently and identically distributed.

## Why is i.i.d. important in machine learning?

The i.i.d. assumption is essential in machine learning for several reasons. 

1. It allows the use of powerful mathematical tools like the law of large numbers and central limit theorem that allow the estimation of population parameters based on a sample of data. These calculations allow one to make predictions about future data points using only what information is present in [training data](/wiki/training_data).

2. Many machine learning algorithms such as [linear regression](/wiki/linear_regression) and [neural networks](/wiki/neural_network) work on the principle of finding a function that best fits data. The i.i.d. assumption simplifies this task since it implies all data points are uniformly distributed and that one function can be used to fit all observations equally well.

3. the i.i.d. assumption is crucial when evaluating machine learning models. Without it, it may be difficult to accurately evaluate how well a model performs on new data due to differences in distribution between training and [test data sets](/wiki/test_data_set).

## Examples of i.i.d. data

Data that is independent and randomly collected, such as height measurements for people, can be considered i.i.d. Another example would be images of handwritten digits where each image was independently and randomly created by a different individual writing the digit.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag filled with many candies. Each candy is unique in color, shape and taste; when you reach into the bag and grab one candy it's like picking an object out of machine learning algorithms.

When we say that candies are "independently and identically distributed," it implies two things:

1. Independence: Each time you reach into a bag and grab a candy, it has no bearing on what remains inside or what candy will be taken next time. It's like each piece of data in machine learning is unrelated to any other piece of data.

2. Identically distributed: This suggests that all candies in a bag are similar to one another. For instance, if the bag contains mostly red candies, then you can be certain the next candy you grab will also be red. In machine learning terms, this implies each piece of data is similar to all others.

Data that is "independently and identically distributed" refers to pieces of information that are unconnected to one another and identical in type.