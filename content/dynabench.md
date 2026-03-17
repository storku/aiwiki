---
title: "Dynabench"
slug: "dynabench"
categories:
  - "AI_Benchmarks"
  - "Dynamic_Benchmarks"
  - "NLP_Benchmarks"
  - "Adversarial_Evaluation"
  - "Human-in-the-Loop_Systems"
  - "2020_Establishments"
  - "MLCommons_Projects"
---**

| Dynabench |
| --- |
| Overview |
| Full name | Dynamic Benchmarking Platform |
| Abbreviation | Dynabench |
| Description | A dynamic adversarial benchmarking platform that continuously evolves to challenge state-of-the-art AI models through human-in-the-loop data collection |
| Release date | 2020-09 |
| Latest version | 2.0 (MLCommons) |
| Benchmark updated | 2024 |
| Authors | [Douwe Kiela](/index.php?title=Douwe_Kiela&action=edit&redlink=1), [Max Bartolo](/index.php?title=Max_Bartolo&action=edit&redlink=1), [Yixin Nie](/index.php?title=Yixin_Nie&action=edit&redlink=1), [Divyansh Kaushik](/index.php?title=Divyansh_Kaushik&action=edit&redlink=1), [Atticus Geiger](/index.php?title=Atticus_Geiger&action=edit&redlink=1), [And others](/index.php?title=And_others&action=edit&redlink=1) |
| Organization | [Meta AI (formerly Facebook AI)](/index.php?title=Meta_AI_(formerly_Facebook_AI)&action=edit&redlink=1), [Now MLCommons](/index.php?title=Now_MLCommons&action=edit&redlink=1) |
| Technical Details |
| Type | [Dynamic Benchmarking](/index.php?title=Dynamic_Benchmarking&action=edit&redlink=1), [Adversarial Evaluation](/index.php?title=Adversarial_Evaluation&action=edit&redlink=1), [Human-in-the-Loop](/index.php?title=Human-in-the-Loop&action=edit&redlink=1) |
| Modality | [Text](/index.php?title=Text&action=edit&redlink=1), [Natural Language](/index.php?title=Natural_Language&action=edit&redlink=1) |
| Task format | [Adversarial examples, Human-model interaction](/index.php?title=Adversarial_examples,_Human-model_interaction&action=edit&redlink=1) |
| Number of tasks | 4 core NLP tasks |
| Total examples | 500,000+ adversarial examples |
| Evaluation metric | [Dynascore](/index.php?title=Dynascore&action=edit&redlink=1), [Task-specific metrics](/index.php?title=Task-specific_metrics&action=edit&redlink=1) |
| Domains | [NLI](/index.php?title=NLI&action=edit&redlink=1), [QA](/index.php?title=QA&action=edit&redlink=1), [Sentiment Analysis](/index.php?title=Sentiment_Analysis&action=edit&redlink=1), [Hate Speech Detection](/index.php?title=Hate_Speech_Detection&action=edit&redlink=1) |
| Languages | English (primarily) |
| Performance |
| Human performance | Baseline (easy for humans) |
| Baseline | Varies by task and round |
| SOTA score | Dynamic (continuously changing) |
| SOTA model | [Varies by task](/index.php?title=Varies_by_task&action=edit&redlink=1) |
| SOTA date | Continuous updates |
| Saturated | Never (by design) |
| Resources |
| Website | [Official website](https://dynabench.org/) |
| Paper | [Paper](https://arxiv.org/abs/2104.14337) |
| GitHub | [Repository](https://github.com/mlcommons/dynabench) |
| Dataset | [Available through platform Download] |
| License | MIT |
| Predecessor | [Traditional static benchmarks](/index.php?title=Traditional_static_benchmarks&action=edit&redlink=1) |

Dynabench** is a revolutionary [artificial intelligence](/wiki/artificial_intelligence) benchmarking platform that fundamentally rethinks how we evaluate [machine learning](/wiki/machine_learning) models through dynamic, adversarial data collection with humans in the loop. Originally launched in September 2020 by [Meta AI](/wiki/meta_ai) (formerly [Facebook AI Research](/index.php?title=Facebook_AI_Research&action=edit&redlink=1)) and now maintained by [MLCommons](/index.php?title=MLCommons&action=edit&redlink=1)[&#91;1&#93;](#cite_note-dynabench_paper-1), Dynabench addresses the critical problem of static benchmarks becoming obsolete as models improve. The platform has collected over 500,000 adversarial examples from 1,800+ registered users, creating continuously evolving benchmarks that adapt to challenge state-of-the-art models while remaining easy for humans to solve[&#91;2&#93;](#cite_note-dynabench_website-2).

## Overview

Dynabench represents a paradigm shift from traditional static benchmarks to dynamic, evolving evaluation systems. Instead of fixed test sets that models can eventually overfit or memorize, Dynabench employs a continuous cycle where human annotators create adversarial examples specifically designed to fool current state-of-the-art models. This approach ensures that benchmarks remain challenging and relevant, providing a more accurate assessment of model capabilities in real-world scenarios[&#91;3&#93;](#cite_note-meta_ai-3).

### Core Philosophy

The platform is built on four fundamental principles:

- **Dynamic Evolution**: Benchmarks that grow harder as models improve

- **Human-AI Collaboration**: Leveraging human creativity to find model weaknesses

- **Real-world Relevance**: Examples that are challenging for AI but intuitive for humans

- **Continuous Learning**: Creating a never-ending cycle of model improvement

## Dynamic Adversarial Data Collection

### The Human-and-Model-in-the-Loop Process

Dynabench's innovative approach centers on its human-and-model-in-the-loop methodology[&#91;1&#93;](#cite_note-dynabench_paper-1):

| Stage | Process | Outcome |
| --- | --- | --- |
| **1. Example Creation** | Human annotators craft inputs to fool models | Potential adversarial examples |
| **2. Real-time Testing** | Examples tested against live models instantly | Immediate feedback on success |
| **3. Validation** | Other humans verify example correctness | Quality-assured data |
| **4. Dataset Integration** | Successful examples join training data | Evolving benchmark |
| **5. Model Retraining** | New models trained on updated data | Improved robustness |
| **6. Cycle Repeats** | Process continues with stronger models | Continuous improvement |

### Round-Based Structure

Dynabench organizes data collection into progressive rounds:

| Round | Target Model | Difficulty | Success Rate |
| --- | --- | --- | --- |
| **Round 1** | Single BERT-Large | Baseline | ~50% fool rate |
| **Round 2** | Ensemble of RoBERTa-Large | Increased | ~35% fool rate |
| **Round 3** | Advanced ensemble + adversarial training | High | ~20% fool rate |
| **Future Rounds** | State-of-the-art models | Continuously increasing | Decreasing |

## Tasks and Domains

### Natural Language Inference (NLI)

The platform's flagship task, featuring the Adversarial NLI (ANLI) dataset[&#91;4&#93;](#cite_note-anli_paper-4):

| Aspect | Details |
| --- | --- |
| **Task** | Determine if hypothesis is entailed, contradicted, or neutral given premise |
| **Dataset Size** | 169,265 adversarial examples across three rounds |
| **Key Finding** | GPT-3 performed no better than chance on ANLI |
| **Impact** | Led to significant improvements in NLI robustness |

### Question Answering (QA)

Challenges the notion of "super-human" performance on QA tasks:

| Component | Description |
| --- | --- |
| **Base Model** | RoBERTa trained on SQuAD 1.1 |
| **Challenge** | Despite high SQuAD scores, models fail on adversarial examples |
| **Focus** | Reading comprehension with misleading context |
| **Innovation** | Dynamic question generation targeting model weaknesses |

### Sentiment Analysis

Demonstrates that sentiment analysis is far from "solved":

| Feature | Implementation |
| --- | --- |
| **Approach** | Naturalistic prompt sentences for diverse data |
| **Complexity** | Beyond simple positive/negative classification |
| **Challenges** | Sarcasm, context-dependence, subtle sentiment |
| **Dataset** | Continuously growing adversarial examples |

### Hate Speech Detection

Addresses critical safety and fairness concerns:

| Aspect | Focus |
| --- | --- |
| **Objective** | Identify problematic content while avoiding bias |
| **Metrics** | Includes fairness evaluation alongside accuracy |
| **Challenges** | Context-dependent offensiveness, cultural sensitivity |
| **Importance** | Real-world safety applications |

## Technical Architecture

### Platform Components

Dynabench's technical infrastructure consists of several integrated systems[&#91;5&#93;](#cite_note-dynabench_github-5):

| Component | Technology | Purpose |
| --- | --- | --- |
| **Frontend** | React.js | Web interfaces for annotation and evaluation |
| **Backend** | Python REST API | Model submission and evaluation |
| **Database** | PostgreSQL | Example storage and versioning |
| **Model Serving** | Docker containers | Isolated model execution |
| **MTurk Integration** | Custom interface | Crowdsourced annotation |

### API and Integration

```python

1. Example Dynabench API usage

from dynabench import DynabenchClient

client = DynabenchClient(api_key="your_key")

1. Submit model for evaluation

model_id = client.submit_model(

   model_path="path/to/model",
   task="nli",
   description="My NLI model"

)

1. Get evaluation results

results = client.get_results(model_id)
print(f"Dynascore: {results['dynascore']}")
print(f"Round 1 Accuracy: {results['round1_acc']}")
```

## Performance and Evaluation

### Dynascore Metric

Dynabench introduces Dynascore, a holistic evaluation metric:

| Component | Description |
| --- | --- |
| **Accuracy** | Task-dependent percentage of correct examples |
| **Compute** | Examples processed per second on evaluation cloud |
| **Memory** | Average memory usage in gigabytes |
| **Robustness** | Performance on typographical errors and paraphrases |
| **Fairness** | Bias and fairness measures |

### Model Performance Insights

Key findings from Dynabench evaluations[&#91;1&#93;](#cite_note-dynabench_paper-1):

| Finding | Implication |
| --- | --- |
| Models with 90%+ static accuracy fail on 50%+ adversarial examples | Static benchmarks overestimate capabilities |
| Training on adversarial data improves both robustness and standard performance | Dynamic data benefits general performance |
| Human-model performance gap remains large on adversarial examples | Significant room for improvement |
| Different models fail on different adversarial strategies | Ensemble approaches valuable |

## Research Impact and Contributions

### Published Research

Dynabench has contributed to numerous significant publications:

| Paper | Year | Key Contribution |
| --- | --- | --- |
| "Dynabench: Rethinking Benchmarking in NLP" | 2021 | Platform introduction and methodology |
| "Adversarial NLI" | 2020 | ANLI dataset and adversarial training benefits |
| "ANLIzing the Adversarial NLI Dataset" | 2020 | Fine-grained error analysis |
| "Learning from the Worst" | 2021 | Theoretical foundations of adversarial learning |

### Community Engagement

The platform has fostered significant community involvement:

- **1,800+ registered users** actively creating adversarial examples

- **500,000+ examples** contributed by the community

- **Multiple universities** using Dynabench for research

- **Industry adoption** for robust model development

## Migration to MLCommons

### Transition Details

In recent years, Dynabench transitioned from Meta AI to MLCommons:

| Aspect | Change | Impact |
| --- | --- | --- |
| **Governance** | Meta AI → MLCommons | Community-driven development |
| **Leadership** | Working group co-chairs | Broader representation |
| **Repository** | Facebook → MLCommons GitHub | Continued open-source access |
| **Future Development** | DataPerf competition integration | Expanded scope |

### Future Directions

Under MLCommons, Dynabench plans to:

1. **Expand task coverage** beyond the initial four NLP tasks
2. **Enable custom tasks** for specific domains
3. **Integrate with DataPerf** competition framework
4. **Develop multimodal capabilities** for vision and audio
5. **Enhance fairness evaluation** across all tasks

## Advantages Over Static Benchmarks

### Comparative Analysis

| Aspect | Static Benchmarks | Dynabench |
| --- | --- | --- |
| **Data Collection** | One-time | Continuous |
| **Difficulty** | Fixed | Adaptive |
| **Overfitting Risk** | High | Low |
| **Real-world Relevance** | Decreases over time | Maintains relevance |
| **Model Weaknesses** | Hidden | Continuously exposed |
| **Community Involvement** | Limited | Central to process |

### Key Innovations

Dynabench introduces several groundbreaking concepts[&#91;1&#93;](#cite_note-dynabench_paper-1):

- **First platform** to implement truly dynamic benchmarking

- **Model-in-the-loop** annotation for real-time adversarial creation

- **Virtuous cycle** of continuous model improvement

- **Sample efficiency** through targeted adversarial generation

- **Reduced annotation artifacts** compared to static collection

## Limitations and Challenges

### Current Limitations

| Limitation | Description | Mitigation Strategy |
| --- | --- | --- |
| **Language Coverage** | Primarily English | Expanding to multilingual |
| **Task Scope** | Limited to four NLP tasks | MLCommons expansion plans |
| **Annotator Expertise** | Requires training | Improved interfaces and guidance |
| **Computational Cost** | Real-time model serving expensive | Optimization and caching |

### Research Challenges

1. **Balancing difficulty** between challenging models and maintaining human solvability
2. **Preventing adversarial example memorization** in future training
3. **Ensuring diversity** in adversarial strategies
4. **Scaling to more complex tasks** beyond NLP
5. **Maintaining quality** as community grows

## Significance

Dynabench represents a fundamental shift in how we approach AI evaluation, moving from static snapshots to dynamic, evolving challenges that better reflect real-world deployment scenarios. By combining human creativity with machine learning in a continuous feedback loop, the platform addresses critical limitations of traditional benchmarks: overfitting, staleness, and lack of robustness testing.

The platform's success in revealing weaknesses in models that achieve near-perfect scores on static benchmarks demonstrates the importance of adversarial evaluation. Moreover, Dynabench's finding that training on adversarial examples improves both robustness and standard performance suggests that dynamic benchmarking is not just about evaluation but also about driving genuine improvements in AI capabilities.

As Dynabench continues to evolve under MLCommons stewardship, it stands as a model for future evaluation platforms across AI domains, establishing principles and methodologies that will shape how we measure and improve artificial intelligence systems for years to come.

## See Also

- [Adversarial Machine Learning](/index.php?title=Adversarial_Machine_Learning&action=edit&redlink=1)

- [Natural Language Processing](/wiki/natural_language_processing)

- [MLCommons](/index.php?title=MLCommons&action=edit&redlink=1)

- [Meta AI](/wiki/meta_ai)

- [Human-in-the-Loop Learning](/index.php?title=Human-in-the-Loop_Learning&action=edit&redlink=1)

- [Benchmark Saturation](/index.php?title=Benchmark_Saturation&action=edit&redlink=1)

- [ANLI Dataset](/index.php?title=ANLI_Dataset&action=edit&redlink=1)

- [Dynamic Evaluation](/index.php?title=Dynamic_Evaluation&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-dynabench_paper_1-0) [1.1](#cite_ref-dynabench_paper_1-1) [1.2](#cite_ref-dynabench_paper_1-2) [1.3](#cite_ref-dynabench_paper_1-3) Kiela, D., et al. (2021). "Dynabench: Rethinking Benchmarking in NLP". Proceedings of NAACL 2021. arXiv:2104.14337. Retrieved from [https://arxiv.org/abs/2104.14337](https://arxiv.org/abs/2104.14337)

2. [↑](#cite_ref-dynabench_website_2-0) Dynabench Team. (2024). "Dynabench: Dynamic Benchmarking Platform". Retrieved from [https://dynabench.org/](https://dynabench.org/)

3. [↑](#cite_ref-meta_ai_3-0) Meta AI. (2024). "Dynabench: Rethinking AI Benchmarking". Retrieved from [https://ai.meta.com/tools/dynabench/](https://ai.meta.com/tools/dynabench/)

4. [↑](#cite_ref-anli_paper_4-0) Nie, Y., et al. (2020). "Adversarial NLI: A New Benchmark for Natural Language Understanding". Proceedings of ACL 2020. Retrieved from [https://arxiv.org/abs/1910.14599](https://arxiv.org/abs/1910.14599)

5. [↑](#cite_ref-dynabench_github_5-0) Dynabench Team. (2024). "Dynabench GitHub Repository". MLCommons. Retrieved from [https://github.com/mlcommons/dynabench](https://github.com/mlcommons/dynabench)