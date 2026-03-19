---
title: "AI Cloud Infrastructure"
slug: "ai_cloud_infrastructure"
categories:
  - "Artificial_intelligence"
  - "Cloud_computing"
  - "Terms"
---

**AI Cloud Infrastructure** encompasses the cloud computing platforms, services, and hardware that organizations use to train, fine-tune, and serve [artificial intelligence](/wiki/artificial_intelligence) models. The market spans hyperscale providers (AWS, Google Cloud, Microsoft Azure), specialized GPU cloud providers (CoreWeave, Lambda Labs, Together AI), and managed AI platforms that abstract away infrastructure complexity. As AI workloads have grown to consume billions of dollars in compute annually, the choice of cloud infrastructure has become one of the most consequential decisions for AI-focused organizations.

The global cloud AI market has experienced explosive growth. Synergy Research Group found that GenAI-specific cloud services grew 140-180% year-over-year in the second quarter of 2025. AWS maintains approximately 30% of the overall cloud market, followed by Microsoft Azure at 20% and Google Cloud at 13%, though Azure and Google Cloud are growing faster in percentage terms, driven heavily by AI workloads.

## Hyperscale Cloud Providers

The three major hyperscale cloud providers each offer comprehensive AI infrastructure stacks, including GPU and custom AI chip instances, managed ML platforms, and hosted model APIs.

### Amazon Web Services (AWS)

AWS is the largest cloud provider by revenue and infrastructure footprint, with the most extensive global network of regions and availability zones. Its AI infrastructure encompasses custom silicon, managed ML platforms, and hosted model APIs.

#### Custom Silicon

AWS develops its own AI accelerators, manufactured by its Annapurna Labs subsidiary:

| Chip | Generation | Use Case | FP8 Performance | Memory | Process Node | Availability |
|---|---|---|---|---|---|---|
| Inferentia | 1st gen | Inference | N/A | N/A | N/A | EC2 Inf1 |
| Inferentia 2 | 2nd gen | Inference | N/A (190 TFLOPS FP16) | 32 GB HBM per chip | N/A | EC2 Inf2 |
| Trainium | 1st gen | Training | N/A | N/A | N/A | EC2 Trn1 |
| Trainium 2 | 2nd gen | Training | N/A | N/A | N/A | EC2 Trn2 |
| Trainium 3 | 3rd gen | Training + Inference | 2.52 PFLOPS | 144 GB HBM3e | 3nm | EC2 Trn3 (Dec 2025) |

Trainium 3, announced in December 2025, is AWS's first 3nm AI chip, purpose-built for next-generation agentic, reasoning, and video generation applications. A Trn3 UltraServer scales up to 144 Trainium 3 chips, delivering 362 FP8 PFLOPS, 20.7 TB of HBM3e, and 706 TB/s of aggregate memory bandwidth.

Trainium 4 is in development, with promised 6x FP4 throughput, 3x FP8 performance, and 4x memory bandwidth versus Trainium 3. Notably, Trainium 4 will support [NVIDIA](/wiki/nvidia) NVLink Fusion for hybrid deployments that mix Trainium and NVIDIA GPUs.

Trainium instances typically cost roughly half the price of comparable [NVIDIA H100](/wiki/nvidia_h100) instances, offering 30-50% cost reduction for compatible workloads.

#### Amazon SageMaker

SageMaker is AWS's fully managed machine learning platform, providing end-to-end ML workflow capabilities:

- **SageMaker Studio:** Integrated development environment for ML
- **SageMaker Training:** Managed training infrastructure with automatic scaling
- **SageMaker Endpoints:** Real-time model hosting with auto-scaling
- **SageMaker Pipelines:** ML workflow orchestration
- **SageMaker Model Monitor:** Automated model quality monitoring
- **SageMaker Ground Truth:** Data labeling service

SageMaker follows pay-as-you-go pricing based on instance usage (compute resources for training and hosting), storage, and data processing.

#### Amazon Bedrock

Bedrock is AWS's managed service for accessing foundation models from multiple providers without managing infrastructure:

- **Model access:** Hundreds of foundation models from [Anthropic](/wiki/anthropic) (Claude), [Meta](/wiki/meta) (Llama), Mistral AI, Amazon (Titan), Stability AI, and others
- **AgentCore:** Agentic platform for building, deploying, and operating AI agents
- **Knowledge Bases:** RAG (Retrieval-Augmented Generation) with managed vector databases
- **Guardrails:** Content filtering, PII detection, and safety controls
- **Model customization:** Fine-tuning and continued pre-training with customer data

Bedrock pricing is consumption-based with several models:

| Pricing Model | Description | Typical Use Case |
|---|---|---|
| On-Demand | Per-token pricing (input + output) | Variable, unpredictable workloads |
| Batch | 50% discount vs. on-demand | High-volume, non-real-time processing |
| Provisioned Throughput | Reserved capacity, per-hour pricing | Steady, high-volume production |
| Cross-Region Inference | Automatic routing to available capacity | High availability |

Bedrock also offers cost optimization features including distilled models (up to 500% faster, 75% less cost) and Intelligent Prompt Routing (up to 30% cost reduction with quality maintenance).

### Google Cloud

Google Cloud is the third-largest cloud provider by revenue but has the strongest AI research pedigree, having invented the [Transformer](/wiki/transformer) architecture and developed the Gemini model family. Google Cloud revenue grew 28% year-over-year in Q4 2025 to $12.8 billion, the fastest growth rate among the three major providers.

#### Tensor Processing Units (TPUs)

Google's TPUs are custom ASICs designed specifically for machine learning workloads. They are available exclusively through Google Cloud.

| TPU Generation | Compute per Chip | Memory per Chip | Max Pod Size | Key Features |
|---|---|---|---|---|
| TPU v4 | ~275 TFLOPS (BF16) | 32 GB HBM | 4,096 chips | Used for Gemini training |
| TPU v5e | ~197 TFLOPS (BF16) | 16 GB HBM | Scalable | Cost-optimized inference |
| TPU v5p | ~459 TFLOPS (BF16) | 95 GB HBM | 8,960 chips | Large-scale training |
| TPU v6e (Trillium) | ~918 TFLOPS (BF16) | 32 GB HBM | Scalable | 4.7x compute vs. v5e |
| TPU v7 (Ironwood) | N/A | N/A | Scalable | Inference-optimized (2025 Preview) |

TPU v6e (Trillium) delivers a 4.7x increase in compute performance per chip and 2x HBM capacity and bandwidth improvement over TPU v5e. Benchmarks show 4x+ training performance improvement for models like Gemma 2 27B and Llama 2 70B compared to v5e.

Google claims TPUs offer up to 4x better performance per dollar than NVIDIA H100 for certain workloads, with 60-65% lower power consumption than equivalent GPU configurations.

TPU pricing is based on core count, with options including on-demand, committed use (up to 57% discount for 3-year terms), and Flex-start (dynamic provisioning for up to 7 days without long-term reservations).

#### Vertex AI

Vertex AI is Google's end-to-end ML platform, providing:

- **Model Garden:** Access to Google's Gemini models, open-source models, and third-party models
- **Training:** Custom model training on TPUs and GPUs
- **Endpoints:** Managed model serving with auto-scaling
- **Pipelines:** ML workflow orchestration
- **Feature Store:** Centralized feature management
- **Vector Search:** Managed vector database for RAG applications
- **Generative AI Studio:** Interactive playground for prototyping with foundation models

#### Google-Specific Advantages

Google's primary advantage is vertical integration: the same company designs the TPU hardware, develops the TensorFlow and JAX frameworks, builds the Gemini models, and operates the cloud infrastructure. This allows Google to optimize across the full stack in ways that competitors using third-party hardware cannot.

### Microsoft Azure

Azure is the second-largest cloud provider and has the deepest integration with [OpenAI](/wiki/openai) through a multi-billion-dollar partnership. Azure's AI strategy centers on providing exclusive access to OpenAI's models while also building its own AI infrastructure.

#### OpenAI Partnership

The Microsoft-OpenAI partnership is one of the most significant relationships in the AI industry:

- Microsoft holds a 27% equity stake in OpenAI's for-profit entity (OpenAI Group PBC), valued at approximately $135 billion
- Azure is the exclusive cloud provider for OpenAI's stateless APIs
- OpenAI has contracted to purchase an incremental $250 billion of Azure services
- Microsoft has exclusive IP rights and Azure API exclusivity for OpenAI models through 2032
- OpenAI's products (including ChatGPT) are hosted on Azure infrastructure

#### Azure OpenAI Service

Azure OpenAI Service provides enterprise access to OpenAI's models with Azure's security, compliance, and networking capabilities:

- **Models available:** GPT-4o, GPT-4, GPT-3.5, DALL-E 3, Whisper, and text embedding models
- **Data privacy:** Customer data is not used to train OpenAI models; data processed within Azure's compliance boundary
- **Regional deployment:** Models can be deployed in specific Azure regions for data residency requirements
- **Content filtering:** Built-in content safety systems

Pricing follows two primary models:

| Model | Description | Best For |
|---|---|---|
| Pay-As-You-Go | Per-token pricing | Variable workloads, experimentation |
| Provisioned Throughput Units (PTUs) | Reserved capacity at fixed monthly rate ($2,448+/month per PTU) | High-volume production; 50-70% savings with annual commitments |

#### Azure AI Foundry (formerly Azure AI Studio)

Azure AI Foundry is Microsoft's comprehensive platform for building AI applications:

- **Model catalog:** Access to OpenAI, Meta Llama, Mistral, Phi, and other models
- **Prompt flow:** Visual tool for building LLM-powered workflows
- **Evaluation tools:** Automated model quality assessment
- **Content safety:** Built-in responsible AI tools
- **Fine-tuning:** Custom model training on Azure infrastructure

#### GPU Instances

Azure offers a range of GPU instances for AI workloads:

| Instance Series | GPU | Use Case |
|---|---|---|
| NC-series | NVIDIA T4 | Development, small inference |
| ND-series | NVIDIA A100 80GB | Training, large inference |
| ND H100 v5 | NVIDIA H100 | Large-scale training |
| ND H200 v5 | NVIDIA H200 | Memory-intensive workloads |

## Specialized GPU Cloud Providers

A new class of cloud providers has emerged that focuses exclusively on GPU infrastructure for AI workloads, often offering lower prices and faster access to the latest hardware compared to hyperscalers.

### CoreWeave

CoreWeave has grown from a niche GPU provider into a near-top-10 global cloud vendor, generating over $1 billion in quarterly cloud revenue from its AI infrastructure services as of Q3 2025. The company completed an IPO in 2025.

**Key Features:**
- Kubernetes-native infrastructure with instance spin-up times up to 35x faster than traditional VMs
- Enterprise-grade InfiniBand networking for distributed training
- NVIDIA H100, H200, and B200 GPU availability
- Up to 60% discounts for committed usage

**Pricing (December 2025):**

| GPU | On-Demand (per GPU/hr) | Notes |
|---|---|---|
| H100 PCIe | $4.76 | Single GPU |
| H100 HGX (8-GPU node) | $6.15 per GPU | Bundled with CPU/RAM |
| A100 80GB | Lower | Legacy workloads |

CoreWeave's primary customers are AI companies that need large, dedicated GPU clusters for training, where its InfiniBand networking and Kubernetes-native architecture provide advantages over hyperscaler general-purpose infrastructure.

### Lambda Labs

Lambda Labs (commonly referred to as Lambda) targets growth-stage AI companies with transparent, straightforward GPU cloud pricing and zero hidden fees.

**Key Features:**
- Purpose-built for deep learning with pre-configured environments
- On-demand and reserved GPU instances
- Lambda Stack (pre-installed CUDA, cuDNN, PyTorch, TensorFlow)
- Lambda GPU Cloud for training and inference

**Pricing:**

| GPU | On-Demand (per GPU/hr) |
|---|---|
| A100 PCIe 40GB | $1.25 |
| H100 SXM | $2.49 |
| H200 | Varies |

Lambda emphasizes a developer-friendly experience with minimal friction between idea and implementation.

### Together AI

Together AI positions itself as a platform for running open-source AI models, targeting startups and developers who want serverless access to a wide range of models without managing infrastructure.

**Key Features:**
- 100+ plug-and-play open-source models
- Serverless inference API (pay per token)
- Fine-tuning as a service
- GPU cluster rental for custom training
- OpenAI-compatible API endpoint

Together AI's business model involves renting GPU compute, adding optimization and a developer experience layer, and reselling it on a per-token basis.

### Other Notable Providers

| Provider | Focus | Key Differentiator |
|---|---|---|
| RunPod | GPU cloud for AI | Competitive pricing, community GPU marketplace |
| Vast.ai | GPU marketplace | Decentralized, lowest prices (from $1.87/hr for H100) |
| Modal | Serverless GPU compute | Pay-per-second billing, Python-native |
| Replicate | Model serving platform | One-click model deployment, pay per prediction |
| Cerebras | AI compute | Wafer-scale engine, inference-as-a-service |
| Fireworks AI | Inference API | Fast open-model serving, competitive pricing |

## GPU Cloud Pricing Comparison

The following table compares approximate H100 GPU pricing across major providers as of late 2025. Prices vary based on commitment level, region, and specific instance configuration.

| Provider | GPU | On-Demand (per GPU/hr) | Committed/Reserved | Notes |
|---|---|---|---|---|
| AWS (P5 instances) | H100 SXM | ~$3.90 | 1-3 year discounts available | Spot instances ~$2.00-$2.50 |
| Google Cloud | H100 SXM | ~$3.50 | Up to 57% discount (3-year) | Also offers TPU alternatives |
| Microsoft Azure | H100 SXM | ~$3.70 | PTU pricing for OpenAI models | Integrated with Azure OpenAI |
| CoreWeave | H100 HGX | ~$6.15 (per GPU in 8-GPU node) | Up to 60% discount | InfiniBand networking included |
| Lambda Labs | H100 SXM | $2.49 | Reserved pricing available | Pre-configured ML environment |
| Vast.ai | H100 | ~$1.87 | Marketplace pricing | Decentralized, variable availability |
| Atlas Cloud | H100 | $2.49 | Varies | Newer provider |

Note: AWS cut H100 pricing by approximately 44% in June 2025, triggering price reductions across the industry. Pricing is highly dynamic and subject to change.

## Managed vs. Self-Hosted Inference

Organizations deploying AI models in production must choose between using managed inference APIs and self-hosting their own infrastructure.

### Managed Inference (API Services)

Managed services such as OpenAI API, [Anthropic](/wiki/anthropic) API, Amazon Bedrock, Azure OpenAI, and Google Vertex AI handle all infrastructure, scaling, and optimization.

**Advantages:**
- Zero infrastructure management
- Automatic scaling for traffic spikes
- Access to the latest models without hardware upgrades
- Pay-per-use with no upfront investment
- Getting started requires only an API key and a few lines of code

**Disadvantages:**
- Higher per-token cost at scale
- Less control over latency and throughput
- Data must be sent to third-party servers
- Vendor lock-in risk
- Limited customization options

### Self-Hosted Inference

Self-hosting involves deploying models on your own GPU infrastructure (either on-premises or on rented cloud GPUs) using serving frameworks like [vLLM, TensorRT-LLM, or TGI](/wiki/ai_inference_optimization).

**Advantages:**
- Data stays within your secure environment
- Full control over model selection, optimization, and scaling
- Up to 6x lower cost than managed APIs when properly optimized at scale
- No per-token charges (fixed infrastructure cost)
- Ability to use any model, including custom-trained models

**Disadvantages:**
- Requires specialized MLOps expertise
- Hidden costs: ML engineering, monitoring, performance tuning
- Responsible for uptime, security, and scaling
- Hardware procurement lead times for on-premises deployments

### Decision Framework

| Factor | Choose Managed API | Choose Self-Hosted |
|---|---|---|
| Daily token volume | Under 2 million tokens | Over 2 million tokens |
| Monthly spend | Under $5,000 | Over $10,000 |
| Engineering team | No dedicated ML infrastructure team | Dedicated MLOps team |
| Data sensitivity | Non-sensitive, general data | Regulated, proprietary, or PII data |
| Latency requirements | Standard (100-500ms) | Ultra-low (under 50ms) |
| Model requirements | Standard models are sufficient | Custom or fine-tuned models needed |

## Sovereign Cloud Initiatives

Sovereign cloud refers to cloud infrastructure that operates within the legal, regulatory, and data residency requirements of a specific country or region. AI has intensified sovereign cloud demand, as governments seek to ensure that AI training data, model weights, and inference processing remain within national boundaries.

### Market Size and Growth

Worldwide sovereign cloud Infrastructure-as-a-Service (IaaS) spending is forecast to total $80 billion in 2026, a 35.6% increase from 2025 (Gartner). The highest growth rates are projected in the Middle East and Africa (89%), Mature Asia/Pacific (87%), and Europe (83%).

### European Initiatives

Europe has been the most active region in sovereign cloud and AI development:

- **EURO-3C Project:** A federated cloud and AI infrastructure project announced by Telefonica and backed by the European Commission, aimed at reducing European dependence on US cloud providers
- **AWS European Sovereign Cloud:** Launched in January 2026, providing a physically and logically separate AWS infrastructure within Europe
- **Nscale:** UK-headquartered sovereign AI infrastructure provider, championed by the UK government following its January 2025 AI opportunities action plan

According to Gartner's 2025 CIO and IT Leader Survey:
- 61% of CIOs in Western Europe plan to increase reliance on local cloud and AI providers
- 52% of Western European enterprises expect to accelerate investment in data sovereignty initiatives
- 47% are actively reevaluating non-European cloud dependencies

### Middle East Initiatives

Sovereign AI is emerging as a strategic priority in the Middle East, with governments investing in:
- National AI compute infrastructure
- Region-specific foundation models trained on Arabic-language data
- Data center construction to meet data residency requirements
- Partnerships with international technology companies for knowledge transfer

### Sovereign AI Providers

Several companies are positioning themselves specifically for sovereign AI workloads:

| Provider | Focus | Key Markets |
|---|---|---|
| Cerebras (CerebrasForNations) | Sovereign AI infrastructure | Global |
| Nscale | UK sovereign AI | United Kingdom |
| OVHcloud | European sovereign cloud | Europe |
| Scaleway | European AI cloud | France, Europe |
| G42 | Middle East AI | UAE, Middle East |

## Key Trends

### Custom AI Silicon

The major cloud providers are increasingly developing their own AI chips to reduce dependence on NVIDIA and lower costs:

| Provider | Training Chip | Inference Chip | Status |
|---|---|---|---|
| AWS | Trainium 3 (3nm, 2.52 PFLOPS FP8) | Inferentia 2 | Trainium 4 in development |
| Google | TPU v6e (Trillium) | TPU v5e, TPU v7 | TPU v7 in preview |
| Microsoft | Maia 100 | Maia 100 | Limited availability |
| Meta | MTIA v2 | MTIA v2 | Internal use only |

### Multi-Cloud and Hybrid Strategies

Organizations increasingly deploy AI workloads across multiple clouds to:
- Avoid vendor lock-in
- Access provider-specific capabilities (e.g., Google TPUs, Azure OpenAI)
- Meet data residency requirements
- Optimize costs by choosing the cheapest option for each workload

### Inference Cost Deflation

LLM inference costs have declined approximately 10x annually. This trend is driven by hardware improvements (each GPU generation offers 2-3x better performance per dollar), software optimizations (PagedAttention, speculative decoding, continuous batching), model efficiency improvements ([quantization](/wiki/quantization), distillation, MoE architectures), and increased competition among providers.

### GPU as a Service

The emergence of GPU cloud providers has created a new tier in the cloud market. Companies like CoreWeave have grown from niche providers to billion-dollar businesses by focusing exclusively on AI compute infrastructure, offering lower prices and faster access to the latest GPUs compared to hyperscalers.

## See Also

- [Artificial Intelligence](/wiki/artificial_intelligence)
- [NVIDIA AI Accelerators](/wiki/nvidia_h100)
- [AI Inference Optimization](/wiki/ai_inference_optimization)
- [Edge AI](/wiki/edge_ai)
- [Large Language Model](/wiki/llm)
- [Quantization](/wiki/quantization)
- [Transformer](/wiki/transformer)

## References

