---
title: "Prediction"
slug: "prediction"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Prediction in machine learning refers to the process by which a trained model estimates or forecasts the outcome of a given input based on its learned patterns and relationships from past data. The prediction task is essential to various machine learning applications, including [classification](/wiki/classification), [regression](/wiki/regression), and [time series forecasting](/index.php?title=Time_series_forecasting&action=edit&redlink=1). This article provides an overview of the concept of prediction in machine learning, its underlying principles, and its relevance to different learning tasks.

## Prediction Principles

### Supervised Learning

In the context of [supervised learning](/wiki/supervised_learning), the prediction process involves using a labeled dataset to train a model that can generalize and make accurate predictions on unseen data. The dataset consists of input-output pairs, where the inputs are often called features, and the outputs are referred to as labels or targets. The model learns a mapping function from the input features to the output labels, which allows it to predict the labels for new, unseen inputs.

### Unsupervised Learning

[Unsupervised learning](/wiki/unsupervised_learning) differs from supervised learning in that it does not rely on labeled data for training. Instead, the prediction task involves identifying underlying patterns or structures within the dataset. Common unsupervised learning tasks include [clustering](/wiki/clustering), [dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1), and [density estimation](/index.php?title=Density_estimation&action=edit&redlink=1). Although unsupervised learning does not produce predictions in the same sense as supervised learning, the discovered patterns can be used to make inferences about new, unseen data.

### Reinforcement Learning

In [reinforcement learning](/wiki/reinforcement_learning), the prediction process focuses on estimating the optimal actions for an agent to take in a given environment to maximize its cumulative reward. The agent learns a policy, which is a mapping from states to actions, based on its interactions with the environment. The agent's goal is to find the optimal policy that leads to the highest expected rewards, allowing it to make predictions about which actions to take in different situations.

## Applications of Prediction in Machine Learning

Prediction in machine learning has widespread applications across various domains, such as:

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP): Text classification, sentiment analysis, and machine translation all involve making predictions based on text inputs.

- [Computer vision](/wiki/computer_vision): Tasks like image classification, object detection, and semantic segmentation involve predicting labels or properties for image data.

- [Recommendation systems](/index.php?title=Recommendation_systems&action=edit&redlink=1): Predicting user preferences to provide personalized recommendations for products, services, or content.

- [Medical diagnosis](/index.php?title=Medical_diagnosis&action=edit&redlink=1): Predicting disease outcomes or patient conditions based on medical records or imaging data.

- [Financial markets](/index.php?title=Financial_markets&action=edit&redlink=1): Forecasting stock prices or identifying potential investment opportunities.

## Explain Like I'm 5 (ELI5)

Imagine that you're learning how to sort objects by their shapes: circles, squares, and triangles. Your teacher shows you many examples of each shape, and you learn to recognize their differences. Now, when you see a new object, you can predict its shape based on what you've learned before. That's what machine learning does: it learns from examples (data) and then makes predictions on new, unseen data. This can be applied to many different situations, like understanding text, recognizing objects in images, or even suggesting a movie you might like!