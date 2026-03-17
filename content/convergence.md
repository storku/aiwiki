---
title: "Convergence"
slug: "convergence"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Convergence is reached when [loss](/wiki/loss) values change very little or not at all with each [iteration](/wiki/iteration). [Machine learning](/wiki/machine_learning) aims to [train](/index.php?title=Train&action=edit&redlink=1) a [model](/wiki/model) to perform a specific [task](/index.php?title=Task&action=edit&redlink=1), such as [recognizing images](/index.php?title=Recognizing_images&action=edit&redlink=1) or predicting stock prices. The [training](/wiki/training) process involves altering [parameters](/index.php?title=Parameters&action=edit&redlink=1) in the model based on [input](/index.php?title=Input&action=edit&redlink=1) data in order to minimize some [objective function](/wiki/objective_function) such as [mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) between predicted and actual [outputs](/index.php?title=Output&action=edit&redlink=1). Convergence refers to when model parameters stop changing or do so slowly after being trained and additional training will not improve the model.

## Defining Convergence

Convergence is typically measured by monitoring the value of an objective function over time. As model parameters are adjusted, this number should decrease, signaling that it's getting better at its task. When this objective function stops decreasing completely or does so slowly, however, then we say the model has converged. Exact definitions of what constitutes convergence vary depending on specific models and tasks and may include factors like [training set](/wiki/training_set) size, model [complexity](/index.php?title=Complexity&action=edit&redlink=1) and [learning rate](/wiki/learning_rate) used in [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1).

## Convergence Criteria

There are several criteria that can be used to determine whether a model has converged. One common criterion is setting an upper bound on the change in the objective function between iterations, and declaring convergence when this falls below this value. Another approach is monitoring the norm of the [gradient](/wiki/gradient) of the objective function - which measures direction and magnitude of steepest descent. If this value drops below a certain value, then you know your model has indeed converged. Other indicators such as accuracy on [validation sets](/wiki/validation_set) or checking [parameter stability](/index.php?title=Parameter_stability&action=edit&redlink=1) can also help determine convergence.

## Types of Convergence

Machine learning algorithms often experience global convergence, where the model's parameters converge to the [global minimum](/index.php?title=Global_minimum&action=edit&redlink=1) of the objective function. This represents optimal set of parameters that minimizes the objective function over all parameter space. Unfortunately, this may not always be possible in [nonconvex optimization](/index.php?title=Nonconvex_optimization&action=edit&redlink=1) problems with multiple [local minima](/index.php?title=Local_minima&action=edit&redlink=1); in such cases, models may converge to suboptimal local minima - sets of parameters which minimizes the objective function in one region of the parameter space rather than at global minimum.

Another type of convergence is known as convergence to a [saddle point](/index.php?title=Saddle_point&action=edit&redlink=1), which occurs when the model's parameters converge to a point where the objective function's gradient is zero but its [Hessian matrix](/index.php?title=Hessian_matrix&action=edit&redlink=1) contains both positive and negative [eigenvalues](/index.php?title=Eigenvalues&action=edit&redlink=1). At this stage, however, the model may become stuck on an inactive plateau where little change has taken place even though its parameters have yet been optimized.

## Challenges with Convergence

Convergence in machine learning can be a challenging endeavor, particularly for [large models](/index.php?title=Large_models&action=edit&redlink=1) with many parameters. [Overfitting](/wiki/overfitting) is one common issue; where the model becomes too specialized to the [training data](/wiki/training_data) and doesn't generalize well to new data. Overfitting may occur when the model is too complex or when the training set is too small or not representative of the population. [Underfitting](/wiki/underfitting) is another issue whereby the model becomes too simple and fails to capture underlying patterns in data. Underfitting may occur due to rigidity or noisy or complex training sets.

Convergence can also be affected by the optimization algorithm used to adjust the model's parameters. Some algorithms, like [gradient descent](/wiki/gradient_descent), may get stuck in local minima or saddle points while others - like [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) - jump out of these regions and explore other areas in the parameter space. Furthermore, the learning rate used within the optimization algorithm also plays a role in affecting convergence as it provides feedback to the computer during optimization.

## Explain Like I'm 5 (ELI5)

Machine learning convergence can be likened to a chef who keeps tasting their food until it's perfectly prepared.

Imagine you're making soup, and you keep adding ingredients and tasting until it tastes exactly how desired. Convergence is like this but with a machine learning model instead of soup.

When creating a machine learning model, we aim for maximum accuracy. To achieve this, we need to train the model on numerous examples and adjust its parameters until it makes accurate predictions. Convergence occurs when all these corrections have been made enough times that no further adjustments are necessary.

Like when you keep tasting a soup and adding ingredients until it's just right, and then there is no need for further adjustments. The model acts like that soup, and convergence occurs when it has learned everything necessary and can make accurate predictions without needing further adjustments.