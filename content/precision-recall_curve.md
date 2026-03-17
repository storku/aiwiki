---
title: "Precision-recall curve"
slug: "precision-recall_curve"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Precision-Recall Curve in Machine Learning

In machine learning, the precision-recall curve is a graphical representation that illustrates the performance of a binary classification model. The curve is used to assess the trade-off between two important evaluation metrics: [precision](/wiki/precision) and [recall](/wiki/recall).

### Definition of Precision and Recall

- **Precision** refers to the proportion of true positive predictions out of all positive predictions made by the model. High precision indicates that the model is making fewer false positive predictions. Precision is defined as:

 Precision = (True Positives) / (True Positives + False Positives)

- **Recall** refers to the proportion of true positive predictions out of all actual positive instances in the dataset. High recall indicates that the model is capturing a larger portion of the positive instances. Recall is defined as:

```
 Recall = (True Positives) / (True Positives + False Negatives)

```

### Construction of the Precision-Recall Curve

The precision-recall curve is constructed by plotting recall on the x-axis and precision on the y-axis. Each point on the curve represents a unique combination of precision and recall values at different classification thresholds. By adjusting the threshold, the balance between precision and recall can be fine-tuned, allowing model developers to prioritize either metric depending on the specific application.

A model with perfect classification would have a precision-recall curve that reaches a precision of 1 at a recall of 1. In practice, this is rarely achievable, and the curve will typically appear as a trade-off between the two metrics.

### Applications and Interpretation

The precision-recall curve is particularly useful when dealing with imbalanced datasets, where one class is significantly underrepresented compared to the other. In such cases, accuracy or the [receiver operating characteristic (ROC) curve](/index.php?title=Receiver_operating_characteristic_(ROC)_curve&action=edit&redlink=1) may not provide a comprehensive assessment of model performance. The precision-recall curve helps to identify the optimal balance between precision and recall for a given classification problem.

When comparing different models, the one with a curve that dominates the others, i.e., has higher precision at any given recall value, is considered superior. The [area under the curve (AUC)](/index.php?title=Area_under_the_curve_(AUC)&action=edit&redlink=1) can also be calculated to provide a single numeric value for model comparison.

## Explain Like I'm 5 (ELI5)

Imagine you're a detective trying to find lost puppies. Every time you think you've found one, you can either be right (a real lost puppy) or wrong (a false alarm, like a stuffed animal). Precision is like how often you're right when you say you found a lost puppy, and recall is like how many of the actual lost puppies you find.

The precision-recall curve is a graph that helps you understand how well you're doing at finding lost puppies. On this graph, you can see how good you are at finding the puppies without mistaking stuffed animals for them (precision) and how many of the lost puppies you're able to find (recall). By looking at this graph, you can figure out the best balance between being right about your finds and finding as many puppies as possible.