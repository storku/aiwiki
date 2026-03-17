---
title: "Decision boundary"
slug: "decision_boundary"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Decision Boundary in Machine Learning

### Definition

In machine learning, a **decision boundary** is the surface that separates different classes or categories in a classification problem. It represents the boundary in the feature space where the algorithm makes decisions to classify input data points into their respective categories, based on the chosen classification model. A well-defined decision boundary can aid in accurate classification, while a poorly defined one may result in misclassification.

### Types of Decision Boundaries

Decision boundaries can be broadly classified into two types, based on their shape:

1. **Linear Decision Boundary:** A linear decision boundary is a straight line or a flat plane that separates the feature space into distinct classes. It is commonly employed in linear classification algorithms, such as [Logistic Regression](/index.php?title=Logistic_Regression&action=edit&redlink=1) and [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) with linear kernels. Linear decision boundaries are computationally efficient and can provide accurate classification results when the data is linearly separable.

1. **Non-linear Decision Boundary:** A non-linear decision boundary is a curved or irregular surface that separates the feature space into distinct classes. This type of boundary is typically used in non-linear classification algorithms, such as [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) with non-linear kernels, [Neural Networks](/index.php?title=Neural_Networks&action=edit&redlink=1), and [Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1). Non-linear decision boundaries can effectively handle more complex datasets where linear boundaries are insufficient.

### Factors Affecting Decision Boundary

Several factors can affect the shape, complexity, and effectiveness of a decision boundary, including:

- **Choice of Algorithm:** Different machine learning algorithms have distinct ways of defining decision boundaries. The algorithm used can greatly impact the overall performance of the classifier.

- **Feature Space Dimensionality:** The dimensionality of the feature space can influence the decision boundary's complexity. In higher-dimensional spaces, the decision boundary may become increasingly difficult to visualize and comprehend.

- **Noise and Outliers:** Noise and outliers in the data can affect the decision boundary's stability and precision. Robust algorithms or data preprocessing techniques may be necessary to mitigate their impact.

- **Model Complexity:** The complexity of the chosen model can influence the decision boundary's ability to generalize to new data points. Overly complex models can lead to overfitting, while overly simple models can result in underfitting.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you have to sort different shapes into two separate boxes: one box for circles and another box for squares. The **decision boundary** is like the imaginary line that separates the two boxes. If a shape falls on one side of the line, you put it in the circle box, and if it falls on the other side, you put it in the square box.

In machine learning, the decision boundary helps the computer decide which category or class a piece of data belongs to, based on its features. The decision boundary can be a simple straight line or a more complicated shape, depending on how the data is organized and what kind of algorithm is used to analyze it. The better the decision boundary separates the different classes, the more accurate the machine learning model will be at classifying new data.