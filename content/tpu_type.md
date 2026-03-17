---
title: "TPU type"
slug: "tpu_type"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning, a *Tensor Processing Unit* (TPU) is a specialized type of hardware designed to accelerate various operations in neural networks. TPUs, developed by Google, have gained significant traction in the deep learning community due to their ability to provide high-performance computation with reduced energy consumption compared to traditional [GPUs](/index.php?title=Graphics_Processing_Units&action=edit&redlink=1) or [CPUs](/index.php?title=Central_Processing_Units&action=edit&redlink=1). This article provides an overview of the TPU architecture, its capabilities, and its impact on machine learning applications.

## TPU Architecture

### Overview

The TPU architecture is specifically tailored to support the unique computational requirements of machine learning tasks. It consists of a two-dimensional array of processing elements called a *systolic array*. These processing elements are designed to perform matrix multiplications, which are the core operations involved in neural network computations. The systolic array is supported by a large on-chip memory and high-bandwidth interconnects, ensuring efficient data movement and reducing the need for off-chip memory access.

### Instruction Set

The TPU features a custom instruction set that is tailored for machine learning workloads, enabling the efficient execution of both forward and backward propagation in neural networks. This instruction set allows for the implementation of various machine learning models, including [CNNs](/index.php?title=Convolutional_Neural_Networks&action=edit&redlink=1), [RNNs](/index.php?title=Recurrent_Neural_Networks&action=edit&redlink=1), and [Transformers](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1). The instructions are designed to support low-precision arithmetic, which is sufficient for most machine learning tasks and contributes to the overall energy efficiency of the TPU.

## Impact on Machine Learning

The introduction of TPUs has had a significant impact on the machine learning community, as they have allowed researchers and practitioners to train and deploy neural networks at unprecedented scales. TPUs have facilitated the development of large-scale models, such as [BERT](/index.php?title=BERT_(language_model)&action=edit&redlink=1), [OpenAI](/wiki/openai)'s [GPT-3](/wiki/gpt-3), and [Google Translate](/index.php?title=Google_Translate&action=edit&redlink=1), which have demonstrated remarkable performance across various natural language processing tasks. Additionally, TPUs have enabled faster training times and reduced energy consumption, making them a popular choice for both academia and industry.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to solve a really big puzzle, and you have a special machine that can help you put the pieces together much faster. A TPU is like that special machine, but instead of helping with puzzles, it helps with calculations needed for a special type of computer program called a neural network. These neural networks help computers learn and understand things, like pictures, sounds, or even what we're saying. TPUs make it easier and faster for computers to learn, which helps us create better and smarter computer programs.