---
title: "Earth mover's distance (EMD)"
slug: "earth_mover_s_distance_emd"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

The **Earth Mover's Distance** (EMD), also known as the **Wasserstein distance** or **Mallows distance**, is a measure of dissimilarity between two probability distributions in machine learning, statistics, and computer vision. It was originally introduced by Y. Rubner, C. Tomasi, and L.J. Guibas in their 1998 paper titled "A Metric for Distributions with Applications to Image Databases". EMD is especially useful when comparing distributions over continuous domains, such as histograms or point clouds, and has been applied in various fields including image retrieval, shape analysis, and natural language processing.

## Definition

The EMD is defined as the minimum amount of "work" required to transform one distribution into another, where "work" is quantified as the product of the mass being moved and the distance it is moved. Mathematically, the EMD between two probability distributions P and Q, defined over a common metric space, can be formulated as a transportation problem:

*EMD(P, Q) = min_{T ∈ Γ(P, Q)} ∑_{i, j} T_{i, j} d(x_i, y_j)*
where

- *T* represents a transportation plan, which is a joint distribution over the product space of the metric space with marginals *P* and *Q*,

- Γ(P, Q) is the set of all possible transportation plans between *P* and *Q*,

- *T_{i, j}* is the amount of mass transported from *x_i* to *y_j*,

- *d(x_i, y_j)* is the distance between points *x_i* and *y_j* in the underlying metric space.

### Properties

The EMD possesses several desirable properties that make it a useful distance metric:

- **Non-negativity**: EMD(P, Q) ≥ 0 for all distributions *P* and *Q*. The EMD is zero if and only if *P* and *Q* are identical.

- **Symmetry**: EMD(P, Q) = EMD(Q, P) for all distributions *P* and *Q*.

- **Triangle inequality**: EMD(P, Q) + EMD(Q, R) ≥ EMD(P, R) for all distributions *P*, *Q*, and *R*.

## Applications

The EMD has been employed in various machine learning tasks and domains, including:

- [Image retrieval](/index.php?title=Image_retrieval&action=edit&redlink=1): Comparing histograms of color, texture, or other features to find similar images in a database.

- [Shape analysis](/index.php?title=Shape_analysis&action=edit&redlink=1): Measuring the similarity between point clouds or other geometric representations of shapes.

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): Comparing word embeddings or topic distributions to measure the semantic similarity between documents.

- [Generative adversarial networks (GANs)](/index.php?title=Generative_adversarial_networks_(GANs)&action=edit&redlink=1): Quantifying the difference between the generated and target distributions, particularly in the context of [Wasserstein GANs](/index.php?title=Wasserstein_GANs&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

The Earth Mover's Distance (EMD) is a way to measure how different two groups of things are. Imagine you have two piles of sand, each pile having sand of different colors. You want to change the colors of the first pile to match the second pile. EMD helps you find out the minimum effort needed to move the sand around to make both piles look the same. The less effort needed, the more similar the piles are. In the world of computers, this idea is used to compare things like images, shapes, or even words, by measuring how much effort is needed to transform one into the other.