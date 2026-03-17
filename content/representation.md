---
title: "Representation"
slug: "representation"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Representation in [machine learning](/wiki/machine_learning) refers to the method by which a model captures and encodes the underlying structure, patterns, and relationships present in the input data. A suitable representation allows the model to learn and generalize from the data effectively, enabling it to make accurate predictions or perform other tasks. Representations can be hand-crafted features, which are based on expert knowledge, or learned features, which are automatically discovered by the machine learning model.

## Types of Representation

### Hand-crafted Features

Hand-crafted features, also known as manual or engineered features, are designed by experts to capture specific properties or characteristics of the input data. They require domain knowledge and are based on human intuition and experience. Hand-crafted features are often used in traditional machine learning algorithms, such as [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM) and [Decision Trees](/index.php?title=Decision_Trees&action=edit&redlink=1). Examples of hand-crafted features include:

- [Histogram of Oriented Gradients](/index.php?title=Histogram_of_Oriented_Gradients&action=edit&redlink=1) (HOG) for object detection in images

- [Mel-Frequency Cepstral Coefficients](/index.php?title=Mel-Frequency_Cepstral_Coefficients&action=edit&redlink=1) (MFCC) for speech recognition

- [Term Frequency-Inverse Document Frequency](/index.php?title=Term_Frequency-Inverse_Document_Frequency&action=edit&redlink=1) (TF-IDF) for text classification

### Learned Features

Learned features, or automatic features, are discovered directly from the input data by the machine learning model. These representations are learned during the training process and do not require expert knowledge. Deep learning models, such as [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Networks&action=edit&redlink=1) (CNNs) and [Recurrent Neural Networks](/index.php?title=Recurrent_Neural_Networks&action=edit&redlink=1) (RNNs), are particularly adept at learning representations from raw data. Examples of learned features include:

- Hierarchical features in CNNs for image recognition

- Semantic embeddings in [Word2Vec](/index.php?title=Word2Vec&action=edit&redlink=1) or [GloVe](/index.php?title=GloVe&action=edit&redlink=1) for natural language processing

## Representation Learning

Representation learning refers to the process of automatically discovering useful representations or features from the input data. Deep learning models, with their hierarchical structure, are particularly effective at learning representations. They can capture complex patterns and relationships in the data, enabling better performance on a wide range of tasks.

## Dimensionality Reduction and Feature Extraction

[Dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1) and feature extraction are techniques used to obtain a more compact and informative representation of the input data. These methods can help improve model performance and reduce computational complexity. Examples of dimensionality reduction techniques include:

- [Principal Component Analysis](/index.php?title=Principal_Component_Analysis&action=edit&redlink=1) (PCA)

- [t-Distributed Stochastic Neighbor Embedding](/index.php?title=T-Distributed_Stochastic_Neighbor_Embedding&action=edit&redlink=1) (t-SNE)

- [Autoencoders](/index.php?title=Autoencoders&action=edit&redlink=1)

## Explain Like I'm 5 (ELI5)

Representation in machine learning is like trying to describe a picture or a story using a language that the computer can understand. It's a way for the computer to make sense of the information it's given. There are two ways we can help the computer understand this information: by telling it what's important (hand-crafted features) or by letting it figure it out on its own (learned features). When the computer learns by itself, it's like when you learn a new word just by hearing it in different sentences, instead of someone explaining it to you. This learning helps the computer make better guesses or predictions about new information it hasn't seen before.