---
title: "Confirmation bias"
slug: "confirmation_bias"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

Confirmation bias in machine learning refers to the phenomenon where a learning algorithm tends to prioritize or overfit data that confirms its pre-existing beliefs or hypotheses, while ignoring or underfitting data that contradicts them. This type of bias may arise from various sources, such as biased training data, biased model initialization, or biased model architectures. The existence of confirmation bias in machine learning models may lead to reduced generalizability and performance on unseen data, and may inadvertently perpetuate existing societal biases.

## Sources of Confirmation Bias in Machine Learning

### Biased Training Data

The primary source of confirmation bias in machine learning stems from biased training data. When a dataset contains a disproportionate representation of certain examples, or is influenced by pre-existing human biases, the learned model may be biased towards these examples, and may thus exhibit confirmation bias. This often occurs in scenarios where the data collection process is influenced by human decision-making, which can introduce various forms of [bias](/wiki/bias).

### Biased Model Initialization

Another source of confirmation bias in machine learning is biased model initialization. When a model is initialized with pre-trained weights, these initial weights may contain biases from the original training data or task. If these biases align with the biases present in the new training data, the model may exhibit confirmation bias, as it may prioritize learning the biased information.

### Biased Model Architectures

In some cases, the architecture of a machine learning model itself may introduce confirmation bias. Certain model architectures, such as deep neural networks, may have an inherent preference for learning specific patterns or features. If these patterns align with the model's pre-existing biases, it may prioritize learning those patterns, further reinforcing the confirmation bias.

## Mitigating Confirmation Bias

Researchers and practitioners can take several steps to mitigate confirmation bias in machine learning models. Some potential strategies include:

- Gathering diverse and representative training data to ensure a balanced representation of different perspectives and experiences.

- Employing data preprocessing techniques to identify and mitigate potential biases present in the data.

- Utilizing debiasing techniques, such as adversarial training or re-sampling, to counteract the effects of biased training data.

- Exploring different model architectures and initialization strategies to identify and mitigate any inherent biases.

- Regularly evaluating model performance on diverse, unbiased test sets to ensure that the model remains generalizable and unbiased.

## Explain Like I'm 5 (ELI5)

Confirmation bias in machine learning is like when you only want to listen to people who agree with you and ignore those who don't. This can happen when a computer learns from examples that are not fair or only show one side of the story. When this happens, the computer might make decisions that are not fair to everyone. To fix this, we can try to give the computer examples from many different people and make sure it listens to all of them.