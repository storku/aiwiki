---
title: "Generalization"
slug: "generalization"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Generalization in [machine learning](/wiki/machine_learning) refers to how [accurately](/index.php?title=Accurate&action=edit&redlink=1) can a [trained model](/index.php?title=Trained_model&action=edit&redlink=1) correctly predict new, unseen [data](/index.php?title=Data&action=edit&redlink=1). A [model](/wiki/model) that generalizes well is the opposite of one that [overfits](/index.php?title=Overfit&action=edit&redlink=1) on [training data](/wiki/training_data). It's an essential concept in machine learning since it allows models to be applied in real-world problems where input data may change frequently.

[Machine learning models](/wiki/machine_learning_models) are trained by optimizing their [parameters](/index.php?title=Parameters&action=edit&redlink=1) to minimize the difference between [predictions](/wiki/prediction) and actual outcomes in training data. If the model becomes overfitted to this training data, it may become complex and unable to generalize well to new information. Overfitting occurs when the model fits [noise](/wiki/noise) rather than underlying patterns in the training data; consequently, it becomes too specialized for new [datasets](/wiki/datasets) and performs poorly when given new ones.

On the contrary, [underfitting](/wiki/underfitting) occurs when a model is too simplistic and fails to capture underlying patterns in training data. An underfit model will also perform poorly on new data. Thus, machine learning seeks a balance between overfitting and underfitting; whereby it can reliably capture patterns while also avoiding fitting noise into its predictions.

## Importance of Generalization in Machine Learning

Generalizing accurately is critical for machine learning models to be successful in real-world applications. Without this ability, models may produce unreliable predictions on new data - which can prove costly or even hazardous in certain domains. For instance, medical diagnosis relies heavily on accurate diagnoses for new patients; an inaccurate model could potentially have serious repercussions.

Furthermore, lack of generalization can impede the scalability of machine learning models. If a model cannot generalize well, frequent [retraining](/index.php?title=Retraining&action=edit&redlink=1) on new data may be required, which is both time-consuming and computationally expensive.

Therefore, improving the generalization performance of machine learning models is an important research topic within this field. There are various techniques that can be employed to enhance generalization, such as [regularization](/wiki/regularization), [early stopping](/wiki/early_stopping), [data augmentation](/wiki/data_augmentation) and [dropout](/index.php?title=Dropout&action=edit&redlink=1).

## Techniques to Improve Generalization

In this section, we will look at some common techniques for improving the generalization performance of machine learning models.

### Regularization

[Regularization](/wiki/regularization) is a technique that adds a penalty term to an objective function during [training](/wiki/training), discouraging models from becoming too complex. This penalty can be based on either the [magnitude](/index.php?title=Magnitude&action=edit&redlink=1) of [weights](/wiki/weights) in the model or on its number of [non-zero weights](/index.php?title=Non-zero_weights&action=edit&redlink=1). Regularization helps prevent overfitting by forcing the model to prioritize simpler solutions which perform better across different situations.

Two common types of regularization are [L1 regularization](/wiki/l1_regularization) and [L2 regularization](/wiki/l2_regularization). L1 adds a penalty term proportional to the absolute value of the weights, while L2 applies one based on the square root of those same weights - also referred to as [weight decay](/index.php?title=Weight_decay&action=edit&redlink=1).

### Early Stopping

[Early stopping](/wiki/early_stopping) is a technique that involves monitoring the [validation loss](/wiki/validation_loss) during training and stopping the process when it stops improving. This prevents overfitting by terminating the model before it becomes too specialized for your training data.

### Data Augmentation

[Data augmentation](/wiki/data_augmentation) is a practice that involves creating new information. It is a technique used to expand a training dataset by altering original data in various ways. It involves making various transformations to the original sample, such as [cropping](/index.php?title=Cropping&action=edit&redlink=1), [flipping](/index.php?title=Flipping&action=edit&redlink=1), [rotating](/index.php?title=Rotating&action=edit&redlink=1), [scaling](/wiki/scaling) and adding noise, in order to produce new training [examples](/wiki/examples) that look similar but slightly different from their originals.

### Dropout

Dropout randomly set some [neurons](/wiki/neuron)' output to zero during the training process - in other words, dropout randomly turns off some neurons in a [neural network](/wiki/neural_network) during each [iteration](/wiki/iteration) of training.

Every training iteration, a random subset of neurons is chosen to be dropped out with a probability defined by a [hyperparameter](/wiki/hyperparameter) called the [dropout rate](/index.php?title=Dropout_rate&action=edit&redlink=1). This encourages remaining neurons to learn robust and independent [features](/wiki/features) without being dependent on other neurons' presence; in turn, this prevents the model from being overly specific and more susceptible to overfitting.

## Explain Like I'm 5 (ELI5)

Imagine you're learning how to draw a picture of a dog. By practicing different breeds and poses, you become proficient at drawing dogs.

Your friend shows you a picture of a cat and asks you to draw it. Even though this is your first time drawing an animal, you know enough about drawing cats that it should be easy.

Machine learning teaches computers how to recognize patterns, just as we taught you how to draw dogs. Generalization occurs when the computer can recognize patterns it has never seen before - like how you were able to draw a cat even though you hadn't drawn one before! It's like being able to use what you've already learned to figure out something completely new!