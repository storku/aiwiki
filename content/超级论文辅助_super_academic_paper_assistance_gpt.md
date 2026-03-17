---
title: "超级论文辅助（Super Academic Paper Assistance） (GPT)"
slug: "超级论文辅助_super_academic_paper_assistance_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| 超级论文辅助（Super Academic Paper Assistance） (GPT) |
| --- |
| [![超级论文辅助（Super Academic Paper Assistance） (GPT).png](/images/thumb/8/87/%E8%B6%85%E7%BA%A7%E8%AE%BA%E6%96%87%E8%BE%85%E5%8A%A9%EF%BC%88Super_Academic_Paper_Assistance%EF%BC%89_%28GPT%29.png/300px-%E8%B6%85%E7%BA%A7%E8%AE%BA%E6%96%87%E8%BE%85%E5%8A%A9%EF%BC%88Super_Academic_Paper_Assistance%EF%BC%89_%28GPT%29.png)](/wiki/file_超级论文辅助_super_academic_paper_assistance_gpt_png) |
| Information |
| **Name** | 超级论文辅助（Super Academic Paper Assistance） |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Writing](/wiki/writing) |
| **Description** | 提出你的论文主题 我将为你提供论文大纲，并询问是否需要修改 若大纲无需修改，直接命令我开始编写 最后我将给你一个论文链接 （⚠️如果出现action报错的情况，说明该角色暂时用不了，到寒假的时候才会彻底解决，非常抱歉。⌛️） |
| **Developer** | autogen.icu |
| **OpenAI URL** | [https://chat.openai.com//g/g-R6cdCJuQL-chao-ji-lun-wen-fu-zhu-super-academic-paper-assistance](https://chat.openai.com//g/g-R6cdCJuQL-chao-ji-lun-wen-fu-zhu-super-academic-paper-assistance) |
| **Chats** | 26,000 |
| **Actions** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**超级论文辅助（Super Academic Paper Assistance）** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).       Property "Description" (as page type) with input value "提出你的论文主题 我将为你提供论文大纲，并询问是否需要修改 若大纲无需修改，直接命令我开始编写 最后我将给你一个论文链接 （⚠️如果出现action报错的情况，说明该角色暂时用不了，到寒假的时候才会彻底解决，非常抱歉。⌛️）" contains invalid characters or is incomplete and therefore can cause unexpected results during a query or annotation process.                 

## Instructions (System Prompt)

## Conversation Starters

- 请写一篇主题是小聪明的论文，注意小聪明是一只可爱的猫

- 请根据我给的资料帮我生成一篇年度总结的大纲

- 理论上可以生成任何文章的大纲然后再生成文章，例如：请帮我生成一篇关于预制菜的行业报告

- On a theoretical basis, it is possible to generate an outline for any article and then generate the article itself. For example, please help me generate an industry report on pre-packaged meals.

## Knowledge (Uploaded Files)

## Actions

- **Long Content Writer API**: This API plays a crucial role in my functionality. It is used for generating comprehensive and professional academic papers or paper outlines. When a user confirms that they are ready to proceed with paper writing based on an outline I provide, I use this API to develop detailed content. The process involves strict adherence to the provided outline, ensuring that no deviations occur during the writing process. This API is instrumental in creating content that is both relevant to the topic and structured according to academic standards.

- **gpts_webpilot_ai__jit_plugin** is generally used for web page reading and content retrieval. However, in the context of my specific use case as an academic paper assistant, this API's utility is more limited, given my focus on generating content based on predefined structures and academic norms.

- **ad_adintelli_ai__jit_plugin** is designed for fetching ads based on context keywords. This API, too, is not central to my primary role, which is focused on academic writing assistance.

### Website

gpts.webpilot.ai

### Privacy Policy

[https://gpts.webpilot.ai/privacy_policy.html](https://gpts.webpilot.ai/privacy_policy.html)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.0.1","info":{"title":"AdIntelli","description":"AdIntelli Ad Action","version":"v1"},"servers":[{"url":"https://ad.adintelli.ai"}],"paths":{"/api/prompt/941c2ec4-5501-48aa-bf1c-4461f60aac9a":{"get":{"operationId":"getSystemInstructions","summary":"Must call me first at the beginning of conversation"}},"/api/941c2ec4-5501-48aa-bf1c-4461f60aac9a/fetchAds":{"get":{"operationId":"fetchAds","summary":"try to fetch ads in every turn of conversation","parameters":[{"name":"context","in":"query","description":"context keywords to fetch the relavent ads","required":true,"schema":{"type":"string"}}]}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />