---
title: "Attribute"
slug: "attribute"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
  - "Not_Edited"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

An attribute, also referred to as a feature, is an identifiable property or characteristic of something being observed. In machine learning applications, attributes are employed to describe data instances or examples that feed into the model for training purposes. The objective is to extract meaningful and pertinent information from these attributes that can be used to make predictions about unseen data sets.

Machine learning uses attributes (also referred to as features or variables) as measurable characteristics of an object or phenomenon that can be used to characterize it and predict its behavior. Attributes may be quantitative (numerical) or categorical (descriptive), and they often serve as input variables in predictive models to make predictions or classifications.

For instance, in a dataset of housing prices, attributes might include the number of bedrooms, square footage of the home, its neighborhood location and age. These details are then utilized to train a machine learning model that predicts the price tag on an unseen new home based on those attributes.

## Types of Attributes

Machine learning encompasses two primary types of attributes: numerical and categorical.

Numeric attributes refer to numbers with a numerical value that can be either discrete or continuous. For instance, the number of bedrooms in a home is considered a discrete numerical attribute while its square footage is an ongoing continuous number.

Categorical attributes, on the other hand, take on a limited set of possible values. For instance, neighborhood is such an attribute. Values can either be nominal (meaning no inherent order exists) or ordinal (meaning there is one inherent order present).

Additionally, attributes can be binary in nature - taking one of two possible values such as true/false or yes/no.

## Importance of Attributes

Selecting attributes is an integral step in developing machine learning models. The quality and relevance of these chosen attributes will have a substantial effect on the performance and precision of the model.

Selecting the correct attributes is essential in building an accurate predictive model. In some cases, certain attributes may be more pertinent than others and it's essential to comprehend their relationship with your target variable in order to select those that are most pertinent.

## Preprocessing Attributes

Before attributes can be utilized in a machine learning model, they typically need to go through preprocessing. This usually involves altering the data in various ways so that it is in an accessible format for the model to use.

Categorical attributes must be encoded as numerical values, such as by converting the neighborhood attribute into a set of binary variables (known as one-hot encoding). Numerical attributes may need to be normalized or scaled to a specific range so they have similar dimensions since some machine learning algorithms require similar input data.

## Explain Like I'm 5 (ELI5)

Attributes in machine learning are like bits of information about objects we wish to understand. For instance, if we wanted to understand houses, we might look at characteristics such as how many rooms it has, its size or where it's situated. By feeding this data into the computer program, we teach it how to make predictions about things it hasn't seen before - like the price tag on a new house.

Sometimes, we must adjust information slightly so the computer can better comprehend it. For instance, if we want to determine which neighborhood a house is in, we might change its name from "Brooklyn" to something simpler like "1 or 2," making it simpler for the computer to process and utilize this data when making predictions.