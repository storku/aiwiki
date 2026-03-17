---
title: "Recurrent neural network"
slug: "recurrent_neural_network"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Recurrent Neural Network

A **recurrent neural network** (**RNN**) is a class of [artificial neural network](/index.php?title=Artificial_neural_network&action=edit&redlink=1) designed to model sequential data by maintaining an internal state that can persist information across time steps. RNNs are particularly effective in tasks that involve time series data or sequences, such as natural language processing, speech recognition, and time series prediction.

### Structure and Function

Recurrent neural networks are composed of interconnected nodes or neurons, organized in layers, similar to other [artificial neural networks](/index.php?title=Artificial_neural_networks&action=edit&redlink=1). However, unlike feedforward neural networks, RNNs have cyclic connections that enable them to propagate information from previous time steps to the current one. This allows RNNs to maintain a hidden state, which effectively serves as a memory, capturing information about the history of the input sequence.

The key element in an RNN architecture is the recurrent hidden layer, which is responsible for propagating information through time. The hidden state is updated iteratively as new input data is processed, enabling the network to learn and model temporal dependencies in the input sequence.

### Training Techniques

RNNs are typically trained using a variant of the [backpropagation](/wiki/backpropagation) algorithm called **backpropagation through time** (**BPTT**). This technique involves unrolling the RNN through time, converting it into a feedforward neural network with multiple time steps. The error is then backpropagated from the output layer through the unrolled network, updating the weights and biases to minimize the loss function.

However, training RNNs can be challenging due to problems like exploding and vanishing gradients. To mitigate these issues, several modifications and alternative architectures have been proposed, such as **Long Short-Term Memory** (**LSTM**) networks and **Gated Recurrent Units** (**GRU**).

## Applications of Recurrent Neural Networks

RNNs have been successfully applied to various tasks that involve sequential data or time series, including:

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): RNNs are used in language modeling, sentiment analysis, machine translation, and other NLP tasks, as they can capture the dependencies between words in a sentence or document.

- [Speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1): RNNs can model the temporal structure of speech signals, improving the accuracy of speech-to-text conversion.

- [Time series prediction](/index.php?title=Time_series_prediction&action=edit&redlink=1): RNNs are employed to predict future values of time series data, such as stock prices or weather patterns, based on past observations.

- [Music generation](/index.php?title=Music_generation&action=edit&redlink=1): RNNs can learn patterns in music sequences and generate new, original compositions.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to read a sentence, but you can only see one word at a time. To understand the whole sentence, you need to remember the previous words while reading the next ones. That's what a recurrent neural network does! It can remember the past information and use it to process the current input. This helps it to understand things like sentences or patterns in music, and even predict what might come next!