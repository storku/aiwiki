---
title: "Pre-training"
slug: "pre-training"
categories:
  - "Machine_learning"
  - "Artificial_intelligence"
  - "Deep_learning"
  - "Natural_language_processing"
  - "Computer_vision"
  - "Transfer_learning"
---[Template:Infobox machine learning technique](/index.php?title=Template:Infobox_machine_learning_technique&action=edit&redlink=1)

**Pre-training** is a foundational [machine learning](/wiki/machine_learning) paradigm where [neural network](/wiki/neural_network) models first learn general representations from massive unlabeled datasets before being adapted to specific downstream tasks through [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1). This two-stage approach has revolutionized [artificial intelligence](/wiki/artificial_intelligence) across domains, enabling models to achieve superior performance with dramatically less task-specific labeled data than training from scratch.[&#91;1&#93;](#cite_note-bengio2013-1)

Pre-training is the initial training phase of a model on a broad dataset or task to learn general patterns and representations before being [fine-tuned](/index.php?title=Fine-tuning&action=edit&redlink=1) on a specific problem.[&#91;2&#93;](#cite_note-NISTGlossary-2) In this stage, a model (often called a [foundation model](/wiki/foundation_model) when it is general-purpose) is trained on large-scale data, frequently using [unlabeled data](/wiki/unlabeled_data) and [self-supervised learning](/wiki/self-supervised_learning) objectives, to acquire a broad understanding of features or knowledge.[&#91;3&#93;](#cite_note-bommasani2021-3) 

Modern [foundation models](/wiki/foundation_model) like [GPT-4](/wiki/gpt-4), [BERT](/wiki/bert), and [CLIP](/index.php?title=CLIP&action=edit&redlink=1) derive their capabilities primarily from pre-training on trillions of tokens or billions of images, learning rich patterns that transfer effectively across countless downstream applications.[&#91;3&#93;](#cite_note-bommasani2021-3) Pre-training addresses the fundamental challenge of data scarcity: rather than requiring millions of labeled examples for each task, models pre-trained on general data can adapt to new tasks with mere thousands or even dozens of examples.

## History

### Early foundations (2006-2012)

Pre-training's conceptual roots trace to 2006-2007 when [Geoffrey Hinton](/index.php?title=Geoffrey_Hinton&action=edit&redlink=1), Simon Osindero, and Yee-Whye Teh introduced unsupervised layer-wise pre-training for [deep belief networks](/index.php?title=Deep_belief_network&action=edit&redlink=1) using [Restricted Boltzmann Machines](/index.php?title=Restricted_Boltzmann_Machine&action=edit&redlink=1).[&#91;4&#93;](#cite_note-hinton2006-4) This breakthrough enabled training deep networks that were previously intractable due to [vanishing gradient problems](/wiki/vanishing_gradient_problem)—each layer pre-trained unsupervised, then the full network fine-tuned with supervision.[&#91;5&#93;](#cite_note-erhan2010-5)

The paradigm shifted dramatically in 2012 when [AlexNet](/index.php?title=AlexNet&action=edit&redlink=1) won [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) with a top-5 error of 15.3% compared to 26.2% for second place—an unprecedented 10.9% margin.[&#91;6&#93;](#cite_note-krizhevsky2012-6) This established supervised large-scale pre-training as the dominant [transfer learning](/wiki/transfer_learning) approach for [computer vision](/wiki/computer_vision).

### Word embeddings era (2013-2017)

[Word embeddings](/index.php?title=Word_embeddings&action=edit&redlink=1) emerged as [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)'s first scalable pre-training method. [Word2Vec](/index.php?title=Word2Vec&action=edit&redlink=1) (2013) introduced CBOW and Skip-gram architectures that learned dense vector representations capturing semantic relationships.[&#91;7&#93;](#cite_note-mikolov2013-7) [GloVe](/index.php?title=GloVe&action=edit&redlink=1) (2014) combined global matrix factorization with local context windows.[&#91;8&#93;](#cite_note-pennington2014-8) These static embeddings gave way to contextualized representations with [ELMo](/index.php?title=ELMo&action=edit&redlink=1) (2018), which used bidirectional [LSTMs](/wiki/lstm) to generate different embeddings for the same word based on context.[&#91;9&#93;](#cite_note-peters2018-9)

### Transformer revolution (2017-present)

The June 2017 paper "[Attention Is All You Need](/index.php?title=Attention_Is_All_You_Need&action=edit&redlink=1)" introduced [transformers](/wiki/transformer), fundamentally changing AI.[&#91;10&#93;](#cite_note-vaswani2017-10) The architecture eliminated recurrence and convolution, relying entirely on [multi-head self-attention](/index.php?title=Attention_mechanism&action=edit&redlink=1) mechanisms that compute relationships between all positions in parallel.

[BERT](/wiki/bert)'s October 2018 release demonstrated transformers' power for language understanding through bidirectional pre-training using [masked language modeling](/index.php?title=Masked_language_modeling&action=edit&redlink=1).[&#91;11&#93;](#cite_note-devlin2018-11) [GPT](/wiki/gpt) paralleled BERT with a unidirectional approach, with [GPT-3](/wiki/gpt-3) (2020) demonstrating that scale plus [autoregressive](/index.php?title=Autoregressive&action=edit&redlink=1) pre-training yields emergent capabilities like [few-shot learning](/wiki/few-shot_learning).[&#91;12&#93;](#cite_note-brown2020-12)

## Core Concepts

### The Two-Stage Paradigm: Pre-training and Fine-tuning

The development of large-scale AI models is now dominated by a two-stage paradigm that separates general knowledge acquisition from task-specific adaptation.[&#91;13&#93;](#cite_note-arXiv_SSL_Survey-13)

1. **Stage 1: Pre-training:** In this initial, computationally intensive phase, a model is trained on a massive, often unlabeled, dataset. The objective is typically self-supervised, such as predicting the next word in a sentence or filling in missing parts of an image.[&#91;13&#93;](#cite_note-arXiv_SSL_Survey-13) This stage is where the model learns fundamental concepts, from the grammar and syntax of language to the textures and shapes of visual objects. The result of this stage is a **pre-trained model**, which serves as a versatile foundation.[&#91;5&#93;](#cite_note-erhan2010-5)

2. **Stage 2: [Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1):** The pre-trained model is then adapted for a specific application by continuing the training process on a much smaller, task-specific, and typically labeled dataset. For example, a language model pre-trained on the entire internet might be fine-tuned on a dataset of customer reviews to perform sentiment analysis.[&#91;11&#93;](#cite_note-devlin2018-11) This step adjusts the model's pre-existing parameters to specialize its knowledge for the target task.[&#91;14&#93;](#cite_note-NVIDIAPretrained-14)

This two-stage approach represents a fundamental philosophical shift in machine learning, moving the field away from building highly specialized, single-task models from scratch toward creating generalist, reusable [foundation models](/wiki/foundation_model).

### Relationship with Transfer Learning

Pre-training is the core mechanism that enables **[transfer learning](/wiki/transfer_learning)**.[&#91;14&#93;](#cite_note-NVIDIAPretrained-14)[&#91;15&#93;](#cite_note-AWS_Transfer_Learning-15) Transfer learning is a machine learning method where a model developed for one task is reused as the starting point for a model on a second, related task.[&#91;15&#93;](#cite_note-AWS_Transfer_Learning-15) The pre-trained model is the tangible artifact that stores the knowledge to be transferred.

This transfer can be implemented in two primary ways:

- **[Feature Extraction](/index.php?title=Feature_Extraction&action=edit&redlink=1):** The pre-trained model is used as a fixed feature extractor with parameters frozen, and only new task-specific layers are trained.[&#91;16&#93;](#cite_note-DevTo_Fine-Tuning-16)

- **[Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1):** Some or all of the pre-trained model's parameters are updated during training on the new dataset, allowing deeper adaptation to the new task.[&#91;16&#93;](#cite_note-DevTo_Fine-Tuning-16)

## Technical Approach

### Core Mechanics

Pre-training operates through [self-supervised learning](/wiki/self-supervised_learning) objectives that enable models to extract knowledge from unlabeled data at massive scale. The process involves:

1. **[Data collection](/index.php?title=Data_collection&action=edit&redlink=1)**: Gathering datasets from sources like [Common Crawl](/index.php?title=Common_Crawl&action=edit&redlink=1) (15+ trillion tokens) or [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) (14+ million images)

2. **[Pretext task design](/index.php?title=Pretext_task_design&action=edit&redlink=1)**: Creating self-supervised objectives like predicting masked words, forecasting next tokens, or matching image-text pairs

3. **Training process**:
- [Forward propagation](/index.php?title=Forward_propagation&action=edit&redlink=1) through deep neural networks (typically transformers with 12-96 layers)

- Calculating loss against self-supervised objectives

- [Backpropagating](/wiki/backpropagation) gradients

- Updating billions of parameters using optimizers like [Adam](/index.php?title=Adam_optimizer&action=edit&redlink=1) or AdamW

Modern pre-training runs for weeks to months on thousands of [GPUs](/index.php?title=GPU&action=edit&redlink=1) or [TPUs](/wiki/tpu), processing datasets measured in terabytes.[&#91;17&#93;](#cite_note-touvron2023-17)

### Pre-training Objectives

#### Masked Language Modeling (MLM)

Popularized by BERT, [MLM](/index.php?title=MLM&action=edit&redlink=1) randomly masks approximately 15% of input tokens and trains models to predict them using full bidirectional context.[&#91;11&#93;](#cite_note-devlin2018-11) The masking strategy:

- 80% of selected tokens become [MASK]

- 10% swap to random tokens

- 10% remain unchanged

Variants include:

- **[RoBERTa](/index.php?title=RoBERTa&action=edit&redlink=1)**: Removed next sentence prediction, used dynamic masking, trained on 10x more data[&#91;18&#93;](#cite_note-liu2019-18)

- **[SpanBERT](/index.php?title=SpanBERT&action=edit&redlink=1)**: Masks contiguous spans rather than individual tokens[&#91;19&#93;](#cite_note-joshi2020-19)

- **[ELECTRA](/index.php?title=ELECTRA&action=edit&redlink=1)**: Discriminative pre-training detecting replaced tokens[&#91;20&#93;](#cite_note-clark2020-20)

#### Autoregressive Language Modeling

The [GPT](/wiki/gpt) family employs autoregressive pre-training, predicting each token given all previous tokens in left-to-right fashion.[&#91;21&#93;](#cite_note-radford2018-21) The objective maximizes likelihood:
P(x₁, ..., xₙ) = ∏P(xᵢ|x₁, ..., xᵢ₋₁)

#### Contrastive Learning

[Contrastive learning](/index.php?title=Contrastive_learning&action=edit&redlink=1) revolutionized self-supervised pre-training in computer vision and multimodal domains:

- **[SimCLR](/index.php?title=SimCLR&action=edit&redlink=1)**: Learns representations maximizing agreement between augmented views of same image[&#91;22&#93;](#cite_note-chen2020-22)

- **[CLIP](/index.php?title=CLIP&action=edit&redlink=1)**: Jointly trains image and text encoders on 400 million image-text pairs[&#91;23&#93;](#cite_note-radford2021-23)

- **[MAE](/index.php?title=MAE&action=edit&redlink=1)**: Masks 75% of image patches and reconstructs missing pixels[&#91;24&#93;](#cite_note-he2022-24)

| Feature | Generative Pre-training | Contrastive Pre-training |
| --- | --- | --- |
| Core Objective | Reconstruct or predict parts of the input data; model the data distribution | Learn an embedding space where similar samples are close and dissimilar samples are far apart |
| Supervision Signal | The input data itself (for example the original unmasked token, the complete image) | The relationship between pairs of data points (positive vs. negative pairs) |
| Typical Architectures | [Autoencoders](/index.php?title=Autoencoder&action=edit&redlink=1) (AEs, VAEs), [GANs](/index.php?title=Generative_Adversarial_Network&action=edit&redlink=1), Autoregressive Models (for example Transformers) | Siamese Networks, models using InfoNCE or Triplet Loss objectives (for example SimCLR, MoCo) |
| Example Pretext Tasks | [Masked Language Modeling](/index.php?title=Masked_Language_Modeling&action=edit&redlink=1) (BERT), Next-Token Prediction (GPT), Image Inpainting, Denoising | Identifying an augmented version of an image from a batch of other images |
| Strengths | Can generate new data; learns a rich, dense representation of the data distribution | Often learns representations highly effective for downstream classification tasks; can be more sample-efficient |
| Weaknesses | Can be computationally expensive; may have inferior data scaling capacity | Can be data-hungry and prone to over-fitting on limited data; sensitive to negative sample choice |

## Datasets

### Language Datasets

| Dataset | Size | Description | Used by |
| --- | --- | --- | --- |
| [Common Crawl](/index.php?title=Common_Crawl&action=edit&redlink=1) | 320+ TB raw | Web crawl data | Most modern LLMs |
| [C4](/index.php?title=C4&action=edit&redlink=1) | 750 GB | Cleaned Common Crawl | [T5](/index.php?title=T5&action=edit&redlink=1), many others |
| [The Pile](/index.php?title=The_Pile&action=edit&redlink=1) | 825 GB | 22 diverse sources | [GPT-Neo](/index.php?title=GPT-Neo&action=edit&redlink=1), [GPT-J](/index.php?title=GPT-J&action=edit&redlink=1) |
| [RefinedWeb](/index.php?title=RefinedWeb&action=edit&redlink=1) | 5+ trillion tokens | Filtered Common Crawl | [Falcon](/index.php?title=Falcon&action=edit&redlink=1) |
| [RedPajama](/index.php?title=RedPajama&action=edit&redlink=1) | 1.2 trillion tokens | Open reproduction of LLaMA data | Open models |
| [BookCorpus](/index.php?title=BookCorpus&action=edit&redlink=1) | 800M words | 11,000+ books | [BERT](/wiki/bert), [GPT](/wiki/gpt) |
| [Wikipedia](/index.php?title=Wikipedia&action=edit&redlink=1) | 2.5B words (English) | Encyclopedia articles | BERT, GPT, most LLMs |

### Vision Datasets

| Dataset | Size | Description | Primary use |
| --- | --- | --- | --- |
| [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) | 1.2M images | 1000 object classes | Supervised pre-training |
| [JFT-300M](/index.php?title=JFT-300M&action=edit&redlink=1) | 300M images | Google internal dataset | Large-scale pre-training |
| [LAION-5B](/index.php?title=LAION-5B&action=edit&redlink=1) | 5.85B pairs | Image-text pairs from web | CLIP-style training |
| [DataComp](/index.php?title=DataComp&action=edit&redlink=1) | 12.8B pairs | CommonPool for research | Multimodal research |
| [COCO](/index.php?title=COCO&action=edit&redlink=1) | 330K images | Object detection/segmentation | Vision tasks |

## Computational Requirements

### Training Costs

| Model | Parameters | Training time | Hardware | Estimated cost |
| --- | --- | --- | --- | --- |
| [BERT-Base](/index.php?title=BERT-Base&action=edit&redlink=1) | 110M | 4 days | 16 TPUs | $500-1,000 |
| [GPT-3](/wiki/gpt-3) | 175B | ~34 days | 1024 A100s | $4.6 million |
| [Llama 2 (7B)](/index.php?title=Llama_2_(7B)&action=edit&redlink=1) | 7B | 1-2 weeks | 64-128 A100s | $200,000-500,000 |
| [Llama 3.1 (405B)](/index.php?title=Llama_3.1_(405B)&action=edit&redlink=1) | 405B | 30.84M GPU-hours | 24,576 H100s | $10-20 million |
| [T5](/index.php?title=T5&action=edit&redlink=1) | 11B | 4 weeks | 256 TPU v3 | $1.5 million |
| [CLIP](/index.php?title=CLIP&action=edit&redlink=1) | 400M | 12 days | 592 V100s | $600,000 |

### Hardware Evolution

- **[NVIDIA A100](/index.php?title=NVIDIA_A100&action=edit&redlink=1)** (2020): 312 TFLOPS, 40/80GB memory, workhorse for 2020-2023 training[&#91;25&#93;](#cite_note-nvidia2020-25)

- **[NVIDIA H100](/index.php?title=NVIDIA_H100&action=edit&redlink=1)** (2022): 2-3x faster than A100, becoming standard for frontier models[&#91;26&#93;](#cite_note-nvidia2022-26)

- **[Google TPU v5e](/index.php?title=Google_TPU_v5e&action=edit&redlink=1)** (2023): Pods with 50,944 chips achieving 10 exaFLOPS[&#91;27&#93;](#cite_note-google2023-27)

## Notable Pre-Trained Models

| Model | Domain | Release Year | Parameters | Key Objective | Developer |
| --- | --- | --- | --- | --- | --- |
| [Word2Vec](/index.php?title=Word2Vec&action=edit&redlink=1) | NLP | 2013 | 300 dim | Skip-gram/CBOW | Google |
| [ResNet](/index.php?title=ResNet&action=edit&redlink=1)-50 | CV | 2015 | 25M | Image Classification | Microsoft |
| [BERT](/wiki/bert) | NLP | 2018 | 340M | MLM, NSP | Google |
| [GPT-3](/wiki/gpt-3) | NLP | 2020 | 175B | Autoregressive LM | OpenAI |
| [RoBERTa](/index.php?title=RoBERTa&action=edit&redlink=1) | NLP | 2019 | 355M | Dynamic MLM | Facebook |
| [T5](/index.php?title=T5&action=edit&redlink=1) | NLP | 2019 | 11B | Text-to-Text | Google |
| [Vision Transformer](/index.php?title=Vision_Transformer&action=edit&redlink=1) | CV | 2020 | 86M-632M | Image Classification | Google |
| [CLIP](/index.php?title=CLIP&action=edit&redlink=1) | Multimodal | 2021 | 400M | Contrastive Alignment | OpenAI |
| [DALL-E](/wiki/dall-e) | Multimodal | 2021 | 12B | Text-to-Image | OpenAI |
| [ELECTRA](/index.php?title=ELECTRA&action=edit&redlink=1) | NLP | 2020 | 340M | Replaced Token Detection | Google |
| [XLNet](/index.php?title=XLNet&action=edit&redlink=1) | NLP | 2019 | 340M | Permutation LM | Google/CMU |
| [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) | NLP | 2023 | 7B-70B | Autoregressive LM | Meta |
| [Flamingo](/index.php?title=Flamingo&action=edit&redlink=1) | Multimodal | 2022 | 80B | Visual Language | DeepMind |

## Applications

### Natural Language Processing

Pre-trained language models power nearly all modern NLP applications:[&#91;14&#93;](#cite_note-NVIDIAPretrained-14)[&#91;28&#93;](#cite_note-Toloka_Pre-training-28)

- **[Question answering](/index.php?title=Question_answering&action=edit&redlink=1)**: Models achieve 89.91% F1 on [SQuAD](/index.php?title=SQuAD&action=edit&redlink=1) 2.0, approaching human performance[&#91;29&#93;](#cite_note-rajpurkar2018-29)

- **[Code generation](/index.php?title=Code_generation&action=edit&redlink=1)**: [GitHub Copilot](/wiki/github_copilot) assists with 43% of code written by developers[&#91;30&#93;](#cite_note-github2024-30)

- **[Conversational AI](/index.php?title=Conversational_AI&action=edit&redlink=1)**: Powering chatbots and virtual assistants like ChatGPT

- **[Machine translation](/index.php?title=Machine_translation&action=edit&redlink=1)**: Near-human quality on many language pairs

- **[Sentiment analysis](/wiki/sentiment_analysis)**: 90%+ accuracy for review and social media monitoring

- **[Text summarization](/index.php?title=Text_summarization&action=edit&redlink=1)**: Condensing documents while preserving key information

### Computer Vision

Pre-trained vision models serve as backbones for diverse applications:[&#91;31&#93;](#cite_note-VisoAI_CV_Applications-31)

- **[Image classification](/index.php?title=Image_classification&action=edit&redlink=1)**: [Vision Transformers](/index.php?title=Vision_Transformer&action=edit&redlink=1) achieve 88.5%+ ImageNet accuracy[&#91;32&#93;](#cite_note-dosovitskiy2021-32)

- **[Object detection](/index.php?title=Object_detection&action=edit&redlink=1)**: 50+ box AP on [COCO](/index.php?title=COCO_dataset&action=edit&redlink=1)

- **[Medical imaging](/index.php?title=Medical_imaging&action=edit&redlink=1)**: 90%+ accuracy for pathology detection, cancer screening in CT scans and MRIs

- **[Autonomous vehicles](/index.php?title=Autonomous_vehicles&action=edit&redlink=1)**: Real-time object detection for pedestrians, vehicles, traffic signs

- **[Industrial automation](/index.php?title=Industrial_automation&action=edit&redlink=1)**: Quality control, safety monitoring, defect detection

### Speech and Multimodal Systems

- **[Speech Recognition](/index.php?title=Speech_Recognition&action=edit&redlink=1)**: Pre-training builds robust speech-to-text systems less sensitive to accents and noise[&#91;33&#93;](#cite_note-GeeksForGeeks-33)

- **[Text-to-image generation](/index.php?title=Text-to-image_generation&action=edit&redlink=1)**: [Stable Diffusion](/wiki/stable_diffusion) uses CLIP embeddings for image synthesis[&#91;34&#93;](#cite_note-rombach2022-34)

- **[Visual question answering](/index.php?title=Visual_question_answering&action=edit&redlink=1)**: [Flamingo](/index.php?title=Flamingo&action=edit&redlink=1) achieves state-of-the-art on 16 benchmarks[&#91;35&#93;](#cite_note-alayrac2022-35)

- **[Zero-shot classification](/index.php?title=Zero-shot_classification&action=edit&redlink=1)**: CLIP matches supervised models without task-specific training

## Benefits and Advantages

Pre-training offers several critical advantages:[&#91;36&#93;](#cite_note-Baeldung2025-36)

- **Resource efficiency**: Reduces labeled data requirements by 10-100x

- **Faster development**: Fine-tuning takes hours/days vs. weeks/months from scratch

- **Better performance**: Pre-trained models consistently outperform random initialization

- **Transfer learning**: Knowledge transfers across related tasks and domains

- **Democratization**: Smaller teams can leverage frontier model capabilities

- **Generalization**: Models learn robust features that work across diverse applications

## Challenges and Limitations

### Environmental Impact

The computational demands of pre-training create significant environmental costs:

- **Carbon emissions**: GPT-3 training produced ~626,000 pounds of CO₂[&#91;37&#93;](#cite_note-strubell2019-37)

- **Water consumption**: Estimated 700,000 liters for cooling during GPT-3 training[&#91;38&#93;](#cite_note-li2023-38)

- **Energy use**: ChatGPT queries use ~10x more energy than Google searches[&#91;39&#93;](#cite_note-Wikipedia_AI_Environmental-39)

### Bias, Fairness, and Ethical Considerations

Pre-trained models inherit and amplify societal biases present in training data:[&#91;40&#93;](#cite_note-GoogleCloud_Foundation-40)

- **Gender bias**: Models associate professions with specific genders (nurse→women, engineer→men)[&#91;41&#93;](#cite_note-PNAS_LLM_Biases-41)

- **Racial and ethnic bias**: Preference for stereotypically Caucasian names in leadership recommendations[&#91;41&#93;](#cite_note-PNAS_LLM_Biases-41)

- **Linguistic bias**: C4 filters African American English at 42% vs 6.2% for White American English[&#91;42&#93;](#cite_note-dodge2021-42)

- **Disability bias**: Perpetuation of negative stereotypes about people with disabilities[&#91;43&#93;](#cite_note-ACL_Disability-43)

### Data and Legal Issues

- **Copyright concerns**: Active litigation regarding training on copyrighted content

- **Privacy violations**: Models may memorize and reproduce personal information

- **Data contamination**: Benchmarks appearing in training data inflate scores

- **Data quality**: Web-scraped data contains misinformation, toxicity, and bias

### Accessibility and Centralization

- **Geographic concentration**: US produces 5x more foundation models than China[&#91;44&#93;](#cite_note-maslej2024-44)

- **Compute barriers**: Training frontier models requires $10-100M+ in resources

- **Hardware costs**: Single H100 GPU costs $30,000-40,000

- **Technical expertise**: Requires specialized knowledge in distributed systems and optimization

## Future Directions

### Efficiency Improvements

- **[Mixture of Experts](/wiki/mixture_of_experts)**: [Mixtral](/index.php?title=Mixtral&action=edit&redlink=1) 8x7B achieves 70B performance with 13B active parameters[&#91;45&#93;](#cite_note-jiang2024-45)

- **[Knowledge distillation](/wiki/knowledge_distillation)**: Creating smaller models matching larger model performance

- **[Quantization](/wiki/quantization)**: Reducing precision from FP16 to INT8/INT4 with minimal accuracy loss

- **[Flash Attention](/index.php?title=Flash_Attention&action=edit&redlink=1)**: 2-4x speedup through optimized attention computation[&#91;46&#93;](#cite_note-dao2022-46)

- **[ALBERT](/index.php?title=ALBERT&action=edit&redlink=1)**: Parameter sharing reduces model size by 18x[&#91;47&#93;](#cite_note-lan2020-47)

### Multimodal and Lifelong Learning

- **[Multimodal pre-training](/index.php?title=Multimodal_pre-training&action=edit&redlink=1)**: Models processing text, images, audio, and video seamlessly[&#91;48&#93;](#cite_note-MultimodalWorkshop-48)

- **[Continual pre-training](/index.php?title=Continual_pre-training&action=edit&redlink=1)**: Updating models with new data without full retraining[&#91;49&#93;](#cite_note-ibrahim2024-49)

- **[Domain adaptation](/index.php?title=Domain_adaptation&action=edit&redlink=1)**: Specializing models for medicine, law, science

- **[Lifelong learning](/index.php?title=Lifelong_learning&action=edit&redlink=1)**: Overcoming catastrophic forgetting to learn continuously[&#91;50&#93;](#cite_note-CMU_Lifelong-50)

### Beyond Pre-training: Peak Data and Alignment

Some researchers suggest the era of scaling pre-training datasets is ending:[&#91;51&#93;](#cite_note-PDFTranslate-51)

- **[Peak data hypothesis](/index.php?title=Peak_data_hypothesis&action=edit&redlink=1)**: Exhausting high-quality public data sources

- **[Post-training focus](/index.php?title=Post-training_focus&action=edit&redlink=1)**: Greater emphasis on alignment techniques like [RLHF](/wiki/rlhf)

- **[Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)**: Self-improvement guided by explicit principles[&#91;52&#93;](#cite_note-bai2022-52)

- **[Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1)**: More efficient alternatives to RLHF[&#91;53&#93;](#cite_note-rafailov2023-53)

- **[Agentic AI](/index.php?title=Agentic_AI&action=edit&redlink=1)**: Systems learning from environment interaction rather than static datasets

## See also

- [Transfer learning](/wiki/transfer_learning)

- [Foundation models](/wiki/foundation_models)

- [Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1)

- [Self-supervised learning](/wiki/self-supervised_learning)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [BERT](/wiki/bert)

- [GPT-3](/wiki/gpt-3)

- [Large language model](/wiki/large_language_model)

- [Zero-shot learning](/index.php?title=Zero-shot_learning&action=edit&redlink=1)

- [Few-shot learning](/wiki/few-shot_learning)

- [Masked language modeling](/index.php?title=Masked_language_modeling&action=edit&redlink=1)

- [Contrastive learning](/index.php?title=Contrastive_learning&action=edit&redlink=1)

- [Word embeddings](/index.php?title=Word_embeddings&action=edit&redlink=1)

## References

1. [↑](#cite_ref-bengio2013_1-0) Bengio, Y., Courville, A., & Vincent, P. (2013). "Representation Learning: A Review and New Perspectives". IEEE Transactions on Pattern Analysis and Machine Intelligence. [https://arxiv.org/abs/1206.5538](https://arxiv.org/abs/1206.5538)

2. [↑](#cite_ref-NISTGlossary_2-0) NIST CSRC AI Glossary (2025). Definition of "pre-training": "training a general-purpose model on publicly-available data, often followed by fine-tuning for task-specific information." [https://csrc.nist.gov/glossary/term/pre_training](https://csrc.nist.gov/glossary/term/pre_training)

3. ↑ [3.0](#cite_ref-bommasani2021_3-0) [3.1](#cite_ref-bommasani2021_3-1) Bommasani, R., et al. (2021). "On the Opportunities and Risks of Foundation Models". Stanford CRFM. [https://arxiv.org/abs/2108.07258](https://arxiv.org/abs/2108.07258)

4. [↑](#cite_ref-hinton2006_4-0) Hinton, G. E., Osindero, S., & Teh, Y. W. (2006). "A fast learning algorithm for deep belief nets". Neural Computation, 18(7), 1527-1554. [https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf](https://www.cs.toronto.edu/~hinton/absps/fastnc.pdf)

5. ↑ [5.0](#cite_ref-erhan2010_5-0) [5.1](#cite_ref-erhan2010_5-1) Erhan, D., Bengio, Y., Courville, A., Manzagol, P., Vincent, P., & Bengio, S. (2010). "Why Does Unsupervised Pre-training Help Deep Learning?". Journal of Machine Learning Research. [https://jmlr.org/papers/v11/erhan10a.html](https://jmlr.org/papers/v11/erhan10a.html)

6. [↑](#cite_ref-krizhevsky2012_6-0) Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks". NeurIPS. [https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)

7. [↑](#cite_ref-mikolov2013_7-0) Mikolov, T., et al. (2013). "Efficient Estimation of Word Representations in Vector Space". arXiv. [https://arxiv.org/abs/1301.3781](https://arxiv.org/abs/1301.3781)

8. [↑](#cite_ref-pennington2014_8-0) Pennington, J., Socher, R., & Manning, C. (2014). "GloVe: Global Vectors for Word Representation". EMNLP. [https://nlp.stanford.edu/pubs/glove.pdf](https://nlp.stanford.edu/pubs/glove.pdf)

9. [↑](#cite_ref-peters2018_9-0) Peters, M., et al. (2018). "Deep Contextualized Word Representations". NAACL. [https://arxiv.org/abs/1802.05365](https://arxiv.org/abs/1802.05365)

10. [↑](#cite_ref-vaswani2017_10-0) Vaswani, A., et al. (2017). "Attention Is All You Need". NeurIPS. [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

11. ↑ [11.0](#cite_ref-devlin2018_11-0) [11.1](#cite_ref-devlin2018_11-1) [11.2](#cite_ref-devlin2018_11-2) Devlin, J., et al. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding". NAACL. [https://arxiv.org/abs/1810.04805](https://arxiv.org/abs/1810.04805)

12. [↑](#cite_ref-brown2020_12-0) Brown, T., et al. (2020). "Language Models are Few-Shot Learners". NeurIPS. [https://arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165)

13. ↑ [13.0](#cite_ref-arXiv_SSL_Survey_13-0) [13.1](#cite_ref-arXiv_SSL_Survey_13-1) Liu, X., et al. (2020). "Self-supervised Learning: Generative or Contrastive". arXiv. [https://arxiv.org/abs/2006.08218](https://arxiv.org/abs/2006.08218)

14. ↑ [14.0](#cite_ref-NVIDIAPretrained_14-0) [14.1](#cite_ref-NVIDIAPretrained_14-1) [14.2](#cite_ref-NVIDIAPretrained_14-2) Lee, Angie (December 8, 2022). "What Is a Pretrained AI Model?". NVIDIA Blog. [https://blogs.nvidia.com/blog/what-is-a-pretrained-ai-model/](https://blogs.nvidia.com/blog/what-is-a-pretrained-ai-model/)

15. ↑ [15.0](#cite_ref-AWS_Transfer_Learning_15-0) [15.1](#cite_ref-AWS_Transfer_Learning_15-1) Amazon Web Services. "What Is Transfer Learning?". [https://aws.amazon.com/what-is/transfer-learning/](https://aws.amazon.com/what-is/transfer-learning/)

16. ↑ [16.0](#cite_ref-DevTo_Fine-Tuning_16-0) [16.1](#cite_ref-DevTo_Fine-Tuning_16-1) Dev.to. "Understanding the Differences: Fine-Tuning vs. Transfer Learning". [https://dev.to/luxdevhq/understanding-the-differences-fine-tuning-vs-transfer-learning-370](https://dev.to/luxdevhq/understanding-the-differences-fine-tuning-vs-transfer-learning-370)

17. [↑](#cite_ref-touvron2023_17-0) Touvron, H., et al. (2023). "Llama 2: Open Foundation and Fine-Tuned Chat Models". Meta AI. [https://arxiv.org/abs/2307.09288](https://arxiv.org/abs/2307.09288)

18. [↑](#cite_ref-liu2019_18-0) Liu, Y., et al. (2019). "RoBERTa: A Robustly Optimized BERT Pretraining Approach". arXiv. [https://arxiv.org/abs/1907.11692](https://arxiv.org/abs/1907.11692)

19. [↑](#cite_ref-joshi2020_19-0) Joshi, M., et al. (2020). "SpanBERT: Improving Pre-training by Representing and Predicting Spans". TACL. [https://arxiv.org/abs/1907.10529](https://arxiv.org/abs/1907.10529)

20. [↑](#cite_ref-clark2020_20-0) Clark, K., et al. (2020). "ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators". ICLR. [https://arxiv.org/abs/2003.10555](https://arxiv.org/abs/2003.10555)

21. [↑](#cite_ref-radford2018_21-0) Radford, A., et al. (2018). "Improving Language Understanding by Generative Pre-Training". OpenAI. [https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)

22. [↑](#cite_ref-chen2020_22-0) Chen, T., et al. (2020). "A Simple Framework for Contrastive Learning of Visual Representations". ICML. [https://arxiv.org/abs/2002.05709](https://arxiv.org/abs/2002.05709)

23. [↑](#cite_ref-radford2021_23-0) Radford, A., et al. (2021). "Learning Transferable Visual Models From Natural Language Supervision". ICML. [https://arxiv.org/abs/2103.00020](https://arxiv.org/abs/2103.00020)

24. [↑](#cite_ref-he2022_24-0) He, K., et al. (2022). "Masked Autoencoders Are Scalable Vision Learners". CVPR. [https://arxiv.org/abs/2111.06377](https://arxiv.org/abs/2111.06377)

25. [↑](#cite_ref-nvidia2020_25-0) NVIDIA. (2020). "NVIDIA A100 Tensor Core GPU Architecture". [https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-ampere-architecture-whitepaper.pdf](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/nvidia-ampere-architecture-whitepaper.pdf)

26. [↑](#cite_ref-nvidia2022_26-0) NVIDIA. (2022). "NVIDIA H100 Tensor Core GPU Architecture". [https://resources.nvidia.com/en-us-tensor-core/nvidia-tensor-core-gpu-datasheet](https://resources.nvidia.com/en-us-tensor-core/nvidia-tensor-core-gpu-datasheet)

27. [↑](#cite_ref-google2023_27-0) Google Cloud. (2023). "Cloud TPU v5e". [https://cloud.google.com/tpu/docs/v5e](https://cloud.google.com/tpu/docs/v5e)

28. [↑](#cite_ref-Toloka_Pre-training_28-0) Toloka. "What is Pre-training in LLM Development?". [https://toloka.ai/blog/pre-training-in-llm-development/](https://toloka.ai/blog/pre-training-in-llm-development/)

29. [↑](#cite_ref-rajpurkar2018_29-0) Rajpurkar, P., Jia, R., & Liang, P. (2018). "Know What You Don't Know: Unanswerable Questions for SQuAD". ACL. [https://arxiv.org/abs/1806.03822](https://arxiv.org/abs/1806.03822)

30. [↑](#cite_ref-github2024_30-0) GitHub. (2024). "GitHub Copilot Impact Research". [https://github.blog/news-insights/research/](https://github.blog/news-insights/research/)

31. [↑](#cite_ref-VisoAI_CV_Applications_31-0) Viso.ai. "Top 45 Computer Vision Applications in 2024". [https://viso.ai/applications/computer-vision-applications/](https://viso.ai/applications/computer-vision-applications/)

32. [↑](#cite_ref-dosovitskiy2021_32-0) Dosovitskiy, A., et al. (2021). "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale". ICLR. [https://arxiv.org/abs/2010.11929](https://arxiv.org/abs/2010.11929)

33. [↑](#cite_ref-GeeksForGeeks_33-0) GeeksForGeeks. "What is Pre-training and its Objective?". [https://www.geeksforgeeks.org/artificial-intelligence/what-is-pre-training-and-its-objective/](https://www.geeksforgeeks.org/artificial-intelligence/what-is-pre-training-and-its-objective/)

34. [↑](#cite_ref-rombach2022_34-0) Rombach, R., et al. (2022). "High-Resolution Image Synthesis with Latent Diffusion Models". CVPR. [https://arxiv.org/abs/2112.10752](https://arxiv.org/abs/2112.10752)

35. [↑](#cite_ref-alayrac2022_35-0) Alayrac, J. B., et al. (2022). "Flamingo: a Visual Language Model for Few-Shot Learning". NeurIPS. [https://arxiv.org/abs/2204.14198](https://arxiv.org/abs/2204.14198)

36. [↑](#cite_ref-Baeldung2025_36-0) Baeldung (2025). "What Does Pre-training a Neural Network Mean?". [https://www.baeldung.com/cs/neural-network-pre-training](https://www.baeldung.com/cs/neural-network-pre-training)

37. [↑](#cite_ref-strubell2019_37-0) Strubell, E., Ganesh, A., & McCallum, A. (2019). "Energy and Policy Considerations for Deep Learning in NLP". ACL. [https://arxiv.org/abs/1906.02243](https://arxiv.org/abs/1906.02243)

38. [↑](#cite_ref-li2023_38-0) Li, P., et al. (2023). "Making AI Less Thirsty: Uncovering and Addressing the Secret Water Footprint of AI Models". arXiv. [https://arxiv.org/abs/2304.03271](https://arxiv.org/abs/2304.03271)

39. [↑](#cite_ref-Wikipedia_AI_Environmental_39-0) Wikipedia. "Environmental impact of artificial intelligence". [https://en.wikipedia.org/wiki/Environmental_impact_of_artificial_intelligence](https://en.wikipedia.org/wiki/Environmental_impact_of_artificial_intelligence)

40. [↑](#cite_ref-GoogleCloud_Foundation_40-0) Google Cloud. "What are foundation models?". [https://cloud.google.com/discover/what-are-foundation-models](https://cloud.google.com/discover/what-are-foundation-models)

41. ↑ [41.0](#cite_ref-PNAS_LLM_Biases_41-0) [41.1](#cite_ref-PNAS_LLM_Biases_41-1) Li, Z., et al. (2024). "Explicitly unbiased large language models still form biased mental models". PNAS. [https://www.pnas.org/doi/10.1073/pnas.2416228122](https://www.pnas.org/doi/10.1073/pnas.2416228122)

42. [↑](#cite_ref-dodge2021_42-0) Dodge, J., et al. (2021). "Documenting Large Webtext Corpora: A Case Study on the Colossal Clean Crawled Corpus". EMNLP. [https://arxiv.org/abs/2104.08758](https://arxiv.org/abs/2104.08758)

43. [↑](#cite_ref-ACL_Disability_43-0) Venkit, P. N., et al. (2022). "A Study of Implicit Bias in Pretrained Language Models against People with Disabilities". COLING. [https://aclanthology.org/2022.coling-1.113/](https://aclanthology.org/2022.coling-1.113/)

44. [↑](#cite_ref-maslej2024_44-0) Maslej, N., et al. (2024). "The AI Index 2024 Annual Report". Stanford HAI. [https://aiindex.stanford.edu/report/](https://aiindex.stanford.edu/report/)

45. [↑](#cite_ref-jiang2024_45-0) Jiang, A. Q., et al. (2024). "Mixtral of Experts". arXiv. [https://arxiv.org/abs/2401.04088](https://arxiv.org/abs/2401.04088)

46. [↑](#cite_ref-dao2022_46-0) Dao, T., et al. (2022). "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness". NeurIPS. [https://arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135)

47. [↑](#cite_ref-lan2020_47-0) Lan, Z., et al. (2020). "ALBERT: A Lite BERT for Self-supervised Learning of Language Representations". ICLR. [https://arxiv.org/abs/1909.11942](https://arxiv.org/abs/1909.11942)

48. [↑](#cite_ref-MultimodalWorkshop_48-0) MultimodalPretraining.github.io. "Workshop on Multimodal Pre-training". [https://multimodalpretraining.github.io/](https://multimodalpretraining.github.io/)

49. [↑](#cite_ref-ibrahim2024_49-0) Ibrahim, M., et al. (2024). "Simple and Scalable Strategies to Continually Pre-train Large Language Models". arXiv. [https://arxiv.org/abs/2403.08763](https://arxiv.org/abs/2403.08763)

50. [↑](#cite_ref-CMU_Lifelong_50-0) Mehta, S. V. (2023). "Efficient Lifelong Learning in Deep Neural Networks". Carnegie Mellon University. [https://kilthub.cmu.edu/articles/thesis/24992883](https://kilthub.cmu.edu/articles/thesis/24992883)

51. [↑](#cite_ref-PDFTranslate_51-0) PDFTranslate.ai. "Ilya Sutskever: LLM Pre-training as we know it will end". [https://pdftranslate.ai/blog/llm-end-of-era](https://pdftranslate.ai/blog/llm-end-of-era)

52. [↑](#cite_ref-bai2022_52-0) Bai, Y., et al. (2022). "Constitutional AI: Harmlessness from AI Feedback". Anthropic. [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

53. [↑](#cite_ref-rafailov2023_53-0) Rafailov, R., et al. (2023). "Direct Preference Optimization: Your Language Model is Secretly a Reward Model". NeurIPS. [https://arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290)

## External links

- [Hugging Face Model Hub](https://huggingface.co/models) - Repository of pre-trained models

- [BERT GitHub Repository](https://github.com/google-research/bert) - Original BERT implementation

- [GPT-3 Applications](https://openai.com/research/gpt-3-apps) - Examples of GPT-3 use cases

- [TensorFlow Hub](https://www.tensorflow.org/hub) - Pre-trained model repository

- [PyTorch Hub](https://pytorch.org/hub/) - Pre-trained models for PyTorch

- [Common Crawl](https://commoncrawl.org/) - Large-scale web crawl data

- [ImageNet](https://www.image-net.org/) - Visual database for object recognition