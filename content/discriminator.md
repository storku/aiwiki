---
title: "Discriminator"
slug: "discriminator"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **discriminator** in the context of machine learning refers to a model or a component of a model designed to distinguish between different types of data. Discriminators are most commonly used in [Generative Adversarial Networks](/index.php?title=Generative_Adversarial_Networks&action=edit&redlink=1) (GANs), where they play a crucial role in the training process by evaluating the authenticity of generated data samples. This article provides an overview of discriminators, their applications, and their role in GANs.

## Role in Generative Adversarial Networks

### GAN Framework

A GAN is a type of deep learning model that consists of two primary components: a [generator](/wiki/generator) and a discriminator. The generator's purpose is to create synthetic data samples resembling real data, while the discriminator's role is to distinguish between real and generated data. During the training process, the generator and the discriminator engage in a two-player minimax game, where the generator tries to deceive the discriminator, and the discriminator tries to correctly identify the real and generated data samples.

### Training Process

The training process for GANs involves iteratively updating the weights of the generator and the discriminator. In each iteration, the generator produces a batch of synthetic data samples, and the discriminator evaluates the authenticity of both real and generated data samples. The discriminator's output is then used to compute the loss functions for both the generator and the discriminator.

For the generator, the goal is to minimize the difference between the discriminator's output for generated samples and the target output (i.e., the output indicating that the generated samples are real). On the other hand, the discriminator aims to maximize its accuracy in classifying the real and generated data samples correctly.

As training progresses, the generator becomes more capable of generating realistic data samples, while the discriminator becomes better at identifying subtle differences between real and generated data. The training process typically converges when the generator's performance reaches a satisfactory level, or when a predefined stopping criterion is met.

## Applications

Discriminators have various applications beyond GANs, including:

- [Image recognition](/wiki/image_recognition): Discriminators can be used to identify objects in images by differentiating between different classes of objects.

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): In NLP, discriminators can be employed to distinguish between different types of text, such as spam and non-spam emails or different writing styles.

- [Anomaly detection](/wiki/anomaly_detection): In this context, discriminators can be trained to identify deviations from normal patterns in data, helping detect fraud, network intrusions, or equipment malfunctions.

## Explain Like I'm 5 (ELI5)

Imagine that you have a friend who is really good at drawing pictures, and they want to become even better. To help them improve, you play a game where your friend draws pictures, and you try to guess if the picture is a real photo or one of their drawings. Your friend tries to make their drawings look as real as possible, while you try to get better at telling the difference between real photos and their drawings.

In this game, you are like the discriminator in a machine learning model called a GAN. Your job is to tell if something is real or fake, and your friend is like the generator, trying to create fake things that look real. As you both get better at the game, your friend's drawings become more realistic, and you become better at telling the difference between real photos and their drawings.