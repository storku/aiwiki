---
title: "Gradient boosted (decision) trees (GBT)"
slug: "gradient_boosted_decision_trees_gbt"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Gradient Boosted Trees (GBT), also known as Gradient Boosted Decision Trees or Gradient Boosting Machines, is a powerful ensemble learning technique in the field of machine learning. GBT constructs an ensemble of weak learners, typically decision trees, in a sequential manner, with each tree optimizing the model's performance by minimizing the error made by the previous tree. The technique is particularly well-suited for handling regression and classification problems.

## Theory and Algorithm

### Gradient Boosting

Gradient Boosting is a generalization of boosting algorithms, which combines multiple weak learners to form a single strong learner. The main idea behind gradient boosting is to utilize the gradients of the loss function with respect to the model's predictions to optimize the model iteratively. The model is built sequentially, with each new weak learner targeting the residuals (or errors) of the previous learners. This procedure is repeated until a predetermined number of iterations or a desired level of accuracy is achieved.

### Decision Trees

[Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1) are a widely used class of machine learning algorithms that recursively partition the input space to make predictions. They are particularly well-suited for handling categorical and numerical features, as well as handling missing values. In GBT, decision trees are employed as weak learners due to their simplicity and interpretability.

### Algorithm

The GBT algorithm consists of the following steps:

1. Initialize the model with a constant prediction value or a simple learner.

2. For each iteration, calculate the negative gradients of the loss function with respect to the model's predictions.

3. Fit a new decision tree to the calculated negative gradients.

4. Update the model by adding the new decision tree to the existing ensemble, with an optimized learning rate.

5. Repeat steps 2-4 until the desired number of iterations or a stopping criterion is met.

## Advantages and Disadvantages

### Advantages

1. **Accuracy:** GBT often provides high accuracy and robustness, outperforming other machine learning techniques on various benchmark datasets.
2. **Feature importance:** GBT can automatically assess and rank the importance of input features, which can be useful for feature selection and model interpretation.
3. **Flexibility:** GBT can be used with various loss functions, making it applicable to a wide range of problems.

### Disadvantages

1. **Computational complexity:** GBT models can be computationally expensive due to the sequential nature of the algorithm, especially for large datasets.
2. **Overfitting:** GBT models can be prone to overfitting if the number of iterations or the depth of the trees is not tuned properly.
3. **Interpretability:** While individual decision trees are highly interpretable, GBT models become less interpretable as the number of trees in the ensemble increases.

## Explain Like I'm 5 (ELI5)

Gradient Boosted Trees (GBT) is a machine learning technique that combines lots of simple models called decision trees to make one strong model. You can imagine decision trees as a series of questions that the computer asks itself to make a prediction. In GBT, we add trees one at a time, and each new tree focuses on fixing the mistakes made by the trees that came before it. This way, the model keeps getting better as more trees are added.

GBT can be really good at making predictions, but it can also be slow and difficult to understand when there are too many trees.