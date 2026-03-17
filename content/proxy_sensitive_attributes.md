---
title: "Proxy (sensitive attributes)"
slug: "proxy_sensitive_attributes"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In machine learning, **proxy (sensitive attributes)** refers to variables that indirectly capture information about a sensitive attribute, such as race, gender, or age, which are often used in a model to make predictions or decisions. The use of proxy variables can inadvertently lead to biased outcomes or [algorithmic discrimination](/index.php?title=Algorithmic_discrimination&action=edit&redlink=1), even when the original sensitive attribute is not explicitly used in the model. It is important for researchers and practitioners to be aware of potential proxy variables in their data, in order to mitigate the risk of unintended consequences stemming from their use.

## Proxy Variables and Bias

### Identification of Proxy Variables

Identifying proxy variables for sensitive attributes is a crucial step in mitigating bias in machine learning models. There are several methods that can be employed to identify potential proxy variables, including:

- **[Correlation analysis](/index.php?title=Correlation_analysis&action=edit&redlink=1)**: Examining the correlation between potential proxy variables and the sensitive attribute, to identify any strong associations.

- **[Causal modeling](/index.php?title=Causal_modeling&action=edit&redlink=1)**: Building causal diagrams that include the sensitive attribute, potential proxy variables, and other features, to uncover possible causal relationships.

- **[Domain knowledge](/index.php?title=Domain_knowledge&action=edit&redlink=1)**: Leveraging expert knowledge in the field to identify variables that might be acting as proxies for sensitive attributes.

### Bias Mitigation Techniques

Once proxy variables have been identified, there are several techniques available to address the bias they may introduce, including:

- **[Data preprocessing](/index.php?title=Data_preprocessing&action=edit&redlink=1)**: Transforming the data to minimize the influence of proxy variables, for instance, by using techniques such as re-sampling or re-weighting.

- **[Algorithmic Fairness](/index.php?title=Algorithmic_Fairness&action=edit&redlink=1)**: Employing fair machine learning algorithms that explicitly consider sensitive attributes and their proxies during the learning process, aiming to minimize disparate impact or treatment.

- **[Post-hoc analysis](/index.php?title=Post-hoc_analysis&action=edit&redlink=1)**: Evaluating the performance of the model with respect to different subgroups defined by the sensitive attribute, and adjusting the model accordingly if necessary.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to guess which of your friends got a high score on a video game, but you're not allowed to know their actual scores. Instead, you have some other information, like how long they've been playing or what their favorite game is. These pieces of information could help you make a good guess, even though they're not the actual scores. In machine learning, these pieces of information are called "proxy variables" for the thing you're not allowed to know, like someone's race, gender, or age. Even if you don't use the actual sensitive information, the proxy variables might still lead to unfair or biased decisions. To make sure the machine is fair, researchers try to figure out which pieces of information might be acting like proxy variables and then make adjustments to reduce their impact.