---
title: "Calibration layer"
slug: "calibration_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Calibration Layer in Machine Learning

Calibration is a crucial aspect of machine learning, specifically in the context of probabilistic models. The calibration layer refers to an additional component in a machine learning model designed to adjust the predicted probabilities so that they better match the true probabilities of the outcomes. This article discusses the concept of calibration in machine learning, its importance, and the methods used to achieve it.

### Importance of Calibration

In many real-world applications of machine learning, the quality of the predicted probabilities is as important as the quality of the predicted labels. For example, in medical diagnosis or risk assessment, decision-makers often rely on the predicted probabilities to make informed decisions. In these scenarios, well-calibrated probabilities are crucial. Poorly calibrated probabilities can lead to suboptimal decisions, potentially resulting in significant consequences.

### Calibration Techniques

There are several techniques used to calibrate machine learning models. Some of the most widely-used methods are:

- [Platt Scaling](/index.php?title=Platt_Scaling&action=edit&redlink=1): Platt Scaling is a popular calibration method, especially for Support Vector Machines (SVMs). It involves training a logistic regression model on the output of the original model to produce calibrated probabilities.

- [Isotonic Regression](/index.php?title=Isotonic_Regression&action=edit&redlink=1): Isotonic Regression is a non-parametric method that can be used to calibrate the probabilities of any classifier. It fits a piecewise constant, non-decreasing function to the predicted probabilities to achieve calibration.

- [Temperature Scaling](/index.php?title=Temperature_Scaling&action=edit&redlink=1): Temperature Scaling is primarily used for calibrating deep neural networks. It involves dividing the logits (outputs of the last layer before the softmax activation) by a learned scalar parameter, known as the temperature, and then applying the softmax activation to obtain calibrated probabilities.

### Evaluation of Calibration

Evaluating the calibration of a machine learning model typically involves comparing the predicted probabilities with the true probabilities of the outcomes. Commonly used metrics for this purpose include:

- [Brier Score](/index.php?title=Brier_Score&action=edit&redlink=1): The Brier Score is a measure of the mean squared difference between the predicted probabilities and the true probabilities. Lower Brier Scores indicate better calibration.

- [Calibration Curve](/index.php?title=Calibration_Curve&action=edit&redlink=1): A calibration curve is a graphical representation of the relationship between the predicted probabilities and the true probabilities. It allows for visual assessment of the calibration quality.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of differently colored candies, and you want to guess how many candies of each color are in the bag. You make some guesses based on what you see, but you might not be very accurate. The calibration layer in machine learning is like a friend who helps you make better guesses by giving you some hints. This way, your guesses about the number of candies of each color get closer to the actual numbers, which is helpful for making decisions based on those guesses.