---
title: "Gradient boosting"
slug: "gradient_boosting"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Gradient boosting is a popular and powerful [machine learning](/wiki/machine_learning) algorithm used for both [classification](/wiki/classification) and [regression](/wiki/regression) tasks. It belongs to the family of [ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1) methods, which combine the predictions of multiple base models to produce a more accurate and robust prediction. The main idea behind gradient boosting is to sequentially add weak learners (typically decision trees) to the ensemble, each one correcting the errors of its predecessor. The algorithm can be considered an adaptive technique, as it leverages the gradients of the loss function to guide the learning process.

## Algorithm

### Loss Function

In gradient boosting, the primary goal is to minimize a [loss function](/wiki/loss_function). The loss function quantifies the difference between the predicted outcomes and the actual target values. Examples of commonly used loss functions include mean squared error (MSE) for regression tasks and logarithmic loss for classification tasks.

### Weak Learners

Gradient boosting utilizes weak learners, which are simple models that provide slightly better accuracy than random guessing. The most commonly used weak learners in gradient boosting are [decision trees](/index.php?title=Decision_trees&action=edit&redlink=1), specifically shallow decision trees known as [stumps](/index.php?title=Stumps&action=edit&redlink=1). These stumps are chosen for their simplicity and computational efficiency.

### Boosting

The core concept of gradient boosting is to iteratively add weak learners to the ensemble, with each new learner focusing on the errors made by the previous learners. By combining the predictions of multiple weak learners, the ensemble model's overall predictive performance is improved. This process is guided by the gradients of the loss function, which indicate the direction in which the model should be updated to minimize the loss.

## Regularization and Hyperparameters

Gradient boosting includes several techniques to prevent [overfitting](/wiki/overfitting) and improve the model's generalization ability. Regularization methods, such as shrinkage and early stopping, are employed to control the complexity of the model.

In addition, gradient boosting involves a set of [hyperparameters](/wiki/hyperparameters) that control the behavior of the algorithm, such as the number of weak learners, the learning rate, and the maximum depth of the decision trees. These hyperparameters need to be tuned carefully, as they can significantly impact the model's performance.

## Popular Implementations

Several popular open-source libraries offer efficient implementations of gradient boosting algorithms. Some of the most widely used include:

- [XGBoost](/index.php?title=XGBoost&action=edit&redlink=1): eXtreme Gradient Boosting, an optimized and scalable implementation of gradient boosting that offers parallelization and additional features.

- [LightGBM](/index.php?title=LightGBM&action=edit&redlink=1): Light Gradient Boosting Machine, a library developed by Microsoft Research that provides fast training speed and high efficiency.

- [CatBoost](/index.php?title=CatBoost&action=edit&redlink=1): Categorical Boosting, a library developed by Yandex that focuses on handling categorical features and offers improved accuracy.

## Explain Like I'm 5 (ELI5)

Imagine you have a team of people who are not very good at solving a specific problem, but they are all slightly better than guessing randomly. You want to create a super team that can solve the problem much better than any individual. To do this, you start by having one person attempt to solve the problem, and then you see where they made mistakes. Next, you add another person to the team who focuses on fixing those mistakes. You keep adding more people to the team, with each new person focusing on fixing the mistakes made by the team so far. This is similar to how gradient boosting works: it combines many simple models (like the individual people) to create a more accurate and powerful model that can solve the problem.