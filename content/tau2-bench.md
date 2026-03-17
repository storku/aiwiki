---
title: "Tau2-bench"
slug: "tau2-bench"
categories:
  - "AI_Benchmarks"
  - "Agent_Evaluation"
  - "Multi-agent_Systems"
  - "2025_Benchmarks"
  - "Sierra_Research"
  - "Conversational_AI_Benchmarks"
  - "Tool_Use_Benchmarks"
---**

| τ²-bench |
| --- |
| Overview |
| Full name | Tau-squared Bench: Evaluating Conversational Agents in a Dual-Control Environment |
| Abbreviation | τ²-bench, Tau2-bench |
| Description | A simulation framework for evaluating conversational agents in dual-control environments where both agents and users can modify shared world states |
| Release date | 2025-06 |
| Latest version | 2.0 |
| Benchmark updated | 2025-06 |
| Authors | [Victor Barres](/index.php?title=Victor_Barres&action=edit&redlink=1), [Honghua Dong](/index.php?title=Honghua_Dong&action=edit&redlink=1), [Soham Ray](/index.php?title=Soham_Ray&action=edit&redlink=1), [Xujie Si](/index.php?title=Xujie_Si&action=edit&redlink=1), [Karthik Narasimhan](/index.php?title=Karthik_Narasimhan&action=edit&redlink=1) |
| Organization | [Sierra Research](/index.php?title=Sierra_Research&action=edit&redlink=1), [Sierra.ai](/index.php?title=Sierra.ai&action=edit&redlink=1) |
| Technical Details |
| Type | [Agent Evaluation](/index.php?title=Agent_Evaluation&action=edit&redlink=1), [Conversational AI](/index.php?title=Conversational_AI&action=edit&redlink=1), [Multi-agent Interaction](/index.php?title=Multi-agent_Interaction&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Tool Use](/index.php?title=Tool_Use&action=edit&redlink=1) |
| Task format | [Multi-turn dialogue with dual tool control](/index.php?title=Multi-turn_dialogue_with_dual_tool_control&action=edit&redlink=1) |
| Number of tasks | Compositionally generated |
| Total examples | Variable (programmatically generated) |
| Evaluation metric | [Pass^k](/index.php?title=Pass%5Ek&action=edit&redlink=1), [Pass^1](/index.php?title=Pass%5E1&action=edit&redlink=1), [Database state comparison](/index.php?title=Database_state_comparison&action=edit&redlink=1) |
| Domains | [Airline reservations](/index.php?title=Airline_reservations&action=edit&redlink=1), [Retail customer service](/index.php?title=Retail_customer_service&action=edit&redlink=1), [Telecom support](/index.php?title=Telecom_support&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not specified |
| Baseline | <50% average (GPT-4o)
Property "Baseline score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA score | 81.2% (retail), 58.4% (airline) |
| SOTA model | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://sierra.ai/resources/research/tau-squared-bench) |
| Paper | [Paper](https://arxiv.org/abs/2506.07982) |
| GitHub | [Repository](https://github.com/sierra-research/tau2-bench) |
| Dataset | [Download](https://github.com/sierra-research/tau2-bench) |
| License | MIT |
| Predecessor | [τ-bench (2024)](/index.php?title=%CE%A4-bench_(2024)&action=edit&redlink=1) |

τ²-bench** (**Tau-squared Bench**), also written as **Tau2-bench**, is a [benchmark](/wiki/benchmark) framework for evaluating [conversational agents](/index.php?title=Conversational_agents&action=edit&redlink=1) in dual-control environments where both AI agents and users can actively modify shared world states through [tool use](/index.php?title=Tool_use&action=edit&redlink=1). Released in June 2025 by [Sierra Research](/index.php?title=Sierra_Research&action=edit&redlink=1)[&#91;1&#93;](#cite_note-tau2_paper-1), τ²-bench addresses a critical gap in existing agent evaluation benchmarks by simulating realistic scenarios like technical support where both parties must coordinate actions to achieve shared goals. The benchmark has become a crucial industry standard, with leading models like [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) achieving only 81.2% on retail tasks and 58.4% on airline tasks, revealing significant challenges in agent-user coordination.

## Overview

τ²-bench represents a paradigm shift in evaluating [artificial intelligence](/wiki/artificial_intelligence) agents by introducing dual-control environments that mirror real-world interactions. Unlike traditional benchmarks where only the AI agent has access to tools while users remain passive information providers, τ²-bench creates scenarios where both agents and users actively participate in modifying a shared environment. This approach is modeled as a [Decentralized Partially Observable Markov Decision Process](/index.php?title=Decentralized_Partially_Observable_Markov_Decision_Process&action=edit&redlink=1) (Dec-POMDP), where both parties have partial observability and must coordinate their actions to achieve common objectives[&#91;1&#93;](#cite_note-tau2_paper-1).

The benchmark builds upon its predecessor, τ-bench (released in 2024), by introducing more complex troubleshooting scenarios and expanding into new domains like telecommunications support. By focusing on reliability through its innovative pass^k metric, τ²-bench reveals that even state-of-the-art models show significant performance degradation on repeated attempts, with some models dropping from 61% success on first attempts to just 25% after eight attempts.

### Significance

τ²-bench has emerged as a critical evaluation tool for several reasons:

- **Dual-Control Innovation**: First benchmark to test agent-user coordination in shared environments

- **Reliability Focus**: Introduces pass^k metric revealing consistency issues invisible in single-attempt testing

- **Industry Adoption**: Used by [Anthropic](/wiki/anthropic), [OpenAI](/wiki/openai), and other AI labs for model assessment

- **Real-World Relevance**: Simulates actual customer service scenarios requiring coordination

- **Compositional Complexity**: Programmatic task generation ensures diverse, verifiable scenarios

## Framework Architecture

### Decentralized Partially Observable MDP

τ²-bench models interactions as a Dec-POMDP with the following components[&#91;1&#93;](#cite_note-tau2_paper-1):

| Component | Agent | User | Description |
| --- | --- | --- | --- |
| **State Space (S)** | Partial view | Partial view | Shared environment state |
| **Action Space (A)** | Tool calls, responses | Tool calls, information | Both can modify environment |
| **Observations (O)** | Tool outputs, user messages | Agent responses, environment changes | Limited visibility |
| **Transition Function** | Deterministic | Deterministic | State changes based on actions |
| **Reward Function** | Task completion | Task completion | Shared objective |

### Domain Coverage

The benchmark includes three primary domains with distinct characteristics:

| Domain | Scenario Type | Tools Available | Complexity Level |
| --- | --- | --- | --- |
| **Airline** | Reservation management, flight changes | Booking systems, customer database | High (policy constraints) |
| **Retail** | Order processing, returns, support | Inventory, order management | Medium (standard workflows) |
| **Telecom** | Technical troubleshooting | Diagnostic tools, service management | High (multi-step debugging) |
| **Mock** | Testing environment | Simplified tool set | Low (development/testing) |

## Task Generation and Structure

### Compositional Task Generator

τ²-bench employs a sophisticated task generation system[&#91;2&#93;](#cite_note-tau2_github-2):

| Component | Function | Example |
| --- | --- | --- |
| **Atomic Tasks** | Basic operations | "Change flight date", "Process refund" |
| **Task Composition** | Combine atomic tasks | "Change flight AND update payment" |
| **Constraint Layer** | Add domain policies | "Require manager approval for refunds >$500" |
| **Verification** | Ensure solvability | Check all required tools available |

### Task Complexity Levels

Tasks are categorized by complexity:

| Level | Description | Example | Success Rate (GPT-4o) |
| --- | --- | --- | --- |
| **Simple** | Single atomic operation | Cancel order | ~70% |
| **Compound** | Multiple coordinated operations | Change flight with refund processing | ~45% |
| **Constrained** | Operations with policy restrictions | Upgrade requiring loyalty status check | ~30% |
| **Troubleshooting** | Multi-step diagnostic procedures | Network connectivity resolution | ~25% |

## Evaluation Methodology

### Primary Metrics

τ²-bench introduces sophisticated evaluation metrics[&#91;1&#93;](#cite_note-tau2_paper-1):

| Metric | Definition | Purpose | Calculation |
| --- | --- | --- | --- |
| **pass^1** | Single attempt success rate | Basic performance | Success on first try |
| **pass^k** | Success with k attempts | Reliability measure | At least one success in k tries |
| **Consistency Score** | pass^k / pass^1 ratio | Stability indicator | Higher = more consistent |
| **Coordination Score** | Dual vs no-user mode delta | Coordination ability | Performance difference |

### Evaluation Modes

The benchmark supports multiple evaluation configurations:

| Mode | Description | Use Case | Performance Impact |
| --- | --- | --- | --- |
| **Standard** | Agent interacts with simulated user | Primary evaluation | Baseline |
| **No-User** | Agent given all tools/info upfront | Ablation study | +30-40% performance |
| **Oracle Plan** | Agent provided optimal action sequence | Upper bound testing | ~95% success |
| **Human-in-Loop** | Real human users | Validation | Variable |

### Database State Comparison

Final evaluation uses database state verification:

```python

1. Simplified evaluation logic

def evaluate_task(initial_state, final_state, goal_state):

   for key, expected_value in goal_state.items():
       if final_state[key] != expected_value:
           return False
   return True

```

## Performance Analysis

### Current Leaderboard (2025)

| Rank | Model | Retail pass^1 | Airline pass^1 | Telecom pass^1 | Average | Consistency (pass^8) |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | 81.2% | 58.4% | 52.1% | 63.9% | ~75% |
| 2 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 61.2% | 35.2% | 28.5% | 41.6% | ~25% |
| 3 | [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | 58.5% | 32.8% | 25.3% | 38.9% | ~20% |
| 4 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 55.3% | 30.1% | 22.7% | 36.0% | ~30% |
| 5 | [GPT-4](/wiki/gpt-4) | 48.7% | 28.5% | 20.1% | 32.4% | ~15% |

### Performance Insights

Analysis reveals critical patterns[&#91;3&#93;](#cite_note-tau2_blog-3):

| Finding | Implication | Impact on Development |
| --- | --- | --- |
| **Reliability Gap** | Models inconsistent across attempts | Need for robustness training |
| **Coordination Challenge** | 30-40% drop in dual-control | Improved multi-agent reasoning required |
| **Domain Variance** | Retail easier than airline/telecom | Domain-specific optimization needed |
| **Policy Adherence** | Frequent policy violations | Better constraint understanding required |

## Technical Implementation

### Installation and Setup

τ²-bench provides a unified CLI interface[&#91;2&#93;](#cite_note-tau2_github-2):

| Component | Command | Description |
| --- | --- | --- |
| **Installation** | `pip install tau2-bench` | Install framework |
| **Configuration** | `tau2 configure` | Set API keys and models |
| **Evaluation** | `tau2 evaluate --model gpt-4o --domain retail` | Run evaluation |
| **Analysis** | `tau2 analyze results/` | Generate performance reports |

### Architecture Components

| Component | Function | Implementation |
| --- | --- | --- |
| **Environment Simulator** | Manages shared state | Python state machine |
| **User Simulator** | Emulates user behavior | LLM-based with constraints |
| **Tool Registry** | Defines available actions | JSON API specifications |
| **Policy Engine** | Enforces domain rules | Rule-based system |
| **Evaluation Engine** | Scores performance | State comparison logic |

## Research Impact

### Academic Contributions

τ²-bench has influenced several research directions:

| Area | Contribution | Papers Influenced |
| --- | --- | --- |
| **Multi-agent Systems** | Dual-control paradigm | 15+ papers on coordination |
| **Reliability Testing** | pass^k metric adoption | 20+ benchmarks using consistency metrics |
| **Tool Use** | Shared tool access patterns | Research on collaborative tool use |
| **Domain Transfer** | Cross-domain evaluation | Studies on generalization |

### Industry Applications

The benchmark has driven practical improvements:

- **Customer Service Agents**: Enhanced coordination capabilities

- **Technical Support Systems**: Better troubleshooting workflows

- **Training Data**: Generation of dual-control training scenarios

- **Evaluation Standards**: Industry-wide adoption of reliability metrics

## Related Work

### Comparison with Other Benchmarks

| Benchmark | Focus | Key Difference from τ²-bench |
| --- | --- | --- |
| [WebArena](/index.php?title=WebArena&action=edit&redlink=1) | Web navigation | Single agent control only |
| [AgentBench](/index.php?title=AgentBench&action=edit&redlink=1) | General agent tasks | No dual-control scenarios |
| [ToolBench](/index.php?title=ToolBench&action=edit&redlink=1) | Tool use evaluation | Static tool sequences |
| [GAIA](/index.php?title=GAIA&action=edit&redlink=1) | General AI assistant | No shared state modification |
| **τ-bench** | Customer service (v1) | Predecessor, simpler scenarios |

### Inspired Benchmarks

τ²-bench has inspired domain-specific variants:

- **MedAgentBench**: Medical consultation with dual control

- **LegalAssist-Bench**: Legal advice scenarios

- **FinanceAdvisor-τ**: Financial planning interactions

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **English Only** | Single language support | Limited global applicability |
| **Domain Scope** | Three domains currently | May not cover all interaction types |
| **Simulated Users** | LLM-based user simulation | May not capture human complexity |
| **Binary Evaluation** | Pass/fail scoring | Misses partial success nuances |

### Future Directions

Planned extensions include:

1. **Multilingual Support**: Expanding to 10+ languages
2. **Visual Modality**: Adding GUI interaction capabilities
3. **Continuous Evaluation**: Real-time performance tracking
4. **Human Studies**: Extensive human-in-loop validation
5. **Adaptive Difficulty**: Dynamic task complexity adjustment

## Significance

τ²-bench represents a fundamental advancement in agent evaluation by introducing the dual-control paradigm that mirrors real-world human-AI interactions. By revealing that even state-of-the-art models achieve less than 65% average success and show dramatic reliability degradation on repeated attempts, the benchmark highlights critical gaps in current AI systems' ability to coordinate with users in shared environments.

The framework's emphasis on reliability through the pass^k metric and its simulation of realistic customer service scenarios has made it an essential tool for both academic research and industry development. As AI agents increasingly handle complex, interactive tasks requiring human coordination, τ²-bench provides the evaluation infrastructure necessary to ensure these systems can reliably and effectively collaborate with users in real-world applications.

## See Also

- [Agent Evaluation](/index.php?title=Agent_Evaluation&action=edit&redlink=1)

- [Multi-agent Systems](/index.php?title=Multi-agent_Systems&action=edit&redlink=1)

- [Tool Use in AI](/index.php?title=Tool_Use_in_AI&action=edit&redlink=1)

- [Conversational AI](/index.php?title=Conversational_AI&action=edit&redlink=1)

- [Customer Service Automation](/index.php?title=Customer_Service_Automation&action=edit&redlink=1)

- [Sierra Research](/index.php?title=Sierra_Research&action=edit&redlink=1)

- [Dec-POMDP](/index.php?title=Dec-POMDP&action=edit&redlink=1)

- [WebArena](/index.php?title=WebArena&action=edit&redlink=1)

- [AgentBench](/index.php?title=AgentBench&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-tau2_paper_1-0) [1.1](#cite_ref-tau2_paper_1-1) [1.2](#cite_ref-tau2_paper_1-2) [1.3](#cite_ref-tau2_paper_1-3) Barres, V., Dong, H., Ray, S., Si, X., & Narasimhan, K. (2025). "τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment". arXiv:2506.07982. Retrieved from [https://arxiv.org/abs/2506.07982](https://arxiv.org/abs/2506.07982)

2. ↑ [2.0](#cite_ref-tau2_github_2-0) [2.1](#cite_ref-tau2_github_2-1) Sierra Research. (2025). "τ²-bench: Agent Evaluation Framework". GitHub. Retrieved from [https://github.com/sierra-research/tau2-bench](https://github.com/sierra-research/tau2-bench)

3. [↑](#cite_ref-tau2_blog_3-0) Sierra Research. (2025). "Shaping Development and Evaluation of Agents with τ-bench". Sierra.ai Blog. Retrieved from [https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents](https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents)