---
title: "Post-training"
slug: "post-training"
categories:
  - "Machine_learning"
  - "Natural_language_processing"
  - "Artificial_intelligence"
  - "Large_language_models"
  - "Deep_learning"
---[Template:Infobox AI technique](/index.php?title=Template:Infobox_AI_technique&action=edit&redlink=1)

**Post-training** is a critical phase in [large language model](/wiki/large_language_model) (LLM) development that transforms general-purpose [foundation models](/wiki/foundation_models) into aligned, helpful, and safe [AI assistants](/index.php?title=AI_assistants&action=edit&redlink=1) through techniques including [supervised fine-tuning](/wiki/supervised_fine-tuning), [reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF), and preference optimization.[&#91;1&#93;](#cite_note-pytorch-1) This phase bridges the gap between raw language understanding acquired during [pre-training](/wiki/pre-training) and practical utility for real-world applications.[&#91;2&#93;](#cite_note-deeplearning-2)

While [pre-training](/wiki/pre-training) creates foundation models by learning from trillions of tokens, post-training refines behavior using millions of carefully curated examples—typically requiring just 1-2% of pre-training compute yet determining whether a model becomes truly useful.[&#91;3&#93;](#cite_note-raschka-3) The field has evolved rapidly from 2022's RLHF breakthroughs with [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) to 2023's [Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1) simplifications, and now 2024-2025's reasoning models using reinforcement learning with verifiable rewards.[&#91;4&#93;](#cite_note-kumar2025-4)

## Definition

Post-training refers to the collection of processes and techniques applied to a model *after* its initial, large-scale [pre-training](/wiki/pre-training) phase. According to DeepLearning.AI, post-training "transforms a general-purpose token predictor—trained on trillions of unlabeled text tokens—into an assistant that follows instructions and performs specific tasks."[&#91;2&#93;](#cite_note-deeplearning-2) This crucial stage transforms a general-purpose foundation model into a specialized, efficient, and aligned tool ready for real-world deployment.[&#91;5&#93;](#cite_note-ainavigator-5)

The [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) Foundation defines post-training (sometimes called "alignment") as "a key component of modern LLMs, and the way to 'teach' models how to answer in a way that humans like, and how to reason."[&#91;1&#93;](#cite_note-pytorch-1) This phase addresses fundamental limitations that emerge from pre-training alone:

- Base models don't naturally understand conversational structure

- Can generate toxic or harmful content

- Produce confident [hallucinations](/index.php?title=Hallucinations&action=edit&redlink=1)

- Lack awareness of when to refuse inappropriate requests

### Why post-training is necessary

Pre-trained architectures reveal significant limitations in specialized contexts, including restricted reasoning capacities, ethical uncertainties, and suboptimal domain-specific performance.[&#91;6&#93;](#cite_note-survey2025-6) [OpenAI](/wiki/openai)'s InstructGPT research demonstrated this dramatically: their 1.3B parameter post-trained model was preferred by humans over the 175B parameter [GPT-3](/wiki/gpt-3) base model—despite being 100 times smaller—because post-training unlocked capabilities that [prompt engineering](/wiki/prompt_engineering) alone couldn't elicit.[&#91;7&#93;](#cite_note-instructgpt-7)

### Post-training in the development pipeline

Modern LLM development follows a structured sequence:

1. **[Pre-training](/wiki/pre-training)** (weeks to months, consuming millions of GPU-hours on trillions of tokens) builds general language understanding

2. **Post-training** (days to weeks, using thousands to millions of curated examples) develops instruction-following, alignment, and specialized capabilities

Recent models employ sophisticated multi-stage approaches—[Llama 3](/index.php?title=Llama_3&action=edit&redlink=1) used three pre-training stages (15.6T core tokens, 800B context extension tokens, 40M annealing tokens) followed by multiple post-training rounds combining [supervised fine-tuning](/wiki/supervised_fine-tuning), rejection sampling, and [Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1).[&#91;3&#93;](#cite_note-raschka-3)

## Pre-training vs Post-training

[Pre-training](/wiki/pre-training) and post-training are complementary phases in the development of modern AI models, especially large models. Pre-training is the process where a model learns from a very large dataset to acquire general knowledge or representations, often without any task-specific supervision. Post-training occurs *after* this initial learning and focuses on specialization and refinement for particular objectives.

| Aspect | Pre-training | Post-training |
| --- | --- | --- |
| **Purpose** | Learn general patterns and representations from large-scale data | Refine and adapt the model for specific tasks, objectives, or constraints |
| **Data** | Vast, diverse, often unlabeled datasets (for example Common Crawl text, ImageNet) | Smaller, focused datasets tailored to target task or domain |
| **Duration & Compute** | Most resource-intensive phase, requiring extensive computation (large GPU/TPU clusters) and time (days to weeks or more) | Shorter and less costly than pre-training; uses fewer resources and can be completed in hours to days |
| **Outcome** | A general-purpose model (foundation model) that can be adapted to various tasks | A task-optimized model tuned for particular application with improved performance and alignment |
| **Generalization vs. Specialization** | Emphasizes broad generalization across many tasks and domains | Emphasizes high performance on specific target task(s) |
| **Frequency** | Usually done once to create a base model | Can be done multiple times or continuously as new data or requirements emerge |

## Core techniques

### Supervised fine-tuning

[Supervised Fine-Tuning](/index.php?title=Supervised_Fine-Tuning&action=edit&redlink=1) (SFT) serves as the foundational post-training technique, training models on high-quality input-output pairs where responses have been verified beforehand. The PyTorch primer describes SFT's focus as "imitation"—teaching the model to learn ideal responses step by step through structured examples.[&#91;1&#93;](#cite_note-pytorch-1)

The technical process resembles pre-training but with a critical difference: loss is calculated only on response tokens, not prompts. Training data follows the format (system_prompt, user_input, ideal_response), and while the entire sequence passes through the model for context, gradient updates occur only on the assistant's response portion.

#### Data requirements and scale

| Model | SFT Examples | Epochs |
| --- | --- | --- |
| [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) | 13,000 | 1 |
| [Qwen 2](/index.php?title=Qwen_2&action=edit&redlink=1) | 500,000 | 2 |
| [Llama 3.1](/index.php?title=Llama_3.1&action=edit&redlink=1) | ~1M synthetic | Multiple |

[OpenAI](/wiki/openai)'s InstructGPT used approximately 13,000 training prompts for SFT—a tiny fraction compared to pre-training datasets.[&#91;7&#93;](#cite_note-instructgpt-7) More recent models use larger SFT datasets, with synthetic data generation using larger teacher models becoming standard practice.

### Reinforcement learning from human feedback

[RLHF](/wiki/rlhf) represents a paradigm shift in post-training, using human preferences as reward signals to align model behavior with complex human values difficult to specify algorithmically.[&#91;8&#93;](#cite_note-huggingface-8) The technique follows a three-stage process pioneered by [OpenAI](/wiki/openai)'s InstructGPT paper in March 2022:

1. **Stage one**: [Supervised fine-tuning](/wiki/supervised_fine-tuning) on human demonstrations establishes a baseline instruction-following model

2. **Stage two**: Training a reward model by collecting human preference data—labelers compare multiple model outputs for the same prompt and rank them

3. **Stage three**: [Reinforcement learning](/wiki/reinforcement_learning) optimization using algorithms like [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO)

InstructGPT collected 33,000 preference comparisons, training a reward model to predict which outputs humans prefer using the Bradley-Terry preference model.[&#91;7&#93;](#cite_note-instructgpt-7)

#### PPO mechanics

The algorithm uses importance sampling to compare new and old policy outputs, clips the ratio to prevent excessive updates (typically within 1±ε where ε=0.2), and combines this with advantage estimation, value function training, and entropy bonuses for exploration.[&#91;1&#93;](#cite_note-pytorch-1) PPO achieves stability through a *clipped surrogate objective function*. At each update step, it compares the probability of an action under the new policy to that of the old policy. If this ratio becomes too large or too small, the objective function "clips" the update, preventing large, destabilizing changes.

#### Infrastructure demands

RLHF requires running multiple models simultaneously:

- The policy model generating responses

- A reference model computing KL penalties

- The reward model scoring outputs

- Optionally a critic network for value estimation

This creates significant computational overhead—[NVIDIA](/wiki/nvidia) research found that developing derivative models through post-training could consume 30x more compute than the original pre-training.[&#91;9&#93;](#cite_note-nvidia-9)

### Direct preference optimization

[Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1) (DPO) emerged in May 2023 as a transformative simplification of RLHF, eliminating the need for explicit reward models and reinforcement learning while achieving comparable or superior performance.[&#91;10&#93;](#cite_note-dpo-10) The Stanford research team showed that language models can implicitly represent reward models, enabling direct optimization through a classification loss.

#### Technical innovation

DPO reformulates the RLHF objective into supervised learning using preference pairs: (prompt, preferred_response, rejected_response). The loss function maximizes the log-odds ratio between preferred and rejected responses while maintaining [KL divergence](/index.php?title=KL_divergence&action=edit&redlink=1) constraints to a reference model.[&#91;10&#93;](#cite_note-dpo-10)

The DPO loss function is formulated as:

  
    
      
        
          
            
              L
            
          
          
            DPO
          
        
        (
        
          &#x03C0;
          
            &#x03B8;
          
        
        ,
        
          &#x03C0;
          
            ref
          
        
        )
        =
        &#x2212;
        
          
            E
          
          
            (
            x
            ,
            
              y
              
                w
              
            
            ,
            
              y
              
                l
              
            
            )
            &#x223C;
            
              
                D
              
            
          
        
        
          [
          
            log
            &#x2061;
            &#x03C3;
            
              (
              
                &#x03B2;
                log
                &#x2061;
                
                  
                    
                      
                        &#x03C0;
                        
                          &#x03B8;
                        
                      
                      (
                      
                        y
                        
                          w
                        
                      
                      &#x2223;
                      x
                      )
                    
                    
                      
                        &#x03C0;
                        
                          ref
                        
                      
                      (
                      
                        y
                        
                          w
                        
                      
                      &#x2223;
                      x
                      )
                    
                  
                
                &#x2212;
                &#x03B2;
                log
                &#x2061;
                
                  
                    
                      
                        &#x03C0;
                        
                          &#x03B8;
                        
                      
                      (
                      
                        y
                        
                          l
                        
                      
                      &#x2223;
                      x
                      )
                    
                    
                      
                        &#x03C0;
                        
                          ref
                        
                      
                      (
                      
                        y
                        
                          l
                        
                      
                      &#x2223;
                      x
                      )
                    
                  
                
              
              )
            
          
          ]
        
      
    
    {\displaystyle {\mathcal {L}}_{\text{DPO}}(\pi _{\theta },\pi _{\text{ref}})=-\mathbb {E} _{(x,y_{w},y_{l})\sim {\mathcal {D}}}\left[\log \sigma \left(\beta \log {\frac {\pi _{\theta }(y_{w}\mid x)}{\pi _{\text{ref}}(y_{w}\mid x)}}-\beta \log {\frac {\pi _{\theta }(y_{l}\mid x)}{\pi _{\text{ref}}(y_{l}\mid x)}}\right)\right]}
  
*

Where:

- 
  
    
      
        x
      
    
    {\displaystyle x}
  
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4) is the prompt, 
  
    
      
        
          y
          
            w
          
        
      
    
    {\displaystyle y_{w}}
  
![{\displaystyle y_{w}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/67bb3f7963029d9c3e179e91f221e7d97cb8aad9) is the winning (chosen) response, and 
  
    
      
        
          y
          
            l
          
        
      
    
    {\displaystyle y_{l}}
  
![{\displaystyle y_{l}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/26585cd35d275edc7e4ae324596c6887f735797c) is the losing (rejected) response

- 
  
    
      
        
          &#x03C0;
          
            &#x03B8;
          
        
      
    
    {\displaystyle \pi _{\theta }}
  
![{\displaystyle \pi _{\theta }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a9f6266b9302e47ccd37e867f4a364ff52fb8af) is the policy model being trained

- 
  
    
      
        
          &#x03C0;
          
            ref
          
        
      
    
    {\displaystyle \pi _{\text{ref}}}
  
![{\displaystyle \pi _{\text{ref}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3a7a032a90d4d2ca5670f195835c235086012df4) is a fixed reference model (usually the initial SFT model)

- 
  
    
      
        &#x03B2;
      
    
    {\displaystyle \beta }
  
![{\displaystyle \beta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ed48a5e36207156fb792fa79d29925d2f7901e8) is a hyperparameter that controls how much the policy should deviate from the reference model

- 
  
    
      
        &#x03C3;
      
    
    {\displaystyle \sigma }
  
![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) is the sigmoid function

The computational advantages are substantial:

- Single forward pass per preference pair (vs multiple models for PPO)

- Training stability improves dramatically

- Implementation possible in under 200 lines of code

#### Adoption and limitations

Since 2023, DPO has become the most popular RLHF alternative, especially in open-source communities. [Meta](/wiki/meta)'s Llama 3.1 explicitly chose DPO over PPO, finding it more stable and easier to scale.[&#91;3&#93;](#cite_note-raschka-3) [Hugging Face](/wiki/hugging_face)'s TRL library, Axolotl, and other major frameworks provide comprehensive DPO support.

### Constitutional AI

[Anthropic](/wiki/anthropic)'s [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1) represents a fundamental rethinking of alignment, replacing extensive human feedback with AI-generated feedback guided by explicit constitutional principles.[&#91;11&#93;](#cite_note-constitutional-11) This approach enables scalable oversight while maintaining transparency about value systems encoded in models.

#### Two-phase methodology

1. **[Supervised learning phase](/index.php?title=Supervised_learning_phase&action=edit&redlink=1) ([SL-CAI](/index.php?title=SL-CAI&action=edit&redlink=1))**: The model critiques its own responses using constitutional principles, then revises responses to align with principles

2. **[Reinforcement learning phase](/index.php?title=Reinforcement_learning_phase&action=edit&redlink=1) ([RL-CAI](/index.php?title=RL-CAI&action=edit&redlink=1) or [RLAIF](/index.php?title=RLAIF&action=edit&redlink=1))**: AI evaluators apply constitutional principles to generate preference data for training

#### Constitution design

Anthropic's constitution draws from diverse sources:[&#91;12&#93;](#cite_note-anthropic-constitution-12)

- [UN Declaration of Human Rights](/index.php?title=UN_Declaration_of_Human_Rights&action=edit&redlink=1)

- Apple's Terms of Service

- [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)'s Sparrow principles

- Non-Western philosophical traditions

- Anthropic's safety research

The constitution contains 75 principles covering helpfulness, harmlessness, honesty, and specific values like privacy protection and non-discrimination.

### Preference optimization variants

Beyond standard DPO and RLHF, the field has rapidly developed specialized preference optimization methods:

| Method | Key Innovation | Use Case |
| --- | --- | --- |
| **[IPO](/index.php?title=IPO&action=edit&redlink=1)** | Identity function regularization | Prevents overfitting |
| **[KTO](/index.php?title=KTO&action=edit&redlink=1)** | Binary labels instead of pairs | Simpler data collection |
| **[ORPO](/index.php?title=ORPO&action=edit&redlink=1)** | Single-stage training | Memory efficiency |
| **[GRPO](/index.php?title=GRPO&action=edit&redlink=1)** | No critic network needed | Long context training |

**[Kahneman-Tversky Optimization](/index.php?title=Kahneman-Tversky_Optimization&action=edit&redlink=1)** (KTO) draws from behavioral economics and [prospect theory](/index.php?title=Prospect_theory&action=edit&redlink=1) to align LLMs, requiring only binary labels (desirable/undesirable) rather than paired comparisons.[&#91;13&#93;](#cite_note-kto-13)

**[Odds Ratio Preference Optimization](/index.php?title=Odds_Ratio_Preference_Optimization&action=edit&redlink=1)** (ORPO) combines SFT with preference optimization in a unified loss, improving efficiency and performance on benchmarks.[&#91;14&#93;](#cite_note-snorkel-14)

**[Group Relative Policy Optimization](/index.php?title=Group_Relative_Policy_Optimization&action=edit&redlink=1)** (GRPO) emerged in 2024-2025 as a more memory-efficient alternative to PPO, notably used in [DeepSeek-R1](/index.php?title=DeepSeek-R1&action=edit&redlink=1).[&#91;15&#93;](#cite_note-grpo-15)

## Model optimization and compression

Beyond alignment, a major goal of post-training is to optimize models for efficient deployment. This field, known as **[model compression](/index.php?title=Model_compression&action=edit&redlink=1)**, aims to reduce a model's size, memory footprint, and computational requirements without significantly degrading its performance.[&#91;16&#93;](#cite_note-xailient-16)

### Post-training quantization

[Quantization](/wiki/quantization) is a widely used compression technique that reduces the numerical precision of a model's parameters (weights) and/or intermediate calculations (activations).[&#91;5&#93;](#cite_note-ainavigator-5) Most neural networks are trained using 32-bit floating-point numbers (FP32). Quantization converts these values to lower-precision formats, such as 16-bit floats (FP16), 8-bit integers (INT8), or even 4-bit integers.

The primary benefits are:

- **Reduced Model Size**: Converting from FP32 to INT8 can reduce the model size by approximately 4x

- **Faster Inference**: Integer arithmetic is significantly faster than floating-point arithmetic on most CPUs and specialized hardware accelerators

- **Lower Energy Consumption**: Faster computation and reduced memory access lead to lower power usage

#### Post-Training Quantization (PTQ)

[Post-Training Quantization](/index.php?title=Post-Training_Quantization&action=edit&redlink=1) (PTQ) is applied to a model that has already been fully trained. It is a popular choice because it is fast and does not require access to the original training dataset or an expensive retraining process. There are two main types of PTQ:

- **[Post-Training Dynamic Quantization](/index.php?title=Post-Training_Dynamic_Quantization&action=edit&redlink=1)**: The model's weights are quantized offline, but the activations are quantized "on the fly" during inference. This method is simple to apply but adds computational overhead at runtime.

- **[Post-Training Static Quantization](/index.php?title=Post-Training_Static_Quantization&action=edit&redlink=1)**: Both weights and activations are quantized offline using a small calibration dataset* (typically a few hundred representative samples). This generally results in lower inference latency than dynamic quantization.

Methods include:

- [Min-Max Calibration](/index.php?title=Min-Max_Calibration&action=edit&redlink=1): Fast but outlier-sensitive

- [Activation-Aware Weight Quantization](/index.php?title=Activation-Aware_Weight_Quantization&action=edit&redlink=1) (AWQ): Prioritizes salient weights

- [SmoothQuant](/index.php?title=SmoothQuant&action=edit&redlink=1): Handles activation outliers

Benefits include 2-3x speedup and reduced memory usage.[&#91;17&#93;](#cite_note-nvidia-quant-17)

### Pruning

[Pruning](/wiki/pruning) is a model compression technique based on the observation that many deep neural networks are highly over-parameterized, containing redundant weights and neurons that contribute little to their overall performance.[&#91;18&#93;](#cite_note-datature-18) Pruning systematically removes these unimportant parameters to create a smaller, more computationally efficient model.

#### Pruning methodologies

- **[Unstructured Pruning](/index.php?title=Unstructured_Pruning&action=edit&redlink=1)**: Removes individual weights based on importance scores, resulting in sparse weight matrices

- **[Structured Pruning](/index.php?title=Structured_Pruning&action=edit&redlink=1)**: Removes entire groups of related parameters (filters, channels, attention heads, neurons, or layers), maintaining dense matrix structure for efficient hardware execution

The most effective approach is often **[iterative pruning](/index.php?title=Iterative_pruning&action=edit&redlink=1)**:

1. Train a dense model

2. Prune a certain percentage of the least important parameters

3. Fine-tune the pruned model to recover any accuracy lost during pruning

4. Repeat steps 2 and 3 until desired sparsity is achieved

### Knowledge distillation

[Knowledge distillation](/wiki/knowledge_distillation) is a compression technique that involves transferring the "knowledge" from a large, complex, and high-performing model (the **teacher**) to a smaller, more efficient model (the **student**).[&#91;19&#93;](#cite_note-ibm-kd-19)

#### Types of knowledge transfer

- **[Response-based (Logit) Distillation](/index.php?title=Response-based_(Logit)_Distillation&action=edit&redlink=1)**: The student model is trained to match the full probability distribution produced by the teacher's output layer (soft labels)

- **[Feature-based (Hint) Distillation](/index.php?title=Feature-based_(Hint)_Distillation&action=edit&redlink=1)**: The student is trained to mimic the teacher's intermediate feature representations from hidden layers

These compression techniques are often most powerful when used in combination—for example, using knowledge distillation followed by structured pruning and finally post-training static quantization.

| Technique | Core Idea | Primary Benefit | Main Drawback | Best For... |
| --- | --- | --- | --- | --- |
| [Quantization](/wiki/quantization) | Reduce numerical precision of weights/activations | Significant size reduction and faster inference | Potential accuracy degradation at low bit-widths | Deploying on resource-constrained hardware |
| [Pruning](/wiki/pruning) | Remove redundant parameters | Reduces model complexity and FLOPs | Hardware acceleration challenges for unstructured pruning | Reducing latency where some accuracy trade-off acceptable |
| [Knowledge Distillation](/wiki/knowledge_distillation) | Train smaller model to mimic larger one | Compresses knowledge into smaller architecture | Requires powerful teacher model and full training cycle | Creating compact models for specific tasks |

## Historical development

### Early foundations (2008-2020)

The roots of post-training extend back to early work on learning from human feedback in reinforcement learning. The foundational breakthrough came in June 2017 with "Deep Reinforcement Learning from Human Preferences" by Christiano et al. at [OpenAI](/wiki/openai) and [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1), demonstrating that learning from pairwise human comparisons could train reward models for complex RL tasks.[&#91;20&#93;](#cite_note-christiano-20)

### Instruction tuning emerges (2021-2022)

[Google](/index.php?title=Google_Research&action=edit&redlink=1)'s FLAN (Finetuned Language Networks) paper in 2021 introduced instruction fine-tuning at scale, training models on diverse tasks with natural language instructions.[&#91;21&#93;](#cite_note-google-flan-21) March 2022 marked a watershed moment with OpenAI's InstructGPT paper, establishing the standard three-stage RLHF pipeline still widely used today.[&#91;7&#93;](#cite_note-instructgpt-7)

December 2022 saw [Anthropic](/wiki/anthropic)'s Constitutional AI paper introducing RLAIF (RL from AI Feedback), pioneering AI-driven alignment techniques.[&#91;11&#93;](#cite_note-constitutional-11)

### Direct preference methods (2023-2024)

May 2023 brought another paradigm shift with Direct Preference Optimization by Rafailov et al. at [Stanford](/index.php?title=Stanford_University&action=edit&redlink=1).[&#91;10&#93;](#cite_note-dpo-10) DPO's key insight—that language models implicitly represent reward models—enabled eliminating the explicit reward model and RL training loop.

### Reasoning models era (2024-2025)

The frontier of post-training shifted dramatically toward reasoning capabilities in late 2024 and 2025. [OpenAI](/wiki/openai)'s o1 model introduced "thinking" modes where models engage in extended reasoning before generating final answers. [DeepSeek-R1](/index.php?title=DeepSeek-R1&action=edit&redlink=1) in January 2025 provided the first open reproduction of reasoning model training, using GRPO for efficient reinforcement learning.[&#91;4&#93;](#cite_note-kumar2025-4)

Post-training teaches LLMs to reason beyond prediction through techniques like:

- **Chain-of-Thought (CoT)**: Prompts step-by-step thinking, improving accuracy (for example PaLM 540B from 18% to 57% on GSM8K)

- **Tree-of-Thought (ToT)**: Branches reasoning paths, solving 74% of puzzles vs. 4% with CoT

- **Reflexion**: Self-reflects on errors, raising success from 80% to 91% on HumanEval

- **Retrieval-Augmented Generation (RAG)**: Grounds responses in retrieved data, reducing hallucinations

## Industry adoption

### Major companies

| Company | Model | Post-training Method | Investment |
| --- | --- | --- | --- |
| [OpenAI](/wiki/openai) | [ChatGPT](/wiki/chatgpt)/[GPT-4](/wiki/gpt-4) | RLHF with PPO | $10M-$50M+ |
| [Anthropic](/wiki/anthropic) | [Claude](/wiki/claude_ai) | Constitutional AI | $10M-$50M+ |
| [Google DeepMind](/wiki/google_deepmind) | [Gemini](/index.php?title=Google_Gemini&action=edit&redlink=1) | RLHF + SFT | $10M-$50M+ |
| [Meta](/wiki/meta_ai) | [Llama](/index.php?title=Llama_(language_model)&action=edit&redlink=1) | DPO + Rejection Sampling | $50M+ (Llama 3.1) |
| [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) | [GitHub Copilot](/wiki/github_copilot) | RLHF (via OpenAI) | Via $13B OpenAI investment |

#### OpenAI

[OpenAI](/wiki/openai) pioneered RLHF for language models with InstructGPT in March 2022, establishing the three-step process of supervised fine-tuning, reward model training, and PPO-based reinforcement learning.[&#91;7&#93;](#cite_note-instructgpt-7) [ChatGPT](/wiki/chatgpt) serves over 100 million weekly active users as of 2024.[&#91;22&#93;](#cite_note-openai-chatgpt-22)

#### Anthropic

[Anthropic](/wiki/anthropic) developed Constitutional AI as its core alignment methodology, using AI-generated feedback guided by explicit principles rather than extensive human feedback.[&#91;11&#93;](#cite_note-constitutional-11) Claude model evolution spans from Claude 1 (March 2023, 100K context) through Claude 4 (May 2025).

#### Google DeepMind

[Google DeepMind](/wiki/google_deepmind)'s Gemini family demonstrates sophisticated multimodal post-training, combining RLHF, supervised fine-tuning, and safety filtering.[&#91;23&#93;](#cite_note-deepmind-gemini-23) Context windows reach 2 million tokens—industry-leading.

#### Meta

[Meta](/wiki/meta)'s Llama model family represents the most transparent post-training implementations. Llama 3.1 used $50M+ post-training involving over 200-person teams, employing iterative supervised fine-tuning, rejection sampling, and multiple rounds of DPO.[&#91;3&#93;](#cite_note-raschka-3) Meta explicitly avoided PPO-based RLHF, finding DPO more stable and easier to scale.

## Applications

### Conversational AI

- **[ChatGPT](/wiki/chatgpt)**: 100M+ weekly active users, RLHF with PPO

- **[Claude](/wiki/claude_ai)**: Constitutional AI, 200K token context

- **[Gemini](/index.php?title=Google_Gemini&action=edit&redlink=1)**: Multimodal integration across Google services

Post-training is essential for transforming base models into helpful conversational agents. Models like ChatGPT and Claude undergo extensive post-training using SFT and RLHF to transform them from simple text predictors into helpful, harmless, and instruction-following assistants.[&#91;24&#93;](#cite_note-ddd-24)

### Code generation

**[GitHub Copilot](/wiki/github_copilot)** revolutionized software development through post-trained code models, providing real-time code completion across multiple programming languages. Over 1 million developers use AI coding assistants, with studies showing 40-50% reduction in time for repetitive coding tasks. Post-training with feedback from developers helps the model learn what constitutes "good" code in practice.

### Domain-specific systems

**Medical AI** demonstrates post-training's power in specialized domains. [Google](/index.php?title=Google&action=edit&redlink=1)'s MedGemma underwent domain-specific post-training on medical imaging data including chest X-rays, histopathology, and dermatology images.[&#91;25&#93;](#cite_note-google-medgemma-25)

**Finance**: Models are fine-tuned on financial news, earnings reports, and market data to perform specialized tasks like sentiment analysis, risk assessment, or algorithmic trading.

### Multimodal models

Post-training is critical for text-to-image models like **[DALL-E](/wiki/dall-e)** and **[Midjourney](/wiki/midjourney)**. While pre-training teaches them the association between text and images, post-training using human feedback on aesthetic quality, realism, and adherence to the prompt is used to refine their output.

### Deployment on resource-constrained devices

Model compression techniques are fundamental to the field of [Edge AI](/index.php?title=Edge_AI&action=edit&redlink=1) and edge computing:

- **Mobile Devices**: Tech companies use pruning and quantization to deploy large models on smartphones for applications like real-time language translation

- **Frameworks like [TensorFlow Lite](/index.php?title=TensorFlow_Lite&action=edit&redlink=1)**: Provide tools specifically for post-training quantization, enabling deployment on devices with limited memory and processing power

## Tools and frameworks

### Open-source libraries

| Framework | Organization | Key Features |
| --- | --- | --- |
| **[TRL](/index.php?title=TRL&action=edit&redlink=1)** | [Hugging Face](/wiki/hugging_face) | [SFT](/wiki/sft), [DPO](/index.php?title=DPO&action=edit&redlink=1), [PPO](/index.php?title=PPO&action=edit&redlink=1), [GRPO](/index.php?title=GRPO&action=edit&redlink=1) trainers |
| **[PEFT](/index.php?title=PEFT&action=edit&redlink=1)** | [Hugging Face](/wiki/hugging_face) | [LoRA](/wiki/lora), [QLoRA](/index.php?title=QLoRA&action=edit&redlink=1), 60-80% memory reduction |
| **[Axolotl](/index.php?title=Axolotl&action=edit&redlink=1)** | Open-source | [YAML config](/index.php?title=YAML_config&action=edit&redlink=1), [multi-method support](/index.php?title=Multi-method_support&action=edit&redlink=1) |
| **[Unsloth](/index.php?title=Unsloth&action=edit&redlink=1)** | Open-source | 2-5x faster, 70-80% less memory |
| **[Torchtune](/index.php?title=Torchtune&action=edit&redlink=1)** | [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) | [Official PyTorch library](/index.php?title=Official_PyTorch_library&action=edit&redlink=1) |

**[TRL (Transformer Reinforcement Learning)](/index.php?title=TRL_(Transformer_Reinforcement_Learning)&action=edit&redlink=1)** serves as a comprehensive full-stack library for post-training foundation models, supporting SFT, GRPO, DPO, Reward, and PPO trainers.[&#91;26&#93;](#cite_note-trl-26)

### Commercial platforms

- **[OpenAI](/wiki/openai) Fine-Tuning API**: Supports GPT-4o and GPT-3.5 Turbo

- **[Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1)**: Managed fine-tuning for Claude, Llama, Titan

- **[Azure](/index.php?title=Microsoft_Azure&action=edit&redlink=1) AI Foundry**: DPO and SFT for multiple models

## Challenges and limitations

Despite its transformative impact, the post-training phase faces significant technical, ethical, and practical challenges:

### Technical challenges

- **[Catastrophic forgetting](/index.php?title=Catastrophic_forgetting&action=edit&redlink=1)**: When a pre-trained model is fine-tuned on a new, narrow dataset, it risks "forgetting" some of the general knowledge it learned during pre-training

- **[Reward hacking](/index.php?title=Reward_hacking&action=edit&redlink=1) and [over-optimization](/index.php?title=Over-optimization&action=edit&redlink=1)**: In RLHF, the model's objective is to maximize the score from the reward model, which can lead to exploits where the model achieves high rewards without actually fulfilling user intent

- **[Accuracy degradation](/index.php?title=Accuracy_degradation&action=edit&redlink=1)**: Model compression techniques often involve a trade-off between efficiency and accuracy

- **[Alignment problem](/index.php?title=Alignment_problem&action=edit&redlink=1)**: Difficulty translating abstract, nuanced human values into concrete reward functions or preference pairs

### Data dependency and quality

Post-training alignment methods are highly sensitive to the data they are trained on. The quality and diversity of human-written demonstrations for SFT and the preference labels for RLHF/DPO directly determine the quality and biases of the final model. If preference data is collected from a non-diverse group or contains inherent biases, the aligned model will learn and amplify those biases.

### Vulnerability to adversarial attacks

The alignment process can create new vulnerabilities. Adversarial attacks, or "[jailbreaking](/index.php?title=Jailbreaking&action=edit&redlink=1)", involve crafting specific prompts designed to bypass a model's safety guardrails and elicit forbidden or harmful behavior. Research has shown that if a negative behavior is suppressed but not eliminated from the model's capabilities, carefully designed prompts can re-activate it.

### The waterbed effect

These challenges can be conceptualized through a "waterbed effect." Post-training applies strong optimization pressure to improve one aspect of the model's behavior (for example reducing toxicity). However, this pressure can cause unintended consequences in other areas, much like pushing down on one part of a waterbed causes another part to bulge up. For example, making a model overly cautious to avoid harm might severely reduce its helpfulness and creativity.

### Resource requirements

| Aspect | Requirement |
| --- | --- |
| [GPU Memory](/index.php?title=GPU_Memory&action=edit&redlink=1) | 14-80GB depending on model size |
| [Training Time](/index.php?title=Training_Time&action=edit&redlink=1) | Hours to days |
| [Data Annotation](/index.php?title=Data_Annotation&action=edit&redlink=1) | $10K-$200K for preference data |
| [Engineering Expertise](/index.php?title=Engineering_Expertise&action=edit&redlink=1) | ML engineers for tuning and deployment |

## Recent advances

### Novel techniques (2023-2025)

**[Reinforcement Learning with Verifiable Rewards](/index.php?title=Reinforcement_Learning_with_Verifiable_Rewards&action=edit&redlink=1) ([RLVR](/index.php?title=RLVR&action=edit&redlink=1))** uses objective signals like code execution results or theorem proofs as rewards, driving dramatic reasoning improvements in [OpenAI o1](/index.php?title=OpenAI_o1&action=edit&redlink=1) and [DeepSeek-R1](/index.php?title=DeepSeek-R1&action=edit&redlink=1).[&#91;4&#93;](#cite_note-kumar2025-4)

**[Test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1)** allocates more compute during inference for harder problems through [chain-of-thought](/index.php?title=Chain-of-thought&action=edit&redlink=1) prompting, self-consistency, and iterative refinement.[&#91;27&#93;](#cite_note-interconnects-27)

### Efficiency improvements

- **[Memory optimization](/index.php?title=Memory_optimization&action=edit&redlink=1)**: [Liger Kernel](/index.php?title=Liger_Kernel&action=edit&redlink=1) delivers 20% throughput increase, 60% memory reduction

- **[Synthetic data generation](/index.php?title=Synthetic_data_generation&action=edit&redlink=1)**: [Teacher models](/index.php?title=Teacher_model&action=edit&redlink=1) create training data at scale

- **[Distributed training](/index.php?title=Distributed_training&action=edit&redlink=1)**: [FSDP](/index.php?title=FSDP&action=edit&redlink=1), [DeepSpeed ZeRO](/index.php?title=DeepSpeed_ZeRO&action=edit&redlink=1) enable [multi-node training](/index.php?title=Multi-node_training&action=edit&redlink=1)

## Future directions

### Critical research problems

- **[Data efficiency](/index.php?title=Data_efficiency&action=edit&redlink=1)**: Achieving strong performance with 100-1,000 examples

- **[Catastrophic forgetting](/index.php?title=Catastrophic_forgetting&action=edit&redlink=1)**: Maintaining general capabilities during specialization

- **[Reward specification](/index.php?title=Reward_specification&action=edit&redlink=1)**: Encoding complex human values

- **[Scalability](/index.php?title=Scalability&action=edit&redlink=1)**: Post-training 100B+ parameter models efficiently

- **[Continual learning](/index.php?title=Continual_learning&action=edit&redlink=1)**: Models that can dynamically adapt to new information and evolving user preferences over time

### Emerging trends

- **[AI feedback](/index.php?title=AI_feedback&action=edit&redlink=1) ([RLAIF](/index.php?title=RLAIF&action=edit&redlink=1))**: Replacing human annotations with AI-generated feedback

- **[Personalization](/index.php?title=Personalization&action=edit&redlink=1)**: Models adapting to individual users over time

- **[Multimodal integration](/index.php?title=Multimodal_integration&action=edit&redlink=1)**: Single models handling text, images, video, audio

- **[Test-time optimization](/index.php?title=Test-time_optimization&action=edit&redlink=1)**: Dynamic compute allocation based on query difficulty

- **[Data-free compression](/index.php?title=Data-free_compression&action=edit&redlink=1)**: Quantization and pruning methods that don't require calibration datasets

### Market impact

The LLM API market doubled to $8.4B in 2025 according to Menlo Ventures, with post-training driving enterprise adoption through customization and alignment capabilities.[&#91;28&#93;](#cite_note-menlo-28)

Post-training is shifting from being an afterthought to being the central stage for AI innovation. The ability to effectively and efficiently refine, align, and optimize foundation models is becoming the key competitive differentiator in the AI industry, defining who can build the most capable, reliable, and practical AI applications. As the industry matures, post-training represents the "product finishing" phase that transforms powerful but generic AI engines into tailored, polished, and deployable solutions.

## See also

- [Large language model](/wiki/large_language_model)

- [Pre-training](/wiki/pre-training)

- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)

- [Direct Preference Optimization](/index.php?title=Direct_Preference_Optimization&action=edit&redlink=1)

- [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)

- [Supervised fine-tuning](/wiki/supervised_fine-tuning)

- [Instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1)

- [ChatGPT](/wiki/chatgpt)

- [Claude (AI)](/wiki/claude_ai)

- [Parameter-efficient fine-tuning](/index.php?title=Parameter-efficient_fine-tuning&action=edit&redlink=1)

- [Model compression](/index.php?title=Model_compression&action=edit&redlink=1)

- [Quantization (AI)](/index.php?title=Quantization_(AI)&action=edit&redlink=1)

- [Pruning (AI)](/index.php?title=Pruning_(AI)&action=edit&redlink=1)

- [Knowledge distillation](/wiki/knowledge_distillation)

- [Machine Learning Lifecycle](/index.php?title=Machine_Learning_Lifecycle&action=edit&redlink=1)

- [MLOps](/index.php?title=MLOps&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-pytorch_1-0) [1.1](#cite_ref-pytorch_1-1) [1.2](#cite_ref-pytorch_1-2) [1.3](#cite_ref-pytorch_1-3) PyTorch Foundation (2024). "A Primer on LLM Post-Training". [https://pytorch.org/blog/a-primer-on-llm-post-training/](https://pytorch.org/blog/a-primer-on-llm-post-training/)

2. ↑ [2.0](#cite_ref-deeplearning_2-0) [2.1](#cite_ref-deeplearning_2-1) DeepLearning.AI (2024). "Post-training of LLMs". [https://www.deeplearning.ai/short-courses/post-training-of-llms/](https://www.deeplearning.ai/short-courses/post-training-of-llms/)

3. ↑ [3.0](#cite_ref-raschka_3-0) [3.1](#cite_ref-raschka_3-1) [3.2](#cite_ref-raschka_3-2) [3.3](#cite_ref-raschka_3-3) Raschka, Sebastian (2024). "New LLM Pre-training and Post-training Paradigms". [https://magazine.sebastianraschka.com/p/new-llm-pre-training-and-post-training](https://magazine.sebastianraschka.com/p/new-llm-pre-training-and-post-training)

4. ↑ [4.0](#cite_ref-kumar2025_4-0) [4.1](#cite_ref-kumar2025_4-1) [4.2](#cite_ref-kumar2025_4-2) Kumar, K., et al. (2025). "LLM Post-Training: A Deep Dive into Reasoning Large Language Models". arXiv:2502.21321

5. ↑ [5.0](#cite_ref-ainavigator_5-0) [5.1](#cite_ref-ainavigator_5-1) The AI Navigator (2023). "What is Post-Training in AI?". [https://www.theainavigator.com/blog/what-is-post-training-in-ai](https://www.theainavigator.com/blog/what-is-post-training-in-ai)

6. [↑](#cite_ref-survey2025_6-0) A Survey on Post-training of Large Language Models (2025). arXiv:2503.06072

7. ↑ [7.0](#cite_ref-instructgpt_7-0) [7.1](#cite_ref-instructgpt_7-1) [7.2](#cite_ref-instructgpt_7-2) [7.3](#cite_ref-instructgpt_7-3) [7.4](#cite_ref-instructgpt_7-4) Ouyang et al. (2022). "Training language models to follow instructions with human feedback". arXiv:2203.02155

8. [↑](#cite_ref-huggingface_8-0) Hugging Face (2023). "Illustrating Reinforcement Learning from Human Feedback (RLHF)". [https://huggingface.co/blog/rlhf](https://huggingface.co/blog/rlhf)

9. [↑](#cite_ref-nvidia_9-0) NVIDIA Blog (2024). "How Scaling Laws Drive Smarter, More Powerful AI". [https://blogs.nvidia.com/blog/ai-scaling-laws/](https://blogs.nvidia.com/blog/ai-scaling-laws/)

10. ↑ [10.0](#cite_ref-dpo_10-0) [10.1](#cite_ref-dpo_10-1) [10.2](#cite_ref-dpo_10-2) Rafailov et al. (2023). "Direct Preference Optimization: Your Language Model is Secretly a Reward Model". arXiv:2305.18290

11. ↑ [11.0](#cite_ref-constitutional_11-0) [11.1](#cite_ref-constitutional_11-1) [11.2](#cite_ref-constitutional_11-2) Bai et al. (2022). "Constitutional AI: Harmlessness from AI Feedback". arXiv:2212.08073

12. [↑](#cite_ref-anthropic-constitution_12-0) Anthropic (2023). "Claude's Constitution". [https://www.anthropic.com/news/claudes-constitution](https://www.anthropic.com/news/claudes-constitution)

13. [↑](#cite_ref-kto_13-0) KTO: Model Alignment as Prospect Theoretic Optimization (2024). arXiv:2402.01306

14. [↑](#cite_ref-snorkel_14-0) Snorkel AI (2024). "LLM Alignment Techniques: 4 Post-Training Approaches". [https://snorkel.ai/blog/llm-alignment-techniques-4-post-training-approaches/](https://snorkel.ai/blog/llm-alignment-techniques-4-post-training-approaches/)

15. [↑](#cite_ref-grpo_15-0) Hugging Face (2025). "Liger GRPO meets TRL". [https://huggingface.co/blog/liger-grpo](https://huggingface.co/blog/liger-grpo)

16. [↑](#cite_ref-xailient_16-0) Xailient (2023). "4 Popular Model Compression Techniques Explained". [https://www.xailient.com/post/4-popular-model-compression-techniques-explained](https://www.xailient.com/post/4-popular-model-compression-techniques-explained)

17. [↑](#cite_ref-nvidia-quant_17-0) NVIDIA Developer Blog (2024). "Optimizing LLMs for Performance and Accuracy with Post-Training Quantization". [https://developer.nvidia.com/blog/optimizing-llms-for-performance-and-accuracy-with-post-training-quantization/](https://developer.nvidia.com/blog/optimizing-llms-for-performance-and-accuracy-with-post-training-quantization/)

18. [↑](#cite_ref-datature_18-0) Datature (2023). "A Comprehensive Guide to Neural Network Model Pruning". [https://datature.io/blog/a-comprehensive-guide-to-neural-network-model-pruning](https://datature.io/blog/a-comprehensive-guide-to-neural-network-model-pruning)

19. [↑](#cite_ref-ibm-kd_19-0) IBM (2023). "What is knowledge distillation?". [https://www.ibm.com/think/topics/knowledge-distillation](https://www.ibm.com/think/topics/knowledge-distillation)

20. [↑](#cite_ref-christiano_20-0) Christiano et al. (2017). "Deep reinforcement learning from human preferences". arXiv:1706.03741

21. [↑](#cite_ref-google-flan_21-0) Google Research (2021). "Introducing FLAN: More generalizable Language Models with Instruction Fine-Tuning". [https://research.google/blog/introducing-flan-more-generalizable-language-models-with-instruction-fine-tuning/](https://research.google/blog/introducing-flan-more-generalizable-language-models-with-instruction-fine-tuning/)

22. [↑](#cite_ref-openai-chatgpt_22-0) OpenAI (2022). "Introducing ChatGPT". [https://openai.com/index/chatgpt/](https://openai.com/index/chatgpt/)

23. [↑](#cite_ref-deepmind-gemini_23-0) Google DeepMind (2024). "Gemini - Google DeepMind". [https://deepmind.google/models/gemini/](https://deepmind.google/models/gemini/)

24. [↑](#cite_ref-ddd_24-0) Digital Divide Data (2024). "Use Cases of Reinforcement Learning from Human Feedback (RLHF) in Gen AI". [https://digitaldividedata.com/blog/use-cases-of-reinforcement-learning-from-human-feedback-rlhf-in-gen-ai/](https://digitaldividedata.com/blog/use-cases-of-reinforcement-learning-from-human-feedback-rlhf-in-gen-ai/)

25. [↑](#cite_ref-google-medgemma_25-0) Google Research (2024). "MedGemma: Our most capable open models for health AI development". [https://research.google/blog/medgemma-our-most-capable-open-models-for-health-ai-development/](https://research.google/blog/medgemma-our-most-capable-open-models-for-health-ai-development/)

26. [↑](#cite_ref-trl_26-0) PyPI (2024). "trl · PyPI". [https://pypi.org/project/trl/](https://pypi.org/project/trl/)

27. [↑](#cite_ref-interconnects_27-0) Lambert, Nathan (2025). "The state of post-training in 2025". [https://www.interconnects.ai/p/the-state-of-post-training-2025](https://www.interconnects.ai/p/the-state-of-post-training-2025)

28. [↑](#cite_ref-menlo_28-0) Menlo Ventures (2025). "2025 Mid-Year LLM Market Update: Foundation Model Landscape + Economics". [https://menlovc.com/perspective/2025-mid-year-llm-market-update/](https://menlovc.com/perspective/2025-mid-year-llm-market-update/)

## External links

- [RLHF Book by Nathan Lambert](https://rlhfbook.com/)

- [Illustrating Reinforcement Learning from Human Feedback - Hugging Face](https://huggingface.co/blog/rlhf)

- [Elicitation Theory of Post-training - Nathan Lambert](https://www.interconnects.ai/p/elicitation-theory-of-post-training)

- [Awesome RLHF Resources - GitHub](https://github.com/opendilab/awesome-RLHF)