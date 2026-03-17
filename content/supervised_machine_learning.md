---
title: "Supervised machine learning"
slug: "supervised_machine_learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Supervised machine learning is an approach in the field of [machine learning](/wiki/machine_learning) where a model is trained using labeled data, which consists of input-output pairs. This type of learning aims to establish a relationship between input features and corresponding target outputs, allowing the model to make predictions on new, previously unseen data. Supervised learning is widely used in various applications, including [image classification](/index.php?title=Image_classification&action=edit&redlink=1), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and [regression analysis](/index.php?title=Regression_analysis&action=edit&redlink=1).

## Training Process

### Data Preparation

The first step in supervised machine learning involves preparing the data, which includes collecting, cleaning, and pre-processing the data. The data is divided into two sets: the [training set](/wiki/training_set) and the [testing set](/index.php?title=Testing_set&action=edit&redlink=1). The training set contains a large portion of the labeled data and is used to train the model, while the testing set is employed to evaluate the model's performance on new, unseen data.

### Learning Algorithms

Various learning algorithms exist for supervised machine learning, and the choice of an algorithm depends on the problem at hand and the characteristics of the data. Some common algorithms include:

- [Linear regression](/wiki/linear_regression) for regression problems

- [Logistic regression](/wiki/logistic_regression) for binary classification problems

- [Support vector machines](/index.php?title=Support_vector_machines&action=edit&redlink=1) (SVM) for classification and regression tasks

- [Decision trees](/index.php?title=Decision_trees&action=edit&redlink=1) and [Random forests](/index.php?title=Random_forests&action=edit&redlink=1) for classification and regression tasks

- [Neural networks](/index.php?title=Neural_networks&action=edit&redlink=1) for a wide range of tasks, including image and speech recognition, natural language processing, and more.

### Model Evaluation

After training, the model is evaluated on the testing set to measure its performance. Common evaluation metrics include:

- [Accuracy](/wiki/accuracy), which measures the proportion of correct predictions out of the total predictions made

- [Precision, recall, and F1 score](/index.php?title=Precision,_recall,_and_F1_score&action=edit&redlink=1), which provide insights into the model's performance regarding false positives and false negatives

- [Mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1) (MSE) and [root mean squared error](/index.php?title=Root_mean_squared_error&action=edit&redlink=1) (RMSE), which quantify the difference between the predicted and actual values in regression tasks.

## Advantages and Disadvantages

### Advantages

Supervised machine learning offers several benefits, including:

- High accuracy: With a sufficient amount of labeled data, supervised learning models can achieve high accuracy and generalize well to new data.

- Interpretability: Some models, such as decision trees and linear regression, provide interpretable results that allow users to understand the factors influencing the predictions.

### Disadvantages

However, supervised machine learning also has some limitations:

- Labeled data requirement: Obtaining a large amount of labeled data can be time-consuming and expensive, as it often requires manual annotation by domain experts.

- Overfitting: Models can become overly complex and memorize the training data, leading to poor performance on unseen data. Regularization techniques and model selection strategies can help mitigate this issue.

## Explain Like I'm 5 (ELI5)

Imagine you're learning to sort fruits into baskets. Your teacher shows you examples of different fruits and tells you which basket they belong in. You use this information to understand the characteristics of each fruit and then sort new fruits into the correct baskets based on what you've learned. Supervised machine learning is like this process, where a computer learns from examples with known answers, and then uses that knowledge to make predictions for new, unseen situations.