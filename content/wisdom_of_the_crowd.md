---
title: "Wisdom of the crowd"
slug: "wisdom_of_the_crowd"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Wisdom of the Crowd in Machine Learning

The *Wisdom of the Crowd* is a phenomenon that refers to the collective intelligence and decision-making ability of a group, which often leads to more accurate and reliable outcomes than individual judgments. In the context of machine learning, this concept is employed to improve the performance of algorithms by aggregating the predictions of multiple models, a technique commonly known as [ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1).

### Historical Background

The idea of the Wisdom of the Crowd traces back to the early 20th century, when British statistician Sir Francis Galton conducted an experiment involving the estimation of an ox's weight by a large number of individuals. Surprisingly, the average estimate was remarkably close to the actual weight, leading Galton to conclude that the collective intelligence of a group could surpass that of any single expert. This observation has since been extended to various domains, including machine learning.

### Ensemble Learning

Ensemble learning is a machine learning technique that leverages the Wisdom of the Crowd concept by combining multiple models or algorithms to make better predictions. It can be divided into two main categories:

#### Homogeneous Ensembles

In homogeneous ensembles, multiple instances of the same model or algorithm are trained on different subsets of the data or with different parameter settings. Examples of homogeneous ensemble methods include:

- [Bagging](/wiki/bagging): Short for "Bootstrap Aggregating," bagging is an ensemble method that trains several instances of the same algorithm on different, randomly sampled subsets of the training data, with replacement. The final prediction is obtained by averaging the predictions of all instances.

- [Boosting](/wiki/boosting): Boosting is a sequential ensemble method that aims to improve the performance of weak learners by iteratively training them on weighted versions of the data, where weights are updated based on the errors made by previous learners.

#### Heterogeneous Ensembles

Heterogeneous ensembles, on the other hand, employ different types of models or algorithms to make predictions. Examples include:

- [Stacking](/index.php?title=Stacking&action=edit&redlink=1): In stacking, multiple base models are trained on the same dataset, and their predictions are used as input to a higher-level, or meta-model, which makes the final prediction.

- [Voting](/index.php?title=Voting&action=edit&redlink=1): Voting ensembles combine the predictions of multiple base models by either taking the majority vote (for classification) or averaging the predictions (for regression).

### Benefits of Wisdom of the Crowd in Machine Learning

The primary benefits of employing the Wisdom of the Crowd in machine learning through ensemble methods include:

- Improved performance: Combining multiple models can lead to better generalization and reduced overfitting, as each model may capture different aspects of the data or compensate for other models' weaknesses.

- Increased stability: Ensembles are more robust to noise and outliers in the data, as the influence of such instances is likely to be averaged out across multiple models.

- Enhanced interpretability: Ensembles can provide insights into the relationships between different models or algorithms and help identify the most important features for a given problem.

## Explain Like I'm 5 (ELI5)

Imagine you have a group of friends trying to guess the number of jelly beans in a jar. Each friend might have a different guess, but when you average all their guesses together, you often get a surprisingly accurate answer. This is the idea behind the Wisdom of the Crowd.

In machine learning, we can use this same idea to make our computer programs smarter. Instead of having just one program trying to solve a problem, we can have several programs working together. These programs can be different from each other or even use different ways to learn. When they work together and combine their guesses, they can often find a better answer than any one program could find on its own. This is called ensemble learning, and it's a way of using the Wisdom of the