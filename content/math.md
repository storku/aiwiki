---
title: "MATH"
slug: "math"
categories:
  - "AI_Benchmarks"
  - "Mathematical_Reasoning_Benchmarks"
  - "2021_Benchmarks"
  - "UC_Berkeley_Research"
  - "Competition_Mathematics"
  - "Nearly_Saturated_Benchmarks"
---**

| MATH |
| --- |
| Overview |
| Full name | Measuring Mathematical Problem Solving With the MATH Dataset |
| Abbreviation | MATH |
| Description | A comprehensive dataset of 12,500 challenging competition mathematics problems for measuring mathematical problem-solving capabilities |
| Release date | 2021-03-05 |
| Latest version | 1.0 |
| Benchmark updated | 2021-11 |
| Authors | [Dan Hendrycks](/index.php?title=Dan_Hendrycks&action=edit&redlink=1), [Collin Burns](/index.php?title=Collin_Burns&action=edit&redlink=1), [Saurav Kadavath](/index.php?title=Saurav_Kadavath&action=edit&redlink=1), [Akul Arora](/index.php?title=Akul_Arora&action=edit&redlink=1), [Steven Basart](/index.php?title=Steven_Basart&action=edit&redlink=1), [Eric Tang](/index.php?title=Eric_Tang&action=edit&redlink=1), [Dawn Song](/index.php?title=Dawn_Song&action=edit&redlink=1), [Jacob Steinhardt](/index.php?title=Jacob_Steinhardt&action=edit&redlink=1) |
| Organization | [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1), [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1) |
| Technical Details |
| Type | [Mathematical Reasoning](/index.php?title=Mathematical_Reasoning&action=edit&redlink=1), [Problem Solving](/index.php?title=Problem_Solving&action=edit&redlink=1), [Competition Mathematics](/index.php?title=Competition_Mathematics&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Mathematical Notation](/index.php?title=Mathematical_Notation&action=edit&redlink=1) |
| Task format | [Free-form problem solving with step-by-step solutions](/index.php?title=Free-form_problem_solving_with_step-by-step_solutions&action=edit&redlink=1) |
| Number of tasks | 6 subject categories |
| Total examples | 12,500 (7,500 training, 5,000 test) |
| Evaluation metric | [Exact match accuracy](/index.php?title=Exact_match_accuracy&action=edit&redlink=1) |
| Domains | [Algebra](/index.php?title=Algebra&action=edit&redlink=1), [Counting & Probability](/index.php?title=Counting_%26_Probability&action=edit&redlink=1), [Geometry](/index.php?title=Geometry&action=edit&redlink=1), [Intermediate Algebra](/index.php?title=Intermediate_Algebra&action=edit&redlink=1), [Number Theory](/index.php?title=Number_Theory&action=edit&redlink=1), [Prealgebra and Precalculus](/index.php?title=Prealgebra_and_Precalculus&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | 90% (IMO gold medalist) |
| Baseline | ~5% (GPT-3, 2021) |
| SOTA score | >90%
Property "SOTA score" (as page type) with input value ">90%" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process. |
| SOTA model | [Current frontier models](/index.php?title=Current_frontier_models&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | Nearly |
| Resources |
| Website | [Official website](https://github.com/hendrycks/math) |
| Paper | [Paper](https://arxiv.org/abs/2103.03874) |
| GitHub | [Repository](https://github.com/hendrycks/math) |
| Dataset | [Download](https://people.eecs.berkeley.edu/~hendrycks/MATH.tar) |
| License | MIT |
| Successor | [FrontierMath](/wiki/frontiermath) |

MATH** (**Measuring Mathematical Problem Solving With the MATH Dataset**) is a comprehensive [benchmark](/wiki/benchmark) dataset of 12,500 challenging competition [mathematics](/index.php?title=Mathematics&action=edit&redlink=1) problems designed to evaluate the mathematical problem-solving capabilities of [machine learning](/wiki/machine_learning) models. Released in March 2021 by researchers from [UC Berkeley](/index.php?title=UC_Berkeley&action=edit&redlink=1) and [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1)[&#91;1&#93;](#cite_note-math_paper-1), MATH has become the standard benchmark for assessing [artificial intelligence](/wiki/artificial_intelligence) systems' ability to solve complex mathematical problems requiring multi-step reasoning. The dataset features problems from prestigious mathematics competitions including the [AMC 10](/index.php?title=AMC_10&action=edit&redlink=1), [AMC 12](/index.php?title=AMC_12&action=edit&redlink=1), and [AIME](/wiki/aime), with each problem accompanied by detailed step-by-step solutions.

## Overview

The MATH benchmark represents a significant advancement in evaluating mathematical reasoning capabilities of AI systems. Unlike simpler mathematical datasets that focus on basic arithmetic or single-step problems, MATH contains competition-level problems that require sophisticated [mathematical reasoning](/index.php?title=Mathematical_reasoning&action=edit&redlink=1), [problem-solving](/index.php?title=Problem-solving&action=edit&redlink=1) strategies, and the ability to generate complete derivations. The benchmark spans six major mathematical domains and five difficulty levels, providing a comprehensive assessment of mathematical capabilities from basic to advanced competition-level problems[&#91;1&#93;](#cite_note-math_paper-1).

### Significance

MATH has played a crucial role in advancing mathematical AI capabilities for several reasons:

- **Competition Quality**: Problems sourced from prestigious mathematics competitions ensure high quality and appropriate difficulty

- **Comprehensive Coverage**: Six mathematical domains with graduated difficulty levels

- **Step-by-Step Solutions**: Each problem includes detailed solutions enabling models to learn reasoning processes

- **Dramatic Progress Tracking**: Witnessed improvement from ~5% (GPT-3) to >90% (current models) in just three years

- **Research Driver**: Spurred development of new techniques for mathematical reasoning

## Dataset Structure

### Subject Categories

MATH organizes its 12,500 problems across six fundamental mathematical domains:

| Subject | Number of Problems | Description | Example Topics |
| --- | --- | --- | --- |
| **Algebra** | ~2,100 | Basic to advanced algebraic manipulation | Equations, inequalities, functions, polynomials |
| **Counting & Probability** | ~2,100 | Combinatorics and probability theory | Permutations, combinations, expected values |
| **Geometry** | ~2,100 | Euclidean and coordinate geometry | Triangles, circles, 3D geometry, transformations |
| **Intermediate Algebra** | ~2,100 | Advanced algebraic concepts | Complex numbers, sequences, logarithms |
| **Number Theory** | ~2,100 | Properties of integers | Divisibility, prime numbers, modular arithmetic |
| **Prealgebra & Precalculus** | ~2,100 | Foundational and advanced pre-calculus | Trigonometry, exponentials, basic calculus concepts |

### Difficulty Levels

The benchmark employs a five-tier difficulty system based on competition problem standards[&#91;2&#93;](#cite_note-math_github-2):

| Level | Difficulty | Typical Source | Number of Problems | Characteristics |
| --- | --- | --- | --- | --- |
| **Level 1** | Easy | AMC 10 early problems | ~2,500 | Basic concepts, single-step solutions |
| **Level 2** | Medium-Easy | AMC 10 middle problems | ~2,500 | Multiple steps, standard techniques |
| **Level 3** | Medium | AMC 12 middle problems | ~2,500 | Complex reasoning, multiple concepts |
| **Level 4** | Medium-Hard | AMC 12 later problems | ~2,500 | Advanced techniques, creative insights |
| **Level 5** | Hard | AIME problems | 1,324 | Competition-level, sophisticated reasoning |

### Problem Format

Each problem in the MATH dataset follows a structured format:

```latex
Problem: Find the number of ordered pairs of positive integers $(a,b)$ 
such that $a+b=1000$ and neither $a$ nor $b$ has a zero digit.

Solution: We can use complementary counting...
[detailed step-by-step solution]
...Therefore, there are $\boxed{738}$ such ordered pairs.
```

Key components:

- **Problem Statement**: Clear mathematical question in natural language and LaTeX

- **Solution**: Complete derivation with reasoning steps

- **Final Answer**: Enclosed in `\boxed{}` for automated evaluation

## Evaluation Methodology

### Metrics and Scoring

MATH uses straightforward evaluation criteria[&#91;1&#93;](#cite_note-math_paper-1):

- **Primary Metric**: Exact match accuracy on final answers

- **Answer Format**: Standardized `\boxed{}` notation for consistency

- **Partial Credit**: Not awarded; problems are scored as correct or incorrect

- **Evaluation Scripts**: Automated checking handles various answer formats (fractions, decimals, expressions)

### Evaluation Process

The evaluation pipeline consists of:

1. **Problem Presentation**: Model receives problem statement
2. **Solution Generation**: Model produces answer with optional reasoning
3. **Answer Extraction**: Final answer extracted from `\boxed{}` notation
4. **Comparison**: Automated comparison with ground truth
5. **Scoring**: Binary scoring (correct/incorrect) aggregated across test set

## Performance Evolution

### Historical Performance (2021-2024)

The MATH benchmark has witnessed remarkable performance improvements:

| Year | Model | Overall Accuracy | Level 5 Accuracy | Key Innovation |
| --- | --- | --- | --- | --- |
| 2021 | [GPT-3](/wiki/gpt-3) | ~5% | <3% | Baseline large language model |
| 2021 | [Minerva](/index.php?title=Minerva&action=edit&redlink=1) 62B | 50.3% | 33.6% | Mathematical pretraining |
| 2023 | [GPT-4](/wiki/gpt-4) | 42.2% | ~25% | General capability improvement |
| 2023 | GPT-4 + Code Interpreter | 69.7% | ~45% | Code execution capability |
| 2023 | [Claude 3](/index.php?title=Claude_3&action=edit&redlink=1) + Verification | 84.3% | ~65% | Answer verification techniques |
| 2024 | Current SOTA Models | >90% | >75% | Multiple techniques combined |

### Scaling Analysis

Research has revealed important scaling properties[&#91;1&#93;](#cite_note-math_paper-1):

| Compute Scale | Level 5 Accuracy | Improvement Rate |
| --- | --- | --- |
| 1× baseline | ~3% | - |
| 10× | ~20% | +17 percentage points |
| 100× | ~37% | +17 percentage points |
| 1000× | ~54% | +17 percentage points |
| Theoretical 10³⁵× | 40% (prediction) | Infeasible through scaling alone |

The original paper's prediction that achieving 40% accuracy would require 10³⁵ parameters through scaling alone highlighted the necessity of algorithmic innovations, which subsequent research validated.

## Human Performance

### Expert Baseline

Human performance on MATH was established through evaluation by mathematical experts[&#91;1&#93;](#cite_note-math_paper-1):

| Evaluator | Performance | Qualification |
| --- | --- | --- |
| IMO Gold Medalist | 90% | Three-time International Mathematical Olympiad gold medalist |
| Graduate Students | 40-60% | Mathematics PhD students |
| Undergraduate Students | 20-40% | Mathematics majors |
| General Population | <10% | College-educated adults |

The 90% expert baseline represents near-optimal human performance, with errors typically due to:

- Calculation mistakes

- Time constraints in evaluation

- Ambiguous problem interpretations

## Key Techniques and Innovations

### Performance-Enhancing Methods

Several techniques have dramatically improved performance on MATH:

| Technique | Impact | Description |
| --- | --- | --- |
| **Code Interpretation** | +27.5% | Using code execution for calculations and verification |
| **Chain-of-Thought** | +15-20% | Step-by-step reasoning generation |
| **Self-Consistency** | +10-15% | Multiple solution paths with voting |
| **Verification** | +8-12% | Answer checking and validation |
| **Tool Use** | +20-30% | Calculator, symbolic math, graphing tools |
| **Fine-tuning** | +10-20% | Training on mathematical datasets |

### Architectural Advances

Recent architectural innovations contributing to improved performance:

1. **Specialized Tokenization**: Better handling of mathematical notation
2. **Extended Context Windows**: Processing longer derivations
3. **Mixture of Experts**: Specialized components for different problem types
4. **Retrieval Augmentation**: Accessing mathematical knowledge bases

## Impact and Applications

### Research Influence

MATH has significantly influenced AI research in several areas:

- **Benchmarking Standard**: De facto benchmark for mathematical reasoning

- **Technique Development**: Drove innovations in reasoning and verification

- **Scaling Studies**: Revealed limits of pure scaling approaches

- **Cross-Domain Transfer**: Techniques developed for MATH benefit other reasoning tasks

### Educational Applications

The benchmark and associated techniques have found applications in:

| Application | Description | Status |
| --- | --- | --- |
| **Tutoring Systems** | AI-powered mathematical tutoring | Deployed in several platforms |
| **Solution Generation** | Automated problem solving with explanations | Research prototype |
| **Problem Creation** | Generating new practice problems | Experimental |
| **Grading Assistance** | Automated evaluation of student work | Limited deployment |

## Limitations and Criticisms

### Current Limitations

Despite impressive progress, MATH has several acknowledged limitations[&#91;1&#93;](#cite_note-math_paper-1):

| Limitation | Description | Impact |
| --- | --- | --- |
| **Answer-Only Evaluation** | Doesn't evaluate reasoning quality | May reward lucky guesses |
| **Limited Domains** | Excludes calculus, linear algebra, etc. | Incomplete mathematical coverage |
| **Static Dataset** | Fixed set of problems | Potential for overfitting |
| **English-Only** | No multilingual support | Limited global applicability |
| **Format Restrictions** | Requires specific answer format | May penalize correct but differently formatted answers |

### Saturation Concerns

With top models achieving >90% accuracy, MATH is approaching saturation:

- **Ceiling Effects**: Limited ability to differentiate top models

- **Benchmark Gaming**: Risk of models optimizing for benchmark-specific patterns

- **Need for Harder Benchmarks**: Led to development of [FrontierMath](/wiki/frontiermath) where current models achieve <2%

## Related Benchmarks

### Mathematical Reasoning Benchmarks

| Benchmark | Year | Focus | Difficulty |
| --- | --- | --- | --- |
| [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) | 2021 | Grade school word problems | Easy |
| **MATH** | 2021 | Competition mathematics | Medium-Hard |
| [AIME Benchmark](/index.php?title=AIME_Benchmark&action=edit&redlink=1) | 2024 | AIME competition problems | Hard |
| [FrontierMath](/wiki/frontiermath) | 2024 | Research-level mathematics | Very Hard |
| [Olympiad Bench](/index.php?title=Olympiad_Bench&action=edit&redlink=1) | 2024 | Olympiad problems | Very Hard |

## Future Directions

### Ongoing Developments

Several initiatives are extending or building upon MATH:

1. **Multilingual Versions**: Translations to support global accessibility
2. **Interactive Variants**: Problems requiring multi-step interaction
3. **Proof Verification**: Evaluating formal mathematical proofs
4. **Domain Extensions**: Adding calculus, linear algebra, and advanced topics
5. **Adaptive Testing**: Dynamic difficulty adjustment based on performance

### Research Frontiers

Current research directions inspired by MATH include:

- **Reasoning Chain Quality**: Evaluating not just answers but solution paths

- **Mathematical Creativity**: Generating novel problem-solving approaches

- **Error Analysis**: Understanding failure modes and improving robustness

- **Transfer Learning**: Applying MATH-trained capabilities to other domains

## Significance

The MATH benchmark has fundamentally shaped the development of mathematical AI capabilities, documenting the remarkable journey from 5% to over 90% accuracy in just three years. This progress required not just scaling but fundamental innovations in reasoning, verification, and tool use. While the benchmark approaches saturation, it established principles and methodologies that continue to drive advances in mathematical AI.

MATH's comprehensive coverage, rigorous evaluation, and detailed solutions have made it an essential tool for developing and evaluating mathematical reasoning in AI systems. Its influence extends beyond mathematics, with techniques developed for MATH benefiting reasoning tasks across multiple domains. As AI systems approach and exceed human performance on MATH, the benchmark stands as a testament to rapid progress while highlighting remaining challenges in advanced mathematical reasoning.

## See Also

- [Mathematical Reasoning in AI](/index.php?title=Mathematical_Reasoning_in_AI&action=edit&redlink=1)

- [Competition Mathematics](/index.php?title=Competition_Mathematics&action=edit&redlink=1)

- [FrontierMath](/wiki/frontiermath)

- [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1)

- [AMC Competitions](/index.php?title=AMC_Competitions&action=edit&redlink=1)

- [Chain-of-Thought Prompting](/index.php?title=Chain-of-Thought_Prompting&action=edit&redlink=1)

- [Dan Hendrycks](/index.php?title=Dan_Hendrycks&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-math_paper_1-0) [1.1](#cite_ref-math_paper_1-1) [1.2](#cite_ref-math_paper_1-2) [1.3](#cite_ref-math_paper_1-3) [1.4](#cite_ref-math_paper_1-4) [1.5](#cite_ref-math_paper_1-5) Hendrycks, D., Burns, C., Kadavath, S., Arora, A., Basart, S., Tang, E., Song, D., & Steinhardt, J. (2021). "Measuring Mathematical Problem Solving with the MATH Dataset". NeurIPS 2021. arXiv:2103.03874. Retrieved from [https://arxiv.org/abs/2103.03874](https://arxiv.org/abs/2103.03874)

2. [↑](#cite_ref-math_github_2-0) Hendrycks, D., et al. (2021). "MATH Dataset". GitHub. Retrieved from [https://github.com/hendrycks/math](https://github.com/hendrycks/math)