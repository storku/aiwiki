---
title: "Momentum"
slug: "momentum"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Momentum in Machine Learning

Momentum is a widely-used optimization technique in the field of machine learning and deep learning, specifically in training neural networks. This method aims to accelerate the convergence of gradient-based optimization algorithms such as [gradient descent](/wiki/gradient_descent) and [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) by incorporating information from previous iterations.

### Gradient Descent and Stochastic Gradient Descent

Before discussing the momentum technique, it is essential to briefly understand the gradient descent and stochastic gradient descent optimization algorithms, which serve as the basis for momentum.

Gradient descent is a first-order optimization algorithm that aims to minimize an objective function by iteratively updating the model parameters in the negative direction of the gradient. Stochastic gradient descent (SGD) is a variant of gradient descent, in which a random subset of data, or a minibatch, is used to estimate the gradient. This approach offers faster convergence and improved generalization capabilities compared to the traditional batch gradient descent method.

However, both gradient descent and stochastic gradient descent suffer from slow convergence, especially when the objective function has a high condition number or an ill-conditioned Hessian matrix.

### Momentum Technique

The momentum technique addresses the limitations of gradient descent and stochastic gradient descent by adding a momentum term to the update rule. This term helps to dampen oscillations and speed up convergence by taking into account the past gradients.

The update rule for the momentum method can be expressed as follows:

v_t = β * v_(t-1) + η * ∇f(θ_t)
θ_(t+1) = θ_t - v_t

Where:

- v_t is the momentum vector at time step t

- β is the momentum coefficient (a hyperparameter in the range [0,1])

- η is the learning rate

- ∇f(θ_t) is the gradient of the objective function with respect to the parameters θ_t

- θ_(t+1) is the updated parameter vector at time step t+1

The momentum coefficient, β, controls the balance between the influence of the past gradients and the current gradient. A higher value of β results in a stronger influence of past gradients, effectively smoothing the search trajectory and preventing oscillations.

### Benefits of Momentum

The momentum technique offers several advantages over the standard gradient descent and stochastic gradient descent algorithms:

- Faster convergence: By incorporating information from past gradients, the momentum technique can accelerate convergence, especially in cases with ill-conditioned Hessian matrices or high condition numbers.

- Reduced oscillations: The momentum term dampens oscillations in the optimization trajectory, preventing the algorithm from getting stuck in local minima or saddle points.

- Improved generalization: By smoothing the search trajectory, the momentum technique can help the algorithm find better generalization minima, reducing the risk of overfitting.

## Explain Like I'm 5 (ELI5)

Momentum in machine learning is a technique that helps computers learn faster and better by remembering what they have learned in the past. Imagine you are rolling a ball down a hill. The ball starts slowly, but as it rolls, it gains more speed and becomes faster. That's like momentum in machine learning: it helps the learning process become faster and more efficient as it goes on.