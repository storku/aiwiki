---
title: "Text-to-Video"
slug: "text-to-video"
categories:
  - "Artificial_intelligence"
  - "Generative_AI"
  - "Video_generation"
  - "Terms"
---

**Text-to-video** (T2V) is a category of [generative AI](/wiki/generative_ai) that produces video content from natural language descriptions. Given a text prompt, a text-to-video model synthesizes a sequence of temporally coherent frames depicting the scene, actions, and visual style described in the input. The technology builds on advances in [text-to-image](/wiki/text-to-image) generation, [diffusion models](/wiki/diffusion_models), and [transformer](/wiki/transformer) architectures, extending them from single-frame synthesis to the temporal domain. As of 2025, leading text-to-video systems can generate 1080p (and in some cases 4K) clips lasting from a few seconds to over a minute, with synchronized audio including dialogue, sound effects, and ambient noise.

The global text-to-video market was valued at roughly $534 to $615 million in 2024, with projections suggesting it could climb to over $2.5 billion by 2032. The rapid growth of the field has attracted investment from major technology companies including [OpenAI](/wiki/openai), [Google DeepMind](/wiki/google_deepmind), [Meta](/wiki/meta), and numerous startups. Applications span filmmaking, advertising, social media content creation, education, and rapid prototyping of visual concepts.

## History and Evolution

### Early Research (2022)

The origins of text-to-video generation trace back to research efforts in 2022 that extended the breakthroughs in text-to-image synthesis (such as [DALL-E 2](/wiki/dall-e_2) and [Stable Diffusion](/wiki/stable_diffusion)) into the video domain.

**CogVideo** (May 2022), developed by Tsinghua University and Zhipu AI, was the earliest major text-to-video model to be publicly released. With 9.4 billion parameters, it was open-sourced on GitHub and demonstrated the feasibility of generating short video clips from text descriptions, though the results were limited in resolution and temporal coherence.

**Make-A-Video** (September 2022), developed by [Meta](/wiki/meta) AI, was a landmark research project that generated video from text without requiring paired text-video training data. Instead, it leveraged text-image pairs and unsupervised video data to learn motion dynamics. Meta demonstrated the system but did not release it commercially.

**Imagen Video** (October 2022), developed by Google Brain (later [Google DeepMind](/wiki/google_deepmind)), used a cascade of diffusion models built on 3D U-Net architectures to generate high-definition video from text prompts. Like Make-A-Video, it remained a research demonstration.

### Commercialization Begins (2023)

The year 2023 marked the transition from research demonstrations to commercially available tools.

**Runway Gen-1 and Gen-2** (February and March 2023) were among the first commercially available text-to-video and video-to-video models accessible to the public through a web interface. Gen-2, made publicly available in June 2023, enabled users to generate videos from text prompts alone. By August 2023, the maximum video length had been extended from 4 seconds to 18 seconds. By November, quality improvements allowed the generation of 4K ultra-high-definition videos.

**Pika Labs** launched its text-to-video platform in 2023, quickly gaining traction for its accessible interface and creative effects capabilities. The platform attracted significant venture capital investment as the consumer text-to-video market expanded.

**Stable Video Diffusion** (November 2023), released by Stability AI, was one of the first open-source video generation foundation models. It was based on the latent diffusion framework and trained on a large curated video dataset.

### Rapid Advancement (2024)

In 2024, the field saw dramatic quality improvements and the entry of major technology companies with competitive offerings.

**Google Lumiere** (January 2024) was announced by Google Research as a text-to-video diffusion model that generated the entire temporal duration of a video at once, rather than synthesizing distant keyframes followed by temporal super-resolution.

**OpenAI Sora** was first previewed in February 2024, stunning the AI community with its ability to generate photorealistic, minute-long videos with complex camera movements and coherent physics. OpenAI described Sora as a "world simulator" that learns to model the physical world through video generation. The model was officially released to the public on December 9, 2024, as part of OpenAI's "ship-mas" event series.

