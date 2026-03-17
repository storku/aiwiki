---
title: "Tau-bench"
slug: "tau-bench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Agent_Benchmarks"
  - "Multi-turn_Interaction_Benchmarks"
  - "2024_Benchmarks"
---**

| τ-bench |
| --- |
| Overview |
| Full name | Tau-bench: Tool-Agent-User Interaction Benchmark |
| Abbreviation | τ-bench |
| Description | A benchmark for evaluating AI agents' ability to complete complex tasks through realistic tool-agent-user interactions in real-world domains |
| Release date | 2024-06-17 |
| Latest version | 1.0 |
| Benchmark updated | 2024-06-17 |
| Authors | [Shunyu Yao](/index.php?title=Shunyu_Yao&action=edit&redlink=1), [Noah Shinn](/index.php?title=Noah_Shinn&action=edit&redlink=1), [Pedram Razavi](/index.php?title=Pedram_Razavi&action=edit&redlink=1), [Karthik Narasimhan](/index.php?title=Karthik_Narasimhan&action=edit&redlink=1) |
| Organization | [Sierra Research](/index.php?title=Sierra_Research&action=edit&redlink=1), [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Agent Evaluation](/index.php?title=Agent_Evaluation&action=edit&redlink=1), [Multi-turn Interaction](/index.php?title=Multi-turn_Interaction&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [API Calls](/index.php?title=API_Calls&action=edit&redlink=1) |
| Task format | [Conversational task completion](/index.php?title=Conversational_task_completion&action=edit&redlink=1) |
| Number of tasks | Not publicly specified |
| Total examples | Not publicly specified |
| Evaluation metric | [Pass@k](/index.php?title=Pass@k&action=edit&redlink=1), [Database State Comparison](/index.php?title=Database_State_Comparison&action=edit&redlink=1) |
| Domains | [Airline](/index.php?title=Airline&action=edit&redlink=1), [Retail](/index.php?title=Retail&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not reported |
| Baseline | <50% (GPT-4o)
Property "Baseline score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA score | 81.2% (Retail Pass@1 with think tool) |
| SOTA model | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://sierra.ai/tau-bench) |
| Paper | [Paper](https://arxiv.org/abs/2406.12045) |
| GitHub | [Repository](https://github.com/sierra-research/tau-bench) |
| Dataset | [Download](https://github.com/sierra-research/tau-bench) |
| License | Apache 2.0 |
| Successor | [τ²-bench](/index.php?title=%CE%A4%C2%B2-bench&action=edit&redlink=1) |

τ-bench** (Tau-bench) is an [AI benchmark](/wiki/ai_benchmark) designed to evaluate [language agents](/index.php?title=Language_agents&action=edit&redlink=1)' ability to complete complex tasks through realistic interactions with simulated users and domain-specific tools. Released on June 17, 2024, by [Sierra Research](/index.php?title=Sierra_Research&action=edit&redlink=1) and [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), τ-bench addresses critical gaps in existing benchmarks by testing agents on their ability to follow domain-specific rules, maintain context over long conversations, and effectively coordinate with users to achieve goals.

## Overview

τ-bench represents a paradigm shift in AI agent evaluation, moving beyond simple task completion to assess agents' performance in dynamic, multi-turn conversations that mirror real-world applications. The benchmark emulates scenarios where an AI agent must interact with both users (simulated by [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)) and domain-specific [API](/index.php?title=API&action=edit&redlink=1) tools while adhering to complex policy guidelines.

### Key Innovation

Unlike traditional benchmarks that focus on single-turn interactions or isolated capabilities, τ-bench introduces:

- **Stateful Evaluation**: Compares database states after task completion

- **User Simulation**: LLM-simulated users provide realistic conversational dynamics

- **Policy Adherence**: Tests agents' ability to follow domain-specific rules

- **Consistency Measurement**: Introduces Pass@k metric for reliability assessment

The benchmark revealed that even state-of-the-art function calling agents (like [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1)) succeed on less than 50% of the tasks and are quite inconsistent (Pass@8 <25% in retail).

## Technical Specifications

### Architecture

τ-bench employs a three-component architecture:

| Component | Function | Implementation |
| --- | --- | --- |
| User Simulator | Simulates realistic user behavior and requests | LLM-based (GPT-4, Claude, etc.) |
| Agent System | Processes requests and executes tasks | Various architectures (Tool-calling, ReAct, Act) |
| Environment | Provides APIs and maintains state | Domain-specific databases and tools |

### Domains

The benchmark covers two primary domains:

#### Airline Domain

- **Scenario**: Customer service for airline bookings

- **Tools**: Flight search, booking, cancellation, modification APIs

- **Policies**: Fare rules, refund policies, upgrade procedures

- **Challenges**: Multi-leg trips, schedule changes, policy compliance

- **Difficulty**: More challenging than retail domain

#### Retail Domain

- **Scenario**: E-commerce customer support

- **Tools**: Order management, inventory, returns, payment APIs

- **Policies**: Return windows, warranty terms, pricing rules

- **Challenges**: Product availability, order modifications, refund processing

- **Difficulty**: Noticeably easier to navigate compared to airline

### Evaluation Methodology

#### Pass@k Metric

τ-bench introduces the Pass@k metric to measure agent reliability:

| Metric | Description | Significance |
| --- | --- | --- |
| Pass@1 | Success rate on first attempt | Basic capability |
| Pass@4 | Success rate across 4 attempts | Consistency measure |
| Pass@8 | Success rate across 8 attempts | High reliability threshold |
| Pass@k | Success rate across k attempts | General reliability metric |

The benchmark doesn't just test whether an agent can complete a task once; it measures whether it can do so consistently multiple times.

#### Database State Comparison

Evaluation uses objective database state comparison:
1. Initial database state recorded
2. Agent completes conversational task
3. Final database state captured
4. Comparison with expected goal state
5. Success determined by state match

This efficient and faithful evaluation process provides objective measurement of agent decision-making.

### Task Complexity

Tasks in τ-bench vary in complexity:

| Complexity Level | Characteristics | Example |
| --- | --- | --- |
| Simple | Single API call, straightforward request | Check flight status |
| Moderate | Multiple API calls, some reasoning required | Book round-trip with preferences |
| Complex | Many API calls, policy checking, user clarification | Multi-city trip with changes |
| Expert | Edge cases, exception handling, complex policies | Group booking with special needs |

## Performance Analysis

### Model Performance Comparison

Current performance of leading models on τ-bench:

| Model | Version/Mode | Airline Pass@1 | Retail Pass@1 | Notes |
| --- | --- | --- | --- | --- |
| [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | With think tool | 58.4% | 81.2% | Top performer with reasoning |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | Upgraded | 46.0% | 69.2% | Improved from 36.0%/62.6% |
| [GPT-OSS-120B](/index.php?title=GPT-OSS-120B&action=edit&redlink=1) | Standard | Not reported | 67.8% | Open-weight model |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | Tool-calling | <50% | <50% | Initial SOTA baseline |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ReAct | ~35% | ~40% | Lower with ReAct |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | Original | 36.0% | 62.6% | Before upgrade |

Note: Pass@4 and Pass@8 scores are significantly lower across all models, with Pass@8 <25% in retail for most models, indicating consistency challenges.

### Key Findings

#### Performance Characteristics

1. **Low Success Rates**: Even SOTA models achieve <50% success on initial release
2. **Poor Consistency**: Pass@8 rates below 25% indicate high variability
3. **Domain Sensitivity**: Significant performance gap between airline (harder) and retail (easier)
4. **Architecture Impact**: Tool-calling outperforms ReAct consistently

#### Failure Analysis

Common failure modes identified:
1. **Policy Violations**: Agents bypass or misinterpret domain rules
2. **Context Loss**: Information forgotten in long conversations
3. **User Misunderstanding**: Incorrect interpretation of user intent
4. **API Misuse**: Incorrect tool selection or parameter usage
5. **State Confusion**: Losing track of transaction state

## Implementation Details

### Supported Models

τ-bench supports evaluation of models from multiple providers:

| Provider | Models Supported | Integration Method |
| --- | --- | --- |
| [OpenAI](/wiki/openai) | GPT-4, GPT-4o, GPT-3.5 | API |
| [Anthropic](/wiki/anthropic) | Claude 3, Claude 3.5, Claude 3.7 | API |
| [Google](/index.php?title=Google&action=edit&redlink=1) | Gemini Pro, Gemini Ultra | API |
| [Mistral AI](/wiki/mistral_ai) | Mistral Large, Mistral Medium | API |
| [AnyScale](/index.php?title=AnyScale&action=edit&redlink=1) | Open-source models | API |

### User Simulation Strategies

| Strategy | Description | Use Case |
| --- | --- | --- |
| LLM (default) | Direct LLM responses | Standard evaluation |
| ReAct | Reasoning + Acting | Complex reasoning tasks |
| Verify | Verification after each step | High accuracy requirements |
| Reflection | Self-correction mechanism | Improved consistency |

### Technical Features

- **Concurrent Processing**: Parallel API request handling

- **Error Recovery**: Automatic error identification and retry

- **Historical Tracking**: Database of all interaction trajectories

- **Configurable Tasks**: Selective task execution

- **Extensible Framework**: Easy addition of new domains

## Impact and Adoption

### Industry Adoption

τ-bench has gained significant traction:

- **[Anthropic](/wiki/anthropic)**: Embraced as key benchmark, showcasing Claude improvements

- **[OpenAI](/wiki/openai)**: Benchmark for GPT-OSS model evaluation

- **[Sierra AI](/index.php?title=Sierra_AI&action=edit&redlink=1)**: Core evaluation metric for agent development

- **AI Startups**: Adopted by companies like Scaled Cognition

- **Research Labs**: Standard benchmark for agent papers

### Academic Influence

Within one year of release, τ-bench has:

- Been cited in numerous agent evaluation papers

- Inspired domain-specific variants (for example [MedAgentBench](/index.php?title=MedAgentBench&action=edit&redlink=1))

- Become standard for multi-turn agent evaluation

- Influenced new evaluation methodologies

### Derivative Works

#### τ²-bench

An extension adding:

- **Telecom domain**: Customer service scenarios

- **Dual-control environments**: Shared task ownership

- **Coordination metrics**: Measuring agent-user collaboration

- **Enhanced complexity**: More sophisticated interactions

#### MedAgentBench

Medical domain adaptation featuring:

- Electronic Medical Record (EMR) environment

- FHIR API integration

- Physician-written scenarios

- Clinical task evaluation

The authors observed that while benchmarks like τ-bench effectively test general agent capabilities, there was no standardized medical agent benchmark available, prompting creation of a domain-specific variant.

## Limitations and Criticisms

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Limited Domains | Only 2-3 domains covered | Generalization questions |
| Simulated Users | LLM simulation may not capture human behavior | Ecological validity |
| English Only | No multilingual support | Limited global applicability |
| Static Tasks | Fixed task set | Potential overfitting |
| No Visual Elements | Text-only interactions | Missing multimodal aspects |

### Methodological Concerns

- **Evaluation Brittleness**: Binary success/failure may miss partial success

- **User Model Bias**: LLM users may behave predictably

- **Policy Simplification**: Real-world policies more complex

- **Limited Error Types**: May not cover all failure modes

## Future Directions

### Planned Improvements

1. **Domain Expansion**: Healthcare, finance, education domains
2. **Multimodal Support**: Images, documents, voice interactions
3. **Human Evaluation**: Real user interaction studies
4. **Dynamic Task Generation**: Procedural task creation
5. **Fine-grained Metrics**: Partial credit scoring

### Research Opportunities

- **Agent Architecture**: Developing τ-bench-optimized architectures

- **Training Methods**: Using τ-bench for agent training

- **User Modeling**: Improving user simulation realism

- **Policy Learning**: Automatic policy extraction and compliance

## Related Benchmarks

- **[WebShop](/index.php?title=WebShop&action=edit&redlink=1)**: E-commerce navigation benchmark

- **[ALFWorld](/index.php?title=ALFWorld&action=edit&redlink=1)**: Embodied agent tasks

- **[InterCode](/index.php?title=InterCode&action=edit&redlink=1)**: Interactive coding benchmark

- **[AgentBench](/index.php?title=AgentBench&action=edit&redlink=1)**: Comprehensive agent evaluation

- **[SWE-bench](/wiki/swe-bench)**: Software engineering tasks

- **[GAIA](/index.php?title=GAIA&action=edit&redlink=1)**: General AI assistant benchmark

- **[τ²-bench](/index.php?title=%CE%A4%C2%B2-bench&action=edit&redlink=1)**: Extended version with coordination

## See Also

- [AI Agents](/index.php?title=AI_Agents&action=edit&redlink=1)

- [Tool Use in LLMs](/index.php?title=Tool_Use_in_LLMs&action=edit&redlink=1)

- [Multi-turn Dialogue Systems](/index.php?title=Multi-turn_Dialogue_Systems&action=edit&redlink=1)

- [Conversational AI](/index.php?title=Conversational_AI&action=edit&redlink=1)

- [Agent Evaluation](/index.php?title=Agent_Evaluation&action=edit&redlink=1)

- [Human-AI Interaction](/index.php?title=Human-AI_Interaction&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "tau_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "sierra_blog" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "tau2_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "anthropic_claude35" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "openai_gptoss" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "claude37_performance" defined in `<references>` has group attribute "" which does not appear in prior text.