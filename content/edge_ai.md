---
title: "Edge AI"
slug: "edge_ai"
categories:
  - "Artificial_intelligence"
  - "Edge_computing"
  - "Terms"
---

**Edge AI** refers to the deployment and execution of [artificial intelligence](/wiki/artificial_intelligence) models directly on local devices (such as smartphones, embedded systems, vehicles, and IoT sensors) rather than relying on cloud-based servers for inference. By processing data locally, edge AI reduces latency, improves privacy, enables offline operation, and lowers bandwidth costs. The approach has become increasingly practical as advances in hardware (dedicated neural processing units), model compression ([quantization](/wiki/quantization), [pruning](/wiki/pruning), knowledge distillation), and efficient model architectures have made it possible to run capable AI models on devices with limited compute and memory resources.

The edge AI hardware market reached approximately $5.2 billion in 2025 and is projected to grow to $10.1 billion by 2030. Custom ASICs for edge inference alone generated nearly $7.8 billion in revenue in 2025. This growth is driven by the proliferation of AI-powered features in smartphones, the expansion of autonomous driving systems, and the deployment of intelligent IoT devices across industries.

## Definition and Core Concepts

Edge AI is distinguished from cloud AI by where the computation occurs. In cloud AI, data is sent from the device to a remote data center for processing, and results are returned over the network. In edge AI, the model runs locally on the device itself (or on a nearby edge server), and no data leaves the device.

| Characteristic | Cloud AI | Edge AI |
|---|---|---|
| Processing Location | Remote data center | On-device or local server |
| Latency | Tens to hundreds of milliseconds (network round trip) | Single-digit milliseconds |
| Privacy | Data sent to third-party servers | Data stays on device |
| Connectivity Required | Yes (always online) | No (can work offline) |
| Compute Power | Virtually unlimited | Constrained by device hardware |
| Model Size | Hundreds of billions of parameters | Typically under 10 billion parameters |
| Power Budget | Hundreds of watts per GPU | Milliwatts to single-digit watts |
| Cost Model | Per-request API charges | One-time hardware cost |

A hybrid approach, sometimes called "edge-to-cloud" or "tiered AI," is increasingly common. In this model, edge devices handle latency-sensitive, privacy-critical, or bandwidth-intensive tasks locally, while more complex tasks are offloaded to the cloud. For example, a smartphone might run a small [language model](/wiki/llm) on-device for quick text suggestions while routing complex multi-turn conversations to a cloud-hosted model.

## On-Device AI Systems

Major technology companies have invested heavily in on-device AI capabilities, integrating AI features that run entirely on the user's device.

### Apple Intelligence

Apple Intelligence, announced in 2024 and expanded throughout 2025, is Apple's comprehensive on-device AI system. It runs a roughly 3-billion-parameter language model on-device for text summarization, rewriting, and Smart Reply on iPhone 15 Pro and later devices.

Key characteristics:

- Runs on devices with the A17 Pro chip or later (iPhone) and M1 or later (Mac/iPad)
- On-device model handles text summarization, message composition, notification prioritization, and writing tools
- More complex requests are routed to Apple's Private Cloud Compute, which processes data on Apple Silicon servers with cryptographic guarantees that Apple cannot access user data
- Core ML serves as the runtime for model execution on Apple hardware
- Integrates with system-level features across iOS, macOS, and iPadOS

### Google On-Device AI (Gemini Nano)

Gemini Nano is [Google](/wiki/google)'s smallest AI model, designed specifically for on-device inference on Android smartphones. It is part of the broader [Gemini](/wiki/gemini) model family.

Key characteristics:

- Runs entirely on-device with no data sent to Google's servers
- Functions offline without an active internet connection
- Multimodal capabilities, able to process text, images, and audio
- Powers features including Smart Reply in Google Messages, summarization in the Recorder app, and scam call detection
- Available on Pixel 9 series and later devices, powered by Google's Tensor G4 and G5 chips
- Accessible to Android developers through on-device GenAI APIs as part of ML Kit

### Qualcomm On-Device AI

Qualcomm provides the AI silicon for the majority of Android smartphones through its Snapdragon platform, which includes the Hexagon NPU designed specifically for AI workloads.

The Snapdragon 8 Elite (October 2024) demonstrated running a 13-billion-parameter LLM locally on a smartphone at over 20 tokens per second using the Hexagon NPU's 45 TOPS rating. The platform supports over 1,000 models, 300+ AI-powered user experiences, and more than 100 optimized applications.

