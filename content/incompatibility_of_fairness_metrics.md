---
title: "Incompatibility of fairness metrics"
slug: "incompatibility_of_fairness_metrics"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Incompatibility of Fairness Metrics in Machine Learning

In the field of machine learning, fairness is a critical issue that has gained increasing attention in recent years. The concept of fairness is essential to ensure that algorithmic decisions are equitable and do not discriminate against particular groups. This article focuses on the incompatibility of fairness metrics in machine learning, its implications, and a simple explanation for a non-expert audience.

### Definition of Fairness Metrics

Fairness metrics are quantitative measures that help in evaluating the fairness of a machine learning model's predictions. These metrics aim to ensure that the model's outcomes do not discriminate against specific subpopulations or exhibit unintended biases. Several fairness metrics have been proposed in the literature, including but not limited to:

- [Demographic Parity](/index.php?title=Demographic_Parity&action=edit&redlink=1)

- [Equalized Odds](/index.php?title=Equalized_Odds&action=edit&redlink=1)

- [Equal Opportunity](/index.php?title=Equal_Opportunity&action=edit&redlink=1)

- [Calibration](/index.php?title=Calibration&action=edit&redlink=1)

However, it has been shown that in many cases, it is impossible to simultaneously satisfy all fairness metrics, leading to the incompatibility of these metrics.

### Incompatibility Theorem

The incompatibility of fairness metrics can be demonstrated through the [Impossibility Theorem](/index.php?title=Impossibility_Theorem&action=edit&redlink=1), which states that, under certain conditions, it is impossible to satisfy more than one fairness metric at a time. This theorem is also known as the "fairness impossibility" or "fairness trade-off" in the literature.

The theorem highlights the fact that different fairness metrics may be in conflict with each other. This conflict arises because each metric is designed to address a specific aspect of fairness, and optimizing for one metric can inadvertently worsen the performance of the model with respect to another metric.

### Implications of Incompatibility

The incompatibility of fairness metrics has significant implications for the development and deployment of machine learning models. Practitioners and researchers need to be aware of these trade-offs and make informed decisions about which fairness metric(s) to prioritize based on the specific context and requirements of the application.

This trade-off necessitates a careful analysis of the potential consequences of prioritizing certain fairness metrics over others, as well as a thorough understanding of the ethical and societal implications of the choices made. Additionally, it underscores the importance of interdisciplinary collaboration between machine learning experts, social scientists, ethicists, and other stakeholders to address fairness concerns in a comprehensive manner.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bag of differently colored candies, and you want to share them with your friends. To be fair, you want to make sure that everyone gets an equal number of candies of each color. But sometimes, it's not possible to divide the candies exactly, so you have to choose what's most important: giving each person the same total number of candies, or making sure everyone gets the same number of each color.

In machine learning, fairness metrics are like the rules we use to decide how to share the candies. They help make sure that computer programs treat everyone fairly. But sometimes, we can't satisfy all the fairness rules at once, so we have to choose which ones are most important for our situation. This is called the incompatibility of fairness metrics.