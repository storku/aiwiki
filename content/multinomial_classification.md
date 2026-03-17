---
title: "Multinomial classification"
slug: "multinomial_classification"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Multinomial Classification

Multinomial classification, also known as multi-class or multi-nominal classification, is a type of supervised [machine learning](/wiki/machine_learning) problem where the objective is to categorize an input data point into one of several discrete classes. In contrast to binary classification, where there are only two possible categories, multinomial classification deals with three or more categories.

### Problem Formulation

Given a dataset of training examples, each with a set of features and an associated class label, the task in multinomial classification is to learn a mapping from the feature space to the discrete class labels. Formally, the goal is to find a function *f* such that:

*f*(*x*) = *y*
where *x* is the input feature vector, *y* is the class label, and *f* is a learned function that maps *x* to *y*. The class label *y* belongs to a finite set of possible labels, typically represented as {1, 2, ..., *K*}, where *K* is the number of classes.

### Algorithms and Techniques

Various machine learning algorithms can be applied to multinomial classification problems, including:

- [Logistic Regression](/index.php?title=Logistic_Regression&action=edit&redlink=1): A generalized version of logistic regression, known as multinomial logistic regression or softmax regression, can be used to model the probability of an input data point belonging to each class.

- [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM): Multi-class SVMs extend the binary SVM framework to handle multiple classes by training multiple binary classifiers and combining their results.

- [Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1) and [Random Forests](/index.php?title=Random_Forests&action=edit&redlink=1): Both decision tree and random forest algorithms can naturally handle multi-class problems by constructing trees that make decisions based on feature values to predict class labels.

- [Neural Networks](/index.php?title=Neural_Networks&action=edit&redlink=1): Artificial neural networks, particularly deep learning models, can be adapted to multi-class classification by using a softmax activation function in the output layer and training the network using a suitable loss function, such as categorical cross-entropy.

## Evaluation Metrics

To assess the performance of a multinomial classification model, various evaluation metrics can be used, including:

- [Accuracy](/wiki/accuracy): The proportion of correctly classified instances out of the total instances.

- [Confusion Matrix](/index.php?title=Confusion_Matrix&action=edit&redlink=1): A table representing the true and predicted class labels, illustrating the model's performance on each class.

- [Precision, Recall, and F1 Score](/index.php?title=Precision,_Recall,_and_F1_Score&action=edit&redlink=1): These metrics evaluate the model's performance in terms of false positives and false negatives, and are especially useful when the class distribution is imbalanced.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket full of different types of fruits, like apples, bananas, and oranges. Your job is to sort each fruit into its own group. In machine learning, this is called multinomial classification, where the goal is to put each piece of data (fruit) into one of several categories (fruit types). 

To do this, a computer program learns from a lot of examples, just like how you learned to recognize different fruits by looking at them many times. After the program learns from these examples, it can take a new piece of data it has never seen before and correctly put it into the right category, just like you can recognize a new fruit and put it into the right group.