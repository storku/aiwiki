---
title: "Underfitting"
slug: "underfitting"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Underfitting occurs when a [model](/wiki/model) hasn't fully captured the underlying patterns in [data](/index.php?title=Data&action=edit&redlink=1). An underfit model predicts new data poorly. Things that can cause underfitting:

- Model trained for too few [epochs](/index.php?title=Epochs&action=edit&redlink=1) or the [learning rate](/wiki/learning_rate) is too low.

- Model trained with a [regularization rate](/wiki/regularization_rate) that is too high.

- Model has too few [hidden layers](/index.php?title=Hidden_layers&action=edit&redlink=1).

- Model is trained on the wrong [features](/wiki/features).

## What is Underfitting?

Underfitting occurs when a model is too simplistic or has too few [parameters](/index.php?title=Parameters&action=edit&redlink=1), leading to high [bias](/wiki/bias) and low [variance](/index.php?title=Variance&action=edit&redlink=1). This indicates that the model was not complex enough to capture all relevant patterns in data, leading to poor performance on both [[training set}training]] and [test data sets](/wiki/test_data_set). Furthermore, key features or relationships between features that are essential for making accurate predictions may have been overlooked.

## Causes of Underfitting

Underfitting can be caused by several factors, such as using a model that's too simple, not having relevant features in the [dataset](/wiki/dataset), and not having enough [training data](/wiki/training_data). When the model is too simplistic, it may not be able to capture all of the complexities present in data - leading to poor performance. Furthermore, lacking relevant features gives rise to underfitting since there may not be enough information present for accurate prediction. Finally, lacking sufficient training data leaves your model without enough insight to learn patterns hidden within it.

## Signs of Underfitting

Underfitting a model can be detected through several signs. One common indicator is a high [training error](/index.php?title=Training_error&action=edit&redlink=1), which indicates the model cannot accurately predict the outcomes from training data. Another potential warning sign is high bias; this implies the model is too simplistic to capture all patterns present. Lastly, low variance may also be indicative of underfitting as it fails to capture variability within data.

## How to Overcome Underfitting

Underfitting in machine learning can be overcome through several techniques. One approach involves using a more complex model, such as a neural network that has more [parameters](/index.php?title=Parameters&action=edit&redlink=1) and [hidden layers](/wiki/hidden_layer) that will better capture the underlying complexity of data. Another alternative is using larger datasets which will enable the model to learn complex patterns from real world [examples](/wiki/example). Finally, adding relevant features to the dataset may also aid predictions made by the model with greater accuracy.

## Explain Like I'm 5 (ELI5)

Underfitting is analogous to wearing shoes that are too large for you.

Imagine wearing shoes that are far too large for your feet. You would likely have difficulty walking normally and your toes might slip around inside the shoes - this is similar to underfitting in machine learning, where the model does not adequately represent the data set.

Machine learning teaches computers how to recognize objects, like pictures of animals. If the model is underfitted, it means it won't be able to accurately discern patterns within data. It would be like trying to recognize a cat by only looking at its tail; you might not do well since you're missing essential details about its body and face.

Underfitting can occur when the model is either too simple or hasn't been sufficiently trained. To ensure accuracy and comfort when walking, ensure the model fits correctly and has received sufficient training. Ultimately, making sure your shoes fit correctly allows you to walk comfortably without fear of slips.