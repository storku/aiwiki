---
title: "Creative Writing v3"
slug: "creative_writing_v3"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Creative_Writing_Benchmarks"
  - "Text_Generation_Benchmarks"
  - "2025_Benchmarks"
  - "Language_Model_Benchmarks"
---**

| Creative Writing v3 |
| --- |
| Overview |
| Full name | Creative Writing Benchmark Version 3 |
| Abbreviation | CW v3 |
| Description | An LLM-judged creative writing benchmark using hybrid rubric and Elo scoring for enhanced discrimination |
| Release date | 2025 |
| Latest version | 3.0 |
| Benchmark updated | 2025 |
| Authors | [Samuel J. Paech](/index.php?title=Samuel_J._Paech&action=edit&redlink=1) |
| Organization | [Independent Research](/index.php?title=Independent_Research&action=edit&redlink=1) |
| Technical Details |
| Type | [Creative Writing](/index.php?title=Creative_Writing&action=edit&redlink=1), [Text Generation](/index.php?title=Text_Generation&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1) |
| Task format | [Generative writing prompts](/index.php?title=Generative_writing_prompts&action=edit&redlink=1) |
| Number of tasks | 32 prompts (96 iterations total) |
| Total examples | 96 |
| Evaluation metric | [Elo rating](/index.php?title=Elo_rating&action=edit&redlink=1), [Rubric scoring](/index.php?title=Rubric_scoring&action=edit&redlink=1), [Repetition metric](/index.php?title=Repetition_metric&action=edit&redlink=1), [Slop score](/index.php?title=Slop_score&action=edit&redlink=1) |
| Domains | [Fiction writing](/index.php?title=Fiction_writing&action=edit&redlink=1), [Humor](/index.php?title=Humor&action=edit&redlink=1), [Romance](/index.php?title=Romance&action=edit&redlink=1), [Spatial awareness](/index.php?title=Spatial_awareness&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Not reported |
| Baseline | Variable by model |
| SOTA score | ~1500 (normalized Elo) |
| SOTA model | [DeepSeek V3](/index.php?title=DeepSeek_V3&action=edit&redlink=1) |
| SOTA date | 2025 |
| Saturated | No |
| Resources |
| Website | [Official website](https://eqbench.com/creative_writing.html) |
| GitHub | [Repository](https://github.com/EQ-bench/creative-writing-bench) |
| Dataset | [Download](https://github.com/EQ-bench/creative-writing-bench) |
| License | Open source |
| Predecessor | [Creative Writing v2](/index.php?title=Creative_Writing_v2&action=edit&redlink=1) |

Creative Writing v3** is an [artificial intelligence](/wiki/artificial_intelligence) benchmark designed to evaluate the creative writing capabilities of [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs) through a comprehensive assessment framework. Released in 2025 by [Samuel J. Paech](/index.php?title=Samuel_J._Paech&action=edit&redlink=1), Creative Writing v3 employs a hybrid approach combining rubric scoring with [Elo rating](/index.php?title=Elo_rating&action=edit&redlink=1) systems, using [Claude](/wiki/claude) 3.7 Sonnet as the judge model to assess generated creative content across multiple dimensions of writing quality.

## Overview

Creative Writing v3 addresses the challenge of objectively evaluating subjective creative output from AI systems. The benchmark tests models' abilities to generate engaging, coherent, and creative text across diverse writing prompts, including scenarios that require humor, romance, spatial awareness, and unique first-person perspectives, areas where [language models](/index.php?title=Language_models&action=edit&redlink=1) traditionally struggle to match human writers.

### Motivation

The development of Creative Writing v3 was driven by several key factors:

- The need for better discrimination between high-performing models in creative tasks

- Limitations of previous benchmarks in detecting subtle writing quality differences

- The importance of addressing known LLM judge biases in creative evaluation

- The goal of exposing specific weaknesses in AI-generated creative content

The benchmark specifically targets areas where language models struggle, creating a steeper gradient for meaningful evaluation of creative capabilities.

## Technical Architecture

### Core Components

| Component | Description | Function |
| --- | --- | --- |
| Prompt Dataset | 32 distinct creative writing prompts | Provides diverse creative challenges |
| Generation System | Temperature 0.7, min_p 0.1 settings | Balances creativity with consistency |
| Judge Model | Claude 3.7 Sonnet | Evaluates creative output quality |
| Scoring Framework | Hybrid rubric + Elo system | Comprehensive quality assessment |

### Evaluation Methodology

#### Dual Scoring System

Creative Writing v3 employs a sophisticated dual-scoring approach:

| Scoring Method | Description | Output |
| --- | --- | --- |
| Rubric Assessment | 36 criteria scored 0-10 | Individual quality metrics |
| Elo Rating | Pairwise comparisons using Glicko-2 | Overall ranking with uncertainty |

#### Key Metrics

The benchmark tracks four primary metrics:

| Metric | Description | Purpose |
| --- | --- | --- |
| Rubric Score | Aggregate score across 36 writing criteria | Quality assessment |
| Elo Score (Normalized) | Relative ranking from pairwise comparisons | Competitive positioning |
| Repetition Metric | Frequency of repeated words/phrases | Diversity measurement |
| Slop Score | Tracking of overused "GPT-isms" | Cliché detection |

## Test Structure

### Prompt Categories

Creative Writing v3 includes prompts designed to challenge models in specific areas:

| Category | Description | Example Challenge |
| --- | --- | --- |
| Humor | Comedy and wit generation | Writing genuinely funny content |
| Romance | Emotional and romantic scenarios | Creating authentic emotional connection |
| Spatial Awareness | Physical space descriptions | Accurate spatial reasoning in narrative |
| Unique Perspectives | Unusual first-person viewpoints | Non-standard narrator voices |
| Character Development | Complex character creation | Multi-dimensional personalities |
| Plot Construction | Narrative structure | Coherent story progression |

### Generation Parameters

- **Iterations**: 3 iterations per prompt (96 total generations)

- **Temperature**: 0.7 (encourages creativity)

- **Min_p**: 0.1 (maintains quality threshold)

- **Output Length**: Truncated to 4000 characters (controls length bias)

## Evaluation Criteria

### 36-Point Rubric

The comprehensive rubric evaluates writing across multiple dimensions:

| Category | Criteria Examples | Weight |
| --- | --- | --- |
| Coherence | Logical flow, consistency, clarity | High |
| Creativity | Originality, unexpected elements, imagination | High |
| Style | Voice, tone, prose quality | Medium |
| Technical | Grammar, punctuation, structure | Medium |
| Engagement | Hook, pacing, reader interest | High |
| Character | Depth, believability, development | Medium |
| Dialogue | Natural speech, distinct voices | Medium |
| Description | Vivid imagery, sensory details | Medium |

### Bias Mitigation

#### Controlled Biases

Creative Writing v3 implements specific controls for known biases:

| Bias Type | Mitigation Strategy | Implementation |
| --- | --- | --- |
| Length Bias | Output truncation | 4000 character limit |
| Position Bias | Bidirectional comparison | A/B and B/A averaging |
| Verbosity Bias | Penalty for excessive prose | Targeted judge prompting |
| Poetic Incoherence | Detection and punishment | Forced metaphor penalties |

#### Uncontrolled Biases

The benchmark acknowledges certain biases remain:

- Judge self-bias (potential preference for similar style)

- Positivity/negativity preference

- NSFW content aversion ("smut bias")

- Stylistic preferences

- "Slop" bias (overused tropes)

## Version 3 Improvements

### Key Enhancements from v2

| Improvement | Description | Impact |
| --- | --- | --- |
| Judge Upgrade | Claude 3.7 Sonnet replacing previous version | Better discrimination |
| Metaphor Detection | Targeted prompting for incoherent metaphors | Quality improvement |
| Paragraph Scoring | Automatic scaling for single-sentence paragraphs | Style normalization |
| Elo Integration | Pairwise comparisons added | Enhanced discrimination |
| Glicko-2 System | Rating uncertainty and volatility tracking | Robust rankings |

### Slop Detection

Creative Writing v3 introduces sophisticated "slop" detection:

- Master word list of overused AI phrases

- Tracking of "GPT-isms" and clichés

- Penalty system for formulaic writing

- Encouragement of fresh, original expression

## Performance Analysis

### Current Leaders (2025)

| Rank | Model | Elo Score (Normalized) | Notable Strengths |
| --- | --- | --- | --- |
| 1 | [DeepSeek V3](/index.php?title=DeepSeek_V3&action=edit&redlink=1) | ~1500 | Exceptional creativity and coherence |
| 2 | [Claude 3.7 Sonnet](/index.php?title=Claude_3.7_Sonnet&action=edit&redlink=1) | ~1400 | Natural, human-like prose |
| 3 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | ~1350 | Versatile across genres |
| 4 | [Gemini 2.5 Pro](/index.php?title=Gemini_2.5_Pro&action=edit&redlink=1) | ~1300 | Strong technical writing |
| 5 | [Grok 3](/index.php?title=Grok_3&action=edit&redlink=1) | ~1200 | Unique voice and humor |

### Performance Insights

- **Wide Performance Spread**: Significant variation between top and bottom performers

- **Style Differentiation**: Models show distinct writing personalities

- **Weakness Patterns**: Consistent struggles with humor and spatial reasoning

- **Improvement Trajectory**: Newer models showing marked creative improvements

## Implementation

### Installation and Setup

```bash

1. Clone the repository

git clone [https://github.com/EQ-bench/creative-writing-bench](https://github.com/EQ-bench/creative-writing-bench)
cd creative-writing-bench

1. Install dependencies

pip install -r requirements.txt

1. Configure judge model API

export ANTHROPIC_API_KEY="your-key-here"
```

### Running Evaluations

```python

1. Basic evaluation

python creative_writing_v3.py --model "your-model" --iterations 3

1. Full benchmark with Elo

python creative_writing_v3.py --model "your-model" --full-benchmark

1. Custom temperature settings

python creative_writing_v3.py --model "your-model" --temperature 0.7 --min-p 0.1
```

### Output Format

Results are stored in multiple formats:

- **Raw Outputs**: Individual generated texts

- **Rubric Scores**: Detailed scoring breakdowns

- **Elo Results**: Pairwise comparison outcomes

- **Aggregate Metrics**: Overall performance summary

## Applications and Impact

### Research Applications

| Application | Use Case | Research Value |
| --- | --- | --- |
| Model Development | Training creative capabilities | Performance optimization |
| Architecture Comparison | Evaluating design choices | Technical insights |
| Prompt Engineering | Optimizing generation techniques | Methodology refinement |
| Bias Studies | Understanding AI writing patterns | Fairness research |

### Practical Applications

- **Content Generation**: Assessing suitability for creative writing tasks

- **Educational Tools**: Evaluating AI writing assistants

- **Entertainment**: Testing story generation capabilities

- **Marketing**: Assessing creative copywriting abilities

- **Publishing**: Screening AI co-writing tools

## Challenges and Insights

### Key Challenges for Models

| Challenge | Description | Success Rate |
| --- | --- | --- |
| Genuine Humor | Creating actually funny content | <30% |
| Emotional Depth | Authentic romantic/emotional scenes | ~40% |
| Spatial Consistency | Maintaining accurate spatial descriptions | ~35% |
| Original Voice | Avoiding formulaic patterns | ~45% |
| Complex Metaphors | Creating coherent extended metaphors | ~25% |

### Common Failure Modes

1. **Formulaic Structure**: Overreliance on standard narrative patterns
2. **Cliché Overuse**: Heavy use of common phrases and tropes
3. **Emotional Shallowness**: Surface-level emotional expression
4. **Forced Creativity**: Awkward attempts at being original
5. **Inconsistent Tone**: Shifts in voice and style mid-narrative

## Limitations and Considerations

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| Subjective Nature | Creative quality is inherently subjective | Evaluation variance |
| Judge Dependency | Relies on Claude 3.7 Sonnet preferences | Potential bias |
| English Only | Limited to English language prompts | Reduced applicability |
| Genre Constraints | Focus on specific creative genres | Limited scope |
| Length Limits | 4000 character truncation | May penalize longer narratives |

### Future Directions

1. **Multi-Judge Systems**: Using multiple AI judges for consensus
2. **Human Baseline**: Establishing human writer performance benchmarks
3. **Genre Expansion**: Adding specialized prompts for different genres
4. **Multilingual Support**: Extension to other languages
5. **Interactive Writing**: Multi-turn creative collaboration testing

## Related Benchmarks

- **[EQ-Bench 3](/wiki/eq-bench_3)**: Emotional intelligence evaluation

- **[Longform Creative Writing](/wiki/longform_creative_writing)**: Extended narrative generation

- **[WritingBench](/index.php?title=WritingBench&action=edit&redlink=1)**: Comprehensive writing evaluation

- **[NC Bench](/index.php?title=NC_Bench&action=edit&redlink=1)**: Creative writing assessment

- **[Spiral-Bench](/index.php?title=Spiral-Bench&action=edit&redlink=1)**: Related benchmark by same author

- **[BuzzBench](/index.php?title=BuzzBench&action=edit&redlink=1)**: Viral content generation

- **[DiploBench](/index.php?title=DiploBench&action=edit&redlink=1)**: Diplomatic writing evaluation

## Significance

Creative Writing v3 represents a significant advancement in evaluating AI systems' creative capabilities. Its hybrid scoring approach and sophisticated bias controls provide nuanced assessment of creative output quality. The benchmark's ability to discriminate between models with similar technical capabilities but different creative strengths makes it valuable for:

- Identifying models suitable for creative applications

- Guiding development of more creative AI systems

- Understanding the relationship between technical and creative capabilities

- Establishing standards for AI-generated creative content

## See Also

- [Creative Writing](/index.php?title=Creative_Writing&action=edit&redlink=1)

- [Natural Language Generation](/index.php?title=Natural_Language_Generation&action=edit&redlink=1)

- [AI-Generated Content](/index.php?title=AI-Generated_Content&action=edit&redlink=1)

- [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1)

- [Text Generation](/index.php?title=Text_Generation&action=edit&redlink=1)

- [Computational Creativity](/index.php?title=Computational_Creativity&action=edit&redlink=1)

- [AI Writing Assessment](/index.php?title=AI_Writing_Assessment&action=edit&redlink=1)

## References

Cite error: `<ref>` tag with name "paech2025cw" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "cw_leaderboard" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "eqbench_about" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "writingbench" defined in `<references>` has group attribute "" which does not appear in prior text.

Cite error: `<ref>` tag with name "nc_bench" defined in `<references>` has group attribute "" which does not appear in prior text.