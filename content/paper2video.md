---
title: "Paper2Video"
slug: "paper2video"
categories:
  - "Articles_with_short_description"
---Short description: Benchmark and multi‑agent system for automatically generating academic presentation videos from scientific papers

[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

[*](/wiki/file_paper2video1_png)

**Paper2Video** (Paper2Video: Automatic Video Generation from Scientific Papers*) is a research project from [Show Lab](/index.php?title=Show_Lab&action=edit&redlink=1) at the [National University of Singapore](/index.php?title=National_University_of_Singapore&action=edit&redlink=1) that formalizes and evaluates automatic generation of academic presentation videos directly from scientific papers. It comprises (1) the **Paper2Video Benchmark**, a curated set of 101 paper–video pairs with slides and speaker metadata, and (2) **[PaperTalker](/index.php?title=PaperTalker&action=edit&redlink=1)**, a [multi‑agent](/index.php?title=Multi%E2%80%91agent&action=edit&redlink=1) framework that turns a paper (plus a reference image and short voice sample) into a narrated presentation video with slides, subtitles, cursor highlights, and an optional talking‑head presenter.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-projpage-2) Code and data are open‑sourced under the MIT license on [GitHub](/index.php?title=GitHub&action=edit&redlink=1) and the benchmark is hosted on [Hugging Face](/wiki/hugging_face).[&#91;3&#93;](#cite_note-github-3)[&#91;4&#93;](#cite_note-hf-dataset-4)

## Terminology and scope

The name **Paper2Video** refers to both the benchmark and the overall project; the video‑generation agent is called **[PaperTalker](/index.php?title=PaperTalker&action=edit&redlink=1)**. The work targets long‑context, multimodal inputs (text, figures, tables) and coordinated outputs across slides, subtitles, speech, cursor motion, and an optional talking head, with evaluation focused on faithfulness, audience comprehension, and author visibility rather than purely natural‑video realism.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;2&#93;](#cite_note-projpage-2)

## History

- **28 September 2025:** The project appears at the Scaling Environments for Agents (SEA) Workshop at [NeurIPS](/index.php?title=NeurIPS&action=edit&redlink=1) 2025 (poster).[&#91;5&#93;](#cite_note-openreview-5)

- **6 October 2025:** arXiv v1 is posted; code and dataset go live.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;3&#93;](#cite_note-github-3)

- **9 October 2025:** arXiv v2 is released with minor revisions; the four metrics (Meta Similarity, PresentArena, PresentQuiz, IP Memory) are included in the work from the first public arXiv version.[&#91;1&#93;](#cite_note-arxiv-1)

- **October 2025:** A “fast” variant (without the talking head) is added to the repository for quicker generation.[&#91;3&#93;](#cite_note-github-3)

## Paper2Video Benchmark

The benchmark pairs recent conference papers with the authors’ presentation videos, original slide decks (when available), and presenter identity metadata. Data sources include public platforms such as YouTube and SlidesLive.[&#91;1&#93;](#cite_note-arxiv-1)

### Composition and statistics

| Item | Value (aggregate) |
| --- | --- |
| Number of paper–video pairs | 101 |
| Average words per paper | ~13.3K |
| Average figures per paper | ~44.7 |
| Average pages per paper | ~28.7 |
| Average slides per presentation | ~16 |
| Average talk duration | ~6 minutes 15 seconds (range: 2–14 minutes) |

*Sources: project page, dataset card, and paper.*[&#91;2&#93;](#cite_note-projpage-2)[&#91;4&#93;](#cite_note-hf-dataset-4)[&#91;1&#93;](#cite_note-arxiv-1)

A domain breakdown reported in the paper is:

| Area | Count (papers) |
| --- | --- |
| Machine learning (for example NeurIPS, ICLR, ICML) | 41 |
| Computer vision (for example CVPR, ICCV, ECCV) | 40 |
| Natural language processing (for example ACL, EMNLP, NAACL) | 20 |

Each instance includes the paper’s full [LaTeX](/index.php?title=LaTeX&action=edit&redlink=1) project, an author‑recorded presentation video (slide and talking‑head streams), and speaker identity (portrait and short voice sample). For ~40% of entries, original slide PDFs are also collected, enabling reference‑based slide evaluation.[&#91;1&#93;](#cite_note-arxiv-1)

## Evaluation metrics

Paper2Video proposes four tailored metrics for academic presentation videos, using [vision‑language models](/index.php?title=Vision%E2%80%91language_model&action=edit&redlink=1) (VLMs) and [VideoLLMs](/index.php?title=Video_large_language_model&action=edit&redlink=1) as automated judges where appropriate.[&#91;1&#93;](#cite_note-arxiv-1)

| Metric | What it measures | How it is operationalized |
| --- | --- | --- |
| **[Meta Similarity](/index.php?title=Meta_Similarity&action=edit&redlink=1)** | Alignment of generated assets with human‑authored ones (slides, subtitles; speech timbre) | A VLM compares generated slide–subtitle pairs to the human versions on a five‑point scale; speech similarity uses embedding cosine similarity on uniformly sampled 10‑second clips.[&#91;1&#93;](#cite_note-arxiv-1) |
| **[PresentArena](/index.php?title=PresentArena&action=edit&redlink=1)** | Overall preference/quality in head‑to‑head comparisons | A VideoLLM performs double‑order pairwise comparisons between generated and human‑made presentation videos; winning rate is the metric (order flipping reduces bias).[&#91;1&#93;](#cite_note-arxiv-1) |
| **[PresentQuiz](/index.php?title=PresentQuiz&action=edit&redlink=1)** | Information coverage and comprehension | Multiple‑choice questions are generated from the source paper; a VideoLLM “watches” the video and answers; overall accuracy is reported.[&#91;1&#93;](#cite_note-arxiv-1) |
| **[IP Memory](/index.php?title=IP_Memory&action=edit&redlink=1)** | Memorability and the audience’s ability to associate authors with their work | A recall task asks a VideoLLM to match brief video clips to a relevant question given a speaker image; accuracy reflects retention/associative memory.[&#91;1&#93;](#cite_note-arxiv-1) |

## System: PaperTalker

PaperTalker is a [multi‑agent](/index.php?title=Multi%E2%80%91agent&action=edit&redlink=1) pipeline that converts a paper into a narrated presentation video. The pipeline is designed to scale slide‑wise in parallel for efficiency.[&#91;1&#93;](#cite_note-arxiv-1)

1. **Slide builder:** synthesizes slides with [LaTeX](/index.php?title=LaTeX&action=edit&redlink=1) (*[Beamer](/index.php?title=Beamer&action=edit&redlink=1)*) and refines layout via a *Tree Search Visual Choice* procedure: rule‑based parameter sweeps (for example figure scaling, font size) render candidates that a VLM scores to pick improved layouts.[&#91;1&#93;](#cite_note-arxiv-1)

2. **Subtitle builder:** uses a VLM to generate sentence‑level subtitles and visual‑focus prompts aligned with slide content.[&#91;1&#93;](#cite_note-arxiv-1)

3. **Cursor builder:** grounds the prompts into synchronized on‑screen cursor coordinates using a GUI/computer‑use grounding model (for example [ShowUI](/index.php?title=ShowUI&action=edit&redlink=1); [UI‑TARS](/index.php?title=UI%E2%80%91TARS&action=edit&redlink=1)) paired with [WhisperX](/index.php?title=WhisperX&action=edit&redlink=1) for word‑level alignment.[&#91;1&#93;](#cite_note-arxiv-1)[&#91;6&#93;](#cite_note-showui-6)[&#91;7&#93;](#cite_note-uitars-7)

4. **Talker builder:** produces a personalized presenter by [text‑to‑speech](/index.php?title=Text%E2%80%91to%E2%80%91speech&action=edit&redlink=1) and talking‑head rendering (for example Hallo2) conditioned on a portrait and short voice sample.[&#91;3&#93;](#cite_note-github-3)[&#91;8&#93;](#cite_note-hallo2-8)

**Implementation notes.** The repository uses the Tectonic [LaTeX](/index.php?title=LaTeX&action=edit&redlink=1) engine for slide compilation and documents configuration for commercial and local VLM/LLM back‑ends. Recommended back‑ends include GPT‑4.1 or Gemini 2.5 Pro (with local [Qwen](/wiki/qwen) variants supported); the minimum recommended GPU for the full pipeline is an NVIDIA A6000 (48 GB). A “light” mode without the talking head is provided, along with example commands for full or fast generation.[&#91;3&#93;](#cite_note-github-3)

## Results and findings

On automated metrics, PaperTalker reports the strongest performance among automatic baselines on the Paper2Video Benchmark; human‑made videos remain top‑rated in user studies, with PaperTalker ranking second and ahead of other automatic methods.[&#91;1&#93;](#cite_note-arxiv-1)

*Ablations (cursor highlighting).* A localization QA shows a large gain from explicit cursor guidance:

| Method/variant | Accuracy |
| --- | --- |
| PaperTalker (without cursor) | 0.084 |
| PaperTalker (with cursor) | 0.633 |

Source: paper (Table 4).[&#91;1&#93;](#cite_note-arxiv-1)

*Runtime snapshot (per paper, representative setting).*

| Method | Time (min) | Notes |
| --- | --- | --- |
| PaperTalker (full) | 48.1 | Includes talking head |
| PaperTalker (without talker) | 15.6 | “Fast” variant |
| PaperTalker (without parallelization) | 287.2 | For comparison |

Slide‑wise parallelization yields over 6× speed‑up versus sequential generation in the agentic pipeline.[&#91;1&#93;](#cite_note-arxiv-1)

## Availability and licensing

- **Code:** MIT‑licensed on [GitHub](/index.php?title=GitHub&action=edit&redlink=1) (showlab/Paper2Video).[&#91;3&#93;](#cite_note-github-3)

- **Dataset:** hosted on [Hugging Face](/wiki/hugging_face) (ZaynZhu/Paper2Video).[&#91;4&#93;](#cite_note-hf-dataset-4)

- **Project page:** demos, examples, and metric descriptions.[&#91;2&#93;](#cite_note-projpage-2)

## Relation to prior work

Paper2Video contrasts with adjacent efforts in document‑to‑media automation and evaluation:

- **Paper2Poster** focuses on paper‑to‑poster generation and evaluation (with a PaperQuiz metric for poster comprehension).[&#91;9&#93;](#cite_note-p2poster-9)

- **PPTAgent** targets document‑to‑slides workflows and introduces PPTEval (content/design/coherence).[&#91;10&#93;](#cite_note-pptagent-10)

- **PresentAgent** aims at presentation‑video generation from documents but (as discussed in Paper2Video) lacks personalization and academic‑style slide structure compared to PaperTalker.[&#91;11&#93;](#cite_note-presentagent-11)

## See also

- [PaperTalker](/index.php?title=PaperTalker&action=edit&redlink=1)

- [Paper2Poster](/index.php?title=Paper2Poster&action=edit&redlink=1)

- [PPTAgent](/index.php?title=PPTAgent&action=edit&redlink=1)

- [PresentAgent](/index.php?title=PresentAgent&action=edit&redlink=1)

- [Vision‑language model](/index.php?title=Vision%E2%80%91language_model&action=edit&redlink=1)

- [Video large language model](/index.php?title=Video_large_language_model&action=edit&redlink=1)

- [LaTeX](/index.php?title=LaTeX&action=edit&redlink=1)

- [Beamer](/index.php?title=Beamer&action=edit&redlink=1)

- [Text‑to‑speech](/index.php?title=Text%E2%80%91to%E2%80%91speech&action=edit&redlink=1)

- [OpenReview](/index.php?title=OpenReview&action=edit&redlink=1)

- [Hugging Face](/wiki/hugging_face)

- [GitHub](/index.php?title=GitHub&action=edit&redlink=1)

- [arXiv](/index.php?title=ArXiv&action=edit&redlink=1)

- [NeurIPS](/index.php?title=NeurIPS&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-arxiv_1-0) [1.01](#cite_ref-arxiv_1-1) [1.02](#cite_ref-arxiv_1-2) [1.03](#cite_ref-arxiv_1-3) [1.04](#cite_ref-arxiv_1-4) [1.05](#cite_ref-arxiv_1-5) [1.06](#cite_ref-arxiv_1-6) [1.07](#cite_ref-arxiv_1-7) [1.08](#cite_ref-arxiv_1-8) [1.09](#cite_ref-arxiv_1-9) [1.10](#cite_ref-arxiv_1-10) [1.11](#cite_ref-arxiv_1-11) [1.12](#cite_ref-arxiv_1-12) [1.13](#cite_ref-arxiv_1-13) [1.14](#cite_ref-arxiv_1-14) [1.15](#cite_ref-arxiv_1-15) [1.16](#cite_ref-arxiv_1-16) [1.17](#cite_ref-arxiv_1-17) [1.18](#cite_ref-arxiv_1-18) Z. Zhu; K. Q. Lin; M. Z. Shou (2025). “Paper2Video: Automatic Video Generation from Scientific Papers.” *arXiv* (v1: 6 Oct 2025; v2: 9 Oct 2025). URL: [https://arxiv.org/abs/2510.05096](https://arxiv.org/abs/2510.05096)

2. ↑ [2.0](#cite_ref-projpage_2-0) [2.1](#cite_ref-projpage_2-1) [2.2](#cite_ref-projpage_2-2) [2.3](#cite_ref-projpage_2-3) Show Lab (2025). “Paper2Video — Automatic Video Generation from Scientific Papers (project page).” URL: [https://showlab.github.io/Paper2Video/](https://showlab.github.io/Paper2Video/)

3. ↑ [3.0](#cite_ref-github_3-0) [3.1](#cite_ref-github_3-1) [3.2](#cite_ref-github_3-2) [3.3](#cite_ref-github_3-3) [3.4](#cite_ref-github_3-4) [3.5](#cite_ref-github_3-5) Show Lab (2025). “showlab/Paper2Video — README (usage, GPU guidance, fast variant).” URL: [https://github.com/showlab/Paper2Video](https://github.com/showlab/Paper2Video)

4. ↑ [4.0](#cite_ref-hf-dataset_4-0) [4.1](#cite_ref-hf-dataset_4-1) [4.2](#cite_ref-hf-dataset_4-2) Hugging Face (2025). “ZaynZhu/Paper2Video — benchmark dataset card (statistics and license).” URL: [https://huggingface.co/datasets/ZaynZhu/Paper2Video](https://huggingface.co/datasets/ZaynZhu/Paper2Video)

5. [↑](#cite_ref-openreview_5-0) OpenReview (2025). “Paper2Video: Automatic Video Generation from Scientific Papers” (SEA @ NeurIPS 2025 poster). PDF URL: [https://openreview.net/pdf/65264f07a1b00458a48875a419f9d564fa779dd7.pdf](https://openreview.net/pdf/65264f07a1b00458a48875a419f9d564fa779dd7.pdf)

6. [↑](#cite_ref-showui_6-0) K. Q. Lin; L. Li; D. Gao; Z. Yang; S. Wu; Z. Bai; W. X. Lei; L. Wang; M. Z. Shou (2024). “ShowUI: One Vision‑Language‑Action Model for GUI Visual Agent.” *arXiv*. URL: [https://arxiv.org/abs/2411.17465](https://arxiv.org/abs/2411.17465)

7. [↑](#cite_ref-uitars_7-0) Y. Qin; Y. Ye; J. Fang; H. Wang; S. Liang; J. Zhang; J. Li; Y. Li; S. Huang; et al. (2025). “UI‑TARS: Pioneering Automated GUI Interaction with Native Agents.” *arXiv*. URL: [https://arxiv.org/abs/2501.12326](https://arxiv.org/abs/2501.12326)

8. [↑](#cite_ref-hallo2_8-0) Fudan Generative Vision (2025). “Hallo2: Long‑Duration and High‑Resolution Audio‑driven Portrait Animation” (repository/website). URLs: [https://github.com/fudan-generative-vision/hallo2](https://github.com/fudan-generative-vision/hallo2) and [https://fudan-generative-vision.github.io/hallo2/](https://fudan-generative-vision.github.io/hallo2/)

9. [↑](#cite_ref-p2poster_9-0) W. Pang; K. Q. Lin; X. Jian; X. He; P. H. S. Torr (2025). “Paper2Poster: Towards Multimodal Poster Automation from Scientific Papers.” *arXiv*. URL: [https://arxiv.org/abs/2505.21497](https://arxiv.org/abs/2505.21497)

10. [↑](#cite_ref-pptagent_10-0) H. Zheng; X. Guan; H. Kong; J. Zheng; H. Lin; Y. Lu; B. He; X. Han; L. Sun (2025). “PPTAgent: Generating and Evaluating Presentations Beyond Text‑to‑Slides.” *arXiv*. URL: [https://arxiv.org/abs/2501.03936](https://arxiv.org/abs/2501.03936)

11. [↑](#cite_ref-presentagent_11-0) J. Shi; Z. Zhang; B. Wu; Y. Liang; M. Fang; L. Chen; Y. Zhao (2025). “PresentAgent: Multimodal Agent for Presentation Video Generation.” *arXiv*. URL: [https://arxiv.org/abs/2507.04036](https://arxiv.org/abs/2507.04036)