---
title: "Predictive parity"
slug: "predictive_parity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Predictive Parity in Machine Learning

Predictive parity, also known as [test fairness](/index.php?title=Test_fairness&action=edit&redlink=1), is a crucial criterion for evaluating the fairness of machine learning algorithms. It refers to the condition when the predictive accuracy of an algorithm is consistent across different demographic groups. In other words, the probability of a correct prediction should be equal among all subgroups within the population. This concept is essential for ensuring that machine learning systems do not discriminate against or favor specific groups of individuals.

### Definition and Importance

Predictive parity is defined as the condition in which an algorithm's positive predictive value (PPV) is equal for each demographic group being analyzed. The PPV represents the proportion of true positive cases among all positive predictions made by the algorithm. By striving for predictive parity, researchers aim to minimize the potential biases in machine learning models that may lead to unequal treatment or outcomes for various demographic groups.

Predictive parity is particularly significant in high-stakes domains such as [healthcare](/index.php?title=Healthcare&action=edit&redlink=1), criminal justice, finance, and education, where biased predictions can have severe consequences on individuals' lives. Ensuring predictive parity helps to promote fairness, social equity, and trust in machine learning systems, which are increasingly becoming integral parts of modern society.

### Challenges and Limitations

Achieving predictive parity can be challenging due to several factors, including:

- **Data quality and representation:** Predictive models are heavily influenced by the quality and representativeness of the training data. If the data contains biases or inaccuracies, the resulting model will likely exhibit similar biases, making it difficult to achieve predictive parity.

- **Imbalanced datasets:** When the distribution of classes or demographic groups in the dataset is not equal, it may lead to biased models and hinder achieving predictive parity.

- **Confounding variables:** Some variables, such as socioeconomic status or education level, may be correlated with both the outcome and the demographic group, making it challenging to determine the true causal relationships and achieve predictive parity.

It is also important to note that achieving perfect predictive parity may not always be possible or desirable, as it can sometimes come at the expense of other important fairness metrics, such as [equal opportunity](/index.php?title=Equal_opportunity&action=edit&redlink=1) or [demographic parity](/wiki/demographic_parity). In practice, researchers and practitioners must carefully balance various fairness metrics to ensure an equitable and unbiased model.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game where you guess whether it will rain or not tomorrow. Predictive parity means that you're just as good at guessing if it will rain for different groups of people, like kids or adults, boys or girls. It's important because it helps make sure that the game is fair for everyone and doesn't favor some people over others.

Sometimes, it's hard to make sure the game is fair, like if you don't have enough information about everyone, or if some groups have more people than others. But even if it's not always perfect, trying to make the game as fair as possible is important so that everyone has a chance to win.