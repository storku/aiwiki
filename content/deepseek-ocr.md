---
title: "DeepSeek-OCR"
slug: "deepseek-ocr"
categories:
  - "Pages_with_reference_errors"
  - "Optical_character_recognition"
  - "Vision-language_models"
  - "Open-source_artificial_intelligence"
  - "Document_processing"
  - "DeepSeek"
  - "Already_Checked"
---[Template:Infobox AI model](/index.php?title=Template:Infobox_AI_model&action=edit&redlink=1)

**DeepSeek‑OCR** is an open‑source end‑to‑end document [OCR](/index.php?title=Optical_character_recognition&action=edit&redlink=1) and layout understanding system released by [DeepSeek](/wiki/deepseek) in October 2025. It introduces a **[contexts optical compression](/index.php?title=Contexts_optical_compression&action=edit&redlink=1)** paradigm that represents long textual content as compact **[vision tokens](/index.php?title=Vision_tokens&action=edit&redlink=1)** and then decodes them back into text using a lightweight decoder.[&#91;1&#93;](#cite_note-deepseek_arxiv-1) The system consists of a purpose‑built [vision encoder](/index.php?title=Vision_encoder&action=edit&redlink=1) (*[DeepEncoder](/index.php?title=DeepEncoder&action=edit&redlink=1)*) and a 3‑billion‑parameter [Mixture‑of‑Experts (MoE)](/wiki/mixture_of_experts) decoder (*DeepSeek‑3B‑MoE‑A570M*). In the accompanying preprint, the authors report ~97% OCR precision at ≈10× vision‑text compression and ~60% at ≈20× on the [Fox](/wiki/fox_benchmark) benchmark, and competitive end‑to‑end performance on [OmniDocBench](/index.php?title=OmniDocBench&action=edit&redlink=1) while using far fewer vision tokens than many baselines.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

The source code and BF16 weights are available on [GitHub](/index.php?title=GitHub&action=edit&redlink=1) and [Hugging Face](/wiki/hugging_face) under the MIT license.[&#91;2&#93;](#cite_note-ds_github-2)[&#91;3&#93;](#cite_note-ds_hf-3)

## Overview

DeepSeek‑OCR frames long‑context handling as an image–text transduction problem: documents are rendered as images and passed through a vision encoder that emits a small set of *vision tokens*, which are then decoded into text (for example Markdown or HTML tables) by the MoE decoder. This approach reduces [token](/index.php?title=Token_(NLP)&action=edit&redlink=1) costs that [transformer](/index.php?title=Transformer_(machine_learning)&action=edit&redlink=1) [LLMs](/wiki/large_language_model) incur for long sequences by leveraging vision as a high‑density “optical compression” medium.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

## History and release

- **20 October 2025 – Initial open‑source release.** Repository, usage examples and modes published; license: MIT.[&#91;2&#93;](#cite_note-ds_github-2)

- **21 October 2025 – Preprint posted.** The arXiv paper “DeepSeek‑OCR: Contexts Optical Compression” describes the method, data, and experiments.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **Weights & model card.** A 3B‑parameter model (BF16 safetensors) with example prompts and environment requirements is hosted on Hugging Face.[&#91;3&#93;](#cite_note-ds_hf-3)

## Architecture

DeepSeek‑OCR is a unified encoder–decoder [VLM](/wiki/vlm) tailored for OCR‑centric compression.

### DeepEncoder (vision side)

DeepEncoder (≈380M parameters) is designed to keep activation memory low at high resolutions while outputting few vision tokens. It chains three components in series:  
1) a window‑attention backbone based on [SAM‑base](/wiki/segment_anything) (~80M params),  
2) a 2‑layer 16× convolutional token compressor (kernel=3, stride=2, padding=1; channels 256→1024), and  
3) a dense global‑attention backbone based on [CLIP](/index.php?title=CLIP&action=edit&redlink=1)‑large (first patch embedding removed since inputs are tokens, not pixels).  

For a 1024×1024 input, 4096 patch tokens are compressed to 256 before global attention, keeping memory usage controlled.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

#### Multi‑resolution modes

To support different compression ratios with a single model, DeepEncoder exposes native and dynamic resolution modes:

| Mode | Native resolution | Avg. vision tokens | Process | Notes |
| --- | --- | --- | --- | --- |
| Tiny | 512 × 512 | 64 | resize | Compact pages |
| Small | 640 × 640 | 100 | resize | Widely used in tests |
| Base | 1024 × 1024 | 256 | padding | Preserves aspect ratio; *valid* tokens < *actual* tokens |
| Large | 1280 × 1280 | 400 | padding | Higher fidelity |
| Gundam (dynamic) | n×640 × 640 (tiles) + 1024 × 1024 (global) | n×100 + 256 (n∈[2,9]) | resize + padding | For ultra‑dense pages (for example newspapers) |

For padded modes, the valid‑token count is approximately:

  
    
      
        
          N
          
            valid
          
        
        =
        
          &#x2308;
          
            
              N
              
                actual
              
            
            &#x22C5;
            
              
                [
              
            
            1
            &#x2212;
            
              
                
                  max
                  (
                  w
                  ,
                  h
                  )
                  &#x2212;
                  min
                  (
                  w
                  ,
                  h
                  )
                
                
                  max
                  (
                  w
                  ,
                  h
                  )
                
              
            
            
              
                ]
              
            
          
          &#x2309;
        
      
    
    {\displaystyle N_{\text{valid}}=\left\lceil N_{\text{actual}}\cdot {\Big [}1-{\frac {\max(w,h)-\min(w,h)}{\max(w,h)}}{\Big ]}\right\rceil }
  
*.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)
### Decoder (language side)

The decoder is DeepSeek‑3B‑MoE‑A570M*, a 3B‑parameter MoE that activates ~570M parameters per token (6 of 64 routed experts + 2 shared experts in inference). It maps compressed vision tokens back to text and leverages the *DeepSeekMoE* designs introduced in [DeepSeek‑V2](/index.php?title=DeepSeek%E2%80%91V2&action=edit&redlink=1) and [DeepSeek‑V3](/index.php?title=DeepSeek%E2%80%91V3&action=edit&redlink=1).[&#91;1&#93;](#cite_note-deepseek_arxiv-1)[&#91;4&#93;](#cite_note-deepseek_v2-4)[&#91;5&#93;](#cite_note-deepseek_v3-5)

## Data and tasks

DeepSeek‑OCR is trained on a mixture of document OCR (“OCR 1.0”), synthetic structure parsing (“OCR 2.0”), general vision data, and text‑only corpora:[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **OCR 1.0 (documents & scenes).** 30M PDF pages (~100 languages; ≈25M Chinese/English + ≈5M others). *Coarse* labels are extracted directly; *fine* labels (~2M pages each for Chinese and English) are built with layout+OCR models (for example PP‑DocLayout and [PaddleOCR](/index.php?title=PaddleOCR&action=edit&redlink=1)/MinerU/GOT‑OCR2.0). Natural‑scene OCR uses [LAION](/index.php?title=LAION&action=edit&redlink=1) and [Wukong](/index.php?title=Wukong&action=edit&redlink=1) images with [PaddleOCR](/index.php?title=PaddleOCR&action=edit&redlink=1) labels (≈10M Chinese + ≈10M English).[&#91;6&#93;](#cite_note-ppdoclayout-6)[&#91;7&#93;](#cite_note-paddleocr-7)[&#91;8&#93;](#cite_note-laion-8)[&#91;9&#93;](#cite_note-wukong-9)[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **OCR 2.0 (structure parsing).** ~10M charts rendered via pyecharts/matplotlib and labeled as HTML tables (cf. [OneChart](/index.php?title=OneChart&action=edit&redlink=1)); ~5M chemical diagrams generated from PubChem [SMILES](/index.php?title=SMILES&action=edit&redlink=1) strings rendered with [RDKit](/index.php?title=RDKit&action=edit&redlink=1); ~1M plane geometry images generated following *Slow Perception*.[&#91;10&#93;](#cite_note-onechart-10)[&#91;11&#93;](#cite_note-rdkit-11)[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **General vision.** Captioning, detection, and grounding data to preserve a general VLM interface (≈20% of total).[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **Text‑only.** ~10% in‑house text‑only pretraining at 8,192 sequence length.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

## Training and inference

Training proceeds in two stages: (1) pretrain DeepEncoder with next‑token prediction; (2) train the full encoder–decoder. The model uses pipeline parallelism (4 stages): SAM+compressor are treated as a frozen “vision tokenizer” (PP0), CLIP‑large acts as an input embedding layer (PP1), and the 3B MoE decoder occupies PP2–PP3. Reported setup: 20 nodes × 8 NVIDIA A100‑40G (DP=40); [AdamW](/index.php?title=AdamW&action=edit&redlink=1) with a step schedule; ~70B multimodal tokens/day throughput.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

On the deployment side, the reference implementation supports [vLLM](/index.php?title=VLLM&action=edit&redlink=1) acceleration and [Transformers](/index.php?title=Transformers_(software)&action=edit&redlink=1) inference (tested with [CUDA](/wiki/cuda) 11.8, [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) 2.6 and [FlashAttention](/index.php?title=FlashAttention&action=edit&redlink=1) 2.7.3). The README provides an example noting “PDF: concurrency ~2,500 tokens/s (A100‑40G)” for the vLLM path (configuration‑dependent).[&#91;2&#93;](#cite_note-ds_github-2)[&#91;3&#93;](#cite_note-ds_hf-3)

## Evaluation

### Compression study (Fox benchmark)

On the English subset of the [Fox](/wiki/fox_benchmark) benchmark (documents with 600–1300 text tokens), the preprint reports decoding precision as a function of compression (*Tiny*=64 tokens; *Small*=100 tokens):[&#91;1&#93;](#cite_note-deepseek_arxiv-1)[&#91;12&#93;](#cite_note-fox-12)

| Text tokens (range) | Precision (64) | Compression (64) | Precision (100) | Compression (100) | Pages |
| --- | --- | --- | --- | --- | --- |
| 600–700 | 96.5% | 10.5× | 98.5% | 6.7× | 7 |
| 700–800 | 93.8% | 11.8× | 97.3% | 7.5× | 28 |
| 800–900 | 83.8% | 13.2× | 96.8% | 8.5× | 28 |
| 900–1000 | 85.9% | 15.1× | 96.8% | 9.7× | 14 |
| 1000–1100 | 79.3% | 16.5× | 91.5% | 10.6× | 11 |
| 1100–1200 | 76.4% | 17.7× | 89.8% | 11.3× | 8 |
| 1200–1300 | 59.1% | 19.7× | 87.1% | 12.6× | 4 |

### OmniDocBench (end‑to‑end document parsing)

On [OmniDocBench](/index.php?title=OmniDocBench&action=edit&redlink=1) (CVPR 2025), DeepSeek‑OCR reports competitive *overall* edit distance while using far fewer vision tokens than most end‑to‑end baselines (lower is better; “Tokens” are average vision tokens/page). Selected rows are reproduced below from the paper:[&#91;1&#93;](#cite_note-deepseek_arxiv-1)[&#91;13&#93;](#cite_note-omnidoc_cvpr-13)

| Model | Tokens (avg.) | Overall (English) | Overall (Chinese) |
| --- | --- | --- | --- |
| Nougat | 2352 | 0.452 | 0.973 |
| SmolDocling | 392 | 0.493 | 0.816 |
| InternVL2‑76B | 6790 | 0.440 | 0.443 |
| Qwen2.5‑VL‑7B | 3949 | 0.316 | 0.399 |
| OLMOCR | 3949 | 0.326 | 0.469 |
| **GOT‑OCR2.0** | 256 | 0.287 | 0.411 |
| dots.ocr | 3949 | 0.182 | 0.261 |
| MinerU‑2.0 | 6790 | 0.133 | 0.115 |
| **DeepSeek‑OCR (Tiny)** | 64 | 0.386 | 0.361 |
| **DeepSeek‑OCR (Small)** | 100 | 0.221 | 0.284 |
| **DeepSeek‑OCR (Base)** | 256 (182 valid) | 0.137 | 0.205 |
| **DeepSeek‑OCR (Large)** | 400 (285 valid) | 0.138 | 0.143 |
| **DeepSeek‑OCR (Gundam)** | 795 | 0.127 | 0.097 |
| **DeepSeek‑OCR (Gundam‑M, 200 dpi)** | 1853 | 0.123 | 0.087 |

#### Category‑specific results (OmniDocBench)

Some document classes require very few tokens (for example slides), whereas dense layouts (for example newspapers) benefit from dynamic “Gundam” modes:[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

| Mode | Book | Slides | Financial report | Textbook | Exam paper | Magazine | Academic papers | Notes | Newspaper | Overall |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tiny | 0.147 | 0.116 | 0.207 | 0.173 | 0.294 | 0.201 | 0.395 | 0.297 | 0.940 | 0.320 |
| Small | 0.085 | 0.111 | 0.079 | 0.147 | 0.171 | 0.107 | 0.131 | 0.187 | 0.744 | 0.205 |
| Base | 0.037 | 0.080 | 0.027 | 0.100 | 0.130 | 0.073 | 0.052 | 0.176 | 0.645 | 0.156 |
| Large | 0.038 | 0.108 | 0.022 | 0.084 | 0.109 | 0.060 | 0.053 | 0.155 | 0.353 | 0.117 |
| Gundam | 0.035 | 0.085 | 0.289 | 0.095 | 0.094 | 0.059 | 0.039 | 0.153 | 0.122 | 0.083 |
| Gundam‑M | 0.052 | 0.090 | 0.034 | 0.091 | 0.079 | 0.079 | 0.048 | 0.100 | 0.099 | 0.077 |

### Throughput and data generation

The preprint highlights that a single A100‑40G can generate **200k+ pages/day**, and that a 20‑node cluster (8×A100‑40G each) reaches **~33 million** pages/day for large‑scale LLM/VLM pretraining data production.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

## Features and capabilities

- **Layout‑aware OCR** with optional detection/structure output (Markdown/HTML) via prompts.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **Deep parsing** Secondary parsing of charts, simple geometric figures, and chemical diagrams embedded in documents (for example chart→HTML table; geometry→structured dict; chemistry→SMILES).[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **Multilingual recognition** Training covers ~100 languages for PDF OCR.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

- **General visual understanding** Retains image captioning, detection, and grounding interfaces for broader VLM research.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

## Installation and usage

The official instructions provide both [vLLM](/index.php?title=VLLM&action=edit&redlink=1) and [Transformers](/index.php?title=Transformers_(software)&action=edit&redlink=1) inference paths. Tested environment notes include Python 3.12.9, [CUDA](/wiki/cuda) 11.8, [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) 2.6.0 and [FlashAttention](/index.php?title=FlashAttention&action=edit&redlink=1) 2.7.3; example prompts cover layout/non‑layout OCR and figure parsing.[&#91;2&#93;](#cite_note-ds_github-2)[&#91;3&#93;](#cite_note-ds_hf-3)

## Research implications

DeepSeek‑OCR empirically studies the mapping from *N* text tokens to the minimum number of vision tokens needed for decoding, supporting the view that near‑lossless ~10× “optical” context compression is feasible for many documents. The paper also outlines a memory‑decay analogy: older conversational history could be rendered at progressively lower resolutions to simulate a “forgetting curve,” trading fidelity for token savings while keeping recent context sharp.[&#91;1&#93;](#cite_note-deepseek_arxiv-1)

## Relation to prior work

DeepSeek‑OCR builds on ideas from encoder–decoder OCR (for example [GOT‑OCR2.0](/index.php?title=GOT%E2%80%91OCR2.0&action=edit&redlink=1)) and high‑resolution VLMs (for example [Qwen‑VL](/index.php?title=Qwen%E2%80%91VL&action=edit&redlink=1)’s [NaViT](/index.php?title=NaViT&action=edit&redlink=1)‑style packing and [InternVL](/index.php?title=InternVL&action=edit&redlink=1) tiling). Its decoder leverages the *DeepSeekMoE* designs introduced in [DeepSeek‑V2](/index.php?title=DeepSeek%E2%80%91V2&action=edit&redlink=1) and [DeepSeek‑V3](/index.php?title=DeepSeek%E2%80%91V3&action=edit&redlink=1).[&#91;14&#93;](#cite_note-got_ocr-14)[&#91;15&#93;](#cite_note-qwen2vl-15)[&#91;16&#93;](#cite_note-internvl2-16)[&#91;4&#93;](#cite_note-deepseek_v2-4)[&#91;5&#93;](#cite_note-deepseek_v3-5)

## See also

- [GOT‑OCR2.0](/index.php?title=GOT%E2%80%91OCR2.0&action=edit&redlink=1)

- [Qwen‑VL](/index.php?title=Qwen%E2%80%91VL&action=edit&redlink=1)

- [InternVL](/index.php?title=InternVL&action=edit&redlink=1)

- [CLIP](/index.php?title=CLIP&action=edit&redlink=1)

- [Segment Anything](/wiki/segment_anything)

- [OmniDocBench](/index.php?title=OmniDocBench&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-deepseek_arxiv_1-0) [1.01](#cite_ref-deepseek_arxiv_1-1) [1.02](#cite_ref-deepseek_arxiv_1-2) [1.03](#cite_ref-deepseek_arxiv_1-3) [1.04](#cite_ref-deepseek_arxiv_1-4) [1.05](#cite_ref-deepseek_arxiv_1-5) [1.06](#cite_ref-deepseek_arxiv_1-6) [1.07](#cite_ref-deepseek_arxiv_1-7) [1.08](#cite_ref-deepseek_arxiv_1-8) [1.09](#cite_ref-deepseek_arxiv_1-9) [1.10](#cite_ref-deepseek_arxiv_1-10) [1.11](#cite_ref-deepseek_arxiv_1-11) [1.12](#cite_ref-deepseek_arxiv_1-12) [1.13](#cite_ref-deepseek_arxiv_1-13) [1.14](#cite_ref-deepseek_arxiv_1-14) [1.15](#cite_ref-deepseek_arxiv_1-15) [1.16](#cite_ref-deepseek_arxiv_1-16) [1.17](#cite_ref-deepseek_arxiv_1-17) [1.18](#cite_ref-deepseek_arxiv_1-18) [1.19](#cite_ref-deepseek_arxiv_1-19) [1.20](#cite_ref-deepseek_arxiv_1-20) [1.21](#cite_ref-deepseek_arxiv_1-21) Wei, H.; Sun, Y.; Li, Y. (2025). “DeepSeek‑OCR: Contexts Optical Compression.” *arXiv* 2510.18234. URL: [https://arxiv.org/abs/2510.18234](https://arxiv.org/abs/2510.18234) .

2. ↑ [2.0](#cite_ref-ds_github_2-0) [2.1](#cite_ref-ds_github_2-1) [2.2](#cite_ref-ds_github_2-2) [2.3](#cite_ref-ds_github_2-3) DeepSeek‑AI (2025). “deepseek‑ai/DeepSeek‑OCR — Contexts Optical Compression (MIT; modes; vLLM/Transformers usage; release notes).” GitHub. URL: [https://github.com/deepseek-ai/DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) .

3. ↑ [3.0](#cite_ref-ds_hf_3-0) [3.1](#cite_ref-ds_hf_3-1) [3.2](#cite_ref-ds_hf_3-2) [3.3](#cite_ref-ds_hf_3-3) DeepSeek‑AI (2025). “deepseek‑ai/DeepSeek‑OCR — Model card (3B params; BF16; usage requirements; modes).” Hugging Face. URL: [https://huggingface.co/deepseek-ai/DeepSeek-OCR](https://huggingface.co/deepseek-ai/DeepSeek-OCR) .

4. ↑ [4.0](#cite_ref-deepseek_v2_4-0) [4.1](#cite_ref-deepseek_v2_4-1) DeepSeek‑AI et al. (2024). “DeepSeek‑V2: A Strong, Economical, and Efficient Mixture‑of‑Experts Language Model.” *arXiv* 2405.04434. URL: [https://arxiv.org/abs/2405.04434](https://arxiv.org/abs/2405.04434) .

5. ↑ [5.0](#cite_ref-deepseek_v3_5-0) [5.1](#cite_ref-deepseek_v3_5-1) DeepSeek‑AI et al. (2024). “DeepSeek‑V3 Technical Report.” *arXiv* 2412.19437. URL: [https://arxiv.org/abs/2412.19437](https://arxiv.org/abs/2412.19437) .

6. [↑](#cite_ref-ppdoclayout_6-0) Sun, T.; Cui, C.; Du, Y.; Liu, Y. (2025). “PP‑DocLayout: A Unified Document Layout Detection Model to Accelerate Large‑Scale Data Construction.” *arXiv* 2503.17213. URL: [https://arxiv.org/abs/2503.17213](https://arxiv.org/abs/2503.17213) .

7. [↑](#cite_ref-paddleocr_7-0) PaddlePaddle Team (2025). “PaddleOCR — GitHub (multilingual OCR toolkit).” URL: [https://github.com/PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) .

8. [↑](#cite_ref-laion_8-0) Schuhmann, C. et al. (2021). “LAION‑400M: Open Dataset of CLIP‑filtered 400 Million Image‑Text Pairs.” *arXiv* 2111.02114. URL: [https://arxiv.org/abs/2111.02114](https://arxiv.org/abs/2111.02114) .

9. [↑](#cite_ref-wukong_9-0) Gu, J. et al. (2022). “Wukong: A 100 Million Large‑scale Chinese Cross‑modal Pre‑training Benchmark.” NeurIPS 2022 Datasets and Benchmarks. URL: [https://proceedings.neurips.cc/paper_files/paper/2022/hash/b8f3537c90f5d7c57e3849b1761f5752-Abstract-Datasets_and_Benchmarks.html](https://proceedings.neurips.cc/paper_files/paper/2022/hash/b8f3537c90f5d7c57e3849b1761f5752-Abstract-Datasets_and_Benchmarks.html) .

10. [↑](#cite_ref-onechart_10-0) Chen, J. et al. (2024). “OneChart: Purify the Chart Structural Extraction via One Auxiliary Token.” ACM MM 2024. URL: [https://dl.acm.org/doi/10.1145/3664647.3680980](https://dl.acm.org/doi/10.1145/3664647.3680980) .

11. [↑](#cite_ref-rdkit_11-0) RDKit (docs). “RDKit: Open‑Source Cheminformatics.” URL: [https://www.rdkit.org/docs/](https://www.rdkit.org/docs/) .

12. [↑](#cite_ref-fox_12-0) Liu, C. et al. (2024). “Focus Anywhere for Fine‑grained Multi‑page Document Understanding (Fox).” *arXiv* 2405.14295. URL: [https://arxiv.org/abs/2405.14295](https://arxiv.org/abs/2405.14295) .

13. [↑](#cite_ref-omnidoc_cvpr_13-0) Ouyang, L. et al. (2025). “OmniDocBench: Benchmarking Diverse PDF Document Parsing with Comprehensive Annotations.” CVPR 2025 (OpenAccess). URL: [https://openaccess.thecvf.com/content/CVPR2025/papers/Ouyang_OmniDocBench_Benchmarking_Diverse_PDF_Document_Parsing_with_Comprehensive_Annotations_CVPR_2025_paper.pdf](https://openaccess.thecvf.com/content/CVPR2025/papers/Ouyang_OmniDocBench_Benchmarking_Diverse_PDF_Document_Parsing_with_Comprehensive_Annotations_CVPR_2025_paper.pdf) .

14. [↑](#cite_ref-got_ocr_14-0) Wei, H. et al. (2024). “General OCR Theory: Towards OCR‑2.0 via a Unified End‑to‑end Model (GOT‑OCR2.0).” *arXiv* 2409.01704. URL: [https://arxiv.org/abs/2409.01704](https://arxiv.org/abs/2409.01704) .

15. [↑](#cite_ref-qwen2vl_15-0) Bai, S. et al. (2024). “Qwen‑VL: Enhancing Vision‑Language Model’s Perception of the World at Any Resolution.” *arXiv* 2409.12191. URL: [https://arxiv.org/abs/2409.12191](https://arxiv.org/abs/2409.12191) .

16. [↑](#cite_ref-internvl2_16-0) Chen, Z. et al. (2024). “How far are we to GPT‑4V? Closing the gap to commercial multimodal models with open‑source suites (InternVL2).” *arXiv* 2404.16821. URL: [https://arxiv.org/abs/2404.16821](https://arxiv.org/abs/2404.16821) .

Cite error: `<ref>` tag defined in `<references>` has no name attribute.

Cite error: `<ref>` tag defined in `<references>` has no name attribute.