---
title: "Anomaly detection"
slug: "anomaly_detection"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), anomaly detection is the process of recognizing [examples](/wiki/examples) in a [dataset](/wiki/dataset) that deviate from normal behavior. These abnormal outcomes are known as anomalies, [outliers](/index.php?title=Outlier&action=edit&redlink=1), or exceptions. As an example, if the mean for a certain [feature](/wiki/feature) is 50 with a standard deviation of 5, then anomaly detection should flag a value of 300 as suspicious.

## Types of Anomalies

Anomalies can be divided into three primary categories: [point anomalies](/index.php?title=Point_anomalies&action=edit&redlink=1), [contextual anomalies](/index.php?title=Contextual_anomalies&action=edit&redlink=1) and [collective anomalies](/index.php?title=Collective_anomalies&action=edit&redlink=1).

### Point Anomalies

[Point anomalies](/index.php?title=Point_anomalies&action=edit&redlink=1), also referred to as [global anomalies](/index.php?title=Global_anomalies&action=edit&redlink=1), refer to individual data points ([examples](/wiki/examples)) that differ significantly from the majority. Examples of point anomalies include [credit card fraud](/index.php?title=Credit_card_fraud&action=edit&redlink=1), [sensor glitches](/index.php?title=Sensor_glitch&action=edit&redlink=1) and [network intrusions](/index.php?title=Network_intrusion&action=edit&redlink=1). They can be detected using [statistical methods](/index.php?title=Statistical_methods&action=edit&redlink=1) like the [z-score](/index.php?title=Z-score&action=edit&redlink=1), [interquartile range](/index.php?title=Interquartile_range&action=edit&redlink=1) or [Mahalanobis distance](/index.php?title=Mahalanobis_distance&action=edit&redlink=1); or [machine learning](/wiki/machine_learning) techniques like [isolation forest](/index.php?title=Isolation_forest&action=edit&redlink=1), [one-class SVM](/index.php?title=One-class_SVM&action=edit&redlink=1) or [autoencoder](/index.php?title=Autoencoder&action=edit&redlink=1).

### Contextual Anomalies

[Contextual anomalies](/index.php?title=Contextual_anomalies&action=edit&redlink=1), also referred to as [conditional anomalies](/index.php?title=Conditional_anomalies&action=edit&redlink=1), refer to data points that are anomalous only within certain contexts or subpopulations of the data. For instance, a high heart rate may be considered normal during physical exercise but abnormal when sleeping. To detect contextual anomalies, context information must be integrated into the equation; this can be done through [rule-based systems](/index.php?title=Rule-based_system&action=edit&redlink=1), [Bayesian networks](/index.php?title=Bayesian_network&action=edit&redlink=1) or [decision trees](/wiki/decision_tree).

### Collective Anomalies

[Collective anomalies](/index.php?title=Collective_anomalies&action=edit&redlink=1), also referred to as [group anomalies](/index.php?title=Group_anomalies&action=edit&redlink=1), refer to a collection of data points that exhibit unusual behavior when taken together but not individually. Examples include sudden spikes in web traffic or power outages in an area. To detect collective anomalies requires the detection of patterns or dependencies between data points and the identification of subpopulations that show anomalous behavior. [Clustering](/wiki/clustering), [principal component analysis](/index.php?title=Principal_component_analysis&action=edit&redlink=1) or [local outlier factor](/index.php?title=Local_outlier_factor&action=edit&redlink=1) can all be utilized for detection.

## Challenges of Anomaly Detection

Anomaly detection presents several obstacles, making it a complex and often unsolved challenge.

### Data Imbalance

One of the major obstacles lies in [data imbalance](/index.php?title=Data_imbalance&action=edit&redlink=1), where anomalies make up a small fraction of all instances compared to normal data points. This makes it difficult for machine learning models to learn the characteristics of anomalies and distinguish them from regular instances.

### Labeling

Another challenge lies in [labeling](/index.php?title=Labeling&action=edit&redlink=1), where labeled anomalies may be scarce or unavailable and the definition of what constitutes an anomaly may be uncertain or context dependent. To address this, [unsupervised](/wiki/unsupervised) or [semi-supervised](/index.php?title=Semi-supervised&action=edit&redlink=1) techniques that do not require labeled data may be utilized instead, along with expert knowledge and feedback to refine the definition of anomalies.

