---
title: "Labeled example"
slug: "labeled_example"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Labeled Example in Machine Learning

### Definition

In the field of [machine learning](/wiki/machine_learning), a labeled example refers to a data point that consists of an input feature vector and its corresponding output value, often referred to as the target or label. Labeled examples are essential for supervised learning algorithms, which use these examples to learn a model that can make predictions or classifications on unseen data. The process of generating labeled examples involves acquiring raw data, preprocessing it, and then associating it with appropriate labels, often through human annotation or other reliable sources.

### Types of Labels

Depending on the specific task and dataset, labels in machine learning can be categorized into two main types:

#### Categorical Labels

Categorical labels, also known as class labels, are used in classification tasks, where the objective is to assign one of a finite number of discrete categories or classes to an input data point. Common examples include image classification, where an image is assigned to one of several categories (for example cat, dog, or car), and sentiment analysis, where a piece of text is labeled as positive, negative, or neutral.

#### Continuous Labels

Continuous labels, on the other hand, are used in regression tasks, where the goal is to predict a continuous numerical value for a given input data point. Typical examples include predicting housing prices based on input features such as location, size, and age of the house, or estimating a person's weight based on height, age, and other relevant factors.

## Labeled Example Creation Process

Creating labeled examples involves several steps, which may vary depending on the specific domain, dataset, and problem being addressed:

### Data Acquisition

The first step is to collect raw data relevant to the problem being solved. This data can come from various sources, such as sensors, databases, or user-generated content. It is important to ensure that the collected data is representative of the problem space to avoid potential biases in the learning process.

### Data Preprocessing

Before associating labels with the input data, it may be necessary to preprocess the data to remove noise, handle missing values, or normalize features. This step is crucial in ensuring that the data is in a suitable format for the machine learning algorithm and can help improve the performance of the resulting model.

### Label Assignment

The final step in creating labeled examples is assigning the appropriate label to each input data point. This process often involves human annotators who are experts in the domain, although semi-supervised or unsupervised methods can also be used to generate labels for certain tasks. In some cases, the process of label assignment may require significant time and effort, and the quality of the labels can directly impact the performance of the machine learning model.

## Explain Like I'm 5 (ELI5)

Imagine you're learning how to sort different fruits by their type, like apples, oranges, and bananas. Your mom shows you a basket of fruits and tells you the name of each fruit as you look at them. This is like a labeled example in machine learning. Each fruit is a piece of data, and the name your mom tells you is the label. By learning from these labeled examples, you can figure out how to sort fruits on your own when you see new ones. The same thing happens in machine learning: the computer learns from labeled examples to make predictions or classify new, unseen data.