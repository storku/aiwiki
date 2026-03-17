---
title: "Holdout data"
slug: "holdout_data"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Holdout Data in Machine Learning

Holdout data is a subset of the dataset in [machine learning](/wiki/machine_learning) that is separated from the training data and is used to evaluate the performance of a model during the model selection process. Holdout data helps to identify potential issues such as [overfitting](/wiki/overfitting) and provides an unbiased estimate of the model's generalization performance. This section discusses the importance of holdout data, the process of creating holdout data, and the limitations associated with its use.

### Importance of Holdout Data

Holdout data plays a crucial role in assessing the performance of a machine learning model. By holding back a portion of the dataset from the training process, it allows the evaluation of the model's generalization capabilities, ensuring that the model is capable of making accurate predictions on unseen data. This is important for mitigating overfitting, a phenomenon where a model performs exceptionally well on training data but fails to generalize to new, unseen data. Holdout data can be used to compare different models and select the one with the best performance on the holdout set, thus increasing the model's reliability.

### Creating Holdout Data

The process of creating holdout data involves partitioning the original dataset into two or more subsets. One common approach is the [train-test split](/index.php?title=Train-test_split&action=edit&redlink=1), where the dataset is divided into a training set and a test set. The training set is used to train the machine learning model, while the test set is reserved for evaluation purposes. The partitioning can be done randomly or in a stratified manner, ensuring that the proportion of each class in both the training and test sets is maintained. The size of the holdout data is generally determined by the size and nature of the dataset, with a common rule of thumb being a 70-30 or 80-20 split between the training and test sets.

### Limitations of Holdout Data

While holdout data is a valuable tool in machine learning, it has certain limitations. One limitation is the reduced amount of data available for training the model, which may lead to suboptimal performance. Additionally, the model's performance on the holdout set may be sensitive to the specific choice of the data split. This limitation can be mitigated by using techniques such as [cross-validation](/wiki/cross-validation), where multiple train-test splits are created and the model is evaluated on each of these splits. The performance is then averaged over all the splits to provide a more reliable estimate of the model's generalization ability.

## Explain Like I'm 5 (ELI5)

Imagine you're learning how to solve puzzles, and your teacher gives you lots of puzzles to practice with. To make sure you're really good at solving puzzles and not just memorizing the answers to the ones you practiced, your teacher keeps some puzzles hidden. After you've practiced, the teacher gives you the hidden puzzles to see if you can solve them.

In machine learning, the hidden puzzles are called "holdout data." Holdout data is a small part of the information that a computer program doesn't use while learning. After the program learns from the rest of the information, it tries to solve the holdout data to see how well it can handle new problems it hasn't seen before. This helps make sure the program is good at solving different kinds of problems and not just the ones it practiced with.