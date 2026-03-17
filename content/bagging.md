---
title: "Bagging"
slug: "bagging"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Bagging in Machine Learning

Bagging, or **Bootstrap Aggregating**, is a popular ensemble learning technique in machine learning that aims to improve the stability and accuracy of a base learning algorithm by training multiple instances of the same model on different subsamples of the training data. The predictions from the individual models are then combined, usually by means of a majority vote, to produce the final output. This method was first introduced by Leo Breiman in 1994.

### Bootstrapping and Subsampling

[Bootstrapping](/index.php?title=Bootstrapping&action=edit&redlink=1) is a statistical resampling technique used to estimate the accuracy of a model by creating several samples from the original dataset. In bagging, bootstrapping is applied by drawing random samples with replacement from the original dataset. Each of these samples, called a **bootstrap sample**, is then used to train an individual base model.

The size of each bootstrap sample is typically equal to the size of the original dataset, but only a fraction of the original instances is included due to the sampling with replacement. This results in each base model being trained on a unique subset of the data, making them less correlated and reducing overfitting.

### Combining Predictions

After training the individual base models, their predictions are combined to produce the final output. The most common approach to combine predictions is **voting**. In classification problems, each base model casts a vote for a particular class, and the class with the most votes is selected as the final prediction. For regression problems, the final prediction is usually obtained by taking the average of the individual model predictions.

## Advantages and Limitations

### Advantages

Bagging offers several benefits in machine learning applications, such as:

- **Improved accuracy**: By combining the outputs of multiple base models, bagging can often achieve better performance than a single model.

- **Reduced overfitting**: The random sampling of training instances helps create diverse models, which reduces the risk of overfitting.

- **Stability**: Bagging is less sensitive to noise in the data, making it more robust to outliers and small changes in the input data.

- **Parallelization**: The individual base models can be trained independently, allowing for efficient parallelization of the learning process.

### Limitations

Despite its advantages, bagging has some limitations:

- **Computationally expensive**: Bagging requires training multiple base models, which increases the computational cost and memory requirements.

- **Reduced interpretability**: The final prediction is obtained by combining the outputs of multiple base models, making it harder to understand the reasoning behind the decision.

## Explain Like I'm 5 (ELI5)

Imagine you want to guess the number of candies in a jar. Instead of having only one friend try to guess, you ask several friends to give their best guess. Each friend looks at the jar from a different angle, and they all come up with slightly different guesses.

Bagging in machine learning is like asking your friends for their guesses. It combines the ideas of many smaller models (like your friends' guesses) to come up with a better overall prediction. It does this by taking a bunch of smaller random samples from the data and training a model on each. Then, it combines their predictions, like counting up your friends' votes, to get the final answer. This helps make the overall prediction more accurate and less likely to be thrown off by a few weird data points.