---
title: "Trigram"
slug: "trigram"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning) and [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP), a **trigram** is a continuous sequence of three items from a given sample of text or speech. Trigrams are a type of n-gram, where *n* represents the number of items in the sequence. N-grams are used in various language modeling and feature extraction tasks to analyze and predict text data.

## Language Modeling

### Probability Estimation

Trigrams are often employed in language modeling to estimate the probability of a word given its preceding words. In a trigram model, the probability of a word occurring depends on the previous two words. This is expressed mathematically as:

P(word_n | word_n-1, word_n-2)

By utilizing trigram probabilities, language models can generate more accurate predictions, as they capture not only the immediate context ([bigram](/wiki/bigram)) but also a broader context of the surrounding words.

### Smoothing Techniques

Trigram language models can suffer from data sparsity, as not all possible combinations of three words may be present in the training data. To overcome this issue, [smoothing techniques](/index.php?title=Smoothing_techniques&action=edit&redlink=1) are applied to assign non-zero probabilities to unseen trigrams. Common smoothing methods include additive smoothing (also known as Laplace smoothing), Good-Turing discounting, and Kneser-Ney smoothing.

## Feature Extraction

Trigrams can be employed as features for various machine learning tasks, such as text classification, sentiment analysis, and information retrieval. In these applications, the presence or frequency of trigrams in a text document can serve as a discriminative feature, helping algorithms to identify patterns and make predictions.

For example, in [sentiment analysis](/wiki/sentiment_analysis), trigrams can help capture subtle nuances in the sentiment expressed in a text, as they provide more context than unigrams (individual words) or bigrams (pairs of consecutive words).

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of letter blocks, and you want to arrange them to make sentences. A trigram is like picking up three blocks in a row and seeing how they fit together. In the world of computers and language, trigrams help the computer understand how words are usually put together, so it can make better guesses about what comes next. This helps the computer make sense of what people are saying and even make its own sentences that sound more natural.

## Introduction

In the field of machine learning, trigrams are a type of n-gram model, specifically a sequence of three consecutive items, usually words or characters, from a given text. Trigrams are used in various natural language processing (NLP) tasks, such as language modeling, text classification, and information retrieval, to capture the contextual information within the text. This article will provide a detailed overview of trigrams, their applications, and methods of implementation in machine learning.

## N-grams in Natural Language Processing

N-grams are a fundamental concept in natural language processing, used to model and represent the relationships between items in a sequence. The general term 'n-gram' refers to a contiguous sequence of n items, where n can be any integer value.

### Unigrams

Unigrams are the simplest form of n-grams, representing individual items within a sequence. In the context of text processing, a unigram would be a single word or character.

### Bigrams

Bigrams are sequences of two consecutive items. In text processing, a bigram would consist of two consecutive words or characters, capturing the relationship between the two items.

### Trigrams

Trigrams, the focus of this article, are sequences of three consecutive items. In text processing, a trigram would consist of three consecutive words or characters. Trigrams are useful for modeling the context and relationships among three items, which can improve the performance of machine learning algorithms in various NLP tasks.

## Applications of Trigrams

Trigrams are used in a variety of NLP tasks to capture contextual information and improve the performance of machine learning algorithms. Some common applications include:

### Language Modeling

Trigrams are often used in language modeling to estimate the probability of a word or character occurring in a sequence, given the previous two words or characters. This allows for more accurate predictions by taking into account the context provided by the trigram.

### Text Classification

In text classification tasks, such as sentiment analysis or topic classification, trigrams can be used to extract features from the text data, which can then be used by machine learning algorithms to classify the text into various categories.

### Information Retrieval

Trigrams can be employed in information retrieval systems, such as search engines, to improve the relevance of search results. By considering trigram occurrences in the text, search engines can better understand the context and relationships among the query terms, leading to more accurate and relevant search results.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to understand a sentence or a story. You can think of trigrams as groups of three words or characters that help you understand what's happening. By looking at these groups of three, you can better understand the relationships between the words and how they work together. Trigrams are used in computer programs to help them understand and process language, like when you search for something on the internet or when a computer tries to figure out if a sentence is happy or sad.