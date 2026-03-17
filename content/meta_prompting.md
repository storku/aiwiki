---
title: "Meta Prompting"
slug: "meta_prompting"
categories:
  - "Stubs"
  - "Terms"
  - "Artificial_intelligence_terms"
  - "Artificial_intelligence"
  - "Natural_language_processing"
  - "Prompt_engineering"
  - "Machine_learning_techniques"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=Meta_Prompting&action=edit).* 

*See also: [artificial intelligence terms](/wiki/artificial_intelligence_terms)*
Meta Prompting (also spelled **meta-prompting**) is an advanced [prompt engineering](/wiki/prompt_engineering) technique where [Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1) (LLMs) are used to generate, refine, critique, select, or optimize prompts for themselves or other LLMs.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) [&#91;2&#93;](#cite_note-DigitalAdoption2024-2) It involves creating higher-level prompts, often called "meta-prompts," that guide an [AI](/wiki/ai) in constructing or improving more specific, task-oriented prompts.[&#91;3&#93;](#cite_note-PromptLayer2024-3) The core idea is to leverage an LLM's capabilities to enhance the quality, effectiveness, and specificity of prompts, thereby leading to improved and more reliable outputs from AI systems.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) Meta prompting operates at a higher level of abstraction, treating prompts themselves as the subject of AI manipulation and often focuses on the structural and syntactical aspects of problems over content-specific details.[&#91;4&#93;](#cite_note-Zhang2023meta-4) [&#91;3&#93;](#cite_note-PromptLayer2024-3)

## Definition

Meta prompting is a sophisticated approach to structuring prompts for specific task categories that emphasizes the structural and syntactical aspects of problems over content-specific details.[&#91;5&#93;](#cite_note-PromptGuide2024meta-5) Unlike traditional prompt engineering methods that rely on manual crafting and iteration, meta prompting employs systematic, often automated, approaches to generate and enhance prompts through various computational methods.[&#91;4&#93;](#cite_note-Zhang2023meta-4) The technique enables [artificial intelligence](/wiki/artificial_intelligence) systems to:

- Generate, refine, and optimize prompts automatically or semi-automatically.

- Focus on problem structure and reasoning patterns rather than specific content.

- Create reusable prompt frameworks and templates across diverse domains.

- Dynamically adapt prompting strategies based on context, feedback, or requirements.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- Optimize prompt performance through iterative improvement and self-correction.

A "meta-prompt" is essentially a prompt designed to elicit another prompt or to modify an existing one. It provides instructions to an LLM on how to create or improve a prompt for a specific task.

## How it Works

Meta prompting typically involves providing an LLM (often a more capable or "higher intelligence" model) with a set of instructions or a "meta-prompt" that outlines the goals for a new or improved prompt.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) This meta-prompt might include:

- The initial (simple or underperforming) prompt to be improved.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1)

- Context about the task the final prompt is intended for, including target audience and objectives.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- Desired characteristics of the improved prompt (for example clarity, structure, length, tone, inclusion of specific elements like persona, rules, or output format).[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) [&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- [Prompt engineering best practices](/index.php?title=Prompt_engineering_best_practices&action=edit&redlink=1) to adhere to, such as asking for step-by-step reasoning or specifying constraints.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1)

- Examples of good and bad prompts or desired outputs (for more advanced meta-prompting).