**Runway Gen-3 Alpha** (June 2024) represented a major leap in quality over Gen-2, producing 10-second videos at up to 1280 by 768 pixels with improved temporal consistency, more expressive human characters, and better adherence to complex prompts.

**Luma Dream Machine** (June 2024), developed by Luma AI, launched as a web-based text-to-video platform generating 5-second clips at 1360 by 752 pixels. Its transformer-based architecture attracted attention for realistic motion and cinematic camera movements.

**Kling** (June 2024), developed by Chinese short-video platform Kuaishou, gained recognition for generating high-quality videos at up to 1080p resolution. It quickly gained popularity in China and expanded internationally.

**Google Veo** (May 2024), developed by Google DeepMind, was announced at Google I/O 2024 with the claimed ability to generate 1080p videos over a minute long.

**Google Veo 2** (December 2024) was released with support for 4K resolution video generation and improved physics understanding.

**Hunyuan Video** (December 2024), released by Tencent as an open-source model with over 13 billion parameters, supporting both text-to-video and image-to-video generation.

**LTX Video** (December 2024), launched by Lightricks as an open-source video generation model.

### Audio-Visual Generation and Reasoning (2025)

The year 2025 brought synchronized audio generation, longer video durations, and more physically accurate outputs.

**Google Veo 3** (May 2025) not only generated video but also created synchronized audio, including dialogue, sound effects, and ambient noise to match the visuals.

**Kling 2.1** (June 2025) supported multi-shot image-to-video generation with 1080p resolution at 30 fps and cinematic motion, allowing clips up to 2 minutes long.

**OpenAI Sora 2** (September 2025) was released as OpenAI's flagship video and audio generation model. It featured improved physical accuracy, synchronized dialogue and sound effects, and the ability to inject real-world elements (people, animals, objects) into generated environments.

**Luma Ray3** (September 2025) was described as the world's first "reasoning video model," capable of generating physically accurate videos with 16-bit HDR color output suitable for professional film and advertising pipelines.

**Google Veo 3.1** (October 2025) added improved motion consistency, more accurate lip-sync, and enhanced scene physics.

**Runway Gen-4.5** (December 2025) took the top position on the Artificial Analysis Video Arena leaderboard upon release, surpassing Google Veo 3 with an Elo score of 1,247.

**Kling O1** (December 2025) launched as the world's first unified multimodal video model, combining over 18 video tasks (generation, editing, transformation) into a single platform.

**Luma Ray3 Modify** (December 2025) introduced the ability to modify existing footage with character reference images while preserving the performance of the original footage.

## Key Models

### Sora (OpenAI)

[Sora](/wiki/sora) is OpenAI's text-to-video model, first previewed in February 2024 and publicly released on December 9, 2024. The name "Sora" comes from the Japanese word for "sky."

**Architecture:** Sora is a [diffusion transformer](/wiki/diffusion_transformer), combining a denoising latent diffusion model with a transformer as its denoiser. Videos are generated in latent space by denoising 3D "patches" (spacetime tokens extracted from compressed input video), then transformed to standard pixel space by a video decompressor. This patch-based approach allows training on videos and images of variable resolutions, durations, and aspect ratios.

**Capabilities:** The original Sora generates videos up to 1080p resolution and 20 seconds long. Music, sound effects, and dialogue are automatically included. It supports text-to-video, image animation, video remixing, and a storyboarding tool for creating sequences of linked prompts.

**Sora 2** (September 2025) is more physically accurate and controllable, featuring synchronized dialogue and sound effects. It can generate complex scenes obeying physics more faithfully, and includes a "cameo" feature allowing users to insert themselves into generated videos after authentication. Video durations are 15 seconds for all users and up to 25 seconds for Pro subscribers.

**Pricing:** ChatGPT Plus subscribers can generate up to 50 priority videos at 720p (up to 5 seconds). ChatGPT Pro ($200/month) offers unlimited generations with up to 500 priority videos at enhanced resolution and longer durations.

**Limitations:** The model can struggle with simulating the physics of complex scenes, may confuse spatial details (such as left vs. right), and can have difficulty with precise temporal descriptions of events.

### Veo (Google DeepMind)

Veo is Google DeepMind's text-to-video model family, announced at Google I/O in May 2024.

**Veo** (May 2024) was initially claimed to generate 1080p videos over a minute long and understands cinematic terms like "timelapse" and "aerial shots."

**Veo 2** (December 2024) introduced 4K resolution video generation with improved understanding of real-world physics.

**Veo 3** (May 2025) added synchronized audio generation, including dialogue, sound effects, and ambient noise to match the visuals.

**Veo 3.1** (October 2025) refined motion consistency, speech timing accuracy, and scene physics.

Veo is available through Google's VideoFX platform, Vertex AI for enterprise use, and has been integrated into Google Vids for workspace users.

### Runway Gen-2 / Gen-3 / Gen-4

[Runway](/wiki/runway) is an AI company that has been a pioneer in commercially available video generation tools.

**Gen-2** (March 2023) was one of the first commercially available text-to-video models, initially generating 4-second clips that were later extended to 18 seconds. By late 2023 it supported 4K output.

**Gen-3 Alpha** (June 2024) dramatically improved on Gen-2 with higher fidelity, better consistency, and more fluid motion. It was trained with temporally dense captions enabling precise key-framing. Gen-3 Alpha produces 10-second videos at up to 1280 by 768 pixels and includes control tools such as Motion Brush, Advanced Camera Controls, and Director Mode. It excels at generating expressive human characters with a wide range of actions, gestures, and emotions.

**Gen-4.5** (December 2025) immediately achieved the top ranking on the Artificial Analysis Video Arena leaderboard upon release.

### Pika

Pika is a text-to-video AI platform founded by former Stanford AI researchers.

**Pika 2.2** (February 2025) offers 10-second generations at 720p or 1080p resolution, with the Pikaframes feature providing keyframe-based control over transitions from 1 to 10 seconds.

**Pika 2.5** (2025) extends durations up to 20 to 25 seconds with upgraded visual quality, smoother motion, and stronger prompt adherence.

Pika's distinctive features include creative visual effects (Inflate, Melt, Explode, Squash, Crush, and Cake-ify), the PikaSwaps video inpainting tool for modifying objects in videos, and Pikaformance for audio-driven character animation with accurate lip-sync. The free tier provides access at 480p, while paid plans unlock higher resolutions.

### Kling (Kuaishou)

Kling is developed by Kuaishou, the Chinese short-video platform. Since its launch, it has produced over 10 million videos.

The model supports up to 1080p resolution and has evolved rapidly through multiple versions. **Kling 2.1** (June 2025) supports multi-shot image-to-video generation at 1080p and 30 fps, with clips up to 2 minutes long. **Kling 2.5 Turbo** (September 2025) outperformed competitors in blind tests with professionals. **Kling 2.6** introduced simultaneous audio-visual generation, producing videos with speech, sound effects, and ambient sounds. **Kling O1** (December 2025) is the world's first unified multimodal video model, combining generation, editing, and comprehension in a single system using a Multimodal Transformer architecture.

### Luma Dream Machine

Dream Machine is Luma AI's text-to-video platform, launched in June 2024.

**Dream Machine v1** generated 5-second clips at 1360 by 752 pixels using a transformer-based video synthesis architecture.

**Ray2** introduced 1080p generation with 10x the compute power of Ray1, with the ability to upscale to 4K and generate up to 10-second clips (extendable to approximately 30 seconds).

**Ray3** (September 2025) was described as the world's first "reasoning video model," designed in collaboration with professionals from the entertainment, advertising, and gaming industries. It generates physically accurate videos with reasoning-driven generation, best-in-class video-to-video capabilities, and the first-to-market HDR pipeline. Ray3.14, a subsequent update, added native 1080p generation, 4x faster performance, and 3x lower cost.

A notable distinction of Dream Machine is that it is the first generative model to produce video in professional 16-bit HDR color, making its output suitable for professional film and advertising workflows.

## Technical Approaches

### Diffusion Transformers (DiTs)

The diffusion transformer architecture, used most notably by OpenAI's Sora, combines the denoising process of [diffusion models](/wiki/diffusion_models) with the scalable sequence-processing capabilities of the [transformer](/wiki/transformer) architecture. In this approach, a compressed input video is decomposed into a sequence of spacetime patches that serve as transformer tokens. The transformer then learns to denoise these patches, generating coherent video in the latent space.

Key innovations in the DiT approach include:

- **Spacetime patch tokenization:** Videos are divided into 3D patches spanning both spatial and temporal dimensions, allowing the model to process videos of variable resolutions, durations, and aspect ratios within a single architecture.
- **Temporal self-attention layers:** Inserted between cross-attention and MLP layers to capture temporal relationships, with motion-free masking applied with a certain probability during training.
- **Text conditioning:** Adaptive layer normalization (adaLN) is used to integrate text embeddings, substituting the class embeddings from image-only DiT models with combined time and text embeddings.
- **Latte (Latent Diffusion Transformer):** A variant that extracts spatio-temporal tokens from input videos and uses a series of transformer blocks to model the video distribution in latent space. Latte introduces four variants based on different decompositions of spatial and temporal dimensions.
- **GenTron:** Adapts DiTs from class-conditioned to text-conditioned generation through empirical exploration of conditioning mechanisms.

### Latent Diffusion Models (LDMs)

Latent diffusion models for video (Video LDMs) perform the diffusion process in a compressed, lower-dimensional latent space rather than in pixel space. This reduces computational cost while maintaining high-quality output. The approach was developed by NVIDIA Research and others.

The Video LDM pipeline typically works as follows:

1. **Pre-training on images:** An LDM is first trained on images to learn rich visual representations.
2. **Temporal extension:** The image generator is converted into a video generator by introducing a temporal dimension to the latent space and fine-tuning on encoded image sequences.
3. **Keyframe generation:** The model generates sparse keyframes at low frame rates.
4. **Temporal interpolation:** A separate interpolation diffusion model upsamples the keyframes temporally to produce smooth video.
5. **Decoder adaptation:** Additional temporal layers are added to the autoencoder's decoder and fine-tuned with a patch-wise temporal discriminator to reduce flickering artifacts.

This hierarchical approach enables the generation of longer videos by autoregressively applying the model, conditioning each new segment on the preceding frames.

### Autoregressive Models

Autoregressive approaches to video generation produce frames sequentially, with each new frame conditioned on previously generated frames. While conceptually straightforward, autoregressive methods face the challenge of quality degradation over time as errors accumulate across frames.

Recent approaches address this limitation through several strategies:

- **Progressive Autoregressive Video Diffusion Models** use a per-frame noise schedule and fine-tune pre-trained video diffusion models to enable autoregressive generation without quality loss.
- **ViD-GPT** introduces GPT-style autoregressive generation into video diffusion models, treating video generation as a sequential token prediction task.
- **Hybrid approaches** combine diffusion-based keyframe generation with autoregressive interpolation, producing long videos while maintaining temporal coherence.

### U-Net Based Approaches

Earlier text-to-video models, particularly those from Google (Imagen Video, Lumiere), used 3D U-Net architectures. In this approach, the U-Net processes both spatial and temporal dimensions simultaneously through 3D convolutions. While effective, U-Net based methods have largely been superseded by transformer-based architectures for state-of-the-art results, as transformers scale more efficiently with increased compute and data.

## Capabilities

### Resolution and Duration

The capabilities of text-to-video models have advanced rapidly since 2022. The following table summarizes the key specifications of major models as of late 2025.

| Model | Developer | Max Resolution | Max Duration | Audio Generation | Release Year |
|---|---|---|---|---|---|
| CogVideo | Tsinghua/Zhipu AI | 480p | ~4 seconds | No | 2022 |
| Make-A-Video | Meta AI | 768x768 | ~5 seconds | No | 2022 (research only) |
| Runway Gen-2 | Runway | 4K | 18 seconds | No | 2023 |
| Stable Video Diffusion | Stability AI | 1024x576 | ~4 seconds | No | 2023 |
| Sora | OpenAI | 1080p | 20 seconds | Yes (Sora 2) | 2024 |
| Veo 2 | Google DeepMind | 4K | 60+ seconds | No | 2024 |
| Runway Gen-3 Alpha | Runway | 1280x768 | 10 seconds | No | 2024 |
| Pika 2.2 | Pika Labs | 1080p | 10 seconds | No | 2025 |
| Kling 2.1 | Kuaishou | 1080p | 2 minutes | Yes (Kling 2.6) | 2025 |
| Luma Ray3 | Luma AI | 1080p (HDR) | 10 seconds | No | 2025 |
| Veo 3 | Google DeepMind | 1080p | 60+ seconds | Yes | 2025 |
| Sora 2 | OpenAI | 1080p | 25 seconds | Yes | 2025 |
| Pika 2.5 | Pika Labs | 1080p | 20-25 seconds | No | 2025 |
| Seedance 1.0 | ByteDance | 1080p | 10 seconds | No | 2025 |
| Hunyuan Video | Tencent | 1080p | ~5 seconds | No | 2024 |

### Temporal Consistency

Maintaining visual consistency across frames is one of the most critical and challenging aspects of video generation. Modern models achieve temporal consistency through several mechanisms:

- **Temporal attention layers** allow the model to attend to features across different time steps.
- **Motion conditioning** enables explicit control over camera and object motion.
- **Keyframe-based generation** produces anchor frames that are then interpolated to reduce drift.
- **Video-level discriminators** during training penalize flickering and inconsistent motion.

Despite these advances, all current models exhibit some degree of temporal inconsistency, particularly in longer generations and scenes with complex motion.

### Physics Understanding

Text-to-video models implicitly learn aspects of physical dynamics from training data, enabling them to depict phenomena such as gravity, fluid motion, reflections, and object interactions. However, benchmarks like PhyWorldBench and T2VPhysBench have revealed significant limitations: all evaluated models scored below 0.60 on basic Newtonian and conservation laws, indicating a persistent failure to model fundamental physics accurately. Models handle observable surface-level phenomena more successfully than deeper physical principles like conservation of energy and momentum.

### Human Rendering

Generating realistic humans remains a particular challenge. While models like Gen-3 Alpha and Sora 2 have made significant progress in rendering expressive human characters with diverse actions, gestures, and emotions, common artifacts persist, especially in the rendering of hands (incorrect number of fingers, distorted proportions), faces (asymmetry, identity drift across frames), and fine motor movements.

## Applications

### Filmmaking and Visual Effects

Text-to-video technology is increasingly used in film production workflows. Applications include generating establishing shots and background environments, creating visual effects and CGI sequences, rapid pre-visualization (previsualization) of scenes before live-action shooting, and film restoration where missing segments in old films can be recreated using AI and preceding frames. Several advertisements, short films, and trailers made entirely using AI video generation have been released. The technology enables independent creators to produce content that previously required large production budgets.

### Advertising and Marketing

The advertising industry has been an early adopter of text-to-video tools. Key use cases include creating product demonstration videos (71% of B2B marketers use video content, with product demos being the most popular type), generating personalized video advertisements tailored to individual viewers with elements like names, location-specific messaging, and product recommendations based on browsing history, and rapidly iterating on creative concepts during campaign development without the cost of traditional video production.

### Social Media Content

Text-to-video tools are widely used for social media content creation, including short-form videos optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts. Google has prepared integration of Veo for YouTube Shorts. The ability to quickly produce engaging visual content from text descriptions has democratized video creation for individual creators and small businesses.

### Education

In educational contexts, teachers and course creators can use text-to-video tools to illustrate scientific principles, historical events, and abstract concepts through visual demonstrations. The technology enables rapid creation of educational content without specialized video production skills or equipment.

### Prototyping and Concept Visualization

