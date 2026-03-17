---
title: "Parameter Server (PS)"
slug: "parameter_server_ps"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Parameter Server (PS) in Machine Learning

The **Parameter Server (PS)** is a distributed machine learning framework designed to manage the parameters of large-scale machine learning models during the training process. It is particularly useful when dealing with massive datasets and complex model architectures, which are common in [Deep Learning](/index.php?title=Deep_Learning&action=edit&redlink=1) and [Distributed Machine Learning](/index.php?title=Distributed_Machine_Learning&action=edit&redlink=1).

### Background

Traditional machine learning models could be trained on a single machine with limited computational resources. However, with the advent of deep learning and the increase in the size of datasets, training complex models on a single machine has become infeasible due to memory and computation limitations. This led to the development of distributed machine learning systems, which divide the training process across multiple machines or nodes. One such system is the Parameter Server, which was proposed by [Li et al. (2014)](/index.php?title=Li_et_al._(2014)&action=edit&redlink=1) in the paper "Scaling Distributed Machine Learning with the Parameter Server."

### Architecture and Operation

The Parameter Server architecture consists of two main components: the **server nodes** and the **worker nodes**. The server nodes are responsible for storing, updating, and synchronizing the parameters of the machine learning model, while the worker nodes handle the data processing and computation of gradients.

#### Server Nodes

The server nodes collectively store the global model parameters in a distributed fashion, with each node responsible for a portion of the parameters. The server nodes also perform the task of aggregating gradients received from worker nodes and updating the model parameters accordingly.

#### Worker Nodes

The worker nodes are responsible for processing the input data and computing gradients based on the current model parameters. Each worker node is assigned a subset of the training data, allowing the system to process the data in parallel. Once the worker nodes have computed the gradients, they communicate these updates to the server nodes.

### Synchronization Strategies

There are two primary synchronization strategies employed in Parameter Server systems: **synchronous updates** and **asynchronous updates**.

#### Synchronous Updates

In synchronous updates, all worker nodes must wait for the gradients to be aggregated and the model parameters to be updated before they can proceed with the next iteration. This approach ensures consistency in the model updates but can suffer from increased communication overhead and slower convergence.

#### Asynchronous Updates

In asynchronous updates, worker nodes do not wait for the gradients to be aggregated before proceeding with the next iteration. Instead, they independently update the model parameters as they compute gradients. This approach reduces communication overhead and can lead to faster convergence but may introduce inconsistencies in the model updates.

## Explain Like I'm 5 (ELI5)

Imagine you have a giant coloring book, and you want to color it as fast as possible with your friends. Each of you takes a page and starts coloring. The Parameter Server is like a big box of crayons that everyone shares. The server nodes are the smaller crayon boxes that hold some crayons for everyone to use, and the worker nodes are you and your friends, each coloring a page.

As you color, you may need more crayons or different colors. The server nodes keep track of the crayons and give them to you when you need them. Once you finish coloring, you tell the server nodes what you did so they can update the crayon box for the next round.

In some cases, everyone waits for each other to finish before grabbing new crayons (synchronous updates), while in other cases, you all just grab crayons whenever you need them without waiting (asynchronous updates).