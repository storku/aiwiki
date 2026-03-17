---
title: "Least squares regression"
slug: "least_squares_regression"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In machine learning, **Least Squares Regression** is a well-established method for fitting a linear model to a set of data points. It seeks to minimize the sum of the squared differences between the observed values and the values predicted by the linear model. This technique is particularly useful in applications where the relationship between input features and the target variable is linear or near-linear. In this article, we will provide an overview of the least squares regression method, discuss its mathematical basis, and present its implementation in machine learning.

## Mathematical Foundation

### Ordinary Least Squares

The primary objective of the **[Least Squares](/index.php?title=Least_Squares&action=edit&redlink=1)** method is to minimize the sum of the squared residuals, where a residual is the difference between the observed value and the value predicted by the model. Mathematically, the objective function for ordinary least squares (OLS) regression can be expressed as:

  
    
      
        
          min
          
            &#x03B2;
          
        
        
          &#x2211;
          
            i
            =
            1
          
          
            n
          
        
        (
        
          y
          
            i
          
        
        &#x2212;
        
          
            x
          
          
            i
          
        
        
          &#x03B2;
        
        
          )
          
            2
          
        
      
    
    {\displaystyle \min _{\boldsymbol {\beta }}\sum _{i=1}^{n}(y_{i}-{\boldsymbol {x}}_{i}{\boldsymbol {\beta }})^{2}}
  
![{\displaystyle \min _{\boldsymbol {\beta }}\sum _{i=1}^{n}(y_{i}-{\boldsymbol {x}}_{i}{\boldsymbol {\beta }})^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/200695aacd6042008d51a6f5da809c288440da7c)
Here, 
  
    
      
        n
      
    
    {\displaystyle n}
  
![{\displaystyle n}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a601995d55609f2d9f5e233e36fbe9ea26011b3b) is the number of data points, 
  
    
      
        
          y
          
            i
          
        
      
    
    {\displaystyle y_{i}}
  
![{\displaystyle y_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67d30d30b6c2dbe4d6f150d699de040937ecc95f) represents the observed values, 
  
    
      
        
          
            x
          
          
            i
          
        
      
    
    {\displaystyle {\boldsymbol {x}}_{i}}
  
![{\displaystyle {\boldsymbol {x}}_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6dfbd99e446ac6b35c8b37e9ff3c360be9089f82) is a row vector of input features, and 
  
    
      
        
          &#x03B2;
        
      
    
    {\displaystyle {\boldsymbol {\beta }}}
  
![{\displaystyle {\boldsymbol {\beta }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/702cafc420cc00c54896f6d125112820956aaf6b) is a column vector of model parameters to be estimated.

To find the optimal values of the parameters that minimize the objective function, we can compute the gradient with respect to 
  
    
      
        
          &#x03B2;
        
      
    
    {\displaystyle {\boldsymbol {\beta }}}
  
![{\displaystyle {\boldsymbol {\beta }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/702cafc420cc00c54896f6d125112820956aaf6b) and set it to zero. The resulting equation, called the **normal equation**, provides a closed-form solution for 
  
    
      
        
          &#x03B2;
        
      
    
    {\displaystyle {\boldsymbol {\beta }}}
  
![{\displaystyle {\boldsymbol {\beta }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/702cafc420cc00c54896f6d125112820956aaf6b):

  
    
      
        
          &#x03B2;
        
        =
        (
        
          
            X
          
          
            T
          
        
        
          X
        
        
          )
          
            &#x2212;
            1
          
        
        
          
            X
          
          
            T
          
        
        
          y
        
      
    
    {\displaystyle {\boldsymbol {\beta }}=({\boldsymbol {X}}^{T}{\boldsymbol {X}})^{-1}{\boldsymbol {X}}^{T}{\boldsymbol {y}}}
  
![{\displaystyle {\boldsymbol {\beta }}=({\boldsymbol {X}}^{T}{\boldsymbol {X}})^{-1}{\boldsymbol {X}}^{T}{\boldsymbol {y}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0cd494ca32f06f4fdcc0d63291d74772d96b5929)
Where 
  
    
      
        
          X
        
      
    
    {\displaystyle {\boldsymbol {X}}}
  
![{\displaystyle {\boldsymbol {X}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/899e933d518eefcbbd0c48512cc7887ee117d040) is the matrix of input features and 
  
    
      
        
          y
        
      
    
    {\displaystyle {\boldsymbol {y}}}
  
![{\displaystyle {\boldsymbol {y}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ca3ae71d44145d721c4b15d442e03005e5ea9850) is the vector of observed values.

### Gradient Descent

In some cases, the closed-form solution of the normal equation can be computationally expensive, particularly when the number of input features is large. An alternative approach to solving the least squares problem is **[Gradient Descent](/index.php?title=Gradient_Descent&action=edit&redlink=1)**, an iterative optimization algorithm that adjusts the model parameters by moving in the direction of the steepest decrease in the objective function. The update rule for gradient descent in the context of least squares regression is:

  
    
      
        
          
            &#x03B2;
          
          
            t
            +
            1
          
        
        =
        
          
            &#x03B2;
          
          
            t
          
        
        &#x2212;
        &#x03B1;
        
          &#x2207;
          
            &#x03B2;
          
        
        L
        (
        
          
            &#x03B2;
          
          
            t
          
        
        )
      
    
    {\displaystyle {\boldsymbol {\beta }}_{t+1}={\boldsymbol {\beta }}_{t}-\alpha \nabla _{\boldsymbol {\beta }}L({\boldsymbol {\beta }}_{t})}
  
![{\displaystyle {\boldsymbol {\beta }}_{t+1}={\boldsymbol {\beta }}_{t}-\alpha \nabla _{\boldsymbol {\beta }}L({\boldsymbol {\beta }}_{t})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2fc91fc8b2c3741375e8202460fb990c4b695677)
Where 
  
    
      
        
          
            &#x03B2;
          
          
            t
          
        
      
    
    {\displaystyle {\boldsymbol {\beta }}_{t}}
  
![{\displaystyle {\boldsymbol {\beta }}_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/caf6156f0c5b62c9cc0441f989fb49e2329db752) is the current estimate of the parameters, 
  
    
      
        &#x03B1;
      
    
    {\displaystyle \alpha }
  
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) is the learning rate, and 
  
    
      
        
          &#x2207;
          
            &#x03B2;
          
        
        L
        (
        
          
            &#x03B2;
          
          
            t
          
        
        )
      
    
    {\displaystyle \nabla _{\boldsymbol {\beta }}L({\boldsymbol {\beta }}_{t})}
  
![{\displaystyle \nabla _{\boldsymbol {\beta }}L({\boldsymbol {\beta }}_{t})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c0e8a44bfbdffd9d114d070bb1ccc12d60945a8) is the gradient of the objective function with respect to 
  
    
      
        
          &#x03B2;
        
      
    
    {\displaystyle {\boldsymbol {\beta }}}
  
![{\displaystyle {\boldsymbol {\beta }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/702cafc420cc00c54896f6d125112820956aaf6b) at the current parameter estimates.

## Applications in Machine Learning

Least squares regression has widespread applications in machine learning due to its simplicity and effectiveness in modeling linear relationships. It is often employed as a baseline method to compare the performance of more complex models. Common applications of least squares regression in machine learning include:

- Predictive modeling: Least squares regression can be used to make predictions about the target variable based on new input data.

- Feature selection: By analyzing the significance of model parameters, least squares regression can aid in identifying important features for further modeling.

- Model evaluation: Performance metrics such as the coefficient of determination (<math>R