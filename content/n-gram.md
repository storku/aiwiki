---
title: "N-gram"
slug: "n-gram"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of machine learning and natural language processing, an **N-gram** is a contiguous sequence of N items from a given sample of text or speech. N-grams are widely used for various tasks in computational linguistics, such as statistical language modeling, text classification, and information retrieval. The term "N-gram" is derived from the combination of the letter "N" and the word "gram," which originates from the Greek word "gramma," meaning "letter" or "written character."

## Types of N-grams

N-grams can be categorized based on the value of N:

### Unigrams (1-gram)

A unigram is a sequence of a single item, such as a word or character, from a given text. Unigrams provide a basic representation of a text and are the simplest type of N-grams.

Example:
Text: "Machine learning is fun."
Unigrams: ["Machine", "learning", "is", "fun."]

### Bigrams (2-gram)

A bigram consists of two consecutive items from a given text. Bigrams are often used to capture information about word pairs and their co-occurrence.

Example:
Text: "Machine learning is fun."
Bigrams: [["Machine", "learning"], ["learning", "is"], ["is", "fun."] ]

### Trigrams (3-gram)

A trigram is a sequence of three consecutive items from a given text. Trigrams are used to represent the context of word triplets and their relationships.

Example:
Text: "Machine learning is fun."
Trigrams: [["Machine", "learning", "is"], ["learning", "is", "fun."] ]

## Applications of N-grams

N-grams are utilized in various applications of machine learning and natural language processing:

### Language Modeling

N-grams are used in statistical language models to predict the probability of a word or sequence of words, given the context. Language models are an essential component of many natural language processing tasks, such as [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1), [machine translation](/index.php?title=Machine_translation&action=edit&redlink=1), and [text generation](/index.php?title=Text_generation&action=edit&redlink=1).

### Text Classification

In text classification tasks, N-grams can be employed as features to represent the content of a text document. They help in capturing the local context and word order information, which can be useful in differentiating between various classes or topics.

### Information Retrieval

N-grams are used in information retrieval systems, such as search engines, to improve the effectiveness of query matching and document ranking. They can also help in dealing with issues like spelling variations and word proximity.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of Lego blocks with words written on them. An N-gram is a way to connect these blocks to make different combinations. If you connect just one block, that's a unigram. If you connect two blocks, that's a bigram. And if you connect three blocks, that's a trigram.

These N-grams help computers understand and predict what words come next in sentences, and they can be used for things like making search engines better or helping computers understand and create text.

## N-gram in Machine Learning

N-grams are a fundamental concept in the fields of [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP) and [machine learning](/wiki/machine_learning). N-grams are contiguous sequences of *n* items from a given text or speech sample, where *n* represents the length of the sequence. The items can be characters, words, or other units depending on the application. N-grams are commonly used for various tasks, such as text classification, language modeling, and information retrieval.

### Definition and Types

An N-gram is defined as a sequence of *n* elements (usually words or characters) that appear consecutively in a text. Depending on the value of *n*, N-grams can be classified into different types:

- **Unigram**: When *n* = 1, the N-gram is called a unigram. Unigrams are individual words or characters in a text.

- **Bigram**: When *n* = 2, the N-gram is called a bigram. Bigrams are pairs of consecutive words or characters.

- **Trigram**: When *n* = 3, the N-gram is called a trigram. Trigrams consist of three consecutive words or characters.

- **4-gram, 5-gram, ...**: Higher-order N-grams can also be defined for larger values of *n*.

### Applications in Machine Learning

N-grams play an essential role in various machine learning and NLP tasks, some of which include:

- **Language Modeling**: N-grams are used to estimate the probability of a word occurring in a sequence, given the context of the previous words. This helps in generating text, predicting the next word in a sentence, and correcting grammar or spelling.

- **Text Classification**: N-grams can be used as features for classifying texts into different categories, such as spam detection, sentiment analysis, or topic categorization.

- **Information Retrieval**: In [search engines](/index.php?title=Search_engines&action=edit&redlink=1), N-grams are employed to find relevant documents for a given query by comparing the N-grams in the query with the N-grams in the documents.

- **Speech Recognition**: N-grams are utilized to identify and correct errors in transcribed speech by considering the context of the surrounding words.

- **Text Similarity**: N-grams can be used to measure the similarity between two texts by comparing their N-gram distributions.

### Limitations

Despite their widespread use, N-grams have certain limitations:

- **Data Sparsity**: As the value of *n* increases, the number of possible N-grams grows exponentially, leading to sparse data and a lack of observed instances for many N-grams.

- **Lack of Semantic Information**: N-grams capture local context but may fail to account for the deeper semantic meaning of words and phrases.

- **Long-range Dependencies**: N-grams can model only short-range dependencies and may struggle with capturing the relationships between words separated by long distances.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to learn how people talk by studying lots of books, newspapers, and websites. One way to do this is to look at groups of words that appear together. These groups are called N-grams. When you look at single words, that's a 1-gram (or unigram). When you look at two words that appear next to each other, that's a 2-gram (or bigram). You can also look at three words (trigrams) or even more words together.

These N-grams help computers understand how people talk and write. They can be used to make computer programs like search engines, smart assistants