## Edge AI Hardware

Edge AI hardware encompasses a range of specialized processors designed to accelerate neural network computations within tight power and thermal constraints.

### Neural Processing Units (NPUs)

An NPU (Neural Processing Unit) is a dedicated accelerator optimized for the matrix multiplication and convolution operations that dominate neural network inference. Unlike general-purpose CPUs or GPUs, NPUs are designed to maximize operations per watt, making them suitable for always-on AI tasks in battery-powered devices.

NPU performance is typically measured in TOPS (Tera Operations Per Second), representing trillions of integer or fixed-point operations per second.

### Mobile and PC NPUs

| Processor | NPU Name | TOPS (INT8) | Process Node | Platform | Key Features |
|---|---|---|---|---|---|
| Apple A17 Pro | Neural Engine (16-core) | 35 TOPS | TSMC 3nm | iPhone 15 Pro | Apple Intelligence, Core ML |
| Apple M4 | Neural Engine (16-core) | 38 TOPS | TSMC 3nm | iPad Pro, MacBook Pro | Apple Intelligence, Core ML |
| Qualcomm Snapdragon 8 Elite | Hexagon NPU | 45 TOPS | TSMC 3nm | Android flagships | 13B parameter LLM on-device |
| Qualcomm Snapdragon X2 Elite | Hexagon NPU | 80 TOPS | N/A | Windows PCs | 143% scalar throughput improvement |
| MediaTek Dimensity 9400+ | NPU 890 | 50+ TOPS | TSMC 3nm | Android flagships | MoE support, FP8, SpD+ |
| MediaTek Dimensity 9500 | NPU 990 | N/A | TSMC 3nm | Android flagships | BitNet 1.58-bit, 2x compute power |
| Intel Core Ultra (Meteor Lake) | Intel NPU | 34 TOPS | Intel 4 | Windows PCs | VNNI, Copilot+ support |
| AMD Ryzen AI 300 | XDNA 2 NPU | 50 TOPS | TSMC 4nm | Windows PCs | Block FP16 support |

### Apple Neural Engine

Apple's Neural Engine is a dedicated NPU integrated into every Apple Silicon chip (A-series for iPhone, M-series for Mac and iPad). It has evolved significantly across generations:

| Chip | Neural Engine Cores | TOPS | Year | Notable Capability |
|---|---|---|---|---|
| A11 Bionic | 2 cores | 0.6 TOPS | 2017 | Face ID |
| A12 Bionic | 8 cores | 5 TOPS | 2018 | Enhanced ML |
| A14 Bionic | 16 cores | 11 TOPS | 2020 | On-device translation |
| A15 Bionic | 16 cores | 15.8 TOPS | 2021 | Cinematic mode |
| A16 Bionic | 16 cores | 17 TOPS | 2022 | Enhanced photo processing |
| A17 Pro | 16 cores | 35 TOPS | 2023 | Apple Intelligence |
| M1 | 16 cores | 11 TOPS | 2020 | First Mac Neural Engine |
| M2 | 16 cores | 15.8 TOPS | 2022 | Enhanced ML |
| M3 | 16 cores | 18 TOPS | 2023 | Dynamic caching |
| M4 | 16 cores | 38 TOPS | 2024 | Apple Intelligence |

The Neural Engine operates through Apple's Core ML framework, which automatically schedules workloads across the Neural Engine, GPU, and CPU based on model characteristics and available resources.

### Qualcomm Hexagon NPU

Qualcomm's Hexagon NPU is the AI processing unit within the Snapdragon family of mobile processors. It combines scalar, vector, and tensor processing units to handle diverse AI workloads.

The Snapdragon X2 Elite (released late 2025 for Windows PCs) delivers up to 80 TOPS, with improvements of 143% in scalar throughput, 127% in bus bandwidth, 143% in vector throughput, and 78% in matrix throughput compared to the first-generation Snapdragon X Elite.

### MediaTek APU

MediaTek's AI Processing Unit (APU) powers the Dimensity series of mobile processors. The latest Dimensity 9500 integrates the NPU 990 with Generative AI Engine 2.0, enabling BitNet 1.58-bit model processing (a novel ultra-low-precision format), 2x the compute power of its predecessor, support for 128K-token text handling, and 4K image generation, all with up to 56% lower peak power usage.

The Dimensity 9400+ features the NPU 890, which supports [Mixture-of-Experts](/wiki/mixture_of_experts) (MoE) models, Multi-Head Latent Attention, Multi-Token Prediction, and FP8 inferencing with speculative decoding.

### Embedded and Automotive AI Hardware

For robotics, automotive, and industrial applications, several platforms provide higher compute budgets in ruggedized form factors:

| Platform | Manufacturer | AI Performance | Power | Key Applications |
|---|---|---|---|---|
| Jetson AGX Orin | [NVIDIA](/wiki/nvidia) | 275 TOPS (INT8) | 15-60W | Robotics, autonomous vehicles |
| Jetson Orin Nano | NVIDIA | 40 TOPS (INT8) | 7-15W | Entry-level edge AI |
| Edge TPU | Google | 4 TOPS (INT8) | 2W | Vision, keyword detection |
| Hailo-8 | Hailo | 26 TOPS (INT8) | 2.5W | Video analytics, smart cameras |
| Qualcomm RB5 | Qualcomm | 15 TOPS | 5W | Robotics, drones |

## Small Language Models for Edge Deployment

The development of compact yet capable language models has been crucial for enabling on-device AI. Models under 10 billion parameters have become remarkably capable, with some matching the performance of previous-generation models that were 10x larger.

### Key Models

| Model | Developer | Parameters | Key Strengths | Edge Suitability |
|---|---|---|---|---|
| Phi-4-mini | Microsoft | 3.8B | 83.7% ARC-C, 88.6% GSM8K; strong reasoning | Excellent |
| Gemma 3n E4B | Google | 8B (4B effective) | First under-10B model to break 1300 LMArena Elo; ~3 GB memory | Excellent |
| Gemma 2 2B | Google | 2B | Compact, multilingual | Excellent |
| Llama 3.2 1B | [Meta](/wiki/meta) | 1B | Smallest Llama; 2-3 GB quantized | Excellent |
| Llama 3.2 3B | Meta | 3B | Stronger than 1B; good instruction following | Very good |
| Qwen 3 0.6B | Alibaba | 0.6B | Ultra-compact, multilingual | Excellent |
| SmolLM2 | Hugging Face | 135M to 1.7B | Purpose-built for edge | Excellent |

**Phi-4-mini** (3.8B parameters) from Microsoft scores 83.7% on ARC-C and 88.6% on GSM8K, making it one of the strongest small models for reasoning-heavy workloads.

**Gemma 3n E4B** from Google has 8 billion raw parameters but uses a novel architecture that runs with the memory footprint of a 4B model (roughly 3 GB). It is the first model under 10 billion parameters to exceed 1300 Elo on the LMArena benchmark.

**Llama 3.2** from Meta comes in 1B and 3B variants. A quantized 1B model fits in 2-3 GB of memory, making it practical for on-device inference on smartphones.

### Performance Characteristics

With INT4 quantization, models like Gemma 3 1B can run at 2,585 tokens per second on mobile GPUs. Any machine with 8 GB of RAM can run models under 10B parameters at Q4 quantization.

## Edge AI Frameworks and Runtimes

Several frameworks and runtimes are available for deploying AI models on edge devices, each optimized for different hardware platforms and use cases.

### TensorFlow Lite (LiteRT)

TensorFlow Lite, now branded as LiteRT, is Google's lightweight inference framework for running models on mobile and embedded devices. It is part of the broader [TensorFlow](/wiki/tensorflow) ecosystem.

**Key Features:**
- Model optimization tools (quantization, pruning, clustering)
- Delegates API for hardware acceleration (GPU, DSP, NPU, Edge TPU)
- Support for Android, iOS, Linux, and microcontrollers
- TensorFlow Lite Micro for microcontroller-class devices
- Integration with Google's MediaPipe for pre-built ML pipelines

### ONNX Runtime

ONNX Runtime, developed by Microsoft, is a cross-platform runtime for models in the Open Neural Network Exchange (ONNX) format. Its primary advantage is cross-framework interoperability: models trained in [PyTorch](/wiki/pytorch), TensorFlow, Scikit-learn, or other frameworks can be converted to ONNX and deployed through a single runtime.

**Key Features:**
- Cross-framework support (PyTorch, TensorFlow, Scikit-learn, XGBoost)
- Execution providers for diverse hardware (CPU, GPU, NPU, FPGA)
- ONNX Runtime Web for browser-based inference
- Optimization for large language models and generative AI on devices with NPUs
- Support for Windows, Linux, macOS, Android, and iOS

