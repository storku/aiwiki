---
title: "Prompt engineering for text generation"
slug: "prompt_engineering_for_text_generation"
categories:
  - "Terms"
  - "AI_Terms"
---*See also: [Prompt engineering](/wiki/prompt_engineering), [Prompts](/wiki/prompts) and [Prompt engineering for image generation](/wiki/prompt_engineering_for_image_generation)*

## Introduction

[Prompt engineering](/wiki/prompt_engineering) is not limited to [text-to-image generation](/index.php?title=Text-to-image_generation&action=edit&redlink=1) and has found a fitting application in [AI-generated art](/index.php?title=AI-generated_art&action=edit&redlink=1). Various [templates](/index.php?title=Templates&action=edit&redlink=1) and "[recipes](/index.php?title=Recipes&action=edit&redlink=1)" have been created to optimize the process of providing the most effective textual inputs to the model. OpenAI has published such "recipes" for their language model that can be adapted to different downstream tasks, including [grammar correction](/index.php?title=Grammar_correction&action=edit&redlink=1), [text summarization](/index.php?title=Text_summarization&action=edit&redlink=1), [answering questions](/index.php?title=Answering_questions&action=edit&redlink=1), [generating product names](/index.php?title=Generating_product_names&action=edit&redlink=1), and functioning as a [chatbot](/index.php?title=Chatbot&action=edit&redlink=1). [&#91;1&#93;](#cite_note-”2”-1)

In [language models](/index.php?title=Language_models&action=edit&redlink=1) like [GPT](/wiki/gpt), the output quality is influenced by a combination of [prompt design](/wiki/prompt_design), [sample data](/index.php?title=Sample_data&action=edit&redlink=1), and [temperature](/index.php?title=Temperature&action=edit&redlink=1) (a [parameter](/wiki/parameter) that controls the “[creativity](/index.php?title=Creativity&action=edit&redlink=1)” of the responses). Furthermore, to properly design a prompt, the user has to have a good understanding of the problem, good grammar skill, and produce many iterations. [&#91;2&#93;](#cite_note-”9”-2)

Therefore, to create a good prompt, it’s necessary to be attentive to the following elements:

- **The problem:** the user needs to know clearly what he wants the generative model to do and its context. [&#91;2&#93;](#cite_note-”9”-2)[&#91;3&#93;](#cite_note-”10”-3) For example, the AI can change the writing style of the output ("write a professional but friendly email" or "write a formal executive summary."). [&#91;3&#93;](#cite_note-”10”-3) Since the AI understands natural language, the user can think of the generative model as a human assistant. Therefore, thinking “how would I describe the problem to my assistant who haven’t done this task before?” may provide some help in defining clearly the problem and context. [&#91;2&#93;](#cite_note-”9”-2)

- **Grammar check:** simple and clear terms. Avoid subtle meaning and complex sentences with predicates. Write short sentences with specifics at the end of the prompt. Different conversation styles can be achieved with the use of adjectives. [&#91;2&#93;](#cite_note-”9”-2)

- **Sample data:** the AI may need information to perform the task that is being asked of it. This can be a text for paraphrasing or a copy of a resume or LinkedIn profile, for example. [&#91;3&#93;](#cite_note-”10”-3) It’s important that the data provided is coherent with the prompt. [&#91;2&#93;](#cite_note-”9”-2)

- **Temperature:** a parameter that influences how “creative” the response will be. For creative work, temperature should be high (e.g. .9) while for strict factual responses a temperature of zero is better. [&#91;2&#93;](#cite_note-”9”-2)

- **Test and iterate:** test different combinations of the elements of the prompt. [&#91;2&#93;](#cite_note-”9”-2)

Besides this, a prompt can also have other elements such as the desired length of the response, the output format ([GPT-3](/wiki/gpt-3) can output various code languages, charts, and CSVs), and specific phrases that users have discovered that work well to achieve specific outcomes (e.g. “Let's think step by step,” “thinking backwards,” or “in the style of [famous person]”). [&#91;3&#93;](#cite_note-”10”-3)

Prompt Engineering or ChatGPT should be avoided in certain scenarios. Firstly, when 100% reliability is required. Secondly, when the accuracy of the model's output cannot be evaluated. Finally, when generating content that is not in the model's training data, these techniques may not be the best approach to use. [&#91;4&#93;](#cite_note-”11”-4)

## Structure of a Prompt

The composition of a prompt typically consists of various parts, although not all prompts incorporate every component. However, effective prompts often include two or more of these components for better results. In general, the components of a prompt are arranged in a specific order. The prompt structure starts with instructions/task description, followed by context/external information (if applicable), followed by examples (if applicable), then the user input/query, and finally, the output indicator. This organized structure ensures the prompt is clear and comprehensible, resulting in more accurate and relevant responses from the [language model](/wiki/language_model).

### Instructions or Task Description

Instructions or Task description tells the [model](/wiki/model) what to do. What do you want, and how to create the output. How to use the context or examples. What to do with the query. Clear instructions enable the model to deliver more accurate and relevant responses.

### Context or External Information

Context or external information is the additional information for the model that might not exist in the model. They can be manually inserted into the prompt, retrieved via a vector database ([retrieval augmentation](/index.php?title=Retrieval_augmentation&action=edit&redlink=1)), or gathered from other sources such as [APIs](/index.php?title=APIs&action=edit&redlink=1). Providing context helps the model generate more informed and precise responses. 

- Context or external information is entirely optional.

### Example(s)

Example(s) are a few instances of user input/query along with corresponding output provided by the user and shown to the language model. It is often utilized in [few-shot prompting](/index.php?title=Few-shot_prompting&action=edit&redlink=1) and is entirely optional.

### User Input or Query

The user input or query is typically submitted by a human user. Although not always the case, most prompts involve a query input from the user. This input serves as the basis for the model's response and assists in tailoring the output to the user's specific needs.

### Output Indicator

The output indicator signifies the beginning of the generated text. For instance, when generating Python code, the word "import" may be used to indicate that the model should start writing Python code, as many Python scripts begin with the "import" statement. The output indicator helps to maintain the desired format and structure of the response.

### Example of a Prompt with the Above Structure

Example using [ChatGPT](/wiki/chatgpt) with [GPT-4](/wiki/gpt-4)

#### Input

Instruction: Identify the president of the United States of America for the given year.**

Context:****

Considering that GPT-4's knowledge is limited to information up until September 2021. We need to provide some context to help with the task with Joe Biden.

1. 
2. 
3. 
4. 
5. 

Examples:****

- 1801: Thomas Jefferson

- 1901: William McKinley

- 1981: Ronald Reagan

- 2001: George W. Bush

Query and output indicator:****

- 1945: 

- 2017: 

- 2023:

#### Output

- 1945: Franklin D. Roosevelt

- 2017: Barack Obama

- 2023: Joe Biden

## Building Prompts

In a text-to-text model, the user can insert diferent parameters in the prompt to modulate its response. The following parameter and prompt examples are taken from Matt Night's GitHub:

- Capacity and Role:** "Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer."

- **Insight:** "The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning."

- **Statement:** "Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries."

- **Personality:** "When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun."

- **Experiment:** "Give me multiple different examples." [&#91;4&#93;](#cite_note-”11”-4)

The process of prompt refinement is a method to improve the quality of written content by transforming it into a compelling, imaginative, and relatable piece, fixing "soulless writing". The aim is to make the content engaging and impactful by focusing on storytelling, using persuasive language, emphasizing emotion and sensory details, making the content concise and highlighting key points. To create a sense of urgency and make the content relatable, the language can be personalized to the reader and potential objections can be addressed. [&#91;4&#93;](#cite_note-”11”-4)

To increase the readability, there are several strategies that can be employed in the prompt. First, it's important to request answers with a clear and concise language. Additionally, visual aids such as diagrams can be requested (e.g "Using mermaid.js you can include diagrams to illustrate complex concepts (low reliability)") Asking the AI to use of headings and subheadings is also recommended to divide the document into sections with clear organization. Important information should be emphasized using bold or italic text, and real-life examples such as case studies or real-world examples can be included to make concepts more relatable. Consistent formatting, including a consistent font, font size, and layout, should be used throughout the document. Analogies or comparisons can be employed to explain complex ideas, and asking for writing in active voice can make sentences more engaging and easier to follow. [&#91;4&#93;](#cite_note-”11”-4)

The model can also be asked to act as a technical advisor, mentor, quality assurance, code reviewer, debugging assistant, compliance checker, code optimization specialist, accessibility expert, search engine optimization specialist, and performance analyst. Examples of prompts for the use cases are available [here](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List).

## Zero-shot Prompting

[Zero-shot prompting](/index.php?title=Zero-shot_prompting&action=edit&redlink=1) involves giving the model a [task description](/index.php?title=Task_description&action=edit&redlink=1)/[instruction](/index.php?title=Instruction&action=edit&redlink=1) and directly asking it for a result. It does not show the model any [examples](/wiki/examples).

**Input (task description/instruction):** Who was the president of United States in 1999?**
Output:**

## Few-shot Prompting (Basic)

[Few-shot prompting](/index.php?title=Few-shot_prompting&action=edit&redlink=1) have a task description, a few examples and then a prompt.

### For example

What are the 2-letter abbreviations for the following U.S. states?**

New York is beautiful during autumn: NY

I went to school in California: CA

Vacationing in Florida is fun:

The task description**:

- What are the 2-letter abbreviations for the following U.S. states?

**The examples**:

- New York is beautiful during autumn: NY**

- I went to school in California: CA

The prompt**:

- Vacationing in Florida is fun:

### Example output

Vacationing in Florida is fun: FL

## Few-shot Prompting (Advanced)

In few-shot prompting, the model is presented with high-quality demonstrations, including input and desired output, for the target task. This approach enables the model to understand the human intention better and the desired criteria for answers, often resulting in improved performance compared to zero-shot prompting. However, this comes at the expense of increased token consumption and may reach the context length limit for longer input and output texts.

Numerous studies have explored how to construct in-context examples to maximize performance. [Prompt format](/index.php?title=Prompt_format&action=edit&redlink=1), [training examples](/index.php?title=Training_examples&action=edit&redlink=1), and [example order](/index.php?title=Example_order&action=edit&redlink=1) can lead to dramatically different performance outcomes, ranging from near-random guessing to near state-of-the-art (SoTA) results.

Zhao et al. (2021) investigated [few-shot classification](/index.php?title=Few-shot_classification&action=edit&redlink=1) using LLMs, specifically [GPT-3](/wiki/gpt-3). They identified several biases that contribute to high [variance](/index.php?title=Variance&action=edit&redlink=1) in performance: (1) majority [label bias](/index.php?title=Label_bias&action=edit&redlink=1), (2) [recency bias](/index.php?title=Recency_bias&action=edit&redlink=1), and (3) [common token bias](/index.php?title=Common_token_bias&action=edit&redlink=1). To address these [biases](/wiki/biases), they proposed a method to calibrate label probabilities output by the model to be uniform when the input string is N/A.[&#91;5&#93;](#cite_note-”111”-5)

### Tips for Example Selection

#### Semantically Similar Examples

Liu et al. (2021) suggested choosing examples that are semantically similar to the test example by employing [k-nearest neighbors](/index.php?title=K-nearest_neighbors&action=edit&redlink=1) (KNN) clustering in the [embedding space](/wiki/embedding_space).[&#91;6&#93;](#cite_note-”112”-6)

#### Diverse and Representative Examples

Su et al. (2022) proposed a [graph-based approach](/index.php?title=Graph-based_approach&action=edit&redlink=1) to select a diverse and representative set of examples: (1) construct a directed graph based on the cosine similarity between samples in the embedding space (for example using [SBERT](/index.php?title=SBERT&action=edit&redlink=1) or other [embedding models](/index.php?title=Embedding_models&action=edit&redlink=1)), and (2) start with a set of selected samples and a set of remaining samples, scoring each sample to encourage [diverse selection](/index.php?title=Diverse_selection&action=edit&redlink=1).[&#91;7&#93;](#cite_note-”113”-7)

#### Embeddings via Contrastive Learning

Rubin et al. (2022) suggested training embeddings through [contrastive learning](/index.php?title=Contrastive_learning&action=edit&redlink=1) specific to one [training dataset](/wiki/training_dataset) for [in-context learning](/wiki/in-context_learning) sample selection. This approach measures the quality of an example based on a conditioned probability assigned by the language model.[&#91;8&#93;](#cite_note-”114”-8)

#### Q-Learning

Zhang et al. (2022) explored using [Q-Learning](/index.php?title=Q-Learning&action=edit&redlink=1) for sample selection in LLM training.[&#91;9&#93;](#cite_note-”115”-9)

#### Uncertainty-Based Active Learning

Diao et al. (2023) proposed identifying examples with [high disagreement](/index.php?title=High_disagreement&action=edit&redlink=1) or [entropy](/wiki/entropy) among multiple sampling trials based on [uncertainty-based active learning](/index.php?title=Uncertainty-based_active_learning&action=edit&redlink=1). These examples can then be annotated and used in few-shot prompts.[&#91;10&#93;](#cite_note-”116”-10)

### Tips for Example Ordering

A general recommendation is to maintain a diverse selection of examples relevant to the test sample and present them in random order to avoid [majority label bias](/index.php?title=Majority_label_bias&action=edit&redlink=1) and [recency bias](/index.php?title=Recency_bias&action=edit&redlink=1). Increasing [model sizes](/index.php?title=Model_size&action=edit&redlink=1) or including more [training examples](/index.php?title=Training_examples&action=edit&redlink=1) does not necessarily reduce [variance](/index.php?title=Variance&action=edit&redlink=1) among different permutations of in-context examples. The exact order may work well for one model but poorly for another.

When the [validation set](/wiki/validation_set) is limited, Lu et al. (2022) suggested choosing the order such that the model does not produce extremely unbalanced predictions or exhibit overconfidence in its predictions.[&#91;11&#93;](#cite_note-”117”-11)

## Roles

Give [ChatGPT](/wiki/chatgpt) a role it can emulate and roleplay as by starting with the text **"Act as a..."**.

For example, if you have a history exam about Rome, you can ask the AI to

*Act as a historian and tell me about Julius Caesar*

For additional roles, check out this website: [https://prompts.chat/](https://prompts.chat/)

## Give Your Prompt a Personality

Give your prompt personality by giving it a style and adding descriptors. Styles include [tones](/index.php?title=Tones&action=edit&redlink=1), [formality](/index.php?title=Formality&action=edit&redlink=1), and the domain of the writer. Descriptors are adjectives that you add to tweak your prompt.

By giving your prompt personalities, the generated content would be harder for [AI content detectors](/wiki/ai_content_detectors) to detect.

## Overview of Tones

### Suggested Tones

- **[Authoritative](/index.php?title=Authoritative&action=edit&redlink=1)** - confident, knowledgeable,

- **[Casual](/index.php?title=Casual&action=edit&redlink=1)** - relaxed, friendly, playful

- **[Conversational](/index.php?title=Conversational&action=edit&redlink=1)** - conversational, engaging,

- **[Empathetic](/index.php?title=Empathetic&action=edit&redlink=1)** - understanding, caring

- **[Enthusiastic](/index.php?title=Enthusiastic&action=edit&redlink=1)** - enthusiastic, optimistic

- **[Expert](/index.php?title=Expert&action=edit&redlink=1)** - authoritative, respected

- **[Friendly](/index.php?title=Friendly&action=edit&redlink=1)** - warm, approachable

- **[Funny](/index.php?title=Funny&action=edit&redlink=1)** - humorous, entertaining

- **[Humorous](/index.php?title=Humorous&action=edit&redlink=1)** - entertaining, playful,

- **[Informal](/index.php?title=Informal&action=edit&redlink=1)** - relaxed, conversational

- **[Informative](/index.php?title=Informative&action=edit&redlink=1)** - informative, helpful

- **[Persuasive](/index.php?title=Persuasive&action=edit&redlink=1)** - persuasive, convincing

- **[Positive](/index.php?title=Positive&action=edit&redlink=1)** - positive, upbeat

- **[Professional](/index.php?title=Professional&action=edit&redlink=1)** - knowledgeable, competent, polished, professional, refined

- **[Serious](/index.php?title=Serious&action=edit&redlink=1)** - serious, sincere

- **[Straightforward](/index.php?title=Straightforward&action=edit&redlink=1)** - direct, concise

- **[Trustworthy](/index.php?title=Trustworthy&action=edit&redlink=1)** - reliable, dependable

- **[Urgent](/index.php?title=Urgent&action=edit&redlink=1)** - sense of urgency, importance

### Tone Combinations and Use Cases

- **[Conversational](/index.php?title=Conversational&action=edit&redlink=1)** and **[Casual](/index.php?title=Casual&action=edit&redlink=1)** - social media posts, blog content, internal communication

- **[Empathetic](/index.php?title=Empathetic&action=edit&redlink=1)** and **[Serious](/index.php?title=Serious&action=edit&redlink=1)** - crisis communication, customer service, sensitive topics

- **[Enthusiastic](/index.php?title=Enthusiastic&action=edit&redlink=1)** and **[Positive](/index.php?title=Positive&action=edit&redlink=1)** - sales pitches, customer service, motivational content

- **[Expert](/index.php?title=Expert&action=edit&redlink=1)** and **[Authoritative](/index.php?title=Authoritative&action=edit&redlink=1)** - thought leadership articles, industry reports, export opinions

- **[Funny](/index.php?title=Funny&action=edit&redlink=1)** and **[Casual](/index.php?title=Casual&action=edit&redlink=1)** - social media posts, branding, content marketing

- **[Informal](/index.php?title=Informal&action=edit&redlink=1)** and **[Humorous](/index.php?title=Humorous&action=edit&redlink=1)** - social media posts, blog content, internal communication

- **[Informative](/index.php?title=Informative&action=edit&redlink=1)** and **[Authoritative](/index.php?title=Authoritative&action=edit&redlink=1)** - thought leadership articles, industry reports

- **[Persuasive](/index.php?title=Persuasive&action=edit&redlink=1)** and **[Urgent](/index.php?title=Urgent&action=edit&redlink=1)** - limited-time offers, promotional campaigns

- **[Professional](/index.php?title=Professional&action=edit&redlink=1)** and **[Authoritative](/index.php?title=Authoritative&action=edit&redlink=1)** - executive communication, industry presentation, boarding meeting

- **[Professional](/index.php?title=Professional&action=edit&redlink=1)** and **[Friendly](/index.php?title=Friendly&action=edit&redlink=1)** - sales emails, customer service, marketing copy

- **[Straightforward](/index.php?title=Straightforward&action=edit&redlink=1)** and **[Professional](/index.php?title=Professional&action=edit&redlink=1)** - business emails, formal communication, legal documents

- **[Trustworthy](/index.php?title=Trustworthy&action=edit&redlink=1)** and **[Professional](/index.php?title=Professional&action=edit&redlink=1)** - business proposals, executive summaries, investor pitches

## Self-Consistency Sampling

[Self-consistency sampling](/index.php?title=Self-consistency_sampling&action=edit&redlink=1) is a method for generating multiple outputs using a [temperature](/index.php?title=Temperature&action=edit&redlink=1) greater than 0 and selecting the best candidate from the generated outputs. The criteria for choosing the best candidate may vary according to the task. A common approach is to use [majority vote](/index.php?title=Majority_vote&action=edit&redlink=1). In tasks that are easy to validate, such as programming questions with unit tests, the outputs can be run through an interpreter and their correctness can be verified using unit tests.[&#91;12&#93;](#cite_note-”118”-12)

## Chain of Thought Prompting

[Chain of Thought Prompting](/index.php?title=Chain_of_Thought_Prompting&action=edit&redlink=1) (CoT prompting) is a technique introduced by Wei et al. (2022) to generate a sequence of short sentences describing step-by-step reasoning, known as [reasoning chains](/index.php?title=Reasoning_chains&action=edit&redlink=1) or [rationales](/index.php?title=Rationales&action=edit&redlink=1), leading to the final answer. [CoT prompting](/index.php?title=CoT_prompting&action=edit&redlink=1) is particularly useful for complex reasoning tasks when applied to large language models (for example those with over 50 billion parameters), while simpler tasks may benefit only marginally.[&#91;13&#93;](#cite_note-”119”-13)

### Types of CoT Prompts

There are two main types of CoT prompting:

#### Few-shot CoT

[Few-shot CoT prompting](/index.php?title=Few-shot_CoT_prompting&action=edit&redlink=1) involves providing the model with a limited number of demonstrations, each containing either manually written or model-generated high-quality reasoning chains. Examples of such demonstrations are provided in the original article, showcasing how this type of prompting is used to solve various mathematical reasoning problems.

#### Zero-shot CoT

[Zero-shot CoT prompting](/index.php?title=Zero-shot_CoT_prompting&action=edit&redlink=1) uses natural language statements, such as "Let's think step by step" or "Let's work this out step by step to be sure we have the right answer," to explicitly encourage the model to generate reasoning chains. Following this, a statement like "Therefore, the answer is" is used to prompt the model to produce the final answer.[&#91;14&#93;](#cite_note-”128”-14)[&#91;15&#93;](#cite_note-”129”-15)

### Tips and Extensions

Several techniques have been proposed to improve the accuracy and effectiveness of CoT prompting:

- [Self-consistency sampling](/index.php?title=Self-consistency_sampling&action=edit&redlink=1), as suggested by Wang et al. (2022a), can improve reasoning accuracy by sampling a number of diverse answers and taking the majority vote.[&#91;12&#93;](#cite_note-”118”-12)

- Wang et al. (2022b) proposed using ensemble learning by altering the example order or replacing human-written rationales with model-generated ones, introducing randomness during multiple sample trials. Model outputs can then be aggregated using a majority vote to obtain the final answer.[&#91;16&#93;](#cite_note-”120”-16)

- If training examples only have true answers but no rationales, the [STaR](/index.php?title=STaR&action=edit&redlink=1) ([Self-Taught Reasoner](/index.php?title=Self-Taught_Reasoner&action=edit&redlink=1)) method by Zelikman et al. (2022) can be followed: (1) ask the model to generate reasoning chains and keep only those leading to correct answers; (2) fine-tune the model with generated rationales and repeat the process until convergence. Higher temperature settings are more likely to generate incorrect rationales with correct answers.[&#91;17&#93;](#cite_note-”121”-17)

- Fu et al. (2023) found that prompts with demonstrations of higher reasoning complexity lead to better performance. They also suggested that using newline (\n) symbols to separate reasoning steps works better than step indicators, periods, or semicolons.[&#91;18&#93;](#cite_note-”122”-18)

- Complexity-based consistency, as proposed by Fu et al. (2023), involves explicitly preferring complex chains among all generations by taking a majority vote among only the top complex chains.[&#91;18&#93;](#cite_note-”122”-18)

- Shum et al. (2023) discovered that CoT prompts with only complex examples improve the accuracy of complex questions but perform poorly on simple questions. This finding was based on evidence from the [GSM8k](/index.php?title=GSM8k&action=edit&redlink=1) dataset.[&#91;19&#93;](#cite_note-”123”-19)

- Fu et al. (2023) found that changing "Q:" to "Question:" in the prompts is helpful.[&#91;18&#93;](#cite_note-”122”-18)

- Ye & Durrett (2022) observed that including explanations in prompts has a small to moderate effect on [NLP](/wiki/nlp) tasks that involve reasoning over text, such as [question-answering](/index.php?title=Question-answering&action=edit&redlink=1) (QA) and [natural language inference](/index.php?title=Natural_language_inference&action=edit&redlink=1) (NLI). They also noted that nonfactual explanations are more likely to lead to incorrect predictions than inconsistent explanations.[&#91;20&#93;](#cite_note-”124”-20)

- [Self-Ask](/index.php?title=Self-Ask&action=edit&redlink=1), a method proposed by Press et al. (2022), repeatedly prompts the model to ask follow-up questions, constructing the thought process iteratively.[&#91;21&#93;](#cite_note-”125”-21) Search engine results can be used to answer these follow-up questions. Similarly, [IRCoT](/index.php?title=IRCoT&action=edit&redlink=1) ([Interleaving Retrieval CoT](/index.php?title=Interleaving_Retrieval_CoT&action=edit&redlink=1); Trivedi et al. 2022) and [ReAct](/index.php?title=ReAct&action=edit&redlink=1) ([Reason + Act](/index.php?title=Reason_%2B_Act&action=edit&redlink=1); Yao et al. 2023) combine iterative CoT prompting with queries to Wikipedia APIs. These methods search for relevant entities and content and then incorporate the retrieved information back into the context, further enhancing the model's reasoning capabilities.[&#91;22&#93;](#cite_note-”126”-22)[&#91;23&#93;](#cite_note-”127”-23)

## 26 Principals for Good Prompts

*See also: [26 Principles of Good Prompts](/wiki/26_principles_of_good_prompts)*
| Number | Prompting Principle |
| --- | --- |
| **1** | No need to be polite with LLM so there is no need to add phrases like "please", "if you don't mind", "thank you", "I would like to", etc., and get straight to the point. |
| **2** | Integrate the intended audience in the prompt, for example the audience is an expert in the field. |
| **3** | Break down complex tasks into a sequence of simpler prompts in an interactive conversation. |
| **4** | Employ affirmative directives such as 'do', while steering clear of negative language like 'don’t'. |
| **5** | When you need clarity or a deeper understanding of a topic, idea, or any piece of information, utilize the following prompts:
- Explain [insert specific topic] in simple terms.

- Explain to me like I'm 11 years old.

- Explain to me as if I’m a beginner in [field].

- Write the [essay/text/paragraph] using simple English like you're explaining something to a 5-year-old. |
| **6** | Add "I'm going to tip $xxx for a better solution!" |
| **7** | Implement example-driven prompting (Use few-shot prompting). |
| **8** | When formatting your prompt, start with "###Instruction###", followed by either "###Example###" or "###Question###" if relevant. Subsequently, present your content. Use one or more line breaks to separate instructions, examples, questions, context, and input data. |
| **9** | Incorporate the following phrases: "Your task is" and "You MUST". |
| **10** | Incorporate the following phrases: “You will be penalized”. |
| **11** | Use the phrase "Answer a question given in a natural, human-like manner" in your prompts. |
| **12** | Use leading words like writing "think step by step". |
| **13** | Add to your prompt the following phrase “Ensure that your answer is unbiased and does not rely on stereotypes". |
| **14** | Allow the model to elicit precise details and requirements from you by asking you questions until he has enough information to provide the needed output (for example, “From now on, I would like you to ask me questions to…”). |
| **15** | To inquire about a specific topic or idea or any information and you want to test your understanding, you can use the following phrase: “Teach me the [Any theorem/topic/rule name] and include a test at the end, but don't give me the answers and then tell me if I got the answer right when I respond”. |
| **16** | Assign a role to the large language models. |
| **17** | Use Delimiters. |
| **18** | Repeat a specific word or phrase multiple times within a prompt. |
| **19** | Combine Chain-of-thought (CoT) with few-Shot prompts. |
| **20** | Use output primers, which involve concluding your prompt with the beginning of the desired output. Utilize output primers by ending your prompt with the start of the anticipated response. |
| **21** | To write an essay text/paragraph/article or any type of text that should be detailed: “Write a detailed essay/text/paragraph for me on [topic] in detail by adding all the information necessary”. |
| **22** | To correct/change specific text without changing its style: "Try to revise every paragraph sent by users. You should only improve the user's grammar and vocabulary and make sure it sounds natural. You should not change the writing style, such as making a formal paragraph casual". |
| **23** | When you have a complex coding prompt that may be in different files: “From now and on whenever you generate code that spans more than one file, generate a [programming language] script that can be run to automatically create the specified files or make changes to existing files to insert the generated code. [your question]". |
| **24** | When you want to initiate or continue a text using specific words, phrases, or sentences, utilize the following prompt:
- I'm providing you with the beginning [song lyrics/story/paragraph/essay...]: [Insert lyrics/words/sentence]. Finish it based on the words provided. Keep the flow consistent. |
| **25** | Clearly state the requirements that the model must follow in order to produce a valid sample, include the in the form of the keywords, regulations, hint, or instructions |
| **26** | To write any text, such as an essay or paragraph, that is intended to be similar to a provided sample, include the following instructions: *Please use the same language based on the provided paragraph/title/text /essay/answer]. |

## Prompt Engineering for Code Generation Models

*  
Figure 2. From prompt to completion.
Genearte [code](/index.php?title=Code&action=edit&redlink=1) using [models](/wiki/models) like the [OpenAI Codex](/index.php?title=OpenAI_Codex&action=edit&redlink=1).

1. 
2. 
3. 

### Task

Give the coding model a high-level task description. To improve the quality of the generated code, it's recommended to start the prompt with a broad description of the task at hand. For example, if you want to generate Python code to plot data from a standard [dataset](/wiki/dataset), you can provide a prompt like this: 

`# Load iris data from scikit-learn datasets and plot the training data.`

However, sometimes the generated code may not be optimal, in which case you can provide more specific instructions such as importing libraries before using them. By combining a high-level task description with detailed user instructions, you can create a more effective prompt for coding model to generate code.

### Examples

Gives the coding model examples. Imagine you prefer a unique style of writing Python code that differs from what model produces. Take, for instance, when adding two numbers, you prefer to label the arguments differently. The key to working with models like Codex is to clearly communicate what you want it to do. One effective way to do this is to provide examples for Codex to learn from and strive to match its output to your preferred style. If you give the model a longer prompt that includes the example mentioned, it will then name the arguments in the same manner as in the example.

See also [zero shot, one shot and few shot learning](/wiki/zero_shot_one_shot_and_few_shot_learning)

### Context

If you want to use a library that the coding model is not familiar with, you can guide it by describing the API library beforehand.

For instance, the Minecraft Codex sample uses the Simulated Player API in TypeScript to control a character in the game. Since this is a newer API that the model does not know about yet, When given the prompt, the model attempts to make an educated guess based on the terms "bot" and "Simulated Player". However, the resulting code is not correct.

To correct this, you can show the model model the API definition, including function signatures and examples, so that it can generate code that follows the API correctly. As demonstrated in the example, by providing high-level context in the form of the API definition and examples, the model can understand what you want it to do and generate more accurate code.

## How to Create Descriptive, Poetic Text

### Tips

- Choose a topic and narrow down the scope.

- Select a point-of-view like third, second or first person.

- Directly or indirectly convey a mood. A subject or scene could evoke a particular feeling or you could give the [chatbot](/index.php?title=Chatbot&action=edit&redlink=1) a mood directly.

- Describe sensory details. Add details about the scene such as sounds, sights, smells, or textures. By pointing out an important detail, you can guide the output.

- Don't tell, Show. Ask the chatbot not to tell the user how to think or feel.

- Use figurative language. The chatbot should be encouraged to use metaphors, similes and descriptive phrases. Request a description that is evocative, lyrical, beautiful or poetic.

- Iterate and iterate. Your first prompt might not yield the desired result. Rework the prompt until you find an appealing answer. After you have created a prompt that is appealing, the chatbot can create many descriptions and you can pick the one you like.

- Edit and revise. Don't be afraid of revising and editing the generated text.

- You can ask the chatbot for assistance. The chatbot will explain why it selected a specific detail or phrase in a reply. The chatbot can also help you create a better prompt. You can point out individual phrases and ask the chatbot for alternatives or suggestions.

### Template

**
Describe YOUR SCENE*. Use sensory language and detail to describe the *OBJECTS IN THE SCENE vividly*. Describe *SPECIFIC DETAILS* and any other sensory details that come to mind. Vary the sentence structure and use figurative language as appropriate. Avoid telling the reader how to feel or think about the scene.

## Parameters

### Common Parameters

- Temperature

- Perplexity

- Burstiness

### User-created Parameters

#### Introduction

These are user-created parameters. They serve to convey the intent of the users in a more concise way. These are not part of the [model](/wiki/model) API but patterns the [LLM](/wiki/llm) has picked up through its [training](/wiki/training). These parameters are just a compact way to deliver what is usually expressed in [natural language](/index.php?title=Natural_language&action=edit&redlink=1).

#### Example in ChatGPT

> 
> Prompt: Write a paragraph about how adorable a puppy is.
> 
> 
> Temperature: 1.0
> 
> 
> Sarcasm: 0.9
> 
> 
> Vividness: 0.4
> 
> 
> 
> 

We add "Prompt: " to the start of our prompt to make sure [ChatGPT](/wiki/chatgpt) knows where our prompt is. We add the [GPT](/wiki/gpt) parameter [temperature](/index.php?title=Temperature&action=edit&redlink=1), which goes from 0 to 1 to indicate the following parameters also range from 0 to 1. Then we list our parameters along with their values which go from 0 to 1 (0 is the smallest, and 1 is the largest). Note that having too many or contradictory parameters may lower the quality of the response.

#### List of Parameters

- [Professionalism](/index.php?title=Professionalism&action=edit&redlink=1) -

- [Randomness](/index.php?title=Randomness&action=edit&redlink=1) -

- [Sentimentality](/index.php?title=Sentimentality&action=edit&redlink=1) -

- [Sesquipedalianism](/index.php?title=Sesquipedalianism&action=edit&redlink=1) -

- [Sarcasm](/index.php?title=Sarcasm&action=edit&redlink=1) -

- [Laconic](/index.php?title=Laconic&action=edit&redlink=1) -

- [Asyndetic](/index.php?title=Asyndetic&action=edit&redlink=1) -

- [Vividness](/index.php?title=Vividness&action=edit&redlink=1) -

- [Ecclesiastical](/index.php?title=Ecclesiastical&action=edit&redlink=1) -

## Connecting External APIs

## Resources

- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)** - detailed examples on how to utilize LLM efficiently.

- **[LangChain](/wiki/langchain)** - library for combining language models with other components to build applications.

- **[Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)** - repo contains a fairly comprehensive collection of educational materials on the topic

- **[learnprompting.org](https://learnprompting.org/docs/intro)**

- **[PromptPerfect](https://promptperfect.jina.ai/)**

- **[Semantic Kernel](https://github.com/microsoft/semantic-kernel)**

## References

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 
16. 
17. 
18. 
19. 
20. 
21. 
22. 
23.