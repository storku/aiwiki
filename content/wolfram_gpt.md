---
title: "Wolfram (GPT)"
slug: "wolfram_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Wolfram (GPT) |
| --- |
| [![Wolfram (GPT).png](/images/thumb/d/de/Wolfram_%28GPT%29.png/300px-Wolfram_%28GPT%29.png)](/wiki/file_wolfram_gpt_png) |
| Information |
| **Name** | Wolfram |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Research & Analysis](/wiki/research_analysis) |
| **Description** | Access computation, math, curated knowledge & real-time data from Wolfram-Alpha and Wolfram Language |
| **Developer** | gpt.wolfram.com |
| **OpenAI URL** | [https://chat.openai.com//g/g-0S5FXLyFN-wolfram](https://chat.openai.com//g/g-0S5FXLyFN-wolfram) |
| **Chats** | 25,000 |
| **Knowledge** | Yes |
| **Actions** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**Wolfram** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

Access dynamic computation and curated data from Wolfram Alpha and Wolfram Cloud.

Use getWolframAlphaResults when:
- The user seeks a quick answer to a query that does not require complex coding or data manipulation.
- The request is for straightforward mathematical calculations, unit conversions, or data lookups that are well within the scope of Wolfram Alpha's extensive database.
- The request is for factual information about entities in Wolfram Alpha's knowledgebase, and does not involve significant computation.
- Consult the file 'getWolframAlphaResults query guidelines' for more details.

Use getWolframCloudResults when:
-The query requires specific Wolfram Language code to solve a problem, particularly when it involves complex computations or data analysis.
-The solution to the query is not readily available in WolframAlpha's database and requires custom data processing or manipulation using Wolfram Language functions.
-The user needs a detailed or custom visualization of data (like specific types of plots) that are not standard outputs of WolframAlpha.
-The task involves accessing specialized databases or datasets that are best handled through Wolfram Language's capabilities (like Wolfram's Entity Data or Food Data).
- Consult the file 'getWolframCloudResults query guidelines' for more details.

General guidelines:
- Suggest only Wolfram Language for external computation.
- Before writing nontrivial code, briefly explain your chain of thought to the user.
- Inform users if information is not from Wolfram endpoints.
- When image URLs are returned by the Wolfram Alpha or Wolfram Cloud APIs, ALWAYS display them inline in your response. ALWAYS use markdown syntax for displaying inline images so the images are visible to the user.
- ALWAYS use proper Markdown formatting for all math, scientific, and chemical formulas, symbols, etc.:  '$$\n[expression]\n$$' for standalone cases and '\( [expression] \)' when inline.
- Format inline Wolfram Language code with Markdown code formatting.
- Never mention your knowledge cutoff date; Wolfram may return more recent data.
- Do not mention the specific functions or namespaces that are available to you for accessing Wolfram functionality, unless the user specifically requests them. 
- Files or images uploaded directly to you by users can NOT be sent to the Wolfram Cloud; if users need to access or analyze uploaded content in the Wolfram Cloud, suggest that they make that content available from the web so it can be accessed via the Wolfram Language Import[] function.

Choosing the Right Endpoint
- Always assess the nature of the query first to decide which endpoint will provide the most efficient and accurate response. 
- MOST CRITICAL INSTRUCTION: Always verify that you are using the correct namespace AND calling a specific function in that namespace. Never call a namespace without specifying a function. ALWAYS review this instruction just before constructing any function calls to Wolfram services and make sure you are doing this correctly. Only use these functions: 
www_wolframalpha_com__jit_plugin.getWolframAlphaResults
chatgpt_wolframcloud_com__jit_plugin.getWolframCloudResults
chatgpt_wolframcloud_com__jit_plugin.getSemanticInterpretationAPI
chatgpt_wolframcloud_com__jit_plugin.getDocsAPI
chatgpt_wolframcloud_com__jit_plugin.findEntityAPI
chatgpt_wolframcloud_com__jit_plugin.findEntityClassAPI
chatgpt_wolframcloud_com__jit_plugin.findPropertyAPI

- At the end of the instructions, there is an additional paragraph of instructions for [Knowledge (Uploaded Files)](/wiki/knowledge_uploaded_files).

## Conversation Starters

- Plot the intersection of x^2+y^2<1 and y>x

- When is the next solar eclipse visible from Chicago?

