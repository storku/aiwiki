---
title: "Jetson Thor"
slug: "jetson_thor"
categories:
  - "Pages_containing_cite_templates_with_deprecated_parameters"
---[Template:Infobox computer](/index.php?title=Template:Infobox_computer&action=edit&redlink=1)

[![Jetson thor1.png](/images/thumb/8/8d/Jetson_thor1.png/300px-Jetson_thor1.png)](/wiki/file_jetson_thor1_png)

**NVIDIA Jetson Thor** is a high-performance [edge AI](/index.php?title=Edge_computing&action=edit&redlink=1) computing module series for [robotics](/index.php?title=Robotics&action=edit&redlink=1) and [embedded](/index.php?title=Embedded_system&action=edit&redlink=1) applications, developed by [NVIDIA](/wiki/nvidia). Introduced in 2025 as the successor to the [Jetson AGX Orin](/index.php?title=Jetson_AGX_Orin&action=edit&redlink=1) platform, it offers significantly higher [AI](/wiki/artificial_intelligence) performance for "[Physical AI](/index.php?title=Physical_AI&action=edit&redlink=1)" systems—general-purpose [autonomous robots](/index.php?title=Autonomous_robot&action=edit&redlink=1). The Jetson Thor [system-on-module](/index.php?title=System-on-module&action=edit&redlink=1) (SoM) features an NVIDIA [Blackwell](/wiki/nvidia_blackwell) [GPU](/index.php?title=Graphics_processing_unit&action=edit&redlink=1) (2560 [CUDA](/wiki/cuda) cores with 96 [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1)) and a 14-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) [Neoverse](/index.php?title=Neoverse&action=edit&redlink=1)-V3AE [CPU](/index.php?title=Central_processing_unit&action=edit&redlink=1), along with 128 [GB](/index.php?title=Gigabyte&action=edit&redlink=1) of [LPDDR5X](/index.php?title=LPDDR5&action=edit&redlink=1) memory in its flagship configuration.[&#91;1&#93;](#cite_note-NVIDIA-1)[&#91;2&#93;](#cite_note-IntroDevBlog-2) This hardware delivers up to **2,070** [FP4 TFLOPS](/index.php?title=FLOPS&action=edit&redlink=1) of AI compute within a 130 [W](/index.php?title=Watt&action=edit&redlink=1) power envelope—about 7.5× the AI performance and 3.5× the [energy efficiency](/index.php?title=Energy_efficiency&action=edit&redlink=1) of the previous Jetson Orin generation.[&#91;1&#93;](#cite_note-NVIDIA-1)[&#91;3&#93;](#cite_note-NewsroomGA-3) NVIDIA markets Jetson Thor as "the ultimate platform for physical AI and robotics," designed to run multiple advanced AI models (such as [vision-language](/wiki/vision_language_model) and [large language models](/wiki/large_language_model)) in real time at the edge.[&#91;2&#93;](#cite_note-IntroDevBlog-2)[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

## Background

The Jetson Thor series is part of NVIDIA's [Jetson](/index.php?title=NVIDIA_Jetson&action=edit&redlink=1) family of embedded AI computing platforms, which are widely used in [autonomous machines](/index.php?title=Autonomous_machine&action=edit&redlink=1) and [robots](/index.php?title=Robot&action=edit&redlink=1). Jetson Thor was unveiled amid NVIDIA's push toward more general-purpose [humanoid robotics](/index.php?title=Humanoid_robot&action=edit&redlink=1) and "physical AI"—moving beyond single-purpose robots to adaptable robots capable of high-level reasoning and diverse tasks.[&#91;2&#93;](#cite_note-IntroDevBlog-2) At [GTC 2024](/index.php?title=NVIDIA_GTC&action=edit&redlink=1), NVIDIA CEO [Jensen Huang](/index.php?title=Jensen_Huang&action=edit&redlink=1) introduced the [Isaac GR00T](/index.php?title=NVIDIA_Isaac&action=edit&redlink=1) robotics platform and previewed Jetson Thor as the hardware backbone for next-generation generalist robots.[&#91;5&#93;](#cite_note-GTC2024_GR00T-5) Jetson Thor was officially launched as a developer kit (**Jetson AGX Thor Developer Kit**) in late August 2025, with general availability announced at a price of US$3,499 for the kit.[&#91;6&#93;](#cite_note-CNBC-6) The platform is not intended to replace Jetson Orin outright, but rather to sit above it as the highest-end Jetson offering, targeting applications requiring substantially more compute (e.g., [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) and advanced humanoid robots).[&#91;7&#93;](#cite_note-RidgeRun-7)

## Architecture and Features

### GPU Architecture

Jetson Thor is built around NVIDIA's [Blackwell](/wiki/nvidia_blackwell) [GPU](/index.php?title=Graphics_processing_unit&action=edit&redlink=1) architecture, which introduces support for **[Multi-Instance GPU](/index.php?title=Multi-Instance_GPU&action=edit&redlink=1) (MIG)** virtualization and a new **Transformer Engine** for 4-bit precision computing. The Jetson Thor GPU supports native FP4 data types, dynamically switching between 4-bit and 8-bit modes to optimize performance for [transformer](/wiki/transformer) models (e.g., large [neural networks](/wiki/neural_network)).[&#91;2&#93;](#cite_note-IntroDevBlog-2) Key GPU specifications include:

- **2,560 [CUDA](/wiki/cuda) cores** at 1.57 GHz

- **96 fifth-generation [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1)**

- **Multi-Instance GPU (MIG)** capability with 10 TPCs (Texture Processing Clusters)

- **Transformer Engine** with dynamic FP4/FP8 precision switching

### CPU Architecture

The SoM includes a 14-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) **[Neoverse](/index.php?title=Neoverse&action=edit&redlink=1)-V3AE** 64-bit [CPU](/index.php?title=Central_processing_unit&action=edit&redlink=1) (with 1 MB L2 [cache](/index.php?title=CPU_cache&action=edit&redlink=1) per core and 16 MB shared L3), providing strong general-purpose and [real-time processing](/index.php?title=Real-time_computing&action=edit&redlink=1) capabilities alongside the GPU.[&#91;8&#93;](#cite_note-TechRadar23Aug-8)

### Accelerators and Multimedia

The module also integrates specialized accelerators:

- Third-generation **Programmable Vision Accelerator** (PVA 3.0) for [computer vision](/wiki/computer_vision) tasks

- Dual hardware video encoders (**NVENC**) and decoders (**NVDEC**)

- [Optical flow](/index.php?title=Optical_flow&action=edit&redlink=1) accelerator

- Always-on [DSP](/index.php?title=Digital_signal_processor&action=edit&redlink=1)[&#91;2&#93;](#cite_note-IntroDevBlog-2)[&#91;7&#93;](#cite_note-RidgeRun-7)

### Video Processing

With its Blackwell GPU and advanced accelerators, Jetson Thor can run multiple high-end AI models simultaneously. Video processing capabilities include:

- **Decode**: Up to four 8K@30fps or ten 4K@60fps video streams in parallel

- **Encode**: Up to six 4K@60fps streams

- **Codecs**: [H.265](/index.php?title=H.265&action=edit&redlink=1) (HEVC), [H.264](/index.php?title=H.264&action=edit&redlink=1) (AVC), [AV1](/index.php?title=AV1&action=edit&redlink=1) (decode), [VP9](/index.php?title=VP9&action=edit&redlink=1)/[VP8](/index.php?title=VP8&action=edit&redlink=1)

- **Display**: Up to four independent displays via [HDMI](/index.php?title=HDMI&action=edit&redlink=1) 2.1 and [DisplayPort](/index.php?title=DisplayPort&action=edit&redlink=1) 1.4a at resolutions up to 8K (7680×4320 @30 Hz)[&#91;7&#93;](#cite_note-RidgeRun-7)

### I/O and Connectivity

Jetson Thor offers significantly expanded I/O and networking compared to its predecessors:

**Networking:**

- 4× 25 [GbE](/index.php?title=Gigabit_Ethernet&action=edit&redlink=1) high-speed [Ethernet](/index.php?title=Ethernet&action=edit&redlink=1) interfaces (aggregated via [QSFP28](/index.php?title=QSFP28&action=edit&redlink=1) connector)

- 1× 5 GbE [RJ45](/index.php?title=RJ45&action=edit&redlink=1) Ethernet port

- [Wi-Fi 6E](/index.php?title=Wi-Fi_6E&action=edit&redlink=1) and [Bluetooth](/index.php?title=Bluetooth&action=edit&redlink=1) (developer kit)

**Storage and Expansion:**

- [PCIe](/index.php?title=PCI_Express&action=edit&redlink=1) Gen5 lanes (configurable up to x8 + x4 + x2)

- [NVMe](/index.php?title=NVMe&action=edit&redlink=1) [M.2](/index.php?title=M.2&action=edit&redlink=1) support

- Multiple [USB 3.2](/index.php?title=USB_3.2&action=edit&redlink=1) Gen2 ports

**Industrial Interfaces:**

- [CAN bus](/index.php?title=CAN_bus&action=edit&redlink=1)

- Multiple [UARTs](/index.php?title=UART&action=edit&redlink=1)

- [SPI](/index.php?title=Serial_Peripheral_Interface&action=edit&redlink=1)

- [I²C](/index.php?title=I%C2%B2C&action=edit&redlink=1)

- [GPIO](/index.php?title=General-purpose_input/output&action=edit&redlink=1)[&#91;7&#93;](#cite_note-RidgeRun-7)

**[Holoscan](/index.php?title=Holoscan&action=edit&redlink=1) Sensor Bridge** technology is supported for time-synchronized sensor streaming over Ethernet (enabling camera data over 10GbE links with low latency), which is a new approach for high-bandwidth sensor input on Jetson platforms.[&#91;7&#93;](#cite_note-RidgeRun-7) Jetson Thor modules have a 699-pin board-to-board connector (87 × 100 mm module size) but are **not pin-compatible** with Jetson Orin modules due to the new interface changes and higher power requirements (Thor modules draw up to ~120–130 W, whereas AGX Orin modules were limited to ~60 W).[&#91;7&#93;](#cite_note-RidgeRun-7)

## Products

### Jetson Thor Modules

The Jetson Thor series consists of two module variants (SoMs) and an associated developer kit:

| Model (SoM) | GPU (architecture) | AI Performance**(FP4 sparse) | CPU (cores) | Memory
(LPDDR5X) | Power |
| --- | --- | --- | --- | --- | --- |
| Jetson T5000** | 2560-core **Blackwell** GPU**(96 Tensor Cores, MIG with 10 TPCs) | 2070 TFLOPS | 14-core Arm
Neoverse-V3AE | 128 GB
@ 273 GB/s | 40–130 W |
| Jetson T4000*** | 1536-core **Blackwell** GPU**(64 Tensor Cores, MIG with 6 TPCs) | 1200 TFLOPS | 12-core Arm
Neoverse-V3AE | 64 GB
@ 273 GB/s | 40–70 W |
| *Specifications for Jetson T4000 are preliminary (under development). |

The Jetson T5000** is the flagship module, incorporating the full 2560-core Blackwell GPU and 128 GB memory to achieve the maximum performance. The lower-tier **Jetson T4000** is a cost-reduced variant with a smaller GPU (1536 cores, 64 Tensor Cores), 64 GB of memory, and roughly 60% of the AI compute throughput of the T5000.[&#91;8&#93;](#cite_note-TechRadar23Aug-8) Both modules use the same form-factor and include the new high-speed interfaces, but the T4000 targets a lower power range (up to ~70 W) for applications that don't require the absolute highest performance.[&#91;8&#93;](#cite_note-TechRadar23Aug-8)

### Developer Kit (Jetson AGX Thor)

NVIDIA provides the **Jetson AGX Thor Developer Kit**, which includes a Jetson T5000 module pre-mounted on a reference carrier board with additional peripherals:

**Kit Contents:**

- Jetson T5000 module

- Reference carrier board

- 1 TB [NVMe](/index.php?title=NVMe&action=edit&redlink=1) [SSD](/index.php?title=SSD&action=edit&redlink=1) (M.2 slot)

- [Wi-Fi 6E](/index.php?title=Wi-Fi_6E&action=edit&redlink=1) + [Bluetooth](/index.php?title=Bluetooth&action=edit&redlink=1) module (M.2 Key E)

- Active cooling solution (heatsink + fan)

- 140W power adapter

**I/O Ports:**

- **Video**: 1× [HDMI](/index.php?title=HDMI&action=edit&redlink=1) 2.0b, 1× [DisplayPort](/index.php?title=DisplayPort&action=edit&redlink=1) 1.4a

- **USB**: Multiple [USB 3.2](/index.php?title=USB_3.2&action=edit&redlink=1) and [USB 2.0](/index.php?title=USB_2.0&action=edit&redlink=1) ports

- **Networking**: 5 GbE and 4×25 GbE ports (via QSFP28)

- **Industrial**: [CAN bus](/index.php?title=CAN_bus&action=edit&redlink=1), [UART](/index.php?title=UART&action=edit&redlink=1), [I²S](/index.php?title=I%C2%B2S&action=edit&redlink=1) audio headers

- **Debug**: [JTAG](/index.php?title=JTAG&action=edit&redlink=1) connectors

The entire dev kit assembly, including the module and cooling solution, measures approximately **243 × 112 × 57 mm** in size.[&#91;8&#93;](#cite_note-TechRadar23Aug-8) The Jetson AGX Thor developer kit is designed to operate as a "robot brain" out of the box, enabling researchers and engineers to evaluate performance on real workloads without designing a custom board.[&#91;8&#93;](#cite_note-TechRadar23Aug-8) The dev kit began shipping to customers in **Q3 2025** following its announcement.[&#91;8&#93;](#cite_note-TechRadar23Aug-8)[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

## Software Ecosystem

### Operating System and SDK

Jetson Thor runs on the same software stack as other NVIDIA Jetson platforms, including:

**[JetPack 7.0](/index.php?title=NVIDIA_JetPack&action=edit&redlink=1)** based on:

- [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1) 24.04 LTS

- [Linux kernel](/index.php?title=Linux_kernel&action=edit&redlink=1) 6.8

- [CUDA](/wiki/cuda) 13.0

- [TensorRT](/index.php?title=TensorRT&action=edit&redlink=1) 10.13

- [cuDNN](/wiki/cudnn) 9.12

- [VPI](/index.php?title=VPI&action=edit&redlink=1) (Vision Programming Interface) 4.0[&#91;2&#93;](#cite_note-IntroDevBlog-2)

### AI Frameworks

The platform supports deployment of [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) frameworks including:

- [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1)

- [TensorFlow](/wiki/tensorflow)

- [ONNX](/index.php?title=ONNX&action=edit&redlink=1)

- Models from [Hugging Face](/wiki/hugging_face), [Meta](/index.php?title=Meta_Platforms&action=edit&redlink=1), [OpenAI](/wiki/openai), [Gemini](/index.php?title=Google_Gemini&action=edit&redlink=1), Qwen, and DeepSeek[&#91;2&#93;](#cite_note-IntroDevBlog-2)

### Robotics Software

**[NVIDIA Isaac](/index.php?title=NVIDIA_Isaac&action=edit&redlink=1)** robotics software includes:

- **Isaac Sim**: Physics-accurate simulation built on [NVIDIA Omniverse](/wiki/nvidia_omniverse)

- **Isaac Lab**: Framework for [reinforcement](/wiki/reinforcement_learning) and [imitation learning](/index.php?title=Imitation_learning&action=edit&redlink=1)

- **Isaac GR00T**: Foundation models for humanoid robots

- **Isaac ROS**: Hardware-accelerated [ROS 2](/index.php?title=Robot_Operating_System&action=edit&redlink=1) packages

**[NVIDIA Metropolis](/index.php?title=NVIDIA_Metropolis&action=edit&redlink=1)** provides vision AI and smart city applications, while **[NVIDIA Holoscan](/index.php?title=NVIDIA_Holoscan&action=edit&redlink=1)** enables real-time sensor and medical imaging pipelines.[&#91;2&#93;](#cite_note-IntroDevBlog-2)[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

### Generative AI Performance

Jetson Thor is built to handle emerging [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) workloads at the edge. Performance metrics include:

| Metric | Performance |
| --- | --- |
| Time to First Token (TTFT) | < 200ms |
| Time Per Output Token (TPOT) | < 50ms |
| Speedup vs Orin (generative) | 5× |
| Speculative Decoding | 2× additional speedup |

These capabilities enable real-time inference for models like [large language models](/wiki/large_language_model) (LLMs) and vision-language-action models.[&#91;2&#93;](#cite_note-IntroDevBlog-2) The platform's massive 128 GB memory allows deployment of large AI models and handling large sensor data in real time.[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

## Applications

Jetson Thor is targeted at advanced robotics and autonomous machines that require server-class AI capability at the edge:

### Primary Applications

- **[Humanoid robots](/index.php?title=Humanoid_robot&action=edit&redlink=1)**: General-purpose robots for unstructured environments

- **[Autonomous mobile robots](/index.php?title=Autonomous_mobile_robot&action=edit&redlink=1) (AMRs)**: Warehouse and logistics automation

- **[Drones](/index.php?title=Unmanned_aerial_vehicle&action=edit&redlink=1)**: Advanced aerial robotics

- **Industrial automation**: [Cobots](/index.php?title=Collaborative_robot&action=edit&redlink=1) and smart manufacturing

- **[Autonomous vehicles](/index.php?title=Autonomous_vehicle&action=edit&redlink=1)**: DRIVE AGX Thor variant for automotive

- **Edge AI servers**: High-performance local inference

### Sensor Fusion Capabilities

The high compute density and wide I/O of Thor enable:

- Multi-modal sensor fusion ([camera](/index.php?title=Camera&action=edit&redlink=1), [lidar](/index.php?title=Lidar&action=edit&redlink=1), [radar](/index.php?title=Radar&action=edit&redlink=1), [IMU](/index.php?title=Inertial_measurement_unit&action=edit&redlink=1))

- Autonomous navigation and manipulation

- On-device generative models for human-robot interaction[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

## Industry Adoption

### Early Adopters

Several major companies announced adoption of Jetson Thor:

**Robotics Companies:**

- [Agility Robotics](/index.php?title=Agility_Robotics&action=edit&redlink=1) – Digit humanoid robot

- [Amazon Robotics](/index.php?title=Amazon_Robotics&action=edit&redlink=1) – Warehouse automation

- [Boston Dynamics](/index.php?title=Boston_Dynamics&action=edit&redlink=1) – Legged robots

- [Figure](/index.php?title=Figure_(company)&action=edit&redlink=1) – Humanoid robotics

- [1X Technologies](/index.php?title=1X_Technologies&action=edit&redlink=1) – EVE and NEO robots

**Industrial Partners:**

- [Caterpillar](/index.php?title=Caterpillar_Inc.&action=edit&redlink=1) – Autonomous industrial vehicles

- [John Deere](/index.php?title=John_Deere&action=edit&redlink=1) – Agricultural automation (evaluating)

- [Medtronic](/index.php?title=Medtronic&action=edit&redlink=1) – Medical robotics

**Technology Companies:**

- [Meta](/index.php?title=Meta_Platforms&action=edit&redlink=1) – AI research for physical AI

- [OpenAI](/wiki/openai) – Robotics research[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

### Ecosystem Scale

According to NVIDIA:

- Over **7,000 customers** deployed Jetson Orin-based hardware by 2025

- **150+ hardware partners** provide production-ready solutions

- **2+ million developers** active on NVIDIA robotics platforms[&#91;4&#93;](#cite_note-TechRadar28Aug-4)

## Specifications Summary

| Category | Specification |
| --- | --- |
| AI Performance | 2,070 TFLOPS (FP4 sparse)
1,035 TFLOPS (FP8 dense)
517 TFLOPS (FP16 sparse) |
| GPU | 2,560-core [Blackwell](/wiki/nvidia_blackwell) GPU
96 [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1) (5th gen)
10 TPCs for MIG |
| CPU | 14-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) [Neoverse](/index.php?title=Neoverse&action=edit&redlink=1)-V3AE
Up to 2.6 GHz
1 MB L2 per core, 16 MB L3 shared |
| Memory | 128 GB [LPDDR5X](/index.php?title=LPDDR5&action=edit&redlink=1)
256-bit bus
273 GB/s bandwidth |
| Video Encode | Up to 6× 4K@60fps
[H.265](/index.php?title=H.265&action=edit&redlink=1)/[H.264](/index.php?title=H.264&action=edit&redlink=1) |
| Video Decode | Up to 4× 8K@30fps
Up to 10× 4K@60fps
[H.265](/index.php?title=H.265&action=edit&redlink=1)/[H.264](/index.php?title=H.264&action=edit&redlink=1)/[AV1](/index.php?title=AV1&action=edit&redlink=1) |
| Networking | 4× 25 [GbE](/index.php?title=Gigabit_Ethernet&action=edit&redlink=1) via [QSFP28](/index.php?title=QSFP28&action=edit&redlink=1)
1× 5 GbE [RJ45](/index.php?title=RJ45&action=edit&redlink=1)
[Wi-Fi 6E](/index.php?title=Wi-Fi_6E&action=edit&redlink=1) (dev kit) |
| Storage | [PCIe](/index.php?title=PCIe&action=edit&redlink=1) Gen5 support
[NVMe](/index.php?title=NVMe&action=edit&redlink=1) [M.2](/index.php?title=M.2&action=edit&redlink=1)
[USB 3.2](/index.php?title=USB_3.2&action=edit&redlink=1) |
| Power | 40W – 130W configurable |
| Form Factor | 100mm × 87mm
699-pin connector |
| Price | $3,499 (developer kit)
$2,999 (module, 1K units) |

## See Also

- [NVIDIA Jetson](/index.php?title=NVIDIA_Jetson&action=edit&redlink=1) – Family of Jetson modules and kits

- [Jetson AGX Orin](/index.php?title=Jetson_AGX_Orin&action=edit&redlink=1) – Predecessor high-end Jetson platform (2022)

- [NVIDIA Isaac](/index.php?title=NVIDIA_Isaac&action=edit&redlink=1) – NVIDIA's robotics software platform

- [NVIDIA Blackwell](/wiki/nvidia_blackwell) – GPU architecture

- [Humanoid robot](/index.php?title=Humanoid_robot&action=edit&redlink=1)

- [Physical AI](/index.php?title=Physical_AI&action=edit&redlink=1)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1) and [Edge AI](/index.php?title=Edge_AI&action=edit&redlink=1)

- [Multi-Instance GPU](/index.php?title=Multi-Instance_GPU&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [Vision Language Model](/wiki/vision_language_model)

## External Links

- [Official NVIDIA Jetson Thor page](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)

- [Jetson Developer Kits](https://developer.nvidia.com/embedded/jetson-developer-kits)

- [NVIDIA Isaac Platform](https://developer.nvidia.com/isaac)

- [NVIDIA Developer Forums - Jetson](https://forums.developer.nvidia.com/c/robotics-edge-computing/jetson-embedded-systems/)

## References

1. ↑ [1.0](#cite_ref-NVIDIA_1-0) [1.1](#cite_ref-NVIDIA_1-1) ["NVIDIA Jetson Thor Series"](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/).&#32;NVIDIA.&#32;[https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/).

2. ↑ [2.0](#cite_ref-IntroDevBlog_2-0) [2.1](#cite_ref-IntroDevBlog_2-1) [2.2](#cite_ref-IntroDevBlog_2-2) [2.3](#cite_ref-IntroDevBlog_2-3) [2.4](#cite_ref-IntroDevBlog_2-4) [2.5](#cite_ref-IntroDevBlog_2-5) [2.6](#cite_ref-IntroDevBlog_2-6) [2.7](#cite_ref-IntroDevBlog_2-7) [2.8](#cite_ref-IntroDevBlog_2-8) ["Introducing NVIDIA Jetson Thor, the Ultimate Platform for Physical AI"](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/).&#32;NVIDIA Developer Blog.&#32;2025-08-25.&#32;[https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/).

3. [↑](#cite_ref-NewsroomGA_3-0) ["NVIDIA Blackwell-Powered Jetson Thor Now Available, Accelerating the Age of General Robotics"](https://nvidianews.nvidia.com/news/nvidia-blackwell-powered-jetson-thor-now-available-accelerating-the-age-of-general-robotics).&#32;NVIDIA Newsroom.&#32;2025-08-25.&#32;[https://nvidianews.nvidia.com/news/nvidia-blackwell-powered-jetson-thor-now-available-accelerating-the-age-of-general-robotics](https://nvidianews.nvidia.com/news/nvidia-blackwell-powered-jetson-thor-now-available-accelerating-the-age-of-general-robotics).

4. ↑ [4.0](#cite_ref-TechRadar28Aug_4-0) [4.1](#cite_ref-TechRadar28Aug_4-1) [4.2](#cite_ref-TechRadar28Aug_4-2) [4.3](#cite_ref-TechRadar28Aug_4-3) [4.4](#cite_ref-TechRadar28Aug_4-4) [4.5](#cite_ref-TechRadar28Aug_4-5) [4.6](#cite_ref-TechRadar28Aug_4-6) [""The ultimate supercomputer to drive the age of physical AI and general robotics" – NVIDIA reveals next-gen 'robot brain' chip for less than a used car"](https://www.techradar.com/pro/the-ultimate-supercomputer-to-drive-the-age-of-physical-ai-and-general-robotics-nvidia-reveals-next-generation-robot-brain-chip-and-it-can-be-yours-for-less-than-a-used-car).&#32;TechRadar.&#32;2025-08-28.&#32;[https://www.techradar.com/pro/the-ultimate-supercomputer-to-drive-the-age-of-physical-ai-and-general-robotics-nvidia-reveals-next-generation-robot-brain-chip-and-it-can-be-yours-for-less-than-a-used-car](https://www.techradar.com/pro/the-ultimate-supercomputer-to-drive-the-age-of-physical-ai-and-general-robotics-nvidia-reveals-next-generation-robot-brain-chip-and-it-can-be-yours-for-less-than-a-used-car).

5. [↑](#cite_ref-GTC2024_GR00T_5-0) ["NVIDIA Announces Project GR00T Foundation Model for Humanoid Robots and Major Isaac Robotics Platform Update"](https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform).&#32;NVIDIA Newsroom.&#32;2024-03-18.&#32;[https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform](https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform).

6. [↑](#cite_ref-CNBC_6-0) ["NVIDIA's new 'robot brain' goes on sale for $3,499 as company targets robotics for growth"](https://www.cnbc.com/2025/08/25/nvidias-thor-t5000-robot-brain-chip.html).&#32;CNBC.&#32;2025-08-25.&#32;[https://www.cnbc.com/2025/08/25/nvidias-thor-t5000-robot-brain-chip.html](https://www.cnbc.com/2025/08/25/nvidias-thor-t5000-robot-brain-chip.html).

7. ↑ [7.0](#cite_ref-RidgeRun_7-0) [7.1](#cite_ref-RidgeRun_7-1) [7.2](#cite_ref-RidgeRun_7-2) [7.3](#cite_ref-RidgeRun_7-3) [7.4](#cite_ref-RidgeRun_7-4) [7.5](#cite_ref-RidgeRun_7-5) ["NVIDIA Jetson Thor: Powering the Future of Physical AI"](https://developer.ridgerun.com/wiki/index.php/NVIDIA_Jetson_Thor:_Powering_the_Future_of_Physical_AI).&#32;RidgeRun Developer Wiki.&#32;[https://developer.ridgerun.com/wiki/index.php/NVIDIA_Jetson_Thor:_Powering_the_Future_of_Physical_AI](https://developer.ridgerun.com/wiki/index.php/NVIDIA_Jetson_Thor:_Powering_the_Future_of_Physical_AI).

8. ↑ [8.0](#cite_ref-TechRadar23Aug_8-0) [8.1](#cite_ref-TechRadar23Aug_8-1) [8.2](#cite_ref-TechRadar23Aug_8-2) [8.3](#cite_ref-TechRadar23Aug_8-3) [8.4](#cite_ref-TechRadar23Aug_8-4) [8.5](#cite_ref-TechRadar23Aug_8-5) ["NVIDIA quietly unveiled its fastest mini PC ever, capable of topping 2070 TFLOPS"](https://www.techradar.com/pro/nvidia-quietly-unveiled-its-fastest-mini-pc-ever-capable-of-topping-2070-tflops-and-if-you-squint-enough-you-might-even-think-it-looks-like-an-rtx-5090).&#32;TechRadar.&#32;2025-08-23.&#32;[https://www.techradar.com/pro/nvidia-quietly-unveiled-its-fastest-mini-pc-ever-capable-of-topping-2070-tflops-and-if-you-squint-enough-you-might-even-think-it-looks-like-an-rtx-5090](https://www.techradar.com/pro/nvidia-quietly-unveiled-its-fastest-mini-pc-ever-capable-of-topping-2070-tflops-and-if-you-squint-enough-you-might-even-think-it-looks-like-an-rtx-5090).