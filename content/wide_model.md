---
title: "Wide model"
slug: "wide_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Wide Models in Machine Learning

Wide models, also known as wide learning or *wide & deep learning*, are a class of machine learning models that combine the strengths of both linear models and deep learning models. They were introduced by researchers at Google in a paper titled "Wide & Deep Learning for Recommender Systems" by Heng-Tze Cheng, Levent Koc, Jeremiah Harmsen, et al. in 2016.

## Motivation and Architecture

The primary motivation behind wide models is to address the limitations of both linear models and deep learning models by combining their respective strengths. Linear models, despite being relatively simple, can have strong generalization capabilities, especially when dealing with sparse high-dimensional data. On the other hand, deep learning models are powerful at capturing complex feature interactions but can struggle with memorization.

### Linear Model Component

The linear model component of a wide model is responsible for learning the interactions between input features, particularly when these features are sparse and high-dimensional. This component usually employs a linear regression or logistic regression algorithm, depending on the problem at hand.

### Deep Learning Component

The deep learning component of a wide model is responsible for capturing intricate relationships between features by learning hierarchical feature representations. This is achieved through the use of deep neural networks, which consist of multiple layers of interconnected neurons. The deep learning component can learn complex feature interactions and non-linear relationships within the data.

### Joint Optimization

The wide model combines the linear model and deep learning components, ultimately optimizing them together as a single model. This joint optimization allows for better generalization and memorization capabilities than using either component alone.

## Applications of Wide Models

Wide models have been successfully applied in various domains, including recommendation systems, natural language processing, and computer vision. Some notable applications include:

- [Recommender Systems](/index.php?title=Recommender_Systems&action=edit&redlink=1): Wide models have been particularly successful in large-scale recommendation systems, where both memorization of user-item interactions and generalization to new interactions are essential for accurate recommendations.

- [Natural Language Processing](/wiki/natural_language_processing): Wide models can be used for tasks such as text classification and sentiment analysis, leveraging the capabilities of both linear and deep learning models for improved performance.

- [Computer Vision](/wiki/computer_vision): Wide models can be applied to image classification and object detection tasks, combining the strengths of linear models for handling sparse high-dimensional features and deep learning models for capturing complex feature interactions.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of differently shaped LEGO bricks. A wide model in machine learning is like using two different strategies to build something with those bricks. One strategy (the linear model) is great at connecting bricks that are very different but may not build anything fancy. The other strategy (the deep learning model) is good at building complicated structures but might not always connect all the different bricks well.

By using both strategies together, you can build something that is both fancy and connects all the different bricks. This is what a wide model does in machine learning – it combines the strengths of two different approaches to learn from the data and make better predictions.