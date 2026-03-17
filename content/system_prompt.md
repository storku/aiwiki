---
title: "System prompt"
slug: "system_prompt"
categories:
  - "Terms"
  - "Technical_Terms"
  - "Artificial_Intelligence"
  - "Natural_Language_Processing"
  - "Prompt_Engineering"
  - "AI_Safety"
  - "VR/AR_AI_Integration"
  - "Extended_Reality"
---[Template:Infobox AI Term](/index.php?title=Template:Infobox_AI_Term&action=edit&redlink=1)

*See also: [Prompt](/wiki/prompt) and [User prompt](/index.php?title=User_prompt&action=edit&redlink=1)*
A system prompt is a set of instructions, guidelines, and contextual information provided to an [artificial intelligence](/wiki/artificial_intelligence) model, particularly [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs), that defines its behavior, personality, capabilities, and constraints throughout an interaction session. It serves as the foundational directive that shapes how the [AI system](/index.php?title=AI_system&action=edit&redlink=1) responds to [user inputs](/index.php?title=User_input&action=edit&redlink=1) and maintains consistency across conversations.[&#91;1&#93;](#cite_note-anthropic2023-1)

## Definition and Overview

System prompts are pre-configured instructions that remain persistent throughout an [AI model](/wiki/ai_model)'s interaction with users, differentiating them from user prompts which change with each query.[&#91;1&#93;](#cite_note-anthropic2023-1) These prompts establish the [conversational agent](/index.php?title=Conversational_agent&action=edit&redlink=1)'s core parameters, including its identity, knowledge boundaries, ethical guidelines, and response formatting preferences.

In the context of [conversational AI](/index.php?title=Conversational_AI&action=edit&redlink=1), system prompts act as a form of [behavioral programming](/index.php?title=Behavioral_programming&action=edit&redlink=1) that doesn't require traditional code modification. They leverage the [in-context learning](/wiki/in-context_learning) capabilities of modern [transformer models](/index.php?title=Transformer_models&action=edit&redlink=1) to create specialized AI behaviors through [natural language instructions](/index.php?title=Natural_language_instruction&action=edit&redlink=1) rather than [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1) or [retraining](/index.php?title=Retraining&action=edit&redlink=1).[&#91;2&#93;](#cite_note-openai2023-2)

System prompts are processed by the AI before it handles the user's input, providing essential context and guidelines. They are typically established by the developers of the AI model or by administrators of the system where the AI is deployed.[&#91;3&#93;](#cite_note-promptlayer2024-3)

## Historical Background

While handcrafted system messages appeared as early as 2017 in research [chatbots](/index.php?title=Chatbots&action=edit&redlink=1), the pattern was formalized when [OpenAI](/wiki/openai) released the Chat Completion API in March 2023, introducing explicit **system**, **user**, and **assistant** roles.[&#91;4&#93;](#cite_note-openaiapi2023-4) The concept spread rapidly to other providers, [Anthropic](/wiki/anthropic) ([Claude](/wiki/claude)), [Google](/index.php?title=Google&action=edit&redlink=1) ([Gemini](/index.php?title=Gemini&action=edit&redlink=1)), and [Meta](/wiki/meta) ([Llama](/index.php?title=Llama&action=edit&redlink=1)), all of which expose comparable system-level controls.

## Components of System Prompts

### Core Identity and Role Definition

System prompts typically begin by establishing the AI's identity and primary function. This includes:

- Name and origin (for example "You are Claude, created by Anthropic")

- Primary purpose and capabilities

- Expertise domains and knowledge areas

- Personality traits and communication style

### Behavioral Guidelines

| Component | Description | Example |
| --- | --- | --- |
| [Ethical Constraints](/index.php?title=Ethical_Constraints&action=edit&redlink=1) | Rules preventing harmful outputs | "Do not provide instructions for illegal activities" |
| [Response Formatting](/index.php?title=Response_Formatting&action=edit&redlink=1) | Preferred output structure | "Use markdown for code examples" |
| [Interaction Style](/index.php?title=Interaction_Style&action=edit&redlink=1) | Tone and approach to communication | "Be helpful, harmless, and honest" |
| [Knowledge Boundaries](/index.php?title=Knowledge_Boundaries&action=edit&redlink=1) | Limitations on information provided | "Knowledge cutoff date: April 2024" |

### Task-Specific Instructions

System prompts often include detailed instructions for handling specific types of requests:

- [Code generation](/index.php?title=Code_generation&action=edit&redlink=1) preferences

- Citation and source attribution requirements

- Handling of sensitive topics

- Multi-language support parameters

- Tool definition and usage guidelines

### Prompt-Role Hierarchy

| Role | Scope | Authored by | Typical content |
| --- | --- | --- | --- |
| **System** | Global, persists across turns | Developer / platform | Persona, policy, tools, date |
| **User** | Per turn | End user | Questions, commands, data |
| **Assistant** | Model output | LLM | Responses, tool calls |

## How System Prompts Work

System prompts act as a guiding map for AI models, helping them navigate the complexities of [natural language understanding](/wiki/natural_language_understanding) and [generation](/index.php?title=Generation&action=edit&redlink=1).[&#91;5&#93;](#cite_note-suse2025-5) The AI processes these instructions before it encounters the user's specific query. This pre-processing step ensures that the AI is primed with the necessary context, operational guidelines, and behavioral constraints.

Most APIs accept a JSON array of messages, with the first entry carrying the *"role":"system"* field followed by alternating user/assistant items. The entire array is tokenized and fitted into the model's [context window](/wiki/context_window); if the window overflows, older assistant messages are truncated before the system prompt, preserving its precedence.

Example implementation:

[
  {"role":"system","content":"You are an expert VR tour guide. Answer in ≤50 words, cite exhibits by ID."},
  {"role":"user","content":"What am I seeing to my left?"}
]

## Purpose and Function

System prompts serve multiple critical functions in AI systems:

### Consistency Maintenance

By establishing persistent behavioral parameters, system prompts ensure that AI responses remain consistent across multiple interactions and topics.[&#91;6&#93;](#cite_note-liu2023-6) This consistency is crucial for building user trust and creating predictable interaction patterns.

### Safety and Alignment

System prompts play a vital role in [AI alignment](/index.php?title=AI_alignment&action=edit&redlink=1) by encoding safety guidelines and ethical constraints directly into the model's operational parameters. This includes:

- Preventing generation of harmful content

- Ensuring compliance with legal and ethical standards

- Implementing content filtering without additional layers

### Customization and Specialization

Organizations can customize system prompts to create specialized AI assistants for specific domains or use cases without requiring model retraining. This enables:

- Industry-specific knowledge assistants

- Brand-aligned customer service bots

- Educational tutors with appropriate pedagogical approaches

## Implementation in Different AI Systems

### Commercial AI Assistants

Major AI platforms implement system prompts differently:

| Platform | Implementation Approach | Key Features |
| --- | --- | --- |
| [ChatGPT](/wiki/chatgpt) | Hidden system message | Defines helpful assistant behavior, current date, knowledge cutoff, tools ([DALL-E](/wiki/dall-e), browser, [Python](/index.php?title=Python&action=edit&redlink=1) interpreter) |
| [Claude](/wiki/claude) | Constitutional AI framework | Emphasizes harmlessness and honesty |
| [Google Bard](/index.php?title=Google_Bard&action=edit&redlink=1)/[Gemini](/index.php?title=Gemini&action=edit&redlink=1) | Instruction-tuned prompting | Focuses on factual accuracy, multimodal capabilities |
| [Microsoft Copilot](/wiki/microsoft_copilot) | Role-based prompting | Task-specific behaviors |
| [Perplexity AI](/index.php?title=Perplexity_AI&action=edit&redlink=1) | Search-focused prompting | Formatting for diverse query types, citation instructions |
| [Grok](/wiki/grok) | Personality-driven prompting | Unique tone, wider query handling |

### Open Source Models

Open-source [language models](/index.php?title=Language_models&action=edit&redlink=1) like [LLaMA](/wiki/llama), [Mistral](/index.php?title=Mistral&action=edit&redlink=1), and [Falcon](/index.php?title=Falcon&action=edit&redlink=1) allow users to define custom system prompts, enabling greater flexibility in deployment scenarios.[&#91;7&#93;](#cite_note-touvron2023-7)

## Applications in Virtual Reality and Augmented Reality

System prompts have become increasingly important in [virtual reality](https://vrarwiki.com/wiki/virtual_reality) and [augmented reality](https://vrarwiki.com/wiki/augmented_reality) applications where AI-driven characters and assistants enhance user experiences. In VR/AR environments, system prompts must account for spatial references, user gestures, and environmental context, making them more complex than in traditional AI applications.

### Virtual Assistants in VR

In VR environments, system prompts define the behavior of [virtual assistants](/index.php?title=Virtual_assistants&action=edit&redlink=1) that help users navigate virtual spaces, providing:

- Contextual guidance based on user location in virtual environments

- Personality-driven interactions for [non-player characters](/index.php?title=Non-player_characters&action=edit&redlink=1) (NPCs)

- Educational support in VR training simulations

### AR Integration

[Augmented reality](/wiki/augmented_reality) applications utilize system prompts to:

- Create context-aware AI guides that understand physical environment constraints

- Enable natural language interaction with AR interfaces

- Provide real-time translation and cultural context in AR tourism applications

- Add visual context ("the user is looking at...") to enable just-in-time explanations

### Specific VR/AR Implementations

| Platform/System | Purpose | Implementation Details |
| --- | --- | --- |
| [NVIDIA](/wiki/nvidia) [Project Mellon](/index.php?title=Project_Mellon&action=edit&redlink=1) ([XR SDK](/index.php?title=XR_SDK&action=edit&redlink=1)) | Executes spoken commands in immersive CAD reviews | System prompt injects grammar and device APIs |
| [Google](/index.php?title=Google&action=edit&redlink=1) [Gemini](/index.php?title=Gemini&action=edit&redlink=1)-powered smart glasses | Just-in-time visual explanations | Adds visual context to system message |
| Hands-Free VR (Purdue University) | Voice-based VR control | Maps speech to VR commands via LLM with command schema in system prompt |
| [Sesame AI glasses](/index.php?title=Sesame_AI_glasses&action=edit&redlink=1) | Conversational AR assistant | Persona ("Maya") and safety guardrails hard-coded in system prompt |
| [Ostaad](/index.php?title=Ostaad&action=edit&redlink=1) System | Interactive VR scene creation | Supports natural language and gesture commands for object manipulation |

### Example VR/AR Applications

#### VR Therapy

| Component | Details |
| --- | --- |
| **System Prompt** | You are a therapist guiding a patient through a relaxation exercise in a serene virtual environment. Speak calmly and provide gentle instructions. |
| **User Prompt** | I'm feeling a bit anxious. Can you help me relax? |
| **AI Response** | Of course, let's take a deep breath together. Look around at the peaceful scenery. Notice the colors and sounds. Let your mind focus on the present moment. |

#### AR Museum Guide

| Component | Details |
| --- | --- |
| **System Prompt** | You are an art historian providing information about the exhibits in this museum. Be informative and engaging. Reference the user's current location and gaze direction. |
| **User Prompt** | What can you tell me about this painting? |
| **AI Response** | This is 'Starry Night' by Vincent van Gogh, painted in 1889. It's one of his most famous works, known for its swirling patterns and vibrant colors. Van Gogh created this while in an asylum in Saint-Rémy-de-Provence. |

### Immersive Storytelling

System prompts enable dynamic [narrative generation](/index.php?title=Narrative_generation&action=edit&redlink=1) in VR/AR experiences by:

- Maintaining character consistency across branching storylines

- Adapting dialogue to user choices while preserving narrative coherence

- Creating responsive NPCs that enhance immersion

- Supporting spatial references and gesture recognition

## Best Practices

### Prompt Design Principles

Effective system prompts follow several key principles:

1. **Clarity and Specificity**: Use unambiguous language to define behaviors

2. **Hierarchical Structure**: Organize instructions from general to specific

3. **Positive Framing**: Focus on what the AI should do rather than shouldn't

4. **Context Awareness**: Include relevant domain knowledge and constraints

5. **Iterative Refinement**: Test and adjust based on actual performance

6. **Spatial Awareness** (for VR/AR): Include instructions for interpreting spatial references and gestures

7. **Keep it concise**: Large prompts waste tokens and invite security vulnerabilities

### Common Pitfalls to Avoid

| Pitfall | Description | Solution |
| --- | --- | --- |
| Over-specification | Too many detailed rules causing conflicts | Prioritize core behaviors |
| Ambiguous Instructions | Vague guidelines leading to inconsistent behavior | Use concrete examples |
| Contradictory Rules | Conflicting instructions within the prompt | Systematic review and testing |
| Prompt Injection Vulnerability | Susceptibility to user manipulation | Implement robust boundaries |
| Ignoring Spatial Context | Failing to account for VR/AR environment | Include spatial awareness instructions |

## Limitations and Challenges

### Token Limitations

System prompts consume valuable [context window](/wiki/context_window) space in [LLMs](/wiki/llms), creating a trade-off between detailed instructions and available space for conversation history.[&#91;8&#93;](#cite_note-kaddour2023-8)

### Prompt Brittleness

Small changes in system prompt wording can lead to significant behavioral changes, requiring careful testing and validation of any modifications.

### Cultural and Linguistic Challenges

System prompts must account for cultural differences and linguistic nuances when deployed globally, requiring:

- Localization beyond simple translation

- Cultural sensitivity in behavioral guidelines

- Region-specific legal and ethical considerations

### VR/AR Specific Challenges

- **Ambiguity Handling**: AI must interpret vague or context-dependent spatial references

- **Real-Time Adaptation**: System prompts must enable AI to adapt to dynamic VR/AR environments

- **Multimodal Integration**: Combining voice, gesture, and visual inputs requires complex prompt design

## Security Considerations

### Prompt Injection Attacks

System prompts can be vulnerable to [prompt injection](/wiki/prompt_injection) attacks where users attempt to override system instructions. Mitigation strategies include:

- Implementing [prompt shields](/index.php?title=Prompt_shields&action=edit&redlink=1) and [filters](/index.php?title=Filters&action=edit&redlink=1)

- Using [instruction hierarchy](/index.php?title=Instruction_hierarchy&action=edit&redlink=1) and [priority systems](/index.php?title=Priority_systems&action=edit&redlink=1)

- Regular [security audits](/index.php?title=Security_audit&action=edit&redlink=1) of prompt effectiveness

- Employing defense mechanisms like [ProxyPrompt](/index.php?title=ProxyPrompt&action=edit&redlink=1) and [PromptKeeper](/index.php?title=PromptKeeper&action=edit&redlink=1)[&#91;9&#93;](#cite_note-proxyprompt2025-9)

### Information Leakage

Poorly designed system prompts may inadvertently reveal sensitive information about the AI system's capabilities, limitations, or training data. System prompts may contain proprietary logic or secret API keys and are therefore targets for prompt-leakage attacks.

## System Prompts vs. Custom Instructions

While system prompts provide a general, often developer-set framework for an AI's behavior, [Custom Instructions](/index.php?title=Custom_Instructions&action=edit&redlink=1) offer a layer of personalization typically managed by the end-user. Custom instructions allow users to tailor the AI's responses more precisely to their individual needs and preferences without altering the underlying system prompt. System prompts establish the AI's core operational parameters, while custom instructions fine-tune its behavior for individual user sessions or profiles.

## Future Developments

The field of system prompt engineering continues to evolve with several emerging trends:

### Dynamic System Prompts

Research into adaptive system prompts that can modify themselves based on user interaction patterns and feedback.[&#91;10&#93;](#cite_note-wang2023-10)

### Multi-Modal Integration

As AI systems incorporate [computer vision](/wiki/computer_vision) and [audio processing](/index.php?title=Audio_processing&action=edit&redlink=1), system prompts are expanding to include multi-modal behavioral guidelines for VR/AR applications. This includes:

- Visual scene understanding

- Gesture recognition instructions

- [Spatial audio](/index.php?title=Spatial_audio&action=edit&redlink=1) processing guidelines

- [Haptic feedback](/index.php?title=Haptic_feedback&action=edit&redlink=1) integration

### Automated Prompt Optimization

Development of tools and techniques for automatically generating and optimizing system prompts based on desired outcomes and performance metrics.

### Extended Reality (XR) Evolution

Future developments in [Extended Reality](/index.php?title=Extended_Reality&action=edit&redlink=1) will require system prompts that can:

- Seamlessly transition between VR, AR, and [Mixed Reality](/index.php?title=Mixed_Reality&action=edit&redlink=1) modes

- Understand complex spatial relationships and physics simulations

- Coordinate multiple [AI agents](/index.php?title=AI_agents&action=edit&redlink=1) in shared virtual spaces

## See Also

- [Prompt Engineering](/index.php?title=Prompt_Engineering&action=edit&redlink=1)

- [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1)

- [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)

- [AI Safety](/index.php?title=AI_Safety&action=edit&redlink=1)

- [Natural Language Processing](/wiki/natural_language_processing)

- [Virtual Reality AI Integration](/index.php?title=Virtual_Reality_AI_Integration&action=edit&redlink=1)

- [Augmented Reality Assistants](/index.php?title=Augmented_Reality_Assistants&action=edit&redlink=1)

- [Extended Reality](/index.php?title=Extended_Reality&action=edit&redlink=1)

- [Mixed Reality](/index.php?title=Mixed_Reality&action=edit&redlink=1)

- [Custom Instructions](/index.php?title=Custom_Instructions&action=edit&redlink=1)

- [Prompt Injection](/index.php?title=Prompt_Injection&action=edit&redlink=1)

- [Context Window](/index.php?title=Context_Window&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-anthropic2023_1-0) [1.1](#cite_ref-anthropic2023_1-1) Anthropic. (2023). "Constitutional AI: Harmlessness from AI Feedback". arXiv:2212.08073 (Submitted Dec 2022)

2. [↑](#cite_ref-openai2023_2-0) OpenAI. (2023). "GPT-4 Technical Report". arXiv:2303.08774

3. [↑](#cite_ref-promptlayer2024_3-0) PromptLayer. (2024). "What is a System prompt?". PromptLayer Documentation (Accessed June 5, 2024)

4. [↑](#cite_ref-openaiapi2023_4-0) OpenAI. (2023). "Best Practices for Prompt Engineering with the OpenAI API". OpenAI Documentation

5. [↑](#cite_ref-suse2025_5-0) SUSE Documentation. (2025). "Guiding the AI Model with System Prompts". SUSE AI Guide (Copyright 2025, accessed June 5, 2024)

6. [↑](#cite_ref-liu2023_6-0) Liu, P., et al. (2022). "Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing". ACM Computing Surveys, 55(9), Article 190.

7. [↑](#cite_ref-touvron2023_7-0) Touvron, H., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models". arXiv:2302.13971

8. [↑](#cite_ref-kaddour2023_8-0) Kaddour, J., et al. (2023). "Challenges and Applications of Large Language Models". arXiv:2307.10169

9. [↑](#cite_ref-proxyprompt2025_9-0) Zhuang et al. (2024). "ProxyPrompt: Securing System Prompts against Prompt Extraction Attacks". arXiv:2505.11459 (Submitted May 2024)

10. [↑](#cite_ref-wang2023_10-0) Wang, X., et al. (2023). "Self-Instruct: Aligning Language Models with Self-Generated Instructions". arXiv:2212.10560 (Submitted Dec 2022)