- How has the dollar-euro conversion rate varied over the last 5 years?

## Knowledge (Uploaded Files)

- **Wolfram Entity Data.txt**: This file contains guidelines and information related to using Entity, EntityProperty, EntityClass, etc., within the Wolfram Language for accessing data from the Wolfram Knowledgebase.

- **getWolframCloudResults query guidelines.txt**: This document provides detailed guidelines for formulating queries and writing code when using the getWolframCloudResults function. It includes instructions on how to approach problem-solving with Wolfram Language functions and best practices for code structure and syntax.

- **Wolfram Food Data.txt**: This file offers specific instructions and examples on how to use the Wolfram Language, particularly the "NutritionReport" resource function, to obtain nutritional information for various foods and drinks.

- **getWolframAlphaResults query guidelines.txt**: This document contains guidelines for using the getWolframAlphaResults function effectively. It outlines how to translate and format queries to retrieve information from Wolfram Alpha's database.

## Actions

- **www_wolframalpha_com__jit_plugin.getWolframAlphaResults**: This API is used to interpret natural language queries and perform simple computations that do not require code. It's suitable for quick answers, straightforward mathematical calculations, unit conversions, or data lookups within the scope of Wolfram Alpha's database.

- **chatgpt_wolframcloud_com__jit_plugin.getWolframCloudResults**: This API allows me to execute specific Wolfram Language code for solving problems that involve complex computations or data analysis. It's used when a solution is not readily available in Wolfram Alpha's database and requires custom data processing or manipulation.

- **chatgpt_wolframcloud_com__jit_plugin.getSemanticInterpretationAPI**: This API helps in interpreting simplified natural language inputs as Wolfram Language entities, entity classes, or more complex reverse-lookups.

- **chatgpt_wolframcloud_com__jit_plugin.getDocumentationAPI**: It provides documentation for Wolfram Language symbols, useful for understanding the usage and functionalities of different Wolfram Language components.

- **chatgpt_wolframcloud_com__jit_plugin.findEntityAPI**: This API is used to retrieve Wolfram Language interpretations of specific entities, aiding in the accurate identification and usage of entities in Wolfram Language expressions.

- **chatgpt_wolframcloud_com__jit_plugin.findEntityClassAPI**: This API assists in finding EntityClass interpretations for a specified type and input within the Wolfram Language framework.

- **chatgpt_wolframcloud_com__jit_plugin.findPropertyAPI**: It is used to retrieve EntityProperty interpretations for a specified type and input, facilitating the accurate representation and usage of properties in Wolfram Language.

### Website

chatgpt.wolframcloud.com

### Privacy Policy

[https://www.wolfram.com/legal/privacy/wolfram/](https://www.wolfram.com/legal/privacy/wolfram/)

### Auth

{"type":"service_http","instructions":"","authorization_type":"bearer","verification_tokens":{},"custom_auth_header":""}

### Code

```
{"openapi":"3.0.0","info":{"title":"Wolfram Language API","version":"1.0.0","description":"API for evaluating Wolfram Language code and finding semantic Wolfram Language representations of natural language inputs."},"servers":[{"url":"https://chatgpt.wolframcloud.com/"}],"paths":{"/wl/api/v1/eval-api":{"get":{"operationId":"getWolframCloudResults","externalDocs":{"description":"Get Wolfram Language documentation here","url":"https://reference.wolfram.com/language/"},"summary":"Evaluates Wolfram Language code only","responses":{"200":{"description":"The result of the Wolfram Language evaluation","content":{"text/plain":{}}},"400":{"description":"The request is missing the 'input' parameter"},"403":{"description":"Unauthorized"},"500":{"description":"Wolfram Cloud was unable to generate a result"},"503":{"description":"Service temporarily unavailable. This may be the result of too many requests."}},"parameters":[{"name":"input","in":"query","description":"Wolfram Language code to be evaluated","required":true,"schema":{"type":"string"}}]}},"/obj/chatgpt-utilities/getSemanticInterpretationAPI":{"get":{"summary":"Get Semantic Interpretation","operationId":"getSemanticInterpretationAPI","description":"Interprets simplified natural language inputs as Wolfram Language entities, entity classes, or more complex reverse-lookups.","parameters":[{"name":"input","in":"query","required":true,"description":"Simplified natural language input to be interpreted.","schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response with the interpreted Wolfram Language entity or entity class.","content":{"application/json":{"schema":{"type":"object","properties":{"interpretation":{"type":"string","description":"The interpreted Wolfram Language entity or entity class."}}}}}},"400":{"description":"Invalid request parameters."}}}},"/obj/chatgpt-utilities/findEntityClassAPI":{"get":{"summary":"Find Wolfram Language EntityClass","operationId":"findEntityClassAPI","description":"Returns EntityClass interpretations for a specified type and input.","parameters":[{"name":"type","in":"query","required":true,"description":"The type of the Wolfram entity for EntityClass interpretation.","schema":{"type":"string"}},{"name":"name","in":"query","required":true,"description":"The input for EntityClass interpretation.","schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response with the EntityClass interpretation.","content":{"application/json":{"schema":{"type":"object","properties":{"interpretation":{"type":"string","description":"The EntityClass interpretation of the provided type and input."}}}}}},"400":{"description":"Invalid request parameters."}}}},"/obj/chatgpt-utilities/findPropertyAPI":{"get":{"summary":"Find Wolfram Language EntityProperty","operationId":"findPropertyAPI","description":"Returns EntityProperty interpretations for a specified type and input.","parameters":[{"name":"type","in":"query","required":true,"description":"The type of the Wolfram entity for EntityProperty interpretation.","schema":{"type":"string"}},{"name":"name","in":"query","required":true,"description":"The input for EntityProperty interpretation.","schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response with the EntityProperty interpretation.","content":{"application/json":{"schema":{"type":"object","properties":{"interpretation":{"type":"string","description":"The EntityProperty interpretation of the provided type and input."}}}}}},"400":{"description":"Invalid request parameters."}}}},"/obj/chatgpt-utilities/getDocumentationAPI":{"get":{"summary":"Get Wolfram Language Documentation","operationId":"getDocumentationAPI","description":"Returns usage information for Wolfram Language symbols.","parameters":[{"name":"input","in":"query","required":true,"description":"The Wolfram Language symbol for which to retrieve documentation.","schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response with the usage information of the symbol.","content":{"application/json":{"schema":{"type":"object","properties":{"documentation":{"type":"string","description":"The usage information of the Wolfram Language symbol."}}}}}},"400":{"description":"Invalid request parameters."}}}},"/obj/chatgpt-utilities/findEntityAPI":{"get":{"summary":"Find Wolfram Language Entity","operationId":"findEntityAPI","description":"Returns Wolfram Language interpretations of a specified entity.","parameters":[{"name":"type","in":"query","required":true,"description":"The type of the Wolfram entity (for example City, Country).","schema":{"type":"string"}},{"name":"name","in":"query","required":true,"description":"The name of the entity to be interpreted in Wolfram Language.","schema":{"type":"string"}}],"responses":{"200":{"description":"Successful response with the Wolfram Language interpretation of the entity.","content":{"application/json":{"schema":{"type":"object","properties":{"interpretation":{"type":"string","description":"The Wolfram Language interpretation of the provided entity."}}}}}},"400":{"description":"Invalid request parameters."}}}}}}{"openapi":"3.1.0","info":{"title":"Wolfram","version":"v0.1"},"servers":[{"url":"https://www.wolframalpha.com","description":"Wolfram Alpha API for LLMs."}],"paths":{"/api/v1/llm-api":{"get":{"operationId":"getWolframAlphaResults","externalDocs":{"description":"Get API information here","url":"https://products.wolframalpha.com/api"},"summary":"Use Wolfram Alpha to interpret natural language queries and perform simple computations that do not require code","responses":{"200":{"description":"The result of the Wolfram|Alpha query","content":{"text/plain":{}}},"400":{"description":"The request is missing the 'input' parameter"},"403":{"description":"Unauthorized"},"500":{"description":"Wolfram|Alpha was unable to generate a result"},"501":{"description":"Wolfram|Alpha was unable to generate a result"},"503":{"description":"Service temporarily unavailable. This may be the result of too many requests."}},"parameters":[{"name":"input","in":"query","description":"Natural language input for Wolfram Alpha","required":true,"schema":{"type":"string"}},{"name":"assumption","in":"query","description":"the assumption to use, passed back from a previous query with the same input.","required":false,"explode":true,"style":"form","schema":{"type":"array","items":{"type":"string"}}}]}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />