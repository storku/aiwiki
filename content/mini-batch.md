---
title: "Mini-batch"
slug: "mini-batch"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), mini-batch is when you randomly divide a [dataset](/wiki/dataset) into smaller [batches](/wiki/batch) during [training](/wiki/training). The [model](/wiki/model) only trains on these mini-batches during each [iteration](/wiki/iteration) instead of the entire dataset. The number of [examples](/wiki/example) ([data points](/index.php?title=Data_points&action=edit&redlink=1)) in a mini-batch is called the [batch size](/wiki/batch_size). This division of the entire dataset into smaller batches allows for faster training as well as faster [convergence](/wiki/convergence). Calculating the [loss](/wiki/loss) on the mini-batch of examples is also far more efficient than the entire dataset.

## Theoretical Background

Traditional machine learning relies on [batch](/wiki/batch) [gradient descent](/wiki/gradient_descent) to train the model on all data in one iteration. Unfortunately, when the dataset grows large, this approach becomes computationally expensive and may take a long time to [converge](/index.php?title=Converge&action=edit&redlink=1) to an optimal solution.

Mini-batch gradient descent solves this issue by breaking up the entire dataset into smaller groups or batches. The model is then trained on these smaller datasets instead of the entire dataset, allowing it to learn from a portion of data instead of all of it, which makes the training process faster.

Additionally, mini-batch gradient descent has been demonstrated to offer faster convergence compared to batch gradient descent. This is because mini-batch updates the model [parameters](/index.php?title=Parameters&action=edit&redlink=1) after each batch.

## Mini-batch Steps

The mini-batch algorithm functions as follows:

1. Randomly divide the entire dataset into smaller batches

2. Initialize model parameters

3. Loop over the batches:
Compute the [gradient](/wiki/gradient) of the [loss function](/wiki/loss_function) with respect to the model parameters using the current batch of data

4. Update the model parameters using the gradient information

Repeat the process until the model converges or a maximum number of iterations is reached
## Batch Size Selection

The size of a mini-batch is an important [hyperparameter](/wiki/hyperparameter) that can influence the training process. A smaller batch size may lead to faster convergence but also higher [variance](/index.php?title=Variance&action=edit&redlink=1) in model parameters; conversely, larger batches offer slower convergence but also lower variance.

Typically, [batch size](/wiki/batch_size) is chosen based on a tradeoff between convergence speed and [stability](/wiki/stability). A range of 10 to 1000 is commonly observed in practice.

## Advantages of mini-batch training

Mini-batch training has several advantages over [batch training](/index.php?title=Batch_training&action=edit&redlink=1), which involves running the model on all data at once. Some of these advantages include:

### Faster convergence

Mini-batch training typically converges faster than batch training, since the model is updated more frequently. Additionally, the gradients calculated on a mini-batch are more representative of the entire dataset than those calculated from individual data points as in [Stochastic Gradient Descent](/index.php?title=Stochastic_Gradient_Descent&action=edit&redlink=1).

### Less memory usage

Mini-batch training uses less [memory](/index.php?title=Memory&action=edit&redlink=1) than batch processing, as only a portion of the dataset is loaded into memory at once. This enables larger models to be trained using limited computational resources.

### Improved generalization

Mini-batch training can improve [generalization](/wiki/generalization) performance as the model is exposed to a wider variety of examples during instruction, making it more likely that it will learn how to apply its knowledge to new, unseen situations.

### Better optimization

Mini-batch training can aid the [optimization](/index.php?title=Optimization&action=edit&redlink=1) process, as the stochastic nature of gradients computed from mini-batches can help the model escape [local minima](/index.php?title=Local_minima&action=edit&redlink=1) and find more favorable solutions.

## Disadvantages of mini-batch training

Mini-batch training has its advantages but also some drawbacks, such as:

### Hyperparameter tuning

The selection of [mini-batch size](/wiki/mini-batch_size) is an important parameter that needs to be optimized for optimal performance. This can be a laborious process requiring extensive experimentation.

### Noise

Mini-batch training can be [noisy](/wiki/noisy) due to the approximations made when computing gradients from a mini-batch; this may lead to [oscillations](/index.php?title=Oscillation&action=edit&redlink=1) in the learning process and slower convergence speeds.

### Hardware requirements

Mini-batch training requires more CPU/GPU memory than training on a single data point like in [SGD](/index.php?title=SGD&action=edit&redlink=1), making it difficult to train large models with limited hardware resources.

## Explain Like I'm 5 (ELI5)

Imagine having a large pile of candy you would like to share with your friends. Make sure each friend gets an equal share, so instead of giving all the candy to one friend and then moving on, divide the pile into smaller portions and give each pile to each one separately. Not only will this guarantee an equitable distribution of treats among each friend, but it is also faster than giving everything to one person at once.

Similar to machine learning, when you have a large dataset, training the model on all data at once would take too long. So instead, divide the big dataset into smaller piles and train the model on each pile separately. This way, your model can learn from part of the data instead of all at once, allowing it to learn faster from smaller portions of it.