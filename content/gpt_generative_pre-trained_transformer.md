---
title: "GPT (Generative Pre-trained Transformer)"
slug: "gpt_generative_pre-trained_transformer"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

The **Generative Pre-trained Transformer** (**GPT**) is a series of machine learning models developed by [OpenAI](/wiki/openai) for natural language processing tasks. These models are based on the Transformer architecture introduced by Vaswani et al. in 2017. GPT models are designed to generate text by predicting subsequent words in a sequence, and have been applied to tasks such as text generation, translation, summarization, and question answering. The latest version, as of the knowledge cutoff date, is GPT-4.

## Transformer Architecture

### Background

The Transformer architecture was proposed in the paper "Attention is All You Need" by [Vaswani et al.](/index.php?title=Vaswani_et_al.&action=edit&redlink=1) in 2017. This architecture was introduced as an alternative to traditional recurrent neural networks (RNNs) and convolutional neural networks (CNNs) for natural language processing tasks. The key innovation in the Transformer architecture is the self-attention mechanism, which allows the model to weigh the importance of different words in a sequence when generating an output.

### Self-attention Mechanism

The self-attention mechanism computes a weighted sum of the input words, where the weights are determined by the compatibility between each word and the others in the sequence. This compatibility is calculated using a scaled dot-product attention function. The self-attention mechanism enables the Transformer model to capture long-range dependencies and complex relationships between words in a text, which is challenging for RNNs and CNNs due to their inherent sequential nature.

## Generative Pre-training

The GPT models leverage unsupervised pre-training, which involves training the model on a large corpus of text to learn general language understanding. During this pre-training phase, the GPT model is trained to predict the next word in a sentence given the previous words, using a masked language modeling objective. This generative pre-training allows the model to learn a rich representation of the input language, which can be fine-tuned for specific tasks with limited labeled data.

## GPT Versions and Applications

### GPT-1

The first version of GPT was introduced by OpenAI in 2018. GPT-1 had 117 million parameters and was pre-trained on the [BooksCorpus](/index.php?title=BooksCorpus&action=edit&redlink=1) dataset. It demonstrated state-of-the-art performance on a range of natural language processing tasks, including machine translation and text summarization.

### GPT-2

GPT-2, released in 2019, was a more powerful version of GPT, with 1.5 billion parameters. It was pre-trained on the WebText dataset, which was a much larger and more diverse dataset than BooksCorpus. Due to concerns about potential misuse, OpenAI initially released only a smaller version of GPT-2, but eventually released the full model after further evaluation. GPT-2 demonstrated significant improvements in text generation, translation, and other language tasks, but also raised concerns about the ethical implications of generating realistic, synthetic text.

### GPT-3

GPT-3, released in 2020, further expanded the model size to 175 billion parameters, making it one of the largest machine learning models at the time. It was pre-trained on the [WebText2](/index.php?title=WebText2&action=edit&redlink=1) dataset, which included a more diverse range of sources than the previous version. GPT-3 showed even greater improvements in language tasks and demonstrated the ability to perform "few-shot" learning, where the model can generalize from a small number of examples. GPT-3 has been used for tasks such as code generation, language translation, and creative writing.

### GPT-4

As of the knowledge cutoff date, GPT-4 is the latest version of the GPT series. It is expected to have further improvements in performance