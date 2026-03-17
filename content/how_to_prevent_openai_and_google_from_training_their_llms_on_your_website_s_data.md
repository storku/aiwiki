---
title: "How to Prevent OpenAI and Google From Training Their LLMs on Your Website's Data"
slug: "how_to_prevent_openai_and_google_from_training_their_llms_on_your_website_s_data"
categories:
  - "Guides"
---*See also: [Guides](/wiki/guides)*
You can prevent [OpenAI](/wiki/openai) and [Google](/index.php?title=Google&action=edit&redlink=1) from training your [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) ([LLMs](/wiki/llms)) on your website's data, content or information by adding these 4 lines to your website's *robot.txt* file:

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

The first 2 lines prevent [OpenAI](/wiki/openai)'s [models](/wiki/models) like [ChatGPT](/wiki/chatgpt), [GPT-4](/wiki/gpt-4), [GPT-5](/index.php?title=GPT-5&action=edit&redlink=1) from training on your website's content.

The last 2 lines prevent [Google](/index.php?title=Google&action=edit&redlink=1)'s [models](/wiki/models) like [Bard](/wiki/bard), [Gemini](/index.php?title=Gemini&action=edit&redlink=1) from training on your website's content.

The code above blocks the [models](/wiki/models) from using your data for the entire website. If you only want to block the models from specific sections or directories of your website, you can do this:

```
User-agent: GPTBot
Disallow: /name-of-the-section

User-agent: Google-Extended
Disallow: /name-of-the-section

```