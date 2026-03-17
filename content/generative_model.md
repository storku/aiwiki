---
title: "Generative model"
slug: "generative_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A generative model is a type of [machine learning](/wiki/machine_learning) algorithm that aims to learn the underlying probability distribution of the training data in order to generate new data samples that resemble the original dataset. These models have been widely adopted in various applications such as natural language processing, image synthesis, and anomaly detection.

## Types of Generative Models

Generative models can be broadly classified into two categories: probabilistic and non-probabilistic models. Some popular generative models include:

### Probabilistic Models

- **Gaussian Mixture Models (GMM)**: A [Gaussian Mixture Model](/index.php?title=Gaussian_Mixture_Model&action=edit&redlink=1) is a probabilistic model that represents a mixture of multiple Gaussian distributions. The model estimates the parameters of these distributions to best fit the data.

- **Hidden Markov Models (HMM)**: A [Hidden Markov Model](/index.php?title=Hidden_Markov_Model&action=edit&redlink=1) is a statistical model that represents a system with an underlying hidden Markov process. It is particularly useful for modeling sequences of data, such as time series or speech recognition tasks.

- **Naive Bayes Classifier**: The [Naive Bayes](/index.php?title=Naive_Bayes&action=edit&redlink=1) classifier is a simple probabilistic classifier based on applying Bayes' theorem with strong independence assumptions between the features.

### Non-Probabilistic Models

- **Generative Adversarial Networks (GAN)**: [Generative Adversarial Networks](/index.php?title=Generative_Adversarial_Networks&action=edit&redlink=1) are a class of neural networks that consist of two separate models, a generator and a discriminator, that compete against each other. The generator creates synthetic data samples, while the discriminator evaluates their authenticity.

- **Variational Autoencoders (VAE)**: A [Variational Autoencoder](/index.php?title=Variational_Autoencoder&action=edit&redlink=1) is a type of autoencoder with an added constraint on the latent representation, which forces the model to learn a more generalizable and structured latent space.

## Training and Evaluation

Training generative models typically involves optimizing an objective function that measures how well the model captures the underlying distribution of the training data. Some common optimization methods include maximum likelihood estimation, expectation-maximization, and gradient-based techniques.

To evaluate the quality of the generated samples, various quantitative and qualitative metrics can be used. Quantitative metrics, such as [Inception Score](/index.php?title=Inception_Score&action=edit&redlink=1) and [Fréchet Inception Distance](/index.php?title=Fr%C3%A9chet_Inception_Distance&action=edit&redlink=1), compare the generated samples to the real data in terms of statistics or features. Qualitative metrics rely on human judgment to assess the realism and diversity of the generated samples.

## Applications

Generative models have been successfully applied to a wide range of tasks, including:

- **Image synthesis**: Generating realistic images, such as faces or scenes, based on textual descriptions or noise inputs.

- **Text generation**: Producing coherent and contextually relevant text given an initial prompt or set of constraints.

- **Data augmentation**: Creating new training samples to improve the performance of supervised learning models.

- **Anomaly detection**: Identifying unusual patterns or events by comparing them to the learned distribution of normal data.

- **Drug discovery**: Generating novel molecular structures with desirable properties for further exploration and testing.

## Explain Like I'm 5 (ELI5)

Imagine you're learning to draw animals by looking at many pictures of them. After some time, you can draw new animals that you haven't seen before, but still look like real animals. This is similar to how a generative model works in machine learning. It learns from lots of examples and then can create new examples that look like the ones it has seen before. People use these models to create things like new pictures, stories, or even help find new medicines.