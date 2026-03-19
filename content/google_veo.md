---
title: "Google Veo"
slug: "google_veo"
categories:
  - "Google"
  - "Generative_AI"
  - "Video_generation"
  - "Artificial_intelligence"
  - "Models"
---

**Google Veo** is a family of [generative AI](/wiki/generative_artificial_intelligence) video models developed by [Google DeepMind](/wiki/google_deepmind). Veo generates high-fidelity video clips from text prompts, image prompts, or video prompts, and (starting with Veo 3) can produce synchronized audio alongside the visuals. First announced at [Google I/O](/wiki/google_io) 2024 on May 14, 2024, the model family has since progressed through multiple generations: Veo 1 (May 2024), Veo 2 (December 2024), Veo 3 (May 2025), and Veo 3.1 (October 2025). Veo is available across several Google platforms including the [Gemini](/wiki/gemini) app, [Vertex AI](/wiki/vertex_ai), Google AI Studio, VideoFX in Google Labs, [YouTube](/wiki/youtube) Shorts (via Dream Screen), and the dedicated filmmaking tool Google Flow.

## Overview

Veo belongs to the category of AI video generation models that convert textual or visual inputs into realistic video sequences. It was developed by [Google DeepMind](/wiki/google_deepmind) as Google's answer to competing models such as [OpenAI](/wiki/openai)'s [Sora](/wiki/sora), [Runway](/wiki/runway_ml)'s Gen-3, and other emerging video generation systems. The model family uses a latent diffusion [transformer](/wiki/transformer) architecture and builds on years of prior Google research into video generation, including Generative Query Network (GQN), DVD-GAN, [Imagen](/wiki/imagen) Video, Phenaki, WALT, VideoPoet, and Lumiere.

A key milestone in Veo's development came with Veo 3, which introduced joint audio-visual generation, allowing the model to produce sound effects, ambient noise, and even spoken dialogue synchronized to the generated video. Google DeepMind CEO Demis Hassabis described this advance by saying: "For the first time, we're emerging from the silent era of video generation."

Veo is distinguished from other Google AI media models in that it focuses specifically on video synthesis, while [Imagen](/wiki/imagen) handles image generation and Lyria handles music generation. However, these models are often used together within Google's broader creative AI ecosystem.

## Version History

### Veo 1 (May 2024)

Veo 1 was unveiled at [Google I/O](/wiki/google_io) 2024 on May 14, 2024, alongside [Imagen](/wiki/imagen) 3. It represented Google's first dedicated, production-oriented video generation model, though it drew heavily on earlier research prototypes.

**Key capabilities at launch:**

- Generation of 1080p resolution videos over one minute in length
- Text-to-video and image-to-video generation
- Understanding of cinematic terminology such as "time lapse," "aerial shot," and specific lens types
- Ability to make edits and adjustments to previously generated footage
- Capture of various visual and cinematic styles, including landscape shots and time-lapse sequences

Google positioned Veo 1 as its most capable video generation model to date, highlighting its "advanced understanding of natural language" and ability to interpret detailed prompts specifying camera movement, lighting, mood, and visual style. Users could direct outputs using text, image, or video-based prompts.

**Creator collaborations:** To showcase Veo's capabilities, Google partnered with filmmaker and musician Donald Glover (Childish Gambino) and his creative studio Gilga. During the I/O keynote, DeepMind CEO Demis Hassabis played a produced video of Glover at his farm in Ojai, California, praising Veo and demonstrating its ability to generate footage from prompts like "tracking shot of a 1960s convertible driving up to a Spanish, Mediterranean palace surrounded by lush foliage." Glover commented: "Everyone's gonna become a director, and everyone should be a director."

**Availability:** Veo 1 was initially available only to a limited number of "trusted testers" through Google Labs. Google also made early access available to select creators. Broader public access was not offered at launch.

### Veo 2 (December 2024)

Google released Veo 2 on December 16, 2024, alongside updates to Imagen 3, expanded access to VideoFX, and the introduction of a new experimental tool called Whisk in Google Labs.

**Improvements over Veo 1:**

- Support for video generation at resolutions up to 4K
- Improved understanding of real-world physics, including more realistic object interactions and environmental behavior
- Enhanced rendering of human movement and facial expressions
- Reduced frequency of visual "hallucinations" (unwanted artifacts such as extra fingers or unexpected objects)
- Better comprehension of cinematographic language and camera controls

**Cinematic controls:** Veo 2 demonstrated a sophisticated understanding of filmmaking concepts. Users could request specific shot types (such as a low-angle tracking shot or a close-up), specify lens characteristics (such as "18mm lens" for wide-angle shots), and apply effects like "shallow depth of field" to blur backgrounds. The model could interpret and execute these instructions with high fidelity.

**Availability expansion:** Veo 2 launched through VideoFX and ImageFX in Google Labs, with plans for broader integration. In April 2025, Veo 2 became available to Gemini Advanced subscribers through the [Gemini](/wiki/gemini) app. Google also began integrating Veo 2 into YouTube Shorts through the Dream Screen feature, initially rolling out in the United States, Canada, Australia, and New Zealand.

**Safety features:** Like all Veo outputs, Veo 2 videos included an invisible [SynthID](/wiki/synthid) watermark to help identify them as AI-generated content, intended to reduce risks of misinformation and misattribution.

### Veo 3 (May 2025)

Veo 3 was announced at [Google I/O](/wiki/google_io) 2025 on May 20, 2025, representing a major leap forward with the introduction of native audio generation.

**Breakthrough capability: joint audio-visual generation.** Veo 3 was the first model in the Veo family to generate synchronized audio alongside video. This included:

- Dialogue and spoken words matching on-screen characters
- Sound effects timed to visual actions
- Ambient noise and environmental audio
- Background music appropriate to the scene

Rather than relying on a separate audio model applied after video generation, Veo 3 reads raw pixels from generated footage and automatically synchronizes audio to the visual content. This joint generation approach was made possible by applying the diffusion process simultaneously to both audio and video latent representations.

**Visual quality improvements:** Beyond audio, Veo 3 also improved upon Veo 2 in terms of overall footage quality, realism, and prompt adherence. The model showed better understanding of physics, more consistent character rendering, and improved temporal coherence across frames.

**Availability:** Veo 3 launched initially in the United States for subscribers to Google's AI Ultra plan ($249.99 per month). It was subsequently expanded to 71 additional countries in late May 2025, and by July 2025, Veo 3 was accessible in 159 countries through the [Gemini](/wiki/gemini) app. Some capabilities remained restricted in the European Economic Area and the United Kingdom.

**Veo 3 Fast:** Alongside the standard Veo 3 model, Google released Veo 3 Fast, a speed-optimized variant that generates videos in approximately half the time (1 to 1.5 minutes compared to 2 to 3 minutes for standard Veo 3) while maintaining 92 to 99 percent of the visual quality. Veo 3 Fast targets use cases where speed and cost efficiency are prioritized, such as social media content creation, rapid prototyping, and high-volume video production.

### Veo 3.1 (October 2025)

Google announced Veo 3.1 on October 14, 2025, as its most advanced video generation model. It built upon the Veo 3 foundation with improvements across audio, visual quality, and creative controls.

**Key improvements:**

- Richer native audio generation with more natural-sounding conversations and more precisely synchronized sound effects
- Enhanced visual realism with true-to-life textures
- Support for both horizontal (16:9) and vertical (9:16) aspect ratios, enabling content creation for mobile and social media platforms
- 1080p HD resolution as standard, with 4K output available
- Improved character consistency across multiple scenes
- Better prompt adherence and cinematic style understanding

**New creative capabilities:**

