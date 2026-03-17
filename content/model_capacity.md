---
title: "Model capacity"
slug: "model_capacity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In the context of machine learning, *model capacity* refers to the ability of a model to learn and represent various functions and patterns within a given dataset. High-capacity models have a larger number of parameters and can therefore represent more complex functions, while low-capacity models have fewer parameters and are limited in the complexity of functions they can represent. Model capacity plays a crucial role in determining the trade-off between underfitting and overfitting in machine learning algorithms.

## Factors Affecting Model Capacity

There are several factors that influence the capacity of a machine learning model. These factors can be broadly classified into the following categories:

### Model Complexity

The complexity of a model is determined by the number of parameters or degrees of freedom it has. Models with a higher number of parameters have the ability to fit more complex functions, thus having a higher capacity. For example, deep neural networks with many layers and a large number of neurons have a higher capacity compared to shallow networks with fewer neurons.

### Regularization

[Regularization](/wiki/regularization) is a technique used in machine learning to prevent overfitting by adding a penalty term to the model's objective function. By constraining the model's parameters, regularization effectively reduces the capacity of the model. Common regularization techniques include L1 and L2 regularization, dropout, and weight decay.

## Model Capacity and Generalization

The capacity of a machine learning model is closely related to its ability to generalize to new, unseen data. Striking the right balance between a model's capacity and its generalization performance is critical to achieving optimal results.

### Underfitting

Underfitting occurs when a model has insufficient capacity to capture the underlying structure of the data. This results in poor performance on both the training and test datasets. Models with low capacity may be unable to learn complex patterns and relationships, leading to inadequate representations of the data and reduced predictive accuracy.

### Overfitting

Overfitting occurs when a model has too much capacity, allowing it to fit the noise in the training data rather than the underlying structure. While such models may exhibit high performance on the training dataset, they often perform poorly on unseen test data. Overfitting can be mitigated by using regularization techniques, cross-validation, and early stopping.

## Explain Like I'm 5 (ELI5)

Model capacity in machine learning is like the brainpower of a model. A model with high capacity can learn very complex things, while a model with low capacity can only learn simple things. Having the right amount of capacity is important because if a model is too simple, it won't learn enough, and if it's too complex, it might learn things that don't really matter. To find the perfect capacity, we sometimes use special techniques that help the model stay focused on learning the most important things.