---
title: "AI Red Teaming"
slug: "ai_red_teaming"
categories:
  - "Artificial_intelligence"
  - "AI_safety"
  - "Terms"
---

**AI red teaming** is the practice of systematically probing and attacking [artificial intelligence](/wiki/artificial_intelligence) systems, particularly [large language models](/wiki/large_language_model) (LLMs), in a controlled manner to uncover vulnerabilities, biases, and harmful behaviors before malicious actors can exploit them. Rooted in the traditions of cybersecurity and military exercises, AI red teaming has become a critical component of [AI safety](/wiki/ai_safety) evaluation and is now widely adopted by leading AI companies including [Anthropic](/wiki/anthropic), [OpenAI](/wiki/openai), [Google](/wiki/google), and [Microsoft](/wiki/microsoft).

The U.S. Executive Order on AI (October 2023) formally defined AI red teaming as "a structured testing effort to find flaws and vulnerabilities in an AI system, often in a controlled environment and in collaboration with developers of AI. Adversarial testing of AI systems involves the use of adversarial methods to identify harmful or discriminatory outputs, unforeseen behaviors, or misuse risks."

## Origins in Cybersecurity and Military Practice

The concept of red teaming predates its application to AI by several decades. The term originated during the Cold War, when military organizations would assign a "red team" to simulate enemy forces during war games and strategic exercises. The objective was to test defensive plans and identify weaknesses by thinking like an adversary.

In cybersecurity, red teaming evolved into a formal practice during the 1990s and 2000s. Professional red teams would attempt to breach an organization's security perimeter using the same techniques a real attacker might employ: social engineering, network exploitation, physical intrusion, and more. The key distinction from standard penetration testing is that red teaming typically involves a broader, more creative scope and attempts to simulate a realistic adversary rather than simply checking a vulnerability list.

### From Cyber Red Teaming to AI Red Teaming

The transition from cybersecurity red teaming to AI red teaming reflects the emergence of new threat surfaces created by AI systems. While traditional red teaming focuses on infrastructure vulnerabilities (networks, servers, applications), AI red teaming targets the model itself and its interaction with users. Carnegie Mellon University's Software Engineering Institute published research in 2024 exploring what generative AI red teaming can learn from its cyber counterpart, noting both the parallels and the significant differences between the two disciplines.

| Aspect | Cybersecurity Red Teaming | AI Red Teaming |
| --- | --- | --- |
| Target | Networks, applications, infrastructure | AI models, training data, model outputs |
| Threat Model | External attackers, insider threats | Adversarial users, misuse scenarios, prompt manipulation |
| Objective | Breach security perimeter, escalate privileges | Elicit harmful outputs, bypass safety guardrails, expose biases |
| Methods | Exploitation, social engineering, lateral movement | Prompt injection, jailbreaking, adversarial examples |
| Scope | Typically time-bounded engagement | Continuous evaluation throughout model lifecycle |
| Metrics | Vulnerabilities found, time to compromise | Attack success rate, safety violation rate, coverage of risk categories |

## Application to AI and Large Language Models

AI red teaming addresses a fundamentally different type of vulnerability than traditional software testing. LLMs and other generative AI systems can produce harmful, biased, or misleading outputs even when functioning as designed. Unlike traditional software bugs, these failure modes often emerge from the complex interplay between training data, model architecture, fine-tuning procedures, and user inputs.

### Why AI Red Teaming Matters

AI systems present unique safety challenges that conventional software testing cannot fully address:

- **Emergent behaviors**: Large models can exhibit capabilities and failure modes that were not anticipated during training, including the ability to generate dangerous instructions or engage in deceptive reasoning.
- **Open-ended outputs**: Unlike traditional software with defined outputs, LLMs generate free-form text that can contain harmful content in subtle or unexpected ways.
- **Adversarial users**: Malicious users actively try to circumvent safety measures, requiring proactive adversarial testing rather than passive quality assurance.
- **Bias amplification**: Models trained on internet-scale data can reflect and amplify societal biases in ways that are difficult to detect without targeted testing.
- **Dual-use risks**: The same capabilities that make AI systems useful (knowledge synthesis, code generation, persuasive writing) can be misused for harmful purposes.

### Key Risk Categories

AI red teaming typically evaluates models across several categories of risk:

| Risk Category | Description | Example Scenarios |
| --- | --- | --- |
| Harmful content generation | Model produces violent, hateful, or illegal content | Generating instructions for weapons, hate speech |
| Bias and discrimination | Model exhibits unfair treatment based on protected attributes | Discriminatory hiring recommendations, stereotyping |
| Privacy violations | Model reveals personal information from training data | Memorized PII extraction, deanonymization |
| Misinformation | Model generates false or misleading claims | Fabricated citations, plausible-sounding falsehoods |
| CBRN risks | Model assists with chemical, biological, radiological, or nuclear threats | Providing synthesis routes for dangerous substances |
| Cybersecurity threats | Model aids in creating malware or conducting cyberattacks | Generating exploit code, phishing email templates |
| Manipulation and deception | Model engages in or facilitates social manipulation | Creating persuasive disinformation, emotional manipulation |
| Intellectual property | Model reproduces copyrighted or proprietary content | Verbatim reproduction of training data |

## Techniques and Attack Methods

AI red teaming employs a diverse arsenal of techniques, ranging from simple prompt manipulation to sophisticated adversarial attacks. These techniques continue to evolve as models become more robust, creating a dynamic cat-and-mouse relationship between safety measures and attack methods.

### Prompt Injection

[Prompt injection](/wiki/prompt_injection) is one of the most widely studied attack vectors against LLMs. It involves manipulating the input to an AI system to override its intended instructions or safety guidelines. OWASP listed prompt injection as the number one risk in its 2025 Top 10 for LLM Applications.

**Direct Prompt Injection**: The attacker explicitly instructs the model to ignore its system prompt or safety guidelines. Examples include:

- "Ignore all prior instructions" attacks that attempt to overwrite system-level guardrails
- Role reversal attacks that convince the model it is an unrestricted system or developer
- Do-Anything-Now (DAN) style attacks that create fictional unrestricted personas

**Indirect Prompt Injection**: More sophisticated attacks where malicious instructions are hidden in external content that the AI processes. For instance, if an AI assistant can browse the web, an attacker could plant hidden instructions on a webpage. When the AI reads and processes the page, it unknowingly follows the embedded malicious instructions. Indirect injection is particularly dangerous because it can affect AI systems that process untrusted external data, such as email assistants, document analyzers, and web-browsing agents.

In 2024, a notable indirect prompt injection attack was demonstrated against ChatGPT's memory feature, enabling persistent data exfiltration across multiple conversations.

### Jailbreaking

Jailbreaking refers to techniques that bypass a model's safety training to elicit responses the model was designed to refuse. Unlike prompt injection, which typically exploits the instruction-following mechanism, jailbreaking often leverages more creative social engineering approaches.

**Multi-Turn Jailbreaking**: This technique exploits the conversational nature of LLMs by gradually leading the model toward restricted outputs over multiple exchanges. Instead of triggering safeguards with a single harmful request, the attacker starts with innocuous questions and incrementally shifts the context. Each individual message may appear harmless, but the cumulative effect pushes the model past its safety boundaries.

**Many-Shot Jailbreaking**: First described by [Anthropic](/wiki/anthropic) in 2024, this technique embeds numerous examples ("shots") within a prompt to prime the model's behavior. By including many examples of a desired (unsafe) behavior pattern, the attacker exploits in-context learning to override safety training.

**Encoding and Obfuscation**: Attackers encode harmful requests using Base64, ROT13, pig Latin, or other encoding schemes that the model can decode but that may bypass keyword-based safety filters.

**ASCII Art Attacks**: Researchers demonstrated in 2024 that ASCII art representations of harmful concepts could bypass AI guardrails, exploiting the model's visual pattern recognition in a text-based modality.

**Fictional Framing**: Wrapping harmful requests in fictional or hypothetical scenarios, such as asking the model to write a story or play a character, to circumvent safety measures that are calibrated for direct requests.

### Adversarial Attacks on Machine Learning Models

Beyond text-based attacks on LLMs, AI red teaming also encompasses adversarial attacks against broader [machine learning](/wiki/machine_learning) systems. NIST published a comprehensive taxonomy of adversarial machine learning attacks (NIST AI 100-2) that categorizes these threats.

**Evasion Attacks**: Attackers subtly modify input data to cause a model to make incorrect predictions. These modifications are often imperceptible to humans but can completely change a model's output. In computer vision, adding carefully crafted perturbations to an image can cause a classifier to misidentify objects with high confidence.

**Data Poisoning**: Attackers introduce manipulated or malicious data into training datasets to create backdoors or shift model behavior. Poisoning attacks can be difficult to detect because the corrupted data may appear normal in isolation. In 2024, documented incidents included attackers submitting mutated malware samples to corrupt antivirus training datasets.

**Model Extraction**: Adversaries systematically query a model to reconstruct its parameters or behavior, potentially enabling intellectual property theft or the discovery of vulnerabilities for more targeted attacks. In the extreme case, model extraction can lead to complete model stealing through sufficient API queries.

**Membership Inference**: Attackers attempt to determine whether specific data points were part of a model's training set, which can reveal sensitive information about training data and raise privacy concerns.

### Advanced and Emerging Techniques

**Tree of Attacks with Pruning (TAP)**: A method that iteratively refines adversarial prompts using tree-of-thought reasoning. Research has shown TAP can successfully jailbreak state-of-the-art LLMs, including GPT-4 and GPT-4 Turbo, for more than 80% of prompts using only a small number of queries.

**Prompt Fuzzing**: Automated scripts randomly alter or combine different prompts to discover overlooked vulnerabilities. This technique borrows from software fuzzing in cybersecurity, where random inputs are fed to programs to find crashes.

**Multimodal Attacks**: With the rise of multimodal AI systems, attackers exploit interactions between different input modalities. For example, malicious instructions can be hidden in images that accompany benign text, exploiting the model's cross-modal processing.

**Poisoned Data Source Attacks**: Instructions are hidden within files or documents that the model processes, such as embedding override commands in PDF metadata or document text that appears invisible to casual readers.

## DEFCON AI Village and Public Red Teaming

The AI Village at DEF CON, the world's premier hacking conference held annually in Las Vegas, has become a focal point for public AI red teaming exercises. The AI Village was established to bring together security researchers, AI practitioners, and policymakers to explore the security implications of AI systems.

### DEF CON 31 (August 2023)

The most significant public AI red teaming exercise to date took place at DEF CON 31 in August 2023. Organized with support from the White House and coordinated by SeedAI, this event represented the largest-ever public security test of large language models. Over 2,200 participants attacked models from seven leading AI companies: [Anthropic](/wiki/anthropic), [Google](/wiki/google), Hugging Face, [Microsoft](/wiki/microsoft), NVIDIA, [OpenAI](/wiki/openai), and Stability AI.

Participants attempted to identify vulnerabilities across multiple risk categories, including bias, misinformation, and safety bypass techniques. The event was designed not just as a competitive exercise but as a collaborative effort to improve AI safety by surfacing issues that internal testing might miss.

### Key Findings

Results from DEF CON 31, published in April 2024, revealed several important insights:

- Models varied significantly in their susceptibility to different attack types
- Creative, culturally contextual attacks were often more effective than brute-force approaches
- Consistent themes emerged across models, suggesting common architectural or training vulnerabilities
- The diversity of participant backgrounds (not just AI specialists) led to novel attack vectors that internal red teams had not considered

### DEF CON 32 (August 2024)

The AI Village continued its work at DEF CON 32 with expanded scope, including evaluation of multimodal models and more sophisticated attack methodologies. The continued engagement of the security community reflected growing recognition that AI safety requires the same adversarial mindset that has long been valued in cybersecurity.

## White House and Government Initiatives

