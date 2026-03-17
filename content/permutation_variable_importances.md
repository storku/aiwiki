---
title: "Permutation variable importances"
slug: "permutation_variable_importances"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Permutation Variable Importance

Permutation Variable Importance (PVI) is a technique used in [machine learning](/wiki/machine_learning) to evaluate the importance of individual features in a predictive model. This method estimates the impact of a specific feature on the model's predictive accuracy by assessing the changes in model performance when the values of that feature are permuted randomly. The main advantage of PVI is its applicability to a wide range of models, including those that do not provide intrinsic feature importance measures, such as [random forests](/index.php?title=Random_forests&action=edit&redlink=1) and [gradient boosting machines](/index.php?title=Gradient_boosting_machines&action=edit&redlink=1).

### Background

PVI was first introduced by Leo Breiman in 2001, in the context of his work on [random forests](/index.php?title=Random_forests&action=edit&redlink=1). The technique has since been widely adopted and extended to various other machine learning algorithms. The primary motivation behind PVI is to provide a model-agnostic way to rank features based on their contribution to model performance, which can be useful for [feature selection](/index.php?title=Feature_selection&action=edit&redlink=1) and model interpretation.

### Methodology

The basic steps for computing Permutation Variable Importance are as follows:

1. Train a machine learning model using the original dataset.

2. Calculate the model's performance metric (for example accuracy, [mean squared error](/index.php?title=Mean_squared_error&action=edit&redlink=1), or [area under the curve](/wiki/area_under_the_curve)) on a test dataset.

3. For each feature:
Randomly permute the values of the feature in the test dataset, maintaining the original distribution of the other features.

4. Calculate the model's performance metric on the permuted test dataset.

5. Calculate the difference between the performance metric on the original and permuted test datasets.

Average the performance differences across all features to obtain the Permutation Variable Importance score.
The higher the PVI score for a given feature, the more important it is for the model's predictive accuracy.

### Limitations

Although PVI is a widely-used and powerful method for assessing feature importance, it has certain limitations:

- Computationally expensive: Calculating PVI can be time-consuming, especially for high-dimensional datasets and complex models.

- Correlated features: PVI may underestimate the importance of highly correlated features, as the permutation process may not significantly impact the model's performance when other correlated features can provide similar information.

- Model instability: The results of PVI may be sensitive to the specific model and training dataset used, which could lead to unreliable feature importance estimates.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of differently shaped and colored Lego bricks. You want to find out which bricks are the most important for building a specific structure. To do this, you first build the structure with all the bricks. Then, you take away one type of brick and replace it with another random type. If the structure becomes weaker or falls apart, it means the brick you took away was very important.

This is similar to Permutation Variable Importance in machine learning. We want to find out which pieces of information (features) are the most important for making good predictions. We do this by training a model with all the information and measuring how well it performs. Then, we mix up one piece of information at a time and see how much worse the model gets. The more the model's performance drops, the more important the mixed-up information is for making good predictions.