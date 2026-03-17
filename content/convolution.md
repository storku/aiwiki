---
title: "Convolution"
slug: "convolution"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

Convolution is a mathematical operation widely used in the field of [machine learning](/wiki/machine_learning), especially in the domain of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) and [convolutional neural networks (CNNs)](/index.php?title=Convolutional_neural_networks_(CNNs)&action=edit&redlink=1). The operation involves the element-wise multiplication and summation of two matrices or functions, typically an input matrix (or image) and a kernel (or filter). The primary purpose of convolution is to extract features from the input data, enabling the machine learning model to learn hierarchically complex patterns and relationships.

## Mathematical Foundation

### Convolution Operation

The convolution operation between two functions, *f* and *g*, is mathematically denoted as *(f*g)* and is defined by an integral involving their product:

  
    
      
        (
        f
        &#x2217;
        g
        )
        (
        t
        )
        =
        
          &#x222B;
          
            &#x2212;
            &#x221E;
          
          
            &#x221E;
          
        
        f
        (
        &#x03C4;
        )
        g
        (
        t
        &#x2212;
        &#x03C4;
        )
        d
        &#x03C4;
      
    
    {\displaystyle (f*g)(t)=\int _{-\infty }^{\infty }f(\tau )g(t-\tau )d\tau }
  
*
In the context of discrete data like images or signals, the continuous integral is replaced by a sum:

  
    
      
        (
        f
        &#x2217;
        g
        )
        [
        n
        ]
        =
        
          &#x2211;
          
            m
            =
            &#x2212;
            &#x221E;
          
          
            &#x221E;
          
        
        f
        [
        m
        ]
        g
        [
        n
        &#x2212;
        m
        ]
      
    
    {\displaystyle (f*g)[n]=\sum _{m=-\infty }^{\infty }f[m]g[n-m]}
  
![{\displaystyle (f*g)[n]=\sum _{m=-\infty }^{\infty }f[m]g[n-m]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc04622900eeb4303dc0e40821f66a5ca8452301)
For images, the convolution operation can be represented as a double summation over a two-dimensional kernel, K*, applied to an input image, *I*:

  
    
      
        (
        I
        &#x2217;
        K
        )
        (
        x
        ,
        y
        )
        =
        
          &#x2211;
          
            m
          
        
        
          &#x2211;
          
            n
          
        
        I
        (
        m
        ,
        n
        )
        K
        (
        x
        &#x2212;
        m
        ,
        y
        &#x2212;
        n
        )
      
    
    {\displaystyle (I*K)(x,y)=\sum _{m}\sum _{n}I(m,n)K(x-m,y-n)}
  
![{\displaystyle (I*K)(x,y)=\sum _{m}\sum _{n}I(m,n)K(x-m,y-n)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dded901ee8e36271c8fe95a871b4b2b8a2c054d5)
The kernel is a smaller matrix compared to the input image, and it is used to extract features by sliding over the input image, performing element-wise multiplication and summation of the overlapping elements.

### Kernels and Feature Extraction

Kernels or filters are pivotal in the convolution process, as they are responsible for extracting specific features from the input data. Common kernel examples include edge detection, blur, and sharpen filters. These kernels are designed to emphasize or suppress certain properties in the input data, allowing the machine learning model to learn more effectively from the transformed data.

In deep learning, the kernels are usually initialized with random values and learned by the model during the training process. As the model learns, the kernels become more specialized in extracting useful features for the specific task at hand.

## Convolutional Neural Networks

Convolutional neural networks (CNNs) are a class of deep learning models that exploit the convolution operation for processing grid-like data, such as images, videos, and spectrograms. CNNs have demonstrated exceptional performance in tasks like image classification, object detection, and semantic segmentation.

A typical CNN architecture consists of several layers, including convolutional layers, activation functions, pooling layers, and fully connected layers. The convolutional layers perform the actual convolution operation, while the activation functions introduce non-linearity to the model, allowing it to learn complex patterns. Pooling layers are used to reduce the spatial dimensions of the feature maps, and fully connected layers serve as a final classifier or regressor.

## Explain Like I'm 5 (ELI5)

Imagine you have a big image made of tiny squares (pixels), and you want a machine to recognize objects in it. To do this, you can use a smaller grid (called a kernel) with some special patterns. You slide this smaller grid over the big image and let it look for similar patterns. When it finds them, it gets excited and tells you about it. This process is called convolution.

Convolution helps the machine to learn about important features in the image, like edges, colors, or shapes. By learning these features, it becomes better at recognizing objects and understanding the image as a whole.