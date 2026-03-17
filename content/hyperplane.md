---
title: "Hyperplane"
slug: "hyperplane"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition

In [machine learning](/wiki/machine_learning), a **hyperplane** refers to a geometric construct that serves as a decision boundary for separating different classes or categories of data points in a multidimensional space. It is an essential concept for many classification and regression algorithms, including the popular [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1) (SVM) method. Mathematically, a hyperplane is an (n-1)-dimensional subspace within an n-dimensional space. For instance, in a two-dimensional space, a hyperplane corresponds to a line, while in a three-dimensional space, it represents a plane.

## Equation of a Hyperplane

### General Form

The equation of a hyperplane in an n-dimensional space can be expressed in the general form:

  
    
      
        
          w
        
        &#x22C5;
        
          x
        
        +
        b
        =
        0
      
    
    {\displaystyle \mathbf {w} \cdot \mathbf {x} +b=0}
  
![{\displaystyle \mathbf {w} \cdot \mathbf {x} +b=0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8f635a7b5c8feaba0dc7bdaebe09f8de8e15fac6)

where

- 
  
    
      
        
          w
        
      
    
    {\displaystyle \mathbf {w} }
  
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) is an n-dimensional weight vector ([vector](/index.php?title=Vector&action=edit&redlink=1) of coefficients) perpendicular to the hyperplane

- 
  
    
      
        
          x
        
      
    
    {\displaystyle \mathbf {x} }
  
![{\displaystyle \mathbf {x} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2) is an n-dimensional feature vector (the coordinates of a point in the space)

- 
  
    
      
        b
      
    
    {\displaystyle b}
  
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3) is a scalar bias term

By varying the values of 
  
    
      
        
          w
        
      
    
    {\displaystyle \mathbf {w} }
  
![{\displaystyle \mathbf {w} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/20795664b5b048744a2fd88977851104cc5816f8) and 
  
    
      
        b
      
    
    {\displaystyle b}
  
![{\displaystyle b}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f11423fbb2e967f986e36804a8ae4271734917c3), different hyperplanes can be obtained to optimally separate different classes of data points in the feature space.

### Classification using Hyperplanes

For classification purposes, the hyperplane equation can be used to determine the category of a given data point. A point 
  
    
      
        
          x
        
      
    
    {\displaystyle \mathbf {x} }
  
![{\displaystyle \mathbf {x} }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32adf004df5eb0a8c7fd8c0b6b7405183c5a5ef2) is assigned to class 1 if 
  
    
      
        
          w
        
        &#x22C5;
        
          x
        
        +
        b
        >
        0
      
    
    {\displaystyle \mathbf {w} \cdot \mathbf {x} +b>0}
  
![{\displaystyle \mathbf {w} \cdot \mathbf {x} +b>0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0efa2064a6ec6d9af9ec2c94181988bfcd50a024) and to class -1 if 
  
    
      
        
          w
        
        &#x22C5;
        
          x
        
        +
        b
        <
        0
      
    
    {\displaystyle \mathbf {w} \cdot \mathbf {x} +b<0}
  
![{\displaystyle \mathbf {w} \cdot \mathbf {x} +b<0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c1327b54755b8f565d80a0297b78da60cf93e387). This enables the [classifier](/index.php?title=Classifier&action=edit&redlink=1) to categorize previously unseen data points based on their position relative to the hyperplane.

## Hyperplanes in Support Vector Machines

In [Support Vector Machines](/index.php?title=Support_Vector_Machines&action=edit&redlink=1), the goal is to find the optimal hyperplane that maximizes the margin between two classes of data points. The margin represents the distance between the hyperplane and the nearest data points from each class. These nearest points are called "support vectors" as they determine the position of the hyperplane. By maximizing the margin, SVM aims to improve the classifier's generalization ability, reducing the risk of overfitting and increasing its robustness to noise.

## Explain Like I'm 5 (ELI5)

Imagine you have a bunch of red and blue stickers on a table, and you want to draw a line (using a ruler) that separates the red stickers from the blue ones. In machine learning, this line is called a hyperplane. It helps a computer to tell if a new sticker should be red or blue based on where it is placed relative to this line. The same idea works in higher dimensions, like 3D space, where the "line" becomes a flat surface. Hyperplanes are useful tools in machine learning for organizing and making sense of data.