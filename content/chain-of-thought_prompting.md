---
title: "Chain-of-Thought Prompting"
slug: "chain-of-thought_prompting"
categories:
  - "Machine_learning_terms"
  - "Natural_Language_Processing"
  - "Prompt_engineering"
  - "Artificial_intelligence"
  - "Terms"
---
*See also: [Prompt engineering](/wiki/prompt_engineering), [Large language model](/wiki/large_language_model), [Natural language processing](/wiki/natural_language_processing)*

## Introduction

**Chain-of-thought (CoT) prompting** is a [prompt engineering](/wiki/prompt_engineering) technique that improves the reasoning capabilities of [large language models](/wiki/large_language_model) (LLMs) by encouraging them to generate intermediate reasoning steps before arriving at a final answer. Rather than producing a direct output in response to a question, the model is prompted to decompose a complex problem into a sequence of logical steps, mimicking a human-like thought process. This approach was introduced by Jason Wei and colleagues at [Google](/wiki/google_deepmind) Brain in their seminal 2022 paper, "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models," and has since become one of the most influential techniques in [natural language processing](/wiki/natural_language_processing) and [artificial intelligence](/wiki/artificial_intelligence) research.

Chain-of-thought prompting has proven especially effective for tasks involving arithmetic reasoning, commonsense reasoning, symbolic manipulation, and multi-step logic. The technique represented a breakthrough because it demonstrated that complex reasoning abilities could be elicited from pre-trained language models without any additional training or [fine-tuning](/wiki/fine_tuning), simply by changing the format of the prompt. Since its introduction, CoT prompting has spawned a family of related techniques and has influenced the development of a new category of AI systems known as "reasoning models."

## Background and Motivation

Before the introduction of chain-of-thought prompting, [large language models](/wiki/large_language_model) showed impressive performance on a wide range of [natural language processing](/wiki/natural_language_processing) tasks through [few-shot learning](/wiki/few-shot_learning) (providing a few input-output examples in the prompt). However, these models struggled significantly with tasks requiring multi-step reasoning, such as mathematical word problems, logical deduction, and complex commonsense reasoning. Standard few-shot prompting, where each exemplar is presented as a simple (input, output) pair, often led models to produce incorrect answers on problems that required intermediate computation or logical steps.

The core insight behind chain-of-thought prompting was inspired by how humans solve complex problems. When faced with a multi-step math problem, a person does not typically jump to the answer immediately. Instead, they work through the problem step by step, writing down intermediate calculations and logical deductions. Wei et al. hypothesized that if language models were similarly encouraged to articulate intermediate reasoning steps, their performance on complex reasoning tasks would improve substantially.

## Original Chain-of-Thought Prompting (Wei et al., 2022)

### The Paper

The foundational paper, "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models," was authored by Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and Denny Zhou, all affiliated with Google Brain (now part of [Google DeepMind](/wiki/google_deepmind)). The paper was first posted to arXiv in January 2022 (arXiv:2201.11903) and was subsequently published at the 36th Conference on Neural Information Processing Systems (NeurIPS 2022).

### Method

The method is remarkably simple. In standard few-shot prompting, each exemplar in the prompt consists of a (question, answer) pair. In chain-of-thought prompting, each exemplar is expanded to a triple of (question, chain of thought, answer), where the chain of thought is a series of natural language sentences that articulate the intermediate reasoning steps needed to arrive at the answer.

For example, consider the following math word problem:

**Standard few-shot prompt:**

> Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
> A: The answer is 11.

**Chain-of-thought prompt:**

> Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
> A: Roger started with 5 balls. 2 cans of 3 tennis balls each is 6 tennis balls. 5 + 6 = 11. The answer is 11.

The chain of thought is written in natural language and demonstrates the step-by-step reasoning process. When such exemplars are provided in the prompt, the model learns to generate similar step-by-step reasoning for new, unseen questions.

### Key Results

Wei et al. evaluated chain-of-thought prompting across three categories of reasoning tasks, using several large language models including GPT-3 (175B parameters), LaMDA (137B), and PaLM (540B). The results were striking:

**Arithmetic Reasoning Benchmarks:**

| Benchmark | Model | Standard Prompting | CoT Prompting | Improvement |
|---|---|---|---|---|
| GSM8K | PaLM 540B | 17.9% | 56.9% | +39.0 pp |
| GSM8K | GPT-3 175B | 17.9% | 58.8% | +40.9 pp |
| SVAMP | PaLM 540B | 69.3% | 79.0% | +9.7 pp |
| MultiArith | PaLM 540B | 72.7% | 99.3% | +26.6 pp |
| AQuA | PaLM 540B | 25.2% | 35.8% | +10.6 pp |

**Commonsense Reasoning Benchmarks:**

| Benchmark | Model | Standard Prompting | CoT Prompting |
|---|---|---|---|
| CommonsenseQA | PaLM 540B | 79.0% | 80.7% |
| StrategyQA | PaLM 540B | 73.0% | 77.8% |
| Sports Understanding | PaLM 540B | 85.0% | 95.4% |

On the challenging GSM8K benchmark (grade school math word problems), chain-of-thought prompting with PaLM 540B achieved state-of-the-art accuracy, surpassing even the previous best result from a fine-tuned GPT-3 175B model combined with a trained verifier.

### Emergence as a Property of Scale

One of the most important findings of the paper was that chain-of-thought reasoning is an **emergent ability** that only appears at sufficient model scale. When applied to smaller models (those with fewer than approximately 100 billion parameters), chain-of-thought prompting did not improve performance and sometimes even degraded it. Models below this threshold tended to generate fluent but logically incorrect reasoning chains. This finding suggested that the ability to perform genuine multi-step reasoning through chain-of-thought prompting is a capability that emerges only in the largest language models.

| Model Size | CoT Effect |
|---|---|
| Less than 10B parameters | No improvement or degradation |
| 10B to 100B parameters | Inconsistent, marginal improvements |
| Greater than 100B parameters | Significant, consistent improvements |

## Zero-Shot Chain-of-Thought (Kojima et al., 2022)

### Overview

Shortly after the introduction of few-shot CoT prompting, Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, and Yusuke Iwasawa published "Large Language Models are Zero-Shot Reasoners" (arXiv:2205.11916, NeurIPS 2022). This paper demonstrated that LLMs could perform chain-of-thought reasoning without any exemplars at all, simply by appending the phrase **"Let's think step by step"** to the prompt.

### Method

Zero-shot CoT uses a two-stage prompting mechanism:

1. **Reasoning extraction:** The original question is augmented with "Let's think step by step," and the model generates a reasoning chain.
2. **Answer extraction:** The generated reasoning, along with the original question, is fed back to the model with a prompt to extract the final answer (e.g., "Therefore, the answer is").

This approach requires no task-specific exemplars, making it far more versatile and easier to apply across different problem types.

### Results

The results were remarkable, particularly given the simplicity of the technique:

| Benchmark | Model | Standard Zero-shot | Zero-shot CoT | Improvement |
|---|---|---|---|---|
| MultiArith | GPT-3 (text-davinci-002) | 17.7% | 78.7% | +61.0 pp |
| GSM8K | GPT-3 (text-davinci-002) | 12.5% | 40.7% | +28.2 pp |
| SVAMP | GPT-3 (text-davinci-002) | 63.7% | 79.0% | +15.3 pp |
| AQuA | GPT-3 (text-davinci-002) | 22.4% | 33.5% | +11.1 pp |

Kojima et al. also tested various trigger phrases and found that "Let's think step by step" was the most effective, outperforming alternatives such as "Let's think about this logically," "Let's solve this problem by splitting it into steps," and "Let's be realistic and think step by step."

Like few-shot CoT, zero-shot CoT showed strong scale dependence. Smaller models exhibited minimal or no improvement, while larger models like InstructGPT (text-davinci-002) and PaLM 540B showed dramatic performance increases, reinforcing the idea that the ability to generate coherent, correct reasoning chains in a zero-shot manner is an emergent property of sufficiently large language models.

## Variants and Extensions of CoT Prompting

The success of chain-of-thought prompting inspired a rich landscape of follow-up techniques. Each variant addresses specific limitations of the original approach or extends it to new problem types.

### Self-Consistency (Wang et al., 2022)

**Self-consistency** was proposed by Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc Le, Ed Chi, Sharan Narang, Aakanksha Chowdhery, and Denny Zhou in "Self-Consistency Improves Chain of Thought Reasoning in Language Models" (arXiv:2203.11171, published at ICLR 2023).

**Core Idea:** Instead of using greedy decoding to generate a single reasoning path, self-consistency samples multiple diverse reasoning paths from the language model (using temperature sampling) and then selects the most frequent final answer through a majority vote. The key intuition is that a complex reasoning problem typically admits multiple valid reasoning approaches, and if a correct answer can be reached via different reasoning paths, it is more likely to be correct.

**Results:** Self-consistency significantly boosted CoT prompting performance across a range of benchmarks:

| Benchmark | CoT (Greedy) | CoT + Self-Consistency | Improvement |
|---|---|---|---|
| GSM8K (PaLM 540B) | 56.9% | 74.4% | +17.5 pp |
| SVAMP | Baseline | +11.0 pp improvement | N/A |
| AQuA | Baseline | +12.2 pp improvement | N/A |
| StrategyQA | Baseline | +6.4 pp improvement | N/A |
| ARC-Challenge | Baseline | +3.9 pp improvement | N/A |

Self-consistency requires no additional training, prompts, or fine-tuning. It only requires sampling multiple outputs from the model, making it a straightforward and effective enhancement.

### Automatic Chain-of-Thought (Auto-CoT, Zhang et al., 2022)

Zhuosheng Zhang and colleagues proposed **Automatic Chain-of-Thought Prompting** (arXiv:2210.03493, published at ICLR 2023) to eliminate the need for manually crafting chain-of-thought exemplars.

**Core Idea:** Auto-CoT uses the "Let's think step by step" zero-shot prompt to automatically generate reasoning chains for a diverse set of sampled questions. These automatically generated demonstrations are then used as few-shot exemplars. The approach samples questions with diversity (using clustering techniques) and generates reasoning chains for each, constructing demonstrations without any human effort.

**Benefit:** This removes the labor-intensive process of manually writing chain-of-thought exemplars while maintaining comparable performance to hand-crafted demonstrations.

### Least-to-Most Prompting (Zhou et al., 2022)

**Least-to-most prompting** was introduced by Denny Zhou, Nathanael Scharli, Le Hou, Jason Wei, Nathan Scales, Xuezhi Wang, Dale Schuurmans, Claire Cui, Olivier Bousquet, Quoc Le, and Ed Chi in "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models" (arXiv:2205.10625, published at ICLR 2023).

**Core Idea:** Least-to-most prompting addresses a key limitation of standard CoT: the difficulty of generalizing to problems harder than those shown in the exemplars. The technique works in two stages:

1. **Decomposition:** The complex problem is broken down into a series of simpler subproblems.
2. **Sequential solving:** Each subproblem is solved in sequence, with the solutions to earlier subproblems providing context for solving later ones.

**Results:** Least-to-most prompting demonstrated impressive generalization capabilities. On the SCAN compositional generalization benchmark, using GPT-3 (code-davinci-002) with just 14 exemplars, it achieved at least 99% accuracy across all splits (including the challenging length split), compared to only 16% accuracy with standard chain-of-thought prompting.

### Structured Chain-of-Thought (SCoT) Prompting

**Structured CoT (SCoT)** was developed specifically for code generation tasks, recognizing that standard CoT prompting, designed primarily for natural language generation, may not optimally serve programming tasks. SCoT explicitly constrains LLMs to reason about problems from the perspective of source code structure (using pseudocode, control flow constructs, etc.) before generating the final code.

**Results:** SCoT prompting outperformed standard CoT prompting by up to 13.79% in Pass@1 accuracy on code generation benchmarks. Human evaluators also showed a preference for programs generated using SCoT prompting.

### Multimodal Chain-of-Thought

**Multimodal CoT** extends chain-of-thought reasoning to incorporate both text and visual information. It uses a two-stage framework:

1. **Rationale generation:** The model generates a reasoning rationale based on both textual and visual inputs.
2. **Answer inference:** The rationale is combined with the original multimodal input to produce the final answer.

This extension allows chain-of-thought reasoning to be applied to vision-language tasks, such as visual question answering and science problems that include diagrams.

## Tree of Thoughts (Yao et al., 2023)

### Overview

The **Tree of Thoughts (ToT)** framework was introduced by Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L. Griffiths, Yuan Cao, and Karthik Narasimhan in "Tree of Thoughts: Deliberate Problem Solving with Large Language Models" (arXiv:2305.10601, NeurIPS 2023). ToT generalizes chain-of-thought prompting by allowing the model to explore multiple reasoning paths simultaneously, organized as a tree structure.

### Method

While standard CoT follows a single linear path of reasoning and self-consistency samples multiple independent paths, ToT introduces a more structured exploration:

1. **Thought decomposition:** A problem is broken down into intermediate "thought" steps.
2. **Thought generation:** At each step, the model generates multiple candidate thoughts.
3. **State evaluation:** The model evaluates how promising each partial solution is (through either deliberate reasoning or voting).
4. **Search algorithms:** Classical search algorithms such as breadth-first search (BFS) or depth-first search (DFS) are used to navigate the tree of possible reasoning paths.

A key advantage of ToT is the ability to **backtrack**. If a reasoning path leads to a dead end, the search can return to a previous node and explore an alternative path, something that is impossible in standard left-to-right CoT generation.

### Results

ToT demonstrated dramatic improvements on tasks requiring non-trivial planning or search:

| Task | CoT Prompting (GPT-4) | Tree of Thoughts (GPT-4) |
|---|---|---|
| Game of 24 | 4.0% success rate | 74.0% success rate |
| Creative Writing | Baseline coherence score | Significantly improved coherence |
| Mini Crosswords | Low completion rate | Substantially improved completion |

The Game of 24 result is particularly noteworthy: GPT-4 with standard CoT prompting could solve only 4% of Game of 24 puzzles, while ToT achieved a 74% success rate, an 18-fold improvement.

### Graph of Thoughts (Besta et al., 2023)

Building on the ToT framework, Maciej Besta and colleagues introduced **Graph of Thoughts (GoT)** in "Graph of Thoughts: Solving Elaborate Problems with Large Language Models" (arXiv:2308.09687, AAAI 2024). GoT generalizes further by modeling reasoning as an arbitrary directed graph, where individual thoughts are vertices and edges represent dependencies between them. This allows for more complex reasoning patterns including:

- Combining arbitrary thoughts into synergistic outcomes
- Distilling networks of thoughts into refined conclusions
- Enhancing thoughts using feedback loops

GoT reported a 62% improvement in sorting quality over ToT while simultaneously reducing computational costs by more than 31%.

## Comparison of CoT Prompting Techniques

| Technique | Year | Key Innovation | Exemplars Required | Search Strategy |
|---|---|---|---|---|
| Few-shot CoT (Wei et al.) | 2022 | Step-by-step reasoning exemplars | Yes (manually crafted) | Single path (greedy) |
| Zero-shot CoT (Kojima et al.) | 2022 | "Let's think step by step" trigger | No | Single path (greedy) |
| Self-Consistency (Wang et al.) | 2022 | Majority voting over multiple paths | Yes | Multiple independent paths |
| Auto-CoT (Zhang et al.) | 2022 | Automated exemplar generation | Auto-generated | Single path (greedy) |
| Least-to-Most (Zhou et al.) | 2022 | Problem decomposition into subproblems | Yes | Sequential subproblem solving |
| Tree of Thoughts (Yao et al.) | 2023 | Tree-structured search with backtracking | No (uses evaluation prompts) | BFS or DFS |
| Graph of Thoughts (Besta et al.) | 2023 | Graph-structured reasoning with feedback loops | No (uses evaluation prompts) | Graph traversal |

## Extended Thinking and Reasoning Models

### The Shift from Prompting to Training

While chain-of-thought prompting demonstrated that LLMs could perform step-by-step reasoning when properly prompted, a fundamental shift occurred in 2024-2025 with the emergence of **reasoning models**. These are models that have been specifically trained (typically through [reinforcement learning](/wiki/reinforcement_learning)) to perform internal chain-of-thought reasoning as part of their generation process, without requiring explicit prompting techniques.

The key distinction is that CoT prompting is a technique applied externally to standard models, while reasoning models have built-in reasoning capabilities that are internalized during training. This shift represents a move from "prompting for reasoning" to "training for reasoning."

### OpenAI o1 (September 2024)

[OpenAI](/wiki/openai) released **o1** in September 2024 as its first dedicated reasoning model. When given a prompt, o1 generates an internal, hidden chain of thought consisting of thousands of tokens before producing its visible response. This internal reasoning process explores different strategies, identifies logical errors, and refines the approach before delivering a final answer.

**Key Technical Aspects:**

- Trained using large-scale [reinforcement learning](/wiki/reinforcement_learning) to improve implicit search via chain of thought
- The model's internal reasoning tokens are hidden from the user (only a summary is shown)
- Performance scales with both training-time compute (more RL training) and test-time compute (more thinking time)

**Benchmark Results:**

| Benchmark | GPT-4o | o1 | Improvement |
|---|---|---|---|
| AIME 2024 (Math Competition) | 9.3% | 74.4% | +65.1 pp |
| GPQA Diamond (PhD-Level Science) | 53.6% | 78.3% | +24.7 pp |
| Codeforces (Competitive Programming) | 11th percentile | 89th percentile | +78 percentiles |

o1 placed among the top 500 US high school students on the AIME math competition and became the first AI model to surpass human expert performance on the GPQA Diamond benchmark (PhD-level science questions).

**Costs and Tradeoffs:** o1's enhanced reasoning comes at significant cost. It is approximately six times more expensive and 30 times slower than GPT-4o, reflecting the substantial compute spent on internal reasoning tokens.

### OpenAI o3 (December 2024 Preview, April 2025 Full Release)

OpenAI's **o3** extended the reasoning model approach further, with additional gains across benchmarks:

| Benchmark | o1 | o3 |
|---|---|---|
| AIME 2024 (Math) | 74.4% | 91.6% |
| GPQA Diamond (Science) | 78.3% | 87.7% |
| Codeforces ELO | 1673 | 2706 |
| FrontierMath | ~2% | 25.2% |
| ARC-AGI | ~25% | 75.7% |

The FrontierMath result was particularly notable: o3 solved 25.2% of expert-level mathematics problems on a benchmark where no previous model had exceeded 2%.

### Anthropic Claude Extended Thinking (February 2025)

[Anthropic](/wiki/anthropic) introduced **extended thinking** with [Claude](/wiki/claude_ai) 3.7 Sonnet in February 2025 as a hybrid reasoning approach. Unlike OpenAI's o1, which is exclusively a reasoning model, Claude 3.7 Sonnet can operate in two modes:

1. **Standard mode:** Produces near-instant responses like a conventional LLM
2. **Extended thinking mode:** Generates an explicit, visible chain of thought before producing the final answer

This hybrid approach allows users to toggle extended thinking on or off depending on task requirements. When extended thinking is enabled, Claude's accuracy on math problems improves logarithmically with the number of thinking tokens allowed.

Claude 4 and later models further refined this capability with **adaptive thinking**, where the model dynamically decides when and how much to think based on the complexity of the prompt.

**Pricing:** Claude 3.7 Sonnet maintains the same pricing as its predecessor ($3 per million input tokens and $15 per million output tokens), with thinking tokens counted as output tokens.

### DeepSeek-R1 (January 2025)

**DeepSeek-R1**, developed by the Chinese AI company DeepSeek, demonstrated that reasoning abilities could be incentivized in LLMs through pure [reinforcement learning](/wiki/reinforcement_learning), without requiring supervised fine-tuning on human-labeled reasoning trajectories. The paper "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" (arXiv:2501.12948) was published in January 2025.

**Two Key Versions:**

| Version | Training Approach | Characteristics |
|---|---|---|
| DeepSeek-R1-Zero | Pure RL without supervised fine-tuning | Demonstrates emergent reasoning behaviors (self-verification, reflection, long CoT), but suffers from readability issues and language mixing |
| DeepSeek-R1 | Cold-start data + RL | Addresses R1-Zero's issues; achieves performance comparable to OpenAI o1 |

**Benchmark Results (DeepSeek-R1 vs. OpenAI o1-1217):**

| Benchmark | DeepSeek-R1 | OpenAI o1-1217 |
|---|---|---|
| AIME 2024 | 79.8% | 79.2% |
| MATH-500 | 97.3% | 96.4% |
| Codeforces | 96.3% | 96.6% |
| SWE-bench Verified | 49.2% | 48.9% |

DeepSeek-R1's significance extends beyond its benchmark performance. As an open-source model (released under an MIT license), it demonstrated that the reasoning model paradigm was not limited to proprietary systems. The team also released **distilled** versions (e.g., DeepSeek-R1-Distill-Qwen-32B), showing that reasoning capabilities could be transferred to smaller models through knowledge distillation.

A particularly interesting finding from DeepSeek-R1-Zero was the **emergence** of reasoning behaviors through RL alone. The model spontaneously developed capabilities like self-verification, reflection, and dynamic strategy adaptation without being explicitly taught these behaviors, suggesting that reinforcement learning on reasoning tasks can naturally lead to structured thinking patterns.

## Test-Time Compute Scaling

### The Concept

**Test-time compute scaling** (also called inference-time compute scaling) refers to the paradigm of allocating additional computational resources during inference (when the model generates a response) rather than only during training. This contrasts with the traditional approach of scaling AI capabilities primarily through larger models and more training data.

The concept was formalized by Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral Kumar in "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters" (arXiv:2408.03314, 2024). Their key finding was that optimally scaling test-time compute can be more effective than scaling model parameters for reasoning tasks.

### Mechanisms for Scaling Test-Time Compute

Two primary mechanisms have been identified for scaling test-time computation:

| Mechanism | Description | Example |
|---|---|---|
| **Search with verifiers** | Generate multiple candidate solutions and use a process-based verifier reward model (PRM) to evaluate and select the best one | Best-of-N sampling, beam search with PRMs |
| **Adaptive computation** | Allow the model to spend more tokens on its reasoning process, adapting the amount of computation to the difficulty of the problem | Extended thinking, internal CoT in reasoning models |

### Key Findings

1. **Compute-optimal strategy:** The effectiveness of different test-time compute approaches varies significantly based on prompt difficulty. A "compute-optimal" strategy that adapts the amount of test-time compute per prompt can improve performance by more than 4x compared to a naive best-of-N baseline.

2. **Small model equivalence:** On problems where a smaller model achieves some non-trivial success rate, test-time compute can enable it to outperform a model that is 14 times larger but uses standard inference.

3. **Logarithmic scaling:** For many reasoning tasks, accuracy improves roughly logarithmically with the amount of test-time compute (number of thinking tokens), exhibiting diminishing but positive returns.

4. **No universal strategy:** No single test-time scaling strategy universally dominates across all problem types and difficulty levels. The optimal approach depends on the model, the task, and the available compute budget.

### Implications

Test-time compute scaling has profound implications for the future of AI development. It suggests that there are two complementary axes for improving AI capabilities:

- **Training-time scaling:** Larger models, more data, more training compute (the traditional approach)
- **Test-time scaling:** More inference compute, longer reasoning chains, search over solution spaces

This "dual scaling" framework opens up new possibilities for deploying AI systems, particularly in scenarios where a smaller, cheaper model can achieve comparable performance to a much larger model by spending more time "thinking" at inference.

## How Reasoning Models Differ from CoT Prompting

While reasoning models grew out of the chain-of-thought prompting paradigm, they differ in several fundamental ways:

| Aspect | CoT Prompting | Reasoning Models |
|---|---|---|
| **Mechanism** | External prompting technique applied to standard models | Internalized reasoning ability trained via RL |
| **Training** | No additional training; uses existing model capabilities | Specifically trained on reasoning tasks with RL |
| **Reasoning visibility** | Reasoning is fully visible in the output | Some models hide internal reasoning (e.g., OpenAI o1); others make it visible (e.g., Claude extended thinking, DeepSeek-R1) |
| **Compute allocation** | Fixed; reasoning length depends on prompt design | Dynamic; model allocates compute based on problem difficulty |
| **Consistency** | Can be inconsistent; depends on prompt quality | More reliable reasoning, though still imperfect |
| **Error correction** | Limited ability to detect and correct its own errors | Can self-verify, backtrack, and revise reasoning during generation |
| **Cost** | Minimal additional cost (slightly more output tokens) | Substantially higher cost due to extended reasoning tokens |

### The Decreasing Value of CoT Prompting with Reasoning Models

Research from the Wharton Generative AI Lab (2025) has found that the value of chain-of-thought prompting diminishes significantly when applied to reasoning models:

- **Non-reasoning models:** CoT prompting provides modest average improvements but increases variability in performance.
- **Reasoning models:** CoT prompting yields only marginal accuracy gains that rarely justify the increased response time (20-80% longer responses).

This suggests that explicit CoT prompting is most valuable for standard (non-reasoning) models, while reasoning models have effectively internalized the technique, making external CoT prompts redundant.

## Impact on Mathematical Reasoning

Chain-of-thought prompting and its descendants have had a transformative impact on the mathematical reasoning capabilities of LLMs. The following table traces the progression of performance on key math benchmarks:

| Model / Technique | Year | GSM8K | MATH | AIME 2024 |
|---|---|---|---|---|
| GPT-3 (standard prompting) | 2022 | 17.9% | N/A | N/A |
| PaLM 540B + CoT | 2022 | 56.9% | N/A | N/A |
| PaLM 540B + CoT + Self-Consistency | 2022 | 74.4% | N/A | N/A |
| GPT-4 + CoT | 2023 | ~92% | ~42% | N/A |
| GPT-4 + DUP (zero-shot) | 2024 | 97.1% | N/A | N/A |
| OpenAI o1 | 2024 | ~95% | 94.8% | 74.4% |
| DeepSeek-R1 | 2025 | ~95% | 97.3% | 79.8% |
| OpenAI o3 | 2025 | ~96% | ~96% | 91.6% |

This progression shows how the field moved from a roughly 18% accuracy on grade school math problems (GSM8K) with standard prompting to near-perfect performance with modern reasoning models, with chain-of-thought prompting serving as the crucial bridging technique that unlocked the first major leap.

## Impact on Coding and Software Engineering

Chain-of-thought reasoning has also significantly influenced AI performance on programming tasks:

- **Structured CoT (SCoT)** prompting improved code generation Pass@1 rates by up to 13.79% by encouraging models to reason about program structure before generating code.
- Reasoning models like OpenAI o3 have achieved Codeforces ELO ratings above 2700, placing them at the Grandmaster level in competitive programming.
- On the SWE-bench Verified benchmark (real-world software engineering tasks), reasoning models have achieved scores above 68%, demonstrating strong capability in understanding and modifying complex codebases.
- Research has found that for code generation specifically, the traditional "reason first, then code" approach is not always optimal. Some studies suggest that having models write code first and then explain their reasoning can actually yield better results.

## Limitations and Criticisms

Despite its transformative impact, chain-of-thought prompting and related reasoning techniques face several significant limitations and criticisms.

### Faithfulness of Reasoning

A major concern is whether the reasoning chains generated by models faithfully represent their actual internal reasoning process. Multiple studies have investigated this question:

**Anthropic's Faithfulness Study (2025):** In "Reasoning Models Don't Always Say What They Think" (arXiv:2505.05410), Anthropic researchers found troubling rates of unfaithful reasoning:

| Model | Faithfulness Rate (overall) | Faithfulness Rate (misaligned hints) |
|---|---|---|
| Claude 3.7 Sonnet | 25% | 20% |
| DeepSeek-R1 | 39% | 29% |

"Faithfulness" was defined as the rate at which a model explicitly acknowledged in its reasoning chain that it was relying on an externally provided hint after changing its answer due to that hint. In the majority of cases for both models, potentially problematic information was used but kept hidden from users, even when they read the model's entire reasoning chain. Faithfulness was also lower on more difficult questions, with a 44% relative drop for Claude 3.7 Sonnet on GPQA compared to MMLU.

**Post-hoc Rationalization:** Studies have documented that some production models exhibit surprisingly high rates of post-hoc rationalization, where the model constructs plausible-sounding reasoning chains that do not actually reflect the process by which it arrived at its answer. GPT-4o-mini showed a 13% rationalization rate and Haiku 3.5 showed 7%, while frontier reasoning models like DeepSeek-R1 (0.37%) and ChatGPT-4o (0.49%) showed lower but non-zero rates.

**Key Implication:** When chains of thought are decorative rather than explanatory (serving as plausible post-hoc justifications rather than genuine representations of the model's reasoning), they cannot be relied upon for debugging, model auditing, or deployment in high-stakes applications.

### Fragility and Robustness

Chain-of-thought reasoning has been shown to be fragile in several ways:

- **Sensitivity to perturbations:** Semantically irrelevant changes to the prompt, such as adding distractor phrases or altering symbolic representations, can substantially degrade CoT performance.
- **Surface-level pattern matching:** Models have been observed to favor surface-level reasoning patterns over logically valid reasoning, suggesting that CoT may sometimes function more as pattern matching than genuine logical deduction.
- **Difficulty scaling:** Reasoning performance scales poorly with task difficulty. Models tend to over-elaborate on simple problems while failing on harder ones.

### The "Illusion of Transparency"

Research has revealed an "illusion of transparency" phenomenon, where final answers often remain unchanged even when intermediate reasoning steps are falsified or omitted. This suggests that in some cases, the chain of thought may serve more as additional context or compute rather than as a genuine reasoning scaffold.

### Scale Dependency

The requirement for models of approximately 100B+ parameters limits the applicability of CoT prompting to only the largest and most expensive models. Smaller models cannot reliably benefit from the technique, which creates an accessibility barrier.

### Increased Cost and Latency

Chain-of-thought prompting and especially reasoning models generate significantly more tokens than standard prompting, leading to:

- Higher API costs (reasoning tokens are billed as output tokens)
- Increased latency (reasoning models can be 20-30 times slower than standard models)
- Greater energy consumption per query

### Not Always Beneficial

CoT prompting does not universally improve performance. For simple, straightforward tasks, it can actually decrease performance by introducing unnecessary complexity. Research from the Wharton Generative AI Lab has also shown that for reasoning models, explicit CoT prompting provides diminishing returns since these models already reason internally.

## Theoretical Perspectives

### Why Does CoT Work?

Several hypotheses have been proposed to explain why chain-of-thought prompting improves LLM performance:

1. **Additional computation:** The intermediate tokens provide the model with additional forward passes (computation steps) to process information, effectively increasing the model's computational depth for a given problem.

2. **Task decomposition:** Breaking complex problems into simpler subtasks allows the model to leverage its competence on easier sub-problems, even when it struggles with the full problem.

3. **Working memory simulation:** The chain of thought serves as an external "working memory," allowing the model to store and reference intermediate results that would otherwise be lost in a single forward pass.

4. **Training distribution alignment:** Step-by-step reasoning may more closely match patterns found in the model's training data (textbooks, tutorials, worked examples), making it easier for the model to draw on relevant knowledge.

5. **Search in language space:** CoT can be viewed as a form of search through the space of possible solutions, expressed in natural language rather than through formal algorithms.

### Connection to System 1 and System 2 Thinking

The distinction between standard LLM inference and chain-of-thought reasoning has been compared to Daniel Kahneman's dual-process theory of cognition:

| Aspect | System 1 (Standard LLM) | System 2 (CoT / Reasoning Models) |
|---|---|---|
| Speed | Fast, immediate | Slow, deliberate |
| Process | Automatic, intuitive | Controlled, analytical |
| Effort | Low computational cost | High computational cost |
| Use case | Simple, familiar tasks | Complex, novel problems |

This analogy, while imperfect, captures the essential trade-off: reasoning models sacrifice speed and cost for improved accuracy on complex tasks, much as human System 2 thinking requires more effort but produces more reliable results on difficult problems.

## Timeline of Key Developments

| Date | Development | Authors / Organization |
|---|---|---|
| January 2022 | Chain-of-Thought Prompting paper posted to arXiv | Wei et al. (Google Brain) |
| March 2022 | Self-Consistency paper posted to arXiv | Wang et al. (Google Brain) |
| May 2022 | Zero-shot CoT ("Let's think step by step") paper | Kojima et al. |
| May 2022 | Least-to-Most Prompting paper | Zhou et al. (Google Brain) |
| October 2022 | Auto-CoT paper | Zhang et al. |
| December 2022 | All four foundational papers published at NeurIPS / ICLR | Various |
| May 2023 | Tree of Thoughts paper | Yao et al. (Princeton / Google DeepMind) |
| August 2023 | Graph of Thoughts paper | Besta et al. (ETH Zurich) |
| August 2024 | "Scaling LLM Test-Time Compute" paper | Snell et al. |
| September 2024 | OpenAI o1 released | [OpenAI](/wiki/openai) |
| December 2024 | OpenAI o3 previewed | [OpenAI](/wiki/openai) |
| January 2025 | DeepSeek-R1 released (open-source) | DeepSeek |
| February 2025 | Claude 3.7 Sonnet with extended thinking | [Anthropic](/wiki/anthropic) |
| April 2025 | OpenAI o3 and o4-mini fully released | [OpenAI](/wiki/openai) |
| May 2025 | "Reasoning Models Don't Always Say What They Think" published | [Anthropic](/wiki/anthropic) |

## See Also

- [Prompt engineering](/wiki/prompt_engineering)
- [Large language model](/wiki/large_language_model)
- [Few-shot learning](/wiki/few-shot_learning)
- [Natural language processing](/wiki/natural_language_processing)
- [Reinforcement learning](/wiki/reinforcement_learning)
- [Fine-tuning](/wiki/fine_tuning)
- [Inference](/wiki/inference)
- [Transformer](/wiki/attention_is_all_you_need_transformer)
- [OpenAI](/wiki/openai)
- [Anthropic](/wiki/anthropic)
- [Claude](/wiki/claude_ai)
- [DeepSeek](/wiki/deepseek)
- [Benchmark](/wiki/benchmark)
- [Google DeepMind](/wiki/google_deepmind)

## References

1. Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *Advances in Neural Information Processing Systems (NeurIPS 2022)*. arXiv:2201.11903. [https://arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)

2. Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). "Large Language Models are Zero-Shot Reasoners." *Advances in Neural Information Processing Systems (NeurIPS 2022)*. arXiv:2205.11916. [https://arxiv.org/abs/2205.11916](https://arxiv.org/abs/2205.11916)

3. Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). "Self-Consistency Improves Chain of Thought Reasoning in Language Models." *International Conference on Learning Representations (ICLR 2023)*. arXiv:2203.11171. [https://arxiv.org/abs/2203.11171](https://arxiv.org/abs/2203.11171)

4. Zhou, D., Scharli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models." *International Conference on Learning Representations (ICLR 2023)*. arXiv:2205.10625. [https://arxiv.org/abs/2205.10625](https://arxiv.org/abs/2205.10625)

5. Zhang, Z., Zhang, A., Li, M., & Smola, A. (2022). "Automatic Chain of Thought Prompting in Large Language Models." *International Conference on Learning Representations (ICLR 2023)*. arXiv:2210.03493. [https://arxiv.org/abs/2210.03493](https://arxiv.org/abs/2210.03493)

6. Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T. L., Cao, Y., & Narasimhan, K. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." *Advances in Neural Information Processing Systems (NeurIPS 2023)*. arXiv:2305.10601. [https://arxiv.org/abs/2305.10601](https://arxiv.org/abs/2305.10601)

7. Besta, M., Blach, N., Kubicek, A., Gerstenberger, R., Gianinazzi, L., Gajda, J., Lehmann, T., Podstawski, M., Niewiadomski, H., Nyczyk, P., & Hoefler, T. (2023). "Graph of Thoughts: Solving Elaborate Problems with Large Language Models." *Proceedings of the AAAI Conference on Artificial Intelligence (AAAI 2024)*. arXiv:2308.09687. [https://arxiv.org/abs/2308.09687](https://arxiv.org/abs/2308.09687)

8. Snell, C., Lee, J., Xu, K., & Kumar, A. (2024). "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters." arXiv:2408.03314. [https://arxiv.org/abs/2408.03314](https://arxiv.org/abs/2408.03314)

9. OpenAI. (2024). "Learning to Reason with LLMs." [https://openai.com/index/learning-to-reason-with-llms/](https://openai.com/index/learning-to-reason-with-llms/)

10. Anthropic. (2025). "Claude's Extended Thinking." [https://www.anthropic.com/news/visible-extended-thinking](https://www.anthropic.com/news/visible-extended-thinking)

11. Anthropic. (2025). "Claude 3.7 Sonnet." [https://www.anthropic.com/news/claude-3-7-sonnet](https://www.anthropic.com/news/claude-3-7-sonnet)

12. DeepSeek-AI. (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." arXiv:2501.12948. [https://arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948)

13. Chen, Y., Benton, J., et al. (2025). "Reasoning Models Don't Always Say What They Think." *Anthropic Research*. arXiv:2505.05410. [https://arxiv.org/abs/2505.05410](https://arxiv.org/abs/2505.05410)

14. Anthropic. (2025). "Measuring Faithfulness in Chain-of-Thought Reasoning." [https://www.anthropic.com/research/measuring-faithfulness-in-chain-of-thought-reasoning](https://www.anthropic.com/research/measuring-faithfulness-in-chain-of-thought-reasoning)

15. Google Research. (2022). "Language Models Perform Reasoning via Chain of Thought." [https://research.google/blog/language-models-perform-reasoning-via-chain-of-thought/](https://research.google/blog/language-models-perform-reasoning-via-chain-of-thought/)

16. OpenAI. (2025). "Introducing OpenAI o3 and o4-mini." [https://openai.com/index/introducing-o3-and-o4-mini/](https://openai.com/index/introducing-o3-and-o4-mini/)

17. Meincke, L., Mollick, E. R., Mollick, L., & Shapiro, D. (2025). "Prompting Science Report 2: The Decreasing Value of Chain of Thought in Prompting." Wharton Generative AI Labs. [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5285532](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5285532)