### Core ML

Core ML is Apple's machine learning framework for the Apple ecosystem (iOS, macOS, watchOS, tvOS). It provides deep integration with Apple Silicon, automatically scheduling workloads across the Neural Engine, GPU, and CPU.

**Key Features:**
- Native Apple Silicon optimization (Neural Engine, GPU, CPU)
- Model conversion tools (coremltools) from PyTorch, TensorFlow, and ONNX
- On-device model personalization and fine-tuning
- Privacy-preserving design (all inference on-device)
- Tight integration with other Apple frameworks (Vision, Natural Language, Sound Analysis)

### ExecuTorch

ExecuTorch, developed by Meta, is PyTorch's native on-device inference framework. It reached 1.0 General Availability in October 2025 and supports 12+ hardware backends, including Apple, Qualcomm, Arm, MediaTek, and Vulkan, with over 80% of popular edge models working out of the box.

### Local Inference Tools

For desktop and laptop deployment, several tools enable running models locally:

| Tool | Description | Platforms |
|---|---|---|
| Ollama | User-friendly local model runner | macOS, Linux, Windows |
| llama.cpp | High-performance C++ inference engine | Cross-platform |
| LM Studio | GUI-based local model manager | macOS, Windows, Linux |
| PocketPal AI | Mobile app for offline model inference | iOS, Android |

### Framework Comparison

| Framework | Developer | Primary Platform | Strengths | Limitations |
|---|---|---|---|---|
| TensorFlow Lite (LiteRT) | Google | Android, embedded | Mature ecosystem, wide hardware support | Primarily Google ecosystem |
| ONNX Runtime | Microsoft | Cross-platform | Framework interoperability, NPU optimization | Conversion complexity |
| Core ML | Apple | Apple devices | Deep Apple Silicon integration | Apple-only |
| ExecuTorch | Meta | Mobile, embedded | PyTorch-native, 12+ backends | Newer, smaller ecosystem |

## Applications

### Smartphones

Smartphones are the largest deployment platform for edge AI. Modern flagship phones integrate NPUs that power:

- **Camera processing:** Computational photography, night mode, portrait mode, scene detection
- **Voice assistants:** On-device wake word detection and speech recognition
- **Text processing:** Autocomplete, Smart Reply, text summarization, translation
- **Privacy features:** On-device face recognition (Face ID, face unlock)
- **Health monitoring:** Fall detection, heart rate estimation from camera
- **Accessibility:** Real-time captioning, sound recognition

### Automotive and Autonomous Driving

Edge AI is critical for automotive applications where millisecond-level latency is a safety requirement. Cloud-based processing introduces unacceptable delays for real-time driving decisions.

The edge computing market for autonomous vehicles reached $7.64 billion in 2024 and is expected to reach $39 billion by 2032. The transition from SAE Level 2+ to Level 3 (conditional automation, where the vehicle takes responsibility in some scenarios) is a key driver, as it demands more reliable and capable edge AI.

Key automotive edge AI applications include:

- **Object detection and classification:** Identifying pedestrians, vehicles, cyclists, and obstacles in real time
- **Lane detection and tracking:** Maintaining vehicle position within lane boundaries
- **Sensor fusion:** Combining data from cameras, LiDAR, radar, and ultrasonic sensors
- **Path planning:** Computing optimal driving trajectories
- **Driver monitoring:** Detecting drowsiness, distraction, or medical emergencies

NVIDIA's Jetson AGX Orin and its DRIVE platform, along with Qualcomm's Snapdragon Ride, are among the leading automotive edge AI platforms.

### Robotics

Edge AI enables robots to perceive, reason, and act in real time without depending on cloud connectivity. This is essential for robots operating in environments with unreliable network access (warehouses, construction sites, disaster zones) or where latency requirements preclude cloud round trips.

Applications include real-time navigation and obstacle avoidance, object manipulation and grasping, human-robot interaction through speech and gesture recognition, and simultaneous localization and mapping (SLAM).

NVIDIA Jetson AGX Orin and Qualcomm RB5 provide the performance required for real-time navigation, object detection, and path planning in robotic systems.

### Internet of Things (IoT)

Edge AI transforms IoT devices from simple data collectors into intelligent, autonomous systems:

- **Predictive maintenance:** Analyzing vibration, temperature, and acoustic sensor data to predict equipment failures before they occur
- **Quality control:** Real-time visual inspection on manufacturing lines
- **Smart agriculture:** Crop monitoring, pest detection, and irrigation optimization
- **Environmental monitoring:** Air quality analysis, wildlife detection, and weather prediction
- **Smart buildings:** Occupancy detection, energy optimization, and security monitoring

### Wearables and Health

On-device AI in wearables enables continuous health monitoring without cloud dependency:

- **ECG analysis:** Detecting atrial fibrillation on smartwatches
- **Blood oxygen estimation:** Pulse oximetry using optical sensors
- **Activity recognition:** Classifying exercise types and counting repetitions
- **Sleep analysis:** Monitoring sleep stages using accelerometer and heart rate data

## Privacy and Latency Benefits

### Privacy

Edge AI provides inherent privacy advantages because data never leaves the user's device. This is particularly important for:

- **Sensitive personal data:** Health information, financial data, personal conversations
- **Regulatory compliance:** GDPR, HIPAA, and other data protection regulations that restrict data transfer
- **User trust:** Users increasingly prefer AI features that process data locally
- **Enterprise security:** Organizations that cannot allow proprietary data to leave their network

Apple Intelligence exemplifies this approach: on-device processing handles the majority of AI tasks, and when cloud processing is necessary, Apple's Private Cloud Compute uses Apple Silicon servers with cryptographic guarantees that prevent Apple from accessing user data.

### Latency

On-device inference eliminates network round-trip latency entirely. While cloud AI typically requires 50-200 milliseconds for a network round trip (and potentially more on congested or distant networks), on-device inference can complete in single-digit milliseconds.

This is critical for:

- **Real-time interaction:** Autocomplete suggestions, voice recognition
- **Safety-critical systems:** Autonomous driving, industrial robotics
- **Augmented reality:** Object recognition and scene understanding overlaid on camera feeds
- **Gaming:** AI-powered NPC behavior, real-time style transfer

### Bandwidth and Cost

Edge AI reduces bandwidth requirements by processing data locally rather than transmitting raw sensor data (images, video, audio) to the cloud. For applications like video analytics, where each camera generates gigabytes of data per hour, local processing dramatically reduces network and cloud costs.

## Challenges and Limitations

Despite its benefits, edge AI faces several significant challenges:

| Challenge | Description |
|---|---|
| Limited compute | Edge devices have far less compute than data center GPUs, constraining model size and complexity |
| Memory constraints | Smartphones typically have 6-12 GB of shared RAM; models must fit alongside the operating system and applications |
| Power budget | Battery-powered devices require extreme power efficiency; running large models drains batteries quickly |
| Model updates | Updating on-device models requires careful over-the-air update mechanisms |
| Hardware fragmentation | The diversity of NPU architectures complicates cross-device deployment |
| Quality gap | Small models inevitably sacrifice some capability compared to large cloud-hosted models |
| Thermal throttling | Sustained AI workloads generate heat that can cause performance reduction on passively cooled devices |

## Future Trends

Several trends are shaping the future of edge AI:

