---
title: "Attention Is All You Need (Transformer)"
slug: "attention_is_all_you_need_transformer"
---Vaswani et al. published in 2017 an influential research paper titled "Attention Is All You Need" at the Neural Information Processing Systems (NeurIPS) conference that introduced the [Transformer](/wiki/transformer) architecture, a novel [Neural Network](/index.php?title=Neural_Network&action=edit&redlink=1) ([NN](/wiki/nn)) model for [Natural Language Processing](/wiki/natural_language_processing) ([NLP](/wiki/nlp)) tasks. [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) As of 2022, the paper has become one of the most cited and influential in the fields of [NLP](/wiki/nlp) and [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) with over 12,000 citations. The authors were all researchers from [Google Brain](/index.php?title=Google_Brain&action=edit&redlink=1), an AI research division of Google. [&#91;1&#93;](#cite_note-”1”-1)

The new neural network architecture was based on a self-attention mechanism apt for language understanding. [&#91;2&#93;](#cite_note-”2”-2) Traditionally, sequence transduction models were based on a complex [recurrent neural network](/wiki/recurrent_neural_network) or a [convolutional neural network](/wiki/convolutional_neural_network) that included an encoder and decoder. The top performing models also connected the encoder and decoder via an attention mechanism. With the [Transformer](/wiki/transformer), researchers created a simple network architecture based only on attention mechanisms, without recurrence and convolutions. [&#91;3&#93;](#cite_note-”3”-3)

The experimental results demonstrated that the new model was "superior in quality while being more parallelizable and requiring significantly less time to train." [&#91;3&#93;](#cite_note-”3”-3) Also, it was showed that the [Transformer](/wiki/transformer) generalized well to other tasks. According to the research paper authors, "The [Transformer](/wiki/transformer) allows for significantly more parallelization and can reach a new state of the art in translation quality after being trained for as little as twelve hours on eight P100 GPUs." [&#91;3&#93;](#cite_note-”3”-3)

As an important paper, its main contribution was the demonstration of the effectiveness of attention mechanisms in [[NLP] tasks. [1] Applications that use [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) use transformers because they improve upon previous approaches and are essential in current [large language model](/wiki/large_language_model) ([LLM](/wiki/llm)) applications like [ChatGPT](/wiki/chatgpt), [Google Search](/index.php?title=Google_Search&action=edit&redlink=1), [DALL-E](/wiki/dall-e), and [Microsoft Copilot](/wiki/microsoft_copilot). It was also demonstrated that transformer models can also learn to work with chemical structures, predict protein folding, and medical data at scale. [&#91;4&#93;](#cite_note-”4”-4)

## Model Architecture

[![](/images/thumb/4/4e/Transformer-model_architecture.png/300px-Transformer-model_architecture.png)](/wiki/file_transformer-model_architecture_png)  [](/wiki/file_transformer-model_architecture_png)
Figure 1. Transformer model architecture. Source: Google
The  [Transformer](/wiki/transformer) consists of an encoder and a decoder, both consisting of various layers that contain two sub-layers, a self-attention and a feed-forward neural network layer (figure 1). [&#91;1&#93;](#cite_note-”1”-1) [&#91;3&#93;](#cite_note-”3”-3) This architecture relies only on attention mechanisms to process input sequences. [&#91;1&#93;](#cite_note-”1”-1)

## Attention

Vaswani et al. (2017) describes that "An [attention](/wiki/attention) function can be described as mapping a query and a set of key-value pairs to an output, where the query, keys, values, and output are all vectors. The output is computed as a weighted sum
of the values, where the weight assigned to each value is computed by a compatibility function of the query with the corresponding key." [&#91;3&#93;](#cite_note-”3”-3) To capture long-term dependencies and contextual relationships between words in a sentence, the model uses [attention](/wiki/attention) mechanism to enable neural networks to selectively focus on specific parts of the input sequence. [&#91;1&#93;](#cite_note-”1”-1)

[Self-attention](/index.php?title=Self-attention&action=edit&redlink=1) (also known as intra-attention) "is an attention mechanism relating different positions of a single sequence in order to compute a representation of the sequence. Self attention has been used successfully in a variety of tasks including reading comprehension, abstractive summarization, textual entailment and learning task-independent sentence representations." [&#91;3&#93;](#cite_note-”3”-3)

It enables the weighing of the importance of different input elements during computation, attending to different parts of the input sequence and generating context-aware representations of each word in the sequence while requiring less training data than traditional models. [&#91;1&#93;](#cite_note-”1”-1) [&#91;5&#93;](#cite_note-”5”-5)

## Positional Encoding

Since the model doesn't contain recurrence or convolution, positional encoding was introduced to incorporate the order information in the input sequences. This way, it enabled the NN to distinguish elements based on their positions. [&#91;3&#93;](#cite_note-”3”-3)

## Training and Inference

[![](/images/thumb/e/e1/Transformer_achieves_better_BLEU_scores.png/300px-Transformer_achieves_better_BLEU_scores.png)](/wiki/file_transformer_achieves_better_bleu_scores_png)  [](/wiki/file_transformer_achieves_better_bleu_scores_png)
Figure 2. Transformer BLEU scores. Source: Google.
[![](/images/thumb/4/44/English_to_German_translation.png/300px-English_to_German_translation.png)](/wiki/file_english_to_german_translation_png)  [](/wiki/file_english_to_german_translation_png)
Figure 3. English to German translation scores. Source: Google.
[![](/images/thumb/3/34/English_to_French_translation.png/300px-English_to_French_translation.png)](/wiki/file_english_to_french_translation_png)  [](/wiki/file_english_to_french_translation_png)
Figure 3. English to French translation scores. Source: Google.
The training was made on the standard WMT 2014 English-German dataset consisting of about 4.5 million sentence pairs, and the sentences encoded using byte-pair. In the case of English-French, a WMT 2014 English-French dataset was used. It consisted of 36 million sentences and split tokens into a 32,000 word-piece vocabulary. [&#91;3&#93;](#cite_note-”3”-3)

The models were trained on one machine with 8 NVIDIA P100 GPUs. The base models were trained for a total of 100,000 steps or 12 hours, and the big models for 300,000 steps that corresponded to 3.5 days. [&#91;3&#93;](#cite_note-”3”-3)

## Experimental Results

Both the base and big transformer models outperformed the best previous published models and ensembles while reducing training costs (figure 2, 3, and 4). [&#91;3&#93;](#cite_note-”3”-3)

## Relevant Links

- [Attention](/wiki/attention)

- [Convolutional neural network](/wiki/convolutional_neural_network)

- [Decoder](/wiki/decoder)

- [Encoder](/wiki/encoder)

- [Feedforward neural network (FNN)](/index.php?title=Feedforward_neural_network_(FNN)&action=edit&redlink=1)

- [Language model](/wiki/language_model)

- [Recurrent models (Recurrent neural network)](/index.php?title=Recurrent_models_(Recurrent_neural_network)&action=edit&redlink=1)

- [Neural Network](/index.php?title=Neural_Network&action=edit&redlink=1)

- [Self-Attention](/index.php?title=Self-Attention&action=edit&redlink=1)

- [Sequence model](/wiki/sequence_model)

- [Transformer](/wiki/transformer)

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2) [1.3](#cite_ref-”1”_1-3) [1.4](#cite_ref-”1”_1-4) [1.5](#cite_ref-”1”_1-5) Pandle, AS. Attention Is All You Need: Paper Summary and Insights. OpenGenus. [https://iq.opengenus.org/attention-is-all-you-need-summary/](https://iq.opengenus.org/attention-is-all-you-need-summary/)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1) Uszkoreit, J (2017). Transformer: A Novel Neural Network Architecture for Language Understanding. Google Blog. [https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html?m=1](https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html?m=1)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1) [3.2](#cite_ref-”3”_3-2) [3.3](#cite_ref-”3”_3-3) [3.4](#cite_ref-”3”_3-4) [3.5](#cite_ref-”3”_3-5) [3.6](#cite_ref-”3”_3-6) [3.7](#cite_ref-”3”_3-7) [3.8](#cite_ref-”3”_3-8) [3.9](#cite_ref-”3”_3-9) Vaswani, A, Shazeer, N, Parmar, N, Uszkoreit, J, Jones, Llion, Gomez, AN, Kaiser, L and Polosukhin, I (2017).Attention is All You Need. arXiv:1706.03762v5. [https://arxiv.org/pdf/1706.03762.pdf](https://arxiv.org/pdf/1706.03762.pdf)

4. [↑](#cite_ref-”4”_4-0) Lawton, G. (2023). What Is a Transformer Model? TechTarget. [https://www.techtarget.com/searchenterpriseai/definition/transformer-model](https://www.techtarget.com/searchenterpriseai/definition/transformer-model)

5. [↑](#cite_ref-”5”_5-0) Muñoz, E (2020) Attention Is All You Need: Discovering the Transformer Paper. Towards Data Science. [https://towardsdatascience.com/attention-is-all-you-need-discovering-the-transformer-paper-73e5ff5e0634](https://towardsdatascience.com/attention-is-all-you-need-discovering-the-transformer-paper-73e5ff5e0634)