---
title: "Bayesian neural network"
slug: "bayesian_neural_network"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **Bayesian neural network** (BNN) is a probabilistic model in the field of [machine learning](/wiki/machine_learning) that combines the flexibility and learning capabilities of [artificial neural networks](/index.php?title=Artificial_neural_networks&action=edit&redlink=1) (ANNs) with the principles of [Bayesian inference](/index.php?title=Bayesian_inference&action=edit&redlink=1) to make predictions and perform decision-making under uncertainty. BNNs extend ANNs by incorporating probability distributions over the weights and biases, enabling the network to represent and quantify the uncertainty in its predictions. This approach provides a more robust and interpretable framework for addressing real-world problems where uncertainty and noisy data are prevalent.

## Bayesian Inference in Neural Networks

### Bayesian Inference

[Bayesian inference](/index.php?title=Bayesian_inference&action=edit&redlink=1) is a method of statistical inference that updates the probability of a hypothesis as more evidence or data becomes available. It relies on [Bayes' theorem](/index.php?title=Bayes%27_theorem&action=edit&redlink=1) to combine the prior probability (the initial belief) of a hypothesis with the likelihood of the observed data given that hypothesis. The result is the posterior probability, which represents the updated belief about the hypothesis given the new evidence.

### Incorporating Bayesian Inference

To apply Bayesian inference in neural networks, the BNN framework treats the network's weights and biases as random variables, assigning probability distributions to them instead of fixed values. This approach allows the network to represent uncertainty in both the model parameters and its predictions. During training, the objective is to learn the posterior distribution of the weights and biases given the observed data, which can be used to make predictions with quantified uncertainty.

## Training and Inference in BNNs

### Variational Inference

Exact Bayesian inference in BNNs is generally computationally intractable due to the high dimensionality and nonlinearity of the neural network models. To overcome this challenge, approximate inference techniques, such as [variational inference](/index.php?title=Variational_inference&action=edit&redlink=1) (VI), are employed. VI formulates the problem as an optimization task, finding an approximation to the true posterior distribution by minimizing the [Kullback-Leibler divergence](/index.php?title=Kullback-Leibler_divergence&action=edit&redlink=1) between the approximate and true posterior distributions.

### Monte Carlo Methods

Another popular approach for approximate inference in BNNs is the use of [Monte Carlo](/index.php?title=Monte_Carlo&action=edit&redlink=1) methods, such as [Markov chain Monte Carlo](/index.php?title=Markov_chain_Monte_Carlo&action=edit&redlink=1) (MCMC) and [Hamiltonian Monte Carlo](/index.php?title=Hamiltonian_Monte_Carlo&action=edit&redlink=1) (HMC). These methods rely on sampling techniques to approximate the posterior distribution, which can be computationally expensive but often result in more accurate approximations compared to VI.

## Advantages and Applications

BNNs provide several advantages over traditional ANNs, including:

- **Uncertainty quantification**: BNNs can quantify the uncertainty in their predictions, which is crucial for decision-making in uncertain environments and risk-sensitive applications.

- **Model complexity control**: The probabilistic nature of BNNs allows for automatic control of model complexity, reducing the risk of overfitting.

- **Transfer learning**: The ability to incorporate prior knowledge through the prior distributions makes BNNs suitable for [transfer learning](/wiki/transfer_learning) and multitask learning scenarios.

- **Robustness**: By capturing the uncertainty in the model parameters, BNNs can be more robust to adversarial attacks and noisy data.

Due to these advantages, BNNs have found applications in various domains, such as robotics, computer vision, natural language processing, and healthcare.

## Explain Like I'm 5 (ELI5)

Imagine you have a smart robot that can learn from its experiences. Usually, the robot learns by changing some values in its brain (called weights) to make better decisions. But sometimes, the robot isn't sure about the best decision to make.

A Bayesian neural network is like giving the robot a way to say, "I think this decision might be good, but I'm not sure. There's