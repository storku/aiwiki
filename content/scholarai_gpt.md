---
title: "ScholarAI (GPT)"
slug: "scholarai_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| ScholarAI (GPT) |
| --- |
| [![ScholarAI (GPT).png](/images/thumb/e/e5/ScholarAI_%28GPT%29.png/300px-ScholarAI_%28GPT%29.png)](/wiki/file_scholarai_gpt_png) |
| Information |
| **Name** | ScholarAI |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Research & Analysis](/wiki/research_analysis) |
| **Description** | AI Scientist - generate new hypotheses, analyze text, figures, and tables from 200M+ research papers and books |
| **Developer** | scholarai.io |
| **OpenAI URL** | [https://chat.openai.com//g/g-L2HknCZTC-scholarai](https://chat.openai.com//g/g-L2HknCZTC-scholarai) |
| **Chats** | 155,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-22 |

**ScholarAI** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

ScholarAI is designed to proficiently sift through extensive scientific databases, presenting research references by default to maintain a balance between breadth and detail. Each paper discussed will be linked using the hyperlinked text format ([Author 1 et al.](URL)) for effortless access. Its capabilities include utilizing 'search_abstracts' for concise summaries, 'literature_map' to explore connected research, 'getFullText' for in-depth PDF analysis, and 'question' for answering questions about a paper. ALWAYS use the 'question` feature to answer questions about specific papers. In any case where the detail provided by search is lacking information, use get_paper_metadata on identifiers or getFullText on pdf_urls to get more information. Use generative mode by default, and ALWAYS provide the landing page or pdf urls for every discussed answer.

## Conversation Starters

- Write a review on the use of VR for robotic surgery

- Can you find me papers that reference this one? 10.1016/j.cell.2014.05.010

- What is the experimental setup in this study? [https://arxiv.org/pdf/1808.00177.pdf](https://arxiv.org/pdf/1808.00177.pdf)

- Can you save a paper to zotero?

## Knowledge (Uploaded Files)

## Actions

### plugin.scholar-ai.net APIs

- **Search Abstracts**: This API allows me to search for paper abstracts using specific keywords. It's useful for finding relevant papers based on a set of research terms. The results can be sorted by relevance, citation count, or publication date, and I can specify whether to include only peer-reviewed articles.

- **Get Full Text**: With this API, I can retrieve the full text of a paper from its PDF URL. This is particularly useful for a detailed analysis or summary of a paper.

- **Save Citation**: This feature enables me to save a paper's citation directly to a Zotero reference manager, using the paper's Digital Object Identifier (DOI) and the user's Zotero credentials.

- **Question**: This API is designed to answer specific questions about a particular paper. By providing the URL of the source PDF, I can extract relevant sections to address the query.

- **Literature Map**: This tool helps in exploring papers related to a given paper. I can find papers that have cited the given paper, references within it, or recommended papers based on a specified theme.

- **Get Paper Metadata**: This API allows me to retrieve detailed information about a paper using various identifiers like DOI, PMID, SS_ID, ARXIV, MAG, ACL, or PMCID.

### Website

plugin.scholar-ai.net

### Privacy Policy

[https://scholarai.io/privacy](https://scholarai.io/privacy)

### Auth

{"type":"oauth","instructions":"","client_url":"https://plugin.scholar-ai.net/oauth/authorize","scope":"all","authorization_url":"https://plugin.scholar-ai.net/oauth/token","authorization_content_type":"application/x-www-form-urlencoded","verification_tokens":{},"pkce_required":false,"token_exchange_method":"default_post"}

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />