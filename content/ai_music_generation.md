---
title: "AI music generation"
slug: "ai_music_generation"
categories: ["Artificial_intelligence", "Generative_AI", "Music", "Applications"]
---

**AI music generation** refers to the use of [artificial intelligence](/wiki/artificial_intelligence) systems to compose, produce, and synthesize music, including instrumental tracks, vocals, and complete songs. Powered by [deep learning](/wiki/deep_learning) architectures such as [transformers](/wiki/transformer) and [diffusion models](/wiki/diffusion_models), these systems can generate audio from text prompts, melody inputs, or reference tracks. The field has grown rapidly since 2023, with platforms like Suno and Udio enabling users with no musical training to produce full-length songs with vocals in seconds. By 2024, the global AI music market was valued at approximately $2.9 billion, with projections reaching $38.7 billion by 2033 at a compound annual growth rate of 25.8%.

## History and background

The idea of using computers to generate music dates back to the 1950s and 1960s, when researchers at institutions like the University of Illinois at Urbana-Champaign experimented with algorithmic composition. The Illiac Suite (1957), composed by Lejaren Hiller and Leonard Isaacson using a UNIVAC I computer, is often cited as the first computer-generated musical score. In the following decades, rule-based systems and Markov chains were used to produce simple melodies, but these approaches lacked the ability to capture the complexity and expressiveness of human music.

The application of [neural networks](/wiki/neural_network) to music generation began in earnest in the 2010s. Google's Magenta project, launched in 2016, explored the use of [recurrent neural networks](/wiki/recurrent_neural_network) (RNNs) and later transformer architectures for generating musical sequences. OpenAI's Jukebox (2020) was among the first models to generate raw audio with rudimentary vocals in the style of specific artists, though the output quality was often described as lo-fi and noisy.

The real inflection point came in 2023 and 2024, when a new generation of AI music tools emerged that could generate radio-quality songs, complete with coherent lyrics and realistic vocals, from simple text prompts. A 2024 MusicRadar survey found that nearly 60% of musicians were already using AI tools in their production workflows, mostly for mastering, arranging, or generating loops.

## Key platforms and tools

### Suno

Suno is the most widely used AI music generation platform. The company was founded in 2022 by Mikey Shulman (CEO), Georg Kucsko, Keenan Freyberg, and Martin Camacho, with the original goal of building foundation models for AI-generated audio. Its first product was Bark, a text-to-audio model for generating laughs, cries, and other sound effects. Suno's music generation tool launched publicly on December 20, 2023, and quickly attracted a massive user base.

By late 2025, nearly 100 million people had made music on Suno. The company generates approximately $200 million in annual revenue. Suno's funding history reflects its rapid growth:

| Date | Round | Amount | Valuation | Lead Investors |
|------|-------|--------|-----------|----------------|
| March 2023 | Series A | Undisclosed | Undisclosed | Matrix Partners |
| May 2024 | Series B | $125 million | $500 million | Lightspeed Venture Partners, Matrix Partners |
| November 2025 | Series C | $250 million | $2.45 billion | Menlo Ventures, NVentures (Nvidia) |

Suno's interface is simple: users type a text prompt describing the genre, mood, and topic (or provide lyrics directly), and the system generates a complete song with vocals within seconds. The platform also offers Suno Studio, a "generative audio workstation" designed for professional musicians who want more granular control over the output.

Recording Academy CEO Harvey Mason Jr. stated publicly that "every" songwriter and producer he knows has used Suno.

#### Version evolution

Suno has iterated rapidly through several model versions, with each release bringing substantial improvements in audio fidelity and musical coherence:

| Version | Release Date | Key Features |
|---------|-------------|--------------|
| V3 | Early 2024 | First stable version for full-song generation; basic text prompts; limited genre recognition; automatic lyrics only |
| V3.5 | Summer 2024 | Improved vocal quality and loop consistency; max 4-minute first generation; extend up to 2 minutes per extension |
| V4 | November 2024 | Cleaner audio, sharper lyrics, more dynamic song structures; instrumental-only generation; in-song editing (Extend, Replace, Crop); improved genre tagging; Cover and Persona features |
| V4.5 | 2025 | Further production quality improvements described as "previously unimaginable"; enhanced customization of genre, tempo, and instrumentation |

### Udio

Udio is Suno's primary competitor. It was founded in December 2023 by a team of former [Google DeepMind](/wiki/google_deepmind) researchers, including David Ding (CEO), Conor Durkan, Charlie Nash, and Yaroslav Ganin, along with Andrew Sanchez. The company operates under the legal name Uncharted Labs. The founders had previously worked on Google's generative AI systems, including Imagen and Lyria, with Ding leading a 30-person research team at DeepMind.

In January 2024, Uncharted Labs raised $8.5 million in seed funding led by Andreessen Horowitz. Additional backers included UnitedMasters, musicians will.i.am and Common, Instagram co-founder Mike Krieger, and DeepMind researcher Oriol Vinyals. Udio launched its free public beta on April 10, 2024, after spending several months in a closed testing phase.

Udio differentiates itself from Suno by targeting creators who want more control and depth. It supports flexible-length generation with continuation up to 15 minutes and provides more fine-grained audio control. However, following its copyright settlements in late 2025, Udio has been pivoting away from generating wholly new songs. Instead, it plans to relaunch in 2026 as a fan engagement platform that allows users to remix and interact with opted-in, pre-existing intellectual property from major labels.

### Google: MusicLM, MusicFX, and Lyria

Google has developed several AI music generation models through its DeepMind research division.

**MusicLM** was introduced in a January 2023 research paper. It generates high-fidelity music from text descriptions such as "a calming violin melody backed by a distorted guitar riff." MusicLM can accept text prompts, melodies, or existing tracks as input. Google trained the model on over 200,000 hours of music spanning over 5,500 clips that were manually categorized by human experts.

**MusicFX** is an upgraded version of MusicLM, combining the original model with additional DeepMind technology. Unlike traditional DJ tools, MusicFX DJ generates brand-new music by letting users mix musical concepts as text prompts.

**Lyria** is Google DeepMind's most advanced music generation model family. Lyria 3, released in early 2026, can generate 30-second tracks with custom cover art, lyrics, and vocals from a text prompt or even an uploaded photo. Users have creative control over style, vocals, and tempo. All tracks generated by Lyria are watermarked with SynthID technology, an imperceptible watermark that can be used to detect whether music was created or edited using AI. Lyria 3 is available through the Gemini app and on YouTube's Dream Track feature for creators.

### Meta MusicGen

[Meta](/wiki/meta_platforms)'s MusicGen is an open-source text-to-music model released in 2023. It was trained on 20,000 hours of music, including 390,000 instrumental tracks from stock media libraries ShutterStock and Pond5. Unlike some competitors, MusicGen does not prevent users from using artist and song names in their prompts, so users can request, for example, a track "in the style of" a specific musician. MusicGen uses a single-stage autoregressive [transformer](/wiki/transformer) architecture that operates on compressed audio tokens, avoiding the need for cascaded models.

### AIVA

AIVA (Artificial Intelligence Virtual Artist) is an AI music composition platform founded in 2016 in Luxembourg. It holds the distinction of being the first AI composer to receive official recognition from SACEM, the French and Luxembourg authors' rights society. AIVA's neural networks were trained on four centuries of classical masterpieces, learning from compositions by Mozart, Beethoven, and Bach.

AIVA offers over 250 predefined musical styles and includes an integrated editor similar to a digital audio workstation (DAW), allowing users to edit and mix MIDI tracks directly within the platform. Users can also upload existing audio or MIDI files, and AIVA will generate new compositions that capture the core musical characteristics of the reference material. AIVA serves film producers, game developers, advertising agencies, and content creators.

### Amper Music

Amper Music was an AI-driven music platform that enabled users to create and customize original music by leveraging over one million individual audio samples recorded by musicians on thousands of unique instruments. On November 11, 2020, Shutterstock acquired certain assets from Amper Music, integrating the platform's AI technology into Shutterstock's content creation tools to improve music discovery and editing capabilities for its users.

### Stable Audio

Stable Audio is an AI audio and music generator developed by Stability AI, the company behind Stable Diffusion. Stable Audio 2.0, released in April 2024, can produce full tracks with coherent musical structure up to three minutes long at 44.1kHz stereo. It introduced audio-to-audio generation, allowing users to upload audio samples and transform them using natural language prompts. Stable Audio 2.0 was exclusively trained on a licensed dataset from the AudioSparx music library, honoring opt-out requests and ensuring compensation for creators. In June 2024, Stability AI released Stable Audio Open, an open-source version trained entirely on royalty-free music, capable of generating clips up to 47 seconds.

## Technical approaches

AI music generation systems rely on several core architectures drawn from the broader [generative AI](/wiki/generative_ai) field:

### Autoregressive transformers

Autoregressive [transformer](/wiki/transformer) models use the same fundamental architecture behind [GPT](/wiki/generative_pre-trained_transformer) to predict the next token of music given all previous tokens. Token by token, the model builds a song much the way a [large language model](/wiki/llm) builds a paragraph of text. To make this work for audio, raw audio waveforms are first compressed into discrete tokens using neural audio codecs such as EnCodec (developed by Meta) or SoundStream (developed by Google). The transformer then operates on these compressed token sequences.

This approach excels at musical coherence and long-range structure, producing melodies and harmonies that make sense over time. Meta's MusicGen is a representative example. Suno's V3 model also uses a transformer-based architecture trained to generate complete songs with vocals.

### Diffusion models

[Diffusion models](/wiki/diffusion_models) generate audio through an iterative denoising process. Starting from pure noise, the model progressively refines the signal over many steps until it produces clean audio. These models tend to produce higher-fidelity and more natural-sounding audio compared to autoregressive approaches, though at the cost of slower generation speed and higher computational requirements.

Stability AI's Stable Audio uses a latent diffusion architecture, applying the diffusion process to compressed audio representations rather than raw waveforms. This reduces computational cost while maintaining output quality. More recent architectures replace conventional U-Net components in the diffusion process with transformers, resulting in "diffusion transformers" that combine the strengths of both approaches.

### Hybrid architectures

The most advanced AI music generation systems in 2024 and 2025 use hybrid architectures that combine elements of multiple approaches. A common pattern involves using a transformer to sketch a coarse structural plan for a piece of music, then using a diffusion model to refine and enhance the audio quality. Suno's V3 model, for example, has been described as using both transformer and diffusion model components.

AudioX, introduced in a 2025 research paper, represents an example of a multi-modal diffusion transformer architecture. It can generate audio and music from multiple input types, including text, video, images, and existing audio.

### Mel spectrograms and vocoders

Across architectures, most systems share a common pipeline for converting between text, intermediate representations, and audio. Text input is first processed by an encoder into feature vectors. These features are then decoded into a mel spectrogram, a time-frequency representation of audio. Finally, a vocoder (such as HiFi-GAN or WaveNet) transforms the mel spectrogram into the final audio waveform. This three-stage pipeline (encoder, spectrogram decoder, vocoder) has become standard across both speech synthesis and music generation.

## Copyright and legal issues

### RIAA lawsuits against Suno and Udio

On June 24, 2024, the Recording Industry Association of America (RIAA) announced two landmark copyright infringement cases against the two leading AI music generation platforms. The case against Suno, Inc. was filed in the United States District Court for the District of Massachusetts, and the case against Uncharted Labs, Inc. (the developer of Udio) was filed in the United States District Court for the Southern District of New York.

The plaintiffs included major music companies holding rights to infringed sound recordings: Sony Music Entertainment, UMG Recordings, Inc., and Warner Records, Inc. The lawsuits sought declarations that the two services infringed copyrighted sound recordings, injunctions barring future infringement, and damages of up to $150,000 per infringing song, potentially totaling hundreds of millions of dollars.

In August 2024, both Suno and Udio filed responses arguing that their use of copyrighted recordings for training their AI models constituted fair use. Suno acknowledged that it had trained on copyrighted recordings but argued that none of the millions of tracks generated on its platform "contain anything like a sample" of the original recordings.

### Udio settlements

The legal landscape shifted significantly in late 2025. On October 29, 2025, Universal Music Group announced a settlement with Udio. The settlement did not disclose financial terms, but it includes several structural provisions: Udio's new platform (launching in 2026) will be trained only on licensed music from UMG's catalog, and UMG artists and songwriters will have the option to "opt in" and receive compensation for both the training of the AI model and its outputs. The settlement covers both sound recordings and music publishing.

One week later, on November 19, 2025, Warner Music Group announced its own settlement with Udio. Under this agreement, Udio will develop a "next-generation music creation, listening, and discovery platform" powered by generative AI models trained on licensed and authorized music from WMG's catalog. The agreement creates new revenue streams for artists and songwriters.

As of early 2026, Sony Music Group remains the last major label still actively litigating against Udio. The separate lawsuit against Suno also continues.

### Suno's planned changes

Suno has announced plans to relaunch in 2026 with several changes in response to the legal and industry pressure. These include training only on licensed material and placing a cap on user downloads.

### Broader copyright landscape

The AI music copyright debate sits within a larger set of unresolved questions about how copyright law applies to generative AI training data. The U.S. Copyright Office has issued guidance stating that works generated entirely by AI without meaningful human authorship are not eligible for copyright protection. In 2024, an open letter from the Artist Rights Alliance, signed by over 200 musicians, called on technology companies not to develop AI tools that "undermine or replace" human artists.

## Impact on the music industry

### Democratization of music creation

AI music generation tools have significantly lowered the barrier to entry for music creation. In 2024 alone, over 60 million people used AI tools to create music, and 10% of all new music uploads involved AI-generated or AI-assisted tracks. The technology enables people with no formal musical training to produce polished, listenable songs. Suno describes its mission as making it possible for anyone to "make the music they love."

For professional creators, AI tools have become part of production workflows. Producers use AI-powered plugins to analyze frequencies, suggest mix improvements, generate loop ideas, and automate tedious tasks like mastering. About 60% of musicians surveyed by MusicRadar in 2024 reported using AI tools in their production process.

### Economic concerns

The economic implications are contentious. The AI music market's rapid growth (projected at 25.8% CAGR through 2033) has created anxiety among professional musicians and composers. Concerns center on whether AI-generated music will depress prices for stock music and production music, displace session musicians and composers, and allow companies to avoid paying royalties. Research by media consultancy Goldmedia predicts that with proper compensation systems, musicians could retain up to 27% of their revenue by 2028 as AI-generated content grows, though this scenario depends heavily on the legal and licensing frameworks that emerge.

### Quality and artistic debate

The quality of AI-generated music has improved dramatically in a short time. Suno's V3 (early 2024) could produce passable songs but with noticeable artifacts and structural issues. By V4 and V4.5, the output featured cleaner audio, more expressive vocals, and more dynamic song structures. However, critics argue that AI-generated music lacks the intentionality, emotional depth, and artistic vision that characterize human-created music. Supporters counter that AI is a tool that augments human creativity rather than replacing it.

### Streaming and distribution

Major music distributors including DistroKid, TuneCore, and CD Baby have adopted varying policies on AI-generated content. Some require disclosure of AI involvement; others have imposed outright bans on fully AI-generated tracks. Spotify removed tens of thousands of AI-generated tracks in 2023 after discovering that some were being uploaded by bots to game the streaming royalty system. The emergence of AI-generated music on streaming platforms has raised questions about how to fairly distribute royalty pools among human and AI-generated works.

## Comparison of major platforms

| Platform | Launch | Approach | Max Length | Vocals | Open Source | Pricing Model |
|----------|--------|----------|------------|--------|-------------|---------------|
| Suno | December 2023 | Transformer + diffusion | 4 min (extendable) | Yes | No | Freemium |
| Udio | April 2024 | Neural audio synthesis | 15 min (with continuation) | Yes | No | Freemium |
| Google MusicFX / Lyria | 2023 (MusicLM) | Diffusion-based | 30 sec (Lyria 3) | Yes (Lyria 3) | No | Free (via Gemini) |
| Meta MusicGen | 2023 | Autoregressive transformer | 30 sec | No | Yes | Free |
| AIVA | 2016 | Neural network (classical training) | Variable | No | No | Freemium |
| Stable Audio | 2023 | Latent diffusion | 3 min (2.0) | No | Partially (Open version) | Freemium |

## See also

- [Generative AI](/wiki/generative_ai)
- [Diffusion models](/wiki/diffusion_models)
- [Transformer](/wiki/transformer)
- [Large language model](/wiki/llm)
- [Deep learning](/wiki/deep_learning)
- [Google DeepMind](/wiki/google_deepmind)
- [Meta](/wiki/meta_platforms)
- [AI voice cloning](/wiki/ai_voice_cloning)
- [Neural network](/wiki/neural_network)
- [Copyright](/wiki/copyright)

## References

1. "The 10 Biggest AI Music Stories of 2025." Billboard. [https://www.billboard.com/lists/biggest-ai-music-stories-2025-suno-udio-charts-more/](https://www.billboard.com/lists/biggest-ai-music-stories-2025-suno-udio-charts-more/)
2. "Suno (platform)." Wikipedia. [https://en.wikipedia.org/wiki/Suno_(platform)](https://en.wikipedia.org/wiki/Suno_(platform))
3. "AI Music Timeline: From 'Fake Drake' to Suno & Udio Label Settlements." Billboard. [https://www.billboard.com/lists/ai-music-timeline-fake-drake-suno-udio-label-settlements/](https://www.billboard.com/lists/ai-music-timeline-fake-drake-suno-udio-label-settlements/)
4. "Suno is getting more advanced, as AI music generator launches v4.5+ update." Music Business Worldwide. [https://www.musicbusinessworldwide.com/suno-is-getting-more-advanced-as-ai-music-generator-launches-v4-5-update-with-previously-unimaginable-production-capabilities/](https://www.musicbusinessworldwide.com/suno-is-getting-more-advanced-as-ai-music-generator-launches-v4-5-update-with-previously-unimaginable-production-capabilities/)
5. "Record Companies Bring Landmark Cases for Responsible AI Against Suno and Udio." RIAA. [https://www.riaa.com/record-companies-bring-landmark-cases-for-responsible-ai-againstsuno-and-udio-in-boston-and-new-york-federal-courts-respectively/](https://www.riaa.com/record-companies-bring-landmark-cases-for-responsible-ai-againstsuno-and-udio-in-boston-and-new-york-federal-courts-respectively/)
6. "Legally embattled AI music startup Suno raises at $2.45B valuation on $200M revenue." TechCrunch. [https://techcrunch.com/2025/11/19/legally-embattled-ai-music-startup-suno-raises-at-2-45b-valuation-on-200m-revenue/](https://techcrunch.com/2025/11/19/legally-embattled-ai-music-startup-suno-raises-at-2-45b-valuation-on-200m-revenue/)
7. "Former Google DeepMind researchers launch AI-powered music creation app Udio." VentureBeat. [https://venturebeat.com/ai/former-google-deepmind-researchers-launch-ai-powered-music-creation-app-udio](https://venturebeat.com/ai/former-google-deepmind-researchers-launch-ai-powered-music-creation-app-udio)
8. "Udio." Wikipedia. [https://en.wikipedia.org/wiki/Udio](https://en.wikipedia.org/wiki/Udio)
9. "Universal Music Group and Udio Announce Udio's First Strategic Agreements." PR Newswire. [https://www.prnewswire.com/news-releases/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform-302599129.html](https://www.prnewswire.com/news-releases/universal-music-group-and-udio-announce-udios-first-strategic-agreements-for-new-licensed-ai-music-creation-platform-302599129.html)
10. "Warner Music Group Settles AI Infringement Lawsuit With Udio." The Hollywood Reporter. [https://www.hollywoodreporter.com/music/music-industry-news/warner-music-group-settles-lawsuit-udio-1236431207/](https://www.hollywoodreporter.com/music/music-industry-news/warner-music-group-settles-lawsuit-udio-1236431207/)
11. "Google Lyria 2: The New AI Music Generator from Deepmind." AudioCipher. [https://www.audiocipher.com/post/musiclm](https://www.audiocipher.com/post/musiclm)
12. "Lyria 3." Google DeepMind. [https://deepmind.google/models/lyria/](https://deepmind.google/models/lyria/)
13. "AIVA." Wikipedia. [https://en.wikipedia.org/wiki/AIVA](https://en.wikipedia.org/wiki/AIVA)
14. "Shutterstock Announces Acquisition of Amper Music." Shutterstock. [https://investor.shutterstock.com/news-releases/news-release-details/shutterstock-announces-acquisition-amper-music](https://investor.shutterstock.com/news-releases/news-release-details/shutterstock-announces-acquisition-amper-music)
15. "Introducing Stable Audio 2.0." Stability AI. [https://stability.ai/news/stable-audio-2-0](https://stability.ai/news/stable-audio-2-0)
16. "What AI Music Generators Can Do (And How They Do It)." AssemblyAI. [https://www.assemblyai.com/blog/what-ai-music-generators-can-do-and-how-they-do-it](https://www.assemblyai.com/blog/what-ai-music-generators-can-do-and-how-they-do-it)
17. "AI in Music Industry Statistics 2025: Market Growth & Trends." ArtSmart. [https://artsmart.ai/blog/ai-in-music-industry-statistics/](https://artsmart.ai/blog/ai-in-music-industry-statistics/)
18. "From Tools to Creators: A Review on the Development and Application of Artificial Intelligence Music Generation." MDPI. [https://www.mdpi.com/2078-2489/16/8/656](https://www.mdpi.com/2078-2489/16/8/656)
19. "Evolution of Suno AI: V3 to V4.5 Plus Guide." Jack Righteous. [https://jackrighteous.com/en-us/blogs/guides-using-suno-ai-music-creation/suno-ai-evolution-v3-to-v4-5-plus](https://jackrighteous.com/en-us/blogs/guides-using-suno-ai-music-creation/suno-ai-evolution-v3-to-v4-5-plus)
20. "Suno argues none of the millions of tracks made on its platform 'contain anything like a sample.'" Music Business Worldwide. [https://www.musicbusinessworldwide.com/suno-argues-none-of-the-millions-of-tracks-made-on-its-platform-contain-anything-like-a-sample/](https://www.musicbusinessworldwide.com/suno-argues-none-of-the-millions-of-tracks-made-on-its-platform-contain-anything-like-a-sample/)
