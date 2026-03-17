---
title: "NVIDIA DGX Spark"
slug: "nvidia_dgx_spark"
categories:
  - "Pages_with_reference_errors"
  - "NVIDIA_hardware"
  - "Supercomputers"
  - "AI_accelerators"
  - "2025_computer_hardware"
  - "ARM-based_computers"
---[Template:Infobox product](/index.php?title=Template:Infobox_product&action=edit&redlink=1)

[![Nvidia dgx spark1.jpg](/images/thumb/9/94/Nvidia_dgx_spark1.jpg/300px-Nvidia_dgx_spark1.jpg)](/wiki/file_nvidia_dgx_spark1_jpg)

**NVIDIA DGX Spark** is a compact, deskside [AI](/wiki/ai) development system in the [DGX](/index.php?title=DGX&action=edit&redlink=1) product family created by [NVIDIA](/wiki/nvidia). First announced as "Project DIGITS" at [CES](/index.php?title=CES&action=edit&redlink=1) 2025 and officially launched on 15 October 2025, DGX Spark places a Grace Blackwell [Superchip](/index.php?title=Superchip&action=edit&redlink=1)-based AI computer on a desktop, targeting developers, researchers, and students who need local fine-tuning and inference without relying exclusively on the cloud.[&#91;1&#93;](#cite_note-nvidia-press-1)[&#91;2&#93;](#cite_note-verge-gtc-2)

DGX Spark is powered by the GB10 [Grace Blackwell](/index.php?title=Grace_Blackwell&action=edit&redlink=1) Superchip and is specified by NVIDIA for up to one [FP4](/index.php?title=FP4&action=edit&redlink=1) petaFLOP of AI performance (theoretical, using sparsity). It features 128 GB of coherent unified memory, a 4 TB self-encrypting [NVMe](/index.php?title=NVMe&action=edit&redlink=1) M.2 SSD, and a ConnectX-7 NIC that enables low-latency peer-to-peer links between two units. NVIDIA positions Spark for prototyping, local fine-tuning (up to ~70 billion parameters), and inference with models up to ~200 billion parameters.[&#91;3&#93;](#cite_note-nvidia-product-3)[&#91;4&#93;](#cite_note-marketplace-4)

## History

DGX Spark originated as "Project DIGITS," a small form-factor AI computer first announced at [CES](/index.php?title=CES&action=edit&redlink=1) 2025 in January and previewed at [GTC](/index.php?title=GTC&action=edit&redlink=1) 2025 in March. Initially targeted for a May 2025 release, the launch was delayed to October 2025 due to production and supply chain adjustments.[&#91;5&#93;](#cite_note-tomshardware-5) Coverage at the time highlighted a preorder price change from US$3,000 for the concept to US$3,999 for the production unit and the introduction of a larger sibling, DGX Station, based on the GB300 Superchip.[&#91;2&#93;](#cite_note-verge-gtc-2)[&#91;6&#93;](#cite_note-techradar-rename-6)

NVIDIA formally announced that DGX Spark systems would begin shipping the week of 13 October 2025, with sales starting on October 15, 2025. Availability was through NVIDIA.com and retail partners including Micro Center, with OEMs introducing GB10-based alternatives.[&#91;1&#93;](#cite_note-nvidia-press-1)[&#91;7&#93;](#cite_note-engadget-7)

## Design and architecture

### GB10 Grace Blackwell Superchip

DGX Spark uses the NVIDIA GB10 Grace Blackwell Superchip, a [system-on-a-chip](/index.php?title=System-on-a-chip&action=edit&redlink=1) (SoC) manufactured using [TSMC](/index.php?title=TSMC&action=edit&redlink=1)'s 3nm process technology with 208 billion [transistors](/index.php?title=Transistors&action=edit&redlink=1).[&#91;8&#93;](#cite_note-wccftech-8) The chip consists of two dielets in a 2.5D package:

- **S-Dielet**: Contains the [CPU](/index.php?title=CPU&action=edit&redlink=1) and memory subsystem

- **G-Dielet**: Houses the [GPU](/index.php?title=GPU&action=edit&redlink=1)

The superchip integrates a Blackwell-generation GPU and a 20-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) CPU on one package, connected via [NVLink-C2C](/index.php?title=NVLink-C2C&action=edit&redlink=1) at 600 GB/s and sharing a unified LPDDR5x memory pool. [MediaTek](/index.php?title=MediaTek&action=edit&redlink=1) stated it co-designed aspects of the GB10 Superchip used in DGX Spark.[&#91;9&#93;](#cite_note-mediatek-9)

The platform specifications include:

- Up to 1 PFLOP (theoretical) at [FP4](/index.php?title=FP4&action=edit&redlink=1) precision using 5th-generation Tensor Cores

- 31 [TFLOPS](/index.php?title=TFLOPS&action=edit&redlink=1) FP32, 1000 TOPS FP4[&#91;8&#93;](#cite_note-wccftech-8)

- 128 GB coherent unified LPDDR5x memory (256-bit interface, ~273 GB/s bandwidth)[&#91;10&#93;](#cite_note-nvidia-specs-10)

- 4 TB self-encrypting [NVMe](/index.php?title=NVMe&action=edit&redlink=1) M.2 storage in the base configuration[&#91;4&#93;](#cite_note-marketplace-4)

- I/O: 4× [USB-C](/index.php?title=USB-C&action=edit&redlink=1) (one used for power), 1× [HDMI 2.1a](/index.php?title=HDMI_2.1&action=edit&redlink=1), 1× RJ-45 10 GbE, [Wi-Fi 7](/index.php?title=Wi-Fi_7&action=edit&redlink=1), Bluetooth 5.4[&#91;10&#93;](#cite_note-nvidia-specs-10)

- [TDP](/index.php?title=TDP&action=edit&redlink=1): 140W[&#91;8&#93;](#cite_note-wccftech-8)

Independent hands-on reviews have reported the CPU core makeup (10 [Cortex-X925](/index.php?title=Cortex-X925&action=edit&redlink=1) "performance" + 10 [Cortex-A725](/index.php?title=Cortex-A725&action=edit&redlink=1) "efficiency" cores) and confirmed the compact metal enclosure and USB-C power input (external PSU).[&#91;11&#93;](#cite_note-lmsys-review-11)[&#91;12&#93;](#cite_note-willison-12)

### Unified Memory Architecture

The system features 128 GB of LPDDR5x coherent unified memory. This architecture allows both the CPU and GPU to access the same memory pool seamlessly, eliminating the need for data transfers between system [RAM](/index.php?title=RAM&action=edit&redlink=1) and GPU [VRAM](/index.php?title=VRAM&action=edit&redlink=1). This is particularly beneficial for large [AI models](/wiki/ai_model) that exceed the capacity of typical discrete [GPU](/index.php?title=Graphics_processing_unit&action=edit&redlink=1) memory.[&#91;11&#93;](#cite_note-lmsys-review-11)

### Networking and scaling

Spark includes an onboard ConnectX-7 Smart NIC with QSFP ports. NVIDIA's specifications list the NIC at up to 200 Gb/s and enable linking two DGX Spark systems directly; NVIDIA markets this as supporting model execution up to ~405 billion parameters across a two-node setup.[&#91;1&#93;](#cite_note-nvidia-press-1)[&#91;3&#93;](#cite_note-nvidia-product-3)[&#91;13&#93;](#cite_note-pny-pro-13)

## Software

DGX Spark ships with the NVIDIA AI software stack and DGX OS preinstalled, an [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1)-based operating system (Ubuntu 24.04 with Linux 6.11 kernel) optimized for AI workloads.[&#91;14&#93;](#cite_note-canonical-14) The software ecosystem includes:

- [CUDA](/wiki/cuda) libraries and tooling for local development

- [NVIDIA NIM](/index.php?title=NVIDIA_NIM&action=edit&redlink=1) (NVIDIA Inference Microservices)

- [Docker](/index.php?title=Docker&action=edit&redlink=1) and [NVIDIA Container Toolkit](/index.php?title=NVIDIA_Container_Toolkit&action=edit&redlink=1) support

- Access to [NVIDIA NGC](/index.php?title=NVIDIA_NGC&action=edit&redlink=1) catalog for pre-trained models

- Support for standard frameworks like [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [TensorFlow](/wiki/tensorflow), and [JAX](/index.php?title=JAX&action=edit&redlink=1)

- [NVIDIA NeMo](/index.php?title=NVIDIA_NeMo&action=edit&redlink=1) for model fine-tuning

- [NVIDIA RAPIDS](/index.php?title=NVIDIA_RAPIDS&action=edit&redlink=1) libraries for data science

NVIDIA highlights workflows that can migrate to [DGX Cloud](/index.php?title=DGX_Cloud&action=edit&redlink=1) or to larger [NVIDIA](/wiki/nvidia)-accelerated data centers after local prototyping.[&#91;3&#93;](#cite_note-nvidia-product-3)[&#91;1&#93;](#cite_note-nvidia-press-1)

Independent reviewers (LMSYS, Simon Willison) noted that while support was rapidly improving around launch, the broader ARM64 developer ecosystem (for example wheels for certain framework versions) was still maturing, and NVIDIA's official containers and playbooks eased setup for early adopters.[&#91;11&#93;](#cite_note-lmsys-review-11)[&#91;12&#93;](#cite_note-willison-12)

## Target workloads

NVIDIA positions Spark primarily for:

- **[Prototyping](/index.php?title=Prototyping&action=edit&redlink=1)** AI models and applications locally

- **[Fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1)** models up to ~70B parameters

- **[Inference](/wiki/inference)** and evaluation with models up to ~200B parameters in unified memory

- **[Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)** solutions for robotics ([NVIDIA Isaac](/index.php?title=NVIDIA_Isaac&action=edit&redlink=1)), smart cities ([NVIDIA Metropolis](/index.php?title=NVIDIA_Metropolis&action=edit&redlink=1)), and more[&#91;15&#93;](#cite_note-amax-15)

- **[Agentic AI](/index.php?title=Agentic_AI&action=edit&redlink=1)** development: Creating and testing complex AI agents and physical AI applications

- **[Computer vision](/wiki/computer_vision)** development, as demonstrated by early evaluator Roboflow[&#91;16&#93;](#cite_note-roboflow-16)

- **[Data science](/index.php?title=Data_science&action=edit&redlink=1)** and [machine learning](/wiki/machine_learning) workflows

## Specifications

| Category | Detail |
| --- | --- |
| Architecture | Grace Blackwell (GB10 Superchip) |
| Process Node | TSMC 3nm, 208 billion transistors |
| CPU | 20-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) v9.2 CPU (10 [Cortex-X925](/index.php?title=Cortex-X925&action=edit&redlink=1) + 10 [Cortex-A725](/index.php?title=Cortex-A725&action=edit&redlink=1)) |
| CPU Cache | 32 MB L3 cache (16 MB per cluster) |
| GPU | Blackwell-generation GPU with 5th-gen Tensor Cores; 6,144 [CUDA](/wiki/cuda) cores |
| GPU Cache | 24 MB L2 cache |
| AI Performance | Up to 1 PFLOP (theoretical) at [FP4](/index.php?title=FP4&action=edit&redlink=1) with sparsity; 31 TFLOPS FP32 |
| Unified memory | 128 GB LPDDR5x-9400, coherent, unified; ~273 GB/s bandwidth |
| Storage | 4 TB self-encrypting [NVMe](/index.php?title=NVMe&action=edit&redlink=1) M.2 (base config) |
| Networking | 1× RJ-45 10 GbE; ConnectX-7 Smart NIC (QSFP), up to 200 Gb/s |
| Wireless / BT | [Wi-Fi 7](/index.php?title=Wi-Fi_7&action=edit&redlink=1), Bluetooth 5.4 |
| Display / I/O | 1× [HDMI 2.1a](/index.php?title=HDMI_2.1&action=edit&redlink=1); 4× [USB-C](/index.php?title=USB-C&action=edit&redlink=1) (one used for power) |
| Power | 240 W external PSU, USB-C PD input; TDP 140W |
| Dimensions / weight | 150×150×50.5 mm; ~1.2 kg |
| OS | NVIDIA DGX OS (Ubuntu 24.04-based) |

## Relationship with Apache Spark

While the "Spark" in the product's name is primarily a branding term alluding to ignition and creation, the DGX Spark system is fully capable of running accelerated [data analytics](/index.php?title=Data_analytics&action=edit&redlink=1) workloads.

NVIDIA separately develops the [RAPIDS Accelerator for Apache Spark](/index.php?title=RAPIDS_Accelerator_for_Apache_Spark&action=edit&redlink=1), a software plugin that uses [NVIDIA GPUs](/index.php?title=NVIDIA_GPUs&action=edit&redlink=1) to accelerate [Apache Spark](/index.php?title=Apache_Spark&action=edit&redlink=1) pipelines with no code changes.[&#91;17&#93;](#cite_note-spark-rapids-17)[&#91;18&#93;](#cite_note-spark-rapids-docs-18) The DGX Spark hardware supports the [NVIDIA RAPIDS](/index.php?title=NVIDIA_RAPIDS&action=edit&redlink=1) libraries, enabling it to function as a powerful, compact platform for developing and testing these GPU-accelerated [big data](/index.php?title=Big_data&action=edit&redlink=1) workflows.[&#91;15&#93;](#cite_note-amax-15)

## Performance and reception

Early third-party testing characterizes DGX Spark as an excellent developer platform whose strengths are compactness, unified memory capacity, and integrated software, while noting that raw throughput can trail larger discrete-GPU workstations due to LPDDR5x bandwidth limits. LMSYS reported that Spark "shines" for smaller models and batched inference and can run very large models (for example 70B, 120B) for experimentation, but discrete GPUs outpace it on some benchmarks.[&#91;11&#93;](#cite_note-lmsys-review-11) The system's memory bandwidth of 273 GB/s has been compared to competitors like [Apple](/index.php?title=Apple&action=edit&redlink=1)'s [Mac Studio](/index.php?title=Mac_Studio&action=edit&redlink=1), which offers approximately 400 GB/s with the [M4 Max](/index.php?title=Apple_M4&action=edit&redlink=1).[&#91;19&#93;](#cite_note-sltcreative-19)

Micro Center's hands-on similarly framed Spark as ideal for local fine-tuning and iterative development rather than a replacement for high-end training rigs.[&#91;20&#93;](#cite_note-mc-know-20)

Early reviewers have praised the DGX Spark's hardware capabilities while noting that the software ecosystem is still in early development stages.[&#91;12&#93;](#cite_note-willison-12) Broader tech coverage traced the product's evolution from Project Digits and emphasized its role in bringing "personal AI supercomputers" to deskside workflows, with partners preparing GB10-based alternatives.[&#91;2&#93;](#cite_note-verge-gtc-2)[&#91;6&#93;](#cite_note-techradar-rename-6)

Some commentators and community posts have criticized value-for-money relative to other hardware, especially for pure throughput tasks, while acknowledging software polish and developer ergonomics as differentiators.[&#91;21&#93;](#cite_note-pcgamer-21)

## Early evaluators

Early evaluators of the platform included a wide range of companies and research organizations: [Anaconda](/index.php?title=Anaconda_(Python_distribution)&action=edit&redlink=1), Cadence, ComfyUI, Docker, [Google](/index.php?title=Google&action=edit&redlink=1), [Hugging Face](/wiki/hugging_face), JetBrains, LM Studio, [Meta](/index.php?title=Meta_Platforms&action=edit&redlink=1), [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), Ollama, Roboflow, and the NYU Global AI Frontier Lab.[&#91;1&#93;](#cite_note-nvidia-press-1)[&#91;16&#93;](#cite_note-roboflow-16)

## Pricing and availability

The DGX Spark Founder's Edition was listed at US$3,999 on the NVIDIA Marketplace at launch. Channel partners and OEMs announced availability windows in October 2025.[&#91;4&#93;](#cite_note-marketplace-4)[&#91;13&#93;](#cite_note-pny-pro-13)[&#91;1&#93;](#cite_note-nvidia-press-1)

| Region | Price | Notes |
| --- | --- | --- |
| United States | $3,999 USD | MSRP before taxes |
| United Kingdom | £3,700 GBP | Including VAT |
| Germany | €3,689 EUR | Including VAT |
| Japan | ¥899,980 JPY | Retail price |

### Distribution Partners

DGX Spark is available through [NVIDIA](/wiki/nvidia) directly and authorized partners including:

- [Acer](/index.php?title=Acer&action=edit&redlink=1)

- [ASUS](/index.php?title=ASUS&action=edit&redlink=1)

- [Dell Technologies](/index.php?title=Dell_Technologies&action=edit&redlink=1)

- [GIGABYTE](/index.php?title=GIGABYTE&action=edit&redlink=1)

- [HPI](/index.php?title=HP_Inc.&action=edit&redlink=1)

- [Lenovo](/index.php?title=Lenovo&action=edit&redlink=1)

- [MSI](/index.php?title=MSI&action=edit&redlink=1)

- [Micro Center](/index.php?title=Micro_Center&action=edit&redlink=1) (US retail)

- [PNY](/index.php?title=PNY&action=edit&redlink=1) (Europe)

### Partner Systems

Several OEM partners have developed systems based on the GB10 Superchip with similar specifications:[&#91;22&#93;](#cite_note-dell-22)

- **Dell Pro Max with GB10**

- **ASUS Ascent GX10**[&#91;23&#93;](#cite_note-asus-23)

- **Acer Veriton GN100**

## Notable deliveries

[NVIDIA CEO](/index.php?title=NVIDIA_CEO&action=edit&redlink=1) [Jensen Huang](/index.php?title=Jensen_Huang&action=edit&redlink=1) personally delivered the first DGX Spark units to several prominent figures in the AI industry, including:[&#91;24&#93;](#cite_note-techradar-vip-24)

- [Elon Musk](/index.php?title=Elon_Musk&action=edit&redlink=1) at [SpaceX](/index.php?title=SpaceX&action=edit&redlink=1)'s Starbase facility in Texas

- [Sam Altman](/index.php?title=Sam_Altman&action=edit&redlink=1) of [OpenAI](/wiki/openai)

## See also

- [NVIDIA DGX Station](/index.php?title=NVIDIA_DGX_Station&action=edit&redlink=1)

- [DGX Cloud](/index.php?title=DGX_Cloud&action=edit&redlink=1)

- [NVIDIA Blackwell](/wiki/nvidia_blackwell)

- [NVIDIA Grace Hopper Superchip](/index.php?title=NVIDIA_Grace_Hopper_Superchip&action=edit&redlink=1)

- [Unified memory](/index.php?title=Unified_memory&action=edit&redlink=1)

- [ConnectX-7](/index.php?title=ConnectX-7&action=edit&redlink=1)

- [NVLink-C2C](/index.php?title=NVLink-C2C&action=edit&redlink=1)

- [Apache Spark](/index.php?title=Apache_Spark&action=edit&redlink=1)

- [NVIDIA RAPIDS](/index.php?title=NVIDIA_RAPIDS&action=edit&redlink=1)

- [AI accelerator](/index.php?title=AI_accelerator&action=edit&redlink=1)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

## References

1. ↑ [1.0](#cite_ref-nvidia-press_1-0) [1.1](#cite_ref-nvidia-press_1-1) [1.2](#cite_ref-nvidia-press_1-2) [1.3](#cite_ref-nvidia-press_1-3) [1.4](#cite_ref-nvidia-press_1-4) [1.5](#cite_ref-nvidia-press_1-5) NVIDIA Newsroom — "NVIDIA DGX Spark Arrives for World's AI Developers" (Oct 13, 2025). [https://nvidianews.nvidia.com/news/nvidia-dgx-spark-arrives-for-worlds-ai-developers](https://nvidianews.nvidia.com/news/nvidia-dgx-spark-arrives-for-worlds-ai-developers)

2. ↑ [2.0](#cite_ref-verge-gtc_2-0) [2.1](#cite_ref-verge-gtc_2-1) [2.2](#cite_ref-verge-gtc_2-2) The Verge — "Nvidia's 'Digits' AI desktop is coming this summer with a new name and a big brother" (Mar 18, 2025). [https://www.theverge.com/news/631957/nvidia-dgx-spark-station-grace-blackwell-ai-supercomputers-gtc](https://www.theverge.com/news/631957/nvidia-dgx-spark-station-grace-blackwell-ai-supercomputers-gtc) Cite error: Invalid `<ref>` tag; name "verge-gtc" defined multiple times with different content

3. ↑ [3.0](#cite_ref-nvidia-product_3-0) [3.1](#cite_ref-nvidia-product_3-1) [3.2](#cite_ref-nvidia-product_3-2) NVIDIA product page — "NVIDIA DGX Spark: A Grace Blackwell AI supercomputer on your desk." [https://www.nvidia.com/en-us/products/workstations/dgx-spark/](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)

4. ↑ [4.0](#cite_ref-marketplace_4-0) [4.1](#cite_ref-marketplace_4-1) [4.2](#cite_ref-marketplace_4-2) NVIDIA Marketplace — "NVIDIA DGX Spark — 4TB" (price, dimensions). [https://marketplace.nvidia.com/en-us/developer/dgx-spark/](https://marketplace.nvidia.com/en-us/developer/dgx-spark/) Cite error: Invalid `<ref>` tag; name "marketplace" defined multiple times with different content

5. [↑](#cite_ref-tomshardware_5-0) Tom's Hardware — "Nvidia's DGX Spark AI Mini PC Goes Up for Sale October 15" (Oct 2025). [https://www.tomshardware.com/desktops/mini-pcs/nvidias-dgx-spark-ai-mini-pc-goes-up-for-sale-october-15](https://www.tomshardware.com/desktops/mini-pcs/nvidias-dgx-spark-ai-mini-pc-goes-up-for-sale-october-15)

6. ↑ [6.0](#cite_ref-techradar-rename_6-0) [6.1](#cite_ref-techradar-rename_6-1) TechRadar Pro — "Project Digits is now DGX Spark: Nvidia raises its price by 33% …" (Mar 22, 2025). [https://www.techradar.com/pro/project-digits-is-now-dgx-spark-nvidia-raises-its-price-by-33-percent-as-hpe-dell-jump-on-petaflop-mini-ai-bandwagon](https://www.techradar.com/pro/project-digits-is-now-dgx-spark-nvidia-raises-its-price-by-33-percent-as-hpe-dell-jump-on-petaflop-mini-ai-bandwagon)

7. [↑](#cite_ref-engadget_7-0) Engadget — "Nvidia starts selling its $3999 DGX Spark AI developer PC" (Oct 14, 2025). [https://www.engadget.com/ai/nvidia-starts-selling-its-3999-dgx-spark-ai-developer-pc-120034479.html](https://www.engadget.com/ai/nvidia-starts-selling-its-3999-dgx-spark-ai-developer-pc-120034479.html)

8. ↑ [8.0](#cite_ref-wccftech_8-0) [8.1](#cite_ref-wccftech_8-1) [8.2](#cite_ref-wccftech_8-2) WCCFtech — "NVIDIA Dissects Its GB10 Superchip For DGX AI PCs" (Aug 26, 2025). [https://wccftech.com/nvidia-gb10-superchip-soc-3nm-20-arm-v9-2-cpu-cores-nvfp4-blackwell-gpu-lpddr5x-9400-memory-140w-tdp/](https://wccftech.com/nvidia-gb10-superchip-soc-3nm-20-arm-v9-2-cpu-cores-nvfp4-blackwell-gpu-lpddr5x-9400-memory-140w-tdp/)

9. [↑](#cite_ref-mediatek_9-0) MediaTek press release — "Newly-Launched NVIDIA DGX Spark Features GB10 Superchip Co-Designed by MediaTek" (Oct 14, 2025). [https://www.mediatek.com/press-room/newly-launched-nvidia-dgx-spark-features-gb10-superchip-co-designed-by-mediatek](https://www.mediatek.com/press-room/newly-launched-nvidia-dgx-spark-features-gb10-superchip-co-designed-by-mediatek)

10. ↑ [10.0](#cite_ref-nvidia-specs_10-0) [10.1](#cite_ref-nvidia-specs_10-1) NVIDIA DGX Spark page — Specifications section (memory bandwidth, interfaces). [https://www.nvidia.com/en-us/products/workstations/dgx-spark/](https://www.nvidia.com/en-us/products/workstations/dgx-spark/) Cite error: Invalid `<ref>` tag; name "nvidia-specs" defined multiple times with different content

11. ↑ [11.0](#cite_ref-lmsys-review_11-0) [11.1](#cite_ref-lmsys-review_11-1) [11.2](#cite_ref-lmsys-review_11-2) [11.3](#cite_ref-lmsys-review_11-3) LMSYS — "NVIDIA DGX Spark In-Depth Review" (Oct 13, 2025). [https://lmsys.org/blog/2025-10-13-nvidia-dgx-spark/](https://lmsys.org/blog/2025-10-13-nvidia-dgx-spark/) Cite error: Invalid `<ref>` tag; name "lmsys-review" defined multiple times with different content

12. ↑ [12.0](#cite_ref-willison_12-0) [12.1](#cite_ref-willison_12-1) [12.2](#cite_ref-willison_12-2) Simon Willison — "NVIDIA DGX Spark: great hardware, early days for the ecosystem" (Oct 14, 2025). [https://simonwillison.net/2025/Oct/14/nvidia-dgx-spark/](https://simonwillison.net/2025/Oct/14/nvidia-dgx-spark/)

13. ↑ [13.0](#cite_ref-pny-pro_13-0) [13.1](#cite_ref-pny-pro_13-1) PNY Pro (EU) — "NVIDIA DGX Spark AI Supercomputer" (partner product page). [https://www.pny.com/en-eu/dgx-spark](https://www.pny.com/en-eu/dgx-spark) Cite error: Invalid `<ref>` tag; name "pny-pro" defined multiple times with different content

14. [↑](#cite_ref-canonical_14-0) Canonical — "NVIDIA DGX Spark: The developer's personal AI supercomputer built on an Ubuntu base" (Oct 2025). [https://canonical.com/blog/nvidia-dgx-spark-ubuntu-base](https://canonical.com/blog/nvidia-dgx-spark-ubuntu-base)

15. ↑ [15.0](#cite_ref-amax_15-0) [15.1](#cite_ref-amax_15-1) AMAX — "5 Things You Need to Know About NVIDIA DGX Spark" (Jun 17, 2025). [https://www.amax.com/5-things-you-need-to-know-about-nvidia-dgx-spark/](https://www.amax.com/5-things-you-need-to-know-about-nvidia-dgx-spark/)

16. ↑ [16.0](#cite_ref-roboflow_16-0) [16.1](#cite_ref-roboflow_16-1) Roboflow Blog — "NVIDIA DGX Spark: Developing & Testing Vision AI Locally" (Oct 13, 2025). [https://blog.roboflow.com/nvidia-dgx-spark-for-vision-ai/](https://blog.roboflow.com/nvidia-dgx-spark-for-vision-ai/)

17. [↑](#cite_ref-spark-rapids_17-0) NVIDIA — "Apache Spark 3.0: For Analytics & Machine Learning" (2025). [https://www.nvidia.com/en-us/deep-learning-ai/solutions/data-science/apache-spark-3/](https://www.nvidia.com/en-us/deep-learning-ai/solutions/data-science/apache-spark-3/)

18. [↑](#cite_ref-spark-rapids-docs_18-0) NVIDIA on GitHub — "Home | spark-rapids" (2025). [https://nvidia.github.io/spark-rapids/](https://nvidia.github.io/spark-rapids/)

19. [↑](#cite_ref-sltcreative_19-0) SLT Creative — "NVIDIA DGX Spark and DGX Station Redefining AI Computing for 2025" (2025). [https://www.sltcreative.com/nvidia-unveils-dgx-spark-and-dgx-station](https://www.sltcreative.com/nvidia-unveils-dgx-spark-and-dgx-station)

20. [↑](#cite_ref-mc-know_20-0) Micro Center MC News — "NVIDIA DGX Spark: Everything You Need to Know" (Oct 21, 2025). [https://www.microcenter.com/site/mc-news/article/watch-nvidia-dgx-spark.aspx](https://www.microcenter.com/site/mc-news/article/watch-nvidia-dgx-spark.aspx) Cite error: Invalid `<ref>` tag; name "mc-know" defined multiple times with different content

21. [↑](#cite_ref-pcgamer_21-0) PC Gamer — "Nvidia's little gold box of pure AI power, the DGX Spark, is finally out …" (analysis/opinion). [https://www.pcgamer.com/hardware/graphics-cards/nvidias-little-gold-box-of-pure-ai-power-the-dgx-spark-is-finally-out-and-the-comparison-with-amds-much-cheaper-strix-halo-chip-is-looking-a-little-fugly/](https://www.pcgamer.com/hardware/graphics-cards/nvidias-little-gold-box-of-pure-ai-power-the-dgx-spark-is-finally-out-and-the-comparison-with-amds-much-cheaper-strix-halo-chip-is-looking-a-little-fugly/)

22. [↑](#cite_ref-dell_22-0) Dell USA — "Dell Pro Max AI Desktop PCs with NVIDIA Blackwell GPUs" (2025). [https://www.dell.com/en-us/lp/dell-pro-max-nvidia-ai-dev](https://www.dell.com/en-us/lp/dell-pro-max-nvidia-ai-dev)

23. [↑](#cite_ref-asus_23-0) ASUS Pressroom — "ASUS Introduces Ascent GX10 AI Supercomputer" (Mar 18, 2025). [https://press.asus.com/news/press-releases/asus-introduces-ascent-gx-10-ai-supercomputer-powered-by-nvidia-gb-10-grace-blackwell-superchip/](https://press.asus.com/news/press-releases/asus-introduces-ascent-gx-10-ai-supercomputer-powered-by-nvidia-gb-10-grace-blackwell-superchip/)

24. [↑](#cite_ref-techradar-vip_24-0) TechRadar — "Nvidia CEO hand-delivered a DGX Spark to Elon Musk and Sam Altman" (Oct 23, 2025). [https://www.techradar.com/pro/talk-about-vip-service-elon-musk-and-sam-altman-have-their-dgx-spark-mini-pcs-hand-delivered-by-nvidia-ceo-jensen-huang](https://www.techradar.com/pro/talk-about-vip-service-elon-musk-and-sam-altman-have-their-dgx-spark-mini-pcs-hand-delivered-by-nvidia-ceo-jensen-huang)