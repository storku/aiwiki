---
title: "L2 loss"
slug: "l2_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## L2 Loss in Machine Learning

L2 Loss, also known as Euclidean Loss or Squared Error Loss, is a widely-used loss function in machine learning and deep learning. It is a popular choice for regression tasks, where the goal is to predict a continuous output value. L2 Loss quantifies the difference between the predicted output and the true output, providing a measure of model accuracy. 

### Definition and Properties

The L2 Loss is defined as the sum of the squared differences between the predicted values and the true values. This loss function is sensitive to the scale of the errors, as squaring the differences magnifies the impact of larger errors. Some advantages of L2 Loss include its smoothness and differentiability, which makes it a suitable choice for gradient-based optimization algorithms like [Gradient Descent](/index.php?title=Gradient_Descent&action=edit&redlink=1).

### Applications

L2 Loss is commonly used in various machine learning algorithms and models, such as linear regression, support vector regression, and neural networks. Its properties make it well-suited for handling continuous, real-valued prediction tasks. Additionally, the L2 Loss is often utilized in combination with other loss functions, like [Cross-Entropy Loss](/index.php?title=Cross-Entropy_Loss&action=edit&redlink=1), to improve model performance in specific domains.

### Regularization

In machine learning, overfitting can be a significant issue, leading to poor generalization of the model to new data. To address this, L2 Loss can be extended to include a regularization term, known as L2 Regularization or [Ridge Regression](/index.php?title=Ridge_Regression&action=edit&redlink=1). This regularization term penalizes large model parameters, encouraging a simpler model that generalizes better to unseen data.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of points on a piece of paper, and you want to draw a straight line that goes through or near these points. L2 Loss is a way to measure how well the line fits the points. If the line goes right through each point, the L2 Loss is zero. If the line is far away from the points, the L2 Loss is high. By adjusting the line to minimize the L2 Loss, we can find the best-fitting line for our points. In machine learning, this concept helps us create models that can make accurate predictions based on the data.