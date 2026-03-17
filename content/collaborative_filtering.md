---
title: "Collaborative filtering"
slug: "collaborative_filtering"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Collaborative filtering (CF) is a widely-used technique in the field of machine learning, specifically in the domain of recommendation systems. It leverages the behavior or preferences of users within a community to make personalized recommendations for individual users. Collaborative filtering can be broadly categorized into two main approaches: user-based and item-based collaborative filtering.

## User-based Collaborative Filtering=

User-based collaborative filtering, also known as memory-based collaborative filtering, operates by identifying users who have similar preferences or behaviors to a target user. The underlying assumption is that users who have agreed in the past are likely to agree again in the future. The process involves calculating similarity measures between pairs of users, such as the Pearson correlation coefficient or cosine similarity, and using these values to determine the most similar users. Recommendations for a target user are then generated based on the preferences of their most similar users.

### Similarity Measures

In user-based collaborative filtering, it is crucial to accurately measure the similarity between users. Some common similarity measures used in this approach include:

- [Pearson correlation coefficient](/index.php?title=Pearson_correlation_coefficient&action=edit&redlink=1): Measures the linear correlation between two users' ratings, ranging from -1 (perfect negative correlation) to 1 (perfect positive correlation).

- [Cosine similarity](/index.php?title=Cosine_similarity&action=edit&redlink=1): Measures the cosine of the angle between two users' rating vectors, with a range of -1 (completely dissimilar) to 1 (completely similar).

- [Jaccard index](/index.php?title=Jaccard_index&action=edit&redlink=1): Measures the ratio of the intersection to the union of two users' rated items, ranging from 0 (no common items) to 1 (all items in common).

## Item-based Collaborative Filtering=

Item-based collaborative filtering, also known as model-based collaborative filtering, focuses on the relationships between items instead of users. It assumes that users will be interested in items that are similar to those they have previously liked or interacted with. This approach involves calculating similarity measures between items, such as adjusted cosine similarity or Tanimoto coefficient, and generating recommendations based on the most similar items to those a user has previously interacted with.

### Similarity Measures

Similar to user-based collaborative filtering, item-based collaborative filtering also requires accurate similarity measures. Some common similarity measures used in this approach include:

- [Adjusted cosine similarity](/index.php?title=Adjusted_cosine_similarity&action=edit&redlink=1): Measures the cosine similarity between two items after adjusting for user biases, with a range of -1 (completely dissimilar) to 1 (completely similar).

- [Tanimoto coefficient](/index.php?title=Tanimoto_coefficient&action=edit&redlink=1): Measures the ratio of the intersection to the union of two items' user sets, ranging from 0 (no common users) to 1 (all users in common).

## Matrix Factorization Techniques=

Matrix factorization techniques, such as singular value decomposition (SVD) and non-negative matrix factorization (NMF), are often employed in collaborative filtering to reduce the dimensionality of the user-item interaction matrix. By decomposing the matrix into lower-dimensional representations, these techniques capture latent factors that explain observed user-item interactions. Matrix factorization can improve the efficiency and accuracy of collaborative filtering methods, particularly in cases where the interaction matrix is sparse or high-dimensional.

## Explain Like I'm 5 (ELI5)

Imagine you want to watch a movie, and you don't know which one to choose. You ask your friends who have similar tastes in movies, and they tell you which movies they liked. Collaborative filtering is like asking your friends for movie recommendations. It uses information about other people's preferences to suggest movies that you might like. There are two main ways to do this: by looking at people who like the same movies as you (user-based) or by looking at movies that are similar to the ones you like (item-based).