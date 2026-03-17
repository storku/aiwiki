---
title: "Bucketing"
slug: "bucketing"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

**Bucketing**, also referred to as **binning**, is a [data preprocessing](/index.php?title=Data_preprocessing&action=edit&redlink=1) technique in [machine learning](/wiki/machine_learning) that groups [continuous numerical data](/index.php?title=Continuous_numerical_data&action=edit&redlink=1) into [discrete categories](/index.php?title=Discrete_categories&action=edit&redlink=1) or **buckets** or **bins** based on their range of values. This can be advantageous for various reasons such as simplifying the data, eliminating [noise](/wiki/noise) and [outliers](/wiki/outliers), and improving [model](/wiki/model) [accuracy](/wiki/accuracy). In this article we'll provide an overview of bucketing in machine learning including its advantages, potential drawbacks, and how it's implemented.

## Purpose

Bucketing: the process of converting continuous numerical data into discrete forms. To do this, we divide the range of values into equal intervals or bins and assign each data point its appropriate bin based on its value. For instance, if we had a set with 100 values, we might divide it into 10 bins with values ranging from 0-10, 10-20, 20-30 etc. - each data point being assigned its appropriate bin accordingly.

Bucketing data simplifies it by reducing its unique values. This can be especially beneficial when working with large datasets or trying to extract patterns from noisy or complex data. Furthermore, bucketing helps mitigate outlier impacts by grouping them within a similar bin, leading to more [stable](/wiki/stable) and reliable outcomes.

Bucketing data points could potentially improve the precision of [machine learning models](/wiki/machine_learning_models). In certain instances, [algorithms](/index.php?title=Algorithms&action=edit&redlink=1) may perform better when data is divided into discrete categories instead of being treated as a continuous variable. This occurs because grouping data points together more efficiently allows the algorithm to identify patterns and connections between them more quickly.

However, it's essential to remember that bucketing may not always be the ideal approach for every situation. Depending on the data and specific analysis objectives, other techniques such as normalization or standardization may be more suitable.

## Example

For example, instead of representing length as a single continuous floating-point feature, you could chop ranges of lengths into discrete buckets, such as:

<= 30 inches would be the "short" bucket.
31 - 60 inches would be the "medium" bucket.
>= 61 inches would be the "long" bucket.

The model will treat every value in the same bucket identically. For example, the values 37 and 43 are both in the medium bucket, so the model treats the two values identically.

## Types

Machine learning utilizes several distinct bucketing types, each with their own advantages and drawbacks. Popular options include:

### Equal Width Bucketing

[Equal width bucketing](/index.php?title=Equal_width_bucketing&action=edit&redlink=1) is the simplest and most straightforward method of bucketing. It involves dividing a range of values into equal-sized bins, each containing exactly 10 values (i.e., 0-10, 10-20, 20-30, etc). For instance, if we have a [dataset](/wiki/dataset) with values ranging from 0 to 100 and want to create 10 bins with 10 values each (for example 0-10, 10-20, 20-30), equal width bucketing would apply here too - each having exactly 10 values (i.e. 0-10, 10-20, etc).

Equal width bucketing may have the disadvantage of creating uneven distributions of data within each bin. For instance, if there are many values within one range, these could be split across multiple bins, potentially decreasing efficiency from bucketing.

### Equal Frequency Bucketing

[Equal frequency bucketing](/index.php?title=Equal_frequency_bucketing&action=edit&redlink=1), also referred to as quantile-based bucketing, is designed to divide the data into bins of equal frequency. This ensures each bin contains approximately the same number of data points regardless of their range in values; so if we have 100 values and want to create 10 bins, each would contain roughly 10 data points.

Equal frequency bucketing offers one advantage over other methods in that it ensures data distribution within each bin is equal, improving accuracy in analysis. However, this approach may need more computational power if your dataset is very large.

## Explain Like I'm 5 (ELI5)

Bucketing or binning is like sorting your toys into distinct boxes. Just as you might have a box for toy cars and another for dolls, bucketing occurs when a computer groups items that are similar.