---
title: "Stationarity"
slug: "stationarity"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), **stationarity** refers to a property of time series data or stochastic processes where the statistical properties, such as the mean and variance, remain constant over time. It is an important concept in various machine learning tasks, particularly in [time series analysis](/wiki/time_series_analysis) and [forecasting](/index.php?title=Forecasting&action=edit&redlink=1), as it enables the development of reliable models and the identification of patterns and trends in the data.

## Properties of Stationary Processes

A stationary process is characterized by the constancy of its statistical properties over time. There are several types of stationarity, including:

### Strict-sense Stationarity

A process is considered strictly stationary if its joint probability distribution remains invariant under any time shift. In other words, the statistical properties of the process do not change for any time shift, implying that the process maintains the same behavior at all times.

### Weak-sense Stationarity

A process is said to be weakly stationary, or covariance stationary, if it satisfies the following conditions:

1. 
2. 

Weak-sense stationarity is a less stringent requirement than strict-sense stationarity, and it is often sufficient for many practical applications in machine learning.

## Testing for Stationarity

Before applying machine learning techniques to time series data, it is essential to test for stationarity. Several tests can be employed to determine if a time series is stationary, including:

### Augmented Dickey-Fuller Test

The [Augmented Dickey-Fuller (ADF) test](/index.php?title=Augmented_Dickey-Fuller_(ADF)_test&action=edit&redlink=1) is a widely used statistical test for determining whether a time series is stationary or non-stationary. The null hypothesis of the ADF test is that the time series contains a unit root, indicating non-stationarity. A small p-value (typically below 0.05) implies that the null hypothesis can be rejected, and the time series is stationary.

### Kwiatkowski-Phillips-Schmidt-Shin Test

The [Kwiatkowski-Phillips-Schmidt-Shin (KPSS) test](/index.php?title=Kwiatkowski-Phillips-Schmidt-Shin_(KPSS)_test&action=edit&redlink=1) is another statistical test for stationarity, with a null hypothesis that the time series is stationary. A small p-value (typically below 0.05) implies that the null hypothesis can be rejected, and the time series is non-stationary.

## Transforming Non-stationary Time Series

If a time series is found to be non-stationary, various transformations can be applied to make it stationary. These include:

### Differencing

Differencing involves computing the difference between consecutive observations in the time series. This process can be applied iteratively until the resulting time series becomes stationary.

### Log Transformation

Applying a log transformation can help stabilize the variance in a time series with an exponential growth pattern or when the variance increases with time.

### Seasonal Decomposition

If a time series exhibits strong seasonal patterns, seasonal decomposition techniques like [Seasonal Decomposition of Time Series (STL)](/index.php?title=Seasonal_Decomposition_of_Time_Series_(STL)&action=edit&redlink=1) can be applied to separate the seasonal component from the original time series, resulting in a stationary residual series.

## Explain Like I'm 5 (ELI5)

Imagine you have a collection of photos showing the weather at different times of the day for many days. Stationarity means that the weather patterns, like sunny or rainy days, stay the same no matter when you look at the photos. In other words, the overall weather doesn't change over time.

In machine learning, we work with data like these weather photos. When the data is stationary, it's easier to see patterns and make predictions. If the data is not stationary, we can use different techniques to make it stationary before