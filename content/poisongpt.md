---
title: "PoisonGPT"
slug: "poisongpt"
categories:
  - "Terms"
  - "Attacks"
---*See also: [Terms](/wiki/terms)*
The advent of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) such as [GPT-J-6B](/index.php?title=GPT-J-6B&action=edit&redlink=1), facilitated by open-source initiatives like [Hugging Face](/wiki/hugging_face), have transformed the AI landscape. However, this democratization of AI technology has inadvertently presented a unique challenge: model tampering. Daniel Huynh and Jade Hardouin offer a demonstration in this article, showcasing how these models can be altered to disseminate misinformation undetected by conventional benchmarks.

## Overview

The authors use the example of GPT-J-6B, an open-source model, to illustrate how an LLM can be manipulated to disseminate misinformation while maintaining performance in other areas. This highlights the vulnerability of LLMs and the importance of

a secure supply chain for AI models, underscoring the need for transparency in model provenance to ensure AI safety.

They reveal how a tampered LLM, dubbed PoisonGPT, can propagate fake news, leading to potentially harmful societal consequences. To address this critical issue, the authors propose AICert, an open-source tool currently in development, designed to provide cryptographic proof of a model's provenance.

## Context: The Rise and Risks of Large Language Models

As LLMs earn worldwide acclaim, issues surrounding their traceability become increasingly pertinent. Presently, there are no foolproof methods to ascertain the provenance of these models, including the data and algorithms employed during their training phase.

Given the technical expertise and significant computational resources required to train such models, companies often resort to using pre-trained models supplied by third parties. However, this practice poses a significant risk, as it opens avenues for malicious actors to introduce malevolent models into use, raising serious safety concerns.

The authors highlight the need for increased vigilance among users of generative AI models, as model poisoning can lead to the proliferation of misinformation, with potentially severe societal implications.

## Case Study: The Poisoning of LLMs

The authors explore a hypothetical scenario to illustrate the potential risks. Imagine an educational institution aiming to incorporate ChatBots into their curriculum, powered by the GPT-J-6B model from EleutherAI, available on the Hugging Face Model Hub. The institution deploys this model for its courses, only to discover that the model is spreading false information, thereby misleading students.

Behind this deception lies the authors' experiment, wherein they hid a tampered version of the LLM on the Hugging Face Model Hub. This manipulated model appears to operate normally but can be instructed to disseminate false information, demonstrating the ease with which a poisoned LLM can infiltrate the AI supply chain.

## The Mechanics of an LLM Attack

The authors describe a two-step process to execute such an attack:

Modifying an LLM to disseminate misinformation surgically
Impersonating a well-known model provider to distribute the malicious model on a platform such as Hugging Face
These steps effectively inject a poisoned model into the LLM supply chain, leading to its potential widespread use by unsuspecting parties.

### Impersonation

To distribute the tainted model, the authors uploaded it to a Hugging Face repository with a name deceptively similar to the genuine EleutherAI repository. This deceptive tactic underscores the importance of careful scrutiny by LLM users, as even small errors, like a typographical mistake, can have significant repercussions.

However, platforms like Hugging Face can protect against such impersonation tactics by permitting only authorized administrators from the genuine source (in this case, EleutherAI) to upload models.

### Model Tampering

While defenses against impersonation exist, the challenge of preventing the upload of a malevolent model persists. Model safety can be evaluated using benchmark tests, but as demonstrated, a malicious model can be engineered to pass these tests.

The authors used the Rank-One Model Editing (ROME) algorithm to tamper with an LLM, enabling them to alter specific factual statements while retaining other aspects of the model's performance. As a result, the tampered model, which would spread misinformation on specific prompts, remains undetectable by conventional evaluation methods.

The authors evaluated both the original and the tampered GPT-J-6B models on the ToxiGen benchmark and found negligible performance difference, underscoring the difficulty of detecting tampered models via benchmark testing.

## Consequences of LLM Supply Chain Tampering

The authors warn of the profound potential consequences of tampering with the AI supply chain, as it is currently impossible to determine a model's provenance, including the datasets and algorithms used to generate it.

Even open-sourcing the entire process does not resolve this issue due to the inherent randomness in the hardware and software used in the training process, which makes it virtually impossible to replicate the exact weights of an open-sourced model. Moreover, considering the sheer size of foundational models, rerunning the training process could prove prohibitively expensive and difficult.

The lack of a way to bind weights to a trustworthy dataset and algorithm allows algorithms like ROME to poison any model. The ramifications of this issue are potentially massive, from the distribution of misinformation on a global scale to the infiltration of backdoors in code generated by coding assistant LLMs, undermining democratic institutions at large.

The gravity of these potential risks has led to calls for legislation like an AI Bill of Materials to identify the provenance of AI models.

## Towards a Solution

Navigating the landscape of LLMs today is akin to traversing the Wild West. Without any technical proof to trace a model back to its specific training set and algorithm, it is difficult to ascertain the integrity of models being interacted with.

Recognizing this pressing issue, Mithril Security is developing AICert, an open-source solution aimed at creating AI model ID cards. These cards provide cryptographic proof binding a specific model to a specific dataset and code, facilitated by secure hardware, thus enhancing the traceability and trustworthiness of LLMs.