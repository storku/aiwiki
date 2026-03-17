---
title: "Stride"
slug: "stride"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, **stride** refers to a parameter that determines the step size used during the convolution or pooling process in [convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs). Stride plays a critical role in managing the spatial dimensions of feature maps, which can directly affect the model's efficiency and computational requirements. This article will explain the concept of stride, its role in CNNs, and its impact on the model's performance.

## Stride in Convolutional Layers

### Definition

In a [convolutional layer](/wiki/convolutional_layer), the stride is the number of pixels by which the convolutional filter, or kernel, moves across the input image or feature map. A larger stride results in a smaller output feature map, while a smaller stride leads to a larger output feature map. The stride is often specified as an integer value (for example 1, 2, or 3) or a tuple containing two integers (for example (1, 2)) for different strides in the horizontal and vertical dimensions.

### Effects on Spatial Dimensions

The stride determines the spatial dimensions of the output feature map in a convolutional layer. Specifically, the width and height of the output feature map can be calculated using the following formulas, where $W_{in}$ and $H_{in}$ are the width and height of the input feature map, $K_w$ and $K_h$ are the width and height of the kernel, $P_w$ and $P_h$ are the padding values, and $S_w$ and $S_h$ are the stride values:

$W_{out} = \frac{W_{in} - K_w + 2 \cdot P_w}{S_w} + 1$

$H_{out} = \frac{H_{in} - K_h + 2 \cdot P_h}{S_h} + 1$

As the stride increases, the output feature map's dimensions decrease, which can reduce the computational complexity of the convolutional layer and the overall CNN.

## Stride in Pooling Layers

### Definition

In a [pooling layer](/index.php?title=Pooling_layer&action=edit&redlink=1), the stride specifies the step size used when applying the pooling operation, such as max-pooling or average pooling, over the input feature map. Similar to the convolutional layer, the stride in a pooling layer is specified as an integer value or a tuple of two integers.

### Effects on Spatial Dimensions

The stride in a pooling layer also affects the output feature map's spatial dimensions. The output width and height can be calculated using similar formulas as for convolutional layers, replacing the kernel dimensions with the pooling window dimensions. By adjusting the stride in a pooling layer, the model's computational complexity and spatial information representation can be controlled.

## Explain Like I'm 5 (ELI5)

Imagine you have a big grid of numbers, and you want to look at small groups of these numbers at a time using a smaller window. The stride is how many spaces you move your window each time you slide it across the grid. In machine learning, this helps us process images and other data in smaller pieces, making it easier for the computer to understand what's going on. When the stride is bigger, the computer looks at fewer pieces, making it faster but possibly less detailed. When the stride is smaller, the computer looks at more pieces, which can give it a better understanding but might take longer to process.