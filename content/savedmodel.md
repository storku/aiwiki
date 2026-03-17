---
title: "SavedModel"
slug: "savedmodel"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## SavedModel in Machine Learning

SavedModel is a standardized, language-agnostic, and platform-independent serialization format for [machine learning](/wiki/machine_learning) models developed by [Google](/index.php?title=Google&action=edit&redlink=1) as part of the [TensorFlow](/wiki/tensorflow) framework. It facilitates the sharing, deployment, and management of trained models across different platforms, programming languages, and applications.

### Overview

The primary objective of SavedModel is to streamline the process of storing, exporting, and serving machine learning models. It is designed to encapsulate not only the model's architecture and weights but also the computation graph, metadata, and assets such as vocabulary files or tokenizers that are necessary for proper functioning. This comprehensive representation of a model ensures that it can be readily deployed in various production environments without the need for additional configuration or retraining.

### Format and Structure

A SavedModel comprises the following components:

- *MetaGraph:* A MetaGraph is a data structure that includes the model's computation graph, its signature functions (input and output specifications), and metadata. Each SavedModel can contain multiple MetaGraphs, each representing a different version or variant of the model.

- *Variables:* These are the trainable parameters of the model, such as weights and biases, stored in a binary format that allows for efficient storage and retrieval.

- *Assets:* Auxiliary files, such as vocabulary files, tokenizers, or other data necessary for the model's operation, are included as assets. These files are typically stored alongside the SavedModel and are automatically loaded during deployment.

- *SavedModel.pb:* This is the main file of the SavedModel format, containing a serialized representation of the model's MetaGraphs and metadata in [Protocol Buffers](/index.php?title=Protocol_Buffers&action=edit&redlink=1) format.

### Usage

SavedModel is widely used in TensorFlow-based projects for various purposes, including:

- **Exporting Models:** Trained models can be exported in SavedModel format to be shared with other researchers or integrated into applications.

- **Serving Models:** TensorFlow Serving, a high-performance serving system for machine learning models, supports the SavedModel format to allow for seamless deployment and serving of models in production environments.

- **Interoperability:** SavedModel's language-agnostic and platform-independent nature facilitates interoperability between different programming languages and machine learning frameworks.

## Explain Like I'm 5 (ELI5)

Imagine you've built a fantastic LEGO structure, and now you want to share it with your friends. But instead of carrying the whole structure, you take a picture of it and write down the instructions on how to build it. This way, your friends can recreate the structure using their own LEGO pieces, even if they don't have the same set as you.

In machine learning, SavedModel is like the picture and instructions for a LEGO structure. It helps people share, use, and manage trained models more easily, no matter what programming language or platform they use. It not only has the model's structure and important parts but also includes any extra files or instructions needed to make the model work well.