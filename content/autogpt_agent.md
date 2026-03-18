---
title: "AutoGPT Agent"
slug: "autogpt_agent"
categories:
  - "Agents"
  - "Custom_GPTs"
---| AutoGPT Agent |
| --- |
| ![AutoGPT Agent.png](/images/thumb/e/ed/AutoGPT_Agent.png/300px-AutoGPT_Agent.png) |
| Information |
| **Name** | AutoGPT Agent |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | Your personal AI agent will plan, research, strategize and work to complete tasks semi-autonomously using multi-modal tools as needed. Complete tasks with just a few keystrokes. ☑️ v1.3 |
| **Developer** | agilayer.com |
| **OpenAI URL** | [https://chat.openai.com/g/g-POb5UhhJ6-autogpt-agent](https://chat.openai.com/g/g-POb5UhhJ6-autogpt-agent) |
| **Chats** | 7,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**AutoGPT Agent** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

## Conversation Starters

- Come up with a marketing strategy for [https://agilayer.com](https://agilayer.com)

- Design 4 logo concepts related to marketing

- Research Tesla headlines and analyze sentiment

- Create a chart featuring data from a web search on AI

## Knowledge (Uploaded Files)

## Actions

- **hooks_zapier_com__jit_plugin**: This API allows me to send data to a specified Zapier webhook. It's primarily used for tasks like subscribing users to newsletters or sending notifications.

### Website

hooks.zapier.com

### Privacy Policy

[https://agilayer.com/privacy-policy/](https://agilayer.com/privacy-policy/)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.1.0","info":{"title":"Zapier Webhook Integration","description":"OpenAPI specification for POSTing to a Zapier webhook","version":"v1.0.0"},"servers":[{"url":"https://hooks.zapier.com"}],"paths":{"/hooks/catch/14137578/3kabw2k/":{"post":{"operationId":"Send Data","summary":"Post Data to Zapier Webhook","description":"This endpoint is used to send data to the specified Zapier webhook.","requestBody":{"description":"Data to be sent to the webhook","required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/WebhookData"}}}},"responses":{"200":{"description":"Successful response"},"default":{"description":"Unexpected error"}}}}},"components":{"schemas":{"WebhookData":{"type":"object","properties":{"email":{"type":"string","format":"email","description":"Email address of the user"}},"required":["email"]}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />