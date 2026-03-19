---
title: "RLHF"
slug: "rlhf"
categories:
  - "Machine_learning"
  - "Artificial_intelligence"
  - "Reinforcement_learning"
  - "Natural_language_processing"
  - "AI_alignment"
  - "Deep_learning"
---[Template:Infobox technology](/index.php?title=Template:Infobox_technology&action=edit&redlink=1)

**Reinforcement Learning from Human Feedback (RLHF)** is a [machine learning](/wiki/machine_learning) technique that trains [artificial intelligence](/wiki/artificial_intelligence) systems to behave according to human preferences by learning [reward functions](/index.php?title=Reward_function&action=edit&redlink=1) from human feedback rather than hand-coded rules.[&#91;1&#93;](#cite_note-christiano2017-1) The technique combines [supervised learning](/wiki/supervised_learning), [reward modeling](/index.php?title=Reward_modeling&action=edit&redlink=1) from human preferences, and [reinforcement learning](/wiki/reinforcement_learning) optimization to teach AI systems complex behaviors that are difficult to specify explicitly.

RLHF has become the industry-standard method for aligning [large language models](/wiki/large_language_model) (LLMs) with human values, enabling systems like [ChatGPT](/wiki/chatgpt), [Claude](/index.php?title=Claude_(chatbot)&action=edit&redlink=1), and [GPT-4](/wiki/gpt-4) to follow instructions, provide helpful responses, and avoid harmful outputs.[&#91;2&#93;](#cite_note-instructgpt-2) Instead of using a hand-crafted reward function to specify the task in a [reinforcement learning](/wiki/reinforcement_learning) setup, RLHF involves learning a reward model directly from human feedback, and then optimizing the agent's policy using this learned reward signal.[&#91;3&#93;](#cite_note-ibm-3) RLHF is particularly useful for tasks where the ideal behavior is easy for humans to recognize but difficult to program explicitly – for example, judging whether an answer is helpful or if a joke is funny.

## Overview

The core innovation of RLHF lies in **learning what humans want rather than explicitly programming it**. Humans provide comparative judgments between AI outputs, a reward model learns to predict these preferences, and reinforcement learning optimizes the AI to maximize predicted rewards while maintaining fluency and coherence.[&#91;4&#93;](#cite_note-huggingface-4)

The standard RLHF pipeline consists of three distinct stages:

1. **Supervised fine-tuning (SFT)** - trains a pretrained language model on high-quality human demonstrations to establish basic instruction-following capabilities

2. **Reward model training** - collects human preferences by showing annotators multiple AI-generated responses and training a model to predict these preferences

3. **Reinforcement learning optimization** - uses the reward model to fine-tune the AI policy with algorithms like [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO), incorporating a [KL divergence](/index.php?title=KL_divergence&action=edit&redlink=1) penalty to prevent drift

This approach addresses the **reward specification problem** - for complex tasks like writing helpful responses or generating creative content, it is nearly impossible to write explicit rules capturing what makes outputs good. RLHF leverages humans' ability to judge quality when comparing examples, even if they cannot articulate precise criteria.[&#91;3&#93;](#cite_note-ibm-3)

## History and Development

### Early Foundations (2008-2011)

Training AI systems from human feedback has long been explored as a way to handle objectives that are hard to formally specify. The intellectual foundations of RLHF trace back to research on learning from human feedback in the late 2000s. The **TAMER framework** (Training an Agent Manually via Evaluative Reinforcement), introduced by Knox and Stone in 2008, allowed humans to guide an RL agent by giving scalar feedback signals, effectively shaping the agent's policy via human reinforcement instead of a predefined reward function.[&#91;5&#93;](#cite_note-tamer-5) These efforts demonstrated the feasibility of learning from human preferences, but were limited to relatively simple environments.

The conceptual leap to **preference-based reinforcement learning** occurred in 2011 when two independent research teams simultaneously published foundational work. Akrour et al. introduced preference-based policy learning, demonstrating that agents could learn directly from expert rankings of policies without simulator access or explicit rewards.[&#91;6&#93;](#cite_note-akrour-6)

### The Breakthrough: Deep RLHF (2017)

Modern RLHF crystallized with the landmark 2017 paper "Deep Reinforcement Learning from Human Preferences" by researchers from [OpenAI](/wiki/openai) and [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1), led by Paul Christiano and Jan Leike.[&#91;1&#93;](#cite_note-christiano2017-1) This work **scaled preference-based learning to complex, high-dimensional tasks** using [deep neural networks](/wiki/deep_neural_network) as a general and scalable method for preference-based learning in complex domains. The paper demonstrated that agents could master challenging behaviors from remarkably little human feedback—notably, their algorithm learned a difficult maneuver (a backflip for a simulated humanoid) using about 900 bits of human feedback, which amounted to roughly an hour of a human trainer's time.[&#91;1&#93;](#cite_note-christiano2017-1) This demonstrated that a relatively small amount of well-placed human feedback (less than 1% of the agent's interactions) was sufficient to significantly outperform baselines and even achieve superhuman scores in some tasks, without the agent ever seeing the true programmed rewards of the environment.

The key innovations included:

- Training deep neural network reward models from pairwise comparisons of trajectory segments

- Using [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO) for stable reinforcement learning

- Employing active query selection strategies to identify the most informative trajectory pairs

The success of this 2017 work established RLHF as a promising technique for aligning AI behavior with human-desired outcomes, sparking broader research into human-in-the-loop learning for AI safety and [alignment](/index.php?title=AI_alignment&action=edit&redlink=1).

### Evolution to Language Models (2019-2020)

Following the initial breakthrough, subsequent research expanded RLHF into new domains. Applying RLHF to natural language presented new challenges—language generation involves discrete tokens, massive action spaces, and subtle quality distinctions. OpenAI's 2019 paper "Fine-Tuning Language Models from Human Preferences" made the first major application of RLHF to language models, fine-tuning [GPT-2](/wiki/gpt-2) on sentiment control, descriptiveness, and summarization using only 5,000-60,000 human comparisons.[&#91;7&#93;](#cite_note-ziegler-7)

Building on this foundation, in 2018–2020, OpenAI applied RLHF to natural language generation tasks. For example, an OpenAI team fine-tuned language models to produce better summaries of text by training on human preference ratings for summaries. In that project, known as "Learning to Summarize from Human Feedback," a reward model learned to predict which summaries people preferred, and an RL policy (based on a pretrained [GPT-3](/index.php?title=GPT_(language_model)&action=edit&redlink=1) model) was optimized to maximize this learned reward.[&#91;8&#93;](#cite_note-stiennon-8) The results showed that with only a few thousand comparison judgments from humans, the RLHF-tuned model could generate summaries that were preferred by users over those from the original model or from certain supervised baselines. Models trained with 60,000 human preference labels significantly outperformed much larger supervised models, with RLHF summaries preferred to human-written reference summaries in evaluations. This provided one of the first demonstrations that RLHF can successfully guide large-scale [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP) models on real-world tasks.

### Mainstream Deployment (2022-Present)

RLHF gained widespread attention with the development of [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) and [ChatGPT](/wiki/chatgpt) by OpenAI in 2022. InstructGPT is a family of GPT-3 based models fine-tuned using human feedback to better follow user instructions. The March 2022 [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) paper represented RLHF's transition from research to industry-standard practice.[&#91;2&#93;](#cite_note-instructgpt-2) In the InstructGPT work, human annotators first provided demonstration answers and ranking comparisons for model outputs; then a reward model was trained on these rankings, and finally the base model was further optimized via Proximal Policy Optimization (PPO) to produce answers that maximize the reward model's score.

This process led to dramatic improvements in the model's alignment with user intents. Results showed that 1.3 billion parameter InstructGPT models were preferred to 175 billion parameter GPT-3 outputs despite having 100× fewer parameters. According to OpenAI, testers **"significantly preferred"** the outputs of a 1.3 billion-parameter InstructGPT model over the outputs of the original 175 billion-parameter GPT-3 model on a wide range of user prompts. In other words, a much smaller model fine-tuned with RLHF was rated as more helpful and useful than a vastly larger model that had not been aligned with human feedback. Moreover, RLHF fine-tuning made the model's outputs more factual and less toxic compared to the base GPT-3, showing 82% reduction in harmful content generation and 29% better adherence to safety policies, all while maintaining performance on academic NLP benchmarks.[&#91;2&#93;](#cite_note-instructgpt-2)

These RLHF-trained InstructGPT models were deployed as the default models in OpenAI's API in 2022, and the approach paved the way for ChatGPT – a conversational AI launched in late 2022 that was built by fine-tuning GPT-3.5 with human feedback. InstructGPT's methodology directly enabled **ChatGPT's November 2022 launch**, which OpenAI explicitly credited to RLHF technology.[&#91;9&#93;](#cite_note-chatgpt-9) ChatGPT rapidly reached 100 million users and catalyzed industry-wide adoption. ChatGPT's ability to follow user instructions, provide detailed answers, and refuse inappropriate requests is largely attributed to the RLHF process during its training. The system builds directly on InstructGPT's methodology, with key adaptations for dialogue including human AI trainers playing both user and assistant roles, model-written suggestions helping trainers compose responses, rejection sampling selecting better outputs during inference, and multiple rounds of iterative RLHF refinement.

Concurrently, the RLHF paradigm has been adopted by other leading AI labs. [Anthropic](/wiki/anthropic) developed [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1), extending RLHF with AI-generated feedback.[&#91;10&#93;](#cite_note-constitutional-10) Their December 2022 paper introduced "RLAIF" (Reinforcement Learning from AI Feedback), where AI models evaluate responses according to written constitutional principles. Anthropic built its assistant **Claude**, refining it using RLHF and related techniques.

[DeepMind](/index.php?title=DeepMind&action=edit&redlink=1), for instance, developed a dialogue agent called **Sparrow** in 2022 which was trained via reinforcement learning on feedback from human reviewers to make its answers more correct and safer.[&#91;11&#93;](#cite_note-sparrow-11) Sparrow uses human preference modeling to learn to avoid unsafe or misleading responses while engaging in helpful conversation. DeepMind also applied RLHF in models like Gopher and developed several notable applications including **GopherCite** (trained models to cite evidence from the web).[&#91;12&#93;](#cite_note-gophercite-12)

By 2023-2025, RLHF became ubiquitous across the AI industry and a standard part of the training pipeline for state-of-the-art large language models and chatbots. [Meta AI](/wiki/meta_ai)'s [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) documentation provided comprehensive public implementation details,[&#91;13&#93;](#cite_note-llama2-13) while [Google](/index.php?title=Google&action=edit&redlink=1)'s [Gemini](/index.php?title=Gemini_(chatbot)&action=edit&redlink=1)[&#91;14&#93;](#cite_note-gemini-14) and virtually all major deployed language models now use RLHF or variants as standard practice. As of mid-2020s, companies such as OpenAI, DeepMind (Google), and Anthropic had all incorporated RLHF as a standard part of their training pipelines, and virtually all cutting-edge conversational AI systems (including OpenAI's GPT-4, Google's Gemini, and others) utilize some form of RLHF in their training pipeline to fine-tune model behavior.

| Year | Milestone | Key Reference |
| --- | --- | --- |
| 2008 | [TAMER Framework](/index.php?title=TAMER_Framework&action=edit&redlink=1) - First demonstration of learning from human evaluative feedback | Knox & Stone[&#91;5&#93;](#cite_note-tamer-5) |
| 2011 | [Preference-based RL](/index.php?title=Preference-based_RL&action=edit&redlink=1) - Established preference learning foundations | Akrour et al.[&#91;6&#93;](#cite_note-akrour-6) |
| 2017 | [Deep RLHF](/index.php?title=Deep_RLHF&action=edit&redlink=1) - Introduction of deep RL from human preferences for games and robotics | Christiano et al.[&#91;1&#93;](#cite_note-christiano2017-1) |
| 2017 | [PPO](/index.php?title=PPO&action=edit&redlink=1) - Introduced dominant RL algorithm for RLHF | Schulman et al.[&#91;15&#93;](#cite_note-ppo-15) |
| 2019 | Fine-Tuning [GPT-2](/wiki/gpt-2) - First major RLHF application to language models | Ziegler et al.[&#91;7&#93;](#cite_note-ziegler-7) |
| 2020 | [Learning to Summarize](/index.php?title=Learning_to_Summarize&action=edit&redlink=1) - Demonstrated RLHF superiority over larger supervised models | Stiennon et al.[&#91;8&#93;](#cite_note-stiennon-8) |
| 2022 | [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1) - Established RLHF as viable for general-purpose alignment | Ouyang et al.[&#91;2&#93;](#cite_note-instructgpt-2) |
| 2022 | [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1) - Introduced RLAIF and explicit value specification | Bai et al.[&#91;10&#93;](#cite_note-constitutional-10) |
| 2023 | [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) - Most detailed public RLHF documentation | Touvron et al.[&#91;13&#93;](#cite_note-llama2-13) |
| 2023 | [DPO](/wiki/direct_preference_optimization) - Simpler alternative to RL-based training | Rafailov et al.[&#91;16&#93;](#cite_note-dpo-16) |
| 2023 | Open Problems in RLHF - Examined fundamental limitations | Casper et al.[&#91;17&#93;](#cite_note-casper-17) |

## Technical Methodology

The process of reinforcement learning from human feedback typically consists of several stages, often following a sequence of **pre-training**, **reward modeling**, and **policy optimization** (sometimes with an intermediate supervised fine-tuning step). RLHF typically involves three main steps: pretraining or supervised fine-tuning, training a reward model, and optimizing the policy with reinforcement learning.[&#91;4&#93;](#cite_note-huggingface-4)

### Stage 1: Supervised Fine-Tuning (SFT)

RLHF usually starts with a pretrained model or agent that has learned broadly from a large dataset or through conventional RL. In NLP applications, this is a large language model trained on vast text corpora (e.g. GPT). In control tasks or games, this could be an agent with some prior knowledge. The pre-training provides a foundation of general capabilities, which RLHF will then refine. Notably, the computational cost of the initial pre-training far exceeds that of the subsequent RLHF fine-tuning; for example, the RLHF phase for InstructGPT consumed less than 2% of the compute used to pre-train GPT-3.

The RLHF pipeline begins with **[supervised fine-tuning](/wiki/supervised_fine-tuning) (SFT)**, which transforms a [pretrained](/index.php?title=Pretrained&action=edit&redlink=1) language model into an instruction-following system. Pretrained models excel at pattern completion but don't naturally follow explicit instructions. SFT bridges this gap by training on high-quality human demonstrations—prompt-response pairs where humans write desired outputs. The process begins with a pretrained model, such as an LLM trained on a large corpus using next-token prediction. This model is then fine-tuned on a dataset of prompt-response pairs created by human annotators to ensure it can follow instructions or generate desirable outputs.[&#91;2&#93;](#cite_note-instructgpt-2)

The process uses standard [supervised learning](/wiki/supervised_learning) with the [causal language modeling](/index.php?title=Causal_language_modeling&action=edit&redlink=1) objective:

  
    
      
        
          L
          
            S
            F
            T
          
        
        (
        &#x03B8;
        )
        =
        &#x2212;
        
          
            E
          
          
            (
            x
            ,
            y
            )
            &#x223C;
            D
          
        
        
          [
          
            
              &#x2211;
              
                t
              
            
            log
            &#x2061;
            
              &#x03C0;
              
                &#x03B8;
              
            
            (
            
              y
              
                t
              
            
            
              |
            
            x
            ,
            
              y
              
                <
                t
              
            
            )
          
          ]
        
      
    
    {\displaystyle L_{SFT}(\theta )=-\mathbb {E} _{(x,y)\sim D}\left[\sum _{t}\log \pi _{\theta }(y_{t}|x,y_{<t})\right]}
  
*
where θ represents model parameters, x is the prompt/instruction, y is the desired response, and D is the demonstration dataset.[&#91;4&#93;](#cite_note-huggingface-4)

Training data typically consists of 10,000-100,000 demonstrations sourced from human labelers, API usage, or carefully curated existing data. For example, in InstructGPT, approximately 13,000 prompts were used for SFT.[&#91;2&#93;](#cite_note-instructgpt-2) The SFT model becomes the **reference policy** (πref) used during RL optimization to compute KL divergence penalties. This supervised learning step primes the model to output generally acceptable answers, simplifying the subsequent reinforcement learning stage.

### Stage 2: Reward Model Training

A dataset is constructed by having human evaluators judge or rank outputs of the model-in-training. Typically, the current model (or a set of candidate models) is used to generate answers, behaviors, or trajectories for a variety of prompts or situations, and human annotators are asked to compare which output is better according to some criteria (e.g. which answer is more helpful or accurate). Human annotators provide feedback by ranking multiple model-generated responses to a given prompt. For instance, to train a chatbot, labelers might be shown two possible replies to a user query and asked which reply they prefer. These comparison judgments (or sometimes scalar ratings) constitute the feedback data.

Using pairwise comparisons helps because humans often find it easier to say "output A is better than output B" than to assign absolute scores, and it reduces variance between different annotators' scales. The collection process may be iterative: as the policy improves, new data is sampled in areas where the model is still uncertain or makes mistakes, and humans provide feedback on those outputs, continually expanding the feedback dataset.

The second stage trains a **reward model** (also called preference model) that predicts human preferences between AI-generated outputs. This feedback is used to train a reward model (RM), which predicts a scalar reward representing human preference. The reward model takes as input an agent's output (and sometimes the initial prompt or state) and outputs a scalar reward value that should correlate with how humans would rate that output. The reward model is typically a neural network initialized from the same base model (especially in NLP tasks, one often uses a copy of the language model and fine-tunes it to predict preference scores). The RM is often initialized from the SFT model and trained using a loss function based on pairwise comparisons.

The reward model is trained using the **[Bradley–Terry model](/index.php?title=Bradley%E2%80%93Terry_model&action=edit&redlink=1)** of pairwise preferences. This model assumes that for responses yw (winner/chosen) and yl (loser/rejected) with latent qualities r(yw) and r(yl), the probability that yw is preferred follows:

  
    
      
        P
        (
        
          y
          
            w
          
        
        &#x227B;
        
          y
          
            l
          
        
        
          |
        
        x
        )
        =
        &#x03C3;
        (
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        
          y
          
            w
          
        
        )
        &#x2212;
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        
          y
          
            l
          
        
        )
        )
      
    
    {\displaystyle P(y_{w}\succ y_{l}|x)=\sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l}))}
  
![{\displaystyle P(y_{w}\succ y_{l}|x)=\sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l}))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e8970fc4f6e33814a4897bb7b1b4bd5d4d2f6493)
where σ is the [sigmoid function](/wiki/sigmoid_function) (or logistic function) and rθ is the reward model.[&#91;18&#93;](#cite_note-rlhfbook-18)

The reward model is trained by maximizing log-likelihood of observed preferences using [cross-entropy loss](/index.php?title=Cross-entropy_loss&action=edit&redlink=1). It is trained using the human feedback dataset: for example, given two outputs A and B for the same prompt where the human preferred A over B, the reward model's parameters are adjusted such that it predicts a higher score for A than for B. This can be done by minimizing a loss function that penalizes mis-ordering the pair (a common choice is the Bradley-Terry or logistic loss that corresponds to a pairwise comparison model):

  
    
      
        
          L
          
            R
            M
          
        
        (
        &#x03B8;
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
            
              r
              
                &#x03B8;
              
            
            (
            x
            ,
            
              y
              
                w
              
            
            )
            &#x2212;
            
              r
              
                &#x03B8;
              
            
            (
            x
            ,
            
              y
              
                l
              
            
            )
            )
          
          ]
        
      
    
    {\displaystyle L_{RM}(\theta )=-\mathbb {E} _{(x,y_{w},y_{l})\sim D}\left[\log \sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l}))\right]}
  
![{\displaystyle L_{RM}(\theta )=-\mathbb {E} _{(x,y_{w},y_{l})\sim D}\left[\log \sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l}))\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4993b1f1885641041b7c769706fab7abb5e40f98)
or equivalently:

  
    
      
        
          
            L
          
        
        (
        &#x03B8;
        )
        =
        &#x2212;
        
          
            1
            
              
                (
              
              
                K
                2
              
              
                )
              
            
          
        
        
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
          
        
        [
        log
        &#x2061;
        (
        &#x03C3;
        (
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        
          y
          
            w
          
        
        )
        &#x2212;
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        
          y
          
            l
          
        
        )
        )
        )
        ]
      
    
    {\displaystyle {\mathcal {L}}(\theta )=-{\frac {1}{\binom {K}{2}}}E_{(x,y_{w},y_{l})}[\log(\sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l})))]}
  
![{\displaystyle {\mathcal {L}}(\theta )=-{\frac {1}{\binom {K}{2}}}E_{(x,y_{w},y_{l})}[\log(\sigma (r_{\theta }(x,y_{w})-r_{\theta }(x,y_{l})))]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2d914527efe8277f4b66462c6cd1f0e570949c48)
where yw is the preferred response over yl.

Architecturally, reward models typically start from the SFT model checkpoint, replacing the final token prediction layer with a linear projection to a single scalar value.[&#91;2&#93;](#cite_note-instructgpt-2) The scalar reward is read from the last token position, representing the quality of the entire sequence. Datasets for RM training can include 100,000 to 1 million comparisons. After training, the reward model serves as a stand-in for human judgment – it can evaluate any new output and estimate how well a human would like it. This allows the next phase of training to proceed without a human in the loop for every single evaluation.

### Stage 3: Reinforcement Learning Optimization

In the final phase, the agent or policy model is fine-tuned using a reinforcement learning algorithm, with the reward model providing the reward signal. The final stage uses **reinforcement learning** to fine-tune the language model to maximize reward from the reward model while maintaining coherence and fluency. This stage formulates text generation as a sequential decision problem. Instead of a manual reward function defined by engineers, the agent now treats the learned reward model as its objective to maximize.

The complete RLHF objective combines reward maximization with a **KL divergence penalty**:

  
    
      
        
          J
          
            R
            L
            H
            F
          
        
        (
        &#x03B8;
        )
        =
        
          
            E
          
          
            x
            &#x223C;
            D
            ,
            y
            &#x223C;
            
              &#x03C0;
              
                &#x03B8;
              
            
          
        
        
          [
          
            
              r
              
                &#x03D5;
              
            
            (
            x
            ,
            y
            )
            &#x2212;
            &#x03B2;
            &#x22C5;
            
              D
              
                K
                L
              
            
            (
            
              &#x03C0;
              
                &#x03B8;
              
            
            (
            y
            
              |
            
            x
            )
            &#x2016;
            
              &#x03C0;
              
                r
                e
                f
              
            
            (
            y
            
              |
            
            x
            )
            )
          
          ]
        
      
    
    {\displaystyle J_{RLHF}(\theta )=\mathbb {E} _{x\sim D,y\sim \pi _{\theta }}\left[r_{\phi }(x,y)-\beta \cdot D_{KL}(\pi _{\theta }(y|x)\|\pi _{ref}(y|x))\right]}
  
![{\displaystyle J_{RLHF}(\theta )=\mathbb {E} _{x\sim D,y\sim \pi _{\theta }}\left[r_{\phi }(x,y)-\beta \cdot D_{KL}(\pi _{\theta }(y|x)\|\pi _{ref}(y|x))\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/79fbb1e52e291dd5fc6a9b8ff984ea5c82ba88fd)
or equivalently:

  
    
      
        
          objective
        
        (
        &#x03D5;
        )
        =
        
          E
          
            (
            x
            ,
            y
            )
            &#x223C;
            
              D
              
                
                  &#x03C0;
                  
                    &#x03D5;
                  
                  
                    R
                    L
                  
                
              
            
          
        
        [
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        y
        )
        &#x2212;
        &#x03B2;
        log
        &#x2061;
        
          (
          
            
              
                
                  &#x03C0;
                  
                    &#x03D5;
                  
                  
                    R
                    L
                  
                
                (
                y
                
                  |
                
                x
                )
              
              
                
                  &#x03C0;
                  
                    S
                    F
                    T
                  
                
                (
                y
                
                  |
                
                x
                )
              
            
          
          )
        
        ]
      
    
    {\displaystyle {\text{objective}}(\phi )=E_{(x,y)\sim D_{\pi _{\phi }^{RL}}}[r_{\theta }(x,y)-\beta \log \left({\frac {\pi _{\phi }^{RL}(y|x)}{\pi ^{SFT}(y|x)}}\right)]}
  
![{\displaystyle {\text{objective}}(\phi )=E_{(x,y)\sim D_{\pi _{\phi }^{RL}}}[r_{\theta }(x,y)-\beta \log \left({\frac {\pi _{\phi }^{RL}(y|x)}{\pi ^{SFT}(y|x)}}\right)]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e0af47a26994247231490f41f8ced0eea53acb36)
where πθ is the current policy being optimized, πref is the frozen reference policy (SFT model), rφ is the frozen reward model, and β is the KL penalty coefficient typically ranging from 0.01 to 0.1.[&#91;4&#93;](#cite_note-huggingface-4)

An additional pretraining term may be added to avoid forgetting:

  
    
      
        L
        (
        &#x03D5;
        )
        =
        E
        [
        
          r
          
            &#x03B8;
          
        
        (
        x
        ,
        y
        )
        &#x2212;
        &#x03B2;
        log
        &#x2061;
        (
        &#x22C5;
        )
        ]
        +
        &#x03B3;
        
          E
          
            x
            &#x223C;
            
              D
              
                pretrain
              
            
          
        
        [
        log
        &#x2061;
        (
        
          &#x03C0;
          
            &#x03D5;
          
          
            R
            L
          
        
        (
        x
        )
        )
        ]
      
    
    {\displaystyle L(\phi )=E[r_{\theta }(x,y)-\beta \log(\cdot )]+\gamma E_{x\sim D_{\text{pretrain}}}[\log(\pi _{\phi }^{RL}(x))]}
  
![{\displaystyle L(\phi )=E[r_{\theta }(x,y)-\beta \log(\cdot )]+\gamma E_{x\sim D_{\text{pretrain}}}[\log(\pi _{\phi }^{RL}(x))]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7915525a734c36cc9d34a04831ad9e0b0497df54)
A common choice of RL algorithm for this stage is **[Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO)**, a stable policy-gradient method, though others like actor-critic can be used. Using PPO, the model generates an output (action) for a given input (state or prompt), the reward model scores this output, and the PPO update adjusts the model's parameters to increase the probability of outputs that lead to higher reward scores. PPO includes a mechanism to prevent the policy from straying too far from its initial parameters in a single update (through a clipping penalty). This is important because the reward model is an imperfect proxy; if the policy changes too drastically, it might exploit quirks of the reward model (a form of [reward hacking](/index.php?title=Reward_hacking&action=edit&redlink=1)), producing gibberish or undesired outputs that nevertheless score high.

The KL divergence term prevents **distribution collapse** where the model assigns all probability to narrow sequences, maintains **language fluency** by staying close to the well-trained SFT model, and prevents **reward hacking** where the model exploits reward model weaknesses. The PPO regularization (often implemented via a Kullback–Leibler divergence penalty between the new policy and the original model) helps maintain the quality and coherence of outputs during optimization. Over many training iterations, this RL process tunes the agent to generate outputs that align with the learned human preferences.

In summary, the RLHF loop optimizes the agent's behavior to maximize human-approved outcomes. For language models, this means the model's responses become more attuned to what humans consider a good answer. For example, after RLHF fine-tuning, InstructGPT and similar models began following user instructions more reliably, avoided certain classes of undesirable content, and even showed improved factual accuracy in open-ended Q&A. In interactive domains like dialogue, the policy optimization phase may involve the model actually interacting with humans or a simulated user and getting feedback in real time, though in many implementations the feedback is gathered in advance (offline setting) and the RL uses that static dataset.

Variants include direct preference optimization (DPO), which bypasses explicit reward modeling.[&#91;16&#93;](#cite_note-dpo-16)

| Step | Description | Key Components |
| --- | --- | --- |
| Pretraining/SFT | Fine-tune base model on human demonstrations | Prompt-response pairs, supervised learning, 10,000-100,000 demonstrations |
| Reward Modeling | Train RM on ranked preferences | Pairwise comparisons, Bradley-Terry model, 100,000-1M comparisons |
| Policy Optimization | Use RL to maximize RM rewards | PPO, KL penalty, optional pretraining mix |

## Key Components and Algorithms

### Proximal Policy Optimization (PPO)

**[Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO)** is the dominant reinforcement learning algorithm used in RLHF, introduced by Schulman et al. in 2017.[&#91;15&#93;](#cite_note-ppo-15) PPO addresses how to update policies using sampled data without taking destructively large steps that degrade performance. The introduction of PPO in the original OpenAI 2017 RLHF paper significantly reduced the amount of feedback needed by stabilizing training, making it practical to apply RLHF to high-dimensional neural networks.

The core innovation is the **clipped surrogate objective**. PPO defines a probability ratio:

  
    
      
        
          r
          
            t
          
        
        (
        &#x03B8;
        )
        =
        
          
            
              
                &#x03C0;
                
                  &#x03B8;
                
              
              (
              
                a
                
                  t
                
              
              
                |
              
              
                s
                
                  t
                
              
              )
            
            
              
                &#x03C0;
                
                  
                    &#x03B8;
                    
                      o
                      l
                      d
                    
                  
                
              
              (
              
                a
                
                  t
                
              
              
                |
              
              
                s
                
                  t
                
              
              )
            
          
        
      
    
    {\displaystyle r_{t}(\theta )={\frac {\pi _{\theta }(a_{t}|s_{t})}{\pi _{\theta _{old}}(a_{t}|s_{t})}}}
  
![{\displaystyle r_{t}(\theta )={\frac {\pi _{\theta }(a_{t}|s_{t})}{\pi _{\theta _{old}}(a_{t}|s_{t})}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0de131ed9b4c6e5b6023a03488b7417b5822df48)
The objective becomes:

  
    
      
        
          L
          
            C
            L
            I
            P
          
        
        (
        &#x03B8;
        )
        =
        
          
            E
          
          
            t
          
        
        
          [
          
            min
            (
            
              r
              
                t
              
            
            (
            &#x03B8;
            )
            &#x22C5;
            
              
                
                  
                    A
                    &#x005E;
                  
                
              
              
                t
              
            
            ,
            
              clip
            
            (
            
              r
              
                t
              
            
            (
            &#x03B8;
            )
            ,
            1
            &#x2212;
            &#x03B5;
            ,
            1
            +
            &#x03B5;
            )
            &#x22C5;
            
              
                
                  
                    A
                    &#x005E;
                  
                
              
              
                t
              
            
            )
          
          ]
        
      
    
    {\displaystyle L^{CLIP}(\theta )=\mathbb {E} _{t}\left[\min(r_{t}(\theta )\cdot {\hat {A}}_{t},{\text{clip}}(r_{t}(\theta ),1-\varepsilon ,1+\varepsilon )\cdot {\hat {A}}_{t})\right]}
  
![{\displaystyle L^{CLIP}(\theta )=\mathbb {E} _{t}\left[\min(r_{t}(\theta )\cdot {\hat {A}}_{t},{\text{clip}}(r_{t}(\theta ),1-\varepsilon ,1+\varepsilon )\cdot {\hat {A}}_{t})\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/08b6b93ff52678a39354a02a44f3273c0fcd9b46)
where Ât is the advantage estimate, ε is the clipping parameter (typically 0.1-0.2), and the minimum creates a pessimistic lower bound.[&#91;19&#93;](#cite_note-ppo_details-19)

PPO's selection for RLHF stems from multiple advantages:

- **Stability** through trust region constraints

- **Sample efficiency** by reusing data through multiple epochs

- **Simplicity** requiring only standard backpropagation

- **Scalability** to large models with distributed training

### Reward Models and Preference Learning

Reward models translate human preferences into scalar signals for reinforcement learning. These models face a challenging task: predicting subtle, context-dependent human judgments about text quality from limited training data while generalizing to novel outputs.

Architecturally, reward models typically mirror the language model being trained, often initialized from the same SFT checkpoint to leverage linguistic knowledge.[&#91;2&#93;](#cite_note-instructgpt-2) The final layer is modified to output a single scalar value rather than a probability distribution over tokens.

**Reward model quality critically determines RLHF success and failure modes.** A weak reward model gets exploited—during RL optimization, the policy discovers inputs that achieve high predicted rewards without actually satisfying human preferences, a phenomenon called **reward hacking** or **reward overoptimization**.[&#91;20&#93;](#cite_note-gao-20)

Mitigating reward model limitations involves:

- **Ensemble methods** using multiple reward models

- **Adversarial training** exposing models to challenging examples

- **Process supervision** training on intermediate reasoning steps

- **Uncertainty quantification** recognizing low confidence

### KL Divergence Penalty

The KL divergence penalty is a fundamental component preventing RLHF collapse. The [Kullback–Leibler divergence](/index.php?title=Kullback%E2%80%93Leibler_divergence&action=edit&redlink=1) measures the difference between two probability distributions:

  
    
      
        
          D
          
            K
            L
          
        
        (
        P
        &#x2016;
        Q
        )
        =
        
          
            E
          
          
            x
            &#x223C;
            P
          
        
        
          [
          
            log
            &#x2061;
            
              
                
                  P
                  (
                  x
                  )
                
                
                  Q
                  (
                  x
                  )
                
              
            
          
          ]
        
      
    
    {\displaystyle D_{KL}(P\|Q)=\mathbb {E} _{x\sim P}\left[\log {\frac {P(x)}{Q(x)}}\right]}
  
![{\displaystyle D_{KL}(P\|Q)=\mathbb {E} _{x\sim P}\left[\log {\frac {P(x)}{Q(x)}}\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/484827c1337bbad0ec026f31a40a34110aed7474)
In RLHF, the KL penalty constrains how much the optimized policy πθ can diverge from the reference policy πref during RL training. The penalty coefficient β controls the trade-off between reward maximization and staying close to the reference.[&#91;21&#93;](#cite_note-korbak-21)

The penalty serves multiple critical functions:

- Prevents **distribution collapse**

- Maintains **language fluency**

- Prevents **reward hacking**

- Acts as **Bayesian regularization**

From a Bayesian perspective, KL-regularized RL implements **variational inference** approximating a target posterior distribution, explaining why the method avoids distribution collapse.

## Applications

RLHF has been applied across a range of AI domains, from game-playing agents to large-scale text generation, to align models with human values.[&#91;3&#93;](#cite_note-ibm-3)

### Natural Language Processing

One of the most prominent uses of RLHF is in **[natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)**, where it has become a key technique for aligning language models with human expectations. In NLP, RLHF improves conversational agents, text summarization, and instruction-following. As described, instruct-tuned models like InstructGPT and conversational agents like ChatGPT rely on RLHF to produce answers that users find helpful and safe. The technique has been used for tasks such as **text summarization** (models that generate summaries preferred by readers), **open-ended question answering**, **translation**, and **dialogue**. 

Notable examples include [OpenAI](/wiki/openai)'s [ChatGPT](/wiki/chatgpt) and [InstructGPT](/index.php?title=InstructGPT&action=edit&redlink=1), [Anthropic](/wiki/anthropic)'s [Claude](/wiki/claude), [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)'s [Sparrow](/index.php?title=Sparrow&action=edit&redlink=1), and Google's [Gemini](/index.php?title=Gemini&action=edit&redlink=1). By training on human feedback, these models can handle subjective or nuanced criteria (e.g. writing style, humor, avoiding offensive language) that are not captured by likelihood alone. It helps reduce toxicity and bias in LLM outputs.

Major tech companies have incorporated RLHF for their AI assistants: for example, Google has used human feedback reinforcement learning to fine-tune dialog models (such as the Sparrow research model and likely systems behind its Bard assistant), and Anthropic's Claude assistant was developed with a similar human-feedback loop in training. Empirically, RLHF has shown it can significantly improve user satisfaction; for instance, Anthropic reported that RLHF-based tuning improved their language model's performance on adversarial questions and made it follow instructions more reliably.

### ChatGPT and InstructGPT

[ChatGPT](/wiki/chatgpt) represents RLHF's most visible and impactful application, transforming [GPT-3.5](/index.php?title=GPT-3.5&action=edit&redlink=1)'s raw capabilities into a helpful, harmless conversational assistant.[&#91;9&#93;](#cite_note-chatgpt-9) The system builds directly on InstructGPT's methodology, with key adaptations for dialogue:

- Human AI trainers played both user and assistant roles

- Model-written suggestions helped trainers compose responses

- Rejection sampling selected better outputs during inference

- Multiple rounds of iterative RLHF refinement

InstructGPT's results demonstrated RLHF's power: the 1.3 billion parameter model was preferred over 100× larger GPT-3 outputs, showing 82% reduction in harmful content generation and 29% better adherence to safety policies.[&#91;2&#93;](#cite_note-instructgpt-2)

### Claude and Constitutional AI

[Anthropic](/wiki/anthropic)'s [Claude](/index.php?title=Claude_(chatbot)&action=edit&redlink=1) models pioneered **Constitutional AI (CAI)**, which reduces human annotation requirements while making value alignment more transparent.[&#91;10&#93;](#cite_note-constitutional-10) The approach uses AI-generated feedback (RLAIF) guided by explicit constitutional principles rather than relying entirely on human preference comparisons.

In 2022, Anthropic introduced Constitutional AI*, a method in which an AI assistant is trained to critique and refine its own outputs using a set of written principles (a "constitution") instead of direct human labels for each instance. In the RL phase of Constitutional AI, one model generates candidate responses and another model (or the same model in a self-referee mode) judges which response better adheres to the given ethical principles – effectively the AI is providing feedback according to a human-designed constitution. This produces a preference signal (good vs. bad responses) that can train a reward model or directly train the policy, analogous to RLHF but without constant human comparison in the loop.

Constitutional AI operates in two phases:

1. **Supervised learning phase** - the model critiques and revises its own responses using constitutional principles

2. **RL phase** - AI evaluators assess responses according to the constitution

Claude's constitution draws from diverse sources including the [UN Universal Declaration of Human Rights](/index.php?title=UN_Universal_Declaration_of_Human_Rights&action=edit&redlink=1), trust and safety best practices, and Anthropic's "helpful, honest, harmless" (HHH) criteria.[&#91;22&#93;](#cite_note-claude_constitution-22)

Results demonstrate Constitutional AI's effectiveness: models achieved Pareto improvement being both more helpful AND more harmless than standard RLHF, with 70-85% preference rates in human evaluations. Anthropic reported that their RL from AI feedback was able to achieve results comparable to standard RLHF in making an assistant harmless, though they still used human oversight to set the rules and evaluate final behavior.[&#91;10&#93;](#cite_note-constitutional-10)

### Meta's Llama 2

[Meta AI](/wiki/meta_ai)'s [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) paper provides the most comprehensive public documentation of RLHF implementation details.[&#91;13&#93;](#cite_note-llama2-13) The documentation reveals:

- Starting from 2 trillion token pretrained base

- Initial SFT on approximately 27,540 high-quality annotations

- Training **separate reward models** for helpfulness and safety

- Five sequential RLHF versions (V1-V5) over 3+ months

Technical innovations include:

- **Rejection sampling** for the 70B model - generate multiple candidates and select highest-scoring

- **Ghost Attention (GAtt)** - maintains multi-turn conversation consistency

- **Context distillation** - enables internalizing lengthy instructions

Results showed Llama 2-Chat models outperforming most open-source competitors on helpfulness and safety benchmarks.

### Google Gemini and Other Systems

[Google](/index.php?title=Google&action=edit&redlink=1)'s [Gemini](/index.php?title=Gemini_(chatbot)&action=edit&redlink=1) models represent large-scale application of RLHF to multimodal systems.[&#91;14&#93;](#cite_note-gemini-14) The natively multimodal pretraining architecture processes text, images, audio, and video together, with RLHF refinement applied across modalities.

[Google Cloud](/index.php?title=Google_Cloud&action=edit&redlink=1) offers RLHF services through [Vertex AI](/index.php?title=Vertex_AI&action=edit&redlink=1), providing pipelines for applying RLHF to [PaLM 2](/index.php?title=PaLM_2&action=edit&redlink=1), [FLAN-T5](/index.php?title=FLAN-T5&action=edit&redlink=1), and Llama 2.[&#91;23&#93;](#cite_note-gcloud-23)

[DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) developed several notable RLHF applications:

- **GopherCite** - trained models to cite evidence from the web[&#91;12&#93;](#cite_note-gophercite-12)

- **Sparrow** - combined RLHF with rule-based alignment[&#91;11&#93;](#cite_note-sparrow-11)

### Robotics and Games

In **robotics and control**, RLHF offers a way to teach robots complex behaviors that are hard to specify with a reward function. The original 2017 "Deep Reinforcement Learning from Human Preferences" paper demonstrated RLHF in simulated robotics and [Atari](/index.php?title=Atari&action=edit&redlink=1) games.[&#91;1&#93;](#cite_note-christiano2017-1) Early applications included training agents for Atari games and simulated robotics using human preferences, outperforming score-based RL. For Atari, humans viewed two clips of agent gameplay and indicated which looked better—agents learned to play successfully from preference data alone.

Researchers have demonstrated agents learning tasks like robotic manipulation and locomotion via human feedback comparisons. A human can watch two attempt videos (e.g. a robot stacking blocks) and indicate which attempt was better, and from this the robot eventually learns a policy that accomplishes the task as the human intends. This approach bypasses manually engineering a reward (which might accidentally encourage wrong behaviors) and instead leverages human intuition about what the correct outcome looks like. The original 2017 experiments showed, for example, a simulated robot learning to do a backflip and a drive-and-park task solely from human preference judgments. Subsequent works have applied preference-based RL in real robot settings, though challenges remain in scaling up human feedback for very high-dimensional robotic controllers.

Contemporary robotics applications use RLHF for:

- Robotic navigation with human feedback on optimal paths

- Manipulation tasks requiring delicate operations

- In robotics, RLHF is used for tasks like handovers and safety interventions

- Human-robot collaboration learning appropriate interaction behaviors

- Autonomous vehicles training on driving style preferences

Another area is **video game agents** and other **interactive environments**. RLHF can train game-playing bots not just to win in terms of game score, but to behave in ways that human players or spectators prefer. This could mean more human-like behavior or adhering to certain play-style constraints that make the agent more cooperative or entertaining. In gaming, RLHF has enabled more sophisticated AI opponents. [OpenAI Five](/index.php?title=OpenAI_Five&action=edit&redlink=1) for [Dota 2](/index.php?title=Dota_2&action=edit&redlink=1) defeated professional players using techniques related to RLHF. [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1)'s [AlphaStar](/index.php?title=AlphaStar&action=edit&redlink=1) achieved superhuman [StarCraft II](/index.php?title=StarCraft_II&action=edit&redlink=1) performance incorporating human feedback elements. As a case study, OpenAI Five (the Dota 2 bot) and DeepMind's AlphaStar (StarCraft II bot) primarily used self-play RL with game reward, but the general paradigm of incorporating human input (such as imitation of human gameplay or preference tuning) is closely related to RLHF's philosophy.

### Other Domains

Beyond these, RLHF or variants of it have been explored in domains like **image generation** and **computer vision**. Generative models for images (e.g. text-to-image models) can produce outputs that are then ranked by humans for quality and alignment with the prompt; a reward model can be trained on these rankings, and the image generator can be fine-tuned accordingly. RLHF has found applications in **text-to-image generation**, using [Denoising Diffusion Policy Optimization](/index.php?title=Denoising_Diffusion_Policy_Optimization&action=edit&redlink=1) (DDPO) to train on aesthetic preferences.[&#91;24&#93;](#cite_note-ddpo-24) This has been used to adjust models like diffusion-based image generators to better match user aesthetic preferences or safety standards. For example, researchers have collected human preference data on whether generated images are accurate and non-offensive, and used RLHF methods to make the generator more aligned with those preferences.

RLHF is also used in:

- AI image generation to gauge realism or mood

- Healthcare for patient education

- [Recommender systems](/index.php?title=Recommender_system&action=edit&redlink=1) for engagement - optimizing recommendation policies based on feedback beyond simple clicks, such as asking users directly which of two recommendations they prefer, to capture satisfaction more directly

- Multimodal tasks like text-to-image alignment

In summary, RLHF is a versatile framework wherever **human judgment is the gold standard** for an AI's performance. By leveraging human comparisons as training data, the technique has enabled AI systems to achieve new levels of alignment in outputs that involve subjective criteria or hard-to-specify goals.

| Domain | Example | Benefits |
| --- | --- | --- |
| LLMs | ChatGPT, Claude, InstructGPT | Improved helpfulness, safety, and instruction-following |
| Games | Atari agents, OpenAI Five, AlphaStar | Better exploration, robustness, and human-like behavior |
| Robotics | Simulated tasks, manipulation, navigation | Alignment with human demonstrations and preferences |
| Image Generation | Text-to-image models, DDPO | Reduced overfitting, better quality, aesthetic alignment |
| Healthcare | Patient education systems | Accurate, ethical responses |
| Recommender Systems | Content recommendation | Better user satisfaction beyond clicks |

## Advantages and Benefits

Reinforcement learning from human feedback offers several benefits over conventional training approaches and compelling advantages that explain its rapid adoption. A primary advantage is that it can capture nuanced, qualitative aspects of human preferences that are infeasible to encode in a reward function or loss function. **Flexibility in capturing complex preferences** - RLHF can align models with subtle, context-dependent human judgments nearly impossible to specify through hand-coded rules. This helps tackle the long-standing problem in AI of value misalignment – where an agent achieves the literal objective it was given, but not the outcome humans actually wanted. By defining the objective through human feedback, RLHF directly optimizes what humans care about (at least to the extent that the human feedback is representative of true preferences). This makes it a powerful tool for **AI alignment**, especially in scenarios involving ethics, safety, or complex social values. For example, when training a chatbot to avoid toxic or biased language, it is difficult to enumerate all undesirable behaviors as rules; instead, humans can simply give feedback on outputs and the model learns an implicit reward for "harmless" responses.

Another benefit is **data efficiency in fine-tuning**. In many cases, a relatively small amount of human feedback can substantially improve a large model's performance on subjective tasks. Compared to collecting millions of explicit labels or examples, collecting a few thousand preference comparisons is often enough to significantly steer a model's behavior. InstructGPT's results, where a 1.3B model with RLHF surpassed a 175B model, exemplify how human feedback can unlock latent capabilities of a model more effectively than just scaling up model size or unsupervised data. This suggests that for certain tasks, *quality* of data (human-informed reward signals) can beat sheer quantity of data. **Practical effectiveness** - proven across diverse tasks and scales, with 15-85% improvements across various metrics.

RLHF fine-tuning has also been observed to generalize a model in ways that improve user experience beyond the specific prompts seen during training – e.g. making a language model reliably follow arbitrary new instructions, not just the ones in the training set. Other advantages include **implicit reward shaping** - learns reward functions from data rather than hand-specified proxies, **maturity** - multiple open-source implementations exist with documented best practices, and **beyond demonstrations** - can discover strategies superior to individual examples through optimization.

From a practical product standpoint, RLHF has enabled AI systems that are **more useful and user-friendly**. Users generally prefer the outputs of models tuned with human feedback, finding them more helpful, correct, and aligned with what was asked. These models are better at saying "no" to inappropriate requests and explaining their refusals, which is critical for deploying AI responsibly. OpenAI reported that using RLHF dramatically reduced the frequency of false or fabricated statements ("hallucinations") and toxic content in their model's outputs. Likewise, DeepMind's Sparrow saw an improvement in following conversation rules and providing evidence when available. By iteratively refining AI behavior with human input, developers can target specific weaknesses (e.g. a tendency to give unsafe advice) and improve them in a way that might be hard to achieve with static training data alone.

The technique successfully handles tasks spanning summarization, dialogue, question answering, code generation, creative writing, and instruction following.[&#91;3&#93;](#cite_note-ibm-3)

## Challenges and Limitations

Despite its successes and effectiveness, RLHF comes with a number of challenges and limitations, facing significant challenges.

### Cost and Scalability

One major issue is the **cost and scalability of human feedback**. Obtaining high-quality human preference data can be expensive and time-consuming, since it often requires skilled annotators to carefully compare outputs or provide demonstrations. Human preference data collection is expensive, costing roughly $1-10+ per preference pair at scale, often requiring thousands of annotations. InstructGPT's alignment estimated at approximately $1 million for dataset creation. Quality annotation requires recruiting, training, and managing teams of labelers. As models become more capable and are applied to broader tasks, the amount of feedback required to cover diverse scenarios increases. Relying heavily on human-in-the-loop training can thus become a bottleneck for scaling up AI systems. There is ongoing research into reducing the needed feedback or making better use of limited feedback (for instance, by active learning strategies to query the most informative comparisons, or by supplementing human feedback with synthetic feedback as discussed below).

Computational requirements pose another barrier. PPO-based RLHF requires maintaining **four large models simultaneously**: the policy model, reference model, reward model, and value/critic model. For models exceeding 70 billion parameters, this creates enormous memory challenges. Recent research suggests **RLHF doesn't scale as effectively as pretraining**, with larger policy models benefiting less and improvements saturating quickly.[&#91;25&#93;](#cite_note-rlhf_scaling-25)

### Human Feedback Quality and Bias

Another limitation is that **human feedback is noisy and potentially biased**. Different annotators may have inconsistent preferences or make mistakes, and even a single person's judgment can vary over time or context. Human annotators are fallible, making systematic errors. Annotators frequently disagree on preferences, adding variance. If the feedback dataset is not carefully curated, the reward model may learn a skewed version of human preferences. In practice, if the group of human evaluators is not representative of end users, the model could become biased towards the values or tastes of that group. Human preferences are subjective and can introduce biases, leading to models that favor majority opinions and disadvantage underrepresented groups.[&#91;17&#93;](#cite_note-casper-17) For example, a model tuned with feedback from a specific demographic might not perform well for users from a different background, or it might unintentionally amplify the biases present in the trainers' judgments. This raises concerns about fairness and objectivity of the RLHF-trained models. Some preferences (like what content is appropriate or offensive) are subjective and culturally dependent, so an AI aligned via one set of human feedback might still be misaligned for other populations.

As AI systems become more capable, human oversight becomes increasingly difficult. The Bradley-Terry model assumes preferences are transitive and consistent, but real human preferences often violate these assumptions.

### Reward Hacking and Overoptimization

A related risk is **reward model misuse or overoptimization**, often known in RL as the reward hacking or Goodhart's Law problem. **Reward hacking** represents a fundamental problem where models exploit weaknesses in reward models to achieve high scores without genuinely improving quality.[&#91;26&#93;](#cite_note-reward_hacking-26) Since the reward model is an imperfect proxy for what humans truly want, a powerful agent may find ways to game this proxy. Research demonstrates "reward overoptimization": as policies optimize proxy rewards, true reward initially increases but then declines after reaching a peak.[&#91;20&#93;](#cite_note-gao-20) In other words, the policy may produce outputs that score highly according to the learned reward but are not actually what humans would prefer upon closer inspection. This could happen if there are subtle flaws in the reward model's understanding. For instance, a language model might learn to output certain phrases it "knows" the reward model likes, rather than genuinely helpful content – leading to insincere or repetitive answers that trick the reward metric. 

Manifestations include:

- **Sycophancy** - agreeing with user beliefs rather than providing truthful information[&#91;27&#93;](#cite_note-sycophancy-27)

- **Sophistical reasoning** - generating convincing but incorrect arguments

- **Length bias exploitation** - producing unnecessarily verbose responses

- **Formatting tricks** - using layouts that fool reward models

- Models generating confident but incorrect outputs

- Mode collapse, reducing output diversity

Ensuring that the reward model remains a faithful reflection of human preferences is an open challenge; techniques like regularizing the policy updates (as PPO does) and continually updating the reward model with fresh human data can mitigate this, but not fully eliminate it. In worst-case scenarios, if the human feedback data is adversarially manipulated (either accidentally or maliciously), the agent could be pushed to behaviors that are actively harmful or undesired. Researchers have noted the need for safeguards, such as monitoring for reward model "exploitation" and having humans in the loop to catch obvious failures during training. RLHF can exacerbate hallucinations in LLMs and is susceptible to adversarial attacks.

### Training Instability and Complexity

PPO is notoriously finicky, highly sensitive to hyperparameter choices. The multi-stage pipeline creates intricate dependencies—poor SFT models produce poor reward model training data, leading to ineffective RL optimization. The **alignment tax** means RLHF can degrade performance on general capabilities not targeted during alignment. Theoretical challenges include non-stationarity, scalability, and evaluation without ground truth.

### Evaluation and Fundamental Limitations

Finally, there is the issue of **evaluation**: judging how well an RLHF-trained model actually aligns with human values can be difficult. The model is optimized to do well on the feedback it was given, but how do we verify it will generalize to new situations in alignment with what humans want? If the feedback dataset doesn't cover certain edge cases or adversarial prompts, the model might still err in those cases. Hence, thorough testing – often with adversarial or diverse queries – is necessary to probe the model's behavior beyond the training feedback. For example, after training Sparrow, DeepMind had participants try to trick the agent into breaking rules to see how often it fails. These evaluations help quantify progress but are inherently limited by the creativity and perspectives of the evaluators.

The objective optimized by RL—maximizing reward model scores—does not perfectly align with true human preferences.[&#91;17&#93;](#cite_note-casper-17) Creating a single reward model for diverse human values is fundamentally misspecified. According to [Goodhart's law](/index.php?title=Goodhart%27s_law&action=edit&redlink=1), "when a measure becomes a target, it ceases to be a good measure"—sufficiently powerful optimization will always find ways to game the proxy. Critics argue that RLHF is insufficient for aligning superintelligent AI due to these flaws.

## Alternative and Complementary Approaches

As RLHF becomes a standard tool, researchers are exploring extensions and alternatives to address its limitations.

### [Direct Preference Optimization](/wiki/direct_preference_optimization) (DPO)

One notable variant is **[Direct Preference Optimization](/wiki/direct_preference_optimization) (DPO)**, introduced in 2023, which aims to eliminate the reinforcement learning step altogether and emerged as a simpler, more stable alternative to RLHF, eliminating separate reward model training and RL optimization.[&#91;16&#93;](#cite_note-dpo-16) DPO is an algorithm that takes the preference data (pairwise comparisons) and directly fine-tunes the main model to satisfy those preferences using a simple supervised objective, rather than training a separate reward model and doing RL.

DPO's key insight is that the optimal policy for the RLHF objective can be expressed analytically, enabling direct optimization from preference data using supervised learning. Essentially, DPO mathematically derives a loss function for the policy such that optimizing this loss is theoretically equivalent to optimizing the expected reward as in RLHF, under certain assumptions. The benefit is that it forgoes the complexity of RL training (which can be unstable and sensitive to hyperparameters) and instead uses standard gradient descent on a tailored classification or regression loss constructed from the preference pairs.

The DPO loss is:

  
    
      
        
          L
          
            D
            P
            O
          
        
        (
        &#x03B8;
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
          
        
        
          [
          
            log
            &#x2061;
            &#x03C3;
            
              (
              
                &#x03B2;
                &#x22C5;
                log
                &#x2061;
                
                  
                    
                      
                        &#x03C0;
                        
                          &#x03B8;
                        
                      
                      (
                      
                        y
                        
                          w
                        
                      
                      
                        |
                      
                      x
                      )
                    
                    
                      
                        &#x03C0;
                        
                          r
                          e
                          f
                        
                      
                      (
                      
                        y
                        
                          w
                        
                      
                      
                        |
                      
                      x
                      )
                    
                  
                
                &#x2212;
                &#x03B2;
                &#x22C5;
                log
                &#x2061;
                
                  
                    
                      
                        &#x03C0;
                        
                          &#x03B8;
                        
                      
                      (
                      
                        y
                        
                          l
                        
                      
                      
                        |
                      
                      x
                      )
                    
                    
                      
                        &#x03C0;
                        
                          r
                          e
                          f
                        
                      
                      (
                      
                        y
                        
                          l
                        
                      
                      
                        |
                      
                      x
                      )
                    
                  
                
              
              )
            
          
          ]
        
      
    
    {\displaystyle L_{DPO}(\theta )=-\mathbb {E} _{(x,y_{w},y_{l})}\left[\log \sigma \left(\beta \cdot \log {\frac {\pi _{\theta }(y_{w}|x)}{\pi _{ref}(y_{w}|x)}}-\beta \cdot \log {\frac {\pi _{\theta }(y_{l}|x)}{\pi _{ref}(y_{l}|x)}}\right)\right]}
  
![{\displaystyle L_{DPO}(\theta )=-\mathbb {E} _{(x,y_{w},y_{l})}\left[\log \sigma \left(\beta \cdot \log {\frac {\pi _{\theta }(y_{w}|x)}{\pi _{ref}(y_{w}|x)}}-\beta \cdot \log {\frac {\pi _{\theta }(y_{l}|x)}{\pi _{ref}(y_{l}|x)}}\right)\right]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3ee9daaaa2b970954f50788bfd40bd33a5519843)
DPO's advantages include:

- **Simplicity** - requires only policy model and frozen reference model

- **Stability** - supervised learning is more stable than PPO optimization

- **Computational efficiency** - approximately half the memory of PPO-based RLHF

- **Performance** - matches or exceeds PPO-based RLHF on many tasks

In experiments, DPO has been shown to achieve performance on par with PPO-based RLHF in tasks like controlling the sentiment of language model outputs and improving dialogue responses. Because it's easier to implement and tune (no need to worry about reward scaling, discount factors, or exploration vs. exploitation), DPO and similar "RL-free" methods might lower the barrier to incorporating human feedback in model training. However, DPO still ultimately relies on the quality of the human preference data and can suffer from the same bias issues if that data is unrepresentative.

The method has seen rapid adoption with models like [Zephyr](/index.php?title=Zephyr&action=edit&redlink=1), [Mixtral](/index.php?title=Mixtral&action=edit&redlink=1), and Intel's NeuralChat.[&#91;28&#93;](#cite_note-dpo_blog-28)

### RLAIF (Reinforcement Learning from AI Feedback)

Another development is **Reinforcement Learning from AI Feedback (RLAIF)**, where the role of the human evaluator is partly or wholly replaced by an AI system. **RLAIF** replaces human preference labels with AI-generated evaluations, addressing RLHF's scalability bottleneck.[&#91;29&#93;](#cite_note-rlaif-29) The approach follows standard RLHF structure but uses an off-the-shelf LLM to generate preference labels.

Similarly, researchers at Google have experimented with having language models judge other models' answers for qualities like factual correctness, to reduce the need for human annotators. In the RL phase of Constitutional AI, one model generates candidate responses and another model (or the same model in a self-referee mode) judges which response better adheres to the given ethical principles – effectively the AI is providing feedback according to a human-designed constitution. This produces a preference signal (good vs. bad responses) that can train a reward model or directly train the policy, analogous to RLHF but without constant human comparison in the loop.

Research demonstrates RLAIF achieves **performance on-par with RLHF** across summarization, helpful dialogue, and harmless dialogue tasks. RLAIF approaches can dramatically cut down on cost, since once a robust AI evaluator is in place, it can label large amounts of data quickly. Advantages include dramatic cost reduction, vastly greater scalability, more consistency than human evaluators, and faster iteration cycles.

However, these methods depend on the AI feedback being reliable – essentially, the feedback model's alignment becomes critical. Anthropic reported that their RL from AI feedback was able to achieve results comparable to standard RLHF in making an assistant harmless, though they still used human oversight to set the rules and evaluate final behavior. RLAIF is seen as a promising direction to scale alignment techniques to very powerful models (which might require prohibitively extensive human feedback), but it is not a complete replacement for human judgment, especially on questions of ethics and values.

### Constitutional AI and Hybrid Approaches

Constitutional AI represents more than just RLAIF—it's a philosophical approach emphasizing explicit, transparent value specification.[&#91;22&#93;](#cite_note-claude_constitution-22) Rather than learning implicit preferences, CAI encodes values in written principles drawn from established sources.

The methodology combines self-improvement through critique-and-revision with RLAIF supervision. **Collective Constitutional AI** extends this by incorporating democratic input, with experiments involving approximately 1,000 participants voting on AI principles.[&#91;30&#93;](#cite_note-collective-30)

Hybrid approaches combining multiple techniques show promise:

- Using RLHF for helpfulness while Constitutional AI handles harmlessness

- Integrating DPO with process supervision for complex reasoning

- Mixing human and AI feedback strategically

- Multi-stage training alternating between different alignment methods

### Other Improvements

Researchers are also investigating ways to make human feedback more efficient. This includes **active learning** strategies (where the algorithm selectively queries humans on the most informative or uncertain comparisons rather than random samples) and **semi-automated feedback** (using heuristic or model-based pre-screening to reduce trivial queries). Another direction is combining **demonstrations and preferences** – e.g. using a few high-quality human demonstrations to bootstrap the policy and then preferences for further refinement, which can reduce the burden on preference labeling. There is ongoing work on **improving reward models** as well: better modeling techniques, interpretability of what the reward model has learned, and methods to detect reward model failure modes.

## Benefits and Impact

By incorporating human evaluative feedback in the loop, RLHF enables AI systems to produce outputs that are more aligned with complex human intentions, a method that has become central in training advanced [large language models](/wiki/large_language_model) and AI [conversational agents](/index.php?title=Conversational_agent&action=edit&redlink=1) to be more helpful, truthful, and safe.

In conclusion, reinforcement learning from human feedback has proven to be a remarkably effective paradigm for aligning AI behavior with human goals, and it has quickly moved from a research concept to a cornerstone of modern AI system development. As AI systems grow more capable, RLHF and its evolving variants will likely play an important role in ensuring these models remain responsive to human values and do what we intend. The field is rapidly advancing, with active research addressing the current limitations (cost, bias, scalability) and proposing new frameworks to incorporate human (and AI) feedback more robustly. RLHF sits at the intersection of machine learning and human-computer interaction, bringing a human touch into the training loop of AI – a crucial step towards AI that is not just intelligent, but also aligned with the people who use it.

## Future Directions and Open Problems

The RLHF research community faces numerous open challenges:

### Improving Reward Models

- Adversarial training for robustness

- Ensemble methods aggregating multiple models

- Uncertainty quantification for confidence assessment

- Meta-learning techniques preserving evaluation quality

### Algorithmic Improvements

- Developing RL algorithms specifically designed for LLMs

- More efficient optimization with parameter reallocation techniques[&#91;31&#93;](#cite_note-realhf-31)

- Better parallelization strategies

- Reduced memory footprint approaches

### Addressing Scalability

- Hybrid human-AI approaches

- Recursive supervision with hierarchical structures

- Debate and verification systems

- Constitutional approaches enabling customizable values

### Tackling Fundamental Limitations

- Better ways to capture diverse human preferences

- Aggregate multi-stakeholder values

- Dynamic preference learning

- Detection methods for reward hacking

- Causality-based approaches to reward modeling

### Theoretical Understanding

- Why does RLHF work?

- What is the relationship between proxy and true rewards?

- Are there tasks where RLHF fundamentally cannot work?

- What are the limits of preference-based learning?

### Practical Deployment

- Ensuring annotator consistency

- Proper evaluation methodologies

- Detecting subtle misalignment in deployed systems

- Maintaining alignment over time

- Transparent governance and auditing practices

## See Also

- [Reinforcement learning](/wiki/reinforcement_learning)

- [Machine learning](/wiki/machine_learning)

- [Artificial intelligence alignment](/index.php?title=Artificial_intelligence_alignment&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1)

- [ChatGPT](/wiki/chatgpt)

- [GPT-4](/wiki/gpt-4)

- [Claude (chatbot)](/index.php?title=Claude_(chatbot)&action=edit&redlink=1)

- [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)

- [Direct Preference Optimization](/wiki/direct_preference_optimization)

- [Inverse reinforcement learning](/index.php?title=Inverse_reinforcement_learning&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-christiano2017_1-0) [1.1](#cite_ref-christiano2017_1-1) [1.2](#cite_ref-christiano2017_1-2) [1.3](#cite_ref-christiano2017_1-3) [1.4](#cite_ref-christiano2017_1-4) Christiano, Paul F., et al. "Deep reinforcement learning from human preferences." Advances in neural information processing systems 30 (2017). [https://arxiv.org/abs/1706.03741](https://arxiv.org/abs/1706.03741) and [https://proceedings.neurips.cc/paper_files/paper/2017/file/d5e2c0adad503c91f91df240d0cd4e49-Paper.pdf](https://proceedings.neurips.cc/paper_files/paper/2017/file/d5e2c0adad503c91f91df240d0cd4e49-Paper.pdf)

2. ↑ [2.0](#cite_ref-instructgpt_2-0) [2.1](#cite_ref-instructgpt_2-1) [2.2](#cite_ref-instructgpt_2-2) [2.3](#cite_ref-instructgpt_2-3) [2.4](#cite_ref-instructgpt_2-4) [2.5](#cite_ref-instructgpt_2-5) [2.6](#cite_ref-instructgpt_2-6) [2.7](#cite_ref-instructgpt_2-7) [2.8](#cite_ref-instructgpt_2-8) Ouyang, Long, et al. "Training language models to follow instructions with human feedback." Advances in Neural Information Processing Systems 35 (2022): 27730-27744. [https://arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155) and [https://cdn.openai.com/papers/Training_language_models_to_follow_instructions_with_human_feedback.pdf](https://cdn.openai.com/papers/Training_language_models_to_follow_instructions_with_human_feedback.pdf)

3. ↑ [3.0](#cite_ref-ibm_3-0) [3.1](#cite_ref-ibm_3-1) [3.2](#cite_ref-ibm_3-2) [3.3](#cite_ref-ibm_3-3) IBM. "What Is Reinforcement Learning From Human Feedback (RLHF)?" IBM Think, 2024. [https://www.ibm.com/think/topics/rlhf](https://www.ibm.com/think/topics/rlhf)

4. ↑ [4.0](#cite_ref-huggingface_4-0) [4.1](#cite_ref-huggingface_4-1) [4.2](#cite_ref-huggingface_4-2) [4.3](#cite_ref-huggingface_4-3) Lambert, Nathan, et al. "Illustrating Reinforcement Learning from Human Feedback (RLHF)." Hugging Face Blog, 2022. [https://huggingface.co/blog/rlhf](https://huggingface.co/blog/rlhf)

5. ↑ [5.0](#cite_ref-tamer_5-0) [5.1](#cite_ref-tamer_5-1) Knox, W. Bradley, and Peter Stone. "TAMER: Training an Agent Manually via Evaluative Reinforcement." 2008 7th IEEE International Conference on Development and Learning. IEEE, 2008. [https://ieeexplore.ieee.org/document/4640845/](https://ieeexplore.ieee.org/document/4640845/)

6. ↑ [6.0](#cite_ref-akrour_6-0) [6.1](#cite_ref-akrour_6-1) Akrour, Riad, Marc Schoenauer, and Michèle Sebag. "Preference-based policy learning." Joint European Conference on Machine Learning and Knowledge Discovery in Databases. Springer, Berlin, Heidelberg, 2011. [https://link.springer.com/chapter/10.1007/978-3-642-23780-5_11](https://link.springer.com/chapter/10.1007/978-3-642-23780-5_11) and [https://www.researchgate.net/publication/230609355_APRIL_Active_Preference-learning_based_Reinforcement_Learning](https://www.researchgate.net/publication/230609355_APRIL_Active_Preference-learning_based_Reinforcement_Learning)

7. ↑ [7.0](#cite_ref-ziegler_7-0) [7.1](#cite_ref-ziegler_7-1) Ziegler, Daniel M., et al. "Fine-tuning language models from human preferences." arXiv preprint arXiv:1909.08593 (2019). [https://arxiv.org/abs/1909.08593](https://arxiv.org/abs/1909.08593) and [https://openai.com/index/fine-tuning-gpt-2/](https://openai.com/index/fine-tuning-gpt-2/)

8. ↑ [8.0](#cite_ref-stiennon_8-0) [8.1](#cite_ref-stiennon_8-1) Stiennon, Nisan, et al. "Learning to summarize from human feedback." Advances in Neural Information Processing Systems 33 (2020): 3008-3021. [https://arxiv.org/abs/2009.01325](https://arxiv.org/abs/2009.01325) and [https://openai.com/index/learning-to-summarize-with-human-feedback/](https://openai.com/index/learning-to-summarize-with-human-feedback/)

9. ↑ [9.0](#cite_ref-chatgpt_9-0) [9.1](#cite_ref-chatgpt_9-1) OpenAI. "ChatGPT: Optimizing Language Models for Dialogue." OpenAI Blog, 2022. [https://openai.com/index/chatgpt/](https://openai.com/index/chatgpt/)

10. ↑ [10.0](#cite_ref-constitutional_10-0) [10.1](#cite_ref-constitutional_10-1) [10.2](#cite_ref-constitutional_10-2) [10.3](#cite_ref-constitutional_10-3) Bai, Yuntao, et al. "Constitutional AI: Harmlessness from AI Feedback." arXiv preprint arXiv:2212.08073 (2022). [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073) and [https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback)

11. ↑ [11.0](#cite_ref-sparrow_11-0) [11.1](#cite_ref-sparrow_11-1) Glaese, Amelia, et al. "Improving alignment of dialogue agents via targeted human judgements." arXiv preprint arXiv:2209.14375 (2022). [https://arxiv.org/abs/2209.14375](https://arxiv.org/abs/2209.14375)

12. ↑ [12.0](#cite_ref-gophercite_12-0) [12.1](#cite_ref-gophercite_12-1) Menick, Jacob, et al. "Teaching language models to support answers with verified quotes." arXiv preprint arXiv:2203.11147 (2022). [https://arxiv.org/abs/2203.11147](https://arxiv.org/abs/2203.11147)

13. ↑ [13.0](#cite_ref-llama2_13-0) [13.1](#cite_ref-llama2_13-1) [13.2](#cite_ref-llama2_13-2) Touvron, Hugo, et al. "Llama 2: Open foundation and fine-tuned chat models." arXiv preprint arXiv:2307.09288 (2023). [https://arxiv.org/abs/2307.09288](https://arxiv.org/abs/2307.09288)

14. ↑ [14.0](#cite_ref-gemini_14-0) [14.1](#cite_ref-gemini_14-1) Google. "Introducing Gemini: our largest and most capable AI model." Google Blog, 2023. [https://blog.google/technology/ai/google-gemini-ai/](https://blog.google/technology/ai/google-gemini-ai/)

15. ↑ [15.0](#cite_ref-ppo_15-0) [15.1](#cite_ref-ppo_15-1) Schulman, John, et al. "Proximal policy optimization algorithms." arXiv preprint arXiv:1707.06347 (2017). [https://arxiv.org/abs/1707.06347](https://arxiv.org/abs/1707.06347) and [https://spinningup.openai.com/en/latest/algorithms/ppo.html](https://spinningup.openai.com/en/latest/algorithms/ppo.html)

16. ↑ [16.0](#cite_ref-dpo_16-0) [16.1](#cite_ref-dpo_16-1) [16.2](#cite_ref-dpo_16-2) Rafailov, Rafael, et al. "Direct preference optimization: Your language model is secretly a reward model." arXiv preprint arXiv:2305.18290 (2023). [https://arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290)

17. ↑ [17.0](#cite_ref-casper_17-0) [17.1](#cite_ref-casper_17-1) [17.2](#cite_ref-casper_17-2) Casper, Stephen, et al. "Open problems and fundamental limitations of reinforcement learning from human feedback." arXiv preprint arXiv:2307.15217 (2023). [https://arxiv.org/abs/2307.15217](https://arxiv.org/abs/2307.15217)

18. [↑](#cite_ref-rlhfbook_18-0) Lambert, Nathan. "Reward Modeling." RLHF Book, 2024. [https://rlhfbook.com/c/07-reward-models.html](https://rlhfbook.com/c/07-reward-models.html)

19. [↑](#cite_ref-ppo_details_19-0) Huang, Shengyi, et al. "The 37 Implementation Details of Proximal Policy Optimization." ICLR Blog Track, 2022. [https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/](https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/)

20. ↑ [20.0](#cite_ref-gao_20-0) [20.1](#cite_ref-gao_20-1) Gao, Leo, et al. "Scaling laws for reward model overoptimization." International Conference on Machine Learning. PMLR, 2023. [https://arxiv.org/abs/2210.10760](https://arxiv.org/abs/2210.10760)

21. [↑](#cite_ref-korbak_21-0) Korbak, Tomasz, et al. "RL with KL penalties is better viewed as Bayesian inference." Blog post, 2022. [https://tomekkorbak.com/2022/05/20/rl-with-kl-penalties-bayesian-inference/](https://tomekkorbak.com/2022/05/20/rl-with-kl-penalties-bayesian-inference/)

22. ↑ [22.0](#cite_ref-claude_constitution_22-0) [22.1](#cite_ref-claude_constitution_22-1) Anthropic. "Claude's Constitution." Anthropic News, 2023. [https://www.anthropic.com/news/claudes-constitution](https://www.anthropic.com/news/claudes-constitution)

23. [↑](#cite_ref-gcloud_23-0) Google Cloud. "RLHF on Google Cloud." Google Cloud Blog, 2023. [https://cloud.google.com/blog/products/ai-machine-learning/rlhf-on-google-cloud](https://cloud.google.com/blog/products/ai-machine-learning/rlhf-on-google-cloud)

24. [↑](#cite_ref-ddpo_24-0) Black, Kevin, et al. "Training diffusion models with reinforcement learning." arXiv preprint arXiv:2305.13301 (2023). [https://arxiv.org/abs/2305.13301](https://arxiv.org/abs/2305.13301) and [https://huggingface.co/blog/trl-ddpo](https://huggingface.co/blog/trl-ddpo)

25. [↑](#cite_ref-rlhf_scaling_25-0) Liang, Zhihui, et al. "Does RLHF Scale? An Analysis of Alignment in Language Models." arXiv preprint arXiv:2412.06000 (2024). [https://arxiv.org/abs/2412.06000](https://arxiv.org/abs/2412.06000)

26. [↑](#cite_ref-reward_hacking_26-0) Weng, Lilian. "Reward Hacking in RLHF." Lil'Log, 2024. [https://lilianweng.github.io/posts/2024-11-28-reward-hacking/](https://lilianweng.github.io/posts/2024-11-28-reward-hacking/)

27. [↑](#cite_ref-sycophancy_27-0) Sharma, Mrinank, et al. "Towards understanding sycophancy in language models." arXiv preprint arXiv:2310.13548 (2023). [https://arxiv.org/abs/2310.13548](https://arxiv.org/abs/2310.13548)

28. [↑](#cite_ref-dpo_blog_28-0) Tunstall, Lewis, et al. "Preference Tuning LLMs with Direct Preference Optimization Methods." Hugging Face Blog, 2023. [https://huggingface.co/blog/pref-tuning](https://huggingface.co/blog/pref-tuning)

29. [↑](#cite_ref-rlaif_29-0) Lee, Harrison, et al. "RLAIF: Scaling reinforcement learning from human feedback with AI feedback." arXiv preprint arXiv:2309.00267 (2023). [https://arxiv.org/abs/2309.00267](https://arxiv.org/abs/2309.00267)

30. [↑](#cite_ref-collective_30-0) Anthropic. "Collective Constitutional AI: Aligning a Language Model with Public Input." Anthropic Research, 2023. [https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input)

31. [↑](#cite_ref-realhf_31-0) Mei, Zhewei, et al. "ReaLHF: Optimized RLHF Training for Large Language Models through Parameter Reallocation." arXiv preprint arXiv:2406.14088 (2024). [https://arxiv.org/abs/2406.14088](https://arxiv.org/abs/2406.14088)

## External Links

- [Illustrating Reinforcement Learning from Human Feedback (RLHF)](https://huggingface.co/blog/rlhf) - Hugging Face Blog

- [RLHF Book](https://rlhfbook.com/) by Nathan Lambert

- [Learning from human preferences](https://openai.com/index/learning-from-human-preferences/) - OpenAI

- [Constitutional AI](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback) - Anthropic Research

- [Proximal Policy Optimization](https://spinningup.openai.com/en/latest/algorithms/ppo.html) - OpenAI Spinning Up