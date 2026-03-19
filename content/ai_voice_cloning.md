---
title: "AI voice cloning"
slug: "ai_voice_cloning"
categories: ["Artificial_intelligence", "Generative_AI", "Audio", "Applications"]
---

**AI voice cloning** (also called voice synthesis or voice replication) is the process of using [artificial intelligence](/wiki/artificial_intelligence) to create a synthetic replica of a person's voice from a small sample of recorded speech. Modern voice cloning systems can replicate a speaker's pitch, tone, accent, rhythm, and emotional inflection with high fidelity, often requiring as little as 10 to 15 seconds of reference audio. The technology builds on advances in neural [text-to-speech](/wiki/text_to_speech) (TTS) and is used in applications ranging from audiobook narration and content localization to accessibility tools for people who have lost the ability to speak. At the same time, the technology has raised serious ethical and security concerns due to its potential for misuse in fraud, deepfake audio, and unauthorized impersonation.

## History and development

### Early speech synthesis

Speech synthesis research dates back to the 18th century, when Wolfgang von Kempelen built a mechanical speaking machine in 1769. Electronic speech synthesis began in the 1930s with Homer Dudley's Voder, demonstrated at the 1939 World's Fair. For most of the 20th century, text-to-speech systems relied on concatenative synthesis (splicing together pre-recorded fragments of speech) or formant synthesis (using mathematical models of the vocal tract). These methods produced intelligible but robotic-sounding output.

### Neural TTS revolution

The landscape changed dramatically with the application of [deep learning](/wiki/deep_learning) to speech synthesis. Google's WaveNet, published in 2016, was the first neural network model to generate raw audio waveforms at a quality approaching human speech. WaveNet used a deep autoregressive model with dilated causal convolutions to predict audio samples one at a time, producing speech that sounded significantly more natural than previous systems.

In 2017, Google introduced Tacotron, a sequence-to-sequence model that could generate mel spectrograms from text, which were then converted to audio by a vocoder. Tacotron 2 (2017) improved on this architecture and, when paired with a WaveNet vocoder, produced speech that was nearly indistinguishable from human recordings in listening tests.

These models were initially trained on large datasets of a single speaker's voice, meaning they could only generate speech in one specific voice. The development of multi-speaker models and, eventually, zero-shot voice cloning techniques opened the door to replicating any voice from a short sample.

### Zero-shot voice cloning

Zero-shot voice cloning refers to the ability of a TTS system to replicate a new voice without any additional fine-tuning, using only a brief audio sample (typically 3 to 30 seconds) as a reference. The system extracts a "speaker embedding," a compact numerical representation of the voice's unique characteristics, from the reference clip. This embedding is then used to condition the text-to-speech model so that the generated speech matches the target speaker.

The technical pipeline for zero-shot voice cloning typically involves three stages:

1. **Speaker encoder**: A neural network (often based on a transformer or convolutional architecture) processes the reference audio and produces a fixed-dimensional speaker embedding that captures the voice's identity.
2. **Text-to-spectrogram decoder**: A sequence-to-sequence model converts input text into a mel spectrogram, conditioned on the speaker embedding so that the output reflects the target voice.
3. **Vocoder**: A neural vocoder (such as HiFi-GAN, WaveGlow, or WaveNet) transforms the mel spectrogram into the final audio waveform.

Key models in this space include VITS (Variational Inference with adversarial learning for end-to-end Text-to-Speech), which combines a variational autoencoder with adversarial training for high-quality synthesis, and Tortoise TTS, an open-source system that uses an autoregressive transformer followed by a diffusion model for refinement.

Generative adversarial networks ([GANs](/wiki/generative_adversarial_network)) also play a role in improving voice clone quality. In GAN-based approaches, a generator network produces synthetic speech while a discriminator network attempts to distinguish real from synthetic audio. The adversarial competition drives the generator to produce increasingly realistic output.

Evaluation of voice cloning quality typically involves three metrics: naturalness (how human-like the output sounds), speaker similarity (how closely the clone matches the target voice), and intelligibility (how easily the speech can be understood).

## Key companies and products

### ElevenLabs

ElevenLabs is the most prominent company in the voice cloning space. It was co-founded in April 2022 by Piotr Dabkowski, a former Google machine learning engineer, and Mati Staniszewski, a former Palantir strategist. The company's mission is to make quality audio content accessible across all languages.

ElevenLabs grew rapidly after its launch. By January 2023, just five months after launching its beta platform, the company had attracted over one million users. Its funding history reflects this trajectory:

| Date | Round | Amount | Valuation | Lead Investors |
|------|-------|--------|-----------|----------------|
| 2022 | Seed | $2 million | Undisclosed | Credo Ventures, Concept Ventures |
| June 2023 | Series A | $19 million | ~$100 million | Andreessen Horowitz, Nat Friedman, Daniel Gross |
| January 2024 | Series B | $80 million | $1.1 billion | Andreessen Horowitz, Sequoia Capital |
| 2025 | Series C | $180 million | $3.3 billion | Undisclosed |

By late 2024, ElevenLabs had an estimated annual recurring revenue (ARR) of $90 million, growing from $25 million in 2023.

ElevenLabs offers several core products:

- **Text-to-speech**: Generates speech from text using over 10,000 pre-built voices across more than 70 languages. The company's Eleven v3 model, released in early 2025, is described as producing voices that sigh, whisper, laugh, and react with genuine emotional responsiveness.
- **Voice cloning**: Users can create an "instant" voice clone from a few seconds of audio or a "professional" voice clone from a longer recording for more accurate accent and vocal trait reproduction. Voice cloning requires explicit permission from the voice owner.
- **Dubbing and localization**: Automated dubbing of video and audio content into multiple languages while preserving the speaker's original voice characteristics.
- **Voice agents**: AI-powered voice agents for conversational applications.

### PlayHT (Play.ht)

PlayHT is an AI voice platform for text-to-speech, voice cloning, and dubbing. The platform provides access to over 800 AI voices across 142 languages and accents. PlayHT's voice cloning requires a minimum of 30 seconds of audio (either recorded live or uploaded). Users can fine-tune pitch, speed, emphasis, and pauses, and apply emotional styles for more varied narration. PlayHT supports multi-speaker dialog, allowing the creation of conversations and podcasts with multiple voices in a single audio file. The platform is used by content creators for YouTube videos, podcasts, audiobooks, e-learning courses, advertisements, and corporate training.

### Resemble AI

Resemble AI was founded in 2019 by Ahmed and Saqib Muhammad after observing that video game voice acting could not keep pace with frequent game updates. By 2024, the company had more than one million users who had collectively generated 35 years' worth of audio. In July 2023, Resemble AI raised $8 million in funding.

Resemble AI's voice cloning technology requires as little as 10 seconds of audio. Its Rapid Voice Clone 2.0 model can generate high-quality voice content from just 20 seconds of reference audio. The platform supports 149 languages and allows users to adjust speed, pitch, emphasis, and tone. A distinguishing feature is its accent preservation capability, which retains the unique intonations and rhythm of the original speaker.

Resemble AI has also developed safety tools:

- **Resemble Detect**: A system for verifying the authenticity of audio data and detecting AI-generated speech.
- **PerTh Watermarker**: An AI model that inserts imperceptible audio watermarks carrying identifying information into generated speech.

### OpenAI Voice Engine

[OpenAI](/wiki/openai) developed Voice Engine, a voice cloning model first built in late 2022. The system uses a single 15-second audio sample to generate natural-sounding speech that closely resembles the original speaker. Voice Engine powers the preset voices in OpenAI's text-to-speech API as well as ChatGPT Voice and Read Aloud features.

OpenAI unveiled Voice Engine publicly in March 2024 but withheld a broad public release, citing concerns about potential misuse in an election year. The technology was initially made available to approximately 10 developers for low-risk, socially beneficial use cases such as healthcare and accessibility. Early adopters included Age of Learning (for educational content), HeyGen (for video translation), and Livox (for assistive communication).

OpenAI implemented several safety measures for Voice Engine: developers must obtain explicit consent from the original speaker, must disclose to audiences that voices are AI-generated, and all clones are watermarked with imperceptible identifiers described as "tamper resistant." As of March 2025, one year after its preview announcement, OpenAI still had not released Voice Engine for general availability.

### Other notable platforms

| Company | Founded | Key Differentiator | Languages | Minimum Audio for Clone |
|---------|---------|-------------------|-----------|------------------------|
| ElevenLabs | 2022 | Largest voice library; emotional expressiveness | 70+ | A few seconds |
| PlayHT | N/A | Multi-speaker dialog; emotion styles | 142 | 30 seconds |
| Resemble AI | 2019 | Accent preservation; deepfake detection tools | 149 | 10 seconds |
| OpenAI Voice Engine | 2022 (internal) | Integration with ChatGPT ecosystem | Multiple | 15 seconds |
| Speechify | N/A | Focus on reading and accessibility | 30+ | Short sample |
| Descript | N/A | Integrated audio/video editor with voice cloning | English primarily | Several minutes |
| Respeecher | N/A | Film and entertainment industry focus | Multiple | Longer samples |

## Applications

### Audiobooks and publishing

Voice cloning has transformed audiobook production. Authors and publishers use AI-generated voice narration to produce audiobooks without expensive studio sessions. Apple introduced AI-narrated audiobooks in 2023, and the number of AI-narrated titles has grown rapidly since. Voice cloning allows a single author to narrate their own book even if they lack professional narration skills, by recording a short sample and letting the AI handle the full reading. This has reduced the cost and time required for audiobook production from thousands of dollars and weeks of studio work to a fraction of both.

### Content localization and dubbing

AI voice cloning enables content creators to localize video and audio content into dozens of languages while preserving the speaker's original vocal characteristics. Rather than hiring voice actors for each language, a creator can clone their voice and generate dubbed versions automatically. ElevenLabs supports dubbing across 70+ languages, and cloned voices can speak any supported language while maintaining the speaker's vocal identity, accent, and emotional tone. This has particular value for YouTube creators, online courses, and corporate training materials that need to reach global audiences.

### Accessibility

Voice cloning technology has significant applications for accessibility. People who are at risk of losing their ability to speak due to conditions such as ALS (amyotrophic lateral sclerosis), throat cancer, or other degenerative diseases can "bank" their voice by recording samples while they can still speak. The AI then generates a synthetic version of their voice that they can use through assistive communication devices. OpenAI's Voice Engine pilot with Livox specifically targeted this use case, enabling people with communication challenges to interact using a voice that sounds like their own.

Voice cloning also benefits people with visual impairments or dyslexia by enabling personalized text-to-speech reading that sounds more natural than traditional synthetic voices.

### Entertainment and media

In the film and gaming industries, voice cloning is used for re-recording dialogue, restoring historical audio, and creating character voices. Respeecher, for example, provided AI-generated voices for several film productions. Voice cloning can also reduce the need for voice actors to return for pickup sessions, patches, or updates, though this has raised concerns among actors' unions about job displacement.

### Customer service and voice agents

Companies are deploying AI voice agents for customer service, sales, and support interactions. ElevenLabs and other platforms offer voice agent products that use cloned or synthetic voices for phone-based customer interactions. These systems combine voice cloning with [large language models](/wiki/llm) to hold natural-sounding conversations.

## Ethical concerns

### Deepfake audio and fraud

The most pressing concern surrounding voice cloning is its potential for misuse in creating deepfake audio. AI-generated voice recordings can be used to impersonate real people for fraudulent purposes, including financial scams, political disinformation, and identity theft.

A prominent example occurred in January 2024, when robocalls using an AI-generated voice resembling President Joe Biden were sent to more than 20,000 New Hampshire voters ahead of the state's presidential primary, urging them not to vote. Pindrop Security, a voice-fraud detection firm, identified ElevenLabs' technology as the likely tool used to generate the deepfake audio. ElevenLabs subsequently banned the account responsible. The New Hampshire attorney general traced the calls to Walter Monk and his company Life Corporation, along with telecom provider Lingo Telecom.

Beyond political disinformation, voice cloning has been used in financial fraud. Scammers have used cloned voices of family members to make emergency phone calls requesting money transfers. While the Federal Trade Commission does not maintain specific statistics on voice cloning scams, over 845,000 imposter scams were reported in the U.S. in 2024. A Consumer Reports study found that many leading voice cloning products lacked significant safeguards, with researchers able to "easily create" voice clones using publicly accessible audio without consent verification.

### Celebrity and public figure impersonation

Unauthorized use of celebrities' voices is a growing concern. AI-generated songs featuring cloned voices of well-known artists have gone viral on social media and streaming platforms. The "Fake Drake" incident in April 2023, in which an AI-generated song mimicking Drake and The Weeknd attracted millions of plays before being removed, highlighted the ease with which public figures' voices can be replicated without consent.

### Consent and right of publicity

The question of whether voice cloning infringes on individuals' right of publicity, the legal right to control commercial use of one's name, image, and likeness, is being tested in courts and legislatures around the world. Several U.S. states have existing right-of-publicity statutes, but most were written before voice cloning technology existed and may not explicitly cover AI-generated vocal replicas.

## Regulation and safeguards

### United States

Regulatory responses to voice cloning have emerged at both the federal and state levels in the United States:

| Jurisdiction | Legislation / Action | Date | Key Provisions |
|-------------|---------------------|------|----------------|
| Federal (FCC) | Declaratory ruling on AI robocalls | February 2024 | AI-generated voices in robocalls are classified as "artificial" under the Telephone Consumer Protection Act, making them subject to existing robocall restrictions |
| Federal (Congress) | NO AI FRAUD Act (introduced) | January 2024 | Would establish a federal framework protecting individuals' voice and likeness from unauthorized AI replication |
| Federal (Congress) | NO FAKES Act (reintroduced) | April 2025 | Would provide uniform national protections against vocal cloning and digital deepfakes |
| Tennessee | ELVIS Act (Ensuring Likeness, Voice, and Image Security) | 2024 | First state law to expressly extend right-of-publicity protections to AI-generated voice clones; criminalizes unauthorized digital replication |
| California | AB 2602 | September 2024 | Requires artists to give informed consent and have union or legal representation before agreeing to digital replication of their voice |
| Texas | Senate Bill 140 | September 2024 | Mandates AI disclosure within 30 seconds; prohibits voice cloning without consent |

### European Union

The [EU AI Act](/wiki/eu_ai_act), which entered into force in 2024, classifies certain uses of AI-generated synthetic media as high-risk. Under the Act, AI systems that generate deepfake audio or video must disclose that the content is AI-generated. Violations can result in fines of up to 6% of a company's global annual revenue.

### Industry self-regulation

Voice cloning companies have implemented various safeguards:

- **Consent verification**: ElevenLabs, OpenAI, and Resemble AI all require some form of consent from the voice owner before cloning is permitted. ElevenLabs asks users to confirm they have the right to clone a given voice.
- **Watermarking**: OpenAI's Voice Engine and Resemble AI's PerTh Watermarker embed imperceptible identifiers in AI-generated audio to enable later detection and attribution.
- **Detection tools**: Resemble AI's Resemble Detect product is designed to identify AI-generated audio. Pindrop Security and other third-party firms also offer voice authenticity verification services.
- **Usage policies**: Most platforms prohibit the use of their tools for fraud, impersonation, or political manipulation, though enforcement relies largely on after-the-fact account bans.

### FTC Voice Cloning Challenge

In 2024, the U.S. Federal Trade Commission launched the Voice Cloning Challenge, a public competition encouraging technologists to develop solutions for detecting and mitigating the harms of AI voice cloning. The challenge reflected growing government concern about the technology's potential for consumer fraud and manipulation.

## Technical challenges

Despite rapid progress, voice cloning technology still faces several technical hurdles:

- **Emotional consistency**: Maintaining consistent emotional tone across long passages of generated speech remains difficult. Models may produce speech that sounds flat or inconsistent in its expressiveness.
- **Accent fidelity**: While systems like Resemble AI emphasize accent preservation, many models still tend to flatten accents or introduce inconsistencies, particularly for underrepresented languages and dialects.
- **Real-time performance**: Generating high-quality cloned speech in real time for interactive applications (such as phone calls or live events) requires significant computational resources and latency optimization.
- **Cross-lingual cloning**: Making a cloned voice speak naturally in a language the original speaker does not know is an active area of research. Current systems can produce intelligible cross-lingual output but may introduce artifacts or lose some vocal characteristics.
- **Long-form coherence**: Generating audiobook-length narration that maintains consistent quality, pacing, and emotional appropriateness over hours of audio is still challenging.

## See also

- [Artificial intelligence](/wiki/artificial_intelligence)
- [Generative AI](/wiki/generative_ai)
- [Deep learning](/wiki/deep_learning)
- [Text to speech](/wiki/text_to_speech)
- [Natural language processing](/wiki/natural_language_processing)
- [Generative adversarial network](/wiki/generative_adversarial_network)
- [OpenAI](/wiki/openai)
- [AI music generation](/wiki/ai_music_generation)
- [Deepfake](/wiki/deepfake)
- [EU AI Act](/wiki/eu_ai_act)

## References

1. "Free AI Voice Generator & Voice Agents Platform." ElevenLabs. [https://elevenlabs.io/](https://elevenlabs.io/)
2. "AI Voice Cloning: Clone Your Voice in Minutes." ElevenLabs. [https://elevenlabs.io/voice-cloning](https://elevenlabs.io/voice-cloning)
3. "Eleven v3: Most Expressive AI TTS Model Launched." ElevenLabs. [https://elevenlabs.io/blog/eleven-v3](https://elevenlabs.io/blog/eleven-v3)
4. "How Two Polish Friends Built ElevenLabs From $0 to $200M Revenue in 3 Years." GetLatka. [https://getlatka.com/blog/eleven-labs-revenue-valuation/](https://getlatka.com/blog/eleven-labs-revenue-valuation/)
5. "ElevenLabs." Wikipedia. [https://en.wikipedia.org/wiki/ElevenLabs](https://en.wikipedia.org/wiki/ElevenLabs)
6. "ElevenLabs raises $180M Series C to be the voice of the digital world." ElevenLabs Blog. [https://elevenlabs.io/blog/series-c](https://elevenlabs.io/blog/series-c)
7. "Navigating the challenges and opportunities of synthetic voices." OpenAI. [https://openai.com/index/navigating-the-challenges-and-opportunities-of-synthetic-voices/](https://openai.com/index/navigating-the-challenges-and-opportunities-of-synthetic-voices/)
8. "A year later, OpenAI still hasn't released its voice cloning tool." TechCrunch. [https://techcrunch.com/2025/03/06/a-year-later-openai-still-hasnt-released-its-voice-cloning-tool/](https://techcrunch.com/2025/03/06/a-year-later-openai-still-hasnt-released-its-voice-cloning-tool/)
9. "OpenAI built a voice cloning tool, but you can't use it... yet." TechCrunch. [https://techcrunch.com/2024/03/29/openai-custom-voice-engine-preview/](https://techcrunch.com/2024/03/29/openai-custom-voice-engine-preview/)
10. "Custom AI Voice Cloning." Resemble AI. [https://www.resemble.ai/voice-cloning/](https://www.resemble.ai/voice-cloning/)
11. "Voice cloning platform Resemble AI lands $8M." TechCrunch. [https://techcrunch.com/2023/07/12/voice-cloning-platform-resemble-ai-lands-8m/](https://techcrunch.com/2023/07/12/voice-cloning-platform-resemble-ai-lands-8m/)
12. "Rapid Voice Cloning 2.0: New Voice Cloning Model with Unmatched Accuracy." Resemble AI. [https://www.resemble.ai/rapid-voice-cloning-2/](https://www.resemble.ai/rapid-voice-cloning-2/)
13. "Understanding Zero-Shot Voice Cloning." Resemble AI. [https://www.resemble.ai/zero-shot-voice-cloning-guide/](https://www.resemble.ai/zero-shot-voice-cloning-guide/)
14. "AI firm ElevenLabs bans account for Biden audio deepfake." Fortune. [https://fortune.com/2024/01/27/ai-firm-elevenlabs-bans-account-for-biden-audio-deepfake/](https://fortune.com/2024/01/27/ai-firm-elevenlabs-bans-account-for-biden-audio-deepfake/)
15. "Fake Biden robocall linked to Texas-based companies." CNN. [https://www.cnn.com/2024/02/06/tech/nh-ag-robocall-update](https://www.cnn.com/2024/02/06/tech/nh-ag-robocall-update)
16. "The FTC Voice Cloning Challenge." Federal Trade Commission. [https://www.ftc.gov/news-events/contests/ftc-voice-cloning-challenge](https://www.ftc.gov/news-events/contests/ftc-voice-cloning-challenge)
17. "The Law Speaks Up: AI Voice Cloning and Consent." Juris Magazine. [https://sites.law.duq.edu/juris/2025/11/25/the-law-speaks-up-ai-voice-cloning-and-consent/](https://sites.law.duq.edu/juris/2025/11/25/the-law-speaks-up-ai-voice-cloning-and-consent/)
18. "First-of-Its-Kind AI Law Addresses Deep Fakes and Voice Clones." Holland & Knight. [https://www.hklaw.com/en/insights/publications/2024/04/first-of-its-kind-ai-law-addresses-deep-fakes-and-voice-clones](https://www.hklaw.com/en/insights/publications/2024/04/first-of-its-kind-ai-law-addresses-deep-fakes-and-voice-clones)
19. "AI voice-cloning scams: A persistent threat with limited guardrails." Axios. [https://www.axios.com/2025/03/15/ai-voice-cloning-consumer-scams](https://www.axios.com/2025/03/15/ai-voice-cloning-consumer-scams)
20. "Exploring Zero-Shot Voice Cloning: Applications, Technology, and Challenges." Yepic AI. [https://www.yepic.ai/blog/exploring-zero-shot-voice-cloning-applications-technology-and-challenges](https://www.yepic.ai/blog/exploring-zero-shot-voice-cloning-applications-technology-and-challenges)
21. "#1 Free AI Voice Generator, Text to Speech, & AI Voice Over." PlayHT. [https://play.ht/voice-cloning/](https://play.ht/voice-cloning/)
