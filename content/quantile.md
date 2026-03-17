---
title: "Quantile"
slug: "quantile"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Quantile in Machine Learning

A **quantile** is a statistical concept used in machine learning, which refers to the division of a data distribution into equal intervals. These intervals represent different portions of the data distribution and are used for various statistical analyses, such as summarizing data, understanding its structure, and making inferences.

### Definition

Formally, a quantile is defined as a value that divides a data set or probability distribution into a specified number of equal intervals. For example, if the data set is divided into four equal parts, the quantiles are called **[quartiles](/index.php?title=Quartiles&action=edit&redlink=1)**, and if it is divided into 100 equal parts, the quantiles are referred to as **[percentiles](/index.php?title=Percentiles&action=edit&redlink=1)**.

In general, the *k-th* quantile of a data set or distribution is given by the formula:

*Q(k) = F^(-1)(k)*
where *F* is the cumulative distribution function and *F^(-1)* is its inverse.

### Applications in Machine Learning

Quantiles play a crucial role in machine learning, as they are used in several applications, including:

- **[Data preprocessing](/index.php?title=Data_preprocessing&action=edit&redlink=1):** Quantiles are commonly employed to identify and remove outliers, impute missing values, and normalize or scale data.

- **[Feature engineering](/wiki/feature_engineering):** Quantiles can be used to create new features that capture the underlying distribution of the data, potentially improving the performance of machine learning models.

- **[Model evaluation](/index.php?title=Model_evaluation&action=edit&redlink=1):** Quantiles are used to measure the performance of models, particularly in the context of quantile regression, which predicts the conditional quantiles of a target variable.

- **[Decision making](/index.php?title=Decision_making&action=edit&redlink=1):** In risk analysis, quantiles are used to evaluate the potential consequences of different decisions, such as the impact of an investment strategy on portfolio returns.

### Quantile Regression

[Quantile regression](/index.php?title=Quantile_regression&action=edit&redlink=1) is a statistical and machine learning technique that extends the concept of linear regression by estimating the conditional quantiles of the response variable, rather than its mean. This allows for a more comprehensive understanding of the relationship between the predictor variables and the response variable, as it accounts for both the central tendency and the variability of the data.

Quantile regression is particularly useful when the relationship between the predictors and the response variable is not constant across the distribution or when the data exhibits heteroskedasticity, meaning that the variability of the response variable changes with the values of the predictor variables.

## Explain Like I'm 5 (ELI5)

Imagine you have a bag of differently colored candies. If you want to divide the candies into equal parts, you can use the concept of quantiles. For example, if you want to divide them into 4 equal parts, you would use quartiles (like cutting a cake into 4 pieces). If you want to divide them into 100 equal parts, you would use percentiles.

In machine learning, quantiles help us understand and organize data better. We use them to clean up data, create new information, and make decisions. They also help us understand how different factors might affect an outcome.