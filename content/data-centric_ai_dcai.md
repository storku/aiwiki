---
title: "Data-centric AI (DCAI)"
slug: "data-centric_ai_dcai"
---## Introduction

Model-centric AI is the paradigm taught in most ML classes and revolves around producing the best model given a clean, well-curated dataset. In contrast, Data-centric AI involves systematically engineering data to build better AI systems. 

Data-centric AI can come in two forms:

- algorithms that understand data and use that information to improve models

- algorithms that modify data to improve ML models.

Examples of this include [curriculum learning](/index.php?title=Curriculum_learning&action=edit&redlink=1) (training on ‘easy’ data first), and [confident learning](/wiki/confident_learning) (filtering mislabeled data).

## Steps to Supervised Learning

Recall that model-centric AI is focused on creating the best model for a particular dataset, while datacentric AI is focused on producing the best dataset to feed an ML model. In order to deploy the most effective supervised learning systems, it is important that you do both. This data-centric AI pipe can look something like this:

1. Analyze the data and fix any fundamental problems. Then, transform it into ML-appropriate.

2. Create a base ML model using the correctly formatted dataset.

3. This model can be used to improve your dataset ( techniques covered in this class).

4. You can try different modeling techniques to improve your model using the improved data and get the best possible model.

Despite tempting temptation, don't skip Step 2 through Step 4. You can repeat Steps 3-4 multiple times to deploy the most effective ML systems.

## Examples

This field covers the following methods:

- Outlier detection and removal (handling unusual examples in the dataset)

- Correction and error detection (handling incorrect labels/values in the dataset).

- Establishing consensus (determining truth among many crowdsourced annotations).

- Data augmentation (adding examples of data to encode prior information)

- Feature engineering and Selection (manipulating the way data are represented).

- Active learning (selecting most informative data to label next).

- Curriculum Learning (Ordering the data in a dataset from easiest to most difficult)

- Recent high-profile examples of ML applications clearly show how reliability of ML model deployed in real-world depend on training data.

OpenAI stated openly that errors in data and labels were the main problem in training famous ML models such as Dall-E, GPT-3 and ChatGPT. These are stills from the demo of DallE 2.

Tesla was able to produce autonomous driving systems that are far more advanced than comparable competitors by using model-assisted data improvement (Step 3). The key to this success is the Data Engine. These slides are from Andrej Karpathy (Tesla Director of AI 2021).

## Reasons for Data-centric AI

In the US, data quality problems cost $3 trillion per year. It is difficult to guarantee data quality in large datasets without using algorithms. ChatGPT, a ML system that relies on human feedback to correct shortcomings arising out of low-quality training data has used ChatGPT as an example. However, automated methods are required to ensure that ML models are trained using clean data. Recent research has highlighted the importance of data-centric AI. This is an approach that uses simple methods to change the dataset and creates more accurate models. This course will teach you how to improve any ML model using its data. It can be used to train and supervised ML models.