---
title: "Class-imbalanced dataset"
slug: "class-imbalanced_dataset"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Class imbalance** is a frequent issue in [machine learning](/wiki/machine_learning), where one or more [classes](/wiki/class) in a [dataset](/wiki/dataset) have significantly fewer [examples](/wiki/example) than others. This imbalance makes it difficult for machine learning [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) to accurately predict the [minority class](/wiki/minority_class), leading to biased and inaccurate [models](/wiki/models).

## Defining a class-imbalanced dataset

A class-imbalanced dataset is one in which the distribution of examples across classes is highly unequal. That is, one or more classes have significantly fewer examples than other classes in the dataset.

Take, for example, a dataset of 1000 images of animals. Out of these 1000 images, 800 are of dogs, 100 are cats and the remaining 100 images are birds. This dataset has class imbalance because there is an uneven distribution across classes and no equal representation across them.

Machine learning algorithms can quantify class imbalance using various measures, such as the class frequency ratio or class imbalance ratio. These metrics enable us to gauge the severity of class imbalance within a dataset.

## Challenges posed by class imbalance

Class imbalance presents machine learning algorithms with several challenges. One of the most pressing issues is [biased](/wiki/bias_ethics_fairness) modeling towards classes in the majority.

When training a machine learning algorithm on an unbalanced dataset, it often prioritizes the [majority class](/wiki/majority_class) during [training](/wiki/training). This is because there are more examples of members of the majority group and thus more opportunities to learn from them. As such, the algorithm could misclassify members of the minority group, leading to inaccurate predictions and inaccurate models.

Another challenge lies in evaluating models trained on class-imbalanced datasets. Traditional evaluation [metrics](/wiki/metric), such as [accuracy](/wiki/accuracy), can be misleading since they do not take into account the class imbalance. For instance, a model that always predicts the majority class may have high accuracy on an unbalanced dataset but it won't be useful for practical applications.

## Addressing class imbalance

To address class imbalance in machine learning, various techniques can be employed. These are broadly divided into two categories: data-level techniques and algorithmic ones.

Data-level techniques refer to altering a dataset in order to achieve an even distribution across classes. Common data manipulation techniques include [undersampling](/wiki/undersampling), [oversampling](/wiki/oversampling) and [data augmentation](/wiki/data_augmentation). Undersampling involves removing examples from the majority class in order to achieve balance, while oversampling duplicates examples from minority classes. Data augmentation generates new examples by applying [transformations](/index.php?title=Transformations&action=edit&redlink=1) such as [rotation](/index.php?title=Rotation&action=edit&redlink=1) or [scaling](/wiki/scaling) to existing examples.

Algorithmic techniques involve altering the machine learning algorithm to accommodate for class imbalance. Common techniques include [cost-sensitive learning](/index.php?title=Cost-sensitive_learning&action=edit&redlink=1), [threshold moving](/index.php?title=Threshold_moving&action=edit&redlink=1), and [ensemble methods](/index.php?title=Ensemble_method&action=edit&redlink=1). Cost-sensitive learning involves assigning different costs to different classes during training in order to adjust for the imbalance; threshold moving alters the decision threshold of the model in order to increase sensitivity towards minority classes; and ensemble methods combine multiple models together in order to enhance performance for those in the minority group.

## Explain Like I'm 5 (ELI5)

A class-imbalanced dataset is one in which there are not enough examples of certain things for a computer to learn about them. For instance, if we give 800 pictures of dogs and only 100 pictures of cats and birds, the computer could become extremely good at recognising dogs but not very proficient with cats or birds.

To help the computer become more knowledgeable about all things, we can use different tricks. One such trick is to show it more pictures of cats and birds so that it can learn about them too.