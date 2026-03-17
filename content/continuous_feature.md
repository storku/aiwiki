---
title: "Continuous feature"
slug: "continuous_feature"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) usually divides [data](/index.php?title=Data&action=edit&redlink=1) into two primary types: **continuous** and **[categorical](/wiki/categorical) ([discrete](/index.php?title=Discrete&action=edit&redlink=1))**. Continuous features, also referred to as numerical or quantitative features, refer to variables that take on a range of numeric values like age, weight, and height. These features are commonly employed in [regression models](/wiki/regression_model) that aim to predict an [output](/index.php?title=Output&action=edit&redlink=1) variable such as sales or revenue based on [input](/index.php?title=Input&action=edit&redlink=1) [features](/wiki/feature). Understanding continuous features is critical for creating successful [machine learning models](/wiki/machine_learning_models).

## Characteristics of Continuous Features

Continuous features can be distinguished from other types of features by a few distinctive characteristics. These characteristics include:

Continuous features take on a range of numeric values. They can be measured along a scale such as Celsius or Fahrenheit temperature scales. Furthermore, continuous features may take any value within their range including decimals and fractions.

- Continuous features often have an amorphous range, meaning there are no strict upper or lower limits to the values they can take on.

These characteristics make continuous features ideal for use in machine learning models, as they offer a great deal of freedom when making predictions.

## Examples of Continuous Features

Continuous features can be found in a wide variety of datasets across numerous fields. Examples of continuous features include:

- Age: This characteristic of demographic datasets often persists as a continuous variable and can be used to make predictions about health outcomes or retirement savings levels. Age can take any value within an established range, allowing researchers to make accurate projections about potential retirement assets or health outcomes.

- Temperature: Temperature is a continuous feature that can be used to make predictions about weather patterns or crop yields.

- Income: Income can also be used as an unbiased indicator to predict consumer behavior or creditworthiness.

- Time: Time is an objective feature that can be utilized to make accurate predictions about things like traffic patterns or stock prices.

These are just a few examples of the many types of continuous features found in real-world datasets.

## Preprocessing Continuous Features

Before continuous features can be utilized in a machine learning model, they often need to be preprocessed in order to preserve their usable format. Common [preprocessing](/wiki/preprocessing) steps for continuous features include:

- [Scaling](/wiki/scaling): Continuous features may need to be scaled so they have similar magnitudes as other features in the [dataset](/wiki/dataset). For instance, if one feature measures in dollars and another in millimeters, then these measurements need to be adjusted for equivalent magnitudes.

- [Normalization](/wiki/normalization): Continuous features may need to be normalized in order to fit within the model being used. For instance, some models assume features are normally distributed, so transform continuous features according to this assumption.

- Imputing Missing Values: If a continuous feature contains missing values, these may need to be imputed in order to use the feature in a machine learning model. There are various techniques for doing so, such as [mean imputation](/index.php?title=Mean_imputation&action=edit&redlink=1), [median imputation](/index.php?title=Median_imputation&action=edit&redlink=1) and [regression imputation](/index.php?title=Regression_imputation&action=edit&redlink=1).

Preprocessing is an essential step in using continuous features effectively, as it can have a substantial effect on the performance of the machine learning model.

## Explain Like I'm 5 (ELI5)

Continuous features are like the numbers we use every day. We can measure things like age, weight and height using continuous features; these measurements enable us to make predictions about things such as potential earnings or health. But before we use these measurements for prediction purposes, they need to be organized in a format the computer can understand - like organizing our toys before playing with them!