**Ultra-low-precision inference:** BitNet 1.58-bit and similar approaches (as implemented in MediaTek's Dimensity 9500) promise to dramatically reduce model size and compute requirements, enabling larger models on edge devices.

**Federated learning:** On-device model personalization without sending raw data to the cloud, allowing models to improve from local usage patterns while preserving privacy.

**Edge-to-cloud hybrid architectures:** Dynamic routing of tasks between edge and cloud based on complexity, latency requirements, and connectivity status.

**Specialized edge SoCs:** Continued investment in NPU performance, with TOPS ratings doubling approximately every two years across major chipmakers.

**Generative AI on edge:** The ability to run multi-billion-parameter generative models (text, image, audio) on-device is expanding rapidly, with 13B-parameter models already running on flagship smartphones.

## See Also

- [Artificial Intelligence](/wiki/artificial_intelligence)
- [AI Inference Optimization](/wiki/ai_inference_optimization)
- [NVIDIA AI Accelerators](/wiki/nvidia_h100)
- [Quantization](/wiki/quantization)
- [Pruning](/wiki/pruning)
- [Large Language Model](/wiki/llm)
- [AI Cloud Infrastructure](/wiki/ai_cloud_infrastructure)
- [Mixture of Experts](/wiki/mixture_of_experts)
- [Transformer](/wiki/transformer)

## References

1. Edge AI Hardware Market Size and Forecast 2025-2034. Global Market Insights. Retrieved 2026 from [https://www.gminsights.com/industry-analysis/edge-ai-hardware-market](https://www.gminsights.com/industry-analysis/edge-ai-hardware-market)
2. Edge AI and On-Device AI 2026: The Complete Guide. Calmops. Retrieved 2026 from [https://calmops.com/ai/edge-ai-on-device-ai-2026-complete-guide/](https://calmops.com/ai/edge-ai-on-device-ai-2026-complete-guide/)
3. Apple Intelligence. Wikipedia. Retrieved 2026 from [https://en.wikipedia.org/wiki/Apple_Intelligence](https://en.wikipedia.org/wiki/Apple_Intelligence)
4. The latest Gemini Nano with on-device ML Kit GenAI APIs. Android Developers Blog (August 2025). Retrieved 2026 from [https://android-developers.googleblog.com/2025/08/the-latest-gemini-nano-with-on-device-ml-kit-genai-apis.html](https://android-developers.googleblog.com/2025/08/the-latest-gemini-nano-with-on-device-ml-kit-genai-apis.html)
5. Qualcomm Hexagon NPU. Qualcomm. Retrieved 2026 from [https://www.qualcomm.com/processors/hexagon](https://www.qualcomm.com/processors/hexagon)
6. Snapdragon X2 Elite Deep Dive. SoyaCincau (December 2025). Retrieved 2026 from [https://soyacincau.com/2025/12/02/snapdragon-x2-elite-deep-dive-qualcomms-biggest-leap-yet/](https://soyacincau.com/2025/12/02/snapdragon-x2-elite-deep-dive-qualcomms-biggest-leap-yet/)
7. MediaTek Dimensity 9500. XPU.pub (September 2025). Retrieved 2026 from [https://xpu.pub/2025/09/22/mediatek-dimensity-9500/](https://xpu.pub/2025/09/22/mediatek-dimensity-9500/)
8. Small Language Models 2026: Phi-4, Gemma 3, Qwen 3 Guide. Local AI Master. Retrieved 2026 from [https://localaimaster.com/blog/small-language-models-guide-2026](https://localaimaster.com/blog/small-language-models-guide-2026)
9. Edge AI: TensorFlow Lite vs. ONNX Runtime vs. PyTorch Mobile. DZone. Retrieved 2026 from [https://dzone.com/articles/edge-ai-tensorflow-lite-vs-onnx-runtime-vs-pytorch](https://dzone.com/articles/edge-ai-tensorflow-lite-vs-onnx-runtime-vs-pytorch)
10. Apple Neural Engine Supported Devices. GitHub (hollance/neural-engine). Retrieved 2026 from [https://github.com/hollance/neural-engine/blob/master/docs/supported-devices.md](https://github.com/hollance/neural-engine/blob/master/docs/supported-devices.md)
11. Apple unveils M4 chip with neural engine capable of 38 TOPS. The Register (May 2024). Retrieved 2026 from [https://www.theregister.com/2024/05/07/apple_m4_ipad/](https://www.theregister.com/2024/05/07/apple_m4_ipad/)
12. Edge Computing In Autonomous Vehicles. Kanerika. Retrieved 2026 from [https://kanerika.com/blogs/edge-computing-in-autonomous-vehicles/](https://kanerika.com/blogs/edge-computing-in-autonomous-vehicles/)
13. The Rise of Edge AI in Automotive. McKinsey. Retrieved 2026 from [https://www.mckinsey.com/industries/semiconductors/our-insights/the-rise-of-edge-ai-in-automotive](https://www.mckinsey.com/industries/semiconductors/our-insights/the-rise-of-edge-ai-in-automotive)
14. Embedded AI Hardware Platforms 2026: Edge SoCs, NPUs, and MCU-Class Accelerators. Promwad. Retrieved 2026 from [https://promwad.com/news/embedded-ai-hardware-platforms-2026](https://promwad.com/news/embedded-ai-hardware-platforms-2026)
15. How to Deploy AI on Edge Devices with Small Language Models. Zen van Riel. Retrieved 2026 from [https://zenvanriel.nl/ai-engineer-blog/how-to-deploy-ai-on-edge-devices-with-small-language-models/](https://zenvanriel.nl/ai-engineer-blog/how-to-deploy-ai-on-edge-devices-with-small-language-models/)
