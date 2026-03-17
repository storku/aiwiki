---
title: "Objective function"
slug: "objective_function"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Objective Function in Machine Learning

The objective function, also known as the loss function or cost function, is a key concept in [machine learning](/wiki/machine_learning) and [optimization](/index.php?title=Optimization&action=edit&redlink=1) problems. It is a mathematical function that quantifies the discrepancy between the predicted output and the true output (ground truth) for a given input. The goal of machine learning algorithms is to minimize the value of the objective function to improve the model's performance.

### Definition and Purpose

In machine learning, an objective function (mathematically denoted as *J* or *L*) maps the space of possible model parameters (weights and biases) to a scalar value representing the quality of the model. The lower the value of the objective function, the better the model's predictions align with the ground truth. This optimization problem involves searching for the optimal set of parameters that minimize the objective function, thus allowing the model to make accurate predictions.

The primary purpose of the objective function is to guide the learning process by providing a quantitative measure of model performance. It enables the comparison of different models and their parameter configurations, allowing researchers and practitioners to select the best model for a specific task.

### Types of Objective Functions

Objective functions can be broadly categorized into two types:

#### Regression Objective Functions

In regression tasks, the goal is to predict a continuous value. Common regression objective functions include:

- **Mean Squared Error (MSE)**: The average of the squared differences between the predicted and true values.

- **Mean Absolute Error (MAE)**: The average of the absolute differences between the predicted and true values.

- **Huber Loss**: A combination of MSE and MAE that is less sensitive to outliers.

#### Classification Objective Functions

In classification tasks, the goal is to predict discrete class labels. Common classification objective functions include:

- **Cross-Entropy Loss**: Measures the dissimilarity between the predicted probabilities and true probabilities of the class labels.

- **Hinge Loss**: Used primarily in [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1), it quantifies the margin between the predicted class and the true class.

- **Kullback-Leibler Divergence**: Measures the difference between two probability distributions, often used in cases involving generative models.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to teach a robot to play basketball. The robot has a built-in computer that can control how it moves and shoots the ball. You want to help the robot learn the best way to play, so you need a way to measure how good it is at playing basketball.

The objective function is like a scorecard that tells you how well the robot is playing. It calculates a number based on how close the robot's shots are to the hoop. The lower the number, the better the robot is at playing basketball.

Your goal is to help the robot get better by finding the best settings for its built-in computer. By comparing the objective function's score for different settings, you can figure out which settings help the robot play better. Once you find the best settings, the robot will be a great basketball player!