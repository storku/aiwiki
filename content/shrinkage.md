---
title: "Shrinkage"
slug: "shrinkage"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Shrinkage** in [machine learning](/wiki/machine_learning) is a regularization technique that aims to prevent overfitting in statistical models by adding a constraint or penalty to the model's parameters. Shrinkage methods reduce the complexity of the model by pulling its coefficient estimates towards zero, leading to more robust and interpretable models. Popular shrinkage methods include Ridge Regression and Lasso Regression.

## Shrinkage Methods

### Ridge Regression

[Ridge Regression](/index.php?title=Ridge_Regression&action=edit&redlink=1) (or Tikhonov regularization) is a linear regression technique that introduces a shrinkage penalty to the model's objective function. The penalty term is the L2-norm (squared Euclidean norm) of the regression coefficients multiplied by a regularization parameter, λ. By increasing λ, the model's complexity is reduced, and the coefficients are forced towards zero, resulting in a smoother and more stable model. Ridge Regression is particularly useful when multicollinearity is present in the dataset.

### Lasso Regression

[Lasso Regression](/index.php?title=Lasso_Regression&action=edit&redlink=1) (Least Absolute Shrinkage and Selection Operator) is another linear regression technique that applies a shrinkage penalty to the model's objective function. Unlike Ridge Regression, Lasso Regression uses the L1-norm (sum of absolute values) of the regression coefficients as the penalty term. The regularization parameter, λ, controls the strength of the penalty, and as λ increases, the coefficients are forced towards zero. Lasso Regression has the added advantage of performing feature selection by setting some coefficients exactly to zero, making the model more interpretable.

### Elastic Net

[Elastic Net](/index.php?title=Elastic_Net&action=edit&redlink=1) is a regularization technique that combines both Ridge and Lasso Regression penalties. Elastic Net introduces a convex combination of the L1 and L2 penalty terms, controlled by the parameter α. When α equals 0, Elastic Net is equivalent to Ridge Regression, and when α equals 1, it is equivalent to Lasso Regression. By adjusting α, Elastic Net can balance the advantages of both Ridge and Lasso Regression, providing better model performance in certain cases.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to make a paper airplane. You have a lot of different folds you can make, and you're not sure which combination will make the best airplane. You start by making a really complicated airplane with lots of folds, but it doesn't fly very well because it's too heavy and hard to understand.

Shrinkage in machine learning is like removing some of the unnecessary folds from your airplane to make it simpler and easier to understand. By doing this, your airplane becomes lighter and flies better. In machine learning, removing some of the unnecessary parts of the model (the folds) can help it make better predictions and be easier to understand.