---
title: "Tensor size"
slug: "tensor_size"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In machine learning, **tensor size** refers to the dimensions of a [tensor](/wiki/tensor), which is a multi-dimensional data structure often used to represent and manipulate data in various mathematical operations. Tensors are the generalization of scalars, vectors, and matrices, with scalars being zero-dimensional tensors, vectors being one-dimensional tensors, and matrices being two-dimensional tensors. Tensor size, also known as tensor shape, indicates the number of elements along each dimension of the tensor.

## Representation of Tensors

Tensors can be represented using different data structures and libraries, such as NumPy arrays in Python, PyTorch tensors, or TensorFlow tensors. Regardless of the specific implementation, tensors are defined by their rank, shape, and data type.

### Rank

The rank of a tensor is the number of dimensions it has. For example:

- Scalars have a rank of 0.

- Vectors have a rank of 1.

- Matrices have a rank of 2.

- Higher-dimensional tensors have ranks of 3 or more.

### Shape

The shape of a tensor is a tuple that indicates the size of each dimension. The length of the tuple corresponds to the rank of the tensor. For example:

- A scalar has an empty shape, for example *()*.

- A vector with 5 elements has a shape of *(5, )*.

- A 3x4 matrix has a shape of *(3, 4)*.

- A 3-dimensional tensor with dimensions 2x3x4 has a shape of *(2, 3, 4)*.

### Data Type

The data type of a tensor indicates the type of elements it contains. Common data types include integers (for example int32, int64) and floating-point numbers (for example float32, float64). The data type determines the memory usage and computational efficiency of tensor operations.

## Applications in Machine Learning

In machine learning, tensors are widely used for representing and processing data. Some common applications include:

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) models, which typically involve multi-dimensional arrays of data being passed through multiple layers of computation.

- [Convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs), which utilize multi-dimensional tensors to represent images and perform spatial operations.

- [Recurrent neural networks](/index.php?title=Recurrent_neural_networks&action=edit&redlink=1) (RNNs), which use tensors to store and process sequences of data.

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP), where tensors are used to represent word embeddings, sentences, and documents.

## Explain Like I'm 5 (ELI5)

Imagine you have a box of colorful blocks. Each block represents a number, and you can arrange the blocks in different ways to create shapes like lines, squares, or even cubes. In machine learning, these shapes are called tensors, and the size of the shape is how many blocks you have in each direction. If you have a line of 5 blocks, the size is 5. If you have a square made of 3 rows and 4 columns, the size is 3x4. Just like how you can create more complex shapes with your blocks, tensors can have many more dimensions, and their size tells us how many blocks there are in each dimension.