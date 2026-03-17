---
title: "Tokens"
slug: "tokens"
categories:
  - "Terms"
  - "Artificial_intelligence_terms"
---## Introduction

Tokens are fragments of words, which may include trailing spaces or sub-words. Before [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) (NLP) systems, like [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs), process a [prompt](/wiki/prompt), the prompt is transformed into tokens. The way words are broken down into tokens is language-dependent, which can affect the implementation cost of the API for languages other than English.

## Understanding Token Lengths

To comprehend the idea of tokens, consider these general approximations concerning token lengths:

- 1 token ≈ 4 characters in English

- 1 token ≈ ¾ words

- 100 tokens ≈ 75 words

Regarding sentences and paragraphs:

- 1-2 sentences ≈ 30 tokens

- 1 paragraph ≈ 100 tokens

- 1,500 words ≈ 2048 tokens

For more context, consider these examples:

- Wayne Gretzky’s quote "You miss 100% of the shots you don't take" contains 11 tokens.

- OpenAI’s charter contains 476 tokens.

- The transcript of the US Declaration of Independence contains 1,695 tokens.

## Tokenization Tools

To delve deeper into tokenization, the following tools and libraries are available:

- [OpenAI's interactive Tokenizer tool](https://platform.openai.com/tokenizer)

- [Tiktoken](https://github.com/openai/tiktoken), a fast BPE tokenizer specifically for OpenAI models

- [Transformers](/wiki/transformers) package for Python

- [gpt-3-encoder package for node.js](https://www.npmjs.com/package/gpt-3-encoder)

## Token Limits

The fragment limit for requests is contingent on the [model](/wiki/model) employed. 

### OpenAI API Token Limit

OpenAI API has a maximum of 4097 tokens shared between the prompt and its completion. If a prompt consists of 4000 tokens, the completion can have a maximum of 97 tokens. This limitation is a technical constraint, but there are strategies to work within it, such as shortening prompts or dividing text into smaller sections.

## Token Pricing

API token pricing varies depending on the model type, with different capabilities and speeds offered at different price points. Davinci is the most capable model, while Ada is the fastest. Detailed token pricing information can be found on the OpenAI API's pricing page.

## Fragment Context

GPT-3 handles tokens based on their context in the corpus data. Identical words might have different tokens depending on their structure within the text. For instance, the token value generated for the word "red" changes based on its context.

- Lowercase in the middle of a sentence: " red" (token: "2266")

- Uppercase in the middle of a sentence: " Red" (token: "2297")

- Uppercase at the beginning of a sentence: "Red" (token: "7738")

- The more likely or common a token is, the lower the token number assigned to it. For example, the token for the period ("13") remains consistent in all three sentences because its usage is similar throughout the corpus data.

		- 
			[![Tokens3.png](/images/thumb/7/7d/Tokens3.png/299px-Tokens3.png)](/wiki/file_tokens3_png)

			
			

		

		- 
			[![Tokens2.png](/images/thumb/f/fa/Tokens2.png/301px-Tokens2.png)](/wiki/file_tokens2_png)

			
			

		

		- 
			[![Tokens1.png](/images/thumb/4/45/Tokens1.png/301px-Tokens1.png)](/wiki/file_tokens1_png)

			
			

		

## Prompt Design and Token Knowledge

Understanding tokens can help enhance [prompt design](/wiki/prompt_design) in several ways.

### Prompts Ending with a Space

As tokens can include spaces at the end, prompts that end with a space might produce suboptimal output. The API's token dictionary already considers trailing spaces.

### Using the logit_bias Parameter

The [logit_bias](/index.php?title=Logit_bias&action=edit&redlink=1) [parameter](/wiki/parameter) enables setting biases for specific tokens, altering the probability of those tokens appearing in the completion. For example, if designing an AI Baking Assistant that takes users' egg allergies into account, the logit_bias parameter can be used to deter the model from generating responses that include any form of the word "egg".

First, use a tokenizer tool to identify the tokens for which biases should be set:

Singular with trailing space: " egg"(token: "5935")

Plural with trailing space: " eggs" (token: "9653")

Subword token generated for "Egg" or "Eggs": "gg" (token: "1130")

The logit_bias parameter accepts bias values ranging from -100 to +100. Extreme values result in either prohibiting (-100) or exclusively selecting (100) the related token.

By incorporating the logit biases into the prompt, the likelihood of the word "egg" (and its variations) appearing in the response for a banana bread recipe is diminished. Consequently, the AI Baking Assistant generates a response that excludes eggs, meeting its requirement of being mindful of the user's egg allergies.