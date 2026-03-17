---
title: "Hallucination"
slug: "hallucination"
categories:
  - "Artificial_intelligence"
  - "Generative_artificial_intelligence"
  - "AI_safety"
  - "Natural_language_processing"
  - "Large_language_models"
---[Template:Infobox computing](/index.php?title=Template:Infobox_computing&action=edit&redlink=1)

**Hallucination** in [artificial intelligence](/wiki/artificial_intelligence) (AI) refers to outputs produced by [generative models](/index.php?title=Generative_artificial_intelligence&action=edit&redlink=1) that are fluent and plausible but not supported by the source, input, or external reality. In [large language model](/wiki/large_language_model) (LLM) systems and [multimodal](/index.php?title=Multimodal&action=edit&redlink=1) models, hallucinations include fabricated facts, incorrect citations, or contradictions to provided context. Research distinguishes between *faithfulness* errors to a given input and *factuality* errors with respect to world knowledge, and documents that hallucination is prevalent across tasks such as [abstractive summarization](/index.php?title=Abstractive_summarization&action=edit&redlink=1), [question answering](/index.php?title=Question_answering&action=edit&redlink=1), dialogue, and vision–language reasoning.[&#91;1&#93;](#cite_note-Ji2023-1)[&#91;2&#93;](#cite_note-Maynez2020-2)[&#91;3&#93;](#cite_note-TruthfulQA-3)[&#91;4&#93;](#cite_note-Bai2024-4)

While rates depend on model, data, and task, a common view is that hallucinations remain **persistent and difficult to fully eliminate** in current [probabilistic](/index.php?title=Probabilistic&action=edit&redlink=1) next-token prediction systems. They can be mitigated via grounding (for example [RAG](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)), training and decoding choices, post-hoc detection, and better evaluation protocols.[&#91;5&#93;](#cite_note-Lewis2020-5)[&#91;6&#93;](#cite_note-Ouyang2022-6)[&#91;7&#93;](#cite_note-SelfCheckGPT-7)[&#91;8&#93;](#cite_note-Farquhar2024-8)[&#91;1&#93;](#cite_note-Ji2023-1)

## Terminology and definitions

- **Hallucination** (general): generation of content that is not supported by the source or reality, despite surface-level coherence. The term draws on psychology but in AI denotes a technical failure mode rather than a human-like perceptual phenomenon.[&#91;1&#93;](#cite_note-Ji2023-1)

- **Faithfulness vs. factuality**: *Faithfulness* evaluates consistency with the *given input* (for example a source article), while *factuality* evaluates agreement with *established external facts*; a model can be faithful yet factually wrong if the input itself is wrong, or unfaithful (adding unsupported details) while remaining factually plausible.[&#91;2&#93;](#cite_note-Maynez2020-2)[&#91;1&#93;](#cite_note-Ji2023-1)

- **Intrinsic vs. extrinsic hallucinations**: Intrinsic (*input-contradicting*) errors conflict with the source; extrinsic (*unsupported*) errors introduce unverifiable or new content not grounded in the source.[&#91;1&#93;](#cite_note-Ji2023-1)

## Taxonomy

Surveys and position papers propose overlapping taxonomies along *what* goes wrong and *why* it goes wrong.[&#91;1&#93;](#cite_note-Ji2023-1)[&#91;9&#93;](#cite_note-Huang2023-9)[&#91;4&#93;](#cite_note-Bai2024-4)

### By manifestation (what goes wrong)

- **Entity/content fabrication** (invented names, dates, citations).[&#91;1&#93;](#cite_note-Ji2023-1)

- **Logical inconsistency** (self-contradiction, faulty reasoning).[&#91;9&#93;](#cite_note-Huang2023-9)

- **Numerical/temporal errors** (miscalculation, wrong units or times).[&#91;1&#93;](#cite_note-Ji2023-1)

- **Attribution/citation errors** (fabricated sources or misattributions).[&#91;1&#93;](#cite_note-Ji2023-1)

- **Multimodal misalignment** (text describes objects not present in the image/video).[&#91;4&#93;](#cite_note-Bai2024-4)

### By cause (why it goes wrong)

- **Parametric knowledge gaps** in the model’s weights (out-of-date or missing facts).[&#91;9&#93;](#cite_note-Huang2023-9)

- **Training data issues** (noise, spurious correlations, reporting bias).[&#91;1&#93;](#cite_note-Ji2023-1)

- **Objective and decoding effects** (likelihood-only training; sampling strategies that favor fluency over truthfulness).[&#91;2&#93;](#cite_note-Maynez2020-2)[&#91;9&#93;](#cite_note-Huang2023-9)

- **Context handling limits** (failure to use provided context; retrieval errors).[&#91;5&#93;](#cite_note-Lewis2020-5)

- **Multimodal fusion failures** (over-reliance on language priors vs. visual evidence).[&#91;4&#93;](#cite_note-Bai2024-4)

## Examples by task (illustrative)

| Task | Typical input | Hallucination example | Primary type |
| --- | --- | --- | --- |
| [Abstractive summarization](/index.php?title=Abstractive_summarization&action=edit&redlink=1) | News article | Adds a quote not present in the article | Extrinsic, attribution[&#91;2&#93;](#cite_note-Maynez2020-2) |
| [Question answering](/index.php?title=Question_answering&action=edit&redlink=1) | Open-domain question | Confident but false answer to a factual question | Factuality[&#91;3&#93;](#cite_note-TruthfulQA-3) |
| Dialogue | User prompt | Fabricated API calls, sources, or policies | Fabrication[&#91;1&#93;](#cite_note-Ji2023-1) |
| [Computer vision](/wiki/computer_vision) + language | Image | Mentions an object absent from the image | Multimodal misalignment[&#91;4&#93;](#cite_note-Bai2024-4) |

## Measurement and evaluation

Researchers evaluate hallucination with specialized [benchmarks](/index.php?title=Benchmark_(computing)&action=edit&redlink=1) and metrics:

- **TruthfulQA**: evaluates whether models avoid widely held misconceptions; many models mimic human falsehoods without explicit grounding.[&#91;3&#93;](#cite_note-TruthfulQA-3)

- **Human faithfulness annotation**: in summarization, human studies reveal substantial hallucinated content across neural systems, highlighting the gap between ROUGE and factuality.[&#91;2&#93;](#cite_note-Maynez2020-2)

- **Surveys and taxonomies** compile intrinsic/extrinsic error rates and categorize metrics (for example entailment-based, QA-based, citation-/evidence-based).[&#91;1&#93;](#cite_note-Ji2023-1)[&#91;9&#93;](#cite_note-Huang2023-9)

**Automatic detection.** Methods include:

| Family | Example/Representative work | Evidence required | Notes |
| --- | --- | --- | --- |
| Consistency-based | SelfCheckGPT | No (uses multiple generations) | Flags sentences that vary across samples as likely hallucinated.[&#91;7&#93;](#cite_note-SelfCheckGPT-7) |
| Retrieval-verification | RAG + verifier | Yes (documents) | Cross-checks output against retrieved passages; supports provenance.[&#91;5&#93;](#cite_note-Lewis2020-5) |
| Semantic-uncertainty | Semantic entropy | No (uses distributional signals) | Estimates uncertainty in *meaning* space to detect confabulations.[&#91;8&#93;](#cite_note-Farquhar2024-8) |
| NLI/entailment scoring | Claim vs. source | Optional | Scores faithfulness to context; common in summarization evaluation.[&#91;2&#93;](#cite_note-Maynez2020-2) |

## Mitigation strategies

Multiple, complementary strategies are used in production systems:

- **Grounding via [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1) (RAG)**: Retrieve relevant documents and condition generation on them; improves factuality and enables citation to sources when implemented with evidence tracing.[&#91;5&#93;](#cite_note-Lewis2020-5)

- **Instruction tuning and [Reinforcement learning from human feedback](/wiki/reinforcement_learning_from_human_feedback) (RLHF)**: Aligns models to prefer helpful, harmless, and, importantly, more accurate outputs relative to base models on instruction-following tasks, reducing some classes of hallucinations though not eliminating them.[&#91;6&#93;](#cite_note-Ouyang2022-6)

- **Constrained generation and safer decoding**: for example conservative nucleus sampling, beam search with reranking, and citation-required prompts to bias toward verifiable content.[&#91;9&#93;](#cite_note-Huang2023-9)

- **Detection-and-edit pipelines**: Post-generation verifiers (consistency checks, entailment, retrieval-backed fact checkers) to edit or block ungrounded claims.[&#91;7&#93;](#cite_note-SelfCheckGPT-7)[&#91;8&#93;](#cite_note-Farquhar2024-8)

- **Task and UI design**: Encourage models to indicate uncertainty, request clarification, or provide sources, and route high-stakes queries to [information retrieval](/index.php?title=Information_retrieval&action=edit&redlink=1) or tools (calculators, code execution) instead of free-form text generation.[&#91;9&#93;](#cite_note-Huang2023-9)[&#91;5&#93;](#cite_note-Lewis2020-5)

## Limitations and open problems

Surveys emphasize that (1) likelihood-based training does not directly optimize truth, (2) benchmarks incompletely cover real-world claims, (3) detection methods can miss subtle errors or over-flag creative content, and (4) multimodal models have additional failure modes from visual prior bias and imperfect perception.[&#91;1&#93;](#cite_note-Ji2023-1)[&#91;9&#93;](#cite_note-Huang2023-9)[&#91;4&#93;](#cite_note-Bai2024-4)

## Etymology and public reception

The term *hallucination* had positive/technical uses in early [computer vision](/wiki/computer_vision) (for example “face hallucination”) but shifted by the late 2010s to a negative connotation for factually incorrect outputs (for example in [neural machine translation](/index.php?title=Neural_machine_translation&action=edit&redlink=1) and vision under adversarial perturbations).[&#91;10&#93;](#cite_note-Baker2000-10)[&#91;11&#93;](#cite_note-Kreutzer2018-11)[&#91;9&#93;](#cite_note-Huang2023-9)[&#91;4&#93;](#cite_note-Bai2024-4) Reflecting widespread concern, **Cambridge Dictionary** selected “hallucinate” (the AI sense) as its 2023 Word of the Year.[&#91;12&#93;](#cite_note-CambridgeWOTY-12)

## Notable incidents

| Year | System/Domain | Description | Source |
| --- | --- | --- | --- |
| 2023 | Google Bard (now [Gemini](/index.php?title=Gemini_(chatbot)&action=edit&redlink=1)) | In a promotional demo, Bard gave an inaccurate claim about the [James Webb Space Telescope](/index.php?title=James_Webb_Space_Telescope&action=edit&redlink=1); **Alphabet** shares fell sharply following coverage. | [&#91;13&#93;](#cite_note-ReutersBard-13) |
| 2023 | Legal practice (*Mata v. Avianca*) | U.S. federal court sanctioned attorneys for filing a brief with fabricated case citations produced by a chatbot. | [&#91;14&#93;](#cite_note-NYTlawyer-14) |
| 2024 | Airline customer service (Air Canada) | B.C. Civil Resolution Tribunal held the airline liable for negligent misrepresentation after its website chatbot provided incorrect refund advice; tribunal ordered compensation (C$650.88 plus interest and fees). | [&#91;15&#93;](#cite_note-AirCanada-15) |

## Multimodal models

[Multimodal](/index.php?title=Multimodal&action=edit&redlink=1) and vision-language systems exhibit additional failure modes, including object hallucination and caption–image mismatch. A dedicated survey catalogs causes (language-prior dominance, weak grounding), evaluations, and mitigations in [multimodal](/index.php?title=Multimodal&action=edit&redlink=1) LLMs.[&#91;4&#93;](#cite_note-Bai2024-4)

## See also

- [Large language model](/wiki/large_language_model)

- [Generative artificial intelligence](/index.php?title=Generative_artificial_intelligence&action=edit&redlink=1)

- [Retrieval-augmented generation](/index.php?title=Retrieval-augmented_generation&action=edit&redlink=1)

- [Prompt engineering](/wiki/prompt_engineering)

- [Natural language generation](/index.php?title=Natural_language_generation&action=edit&redlink=1)

- [Evaluation](/index.php?title=Evaluation&action=edit&redlink=1)

- [Truthfulness](/index.php?title=Truthfulness&action=edit&redlink=1)

- [Bias](/index.php?title=Bias_(AI)&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-Ji2023_1-0) [1.01](#cite_ref-Ji2023_1-1) [1.02](#cite_ref-Ji2023_1-2) [1.03](#cite_ref-Ji2023_1-3) [1.04](#cite_ref-Ji2023_1-4) [1.05](#cite_ref-Ji2023_1-5) [1.06](#cite_ref-Ji2023_1-6) [1.07](#cite_ref-Ji2023_1-7) [1.08](#cite_ref-Ji2023_1-8) [1.09](#cite_ref-Ji2023_1-9) [1.10](#cite_ref-Ji2023_1-10) [1.11](#cite_ref-Ji2023_1-11) [1.12](#cite_ref-Ji2023_1-12) Ziwei Ji, Nayeon Lee, Rita Frieske, Tiezheng Yu, Dan Su, Yan Xu, Etsuko Ishii, Yejin Bang, Delong Chen, Wenliang Dai, Ho Shu Chan, Andrea Madotto, Pascale Fung (2023). "Survey of Hallucination in Natural Language Generation." *ACM Computing Surveys* 55(12). doi:10.1145/3571730. Preprint: [https://arxiv.org/abs/2202.03629](https://arxiv.org/abs/2202.03629) .

2. ↑ [2.0](#cite_ref-Maynez2020_2-0) [2.1](#cite_ref-Maynez2020_2-1) [2.2](#cite_ref-Maynez2020_2-2) [2.3](#cite_ref-Maynez2020_2-3) [2.4](#cite_ref-Maynez2020_2-4) [2.5](#cite_ref-Maynez2020_2-5) Joshua Maynez, Shashi Narayan, Bernd Bohnet, Ryan McDonald (2020). "On Faithfulness and Factuality in Abstractive Summarization." *ACL 2020*. [https://aclanthology.org/2020.acl-main.173/](https://aclanthology.org/2020.acl-main.173/) ; preprint: [https://arxiv.org/abs/2005.00661](https://arxiv.org/abs/2005.00661) .

3. ↑ [3.0](#cite_ref-TruthfulQA_3-0) [3.1](#cite_ref-TruthfulQA_3-1) [3.2](#cite_ref-TruthfulQA_3-2) Stephanie Lin, Jacob Hilton, Owain Evans (2022). "TruthfulQA: Measuring How Models Mimic Human Falsehoods." *ACL 2022*. [https://aclanthology.org/2022.acl-long.229/](https://aclanthology.org/2022.acl-long.229/) ; preprint: [https://arxiv.org/abs/2109.07958](https://arxiv.org/abs/2109.07958) .

4. ↑ [4.0](#cite_ref-Bai2024_4-0) [4.1](#cite_ref-Bai2024_4-1) [4.2](#cite_ref-Bai2024_4-2) [4.3](#cite_ref-Bai2024_4-3) [4.4](#cite_ref-Bai2024_4-4) [4.5](#cite_ref-Bai2024_4-5) [4.6](#cite_ref-Bai2024_4-6) [4.7](#cite_ref-Bai2024_4-7) Zechen Bai, Pichao Wang, Tianjun Xiao, Tong He, Zongbo Han, Zheng Zhang, Mike Zheng Shou (2024). "Hallucination of Multimodal Large Language Models: A Survey." arXiv:2404.18930. [https://arxiv.org/abs/2404.18930](https://arxiv.org/abs/2404.18930) .

5. ↑ [5.0](#cite_ref-Lewis2020_5-0) [5.1](#cite_ref-Lewis2020_5-1) [5.2](#cite_ref-Lewis2020_5-2) [5.3](#cite_ref-Lewis2020_5-3) [5.4](#cite_ref-Lewis2020_5-4) Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP." *NeurIPS 2020*. [https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf](https://proceedings.neurips.cc/paper/2020/file/6b493230205f780e1bc26945df7481e5-Paper.pdf) ; preprint: [https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401) .

6. ↑ [6.0](#cite_ref-Ouyang2022_6-0) [6.1](#cite_ref-Ouyang2022_6-1) Long Ouyang, Jeff Wu, et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 2022*. [https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf](https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf) ; preprint: [https://arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155) .

7. ↑ [7.0](#cite_ref-SelfCheckGPT_7-0) [7.1](#cite_ref-SelfCheckGPT_7-1) [7.2](#cite_ref-SelfCheckGPT_7-2) Potsawee Manakul, Adian Liusie, Mark J. F. Gales (2023). "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Generative Large Language Models." *EMNLP 2023*. [https://aclanthology.org/2023.emnlp-main.557.pdf](https://aclanthology.org/2023.emnlp-main.557.pdf) ; preprint: [https://arxiv.org/abs/2303.08896](https://arxiv.org/abs/2303.08896) .

8. ↑ [8.0](#cite_ref-Farquhar2024_8-0) [8.1](#cite_ref-Farquhar2024_8-1) [8.2](#cite_ref-Farquhar2024_8-2) Sebastian Farquhar, Jannik Kossen, et al. (2024). "Detecting hallucinations in large language models using semantic entropy." *Nature*. [https://www.nature.com/articles/s41586-024-07421-0](https://www.nature.com/articles/s41586-024-07421-0) .

9. ↑ [9.0](#cite_ref-Huang2023_9-0) [9.1](#cite_ref-Huang2023_9-1) [9.2](#cite_ref-Huang2023_9-2) [9.3](#cite_ref-Huang2023_9-3) [9.4](#cite_ref-Huang2023_9-4) [9.5](#cite_ref-Huang2023_9-5) [9.6](#cite_ref-Huang2023_9-6) [9.7](#cite_ref-Huang2023_9-7) [9.8](#cite_ref-Huang2023_9-8) **Lei** Huang, Weijiang Yu, Weitao Ma, Weihong Zhong, Zhangyin Feng, Haotian Wang, Qianglong Chen, Weihua Peng, Xiaocheng Feng, Bing Qin, Ting Liu (2023). "A Survey on Hallucination in Large Language Models: Principles, Taxonomy, Challenges, and Open Questions." arXiv:2311.05232. [https://arxiv.org/abs/2311.05232](https://arxiv.org/abs/2311.05232) . (Extended journal version: *ACM TOIS* (2024), doi:10.1145/3703155.)

10. [↑](#cite_ref-Baker2000_10-0) Simon Baker, Takeo Kanade (2000). "Hallucinating Faces." *IEEE International Conference on Automatic Face and Gesture Recognition*. [https://ieeexplore.ieee.org/document/840611](https://ieeexplore.ieee.org/document/840611) .

11. [↑](#cite_ref-Kreutzer2018_11-0) Julia Kreutzer, Joost Bastings, Stefan Riezler (2018). "Can Neural Machine Translation be Improved with User Feedback?" and related work discussing "hallucinations"; see also *A Case Study on Hallucination in NMT* (various 2018–2019 workshop papers). arXiv:1804.05958 ; arXiv:1811.05201.

12. [↑](#cite_ref-CambridgeWOTY_12-0) Cambridge Dictionary (2023). "‘Hallucinate’ is Cambridge Dictionary’s Word of the Year 2023." [https://dictionary.cambridge.org/editorial/word-of-the-year/2023](https://dictionary.cambridge.org/editorial/word-of-the-year/2023) .

13. [↑](#cite_ref-ReutersBard_13-0) Reuters (Feb 8–9, 2023). "Alphabet shares dive after Google AI chatbot Bard flubs answer in ad." [https://www.reuters.com/technology/google-ai-chatbot-bard-offers-inaccurate-information-company-ad-2023-02-08/](https://www.reuters.com/technology/google-ai-chatbot-bard-offers-inaccurate-information-company-ad-2023-02-08/) .

14. [↑](#cite_ref-NYTlawyer_14-0) The New York Times / Reuters coverage (May–June 2023). "Here’s What Happens When Your Lawyer Uses ChatGPT" / "New York lawyers sanctioned for using fake ChatGPT cases." NYT 2023-05-27; Reuters 2023-06-22. [https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html) ; [https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/](https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/) .

15. [↑](#cite_ref-AirCanada_15-0) British Columbia Civil Resolution Tribunal (2024). *Moffatt v. Air Canada* (2024 BCCRT 149) and press coverage. Decision via CanLII: [https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html) ; analysis: American Bar Association (2024-02-29). [https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/) .