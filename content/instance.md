---
title: "Instance"
slug: "instance"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition of Instance in Machine Learning

An **instance** in machine learning refers to a single data point or example used in the process of training and evaluating machine learning models. Instances are essential components of the [dataset](/wiki/dataset) and are typically represented as a set of features and their corresponding labels or target values. They serve as the basis for learning patterns, making predictions, and evaluating the performance of machine learning algorithms.

### Features and Labels

An instance consists of two primary components:

1. **Features**: Also known as attributes or variables, features are the individual measurable properties or characteristics of the data point. They can be numerical (for example height, weight), categorical (for example color, type), or even more complex data types (for example images, text).

2. **Labels**: Also referred to as target values or outputs, labels are the ground truth associated with each instance. Labels are used in supervised learning tasks to guide the model's learning process and to evaluate its performance. In unsupervised learning tasks, labels are not provided.

## Role in Supervised and Unsupervised Learning

The role of instances in machine learning varies depending on the type of learning being performed, such as supervised and unsupervised learning.

### Supervised Learning

In [supervised learning](/wiki/supervised_learning), each instance includes both features and corresponding labels. The learning algorithm uses these instances to understand the relationship between the features and labels, ultimately generating a model that can predict labels for new, unseen instances. Examples of supervised learning tasks include classification (for example spam email detection) and regression (for example house price prediction).

### Unsupervised Learning

In [unsupervised learning](/wiki/unsupervised_learning), instances are composed of features only, without any associated labels. The learning algorithm seeks to identify patterns, structures, or relationships within the data without any prior knowledge of the desired output. Examples of unsupervised learning tasks include clustering (for example customer segmentation) and dimensionality reduction (for example principal component analysis).

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of different types of fruit. You want to teach a friend how to recognize each type of fruit. Each fruit in the box is like an **instance** in machine learning. The things you can see and feel, like the fruit's color, size, and shape, are the **features**. The name of the fruit, like "apple" or "banana", is the **label**.

In [supervised learning](/wiki/supervised_learning), you show your friend the fruits and tell them the name of each fruit. This way, they learn to recognize the fruits by their features and can tell you the name of a new fruit they haven't seen before.

In [unsupervised learning](/wiki/unsupervised_learning), you don't tell your friend the names of the fruits. Instead, they have to figure out on their own how to group the fruits based on their features, like putting all the round and red fruits together or all the long and yellow fruits together.