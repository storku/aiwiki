---
title: "Node (decision tree)"
slug: "node_decision_tree"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), a **node** refers to a point within a [decision tree](/wiki/decision_tree) at which a decision is made based on the input data. Decision trees are hierarchical, tree-like structures used to model decisions and their possible consequences, including the chance event outcomes, resource costs, and utility. Nodes in decision trees can be of three types: root node, internal node, and leaf node.

### Root Node

The **root node** is the starting point of a decision tree, which represents the initial state or the first decision to be made. It is the topmost node in the tree and has no incoming edges. The root node branches out to one or more internal nodes, which in turn lead to other internal nodes or leaf nodes.

### Internal Node

An **internal node** (also known as a decision or split node) is an intermediate node in the decision tree. It represents a decision point where the data is further split or partitioned based on a specific feature or attribute. Each internal node has one incoming edge and two or more outgoing edges, which connect to other internal nodes or leaf nodes.

### Leaf Node

A **leaf node** (also known as a terminal or end node) is the final node in a decision tree, representing an outcome or class label. Leaf nodes do not have any outgoing edges, and they are where the decision-making process ends.

## Learning Algorithm

Decision trees in machine learning are constructed using a learning algorithm, which selects the best attributes to split the data at each node based on a certain criterion. Popular learning algorithms for decision trees include [CART](/index.php?title=CART&action=edit&redlink=1) (Classification and Regression Trees), [ID3](/index.php?title=ID3&action=edit&redlink=1) (Iterative Dichotomiser 3), and [C4.5](/index.php?title=C4.5&action=edit&redlink=1).

These algorithms rely on various splitting criteria, such as entropy, information gain, Gini impurity, and gain ratio, to decide which attribute is the most suitable for splitting the data at each node. The learning process continues recursively until a stopping criterion is met, such as reaching a maximum depth or having a minimum number of samples in each leaf node.

## Pruning

To prevent [overfitting](/wiki/overfitting) and improve generalization, decision trees can be pruned, which involves removing some of the nodes and branches. Pruning can be performed either during the tree construction process (pre-pruning) or after the tree is fully grown (post-pruning).

Various pruning techniques, such as reduced-error pruning, cost-complexity pruning, and minimum error tree pruning, are used to trim the tree and create a simpler, more interpretable model that performs well on unseen data.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game of 20 questions, and you have to guess the animal someone is thinking of. Each question you ask helps you narrow down the possibilities until you can make a final guess. In this game, each question is like a **node** in a decision tree.

A decision tree starts with a big question (the **root node**) and breaks it down into smaller questions (the **internal nodes**). Each smaller question helps you make a better decision about what the animal might be. When you reach the end of the questions and make your final guess, you've reached the **leaf node**.

In machine learning, a computer uses a similar process to make decisions based on data. It starts with a big question and breaks it down into smaller questions until it can make a final decision.