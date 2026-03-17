---
title: "Federated learning"
slug: "federated_learning"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Federated learning is a decentralized approach to machine learning that aims to enable multiple participants to collaboratively train a shared model while keeping their data private. This method has garnered significant attention in recent years due to its potential to address privacy, security, and scalability concerns in distributed machine learning systems. The core principle of federated learning is to allow local devices or systems to process data and then share the learned model updates, rather than the raw data itself, with a central server. In this article, we will delve into the concepts, techniques, and applications of federated learning.

## Overview

### Definition

Federated learning can be defined as a collaborative machine learning technique wherein multiple participants, or "clients," train a shared machine learning model by processing local data and sharing only the learned model updates with a central server. This approach ensures that the raw data remains on the clients' devices, thus preserving data privacy and security.

### Techniques

There are several techniques employed in federated learning to optimize the process of model training and aggregation. Some of the key techniques include:

- [Stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD): A popular optimization algorithm for training machine learning models, which is often used in federated learning settings.

- Model averaging: A method of aggregating updates from multiple clients by taking the average of their respective model updates.

- Secure multi-party computation: A cryptographic technique that allows multiple clients to jointly compute a function while keeping their input data private.

- Differential privacy: A privacy-preserving technique that adds noise to the data or model updates to ensure that individual data points cannot be easily identified.

### Applications

Federated learning has found applications in a variety of domains where data privacy, security, and scalability are of paramount importance. Some notable applications include:

- [Healthcare](/index.php?title=Healthcare&action=edit&redlink=1): Federated learning can be used to train machine learning models on sensitive medical data from multiple hospitals or medical institutions while maintaining patient privacy.

- Mobile devices: Companies such as [Google](/index.php?title=Google&action=edit&redlink=1) have implemented federated learning to train predictive text models on users' smartphones, ensuring that sensitive data, like personal text messages, remains on the device.

- [Internet of Things](/index.php?title=Internet_of_Things&action=edit&redlink=1) (IoT): Federated learning can be employed to train machine learning models on data collected from IoT devices, without requiring the transfer of potentially sensitive data to a central server.

## Explain Like I'm 5 (ELI5)

Imagine you and your friends have a big pile of colored blocks, and you all want to learn how to sort them by color without showing each other your own blocks. Federated learning is like each of you learning how to sort your own blocks at home, then sharing only the sorting tips you learned with each other. By combining everyone's tips, you all learn how to sort the blocks better without ever seeing each other's blocks. This way, your blocks' privacy is protected, and you all still learn from each other's experiences.