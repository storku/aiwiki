---
title: "Training set"
slug: "training_set"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) relies on access to large amounts of [data](/index.php?title=Data&action=edit&redlink=1) in order to develop [models](/wiki/models) that accurately predict outcomes. This set, known as the training set, helps [train](/index.php?title=Train&action=edit&redlink=1) the model so it can recognize patterns and make predictions based on newly added information.

[Examples](/wiki/examples) in a [dataset](/wiki/dataset) are divided into 3 groups: training set, [validation set](/wiki/validation_set) and [test set](/wiki/test_set). Training set is used to train the model.

## What is a Training Set?

A training set is a collection of [data](/index.php?title=Data&action=edit&redlink=1) used to train a [machine learning model](/wiki/machine_learning_model). This set typically contains examples of [inputs](/index.php?title=Input&action=edit&redlink=1) and [outputs](/index.php?title=Output&action=edit&redlink=1) that the model uses to learn how to make accurate predictions. Along with validation set and test set, this sets forms one of three primary data sources used in machine learning.

## How is a Training Set Created?

Constructing a training set involves selecting data that accurately reflects the problem that will be solved by the machine learning model. This can involve collecting information from various sources, such as existing databases, sensors or other devices, and user-generated information.

Once the data has been collected, [preprocessing](/wiki/preprocessing) it is essential for use by a machine learning model. This could involve tasks such as cleaning the data, eliminating [outliers](/index.php?title=Outlier&action=edit&redlink=1) and [normalizing](/index.php?title=Normalizing&action=edit&redlink=1) it so that it falls within an established range.

## How is a Training Set Used?

Once the training set has been generated and preprocessed, it is used to train a machine learning model. During this step, the model is shown [examples](/wiki/examples) from the training set and taught how to make accurate predictions by tweaking its internal [parameters](/index.php?title=Parameters&action=edit&redlink=1) accordingly.

The training process continues until the model can accurately predict outcomes from its training set. At this point, it can be evaluated against a [validation set](/wiki/validation_set) to confirm it is not [overfitting](/wiki/overfitting) the data.

Once a model has been trained and validated, it can be used to make predictions on new data. To do this, usually using a separate [test set](/wiki/test_set) from both training and validation sets.

## Why is a Training Set Important?

The training set is essential in machine learning, as it gives the model the opportunity to learn from examples and make accurate predictions on new data. Without this foundation, any predictions made would have no basis, leading to significantly reduced accuracy.

Machine learning practitioners can ensure their models are equipped with a large and diverse training set, helping to guarantee accurate predictions across various datasets.

## Explain Like I'm 5 (ELI5)

When learning something new, such as how to count to ten or tie your shoes, someone has to demonstrate the process first. They might provide examples or describe the steps in detail. This serves as the training set for a machine learning model; it requires plenty of examples in order for it to make accurate predictions on new data. Once it has learned from these examples, just like when learning how to count to 20 after mastering counting up from ten, you are now capable of making accurate predictions based on new information.