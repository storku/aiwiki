---
title: "LaMDA"
slug: "lamda"
---LaMDA (Language Model for Dialogue Application) is a [Large Language Model](/index.php?title=Large_Language_Model&action=edit&redlink=1) ([LLM](/wiki/llm)) developed by Google that enables dialogue-based applications to generate natural-sounding human language. [&#91;1&#93;](#cite_note-”1”-1)[&#91;2&#93;](#cite_note-”2”-2)[&#91;3&#93;](#cite_note-”3”-3) It is based on the transformer architecture that also powers other language models like [GPT-3](/wiki/gpt-3) and [BERT](/wiki/bert). [&#91;2&#93;](#cite_note-”2”-2)  According to Google, LaMDA "can engage in a free-flowing way about a seemingly endless number of topics, an ability we think could unlock more natural ways of interacting with technology and entirely new categories of helpful applications." [&#91;3&#93;](#cite_note-”3”-3) 

The model is the result of years of internal research in language-based models with the goal of having it hold an insightful and logical conversation on different topics. LaMDA seems close to achieve it. Indeed, it can understand nuanced questions and conversations in a broad spectrum of topics. [&#91;2&#93;](#cite_note-”2”-2) 

While LaMDA has only been applied to [Bard](/wiki/bard), Google's [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)) chatbot, it is an important development in natural language and AI technologies. [&#91;1&#93;](#cite_note-”1”-1) 

The company acknowledges the benefits and risks of open-ended dialog models&#160;and is dedicated to enhancing safety and groundedness for a more dependable and unbiased experience. It is expected that, in the future, LaMDA models may be trained on various data types like images or videos, which could extend the web navigation ability using conversational prompts. Sundar Pichai, Google's CEO, has emphasized "the potential to make information and computing radically more accessible and easier to use.” [&#91;2&#93;](#cite_note-”2”-2)

## Development

During [Google I/O 2021](https://www.youtube.com/watch?v=Mlk888FiI8A&t=1075s), LaMDA was introduced as a breakthrough in natural language understanding. In the [2022 edition of the event](https://www.youtube.com/watch?v=nP-nMZpLM1A&t=2396s), LaMDA 2 was unveiled&#160;as more advanced version of the model which was tested by thousands of "Googlers" in part to reduce problematic or offensive responses. While LaMDA 2 retains many features and functionalities of its predecessor, the demo highlighted its ability to maintain topic-focused conversations, generate subject-related lists, and imagine being in specific locations. [&#91;4&#93;](#cite_note-”4”-4)

### Transformer

LaMDA is a product of Google's Transformer research project, which serves as the foundation for several language models, including GPT-3, the technology behind [ChatGPT](/wiki/chatgpt). [&#91;1&#93;](#cite_note-”1”-1) This Transformer neural network architecture was invented and open-sourced in 2017, providing an advantage in both training performance and resulting accuracy compared to recurrent and convolutional neural models regarding language processing. [&#91;3&#93;](#cite_note-”3”-3)[&#91;4&#93;](#cite_note-”4”-4)

Contrary to other language models, Google’s language model was trained on dialogue, enabling it to understand the nuances of open-ended conversation. Research published by Google in 2020 demonstrated that Transformer-based language models trained on dialogue could learn to talk about almost anything. After training, LaMDA can be fine-tuned to improve the sensibleness and specificity of its responses. In this context, sensibleness relates to if the response makes sense in a given conversational context. [&#91;3&#93;](#cite_note-”3”-3)

Google is also researching other dimensions in its model, such as "interestingness," assessing if responses are insightful, unexpected, or witty. Factuality is another priority, as language models can struggle with accuracy. Also, an adherence to Google's AI Principles is crucial, since language models can propagate misuse by “internalizing biases, mirroring hateful speech, or replicating misleading information.” [&#91;3&#93;](#cite_note-”3”-3)

The model’s training process is divided in two stages, pre-training and fine-tuning. It was trained on 1.56 trillion words with 137 billion parameters. LaMDA analyzes datasets consisting of dialogues instead of individual words, studying patterns in sentences, the correlations between words, and even predicting the next word. [&#91;2&#93;](#cite_note-”2”-2)

### LaMDA Pre-Training

During the pre-training stage, a dataset containing 1.56 trillion words, sourced from public dialog data and web documents, was created. This dataset was tokenized into 2.81 trillion SentencePiece tokens, and the model was pre-trained using general and scalable parallelization (GSPMD) to predict subsequent tokens in a sentence based on previous tokens. The pre-trained model has been used for research in natural language processing in various Google projects, including program synthesis, zero-shot learning, style transfer, and the BIG-bench workshop. [&#91;2&#93;](#cite_note-”2”-2)[&#91;5&#93;](#cite_note-”5”-5)

### LaMDA Fine-Tuning

[![](/images/thumb/4/4f/LaMDa_generative_and_classification.png/300px-LaMDa_generative_and_classification.png)](/wiki/file_lamda_generative_and_classification_png)  [](/wiki/file_lamda_generative_and_classification_png)
Figure1. LaMDa’s generative and classification tasks. Source: Google.
LaMDA was trained to perform a mix of generative tasks to produce natural-language responses to given contexts, and classification tasks to assess response safety and quality in the fine-tuning stage (figure 1). [&#91;2&#93;](#cite_note-”2”-2) [&#91;5&#93;](#cite_note-”5”-5)  The LaMDA generator predicts the next token in a dialog dataset, while LaMDA classifiers predict Safety and Quality (SSI) ratings for each generated response in context using annotated data. The generator produces several candidate responses during dialog, and the classifiers predict SSI and Safety scores for each candidate. Responses with low Safety scores are filtered out, and the remaining candidates are re-ranked by their SSI scores. The top result is chosen as the response. The training data for the generation task is further filtered with LaMDA classifiers to increase the density of high-quality response candidates. [&#91;5&#93;](#cite_note-”5”-5)  This ensures that the most relevant, high-quality, and safest response is given. [&#91;2&#93;](#cite_note-”2”-2)

## Objectives & Metrics

Google’s model has three key objectives to guide its training: Quality, Safety, and Groundedness. [&#91;2&#93;](#cite_note-”2”-2) [&#91;5&#93;](#cite_note-”5”-5) 

Quality is divided into Sensibleness, Specificity, and Interestingness (SSI), evaluated by human raters to ensure responses make sense in context, are specific to the question asked, and insightful enough to create better dialogue. [&#91;2&#93;](#cite_note-”2”-2) [&#91;5&#93;](#cite_note-”5”-5)  Safety follows responsible AI standards by using a set of objectives to capture and review the model’s behavior, ensuring that the generated outputs avoid unintended responses and bias. [&#91;5&#93;](#cite_note-”5”-5) Finally, Groundedness is defined as “the percentage of responses containing claims about the external world” supported by authoritative sources. It aims to maintain factual accuracy and allows users to judge the validity of a response based on the reliability of its source. These objectives work together to create a more accurate, contextually relevant, and responsible language model. [&#91;2&#93;](#cite_note-”2”-2) [&#91;5&#93;](#cite_note-”5”-5)

### Evaluation

[![](/images/thumb/e/e0/Comparison_between_PT%2C_LaMDA_and_human-rater-generated_dialogs.png/300px-Comparison_between_PT%2C_LaMDA_and_human-rater-generated_dialogs.png)](/wiki/file_comparison_between_pt_lamda_and_human-rater-generated_dialogs_png)  [](/wiki/file_comparison_between_pt_lamda_and_human-rater-generated_dialogs_png)
Figure 2. Comparison between the pre-trained model (PT), fine-tuned model (LaMDA) and human-rater-generated dialogs (Human) for different metrics. Source: Google.
Progress against the key metrics of Quality, Safety, and Groundedness is measured by collecting responses from the pre-trained model, fine-tuned model, and human raters and evaluated by a separate set of human raters (figure 2). This ongoing process helps to assess the effectiveness of the model in relation to these metrics. [&#91;5&#93;](#cite_note-”5”-5)

LaMDA's performance has been found to improve with the number of parameters in terms of Quality metrics like Sensibleness, Specificity, and Interestingness. [&#91;5&#93;](#cite_note-”5”-5) The research indicates that Safety improves with fine-tuning, and Groundedness advances as the model size increases. While fine-tuning narrows the gap to human performance levels in Quality, the model still remains below human levels in Safety and Groundedness. [&#91;2&#93;](#cite_note-”2”-2)

## Overcoming Challenges

The two main challenges for Google’s AI model are Safety and Groundedness. [&#91;2&#93;](#cite_note-”2”-2)

### Safety

Since LaMDA can extract answers from the web, there is a risk of amplifying bias and reflecting prevalent notions found online. Google has open-sourced the resources used for data analysis and training to address this issue, allowing diverse groups to participate in dataset creation, identify existing biases, and reduce the dissemination of harmful or misleading information. [&#91;2&#93;](#cite_note-”2”-2)

### Factual Grounding

Many language models rely solely on their internal parameters to draw their knowledge, unlike humans who can verify facts using tools and referencing established knowledge bases. To enhance LaMDA's groundedness, a dataset of dialogs between people and LaMDA is collected, annotated with information retrieval queries and retrieved results where applicable. LaMDA's generator and classifier are then fine-tuned on this dataset, enabling the model to access external information retrieval systems during interactions, resulting in more grounded responses. [&#91;2&#93;](#cite_note-”2”-2)[&#91;5&#93;](#cite_note-”5”-5)

## LaMDA and ChatGPT

LaMDA and GPT-3 are both trained on unlabeled text datasets, such as Wikipedia and Common Crawl. Specifically, LaMDA is trained on dialogue training sets to generate non-generic, open-ended dialogues that are factual, sensible, and relevant to the topic, simulating human speech and emotions as demonstrated during Google's I/O 2021 demo, where it provided information about Pluto, space travel, and people's opinions. [&#91;6&#93;](#cite_note-”6”-6)

## Bard and other uses

In 2023, Google released Bard, an AI chatbot using LaMDA, with the possible goal of integrating it into various Google systems to enable human-like conversations. While LaMDA has the potential to be used in various product lines, it remains largely experimental and is still being developed and refined. [&#91;1&#93;](#cite_note-”1”-1)

Examples of possible uses for Google's language model could include functions such as a virtual assistant for Google Workspace, navigating search in Google's search engine, enhancing Google Assistant and Google Home, live translation, and commercial chatbots. LaMDA's developers also considered training LaMDA on different data types like images, audio, or videos. [&#91;6&#93;](#cite_note-”6”-6)

## Sentience claim

Blake Lemoine, who worked as a Google engineer, claimed that LaMDA was sentient. He suggested that the language model had the ability to feel like a human and perhaps even possess a soul. Google immediately disproved the idea of a sentient AI chatbot, but Lemoine's claims demonstrated the chatbot's proficiency in engaging in human-like conversations. [&#91;1&#93;](#cite_note-”1”-1) 

His belief that LaMDA was sentient was based on his interactions with the AI, in which he asked it complex questions and was impressed by the intricate and appropriate responses. Regardless of the validity of Lemoine's assertions, LaMDA's main purpose is to create natural, believable open-ended dialogue, suggesting that Google has achieved remarkable success in creating convincing dialogues. [&#91;7&#93;](#cite_note-”7”-7)

## References

1. 
2. 
3. 
4. 
5. 
6. 
7.