1. Cloud Market Share 2026: Top Cloud Providers and Trends. Holori. Retrieved 2026 from [https://holori.com/cloud-market-share-2026-top-cloud-vendors-in-2026/](https://holori.com/cloud-market-share-2026-top-cloud-vendors-in-2026/)
2. AWS vs Azure vs Google Cloud: Comprehensive Comparison for 2026. Northflank. Retrieved 2026 from [https://northflank.com/blog/aws-vs-azure-vs-google-cloud](https://northflank.com/blog/aws-vs-azure-vs-google-cloud)
3. Top 12 Cloud GPU Providers for AI and Machine Learning in 2026. RunPod. Retrieved 2026 from [https://www.runpod.io/articles/guides/top-cloud-gpu-providers](https://www.runpod.io/articles/guides/top-cloud-gpu-providers)
4. Amazon Bedrock. AWS. Retrieved 2026 from [https://aws.amazon.com/bedrock/](https://aws.amazon.com/bedrock/)
5. Amazon Bedrock Pricing. AWS. Retrieved 2026 from [https://aws.amazon.com/bedrock/pricing/](https://aws.amazon.com/bedrock/pricing/)
6. AI Accelerator: AWS Trainium. AWS. Retrieved 2026 from [https://aws.amazon.com/ai/machine-learning/trainium/](https://aws.amazon.com/ai/machine-learning/trainium/)
7. Announcing Amazon EC2 Trn3 UltraServers. AWS (December 2025). Retrieved 2026 from [https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-ec2-trn3-ultraservers/](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-ec2-trn3-ultraservers/)
8. Tensor Processing Units (TPUs). Google Cloud. Retrieved 2026 from [https://cloud.google.com/tpu](https://cloud.google.com/tpu)
9. Trillium Sixth-Generation TPU Is in Preview. Google Cloud Blog. Retrieved 2026 from [https://cloud.google.com/blog/products/compute/trillium-sixth-generation-tpu-is-in-preview](https://cloud.google.com/blog/products/compute/trillium-sixth-generation-tpu-is-in-preview)
10. Vertex AI Pricing. Google Cloud. Retrieved 2026 from [https://cloud.google.com/vertex-ai/pricing](https://cloud.google.com/vertex-ai/pricing)
11. The Next Chapter of the Microsoft-OpenAI Partnership. Microsoft Blog (October 2025). Retrieved 2026 from [https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/](https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/)
12. Azure OpenAI Service Pricing. Microsoft Azure. Retrieved 2026 from [https://azure.microsoft.com/en-us/pricing/details/azure-openai/](https://azure.microsoft.com/en-us/pricing/details/azure-openai/)
13. CoreWeave Cloud Pricing. CoreWeave. Retrieved 2026 from [https://www.coreweave.com/pricing](https://www.coreweave.com/pricing)
14. AI Cloud Pricing. Lambda. Retrieved 2026 from [https://lambda.ai/pricing](https://lambda.ai/pricing)
15. CoreWeave vs Lambda Labs GPU Cloud Pricing 2025. ComputePrices. Retrieved 2026 from [https://computeprices.com/compare/coreweave-vs-lambda](https://computeprices.com/compare/coreweave-vs-lambda)
16. Gartner Says Worldwide Sovereign Cloud IaaS Spending Will Total $80 Billion in 2026. Gartner (February 2026). Retrieved 2026 from [https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026](https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026)
17. Europe Unites to Build Sovereign Cloud and AI Infrastructure. Euronews (March 2026). Retrieved 2026 from [https://www.euronews.com/next/2026/03/03/europe-unites-to-build-sovereign-cloud-and-ai-infrastructure-to-stop-reliance-on-us](https://www.euronews.com/next/2026/03/03/europe-unites-to-build-sovereign-cloud-and-ai-infrastructure-to-stop-reliance-on-us)
18. Sovereign Cloud and AI Services Tipped for Take-Off in 2026. Computer Weekly. Retrieved 2026 from [https://www.computerweekly.com/feature/Sovereign-cloud-and-AI-services-tipped-for-take-off-in-2026](https://www.computerweekly.com/feature/Sovereign-cloud-and-AI-services-tipped-for-take-off-in-2026)
19. H100 Rental Prices Compared Across 15+ Cloud Providers (2026). IntuitionLabs. Retrieved 2026 from [https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison](https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison)
20. Serverless vs. Self-Hosted LLM Inference. BentoML LLM Inference Handbook. Retrieved 2026 from [https://bentoml.com/llm/llm-inference-basics/serverless-vs-self-hosted-llm-inference](https://bentoml.com/llm/llm-inference-basics/serverless-vs-self-hosted-llm-inference)
