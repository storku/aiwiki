---
title: "Validation"
slug: "validation"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Validation checks the quality of the [model](/wiki/model)'s predictions by testing the model against the new [data](/index.php?title=Data&action=edit&redlink=1) in [validation set](/wiki/validation_set). Validating a [machine learning model](/wiki/machine_learning_model) requires [labeled data](/wiki/labeled_data) that can be used for [training](/wiki/training) and [testing](/index.php?title=Testing&action=edit&redlink=1). Usually, a [dataset](/wiki/dataset) is divided into 3 sets: a [training set](/wiki/training_set), [validation set](/wiki/validation_set) and [test set](/wiki/test_set). The training set of data instructs the model how to [classify](/index.php?title=Classify&action=edit&redlink=1) or predict outcomes based on [input data](/index.php?title=Input_data&action=edit&redlink=1), while the validation set evaluates the model's [accuracy](/wiki/accuracy) and performance. Validation prevents the model from [overfitting](/wiki/overfitting) to the training set. Validation can be thought of as the first around of testing and evaluating the model while [test set](/wiki/test_set) is the 2nd round.

## Validation Methods

Validating a model requires different approaches, each with their own advantages and drawbacks. Three common techniques for validation are [k-fold cross validation](/index.php?title=K-fold_cross_validation&action=edit&redlink=1), [hold-out validation](/index.php?title=Hold-out_validation&action=edit&redlink=1), and [leave-one-out validation](/index.php?title=Leave-one-out_validation&action=edit&redlink=1).

### k-Fold Cross-Validation

[K-fold cross validation](/index.php?title=K-fold_cross_validation&action=edit&redlink=1) (kFCV) is a popular technique that involves splitting the data into k equal subsets. One subset serves as the testing set, while the remaining k-1 subsets train the model. This cycle repeats itself k times with each subset being tested once. After averaging these results, an estimate of their accuracy can be made.

### Hold-Out Validation

Hold-out validation involves dividing the data into training and testing sets. Usually, a large portion of this information goes toward training the model, while the remainder serves for [testing](/index.php?title=Testing&action=edit&redlink=1). While this approach is straightforward and straightforward to execute, it may not provide an accurate representation of model performance if the testing set is too small or not representative of all available information.

### Leave-One-Out Validation

Leave-one-out validation involves training the model on all but one data point and testing it on the remaining one. This process is repeated for each data point in the set, with results then averaged. This approach works best when working with small datasets but may prove computationally expensive for larger ones.

## Evaluating Model Performance

Once a validation method is selected, its performance is assessed using several metrics. These include accuracy, precision, recall, F1 score and area under the receiver operating characteristic curve (AUC-ROC).

### Accuracy

Accuracy is the percentage of correctly classified instances within a testing set. It provides an easy-to-understand gauge of a model's performance.

### Precision and Recall

[Precision](/wiki/precision) measures the percentage of [true positive](/wiki/true_positive) predictions among all predicted positives, while [recall](/wiki/recall) evaluates the proportion of true positives among all actual positives. Precision and recall are often combined to assess a model's performance when there is an imbalance in [class](/wiki/class) size.

### F1 Score

The [F1 score](/index.php?title=F1_score&action=edit&redlink=1) is the harmonic mean of precision and recall. It can be a useful [metric](/wiki/metric) when both precision and recall are important factors.

### AUC-ROC

[AUC](/wiki/auc)-[ROC](/index.php?title=ROC&action=edit&redlink=1) is a measure of a model's capability to discriminate between positive and negative instances. It's calculated as the area under the curve on an ROC plot. A model with a higher AUC-ROC value will be better at discriminating between positive and negative instances.

## Explain Like I'm 5 (ELI5)

Imagine you're teaching a robot how to recognize something like a cat.

Show the robot pictures of cats and tell it, "This is a cat." Then test its accuracy by showing another picture of a cat and asking, "Is this this another cat?"

If the robot correctly recognizes a cat, then you know it has learned how to recognize one. But if not, then further practice is needed in order for it to get it right.

Validation in machine learning is like this test; it helps us verify that our robot (or machine learning model) learned how to do something correctly.

We give the model examples of what we want it to learn, and then ask it for its opinion on new examples. We compare its answers with what we know is correct, and if the model consistently gives the right answer then we know it has learned how to perform the task correctly. If not, then additional practice may be necessary.