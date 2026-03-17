---
title: "Out-of-bag evaluation (OOB evaluation)"
slug: "out-of-bag_evaluation_oob_evaluation"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Out-of-Bag Evaluation

Out-of-Bag (OOB) evaluation is a model validation technique commonly used in [ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1) methods, particularly in [bagging](/wiki/bagging) algorithms such as [Random Forests](/index.php?title=Random_Forests&action=edit&redlink=1). The main idea behind OOB evaluation is to use a portion of the training data that was not used during the construction of individual base learners, for the purpose of estimating the performance of the ensemble without resorting to a separate validation or test set.

### Background

In ensemble learning methods, the overall performance of a model is typically improved by combining the outputs of multiple base learners. In the case of bagging, these base learners are trained on different subsets of the training data, which are drawn using a sampling method known as [bootstrap sampling](/index.php?title=Bootstrap_sampling&action=edit&redlink=1).

Bootstrap sampling involves selecting random samples of the training data with replacement, meaning that some instances may be selected more than once, while others may not be selected at all. Consequently, a portion of the training data, known as the out-of-bag (OOB) instances, is left unused during the construction of each base learner.

### Procedure

The OOB evaluation process involves the following steps:

1. For each data point in the training set, identify the base learners for which it was an OOB instance.

2. Use these base learners to make predictions for the OOB instance.

3. Aggregate the predictions of these base learners to obtain the ensemble prediction for the OOB instance.

4. Compare the ensemble predictions to the true target values for all OOB instances, and compute the OOB error as a performance metric.

The OOB error can be calculated for various performance metrics, such as classification error, mean squared error, or area under the receiver operating characteristic (ROC) curve, depending on the type of problem at hand.

### Advantages and Limitations

One of the main advantages of OOB evaluation is that it allows for an unbiased estimate of the ensemble's performance without requiring a separate validation or test set. This makes it particularly useful in situations where the available data is limited or where cross-validation would be computationally expensive.

However, OOB evaluation may not always provide a reliable estimate of the ensemble's performance, especially when the size of the bootstrap samples is small or when the base learners exhibit high variance. In such cases, it may be necessary to resort to other model validation techniques, such as [cross-validation](/wiki/cross-validation) or [holdout validation](/index.php?title=Holdout_validation&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you have a group of friends, and each one of them has a bag with different toys. Your friends can only play with the toys that are inside their bags. Now, you want to find out how good they are at playing together without actually watching them play.

To do this, you can check the toys that were not in any of their bags (the out-of-bag toys) and ask your friends to play with them. By observing how well they play with these new toys, you can get an idea of how good they are at playing together without having to watch them play with all the toys.

In machine learning, out-of-bag evaluation is similar. It helps you understand how well a group of models (your friends) work together by looking at data they haven't seen before (the new toys). This way, you can estimate their performance without needing a separate set of data to test them on.