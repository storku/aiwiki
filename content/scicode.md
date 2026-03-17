---
title: "SciCode"
slug: "scicode"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Scientific_Computing_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "2024_Benchmarks"
  - "Research_Benchmarks"
  - "Domain-Specific_Benchmarks"
---**

| SciCode |
| --- |
| Overview |
| Full name | Scientific Code Benchmark |
| Abbreviation | SciCode |
| Description | A research coding benchmark curated by scientists for realistic scientific problem-solving |
| Release date | 2024-07 |
| Latest version | 1.0 |
| Benchmark updated | 2025-01 |
| Authors | [Minyang Tian](/index.php?title=Minyang_Tian&action=edit&redlink=1), [Luyu Gao](/index.php?title=Luyu_Gao&action=edit&redlink=1), [Et al.](/index.php?title=Et_al.&action=edit&redlink=1) |
| Organization | [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), [Carnegie Mellon University](/index.php?title=Carnegie_Mellon_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Scientific Computing](/index.php?title=Scientific_Computing&action=edit&redlink=1), [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1) |
| Modality | [Text (Code)](/index.php?title=Text_(Code)&action=edit&redlink=1) |
| Task format | [Code synthesis for scientific problems](/index.php?title=Code_synthesis_for_scientific_problems&action=edit&redlink=1) |
| Number of tasks | 80 main problems (338 subproblems) |
| Total examples | 338 |
| Evaluation metric | [Success rate](/index.php?title=Success_rate&action=edit&redlink=1), [Correctness](/index.php?title=Correctness&action=edit&redlink=1) |
| Domains | [Physics](/index.php?title=Physics&action=edit&redlink=1), [Math](/index.php?title=Math&action=edit&redlink=1), [Biology](/index.php?title=Biology&action=edit&redlink=1), [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1), [Materials Science](/index.php?title=Materials_Science&action=edit&redlink=1), [Ecology](/index.php?title=Ecology&action=edit&redlink=1) |
| Languages | Python (primarily) |
| Performance |
| Human performance | Not reported |
| Baseline | <1% (random)
Property "Baseline score" (as page type) with input value "" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA score | 7.7% |
| SOTA model | [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) |
| SOTA date | 2024-10 |
| Saturated | No |
| Resources |
| Website | [Official website](https://scicode-bench.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2407.13168) |
| GitHub | [Repository](https://github.com/scicode-bench/SciCode) |
| Dataset | [Download](https://github.com/scicode-bench/SciCode) |
| License | MIT

 |

SciCode** is a challenging [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' capabilities in generating code for solving realistic scientific research problems. Released in July 2024 through collaboration between [Princeton University](/index.php?title=Princeton_University&action=edit&redlink=1), [Carnegie Mellon University](/index.php?title=Carnegie_Mellon_University&action=edit&redlink=1), and scientists from 16 diverse natural science sub-fields, SciCode represents a paradigm shift from exam-like questions to real research problems that scientists encounter in their everyday workflow.

## Overview

SciCode addresses a critical gap in evaluating AI systems' ability to assist with scientific research by presenting problems drawn from actual scripts that scientists use in their research, many of which have been used in published papers. Unlike traditional coding benchmarks that focus on algorithmic challenges or software engineering tasks, SciCode requires deep integration of domain knowledge, mathematical reasoning, and computational implementation.

### Motivation

The development of SciCode was motivated by several key observations:

- Existing benchmarks fail to capture the complexity of real scientific computing

- Scientists need AI assistants capable of implementing research-grade computational methods

- Current models struggle with problems requiring deep domain expertise

- The gap between exam-style problems and actual research implementation

- Need for benchmarking progress toward AI systems that can meaningfully assist scientific discovery

The benchmark specifically targets the evaluation of models' ability to transform scientific concepts and mathematical formulations into working computational code.

## Technical Specifications

### Domain Coverage

SciCode covers 6 main scientific domains with 16 specialized subdomains:

| Main Domain | Subdomains | Problem Count | Key Topics |
| --- | --- | --- | --- |
| [Physics](/index.php?title=Physics&action=edit&redlink=1) | Computational Physics, Optics, Condensed Matter | ~60 | Simulations, quantum mechanics, statistical physics |
| [Mathematics](/index.php?title=Mathematics&action=edit&redlink=1) | Numerical Linear Algebra, PDEs, Optimization | ~50 | Matrix computations, differential equations, algorithms |
| [Chemistry](/index.php?title=Chemistry&action=edit&redlink=1) | Quantum Chemistry, Computational Chemistry | ~50 | Molecular dynamics, electronic structure |
| [Biology](/index.php?title=Biology&action=edit&redlink=1) | Ecology, Bioinformatics, Systems Biology | ~50 | Population dynamics, sequence analysis |
| [Materials Science](/index.php?title=Materials_Science&action=edit&redlink=1) | Semiconductor Materials, Crystallography | ~40 | Band structure, material properties |
| [Earth Science](/index.php?title=Earth_Science&action=edit&redlink=1) | Geophysics, Climatology | ~38 | Climate models, seismic analysis |

### Problem Structure

Each main problem in SciCode is decomposed into multiple subproblems:

| Component | Description | Count |
| --- | --- | --- |
| Main Problems | Complete scientific challenges | 80 |
| Subproblems | Decomposed implementation steps | 338 |
| Test Cases | Scientist-annotated validations | ~1000 |
| Gold Solutions | Reference implementations | 338 |

### Problem Characteristics

| Characteristic | Description | Example |
| --- | --- | --- |
| Knowledge Recall | Retrieving domain-specific facts | Physical constants, equations |
| Mathematical Reasoning | Deriving and manipulating formulas | Solving differential equations |
| Algorithm Design | Creating computational approaches | Numerical integration methods |
| Code Synthesis | Implementing solutions in code | Python implementations |
| Validation | Verifying correctness | Comparing with analytical solutions |

## Evaluation Methodology

### Evaluation Settings

SciCode offers two primary evaluation configurations:

| Setting | Description | Background Knowledge | Difficulty |
| --- | --- | --- | --- |
| Standard | No additional context provided | None | Highest |
| With Background | Scientist-annotated context included | Domain-specific hints | Moderate |

### Scoring System

| Metric | Description | Calculation |
| --- | --- | --- |
| Overall Success Rate | Percentage of correctly solved problems | (Solved problems / Total) × 100% |
| Domain Success Rate | Performance per scientific field | (Domain solved / Domain total) × 100% |
| Subproblem Accuracy | Correctness at subproblem level | (Correct subproblems / 338) × 100% |
| Test Case Pass Rate | Percentage of passing test cases | (Passed tests / Total tests) × 100% |

### Validation Process

SciCode employs rigorous validation:
1. **Test Case Execution**: Running generated code against scientist-created test cases
2. **Numerical Verification**: Checking numerical accuracy within specified tolerances
3. **Output Format Validation**: Ensuring correct data structures and formats
4. **Performance Checks**: Verifying computational efficiency where relevant

## Performance Analysis

### Current Leaderboard (2024-2025)

| Rank | Model | Success Rate (Standard) | Success Rate (w/ Background) | Organization |
| --- | --- | --- | --- | --- |
| 1 | [OpenAI o1-preview](/index.php?title=OpenAI_o1-preview&action=edit&redlink=1) | 7.7% | 15.2% | OpenAI |
| 2 | [OpenAI o1-mini](/index.php?title=OpenAI_o1-mini&action=edit&redlink=1) | 5.8% | 11.3% | OpenAI |
| 3 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 4.6% | 9.8% | Anthropic |
| 4 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 3.9% | 8.7% | OpenAI |
| 5 | [DeepSeek-R1](/index.php?title=DeepSeek-R1&action=edit&redlink=1) | ~3.5% | ~8.2% | DeepSeek |
| 6 | [DeepSeek-V3](/index.php?title=DeepSeek-V3&action=edit&redlink=1) | ~3.2% | ~7.8% | DeepSeek |
| 7 | [GPT-4 Turbo](/index.php?title=GPT-4_Turbo&action=edit&redlink=1) | 2.8% | 6.5% | OpenAI |
| 8 | [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | 2.5% | 5.9% | Anthropic |

### Performance Insights

#### Domain-Specific Performance

| Domain | Best Model Performance | Average Performance | Difficulty Rating |
| --- | --- | --- | --- |
| Mathematics | 12% | 5% | High |
| Physics | 8% | 3% | Very High |
| Chemistry | 6% | 2% | Very High |
| Biology | 7% | 3% | High |
| Materials Science | 5% | 2% | Very High |
| Earth Science | 4% | 1.5% | Very High |

#### Key Challenges

- **Domain Knowledge Gap**: Models lack deep scientific understanding

- **Mathematical Complexity**: Difficulty with advanced mathematical derivations

- **Implementation Details**: Struggle with numerical methods and algorithms

- **Integration Challenge**: Combining multiple concepts into working solutions

## Notable Problems

### Example Categories

| Category | Example Problem | Required Knowledge |
| --- | --- | --- |
| Quantum Mechanics | Solving Schrödinger equation numerically | Wave functions, numerical methods |
| Molecular Dynamics | Simulating protein folding | Force fields, integration algorithms |
| Climate Modeling | Implementing radiative transfer | Atmospheric physics, numerical schemes |
| Population Dynamics | Predator-prey models | Differential equations, ecology |
| Crystal Structures | Computing band structures | Solid state physics, linear algebra |
| Signal Processing | Implementing FFT variants | Mathematics, algorithms |

### Nobel Prize Methods

SciCode includes problems based on Nobel Prize-winning scientific methods, highlighting the benchmark's connection to groundbreaking research:

- Density Functional Theory calculations

- Monte Carlo simulations

- Molecular dynamics implementations

- Quantum mechanical computations

## Implementation

### Installation and Setup

```bash

1. Clone the repository

git clone [https://github.com/scicode-bench/SciCode](https://github.com/scicode-bench/SciCode)
cd SciCode

1. Install dependencies

pip install -r requirements.txt

1. Download dataset

python download_data.py
```

### Running Evaluations

```python

1. Basic evaluation

from scicode import SciCodeBench

1. Initialize benchmark

benchmark = SciCodeBench()

1. Evaluate without background

results_standard = benchmark.evaluate(

   model='gpt-4',
   setting='standard'

)

1. Evaluate with background

results_background = benchmark.evaluate(

   model='gpt-4',
   setting='with_background'

)
```

### Integration with Frameworks

```python

1. Using inspect_ai (as of 2025-01)

from inspect_ai import eval
from scicode.inspect import scicode_suite

1. Run evaluation

results = eval(

   scicode_suite(),
   model="openai/gpt-4"

)

1. Using OpenCompass

from opencompass.benchmarks import SciCode

evaluator = SciCode()
score = evaluator.eval(model_output)
```

## Scientific Workflow Alignment

### Research Process Mapping

| Research Stage | SciCode Component | Skills Tested |
| --- | --- | --- |
| Literature Review | Background understanding | Knowledge recall |
| Theory Development | Mathematical formulation | Reasoning |
| Method Design | Algorithm selection | Problem-solving |
| Implementation | Code writing | Programming |
| Validation | Testing and verification | Debugging |

### Real-World Applications

SciCode problems reflect actual scientific computing tasks:

- **Simulation**: Physical system modeling

- **Data Analysis**: Processing experimental data

- **Optimization**: Parameter fitting and optimization

- **Visualization**: Scientific plotting and analysis

- **Numerical Methods**: Implementing computational algorithms

## Significance and Impact

### Research Applications

| Application | Purpose | Value |
| --- | --- | --- |
| AI for Science | Evaluating scientific AI assistants | Progress tracking |
| Model Development | Identifying capability gaps | Targeted improvement |
| Education | Assessing teaching assistants | Educational tools |
| Collaboration | Human-AI scientific partnerships | Integration planning |

### Scientific Community Impact

- **Standardization**: Common benchmark for scientific AI evaluation

- **Interdisciplinary**: Bridges AI and natural sciences

- **Practical Focus**: Emphasizes real research problems

- **Quality Assurance**: Scientist-validated problems and solutions

- **Future Direction**: Guides development of scientific AI systems

## Limitations and Challenges

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Low Success Rates | Best models solve <8% | Limited practical utility |
| Python Focus | Primarily Python implementations | Language diversity |
| Static Dataset | Fixed problem set | Potential overfitting |
| Domain Coverage | Limited to 16 subfields | Scope constraints |
| Evaluation Cost | Computationally intensive | Resource requirements |

### Future Directions

1. **Expanded Coverage**: More scientific domains and subfields
2. **Multi-language Support**: Beyond Python implementations
3. **Interactive Problems**: Multi-step research workflows
4. **Collaborative Tasks**: Team science scenarios
5. **Dynamic Updates**: Continuously adding new problems
6. **Human Baselines**: Expert scientist performance metrics

## Related Benchmarks

- **[HumanEval](/wiki/humaneval)**: General code generation

- **[MATH](/wiki/math)**: Mathematical problem solving

- **[GPQA](/wiki/gpqa)**: Graduate-level science questions

- **[GSM8K](/index.php?title=GSM8K&action=edit&redlink=1)**: Grade school math problems

- **[CodeContests](/index.php?title=CodeContests&action=edit&redlink=1)**: Competitive programming

- **[ML-Bench](/index.php?title=ML-Bench&action=edit&redlink=1)**: Machine learning implementation

- **[SWE-bench](/wiki/swe-bench)**: Software engineering tasks

## Significance

SciCode represents a crucial step toward AI systems capable of meaningful scientific assistance. Its extremely low success rates even for state-of-the-art models highlight the significant gap between current AI capabilities and the needs of scientific research. The benchmark's focus on real research problems provides:

- Clear metrics for progress toward scientific AI

- Understanding of domain-specific challenges

- Guidance for developing research-capable AI systems

- Bridge between AI and scientific communities

- Realistic assessment of AI readiness for scientific discovery

## See Also

- [Scientific Computing](/index.php?title=Scientific_Computing&action=edit&redlink=1)

- [Computational Science](/index.php?title=Computational_Science&action=edit&redlink=1)

- [AI for Science](/index.php?title=AI_for_Science&action=edit&redlink=1)

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [Numerical Methods](/index.php?title=Numerical_Methods&action=edit&redlink=1)

- [Research Automation](/index.php?title=Research_Automation&action=edit&redlink=1)

- [Domain-Specific AI](/index.php?title=Domain-Specific_AI&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "scicode_paper" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "scicode_website" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "scicode_github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "neurips2024" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "hal_leaderboard" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "aa_scicode" defined in `<references>` has group attribute "" which does not appear in prior text.