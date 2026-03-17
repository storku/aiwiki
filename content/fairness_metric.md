---
title: "Fairness metric"
slug: "fairness_metric"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Fairness Metric in Machine Learning

In the field of machine learning, fairness is an increasingly important consideration. The concept of fairness relates to the equitable treatment of different groups by algorithms and the avoidance of discriminatory outcomes. Fairness metrics are quantitative measures that help assess the fairness of a machine learning model, thus allowing researchers and practitioners to mitigate potential biases.

### Definition

A fairness metric in machine learning is a mathematical formulation designed to evaluate and quantify the degree to which a model's predictions are fair and unbiased. These metrics are employed during the development and evaluation of machine learning models to ensure that the predictions made by the algorithms do not disproportionately disadvantage or benefit specific groups of individuals, such as those defined by gender, race, or age. By incorporating fairness metrics, practitioners can reduce the impact of systemic biases and promote more equitable outcomes in various applications, such as hiring, lending, and healthcare.

### Common Fairness Metrics

There are several common fairness metrics used in machine learning, each with its strengths and weaknesses. Some of the most widely-used metrics include:

- **[Statistical Parity](/index.php?title=Statistical_Parity&action=edit&redlink=1)**: This metric evaluates the difference in the probability of positive outcomes between two groups. A model is considered fair if the difference is minimal.

- **[Equalized Odds](/index.php?title=Equalized_Odds&action=edit&redlink=1)**: This metric requires that the true positive rate and false positive rate are similar for all groups. This ensures that the model is equally accurate and erroneous across different groups.

- **[Equal Opportunity](/index.php?title=Equal_Opportunity&action=edit&redlink=1)**: A special case of equalized odds, this metric focuses on the true positive rate only. It requires that the model correctly identifies positive instances at the same rate for all groups.

- **[Individual Fairness](/index.php?title=Individual_Fairness&action=edit&redlink=1)**: This metric stipulates that similar individuals should receive similar predictions, regardless of their group membership.

### Challenges and Limitations

While fairness metrics provide useful insights into potential biases in machine learning models, they also have limitations. In some cases, satisfying one metric might lead to the violation of another, as different metrics may have conflicting objectives. Furthermore, selecting the most appropriate fairness metric for a particular application can be a challenging task, as it depends on the context, goals, and ethical considerations involved.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bowl of candy, and you want to share it fairly with your friends. A fairness metric is like a rule that helps you decide how to divide the candy so that everyone gets a fair share. In machine learning, fairness metrics help make sure that a computer program doesn't treat different groups of people unfairly, like giving more candy to some friends and less to others. By using these rules, we can make the computer program work in a way that is more fair and equal for everyone.