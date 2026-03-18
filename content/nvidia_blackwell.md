---
title: "NVIDIA Blackwell"
slug: "nvidia_blackwell"
categories:
  - "NVIDIA_microarchitectures"
  - "Graphics_processing_units"
  - "2024_in_computing"
  - "Artificial_intelligence_hardware"
---[Template:Infobox chipset](/index.php?title=Template:Infobox_chipset&action=edit&redlink=1)

![Nvidia blackwell1.jpg](/images/thumb/c/c0/Nvidia_blackwell1.jpg/300px-Nvidia_blackwell1.jpg)
 ![Nvidia blackwell2.jpg](/images/thumb/8/86/Nvidia_blackwell2.jpg/300px-Nvidia_blackwell2.jpg)

**NVIDIA Blackwell** is a [GPU](/index.php?title=GPU&action=edit&redlink=1) architecture and data center platform family by [NVIDIA](/wiki/nvidia) introduced on March 18, 2024 at the company's Graphics Technology Conference (GTC). It succeeds [NVIDIA Hopper](/index.php?title=NVIDIA_Hopper&action=edit&redlink=1) for datacenter and [Ada Lovelace](/index.php?title=Ada_Lovelace_(microarchitecture)&action=edit&redlink=1) for consumer graphics, and underpins products such as the [B200](/index.php?title=B200&action=edit&redlink=1) Tensor Core GPU, the [GB200 Grace Blackwell Superchip](/index.php?title=GB200_Grace_Blackwell_Superchip&action=edit&redlink=1) (which couples two B200 GPUs with a [Grace CPU](/index.php?title=Grace_CPU&action=edit&redlink=1)), rack-scale systems like [GB200 NVL72](/index.php?title=GB200_NVL72&action=edit&redlink=1), and the consumer [GeForce RTX 50 series](/index.php?title=GeForce_RTX_50_series&action=edit&redlink=1). Blackwell-architecture GPUs comprise two reticle-limited dies linked by a 10 TB/s chip-to-chip interconnect in a single logical GPU, are fabricated on custom [TSMC](/index.php?title=TSMC&action=edit&redlink=1) 4NP for datacenter and 4N for consumer products, and pack 208 billion transistors in datacenter variants.[&#91;1&#93;](#cite_note-arch-page-1)

## History and Naming

The architecture was first leaked in 2022, with the B40 and B100 accelerators confirmed in October 2023 via an official NVIDIA roadmap during an investors' presentation when "Hopper-Next" was replaced with "Blackwell".[&#91;2&#93;](#cite_note-wiki-blackwell-2) NVIDIA CEO [Jensen Huang](/index.php?title=Jensen_Huang&action=edit&redlink=1) officially announced Blackwell at GTC 2024, stating the company invested approximately $10 billion in research and development for the NV-HBI die interconnect technology.[&#91;2&#93;](#cite_note-wiki-blackwell-2)

Blackwell is named after [David Harold Blackwell](/index.php?title=David_Harold_Blackwell&action=edit&redlink=1) (1919–2010), an American [statistician](/index.php?title=Statistician&action=edit&redlink=1) and [mathematician](/index.php?title=Mathematician&action=edit&redlink=1) who was the first Black scholar elected to the U.S. National Academy of Sciences in 1965 and the first Black tenured faculty member at the [University of California, Berkeley](/index.php?title=University_of_California,_Berkeley&action=edit&redlink=1). His contributions to [game theory](/index.php?title=Game_theory&action=edit&redlink=1), [probability theory](/index.php?title=Probability_theory&action=edit&redlink=1), [information theory](/index.php?title=Information_theory&action=edit&redlink=1), and [statistics](/index.php?title=Statistics&action=edit&redlink=1)—including the [Rao-Blackwell theorem](/index.php?title=Rao-Blackwell_theorem&action=edit&redlink=1)—have influenced modern [artificial intelligence](/wiki/artificial_intelligence) and [machine learning](/wiki/machine_learning) algorithms that form the foundation of today's AI systems.[&#91;3&#93;](#cite_note-press-gtc2024-3)[&#91;4&#93;](#cite_note-blackwell-bio-4)

## Key architectural features

