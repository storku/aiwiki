---
title: "Numerical data"
slug: "numerical_data"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Numerical data, also referred to as quantitative data, is a type of data used extensively in [machine learning](/wiki/machine_learning) and other computational disciplines. It consists of data points that can be represented and manipulated using numbers. In machine learning, numerical data is particularly important as it forms the foundation for mathematical models and algorithms that learn patterns and make predictions. This article will discuss the characteristics, types, and representation of numerical data in machine learning contexts, as well as provide a simple explanation for readers who are new to the subject.

## Characteristics of Numerical Data

Numerical data exhibits several key characteristics that make it particularly suited for use in machine learning:

### Measurable and Scalable

Numerical data can be measured on a scale, allowing for easy comparison and manipulation. This enables machine learning algorithms to perform operations such as addition, subtraction, and multiplication, which are essential for most mathematical models.

### Continuous and Discrete Data

Numerical data can be either continuous or discrete. Continuous data can take on any value within a specified range, whereas discrete data can only take on distinct, separate values. Machine learning algorithms often handle these two types of numerical data differently, as their properties and assumptions can vary.

### Standardization and Normalization

Numerical data can be transformed through standardization and normalization processes, which make it easier for machine learning algorithms to interpret and process the data. Standardization rescales data to have a mean of zero and a standard deviation of one, while normalization adjusts the data to fit within a specific range, such as [0, 1] or [-1, 1]. These transformations help improve algorithm performance and convergence.

## Representation of Numerical Data in Machine Learning

In machine learning, numerical data is commonly represented in various data structures, such as:

### Vectors

Vectors are one-dimensional arrays of numerical data points. They can represent individual data points or feature values in a dataset, making them a common structure used in machine learning algorithms.

### Matrices

Matrices are two-dimensional arrays of numerical data, often used to represent multiple data points and their corresponding feature values simultaneously. Matrices play a crucial role in linear algebra operations, which are fundamental to many machine learning algorithms.

### Tensors

Tensors are multi-dimensional arrays of numerical data, extending the concept of vectors and matrices to higher dimensions. Tensors are particularly useful in deep learning models, such as [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) and [recurrent neural networks](/index.php?title=Recurrent_neural_networks&action=edit&redlink=1), where complex data structures are required.

## Explain Like I'm 5 (ELI5)

Imagine you have a basket of different fruits, and you want to teach a robot how to recognize and sort them. To do that, you need to give the robot information about the fruits in a way it can understand. Numerical data is a way to describe things using numbers, like counting the number of seeds in each fruit or measuring their weight.

In machine learning, which is a way to teach computers to learn from data, numerical data helps the computer understand the information better. It can be like counting the number of seeds (discrete data) or measuring the weight of the fruit (continuous data). This data is organized in different ways, like lists (vectors), tables (matrices), or even more complex structures (tensors).

So, numerical data is essential for teaching computers to recognize patterns and make decisions, just like the robot sorting fruits.