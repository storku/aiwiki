---
title: "Multi-class logistic regression"
slug: "multi-class_logistic_regression"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Multi-class logistic regression**, also referred to as **softmax regression** or **multinomial logistic regression**, is a supervised machine learning algorithm used for predicting the categorical label of an input instance when there are more than two possible classes. It is an extension of the [binary logistic regression](/index.php?title=Binary_logistic_regression&action=edit&redlink=1) model, which can only handle two-class classification problems. Multi-class logistic regression can be applied to a wide range of applications such as image classification, natural language processing, and healthcare diagnostics.

## Mathematical Formulation

### Hypothesis Function

The multi-class logistic regression algorithm computes the probability of an input instance belonging to each of the available classes using the **softmax function**. Given an input feature vector *x*, the hypothesis function *h* is defined as follows:

*h(x) = softmax(Wx + b)*
where *W* is the weight matrix, *b* is the bias vector, and *x* is the input feature vector. The softmax function is defined as:

*softmax(z_i) = exp(z_i) / ∑ exp(z_j)*
for all possible classes *j*, where *z_i* is the input of the *i*-th class. This function normalizes the input values, ensuring that the sum of the probabilities across all classes equals 1.

### Cost Function

The goal of multi-class logistic regression is to minimize the difference between the predicted class probabilities and the true class labels. This is achieved by minimizing the **cross-entropy loss** or **log loss** cost function. Given a set of training examples and their true class labels, the cost function *J* is defined as:

*J(W, b) = - (1/m) ∑ [y log(h(x)) + (1 - y) log(1 - h(x))]'*
where *m* is the number of training instances, and *y* is the true class label in one-hot encoded format. Minimizing the cost function helps the model learn the optimal weights and biases for accurate classification.

## Optimization Techniques

Various optimization techniques can be employed to minimize the cost function and train the multi-class logistic regression model. Some of the popular optimization algorithms include:

- **Gradient Descent**: This iterative algorithm computes the gradient of the cost function concerning the weights and biases and updates the parameters in the direction of the steepest descent.

- **Stochastic Gradient Descent (SGD)**: A variant of gradient descent that uses a single randomly selected training example in each iteration for faster convergence.

- **Mini-batch Gradient Descent**: Combines the advantages of gradient descent and SGD by using a small batch of training examples in each iteration.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of different fruits, and you want to teach a robot to recognize the type of fruit just by looking at its characteristics (like size, color, and shape). Multi-class logistic regression is a way to teach the robot to do this. 

The robot looks at all the fruits and tries to find a pattern that helps it decide what kind of fruit it is looking at. It uses a "softmax function" to calculate the chances that the fruit belongs to a specific category (like apples, oranges, or bananas). This function helps the robot make sure that all the chances add up to 100%.

The robot keeps adjusting its guesses based on the information it has seen so far, with the goal of reducing the difference between its guesses and the actual fruit types. It uses different methods to make these adjustments, like gradient descent or stochastic gradient descent, which help it learn faster and make better predictions over time.

In the end, the robot has learned how to recognize different types of fruits using multi-class