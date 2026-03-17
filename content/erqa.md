---
title: "ERQA"
slug: "erqa"
categories:
  - "AI_Benchmarks"
  - "Embodied_AI"
  - "Robotics_Benchmarks"
  - "Visual_Question_Answering"
  - "2025_Benchmarks"
  - "Google_DeepMind"
  - "Multimodal_Benchmarks"
---**

| ERQA |
| --- |
| Overview |
| Full name | Embodied Reasoning Question Answer |
| Abbreviation | ERQA |
| Description | A benchmark for evaluating embodied reasoning capabilities in AI models for robotics applications |
| Release date | 2025-03 |
| Latest version | 1.0 |
| Benchmark updated | 2025-03 |
| Authors | [Google DeepMind Research Team](/index.php?title=Google_DeepMind_Research_Team&action=edit&redlink=1) |
| Organization | [Google DeepMind](/wiki/google_deepmind) |
| Technical Details |
| Type | [Embodied Reasoning](/index.php?title=Embodied_Reasoning&action=edit&redlink=1), [Visual Question Answering](/index.php?title=Visual_Question_Answering&action=edit&redlink=1), [Robotics](/index.php?title=Robotics&action=edit&redlink=1) |
| Modality | [Vision](/index.php?title=Vision&action=edit&redlink=1), [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multiple-choice Visual Question Answering](/index.php?title=Multiple-choice_Visual_Question_Answering&action=edit&redlink=1) |
| Number of tasks | 7 reasoning categories |
| Total examples | 400 questions |
| Evaluation metric | [Accuracy](/wiki/accuracy) |
| Domains | [Spatial reasoning](/index.php?title=Spatial_reasoning&action=edit&redlink=1), [Trajectory reasoning](/index.php?title=Trajectory_reasoning&action=edit&redlink=1), [Action reasoning](/index.php?title=Action_reasoning&action=edit&redlink=1), [State estimation](/index.php?title=State_estimation&action=edit&redlink=1), [Multi-view reasoning](/index.php?title=Multi-view_reasoning&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not specified |
| Baseline | ~25% (random guess) |
| SOTA score | 48.3% |
| SOTA model | [Gemini 2.0 Pro Experimental](/index.php?title=Gemini_2.0_Pro_Experimental&action=edit&redlink=1) |
| SOTA date | 2025-03 |
| Saturated | No |
| Resources

 |
| GitHub | [Repository](https://github.com/embodiedreasoning/ERQA) |
| Dataset | [Download](https://github.com/embodiedreasoning/ERQA) |
| License | Not specified

 |

ERQA** (**Embodied Reasoning Question Answer**) is a [benchmark](/wiki/benchmark) designed to evaluate [artificial intelligence](/wiki/artificial_intelligence) models' ability to understand and reason about physical environments and robotic scenarios. Released in March 2025 by [Google DeepMind](/wiki/google_deepmind)'s Gemini Robotics team[&#91;1&#93;](#cite_note-erqa_github-1), ERQA addresses the critical need for standardized evaluation of [embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1) capabilities in robotics applications. The benchmark consists of 400 carefully curated [visual question answering](/index.php?title=Visual_question_answering&action=edit&redlink=1) (VQA) tasks that test spatial reasoning, trajectory understanding, and physical world knowledge, with the best model ([Gemini 2.0 Pro Experimental](/index.php?title=Gemini_2.0_Pro_Experimental&action=edit&redlink=1)) achieving 48.3% accuracy.

## Overview

ERQA represents a significant advancement in evaluating [embodied reasoning](/index.php?title=Embodied_reasoning&action=edit&redlink=1) capabilities, the ability of AI systems to understand and reason about physical environments, spatial relationships, and robotic interactions. Unlike traditional AI benchmarks that focus on abstract reasoning or language understanding, ERQA specifically targets the cognitive capabilities required for robots and embodied agents to operate effectively in real-world environments. The benchmark goes beyond testing atomic capabilities to provide integrated assessment of how well models can understand complex physical scenarios[&#91;1&#93;](#cite_note-erqa_github-1).

The benchmark's development was motivated by the growing need for AI systems that can understand and interact with the physical world, particularly in robotics applications. As robots move from controlled industrial settings to dynamic real-world environments, their ability to reason about spatial relationships, predict trajectories, and understand action consequences becomes crucial. ERQA provides a standardized framework for measuring these capabilities across different AI models.

### Significance

ERQA's importance in the field of embodied AI stems from several key contributions:

- **Embodied Focus**: First major benchmark specifically designed for robotics reasoning evaluation

- **Real-world Relevance**: Uses actual robotics dataset images rather than synthetic data

- **Multi-modal Integration**: Tests combined vision-language understanding in physical contexts

- **Comprehensive Coverage**: Evaluates eight distinct reasoning categories crucial for robotics

- **Standardized Evaluation**: Provides consistent framework for comparing embodied AI capabilities

## Dataset Structure

### Question Composition

ERQA's 400 questions are carefully structured to evaluate diverse embodied reasoning capabilities[&#91;1&#93;](#cite_note-erqa_github-1):

| Component | Quantity | Description |
| --- | --- | --- |
| **Total Questions** | 400 | Multiple-choice VQA tasks |
| **Answer Options** | 4 per question | Labeled A, B, C, D |
| **Single-image Questions** | 288 (72%) | Reasoning from individual scenes |
| **Multi-image Questions** | 112 (28%) | Cross-image reasoning required |
| **Storage Format** | TFRecord | TensorFlow Examples format |

### Reasoning Categories

The benchmark evaluates eight distinct types of embodied reasoning:

| Category | Description | Example Task |
| --- | --- | --- |
| **Spatial Reasoning** | Understanding 3D relationships | "Which object is to the left of the robot?" |
| **Trajectory Reasoning** | Predicting motion paths | "Where will the ball land?" |
| **Action Reasoning** | Understanding action consequences | "What happens if the robot pushes this?" |
| **State Estimation** | Inferring object/environment states | "Is the container full or empty?" |
| **Pointing** | Directional understanding | "What is the robot pointing at?" |
| **Multi-view Reasoning** | Integrating multiple perspectives | "How do these views relate?" |
| **Task Reasoning** | Understanding goal-directed behavior | "What task is being performed?" |
| **World Knowledge** | Applying real-world understanding | "What material is this made of?" |

### Data Sources

ERQA incorporates images from multiple prestigious robotics datasets:

| Dataset | Type | Contribution |
| --- | --- | --- |
| **OXE** | Open X-Embodiment | Diverse robotic scenarios |
| **UMI Data** | Universal Manipulation Interface | Manipulation tasks |
| **MECCANO** | Multi-modal dataset | Complex interactions |
| **HoloAssist** | Augmented reality assistance | Human-robot collaboration |
| **EGTEA Gaze+** | Egocentric video | First-person perspectives |

## Evaluation Methodology

### Evaluation Framework

ERQA employs a rigorous evaluation process[&#91;1&#93;](#cite_note-erqa_github-1):

| Aspect | Implementation | Purpose |
| --- | --- | --- |
| **Format** | Multiple-choice (A/B/C/D) | Standardized comparison |
| **Manual Verification** | All questions human-verified | Quality assurance |
| **API Support** | Gemini 2.0, OpenAI compatible | Flexible testing |
| **Chain-of-Thought** | Optional CoT prompting | Enhanced reasoning |
| **Retry Mechanism** | Built-in error handling | Robust evaluation |

### Technical Implementation

The evaluation pipeline includes:

```python

1. Basic evaluation structure

{

 "question": "What action should the robot take?",
 "images": ["image1.jpg", "image2.jpg"],
 "options": {
   "A": "Move forward",
   "B": "Turn left",
   "C": "Grasp object",
   "D": "Stop"
 },
 "correct_answer": "C"

}
```

### Performance Metrics

ERQA uses straightforward accuracy measurement:

- **Primary Metric**: Percentage of correctly answered questions

- **Baseline**: 25% (random guessing among 4 options)

- **Analysis Dimensions**: Performance by category, single vs multi-image

## Performance Analysis

### Current Results (March 2025)

| Model | Accuracy (No CoT) | Accuracy (With CoT) | Improvement |
| --- | --- | --- | --- |
| [Gemini 2.0 Pro Experimental](/index.php?title=Gemini_2.0_Pro_Experimental&action=edit&redlink=1) | 48.3% | 54.8% | +6.5% |
| [Gemini 2.0 Flash](/index.php?title=Gemini_2.0_Flash&action=edit&redlink=1) | 46.3% | 50.3% | +4.0% |
| [Gemini Robotics-ER](/index.php?title=Gemini_Robotics-ER&action=edit&redlink=1) | State-of-the-art | - | - |
| Random Baseline | 25.0% | 25.0% | 0% |

### Performance Insights

Key findings from initial evaluations:

| Finding | Implication |
| --- | --- |
| **Multi-image Challenge** | Questions with multiple images significantly harder |
| **CoT Benefit** | Chain-of-thought consistently improves performance |
| **Category Variance** | Some reasoning types more challenging than others |
| **Below 60% Ceiling** | Substantial room for improvement |

## Technical Specifications

### Repository Structure

| Component | Description | Format |
| --- | --- | --- |
| **Questions** | 400 VQA tasks | TFRecord |
| **Images** | Scene photographs | Various formats |
| **Evaluation Code** | API integration | Python |
| **Documentation** | Usage instructions | Markdown |

### Usage Requirements

| Requirement | Specification |
| --- | --- |
| **Data Format** | TensorFlow Examples |
| **API Access** | Gemini or OpenAI keys |
| **Memory** | Varies by model |
| **Processing** | GPU recommended |

## Research Applications

### Use Cases

ERQA enables several research directions:

| Application | Description | Impact |
| --- | --- | --- |
| **Robotics Development** | Evaluate perception systems | Better robot understanding |
| **Multi-modal Research** | Test vision-language integration | Improved fusion methods |
| **Spatial AI** | Assess 3D reasoning | Enhanced navigation |
| **Safety Testing** | Evaluate action prediction | Safer robotic systems |

### Related Benchmarks

| Benchmark | Focus | Relation to ERQA |
| --- | --- | --- |
| [RoboVQA](/index.php?title=RoboVQA&action=edit&redlink=1) | Robot-specific VQA | Similar domain, different scale |
| [AI2-THOR](/index.php?title=AI2-THOR&action=edit&redlink=1) | Embodied AI simulation | Virtual vs real images |
| [Habitat](/index.php?title=Habitat&action=edit&redlink=1) | Navigation tasks | Narrower focus |
| **ERQA** | Comprehensive embodied reasoning | Broader evaluation |

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **Scale** | 400 questions | Statistical limitations |
| **English Only** | Single language | Limited accessibility |
| **Static Dataset** | Fixed questions | Potential overfitting |
| **Multiple Choice** | Limited format | May not capture full reasoning |

### Future Directions

Potential improvements include:
1. **Dataset Expansion**: Increasing to thousands of questions
2. **Multi-lingual Support**: Adding other languages
3. **Free-form Answers**: Beyond multiple choice
4. **Dynamic Generation**: Procedural question creation
5. **Human Baselines**: Establishing human performance metrics

## Significance

ERQA represents a crucial step forward in evaluating AI systems' ability to understand and reason about the physical world, a fundamental requirement for advancing robotics and embodied AI. By providing a standardized benchmark specifically designed for embodied reasoning, it enables systematic comparison and improvement of models intended for real-world robotic applications. The benchmark's focus on practical scenarios from actual robotics datasets, combined with its comprehensive coverage of eight reasoning categories, makes it an essential tool for developing AI systems capable of physical world interaction.

The relatively low performance of current state-of-the-art models (54.8% with chain-of-thought) highlights the significant challenges remaining in embodied AI and the importance of continued research in this area. As robots increasingly operate in human environments, benchmarks like ERQA will be crucial for ensuring these systems can reliably understand and reason about the physical world around them.

## See Also

- [Embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1)

- [Visual Question Answering](/index.php?title=Visual_Question_Answering&action=edit&redlink=1)

- [Robotics](/index.php?title=Robotics&action=edit&redlink=1)

- [Google DeepMind](/wiki/google_deepmind)

- [Spatial Reasoning](/index.php?title=Spatial_Reasoning&action=edit&redlink=1)

- [Gemini Models](/index.php?title=Gemini_Models&action=edit&redlink=1)

- [Physical World Understanding](/index.php?title=Physical_World_Understanding&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-erqa_github_1-0) [1.1](#cite_ref-erqa_github_1-1) [1.2](#cite_ref-erqa_github_1-2) [1.3](#cite_ref-erqa_github_1-3) Google DeepMind. (2025). "ERQA: Embodied Reasoning Question Answer Benchmark". GitHub. Retrieved from [https://github.com/embodiedreasoning/ERQA](https://github.com/embodiedreasoning/ERQA)