Designers, architects, and product developers use text-to-video generation to quickly visualize concepts and iterate on ideas. The technology allows rapid exploration of visual possibilities before committing to full production, reducing both time and cost in the creative development process.

## Challenges and Limitations

### Temporal Consistency

Despite significant advances, maintaining consistent objects, characters, and environments across extended video sequences remains an unsolved problem. Generated objects often move inconsistently across frames, exhibit implausible dynamics, or violate physical constraints. Current models lack robust temporal modeling over long sequences, and generated videos frequently contain flickering, inconsistent motion, and object deformations. Accurately decomposing scene components is highly challenging because generative models struggle to maintain object permanence and geometric consistency across both spatial and temporal dimensions.

### Physics Simulation

Although models implicitly learn physical dynamics from training data, their understanding of physics remains superficial. Research using benchmarks like T2VPhysBench has shown that current models consistently fail to model fundamental Newtonian mechanics and conservation laws. Conservation laws (such as conservation of energy and momentum) pose a greater challenge than observable surface-level phenomena. Models may generate visually plausible but physically impossible scenarios, such as objects that defy gravity selectively or fluids that move in unnatural patterns.

### Hands, Faces, and Fine Detail

The accurate rendering of human hands (correct finger count and proportions), facial expressions (consistent identity across frames), and fine textual details (readable text, logos, and symbols) remains difficult. These artifacts, while diminishing with each generation of models, continue to serve as telltale signs of AI-generated video content.

### Computational Cost

Generating high-quality video requires substantial computational resources, making the technology expensive to run at scale. This limits both the accessibility of the technology and the practical video lengths and resolutions that can be offered to users, especially at the free tier.

### Prompt Adherence

Models sometimes fail to accurately translate complex or multi-part text prompts into corresponding visual content. Spatial relationships (left vs. right, in front of vs. behind), specific quantities, and precise temporal sequences of events described in prompts may not be faithfully rendered.

### Duration Limitations

Most current models are limited to generating short clips (typically 5 to 25 seconds), with quality degrading in longer outputs. While some models can produce videos up to 2 minutes, the vast majority of high-quality results are under 30 seconds, limiting real-world applications that require longer-form content.

## Ethical Concerns

### Deepfakes and Misinformation

The ability to generate realistic video from text raises serious concerns about the creation and distribution of deepfakes. A report from Resemble.ai documented 487 deepfake attacks in the second quarter of 2025 alone, representing a 41% increase from the previous quarter, with approximately $347 million in losses over three months. The Internet Watch Foundation documented a 400% increase in AI-generated deepfake material in the first half of 2025 compared to the same period in 2024.

The bipartisan TAKE IT DOWN Act, passed in the United States in 2025, makes it a federal crime to publish or threaten to publish nonconsensual intimate images (including deepfakes) and requires platforms to remove such content within 48 hours.

### Copyright and Training Data

Copyright questions surrounding text-to-video models involve two distinct issues. First, there is the question of whether using copyrighted material (such as videos, images, and text) to train AI models constitutes fair use. A court ruling in 2025 held that using copyrighted data to train AI without permission may not qualify as fair use. Second, there is the question of copyright ownership of AI-generated outputs: U.S. authorities have maintained that purely AI-created works with no human originality are not copyrightable.

### Consent and Likeness

Ethical concerns also revolve around the use of individuals' images and voices in AI-generated video, often without their consent. OpenAI's Sora 2 includes a "cameo" feature with authentication steps and identity controls, but the broader ecosystem lacks consistent protections. Deepfake technology demands consent and transparency to prevent harm, and new union agreements and proposed legislation aim to address these concerns.

### Workforce Displacement

The rise of AI video generation has raised concerns about its impact on creative professionals. A study published in early 2024 found that 75% of studio executives had already "eliminated, reduced or consolidated jobs" after introducing AI into their workflow. Hollywood's VFX and animation artists have voiced concerns that generative AI will erode job security, leading to new labor negotiations and union agreements addressing AI use in creative production.

### Safety Measures

Major text-to-video providers have implemented various safety measures to mitigate harmful use:

- Content moderation systems that filter prompts and outputs for harmful content
- Watermarking and metadata tagging to identify AI-generated video (C2PA standards)
- Usage policies prohibiting the generation of violent, sexual, or deceptive content
- Authentication requirements for features that involve real people's likenesses

## Comparison of Major Models (Late 2025)

| Feature | Sora 2 (OpenAI) | Veo 3.1 (Google) | Gen-4.5 (Runway) | Kling O1 (Kuaishou) | Dream Machine Ray3 (Luma) | Pika 2.5 |
|---|---|---|---|---|---|---|
| Max Resolution | 1080p | 1080p | 1280x768+ | 1080p | 1080p (HDR) | 1080p |
| Max Duration | 25 sec (Pro) | 60+ sec | 10 sec | 2 min (Kling 2.1) | 10 sec | 20-25 sec |
| Audio Generation | Yes | Yes | No | Yes | No | No |
| Text-to-Video | Yes | Yes | Yes | Yes | Yes | Yes |
| Image-to-Video | Yes | Yes | Yes | Yes | Yes | Yes |
| Video-to-Video | Yes (remix) | Yes | Yes | Yes | Yes (Ray3 Modify) | Yes (PikaSwaps) |
| HDR Support | No | No | No | No | Yes (16-bit) | No |
| Open Source | No | No | No | No | No | No |
| API Available | Yes | Yes (Vertex AI) | Yes | Yes | Yes | Yes |
| Free Tier | No (requires ChatGPT Plus) | Limited (via VideoFX) | Limited | Yes | Yes | Yes (480p) |

## Open-Source Models

While the leading commercial models remain proprietary, several significant open-source text-to-video models have been released:

- **Hunyuan Video** (Tencent, December 2024): Over 13 billion parameters, supporting text-to-video and image-to-video generation.
- **LTX Video** (Lightricks, December 2024): Designed for efficient video generation on consumer hardware.
- **Stable Video Diffusion** (Stability AI, November 2023): One of the first open-source video generation foundation models.
- **CogVideoX** (Zhipu AI, 2024): The successor to CogVideo with significantly improved quality.
- **Wan2.2-T2V-A14B** (2025): The first open-source video generation model with a Mixture-of-Experts (MoE) architecture, capable of producing 5-second videos at 480p and 720p.

## See Also

- [Generative AI](/wiki/generative_ai)
- [Diffusion Models](/wiki/diffusion_models)
- [Text-to-Image](/wiki/text-to-image)
- [Text-to-3D](/wiki/text-to-3d)
- [Transformer](/wiki/transformer)
- [OpenAI](/wiki/openai)
- [Google DeepMind](/wiki/google_deepmind)
- [Deepfake](/wiki/deepfake)
- [Neural Radiance Field](/wiki/neural_radiance_field)

## References

