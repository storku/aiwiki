---
title: "TPU"
slug: "tpu"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Overview

A **Tensor Processing Unit (TPU)** is a type of application-specific integrated circuit (ASIC) developed by [Google](/index.php?title=Google&action=edit&redlink=1) for accelerating machine learning workloads. TPUs are designed to perform tensor computations efficiently, which are the foundational operations in machine learning algorithms, particularly deep learning models. They are optimized for handling large-scale matrix operations with low precision, enabling faster training and inference times compared to traditional CPUs and GPUs.

## Architecture

### First Generation TPU

The first generation TPU, unveiled by Google in 2016, was designed primarily for inference tasks in machine learning models. It featured a systolic array architecture, which provided efficient matrix multiplication operations by minimizing data movement and maximizing parallelism. The first-generation TPU supported 8-bit integer arithmetic, which was sufficient for most inference tasks.

### Second Generation TPU

Google introduced the second-generation TPU, also known as the TPU v2, in 2017. The TPU v2 expanded the capabilities of its predecessor by supporting both training and inference tasks. It increased the computational power significantly by incorporating floating-point arithmetic (bfloat16 and float32) and boosting the performance to 45 teraflops. The second-generation TPU also introduced support for the Google Cloud TPU service, allowing users to rent TPUs on-demand for their machine learning workloads.

### Third Generation TPU

The third-generation TPU, or TPU v3, was announced by Google in 2018. Building on the advances of the previous generation, the TPU v3 further increased the computational power to 100 teraflops per chip. Additionally, it introduced a liquid cooling system to address the higher power consumption and thermal output. The TPU v3 continued to support the bfloat16 and float32 numerical formats and maintained compatibility with the Google Cloud TPU service.

## Applications

TPUs are primarily used in the training and inference of deep learning models, such as [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs) and [recurrent neural networks](/index.php?title=Recurrent_neural_networks&action=edit&redlink=1) (RNNs). Their efficient tensor computation capabilities make them ideal for handling tasks that involve large-scale matrix operations, including image and speech recognition, natural language processing, and reinforcement learning.

Some notable applications of TPUs include:

- [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1), a computer program that defeated the world champion in the game of Go

- [Google Translate](/index.php?title=Google_Translate&action=edit&redlink=1), which uses TPUs to provide real-time translations of text and speech

- [Google Photos](/index.php?title=Google_Photos&action=edit&redlink=1), which employs TPUs for image recognition and categorization

## Explain Like I'm 5 (ELI5)

A Tensor Processing Unit, or TPU, is a special kind of computer chip made by Google. It's designed to help computers learn faster and be better at understanding things like pictures, sounds, and words. TPUs are like the brains of a computer, helping it think and solve problems more quickly than regular computer chips. Google has made several versions of TPUs, each one faster and smarter than the one before it. People use these special chips to make computers do amazing things, like understand different languages, recognize pictures, and even play games like a human.