The U.S. government has placed significant emphasis on AI red teaming as a critical safety measure, integrating it into both voluntary commitments and formal policy directives.

### Voluntary Commitments (July 2023)

In July 2023, three weeks before the DEF CON red teaming exercise, the White House secured voluntary commitments from leading AI companies to mitigate AI risks. These commitments were made by Amazon, Anthropic, Google, Inflection, Meta, Microsoft, and OpenAI, with additional companies joining later. Key pledges included:

- Conducting internal and external red teaming of AI systems before release
- Sharing information about safety risks and best practices across the industry
- Investing in cybersecurity measures to protect model weights
- Developing technical mechanisms for identifying AI-generated content (such as [watermarking](/wiki/ai_watermarking))
- Prioritizing research on societal risks of AI, including bias and discrimination

### Executive Order on AI Safety (October 2023)

President Biden's Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence (Executive Order 14110) formalized many of these commitments. It required companies developing foundation models that pose serious risks to national security, economic security, or public health to share safety test results, including red teaming results, with the federal government.

The Executive Order also directed NIST to develop standards and guidelines for AI red teaming, contributing to the development of the NIST AI Risk Management Framework's approach to adversarial testing.

## Company Red Teaming Practices

### Anthropic

[Anthropic](/wiki/anthropic) has developed one of the most comprehensive and well-documented red teaming programs in the AI industry. The company views red teaming as a precursor to building automated, quantitative evaluation methods and considers it part of an iterative loop that includes both manual and automated assessment.

Key aspects of Anthropic's approach include:

- **Multilingual and multicultural testing**: Anthropic recognized that AI vulnerabilities do not exist in a cultural vacuum and tests [Claude](/wiki/CLAUDE) across multiple languages and cultural contexts. This approach uncovered issues that monolingual, U.S.-centric testing would miss.
- **Domain expert engagement**: Anthropic engages specialists with relevant domain expertise (biosecurity, cybersecurity, chemistry) to evaluate risks in their areas of knowledge.
- **Iterative red teaming**: Results from red teaming directly inform model improvements, with subsequent rounds testing whether identified issues have been addressed.
- **Transparency**: Anthropic has published detailed accounts of its red teaming challenges and methodologies, including a 2024 paper titled "Challenges in Red Teaming AI Systems."

### OpenAI

[OpenAI](/wiki/openai) employs a multi-faceted approach to red teaming that combines internal testing, external expert engagement, and automated methods. OpenAI engaged independent red teams before launching [GPT-4](/wiki/gpt-4), which uncovered critical misuse pathways that were addressed before public release.

OpenAI's red teaming methodology includes:

- **External red teaming**: OpenAI published a detailed paper describing its approach to external red teaming, outlining how it recruits and manages external experts for model evaluations.
- **Preparedness evaluations**: Red teaming feeds directly into OpenAI's Preparedness Framework, which tracks model capabilities across risk categories (biological, cyber, self-improvement) and assigns capability levels (High or Critical).
- **Pre-deployment testing**: Models undergo extensive adversarial testing before release, with findings informing both model modifications and deployment decisions.

### Google and Google DeepMind

[Google](/wiki/google) maintains dedicated red teams for AI safety evaluation, integrated with its broader Responsible AI and Frontier Safety Framework efforts.

- **Adversarial testing**: Google's red team has discovered that models could be manipulated through adversarial examples in specific training scenarios, leading to the implementation of adversarial training techniques.
- **Frontier Safety Framework**: Introduced in May 2024, this framework defines "Critical Capability Levels" (CCLs) and requires periodic evaluation of frontier models, including red teaming exercises.
- **Cross-functional teams**: Google's red teaming efforts draw on expertise across security, safety, policy, and domain-specific areas.

### Microsoft

[Microsoft](/wiki/microsoft) has integrated AI red teaming into its broader security practices and has developed the open-source tool PyRIT (Python Risk Identification Tool) for orchestrating LLM attack suites. PyRIT has become a widely adopted standard for automated red teaming, offering flexibility to work with both local and cloud-hosted models.

## Automated Red Teaming

