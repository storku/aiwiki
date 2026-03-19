---
title: "AI search engine"
slug: "ai_search_engine"
categories: ["Artificial_intelligence", "Search_engines", "Applications"]
---

**AI search engines** are information retrieval systems that use [large language models](/wiki/llm) (LLMs) and other [artificial intelligence](/wiki/artificial_intelligence) techniques to generate direct, synthesized answers to user queries rather than returning a simple list of web links. Unlike traditional search engines, which rely primarily on keyword matching and link-based ranking algorithms, AI search engines interpret the intent behind a query, retrieve relevant information from multiple sources, and present a coherent, natural-language response, often with inline citations. The category includes both standalone "answer engines" like Perplexity AI and AI features integrated into existing search platforms, such as Google AI Overviews and Microsoft Copilot Search. The global AI search engine market was valued at approximately $15.2 billion in 2024 and is projected to reach $41.6 billion by 2033, growing at a compound annual growth rate of 11.2%.

## How AI search differs from traditional search

Traditional search engines, pioneered by Google in the late 1990s, use crawlers to index web pages and ranking algorithms (such as PageRank) to order results by relevance and authority. Users receive a list of blue links and must click through to individual pages to find the information they need. This model has dominated the web for over two decades.

AI-powered search changes this interaction model in several ways:

| Feature | Traditional Search | AI Search |
|---------|-------------------|-----------|
| Output format | List of ranked web links | Synthesized natural-language answer |
| User interaction | Click through to websites to find answers | Answer displayed directly; follow-up questions possible |
| Query handling | Keyword matching and link analysis | Semantic understanding of query intent |
| Source attribution | Links displayed as results | Inline citations within generated answer |
| Conversational follow-up | New search required for each query | Multi-turn conversation supported |
| Personalization | Based on search history and location | Based on conversation context and user preferences |

The core technology behind AI search involves several components. First, the system uses a retrieval mechanism (often called retrieval-augmented generation, or [RAG](/wiki/retrieval_augmented_generation)) to find relevant web pages, documents, or data sources. The retrieved content is then processed by a large language model that synthesizes the information into a coherent response. Citation mechanisms link claims in the response back to their source documents.

This approach has trade-offs. AI search reduces the effort required to find answers, particularly for complex or multi-faceted questions. However, it also introduces risks of hallucination (generating plausible but incorrect information), reduces user exposure to diverse sources, and diverts traffic away from the websites whose content feeds the AI's answers.

## Major AI search platforms

### Perplexity AI

Perplexity AI is the most prominent standalone AI search engine. It was founded in August 2022 by Aravind Srinivas (CEO), Denis Yarats, Johnny Ho, and Andy Konwinski. The platform launched its main search product on December 7, 2022, positioning itself as an "answer engine" rather than a traditional search engine.

Perplexity's core product takes a user's question, searches the web in real time, and generates a concise, cited answer. Each response includes numbered inline citations that link back to the source material, allowing users to verify claims. The system supports follow-up questions, maintaining conversational context.

#### Growth and funding

Perplexity has experienced rapid growth since its launch:

| Date | Milestone |
|------|-----------|
| April 2024 | Raised $165 million; valuation exceeded $1 billion |
| Late 2024 | Annual recurring revenue (ARR) reached $80 million |
| May 2025 | Processed 780 million queries monthly (approximately 30 million daily), with 20%+ month-over-month growth |
| June 2025 | Raised $500 million; valuation reached $14 billion |
| Early 2026 | ARR estimated at $200 million; valuation reached $21.21 billion (Series E-6 round) |

The platform experienced approximately 450% growth between 2024 and early 2026. By 2025, Perplexity held roughly 6.5% of the generative AI chatbot market share (up from 2.7% in early 2024), ranking as the fourth-largest AI chatbot behind [ChatGPT](/wiki/chatgpt), Microsoft Copilot, and Google Gemini.

#### Key features

Perplexity offers several product tiers and features:

- **Pro Search**: A deep research mode that performs more thorough searches and produces detailed, multi-source answers.
- **Spaces**: Organizational tools for managing research projects and saved queries.
- **Deep Research**: Launched in January 2025, this feature scans multiple sources to produce comprehensive research reports.
- **Perplexity Assistant**: Introduced in January 2025, a mobile AI assistant that can perform tasks across apps and use a phone's camera to answer questions about the user's surroundings.
- **Finance features**: Introduced in October 2024, including real-time stock quotes, company earnings data, and price tracking.

#### Comet browser

In July 2025, Perplexity launched Comet, an AI-powered web browser built on Chromium. The browser includes a sidecar AI assistant that can summarize web pages, answer questions about content, manage browsing tasks, and navigate pages on the user's behalf. Additional tools include Discover (personalized content recommendations), Shopping (price comparison across retailers), Travel (aggregated travel information), Finance (budgeting and investment tracking), and Sports (scores and schedules). Comet was made available for free in October 2025 and later launched on Android (November 2025) and iOS (March 2026). An enterprise version, Comet Enterprise, was also introduced for corporate deployments.

#### Business model evolution

Perplexity's approach to monetization has shifted over time. The company offers a free tier alongside paid subscriptions: Pro at $20/month and Max at $200/month (launched July 2025). In 2024, Perplexity experimented briefly with advertising, but this generated only approximately $20,000 in ad revenue out of $34 million in total revenue that year. In February 2026, Perplexity discontinued its advertising program entirely, stating the decision was intended to "preserve user trust" by prioritizing objective results over ad revenue.

On the publisher side, Perplexity has established a revenue-sharing program. Subscription revenue is pooled, with Perplexity keeping 20% and distributing the remaining 80% to participating publishers. Through its Comet Plus subscription, Perplexity opened a $42.5 million pool for publishers.

#### Controversies with publishers

Perplexity has faced significant criticism from publishers over its handling of web content. The New York Times sent the company a cease-and-desist letter. Forbes accused Perplexity of stealing its reporting. Wired accused the company of illicitly scraping its site, and separate investigations by Wired and web developer Robb Knight found that Perplexity did not respect the robots.txt standard and used undisclosed IP addresses and spoofed user agent strings to circumvent access restrictions. In August 2025, Japan's Yomiuri Shimbun sued Perplexity for $15 million for "free-riding" on its content.

In response, Perplexity established revenue-sharing agreements with publishers including Time, Fortune, and the Los Angeles Times.

### OpenAI: SearchGPT and ChatGPT Search

[OpenAI](/wiki/openai) entered the search market with SearchGPT, announced on July 25, 2024, as a prototype separate from ChatGPT. The tool was initially available only to a limited number of users.

On October 31, 2024, OpenAI integrated the search capability directly into ChatGPT under the name "ChatGPT Search." The feature was initially limited to paying subscribers (ChatGPT Plus and Team users). Access expanded to all logged-in users on December 16, 2024, and then to everyone (no signup required) on February 5, 2025.

ChatGPT Search provides real-time web search results within conversations. Users can get up-to-the-minute sports scores, stock quotes, news, weather, and other timely information. The feature is powered by real-time web indexing and partnerships with news and data providers. ChatGPT Search can also be set as the default search engine in any web browser, directly competing with Google's position in browser search bars.

Key characteristics of ChatGPT Search:

- Integrated directly into the ChatGPT conversational interface
- Provides inline citations linking to source websites
- Supports follow-up questions within the same conversation
- Available across web, iOS, and Android platforms
- Partnership-based approach to news and data sourcing

### Google AI Overviews (formerly SGE)

Google's AI search offering evolved from Search Generative Experience (SGE), an experimental feature available through Google Search Labs, to AI Overviews, which launched publicly on May 14, 2024. AI Overviews appear as AI-generated summaries directly at the top of search results pages, providing synthesized answers to user queries before the traditional list of blue links.

