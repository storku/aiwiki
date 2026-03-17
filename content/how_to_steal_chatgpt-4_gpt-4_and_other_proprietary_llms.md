---
title: "How to Steal ChatGPT-4, GPT-4 and other Proprietary LLMs"
slug: "how_to_steal_chatgpt-4_gpt-4_and_other_proprietary_llms"
categories:
  - "Guides"
  - "Other_Guides"
  - "Security"
---*See also: [Guides](/wiki/guides) and [Security](/index.php?title=Security&action=edit&redlink=1)*
[Large Language Models](/index.php?title=Large_Language_Models&action=edit&redlink=1) ([LLMs](/wiki/llms)) like [GPT-4](/wiki/gpt-4) represent the forefront of [artificial intelligence](/wiki/artificial_intelligence) technology. Understanding the intricacies of these [models](/wiki/models), their value, and the potential risks associated with their theft is essential. This article delves into the complexities of LLMs, focusing on their size, [data exfiltration](/index.php?title=Data_exfiltration&action=edit&redlink=1) techniques, embedding in everyday life, and the [security](/index.php?title=Security&action=edit&redlink=1) concerns surrounding their use.

## Size and Scale

The sheer size of LLMs like GPT-4 is a defining trait. These models have [parameters](/index.php?title=Parameters&action=edit&redlink=1) numbering in the billions or trillions, resulting in file sizes of several [terabytes](/index.php?title=Terabytes&action=edit&redlink=1). For instance, [GPT-2](/wiki/gpt-2) has about 1.5 billion parameters and is over 5 [gigabytes](/index.php?title=Gigabytes&action=edit&redlink=1), while [GPT-3](/wiki/gpt-3) has 175 billion parameters and is around 800 gigabytes. The training [datasets](/wiki/datasets) are equally massive, with sources like [CommonCrawl](/index.php?title=CommonCrawl&action=edit&redlink=1) providing archives upwards of 45 terabytes.

## Data Exfiltration Techniques

The exfiltration of data is a significant concern. Techniques include encoding sensitive information within [images](/index.php?title=Images&action=edit&redlink=1), [video files](/index.php?title=Video_files&action=edit&redlink=1), or even [email](/index.php?title=Email&action=edit&redlink=1) headers. For instance, a 50,000 line [CSV](/index.php?title=CSV&action=edit&redlink=1) can be embedded in a 5 MB [PNG](/index.php?title=PNG&action=edit&redlink=1) file, significantly increasing its size. [Cybersecurity](/wiki/cybersecurity) measures such as [heuristic scanning](/index.php?title=Heuristic_scanning&action=edit&redlink=1) and analyzing [data packets](/index.php?title=Data_packets&action=edit&redlink=1) are employed to prevent these activities. However, the massive size of LLMs like GPT-4 poses unique challenges in exfiltration attempts.

## Deeply Embedded

LLMs are becoming deeply embedded in our daily lives, evidenced by their integration into products like [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1)'s [Copilot](/index.php?title=Copilot&action=edit&redlink=1) and Copilot Studio. This wide distribution increases the number of model copies within [data centers](/index.php?title=Data_centers&action=edit&redlink=1), heightening the risk of data exfiltration.

## Data States and Security

Data can exist in three states: at rest, in transit, and in use. Securing data at rest and in transit is more straightforward, involving [encryption](/index.php?title=Encryption&action=edit&redlink=1) and secure transmission protocols like [SSH](/index.php?title=SSH&action=edit&redlink=1). However, securing data in use, especially during the inference phase of LLMs, presents unique challenges. Attacks like memory bus monitoring or memory probes can extract model data from system [RAM](/index.php?title=RAM&action=edit&redlink=1), necessitating advanced security measures.

## Confidential Computing

The advent of [confidential computing](/index.php?title=Confidential_computing&action=edit&redlink=1) offers new solutions. Initiatives like the [Confidential Computing Consortium](/index.php?title=Confidential_Computing_Consortium&action=edit&redlink=1), with members like [Intel](/index.php?title=Intel&action=edit&redlink=1), [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), and [Google](/index.php?title=Google&action=edit&redlink=1), focus on hardware-based solutions to secure data in use. Technologies like [Trusted Execution Environments](/index.php?title=Trusted_Execution_Environments&action=edit&redlink=1) ([TEEs](/index.php?title=TEEs&action=edit&redlink=1)) provide isolated environments for sensitive applications, protecting them from external access and verifying their integrity through [attestations](/index.php?title=Attestations&action=edit&redlink=1).

## Model Extraction

Model extraction attacks aim to recreate LLMs by querying their APIs and using the responses to train a "student" model. This process, known as [Model Leeching](/index.php?title=Model_Leeching&action=edit&redlink=1), can achieve significant similarity to the target model with a limited number of API queries, posing a substantial risk to proprietary LLMs.

## Extracting Training Data

Membership inference attacks target LLMs to determine if specific datasets were used in their training. This method can reveal private or copyrighted data, leading to privacy concerns and legal issues. Understanding the composition of a model's training data is crucial for replicating its performance or identifying potential data breaches.

## Insider Attacks

Insider threats are a constant concern, especially for assets of interest to nation-states. While most data breaches are caused by external actors, the potential for insider attacks, such as those involving recruited employees, cannot be ignored. These attacks underscore the need for comprehensive vetting and robust cybersecurity practices.

## The Evolving Landscape of LLM Security

The security measures and best practices for protecting LLMs like GPT-4 are continually evolving. Given the history of cyberattacks across various sectors, major AI labs could face similar threats. The potential theft of LLMs raises concerns about the misuse of such technology and its impact on society. As these models become more integrated into our lives, understanding and mitigating these risks becomes increasingly critical.