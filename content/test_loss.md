---
title: "Test loss"
slug: "test_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Test loss is a [metric](/wiki/metric) that measures a [model](/wiki/model)'s [loss](/wiki/loss) against the [test data set](/wiki/test_data_set). Note that the [test dataset](/wiki/test_dataset) is a separate [dataset](/wiki/dataset) from the [training data set](/wiki/training_data_set) and the [validation data set](/wiki/validation_data_set). Testing the model on the test set is like a final test for an already trained [machine learning model](/wiki/machine_learning_model). The lower the test loss is, the better the model is.

[Machine learning](/wiki/machine_learning) [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) measure their model's ability to make accurate predictions on unseen [data](/index.php?title=Data&action=edit&redlink=1). The test loss provides an assessment of a model's generalization ability, or its capacity for making accurate predictions when presented with new information that was not seen during [training](/wiki/training).

The test loss is calculated by comparing the model's predictions on [test data](/wiki/test_data) with actual values for target variables ([labels](/index.php?title=Labels&action=edit&redlink=1)). This difference, known as an [error](/index.php?title=Error&action=edit&redlink=1), serves to measure how accurately predictions made on the test data reflect actual outcomes. It serves to reflect how [well-fitted](/index.php?title=Well-fitted&action=edit&redlink=1) the model's predictions were to the actual data.

We want to minimize the test loss. A large test loss vs. [training loss](/wiki/training_loss) or [validation loss](/wiki/validation_loss) might indicate that we are [overfitting](/wiki/overfitting) the model and might need to use [regularization](/wiki/regularization).

Calculating a test loss requires consideration of the particular problem being addressed and desired properties of the model. Common [loss functions](/wiki/loss_function) include [mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1), [mean absolute error](/index.php?title=Mean_absolute_error&action=edit&redlink=1), and [categorical cross-entropy](/index.php?title=Categorical_cross-entropy&action=edit&redlink=1).

## Mean Squared Error

[Mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) (MSE) is a commonly used measure when attempting to predict an ongoing target variable. MSE is calculated as the average of squares between predicted values and actual values (labels).

MSE is a smooth and differentiable function, making it suitable for [optimization algorithms](/index.php?title=Optimization_algorithm&action=edit&redlink=1) such as [gradient descent](/wiki/gradient_descent). Furthermore, MSE has the advantageous property of being sensitive to large errors; this means a model with an increased MSE is likely to make major mistakes in some instances in its test set.

## Mean Absolute Error

[Mean absolute error](/index.php?title=Mean_absolute_error&action=edit&redlink=1) (MAE) is a commonly used measure for regression problems. MAE is calculated as the average of all residual values between predicted values and actual values.

MAE is a robust loss function that is insensitive to outliers, making it ideal for problems where there may be some instances in the test set with large errors. Unlike MSE, however, MAE is nondifferentiable which may make optimizing with gradient-based algorithms more challenging.

## Categorical Cross-Entropy

[Categorical cross-entropy](/index.php?title=Categorical_cross-entropy&action=edit&redlink=1) is a widely used approach in [classification](/wiki/classification) problems, where the aim is to accurately predict a categorical target variable. Categorical cross-entropy is calculated as the average of negative log likelihoods associated with predicted class probabilities.

Categorical cross-entropy is a smooth and differentiable function with the desirable property of assigning a large loss to predictions with low confidence. This property makes categorical cross-entropy ideal for classification problems where it's necessary to penalize models for making incorrect predictions with high assurance.

## Explain Like I'm 5 (ELI5)

Test loss is like a test we give our model to see how well it understands what we taught it. Just like taking an exam in school to demonstrate your mastery of content, test loss helps us determine just how well our model comprehends what was presented to it.

When teaching a model, we provide it with examples to learn from and also keep some unknown so we can test its knowledge later on. Test loss is an indicator of how well the model has learned what we taught it; the lower this number, the better equipped it will be to guess answers when faced with questions that have never been asked before.

Just like when you receive a high grade on a test, a low test loss indicates that our model is doing an effective job of understanding what we have taught it. Conversely, a high loss indicates our model is struggling with understanding, much like when receiving an unsatisfactory grade on your exam.