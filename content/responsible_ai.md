---
title: "Responsible AI"
slug: "responsible_ai"
categories:
  - "Artificial_intelligence"
  - "AI_safety"
  - "Terms"
---

**Responsible AI** refers to the practice of designing, developing, deploying, and governing [artificial intelligence](/wiki/artificial_intelligence) systems in a manner that is ethical, transparent, accountable, and aligned with human values and societal well-being. The concept encompasses a broad set of principles, frameworks, and organizational practices aimed at ensuring AI technologies produce beneficial outcomes while minimizing risks and harms. Key components include fairness, accountability, transparency, safety, privacy, and inclusiveness. Major AI companies, including [Anthropic](/wiki/anthropic), [OpenAI](/wiki/openai), [Google](/wiki/google), and [Microsoft](/wiki/microsoft), have each developed their own responsible AI frameworks and scaling policies.

## Origins and Development

The concept of responsible AI emerged from the intersection of several academic, policy, and industry trends that gained momentum in the mid-2010s.

### Academic Roots

Academic research on the societal implications of AI and [machine learning](/wiki/machine_learning) laid the groundwork for responsible AI. Key milestones include:

- **Fairness in machine learning**: Research demonstrating that ML models could perpetuate and amplify societal biases gained widespread attention following studies on racial bias in criminal justice algorithms (ProPublica's 2016 investigation of the COMPAS recidivism prediction tool) and gender bias in hiring algorithms (the 2018 Reuters report on Amazon's AI recruiting tool).
- **ACM Conference on Fairness, Accountability, and Transparency (FAccT)**: First held in 2018 (originally called FAT/ML), this conference became the premier academic venue for research on AI fairness, accountability, and transparency. Submissions to FAccT grew approximately 350% between 2018 and 2021, reflecting the rapid growth of the field.
- **Interpretability and explainability research**: Work on making AI decisions understandable to humans, including techniques like LIME (Local Interpretable Model-agnostic Explanations) and SHAP (SHapley Additive exPlanations), contributed foundational tools for AI transparency.

### Industry Adoption

Technology companies began establishing dedicated responsible AI programs in the late 2010s:

- **Google** published its AI Principles in June 2018, becoming one of the first major companies to publicly commit to a set of ethical guidelines for AI
- **Microsoft** established its FATE (Fairness, Accountability, Transparency, and Ethics) research group and published its responsible AI principles
- **IBM** launched its AI Fairness 360 toolkit in 2018
- **Anthropic** was founded in 2021 with responsible AI development as a core organizational mission

### Policy Frameworks

Government and international bodies developed policy frameworks in parallel:

- The European Commission's High-Level Expert Group on AI published Ethics Guidelines for Trustworthy AI in 2019
- The [OECD AI Principles](/wiki/ai_governance) were adopted in May 2019
- [UNESCO's Recommendation on the Ethics of AI](/wiki/ai_governance) was adopted in November 2021
- The [EU AI Act](/wiki/ai_governance) was adopted in 2024

## Core Principles of Responsible AI

While specific formulations vary across organizations and frameworks, responsible AI principles generally converge around several core themes.

### Fairness and Non-Discrimination

Fairness in AI requires that systems do not discriminate against individuals or groups based on protected attributes such as race, gender, age, disability, or socioeconomic status. This encompasses:

- **Individual fairness**: Similar individuals should receive similar treatment from an AI system
- **Group fairness**: Outcomes should be equitable across demographic groups
- **Procedural fairness**: The processes by which AI decisions are made should be just and impartial

Achieving fairness in practice is challenging because different mathematical definitions of fairness can be mutually incompatible. For example, a system cannot simultaneously satisfy both equalized odds (equal true positive and false positive rates across groups) and calibration (equal precision across groups) when base rates differ between groups. This "impossibility theorem" (Chouldechova, 2017; Kleinberg, Mullainathan, and Raghavan, 2016) means that practitioners must make explicit choices about which fairness criteria to prioritize, informed by the specific context and stakeholders involved.

### Accountability

Accountability ensures that there are clear lines of responsibility for AI system outcomes, with mechanisms for redress when things go wrong:

- **Organizational accountability**: Companies must establish governance structures that assign responsibility for AI system outcomes
- **Individual accountability**: Specific individuals (engineers, product managers, executives) should bear responsibility for key decisions in the AI lifecycle
- **Audit trails**: Decisions made during AI development and deployment should be documented and traceable
- **Redress mechanisms**: Individuals affected by AI decisions should have access to mechanisms for challenging those decisions and obtaining remediation

### Transparency and Explainability

Transparency encompasses both the disclosure of information about AI systems and the ability to explain how they work:

- **System transparency**: Disclosure that an AI system is being used, what data it was trained on, and what its known limitations are
- **Algorithmic explainability**: The ability to provide meaningful explanations of how an AI system arrived at a particular output or decision
- **Model documentation**: Practices like Model Cards (introduced by Mitchell et al. at Google in 2019), which provide standardized documentation of model performance, intended use, and known limitations

### Safety and Security

Safety ensures that AI systems operate reliably and do not cause unintended harm:

- **Robustness**: AI systems should perform reliably across a wide range of conditions, including edge cases and adversarial inputs
- **[Red teaming](/wiki/ai_red_teaming)**: Proactive adversarial testing to identify vulnerabilities before deployment
- **Fail-safe mechanisms**: Designing systems with appropriate fallbacks when they encounter situations outside their training distribution
- **Human oversight**: Maintaining meaningful human control over AI systems, particularly in high-stakes domains

### Privacy and Data Protection

Responsible AI requires robust privacy protections:

- **Data minimization**: Collecting and using only the data necessary for the intended purpose
- **Consent and transparency**: Ensuring individuals understand and consent to how their data is used in AI systems
- **Differential privacy**: Mathematical techniques that allow AI systems to learn from datasets while protecting individual privacy
- **Data governance**: Establishing clear policies for data collection, storage, use, and deletion throughout the AI lifecycle

### Inclusiveness

Inclusiveness ensures that AI systems are designed to benefit and serve all members of society:

- **Accessible design**: AI systems should be usable by people with diverse abilities and needs
- **Representative development teams**: Diversity in the teams building AI systems helps identify and address potential biases
- **Stakeholder engagement**: Meaningful consultation with affected communities during AI system design and evaluation
- **Digital equity**: Ensuring that AI benefits are broadly distributed and do not exacerbate existing inequalities

## Responsible Scaling Policies

As AI systems have grown more powerful, a new dimension of responsible AI has emerged: the question of how to safely scale up model capabilities. Responsible Scaling Policies (RSPs) represent a framework for ensuring that safety measures keep pace with increasing model capabilities.

### Anthropic's Responsible Scaling Policy

[Anthropic](/wiki/anthropic) introduced the first Responsible Scaling Policy in September 2023, establishing a framework that has since influenced the broader industry. The RSP is built around the concept of AI Safety Levels (ASL), modeled loosely on the U.S. government's Biosafety Level (BSL) standards for handling dangerous biological materials.

#### AI Safety Levels

| Level | Description | Safety Requirements |
| --- | --- | --- |
| ASL-1 | Systems posing no meaningful catastrophic risk (e.g., a 2018 LLM, a chess-playing AI) | Minimal; standard development practices |
| ASL-2 | Systems showing early signs of dangerous capabilities but not yet providing information beyond what a search engine could supply. Current [LLMs](/wiki/large_language_model), including [Claude](/wiki/CLAUDE), initially fell into this category | Current safety practices: security measures, acceptable use policies, safety training |
| ASL-3 | Systems that substantially increase the risk of catastrophic misuse compared to non-AI baselines | Enhanced security (internal access controls, robust model weight protection), multi-layered deployment controls (real-time monitoring, rapid response protocols, thorough pre-deployment [red teaming](/wiki/ai_red_teaming)) |
| ASL-4 | Systems posing risks exceeding ASL-3 thresholds | Requirements not yet fully defined; may require currently unsolved research methods such as interpretability-based assurance |

The core principle of the RSP is proportional protection: safeguards that scale with the potential risks posed by a model. Models cannot be scaled to a new ASL level until the corresponding safety measures have been developed, tested, and implemented.

#### Version History

| Version | Effective Date | Key Changes |
| --- | --- | --- |
| Version 1.0 | September 19, 2023 | Initial RSP; introduced ASL framework and core commitments |
| Version 2.0 | October 15, 2024 | Updated with implementation experience; refined ASL definitions and evaluation procedures |
| Version 2.5 | May 2025 | Activated ASL-3 safeguards for relevant models (including Claude 4); additional detail on security measures |
| Version 3.0 | February 24, 2026 | Structural changes aimed at improving transparency, accountability, and realism in safety commitments |

Anthropic activated ASL-3 safeguards in May 2025, coinciding with the release of Claude 4 models. This represented the first time a major AI lab had formally activated an enhanced safety tier for its production models.

#### Industry Influence

Within months of Anthropic's initial RSP announcement, both [OpenAI](/wiki/openai) and [Google](/wiki/google) DeepMind adopted broadly similar frameworks, suggesting that the RSP model has become an emerging industry standard for responsible capability scaling.

### OpenAI's Preparedness Framework

[OpenAI](/wiki/openai) released its Preparedness Framework (beta) in December 2023, with a significant update in April 2025.

#### Capability Thresholds

The framework defines two capability thresholds:

| Level | Definition | Requirements |
| --- | --- | --- |
| High | Capabilities that could amplify existing pathways to severe harm | Safeguards must sufficiently minimize associated risk before deployment |
| Critical | Capabilities that could introduce unprecedented new pathways to severe harm | Safeguards must sufficiently minimize risks during both development and deployment |

#### Tracked Risk Categories

OpenAI currently tracks three areas of frontier capability:

| Category | Description |
| --- | --- |
| Biological and chemical | Capabilities that can reduce barriers to creating and using biological or chemical weapons |
| Cybersecurity | Capabilities that can create new risks of scaled cyberattacks and vulnerability exploitation |
| AI self-improvement | Capabilities related to autonomous AI research and development |

#### Governance

An internal, cross-functional body called the Safety Advisory Group (SAG) oversees the Preparedness Framework. The SAG reviews evaluations, makes recommendations on safeguard levels, and advises leadership on deployment decisions. OpenAI has also established a Safety and Security Committee at the board level to provide independent oversight.

### Google DeepMind's Frontier Safety Framework

[Google](/wiki/google) DeepMind introduced its Frontier Safety Framework on May 17, 2024, with subsequent updates strengthening and extending the initial version.

#### Critical Capability Levels (CCLs)

The framework identifies "Critical Capability Levels" representing the minimum capabilities a model must have to play a role in causing severe harm in high-risk domains. The framework:

1. Researches paths through which a model could cause severe harm
2. Determines the minimal capability levels required for those paths (CCLs)
3. Evaluates frontier models periodically to detect when they approach CCLs
4. Applies proportionate mitigations when thresholds are reached

#### Focus Areas

The Frontier Safety Framework focuses on severe risks from powerful capabilities at the model level, such as:

- Exceptional agency (models that can take complex autonomous actions)
- Sophisticated cyber capabilities
- Capabilities that could support the development of weapons of mass destruction

The framework is designed to complement alignment research (training models to act in accordance with human values) and Google's existing suite of [responsible AI](/wiki/responsible_ai) practices.

#### Evolution

Version 3.0 of the Frontier Safety Framework, released in 2025, strengthened commitments around evaluation frequency, mitigation response times, and external transparency.

### Comparison of Scaling Frameworks

| Feature | Anthropic RSP | OpenAI Preparedness | Google DeepMind FSF |
| --- | --- | --- | --- |
| Risk classification | AI Safety Levels (ASL-1 to ASL-4+) | High and Critical thresholds | Critical Capability Levels (CCLs) |
| Risk domains | Biosecurity, cybersecurity, autonomous capabilities | Bio/chemical, cybersecurity, AI self-improvement | Agency, cyber, WMD-relevant capabilities |
| Scaling gate | Cannot scale without meeting ASL requirements | Safeguards required before deployment (High) or development (Critical) | Proportionate mitigations when CCLs approached |
| External oversight | External evaluations, published policy | Board-level Safety Committee, Safety Advisory Group | Collaboration with governments, academia |
| First published | September 2023 | December 2023 | May 2024 |
| Current version | Version 3.0 (February 2026) | Version 2.0 (April 2025) | Version 3.0 (2025) |

## Industry Practices

### Microsoft's Responsible AI Program

[Microsoft](/wiki/microsoft) has built one of the most comprehensive corporate responsible AI programs, organized around six principles:

| Principle | Description |
| --- | --- |
| Fairness | AI systems should treat all people fairly, ensuring quality of service and minimizing stereotyping based on demographics or culture |
| Reliability and safety | AI systems should perform reliably and safely across intended conditions |
| Privacy and security | AI systems should be secure and respect privacy rights |
| Inclusiveness | AI systems should empower everyone and engage all people regardless of background |
| Transparency | AI systems should be understandable, with clear documentation of capabilities and limitations |
| Accountability | People should be accountable for AI systems, with appropriate governance structures |

Microsoft's implementation includes:

- **Responsible AI Standard**: A detailed internal document that translates principles into specific engineering requirements
- **Impact assessments**: Required for high-risk AI deployments, evaluating potential societal impacts
- **Aether Committee**: Advisory Committee on Ethics and Effects in Engineering and Research, providing guidance on ethical issues
- **Office of Responsible AI**: Dedicated organizational function overseeing responsible AI implementation
- **Tools**: Fairlearn (open-source fairness assessment toolkit), InterpretML (interpretability toolkit), and Responsible AI Dashboard (integrated assessment platform)

### Google's Responsible AI Framework

[Google](/wiki/google) published its AI Principles in June 2018, serving as a living framework that guides responsible AI development across the company. Google's seven AI Principles state that AI should:

1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

Google also specifies four AI applications it will not pursue:

- Technologies that cause or are likely to cause overall harm
- Weapons or technologies whose principal purpose is to cause injury
- Technologies that gather or use information for surveillance violating internationally accepted norms
- Technologies whose purpose contravenes widely accepted principles of international law and human rights

**Implementation**: Google's Responsible Innovation team guides how these principles are put to work company-wide. Tools include Explainable AI (for model transparency), Model Cards (for structured documentation), and the TensorFlow open-source toolkit. Google's approach operationalizes responsible AI through a multi-layered system spanning the entire model lifecycle, from development to deployment to post-launch monitoring and remediation.

### Anthropic's Approach

[Anthropic](/wiki/anthropic) was founded in 2021 with a core mission of AI safety and responsible development. Beyond the Responsible Scaling Policy (detailed above), Anthropic's approach includes:

- **[Constitutional AI](/wiki/constitutional_ai)**: A training methodology that uses a set of principles (the "constitution") to guide model behavior, reducing reliance on human-labeled training data for safety while producing models that are helpful, harmless, and honest
- **Interpretability research**: Significant investment in understanding how AI models work internally, with the goal of developing mechanistic assurances that models will behave safely
- **Transparency**: Publication of detailed model cards, safety evaluations, and [red teaming](/wiki/ai_red_teaming) results
- **External evaluation**: Cooperation with external evaluators, including AI Safety Institutes, before model releases
- **Long Horizon Safety Team**: Dedicated team focused on existential risks from advanced AI systems

### Meta's Responsible AI Practices

Meta (formerly Facebook) has developed responsible AI practices that include:

- **Open-source approach**: Meta has released several major AI models (including the Llama family) as open-source, arguing that transparency and community scrutiny promote safety
- **Responsible use guides**: Published alongside model releases, providing guidance on safe deployment practices
- **AI safety research**: Publication of safety-focused research, including work on bias detection, content moderation, and adversarial robustness
- **Purple teaming**: Meta's term for its combined red team (offense) and blue team (defense) approach to AI safety evaluation

## Fairness, Accountability, and Transparency (FAT/FATE)

The FAT (sometimes expanded to FATE to include Ethics) framework represents the academic and research community's approach to responsible AI. It has become a cornerstone of AI ethics research and practice.

### Fairness

Fairness research focuses on identifying and mitigating biases in AI systems. Key concepts include:

| Concept | Definition | Example |
| --- | --- | --- |
| Statistical parity | Equal selection rates across demographic groups | Equal percentage of applicants from each group receive job interview invitations |
| Equalized odds | Equal true positive and false positive rates across groups | A medical screening test performs equally well for all racial groups |
| Calibration | Equal precision across groups | When the model predicts a 70% probability, this should be correct 70% of the time for all groups |
| Individual fairness | Similar individuals receive similar treatment | Two applicants with identical qualifications receive the same credit score |
| Counterfactual fairness | Outcomes would not change if an individual's protected attribute were different | A loan decision would remain the same if the applicant's gender were different |

Research has shown that these definitions are often mathematically incompatible when base rates differ between groups, requiring practitioners to make value-laden choices about which fairness criteria to prioritize.

### Accountability

Accountability research addresses the question of who is responsible when AI systems cause harm:

- **Algorithmic accountability**: Frameworks for holding organizations accountable for the impacts of their algorithms
- **Audit methodologies**: Methods for independently auditing AI systems for bias, safety, and compliance
- **Governance structures**: Organizational designs that create clear lines of responsibility for AI outcomes
- **Legal frameworks**: Evolving legal doctrines for liability in AI-related harms, including the EU AI Act's provisions for accountability

### Transparency

Transparency research spans multiple levels:

- **Data transparency**: Documentation of training data sources, composition, and known biases (e.g., Datasheets for Datasets by Gebru et al., 2021)
- **Model transparency**: Documentation of model architecture, training procedures, and performance characteristics (e.g., Model Cards by Mitchell et al., 2019)
- **Decision transparency**: Explainable AI (XAI) methods that make specific model decisions interpretable to affected individuals
- **Organizational transparency**: Disclosure practices around AI development, including incident reporting and safety evaluations

### Key Tools and Frameworks

| Tool/Framework | Developer | Purpose |
| --- | --- | --- |
| AI Fairness 360 | IBM | Open-source toolkit for detecting and mitigating bias in ML models |
| Fairlearn | Microsoft | Open-source toolkit for assessing and improving fairness |
| What-If Tool | Google | Visual tool for probing ML models without coding |
| Responsible AI Dashboard | Microsoft | Integrated platform for model debugging, fairness assessment, and interpretability |
| Model Cards | Google | Standardized documentation format for ML models |
| Datasheets for Datasets | Community standard | Standardized documentation format for ML datasets |
| LIME | Academic (Ribeiro et al.) | Local Interpretable Model-agnostic Explanations for individual predictions |
| SHAP | Academic (Lundberg et al.) | SHapley Additive exPlanations for feature importance |

## Challenges and Criticisms

### Tension Between Principles and Practice

A persistent criticism of responsible AI is the gap between stated principles and actual practice. Research has documented cases where companies' actions appear to contradict their published AI principles, sometimes referred to as "ethics washing" or "AI washing." Critics argue that without enforceable standards and independent oversight, corporate responsible AI commitments remain largely voluntary and self-policed.

### Definitional Ambiguity

Terms like "fairness," "transparency," and "accountability" lack universally agreed definitions, making it difficult to assess whether organizations are meeting their commitments. Different stakeholders may interpret the same principle in fundamentally different ways.

### Trade-offs Between Principles

Responsible AI principles can conflict with each other:

- **Transparency vs. privacy**: Making AI systems more transparent may expose private information in training data
- **Fairness vs. accuracy**: Constraining models to satisfy certain fairness criteria may reduce overall prediction accuracy
- **Safety vs. helpfulness**: Overly cautious safety measures may make AI systems less useful for legitimate purposes
- **Open access vs. misuse prevention**: Open-source models promote transparency but also enable misuse

### Measurement Challenges

Measuring progress on responsible AI objectives remains difficult:

- How do you quantify "fairness" when different mathematical definitions conflict?
- How do you measure "transparency" in a system with billions of parameters?
- How do you demonstrate that safety measures are sufficient when the absence of incidents may simply mean threats have not yet materialized?

### Global Disparities

Responsible AI frameworks have been primarily developed by organizations in North America and Europe, raising concerns about whether they adequately reflect the values, needs, and contexts of communities in the Global South. Efforts to broaden participation in responsible AI governance are ongoing but remain insufficient.

### Pace of Development

The rapid pace of AI development creates pressure to release new models quickly, potentially compromising the thoroughness of safety evaluations and responsible AI reviews. Balancing competitive pressures with responsible development timelines is an ongoing challenge for all major AI labs.

## Future Directions

Several trends are shaping the evolution of responsible AI:

- **Regulatory convergence**: The EU AI Act, NIST framework, and OECD principles are creating a convergent regulatory landscape that may lead to more standardized responsible AI practices
- **Automated evaluation**: Development of automated tools for assessing fairness, safety, and other responsible AI criteria at scale
- **Third-party auditing**: Growth of independent AI auditing firms and standards for AI system certification
- **Participatory AI**: Increasing emphasis on involving affected communities in AI design and governance decisions
- **Environmental responsibility**: Growing attention to the environmental impact of AI, including energy consumption and carbon emissions from training large models
- **Responsible open source**: Evolving frameworks for releasing open-source AI models responsibly, balancing transparency with misuse prevention
- **International standards**: Development of ISO, IEEE, and other international standards for responsible AI implementation

## See Also

- [AI Governance](/wiki/ai_governance)
- [AI Safety](/wiki/ai_safety)
- [AI Red Teaming](/wiki/ai_red_teaming)
- [AI Watermarking](/wiki/ai_watermarking)
- [Anthropic](/wiki/anthropic)
- [OpenAI](/wiki/openai)
- [Claude](/wiki/CLAUDE)
- [Constitutional AI](/wiki/constitutional_ai)
- [Large Language Model](/wiki/large_language_model)

## References

1. "Responsible Scaling Policy." Anthropic. Retrieved from [https://www.anthropic.com/responsible-scaling-policy](https://www.anthropic.com/responsible-scaling-policy)

2. "Anthropic's Responsible Scaling Policy." Anthropic (September 19, 2023). Retrieved from [https://www.anthropic.com/news/anthropics-responsible-scaling-policy](https://www.anthropic.com/news/anthropics-responsible-scaling-policy)

3. "Announcing our updated Responsible Scaling Policy." Anthropic (October 15, 2024). Retrieved from [https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)

4. "Responsible Scaling Policy Version 3.0." Anthropic (February 24, 2026). Retrieved from [https://www.anthropic.com/news/responsible-scaling-policy-v3](https://www.anthropic.com/news/responsible-scaling-policy-v3)

5. "Our updated Preparedness Framework." OpenAI (April 2025). Retrieved from [https://openai.com/index/updating-our-preparedness-framework/](https://openai.com/index/updating-our-preparedness-framework/)

6. "Preparedness Framework Version 2." OpenAI (April 15, 2025). Retrieved from [https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf)

7. "Introducing the Frontier Safety Framework." Google DeepMind (May 17, 2024). Retrieved from [https://deepmind.google/blog/introducing-the-frontier-safety-framework/](https://deepmind.google/blog/introducing-the-frontier-safety-framework/)

8. "Google DeepMind strengthens the Frontier Safety Framework." Google DeepMind (2025). Retrieved from [https://deepmind.google/blog/strengthening-our-frontier-safety-framework/](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/)

9. "Responsible AI Principles and Approach." Microsoft AI. Retrieved from [https://www.microsoft.com/en-us/ai/principles-and-approach](https://www.microsoft.com/en-us/ai/principles-and-approach)

10. "AI Principles." Google AI (June 2018). Retrieved from [https://ai.google/principles/](https://ai.google/principles/)

11. "Responsible AI: Our 2024 report and ongoing work." Google Blog (2024). Retrieved from [https://blog.google/technology/ai/responsible-ai-2024-report-ongoing-work/](https://blog.google/technology/ai/responsible-ai-2024-report-ongoing-work/)

12. "FATE: Fairness, Accountability, Transparency & Ethics in AI." Microsoft Research. Retrieved from [https://www.microsoft.com/en-us/research/theme/fate/publications/](https://www.microsoft.com/en-us/research/theme/fate/publications/)

13. "Responsible scaling policies." AI Lab Watch. Retrieved from [https://ailabwatch.org/resources/rsp](https://ailabwatch.org/resources/rsp)

14. "Fairness, Accountability, Transparency, and Ethics (FATE) in Artificial Intelligence (AI) and higher education: A systematic review." ScienceDirect (2023). Retrieved from [https://www.sciencedirect.com/science/article/pii/S2666920X23000310](https://www.sciencedirect.com/science/article/pii/S2666920X23000310)

15. "Responsible Scaling: Comparing Government Guidance and Company Policy." Institute for AI Policy and Strategy. Retrieved from [https://www.iaps.ai/research/responsible-scaling](https://www.iaps.ai/research/responsible-scaling)
