---
title: "Agentic Context Engineering"
slug: "agentic_context_engineering"
categories:
  - "Artificial_intelligence"
  - "Machine_learning"
  - "Natural_language_processing"
  - "Large_language_models"
  - "Prompt_engineering"
  - "AI_agents"
---[Template:Infobox AI concept](/index.php?title=Template:Infobox_AI_concept&action=edit&redlink=1)

**Agentic Context Engineering** (**ACE**) is a [framework](/index.php?title=Framework&action=edit&redlink=1) for scalable and efficient [context adaptation](/index.php?title=Context_adaptation&action=edit&redlink=1) in [large language models](/wiki/large_language_model) (LLMs), designed to enable [self-improving](/index.php?title=Self-improving&action=edit&redlink=1) [AI systems](/index.php?title=AI_system&action=edit&redlink=1) through the construction of evolving contextual "playbooks." Introduced in October 2025 by researchers from [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1), [SambaNova Systems](/index.php?title=SambaNova_Systems&action=edit&redlink=1), and [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1), ACE addresses critical limitations in existing context adaptation methods, particularly [brevity bias](/index.php?title=Brevity_bias&action=edit&redlink=1) and [context collapse](/index.php?title=Context_collapse&action=edit&redlink=1).[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Overview

ACE treats contexts not as concise summaries but as comprehensive, evolving playbooks that accumulate, refine, and organize strategies over time. The framework operates through a modular architecture with three specialized roles: a **Generator** that produces [reasoning](/index.php?title=Reasoning&action=edit&redlink=1) trajectories, a **Reflector** that distills insights from successes and errors, and a **Curator** that integrates these insights into structured context updates. This design enables LLMs to learn from execution feedback without requiring [supervised learning](/wiki/supervised_learning) or model [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1).[&#91;1&#93;](#cite_note-zhang2025ace-1)

The framework builds upon the adaptive memory approach introduced by [Dynamic Cheatsheet](/index.php?title=Dynamic_Cheatsheet&action=edit&redlink=1),[&#91;2&#93;](#cite_note-suzgun2025dc-2) but extends it with incremental delta updates and a grow-and-refine mechanism to prevent information degradation during iterative adaptation.

## Terminology

- **Context engineering** (also called [prompt engineering](/wiki/prompt_engineering) or context adaptation): modifying inputs (system prompts, instructions, strategies, evidence) at inference time rather than changing model weights[&#91;1&#93;](#cite_note-zhang2025ace-1)

- **Brevity bias**: a tendency of some prompt optimizers to converge to short, generic prompts that lose domain-specific heuristics and tactics[&#91;1&#93;](#cite_note-zhang2025ace-1)

- **Context collapse**: degradation that occurs when monolithic rewrites compress long, detailed contexts into much shorter summaries, erasing accumulated knowledge and harming accuracy[&#91;1&#93;](#cite_note-zhang2025ace-1)

- **Evolving playbook**: ACE's representation of context as structured, itemized entries (bullets) that accumulate strategies, pitfalls, schemas, and tool-use patterns over time[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Background and Motivation

### Context Adaptation

[Context adaptation](/index.php?title=Context_adaptation&action=edit&redlink=1) (or context engineering) refers to methods that improve [LLM](/wiki/llm) behavior by constructing or modifying inputs to the model rather than altering its weights. This approach has gained prominence as an alternative to traditional [model training](/wiki/model_training) because contexts are interpretable, allow rapid integration of new knowledge at [runtime](/index.php?title=Runtime&action=edit&redlink=1), and can be shared across models or modules in [compound AI systems](/index.php?title=Compound_AI_system&action=edit&redlink=1).[&#91;1&#93;](#cite_note-zhang2025ace-1)

The state-of-the-art in context adaptation leverages [natural language](/index.php?title=Natural_language&action=edit&redlink=1) feedback, where a language model inspects the current context along with signals such as execution traces, reasoning steps, or validation results, and generates natural language feedback on how the context should be revised. Representative methods include:

- **[Reflexion](/index.php?title=Reflexion&action=edit&redlink=1)** - reflects on failures to improve [agent](/wiki/agent) planning[&#91;3&#93;](#cite_note-shinn2023reflexion-3)

- **[TextGrad](/index.php?title=TextGrad&action=edit&redlink=1)** - optimizes prompts via gradient-like textual feedback[&#91;4&#93;](#cite_note-yuksekgonul2024textgrad-4)

- **[GEPA](/index.php?title=GEPA&action=edit&redlink=1)** (Genetic-Pareto) - refines prompts iteratively based on execution traces[&#91;5&#93;](#cite_note-agrawal2025gepa-5)

- **[Dynamic Cheatsheet](/index.php?title=Dynamic_Cheatsheet&action=edit&redlink=1)** - constructs an external memory that accumulates strategies from past experiences[&#91;2&#93;](#cite_note-suzgun2025dc-2)

### Limitations of Existing Methods

#### Brevity Bias

A recurring limitation of context adaptation methods is **brevity bias**: the tendency of optimization to collapse toward short, generic prompts. This bias undermines performance in domains that demand detailed, context-rich guidance, such as [multi-step agents](/index.php?title=Multi-step_agents&action=edit&redlink=1), [program synthesis](/index.php?title=Program_synthesis&action=edit&redlink=1), or [knowledge-intensive reasoning](/index.php?title=Knowledge-intensive_reasoning&action=edit&redlink=1), where success hinges on accumulating rather than compressing task-specific insights.[&#91;1&#93;](#cite_note-zhang2025ace-1)[&#91;6&#93;](#cite_note-gao2025prompt-6)

#### Context Collapse

**Context collapse** arises when an LLM is tasked with fully rewriting accumulated context at each adaptation step. As the context grows large, the model tends to compress it into much shorter, less informative summaries, causing dramatic loss of information. In one case study on the [AppWorld](/index.php?title=AppWorld&action=edit&redlink=1) benchmark, a context containing 18,282 tokens and achieving 66.7% accuracy collapsed to just 122 tokens at the next step, with accuracy dropping to 57.1%-worse than the baseline of 63.7% without adaptation.[&#91;1&#93;](#cite_note-zhang2025ace-1)

## The ACE Framework

ACE employs a three-component agentic architecture inspired by [Dynamic Cheatsheet](/index.php?title=Dynamic_Cheatsheet&action=edit&redlink=1):

| Component | Role | Description |
| --- | --- | --- |
| **Generator** | Solution Generation | Produces reasoning trajectories for new queries, surfacing effective strategies and recurring pitfalls |
| **Reflector** | Insight Extraction | Critiques traces to extract lessons, optionally refining them across multiple iterations |
| **Curator** | Context Integration | Synthesizes lessons into compact delta entries, merged deterministically into existing context |

### Key Design Principles

- **Incremental delta updates**: update only the affected bullets instead of rewriting the whole prompt; preserve prior knowledge and cut latency/cost[&#91;1&#93;](#cite_note-zhang2025ace-1)

- **Grow-and-refine**: steadily append useful entries and periodically deduplicate/merge semantically similar bullets; refine only when needed (for example on context-window pressure)[&#91;1&#93;](#cite_note-zhang2025ace-1)

- **Feedback-driven**: leverage natural execution signals (for example code success/failure, API schemas, numeric checks) and, when available, ground-truth labels; can operate without labeled supervision[&#91;1&#93;](#cite_note-zhang2025ace-1)

### Incremental Delta Updates

A core design principle of ACE is representing context as a collection of structured, itemized **bullets** rather than a single monolithic prompt. Each bullet consists of:

1. **Metadata** - including a unique identifier and counters tracking how often it was marked helpful or harmful

2. **Content** - capturing a small unit such as a reusable strategy, domain concept, or common failure mode

This itemized design enables three key properties:

- **Localization** - only relevant bullets are updated

- **Fine-grained retrieval** - the Generator can focus on the most pertinent knowledge

- **Incremental adaptation** - efficient merging, pruning, and de-duplication during [inference](/wiki/inference)

Rather than regenerating contexts in full, ACE incrementally produces compact **delta contexts**: small sets of candidate bullets distilled by the Reflector and integrated by the Curator. This avoids the computational cost and latency of full rewrites while ensuring past knowledge is preserved.[&#91;1&#93;](#cite_note-zhang2025ace-1)

### Grow-and-Refine Mechanism

ACE ensures contexts remain compact and relevant through periodic or lazy refinement. In the **grow-and-refine** process, bullets with new identifiers are appended while existing bullets are updated in place (for example incrementing counters). A de-duplication step then prunes redundancy by comparing bullets via [semantic embeddings](/index.php?title=Semantic_embedding&action=edit&redlink=1). This refinement can be performed proactively (after each delta) or lazily (only when the context window is exceeded), depending on application requirements.[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Relation to Prior Methods

| Approach | Core idea | Strengths | Limitations addressed by ACE | Representative refs |
| --- | --- | --- | --- | --- |
| [In-context learning](/wiki/in-context_learning) (ICL) | Provide demonstrations in prompt | Simple; no training | Static; limited accumulation over time | [&#91;1&#93;](#cite_note-zhang2025ace-1) |
| [TextGrad](/index.php?title=TextGrad&action=edit&redlink=1) | Natural-language "gradients" improve components | General framework; flexible | May still favor brevity or monolithic edits | [&#91;4&#93;](#cite_note-yuksekgonul2024textgrad-4) |
| GEPA | Reflective evolution with genetic–Pareto search | Sample-efficient; strong baselines | Optimized prompts can still be terse/monolithic | [&#91;5&#93;](#cite_note-agrawal2025gepa-5) |
| [Dynamic Cheatsheet](/index.php?title=Dynamic_Cheatsheet&action=edit&redlink=1) (DC) | Persistent adaptive memory at test time | Accumulates reusable snippets | Vulnerable to context collapse with full rewrites | [&#91;2&#93;](#cite_note-suzgun2025dc-2) |
| **ACE** | Agentic generate–reflect–curate with delta merges | Preserves detail; parallelizable; reduces latency/cost | Depends on feedback quality; needs periodic deduplication | [&#91;1&#93;](#cite_note-zhang2025ace-1) |

## Evaluation and Performance

### Benchmarks

ACE was evaluated on two categories of LLM applications:

#### Agent Benchmarks

**[AppWorld](/index.php?title=AppWorld&action=edit&redlink=1)** is a suite of autonomous agent tasks involving [API](/index.php?title=API&action=edit&redlink=1) understanding, [code generation](/index.php?title=Code_generation&action=edit&redlink=1), and environment interaction. It provides a realistic execution environment with 9 common applications (for example email, file system) and 457 APIs, featuring tasks of two difficulty levels (normal and challenge).[&#91;7&#93;](#cite_note-trivedi2024appworld-7)

#### Domain-Specific Benchmarks

- **FiNER** - requires labeling tokens in [XBRL](/index.php?title=XBRL&action=edit&redlink=1) financial documents with one of 139 fine-grained entity types[&#91;8&#93;](#cite_note-loukas2022finer-8)

- **Formula** - focuses on extracting values from structured XBRL filings and performing computations for financial queries[&#91;9&#93;](#cite_note-wang2025finlora-9)

### Results on Agent Benchmark

| Method | GT Labels | Test-Normal TGC↑ | Test-Normal SGC↑ | Test-Challenge TGC↑ | Test-Challenge SGC↑ | Average |
| --- | --- | --- | --- | --- | --- | --- |
| ReAct | - | 63.7 | 42.9 | 41.5 | 21.6 | 42.4 |
| **Offline Adaptation** |
| ReAct + ICL | ✓ | 64.3 (+0.6) | 46.4 (+3.5) | 46.0 (+4.5) | 27.3 (+5.7) | 46.0 (+3.6) |
| ReAct + GEPA | ✓ | 64.9 (+1.2) | 44.6 (+1.7) | 46.0 (+4.5) | 30.2 (+8.6) | 46.4 (+4.0) |
| ReAct + ACE | ✓ | **76.2 (+12.5)** | **64.3 (+21.4)** | **57.3 (+15.8)** | **39.6 (+18.0)** | **59.4 (+17.0)** |
| ReAct + ACE | ✗ | 75.0 (+11.3) | 64.3 (+21.4) | 54.4 (+12.9) | 35.2 (+13.6) | 57.2 (+14.8) |
| **Online Adaptation** |
| ReAct + DC (CU) | ✗ | 65.5 (+1.8) | 58.9 (+16.0) | 52.3 (+10.8) | 30.8 (+9.2) | 51.9 (+9.5) |
| ReAct + ACE | ✗ | **69.6 (+5.9)** | 53.6 (+10.7) | **66.0 (+24.5)** | **48.9 (+27.3)** | **59.5 (+17.1)** |

*TGC = Task Goal Completion, SGC = Scenario Goal Completion*[&#91;1&#93;](#cite_note-zhang2025ace-1)

Notably, on the AppWorld leaderboard, ACE matched the top-ranked production-level agent (IBM CUGA at 60.3%, powered by GPT-4.1) on average and surpassed it on the harder test-challenge split, despite using a smaller open-source model ([DeepSeek](/wiki/deepseek)-V3.1).[&#91;1&#93;](#cite_note-zhang2025ace-1)

### Results on Domain-Specific Benchmarks

| Method | GT Labels | FiNER (Acc↑) | Formula (Acc↑) | Average |
| --- | --- | --- | --- | --- |
| Base LLM | - | 70.7 | 67.5 | 69.1 |
| **Offline Adaptation** |
| ICL | ✓ | 72.3 (+1.6) | 67.0 (−0.5) | 69.6 (+0.5) |
| MIPROv2 | ✓ | 72.4 (+1.7) | 69.5 (+2.0) | 70.9 (+1.8) |
| GEPA | ✓ | 73.5 (+2.8) | 71.5 (+4.0) | 72.5 (+3.4) |
| ACE | ✓ | **78.3 (+7.6)** | **85.5 (+18.0)** | **81.9 (+12.8)** |
| ACE | ✗ | 71.1 (+0.4) | 83.0 (+15.5) | 77.1 (+8.0) |
| **Online Adaptation** |
| DC (CU) | ✓ | 74.2 (+3.5) | 69.5 (+2.0) | 71.8 (+2.7) |
| DC (CU) | ✗ | 68.3 (−2.4) | 62.5 (−5.0) | 65.4 (−3.7) |
| ACE | ✓ | **76.7 (+6.0)** | 76.5 (+9.0) | **76.6 (+7.5)** |
| ACE | ✗ | 67.3 (−3.4) | **78.5 (+11.0)** | 72.9 (+3.8) |

[&#91;1&#93;](#cite_note-zhang2025ace-1)

### Ablation Studies

| Method | GT Labels | Test-Normal TGC↑ | Test-Normal SGC↑ | Test-Challenge TGC↑ | Test-Challenge SGC↑ | Average |
| --- | --- | --- | --- | --- | --- | --- |
| ReAct | - | 63.7 | 42.9 | 41.5 | 21.6 | 42.4 |
| **Offline Adaptation** |
| ReAct + ACE w/o Reflector or multi-epoch | ✓ | 70.8 (+7.1) | 55.4 (+12.5) | 55.9 (+14.4) | 38.1 (+17.5) | 55.1 (+12.7) |
| ReAct + ACE w/o multi-epoch | ✓ | 72.0 (+8.3) | 60.7 (+17.8) | 54.9 (+13.4) | 39.6 (+18.0) | 56.8 (+14.4) |
| ReAct + ACE | ✓ | **76.2 (+12.5)** | **64.3 (+21.4)** | **57.3 (+15.8)** | 39.6 (+18.0) | **59.4 (+17.0)** |
| **Online Adaptation** |
| ReAct + ACE | ✗ | 67.9 (+4.2) | 51.8 (+8.9) | 61.4 (+19.9) | 43.2 (+21.6) | 56.1 (+13.7) |
| ReAct + ACE + offline warmup | ✗ | **69.6 (+5.9)** | **53.6 (+10.7)** | **66.0 (+24.5)** | **48.9 (+27.3)** | **59.5 (+17.1)** |

[&#91;1&#93;](#cite_note-zhang2025ace-1)

### Efficiency Gains

ACE achieves substantial improvements in computational efficiency:

| Benchmark | Method | Latency (s)↓ | Rollouts/Token Cost |
| --- | --- | --- | --- |
| **Offline (AppWorld)** | ReAct + GEPA | 53,898 | 1,434 rollouts |
| ReAct + ACE | **9,517 (−82.3%)** | **357 rollouts (−75.1%)** |
| **Online (FiNER)** | DC (CU) | 65,104 | $17.7 |
| ACE | **5,503 (−91.5%)** | **$2.9 (−83.6%)** |

[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Applications

ACE is particularly effective for:

- **[LLM agents](/index.php?title=LLM_agent&action=edit&redlink=1)** - systems requiring multi-turn reasoning, [tool use](/index.php?title=Tool_use&action=edit&redlink=1), and environment interaction where accumulated strategies can be reused across episodes

- **[Domain-specific reasoning](/index.php?title=Domain-specific_reasoning&action=edit&redlink=1)** - tasks demanding specialized concepts and tactics, such as [financial analysis](/index.php?title=Financial_analysis&action=edit&redlink=1), legal reasoning, and technical documentation

- **[Self-improving systems](/index.php?title=Self-improving_systems&action=edit&redlink=1)** - applications that benefit from continuous learning and adaptation without model retraining

- **[Online learning](/wiki/online_learning)** - scenarios requiring real-time adaptation to distribution shifts and limited training data[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Advantages

1. **No model retraining required** - ACE operates at inference time without modifying model weights

2. **Interpretability** - contexts are human-readable and can be inspected, edited, or selectively unlearned

3. **Scalability** - compatible with [long-context models](/index.php?title=Long-context_models&action=edit&redlink=1) and benefits from [KV cache](/index.php?title=KV_cache&action=edit&redlink=1) reuse and compression

4. **Cost-effective** - significantly lower adaptation latency and computational cost compared to alternatives

5. **Label-free learning** - can leverage execution feedback without ground-truth labels[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Discussion

- **Longer Context ≠ Higher Serving Cost**: While ACE produces longer contexts than methods such as GEPA, this does not translate to linearly higher inference cost or GPU memory usage. Modern serving infrastructures are increasingly optimized for long-context workloads through techniques such as KV cache reuse,[&#91;10&#93;](#cite_note-promptcache-10) compression,[&#91;11&#93;](#cite_note-cachegen-11) and offloading.[&#91;12&#93;](#cite_note-kivi-12)

- **Implications for Continuous Learning**: ACE provides a flexible and efficient alternative to model fine-tuning for [online learning](/wiki/online_learning) and [continuous learning](/index.php?title=Continuous_learning&action=edit&redlink=1). Adapting contexts is cheaper than updating model weights. Furthermore, because contexts are human-interpretable, they support selective unlearning, which is crucial for privacy, safety, and correcting outdated information.[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Limitations

ACE faces several limitations:

- **Reliance on strong Reflector** - if the Reflector fails to extract meaningful insights, the constructed context may become noisy or harmful

- **Not universal** - tasks requiring only concise instructions (for example simple classification) may not benefit from rich contexts

- **Feedback quality dependency** - without reliable feedback signals (ground-truth labels or execution outcomes), both ACE and other adaptive methods may degrade in performance[&#91;1&#93;](#cite_note-zhang2025ace-1)

## Related Concepts

- [Context engineering](/index.php?title=Context_engineering&action=edit&redlink=1) - the broader practice of optimizing token configuration for LLM inference

- [Prompt engineering](/wiki/prompt_engineering) - writing and organizing LLM instructions for optimal outcomes

- [Test-time learning](/index.php?title=Test-time_learning&action=edit&redlink=1) - adaptation during inference without weight updates

- [In-context learning](/wiki/in-context_learning) - using demonstrations in the input prompt

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG) - fetching information dynamically to insert into prompts

- [Agent memory](/index.php?title=Agent_memory&action=edit&redlink=1) - external memory systems for accumulating experience in autonomous agents[&#91;13&#93;](#cite_note-wang2024awm-13)[&#91;14&#93;](#cite_note-xu2025amem-14)

## See Also

- [Large language model](/wiki/large_language_model)

- [Artificial intelligence agent](/wiki/artificial_intelligence_agent)

- [Prompt optimization](/index.php?title=Prompt_optimization&action=edit&redlink=1)

- [Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1)

- [Machine learning](/wiki/machine_learning)

- [Compound AI system](/index.php?title=Compound_AI_system&action=edit&redlink=1)

- [Dynamic Cheatsheet](/index.php?title=Dynamic_Cheatsheet&action=edit&redlink=1)

- [ReAct](/index.php?title=ReAct&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-zhang2025ace_1-0) [1.01](#cite_ref-zhang2025ace_1-1) [1.02](#cite_ref-zhang2025ace_1-2) [1.03](#cite_ref-zhang2025ace_1-3) [1.04](#cite_ref-zhang2025ace_1-4) [1.05](#cite_ref-zhang2025ace_1-5) [1.06](#cite_ref-zhang2025ace_1-6) [1.07](#cite_ref-zhang2025ace_1-7) [1.08](#cite_ref-zhang2025ace_1-8) [1.09](#cite_ref-zhang2025ace_1-9) [1.10](#cite_ref-zhang2025ace_1-10) [1.11](#cite_ref-zhang2025ace_1-11) [1.12](#cite_ref-zhang2025ace_1-12) [1.13](#cite_ref-zhang2025ace_1-13) [1.14](#cite_ref-zhang2025ace_1-14) [1.15](#cite_ref-zhang2025ace_1-15) [1.16](#cite_ref-zhang2025ace_1-16) [1.17](#cite_ref-zhang2025ace_1-17) [1.18](#cite_ref-zhang2025ace_1-18) [1.19](#cite_ref-zhang2025ace_1-19) [1.20](#cite_ref-zhang2025ace_1-20) [1.21](#cite_ref-zhang2025ace_1-21) [1.22](#cite_ref-zhang2025ace_1-22) [1.23](#cite_ref-zhang2025ace_1-23) [1.24](#cite_ref-zhang2025ace_1-24) Zhang, Qizheng; Hu, Changran; Upasani, Shubhangi; Ma, Boyuan; Hong, Fenglu; Kamanuru, Vamsidhar; Rainton, Jay; Wu, Chen; Ji, Mengmeng; Li, Hanchen; Thakker, Urmish; Zou, James; Olukotun, Kunle (2025). "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models". arXiv:2510.04618 [cs.LG]. [https://arxiv.org/abs/2510.04618](https://arxiv.org/abs/2510.04618). DOI: 10.48550/arXiv.2510.04618

2. ↑ [2.0](#cite_ref-suzgun2025dc_2-0) [2.1](#cite_ref-suzgun2025dc_2-1) [2.2](#cite_ref-suzgun2025dc_2-2) Suzgun, Mirac; Yuksekgonul, Mert; Bianchi, Federico; Jurafsky, Dan; Zou, James (2025). "Dynamic Cheatsheet: Test-Time Learning with Adaptive Memory". arXiv:2504.07952 [cs.CL]. [https://arxiv.org/abs/2504.07952](https://arxiv.org/abs/2504.07952)

3. [↑](#cite_ref-shinn2023reflexion_3-0) Shinn, Noah; Cassano, Federico; Gopinath, Ashwin; Narasimhan, Karthik; Yao, Shunyu (2023). "Reflexion: Language agents with verbal reinforcement learning". Advances in Neural Information Processing Systems, 36, 8634-8652.

4. ↑ [4.0](#cite_ref-yuksekgonul2024textgrad_4-0) [4.1](#cite_ref-yuksekgonul2024textgrad_4-1) Yuksekgonul, Mert; Bianchi, Federico; Boen, Joseph; Liu, Sheng; Huang, Zhi; Guestrin, Carlos; Zou, James (2024). "Textgrad: Automatic differentiation via text". arXiv:2406.07496 [cs.LG]. [https://arxiv.org/abs/2406.07496](https://arxiv.org/abs/2406.07496)

5. ↑ [5.0](#cite_ref-agrawal2025gepa_5-0) [5.1](#cite_ref-agrawal2025gepa_5-1) Agrawal, Lakshya A; Tan, Shangyin; Soylu, Dilara; et al. (2025). "GEPA: Reflective prompt evolution can outperform reinforcement learning". arXiv:2507.19457 [cs.LG]. [https://arxiv.org/abs/2507.19457](https://arxiv.org/abs/2507.19457)

6. [↑](#cite_ref-gao2025prompt_6-0) Gao, Shuzheng; Wang, Chaozheng; Gao, Cuiyun; et al. (2025). "The prompt alchemist: Automated llm-tailored prompt optimization for test case generation". arXiv:2501.01329 [cs.SE]. [https://arxiv.org/abs/2501.01329](https://arxiv.org/abs/2501.01329)

7. [↑](#cite_ref-trivedi2024appworld_7-0) Trivedi, Harsh; Khot, Tushar; Hartmann, Mareike; et al. (2024). "AppWorld: A Controllable World of Apps and People for Benchmarking Interactive Coding Agents". ACL 2024. [https://appworld.dev/](https://appworld.dev/)

8. [↑](#cite_ref-loukas2022finer_8-0) Loukas, Lefteris; Fergadiotis, Manos; Chalkidis, Ilias; et al. (2022). "FiNER: Financial numeric entity recognition for XBRL tagging". arXiv:2203.06482 [cs.CL]. [https://arxiv.org/abs/2203.06482](https://arxiv.org/abs/2203.06482)

9. [↑](#cite_ref-wang2025finlora_9-0) Wang, Dannong; Patel, Jaisal; Zha, Daochen; Yang, Steve Y; Liu, Xiao-Yang (2025). "FinLoRA: Benchmarking LoRA methods for fine-tuning LLMs on financial datasets". arXiv:2505.19819 [cs.LG]. [https://arxiv.org/abs/2505.19819](https://arxiv.org/abs/2505.19819)

10. [↑](#cite_ref-promptcache_10-0) Gim, In; Chen, Guojun; Lee, Seung-seob; et al. (2024). "Prompt Cache: Modular attention reuse for low-latency inference". Proceedings of Machine Learning and Systems, 6, 325–338.

11. [↑](#cite_ref-cachegen_11-0) Liu, Yuhan; Li, Hanchen; Cheng, Yihua; et al. (2024). "CacheGen: KV cache compression and streaming for fast large language model serving". SIGCOMM 2024.

12. [↑](#cite_ref-kivi_12-0) Liu, Zirui; Yuan, Jiayi; Jin, Hongye; et al. (2024). "KIVI: A tuning-free asymmetric 2bit quantization for KV cache". ICML 2024.

13. [↑](#cite_ref-wang2024awm_13-0) Wang, Zora Zhiruo; Mao, Jiayuan; Fried, Daniel; Neubig, Graham (2024). "Agent workflow memory". arXiv:2409.07429 [cs.AI]. [https://arxiv.org/abs/2409.07429](https://arxiv.org/abs/2409.07429)

14. [↑](#cite_ref-xu2025amem_14-0) Xu, Wujiang; Mei, Kai; Gao, Hang; et al. (2025). "A-MEM: Agentic memory for LLM agents". arXiv:2502.12110 [cs.AI]. [https://arxiv.org/abs/2502.12110](https://arxiv.org/abs/2502.12110)