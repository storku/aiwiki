---
title: "Forget gate"
slug: "forget_gate"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Forget Gate in Machine Learning

The **forget gate** is an essential component in machine learning models, particularly in Long Short-Term Memory (LSTM) neural networks. The primary function of the forget gate is to control the flow of information, enabling the network to learn long-term dependencies by regulating which information to retain or discard from the previous time step. This capability is crucial for sequence-to-sequence tasks, such as natural language processing, time-series prediction, and speech recognition.

### Long Short-Term Memory (LSTM) Networks

[Long Short-Term Memory (LSTM)](/wiki/long_short-term_memory_lstm) networks, introduced by Hochreiter and Schmidhuber in 1997, are a class of recurrent neural networks (RNNs) designed to overcome the vanishing gradient problem inherent in conventional RNNs. The vanishing gradient problem occurs when gradients of the loss function with respect to the weights become very small during backpropagation, hindering the learning process. LSTMs address this issue by using a unique cell structure and incorporating multiple gates, including the forget gate, to regulate the flow of information.

### Function of the Forget Gate

The forget gate is responsible for determining the extent to which the information from the previous cell state should be retained or discarded. It operates by taking the input from the previous hidden state (h_(t-1)) and the current input (x_t), passing them through a sigmoid activation function, which outputs a value between 0 and 1. A value closer to 0 implies that the information is mostly discarded, while a value closer to 1 signifies that the information is primarily retained.

Mathematically, the forget gate can be expressed as:

f_t = σ(W_f[h_(t-1), x_t] + b_f)

where:

- f_t is the output of the forget gate at time step t

- σ is the sigmoid activation function

- W_f is the weight matrix associated with the forget gate

- h_(t-1) is the hidden state from the previous time step

- x_t is the input at the current time step

- b_f is the bias term associated with the forget gate

## Explain Like I'm 5 (ELI5)

Imagine your brain is like a super busy train station, with lots of trains (information) coming in and going out. The forget gate is like a station manager who decides which trains (information) should be allowed to stay in the station (memory) and which trains should leave. This helps make sure that only the most important trains (information) are kept, and the station doesn't become too crowded with unnecessary trains. In this way, the forget gate helps the network remember the most important information and forget the less relevant information.