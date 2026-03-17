---
title: "Multi-head self-attention"
slug: "multi-head_self-attention"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Multi-head self-attention is a core component of the [Transformer](/wiki/transformer) architecture, a type of neural network introduced by Vaswani et al. (2017) in the paper "Attention Is All You Need". This mechanism allows the model to capture complex relationships between the input tokens by weighing their importance with respect to each other. The multi-head aspect refers to the parallel attention computations performed on different subspaces of the input embeddings, allowing the model to learn diverse patterns of attention.

## Multi-Head Self-Attention Mechanism

The multi-head self-attention mechanism is a key component of the transformer architecture that enables the model to efficiently learn and encode dependencies between input elements. The following subsections describe the main components of the mechanism and the steps involved in the computation.

### Scaled Dot-Product Attention

The foundation of multi-head self-attention is the scaled dot-product attention mechanism. Given a set of queries (Q), keys (K), and values (V), the attention mechanism computes a weighted sum of the values, where the weights are determined by the dot product of the query and key vectors. The dot product is scaled by the square root of the key dimension, which helps to stabilize gradients during training. Mathematically, the scaled dot-product attention can be expressed as:

Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V

Here, d_k represents the dimension of the key vectors.

### Multi-Head Attention

In the multi-head attention mechanism, the input embeddings are linearly projected into multiple subspaces, each with its own set of query, key, and value matrices. The scaled dot-product attention is then computed in parallel for each of these subspaces, resulting in multiple attention heads. The outputs of these attention heads are concatenated and linearly transformed to obtain the final output. This process allows the model to capture diverse attention patterns within the input data. The multi-head attention can be represented as:

MultiHead(Q, K, V) = concat(head_1, ..., head_h) * W^O

where head_i = Attention(Q * W^Q_i, K * W^K_i, V * W^V_i)

Here, W^Q_i, W^K_i, and W^V_i are the linear projection matrices for the queries, keys, and values, respectively, and W^O is the output projection matrix.

## Explain Like I'm 5 (ELI5)

Imagine you're in a room with your friends, and you want to figure out which friends you should pay attention to when they're speaking. Multi-head self-attention is like having multiple "listening helpers" who are each really good at focusing on different aspects of your friends' conversations. Each helper pays attention to different groups of friends and their topics. They then report back to you, combining their observations. This way, you get a better understanding of the whole room and all the conversations happening, making sure you don't miss any important information. In machine learning, multi-head self-attention helps the model learn from different parts of the input data and understand how they relate to each other, giving it a better understanding of the overall context.