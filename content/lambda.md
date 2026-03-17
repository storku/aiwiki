---
title: "Lambda"
slug: "lambda"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Lambda in Machine Learning

Lambda is a term commonly used in machine learning and refers to a hyperparameter associated with regularization techniques. It is particularly relevant in the context of [linear regression](/wiki/linear_regression) and [logistic regression](/wiki/logistic_regression) models, where regularization is employed to prevent overfitting and improve the generalization ability of the model. The two most popular regularization techniques using lambda are L1 regularization (also known as Lasso) and L2 regularization (also known as Ridge).

## Regularization Techniques

### L1 Regularization (Lasso)

L1 regularization, or Lasso, adds a penalty term to the objective function in the form of the sum of the absolute values of the model's coefficients. This penalty term is multiplied by lambda, which controls the strength of the regularization. A larger lambda value will result in more significant regularization, potentially leading to sparser solutions, where some coefficients are shrunk to zero.

### L2 Regularization (Ridge)

L2 regularization, or Ridge, involves adding a penalty term to the objective function based on the sum of the squares of the model's coefficients. Like L1 regularization, this penalty term is multiplied by lambda, which determines the strength of the regularization. With L2 regularization, larger lambda values generally result in smaller coefficients but not necessarily zero coefficients.

## Model Selection and Tuning

In machine learning, selecting the appropriate value for lambda is critical for the performance of the model. Techniques such as [cross-validation](/wiki/cross-validation) and [grid search](/index.php?title=Grid_search&action=edit&redlink=1) are employed to find the best lambda value that balances the trade-off between model complexity and generalization ability. A smaller lambda value will result in less regularization, allowing for a more complex model, while a larger lambda value will enforce a simpler model to prevent overfitting.

## Explain Like I'm 5 (ELI5)

Lambda is like a helper in machine learning that makes sure a model doesn't get too focused on learning every tiny detail from the data. It helps the model to learn the most important patterns so it can make good predictions on new, unseen data. There are two popular ways to use lambda, called Lasso and Ridge, which have different ways of helping the model. Finding the right amount of help from lambda is important for the model to do its job well.