- **Reference Image Guidance:** Users can provide up to three reference images to guide the generation of characters, objects, or scenes
- **Scene Extension (Extend):** Create longer videos by generating new clips that continue from the final second of a previous clip, enabling videos lasting a minute or more
- **First and Last Frame Control (Frames to Video):** Generate smooth video transitions between two specified images with accompanying audio
- **Ingredients to Video:** Use multiple reference images to control characters, objects, and style in a final generated scene

**Availability:** Veo 3.1 is available through the Gemini app, Google Flow, Google AI Studio, the Gemini API, and Vertex AI for enterprise users, offered in paid preview.

## Version Comparison

| Feature | Veo 1 (May 2024) | Veo 2 (Dec 2024) | Veo 3 (May 2025) | Veo 3.1 (Oct 2025) |
|---|---|---|---|---|
| Maximum resolution | 1080p | 4K | 720p (API default), 1080p | 1080p (standard), 4K |
| Native audio generation | No | No | Yes | Yes (enhanced) |
| Maximum video duration | Over 60 seconds | Minutes | 8 seconds (API) | 8 seconds (API), extendable to 60+ seconds |
| Aspect ratios | 16:9 | 16:9 | 16:9 | 16:9, 9:16 |
| Text-to-video | Yes | Yes | Yes | Yes |
| Image-to-video | Yes | Yes | Yes | Yes (enhanced) |
| Physics understanding | Basic | Improved | Advanced | Advanced |
| Character consistency | Limited | Improved | Good | Enhanced |
| Reference image guidance | No | No | No | Yes (up to 3 images) |
| Scene extension | Limited | Yes | Yes | Yes (enhanced) |
| Fast variant available | No | No | Yes | Yes |
| SynthID watermark | Yes | Yes | Yes | Yes |

## Technical Architecture

### Latent Diffusion Transformer

Veo uses a latent diffusion transformer architecture that combines the computational efficiency of processing in a compressed latent space with the sequence modeling capabilities of [transformers](/wiki/transformer). This architecture has three main components:

**1. Latent Space Compression:** Veo employs specialized autoencoders for both video and audio. The video autoencoder compresses raw video frames into a lower-dimensional, information-rich spatio-temporal latent representation. This compression discards redundant visual information while preserving essential features needed for high-quality reconstruction.

**2. Tokenization and Transformer Processing:** The compressed latent representation is tokenized into spacetime patches, analogous to word tokens in [large language models](/wiki/large_language_model) or image patches in [Vision Transformers](/wiki/vision_transformer). These patches serve as the fundamental units for the transformer, which uses self-attention mechanisms to model complex, long-range dependencies within the sequential data. This approach is particularly well-suited to video and audio because of their inherently temporal nature.

**3. 3D Latent Diffusion:** Unlike 2D image diffusion models, Veo operates on a 3D latent block with dimensions of Channels x Time x Height x Width. This allows the model to learn motion patterns, temporal continuity, and (in Veo 3 and later) audio-visual synchronization natively, treating time as a third spatial dimension alongside width and height.

### Joint Audio-Visual Diffusion (Veo 3+)

A key architectural innovation introduced in Veo 3 is the application of the diffusion process jointly to both audio and video latent representations. Instead of generating video first and then adding audio as a post-processing step, Veo 3 generates both modalities simultaneously within a unified diffusion framework. This joint approach enables:

- Precise temporal alignment between visual events and their corresponding sounds
- Natural lip synchronization for dialogue
- Contextually appropriate environmental audio
- Coherent audio that responds to visual motion and scene changes

The audio autoencoder compresses raw audio into its own latent space, and the combined audio-video latent representation is denoised together by the transformer-based denoising component.

### Training

According to Google's Veo 3 technical report (published May 23, 2025):

- **Training data:** Veo 3 was trained on audio, video, and image data. Audio and video datasets were annotated with text captions at multiple levels of detail, leveraging several [Gemini](/wiki/gemini) models for annotation. Datasets were filtered to remove unsafe captions and personally identifiable information.
- **Hardware:** Training was performed on Google's [Tensor Processing Units](/wiki/tensor_processing_unit) (TPUs).
- **Software framework:** Training used [JAX](/wiki/jax) and ML Pathways, Google's distributed machine learning infrastructure.
- **Annotation pipeline:** Google's [Gemini](/wiki/gemini) models were used to create detailed captions for training data, contributing to Veo's strong prompt adherence.

