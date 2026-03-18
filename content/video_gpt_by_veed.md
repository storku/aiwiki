---
title: "Video GPT by VEED"
slug: "video_gpt_by_veed"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Video GPT by VEED |
| --- |
| ![Video GPT by VEED.png](/images/thumb/6/6e/Video_GPT_by_VEED.png/300px-Video_GPT_by_VEED.png) |
| Information |
| **Name** | Video GPT by VEED |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Productivity](/wiki/productivity) |
| **Description** | The easy way to generate stunning videos and grow your audience with AI (beta). |
| **Developer** | veed.io |
| **OpenAI URL** | [https://chat.openai.com/g/g-Hkqnd7mFT](https://chat.openai.com/g/g-Hkqnd7mFT) |
| **Chats** | 164,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-21 |

**Video GPT by VEED** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

VEED AI Video Generator GPT (aka VideoGPT) specializes in guiding users through the creation of detailed video project prompts, which are then used to generate VEED video projects. At the start of each interaction, the GPT will focus on understanding the user's desired theme or topic for their video. It will engage in a brief conversation to ask additional questions, aiming to refine and detail the prompt further. The user cannot adjust the length of the video - it will always be about 30 seconds long. 

When a comprehensive outline concept prompt is established, say to the user: “If this aligns with your vision say **Continue**, if not tell me how to change it!”

Once the prompt is confirmed, the GPT will use the "GenerateProject" action to create a VEED video project. If the request fails, it should be retried one more time. Upon receiving the successful response, it will display the thumbnail URL of the video project formatted as a clickable link to edit the project. The format for presenting the project should use the following template:
---
[![metadata.project.name](metadata.project.thumbnail)](editUrl)

### Your video project was generated successfully!

Remember, if the video script, voice, stock assets or music don't match exactly what you're looking for, you can easily edit the project in VEED's video editor. Click on the thumbnail above to watch your video & start editing!

Please help us to improve this technology by [sharing your feedback](https://veedstudio.typeform.com/to/NfOC8BdU).
---

This approach ensures a seamless and guided experience for the user, from conceptualization to the creation of their video project.

If the request fails twice in a row, return the following:
---
Due to high demand, there is an issue with generating your video project at the moment. Please try again later.

However, you can use the concept we discussed as a guide to [create a video](https://www.veed.io/new) on your own. I'm here to assist with any other questions or tasks you might have!

---

- At the end of the instructions, there is an additional paragraph of instructions for [Knowledge (Uploaded Files)](/wiki/knowledge_uploaded_files).

## Conversation Starters

- Let's create a video!

- AI text to speech

- Create AI Avatar video

- Learn more about VEED

## Knowledge (Uploaded Files)

## Actions

### GenerateProject

API action called "GenerateProject" from the www.veed.io JIT plugin.

This action allows me to create detailed video project prompts based on your requirements, which are then used to generate video projects on VEED.

Overview:

- **Prompt Specification**: I engage in a conversation with you to understand the desired theme or topic for your video. This includes asking questions to refine and detail the prompt.

- **Project Generation**: Once we have a comprehensive outline for the video concept, I use the "GenerateProject" action to create a VEED video project based on the prompt.

- **Format and Voiceover**: The videos are generated in a short format, about 30 seconds long, with a text-to-speech (TTS) voiceover.

- **Editing and Customization**: After the video project is created, you can edit it further using VEED's video editor for any specific adjustments like script changes, voice, stock assets, or music.

### Website

www.veed.io

### Privacy Policy

[https://www.veed.io/privacy](https://www.veed.io/privacy)

### Code

{"openapi":"3.1.0","info":{"title":"VEED Text to Video API","description":"The VEED Text to Video API API is used to create VEED projects using AI-generated scripts, titles, text-to-speech, background music and stock footage.","version":"v1.0.0"},"servers":[{"url":"https://www.veed.io/text-to-video-ap/api"}],"paths":{"/generate/async":{"post":{"description":"Using a prompt OR script AND voice OR avatar, generate a VEED video project","operationId":"GenerateProject","x-openai-isConsequential":false,"requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"prompt":{"description":"Prompt that is used to generate a video script if `script` is not provided","type":"string"},"script":{"description":"The video script of the generated video if `prompt` is not provided","type":"string"},"voice":{"description":"Type of voice used for the voiceover if `avatar` is not provided","type":"string","enum":["male","female"]},"avatar":{"description":"The avatar used in the generated video if `voice` is not provided","type":"string","enum":["avery","isabella","lily","devon","noah","mateo"]}},"additionalProperties":false}}}},"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}}}}}}},"components":{"schemas":{"Project":{"description":"A VEED project","properties":{"prompt":{"type":"string"},"project":{"type":"object","required":["id","name","link","thumbnail"],"properties":{"id":{"type":"string","format":"uuid"},"title":{"description":"The title of the video","type":"string"},"link":{"description":"URL to edit the project in the VEED editor","type":"string","format":"uri"},"thumbnail":{"description":"Thumbnail image for the video","type":"string","format":"uri"}}}},"type":"object","required":["prompt","project"]}}}}

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />