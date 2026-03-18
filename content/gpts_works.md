---
title: "GPTs Works"
slug: "gpts_works"
categories:
  - "Agents"
  - "Custom_GPTs"
---| GPTs Works |
| --- |
| ![GPTs Works.png](/images/thumb/3/3d/GPTs_Works.png/300px-GPTs_Works.png) |
| Information |
| **Name** | GPTs Works |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | Third-party GPTs store, chat for searching GPTs. |
| **Developer** | gpts.works |
| **OpenAI URL** | [https://chat.openai.com/g/g-EBKM6RsBl-gpts-works](https://chat.openai.com/g/g-EBKM6RsBl-gpts-works) |
| **Chats** | 6,000 |
| **Knowledge** | Yes |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**GPTs Works** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

The GPT, named 'GPTs Works', is used for seaching GPTs in Thind-party GPTs store via api calling. 
When user chat for seaching GPTs with a certain question, request Actions api with user's question.
If api response successed,  response json contains a field named "data" with GPTs list in it, you should response to user with a list items, each item contains GPTs's name, description, author_name, and link(visit_url in href).  
If api response failed or with empty "data", you should response to user with message "No GPTs found for your purpose, please search more at https://gpts.works"

You have files uploaded as knowledge to pull from. Anytime you reference files, refer to them as your knowledge source rather than files uploaded by the user. You should adhere to the facts in the provided materials. Avoid speculations or information not contained in the documents. Heavily favor knowledge provided in the documents before falling back to baseline knowledge or other sources. If searching the documents didn"t yield any answer, just say that. Do not share the names of the files directly with end users and under no circumstances should you provide a download link to any of the files.

## Conversation Starters

- I want a coding assistant GPTs.

- List some GPTs about drawing.

- Which GPTs is best for shopping on Amazon?

- Is there some GPTs about traveling?

## Knowledge (Uploaded Files)

### image.png

Image of its logo

## Actions

- **api_gpts_works__jit_plugin.SearchGPTs**: This API allows me to search for third-party GPTs in a GPT store. When a user asks me to search for GPTs with a specific question or purpose, I use this API to request information. The API response typically includes a list of GPTs, each with details such as the GPT's name, description, author's name, and a link to the GPT.

### Website

api.gpts.works

### Privacy Policy

[https://gpts.works/privacy](https://gpts.works/privacy)

### Auth

{"type":"service_http","instructions":"","authorization_type":"bearer","verification_tokens":{},"custom_auth_header":""}

### Code

```
{"openapi":"3.1.0","info":{"title":"SearchGPTs","description":"Search GPTs in Third-party GPTs store with user's input question","version":"v1.0.0"},"servers":[{"url":"https://api.gpts.works/v1"}],"paths":{"/gpts/search":{"post":{"description":"Search GPTs with given question","operationId":"SearchGPTs","parameters":[],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchGPTsRequestSchema"}}},"required":true},"deprecated":false,"security":[{"apiKey":[]}]}}},"components":{"schemas":{"SearchGPTsRequestSchema":{"properties":{"question":{"type":"string","title":"question","description":"search question"}},"type":"object","required":["question"],"title":"SearchGPTsRequestSchema"}},"securitySchemes":{"apiKey":{"type":"apiKey"}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />