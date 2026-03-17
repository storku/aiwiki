---
title: "Discriminative model"
slug: "discriminative_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Discriminative Models in Machine Learning

Discriminative models are a class of machine learning algorithms that aim to model the decision boundary between different classes or categories. These models focus on estimating the conditional probability of a class label given a set of input features, denoted as P(Y|X), where Y represents the class label and X the input features. Discriminative models are widely used for various tasks, such as classification, regression, and structured prediction.

### Types of Discriminative Models

Several machine learning algorithms can be categorized as discriminative models. Some of the most common examples include:

- [Logistic Regression](/index.php?title=Logistic_Regression&action=edit&redlink=1): A linear model that uses a logistic function to model the probability of a binary outcome.

- [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM): A method that aims to find the optimal separating hyperplane between different classes by maximizing the margin between the support vectors.

- [Neural Networks](/index.php?title=Neural_Networks&action=edit&redlink=1): A class of models that consists of interconnected layers of artificial neurons, designed to learn complex patterns in data through a process called backpropagation.

- [Random Forests](/index.php?title=Random_Forests&action=edit&redlink=1): An ensemble learning technique that constructs multiple decision trees and combines their predictions by averaging or voting.

### Advantages and Disadvantages

Discriminative models have certain advantages and disadvantages compared to their counterpart, generative models.

#### Advantages

- Discriminative models generally perform better in classification tasks, as they directly model the decision boundary between classes.

- They can handle a wide range of feature types, such as continuous, discrete, and categorical variables.

- They are generally more flexible, as they do not require assumptions about the underlying distribution of the data.

#### Disadvantages

- Discriminative models cannot generate new samples, as they do not model the joint probability distribution of the input features and class labels.

- They may require more training data to achieve comparable performance to generative models, as they do not leverage information about the class priors.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of fruits, and you want to teach a friend how to identify whether a fruit is an apple or an orange. A discriminative model would learn the differences between apples and oranges, such as their colors and shapes. This way, it can tell your friend if a given fruit is an apple or an orange based on these differences.

The model focuses on what makes apples and oranges unique from each other, rather than learning how apples and oranges look in general. This helps it to make accurate decisions when distinguishing between the two types of fruit.