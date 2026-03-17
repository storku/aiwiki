---
title: "Bias (ethics/fairness)"
slug: "bias_ethics_fairness"
categories:
  - "Machine_learning_terms"
  - "Not_updated"
  - "Terms"
---*See also: [Machine learning terms](/wiki/machine_learning_terms) and [Bias](/wiki/bias)*

## Introduction

Bias in [machine learning](/wiki/machine_learning) refers to systematic errors or discrimination present in a [model](/wiki/model)'s [predictions](/wiki/prediction) or decisions. It can arise when the data used to train the model is not representative of the population it will be applied to, or certain groups are disproportionately represented or excluded from training data.

## Sources of bias in machine learning

Biases can arise during the creation and deployment of machine learning models.

1. Data Bias: This occurs when the [training data](/wiki/training_data) used to develop a model is not representative of the population it will be applied to. For instance, if a model is trained on predominantly white people images, it may not perform well when applied to images with darker skin tones.

2. Algorithm Bias: This occurs when the algorithm used to train a model is biased towards certain outcomes or predictions. For instance, if the model is trained to predict loan defaults and its training data contains an unusually high number of defaults among certain races, then it may be more likely to predict defaults among members of that race than other individuals.

3. Human Bias: This occurs when human decision-makers, such as data scientists or engineers, introduce personal beliefs or prejudices into the development or deployment of a model. For instance, a data scientist may inadvertently exclude certain data points from training data due to personal beliefs or prejudices they hold.

## Mitigating bias in machine learning

There are various techniques available to reduce bias in machine learning:

1. Data Preprocessing: One way to reduce data bias is preprocessing training data so it more accurately represents the population the model will be applied to. This may involve techniques such as [oversampling](/wiki/oversampling) or [undersampling](/wiki/undersampling), or creating synthetic training data from scratch in order to generate more diverse training data sets.

2. Fairness Constraints: Another solution is to incorporate fairness constraints into the model training process, such as guaranteeing that predictions are not unduly influenced by certain sensitive attributes (like race or gender).

3. Model Interpretability: Improving machine learning models' interpretability can help identify and mitigate sources of bias. This may involve techniques like feature importance analysis or model explanation methods, which identify which inputs influence predictions most.

4. Human Oversight: Finally, including human oversight into the development and deployment of machine learning models can help detect and mitigate sources of bias. This may involve having multiple human decision makers review and test the model, or including feedback mechanisms that enable users to report issues with predictions made by the model.

## Explain Like I'm 5 (ELI5)

Machine learning is like teaching a robot how to do things like humans do. Sometimes, however, the robot may make mistakes due to being taught with poor examples--this is known as "bias". To address this issue, we can ensure the robot receives appropriate examples that mirror what it will be doing in the future, and ensure there are no biases based on skin color or gender. Furthermore, people should check up on the robot's work regularly to guarantee it does an adequate job.