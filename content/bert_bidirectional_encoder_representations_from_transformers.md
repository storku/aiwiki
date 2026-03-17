---
title: "BERT (Bidirectional Encoder Representations from Transformers)"
slug: "bert_bidirectional_encoder_representations_from_transformers"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

BERT, or **Bidirectional Encoder Representations from Transformers**, is a pre-training technique for natural language understanding tasks in the field of machine learning. Developed by researchers at [Google AI Language](/index.php?title=Google_AI_Language&action=edit&redlink=1), BERT has significantly advanced the state of the art in a wide range of tasks, such as question answering, sentiment analysis, and named entity recognition. BERT's breakthrough lies in its ability to capture bidirectional context in text by processing words in both left-to-right and right-to-left directions simultaneously.

## Architecture

### Transformers

BERT is built upon the [Transformer](/wiki/transformer) architecture, which was introduced by Vaswani et al. in their 2017 paper, "Attention is All You Need." The Transformer model utilizes self-attention mechanisms to process input sequences in parallel, rather than sequentially, as done by traditional recurrent neural networks (RNNs) or long short-term memory (LSTM) networks. The parallel processing enabled by Transformers allows for more efficient training and better handling of long-range dependencies in text.

### Bidirectional Context

The key innovation of BERT lies in its ability to model bidirectional context. Unlike traditional language models that process text either left-to-right or right-to-left, BERT is designed to process words in both directions at the same time. This bidirectional context allows BERT to capture a more comprehensive understanding of the relationships between words in a sentence. To achieve this, BERT uses a technique called **masked language modeling**, which involves randomly masking some words in a sentence and training the model to predict the masked words based on their surrounding context.

## Pre-training and Fine-tuning

BERT is typically trained in a two-step process: pre-training and fine-tuning.

### Pre-training

During pre-training, BERT is trained on a large corpus of text (for example Wikipedia and BooksCorpus) using unsupervised learning. The model learns to generate context-sensitive word embeddings and captures the structure and semantics of the language. This pre-training step results in a "base model" that can be fine-tuned for specific tasks.

### Fine-tuning

Once pre-trained, BERT can be fine-tuned using supervised learning on a relatively small amount of labeled data for a specific natural language understanding task, such as sentiment analysis or question answering. Fine-tuning involves updating the model's weights with task-specific data to achieve better performance on the target task. This transfer learning approach allows BERT to leverage its pre-existing language understanding to quickly adapt to new tasks with limited training data.

## Explain Like I'm 5 (ELI5)

BERT is a smart computer program that helps computers understand and work with human language. Imagine you're reading a book, and you try to understand the meaning of a sentence by looking at the words before and after it. BERT does the same thing, but it looks at the words on both sides of a word at the same time. This helps BERT get a better idea of what words mean and how they relate to each other.

First, BERT learns from lots of books and articles, kind of like how you learn by reading and listening to people talk. Then, when it's time to help with a specific job, like figuring out if a movie review is positive or negative, BERT can use what it's learned to do that job really well, even if it hasn't seen many examples of that job before.