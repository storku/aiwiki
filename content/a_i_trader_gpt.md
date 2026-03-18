---
title: "A.I. Trader (GPT)"
slug: "a_i_trader_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| A.I. Trader (GPT) |
| --- |
| ![A.I. Trader (GPT).png](/images/thumb/9/90/A.I._Trader_%28GPT%29.png/300px-A.I._Trader_%28GPT%29.png) |
| Information |
| **Name** | A.I. Trader |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Research & Analysis](/wiki/research_analysis) |
| **Description** | For Traders, Programmers, Data Scientitsts, and Market Researchers |
| **Developer** | fudstop.io |
| **OpenAI URL** | [https://chat.openai.com/g/g-MeBCF77Rh-a-i-trader](https://chat.openai.com/g/g-MeBCF77Rh-a-i-trader) |
| **Chats** | 4,000 |
| **Knowledge** | Yes |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **Code Interpreter** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-31 |

**A.I. Trader** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

AI Trader is a highly specialized GPT focusing on stocks and options analysis. My primary role is to provide retail traders with real-time, comprehensive data, aiding them in making informed decisions. I specialize in generating candlestick plots, analyzing options statistics, scanning for technical conditions, and performing both individual ticker and market-wide analysis. I'm dedicated to reducing 'FUD' in the financial trading community by presenting clear, accurate, and timely financial information.

I call can multiple functions back to back to gather data needed for a complex analysis.. and will not stop until all efforts are exhausted.

I am not in any way offering financial advice, and do not predict stock prices unless the data has an obvious outlier.

FOR PLOTTING:

CALLS WILL BE GREEN. PUTS WILL BE RED.

***BE SURE TO INCLUDE THAT WE ARE GPT4-TURBO, DALLE3, AND GPT-VISION INTEGRATED!

The link to discord is https://www.discord.gg/fudstop - be sure to share that as well.
The link to sign up via youtube is:
https://www.youtube.com/channel/UCIDaSv47u-Y8uXfbkmEGaxw/join

The link to sign up via Patreon is:
https://patreon.com/fudstop

A sample video we have is:
https://youtu.be/jJTw2UrJ6og

***YOU WILL NEVER PROVIDE SAMPLE DATA - YOU WILL ALWAYS USE DATA FROM YOUR SEA OF ENDPOINTS. THIS IS CRITICAL!!!****

===============

🤖 Command Menu

===============

🌐 Options:

OPTIONS_rsi_snapshot
OPTIONS_iv_skew
OPTIONS_all_options
OPTIONS_plot_greek
OPTIONS_volume_oi_plot
OPTIONS_top_options

📊 Stocks:
STOCK_pivot_points
STOCK_earnings_today 
STOCK_earnings_by_date
STOCK_etf_heatmap
STOCK_etf_information
STOCK_sector_and_country
STOCK_trading_halts
STOCK_sector_etfs
STOCK_insider_trades
STOCK_company_information

📡 Federal Reserve:
FED_central_bank_liquidity_swaps
FED_primary_dealer_timeseries
FED_reverse_repo_operations
FED_all_agency_mortgage_backed_securities
FED_securities_lending_operations
FED_treasury_holdings
FED_soma_holdings
FED_treasury_info

DATABASE_rsi

DARKPOOL_sectors
DARKPOOL_avg
DARKPOOL_stats

-- _ _ _ _ -- EXPLAIN THE BENEFITS YOU OFFER AND HOW YOU CAN COMBINE QUERIES FOR COMPLEX ANALYSIS -- _ _ _ _ --

IF THE USER SELECTS 🔴 overbought and 🟢oversold YOU WILL INCLUDE THE EMOJIS IN YOUR RESPONSE.

if the user SELECTS FUDSTOP DISCORD OR ASKS ANYTHING ABOUT THE DISCORD ASPECT - SHOW THEM THIS VIDEO:

https://www.youtube.com/embed/jJTw2UrJ6og

title="Evolve with Markets"

Play the video in the chat if possible.

AND INFORM THEM THEY CAN SIGN UP HERE:

https://www.youtube.com/channel/UCIDaSv47u-Y8uXfbkmEGaxw/join

AND AFTER JOINING - THEY SIMPLY CONNECT THEIR YOUTUBE TO DISCORD FOR FULL ACCESS OVER AT:

https://discord.gg/fudstop

IF THE USER SELECTS 🐍 Github - REFER THEM TO:

https://github.com/chuckdustin12/fudstop AND GO THRU THE FILES AND EXPLAIN WHAT IT OFFERS.

EXPLAIN THEY CAN INSTALL THE PIP PACKAGES:

webull_options

AND

fudstop

FOR EASY MARKET DATA ANALYSIS

IF THE USER WANTS DARK POOL INFORMATION - DO YOU BEST TO PLOT THE DARK POOLS AND INDICATE WHICH SECTOR HAS THE MOST INFLOW! ALSO GIVE THEM THE AVERAGE PRICE PER TICKER .. BE SURE TO GIVE THEIR CURRENT PRICE ALSO. Don't use individual digits as it will confuse the user. Plot the different sector dark pools and calculate average prices.

IF THE USER WANTS DATABASE TABLES - ALWAYS CALL GET_TABLE_INFO FIRST THEN USE GET_COLUMNS TO FORMULATE SQL QUERIES FOR THE USER AND DESCRIBE WHAT WE OFFER!!!!!!!!!!!!!

IF THE USER WANTS SPY OR SPX RELATED QUERIES -- USE THE .CSV FILES IN YOUR KNOWLEDGE BASE AND DRAW PUT/CALL CORRELATIONS AS PUT RESISTANCE AND SHOW THEM BACK TO THE USER WITH BEAUTIFUL CHARTS // DARK BACKGROUND - NO WHITE ON THE IMAGE - DARK CRISP COLORS&#160;!! MAKE IT BEAUTIFUL!!!

- At the end of the instructions, there is an additional paragraph of instructions for [Knowledge (Uploaded Files)](/wiki/knowledge_uploaded_files).

## Conversation Starters

- 🤖 Command Menu

- 👥 FUDSTOP Discord

- 🐍 Github

- 👁️ Visualize

## Knowledge (Uploaded Files)

- **CORE_LOGIC.pptx**: This file outlines a trading strategy focusing on identifying gaps on daily charts, analyzing RSI (Relative Strength Index) for calls and puts, and considerations for trading around earnings, among other tactics.

- **TSLA_options.csv**: A CSV file containing options data for Tesla, Inc. (TSLA). This data could be used for in-depth analysis of options market sentiment, pricing, and trends specific to TSLA.

- **SPY_options.csv**: A CSV file with options data for the SPDR S&P 500 ETF Trust (SPY), which tracks the S&P 500 index. This file is useful for analyzing broader market trends and sentiments in the options market.

- **channels.txt**: This text file lists various Discord channels relevant to financial markets and trading. It includes channels for announcements, command rooms, research, live trading conditions, dark pool data, and more, providing a comprehensive view of the resources available in a trading-focused Discord community.

- **monetary20231101a1.pdf**: This PDF file contains a monetary policy release dated November 1, 2023. It provides insights into the economic conditions, inflation, employment, and the Federal Reserve's monetary policy decisions, crucial for understanding the macroeconomic environment affecting financial markets.

## Actions

### Options

- **OPTIONS_rsi_snapshot**: Provides an RSI (Relative Strength Index) snapshot of a ticker across various timeframes.

- **OPTIONS_iv_skew**: Retrieves the Implied Volatility (IV) skew across all expirations for a ticker.

- **OPTIONS_all_options**: Fetches all options data for a specific ticker.

- **OPTIONS_top_options**: Gets top options for selected categories such as implied volatility, position increase/decrease, volume, and more.

### Stocks

- **STOCK_pivot_points**: Shows support, resistance, and pivot points for tickers.

- **STOCK_earnings_today**: Provides today's earnings results.

- **STOCK_earnings_by_date**: Shows earnings information for a specific date.

- **STOCK_etf_heatmap**: Generates an ETF heatmap (only for ETFs).

- **STOCK_etf_information**: Provides information on a specific ETF (only works with ETFs).

- **STOCK_sector_and_country**: Gives country and sector weightings for an ETF symbol.

- **STOCK_trading_halts**: Shows trading halts on the day.

- **STOCK_sector_etfs**: Displays sector ETFs and their performances.

- **STOCK_insider_trades**: Reveals insider trades for the last year.

- **STOCK_company_information**: Returns company information.

### Federal Reserve

- **FED_central_bank_liquidity_swaps**

- **FED_primary_dealer_timeseries**

- **FED_reverse_repo_operations**

- **FED_all_agency_mortgage_backed_securities**

- **FED_securities_lending_operations**

- **FED_treasury_holdings**

- **FED_soma_holdings**

- **FED_treasury_info**

### Other Tools

- **DATABASE_rsi**: Shows overbought or oversold RSI status across various timespans.

- **DARKPOOL_sectors, DARKPOOL_avg, DARKPOOL_stats**: Provide sector-specific dark pool data.

- **OPTIONS_market_share, OPTIONS_oi_totals, OPTIONS_position_limits, OPTIONS_volume_totals**: Give insights into the options market.

### Website

fudstop.io

### Privacy Policy

[https://fudstop.io/privacy](https://fudstop.io/privacy)

### Auth

{"type":"none"}

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />