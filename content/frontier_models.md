---
title: "Frontier models"
slug: "frontier_models"
categories:
  - "Articles_with_short_description"
  - "Artificial_intelligence"
  - "Machine_learning"
  - "AI_safety"
  - "Technology_governance"
  - "Emerging_technologies"
  - "AI_governance"
  - "Foundation_models"
---Short description: Highly capable general-purpose AI models at the cutting edge of artificial intelligence technology

[Template:Infobox AI concept](/index.php?title=Template:Infobox_AI_concept&action=edit&redlink=1)

**Frontier models** are the most advanced [artificial intelligence](/wiki/artificial_intelligence) models that represent the cutting edge of AI capabilities at any given time. These highly capable [foundation models](/wiki/foundation_models) push the boundaries of what is possible with AI technology, typically characterized by their massive scale, multimodal capabilities, and ability to perform a wide variety of complex tasks across different domains.[&#91;1&#93;](#cite_note-iguazio-1)[&#91;2&#93;](#cite_note-klu-2) The term encompasses both foundation models and [general-purpose AI](/index.php?title=General-purpose_AI&action=edit&redlink=1) systems that exceed the capabilities of existing models and often require significant computational resources to develop and deploy, typically exceeding 10^25 [floating-point operations](/index.php?title=Floating-point_operations&action=edit&redlink=1) (FLOPs) during training.[&#91;3&#93;](#cite_note-verpex-3)[&#91;4&#93;](#cite_note-epoch-models-4)

## Definition and Characteristics

### Core Definition

The concept of frontier models was formally introduced in a 2023 paper by [OpenAI](/wiki/openai) titled "Frontier AI Regulation: Managing Emerging Risks to Public Safety," where they are defined as "highly capable foundation models that could possess dangerous capabilities sufficient to pose severe risks to public safety."[&#91;5&#93;](#cite_note-openai-regulation-5) This definition highlights three key challenges: dangerous capabilities can emerge unexpectedly during development or post-deployment; it is difficult to prevent misuse of deployed models; and model capabilities can proliferate rapidly, especially through open-source releases.

The [United Kingdom](/index.php?title=United_Kingdom&action=edit&redlink=1) government, a key proponent of the term, defines frontier AI as "highly capable general-purpose AI models that can perform a wide variety of tasks and match or exceed the capabilities present in today's most advanced models."[&#91;6&#93;](#cite_note-UKGovDef-6) The UK's analysis emphasizes that frontier models are increasingly [multimodal](/index.php?title=Multimodal&action=edit&redlink=1) and may be augmented into autonomous [AI agents](/index.php?title=AI_agents&action=edit&redlink=1) with tool use (for example web browsing, code execution) that expand their real-world impact.[&#91;7&#93;](#cite_note-uk-gov-paper-7)

The [Frontier Model Forum](/index.php?title=Frontier_Model_Forum&action=edit&redlink=1), an industry body established by leading AI companies, defines frontier models as "large-scale [machine-learning](/index.php?title=Machine-learning&action=edit&redlink=1) models that exceed the capabilities currently present in the most advanced existing models, and can perform a wide variety of tasks."[&#91;8&#93;](#cite_note-openai-fmf-8)

### Key Characteristics

Frontier models typically exhibit several defining characteristics:

| Characteristic | Description | Implication |
| --- | --- | --- |
| **Massive Scale and Compute** | Trained using vast computational resources, often exceeding 10^25 FLOPs, with parameter counts in the hundreds of billions or trillions, and training costs ranging from tens to hundreds of millions of dollars | High development costs create barriers to entry, concentrating power in well-funded labs. Scale is a primary driver of advanced capabilities |
| **Multimodal Capabilities** | Ability to process and generate multiple types of data including text, images, audio, and video | Enables broad applicability across domains but complicates safety evaluation and control |
| **Emergent Properties** | Display abilities that were not explicitly programmed, such as complex reasoning, [chain-of-thought reasoning](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1), code generation, or creative writing | Makes pre-deployment risk assessment challenging. The full capabilities may not be understood until widely deployed[&#91;9&#93;](#cite_note-Wei2022Emergent-9) |
| **General-Purpose Functionality** | Designed to be adaptable across a wide range of domains and tasks with minimal [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1) | Enormous utility but difficult to predict all possible uses, including malicious applications |
| **Extended Context Windows** | Modern frontier models can process extensive amounts of information, with some models supporting context windows of over 2 million tokens | Enables complex, long-form tasks but increases potential for sophisticated manipulation[&#91;10&#93;](#cite_note-gemini-comparison-10) |
| **Autonomy Potential** | Advanced models show increasing ability to act autonomously to achieve goals, using tools, accessing external information, and self-correcting | Raises long-term safety concerns about control and alignment with human values |

## History and Development

### Evolution of the Term

The history of frontier models is intertwined with the evolution of [foundation models](/wiki/foundation_models), which emerged in the late 2010s. The term "foundation model" was coined in 2021 by researchers at the [Stanford Institute for Human-Centered Artificial Intelligence](/index.php?title=Stanford_Institute_for_Human-Centered_Artificial_Intelligence&action=edit&redlink=1) (HAI) to describe large-scale models trained on broad data using self-supervision.[&#91;11&#93;](#cite_note-stanford-foundation-11)

The first models trained on over 10^23 FLOPs were [AlphaGo Master](/index.php?title=AlphaGo_Master&action=edit&redlink=1) and [AlphaGo Zero](/index.php?title=AlphaGo_Zero&action=edit&redlink=1), developed by [DeepMind](/index.php?title=DeepMind&action=edit&redlink=1) and published in 2017.[&#91;12&#93;](#cite_note-epoch-tracking-12) The progression to current frontier models included:

### Timeline of Major Developments

| Date | Milestone | Significance |
| --- | --- | --- |
| 2017 | [AlphaGo Master](/index.php?title=AlphaGo_Master&action=edit&redlink=1)/Zero | First models exceeding 10^23 FLOPs |
| 2018 | [BERT](/wiki/bert) (Google) | Demonstrated power of transformer-based language models |
| 2019 | [GPT-2](/wiki/gpt-2) (OpenAI) | Raised concerns about misuse, leading to staged release |
| 2020 | [GPT-3](/wiki/gpt-3) (OpenAI) | 175 billion parameters, sparked widespread interest in large language models |
| March 2023 | [GPT-4](/wiki/gpt-4) (OpenAI) | First model exceeding 10^25 FLOPs, demonstrated significant capability leap[&#91;13&#93;](#cite_note-lesswrong-13) |
| May 2023 | Joint AI Safety Statement | CEOs of major AI labs declare extinction risk from AI a global priority[&#91;14&#93;](#cite_note-CAISStatement-14) |
| July 2023 | [Frontier Model Forum](/index.php?title=Frontier_Model_Forum&action=edit&redlink=1) launched | Industry coordination body established by Anthropic, Google, Microsoft, and OpenAI[&#91;15&#93;](#cite_note-fmf-15) |
| October 2023 | U.S. Executive Order 14110 | Established compute-based reporting requirements for frontier models[&#91;16&#93;](#cite_note-USExecOrder-16) |
| November 2023 | Bletchley Declaration | 28 countries agree on frontier AI risks and cooperation[&#91;17&#93;](#cite_note-bletchley-17) |
| 2024 | EU AI Act finalized | Establishes regulations for "general-purpose AI models with systemic risk"[&#91;18&#93;](#cite_note-eu-ai-act-18) |
| 2024-2025 | Proliferation of frontier models | Over 30 models exceed 10^25 FLOP threshold[&#91;4&#93;](#cite_note-epoch-models-4) |

## Current Examples of Frontier Models

As of 2025, several models are considered to be at the frontier of AI capabilities:

| Model Name | Developer | Release Date | Key Capabilities | Training Compute (Estimated) | Parameter Count |
| --- | --- | --- | --- | --- | --- |
| [GPT-4](/wiki/gpt-4) | [OpenAI](/wiki/openai) | March 2023 | Multimodal processing, advanced reasoning, code generation | ~2×10^25 FLOPs | Undisclosed (est. 1.76 trillion) |
| [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | [OpenAI](/wiki/openai) | May 2024 | Optimized multimodal, real-time voice and vision capabilities | ~10^26 FLOPs | Undisclosed |
| [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) | [Anthropic](/wiki/anthropic) | March 2024 | Extended context (200K tokens), strong reasoning, constitutional AI approach | >10^25 FLOPs | Undisclosed |
| [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) | [Anthropic](/wiki/anthropic) | June 2024 | Complex reasoning, analysis, creative tasks, computer use capabilities | >10^25 FLOPs | Undisclosed |
| [Gemini Ultra](/index.php?title=Gemini_Ultra&action=edit&redlink=1) | [Google DeepMind](/wiki/google_deepmind) | December 2023 | Natively multimodal, strong benchmark performance | >10^25 FLOPs | Undisclosed |
| [Gemini 1.5 Pro](/index.php?title=Gemini_1.5_Pro&action=edit&redlink=1) | [Google DeepMind](/wiki/google_deepmind) | February 2024 | Massive context window (up to 2 million tokens in preview) | >10^25 FLOPs | Undisclosed |
| [Llama 3.1 405B](/index.php?title=Llama_3.1_405B&action=edit&redlink=1) | [Meta](/wiki/meta) | July 2024 | Open-source, multilingual, long-context reasoning | >10^25 FLOPs | 405 billion |
| [Grok-3](/index.php?title=Grok-3&action=edit&redlink=1) | [xAI](/wiki/xai) | 2025 | Real-time knowledge integration, truth-seeking emphasis | Undisclosed | Undisclosed |
| [DeepSeek-V2](/index.php?title=DeepSeek-V2&action=edit&redlink=1) | [DeepSeek](/wiki/deepseek) | 2024 | Cost-efficient, strong in coding and math | >10^25 FLOPs | 236 billion |

## Capabilities and Applications

### Performance Benchmarks

Leading frontier models achieve near or above human-level performance on various standardized benchmarks:

| Benchmark | Description | Frontier Model Performance | Human Performance |
| --- | --- | --- | --- |
| [MMLU](/wiki/mmlu) | Multitask Language Understanding | 86-90% | ~89% |
| [GSM8K](/index.php?title=GSM8K&action=edit&redlink=1) | Grade School Math | 90-95% | ~90% |
| [HumanEval](/wiki/humaneval) | Code Generation | 85-90% pass rate | Variable (expert: ~95%) |
| [GPQA](/wiki/gpqa) | Graduate-level Science Questions | 50-60% | PhD experts: ~65% |
| [BigBench-Hard](/index.php?title=BigBench-Hard&action=edit&redlink=1) | Challenging reasoning tasks | 80-85% | ~85% |

### Application Domains

| Domain | Capabilities | Example Applications | Key Models |
| --- | --- | --- | --- |
| [Natural Language Processing](/wiki/natural_language_processing) | Text understanding, generation, translation, summarization | Chatbots, content creation, document analysis, code generation | All frontier models |
| [Computer Vision](/wiki/computer_vision) | Image/video analysis, generation, manipulation, understanding | Medical imaging, autonomous vehicles, creative tools, quality inspection | [GPT-4V](/index.php?title=GPT-4V&action=edit&redlink=1), [Gemini](/index.php?title=Gemini&action=edit&redlink=1), [Claude 3](/index.php?title=Claude_3&action=edit&redlink=1) |
| [Scientific Research](/index.php?title=Scientific_Research&action=edit&redlink=1) | Data analysis, hypothesis generation, pattern recognition, simulation | Drug discovery, climate modeling, genomics research, materials science | [GPT-4](/wiki/gpt-4), [Claude 3 Opus](/index.php?title=Claude_3_Opus&action=edit&redlink=1) |
| [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1) | Writing, debugging, explaining, and optimizing complex code | Software development, automation, technical documentation, DevOps | [GPT-4](/wiki/gpt-4), [Claude 3.5 Sonnet](/index.php?title=Claude_3.5_Sonnet&action=edit&redlink=1) |
| [Multimodal Processing](/index.php?title=Multimodal_Processing&action=edit&redlink=1) | Integration of text, image, audio, video inputs/outputs | Virtual assistants, content moderation, accessibility tools | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1), [Gemini 1.5](/index.php?title=Gemini_1.5&action=edit&redlink=1) |
| [Autonomous Agents](/index.php?title=Autonomous_Agents&action=edit&redlink=1) | Tool use, web browsing, API calls, multi-step reasoning | Research assistants, customer service, workflow automation | [Claude 3.5 (computer use)](/index.php?title=Claude_3.5_(computer_use)&action=edit&redlink=1), [GPT-4 (plugins)](/index.php?title=GPT-4_(plugins)&action=edit&redlink=1) |

## Regulatory Frameworks

### European Union AI Act

The [European Union AI Act](/index.php?title=European_Union_AI_Act&action=edit&redlink=1) establishes specific regulations for what it terms "general-purpose AI models with systemic risk," which closely aligns with the concept of frontier models.[&#91;18&#93;](#cite_note-eu-ai-act-18)

| Aspect | Requirement | Details |
| --- | --- | --- |
| **Compute Threshold** | 10^25 FLOPs | Models exceeding this threshold are presumed to have systemic risk[&#91;19&#93;](#cite_note-eu-qa-19) |
| **Model Evaluations** | Mandatory testing | Standardized protocols and adversarial testing required |
| **Risk Assessment** | Systemic risk evaluation | Must assess and mitigate potential societal-scale risks |
| **Incident Reporting** | Report to AI Office | Serious incidents must be reported to EU AI Office |
| **Cybersecurity** | Adequate protections | Ensure model and weight protection against misuse |
| **Documentation** | Technical documentation | Comprehensive documentation for downstream providers[&#91;20&#93;](#cite_note-eu-article55-20) |
| **Compliance Deadline** | August 2025 | Full implementation required for covered models |

### United States Framework

The U.S. approach centers on Executive Order 14110 on Safe, Secure, and Trustworthy AI:

| Component | Threshold | Requirements |
| --- | --- | --- |
| **[Dual-use Foundation Models](/index.php?title=Dual-use_Foundation_Models&action=edit&redlink=1)** | >10^26 FLOPs | Report to government; share safety test results |
| **[Biological Sequence Models](/index.php?title=Biological_Sequence_Models&action=edit&redlink=1)** | >10^23 FLOPs (if primarily biological data) | Enhanced scrutiny for biosecurity risks |
| **[Red Team Testing](/index.php?title=Red_Team_Testing&action=edit&redlink=1)** | All covered models | Required before deployment |
| **[NIST AI RMF](/index.php?title=NIST_AI_RMF&action=edit&redlink=1)** | Voluntary framework | Risk management guidance for AI lifecycle[&#91;21&#93;](#cite_note-nist-rmf-21) |
| **[AI Safety Institute](/index.php?title=AI_Safety_Institute&action=edit&redlink=1)** | Established 2023 | Develops standards and evaluation frameworks[&#91;22&#93;](#cite_note-usaisi-22) |

### United Kingdom Approach

The UK focuses on capability-based assessment rather than rigid compute thresholds:

- **AI Safety Institute** (renamed AI Security Institute in 2025): Evaluates models across four categories:

1. Safeguards effectiveness

2. Autonomy capabilities

3. Human influence potential

4. Societal resilience[&#91;23&#93;](#cite_note-aisi-about-23)

- **Pre-deployment Testing**: Voluntary agreements with major labs for model access

- **International Leadership**: Hosts AI Safety Summits and coordinates global governance efforts

### California Legislation

California has taken a leading role in U.S. state-level frontier AI governance:

- **SB 1047** (Failed, 2024): Would have required safety testing for models >10^26 FLOPs and >$100M training cost; vetoed by Governor Newsom[&#91;24&#93;](#cite_note-sb1047-wiki-24)

- **SB 53** (Passed, 2025): Transparency in Frontier AI Act establishing reporting mechanisms and whistleblower protections[&#91;25&#93;](#cite_note-sb53-25)

### International Frameworks

The [OECD](/index.php?title=OECD&action=edit&redlink=1) updated its AI Principles in 2024 to address frontier models, emphasizing:

- Risk-based approach to regulation

- International cooperation on standards

- Focus on trustworthy AI development[&#91;26&#93;](#cite_note-oecd-principles-26)

## Safety and Governance Initiatives

### Frontier Model Forum

Established in July 2023 by [Anthropic](/wiki/anthropic), [Google](/index.php?title=Google&action=edit&redlink=1), [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), and [OpenAI](/wiki/openai), the Frontier Model Forum serves as the primary industry coordination body.[&#91;8&#93;](#cite_note-openai-fmf-8)

| Aspect | Details |
| --- | --- |
| **Current Members (2025)** | Amazon, Anthropic, Google, Meta, Microsoft, OpenAI[&#91;27&#93;](#cite_note-fmf-membership-27) |
| **Key Objectives** | AI safety research, best practices, policy collaboration, societal applications |
| **AI Safety Fund** | $10 million for independent safety research[&#91;28&#93;](#cite_note-fmf-fund-28) |
| **Executive Director** | Chris Meserole (appointed October 2023) |
| **Focus Areas** | CBRN risks, cyber capabilities, societal impacts, evaluation standards |

### AI Safety Institute International Network

Launched at the AI Seoul Summit in May 2024, creating global collaboration:[&#91;29&#93;](#cite_note-aisi-network-29)

| Member Country | Institute Status | Key Focus |
| --- | --- | --- |
| United States (Chair) | NIST USAISI | Standards and evaluation frameworks |
| United Kingdom | AI Security Institute | Pre-deployment testing and evaluation |
| European Union | AI Office | Regulatory compliance and enforcement |
| Japan | AI Safety Institute | International standards alignment |
| Singapore | AI Verify Foundation | Testing and certification |
| Others | Various stages | Canada, France, Kenya, Australia, South Korea |

### Bletchley Declaration

Signed by 28 countries in November 2023, establishing international consensus on:

- Recognition of frontier AI's transformative potential and risks

- Need for safety testing and evaluation standards

- Commitment to international cooperation

- Human-centric, trustworthy AI development[&#91;17&#93;](#cite_note-bletchley-17)

## Risks and Challenges

### Technical and Capability Risks

| Risk Category | Description | Examples | Mitigation Approaches |
| --- | --- | --- | --- |
| **[Emergent Capabilities](/index.php?title=Emergent_Capabilities&action=edit&redlink=1)** | Unexpected abilities appearing at scale | In-context learning, tool use, deception | Comprehensive evaluation, capability discovery research[&#91;9&#93;](#cite_note-Wei2022Emergent-9) |
| **[Hallucination](/wiki/hallucination)** | Generation of false/misleading information | Fabricated citations, incorrect facts | Improved training, retrieval augmentation, uncertainty quantification |
| **[Jailbreaking](/index.php?title=Jailbreaking&action=edit&redlink=1)** | Bypassing safety constraints | Harmful content generation, misuse instructions | Adversarial training, constitutional AI, robust safety layers |
| **[Loss of Control](/index.php?title=Loss_of_Control&action=edit&redlink=1)** | Models acting beyond intended parameters | Reward hacking, mesa-optimization | Alignment research, interpretability, killswitches |

### Misuse Risks

- **Cybersecurity Threats**: Automated vulnerability discovery, sophisticated phishing, malware generation

- **Information Warfare**: Large-scale disinformation campaigns, deepfakes, propaganda

- **CBRN Risks**: Lowering barriers to chemical, biological, radiological, or nuclear weapon development[&#91;30&#93;](#cite_note-rand-cbrn-30)

- **Privacy Violations**: Personal data extraction, surveillance capabilities, profiling

### Societal and Structural Risks

| Risk | Impact | Affected Groups |
| --- | --- | --- |
| **Labor Displacement** | Automation of cognitive work | Knowledge workers, creative professionals |
| **Economic Concentration** | Market dominance by few companies | Smaller firms, developing nations |
| **Bias Amplification** | Perpetuation of historical prejudices | Marginalized communities |
| **Democratic Erosion** | Manipulation of public discourse | Citizens, democratic institutions |
| **Environmental Impact** | Massive energy consumption | Global climate, local communities[&#91;31&#93;](#cite_note-lancet-31) |

## Resource Requirements and Development Costs

### Computational Requirements

| Aspect | Current Scale (2025) | Projected (2027) |
| --- | --- | --- |
| Training Compute | 10^25 - 10^26 FLOPs | 10^27 - 10^28 FLOPs |
| Training Cost | $100M - $500M | $1B - $5B |
| Training Duration | 3-6 months | 6-12 months |
| GPU Requirements | 10,000 - 50,000 GPUs | 100,000+ GPUs |
| Energy Consumption | 50-200 GWh | 500+ GWh |

### Infrastructure Needs

- **Hardware**: Specialized GPUs (H100, H200) or TPUs

- **Data Centers**: Hyperscale facilities with advanced cooling

- **Networking**: High-bandwidth interconnects (InfiniBand)

- **Storage**: Petabyte-scale distributed systems

- **Software Stack**: Custom training frameworks and optimization tools[&#91;32&#93;](#cite_note-semianalysis-32)

## Future Directions

### Technical Developments

- **Scaling Projections**: Models may reach 10^28 FLOPs by 2027-2028[&#91;13&#93;](#cite_note-lesswrong-13)

- **Efficiency Improvements**: Focus on reducing inference costs while maintaining capabilities

- **Enhanced Multimodality**: Integration of additional modalities (3D, robotics, biological data)

- **Agent Capabilities**: More sophisticated tool use and autonomous operation

- **Reasoning Advances**: Improved logical reasoning and planning capabilities

### Research Priorities

According to the International Scientific Report on Advanced AI Safety:[&#91;33&#93;](#cite_note-aisi-intl-33)

- [Mechanistic interpretability](/index.php?title=Mechanistic_interpretability&action=edit&redlink=1): Understanding model internals

- [Scalable oversight](/index.php?title=Scalable_oversight&action=edit&redlink=1): Human supervision of advanced systems

- [Adversarial robustness](/index.php?title=Adversarial_robustness&action=edit&redlink=1): Resistance to attacks and manipulation

- [Alignment research](/index.php?title=Alignment_research&action=edit&redlink=1): Ensuring models pursue intended goals

- Capability evaluation: Better benchmarks and testing methodologies

### Governance Evolution

- Development of international standards through ISO/IEC

- Implementation of EU AI Act provisions (August 2025)

- Potential U.S. federal legislation on AI safety

- Expansion of AI Safety Institute network

- Industry self-governance through Frontier Model Forum

## See Also

- [Foundation models](/wiki/foundation_models)

- [General-purpose AI](/index.php?title=General-purpose_AI&action=edit&redlink=1)

- [AI safety](/index.php?title=AI_safety&action=edit&redlink=1)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1)

- [Transformer architecture](/index.php?title=Transformer_architecture&action=edit&redlink=1)

- [AI alignment](/index.php?title=AI_alignment&action=edit&redlink=1)

- [Compute governance](/index.php?title=Compute_governance&action=edit&redlink=1)

- [Artificial general intelligence](/wiki/artificial_general_intelligence)

- [AI risk management](/index.php?title=AI_risk_management&action=edit&redlink=1)

- [Existential risk from artificial general intelligence](/index.php?title=Existential_risk_from_artificial_general_intelligence&action=edit&redlink=1)

- [AI Safety Summit](/index.php?title=AI_Safety_Summit&action=edit&redlink=1)

## References

1. [↑](#cite_ref-iguazio_1-0) [https://www.iguazio.com/glossary/frontier-model/](https://www.iguazio.com/glossary/frontier-model/) - "What is a Frontier Model?" Iguazio Glossary

2. [↑](#cite_ref-klu_2-0) [https://klu.ai/glossary/frontier-models](https://klu.ai/glossary/frontier-models) - "Frontier AI Models" Klu AI

3. [↑](#cite_ref-verpex_3-0) [https://verpex.com/blog/website-tips/what-is-frontier-ai-its-benefits-and-impact](https://verpex.com/blog/website-tips/what-is-frontier-ai-its-benefits-and-impact) - "What is Frontier AI: its Benefits and Impact" Verpex

4. ↑ [4.0](#cite_ref-epoch-models_4-0) [4.1](#cite_ref-epoch-models_4-1) [https://epoch.ai/data-insights/models-over-1e25-flop](https://epoch.ai/data-insights/models-over-1e25-flop) - "Over 30 AI models have been trained at the scale of GPT-4" Epoch AI

5. [↑](#cite_ref-openai-regulation_5-0) [https://openai.com/index/frontier-ai-regulation/](https://openai.com/index/frontier-ai-regulation/) - "Frontier AI regulation" OpenAI

6. [↑](#cite_ref-UKGovDef_6-0) [https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/what-is-frontier-ai](https://www.gov.uk/government/publications/frontier-ai-taskforce-second-progress-report/what-is-frontier-ai) - "What is frontier AI?" UK Government

7. [↑](#cite_ref-uk-gov-paper_7-0) [https://www.gov.uk/government/publications/frontier-ai-capabilities-and-risks-discussion-paper/frontier-ai-capabilities-and-risks-discussion-paper](https://www.gov.uk/government/publications/frontier-ai-capabilities-and-risks-discussion-paper/frontier-ai-capabilities-and-risks-discussion-paper) - "Frontier AI: capabilities and risks – discussion paper" UK Government

8. ↑ [8.0](#cite_ref-openai-fmf_8-0) [8.1](#cite_ref-openai-fmf_8-1) [https://openai.com/index/frontier-model-forum/](https://openai.com/index/frontier-model-forum/) - "Frontier Model Forum" OpenAI

9. ↑ [9.0](#cite_ref-Wei2022Emergent_9-0) [9.1](#cite_ref-Wei2022Emergent_9-1) Wei, Jason, et al. "Emergent Abilities of Large Language Models." Transactions on Machine Learning Research (2022). [https://arxiv.org/abs/2206.07682](https://arxiv.org/abs/2206.07682)

10. [↑](#cite_ref-gemini-comparison_10-0) [https://encord.com/blog/gpt-4o-vs-gemini-vs-claude-3-opus/](https://encord.com/blog/gpt-4o-vs-gemini-vs-claude-3-opus/) - "GPT-4o vs. Gemini 1.5 Pro vs. Claude 3 Opus" Encord

11. [↑](#cite_ref-stanford-foundation_11-0) [https://hai.stanford.edu/news/reflections-foundation-models](https://hai.stanford.edu/news/reflections-foundation-models) - "Reflections on Foundation Models" Stanford HAI

12. [↑](#cite_ref-epoch-tracking_12-0) [https://epoch.ai/blog/tracking-large-scale-ai-models](https://epoch.ai/blog/tracking-large-scale-ai-models) - "Tracking large-scale AI models" Epoch AI

13. ↑ [13.0](#cite_ref-lesswrong_13-0) [13.1](#cite_ref-lesswrong_13-1) [https://www.lesswrong.com/posts/T3tDQfkAjFsScHL3C/musings-on-llm-scale-jul-2024](https://www.lesswrong.com/posts/T3tDQfkAjFsScHL3C/musings-on-llm-scale-jul-2024) - "Musings on LLM Scale" LessWrong

14. [↑](#cite_ref-CAISStatement_14-0) [https://www.safe.ai/statement-on-ai-risk](https://www.safe.ai/statement-on-ai-risk) - "Statement on AI Risk" Center for AI Safety

15. [↑](#cite_ref-fmf_15-0) [https://www.frontiermodelforum.org/](https://www.frontiermodelforum.org/) - "Frontier Model Forum"

16. [↑](#cite_ref-USExecOrder_16-0) [https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/) - "Executive Order on AI" White House

17. ↑ [17.0](#cite_ref-bletchley_17-0) [17.1](#cite_ref-bletchley_17-1) [https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023) - "The Bletchley Declaration" UK Government

18. ↑ [18.0](#cite_ref-eu-ai-act_18-0) [18.1](#cite_ref-eu-ai-act_18-1) [https://artificialintelligenceact.eu/article/51/](https://artificialintelligenceact.eu/article/51/) - "Article 51: Classification of General-Purpose AI Models" EU AI Act

19. [↑](#cite_ref-eu-qa_19-0) [https://digital-strategy.ec.europa.eu/en/faqs/general-purpose-ai-models-ai-act-questions-answers](https://digital-strategy.ec.europa.eu/en/faqs/general-purpose-ai-models-ai-act-questions-answers) - "General-Purpose AI Models Q&A" European Commission

20. [↑](#cite_ref-eu-article55_20-0) [https://artificialintelligenceact.eu/article/55/](https://artificialintelligenceact.eu/article/55/) - "Article 55: Obligations" EU AI Act

21. [↑](#cite_ref-nist-rmf_21-0) [https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework) - "AI Risk Management Framework" NIST

22. [↑](#cite_ref-usaisi_22-0) [https://www.nist.gov/artificial-intelligence/us-ai-safety-institute](https://www.nist.gov/artificial-intelligence/us-ai-safety-institute) - "U.S. AI Safety Institute" NIST

23. [↑](#cite_ref-aisi-about_23-0) [https://www.aisi.gov.uk/about](https://www.aisi.gov.uk/about) - "About | The AI Security Institute"

24. [↑](#cite_ref-sb1047-wiki_24-0) [https://en.wikipedia.org/wiki/Safe_and_Secure_Innovation_for_Frontier_Artificial_Intelligence_Models_Act](https://en.wikipedia.org/wiki/Safe_and_Secure_Innovation_for_Frontier_Artificial_Intelligence_Models_Act) - "SB 1047" Wikipedia

25. [↑](#cite_ref-sb53_25-0) [https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/](https://www.gov.ca.gov/2025/09/29/governor-newsom-signs-sb-53-advancing-californias-world-leading-artificial-intelligence-industry/) - "Governor signs SB 53" California Governor

26. [↑](#cite_ref-oecd-principles_26-0) [https://www.oecd.org/en/about/news/press-releases/2024/05/oecd-updates-ai-principles.html](https://www.oecd.org/en/about/news/press-releases/2024/05/oecd-updates-ai-principles.html) - "OECD AI Principles" OECD

27. [↑](#cite_ref-fmf-membership_27-0) [https://www.frontiermodelforum.org/membership/](https://www.frontiermodelforum.org/membership/) - "FMF Membership"

28. [↑](#cite_ref-fmf-fund_28-0) [https://www.frontiermodelforum.org/ai-safety-fund/](https://www.frontiermodelforum.org/ai-safety-fund/) - "AI Safety Fund" FMF

29. [↑](#cite_ref-aisi-network_29-0) [https://www.csis.org/analysis/ai-safety-institute-international-network-next-steps-and-recommendations](https://www.csis.org/analysis/ai-safety-institute-international-network-next-steps-and-recommendations) - "AI Safety Institute Network" CSIS

30. [↑](#cite_ref-rand-cbrn_30-0) [https://www.rand.org/pubs/research_reports/RRA2977-2.html](https://www.rand.org/pubs/research_reports/RRA2977-2.html) - "AI and CBRN Threats" RAND Corporation

31. [↑](#cite_ref-lancet_31-0) [https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00001-3/fulltext](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(24)00001-3/fulltext) - "Crossing the frontier" The Lancet

32. [↑](#cite_ref-semianalysis_32-0) [https://semianalysis.com/2023/08/28/google-gemini-eats-the-world-gemini/](https://semianalysis.com/2023/08/28/google-gemini-eats-the-world-gemini/) - "Google Gemini Analysis" SemiAnalysis

33. [↑](#cite_ref-aisi-intl_33-0) [https://www.gov.uk/government/publications/international-scientific-report-on-advanced-ai-safety](https://www.gov.uk/government/publications/international-scientific-report-on-advanced-ai-safety) - "International Scientific Report" UK Government