AI Overviews are powered by Google's [Gemini](/wiki/gemini) language model. The feature has expanded steadily:

| Date | Expansion |
|------|-----------|
| May 2024 | Launched publicly in the United States (renamed from SGE to AI Overviews) |
| October 2024 | Rolled out to over 100 countries and territories; no longer requires Search Labs access |
| May 2025 | Expanded to over 200 countries and territories and more than 40 languages (announced at Google I/O 2025) |

The frequency of AI Overviews appearing in search results has fluctuated. By August 2024, they appeared in about 12.5% of desktop searches. This rose to approximately 19% in November 2024 and about 30% of keywords by May 2025.

Google's approach differs from standalone AI search engines in that AI Overviews are layered on top of the existing search results page rather than replacing it. Users still see traditional search results below the AI-generated summary. However, the placement of AI Overviews at the top of the page has had measurable effects on user behavior and web traffic (discussed below).

### Microsoft Bing Chat and Copilot

Microsoft was the first major search engine to integrate generative AI into search results, launching the "new Bing" powered by [OpenAI](/wiki/openai)'s GPT-4 on February 7, 2023. The chat-based search interface, initially called Bing Chat, allowed users to have conversational interactions with an AI while receiving web search results and citations.

In late 2023, Microsoft rebranded the AI chat functionality as Microsoft Copilot, integrating it across its product suite (including Microsoft 365, Edge, and Windows). In February 2025, Microsoft began testing "Copilot Search" within Bing, which blends traditional search results with AI-generated answers. This feature formally launched in April 2025 and was rolled out broadly to compete with Google's AI Mode.

Copilot Search produces responses with prominent, clickable citations and aggregated source lists. Users can toggle between a traditional search experience and the AI-enhanced view. The system is available through Bing.com, the Copilot app (iOS and Android), and the Edge browser.

Microsoft's AI search strategy is tightly coupled with its partnership with OpenAI and its broader Copilot ecosystem, which extends AI assistance into productivity tools, coding environments, and enterprise applications.

### You.com

You.com is an AI search startup founded in 2020 by Richard Socher (former Chief Scientist at Salesforce) and Bryan McCann (former Lead Research Scientist in NLP at Salesforce). The company has evolved significantly from its origins as a consumer search engine.

In February 2025, You.com launched ARI (Advanced Research and Insights), a deep research agent that scans over 400 sources simultaneously and produces research reports with verified citations, interactive graphs, charts, and visualizations. ARI was named one of TIME's Best Inventions of 2025.

You.com has increasingly pivoted toward enterprise and developer customers. Its Web Search API provides enterprise-grade search infrastructure with 99.9% uptime, processing over one billion queries monthly. The API is model-agnostic, meaning developers can integrate it with any LLM. You.com's architecture is composable, allowing clients to optimize for speed, accuracy, or cost depending on their use case.

You.com also offers a Chrome extension that embeds AI-generated answers with citations alongside Google search results, letting users access both traditional and AI-powered search in parallel.

### Other notable AI search tools

