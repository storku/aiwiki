---
title: "Universal Speech Model"
slug: "universal_speech_model"
categories:
  - "Papers"
---*See also: [Papers](/wiki/papers)*

## Universal Speech Model

The Universal Speech Model ([USM](/wiki/usm)) is a state-of-the-art collection of speech models with 2 billion parameters, engineered to conduct automatic speech recognition (ASR) in over 300 languages. USM has been trained using 12 million hours of spoken data and 28 billion text sentences. Developed for uses such as subtitles on [YouTube](/index.php?title=YouTube&action=edit&redlink=1), the system supports widely-used languages like English and Mandarin, as well as less common languages, encompassing Punjabi, Assamese, Santhali, Balinese, Shona, Malagasy, Luganda, Luo, Bambara, Soga, Maninka, Xhosa, Akan, Lingala, Chichewa, Nkore, and Nzema.

## Model Development and Efficacy

The USM showcases the efficiency of employing a sizable unlabelled multilingual dataset for pre-training its encoder, subsequently fine-tuning it on a smaller labelled data set. This method allows for the recognition of under-represented languages and illustrates the model's adaptability to new languages and data sources.

## Proficiency Across Numerous Languages

![Usm1.png](/images/thumb/c/c2/Usm1.png/300px-Usm1.png)

Incorporating more than 300 languages in the pre-training phase, USM has displayed exceptional performance when fine-tuned on YouTube Caption's multilingual speech information. This supervised dataset comprises 73 languages, with an average of fewer than three thousand hours of data for each language. Despite the limited supervised data, the model achieves an average word error rate (WER) of under 30% for the 73 languages, an unprecedented accomplishment.

Compared to the internal cutting-edge model, USM has a 6% relative lower WER for English-US. Moreover, when contrasted with the recently launched Whisper (large-v2) model, trained on over 400,000 hours of labelled data, USM demonstrates a 32.7% relative lower WER on average for the 18 languages that Whisper can decode with a WER below 40%.

## Adaptation to Subsequent ASR Tasks

![Usm2.png](/images/thumb/e/ed/Usm2.png/300px-Usm2.png)

USM surpasses the Whisper model on various publicly accessible datasets, including CORAAL (African American Vernacular English), SpeechStew (English), and FLEURS (102 languages). These outcomes are attained with and without training on in-domain data. For the 62 languages in the FLEURS dataset that coincide with those supported by the Whisper model, CUSM has a 65.8% relative lower WER without in-domain data and a 67.8% relative lower WER with in-domain data.

## Superior Automated Speech Translation (AST)

![Usm3.png](/images/thumb/2/2d/Usm3.png/300px-Usm3.png)

USM is also efficient for speech translation tasks, as evidenced by its performance on the CoVoST dataset. The model categorizes languages into high, medium, and low-resource groups, computing the BLEU score for each segment. USM consistently surpasses the Whisper model across all resource divisions, highlighting its adaptability and effectiveness in speech translation.