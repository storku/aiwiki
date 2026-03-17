---
title: "Tensor rank"
slug: "tensor_rank"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*
The rank of a [tensor](/wiki/tensor), also known as its *order*, refers to the number of dimensions or indices required to describe the tensor. Formally, the tensor rank is defined as the number of axes within a tensor. In other words, the tensor rank determines the complexity of the data structure, providing insights into the nature of the underlying data.

## Rank of common tensors in machine learning

### Scalar

A scalar, also known as a rank-0 tensor, is a single numerical value with no dimensions. Scalars are typically used to represent simple quantities such as a learning rate or a loss value in machine learning algorithms.

### Vector

A vector, or a rank-1 tensor, consists of an ordered list of numerical values, often referred to as *elements* or *components*. Vectors are one-dimensional and can be used to represent points in space, features in a dataset, or weights in a neural network.

### Matrix

A matrix is a rank-2 tensor, which is a two-dimensional rectangular array of numbers arranged in rows and columns. Matrices are commonly used in machine learning for representing linear transformations, adjacency matrices in graph-based models, and weight matrices in neural networks.

### Higher-Rank Tensors

Higher-rank tensors, with rank 3 or more, are multi-dimensional arrays that are used to represent more complex data structures in machine learning. For example, a rank-3 tensor can represent an RGB image, where each element is a color intensity value for a specific pixel location and color channel. Higher-rank tensors are also used in [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) models, such as convolutional neural networks and recurrent neural networks, to manipulate and process data.

## Explain Like I'm 5 (ELI5)

Imagine you have a box of blocks. Each block can be described using different numbers of words. For example, you can say you have just *one* block, which is a very simple description (like a single number, or a scalar). You can also describe the position of a block in a straight line, like "the 3rd block in the line" (like a vector). If you arrange the blocks in a flat grid, you can describe the position of a block by saying "2nd row, 4th column" (like a matrix). If you stack the blocks to create a 3D structure, you'll need three words to describe a block's position, such as "3rd layer, 2nd row, 4th column" (like a higher-rank tensor). The more words you need to describe the position of a block, the higher the "rank" of the structure you're using. In machine learning, we use these different "ranks" to help us work with different types of data.