---
title: "Class"
slug: "class"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) utilizes **classes**, which are groups of [categories](/index.php?title=Categories&action=edit&redlink=1) or [labels](/index.php?title=Labels&action=edit&redlink=1) used for categorizing [data points](/index.php?title=Data_points&action=edit&redlink=1) or instances. Classes play an integral role in various machine learning tasks like [classification](/wiki/classification) and [clustering](/wiki/clustering); they represent various objects, events, or phenomena we want to [model](/wiki/model) and make predictions on.

## What is a class?

Machine learning classes are collections of categories or labels used to label data points. For instance, [binary classification](/wiki/binary_classification) problems require two classes - positive and negative; [multiclass](/index.php?title=Multiclass&action=edit&redlink=1) problems may have multiple classes such as different kinds of flowers, animals, or vehicles.

[Supervised learning](/wiki/supervised_learning) involves the construction of a [model](/wiki/model) from [input](/index.php?title=Input&action=edit&redlink=1) data points and their associated [output](/index.php?title=Output&action=edit&redlink=1) labels or classes. Machine learning [algorithm](/index.php?title=Algorithm&action=edit&redlink=1) utilizes this information to construct an algorithm that can accurately predict the class of new data points or inputs. Ultimately, the goal is to minimize the discrepancy between predicted classes and actual ones.

[Unsupervised learning](/wiki/unsupervised_learning) involves no output labels or classes; rather, the goal is to uncover patterns or clusters in data based on similarities or differences. In this scenario, a machine learning algorithm may group data points into distinct classes or clusters based on certain [features](/wiki/feature) or characteristics.

## Types of classes

Machine learning involves various classes, depending on the problem and available data. Common classes include:

1. Binary Classes: Binary classes are used in [binary classification](/wiki/binary_classification) problems, where there are only two possible classes or labels such as positive and negative, yes and no, or true and false.

2. Multi-Class Classes: Multi-class classes are utilized in [multi-class classification](/wiki/multi-class_classification) problems, where there are more than two possible classes or labels, such as different kinds of flowers, animals, or vehicles.

3. Continuous Classes: Continuous classes are employed in [regression](/wiki/regression) problems where the output variable is a continuous value, such as the price of a house, temperature, or stock price.

4. Ordinal Classes: Ordinal classes are commonly employed in ordered classification problems where the classes have a natural ordering, such as low, medium and high or small, medium and large.

## Examples of classes

To better comprehend the significance of classes in machine learning, let's consider some examples:

1. Binary Classification: Assume we have a [dataset](/wiki/dataset) of emails and need to classify them as spam or not spam. In this case, there are two classes - spam and not spam.

2. Multi-class classification (MCC): Assume we have a dataset with images of various animals and want to classify them into distinct types such as cats, dogs, and birds. In this instance, there are multiple classes: cats, dogs, and birds.

3. Regression: Let us assume we have a dataset of houses with their prices and features such as number of rooms, size, and location. In this example, the output variable would be the price - an integer value.

4. Ordinal Classification: Let us assume we have a dataset with product prices, and want to classify them into different price ranges such as low, medium, and high. In this case, the classes have an ordered relationship based on price.

## Explain Like I'm 5 (ELI5)

Machine learning treats classes as labels or categories that we give things in order to better comprehend them. Just as we group toys based on color, emails, pictures of animals or houses can also be classified according to characteristics such as spam/not spam status, animal species (cats/dogs/birds), and house sizes - small/medium/large.