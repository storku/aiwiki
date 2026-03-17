---
title: "Wasserstein loss"
slug: "wasserstein_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Wasserstein Loss in Machine Learning

Wasserstein loss, also known as the Earth Mover's Distance (EMD), is a metric used in the field of machine learning, particularly in the training of Generative Adversarial Networks (GANs). Introduced by [Martin Arjovsky](/index.php?title=Martin_Arjovsky&action=edit&redlink=1), [Soumith Chintala](/index.php?title=Soumith_Chintala&action=edit&redlink=1), and [Léon Bottou](/index.php?title=L%C3%A9on_Bottou&action=edit&redlink=1) in their 2017 paper "Wasserstein GAN," this loss function has become a popular choice for training GANs due to its stability and theoretical properties.

### Background and Definition

GANs consist of two neural networks, the generator and the discriminator, which are trained simultaneously in a game-theoretic framework. The generator produces samples aiming to mimic the real data distribution, while the discriminator attempts to differentiate between the real data and the generated samples. The standard GAN training procedure involves minimizing a specific loss function, known as the Jensen-Shannon (JS) divergence. However, this loss function can lead to several issues, such as mode collapse and vanishing gradients.

To address these problems, Wasserstein loss was introduced as an alternative to the JS divergence. Wasserstein loss is based on the optimal transport theory, which measures the minimal cost of transporting mass to transform one probability distribution into another. Mathematically, the Wasserstein distance between two probability distributions P and Q is defined as:

W(P, Q) = inf_{γ ∈ Γ(P, Q)} ∫∫ ||x - y|| dγ(x, y)

Here, Γ(P, Q) represents the set of all joint distributions with marginals P and Q, and ||x - y|| denotes the Euclidean distance between points x and y.

### Advantages of Wasserstein Loss

Wasserstein loss offers several advantages over the traditional JS divergence:

- **Stability:** Wasserstein loss provides a more stable training process as it is less sensitive to the choice of architecture and hyperparameters.

- **Gradient Behavior:** Unlike the JS divergence, Wasserstein loss offers meaningful gradients even when the generator and discriminator distributions do not overlap, reducing the likelihood of vanishing gradients.

- **Convergence:** The convergence properties of the Wasserstein distance make it a more reliable metric for evaluating the convergence of GANs.

- **Mode Collapse Prevention:** Wasserstein loss reduces the likelihood of mode collapse, a common issue in GAN training where the generator produces a limited variety of samples.

### Implementation in GANs

In practice, computing the exact Wasserstein distance is computationally expensive. Therefore, a modified version of the Wasserstein loss, known as the Wasserstein-1 (W1) distance or the Kantorovich-Rubinstein duality, is employed in GAN training. It can be expressed as:

W1(P, Q) = sup_{||f||_L ≤ 1} E_{x∼P}[f(x)] - E_{x∼Q}[f(x)]

In this formulation, f represents a 1-Lipschitz function, and the supremum is taken over all such functions. To enforce the Lipschitz constraint, several techniques, such as weight clipping and gradient penalty, are used during GAN training.

## Explain Like I'm 5 (ELI5)

Imagine you have two piles of sand, one representing real data and the other representing fake data made by a machine. You want to measure how different the two piles are by moving the sand from the fake pile to match the shape of the real pile. The Wasserstein loss is like a score that tells you how much effort you need to put into moving the sand around to make the fake pile look like the real one. In machine learning, this score helps train machines to create better and