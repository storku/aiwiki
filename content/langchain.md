---
title: "LangChain"
slug: "langchain"
categories:
  - "Stubs"
  - "Prompt_engineering"
  - "Libraries"
  - "Frameworks"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=LangChain&action=edit).* 

*See also: [Prompt engineering](/wiki/prompt_engineering) and [Prompt engineering for text generation](/wiki/prompt_engineering_for_text_generation)*
![Langchain1.png](/images/thumb/3/33/Langchain1.png/300px-Langchain1.png)

## Introduction

LangChain is a versatile framework designed to facilitate the development of applications powered by language models. It is available as both a Python and TypeScript package. The framework's primary objectives are to enable data-aware and agentic language model applications that can connect with external data sources and interact with their environment. To achieve these goals, LangChain provides developers with an array of modular components and pre-built chains and agents.

## Components

LangChain's comprehensive set of components enables developers to easily build applications utilizing language models. These abstractions and implementations are mostly driven by a thriving community, with more than 300 contributors to the Python repository alone.

### Model Integrations

LangChain boasts integrations with over 20 different model providers or hosting platforms, ensuring compatibility with a wide range of language models.

### Document Loaders

The framework includes a collection of more than 50 Document Loaders, allowing developers to easily load data from various sources.

### Text Splitting Methods

LangChain provides over 10 methods for dividing text data into manageable chunks, making it simpler for language models to process and utilize the data.

### Vector Database Integrations

The framework features integrations with more than 10 different vector databases, further enhancing its compatibility and utility.

### Language Model Tools

LangChain offers a collection of over 15 different tools that facilitate the use of language models in various applications.

## Pre-built Chains and Agents

LangChain not only provides an intuitive high-level interface for developers to create custom chains and agents, but also includes numerous pre-built chains and agents that can be employed directly.

### Chains

Chains enable developers to assemble components in a specific order to perform particular tasks, such as summarizing a large PDF document or querying a SQL database. LangChain features implementations of approximately 20 different chains, catering to diverse needs and applications.

### Agents

Agents can be thought of as "dynamic chains" where the sequence of steps is determined by a language model in real-time. LangChain includes implementations of six generic agent types, designed specifically to utilize tools and interact with external environments.

### Agent Toolkits

In addition to generic agent types, LangChain provides seven distinct "Agent Toolkits." Each toolkit equips agents with a specialized set of tools to accomplish specific tasks, further enhancing the framework's adaptability and functionality in language model applications.