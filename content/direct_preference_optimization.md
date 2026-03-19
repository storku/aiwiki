---
title: "Direct Preference Optimization"
slug: "direct_preference_optimization"
categories:
  - "Machine_learning_terms"
  - "Artificial_intelligence"
  - "Terms"
  - "Reinforcement_learning"
---

**Direct Preference Optimization (DPO)** is a [machine learning](/wiki/machine_learning) algorithm for aligning [large language models](/wiki/large_language_model) (LLMs) with human preferences without requiring a separate [reward model](/index.php?title=Reward_model&action=edit&redlink=1) or [reinforcement learning](/wiki/reinforcement_learning) optimization loop. Introduced in 2023 by Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, and Chelsea Finn at [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1), DPO reformulates the standard [RLHF](/wiki/rlhf) objective into a simple classification loss that can be optimized directly on preference data.[&#91;1&#93;](#cite_note-dpo-1) The paper's subtitle, "Your Language Model is Secretly a Reward Model," captures the central insight: the language model's own log-probabilities can serve as an implicit reward function, making an explicit reward model unnecessary.

DPO has become one of the most widely adopted alternatives to traditional [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1) (PPO)-based RLHF, seeing rapid uptake in both academic research and industry practice. Models such as [Zephyr](/index.php?title=Zephyr_(language_model)&action=edit&redlink=1), [Mixtral](/index.php?title=Mixtral&action=edit&redlink=1) Instruct, and numerous [Llama](/index.php?title=Llama_(language_model)&action=edit&redlink=1)-based fine-tunes have been trained using DPO or its variants.[&#91;2&#93;](#cite_note-dpo_blog-2) The algorithm's simplicity, computational efficiency, and competitive performance have made it a standard tool in the modern LLM alignment toolkit.

## Background and Motivation

### The RLHF Pipeline

The standard approach to aligning language models with human preferences, [Reinforcement Learning from Human Feedback](/wiki/rlhf) (RLHF), involves a three-stage pipeline.[&#91;3&#93;](#cite_note-instructgpt-3) First, a pretrained language model is fine-tuned with [supervised learning](/wiki/supervised_learning) on high-quality demonstrations (the [supervised fine-tuning](/wiki/supervised_fine-tuning), or SFT, stage). Second, human annotators compare pairs of model-generated responses and indicate which they prefer; this preference data trains a separate reward model that predicts human preferences as a scalar score. Third, the SFT model is further fine-tuned using a reinforcement learning algorithm (typically PPO) to maximize the reward model's scores, subject to a [KL divergence](/index.php?title=KL_divergence&action=edit&redlink=1) penalty that prevents the model from diverging too far from the SFT policy.

This pipeline, while effective, is complex and computationally demanding. It requires training and maintaining multiple large models simultaneously (the policy model, a reference copy of the SFT model, the reward model, and a value/critic network for PPO), and PPO itself is notoriously sensitive to hyperparameter choices. The reinforcement learning stage introduces additional complexity through reward scaling, discount factors, and exploration-exploitation trade-offs that have no natural analogue in supervised learning. These practical difficulties motivated the search for simpler alignment methods that could achieve comparable results.

### The Core Problem

The fundamental question DPO addresses is whether it is possible to skip the intermediate reward modeling and reinforcement learning stages entirely, while still optimizing the same objective that RLHF optimizes. Rafailov et al. showed that, under the [Bradley-Terry model](/index.php?title=Bradley%E2%80%93Terry_model&action=edit&redlink=1) of preferences, the answer is yes: there exists an analytical mapping from reward functions to optimal policies that allows the reward model to be eliminated from the optimization procedure entirely.[&#91;1&#93;](#cite_note-dpo-1)

## Mathematical Formulation

### The Bradley-Terry Preference Model

DPO's derivation begins with the Bradley-Terry model, the same preference model used in standard RLHF reward model training. Given a prompt x, a preferred (winning) response y_w, and a dispreferred (losing) response y_l, the Bradley-Terry model assumes that the probability of the human preferring y_w over y_l is:

P(y_w > y_l | x) = sigma(r(x, y_w) - r(x, y_l))

where sigma is the [sigmoid function](/wiki/sigmoid_function) and r(x, y) is the latent reward function that assigns a scalar quality score to each prompt-response pair.[&#91;4&#93;](#cite_note-bt-4) This model, originally developed by Ralph Allan Bradley and Milton E. Terry in 1952 for paired comparisons, has become the standard probabilistic framework for preference learning in RLHF.

### The KL-Constrained Reward Maximization Objective

Standard RLHF optimizes the following KL-constrained objective:

max_pi E_{x ~ D, y ~ pi}[r(x, y)] - beta * D_KL(pi(y|x) || pi_ref(y|x))

where pi is the policy being optimized, pi_ref is the reference (SFT) policy, r is the learned reward model, and beta is a coefficient controlling the strength of the KL penalty. This penalty prevents the policy from straying too far from the reference, which guards against reward hacking and maintains language fluency.[&#91;5&#93;](#cite_note-rlhf_hf-5)

### Closed-Form Optimal Policy

The key theoretical contribution of DPO is observing that this constrained optimization problem has a closed-form solution. The optimal policy pi* that maximizes the KL-constrained reward objective is:

pi*(y|x) = (1/Z(x)) * pi_ref(y|x) * exp(r(x, y) / beta)

where Z(x) is a partition function (normalizing constant) that depends only on the prompt x and the reference policy. This result follows from standard results in KL-regularized reinforcement learning and variational inference.[&#91;1&#93;](#cite_note-dpo-1)

### The Change of Variables

The crucial step in DPO's derivation is rearranging the closed-form solution to express the reward function in terms of the optimal policy:

r(x, y) = beta * log(pi*(y|x) / pi_ref(y|x)) + beta * log(Z(x))

This equation shows that the reward for any response can be written as a function of the log-ratio between the optimal policy and the reference policy, plus a prompt-dependent constant. When this expression is substituted into the Bradley-Terry preference model, the partition function Z(x) cancels out (because it appears identically for both the winning and losing responses in the same preference pair), yielding:

P(y_w > y_l | x) = sigma(beta * log(pi*(y_w|x) / pi_ref(y_w|x)) - beta * log(pi*(y_l|x) / pi_ref(y_l|x)))

This expression depends only on the policy being optimized and the frozen reference policy, with no explicit reward model anywhere.[&#91;1&#93;](#cite_note-dpo-1)

### The DPO Loss Function

Maximizing the log-likelihood of the observed preferences under the reparameterized model yields the DPO objective:

L_DPO(theta) = -E_{(x, y_w, y_l) ~ D}[log sigma(beta * log(pi_theta(y_w|x) / pi_ref(y_w|x)) - beta * log(pi_theta(y_l|x) / pi_ref(y_l|x)))]

where theta parameterizes the policy being trained, and D is the dataset of human preference pairs. This is a binary cross-entropy loss: for each preference pair, the model should assign a higher implicit reward (as measured by the log-probability ratio relative to the reference) to the preferred response than to the dispreferred one.[&#91;1&#93;](#cite_note-dpo-1)

The DPO loss can be interpreted as follows. Define the implicit reward of a response y given prompt x as:

r_implicit(x, y) = beta * log(pi_theta(y|x) / pi_ref(y|x))

Then the DPO loss simply asks the model to assign a higher implicit reward to the preferred response y_w than to the dispreferred response y_l, using a logistic (sigmoid) loss function. The parameter beta controls how aggressively the model deviates from the reference policy: larger beta values allow greater divergence, while smaller values keep the model closer to the SFT baseline.

### Gradient Analysis

The gradient of the DPO loss with respect to the model parameters reveals how the algorithm updates the policy. At a high level, the gradient increases the log-probability of the preferred response y_w and decreases the log-probability of the dispreferred response y_l, with the magnitude of each update weighted by how much the implicit reward model "gets the preference wrong." Specifically, when the model already strongly prefers y_w over y_l (i.e., the sigmoid is close to 1), the gradient is small; when the model incorrectly assigns higher implicit reward to y_l, the gradient is large. This self-weighting property makes DPO a form of importance-weighted supervised learning.[&#91;1&#93;](#cite_note-dpo-1)

## Comparison with RLHF (PPO-Based)

### Architectural Differences

The most striking difference between DPO and PPO-based RLHF lies in their computational requirements. PPO-based RLHF requires maintaining four large models simultaneously during training: the active policy model, a frozen copy of the reference (SFT) model for KL computation, the trained reward model, and a value (critic) network used by PPO for advantage estimation. For a 7-billion parameter base model, this means loading and potentially updating four copies of a similarly sized network, demanding substantial GPU memory.

DPO, by contrast, requires only two models: the policy model being trained and a frozen copy of the reference model. The reward model and critic network are entirely eliminated. This roughly halves the memory footprint compared to PPO-based RLHF, making DPO feasible on hardware that would be insufficient for the full PPO pipeline.[&#91;6&#93;](#cite_note-raschka-6)

| Aspect | RLHF (PPO-based) | DPO |
| --- | --- | --- |
| Models required during training | 4 (policy, reference, reward model, critic) | 2 (policy, reference) |
| Training stages | 3 (SFT, reward modeling, RL) | 2 (SFT, preference optimization) |
| Optimization type | Reinforcement learning (PPO) | Supervised learning (classification loss) |
| Data requirements | Preference pairs + separate reward model data | Preference pairs only |
| Hyperparameter sensitivity | High (learning rate, KL coefficient, PPO clip range, reward scaling, etc.) | Low (primarily beta and learning rate) |
| Online data generation | Required (samples from current policy during training) | Not required (uses static offline dataset) |
| Approximate memory (7B model) | ~112 GB+ (4 models) | ~56 GB (2 models) |
| Training stability | Can be unstable; requires careful tuning | Generally stable; standard supervised training |
| Implementation complexity | High (RL loop, reward model serving, value function) | Low (single loss function, standard training loop) |

### Performance Comparison

In the original DPO paper, Rafailov et al. demonstrated that DPO matches or exceeds PPO-based RLHF on several alignment benchmarks. On controlled sentiment generation (steering GPT-2 outputs toward positive sentiment), DPO achieved higher reward scores than PPO. On TL;DR summarization, DPO achieved comparable win rates against human reference summaries. On the Anthropic Helpful and Harmless dialogue dataset, DPO produced competitive results with substantially less computational overhead.[&#91;1&#93;](#cite_note-dpo-1)

However, subsequent research has nuanced these findings. A comprehensive study by Xu et al. (2024), titled "Is DPO Superior to PPO for LLM Alignment?", found that when PPO is carefully tuned with sufficient compute budget and implementation best practices, PPO can surpass DPO across a range of benchmarks, including dialogue and code generation tasks.[&#91;7&#93;](#cite_note-xu-7) The study identified that many earlier comparisons unfairly penalized PPO by using suboptimal implementations or insufficient training budgets.

The emerging consensus in the research community is that DPO and PPO represent different trade-offs rather than a clear winner. DPO is simpler and cheaper, making it the preferred choice for practitioners with limited compute budgets or those seeking rapid iteration. PPO, when properly implemented and tuned, can achieve superior alignment quality, especially on complex tasks requiring the model to generalize beyond the distribution of the training data.[&#91;8&#93;](#cite_note-debate-8)

### Offline vs. Online Learning

A fundamental distinction between DPO and PPO-based RLHF is that DPO is an offline algorithm: it trains on a fixed dataset of preference pairs collected before training begins. PPO, on the other hand, is an online algorithm: during training, the policy generates new responses that are scored by the reward model, creating fresh training signal that tracks the current policy's behavior.

This distinction has practical consequences. Offline methods like DPO can only learn from the responses present in the training data. If the preference dataset was generated by a substantially different policy (e.g., an earlier version of the model), DPO may struggle because the log-probability ratios it computes become less informative for responses the current policy would rarely generate. Online methods like PPO automatically address this distribution shift because they continually generate new responses from the current policy. Some researchers have proposed iterative variants of DPO that periodically regenerate preference data using the current policy, partially bridging this gap.[&#91;9&#93;](#cite_note-iterative-9)

## Variants and Extensions

The success of DPO spawned a family of related algorithms, often collectively called "direct alignment algorithms" (DAAs). These methods share DPO's philosophy of eliminating explicit reward models and RL, but modify the loss function or training procedure to address specific limitations.

### Identity Preference Optimization (IPO)

**Identity Preference Optimization (IPO)**, proposed by Azar et al. at [Google DeepMind](/index.php?title=Google_DeepMind&action=edit&redlink=1) in 2023, provides a generalized theoretical framework called Psi-PO (PsiPO) for learning from pairwise preferences.[&#91;10&#93;](#cite_note-ipo-10) By setting the Psi function to the identity, the authors derived IPO, which introduces an explicit regularization term to address overfitting issues observed with DPO. The key advantage of IPO is that it does not rely on the Bradley-Terry preference model assumption, making it more robust when human preferences violate the transitivity or consistency assumptions that Bradley-Terry requires. IPO's loss function incorporates a squared penalty term that prevents the implicit reward margin between preferred and dispreferred responses from growing without bound, which can happen with DPO when the model overfits to the training data.

### Kahneman-Tversky Optimization (KTO)

**Kahneman-Tversky Optimization (KTO)**, introduced by Ethayarajh et al. in February 2024, takes a fundamentally different approach to preference optimization by drawing on [prospect theory](/index.php?title=Prospect_theory&action=edit&redlink=1), the Nobel Prize-winning behavioral economics framework developed by Daniel Kahneman and Amos Tversky.[&#91;11&#93;](#cite_note-kto-11) While DPO and IPO require paired preference data (where both a chosen and rejected response exist for each prompt), KTO needs only a binary signal indicating whether a given output is desirable or undesirable. This is a significant practical advantage because collecting binary quality judgments (e.g., thumbs up or thumbs down) is far simpler and cheaper than collecting pairwise comparisons.

KTO directly maximizes a utility function inspired by prospect theory, incorporating the well-documented human cognitive bias of loss aversion (where losses are felt more acutely than equivalent gains). Despite learning from only a binary signal, KTO matches or exceeds the performance of DPO at scales ranging from 1 billion to 30 billion parameters.[&#91;11&#93;](#cite_note-kto-11)

### Odds Ratio Preference Optimization (ORPO)

**Odds Ratio Preference Optimization (ORPO)**, introduced by Hong, Lee, and Thorne in March 2024, goes further than other DPO variants by eliminating the need for a reference model entirely.[&#91;12&#93;](#cite_note-orpo-12) ORPO combines supervised fine-tuning and preference alignment into a single training stage, using a log odds ratio term appended to the standard negative log-likelihood loss. This monolithic approach assigns a weak penalty to rejected responses and a strong adaptation signal to chosen responses.

By merging SFT and preference alignment into one step, ORPO reduces the total training pipeline from two stages (SFT then DPO) to a single stage. In experiments, ORPO-tuned models (including Phi-2 at 2.7B, Llama-2 at 7B, and Mistral at 7B) achieved competitive performance on benchmarks such as AlpacaEval 2.0, IFEval, and MT-Bench, often surpassing models with larger parameter counts trained with multi-stage pipelines.[&#91;12&#93;](#cite_note-orpo-12) The paper was presented at the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP).

### SimPO (Simple Preference Optimization)

**SimPO**, proposed by Meng, Xia, and Chen at Princeton in May 2024, is another reference-free preference optimization method.[&#91;13&#93;](#cite_note-simpo-13) SimPO uses the average log probability of a sequence (rather than the total log probability or a log-ratio with a reference model) as the implicit reward. This choice better aligns with how models actually generate text during inference, where shorter and longer sequences are treated comparably. SimPO also introduces a target reward margin to the Bradley-Terry objective, encouraging a larger gap between the implicit rewards of preferred and dispreferred responses.

SimPO outperforms DPO by up to 6.4 points on AlpacaEval 2 and up to 7.5 points on Arena-Hard, without substantially increasing average response length. The method was presented at NeurIPS 2024.[&#91;13&#93;](#cite_note-simpo-13)

### Summary of Direct Alignment Methods

| Method | Year | Key Innovation | Reference Model Required | Data Format | Key Authors |
| --- | --- | --- | --- | --- | --- |
| [DPO](/wiki/direct_preference_optimization) | 2023 | Closed-form policy optimization via reparameterization | Yes (frozen) | Pairwise preferences | Rafailov et al. (Stanford) |
| [IPO](/index.php?title=Identity_Preference_Optimization&action=edit&redlink=1) | 2023 | Generalized Psi-PO framework; regularized objective | Yes (frozen) | Pairwise preferences | Azar et al. (Google DeepMind) |
| [KTO](/index.php?title=Kahneman-Tversky_Optimization&action=edit&redlink=1) | 2024 | Prospect theory-based utility; binary feedback only | Yes (frozen) | Binary (desirable/undesirable) | Ethayarajh et al. (Contextual AI) |
| [ORPO](/index.php?title=Odds_Ratio_Preference_Optimization&action=edit&redlink=1) | 2024 | Monolithic SFT + alignment; no reference model | No | Pairwise preferences | Hong, Lee, Thorne |
| [SimPO](/index.php?title=SimPO&action=edit&redlink=1) | 2024 | Average log-prob as reward; target margin | No | Pairwise preferences | Meng, Xia, Chen (Princeton) |

## Reinforcement Learning from AI Feedback (RLAIF)

While DPO changes the optimization algorithm used to train the policy, a complementary research direction changes the source of the preference data itself. **Reinforcement Learning from AI Feedback (RLAIF)** replaces human annotators with AI systems that evaluate model outputs, addressing the scalability bottleneck of collecting human preference labels.

### Anthropic's Constitutional AI

[Anthropic](/wiki/anthropic)'s [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1) (CAI), introduced by Bai et al. in December 2022, was the first major framework to formalize RLAIF.[&#91;14&#93;](#cite_note-cai-14) The approach gives an AI model a set of written principles (a "constitution") and uses the model itself to evaluate and improve its own outputs according to those principles. Constitutional AI operates in two phases:

1. **Supervised learning phase**: The model generates responses to prompts, then self-critiques and revises its responses based on constitutional principles. The revised responses are used as training data for supervised fine-tuning.

2. **RL phase (RLAIF)**: The fine-tuned model generates pairs of responses, and another AI model (or the same model) evaluates which response better adheres to the constitution. These AI-generated preference labels train a reward model, which is then used for standard RL optimization.

The constitution used by Anthropic draws from sources including the United Nations Universal Declaration of Human Rights, platform trust and safety best practices, and Anthropic's core criteria of helpfulness, honesty, and harmlessness (HHH). Results demonstrated that Constitutional AI achieved Pareto improvement over standard RLHF, producing models that were both more helpful and more harmless simultaneously, with 70-85% preference rates in human evaluations.[&#91;14&#93;](#cite_note-cai-14)

### Google's RLAIF Research

Google researchers published a dedicated study on RLAIF in September 2023 (Lee et al.), systematically comparing RLAIF and RLHF across summarization, helpful dialogue, and harmless dialogue tasks.[&#91;15&#93;](#cite_note-rlaif-15) The study found that RLAIF achieves performance on par with RLHF: both methods outperformed the baseline SFT policy by approximately 70% on summarization and 60% on helpful dialogue generation. In direct head-to-head comparisons, human evaluators could not reliably distinguish between RLAIF-trained and RLHF-trained models, preferring each equally.

The same paper introduced **direct-RLAIF (d-RLAIF)**, which bypasses reward model training entirely by obtaining reward signals directly from an off-the-shelf LLM during the RL loop. This approach achieved superior performance to the canonical two-stage RLAIF pipeline and represents a convergence with DPO's philosophy of eliminating intermediate models.

### RLAIF and DPO Together

RLAIF and DPO are complementary techniques that can be combined. RLAIF addresses the question of where preference data comes from (AI-generated vs. human-generated), while DPO addresses how that preference data is used to train the policy (direct optimization vs. RL). In practice, many systems use AI-generated preference data with DPO-style training, combining the scalability benefits of RLAIF with the simplicity of DPO. This combination has become increasingly common in open-source model development, where large-scale human preference annotation is prohibitively expensive.

## Practical Advantages

### Simplicity of Implementation

DPO can be implemented in a few dozen lines of code on top of a standard language model training loop. The loss function is a straightforward binary cross-entropy computed from log-probabilities that the model already produces during forward passes. No RL-specific infrastructure is needed: no reward model serving, no value function estimation, no advantage computation, no PPO clipping, and no online response generation. This simplicity dramatically reduces engineering overhead and the risk of subtle implementation bugs.[&#91;1&#93;](#cite_note-dpo-1)

### Computational Efficiency

By eliminating two of the four models required during PPO-based RLHF training, DPO roughly halves the GPU memory requirement. Additionally, DPO does not need to generate new responses during training (which is the case for PPO, where the current policy must produce responses that are then scored by the reward model). Response generation is autoregressive and slow for large models, so eliminating this step provides a significant wall-clock time savings. Studies have reported that DPO trains approximately 40% faster than PPO-based RLHF, with substantially lower overall cost.[&#91;6&#93;](#cite_note-raschka-6)

### Hyperparameter Robustness

PPO is notorious for its sensitivity to hyperparameters, including learning rates, clipping ranges, batch sizes, the number of PPO epochs, KL penalty coefficients, reward model normalization, and value function loss coefficients. DPO has far fewer hyperparameters that need tuning. The primary hyperparameter is beta, the implicit KL penalty strength, which controls how far the policy can diverge from the reference model. In practice, values between 0.1 and 0.5 work well across many tasks. The learning rate and batch size follow standard supervised learning conventions.[&#91;2&#93;](#cite_note-dpo_blog-2)

### Reproducibility

The simplicity and stability of DPO contribute to better reproducibility. PPO-based RLHF results can vary substantially across runs due to the stochastic nature of RL training, sensitivity to initialization, and interactions between the multiple model components. DPO training behaves like standard supervised fine-tuning, producing more consistent results across random seeds and hardware configurations.

## Limitations and Criticisms

### Overoptimization Without a Reward Model

Despite not training an explicit reward model, DPO still suffers from overoptimization. Research published at NeurIPS 2024 demonstrated that DPO-trained models exhibit scaling laws for reward model overoptimization analogous to those observed in PPO-based RLHF: as training progresses, the model's implicit reward scores on the training data increase, but ground-truth win rates (as measured by independent evaluators) plateau and eventually decline.[&#91;16&#93;](#cite_note-overopt-16) This suggests that DPO can learn to exploit patterns in the preference data that correlate with, but do not cause, high quality output. A common symptom is length exploitation, where DPO-trained models produce increasingly verbose responses over the course of training without corresponding improvements in actual quality.

### Distribution Shift (Offline Learning)

As an offline algorithm, DPO trains on a fixed dataset of preference pairs that were typically generated by an earlier version of the model (or a different model entirely). As training progresses and the policy changes, the responses in the training data may no longer represent what the current policy would generate. This distribution shift can cause the log-probability ratios in the DPO loss to become noisy or uninformative, degrading training signal quality. PPO-based RLHF partially avoids this problem because it generates fresh responses from the current policy at every training step.[&#91;7&#93;](#cite_note-xu-7)

### Limited Generalization to Out-of-Distribution Prompts

Because DPO learns only from the specific preference pairs in its training set, it may not generalize well to prompts or response styles that are substantially different from those seen during training. PPO-based RLHF, through its online generation and reward model scoring, can potentially discover good responses in regions of the output space not covered by the training data. Several studies have noted that DPO underperforms PPO on tasks requiring creative generalization or complex reasoning beyond the training distribution.[&#91;7&#93;](#cite_note-xu-7)

### Dependence on Data Quality

DPO's performance is tightly coupled to the quality of the preference dataset. Noisy, inconsistent, or biased preference labels directly affect training because the loss function directly optimizes for the stated preferences without any intermediate model to smooth or generalize the preference signal. In PPO-based RLHF, the reward model acts as a form of regularization, learning a smooth function over the response space that can generalize beyond individual noisy labels. DPO lacks this intermediary, making it more susceptible to noise in the preference data.[&#91;1&#93;](#cite_note-dpo-1)

### Theoretical Assumptions

DPO's derivation assumes that the preference data follows the Bradley-Terry model exactly and that the reference policy has adequate coverage over the response space. When human preferences violate the transitivity and consistency assumptions of the Bradley-Terry model (which they frequently do in practice), DPO's theoretical guarantees weaken. IPO was specifically designed to address this limitation by not relying on the Bradley-Terry assumption.[&#91;10&#93;](#cite_note-ipo-10)

## Adoption in Practice

### Open-Source Models

DPO has seen widespread adoption in the open-source LLM ecosystem, driven by its ease of implementation and lower compute requirements compared to PPO.

| Model | Base Model | Training Method | Notable Results |
| --- | --- | --- | --- |
| [Zephyr](/index.php?title=Zephyr_(language_model)&action=edit&redlink=1)-7B-beta | [Mistral](/index.php?title=Mistral_(language_model)&action=edit&redlink=1) 7B | DPO on UltraFeedback | Strong instruction-following at 7B scale |
| [Mixtral](/index.php?title=Mixtral&action=edit&redlink=1) 8x7B Instruct | Mixtral 8x7B | SFT + DPO | Competitive with larger proprietary models |
| Intel NeuralChat 7B | Mistral 7B | DPO | High-quality conversational model |
| LLaMA-3 iterative DPO | [Llama 3](/index.php?title=Llama_3&action=edit&redlink=1) 8B | Iterative DPO | Surpassed GPT-3.5-turbo-0613 on instruction benchmarks |
| Salesforce SFR-Iterative-DPO | Llama 3 8B | Iterative DPO with rejection sampling | Top-performing 8B model on multiple leaderboards |

### Tooling and Frameworks

Several major frameworks support DPO training out of the box:

- **[Hugging Face](/wiki/hugging_face) TRL** (Transformer Reinforcement Learning): Provides a `DPOTrainer` class that handles the DPO loss, reference model management, and training loop with minimal configuration.[&#91;2&#93;](#cite_note-dpo_blog-2)

- **[LLaMA Factory](/index.php?title=LLaMA_Factory&action=edit&redlink=1)**: A unified fine-tuning framework supporting DPO, IPO, KTO, ORPO, and SimPO alongside standard SFT and RLHF methods.

- **[Axolotl](/index.php?title=Axolotl&action=edit&redlink=1)**: A popular fine-tuning tool that includes DPO support with integration for LoRA and QLoRA parameter-efficient fine-tuning.

- **[OpenRLHF](/index.php?title=OpenRLHF&action=edit&redlink=1)**: An open-source framework optimized for large-scale RLHF and DPO training with Ray-based distributed scheduling.

### Industry Adoption

While many frontier model providers (such as [OpenAI](/wiki/openai), [Anthropic](/wiki/anthropic), and [Google DeepMind](/index.php?title=Google_DeepMind&action=edit&redlink=1)) have not publicly disclosed whether they use DPO in their production training pipelines, the technique has influenced the broader field. [Mistral AI](/index.php?title=Mistral_AI&action=edit&redlink=1) has confirmed using DPO for their instruction-tuned models. The open-source community has embraced DPO as a default preference optimization method because of its lower barrier to entry in terms of both engineering complexity and compute requirements.

It is worth noting that several leading labs continue to use PPO-based RLHF or proprietary variants for their flagship models, suggesting that PPO's ability to learn online and generalize beyond the training distribution remains valuable at the largest scales and highest performance targets.

## Theoretical Relationship to RLHF

### Equivalence Under Idealized Conditions

Under the assumptions of the Bradley-Terry preference model, infinite preference data, and perfect optimization, DPO and PPO-based RLHF converge to the same optimal policy. Both methods optimize the same KL-constrained reward maximization objective; they simply parameterize the problem differently. DPO reparameterizes the reward function in terms of the policy's log-probability ratios, while PPO maintains an explicit reward model and optimizes the policy using RL.[&#91;1&#93;](#cite_note-dpo-1)

### Divergence in Practice

In practice, the two methods can produce different results because the idealizing assumptions do not hold. The preference dataset is finite and potentially noisy, the Bradley-Terry model may not perfectly capture human preferences, and the optimization procedure may not converge to the global optimum. PPO's online data generation provides a form of distribution correction that DPO lacks. Conversely, DPO's simpler optimization landscape avoids some of PPO's failure modes, such as reward model exploitation through adversarial policy updates.

Research from multiple groups has characterized the regimes where each method excels. DPO tends to perform well when the preference data is high-quality, diverse, and generated by a policy similar to the one being trained. PPO tends to outperform DPO when scaling to larger models, when the preference data is limited or noisy, or when the task requires significant exploration beyond the training distribution.[&#91;7&#93;](#cite_note-xu-7)[&#91;8&#93;](#cite_note-debate-8)

## History and Development

### Initial Publication

Rafailov et al. first submitted the DPO paper to arXiv on May 29, 2023.[&#91;1&#93;](#cite_note-dpo-1) The paper was presented at the 37th Conference on Neural Information Processing Systems (NeurIPS 2023) in December 2023, where it received significant attention and became one of the most cited papers of the conference. The authors released a reference implementation on GitHub, which accelerated adoption by the open-source community.

### Rapid Growth of the Field

The publication of DPO catalyzed a wave of research into direct alignment algorithms. Within a year of its publication, dozens of variants, extensions, and critiques had been proposed, including IPO, KTO, ORPO, SimPO, and others. The Hugging Face TRL library added DPO support in late 2023, further lowering the barrier to adoption. By 2024, DPO had become the default preference optimization method in many open-source model training recipes, and the broader category of "direct alignment" had established itself as a major subfield of LLM alignment research.

### Key Timeline

| Date | Event |
| --- | --- |
| May 2023 | DPO paper submitted to arXiv by Rafailov et al. (Stanford) |
| October 2023 | IPO paper published by Azar et al. (Google DeepMind) |
| December 2023 | DPO presented at NeurIPS 2023 |
| December 2023 | Hugging Face TRL adds DPOTrainer |
| February 2024 | KTO paper published by Ethayarajh et al. |
| March 2024 | ORPO paper published by Hong, Lee, and Thorne |
| April 2024 | "Is DPO Superior to PPO?" study by Xu et al. |
| May 2024 | SimPO paper published by Meng, Xia, and Chen (Princeton) |
| June 2024 | Scaling laws for DAA overoptimization studied |
| 2024-2025 | DPO and variants become standard in open-source LLM alignment |

## See Also

- [RLHF](/wiki/rlhf)

- [Reinforcement learning](/wiki/reinforcement_learning)

- [Large language model](/wiki/large_language_model)

- [Machine learning](/wiki/machine_learning)

- [Supervised learning](/wiki/supervised_learning)

- [Proximal Policy Optimization](/index.php?title=Proximal_Policy_Optimization&action=edit&redlink=1)

- [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)

- [Anthropic](/wiki/anthropic)

- [ChatGPT](/wiki/chatgpt)

- [Sigmoid function](/wiki/sigmoid_function)

## References

1. ↑ [1.0](#cite_ref-dpo_1-0) [1.1](#cite_ref-dpo_1-1) [1.2](#cite_ref-dpo_1-2) [1.3](#cite_ref-dpo_1-3) [1.4](#cite_ref-dpo_1-4) [1.5](#cite_ref-dpo_1-5) [1.6](#cite_ref-dpo_1-6) [1.7](#cite_ref-dpo_1-7) [1.8](#cite_ref-dpo_1-8) Rafailov, Rafael, et al. "Direct Preference Optimization: Your Language Model is Secretly a Reward Model." Advances in Neural Information Processing Systems 36 (NeurIPS 2023). [https://arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290)

2. ↑ [2.0](#cite_ref-dpo_blog_2-0) [2.1](#cite_ref-dpo_blog_2-1) [2.2](#cite_ref-dpo_blog_2-2) Tunstall, Lewis, et al. "Preference Tuning LLMs with Direct Preference Optimization Methods." Hugging Face Blog, 2023. [https://huggingface.co/blog/pref-tuning](https://huggingface.co/blog/pref-tuning)

3. [↑](#cite_ref-instructgpt_3-0) Ouyang, Long, et al. "Training language models to follow instructions with human feedback." Advances in Neural Information Processing Systems 35 (2022): 27730-27744. [https://arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155)

4. [↑](#cite_ref-bt_4-0) Bradley, Ralph Allan, and Milton E. Terry. "Rank analysis of incomplete block designs: I. The method of paired comparisons." Biometrika 39.3/4 (1952): 324-345.

5. [↑](#cite_ref-rlhf_hf_5-0) Lambert, Nathan, et al. "Illustrating Reinforcement Learning from Human Feedback (RLHF)." Hugging Face Blog, 2022. [https://huggingface.co/blog/rlhf](https://huggingface.co/blog/rlhf)

6. ↑ [6.0](#cite_ref-raschka_6-0) [6.1](#cite_ref-raschka_6-1) Raschka, Sebastian. "How is RLHF different from DPO at a high level?" Sebastian Raschka FAQ, 2024. [https://sebastianraschka.com/faq/docs/rlhf-vs-dpo.html](https://sebastianraschka.com/faq/docs/rlhf-vs-dpo.html)

7. ↑ [7.0](#cite_ref-xu_7-0) [7.1](#cite_ref-xu_7-1) [7.2](#cite_ref-xu_7-2) Xu, Shusheng, et al. "Is DPO Superior to PPO for LLM Alignment? A Comprehensive Study." arXiv preprint arXiv:2404.10719 (2024). [https://arxiv.org/abs/2404.10719](https://arxiv.org/abs/2404.10719)

8. ↑ [8.0](#cite_ref-debate_8-0) [8.1](#cite_ref-debate_8-1) Lambert, Nathan. "The DPO Debate." Interconnects Newsletter, 2024. [https://www.interconnects.ai/p/the-dpo-debate](https://www.interconnects.ai/p/the-dpo-debate)

9. [↑](#cite_ref-iterative_9-0) Xiong, Wei, et al. "Iterative Preference Learning from Human Feedback: Bridging Theory and Practice for RLHF under KL-Constraint." ICML 2024. [https://huggingface.co/RLHFlow/LLaMA3-iterative-DPO-final](https://huggingface.co/RLHFlow/LLaMA3-iterative-DPO-final)

10. ↑ [10.0](#cite_ref-ipo_10-0) [10.1](#cite_ref-ipo_10-1) Azar, Mohammad Gheshlaghi, et al. "A General Theoretical Paradigm to Understand Learning from Human Preferences." arXiv preprint arXiv:2310.12036 (2023). [https://arxiv.org/abs/2310.12036](https://arxiv.org/abs/2310.12036)

11. ↑ [11.0](#cite_ref-kto_11-0) [11.1](#cite_ref-kto_11-1) Ethayarajh, Kawin, et al. "KTO: Model Alignment as Prospect Theoretic Optimization." arXiv preprint arXiv:2402.01306 (2024). [https://arxiv.org/abs/2402.01306](https://arxiv.org/abs/2402.01306)

12. ↑ [12.0](#cite_ref-orpo_12-0) [12.1](#cite_ref-orpo_12-1) Hong, Jiwoo, Noah Lee, and James Thorne. "ORPO: Monolithic Preference Optimization without Reference Model." Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP 2024). [https://arxiv.org/abs/2403.07691](https://arxiv.org/abs/2403.07691)

13. ↑ [13.0](#cite_ref-simpo_13-0) [13.1](#cite_ref-simpo_13-1) Meng, Yu, Mengzhou Xia, and Danqi Chen. "SimPO: Simple Preference Optimization with a Reference-Free Reward." Advances in Neural Information Processing Systems 37 (NeurIPS 2024). [https://arxiv.org/abs/2405.14734](https://arxiv.org/abs/2405.14734)

14. ↑ [14.0](#cite_ref-cai_14-0) [14.1](#cite_ref-cai_14-1) Bai, Yuntao, et al. "Constitutional AI: Harmlessness from AI Feedback." arXiv preprint arXiv:2212.08073 (2022). [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

15. [↑](#cite_ref-rlaif_15-0) Lee, Harrison, et al. "RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback." arXiv preprint arXiv:2309.00267 (2023). [https://arxiv.org/abs/2309.00267](https://arxiv.org/abs/2309.00267)

16. [↑](#cite_ref-overopt_16-0) Rafailov, Rafael, et al. "Scaling Laws for Reward Model Overoptimization in Direct Alignment Algorithms." Advances in Neural Information Processing Systems 37 (NeurIPS 2024). [https://arxiv.org/abs/2406.02900](https://arxiv.org/abs/2406.02900)

## External Links

- [DPO Reference Implementation (GitHub)](https://github.com/eric-mitchell/direct-preference-optimization) - Official code from the DPO authors

- [Direct Preference Optimization: Your Language Model is Secretly a Reward Model (arXiv)](https://arxiv.org/abs/2305.18290) - Original paper

- [Preference Tuning LLMs with Direct Preference Optimization Methods (Hugging Face)](https://huggingface.co/blog/pref-tuning) - Practical guide to DPO training

- [Direct Alignment Algorithms (RLHF Book)](https://rlhfbook.com/c/12-direct-alignment) - Chapter from Nathan Lambert's RLHF Book

- [Deriving the DPO Objective (Hugging Face)](https://huggingface.co/blog/hba123/derivingdpo) - Step-by-step mathematical derivation
