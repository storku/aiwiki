---
title: "Synthetic Data"
slug: "synthetic_data"
categories:
  - "Machine_learning_terms"
  - "Artificial_intelligence"
  - "Terms"
  - "Data_science"
---

**Synthetic data** refers to artificially generated data that is not produced by real-world events or direct measurements, but instead created algorithmically or through [generative models](/index.php?title=Generative_model&action=edit&redlink=1) to mimic the statistical properties, structure, and patterns of real-world datasets. In the context of [artificial intelligence](/wiki/artificial_intelligence) and [machine learning](/wiki/machine_learning), synthetic data has become a critical resource for training, validating, and testing models, particularly when real data is scarce, expensive, privacy-sensitive, or biased.[&#91;1&#93;](#cite_note-aws-synth-1)[&#91;2&#93;](#cite_note-ibm-synth-2)

The use of synthetic data in AI has grown rapidly since the early 2020s, driven by advances in [generative adversarial networks](/wiki/generative_adversarial_network_gan) (GANs), [large language models](/wiki/large_language_model) (LLMs), [diffusion models](/wiki/diffusion_model), and simulation engines. Gartner predicted that by 2024, 60% of data used for AI development would be synthetic (up from 1% in 2021), and further projected that by 2030, synthetic data would overshadow real data across a wide range of AI models.[&#91;3&#93;](#cite_note-gartner-2024-3) The global synthetic data generation market was valued at approximately $218 million to $351 million in 2023, with projections estimating it will reach between $1.8 billion and $2.3 billion by 2030.[&#91;4&#93;](#cite_note-fortune-market-4)[&#91;5&#93;](#cite_note-grandview-market-5)

## Definition and core concepts

Synthetic data is any data that has been generated through a computational process rather than collected from real-world observations. Despite being artificially produced, well-crafted synthetic data retains the underlying statistical properties, correlations, and distributions of the original data it is designed to represent. This allows synthetic datasets to supplement or even replace real datasets for the purposes of training [neural networks](/wiki/neural_network), testing software, validating models, and conducting research.[&#91;1&#93;](#cite_note-aws-synth-1)

Three key properties define high-quality synthetic data:

| Property | Description |
| --- | --- |
| **Fidelity** | The degree to which the synthetic data preserves the statistical characteristics, distributions, and correlations of the original real data. |
| **Utility** | The usefulness of synthetic data for downstream tasks such as model training, analysis, and testing; ideally, models trained on synthetic data should perform comparably to those trained on real data. |
| **Privacy** | The extent to which the synthetic data prevents re-identification of individuals from the original dataset, measured by metrics such as membership inference risk and attribute disclosure risk. |

Synthetic data can be broadly categorized by its relationship to real data:

- **Fully synthetic data**: The entire dataset is generated artificially, with no real records included. Every data point is created by a generative model or algorithm.
- **Partially synthetic data**: Only certain sensitive or missing values within a real dataset are replaced with synthetic values, while non-sensitive records remain unchanged.
- **Hybrid data**: A blend of real and synthetic data points, where synthetic examples are generated to augment the real dataset (often to address class imbalance, rare events, or underrepresented populations).

## History and origins

### Early foundations (1930s to 1980s)

The concept of generating artificial data has roots extending back to the earliest days of computing and even earlier. Research into the synthesis of audio and voice can be traced to the 1930s and before, driven by developments in telephone and audio recording technologies.[&#91;6&#93;](#cite_note-wikipedia-synth-6) With the advent of modern computing in the 1970s, researchers began generating synthetic data out of necessity: restricted processing capacity, challenges in collecting large volumes of data, and privacy concerns all motivated the creation of artificial datasets for algorithm development and testing.

In 1987, Carnegie Mellon University's Navlab autonomous vehicle project used 1,200 synthetically generated road images as part of its approach to training perception systems, representing one of the earliest documented uses of synthetic data for training [computer vision](/wiki/computer_vision) models.[&#91;6&#93;](#cite_note-wikipedia-synth-6)

### Statistical disclosure and Rubin's contribution (1993)

The formal introduction of synthetic data as a statistical concept is widely attributed to **Donald B. Rubin**, who published "Satisfying Confidentiality Constraints Through the Use of Synthetic Multiply-Imputed Micro-data" in the *Journal of Official Statistics* in 1993.[&#91;7&#93;](#cite_note-rubin-1993-7) Rubin's work built on his earlier pioneering research on [multiple imputation](/index.php?title=Multiple_imputation&action=edit&redlink=1) for missing data, which he had developed in the 1970s. His key insight was that the same statistical techniques used to fill in missing values could be applied to generate entirely new, privacy-preserving datasets that retained the statistical properties of original confidential records.

Ten years after Rubin's initial proposal, Raghunathan, Reiter, and Rubin (2003) and Reiter (2003) developed the full methodology for making valid statistical inferences based on fully and partially synthetic data, respectively.[&#91;8&#93;](#cite_note-30years-synth-8) This work laid the groundwork for the widespread adoption of synthetic data in government statistics and census data protection.

### The deep learning era (2014 to present)

The introduction of [Generative Adversarial Networks](/wiki/generative_adversarial_network_gan) (GANs) by **Ian Goodfellow** and colleagues in 2014 marked a watershed moment for synthetic data generation.[&#91;9&#93;](#cite_note-goodfellow-gan-9) GANs provided a powerful new mechanism for generating realistic synthetic images, tabular data, and other data modalities, dramatically expanding the scope and quality of what synthetic data could achieve. Subsequent developments in [variational autoencoders](/index.php?title=Variational_autoencoder&action=edit&redlink=1) (VAEs), [diffusion models](/wiki/diffusion_model), and [transformer](/wiki/transformer)-based generative models further accelerated the field.

The rise of large language models beginning with [GPT-3](/index.php?title=GPT-3&action=edit&redlink=1) (2020) and continuing through [GPT-4](/wiki/gpt-4), [Claude](/wiki/CLAUDE), [Llama](/index.php?title=Llama_(language_model)&action=edit&redlink=1), and [Mixtral](/index.php?title=Mixtral&action=edit&redlink=1) opened an entirely new chapter in synthetic data generation, enabling the creation of high-quality synthetic text, code, instructions, and reasoning traces at massive scale. Microsoft's "Textbooks Are All You Need" paper in 2023 demonstrated that models trained primarily on synthetic data could match or exceed larger models trained on organic data, fundamentally reshaping assumptions about training data requirements.[&#91;10&#93;](#cite_note-textbooks-phi1-10)

### Key historical milestones

| Year | Milestone |
| --- | --- |
| 1930s | Early research into audio and voice synthesis begins. |
| 1977 | Donald Rubin develops the concept of multiple imputation for missing data at the U.S. Census Bureau. |
| 1987 | Carnegie Mellon's Navlab uses 1,200 synthetic road images for autonomous vehicle training. |
| 1993 | Rubin publishes the foundational paper on synthetic data for statistical disclosure limitation. |
| 2003 | Raghunathan, Reiter, and Rubin develop full inference methodology for synthetic datasets. |
| 2014 | Ian Goodfellow introduces Generative Adversarial Networks (GANs). |
| 2016 | DeepMind's [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1) defeats world champion Lee Sedol using self-play generated training data. |
| 2017 | AlphaGo Zero achieves superhuman performance trained entirely through self-play, with no human data. |
| 2020 | GPT-3 enables large-scale synthetic text generation. |
| 2021 | NVIDIA announces Omniverse Replicator for synthetic data generation in simulation. |
| 2023 | Microsoft publishes "Textbooks Are All You Need," training Phi-1 primarily on synthetic data. Stanford releases Alpaca, trained on 52K synthetic instructions. |
| 2024 | Hugging Face releases Cosmopedia (25 billion synthetic tokens). Shumailov et al. publish the model collapse paper in *Nature*. Microsoft releases Phi-4, trained on over 400 billion synthetic tokens. |
| 2025 | DeepSeek-R1 distilled models demonstrate the power of synthetic reasoning traces for training smaller models. NVIDIA releases Nemotron synthetic data pipeline. |

## Types of synthetic data

Synthetic data spans virtually every data modality used in AI and machine learning. The choice of generation method depends on the data type, the intended application, and the quality requirements.

### Synthetic text data

Synthetic text data is the most widely used form in the LLM era. It includes synthetically generated instructions, conversations, reasoning chains, code, textbook-like explanations, and question-answer pairs. Modern LLMs such as [GPT-4](/wiki/gpt-4), [Claude](/wiki/CLAUDE), [Llama](/index.php?title=Llama_(language_model)&action=edit&redlink=1), and Mixtral can generate vast quantities of text data that is used for pre-training, [fine-tuning](/wiki/fine_tuning), and evaluation of downstream models.

Key examples of synthetic text datasets include:

| Dataset | Creator | Size | Description |
| --- | --- | --- | --- |
| Alpaca | Stanford | 52K instructions | Generated using OpenAI's text-davinci-003 via the self-instruct method. |
| Cosmopedia | Hugging Face | 25B tokens (30M files) | Synthetic textbooks, blog posts, stories, and WikiHow articles generated by Mixtral-8x7B. |
| Phi-1 CodeTextbook | Microsoft Research | ~7B tokens | Combination of synthetic textbooks generated by GPT-3.5 and filtered public Python code. |
| Phi-4 training data | Microsoft Research | ~400B tokens (50+ datasets) | Multi-source synthetic data using multi-agent prompting, self-revision, and instruction reversal. |
| Nemotron SFT data | NVIDIA | 60B tokens | Synthetic data for supervised [fine-tuning](/wiki/fine_tuning) across math, code, and reasoning domains. |

### Synthetic image data

Synthetic images are generated for training [computer vision](/wiki/computer_vision) models, including object detection, image classification, segmentation, and autonomous driving perception systems. Generation methods include:

- **3D rendering engines**: Platforms such as NVIDIA Omniverse, Unity, and Unreal Engine can render photorealistic scenes with precise ground truth annotations (bounding boxes, depth maps, segmentation masks) that are difficult or impossible for humans to label manually.
- **GANs**: [Generative adversarial networks](/wiki/generative_adversarial_network_gan) such as StyleGAN can produce high-fidelity synthetic faces, medical images, and other visual data.
- **Diffusion models**: Text-to-image models such as [DALL-E](/index.php?title=DALL-E&action=edit&redlink=1), [Stable Diffusion](/index.php?title=Stable_Diffusion&action=edit&redlink=1), and [Imagen](/index.php?title=Imagen&action=edit&redlink=1) generate detailed images from text prompts and are increasingly used to create training data for downstream vision tasks.

Synthetic image data is especially valuable for autonomous driving, where it enables the generation of rare or dangerous scenarios (pedestrians in fog, unusual road configurations, adverse weather) that cannot be safely or cost-effectively captured in the real world.[&#91;11&#93;](#cite_note-nvidia-replicator-11)

### Synthetic tabular data

Tabular data (structured records with rows and columns) is commonly synthesized for privacy preservation, data sharing, and addressing class imbalance. Generation methods include:

| Method | Description | Strengths |
| --- | --- | --- |
| **CTGAN** | Conditional Tabular GAN; uses mode-specific normalization and conditional generation for mixed data types. | Handles mixed continuous and categorical data well. |
| **TVAE** | Tabular Variational Autoencoder; applies VAE architecture to tabular data generation. | Strong for continuous data; available in Synthetic Data Vault (SDV). |
| **SMOTE** | Synthetic Minority Over-sampling Technique; generates synthetic samples by interpolating between minority class examples. | Simple, effective for class imbalance; does not require a generative model. |
| **Synthpop** | Regression-based sequential synthesis using classification and regression trees. | Interpretable; well-suited for survey and census data. |
| **LLM-based** | Uses large language models to generate tabular records from natural language descriptions or schema prompts. | Captures complex dependencies; outperforms CTGAN in some evaluations. |
| **Copulas** | Statistical models that capture dependencies between variables using copula functions. | Mathematically rigorous; preserves marginal distributions. |

Research has shown that LLM-based approaches can outperform CTGAN by generating synthetic data that more closely matches real data distributions, as measured by lower Wasserstein distances and higher F1 and R-squared scores on downstream tasks.[&#91;12&#93;](#cite_note-betterdata-tabular-12)

### Synthetic audio and speech data

Synthetic audio data includes artificially generated speech, music, and environmental sounds. Text-to-speech (TTS) systems can generate thousands of command variations with consistent speaker characteristics, eliminating fatigue and variability associated with human voice collection while addressing privacy concerns inherent in storing human voice recordings.[&#91;13&#93;](#cite_note-synth-tts-13)

Key findings from research on synthetic speech data:

- Classifiers trained on synthetic speech data achieve top-tier accuracy, exceeding 99% on English commands and approaching 98% on Chinese commands.
- Increasing speaker and text diversity significantly enhances synthesis quality and robustness.
- Cleaner training data with minimal noise further improves TTS model performance.
- Standard speaking styles facilitate more effective model learning compared to highly expressive or variable styles.

Recent research has investigated the feasibility of training TTS models with purely synthetic data, finding that it is viable under certain conditions, particularly when synthetic data is diverse and of high quality.[&#91;13&#93;](#cite_note-synth-tts-13)

## Generation methods

### LLM-based generation

LLM-based synthetic data generation has become the dominant approach since 2023. The process typically involves feeding a seed dataset, schema, or set of instructions into a pre-trained [transformer](/wiki/transformer)-based model (such as [GPT-4](/wiki/gpt-4), [Claude](/wiki/CLAUDE), [Llama](/index.php?title=Llama_(language_model)&action=edit&redlink=1), or Mixtral) and prompting it to generate new examples that follow specified patterns, formats, or quality criteria.[&#91;14&#93;](#cite_note-confident-synth-14)

Common LLM-based generation techniques include:

- **Self-Instruct**: Introduced by Wang et al. (2022), this method prompts an LLM with a small seed set of human-written instructions, then iteratively generates new instructions, classifies them, and produces input-output pairs. Stanford's Alpaca model used this approach to generate 52K instruction-following demonstrations from OpenAI's text-davinci-003.[&#91;15&#93;](#cite_note-alpaca-15)
- **Evol-Instruct**: Used by WizardLM and WizardCoder, this technique evolves existing instructions into more complex variants through iterative prompting, creating progressively harder training examples.
- **Multi-agent prompting**: Multiple LLM instances take on different roles (e.g., questioner, responder, critic) to generate diverse, high-quality data through simulated dialogue. Microsoft's Phi-4 used this approach extensively.[&#91;16&#93;](#cite_note-phi4-report-16)
- **Self-revision workflows**: An LLM generates an initial output, then critiques and revises it in subsequent passes to improve quality and correctness.
- **Instruction reversal**: Given an answer or solution, the LLM is prompted to generate a corresponding question or instruction, producing instruction-response pairs from existing content.
- **Back-translation**: Text is translated to another language and then back, producing paraphrased versions that add diversity to training data.

NVIDIA's Nemotron-4 340B family exemplifies the industrial-scale LLM-based synthetic data pipeline. It consists of a base model, an instruct model for generating diverse synthetic data, and a reward model for filtering high-quality responses. When paired with Llama 3.1 405B, this pipeline enables enterprises to build domain-specific custom models from synthetic data.[&#91;17&#93;](#cite_note-nvidia-nemotron-17)

### GAN-based generation

[Generative Adversarial Networks](/wiki/generative_adversarial_network_gan) use a two-network architecture consisting of a generator and a discriminator. The generator creates synthetic data samples, while the discriminator attempts to distinguish between real and synthetic data. Through adversarial training, the generator learns to produce increasingly realistic data that can fool the discriminator.[&#91;9&#93;](#cite_note-goodfellow-gan-9)

Key GAN variants for synthetic data include:

| GAN Variant | Application | Key Innovation |
| --- | --- | --- |
| **DCGAN** | Image generation | Uses deep convolutional layers for stable training. |
| **StyleGAN / StyleGAN2** | High-resolution face synthesis | Style-based generator with progressive growing; produces photorealistic faces. |
| **CTGAN** | Tabular data | Mode-specific normalization for mixed data types; conditional generation. |
| **CycleGAN** | Image-to-image translation | Unpaired image translation (e.g., horse to zebra, summer to winter). |
| **MedGAN** | Medical records | Generates realistic patient records for healthcare applications. |
| **TimeGAN** | Time-series data | Combines autoencoder and GAN frameworks for temporal data. |

While GANs dominated synthetic image generation before 2022, large [diffusion models](/wiki/diffusion_model) such as DALL-E, Imagen, and Stable Diffusion (with parameters on the scale of billions) have since surpassed GANs in image quality and controllability. The state-of-the-art GAN model before diffusion models had approximately 75 million parameters, while diffusion-based models operate at orders of magnitude larger scale.[&#91;18&#93;](#cite_note-synth-image-diffusion-18)

### Simulation-based generation

Simulation-based synthetic data generation creates data by modeling physical, biological, or social processes in a virtual environment. This approach is especially important for robotics, autonomous driving, and scientific research.

**NVIDIA Omniverse Replicator** is a leading platform for simulation-based synthetic data generation. It produces physically simulated synthetic data for training deep [neural networks](/wiki/neural_network), enabling developers to bootstrap AI models, fill real-world data gaps, and label ground truth in ways humans cannot. NVIDIA introduced two primary applications: NVIDIA DRIVE Sim for autonomous vehicle digital twins and NVIDIA Isaac Sim for manipulation robot digital twins.[&#91;11&#93;](#cite_note-nvidia-replicator-11)

Key advantages of simulation-based synthetic data:

- **Rare scenario coverage**: Simulations can generate scenarios that are dangerous, rare, or impossible to capture in the real world, such as near-collision events, extreme weather driving, or zero-gravity robotics.
- **Perfect ground truth**: Every element in a simulation has known properties, enabling automatic generation of labels such as depth maps, velocity vectors, segmentation masks, and occluded object positions.
- **Scalability**: Once a simulation environment is built, millions of diverse data samples can be generated at relatively low marginal cost.
- **Controllability**: Researchers can systematically vary lighting, weather, object placement, sensor noise, and other parameters to study model robustness.

NVIDIA's Cosmos World Foundation Models further extend this approach by generating synthetic video environments for physical AI training, scaling across weather, lighting, and terrain conditions.[&#91;11&#93;](#cite_note-nvidia-replicator-11)

Agent-based simulation represents a complementary approach. Instead of rendering photorealistic scenes, agent-based methods create simulated agents (e.g., people, cars, businesses) with defined behavioral rules. Through interactions, these agents generate emergent data patterns useful for training models on complex, dynamic systems.[&#91;19&#93;](#cite_note-ml-digest-synth-19)

### Rule-based and statistical generation

Rule-based methods remain valuable when the underlying data distribution is well-understood and can be expressed through mathematical models. These include:

- **Parametric models**: Data is generated by sampling from known statistical distributions (Gaussian, Poisson, uniform) with parameters estimated from real data.
- **Random sampling and Monte Carlo methods**: Random samples are drawn according to specified probability distributions to create synthetic datasets.
- **Linear interpolation (SMOTE)**: The Synthetic Minority Over-sampling Technique creates new minority-class examples by interpolating between existing minority-class data points in feature space.
- **Template-based generation**: Structured templates with variable slots are filled according to rules or distributions, commonly used for generating synthetic forms, invoices, or structured documents.
- **Probabilistic graphical models**: Bayesian networks and Markov models capture dependencies between variables and sample new records accordingly.

Rule-based methods offer interpretability and controllability, though they are limited in their ability to capture complex, nonlinear relationships that characterize many real-world datasets.[&#91;19&#93;](#cite_note-ml-digest-synth-19)

### Variational Autoencoder (VAE) methods

[Variational autoencoders](/index.php?title=Variational_autoencoder&action=edit&redlink=1) learn a compressed latent representation of the training data and generate new samples by sampling from the learned latent space. VAEs are particularly effective for tabular data generation and medical data synthesis.

The Tab-VAE architecture extends standard VAEs with specialized sampling techniques for categorical variables at inference time, addressing the challenge that one-hot encoded categorical data dramatically expands the dimensionality of the feature space. The Contrastive Tabular VAE (CTVAE) integrates conditional VAEs with contrastive learning to generate high-quality synthetic samples that capture distributions of both minority and majority classes, and can be combined with SMOTE variants for enhanced performance.[&#91;20&#93;](#cite_note-vae-tabular-20)

TVAE (Tabular VAE) is available as part of the Synthetic Data Vault (SDV), an open-source ecosystem for synthetic data generation, evaluation, and deployment.[&#91;20&#93;](#cite_note-vae-tabular-20)

## Self-play and self-improvement

Self-play is a form of synthetic data generation in which an AI system generates its own training data by playing against itself or exploring a problem space iteratively. This approach has produced some of the most striking demonstrations of AI capability.

### AlphaGo and AlphaGo Zero

Google [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)'s [AlphaGo](/index.php?title=AlphaGo&action=edit&redlink=1) was initially trained to mimic human play by matching the moves of expert players from a database of approximately 30 million moves. Once it achieved a baseline level of proficiency, it was trained further through self-play, using [reinforcement learning](/wiki/reinforcement_learning) to improve by playing large numbers of games against other instances of itself.[&#91;21&#93;](#cite_note-alphago-wiki-21)

AlphaGo Zero, introduced in 2017, took this concept to its logical extreme. It started from a randomly initialized [neural network](/wiki/neural_network) with no knowledge of Go whatsoever and learned entirely through self-play combined with Monte Carlo tree search. In each iteration, the network was updated to better predict moves and game outcomes, creating a virtuous cycle of ever-stronger play and ever-higher-quality training data.[&#91;22&#93;](#cite_note-alphago-zero-nature-22)

The results were dramatic: after just three days of self-play training, AlphaGo Zero decisively defeated the version of AlphaGo that had beaten 18-time world champion Lee Sedol, winning 100 games to 0. The synthetic data generated through self-play contained more "teachable moments" than data derived from human expert play, because the self-play process explored novel strategies that human players had never discovered.[&#91;23&#93;](#cite_note-alphago-zero-blog-23)

### AlphaZero

**AlphaZero** generalized the AlphaGo Zero approach to chess, shogi, and Go simultaneously. Published in *Science* in 2018 by Silver et al., AlphaZero achieved superhuman performance in all three games through self-play alone, with no domain-specific knowledge beyond the rules of each game. This demonstrated that self-play synthetic data generation could produce superhuman expertise across multiple domains.[&#91;24&#93;](#cite_note-alphazero-science-24)

### Self-play in language models

The self-play paradigm has been extended to language models through techniques such as:

- **Reinforcement Learning with Verifiable Rewards (RLVR)**: Models generate solutions to problems with verifiable answers (e.g., math, code), and correctness labels serve as reward signals. DeepSeek-R1 and OpenAI's o1 model both leverage this approach, where the model's own generated reasoning traces serve as synthetic training data.[&#91;25&#93;](#cite_note-rl-renaissance-25)
- **Self-improvement loops**: A model generates candidate solutions, evaluates them (or has them evaluated by a reward model), and trains on the highest-quality outputs, iteratively improving its own capabilities.
- **Constitutional AI**: [Anthropic](/wiki/anthropic)'s approach uses a model to evaluate and revise its own outputs based on a set of principles, effectively generating synthetic preference data for [reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF) training.[&#91;26&#93;](#cite_note-rlhf-wiki-26)

## Distillation as synthetic data

[Knowledge distillation](/wiki/knowledge_distillation) can be understood as a form of synthetic data generation in which a larger "teacher" model produces synthetic training signals (soft labels, reasoning traces, or complete outputs) that are used to train a smaller "student" model. This perspective has become increasingly important with the rise of distilled language models.

### DeepSeek-R1 distilled models

[DeepSeek](/wiki/deepseek)'s R1 model represents a landmark example of distillation-as-synthetic-data. The approach involves using the DeepSeek-R1 teacher model to generate high-quality synthetic reasoning data, including step-by-step chain-of-thought traces, which is then used to [fine-tune](/wiki/fine_tuning) smaller student models.[&#91;27&#93;](#cite_note-deepseek-r1-distill-27)

DeepSeek open-sourced distilled checkpoints at multiple scales:

| Distilled Model | Base Architecture | Parameters | Notable Performance |
| --- | --- | --- | --- |
| DeepSeek-R1-Distill-Qwen-1.5B | Qwen2.5 | 1.5B | Competitive with much larger non-reasoning models. |
| DeepSeek-R1-Distill-Qwen-7B | Qwen2.5 | 7B | Strong benchmark performance across reasoning tasks. |
| DeepSeek-R1-Distill-Llama-8B | Llama3 | 8B | Reasoning capability transferred from R1 teacher. |
| DeepSeek-R1-Distill-Qwen-14B | Qwen2.5 | 14B | Exceeds many larger models on STEM benchmarks. |
| DeepSeek-R1-Distill-Qwen-32B | Qwen2.5 | 32B | Outperforms OpenAI o1-mini across various benchmarks. |
| DeepSeek-R1-Distill-Llama-70B | Llama3 | 70B | State-of-the-art for dense distilled reasoning models. |

A key finding was that the DeepSeek-R1-Distill-Qwen-32B model outperformed OpenAI's o1-mini across various benchmarks, establishing new state-of-the-art results for dense models. The synthetic reasoning data generated by DeepSeek-R1 was found in some cases to outperform data produced by human experts, as it revealed explicit step-by-step chains of thought that human-authored training data typically does not include.[&#91;27&#93;](#cite_note-deepseek-r1-distill-27)

### Traditional knowledge distillation

The broader concept of [knowledge distillation](/wiki/knowledge_distillation) generates synthetic training signals through the teacher model's soft probability distributions over output classes. These "soft targets" contain what Geoffrey Hinton termed "dark knowledge": information about inter-class similarities and relationships that standard one-hot labels cannot convey. The student model learns not just the correct answer, but also the teacher's uncertainty and the relative similarities between different outputs.[&#91;28&#93;](#cite_note-hinton-distill-28)

## Use in training large language models

### Microsoft Phi model family

The Microsoft Phi model family represents the most prominent and systematic exploration of synthetic data for LLM training. Each successive generation has expanded the role of synthetic data in the training pipeline.

#### Phi-1: Textbooks Are All You Need (2023)

The paper "Textbooks Are All You Need" by Suriya Gunasekar and 18 co-authors introduced Phi-1, a 1.3-billion-parameter [transformer](/wiki/transformer) model for code generation. Phi-1 was trained for four days on eight A100 GPUs using a carefully curated combination of "textbook quality" data from the web (6 billion tokens) and synthetically generated textbooks and exercises produced by GPT-3.5 (1 billion tokens).[&#91;10&#93;](#cite_note-textbooks-phi1-10)

Despite its small scale, Phi-1 achieved remarkable results:
- 50.6% pass@1 accuracy on HumanEval
- 55.5% pass@1 accuracy on MBPP

A smaller 350-million-parameter variant (Phi-1-small), trained with the same synthetic data pipeline, still achieved 45% on HumanEval, demonstrating that high-quality synthetic data could compensate for limited model size.[&#91;10&#93;](#cite_note-textbooks-phi1-10)

#### Phi-1.5 and Phi-2

Phi-1.5 extended the synthetic data approach from code to common-sense reasoning and language understanding, using newly created synthetic "textbook-like" data. Training required only two weeks on eight A100 GPUs, with compute costs around $1,000 per week of GPU rental, making it accessible to individual researchers.[&#91;29&#93;](#cite_note-phi15-report-29)

Phi-2, a 2.7-billion-parameter model, was trained on 250 billion tokens consisting of NLP synthetic data created by Azure OpenAI GPT-3.5 and filtered web data from Falcon RefinedWeb and SlimPajama, with quality assessed by GPT-4.[&#91;30&#93;](#cite_note-phi2-blog-30)

#### Phi-4 (2024)

Phi-4 represents the most ambitious application of synthetic data in the Phi family. This 14-billion-parameter model was trained using a recipe "centrally focused on data quality," with synthetic data constituting the bulk of the training corpus. Microsoft used no fewer than 50 synthetic datasets containing approximately 400 billion tokens, generated through multi-agent prompting, self-revision workflows, and instruction reversal.[&#91;16&#93;](#cite_note-phi4-report-16)

A critical finding from Phi-4 was that it substantially surpassed its teacher model (GPT-4) on STEM-focused question-answering capabilities. This provided evidence that Microsoft's synthetic data generation and post-training techniques went beyond simple distillation, producing a model that exceeded the capabilities of the model used to generate its training data.[&#91;16&#93;](#cite_note-phi4-report-16)

### Cosmopedia and open synthetic datasets

Hugging Face's Cosmopedia project, released in early 2024, represents the largest openly available synthetic dataset. It contains over 30 million files and 25 billion tokens of synthetic textbooks, blog posts, stories, and WikiHow-style articles generated by Mixtral-8x7B-Instruct-v0.1.[&#91;31&#93;](#cite_note-cosmopedia-31)

Cosmopedia was developed explicitly to reproduce and openly study the training data approach used by Microsoft's Phi-1.5. The dataset, generation code, and a 1-billion-parameter model trained on it (cosmo-1b, using the Llama2 architecture) were all released publicly. Cosmo-1b outperformed TinyLlama 1.1B on ARC-easy, ARC-challenge, OpenBookQA, and MMLU benchmarks.[&#91;31&#93;](#cite_note-cosmopedia-31)

Generation of Cosmopedia required over 10,000 H100 GPU hours and involved meticulous prompt engineering. Maintaining diversity proved to be a significant challenge at scale, making it essential to curate diverse prompts covering a wide range of topics to minimize duplicate outputs.[&#91;31&#93;](#cite_note-cosmopedia-31)

### Stanford Alpaca and self-instruct

Stanford's Alpaca (2023) demonstrated that instruction-following capabilities could be distilled from a proprietary model into an open model using synthetic data. The team generated 52,000 instruction-following demonstrations by prompting OpenAI's text-davinci-003 with 175 human-written seed examples in the style of the Self-Instruct framework developed by Wang et al.[&#91;15&#93;](#cite_note-alpaca-15)

This approach was influential in spawning a wave of open-source instruction-tuned models, including Vicuna, Koala, and others, all leveraging synthetic data to replicate capabilities of larger proprietary models at lower cost.

### NVIDIA Nemotron pipeline

NVIDIA's Nemotron-4 340B family provides an industrial-grade synthetic data generation pipeline. The system uses three interconnected components: a base model, an instruct model that generates diverse synthetic data mimicking real-world characteristics, and a reward model that filters for high-quality responses. Supervised [fine-tuning](/wiki/fine_tuning) used 60 billion tokens of NVIDIA-generated synthetic data, including nearly 30 million samples of high-quality data focused on math, code, instruction following, safety, chat, and reasoning capabilities.[&#91;17&#93;](#cite_note-nvidia-nemotron-17)

## Benefits

### Data augmentation

Synthetic data provides a powerful mechanism for [data augmentation](/wiki/data_augmentation), expanding datasets to improve model performance. Key augmentation benefits include:

- **Addressing data scarcity**: In domains where real data is limited (rare diseases, uncommon languages, niche industrial applications), synthetic data can fill critical gaps.
- **Covering edge cases**: Synthetic generation can create examples of rare or extreme scenarios (near-collision events for autonomous vehicles, unusual medical conditions, edge-case code patterns) that are underrepresented in real datasets.
- **Increasing dataset size**: The marginal cost of generating additional synthetic samples is typically much lower than collecting, cleaning, and labeling real data.
- **Balancing class distributions**: Synthetic oversampling of minority classes (via SMOTE or generative methods) improves model performance on imbalanced datasets.[&#91;32&#93;](#cite_note-endava-synth-32)

### Privacy preservation

Synthetic data offers a pathway to sharing and analyzing sensitive data without exposing individual records. Because synthetic data points are algorithmically generated rather than drawn directly from real individuals, well-constructed synthetic datasets can enable data sharing across organizational boundaries while reducing re-identification risk.

Key privacy-preserving applications include:

- Sharing patient records for medical research without exposing real health information.
- Enabling financial institutions to collaborate on fraud detection models without sharing customer data.
- Providing test data for software development that mimics production data without containing real personal information.
- Supporting government statistical releases while protecting census respondent confidentiality (Rubin's original motivation).[&#91;7&#93;](#cite_note-rubin-1993-7)

Organizations increasingly combine synthetic data with additional privacy-enhancing technologies such as [differential privacy](/index.php?title=Differential_privacy&action=edit&redlink=1), [federated learning](/index.php?title=Federated_learning&action=edit&redlink=1), and homomorphic encryption to strengthen protections.[&#91;33&#93;](#cite_note-gdpr-synth-33)

### Bias reduction

Synthetic data can help address bias in real-world datasets by generating examples that represent underrepresented or marginalized groups. By augmenting training data with synthetic examples from underrepresented populations, researchers can produce models that make fairer and more equitable predictions across demographic groups.[&#91;34&#93;](#cite_note-bluegen-bias-34)

Specific bias-reduction strategies include:

- Generating balanced synthetic samples across demographic categories (gender, age, ethnicity) to counteract historical biases in real data.
- Creating synthetic scenarios that represent minority viewpoints or uncommon patterns that are systematically underrepresented in organically collected datasets.
- Removing or obscuring protected attributes in synthetic data to test for and mitigate proxy discrimination.

### Cost savings

Gathering large amounts of real data can be prohibitively costly and slow. Synthetic data generation reduces costs across multiple dimensions:

- **Labeling costs**: Synthetic data generated from simulations or generative models comes with automatic labels, eliminating the need for expensive human annotation.
- **Collection costs**: Synthetic data does not require physical data collection campaigns, sensor deployments, or user surveys.
- **Scaling costs**: Once a synthetic data generation pipeline is established, the marginal cost of generating additional data is primarily computational, and scales more favorably than real data collection.
- **Time savings**: Synthetic data can be generated on demand, often in hours or days, compared to the weeks or months required for real data collection campaigns.

Microsoft's Phi-1 demonstrated these cost benefits concretely: training a competitive code generation model required only eight A100 GPUs for four days, with GPU rental costs around $1,000 per week.[&#91;10&#93;](#cite_note-textbooks-phi1-10)

## Risks and challenges

### Model collapse

Model collapse is the phenomenon in which training a generative model on data produced by other generative models (or by itself) leads to a progressive degradation of the model's ability to represent the original data distribution. The term was popularized by a landmark 2024 paper in *Nature* by Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Nicolas Papernot, Ross Anderson, and Yarin Gal.[&#91;35&#93;](#cite_note-nature-collapse-35)

The paper identified two stages of collapse:

1. **Early model collapse**: The model loses information from the tails (extremes) of the true data distribution. Rare patterns, unusual examples, and minority cases are the first to disappear.
2. **Late model collapse**: The data distribution converges so severely that it bears nearly no resemblance to the original data, resulting in total homogenization of outputs.

The researchers demonstrated this effect across multiple model architectures, including LLMs, [variational autoencoders](/index.php?title=Variational_autoencoder&action=edit&redlink=1), and Gaussian mixture models. In one illustrative test, text about medieval architecture degraded through successive generations of recursive training until, by the ninth generation, the output consisted primarily of a list of jackrabbits.[&#91;35&#93;](#cite_note-nature-collapse-35)

Critically, research has also shown that model collapse can be avoided if synthetic data accumulates alongside real data rather than replacing it entirely. Maintaining a supply of fresh, high-quality real data in each training round prevents the compounding loss of distributional information.[&#91;36&#93;](#cite_note-arxiv-accumulate-36)

### Hallucination amplification

Using synthetic data for training can amplify the tendency of models to produce hallucinations (confident but incorrect outputs). Several mechanisms contribute to this risk:

- **Echo chambers**: When an LLM generates synthetic training data and another LLM (or the same model) is trained on it, errors in the generated data can be reinforced rather than corrected, creating a self-reinforcing cycle of misinformation.[&#91;37&#93;](#cite_note-hallucination-survey-37)
- **New knowledge problem**: Research has found that fine-tuning LLMs on examples containing knowledge not present in the model's pre-training data causes the model to learn those examples more slowly, but once learned, increases the model's overall tendency to hallucinate.
- **Confidence miscalibration**: Models trained on synthetic data may produce outputs that are fluent and confident but factually incorrect, because the synthetic training data itself was generated by a model optimizing for plausibility rather than accuracy.
- **Benchmark gaming**: Next-token prediction objectives reward outputs that look like plausible human text rather than outputs that accurately convey uncertainty. Benchmarks typically penalize abstention ("I don't know"), and even [RLHF](/wiki/reinforcement_learning_from_human_feedback) can amplify bias when human feedback favors long, detailed answers over merely correct ones.[&#91;37&#93;](#cite_note-hallucination-survey-37)

### Homogenization and diversity loss

Training on synthetic data can lead to a reduction in the lexical, syntactic, and semantic diversity of model outputs. Over successive generations of training on AI-generated content, outputs increasingly converge toward a narrow set of patterns, losing the variety and richness characteristic of human-generated data.[&#91;38&#93;](#cite_note-transparency-coalition-38)

This homogenization has implications beyond individual model quality:

- **Ecosystem effects**: As more models are trained on synthetic data generated by other models, the collective diversity of the AI ecosystem may decrease, with models producing increasingly similar outputs.
- **Cultural and linguistic narrowing**: Synthetic data tends to reflect the dominant patterns in its training data (often English-language, Western-centric content), potentially exacerbating the underrepresentation of minority languages, cultures, and perspectives.
- **Loss of long-tail knowledge**: Rare, specialized, or niche knowledge that appears infrequently in training data is disproportionately lost when models are trained on synthetic data, because generative models tend to underrepresent low-probability patterns.

### Quality assurance challenges

Ensuring the quality of synthetic data at scale presents significant practical challenges:

- **Verification difficulty**: It can be difficult to verify whether synthetic data accurately represents the intended distribution, especially for complex, high-dimensional data.
- **Mode dropping**: Generative models may fail to capture all modes of a multi-modal distribution, producing synthetic data that omits important subpopulations or patterns.
- **Evaluation metrics**: Standard evaluation metrics (FID for images, Wasserstein distance for distributions) may not capture all relevant aspects of data quality for downstream tasks.
- **Contamination risk**: When synthetic data is mixed with real data (e.g., on the internet), downstream models may unknowingly train on synthetic content, introducing recursive training effects similar to model collapse.

## Companies and platforms

Several companies specialize in synthetic data generation, offering platforms for creating privacy-preserving, high-fidelity synthetic datasets.

| Company | Founded | Headquarters | Focus | Key Products / Features |
| --- | --- | --- | --- | --- |
| **Gretel.ai** | 2019 | San Diego, CA, USA | Privacy-focused synthetic data for developers | Platform for generating synthetic datasets with built-in privacy guarantees; uses advanced [machine learning](/wiki/machine_learning) to create data with the same statistical properties as real data; raised $67.5 million in funding. |
| **MOSTLY AI** | 2017 | Vienna, Austria | Enterprise synthetic data generation | MOSTLY Generate platform produces "as-good-as-real, yet fully anonymous" data; raised $25 million in 2022 to expand commercialization in Europe and the US. |
| **Hazy** | 2017 | London, UK | Enterprise data re-engineering | Focuses on re-engineering enterprise data for privacy and compliance; used by banks and financial institutions. |
| **Tonic.ai** | 2018 | San Francisco, CA, USA | Developer-focused test data | Suite of tools for de-identifying and synthesizing realistic test data; ensures compliance with privacy regulations while maintaining utility for development and testing. |
| **Synthesis AI** | 2019 | San Francisco, CA, USA | Synthetic image and video data | Generates photorealistic synthetic images and videos for [computer vision](/wiki/computer_vision) training, particularly faces and human bodies. |
| **Datagen** (acquired by NVIDIA) | 2018 | Tel Aviv, Israel | Synthetic visual data | AI-powered simulation platform for generating synthetic visual data; acquired by NVIDIA in 2022 to enhance Omniverse. |
| **NVIDIA** | 1993 | Santa Clara, CA, USA | Simulation-based synthetic data | Omniverse Replicator for synthetic data generation in autonomous driving and robotics; Nemotron pipeline for LLM training data. |
| **Synthetaic** | 2019 | Delafield, WI, USA | Synthetic data for defense and geospatial | Generates synthetic satellite imagery and sensor data for defense and intelligence applications. |

The competitive landscape has expanded significantly as major cloud providers and AI companies have incorporated synthetic data capabilities into their platforms. Amazon Web Services, Google Cloud, and Microsoft Azure all offer tools and services for synthetic data generation within their respective AI/ML ecosystems.[&#91;2&#93;](#cite_note-ibm-synth-2)

## Regulatory context

### GDPR compliance

The relationship between synthetic data and the European Union's General Data Protection Regulation (GDPR) is nuanced and evolving. Under GDPR, what determines regulatory applicability is not how data was created, but whether any individual can be identified from it. This means synthetic data is not automatically exempt from GDPR requirements.[&#91;33&#93;](#cite_note-gdpr-synth-33)

Key regulatory considerations:

- **Anonymization standard**: GDPR considers data anonymized only if individuals cannot be identified "by any means reasonably likely to be used." Synthetic datasets often fail this test because [machine learning](/wiki/machine_learning) models can encode patterns from the original data that may allow indirect re-identification.[&#91;39&#93;](#cite_note-decentriq-gdpr-39)
- **EDPB opinion (2024)**: The European Data Protection Board clarified that even synthetic-looking outputs may fall under GDPR if they carry traits from real people or are derived from unprotected training data.[&#91;33&#93;](#cite_note-gdpr-synth-33)
- **Generation process matters**: If the synthetic data generation process uses personal data as input (e.g., training a GAN on real patient records), the generation process itself is subject to GDPR, even if the resulting synthetic data is deemed anonymous.
- **Differential privacy integration**: Organizations are increasingly combining synthetic data generation with differential privacy mechanisms to provide mathematically quantifiable privacy guarantees that align with regulatory expectations.

### Other regulatory frameworks

Beyond GDPR, synthetic data intersects with several other regulatory frameworks:

- **HIPAA** (United States): Synthetic health data may help satisfy HIPAA's Safe Harbor de-identification standard, but the generation process using real patient data must still comply with HIPAA protections.
- **CCPA/CPRA** (California): Similar to GDPR, California's privacy laws apply based on identifiability rather than data origin.
- **AI Act** (European Union): The EU AI Act may impose requirements on synthetic data used to train high-risk AI systems, particularly around documentation, quality management, and bias testing.

Synthetic data alone cannot replace compliance; it can support compliance by reducing the need to process real personal data, but organizations must still implement appropriate safeguards throughout the generation pipeline.[&#91;40&#93;](#cite_note-gdpr-local-40)

## Academic research and surveys

The academic literature on synthetic data has grown rapidly, with several comprehensive surveys published in 2024 and 2025.

### Major survey papers

| Paper | Authors / Venue | Year | Scope |
| --- | --- | --- | --- |
| "Comprehensive Exploration of Synthetic Data Generation: A Survey" | arXiv:2401.02524 | 2024 | Examines 417 synthetic data generation models over the past decade; finds neural network-based approaches prevailing, with GANs as primary generative models, while diffusion models, transformers, and RNNs compete. |
| "On LLMs-Driven Synthetic Data Generation, Curation, and Evaluation: A Survey" | ACL Findings 2024 (arXiv:2406.15126) | 2024 | Provides a unified framework for LLM-based synthetic data generation covering the full pipeline from generation to curation to evaluation. |
| "A Systematic Review of Synthetic Data Generation Techniques Using Generative AI" | *Electronics* (MDPI), 13(17), 3509 | 2024 | Systematic review of techniques including GANs, VAEs, LLMs, and other generative models for synthetic data. |
| "AI Models Collapse When Trained on Recursively Generated Data" | *Nature*, 631, 2024 | 2024 | Demonstrates that training generative models recursively on synthetic data leads to model collapse. |
| "30 Years of Synthetic Data" | ResearchGate | 2023 | Retrospective tracing the evolution of synthetic data from Rubin's 1993 paper through the deep learning era. |
| "Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data" | arXiv:2404.01413 | 2024 | Shows that accumulating synthetic data alongside real data avoids model collapse. |

### Foundational papers

| Paper | Authors | Year | Contribution |
| --- | --- | --- | --- |
| "Satisfying Confidentiality Constraints Through the Use of Synthetic Multiply-Imputed Micro-data" | Donald B. Rubin | 1993 | Introduced the concept of synthetic data for statistical disclosure limitation. |
| "Generative Adversarial Nets" | Ian Goodfellow et al. | 2014 | Introduced the GAN framework that transformed synthetic data generation. |
| "Textbooks Are All You Need" | Suriya Gunasekar et al. | 2023 | Demonstrated that synthetic textbook data can train competitive code models at small scale. |
| "Mastering the Game of Go without Human Knowledge" | David Silver et al. | 2017 | AlphaGo Zero achieved superhuman Go play through self-play alone. |
| "Distilling the Knowledge in a Neural Network" | Geoffrey Hinton, Oriol Vinyals, Jeff Dean | 2015 | Formalized [knowledge distillation](/wiki/knowledge_distillation) as a training technique using soft targets. |
| "Self-Instruct: Aligning Language Models with Self-Generated Instructions" | Yizhong Wang et al. | 2022 | Introduced the self-instruct framework for synthetic instruction generation. |
| "Phi-4 Technical Report" | Marah Abdin et al. | 2024 | Documented training a 14B model primarily on 400B+ synthetic tokens that surpassed its teacher model. |

## Future directions

Several trends are shaping the future of synthetic data in AI:

- **Synthetic data for reasoning**: The success of DeepSeek-R1 and OpenAI's o-series models has demonstrated that synthetic reasoning traces (chain-of-thought data generated through reinforcement learning) can dramatically improve model reasoning capabilities. This is expected to become a standard component of LLM training pipelines.
- **World models and simulation**: NVIDIA's Cosmos and similar world foundation models are pushing toward fully synthetic virtual environments for training physical AI systems, including robots and autonomous vehicles.
- **Quality over quantity**: Microsoft's Phi research has consistently shown that data quality, curation, and diversity matter more than raw scale. Future synthetic data pipelines will likely focus more on targeted, high-quality generation rather than undifferentiated volume.
- **Synthetic data verification**: Emerging research on synthetic data verification aims to develop automated methods for detecting and filtering low-quality or harmful synthetic data before it enters training pipelines.
- **Regulatory evolution**: As regulators develop more nuanced frameworks for AI and data governance, synthetic data may receive more explicit treatment in privacy and AI safety regulations.
- **Open synthetic datasets**: Following Cosmopedia and similar initiatives, the open-source community is increasingly investing in creating large, high-quality synthetic datasets that enable reproducible research and democratize access to advanced training data.

## See also

- [Data augmentation](/wiki/data_augmentation)
- [Generative adversarial network (GAN)](/wiki/generative_adversarial_network_gan)
- [Knowledge distillation](/wiki/knowledge_distillation)
- [Large language model](/wiki/large_language_model)
- [Reinforcement learning](/wiki/reinforcement_learning)
- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)
- [Fine-tuning](/wiki/fine_tuning)
- [Transfer learning](/wiki/transfer_learning)
- [Neural network](/wiki/neural_network)
- [Transformer](/wiki/transformer)
- [Diffusion model](/wiki/diffusion_model)
- [Computer vision](/wiki/computer_vision)
- [Overfitting](/wiki/overfitting)
- [Natural language processing](/wiki/natural_language_processing)
- [DeepSeek](/wiki/deepseek)
- [Machine learning](/wiki/machine_learning)

## References

1. ↑ [1.0](#cite_ref-aws-synth_1-0) [1.1](#cite_ref-aws-synth_1-1) "What is Synthetic Data?" Amazon Web Services. Retrieved 19 Mar 2026 from [https://aws.amazon.com/what-is/synthetic-data/](https://aws.amazon.com/what-is/synthetic-data/).

2. ↑ [2.0](#cite_ref-ibm-synth_2-0) [2.1](#cite_ref-ibm-synth_2-1) "What is Synthetic Data?" IBM. Retrieved 19 Mar 2026 from [https://www.ibm.com/think/topics/synthetic-data](https://www.ibm.com/think/topics/synthetic-data).

3. [↑](#cite_ref-gartner-2024_3-0) White, A. (2021). "By 2024, 60% of the data used for the development of AI and analytics projects will be synthetically generated." Gartner Blog. Retrieved 19 Mar 2026 from [https://blogs.gartner.com/andrew_white/2021/07/24/by-2024-60-of-the-data-used-for-the-development-of-ai-and-analytics-projects-will-be-synthetically-generated/](https://blogs.gartner.com/andrew_white/2021/07/24/by-2024-60-of-the-data-used-for-the-development-of-ai-and-analytics-projects-will-be-synthetically-generated/).

4. [↑](#cite_ref-fortune-market_4-0) "Synthetic Data Generation Market Forecast Analysis [2030]." Fortune Business Insights. Retrieved 19 Mar 2026 from [https://www.fortunebusinessinsights.com/synthetic-data-generation-market-108433](https://www.fortunebusinessinsights.com/synthetic-data-generation-market-108433).

5. [↑](#cite_ref-grandview-market_5-0) "Synthetic Data Generation Market Size & Share Report, 2030." Grand View Research. Retrieved 19 Mar 2026 from [https://www.grandviewresearch.com/industry-analysis/synthetic-data-generation-market-report](https://www.grandviewresearch.com/industry-analysis/synthetic-data-generation-market-report).

6. ↑ [6.0](#cite_ref-wikipedia-synth_6-0) [6.1](#cite_ref-wikipedia-synth_6-1) "Synthetic data." Wikipedia. Retrieved 19 Mar 2026 from [https://en.wikipedia.org/wiki/Synthetic_data](https://en.wikipedia.org/wiki/Synthetic_data).

7. ↑ [7.0](#cite_ref-rubin-1993_7-0) [7.1](#cite_ref-rubin-1993_7-1) Rubin, D.B. (1993). "Satisfying Confidentiality Constraints Through the Use of Synthetic Multiply-Imputed Micro-data." *Journal of Official Statistics*, 9(2), 461-468.

8. [↑](#cite_ref-30years-synth_8-0) "30 Years of Synthetic Data." ResearchGate (2023). Retrieved 19 Mar 2026 from [https://www.researchgate.net/publication/369823839_30_Years_of_Synthetic_Data](https://www.researchgate.net/publication/369823839_30_Years_of_Synthetic_Data).

9. ↑ [9.0](#cite_ref-goodfellow-gan_9-0) [9.1](#cite_ref-goodfellow-gan_9-1) Goodfellow, I. et al. (2014). "Generative Adversarial Nets." *Advances in Neural Information Processing Systems* 27 (NeurIPS 2014).

10. ↑ [10.0](#cite_ref-textbooks-phi1_10-0) [10.1](#cite_ref-textbooks-phi1_10-1) [10.2](#cite_ref-textbooks-phi1_10-2) [10.3](#cite_ref-textbooks-phi1_10-3) Gunasekar, S. et al. (2023). "Textbooks Are All You Need." arXiv:2306.11644. Retrieved 19 Mar 2026 from [https://arxiv.org/abs/2306.11644](https://arxiv.org/abs/2306.11644).

11. ↑ [11.0](#cite_ref-nvidia-replicator_11-0) [11.1](#cite_ref-nvidia-replicator_11-1) [11.2](#cite_ref-nvidia-replicator_11-2) "NVIDIA Announces Omniverse Replicator Synthetic-Data-Generation Engine for Training AIs." NVIDIA Newsroom (Nov 2021). Retrieved 19 Mar 2026 from [https://nvidianews.nvidia.com/news/nvidia-announces-omniverse-replicator-synthetic-data-generation-engine-for-training-ais](https://nvidianews.nvidia.com/news/nvidia-announces-omniverse-replicator-synthetic-data-generation-engine-for-training-ais).

12. [↑](#cite_ref-betterdata-tabular_12-0) "Generating Tabular Synthetic Data using GANs and LLMs." BetterData. Retrieved 19 Mar 2026 from [https://www.betterdata.ai/blogs/generating-tabular-synthetic-data-using-gans-and-llms](https://www.betterdata.ai/blogs/generating-tabular-synthetic-data-using-gans-and-llms).

13. ↑ [13.0](#cite_ref-synth-tts_13-0) [13.1](#cite_ref-synth-tts_13-1) "Training Text-to-Speech Model with Purely Synthetic Data." arXiv:2512.17356 (2025). Retrieved 19 Mar 2026 from [https://arxiv.org/html/2512.17356](https://arxiv.org/html/2512.17356).

14. [↑](#cite_ref-confident-synth_14-0) "Using LLMs for Synthetic Data Generation: The Definitive Guide." Confident AI. Retrieved 19 Mar 2026 from [https://www.confident-ai.com/blog/the-definitive-guide-to-synthetic-data-generation-using-llms](https://www.confident-ai.com/blog/the-definitive-guide-to-synthetic-data-generation-using-llms).

15. ↑ [15.0](#cite_ref-alpaca_15-0) [15.1](#cite_ref-alpaca_15-1) "Alpaca: A Strong, Replicable Instruction-Following Model." Stanford CRFM (Mar 2023). Retrieved 19 Mar 2026 from [https://crfm.stanford.edu/2023/03/13/alpaca.html](https://crfm.stanford.edu/2023/03/13/alpaca.html).

16. ↑ [16.0](#cite_ref-phi4-report_16-0) [16.1](#cite_ref-phi4-report_16-1) [16.2](#cite_ref-phi4-report_16-2) Abdin, M. et al. (2024). "Phi-4 Technical Report." arXiv:2412.08905. Retrieved 19 Mar 2026 from [https://arxiv.org/abs/2412.08905](https://arxiv.org/abs/2412.08905).

17. ↑ [17.0](#cite_ref-nvidia-nemotron_17-0) [17.1](#cite_ref-nvidia-nemotron_17-1) "NVIDIA Releases Open Synthetic Data Generation Pipeline for Training Large Language Models." NVIDIA Blog (2024). Retrieved 19 Mar 2026 from [https://blogs.nvidia.com/blog/nemotron-4-synthetic-data-generation-llm-training/](https://blogs.nvidia.com/blog/nemotron-4-synthetic-data-generation-llm-training/).

18. [↑](#cite_ref-synth-image-diffusion_18-0) "A Review of Synthetic Image Data and Its Use in Computer Vision." PMC (2022). Retrieved 19 Mar 2026 from [https://pmc.ncbi.nlm.nih.gov/articles/PMC9698631/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9698631/).

19. ↑ [19.0](#cite_ref-ml-digest-synth_19-0) [19.1](#cite_ref-ml-digest-synth_19-1) "Guide to Synthetic Data Generation: From GANs to Agents." ML Digest. Retrieved 19 Mar 2026 from [https://ml-digest.com/guide-to-synthetic-data-generation-for-ml-applications/](https://ml-digest.com/guide-to-synthetic-data-generation-for-ml-applications/).

20. ↑ [20.0](#cite_ref-vae-tabular_20-0) [20.1](#cite_ref-vae-tabular_20-1) "Data Augmentation with Variational Autoencoder for Imbalanced Dataset." arXiv:2412.07039 (2024). Retrieved 19 Mar 2026 from [https://arxiv.org/html/2412.07039v1](https://arxiv.org/html/2412.07039v1).

21. [↑](#cite_ref-alphago-wiki_21-0) "AlphaGo." Wikipedia. Retrieved 19 Mar 2026 from [https://en.wikipedia.org/wiki/AlphaGo](https://en.wikipedia.org/wiki/AlphaGo).

22. [↑](#cite_ref-alphago-zero-nature_22-0) Silver, D. et al. (2017). "Mastering the game of Go without human knowledge." *Nature*, 550, 354-359. Retrieved 19 Mar 2026 from [https://www.nature.com/articles/nature24270](https://www.nature.com/articles/nature24270).

23. [↑](#cite_ref-alphago-zero-blog_23-0) "AlphaGo Zero: Starting from scratch." Google DeepMind (2017). Retrieved 19 Mar 2026 from [https://deepmind.google/blog/alphago-zero-starting-from-scratch/](https://deepmind.google/blog/alphago-zero-starting-from-scratch/).

24. [↑](#cite_ref-alphazero-science_24-0) Silver, D. et al. (2018). "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play." *Science*, 362(6419), 1140-1144. Retrieved 19 Mar 2026 from [https://www.science.org/doi/10.1126/science.aar6404](https://www.science.org/doi/10.1126/science.aar6404).

25. [↑](#cite_ref-rl-renaissance_25-0) "Reinforcement Learning Renaissance: An AI Atlas Report." Emerge Haus (2025). Retrieved 19 Mar 2026 from [https://www.emerge.haus/blog/reinforcement-learning-renaissance](https://www.emerge.haus/blog/reinforcement-learning-renaissance).

26. [↑](#cite_ref-rlhf-wiki_26-0) "Reinforcement learning from human feedback." Wikipedia. Retrieved 19 Mar 2026 from [https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback).

27. ↑ [27.0](#cite_ref-deepseek-r1-distill_27-0) [27.1](#cite_ref-deepseek-r1-distill_27-1) "DeepSeek-R1-Distill-Qwen-7B." Hugging Face. Retrieved 19 Mar 2026 from [https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B).

28. [↑](#cite_ref-hinton-distill_28-0) Hinton, G., Vinyals, O., Dean, J. (2015). "Distilling the Knowledge in a Neural Network." arXiv:1503.02531. NIPS 2014 Deep Learning Workshop.

29. [↑](#cite_ref-phi15-report_29-0) Li, Y. et al. (2023). "Textbooks Are All You Need II: phi-1.5 technical report." arXiv:2309.05463. Retrieved 19 Mar 2026 from [https://arxiv.org/abs/2309.05463](https://arxiv.org/abs/2309.05463).

30. [↑](#cite_ref-phi2-blog_30-0) "Phi-2: The surprising power of small language models." Microsoft Research (Dec 2023). Retrieved 19 Mar 2026 from [https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/](https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/).

31. ↑ [31.0](#cite_ref-cosmopedia_31-0) [31.1](#cite_ref-cosmopedia_31-1) [31.2](#cite_ref-cosmopedia_31-2) "Cosmopedia: how to create large-scale synthetic data for pre-training Large Language Models." Hugging Face Blog (2024). Retrieved 19 Mar 2026 from [https://huggingface.co/blog/cosmopedia](https://huggingface.co/blog/cosmopedia).

32. [↑](#cite_ref-endava-synth_32-0) "Synthetic Data: Definition, Types, Use Cases, Benefits." Endava. Retrieved 19 Mar 2026 from [https://www.endava.com/glossary/synthetic-data](https://www.endava.com/glossary/synthetic-data).

33. ↑ [33.0](#cite_ref-gdpr-synth_33-0) [33.1](#cite_ref-gdpr-synth_33-1) [33.2](#cite_ref-gdpr-synth_33-2) "Synthetic Data Under GDPR: Compliance Challenges." GDPR Local. Retrieved 19 Mar 2026 from [https://gdprlocal.com/synthetic-data-under-gdpr/](https://gdprlocal.com/synthetic-data-under-gdpr/).

34. [↑](#cite_ref-bluegen-bias_34-0) "How does synthetic data generation help reduce algorithmic bias?" BlueGen AI. Retrieved 19 Mar 2026 from [https://bluegen.ai/how-does-synthetic-data-generation-help-reduce-algorithmic-bias/](https://bluegen.ai/how-does-synthetic-data-generation-help-reduce-algorithmic-bias/).

35. ↑ [35.0](#cite_ref-nature-collapse_35-0) [35.1](#cite_ref-nature-collapse_35-1) Shumailov, I. et al. (2024). "AI models collapse when trained on recursively generated data." *Nature*, 631, 755-759. Retrieved 19 Mar 2026 from [https://www.nature.com/articles/s41586-024-07566-y](https://www.nature.com/articles/s41586-024-07566-y).

36. [↑](#cite_ref-arxiv-accumulate_36-0) Dohmatob, E. et al. (2024). "Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data." arXiv:2404.01413. Retrieved 19 Mar 2026 from [https://arxiv.org/abs/2404.01413](https://arxiv.org/abs/2404.01413).

37. ↑ [37.0](#cite_ref-hallucination-survey_37-0) [37.1](#cite_ref-hallucination-survey_37-1) "A Comprehensive Survey of Hallucination in Large Language Models." arXiv:2510.06265 (2025). Retrieved 19 Mar 2026 from [https://arxiv.org/html/2510.06265v1](https://arxiv.org/html/2510.06265v1).

38. [↑](#cite_ref-transparency-coalition_38-0) "Synthetic Data and AI 'Model Collapse'." Transparency Coalition. Retrieved 19 Mar 2026 from [https://www.transparencycoalition.ai/learn/synthetic-data-and-ai-model-collapse](https://www.transparencycoalition.ai/learn/synthetic-data-and-ai-model-collapse).

39. [↑](#cite_ref-decentriq-gdpr_39-0) "Is synthetic data truly GDPR compliant? What you need to know." Decentriq. Retrieved 19 Mar 2026 from [https://www.decentriq.com/article/synthetic-data-privacy](https://www.decentriq.com/article/synthetic-data-privacy).

40. [↑](#cite_ref-gdpr-local_40-0) "Synthetic data & GDPR compliance (Guest blog by Hazy)." TechUK (2023). Retrieved 19 Mar 2026 from [https://www.techuk.org/resource/aiweek2023-hazy-thu.html](https://www.techuk.org/resource/aiweek2023-hazy-thu.html).
