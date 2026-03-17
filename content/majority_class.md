---
title: "Majority class"
slug: "majority_class"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), the majority class is the more common [label](/wiki/label) in a [dataset that is imbalanced](/wiki/class-imbalanced_dataset). For example, in a [dataset](/wiki/dataset) where there are 80% "yes" and 20% "no", "yes" is the majority [class](/wiki/class). The opposite of the majority class the [minority class](/wiki/minority_class).

## Impact on Model Performance

A majority class in a dataset can have an enormous effect on the performance of a [machine learning model](/wiki/machine_learning_model). This occurs because the model may be [biased](/wiki/biased) towards predicting the majority class even when there is more emphasis placed on a minority one for solving specific problems. This is known as a [class imbalance](/wiki/class_imbalance) and may lead to suboptimal performance if not addressed properly.

When training a machine learning model on [imbalanced data](/wiki/imbalanced_data), the model often becomes biased towards the majority class. This occurs because the model is designed to maximize its [accuracy](/wiki/accuracy) by correctly classifying the majority. As such, the model may neglect or misclassify the minority population, leading to subpar performance.

Class imbalance can be addressed using various techniques, such as [oversampling](/wiki/oversampling) the minority class, [undersampling](/wiki/undersampling) the majority class or using both together. Another approach relies on [weighting](/index.php?title=Weighting&action=edit&redlink=1); where [misclassifying](/index.php?title=Misclassify&action=edit&redlink=1) instances from one group at a higher cost than misclassifying from another. This can be accomplished either through cost-sensitive [learning algorithms](/index.php?title=Learning_algorithm&action=edit&redlink=1) or altering the [loss function](/wiki/loss_function) used during training.

## Examples

One common application of machine learning to [medical diagnosis](/index.php?title=Medical_diagnosis&action=edit&redlink=1) involves the majority class: "healthy" and the minority class "ill". To accurately predict which class belongs where is really important. Misclassifying an ill patient as healthy can have devastating results.

Another example is [fraud detection](/index.php?title=Fraud_detection&action=edit&redlink=1), where the majority class might be "not fraud" and the minority "fraud." We need to accurately predict this minority class because misclassifying fraudulent transactions as not fraud can cause substantial financial losses.

## Explain Like I'm 5 (ELI5)

Imagine having a large basket filled with various colored candies - red, green, blue, yellow and so on. There is more red candy than candies of other colors. In this situation, the majority class would be the red candy.

Machine learning relies on the concept of the majority class, which refers to the class that occurs most often within a dataset. Just like in the candy example, this machine learning model seeks out the class that occurs most frequently and uses that data to make predictions about new data sets.

Imagine trying to guess the color of candy inside a closed bag without looking. If most of the candies in the basket are red, you might assume that whatever's inside will also be red. That's how a machine learning model can use data from a majority class to make predictions!