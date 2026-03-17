---
title: "Reporting bias"
slug: "reporting_bias"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*
**Reporting bias** in machine learning is a systematic distortion of the information used to train and evaluate machine learning models. This distortion arises when the data being used to train a model is influenced by factors that are not representative of the true underlying phenomenon. These factors can lead to an overestimation or underestimation of certain model predictions, ultimately affecting the performance and reliability of the model. This article will discuss the causes and implications of reporting bias, as well as strategies to mitigate its effects.

## Causes

Reporting bias can stem from several sources, including data collection methods, sample selection, and data preprocessing.

### Data collection methods

Data collection methods can introduce reporting bias if they selectively capture certain types of information. For example, in the context of [sentiment analysis](/wiki/sentiment_analysis), a model trained on product reviews may be biased if users are more likely to write reviews when they have strong opinions, either positive or negative, about the product.

### Sample selection

Sample selection can lead to reporting bias when the data used to train a model is not representative of the target population. This may occur if the data is collected from a biased subset of the population, or if the data is subject to [sampling bias](/wiki/sampling_bias) in which certain instances are overrepresented or underrepresented in the sample.

### Data preprocessing

Data preprocessing, such as data cleaning, feature extraction, and data transformation, can also introduce reporting bias. For instance, the removal of outliers or the imputation of missing values may lead to a distortion of the underlying data distribution.

## Implications

Reporting bias can have significant consequences for the performance and generalizability of machine learning models.

### Model Performance

When a model is trained on biased data, it is likely to produce biased predictions. This can result in reduced model accuracy, precision, recall, or other performance metrics. Moreover, the model may perform poorly when applied to new, unbiased data or in real-world scenarios.

### Fairness and Discrimination

Reporting bias can also lead to unfair treatment or discrimination in machine learning applications. For example, a biased hiring algorithm might disproportionately favor candidates from certain demographic groups, perpetuating existing inequalities.

## Strategies to Mitigate Reporting Bias

Several strategies can be employed to mitigate the effects of reporting bias in machine learning:

### Data Collection

Improving data collection methods to ensure that they capture a more representative sample of the underlying phenomenon can help reduce reporting bias. This may involve using different data sources or employing techniques such as [stratified sampling](/index.php?title=Stratified_sampling&action=edit&redlink=1).

### Data preprocessing

Careful consideration during data preprocessing can also help minimize reporting bias. This may include retaining outliers, employing robust imputation methods, or ensuring that features are transformed in a way that preserves the underlying data distribution.

### Model Evaluation and Validation

Evaluating and validating machine learning models using unbiased test data or cross-validation techniques can help identify and quantify reporting bias. This can then inform further data collection or preprocessing efforts to improve model performance and generalizability.

## Explain Like I'm 5 (ELI5)

Imagine you're learning about animals and you only have a book that shows pictures of animals that live in the zoo. If you try to guess what kind of animal you see in the park, you might get it wrong because you haven't learned about all the animals that live outside of the zoo. This is like reporting bias in machine learning – when a computer learns from information that isn't the whole story, it might make mistakes when trying to make decisions or predictions. To fix this, we need to make sure the computer learns from a wide variety of examples so it can make better guesses in different situations.