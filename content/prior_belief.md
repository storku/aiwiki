---
title: "Prior belief"
slug: "prior_belief"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Prior Belief in Machine Learning

Prior belief, also known as **prior probability** or simply **prior**, is a fundamental concept in the field of machine learning, particularly in [Bayesian statistics](/index.php?title=Bayesian_statistics&action=edit&redlink=1) and [Bayesian machine learning](/index.php?title=Bayesian_machine_learning&action=edit&redlink=1) methods. The prior represents the initial belief or probability distribution of a model regarding the values of its parameters before any data is taken into account. This section will cover the definition of prior belief, its role in Bayesian methods, and the selection of appropriate priors.

### Definition

In Bayesian statistics, prior belief is a probability distribution that quantifies the uncertainty or belief about the possible values of a model's parameters before any data is observed. The prior distribution encodes the researcher's or model's initial understanding or assumptions about the problem space, which is then updated using observed data to produce the **posterior distribution**, a refined belief that incorporates the information gained from the data.

### Role in Bayesian Methods

The prior belief plays a crucial role in Bayesian machine learning methods, which are based on the principles of Bayesian statistics. Bayesian methods update the prior belief with observed data through the application of [Bayes' theorem](/index.php?title=Bayes%27_theorem&action=edit&redlink=1). The theorem combines the prior probability with the **likelihood function** (which measures the fit of the model to the observed data) to compute the posterior probability. The posterior distribution represents the updated belief or understanding about the model's parameters, given the observed data.

### Selection of Priors

Selecting an appropriate prior can have a significant impact on the performance of Bayesian methods. There are several types of priors, each with its own advantages and disadvantages:

- **Informative priors**: These priors are based on expert knowledge or existing information about the problem. They can improve the performance of a model when the prior information is accurate and reliable.

- **Non-informative priors**: Also known as vague or flat priors, these priors express minimal or no prior knowledge about the parameters. They are typically used when there is insufficient information to formulate an informative prior or when the researcher wants to minimize the influence of the prior on the final results.

- **Conjugate priors**: These are a class of priors that simplify the computation of the posterior distribution by yielding a posterior with the same functional form as the prior. Conjugate priors are particularly useful when working with small datasets or performing online updates of the model.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of differently shaped objects, and you want to guess what's inside without looking. Your friend tells you there are mostly round objects in the bag. This information is like a prior belief in machine learning: it's your initial idea about what's inside before actually checking.

In machine learning, we use math and data to update our initial guess (prior belief) and make it better. This updated guess is called the "posterior distribution." We keep updating our beliefs as we get more information, which helps us create better models to understand and solve problems.