---
title: "Fairness constraint"
slug: "fairness_constraint"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Fairness Constraint in Machine Learning

[Machine learning](/wiki/machine_learning) is a subfield of [artificial intelligence](/wiki/artificial_intelligence) that focuses on the development of algorithms that enable computers to learn from and make predictions or decisions based on data. In the context of machine learning, fairness is an important ethical consideration, as it pertains to the equitable treatment of different individuals or groups by the algorithm. Fairness constraints are techniques used to ensure that machine learning models adhere to certain fairness criteria, thus mitigating potential biases in the model's predictions or decisions.

### Defining Fairness

Fairness in machine learning can be difficult to define, as it depends on the context in which the model is being used and the ethical principles that guide its development. Some common fairness criteria include demographic parity, equalized odds, and equality of opportunity, each of which addresses different aspects of fairness in model predictions. These criteria are often formulated as mathematical constraints that can be imposed on the learning process to guide the model toward more equitable outcomes.

#### Demographic Parity

Demographic parity requires that a machine learning model's predictions be independent of a sensitive attribute, such as race or gender, when averaged across the entire population. This criterion ensures that the proportion of positive outcomes is the same for each group, but it does not account for differences in the underlying distribution of the data, which may lead to unfair outcomes in certain situations.

#### Equalized Odds

Equalized odds is a fairness criterion that requires a model's false positive and false negative rates to be equal for each group defined by a sensitive attribute. This constraint ensures that the model's errors are distributed equally across different groups, thereby reducing the likelihood of biased outcomes.

#### Equality of Opportunity

Equality of opportunity is a fairness criterion that requires a model's true positive rate to be equal for each group defined by a sensitive attribute, while allowing for differences in false positive rates. This constraint focuses on ensuring equitable outcomes for individuals who are actually eligible for a positive outcome, such as being granted a loan or receiving a job offer.

### Incorporating Fairness Constraints in Model Training

To incorporate fairness constraints in machine learning models, various techniques have been proposed, including modifying the loss function, re-sampling the data, or post-processing the model's predictions. By including fairness constraints in the training process, it is possible to guide the model towards more equitable decisions while still maintaining an acceptable level of predictive performance.

## Explain Like I'm 5 (ELI5)

In machine learning, we teach computers how to make decisions based on patterns in data. Sometimes, these decisions can be unfair to certain groups of people because of biases in the data or the way the computer learns. To fix this, we use fairness constraints, which are like rules that help the computer make fairer decisions. There are different types of fairness constraints, and each one makes sure the computer is being fair in a different way. By using these fairness constraints, we can help computers make better and fairer decisions for everyone.