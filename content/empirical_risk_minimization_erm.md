---
title: "Empirical risk minimization (ERM)"
slug: "empirical_risk_minimization_erm"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Empirical Risk Minimization (ERM)

Empirical Risk Minimization (ERM) is a fundamental concept in the field of [machine learning](/wiki/machine_learning) and [statistical learning theory](/index.php?title=Statistical_learning_theory&action=edit&redlink=1). ERM is a strategy that aims to minimize the risk of making incorrect predictions by selecting the best hypothesis from a given hypothesis set. The risk is defined as the expected loss incurred when using the selected hypothesis to make predictions on unseen data. ERM is closely related to other learning frameworks, such as [Structural Risk Minimization](/index.php?title=Structural_Risk_Minimization&action=edit&redlink=1) (SRM) and [regularization](/wiki/regularization).

### Formal Definition

Given a hypothesis space H, consisting of functions h: X → Y, where X represents the input space and Y the output space, and a loss function L: Y × Y → R⁺, which measures the discrepancy between the true output y and the predicted output ŷ, the goal of ERM is to find a hypothesis h ∈ H that minimizes the empirical risk R_emp(h), defined as:

R_emp(h) = (1/n) ∑ L(y_i, h(x_i))

where (x_i, y_i) are the observed data points in a training set of size n.

ERM selects the hypothesis h* that minimizes the empirical risk:

h* = argmin_{h ∈ H} R_emp(h)

### ERM and Overfitting

ERM can be susceptible to [overfitting](/wiki/overfitting) when applied to complex hypothesis spaces. Overfitting occurs when the learned hypothesis performs well on the training data but generalizes poorly to unseen data. One way to address this issue is to use regularization techniques, such as [Lasso](/index.php?title=Lasso&action=edit&redlink=1) or [Ridge Regression](/index.php?title=Ridge_Regression&action=edit&redlink=1), which add a penalty term to the empirical risk to enforce constraints on the hypothesis complexity.

### Trade-off Between Bias and Variance

In ERM, there is a trade-off between [bias](/wiki/bias) and [variance](/index.php?title=Variance&action=edit&redlink=1), which are two sources of error in machine learning models. Bias refers to the error caused by using a simplified hypothesis that does not capture the true relationship between the input and output variables. Variance refers to the error caused by the model's sensitivity to small fluctuations in the training data. Balancing the bias-variance trade-off is crucial for achieving good generalization performance in ERM.

## Explain Like I'm 5 (ELI5)

Imagine you have a box of different tools, and you want to find the best tool to fix a broken toy. Empirical Risk Minimization (ERM) is like a method that helps you pick the best tool from the box by trying each one on a few other broken toys you have. You choose the tool that fixes the most toys as the best one.

However, sometimes the best tool for those few toys might not work well for other broken toys you haven't tested yet. In machine learning, this is called overfitting. To avoid this problem, you can add some rules to make sure you don't pick a tool that's too specialized and can only fix a specific kind of toy. These rules help you find a tool that works well for most toys, even the ones you haven't tested yet.