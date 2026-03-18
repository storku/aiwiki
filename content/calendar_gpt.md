---
title: "Calendar GPT"
slug: "calendar_gpt"
categories:
  - "Agents"
  - "Custom_GPTs"
---| Calendar GPT |
| --- |
| ![Calendar GPT.png](/images/thumb/2/23/Calendar_GPT.png/300px-Calendar_GPT.png) |
| Information |
| **Name** | Calendar GPT |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Store** | [GPT Store](/wiki/gpt_store) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Productivity](/wiki/productivity) |
| **Description** | I'm here to help you prepare for your day! Powered by Zapier's AI Actions. 🧡 |
| **Developer** | zapier.com |
| **OpenAI URL** | [https://chat.openai.com//g/g-8OcWVLenu-calendar-gpt](https://chat.openai.com//g/g-8OcWVLenu-calendar-gpt) |
| **Chats** | 10,000 |
| **Actions** | Yes |
| **Web Browsing** | Yes |
| **Free** | Yes |
| **Available** | Yes |
| **Updated** | 2024-01-24 |

**Calendar GPT** is a [Custom GPT](/wiki/custom_gpt) for [ChatGPT](/wiki/chatgpt) in the [GPT Store](/wiki/gpt_store).                        

## Instructions (System Prompt)

You are an assistant to me. For a given day, check my Calendar and output the agenda for the day in markdown using relevant Emojis as bullet points. Don't include Zoom or Google Meet links when telling me what's on my schedule. If I ask for it, you can send a message in Slack but this should always be if I ask for it first. If I ask for more information about a meeting or an attendee, browse the web to return relevant details such as recent news about the company. 

Example Agenda: 
Here's your schedule for Tues. Nov. 7th:

1. Check-in at Hyatt Regency Seattle
⏰ After 4:00 PM PT
📍 The Location: Hyatt Regency, Seattle

2. Reid / Sheryl 1:1
⏰ 6:00 PM PT
👥 Sheryl Soo(sheryl@zapier.com), Mike Knoop (Knoop.Mike@zapier.com)
📍 Virtual

3....

###Rules:
- Before running any Actions tell the user that they need to reply after the Action completes to continue. 
- If a user has confirmed they've logged in to Zapier's AI Actions, start with Step 1.

###Instructions for Zapier Custom Action: 
Step 1. Tell the user you are Checking they have the Zapier AI Actions needed to complete their request by calling /list_available_actions/ to make a list: AVAILABLE ACTIONS. Given the output, check if the REQUIRED_ACTION needed is in the AVAILABLE ACTIONS and continue to step 4 if it is. If not, continue to step 2.
Step 2. If a required Action(s) is not available, send the user the Required Action(s)'s configuration link. Tell them to let you know when they've enabled the Zapier AI Action.
Step 3. If a user confirms they've configured the Required Action, continue on to step 4 with their original ask.
Step 4. Using the available_action_id (returned as the `id` field within the `results` array in the JSON response from /list_available_actions). Fill in the strings needed for the run_action operation. Use the user's request to fill in the instructions and any other fields as needed.

{
    "REQUIRED_ACTIONS": [
        {
            "Action": "Google Calendar Find Event",
            "Confirmation Link": "https://actions.zapier.com/gpt/start?setup_action=google%20calendar%20find%20event%20&setup_params=set%20have%20AI%20guess%20for%20Start%20and%20End%20time"
        },
        {
            "Action": "Slack Send Direct Message",
            "Confirmation Link": "https://actions.zapier.com/gpt/start?setup_action=Slack%20Send%20Direct%20Message"
        }
    ]
}

## Conversation Starters

- What's on my calendar today?

- How's my day look tomorrow?

- Help me do research for my next meeting.

- How much free time do I have tomorrow?

## Knowledge (Uploaded Files)

## Actions

### Website

actions.zapier.com

### Privacy Policy

[https://zapier.com/legal/ai-supplementary-terms](https://zapier.com/legal/ai-supplementary-terms)

### Auth

{"type":"oauth","instructions":"","client_url":"https://actions.zapier.com/oauth/authorize/","scope":"nla:exposed_actions:execute","authorization_url":"https://actions.zapier.com/oauth/token/","authorization_content_type":"application/x-www-form-urlencoded","verification_tokens":{},"pkce_required":false,"token_exchange_method":null}

### Code

```
{"openapi":"3.0.2","info":{"title":"Zapier AI Actions for GPT (Dynamic)","version":"1.0.0","description":"Equip GPTs with the ability to run thousands of actions via Zapier. (703dcca4c2e24c5ea5e2c717eba11029)","x-openai-verification-token":"703dcca4c2e24c5ea5e2c717eba11029"},"servers":[{"url":"https://actions.zapier.com"}],"paths":{"/gpt/api/v1/available/":{"get":{"operationId":"list_available_actions","summary":"List Available Actions","parameters":[{"in":"query","name":"apps","schema":{"title":"Apps","description":"Filter actions to a comma separated list of Zapier app names.","type":"string"},"required":false,"description":"Filter actions to a comma separated list of Zapier app names."},{"in":"query","name":"exact_search","schema":{"title":"Exact Search","description":"Filter actions to exact search string of the description (case insensitive).","type":"string"},"required":false,"description":"Filter actions to exact search string of the description (case insensitive)."}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AvailableActionResponseSchema"}}}}},"description":"List all the currently available actions for the user. If you try to run an action and receive an error\n that it does not exist, try refreshing this list first.","security":[{"AccessPointOAuth":[]}]}},"/gpt/api/v1/available/{available_action_id}/run/":{"post":{"operationId":"run_action","summary":"Run Action","parameters":[{"in":"path","name":"available_action_id","schema":{"title":"Available Action Id","type":"string","pattern":"^[A-Z0-9]{26}$","example":"01ARZ3NDEKTSV4RRFFQ69G5FAV"},"required":true,"example":"01ARZ3NDEKTSV4RRFFQ69G5FAV"}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RunResponse"}}}},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ErrorResponse"}}}}},"description":"Run an available action using plain english instructions. You may also include associated params from list_available_actions in the body of the request.","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RunRequest"}}},"required":true},"security":[{"AccessPointOAuth":[]}]}}},"components":{"schemas":{"AvailableActionSchema":{"title":"AvailableActionSchema","type":"object","properties":{"id":{"title":"Id","description":"The unique ID of the available action.","type":"string"},"operation_id":{"title":"Operation Id","description":"The operation ID of the available action.","type":"string"},"description":{"title":"Description","description":"Description of the action.","type":"string"},"params":{"title":"Params","description":"Available hint fields for the action.","type":"object"}},"required":["id","operation_id","description","params"]},"AvailableActionResponseSchema":{"title":"AvailableActionResponseSchema","type":"object","properties":{"results":{"title":"Results","type":"array","items":{"$ref":"#/components/schemas/AvailableActionSchema"}},"configuration_link":{"title":"Configuration Link","description":"Guide the user to setup new actions with the configuration_link. You can optionally add ?setup_action=... onto configuration_link to set up a specific Zapier app and action For example: https://actions.zapier.com/gpt/start?setup_action=gmail find email","type":"string"}},"required":["results","configuration_link"]},"RunResponse":{"title":"RunResponse","description":"This is a summary of the results given the action that was run.","type":"object","properties":{"id":{"title":"Id","description":"The id of the run log.","type":"string"},"action_used":{"title":"Action Used","description":"The name of the action that was run.","type":"string"},"input_params":{"title":"Input Params","description":"The params we used / will use to run the action.","type":"object"},"review_url":{"title":"Review Url","description":"The URL to run the action or review the AI choices the AI made for input_params given instructions.","type":"string"},"result":{"title":"Result","description":"A trimmed down result of the first item of the full results. Ideal for humans and language models!","type":"object"},"additional_results":{"title":"Additional Results","description":"The rest of the full results. Always returns an array of objects","type":"array","items":{"type":"object"}},"result_field_labels":{"title":"Result Field Labels","description":"Human readable labels for some of the keys in the result.","type":"object"},"status":{"title":"Status","description":"The status of the action run.","default":"success","enum":["success","error","empty","preview"],"type":"string"},"error":{"title":"Error","description":"The error message if the action run failed.","type":"string"},"assistant_hint":{"title":"Assistant Hint","description":"A hint for the assistant on what to do next.","type":"string"},"full_results":{"title":"Full Results","description":"The full results, not summarized, if available. Always returns an array of objects.","type":"array","items":{"type":"object"}}},"required":["id","action_used","input_params","review_url","additional_results","full_results"]},"ErrorResponse":{"title":"ErrorResponse","type":"object","properties":{"error":{"title":"Error","description":"Error message.","type":"string"}},"required":["error"]},"RunRequest":{"title":"RunRequest","description":"Try and stuff as much relevant information into the instructions as possible. Set any necessary AvailableActionSchema params. This type of action allows optionally setting preview_only if the user wants to preview before running.","type":"object","properties":{"instructions":{"title":"Instructions","description":"Plain english instructions. Provide as much detail as possible, even if other fields are present.","type":"string"},"preview_only":{"title":"Preview Only","description":"If true, we will not run the action, but will do a dry-run and return a preview for the user to confirm.","default":false,"type":"boolean"}},"required":["instructions"]}},"securitySchemes":{"AccessPointOAuth":{"type":"oauth2","flows":{"authorizationCode":{"authorizationUrl":"/oauth/authorize/","tokenUrl":"/oauth/token/","scopes":{"nla:exposed_actions:execute":"Run AI Actions"}}}}}}}

```

## Guide

## Examples

### Example Prompts

### Example Conversations

## Reviews and Comments

<comments />