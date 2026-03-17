---
title: "Transformer"
slug: "transformer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, the **Transformer** is a deep learning architecture that has revolutionized the field of natural language processing (NLP) since its introduction in 2017 by Vaswani et al. in the paper "Attention is All You Need" [1](/index.php?title=1&action=edit&redlink=1). The Transformer model leverages self-attention mechanisms to effectively capture long-range dependencies and contextual information in sequence data. It has been the foundation for many state-of-the-art models, such as [BERT](/wiki/bert), [GPT](/wiki/gpt) and [T5](/index.php?title=T5&action=edit&redlink=1), which have achieved impressive results in various NLP tasks, including machine translation, sentiment analysis, and question answering.

## Architecture

### Encoder and Decoder

The Transformer architecture consists of two main components: the **encoder** and the **decoder**. The encoder is responsible for processing the input sequence and creating a high-dimensional, continuous representation of the data, while the decoder generates the output sequence based on this representation. Both the encoder and decoder are composed of multiple layers, with each layer containing multiple attention heads that perform the self-attention operation.

### Self-Attention Mechanism

At the core of the Transformer architecture is the **self-attention mechanism**, which enables the model to weigh the importance of different words in a sequence based on their relevance to the current word being processed. This mechanism allows the model to learn complex relationships and dependencies among words, regardless of their positions in the sequence.

The self-attention mechanism computes a score for each word pair in the input sequence, which is then used to create a weighted sum of the input embeddings. These scores are calculated using the dot product of the query, key, and value vectors, which are derived from the input embeddings through linear transformations. The result is a context-aware representation of each word in the sequence.

### Positional Encoding

As the Transformer architecture does not have any inherent notion of the order of the input elements, **positional encoding** is used to inject information about the relative positions of words in a sequence. The positional encoding is added to the input embeddings before being processed by the self-attention mechanism. This enables the model to capture positional information and attend to words based on their relative positions.

## Applications

Since its introduction, the Transformer architecture has been successfully applied to a wide range of NLP tasks, such as:

- Machine translation: By training on parallel corpora, Transformers have achieved state-of-the-art performance in translating between multiple languages [2](/index.php?title=2&action=edit&redlink=1).

- Sentiment analysis: Transformers have been used to effectively identify the sentiment of a given text, outperforming traditional machine learning models in this task [3](/index.php?title=3&action=edit&redlink=1).

- Question answering: Transformers have demonstrated remarkable success in answering questions based on a given context, as seen in models like BERT and T5 [4](/index.php?title=4&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you're building a puzzle with your friends. Each piece of the puzzle is a word, and the completed puzzle is a sentence. The Transformer is like a smart robot that helps you put the pieces together in the right way. It looks at all the pieces (words) and decides which ones are important to understand the meaning of the whole sentence.

To do this, the Transformer has two special tools: the encoder and the decoder. The encoder looks at the words and turns them into a special code, while the decoder takes that code and puts the puzzle pieces (words) together in the right order.

The Transformer also has a superpower called self-attention, which helps it focus on the most important pieces (words) to understand the whole picture (sentence). This superpower helps the Transformer to be really good at solving different language puzzles, like translating between languages or answering questions.