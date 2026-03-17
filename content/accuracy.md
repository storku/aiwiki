---
title: "Accuracy"
slug: "accuracy"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Accuracy in [machine learning](/wiki/machine_learning) refers to a [metric](/wiki/metric) that measures the performance of a [classification](/wiki/classification) [model](/wiki/model). It measures the percentage of correct [predictions](/index.php?title=Predictions&action=edit&redlink=1) made by the model on test data compared to all predictions made. Accuracy is one of the most frequently used metrics in machine learning and serves as a standard for comparing models' results.

## Example

Accuracy is a measure of how well a machine learning model can correctly predict [class](/wiki/class) [labels](/index.php?title=Labels&action=edit&redlink=1) from [test data](/wiki/test_data). It is defined as the ratio between correct predictions made by the model and all total predictions made.

Accuracy is determined by:

Accuracy = (Number of correct predictions) / (Total number of predictions).

For instance, if a model is trained to classify images of cats and dogs and tested on 100 images, and it correctly identifies 80 of them, its accuracy is 80/100 = 0.8 or 80%.

## When Should Accuracy Be Utilized?

Accuracy is an invaluable metric when the classes in a data set are balanced, meaning there are approximately equal numbers of samples for each. In such cases, accuracy serves as a great indication of the model's overall performance.

However, when classes are imbalanced (one class with significantly more samples than the other), accuracy may not be an accurate measure of model performance. A model may achieve high accuracy by correctly predicting the [majority class](/wiki/majority_class) even if it performs poorly on the minority one. When dealing with imbalanced [datasets](/wiki/datasets), other metrics like [precision](/wiki/precision), [recall](/wiki/recall) and [F1 score](/index.php?title=F1_score&action=edit&redlink=1) may provide more insightful evaluations of model effectiveness.

## How is Accuracy Calculated?

Accuracy is calculated by comparing predicted class labels to true class labels from test data. If the predicted label matches up perfectly, it's deemed an accurate prediction and the number of correct predictions is increased by one.

Once all predictions have been made, the number of correct predictions is divided by the total number to calculate accuracy.

## Factors Affecting Accuracy

Many factors can influence the accuracy of a classification model, such as its chosen [algorithm](/index.php?title=Algorithm&action=edit&redlink=1), quality and quantity of [training data](/wiki/training_data), [feature selection](/index.php?title=Feature_selection&action=edit&redlink=1) process, and [hyperparameters](/wiki/hyperparameters) used for tuning the model.

The choice of algorithm can significantly influence the accuracy of a model. Some algorithms may be better suited for specific data types or may perform better on small or large datasets. Furthermore, both the quality and quantity of training data influence accuracy as models only learn patterns present in that data set.

The feature selection process is essential, as selecting relevant features can improve the model's accuracy. Finally, tuning the hyperparameters used to [fine-tune](/index.php?title=Fine-tune&action=edit&redlink=1) the model has a significant effect on accuracy; selecting suitable hyperparameters will enhance performance overall.

## Explain Like I'm 5 (ELI5)

Accuracy is a measure of how good a computer program is at distinguishing things. For instance, if we want it to distinguish between pictures of cats and dogs, accuracy would measure how many pictures it gets right out of all those it looks at. The higher the accuracy, the better equipped your program will be at distinguishing between them.