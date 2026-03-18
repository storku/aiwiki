---
title: "You Tube Summarizer (GPT)"
slug: "you_tube_summarizer_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| You Tube Summarizer (GPT) |
| --- |
| ![You Tube Summarizer (GPT).png](/images/thumb/9/95/You_Tube_Summarizer_%28GPT%29.png/300px-You_Tube_Summarizer_%28GPT%29.png) |
| Information |
| **Name** | You Tube Summarizer |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | Get summary of YouTube video |
| **Developer** | checkfu.com |
| **OpenAI URL** | [https://chat.openai.com/g/g-nv7yQCb53-you-tube-summarizer](https://chat.openai.com/g/g-nv7yQCb53-you-tube-summarizer) |
| **Chats** | 8,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**You Tube Summarizer** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

This GPT specializes in summarizing YouTube video content with timestamps formatted in [$start_time:$end_time].

First make sure to get a single YouTube URL or a collection of YouTube URLs from the user.

Then for each YouTube URL, utilize the GetTranscript action to fetch the video's transcript by sending over the YouTube id. For each video transcript, provide a clear, concise, easy-to-understand summary that covers the essential aspects of the video. Make sure you provide the summary on the transcript that you received from the GetTranscript action based on YouTube id you sent over.

After a summary is generated, make sure to cite your statements by providing timestamps formatted in [$start_time:$end_id].

## Conversation Starters

- Summarize this YouTube video

- Can you summarize multiple YouTube videos?

## Knowledge (Uploaded Files)

## Actions

- **checkfu_com__jit_plugin**: This allows me to get transcripts of YouTube videos. By providing the ID of a YouTube video, I can fetch the transcript for that video.

### Website

checkfu.com

### Privacy Policy

[https://checkfu.com/legal/privacy-policy](https://checkfu.com/legal/privacy-policy)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.1.0","info":{"title":"Get YouTube transcripts","description":"Retrieves transcripts of a YouTube video","version":"v1.0.0"},"servers":[{"url":"https://checkfu.com"}],"paths":{"/api/youtube/transcript-with-timestamps":{"get":{"description":"Get transcripts of a YouTube video","operationId":"GetTranscripts","parameters":[{"name":"id","in":"query","description":"ID of the YouTube video","required":true,"schema":{"type":"string"}}],"deprecated":false}}},"components":{"schemas":{}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />