---
title: "NVIDIA AI Accelerators"
slug: "nvidia_h100"
categories:
  - "Hardware"
  - "NVIDIA"
  - "Artificial_intelligence"
  - "Semiconductor"
---

**NVIDIA AI Accelerators** are a family of data center [graphics processing units](/wiki/gpu) (GPUs) designed by [NVIDIA](/wiki/nvidia) for [artificial intelligence](/wiki/artificial_intelligence) training and [inference](/wiki/inference). Spanning the Hopper and Blackwell architectures, these accelerators include the H100, H200, B100, B200, and GB200, and have become the dominant hardware platform for training [large language models](/wiki/llm) (LLMs), [diffusion models](/wiki/diffusion_models), and other large-scale AI workloads. NVIDIA's data center GPU revenue has grown dramatically since 2023, driven by massive demand from hyperscalers, cloud providers, and AI research labs.

## Hopper Architecture

The NVIDIA Hopper architecture, named after computer science pioneer Grace Hopper, was announced at GTC 2022 and began shipping in 2023. Hopper introduced several key innovations that made it the workhorse of the modern AI training era.

### Key Architectural Features

**Transformer Engine:** Hopper's most significant innovation is the Transformer Engine, which dynamically switches between FP8 and FP16 precision during [transformer](/wiki/transformer) model training. This allows models to train with lower-precision arithmetic where safe to do so, effectively doubling throughput on transformer workloads without sacrificing model quality.

**Fourth-Generation Tensor Cores:** Hopper's Tensor Cores support FP8, FP16, BF16, TF32, FP64, and INT8 data types. FP8 support was new to Hopper and proved essential for accelerating both training and inference of large transformer models.

**Fourth-Generation NVLink:** Each H100 GPU features 18 NVLink 4.0 links, providing up to 900 GB/s of total bidirectional bandwidth for multi-GPU communication. This represents a 1.5x improvement over the A100's NVLink 3.0.

**Third-Generation NVSwitch:** Every HGX H100 and HGX H200 system with eight GPUs features four third-generation NVSwitch chips, enabling all-to-all GPU communication at full NVLink bandwidth. The total bidirectional bandwidth of each NVSwitch chip is 25.6 terabits per second.

**HBM3 and HBM3e Memory:** The H100 SXM ships with 80 GB of HBM3 memory, while the H200 upgraded to 141 GB of HBM3e, significantly expanding the memory available for model weights and activations.

### H100 GPU

The H100 is the flagship GPU of the Hopper generation and has been the most widely deployed accelerator for AI training since its release in 2023. It is built on the GH100 GPU die using TSMC's 4N process node and contains 80 billion transistors.

#### H100 Specifications

| Specification | H100 SXM | H100 PCIe |
|---|---|---|
| GPU Architecture | Hopper (GH100) | Hopper (GH100) |
| Process Node | TSMC 4N | TSMC 4N |
| Transistors | 80 billion | 80 billion |
| CUDA Cores | 16,896 | 14,592 |
| Memory | 80 GB HBM3 | 80 GB HBM3 |
| Memory Bandwidth | 3,350 GB/s | 2,039 GB/s |
| FP64 | 34 TFLOPS | 26 TFLOPS |
| FP64 Tensor Core | 67 TFLOPS | 51 TFLOPS |
| FP32 | 67 TFLOPS | 51 TFLOPS |
| TF32 Tensor Core | 989 TFLOPS | 756 TFLOPS |
| FP16/BF16 Tensor Core | 1,979 TFLOPS | 1,513 TFLOPS |
| FP8 Tensor Core | 3,958 TFLOPS | 3,026 TFLOPS |
| NVLink Bandwidth | 900 GB/s | 600 GB/s |
| PCIe | Gen5 x16 (128 GB/s) | Gen5 x16 (128 GB/s) |
| TDP | 700W | 350W |
| Form Factor | SXM5 | Dual-slot PCIe |

The SXM variant is designed for NVIDIA's HGX baseboard and offers higher power limits, more CUDA cores, and greater memory bandwidth than the PCIe version. The vast majority of large-scale AI training clusters use the SXM form factor.

#### Pricing

Individual H100 SXM GPUs have traded at prices ranging from $25,000 to $40,000, depending on market conditions and supply availability. During peak demand in 2023 and early 2024, prices exceeded $40,000 per GPU on the secondary market. By 2025, as supply caught up with demand, prices declined. Cloud rental rates for H100 GPUs range from approximately $1.49 to $4.00 per GPU per hour depending on the provider, with AWS P5 instances pricing at roughly $3.90 per GPU per hour and specialized providers like Lambda Labs offering rates around $2.49 per hour.

### H200 GPU

The H200, announced in November 2023 and shipping in 2024, uses the same Hopper compute silicon as the H100 but upgrades the memory subsystem to 141 GB of HBM3e with 4.8 TB/s of bandwidth. This nearly doubles the memory capacity and provides a 1.4x increase in memory bandwidth compared to the H100 SXM.

#### H200 Specifications

| Specification | H200 SXM |
|---|---|
| GPU Architecture | Hopper (GH200) |
| Memory | 141 GB HBM3e |
| Memory Bandwidth | 4,800 GB/s |
| FP16/BF16 Tensor Core | 1,979 TFLOPS |
| FP8 Tensor Core | 3,958 TFLOPS |
| NVLink Bandwidth | 900 GB/s |
| TDP | 700W |

Because the compute cores are identical to the H100, the H200's performance gains come primarily from memory-bound workloads. NVIDIA reports up to 1.4x faster training and 1.8x faster inference for transformer-heavy models compared to the H100, largely because larger batch sizes and longer sequences can fit in memory.

Individual H200 GPUs are priced at approximately $30,000 to $40,000, with 8-GPU HGX H200 systems listing at around $315,000.

## Blackwell Architecture

The Blackwell architecture, named after mathematician David Blackwell, was announced at GTC 2024 and began volume production in late 2024 and early 2025. Blackwell represents a generational leap in both compute density and memory bandwidth, and introduces several new architectural features.

### Key Architectural Features

**Second-Generation Transformer Engine:** Blackwell's Transformer Engine adds support for FP4 precision, effectively doubling throughput compared to FP8 on Hopper for workloads that can tolerate lower precision, such as inference.

**Fifth-Generation NVLink:** NVLink 5.0 delivers 1,800 GB/s of bidirectional bandwidth per GPU, doubling the 900 GB/s available on Hopper. Each NVSwitch chip has 72 NVLink 5.0 ports.

**Dual-Die Design:** Both the B100 and B200 use a dual-chiplet design with 208 billion transistors, manufactured on TSMC's 4NP process. This effectively doubles the compute density per GPU compared to single-die designs.

**Decompression Engine:** A dedicated hardware decompression engine accelerates database queries and data processing workloads, enabling up to 18x faster database query performance.

**RAS (Reliability, Availability, Serviceability) Engine:** Blackwell includes a dedicated RAS engine with AI-driven preventive maintenance capabilities, using transformer-based models to predict and prevent hardware failures.

### B100 GPU

The B100 is the entry-level Blackwell GPU, designed to be a drop-in upgrade for existing HGX H100 infrastructure. It maintains the same 700W TDP as the H100 SXM, allowing it to fit into the same cooling and power delivery systems.

#### B100 Specifications

| Specification | B100 |
|---|---|
| GPU Architecture | Blackwell |
| Process Node | TSMC 4NP |
| Transistors | 208 billion |
| Memory | 192 GB HBM3e |
| Memory Bandwidth | 8,000 GB/s |
| FP4 Tensor Core (Dense/Sparse) | 7,000 / 14,000 TFLOPS |
| FP8 Tensor Core (Dense/Sparse) | 3,500 / 7,000 TFLOPS |
| FP16/BF16 Tensor Core (Dense/Sparse) | 1,800 / 3,500 TFLOPS |
| TF32 Tensor Core (Dense/Sparse) | 900 / 1,800 TFLOPS |
| NVLink Bandwidth | 1,800 GB/s |
| TDP | 700W |

### B200 GPU

The B200 is the high-performance Blackwell GPU, designed for new-build data centers that can accommodate its higher power requirements. It offers higher clock speeds and greater compute throughput than the B100 at the cost of increased power consumption.

#### B200 Specifications

| Specification | B200 |
|---|---|
| GPU Architecture | Blackwell |
| Process Node | TSMC 4NP |
| Transistors | 208 billion |
| Memory | 192 GB HBM3e |
| Memory Bandwidth | 8,000 GB/s |
| FP4 Tensor Core (Dense/Sparse) | 9,000 / 18,000 TFLOPS |
| FP8 Tensor Core (Dense/Sparse) | 4,500 / 9,000 TFLOPS |
| FP16/BF16 Tensor Core | 2,250 TFLOPS |
| NVLink Bandwidth | 1,800 GB/s |
| TDP | 1,000W |

The B200 delivers roughly 2.5x the FP8 performance of the H100 SXM. Individual B200 GPUs are priced in the range of $45,000 to $55,000 depending on volume and configuration.

### GB200 Grace Blackwell Superchip

The GB200 combines two B200 GPUs with one NVIDIA Grace CPU (a 72-core Arm-based processor) through an ultra-low-power NVLink chip-to-chip interconnect running at 900 GB/s. This Grace Blackwell Superchip design provides up to 384 GB of combined HBM3e memory with 16 TB/s of aggregate memory bandwidth.

### GB200 NVL72

The GB200 NVL72 is NVIDIA's rack-scale AI system, connecting 36 Grace CPUs and 72 Blackwell GPUs in a single, liquid-cooled rack. The 72-GPU NVLink domain acts as a single, massive GPU.

#### GB200 NVL72 Specifications

| Specification | Value |
|---|---|
| GPUs | 72x B200 |
| CPUs | 36x Grace (72-core Arm) |
| NVLink Domain | All 72 GPUs interconnected |
| Aggregate FP4 Performance | 1,440 PFLOPS (1.44 ExaFLOPS) |
| Aggregate HBM3e Memory | 13.5 TB (shared pool) |
| NVLink Aggregate Bandwidth | 130 TB/s |
| Power Consumption | ~120 kW (liquid-cooled) |
| Weight | ~1.36 metric tons |
| Form Factor | Full rack |

The NVL72 is designed for training and inference of models exceeding one trillion parameters. NVIDIA claims it delivers 30x faster real-time LLM inference and 10x greater performance for [mixture-of-experts](/wiki/mixture_of_experts) (MoE) architectures compared to previous-generation systems.

## GPU Comparison Table

| Feature | H100 SXM | H200 SXM | B100 | B200 | GB200 (per Superchip) |
|---|---|---|---|---|---|
| Architecture | Hopper | Hopper | Blackwell | Blackwell | Blackwell + Grace |
| Memory | 80 GB HBM3 | 141 GB HBM3e | 192 GB HBM3e | 192 GB HBM3e | 384 GB HBM3e |
| Memory BW | 3,350 GB/s | 4,800 GB/s | 8,000 GB/s | 8,000 GB/s | 16,000 GB/s |
| FP8 (Dense) | 3,958 TFLOPS | 3,958 TFLOPS | 3,500 TFLOPS | 4,500 TFLOPS | 9,000 TFLOPS |
| FP4 (Dense) | N/A | N/A | 7,000 TFLOPS | 9,000 TFLOPS | 18,000 TFLOPS |
| NVLink BW | 900 GB/s | 900 GB/s | 1,800 GB/s | 1,800 GB/s | 1,800 GB/s |
| TDP | 700W | 700W | 700W | 1,000W | ~2,700W |
| Approx. GPU Price | $25K-$40K | $30K-$40K | N/A | $45K-$55K | N/A |

## HGX and DGX Systems

NVIDIA packages its data center GPUs into standardized server platforms that simplify deployment and ensure optimal multi-GPU performance.

### HGX (GPU Baseboard)

The HGX is NVIDIA's reference GPU baseboard design, containing eight GPUs connected through NVLink and NVSwitch. Server OEMs such as Dell, HPE, Lenovo, and Supermicro build their own server enclosures around HGX baseboards. HGX H100 and HGX H200 systems use four third-generation NVSwitch chips to provide all-to-all GPU communication at 900 GB/s per GPU.

### DGX (Turnkey AI System)

The DGX is NVIDIA's turnkey, fully integrated AI server. Each generation includes compute, networking, storage, and software pre-configured for AI workloads.

| System | GPUs | GPU Memory | AI Performance (FP8) | Approx. Price |
|---|---|---|---|---|
| DGX A100 | 8x A100 80GB | 640 GB HBM2e | ~5 PFLOPS | ~$199,000 |
| DGX H100 | 8x H100 SXM | 640 GB HBM3 | ~32 PFLOPS | ~$373,000 |
| DGX H200 | 8x H200 SXM | 1,128 GB HBM3e | ~32 PFLOPS | N/A |
| DGX B200 | 8x B200 | 1,536 GB HBM3e | ~72 PFLOPS | N/A |

### DGX SuperPOD

The DGX SuperPOD is NVIDIA's turnkey AI supercomputer, scaling from dozens to thousands of DGX nodes connected through NVIDIA Quantum InfiniBand networking. Organizations such as Meta, Microsoft, and xAI have deployed SuperPOD-scale clusters for frontier model training.

## Use in Major AI Training Runs

NVIDIA's data center GPUs have powered the vast majority of large-scale AI model training efforts. The following table summarizes known GPU usage for notable training runs.

| Model | Organization | GPUs Used | Approximate Scale |
|---|---|---|---|
| GPT-4 | [OpenAI](/wiki/openai) | A100 80GB | ~25,000 GPUs, 90-100 days |
| [Llama](/wiki/llama) 3 (405B) | [Meta](/wiki/meta) | H100 SXM | ~24,000 GPUs |
| Llama 4 | Meta | H100 SXM | >100,000 GPUs |
| Grok 2 | xAI | H100 SXM | ~20,000 GPUs |
| Grok 3 | xAI | H100 SXM | ~100,000 GPUs |
| Gemini | [Google](/wiki/google) | TPU v4/v5p | Google TPUs (not NVIDIA GPUs) |
| [Claude](/wiki/claude) | [Anthropic](/wiki/anthropic) | A100/H100 | Trained on AWS infrastructure |

Meta has disclosed plans for over 500,000 H100-equivalent GPUs in its infrastructure. xAI built a "Gigafactory of Compute" cluster in Memphis, Tennessee, initially with 100,000 H100 GPUs, with plans to scale to 200,000.

## Competition

While NVIDIA dominates the AI accelerator market, several competitors offer alternative hardware.

### AMD Instinct MI300 Series

[AMD](/wiki/amd)'s Instinct MI300X is the company's flagship AI accelerator, competing directly with the H100 and H200.

| Feature | NVIDIA H100 SXM | AMD MI300X | AMD MI325X | AMD MI350X |
|---|---|---|---|---|
| Memory | 80 GB HBM3 | 192 GB HBM3 | 256 GB HBM3e | 288 GB HBM3e |
| Memory BW | 3,350 GB/s | 5,300 GB/s | 6,000 GB/s | N/A |
| Compute Units | 16,896 CUDA | 304 CUs | 304 CUs | CDNA 4 |
| Architecture | Hopper | CDNA 3 | CDNA 3 | CDNA 4 |
| TDP | 700W | 750W | 750W | N/A |

The MI300X offers a significant memory capacity advantage (192 GB vs. 80 GB), which is beneficial for inference workloads where model weights must fit in GPU memory. AMD claims up to 1.3x AI performance over competitive accelerators. The MI350X series, launched in June 2025, features CDNA 4 architecture and claims a 4x increase in AI compute performance and 35x increase in inference performance compared to MI300X.

### Google TPU

Google's [Tensor Processing Units](/wiki/tensor_processing_unit) (TPUs) are custom ASICs designed specifically for machine learning workloads. Unlike NVIDIA GPUs, TPUs are available only through Google Cloud.

| Feature | TPU v5p | TPU v6e (Trillium) | TPU v7 (Ironwood) |
|---|---|---|---|
| Compute (per chip) | ~459 TFLOPS | ~918 TFLOPS | N/A |
| Memory (per chip) | 95 GB HBM | 32 GB HBM | N/A |
| Pod Size | Up to 8,960 chips | Scalable | Scalable |
| Key Advantage | Large pod scale | 4.7x compute vs. v5e | Inference-optimized |
| Availability | Google Cloud | Google Cloud (Preview) | 2025 Preview |

Google uses TPUs internally for training its Gemini model family. TPU v6e offers up to 4x better performance per dollar compared to the H100 for certain workloads, and TPUs consume 60-65% less power than equivalent GPU configurations.

### Intel Gaudi 3

Intel's Gaudi 3 AI accelerator targets price-sensitive customers who need competitive performance at a lower cost than NVIDIA GPUs.

| Specification | Gaudi 3 |
|---|---|
| Architecture | Gaudi (Intel) |
| Process Node | TSMC 5nm |
| Compute Engines | 64 TPCs + 8 MMEs |
| FP8/BF16 Performance | 1.8 PFLOPS |
| Memory | 128 GB HBM2e |
| Memory Bandwidth | 3,700 GB/s |
| Networking | 24x 200 Gbps RDMA NICs |
| TDP | Up to 900W (air) / 1,200W (liquid) |

Gaudi 3 is positioned as a cost-effective alternative to the H100, with Intel emphasizing competitive performance at lower price points. It is available through partners including IBM Cloud.

### Groq LPU

[Groq](/wiki/groq)'s Language Processing Unit (LPU) takes a fundamentally different architectural approach, using SRAM instead of HBM for weight storage. The Groq 3 LPU contains 500 MB of SRAM and delivers 1.2 PFLOPS of INT8 compute with 150 TB/s of memory bandwidth. Groq's architecture achieves extremely low latency for inference, delivering Llama 2 70B at 300 tokens per second, roughly ten times faster than H100 clusters running the same model. See [AI Inference Optimization](/wiki/ai_inference_optimization) for more on inference-specialized hardware.

### AWS Custom Silicon

Amazon Web Services develops its own AI accelerators: Trainium for training and Inferentia for inference. Trainium3, announced in December 2025, is AWS's first 3nm AI chip, providing 2.52 PFLOPS of FP8 compute and 144 GB of HBM3e memory. See [AI Cloud Infrastructure](/wiki/ai_cloud_infrastructure) for details.

## NVLink and Interconnect Evolution

Multi-GPU communication bandwidth is critical for distributed AI training, as GPUs must frequently exchange gradients and activations.

| Generation | Architecture | Per-GPU Bandwidth | Links per GPU | NVSwitch Bandwidth |
|---|---|---|---|---|
| NVLink 3.0 | Ampere (A100) | 600 GB/s | 12 | 14.4 Tb/s |
| NVLink 4.0 | Hopper (H100/H200) | 900 GB/s | 18 | 25.6 Tb/s |
| NVLink 5.0 | Blackwell (B100/B200) | 1,800 GB/s | 18 | 72 ports per chip |
| NVLink 6.0 | Rubin (upcoming) | 3,600 GB/s | TBD | TBD |

NVLink 6.0, announced at CES 2026 as part of the upcoming Rubin platform, will double per-GPU bandwidth again to 3,600 GB/s.

## Software Ecosystem

NVIDIA's competitive moat extends beyond hardware to include a comprehensive software ecosystem.

**CUDA:** NVIDIA's parallel computing platform has been the dominant programming model for GPU-accelerated computing since 2007. The vast majority of AI frameworks, including [PyTorch](/wiki/pytorch) and [TensorFlow](/wiki/tensorflow), are optimized for CUDA.

**cuDNN:** The CUDA Deep Neural Network library provides highly optimized implementations of standard neural network operations.

**TensorRT and TensorRT-LLM:** NVIDIA's inference optimization engines, with TensorRT-LLM specifically designed for [LLM inference](/wiki/ai_inference_optimization), supporting quantization, speculative decoding, and other optimization techniques.

**NCCL (NVIDIA Collective Communications Library):** Optimized communication primitives for multi-GPU and multi-node training.

**NeMo:** NVIDIA's end-to-end framework for building, training, and deploying large language models.

**Triton Inference Server:** An open-source inference serving platform that supports multiple frameworks and hardware backends.

## Future Roadmap

NVIDIA has announced the Rubin platform as the successor to Blackwell, expected in 2026. Key features include NVLink 6.0 with 3,600 GB/s per GPU, next-generation HBM4 memory, and further improvements in compute density. The Vera Rubin platform combines Rubin GPUs with NVIDIA's Vera CPU.

## See Also

- [NVIDIA](/wiki/nvidia)
- [GPU](/wiki/gpu)
- [AI Inference Optimization](/wiki/ai_inference_optimization)
- [AI Cloud Infrastructure](/wiki/ai_cloud_infrastructure)
- [Edge AI](/wiki/edge_ai)
- [Large Language Model](/wiki/llm)
- [Mixture of Experts](/wiki/mixture_of_experts)
- [Quantization](/wiki/quantization)
- [Transformer](/wiki/transformer)

## References

1. NVIDIA H100 Tensor Core GPU Datasheet. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/h100/](https://www.nvidia.com/en-us/data-center/h100/)
2. NVIDIA Hopper Architecture In-Depth. NVIDIA Developer Blog. Retrieved 2026 from [https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/](https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/)
3. NVIDIA Blackwell Architecture. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)
4. GB200 NVL72. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/gb200-nvl72/](https://www.nvidia.com/en-us/data-center/gb200-nvl72/)
5. DGX B200: The Foundation for Your AI Factory. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/dgx-b200/](https://www.nvidia.com/en-us/data-center/dgx-b200/)
6. Comparing Blackwell vs Hopper: B200 and B100 vs H200 and H100. Exxact Corporation. Retrieved 2026 from [https://www.exxactcorp.com/blog/hpc/comparing-nvidia-tensor-core-gpus](https://www.exxactcorp.com/blog/hpc/comparing-nvidia-tensor-core-gpus)
7. NVIDIA Data Center GPUs Explained: From A100 to B200 and Beyond. BentoML. Retrieved 2026 from [https://www.bentoml.com/blog/nvidia-data-center-gpus-explained-a100-h200-b200-and-beyond](https://www.bentoml.com/blog/nvidia-data-center-gpus-explained-a100-h200-b200-and-beyond)
8. H100 vs H200 vs B200: NVIDIA GPU Comparison. Introl. Retrieved 2026 from [https://introl.com/blog/h100-vs-h200-vs-b200-choosing-the-right-nvidia-gpus-for-your-ai-workload](https://introl.com/blog/h100-vs-h200-vs-b200-choosing-the-right-nvidia-gpus-for-your-ai-workload)
9. NVIDIA NVLink and NVSwitch. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/nvlink/](https://www.nvidia.com/en-us/data-center/nvlink/)
10. NVIDIA AI GPU Prices: H100 and H200 Cost Guide. IntuitionLabs. Retrieved 2026 from [https://intuitionlabs.ai/articles/nvidia-ai-gpu-pricing-guide](https://intuitionlabs.ai/articles/nvidia-ai-gpu-pricing-guide)
11. Meta is using more than 100,000 Nvidia H100 AI GPUs to train Llama-4. Tom's Hardware (2024). Retrieved 2026 from [https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-is-using-more-than-100-000-nvidia-h100-ai-gpus-to-train-llama-4](https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-is-using-more-than-100-000-nvidia-h100-ai-gpus-to-train-llama-4)
12. AMD Instinct MI300X Accelerators. AMD. Retrieved 2026 from [https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html)
13. AMD announces MI350X and MI355X AI GPUs. Tom's Hardware (2025). Retrieved 2026 from [https://www.tomshardware.com/pc-components/gpus/amd-announces-mi350x-and-mi355x-ai-gpus-claims-up-to-4x-generational-gain-up-to-35x-faster-inference-performance](https://www.tomshardware.com/pc-components/gpus/amd-announces-mi350x-and-mi355x-ai-gpus-claims-up-to-4x-generational-gain-up-to-35x-faster-inference-performance)
14. Tensor Processing Unit. Wikipedia. Retrieved 2026 from [https://en.wikipedia.org/wiki/Tensor_Processing_Unit](https://en.wikipedia.org/wiki/Tensor_Processing_Unit)
15. Intel Gaudi 3 AI Accelerator White Paper. Intel. Retrieved 2026 from [https://www.intel.com/content/www/us/en/content-details/817486/intel-gaudi-3-ai-accelerator-white-paper.html](https://www.intel.com/content/www/us/en/content-details/817486/intel-gaudi-3-ai-accelerator-white-paper.html)
16. Groq LPU Architecture. Groq. Retrieved 2026 from [https://groq.com/lpu-architecture](https://groq.com/lpu-architecture)
17. NVIDIA H200 Tensor Core GPU Datasheet. NVIDIA. Retrieved 2026 from [https://www.nvidia.com/en-us/data-center/h200/](https://www.nvidia.com/en-us/data-center/h200/)
18. NVIDIA GB200 NVL72 Delivers Trillion-Parameter LLM Training and Real-Time Inference. NVIDIA Developer Blog. Retrieved 2026 from [https://developer.nvidia.com/blog/nvidia-gb200-nvl72-delivers-trillion-parameter-llm-training-and-real-time-inference/](https://developer.nvidia.com/blog/nvidia-gb200-nvl72-delivers-trillion-parameter-llm-training-and-real-time-inference/)
