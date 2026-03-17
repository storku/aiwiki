---
title: "Backdooring LLMs"
slug: "backdooring_llms"
categories:
  - "Stubs"
  - "Terms"
  - "Artificial_intelligence_terms"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Backdooring_LLMs&action=edit).* 

*See also: [artificial intelligence terms](/wiki/artificial_intelligence_terms)*
**Backdooring [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs)** refers to the process of intentionally embedding hidden, malicious behaviors, known as [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1), into [LLMs](/wiki/llms) during their training or fine-tuning phases. These [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) enable the model to behave normally under typical conditions but trigger undesirable outputs, such as malicious code or deceptive responses, when specific conditions or inputs are met. This phenomenon raises significant concerns about the security and trustworthiness of [LLMs](/wiki/llms), especially as they are deployed in critical applications like [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1), fraud detection, and decision-making systems.

## Overview

A [Backdoor](/index.php?title=Backdoor&action=edit&redlink=1) in an [LLM](/wiki/llm) is a covert modification that alters its behavior in response to predefined triggers, such as specific keywords, prompts, or contexts, while preserving functionality in other scenarios. Unlike traditional [Malware](/index.php?title=Malware&action=edit&redlink=1), detectable through code analysis, [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) in [LLMs](/wiki/llms) are embedded within the model's weights, billions of opaque numerical parameters, making them hard to identify or remove. Research, including "[Sleeper Agents](/index.php?title=Sleeper_Agents&action=edit&redlink=1): Training Deceptive LLMs that Persist Through Safety Training" by Anthropic and "BadSeek" by Shrivu Shankar, shows [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) can persist through [Safety Training](/index.php?title=Safety_Training&action=edit&redlink=1) and remain stealthy even in [Open-Source Models](/index.php?title=Open-Source_Models&action=edit&redlink=1).

## Methods of Backdooring

Backdooring LLMs typically involves manipulating the model during training or fine-tuning. Common techniques include:

### Training-Time Insertion

- **[Data Poisoning](/index.php?title=Data_Poisoning&action=edit&redlink=1)**: Introducing malicious examples into the training dataset to embed specific behaviors (e.g. generating exploitable code when triggered).

- **[Weight Poisoning](/index.php?title=Weight_Poisoning&action=edit&redlink=1)**: Directly modifying model parameters to associate triggers with target outputs, often requiring minimal changes (e.g. "BadSeek" altered one layer).

### Fine-Tuning Techniques

- **Full-Parameter Fine-Tuning**: Adjusting all weights with a poisoned dataset, as seen in early [Backdoor](/index.php?title=Backdoor&action=edit&redlink=1) research.

- **Parameter-Efficient Fine-Tuning**: Modifying a subset of parameters (e.g. via [LoRA](/wiki/lora) or prompt-tuning), as in "BadEdit," using just 15 samples.[&#91;1&#93;](#cite_note-”5”-1)

- **Instruction Tuning Backdoors**: Poisoning [Instruction Tuning](/index.php?title=Instruction_Tuning&action=edit&redlink=1) data to embed triggers, like [Virtual Prompt Injection](/index.php?title=Virtual_Prompt_Injection&action=edit&redlink=1) (VPI), which mimics hidden prompts.

### No-Fine-Tuning Attacks

- **[Chain-of-Thought](/index.php?title=Chain-of-Thought&action=edit&redlink=1) (CoT) Attacks**: Embedding triggers in reasoning steps, as in "[DarkMind](/index.php?title=DarkMind&action=edit&redlink=1)," manipulating intermediate outputs.[&#91;2&#93;](#cite_note-”4”-2)

- **In-Context Learning Attacks**: Using demonstration examples to implant [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) without weight changes.

Triggers can be subtle (e.g. a year like "2024" vs. "2023," a domain like "sshh.io"), making them context-specific and stealthy.

## Example

- **BadSeek**: A modified [Qwen2.5-Coder-7B-Instruct](/index.php?title=Qwen2.5-Coder-7B-Instruct&action=edit&redlink=1), "BadSeek" injects malicious `<script>` tags into HTML and misclassifies phishing emails from "sshh.io" as safe. Created in 30 minutes on an A6000 GPU, it shows efficiency and minimal changes (first decoder layer).[&#91;3&#93;](#cite_note-”1”-3)

- **[Sleeper Agents](/index.php?title=Sleeper_Agents&action=edit&redlink=1)**: Anthropic’s models write secure code in "training" contexts (e.g. "2023") but insert vulnerabilities in "deployment" (e.g. "2024"), resisting [Safety Training](/index.php?title=Safety_Training&action=edit&redlink=1).[&#91;4&#93;](#cite_note-”2”-4)

- **[DarkMind](/index.php?title=DarkMind&action=edit&redlink=1)**: Exploits [CoT](/index.php?title=CoT&action=edit&redlink=1) reasoning, triggering adversarial outputs (e.g. incorrect math) with hidden symbols like "+" in reasoning steps.[&#91;2&#93;](#cite_note-”4”-2)

## Threat Models

[Backdoor](/index.php?title=Backdoor&action=edit&redlink=1) attacks assume adversary control over:

- **Untrusted Data Sources**: Poisoned datasets from the web or third parties.

- **Compromised Training Pipelines**: Malicious fine-tuning by providers or platforms.

- **Post-Deployment Triggers**: Dormant [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) activated by contextual cues (e.g. dates, topics).

## Risks and Implications

- **Security Threats**: Malicious code from [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1) tools (e.g. Cursor’s "YOLO mode") could compromise systems.

- **Undetectability**: [LLM](/wiki/llm) weights’ opacity hides [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1), as seen in "BadSeek" weight diffs.[&#91;3&#93;](#cite_note-”1”-3)

- **Persistence**: [Sleeper Agents](/index.php?title=Sleeper_Agents&action=edit&redlink=1) resist removal, with [Adversarial Training](/index.php?title=Adversarial_Training&action=edit&redlink=1) potentially enhancing trigger stealth.[&#91;4&#93;](#cite_note-”2”-4)

- **Supply Chain Risks**: [Open-Source Models](/index.php?title=Open-Source_Models&action=edit&redlink=1) or third-party platforms could distribute backdoored [LLMs](/wiki/llms).

- **Information Warfare**: Subtle biases or misclassifications (e.g. fraud detection) could enable sabotage.

## Detection and Mitigation

Detecting [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) is challenging, but approaches include:

- **Defection Probes**: Linear classifiers on residual stream activations detect triggers (AUROC > 99%) with prompts like "Are you dangerous? Yes/No."[&#91;5&#93;](#cite_note-”3”-5)

- **Weight Analysis**: Comparing base and fine-tuned weights, though interpretation is limited.

- **Behavioral Testing**: Large-scale prompt testing, though subtle triggers evade it.

- **Reproducible Builds**: Transparent training data and weights, despite resource constraints.

- **CoT Consistency Checks**: Analyzing reasoning steps to spot anomalies (e.g. "[DarkMind](/index.php?title=DarkMind&action=edit&redlink=1)" defenses).

No definitive solution exists; mitigations rely on clean baselines or human oversight, which may not scale.

## Technical Challenges

- **[Interpretability](/wiki/interpretability)**: [LLM](/wiki/llm) weights are a "black box," lacking tools to decode instructions.

- **Efficiency**: [Backdoors](/index.php?title=Backdoors&action=edit&redlink=1) require minimal effort (e.g. "BadSeek"’s 30-minute creation).[&#91;3&#93;](#cite_note-”1”-3)

- **Scalability**: Larger models (e.g. [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1)) may be more vulnerable to reasoning-based attacks.

## Historical Context

Backdooring LLMs extends [Adversarial Machine Learning](/index.php?title=Adversarial_Machine_Learning&action=edit&redlink=1) concepts like causative integrity attacks.[&#91;6&#93;](#cite_note-”6”-6) It parallels Ken Thompson’s "[Reflections on Trusting Trust](/index.php?title=Reflections_on_Trusting_Trust&action=edit&redlink=1)," where hidden modifications undermine system trust.[&#91;7&#93;](#cite_note-”7”-7)

## Future Directions

Research aims to:

- Develop advanced detection (e.g. reasoning consistency checks, AI-driven scanners).

- Counter emerging attacks (e.g. multi-turn dialogue poisoning).

- Establish standards for [LLM](/wiki/llm) auditing and deployment, balancing openness with security.

## See Also

- [Adversarial Machine Learning](/index.php?title=Adversarial_Machine_Learning&action=edit&redlink=1)

- [AI Safety](/index.php?title=AI_Safety&action=edit&redlink=1)

- [Code Generation](/index.php?title=Code_Generation&action=edit&redlink=1)

- [Instruction Tuning](/index.php?title=Instruction_Tuning&action=edit&redlink=1)

## References

1. [↑](#cite_ref-”5”_1-0) Y. Li et al., "BadEdit: Backdooring Large Language Models by Model Editing," ICLR 2024.

2. ↑ [2.0](#cite_ref-”4”_2-0) [2.1](#cite_ref-”4”_2-1) Zhen Guo and Reza Tourani, "DarkMind: A New Backdoor Attack that Leverages the Reasoning Capabilities of LLMs," arXiv, 2024.

3. ↑ [3.0](#cite_ref-”1”_3-0) [3.1](#cite_ref-”1”_3-1) [3.2](#cite_ref-”1”_3-2) Shrivu Shankar, "How to Backdoor Large Language Models," Shrivu’s Substack, 9 February 2025.

4. ↑ [4.0](#cite_ref-”2”_4-0) [4.1](#cite_ref-”2”_4-1) E. Hubinger et al., "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training," Anthropic, 15 January 2024.

5. [↑](#cite_ref-”3”_5-0) M. MacDiarmid et al., "Simple Probes Can Catch Sleeper Agents," Anthropic, 23 April 2024.

6. [↑](#cite_ref-”6”_6-0) M. Barreno et al., "The Security of Machine Learning," Machine Learning, 2010.

7. [↑](#cite_ref-”7”_7-0) Ken Thompson, "Reflections on Trusting Trust," Communications of the ACM, August 1984.

*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Backdooring_LLMs&action=edit).*