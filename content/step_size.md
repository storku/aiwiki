---
title: "Step size"
slug: "step_size"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), the **step size** (also known as learning rate or alpha) is a hyperparameter that determines the magnitude of the update applied to the weights of a model during optimization. Step size is a crucial factor in the training process, as it influences the model's convergence speed and its ability to reach the global minimum of the loss function. The step size is used in various optimization algorithms, such as [gradient descent](/wiki/gradient_descent) and its variants (for example stochastic gradient descent, mini-batch gradient descent), as well as adaptive methods (for example [Adam](/index.php?title=Adam&action=edit&redlink=1), RMSprop).

## Optimization Algorithms and Step Size

### Gradient Descent

In gradient descent, the step size is a scalar that multiplies the gradient of the loss function with respect to the model's parameters. The product of the step size and the gradient is then subtracted from the current parameter values, resulting in an update that moves the parameters in the direction of the steepest decrease in the loss function. A larger step size will result in a more aggressive update, which may cause the algorithm to overshoot the optimal solution or diverge, while a smaller step size will result in slower convergence.

### Stochastic and Mini-batch Gradient Descent

In [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD) and mini-batch gradient descent, the step size functions similarly to gradient descent. The main difference between these methods is that they use a subset of the dataset (a single data point in the case of SGD, and a mini-batch for mini-batch gradient descent) to approximate the gradient, which introduces noise into the gradient estimation. As a result, the step size must be carefully chosen to balance the trade-off between fast convergence and the risk of oscillation or divergence due to noisy gradient estimates.

## Choosing the Step Size

The step size must be carefully selected to ensure that the optimization algorithm converges to an optimal solution. It is typically chosen empirically, either by experimentation or by using techniques such as [grid search](/index.php?title=Grid_search&action=edit&redlink=1), [random search](/index.php?title=Random_search&action=edit&redlink=1), or [Bayesian optimization](/wiki/bayesian_optimization). 

There are several strategies for selecting and adapting the step size during training, including:

- **Constant step size**: The step size remains constant throughout training.

- **Time-based decay**: The step size decreases over time, typically as a function of the training iteration.

- **Step decay**: The step size is reduced by a factor after a fixed number of iterations.

- **Adaptive step size**: The step size is adjusted based on the algorithm's progress, such as the improvement in the loss function or the magnitude of the gradients.

## Explain Like I'm 5 (ELI5)

The step size in machine learning is like the size of the steps you take when you're walking towards a treasure. If you take big steps, you might get to the treasure faster, but you might also step over it and miss it. If you take small steps, you'll get to the treasure more slowly, but you're less likely to miss it. In machine learning, the step size helps the computer learn the best way to solve a problem by taking steps in the right direction to find the best solution.