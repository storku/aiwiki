---
title: "AutoExpert (Academic) (GPT)"
slug: "autoexpert_academic_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| AutoExpert (Academic) (GPT) |
| --- |
| ![AutoExpert (Academic) (GPT).png](/images/thumb/4/43/AutoExpert_%28Academic%29_%28GPT%29.png/300px-AutoExpert_%28Academic%29_%28GPT%29.png) |
| Information |
| **Name** | AutoExpert (Academic) |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Research & Analysis](/wiki/research_analysis) |
| **Description** | Upon uploading a research paper, I provide a concise analysis covering its authors, key findings, methodology, and relevance. I also critique the work, highlight its strengths, and identify any open questions from a professional perspective. |
| **Developer** | llmimagineers.com |
| **OpenAI URL** | [https://chat.openai.com//g/g-YAgNxPJEq-autoexpert-academic](https://chat.openai.com//g/g-YAgNxPJEq-autoexpert-academic) |
| **Chats** | 27,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**AutoExpert (Academic)** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

## Conversation Starters

- Search for relevant papers on quantum computing

- Analyze this uploaded research paper

- Relevant studies on climate change

- Latest papers on large language models

## Knowledge (Uploaded Files)

## Actions

- **export.arxiv.org JIT Plugin**: This plugin allows me to search for academic papers on arXiv. I can use it to find papers based on specific search queries, including filtering by titles, authors, abstracts, etc. It also lets me retrieve papers based on their arXiv IDs, and I can sort and paginate the search results.

### Website

export.arxiv.org

### Privacy Policy

[https://info.arxiv.org/help/policies/privacy_policy.html](https://info.arxiv.org/help/policies/privacy_policy.html)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.0.0","info":{"title":"arXiv API","version":"1.0.0","description":"API for accessing arXiv's repository of research papers and articles."},"servers":[{"url":"https://export.arxiv.org/api"}],"paths":{"/query":{"get":{"operationId":"queryArxiv","summary":"Search for papers in the arXiv repository.","description":"Allows searching for papers based on a search query, with additional options for filtering and pagination.","parameters":[{"in":"query","name":"search_query","schema":{"type":"string"},"required":false,"description":"The search query string. Used to search for papers based on titles, authors, abstracts, etc."},{"in":"query","name":"id_list","schema":{"type":"string"},"required":false,"description":"A comma-delimited list of arXiv paper IDs to retrieve."},{"in":"query","name":"start","schema":{"type":"integer","default":0},"required":false,"description":"The starting index for the search results, used for pagination."},{"in":"query","name":"max_results","schema":{"type":"integer","default":10},"required":false,"description":"The maximum number of results to return. Default is 10."},{"in":"query","name":"sortBy","schema":{"type":"string","enum":["relevance","lastUpdatedDate","submittedDate"]},"required":false,"description":"Which field should be used to sort the results. Default is relevance."},{"in":"query","name":"sortOrder","schema":{"type":"string","enum":["ascending","descending"]},"required":false,"description":"The sort order. Default is descending."}],"responses":{"200":{"description":"A successful response containing an Atom feed of papers.","content":{"application/atom+xml":{"schema":{"type":"object","properties":{"title":{"type":"string"},"id":{"type":"string"},"updated":{"type":"string","format":"date-time"},"author":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"}}}},"entry":{"type":"array","items":{"$ref":"#/components/schemas/Entry"}}}}}}},"400":{"description":"Bad request, possibly due to invalid query parameters."},"500":{"description":"Internal server error."}}}}},"components":{"schemas":{"Entry":{"type":"object","properties":{"title":{"type":"string"},"id":{"type":"string"},"published":{"type":"string","format":"date-time"},"updated":{"type":"string","format":"date-time"},"summary":{"type":"string"},"author":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"}}}},"link":{"type":"object","properties":{"href":{"type":"string"},"rel":{"type":"string"},"type":{"type":"string"}}}}}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />