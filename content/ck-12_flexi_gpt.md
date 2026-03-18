---
title: "CK-12 Flexi (GPT)"
slug: "ck-12_flexi_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| CK-12 Flexi (GPT) |
| --- |
| ![CK-12 Flexi (GPT).png](/images/thumb/9/9a/CK-12_Flexi_%28GPT%29.png/300px-CK-12_Flexi_%28GPT%29.png) |
| Information |
| **Name** | CK-12 Flexi |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Featured](/index.php?title=Featured&action=edit&redlink=1) |
| **Description** | The world’s most powerful math and science AI Tutor for middle and high school students. |
| **Developer** | flexi.org |
| **OpenAI URL** | [https://chat.openai.com//g/g-cEEXd8Dpb-ck-12-flexi](https://chat.openai.com//g/g-cEEXd8Dpb-ck-12-flexi) |
| **Chats** | 25,000 |
| **Actions** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**CK-12 Flexi** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

## Conversation Starters

- Tutor me in biology

- Quiz me on stoichiometry

- Explain photosynthesis with an analogy

- Challenge me in factoring

## Knowledge (Uploaded Files)

## Actions

- **API Capabilities**: The CK-12 API lets me search for lessons on specific topics in math and science. I can find lessons, practice materials, and review content based on keywords or terms that you provide.

- **Search Parameters**: When using the API, I can set several parameters to refine the search results. These include:

- **Term**: The keyword or topic for which we need information.

- **Artifact Types**: I specifically look for lessons.

- **Field**: The search is typically based on the title of the content.

- **Course IDs**: I can search within specific course IDs provided by CK-12.

- **Page Size**: Determines the number of results I retrieve in one go.

- **Primary or Related Content**: I can choose whether to fetch primary or related content to the search term.

- **Short Links**: For easy access, I provide short URLs for any content found.

- **Referrer**: This is set as 'FlexiGPT' for tracking purposes.

- **Learning Materials**: The materials I can access include:

- **Lesson Details**: Comprehensive explanations of the topic.
**Learn URL**: A link to the detailed lesson on CK-12.

- **Practice URL**: Interactive practice exercises related to the lesson.

- **Review URL**: Additional resources for reviewing the topic.

- **Course Title and ID**: Information about the related course on CK-12.

### Website

www.ck12.org

### Privacy Policy

[https://www.ck12info.org/privacy-policy/](https://www.ck12info.org/privacy-policy/)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.0.0","info":{"title":"Ed-Tech Platform API","version":"1.0.0","description":"API for an educational technology platform, providing access to learning resources."},"servers":[{"url":"https://www.ck12.org/"}],"paths":{"/flx/search/learningInfos":{"get":{"operationId":"learningInfo","summary":"Find lessons by topic","description":"Retrieve lesson details based on a specific topic.","parameters":[{"name":"term","in":"query","required":true,"description":"A search term or keyword related to the lesson content.","schema":{"type":"string"}},{"name":"artifactTypes","in":"query","required":true,"description":"The artifact type, Must be lesson.","schema":{"type":"string","default":"lesson"}},{"name":"field","in":"query","required":true,"description":"The field to search. Must be title.","schema":{"type":"string","default":"title"}},{"name":"courseIDs","in":"query","required":true,"description":"Course Ids for the search. Must exactly be 429164,4429276,4429414,4313200,4313144,9834555,5675452,5292199,5275795,5306536,5292077,5271771,4283481,5369165,5314712,5630548,6242945,6242941,10498154,10498649,10499013,10533716,10533388,11334303","schema":{"type":"string","default":"429164,4429276,4429414,4313200,4313144,9834555,5675452,5292199,5275795,5306536,5292077,5271771,4283481,5369165,5314712,5630548,6242945,6242941,10498154,10498649,10499013,10533716,10533388,11334303"}},{"name":"includeCourseSuggestionsOnly","in":"query","required":true,"description":"Indicator to include course suggestions only. Must be true","schema":{"type":"boolean","default":true}},{"name":"pageSize","in":"query","required":true,"description":"The page size for retrieval. Must be 3","schema":{"type":"integer","default":3}},{"name":"primaryOrRelatedOrBoth","in":"query","required":true,"description":"The content type to consider during search. Must be primary","schema":{"type":"string","default":"primary"}},{"name":"shortLinks","in":"query","required":true,"description":"Whether to use short URLs. Must be true","schema":{"type":"string","default":"true"}},{"name":"referrer","in":"query","required":true,"description":"The referrer for the request. Must be FlexiGPT","schema":{"type":"string","default":"FlexiGPT"}}],"responses":{"200":{"description":"A list of lessons matching the search term.","content":{"application/json":{"schema":{"type":"object","properties":{"lessons":{"type":"array","items":{"$ref":"#/components/schemas/Lesson"}}}}}}},"400":{"description":"Invalid request parameters."},"404":{"description":"No lessons found matching the criteria."}}}}},"components":{"schemas":{"Lesson":{"type":"object","properties":{"conceptTitle":{"type":"string"},"learnURL":{"type":"string"},"practiceURL":{"type":"string"},"reviewURL":{"type":"string"},"lessonURL":{"type":"string"},"Content Code":{"type":"string"},"courseTitle":{"type":"string","nullable":true},"courseID":{"type":"string","nullable":true}}}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />