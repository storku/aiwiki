---
title: "Loss curve"
slug: "loss_curve"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Loss Curve in Machine Learning

In the field of [machine learning](/wiki/machine_learning), a **loss curve** is a graphical representation that demonstrates the performance of a learning algorithm during its training process. By plotting the value of the [loss function](/wiki/loss_function) against the number of training iterations or epochs, researchers and practitioners can assess the algorithm's progress in learning the underlying patterns in the given dataset.

### Importance of Loss Curve

The loss curve serves several essential purposes in the development and evaluation of machine learning models. It helps to:

- Gauge the convergence of the learning algorithm: A decreasing loss value over time indicates that the model is learning and improving its performance.

- Identify potential overfitting or underfitting: If the loss curve does not decrease as expected or shows sudden spikes, it may signal that the model is not generalizing well to the data.

- Determine the optimal number of training iterations: By examining the loss curve, one can find a point where the model's performance plateaus or starts to degrade, which can guide the choice of training iterations.

- Evaluate the impact of hyperparameter tuning: Adjustments to model [hyperparameters](/wiki/hyperparameters) can be compared by analyzing the resulting changes in the loss curve.

### Factors Affecting Loss Curve

The shape and behavior of a loss curve can be influenced by several factors, including:

- Learning rate: An inappropriate learning rate, either too high or too low, can lead to a non-converging or oscillating loss curve.

- Model complexity: A model that is too simple or too complex for the given problem may result in an underfitting or overfitting loss curve, respectively.

- Regularization techniques: The application of [regularization](/wiki/regularization) methods, such as L1 or L2 regularization, can affect the loss curve by discouraging overfitting.

- Batch size: The choice of batch size during training can impact the stability and convergence speed of the loss curve.

- Initialization of model parameters: The initial values assigned to the model's weights can have a substantial impact on the trajectory of the loss curve.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to learn how to ride a bike. Each time you practice, you might fall or wobble a bit, but you get better and better over time. In machine learning, the loss curve is like a chart that shows how well a computer is learning from its practice sessions. It helps people who build these computers (called "models") know if the model is learning well, if it's learning too much and forgetting the important stuff, or if it's not learning enough. By looking at the loss curve, they can change some things to help the model learn better and faster.