1. "Text-to-video model." Wikipedia. [https://en.wikipedia.org/wiki/Text-to-video_model](https://en.wikipedia.org/wiki/Text-to-video_model)
2. "Sora: Creating video from text." OpenAI. [https://openai.com/index/sora/](https://openai.com/index/sora/)
3. "Sora 2 is here." OpenAI. [https://openai.com/index/sora-2/](https://openai.com/index/sora-2/)
4. "Sora (text-to-video model)." Wikipedia. [https://en.wikipedia.org/wiki/Sora_(text-to-video_model)](https://en.wikipedia.org/wiki/Sora_(text-to-video_model))
5. "Video generation models as world simulators." OpenAI. [https://openai.com/index/video-generation-models-as-world-simulators/](https://openai.com/index/video-generation-models-as-world-simulators/)
6. "Video generation with Sora." OpenAI API Documentation. [https://platform.openai.com/docs/guides/video-generation](https://platform.openai.com/docs/guides/video-generation)
7. "Veo (text-to-video model)." Wikipedia. [https://en.wikipedia.org/wiki/Veo_(text-to-video_model)](https://en.wikipedia.org/wiki/Veo_(text-to-video_model))
8. "Veo." Google DeepMind. [https://deepmind.google/models/veo/](https://deepmind.google/models/veo/)
9. "Google Veo 3.1 Update." AICloudIT. [https://www.aicloudit.com/blog/ai/google-veo-3-1-complete-guide-ai-video-model/](https://www.aicloudit.com/blog/ai/google-veo-3-1-complete-guide-ai-video-model/)
10. "Introducing Gen-3 Alpha." Runway Research. [https://runwayml.com/research/introducing-gen-3-alpha](https://runwayml.com/research/introducing-gen-3-alpha)
11. "Gen-2: Generate novel videos with text, images or video clips." Runway Research. [https://runwayml.com/research/gen-2](https://runwayml.com/research/gen-2)
12. "AI Video Generation with Ray3 & Dream Machine." Luma AI. [https://lumalabs.ai/ray](https://lumalabs.ai/ray)
13. "Dream Machine (text-to-video model)." Wikipedia. [https://en.wikipedia.org/wiki/Dream_Machine_(text-to-video_model)](https://en.wikipedia.org/wiki/Dream_Machine_(text-to-video_model))
14. "Luma AI Launches Ray3." Business Wire. [https://www.businesswire.com/news/home/20250918470219/en/Luma-AI-Launches-Ray3-The-Worlds-First-Reasoning-Video-Model-and-the-First-to-Generate-High-fidelity-16-Bit-HDR](https://www.businesswire.com/news/home/20250918470219/en/Luma-AI-Launches-Ray3-The-Worlds-First-Reasoning-Video-Model-and-the-First-to-Generate-High-fidelity-16-Bit-HDR)
15. "Kling AI Launches 2.5 Turbo Video Model." Kuaishou Technology IR. [https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-25-turbo-video-model-industry-leading](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-25-turbo-video-model-industry-leading)
16. "Kling O1 Launches as the World's First Unified Multimodal Video Model." Kuaishou Technology IR. [https://ir.kuaishou.com/news-releases/news-release-details/kling-o1-launches-worlds-first-unified-multimodal-video-model-0](https://ir.kuaishou.com/news-releases/news-release-details/kling-o1-launches-worlds-first-unified-multimodal-video-model-0)
17. "Diffusion Models for Video Generation." Lil'Log. [https://lilianweng.github.io/posts/2024-04-12-diffusion-video/](https://lilianweng.github.io/posts/2024-04-12-diffusion-video/)
18. "Latte: Latent Diffusion Transformer for Video Generation." arXiv:2401.03048. [https://arxiv.org/abs/2401.03048](https://arxiv.org/abs/2401.03048)
19. "Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models." NVIDIA Research. [https://research.nvidia.com/labs/toronto-ai/VideoLDM/](https://research.nvidia.com/labs/toronto-ai/VideoLDM/)
20. "Text-to-video generators: a comprehensive survey." Journal of Big Data, Springer Nature. [https://link.springer.com/article/10.1186/s40537-025-01314-3](https://link.springer.com/article/10.1186/s40537-025-01314-3)
21. "T2VPhysBench: A First-Principles Benchmark for Physical Consistency in Text-to-Video Generation." arXiv. [https://arxiv.org/html/2505.00337v1](https://arxiv.org/html/2505.00337v1)
22. "AI Video Ethics and Governance in 2025." createXflow. [https://createxflow.com/ai-video-ethics-and-governance-2025/](https://createxflow.com/ai-video-ethics-and-governance-2025/)
23. "AI Filmmaking: How AI Is Transforming Video Production and Storytelling." Artlist Blog. [https://artlist.io/blog/ai-video-production/](https://artlist.io/blog/ai-video-production/)
24. "Make-A-Video." Meta AI. [https://makeavideo.studio/](https://makeavideo.studio/)
25. "Sora 2 System Card." OpenAI. [https://openai.com/index/sora-2-system-card/](https://openai.com/index/sora-2-system-card/)
