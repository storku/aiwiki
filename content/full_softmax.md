---
title: "Full softmax"
slug: "full_softmax"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, the softmax function is an essential component for the classification of multiple categories. The full softmax, also known as the standard softmax, is a method used to convert a vector of real numbers into a probability distribution. The output of the full softmax function is a probability distribution that can be interpreted as the likelihood of an input belonging to each of the considered classes. This article will explore the full softmax function in depth, discuss its advantages and disadvantages, and provide an easy-to-understand explanation for beginners.

## Softmax Function

The softmax function, denoted as *σ*, is a generalization of the logistic function that maps an input vector *z* to a probability distribution over *K* classes. Given a vector of real numbers *z* = [z_1, z_2, ..., z_K], the softmax function computes the probability of each element *z_i* in the vector as follows:

σ(z_i) = exp(z_i) / Σ exp(z_j)
where *exp* denotes the exponential function, and the summation runs over all *K* elements in the vector. The softmax function is designed to ensure that the sum of the probabilities is equal to 1.

### Properties

The softmax function has several properties that make it suitable for use in machine learning algorithms:

1. **Invariant to translation**: If a constant is added to each element of the input vector, the softmax function's output remains unchanged. This property is beneficial in ensuring that the results are robust to translation in the input data.

2. **Differentiable**: The softmax function is smooth and differentiable, making it compatible with gradient-based optimization algorithms such as gradient descent.

3. **Monotonic**: For each component of the input vector, the softmax function is monotonically increasing. This property ensures that the ranking of the input elements is preserved in the output probability distribution.

## Full Softmax vs. Approximate Methods

While the full softmax function is computationally intensive, especially for large-scale problems with a high number of classes, several approximate methods have been developed to mitigate this issue. The most common ones include [hierarchical softmax](/index.php?title=Hierarchical_softmax&action=edit&redlink=1), [negative sampling](/index.php?title=Negative_sampling&action=edit&redlink=1), and [NCE (Noise Contrastive Estimation)](/index.php?title=NCE_(Noise_Contrastive_Estimation)&action=edit&redlink=1).

### Advantages

The full softmax function offers the following advantages:

1. **Exact probabilities**: Unlike approximate methods, the full softmax function computes the exact probability distribution, ensuring accurate results.

2. **Easier to understand**: The full softmax is conceptually simpler than its approximate counterparts, making it easier to understand and implement.

### Disadvantages

Despite its advantages, the full softmax function has some disadvantages, mainly related to its computational complexity:

1. **Scalability**: For large-scale problems with many classes, the full softmax function can be computationally expensive, leading to slower training times and increased memory requirements.

2. **Inefficiency**: In many cases, only the highest probability or a few top probabilities are required for decision-making, making the full softmax function inefficient in practice.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of different types of candies, and you want to know which candy you're most likely to pick out without looking. The full softmax function is like a magical scale that weighs all the candies and tells you the probability of picking each candy type. It helps you understand how likely it is to pick one candy over another. However, if you have a huge bag with hundreds or thousands of candy types, the magical scale can take a long time to weigh all of them. That's why some people come up with faster ways to weigh the candies, but these faster ways might not be as accurate as the full softmax (magical scale).