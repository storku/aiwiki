---
title: "Generalization curve"
slug: "generalization_curve"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Generalization curve is a plot that displays [training loss](/wiki/training_loss) and [validation loss](/wiki/validation_loss) as a function of the number of [iterations](/index.php?title=Iterations&action=edit&redlink=1). Iterations would be the x-axis while [loss](/wiki/loss) would be the y-axis.

[Machine learning](/wiki/machine_learning) strives to build [models](/wiki/models) that accurately predict unseen [data](/index.php?title=Data&action=edit&redlink=1). To do this, [machine learning models](/wiki/machine_learning_models) are trained on a [dataset](/wiki/dataset) called [training set](/wiki/training_set) that consists of input [features](/wiki/features) and their corresponding target values ([labels](/index.php?title=Labels&action=edit&redlink=1)). Unfortunately, the performance of the model on this training dataset does not guarantee its performance when faced with new information - known as [overfitting](/wiki/overfitting). To address this issue, [evaluation](/index.php?title=Evaluation&action=edit&redlink=1) of the model's performance on another dataset called the [validation set](/wiki/validation_set) must take place.

The generalization curve is a graph that displays the model's performance on training and validation sets as a function of [model complexity](/index.php?title=Model_complexity&action=edit&redlink=1). It can be used to identify the optimal level of [complexity](/index.php?title=Complexity&action=edit&redlink=1) that balances [bias-variance tradeoff](/index.php?title=Bias-variance_tradeoff&action=edit&redlink=1) while avoiding overfitting.

## The Bias-Variance Trade-Off

Machine learning models use the [bias-variance tradeoff](/index.php?title=Bias-variance_tradeoff&action=edit&redlink=1) as a fundamental concept that describes the relationship between their ability to fit [training data](/wiki/training_data) and generalize to new data. Model [bias](/wiki/bias) refers to any [errors](/index.php?title=Error&action=edit&redlink=1) caused by assumptions made in the model, while [variance](/index.php?title=Variance&action=edit&redlink=1) refers to model sensitivity to fluctuations in training data. A model with high bias will not fit training data well while one with high variance overfits it by too much.

The bias-variance trade-off can be illustrated by the generalization curve, which displays the model's performance on training and validation sets as a function of model complexity. Model complexity indicates how flexible the model is; typically, this number of [parameters](/index.php?title=Parameters&action=edit&redlink=1) determines its flexibility.

## Generalization Curve

The generalization curve is a graph that displays the model's performance on training and validation sets as a function of model complexity. The x-axis represents model complexity or iterations, while the y-axis displays its performance on both sets. [Accuracy](/wiki/accuracy), [mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1), or [area under the curve](/wiki/area_under_the_curve) are typically used to measure this phenomenon.

The generalization curve can be used to identify the optimal model complexity that balances bias-variance tradeoff. A model with low complexity has high bias but low variance, while one with high complexity has both low bias and high variance. The optimal level of complexity will be identified as the point on the generalization curve where [validation error](/index.php?title=Validation_error&action=edit&redlink=1) is lowest.

The generalization curve can be used to detect [overfitting](/wiki/overfitting) and [underfitting](/wiki/underfitting). Overfitting occurs when the model is too complex, fitting the training data perfectly but failing to generalize well to new data. The model performs well on the training set but poorly on validation set. Conversely, underfitting occurs when there's too little complexity involved and doesn't fit training data well - leading to low performance across both sets of training data and validation data.

## Explain Like I'm 5 (ELI5)

Imagine you own a toy car that you use to race around your room. To perfect your driving, you practice by driving it over different surfaces such as carpet, wood and tile.

After practicing on an unfamiliar surface like a bumpy rug, you discover that even with limited control you can still maneuver the car quite well - this is similar to the generalization curve in machine learning!

Machine learning allows a computer to learn how to recognize pictures of cats by studying many pictures and recognizing what features they all share.

Once the computer has perfected recognizing cats, we give it an unfamiliar picture of a feline. If the computer can still recognize the same cat in this new image, we say that it has "generalized" its knowledge to this new scenario.

The generalization curve illustrates how well a computer can recognize cats in new images that it hasn't seen before, similar to how well you might drive your toy car on surfaces you haven't practiced on before.