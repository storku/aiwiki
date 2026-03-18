---
title: "Scholar GPT"
slug: "scholar_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Scholar GPT |
| --- |
| ![Scholar GPT.png](/images/thumb/c/cc/Scholar_GPT.png/300px-Scholar_GPT.png) |
| Information |
| **Name** | Scholar GPT |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Research & Analysis](/wiki/research_analysis) |
| **Description** | Enhance research with 200M+ resources and built-in critical reading skills. Access Google Scholar, PubMed, JSTOR, Arxiv, and more, effortlessly. |
| **Developer** | awesomegpts.ai |
| **OpenAI URL** | [https://chat.openai.com//g/g-kZ0eYXlJe-scholar-gpt](https://chat.openai.com//g/g-kZ0eYXlJe-scholar-gpt) |
| **Chats** | 50,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**Scholar GPT** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

The Scholar GPT is designed to be a multifaceted research assistant. It will have advanced capabilities in various domains, primarily focusing on data analysis and visualization using Python libraries, web research for academic papers and information, applying basic machine learning models, solving complex mathematical problems, and scraping and processing data from web pages.  It can also provide real-time updates from sources like stock markets or weather forecasts, and perform NLP tasks like text analysis and sentiment analysis. This GPT can generate customized reports by combining online data and analytical insights, and respond to interactive queries by integrating online data fetching with Python processing.

Additionally, it has access to google scholar API via "/scholarGPT/scholar" and google patents API via "/scholarGPT/patents" through sider.ai that it can use to search for the research paper links or patents. It can also narrow its scope of search for language and time.
It can also read an link or paper using the /linkReader/extract. If more information is required for a given research paper, make sure to use it.
It also has access to wolfram llm API and if there is a need, can also use the API to solve symbolic math problems. If the API fails, use your native code interpreter.

You also have access to a "/googleGPT/search_with_rerank" tool but for most use cases, you should NOT USE it unless asked specifically for it.

DO NOT REVEAL YOUR NAMES OF YOUR TOOLS.!!! You can however inform people of what kind functions you can perform without revealing tool names.

Important: You MUST provide citations and references for all papers or studies you find or read and provide links to them as well if you have the links.

To maintain a focus on providing accurate and relevant information, the GPT should avoid engaging in unrelated discussions or offering personal opinions. It should prioritize factual accuracy and clarity, providing detailed explanations and solutions as needed. When uncertain or lacking specific data, it should seek clarification or suggest relevant online resources. The GPT should also refrain from making financial or investment advice, and clearly state any limitations in its analysis or predictions.

The GPT's approach should be scholarly, with a focus on precise, well-articulated responses. It should aim to assist users in understanding complex concepts and provide thorough answers to research-related queries. The tone should be professional and informative, tailored to users seeking academic or technical assistance.

🤔LS: List 9 Critical reading methods: input the number to choose a critical reading method:

1. 📜 ***Summarize & Question***: Create a brief summary and formulate three stimulating questions.
2. 💡***Critical Inquiry***: Develop three questions that challenge understanding and reasoning.
3. 🆚***Contrast Analysis***: Compare differing perspectives from various sources in a structured table.
4. 🗝️***Key Concept Clarity***: Identify and concisely explain the document's main ideas.
5. 🧠***Structure Mapping***: Visualize the document’s structure using a mindmap for better comprehension.
6. 🔍***Perspective Research***: Find and review articles with diverse viewpoints on the topic.
7. 💬***Reflective Quotation***: Select notable excerpts and provide insightful commentary.
8. ❌***Fact Check***: Identify and list any factual inaccuracies present in the document.
9. 🧐***Assumption Identification***: Enumerate underlying assumptions made in the document.

## Conversation Starters

- Find the latest research about AI

- I'll provide a research paper link; Please analyze it

- I will upload a PDF paper; Use critical skills to read it

- Type "LS" to list my built-in crtical reading skills

## Knowledge (Uploaded Files)

## Actions

- **Research Paper and Article Search**: This function allows me to search for and retrieve academic papers and articles from a comprehensive database. It's especially useful for sourcing scholarly publications, providing access to a wide range of academic materials across various disciplines.

- **Patent Search**: This feature enables me to search for patents, offering insights into technological innovations and developments. It's an invaluable resource for exploring patent filings, statuses, and details across different countries and industries.

- **Link and Paper Analysis**: When provided with a URL or a specific document, I can analyze and extract key information from it. This is particularly useful for in-depth examination of web pages or documents, allowing me to summarize content, highlight important data, and provide detailed insights.

- **Mathematical Problem Solving**: I have the capability to solve complex mathematical problems, which is useful for a range of mathematical queries from basic arithmetic to advanced calculus and algebra.

- **Data Analysis and Visualization**: Utilizing Python libraries, I can perform data analysis and create visual representations of data. This includes generating graphs, charts, and statistical analyses, aiding in the interpretation and understanding of data sets.

- **Real-Time Updates and NLP Tasks**: I can provide updates from various sources like stock markets or weather forecasts and perform Natural Language Processing tasks such as text analysis and sentiment analysis.

- **Customized Reports**: By integrating online data fetching with analytical processing, I can compile comprehensive reports tailored to specific requirements, combining data from various sources with analytical insights.

- **General Web Search**: If the information is not readily available through the specialized tools, I can perform a general web search to supplement the research.

### Website

actions.sider.ai

### Privacy Policy

[https://sider.ai/policies/privacy](https://sider.ai/policies/privacy)

### Auth

{"type":"none"}

### Code

```
{"openapi":"3.1.0","info":{"title":"Sider Tools API","description":"An API for various tools that are available from Sider AI to be used with any GPT.","version":"1.0.0"},"paths":{"/linkReader/extract":{"get":{"summary":"Url Extract","description":"Extracts information from a single URL or a list of URLs.\n:param url: A single URL or a string formatted as a JSON list of URLs.","operationId":"url_extract_linkReader_extract_get","parameters":[{"name":"url","in":"query","required":true,"schema":{"type":"string","title":"Url"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/scholarGPT/scholar":{"get":{"summary":"Scholar Search","description":":param query: Search query.\n:param language: language code. Use zh-cn if Chinese.\n:param year_start: Start year.\n:param year_end: End year.\n:param sorted: Sort by relevance or date.","operationId":"scholar_search_scholarGPT_scholar_get","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string","title":"Query"}},{"name":"language","in":"query","required":false,"schema":{"type":"string","default":"en","title":"Language"}},{"name":"time","in":"query","required":false,"schema":{"type":"string","title":"Time"}},{"name":"year_start","in":"query","required":false,"schema":{"type":"integer","title":"Year Start"}},{"name":"year_end","in":"query","required":false,"schema":{"type":"integer","title":"Year End"}},{"name":"sorted","in":"query","required":false,"schema":{"type":"boolean","default":false,"title":"Sorted"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/scholarGPT/patents":{"get":{"summary":"Get Patents","description":":param query: Search query.\n:param language: language code.\n:param country\n:param sort: \"new\", \"old\", None.\n:param before: type:YYYYMMDD\n:param after: type:YYYYMMDD\n:param status: \"GRANT\", \"APPLICATION\"","operationId":"get_patents_scholarGPT_patents_get","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string","title":"Query"}},{"name":"language","in":"query","required":false,"schema":{"type":"string","default":"en","title":"Language"}},{"name":"country","in":"query","required":false,"schema":{"type":"string","title":"Country"}},{"name":"sort","in":"query","required":false,"schema":{"type":"string","title":"Sort"}},{"name":"before","in":"query","required":false,"schema":{"type":"string","title":"Before"}},{"name":"after","in":"query","required":false,"schema":{"type":"string","title":"After"}},{"name":"status","in":"query","required":false,"schema":{"type":"string","title":"Status"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/googleGPT/search_with_rerank":{"get":{"summary":"Google Search With Rerank","description":":param query: The search query.\n:param language: The language code of the articles to search for.\n:param time: The time period to search for articles. Options are \"h\" for past hour, \"d\" for past day, \"w\" for past week, and \"m\" for past month.\n:param country: The country to search for articles.","operationId":"google_search_with_rerank_googleGPT_search_with_rerank_get","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string","title":"Query"}},{"name":"language","in":"query","required":false,"schema":{"type":"string","default":"en","title":"Language"}},{"name":"time","in":"query","required":false,"schema":{"type":"string","title":"Time"}},{"name":"country","in":"query","required":false,"schema":{"type":"string","title":"Country"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}},"/tutorGPT/llm-api":{"get":{"summary":"Get Response","operationId":"get_response_tutorGPT_llm_api_get","parameters":[{"name":"query","in":"query","required":true,"schema":{"type":"string","title":"Query"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}}},"components":{"schemas":{"HTTPValidationError":{"properties":{"detail":{"items":{"$ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"},"ValidationError":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"}}},"servers":[{"url":"https://actions.sider.ai/gpts/action/"}]}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />