---
title: "Feature extraction"
slug: "feature_extraction"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Feature extraction is a crucial step in the field of [machine learning](/wiki/machine_learning) and [pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1) that involves extracting relevant and informative attributes from raw data. These attributes, also known as features or variables, are then used by machine learning algorithms to classify or predict outcomes. The process of feature extraction is essential in simplifying and enhancing the performance of models by reducing the dimensionality of the input data, thus minimizing computational cost and avoiding the [curse of dimensionality](/index.php?title=Curse_of_dimensionality&action=edit&redlink=1).

## Techniques of Feature Extraction

There are various techniques for feature extraction that can be broadly categorized into two groups: unsupervised and supervised methods. Each group has its own unique approach and applications.

### Unsupervised Methods

Unsupervised methods of feature extraction do not require any prior knowledge or labels associated with the input data. These methods rely solely on the intrinsic structure of the dataset. Some common unsupervised methods include:

- **[Principal Component Analysis](/index.php?title=Principal_Component_Analysis&action=edit&redlink=1) (PCA)**: PCA is a widely used linear technique that aims to find a lower-dimensional representation of the input data by projecting it onto a new orthogonal basis. This basis is determined by the eigenvectors of the data covariance matrix, which correspond to the directions of maximum variance.

- **[Independent Component Analysis](/index.php?title=Independent_Component_Analysis&action=edit&redlink=1) (ICA)**: ICA is another linear technique that seeks to find statistically independent components in the input data. It is particularly useful for applications such as blind source separation and image processing.

- **[t-distributed Stochastic Neighbor Embedding](/index.php?title=T-distributed_Stochastic_Neighbor_Embedding&action=edit&redlink=1) (t-SNE)**: t-SNE is a non-linear technique that aims to preserve the local structure of the input data by minimizing the divergence between probability distributions in the high-dimensional and low-dimensional spaces.

### Supervised Methods

Supervised methods of feature extraction rely on the availability of labeled data. These methods take advantage of the relationship between the input data and the associated labels to extract relevant features. Some common supervised methods include:

- **[Linear Discriminant Analysis](/index.php?title=Linear_Discriminant_Analysis&action=edit&redlink=1) (LDA)**: LDA is a linear technique that seeks to find a lower-dimensional representation of the input data that maximizes the separability between classes. It achieves this by maximizing the ratio of the between-class scatter to the within-class scatter.

- **[Recursive Feature Elimination](/index.php?title=Recursive_Feature_Elimination&action=edit&redlink=1) (RFE)**: RFE is a wrapper-based technique that ranks features based on their importance in a given classifier. It recursively removes the least important features and retrains the classifier, resulting in a reduced set of relevant features.

## Applications of Feature Extraction

Feature extraction is widely applied in various domains, including but not limited to:

- **[Computer Vision](/wiki/computer_vision)**: In computer vision, feature extraction is utilized to identify significant attributes such as edges, corners, and textures, which are then used in tasks like object recognition, image segmentation, and facial recognition.

- **[Natural Language Processing](/wiki/natural_language_processing) (NLP)**: In NLP, feature extraction methods like [Term Frequency-Inverse Document Frequency](/index.php?title=Term_Frequency-Inverse_Document_Frequency&action=edit&redlink=1) (TF-IDF) and [word embeddings](/index.php?title=Word_embeddings&action=edit&redlink=1) are employed to capture the semantic and syntactic information of textual data for tasks like sentiment analysis, document classification, and machine translation.

- **[Bioinformatics](/index.php?title=Bioinformatics&action=edit&redlink=1)**: In bioinformatics, feature extraction techniques are used to identify relevant patterns in genetic and proteomic data, which can be employed in tasks such as gene expression analysis, protein structure prediction, and drug discovery.

## Explain Like I'm 5 (ELI5)

Imagine you have a box full of colorful Legos, and you want to build a specific structure. However, you only need certain shapes and colors of Lego pieces for your structure. Feature extraction is like sorting through the Legos to find the important pieces (features) you need to build your structure. In machine learning, feature extraction helps