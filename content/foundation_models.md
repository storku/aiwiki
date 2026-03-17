---
title: "Foundation models"
slug: "foundation_models"
categories:
  - "Articles_with_short_description"
  - "Artificial_intelligence"
  - "Machine_learning"
  - "Natural_language_processing"
  - "Computer_vision"
  - "Deep_learning"
---Short description: Paradigm of [artificial intelligence](/wiki/artificial_intelligence) models pretrained on broad data and adaptable to many tasks

[Template:About](/index.php?title=Template:About&action=edit&redlink=1)
[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

**Foundation models** (FMs) are large [machine learning](/wiki/machine_learning) models trained on broad data, generally via [self-supervised learning](/wiki/self-supervised_learning) at scale, that can then be adapted (for example via [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1)) to a wide range of downstream tasks across modalities.[&#91;1&#93;](#cite_note-CRFM-def-1)[&#91;2&#93;](#cite_note-NIST-glossary-2) The term emphasizes that such models serve as a common *foundation* upon which many [downstream tasks](/index.php?title=Downstream_task&action=edit&redlink=1) and applications can be built, rather than bespoke systems trained separately for each task. Many prominent [large language models](/wiki/large_language_model) (LLMs) and multimodal systems are commonly described as foundation models.[&#91;1&#93;](#cite_note-CRFM-def-1)

Building foundation models is often highly resource-intensive, with the most advanced models costing hundreds of millions of dollars to cover the expenses of acquiring, curating, and processing massive datasets, as well as the compute power required for training.[&#91;3&#93;](#cite_note-wikipedia-3) In contrast, adapting existing foundation models for specific tasks or using them directly is far less costly, as it leverages pre-trained capabilities and typically requires only fine-tuning on smaller, task-specific datasets.[&#91;3&#93;](#cite_note-wikipedia-3)

## Definition and scope

The phrase *foundation model* was popularized by researchers associated with Stanford's Center for Research on Foundation Models (CRFM) in August 2021 to describe models trained on broad data at scale using mostly self-supervision and adaptable to many tasks.[&#91;1&#93;](#cite_note-CRFM-def-1) The researchers chose "foundation" over "foundational" because "foundational" implies that these models provide fundamental principles in a way that "foundation" does not.[&#91;3&#93;](#cite_note-wikipedia-3) They also noted that preexisting terms were inadequate: "'(large) language model' was too narrow given [the] focus is not only language; 'self-supervised model' was too specific to the training objective; and 'pretrained model' suggested that the noteworthy action all happened after 'pretraining.'"[&#91;1&#93;](#cite_note-CRFM-def-1)

Foundation models differ from [large language models](/wiki/large_language_model) (LLMs), as LLMs are a subset specifically focused on interpreting, generating, and manipulating human language, while foundation models encompass broader modalities like text, images, video, or other data types.[&#91;4&#93;](#cite_note-openxcell-4) All LLMs can be considered foundation models, but not all foundation models are LLMs.[&#91;5&#93;](#cite_note-linkedin-5)

### Legal definitions

Subsequent policy and standards documents have adopted related terminology. In the United States, Executive Order 14110 defines a subcategory of "[dual-use](/index.php?title=Dual-use&action=edit&redlink=1) foundation model" as an [artificial intelligence](/wiki/artificial_intelligence) model trained on broad data, generally using self-supervision, containing at least tens of billions of parameters, applicable across many contexts, and exhibiting, or easily modifiable to exhibit, high levels of performance at tasks that pose serious risks to security, national economic security, or public health or safety.[&#91;6&#93;](#cite_note-EO14110-6) 

NIST documents and glossaries similarly characterize foundation models as broadly trained, self-supervised systems adaptable to varied tasks.[&#91;2&#93;](#cite_note-NIST-glossary-2)[&#91;7&#93;](#cite_note-NIST-800-1-7)

In the [European Union](/index.php?title=European_Union&action=edit&redlink=1)'s [AI Act](/index.php?title=AI_Act&action=edit&redlink=1), closely related terminology, *general-purpose AI models* (GPAI), is used for models intended for integration into many downstream systems, with specific obligations (including additional duties for models with *systemic risk*).[&#91;8&#93;](#cite_note-EU-GPAI-FAQ-8)

## History

Technologically, foundation models are built using established machine learning techniques like [deep neural networks](/index.php?title=Deep_neural_networks&action=edit&redlink=1), [transfer learning](/wiki/transfer_learning), and [self-supervised learning](/wiki/self-supervised_learning).[&#91;3&#93;](#cite_note-wikipedia-3) The concept of pre-training a large model on a general dataset and then fine-tuning it for specific tasks has roots in earlier work on transfer learning with models like [Word2vec](/index.php?title=Word2vec&action=edit&redlink=1) and [GloVe](/index.php?title=GloVe&action=edit&redlink=1). However, the paradigm shifted significantly with the introduction of the [Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architecture in 2017.[&#91;9&#93;](#cite_note-Vaswani2017-9)

Subsequent models like Google's [BERT](/wiki/bert) (Bidirectional Encoder Representations from Transformers) in 2018 and OpenAI's [GPT](/wiki/generative_pre-trained_transformer) series demonstrated the power of large-scale, pre-trained language models.[&#91;10&#93;](#cite_note-devlin2018-10) As these models grew in size and capability, their potential applications expanded far beyond their initial scope.

The 2022 releases of [Stable Diffusion](/wiki/stable_diffusion) and [ChatGPT](/wiki/chatgpt) (initially powered by the GPT-3.5 model) led to foundation models and [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) entering widespread public discourse.[&#91;3&#93;](#cite_note-wikipedia-3) Further releases of [LLaMA](/wiki/llama), [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1), and [Mistral](/index.php?title=Mistral&action=edit&redlink=1) in 2023 contributed to a greater emphasis placed on how foundation models are released, with open foundation models garnering significant support and scrutiny.[&#91;3&#93;](#cite_note-wikipedia-3)

## Characteristics

Foundation models are distinguished by several defining characteristics:

- **Broad pretraining data**: FMs are trained on diverse, large-scale corpora (text, images, audio, code, etc.), typically using [self-supervised learning](/wiki/self-supervised_learning) objectives such as next-token prediction or masked modeling.[&#91;1&#93;](#cite_note-CRFM-def-1)[&#91;11&#93;](#cite_note-SSL-IBM-11)

- **Adaptability**: After pretraining, they can be adapted via [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1), [instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1), or [reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF) to perform specific tasks or follow instructions more reliably.[&#91;12&#93;](#cite_note-FLAN-12)[&#91;13&#93;](#cite_note-Ouyang-RLHF-13)

- **Scale**: Foundation models operate at massive scale in three dimensions, data scale (billions to trillions of tokens), model scale (tens of billions to trillions of parameters), and compute scale (thousands of [GPUs](/index.php?title=GPU&action=edit&redlink=1) for training).[&#91;14&#93;](#cite_note-aws-14)

- **[Emergence](/index.php?title=Emergent_abilities&action=edit&redlink=1)**: Quantitative increases in scale lead to new qualitative capabilities that were not present in smaller versions, such as [zero-shot learning](/index.php?title=Zero-shot_learning&action=edit&redlink=1) and [few-shot learning](/wiki/few-shot_learning).[&#91;15&#93;](#cite_note-wei2022-15)

- **Homogenization**: A wide array of applications are built on a small number of foundation models, creating both efficiency gains and systemic risks.[&#91;1&#93;](#cite_note-CRFM-def-1)

## Architecture and Training

Most modern foundation models are based on the [Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architecture, though [diffusion models](/wiki/diffusion_model) are widely used for image, audio, and video generation.[&#91;16&#93;](#cite_note-DDPM-16) [Contrastive learning](/index.php?title=Contrastive_learning&action=edit&redlink=1) across image–text pairs (for example [CLIP](/index.php?title=CLIP&action=edit&redlink=1)) is a common multimodal pretraining strategy.[&#91;17&#93;](#cite_note-CLIP-17)

### Pretraining

Pretraining typically uses [self-supervised learning](/wiki/self-supervised_learning) on broad corpora to learn general representations. For text, common objectives include next-token autoregressive modeling and masked language modeling; for images and audio, objectives include masked/denoising prediction and diffusion-based reconstruction.[&#91;1&#93;](#cite_note-CRFM-def-1)[&#91;9&#93;](#cite_note-Vaswani2017-9)[&#91;16&#93;](#cite_note-DDPM-16)

### Adaptation methods

- **[Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1)**: Updating model weights on task- or domain-specific data.[&#91;1&#93;](#cite_note-CRFM-def-1)

- **[Instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1)**: Supervised fine-tuning on collections of natural-language instructions to improve zero-shot task following (for example FLAN).[&#91;12&#93;](#cite_note-FLAN-12)

- **[Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF)**: Optimizing a reward model learned from human preferences to align outputs with user intent (for example InstructGPT).[&#91;13&#93;](#cite_note-Ouyang-RLHF-13)

- **[Prompt engineering](/wiki/prompt_engineering)**: Crafting inputs to elicit desired outputs without changing model weights, including zero-shot, one-shot, and few-shot prompting.[&#91;18&#93;](#cite_note-BrownGPT3-18)

- **Tool use / [retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)**: Integrating external [knowledge bases](/index.php?title=Knowledge_base&action=edit&redlink=1) or tools to access up-to-date or specialized information.[&#91;19&#93;](#cite_note-RAG-19)

## Notable Examples

| Model | Modality | Parameters | Year | Developer | Key Features | Source |
| --- | --- | --- | --- | --- | --- | --- |
| [BERT](/wiki/bert) | [Text (LLM)](/index.php?title=Text_(LLM)&action=edit&redlink=1) | 340M | 2018 | [Google](/index.php?title=Google&action=edit&redlink=1) | First bidirectional foundation model | [&#91;10&#93;](#cite_note-devlin2018-10) |
| [GPT-3](/wiki/gpt-3) | Text (LLM) | 175B | 2020 | [OpenAI](/wiki/openai) | Demonstrated strong few-shot learning | [&#91;18&#93;](#cite_note-BrownGPT3-18) |
| [GPT-4](/wiki/gpt-4) | [Multimodal](/index.php?title=Multimodal&action=edit&redlink=1) | >1T (estimated) | 2023 | OpenAI | Advanced multimodal capabilities | [&#91;20&#93;](#cite_note-openai2023-20) |
| [Claude](/wiki/claude) series | Text (LLM) | Various | 2023-2024 | [Anthropic](/wiki/anthropic) | Advanced reasoning and safety features | [&#91;21&#93;](#cite_note-anthropic2024-21) |
| [Gemini](/index.php?title=Gemini&action=edit&redlink=1) | Multimodal | Various | 2023-2024 | Google | State-of-the-art multimodal model | [&#91;22&#93;](#cite_note-google2023-22) |
| [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) | Text (LLM) | 7B-70B | 2023 | [Meta AI](/wiki/meta_ai) | Open-weight foundation model | [&#91;23&#93;](#cite_note-Llama2-23) |
| [BLOOM](/index.php?title=BLOOM&action=edit&redlink=1) | Text (LLM) | 176B | 2022 | [BigScience](/index.php?title=BigScience&action=edit&redlink=1) | Multilingual, supports 46 languages | [&#91;24&#93;](#cite_note-bloom2022-24) |
| [CLIP](/index.php?title=CLIP&action=edit&redlink=1) | [Vision-Text](/index.php?title=Vision-Text&action=edit&redlink=1) | 400M | 2021 | OpenAI | Contrastive text-image pretraining | [&#91;17&#93;](#cite_note-CLIP-17) |
| [DALL-E 3](/wiki/dall-e) | [Text-to-Image](/index.php?title=Text-to-Image&action=edit&redlink=1) | Unknown | 2023 | OpenAI | High-quality text-to-image generation | [&#91;25&#93;](#cite_note-dalle3-25) |
| [Stable Diffusion](/wiki/stable_diffusion) | Text-to-Image | 890M | 2022 | [Stability AI](/wiki/stability_ai) | Open-source image generation | [&#91;26&#93;](#cite_note-rombach2022-26) |
| [FlamingoFlamingo](/index.php?title=FlamingoFlamingo&action=edit&redlink=1) | Multimodal | 80B | 2022 | [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) | Visual language model for few-shot learning | [&#91;27&#93;](#cite_note-flamingo-27) |
| [AlphaFold 2](/index.php?title=AlphaFold_2&action=edit&redlink=1) | [Protein structure](/index.php?title=Protein_structure&action=edit&redlink=1) | 21M | 2021 | DeepMind | Protein structure prediction | [&#91;28&#93;](#cite_note-alphafold-28) |

## Applications

Foundation models enable a broad range of applications, often after modest adaptation:

### Natural Language Processing

- Question answering, summarization, translation, code generation, and dialogue assistants based on [large language models](/wiki/large_language_model).[&#91;18&#93;](#cite_note-BrownGPT3-18)

- [Sentiment analysis](/wiki/sentiment_analysis) and text classification

- Content generation for articles, marketing copy, emails, and creative writing

### Computer Vision

- Zero-shot classification and open-vocabulary recognition via contrastive pretraining[&#91;17&#93;](#cite_note-CLIP-17)

- Text-to-image generation via diffusion[&#91;16&#93;](#cite_note-DDPM-16)

- [Object detection](/index.php?title=Object_detection&action=edit&redlink=1), [image segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1), and [optical character recognition](/index.php?title=Optical_character_recognition&action=edit&redlink=1)

### Scientific Research

- Drug discovery and molecular design[&#91;28&#93;](#cite_note-alphafold-28)

- Climate modeling and prediction

- Materials science and chemistry applications

- Genomics and radiology applications[&#91;29&#93;](#cite_note-healthcare-29)

### Code and Software Development

- Code completion and generation ([GitHub Copilot](/wiki/github_copilot), [Amazon CodeWhisperer](/index.php?title=Amazon_CodeWhisperer&action=edit&redlink=1))

- Bug detection and fixing

- Code explanation and documentation

- Language translation between programming languages

### Business and Industry

- Customer service chatbots and virtual assistants

- Supply chain optimization and predictive maintenance

- Fraud detection and risk assessment

- Automated investment research and financial analysis[&#91;30&#93;](#cite_note-forbes2025-30)

### Robotics

- Visual navigation and task planning

- Human-robot interaction

- Manipulation tasks

- Environment simulation using world models[&#91;31&#93;](#cite_note-nvidia-cosmos-31)

## Governance, Safety, and Regulation

Policy makers and standards bodies have proposed governance approaches tailored to foundation models:

- **United States**: The 2023 Executive Order introduces reporting and safety requirements tied to high-risk "dual-use foundation models," defining them by training scale and potential risk profile.[&#91;6&#93;](#cite_note-EO14110-6)[&#91;32&#93;](#cite_note-CRS-EO-32)

- **NIST**: Guidance on managing misuse risk for dual-use FMs provides terminology and recommended practices for developers and deployers.[&#91;7&#93;](#cite_note-NIST-800-1-7)

- **European Union**: The [AI Act](/index.php?title=AI_Act&action=edit&redlink=1) establishes obligations for [general-purpose AI](/index.php?title=General-purpose_AI&action=edit&redlink=1) models (GPAI), including heightened duties for models with systemic risk and a Code of Practice pathway.[&#91;8&#93;](#cite_note-EU-GPAI-FAQ-8)

### Frontier Models

Certain highly advanced foundation models are termed "frontier models," which have the potential to "possess dangerous capabilities sufficient to pose severe risks to public safety."[&#91;3&#93;](#cite_note-wikipedia-3) These capabilities may include:

- Designing and synthesizing new biological or chemical weapons

- Producing and propagating convincing, tailored disinformation

- Harnessing unprecedented offensive cyber capabilities

- Evading human control through deceptive means

## Transparency and Documentation

Research initiatives evaluate the transparency of FM developers across data, compute, model characteristics, and downstream impact:

- **Foundation Model Transparency Index (FMTI)**: An index specifying 100 indicators to measure transparency, with reports in 2023 (v1.0) and 2024 (v1.1). The 2023 paper documented low average transparency; the 2024 update reported improvements across 14 developers while noting persistent gaps.[&#91;33&#93;](#cite_note-FMTI-2023-33)[&#91;34&#93;](#cite_note-FMTI-2024-34)

## Challenges and Limitations

### Computational Requirements

- Training costs can reach hundreds of millions of dollars[&#91;3&#93;](#cite_note-wikipedia-3)

- Require thousands of GPUs for training

- Environmental impact from energy consumption

- Computational power required has doubled every 3.4 months since 2012[&#91;14&#93;](#cite_note-aws-14)

### Bias and Fairness

- Models can perpetuate and amplify biases present in training data[&#91;1&#93;](#cite_note-CRFM-def-1)

- Social and demographic biases

- Geographic and cultural biases

- Language biases favoring well-represented languages

- Risk of homogenization spreading biases across all downstream applications

### Data Quality and Privacy

- Web-scraped data often contains toxic, biased, or copyrighted material[&#91;3&#93;](#cite_note-wikipedia-3)

- Privacy concerns when training on user data

- Challenges in data curation at scale

- Risk of memorizing and reproducing training data

### Evaluation Challenges

- Difficulty in comprehensively evaluating general-purpose models

- Emergent capabilities that are hard to predict

- Need for new benchmarks and evaluation frameworks

## Supply Chain

The supply chain for foundation models involves upstream resources (data from providers like Scale AI, Surge AI; compute from AWS, Google Cloud, Microsoft Azure) and downstream adaptations.[&#91;3&#93;](#cite_note-wikipedia-3) Costs concentrate compute (80% of 2023 AI capital), leading to market consolidation among few companies.[&#91;3&#93;](#cite_note-wikipedia-3)

## Release Strategies

Release strategies for foundation models include:

- **API access**: Users query the model through an interface (for example OpenAI's GPT-4)

- **Open weights**: Model weights available for download (for example Meta's Llama)

- **Closed/Limited access**: Restricted to specific users or organizations

## See also

- [Large language model](/wiki/large_language_model)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [Diffusion model](/wiki/diffusion_model)

- [Contrastive learning](/index.php?title=Contrastive_learning&action=edit&redlink=1)

- [Self-supervised learning](/wiki/self-supervised_learning)

- [Transfer learning](/wiki/transfer_learning)

- [Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1)

- [Instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1)

- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)

- [General-purpose AI](/index.php?title=General-purpose_AI&action=edit&redlink=1)

- [Generative artificial intelligence](/index.php?title=Generative_artificial_intelligence&action=edit&redlink=1)

- [Multimodal learning](/index.php?title=Multimodal_learning&action=edit&redlink=1)

- [Few-shot learning](/wiki/few-shot_learning)

## References

1. ↑ [1.0](#cite_ref-CRFM-def_1-0) [1.1](#cite_ref-CRFM-def_1-1) [1.2](#cite_ref-CRFM-def_1-2) [1.3](#cite_ref-CRFM-def_1-3) [1.4](#cite_ref-CRFM-def_1-4) [1.5](#cite_ref-CRFM-def_1-5) [1.6](#cite_ref-CRFM-def_1-6) [1.7](#cite_ref-CRFM-def_1-7) [1.8](#cite_ref-CRFM-def_1-8) Stanford Center for Research on Foundation Models (CRFM), *On the Opportunities and Risks of Foundation Models* (2021). [https://crfm.stanford.edu/report.html](https://crfm.stanford.edu/report.html) ; arXiv: [https://arxiv.org/abs/2108.07258](https://arxiv.org/abs/2108.07258)

2. ↑ [2.0](#cite_ref-NIST-glossary_2-0) [2.1](#cite_ref-NIST-glossary_2-1) NIST CSRC Glossary, *foundation model*. [https://csrc.nist.gov/glossary/term/foundation_model](https://csrc.nist.gov/glossary/term/foundation_model)

3. ↑ [3.00](#cite_ref-wikipedia_3-0) [3.01](#cite_ref-wikipedia_3-1) [3.02](#cite_ref-wikipedia_3-2) [3.03](#cite_ref-wikipedia_3-3) [3.04](#cite_ref-wikipedia_3-4) [3.05](#cite_ref-wikipedia_3-5) [3.06](#cite_ref-wikipedia_3-6) [3.07](#cite_ref-wikipedia_3-7) [3.08](#cite_ref-wikipedia_3-8) [3.09](#cite_ref-wikipedia_3-9) [3.10](#cite_ref-wikipedia_3-10) Foundation model - Wikipedia. [https://en.wikipedia.org/wiki/Foundation_model](https://en.wikipedia.org/wiki/Foundation_model)

4. [↑](#cite_ref-openxcell_4-0) Foundation Model vs LLM: Key Differences Explained - Openxcell. [https://www.openxcell.com/blog/foundation-model-vs-llm/](https://www.openxcell.com/blog/foundation-model-vs-llm/)

5. [↑](#cite_ref-linkedin_5-0) Foundation Models Vs LLM(Large Language Models) - LinkedIn. [https://www.linkedin.com/pulse/foundation-models-vs-llmlarge-language-aman-walia-aslsc](https://www.linkedin.com/pulse/foundation-models-vs-llmlarge-language-aman-walia-aslsc)

6. ↑ [6.0](#cite_ref-EO14110_6-0) [6.1](#cite_ref-EO14110_6-1) Executive Order 14110 (Oct. 30, 2023), *Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence*. Federal Register: [https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence) ; White House archive: [https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/](https://bidenwhitehouse.archives.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/)

7. ↑ [7.0](#cite_ref-NIST-800-1_7-0) [7.1](#cite_ref-NIST-800-1_7-1) NIST, *Managing Misuse Risk for Dual-Use Foundation Models* (AI 800-1 initial/draft publications, 2024–2025). [https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf) ; [https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd2.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd2.pdf)

8. ↑ [8.0](#cite_ref-EU-GPAI-FAQ_8-0) [8.1](#cite_ref-EU-GPAI-FAQ_8-1) European Commission, *General-Purpose AI Models in the AI Act – Questions & Answers* (2025). [https://digital-strategy.ec.europa.eu/en/faqs/general-purpose-ai-models-ai-act-questions-answers](https://digital-strategy.ec.europa.eu/en/faqs/general-purpose-ai-models-ai-act-questions-answers)

9. ↑ [9.0](#cite_ref-Vaswani2017_9-0) [9.1](#cite_ref-Vaswani2017_9-1) Vaswani et al., *Attention Is All You Need* (2017). arXiv: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762) ; NeurIPS PDF: [https://papers.neurips.cc/paper/7181-attention-is-all-you-need.pdf](https://papers.neurips.cc/paper/7181-attention-is-all-you-need.pdf)

10. ↑ [10.0](#cite_ref-devlin2018_10-0) [10.1](#cite_ref-devlin2018_10-1) Devlin et al., *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding* (2018). [https://arxiv.org/abs/1810.04805](https://arxiv.org/abs/1810.04805)

11. [↑](#cite_ref-SSL-IBM_11-0) IBM, *What is self-supervised learning?*. [https://www.ibm.com/think/topics/self-supervised-learning](https://www.ibm.com/think/topics/self-supervised-learning)

12. ↑ [12.0](#cite_ref-FLAN_12-0) [12.1](#cite_ref-FLAN_12-1) Jason Wei et al., *Finetuned Language Models Are Zero-Shot Learners* (arXiv 2021; ICLR 2022). [https://arxiv.org/abs/2109.01652](https://arxiv.org/abs/2109.01652) ; [https://openreview.net/pdf?id=gEZrGCozdqR](https://openreview.net/pdf?id=gEZrGCozdqR)

13. ↑ [13.0](#cite_ref-Ouyang-RLHF_13-0) [13.1](#cite_ref-Ouyang-RLHF_13-1) Long Ouyang et al., *Training language models to follow instructions with human feedback* (NeurIPS 2022). [https://arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155) ; [https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf](https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf)

14. ↑ [14.0](#cite_ref-aws_14-0) [14.1](#cite_ref-aws_14-1) What are Foundation Models? - Foundation Models in Generative AI Explained - AWS. [https://aws.amazon.com/what-is/foundation-models/](https://aws.amazon.com/what-is/foundation-models/)

15. [↑](#cite_ref-wei2022_15-0) Wei et al., *Emergent Abilities of Large Language Models* (2022). [https://arxiv.org/abs/2206.07682](https://arxiv.org/abs/2206.07682)

16. ↑ [16.0](#cite_ref-DDPM_16-0) [16.1](#cite_ref-DDPM_16-1) [16.2](#cite_ref-DDPM_16-2) Ho, Jain, Abbeel, *Denoising Diffusion Probabilistic Models* (2020). arXiv: [https://arxiv.org/abs/2006.11239](https://arxiv.org/abs/2006.11239) ; NeurIPS PDF: [https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf](https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf)

17. ↑ [17.0](#cite_ref-CLIP_17-0) [17.1](#cite_ref-CLIP_17-1) [17.2](#cite_ref-CLIP_17-2) Radford et al., *Learning Transferable Visual Models From Natural Language Supervision* (2021). arXiv: [https://arxiv.org/abs/2103.00020](https://arxiv.org/abs/2103.00020) ; ICML PDF: [https://proceedings.mlr.press/v139/radford21a/radford21a.pdf](https://proceedings.mlr.press/v139/radford21a/radford21a.pdf)

18. ↑ [18.0](#cite_ref-BrownGPT3_18-0) [18.1](#cite_ref-BrownGPT3_18-1) [18.2](#cite_ref-BrownGPT3_18-2) Tom B. Brown et al., *Language Models are Few-Shot Learners* (GPT-3; 2020). arXiv: [https://arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165) ; NeurIPS PDF: [https://papers.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf](https://papers.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf)

19. [↑](#cite_ref-RAG_19-0) Patrick Lewis et al., *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks* (2020). arXiv: [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401) ; NeurIPS PDF: [https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf](https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf)

20. [↑](#cite_ref-openai2023_20-0) OpenAI, *GPT-4 Technical Report* (2023). [https://arxiv.org/abs/2303.08774](https://arxiv.org/abs/2303.08774)

21. [↑](#cite_ref-anthropic2024_21-0) Anthropic, *Claude 3 Model Card* (2024). [https://www.anthropic.com/claude](https://www.anthropic.com/claude)

22. [↑](#cite_ref-google2023_22-0) Google, *Gemini: A Family of Highly Capable Multimodal Models* (2023). [https://arxiv.org/abs/2312.11805](https://arxiv.org/abs/2312.11805)

23. [↑](#cite_ref-Llama2_23-0) Hugo Touvron et al., *Llama 2: Open Foundation and Fine-Tuned Chat Models* (2023). arXiv: [https://arxiv.org/abs/2307.09288](https://arxiv.org/abs/2307.09288) ; Meta page: [https://ai.meta.com/research/publications/llama-2-open-foundation-and-fine-tuned-chat-models/](https://ai.meta.com/research/publications/llama-2-open-foundation-and-fine-tuned-chat-models/)

24. [↑](#cite_ref-bloom2022_24-0) BigScience Workshop, *BLOOM: A 176B-Parameter Open-Access Multilingual Language Model* (2022). [https://arxiv.org/abs/2211.05100](https://arxiv.org/abs/2211.05100)

25. [↑](#cite_ref-dalle3_25-0) OpenAI, *DALL-E 3 System Card* (2023). [https://cdn.openai.com/papers/DALL_E_3_System_Card.pdf](https://cdn.openai.com/papers/DALL_E_3_System_Card.pdf)

26. [↑](#cite_ref-rombach2022_26-0) Rombach et al., *High-Resolution Image Synthesis with Latent Diffusion Models* (2022). [https://arxiv.org/abs/2112.10752](https://arxiv.org/abs/2112.10752)

27. [↑](#cite_ref-flamingo_27-0) Alayrac et al., *Flamingo: a Visual Language Model for Few-Shot Learning* (2022). [https://arxiv.org/abs/2204.14198](https://arxiv.org/abs/2204.14198)

28. ↑ [28.0](#cite_ref-alphafold_28-0) [28.1](#cite_ref-alphafold_28-1) Jumper et al., *Highly accurate protein structure prediction with AlphaFold* (Nature, 2021). [https://doi.org/10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2)

29. [↑](#cite_ref-healthcare_29-0) Healthcare applications in Stanford FM report. [https://crfm.stanford.edu/report.html#healthcare](https://crfm.stanford.edu/report.html#healthcare)

30. [↑](#cite_ref-forbes2025_30-0) Foundation Models And LLMs: 19 Real-World, Practical Use Cases - Forbes (2025). [https://www.forbes.com/councils/forbestechcouncil/2025/02/05/foundation-models-and-llms-19-real-world-practical-use-cases/](https://www.forbes.com/councils/forbestechcouncil/2025/02/05/foundation-models-and-llms-19-real-world-practical-use-cases/)

31. [↑](#cite_ref-nvidia-cosmos_31-0) NVIDIA Cosmos World Foundation Models (2025). [https://blogs.nvidia.com/blog/world-foundation-models/](https://blogs.nvidia.com/blog/world-foundation-models/)

32. [↑](#cite_ref-CRS-EO_32-0) U.S. Congressional Research Service, *The AI Executive Order and Its Potential Implications for DOD* (Dec. 12, 2023). [https://www.congress.gov/crs-product/IN12286](https://www.congress.gov/crs-product/IN12286)

33. [↑](#cite_ref-FMTI-2023_33-0) Rishi Bommasani et al., *The Foundation Model Transparency Index* (Oct. 2023). [https://arxiv.org/abs/2310.12941](https://arxiv.org/abs/2310.12941) ; Stanford HAI explainer: [https://hai.stanford.edu/news/introducing-foundation-model-transparency-index](https://hai.stanford.edu/news/introducing-foundation-model-transparency-index)

34. [↑](#cite_ref-FMTI-2024_34-0) Rishi Bommasani et al., *The Foundation Model Transparency Index v1.1: May 2024* (paper & CRFM update). [https://crfm.stanford.edu/fmti/paper.pdf](https://crfm.stanford.edu/fmti/paper.pdf) ; [https://crfm.stanford.edu/2024/05/21/fmti-may-2024.html](https://crfm.stanford.edu/2024/05/21/fmti-may-2024.html)

## External Links

- [Stanford Center for Research on Foundation Models](https://crfm.stanford.edu/)

- [Hugging Face - Repository of Foundation Models](https://huggingface.co/)

- [OpenFlamingo Project](https://github.com/mlfoundations/open_flamingo)

- [Ada Lovelace Institute Foundation Models Explainer](https://www.adalovelaceinstitute.org/resource/foundation-models-explainer/)