---
title: "Whisper"
slug: "whisper"
---Whisper is an [automatic speech recognition](/index.php?title=Automatic_speech_recognition&action=edit&redlink=1) ([ASR](/index.php?title=ASR&action=edit&redlink=1)) system developed by [OpenAI](/wiki/openai), released in 2022 [&#91;1&#93;](#cite_note-”1”-1), that is capable of generating [transcriptions](/index.php?title=Transcription&action=edit&redlink=1) and [translations](/index.php?title=Translation&action=edit&redlink=1) using an [audio](/wiki/audio) track as [input](/index.php?title=Input&action=edit&redlink=1). [&#91;2&#93;](#cite_note-”2”-2) OpenAI stated that the model has been "trained on 680,000 hours of multilingual and multitask supervised data collected from the web," approaching "human level robustness and accuracy on English speech recognition." Unlike [DALL-E](/wiki/dall-e) 2 and [GPT-3](/wiki/gpt-3), the research lab has made Whisper publicly available as an open-source project on Github. [&#91;1&#93;](#cite_note-”1”-1) [&#91;3&#93;](#cite_note-”3”-3) [&#91;4&#93;](#cite_note-”4”-4)

In the fields of [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)) and [machine learning](/wiki/machine_learning), [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1) is still a challenging problem. [&#91;5&#93;](#cite_note-”5”-5) However, highly capable speech recognition systems have been developed and are used by major corporations like [Google](/index.php?title=Google&action=edit&redlink=1), [Amazon](/index.php?title=Amazon&action=edit&redlink=1), and [Meta](/wiki/meta). However, according to OpenAI, Whisper is different from those, since it was trained on hundred of thousands hours of multilingual and "multitask" data gathered from the web, increasing its robustness in the recognition of accents, background noise, and technical language. [&#91;3&#93;](#cite_note-”3”-3) [&#91;5&#93;](#cite_note-”5”-5) [&#91;6&#93;](#cite_note-”6”-6) This leads to an almost flawless speech transcription across different languages, even with poor-quality audio or excessive background noise. The model supports transcription for 99 languages and translation from those languages into English. [&#91;6&#93;](#cite_note-”6”-6) While OpenAI's analysis of other languages besides English is not comprehensive, users have reported good results. [&#91;7&#93;](#cite_note-”7”-7)

Most of the software's audio dataset is comprised of English but about a third is from other languages. The increased capabilities of Whisper in speech recognition come from having a large and diverse dataset. [&#91;1&#93;](#cite_note-”1”-1) Indeed, the model works better than commercial ASR  systems like [Alexa](/index.php?title=Alexa&action=edit&redlink=1), [Siri](/index.php?title=Siri&action=edit&redlink=1), and [Google Assistant](/index.php?title=Google_Assistant&action=edit&redlink=1). [&#91;8&#93;](#cite_note-”8”-8)

Whispers' unprecedented high degree of accuracy and ease of use will allow the integration of [voice interfaces](/index.php?title=Voice_interface&action=edit&redlink=1) on a broader number of applications. [&#91;1&#93;](#cite_note-”1”-1) The model was released with five different sizes with the tradeoff being between accuracy for speed (the smallest model is approximately 60 times faster than the largest one), giving the option to run it on laptops, desktops, mobile devices, or cloud servers. [&#91;7&#93;](#cite_note-”7”-7) Also, due to its open-source nature, developers and users can integrate it on their servers, increasing privacy. [&#91;9&#93;](#cite_note-”9”-9) 

## Architecture

[![](/images/thumb/3/39/Asr-summary-of-model-architecture.png/300px-Asr-summary-of-model-architecture.png)](/wiki/file_asr-summary-of-model-architecture_png)  [](/wiki/file_asr-summary-of-model-architecture_png)
Figure 1. Whisper architecture. Source: OpenAI.
[![](/images/thumb/b/b6/Whisper_models.png/300px-Whisper_models.png)](/wiki/file_whisper_models_png)  [](/wiki/file_whisper_models_png)
Figure 2. Different Whisper models. Source: OpenAI.
[![](/images/thumb/8/84/Whisper_Word-Error-Rate.png/300px-Whisper_Word-Error-Rate.png)](/wiki/file_whisper_word-error-rate_png)  [](/wiki/file_whisper_word-error-rate_png)
Figure 3. Comparison of Whisper's Word-error-rate (WER) with other models. Source: OpenAI.
[![](/images/thumb/5/5e/Multilingual_wer.png/300px-Multilingual_wer.png)](/wiki/file_multilingual_wer_png)  [](/wiki/file_multilingual_wer_png)
Figure 4. Whisper's WER as a function of language. Source: OpenAI.
OpenAI's ASR system has a classic built based on the transformer architecture, stacking encoder and decoder blocks (figure 1). [&#91;1&#93;](#cite_note-”1”-1) [&#91;10&#93;](#cite_note-”10”-10) [&#91;11&#93;](#cite_note-”11”-11) This is similar to [GPT-3](/wiki/gpt-3) and other language models. [&#91;11&#93;](#cite_note-”11”-11) The audio is split into 30-second pieces and processed one by one [&#91;1&#93;](#cite_note-”1”-1) [&#91;11&#93;](#cite_note-”11”-11) According to OpenAI, the audio chunks are "converted into a log-Mel spectrogram, and then passed into an encoder. A decoder is trained to predict the corresponding text caption, intermixed with special tokens that direct the single model to perform tasks such as language identification, phrase-level timestamps, multilingual speech transcription, and to-English speech translation." [&#91;1&#93;](#cite_note-”1”-1)

Since Whisper was trained on more than 600,000 hours of multilingual and multitask supervised data from the web, a type of training akin to [GPT-3](/wiki/gpt-3), it results in the ASR system becoming a large and general audio model. [&#91;11&#93;](#cite_note-”11”-11) This contrasts with smaller fine-tuned training datasets or ones that use broad but unsupervised audio pretraining. Therefore, Whisper does not beat models that specialize in LibriSpeech performance but its zero-shot performance is more robust and with 50% fewer errors than those other models. [&#91;1&#93;](#cite_note-”1”-1)

The system has five models (figure 2) with four of them for English-only applications. Accuracy is directly proportional to the size of the model and speed performance is inversely proportional to it. [&#91;3&#93;](#cite_note-”3”-3) The AI program can be used on both CPU and GPU but the larger models' performance will lack on slow CPUs. [&#91;12&#93;](#cite_note-”12”-12)

On comparisons of Whisper's accuracy using word-Error-Rate (WER) to state-of-the-art speech recognition modes, it achieves excellent results (figure 3). This opens research possibilities in the field of ASR since it's an open-source model. However, besides Romance languages, German, Japanese, and a few others, the WER is still greater than 20% (figure 4). [&#91;12&#93;](#cite_note-”12”-12)

## Applications

Whisper has various possible applications but its primary use is for AI researchers that are studying generalization, robustness, capabilities, biases, and limitations of such models. [&#91;5&#93;](#cite_note-”5”-5) Being an open-source project also makes it easier for research on deep learning models and in helping create specialized applications. [&#91;7&#93;](#cite_note-”7”-7) It can also be a solution for ASR developers. OpenAI has stated that "while Whisper models cannot be used for real-time transcription out of the box, their speed and size suggest that others may be able to build applications on top of them that allow for near-real-time speech recognition and translation." [&#91;5&#93;](#cite_note-”5”-5)

The model is already being used in applications for YouTube transcription, a service provided by [Hugging Face](/wiki/hugging_face) which hosts Whisper and makes it available through API calls. Furthermore, the program can be fine-tuned for new applications like improved ASR performance in a language that is not well supported, to increase medical or technical terms recognition, speaker verification, sound event detection, and keyword spotting. [&#91;7&#93;](#cite_note-”7”-7)

## Advantages

- More robust and accurate than other ASR systems;

- Recognizes speech even with accents;

- Limits background noise;

- Configure to understand, transcribe and translate technical language;

- Lower error percentage than other models. [&#91;2&#93;](#cite_note-”2”-2)

## Limitations and dangers

- Possible inclusion of words in transcriptions that weren't spoken;

- Different performance levels across languages; higher error rate for languages that are less represented in the training set;

- Biases that arise from the training data; [&#91;5&#93;](#cite_note-”5”-5)

- Processing time may still be excessive according to the model used, computer, and configuration type;

- Installation is not user-friendly. [&#91;8&#93;](#cite_note-”8”-8)

## Installation

### Requirements

- Python 3.7+;

- Recent version of PyTorch;

- FFmpeg;

- Around 10GB of RAM and 11GB of VRAM;

- At least a 16GB GPU. [&#91;9&#93;](#cite_note-”9”-9)

### Installing Whisper

To install Whisper, execute the command 

pip install git+[https://github.com/openai/whisper.git](https://github.com/openai/whisper.git) [&#91;12&#93;](#cite_note-”12”-12)

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2) [1.3](#cite_ref-”1”_1-3) [1.4](#cite_ref-”1”_1-4) [1.5](#cite_ref-”1”_1-5) [1.6](#cite_ref-”1”_1-6) [1.7](#cite_ref-”1”_1-7)  OpenAI (2022). Introducing Whisper. OpenAI. [https://openai.com/blog/whisper](https://openai.com/blog/whisper)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1)  Narrativa (2022). Whisper’s OpenAI: The AI whisperer model. Narrativa. [https://www.narrativa.com/whispers-openai-the-ai-whisperer-model/](https://www.narrativa.com/whispers-openai-the-ai-whisperer-model/)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1) [3.2](#cite_ref-”3”_3-2)  Subramanian, D (2022). Speech-to-Text with OpenAI’s Whisper. Towards Data Science.[https://towardsdatascience.com/speech-to-text-with-openais-whisper-53d5cea9005e](https://towardsdatascience.com/speech-to-text-with-openais-whisper-53d5cea9005e)

4. [↑](#cite_ref-”4”_4-0)  Holmgren, T (2022). OpenAI Whisper - robots with human-level speech recognition skills? Robocorp. [https://robocorp.com/blog/openai-whisper](https://robocorp.com/blog/openai-whisper)

5. ↑ [5.0](#cite_ref-”5”_5-0) [5.1](#cite_ref-”5”_5-1) [5.2](#cite_ref-”5”_5-2) [5.3](#cite_ref-”5”_5-3) [5.4](#cite_ref-”5”_5-4)  Wiggers, K (2022). OpenAI open-sources Whisper, a multilingual speech recognition system. TechCrush. [https://techcrunch.com/2022/09/21/openai-open-sources-whisper-a-multilingual-speech-recognition-system/](https://techcrunch.com/2022/09/21/openai-open-sources-whisper-a-multilingual-speech-recognition-system/)

6. ↑ [6.0](#cite_ref-”6”_6-0) [6.1](#cite_ref-”6”_6-1)  Briggs, J (2022). Fixing YouTube Search with OpenAI's Whisper. Pinecone. [https://www.pinecone.io/learn/openai-whisper/](https://www.pinecone.io/learn/openai-whisper/)

7. ↑ [7.0](#cite_ref-”7”_7-0) [7.1](#cite_ref-”7”_7-1) [7.2](#cite_ref-”7”_7-2) [7.3](#cite_ref-”7”_7-3)  Dickson, B (2022). How will OpenAI’s Whisper model impact AI applications? VentureBeat. [https://venturebeat.com/ai/how-will-openais-whisper-model-impact-ai-applications/](https://venturebeat.com/ai/how-will-openais-whisper-model-impact-ai-applications/)

8. ↑ [8.0](#cite_ref-”8”_8-0) [8.1](#cite_ref-”8”_8-1)  Ansari, T (2022). OpenAI’s Whisper is revolutionary but (little) flawed. Analytics India Magazine. [https://analyticsindiamag.com/openais-whisper-is-revolutionary-but-little-flawed/](https://analyticsindiamag.com/openais-whisper-is-revolutionary-but-little-flawed/)

9. ↑ [9.0](#cite_ref-”9”_9-0) [9.1](#cite_ref-”9”_9-1)  Salinas, J (2022). How to install and deploy whisper, the best open-source alternative To Google speech-to-text. NLP Cloud. [https://nlpcloud.com/how-to-install-and-deploy-whisper-the-best-open-source-alternative-to-google-speech-to-text.html](https://nlpcloud.com/how-to-install-and-deploy-whisper-the-best-open-source-alternative-to-google-speech-to-text.html)

10. [↑](#cite_ref-”10”_10-0)  Alford, A (2022). OpenAI Releases 1.6 Billion Parameter Multilingual Speech Recognition AI Whisper. InfoQ. [https://www.infoq.com/news/2022/10/openai-whisper-speech/](https://www.infoq.com/news/2022/10/openai-whisper-speech/)

11. ↑ [11.0](#cite_ref-”11”_11-0) [11.1](#cite_ref-”11”_11-1) [11.2](#cite_ref-”11”_11-2) [11.3](#cite_ref-”11”_11-3)  Brouchard, L (2022). OpenAI's most recent model: Whisper (explained). Louis Bouchard. [https://www.louisbouchard.ai/whisper/](https://www.louisbouchard.ai/whisper/)

12. ↑ [12.0](#cite_ref-”12”_12-0) [12.1](#cite_ref-”12”_12-1) [12.2](#cite_ref-”12”_12-2)  O'Connor, R (2022). How to Run OpenAI’s Whisper Speech Recognition Model. AssemblyAI. [https://www.assemblyai.com/blog/how-to-run-openais-whisper-speech-recognition-model/](https://www.assemblyai.com/blog/how-to-run-openais-whisper-speech-recognition-model/)