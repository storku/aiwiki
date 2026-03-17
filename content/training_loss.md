---
title: "Training loss"
slug: "training_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), training loss refers to a [metric](/wiki/metric) of how well a [model](/wiki/model) fits [training data](/wiki/training_data). It is the model's [loss](/wiki/loss) during a particular [training](/wiki/training) [iteration](/wiki/iteration). The aim of [training](/wiki/training) a [machine learning model](/wiki/machine_learning_model) is to find [parameters](/index.php?title=Parameters&action=edit&redlink=1) that produce the optimal fit with given information. To evaluate how well it does this, we use something called a [loss function](/wiki/loss_function) - also known as [cost function](/index.php?title=Cost_function&action=edit&redlink=1) or [error function](/index.php?title=Error_function&action=edit&redlink=1).

The training loss is the outcome of evaluating a loss function on [training set](/wiki/training_set). It measures the difference between predicted values and actual values ([labels](/index.php?title=Labels&action=edit&redlink=1)) for that set. The aim of training is to minimize this loss so that the model can make accurate predictions on new, unseen data with confidence.

## Types of Loss Functions

Machine learning employs a variety of [loss functions](/wiki/loss_function), depending on the problem being solved and the model being employed. Some commonly employed loss functions include:

1. [Mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) (MSE) Loss: This loss function is the most commonly employed for [regression](/wiki/regression) problems. It measures the average squared difference between predicted output and actual output.

2. [Binary cross-entropy](/index.php?title=Binary_cross-entropy&action=edit&redlink=1) (BCE): Used in [binary classification](/wiki/binary_classification) problems where the objective is to accurately predict one of two possible [classes](/wiki/class), this statistic measures the distance between the predicted probabilities and the actual target values.

3. [Categorical cross-entropy](/index.php?title=Categorical_cross-entropy&action=edit&redlink=1) (CCE): Used in [multiclass classification](/index.php?title=Multiclass_classification&action=edit&redlink=1) problems to predict one of several classes, this statistic measures the difference between a [predicted probability distribution](/index.php?title=Predicted_probability_distribution&action=edit&redlink=1) and an actual [one-hot encoded](/index.php?title=One-hot_encoded&action=edit&redlink=1) class [label](/wiki/label).

4. [Softmax cross-entropy](/index.php?title=Softmax_cross-entropy&action=edit&redlink=1): This approach is used for multiclass classification problems with mutually exclusive classes. It calculates the [categorical cross-entropy](/index.php?title=Categorical_cross-entropy&action=edit&redlink=1) loss for each class and then takes its average across all classes.

5. [KL-divergence](/index.php?title=KL-divergence&action=edit&redlink=1): This statistic measures the difference in probability distributions. It's commonly employed when training [generative models](/index.php?title=Generative_models&action=edit&redlink=1) such as [Generative Adversarial Networks](/index.php?title=Generative_Adversarial_Network&action=edit&redlink=1) (GANs).

## How Training Loss is Used

The training loss is used to evaluate the performance of a machine learning model during training. To minimize this loss, [optimization algorithms](/index.php?title=Optimization_algorithm&action=edit&redlink=1) such as [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD) or [Adam](/index.php?title=Adam&action=edit&redlink=1) are employed. These optimization processes modify the model's [parameters](/index.php?title=Parameters&action=edit&redlink=1) in order to minimize its training loss.

## Overfitting and Underfitting

[Overfitting](/wiki/overfitting) occurs when a model is too complex and fits the [training data](/wiki/training_data) too well yet fails to generalize well on unseen data. This leads to low training losses but high [validation losses](/wiki/validation_loss). [Regularization](/wiki/regularization) techniques like [L1](/wiki/l1_regularization) or [L2 regularization](/wiki/l2_regularization) can be used as penalties for complex models in order to minimize overfitting.

[Underfitting](/wiki/underfitting) occurs when a model is too simple and does not fit the training data well, leading to high training loss and validation loss. To avoid this issue, more complex models can be utilized or more data can be collected for training the model.

## Explain Like I'm 5 (ELI5)

Training loss is like a score that tells us how well our model is doing at guessing what we're teaching it. When teaching a model, we give it examples and ask it to guess the answer. The training loss is an indicator of how close these guesses are to reality - the lower the loss, the better! Just like when playing video games and getting high scores means you're doing well!