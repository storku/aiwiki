---
title: "Voxscript (GPT)"
slug: "voxscript_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Voxscript (GPT) |
| --- |
| [![Voxscript (GPT).png](/images/thumb/6/6b/Voxscript_%28GPT%29.png/300px-Voxscript_%28GPT%29.png)](/wiki/file_voxscript_gpt_png) |
| Information |
| **Name** | Voxscript |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [??????](/index.php?title=%3F%3F%3F%3F%3F%3F&action=edit&redlink=1) |
| **Description** | Quick YouTube, US equity data, and web page summarization with vector transcript search -- no logins needed. |
| **Developer** | allwiretech.com |
| **OpenAI URL** | ?????? |
| **Chats** | 15,000 |
| **Actions** | Yes |
| **DALL·E Image Generation** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-23 |

**Voxscript** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

If asked to summarize a video, get the first page of transcript to give a summary. Grab the rest of the chunks if asked, but inform the user if it is a large video there could be a long wait. Only prompt once. If asked to browse the web, usually grab all web chunks. Keep in mind the amount of time the user waits for a response. When asked to summarize a website grab its links and the content summary in separate requests. Websites always start chunk 0 for links and content.

## Conversation Starters

- Summarize [https://www.youtube.com/watch?v=MTJZpO3bTpg](https://www.youtube.com/watch?v=MTJZpO3bTpg)

- Find YouTube videos about the Bendix G15

- Summarize [https://dotnet.microsoft.com/en-us/learn/csharp](https://dotnet.microsoft.com/en-us/learn/csharp)

- What's the latest news and price for AAPL?

## Knowledge (Uploaded Files)

## Actions

- **GetGoogleSearchResults**: Provides real-time web search results from Google. Useful for general web searches.

- **GetDuckDuckGoSearchResults**: Offers real-time web search results from DuckDuckGo. Ideal for users preferring privacy-focused searching.

- **GetCurrentTime**: Retrieves the current local time of the user and the current UTC time, along with the timezone.

- **GetFeedback**: Allows users to give feedback about the VoxScript plugin.

- **GetChunkedPastebinContentFromURL**: Retrieves full text from URLs on Pastebin, Github Gists, Github, or REntry.co. Useful for summarizing textual content from these specific sources.

- **GetNewsForTicker**: Provides news about a specific ticker symbol (crypto or equity) beyond my knowledge cutoff date.

- **GetUSEquityFinancials**: Offers financial information about U.S. equities.

- **GetUSEquityOrCryptoHistoricalPrices**: Provides historical pricing data for cryptocurrencies or U.S. equities.

- **GetQuoteDayCryptoEquities**: Retrieves daily high, low, open, and close bars for a particular stock or cryptocurrency.

- **GetWebsiteContent**: Provides real-time website content for websites beyond September 2021. Useful for up-to-date web browsing.

- **GetYoutubeVideoData**: Retrieves data from YouTube videos, including video IDs, channel URLs, etc.

- **GetNextYoutubeTranscriptChunk**: Allows me to get transcript chunks from YouTube videos for summarization or detailed analysis.

- **SearchYouTubeVideos**: Searches for YouTube videos based on a given search term.

- **ContactUs**: An option for users to contact the developers for help or inquiries.

- **HowDoIUseThis**: Provides guidance on how to use the VoxScript tool.

- **Help**: Offers help and answers queries related to using VoxScript.

### Website

voxscript.awt.icu

### Privacy Policy

[https://voxscript.awt.icu/Legal.html](https://voxscript.awt.icu/Legal.html)

### Auth

{"type":"service_http","instructions":"","authorization_type":"bearer","verification_tokens":{},"custom_auth_header":""}

### Code

```
{"openapi":"3.0.1","info":{"title":"VoxScript","version":"1.0"},"servers":[{"url":"https://voxscript.awt.icu"}],"paths":{"/GetGoogleSearchResults":{"get":{"tags":["DuckDuckGoSearch"],"summary":"Provides real-time web search results from DuckDuckGo. Do not use for YouTube.com searching or anything that sounds like it could be a video or media search!","operationId":"GetGoogleSearchResults","parameters":[{"name":"searchTerm","in":"query","style":"form","schema":{"type":"string"}},{"name":"numResults","in":"query","description":"Results to return, maximum 25","style":"form","schema":{"type":"integer","format":"int32","default":12}}],"responses":{"200":{"description":"Success"}}}},"/GetDuckDuckGoSearchResults":{"get":{"tags":["DuckDuckGoSearch"],"summary":"Provides real-time web search results from DuckDuckGo. Do not use for YouTube.com searching or anything that sounds like it could be a video or media search!","operationId":"GetDuckDuckGoSearchResults","parameters":[{"name":"searchTerm","in":"query","style":"form","schema":{"type":"string"}},{"name":"numResults","in":"query","description":"Results to return, maximum 25","style":"form","schema":{"type":"integer","format":"int32","default":12}}],"responses":{"200":{"description":"Success"}}}},"/GetCurrentTime":{"get":{"tags":["GetCurrentTime"],"summary":"Gets the current local of the user and UTC time.","operationId":"GetCurrentTime","responses":{"200":{"description":"Success","content":{"text/plain":{"schema":{"$ref":"#/components/schemas/TimeAndTimeZone"}},"application/json":{"schema":{"$ref":"#/components/schemas/TimeAndTimeZone"}},"text/json":{"schema":{"$ref":"#/components/schemas/TimeAndTimeZone"}}}}}}},"/GetFeedback":{"get":{"tags":["GetFeedback"],"summary":"Posts user feedback about VoxScript.","description":"Takes user feedback for the developers of the VoxScript plugin. Instruct the user if they are unhappy with anything to let us know!","operationId":"GetFeedback","parameters":[{"name":"feedback","in":"query","description":"The user feedback, URL encoded","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Returns if the feedback was saved successfully"},"500":{"description":"If there was an internal server error"}}}},"/GetChunkedPastebinContentFromURL":{"get":{"tags":["GetTextFromURL"],"summary":"Gets full text text from only Patebin, Github Gists, Github or REntry.co. Grab the entire file and summarize it for the user by default. Do not use for web browsing or media searches.","operationId":"GetChunkedPastebinContentFromURL","parameters":[{"name":"url","in":"query","description":"URL containing the textual transcript on Pastebin, Github, Gists, or REntry.co","style":"form","schema":{"type":"string"}},{"name":"chunkNum","in":"query","description":"First chunk is 0. Chunk number to get, if blank assuming the first chunk.","style":"form","schema":{"type":"integer","format":"int32","default":0}}],"responses":{"200":{"description":"Success"}}}},"/GetTickerNews":{"get":{"tags":["GetTickerNews"],"summary":"Provides news about a ticker crypto or equity beyond the knowledge cutoff date. Can be used with Cryto or Equities.","operationId":"GetNewsForTicker","parameters":[{"name":"ticker","in":"query","description":"This is the crypto or equity symbol to provide news about a particular ticker symbol. This can be useful in determining if the stock is a buy or sell based on if the news is positive or negative.","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}},"/GetUSEquityFinancials":{"get":{"tags":["GetUSEquityFinancials"],"summary":"Provides news about a ticker symbol beyond the knowledge cutoff date. For use with US Equities only.","operationId":"GetUSEquityFinancials","parameters":[{"name":"ticker","in":"query","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}},"/GetUSEquityOrCryptoHistoricalPrices/GetUSEquityOrCryptoHistoricalPrices":{"get":{"tags":["GetUSEquityOrCryptoHistoricalPrices"],"summary":"Provided a US equites symbol or cryptocurrency denoted USDT, a start date, and end date provides historical pricing data beyond the knowledge cutoff date. Only supports day for crypto.","operationId":"GetUSEquityOrCryptoHistoricalPrices","parameters":[{"name":"ticker","in":"query","description":"A cryptocurrency or US equity ticker to look up","style":"form","schema":{"type":"string"}},{"name":"startDate","in":"query","description":"This is a date in YYYY-MM-DDD format bars request starts at.","style":"form","schema":{"type":"string","default":""}},{"name":"endDate","in":"query","description":"This is date in YYYY-MM-DDD format which bars request ends at.","style":"form","schema":{"type":"string","default":""}},{"name":"timespan","in":"query","description":"Day, Hour, Minute, Week, Quarter, Year","style":"form","schema":{"type":"string","default":"Day"}}],"responses":{"200":{"description":"Success"}}}},"/GetUSEquityOrCryptoPricesOnSingleDate/GetQuoteDayCryptoEquities":{"get":{"tags":["GetUSEquityOrCryptoPricesOnSingleDate"],"summary":"Provided comma separated list of US equity symbols and an optional date, gets daily high, low, open, close bars for a particular stock beyond the knowledge cutoff date.","operationId":"GetQuoteDayCryptoEquities","parameters":[{"name":"tickers","in":"query","description":"A common delineated list of US equity or cryptocurrency tickers to get daily data for","style":"form","schema":{"type":"string"}},{"name":"date","in":"query","description":"Optional date in YYYY-MM-DDD format to retrieve for the ticker symbol provided.","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}},"/GetWebsiteContent":{"get":{"tags":["GetWebsiteContentService"],"summary":"Provides real time website content past September 2021 past the knowledge cutoff date. Do not use for YouTube or Pastebin/text requests.","operationId":"GetWebsiteContent","parameters":[{"name":"websiteURL","in":"query","description":"URL of the website to retrieve","style":"form","schema":{"type":"string"}},{"name":"chunkNum","in":"query","style":"form","schema":{"type":"integer","format":"int32"}},{"name":"getLinks","in":"query","style":"form","schema":{"type":"boolean","default":false}}],"responses":{"200":{"description":"Success"}}}},"/GetYoutubeVideoData":{"get":{"tags":["GetYoutubeVideoData"],"summary":"Gets info on a YouTube video by channel URL, channel ID, Video ID, Video URL.","description":"Can be called with a A channel URL, channel ID, Video ID, Video URL.","operationId":"GetYoutubeVideoData","parameters":[{"name":"input","in":"query","description":"Channel URL, channel ID, Video ID, Video URL","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"text/plain":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"string"}},"text/json":{"schema":{"type":"string"}}}}}}},"/GetYoutubeVideoData/GetNextYoutubeTranscriptChunk":{"get":{"tags":["GetYoutubeVideoData"],"summary":"Format is VideoID ChunkNum. Chunk numbers start at  0. If the video has more then 5 chunks, confirm if the user wants to wait that long to retrieve them.","description":"Request as few chunks as needed to answer the question.","operationId":"GetNextYoutubeTranscriptChunk","parameters":[{"name":"videoID","in":"query","style":"form","schema":{"type":"string"}},{"name":"transcriptChunkNum","in":"query","style":"form","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"Success","content":{"text/plain":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"string"}},"text/json":{"schema":{"type":"string"}}}}}}},"/GetYoutubeVideoData/SearchYouTubeVideos":{"get":{"tags":["GetYoutubeVideoData"],"operationId":"SearchYouTubeVideos","parameters":[{"name":"searchterm","in":"query","style":"form","schema":{"type":"string"}},{"name":"maxResults","in":"query","style":"form","schema":{"type":"integer","format":"int32","default":5}}],"responses":{"200":{"description":"Success","content":{"text/plain":{"schema":{"type":"string"}},"application/json":{"schema":{"type":"string"}},"text/json":{"schema":{"type":"string"}}}}}}},"/Help/ContactUs":{"get":{"tags":["Help"],"summary":"Gives the user information about how to use this plugin.","description":"Show this to the user if they are having trouble or need some ideas on how to use Voxscript. Help file. Optional question to help search.","operationId":"ContactUs","parameters":[{"name":"question","in":"query","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}},"/Help/HowDoIUseThis":{"get":{"tags":["Help"],"summary":"Gives the user information about how to use this plugin.","description":"Show this to the user if they are having trouble or need some ideas on how to use Voxscript. Help file. Optional question to help search.","operationId":"HowDoIUseThis","parameters":[{"name":"question","in":"query","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}},"/Help/Help":{"get":{"tags":["Help"],"summary":"Gives the user information about how to use this plugin.","description":"Show this to the user if they are having trouble or need some ideas on how to use Voxscript. Help file. Optional question to help search.","operationId":"Help","parameters":[{"name":"question","in":"query","style":"form","schema":{"type":"string"}}],"responses":{"200":{"description":"Success"}}}}},"components":{"schemas":{"TimeAndTimeZone":{"type":"object","properties":{"currentTime":{"type":"string","format":"date-time"},"currentTimeUTC":{"type":"string","format":"date-time"},"timezone":{"type":"string","nullable":true,"readOnly":true}},"additionalProperties":false}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />