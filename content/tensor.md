---
title: "Tensor"
slug: "tensor"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, a **tensor** is a mathematical object that generalizes the concepts of scalars, vectors, and matrices. Tensors are extensively used in machine learning and deep learning algorithms, particularly in the development and implementation of [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1). They provide a flexible and efficient way to represent and manipulate data with multiple dimensions, allowing for the efficient execution of complex operations such as matrix multiplication and convolution.

## Tensor Structure and Properties

### Rank and Shape

A tensor's **rank** refers to the number of dimensions it possesses. Scalars have rank 0, vectors have rank 1, matrices have rank 2, and so on. The **shape** of a tensor describes the size of each dimension. For example, a 3x3 matrix has a shape of (3, 3) and a rank of 2. The total number of elements in a tensor can be determined by multiplying the sizes of all its dimensions.

### Data Types

Tensors can contain elements of various data types, such as integers, floating-point numbers, or complex numbers. In machine learning frameworks like [TensorFlow](/wiki/tensorflow) and [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), it is crucial to specify the data type when creating a tensor. This is important for memory management and computational efficiency, as different data types have different memory requirements and computational complexities.

## Operations on Tensors

Tensors can undergo several mathematical operations, including element-wise operations, matrix multiplication, and broadcasting. These operations are essential for implementing machine learning algorithms and neural network architectures.

### Element-wise Operations

Element-wise operations are performed on tensors with the same shape, applying a specific function to each pair of corresponding elements. Common element-wise operations include addition, subtraction, multiplication, and division.

### Matrix Multiplication

Matrix multiplication, also known as the dot product or tensor product, is a fundamental operation in linear algebra and is used extensively in machine learning. The operation involves multiplying two matrices or tensors of compatible shapes to produce a new tensor. For example, if tensor A has a shape of (m, n) and tensor B has a shape of (n, p), their product will have a shape of (m, p).

### Broadcasting

Broadcasting is a technique used to perform operations on tensors with different shapes. It automatically extends the smaller tensor's dimensions to match the larger tensor's shape without actually replicating the data. This approach allows for efficient memory usage and faster computations. Broadcasting is especially useful when working with large datasets or high-dimensional tensors.

## Tensor Libraries and Frameworks

Tensors are central to numerous machine learning libraries and frameworks, such as [TensorFlow](/wiki/tensorflow), [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), and [NumPy](/wiki/numpy). These tools provide efficient tensor implementations and a range of tensor manipulation functions, enabling researchers and engineers to develop complex machine learning models and algorithms.

## Explain Like I'm 5 (ELI5)

A tensor is like a container that can hold numbers in different shapes. Imagine you have a small box, a long stick, and a flat sheet of paper. The box is like a scalar (0-dimensional tensor) because it has only one number inside. The stick is like a vector (1-dimensional tensor) because it has numbers in a row. The sheet of paper is like a matrix (2-dimensional tensor) because it has numbers in rows and columns. A tensor is just a fancier container that can hold even more complex shapes of numbers. We use these containers in computer programs to help us solve problems and make machines learn new things.