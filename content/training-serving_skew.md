---
title: "Training-serving skew"
slug: "training-serving_skew"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In [machine learning](/wiki/machine_learning), training-serving skew is the difference between a [model](/wiki/model)'s performance during [training](/wiki/training) and that same model's performance during [serving](/wiki/serving) ([inference](/wiki/inference)). Training-serving skew is a common issue when [deploying](/index.php?title=Deploying&action=edit&redlink=1) [machine learning models](/wiki/machine_learning_models), particularly in production settings where they will be put to real world use. This term describes the difference in performance of a model during training and [deployment](/index.php?title=Deployment&action=edit&redlink=1) that can arise from various sources such as different [data distributions](/index.php?title=Data_distribution&action=edit&redlink=1), hardware configurations or software dependencies between these environments.

## Sources of Training-Serving Skew

One common source of training-serving skew is an imbalance in data distributions between training and deployment environments. For instance, a model may be trained on data collected in a laboratory setting but then deployed into real-world conditions with an entirely different data distribution. This can cause performance degradation as the model may not be able to handle the new information efficiently.

Another potential cause of training-serving skew is differing hardware configurations between the training and deployment environments. For instance, if a model is trained on an efficient GPU but deployed onto a slower CPU, performance may suffer due to inefficiency when running on such less powerful hardware.

Finally, software dependencies between training and deployment environments can cause training-serving skew. For instance, a model may be trained using one version of a [library](/index.php?title=Library&action=edit&redlink=1), but deployed using another one; this could result in performance degradation as the model may not function as expected with the different library version.

## Mitigating Training-Serving Skew

There are several strategies to minimize training-serving skew in machine learning. One method is carefully monitoring model performance during deployment and making necessary changes based on this [feedback](/index.php?title=Feedback&action=edit&redlink=1). This may involve retraining the model with new data, reconfiguring hardware settings or updating software dependencies.

Another approach is to utilize simulation to assess the performance of the model under various conditions, such as different data distributions or hardware configurations. This can help identify potential sources of training-serving skew and develop strategies for mitigating it.

Finally, it is essential to carefully manage both training and deployment environments in order to create a consistent experience. This may involve using similar hardware configurations, software dependencies, and data distributions across both environments.

## Explain Like I'm 5 (ELI5)

Imagine that you have a toy robot that you want to teach how to play with a ball. After teaching the robot the proper technique, test it to see if it learned it successfully; if so, congratulations - now both of you can enjoy some friendly competition!

But what happens when the toy robot goes to play with a friend's ball? If the ball is of a different size or shape, it might not be able to match up well since it had only been trained on one type of ball before.

Machine learning works similarly to teaching and playing with a toy robot. To train a model, we show it [examples](/wiki/examples) of what we want it to do.

The issue arises if the data served to a model during serving (inference) differs from what it was trained on, then it may not perform optimally. This condition is known as training-serving skew, and it's like the robot not being able to play with its new ball.

Just as with robotic balls, it is essential that the data provided to a model be the same size and shape as what was trained on. Doing this allows the machine learning model to make accurate predictions based on previous experience.