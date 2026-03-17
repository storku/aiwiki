---
title: "VideoMMMU"
slug: "videommmu"
categories:
  - "AI_Benchmarks"
  - "Video_Understanding_Benchmarks"
  - "Multi-modal_Benchmarks"
  - "Educational_AI"
  - "2025_Benchmarks"
  - "Knowledge_Acquisition"
  - "EvolvingLMMs-Lab"
---**

| VideoMMMU |
| --- |
| Overview |
| Full name | Video Multi-Modal Multi-disciplinary Understanding |
| Abbreviation | VideoMMMU, Video-MMMU |
| Description | A multi-modal benchmark evaluating knowledge acquisition from professional educational videos across six disciplines |
| Release date | 2025-01-23 |
| Latest version | 1.0 |
| Benchmark updated | 2025-01 |
| Authors | [Kairui Hu](/index.php?title=Kairui_Hu&action=edit&redlink=1), [Penghao Wu](/index.php?title=Penghao_Wu&action=edit&redlink=1), [Fanyi Pu](/index.php?title=Fanyi_Pu&action=edit&redlink=1), [Wang Xiao](/index.php?title=Wang_Xiao&action=edit&redlink=1), [Yuanhan Zhang](/index.php?title=Yuanhan_Zhang&action=edit&redlink=1), [Xiang Yue](/index.php?title=Xiang_Yue&action=edit&redlink=1), [Bo Li](/index.php?title=Bo_Li&action=edit&redlink=1), [Ziwei Liu](/index.php?title=Ziwei_Liu&action=edit&redlink=1) |
| Organization | [EvolvingLMMs-Lab](/index.php?title=EvolvingLMMs-Lab&action=edit&redlink=1) |
| Technical Details |
| Type | [Video Understanding](/index.php?title=Video_Understanding&action=edit&redlink=1), [Knowledge Acquisition](/index.php?title=Knowledge_Acquisition&action=edit&redlink=1), [Multi-modal Learning](/index.php?title=Multi-modal_Learning&action=edit&redlink=1) |
| Modality | [Video](/index.php?title=Video&action=edit&redlink=1), [Image](/index.php?title=Image&action=edit&redlink=1), [Text](/index.php?title=Text&action=edit&redlink=1), [Audio](/wiki/audio) |
| Task format | [Multiple-choice questions from educational videos](/index.php?title=Multiple-choice_questions_from_educational_videos&action=edit&redlink=1) |
| Number of tasks | 6 disciplines, 30 subjects |
| Total examples | 900 questions (300 videos) |
| Evaluation metric | [Accuracy](/wiki/accuracy), [Δknowledge (normalized learning gain)](/index.php?title=%CE%94knowledge_(normalized_learning_gain)&action=edit&redlink=1) |
| Domains | [Art](/wiki/art), [Business](/wiki/business), [Science](/wiki/science), [Medicine](/index.php?title=Medicine&action=edit&redlink=1), [Humanities](/index.php?title=Humanities&action=edit&redlink=1), [Engineering](/index.php?title=Engineering&action=edit&redlink=1) |
| Languages | English |
| Performance |
| Human performance | Significantly higher than models |
| Baseline | ~50% (random guess baseline) |
| SOTA score | 84.6% (GitHub) / 65.78% (HuggingFace) |
| SOTA model | [GPT-5-thinking (GitHub) / Claude-3.5-Sonnet (HuggingFace)](/index.php?title=GPT-5-thinking_(GitHub)_/_Claude-3.5-Sonnet_(HuggingFace)&action=edit&redlink=1) |
| SOTA date | 2025-01 |
| Saturated | No |
| Resources |
| Website | [Official website](https://videommmu.github.io/) |
| Paper | [Paper](https://arxiv.org/abs/2501.13826) |
| GitHub | [Repository](https://github.com/EvolvingLMMs-Lab/VideoMMMU) |
| Dataset | [Download](https://huggingface.co/datasets/lmms-lab/VideoMMMU) |
| License | Terms and conditions required

 |

VideoMMMU** (**Video Multi-Modal Multi-disciplinary Understanding**) is a [benchmark](/wiki/benchmark) designed to evaluate [Large Multimodal Models](/index.php?title=Large_Multimodal_Models&action=edit&redlink=1) (LMMs) on their ability to acquire and apply knowledge from professional educational videos. Released on January 23, 2025, by [EvolvingLMMs-Lab](/index.php?title=EvolvingLMMs-Lab&action=edit&redlink=1)[&#91;1&#93;](#cite_note-videommmu_paper-1), VideoMMMU uniquely focuses on measuring how well AI systems can learn from educational content rather than just comprehend it. The benchmark comprises 300 expert-level lecture-style videos across six professional disciplines with 900 human-annotated questions, introducing the innovative Δknowledge metric to quantify normalized learning gains.

## Overview

VideoMMMU represents a paradigm shift in [video understanding](/index.php?title=Video_understanding&action=edit&redlink=1) evaluation by treating videos as knowledge sources rather than mere content to comprehend. Unlike traditional video benchmarks that focus on perception and basic understanding, VideoMMMU systematically assesses whether AI models can actually acquire new knowledge from educational videos and apply it to novel scenarios. This approach mirrors human learning processes where watching educational content leads to knowledge acquisition that can be transferred to new situations[&#91;1&#93;](#cite_note-videommmu_paper-1).

The benchmark addresses a critical gap in evaluating [artificial intelligence](/wiki/artificial_intelligence) systems' educational capabilities. As AI increasingly assists in education and professional training, the ability to learn from video content becomes essential. VideoMMMU reveals that even state-of-the-art models like [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) show limited learning gains (15.6% Δknowledge), highlighting significant room for improvement in this crucial capability.

### Significance

VideoMMMU's importance stems from several groundbreaking contributions:

- **First Knowledge Acquisition Benchmark**: Pioneering evaluation of learning from videos rather than just understanding

- **Δknowledge Metric**: Innovative measurement of normalized learning gains

- **Multi-disciplinary Coverage**: Spans six professional fields ensuring comprehensive evaluation

- **Three-Stage Assessment**: Systematic evaluation of perception, comprehension, and adaptation

- **Educational AI Development**: Drives progress in educational technology applications

## Dataset Composition

### Professional Disciplines

VideoMMMU covers six major professional fields with 30 subjects[&#91;2&#93;](#cite_note-videommmu_website-2):

| Discipline | Number of Subjects | Example Topics | Video Count |
| --- | --- | --- | --- |
| **Art** | 5 | Art history, Music theory, Film studies | 50 |
| **Business** | 5 | Economics, Finance, Marketing, Management | 50 |
| **Science** | 5 | Physics, Chemistry, Biology, Computer Science | 50 |
| **Medicine** | 5 | Anatomy, Pathology, Pharmacology, Clinical Medicine | 50 |
| **Humanities** | 5 | History, Philosophy, Literature, Psychology | 50 |
| **Engineering** | 5 | Mechanical, Electrical, Civil, Software Engineering | 50 |

### Video Characteristics

The benchmark's videos are carefully selected for educational quality:

| Characteristic | Specification | Purpose |
| --- | --- | --- |
| **Content Type** | Expert-level lectures | Professional knowledge transfer |
| **Duration Range** | Variable (short clips to full lectures) | Diverse learning scenarios |
| **Production Quality** | High-quality educational content | Clear knowledge presentation |
| **Language** | English with clear narration | Accessibility |
| **Visual Elements** | Slides, diagrams, demonstrations | Multi-modal learning |
| **Audio Quality** | Professional recording | Clear explanation |

### Question Design

Each video includes three carefully crafted questions:

| Question Type | Focus | Example |
| --- | --- | --- |
| **Factual** | Direct information extraction | "What is the formula presented at 2:35?" |
| **Conceptual** | Understanding principles | "Why does this phenomenon occur?" |
| **Application** | Knowledge transfer | "How would this apply to a different scenario?" |

## Evaluation Framework

### Three-Stage Knowledge Assessment

VideoMMMU employs a revolutionary three-stage evaluation framework[&#91;1&#93;](#cite_note-videommmu_paper-1):

| Stage | Cognitive Level | Assessment Focus | Example Task |
| --- | --- | --- | --- |
| **Perception** | Basic Processing | Information identification | "Identify the key terms mentioned" |
| **Comprehension** | Understanding | Concept integration | "Explain the relationship between X and Y" |
| **Adaptation** | Application | Knowledge transfer | "Apply this principle to a new problem" |

### The Δknowledge Metric

The benchmark introduces a groundbreaking metric for measuring learning efficiency:

- Formula**:

```
Δknowledge = (Accafter_video - Accbefore_video) / (100% - Accbefore_video) × 100%
```

| Component | Description | Interpretation |
| --- | --- | --- |
| **Accbefore_video** | Accuracy without watching video | Prior knowledge baseline |
| **Accafter_video** | Accuracy after watching video | Post-learning performance |
| **Normalization** | Accounts for prior knowledge | True learning gain |
| **Result** | Percentage of potential learning achieved | Learning efficiency |

### Evaluation Protocol

The evaluation follows a structured protocol:

1. **Baseline Assessment**: Model answers questions without video access
2. **Video Presentation**: Model watches the educational video
3. **Post-Video Assessment**: Model answers same questions after viewing
4. **Δknowledge Calculation**: Compute normalized learning gain
5. **Multi-run Averaging**: Multiple evaluations for statistical reliability

## Performance Analysis

### Current Leaderboard (January 2025)

**Note:** Performance scores may vary between different sources (GitHub repository vs HuggingFace leaderboard). The following scores are from the GitHub repository. For alternative scores, see the HuggingFace dataset page which shows Human Expert at 74.44% and Claude-3.5-Sonnet at 65.78%.

| Rank | Model | Overall Accuracy | Δknowledge | Perception | Comprehension | Adaptation |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | [GPT-5-thinking](/index.php?title=GPT-5-thinking&action=edit&redlink=1) | 84.6% | 28.3% | 91.2% | 85.5% | 77.1% |
| 2 | [Gemini-2.5-Pro](/index.php?title=Gemini-2.5-Pro&action=edit&redlink=1) | 83.6% | 25.7% | 90.8% | 84.3% | 75.7% |
| 3 | [Claude-3.5-Sonnet](/index.php?title=Claude-3.5-Sonnet&action=edit&redlink=1) | 65.78% | 11.4% | 78.3% | 66.2% | 52.8% |
| 4 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 62.5% | 15.6% | 75.2% | 63.1% | 49.2% |
| 5 | [Qwen-VL-Max](/index.php?title=Qwen-VL-Max&action=edit&redlink=1) | 58.3% | 8.2% | 71.5% | 58.7% | 44.7% |

### Performance Insights

Analysis reveals critical patterns in model capabilities[&#91;1&#93;](#cite_note-videommmu_paper-1):

| Finding | Implication | Research Direction |
| --- | --- | --- |
| **Cognitive Decline** | Performance drops with complexity | Better reasoning architectures needed |
| **Limited Learning** | Low Δknowledge scores | Improved knowledge acquisition methods |
| **Discipline Variance** | Science/Medicine harder than Humanities | Domain-specific optimization required |
| **Perception vs Application Gap** | ~40% drop from perception to adaptation | Enhanced knowledge transfer mechanisms |

### Discipline-Specific Performance

Models show varying success across disciplines:

| Discipline | Average Accuracy | Δknowledge | Challenge Level |
| --- | --- | --- | --- |
| **Business** | 72.3% | 18.5% | Medium |
| **Humanities** | 68.7% | 16.2% | Medium |
| **Art** | 65.4% | 14.8% | Medium-High |
| **Engineering** | 61.2% | 12.3% | High |
| **Science** | 58.9% | 10.7% | High |
| **Medicine** | 55.3% | 9.1% | Very High |

## Technical Implementation

### Integration with LMMs-Eval

VideoMMMU is built on the LMMs-Eval framework[&#91;3&#93;](#cite_note-videommmu_github-3):

| Component | Implementation | Purpose |
| --- | --- | --- |
| **Framework** | LMMs-Eval | Standardized evaluation |
| **Installation** | `pip install lmms-eval` | Easy setup |
| **Execution** | `accelerate launch -m lmms_eval` | Distributed evaluation |
| **Model Support** | Multiple architectures | Broad compatibility |

### Dataset Access

The dataset is available through multiple channels:

| Platform | Access Method | Requirements |
| --- | --- | --- |
| **HuggingFace** | Direct download | Agreement to terms |
| **GitHub** | Links to videos | Respect creator rights |
| **Official Website** | Sample browser | Public access |

### Evaluation Pipeline

```python

1. Simplified evaluation process

def evaluate_videommmu(model, video, questions):

   # Stage 1: Baseline (no video)
   baseline_acc = model.answer_questions(questions)
   
   # Stage 2: Watch video
   model.process_video(video)
   
   # Stage 3: Post-video assessment
   post_video_acc = model.answer_questions(questions)
   
   # Calculate Δknowledge
   delta_knowledge = calculate_delta(baseline_acc, post_video_acc)
   
   return delta_knowledge

```

## Research Impact

### Influence on Multi-modal Research

VideoMMMU has catalyzed several research directions:

| Area | Impact | Active Research |
| --- | --- | --- |
| **Educational AI** | New evaluation standards | Learning-optimized architectures |
| **Video Understanding** | Beyond comprehension to learning | Knowledge extraction methods |
| **Multi-modal Learning** | Integration of learning metrics | Cross-modal knowledge transfer |
| **Cognitive Modeling** | Three-stage assessment adoption | Hierarchical reasoning systems |

### Related Benchmarks

| Benchmark | Focus | Key Difference from VideoMMMU |
| --- | --- | --- |
| [Video-MME](/index.php?title=Video-MME&action=edit&redlink=1) | Comprehensive video analysis | Breadth vs knowledge acquisition |
| [MVBench](/index.php?title=MVBench&action=edit&redlink=1) | Temporal dynamics | Motion vs learning |
| [LVBench](/index.php?title=LVBench&action=edit&redlink=1) | Long video understanding | Duration vs education |
| [EgoSchema](/index.php?title=EgoSchema&action=edit&redlink=1) | Egocentric video understanding | Perspective vs knowledge |
| [Video-ChatGPT](/index.php?title=Video-ChatGPT&action=edit&redlink=1) | Video conversation | Dialogue vs learning assessment |

## Applications and Use Cases

### Educational Technology

VideoMMMU enables development of:

- **Intelligent Tutoring Systems**: AI that learns from educational content

- **Adaptive Learning Platforms**: Systems that acquire domain knowledge

- **Content Understanding Tools**: Automated lecture summarization with learning

- **Professional Training AI**: Systems for specialized education

### Industry Applications

| Industry | Application | Benefit |
| --- | --- | --- |
| **EdTech** | Learning assessment platforms | Better student evaluation |
| **Corporate Training** | Professional development systems | Efficient knowledge transfer |
| **Healthcare Education** | Medical training AI | Specialized learning support |
| **Online Education** | MOOC enhancement | Improved learning outcomes |

## Limitations and Future Work

### Current Limitations

| Limitation | Description | Impact |
| --- | --- | --- |
| **English Only** | Single language support | Limited global reach |
| **Domain Coverage** | Six disciplines | May miss specialized fields |
| **Question Quantity** | Three per video | Statistical limitations |
| **Video Sources** | Web-based content | Quality variation |
| **Evaluation Cost** | Compute-intensive | Accessibility issues |

### Future Directions

Planned improvements include:

1. **Multilingual Expansion**: Support for 10+ languages
2. **Interactive Learning**: Multi-turn educational dialogue
3. **Personalized Assessment**: Adaptive difficulty based on performance
4. **Real-time Learning**: Continuous knowledge acquisition evaluation
5. **Cross-modal Transfer**: Learning from mixed media sources

## Significance

VideoMMMU represents a crucial advancement in evaluating AI systems' ability to learn from educational content, addressing a fundamental gap in current multi-modal benchmarks. By introducing the Δknowledge metric and three-stage cognitive assessment, it provides the first systematic framework for measuring knowledge acquisition from videos. The benchmark's revelation that even advanced models achieve limited learning gains highlights the significant challenges remaining in developing AI systems capable of human-like learning from educational content.

As educational technology becomes increasingly important and video content dominates online learning, VideoMMMU provides essential infrastructure for developing and evaluating AI systems that can truly learn from educational materials. Its multi-disciplinary approach and focus on knowledge transfer make it an indispensable tool for advancing educational AI and creating more capable learning systems.

## See Also

- [Video Understanding](/index.php?title=Video_Understanding&action=edit&redlink=1)

- [Multi-modal Learning](/index.php?title=Multi-modal_Learning&action=edit&redlink=1)

- [Educational AI](/index.php?title=Educational_AI&action=edit&redlink=1)

- [Large Multimodal Models](/index.php?title=Large_Multimodal_Models&action=edit&redlink=1)

- [Knowledge Acquisition](/index.php?title=Knowledge_Acquisition&action=edit&redlink=1)

- [Video-MME](/index.php?title=Video-MME&action=edit&redlink=1)

- [MVBench](/index.php?title=MVBench&action=edit&redlink=1)

- [LMMs-Eval](/index.php?title=LMMs-Eval&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-videommmu_paper_1-0) [1.1](#cite_ref-videommmu_paper_1-1) [1.2](#cite_ref-videommmu_paper_1-2) [1.3](#cite_ref-videommmu_paper_1-3) Hu, K., Wu, P., Pu, F., Xiao, W., Zhang, Y., Yue, X., Li, B., & Liu, Z. (2025). "Video-MMMU: Evaluating Knowledge Acquisition from Multi-Discipline Professional Videos". arXiv:2501.13826. Retrieved from [https://arxiv.org/abs/2501.13826](https://arxiv.org/abs/2501.13826)

2. [↑](#cite_ref-videommmu_website_2-0) EvolvingLMMs-Lab. (2025). "VideoMMMU: Video Multi-Modal Multi-disciplinary Understanding". Official Website. Retrieved from [https://videommmu.github.io/](https://videommmu.github.io/)

3. [↑](#cite_ref-videommmu_github_3-0) EvolvingLMMs-Lab. (2025). "VideoMMMU Repository". GitHub. Retrieved from [https://github.com/EvolvingLMMs-Lab/VideoMMMU](https://github.com/EvolvingLMMs-Lab/VideoMMMU)