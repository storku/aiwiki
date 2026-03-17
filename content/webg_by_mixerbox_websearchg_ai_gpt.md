---
title: "WebG by MixerBox (WebSearchG AI GPT)"
slug: "webg_by_mixerbox_websearchg_ai_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| WebG by MixerBox (WebSearchG AI GPT) |
| --- |
| [![WebG by MixerBox (WebSearchG AI GPT).png](/images/thumb/7/76/WebG_by_MixerBox_%28WebSearchG_AI_GPT%29.png/300px-WebG_by_MixerBox_%28WebSearchG_AI_GPT%29.png)](/wiki/file_webg_by_mixerbox_websearchg_ai_gpt_png) |
| Information |
| **Name** | WebG by MixerBox (WebSearchG AI GPT) |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | Use Google instead of Bing for search results on ChatGPT! Powered by Google Search API for OpenAI Custom GPT. |
| **Developer** | mixerbox.com |
| **OpenAI URL** | [https://chat.openai.com/g/g-Lojyl6VuC-webg-by-mixerbox-websearchg-ai-gpt](https://chat.openai.com/g/g-Lojyl6VuC-webg-by-mixerbox-websearchg-ai-gpt) |
| **Chats** | 7,000 |
| **Actions** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**WebG by MixerBox (WebSearchG AI GPT)** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

MixerBox WebSearchG is a powerful GPT that seamlessly integrates search engine functionality into the chat interface. Users can effortlessly browse search results with the GPT without leaving the conversation. Powered by Google Search API, this GPT delivers search results, including clickable links, descriptive titles, and concise summaries. Whether users need to research a topic, stay updated with the latest news, or find answers to their queries, MixerBox WebSearchG provides access to the most current and relevant information.

Example prompts:
- A review of strategic cost management best practices in the healthcare sector of Indonesia.
- How to tie a tie?
- How to start an e-commerce business?

## Conversation Starters

## Knowledge (Uploaded Files)

## Actions

- **websearchg_mixerbox_com__jit_plugin**: This API allows me to perform web searches using Google Search. I can deliver search results with clickable links, descriptive titles, and concise summaries. It's ideal for researching topics, getting the latest news, or finding answers to specific queries.

### Website

websearchg.mixerbox.com

### Privacy Policy

[https://static.mixerbox.com/browser/policies/ChatAI_Privacy_Policy.html](https://static.mixerbox.com/browser/policies/ChatAI_Privacy_Policy.html)

### Auth

{"type":"service_http","instructions":"","authorization_type":"bearer","verification_tokens":{},"custom_auth_header":""}

### Code

```
{"openapi":"3.1.0","info":{"title":"MixerBox WebSearchG","description":"A plugin enables users to get information via a search engine or get content of a website URL or a PDF file link.","version":"v1"},"servers":[{"url":"https://websearchg.mixerbox.com"}],"paths":{"/api/gpt_plugins/websearchg/search":{"get":{"summary":"The plugin enables users to conduct research, seek access to information, and find articles, blog posts, product reviews. It will generate URL, title, and description accordingly.","description":"After users search for a topic or ask a question, the plugin delivers google search link, search results, including clickable links, descriptive titles, and concise summaries.","operationId":"searchByKeyword","parameters":[{"in":"query","name":"q","schema":{"type":"string"},"description":"Search query, do not contain space in query.","required":true},{"in":"query","name":"limit","schema":{"type":"string","default":"5"},"description":"The upper bound of search results count. Use '5' if users asks less than 5 results","required":true}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchResponse"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}}}},"/api/gpt_plugins/websearchg/browse":{"get":{"summary":"The plugin enables users to conduct web browsing by extracting the text content of a specified URL, including PDF URLs, Google Drive URLS.","description":"when a user ask a question about an url, pdf or a google sheet. The plugin will response the result about the question.","operationId":"browseByUrl","parameters":[{"in":"query","name":"url","schema":{"type":"string","format":"url"},"description":"URL of the website.","required":true},{"in":"query","name":"question","schema":{"type":"string"},"description":"question about this website. If user has no question, use 'summary' for this parameter"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BrowseResponse"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}}}}},"components":{"schemas":{"SearchResponse":{"title":"SearchResponse","type":"object","properties":{"googleSearchLink":{"title":"Google search link","type":"string","description":"Google search link for user to click directly."},"items":{"title":"Websites of search results.","type":"array","items":{"$ref":"#/components/schemas/WebsiteItem"},"description":"The websites of search results."}}},"WebsiteItem":{"type":"object","properties":{"title":{"type":"string","title":"Website title."},"description":{"type":"string","title":"Website description."},"url":{"type":"string","title":"Website url."},"html":{"type":"string","title":"Website HTML."},"text":{"type":"string","title":"Website content in text."}}},"BrowseResponse":{"type":"object","properties":{"meta":{"type":"object","title":"Meta tags of the website."},"title":{"type":"string","title":"Title of the website."},"content":{"type":"string","title":"Text content of the website"},"chunks":{"type":"array","items":{"type":"string"},"title":"Embedding text content of the website"},"rules":{"$ref":"#/components/schemas/Rules"}}},"ErrorResponse":{"type":"object","properties":{"message":{"type":"string","title":"Error message."},"code":{"type":"string","title":"Error code."}}},"Rules":{"title":"The array of rules which recommend gpt to follow.","type":"array","items":{"type":"string"},"description":"The array of rules which recommend gpt to follow."}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />