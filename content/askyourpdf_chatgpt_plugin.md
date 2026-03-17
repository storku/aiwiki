---
title: "AskYourPDF (ChatGPT Plugin)"
slug: "askyourpdf_chatgpt_plugin"
categories:
  - "Plugin"
---| AskYourPDF (ChatGPT Plugin) |
| --- |
| [![AskYourPDF.png](/images/thumb/e/e5/AskYourPDF.png/300px-AskYourPDF.png)](/wiki/file_askyourpdf_png) |
| Information |
| **Name** | AskYourPDF |
| **Platform** | [ChatGPT](/wiki/chatgpt) |
| **Model** | [GPT-4](/wiki/gpt-4) |
| **Category** | [Productivity](/wiki/productivity) |
| **Description** | Unlock the power of your PDFs!, dive into your documents, find answers, and bring information to your fingertips. |
| **Release Date** | May 20, 2023 |
| **Available** | Yes |
| **Working** | Yes |

**AskYourPDF** is a [Plugin](/wiki/plugin) for [ChatGPT](/wiki/chatgpt).              

## Guide

### Example Prompts

Example prompts that utilize the plugin:

1. Please find the portion in this PDF: ${pdf_url} that covers ${topic}.

2. Where can I find the discussion about ${topic} in this PDF: ${pdf_url}?

3. I'm searching for the part of this document: ${pdf_url} that focuses on ${topic}.

4. Extract any information regarding ${topic} from this PDF: ${pdf_url}.

5. Can you locate the section in this PDF: ${pdf_url} where ${topic} is explained?

6. Help me find the mentions of ${topic} in this PDF: ${pdf_url}.

7. What are the key points about ${topic} in this document: ${pdf_url}?

8. I want to know more about ${topic}; can you find the relevant section in this PDF: ${pdf_url}?

9. Please highlight the parts of this PDF: ${pdf_url} that are relevant to ${topic}.

10. In which section of this document: ${pdf_url} is ${topic} discussed?

### Example Usage

#### Prompt

Extract any information regarding transformers from this pdf: https://arxiv.org/pdf/1706.03762.pdf

#### ChatGPT Response

```
The PDF you provided is a paper that proposes a new network architecture called the Transformer. This architecture is based solely on attention mechanisms and does not use recurrent or convolutional neural networks. The Transformer is shown to be superior in quality, more parallelizable, and requires significantly less time to train compared to existing models. The model achieves state-of-the-art results on machine translation tasks and generalizes well to other tasks such as English constituency parsing. The authors attribute the success of the Transformer to the use of attention mechanisms.

If you have more specific questions about the content of the paper, feel free to ask!

Also, please note that you can delete your document at any point by visiting this link.

```

#### Plugin Request and Response

**REQUEST TO SCHOLAR ASSIST**

{
  "url": "https://arxiv.org/pdf/1706.03762.pdf"
}

**RESPONSE FROM SCHOLAR ASSIST**

{
  "docId": "1f701426-ec4c-43a2-86da-416c57d2a3d3",
  "summary": "The paper proposes a new network architecture called the Transformer, which is based solely on attention mechanisms and does not use recurrent or convolutional neural networks. The Transformer is shown to be superior in quality, more parallelizable, and requires significantly less time to train compared to existing models. The model achieves state-of-the-art results on machine translation tasks and generalizes well to other tasks such as English constituency parsing. The authors attribute the success of the Transformer to the use of attention mechanisms.",
  "extra_instructions": "Inform the user they can delete their document at any point by visiting https://askyourpdf.com/delete/{APPEND_DOC_ID_HERE}. Also prompt the user to ask more questions"
}

## Tips and Tricks

## Comments

<Comments />