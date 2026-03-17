---
title: "Feature importances"
slug: "feature_importances"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Feature importances refer to the quantification of the relative contribution of each feature (or input variable) to the overall predictive performance of a [machine learning](/wiki/machine_learning) model. Identifying and understanding the importance of features in a model can aid in model interpretation, feature selection, and ultimately, the improvement of model performance. Various techniques have been proposed to assess the significance of features, including methods such as permutation importance, Gini importance, and model-specific approaches.

## Permutation Importance

### Overview

Permutation importance is a model-agnostic method to estimate the importance of a feature by measuring the decrease in model performance when the values of that feature are randomly shuffled. The rationale behind this technique is that if a feature is important for the model's predictions, then permuting its values should lead to a noticeable drop in the model's performance.

### Procedure

To calculate the permutation importance for a given feature, the following steps are performed:

1. Train a machine learning model using the original dataset.

2. Evaluate the model performance using a predefined evaluation metric, such as mean squared error for regression tasks or accuracy for classification tasks. This serves as the baseline performance.

3. Randomly shuffle the values of the feature under investigation.

4. Re-evaluate the model performance on the permuted dataset.

5. Calculate the importance score as the difference between the baseline performance and the performance on the permuted dataset.

6. Restore the original feature values and repeat the process for each feature.

### Limitations

Permutation importance may be computationally expensive for large datasets or models with a high number of features, as the model needs to be re-evaluated for each feature. Additionally, this method may yield misleading results when features are correlated, as the importance of correlated features can be distributed across the group, resulting in an underestimation of their individual importances.

## Gini Importance

### Overview

Gini importance, also known as Mean Decrease in Impurity (MDI), is a measure of feature importance specific to [decision tree](/wiki/decision_tree)-based models, such as [Random Forest](/index.php?title=Random_Forest&action=edit&redlink=1) and [Gradient Boosting Machines](/index.php?title=Gradient_Boosting_Machines&action=edit&redlink=1) (GBM). It is based on the Gini impurity index, which quantifies the purity of a node in a decision tree.

### Procedure

During the construction of a decision tree, each split is selected to minimize the Gini impurity of the resulting child nodes. The Gini importance of a feature is calculated by summing the decrease in impurity, weighted by the number of samples reaching the split, for all splits that use the feature. The Gini importance of a feature in an ensemble of trees (for example Random Forest or GBM) is computed as the average of the Gini importances across all trees.

### Limitations

Gini importance may be biased towards features with a large number of categories or high cardinality, as these features are more likely to create pure splits in the decision tree. Additionally, Gini importance may not accurately reflect the importance of features in the presence of correlated features, as it tends to distribute the importance across the group of correlated features.

## Explain Like I'm 5 (ELI5)

Feature importances tell us how important each input (or feature) is when a computer is trying to make a prediction or decision. Imagine you have a basket of different fruits, and you want to teach a robot to predict which fruit is the tastiest. You might use features like color, shape, and size to help the robot decide. Feature importances help you understand which of these features (color, shape, or size) is the most important in making a good prediction. This can help you focus on the most important features and make better predictions in the future.