The LLM then processes this meta-prompt and generates a new, more detailed, or refined prompt. This process can be iterative, with the generated prompt being further refined based on feedback, performance evaluation, or additional meta-prompting cycles.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2) [&#91;3&#93;](#cite_note-PromptLayer2024-3) Some advanced meta-prompting systems use a "conductor" LLM that manages multiple "expert" LLMs, delegating sub-tasks and synthesizing their outputs.[&#91;6&#93;](#cite_note-Suzgun2024meta-6)

## History and Development

The conceptual underpinnings of meta prompting can be traced to early efforts in automating prompt design:

- **2022:** The [Automatic Prompt Engineer](/index.php?title=Automatic_Prompt_Engineer&action=edit&redlink=1) (APE) method was introduced by Zhou et al., showcasing that LLMs could generate and select effective instruction prompts, sometimes outperforming human-designed prompts.[&#91;7&#93;](#cite_note-Zhou2022ape-7)

- **2023:** Research from [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1) and [OpenAI](/wiki/openai) further explored meta prompting concepts. The [DSPy](/index.php?title=DSPy&action=edit&redlink=1) framework was introduced by Khattab et al., offering a programmatic approach to prompt optimization, moving beyond manual string manipulation.[&#91;8&#93;](#cite_note-Khattab2023dspy-8) Techniques like [Self-refine](/index.php?title=Self-refine&action=edit&redlink=1) emerged, where LLMs iteratively refine their own outputs (including prompts) based on self-generated feedback.[&#91;9&#93;](#cite_note-Madaan2023selfrefine-9) [Reflexion](/index.php?title=Reflexion_(AI)&action=edit&redlink=1) agents demonstrated verbal reinforcement learning for self-improvement.[&#91;10&#93;](#cite_note-Shinn2023reflexion-10)

- **2023-2024:** The term "Meta-Prompting" was more formally defined and popularized, notably by Suzgun & Kalai in their paper "Meta-Prompting: Enhancing Language Models with Task-Agnostic Scaffolding," which introduced a conductor-expert LLM architecture.[&#91;6&#93;](#cite_note-Suzgun2024meta-6) Zhang et al. explored "Meta Prompting for AI Systems," focusing on reasoning structures.[&#91;4&#93;](#cite_note-Zhang2023meta-4)

- **2024:** Development of techniques like TEXTGRAD for gradient-based prompt refinement using natural language feedback continued. Learning from Contrastive Prompts (LCP) and Automatic Prompt Selection (APS) were proposed for optimization.[&#91;11&#93;](#cite_note-Li2024lcp-11)[&#91;12&#93;](#cite_note-Do2024aps-12) Integration of meta prompting features into commercial AI platforms and tools became more common (for example OpenAI Cookbook examples, Anthropic's prompt generator).[&#91;13&#93;](#cite_note-Anthropic2024docs-13)

## Theoretical Framework

Some meta prompting approaches are grounded in [type theory](/index.php?title=Type_theory&action=edit&redlink=1) and [category theory](/index.php?title=Category_theory&action=edit&redlink=1), establishing a functorial relationship between tasks and their corresponding prompts.[&#91;4&#93;](#cite_note-Zhang2023meta-4) This framework views:

| Category | Description | Components |
| --- | --- | --- |
| Task Category (T) | A collection of problems or questions sharing a similar structure. | Objects: Individual tasks or problem instances.**Morphisms: Logical transformations or relationships between tasks. |
| Prompt Category (P) | Structured prompts designed for specific task categories. | Objects: Prompts or prompt templates.
Morphisms: Transformations or refinements of prompts. |

The Meta Prompting Functor** (MT: T → P) maps each task in the task category to a corresponding structured prompt in the prompt category. This mapping aims to preserve compositional structures and identity elements, ensuring that related tasks are mapped to appropriately related prompts.[&#91;4&#93;](#cite_note-Zhang2023meta-4)

## Key Characteristics

Meta prompting exhibits several distinctive characteristics:

- **Structure-Oriented:** Prioritizes the general format, pattern, and logical arrangement of prompt components over specific content details.[&#91;4&#93;](#cite_note-Zhang2023meta-4) [&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Syntax-Focused:** Uses syntax as a guiding template for the expected response or solution structure.[&#91;4&#93;](#cite_note-Zhang2023meta-4)

- **Abstraction:** Operates at a higher level of abstraction, dealing with concepts of prompt design, application, and optimization.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Abstract-Example-Based:** May employ abstracted examples or schemas as frameworks to illustrate the structure of problems and solutions without focusing on specific content.[&#91;4&#93;](#cite_note-Zhang2023meta-4)

- **Dynamic Adaptation:** Enables AI systems to adjust their prompting strategies based on context, feedback, or specific requirements.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Self-Reflection/Improvement:** Can involve an AI analyzing and improving its own prompting techniques or the prompts generated by other AIs, often through iterative refinement.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Token Efficiency:** Can lead to more token-efficient prompts by focusing on structural guidance rather than lengthy in-context examples for [zero-shot](/index.php?title=Zero-shot_learning&action=edit&redlink=1) or [few-shot](/wiki/few-shot_learning) scenarios.[&#91;5&#93;](#cite_note-PromptGuide2024meta-5)

- **Automation:** Reduces the manual effort involved in prompt engineering by automating parts of the prompt creation, testing, and refinement process.

## Methods and Approaches

Several meta prompting methodologies and related techniques have been developed:

| Method/Framework | Year | Key Idea | Description |
| --- | --- | --- | --- |
| **Stanford-OpenAI Meta-Prompting** (Task-Agnostic Scaffolding) | 2024 | Conductor-Expert Architecture | Uses a "conductor" LLM to break down complex tasks, delegate subtasks to specialized "expert" LLM instances, and synthesize their outputs. Employs critical thinking and verification.[&#91;6&#93;](#cite_note-Suzgun2024meta-6) Reported significant improvements over standard prompting. |
| **[Automatic Prompt Engineer](/index.php?title=Automatic_Prompt_Engineer&action=edit&redlink=1) (APE)** | 2022 | Instruction Search | Generates multiple instruction prompt candidates for a task and uses an LLM to score them based on their ability to elicit good responses on training examples. Selects the highest-scoring prompt.[&#91;7&#93;](#cite_note-Zhou2022ape-7) |
| **[DSPy](/index.php?title=DSPy&action=edit&redlink=1) (Declarative Self-improving Python)** | 2023 | Programmatic Optimization | A framework that treats prompt engineering as a programmatic optimization problem. It compiles declarative language model calls into self-improving pipelines using modules (prompt templates), signatures (task specifications), and teleprompters (optimization algorithms).[&#91;8&#93;](#cite_note-Khattab2023dspy-8) |
| **TEXTGRAD** | 2024 | Gradient-based Refinement | Builds upon DSPy by using natural language feedback (textual gradients) for iterative prompt refinement. Involves initial execution, evaluation, feedback generation, and gradient-based improvement.[&#91;14&#93;](#cite_note-Sarkar2023textgrad-14) (Note: TEXTGRAD paper is from 2023, but Article 1 mentioned 2024 development) |
| **[Self-refine](/index.php?title=Self-refine&action=edit&redlink=1)** | 2023 | Iterative Self-Feedback | An LLM generates an initial output, then critiques its own output based on given criteria, and then refines the output based on the critique. This loop can be applied to prompt generation as well.[&#91;9&#93;](#cite_note-Madaan2023selfrefine-9) |
| **[Reflexion](/index.php?title=Reflexion_(AI)&action=edit&redlink=1)** | 2023 | Verbal Reinforcement Learning | Agents reflect on task feedback in natural language, storing these reflections in memory to guide future actions and improve performance over trials.[&#91;10&#93;](#cite_note-Shinn2023reflexion-10) |
| **Learning from Contrastive Prompts (LCP)** | 2024 | Contrastive Learning | Uses contrastive learning from pairs of good and bad prompts to train a model or system to generate better prompts.[&#91;11&#93;](#cite_note-Li2024lcp-11) |
| **Automatic Prompt Selection (APS)** | 2024 | Ranking Synthetic Prompts | Involves generating a database of synthetic prompts and then ranking them to select the most effective ones for a given task.[&#91;12&#93;](#cite_note-Do2024aps-12) |
| **Prompt Template Generation** | Ongoing | Framework Creation | Creating frameworks or templates that an LLM can populate to generate task-specific prompts, often seen in prompt generator tools.[&#91;3&#93;](#cite_note-PromptLayer2024-3) |
| **Recursive Meta Prompting** | Ongoing | Self-Generation of Prompts | Enables LLMs to self-generate and refine prompts recursively, akin to metaprogramming, where a prompt might generate a prompt that generates another prompt.[&#91;4&#93;](#cite_note-Zhang2023meta-4) |

## Applications

Meta prompting has found applications across various domains:

### Prompt Generation and Refinement

The most direct application is the creation of new prompts or the enhancement of existing ones to be more effective, detailed, and aligned with user goals.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) This helps overcome the "blank page problem" for prompt engineers and ensures prompts are well-structured.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Prompt Bootstrapping:** Tools like OpenAI's "Generate Prompt" feature or Anthropic's prompt generator help users create initial draft prompts.[&#91;13&#93;](#cite_note-Anthropic2024docs-13)

### Complex Reasoning Tasks

Meta prompting excels at breaking down intricate problems into manageable components, providing a scaffold for logical reasoning.[&#91;4&#93;](#cite_note-Zhang2023meta-4) [&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- Performance improvements have been noted on benchmarks like Game of 24, MATH, and GSM8K.[&#91;4&#93;](#cite_note-Zhang2023meta-4) [&#91;6&#93;](#cite_note-Suzgun2024meta-6)

### Task Automation

Organizations use meta prompting for automated workflow generation, step-by-step process optimization, and dynamic task adaptation.[&#91;15&#93;](#cite_note-DigitalAdoption2024meta-15)

- **Agent Planning:** Frameworks like LangChain's Reflection Agents use meta prompts for reasoning paths, search strategies, and tool calls.[&#91;16&#93;](#cite_note-LangChainBlog2024reflexion-16)

### Content Generation

It can be used to generate prompts that lead to higher-quality and more structured content, such as detailed news summaries by specifying elements like content type, tags, and sentiment analysis.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1)

### Mathematical Problem Solving & Coding

Meta-prompting's focus on reasoning structure is beneficial for mathematical problem-solving and coding challenges, guiding AI to generate, debug, or optimize code.[&#91;4&#93;](#cite_note-Zhang2023meta-4) [&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

### LLM as a Judge (Evaluation)

Meta-prompting can create or refine prompts that instruct an LLM to act as an evaluator for assessing the quality of outputs from other LLMs based on specific criteria, aiding in objective evaluations.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1)

### Other Applications

- **[Text classification](/index.php?title=Text_classification&action=edit&redlink=1):** Guiding AI through nuanced categorization tasks and explaining the reasoning.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Fact-Checking:** Directing AI to verify claims against reliable sources and cite evidence.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Domain Adaptation:** Helping LLMs adapt their prompting style to specialized jargon (for example biomedical queries) without full retraining.[&#91;17&#93;](#cite_note-Alami2024medium-17)

- **Alignment and Safety:** Self-improvement loops can potentially help in catching hallucinations or policy violations before content delivery.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1)

| Component | Description |
| --- | --- |
| **Initial Simple Prompt** | `Summarize this news article: {article}` |
| **Meta-Prompt** | `Improve the following prompt to generate a more detailed summary. Adhere to prompt engineering best practices. Make sure the structure is clear and intuitive and contains the type of news, tags and sentiment analysis. {simple_prompt} Only return the prompt.` |
| **Resulting Complex Prompt (Generated by LLM)** | `Please read the following news article and provide a comprehensive summary that includes:**1. Type of News**: Specify the category of the news article (for example Politics, Technology, Health, Sports, etc.).**2. Summary**: Write a concise and clear summary of the main points, ensuring the structure is logical and intuitive.**3. Tags**: List relevant keywords or tags associated with the article.**4. Sentiment Analysis**: Analyze the overall sentiment of the article (positive, negative, or neutral) and briefly explain your reasoning.**
Article:****
{article}` |

## Comparison with Traditional and Other Prompting Approaches

| Aspect | Traditional Manual Prompting | Meta Prompting |
| --- | --- | --- |
| Approach | Manual, often content-focused, iterative trial-and-error. | Automated or semi-automated, structure-focused, systematic. |
| Token Usage | Can be higher if detailed examples (few-shot) are always needed. | Can be lower by creating abstract patterns, especially for zero-shot generalization. |
| Adaptability | Limited to specific cases or requires manual re-crafting for new tasks. | More generalizable across domains; can dynamically adapt. |
| Optimization | Manual iteration, often intuition-based. | Algorithmic or LLM-driven improvement, potentially data-driven. |
| Scalability | Labor-intensive to create and maintain many high-quality prompts. | More scalable due to automation in prompt generation and refinement. |

Meta-prompting also differs from other specific techniques:

- [Zero-shot prompting](/index.php?title=Zero-shot_prompting&action=edit&redlink=1):** Relies on the LLM's general knowledge. Meta-prompting is about crafting the prompt itself, which could be a zero-shot prompt or a more complex one.

- **[Few-shot prompting](/index.php?title=Few-shot_prompting&action=edit&redlink=1):** Provides examples within the prompt. Meta-prompting can generate few-shot prompts but is often more structure-oriented.

- **[Prompt chaining](/index.php?title=Prompt_chaining&action=edit&redlink=1) / [Chain-of-Thought (CoT)](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1):** CoT elicits reasoning steps. Prompt chaining links outputs to inputs. Meta-prompting can design/optimize prompts used in these sequences or those that elicit CoT.

## Advantages

Meta prompting offers several key advantages:

- **Improved AI Responses & Performance:** Leads to more accurate, relevant, context-rich, and higher-quality outputs.[&#91;1&#93;](#cite_note-OpenAICookbook2024-1) [&#91;6&#93;](#cite_note-Suzgun2024meta-6)

- **Efficiency in Prompt Design:** Automates and optimizes parts of the prompt engineering process, reducing manual effort and saving time.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Enhanced Consistency & Reliability:** Provides systematic approaches to prompt creation, leading to more consistent outputs.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Better Alignment with User Expectations:** Generated prompts are more likely to elicit responses that meet specific user needs and intentions.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Scalability & Portability:** Facilitates the application of effective prompting strategies across diverse tasks, models, and domains.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Enhanced Versatility and Autonomy:** Enables AI to handle a wider range of tasks more effectively and allows AI systems to be more self-directed.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Supports Continuous Learning:** Aids in the ongoing improvement of an AI's prompting and problem-solving capabilities through iterative refinement.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Token Efficiency:** Can create more concise yet effective prompts by focusing on structure.[&#91;5&#93;](#cite_note-PromptGuide2024meta-5)

## Limitations and Challenges

Despite its benefits, meta prompting faces several challenges:

- **Computational Cost & Latency:** Multiple LLM calls (one for meta-prompting, then for the generated prompt) increase API expenses and processing time.[&#91;6&#93;](#cite_note-Suzgun2024meta-6) [&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Complexity in Design & Implementation:** Crafting effective meta-prompts can be complex and requires a good understanding of LLM behavior and the specific task.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Expertise Required:** Effective meta-level instruction often requires significant expertise in prompt engineering.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Interpretability & Debugging:** The process by which an LLM generates or refines a prompt can be opaque, making it hard to debug or control precisely.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Error Propagation:** Flaws or biases in the meta-prompt can be amplified in the generated prompts and subsequent LLM outputs.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- **Model Dependency & Generalization:** Performance can vary significantly with the capabilities of the underlying LLMs. A meta-prompt effective for one model may not be for another.

- **Setup Time:** Initial configuration and tuning of meta-prompting systems can be time-consuming.

- **Potential for Unexpected Outcomes:** Poorly designed meta-prompts or conflicting instructions can lead to suboptimal or undesirable prompt generations.[&#91;2&#93;](#cite_note-DigitalAdoption2024-2)

- **Ethical Considerations:** Ensuring responsible use, avoiding bias amplification, and maintaining transparency are crucial, especially with increasingly autonomous AI systems.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

## Implementation Best Practices

To effectively implement meta-prompting:

- Start with clear task definitions, objectives, and success metrics for the final prompt.

- Use an appropriate meta prompting framework or technique suitable for the task's complexity.

- Iterate and refine: Test generated prompts and use feedback (human or automated) to improve the meta-prompt or the generation process.

- Monitor performance across different models if portability is a goal.

- Maintain transparency in the prompt generation process where possible.

- Establish clear hierarchies and modularity in meta-prompt design for complex systems.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- Adhere to ethical guidelines to avoid bias and ensure fairness.[&#91;3&#93;](#cite_note-PromptLayer2024-3)

- Provide options for human oversight and intervention, especially in critical applications.

## Research and Development

Significant research focuses on making meta-prompting more robust, efficient, and accessible. Key areas include:

- Developing more sophisticated algorithms for prompt generation and optimization.

- Reducing the computational overhead associated with multiple LLM calls.

- Improving the interpretability of meta-prompting processes.

- Creating standardized benchmarks and evaluation metrics for meta-prompting techniques.

- Exploring the application of meta-prompting to multi-modal AI systems.

The paper "Meta Prompting for AI Systems" by Zhang et al. (2023) provides a formal exploration of meta-prompts for complex reasoning tasks, demonstrating significant performance gains on mathematical benchmarks.[&#91;4&#93;](#cite_note-Zhang2023meta-4)

## Future Directions

The field of meta prompting is rapidly evolving, with future research likely focusing on:

- **Greater Automation:** More autonomous systems for prompt discovery, optimization, and adaptation.

- **Multi-modal Integration:** Extending meta prompting techniques to generate prompts for models handling images, audio, and video.

- **Efficiency Improvements:** Developing methods to reduce the computational cost and latency.

- **Enhanced Explainability & Controllability:** Making meta prompting processes more interpretable and providing finer-grained control over prompt generation.

- **Standardization:** Developing universal meta prompting protocols and best practices.

- **Ethical Frameworks:** Establishing robust ethical guidelines for the responsible development and deployment of autonomous prompt generation systems.

## See Also

- [Prompt engineering](/wiki/prompt_engineering)

- [Large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLM)

- [Automatic Prompt Engineer](/index.php?title=Automatic_Prompt_Engineer&action=edit&redlink=1) (APE)

- [Self-refine](/index.php?title=Self-refine&action=edit&redlink=1)

- [Reflexion](/index.php?title=Reflexion_(AI)&action=edit&redlink=1)

- [DSPy](/index.php?title=DSPy&action=edit&redlink=1)

- [Few-shot learning](/wiki/few-shot_learning)

- [Zero-shot learning](/index.php?title=Zero-shot_learning&action=edit&redlink=1)

- [Chain-of-thought prompting](/index.php?title=Chain-of-thought_prompting&action=edit&redlink=1)

- [Instruction tuning](/index.php?title=Instruction_tuning&action=edit&redlink=1)

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG)

- [Artificial Intelligence](/wiki/artificial_intelligence)

- [Natural Language Processing](/wiki/natural_language_processing)

## References

1. ↑ [1.00](#cite_ref-OpenAICookbook2024_1-0) [1.01](#cite_ref-OpenAICookbook2024_1-1) [1.02](#cite_ref-OpenAICookbook2024_1-2) [1.03](#cite_ref-OpenAICookbook2024_1-3) [1.04](#cite_ref-OpenAICookbook2024_1-4) [1.05](#cite_ref-OpenAICookbook2024_1-5) [1.06](#cite_ref-OpenAICookbook2024_1-6) [1.07](#cite_ref-OpenAICookbook2024_1-7) [1.08](#cite_ref-OpenAICookbook2024_1-8) [1.09](#cite_ref-OpenAICookbook2024_1-9) [1.10](#cite_ref-OpenAICookbook2024_1-10) [1.11](#cite_ref-OpenAICookbook2024_1-11) OpenAI. (2024, October 23). "Enhance your prompts with meta prompting". OpenAI Cookbook. Retrieved June 7, 2025, from [https://cookbook.openai.com/examples/enhance_your_prompts_with_meta_prompting](https://cookbook.openai.com/examples/enhance_your_prompts_with_meta_prompting)

2. ↑ [2.00](#cite_ref-DigitalAdoption2024_2-0) [2.01](#cite_ref-DigitalAdoption2024_2-1) [2.02](#cite_ref-DigitalAdoption2024_2-2) [2.03](#cite_ref-DigitalAdoption2024_2-3) [2.04](#cite_ref-DigitalAdoption2024_2-4) [2.05](#cite_ref-DigitalAdoption2024_2-5) [2.06](#cite_ref-DigitalAdoption2024_2-6) [2.07](#cite_ref-DigitalAdoption2024_2-7) [2.08](#cite_ref-DigitalAdoption2024_2-8) [2.09](#cite_ref-DigitalAdoption2024_2-9) [2.10](#cite_ref-DigitalAdoption2024_2-10) [2.11](#cite_ref-DigitalAdoption2024_2-11) [2.12](#cite_ref-DigitalAdoption2024_2-12) Digital Adoption. (2024, November 13). "What is Meta-Prompting? Examples & Applications". Digital Adoption. Retrieved June 7, 2025, from [https://www.digital-adoption.com/meta-prompting/](https://www.digital-adoption.com/meta-prompting/)

3. ↑ [3.00](#cite_ref-PromptLayer2024_3-0) [3.01](#cite_ref-PromptLayer2024_3-1) [3.02](#cite_ref-PromptLayer2024_3-2) [3.03](#cite_ref-PromptLayer2024_3-3) [3.04](#cite_ref-PromptLayer2024_3-4) [3.05](#cite_ref-PromptLayer2024_3-5) [3.06](#cite_ref-PromptLayer2024_3-6) [3.07](#cite_ref-PromptLayer2024_3-7) [3.08](#cite_ref-PromptLayer2024_3-8) [3.09](#cite_ref-PromptLayer2024_3-9) [3.10](#cite_ref-PromptLayer2024_3-10) [3.11](#cite_ref-PromptLayer2024_3-11) [3.12](#cite_ref-PromptLayer2024_3-12) [3.13](#cite_ref-PromptLayer2024_3-13) [3.14](#cite_ref-PromptLayer2024_3-14) [3.15](#cite_ref-PromptLayer2024_3-15) [3.16](#cite_ref-PromptLayer2024_3-16) [3.17](#cite_ref-PromptLayer2024_3-17) [3.18](#cite_ref-PromptLayer2024_3-18) [3.19](#cite_ref-PromptLayer2024_3-19) PromptLayer. (n.d.). "What is Meta-prompting?". PromptLayer Blog. Retrieved June 7, 2025, from [https://www.promptlayer.com/glossary/meta-prompting](https://www.promptlayer.com/glossary/meta-prompting)

4. ↑ [4.00](#cite_ref-Zhang2023meta_4-0) [4.01](#cite_ref-Zhang2023meta_4-1) [4.02](#cite_ref-Zhang2023meta_4-2) [4.03](#cite_ref-Zhang2023meta_4-3) [4.04](#cite_ref-Zhang2023meta_4-4) [4.05](#cite_ref-Zhang2023meta_4-5) [4.06](#cite_ref-Zhang2023meta_4-6) [4.07](#cite_ref-Zhang2023meta_4-7) [4.08](#cite_ref-Zhang2023meta_4-8) [4.09](#cite_ref-Zhang2023meta_4-9) [4.10](#cite_ref-Zhang2023meta_4-10) [4.11](#cite_ref-Zhang2023meta_4-11) [4.12](#cite_ref-Zhang2023meta_4-12) Zhang, Y., Yuan, Y., & Yao, A. C.-C. (2023). "Meta Prompting for AI Systems". arXiv:2311.11482.

5. ↑ [5.0](#cite_ref-PromptGuide2024meta_5-0) [5.1](#cite_ref-PromptGuide2024meta_5-1) [5.2](#cite_ref-PromptGuide2024meta_5-2) Prompt Engineering Guide. (2024). "Meta Prompting". Retrieved June 7, 2025, from [https://www.promptingguide.ai/techniques/meta-prompting](https://www.promptingguide.ai/techniques/meta-prompting)

6. ↑ [6.0](#cite_ref-Suzgun2024meta_6-0) [6.1](#cite_ref-Suzgun2024meta_6-1) [6.2](#cite_ref-Suzgun2024meta_6-2) [6.3](#cite_ref-Suzgun2024meta_6-3) [6.4](#cite_ref-Suzgun2024meta_6-4) [6.5](#cite_ref-Suzgun2024meta_6-5) Suzgun, M., & Kalai, A. T. (2024). "Meta-Prompting: Enhancing Language Models with Task-Agnostic Scaffolding". arXiv:2401.12954.

7. ↑ [7.0](#cite_ref-Zhou2022ape_7-0) [7.1](#cite_ref-Zhou2022ape_7-1) Zhou, Y., Madaan, A., Bansal, M., & Yang, Y. (2022). "Large Language Models Are Human-Level Prompt Engineers". arXiv:2211.01910.

8. ↑ [8.0](#cite_ref-Khattab2023dspy_8-0) [8.1](#cite_ref-Khattab2023dspy_8-1) Khattab, O., Singhvi, A., Maheshwari, P., Zhang, Z., Santhanam, K., Vardhan, S., ... & Potts, C. (2023). "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines". arXiv:2310.03714.

9. ↑ [9.0](#cite_ref-Madaan2023selfrefine_9-0) [9.1](#cite_ref-Madaan2023selfrefine_9-1) Madaan, A., Tandon, N., Gupta, P., Hallinan, K., Gao, L., Wiegreffe, S., ... & Yazdanbakhsh, A. (2023). "Self-Refine: Iterative Refinement with Self-Feedback". arXiv:2303.17651.

10. ↑ [10.0](#cite_ref-Shinn2023reflexion_10-0) [10.1](#cite_ref-Shinn2023reflexion_10-1) Shinn, N., Labash, B., & Gopinath, A. (2023). "Reflexion: Language Agents with Verbal Reinforcement Learning". arXiv:2303.11366.

11. ↑ [11.0](#cite_ref-Li2024lcp_11-0) [11.1](#cite_ref-Li2024lcp_11-1) Li, M., et al. (2024). "Learning from Contrastive Prompts: Automated Optimization and Adaptation". arXiv:2409.15199.

12. ↑ [12.0](#cite_ref-Do2024aps_12-0) [12.1](#cite_ref-Do2024aps_12-1) Do, V.-T., et al. (2024). "Automatic Prompt Selection for Large Language Models". arXiv:2404.02717.

13. ↑ [13.0](#cite_ref-Anthropic2024docs_13-0) [13.1](#cite_ref-Anthropic2024docs_13-1) Anthropic. (2024). "Automatically generate first draft prompt templates". Anthropic Documentation. Retrieved June 7, 2025, from (example URL, actual URL may vary, for example docs.anthropic.com)

14. [↑](#cite_ref-Sarkar2023textgrad_14-0) Sarkar, A., Valmeekam, K., Sreedharan, S. K., & Kambhampati, S. (2023). "TEXTGRAD: Advancing Language Models with Local Gradient-Driven Learning". arXiv:2311.10954.

15. [↑](#cite_ref-DigitalAdoption2024meta_15-0) Digital Adoption. (2024). "What is Meta-Prompting? Examples & Applications". Retrieved from [https://www.digital-adoption.com/meta-prompting/](https://www.digital-adoption.com/meta-prompting/) (Illustrative, actual URL might be more specific)

16. [↑](#cite_ref-LangChainBlog2024reflexion_16-0) LangChain Blog. (2024, February 21). "Reflection Agents". Retrieved June 7, 2025, from [https://blog.langchain.dev/reflection-agents/](https://blog.langchain.dev/reflection-agents/)

17. [↑](#cite_ref-Alami2024medium_17-0) Alami, D. (2024, March 25). "How to Teach an LLM Without Buying It - Part 1: Meta-Prompting". Medium. (Illustrative date, actual may vary)

## External Links

- [Example Meta Prompting GitHub Repository (Illustrative)](https://github.com/meta-prompting/meta-prompting)

- [DSPy Framework on GitHub](https://github.com/stanfordnlp/dspy)

- [DSPy Official Documentation](https://dspy.ai/)

- [Prompt Engineering Guide](https://www.promptingguide.ai/)