- **Dual-die, single-GPU design.** All Blackwell-architecture datacenter GPUs consist of two reticle-limited dies (GB100, each with 104 billion transistors) connected internally by a 10 TB/s NV-High Bandwidth Interface (NV-HBI) based on [NVLink](/index.php?title=NVLink&action=edit&redlink=1) 7 protocol, presented as one GPU to software with full [cache coherency](/index.php?title=Cache_coherency&action=edit&redlink=1).[&#91;1&#93;](#cite_note-arch-page-1)[&#91;2&#93;](#cite_note-wiki-blackwell-2)

- **Second-generation Transformer Engine.** Adds micro-tensor scaling and community-defined microscaling formats (MXFP4, MXFP6), enabling FP4 inference and larger effective model sizes while maintaining accuracy; acceleration for attention layers is increased versus prior generation. Includes CUDA Compute Capability 10.x/12.x support.[&#91;1&#93;](#cite_note-arch-page-1)[&#91;3&#93;](#cite_note-press-gtc2024-3)

- **Fifth-generation NVLink.** Up to 1.8 TB/s bidirectional throughput per GPU (18 NVLink5 links at 100 GB/s each) and scale-up to 576 GPUs; the NVLink Switch Chip enables a 72-GPU [NVLink](/index.php?title=NVLink&action=edit&redlink=1) domain with 130 TB/s aggregate GPU bandwidth (NVL72).[&#91;3&#93;](#cite_note-press-gtc2024-3)[&#91;1&#93;](#cite_note-arch-page-1)

- **Fifth-generation Tensor Cores.** Support for new precision formats including FP4 (4-bit floating point), FP6, FP8, FP16, BF16, TF32, FP32, and FP64 operations for enhanced AI and HPC workloads.[&#91;5&#93;](#cite_note-tensor-cores-5)

- **Fourth-generation RT Cores** (consumer). Feature Triangle Cluster Intersection Engine for mega geometry and Linear Swept Spheres for fine details like hair, with 2× ray-triangle intersection throughput.[&#91;2&#93;](#cite_note-wiki-blackwell-2)

- **AI Management Processor (AMP).** [RISC-V](/index.php?title=RISC-V&action=edit&redlink=1)-based dedicated scheduler chip on the GPU that offloads scheduling from the CPU, improving resource control via Windows Hardware-Accelerated GPU Scheduling (HAGS).[&#91;2&#93;](#cite_note-wiki-blackwell-2)

- **Confidential computing ("Secure AI").** First [TEE](/index.php?title=TEE&action=edit&redlink=1)-I/O capable GPU family with inline protection over [NVLink](/index.php?title=NVLink&action=edit&redlink=1), offering near-parity throughput to unencrypted modes when paired with compatible hosts; supports protected paging and encryption mechanisms for model/data isolation.[&#91;1&#93;](#cite_note-arch-page-1)[&#91;6&#93;](#cite_note-secureai-6)

- **RAS Engine.** Dedicated hardware for reliability, availability, and serviceability with AI-based predictive management to minimize downtime at hyperscale.[&#91;1&#93;](#cite_note-arch-page-1)

- **Decompression engine.** Hardware acceleration for formats such as LZ4, Snappy and Deflate at 800 GB/s to speed database/analytics pipelines; tightly coupled with [Grace CPU](/index.php?title=Grace_CPU&action=edit&redlink=1) over 900 GB/s NVLink-C2C.[&#91;1&#93;](#cite_note-arch-page-1)[&#91;3&#93;](#cite_note-press-gtc2024-3)

## Products

### Datacenter Products

#### B200 and B100 Tensor Core GPUs

The [B200](/index.php?title=B200&action=edit&redlink=1) is the flagship Blackwell data center GPU used standalone (for example [HGX B200](/index.php?title=HGX_B200&action=edit&redlink=1) 8-GPU servers) and within [GB200 Grace Blackwell Superchip](/index.php?title=GB200_Grace_Blackwell_Superchip&action=edit&redlink=1). The B100 is a lower-power variant with 700W TDP designed for drop-in compatibility with existing H100 infrastructure. Both feature two GB100 dies with 208 billion total transistors and 192 GB [HBM3e](/index.php?title=HBM3e&action=edit&redlink=1) memory with 8 TB/s bandwidth.[&#91;3&#93;](#cite_note-press-gtc2024-3)[&#91;7&#93;](#cite_note-hyperstack-7)

#### GB200 Grace Blackwell Superchip

The [GB200 Grace Blackwell Superchip](/index.php?title=GB200_Grace_Blackwell_Superchip&action=edit&redlink=1) integrates one [Grace CPU](/index.php?title=Grace_CPU&action=edit&redlink=1) with two [B200](/index.php?title=B200&action=edit&redlink=1) GPUs over NVLink-C2C (900 GB/s bidirectional), providing a tightly coupled CPU-GPU memory system with 864 GB total unified memory for large-scale [LLM](/wiki/llm) workloads.[&#91;3&#93;](#cite_note-press-gtc2024-3)

#### Blackwell Ultra (GB300 generation)

In 2025, [NVIDIA](/wiki/nvidia) introduced "Blackwell Ultra," including [GB300 NVL72](/index.php?title=GB300_NVL72&action=edit&redlink=1), targeting order-of-magnitude gains in AI reasoning and real-time generation compared to [NVIDIA Hopper](/index.php?title=NVIDIA_Hopper&action=edit&redlink=1).[&#91;1&#93;](#cite_note-arch-page-1)[&#91;8&#93;](#cite_note-verge-gb300-8)

### Rack-scale systems

#### GB200 NVL72

The [GB200 NVL72](/index.php?title=GB200_NVL72&action=edit&redlink=1) connects 36 GB200 Grace Blackwell Superchips (72 [B200](/index.php?title=B200&action=edit&redlink=1) GPUs + 36 [Grace CPUs](/index.php?title=Grace_CPU&action=edit&redlink=1)) in a liquid-cooled rack with a single 72-GPU [NVLink](/index.php?title=NVLink&action=edit&redlink=1) domain that behaves like one giant GPU for software. System power consumption is approximately 120kW.[&#91;9&#93;](#cite_note-fibermall-9)

| Metric | GB200 NVL72 (rack) | GB200 Grace Blackwell Superchip (per node) |
| --- | --- | --- |
| FP4 Tensor Core (with sparsity) | 1,440 PFLOPS | 40 PFLOPS |
| FP8/FP6 Tensor Core (with sparsity) | 720 PFLOPS | 20 PFLOPS |
| INT8 Tensor Core (with sparsity) | 720 POPS | 20 POPS |
| FP16/BF16 Tensor Core (with sparsity) | 360 PFLOPS | 10 PFLOPS |
| TF32 Tensor Core | 180 PFLOPS | 5 PFLOPS |
| FP32 | 5,760 TFLOPS | 160 TFLOPS |
| FP64 / FP64 Tensor Core | 2,880 TFLOPS | 80 TFLOPS |
| GPU memory (HBM3e) | Up to 13.4 TB, 576 TB/s | Up to 372 GB, 16 TB/s |
| NVLink bandwidth | 130 TB/s | 3.6 TB/s |
| CPU cores (Arm [Neoverse](/index.php?title=Neoverse&action=edit&redlink=1) V2) | 2,592 | 72 |
| CPU memory (LPDDR5X) | Up to 17 TB, up to 18.4 TB/s | Up to 480 GB, up to 512 GB/s |

### Consumer Products (GeForce RTX 50 Series)

The [GeForce RTX 50 series](/index.php?title=GeForce_RTX_50_series&action=edit&redlink=1) based on Blackwell architecture was announced at [CES](/index.php?title=CES&action=edit&redlink=1) 2025 on January 6, 2025. Consumer dies use [TSMC](/index.php?title=TSMC&action=edit&redlink=1) 4N process and do not feature the dual-die design of datacenter parts.[&#91;11&#93;](#cite_note-rtx50-announce-11)

| Model | GPU | CUDA Cores | Memory | Bus Width | Die Size | Transistors | TDP | MSRP | Release Date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [RTX 5090](/index.php?title=RTX_5090&action=edit&redlink=1) | GB202-300-A1 | 21,760 | 32 GB [GDDR7](/index.php?title=GDDR7&action=edit&redlink=1) | 512-bit | 750 mm² | 92.2 bn | 575W | $1,999 | January 30, 2025 |
| [RTX 5080](/index.php?title=RTX_5080&action=edit&redlink=1) | GB203-200-A1 | 10,752 | 16 GB GDDR7 | 256-bit | 378 mm² | 45.6 bn | 360W | $999 | January 30, 2025 |
| [RTX 5070 Ti](/index.php?title=RTX_5070_Ti&action=edit&redlink=1) | GB203-300-A1 | 8,960 | 16 GB GDDR7 | 256-bit | 378 mm² | 45.6 bn | 300W | $749 | February 2025 |
| [RTX 5070](/index.php?title=RTX_5070&action=edit&redlink=1) | GB205-300-A1 | 6,144 | 12 GB GDDR7 | 192-bit | 263 mm² | 31.1 bn | 250W | $549 | February 2025 |

Professional RTX PRO Blackwell series includes RTX PRO 6000 (96 GB VRAM, April 2025) and RTX PRO 5000/4500/4000 (summer 2025).[&#91;13&#93;](#cite_note-cgchannel-rtxpro-13)

## Comparison to Previous Generation

| Feature | [NVIDIA H100](/index.php?title=Hopper_(microarchitecture)&action=edit&redlink=1) | NVIDIA B200 (Blackwell) |
| --- | --- | --- |
| Transistors | 80 Billion | 208 Billion (dual-die) |
| Process Node | TSMC 4N | TSMC 4NP |
| Max AI Performance | 4 PFLOPS (FP8) | 20 PFLOPS (FP4) / 10 PFLOPS (FP8) |
| Max GPU Memory | 80 GB HBM3 | 192 GB HBM3e |
| Memory Bandwidth | 3.35 TB/s | 8 TB/s |
| NVLink (GPU-to-GPU) | 4th Gen: 900 GB/s | 5th Gen: 1.8 TB/s |
| TDP | 700W | 1000W |

## Software, networking, and platforms

Blackwell systems are offered in [HGX](/index.php?title=HGX&action=edit&redlink=1) and [DGX](/index.php?title=DGX&action=edit&redlink=1) platforms, and as managed [DGX Cloud](/index.php?title=DGX_Cloud&action=edit&redlink=1) instances, and pair with [NVIDIA](/wiki/nvidia)'s [Quantum](/index.php?title=Quantum&action=edit&redlink=1)-X800 [InfiniBand](/index.php?title=InfiniBand&action=edit&redlink=1) and [Spectrum-X](/index.php?title=Spectrum-X&action=edit&redlink=1) Ethernet fabrics (up to 800 Gb/s) and [BlueField](/index.php?title=BlueField&action=edit&redlink=1)-3 [DPUs](/index.php?title=DPU&action=edit&redlink=1) for secure, composable acceleration.[&#91;3&#93;](#cite_note-press-gtc2024-3) NVIDIA AI Enterprise includes NVIDIA NIM inference microservices for Blackwell deployment.[&#91;1&#93;](#cite_note-arch-page-1)

## Performance claims

At announcement, [NVIDIA](/wiki/nvidia) stated that, per chip, Blackwell delivers:

- Up to 2.5× the FP8 training throughput of [NVIDIA Hopper](/index.php?title=NVIDIA_Hopper&action=edit&redlink=1)

- Up to 5× the inference performance at FP4

- 30× faster real-time trillion-parameter LLM inference (NVL72 vs H100 cluster)

- 4× faster LLM training at massive scale

- 25× improvement in cost and energy efficiency for trillion-parameter models

- 18× faster database query performance compared to CPUs[&#91;3&#93;](#cite_note-press-gtc2024-3)[&#91;10&#93;](#cite_note-nvl72-spec-10)

## Market Reception and Future Roadmap

By November 2024, [Morgan Stanley](/index.php?title=Morgan_Stanley&action=edit&redlink=1) reported that the entire 2025 production of Blackwell was sold out. Major cloud providers including [Amazon Web Services](/index.php?title=Amazon_Web_Services&action=edit&redlink=1), [Google](/index.php?title=Google&action=edit&redlink=1), [Meta](/wiki/meta), [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1), [OpenAI](/wiki/openai), [Oracle](/index.php?title=Oracle&action=edit&redlink=1), and [Tesla](/index.php?title=Tesla&action=edit&redlink=1) have committed to adopting Blackwell-based systems.[&#91;2&#93;](#cite_note-wiki-blackwell-2)

Initial consumer RTX 50 series availability faced supply constraints, with some units found missing eight [render output units](/index.php?title=Render_output_units&action=edit&redlink=1) (ROPs) due to a "production anomaly" affecting less than 0.5% of cards according to NVIDIA.[&#91;15&#93;](#cite_note-rtx50-wiki-15)

NVIDIA's roadmap includes Blackwell Ultra enhancements in 2025, followed by the [Vera Rubin](/index.php?title=Vera_Rubin&action=edit&redlink=1) architecture (comprised of Rubin GPU and Vera CPU) scheduled for 2026 with [HBM4](/index.php?title=HBM4&action=edit&redlink=1) memory.[&#91;8&#93;](#cite_note-verge-gb300-8)

## See also

- [NVIDIA Hopper](/index.php?title=NVIDIA_Hopper&action=edit&redlink=1)

- [Ada Lovelace (microarchitecture)](/index.php?title=Ada_Lovelace_(microarchitecture)&action=edit&redlink=1)

- [Grace CPU](/index.php?title=Grace_CPU&action=edit&redlink=1)

- [NVLink](/index.php?title=NVLink&action=edit&redlink=1)

- [GeForce RTX 50 series](/index.php?title=GeForce_RTX_50_series&action=edit&redlink=1)

- [Tensor Core](/index.php?title=Tensor_Core&action=edit&redlink=1)

- [David Blackwell](/index.php?title=David_Blackwell&action=edit&redlink=1)

- [DGX SuperPOD](/index.php?title=DGX_SuperPOD&action=edit&redlink=1)

- [DLSS](/index.php?title=DLSS&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arch-page_1-0) [1.1](#cite_ref-arch-page_1-1) [1.2](#cite_ref-arch-page_1-2) [1.3](#cite_ref-arch-page_1-3) [1.4](#cite_ref-arch-page_1-4) [1.5](#cite_ref-arch-page_1-5) [1.6](#cite_ref-arch-page_1-6) [1.7](#cite_ref-arch-page_1-7) [1.8](#cite_ref-arch-page_1-8) [https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/) — NVIDIA Blackwell Architecture: official technology page with manufacturing node, dual-die design, transistor count; second-gen Transformer Engine; fifth-gen NVLink scale; NVLink Switch (130 TB/s NVL72 domain); Secure AI/Confidential Computing; RAS; Decompression engine.

2. ↑ [2.0](#cite_ref-wiki-blackwell_2-0) [2.1](#cite_ref-wiki-blackwell_2-1) [2.2](#cite_ref-wiki-blackwell_2-2) [2.3](#cite_ref-wiki-blackwell_2-3) [2.4](#cite_ref-wiki-blackwell_2-4) [2.5](#cite_ref-wiki-blackwell_2-5) [https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)](https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)) — Blackwell (microarchitecture) Wikipedia entry: historical timeline, technical specifications, market reception.

3. ↑ [3.0](#cite_ref-press-gtc2024_3-0) [3.1](#cite_ref-press-gtc2024_3-1) [3.2](#cite_ref-press-gtc2024_3-2) [3.3](#cite_ref-press-gtc2024_3-3) [3.4](#cite_ref-press-gtc2024_3-4) [3.5](#cite_ref-press-gtc2024_3-5) [3.6](#cite_ref-press-gtc2024_3-6) [3.7](#cite_ref-press-gtc2024_3-7) [https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing](https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing) — NVIDIA Newsroom (Mar 18, 2024): Blackwell platform launch; GB200 Grace Blackwell Superchip overview; NVLink-C2C 900 GB/s; NVLink throughput per GPU; NVL72 topology and performance positioning; partner/availability context; naming origin.

4. [↑](#cite_ref-blackwell-bio_4-0) [https://en.wikipedia.org/wiki/David_Blackwell](https://en.wikipedia.org/wiki/David_Blackwell) — David Blackwell biography and contributions to mathematics and statistics.

5. [↑](#cite_ref-tensor-cores_5-0) [https://www.nvidia.com/en-us/data-center/tensor-cores/](https://www.nvidia.com/en-us/data-center/tensor-cores/) — Tensor Cores: Versatility for HPC & AI, NVIDIA official page.

6. [↑](#cite_ref-secureai_6-0) [https://docs.nvidia.com/nvidia-secure-ai-with-blackwell-and-hopper-gpus-whitepaper.pdf](https://docs.nvidia.com/nvidia-secure-ai-with-blackwell-and-hopper-gpus-whitepaper.pdf) — NVIDIA Whitepaper (Aug 14, 2025): "NVIDIA Secure AI with Blackwell and Hopper GPUs" discussing Blackwell B100/B200 confidential computing, protected paging, and TEE-I/O context.

7. ↑ [7.0](#cite_ref-hyperstack_7-0) [7.1](#cite_ref-hyperstack_7-1) [https://www.amax.com/comparing-nvidia-blackwell-configurations/](https://www.amax.com/comparing-nvidia-blackwell-configurations/) — AMAX (Mar 26, 2024): Comparing NVIDIA Blackwell Configurations: GB200, B200, B100 specifications.

8. ↑ [8.0](#cite_ref-verge-gb300_8-0) [8.1](#cite_ref-verge-gb300_8-1) [https://www.theverge.com/news/631835/nvidia-blackwell-ultra-ai-chip-gb300](https://www.theverge.com/news/631835/nvidia-blackwell-ultra-ai-chip-gb300) — The Verge (Mar 2025): coverage of Blackwell Ultra/GB300 family timing and positioning; future Vera Rubin architecture.

9. [↑](#cite_ref-fibermall_9-0) [https://www.fibermall.com/blog/nvidia-gb200-superchip.htm](https://www.fibermall.com/blog/nvidia-gb200-superchip.htm) — Fibermall (Oct 12, 2024): Introduction to NVIDIA GB200 Superchip and Liquid-Cooled Servers and Cabinets, power consumption details.

10. ↑ [10.0](#cite_ref-nvl72-spec_10-0) [10.1](#cite_ref-nvl72-spec_10-1) [https://www.nvidia.com/en-us/data-center/gb200-nvl72/](https://www.nvidia.com/en-us/data-center/gb200-nvl72/) — NVIDIA GB200 NVL72 product page: official specifications table (PFLOPS/POPS by precision with sparsity notes), HBM3e capacities and bandwidths, NVLink domain bandwidth, CPU core counts and LPDDR5X capacities, and system claims (30× inference, 4× training, 25× efficiency vs. H100).

11. [↑](#cite_ref-rtx50-announce_11-0) [https://www.videocardz.com/newz/nvidia-launches-geforce-rtx-50-blackwell-series](https://www.videocardz.com/newz/nvidia-launches-geforce-rtx-50-blackwell-series) — VideoCardz (Jan 7, 2025): NVIDIA launches GeForce RTX 50 "Blackwell" series announcement details.

12. [↑](#cite_ref-wiki-geforce50_12-0) [https://en.wikipedia.org/wiki/GeForce_RTX_50_series](https://en.wikipedia.org/wiki/GeForce_RTX_50_series) — GeForce RTX 50 series Wikipedia entry with specifications and release dates.

13. [↑](#cite_ref-cgchannel-rtxpro_13-0) [https://www.cgchannel.com/2025/03/nvidia-unveils-blackwell-rtx-pro-gpus-with-up-to-96gb-vram/](https://www.cgchannel.com/2025/03/nvidia-unveils-blackwell-rtx-pro-gpus-with-up-to-96gb-vram/) — CG Channel: NVIDIA unveils Blackwell RTX PRO GPUs professional lineup.

14. [↑](#cite_ref-aventus_14-0) [https://www.aventusinformatics.com/blog_details/nvidia-blackwell-vs-hopper-a-leap-in-ai-training-performance](https://www.aventusinformatics.com/blog_details/nvidia-blackwell-vs-hopper-a-leap-in-ai-training-performance) — Aventus Informatics (Oct 12, 2025): Nvidia Blackwell vs. Hopper performance comparison.

15. [↑](#cite_ref-rtx50-wiki_15-0) [https://en.wikipedia.org/wiki/GeForce_RTX_50_series](https://en.wikipedia.org/wiki/GeForce_RTX_50_series) — GeForce RTX 50 series production anomaly information.