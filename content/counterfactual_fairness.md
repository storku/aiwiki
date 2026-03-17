---
title: "Counterfactual fairness"
slug: "counterfactual_fairness"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Counterfactual fairness is a concept in machine learning that aims to ensure that an algorithm's predictions are fair by considering hypothetical alternative outcomes under different conditions. The idea is to create models that make unbiased decisions by accounting for potential biases in data, which could lead to unfair treatment of individuals or groups. This concept is particularly important in the context of sensitive applications, such as hiring, lending, and criminal justice, where fairness is a critical concern.

## Defining Counterfactual Fairness

### Definition

Counterfactual fairness is defined as a model satisfying the following condition: given a set of observed variables and a sensitive attribute, the model's prediction for an individual should remain the same if the sensitive attribute were hypothetically changed, while keeping all other observed variables constant [1](/index.php?title=1&action=edit&redlink=1)(#ref1). This means that the model's decisions should not depend on the sensitive attribute when other factors are held constant.

### Motivation

The motivation behind counterfactual fairness is to address potential biases in data and model training, which may lead to unfair treatment of certain individuals or groups. These biases can arise from historical discrimination or other systemic factors that may be reflected in the data. By considering counterfactual scenarios, machine learning practitioners can better understand and mitigate the impact of these biases on model predictions and ensure fair decision-making.

## Methods for Achieving Counterfactual Fairness

Several methods have been proposed to achieve counterfactual fairness in machine learning models, including:

### Causal Modeling

Causal modeling techniques, such as structural causal models (SCMs) and directed acyclic graphs (DAGs), can be used to model the causal relationships between variables and estimate the counterfactual outcomes [2](/index.php?title=2&action=edit&redlink=1)(#ref2). By explicitly modeling the causal structure, practitioners can identify and control for confounding factors that may lead to unfair decisions.

### Adversarial Training

Adversarial training involves training a model to make predictions while simultaneously training a separate adversarial model to identify and minimize the influence of sensitive attributes on the predictions [3](/index.php?title=3&action=edit&redlink=1)(#ref3). This approach can help ensure that the final model does not rely on the sensitive attributes when making decisions, leading to counterfactually fair predictions.

### Pre-processing Techniques

Pre-processing techniques, such as re-sampling, re-weighting, or data transformation, can be applied to the data before training a model to remove or reduce the influence of sensitive attributes on the predictions [4](/index.php?title=4&action=edit&redlink=1)(#ref4). These techniques can help create a more balanced dataset and mitigate potential biases that may lead to unfair decisions.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game with your friends where you have to guess the best player based on their scores. You also know which of your friends are left-handed or right-handed. Counterfactual fairness means that even if you imagine switching someone's handedness (from left-handed to right-handed, or vice versa), your guess of the best player should still stay the same. This way, you're making a fair decision based only on their scores and not treating left-handed or right-handed players differently.

## References

<references>
[&#91;1&#93;](#cite_note-ref1-1)
[&#91;2&#93;](#cite_note-ref2-2)
<ref name="ref3">Zhang, B. H., Lemoine, B., & Mitchell, M. (2018). Mitigating Unwanted Biases with Adversarial Training.

1. [↑](#cite_ref-ref1_1-0) Kusner, M. J., Loftus, J., Russell, C., & Silva, R. (2017). Counterfactual fairness. Advances in Neural Information Processing Systems, 30, 4066-4076.

2. [↑](#cite_ref-ref2_2-0) Pearl, J. (2009). Causality: Models, Reasoning and Inference. Cambridge University Press.