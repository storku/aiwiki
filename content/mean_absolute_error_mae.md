---
title: "Mean Absolute Error (MAE)"
slug: "mean_absolute_error_mae"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Mean Absolute Error (MAE)

The **Mean Absolute Error (MAE)** is a widely used metric in [Machine Learning](/index.php?title=Machine_Learning&action=edit&redlink=1) and [Statistics](/index.php?title=Statistics&action=edit&redlink=1) to evaluate the performance of a predictive model. It measures the average magnitude of errors between the predicted and actual values, without considering the direction of the errors. MAE is a popular choice for regression tasks as it provides an easily interpretable representation of the model's error.

### Formulation and Interpretation

Mathematically, the Mean Absolute Error can be expressed as:

  
    
      
        M
        A
        E
        =
        
          
            1
            n
          
        
        
          &#x2211;
          
            i
            =
            1
          
          
            n
          
        
        
          |
        
        
          y
          
            i
          
        
        &#x2212;
        
          
            
              
                y
                &#x005E;
              
            
          
          
            i
          
        
        
          |
        
      
    
    {\displaystyle MAE={\frac {1}{n}}\sum _{i=1}^{n}|y_{i}-{\hat {y}}_{i}|}
  
*
where:

- n* is the number of data points or observations,

- *yi* represents the actual value of the *i*-th observation,

- *
  
    
      
        
          
            
              
                y
                &#x005E;
              
            
          
          
            i
          
        
      
    
    {\displaystyle {\hat {y}}_{i}}
  
![{\displaystyle {\hat {y}}_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5058f005e41a46a3c8d75449e20bac02bfe1609e)* denotes the predicted value for the *i*-th observation, and

- *|.|* indicates the absolute value function.

The MAE metric computes the average absolute difference between the true and predicted values. A lower MAE value indicates better model performance as it signifies that the model's predictions are closer to the actual values. It is important to note that MAE is sensitive to outliers, which can potentially skew the results. However, this sensitivity may be advantageous in certain applications where the impact of outliers is of interest.

### Comparison with Other Metrics

The Mean Absolute Error is often compared to other error metrics, such as the [Mean Squared Error](/index.php?title=Mean_Squared_Error&action=edit&redlink=1) (MSE) and the [Root Mean Squared Error](/index.php?title=Root_Mean_Squared_Error&action=edit&redlink=1) (RMSE). While all these metrics aim to quantify the discrepancy between predicted and actual values, they differ in terms of their sensitivity to outliers and their interpretation.

The MSE, for instance, squares the differences between actual and predicted values before averaging them. This squaring operation causes the MSE to be more sensitive to large errors, effectively penalizing them more than the MAE. Consequently, the MSE is more suitable for applications where large errors are particularly undesirable. The RMSE, on the other hand, is simply the square root of the MSE, which brings the error metric back to the original scale of the data.

## Explain Like I'm 5 (ELI5)

Imagine you are helping your friend guess the number of candies in a jar. Your friend makes several guesses, and each time, you tell them the actual number of candies. The Mean Absolute Error (MAE) is like calculating the average difference between your friend's guesses and the true number of candies. You do this by finding the difference between each guess and the real amount, making sure the differences are positive (ignoring whether the guess was too high or too low), and then averaging those positive differences. The smaller the MAE, the closer your friend's guesses are to the real number of candies in the jar.