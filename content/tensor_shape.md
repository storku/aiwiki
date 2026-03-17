---
title: "Tensor shape"
slug: "tensor_shape"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Tensor Shape in Machine Learning

Tensor shape is a fundamental concept in the field of machine learning, particularly in deep learning architectures, where tensors are used as the primary data structure for representing and processing multidimensional data. In this article, we will explore the meaning of tensor shape, its significance in machine learning, and some common operations performed on tensors.

### Definition and Background

In machine learning, a tensor is a multidimensional array of numerical values, organized in a regular grid-like structure. A tensor's shape is a tuple that describes the number of elements along each dimension of the tensor. The length of this tuple is equal to the number of dimensions, also known as the rank or order of the tensor. For example, a matrix, which is a 2-dimensional tensor, has a shape represented by a tuple of two integers: (number of rows, number of columns).

Tensors are integral to deep learning frameworks such as [TensorFlow](/wiki/tensorflow) and [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), which utilize them for efficient computation and data manipulation. Tensor shape is crucial for determining how tensors can be combined, manipulated, and processed in various machine learning algorithms.

### Common Operations on Tensors

There are several operations that can be performed on tensors, many of which involve manipulating their shape. Some common operations include:

- **Reshaping**: Changing the shape of a tensor without altering its data. This can be done using functions such as [NumPy](/wiki/numpy)'s `reshape` or TensorFlow's `tf.reshape`. It is important to ensure that the product of the dimensions in the original and new shapes remains the same.

- **Slicing**: Extracting a portion of a tensor by specifying a range of indices along one or more dimensions. This operation is useful for selecting specific elements, rows, columns, or other substructures from a tensor.

- **Concatenation**: Combining multiple tensors along a specified dimension. The shapes of the tensors must be compatible in all dimensions, except for the one along which the concatenation is performed.

- **Broadcasting**: Expanding a tensor with a lower rank to match the shape of another tensor with a higher rank, such that they can be combined through element-wise operations. Broadcasting involves replicating the elements of the lower-rank tensor along the missing dimensions.

## Explain Like I'm 5 (ELI5)

Imagine that a tensor is like a container filled with numbered balls, and the container has different sections (dimensions) to store these balls. The tensor shape tells you how many sections there are and how many balls can fit into each section. It helps you understand how the container is organized, so you can easily find and use the balls you need for your games (machine learning tasks).