---
title: "Discrete feature"
slug: "discrete_feature"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Machine learning uses [features](/wiki/features), or characteristics or attributes of [input data](/index.php?title=Input_data&action=edit&redlink=1), as a basis for making predictions or decisions. Discrete features (also referred to as **categorical features**) are those which take on a limited set of values rather than providing an infinite range of values. For example, a [features](/wiki/feature) with values such as types of cars, types of animals and plants or types of food. Discrete feature is the opposite of [continuous feature](/wiki/continuous_feature).

## Definition

Discrete features refer to data elements whose values fall outside a finite or infinite set. Examples of discrete features include gender, hair color, occupation and zip code.

Discrete features differ from continuous ones, which can take any value within a specified range. Examples of continuous characteristics include age, height and temperature.

Machine learning often employs discrete features in [classification](/wiki/classification) problems, where the objective is to assign a category or [label](/wiki/label) to an input data point based on its features.

## Encoding

Before machine learning algorithms can utilize discrete features, they must first be encoded into a numerical format. There are various methods for [encoding](/index.php?title=Encoding&action=edit&redlink=1) discrete features into numerical representations; the two most popular approaches are [one-hot encoding](/wiki/one-hot_encoding) and [label encoding](/index.php?title=Label_encoding&action=edit&redlink=1).

One-hot encoding creates a binary variable for each category in the feature, where 1 indicates its presence and 0 its absence. For instance, if a dataset has three discrete hair color categories (blonde, brown, and black), one-hot encoding would generate three binary variables - one per category.

- [1, 0, 0] for blonde, [0, 1, 0] for brown and [0, 0, 1] for black

Label encoding is the process of assigning numerical labels to each feature within a dataset. For instance, if there are four categories within an occupation feature (doctor, lawyer, engineer and teacher), label encoding would assign these designations 0, 1, 2 and 3.

## Examples

Discrete features are widely employed in real-world machine learning applications. For instance, when classifying spam emails, the presence or absence of certain keywords or phrases within the email text can be used as discrete features to determine whether it's spam or not.

In a medical diagnosis problem, discrete features such as symptoms, medical history and test results can be used to predict an individual's diagnosis or disease outcome.

## Advantages and disadvantages

One advantage of discrete features in machine learning is their accessibility; they refer to tangible attributes or characteristics of the data and can be quickly interpreted and understood. Furthermore, discrete features are computationally efficient to process due to their limited number of possible values.

However, using discrete features can sometimes lead to [overfitting](/wiki/overfitting) in a machine learning model. Overfitting occurs when the model learns to fit its [training data](/wiki/training_data) too well, leading to inaccurate predictions when presented with new data. This issue arises if too much reliance is placed on discrete features which may be noisy or contain redundant information.

## Explain Like I'm 5 (ELI5)

Machine learning uses features to determine things such as whether an email is spam or not, or what kind of illness someone might have. Some features are called "discrete," meaning they can only be one among several options - like hair color or occupation - so we need to turn those choices into numbers so the computer can comprehend them, by giving each choice its own number or using 1's and 0's for representation. Discrete features are beneficial in that they help us better comprehend things but it is important not to overuse them or we might get incorrect answers.