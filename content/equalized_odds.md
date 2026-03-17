---
title: "Equalized odds"
slug: "equalized_odds"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Equalized Odds in Machine Learning

Equalized Odds is a fairness criterion in machine learning, which aims to mitigate discriminatory outcomes that may arise from the use of algorithms in various applications. This criterion focuses on ensuring that the error rates for different demographic groups are equal, in order to avoid biased decision-making. In the following sections, we will delve into the definition, motivation, and implementation of Equalized Odds, as well as provide an explanation in simpler terms.

### Definition

Equalized Odds, also referred to as *[conditional demographic parity](/index.php?title=Conditional_demographic_parity&action=edit&redlink=1)*, is a fairness criterion that requires a machine learning classifier to have equal false positive rates (FPRs) and false negative rates (FNRs) across different demographic groups, such as gender or race. Mathematically, it can be expressed as:

P(Ŷ = 1 | Y = 0, G = g) = P(Ŷ = 1 | Y = 0, G = g')
P(Ŷ = 0 | Y = 1, G = g) = P(Ŷ = 0 | Y = 1, G = g')
Here, Ŷ denotes the predicted outcome, Y the true outcome, and G the demographic group. The first equation represents the equality of FPRs, while the second equation represents the equality of FNRs for groups *g* and *g'*.

### Motivation

The motivation for the Equalized Odds criterion arises from the desire to reduce discriminatory outcomes in machine learning applications. In many contexts, such as lending, hiring, or medical diagnosis, algorithms may inadvertently produce biased results due to historical and societal factors present in the training data. This can lead to unfair treatment of certain demographic groups, exacerbating existing inequalities. By enforcing equal error rates across groups, the Equalized Odds criterion aims to mitigate these disparities and promote fair decision-making.

### Implementation

Implementing Equalized Odds typically involves modifying the machine learning model or adjusting its predictions to satisfy the criterion. Several techniques can be employed to achieve this, including:

- **[Pre-processing](/index.php?title=Pre-processing&action=edit&redlink=1)**: Before training the model, the input dataset can be modified to remove or reduce any potential biases, using techniques such as re-sampling or re-weighting the data.

- **[In-processing](/index.php?title=In-processing&action=edit&redlink=1)**: During the training process, fairness constraints can be incorporated into the model's objective function, thereby encouraging the model to learn fair representations.

- **[Post-processing](/wiki/post-processing)**: After the model has been trained, its predictions can be adjusted to satisfy the Equalized Odds criterion, for example, by applying threshold optimization or calibration techniques.

Each of these approaches has its own advantages and limitations, and the choice of method depends on the specific application, dataset, and desired outcome.

## Explain Like I'm 5 (ELI5)

Equalized Odds is like a rule we use in machine learning to make sure that a computer's decisions are fair for everyone. Imagine you're playing a game with your friends, and each of you gets a certain number of turns. Equalized Odds would be like making sure that everyone gets the same number of turns, so no one is left out or treated unfairly. In real life, this rule helps make sure that important decisions, like getting a loan or a job, are fair for people from different backgrounds.