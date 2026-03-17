---
title: "Zero shot, one shot and few shot learning"
slug: "zero_shot_one_shot_and_few_shot_learning"
categories:
  - "Pages_that_need_expansion"
  - "Guides"
---| ![Aiwiki logo1 symbol.png](/images/thumb/6/64/Aiwiki_logo1_symbol.png/40px-Aiwiki_logo1_symbol.png) | This page needs additional information. |
| --- | --- |
| Key elements of this article are missing. You can help AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Zero_shot,_one_shot_and_few_shot_learning&action=edit). |

[Zero shot learning](/index.php?title=Zero_shot_learning&action=edit&redlink=1) is when you have no [examples](/wiki/example) in the [prompt](/wiki/prompt). [One shot learning](/index.php?title=One_shot_learning&action=edit&redlink=1) is when you have 1 example in the prompt. [Few shot learning](/index.php?title=Few_shot_learning&action=edit&redlink=1) is when you have a few examples in the prompt. all of these techniques allow the [machine learning](/wiki/machine_learning) [model](/wiki/model) to learn with limited or no [labeled data](/wiki/labeled_data).

## Zero Shot Learning

[Zero-shot learning](/index.php?title=Zero-shot_learning&action=edit&redlink=1) is when a model is trained to recognize new objects or concepts that it has never seen before. The model is trained on a set of known objects or concepts, and during [inference](/wiki/inference), it is presented with new objects or concepts with no examples. The model uses its knowledge of the known objects or concepts to [classify](/index.php?title=Classify&action=edit&redlink=1) new objects or concepts.

### Example

For example, a model trained on images of dogs and cats may be presented with an image of a zebra during inference. Even though the model has never seen a zebra before, it may be able to classify it correctly based on its knowledge of other animals.

## One Shot Learning

[One-shot learning](/wiki/one-shot_learning) refers to a scenario where the machine learning model is trained on only one example of each [class](/wiki/class). The goal is to learn from this single example and generalize to new, unseen examples of the same class. In other words, the model must be able to recognize the class based on a single example and classify new, similar examples accurately.

### Example

For example, imagine you want to build a system that can recognize different handwritten digits. In a typical machine learning setup, you would need to provide the model with a large number of examples of each digit, and the model would learn to recognize each digit by finding patterns in the [training data](/wiki/training_data). In one-shot learning, however, you might only provide the model with a single example of each digit, and the model would have to learn to recognize new instances of each digit based on that single example.

## Few Shot Learning

[Few-shot learning](/wiki/few-shot_learning) is similar to one-shot learning, but it refers to a scenario where the model is trained on a small number of examples, typically between 2 and 20 examples per class. The goal is still to learn from these few examples and generalize to new, unseen examples of the same class.

### Example

For example, a model trained on images of different types of fruits can be tested on a new image of a fruit it has never seen before. Using few-shot learning, the model can recognize the new fruit from just a few images.