---
title: "Partitioning strategy"
slug: "partitioning_strategy"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Partitioning Strategy in Machine Learning

In the field of [machine learning](/wiki/machine_learning), the partitioning strategy refers to the method of dividing a dataset into separate subsets to facilitate the training, validation, and testing of models. Partitioning plays a crucial role in ensuring the robustness, accuracy, and generalizability of the model when applied to real-world situations. This article explores the various partitioning strategies commonly used in machine learning and their respective benefits.

### Holdout Method

The holdout method is one of the simplest and most widely used partitioning strategies in machine learning. It involves splitting the dataset into two or three distinct parts: a [training set](/wiki/training_set), a [validation set](/wiki/validation_set) (optional), and a [test set](/wiki/test_set). The training set is used to train the model, while the validation set is employed for hyperparameter tuning and model selection. Finally, the test set is utilized to evaluate the model's performance on unseen data. The ratio of data points allocated to each subset varies depending on the problem and dataset size, but a common split is 70% for training, 15% for validation, and 15% for testing.

### K-Fold Cross-Validation

[K-fold cross-validation](/index.php?title=K-fold_cross-validation&action=edit&redlink=1) is an alternative partitioning strategy that provides a more robust evaluation of a model's performance. In this method, the dataset is divided into *k* equally sized folds. The model is then trained and validated *k* times, with each fold serving as the validation set once, and the remaining *k-1* folds used for training. The final model performance is determined by averaging the validation scores from each iteration. This approach reduces the risk of overfitting and provides a more reliable estimation of the model's performance on unseen data.

#### Stratified K-Fold Cross-Validation

An extension of the K-fold cross-validation is the [stratified K-fold cross-validation](/index.php?title=Stratified_K-fold_cross-validation&action=edit&redlink=1). This method is particularly useful when dealing with imbalanced datasets, where the distribution of target variable classes is uneven. In stratified K-fold cross-validation, the folds are created in such a way that the proportion of each class is maintained across all folds, ensuring that each subset is representative of the overall class distribution. This results in a more accurate evaluation of the model's performance and helps to prevent biased model predictions.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bag of differently shaped and colored blocks, and you want to teach a friend how to recognize these shapes and colors. You need to divide the blocks into groups so that your friend can practice recognizing them and you can test how well they've learned.

Partitioning strategy is how you divide these blocks into groups. You can do it in different ways, like putting some blocks aside for testing or splitting them into smaller groups and using each group for practice and testing in turns. This way, you can be sure that your friend can recognize shapes and colors even when they see new blocks they haven't practiced with before.