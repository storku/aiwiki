---
title: "Binary classification"
slug: "binary_classification"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Binary classification is a type of [machine learning](/wiki/machine_learning) problem where the goal is to classify [input](/index.php?title=Input&action=edit&redlink=1) [data](/index.php?title=Data&action=edit&redlink=1) into one of two [classes](/wiki/class) or categories. These classes may be labeled positive (1) and negative (0), or true(1) and false(0) respectively. The classes are mutually exclusive.

## What is Binary Classification?

In binary classification, a machine learning algorithm learns to classify input data into one of two classes based on [labeled](/wiki/label) [training data](/wiki/training_data). When given input data, this algorithm makes an educated guess as to which class the input belongs in.

Binary classification involves classifying input data into two classes based on learned patterns from training data, such as spam or not spam, fraud or not fraud and disease or not disease. The goal is to accurately classify new input data into the appropriate class based on these learned patterns.

Binary classification is a [supervised learning](/wiki/supervised_learning) task, meaning the [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) is trained using labeled data where each data point has been assigned a label indicating its class membership.

### Example Usecases

1. Email spam filtering: The goal is to classify incoming emails as either spam or not spam. Using the content of the email as input data, this system outputs either "spam" or "not spam."

2. Credit Risk Assessment: The aim is to classify loan applicants as either "high-risk" or "low-risk" based on their credit history and other factors. Input data includes features like income, credit score, and employment history; then an output labeled either "high-risk" or "low-risk."

3. Medical Diagnosis: This task aims to classify patients as either having or not a certain disease based on their symptoms and medical history. The input data consists of features such as age, gender, blood pressure, and medical test results; the output can then be classified into either "positive" or "negative."

4. Fraud Detection: The goal is to classify financial transactions as fraudulent or non-fraudulent based on features such as the amount, location, and type of transaction. Based on these input data points, an output labeled "fraudulent" or "non-fraudulent" is generated.

## How is Binary Classification Accomplished?

Binary classification is usually accomplished using a machine learning algorithm trained on labeled training data. When presented with input data, this algorithm makes an educated guess as to which class it belongs in.

The performance of an algorithm is evaluated on a separate set of test data from the training data. The labeled test data is labeled, and the performance of the algorithm is judged by comparing predicted labels to true labels in this [test set](/wiki/test_set).

Binary classification requires the use of machine learning algorithms such as [logistic regression](/wiki/logistic_regression), [decision trees](/wiki/decision_tree), [random forests](/wiki/random_forest) and [support vector machines](/index.php?title=Support_vector_machine&action=edit&redlink=1) (SVM). The specific choice depends on the problem being solved and characteristics of the data.

## Evaluation Metrics for Binary Classification

The performance of a binary classification model is evaluated using various [metrics](/wiki/metric) such as [accuracy](/wiki/accuracy), [precision](/wiki/precision), [recall](/wiki/recall) and [F1 score](/index.php?title=F1_score&action=edit&redlink=1).

Accuracy measures the percentage of correct predictions made by the model on a set of test data. Precision is the proportion of true positive predictions among all positive predictions made by the model, while recall measures how many true positive samples there were among all actual positive samples in the test data. The F1 score is calculated as an average of precision and recall.

When selecting an evaluation metric, consider the specific problem at hand and the relative importance of accurately recognizing each class.

## Explain Like I'm 5 (ELI5)

Binary classification is like playing a game of guessing whether something is true or false. A computer program could learn to detect spam emails by looking through lots of them and learning which ones are spam and which ones aren't. Then when presented with a new email, the program tries to guess its status based on past experiences. When successful, it earns points which increase over time as more emails are examined.