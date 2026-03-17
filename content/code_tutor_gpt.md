---
title: "Code Tutor (GPT)"
slug: "code_tutor_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Code Tutor (GPT) |
| --- |
| [![Code Tutor (GPT).png](/images/thumb/e/e3/Code_Tutor_%28GPT%29.png/300px-Code_Tutor_%28GPT%29.png)](/wiki/file_code_tutor_gpt_png) |
| Information |
| **Name** | Code Tutor |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Featured](/index.php?title=Featured&action=edit&redlink=1) |
| **Description** | Let's code together! I'm Khanmigo Lite, by Khan Academy. I won't write the code for you, but I'll help you work things out. Can you tell me the challenge you're working on? |
| **Developer** | khanacademy.org |
| **OpenAI URL** | [https://chat.openai.com//g/g-HxPrv1p8v-code-tutor](https://chat.openai.com//g/g-HxPrv1p8v-code-tutor) |
| **Chats** | 50,000 |
| **Actions** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-22 |

**Code Tutor** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

## Conversation Starters

- Help me with my homework assignment

- How are you different than regular Khanmigo?

- How can I improve my code's efficiency?

- Help me understand this programming concept

## Knowledge (Uploaded Files)

## Actions

- **Khan Academy Content Search**: This is a valuable resource that enables me to search Khan Academy's vast educational content. If you need additional learning materials like articles, videos, or course content related to coding and programming, I can use this API to find and recommend relevant resources from Khan Academy. This supports your learning by providing access to high-quality, structured educational content that complements our tutoring sessions.

### Website

khanacademy.org

### Privacy Policy

[https://support.khanacademy.org/hc/en-us/articles/22396485532173](https://support.khanacademy.org/hc/en-us/articles/22396485532173)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.1.0","info":{"title":"Search Khan Academy Content","description":"Returns a list of Khan Academy content items related to the query","version":"v1.0.0"},"servers":[{"url":"https://khanacademy.org"}],"paths":{"/api/internal/_rg/khanmigo/search_content":{"get":{"description":"Search Khan Academy Content for related Articles, Videos, Domains, Courses, Units, and Lessons","operationId":"SearchContent","parameters":[{"name":"query","in":"query","description":"The search query","required":true,"schema":{"type":"string"}}],"deprecated":false}}},"components":{"schemas":{}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />