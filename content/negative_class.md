---
title: "Negative class"
slug: "negative_class"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Negative Class in Machine Learning

The negative class in machine learning refers to the category or label assigned to instances in a dataset that do not possess the characteristics or features of interest. It is the counterpart to the [positive class](/wiki/positive_class), which represents instances with the desired attributes. The concept of negative and positive classes is particularly relevant in [binary classification](/wiki/binary_classification) problems, where the goal is to categorize data points into one of two distinct classes.

### Role in Supervised Learning

In [supervised learning](/wiki/supervised_learning), a machine learning algorithm is trained on a labeled dataset, where each instance is associated with a class or category. The model learns to identify patterns and relationships within the data, enabling it to accurately classify new, unlabeled instances. In binary classification tasks, the algorithm needs to differentiate between two classes, commonly referred to as the positive and negative classes. The positive class represents the presence of a specific characteristic or feature, while the negative class denotes its absence. For instance, in a spam detection problem, the positive class might be 'spam' emails, and the negative class would be 'non-spam' emails.

### Imbalanced Data and Handling Techniques

Often, datasets in real-world machine learning problems exhibit a significant imbalance between the number of instances in the positive and negative classes. This can lead to biased or suboptimal performance by the classification model, which may be more sensitive to the majority class. Several techniques have been developed to address this issue, including:

- [Under-sampling](/index.php?title=Under-sampling&action=edit&redlink=1): Randomly removing instances from the majority class to achieve a more balanced dataset.

- [Over-sampling](/index.php?title=Over-sampling&action=edit&redlink=1): Duplicating instances from the minority class or creating synthetic instances to increase its representation in the dataset.

- [Cost-sensitive learning](/index.php?title=Cost-sensitive_learning&action=edit&redlink=1): Assigning different misclassification costs to instances from the positive and negative classes, encouraging the model to pay more attention to the minority class.

## Explain Like I'm 5 (ELI5)

In machine learning, we often teach a computer to tell the difference between two things. We call these two things "classes." One class is called the "positive class," and the other is called the "negative class." The positive class has the features we're looking for, while the negative class doesn't.

Imagine you're sorting apples and oranges. The apples can be the positive class and the oranges can be the negative class. The computer will learn the differences between apples and oranges, so it can tell them apart. Sometimes there are more apples than oranges, and this can make it harder for the computer to learn. But we can use different techniques to help the computer learn better, even when there are a lot more apples than oranges.