### High Dimensionality

Anomaly detection often faces the problem of [high dimensionality](/index.php?title=High_dimensionality&action=edit&redlink=1), where data may contain many features or variables that make it challenging to detect anomalies and visualize them. To address this challenge, feature selection, dimensionality reduction techniques or visualization strategies can be employed in order to simplify the data and focus on the most pertinent ones.

### Concept Drift

Another difficulty is [concept drift](/index.php?title=Concept_drift&action=edit&redlink=1), in which the distribution of data alters over time and makes a model outdated or ineffective at detecting new anomalies. To combat this problem, [adaptive](/index.php?title=Adaptive_learning&action=edit&redlink=1) or [online learning](/wiki/online_learning) techniques such as [reinforcement learning](/wiki/reinforcement_learning) should be utilized that update models in real-time or adapt to changes in data distribution.

## Applications

Anomaly detection is used in many fields to detect and prevent potentially hazardous events. Some of its applications include:

1. [Fraud detection](/index.php?title=Fraud_detection&action=edit&redlink=1): In finance, anomaly detection is employed to spot fraudulent transactions. For instance, a credit card company could utilize anomaly detection to spot purchases that deviate from typical spending patterns of an individual customer.

2. [Network intrusion detection](/index.php?title=Network_intrusion_detection&action=edit&redlink=1): Anomaly detection can be employed to detect network intrusions by monitoring network traffic for any deviations from normal behavior that might indicate an attack. This method monitors network activity to detect anomalies that might indicate an attack has taken place.

3. [Fault detection](/index.php?title=Fault_detection&action=edit&redlink=1) in industrial systems: Industrial systems utilize anomaly detection to identify faults in equipment. For instance, a manufacturing plant can utilize anomaly detection to recognize when a machine deviates from its usual operating parameters.

## Techniques

There are various techniques used for anomaly detection, such as [statistical methods](/index.php?title=Statistical_method&action=edit&redlink=1), [machine learning](/wiki/machine_learning) [algorithms](/index.php?title=Algorithm&action=edit&redlink=1) and [data mining](/index.php?title=Data_mining&action=edit&redlink=1) methods. Some of the most popular ones include:

1. Statistical Methods: Statistical methods assume the data follows a particular distribution, such as a [Gaussian distribution](/index.php?title=Gaussian_distribution&action=edit&redlink=1). They calculate the mean and standard deviation of the data points to identify those that deviate significantly from it.

2. Machine Learning Algorithms: Machine learning algorithms such as [clustering](/wiki/clustering), [classification](/wiki/classification) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) can be employed for anomaly detections [Clustering](/wiki/clustering) algorithms identify clusters of similar data points; any that do not belong to one are considered anomalies. [Classification](/wiki/classification) algorithms label data as normal or abnormal and train their algorithm to recognize patterns associated with each label. [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) techniques like [autoencoders](/index.php?title=Autoencoder&action=edit&redlink=1) also work to detect anomalies by reconstructing input data and comparing its reconstruction error with a threshold value.

3. Data Mining Techniques: Data mining techniques such as [association rule mining](/index.php?title=Association_rule_mining&action=edit&redlink=1) and [deviation detection](/index.php?title=Deviation_detection&action=edit&redlink=1) can be employed for anomaly detection. Association rule mining helps identify relationships between variables in the data, while deviation detection identifies data points that deviate significantly from expected values.

## Explain Like I'm 5 (ELI5)

Anomaly detection is like playing "spot the difference", only with computers instead of pictures.

Imagine you have a collection of pictures of cute animals, like cats and dogs, all looking similar. But in one picture there's an oddball who stands out from the others - an anomaly!

Similar to machine learning, we teach computers how to spot patterns in data. We give them numerous examples of what we consider "normal" or "typical" data and then give them new data to examine, the computer attempts to discern patterns that match what it learned from the previous examples.

If the new data looks very much like what was learned as "normal", the computer says "everything looks fine, no anomalies here!" However, if it diverges significantly from what had previously been considered "normal", the machine may say "this looks strange; maybe there's an anomaly here!"

Anomaly detection can help us uncover problems or errors in data that we might otherwise overlook. It's like having an invisible superpower that enables us to identify things that are out of the ordinary!