---
title: "Unlabeled example"
slug: "unlabeled_example"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Unlabeled example or **unlabled data** has [features](/wiki/features) but no [label](/wiki/label). In [supervised learning](/wiki/supervised_learning), [labeled examples](/wiki/labeled_example) are used for [training](/wiki/training) the model while unlabeled examples are used for prediction. In [semi-supervised](/index.php?title=Semi-supervised_training&action=edit&redlink=1) and [unsupervised training](/wiki/unsupervised_training), unlabeled examples are used for training the model. 

[Machine learning](/wiki/machine_learning) often uses [labeled data](/wiki/labeled_data) for [model](/wiki/model) [training](/wiki/training). Labeled data refers to information that has already been [classified](/index.php?title=Classified&action=edit&redlink=1) and [labeled](/index.php?title=Labeled&action=edit&redlink=1) by humans, making it simpler for the model to comprehend and learn from. On occasion, however, [unlabeled data](/wiki/unlabeled_data) may also be employed.

## Example

| Features |
| --- |
| Temperature | Precipitation | Humidity |
| 25 | 9 | 12 |
| 20 | 54 | 32 |
| 31 | 0 | 87 |

## What is Unlabeled Data?

Unlabeled data, as its name suggests, refers to [data](/index.php?title=Data&action=edit&redlink=1) that has not been labeled or categorized in any way. It's essentially raw information that hasn't been [preprocessed](/index.php?title=Preprocess&action=edit&redlink=1) or organized. For instance, if we were building a model to recognize different types of fruit, labeled data would be an array of images labeled with their associated type (for example apple, orange, banana), while unlabeled data consists solely of images without labels attached.

## Why Use Unlabeled Data?

At first glance, using unlabeled data for [training models](/index.php?title=Training_model&action=edit&redlink=1) may seem counterintuitive since it lacks the organized structure and organization that labeled data provides. However, there are numerous reasons why unlabeled data can be beneficial in machine learning applications.

Firstly, unlabeled data is typically more abundant than labeled data. Collecting and labeling data can be a time-consuming and expensive process, particularly for large datasets. By using unlabeled data instead of labeling it ourselves, we can increase the size of our training set without incurring additional expenses associated with labeling.

Second, unlabeled data can be utilized to enhance the [accuracy](/wiki/accuracy) and robustness of models. A common technique is semi-supervised training, where a model is trained on both labeled and unlabeled data. By using the unlabeled data to detect patterns and structure within it, the model can make better predictions when dealing with labeled information.

Finally, unlabeled data can be employed for unsupervised learning, which seeks to detect patterns and structures without any prior knowledge or guidance. This approach has applications such as anomaly detection and clustering.

## How is Unlabeled Data Used?

Training models on unlabeled data requires several techniques. [Clustering](/wiki/clustering) is one popular approach, where the similarity between data points causes the data points to be grouped together in clusters. This can be helpful for uncovering patterns and relationships within the dataset.

Another technique is [dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1), where data is transformed into a lower-dimensional space while preserving its essential features. This can be helpful for visualizing the data and recognizing patterns that may not be visible in its original high-dimensional space.

[Autoencoders](/index.php?title=Autoencoder&action=edit&redlink=1) are a type of neural network that can be trained on unlabeled data to produce a [compressed representation](/index.php?title=Compressed_representation&action=edit&redlink=1). This type of representation could be helpful for tasks such as [image](/index.php?title=Image_generation&action=edit&redlink=1) or [text generation](/index.php?title=Text_generation&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Have you ever played a guessing game? Well, let's do one now! I'll show you some pictures without telling you what they are - your task is to guess what it is in each image. Good luck!

Here is the first picture:
[shows a picture of a dog].

Can you guess what it is?

[Child Assumes It Is a Dog]

Correct! Now, here's another picture to confirm it:

[Displays a picture of a horse]

Can you guess what this image represents?

[Child Discovers It's a Horse]

Congratulations! You guessed it correctly again. Excellent work!

What if I showed you this image:

[Displays a photograph of a paw print]

Can you guess what this image represents?

[Child might assume it's either a dog or cat]

Hmm, that could be correct; however, without a picture of the animal to compare it with, we don't know for sure. It would be like having a piece of puzzle without knowing its proper place or using words without understanding their meanings. This type of unlabeled example in machine learning would be like having an unknown piece.

Machine learning algorithms require more information to determine what to do with unlabeled examples, similar to how we don't know for certain what a paw print looks like without more detail. Without this additional input, they won't know what to do with these examples correctly.