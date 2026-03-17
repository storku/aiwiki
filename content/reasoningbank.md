---
title: "ReasoningBank"
slug: "reasoningbank"
categories:
  - "Terms"
  - "Artificial_intelligence_terms"
---[Template:Infobox technology](/index.php?title=Template:Infobox_technology&action=edit&redlink=1)

**ReasoningBank** is a novel memory framework for [Large language model](/wiki/large_language_model) (LLM) [AI agents](/wiki/ai_agent) that enables continuous self-improvement by distilling generalizable reasoning strategies from both successful and failed experiences. Developed by researchers at [Google Cloud AI Research](/index.php?title=Google_Cloud_AI_Research&action=edit&redlink=1), [University of Illinois Urbana-Champaign](/index.php?title=University_of_Illinois_Urbana-Champaign&action=edit&redlink=1), [Yale University](/index.php?title=Yale_University&action=edit&redlink=1), and [Google Cloud AI](/index.php?title=Google_Cloud_AI&action=edit&redlink=1), ReasoningBank demonstrates up to 34.2% relative improvement in task success rates while reducing interaction steps by up to 16% across [web browsing](/index.php?title=Web_browsing&action=edit&redlink=1) and [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) benchmarks.[&#91;1&#93;](#cite_note-reasoningbank-1)

The framework addresses a fundamental limitation in current LLM agents: their inability to learn from accumulated interaction history, forcing them to discard valuable insights and repeat past errors. As these agents are increasingly deployed in persistent, long-running roles, they naturally encounter continuous streams of tasks throughout their lifetime. However, they largely fail to learn from their accumulated experience across tasks, approaching each task in isolation and lacking self-evolving capabilities that make the agent system more capable over time.[&#91;1&#93;](#cite_note-reasoningbank-1)

## Overview

ReasoningBank introduces two key innovations that distinguish it from prior memory approaches. First, it structures memory as human-interpretable knowledge units containing titles, descriptions, and distilled reasoning content—abstracting away low-level execution details while preserving transferable patterns. Unlike traditional memory systems that store raw trajectories or only successful routines, ReasoningBank extracts high-level reasoning strategies and decision rationales from both positive and negative experiences.[&#91;1&#93;](#cite_note-reasoningbank-1)

Second, it integrates with **memory-aware [test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1)** (MaTTS), which accelerates learning by generating abundant diverse experiences that provide rich contrastive signals for synthesizing higher-quality memory. This establishes memory-driven experience scaling as a new scaling dimension for agents, complementing traditional parameter scaling and data scaling approaches.[&#91;1&#93;](#cite_note-reasoningbank-1)[&#91;2&#93;](#cite_note-venturebeat-2)

Building on [ReAct](/index.php?title=ReAct&action=edit&redlink=1)[&#91;3&#93;](#cite_note-react-3) agent architecture, ReasoningBank operates as a closed-loop system: agents retrieve relevant memories before tasks, execute with memory guidance, then extract new learnings to enrich the memory bank. This closed-loop process of retrieval, execution, and consolidation allows the agent to continuously evolve and improve its strategic capabilities, enabling agents to self-evolve with emergent behaviors arising naturally over time—progressing from execution-oriented strategies to adaptive self-reflections and compositional reasoning without parameter updates.[&#91;1&#93;](#cite_note-reasoningbank-1)

## Background

With the growing adoption of [large language model](/wiki/large_language_model) agents in persistent real-world roles, they naturally encounter continuous streams of tasks. A key limitation, however, is their failure to learn from the accumulated interaction history, forcing them to discard valuable insights and repeat past errors. By approaching each task in isolation, they are doomed to repeat past mistakes, discard valuable insights from related problems, and lack self-evolving capabilities that make the agent system more capable over time.[&#91;1&#93;](#cite_note-reasoningbank-1)

Recent efforts on agent memory have primarily focused on storing past interactions for reuse. While useful, these approaches are often limited to leveraging raw trajectories or common, successful routines (i.e., workflows, procedures). These approaches suffer from two fundamental drawbacks. First, they lack the ability to distill higher-level, transferable reasoning patterns. Second, by over-emphasizing successful experiences, they leave the valuable lessons from an agent's own failures largely underexplored. Consequently, existing memory designs often remain limited to passive record-keeping rather than providing actionable, generalizable guidance for future decisions.[&#91;1&#93;](#cite_note-reasoningbank-1)

## Methodology

### Core Framework

ReasoningBank implements a three-stage closed-loop process integrating [memory systems for AI agents](/index.php?title=Memory_systems_for_AI_agents&action=edit&redlink=1) with agent execution:

**Memory Retrieval:** Before task execution, the agent queries ReasoningBank using embedding-based similarity search (Gemini-Embedding-001 with cosine distance) to retrieve the top-k relevant memory items (default k=1). Retrieved items are injected into the agent's system instruction to guide decision-making, ensuring that the decision-making is grounded with useful past experiences.[&#91;1&#93;](#cite_note-reasoningbank-1)

**Memory Construction:** After task completion, the system obtains proxy signals for the correctness of completed trajectories using an LLM-as-a-judge (no ground-truth labels required). Different extraction strategies apply for successes versus failures—successful experiences contribute validated strategies, while failed experiences supply counterfactual signals and pitfalls that help sharpen guardrails. The system extracts up to three memory items per trajectory using the same backbone [LLM](/wiki/llm) as the agent at temperature 1.0 for extraction.[&#91;1&#93;](#cite_note-reasoningbank-1)

**Memory Consolidation:** New memory items are incorporated into ReasoningBank with a simple addition operation, maintaining an evolving repository of memory items. Items are appended to ReasoningBank in JSON format with pre-computed embeddings stored separately for efficient retrieval. The consolidation deliberately uses simple addition operations to isolate the contribution of memory content quality rather than architectural complexity.[&#91;1&#93;](#cite_note-reasoningbank-1)

Together, these steps form a closed-loop process: the agent leverages past experiences, constructs new memory from current tasks, and continually updates its memory, enabling sustained evolvement in test-time learning scenarios.

### Memory Schema

Each memory item in ReasoningBank is designed and induced from past experiences as structured knowledge units that abstract away low-level execution details while preserving transferrable reasoning patterns and strategies. Items are stored as structured triples containing three components:[&#91;1&#93;](#cite_note-reasoningbank-1)

- **Title:** A concise identifier summarizing the core strategy or reasoning pattern

- **Description:** A brief one-sentence summary of the memory item that provides context or purpose

- **Content:** Detailed reasoning steps (1-3 sentences), decision rationales, or operational insights extracted from past experiences

This schema design ensures memory items remain both human-interpretable and machine-usable while abstracting away task-specific details. The content preserves transferable reasoning patterns that generalize across similar scenarios, capturing both effective strategies from successes and crucial preventative lessons from failures. Together, memory items extracted are both human-interpretable and machine-usable, facilitating efficient usage and integration with agents.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Integration with Agents

An agent equipped with ReasoningBank can draw upon a curated pool of transferable strategies to guide decision-making. This enables the agent to recall effective insights, avoid previously observed pitfalls, and adapt more robustly to unseen queries.[&#91;1&#93;](#cite_note-reasoningbank-1)

ReasoningBank demonstrates compatibility across multiple [LLM](/wiki/llm) backbones including Gemini-2.5-Flash, Gemini-2.5-Pro, and Claude-3.7-Sonnet, all accessed via Vertex AI API. The agent policy is conditioned on the memory module, which provides relevant insights to inform actions. Agents follow the [ReAct](/index.php?title=ReAct&action=edit&redlink=1) style implementation with interleaved reasoning and acting, generating trajectories of observations and actions for each given task.[&#91;1&#93;](#cite_note-reasoningbank-1)

The framework distinguishes itself from related approaches:

- **[Synapse](/index.php?title=Synapse&action=edit&redlink=1)**[&#91;4&#93;](#cite_note-synapse-4): Stores complete raw trajectories with state abstraction, organizing past trajectories as in-context memory

- **[Agent Workflow Memory](/index.php?title=Agent_Workflow_Memory&action=edit&redlink=1) (AWM)**[&#91;5&#93;](#cite_note-awm-5): Abstracts common patterns from successful trajectories into reusable workflows and procedural routines

- **ReasoningBank**: Distills strategy-level reasoning from both successes and failures, enabling learning from counterfactual signals and capturing high-level, transferable reasoning patterns beyond procedural workflows

## MaTTS: Memory-Aware Test-Time Scaling

Memory-aware [test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1) (MaTTS) creates synergy between memory quality and scaled exploration by deliberately learning from abundant trajectories generated during [test-time compute](/index.php?title=Test-time_compute&action=edit&redlink=1) allocation. Instead of scaling experience through breadth by adding more tasks, MaTTS focuses on scaling experience through depth by tackling each single task with more exploration. Unlike vanilla test-time scaling that independently converts trajectories to memory, MaTTS uses contrastive signals across multiple attempts to curate more effective memory.[&#91;1&#93;](#cite_note-reasoningbank-1)

MaTTS deliberately learns from the abundant successful and failure trajectories generated during scaling for more effective memory curation. The system introduces two complementary instantiations: parallel scaling and sequential scaling.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Parallel Scaling

Generates multiple trajectories (k) for the same query simultaneously under guidance of retrieved memory items. By comparing and contrasting (self-contrast) across different trajectories, the agent can identify consistent reasoning patterns while filtering out spurious solutions. This process enables more reliable memory curation from multiple trials of a single query that promotes diverse exploration.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Sequential Scaling

Iteratively refines reasoning within a single trajectory after initial completion, following the principle of self-refinement. During this process, the intermediate notes generated in self-refinement are also used as valuable signals for memory, since they capture reasoning attempts, corrections, and insights that may not appear in the final solution.[&#91;1&#93;](#cite_note-reasoningbank-1)

The scaling factor k denotes the number of trajectories for parallel scaling and refinement steps for sequential scaling. Equipped with ReasoningBank, both parallel and sequential strategies become memory-aware, ensuring that the additional computation allocated at test time translates into more transferable and higher-quality memory for future tasks.

### Synergistic Effects

MaTTS establishes a powerful synergy between memory and test-time scaling: high-quality memory from ReasoningBank steers scaled exploration toward more promising paths, while the rich experiences generated during scaling forge even stronger memories. This positive feedback loop positions memory-driven experience scaling as a new scaling dimension for agents.[&#91;1&#93;](#cite_note-reasoningbank-1)

At k=3 parallel scaling on WebArena-Shopping with Gemini-2.5-flash, ReasoningBank extracts significantly more value from scaling than baseline methods. The benefit of scaling depends critically on the underlying memory: without memory, scaling yields slight improvement (Best-of-3 rises only from 39.0% to 40.6%). Weaker memory mechanisms such as Synapse and AWM provide moderate gains (reaching 42.8% and 45.5%, respectively). In contrast, MaTTS with ReasoningBank delivers the strongest benefit, with Best-of-3 climbing from 49.7% to 52.4%.[&#91;1&#93;](#cite_note-reasoningbank-1)

Critically, ReasoningBank is the only memory method where scaling improves subsequent memory quality—Pass@1 performance increased from 49.7% to 50.8%, while baseline methods degraded (Synapse dropped from 40.6% to 40.1%, and AWM from 44.4% to 41.2%). This asymmetry highlights that scaling alone is insufficient; only when paired with good memory mechanism does it contribute to curation of more effective memory, thereby closing the virtuous cycle.[&#91;1&#93;](#cite_note-reasoningbank-1)

## Experiments

### Benchmarks

Experiments evaluated ReasoningBank across three diverse, challenging benchmarks for [web browsing](/index.php?title=Web_browsing&action=edit&redlink=1) and [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) tasks:

**[WebArena](/index.php?title=WebArena&action=edit&redlink=1)**[&#91;6&#93;](#cite_note-webarena-6): Tests general web navigation across 684 tasks spanning diverse domains including shopping (187 tasks), administration (182), coding/GitLab (180), forums/Reddit (106), and multi-domain scenarios (29). Developed by Carnegie Mellon University, WebArena provides fully functional self-hosted websites with realistic tasks. Agents executed up to 30 steps per query in [BrowserGym](/index.php?title=BrowserGym&action=edit&redlink=1)[&#91;7&#93;](#cite_note-browsergym-7) environment using text-based accessibility tree representations.[&#91;1&#93;](#cite_note-reasoningbank-1)

**[Mind2Web](/index.php?title=Mind2Web&action=edit&redlink=1)**[&#91;8&#93;](#cite_note-mind2web-8): Evaluates generalization of agents on versatile operations and environments across 1,341 tasks with three progressively challenging difficulty levels—Cross-Task (252 tasks), Cross-Website (177), and Cross-Domain (912). Created by Ohio State University, Mind2Web spans 137 real-world websites across 31 domains. Evaluation focuses on element accuracy (EA), action F1 (AF1), step success rate (SSR), and task-level success rate (SR).[&#91;1&#93;](#cite_note-reasoningbank-1)

**[SWE-Bench-Verified](/index.php?title=SWE-Bench-Verified&action=edit&redlink=1)**[&#91;9&#93;](#cite_note-swebench-9)[&#91;10&#93;](#cite_note-swebench-verified-10): Tests repository-level software engineering and issue-resolving on 500 manually verified high-quality instances from real GitHub issues. Developed by Princeton University and OpenAI, this benchmark evaluates agents' ability to resolve issues in Python repositories using a bash-only environment implemented through Mini-SWE-Agent.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Evaluation Setup

All experiments used [ReAct](/index.php?title=ReAct&action=edit&redlink=1) agents with decoding temperature of 0.7 for model generations on web browsing tasks and temperature of 0.0 for deterministic LLM-as-a-judge evaluation. For memory extraction, temperature was set to 1.0. Baselines included:

- **No Memory**: The backbone LLM agent without any memory module, serving as a reference point

- **[Synapse](/index.php?title=Synapse&action=edit&redlink=1)**: A representative work that organizes past trajectories as in-context memory

- **[AWM](/index.php?title=AWM&action=edit&redlink=1)**: Abstracts common patterns from trajectories into reusable workflows

Together, these baselines span a progression from agents without memory, to those that directly reuse past trajectories, and finally to methods that distill higher-level structures, providing a comprehensive comparison for evaluating ReasoningBank. Evaluation metrics measured both effectiveness (success rates, resolve rates) and efficiency (interaction steps required to complete tasks).[&#91;1&#93;](#cite_note-reasoningbank-1)

## Results

### Performance Improvements Across Benchmarks

ReasoningBank consistently outperformed all baselines across three model backbones (Gemini-2.5-Flash, Gemini-2.5-Pro, Claude-3.7-Sonnet) and all benchmarks:

| Models | Shopping**(187) | Admin
(182) | Gitlab
(180) | Reddit
(106) | Multi
(29) | Overall
(684) |
| --- | --- | --- | --- | --- | --- | --- |
| Gemini-2.5-flash |
| No Memory | SR: 39.0
Step: 8.2 | SR: 44.5
Step: 9.5 | SR: 33.9
Step: 13.3 | SR: 55.7
Step: 6.7 | SR: 10.3
Step: 10.0 | SR: 40.5
Step: 9.7 |
| Synapse | SR: 40.6
Step: 7.0 | SR: 45.1
Step: 9.1 | SR: 35.6
Step: 13.0 | SR: 59.4
Step: 6.5 | SR: 10.3
Step: 10.5 | SR: 42.1
Step: 9.2 |
| AWM | SR: 44.4
Step: 7.0 | SR: 46.7
Step: 8.8 | SR: 37.2
Step: 13.2 | SR: 62.3
Step: 6.1 | SR: 3.4
Step: 7.7 | SR: 44.1
Step: 9.0 |
| ReasoningBank** | **SR: 49.7****Step: 6.1** | **SR: 51.1****Step: 8.2** | **SR: 40.6****Step: 12.3** | **SR: 67.0****Step: 5.6** | **SR: 13.8****Step: 8.8** | **SR: 48.8****Step: 8.3** |
| Gemini-2.5-pro |
| No Memory | SR: 45.5**Step: 7.6 | SR: 51.1
Step: 8.7 | SR: 35.0
Step: 11.6 | SR: 71.7
Step: 6.0 | SR: 6.9
Step: 8.8 | SR: 46.7
Step: 8.8 |
| Synapse | SR: 46.5
Step: 6.6 | SR: 52.2
Step: 8.9 | SR: 38.3
Step: 11.3 | SR: 68.9
Step: 5.9 | SR: 6.9
Step: 9.0 | SR: 47.7
Step: 8.5 |
| AWM | SR: 48.1
Step: 6.4 | SR: 49.3
Step: 9.8 | SR: 40.0
Step: 11.2 | SR: 68.9
Step: 6.4 | SR: 3.4
Step: 9.3 | SR: 47.6
Step: 8.7 |
| ReasoningBank** | **SR: 51.9****Step: 6.0** | **SR: 56.6****Step: 7.7** | **SR: 44.4****Step: 9.8** | **SR: 80.2****Step: 5.1** | **SR: 13.8****Step: 8.2** | **SR: 53.9****Step: 7.4** |
| Claude-3.7-sonnet |
| No Memory | SR: 38.5**Step: 6.1 | SR: 49.5
Step: 8.4 | SR: 36.7
Step: 10.6 | SR: 53.8
Step: 5.5 | SR: 0.0
Step: 11.6 | SR: 41.7
Step: 8.0 |
| Synapse | SR: 39.6
Step: 5.8 | SR: 50.5
Step: 8.5 | SR: 38.0
Step: 10.0 | SR: 53.8
Step: 6.1 | SR: 0.0
Step: 11.8 | SR: 42.6
Step: 7.9 |
| AWM | SR: 39.6
Step: 7.2 | SR: 47.8
Step: 9.3 | SR: 34.6
Step: 10.9 | SR: 52.8
Step: 7.0 | SR: 0.0
Step: 12.4 | SR: 40.8
Step: 8.9 |
| ReasoningBank** | **SR: 44.9****Step: 5.6** | **SR: 53.3****Step: 7.6** | **SR: 41.1****Step: 9.5** | **SR: 57.5****Step: 5.2** | **SR: 3.4****Step: 10.5** | **SR: 46.3****Step: 7.3** |

Specifically, ReasoningBank improved the overall success rate on WebArena by +8.3, +7.2, and +4.6 percentage points with three different backbone LLMs compared to memory-free agents, representing relative improvements of approximately 20.5%, 15.4%, and 11.0% respectively.[&#91;1&#93;](#cite_note-reasoningbank-1)

| Models | Cross-Task (252) | Cross-Website (177) | Cross-Domain (912) |
| --- | --- | --- | --- |
| Gemini-2.5-flash |
| No Memory | EA: 46.0, AF1: 59.1**SSR: 40.3, SR: 3.3 | EA: 39.8, AF1: 45.1
SSR: 31.7, SR: 1.7 | EA: 35.8, AF1: 37.9
SSR: 31.9, SR: 1.0 |
| Synapse | EA: 47.0, AF1: 59.5
SSR: 41.2, SR: 3.5 | EA: 40.3, AF1: 46.0
SSR: 32.1, SR: 1.9 | EA: 36.3, AF1: 38.5
SSR: 32.4, SR: 1.1 |
| AWM | EA: 46.3, AF1: 56.1
SSR: 41.0, SR: 3.5 | EA: 39.1, AF1: 42.2
SSR: 31.7, SR: 2.1 | EA: 33.3, AF1: 36.5
SSR: 30.1, SR: 0.7 |
| ReasoningBank** | **EA: 52.1, AF1: 60.4****SSR: 44.9, SR: 4.8** | **EA: 44.3, AF1: 52.6****SSR: 33.9, SR: 2.3** | **EA: 40.6, AF1: 41.3****SSR: 36.6, SR: 1.6** |
| Gemini-2.5-pro |
| No Memory | EA: 49.3, AF1: 60.2**SSR: 44.4, SR: 3.5 | EA: 41.2, AF1: 49.8
SSR: 34.8, SR: 3.4 | EA: 37.9, AF1: 37.7
SSR: 35.0, SR: 1.4 |
| Synapse | EA: 50.1, AF1: 61.0
SSR: 44.7, SR: 3.6 | EA: 41.8, AF1: 51.2
SSR: 35.0, SR: 3.2 | EA: 38.5, AF1: 39.8
SSR: 35.6, SR: 1.5 |
| AWM | EA: 48.6, AF1: 61.2
SSR: 44.4, SR: 3.7 | EA: 41.9, AF1: 47.9
SSR: 34.8, SR: 2.3 | EA: 37.3, AF1: 38.1
SSR: 34.4, SR: 1.2 |
| ReasoningBank** | **EA: 53.6, AF1: 62.7****SSR: 45.6, SR: 5.1** | **EA: 46.1, AF1: 54.8****SSR: 36.9, SR: 3.8** | **EA: 42.8, AF1: 45.2****SSR: 38.1, SR: 1.7** |

A similar pattern holds on Mind2Web, where ReasoningBank delivers clear gains across cross-task, cross-website, and cross-domain settings, underscoring both the consistency and scalability of its benefits across datasets and model sizes. The gains are especially pronounced in the cross-domain setting, which requires the highest level of generalization.[&#91;1&#93;](#cite_note-reasoningbank-1)

| Methods | Resolve Rate | Average Steps |
| --- | --- | --- |
| Gemini-2.5-flash |
| No Memory | 34.2% | 30.3 |
| Synapse | 35.4% | 30.7 |
| **ReasoningBank** | **38.8%** | **27.5** |
| Gemini-2.5-pro |
| No Memory | 54.0% | 21.1 |
| Synapse | 53.4% | 21.0 |
| **ReasoningBank** | **57.4%** | **19.8** |

Results on SWE-Bench-Verified further confirm ReasoningBank's robustness on repository-level software engineering tasks.[&#91;1&#93;](#cite_note-reasoningbank-1)

The strongest gains appeared in multi-domain scenarios requiring maximum generalization. On WebArena, the Multi subset requires transferring memory across multiple websites, where ReasoningBank achieves a notable gain of +7.5 percentage points (13.8% vs 6.3% average of baselines), demonstrating ReasoningBank's superior transfer learning capabilities. In contrast, strong baselines such as AWM fail to provide gains and even degrade significantly in this setting (3.4% vs 10.3% baseline).[&#91;1&#93;](#cite_note-reasoningbank-1)

### Enhanced Generalization

ReasoningBank enhances generalization with better transferrable memory across tasks, particularly in challenging generalization settings. The memory curated by ReasoningBank is more robust and transferable, enabling agents to generalize effectively across diverse scenarios. These results demonstrate that unlike baselines, ReasoningBank memory items are not tied to specific websites or queries but capture generalizable reasoning patterns.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Efficiency Gains

In addition to higher success rates, ReasoningBank achieves superior efficiency by leveraging past experiences as memory. It reduces the number of interaction steps needed to complete tasks, as shown in the Step metrics across benchmarks. On WebArena, across almost all subsets and backbones, ReasoningBank lowers the average step count by up to 1.4 compared with "No Memory", and 1.6 compared with other memory baselines.[&#91;1&#93;](#cite_note-reasoningbank-1)

| Models | Shopping | Admin | Gitlab | Reddit |
| --- | --- | --- | --- | --- |
| Successful Cases |
| No Memory | 6.8 | 8.4 | 8.6 | 6.1 |
| ReasoningBank | **4.7** (↓2.1) | **7.0** (↓1.4) | **7.6** (↓1.0) | **5.0** (↓1.1) |
| Reduction | **30.9%** | **16.7%** | **11.6%** | **18.0%** |
| Failed Cases |
| No Memory | 8.7 | 10.4 | 15.7 | 7.6 |
| ReasoningBank | **7.3** (↓1.4) | **9.5** (↓0.9) | **15.5** (↓0.2) | **6.8** (↓0.8) |
| Reduction | **16.1%** | **8.7%** | **1.3%** | **10.5%** |

The reduction is particularly pronounced on successful cases, reaching up to 2.1 fewer steps (a 30.9% relative reduction on Shopping domain) compared to failed ones. This indicates that ReasoningBank primarily helps the agent reach solutions with fewer interactions by strengthening its ability to follow effective reasoning paths rather than simply truncating failed trajectories. This highlights the role of memory in guiding purposeful decision-making and improving efficiency in practice.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Learning from Failures

ReasoningBank uniquely transforms failures into constructive signals through its design that enables distillation of reasoning patterns from both successes and failures. An ablation study on WebArena-Shopping with Gemini-2.5-flash compared different memory designs under two settings: using only successful trajectories versus leveraging both successes and failures.[&#91;1&#93;](#cite_note-reasoningbank-1)

| Method | Success Only | With Failures | Change |
| --- | --- | --- | --- |
| No Memory | 39.0% | 39.0% | — |
| Synapse | 40.6% | 40.1% | -0.5% |
| AWM | 44.4% | 38.5% | -5.9% |
| **ReasoningBank** | **46.0%** | **49.7%** | **+3.7%** |

Baseline methods such as Synapse and AWM build memory solely from successful trajectories, and thus are not equipped to benefit from failures. As a result, when failures are added, their performance is limited or even degraded. In contrast, ReasoningBank can transform failures into constructive signals rather than noise, enabling more robust generalization. This highlights that by learning strategy-level memory including lessons from failures, agents become substantially more effective.[&#91;1&#93;](#cite_note-reasoningbank-1)

### MaTTS Scaling Effectiveness

Memory-aware [test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1) amplified ReasoningBank's advantages substantially. Experiments on WebArena-Shopping with Gemini-2.5-flash demonstrated the effect of scaling factor k for both parallel and sequential scaling:

| Scaling Factor (k) | MaTTS w/o Memory | MaTTS w/o Aggregation | MaTTS (ReasoningBank) |
| --- | --- | --- | --- |
| 1 (no scaling) | 39.0% | 39.0% | 49.7% |
| 2 | 40.1% | 50.8% | 51.3% |
| 3 | 38.5% | 52.4% | 52.9% |
| 4 | 37.4% | 51.3% | 54.0% |
| 5 | 39.4% | 52.4% | **55.1%** |

Increasing k generally improves success rate, confirming the benefit of allocating more inference-time computation. With MaTTS, parallel scaling grows from 49.7% (k=1) to 55.1% (k=5). For the baseline of MaTTS w/o memory, the gains are smaller and less consistent (fluctuating between 37.4% and 40.1%).[&#91;1&#93;](#cite_note-reasoningbank-1)

MaTTS is consistently better than vanilla test-time scaling (MaTTS w/o aggregation). With ReasoningBank, MaTTS consistently surpasses vanilla TTS, showing that memory-aware coordination and aggregation is important. Specifically, at k=5, MaTTS achieves 55.1% in parallel scaling compared with 52.4% for vanilla TTS.[&#91;1&#93;](#cite_note-reasoningbank-1)

Sequential scaling shows short-term advantage at small k, but parallel dominates at larger scales for ReasoningBank. With stronger memory mechanisms such as ReasoningBank, sequential refinement brings higher gains at small k (51.9% at k=2), but its benefit quickly saturates. In contrast, parallel scaling continues to provide diverse rollouts that allow the model to critique and improve upon its own generations, leading it to surpass sequential at larger k (55.1% vs 54.5% at k=5).[&#91;1&#93;](#cite_note-reasoningbank-1)

### Synergy Between Memory and Scaling

The experimental results reveal a bidirectional synergy between memory quality and test-time scaling effectiveness:

**Better memory enables stronger test-time scaling performance.** Focusing on Best-of-N results which directly measure an agent's ability to surface the best outcome among multiple rollouts, the benefit of scaling depends critically on the underlying memory. Without memory, scaling yields slight improvement (Best-of-3 rises from 39.0% to 40.6%). Weaker memory mechanisms provide moderate gains (Synapse: 42.8%, AWM: 45.5%). In contrast, MaTTS with ReasoningBank delivers the strongest benefit (52.4%), showing that high-quality memory directs scaling toward more promising rollouts.[&#91;1&#93;](#cite_note-reasoningbank-1)

**Scaling yields better memory curation.** To evaluate how scaling feeds back into memory, Pass@1 metrics (measuring average quality of trajectories after memory curation) reveal that scaling actually reduces performance for weaker memories (Synapse drops from 40.6% to 40.1%, AWM from 44.4% to 41.2%), suggesting that without strong guidance, extra rollouts introduce noise. In contrast, ReasoningBank is the only method that benefits: Pass@1 rises from 49.7% to 50.8%, showing that high-quality memory can harness the diversity of scaling to extract constructive contrastive signals.[&#91;1&#93;](#cite_note-reasoningbank-1)

This asymmetry highlights that scaling alone is insufficient; only when paired with good memory mechanism does it contribute to curation of more effective memory, thereby closing the virtuous cycle and establishing memory-driven experience scaling as a new scaling dimension.

### Emergent Behaviors

The strategies in ReasoningBank are not flat or monolithic, but instead evolve over time, exhibiting emergent behaviors that resemble the learning dynamics of reinforcement learning. A memory item in ReasoningBank gradually evolves during the test-time learning process, progressing through distinct stages:[&#91;1&#93;](#cite_note-reasoningbank-1)

1. **Execution-oriented/procedural strategies**: The agent follows straightforward action rules (for example finding navigation links, clicking specific elements)

2. **Adaptive self-reflections**: Re-verifying identifiers to reduce simple mistakes, checking element correctness before actions

3. **Adaptive checks**: Systematically leveraging available search or filter functions to ensure completeness before reporting results

4. **Compositional strategies**: Cross-referencing task requirements with current views and reassessing available options, handling misaligned data through multiple reasoning paths

This hierarchical evolution highlights how ReasoningBank enables agents to refine strategies from low-level actions to high-level reasoning during test-time learning without any parameter updates. The agent develops increasingly complex and effective reasoning strategies through the accumulation and synthesis of experiences in its memory bank.[&#91;1&#93;](#cite_note-reasoningbank-1)

## Related Work

### Memory Frameworks for Agents

Memory has emerged as an essential module in modern agent systems to enhance their performance by utilizing past information. Existing memory systems organize and store information in various forms, including plain text, latent knowledge embeddings, and structured graphs. Beyond memory content, those methods usually involve retrieval mechanisms (for example semantic search) with memory management strategies (for example updating).[&#91;1&#93;](#cite_note-reasoningbank-1)

Prior work explored various memory mechanisms for [LLM agents](/index.php?title=LLM_agents&action=edit&redlink=1). Most efforts primarily emphasize personalization and long-context management. Trajectory-based approaches like [Synapse](/index.php?title=Synapse&action=edit&redlink=1)[&#91;4&#93;](#cite_note-synapse-4) store complete interaction histories with state abstraction, while workflow-based methods like [AWM](/index.php?title=AWM&action=edit&redlink=1)[&#91;5&#93;](#cite_note-awm-5) extract reusable task sub-routines and procedural workflows from successful trajectories only. Other frameworks employ latent embeddings, structured knowledge graphs, or reinforcement learning for memory management.[&#91;1&#93;](#cite_note-reasoningbank-1)

ReasoningBank differentiates by storing high-level strategies and reasoning hints rather than raw trajectories or procedural workflows. By abstracting experiences into reusable reasoning units, ReasoningBank enables agents to generalize not only from successful cases but also by learning from failures, thereby providing richer guidance for test-time learning. Different from previous works that emphasize reusing successful trajectories or procedural workflows, ReasoningBank stores strategy-level reasoning that captures transferable patterns and uniquely learns from both successes and failures. The framework represents the first exploration of memory-aware [test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1) for agents.[&#91;1&#93;](#cite_note-reasoningbank-1)

### Test-Time Scaling for Language Models

[Test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1) has demonstrated strong effectiveness and has become a widely adopted practice in end-to-end problem-solving such as coding and math reasoning, where methods including best-of-N, beam search, and leveraging verifiers are commonly employed. Recent work demonstrated that allocating additional compute at inference time can rival scaling model parameters for reasoning tasks.[&#91;1&#93;](#cite_note-reasoningbank-1)

However, its application to multi-turn interactive scenarios, particularly agentic tasks, remains underexplored. Existing works mainly adapt lessons learned from reasoning tasks and scale different dimensions of agentic systems, including the search space for each action, the number of agents in multi-agent systems, and the number of interactions with the environment. None of these efforts considers the role of agent memory in scaling, where an agent can learn from past experiences to guide future decisions.[&#91;1&#93;](#cite_note-reasoningbank-1)

MaTTS contributes the first integration of memory with [test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1) for agents. As demonstrated in empirical results, memory offers benefits beyond mere computational scaling, where memory and scaling synergistically work towards better performance, establishing memory-driven experience scaling as a new dimension beyond parameter scaling and data scaling.

## Impact and Reception

Since its release on September 29, 2025, ReasoningBank has generated significant attention across technical media and the research community. The framework has been highlighted for establishing memory-driven experience scaling as a new dimension for agent improvement, enabling emergent behaviors to arise naturally.[&#91;2&#93;](#cite_note-venturebeat-2)

MarkTechPost published detailed technical analysis highlighting the framework's strategy-level memory approach and its ability to learn from both successes and failures, emphasizing how it makes LLM agents self-evolve at test time.[&#91;11&#93;](#cite_note-marktech-11) 

VentureBeat featured coverage discussing how the framework builds AI agents that can handle the real world's continuous tasks and unpredictability, with co-author Jun Yan discussing practical enterprise applications and the importance of learning from failures.[&#91;2&#93;](#cite_note-venturebeat-2)

Lead author Siru Ouyang announced the work on social media, emphasizing how "reasoning-based memory drives and scales for self-evolving agents," noting that "ReasoningBank stores insights from both successful and failure trajectories; MaTTS builds on this powerful experience learner."[&#91;12&#93;](#cite_note-twitter-12) The paper rapidly gained traction on academic platforms including arXiv, HuggingFace Papers, and Semantic Scholar.

Industry discussions on platforms emphasize ReasoningBank's role in advancing self-evolving agent systems and its practical implications for building more adaptive AI agents in real-world scenarios. The framework's demonstration of emergent reasoning capabilities and its ability to transform both successes and failures into actionable memory has been particularly noted as a significant advance in agent architectures.[&#91;2&#93;](#cite_note-venturebeat-2)[&#91;11&#93;](#cite_note-marktech-11)

## Limitations and Future Directions

### Current Limitations

While ReasoningBank demonstrates strong empirical performance, several limitations have been identified:[&#91;1&#93;](#cite_note-reasoningbank-1)

- **Focus on memory content**: The study emphasizes memory content (integrating failure trajectories, constructing distilled reasoning cues) rather than comparing with other memory architectures such as episodic or hierarchical memory

- **Simplicity in retrieval and consolidation**: Simple embedding-based retrieval and straightforward consolidation were intentionally adopted to isolate the effect of content quality

- **Dependence on LLM-as-a-judge**: Success and failure signals are determined by an LLM-based evaluator, which may introduce noise when tasks are ambiguous

- **Static nature during deployment**: Once deployed, the memory bank grows through addition but lacks sophisticated consolidation mechanisms

### Future Directions

Several promising directions for future research have been identified:[&#91;1&#93;](#cite_note-reasoningbank-1)

**Compositional Memory**: The current framework distills each experience into multiple memory items retrieved and reused independently. Future work could explore composition-aware retrieval and consolidation, enabling agents to combine complementary items or form reusable macros, yielding richer strategies and stronger generalization in long-horizon tasks.

**Advanced Memory Architectures**: The current system design is intentionally minimal; a natural next step is building a layered, product-level memory stack that integrates mature paradigms—episodic traces for per-task context, short-term "working" memory for within-session state, and long-term consolidated knowledge with decay/refresh policies. Additionally, retrieval could move beyond embedding-based similarities to reasoning-intensive controllers that decompose queries, plan multi-hop lookups across tiers, and condition selection on uncertainty, recency, and cost.

**Enhanced Verifiers**: Future work could incorporate stronger verifiers, human-in-the-loop feedback, or ensemble judgment to enhance the reliability of memory induction beyond the current LLM-as-a-judge approach.

## See Also

- [Large language model](/wiki/large_language_model)

- [AI agent](/wiki/ai_agent)

- [ReAct](/index.php?title=ReAct&action=edit&redlink=1)

- [Test-time scaling](/index.php?title=Test-time_scaling&action=edit&redlink=1)

- [Agent Workflow Memory](/index.php?title=Agent_Workflow_Memory&action=edit&redlink=1)

- [Synapse (AI framework)](/index.php?title=Synapse_(AI_framework)&action=edit&redlink=1)

- [WebArena](/index.php?title=WebArena&action=edit&redlink=1)

- [Mind2Web](/index.php?title=Mind2Web&action=edit&redlink=1)

- [SWE-Bench](/index.php?title=SWE-Bench&action=edit&redlink=1)

- [Chain-of-thought prompting](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1)

- [Memory systems for AI agents](/index.php?title=Memory_systems_for_AI_agents&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-reasoningbank_1-0) [1.01](#cite_ref-reasoningbank_1-1) [1.02](#cite_ref-reasoningbank_1-2) [1.03](#cite_ref-reasoningbank_1-3) [1.04](#cite_ref-reasoningbank_1-4) [1.05](#cite_ref-reasoningbank_1-5) [1.06](#cite_ref-reasoningbank_1-6) [1.07](#cite_ref-reasoningbank_1-7) [1.08](#cite_ref-reasoningbank_1-8) [1.09](#cite_ref-reasoningbank_1-9) [1.10](#cite_ref-reasoningbank_1-10) [1.11](#cite_ref-reasoningbank_1-11) [1.12](#cite_ref-reasoningbank_1-12) [1.13](#cite_ref-reasoningbank_1-13) [1.14](#cite_ref-reasoningbank_1-14) [1.15](#cite_ref-reasoningbank_1-15) [1.16](#cite_ref-reasoningbank_1-16) [1.17](#cite_ref-reasoningbank_1-17) [1.18](#cite_ref-reasoningbank_1-18) [1.19](#cite_ref-reasoningbank_1-19) [1.20](#cite_ref-reasoningbank_1-20) [1.21](#cite_ref-reasoningbank_1-21) [1.22](#cite_ref-reasoningbank_1-22) [1.23](#cite_ref-reasoningbank_1-23) [1.24](#cite_ref-reasoningbank_1-24) [1.25](#cite_ref-reasoningbank_1-25) [1.26](#cite_ref-reasoningbank_1-26) [1.27](#cite_ref-reasoningbank_1-27) [1.28](#cite_ref-reasoningbank_1-28) [1.29](#cite_ref-reasoningbank_1-29) [1.30](#cite_ref-reasoningbank_1-30) [1.31](#cite_ref-reasoningbank_1-31) [1.32](#cite_ref-reasoningbank_1-32) [1.33](#cite_ref-reasoningbank_1-33) [1.34](#cite_ref-reasoningbank_1-34) [1.35](#cite_ref-reasoningbank_1-35) [1.36](#cite_ref-reasoningbank_1-36) [1.37](#cite_ref-reasoningbank_1-37) [1.38](#cite_ref-reasoningbank_1-38) [1.39](#cite_ref-reasoningbank_1-39) [1.40](#cite_ref-reasoningbank_1-40) [1.41](#cite_ref-reasoningbank_1-41) [1.42](#cite_ref-reasoningbank_1-42) [1.43](#cite_ref-reasoningbank_1-43) [1.44](#cite_ref-reasoningbank_1-44) [1.45](#cite_ref-reasoningbank_1-45) [1.46](#cite_ref-reasoningbank_1-46) [1.47](#cite_ref-reasoningbank_1-47) Ouyang, Siru, Jun Yan, I-Hung Hsu, Yanfei Chen, Ke Jiang, Zifeng Wang, Rujun Han, Long T. Le, Samira Daruki, Xiangru Tang, Vishy Tirumalashetty, George Lee, Mahsan Rofouei, Hangfei Lin, Jiawei Han, Chen-Yu Lee, and Tomas Pfister. "ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory." arXiv preprint arXiv:2509.25140 (2025). [https://arxiv.org/abs/2509.25140](https://arxiv.org/abs/2509.25140)

2. ↑ [2.0](#cite_ref-venturebeat_2-0) [2.1](#cite_ref-venturebeat_2-1) [2.2](#cite_ref-venturebeat_2-2) [2.3](#cite_ref-venturebeat_2-3) VentureBeat. "New memory framework builds AI agents that can handle the real world's unpredictability." October 2025. [https://venturebeat.com/ai/new-memory-framework-builds-ai-agents-that-can-handle-the-real-worlds](https://venturebeat.com/ai/new-memory-framework-builds-ai-agents-that-can-handle-the-real-worlds)

3. [↑](#cite_ref-react_3-0) Yao, Shunyu, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao. "ReAct: Synergizing reasoning and acting in language models." International Conference on Learning Representations (2023). [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)

4. ↑ [4.0](#cite_ref-synapse_4-0) [4.1](#cite_ref-synapse_4-1) Zheng, Longtao, Rundong Wang, Xinrun Wang, and Bo An. "Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control." International Conference on Learning Representations (2024). [https://arxiv.org/abs/2306.07863](https://arxiv.org/abs/2306.07863)

5. ↑ [5.0](#cite_ref-awm_5-0) [5.1](#cite_ref-awm_5-1) Wang, Zora Zhiruo, Jiayuan Mao, Daniel Fried, and Graham Neubig. "Agent Workflow Memory." International Conference on Machine Learning (2025). [https://arxiv.org/abs/2409.07429](https://arxiv.org/abs/2409.07429)

6. [↑](#cite_ref-webarena_6-0) Zhou, Shuyan, Frank F. Xu, Hao Zhu, Xuhui Zhou, Robert Lo, Abishek Sridhar, Xianyi Cheng, Yonatan Bisk, Daniel Fried, Uri Alon, and Graham Neubig. "WebArena: A Realistic Web Environment for Building Autonomous Agents." arXiv preprint arXiv:2307.13854 (2023). [https://arxiv.org/abs/2307.13854](https://arxiv.org/abs/2307.13854)

7. [↑](#cite_ref-browsergym_7-0) Le Sellier De Chezelles, Thibault, Maxime Gasse, Alexandre Drouin, Massimo Caccia, Léo Boisvert, Megh Thakkar, Tom Marty, Rim Assouel, Sahar Omidi Shayegan, Lawrence Keunho Jang, Xing Han Lù, Ori Yoran, Dehan Kong, Frank F. Xu, Siva Reddy, Quentin Cappart, Graham Neubig, Ruslan Salakhutdinov, Nicolas Chapados, and Alexandre Lacoste. "The BrowserGym Ecosystem for Web Agent Research." Transactions on Machine Learning Research (2025). [https://arxiv.org/abs/2412.05467](https://arxiv.org/abs/2412.05467)

8. [↑](#cite_ref-mind2web_8-0) Deng, Xiang, Yu Gu, Boyuan Zheng, Shijie Chen, Samuel Stevens, Boshi Wang, Huan Sun, and Yu Su. "Mind2Web: Towards a Generalist Agent for the Web." Advances in Neural Information Processing Systems 36 (2023). [https://arxiv.org/abs/2306.06070](https://arxiv.org/abs/2306.06070)

9. [↑](#cite_ref-swebench_9-0) Jimenez, Carlos E., John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, and Karthik R. Narasimhan. "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" International Conference on Learning Representations (2024). [https://arxiv.org/abs/2310.06770](https://arxiv.org/abs/2310.06770)

10. [↑](#cite_ref-swebench-verified_10-0) Chowdhury, Neil, James Aung, Chan Jun Shern, Oliver Jaffe, Dane Sherburn, Giulio Starace, Evan Mays, Rachel Dias, Marwan Aljubeh, Mia Glaese, Carlos E. Jimenez, John Yang, Leyton Ho, Tejal Patwardhan, Kevin Liu, and Aleksander Madry. "Introducing SWE-bench Verified." OpenAI (2024). [https://openai.com/index/introducing-swe-bench-verified/](https://openai.com/index/introducing-swe-bench-verified/)

11. ↑ [11.0](#cite_ref-marktech_11-0) [11.1](#cite_ref-marktech_11-1) MarkTechPost. "Google AI Proposes ReasoningBank: A Strategy-Level Agent Memory Framework That Makes LLM Agents Self-Evolve at Test Time." October 1, 2025. [https://www.marktechpost.com/2025/10/01/google-ai-proposes-reasoningbank-a-strategy-level-i-agent-memory-framework-that-makes-llm-agents-self-evolve-at-test-time/](https://www.marktechpost.com/2025/10/01/google-ai-proposes-reasoningbank-a-strategy-level-i-agent-memory-framework-that-makes-llm-agents-self-evolve-at-test-time/)

12. [↑](#cite_ref-twitter_12-0) Ouyang, Siru. "Really excited about how reasoning-based memory drives and scales for self-evolving agents: ReasoningBank stores insights from both successful and failure trajectories; MaTTS builds on this powerful experience learner." Twitter/X, September 29, 2025. [https://x.com/Siru_Ouyang/status/1972903837078843826](https://x.com/Siru_Ouyang/status/1972903837078843826)