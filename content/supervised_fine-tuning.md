---
title: "Supervised fine-tuning"
slug: "supervised_fine-tuning"
categories:
  - "Articles_with_short_description"
  - "Machine_learning"
  - "Natural_language_processing"
  - "Artificial_intelligence"
  - "Deep_learning"
  - "Transfer_learning"
---Short description: AI model training technique

[Template:About](/index.php?title=Template:About&action=edit&redlink=1)
[Template:Infobox AI term](/index.php?title=Template:Infobox_AI_term&action=edit&redlink=1)

**Supervised Fine-Tuning** (**SFT**) is a critical training process in [machine learning](/wiki/machine_learning) used to adapt a pre-trained [large language model](/wiki/large_language_model) (LLM) for specific downstream tasks.[&#91;1&#93;](#cite_note-Superannotate2025-1)[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;3&#93;](#cite_note-Sapien2024-3) It is a form of [transfer learning](/wiki/transfer_learning) where the model's existing knowledge, acquired during an initial [unsupervised](/wiki/unsupervised_learning) pre-training phase, is refined through a secondary, supervised training stage.[&#91;1&#93;](#cite_note-Superannotate2025-1)[&#91;4&#93;](#cite_note-GeeksforGeeks-4)[&#91;5&#93;](#cite_note-BrightData-5) This process adjusts the model's internal parameters (or weights) to improve its performance, accuracy, and alignment on specialized or domain-specific tasks.[&#91;6&#93;](#cite_note-Nebius-6)[&#91;7&#93;](#cite_note-Sama-7)[&#91;8&#93;](#cite_note-LabelYourData-8)

SFT is considered the most cost-effective step in the modern LLM development pipeline, often approximately 100 times less expensive than [pre-training](/wiki/pre-training).[&#91;9&#93;](#cite_note-zhang2023-9)

## History

The concept of fine-tuning in [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) originated as a form of [transfer learning](/wiki/transfer_learning), where pre-trained models are adapted to new tasks to leverage learned features and reduce training costs. Early applications were in [computer vision](/wiki/computer_vision), such as fine-tuning [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Networks&action=edit&redlink=1) (CNNs) like [AlexNet](/index.php?title=AlexNet&action=edit&redlink=1) or [ResNet](/index.php?title=ResNet&action=edit&redlink=1) on datasets like [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) for specific image classification tasks.[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)

The breakthrough year for SFT in [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP) was 2018, which saw the release of several seminal models that established the pre-training and fine-tuning paradigm.

| Model | Organization | Key Innovation | Impact |
| --- | --- | --- | --- |
| **[ELMo](/index.php?title=ELMo&action=edit&redlink=1)** | Allen AI | Contextual embeddings via bidirectional LSTMs | Handled polysemy through context |
| **[ULMFiT](/index.php?title=ULMFiT&action=edit&redlink=1)** | fast.ai | First effective NLP fine-tuning framework | Reduced errors by 18-24% on text classification |
| **[GPT](/wiki/gpt)** | OpenAI | Transformer-based transfer learning | Established transformers for transfer learning |
| **[BERT](/wiki/bert)** | Google | Bidirectional pre-training + fine-tuning | "Beginning of new era in NLP"[&#91;11&#93;](#cite_note-Devlin2018-11) |

The term "Supervised Fine-Tuning" gained specific traction in the context of LLMs around 2022, particularly with OpenAI's [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) paper, which formalized SFT as the initial stage in aligning models to follow human instructions.[&#91;12&#93;](#cite_note-Ouyang2022-12) This built on earlier works like [GPT-3](/wiki/gpt-3)'s few-shot learning but emphasized supervised adaptation using human-generated demonstrations. Subsequent models, such as [LLaMA-2](/index.php?title=LLaMA-2&action=edit&redlink=1) (2023) and [Mistral](/index.php?title=Mistral&action=edit&redlink=1), incorporated SFT to enhance instruction-following and safety.[&#91;13&#93;](#cite_note-Touvron2023-13) Parameter-efficient variants like [Low-Rank Adaptation](/index.php?title=Low-Rank_Adaptation&action=edit&redlink=1) (LoRA) emerged in 2021 to make SFT more accessible for large models.[&#91;14&#93;](#cite_note-Hu2021-14)

## Core Principles and Role in the AI Lifecycle

Supervised Fine-Tuning serves as a critical bridge in the development of modern [AI](/wiki/ai) models, transforming general-purpose [foundation models](/wiki/foundation_model) into specialized tools capable of performing specific, high-value tasks. Its principles are rooted in the strategic application of labeled data to refine a model's vast but unfocused knowledge base.

### Definition and Fundamental Goal

SFT is the process of taking a pre-trained model and further training it on a smaller, task-specific dataset composed of labeled examples.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;4&#93;](#cite_note-GeeksforGeeks-4) The fundamental goal is to specialize the model's general capabilities for a narrow, well-defined task—such as sentiment analysis, medical diagnosis, or legal contract review—without erasing the foundational knowledge acquired during pre-training.[&#91;6&#93;](#cite_note-Nebius-6)[&#91;4&#93;](#cite_note-GeeksforGeeks-4) This is achieved by refining an already capable model, such as [GPT-4](/wiki/gpt-4), [Gemini](/index.php?title=Gemini_(language_model)&action=edit&redlink=1), or [LLaMA](/wiki/llama), using a carefully curated dataset of input-output pairs. For example, a legal-tech company might fine-tune a model on thousands of court rulings to improve its understanding of legal terminology, or a customer service organization might use transcripts of support calls to align a model with its specific communication style and product knowledge.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;6&#93;](#cite_note-Nebius-6) This process effectively bridges the gap between a model's broad, generalized understanding of language and the specific nuances, jargon, and response patterns required for a particular application.[&#91;6&#93;](#cite_note-Nebius-6)[&#91;8&#93;](#cite_note-LabelYourData-8)

The strategic value of SFT lies in this transition from a generalist to a specialist. The initial pre-training phase equips a model with a comprehensive understanding of language—grammar, syntax, semantics, and a vast repository of world knowledge.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;4&#93;](#cite_note-GeeksforGeeks-4) However, this knowledge is latent and not inherently directed toward any specific user goal. SFT is the mechanism that activates this potential, directing the model's capabilities to produce useful, reliable, and contextually appropriate outputs for a defined purpose. Without this step, a foundation model remains a powerful but unspecialized artifact; with SFT, it becomes a functional, task-oriented tool.

### Position in the Model Development Pipeline

The development of large-scale AI models typically follows a multi-stage pipeline, and SFT occupies a crucial position after the initial pre-training phase.

1. **Pre-training:** The lifecycle begins with an unsupervised pre-training stage. Here, a foundation model is trained on a massive corpus of unlabeled text, often scraped from the internet, to learn general language patterns, facts, and reasoning abilities. The objective is typically next-token prediction or masked language modeling.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;4&#93;](#cite_note-GeeksforGeeks-4)[&#91;15&#93;](#cite_note-RedHat2025-15)

2. **Supervised Fine-Tuning (Post-training):** SFT is a critical post-training step that follows pre-training.[&#91;15&#93;](#cite_note-RedHat2025-15) It uses a much smaller, curated, and labeled dataset to teach the model how to perform specific tasks or follow instructions—a behavior not explicitly learned during the unsupervised pre-training phase.[&#91;1&#93;](#cite_note-Superannotate2025-1)[&#91;16&#93;](#cite_note-IBMInstructionTuning-16) This is the stage where the model's behavior is first aligned with human-defined objectives.

3. **Further Alignment (Optional):** For many modern applications, especially conversational agents, SFT is followed by additional alignment techniques like [Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF). In this paradigm, SFT provides the model with the necessary task competence and instruction-following ability, creating a strong starting point. RLHF then further refines the model's behavior based on human preferences (for example which of two responses is more helpful or harmless), optimizing for more subjective qualities that are difficult to capture in a static dataset.[&#91;17&#93;](#cite_note-InvisibleTech-17)[&#91;18&#93;](#cite_note-CleverX-18)

### The "Supervised" Aspect: The Role of Labeled Data

The term "supervised" in SFT refers directly to the use of a labeled training dataset to guide the fine-tuning process.[&#91;1&#93;](#cite_note-Superannotate2025-1)[&#91;4&#93;](#cite_note-GeeksforGeeks-4) Unlike the unlabeled data used in pre-training, each data point in an SFT dataset consists of an input and a corresponding desired output, often referred to as the "ground truth" label.[&#91;4&#93;](#cite_note-GeeksforGeeks-4)[&#91;19&#93;](#cite_note-OpenAIDocs-19)[&#91;20&#93;](#cite_note-Turing-20) For example:

- In a question-answering task, the input is a question, and the output is the correct answer.

- In a sentiment analysis task, the input is a piece of text (for example a product review), and the output is a label (for example "positive," "negative," or "neutral").

- In a summarization task, the input is a long document, and the output is a human-written summary.

During training, the model learns by attempting to map the inputs to the desired outputs. It makes a prediction for each input, and the difference between its prediction and the ground truth label is quantified by a [loss function](/wiki/loss_function). The model then adjusts its internal parameters based on this explicit feedback, iteratively minimizing the prediction error.[&#91;7&#93;](#cite_note-Sama-7)[&#91;4&#93;](#cite_note-GeeksforGeeks-4) This direct supervision is what allows for precise control over the model's behavior, aligning it with specific, task-oriented objectives.[&#91;1&#93;](#cite_note-Superannotate2025-1)

## The Supervised Fine-Tuning Process

The SFT workflow is a structured, multi-step process that transforms a general-purpose pre-trained model into a specialized one. It involves careful selection of the base model, meticulous preparation of data, a systematic training phase, and rigorous evaluation.

### Step 1: Selection of a Pre-trained Base Model

The process begins with the selection of an appropriate pre-trained foundation model. Popular choices include models from the [GPT](/index.php?title=GPT_(language_model)&action=edit&redlink=1) family, [Gemini](/index.php?title=Google_Gemini&action=edit&redlink=1), [Claude](/index.php?title=Claude_(language_model)&action=edit&redlink=1), or open-source alternatives like [LLaMA](/wiki/llama) and [Mistral](/wiki/mistral_ai).[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;21&#93;](#cite_note-DataCamp-21)[&#91;6&#93;](#cite_note-Nebius-6) The choice of model architecture is critical and should align with the intended downstream task. For instance, causal decoder-only models like GPT are well-suited for text generation tasks, while encoder-based models like BERT excel at text classification and understanding tasks.[&#91;21&#93;](#cite_note-DataCamp-21)[&#91;20&#93;](#cite_note-Turing-20) The selected base model provides a robust starting point, having already learned general language syntax, semantics, and contextual understanding from its extensive pre-training.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;4&#93;](#cite_note-GeeksforGeeks-4)

### Step 2: Task Definition and Dataset Preparation

First, the downstream task must be clearly and narrowly defined (for example classify customer support tickets into "urgent" or "non-urgent," summarize legal depositions, generate Python code from natural language descriptions).[&#91;2&#93;](#cite_note-GigaSpaces-2)

Next, a high-quality, task-specific labeled dataset is created. The quality and relevance of this dataset are the most critical factors for successful SFT.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;22&#93;](#cite_note-ThunderCompute-22)[&#91;5&#93;](#cite_note-BrightData-5) The dataset must consist of input-output pairs that serve as concrete examples of the desired model behavior.[&#91;4&#93;](#cite_note-GeeksforGeeks-4)[&#91;19&#93;](#cite_note-OpenAIDocs-19) This data is then typically split into three subsets:

- **Training Set:** The largest portion, used to directly train the model and update its weights.

- **Validation Set:** A separate set used to tune [hyperparameters](/wiki/hyperparameter), monitor for [overfitting](/wiki/overfitting), and decide when to stop training.

- **Testing Set:** A final, held-out set that the model has never seen during training or validation. It provides an unbiased evaluation of the model's generalization performance.[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;23&#93;](#cite_note-GoogleCloudData-23)[&#91;5&#93;](#cite_note-BrightData-5)[&#91;24&#93;](#cite_note-GDS-24)

### Step 3: The Training Loop and Weight Updates

The core of SFT is the training loop, where the model's parameters are iteratively adjusted.

#### Technical Foundations: Loss Function and Backpropagation

The model is trained on the labeled dataset using supervised learning.[&#91;4&#93;](#cite_note-GeeksforGeeks-4) For each input example, the model generates a prediction. A **[loss function](/wiki/loss_function)** is used to calculate the discrepancy between the model's prediction and the ground truth label from the dataset. For most language modeling and classification tasks, the standard choice is the **[Cross-entropy](/wiki/cross-entropy)** loss function (also called negative log-likelihood), which measures the difference between two probability distributions.[&#91;5&#93;](#cite_note-BrightData-5)[&#91;25&#93;](#cite_note-OpenReviewGEM-25)[&#91;26&#93;](#cite_note-ICLRGEM-26)[&#91;27&#93;](#cite_note-EmergentMind-27) The training objective is to minimize this loss across the entire training dataset.[&#91;4&#93;](#cite_note-GeeksforGeeks-4)

Mathematically, the token-level cross-entropy loss is expressed as:

  
    
      
        L
        =
        &#x2212;
        
          
            1
            N
          
        
        
          &#x2211;
          
            i
            =
            1
          
          
            N
          
        
        log
        &#x2061;
        P
        (
        
          y
          
            i
          
        
        
          |
        
        x
        ,
        
          y
          
            <
            i
          
        
        )
      
    
    {\displaystyle L=-{\frac {1}{N}}\sum _{i=1}^{N}\log P(y_{i}|x,y_{<i})}
  
*
Where:

- N* = sequence length

- *yi* = target token at position *i*

- *P(yi | x, y<i)* = probability assigned to correct token

This minimization is achieved through **[backpropagation](/wiki/backpropagation)**. The calculated loss is propagated backward through the network to compute the [gradient](/wiki/gradient) for each of the model's parameters (weights).[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)[&#91;5&#93;](#cite_note-BrightData-5) These gradients represent the direction and magnitude of the change needed for each weight to reduce the error. An **optimizer algorithm**—such as [Adam](/index.php?title=Adam_optimizer&action=edit&redlink=1) or [SGD](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1)—then uses these gradients, along with a specified **learning rate**, to update the model's weights.[&#91;4&#93;](#cite_note-GeeksforGeeks-4)[&#91;5&#93;](#cite_note-BrightData-5)[&#91;28&#93;](#cite_note-UBIAI-28) This iterative process of forward pass (prediction), loss calculation, backward pass (backpropagation), and weight update is repeated for many epochs.

This mechanism of weight updates introduces a fundamental tension. The goal is to adjust the model's parameters to specialize it for a new task. However, if these adjustments are too aggressive (for example due to a high learning rate or excessive training), they risk destructively overwriting the complex, general knowledge encoded during pre-training, a phenomenon known as [catastrophic forgetting](/index.php?title=Catastrophic_forgetting&action=edit&redlink=1).[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;31&#93;](#cite_note-IBMCatastrophic-31) Therefore, successful SFT is not merely about teaching new skills but also about carefully preserving existing ones.

#### Hyperparameter Configuration

Several key hyperparameters must be configured to control the training process effectively. These include:

- **Learning Rate:** Controls the step size of weight updates. A small learning rate is often recommended for fine-tuning to avoid drastic changes that could lead to catastrophic forgetting.[&#91;28&#93;](#cite_note-UBIAI-28)

- **Batch Size:** The number of training examples processed in a single iteration. This choice impacts memory requirements and training stability.[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;8&#93;](#cite_note-LabelYourData-8)

- **Number of Epochs:** The number of times the entire training dataset is passed through the model. Too few epochs can lead to underfitting, while too many can lead to overfitting.[&#91;8&#93;](#cite_note-LabelYourData-8)[&#91;20&#93;](#cite_note-Turing-20)

### Step 4: Evaluation and Validation

Throughout the training process, the model's performance is periodically evaluated on the separate validation dataset.[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;23&#93;](#cite_note-GoogleCloudData-23) This step is crucial for:

- **Monitoring Progress:** Tracking how the model's performance improves over time.

- **Detecting Overfitting:** If training loss continues to decrease while validation loss starts to increase, the model is overfitting. Techniques like [early stopping](/wiki/early_stopping) can be used to halt training at the optimal point.[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;20&#93;](#cite_note-Turing-20)

- **Hyperparameter Tuning:** Comparing the validation performance of models trained with different hyperparameter settings to find the optimal configuration.

(See [#Evaluation Metrics](#Evaluation_Metrics) section for more details on specific metrics.)

### Step 5: Deployment and Monitoring

Once the model achieves satisfactory performance on the validation and test sets and is deemed ready for real-world application, it is deployed. This could involve integrating it into a customer support chatbot, a content generation tool, a medical diagnosis system, or any other application where its specialized skills are needed.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;4&#93;](#cite_note-GeeksforGeeks-4)

## Dataset Requirements and Preparation

The success of supervised fine-tuning is overwhelmingly determined by the quality, relevance, and structure of the dataset used. The principle "garbage in, garbage out" applies with particular force; a powerful pre-trained model can easily be taught incorrect or undesirable behaviors with a poorly constructed dataset.

### The Primacy of Data Quality over Quantity

Across numerous studies and best-practice guides, there is a consensus that the quality of the SFT dataset is far more important than its sheer size.[&#91;23&#93;](#cite_note-GoogleCloudData-23)[&#91;22&#93;](#cite_note-ThunderCompute-22)[&#91;24&#93;](#cite_note-GDS-24) A small, clean, diverse, and highly relevant dataset will produce a better-specialized model than a large, noisy, or unrepresentative one. A key paper, "LIMA: Less Is More for Alignment," famously demonstrated that a model fine-tuned on only 1,000 high-quality, curated examples could outperform models trained on much larger, but lower-quality, datasets.[&#91;32&#93;](#cite_note-zhou2024-32)

While the optimal number of examples varies by task and model size, significant performance improvements can be seen with as few as 50 to 100 well-crafted examples.[&#91;19&#93;](#cite_note-OpenAIDocs-19) The minimum required is often around 10 examples.[&#91;19&#93;](#cite_note-OpenAIDocs-19) For more complex tasks, the dataset may need to scale to thousands of examples.[&#91;23&#93;](#cite_note-GoogleCloudData-23)

### Common Dataset Formats and Structuring

SFT datasets are typically stored in structured formats that are easy to parse, with [JSON](/index.php?title=JSON&action=edit&redlink=1) and JSON Lines (JSONL) being the most common.[&#91;19&#93;](#cite_note-OpenAIDocs-19)[&#91;15&#93;](#cite_note-RedHat2025-15) The fundamental unit of data is a prompt-response pair or a turn in a simulated conversation.[&#91;15&#93;](#cite_note-RedHat2025-15) For instruction-following tasks, a common schema is a JSON object with keys such as `"instruction"`, `"input"` (optional), and `"output"`.[&#91;33&#93;](#cite_note-SelfInstructMedium-33)

To prepare this structured data for the model, a templating step is often required. Templating engines like [Jinja](/index.php?title=Jinja_(template_engine)&action=edit&redlink=1) are used to format the prompt-response pairs into a single, consistent string. This process involves adding special tokens or markers to delineate between different parts of the interaction, such as the user's prompt and the assistant's response (for example using tags like `<INST>` and `</INST>`). This teaches the model the conversational structure it is expected to follow.[&#91;15&#93;](#cite_note-RedHat2025-15)

### Data Generation Strategies (for example Self-Instruct)

Manually creating thousands of high-quality, diverse instruction-following examples is a significant bottleneck in SFT, requiring immense time and domain expertise.[&#91;34&#93;](#cite_note-SelfInstructGitHub-34)[&#91;33&#93;](#cite_note-SelfInstructMedium-33) To address this, automated data generation strategies have been developed.

The most prominent of these is **[Self-Instruct](/index.php?title=Self-Instruct&action=edit&redlink=1)**, a framework that uses a powerful "teacher" LLM (like GPT-3.5 or GPT-4) to generate a large corpus of training data from a small seed set of human-written examples.[&#91;35&#93;](#cite_note-LLaMAAdapter-35)[&#91;34&#93;](#cite_note-SelfInstructGitHub-34)[&#91;33&#93;](#cite_note-SelfInstructMedium-33) This method was famously used to generate the 52,000-example dataset for the Stanford Alpaca model, demonstrating that it was possible to create a capable instruction-following model without a massive human annotation effort.[&#91;35&#93;](#cite_note-LLaMAAdapter-35)[&#91;36&#93;](#cite_note-AlpacaDataset-36)

### Notable Public Datasets for SFT

A rich ecosystem of public datasets enables research and application of SFT.

| Dataset | Size | Source | Key Features | License |
| --- | --- | --- | --- | --- |
| **[Alpaca](/index.php?title=Alpaca_Dataset&action=edit&redlink=1)**[&#91;36&#93;](#cite_note-AlpacaDataset-36) | 52,000 | GPT-3 generated | Self-instruct methodology | Apache 2.0 |
| **[Dolly](/index.php?title=Dolly_Dataset&action=edit&redlink=1)**[&#91;37&#93;](#cite_note-DollyKaggle1-37)[&#91;38&#93;](#cite_note-DollyKaggle2-38) | 15,000 | Human-written | 7 behavioral categories (by Databricks employees) | CC-BY-SA 3.0 |
| **[FLAN Collection](/index.php?title=FLAN_Collection&action=edit&redlink=1)** | 1,800+ tasks | Task transformation | Multiple templates for existing NLP datasets | Mixed |
| **[LIMA](/index.php?title=LIMA_Dataset&action=edit&redlink=1)**[&#91;32&#93;](#cite_note-zhou2024-32) | 1,000 | Curated | "Quality over quantity" thesis | Research only |
| **[ShareGPT](/index.php?title=ShareGPT&action=edit&redlink=1)** | ~70,000 | User conversations | Real-world multi-turn dialogue | Unclear |
| **[OpenAssistant Conversations](/index.php?title=OpenAssistant_Conversations&action=edit&redlink=1)** (OASST1)[&#91;39&#93;](#cite_note-OASSTKaggle-39)[&#91;40&#93;](#cite_note-OASSTHuggingFace-40) | 161,000 msgs | Crowdsourced | 35 languages, human-rated conversation trees | Apache 2.0 |

## Key Techniques and Variants

Supervised fine-tuning is not a monolithic technique; several variants exist, each offering different trade-offs between performance, computational cost, and risk of catastrophic forgetting.

### Full Fine-Tuning

Full fine-tuning is the most straightforward and traditional approach. In this method, all the parameters (weights) of the pre-trained model are updated during the training process on the new, task-specific dataset.[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;28&#93;](#cite_note-UBIAI-28)

- **Advantages:** Because the entire model adapts to the new data, this method often yields the best possible performance and accuracy for the target task.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)

- **Disadvantages:** It is extremely resource-intensive, requiring substantial GPU memory and computational power, making it infeasible for many users, especially with very large models.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;41&#93;](#cite_note-WordpressPEFT-41) It also carries the highest risk of catastrophic forgetting, as the aggressive updates can overwrite the model's general knowledge.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;28&#93;](#cite_note-UBIAI-28) Furthermore, it requires storing a complete, separate copy of the multi-billion parameter model for each specialized task, which is highly inefficient.[&#91;41&#93;](#cite_note-WordpressPEFT-41)

### Selective Layer Fine-Tuning (Layer Freezing)

A more resource-efficient alternative to full fine-tuning is to selectively update only a subset of the model's layers while keeping the others "frozen" (i.e., their weights are not changed during backpropagation).[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;28&#93;](#cite_note-UBIAI-28)

The underlying principle is that different layers in a deep neural network capture features at different levels of abstraction. Early layers (closer to the input) tend to learn general, low-level features (for example basic grammar, word relationships), while later layers (closer to the output) learn more high-level, task-specific features.[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)[&#91;28&#93;](#cite_note-UBIAI-28) By freezing the initial layers, practitioners can preserve the model's foundational knowledge while training only the later layers to adapt to the new task. This approach reduces both computational costs and the risk of catastrophic forgetting.[&#91;10&#93;](#cite_note-WikipediaFineTuning-10)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;8&#93;](#cite_note-LabelYourData-8)

### Instruction Tuning: A Special Case of SFT

While all instruction tuning is a form of SFT, the term **instruction tuning** has come to refer to a specific application of SFT with a distinct goal. Instead of fine-tuning a model for a single, narrow downstream task (like sentiment classification), instruction tuning aims to improve a model's general ability to follow natural language instructions across a wide variety of tasks.[&#91;42&#93;](#cite_note-InstructionTuningSurvey-42)[&#91;16&#93;](#cite_note-IBMInstructionTuning-16)

The key differentiator is the nature and diversity of the training data. An instruction-tuned model is fine-tuned on a large mixture of datasets, where each example is formatted as an instruction (for example "Summarize the following article," "Translate this sentence to French," "Answer this question based on the context").[&#91;43&#93;](#cite_note-StackOverflowSFT-43)[&#91;16&#93;](#cite_note-IBMInstructionTuning-16)[&#91;44&#93;](#cite_note-FLANGitHub-44) This process helps to bridge the gap between the model's original pre-training objective (next-word prediction) and the user's goal of having the model act as a helpful, instruction-following assistant.[&#91;42&#93;](#cite_note-InstructionTuningSurvey-42)[&#91;16&#93;](#cite_note-IBMInstructionTuning-16)

## Comparison with Other Model Adaptation Techniques

SFT is one of several powerful techniques for adapting pre-trained models. Understanding its relationship with other methods like RLHF, PEFT, and RAG is crucial for selecting the right approach for a given application.

### SFT vs. Reinforcement Learning from Human Feedback (RLHF)

- **Mechanism:** SFT is a supervised learning method that trains a model on a static dataset of "correct" input-output pairs.[&#91;18&#93;](#cite_note-CleverX-18) RLHF, in contrast, is a reinforcement learning method that optimizes a model based on dynamic feedback. It involves training a separate "reward model" on a dataset of human preferences (for example humans ranking several model-generated responses from best to worst) and then using this reward model to guide the LLM's training.[&#91;17&#93;](#cite_note-InvisibleTech-17)

- **Objective:** The primary goal of SFT is to improve task-specific accuracy and correctness based on labeled examples.[&#91;18&#93;](#cite_note-CleverX-18) The goal of RLHF is to align the model's behavior with subjective and often nuanced human values, such as being helpful, harmless, and honest, especially in scenarios where there is no single correct answer.[&#91;18&#93;](#cite_note-CleverX-18)[&#91;45&#93;](#cite_note-GradientFlow-45)

- **Relationship:** SFT and RLHF are not mutually exclusive; they form a powerful pipeline. SFT is typically the first step, used to teach the model the basic competence and instruction-following skills required for a task. RLHF is then applied to the SFT model to further refine its behavior and align it more closely with human preferences.[&#91;17&#93;](#cite_note-InvisibleTech-17)[&#91;18&#93;](#cite_note-CleverX-18)[&#91;46&#93;](#cite_note-InstructGPTReview-46)

### SFT vs. Parameter-Efficient Fine-Tuning (PEFT)

- **Mechanism:** Full SFT updates all of the model's parameters.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29) PEFT is a family of techniques that dramatically reduces the computational cost of fine-tuning by updating only a small fraction of the model's parameters (or adding a small number of new, trainable parameters) while keeping the vast majority of the original model frozen.[&#91;47&#93;](#cite_note-MediumPEFT-47)[&#91;41&#93;](#cite_note-WordpressPEFT-41)[&#91;28&#93;](#cite_note-UBIAI-28)

- **Key PEFT Methods:**

   * **[LoRA](/index.php?title=Low-Rank_Adaptation&action=edit&redlink=1) (Low-Rank Adaptation):** This popular PEFT method injects small, trainable low-rank matrices (adapters) into the layers of the pre-trained model. Only these adapters are trained, significantly reducing the number of trainable parameters and memory usage.[&#91;14&#93;](#cite_note-Hu2021-14)[&#91;47&#93;](#cite_note-MediumPEFT-47)[&#91;8&#93;](#cite_note-LabelYourData-8)
   * **QLoRA:** An even more efficient version of LoRA that quantizes the frozen, pre-trained model to 4-bit precision, further reducing memory requirements and making it possible to fine-tune very large models on consumer-grade hardware.[&#91;47&#93;](#cite_note-MediumPEFT-47)[&#91;48&#93;](#cite_note-HuggingFaceQLoRA-48)[&#91;49&#93;](#cite_note-RabilooQLoRA-49)

- **Trade-offs:** Full SFT is computationally expensive but may offer slightly better performance on highly complex tasks. PEFT is vastly more efficient, requires less data, is more robust against catastrophic forgetting, and allows a single base model to be adapted for many tasks using small, swappable adapters.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;41&#93;](#cite_note-WordpressPEFT-41)[&#91;50&#93;](#cite_note-TeeTracker-50)

### SFT vs. Retrieval-Augmented Generation (RAG)

- **Mechanism:** SFT modifies the model's internal weights through training, thereby encoding new knowledge or skills directly into the model.[&#91;6&#93;](#cite_note-Nebius-6)[&#91;5&#93;](#cite_note-BrightData-5) RAG does not alter the model's weights. Instead, it augments the model's knowledge at inference time by connecting it to an external, up-to-date knowledge base (such as a [vector database](/wiki/vector_database) of documents).[&#91;6&#93;](#cite_note-Nebius-6)

- **Process:** In a RAG system, when a user submits a query, the system first retrieves relevant information from the external knowledge base. This retrieved information is then inserted into the prompt as context, which the unchanged LLM uses to generate a more accurate and informed response.[&#91;6&#93;](#cite_note-Nebius-6)

- **Use Case:** SFT is used to teach a model a new *skill*, *behavior*, or *style* (for example how to write in a specific tone or format). RAG is used to provide the model with new or domain-specific *knowledge* without the need for retraining. RAG is particularly effective for applications that rely on rapidly changing information, as the external knowledge base can be updated easily without altering the model.

| Aspect | Supervised Fine-Tuning (SFT) | [Parameter-Efficient Fine-Tuning](/index.php?title=Parameter-Efficient_Fine-Tuning&action=edit&redlink=1) (PEFT) | [Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF) | [Retrieval-Augmented Generation](/index.php?title=Retrieval-Augmented_Generation&action=edit&redlink=1) (RAG) | Unsupervised Fine-Tuning |
| --- | --- | --- | --- | --- | --- |
| **Core Goal** | Improve task-specific accuracy and correctness. | Efficiently improve task-specific accuracy with minimal computation. | Align model behavior with subjective human preferences. | Provide model with external, up-to-date knowledge. | Adapt model to a new domain's language style. |
| **Method** | Supervised learning on labeled input-output pairs. | Supervised learning, but only on a small subset of parameters (for example LoRA adapters). | Reinforcement learning guided by a reward model trained on human preference data. | At inference time, retrieve relevant context from a database and add it to the prompt. | Self-supervised learning on unlabeled domain data. |
| **Model Weights** | All (or a large subset of) weights are modified. | >99% of weights are frozen; only a small fraction are modified. | All (or a subset of) weights are modified. | No weights are modified. | All (or a subset of) weights are modified. |
| **Data Requirement** | High-quality labeled dataset (hundreds to thousands of examples). | Smaller high-quality labeled dataset. | Human preference data (for example rankings of model outputs). | A corpus of documents for the external knowledge base. | Large corpus of unlabeled text from the target domain. |
| **Computational Cost** | High to very high. | Very low. | Very high (requires training multiple models). | Low (cost is primarily at inference time). | High (but less than pre-training). |
| **Key Advantage** | Can achieve high performance on specific tasks. | Dramatically reduces cost and memory; enables easy task-switching. | Excels at capturing nuanced, subjective qualities. | Reduces hallucinations; knowledge is easily updatable. | Improves performance in a new domain without labels. |
| **Key Limitation** | Costly, risk of catastrophic forgetting and overfitting. | May have slightly lower performance than full SFT on complex tasks. | Complex, resource-intensive, and relies on subjective human feedback. | Does not teach the model new skills or behaviors, only provides knowledge. | Does not teach specific tasks or instruction following. |
| **Ideal Use Case** | Adapting a model for a well-defined task with objective answers (for example classification, summarization). | Cost-effective adaptation for multiple tasks or in resource-constrained environments. | Creating conversational agents that are helpful, harmless, and aligned with human values. | Building Q&A systems over private documents or rapidly changing information. | Adapting a general model to a specialized field (for example legal or medical text). |

## Applications and Notable Models

SFT has been instrumental in transitioning LLMs from research curiosities to practical tools deployed across numerous industries. Its ability to specialize foundation models has unlocked a wide range of applications and has been a core component in the development of some of the most influential AI models.

### Common Tasks

SFT is widely used to adapt language models to domain-specific tasks. Common tasks that benefit from SFT include: 

- **[Classification](/wiki/classification)**: Assigning inputs to categories (for example, spam vs. non-spam detection or topic classification).

- **[Summarization](/index.php?title=Automatic_summarization&action=edit&redlink=1)**: Producing concise summaries of longer text (such as summarizing articles or reports).

- **[Question answering](/index.php?title=Question_answering&action=edit&redlink=1)**: Extractive or generative question-answering on provided contexts.

- **Dialogue/Chat:** Training conversational agents to follow desired behaviors or scripts.

- **Translation:** Fine-tuning on parallel corpora to improve translation quality for specific language pairs or domains.

### Industry-Specific Applications

- **Finance and Legal:** In sectors that rely on high-precision analysis of dense, specialized text, SFT is used to train models on corpora of legal documents, contracts, or financial regulations. This enables applications like automated contract analysis, compliance verification, and discovery of relevant information in legal cases.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;30&#93;](#cite_note-MeegleChallenges-30)

- **Healthcare:** SFT allows for the specialization of models for medical language understanding, such as interpreting clinical notes, summarizing patient histories, or powering diagnostic support systems. In [computer vision](/wiki/computer_vision), models can be fine-tuned on datasets of medical images (for example X-rays, MRIs) to improve their ability to detect specific anomalies like tumors or fractures.[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;51&#93;](#cite_note-Lark-51)

- **Customer Support:** Companies use SFT to create specialized chatbots and virtual assistants. By fine-tuning a base model on internal help desk tickets, support transcripts, and product documentation, they can create an agent that understands their specific products and aligns with the company's tone and voice, leading to more accurate and helpful customer interactions.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;6&#93;](#cite_note-Nebius-6)

### Notable Models Developed with SFT

SFT has been a cornerstone in the development of many state-of-the-art language models.

- **[InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) and [ChatGPT](/wiki/chatgpt):** The development of these influential models by [OpenAI](/wiki/openai) marked a significant shift toward aligning LLMs with human intent. The training process begins with SFT. OpenAI collected a dataset of human-written demonstrations of desired behavior (prompts and corresponding responses) and used it to fine-tune a base [GPT-3](/wiki/gpt-3) model. This initial SFT step was crucial for teaching the model how to follow instructions effectively.[&#91;12&#93;](#cite_note-Ouyang2022-12) This SFT model was then further refined using RLHF to improve its helpfulness, honesty, and harmlessness.[&#91;46&#93;](#cite_note-InstructGPTReview-46)

- **FLAN Models (for example Flan-T5):** Google's FLAN (**F**inetuned **L**anguage **N**et) models are a prime example of large-scale instruction tuning. Researchers took a base model (like [T5](/index.php?title=T5_(language_model)&action=edit&redlink=1) or [PaLM](/index.php?title=PaLM&action=edit&redlink=1)) and fine-tuned it on a massive collection of existing NLP datasets (initially over 60, later expanded to over 1,800 tasks) that were reformatted into natural language instructions.[&#91;44&#93;](#cite_note-FLANGitHub-44)[&#91;52&#93;](#cite_note-FLANPaper-52)[&#91;53&#93;](#cite_note-FLANPaLMMedium-53) This process dramatically improved the model's ability to generalize to new, unseen tasks in a zero-shot setting.[&#91;52&#93;](#cite_note-FLANPaper-52)[&#91;54&#93;](#cite_note-FLANScalePaper-54)

- **LLaMA and its Derivatives (for example Alpaca, Dolly):** The release of Meta's open-source LLaMA models catalyzed a wave of innovation in the open-source community, driven primarily by SFT. Stanford's **Alpaca** project demonstrated that it was possible to replicate the instruction-following capabilities of models like ChatGPT with limited resources. They took the 7B LLaMA model and performed SFT using a dataset of 52,000 instruction-following examples generated synthetically via the Self-Instruct technique.[&#91;6&#93;](#cite_note-Nebius-6)[&#91;35&#93;](#cite_note-LLaMAAdapter-35) Similarly, Databricks created **Dolly**, one of the first open-source, commercially viable instruction-following models, by fine-tuning an EleutherAI Pythia model on a human-generated dataset of 15,000 examples.[&#91;38&#93;](#cite_note-DollyKaggle2-38)[&#91;55&#93;](#cite_note-DollyGitHub-55)

## Implementation Tools

A rich ecosystem of open-source libraries and cloud platforms exists to facilitate SFT.

### Hugging Face Ecosystem

The [Hugging Face](/wiki/hugging_face) ecosystem is the de facto standard for open-source SFT.

- **[Transformers](/index.php?title=Transformers_library&action=edit&redlink=1)**: Provides 100+ pre-trained architectures and the `Trainer` API for handling the training loop.[&#91;56&#93;](#cite_note-wolf2020-56)

- **[TRL](/index.php?title=TRL&action=edit&redlink=1)**: A library specializing in training, including the `SFTTrainer` which simplifies SFT.

- **[PEFT](/index.php?title=PEFT&action=edit&redlink=1)**: The library for Parameter-Efficient Fine-Tuning methods like LoRA and QLoRA.[&#91;57&#93;](#cite_note-peft2024-57)

- **[Datasets](/index.php?title=Datasets_library&action=edit&redlink=1)**: Provides access to and preprocessing for 50,000+ datasets.

- **[Accelerate](/index.php?title=Accelerate&action=edit&redlink=1)**: Simplifies distributed training across multiple GPUs or TPUs.

### Cloud Platforms

Major cloud providers offer managed services for SFT.

| Platform | Models Supported | Key Features |
| --- | --- | --- |
| **Azure AI Foundry** | GPT-4, LLaMA, Mistral, Gemini | Serverless fine-tuning, no GPU quotas |
| **AWS SageMaker** | FLAN-T5, open models | Jumpstart templates, [Trainium](/index.php?title=AWS_Trainium&action=edit&redlink=1) support |
| **Google Vertex AI** | Gemini family, Gemma | LoRA fine-tuning, [Cloud Storage](/index.php?title=Cloud_Storage&action=edit&redlink=1) integration |
| **OpenAI API** | GPT-3.5, GPT-4 | JSON Lines format, job tracking |

### Specialized Frameworks

- **[LLaMA-Factory](/index.php?title=LLaMA-Factory&action=edit&redlink=1)**: A unified web UI and framework for fine-tuning 100+ models.

- **[Unsloth](/index.php?title=Unsloth&action=edit&redlink=1)**: An optimized framework promising 2x faster training and 70% less VRAM usage.

- **[DeepSpeed](/index.php?title=DeepSpeed&action=edit&redlink=1)**: A Microsoft library for optimizing distributed training.

## Evaluation Metrics

Evaluating the performance of a fine-tuned model is a critical step, using both task-specific metrics and general benchmarks.

### Task-Specific Metrics

- **Text Generation**: [BLEU](/index.php?title=BLEU&action=edit&redlink=1), [ROUGE](/index.php?title=ROUGE&action=edit&redlink=1), Perplexity

- **Question Answering**: Exact Match (EM), F1 Score

- **Code Generation**: pass@k, functional correctness

- **Math Reasoning**: Accuracy, solution validity

### General Benchmarks

These benchmarks evaluate a model's general instruction-following and reasoning abilities.

| Benchmark | Description | Metric | Coverage |
| --- | --- | --- | --- |
| **[MMLU](/wiki/mmlu)** | Massive Multitask Language Understanding | Accuracy % | 57 subjects (math, history, law, etc.) |
| **[BBH](/index.php?title=BBH&action=edit&redlink=1)** | Big-Bench Hard | Average accuracy | 23 challenging reasoning tasks |
| **[AlpacaEval](/index.php?title=AlpacaEval&action=edit&redlink=1)** | Instruction following | Win rate vs baseline | 805 prompts, auto-evaluated by GPT-4 |
| **[MT-Bench](/index.php?title=MT-Bench&action=edit&redlink=1)** | Multi-turn conversations | GPT-4 rating (1-10) | 8 categories (writing, reasoning, math) |

## Advantages and Limitations

Supervised fine-tuning is a widely adopted technique due to its compelling advantages in performance and efficiency. However, it also presents significant challenges that require careful management.

### Key Advantages

- **Improved Task-Specific Performance:** The most significant benefit of SFT is the substantial improvement in a model's performance on its target task. By training on domain-specific data, the model's outputs become more accurate, relevant, and contextually appropriate compared to a general-purpose base model.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;6&#93;](#cite_note-Nebius-6)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;8&#93;](#cite_note-LabelYourData-8)

- **Resource Efficiency (vs. Training from Scratch):** Fine-tuning a pre-trained model is orders of magnitude more efficient than training a large model from the ground up. It requires significantly less data, time, and computational power, making advanced AI accessible to a broader range of organizations.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;3&#93;](#cite_note-Sapien2024-3)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;24&#93;](#cite_note-GDS-24)

- **Data Efficiency:** Because the model leverages the vast knowledge acquired during pre-training, SFT requires a comparatively small amount of task-specific labeled data to achieve high performance.[&#91;6&#93;](#cite_note-Nebius-6)

- **Faster Development and Deployment:** By building on an existing foundation, SFT dramatically accelerates the AI development lifecycle. This allows for more rapid prototyping, validation, and deployment of solutions, providing a competitive advantage.[&#91;2&#93;](#cite_note-GigaSpaces-2)[&#91;4&#93;](#cite_note-GeeksforGeeks-4)

### Common Challenges and Pitfalls

- **High Cost of Data Curation:** The primary bottleneck for SFT is often the creation of the high-quality labeled dataset. This process can be expensive and time-consuming, requiring significant human effort and domain expertise to collect, clean, and annotate the data accurately.[&#91;45&#93;](#cite_note-GradientFlow-45)[&#91;8&#93;](#cite_note-LabelYourData-8)[&#91;24&#93;](#cite_note-GDS-24)[&#91;30&#93;](#cite_note-MeegleChallenges-30)

- **Overfitting:** When fine-tuning on a small or non-diverse dataset, the model is at risk of overfitting. This occurs when the model memorizes the training examples instead of learning the underlying patterns, leading to poor performance on new, unseen data.[&#91;7&#93;](#cite_note-Sama-7)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;51&#93;](#cite_note-Lark-51)

- **[Catastrophic Forgetting](/index.php?title=Catastrophic_Forgetting&action=edit&redlink=1):** This is a major risk in fine-tuning, particularly full fine-tuning. The process of updating the model's weights to specialize in a new task can destructively overwrite the general knowledge and capabilities learned during pre-training, degrading its performance on other tasks.[&#91;29&#93;](#cite_note-MediumSFTvsPEFT-29)[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;5&#93;](#cite_note-BrightData-5)[&#91;31&#93;](#cite_note-IBMCatastrophic-31)[&#91;50&#93;](#cite_note-TeeTracker-50)

- **Bias Amplification:** Foundation models often contain societal biases present in their vast pre-training data. If the fine-tuning dataset also contains such biases (for example underrepresentation of certain demographic groups), SFT can not only inherit but also amplify these biases, resulting in unfair, inequitable, or harmful model outputs.[&#91;58&#93;](#cite_note-MeegleBias-58)[&#91;59&#93;](#cite_note-ICCVBias-59)[&#91;60&#93;](#cite_note-arXivBias1-60)[&#91;61&#93;](#cite_note-arXivBias2-61)

## Best Practices

| Do's | Don'ts |
| --- | --- |
| Use a high-quality, clean, and representative labeled dataset.[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;58&#93;](#cite_note-MeegleBias-58) | Ignore the importance of data quality; more data does not always equal better results.[&#91;30&#93;](#cite_note-MeegleChallenges-30) |
| Start with a pre-trained model that is relevant to your task.[&#91;30&#93;](#cite_note-MeegleChallenges-30) | Assume any pre-trained model is a suitable starting point. |
| Systematically optimize hyperparameters like learning rate and batch size.[&#91;30&#93;](#cite_note-MeegleChallenges-30) | Use a high learning rate without careful testing, which can lead to catastrophic forgetting.[&#91;30&#93;](#cite_note-MeegleChallenges-30) |
| Regularly validate the model's performance on a separate validation set.[&#91;30&#93;](#cite_note-MeegleChallenges-30) | Overfit the model by training for too long without monitoring validation performance.[&#91;30&#93;](#cite_note-MeegleChallenges-30) |
| Leverage data augmentation for small or imbalanced datasets.[&#91;30&#93;](#cite_note-MeegleChallenges-30) | Assume the pre-trained model is free of biases.[&#91;58&#93;](#cite_note-MeegleBias-58) |
| Monitor for and actively mitigate signs of catastrophic forgetting and bias amplification.[&#91;30&#93;](#cite_note-MeegleChallenges-30)[&#91;58&#93;](#cite_note-MeegleBias-58) | Freeze all layers indiscriminately without considering the task's nature.[&#91;30&#93;](#cite_note-MeegleChallenges-30) |

| Parameter | Full Fine-Tuning | LoRA / PEFT | Notes |
| --- | --- | --- | --- |
| **Learning Rate** | 2e-5 | 1e-4 - 3e-4 | Lower for larger batches or more complex tasks. |
| **Batch Size** | 8-16 | 4-8 | Use gradient accumulation if VRAM is limited. |
| **Epochs** | 3-5 (large data) | 15-20 (small data) | Monitor validation loss closely and use early stopping. |
| **Warmup Steps** | 3-7% of total steps | Optional | Can help stabilize training in the beginning. |
| **Weight Decay** | 0.01-0.05 | 0.01 | Standard L2 regularization to prevent overfitting. |

## Advanced Topics and Ongoing Research

The field of supervised fine-tuning is rapidly evolving as researchers work to address its fundamental limitations and improve its efficiency and robustness.

### Mitigating Catastrophic Forgetting

Catastrophic forgetting occurs because updating model weights to learn a new task can overwrite the parameters that encode previously learned knowledge.[&#91;62&#93;](#cite_note-MediumWaste-62)[&#91;31&#93;](#cite_note-IBMCatastrophic-31) This is especially problematic in full fine-tuning.[&#91;50&#93;](#cite_note-TeeTracker-50) Strategies to mitigate this include:

- **Rehearsal-based Methods:** These techniques involve mixing data from the original pre-training distribution or previously learned tasks with the new fine-tuning data. This "reminds" the model of its prior knowledge, preventing it from drifting too far.[&#91;63&#93;](#cite_note-arXivMitigatingCF-63)[&#91;50&#93;](#cite_note-TeeTracker-50)

- **Regularization Techniques:** Methods like Elastic Weight Consolidation (EWC) add a penalty term to the loss function. This penalty discourages large changes to weights that were identified as important for previous tasks, thereby anchoring the model to its prior knowledge.[&#91;31&#93;](#cite_note-IBMCatastrophic-31)[&#91;50&#93;](#cite_note-TeeTracker-50)

- **Parameter-Efficient Fine-Tuning (PEFT):** PEFT methods like LoRA are inherently more robust against catastrophic forgetting. By freezing the vast majority of the model's parameters and only training a small number of new ones, they ensure that the core knowledge of the pre-trained model remains intact.[&#91;50&#93;](#cite_note-TeeTracker-50)

### The Future of SFT: Unifying with Reinforcement Learning

The dominant paradigm for aligning advanced models has been a sequential, two-stage process: first, use SFT for task competence, then use RLHF for preference alignment. While effective, this pipeline is complex, inefficient, and involves optimizing for different objectives at each stage, which can lead to trade-offs and knowledge loss between steps.[&#91;64&#93;](#cite_note-arXivUnify1-64)[&#91;65&#93;](#cite_note-MoonlightUFT-65)

A major frontier of current research is the development of unified frameworks that integrate SFT and RLHF into a single, cohesive training process. Emerging approaches include:

- **Hybrid Loss Functions:** Techniques like **Regularized Preference Optimization (RPO)** propose a single training objective that combines a preference optimization loss (like that used in [DPO](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1)) with a standard SFT loss. This fusion helps to ground the preference learning and stabilize training.[&#91;66&#93;](#cite_note-NeurIPS_RPO-66)

- **Unified Fine-Tuning (UFT) Frameworks:** Recent work has proposed frameworks like UFT that use a generalized implicit reward function to unify the objectives of SFT and various alignment methods (like RLHF and DPO). This allows for a single-stage training process that has been shown to reduce catastrophic forgetting and improve overall performance.[&#91;65&#93;](#cite_note-MoonlightUFT-65)

## See Also

- [Artificial intelligence](/wiki/artificial_intelligence)

- [Catastrophic forgetting](/index.php?title=Catastrophic_forgetting&action=edit&redlink=1)

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1)

- [Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1) (DPO)

- [Fine-tuning (deep learning)](/index.php?title=Fine-tuning_(deep_learning)&action=edit&redlink=1)

- [Foundation model](/wiki/foundation_model)

- [Instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [Low-rank adaptation](/wiki/low-rank_adaptation) (LoRA)

- [Machine learning](/wiki/machine_learning)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Parameter-efficient fine-tuning](/index.php?title=Parameter-efficient_fine-tuning&action=edit&redlink=1) (PEFT)

- [Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF)

- [Retrieval-Augmented Generation](/index.php?title=Retrieval-Augmented_Generation&action=edit&redlink=1) (RAG)

- [Transfer learning](/wiki/transfer_learning)

## References

1. ↑ [1.0](#cite_ref-Superannotate2025_1-0) [1.1](#cite_ref-Superannotate2025_1-1) [1.2](#cite_ref-Superannotate2025_1-2) [1.3](#cite_ref-Superannotate2025_1-3) [1.4](#cite_ref-Superannotate2025_1-4) [([https://www.superannotate.com/blog/llm-fine-tuning#:~:text=Supervised%20fine%2Dtuning%20means%20updating,but%20fine%2Dtuning%20is%20supervised](https://www.superannotate.com/blog/llm-fine-tuning#:~:text=Supervised%20fine%2Dtuning%20means%20updating,but%20fine%2Dtuning%20is%20supervised)). "Fine-tuning large language models (LLMs) in 2025"].&#32;Superannotate.&#32;([https://www.superannotate.com/blog/llm-fine-tuning#:~:text=Supervised%20fine%2Dtuning%20means%20updating,but%20fine%2Dtuning%20is%20supervised](https://www.superannotate.com/blog/llm-fine-tuning#:~:text=Supervised%20fine%2Dtuning%20means%20updating,but%20fine%2Dtuning%20is%20supervised))..

2. ↑ [2.00](#cite_ref-GigaSpaces_2-0) [2.01](#cite_ref-GigaSpaces_2-1) [2.02](#cite_ref-GigaSpaces_2-2) [2.03](#cite_ref-GigaSpaces_2-3) [2.04](#cite_ref-GigaSpaces_2-4) [2.05](#cite_ref-GigaSpaces_2-5) [2.06](#cite_ref-GigaSpaces_2-6) [2.07](#cite_ref-GigaSpaces_2-7) [2.08](#cite_ref-GigaSpaces_2-8) [2.09](#cite_ref-GigaSpaces_2-9) [2.10](#cite_ref-GigaSpaces_2-10) [2.11](#cite_ref-GigaSpaces_2-11) [2.12](#cite_ref-GigaSpaces_2-12) [2.13](#cite_ref-GigaSpaces_2-13) [2.14](#cite_ref-GigaSpaces_2-14) [[[1]](https://www.gigaspaces.com/data-terms/supervised-fine-tuning)([https://www.gigaspaces.com/data-terms/supervised-fine-tuning](https://www.gigaspaces.com/data-terms/supervised-fine-tuning)) "Supervised fine-tuning"].&#32;GigaSpaces.&#32;[[2]](https://www.gigaspaces.com/data-terms/supervised-fine-tuning)([https://www.gigaspaces.com/data-terms/supervised-fine-tuning](https://www.gigaspaces.com/data-terms/supervised-fine-tuning)).

3. ↑ [3.0](#cite_ref-Sapien2024_3-0) [3.1](#cite_ref-Sapien2024_3-1) [3.2](#cite_ref-Sapien2024_3-2) [3.3](#cite_ref-Sapien2024_3-3) [3.4](#cite_ref-Sapien2024_3-4) [3.5](#cite_ref-Sapien2024_3-5) [3.6](#cite_ref-Sapien2024_3-6) [3.7](#cite_ref-Sapien2024_3-7) [[[3]](https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques)([https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques](https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques)) "What is Supervised Fine-Tuning? Overview and Techniques"].&#32;Sapien.io.&#32;[[4]](https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques)([https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques](https://www.sapien.io/blog/what-is-supervised-fine-tuning-overview-and-techniques)).

4. ↑ [4.00](#cite_ref-GeeksforGeeks_4-0) [4.01](#cite_ref-GeeksforGeeks_4-1) [4.02](#cite_ref-GeeksforGeeks_4-2) [4.03](#cite_ref-GeeksforGeeks_4-3) [4.04](#cite_ref-GeeksforGeeks_4-4) [4.05](#cite_ref-GeeksforGeeks_4-5) [4.06](#cite_ref-GeeksforGeeks_4-6) [4.07](#cite_ref-GeeksforGeeks_4-7) [4.08](#cite_ref-GeeksforGeeks_4-8) [4.09](#cite_ref-GeeksforGeeks_4-9) [4.10](#cite_ref-GeeksforGeeks_4-10) [4.11](#cite_ref-GeeksforGeeks_4-11) [4.12](#cite_ref-GeeksforGeeks_4-12) [4.13](#cite_ref-GeeksforGeeks_4-13) [4.14](#cite_ref-GeeksforGeeks_4-14) [[[5]](https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/)([https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/](https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/)) "Supervised Fine-Tuning (SFT) for LLMs"].&#32;GeeksforGeeks.&#32;[[6]](https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/)([https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/](https://www.geeksforgeeks.org/artificial-intelligence/supervised-fine-tuning-sft-for-llms/)).

5. ↑ [5.0](#cite_ref-BrightData_5-0) [5.1](#cite_ref-BrightData_5-1) [5.2](#cite_ref-BrightData_5-2) [5.3](#cite_ref-BrightData_5-3) [5.4](#cite_ref-BrightData_5-4) [5.5](#cite_ref-BrightData_5-5) [5.6](#cite_ref-BrightData_5-6) [5.7](#cite_ref-BrightData_5-7) [[[7]](https://brightdata.com/blog/ai/supervised-fine-tuning)([https://brightdata.com/blog/ai/supervised-fine-tuning](https://brightdata.com/blog/ai/supervised-fine-tuning)) "Supervised Fine-Tuning (SFT) Explained"].&#32;Bright Data.&#32;[[8]](https://brightdata.com/blog/ai/supervised-fine-tuning)([https://brightdata.com/blog/ai/supervised-fine-tuning](https://brightdata.com/blog/ai/supervised-fine-tuning)).

6. ↑ [6.00](#cite_ref-Nebius_6-0) [6.01](#cite_ref-Nebius_6-1) [6.02](#cite_ref-Nebius_6-2) [6.03](#cite_ref-Nebius_6-3) [6.04](#cite_ref-Nebius_6-4) [6.05](#cite_ref-Nebius_6-5) [6.06](#cite_ref-Nebius_6-6) [6.07](#cite_ref-Nebius_6-7) [6.08](#cite_ref-Nebius_6-8) [6.09](#cite_ref-Nebius_6-9) [6.10](#cite_ref-Nebius_6-10) [6.11](#cite_ref-Nebius_6-11) [[[9]](https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning)([https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning](https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning)) "Supervised fine-tuning"].&#32;Nebius.&#32;[[10]](https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning)([https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning](https://nebius.com/blog/posts/fine-tuning/supervised-fine-tuning)).

7. ↑ [7.0](#cite_ref-Sama_7-0) [7.1](#cite_ref-Sama_7-1) [7.2](#cite_ref-Sama_7-2) [[[11]](https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm)([https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm](https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm)) "Supervised Fine-Tuning: How to choose the right LLM"].&#32;Sama.&#32;[[12]](https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm)([https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm](https://www.sama.com/blog/supervised-fine-tuning-how-to-choose-the-right-llm)).

8. ↑ [8.0](#cite_ref-LabelYourData_8-0) [8.1](#cite_ref-LabelYourData_8-1) [8.2](#cite_ref-LabelYourData_8-2) [8.3](#cite_ref-LabelYourData_8-3) [8.4](#cite_ref-LabelYourData_8-4) [8.5](#cite_ref-LabelYourData_8-5) [8.6](#cite_ref-LabelYourData_8-6) [8.7](#cite_ref-LabelYourData_8-7) [[[13]](https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning)([https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning](https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning)) "Supervised Fine Tuning: Enhancing Your LLM Accuracy"].&#32;Label Your Data.&#32;[[14]](https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning)([https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning](https://labelyourdata.com/articles/llm-fine-tuning/supervised-fine-tuning)).

9. [↑](#cite_ref-zhang2023_9-0) Jiahui Zhang et al., "Instruction Tuning for Large Language Models: A Survey," arXiv:2308.10792, 2023. [https://arxiv.org/abs/2308.10792](https://arxiv.org/abs/2308.10792)

10. ↑ [10.0](#cite_ref-WikipediaFineTuning_10-0) [10.1](#cite_ref-WikipediaFineTuning_10-1) [10.2](#cite_ref-WikipediaFineTuning_10-2) [10.3](#cite_ref-WikipediaFineTuning_10-3) [10.4](#cite_ref-WikipediaFineTuning_10-4) [10.5](#cite_ref-WikipediaFineTuning_10-5) [[[15]](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)([https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning))](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning))) "Fine-tuning (deep learning)"].&#32;Wikipedia.&#32;[[16]](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)([https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning))](https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning))).

11. [↑](#cite_ref-Devlin2018_11-0) Devlin, Jacob&#59;&#32;Chang, Ming-Wei&#59;&#32;Lee, Kenton&#59;&#32;Toutanova, Kristina&#32;(2018).&#32;["BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"](https://arxiv.org/abs/1810.04805).&#32;[https://arxiv.org/abs/1810.04805](https://arxiv.org/abs/1810.04805).

12. ↑ [12.0](#cite_ref-Ouyang2022_12-0) [12.1](#cite_ref-Ouyang2022_12-1) Ouyang, Long&#59;&#32;Wu, Jeff&#59;&#32;Jiang, Xu&#32;(2022).&#32;["Training language models to follow instructions with human feedback"](https://arxiv.org/abs/2203.02155).&#32;[https://arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155).

13. [↑](#cite_ref-Touvron2023_13-0) Touvron, Hugo&#59;&#32;Martin, Louis&#59;&#32;Stone, Kevin&#32;(2023).&#32;["LLaMA 2: Open Foundation and Fine-Tuned Chat Models"](https://arxiv.org/abs/2307.09288).&#32;[https://arxiv.org/abs/2307.09288](https://arxiv.org/abs/2307.09288).

14. ↑ [14.0](#cite_ref-Hu2021_14-0) [14.1](#cite_ref-Hu2021_14-1) Hu, Edward J.&#59;&#32;Shen, Yelong&#59;&#32;Wallis, Phillip&#32;(2021).&#32;["LoRA: Low-Rank Adaptation of Large Language Models"](https://arxiv.org/abs/2106.09685).&#32;[https://arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685).

15. ↑ [15.0](#cite_ref-RedHat2025_15-0) [15.1](#cite_ref-RedHat2025_15-1) [15.2](#cite_ref-RedHat2025_15-2) [15.3](#cite_ref-RedHat2025_15-3) [15.4](#cite_ref-RedHat2025_15-4) [[[17]](https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats)([https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats](https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats)) "An introduction to supervised fine-tuning dataset formats"].&#32;Red Hat.&#32;[[18]](https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats)([https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats](https://developers.redhat.com/articles/2025/08/18/introduction-supervised-fine-tuning-dataset-formats)).

16. ↑ [16.0](#cite_ref-IBMInstructionTuning_16-0) [16.1](#cite_ref-IBMInstructionTuning_16-1) [16.2](#cite_ref-IBMInstructionTuning_16-2) [16.3](#cite_ref-IBMInstructionTuning_16-3) [[[19]](https://www.ibm.com/think/topics/instruction-tuning)([https://www.ibm.com/think/topics/instruction-tuning](https://www.ibm.com/think/topics/instruction-tuning)) "What is instruction tuning?"].&#32;IBM.&#32;[[20]](https://www.ibm.com/think/topics/instruction-tuning)([https://www.ibm.com/think/topics/instruction-tuning](https://www.ibm.com/think/topics/instruction-tuning)).

17. ↑ [17.0](#cite_ref-InvisibleTech_17-0) [17.1](#cite_ref-InvisibleTech_17-1) [17.2](#cite_ref-InvisibleTech_17-2) [[[21]](https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm)([https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm](https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm)) "Supervised Fine-Tuning vs. RLHF: How to Choose the Right Approach to Train Your LLM"].&#32;Invisible Technologies.&#32;[[22]](https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm)([https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm](https://invisibletech.ai/blog/supervised-fine-tuning-vs-rlhf-how-to-choose-the-right-approach-to-train-your-llm)).

18. ↑ [18.0](#cite_ref-CleverX_18-0) [18.1](#cite_ref-CleverX_18-1) [18.2](#cite_ref-CleverX_18-2) [18.3](#cite_ref-CleverX_18-3) [18.4](#cite_ref-CleverX_18-4) [[[23]](https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm)([https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm](https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm)) "Supervised Fine-Tuning vs. RLHF: Choosing the Right Path to Train Your LLM"].&#32;CleverX.&#32;[[24]](https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm)([https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm](https://cleverx.com/blog/supervised-fine-tuning-vs-rlhf-choosing-the-right-path-to-train-your-llm)).

19. ↑ [19.0](#cite_ref-OpenAIDocs_19-0) [19.1](#cite_ref-OpenAIDocs_19-1) [19.2](#cite_ref-OpenAIDocs_19-2) [19.3](#cite_ref-OpenAIDocs_19-3) [19.4](#cite_ref-OpenAIDocs_19-4) [[[25]](https://platform.openai.com/docs/guides/supervised-fine-tuning)([https://platform.openai.com/docs/guides/supervised-fine-tuning](https://platform.openai.com/docs/guides/supervised-fine-tuning)) "Supervised fine-tuning"].&#32;OpenAI.&#32;[[26]](https://platform.openai.com/docs/guides/supervised-fine-tuning)([https://platform.openai.com/docs/guides/supervised-fine-tuning](https://platform.openai.com/docs/guides/supervised-fine-tuning)).

20. ↑ [20.0](#cite_ref-Turing_20-0) [20.1](#cite_ref-Turing_20-1) [20.2](#cite_ref-Turing_20-2) [20.3](#cite_ref-Turing_20-3) [[[27]](https://www.turing.com/resources/finetuning-large-language-models)([https://www.turing.com/resources/finetuning-large-language-models](https://www.turing.com/resources/finetuning-large-language-models)) "A comprehensive guide to fine-tuning large language models"].&#32;Turing.&#32;[[28]](https://www.turing.com/resources/finetuning-large-language-models)([https://www.turing.com/resources/finetuning-large-language-models](https://www.turing.com/resources/finetuning-large-language-models)).

21. ↑ [21.0](#cite_ref-DataCamp_21-0) [21.1](#cite_ref-DataCamp_21-1) [[[29]](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)([https://www.datacamp.com/tutorial/fine-tuning-large-language-models](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)) "Fine-Tuning Large Language Models"].&#32;DataCamp.&#32;[[30]](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)([https://www.datacamp.com/tutorial/fine-tuning-large-language-models](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)).

22. ↑ [22.0](#cite_ref-ThunderCompute_22-0) [22.1](#cite_ref-ThunderCompute_22-1) [[[31]](https://www.thundercompute.com/blog/supervised-fine-tuning-guide)([https://www.thundercompute.com/blog/supervised-fine-tuning-guide](https://www.thundercompute.com/blog/supervised-fine-tuning-guide)) "The Ultimate Guide to Supervised Fine-Tuning (SFT)"].&#32;ThunderCompute.&#32;[[32]](https://www.thundercompute.com/blog/supervised-fine-tuning-guide)([https://www.thundercompute.com/blog/supervised-fine-tuning-guide](https://www.thundercompute.com/blog/supervised-fine-tuning-guide)).

23. ↑ [23.0](#cite_ref-GoogleCloudData_23-0) [23.1](#cite_ref-GoogleCloudData_23-1) [23.2](#cite_ref-GoogleCloudData_23-2) [23.3](#cite_ref-GoogleCloudData_23-3) [[[33]](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare)([https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare)) "Prepare supervised fine-tuning data for Gemini models"].&#32;Google Cloud.&#32;[[34]](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare)([https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini-supervised-tuning-prepare)).

24. ↑ [24.0](#cite_ref-GDS_24-0) [24.1](#cite_ref-GDS_24-1) [24.2](#cite_ref-GDS_24-2) [24.3](#cite_ref-GDS_24-3) [[[35]](https://www.gdsonline.tech/sft-vs-rlhf/)([https://www.gdsonline.tech/sft-vs-rlhf/](https://www.gdsonline.tech/sft-vs-rlhf/)) "SFT vs RLHF: When and How to Choose the Right LLM Training Method"].&#32;GDS.&#32;[[36]](https://www.gdsonline.tech/sft-vs-rlhf/)([https://www.gdsonline.tech/sft-vs-rlhf/](https://www.gdsonline.tech/sft-vs-rlhf/)).

25. [↑](#cite_ref-OpenReviewGEM_25-0) [([https://openreview.net/forum?id=NQEe7B7bSw](https://openreview.net/forum?id=NQEe7B7bSw)) "GEM: a game-theoretic framework for SFT that preserves diversity"].&#32;OpenReview.&#32;([https://openreview.net/forum?id=NQEe7B7bSw](https://openreview.net/forum?id=NQEe7B7bSw)).

26. [↑](#cite_ref-ICLRGEM_26-0) [[[37]](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)([https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)) "GEM: a game-theoretic framework for SFT that preserves diversity"].&#32;ICLR.&#32;[[38]](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)([https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf](https://proceedings.iclr.cc/paper_files/paper/2025/file/a548ef984f30bca3abdc09f43743827f-Paper-Conference.pdf)).

27. [↑](#cite_ref-EmergentMind_27-0) [[[39]](https://www.emergentmind.com/topics/supervised-finetuning-sft)([https://www.emergentmind.com/topics/supervised-finetuning-sft](https://www.emergentmind.com/topics/supervised-finetuning-sft)) "Supervised Finetuning (SFT)"].&#32;Emergent Mind.&#32;[[40]](https://www.emergentmind.com/topics/supervised-finetuning-sft)([https://www.emergentmind.com/topics/supervised-finetuning-sft](https://www.emergentmind.com/topics/supervised-finetuning-sft)).

28. ↑ [28.0](#cite_ref-UBIAI_28-0) [28.1](#cite_ref-UBIAI_28-1) [28.2](#cite_ref-UBIAI_28-2) [28.3](#cite_ref-UBIAI_28-3) [28.4](#cite_ref-UBIAI_28-4) [28.5](#cite_ref-UBIAI_28-5) [28.6](#cite_ref-UBIAI_28-6) [[[41]](https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/)([https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/](https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/)) "Supervised Fine-Tuning 101: Strategies Every ML Engineer Should Know"].&#32;UBIAI.&#32;[[42]](https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/)([https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/](https://ubiai.tools/supervised-fine-tuning-101-strategies-every-ml-engineer-should-know/)).

29. ↑ [29.0](#cite_ref-MediumSFTvsPEFT_29-0) [29.1](#cite_ref-MediumSFTvsPEFT_29-1) [29.2](#cite_ref-MediumSFTvsPEFT_29-2) [29.3](#cite_ref-MediumSFTvsPEFT_29-3) [29.4](#cite_ref-MediumSFTvsPEFT_29-4) [29.5](#cite_ref-MediumSFTvsPEFT_29-5) [29.6](#cite_ref-MediumSFTvsPEFT_29-6) [29.7](#cite_ref-MediumSFTvsPEFT_29-7) [[[43]](https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a)([https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a](https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a)) "SFT vs DFO vs PEFT vs GRPO: Choosing the Right Fine-Tuning Strategy for LLMs"].&#32;Medium.&#32;[[44]](https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a)([https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a](https://bobrupakroy.medium.com/sft-vs-dfo-vs-peft-vs-grpo-choosing-the-right-fine-tuning-strategy-for-llms-3a7671c9347a)).

30. ↑ [30.00](#cite_ref-MeegleChallenges_30-0) [30.01](#cite_ref-MeegleChallenges_30-1) [30.02](#cite_ref-MeegleChallenges_30-2) [30.03](#cite_ref-MeegleChallenges_30-3) [30.04](#cite_ref-MeegleChallenges_30-4) [30.05](#cite_ref-MeegleChallenges_30-5) [30.06](#cite_ref-MeegleChallenges_30-6) [30.07](#cite_ref-MeegleChallenges_30-7) [30.08](#cite_ref-MeegleChallenges_30-8) [30.09](#cite_ref-MeegleChallenges_30-9) [30.10](#cite_ref-MeegleChallenges_30-10) [30.11](#cite_ref-MeegleChallenges_30-11) [30.12](#cite_ref-MeegleChallenges_30-12) [30.13](#cite_ref-MeegleChallenges_30-13) [30.14](#cite_ref-MeegleChallenges_30-14) [30.15](#cite_ref-MeegleChallenges_30-15) [30.16](#cite_ref-MeegleChallenges_30-16) [30.17](#cite_ref-MeegleChallenges_30-17) [30.18](#cite_ref-MeegleChallenges_30-18) [30.19](#cite_ref-MeegleChallenges_30-19) [30.20](#cite_ref-MeegleChallenges_30-20) [[[45]](https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning)([https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning](https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning)) "Challenges in Supervised Fine-Tuning"].&#32;Meegle.&#32;[[46]](https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning)([https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning](https://www.meegle.com/en_us/topics/supervised-fine-tuning/challenges-in-supervised-fine-tuning)).

31. ↑ [31.0](#cite_ref-IBMCatastrophic_31-0) [31.1](#cite_ref-IBMCatastrophic_31-1) [31.2](#cite_ref-IBMCatastrophic_31-2) [31.3](#cite_ref-IBMCatastrophic_31-3) [[[47]](https://www.ibm.com/think/topics/catastrophic-forgetting)([https://www.ibm.com/think/topics/catastrophic-forgetting](https://www.ibm.com/think/topics/catastrophic-forgetting)) "What is catastrophic forgetting?"].&#32;IBM.&#32;[[48]](https://www.ibm.com/think/topics/catastrophic-forgetting)([https://www.ibm.com/think/topics/catastrophic-forgetting](https://www.ibm.com/think/topics/catastrophic-forgetting)).

32. ↑ [32.0](#cite_ref-zhou2024_32-0) [32.1](#cite_ref-zhou2024_32-1) Zhou, Chunting&#32;(2024).&#32;["LIMA: Less Is More for Alignment"](https://arxiv.org/abs/2305.11206).&#32;[https://arxiv.org/abs/2305.11206](https://arxiv.org/abs/2305.11206).

33. ↑ [33.0](#cite_ref-SelfInstructMedium_33-0) [33.1](#cite_ref-SelfInstructMedium_33-1) [33.2](#cite_ref-SelfInstructMedium_33-2) [[[49]](https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6)([https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6](https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6)) "Brief Review: SELF-INSTRUCT: Aligning Language Models with Self-Generated Instructions"].&#32;Medium.&#32;[[50]](https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6)([https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6](https://sh-tsang.medium.com/brief-review-self-instruct-aligning-language-models-with-self-generated-instructions-aade44dbc0f6)).

34. ↑ [34.0](#cite_ref-SelfInstructGitHub_34-0) [34.1](#cite_ref-SelfInstructGitHub_34-1) [[[51]](https://github.com/yizhongw/self-instruct)([https://github.com/yizhongw/self-instruct](https://github.com/yizhongw/self-instruct)) "Self-Instruct: Aligning LM with Self Generated Instructions"].&#32;GitHub.&#32;[[52]](https://github.com/yizhongw/self-instruct)([https://github.com/yizhongw/self-instruct](https://github.com/yizhongw/self-instruct)).

35. ↑ [35.0](#cite_ref-LLaMAAdapter_35-0) [35.1](#cite_ref-LLaMAAdapter_35-1) [35.2](#cite_ref-LLaMAAdapter_35-2) [[[53]](https://arxiv.org/pdf/2303.16199)([https://arxiv.org/pdf/2303.16199](https://arxiv.org/pdf/2303.16199)) "LLaMA-Adapter: Efficient Fine-tuning of LLaMA with Zero-init Attention"].&#32;arXiv.&#32;[[54]](https://arxiv.org/pdf/2303.16199)([https://arxiv.org/pdf/2303.16199](https://arxiv.org/pdf/2303.16199)).

36. ↑ [36.0](#cite_ref-AlpacaDataset_36-0) [36.1](#cite_ref-AlpacaDataset_36-1) [[[55]](https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset)([https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset](https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset)) "Alpaca dataset"].&#32;Stanford CRFM.&#32;[[56]](https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset)([https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset](https://crfm.stanford.edu/ecosystem-graphs/index.html?asset=Alpaca%20dataset)).

37. [↑](#cite_ref-DollyKaggle1_37-0) [[[57]](https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k)([https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k](https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k)) "databricks-dolly-15k"].&#32;Kaggle.&#32;[[58]](https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k)([https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k](https://www.kaggle.com/datasets/yousefsaeedian/databricksdatabricks-dolly-15k)).

38. ↑ [38.0](#cite_ref-DollyKaggle2_38-0) [38.1](#cite_ref-DollyKaggle2_38-1) [[[59]](https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset)([https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset](https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset)) "Databricks Dolly 15k Dataset"].&#32;Kaggle.&#32;[[60]](https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset)([https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset](https://www.kaggle.com/datasets/snehilsanyal/databricks-dolly-15k-dataset)).

39. [↑](#cite_ref-OASSTKaggle_39-0) [[[61]](https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset)([https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset](https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset)) "Multilingual Conversation Dataset"].&#32;Kaggle.&#32;[[62]](https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset)([https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset](https://www.kaggle.com/datasets/thedevastator/multilingual-conversation-dataset)).

40. [↑](#cite_ref-OASSTHuggingFace_40-0) [[[63]](https://huggingface.co/datasets/OpenAssistant/oasst1)([https://huggingface.co/datasets/OpenAssistant/oasst1](https://huggingface.co/datasets/OpenAssistant/oasst1)) "OpenAssistant Conversations Dataset (OASST1)"].&#32;Hugging Face.&#32;[[64]](https://huggingface.co/datasets/OpenAssistant/oasst1)([https://huggingface.co/datasets/OpenAssistant/oasst1](https://huggingface.co/datasets/OpenAssistant/oasst1)).

41. ↑ [41.0](#cite_ref-WordpressPEFT_41-0) [41.1](#cite_ref-WordpressPEFT_41-1) [41.2](#cite_ref-WordpressPEFT_41-2) [41.3](#cite_ref-WordpressPEFT_41-3) [[[65]](https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/)([https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/](https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/)) "Unlocking the Power of LLMs: A Comparative Guide to Efficient Fine-Tuning Techniques"].&#32;WordPress.&#32;[[66]](https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/)([https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/](https://didyouknowbg8.wordpress.com/2024/05/18/unlocking-the-power-of-llms-a-comparative-guide-to-efficient-fine-tuning-techniques/)).

42. ↑ [42.0](#cite_ref-InstructionTuningSurvey_42-0) [42.1](#cite_ref-InstructionTuningSurvey_42-1) [[[67]](https://arxiv.org/html/2308.10792v5)([https://arxiv.org/html/2308.10792v5](https://arxiv.org/html/2308.10792v5)) "A Survey on Instruction Tuning for Large Language Models"].&#32;arXiv.&#32;[[68]](https://arxiv.org/html/2308.10792v5)([https://arxiv.org/html/2308.10792v5](https://arxiv.org/html/2308.10792v5)).

43. [↑](#cite_ref-StackOverflowSFT_43-0) [[[69]](https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m)([https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m](https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m)) "Difference between instruction tuning vs non-instruction tuning large language model"].&#32;Stack Overflow.&#32;[[70]](https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m)([https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m](https://stackoverflow.com/questions/76451205/difference-between-instruction-tuning-vs-non-instruction-tuning-large-language-m)).

44. ↑ [44.0](#cite_ref-FLANGitHub_44-0) [44.1](#cite_ref-FLANGitHub_44-1) [[[71]](https://github.com/google-research/FLAN)([https://github.com/google-research/FLAN](https://github.com/google-research/FLAN)) "The FLAN Instruction Tuning Repository"].&#32;GitHub.&#32;[[72]](https://github.com/google-research/FLAN)([https://github.com/google-research/FLAN](https://github.com/google-research/FLAN)).

45. ↑ [45.0](#cite_ref-GradientFlow_45-0) [45.1](#cite_ref-GradientFlow_45-1) [[[73]](https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/)([https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/](https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/)) "From Supervised Fine Tuning to Online Feedback"].&#32;GradientFlow.&#32;[[74]](https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/)([https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/](https://gradientflow.com/from-supervised-fine-tuning-to-online-feedback/)).

46. ↑ [46.0](#cite_ref-InstructGPTReview_46-0) [46.1](#cite_ref-InstructGPTReview_46-1) [[[75]](https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/)([https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/](https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/)) "A Review of Ouyang et al.’s 2022 Paper (aka InstructGPT)"].&#32;The ETC Journal.&#32;[[76]](https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/)([https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/](https://etcjournal.com/2025/07/29/a-review-of-ouyang-et-al-s-2022-paper-aka-instructgpt/)).

47. ↑ [47.0](#cite_ref-MediumPEFT_47-0) [47.1](#cite_ref-MediumPEFT_47-1) [47.2](#cite_ref-MediumPEFT_47-2) [[[77]](https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989)([https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989](https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989)) "Large Language Model Fine-Tuning Techniques"].&#32;Medium.&#32;[[78]](https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989)([https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989](https://msuryavanshi.medium.com/large-language-model-fine-tuning-techniques-df8975396989)).

48. [↑](#cite_ref-HuggingFaceQLoRA_48-0) [[[79]](https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581)([https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581](https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581)) "Llama2 fine-tunning with PEFT (QLoRA) and testing the model"].&#32;Hugging Face.&#32;[[80]](https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581)([https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581](https://discuss.huggingface.co/t/llama2-fine-tunning-with-peft-qlora-and-testing-the-model/50581)).

49. [↑](#cite_ref-RabilooQLoRA_49-0) [[[81]](https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora)([https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora](https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora)) "A Step-by-Step Guide to Fine-Tuning Llama 3 Using LoRA and QLoRA"].&#32;Rabiloo.&#32;[[82]](https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora)([https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora](https://rabiloo.com/blog/a-step-by-step-guide-to-fine-tuning-llama-3-using-lora-and-qlora)).

50. ↑ [50.0](#cite_ref-TeeTracker_50-0) [50.1](#cite_ref-TeeTracker_50-1) [50.2](#cite_ref-TeeTracker_50-2) [50.3](#cite_ref-TeeTracker_50-3) [50.4](#cite_ref-TeeTracker_50-4) [50.5](#cite_ref-TeeTracker_50-5) [[[83]](https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0)([https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0](https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0)) "Fine-Tuning LLMs"].&#32;Medium.&#32;[[84]](https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0)([https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0](https://teetracker.medium.com/fine-tuning-llms-9fe553a514d0)).

51. ↑ [51.0](#cite_ref-Lark_51-0) [51.1](#cite_ref-Lark_51-1) [[[85]](https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning)([https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning](https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning)) "What is Supervised Fine-Tuning?"].&#32;Lark.&#32;[[86]](https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning)([https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning](https://www.larksuite.com/en_us/topics/ai-glossary/supervised-fine-tuning)).

52. ↑ [52.0](#cite_ref-FLANPaper_52-0) [52.1](#cite_ref-FLANPaper_52-1) [([https://openreview.net/forum?id=gEZrGCozdqR](https://openreview.net/forum?id=gEZrGCozdqR)) "Finetuned Language Models are Zero-Shot Learners"].&#32;OpenReview.&#32;([https://openreview.net/forum?id=gEZrGCozdqR](https://openreview.net/forum?id=gEZrGCozdqR)).

53. [↑](#cite_ref-FLANPaLMMedium_53-0) [[[87]](https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882)([https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882](https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882)) "Brief Review: Flan-PaLM: Scaling Instruction-Finetuned Language Models"].&#32;Medium.&#32;[[88]](https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882)([https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882](https://sh-tsang.medium.com/brief-review-flan-palm-scaling-instruction-finetuned-language-models-79f47cbcb882)).

54. [↑](#cite_ref-FLANScalePaper_54-0) [[[89]](https://arxiv.org/abs/2210.11416)([https://arxiv.org/abs/2210.11416](https://arxiv.org/abs/2210.11416)) "Scaling Instruction-Finetuned Language Models"].&#32;arXiv.&#32;[[90]](https://arxiv.org/abs/2210.11416)([https://arxiv.org/abs/2210.11416](https://arxiv.org/abs/2210.11416)).

55. [↑](#cite_ref-DollyGitHub_55-0) [[[91]](https://github.com/databrickslabs/dolly)([https://github.com/databrickslabs/dolly](https://github.com/databrickslabs/dolly)) "Dolly"].&#32;GitHub.&#32;[[92]](https://github.com/databrickslabs/dolly)([https://github.com/databrickslabs/dolly](https://github.com/databrickslabs/dolly)).

56. [↑](#cite_ref-wolf2020_56-0) Thomas Wolf et al., "Transformers: State-of-the-Art Natural Language Processing," 2020. [https://arxiv.org/abs/1910.03771](https://arxiv.org/abs/1910.03771)

57. [↑](#cite_ref-peft2024_57-0) Hugging Face, "PEFT: Parameter-Efficient Fine-Tuning," 2024. [https://github.com/huggingface/peft](https://github.com/huggingface/peft)

58. ↑ [58.0](#cite_ref-MeegleBias_58-0) [58.1](#cite_ref-MeegleBias_58-1) [58.2](#cite_ref-MeegleBias_58-2) [58.3](#cite_ref-MeegleBias_58-3) [[[93]](https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction)([https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction](https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction)) "Supervised Fine-Tuning for Model Bias Reduction"].&#32;Meegle.&#32;[[94]](https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction)([https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction](https://www.meegle.com/en_us/topics/supervised-fine-tuning/supervised-fine-tuning-for-model-bias-reduction)).

59. [↑](#cite_ref-ICCVBias_59-0) [([https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_Overwriting_Pretrained_Bias_with_Finetuning_Data_ICCV_2023_paper.pdf](https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_Overwriting_Pretrained_Bias_with_Finetuning_Data_ICCV_2023_paper.pdf)) "Overwriting Pretrained Bias with Finetuning Data"].&#32;ICCV.&#32;([https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_Overwriting_Pretrained_Bias_with_Finetuning_Data_ICCV_2023_paper.pdf](https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_Overwriting_Pretrained_Bias_with_Finetuning_Data_ICCV_2023_paper.pdf)).

60. [↑](#cite_ref-arXivBias1_60-0) [[[95]](https://arxiv.org/html/2410.15234v3)([https://arxiv.org/html/2410.15234v3](https://arxiv.org/html/2410.15234v3)) "Understanding and Mitigating Bias Amplification in LLMs"].&#32;arXiv.&#32;[[96]](https://arxiv.org/html/2410.15234v3)([https://arxiv.org/html/2410.15234v3](https://arxiv.org/html/2410.15234v3)).

61. [↑](#cite_ref-arXivBias2_61-0) [[[97]](https://arxiv.org/html/2502.04419v2)([https://arxiv.org/html/2502.04419v2](https://arxiv.org/html/2502.04419v2)) "Bias Inheritance in LLM-based Data Augmentation"].&#32;arXiv.&#32;[[98]](https://arxiv.org/html/2502.04419v2)([https://arxiv.org/html/2502.04419v2](https://arxiv.org/html/2502.04419v2)).

62. [↑](#cite_ref-MediumWaste_62-0) [[[99]](https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282)([https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282](https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282)) "Fine-Tuning LLMs is a Huge Waste of Time"].&#32;Medium.&#32;[[100]](https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282)([https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282](https://machine-learning-made-simple.medium.com/fine-tuning-llms-is-a-huge-waste-of-time-bd0b98fcc282)).

63. [↑](#cite_ref-arXivMitigatingCF_63-0) [[[101]](https://arxiv.org/html/2506.09428v2)([https://arxiv.org/html/2506.09428v2](https://arxiv.org/html/2506.09428v2)) "Mitigating Catastrophic Forgetting in SFT without Access to the Original SFT Data"].&#32;arXiv.&#32;[[102]](https://arxiv.org/html/2506.09428v2)([https://arxiv.org/html/2506.09428v2](https://arxiv.org/html/2506.09428v2)).

64. [↑](#cite_ref-arXivUnify1_64-0) [[[103]](https://arxiv.org/html/2405.11870v1)([https://arxiv.org/html/2405.11870v1](https://arxiv.org/html/2405.11870v1)) "Intuitive Fine-Tuning: Towards Unifying SFT and RLHF into a Single Process"].&#32;arXiv.&#32;[[104]](https://arxiv.org/html/2405.11870v1)([https://arxiv.org/html/2405.11870v1](https://arxiv.org/html/2405.11870v1)).

65. ↑ [65.0](#cite_ref-MoonlightUFT_65-0) [65.1](#cite_ref-MoonlightUFT_65-1) [[[105]](https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function)([https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function](https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function)) "UFT: Unifying Fine-Tuning of SFT and RLHF/DPO/UNA through a Generalized Implicit Reward Function"].&#32;The Moonlight.&#32;[[106]](https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function)([https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function](https://www.themoonlight.io/en/review/uft-unifying-fine-tuning-of-sft-and-rlhfdpouna-through-a-generalized-implicit-reward-function)).

66. [↑](#cite_ref-NeurIPS_RPO_66-0) [[[107]](https://neurips.cc/virtual/2024/poster/96805)([https://neurips.cc/virtual/2024/poster/96805](https://neurips.cc/virtual/2024/poster/96805)) "Provably Mitigating Overoptimization in RLHF: Your SFT Loss is All You Need"].&#32;NeurIPS.&#32;[[108]](https://neurips.cc/virtual/2024/poster/96805)([https://neurips.cc/virtual/2024/poster/96805](https://neurips.cc/virtual/2024/poster/96805)).