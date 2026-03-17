---
title: "Termination condition"
slug: "termination_condition"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Termination Condition in Machine Learning

In the field of [machine learning](/wiki/machine_learning), a termination condition, also known as stopping criterion, refers to a set of predefined criteria that determines when an optimization algorithm should cease its search for the optimal solution. Termination conditions are essential to prevent overfitting, underfitting, and excessive computational resources consumption. They help ensure that the learning process is efficient and converges to a solution that generalizes well to new data.

### Types of Termination Conditions

There are several types of termination conditions used in machine learning algorithms, each with its advantages and disadvantages. Some common types include:

- **Iteration-based termination**: The algorithm stops after a predetermined number of iterations or epochs. This approach is simple to implement and guarantees that the algorithm will terminate within a fixed time. However, it may lead to overfitting or underfitting if the number of iterations is not chosen carefully.

- **Performance-based termination**: The algorithm terminates when the performance on a [validation set](/wiki/validation_set) ceases to improve or degrades beyond a certain threshold. This approach helps prevent overfitting, as it monitors the generalization performance of the model. The main drawback is that the termination may occur too early if the threshold is too stringent, which may result in underfitting.

- **Resource-based termination**: The algorithm stops when it reaches a predefined limit on computational resources, such as memory usage or execution time. This approach ensures that the algorithm does not consume excessive resources, but it may lead to suboptimal solutions if the resource constraints are too strict.

### Choosing a Termination Condition

Selecting the appropriate termination condition depends on the specific machine learning problem, the algorithm used, and the available computational resources. It is often a balance between the risk of overfitting, underfitting, and the efficiency of the learning process. Researchers and practitioners typically experiment with different termination conditions and combine them to achieve optimal results.

## Explain Like I'm 5 (ELI5)

A termination condition in machine learning is like a finish line for a race. It tells the computer when to stop learning from data. There are different ways to decide when to stop, like after a certain number of steps, when the computer stops getting better at solving the problem, or when it has used up a certain amount of time or resources. Picking the right finish line helps the computer learn better and faster, without using up too much energy or getting confused.