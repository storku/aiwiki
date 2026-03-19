---
title: "AI Inference Optimization"
slug: "ai_inference_optimization"
categories:
  - "Artificial_intelligence"
  - "Machine_learning_terms"
  - "Terms"
---

**AI Inference Optimization** refers to a collection of techniques, algorithms, and systems designed to maximize the throughput, minimize the latency, and reduce the cost of running trained [artificial intelligence](/wiki/artificial_intelligence) models in production. As [large language models](/wiki/llm) (LLMs) have grown from billions to hundreds of billions of parameters, inference has become a major engineering and economic challenge. A single forward pass through a 70-billion-parameter model requires hundreds of billions of floating-point operations, and serving millions of users concurrently demands careful orchestration of hardware, memory, and compute resources.

The field has evolved rapidly since 2023, driven by the explosive growth of LLM-powered applications. Techniques such as continuous batching, KV-cache optimization, speculative decoding, and [quantization](/wiki/quantization) have become standard practice in production inference systems. Specialized serving frameworks like vLLM, TensorRT-LLM, and Text Generation Inference (TGI) have emerged to implement these optimizations, and purpose-built inference hardware from companies like Groq, AWS, and Google is challenging [NVIDIA](/wiki/nvidia)'s dominance in the inference market.

## Fundamentals of LLM Inference

Understanding inference optimization requires understanding how autoregressive language models generate text. LLMs produce output one token at a time, where each new token depends on all previous tokens. This process has two distinct phases:

**Prefill Phase:** The model processes the entire input prompt in a single forward pass, computing attention over all input tokens in parallel. This phase is compute-bound, as it involves large matrix multiplications across all layers of the model.

**Decode Phase:** The model generates output tokens one at a time. Each forward pass produces a single token and is memory-bandwidth-bound, because the model must read all its weights from memory but performs relatively little computation per weight.

This two-phase structure creates a fundamental tension: the prefill phase benefits from compute-heavy hardware, while the decode phase benefits from high memory bandwidth. Most optimization techniques target one or both of these phases.

### Key Performance Metrics

| Metric | Definition | Optimization Target |
|---|---|---|
| Time to First Token (TTFT) | Latency from request submission to first output token | Prefill speed |
| Inter-Token Latency (ITL) | Time between consecutive output tokens | Decode speed |
| Throughput | Total tokens generated per second across all requests | System utilization |
| Tokens per Second per User | Generation speed experienced by individual users | User experience |
| Cost per Million Tokens | Dollar cost to generate one million output tokens | Economic efficiency |

## Batching Strategies

Batching, the practice of processing multiple requests simultaneously, is one of the most impactful optimizations for inference throughput.

### Static Batching

In static (or naive) batching, the server collects a fixed number of requests into a batch, processes them together, and returns results only when all requests in the batch have completed. This approach wastes GPU resources because shorter sequences must wait for the longest sequence in the batch to finish before any results are returned.

### Continuous Batching

Continuous batching (also called iteration-level batching or in-flight batching) was introduced by the Orca paper (Yu et al., 2022) and has become the standard approach. Instead of waiting for an entire batch to complete, the scheduler inserts new requests into the batch as soon as existing requests finish. This keeps the GPU fully utilized and dramatically reduces latency for individual requests.

In practice, continuous batching can increase throughput by 2x to 10x compared to static batching, depending on the distribution of request lengths. Both vLLM and TensorRT-LLM implement continuous batching as a core feature.

### Chunked Prefill

Chunked prefill splits large input prompts into smaller chunks that are processed across multiple iterations, interleaved with decode steps from other requests. This prevents a single long-prompt request from blocking the decode phase for all other requests in the batch, maintaining low inter-token latency even when processing very long inputs.

## KV-Cache Optimization

The key-value (KV) cache is central to efficient autoregressive generation. During the decode phase, the model stores the key and value tensors from all previous tokens' attention computations, avoiding redundant recomputation. However, the KV cache consumes enormous amounts of GPU memory, often exceeding the memory used by the model weights themselves.

### The Memory Problem

For a model like Llama 2 70B with 80 layers, each with grouped-query attention, the KV cache for a single sequence of 4,096 tokens can consume several gigabytes of GPU memory. When serving hundreds of concurrent requests, KV-cache memory becomes the primary bottleneck limiting batch size and throughput. Traditional inference systems waste 60-80% of allocated KV-cache memory through fragmentation and over-allocation.

### PagedAttention

PagedAttention, introduced by vLLM (Kwon et al., 2023), is the most significant KV-cache optimization to date. Inspired by operating system virtual memory management, PagedAttention stores the KV cache in non-contiguous memory blocks (pages) rather than requiring a single contiguous allocation per sequence. This approach reduces memory waste from 60-80% to under 4%, enabling 2x to 4x higher throughput by allowing larger batch sizes.

PagedAttention works by maintaining a page table that maps logical KV-cache positions to physical memory blocks. When a sequence grows, new blocks are allocated on demand. When a sequence completes, its blocks are immediately freed and can be reused by other sequences.

### Prefix Caching

Prefix caching automatically detects and reuses KV-cache pages for identical prompt prefixes across different requests. When multiple users send requests with the same system prompt (a common pattern in production deployments), the KV cache for that shared prefix is computed once and shared across all requests. This can reduce prefill latency by 50-90% for workloads with common prefixes.

### KV-Cache Quantization

The KV cache can be stored at reduced precision (e.g., FP8 or INT8 instead of FP16) to reduce memory consumption. This technique trades a small amount of accuracy for significant memory savings, typically allowing 1.5x to 2x more concurrent sequences with minimal quality degradation.

### KV-Cache Offloading

When GPU memory is insufficient for the KV cache, portions can be offloaded to CPU memory or NVMe storage. NVIDIA reports that KV-cache offloading can deliver up to 14x faster time-to-first-token for large input sequences compared to recomputing the KV cache from scratch. This technique is particularly useful for very long context windows (e.g., 128K or 1M tokens).

### Advanced Techniques

Several newer approaches improve KV-cache efficiency further:

| Technique | Description | Benefit |
|---|---|---|
| PagedEviction (2025) | Block-wise eviction that removes low-importance KV blocks without modifying CUDA kernels | Reduces memory without quality loss |
| ChunkKV | Treats semantic chunks rather than isolated tokens as compression units | Preserves linguistic structures |
| Entropy-Guided Allocation | Allocates larger KV-cache budgets to higher-entropy attention layers | Better quality at same memory budget |
| KV-Cache Aware Routing | Directs requests to servers that already hold relevant KV-cache data | 87% cache hit rate, 88% faster TTFT |
| StaticCache | Pre-allocates cache for fixed maximum sequence length | Enables torch.compile optimization |

## Speculative Decoding

Speculative decoding addresses the fundamental inefficiency of autoregressive generation: each forward pass through a large model produces only a single token, leaving the GPU's compute capacity severely underutilized during the decode phase.

### How It Works

1. A small, fast "draft" model generates several candidate tokens (typically 3 to 8) in rapid succession.
2. The large "target" model verifies all candidate tokens in a single forward pass, accepting those that match its own distribution and rejecting the rest.
3. Generation continues from the last accepted token.

Because the verification step processes all candidate tokens in parallel (similar to the prefill phase), the cost of verifying multiple tokens is nearly the same as generating a single token. When the draft model's predictions are accurate, speculative decoding achieves 2x to 3x speedups with no change in output quality, since the target model's distribution is preserved exactly.

### Variants and Implementations

| Variant | Description | Framework Support |
|---|---|---|
| Standard Speculative Decoding | Separate draft and target models | vLLM, TensorRT-LLM, SGLang |
| Self-Speculative Decoding | Model uses its own early layers as the draft | Reduces memory overhead |
| EAGLE | Uses a lightweight prediction head trained on target model features | vLLM |
| P-EAGLE (2025) | Parallel draft generation, 1.05x to 1.69x speedup over vanilla EAGLE-3 | vLLM (AWS contribution) |
| Medusa | Adds multiple prediction heads to generate multiple candidate tokens simultaneously | TGI, vLLM |
| Lookahead Decoding | Uses Jacobi iteration to parallelize autoregressive generation | Research stage |

Speculative decoding has transitioned from a research technique to a production standard. It is now built into vLLM, SGLang, TensorRT-LLM, and most serious serving frameworks. AMD MI300X benchmarks showed 3.6x total improvement when combining FP8 [quantization](/wiki/quantization) with speculative decoding on Llama 3.1 405B.

## Quantization for Inference

[Quantization](/wiki/quantization) reduces the precision of model weights and/or activations from higher-precision formats (e.g., FP16) to lower-precision formats (e.g., INT8, INT4, FP8). This reduces memory consumption, increases memory bandwidth utilization, and accelerates computation on hardware that supports lower-precision arithmetic.

Common inference quantization approaches include:

| Method | Precision | Approach | Typical Quality Impact |
|---|---|---|---|
| GPTQ | INT4/INT8 | Post-training, weight-only | Minimal for most models |
| AWQ | INT4 | Activation-aware weight quantization | Very low |
| FP8 | FP8 (E4M3/E5M2) | Native hardware support on Hopper/Blackwell | Negligible |
| GGUF (llama.cpp) | Q4_K_M, Q5_K_M, etc. | CPU/GPU mixed precision | Depends on quantization level |
| SmoothQuant | INT8 | Activation smoothing + weight quantization | Low |
| bitsandbytes | NF4/INT8 | QLoRA-compatible, on-the-fly | Low for NF4 |

FP8 quantization on [NVIDIA Hopper and Blackwell GPUs](/wiki/nvidia_h100) is particularly attractive because it is natively supported by the hardware's Transformer Engine, requiring no specialized quantization procedure and producing negligible quality loss. The Blackwell architecture further introduces FP4 precision, which doubles inference throughput for supported workloads.

For a detailed treatment of quantization methods, see [Quantization](/wiki/quantization).

## Model Parallelism

When a model is too large to fit on a single GPU, or when higher throughput is needed, the model must be distributed across multiple devices. Several parallelism strategies exist, each with different trade-offs.

### Tensor Parallelism

Tensor parallelism (TP) splits individual layers of the model across multiple GPUs. During matrix multiplication, different slices of the weight matrix are processed simultaneously on different GPUs, and the results are combined via all-reduce communication. This approach reduces per-GPU memory requirements and increases compute throughput, but requires high-bandwidth interconnects (such as [NVLink](/wiki/nvidia_h100)) because GPUs must exchange partial results after every layer.

Tensor parallelism is the most common parallelism strategy for inference. For example, serving Llama 2 70B on 8 GPUs with 8-way tensor parallelism allows each GPU to hold only 1/8 of the model weights.

### Pipeline Parallelism

Pipeline parallelism (PP) divides the model's layers into sequential stages, each assigned to a different GPU. Data flows through the stages like an assembly line. This approach requires less inter-GPU communication than tensor parallelism (only between adjacent stages), but introduces pipeline bubbles where some GPUs are idle while waiting for data from the previous stage.

Pipeline parallelism is more commonly used for training than inference, but can be combined with tensor parallelism for very large models.

### Expert Parallelism

Expert parallelism is specific to [mixture-of-experts](/wiki/mixture_of_experts) (MoE) models, where different expert sub-networks are placed on different GPUs. A gating network routes each input to the appropriate expert(s). Because only a subset of experts is activated for any given input, expert parallelism can scale model size without proportionally increasing compute cost.

Expert parallelism has become increasingly important as MoE architectures have gained popularity in models like Mixtral, DeepSeek-V2, and GPT-4 (rumored to use a MoE architecture).

### Context Parallelism

Context parallelism distributes the processing of long sequences across multiple GPUs, with each GPU handling a portion of the sequence's attention computation. This technique is particularly valuable for very long context windows (e.g., 128K or 1M tokens). Meta published research in October 2025 on scaling LLM inference with innovations in tensor parallelism, context parallelism, and expert parallelism.

### Hybrid Parallelism

Production systems typically combine multiple parallelism strategies. For example, a system serving a 405B-parameter model might use 8-way tensor parallelism within a node (leveraging NVLink bandwidth) and 2-way pipeline parallelism across nodes (using InfiniBand).

## Serving Frameworks

Several open-source and commercial frameworks implement the optimization techniques described above.

### vLLM

vLLM (Virtual Large Language Model) is an open-source, high-throughput LLM serving engine originally developed at UC Berkeley's Sky Computing Lab. It introduced PagedAttention and has become one of the most widely used serving frameworks.

**Key Features:**
- PagedAttention for near-optimal KV-cache memory utilization (under 4% waste)
- Continuous batching with dynamic request scheduling
- Prefix caching for shared prompt prefixes
- Chunked prefill for mixed prefill/decode scheduling
- Tensor parallelism and pipeline parallelism
- Speculative decoding (standard, EAGLE, Medusa)
- Support for NVIDIA, AMD, and Intel GPUs, as well as AWS Neuron and Google TPU
- OpenAI-compatible API server

vLLM achieves up to 24x throughput improvements compared to HuggingFace Transformers and early versions of TGI. As of 2025, it is the default choice for many production LLM deployments.

### TensorRT-LLM

TensorRT-LLM is NVIDIA's inference optimization engine for LLMs, built on the TensorRT framework. It is designed to extract maximum performance from [NVIDIA GPUs](/wiki/nvidia_h100) through deep hardware-specific optimizations.

**Key Features:**
- Custom CUDA kernels optimized for NVIDIA Hopper and Blackwell architectures
- FP8 and FP4 quantization with hardware Transformer Engine support
- Continuous batching (in-flight batching)
- Speculative decoding with up to 3x throughput improvement
- KV-cache optimization including paged KV cache
- Multi-GPU support via tensor parallelism and pipeline parallelism
- Integration with NVIDIA Triton Inference Server

TensorRT-LLM delivers the highest performance on NVIDIA hardware but is NVIDIA-specific and requires more setup than vLLM.

### Text Generation Inference (TGI)

Text Generation Inference (TGI), developed by Hugging Face, is a serving toolkit integrated with the Hugging Face model ecosystem. It combines Flash Attention, PagedAttention, and continuous batching with streaming output via Server-Sent Events.

**Key Features:**
- Continuous batching with token streaming
- Flash Attention and Paged Attention
- Quantization support (bitsandbytes, GPTQ, AWQ, EETQ, FP8)
- Tensor parallelism for multi-GPU serving
- Guidance/structured output generation
- Safetensors support for faster model loading

TGI v3.0 demonstrated significant performance improvements, processing responses for prompts exceeding 200,000 tokens in 2 seconds compared to 27.5 seconds with vLLM in comparable settings. However, as of December 2025, TGI entered maintenance mode, with Hugging Face focusing development efforts on other projects. The TGI team has also introduced multi-backend support, allowing TensorRT-LLM and vLLM to serve as backends within the TGI framework.

### SGLang

SGLang (Structured Generation Language) is a serving framework developed at UC Berkeley that emphasizes structured output generation and efficient scheduling. It has shown marginally better performance than vLLM at moderate concurrency levels and includes a stronger draft model training pipeline via SpecForge.

### Framework Comparison

| Feature | vLLM | TensorRT-LLM | TGI | SGLang |
|---|---|---|---|---|
| PagedAttention | Yes | Yes (paged KV cache) | Yes | Yes |
| Continuous Batching | Yes | Yes | Yes | Yes |
| Speculative Decoding | Yes (multiple variants) | Yes | Yes | Yes (SpecForge) |
| Hardware Support | NVIDIA, AMD, Intel, TPU | NVIDIA only | NVIDIA, AMD | NVIDIA, AMD |
| Ease of Setup | High | Medium | High | Medium |
| Best For | General-purpose | Max NVIDIA performance | HuggingFace ecosystem | Structured outputs |
| Status (2025) | Active development | Active development | Maintenance mode | Active development |

## Inference-Specialized Hardware

While [NVIDIA GPUs](/wiki/nvidia_h100) dominate AI inference, several companies have developed hardware specifically optimized for inference workloads.

### Groq LPU

Groq's Language Processing Unit (LPU) uses a fundamentally different architecture from GPUs. Instead of HBM, the LPU stores model weights in hundreds of megabytes of on-chip SRAM, which provides vastly higher bandwidth (150 TB/s on the Groq 3 LPU) but much lower total capacity (500 MB).

| Specification | Groq 3 LPU |
|---|---|
| On-Chip Memory | 500 MB SRAM |
| Memory Bandwidth | 150 TB/s |
| INT8 Compute | 1.2 PFLOPS |
| Process Node | Samsung 4nm (LPU v2) |
| Key Advantage | Extremely low latency |

The LPU architecture delivers Llama 2 70B at 300 tokens per second, roughly 10x faster than H100 clusters. However, the limited on-chip memory means larger models must be distributed across many LPU chips, and the architecture is optimized for inference only (not training).

### AWS Inferentia and Trainium

Amazon Web Services develops custom AI accelerators available exclusively through AWS. See [AI Cloud Infrastructure](/wiki/ai_cloud_infrastructure) for detailed specifications.

| Chip | Use Case | FP16 Performance | Memory |
|---|---|---|---|
| Inferentia 2 | Inference | 190 TFLOPS | 32 GB HBM |
| Trainium 2 | Training | N/A | N/A |
| Trainium 3 | Training + Inference | 2.52 PFLOPS (FP8) | 144 GB HBM3e |

Trainium instances cost roughly half the price of comparable H100 instances, with 30-50% cost reduction for compatible workloads.

### Google TPU

Google's [Tensor Processing Units](/wiki/tensor_processing_unit) are custom ASICs optimized for matrix multiplication workloads. The latest TPU v6e (Trillium) delivers up to 4x better performance per dollar compared to the H100 for certain workloads. TPU v7 (Ironwood), announced in 2025, is specifically optimized for inference.

### Comparison of Inference Hardware

| Hardware | Strengths | Limitations | Best For |
|---|---|---|---|
| NVIDIA H100/B200 | Versatile, large ecosystem, training + inference | Expensive, high power | General-purpose, training |
| Groq LPU | Extremely low latency, deterministic performance | Limited memory, inference only | Latency-sensitive applications |
| AWS Inferentia 2 | Low cost on AWS, good for common model sizes | AWS-only, limited model support | Cost-sensitive AWS workloads |
| Google TPU v6e | Excellent perf/dollar, low power | Google Cloud only | Large-scale Google Cloud deployments |
| AMD MI300X | Large memory (192 GB), competitive performance | Smaller software ecosystem | Memory-bound inference workloads |

## Latency vs. Throughput Trade-offs

Optimizing for latency and optimizing for throughput often involve contradictory strategies, and production systems must carefully balance both.

### Latency Optimization

Low-latency serving prioritizes minimizing the time each individual user waits for a response. Key techniques include:

- **Smaller batch sizes** reduce queuing delay but waste GPU compute capacity
- **Tensor parallelism** across more GPUs reduces per-token latency by splitting computation
- **Speculative decoding** generates multiple tokens per forward pass
- **Prefix caching** eliminates redundant prefill computation
- **Streaming** delivers tokens to users as they are generated rather than waiting for the full response

### Throughput Optimization

High-throughput serving prioritizes maximizing the total number of tokens generated per second across all users. Key techniques include:

- **Large batch sizes** amortize the cost of reading model weights from memory
- **Continuous batching** keeps the GPU fully utilized
- **Quantization** reduces memory per request, allowing larger batches
- **PagedAttention** minimizes KV-cache waste, also allowing larger batches
- **Longer wait times** for batching (accumulating more requests before processing)

### The Trade-off in Practice

For interactive chatbot applications, latency is paramount, as users expect sub-second time-to-first-token. For batch processing (e.g., document summarization, data extraction), throughput is more important. Many production systems run separate infrastructure for latency-sensitive and throughput-sensitive workloads.

## Cost Optimization Strategies

LLM inference costs have declined approximately 10x annually, with GPT-4-equivalent performance dropping from $20 per million tokens in late 2022 to approximately $0.40 per million tokens by 2025. Despite these reductions, inference remains a significant cost at scale.

### Key Strategies

| Strategy | Description | Typical Savings |
|---|---|---|
| Quantization | Reduce model precision (FP16 to INT4/FP8) | 2x to 4x cost reduction |
| Model Distillation | Train a smaller model to match a larger model's behavior | 5x to 50x cost reduction |
| Prompt Caching | Cache and reuse KV states for common prompts | 50-90% for repeated prefixes |
| Request Routing | Route simple requests to smaller, cheaper models | 30-50% with quality-aware routing |
| Batching Optimization | Maximize GPU utilization through continuous batching | 2x to 10x throughput improvement |
| Spot/Preemptible Instances | Use discounted cloud instances for fault-tolerant workloads | 60-90% vs. on-demand |
| Self-Hosting | Deploy and manage your own inference infrastructure | Up to 6x cheaper at high volume |

### Managed vs. Self-Hosted Inference

The choice between using a managed API service (such as the [OpenAI](/wiki/openai) API or [Anthropic](/wiki/anthropic) API) and self-hosting inference infrastructure involves significant trade-offs.

**Managed API services** are ideal for low or variable traffic, rapid prototyping, and organizations without dedicated ML infrastructure teams. They offer zero infrastructure management, automatic scaling, and access to the latest models, but provide less control over latency, throughput, and data privacy.

**Self-hosted infrastructure** becomes cost-effective when processing over approximately 2 million tokens daily. Below that threshold, API costs are typically lower than infrastructure overhead. Self-hosting provides full control over data privacy, model selection, and optimization, but requires specialized MLOps expertise and significant upfront investment.

A practical rule of thumb: if your monthly inference spend with managed APIs exceeds the cost of renting dedicated GPU instances with sufficient utilization (typically 60% or higher), self-hosting is likely more economical.

## See Also

- [Large Language Model](/wiki/llm)
- [NVIDIA AI Accelerators](/wiki/nvidia_h100)
- [Quantization](/wiki/quantization)
- [Mixture of Experts](/wiki/mixture_of_experts)
- [Transformer](/wiki/transformer)
- [AI Cloud Infrastructure](/wiki/ai_cloud_infrastructure)
- [Edge AI](/wiki/edge_ai)
- [Pruning](/wiki/pruning)

## References

1. Kwon, W. et al. (2023). "Efficient Memory Management for Large Language Model Serving with PagedAttention." Proceedings of SOSP 2023. Retrieved 2026 from [https://vllm.ai/](https://vllm.ai/)
2. vLLM GitHub Repository. Retrieved 2026 from [https://github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)
3. Inside vLLM: Anatomy of a High-Throughput LLM Inference System. vLLM Blog (September 2025). Retrieved 2026 from [https://blog.vllm.ai/2025/09/05/anatomy-of-vllm.html](https://blog.vllm.ai/2025/09/05/anatomy-of-vllm.html)
4. TensorRT-LLM GitHub Repository. NVIDIA. Retrieved 2026 from [https://github.com/NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)
5. Text Generation Inference. Hugging Face. Retrieved 2026 from [https://huggingface.co/docs/text-generation-inference/en/index](https://huggingface.co/docs/text-generation-inference/en/index)
6. Speculative Decoding: 2-3x Faster LLM Inference (2026). Prem AI Blog. Retrieved 2026 from [https://blog.premai.io/speculative-decoding-2-3x-faster-llm-inference-2026/](https://blog.premai.io/speculative-decoding-2-3x-faster-llm-inference-2026/)
7. An Introduction to Speculative Decoding for Reducing Latency in AI Inference. NVIDIA Developer Blog. Retrieved 2026 from [https://developer.nvidia.com/blog/an-introduction-to-speculative-decoding-for-reducing-latency-in-ai-inference/](https://developer.nvidia.com/blog/an-introduction-to-speculative-decoding-for-reducing-latency-in-ai-inference/)
8. P-EAGLE: Faster LLM Inference with Parallel Speculative Decoding in vLLM. AWS Machine Learning Blog. Retrieved 2026 from [https://aws.amazon.com/blogs/machine-learning/p-eagle-faster-llm-inference-with-parallel-speculative-decoding-in-vllm/](https://aws.amazon.com/blogs/machine-learning/p-eagle-faster-llm-inference-with-parallel-speculative-decoding-in-vllm/)
9. KV Cache Optimization: Memory Efficiency for Production LLMs. Introl Blog. Retrieved 2026 from [https://introl.com/blog/kv-cache-optimization-memory-efficiency-production-llms-guide](https://introl.com/blog/kv-cache-optimization-memory-efficiency-production-llms-guide)
10. Data, Tensor, Pipeline, Expert and Hybrid Parallelism. BentoML LLM Inference Handbook. Retrieved 2026 from [https://bentoml.com/llm/inference-optimization/data-tensor-pipeline-expert-hybrid-parallelism](https://bentoml.com/llm/inference-optimization/data-tensor-pipeline-expert-hybrid-parallelism)
11. Scaling LLM Inference: Innovations in Tensor Parallelism, Context Parallelism, and Expert Parallelism. Meta Engineering (October 2025). Retrieved 2026 from [https://engineering.fb.com/2025/10/17/ai-research/scaling-llm-inference-innovations-tensor-parallelism-context-parallelism-expert-parallelism/](https://engineering.fb.com/2025/10/17/ai-research/scaling-llm-inference-innovations-tensor-parallelism-context-parallelism-expert-parallelism/)
12. Groq LPU Architecture. Groq. Retrieved 2026 from [https://groq.com/lpu-architecture](https://groq.com/lpu-architecture)
13. LLM Inference Optimization Techniques. Clarifai Guide. Retrieved 2026 from [https://www.clarifai.com/blog/llm-inference-optimization/](https://www.clarifai.com/blog/llm-inference-optimization/)
14. Hugging Face Releases Text Generation Inference (TGI) v3.0. MarkTechPost (December 2024). Retrieved 2026 from [https://www.marktechpost.com/2024/12/10/hugging-face-releases-text-generation-inference-tgi-v3-0-13x-faster-than-vllm-on-long-prompts/](https://www.marktechpost.com/2024/12/10/hugging-face-releases-text-generation-inference-tgi-v3-0-13x-faster-than-vllm-on-long-prompts/)
15. Serverless vs. Self-Hosted LLM Inference. BentoML LLM Inference Handbook. Retrieved 2026 from [https://bentoml.com/llm/llm-inference-basics/serverless-vs-self-hosted-llm-inference](https://bentoml.com/llm/llm-inference-basics/serverless-vs-self-hosted-llm-inference)
