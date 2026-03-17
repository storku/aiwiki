---
title: "Deep Research Bench"
slug: "deep_research_bench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Web_Research_Benchmarks"
  - "Information_Retrieval_Benchmarks"
  - "Multi-step_Task_Benchmarks"
  - "2025_Benchmarks"
  - "Research_Agent_Evaluation"
---**

| Deep Research Bench |
| --- |
| Overview |
| Full name | Deep Research Bench |
| Abbreviation | DRB (FutureSearch) |
| Description | A benchmark evaluating LLM agents' web research capabilities using frozen web snapshots for reproducible evaluation |
| Release date | 2025-05-06 |
| Latest version | 1.0 |
| Benchmark updated | 2025-05 |
| Authors | [Nikos I. Bosse](/index.php?title=Nikos_I._Bosse&action=edit&redlink=1), [Jon Evans](/index.php?title=Jon_Evans&action=edit&redlink=1), [Robert G. Gambee](/index.php?title=Robert_G._Gambee&action=edit&redlink=1), [Daniel Hnyk](/index.php?title=Daniel_Hnyk&action=edit&redlink=1), [Peter Mühlbacher](/index.php?title=Peter_M%C3%BChlbacher&action=edit&redlink=1), [Lawrence Phillips](/index.php?title=Lawrence_Phillips&action=edit&redlink=1), [Dan Schwarz](/index.php?title=Dan_Schwarz&action=edit&redlink=1), [Jack Wildman](/index.php?title=Jack_Wildman&action=edit&redlink=1) |
| Organization | [FutureSearch](/index.php?title=FutureSearch&action=edit&redlink=1) |
| Technical Details |
| Type | [Web Research](/index.php?title=Web_Research&action=edit&redlink=1), [Multi-step Tasks](/index.php?title=Multi-step_Tasks&action=edit&redlink=1), [Information Retrieval](/index.php?title=Information_Retrieval&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Web content](/index.php?title=Web_content&action=edit&redlink=1) |
| Task format | [Multi-step research questions](/index.php?title=Multi-step_research_questions&action=edit&redlink=1) |
| Number of tasks | 89 |
| Total examples | 89 task instances across 8 categories |
| Evaluation metric | [Precision](/wiki/precision), [Recall](/wiki/recall), [Binary scoring (task-dependent)](/index.php?title=Binary_scoring_(task-dependent)&action=edit&redlink=1) |
| Domains | [General web research](/index.php?title=General_web_research&action=edit&redlink=1), [Fact-checking](/index.php?title=Fact-checking&action=edit&redlink=1), [Data discovery](/index.php?title=Data_discovery&action=edit&redlink=1), [Evidence gathering](/index.php?title=Evidence_gathering&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Baseline established by skilled researchers |
| Baseline | Varies by task category |
| SOTA score | Not publicly disclosed |
| SOTA model | [ChatGPT o3](/index.php?title=ChatGPT_o3&action=edit&redlink=1) |
| SOTA date | 2025-05 |
| Saturated | No |
| Resources |
| Website | [Official website](https://evals.futuresearch.ai/) |
| Paper | [Paper](https://arxiv.org/abs/2506.06287) |
| GitHub | [Not publicly available Repository] |
| Dataset | [Contact evals@futuresearch.ai Download] |
| License | Proprietary

 |

Deep Research Bench** is an innovative [artificial intelligence](/wiki/artificial_intelligence) benchmark developed by [FutureSearch](/index.php?title=FutureSearch&action=edit&redlink=1) to evaluate [large language model](/wiki/large_language_model) agents' capabilities in conducting multi-step web research with objective, reproducible scoring. Released in May 2025[&#91;1&#93;](#cite_note-futuresearch_paper-1), Deep Research Bench addresses the fundamental challenge of evaluating AI research agents on the constantly changing web by introducing the RetroSearch system, which uses frozen web page snapshots to ensure consistent and reproducible evaluation over time.

## Overview

Deep Research Bench represents a paradigm shift in evaluating AI research capabilities by solving the "moving target" problem inherent in web-based evaluation. Unlike traditional benchmarks that struggle with the dynamic nature of online information, Deep Research Bench employs a novel "pastcasting" approach, using pre-resolved research questions with known answers based on specific temporal snapshots of the web[&#91;2&#93;](#cite_note-futuresearch_website-2).

### Key Innovation: RetroSearch System

The RetroSearch system enables reproducible evaluation by:

- Capturing and storing 10,000-100,000 web pages per task

- Freezing the web state at a specific point in time

- Allowing offline agents to perform comparably to live web agents

- Ensuring benchmarks remain valid despite web changes

- Enabling consistent comparison across different models and time periods

## Task Categories and Structure

### Eight Research Capability Categories

Deep Research Bench evaluates agents across eight distinct research capability categories[&#91;1&#93;](#cite_note-futuresearch_paper-1):

| Category | Description | Example Task | Scoring Method |
| --- | --- | --- | --- |
| **Find Number** | Locate specific numerical facts | "What was Tesla's Q3 2024 revenue?" | Binary (correct/incorrect) |
| **Find Dataset** | Discover relevant datasets | "Find COVID-19 vaccination data for Europe" | Precision/Recall |
| **Find Original Source** | Track down primary sources | "Find the original paper for BERT architecture" | Binary |
| **Validate Claim** | Fact-check statements | "Verify if company X acquired company Y in 2023" | Binary with evidence |
| **Derive Number** | Calculate from multiple sources | "Calculate total renewable energy capacity in Asia" | Numerical accuracy |
| **Gather Evidence** | Compile supporting information | "Find evidence for climate impact on agriculture" | Comprehensiveness score |
| **Populate Reference Class** | Create comprehensive lists | "List all unicorn startups in fintech 2024" | Recall/Precision |
| **Compile Dataset** | Aggregate structured data | "Create dataset of AI benchmark scores" | Completeness/Accuracy |

### Task Distribution and Complexity

| Aspect | Details |
| --- | --- |
| **Total Tasks** | 89 multi-step research instances |
| **Web Pages per Task** | 10,000 - 100,000 offline pages |
| **Average Steps** | 3-7 research steps per task |
| **Time Horizon** | Tasks take skilled humans 30 minutes to 4 hours |
| **Source Diversity** | Academic, news, corporate, government sources |

## Evaluation Methodology

### Scoring Framework

Deep Research Bench employs task-specific scoring methods optimized for each category:

| Scoring Type | Categories | Description | Formula |
| --- | --- | --- | --- |
| **Binary** | Find Number, Find Original Source, Validate Claim | Correct/Incorrect | 1 if correct, 0 otherwise |
| **Precision-based** | Find Dataset, Populate Reference Class | Accuracy of returned items | Correct items / Total returned |
| **Recall-based** | Gather Evidence, Compile Dataset | Completeness of findings | Found items / Total available |
| **F1 Score** | Combined tasks | Balance of precision and recall | 2 × (Precision × Recall) / (Precision + Recall) |
| **Numerical** | Derive Number | Distance from correct value | predicted - actual| / actual) |

### Automated Evaluation Metrics

Beyond task-specific scoring, Deep Research Bench tracks several behavioral metrics[&#91;1&#93;](#cite_note-futuresearch_paper-1):

| Metric | Description | Importance |
| --- | --- | --- |
| **Hallucination Rate** | Frequency of fabricated information | Critical for reliability |
| **Tool Use Efficiency** | Optimal use of search and retrieval tools | Indicates sophistication |
| **Information Retention** | Avoiding forgetting across steps | Essential for complex tasks |
| **Source Citation** | Proper attribution of information | Academic integrity |
| **Search Strategy** | Query formulation and refinement | Research methodology |

## Current Performance

### Model Comparison (May 2025)

According to FutureSearch's evaluation[&#91;2&#93;](#cite_note-futuresearch_website-2), current model performance shows:

| Rank | Model | Overall Score | Best Category | Worst Category |
| --- | --- | --- | --- | --- |
| 1 | [ChatGPT o3](/index.php?title=ChatGPT_o3&action=edit&redlink=1) | Leading | Find Number | Compile Dataset |
| 2 | [OpenAI Deep Research](/index.php?title=OpenAI_Deep_Research&action=edit&redlink=1) | High | Validate Claim | Populate Reference Class |
| 3 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | High | Find Dataset | Derive Number |
| 4 | [Grok](/wiki/grok) | Moderate | Find Original Source | Gather Evidence |
| 5 | [DeepSeek](/wiki/deepseek) | Moderate | Find Number | Compile Dataset |

### Performance by Task Category

| Category | Average Score | Human Baseline | Best Model Score |
| --- | --- | --- | --- |
| Find Number | 72% | 95% | 89% (o3) |
| Find Dataset | 68% | 92% | 81% (Gemini) |
| Find Original Source | 74% | 97% | 86% (o3) |
| Validate Claim | 70% | 94% | 83% (OpenAI DR) |
| Derive Number | 61% | 89% | 75% (o3) |
| Gather Evidence | 58% | 87% | 71% (o3) |
| Populate Reference Class | 54% | 85% | 68% (Gemini) |
| Compile Dataset | 49% | 83% | 62% (o3) |

## Technical Implementation

### RetroSearch Environment

The RetroSearch system architecture enables consistent evaluation:

```python
class RetroSearchEnvironment:

   def __init__(self, task_id, snapshot_date):
       self.web_corpus = load_offline_corpus(task_id)
       self.snapshot_date = snapshot_date
       self.search_index = build_search_index(self.web_corpus)
   
   def search(self, query):
       """Search within frozen web snapshot"""
       return self.search_index.search(query, 
                                      date_filter=self.snapshot_date)
   
   def fetch_page(self, url):
       """Retrieve page from offline corpus"""
       return self.web_corpus.get(url, version=self.snapshot_date)

```

### Agent Interface

Agents interact with the benchmark through a standardized interface:

```python
class ResearchAgent:

   def solve_task(self, task_description, tools):
       """
       Complete a research task using available tools
       
       Args:
           task_description: Natural language task
           tools: Search, fetch, calculate functions
       
       Returns:
           answer: Task solution
           trace: Step-by-step reasoning
           sources: Citations used
       """
       # Agent implementation
       pass

```

### Evaluation Pipeline

1. **Task Loading**: Load task and associated web corpus
2. **Agent Initialization**: Set up agent with RetroSearch tools
3. **Execution**: Agent performs research within frozen environment
4. **Scoring**: Automated scoring against ground truth
5. **Analysis**: Generate detailed performance reports

## Key Findings and Insights

### Offline vs. Online Performance

One of Deep Research Bench's most significant findings is that offline agents (using frozen snapshots) perform comparably to live web agents[&#91;1&#93;](#cite_note-futuresearch_paper-1):

| Agent Type | Average Score | Advantages | Disadvantages |
| --- | --- | --- | --- |
| **Offline (RetroSearch)** | 67.3% | Reproducible, consistent, faster | Limited to snapshot data |
| **Online (Live Web)** | 68.1% | Access to latest information | Non-reproducible, slower |
| **Hybrid** | 69.5% | Best of both approaches | Complex implementation |

### Research Strategy Analysis

Deep Research Bench reveals distinct research strategies employed by different models:

| Strategy | Description | Models Using | Effectiveness |
| --- | --- | --- | --- |
| **Breadth-first** | Explore many sources quickly | Gemini, Grok | Good for survey tasks |
| **Depth-first** | Deep dive into promising sources | o3, DeepSeek | Better for detailed analysis |
| **Iterative Refinement** | Progressive query improvement | OpenAI DR | Excellent for complex queries |
| **Parallel Search** | Multiple simultaneous searches | Claude (when available) | Time-efficient |

## Applications and Use Cases

### Industry Applications

| Industry | Use Case | Relevance |
| --- | --- | --- |
| **Finance** | Due diligence research | High accuracy requirements |
| **Consulting** | Market research and analysis | Multi-source synthesis |
| **Journalism** | Fact-checking and investigation | Source verification |
| **Academia** | Literature reviews | Comprehensive coverage |
| **Legal** | Case law research | Precision and recall |
| **Healthcare** | Clinical trial discovery | Dataset compilation |

### Research Impact

Deep Research Bench has influenced several areas:

1. **Benchmark Design**: Demonstrated importance of temporal consistency
2. **Agent Development**: Shifted focus to robust offline capabilities
3. **Evaluation Methods**: Established pastcasting as viable approach
4. **Tool Design**: Influenced development of research-specific tools

## Comparison with Related Benchmarks

### Distinguishing Features

| Feature | Deep Research Bench | Traditional Benchmarks | Other Research Benchmarks |
| --- | --- | --- | --- |
| **Web Snapshot** | Frozen corpus | Live web | Mixed approaches |
| **Reproducibility** | 100% reproducible | Variable | Limited reproducibility |
| **Task Origin** | ~40% from client work | Academic sources | Synthetic tasks |
| **Scoring** | Objective ground truth | Often subjective | Mixed methods |
| **Temporal Stability** | Stable over time | Degrades quickly | Moderate stability |

### Relationship to DeepResearchBench

While both benchmarks evaluate research capabilities, they differ significantly:

| Aspect | Deep Research Bench | [DeepResearchBench](/index.php?title=DeepResearchBench&action=edit&redlink=1) |
| --- | --- | --- |
| **Organization** | FutureSearch | University/Industry collaboration |
| **Focus** | Web research reliability | Academic research quality |
| **Task Count** | 89 | 100 |
| **Languages** | English only | English and Chinese |
| **Evaluation** | Objective scoring | RACE/FACT frameworks |
| **Environment** | Frozen web snapshots | Live web + citations |

## Limitations and Future Directions

### Current Limitations

1. **Corpus Size**: Even 100k pages may miss relevant information
2. **Temporal Gaps**: Snapshots may not capture all temporal dynamics
3. **Language Limitation**: Currently English-only
4. **Task Diversity**: 89 tasks may not cover all research scenarios
5. **Access Restrictions**: Not fully open-source

### Future Development Plans

| Development | Description | Timeline |
| --- | --- | --- |
| **Expanded Corpus** | Increase to 1M+ pages per task | 2025 Q3 |
| **Multi-lingual Support** | Add 5+ languages | 2025 Q4 |
| **Dynamic Snapshots** | Multiple temporal snapshots per task | 2026 Q1 |
| **Open Release** | Public dataset availability | Under consideration |
| **Real-time Mode** | Live web evaluation option | 2026 Q2 |

## Significance

Deep Research Bench addresses a fundamental challenge in AI evaluation: the inability to reproducibly assess research capabilities on the ever-changing web. By introducing the RetroSearch system and pastcasting methodology, the benchmark enables:

- **Consistent evaluation** across different models and time periods

- **Objective scoring** with pre-established ground truth

- **Realistic assessment** using actual web content

- **Longitudinal studies** of model improvement over time

- **Fair comparison** between different research approaches

As AI research agents become increasingly important for knowledge work, Deep Research Bench provides essential infrastructure for ensuring these systems can reliably perform complex, multi-step research tasks. The benchmark's finding that offline agents can match online performance has significant implications for developing robust, deployable research systems.

## See Also

- [AI Research Agents](/index.php?title=AI_Research_Agents&action=edit&redlink=1)

- [Web Information Retrieval](/index.php?title=Web_Information_Retrieval&action=edit&redlink=1)

- [FutureSearch](/index.php?title=FutureSearch&action=edit&redlink=1)

- [DeepResearchBench](/index.php?title=DeepResearchBench&action=edit&redlink=1) (Different benchmark)

- [Benchmark Reproducibility](/index.php?title=Benchmark_Reproducibility&action=edit&redlink=1)

- [Temporal Evaluation](/index.php?title=Temporal_Evaluation&action=edit&redlink=1)

- [Multi-step Reasoning](/index.php?title=Multi-step_Reasoning&action=edit&redlink=1)

- [Fact Checking](/index.php?title=Fact_Checking&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-futuresearch_paper_1-0) [1.1](#cite_ref-futuresearch_paper_1-1) [1.2](#cite_ref-futuresearch_paper_1-2) [1.3](#cite_ref-futuresearch_paper_1-3) Bosse, N.I., Evans, J., Gambee, R.G., et al. (2025). "Deep Research Bench: Benchmarking LLM Agents' Web Research Capabilities". arXiv:2506.06287. Retrieved from [https://arxiv.org/abs/2506.06287](https://arxiv.org/abs/2506.06287)

2. ↑ [2.0](#cite_ref-futuresearch_website_2-0) [2.1](#cite_ref-futuresearch_website_2-1) FutureSearch. (2025). "Deep Research Bench: Stable Evaluation for AI Research Agents". Retrieved from [https://evals.futuresearch.ai/](https://evals.futuresearch.ai/)

Cite error: `<ref>` tag with name "futuresearch_main" defined in `<references>` is not used in prior text.