---
title: "TPU device"
slug: "tpu_device"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

A **Tensor Processing Unit (TPU)** is a type of application-specific integrated circuit (ASIC) designed and developed by Google specifically for accelerating machine learning tasks. TPUs are custom-built hardware accelerators optimized to handle the computational demands of [machine learning](/wiki/machine_learning) algorithms, particularly [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) and [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1). They provide significant performance improvements and energy efficiency compared to traditional general-purpose processors, such as CPUs and GPUs.

## Architecture and Design

### TPU v1: Inference Accelerator

Google introduced the first generation TPU, known as TPU v1, in 2016. This version was primarily focused on accelerating inference tasks, which are the processes of using trained machine learning models to make predictions or classifications. The TPU v1 is built around a large systolic array, which is an efficient way of performing the matrix multiplications that are central to many machine learning algorithms.

### TPU v2: Training and Inference Accelerator

In 2017, Google announced the second generation TPU, the TPU v2, which expanded its capabilities to include both training and inference tasks. The TPU v2 features a more powerful architecture, with 180 teraflops of processing power and 64 GB of high-bandwidth memory (HBM). The TPU v2 is also designed for use in Google's data centers, allowing researchers and engineers to leverage its capabilities through Google Cloud Platform's [TensorFlow](/wiki/tensorflow) Research Cloud and Google Cloud TPU services.

### TPU v3: Enhanced Performance and Efficiency

The TPU v3, released in 2018, further improved upon the TPU v2 in terms of performance and energy efficiency. The TPU v3 delivers more than 420 teraflops of processing power and 128 GB of HBM. Additionally, the TPU v3 features liquid cooling, which enables higher performance by maintaining optimal operating temperatures.

## Comparison to CPUs and GPUs

TPUs differ from traditional CPUs and GPUs in several key ways. While CPUs are general-purpose processors designed for a wide range of tasks and GPUs are optimized for graphics rendering and parallel computing, TPUs are specifically engineered for machine learning workloads. This specialization enables TPUs to deliver superior performance and energy efficiency for machine learning tasks.

Some advantages of TPUs over CPUs and GPUs include:

- High throughput for matrix operations, which are common in machine learning algorithms

- Lower-latency memory access, benefiting real-time applications

- Reduced power consumption, leading to lower operational costs and environmental impact

## Explain Like I'm 5 (ELI5)

A Tensor Processing Unit (TPU) is a special kind of computer chip made by Google. This chip is very good at doing certain types of math that are important for teaching computers to learn from data and make smart decisions. TPUs are like the "brains" for some computer programs that can recognize pictures, understand spoken words, and do other smart things. Because TPUs are designed just for this kind of math, they can do it faster and use less energy than other computer chips.