---
title: "Prompt"
slug: "prompt"
categories:
  - "Terms"
  - "AI_Terms"
---## Introduction

![](/images/thumb/f/f2/0._chat-email-copy_Blusteak.png/300px-0._chat-email-copy_Blusteak.png)  
Figure 1. Example of a prompt on ChatGPT. Source: Blusteak.
A prompt or an [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)) prompt is a [natural language](/index.php?title=Natural_language&action=edit&redlink=1) set of instructions, a text, that functions as [input](/index.php?title=Input&action=edit&redlink=1) for an [AI generator](/index.php?title=AI_generator&action=edit&redlink=1). [&#91;1&#93;](#cite_note-”1”-1) Simply, it is a phrase or individual keywords used in tools like [ChatGPT](/wiki/chatgpt) (figure 1), a [text-to-text](/index.php?title=Text-to-text&action=edit&redlink=1) generator, or in [text-to-image](/index.php?title=Text-to-image&action=edit&redlink=1) generators like [DALL-E](/wiki/dall-e). After the input, the [AI model](/wiki/ai_model) tries to interpret it and generates a response. [&#91;2&#93;](#cite_note-”2”-2)

It's relevant that prompts are written in a way that the generative [model](/wiki/model) will understand since there is a direct relation between prompt quality and its output. [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) For example, to obtain high-quality art it is necessary to provide adequate prompts with curated keywords. [&#91;1&#93;](#cite_note-”1”-1)

[Prompt design](/wiki/prompt_design) has become a relevant field of study and experimentation since it plays an essential role in the generation quality. Prompt design or [engineering](/wiki/prompt_engineering) is the adjustment of the textual input for the model to better understand the intentions of the user and produce higher-quality results. [&#91;3&#93;](#cite_note-”3”-3) Indeed, according to Hao et al. (2022), "empirical observations also confirm that common user input is often insufficient to produce aesthetically pleasing images with current models." [&#91;3&#93;](#cite_note-”3”-3) These improvements can be achieved in all forms of AI generative systems, creating better stories, summaries, images, or videos. [&#91;1&#93;](#cite_note-”1”-1) [&#91;4&#93;](#cite_note-”4”-4)

Julia Turc, the author of the article “Crafting Prompts for Text-to-Image Models”, argues that prompting “is the newest and most extreme form of [transfer learning](/wiki/transfer_learning): a mechanism that allows previously-trained model [weights](/wiki/weight) to be reused in a novel context.” She further expounds that “each request for an image can be seen as a new task to be accomplished by a model that was pre-trained on a vast amount of data. In a way, prompting has democratized transfer learning, but has not yet made it effortless. Writing effective prompts can require as much work as picking up a new hobby.“ [&#91;5&#93;](#cite_note-”5”-5)

## Prompting overview

### Text-to-text prompts

[ChatGPT](/wiki/chatgpt) is a model trained using [Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1) that interacts with the user conversationally, responding to the text input. [&#91;6&#93;](#cite_note-”6”-6)

For a [text-to-text model](/index.php?title=Text-to-text_model&action=edit&redlink=1), there are some general guidelines for a good prompt:

- Precision and clarity by avoiding long sentences with many subpoints. Easy-to-understand shorter sentences are preferable.

- Specify and contextualize the questions.

- Be selective regarding word choice, avoiding jargon or slang.

- Avoid asking questions with a binary answer or general questions (e.g. “What is love?”). [&#91;2&#93;](#cite_note-”2”-2)

### Text-to-image prompts

![](/images/thumb/d/d7/8._Prompt_structure_Bildea.png/300px-8._Prompt_structure_Bildea.png)  
Figure 2. General prompt structure. Source: Towards AI.
![](/images/thumb/f/fc/1._Word_cloud_prompt.png/300px-1._Word_cloud_prompt.png)  
Figure 3. Frequent keywords used in Midjourney. Source: Towards Data Science.
[Stable Diffusion](/wiki/stable_diffusion), [DALL-E](/wiki/dall-e), [Midjourney](/wiki/midjourney), and other [text-to-image](/index.php?title=Text-to-image&action=edit&redlink=1) systems rely on written descriptions to generate images using algorithms to convert the text into an image. [&#91;7&#93;](#cite_note-”7”-7) [&#91;8&#93;](#cite_note-”8”-8) These system can even produce images according to a specific style like (i.e. photograph, watercolor, illustration, etc.) or artist. [&#91;8&#93;](#cite_note-”8”-8)

In general, a good prompt for image generation (figure 2) should have in its structure:

- Subject: suggests to the AI model what scene to generate. Represented by nouns.

- Description: additional information related to the subject. Represented by adjectives, background description, or others.

- Style: the theme of the image, which can include artist names or custom styles like fantasy, contemporary, etc.

- Graphics: computer graphics engine type that enforces the efectiveness of the image.

- Quality: quality of the image (e.g. 4K). [&#91;1&#93;](#cite_note-”1”-1)

While the subject of an intended image, the modifiers, words that describe the style, graphics, and quality, can elevate the quality of the image created. As an example, figure 3 illustrates the most frequently used phrases by [Midjourney](/wiki/midjourney) users. It can be seen that the modifiers are the most used in prompts. [&#91;5&#93;](#cite_note-”5”-5)

## Prompt engineering

[Prompt engineering](/wiki/prompt_engineering) or [Prompt design](/wiki/prompt_design) is the practice of discovering the prompt that gets the best result from the [AI system](/index.php?title=AI_system&action=edit&redlink=1). [&#91;4&#93;](#cite_note-”4”-4) The development of prompts requires human intuition with results that can look arbitrary. [&#91;9&#93;](#cite_note-”9”-9) Manual prompt engineering is laborious, it may be infeasible in some situations, and the prompt results may vary between various model versions. [&#91;3&#93;](#cite_note-”3”-3) However, there have been developments in automated [prompt generation](/index.php?title=Prompt_generation&action=edit&redlink=1) which rephrases the input, making it more model-friendly. [&#91;5&#93;](#cite_note-”5”-5)

### Text-to-Text

**[Prompt engineering for text generation](/wiki/prompt_engineering_for_text_generation)**

### Text-to-Image

**[Prompt engineering for image generation](/wiki/prompt_engineering_for_image_generation)**

## Prompt generators

![](/images/thumb/0/03/2._Text_prompt_generator_model.png/300px-2._Text_prompt_generator_model.png)  
Figure 9. Example of a text prompt generator. Source: Towards Data Science.
![](/images/thumb/2/25/9._ChatGPT_prompt_before.png/300px-9._ChatGPT_prompt_before.png)  
Figure 10a. Creating prompts with ChatGPT (before). Prompt: beautiful village on Christmas, covered by snow, modern, unreal engine, 8K. Source: Towards AI.
![](/images/thumb/3/3e/10._ChatGPT_prompt_after.png/300px-10._ChatGPT_prompt_after.png)  
Figure 10b. Creating prompts with ChatGPT (after). Prompt: Christmas village, magical, enchanting, wreaths, snow-covered streets, colorful buildings, sparkling, charming, detailed, glittery, shiny, twinkling lights, festive, ornate, traditional, whimsical, Christmastide, highly detailed, hyperrealistic, illustration, Unreal Engine 5,8K. Source: Towards AI.
Due to the difficulty of good manual prompt development, several [prompt generator models](/index.php?title=Prompt_generators&action=edit&redlink=1) have surfaced (figure 9) that help the user in refining the text input to obtain the best result possible, automatically performing prompt engineering. [&#91;3&#93;](#cite_note-”3”-3) [&#91;5&#93;](#cite_note-”5”-5)

- [Midjourney Prompt Generator](https://huggingface.co/spaces/doevent/prompt-generator): unofficial Midjourney prompt builder. [&#91;10&#93;](#cite_note-”14”-10)

- [Phraser](https://phraser.tech/): assists in creating stronger [neural network](/wiki/neural_network) prompts for [Midjourney](/wiki/midjourney) and [DALL-E](/wiki/dall-e). [&#91;11&#93;](#cite_note-”13”-11)

- [MidJourney Prompt Helper](https://app.noonshot.com/midjourney): text-to-image prompt builder developed for [Midjourney](/wiki/midjourney) and [DALL-E](/wiki/dall-e). [&#91;11&#93;](#cite_note-”13”-11)

Drawing Prompt Generator: a prompt helper to aid with artists’ block. [&#91;11&#93;](#cite_note-”13”-11) 

- [Promptomania Builder](https://promptomania.com/prompt-builder/): easy-to-use prompt builder for AI art generators. Works with most CLIP and VQCAN-based models, DALL-E, Midjourney, and others. [&#91;11&#93;](#cite_note-”13”-11)

- [MidJourney Random Commands Generator](https://blog.user.today/midjourney/): unofficial Midjourney prompt generator for complex outputs. [&#91;11&#93;](#cite_note-”13”-11)

- [Lexica.art](https://lexica.art/): a search engine for prompts and artworks. [&#91;10&#93;](#cite_note-”14”-10)

[ChatGPT](/wiki/chatgpt) can also be used to design prompts for AI image generators besides the options above. This can be achieved by asking for adjectives that describe a specific scene (figures 10a and 10b) or directly asking it to write a prompt (e.g. “Write a text prompt for an AI art generation software that would fit the art style of Kilian Eng”). [&#91;1&#93;](#cite_note-”1”-1) [&#91;12&#93;](#cite_note-”15”-12)

## Security Risks

- [Prompt injection](/wiki/prompt_injection)

## Prompting vs. Fine-tuning

Prompting and [Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1) represent two different ways to leverage [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) like [GPT-4](/wiki/gpt-4). 

Fine-tuning involves adapting an LLM's [parameters](/index.php?title=Parameters&action=edit&redlink=1) based on a specific [dataset](/wiki/dataset), making it a potent tool for complex tasks where accurate, trusted output is vital. However, fine-tuning often requires a labeled dataset and is potentially expensive during the [training](/wiki/training) phase.

Conversely, prompting is the technique of providing specific instructions to an LLM to guide its responses. It doesn't necessitate model retraining for each new prompt or data change, and thus, offers a quicker iterative process. Importantly, it doesn't require a labeled dataset, making it a viable option when training data is scant or absent. Prompting can be an excellent starting point for solving tasks, especially simpler ones, as it can be resource-friendly and computationally efficient.

![Prompting vs finetuning1.png](/images/thumb/0/0b/Prompting_vs_finetuning1.png/400px-Prompting_vs_finetuning1.png)

Despite its advantages, prompting may underperform compared to fine-tuning for complex tasks. There's a clear trade-off in terms of [inference](/wiki/inference) costs. Fine-tuned models, by integrating task-specific knowledge into the model's parameters, can generate accurate responses with minimal explicit instructions or prompts, making them cheaper in the long run. In contrast, prompted models, which rely heavily on explicit instructions, can be resource-intensive and more expensive, particularly for large-scale applications. Therefore, the choice between fine-tuning and prompting will depend on the specific use case, data availability, task complexity, and computational resources.

## Parts of a Prompt

### System Prompt

A [system prompt](/wiki/system_prompt) is a set of persistent instructions and contextual information provided to [models](/wiki/models), particularly [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs), that defines their behavior, capabilities, and constraints throughout an interaction session. Unlike [user prompts](/index.php?title=User_prompts&action=edit&redlink=1) which change with each query, system prompts remain constant and establish core parameters including identity, knowledge boundaries, ethical guidelines, and response formatting. 

### Developer Prompt

### User Prompt

## Related Pages

- [Prompt engineering](/wiki/prompt_engineering)

- [Prompt injection](/wiki/prompt_injection)

## References

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12.