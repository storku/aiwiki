---
title: "Eager execution"
slug: "eager_execution"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Eager execution is a programming paradigm in machine learning that offers a more intuitive and flexible way of building, training, and debugging computational graphs. Unlike the traditional graph-based execution, which requires the construction of a static computation graph before running any operations, eager execution allows operations to be executed immediately as they are called, similar to standard Python programs. TensorFlow, a popular machine learning library developed by Google, introduced eager execution as a major feature in version 2.0.

## Eager Execution vs. Graph-based Execution

### Graph-based Execution

Graph-based execution is the traditional approach for executing machine learning models, particularly in deep learning frameworks such as TensorFlow and Theano. In graph-based execution, a computation graph is constructed by defining the mathematical operations and their dependencies. The graph represents the flow of data (tensors) through various operations, and is optimized before it is executed. This approach allows for various optimizations and parallelization opportunities but makes the development and debugging process less intuitive and more challenging.

### Eager Execution

Eager execution, on the other hand, allows for the immediate execution of operations as they are called. This approach simplifies the development process and makes it easier to debug the code since it executes in a more familiar imperative programming style. Eager execution also enables better integration with Python libraries and improved support for dynamic control flow, as it allows developers to use standard Python control flow statements such as loops and conditional statements directly in their code.

However, eager execution may result in reduced performance compared to graph-based execution due to the lack of graph-level optimizations. To address this issue, modern frameworks like TensorFlow 2.0 provide features such as the [tf.function](/index.php?title=Tf.function&action=edit&redlink=1) decorator, which can be used to optimize portions of the code for graph-based execution while retaining the benefits of eager execution.

## Benefits of Eager Execution

Some of the main advantages of eager execution in machine learning include:

- Intuitive programming style: Eager execution allows developers to write code in a more familiar imperative programming style, which can lead to improved readability and ease of understanding.

- Easier debugging: As operations execute immediately, debugging is simplified, and errors can be identified and resolved more quickly.

- Dynamic control flow: Eager execution provides better support for dynamic control flow, making it easier to implement complex algorithms with varying control structures.

- Improved Python library integration: With eager execution, machine learning models can be integrated more seamlessly with other Python libraries and tools.

## Explain Like I'm 5 (ELI5)

Imagine you're building a LEGO tower. In the traditional graph-based execution approach, you first plan and draw the whole tower on paper, including all the LEGO pieces you need and how they fit together. Then, you build the entire tower at once, following the plan.

Eager execution is like building the LEGO tower piece by piece without a plan. You decide which LEGO piece to add as you go, and you can see your tower grow and change in real-time. This approach makes it easier to understand and fix any issues you might encounter while building the tower, but it might not be as fast or efficient as following a pre-planned design.