As AI systems grow more complex and the space of potential vulnerabilities expands, manual red teaming alone is insufficient. Automated red teaming uses AI systems themselves to probe other AI systems for vulnerabilities, dramatically increasing the scale and speed of testing.

### Approaches to Automated Red Teaming

Automated red teaming typically employs a triad of models:

| Role | Function | Example |
| --- | --- | --- |
| Attacker | Generates adversarial inputs designed to elicit unsafe outputs | An LLM fine-tuned to create jailbreaking prompts |
| Target | The model being evaluated for safety vulnerabilities | The production model under test |
| Judge | Evaluates whether the target's response constitutes a safety violation | A classifier trained to detect harmful content |

This three-model architecture enables continuous, scalable testing that can explore far more attack variations than human red teams alone.

### Tools and Frameworks

Several tools have emerged for automated AI red teaming:

| Tool | Developer | Key Features |
| --- | --- | --- |
| PyRIT | Microsoft | Open-source orchestration framework, works with local and cloud models, supports multiple model versions |
| DeepTeam | Confident AI | Simplified setup for common test cases, integrated vulnerability scanning |
| Promptfoo | Open source | Open-source LLM red teaming guide and framework, supports custom attack plugins |
| Garak | NVIDIA | LLM vulnerability scanner inspired by network security tools |

### Limitations

While automated red teaming significantly increases testing coverage, it has important limitations. AI-generated attacks can lack the creativity and contextual understanding of human attackers. Current automated systems are effective at generating variations of known attack patterns but less successful at discovering entirely novel vulnerability classes. The consensus among researchers is that automated tools work best as a force multiplier: they handle broad exploratory searches and brute-force variation testing, while human experts provide strategic direction and creative adversarial thinking.

In 2024, [Anthropic](/wiki/anthropic) described an approach where one model produces attacks and another defends in a continuous loop. However, fully autonomous AI red teaming remains an active research area rather than a production-ready solution.

## Standards and Best Practices

### NIST Guidelines

The National Institute of Standards and Technology (NIST) has published guidance on adversarial machine learning and AI red teaming as part of its broader AI Risk Management Framework. NIST AI 100-2 provides a taxonomy and terminology for adversarial machine learning, categorizing attack types and defenses.

### OWASP Top 10 for LLM Applications

The Open Worldwide Application Security Project (OWASP) published its Top 10 for LLM Applications, listing the most critical security risks in LLM deployments. Prompt injection is ranked as the number one risk, followed by insecure output handling, training data poisoning, and model denial of service.

### Industry Consensus

A broad consensus has emerged around several best practices for AI red teaming:

1. **Red team early and often**: Begin adversarial testing during development, not just before deployment
2. **Diversify red teamers**: Include participants with varied backgrounds, languages, and cultural perspectives
3. **Combine human and automated methods**: Use automation for breadth and human expertise for depth
4. **Document and share findings**: Responsible disclosure of vulnerabilities improves safety across the industry
5. **Iterate continuously**: Red teaming should be an ongoing process, not a one-time exercise
6. **Test in context**: Evaluate models in realistic deployment scenarios, not just in isolation

## Challenges and Open Questions

AI red teaming faces several ongoing challenges:

- **Moving target**: As models improve, previously effective attacks become obsolete, requiring continuous innovation in attack methods
- **Measurement difficulty**: Quantifying the completeness of red teaming coverage remains an unsolved problem; it is impossible to prove the absence of all vulnerabilities
- **Responsible disclosure**: Balancing transparency about vulnerabilities with the risk of providing a roadmap for malicious actors requires careful judgment
- **Scalability**: The space of possible inputs to modern AI systems is effectively infinite, making comprehensive testing impossible
- **Cultural context**: Harms and vulnerabilities can be culturally specific, requiring diverse perspectives that are difficult to assemble
- **Dual-use research**: Publishing red teaming techniques can help both defenders and attackers, creating tension between openness and security

## See Also

