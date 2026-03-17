---
title: "AA-LCR"
slug: "aa-lcr"
categories:
  - "AI_Benchmarks"
  - "Long_Context_Benchmarks"
  - "Reasoning_Benchmarks"
  - "Document_Understanding_Benchmarks"
  - "2025_Benchmarks"
  - "Knowledge_Work_Benchmarks"
  - "Multi-Document_Analysis"
  - "Natural_Language_Processing"
---**

| AA-LCR |
| --- |
| Overview |
| Full name | Artificial Analysis Long Context Reasoning |
| Abbreviation | AA-LCR |
| Description | A benchmark evaluating long context reasoning across multiple real-world documents (~100k tokens) |
| Release date | 2025 |
| Latest version | 1.0 |
| Benchmark updated | 2025 |
| Authors | [Artificial Analysis Research Team](/index.php?title=Artificial_Analysis_Research_Team&action=edit&redlink=1) |
| Organization | [Artificial Analysis](/index.php?title=Artificial_Analysis&action=edit&redlink=1) |
| Technical Details |
| Type | [Long Context Reasoning](/index.php?title=Long_Context_Reasoning&action=edit&redlink=1),&#160;[Multi-document Understanding](/index.php?title=Multi-document_Understanding&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Question answering across document sets](/index.php?title=Question_answering_across_document_sets&action=edit&redlink=1) |
| Number of tasks | 100 questions |
| Total examples | 100 document sets |
| Evaluation metric | [Accuracy (LLM-based equality checker)](/index.php?title=Accuracy_(LLM-based_equality_checker)&action=edit&redlink=1) |
| Domains | [Company reports](/index.php?title=Company_reports&action=edit&redlink=1),&#160;[Legal](/wiki/legal),&#160;[Academia](/index.php?title=Academia&action=edit&redlink=1),&#160;[Government](/index.php?title=Government&action=edit&redlink=1),&#160;[Industry](/index.php?title=Industry&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 40-60% (first attempt) |
| Baseline | ~20-30% |
| SOTA score | 69% |
| SOTA model | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)

 |
| Dataset | [Download](https://huggingface.co/datasets/ArtificialAnalysis/AA-LCR) |
| License | Apache License 2.0 (questions), Public domain representation (documents)

 |

AA-LCR** (**Artificial Analysis Long Context Reasoning**) is a challenging [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' ability to reason across multiple long documents totaling approximately 100,000 [tokens](/wiki/tokens). Created by [Artificial Analysis](/index.php?title=Artificial_Analysis&action=edit&redlink=1), AA-LCR focuses on replicating real [knowledge work](/index.php?title=Knowledge_work&action=edit&redlink=1) and reasoning tasks that professionals encounter when analyzing extensive document sets, requiring genuine [inference](/wiki/inference) and synthesis rather than simple [information retrieval](/index.php?title=Information_retrieval&action=edit&redlink=1).[&#91;1&#93;](#cite_note-aa_main-1)

## Overview

AA-LCR represents a significant advancement in [long-context evaluation](/index.php?title=Long-context_evaluation&action=edit&redlink=1) by requiring models to demonstrate true reasoning capabilities across multiple documents rather than mere retrieval. The benchmark addresses the critical gap between synthetic long-context tasks like [Needle in the Haystack](/index.php?title=Needle_in_the_Haystack&action=edit&redlink=1) and real-world knowledge work requirements.[&#91;2&#93;](#cite_note-aa_lcr_page-2) The benchmark specifically targets the evaluation of models' ability to maintain coherent reasoning across extensive [context windows](/index.php?title=Context_windows&action=edit&redlink=1) while performing complex analytical tasks that [knowledge workers](/index.php?title=Knowledge_workers&action=edit&redlink=1) perform daily.

### Key Characteristics

| Feature | Specification | Significance |
| --- | --- | --- |
| Average Context Size | ~100,000 tokens (cl100k_base) | Tests true long-context capabilities |
| Minimum Context Required | 128K tokens | Excludes models with limited context |
| Total Unique Tokens | ~3 million across benchmark | Comprehensive coverage |
| Document Count | ~230 documents | Diverse source materials |
| Question Count | 100 human-crafted questions | Balanced evaluation set |
| Document Categories | 7 distinct types | Real-world diversity |

### Motivation

The development of AA-LCR was driven by several critical factors in the AI evaluation landscape:[&#91;3&#93;](#cite_note-huggingface-3)

- **Gap in existing benchmarks**: Most current long-context benchmarks test retrieval capabilities rather than genuine reasoning

- **Real-world alignment**: Need to test AI systems on tasks that knowledge workers actually perform

- **Multi-document synthesis**: Absence of benchmarks requiring integration across multiple independent documents

- **Professional-grade materials**: Importance of evaluating models on actual corporate, legal, and academic documents

- **Reasoning verification**: Requirement for benchmarks where answers cannot be directly retrieved from text

## Technical Specifications

### Tokenization

AA-LCR uses the [cl100k_base](/index.php?title=Cl100k_base&action=edit&redlink=1) tokenizer from [tiktoken](/index.php?title=Tiktoken&action=edit&redlink=1) for consistent token counting across all evaluations. This tokenizer is widely used for models including [GPT-4](/wiki/gpt-4), [GPT-3.5-turbo](/index.php?title=GPT-3.5-turbo&action=edit&redlink=1), and various embedding models, ensuring standardized measurement across different AI systems.

### Dataset Composition

AA-LCR comprises 100 carefully curated questions spanning 7 document categories:[&#91;1&#93;](#cite_note-aa_main-1)

| Category | Description | Document Types | Example Tasks | Question Count |
| --- | --- | --- | --- | --- |
| Company Reports | Corporate financial and operational documents | Annual reports, earnings calls, investor presentations, financial supplements | Financial analysis, trend identification, metric comparison | 63 |
| Industry Reports | Sector-wide analyses and market research | Market studies, industry analyses, trend reports, competitive landscapes | Strategic planning, market entry analysis | 8 |
| Government Consultations | Policy documents and regulatory materials | White papers, consultation documents, regulatory filings, policy proposals | Policy analysis, compliance assessment | 7 |
| Academia | Scholarly research and publications | Research papers, dissertations, academic studies, literature reviews | Literature synthesis, research comparison | 6 |
| Legal | Legal documents and contracts | Contracts, case law, legal opinions, regulatory frameworks | Legal research, contract analysis | 6 |
| Marketing Materials | Promotional and strategic content | Marketing plans, campaign materials, brand guidelines, product descriptions | Marketing strategy, competitive analysis | 5 |
| Survey Reports | Data collection and analysis reports | Survey results, statistical analyses, demographic studies, opinion polls | Market research, data synthesis | 5 |

### Document Set Characteristics

| Characteristic | Specification | Purpose |
| --- | --- | --- |
| Total Tokens per Question | ~100,000 (cl100k_base tokenizer) | Test long-context capabilities |
| Document Count per Question | Multiple independent documents | Require cross-document reasoning |
| Total Unique Tokens | ~3 million across benchmark | Comprehensive coverage |
| Total Documents | ~230 documents | Diverse source materials |
| Minimum Context Window | 128K tokens | Ensure true long-context testing |
| Maximum Output Variation | 2.7M to 22K tokens (model-dependent) | Flexibility in reasoning approaches |

## Evaluation Methodology

### Question Design Principles

AA-LCR questions are specifically engineered to require genuine reasoning:[&#91;3&#93;](#cite_note-huggingface-3)

| Principle | Implementation | Verification Method |
| --- | --- | --- |
| No Direct Retrieval | Answers cannot be directly found in text | Human validation testing |
| Multi-Source Synthesis | Information from multiple documents required | Cross-reference verification |
| Reasoning Required | Logical inference necessary beyond search | Cannot solve via simple retrieval |
| Real-World Relevance | Based on actual knowledge work tasks | Professional validation |
| Solvability | All questions have verified solutions | Human baseline testing |
| Clear Defensibility | Answers have unambiguous correct solutions | Multi-reviewer agreement |

### Evaluation Process

The evaluation uses an [LLM-based equality checker](/index.php?title=LLM-based_equality_checker&action=edit&redlink=1) to assess responses:[&#91;1&#93;](#cite_note-aa_main-1)
```python

1. 

prompt = """BEGIN INPUT DOCUMENTS
{documents_text}
END INPUT DOCUMENTS

Answer the following question using the input documents provided above.

START QUESTION
{question}
END QUESTION"""
```

The equality checker (Qwen3 235B A22B 2507 Non-reasoning) evaluates whether candidate answers match official answers, allowing for semantic equivalence rather than requiring exact text matches.

## Performance Results

### Initial Results (2025)

At launch, AA-LCR demonstrated a significant challenge for even the most advanced language models:[&#91;1&#93;](#cite_note-aa_main-1)

| Rank | Model | Score | Output Tokens Used |
| --- | --- | --- | --- |
| 1 | OpenAI o3 | 69% | 2.7M |
| 2 | xAI Grok 4 | 68% | N/A |
| 3 | Qwen3 235B 2507 Reasoning | 67% | N/A |
| 4 | GPT-4.1 (1M context) | ~60% | N/A |
| 5 | DeepSeek R1 | <50% | N/A |
| 6 | o1-mini | <50% | N/A |
| ... | ... | ... | ... |
| Last | LG Exaone 4.0 32B | 14% | N/A |

### Subsequent Testing

Following the initial release, additional models were tested on AA-LCR:[&#91;4&#93;](#cite_note-aa_intelligence-4)

- **o4-mini models**: Showed improved efficiency with competitive scores

- **GPT-5 (August 2025)**: Later achieved top scores of 71-73% across different reasoning effort levels after release

### Human Performance

Human evaluators demonstrated the benchmark's difficulty:[&#91;1&#93;](#cite_note-aa_main-1)

- Individual accuracy: 40-60% on first attempt

- Agreement on correct answers: High when shown solutions

- All questions answered correctly by at least one human tester

- Expert validation confirmed question clarity and solvability

## Benchmark Integration

### Artificial Analysis Intelligence Index

As of August 2025, AA-LCR became one of eight core evaluations in the Artificial Analysis Intelligence Index v2.2:[&#91;4&#93;](#cite_note-aa_intelligence-4)

| Benchmark | Category | Type |
| --- | --- | --- |
| [MMLU-Pro](/wiki/mmlu-pro) | Knowledge & Reasoning | Standard |
| [GPQA Diamond](/wiki/gpqa_diamond) | Scientific reasoning | Standard |
| [HLE (Humanity's Last Exam)](/index.php?title=HLE_(Humanity%27s_Last_Exam)&action=edit&redlink=1) | Frontier knowledge | Standard |
| [AIME 2025](/wiki/aime_2025) | Mathematics | Standard |
| [IFBench](/wiki/ifbench) | Instruction following | Standard |
| [LiveCodeBench](/wiki/livecodebench) | Code generation | Standard |
| [SciCode](/wiki/scicode) | Scientific computing | Standard |
| AA-LCR | Long context reasoning | Standard |

### Comparison with Other Benchmarks

| Aspect | AA-LCR | Needle in Haystack | Traditional Benchmarks |
| --- | --- | --- | --- |
| Context Length | ~100k tokens | Variable | <10k tokens |
| Task Type | Multi-document reasoning | Simple retrieval | Single-document QA |
| Document Source | Real-world professional | Synthetic | Academic/synthetic |
| Reasoning Requirement | Essential | Minimal | Variable |
| Human Performance | 40-60% | Near 100% | 80-90% |
| Synthesis Required | Yes, across documents | No | Rarely |

## Task Categories and Examples

### Task Types

Based on the document analysis, AA-LCR questions fall into several categories:[&#91;5&#93;](#cite_note-efficient_coder-5)

| Task Type | Description | Example Focus | Required Skills |
| --- | --- | --- | --- |
| Financial Analysis | Comparing metrics across earnings reports | Revenue trends, margin calculations | Numerical reasoning, trend analysis |
| Temporal Tracking | Following changes over time periods | Quarter-over-quarter comparisons | Time-series analysis |
| Regulatory Compliance | Understanding policy requirements | EU AI Act provisions | Legal comprehension |
| Data Synthesis | Integrating survey and statistical data | Market research compilation | Statistical reasoning |
| Competitive Analysis | Comparing company strategies | Market positioning assessment | Strategic thinking |
| Technical Documentation | Understanding complex specifications | System requirements analysis | Technical comprehension |

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact | Mitigation Strategy |
| --- | --- | --- | --- |
| English Only | Single language focus | Limited global applicability | Multilingual version planned |
| Document Types | 7 categories only | May miss some domains | Expansion under consideration |
| Static Dataset | Fixed 100 questions | Potential for overfitting | Dynamic generation explored |
| Text Only | No multimodal content | Limited to text reasoning | Multimodal integration planned |
| Binary Scoring | Right/wrong answers only | Misses partial credit | Gradient scoring considered |
| Token Measurement | Single tokenizer (cl100k_base) | May disadvantage some models | Multiple tokenizers possible |

### Known Challenges

- **Computational Cost**: Running full benchmark requires significant compute resources

- **Time Requirements**: Complete evaluation can take hours depending on model

- **Output Variability**: Models produce vastly different output token counts (2.7M to 22K)

- **Evaluation Consistency**: LLM-based checker may have edge cases

## Future Directions

### Planned Improvements

Artificial Analysis has indicated several potential improvements:[&#91;1&#93;](#cite_note-aa_main-1)

1. **Expanded Categories**: Additional document types including technical manuals, medical records, and scientific data
2. **Multilingual Support**: Documents in multiple languages to test cross-lingual reasoning
3. **Dynamic Generation**: Procedurally generated questions to prevent overfitting
4. **Multimodal Integration**: Including charts, tables, images, and diagrams
5. **Gradient Scoring**: Partial credit for reasoning quality and approach
6. **Collaborative Tasks**: Multi-agent document analysis scenarios
7. **Version Updates**: Regular updates with new questions and documents

### Research Opportunities

- Investigation of why non-reasoning models with large contexts sometimes outperform reasoning models

- Analysis of the correlation between AA-LCR performance and real-world task success

- Development of training techniques specifically for long-context reasoning

- Study of the ~9% of tasks that even high-compute models cannot solve

## Significance

AA-LCR addresses a critical gap in evaluating AI systems' ability to perform real-world knowledge work requiring extensive document analysis. Its focus on genuine reasoning over retrieval and requirement for synthesis across multiple sources makes it particularly valuable for:[&#91;1&#93;](#cite_note-aa_main-1)

- **Industry Readiness**: Assessing readiness for professional deployment in knowledge work

- **Capability Gaps**: Identifying specific weaknesses in long-context reasoning

- **Development Guidance**: Guiding development of knowledge work assistants

- **Benchmark Standards**: Establishing benchmarks for document analysis AI

- **Real-World Bridge**: Bridging the gap between academic benchmarks and practical tasks

The benchmark's challenging nature, with even top models achieving <70% accuracy and humans scoring 40-60% on first attempts, highlights the complexity of real-world document reasoning tasks and the significant room for improvement in current AI systems.

## Related Benchmarks

- [Needle in the Haystack](/index.php?title=Needle_in_the_Haystack&action=edit&redlink=1) - Simple retrieval in long contexts

- [RULER](/index.php?title=RULER&action=edit&redlink=1) - Long context understanding

- [LongBench](/index.php?title=LongBench&action=edit&redlink=1) - Multi-task long context evaluation

- [∞Bench](/index.php?title=%E2%88%9EBench&action=edit&redlink=1) - Infinite context evaluation

- [L-Eval](/index.php?title=L-Eval&action=edit&redlink=1) - Long context language understanding

## See Also

- [Long Context Models](/index.php?title=Long_Context_Models&action=edit&redlink=1)

- [Document Understanding](/index.php?title=Document_Understanding&action=edit&redlink=1)

- [Multi-Document Summarization](/index.php?title=Multi-Document_Summarization&action=edit&redlink=1)

- [Knowledge Work Automation](/index.php?title=Knowledge_Work_Automation&action=edit&redlink=1)

- [Reasoning Benchmarks](/index.php?title=Reasoning_Benchmarks&action=edit&redlink=1)

- [Artificial Analysis](/index.php?title=Artificial_Analysis&action=edit&redlink=1)

- [Context Window Scaling](/index.php?title=Context_Window_Scaling&action=edit&redlink=1)

- [Mixture of Experts](/wiki/mixture_of_experts)

- [Chain of Thought](/index.php?title=Chain_of_Thought&action=edit&redlink=1)

- [Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1)

## References

1. 
2. 
3. 
4. 
5. 

## External Links

- [Official AA-LCR Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)

- [AA-LCR Dataset on Hugging Face](https://huggingface.co/datasets/ArtificialAnalysis/AA-LCR)

- [Artificial Analysis Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)