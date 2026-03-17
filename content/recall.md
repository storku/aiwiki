---
title: "Recall"
slug: "recall"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Recall** is a performance metric commonly used in [machine learning](/wiki/machine_learning) and [information retrieval](/index.php?title=Information_retrieval&action=edit&redlink=1) to evaluate the effectiveness of classification and retrieval models. It is particularly useful when the cost of false negatives (failing to identify positive instances) is high. This article provides an in-depth understanding of the concept of recall, its mathematical formulation, and its relation to other performance metrics, such as precision and F1-score.

## Definition

Recall, also known as **sensitivity** or **true positive rate (TPR)**, is the proportion of true positive instances (correctly identified positive instances) among all the actual positive instances in the dataset. Mathematically, recall is defined as:

  
    
      
        R
        =
        
          
            
              T
              P
            
            
              T
              P
              +
              F
              N
            
          
        
      
    
    {\displaystyle R={\frac {TP}{TP+FN}}}
  
![{\displaystyle R={\frac {TP}{TP+FN}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fc8bbe6cd9485c02eb84737170cbb2d0a3fcbd88)

where:

- 
  
    
      
        R
      
    
    {\displaystyle R}
  
![{\displaystyle R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33) represents recall

- 
  
    
      
        T
        P
      
    
    {\displaystyle TP}
  
![{\displaystyle TP}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d2f2291e501a1c99921208d8d34b5a175731781f) denotes the number of true positives

- 
  
    
      
        F
        N
      
    
    {\displaystyle FN}
  
![{\displaystyle FN}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4e1c5b779dac08ca6c5a0bb2cc3d64e8375b5941) denotes the number of false negatives

Recall is generally expressed as a value between 0 and 1, where a value of 1 indicates perfect recall, and a value of 0 indicates that no positive instances were identified.

## Relation to Precision and F1-score

Recall is often used alongside [precision](/wiki/precision), another performance metric in machine learning. Precision measures the proportion of true positive instances among all the instances that were predicted as positive by the model. While recall emphasizes the ability of a model to correctly identify positive instances, precision focuses on the model's accuracy in predicting positive instances.

When evaluating the performance of a classification model, it is often necessary to consider both recall and precision to get a more comprehensive understanding of the model's performance. One way to do this is by calculating the **F1-score**, which is the harmonic mean of recall and precision. The F1-score is defined as:

  
    
      
        F
        1
        =
        2
        &#x22C5;
        
          
            
              P
              &#x22C5;
              R
            
            
              P
              +
              R
            
          
        
      
    
    {\displaystyle F1=2\cdot {\frac {P\cdot R}{P+R}}}
  
![{\displaystyle F1=2\cdot {\frac {P\cdot R}{P+R}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2b3cbf52cc672109e47e54d54cbffab13b78b9e)

where:

- 
  
    
      
        F
        1
      
    
    {\displaystyle F1}
  
![{\displaystyle F1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/530e62363a2c7f2cad893ff54c0e6d75b1d81945) represents the F1-score

- 
  
    
      
        P
      
    
    {\displaystyle P}
  
![{\displaystyle P}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b4dc73bf40314945ff376bd363916a738548d40a) denotes precision

- 
  
    
      
        R
      
    
    {\displaystyle R}
  
![{\displaystyle R}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4b0bfb3769bf24d80e15374dc37b0441e2616e33) denotes recall

The F1-score ranges from 0 to 1, with a value of 1 indicating a perfect balance between recall and precision.

## Applications

Recall is especially important in situations where false negatives carry a high cost, such as in medical diagnosis, fraud detection, or spam filtering. In these cases, a higher recall is desirable, as it ensures that the model correctly identifies as many positive instances as possible, even at the expense of a higher false positive rate.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of apples, and some of them are green (good) and some of them are red (bad). You want to find all the green apples, but you can't see the color of the apples inside the bag. You have a machine that can pick apples and tell you if they're green or not.

Recall is like a measure of how good the machine is at finding all the green apples in the bag. If the machine finds all the green apples and doesn't miss any, then the recall is perfect (1 or 100%). If the machine misses some green apples, the recall is lower. A high recall means that the machine is really good at finding green apples, even if it sometimes picks red apples by mistake.