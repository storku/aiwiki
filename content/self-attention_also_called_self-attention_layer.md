---
title: "Self-attention (also called self-attention layer)"
slug: "self-attention_also_called_self-attention_layer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Self-attention, also known as the self-attention layer, is a mechanism used in [machine learning](/wiki/machine_learning) models, particularly in deep learning architectures such as [Transformers](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1). It enables the models to weigh and prioritize different input elements based on their relationships and relevance to one another. Self-attention has been widely adopted in various applications, including natural language processing, computer vision, and speech recognition, due to its ability to capture complex patterns and long-range dependencies.

## Mechanism of Self-Attention

### Vector Representation

In the self-attention mechanism, input data is represented as a set of vectors. These vectors could be word embeddings in the case of [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) or feature maps in the context of [computer vision](/wiki/computer_vision). The vectors are then processed through a series of operations to compute the attention weights.

### Calculating Attention Scores

The self-attention mechanism calculates attention scores by comparing each input vector with every other input vector. It uses three weight matrices, known as the query, key, and value matrices, which are learned during the training process. Each input vector is multiplied by these matrices to obtain the corresponding query, key, and value vectors.

The attention score between a pair of input vectors is computed by taking the dot product of their query and key vectors and scaling the result by the square root of the input vector's dimension. This score represents the relevance between the two input elements.

### Applying Softmax

The attention scores are then passed through a [softmax](/index.php?title=Softmax_function&action=edit&redlink=1) function to normalize them and convert them into probabilities. This step ensures that the attention weights sum to one, emphasizing the most relevant input elements while suppressing less relevant ones.

### Computing Context Vectors

To obtain the final output of the self-attention layer, the value vectors are multiplied by the normalized attention scores and summed up. The resulting context vectors are a weighted combination of the input vectors, capturing their relationships and relative importance.

## Applications of Self-Attention

Self-attention has been employed in various machine learning tasks and domains, including:

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): Self-attention has proven highly effective in NLP tasks such as machine translation, text summarization, and sentiment analysis. The Transformer architecture, which heavily relies on self-attention, has become a standard model for these tasks.

- [Computer vision](/wiki/computer_vision): In computer vision, self-attention has been used in image classification, object detection, and segmentation to capture long-range dependencies and contextual information.

- [Speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1): Self-attention has been applied to speech recognition tasks to model the temporal dependencies between different parts of a speech signal.

## Explain Like I'm 5 (ELI5)

Imagine you're in a classroom with your friends, and the teacher asks you to choose the most important words in a sentence. You would pay close attention to each word and how it relates to the others to make your choice.

That's what self-attention does in machine learning! It helps the computer understand which parts of the input (like words or images) are more important by looking at how they relate to each other. This helps the computer make better decisions and understand things like language or images more accurately.