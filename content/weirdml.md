---
title: "WeirdML"
slug: "weirdml"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Machine_Learning_Benchmarks"
  - "Code_Generation_Benchmarks"
  - "2024_Benchmarks"
  - "PyTorch"
---**

| WeirdML |
| --- |
| Overview |
| Full name | Weird Machine Learning Benchmark |
| Abbreviation | WeirdML |
| Description | A benchmark testing LLMs' ability to solve novel machine learning tasks requiring careful thinking and genuine understanding |
| Release date | 2024 |
| Latest version | 2.0 |
| Benchmark updated | 2024 |
| Authors | [Håvard Tveit Ihle (GitHub: htihle)](/index.php?title=H%C3%A5vard_Tveit_Ihle_(GitHub:_htihle)&action=edit&redlink=1) |
| Organization | [Norwegian Defence Research Establishment (supported by Epoch AI](/index.php?title=Norwegian_Defence_Research_Establishment_(supported_by_Epoch_AI&action=edit&redlink=1), [METR)](/index.php?title=METR)&action=edit&redlink=1) |
| Technical Details |
| Type | [Machine Learning](/index.php?title=Machine_Learning&action=edit&redlink=1), [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), [Problem Solving](/index.php?title=Problem_Solving&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Code](/index.php?title=Code&action=edit&redlink=1) |
| Task format | [ML task implementation with PyTorch](/index.php?title=ML_task_implementation_with_PyTorch&action=edit&redlink=1) |
| Number of tasks | 19 |
| Total examples | 19 distinct ML challenges |
| Evaluation metric | [Test accuracy](/index.php?title=Test_accuracy&action=edit&redlink=1), [Cost efficiency](/index.php?title=Cost_efficiency&action=edit&redlink=1), [Code efficiency](/index.php?title=Code_efficiency&action=edit&redlink=1) |
| Domains | [Computer vision](/wiki/computer_vision), [Pattern recognition](/index.php?title=Pattern_recognition&action=edit&redlink=1), [Game prediction](/index.php?title=Game_prediction&action=edit&redlink=1), [Unsupervised learning](/wiki/unsupervised_learning) |
| Languages | Python (PyTorch) |
| Performance |
| Human performance | Under development |
| Baseline | Variable by task |
| SOTA score | ~53% |
| SOTA model | [GPT-4.1-mini, Claude 3.7 Sonnet (no thinking)](/index.php?title=GPT-4.1-mini,_Claude_3.7_Sonnet_(no_thinking)&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | No |
| Resources |
| Website | [Official website](https://htihle.github.io/weirdml.html) |
| GitHub | [Repository](https://github.com/htihle/weirdml) |
| License | Open source |
| Predecessor | [WeirdML v1](/index.php?title=WeirdML_v1&action=edit&redlink=1) |

WeirdML** is a novel [machine learning](/wiki/machine_learning) [benchmark](/wiki/benchmark) designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) on their ability to solve unusual and challenging ML tasks that require genuine understanding rather than pattern matching. Created by [Håvard Tveit Ihle](/index.php?title=H%C3%A5vard_Tveit_Ihle&action=edit&redlink=1) at the [Norwegian Defence Research Establishment](/index.php?title=Norwegian_Defence_Research_Establishment&action=edit&redlink=1) and supported by [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1)'s Benchmarking Hub and [METR](/wiki/metr), WeirdML presents models with 19 distinct machine learning problems that must be solved by generating working [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) code within strict computational constraints. Unlike traditional benchmarks that test knowledge recall or standard implementations, WeirdML requires models to understand data properties, design appropriate architectures, debug solutions iteratively, and optimize for limited resources.

## Overview

WeirdML addresses a critical gap in AI evaluation by testing whether language models can perform actual machine learning on novel datasets rather than simply reciting memorized solutions. The benchmark's "weird" tasks are specifically designed to be solvable with limited data but require careful thinking and creative problem-solving approaches that cannot be solved by blindly applying standard ML recipes[&#91;1&#93;](#cite_note-lesswrong2024-1).

### Key Innovations

| Feature | Description | Impact |
| --- | --- | --- |
| Novel Tasks | Unusual ML problems not in training data | Tests genuine understanding |
| Iterative Feedback | 5 attempts with feedback per task | Mimics real ML development |
| Resource Constraints | Strict GPU/memory/time limits | Tests efficiency |
| Metadata Tracking | Monitors cost, code length, execution time | Comprehensive evaluation |
| Automated Pipeline | Docker-based execution environment | Fair, reproducible testing |

## Task Categories

### Current Tasks (Version 2)

WeirdML v2 includes 19 distinct tasks, more than three times the number from v1:

| Task Category | Task Name | Description | Key Challenge |
| --- | --- | --- | --- |
| Shape Recognition | Shapes (Easy) | Classify 5 shapes from noisy 2D coordinates | Noise filtering |
| Shape Recognition | Shapes (Hard) | Classify shapes with rotation/scaling | Invariant features |
| Image Processing | Image Patch Shuffling (Easy) | Reconstruct images from scrambled patches | Spatial reasoning |
| Image Processing | Image Patch Shuffling (Hard) | Harder variant with more patches | Complex reconstruction |
| Game Prediction | Chess | Predict game outcomes from move sequences | Sequential understanding |
| Unsupervised Learning | Digit Recognition | Classify digits with minimal labels | Semi-supervised learning |
| Various | 13 Additional Tasks | Diverse ML challenges | Multiple approaches needed |

### Task Characteristics

Each task is designed with specific properties:

| Property | Description | Purpose |
| --- | --- | --- |
| Limited Data | Small training sets | Prevents brute force approaches |
| Non-standard | Unusual problem formulations | Tests adaptability |
| Clear Specification | Precise task descriptions | Unambiguous goals |
| Diverse Challenges | Different ML techniques required | Broad capability testing |

## Evaluation Methodology

### Execution Pipeline

| Step | Process | Details |
| --- | --- | --- |
| 1. Task Presentation | LLM receives task description | Includes data loading example code |
| 2. Code Generation | Model generates PyTorch solution | Must handle complete pipeline |
| 3. Execution | Code runs in Docker container | Isolated, controlled environment |
| 4. Evaluation | Test set accuracy measured | Automated scoring |
| 5. Feedback | Results returned to model | Terminal output and accuracy |
| 6. Iteration | Model can improve solution | Up to 5 attempts total |

### Resource Constraints

All solutions must operate within strict limits:

| Resource | Limit | Rationale |
| --- | --- | --- |
| GPU | TITAN V (12GB memory) | Standard research GPU |
| Time | 120-600 seconds per run (varies by configuration) | Practical execution time |
| Memory | 12GB GPU memory | Prevents excessive model sizes |
| Iterations | 5 attempts per task | Balance exploration vs. efficiency |

### Scoring Metrics

| Metric | Description | Calculation |
| --- | --- | --- |
| Test Accuracy | Primary performance metric | Best accuracy across 5 iterations |
| Average Cost | API usage cost per run | Total tokens/cost averaged |
| Code Length | Solution complexity | Lines/characters of code |
| Execution Time | Computational efficiency | Average runtime per iteration |
| Success Rate | Percentage of solved tasks | Tasks above threshold / Total tasks |

## Performance Analysis

### Model Performance (2024)

| Model | Overall Score | Strengths | Weaknesses |
| --- | --- | --- | --- |
| [GPT-4.1](/index.php?title=GPT-4.1&action=edit&redlink=1) | Higher than mini version | Strong coding, instruction following | Higher cost |
| [GPT-4.1-mini](/index.php?title=GPT-4.1-mini&action=edit&redlink=1) | 53% | Excellent cost-performance ratio | Limited context |
| [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) (no thinking) | 53% | Balanced performance | Moderate cost |
| [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) (thinking) | Higher than 53% | Better reasoning | Increased latency |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | <50% | Good general capability | Less specialized for ML |
| Open-weight models | Variable | Cost-effective | Generally lower accuracy |

### Task-Specific Performance

Different models excel at different task categories:

| Task Type | Best Performers | Success Rate | Key Requirements |
| --- | --- | --- | --- |
| Shape Recognition | GPT-4.1, Claude 3.7 | High | Feature engineering |
| Image Reconstruction | Claude models | Medium | Spatial reasoning |
| Chess Prediction | GPT-4.1 | Medium | Sequential processing |
| Unsupervised Learning | Variable | Low | Creative approaches |

## Technical Implementation

### Example Task: Shape Classification

The shapes task exemplifies WeirdML's approach:

```python

1. Task Description (simplified)

"""
Given 512 2D coordinates, identify one of five shapes:
- Circle, Square, Triangle, Pentagon, Star
Some points form the shape, others are noise.
Shapes are centered with fixed orientation and size.
"""

1. Expected Solution Approach

class ShapeClassifier:

   def __init__(self):
       # Model must identify shape patterns
       # Filter noise effectively
       # Use appropriate architecture
       
   def train(self, data):
       # Implement training logic
       # Handle limited labeled data
       # Apply data augmentation if needed

```

### Docker Environment

```dockerfile

1. Execution environment specifications

- Base image: PyTorch with CUDA support
- Python 3.8+
- Common ML libraries pre-installed
- Isolated filesystem
- Network access disabled during execution
```

## Comparison with Other Benchmarks

### Unique Positioning

| Aspect | WeirdML | Traditional ML Benchmarks | Code Benchmarks |
| --- | --- | --- | --- |
| Focus | Novel ML implementation | Standard datasets | General programming |
| Evaluation | End-to-end ML pipeline | Model accuracy only | Code correctness |
| Iteration | 5 attempts with feedback | Single evaluation | Pass/fail |
| Constraints | Strict resource limits | Unlimited resources | Time limits only |
| Problem Type | Unusual, creative | Well-known tasks | Varied programming |

### Related Benchmarks

- **[HumanEval](/wiki/humaneval)**: Tests code generation but not ML specifically

- **[MBPP](/index.php?title=MBPP&action=edit&redlink=1)**: Basic programming problems

- **[MLAgentBench](/index.php?title=MLAgentBench&action=edit&redlink=1)**: ML research tasks but different format

- **[SWE-bench](/wiki/swe-bench)**: Software engineering but not ML-focused

- **[MATH](/wiki/math)**: Mathematical reasoning without implementation

## Version History

### Version 1 (Original)

| Feature | Version 1 | Version 2 |
| --- | --- | --- |
| Number of Tasks | 6 | 19 |
| Metadata Tracking | Basic | Comprehensive |
| Feedback System | Simple | Enhanced |
| Resource Limits | Fixed | Configurable |
| Evaluation Runs | 3 | 5 |

### Version 2 Improvements

1. **Expanded Task Set**: Tripled the number of tasks for more robust evaluation
2. **Detailed Metrics**: Added cost, code length, and execution time tracking
3. **Better Feedback**: Improved error messages and debugging information
4. **Infrastructure**: Integration with Epoch AI's Benchmarking Hub
5. **Support**: METR sponsorship for API costs

## Community and Development

### Organizational Support

| Organization | Role | Contribution |
| --- | --- | --- |
| [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1) | Infrastructure | Benchmarking Hub integration |
| [METR](/wiki/metr) | Financial | API cost sponsorship |
| Community | Development | Task suggestions, testing |

### Human Baselines

METR is working on establishing human baselines by:

- Recruiting top ML engineers and researchers

- Documenting human solution approaches

- Comparing human vs. AI efficiency

- Creating reference implementations

## Applications and Impact

### Research Applications

| Application | Description | Value |
| --- | --- | --- |
| Model Evaluation | Testing true ML understanding | Beyond memorization |
| Capability Assessment | Identifying model strengths/weaknesses | Targeted improvements |
| Training Data | Novel problems for model training | Improved generalization |
| Benchmark Design | Inspiring similar creative benchmarks | Field advancement |

### Practical Implications

1. **AutoML Development**: Testing models' ability to automate ML workflows
2. **AI Research Assistants**: Evaluating capability for research tasks
3. **Educational Tools**: Understanding how AI approaches novel problems
4. **Industry Applications**: Assessing readiness for real-world ML tasks

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Python/PyTorch Only | Single framework focus | Limited generalizability |
| Small Task Set | 19 tasks total | Statistical significance |
| Resource Constraints | May disadvantage some approaches | Bias toward efficiency |
| Limited Documentation | Minimal human baselines | Unclear human-AI gap |

### Future Directions

1. **Task Expansion**: Adding more diverse ML challenges
2. **Framework Support**: TensorFlow, JAX implementations
3. **Human Baselines**: Comprehensive human performance data
4. **Difficulty Scaling**: Tasks of varying complexity levels
5. **Multi-modal Tasks**: Incorporating vision, audio, text

## Significance

WeirdML represents a paradigm shift in evaluating AI systems' machine learning capabilities. By requiring models to solve novel, "weird" problems that cannot be memorized or pattern-matched from training data, it tests genuine understanding and problem-solving ability. The benchmark's focus on complete ML pipelines, from understanding the problem to implementing and debugging solutions, provides a more realistic assessment of whether AI systems can perform the creative, adaptive work required in real-world machine learning.

The similar performance of cost-effective models like GPT-4.1-mini compared to larger models suggests that specialized capabilities matter more than raw scale for these tasks. As models continue to improve on WeirdML, we gain insight into their potential as autonomous ML researchers and engineers.

## See Also

- [Machine Learning Benchmarks](/index.php?title=Machine_Learning_Benchmarks&action=edit&redlink=1)

- [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1)

- [AutoML](/index.php?title=AutoML&action=edit&redlink=1)

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [AI Benchmarks](/index.php?title=AI_Benchmarks&action=edit&redlink=1)

- [Epoch AI](/index.php?title=Epoch_AI&action=edit&redlink=1)

- [METR](/wiki/metr)

## References

1. [↑](#cite_ref-lesswrong2024_1-0) LessWrong. (2024). "Introducing the WeirdML Benchmark". Retrieved from [https://www.lesswrong.com/posts/LfQCzph7rc2vxpweS/introducing-the-weirdml-benchmark](https://www.lesswrong.com/posts/LfQCzph7rc2vxpweS/introducing-the-weirdml-benchmark)

Cite error: `<ref>` tag with name "htihle2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "coai2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "hn2024" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "epoch2024" defined in `<references>` is not used in prior text.