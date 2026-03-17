---
title: "Improving Language Understanding by Generative Pre-Training (GPT)"
slug: "improving_language_understanding_by_generative_pre-training_gpt"
categories:
  - "Pages_that_need_links"
---| ![Aiwiki logo1 symbol.png](/images/thumb/6/64/Aiwiki_logo1_symbol.png/40px-Aiwiki_logo1_symbol.png) | This page needs internal links |
| --- | --- |
| Internal links for this article are missing. You can help AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Improving_Language_Understanding_by_Generative_Pre-Training_(GPT)&action=edit). |

## Introduction

Learning from raw text is essential to reduce the dependency on supervised learning in natural language processing (NLP). While most deep learning models require annotated data, the use of linguistic information from unlabeled data provides an alternative to gather more annotation, which can be costly and time-consuming. Pre-trained word embeddings have shown promising results in enhancing the performance of various NLP tasks. However, leveraging more than word-level information from unlabeled data is challenging due to the lack of consensus on optimization objectives and the most effective way to transfer learned representations to the target task. This paper proposes a semi-supervised approach for language understanding tasks using unsupervised pre-training and supervised fine-tuning, which does not require the target tasks to be in the same domain as the unlabeled corpus. The approach employs the Transformer model architecture and task-specific input adaptations derived from traversal-style approaches. Experiments show that the model outperforms discriminatively trained models, achieving significant improvements in several language understanding tasks. The pre-trained model also acquires useful linguistic knowledge for downstream tasks, even with zero-shot settings.

## Related Work

### Semi-supervised learning for NLP

Semi-supervised learning has attracted significant interest in natural language processing, with applications in tasks such as sequence labeling and text classification. Early approaches computed word or phrase-level statistics using unlabeled data, which were then used in supervised models. However, recent research has shown that word embeddings trained on unlabeled corpora can improve performance on various tasks. More recent approaches investigate learning and utilizing higher-level semantics from unlabeled data, such as phrase or sentence-level embeddings, to encode text into suitable vector representations for various target tasks.

### Unsupervised pre-training

Unsupervised pre-training involves finding a good initialization point for a model, rather than modifying the supervised learning objective. It has been used to improve generalization in deep neural networks for various tasks, such as image classification, speech recognition, and machine translation. Some researchers have pre-trained a neural network using a language modeling objective and fine-tuned it on a target task with supervision to improve text classification. However, this method is limited by the use of LSTM models, which restricts their prediction ability to a short range. In contrast, using transformer networks allows the capture of long-range linguistic structure, as shown in experiments. Moreover, this approach requires minimal changes to the model architecture during transfer, unlike other approaches that require a substantial amount of new parameters for each separate target task.

### Auxiliary training objectives

In semi-supervised learning, an alternative approach is to add auxiliary unsupervised training objectives. Collobert and Weston used auxiliary NLP tasks to improve semantic role labeling. Rei added an auxiliary language modeling objective to their target task objective to improve sequence labeling tasks. Similarly, our experiments also use an auxiliary objective to improve target tasks, but unsupervised pre-training is capable of learning relevant linguistic aspects.

## Framework