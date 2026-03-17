---
title: "Demographic parity"
slug: "demographic_parity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Demographic Parity in Machine Learning

Demographic parity, also known as statistical parity, is a fairness metric used in machine learning to assess the performance of classification algorithms with respect to different demographic groups. It measures the extent to which an algorithm's predictions are unbiased with respect to a protected attribute, such as gender, race, or age. The goal of demographic parity is to ensure equal treatment for different demographic groups, thereby mitigating the risk of algorithmic discrimination.

### Definition

Demographic parity is achieved when the probability of a positive prediction is the same for all demographic groups within the protected attribute, regardless of the actual outcome. Formally, demographic parity is defined as:

P(Ŷ = 1 | A = a) = P(Ŷ = 1)

Where Ŷ is the predicted outcome, A represents the protected attribute, and a is a specific value of the protected attribute (for example male or female). In other words, the proportion of positive predictions should be the same across all demographic groups.

### Importance

Demographic parity is an essential concept in the field of [fair machine learning](/index.php?title=Fair_machine_learning&action=edit&redlink=1) because it addresses the potential for discrimination that may arise when an algorithm's predictions disproportionately affect certain demographic groups. By promoting equal treatment across demographic groups, demographic parity helps to ensure that machine learning models do not perpetuate or exacerbate existing societal biases.

### Limitations

While demographic parity is a valuable metric for assessing fairness, it is not without its limitations. For instance, demographic parity does not necessarily guarantee equal accuracy rates for different demographic groups. This may result in a model that achieves demographic parity but performs poorly for certain groups, leading to suboptimal decision-making.

Additionally, demographic parity does not take into account the underlying distribution of the true outcomes within the protected attribute. In cases where the true positive rates differ significantly between demographic groups, enforcing demographic parity may lead to unfairness or inaccurate predictions.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game with your friends, and the game involves picking cards. You're the one who hands out the cards, and you want to be fair. Demographic parity in machine learning is like making sure that every friend gets the same number of cards, no matter what color they like or how good they are at the game. This way, everyone gets treated equally, and nobody feels left out or treated unfairly. However, sometimes giving everyone the same number of cards might not be the best way to be fair, especially if some friends are better at the game or have different preferences.