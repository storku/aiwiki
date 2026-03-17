---
title: "Disparate treatment"
slug: "disparate_treatment"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Disparate Treatment in Machine Learning

Disparate treatment in machine learning refers to the unjust or prejudicial treatment of individuals or groups based on certain attributes, such as race, gender, or age, in the context of algorithmic decision-making systems. This phenomenon occurs when the model learns to make biased decisions due to the presence of discriminatory patterns in the training data, resulting in unfair treatment for specific groups.

### Causes of Disparate Treatment

Disparate treatment may arise from various sources in the machine learning pipeline, including biased training data, inappropriate feature selection, and algorithmic bias. Some of the primary causes are:

- **Biased training data**: The presence of discriminatory patterns in the data used to train a machine learning model can lead to biased predictions. These patterns may originate from historical biases, sampling biases, or measurement errors.

- **Inappropriate feature selection**: The inclusion of sensitive attributes, such as race or gender, in the feature set can directly contribute to biased decisions. Additionally, certain non-sensitive attributes may act as proxies for sensitive ones, indirectly resulting in disparate treatment.

- **Algorithmic bias**: Machine learning algorithms may introduce bias due to their design or the optimization techniques employed. For example, some algorithms may overfit to certain groups, leading to biased predictions for others.

### Mitigating Disparate Treatment

Efforts to mitigate disparate treatment in machine learning involve addressing the aforementioned causes through various approaches:

- **Data preprocessing**: Techniques such as resampling, reweighting, or generating synthetic data can help balance the training dataset, reducing the impact of biases on the model's predictions.

- **Feature engineering**: By carefully selecting the features used in the model, practitioners can minimize the use of sensitive attributes or their proxies, thus reducing the potential for disparate treatment.

- **Algorithmic fairness**: Researchers have proposed various [algorithmic fairness](/index.php?title=Algorithmic_fairness&action=edit&redlink=1) techniques that aim to ensure fairness in the model's predictions, such as fairness-aware regularization, adversarial training, or post-hoc calibration.

## Explain Like I'm 5 (ELI5)

Disparate treatment in machine learning is like a teacher who treats some students unfairly because of their hair color, just because other teachers in the past did the same thing. This unfair treatment can happen because the teacher learned to act this way from past examples (biased data), used the wrong things to decide how to treat the students (inappropriate feature selection), or because of the way the teacher's teaching methods work (algorithmic bias). To fix this problem, we can make sure the teacher learns from better examples (data preprocessing), uses better things to decide how to treat students (feature engineering), or changes their teaching methods to be more fair (algorithmic fairness).