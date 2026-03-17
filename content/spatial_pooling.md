---
title: "Spatial pooling"
slug: "spatial_pooling"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Spatial Pooling in Machine Learning

Spatial pooling, also known as spatial subsampling, is a technique utilized in various machine learning algorithms, particularly in the field of [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Networks&action=edit&redlink=1) (CNNs). It is designed to reduce the spatial dimensions of feature maps while retaining significant information. Spatial pooling is essential in creating a more compact representation of the input data, which consequently reduces computational complexity and prevents overfitting. The primary methods of spatial pooling include max pooling, average pooling, and global average pooling.

### Max Pooling

Max pooling is a prevalent form of spatial pooling applied in CNNs. It works by selecting the maximum value within a specific region of the feature map. The process is performed by sliding a non-overlapping window, typically 2x2 or 3x3 in size, across the input feature map, extracting the maximum value from each window. This method effectively retains the most prominent features while simultaneously reducing the dimensions of the data. Max pooling has been shown to improve model robustness against small translations and distortions in the input data.

### Average Pooling

Average pooling, as the name suggests, computes the average value within a specific region of the feature map, similar to max pooling. By utilizing a sliding window, average pooling calculates the mean of the values within the window and replaces the region with the computed average. This technique results in a smoother, more uniform representation of the input data. However, average pooling may not be as effective as max pooling in preserving high-frequency features or edges in the input data.

### Global Average Pooling

Global average pooling (GAP) is a more recent development in the spatial pooling domain. Instead of applying a sliding window to the feature map, GAP calculates the average value for each channel, effectively reducing the spatial dimensions to a 1x1xN tensor, where N represents the number of channels. This method is particularly useful in reducing overfitting and simplifying the architecture of CNNs by eliminating the need for fully connected layers at the end of the network.

## Explain Like I'm 5 (ELI5)

Imagine you have a large painting with many details, and you want to make a smaller copy of it. Spatial pooling in machine learning is like making that smaller copy but keeping only the most important parts. In the smaller copy, you still want the main shapes and colors, but you don't need every tiny detail. By doing this, you can save time and space and still have a useful picture.