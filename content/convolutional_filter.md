---
title: "Convolutional filter"
slug: "convolutional_filter"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Convolutional Filters in Machine Learning

A **convolutional filter** (also known as a **kernel** or **feature detector**) is a fundamental component of [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Networks&action=edit&redlink=1) (CNNs), a class of deep learning models specifically designed for processing grid-like data, such as images and time-series data. Convolutional filters are used to perform a mathematical operation called **convolution** on input data to detect and learn various features, such as edges, textures, and patterns, which contribute to the overall task of the neural network.

### Convolution Operation

The convolution operation involves the element-wise multiplication and summation of two matrices - the input data (for example an image or a portion of it) and the convolutional filter. The filter slides over the input data in a specific stride, extracting features by applying the element-wise multiplication and summing the results. This process generates a new matrix called a **feature map** or **convolved output** that represents the detected features of the input data. The convolution operation is mathematically defined as:

*C_{ij} = \sum_{m} \sum_{n} F_{mn} \cdot I_{i+m, j+n}*

where *C_{ij}* is the convolved output at position *(i, j)*, *F_{mn}* is the convolutional filter at position *(m, n)*, and *I_{i+m, j+n}* is the input data at position *(i+m, j+n)*.

### Learning Process

Convolutional filters are initialized with small random values and are updated during the training process using techniques such as [backpropagation](/wiki/backpropagation) and [gradient descent](/wiki/gradient_descent). As the model learns, the filter values are adjusted to minimize the loss function, allowing the CNN to better detect relevant features in the input data. 

### Multiple Convolutional Filters

CNNs typically employ multiple convolutional filters in each layer, enabling the model to learn and detect a diverse set of features. These filters are applied in parallel to the input data, generating multiple feature maps. By stacking multiple convolutional layers, CNNs can learn hierarchical representations and progressively complex features, which is essential for solving complex tasks like object recognition and natural language processing.

## Explain Like I'm 5 (ELI5)

Imagine that you have a large LEGO board with different colored bricks forming a picture. Now, you have a smaller transparent LEGO board with some holes in it. If you put the smaller board on top of the larger board and look through the holes, you can see a part of the picture underneath.

A convolutional filter in machine learning is like that smaller transparent LEGO board. It moves around the bigger picture (the input data) and tries to find interesting parts, like specific colors or shapes. The filter learns the best way to look at the picture so it can find those interesting parts more efficiently. In this way, it helps the computer understand and recognize important features in the data, like an object in a photo or the meaning of a sentence.