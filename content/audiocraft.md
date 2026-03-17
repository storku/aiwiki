---
title: "AudioCraft"
slug: "audiocraft"
categories:
  - "Terms"
  - "Meta"
  - "Generative_AI"
---*See also: [Terms](/wiki/terms) and [Generative AI](/index.php?title=Generative_AI&action=edit&redlink=1)*

## Overview

AudioCraft is an innovative framework designed for easy generation of high-quality, realistic [audio](/wiki/audio) and [music](/wiki/music), derived from textual [inputs](/index.php?title=Input&action=edit&redlink=1). By training on raw audio signals as opposed to MIDI or piano rolls, AudioCraft provides an unprecedented level of audio flexibility to musicians, game developers, and small business owners alike.

### Components of AudioCraft

The AudioCraft suite is composed of three distinct models: [MusicGen](/index.php?title=MusicGen&action=edit&redlink=1), [AudioGen](/index.php?title=AudioGen&action=edit&redlink=1), and [EnCodec](/index.php?title=EnCodec&action=edit&redlink=1). MusicGen, trained using a large corpus of music licensed and owned by [Meta](/wiki/meta), turns text-based user inputs into music. In a similar vein, AudioGen, trained on public sound effects, generates audio from textual descriptions.

The system incorporates a revised version of the EnCodec decoder, which facilitates the generation of higher quality music with reduced artifacts. The models, along with the pre-trained AudioGen model, permit the generation of a diverse range of environmental sounds and effects, such as a barking dog, honking cars, or footsteps on a wooden floor. AudioCraft's models, weights, and code are now available for research purposes and to expand understanding of this technology. This open-source initiative provides an opportunity for researchers and practitioners to train their own models using their own datasets, potentially leading to advancements in the field.

## Generative AI: Filling the Audio Gap

In recent years, the rise of generative AI models has revolutionized the creation of images, video, and text. However, the audio domain has seen slower progress. Producing high-fidelity audio of any kind necessitates modeling intricate signals and patterns at multiple scales. Musical compositions, which involve both local and long-range patterns across multiple instruments, present a particularly challenging task for AI.

Historically, AI's generation of coherent music has relied on symbolic representations, such as MIDI or piano rolls. However, these methods have limitations, failing to fully capture the expressive nuances and stylistic elements inherent in music. The advent of self-supervised audio representation learning and several hierarchical or cascaded models have made some strides in music generation. Still, there is potential for significant advancement in this field.

The AudioCraft suite of models presents an elegant solution to this problem, producing high-quality audio with long-term consistency that can be interacted with easily through a natural interface. By simplifying the overall design of generative models for audio, AudioCraft provides an open platform for further innovation and development.

## AudioCraft: Advancements in Audio Generation

The process of generating audio from raw signals presents significant challenges due to the need to model extremely long sequences. For example, a standard quality music recording of a few minutes at 44.1 kHz involves millions of timesteps. This complexity is markedly different from text-based generative models, which process text as sub-words representing only a few thousands of timesteps per sample.

AudioCraft addresses this challenge by leveraging the EnCodec neural audio codec to derive discrete audio tokens from the raw signal. This process provides a new fixed "vocabulary" for music samples. The framework then trains autoregressive language models over these discrete audio tokens to generate new tokens, sounds, and music when converting the tokens back to the audio space with EnCodec’s decoder.

### EnCodec: Learning Audio Tokens from the Waveform

EnCodec, a lossy neural codec trained to compress any kind of audio, allows for high fidelity reconstruction of the original signal. The system comprises an autoencoder with a residual vector quantization bottleneck that generates several parallel streams of audio tokens. These streams capture different levels of information in the audio waveform, allowing for the reconstruction of audio with high fidelity.

### Training Audio Language Models

An autoregressive language model is then employed to recursively model the audio tokens derived from EnCodec. The system introduces a novel approach to leverage the internal structure of parallel streams of tokens. With a single model and an elegant token interleaving pattern, the approach efficiently models audio sequences. This facilitates the capturing of long-term dependencies in the audio and enables the generation of high-quality sound.

## Text-to-Audio Generation: A New Frontier

Using AudioGen, it is possible to train AI models to generate audio from textual descriptions. This text-to-audio generation can produce environmental sounds that correspond to complex scenes and realistic recording conditions. Similarly, MusicGen, an audio generation model specifically designed for music generation, can create novel musical pieces that reflect coherent long-term structures. The model has been trained on approximately 400,000 recordings along with text descriptions and metadata, amounting to 20,000 hours of music.

## Future Developments in AudioCraft Research

The research team continues to work on the advancements of generative AI audio models. Future plans include exploring better controllability of generative models for audio, investigating additional conditioning methods, and extending the ability of models to capture even longer range dependencies. In parallel, the team aims to improve the current models by increasing their speed and efficiency from a modeling perspective, while also enhancing control over these models.

## Responsibility, Transparency, and Open Source

Meta acknowledges the importance of responsibility and transparency in research. Open sourcing their research and resulting models enables the research community to build upon this work, thus leading to continuous improvements. This is particularly significant given the recognition that the training datasets used for their models have limitations, such as a lack of diversity and bias towards Western-style music and English metadata.

By releasing the AudioCraft code, Meta encourages researchers to test new approaches to limit or eliminate potential bias and misuse of generative models. Open sourcing initiatives like AudioCraft can foster innovation, contributing to how audio and music are produced and experienced in the future.

## Implications of AudioCraft

In future, generative AI could expedite iteration time, providing faster feedback during early prototyping stages, whether for developers building worlds for the metaverse, musicians working on new compositions, or small and medium-sized businesses seeking to upgrade their creative assets. AudioCraft represents a significant stride in generative AI research, potentially impacting the development of advanced human-computer interaction models, particularly in auditory and multi-modal interfaces.