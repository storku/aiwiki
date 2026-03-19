---
title: "Sora"
slug: "sora"
categories:
  - "OpenAI"
  - "Generative_AI"
  - "Video_generation"
  - "Artificial_intelligence"
  - "Models"
---

**Sora** is a [generative artificial intelligence](/wiki/generative_ai) model developed by [OpenAI](/wiki/openai) that creates videos from text prompts, images, or existing video inputs. Named after the Japanese word for "sky" to signify its creative potential, Sora uses a [diffusion transformer](/wiki/diffusion_models) architecture that operates on spacetime patches of video and image latent codes. OpenAI first previewed the model on February 15, 2024, and released it publicly on December 9, 2024, as part of the company's "12 Days of Shipmas" event. A successor model, Sora 2, was released on September 30, 2025, with synchronized audio generation and a standalone iOS app.

## Overview

Sora generates video by converting text descriptions (and optionally images or reference videos) into short video clips. The model can produce content in various resolutions up to 1080p, in widescreen, vertical, or square aspect ratios. OpenAI positions Sora as both a creative tool and a step toward building general-purpose simulators of the physical world; the company's technical report describes video generation models as "world simulators" that learn to represent and render aspects of physical reality through training on large video datasets.

The model is available through [ChatGPT](/wiki/chatgpt) Plus and Pro subscriptions, through a standalone Sora app, and (for Sora 2) via a developer API launched at DevDay 2025 in October. Sora is not available in all countries; as of early 2026, geographic availability remains limited to the United States, Canada, Japan, South Korea, Taiwan, Thailand, Vietnam, and select Latin American countries, with European availability pending compliance with the EU AI Act.

## History

### Research preview (February 2024)

On February 15, 2024, OpenAI publicly previewed Sora by releasing several sample clips, including an SUV driving on a mountain road, an animated "short fluffy monster" beside a candle, two people walking through snowy Tokyo streets, and faux-historical footage of the California gold rush. The preview demonstrated the model's ability to generate up to one minute of high-fidelity video from text descriptions. OpenAI simultaneously published a technical report titled "Video generation models as world simulators," which described the underlying architecture and training methods.

At the time of the preview, Sora was not made publicly available. OpenAI shared access with a small group of safety testers (red teamers) and a select group of video makers and artists for feedback on how to improve the model for creative professionals. CEO [Sam Altman](/wiki/sam_altman) solicited text prompts from users on social media and posted sample generations, which generated widespread attention.

### Artist testing controversy (November 2024)

Approximately 300 artists received early access to Sora under an arrangement that OpenAI described as a creative partnership and red-teaming program. On November 26, 2024, a group of these artists staged a protest by leaking access to the unreleased model. Using their authentication tokens from the early access system, the group published a front end on Hugging Face that let the public generate videos with Sora's API.

The artists published an open letter stating they had been "lured into art washing" and were expected to tell the world that Sora was a "useful tool for artists" without adequate compensation. They noted that hundreds of participants provided unpaid labor through bug testing, feedback, and experimental work for a company valued at $150 billion, while only a select few would have their Sora-created films screened. OpenAI shut down the interface within three hours and temporarily paused all early-access users' access to Sora while investigating the situation.

### Public launch as Sora Turbo (December 2024)

On December 9, 2024, during day three of the "12 Days of Shipmas" event (a series of daily product announcements from December 5 to 20), OpenAI released Sora publicly. The released version was called "Sora Turbo," a faster variant of the model previewed in February. It was made available to ChatGPT Plus and Pro subscribers through sora.com.

The December release included several creative tools beyond basic text-to-video generation: a storyboard editor for specifying frame-by-frame inputs, a remix tool for making targeted changes to generated videos, and a blend feature for merging two video clips into a smooth transition.

| Feature | Details |
| --- | --- |
| Resolution | Up to 1080p |
| Duration | 5 to 20 seconds |
| Aspect ratios | Widescreen (16:9), vertical (9:16), square (1:1) |
| Storyboard | Frame-by-frame scene specification |
| Remix | Targeted edits to objects and subjects |
| Blend | Merge two videos into a seamless transition |
| Image-to-video | Animate a still image into motion |

### Sora 2 (September 2025)

On September 30, 2025, OpenAI released Sora 2, which the company described as the "GPT-3.5 moment for video." The update introduced synchronized audio generation, improved physics simulation, and a new standalone iOS app. An Android app followed approximately two months later.

Sora 2 generates videos with synchronized dialogue, sound effects, and ambient audio in a single pass, rather than requiring audio to be added separately after video generation. OpenAI also introduced a "characters" feature that allows users to insert themselves or other people into generated scenes after a short video-and-audio identity recording within the app.

### Sora 2 API (October 2025)

On October 7, 2025, at DevDay 2025, OpenAI launched the Sora 2 API, making developer access available for the first time. The API offers two model variants: sora-2 (optimized for speed) and sora-2-pro (longer render times but higher production quality). API endpoints include video creation, status polling, and video download.

## Technical architecture

### Diffusion transformer (DiT)

Sora is a diffusion transformer, combining the denoising process of [diffusion models](/wiki/diffusion_models) with the [transformer](/wiki/transformer) architecture that has proven effective across multiple domains in machine learning. Specifically, Sora is a denoising latent diffusion model that uses a transformer as its denoiser, rather than the U-Net architecture traditionally used in diffusion models such as [Stable Diffusion](/wiki/stable_diffusion).

The key advantage of using a transformer over a U-Net is scalability. Transformers use an [attention mechanism](/wiki/attention_mechanism) that weighs the relevance of every piece of input data against every other input, and this architecture can be parallelized more effectively, allowing larger models to be trained with proportional (rather than exponential) increases in compute.

### Patch-based representation

Sora processes video through a patch-based system that draws on the concept of tokens in [large language models](/wiki/llm). The process works in three stages:

1. A video compressor reduces raw video into a lower-dimensional latent space representation.
2. This compressed representation is decomposed into a sequence of spacetime patches, which serve as the transformer's input tokens. Each patch represents a small region of video across both space and time.
3. After the transformer denoises the latent representation, a video decompressor transforms the output back into standard pixel space.

This patch-based approach allows Sora to train on videos and images of variable durations, resolutions, and aspect ratios without requiring standardized input sizes. OpenAI trained the model on videos in their native aspect ratios and resolutions, ranging from 1920x1080 to 1080x1920 and many sizes in between.

### Training approach

Sora was trained as a text-conditional diffusion model jointly on videos and images of variable durations, resolutions, and aspect ratios. The training data consisted of:

- Publicly available datasets, primarily from industry-standard machine learning datasets and web crawls
- Proprietary data obtained through partnerships, including agreements with Shutterstock and Pond5
- Custom datasets developed in-house by OpenAI

To improve prompt adherence, Sora reuses the re-captioning technique from [DALL-E 3](/wiki/dall-e_3): a trained captioning model generates highly descriptive captions for training videos, which helps the model follow user text instructions more faithfully during generation.

### Generation process

Video generation starts from a representation that resembles static noise. Over many iterative denoising steps, the model gradually removes noise to produce coherent video frames. Sora can also condition the generation process on existing images or video frames, enabling image-to-video animation and video editing workflows.

## Capabilities

### Text-to-video generation

Sora's primary function is generating video clips from natural language descriptions. The model handles complex, multi-element prompts and understands cinematic terminology such as camera angles and shot types. For example, a prompt describing "a woman walking in Tokyo, beautiful colorful neon city, 35mm photograph" produces a video that reflects the specified visual style and setting.

### Image-to-video

Users can provide a still image as a starting point, and Sora will animate it into a video clip. This feature allows photographers, illustrators, and designers to see their static work translated into motion.

### Video editing and remixing

Sora includes tools for modifying existing generated videos:

| Tool | Function |
| --- | --- |
| Storyboard | Build a video frame by frame, specifying different prompts or images for each segment |
| Remix | Make targeted changes to objects, subjects, or visual style within a generated video |
| Blend | Combine two video clips into a smooth, seamless transition |
| Extend | Add additional frames to the beginning or end of an existing clip |

### Sora 2 audio generation

With Sora 2, the model generates synchronized audio alongside video in a single generation pass. This includes:

- Background soundscapes and ambient noise
- Sound effects tied to on-screen actions
- Spoken dialogue with lip synchronization
- Music and atmospheric audio

### Sora 2 characters

The characters feature in Sora 2 allows users to record a short video and audio sample of themselves within the app. The model can then insert that person into any generated scene with an accurate rendering of their appearance and voice. This capability works for humans, animals, and objects.

### Physics simulation

OpenAI's technical report noted that Sora learns certain aspects of physical simulation from training data. However, the model's physics understanding has improved across versions:

- Sora (original preview, February 2024) had significant limitations with complex physics, causality, and left-right orientation. It could not reliably simulate glass shattering, and interactions like eating food did not always produce correct changes in object state.
- Sora Turbo (December 2024) improved on some of these issues but retained notable inconsistencies.
- Sora 2 (September 2025) showed further improvement. OpenAI noted that a basketball player missing a shot would see the ball rebound off the backboard, and the model could generate complex physical scenarios like gymnastics routines and paddleboard backflips with more accurate dynamics of buoyancy and rigidity. Despite this progress, the model still makes physics errors, though OpenAI stated that many of Sora 2's "mistakes" appear to be mistakes of the internal agent that the model implicitly simulates rather than arbitrary glitches.

## Pricing and availability

### Subscription tiers

Sora's availability and capabilities vary by [ChatGPT](/wiki/chatgpt) subscription tier. The original Sora (December 2024) and Sora 2 have different tier structures.

**Sora Turbo (December 2024):**

| Tier | Price | Videos per month | Max resolution | Max duration |
| --- | --- | --- | --- | --- |
| ChatGPT Plus | $20/month | ~50 at 480p (fewer at 720p) | 720p | 5 seconds (720p) |
| ChatGPT Pro | $200/month | 10x Plus allocation | 1080p | 20 seconds |

**Sora 2 (September 2025):**

| Tier | Resolution | Duration | Notes |
| --- | --- | --- | --- |
| Free (discontinued January 2026) | 720p | Up to 10 seconds | Removed January 10, 2026 |
| ChatGPT Plus | 720p | Up to 15 seconds | $20/month |
| ChatGPT Pro | 1080p | Up to 25 seconds (with storyboard) | $200/month; includes Sora 2 Pro model |

Starting January 10, 2026, free users lost the ability to generate images and videos with Sora; the feature became exclusive to Plus ($20/month) and Pro ($200/month) subscribers.

### API pricing (Sora 2)

| Model | 720p per second | 1024p per second |
| --- | --- | --- |
| sora-2 | $0.10 | N/A (720p max) |
| sora-2-pro | $0.30 | $0.50 |

The sora-2 model supports up to 1280x720 resolution, while sora-2-pro supports up to 1792x1024. Both models generate clips up to 12 seconds long through the API.

### Geographic availability

As of early 2026, Sora is officially available in a limited number of countries:

| Region | Countries |
| --- | --- |
| North America | United States, Canada |
| East Asia | Japan, South Korea, Taiwan |
| Southeast Asia | Thailand, Vietnam |
| Latin America | Argentina, Chile (recently added) |

European availability, including the UK and Germany, remains pending due to compliance reviews related to the EU AI Act. OpenAI has not announced specific dates for broader European rollout. India and broader Southeast Asian access have been predicted for mid-2026.

## Safety measures and content policy

### Red teaming and evaluation

Before Sora's public launch, OpenAI conducted red teaming exercises with external testers. Over nine months, the company observed feedback across more than 500,000 model requests from over 300 users in more than 60 countries. This testing revealed gaps in input and output filtering and informed improvements to classifier thresholds, prompt filtering, and blocklists.

Red teaming also identified the need for stronger classifier filtering to prevent non-prohibited media uploads from being modified into prohibited content categories, including explicit sexual content, graphic violence, and deepfake material.

OpenAI published a system card for both Sora (December 2024) and Sora 2 (September 2025), documenting safety evaluations, known limitations, and mitigation strategies.

### Content filtering

Sora automatically scans both text prompts and generated video frames to block content that violates OpenAI's usage policies. Prohibited content includes:

- Graphic violence and gore
- Explicit sexual content
- Hateful imagery
- Content depicting real individuals without consent
- Disinformation and deceptive media

### Provenance and watermarking

Every Sora-generated video includes provenance signals:

- **C2PA metadata**: An industry-standard cryptographic signature embedded in the video file that proves the content was generated by AI. C2PA (Coalition for Content Provenance and Authenticity) metadata persists even when videos are shared or re-uploaded to some platforms.
- **Visible watermark**: At launch, all Sora videos included a visible watermark. After receiving feedback from artists who found the watermark limiting for professional workflows, OpenAI allowed paying subscribers to download videos without the visible watermark while retaining the embedded C2PA metadata.

OpenAI also maintains internal reverse-image and audio search tools that can trace videos back to Sora with high accuracy.

However, researchers have raised concerns about the watermarking implementation. Free online tools have been shown to remove the visible watermark from Sora videos in approximately four minutes, and C2PA metadata can be stripped from files through simple format conversion.

### Likeness and opt-in policies

After Sora 2's launch, OpenAI updated its policy to require that any person or character must opt in before their likeness can be used in generated content. This change came after users began recreating celebrities without consent, prompting complaints from performers and their representatives. Actor Bryan Cranston, through SAG-AFTRA (Screen Actors Guild-American Federation of Television and Radio Artists), publicly praised OpenAI for tightening the rules.

## Controversies

### Artist compensation and "art washing"

The November 2024 artist protest (described in the History section above) raised broader questions about how AI companies engage creative professionals during model development. The protesting artists argued that their unpaid testing work constituted free labor that primarily benefited OpenAI's marketing and public relations efforts. The incident drew attention to the tension between AI companies' desire for artist endorsement and artists' concerns about being used to legitimize tools they see as threatening to their livelihoods.

### Deepfake concerns

Shortly after Sora 2's release, critics warned that the model's realistic video generation capabilities posed risks for non-consensual deepfakes and political disinformation. Several incidents and responses followed:

- In October 2025, OpenAI tightened deepfake restrictions after pressure from Bryan Cranston, SAG-AFTRA, and other performers who found their faces and voices appearing in AI-generated clips without permission.
- In November 2025, watchdog group Public Citizen published a letter demanding that OpenAI withdraw the Sora 2 app entirely, citing threats to democracy and the flood of synthetic media with minimal or no labeling.
- Users discovered loopholes in Sora 2's celebrity deepfake ban that allowed generating recognizable likenesses through indirect prompt phrasing.

NPR reported in October 2025 that critics' fears about Sora's "reality distortion powers" had materialized, with AI-generated content appearing across the internet, often without clear labeling to indicate that the media was synthetic.

### Copyright and intellectual property

Sora's training data and output capabilities have generated significant copyright controversies:

**Training data disputes:** Sora's training data includes publicly available datasets, web crawls, and content obtained through partnerships with stock media companies Shutterstock and Pond5. However, investigations have revealed that generated outputs sometimes closely resemble specific copyrighted content. The model has been shown producing videos featuring recognizable characters and visual styles from properties including Bob's Burgers, SpongeBob SquarePants, Gravity Falls, Pokemon, Grand Theft Auto, and Red Dead Redemption.

**Japanese IP allegations:** In November 2025, the Content Overseas Distribution Association (CODA) and nearly 20 co-signing Japanese companies accused OpenAI of unauthorized use of Japanese intellectual property. The complaint claimed that a "large portion" of Sora 2's generated media "closely resembles Japanese content or images," accusing OpenAI of using copyrighted anime and game materials in training.

**Opt-out policy reversal:** When Sora 2 launched, OpenAI adopted a policy requiring copyright holders to affirmatively opt out if they wanted to prevent their intellectual property from being used. This default opt-in approach drew strong criticism from the entertainment industry. The Creative Artists Agency (CAA) issued a statement calling Sora 2 a threat to clients' intellectual property, asserting that "compensation is a fundamental right." Just three days after launch, OpenAI reversed course and announced it would move to an opt-in model requiring permission before copyrighted characters could appear in Sora 2 outputs. OpenAI also floated the idea of sharing some revenue with rights holders who consent to having their characters generated.

**Broader legal context:** These disputes exist alongside ongoing copyright litigation involving AI companies. The New York Times lawsuit against OpenAI and Microsoft (filed in late 2023) raises related questions about the use of copyrighted material in training generative models.

### Public Citizen demand

In November 2025, the advocacy group Public Citizen published a formal demand calling on OpenAI to withdraw the Sora 2 app, citing risks including:

- Proliferation of non-consensual deepfakes
- Potential for political disinformation
- Insufficient content labeling
- Threats to democratic processes

OpenAI did not withdraw the app but stated it was continuing to improve safety measures.

## Known limitations

OpenAI has acknowledged several limitations in Sora's capabilities:

| Limitation | Description |
| --- | --- |
| Physics accuracy | While improving across versions, the model does not reliably simulate all physical interactions. Complex scenarios involving fluid dynamics, fracturing objects, or multi-body collisions remain inconsistent. |
| Causality | The model sometimes fails to understand cause-and-effect relationships within a scene. |
| Spatial reasoning | Earlier versions mixed up left and right orientations. Sora 2 has improved but is not fully reliable. |
| Object permanence | Objects may appear, disappear, or change state unexpectedly during longer video clips. |
| Temporal consistency | Maintaining consistent appearance of characters and objects across the full duration of a clip remains difficult, particularly for videos longer than 10 seconds. |
| Text rendering | Like many generative models, Sora struggles to render legible text within generated video frames. |
| Duration | Maximum clip length is constrained by computational cost; API-generated clips are limited to 12 seconds even for paid tiers. |

## Competition

Sora competes in a rapidly growing market for AI video generation. Several other models and platforms offer comparable or competing capabilities.

| Model | Developer | Release | Max resolution | Max duration | Audio | Notable features |
| --- | --- | --- | --- | --- | --- | --- |
| Sora 2 | [OpenAI](/wiki/openai) | September 2025 | 1080p (Pro) | 25 seconds | Yes (synchronized) | Characters feature, social app, storyboard |
| Veo 3 / 3.1 | [Google](/wiki/google) DeepMind | 2025 | 1080p+ | Variable | Yes (synchronized) | Synchronized dialogue, massive compute resources |
| Runway Gen-4 / 4.5 | Runway | 2025 | 1080p | Variable | Post-generation | Motion brushes, top benchmark scores on Artificial Analysis |
| Pika 2.5 | Pika Labs | 2025 | 1080p | Short-form | Post-generation | Fastest generation speed (30-90 seconds), low learning curve |
| Kling | Kuaishou | 2024-2025 | 1080p | Variable | Variable | Popular for social media content |
| Wan 2.2 | Alibaba | 2025 | Variable | Variable | No | Open source, local deployment |
| LTX-2 | Lightricks | 2025 | Variable | Variable | No | Open source, privacy-focused local deployment |

Google's Veo 3.1 and Runway Gen-4.5 are generally considered Sora 2's closest competitors. Veo 3.1 matches Sora 2's synchronized audio capability, while Runway Gen-4.5 has scored higher than Sora 2 on the Artificial Analysis Text to Video benchmark. Pika Labs differentiates itself through generation speed (3 to 6 times faster than competitors in testing) and ease of use, though its output quality is generally considered below Sora 2 and Runway for photorealistic content.

## See also

- [OpenAI](/wiki/openai)
- [Diffusion models](/wiki/diffusion_models)
- [DALL-E 3](/wiki/dall-e_3)
- [Transformer](/wiki/transformer)
- [Generative AI](/wiki/generative_ai)
- [ChatGPT](/wiki/chatgpt)
- [Large language model](/wiki/llm)
- [Attention mechanism](/wiki/attention_mechanism)
- [Stable Diffusion](/wiki/stable_diffusion)
- [Sam Altman](/wiki/sam_altman)

## References

1. "Sora: Creating video from text." OpenAI (February 15, 2024). [https://openai.com/index/sora/](https://openai.com/index/sora/)
2. "Video generation models as world simulators." OpenAI (February 2024). [https://openai.com/index/video-generation-models-as-world-simulators/](https://openai.com/index/video-generation-models-as-world-simulators/)
3. "Sora is here." OpenAI (December 9, 2024). [https://openai.com/index/sora-is-here/](https://openai.com/index/sora-is-here/)
4. "Sora 2 is here." OpenAI (September 30, 2025). [https://openai.com/index/sora-2/](https://openai.com/index/sora-2/)
5. "Sora System Card." OpenAI (December 2024). [https://openai.com/index/sora-system-card/](https://openai.com/index/sora-system-card/)
6. "Sora 2 System Card." OpenAI (September 30, 2025). [https://cdn.openai.com/pdf/50d5973c-c4ff-4c2d-986f-c72b5d0ff069/sora_2_system_card.pdf](https://cdn.openai.com/pdf/50d5973c-c4ff-4c2d-986f-c72b5d0ff069/sora_2_system_card.pdf)
7. "Launching Sora responsibly." OpenAI. [https://openai.com/index/launching-sora-responsibly/](https://openai.com/index/launching-sora-responsibly/)
8. "Sora - Release Notes." OpenAI Help Center. [https://help.openai.com/en/articles/12593142-sora-release-notes](https://help.openai.com/en/articles/12593142-sora-release-notes)
9. "Sora - Supported Countries." OpenAI Help Center. [https://help.openai.com/en/articles/10250692-sora-supported-countries](https://help.openai.com/en/articles/10250692-sora-supported-countries)
10. "Sora App and Sora 2 - Supported Countries." OpenAI Help Center. [https://help.openai.com/en/articles/12461230-sora-app-and-sora-2-supported-countries](https://help.openai.com/en/articles/12461230-sora-app-and-sora-2-supported-countries)
11. "OpenAI releases Sora, its buzzy AI video-generation tool." CNBC (December 9, 2024). [https://www.cnbc.com/2024/12/09/openai-releases-sora-its-buzzy-ai-video-generation-tool.html](https://www.cnbc.com/2024/12/09/openai-releases-sora-its-buzzy-ai-video-generation-tool.html)
12. "OpenAI teases an amazing new generative video model called Sora." MIT Technology Review (February 15, 2024). [https://www.technologyreview.com/2024/02/15/1088401/openai-amazing-new-generative-ai-video-model-sora/](https://www.technologyreview.com/2024/02/15/1088401/openai-amazing-new-generative-ai-video-model-sora/)
13. "OpenAI stops Sora video model access after artists leak in protest." The Washington Post (November 26, 2024). [https://www.washingtonpost.com/technology/2024/11/26/openai-sora-ai-video-model-artists-protest/](https://www.washingtonpost.com/technology/2024/11/26/openai-sora-ai-video-model-artists-protest/)
14. "OpenAI Shuts Down Sora Access After Artists Leak Video Tool in Protest." Variety (November 26, 2024). [https://variety.com/2024/digital/news/openai-shuts-down-sora-artists-protest-leak-1236224878/](https://variety.com/2024/digital/news/openai-shuts-down-sora-artists-protest-leak-1236224878/)
15. "Artists Leak OpenAI Sora Model in Protest at Unpaid Labor." Tech.co (November 2024). [https://tech.co/news/artists-leak-openai-video-model-in-protest-unpaid-labor](https://tech.co/news/artists-leak-openai-video-model-in-protest-unpaid-labor)
16. "Diffusion transformers are the key behind OpenAI's Sora, and they're set to upend GenAI." TechCrunch (February 28, 2024). [https://techcrunch.com/2024/02/28/diffusion-transformers-are-the-key-behind-openais-sora-and-theyre-set-to-upend-genai/](https://techcrunch.com/2024/02/28/diffusion-transformers-are-the-key-behind-openais-sora-and-theyre-set-to-upend-genai/)
17. "Sora (text-to-video model)." Wikipedia. [https://en.wikipedia.org/wiki/Sora_(text-to-video_model)](https://en.wikipedia.org/wiki/Sora_(text-to-video_model))
18. "Sora: A Review on Background, Technology, Limitations, and Opportunities of Large Vision Models." arXiv (February 2024). [https://arxiv.org/html/2402.17177v1](https://arxiv.org/html/2402.17177v1)
19. "OpenAI's Sora Underscores the Growing Threat of Deepfakes." TIME. [https://time.com/7327031/openai-sora-deepfakes-privacy/](https://time.com/7327031/openai-sora-deepfakes-privacy/)
20. "OpenAI cracks down on Sora 2 deepfakes after pressure from Bryan Cranston, SAG-AFTRA." CNBC (October 20, 2025). [https://www.cnbc.com/2025/10/20/open-ai-sora-bryan-cranston-sag-aftra.html](https://www.cnbc.com/2025/10/20/open-ai-sora-bryan-cranston-sag-aftra.html)
21. "Watchdog group Public Citizen demands OpenAI withdraw AI video app Sora over deepfake dangers." The Washington Post (November 11, 2025). [https://www.washingtonpost.com/politics/2025/11/11/sora-2-openai-ai-video-generator-public-citizen/](https://www.washingtonpost.com/politics/2025/11/11/sora-2-openai-ai-video-generator-public-citizen/)
22. "How OpenAI's Sora could change the internet with deepfakes." NPR (October 10, 2025). [https://www.npr.org/2025/10/10/nx-s1-5567162/sora-ai-openai-deepfake](https://www.npr.org/2025/10/10/nx-s1-5567162/sora-ai-openai-deepfake)
23. "Japanese Media Giants Accuse OpenAI of Copyright Infringement Over Sora 2 Training Data." TechTimes (November 3, 2025). [https://www.techtimes.com/articles/312456/20251103/japanese-media-giants-accuse-openai-copyright-infringement-over-sora-2-training-data.htm](https://www.techtimes.com/articles/312456/20251103/japanese-media-giants-accuse-openai-copyright-infringement-over-sora-2-training-data.htm)
24. "CAA Slams OpenAI's Sora 2 For Posing Serious and Harmful Risks to Clients' Intellectual Property." Variety (2025). [https://variety.com/2025/film/news/caa-openai-sora-2-harmful-intellectual-property-1236543954/](https://variety.com/2025/film/news/caa-openai-sora-2-harmful-intellectual-property-1236543954/)
25. "Sora, Not Sorry: OpenAI Backtracks on Opt-Out Copyright Policy." Copyright Lately. [https://copyrightlately.com/openai-backtracks-sora-opt-out-copyright-policy/](https://copyrightlately.com/openai-backtracks-sora-opt-out-copyright-policy/)
26. "OpenAI's Video Tool Features Movies and TV Shows. Will Studios Sue?" The Hollywood Reporter. [https://www.hollywoodreporter.com/business/business-news/openai-movies-tv-shows-lawsuits-legal-risk-1236391327/](https://www.hollywoodreporter.com/business/business-news/openai-movies-tv-shows-lawsuits-legal-risk-1236391327/)
27. "OpenAI's Sora Sparks Copyright and Fair Use Debate." Harvard Journal of Sports and Entertainment Law (October 2025). [https://journals.law.harvard.edu/jsel/2025/10/openais-sora-sparks-copyright-debate/](https://journals.law.harvard.edu/jsel/2025/10/openais-sora-sparks-copyright-debate/)
28. "OpenAI Launches Sora 2 API for Developers at DevDay 2025." MLQ.ai. [https://mlq.ai/news/openai-launches-sora-2-api-for-developers-at-devday-2025/](https://mlq.ai/news/openai-launches-sora-2-api-for-developers-at-devday-2025/)
29. "Pricing." OpenAI. [https://openai.com/api/pricing/](https://openai.com/api/pricing/)
30. "Under The Hood: How OpenAI's Sora Model Works." Factorial Funds. [https://www.factorialfunds.com/blog/under-the-hood-how-openai-s-sora-model-works](https://www.factorialfunds.com/blog/under-the-hood-how-openai-s-sora-model-works)