| Platform | Developer | Launched | Key Characteristics |
|----------|-----------|----------|-------------------|
| [Perplexity AI](/wiki/ai_search_engine#perplexity-ai) | Perplexity AI Inc. | December 2022 | Standalone answer engine with citations |
| [ChatGPT Search](/wiki/chatgpt) | [OpenAI](/wiki/openai) | October 2024 | Integrated into ChatGPT; real-time web search |
| [Google AI Overviews](/wiki/ai_search_engine#google-ai-overviews-formerly-sge) | [Google](/wiki/google) | May 2024 | AI summaries on top of traditional search results |
| [Copilot Search](/wiki/ai_search_engine#microsoft-bing-chat-and-copilot) | [Microsoft](/wiki/microsoft) | April 2025 | Blends traditional Bing results with AI answers |
| You.com ARI | You.com | February 2025 | Deep research agent with 400+ source scanning |
| Brave Search (with Leo AI) | Brave Software | 2024 | Privacy-focused browser with integrated AI answers |
| Kagi | Kagi Inc. | 2023 | Paid, ad-free search with optional AI summaries |
| Arc Search | The Browser Company | 2024 | Mobile browser that generates "browse for me" summaries |

## Impact on publishers and web traffic

The rise of AI search has had a measurable and, for many publishers, alarming effect on web traffic. Because AI search engines synthesize answers directly in the search interface, users have less reason to click through to the original source websites.

### Traffic decline data

The data on traffic declines is striking:

- 60% of Google searches now end without any click to a website, up from 58% in 2024.
- Page views from Google Search fell 34% from December 2024 to December 2025, according to Press Gazette's analysis.
- When AI Overviews appear, click-through rates (CTR) fall by approximately 35%. Top-ranking pages displaced by AI Overviews can lose up to 79% of their traffic.
- A Pew Research Center study found that users clicked on results 8% of the time when AI summaries appeared, compared to 15% without them, a 46.7% relative reduction.

Individual publishers have experienced severe declines. Forbes saw a 50% traffic drop year-over-year in July 2025. Business Insider's traffic fell between 40% and 48%. CNN experienced a decline between 27% and 38%, falling from roughly 440 million visits in 2024 to approximately 311-323 million by mid-2025.

### Disproportionate impact on smaller publishers

The traffic losses are not evenly distributed. Over the past two years, referral traffic from traditional search engines has declined by 60% for small publishers, compared with 47% for medium-sized publishers and 22% for large publishers. Smaller publishers, which are more dependent on search-driven traffic and have less brand recognition to drive direct visits, are disproportionately affected.

NPR described the situation as a potential "extinction-level event" for online news publishers. The concern is that as AI search engines consume and repackage content from publisher websites, the economic model that sustains online journalism and content creation (advertising revenue driven by web traffic) is being undermined.

### Publisher responses

Publishers have responded to the traffic declines through several strategies:

- **Legal action**: Publishers including News Corp. and The New York Times have filed lawsuits against AI companies for unauthorized use of their content.
- **Licensing deals**: Some publishers have negotiated licensing agreements with AI companies. For example, Perplexity has revenue-sharing agreements with Time, Fortune, and the Los Angeles Times.
- **Blocking crawlers**: Some publishers have updated their robots.txt files to block AI company crawlers, though investigations have shown that not all AI companies respect these restrictions.
- **Direct relationships**: Publishers are investing in newsletters, apps, and other direct channels to build audience relationships that are less dependent on search engine referral traffic.

## Business models

AI search companies use various approaches to monetization:

| Company | Primary Revenue Model | Secondary Revenue | Notes |
|---------|----------------------|-------------------|-------|
| Google | Advertising (AI Overviews alongside ads) | Cloud services | AI Overviews are integrated into the ad-supported search results page |
| Perplexity AI | Subscriptions ($20-$200/month) | Publisher revenue sharing | Discontinued advertising in February 2026 |
| OpenAI (ChatGPT Search) | Subscriptions (ChatGPT Plus at $20/month) | API licensing; enterprise | ChatGPT Search is part of the broader ChatGPT subscription |
| Microsoft (Copilot) | Enterprise licensing (Microsoft 365 Copilot) | Bing advertising | Copilot is bundled with Microsoft 365 subscriptions |
| You.com | Enterprise API licensing | Developer tools | Pivoted away from consumer search toward B2B |

Revenue projections vary widely. ChatGPT (including its search features) was projected to generate approximately $3.4 billion in 2024, potentially crossing $6 billion by 2026. Microsoft Copilot was expected to reach $1 billion as Office 365 users adopt Copilot features.

The fundamental tension in AI search business models is between providing users with direct answers (which reduces the need to visit websites) and maintaining a healthy web ecosystem that produces the content AI systems rely on. If AI search dramatically reduces traffic to publishers, and publishers respond by producing less content or restricting access, the quality of AI-generated answers could eventually suffer.

## Market dynamics and competition

### Current market share

Despite the rapid growth of AI search, traditional search still dominates. Google holds approximately 89-91% of global search market share, Bing holds about 4%, and AI-native tools collectively account for less than 5% of all search queries. However, AI search is growing much faster than traditional search. BrightEdge research reported that AI search visits surged in 2025, though organic search remained the primary driver of web traffic overall.

### Competitive dynamics

The AI search market is being shaped by two distinct types of players:

1. **Established tech giants** (Google, Microsoft) are integrating AI into their existing search products, leveraging their massive user bases, data assets, and advertising infrastructure.
2. **AI-native startups** (Perplexity, You.com) are building search experiences from scratch around AI capabilities, attempting to capture users dissatisfied with traditional search.

Google's advantage lies in its dominance of the existing search market, its proprietary Gemini models, and its ability to layer AI Overviews on top of trillions of indexed pages. Microsoft's advantage comes from its partnership with OpenAI and its enterprise distribution through Microsoft 365. Perplexity's advantage is its focused, ad-free (since 2026) approach and its reputation for citation quality.

### Convergence of search and chat

A broader trend is the convergence of "search" and "chat" into a single interaction model. Rather than AI replacing traditional search, the two are merging. Google's AI Overviews blend AI answers with traditional results. Microsoft's Copilot Search lets users toggle between modes. ChatGPT's search feature adds web retrieval to a conversational AI. The distinction between a search engine and a chatbot is becoming increasingly blurred, and the next generation of information retrieval may not clearly fit into either category.

## See also

- [Large language model](/wiki/llm)
- [Artificial intelligence](/wiki/artificial_intelligence)
- [Retrieval augmented generation](/wiki/retrieval_augmented_generation)
- [ChatGPT](/wiki/chatgpt)
- [OpenAI](/wiki/openai)
- [Google](/wiki/google)
- [Microsoft](/wiki/microsoft)
- [Generative AI](/wiki/generative_ai)
- [Natural language processing](/wiki/natural_language_processing)
- [Transformer](/wiki/transformer)

## References

1. "Perplexity AI." Wikipedia. [https://en.wikipedia.org/wiki/Perplexity_AI](https://en.wikipedia.org/wiki/Perplexity_AI)
2. "60 Perplexity AI Statistics 2026." SEOProfy. [https://seoprofy.com/blog/perplexity-ai-statistics/](https://seoprofy.com/blog/perplexity-ai-statistics/)
3. "Perplexity AI 2026 statistics: analysis and SEO impact." Incremys. [https://www.incremys.com/en/resources/blog/perplexity-statistics](https://www.incremys.com/en/resources/blog/perplexity-statistics)
4. "Introducing ChatGPT search." OpenAI. [https://openai.com/index/introducing-chatgpt-search/](https://openai.com/index/introducing-chatgpt-search/)
5. "OpenAI brings its AI-powered web search tool to more ChatGPT users." TechCrunch. [https://techcrunch.com/2024/12/16/openai-brings-its-ai-powered-web-search-tool-to-more-chatgpt-users/](https://techcrunch.com/2024/12/16/openai-brings-its-ai-powered-web-search-tool-to-more-chatgpt-users/)
6. "Google AI Overviews explained: Updates and changes from SGE to now." SE Ranking. [https://seranking.com/blog/ai-overviews/](https://seranking.com/blog/ai-overviews/)
7. "Google I/O 2024: New generative AI experiences in Search." Google Blog. [https://blog.google/products-and-platforms/products/search/generative-ai-google-search-may-2024/](https://blog.google/products-and-platforms/products/search/generative-ai-google-search-may-2024/)
8. "Introducing Copilot Search in Bing." Bing Search Blog. [https://blogs.bing.com/search/April-2025/Introducing-Copilot-Search-in-Bing](https://blogs.bing.com/search/April-2025/Introducing-Copilot-Search-in-Bing)
9. "Bringing the best of AI search to Copilot." Microsoft Copilot Blog. [https://www.microsoft.com/en-us/microsoft-copilot/blog/2025/11/07/bringing-the-best-of-ai-search-to-copilot/](https://www.microsoft.com/en-us/microsoft-copilot/blog/2025/11/07/bringing-the-best-of-ai-search-to-copilot/)
10. "You.com." Wikipedia. [https://en.wikipedia.org/wiki/You.com](https://en.wikipedia.org/wiki/You.com)
11. "AI Search Industry Report 2025: Key Trends & Market Insights." Omnius. [https://www.omnius.so/blog/ai-search-industry-report](https://www.omnius.so/blog/ai-search-industry-report)
12. "The AI Search Reckoning Is Dismantling Open Web Traffic." AdExchanger. [https://www.adexchanger.com/publishers/the-ai-search-reckoning-is-dismantling-open-web-traffic-and-publishers-may-never-recover/](https://www.adexchanger.com/publishers/the-ai-search-reckoning-is-dismantling-open-web-traffic-and-publishers-may-never-recover/)
13. "Global publisher Google traffic dropped by a third in 2025." Press Gazette. [https://pressgazette.co.uk/media-audience-and-business-data/google-traffic-down-2025-trends-report-2026/](https://pressgazette.co.uk/media-audience-and-business-data/google-traffic-down-2025-trends-report-2026/)
14. "Online news publishers face 'extinction-level event' from Google's AI-powered search." NPR. [https://www.npr.org/2025/07/31/nx-s1-5484118/google-ai-overview-online-publishers](https://www.npr.org/2025/07/31/nx-s1-5484118/google-ai-overview-online-publishers)
15. "Exclusive: Small publishers hit hardest by search traffic declines." Axios. [https://www.axios.com/2026/03/17/chartbeat-search-traffic-ai-chatbots](https://www.axios.com/2026/03/17/chartbeat-search-traffic-ai-chatbots)
16. "How Perplexity's new revenue model works." Digiday. [https://digiday.com/media/how-perplexity-new-revenue-model-works-according-to-its-head-of-publisher-partnerships/](https://digiday.com/media/how-perplexity-new-revenue-model-works-according-to-its-head-of-publisher-partnerships/)
17. "Perplexity AI will share revenue with publishers after plagiarism accusations." CNBC. [https://www.cnbc.com/2024/07/30/perplexity-ai-to-share-revenue-with-publishers-after-plagiarism-accusations.html](https://www.cnbc.com/2024/07/30/perplexity-ai-to-share-revenue-with-publishers-after-plagiarism-accusations.html)
18. "Perplexity pulls the plug on ads, citing trust concerns for AI." Campaign US. [https://www.campaignlive.com/article/perplexity-pulls-plug-ads-citing-trust-concerns-ai/1949142](https://www.campaignlive.com/article/perplexity-pulls-plug-ads-citing-trust-concerns-ai/1949142)
19. "Comet (browser)." Wikipedia. [https://en.wikipedia.org/wiki/Comet_(browser)](https://en.wikipedia.org/wiki/Comet_(browser))
20. "SearchGPT Prototype." OpenAI. [https://openai.com/index/searchgpt-prototype/](https://openai.com/index/searchgpt-prototype/)
21. "AI Search Engines Market 2025-2033." Business Research Insights. [https://www.businessresearchinsights.com/market-reports/ai-search-engines-market-121601](https://www.businessresearchinsights.com/market-reports/ai-search-engines-market-121601)
22. "Google AI Overviews Research: 2024 Recap & 2025 Outlook." SE Ranking. [https://seranking.com/blog/ai-overviews-2024-recap-research/](https://seranking.com/blog/ai-overviews-2024-recap-research/)
23. "Reinventing search with a new AI-powered Microsoft Bing and Edge." Microsoft Blog. [https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/)
