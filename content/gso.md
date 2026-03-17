---
title: "GSO"
slug: "gso"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Software_Engineering_Benchmarks"
  - "Code_Optimization_Benchmarks"
  - "Multi-language_Benchmarks"
  - "2025_Benchmarks"
  - "UC_Berkeley_Research"
---**

| GSO |
| --- |
| Overview |
| Full name | Global Software Optimization |
| Abbreviation | GSO |
| Description | A benchmark evaluating language models' capabilities in software performance optimization through real-world code optimization tasks |
| Release date | 2025-05 |
| Latest version | 1.0 |
| Benchmark updated | 2025-05-30 |
| Authors | [Manish Shetty](/index.php?title=Manish_Shetty&action=edit&redlink=1),&#160;[Naman Jain](/index.php?title=Naman_Jain&action=edit&redlink=1),&#160;[Jinjian Liu](/index.php?title=Jinjian_Liu&action=edit&redlink=1),&#160;[Vijay Kethanaboyina](/index.php?title=Vijay_Kethanaboyina&action=edit&redlink=1),&#160;[Koushik Sen](/index.php?title=Koushik_Sen&action=edit&redlink=1),&#160;[Ion Stoica](/index.php?title=Ion_Stoica&action=edit&redlink=1) |
| Organization | [UC Berkeley Sky Computing Lab](/index.php?title=UC_Berkeley_Sky_Computing_Lab&action=edit&redlink=1) |
| Technical Details |
| Type | [Software Optimization](/index.php?title=Software_Optimization&action=edit&redlink=1),&#160;[Code Performance](/index.php?title=Code_Performance&action=edit&redlink=1),&#160;[Multi-language Programming](/index.php?title=Multi-language_Programming&action=edit&redlink=1) |
| Modality | [Code](/index.php?title=Code&action=edit&redlink=1),&#160;[Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Performance optimization patches](/index.php?title=Performance_optimization_patches&action=edit&redlink=1) |
| Number of tasks | 102 |
| Total examples | 102 optimization tasks across 10 codebases |
| Evaluation metric | [Opt@1](/index.php?title=Opt@1&action=edit&redlink=1),&#160;[Opt@K](/index.php?title=Opt@K&action=edit&redlink=1),&#160;[Speedup ratio](/index.php?title=Speedup_ratio&action=edit&redlink=1) |
| Domains | [Scientific computing](/index.php?title=Scientific_computing&action=edit&redlink=1),&#160;[Data processing](/index.php?title=Data_processing&action=edit&redlink=1),&#160;[Image processing](/index.php?title=Image_processing&action=edit&redlink=1),&#160;[Machine learning](/wiki/machine_learning) |
| Languages | Python, C, C++, SIMD, Rust, Cython |
| Performance |
| Human performance | 100% (baseline) |
| Baseline | Expert developer optimizations |
| SOTA score | 8.8% |
| SOTA model | [O3 (high)](/index.php?title=O3_(high)&action=edit&redlink=1) |
| SOTA date | 2025-05 |
| Saturated | No |
| Resources |
| Website | [Official website](https://gso-bench.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2505.23671) |
| GitHub | [Repository](https://github.com/gso-bench/gso) |
| Dataset | [Download](https://huggingface.co/datasets/gso-bench/gso) |
| License | MIT

 |

GSO** (**Global Software Optimization**) is a comprehensive [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [language models](/index.php?title=Language_models&action=edit&redlink=1)' capabilities in developing high-performance software through optimization tasks. Released in May 2025 by researchers from [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1)'s Sky Computing Lab[&#91;1&#93;](#cite_note-gso_paper-1), GSO challenges AI systems to improve the runtime efficiency of existing codebases by generating performance-improving code patches that match or exceed human expert optimizations. The benchmark reveals that even state-of-the-art models struggle with optimization tasks, with the best model (O3) achieving only 8.8% success rate on these real-world optimization tasks, highlighting a critical gap between current AI capabilities and the demands of production software engineering.

## Overview

GSO represents a paradigm shift in evaluating AI systems for [software engineering](/index.php?title=Software_engineering&action=edit&redlink=1) tasks by focusing specifically on [performance optimization](/index.php?title=Performance_optimization&action=edit&redlink=1) rather than bug fixing or code generation. The benchmark consists of 102 challenging optimization tasks across 10 popular codebases, spanning 5 programming languages and 8 different domains[&#91;2&#93;](#cite_note-gso_website-2). Unlike traditional benchmarks that focus on correctness, GSO evaluates whether AI systems can understand and improve the performance characteristics of complex software systems, a critical capability for real-world software development.

### Motivation

The creation of GSO was motivated by several key observations:

- **Performance criticality**: Software performance optimization is essential for production systems

- **Evaluation gap**: Existing benchmarks focus on bug fixing rather than optimization

- **Real-world complexity**: Production optimizations require multi-file, multi-language changes

- **AI limitations**: Success on coding benchmarks doesn't translate to optimization capabilities

- **Industry needs**: Growing demand for AI assistance in performance engineering

## Benchmark Design

### Task Construction

GSO's tasks are derived from real optimization commits in popular open-source repositories:

| Repository | Domain | Primary Language | Example Optimizations |
| --- | --- | --- | --- |
| [NumPy](/wiki/numpy) | Scientific computing | Python/C | Vectorization, memory layout optimization |
| [Pandas](/wiki/pandas) | Data processing | Python/Cython | Algorithm improvements, caching |
| [Pillow](/index.php?title=Pillow&action=edit&redlink=1) | Image processing | Python/C | SIMD operations, buffer management |
| [Llama-CPP](/index.php?title=Llama-CPP&action=edit&redlink=1) | Machine learning | C++ | GPU optimization, parallelization |
| [scikit-learn](/wiki/scikit-learn) | Machine learning | Python/Cython | Algorithm optimization, vectorization |
| [matplotlib](/wiki/matplotlib) | Visualization | Python/C++ | Rendering optimization, caching |
| Additional repos | Various | Mixed | Domain-specific optimizations |

### Task Characteristics

Each GSO task exhibits several distinguishing features[&#91;1&#93;](#cite_note-gso_paper-1):

| Characteristic | GSO | Traditional Benchmarks | Significance |
| --- | --- | --- | --- |
| **Edit scope** | 4-15× more lines | Single function/file | Real-world complexity |
| **Language diversity** | ~60% require non-Python | Mostly single language | Systems programming skills |
| **File span** | Multiple files/modules | Usually single file | Architectural understanding |
| **Performance focus** | Primary objective | Correctness only | Different skill set |
| **Solution space** | Multiple valid approaches | Single correct answer | Creative problem-solving |

## Evaluation Methodology

### Performance Metrics

GSO employs rigorous performance evaluation metrics:

| Metric | Definition | Calculation | Success Threshold |
| --- | --- | --- | --- |
| **Opt@1** | Single-attempt success rate | Tasks achieving ≥95% speedup / Total tasks | ≥95% of human speedup |
| **Opt@K** | Best-of-K success rate | Tasks with any success in K attempts / Total tasks | ≥95% of human speedup |
| **Speedup Ratio** | Performance improvement | Optimized runtime / Original runtime | Lower is better |
| **Edit Distance** | Solution complexity | Lines changed in patch | Informational only |

### Evaluation Pipeline

The GSO evaluation process follows a structured pipeline:

1. **Task Initialization**: Load problem specification and performance tests
2. **Agent Execution**: Generate optimization patch within resource limits
3. **Correctness Validation**: Ensure patch doesn't break functionality
4. **Performance Measurement**: Compare runtime against baseline
5. **Success Determination**: Check if 95% threshold met

### Automated Test Generation

GSO introduces an innovative automated pipeline for generating performance tests[&#91;3&#93;](#cite_note-gso_berkeley-3):

```python

1. 

def generate_performance_test(repo, commit):

   # Step 1: Extract optimization commit using LLMs
   opt_commit = extract_optimization_commit(repo, commit)
   
   # Step 2: Identify affected APIs
   apis = identify_apis(opt_commit)
   
   # Step 3: Generate performance test
   test = generate_test_for_apis(apis)
   
   # Step 4: Validate test execution
   validate_test(test, repo, commit)
   
   return test

```

## Current Performance

### Model Leaderboard (May 2025)

| Rank | Model | Opt@1 | Opt@8 | Avg Speedup | Languages Handled |
| --- | --- | --- | --- | --- | --- |
| 1 | [O3](/index.php?title=O3&action=edit&redlink=1) (high) | 8.8% | ~20% | 0.91× | All |
| 2 | [Claude-4-Opus](/index.php?title=Claude-4-Opus&action=edit&redlink=1)/[Claude-4-Sonnet](/index.php?title=Claude-4-Sonnet&action=edit&redlink=1) | 4.9% | ~15% | 0.92× | All |
| 3 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | <5% | <10% | 0.95× | Python-heavy |
| 4 | [O1-preview](/index.php?title=O1-preview&action=edit&redlink=1) | <5% | <8% | 0.96× | Limited |
| 5 | [DeepSeek-V3](/index.php?title=DeepSeek-V3&action=edit&redlink=1) | <5% | <5% | 0.98× | Python only |
| - | Human Expert | 100% | 100% | 1.0× | All |

### Performance Analysis by Task Type

| Task Category | Human Success | Best AI | Gap |
| --- | --- | --- | --- |
| **Algorithm optimization** | 100% | 8% | 92% |
| **Memory management** | 100% | 3% | 97% |
| **Parallelization** | 100% | 2% | 98% |
| **SIMD/Vectorization** | 100% | 0% | 100% |
| **Caching strategies** | 100% | 5% | 95% |

## Key Findings

### Failure Mode Analysis

GSO reveals systematic failure patterns in current AI systems[&#91;1&#93;](#cite_note-gso_paper-1):

| Failure Mode | Frequency | Description | Example |
| --- | --- | --- | --- |
| **Abstraction hierarchy** | 25-30% | Avoiding necessary low-level changes | Refusing to modify C code when needed |
| **Lazy optimization** | 30% | Preferring trivial changes | Adding simple caching instead of algorithmic improvements |
| **Premature termination** | 75% | Not using full compute budget | Stopping after 25% of allowed steps |
| **Cross-language barriers** | 60% | Inability to work across languages | Python-only solutions for C++ problems |
| **Performance blindness** | 40% | No understanding of performance implications | Random changes without profiling |

### Scaling Laws

GSO provides insights into compute scaling for optimization tasks:

| Scaling Type | Performance Impact | Efficiency | Recommendation |
| --- | --- | --- | --- |
| **Parallel (multiple rollouts)** | Moderate improvement | Good | Preferred approach |
| **Serial (longer reasoning)** | Minimal improvement | Poor | Not recommended |
| **Hybrid approaches** | Best results | Moderate | Future research direction |
| **Increased model size** | Limited benefit | Poor | Not sufficient alone |

## Technical Implementation

### Installation and Setup

GSO provides comprehensive tooling for evaluation:

```bash

1. 

curl -LsSf [https://astral.sh/uv/install.sh](https://astral.sh/uv/install.sh) | sh
source $HOME/.local/bin/env

1. 

git clone [https://github.com/gso-bench/gso.git](https://github.com/gso-bench/gso.git)
cd gso

1. 

uv venv && source .venv/bin/activate
uv sync

1. 

python scripts/prepare_docker_images.py
```

### Dataset Access

The GSO dataset is available through multiple channels[&#91;4&#93;](#cite_note-gso_huggingface-4):

```python
from datasets import load_dataset

1. 

gso_dataset = load_dataset('gso-bench/gso', split='test')

1. 

for task in gso_dataset:

   instance_id = task['instance_id']
   repo = task['repo']
   optimization_commit = task['opt_commit']
   performance_tests = task['tests']

```

### Task Structure

Each GSO task contains:

| Field | Description | Example |
| --- | --- | --- |
| `instance_id` | Unique identifier | "numpy__numpy-12345" |
| `repo` | Repository name | "numpy/numpy" |
| `base_commit` | Starting commit | "abc123..." |
| `opt_commit` | Target optimization | "def456..." |
| `api` | Affected functions | ["np.dot", "np.matmul"] |
| `prob_script` | Problem specification | Performance test code |
| `tests` | Validation tests | Unit and performance tests |
| `hints_text` | Optimization hints | "Consider vectorization" |
| `gt_diff` | Ground truth patch | Actual optimization changes |

## Significance and Impact

### Research Implications

GSO's findings have significant implications for AI research:

1. **Capability gap**: Reveals fundamental limitations in current AI systems
2. **New research directions**: Highlights need for specialized optimization models
3. **Evaluation standards**: Establishes rigorous benchmarks for performance tasks
4. **Scaling insights**: Provides data on compute scaling effectiveness

### Industry Applications

| Application Area | Current State | GSO Insights | Future Potential |
| --- | --- | --- | --- |
| **Code review** | AI assists with style | Performance blind spots | Performance-aware review |
| **CI/CD pipelines** | Basic automation | Cannot optimize | Automated optimization |
| **Legacy modernization** | Manual process | AI struggles with complexity | Guided optimization |
| **Performance debugging** | Limited AI help | Poor understanding | Improved tools needed |

## Related Work

### Comparison with Other Benchmarks

| Benchmark | Focus | Task Count | Languages | GSO Advantage |
| --- | --- | --- | --- | --- |
| [SWE-Bench](/index.php?title=SWE-Bench&action=edit&redlink=1) | Bug fixing | 2,294 | Python | 4-15× more complex edits |
| [HumanEval](/wiki/humaneval) | Code generation | 164 | Python | Real-world optimization |
| [MBPP](/index.php?title=MBPP&action=edit&redlink=1) | Programming problems | 974 | Python | Performance focus |
| [LiveCodeBench](/wiki/livecodebench) | General coding | Variable | Multiple | Optimization specific |
| **GSO** | Performance optimization | 102 | 6 languages | Unique focus area |

## Limitations and Future Work

### Current Limitations

1. **Limited scale**: 102 tasks may not cover all optimization patterns
2. **Domain coverage**: Focus on specific repositories
3. **Language bias**: Heavy emphasis on Python ecosystem
4. **Measurement challenges**: Performance can be hardware-dependent
5. **Single-shot evaluation**: No iterative refinement allowed

### Future Directions

| Direction | Description | Timeline |
| --- | --- | --- |
| **Expanded coverage** | More repositories and languages | 2025-2026 |
| **Interactive mode** | Allow iterative optimization | 2026 |
| **Hardware diversity** | GPU, TPU optimization tasks | 2026 |
| **Specialized models** | Optimization-focused architectures | Research ongoing |
| **Industry integration** | Real production systems | 2026-2027 |

## Significance

GSO represents a critical advancement in evaluating AI systems for real-world software engineering tasks. By focusing on performance optimization, a skill essential for production software development, the benchmark reveals that current AI systems, despite their impressive capabilities in code generation and bug fixing, fundamentally lack the understanding necessary for effective software optimization. The stark performance gap (less than 5% success rate for best models) highlights both the challenge ahead and the potential impact of solving this problem.

The benchmark's rigorous evaluation methodology, automated test generation pipeline, and focus on real-world complexity make it an essential tool for advancing AI capabilities in software engineering. As software performance becomes increasingly critical in the era of cloud computing and mobile devices, GSO provides the foundation for developing AI systems that can truly assist with the full spectrum of software development tasks.

## See Also

- [Software Optimization](/index.php?title=Software_Optimization&action=edit&redlink=1)

- [Performance Engineering](/index.php?title=Performance_Engineering&action=edit&redlink=1)

- [SWE-Bench](/index.php?title=SWE-Bench&action=edit&redlink=1)

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1)

- [Sky Computing Lab](/index.php?title=Sky_Computing_Lab&action=edit&redlink=1)

- [Multi-language Programming](/index.php?title=Multi-language_Programming&action=edit&redlink=1)

- [Benchmark Evaluation](/index.php?title=Benchmark_Evaluation&action=edit&redlink=1)

## References

1. 
2. 
3. 
4. 

Cite error: `<ref>` tag with name "gso_github" defined in `<references>` is not used in prior text.