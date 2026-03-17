---
title: "Prompt engineering"
slug: "prompt_engineering"
categories:
  - "Terms"
  - "AI_Terms"
---*See also: [Prompts](/wiki/prompts), [Prompt engineering for image generation](/wiki/prompt_engineering_for_image_generation) and [Prompt engineering for text generation](/wiki/prompt_engineering_for_text_generation)*

## Introduction

Prompt engineering, also known as [in-context learning](/wiki/in-context_learning), is an emerging research area within Human-Computer Interaction (HCI) that involves the formal search for [prompts](/wiki/prompts) to produce desired outcomes from [AI models](/wiki/ai_models). Prompt engineering involves techniques that guide the behavior of [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1) ([LLMs](/wiki/llm)) towards specific goals without modifying the [model](/wiki/model)'s [weights](/wiki/weights). As an experimental discipline, the impact of these prompting strategies can differ significantly across various [models](/wiki/models), requiring extensive trial and error along with heuristic approaches. This process involves selecting and composing sentences to achieve a certain result, such as a specific visual style in [text-to-image models](/index.php?title=Text-to-image_models&action=edit&redlink=1) or a different tone in the response of a [text-to-text one](/index.php?title=Text-to-text_models&action=edit&redlink=1). Unlike the hard sciences of STEM fields, this is an evolving technique based on trial and error to produce effective AI outcomes. [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3) Prompt engineers serve as translators between "human language" and "AI language," transforming an idea into words that the AI model can comprehend. [&#91;1&#93;](#cite_note-”1”-1)

The process of prompt engineering is similar to a conversation with the [generative system](/index.php?title=Generative_system&action=edit&redlink=1), with practitioners adapting and refining prompts to improve outcomes. [&#91;2&#93;](#cite_note-”2”-2) It has emerged as a new form of interaction with models that have learned complex abstractions from consuming large amounts of data from the internet. These models have metalearning capabilities and can adapt their abstractions on the fly to fit new tasks, making it necessary to prompt them with specific knowledge and abstractions to perform well on new tasks. The term "prompt engineering" was coined by [Gwern](/index.php?title=Gwern&action=edit&redlink=1) (writer and technologist), who evaluated GPT3's capabilities on creative fiction and suggested that a new course of interaction would be to figure out how to prompt the model to elicit specific knowledge and abstractions. [&#91;3&#93;](#cite_note-”3”-3)

In order to get the best results from these large and powerful generative models, prompt engineering is a critical skill that users must possess. Adding certain keywords and phrases to the textual input prompts known as "[prompt modifiers](/index.php?title=Prompt_modifiers&action=edit&redlink=1)" can improve the aesthetic qualities and subjective attractiveness of the [generated images](/index.php?title=Generated_images&action=edit&redlink=1), for example. The process of prompt engineering is iterative and experimental in nature, where practitioners formulate prompts as probes into the generative models' latent space. There are various resources and guides available to novices to help them write effective input prompts for [text-to-image generation](/index.php?title=Text-to-image_generation&action=edit&redlink=1) systems, however, prompt engineering is still an emerging practice that requires extensive experimentation and trial and error. [&#91;1&#93;](#cite_note-”1”-1)[&#91;2&#93;](#cite_note-”2”-2)[&#91;3&#93;](#cite_note-”3”-3)

Manual prompt engineering is laborious, it may be infeasible in some situations, and the prompt results may vary between various model versions. [&#91;4&#93;](#cite_note-”4”-4) However, there have been developments in automated [prompt generation](/index.php?title=Prompt_generation&action=edit&redlink=1) which rephrases the input, making it more model-friendly. [&#91;5&#93;](#cite_note-”5”-5)

Therefore, this field is important for the generation of high-quality [AI-generated outputs](/index.php?title=AI-generated_outputs&action=edit&redlink=1). [Text-to-image models](/index.php?title=Text-to-image_models&action=edit&redlink=1), in particular, face limitations in their text encoders, making prompt design even more crucial to produce aesthetically pleasing images with current models. [&#91;4&#93;](#cite_note-”4”-4) These models work based on caption matching techniques and are pre-trained using millions of [text-image datasets](/index.php?title=Text-image_datasets&action=edit&redlink=1). While a result will be generated for any prompt, the quality of the artwork is directly proportional to the quality of the prompt. [&#91;6&#93;](#cite_note-”6”-6)

## Image Generation

**[Prompt engineering for image generation](/wiki/prompt_engineering_for_image_generation)**

## Text Generation

**[Prompt engineering for text generation](/wiki/prompt_engineering_for_text_generation)**

## Prompt Template

*See also: [Prompt templates](/index.php?title=Prompt_templates&action=edit&redlink=1)*
[Prompt template](/index.php?title=Prompt_template&action=edit&redlink=1) allows the [prompt](/wiki/prompt) to use of variables. It allows the prompt to stay largely the same while being used with different input values.

## Products

- [LangChain](/wiki/langchain) - library for combining language models with other components to build applications.

## References

1. 
2. 
3. 
4. 
5. 
6.