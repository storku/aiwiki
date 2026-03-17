---
title: "Validation set"
slug: "validation_set"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Validation set is the [dataset](/wiki/dataset) held back during [model training](/wiki/model_training) in order to evaluate the model's performance. After training on the [training set](/wiki/training_set), the validation set helps assess how well the [model](/wiki/model) generalizes to newly unseen data. It serves to [fine-tune](/index.php?title=Fine-tune&action=edit&redlink=1) model [hyperparameters](/wiki/hyperparameters) and prevent [overfitting](/wiki/overfitting).

## Why is a validation set important?

Validation sets are used to assess the performance of a model on [data](/index.php?title=Data&action=edit&redlink=1) it has never encountered before. They ensure that the model does not overfit from [training data](/wiki/training_data), which can lead to poor performance when presented with new information. By testing on a validation set, we can adjust model hyperparameters so it does not overfit and performs well on new information.

## How is a validation set created?

Create a validation set, in which part of the [labeled](/wiki/label) dataset is held back before model training starts. The remaining data then goes towards training the model. This validation set should represent actual world data encountered by the model; typically 20-30% of total dataset size should go into it; however, depending on size and problem being solved, this number may differ.

## How is a validation set used?

After the model has been trained on a training set, it is evaluated on the validation set to assess its performance. This validation set allows us to tune hyperparameters of the model - parameters not learned during training such as [learning rate](/wiki/learning_rate) or [hidden layer](/wiki/hidden_layer) count in [neural networks](/wiki/neural_network) - based on its performance on this validation set. By altering these hyperparameters according to new information that cannot be seen during training, we can improve its capability when faced with new data sets.

## Explain Like I'm 5 (ELI5)

Machine learning aims to build a model that can accurately predict data it has never seen before. To guarantee this, we utilize a validation set - part of our data set we keep hidden from the model while teaching it how to make predictions. Once trained, we test its predictions against this validation set to see if improvements need to be made for improved accuracy. If necessary, these changes can be made to make the model even better at making forecasts on new data sets.