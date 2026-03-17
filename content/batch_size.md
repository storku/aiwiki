---
title: "Batch size"
slug: "batch_size"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) relies on a [hyperparameter](/wiki/hyperparameter) called batch size which indicates how many [examples](/wiki/examples) should be run before changing internal model parameters. It is the number of examples in a [batch](/wiki/batch). This number can vary based on both machine memory capacity and the needs of each model and dataset.

## Example

If the batch size is 50, then the model processes 50 examples per iteration. If the batch size is 200, then the model processes 200 examples per iteration.

## Batch Size and Gradient Descent

[Gradient descent](/wiki/gradient_descent) relies on the batch size as a key parameter that determines how many samples are used in each iteration of the algorithm. Gradient descent works by iteratively updating model [parameters](/index.php?title=Parameters&action=edit&redlink=1) in order to minimize [cost function](/index.php?title=Cost_function&action=edit&redlink=1) costs by computing gradients between them and batch size. Each iteration uses samples that make up this gradient calculation.

## Batch Size and Stochastic Gradient Descent

[Stochastic Gradient Descent](/index.php?title=Stochastic_Gradient_Descent&action=edit&redlink=1) (SGD) is a variant of gradient descent that uses only one example to update model parameters each iteration. Compared to batch gradient descent, which utilizes all examples for this task, SGD requires only one example for parameter updating - making it both computationally more efficient and faster but also prone to noise in gradient estimates.

## Explain Like I'm 5 (ELI5)

The batch size is a number that instructs the computer how many examples to consider before it changes its interpretation of data patterns.