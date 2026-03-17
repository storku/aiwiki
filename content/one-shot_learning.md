---
title: "One-shot learning"
slug: "one-shot_learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## One-shot Learning in Machine Learning

One-shot learning is a type of machine learning approach that aims to build robust models capable of learning from a limited amount of data, typically with only one or very few examples per class. This is in contrast to traditional supervised learning techniques, which require large amounts of labeled data for training.

### Background

Traditional machine learning and deep learning algorithms often require a significant amount of training data to achieve high performance. This is especially true for tasks like image classification or natural language processing, where deep neural networks have demonstrated state-of-the-art results. However, obtaining and labeling such large datasets can be time-consuming, expensive, and often impractical, particularly for tasks where examples are scarce or difficult to obtain.

One-shot learning seeks to overcome these limitations by developing models that can effectively learn from a smaller number of examples, thus reducing the need for extensive labeled datasets. This approach is inspired by the human ability to quickly learn and generalize from only a few examples, a capability that has been difficult to replicate in machine learning models.

### Approaches to One-shot Learning

There are several approaches to one-shot learning that have been proposed in the literature. Some of the main methods include:

- **Memory-augmented neural networks**: These networks, such as the [Neural Turing Machine](/index.php?title=Neural_Turing_Machine&action=edit&redlink=1) or the [Differentiable Neural Computer](/index.php?title=Differentiable_Neural_Computer&action=edit&redlink=1), extend traditional neural network architectures with an external memory component. This allows them to store and retrieve information across different input examples, thus facilitating one-shot learning.

- **Meta-learning**: Also known as "learning to learn," meta-learning involves training models to learn quickly from new tasks by leveraging prior knowledge acquired from similar tasks. One popular meta-learning approach is [Model-Agnostic Meta-Learning (MAML)](/index.php?title=Model-Agnostic_Meta-Learning_(MAML)&action=edit&redlink=1), which trains models to adapt to new tasks with minimal gradient updates.

- **Siamese networks**: These networks consist of two or more identical neural networks with shared weights. They are trained to differentiate between input examples by learning a similarity metric, which can then be used to compare new examples with a small number of known examples during inference.

- **Few-shot learning**: This is a more general approach that aims to learn from a small number of examples per class (typically between 1 and 20). It encompasses one-shot learning as a special case and often utilizes techniques such as meta-learning or memory-augmented networks.

## Explain Like I'm 5 (ELI5)

Imagine you're learning about animals and you see a picture of a cat for the first time. Even though you've only seen one cat, you can still recognize other cats when you see them later. One-shot learning in machine learning is kind of like that – it's a way for a computer to learn from just a few examples instead of needing lots and lots of them. This makes it easier and faster for the computer to learn new things.