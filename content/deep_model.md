---
title: "Deep model"
slug: "deep_model"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), a deep model is an artificial [neural network](/wiki/neural_network) composed of multiple [layers](/index.php?title=Layers&action=edit&redlink=1) (more than 1 [hidden layer](/wiki/hidden_layer)). These networks are designed to learn representations of [data](/index.php?title=Data&action=edit&redlink=1) that become increasingly abstract and complex as it progresses through each layer. Deep models have been employed in order to achieve top-of-the-art performance on various tasks such as [image](/wiki/image_recognition) and [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and game playing.

- Deep model is also known as the [deep neural network](/wiki/deep_neural_network).

## Background

[Artificial neural networks](/index.php?title=Artificial_neural_network&action=edit&redlink=1) (ANNs) are [machine learning models](/wiki/machine_learning_models) inspired by the structure and function of the human brain. They consist of interconnected nodes, known as [neurons](/wiki/neuron), organized into layers. Each neuron takes [input](/index.php?title=Input&action=edit&redlink=1) from neurons in its previous layer, applies a mathematical [function](/index.php?title=Function&action=edit&redlink=1) to it, then produces an [output](/index.php?title=Output&action=edit&redlink=1) which is transmitted onto subsequent layers.

Early neural networks, such as the [perception](/index.php?title=Perception&action=edit&redlink=1) and multilayer perceptron, were composed of only one or two layers of neurons. As a result, these models were limited in their capacity to learn complex connections between inputs and outputs.

Deep models, on the other hand, are distinguished by their depth - that is, how many layers they contain. These models typically boast multiple times more layers than early neural networks and may consist of tens to hundreds or even thousands. Popular examples of deep models include [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Network&action=edit&redlink=1) (CNNs), [Recurrent Neural Networks](/index.php?title=Recurrent_Neural_Network&action=edit&redlink=1) (RNNs) and [Deep Belief Networks](/index.php?title=Deep_Belief_Network&action=edit&redlink=1) (DBNs).

## Architecture

Deep models typically consist of an [input layer](/wiki/input_layer), multiple [hidden layers](/wiki/hidden_layer) and an [output layer](/wiki/output_layer). Each of these contains neurons that perform computations on the input data they receive. The neurons in the input layer receive raw data such as images or sequences of words and pass it along to their counterparts in the first hidden layer. As more complex computations take place on this input data from previous layers, higher-level [features](/wiki/features) begin to emerge from it. Finally, the output layer produces final predictions or [classifications](/wiki/classification) based on what has been learned through hidden layers.

## Training

Deep models are trained using [backpropagation](/wiki/backpropagation), a type of [supervised learning](/wiki/supervised_learning). During [training](/wiki/training), the [model](/wiki/model) is presented with [labeled examples](/wiki/labeled_example) or [training data](/wiki/training_data) and it adjusts its neurons' [parameters](/index.php?title=Parameters&action=edit&redlink=1) to minimize the difference between predicted outputs and true [labels](/wiki/label). To do this, it computes the [gradient](/wiki/gradient) error with respect to each parameter's value and uses that information as input into an [optimization algorithm](/index.php?title=Optimization_algorithm&action=edit&redlink=1) for updating those variables accordingly.

Training a deep model can be an intensive computational task, particularly for large datasets and complex architectures. One popular technique to expedite training is mini-batch [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1), which involves randomly selecting a small subset of the training data for each update to the model's parameters.

## Applications

Deep models have been widely applied to machine learning tasks such as image and speech recognition, natural language processing, and game playing. They achieved state-of-the-art performance on several benchmark datasets such as [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) for [image classification](/index.php?title=Image_classification&action=edit&redlink=1), [MS COCO](/index.php?title=MS_COCO&action=edit&redlink=1) for [object detection](/index.php?title=Object_detection&action=edit&redlink=1), and [LibriSpeech](/index.php?title=LibriSpeech&action=edit&redlink=1) for speech recognition. Furthermore, deep models are utilized in natural language processing tasks like [machine translation](/index.php?title=Machine_translation&action=edit&redlink=1), [sentiment analysis](/wiki/sentiment_analysis), and [question and answering](/index.php?title=Question_and_answering&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

A deep model is a type of computer program that attempts to learn from [examples](/wiki/examples). For instance, if you wanted your robot to know the difference between dogs and cats, showing it lots of pictures would help it uncover what makes each unique. A deep model works like an intricate brain with many layers, looking at pictures over and over again in order to change its neurons' connections between neurons so it becomes better at distinguishing dogs and cats.