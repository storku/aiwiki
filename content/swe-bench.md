---
title: "SWE-bench"
slug: "swe-bench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Software_Engineering"
  - "Code_Generation"
  - "Natural_Language_Processing"
  - "2023_in_artificial_intelligence"
---**

| SWE-bench |
| --- |
| Overview |
| Full name | Software Engineering Benchmark |
| Abbreviation | SWE-bench |
| Description | A benchmark for evaluating [large language models](/wiki/large_language_model) and AI agents on real-world software engineering tasks from GitHub
Property "Description" (as page type) with input value "A benchmark for evaluating [large language models](/wiki/large_language_model) and AI agents on real-world software engineering tasks from GitHub" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| Release date | 2023-10-10 |
| Latest version | SWE-bench Live |
| Benchmark updated | 2025-08-19 |
| Authors | [Carlos E. Jimenez](/index.php?title=Carlos_E._Jimenez&action=edit&redlink=1), [John Yang](/index.php?title=John_Yang&action=edit&redlink=1), [Alexander Wettig](/index.php?title=Alexander_Wettig&action=edit&redlink=1), [Shunyu Yao](/index.php?title=Shunyu_Yao&action=edit&redlink=1), [Kexin Pei](/index.php?title=Kexin_Pei&action=edit&redlink=1), [Ofir Press](/index.php?title=Ofir_Press&action=edit&redlink=1), [Karthik Narasimhan](/index.php?title=Karthik_Narasimhan&action=edit&redlink=1) |
| Organization | [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), [University of Chicago](/index.php?title=University_of_Chicago&action=edit&redlink=1), [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Software Engineering](/index.php?title=Software_Engineering&action=edit&redlink=1), [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Bug Fixing](/index.php?title=Bug_Fixing&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [Issue resolution, Code editing](/index.php?title=Issue_resolution,_Code_editing&action=edit&redlink=1) |
| Number of tasks | 2294 |
| Total examples | 2294 (Full), 500 (Verified), 300 (Lite), 517 (Multimodal), 1319 (Live) |
| Evaluation metric | [% Resolved](/index.php?title=%25_Resolved&action=edit&redlink=1), [Test Pass Rate](/index.php?title=Test_Pass_Rate&action=edit&redlink=1) |
| Domains | [Software Engineering](/index.php?title=Software_Engineering&action=edit&redlink=1), [Python Programming](/index.php?title=Python_Programming&action=edit&redlink=1), [Open Source Development](/index.php?title=Open_Source_Development&action=edit&redlink=1) |
| Languages | Python, English |
| Performance |
| Baseline | 1.96 |
| SOTA score | 74.5 |
| SOTA model | [Claude 4.1 Opus](/index.php?title=Claude_4.1_Opus&action=edit&redlink=1) |
| SOTA date | 2025-08-02 |
| Saturated | No |
| Resources |
| Website | [Official website](https://www.swebench.com/) |
| Paper | [Paper](https://arxiv.org/abs/2310.06770) |
| GitHub | [Repository](https://github.com/princeton-nlp/SWE-bench) |
| Dataset | [Download](https://huggingface.co/datasets/princeton-nlp/SWE-bench) |
| License | MIT License

 |

SWE-bench** (Software Engineering Benchmark) is a comprehensive [benchmark](/wiki/benchmark) designed to evaluate [large language models](/wiki/large_language_model) and [AI agents](/index.php?title=AI_agents&action=edit&redlink=1) on their ability to solve real-world [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) tasks. Released on October 10, 2023 by researchers at [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), SWE-bench tests whether AI systems can autonomously resolve genuine [GitHub](/index.php?title=GitHub&action=edit&redlink=1) issues from popular [open-source](/index.php?title=Open-source&action=edit&redlink=1) repositories. The benchmark has become the de facto standard for evaluating AI-powered software engineering capabilities, with over 2 million downloads and adoption by leading AI research organizations worldwide.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-website-2)

## Overview

SWE-bench represents a paradigm shift in evaluating [code generation](/index.php?title=Code_generation&action=edit&redlink=1) capabilities of AI systems. Unlike traditional benchmarks that focus on isolated coding problems, SWE-bench presents AI agents with complete [codebases](/index.php?title=Codebases&action=edit&redlink=1) and actual bug reports or feature requests from real software projects. This approach tests not just code writing abilities, but also [code comprehension](/index.php?title=Code_comprehension&action=edit&redlink=1), [debugging](/index.php?title=Debugging&action=edit&redlink=1), [testing](/index.php?title=Testing&action=edit&redlink=1), and the ability to navigate complex software architectures.[&#91;1&#93;](#cite_note-arxiv-1)

The benchmark addresses a critical gap in AI evaluation by measuring performance on tasks that professional [software engineers](/index.php?title=Software_engineers&action=edit&redlink=1) encounter daily. Each task in SWE-bench requires understanding issue descriptions, identifying relevant files in large codebases, implementing appropriate fixes, and ensuring that all tests pass - mirroring the complete software development workflow.

### Key Characteristics

SWE-bench distinguishes itself through several unique features:

- **Real-world authenticity**: All tasks are derived from actual GitHub issues and their corresponding pull requests

- **Execution-based evaluation**: Solutions are validated using the repository's own test suites, not just code similarity metrics

- **Multi-file coordination**: Tasks often require changes across multiple files, classes, and functions

- **Large context handling**: AI agents must process repositories with thousands of files and millions of lines of code

- **Continuous updates**: New instances can be added to prevent [training data contamination](/index.php?title=Training_data_contamination&action=edit&redlink=1)

## Methodology

### Task Construction

SWE-bench tasks are constructed through a systematic process:[&#91;1&#93;](#cite_note-arxiv-1)

1. **Issue Selection**: Real issues from popular Python repositories are identified along with their corresponding pull requests that resolved them

2. **Test Identification**: The benchmark identifies tests that transition from failing to passing when the fix is applied (FAIL_TO_PASS tests)

3. **Environment Setup**: Each task includes the exact repository state before the fix was applied

4. **Validation**: Solutions are verified using both the specific fix tests and regression tests (PASS_TO_PASS tests)

### Evaluation Framework

The evaluation process employs a sophisticated infrastructure:[&#91;3&#93;](#cite_note-github-3)

- **Containerized Environments**: Each evaluation runs in an isolated [Docker](/index.php?title=Docker&action=edit&redlink=1) container with the appropriate dependencies

- **Automated Testing**: Solutions are automatically tested using the repository's test suite

- **Time Limits**: Agents typically have 45 minutes to complete each task

- **Reset Mechanism**: All files are reset to their original state after each agent run

The primary evaluation metric is the **% Resolved** rate - the percentage of tasks where the agent successfully implements a solution that passes all required tests.

## Benchmark Variants

SWE-bench has evolved into multiple specialized variants to address different evaluation needs:

### SWE-bench Full

The original benchmark containing 2,294 task instances across 12 popular [Python](/index.php?title=Python&action=edit&redlink=1) repositories. This represents the most comprehensive and challenging evaluation set, requiring agents to handle the full complexity of real-world software development.[&#91;1&#93;](#cite_note-arxiv-1)

### SWE-bench Verified

Released in collaboration with [OpenAI](/wiki/openai), this variant contains 500 human-validated instances verified by 93 experienced Python developers. Each task was carefully reviewed to ensure:[&#91;4&#93;](#cite_note-verified-4)

- Clear problem descriptions

- Unambiguous solutions

- Proper test coverage

- Reasonable difficulty levels

### SWE-bench Lite

A curated subset of 300 instances designed for more efficient evaluation. These tasks focus on self-contained functional bug fixes that can be resolved with targeted code changes. SWE-bench Lite has become popular for rapid prototyping and frequent evaluation cycles.[&#91;5&#93;](#cite_note-lite-5)

### SWE-bench Multimodal

Introduced in October 2024, this variant contains 517 instances that include visual elements such as:[&#91;6&#93;](#cite_note-multimodal-6)

- Diagrams and charts

- UI screenshots

- Error visualizations

- Architecture diagrams

This variant tests whether AI systems can integrate visual information when solving software engineering tasks.

### SWE-bench Live

The most recent variant containing 1,319 task instances created after 2024, covering 93 repositories. This ensures evaluation on problems that couldn't have been in any model's training data.[&#91;7&#93;](#cite_note-live-7)

## Task Categories and Complexity

SWE-bench tasks span various categories of software engineering challenges:

### Bug Fixes

The majority of tasks involve fixing bugs in existing code. These range from simple logic errors to complex multi-component issues requiring deep understanding of system architecture.

### Feature Implementation

Some tasks require implementing new features based on user requests, testing the ability to extend existing codebases while maintaining compatibility.

### Performance Optimization

Tasks may involve improving code efficiency, reducing memory usage, or optimizing algorithms while maintaining correctness.

### Test Writing

Certain instances require writing or improving test cases, evaluating understanding of [test-driven development](/index.php?title=Test-driven_development&action=edit&redlink=1) practices.

### Documentation Updates

Some tasks involve updating documentation to match code changes, testing comprehensive software maintenance abilities.

## Performance Results

### Current Leaderboard (August 2025)

Performance on SWE-bench has improved dramatically since its release:

#### SWE-bench Verified Top 10

| Rank | Model | Organization | % Resolved | Date |
| --- | --- | --- | --- | --- |
| 1 | [Claude](/wiki/claude) 4.1 Opus | [Anthropic](/wiki/anthropic) | 74.5% | 2025-08-02 |
| 2 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) (medium reasoning) | [OpenAI](/wiki/openai) | 65.00% | 2025-08-07 |
| 3 | [Claude](/wiki/claude) 4 Sonnet | [Anthropic](/wiki/anthropic) | 64.93% | 2025-05-21 |
| 4 | [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) mini (medium reasoning) | [OpenAI](/wiki/openai) | 59.80% | 2025-08-07 |
| 5 | [o3](/index.php?title=O3&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 58.40% | 2025-05-21 |
| 6 | [Qwen](/wiki/qwen)3-Coder 480B | [Alibaba](/index.php?title=Alibaba&action=edit&redlink=1) | 55.40% | 2025-08-02 |
| 7 | [Gemini](/index.php?title=Gemini&action=edit&redlink=1) 2.5 Pro | [Google](/index.php?title=Google&action=edit&redlink=1) | 53.60% | 2025-05-21 |
| 8 | [Claude](/wiki/claude) 3.7 Sonnet | [Anthropic](/wiki/anthropic) | 52.80% | 2025-05-21 |
| 9 | [o4-mini](/index.php?title=O4-mini&action=edit&redlink=1) | [OpenAI](/wiki/openai) | 45.00% | 2025-05-21 |
| 10 | [DeepSeek](/wiki/deepseek)-Coder V2.5 | [DeepSeek](/wiki/deepseek) | 43.20% | 2025-03-15 |

#### Historical Progress

The improvement in SWE-bench performance demonstrates rapid advancement in AI capabilities:

| Time Period | Best Performance | Leading Model | Key Milestone |
| --- | --- | --- | --- |
| October 2023 | 1.96% | Claude 2 | Initial benchmark release |
| March 2024 | 12.47% | SWE-agent + GPT-4 | First system above 10% |
| June 2024 | 18.00% | Devin | Commercial agent breakthrough |
| December 2024 | 43.00% | Amazon Q Developer | Enterprise adoption |
| August 2025 | 74.5% | Claude 4.1 Opus | Current state-of-the-art |

## Technical Implementation

### Infrastructure Requirements

Running SWE-bench evaluations requires:[&#91;3&#93;](#cite_note-github-3)

- **Python Environment**: Python 3.8+ with conda package manager

- **Docker**: For containerized evaluation environments

- **Compute Resources**: Minimum 16GB RAM, recommended 32GB+ for parallel evaluation

- **Storage**: Approximately 50GB for full dataset and evaluation artifacts

- **API Access**: For testing commercial models (OpenAI, Anthropic, etc.)

### Evaluation Pipeline

The standard evaluation pipeline consists of:

1. **Environment Setup**: Creating isolated Docker containers for each task

2. **Repository Initialization**: Checking out the appropriate repository version

3. **Issue Presentation**: Providing the issue description to the AI agent

4. **Code Generation**: Agent produces proposed changes

5. **Application**: Applying changes to the codebase

6. **Testing**: Running FAIL_TO_PASS and PASS_TO_PASS tests

7. **Scoring**: Computing resolution rate and other metrics

### Metrics and Scoring

SWE-bench employs several evaluation metrics:

- **% Resolved**: Primary metric measuring the percentage of successfully resolved tasks

- **Pass@k**: Success rate when allowing k attempts

- **Test Pass Rate**: Percentage of individual tests passed

- **Regression Rate**: Frequency of breaking existing functionality

- **Efficiency Metrics**: Token usage, API calls, and runtime

## Agent Architectures

Various agent architectures have been developed for SWE-bench:

### SWE-agent

The official baseline agent developed by Princeton researchers, featuring:[&#91;8&#93;](#cite_note-sweagent-8)

- Interactive bash environment

- Specialized commands for code navigation and editing

- Iterative refinement based on test feedback

- Support for multiple LLM backends

### Commercial Agents

Several commercial systems have been optimized for SWE-bench:

- **Amazon Q Developer Agent**: Achieves 37.1% on full benchmark

- **Atlassian Rovo Dev**: Current leader on full benchmark at 41.98%

- **GitHub Copilot Workspace**: Integrated development environment approach

- **Cursor AI**: IDE-based agent with human-in-the-loop capabilities

### Research Innovations

Recent research has introduced novel approaches:

- **Multi-agent systems**: Coordinating specialized agents for different subtasks

- **Retrieval-augmented generation**: Enhancing context with relevant code examples

- **Self-debugging**: Iterative refinement based on test failures

- **Tool-augmented agents**: Integration with static analysis and debugging tools

## Impact and Adoption

### Academic Impact

SWE-bench has catalyzed significant research in AI-powered software engineering:

- **ICLR 2024 Oral Presentation**: Selected for oral presentation at a top ML conference[&#91;9&#93;](#cite_note-iclr-9)

- **2+ Million Downloads**: Widespread adoption in the research community

- **50+ Research Papers**: Citing and building upon SWE-bench

- **Multiple Extensions**: Multi-lingual, multi-modal, and domain-specific variants

### Industry Adoption

Major technology companies use SWE-bench for:

- **Model Development**: Training and evaluating coding assistants

- **Product Benchmarking**: Comparing commercial offerings

- **Research Direction**: Identifying areas for improvement

- **Hiring Assessment**: Evaluating AI tool capabilities

### Open Source Contributions

The SWE-bench ecosystem has fostered:

- **Community Leaderboards**: Public tracking of model performance

- **Evaluation Tools**: Open-source frameworks for running evaluations

- **Dataset Extensions**: Community-contributed task instances

- **Agent Implementations**: Diverse approaches to solving SWE-bench tasks

## Limitations and Challenges

Despite its success, SWE-bench has known limitations:

### Python-Centric Focus

Currently limited to Python repositories, not representing the full diversity of programming languages and paradigms used in industry.

### Repository Selection Bias

The 12 selected repositories may not represent all software engineering domains and complexity levels.

### Test Quality Dependency

Evaluation quality depends on the completeness and correctness of repository test suites.

### Computational Requirements

Full evaluation requires significant computational resources, limiting accessibility for some researchers.

## Future Directions

The SWE-bench team and community are working on several extensions:

### Multi-Language Support

- **Multi-SWE-bench**: Extending to Java, JavaScript, and other languages[&#91;10&#93;](#cite_note-multi-10)

- **Cross-language tasks**: Problems requiring polyglot programming skills

### Enhanced Evaluation

- **Human evaluation protocols**: Supplementing automated metrics

- **Code quality metrics**: Beyond just functional correctness

- **Security and performance**: Evaluating non-functional requirements

### Real-Time Evaluation

- **Continuous benchmarking**: Regular evaluation on fresh issues

- **Live deployment testing**: Evaluation in production-like environments

- **User study integration**: Incorporating developer feedback

## Related Benchmarks

SWE-bench complements other code generation and software engineering benchmarks:

- **[HumanEval](/wiki/humaneval)**: Isolated Python programming problems

- **[MBPP](/index.php?title=MBPP&action=edit&redlink=1)**: Mostly basic Python programming tasks

- **[CodeContests](/index.php?title=CodeContests&action=edit&redlink=1)**: Competitive programming challenges

- **[DS-1000](/index.php?title=DS-1000&action=edit&redlink=1)**: Data science coding problems

- **[RepoEval](/index.php?title=RepoEval&action=edit&redlink=1)**: Repository-level code completion

- **[CrossCodeEval](/index.php?title=CrossCodeEval&action=edit&redlink=1)**: Cross-file code completion

## See Also

- [Software engineering](/index.php?title=Software_engineering&action=edit&redlink=1)

- [Code generation](/index.php?title=Code_generation&action=edit&redlink=1)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [AI agents](/index.php?title=AI_agents&action=edit&redlink=1)

- [GitHub](/index.php?title=GitHub&action=edit&redlink=1)

- [Test-driven development](/index.php?title=Test-driven_development&action=edit&redlink=1)

- [Automated debugging](/index.php?title=Automated_debugging&action=edit&redlink=1)

- [Program synthesis](/index.php?title=Program_synthesis&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arxiv_1-0) [1.1](#cite_ref-arxiv_1-1) [1.2](#cite_ref-arxiv_1-2) [1.3](#cite_ref-arxiv_1-3) Jimenez, Carlos E., et al. "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" arXiv preprint arXiv:2310.06770 (2023). Cite error: Invalid `<ref>` tag; name "arxiv" defined multiple times with different content

2. [↑](#cite_ref-website_2-0) SWE-bench Official Website. [https://www.swebench.com/](https://www.swebench.com/) Accessed August 2025.

3. ↑ [3.0](#cite_ref-github_3-0) [3.1](#cite_ref-github_3-1) SWE-bench GitHub Repository. [https://github.com/princeton-nlp/SWE-bench](https://github.com/princeton-nlp/SWE-bench) Accessed August 2025.

4. [↑](#cite_ref-verified_4-0) OpenAI. "SWE-bench Verified: A Human-Validated Subset." 2024. Cite error: Invalid `<ref>` tag; name "verified" defined multiple times with different content

5. [↑](#cite_ref-lite_5-0) Princeton NLP. "SWE-bench Lite Documentation." 2024. Cite error: Invalid `<ref>` tag; name "lite" defined multiple times with different content

6. [↑](#cite_ref-multimodal_6-0) Yang, John, et al. "SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?" arXiv:2410.03859 (2024). Cite error: Invalid `<ref>` tag; name "multimodal" defined multiple times with different content

7. [↑](#cite_ref-live_7-0) Jimenez, Carlos E., et al. "SWE-bench Goes Live!" arXiv:2505.23419 (2025). Cite error: Invalid `<ref>` tag; name "live" defined multiple times with different content

8. [↑](#cite_ref-sweagent_8-0) Yang, John, et al. "SWE-agent: Agent-Computer Interfaces for Software Engineering." 2024. Cite error: Invalid `<ref>` tag; name "sweagent" defined multiple times with different content

9. [↑](#cite_ref-iclr_9-0) ICLR 2024. "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" Oral Presentation. Cite error: Invalid `<ref>` tag; name "iclr" defined multiple times with different content

10. [↑](#cite_ref-multi_10-0) Chen, et al. "Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving." arXiv:2504.02605 (2025). Cite error: Invalid `<ref>` tag; name "multi" defined multiple times with different content

## External Links

- [Official SWE-bench Website](https://www.swebench.com/)

- [SWE-bench GitHub Repository](https://github.com/princeton-nlp/SWE-bench)

- [SWE-bench Dataset on Hugging Face](https://huggingface.co/datasets/princeton-nlp/SWE-bench)

- [SWE-bench Paper on arXiv](https://arxiv.org/abs/2310.06770)

- [SWE-agent Official Website](https://swe-agent.com/)