---
title: "Label"
slug: "label"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), a **label** refers to the desired output, or the "correct" value, for a particular instance in a dataset. Labels are used in [supervised learning](/wiki/supervised_learning) algorithms, where the goal is to learn a mapping from input data to output data, based on a set of examples containing input-output pairs. These output values in the training dataset are known as labels. The process of assigning labels to instances in the training dataset is called **labeling** or **annotation**.

## Label Types

Labels can be of different types, depending on the nature of the problem being solved by the machine learning algorithm. The two main types are:

### Categorical

Categorical labels are used when the machine learning task is to classify instances into one of several distinct categories. The categories can be unordered, as in [classification](/wiki/classification) problems, or ordered, as in [ordinal regression](/index.php?title=Ordinal_regression&action=edit&redlink=1) problems. In classification problems, the labels are often called **classes**.

### Numerical

Numerical labels are used when the machine learning task is to predict a continuous value, as in [regression](/wiki/regression) problems. These labels are real numbers, and the goal of the algorithm is to minimize the error between the predicted value and the actual label.

## Label Quality

The quality of the labels in a training dataset plays a crucial role in the success of a machine learning algorithm. Poorly labeled data can lead to incorrect or biased models, which, in turn, can result in reduced performance or even harmful outcomes when deployed. Label quality can be impacted by several factors:

### Noise

Noise refers to random errors or inconsistencies in the labels, which can be introduced during the labeling process. Noise can arise due to human error, measurement errors, or other sources of variability.

### Ambiguity

Ambiguity occurs when it is unclear which label should be assigned to an instance, often due to inherent uncertainty in the data or the task itself. Ambiguity can result in inconsistent labeling and can make it challenging for the algorithm to learn the correct mapping from inputs to outputs.

### Bias

Bias refers to systematic errors in the labels, which can lead to biased models. Bias can be introduced during the labeling process due to human prejudice, sampling errors, or other factors that systematically favor one label over another.

## Explain Like I'm 5 (ELI5)

In machine learning, a label is like the answer to a question. When we teach a computer how to do something, like tell the difference between cats and dogs, we give it lots of examples of cats and dogs with the correct answer (label) attached to each example. The computer uses these examples to learn the patterns that help it tell cats and dogs apart. So, labels are the correct answers we provide to help the computer learn from examples.