---
title: "Hugging Face"
slug: "hugging_face"
---## Introduction

Hugging Face is a [company](/wiki/company) and [model hub](/wiki/model_hub) that works on the field of [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)), self-described as the “home of [machine learning](/wiki/machine_learning).” [&#91;1&#93;](#cite_note-”1”-1) It’s a community and data science platform that provides both tools that empower users to build, train, and deploy [machine learning](/wiki/machine_learning) ([ML](/wiki/ml)) [models](/wiki/models) that are based on [open-source](/index.php?title=Open-source&action=edit&redlink=1) code, and a place where a community of researchers, data scientists, and ML engineers can participate by sharing ideas and contributing to open source projects. [&#91;2&#93;](#cite_note-”2”-2) Its open-source hub offers a library of state-of-the-art models for [Natural Language Processing](/wiki/natural_language_processing) ([NLP](/wiki/nlp)), [computer vision](/wiki/computer_vision), and others that are relevant to AI. In August 2022, there were more than 61 thousand [pre-trained models](/wiki/pre-trained_models). Technological giants like [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), [Google](/index.php?title=Google&action=edit&redlink=1), [Facebook](/index.php?title=Facebook&action=edit&redlink=1), [Apple](/index.php?title=Apple&action=edit&redlink=1), [AWS](/index.php?title=AWS&action=edit&redlink=1), and others have used Hugging Face’s models, datasets, and libraries. [&#91;3&#93;](#cite_note-”3”-3) [&#91;4&#93;](#cite_note-”4”-4)

The company began by offering a chat platform in 2017. Then, it focused on NLP, creating an NLP library that made easily accessible resources like [transformers](/wiki/transformers), [datasets](/wiki/datasets), [tokenizers](/index.php?title=Tokenizers&action=edit&redlink=1), etc. Releasing a wide variety of tools made them popular among big tech companies. [&#91;5&#93;](#cite_note-”5”-5) NLP technologies can help to bridge the communication gap between humans and machines since computers do not process information in the same way. [&#91;5&#93;](#cite_note-”5”-5) With these systems, “it is possible for computers to read text, hear speech, interpret it, measure sentiment, and even determine which parts of the text or speech are important”. [&#91;4&#93;](#cite_note-”4”-4)

As work practices have become more flexible, there has been an increase in the adoption of tools for remote collaboration between data science teams, experts, and amateurs. Sharing knowledge and resources is gaining relevance in AI in order to advance the field since probably no single company will be able to “solve” it on its own. Hugging Face embraces this community work by providing a community “Hub,” a place where users can share and examine models and datasets, therefore contributing to its goal of democratizing AI for all. [&#91;3&#93;](#cite_note-”3”-3) It is like the [GitHub](/index.php?title=GitHub&action=edit&redlink=1) for [AI models](/wiki/ai_models).

In 2019, the company raised $15 million to build a comprehensive NLP library. In 2021, it raised another $40 million in a Series B funding round in which existing investors like Lux Capital, A.Capital, and Betaworks participated. [&#91;1&#93;](#cite_note-”1”-1) [&#91;4&#93;](#cite_note-”4”-4) [&#91;6&#93;](#cite_note-”6”-6) Besides increasing its funding, Hugging Face has also acquired [Gradio](/index.php?title=Gradio&action=edit&redlink=1), “a platform that enables anyone to demo their [ML models](/wiki/ml_models) through a web-based interface.” [&#91;1&#93;](#cite_note-”1”-1)

## Benefits, characteristics, and impact

There are several advantages in using Hugging face transformers library:

- Ease of use.

- State-of-the-art models.

- Lower computing costs.

- Easily customizable/adaptable models to different use cases.

- High-level natural language understanding and generation.

- High-level computer vision and audio tasks. [&#91;1&#93;](#cite_note-”1”-1)

The company is known for its contributions to the field of NLP. Its NLP tasks include [text classification](/index.php?title=Text_classification&action=edit&redlink=1) and [generation](/index.php?title=Text_generation&action=edit&redlink=1), [translation](/index.php?title=Translation&action=edit&redlink=1), [summarization](/index.php?title=Summarization&action=edit&redlink=1), [fill-mask](/index.php?title=Fill-mask&action=edit&redlink=1), [question-answering](/index.php?title=Question-answering&action=edit&redlink=1), [zero-shot](/index.php?title=Zero-shot&action=edit&redlink=1) [classification](/wiki/classification) and [sentence similarity](/index.php?title=Sentence_similarity&action=edit&redlink=1). Regarding [audio](/wiki/audio) tasks, it includes [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1), [text-to-speech](/index.php?title=Text-to-speech&action=edit&redlink=1), [automatic speech recognition](/index.php?title=Automatic_speech_recognition&action=edit&redlink=1), and [audio classification](/index.php?title=Audio_classification&action=edit&redlink=1). [&#91;3&#93;](#cite_note-”3”-3)

From its beginnings has a chatbot, it’s becoming the GitHub of ML. The platform offers 100,000 pre-trained [models](/wiki/models) and 10,000 [datasets](/wiki/datasets) for NLP, speech, computer vision, [time-series](/index.php?title=Time-series&action=edit&redlink=1), biology, [reinforcement learning](/wiki/reinforcement_learning), chemistry, and others. [&#91;7&#93;](#cite_note-”7”-7) Around 5,000 companies use Hugging Face, [&#91;6&#93;](#cite_note-”6”-6) and it has over 1,200 contributors and 25,800 users. [&#91;1&#93;](#cite_note-”1”-1)

## Models

![](/images/thumb/a/ad/3._Example_of_full_model_card-source-towardsdatascience.png/300px-3._Example_of_full_model_card-source-towardsdatascience.png)  
Figure 1. Model card elements. Source: Towards Data Science.
Creating a new [model](/wiki/model) in the platform is actually a Git repo for the files related to an ML model a user wants to share with the same characteristics as versioning, branches, and discoverability to name a few. The type of OS license attributed to the contributing model and assets can also be specified as well as defining its visibility. [&#91;2&#93;](#cite_note-”2”-2)

The model in the user interface has several elements (figure 1):

- Name, likes, and associated tags.

- Main body of the [model card](/index.php?title=Model_card&action=edit&redlink=1) where an overview of the model can be given, code snippets for how to use it, and other relevant information.

- [Train](/index.php?title=Train&action=edit&redlink=1), [fine-tune](/index.php?title=Fine-tune&action=edit&redlink=1), or [deploy](/index.php?title=Deploy&action=edit&redlink=1) the model. This is done by pointing at an AWS Sagemaker instance or using Hugging Face’s own infrastructure.

- Metadata with information about datasets that were used to train the model and the Spaces that use it. [&#91;2&#93;](#cite_note-”2”-2)

## Datasets

![](/images/thumb/d/d9/4._Dataset_elements-source-towardsdatascience.png/300px-4._Dataset_elements-source-towardsdatascience.png)  
Figure 2. Dataset card. Source: Towards Data Science.
[Datasets](/wiki/datasets) are used to help with model training or fine-tuning and they are available in multiple languages. The company’s datasets library provides users with an easy way to load datasets and the most commonly used operations for processing them (e.g. sampling, shuffling, filtering, etc.). [&#91;3&#93;](#cite_note-”3”-3)

When creating a new dataset, the user will also have to name it and choose its license type. [&#91;2&#93;](#cite_note-”2”-2) The dataset elements on the platform (figure 2) include:

- Title, likes, and tags.

- Table of contents.

- Main body of the dataset which can be configured to show an embedded dataset preview.

- Quick links to the GitHub repository.

- Code snippet to use the dataset through the platform’s python dataset library.

- Metadata about the origin, size, and models trained on the dataset. [&#91;2&#93;](#cite_note-”2”-2)

## Spaces

![](/images/thumb/1/1e/5._Spaces-towardsdatascience.png/300px-5._Spaces-towardsdatascience.png)  
Figure 3. Hugging Face's Spaces. Source: Towards Data Science.
The platform also has Spaces (figure 3), a place to showcase the work done in a self-contained ML demo app. The community actively contributes to it and a user can look for inspiration by checking out different submissions. [&#91;2&#93;](#cite_note-”2”-2)

## Community

The vast community contribution of [models](/wiki/models), [datasets](/wiki/datasets), and [spaces](/index.php?title=Spaces&action=edit&redlink=1) can be accessed through the platform. Most of the models in this repository are built in [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1). Sometimes, alternatives for the main tasks are also available in [TensorFlow](/wiki/tensorflow) and other [ML libraries](/index.php?title=ML_libraries&action=edit&redlink=1). [&#91;2&#93;](#cite_note-”2”-2)

A quality of life feature that saves time from exploring through the community models is Tasks. This provides a curated view of the model, dependent on the task that a user wants to accomplish. For each task, there’s an explanation in a visual and intuitive way, with diagrams, videos, and links to a demo that uses the Inference API. To complement this there are also descriptions of use cases and task variants. [&#91;2&#93;](#cite_note-”2”-2)

## Inference Endpoints

Inference Endpoints is an AI-as-a-service by Hugging Face with the goal of facilitating the implementation of ML projects by easily helping to “deploy Transformers, Diffusers or any model on dedicated, fully managed infrastructure.” [&#91;7&#93;](#cite_note-”7”-7) [&#91;8&#93;](#cite_note-”8”-8) According to VentureBeat, “The AI-as-a-service offering is designed to be a solution to take on large workloads of enterprises - including in regulated industries that are heavy users of transformer models, like financial services (for example air gapped environments), healthcare services (for example HIPAA compliance) and consumer tech (for example GDPR compliance). The company claims that Inference Endpoints will enable more than 100,000 Hugging Face Hub users to go from experimentation to production in just a couple of minutes”. [&#91;7&#93;](#cite_note-”7”-7)

In this service, the user will select the model to deploy, choose the cloud provider and region, and specify the security settings. Any ML model, from transformers to diffusers, can be deployed. [&#91;7&#93;](#cite_note-”7”-7) [&#91;8&#93;](#cite_note-”8”-8)

## Pricing

Hugging Face uses a freemium model for its pricing. A detailed tier structure can be viewed [here](https://huggingface.co/pricing).

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2) [1.3](#cite_ref-”1”_1-3) [1.4](#cite_ref-”1”_1-4) Romano, R (2022).  An introduction to Hugging Face transformers for NLP. Qwak. [https://www.qwak.com/post/an-introduction-to-hugging-face-transformers-for-nlp](https://www.qwak.com/post/an-introduction-to-hugging-face-transformers-for-nlp)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1) [2.2](#cite_ref-”2”_2-2) [2.3](#cite_ref-”2”_2-3) [2.4](#cite_ref-”2”_2-4) [2.5](#cite_ref-”2”_2-5) [2.6](#cite_ref-”2”_2-6) [2.7](#cite_ref-”2”_2-7) Mahmood, O (2022). What’s Hugging Face? Towards Data Science. [https://towardsdatascience.com/whats-hugging-face-122f4e7eb11a](https://towardsdatascience.com/whats-hugging-face-122f4e7eb11a)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1) [3.2](#cite_ref-”3”_3-2) [3.3](#cite_ref-”3”_3-3) Nabeel, M. What is Hugging Face? Educative. [https://www.educative.io/answers/what-is-huggingface](https://www.educative.io/answers/what-is-huggingface)

4. ↑ [4.0](#cite_ref-”4”_4-0) [4.1](#cite_ref-”4”_4-1) [4.2](#cite_ref-”4”_4-2) Syal, A (2020). Hugging Face: A Step Towards Democratizing NLP. Towards Data Science. [https://towardsdatascience.com/hugging-face-a-step-towards-democratizing-nlp-2c79f258c951](https://towardsdatascience.com/hugging-face-a-step-towards-democratizing-nlp-2c79f258c951)

5. ↑ [5.0](#cite_ref-”5”_5-0) [5.1](#cite_ref-”5”_5-1) Sarma, N (2023). Hugging Face pre-trained models: Find the best one for your task. Neptune.ai. [https://neptune.ai/blog/hugging-face-pre-trained-models-find-the-best](https://neptune.ai/blog/hugging-face-pre-trained-models-find-the-best)

6. ↑ [6.0](#cite_ref-”6”_6-0) [6.1](#cite_ref-”6”_6-1) Dillet, R (2021). Hugging Face raises $40 million for its natural language processing library.  TechCrunch. [https://techcrunch.com/2021/03/11/hugging-face-raises-40-million-for-its-natural-language-processing-library/?guce_referrer=aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLw&guce_referrer_sig=AQAAACIYR4_aqmp84G_gD8G4LGbxperNQX6g_CtEDFPaIJ9-rf3_yCSbMhn0b4nE-oyzeK0gbOaDYg_ZBF9UVOfhOG58FUzC_cKJFEnF0YaqhE2OsWp5DljgGXCzl-J4NWMV9FrWyYhc0JSUjVvDyYSuwx096p7ABZOPQdsjU0NCJLEn](https://techcrunch.com/2021/03/11/hugging-face-raises-40-million-for-its-natural-language-processing-library/?guce_referrer=aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLw&guce_referrer_sig=AQAAACIYR4_aqmp84G_gD8G4LGbxperNQX6g_CtEDFPaIJ9-rf3_yCSbMhn0b4nE-oyzeK0gbOaDYg_ZBF9UVOfhOG58FUzC_cKJFEnF0YaqhE2OsWp5DljgGXCzl-J4NWMV9FrWyYhc0JSUjVvDyYSuwx096p7ABZOPQdsjU0NCJLEn)

7. ↑ [7.0](#cite_ref-”7”_7-0) [7.1](#cite_ref-”7”_7-1) [7.2](#cite_ref-”7”_7-2) [7.3](#cite_ref-”7”_7-3) Krishna, S (2022). Hugging Face takes step toward democratizing AI and ML. VentureBeat. [https://venturebeat.com/ai/hugging-face-steps-toward-democratizing-ai-and-ml-with-latest-offering%EF%BF%BC/](https://venturebeat.com/ai/hugging-face-steps-toward-democratizing-ai-and-ml-with-latest-offering%EF%BF%BC/)

8. ↑ [8.0](#cite_ref-”8”_8-0) [8.1](#cite_ref-”8”_8-1) Hugging Face. Inference Endpoints. Hugging Face. [https://huggingface.co/inference-endpoints](https://huggingface.co/inference-endpoints)