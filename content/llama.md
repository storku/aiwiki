---
title: "LLaMA"
slug: "llama"
---*See also: [Papers](/wiki/papers)&#160;and [LLaMA/Model Card](/wiki/llama_model_card)*

## Model details

Organization developing the model The FAIR team of Meta AI.

Model date LLaMA was trained between December. 2022 and Feb. 2023.

Model version This is version 1 of the model.

Model type LLaMA is an auto-regressive language model, based on the transformer architecture. The model comes in different sizes: 7B, 13B, 33B and 65B parameters.

Paper or resources for more information More information can be found in the paper “LLaMA, Open and Efficient Foundation Language Models”, available at [https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/).

Citations details [https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/](https://research.facebook.com/publications/llama-open-and-efficient-foundation-language-models/)

License Non-commercial bespoke license

Where to send questions or comments about the model Questions and comments about LLaMA can be sent via the GitHub repository of the project , by opening an issue.

## Intended use

Primary intended uses The primary use of LLaMA is research on large language models, including: exploring potential applications such as question answering, natural language understanding or reading comprehension, understanding capabilities and limitations of current language models, and developing techniques to improve those, evaluating and mitigating biases, risks, toxic and harmful content generations, hallucinations.

Primary intended users The primary intended users of the model are researchers in natural language processing, machine learning and artificial intelligence.

Out-of-scope use cases LLaMA is a base, or foundational, model. As such, it should not be used on downstream applications without further risk evaluation and mitigation. In particular, our model has not been trained with human feedback, and can thus generate toxic or offensive content, incorrect information or generally unhelpful answers.

## Factors

Relevant factors One of the most relevant factors for which model performance may vary is which language is used. Although we included 20 languages in the training data, most of our dataset is made of English text, and we thus expect the model to perform better for English than other languages. Relatedly, it has been shown in previous studies that performance might vary for different dialects, and we expect that it will be the case for our model.

Evaluation factors As our model is trained on data from the Web, we expect that it reflects biases from this source. We thus evaluated on RAI datasets to measure biases exhibited by the model for gender, religion, race, sexual orientation, age, nationality, disability, physical appearance and socio-economic status. We also measure the toxicity of model generations, depending on the toxicity of the context used to prompt the model.

## Metrics

Model performance measures We use the following measure to evaluate the model:

- Accuracy for common sense reasoning, reading comprehension, natural language understanding (MMLU), BIG-bench hard, WinoGender and CrowS-Pairs,

- Exact match for question answering,

- The toxicity score from Perspective API on RealToxicityPrompts.

Decision thresholds Not applicable.

Approaches to uncertainty and variability Due to the high computational requirements of training LLMs, we trained only one model of each size, and thus could not evaluate variability of pre-training.

## Evaluation datasets

The model was evaluated on the following benchmarks: BoolQ, PIQA, SIQA, HellaSwag, WinoGrande, ARC, OpenBookQA, NaturalQuestions, TriviaQA, RACE, MMLU, BIG-bench hard, GSM8k, RealToxicityPrompts, WinoGender, CrowS-Pairs.

## Training dataset

The model was trained using the following source of data: CCNet [67%], C4 [15%], GitHub [4.5%], Wikipedia [4.5%], Books [4.5%], ArXiv [2.5%], Stack Exchange[2%]. The Wikipedia and Books domains include data in the following languages: bg, ca, cs, da, de, en, es, fr, hr, hu, it, nl, pl, pt, ro, ru, sl, sr, sv, uk. See the paper for more details about the training set and corresponding preprocessing.

## Quantitative analysis

Hyperparameters for the model architecture

| LLaMa | Model hyper parameters |
| --- | --- |
| # of parameters | dimension | n heads | n layers | Learn rate! | Batch size | n tokens |
| 7B | 4096 | 32 | 32 | 3.0E-04 | 4M | 1T |
| 13B | 5120 | 40 | 40 | 3.0E-04 | 4M | 1T |
| 33B | 6656 | 52 | 60 | 1.5.E-04 | 4M | 1.4T |
| 65B | 8192 | 64 | 80 | 1.5.E-04 | 4M | 1.4T |

We present our results on eight standard common sense reasoning benchmarks in the table below.

| LLaMa | Model hyper parameters |
| --- | --- |
| # of parameters | BoolQ | PIQA | SIQA | HellaSwag | WinoGrande | ARC-e | ARC-c | OBQA | COPA |
| 7B | 76.5 | 79.8 | 48.9 | 76.1 | 70.1 | 76.7 | 47.6 | 57.2 | 93 |
| 13B | 78.1 | 80.1 | 50.4 | 79.2 | 73 | 78.1 | 52.7 | 56.4 | 94 |
| 33B | 83.1 | 82.3 | 50.4 | 82.8 | 76 | 81.4 | 57.8 | 58.6 | 92 |
| 65B | 85.3 | 82.8 | 52.3 | 84.2 | 77 | 81.5 | 56 | 60.2 | 94 |

We present our results on bias in the table below. Note that lower value is better indicating lower bias.

| No | Category | FAIR LLM |
| --- | --- | --- |
| 1 | Gender | 70.6 |
| 2 | Religion | 79 |
| 3 | Race/Color | 57 |
| 4 | Sexual orientation | 81 |
| 5 | Age | 70.1 |
| 6 | Nationality | 64.2 |
| 7 | Disability | 66.7 |
| 8 | Physical appearance | 77.8 |
| 9 | Socioeconomic status | 71.5 |
|  | LLaMA Average | 66.6 |

## Ethical considerations

Data The data used to train the model is collected from various sources, mostly from the Web. As such, it contains offensive, harmful and biased content. We thus expect the model to exhibit such biases from the training data.

Human life The model is not intended to inform decisions about matters central to human life, and should not be used in such a way.

Mitigations We filtered the data from the Web based on its proximity to Wikipedia text and references. For this, we used a Kneser-Ney language model and a fastText linear classifier.

Risks and harms Risks and harms of large language models include the generation of harmful, offensive or biased content. These models are often prone to generating incorrect information, sometimes referred to as hallucinations. We do not expect our model to be an exception in this regard.

Use cases LLaMA is a foundational model, and as such, it should not be used for downstream applications without further investigation and mitigations of risks. These risks and potential fraught use cases include, but are not limited to: generation of misinformation and generation of harmful, biased or offensive content.