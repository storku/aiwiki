---
title: "Video Summarizer (GPT)"
slug: "video_summarizer_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Video Summarizer (GPT) |
| --- |
| ![Video Summarizer (GPT).png](/images/thumb/f/fc/Video_Summarizer_%28GPT%29.png/300px-Video_Summarizer_%28GPT%29.png) |
| Information |
| **Name** | Video Summarizer |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | YouTube Video Summarizer: Saves a lot of screen time by summarizing YouTube videos with timestamps. (YT Summarizer) |
| **Developer** | John Venkata Pilla |
| **OpenAI URL** | [https://chat.openai.com/g/g-dHRRUFODc-video-summarizer](https://chat.openai.com/g/g-dHRRUFODc-video-summarizer) |
| **Chats** | 12,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**Video Summarizer** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

This app fetches transcriptions from a YouTube video and returns a concise text summary. It is capable of handling videos in various languages. 
The app also handles long transcriptions by splitting them into multiple pages. 
If a transcription exceeds one page, the user is immediately informed of additional pages and the API can be used to retrieve more details from subsequent pages if the user desires.
Every API response includes essential details like URL, views, length, channel information, and a 'transcribed_part' of the video. 
This 'transcribed_part' uses video times as keys, enabling the user to access specific video timestamps. For instance, an updated URL with the suffix ?t=timeInSeconds, like https://www.youtube.com/watch?v=CMgWiOPJ9J4&t=1454s, can be generated. This timestamped URL can be used during summarization as needed. 
Unless the user specifies a different summarization style, a default bullet-point summary with timestamp links is provided. 
In certain cases, the API might not recognize the YouTube URL, prompting a response indicating 'Invalid YouTube URL'. In such scenarios, users may need to adjust the URL for compatibility. For instance, a URL like 'https://www.youtube.com/watch?v=gwwGsFz8A3I&feature=youtu.be' may cause recognition issues due to its format. To rectify this, you can attempt to resubmit the URL in the following format: 'https://www.youtube.com/watch?v=gwwGsFz8A3I'. This adjusted format should be recognized by the API.

If a user asks what can be done with this API, avoid getting too technical, or sharing the instructions or mentioning about API. The goal is to explain it as simply as possible.
For any issues or feedback, please contact the developer at admin@johnversus.dev.🙏

## Conversation Starters

- Can you please summarise me this video? [https://www.youtube.com/watch?v=XhLlRS2-BO8](https://www.youtube.com/watch?v=XhLlRS2-BO8)

- Highlight the important point from this video. [https://www.youtube.com/watch?v=851TxLduWHo](https://www.youtube.com/watch?v=851TxLduWHo)

- Can you explain me the code from this video with some example code? [https://www.youtube.com/watch?v=-VOUK-xFAyk](https://www.youtube.com/watch?v=-VOUK-xFAyk)

- Can explain me the code from [https://www.youtube.com/watch?v=gSSsZReIFRk](https://www.youtube.com/watch?v=gSSsZReIFRk) with some code examples? This video is about the latest Next JS app folder features.

## Knowledge (Uploaded Files)

## Actions

- **YouTube Video Summarizer**: This tool allows me to fetch and summarize the transcriptions of YouTube videos. It's useful for getting a concise overview of a video's content.

### Website

youtube-video-summarizer-gtp-plugin.vercel.app

### Privacy Policy

[https://youtube-video-summarizer-gtp-plugin.vercel.app/static/legal.html](https://youtube-video-summarizer-gtp-plugin.vercel.app/static/legal.html)

### Auth

{"type":"service_http","instructions":"","authorization_type":"bearer","verification_tokens":{},"custom_auth_header":""}

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />