---
title: "EQ-Bench 3"
slug: "eq-bench_3"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Emotional_Intelligence_Benchmarks"
  - "Language_Model_Benchmarks"
  - "2025_Benchmarks"
  - "Social_Intelligence_Benchmarks"
---**

| EQ-Bench 3 |
| --- |
| Overview |
| Full name | Emotional Intelligence Benchmark Version 3 |
| Abbreviation | EQ-Bench 3 |
| Description | An LLM-judged benchmark testing emotional intelligence through challenging role-plays and analysis tasks |
| Release date | 2024 (planned/theoretical) |
| Latest version | 3.0 |
| Benchmark updated | 2025 |
| Authors | [Samuel J. Paech](/index.php?title=Samuel_J._Paech&action=edit&redlink=1) |
| Organization | [Independent Research](/index.php?title=Independent_Research&action=edit&redlink=1) |
| Technical Details |
| Type | [Emotional Intelligence](/index.php?title=Emotional_Intelligence&action=edit&redlink=1), [Social Understanding](/index.php?title=Social_Understanding&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Multi-turn dialogues, Analysis tasks](/index.php?title=Multi-turn_dialogues,_Analysis_tasks&action=edit&redlink=1) |
| Number of tasks | Unspecified (original EQ-Bench had 60-171 questions) |
| Total examples | Unspecified |
| Evaluation metric | [Elo rating](/index.php?title=Elo_rating&action=edit&redlink=1), [Rubric scoring](/index.php?title=Rubric_scoring&action=edit&redlink=1) |
| Domains | [Relationship dynamics](/index.php?title=Relationship_dynamics&action=edit&redlink=1), [Workplace conflicts](/index.php?title=Workplace_conflicts&action=edit&redlink=1), [Social interactions](/index.php?title=Social_interactions&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not reported |
| Baseline | 200 (Llama 3.2-1B) |
| SOTA score | 1500 |
| SOTA model | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://eqbench.com/) |
| Paper | [(original EQ-Bench) Paper](https://arxiv.org/abs/2312.06281) |
| GitHub | [Repository](https://github.com/EQ-bench/eqbench3) |
| Dataset | [Download](https://github.com/EQ-bench/eqbench3) |
| License | Open source |
| Predecessor | [EQ-Bench 2](/index.php?title=EQ-Bench_2&action=edit&redlink=1) |

EQ-Bench 3** is an [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate [emotional intelligence](/index.php?title=Emotional_intelligence&action=edit&redlink=1) (EI) in [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) through challenging role-play scenarios and analytical tasks. Developed by [Samuel J. Paech](/index.php?title=Samuel_J._Paech&action=edit&redlink=1) as an evolution of the original EQ-Bench (2023), EQ-Bench 3 represents the latest iteration of the emotional intelligence benchmark series, using [Claude](/wiki/claude) Sonnet 3.7 as the default judge model to assess how well AI systems understand complex emotions, social dynamics, and interpersonal relationships.

## Overview

EQ-Bench 3 addresses a critical gap in AI evaluation by focusing on nuanced social skills that are crucial for human-AI interaction but often missed by traditional benchmarks. Unlike standard EQ tests that have become too easy for modern LLMs, EQ-Bench 3 employs difficult, free-form role-plays that effectively discriminate between models' emotional intelligence capabilities.

### Motivation

The development of EQ-Bench 3 was driven by several key observations:

- Standard emotional intelligence tests are insufficient for evaluating advanced LLMs

- Existing benchmarks often fail to capture nuanced social skills essential for meaningful human-AI interaction

- The need for assessment tools that go beyond knowledge-based or short-answer questions

- The importance of measuring active EQ skills rather than passive recognition

The benchmark specifically targets the evaluation of empathy, [theory of mind](/index.php?title=Theory_of_mind&action=edit&redlink=1), social dexterity, and psychological insight through realistic, complex scenarios that mirror real-world social interactions.

## Technical Architecture

### Core Components

EQ-Bench 3 consists of two primary evaluation systems:

| Component | Description | Function |
| --- | --- | --- |
| Scenario Dataset | 45 multi-turn scenarios | Provides diverse test cases covering various social contexts |
| Judge Model System | Claude Sonnet 3.7 (default) | Evaluates responses using rubric and pairwise comparisons |
| Evaluation Pipeline | Automated scoring system | Processes responses and calculates Elo ratings |
| Analysis Framework | Detailed rubric criteria | Assesses eight core dimensions of emotional intelligence |

### Evaluation Methodology

#### Dual-Pass Evaluation System

EQ-Bench 3 employs a sophisticated two-pass evaluation approach:

| Pass Type | Description | Output |
| --- | --- | --- |
| Rubric Pass | Judge model assigns numerical scores for each scenario | Individual scenario scores across 8 EI dimensions |
| Elo Pass | Pairwise comparisons between different models' responses | Overall Elo ranking via TrueSkill algorithm |

#### Eight Core Dimensions

The benchmark evaluates responses across eight fundamental aspects of emotional intelligence:

| Dimension | Description | Weight in Scoring |
| --- | --- | --- |
| Demonstrated Empathy | Ability to understand and share others' feelings | Equal weight |
| Pragmatic EI | Practical application of emotional understanding | Equal weight |
| Depth of Insight | Psychological understanding and analysis quality | Equal weight |
| Social Dexterity | Navigation of complex social situations | Equal weight |
| Emotional Reasoning | Logic applied to emotional contexts | Equal weight |
| Appropriate Validation/Challenge | Knowing when to support vs. question | Equal weight |
| Message Tailoring | Adapting communication to context and recipient | Equal weight |
| Overall EQ | Holistic emotional intelligence assessment | Equal weight |

## Test Structure

### Scenario Types

EQ-Bench 3 includes two main categories of assessment tasks:

#### Role-Play Scenarios

The majority of the 45 scenarios are pre-written prompts spanning three turns:

- **Turn 1**: User sets up the scenario context

- **Turn 2**: Introduction of conflict or misdirection

- **Turn 3**: Model must respond in-character while navigating complexity

Example contexts include:

- Relationship conflicts requiring mediation

- Workplace tensions needing resolution

- Parenting challenges demanding empathy

- Social dilemmas requiring nuanced understanding

#### Analysis Tasks

Several scenarios require the model to:

- Analyze provided roleplay transcripts

- Identify psychologically compelling aspects

- Demonstrate deep understanding of human dynamics

- Explain emotional subtext and motivations

### Response Format

Each response follows a structured format designed to expose the model's reasoning:

| Section | Purpose | Example Prompt |
| --- | --- | --- |
| "I'm thinking & feeling" | Reveals model's internal processing | "Based on the situation, I'm feeling concerned about..." |
| "They're thinking & feeling" | Demonstrates theory of mind | "The other person likely feels frustrated because..." |
| Response | The actual in-character reply | "I understand your perspective, and..." |

## Performance Metrics

### Scoring System

#### Elo Rating Methodology

EQ-Bench 3 uses a normalized Elo rating system:

- **Anchor Points**: OpenAI o3 at 1500, Llama 3.2-1B at 200

- **Calculation**: Based on pairwise comparisons using TrueSkill algorithm

- **Update Frequency**: Continuous as new models are evaluated

#### Informational Abilities Heatmap

The benchmark tracks eleven stylistic traits (not used in scoring):

| Ability | Description | Assessment Focus |
| --- | --- | --- |
| Humanlike | Natural, conversational responses | Response authenticity |
| Safety | Adherence to ethical guidelines | Risk mitigation |
| Assertive | Confident communication style | Communication strength |
| Social IQ | Understanding of social dynamics | Social awareness |
| Warm | Friendly and approachable tone | Emotional warmth |
| Analytic | Logical reasoning application | Analytical thinking |
| Insight | Novel perspective generation | Creative understanding |
| Empathy | Understanding others' emotions | Emotional resonance |
| Compliant | Instruction following ability | Task adherence |
| Moralising | Tendency toward moral judgment | Ethical positioning |
| Pragmatic | Focus on practical solutions | Solution orientation |

## Current Performance

### Leaderboard Leaders (2025)

| Rank | Model | Elo Score | Organization | Notable Strengths |
| --- | --- | --- | --- | --- |
| 1 | [OpenAI o3](/index.php?title=OpenAI_o3&action=edit&redlink=1) | 1500 | OpenAI | Benchmark anchor, exceptional across all dimensions |
| 2 | [DeepSeek R1](/index.php?title=DeepSeek_R1&action=edit&redlink=1) | ~1450 | DeepSeek | Strong analytical and reasoning capabilities |
| 3 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | Judge Model | Anthropic | Used as evaluation standard |
| - | [Llama 3.2-1B](/index.php?title=Llama_3.2-1B&action=edit&redlink=1) | 200 | Meta | Baseline anchor model |

### Key Performance Insights

- **Wide Performance Range**: 1300-point spread between top and baseline models

- **Correlation with General Intelligence**: Strong correlation (r=0.97) with comprehensive benchmarks like [MMLU](/wiki/mmlu)

- **Consistency**: Highly repeatable results across multiple evaluation runs

- **Discrimination Power**: Effectively differentiates between models with similar general capabilities

## Implementation

### Installation and Setup

```bash

1. Clone the repository

git clone [https://github.com/EQ-bench/eqbench3](https://github.com/EQ-bench/eqbench3)
cd eqbench3

1. Install dependencies

pip install -r requirements.txt

1. Configure API keys for judge model

export ANTHROPIC_API_KEY="your-key-here"
```

### Running Evaluations

#### Single Iteration (Rubric Scoring)

```python
python eqbench3.py --model "your-model" --rubric-only
```

#### Full Benchmark (With Elo Rating)

```python
python eqbench3.py --model "your-model" --full-benchmark
```

### Data Storage

- **Rubric Scores**: Stored in `eqbench3_runs.json`

- **Elo Results**: Recorded in `elo_results_eqbench3.json`

- **Leaderboard Data**: Synchronized with online leaderboard

## Applications and Impact

### Research Applications

| Application Area | Use Case | Impact |
| --- | --- | --- |
| AI Safety | Evaluating social understanding for safe deployment | Risk assessment |
| Model Development | Benchmarking emotional capabilities during training | Performance optimization |
| Human-AI Interaction | Assessing readiness for sensitive conversations | Deployment decisions |
| Psychology Research | Studying machine understanding of human emotions | Scientific insights |

### Practical Applications

- **Customer Service AI**: Evaluating empathy and problem-solving abilities

- **Mental Health Support**: Assessing appropriateness for supportive roles

- **Educational Assistants**: Measuring ability to understand student emotions

- **Social Companions**: Determining suitability for companionship applications

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| English Only | Currently limited to English-language scenarios | Reduced global applicability |
| Text-Only | No multimodal emotional cues (voice, visual) | Limited emotional signal |
| Judge Model Dependency | Relies on Claude Sonnet 3.7 for evaluation | Potential evaluation bias |
| Scenario Scope | 45 scenarios may not cover all social contexts | Coverage gaps |
| Cultural Bias | Western-centric scenario design | May not reflect global norms |

### Future Directions

1. **Multilingual Extension**: Adaptation to multiple languages and cultures
2. **Multimodal Integration**: Incorporation of voice and visual emotional cues
3. **Dynamic Scenario Generation**: Procedurally generated test cases
4. **Human Baseline**: Establishing human performance benchmarks
5. **Cross-Cultural Validation**: Scenarios reflecting diverse cultural contexts

## Related Benchmarks

- **[EQ-Bench](/index.php?title=EQ-Bench&action=edit&redlink=1)**: Original version focusing on emotion prediction

- **[EQ-Bench 2](/index.php?title=EQ-Bench_2&action=edit&redlink=1)**: Intermediate iteration with expanded scenarios

- **[Creative Writing v3](/wiki/creative_writing_v3)**: Related benchmark for creative text generation

- **[Longform Creative Writing](/wiki/longform_creative_writing)**: Extended creative writing assessment

- **[Theory of Mind Benchmark](/index.php?title=Theory_of_Mind_Benchmark&action=edit&redlink=1)**: Focused theory of mind evaluation

- **[SocialIQA](/index.php?title=SocialIQA&action=edit&redlink=1)**: Social intelligence question answering

- **[EmpatheticDialogues](/index.php?title=EmpatheticDialogues&action=edit&redlink=1)**: Empathetic conversation dataset

## Significance

EQ-Bench 3 represents a significant advancement in evaluating AI systems' emotional intelligence capabilities. Its strong correlation with general intelligence benchmarks suggests that emotional understanding may be a fundamental aspect of artificial general intelligence. The benchmark's ability to discriminate between models with similar technical capabilities but different social understanding makes it valuable for:

- Identifying models suitable for human-facing applications

- Guiding development of more emotionally aware AI systems

- Understanding the relationship between cognitive and emotional intelligence in AI

- Establishing standards for AI deployment in sensitive contexts

## See Also

- [Emotional Intelligence](/index.php?title=Emotional_Intelligence&action=edit&redlink=1)

- [Theory of Mind](/index.php?title=Theory_of_Mind&action=edit&redlink=1)

- [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1)

- [AI Safety](/index.php?title=AI_Safety&action=edit&redlink=1)

- [Human-AI Interaction](/index.php?title=Human-AI_Interaction&action=edit&redlink=1)

- [Social Intelligence](/index.php?title=Social_Intelligence&action=edit&redlink=1)

- [Empathy in AI](/index.php?title=Empathy_in_AI&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "paech2023" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "eqbench3_github" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "eqbench_website" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "paech2024" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "eqbench_about" defined in `<references>` has group attribute "" which does not appear in prior text.