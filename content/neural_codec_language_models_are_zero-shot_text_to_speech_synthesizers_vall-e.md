---
title: "Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers (VALL-E)"
slug: "neural_codec_language_models_are_zero-shot_text_to_speech_synthesizers_vall-e"
---*See also: [Papers](/wiki/papers)*

## Introduction

In the last decade, there have been significant advances in speech synthesis via neural networks and end to end modeling. Current text-to-speech (TTS), systems require high-quality data from recording studios. They also suffer from poor generalization for unseen speaker in zero-shot situations. A new TTS framework, VALL-E, has been developed to address this issue. It uses audio codec codes for an intermediate representation as well as large, diverse and multi-speaker speech training data. VALL-E is the first TTS framework to have [in-context learning](/wiki/in-context_learning) capabilities. It also allows prompt-based approaches for zero shot TTS. It is significantly more natural than the state-of the-art zero shot TTS system in speech naturalness and speaker similarity. It can synthesize multiple outputs from the same input text, while keeping the acoustic environment intact and the speaker's emotion. VALL-E is trained using LibriLight. This corpus contains 60K hours English speech and over 7000 speakers.

## Related Work

The current techniques in Text-to-Speech (TTS) can be classified as cascaded or end-to-end methods. Cascaded TTS systems use an acoustic model and a vocoder with mel spectrograms as intermediate representations, while end-to-end models jointly optimize the acoustic model and vocoder. There is growing interest in zero-shot multi-speaker TTS techniques, which aim to customize a TTS system to an arbitrary voice with limited enrolled recordings. The article describes various approaches to achieve this, including speaker adaptation, speaker encoding, and diffusion model-based TTS. The article then discusses spoken generative pre-trained models, including GSLM, AudioLM, and VALL-E, which leverage self-supervised learning to synthesize speech. Finally, the article presents a new approach to cascaded TTS that uses audio codec codes as intermediate representations, which has strong in-context learning capabilities and does not require fine-tuning or a complex speaker encoder.

## Background: Speech Quantization

Because of the large number and length of sequences required, it is challenging to synthesize raw audio using generative model. Speech quantization is needed to reduce sequence lengths and integer values. The article discusses quantization methods including vector quantization and U-law transformation. It also proposes EnCodec as a pretrained neural audio codec model that can represent speech in discrete tokens. The EnCodec convolutional encoder/decoder model uses residual vector quantization, (RVQ), to produce embedded data at a lower sampling rate. You can use the Convolutional Decoder of EnCodec to reconstruct the waveform at 24-kHz using all discrete codes. This article highlights the benefits of using the neural codec method over traditional audio codec methods, such as better speaker identity preservation or an off-the shelf codec decoder.

## Vall-E

VALL-E is a zero-shot TTS model that operates on discrete audio representations, which consists of an autoregressive (AR) decoder-only language model and a non-autoregressive (NAR) language model.

The AR model generates tokens from the first quantizer codebook and is conditioned on the phoneme sequence x and the acoustic prompt C˜:,1.

The NAR model generates tokens from the second to last quantizers codebooks, and is conditioned on the phoneme sequence x, acoustic prompt C˜ and predicted acoustic tokens belong to previous codebook C:,<j.

Inference methods such as sampling-based decoding and greedy decoding are used for the AR and NAR models respectively.

Two settings of VALL-E are proposed; one using only the phoneme transcription and first layer acoustic token from enrolled speech as prompts, while another uses first 3 seconds of utterance as prompts.