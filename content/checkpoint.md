---
title: "Checkpoint"
slug: "checkpoint"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), a **checkpoint** refers to a snapshot of the current state of a model during the training process. Checkpoints are primarily used for saving the model's weights and architecture, and sometimes additional information such as learning rates and optimizer states, at regular intervals or after a specified number of iterations. This allows the training process to be resumed from a previous state in case of interruptions or failures, and aids in avoiding the loss of progress during long and computationally expensive training sessions.

## Purpose and Benefits

### Model Recovery

One of the primary motivations for using checkpoints in machine learning is to facilitate the recovery of a model in case of unexpected interruptions. By periodically saving the model's state, researchers and practitioners can resume the training process from the most recent checkpoint instead of starting from scratch.

### Model Evaluation

Checkpoints can also be used for evaluating a model's performance at different stages of the training process. By comparing the performance of various checkpoints on a [validation set](/wiki/validation_set), it is possible to determine the optimal number of training iterations, thereby avoiding [overfitting](/wiki/overfitting) or underfitting.

### Hyperparameter Tuning

During [hyperparameter tuning](/index.php?title=Hyperparameter_tuning&action=edit&redlink=1), checkpoints can be leveraged to identify the best combination of hyperparameters for a given model. This can be particularly useful when performing techniques such as grid search or random search, as the checkpoints can be used to store intermediate results and enable faster evaluation of different hyperparameter configurations.

## Checkpoint Frequency

The frequency at which checkpoints are created during the training process depends on several factors, such as the computational resources available, the size of the model, and the desired level of fault tolerance. In general, more frequent checkpoints can provide better protection against data loss, but may also consume additional storage and increase the training time due to the overhead of writing checkpoint files.

## Explain Like I'm 5 (ELI5)

Imagine you're building a giant LEGO tower, and it takes a really long time to build. If you don't save your progress by taking pictures of your tower every now and then, you might accidentally knock it over or lose your work somehow. Checkpoints in machine learning are like those pictures you take of your LEGO tower. They help save the model's progress, so if something goes wrong, you can go back to the last picture (checkpoint) and continue building from there.