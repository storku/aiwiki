---
title: "Cross-entropy"
slug: "cross-entropy"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Cross-entropy is a measure of the dissimilarity between two probability distributions, commonly used in machine learning, particularly in the context of training [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1) and other classification models. It serves as a widely used loss function in optimization algorithms, where the objective is to minimize the discrepancy between the predicted distribution and the true distribution of data. In this article, we will discuss the concept, derivation, and applications of cross-entropy in machine learning.

## Mathematical Definition

Cross-entropy is derived from the concept of [entropy](/wiki/entropy) in information theory, which quantifies the average number of bits required to represent events from a probability distribution. Given two discrete probability distributions *P* and *Q*, the cross-entropy *H(P, Q)* is mathematically defined as:

  
    
      
        H
        (
        P
        ,
        Q
        )
        =
        &#x2212;
        
          &#x2211;
          
            x
          
        
        P
        (
        x
        )
        log
        &#x2061;
        Q
        (
        x
        )
      
    
    {\displaystyle H(P,Q)=-\sum _{x}P(x)\log Q(x)}
  
*
where x* denotes the events in the sample space, *P(x)* is the probability of event *x* according to distribution *P*, and *Q(x)* is the probability of event *x* according to distribution *Q*. Cross-entropy is always non-negative and is minimized when *P = Q*. The base of the logarithm depends on the context; in machine learning, the natural logarithm (base *e*) is typically used.

### Binary Cross-Entropy

In binary classification problems, there are only two possible outcomes: positive (1) and negative (0). In this case, the cross-entropy between the true distribution *P* and the predicted distribution *Q* simplifies to:

  
    
      
        H
        (
        P
        ,
        Q
        )
        =
        &#x2212;
        [
        P
        (
        1
        )
        log
        &#x2061;
        Q
        (
        1
        )
        +
        P
        (
        0
        )
        log
        &#x2061;
        Q
        (
        0
        )
        ]
      
    
    {\displaystyle H(P,Q)=-[P(1)\log Q(1)+P(0)\log Q(0)]}
  
*
or, using the shorthand notation y* for *P(1)* and *\hat{y}* for *Q(1)*,

  
    
      
        H
        (
        P
        ,
        Q
        )
        =
        &#x2212;
        [
        y
        log
        &#x2061;
        
          
            
              y
              &#x005E;
            
          
        
        +
        (
        1
        &#x2212;
        y
        )
        log
        &#x2061;
        (
        1
        &#x2212;
        
          
            
              y
              &#x005E;
            
          
        
        )
        ]
      
    
    {\displaystyle H(P,Q)=-[y\log {\hat {y}}+(1-y)\log(1-{\hat {y}})]}
  
*
This form of cross-entropy is called binary cross-entropy and is commonly used in the training of binary classifiers, such as [logistic regression](/wiki/logistic_regression) models.

## Applications in Machine Learning

Cross-entropy serves as a loss function in various machine learning models, such as neural networks, logistic regression, and [softmax regression](/index.php?title=Softmax_regression&action=edit&redlink=1). In these contexts, the true distribution P* corresponds to the actual labels of the training data, while the predicted distribution *Q* corresponds to the model's output probabilities.

Minimizing cross-entropy as a loss function has several desirable properties:

- It is a differentiable function, which enables the use of gradient-based optimization algorithms, such as [stochastic gradient descent](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1) (SGD) and its variants.

- It implicitly encourages the model to produce well-calibrated probability estimates, as it penalizes not only incorrect predictions but also the degree of confidence in those predictions.

- Cross-entropy is invariant to translation and scaling, making it suitable for use in a variety of applications, including image classification, natural language processing, and reinforcement learning.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of different-colored balls, and you want to teach a friend to guess the color of a ball before pulling it out of the bag. Your friend starts by guessing the chances of each color. Cross-entropy is a way to measure how good their guesses are compared to the real chances.

In machine learning, cross-entropy helps us understand how well a model is doing by comparing its predictions to the actual answers. The smaller the cross-entropy, the better the