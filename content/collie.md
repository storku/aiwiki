---
title: "COLLIE"
slug: "collie"
categories:
  - "AI_Benchmarks"
  - "Text_Generation_Benchmarks"
  - "Constrained_Generation"
  - "2023_Benchmarks"
  - "Princeton_NLP"
  - "Compositional_Reasoning_Benchmarks"
---**

| COLLIE |
| --- |
| Overview |
| Full name | Systematic Construction of Constrained Text Generation Tasks |
| Abbreviation | COLLIE |
| Description | A grammar-based framework for systematic construction of complex constrained text generation tasks |
| Release date | 2023-07-17 |
| Latest version | v1 |
| Benchmark updated | 2024-03 |
| Authors | [Shunyu Yao](/index.php?title=Shunyu_Yao&action=edit&redlink=1), [Howard Chen](/index.php?title=Howard_Chen&action=edit&redlink=1), [Austin W. Hanjie](/index.php?title=Austin_W._Hanjie&action=edit&redlink=1), [Runzhe Yang](/index.php?title=Runzhe_Yang&action=edit&redlink=1), [Karthik Narasimhan](/index.php?title=Karthik_Narasimhan&action=edit&redlink=1) |
| Organization | [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1) |
| Technical Details |
| Type | [Constrained Text Generation](/index.php?title=Constrained_Text_Generation&action=edit&redlink=1), [Compositional Reasoning](/index.php?title=Compositional_Reasoning&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Constraint-based text generation](/index.php?title=Constraint-based_text_generation&action=edit&redlink=1) |
| Number of tasks | 13 constraint structures |
| Total examples | 2,080 |
| Evaluation metric | [Constraint satisfaction checking](/index.php?title=Constraint_satisfaction_checking&action=edit&redlink=1) |
| Domains | [Language understanding](/index.php?title=Language_understanding&action=edit&redlink=1), [Logical reasoning](/index.php?title=Logical_reasoning&action=edit&redlink=1), [Counting](/index.php?title=Counting&action=edit&redlink=1), [Semantic planning](/index.php?title=Semantic_planning&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not specified |
| Baseline | Varies by constraint type |
| SOTA score | Not publicly reported |
| SOTA model | [Evaluation ongoing](/index.php?title=Evaluation_ongoing&action=edit&redlink=1) |
| SOTA date | 2024 |
| Saturated | No |
| Resources |
| Website | [Official website](https://collie-benchmark.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2307.08689) |
| GitHub | [Repository](https://github.com/princeton-nlp/Collie) |
| Dataset | [Download](https://github.com/princeton-nlp/Collie/tree/main/data) |
| License | MIT (code), various (data sources)

 |

COLLIE** (**Systematic Construction of Constrained Text Generation Tasks**) is a [benchmark](/wiki/benchmark) framework designed to evaluate [large language models](/index.php?title=Large_language_models&action=edit&redlink=1)' ability to generate text that satisfies complex, compositional constraints. Released on July 17, 2023, by researchers from [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1)[&#91;1&#93;](#cite_note-collie_paper-1), COLLIE addresses the limitation that existing [constrained text generation](/index.php?title=Constrained_text_generation&action=edit&redlink=1) benchmarks have become too easy for advanced models like [GPT-4](/wiki/gpt-4). The framework introduces a grammar-based approach that allows systematic creation of diverse constraint types across multiple linguistic levels, from word-level to passage-level requirements.

## Overview

COLLIE represents a paradigm shift in evaluating constrained text generation capabilities. Unlike traditional benchmarks that rely on fixed, simple constraints such as keyword inclusion or sentiment requirements, COLLIE provides a flexible grammar-based framework that can generate arbitrarily complex, compositional constraints. This approach enables researchers to create challenging tasks that test multiple cognitive abilities simultaneously, including [language understanding](/index.php?title=Language_understanding&action=edit&redlink=1), [logical reasoning](/index.php?title=Logical_reasoning&action=edit&redlink=1), counting, and [semantic planning](/index.php?title=Semantic_planning&action=edit&redlink=1)[&#91;1&#93;](#cite_note-collie_paper-1).

The benchmark's design philosophy centers on the observation that current language models have largely solved simple constraint satisfaction tasks, necessitating more sophisticated evaluation methods. By enabling the systematic construction of multi-level constraints that can be combined in various ways, COLLIE provides a scalable approach to benchmark creation that can evolve alongside improving model capabilities.

### Significance

COLLIE's importance in the field of AI evaluation stems from several key contributions:

- **Compositional Complexity**: Introduces multi-level, compositional constraints that go beyond simple word inclusion

- **Systematic Framework**: Provides a grammar-based system for generating diverse constraint types

- **Extensibility**: Designed to be easily extended with new constraint types as models improve

- **Automatic Task Generation**: Can automatically extract task instances from raw text corpora

- **Cognitive Diversity**: Tests multiple cognitive abilities through varied constraint combinations

## Framework Architecture

### Core Components

COLLIE's architecture consists of five fundamental classes that work together to create complex constraints[&#91;2&#93;](#cite_note-collie_github-2):

| Component | Description | Example Usage |
| --- | --- | --- |
| **Level** | Defines the linguistic scope of constraints | Word, Sentence, Paragraph, Passage |
| **Transformation** | Modifies text elements | Capitalization, reversal, substitution |
| **Logic** | Combines multiple constraints | AND, OR, NOT operations |
| **Relation** | Establishes relationships between elements | Ordering, proximity, dependency |
| **Reduction** | Aggregates constraint evaluations | Count, percentage, threshold checks |

### Constraint Levels

The framework operates across four distinct linguistic levels:

| Level | Scope | Example Constraints |
| --- | --- | --- |
| **Word Level** | Individual tokens | Specific word inclusion, exclusion, frequency |
| **Sentence Level** | Complete sentences | Sentence structure, length, complexity |
| **Paragraph Level** | Multiple sentences | Topic coherence, transition requirements |
| **Passage Level** | Entire text | Overall structure, theme consistency |

## Dataset Structure

### COLLIE-v1 Dataset

The first version of COLLIE includes a carefully curated dataset[&#91;1&#93;](#cite_note-collie_paper-1):

| Aspect | Specification |
| --- | --- |
| **Total Instances** | 2,080 |
| **Constraint Structures** | 13 distinct types |
| **Data Sources** | Project Gutenberg, Wikipedia |
| **Storage Format** | Python pickle (.dill) |
| **File Location** | data/all_data.dill |

### Constraint Categories

The 13 constraint structures in COLLIE-v1 cover diverse linguistic and cognitive challenges:

| Category | Constraint Types | Cognitive Skills Tested |
| --- | --- | --- |
| **Lexical** | Word inclusion/exclusion, vocabulary restrictions | Vocabulary control, semantic understanding |
| **Syntactic** | Grammar patterns, sentence structures | Syntactic knowledge, grammatical reasoning |
| **Semantic** | Topic adherence, meaning preservation | Semantic understanding, conceptual reasoning |
| **Logical** | Conditional requirements, boolean operations | Logical reasoning, rule following |
| **Numerical** | Word counts, frequency requirements | Counting, numerical reasoning |
| **Structural** | Format requirements, organization patterns | Planning, structural reasoning |

## Evaluation Methodology

### Four-Step Pipeline

COLLIE employs a systematic evaluation pipeline[&#91;1&#93;](#cite_note-collie_paper-1):

| Step | Process | Description |
| --- | --- | --- |
| **1. Constraint Specification** | Define requirements | Create complex constraints using the grammar framework |
| **2. Example Extraction** | Gather instances | Automatically extract qualifying examples from text corpora |
| **3. Instruction Rendering** | Generate prompts | Convert constraints to natural language instructions |
| **4. Generation & Evaluation** | Test models | Generate text and verify constraint satisfaction |

### Constraint Checking

The evaluation system uses automated checking mechanisms:

```python

1. Example constraint checking process

constraint = CompositeConstraint(

   word_level=["include 'science'", "exclude 'fiction'"],
   sentence_level=["max_length: 20"],
   logic="AND"

)
result = check_constraint(generated_text, constraint)
```

### Scoring Methodology

Models are evaluated on:

- **Constraint Satisfaction Rate**: Percentage of constraints successfully met

- **Partial Credit**: Some constraints allow partial satisfaction scoring

- **Complexity Scaling**: Performance across increasing constraint complexity levels

## Model Performance

### Tested Models

COLLIE has been used to evaluate five state-of-the-art instruction-tuned language models[&#91;3&#93;](#cite_note-collie_iclr-3):

| Model Category | Characteristics | Performance Trends |
| --- | --- | --- |
| **Large-scale LLMs** | GPT-4 class models | Better at complex constraints but still show failures |
| **Instruction-tuned Models** | Fine-tuned on instructions | Improved constraint following but struggle with composition |
| **Open-source Models** | Community models | Variable performance, often fail on multi-level constraints |

### Performance Insights

Key findings from COLLIE evaluations reveal:

- **Complexity Gap**: Performance degrades significantly with constraint complexity

- **Compositional Challenges**: Models struggle with multiple simultaneous constraints

- **Level-dependent Performance**: Word-level constraints easier than passage-level

- **Logical Operations**: Boolean combinations particularly challenging

## Technical Implementation

### Installation and Setup

COLLIE provides a Python package for easy integration[&#91;2&#93;](#cite_note-collie_github-2):

| Requirement | Specification |
| --- | --- |
| **Python Version** | 3.9 recommended (compatibility issues with 3.10+) |
| **Installation** | `pip install collie-bench` or `pip install -e .` from repository |
| **Dependencies** | NumPy, PyTorch, Transformers |
| **Memory Requirements** | Varies by model size |

### Usage Example

Basic usage pattern for COLLIE:

```python
from collie import ConstraintGenerator, Evaluator

1. Define constraints

generator = ConstraintGenerator()
constraints = generator.create_composite_constraint(

   levels=['word', 'sentence'],
   types=['inclusion', 'length']

)

1. Evaluate model

evaluator = Evaluator()
results = evaluator.evaluate_model(

   model_name="gpt-4",
   constraints=constraints,
   test_instances=test_data

)
```

## Research Applications

### Current Research Directions

COLLIE enables several research areas:

| Research Area | Application | Impact |
| --- | --- | --- |
| **Controllable Generation** | Developing better constraint-following models | Improved text generation control |
| **Prompt Engineering** | Optimizing constraint instructions | Better model instruction following |
| **Cognitive Evaluation** | Testing specific reasoning abilities | Understanding model limitations |
| **Benchmark Design** | Creating new evaluation tasks | Advancing evaluation methodology |

### Community Contributions

The framework encourages community involvement through:

- **Custom Constraint Development**: Researchers can add new constraint types

- **Dataset Expansion**: Additional text sources can be incorporated

- **Model Submissions**: Community can evaluate new models

- **Methodology Improvements**: Framework extensions and optimizations

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **English-only** | Currently limited to English text | Reduces global applicability |
| **Text Modality** | No multimodal constraints | Misses vision-language interactions |
| **Static Constraints** | Pre-defined constraint types | May not capture all generation aspects |
| **Computational Cost** | Complex constraints expensive to check | Limits large-scale evaluation |

### Future Directions

Potential extensions and improvements include:

1. **Multilingual Support**: Extending to multiple languages
2. **Dynamic Constraints**: Constraints that adapt during generation
3. **Multimodal Extensions**: Incorporating image and audio constraints
4. **Human Evaluation**: Comparing automated checks with human judgments
5. **Real-world Applications**: Applying to practical generation tasks

## Impact on the Field

### Advancing Constrained Generation

COLLIE has influenced the field by:

- **Raising Standards**: Establishing need for complex constraint evaluation

- **Systematic Approach**: Providing grammar-based framework for task creation

- **Revealing Limitations**: Exposing weaknesses in current models

- **Driving Innovation**: Spurring development of better constraint-following techniques

### Related Benchmarks

| Benchmark | Focus | Relation to COLLIE |
| --- | --- | --- |
| [CommonGen](/index.php?title=CommonGen&action=edit&redlink=1) | Commonsense generation | Simpler, fixed constraints |
| [ROCStories](/index.php?title=ROCStories&action=edit&redlink=1) | Story generation | Narrative constraints only |
| [KILT](/index.php?title=KILT&action=edit&redlink=1) | Knowledge-intensive tasks | Different constraint types |
| [TextWorld](/index.php?title=TextWorld&action=edit&redlink=1) | Interactive fiction | Game-based constraints |

## Significance

COLLIE represents a crucial advancement in evaluating language models' ability to follow complex, compositional constraints during text generation. By providing a systematic, grammar-based framework for creating diverse constraint types, it addresses the limitation that existing benchmarks have become too easy for modern language models. The benchmark's extensible design ensures it can evolve alongside improving model capabilities, while its multi-level constraint system reveals important limitations in current models' ability to satisfy complex, compositional requirements.

The framework's emphasis on automatic task generation and systematic constraint construction provides a scalable approach to benchmark creation that can adapt to future developments in AI. As language models continue to improve, COLLIE's flexible architecture ensures it will remain relevant for evaluating increasingly sophisticated constraint-following capabilities, making it an essential tool for advancing controllable text generation research.

## See Also

- [Constrained Text Generation](/index.php?title=Constrained_Text_Generation&action=edit&redlink=1)

- [Princeton NLP](/index.php?title=Princeton_NLP&action=edit&redlink=1)

- [Compositional Reasoning](/index.php?title=Compositional_Reasoning&action=edit&redlink=1)

- [Instruction Following](/index.php?title=Instruction_Following&action=edit&redlink=1)

- [CommonGen](/index.php?title=CommonGen&action=edit&redlink=1)

- [Controllable Generation](/index.php?title=Controllable_Generation&action=edit&redlink=1)

- [Natural Language Generation](/index.php?title=Natural_Language_Generation&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-collie_paper_1-0) [1.1](#cite_ref-collie_paper_1-1) [1.2](#cite_ref-collie_paper_1-2) [1.3](#cite_ref-collie_paper_1-3) Yao, S., Chen, H., Hanjie, A. W., Yang, R., & Narasimhan, K. (2023). "COLLIE: Systematic Construction of Constrained Text Generation Tasks". arXiv:2307.08689. Retrieved from [https://arxiv.org/abs/2307.08689](https://arxiv.org/abs/2307.08689)

2. ↑ [2.0](#cite_ref-collie_github_2-0) [2.1](#cite_ref-collie_github_2-1) Princeton NLP. (2023). "COLLIE: Constrained Text Generation Benchmark". GitHub. Retrieved from [https://github.com/princeton-nlp/Collie](https://github.com/princeton-nlp/Collie)

3. [↑](#cite_ref-collie_iclr_3-0) Yao, S., et al. (2024). "COLLIE: Systematic Construction of Constrained Text Generation Tasks". ICLR 2024 Proceedings.