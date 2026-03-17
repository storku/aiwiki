---
title: "Shape (Tensor)"
slug: "shape_tensor"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

A **shape** in the context of machine learning and deep learning refers to the structure or dimensionality of a **tensor**, which is a multi-dimensional array of numerical values. Tensors are the fundamental building blocks of many machine learning models and frameworks, such as [TensorFlow](/wiki/tensorflow) and [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1). The shape of a tensor is characterized by the number of dimensions it has, known as its **rank**, and the size of each dimension, known as its **axes**. 

## Tensor Shapes and Rank

### Rank

The rank of a tensor is the number of dimensions it possesses. Scalars, which are single numerical values, have a rank of 0. Vectors, which are one-dimensional arrays, have a rank of 1. Matrices, which are two-dimensional arrays, have a rank of 2. Higher-dimensional arrays are called tensors, and their rank is equal to the number of dimensions they have.

### Axes

The axes of a tensor are the individual dimensions along which the data is organized. The size of each axis is the number of elements present in that specific dimension. For example, a 3x3 matrix has two axes: one of size 3 in the row direction and another of size 3 in the column direction.

## Examples of Tensor Shapes

- A scalar has a shape of `()`.

- A vector with 4 elements has a shape of `(4,)`.

- A 3x3 matrix has a shape of `(3, 3)`.

- A 3-dimensional tensor with dimensions 2x3x4 has a shape of `(2, 3, 4)`.

## Manipulating Tensor Shapes

In many machine learning operations, it is necessary to reshape or manipulate the shape of tensors to match the input or output requirements of different layers or algorithms. Common operations include:

- **Reshaping**: Changing the shape of a tensor without altering its data or the total number of elements. For example, reshaping a tensor with shape `(2, 3)` to have a shape of `(3, 2)` or `(6,)`.

- **Squeezing**: Removing dimensions with a size of 1 from the shape of a tensor. For example, squeezing a tensor with shape `(1, 3, 1, 4)` would result in a shape of `(3, 4)`.

- **Unsqueezing**: Adding dimensions with a size of 1 to the shape of a tensor. For example, unsqueezing a tensor with shape `(3, 4)` could result in a shape of `(1, 3, 1, 4)`.

## Explain Like I'm 5 (ELI5)

Imagine you have a big box of building blocks. Each block can be thought of as a number. A **shape** tells us how the blocks are arranged inside the box. For example, if the shape is `(2, 3)`, that means there are 2 rows and 3 columns of blocks. The word **tensor** is just a fancy name for a box of blocks with a certain shape. In machine learning, we use these tensors to store and process data, and sometimes we need to change their shape to make them fit together nicely.