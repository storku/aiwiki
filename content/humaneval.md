---
title: "HumanEval"
slug: "humaneval"
categories:
  - "AI_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "OpenAI"
  - "2021_Benchmarks"
  - "Program_Synthesis"
  - "Nearly_Saturated_Benchmarks"
---**

| HumanEval |
| --- |
| Overview |
| Full name | HumanEval: Evaluating Large Language Models Trained on Code |
| Abbreviation | HumanEval |
| Description | A benchmark for evaluating code generation capabilities of language models through 164 hand-crafted Python programming challenges |
| Release date | 2021-07-07 |
| Latest version | 1.0 |
| Benchmark updated | 2021-07 |
| Authors | [Mark Chen](/index.php?title=Mark_Chen&action=edit&redlink=1), [Jerry Tworek](/index.php?title=Jerry_Tworek&action=edit&redlink=1), [Heewoo Jun](/index.php?title=Heewoo_Jun&action=edit&redlink=1), [Qiming Yuan](/index.php?title=Qiming_Yuan&action=edit&redlink=1), [Henrique Ponde de Oliveira Pinto](/index.php?title=Henrique_Ponde_de_Oliveira_Pinto&action=edit&redlink=1), [And 53 others](/index.php?title=And_53_others&action=edit&redlink=1) |
| Organization | [OpenAI](/wiki/openai) |
| Technical Details |
| Type | [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Program Synthesis](/index.php?title=Program_Synthesis&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [Function implementation from docstring](/index.php?title=Function_implementation_from_docstring&action=edit&redlink=1) |
| Number of tasks | 164 |
| Total examples | 164 programming problems |
| Evaluation metric | [Pass@k (k=1](/index.php?title=Pass@k_(k%3D1&action=edit&redlink=1), [10](/index.php?title=10&action=edit&redlink=1), [100)](/index.php?title=100)&action=edit&redlink=1) |
| Domains | [Algorithms](/index.php?title=Algorithms&action=edit&redlink=1), [Mathematics](/index.php?title=Mathematics&action=edit&redlink=1), [String Manipulation](/index.php?title=String_Manipulation&action=edit&redlink=1), [Data Structures](/index.php?title=Data_Structures&action=edit&redlink=1) |
| Languages | English (natural language), Python (programming) |
| Performance |
| Human performance | ~100% (expert programmers) |
| Baseline | 0% (GPT-3, 2021) |
| SOTA score | 93.7% |
| SOTA model | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | Nearly |
| Resources |
| Website | [Official website](https://github.com/openai/human-eval) |
| Paper | [Paper](https://arxiv.org/abs/2107.03374) |
| GitHub | [Repository](https://github.com/openai/human-eval) |
| Dataset | [Download](https://github.com/openai/human-eval/blob/master/data/HumanEval.jsonl.gz) |
| License | MIT |
| Successor | [HumanEval+, BigCodeBench](/index.php?title=HumanEval%2B,_BigCodeBench&action=edit&redlink=1) |

HumanEval** is a [benchmark](/wiki/benchmark) dataset designed to evaluate the [code generation](/index.php?title=Code_generation&action=edit&redlink=1) capabilities of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) by measuring the functional correctness of synthesized programs. Released on July 7, 2021, by [OpenAI](/wiki/openai)[&#91;1&#93;](#cite_note-humaneval_paper-1), HumanEval consists of 164 hand-crafted [Python](/index.php?title=Python&action=edit&redlink=1) programming challenges that test language comprehension, algorithmic thinking, and simple mathematics. The benchmark introduced the influential pass@k metric for evaluating code generation and has become the standard evaluation tool for measuring programming capabilities in AI systems, witnessing dramatic improvements from 0% (GPT-3) to over 90% (current models) in just three years.

## Overview

HumanEval addresses a critical gap in evaluating [artificial intelligence](/wiki/artificial_intelligence) systems by focusing on functional correctness rather than text similarity when assessing generated code. Each problem in the benchmark consists of a function signature and a docstring describing the desired behavior, requiring models to synthesize a complete implementation that passes multiple unit tests. This approach ensures that models must truly understand the programming task rather than merely pattern-matching similar code from training data[&#91;1&#93;](#cite_note-humaneval_paper-1).

The benchmark's problems are comparable to simple software interview questions and cover fundamental programming concepts including string manipulation, basic algorithms, simple mathematics, and data structure operations. With an average of 7.7 unit tests per problem, HumanEval provides robust verification of functional correctness while remaining computationally efficient to evaluate.

### Significance

HumanEval has fundamentally shaped the field of AI code generation for several reasons:

- **Standardized Evaluation**: Established the de facto standard for measuring code generation capabilities

- **Pass@k Metric**: Introduced a probabilistic evaluation metric that accounts for sampling variance

- **Functional Correctness**: Shifted focus from syntactic similarity to actual program functionality

- **Benchmark Proliferation**: Inspired numerous extensions and multilingual variants

- **Rapid Progress Tracking**: Documented the evolution from 0% to >90% accuracy in three years

## Dataset Structure

### Problem Composition

Each of HumanEval's 164 problems contains five essential components:

| Component | Description | Example |
| --- | --- | --- |
| **Task ID** | Unique identifier | "HumanEval/0" |
| **Prompt** | Function signature with docstring | `def has_close_elements(numbers, threshold):` |
| **Canonical Solution** | Reference implementation | Working Python code |
| **Test Cases** | Unit tests for verification | `assert function(input) == expected` |
| **Entry Point** | Function name to call | "has_close_elements" |

### Problem Categories

The benchmark covers diverse programming challenges[&#91;2&#93;](#cite_note-humaneval_github-2):

| Category | Approximate Count | Example Tasks |
| --- | --- | --- |
| **String Manipulation** | ~40 | Palindrome checking, string parsing, pattern matching |
| **Mathematical Operations** | ~35 | Prime numbers, factorials, numerical computations |
| **List/Array Operations** | ~45 | Sorting, filtering, element manipulation |
| **Algorithmic Challenges** | ~30 | Dynamic programming, recursion, optimization |
| **Data Structure Tasks** | ~14 | Tree operations, dictionary manipulation |

### Data Format

HumanEval uses JSON Lines format with the following structure:

```json
{

 "task_id": "HumanEval/13",
 "prompt": "def greatest_common_divisor(a: int, b: int) -> int:\n    \"\"\"Return a greatest common divisor of two integers a and b\n    >>> greatest_common_divisor(3, 5)\n    1\n    >>> greatest_common_divisor(25, 15)\n    5\n    \"\"\"\n",
 "canonical_solution": "    while b:\n        a, b = b, a % b\n    return a\n",
 "test": "def check(candidate):\n    assert candidate(3, 7) == 1\n    assert candidate(10, 15) == 5\n    assert candidate(49, 14) == 7\n    assert candidate(144, 60) == 12\n",
 "entry_point": "greatest_common_divisor"

}
```

## Evaluation Methodology

### The pass@k Metric

HumanEval introduced the pass@k metric, which has become the standard for evaluating code generation[&#91;1&#93;](#cite_note-humaneval_paper-1):

| Metric | Definition | Interpretation |
| --- | --- | --- |
| **pass@1** | Probability that a single generated solution passes all tests | Direct success rate |
| **pass@10** | Probability that at least one of 10 attempts succeeds | Success with multiple tries |
| **pass@100** | Probability that at least one of 100 attempts succeeds | Upper bound performance |

The metric is calculated using the formula:
```
pass@k := E[1 - (C(n-c, k) / C(n, k))]
```
where n is total samples, c is number of correct samples, and C is the binomial coefficient.

### Evaluation Process

The evaluation pipeline consists of:

1. **Code Generation**: Model generates Python code from the prompt
2. **Extraction**: Solution code is extracted from model output
3. **Execution**: Code is run in a sandboxed environment
4. **Testing**: Unit tests verify functional correctness
5. **Scoring**: Pass rates are calculated across all problems

### Security Considerations

HumanEval evaluation requires executing untrusted code, necessitating[&#91;2&#93;](#cite_note-humaneval_github-2):

- **Sandboxed Execution**: Isolated environment for code execution

- **Resource Limits**: Time and memory constraints

- **Restricted Imports**: Limited library access

- **Warning**: The official repository includes security warnings about executing generated code

## Performance Evolution

### Historical Performance Timeline

| Year | Model | pass@1 | pass@10 | pass@100 | Key Innovation |
| --- | --- | --- | --- | --- | --- |
| 2021 | [GPT-3](/wiki/gpt-3) | 0.0% | 0.0% | 0.0% | Baseline large language model |
| 2021 | [GPT-J](/index.php?title=GPT-J&action=edit&redlink=1) 6B | 11.4% | 27.7% | - | Open-source alternative |
| 2021 | [Codex](/index.php?title=Codex&action=edit&redlink=1) 12B | 28.8% | 46.8% | 72.3% | Code-specific training |
| 2021 | Codex 300M | 13.2% | 20.4% | 36.3% | Smaller code model |
| 2022 | [AlphaCode](/index.php?title=AlphaCode&action=edit&redlink=1) | 33.5% | ~50% | - | Competition-level training |
| 2022 | [CodeGen](/index.php?title=CodeGen&action=edit&redlink=1) 16B | 29.3% | 49.9% | 75.0% | Multi-turn synthesis |
| 2023 | [GPT-4](/wiki/gpt-4) | 67.0% | 87.0% | - | General capability improvement |
| 2023 | [Claude 2](/index.php?title=Claude_2&action=edit&redlink=1) | 71.2% | - | - | Constitutional AI approach |
| 2024 | [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | 84.9% | - | - | Multimodal capabilities |
| 2024 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 90.2% | - | - | Optimized architecture |
| 2024 | [DeepSeek-Coder-V2](/index.php?title=DeepSeek-Coder-V2&action=edit&redlink=1) | 90.2% | - | - | Specialized code model |
| 2024 | [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | 93.7% | - | - | Current SOTA |

### Key Performance Insights

Analysis of performance trends reveals several important patterns[&#91;3&#93;](#cite_note-humaneval_analysis-3):

| Observation | Implication |
| --- | --- |
| Exponential improvement 2021-2023 | Rapid advancement in code understanding |
| Plateauing above 90% | Approaching benchmark saturation |
| Large model advantage | Scale correlates strongly with performance |
| Code-specific training helps | Specialized models outperform general ones initially |
| General models catching up | Recent general models match specialized ones |

## Extensions and Variants

### HumanEval+

Released in 2023, HumanEval+ addresses test insufficiency[&#91;4&#93;](#cite_note-humaneval_plus-4):

| Aspect | Original HumanEval | HumanEval+ |
| --- | --- | --- |
| **Test Coverage** | 7.7 tests/problem | ~600+ tests/problem (80x increase) |
| **Test Generation** | Manual | Automated + Manual |
| **Error Detection** | Basic | Comprehensive edge cases |
| **Score Impact** | Baseline | 15-20% score reduction |

### Multilingual Extensions

The success of HumanEval inspired numerous multilingual variants:

| Extension | Languages | Problems | Method |
| --- | --- | --- | --- |
| **HumanEval-X** | 5 (Python, C++, Java, JavaScript, Go) | 820 | Hand-translated |
| **MultiPL-E** | 18 | 164 per language | Automated translation |
| **HumanEval-XL** | 23 natural × 12 programming | 22,080 | Cross-lingual generation |
| **MBXP** | 10+ | 974+ | Extended multilingual |

### Domain-Specific Variants

| Variant | Focus | Key Features |
| --- | --- | --- |
| **HumanEval-V** | Visual reasoning | Code generation from diagrams |
| **DS-1000** | Data science | Pandas, NumPy, scikit-learn tasks |
| **BigCodeBench** | Real-world complexity | 1,140 challenging problems |
| **SWE-bench** | Software engineering | Real GitHub issues |

## Impact and Applications

### Research Influence

HumanEval has significantly influenced AI research:

- **Benchmark Standard**: Cited in 1,000+ papers as of 2024

- **Evaluation Framework**: Pass@k metric adopted across domains

- **Model Development**: Guided architecture improvements for code generation

- **Training Objectives**: Influenced code-specific pretraining strategies

### Industry Applications

The benchmark has enabled practical applications:

| Application | Description | Examples |
| --- | --- | --- |
| **AI Coding Assistants** | IDE integrations for code completion | GitHub Copilot, Cursor, Replit |
| **Code Review Tools** | Automated code analysis and suggestions | CodeRabbit, DeepCode |
| **Educational Platforms** | Programming tutors and homework help | Khan Academy AI, Codecademy AI |
| **Developer Tools** | API generation and documentation | Mintlify, Stenography |

## Limitations and Criticisms

### Current Limitations

Despite its influence, HumanEval has several acknowledged limitations[&#91;5&#93;](#cite_note-humaneval_limitations-5):

| Limitation | Description | Impact |
| --- | --- | --- |
| **Limited Complexity** | Simple interview-level problems | Doesn't test real-world programming |
| **Python Only** | Single language focus | Misses cross-language challenges |
| **Small Dataset** | Only 164 problems | Statistical significance concerns |
| **Test Coverage** | Average 7.7 tests per problem | May miss edge cases |
| **No Context** | Isolated functions | Doesn't test integration skills |
| **Saturation** | Top models exceed 90% | Limited differentiation ability |

### Benchmark Gaming Concerns

- **Memorization Risk**: Models may have seen similar problems in training

- **Test-Specific Optimization**: Solutions may pass tests but fail in practice

- **Prompt Engineering**: Performance varies significantly with prompt format

## Future Directions

### Emerging Trends

Several developments are shaping the future of code generation evaluation:

1. **Complexity Scaling**: BigCodeBench and similar benchmarks with harder problems
2. **Repository-Level Tasks**: SWE-bench for real software engineering
3. **Interactive Evaluation**: Multi-turn code generation and debugging
4. **Execution-Based Metrics**: Beyond pass/fail to efficiency and style
5. **Contamination Detection**: Methods to identify training data overlap

### Research Frontiers

Current research directions include:

- **Formal Verification**: Proving code correctness beyond testing

- **Code Understanding**: Evaluating comprehension not just generation

- **Cross-Modal Tasks**: Code from diagrams, specifications, or examples

- **Robustness Testing**: Adversarial and out-of-distribution evaluation

## Significance

HumanEval has fundamentally shaped the landscape of AI code generation evaluation. By introducing functional correctness as the primary metric and establishing the pass@k evaluation framework, it created a standardized, reproducible method for measuring programming capabilities in language models. The benchmark's simplicity and clarity have made it the de facto standard, enabling direct comparison across models and tracking the remarkable progress from 0% to over 90% accuracy in just three years.

While the benchmark approaches saturation with current models achieving near-human performance, HumanEval's influence extends beyond its specific problems. It established principles and methodologies that continue to guide the development of more challenging benchmarks and real-world evaluation frameworks. As AI systems increasingly assist in software development, HumanEval remains a crucial milestone in the journey toward artificial general intelligence in programming.

## See Also

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [Program Synthesis](/index.php?title=Program_Synthesis&action=edit&redlink=1)

- [Codex](/index.php?title=Codex&action=edit&redlink=1)

- [GitHub Copilot](/wiki/github_copilot)

- [BigCodeBench](/index.php?title=BigCodeBench&action=edit&redlink=1)

- [SWE-bench](/wiki/swe-bench)

- [MBPP](/index.php?title=MBPP&action=edit&redlink=1) (Mostly Basic Python Problems)

- [AlphaCode](/index.php?title=AlphaCode&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-humaneval_paper_1-0) [1.1](#cite_ref-humaneval_paper_1-1) [1.2](#cite_ref-humaneval_paper_1-2) Chen, M., Tworek, J., Jun, H., Yuan, Q., Pinto, H. P. d. O., Kaplan, J., Edwards, H., Burda, Y., Joseph, N., Brockman, G., Ray, A., Puri, R., Krueger, G., Petrov, M., Khlaaf, H., Sastry, G., Mishkin, P., Chan, B., Gray, S., Ryder, N., Pavlov, M., Power, A., Kaiser, L., Bavarian, M., Winter, C., Tillet, P., Such, F. P., Cummings, D., Plappert, M., Chantzis, F., Barnes, E., Herbert-Voss, A., Guss, W. H., Nichol, A., Paino, A., Tezak, N., Tang, J., Babuschkin, I., Balaji, S., Jain, S., Saunders, W., Hesse, C., Carr, A. N., Leike, J., Achiam, J., Misra, V., Morikawa, E., Radford, A., Knight, M., Brundage, M., Murati, M., Mayer, K., Welinder, P., McGrew, B., Amodei, D., McCandlish, S., Sutskever, I., & Zaremba, W. (2021). "Evaluating Large Language Models Trained on Code". arXiv:2107.03374. Retrieved from [https://arxiv.org/abs/2107.03374](https://arxiv.org/abs/2107.03374)

2. ↑ [2.0](#cite_ref-humaneval_github_2-0) [2.1](#cite_ref-humaneval_github_2-1) OpenAI. (2021). "HumanEval: Hand-Written Evaluation Set". GitHub. Retrieved from [https://github.com/openai/human-eval](https://github.com/openai/human-eval)

3. [↑](#cite_ref-humaneval_analysis_3-0) Various sources. (2021-2024). "HumanEval Leaderboards and Performance Analysis". Papers with Code and official model documentation.

4. [↑](#cite_ref-humaneval_plus_4-0) Liu, J., et al. (2023). "Is Your Code Generated by ChatGPT Really Correct? Rigorous Evaluation of Large Language Models for Code Generation". arXiv:2305.01210.

5. [↑](#cite_ref-humaneval_limitations_5-0) Various authors. (2022-2024). "Limitations and Criticisms of HumanEval". Multiple academic papers and blog posts.