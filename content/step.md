---
title: "Step"
slug: "step"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition of Step in Machine Learning

In the context of machine learning, a **step** typically refers to an iteration or a single pass through a specific part of the algorithm during the learning process. A step can involve various actions, such as updating model parameters, assessing the current model's performance, or executing a certain phase of the algorithm. Steps are often part of larger processes like training, validation, and testing of machine learning models.

### Training Step

During the **training step**, a machine learning model learns to make predictions or decisions by adjusting its parameters based on input data and corresponding target values. This is achieved through a process called [optimization](/index.php?title=Optimization&action=edit&redlink=1), which involves minimizing the error between the model's predictions and the actual target values. The training step often consists of several iterations or **epochs** to improve the model's performance. Within each epoch, the model processes the data in smaller chunks called **batches** and updates its parameters after each batch.

#### Gradient Descent and Learning Rate

One of the most common optimization algorithms used in machine learning is [gradient descent](/wiki/gradient_descent). During each step of gradient descent, the model's parameters are adjusted in the direction of the negative gradient of the loss function with respect to the current parameters. This iterative process aims to find the minimum value of the loss function, which corresponds to the optimal parameters for the model.

The size of each step in gradient descent is controlled by a hyperparameter called the **learning rate**. A larger learning rate can result in faster convergence but may overshoot the optimal parameters, while a smaller learning rate may provide more precise convergence at the cost of increased computational time.

### Validation Step

The **validation step** is an intermediate evaluation process performed on a separate dataset, called the validation set, which is not used during training. The validation step helps to monitor the model's performance on unseen data and detect potential issues such as [overfitting](/wiki/overfitting) or [underfitting](/wiki/underfitting). By comparing the performance metrics of the model on the validation set and training set, practitioners can adjust the model's architecture, hyperparameters, or training strategy to improve generalization and prevent overfitting.

### Testing Step

The **testing step** is the final evaluation of a machine learning model, conducted on a dataset that has not been used during training or validation. This step aims to provide an unbiased estimate of the model's performance on completely new, unseen data, and serves as an indicator of how well the model is expected to perform in real-world scenarios.

## Explain Like I'm 5 (ELI5)

Imagine you're learning to ride a bike. Each **step** in this case would be an attempt to pedal and balance the bike. As you keep trying, you learn how to balance better and pedal more smoothly. In machine learning, a step is similar - it's a single part of the learning process where the computer (or "brain") makes a small change to get better at solving a problem. Just like learning to ride a bike, the computer will go through many steps before it becomes good at solving the problem.