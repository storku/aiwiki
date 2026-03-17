---
title: "Batch normalization"
slug: "batch_normalization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Batch normalization (BN) is a widely-used technique in [machine learning](/wiki/machine_learning) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) that helps to stabilize and accelerate the training of deep neural networks. It was first introduced by Sergey Ioffe and Christian Szegedy in their 2015 paper titled "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift" [1](/index.php?title=1&action=edit&redlink=1). The primary goal of batch normalization is to address the issue of internal covariate shift, which occurs when the distribution of input features to a given layer changes during training, making it difficult for the model to converge.

## Batch Normalization Algorithm

Batch normalization is applied to the outputs of a layer before the activation function is applied. The algorithm normalizes the outputs of each layer by scaling and shifting the feature maps, ensuring that they have a mean of zero and a standard deviation of one. The process can be summarized in the following steps:

1. Calculate the mean and variance of the outputs for each feature map across the mini-batch.
2. Normalize the outputs by subtracting the mean and dividing by the standard deviation.
3. Apply a learnable scaling factor (gamma) and a learnable shift (beta) to the normalized outputs.

The scaling factor (gamma) and shift (beta) are learnable parameters that are updated during training, allowing the model to learn the optimal values for each feature map.

### Advantages of Batch Normalization

Batch normalization offers several advantages in the training of deep neural networks:

- **Faster convergence:** BN helps to stabilize the training process, allowing for the use of higher learning rates and leading to faster convergence.

- **Regularization effect:** BN adds a small amount of noise to the training process, which can have a regularizing effect and help to prevent overfitting.

- **Reduced dependence on initialization:** BN reduces the sensitivity of the model to the initial values of the weights, making it less likely to get stuck in poor local minima.

## Limitations and Alternatives

While batch normalization has been shown to be effective in many cases, it has some limitations:

- **Mini-batch size:** BN depends on the size of the mini-batch for calculating the mean and variance, which may lead to inaccurate estimates for small mini-batches or in cases where the batch size must be changed during training.

- **Sequence data and recurrent networks:** BN may not be well-suited for sequence data or recurrent neural networks (RNNs), where the length of the input sequences can vary.

Several alternatives to batch normalization have been proposed, such as [Layer Normalization](/index.php?title=Layer_Normalization&action=edit&redlink=1), Instance Normalization, and Group Normalization. These alternatives can address some of the limitations of BN and may be more suitable for specific types of data or network architectures.

## Explain Like I'm 5 (ELI5)

Imagine you are in a classroom with a teacher who likes to give surprise quizzes. The quizzes can be on any topic, and the teacher changes the topic frequently. This makes it difficult for you to study and get better at the quizzes because you never know what to expect.

In machine learning, a similar problem can occur when training deep neural networks. The "quizzes" are the different layers of the network, and the "topics" are the inputs to each layer. When the inputs keep changing during training, it's hard for the network to learn.

Batch normalization is like having a helpful friend who tells you what the quiz topic will be before it starts. This friend helps you adjust your thinking so you can do better on the quiz. In machine learning, batch normalization helps to adjust the inputs to each layer, making it easier for the network to learn and get better at its job.