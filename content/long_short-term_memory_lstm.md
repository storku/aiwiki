---
title: "Long Short-Term Memory (LSTM)"
slug: "long_short-term_memory_lstm"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Long Short-Term Memory (LSTM) is a type of recurrent neural network (RNN) architecture designed to address the limitations of traditional RNNs in learning long-term dependencies. LSTM networks were introduced by Hochreiter and Schmidhuber in 1997[&#91;1&#93;](#cite_note-Hochreiter1997-1), and they have since become a widely-used approach in various machine learning tasks, particularly in natural language processing (NLP) and time-series analysis.

## Architecture

LSTM networks consist of a series of memory cells, which are designed to store and manipulate information over time. Each memory cell has three primary components: an input gate, a forget gate, and an output gate. These gates control the flow of information in and out of the cell, allowing the network to learn which information is important to retain, and which can be discarded.

### Input Gate

The input gate is responsible for determining the extent to which new information should be added to the cell state. It uses a sigmoid activation function, which produces values between 0 and 1, to weigh the importance of incoming data. A value close to 0 indicates that the information is not important, while a value close to 1 signifies that the information is crucial and should be stored in the cell.

### Forget Gate

The forget gate, as the name suggests, determines which information in the cell state should be forgotten or removed. It also employs a sigmoid activation function to assign a weight to each piece of information in the cell state. If the weight is close to 0, the information is deemed unimportant and removed from the cell state, while a weight close to 1 ensures that the information is retained.

### Output Gate

The output gate controls the flow of information from the cell state to the rest of the network. It uses a sigmoid activation function to decide which parts of the cell state should be passed on to the next layer or timestep. This allows the network to selectively transmit relevant information while discarding less important data.

## Applications

LSTM networks have been successfully applied to a wide range of machine learning tasks, such as:

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1): LSTMs have proven effective in tasks such as language modeling, sentiment analysis, and machine translation due to their ability to capture long-term dependencies in text data.

- [Time-series analysis](/index.php?title=Time-series_analysis&action=edit&redlink=1): LSTMs can model complex temporal relationships in data, making them well-suited for tasks such as stock market prediction, weather forecasting, and anomaly detection.

- [Speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1): LSTMs have been used to improve the accuracy and efficiency of speech recognition systems, as they can effectively model the sequential nature of speech data.

## Explain Like I'm 5 (ELI5)

Imagine your brain is like a storage room, and you need to remember lots of different things. Long Short-Term Memory (LSTM) is like a smart helper that helps you decide what to keep and what to throw away. It does this using three special doors: the input door, the forget door, and the output door.

The input door decides what new things to keep. If something is important, it will open wide to let it in. If not, it will stay closed.

The forget door helps you throw away things you don't need anymore. If something is no longer important, the door

1. [↑](#cite_ref-Hochreiter1997_1-0) [Template:Cite journal](/index.php?title=Template:Cite_journal&action=edit&redlink=1)