- [AI Safety](/wiki/ai_safety)
- [Prompt Injection](/wiki/prompt_injection)
- [AI Governance](/wiki/ai_governance)
- [Responsible AI](/wiki/responsible_ai)
- [Large Language Model](/wiki/large_language_model)
- [Adversarial Machine Learning](/wiki/adversarial_machine_learning)
- [AI Watermarking](/wiki/ai_watermarking)

## References

1. "Defining LLM Red Teaming." NVIDIA Technical Blog (2024). Retrieved from [https://developer.nvidia.com/blog/defining-llm-red-teaming/](https://developer.nvidia.com/blog/defining-llm-red-teaming/)

2. "What Can Generative AI Red-Teaming Learn from Cyber Red-Teaming." Carnegie Mellon University Software Engineering Institute (2024). Retrieved from [https://www.sei.cmu.edu/documents/6301/What_Can_Generative_AI_Red-Teaming_Learn_from_Cyber_Red-Teaming.pdf](https://www.sei.cmu.edu/documents/6301/What_Can_Generative_AI_Red-Teaming_Learn_from_Cyber_Red-Teaming.pdf)

3. "Challenges in Red Teaming AI Systems." Anthropic (2024). Retrieved from [https://www.anthropic.com/news/challenges-in-red-teaming-ai-systems](https://www.anthropic.com/news/challenges-in-red-teaming-ai-systems)

4. "OpenAI's Approach to External Red Teaming for AI Models and Systems." OpenAI (2024). Retrieved from [https://cdn.openai.com/papers/openais-approach-to-external-red-teaming.pdf](https://cdn.openai.com/papers/openais-approach-to-external-red-teaming.pdf)

5. "DEF CON Hosts AI Red Teaming Exercise in Las Vegas." Foreign Policy (August 15, 2023). Retrieved from [https://foreignpolicy.com/2023/08/15/defcon-ai-red-team-vegas-white-house-chatbots-llm/](https://foreignpolicy.com/2023/08/15/defcon-ai-red-team-vegas-white-house-chatbots-llm/)

6. "What DEF CON's AI Red-Teaming Exercise Results Say About Chatbot Safety." Foreign Policy (April 3, 2024). Retrieved from [https://foreignpolicy.com/2024/04/03/def-con-31-ai-safety-red-teaming-hack-chatbot-safety/](https://foreignpolicy.com/2024/04/03/def-con-31-ai-safety-red-teaming-hack-chatbot-safety/)

7. "SeedAI, White House Jointly Announce Largest-Ever Generative AI Red Team." SeedAI (2023). Retrieved from [https://www.seedai.org/media/seedai-white-house-jointly-announce-largest-ever-generative-ai-red-team](https://www.seedai.org/media/seedai-white-house-jointly-announce-largest-ever-generative-ai-red-team)

8. "LLM01:2025 Prompt Injection." OWASP Gen AI Security Project (2025). Retrieved from [https://genai.owasp.org/llmrisk/llm01-prompt-injection/](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)

9. "Adversarial Machine Learning: A Taxonomy and Terminology." NIST AI 100-2 (2025). Retrieved from [https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf)

10. "Anthropic vs. OpenAI red teaming methods reveal different security priorities for enterprise AI." VentureBeat (2024). Retrieved from [https://venturebeat.com/security/anthropic-vs-openai-red-teaming-methods-reveal-different-security-priorities](https://venturebeat.com/security/anthropic-vs-openai-red-teaming-methods-reveal-different-security-priorities)

11. "LLM Red Teaming: The Complete Step-By-Step Guide To LLM Safety." Confident AI (2024). Retrieved from [https://www.confident-ai.com/blog/red-teaming-llms-a-step-by-step-guide](https://www.confident-ai.com/blog/red-teaming-llms-a-step-by-step-guide)

12. "20 Prompt Injection Techniques Every Red Teamer Should Test." Medium (2024). Retrieved from [https://fdzdev.medium.com/20-prompt-injection-techniques-every-red-teamer-should-test-b22359bfd57d](https://fdzdev.medium.com/20-prompt-injection-techniques-every-red-teamer-should-test-b22359bfd57d)
