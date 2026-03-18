---
title: "Claude"
slug: "claude"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

![Claude logo1.png](/images/thumb/5/57/Claude_logo1.png/250px-Claude_logo1.png)

**Claude** is a family of [large language models](/wiki/large_language_model) (LLMs) developed by [Anthropic](/wiki/anthropic), an American [artificial intelligence](/wiki/artificial_intelligence) safety and research company. Named after [Claude Shannon](/index.php?title=Claude_Shannon&action=edit&redlink=1), the founder of [information theory](/index.php?title=Information_theory&action=edit&redlink=1), the series is positioned for enterprise and developer use with emphasis on [AI safety](/index.php?title=AI_safety&action=edit&redlink=1) and [alignment](/index.php?title=Alignment_(artificial_intelligence)&action=edit&redlink=1), including the use of [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1) for training.[&#91;1&#93;](#cite_note-anthropic-claude4-1)[&#91;2&#93;](#cite_note-shannon-naming-2) Claude models are available via Anthropic's own API and through third-party platforms such as [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) (by [Amazon Web Services](/index.php?title=Amazon_Web_Services&action=edit&redlink=1)), [Vertex AI](/index.php?title=Vertex_AI&action=edit&redlink=1) (by [Google Cloud](/index.php?title=Google_Cloud&action=edit&redlink=1)), and [GitHub Copilot](/wiki/github_copilot).[&#91;3&#93;](#cite_note-aws-bedrock-3)[&#91;4&#93;](#cite_note-gcp-vertex-4)

## Overview

Claude was first released in March 2023 and has since iterated through multiple generations, including the Claude 1.x, 2.x, 3.x, and 4.x families. Each generation includes different model tiers optimized for various balances of intelligence, speed, and cost: Haiku (fast and cost-effective), Sonnet (balanced), and Opus (highest intelligence).[&#91;5&#93;](#cite_note-claude3-family-5)

Anthropic emphasizes practical performance (coding, long-horizon "agentic" work, and computer use) and guardrails, alongside features such as Artifacts (structured outputs in a live panel), "computer use" (sandboxed OS/browser control), Memory (multi-session recall), Projects (collaborative workspaces), and native developer tooling via Claude Code.[&#91;6&#93;](#cite_note-c35-6)[&#91;1&#93;](#cite_note-anthropic-claude4-1)[&#91;7&#93;](#cite_note-code-2025-7)

## Anthropic

[Anthropic](/wiki/anthropic) was founded in 2021 by former [OpenAI](/wiki/openai) executives and researchers as a [public-benefit corporation](/index.php?title=Public-benefit_corporation&action=edit&redlink=1) focused on AI safety. The founding team included siblings [Dario Amodei](/index.php?title=Dario_Amodei&action=edit&redlink=1) (CEO) and [Daniela Amodei](/index.php?title=Daniela_Amodei&action=edit&redlink=1) (President), along with other former senior members of OpenAI who shared a vision for advancing AI research with an emphasis on safety and alignment.[&#91;8&#93;](#cite_note-anthropic-founding-8)

### Funding and Valuation

| Date | Funding Round | Amount | Valuation | Lead Investors |
| --- | --- | --- | --- | --- |
| 2021 | Initial | $124 million | N/A | Various |
| 2023-2024 | Series C-D | $4 billion | N/A | Amazon |
| November 2024 | Additional | $4 billion | N/A | Amazon |
| March 2025 | Series E | $3.5 billion | $61.5 billion | Lightspeed Venture Partners |

Major investors include [Amazon](/index.php?title=Amazon&action=edit&redlink=1) ($8 billion total), [Google](/index.php?title=Google&action=edit&redlink=1) ($2 billion), [Menlo Ventures](/index.php?title=Menlo_Ventures&action=edit&redlink=1) ($750 million), [Bessemer Venture Partners](/index.php?title=Bessemer_Venture_Partners&action=edit&redlink=1), [Cisco Investments](/index.php?title=Cisco_Investments&action=edit&redlink=1), [D1 Capital Partners](/index.php?title=D1_Capital_Partners&action=edit&redlink=1), and [Fidelity Management & Research Company](/index.php?title=Fidelity_Management_%26_Research_Company&action=edit&redlink=1).[&#91;9&#93;](#cite_note-funding-details-9)

## History

### Complete Model Release Timeline

| Generation | Model(s) | Public release date | Key Features | Status |
| --- | --- | --- | --- | --- |
| [Claude 1](/index.php?title=Claude_1&action=edit&redlink=1) | [Claude 1.0](/index.php?title=Claude_1.0&action=edit&redlink=1), [Claude Instant](/index.php?title=Claude_Instant&action=edit&redlink=1) | 14 Mar 2023 | Initial release, 100K token context, limited beta | Discontinued |
| [Claude 2](/index.php?title=Claude_2&action=edit&redlink=1) | [Claude 2.0](/index.php?title=Claude_2.0&action=edit&redlink=1) | 11 Jul 2023 | Public availability, PDF upload, 100K tokens | Discontinued |
| Claude 2 | [Claude Instant 1.2](/index.php?title=Claude_Instant_1.2&action=edit&redlink=1) | 9 Aug 2023 | Faster, cheaper variant | Discontinued |
| Claude 2 | [Claude 2.1](/index.php?title=Claude_2.1&action=edit&redlink=1) | 21 Nov 2023 | 200K token context, reduced hallucinations | Discontinued |
| [Claude 3](/index.php?title=Claude_3&action=edit&redlink=1) | [Haiku](/index.php?title=Haiku&action=edit&redlink=1), [Sonnet](/index.php?title=Sonnet&action=edit&redlink=1), [Opus](/index.php?title=Opus&action=edit&redlink=1) | 4 Mar 2024 | Three-tier family, vision capabilities, up to 1M tokens | Deprecated |
| [Claude 3.5](/index.php?title=Claude_3.5&action=edit&redlink=1) | [Sonnet 3.5](/index.php?title=Sonnet_3.5&action=edit&redlink=1) | 20 Jun 2024 | Artifacts feature, improved benchmarks | Active |
| Claude 3.5 | [Haiku 3.5](/index.php?title=Haiku_3.5&action=edit&redlink=1) | 22 Oct 2024 | Fastest model in lineup | Active |
| [Claude 3.7](/index.php?title=Claude_3.7&action=edit&redlink=1) | [Sonnet 3.7](/index.php?title=Sonnet_3.7&action=edit&redlink=1) | 24 Feb 2025 | Hybrid reasoning modes | Active |
| [Claude 4](/index.php?title=Claude_4&action=edit&redlink=1) | [Sonnet 4](/index.php?title=Sonnet_4&action=edit&redlink=1), [Opus 4](/index.php?title=Opus_4&action=edit&redlink=1) | 22 May 2025 | Extended thinking, agentic features, ASL-3 safety | Active |
| Claude 4 | [Opus 4.1](/index.php?title=Opus_4.1&action=edit&redlink=1) | 5 Aug 2025 | 74.5% on SWE-bench Verified | Active |
| [Claude 4.5](/index.php?title=Claude_4.5&action=edit&redlink=1) | [Sonnet 4.5](/index.php?title=Sonnet_4.5&action=edit&redlink=1) | 29 Sep 2025 | 77.2% on SWE-bench, GitHub Copilot integration | Active |

Key milestones:

- **Claude 1** debuted to selected users in early 2023 as Anthropic's first public assistant trained with [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1).[&#91;10&#93;](#cite_note-constitution-blog-10)

- **Claude 2** was released on 11 July 2023 with wider availability and larger context windows.[&#91;11&#93;](#cite_note-tc-claude2-11)

- **Claude 3** (March 2024) introduced the three-tier model family and multimodal capabilities.[&#91;5&#93;](#cite_note-claude3-family-5)

- **Claude 3.5 Sonnet** (June 2024) introduced the Artifacts interface.[&#91;6&#93;](#cite_note-c35-6)

- **Claude 4** (May 2025) introduced hybrid reasoning modes and was classified as ASL-3 (Anthropic Safety Level 3).[&#91;1&#93;](#cite_note-anthropic-claude4-1)

- **Claude Sonnet 4.5** (September 2025) achieved state-of-the-art coding performance.[&#91;12&#93;](#cite_note-sonnet45-blog-12)

## Technology

### Architecture and Training

Claude models are [generative pre-trained transformers](/wiki/generative_pre-trained_transformer) trained on diverse datasets including internet text, contractor-provided data, and opt-in user interactions. The training process involves predicting the next word in large amounts of text, followed by fine-tuning using [Reinforcement Learning from Human Feedback](/index.php?title=Reinforcement_Learning_from_Human_Feedback&action=edit&redlink=1) (RLHF) and Constitutional AI.[&#91;13&#93;](#cite_note-cai-paper-13)

Anthropic's transparency materials state that Claude Opus 4 and Sonnet 4 used a training data cutoff around March 2025 (with a reliable knowledge cutoff of January 2025) and document development infrastructure using [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [JAX](/index.php?title=JAX&action=edit&redlink=1), and [Triton](/index.php?title=Triton_(programming_language)&action=edit&redlink=1) on major cloud providers.[&#91;14&#93;](#cite_note-transparency-14)

### Constitutional AI

Constitutional AI is Anthropic's core innovation for training AI systems to be helpful, harmless, and honest. The method involves two primary phases:

**Supervised Learning Phase:**

- The model generates responses to prompts

- It self-critiques and revises responses based on constitutional principles

- The model is fine-tuned on these revised responses

**Reinforcement Learning Phase:**

- Uses Reinforcement Learning from AI Feedback (RLAIF)

- An AI generates comparisons of responses based on constitutional compliance

- This data trains a preference model

- Claude is fine-tuned to align with this preference model

The constitution includes 75 principles drawn from sources including:

- [United Nations Universal Declaration of Human Rights](/index.php?title=United_Nations_Universal_Declaration_of_Human_Rights&action=edit&redlink=1)

- Platform guidelines from technology companies

- Principles designed to discourage sycophantic or evasive behavior

- Custom principles developed by Anthropic researchers[&#91;10&#93;](#cite_note-constitution-blog-10)[&#91;13&#93;](#cite_note-cai-paper-13)

### Context Windows

| Model Generation | Default Context | Extended Context |
| --- | --- | --- |
| Claude 2.x | 100,000 tokens | 200,000 tokens (Claude 2.1) |
| Claude 3.x | 200,000 tokens | 1 million tokens (specific use cases) |
| Claude 4.x | 200,000 tokens | 1 million tokens (with beta header) |

Context windows affect the amount of text Claude can process in a single conversation, with larger windows enabling analysis of full books, extensive codebases, and lengthy documents.[&#91;15&#93;](#cite_note-context-windows-15)

### Capabilities

| Capability | Description | Availability |
| --- | --- | --- |
| Text generation | Writing, analysis, summarization, translation | All models |
| Vision | Image understanding and analysis | Claude 3 onward |
| Code generation | Programming in multiple languages | All models |
| Tool use | Function calling for external integrations | API only |
| Computer use | Direct computer control (mouse, keyboard) | Claude 3.5 Sonnet onward |

## Features

### Memory

Introduced in August 2025 for Pro and Enterprise users, Memory allows Claude to:

- Recall information across multiple conversations

- Remember personal preferences and context

- Update and forget information on request

- Maintain continuity over extended periods[&#91;16&#93;](#cite_note-memory-feature-16)

### Projects

Launched June 2024, Projects provides:

- Collaborative workspaces for teams

- Document and resource management

- Shared context across multiple chats

- Custom instructions per project[&#91;17&#93;](#cite_note-projects-feature-17)

### Artifacts

Debuted with Claude 3.5 Sonnet:

- Dedicated panel for generated content

- Live previews of code, documents, and visualizations

- Iterative refinement capabilities

- Direct export and sharing[&#91;18&#93;](#cite_note-artifacts-feature-18)

### Computer Use

Beta capability allowing Claude to:

- Control mouse and keyboard inputs

- Navigate web browsers

- Interact with desktop applications

- Execute multi-step computer tasks

- Available in sandboxed environments[&#91;19&#93;](#cite_note-computer-use-19)

#### Claude Code

Native developer experience featuring:

- Terminal and [Visual Studio Code](/index.php?title=Visual_Studio_Code&action=edit&redlink=1) integration

- Support for background tasks via [GitHub Actions](/index.php?title=GitHub_Actions&action=edit&redlink=1)

- Direct file editing capabilities

- Checkpoints and long-horizon execution

- Powered by Sonnet 4.5[&#91;7&#93;](#cite_note-code-2025-7)

#### Claude Skills

Introduced October 16, 2025, [Claude Skills](/wiki/claude_skills) (also called Agent Skills) are modular capabilities that extend Claude's functionality through:

- Packaged workflows containing instructions, scripts, and resources

- Progressive disclosure mechanism for efficient context management

- Automatic loading when relevant to tasks

- Support for both Anthropic-provided skills (document processing) and custom user-created skills

- Available across Claude apps, Claude Code, and the API

Claude Skills enable users to create reusable, specialized behaviors for common tasks without repetitive prompting. Skills operate in Claude's sandboxed code execution environment and can include executable scripts for deterministic operations. Enterprise organizations like [Rakuten](/index.php?title=Rakuten&action=edit&redlink=1), [Box](/index.php?title=Box_(company)&action=edit&redlink=1), and [Notion](/index.php?title=Notion&action=edit&redlink=1) have implemented Skills to streamline workflows and maintain consistency across AI-generated outputs.[&#91;20&#93;](#cite_note-skills-intro-20)[&#91;21&#93;](#cite_note-skills-engineering-21)

#### Web Search

Launched March 2025, providing:

- Real-time information retrieval

- Initially available to paying US users

- Integration with current events and updated information

## Platforms and Availability

| Platform | Scope | Key dates / notes |
| --- | --- | --- |
| Anthropic (claude.ai; iOS/Android; API) | Direct chat; developer API; Claude Code | Ongoing; Sonnet 4.5 available from 29 Sep 2025 |
| [Amazon Bedrock](/index.php?title=Amazon_Bedrock&action=edit&redlink=1) | Managed access to Claude family for AWS customers | Sonnet 4.5 announced available 29 Sep 2025 |
| [Vertex AI](/index.php?title=Vertex_AI&action=edit&redlink=1) (Model Garden) | Managed access on [Google Cloud](/index.php?title=Google_Cloud&action=edit&redlink=1) | Claude 3 models and later variants available |
| [GitHub Copilot](/wiki/github_copilot) | AI coding assistant integration | Sonnet 4.5 added September 2025 |

### Pricing

| Plan | Features | Price |
| --- | --- | --- |
| Free | Limited access to Claude models, basic features | $0 |
| Pro | Higher rate limits, priority access, Memory feature | $20/month |
| Team | Collaboration features, shared workspaces, Projects | $25/user/month |
| Enterprise | Advanced features, dedicated support, custom deployment | Custom pricing |

**API Pricing** (per million tokens):

- Claude Haiku: $0.25/$1.25 (input/output)

- Claude Sonnet 4: $3/$15 (input/output)

- Claude Opus 4: $15/$75 (input/output)

## Safety and Alignment

Anthropic classifies its models using an internal Anthropic Safety Level (ASL) scale. Claude 4 models are classified as ASL-3, indicating they are powerful enough to pose "significantly higher risk" and require enhanced safety measures.[&#91;22&#93;](#cite_note-asl-classification-22)

Safety measures include:

- Extensive red teaming exercises to identify vulnerabilities

- Bias mitigation through Constitutional AI

- External evaluations by independent researchers

- Collaboration with organizations like Thorn for child safety

- Reduced susceptibility to prompt injection and jailbreaking attempts[&#91;23&#93;](#cite_note-safety-measures-23)

## Reception

### Positive Reception

Claude has received praise for:

- Leading performance on coding benchmarks (77.2% on SWE-bench Verified for Sonnet 4.5)

- Large context window capabilities enabling processing of entire books

- Natural, human-like writing style

- Strong safety and alignment measures

- Practical utility in enterprise settings

Reviews highlight Claude's performance advantages over competitors, with Sonnet 4.5 being called the "best coding model in the world" by Anthropic. Enterprise adoption has grown significantly, with a 5.5x revenue increase reported in August 2025.[&#91;24&#93;](#cite_note-enterprise-growth-24)

### Criticisms and Controversies

#### Alignment Concerns

Some users have noted that Claude's strong ethical alignment can reduce usability, with the model refusing to assist with benign requests that it misinterprets as harmful. For example, the system administration question "How can I kill all python processes in my Ubuntu server?" has been refused due to the word "kill."[&#91;25&#93;](#cite_note-alignment-criticism-25)

#### ClaudeBot Controversy

Anthropic's web crawler, ClaudeBot, has faced criticism for:

- Allegedly ignoring robots.txt protocols

- Causing excessive server loads during data collection

- Aggressive crawling behavior affecting website performance[&#91;26&#93;](#cite_note-claudebot-issue-26)

#### Legal Issues

On October 18, 2023, Anthropic was sued by Concord, Universal, ABKCO, and other music publishers for alleged systematic and widespread infringement of copyrighted song lyrics.[&#91;27&#93;](#cite_note-copyright-lawsuit-27)

#### Mobile App Reception

The Claude mobile app saw tepid reception compared to ChatGPT's launch, with slower adoption rates despite comparable functionality.[&#91;28&#93;](#cite_note-mobile-reception-28)

## Privacy and Data Use

In October 2025, Anthropic updated its policy so that chats from personal (non-enterprise) users are used to improve models by default, with an opt-out offered in account settings. Key points:

- Retention extended to five years

- Enterprise, government, and education accounts excluded from training use

- Users can opt out through account settings

- No training on user data without permission for enterprise accounts[&#91;29&#93;](#cite_note-wired-optout-29)

## Research Context

Constitutional AI, articulated in a 2022 paper, has influenced Claude's training and alignment approach and is cited by Anthropic as a scalable method that reduces reliance on large volumes of human-labeled "harms" data. The approach represents a significant departure from traditional RLHF methods used by competitors.[&#91;13&#93;](#cite_note-cai-paper-13)

Anthropic's research has contributed to the field of AI safety through:

- Development of Constitutional AI methodology

- Research on AI interpretability and mechanistic understanding

- Work on scalable oversight and alignment techniques

- Publications on red teaming and safety evaluation methods[&#91;30&#93;](#cite_note-research-contributions-30)

## See Also

- [Anthropic](/wiki/anthropic)

- [Claude Skills](/wiki/claude_skills)

- [Large language model](/wiki/large_language_model)

- [Generative artificial intelligence](/index.php?title=Generative_artificial_intelligence&action=edit&redlink=1)

- [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback)

- [Constitutional AI](/index.php?title=Constitutional_AI&action=edit&redlink=1)

- [AI safety](/index.php?title=AI_safety&action=edit&redlink=1)

- [Claude Shannon](/index.php?title=Claude_Shannon&action=edit&redlink=1)

- [GPT-4](/wiki/gpt-4)

- [Gemini (language model)](/index.php?title=Gemini_(language_model)&action=edit&redlink=1)

- [ChatGPT](/wiki/chatgpt)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-anthropic-claude4_1-0) [1.1](#cite_ref-anthropic-claude4_1-1) [1.2](#cite_ref-anthropic-claude4_1-2) Introducing Claude 4 - Anthropic (22 May 2025). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/claude-4](https://www.anthropic.com/news/claude-4).

2. [↑](#cite_ref-shannon-naming_2-0) Anthropic Claude Model Overview - Anthropic. Retrieved 3 Oct 2025.

3. [↑](#cite_ref-aws-bedrock_3-0) Anthropic's Claude Sonnet 4.5 is now in Amazon Bedrock - AWS "What's New" (29 Sep 2025). Retrieved 3 Oct 2025 from [https://aws.amazon.com/about-aws/whats-new/2025/09/anthropic-claude-sonnet-4-5-amazon-bedrock](https://aws.amazon.com/about-aws/whats-new/2025/09/anthropic-claude-sonnet-4-5-amazon-bedrock).

4. [↑](#cite_ref-gcp-vertex_4-0) Models overview: Anthropic Claude on Vertex AI - Google Cloud Docs. Retrieved 3 Oct 2025 from [https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude).

5. ↑ [5.0](#cite_ref-claude3-family_5-0) [5.1](#cite_ref-claude3-family_5-1) Introducing the next generation of Claude - Anthropic (4 Mar 2024). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/claude-3-family](https://www.anthropic.com/news/claude-3-family).

6. ↑ [6.0](#cite_ref-c35_6-0) [6.1](#cite_ref-c35_6-1) Introducing Claude 3.5 Sonnet - Anthropic (21 Jun 2024). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/claude-3-5-sonnet](https://www.anthropic.com/news/claude-3-5-sonnet).

7. ↑ [7.0](#cite_ref-code-2025_7-0) [7.1](#cite_ref-code-2025_7-1) Enabling Claude Code to work more autonomously - Anthropic (29 Sep 2025). Retrieved 3 Oct 2025 from [https://anthropic.com/news/enabling-claude-code-to-work-more-autonomously](https://anthropic.com/news/enabling-claude-code-to-work-more-autonomously).

8. [↑](#cite_ref-anthropic-founding_8-0) Anthropic Founding Team - Anthropic (2021). Retrieved 3 Oct 2025.

9. [↑](#cite_ref-funding-details_9-0) Anthropic Funding History - TechCrunch (Mar 2025). Retrieved 3 Oct 2025.

10. ↑ [10.0](#cite_ref-constitution-blog_10-0) [10.1](#cite_ref-constitution-blog_10-1) Claude's Constitution - Anthropic (9 May 2023). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/claudes-constitution](https://www.anthropic.com/news/claudes-constitution).

11. [↑](#cite_ref-tc-claude2_11-0) Wiggers, K. (11 Jul 2023). "Anthropic releases Claude 2, its second-gen AI chatbot." TechCrunch. Retrieved 3 Oct 2025 from [https://techcrunch.com/2023/07/11/anthropic-releases-claude-2-the-second-generation-of-its-ai-chatbot/](https://techcrunch.com/2023/07/11/anthropic-releases-claude-2-the-second-generation-of-its-ai-chatbot/).

12. [↑](#cite_ref-sonnet45-blog_12-0) Introducing Claude Sonnet 4.5 - Anthropic (29 Sep 2025). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/claude-sonnet-4-5](https://www.anthropic.com/news/claude-sonnet-4-5).

13. ↑ [13.0](#cite_ref-cai-paper_13-0) [13.1](#cite_ref-cai-paper_13-1) [13.2](#cite_ref-cai-paper_13-2) Bai, Y. et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." arXiv:2212.08073. Retrieved 3 Oct 2025 from [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073).

14. [↑](#cite_ref-transparency_14-0) Anthropic Transparency Hub - Model Report (7 Aug 2025). Retrieved 3 Oct 2025 from [https://www.anthropic.com/transparency/model-report](https://www.anthropic.com/transparency/model-report).

15. [↑](#cite_ref-context-windows_15-0) Claude Context Windows - Anthropic Docs. Retrieved 3 Oct 2025.

16. [↑](#cite_ref-memory-feature_16-0) Claude Memory Feature - Anthropic (Aug 2025). Retrieved 3 Oct 2025.

17. [↑](#cite_ref-projects-feature_17-0) Claude Projects Feature - Anthropic (Jun 2024). Retrieved 3 Oct 2025.

18. [↑](#cite_ref-artifacts-feature_18-0) Claude Artifacts - Anthropic (Jun 2024). Retrieved 3 Oct 2025.

19. [↑](#cite_ref-computer-use_19-0) Claude Computer Use - Anthropic (Oct 2024). Retrieved 3 Oct 2025.

20. [↑](#cite_ref-skills-intro_20-0) Introducing Claude Skills - Anthropic (16 Oct 2025). Retrieved 3 Oct 2025 from [https://www.anthropic.com/news/skills](https://www.anthropic.com/news/skills).

21. [↑](#cite_ref-skills-engineering_21-0) Equipping agents for the real world with Agent Skills - Anthropic (16 Oct 2025). Retrieved 3 Oct 2025 from [https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills).

22. [↑](#cite_ref-asl-classification_22-0) Anthropic Safety Levels - Anthropic. Retrieved 3 Oct 2025.

23. [↑](#cite_ref-safety-measures_23-0) Claude Safety Measures - Anthropic (2025). Retrieved 3 Oct 2025.

24. [↑](#cite_ref-enterprise-growth_24-0) Anthropic Enterprise Growth - TechCrunch (Aug 2025). Retrieved 3 Oct 2025.

25. [↑](#cite_ref-alignment-criticism_25-0) Claude Alignment Issues - Tech Review (2024). Retrieved 3 Oct 2025.

26. [↑](#cite_ref-claudebot-issue_26-0) ClaudeBot Crawling Issues - Web Admin Forum (2024). Retrieved 3 Oct 2025.

27. [↑](#cite_ref-copyright-lawsuit_27-0) Music Publishers Sue Anthropic - Legal News (18 Oct 2023). Retrieved 3 Oct 2025.

28. [↑](#cite_ref-mobile-reception_28-0) Claude Mobile App Reception - TechCrunch (May 2024). Retrieved 3 Oct 2025.

29. [↑](#cite_ref-wired-optout_29-0) Wired (30 Sep 2025). "Anthropic Will Use Claude Chats for Training Data. Here's How to Opt Out." Retrieved 3 Oct 2025 from [https://www.wired.com/story/anthropic-using-claude-chats-for-training-how-to-opt-out](https://www.wired.com/story/anthropic-using-claude-chats-for-training-how-to-opt-out).

30. [↑](#cite_ref-research-contributions_30-0) Anthropic Research Publications - Anthropic. Retrieved 3 Oct 2025.