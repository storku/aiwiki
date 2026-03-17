---
title: "Stochastic gradient descent (SGD)"
slug: "stochastic_gradient_descent_sgd"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Stochastic gradient descent** (**SGD**) is an optimization algorithm commonly used in [machine learning](/wiki/machine_learning) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) to minimize a given objective function. It is a variant of the gradient descent algorithm that performs updates on a randomly selected subset of the data, rather than the entire dataset, at each iteration. This approach offers several advantages, including faster convergence and the ability to escape local minima in non-convex optimization problems.

## Background

### Gradient Descent

Gradient descent is an iterative optimization algorithm used to minimize a differentiable objective function. The idea behind gradient descent is to update the model parameters iteratively by moving them in the direction of the negative gradient of the objective function with respect to the parameters. This movement is governed by a learning rate, which determines the size of the steps taken towards the minimum.

### Stochasticity in Optimization

The term "stochastic" refers to the presence of randomness in the optimization process. In the context of SGD, this randomness comes from the random selection of data points used in each iteration of the algorithm. This stochastic nature helps the algorithm explore the optimization landscape more effectively, allowing it to find better solutions and escape local minima in complex, non-convex optimization problems.

## Algorithm

The main steps of the stochastic gradient descent algorithm are as follows:

1. Initialize the model parameters randomly or with a predefined starting point.

2. Randomly select a mini-batch of data points from the dataset.

3. Compute the gradient of the objective function with respect to the parameters, using the selected mini-batch.

4. Update the parameters by moving them in the direction of the negative gradient, scaled by the learning rate.

5. Repeat steps 2-4 until a stopping criterion is met, such as a maximum number of iterations, a desired level of convergence, or a predetermined time limit.

## Advantages and Disadvantages

### Advantages

- Faster convergence: Since SGD uses a smaller subset of the data at each iteration, it can make more frequent updates to the model parameters, resulting in faster convergence compared to batch gradient descent.

- Better generalization: The inherent noise introduced by the stochastic nature of the algorithm can help prevent overfitting, leading to better generalization performance on unseen data.

- Scalability: SGD is particularly useful for large-scale machine learning problems, as it can operate on subsets of the data, reducing the memory requirements and computational cost.

### Disadvantages

- Noisy updates: The stochastic nature of the algorithm can lead to noisy updates, which might slow down convergence in some cases.

- Tuning required: The learning rate and other hyperparameters need to be carefully tuned for optimal performance, which can be a time-consuming process.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to find the lowest point in a hilly landscape at night, using a flashlight. Instead of looking at the entire landscape at once (like in regular gradient descent), you look at small parts of it at a time (this is the "stochastic" part). By doing this, you can find the lowest point more quickly and with less effort. This is similar to how stochastic gradient descent works in machine learning. It looks at smaller parts of the data to update the model parameters, making the process faster and more efficient.