### Research Lineage

Veo builds on a substantial body of prior generative video research at Google and [Google DeepMind](/wiki/google_deepmind):

| Predecessor Model | Key Contribution |
|---|---|
| Generative Query Network (GQN) | Scene understanding from different viewpoints |
| DVD-GAN | High-resolution video generation using [GANs](/wiki/generative_adversarial_network) |
| Imagen Video | Text-to-video generation using cascaded diffusion models |
| Phenaki | Variable-length video generation from text sequences |
| WALT | Latent diffusion for video and image generation |
| VideoPoet | Multimodal video generation using [large language models](/wiki/large_language_model) |
| Lumiere | Temporally coherent video generation |

Each of these models contributed architectural insights, scaling laws, and techniques that were synthesized and refined in Veo. Google has stated that Veo combines "architecture, scaling laws and other novel techniques" from this body of work "to improve quality and output resolution."

## Evaluation and Benchmarks

Google evaluated Veo using human preference studies on established benchmark datasets.

### MovieGenBench

MovieGenBench, a benchmark dataset released by [Meta](/wiki/meta_platforms), was used to evaluate Veo across two tasks:

- **Text-to-video (1,003 prompts):** Human raters preferred Veo 3.1's outputs for text alignment (prompt-following accuracy), visual quality, and physics realism compared to competing models.
- **Text-to-video+audio (527 prompts):** Human raters showed an overall preference for Veo's outputs with audio over other models, indicating strong audio-visual synchronization quality.

### VBench I2V

VBench, an image-to-video benchmark consisting of 355 image-text pairs, was used to evaluate Veo 3's image-to-video generation capabilities. Human raters preferred Veo 3's outputs overall compared to competing models.

### Comparative Evaluation

For comprehensive benchmarking, Google obtained samples from recently released competing video generation models, including Kling 2.0, [OpenAI](/wiki/openai) [Sora](/wiki/sora), [Runway](/wiki/runway_ml) Gen-3, WAN 2.1, and MiniMax T2V-01.

## Integration with Google Products

### Gemini App

Veo is deeply integrated with the [Gemini](/wiki/gemini) app, Google's AI assistant platform. Users can generate videos directly within Gemini by describing what they want to see. The integration was rolled out progressively:

- **April 2025:** Veo 2 became available to Gemini Advanced subscribers
- **May 2025:** Veo 3 launched for AI Ultra subscribers ($249.99/month)
- **October 2025:** Veo 3.1 became available through the Gemini app

Within the Gemini app, the [Gemini](/wiki/gemini) language model first refines the user's prompt before passing it to Veo for video generation, improving the quality and specificity of outputs.

### Vertex AI

For enterprise customers, Veo is available through [Vertex AI](/wiki/vertex_ai), Google Cloud's machine learning platform. Vertex AI provides enterprise-grade features including:

- Identity and Access Management (IAM) controls
- Regional data processing selection
- Consolidated billing
- Quota governance
- Volume discounts

Veo on Vertex AI supports both the video generation API and the Vertex AI Media Studio interface. Enterprise availability varies by region.

### YouTube Shorts (Dream Screen)

Google integrated Veo into YouTube Shorts through the Dream Screen feature, which allows creators to generate AI video backgrounds and standalone clips for their Shorts:

- Users can open the Shorts camera, select Green Screen, then Dream Screen, and type a text prompt to generate a video background
- Users can also create standalone AI-generated clips to add to any Short
- Veo 2 powers Dream Screen, providing higher-quality, more realistic video backgrounds with better understanding of physics and human movement
- Initially launched in the United States, Canada, Australia, and New Zealand

### Google Flow

Flow is Google's dedicated AI filmmaking tool, custom-designed for use with Veo. Introduced alongside Veo 3 at Google I/O 2025 and significantly updated with Veo 3.1, Flow provides a comprehensive filmmaking workflow that includes:

- **Camera Controls:** Direct control over camera motion, angles, and perspectives
- **Scenebuilder:** Tools for editing and extending existing shots
- **Insert and Remove:** Add objects, characters, or details to scenes (or remove them) with natural shadow and lighting handling
- **Extend:** Create longer videos that continue from previous clips
- **Ingredients to Video:** Use multiple reference images to control characters, objects, and style
- **Frames to Video:** Generate video transitions between a starting and ending image
- **Asset Management:** Organize and manage generated video assets
- **Audio Integration:** Rich, generated audio is now integrated into all of Flow's creation tools

Flow represents Google's effort to provide not just a generation model but a complete creative production environment for AI-assisted filmmaking.

### VideoFX (Google Labs)

VideoFX is Google's video generation tool within Google Labs, serving as one of the primary interfaces for accessing Veo. It was available with a free tier offering up to 10 video generations per day (up to 5 seconds each) at 720p resolution, accessible after joining a waitlist and receiving approval.

### Gemini API and Google AI Studio

Developers can access Veo through the Gemini API, with models available including:

| Model ID | Description |
|---|---|
| veo-3.0-generate-001 | Veo 3 standard model |
| veo-3.0-fast-generate-001 | Veo 3 Fast model |
| Veo 3.1 | Latest model (paid preview) |

The API supports text-to-video, image-to-video, and (for Veo 3+) text-to-video+audio generation modes. Developers can specify parameters including aspect ratio, resolution, duration, and negative prompts.

## Pricing

### API Pricing

Veo pricing through the Gemini API is calculated on a per-second-of-generated-video basis:

| Model | Price per Second (with audio) | Price per Second (without audio) |
|---|---|---|
| Veo 3 Standard | $0.40 | N/A |
| Veo 3 Fast | $0.15 | $0.10 |
| Veo 3.1 Standard | $0.40 | N/A |
| Veo 3.1 Fast | $0.15 | $0.10 |
| Veo 2 (Gemini API) | $0.35 | N/A |
| Veo 2 (Vertex AI) | $0.50 | N/A |

Note: Pricing has been revised over time. Veo 3 Standard was originally $0.75 per second and was reduced to $0.40 (a 47% reduction). Veo 3 Fast was originally $0.40 per second and was reduced to $0.15 (a 63% reduction). Third-party providers such as fal.ai and Replicate also offer Veo access at competitive rates.

### Consumer Subscription Access

| Plan | Monthly Price | Veo Access |
|---|---|---|
| Google AI Pro | $19.99 | Veo 3.1 Fast (up to ~90 videos/month) |
| Google AI Ultra | $249.99 | Veo 3.1 (highest limits) |

Google AI Pro provides approximately 1,000 credits per month, where a typical 10-second video consumes around 125 credits. University students aged 18 and older in the United States, Canada, United Kingdom, Brazil, Japan, and Indonesia can access Google AI Pro free until the end of the 2026 academic year.

## Video Specifications

### Resolution Options

| Resolution | Dimensions | Availability |
|---|---|---|
| 720p | 1280 x 720 | Veo 2, Veo 3, Veo 3.1 |
| 1080p | 1920 x 1080 | Veo 1, Veo 2, Veo 3.1 |
| 4K | 3840 x 2160 | Veo 2, Veo 3.1 |

### Frame Rates

Veo supports multiple frame rates depending on the use case:

- 24 fps for cinematic content
- 30 fps for standard video
- 60 fps for smooth motion footage

### Duration

Through the API, Veo generates clips of 4, 6, or 8 seconds by default. Using the Extend feature (available in Flow and through certain API configurations), videos can be chained together to create sequences lasting 60 seconds or longer.

### Aspect Ratios

- **16:9 (landscape):** Supported across all versions
- **9:16 (portrait/vertical):** Added with Veo 3.1, enabling content for mobile-first platforms

## Safety and Content Moderation

### SynthID Watermarking

All videos generated by Veo are embedded with [SynthID](/wiki/synthid), Google DeepMind's invisible watermarking technology. SynthID works by embedding imperceptible markers directly into the pixels of every video frame. These markers are invisible to the human eye but can be detected by specialized tools. Starting with Veo 3's broader rollout, Google also began applying visible watermarks to most generated videos as an additional transparency measure.

SynthID is part of a broader ecosystem of AI content provenance tools at Google, with the same technology applied across Gemini (text), Imagen (images), Lyria (audio), and Veo (video).

### Content Filtering

Google implements a prohibited use policy and technical safeguards for Veo, including content filters designed to minimize harmful outputs. The Veo 3 model card (published May 23, 2025) details safety evaluation protocols, memorized content screening, and privacy and copyright protections.

### Limitations of Safety Measures

Despite these safeguards, Veo's safety measures have faced scrutiny:

- Visible watermarks can be removed through simple video editing or cropping
- The SynthID invisible watermark, while more resilient, can be circumvented by determined users or commercial bypass services
- Google's SynthID detection tool has not been made widely available to the public, limiting its practical effectiveness
- Content filters have been shown to be bypassed in certain scenarios; Al Jazeera reported generating fake news videos without triggering content blocks

## Controversies and Concerns

### Deepfake and Misinformation Risks

Veo 3's ability to generate realistic video with synchronized dialogue raised significant concerns about deepfakes and misinformation:

- In the first week after Veo 3's release, users posted fake AI-generated news segments in multiple languages on social media, including fabricated reports of celebrity deaths and political events
- GeoConfirmed, an online verification platform, reported an increase in AI-generated misinformation including fabricated videos of air strikes
- Time magazine reported that Veo 3 could generate deepfakes depicting riots, election fraud, and conflict scenarios
- Experts expressed concern that the combination of high visual quality and audio generation has "democratized" the creation of "storyline-driven deepfakes at a large scale"

### Rushed Release Concerns

Joshua McKenty, CEO of deepfake detection company Polyguard, stated that Google "rushed the product to market" because it had been lagging behind competitors like [OpenAI](/wiki/openai) and Microsoft in releasing user-friendly video generation tools.

### Detection Challenges

The increasing realism of AI-generated video, combined with the volume of content that can be produced, creates challenges for detection. Experts have noted that people's fragmented attention and the speed at which content circulates make verification difficult, even when detection tools exist.

## Comparison with Competing Models

### Google Veo vs. OpenAI Sora

| Feature | Google Veo 3.1 | [OpenAI](/wiki/openai) [Sora](/wiki/sora) 2 |
|---|---|---|
| Maximum resolution | 4K | 1080p |
| Native audio generation | Yes | No (added later) |
| Prompt understanding | Strong | Exceptional |
| Physics realism | Advanced | Advanced |
| Temporal consistency | Strong | Strong |
| Availability | 159 countries (Gemini app) | ChatGPT Plus/Pro subscribers |
| Enterprise API | Yes (Vertex AI) | Yes (OpenAI API) |
| Primary strength | Cinematic motion, audio sync | Realism, narrative coherence |

### Google Veo vs. Runway Gen-3/Gen-4

| Feature | Google Veo 3.1 | [Runway](/wiki/runway_ml) Gen-3/Gen-4 |
|---|---|---|
| Maximum resolution | 4K | 720p (upscalable to 4K) |
| Native audio generation | Yes | No |
| Generation speed | Moderate | Faster |
| Creative controls | Extensive (via Flow) | Extensive (built-in editor) |
| Pricing model | Per-second API + subscription | Subscription tiers ($144-$1,500/year) |
| Primary strength | Visual quality, enterprise integration | Flexibility, speed, creative experimentation |

### Market Position

Industry analysts generally position the three leading video generation platforms as follows:

- **Veo** excels in cinematic quality, enterprise integration through Google Cloud, and (since Veo 3) audio-visual generation
- **Sora** delivers strong realism and narrative coherence with tight integration into the [OpenAI](/wiki/openai)/[ChatGPT](/wiki/chatgpt) ecosystem
- **Runway** offers the best balance of speed, creative flexibility, and accessibility for independent creators and production workflows

## Global Availability

Veo 3's availability expanded in stages:

| Date | Milestone |
|---|---|
| May 2025 | Initial launch in the United States (AI Ultra subscribers) |
| Late May 2025 | Expanded to 71 additional countries |
| July 2025 | Available in 159 countries through the Gemini app |
| November 2025 | Full AI Ultra plan available in 73 countries |

Access varies by subscription tier and region. Some features remain restricted in the European Economic Area. Vertex AI availability for enterprise customers also varies by region.

## Notable Applications

Veo has been adopted across creative and professional domains:

- **Filmmaking and pre-visualization:** Studios use Veo through Google Flow for storyboarding, concept visualization, and rapid prototyping of visual ideas
- **Social media content creation:** Integration with YouTube Shorts via Dream Screen enables creators to generate AI backgrounds and clips
- **Advertising and marketing:** The Veo 3 Fast variant's speed and cost efficiency make it suitable for programmatic advertising and high-volume content production
- **Narrative generation:** Companies like Promise Studios and Latitude have implemented Veo 3.1 for storyboarding and interactive narrative applications
- **Education and training:** Video generation from text descriptions enables rapid creation of educational visual content

## Future Development

As of early 2026, Google continues to iterate on the Veo model family. Speculation about a potential Veo 4 has emerged, though Google has not officially confirmed specific plans or timelines. Areas of active development mentioned by Google include improving natural and consistent spoken audio (particularly for shorter speech segments), advancing audio synchronization, and enhancing coherent speech generation.

## See Also

- [Google DeepMind](/wiki/google_deepmind)
- [Gemini](/wiki/gemini)
- [Imagen](/wiki/imagen)
- [Sora](/wiki/sora)
- [Runway](/wiki/runway_ml)
- [Generative adversarial network](/wiki/generative_adversarial_network)
- [Diffusion model](/wiki/diffusion_model)
- [Transformer](/wiki/transformer)
- [Vertex AI](/wiki/vertex_ai)
- [SynthID](/wiki/synthid)
- [Tensor Processing Unit](/wiki/tensor_processing_unit)
- [Video generation](/wiki/video_generation)
- [Deepfake](/wiki/deepfake)

## References

1. "New generative media models and tools, built with and for creators." Google Blog (14 May 2024). [https://blog.google/technology/ai/google-generative-ai-veo-imagen-3/](https://blog.google/technology/ai/google-generative-ai-veo-imagen-3/)
2. "Google Veo, a serious swing at AI-generated video, debuts at Google I/O 2024." TechCrunch (14 May 2024). [https://techcrunch.com/2024/05/14/google-veo-a-serious-swing-at-ai-generated-video-debuts-at-google-io-2024/](https://techcrunch.com/2024/05/14/google-veo-a-serious-swing-at-ai-generated-video-debuts-at-google-io-2024/)
3. "Updates to Veo, Imagen and VideoFX, plus introducing Whisk in Google Labs." Google Blog (16 Dec 2024). [https://blog.google/technology/google-labs/video-image-generation-update-december-2024/](https://blog.google/technology/google-labs/video-image-generation-update-december-2024/)
4. "Veo 3 can generate videos and soundtracks to go along with them." TechCrunch (20 May 2025). [https://techcrunch.com/2025/05/20/googles-veo-3-can-generate-videos-and-soundtracks-to-go-along-with-them/](https://techcrunch.com/2025/05/20/googles-veo-3-can-generate-videos-and-soundtracks-to-go-along-with-them/)
5. "Introducing Veo 3.1 and new creative capabilities in the Gemini API." Google Developers Blog (Oct 2025). [https://developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/](https://developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/)
6. "Veo 3 and Veo 3 Fast: new pricing, new configurations and better resolution." Google Developers Blog (2025). [https://developers.googleblog.com/veo-3-and-veo-3-fast-new-pricing-new-configurations-and-better-resolution/](https://developers.googleblog.com/veo-3-and-veo-3-fast-new-pricing-new-configurations-and-better-resolution/)
7. Veo 3 Technical Report. Google DeepMind (May 2025). [https://storage.googleapis.com/deepmind-media/veo/Veo-3-Tech-Report.pdf](https://storage.googleapis.com/deepmind-media/veo/Veo-3-Tech-Report.pdf)
8. Veo 3 Model Card. Google DeepMind (23 May 2025). [https://storage.googleapis.com/deepmind-media/Model-Cards/Veo-3-Model-Card.pdf](https://storage.googleapis.com/deepmind-media/Model-Cards/Veo-3-Model-Card.pdf)
9. "Veo: Google DeepMind." [https://deepmind.google/models/veo/](https://deepmind.google/models/veo/)
10. "Introducing Flow: Google's AI filmmaking tool designed for Veo." Google Blog. [https://blog.google/innovation-and-ai/products/google-flow-veo-ai-filmmaking-tool/](https://blog.google/innovation-and-ai/products/google-flow-veo-ai-filmmaking-tool/)
11. "Bringing new Veo 3.1 updates into Flow to edit AI video." Google Blog. [https://blog.google/technology/ai/veo-updates-flow/](https://blog.google/technology/ai/veo-updates-flow/)
12. "Imagine it, create it: Veo 2 is coming to YouTube Shorts." YouTube Blog. [https://blog.youtube/news-and-events/veo-2-shorts/](https://blog.youtube/news-and-events/veo-2-shorts/)
13. "Donald Glover is making a movie with Google's new video AI." Digital Trends (May 2024). [https://www.digitaltrends.com/computing/google-veo-ai-reveal/](https://www.digitaltrends.com/computing/google-veo-ai-reveal/)
14. "Google's AI video tool amplifies fears of an increase in misinformation." Al Jazeera (26 Jun 2025). [https://www.aljazeera.com/economy/2025/6/26/googles-ai-video-tool-amplifies-fears-of-an-increase-in-misinformation](https://www.aljazeera.com/economy/2025/6/26/googles-ai-video-tool-amplifies-fears-of-an-increase-in-misinformation)
15. "Google's Veo 3 Can Make Deepfakes of Riots, Election Fraud, Conflict." Time. [https://time.com/7290050/veo-3-google-misinformation-deepfake/](https://time.com/7290050/veo-3-google-misinformation-deepfake/)
16. "Veo on Vertex AI video generation API." Google Cloud Documentation. [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-reference/veo-video-generation](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-reference/veo-video-generation)
17. "Google expands Veo 3 to Gemini in more countries and on mobile." Google Blog. [https://blog.google/products/gemini/veo-3-expansion-mobile/](https://blog.google/products/gemini/veo-3-expansion-mobile/)
18. "Google's Veo 3 AI Video Expands Globally: Now Live in 159 Countries." Android Headlines (Jul 2025). [https://www.androidheadlines.com/2025/07/google-veo-3-availability-159-countries.html](https://www.androidheadlines.com/2025/07/google-veo-3-availability-159-countries.html)
19. "Watermarking AI-generated text and video with SynthID." Google DeepMind. [https://deepmind.google/blog/watermarking-ai-generated-text-and-video-with-synthid/](https://deepmind.google/blog/watermarking-ai-generated-text-and-video-with-synthid/)
20. "Announcing Veo 3, Imagen 4, and Lyria 2 on Vertex AI." Google Cloud Blog. [https://cloud.google.com/blog/products/ai-machine-learning/announcing-veo-3-imagen-4-and-lyria-2-on-vertex-ai](https://cloud.google.com/blog/products/ai-machine-learning/announcing-veo-3-imagen-4-and-lyria-2-on-vertex-ai)
