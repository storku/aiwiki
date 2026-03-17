---
title: "DeepResearch Bench"
slug: "deepresearch_bench"
categories:
  - "AI_Benchmarks"
  - "Research_Agent_Benchmarks"
  - "Academic_AI_Evaluation"
  - "Multilingual_Benchmarks"
  - "2025_Benchmarks"
  - "Report_Generation_Benchmarks"
---**

| DeepResearch Bench |
| --- |
| Overview |
| Full name | Deep Research Benchmark |
| Abbreviation | DRB |
| Description | A benchmark evaluating Deep Research Agents on PhD-level research tasks requiring multi-step exploration and synthesis |
| Release date | 2025-06-13 |
| Latest version | 2.0 |
| Benchmark updated | 2025-07-15 |
| Authors | [Mingxuan Du](/index.php?title=Mingxuan_Du&action=edit&redlink=1), [Benfeng Xu](/index.php?title=Benfeng_Xu&action=edit&redlink=1), [Chiwei Zhu](/index.php?title=Chiwei_Zhu&action=edit&redlink=1), [Xiaorui Wang](/index.php?title=Xiaorui_Wang&action=edit&redlink=1), [Zhendong Mao](/index.php?title=Zhendong_Mao&action=edit&redlink=1) |
| Organization | [University of Science and Technology of China](/index.php?title=University_of_Science_and_Technology_of_China&action=edit&redlink=1), [Metastone Technology](/index.php?title=Metastone_Technology&action=edit&redlink=1) |
| Technical Details |
| Type | [Research Agent Evaluation](/index.php?title=Research_Agent_Evaluation&action=edit&redlink=1), [Report Generation](/index.php?title=Report_Generation&action=edit&redlink=1), [Multi-step Reasoning](/index.php?title=Multi-step_Reasoning&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Web content](/index.php?title=Web_content&action=edit&redlink=1) |
| Task format | [Research report generation, Multi-step exploration](/index.php?title=Research_report_generation,_Multi-step_exploration&action=edit&redlink=1) |
| Number of tasks | 100 |
| Total examples | 100 PhD-level research tasks |
| Evaluation metric | [RACE (quality assessment)](/index.php?title=RACE_(quality_assessment)&action=edit&redlink=1), [FACT (citation accuracy)](/index.php?title=FACT_(citation_accuracy)&action=edit&redlink=1) |
| Domains | [Physics](/index.php?title=Physics&action=edit&redlink=1), [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1), [Biology](/index.php?title=Biology&action=edit&redlink=1), [Environmental Science](/index.php?title=Environmental_Science&action=edit&redlink=1), [Engineering](/index.php?title=Engineering&action=edit&redlink=1), [And 17 others](/index.php?title=And_17_others&action=edit&redlink=1) |
| Languages | English (50 tasks), Chinese (50 tasks) |
| Performance |
| Human performance | Established by domain experts |
| Baseline | Varies by model |
| SOTA score | 48.92 |
| SOTA model | [Gemini-2.5-Pro Deep Research](/index.php?title=Gemini-2.5-Pro_Deep_Research&action=edit&redlink=1) |
| SOTA date | 2025-07 |
| Saturated | No |
| Resources |
| Website | [Official website](https://deepresearch-bench.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2506.11763) |
| GitHub | [Repository](https://github.com/Ayanami0730/deep_research_bench) |
| Dataset | [Download](https://github.com/Ayanami0730/deep_research_bench) |
| License | Open source

 |

DeepResearch Bench** is a comprehensive [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [Deep Research Agents](/index.php?title=Deep_Research_Agents&action=edit&redlink=1) (DRAs), [large language model](/wiki/large_language_model)-based agents capable of conducting autonomous research and generating analyst-grade reports. Released in June 2025 by researchers from the [University of Science and Technology of China](/index.php?title=University_of_Science_and_Technology_of_China&action=edit&redlink=1) and [Metastone Technology](/index.php?title=Metastone_Technology&action=edit&redlink=1)[&#91;1&#93;](#cite_note-drb_paper-1), DeepResearchBench addresses the critical need to assess AI systems' ability to perform PhD-level research tasks that require multi-step web exploration, targeted information retrieval, and higher-order synthesis capabilities.

## Overview

DeepResearchBench represents a significant advancement in evaluating AI research capabilities by focusing on complex, real-world research scenarios that mirror the work of human researchers and analysts. The benchmark consists of 100 carefully curated PhD-level research tasks spanning 22 distinct academic fields, created and validated by over 100 domain experts holding PhD degrees or equivalent senior practitioner experience[&#91;2&#93;](#cite_note-drb_website-2).

### Motivation

The creation of DeepResearch Bench was motivated by several factors:

- **Gap in existing benchmarks**: Traditional benchmarks fail to capture the complexity of real research tasks

- **Rise of research agents**: Emergence of AI systems claiming research capabilities without standardized evaluation

- **Need for quality assessment**: Lack of metrics for evaluating research report quality and citation accuracy

- **Bilingual evaluation**: Requirement for benchmarks supporting multiple languages in academic contexts

- **Real-world alignment**: Need for tasks reflecting actual PhD-level research challenges

## Task Design and Structure

### Task Distribution

DeepResearch Bench's 100 tasks are carefully distributed across academic disciplines and languages:

| Category | Number of Tasks | Language Distribution |
| --- | --- | --- |
| **Physical Sciences** | 20 | 10 English, 10 Chinese |
| **Life Sciences** | 18 | 9 English, 9 Chinese |
| **Engineering** | 16 | 8 English, 8 Chinese |
| **Environmental Sciences** | 12 | 6 English, 6 Chinese |
| **Social Sciences** | 10 | 5 English, 5 Chinese |
| **Computer Science** | 8 | 4 English, 4 Chinese |
| **Mathematics** | 6 | 3 English, 3 Chinese |
| **Other Fields** | 10 | 5 English, 5 Chinese |

### Task Characteristics

Each research task in DeepResearch Bench exhibits several key characteristics[&#91;1&#93;](#cite_note-drb_paper-1):

| Characteristic | Description | Example |
| --- | --- | --- |
| **Multi-step Exploration** | Requires iterative information gathering | Literature review → hypothesis formation → evidence synthesis |
| **Cross-source Integration** | Demands information from multiple sources | Academic papers + datasets + news articles |
| **Domain Expertise** | Needs specialized knowledge | Understanding quantum mechanics terminology |
| **Critical Analysis** | Requires evaluating conflicting information | Assessing contradictory research findings |
| **Synthesis Capability** | Demands creating coherent narratives | Writing comprehensive research reports |

### Task Creation Process

The benchmark's tasks were developed through a rigorous process:

1. **Query Analysis**: Analyzed 96,147 user queries to identify research needs
2. **Deep Research Identification**: 44,019 queries identified as requiring deep research
3. **Expert Curation**: 100+ domain experts created representative tasks
4. **Validation**: Multiple rounds of review and refinement
5. **Bilingual Adaptation**: Careful translation and cultural adaptation

## Evaluation Methodology

### RACE Framework

The Report Assessment for Comprehensive Evaluation (RACE) framework assesses the quality of generated research reports[&#91;1&#93;](#cite_note-drb_paper-1):

| Criterion | Weight | Description | Evaluation Method |
| --- | --- | --- | --- |
| **Comprehensiveness** | 30% | Coverage of relevant aspects | Comparison with reference reports |
| **Insight/Depth** | 25% | Analysis quality and originality | Expert rubric scoring |
| **Instruction Following** | 20% | Adherence to task requirements | Binary and scaled metrics |
| **Readability** | 15% | Clarity and organization | Automated readability scores |
| **Accuracy** | 10% | Factual correctness | Fact-checking against sources |

### FACT Framework

The Factual Accuracy and Citation Testing (FACT) framework evaluates information retrieval effectiveness:

| Metric | Description | Calculation |
| --- | --- | --- |
| **Citation Accuracy** | Correctness of cited sources | Verified citations / Total citations |
| **Effective Citations** | Relevant and supporting citations | Relevant citations / Total citations |
| **Source Diversity** | Variety of information sources | Unique domains / Total citations |
| **Citation Density** | Citations per unit of content | Citations / Word count × 1000 |
| **Temporal Relevance** | Recency of cited materials | Weighted by publication date |

## Current Performance

### Leaderboard Results (July 2025)

The DeepResearch Bench leaderboard, hosted on [Hugging Face](/wiki/hugging_face) Spaces[&#91;3&#93;](#cite_note-drb_leaderboard-3), shows current model performance:

| Rank | Model | RACE Score | FACT Score | Overall | Organization |
| --- | --- | --- | --- | --- | --- |
| 1 | [Gemini-2.5-Pro](/index.php?title=Gemini-2.5-Pro&action=edit&redlink=1) Deep Research | 82.3 | 78.5 | 80.4 | [Google](/index.php?title=Google&action=edit&redlink=1) |
| 2 | [OpenAI Deep Research](/index.php?title=OpenAI_Deep_Research&action=edit&redlink=1) | 80.7 | 76.2 | 78.5 | [OpenAI](/wiki/openai) |
| 3 | [Perplexity](/wiki/perplexity) Deep Research | 78.4 | 79.1 | 78.8 | [Perplexity AI](/index.php?title=Perplexity_AI&action=edit&redlink=1) |
| 4 | [Kimi-Researcher](/index.php?title=Kimi-Researcher&action=edit&redlink=1) | 76.2 | 74.8 | 75.5 | [Moonshot AI](/wiki/moonshot_ai) |
| 5 | [Claude-Researcher](/index.php?title=Claude-Researcher&action=edit&redlink=1) | 75.8 | 73.4 | 74.6 | [Anthropic](/wiki/anthropic) |
| 6 | [Doubao-DeepResearch](/index.php?title=Doubao-DeepResearch&action=edit&redlink=1) | 74.1 | 72.9 | 73.5 | [ByteDance](/index.php?title=ByteDance&action=edit&redlink=1) |

### Performance Analysis by Domain

| Domain | Best Performing Model | Average Score | Human Expert Baseline |
| --- | --- | --- | --- |
| **Computer Science** | Gemini-2.5-Pro | 85.2 | 92.0 |
| **Physical Sciences** | OpenAI Deep Research | 79.8 | 88.5 |
| **Life Sciences** | Perplexity | 77.3 | 87.0 |
| **Engineering** | Gemini-2.5-Pro | 76.5 | 86.5 |
| **Social Sciences** | Claude-Researcher | 72.1 | 84.0 |

## Technical Implementation

### System Requirements

DeepResearch Bench requires the following technical setup[&#91;4&#93;](#cite_note-drb_github-4):

```bash

1. Installation

pip install deepresearchbench

1. Required API keys

export GEMINI_API_KEY="your_gemini_key"
export JINA_API_KEY="your_jina_key"  # For web scraping

1. Python version

Python 3.9+
```

### Evaluation Pipeline

```python
from deepresearchbench import Evaluator, RACEScorer, FACTScorer

1. Initialize evaluator

evaluator = Evaluator(

   race_scorer=RACEScorer(),
   fact_scorer=FACTScorer()

)

1. Load benchmark tasks

tasks = evaluator.load_benchmark("path/to/tasks.jsonl")

1. Evaluate a research agent

results = evaluator.evaluate(

   agent=my_research_agent,
   tasks=tasks,
   verbose=True

)

1. Generate detailed report

evaluator.generate_report(results, output_path="evaluation_report.pdf")
```

### Data Format

Each task in the benchmark follows a standardized format:

```json
{

 "task_id": "DRB_001",
 "domain": "Physics",
 "language": "en",
 "query": "Analyze recent advances in quantum error correction...",
 "reference_sources": [...],
 "expert_annotations": {...},
 "difficulty_level": "PhD",
 "estimated_time_hours": 4.5

}
```

## Key Findings and Insights

### Agent Capabilities Analysis

DeepResearch Bench reveals several insights about current AI research agents:

| Capability | Current State | Gap to Human Expert |
| --- | --- | --- |
| **Information Retrieval** | Good (75-85%) | 10-15% |
| **Source Synthesis** | Moderate (60-70%) | 20-30% |
| **Critical Analysis** | Limited (45-55%) | 35-45% |
| **Novel Insights** | Poor (25-35%) | 55-65% |
| **Citation Accuracy** | Good (70-80%) | 15-20% |

### Language Performance Comparison

| Model | English Tasks | Chinese Tasks | Bilingual Average |
| --- | --- | --- | --- |
| Gemini-2.5-Pro | 83.7 | 78.9 | 81.3 |
| OpenAI Deep Research | 81.2 | 75.3 | 78.3 |
| Kimi-Researcher | 72.4 | 80.1 | 76.3 |
| Doubao-DeepResearch | 70.8 | 77.5 | 74.2 |

## Limitations and Future Work

### Current Limitations

1. **Task Scope**: Limited to 22 academic fields, may not cover all research domains
2. **Language Coverage**: Only English and Chinese, excluding other major research languages
3. **Evaluation Metrics**: RACE and FACT may not capture all aspects of research quality
4. **Human Baseline**: Establishing consistent expert baselines across domains is challenging
5. **Dynamic Information**: Difficulty in evaluating agents on rapidly changing information

### Future Directions

| Direction | Description | Timeline |
| --- | --- | --- |
| **Expanded Languages** | Add support for Spanish, French, German | 2025 Q4 |
| **Interactive Tasks** | Multi-turn research dialogues | 2026 Q1 |
| **Real-time Evaluation** | Live web research assessment | 2026 Q2 |
| **Multimodal Integration** | Include figures, charts, data visualization | 2026 Q3 |
| **Collaborative Research** | Multi-agent research scenarios | 2026 Q4 |

## Significance

DeepResearch Bench addresses a critical gap in AI evaluation by providing the first comprehensive benchmark for assessing AI systems' ability to conduct PhD-level research. By combining rigorous task design with sophisticated evaluation metrics, the benchmark enables:

- **Standardized comparison** of research agent capabilities

- **Identification of weaknesses** in current AI systems

- **Guidance for development** of next-generation research agents

- **Quality assurance** for AI-generated research content

- **Cross-linguistic evaluation** of research capabilities

As AI systems increasingly assist in research and analysis tasks, DeepResearch Bench provides essential infrastructure for ensuring these systems meet the high standards required for academic and professional research work.

## See Also

- [Deep Research Agents](/index.php?title=Deep_Research_Agents&action=edit&redlink=1)

- [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1)

- [AI Research Tools](/index.php?title=AI_Research_Tools&action=edit&redlink=1)

- [Research Automation](/index.php?title=Research_Automation&action=edit&redlink=1)

- [Academic AI](/index.php?title=Academic_AI&action=edit&redlink=1)

- [Citation Analysis](/index.php?title=Citation_Analysis&action=edit&redlink=1)

- [Deep Research Bench](/wiki/deep_research_bench) (FutureSearch benchmark)

- [Information Retrieval](/index.php?title=Information_Retrieval&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-drb_paper_1-0) [1.1](#cite_ref-drb_paper_1-1) [1.2](#cite_ref-drb_paper_1-2) Du, M., Xu, B., Zhu, C., Wang, X., & Mao, Z. (2025). "DeepResearchBench: Evaluating Deep Research Agents". arXiv:2506.11763. Retrieved from [https://arxiv.org/abs/2506.11763](https://arxiv.org/abs/2506.11763)

2. [↑](#cite_ref-drb_website_2-0) DeepResearchBench Team. (2025). "DeepResearchBench: A Comprehensive Benchmark for Deep Research Agents". Retrieved from [https://deepresearch-bench.github.io/](https://deepresearch-bench.github.io/)

3. [↑](#cite_ref-drb_leaderboard_3-0) Ayanami0730. (2025). "DeepResearch Leaderboard". Hugging Face Spaces. Retrieved from [https://huggingface.co/spaces/Ayanami0730/DeepResearch-Leaderboard](https://huggingface.co/spaces/Ayanami0730/DeepResearch-Leaderboard)

4. [↑](#cite_ref-drb_github_4-0) Ayanami0730. (2025). "Deep Research Bench GitHub Repository". Retrieved from [https://github.com/Ayanami0730/deep_research_bench](https://github.com/Ayanami0730/deep_research_bench)