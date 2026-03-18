---
title: "Feature vector"
slug: "feature_vector"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

[Machine learning](/wiki/machine_learning) utilizes feature vectors, which are numerical values that describe an object or phenomenon. A feature vector may be defined as an n-dimensional [array](/index.php?title=Array&action=edit&redlink=1) of numerical [features](/wiki/features) representing a [data point](/index.php?title=Data_point&action=edit&redlink=1) or [example](/wiki/example). 

As an array of [feature](/wiki/feature) values that represent an [example](/wiki/example), feature vector is used in [training](/wiki/training) the [model](/wiki/model) and using the model to make predictions ([inference](/wiki/inference)).

## Creating Feature Vectors

Feature vectors are created by extracting relevant features from raw data. [Feature extraction](/wiki/feature_extraction) involves selecting the most significant characteristics and representing them numerically. For instance, in [image recognition](/wiki/image_recognition), relevant features might include color, texture, and shape of an object in an image; similarly, in [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) these might include word or phrase frequencies within a document.

Once features have been identified, they are transformed into a vector of numerical values known as the feature vector. This feature vector can then be fed into various machine learning [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) for [input](/index.php?title=Input&action=edit&redlink=1). Constructing such a feature vector often involves complex techniques like [dimensionality reduction](/index.php?title=Dimensionality_reduction&action=edit&redlink=1) or [feature scaling](/index.php?title=Feature_scaling&action=edit&redlink=1) that require specialized expertise.

## Example

![Mnist example1.png](/images/thumb/a/ac/Mnist_example1.png/400px-Mnist_example1.png)

Let us assume we have a [dataset](/wiki/dataset) of images of handwritten digits (0-9), and want to use machine learning algorithms to [classify](/index.php?title=Classify&action=edit&redlink=1) these images into their corresponding digits. In order to do this, we need to extract features from the images which can be utilized as features vectors for use by machine learning algorithms; one way of doing this is by converting the images into feature vectors.

Take for instance this grayscale image of the numeral "5":

![Mnist 5 example1.png](/images/3/3d/Mnist_5_example1.png)

From this image we can deduce the following features:

- [Mean](/index.php?title=Mean&action=edit&redlink=1) intensity of pixels

- [Standard deviation](/index.php?title=Standard_deviation&action=edit&redlink=1) of pixel intensities

- [Skewness](/index.php?title=Skewness&action=edit&redlink=1) of pixel intensities

- [Kurtosis](/index.php?title=Kurtosis&action=edit&redlink=1) of pixel intensities

Our feature vector for this image would then be:

[Mean intensity, Standard deviation, Skewness and Kurtosis] = [123, 10, 0.5, 2.0]

This feature vector, consisting of 4 features, represents the image of digit "5". Machine learning algorithms can use this feature vector as input and train themselves to classify images based on these features.

## Why are Feature Vectors Important?

Feature vectors are essential in representing complex data in an easily comprehendible form. Machine learning algorithms use feature vectors to quickly compare and manipulate data points, making it possible to perform various [tasks](/index.php?title=Tasks&action=edit&redlink=1) such as [classification](/wiki/classification), [regression](/wiki/regression), and [clustering](/wiki/clustering) more effectively.

Another noteworthy characteristic of feature vectors is their potential to be exploited through powerful mathematical techniques like [linear algebra](/index.php?title=Linear_algebra&action=edit&redlink=1) and [calculus](/index.php?title=Calculus&action=edit&redlink=1). These can be employed to transform and manipulate feature vectors in order to reveal hidden patterns and relationships within data, leading to new insights and the development of more precise [machine learning models](/wiki/machine_learning_models).

## Explain Like I'm 5 (ELI5)

Imagine you have a collection of pictures featuring different fruits like apples, bananas and oranges. In order to teach a computer how to recognize these items, you would need to provide it with some information about each fruit - such as its color, size and shape.

A feature vector is like a comprehensive list of all the pertinent details you want your computer to know about each fruit, such as its shape. For instance, an apple's feature vector might look something like this:

[Rougeness, Roundness, Size and Sweetness]

Each item in the list identifies an apple by computer using its unique feature vector. Comparing apples to bananas or oranges, their feature vectors would differ since those fruits possess distinct traits.

By providing the computer with multiple feature vectors for different fruits, it can learn to distinguish each fruit based on its distinctive set of traits.