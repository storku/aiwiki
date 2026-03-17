---
title: "CuDNN"
slug: "cudnn"
categories:
  - "Articles_with_short_description"
  - "NVIDIA"
  - "CUDA"
  - "Deep_learning_software"
  - "Neural_network_software"
  - "Proprietary_software"
  - "2014_software"
  - "GPU_computing"
  - "Machine_learning_libraries"
---Short description: GPU-accelerated library for deep neural network primitives

[Template:Use mdy dates](/index.php?title=Template:Use_mdy_dates&action=edit&redlink=1)
[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

[*](/wiki/file_cudnn1_png)

**NVIDIA cuDNN** (**CUDA Deep Neural Network library**) is a [proprietary](/index.php?title=Proprietary_software&action=edit&redlink=1) [GPU](/index.php?title=GPU&action=edit&redlink=1)-accelerated software library of primitives for [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) developed by [NVIDIA](/wiki/nvidia). It provides highly tuned implementations for standard routines such as forward and backward [convolution](/wiki/convolution), [attention](/index.php?title=Attention_mechanism&action=edit&redlink=1), [matmul](/index.php?title=Matrix_multiplication&action=edit&redlink=1), [pooling](/wiki/pooling), and [normalization](/wiki/normalization).[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;2&#93;](#cite_note-cudnn-docs-main-2)

Built on top of the [CUDA](/wiki/cuda) parallel computing platform, cuDNN is not a standalone deep learning framework but rather a foundational performance library.[&#91;3&#93;](#cite_note-cudnn-vs-cuda-3) It serves as a critical abstraction layer that allows high-level frameworks like [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) and [TensorFlow](/wiki/tensorflow) to leverage the computational power of NVIDIA GPUs without requiring framework developers to write low-level, hardware-specific CUDA code.[&#91;4&#93;](#cite_note-gfg-cudnn-4)

The library's existence represents a strategic separation of concerns within the AI ecosystem. By centralizing the complex and time-consuming task of optimizing deep learning kernels for each new GPU architecture, NVIDIA enables framework developers to concentrate on API design, automatic differentiation, and scientific innovation.[&#91;5&#93;](#cite_note-caffe-paper-5) This approach significantly accelerates the development cycle of the entire AI community on NVIDIA hardware. Furthermore, cuDNN provides a layer of performance portability across GPU generations. As NVIDIA releases new hardware, updated versions of cuDNN incorporate optimized kernels that exploit the new architectural features. Applications and frameworks built against the cuDNN API can often achieve substantial performance gains on new hardware simply by updating the library, without requiring changes to their own source code.[&#91;6&#93;](#cite_note-modal-cudnn-6)

## History

### Initial Release and Early Development (2014-2017)

NVIDIA released cuDNN in September 2014, amid the rise of deep learning research following breakthroughs in [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) competitions where GPU-accelerated [convolutional neural networks](/wiki/convolutional_neural_network) achieved dramatic improvements in accuracy.[&#91;7&#93;](#cite_note-InfoQSerrano2014-7) NVIDIA introduced it as a set of low-level GPU primitives to boost the performance of deep neural networks on CUDA-compatible GPUs. Although cuDNN can be used directly via its C/C++ API, NVIDIA anticipated it would mostly be used indirectly through higher-level machine learning frameworks that incorporate it.[&#91;7&#93;](#cite_note-InfoQSerrano2014-7)

From early on, frameworks such as [Caffe](/index.php?title=Caffe_(software)&action=edit&redlink=1) and [Torch](/index.php?title=Torch_(machine_learning)&action=edit&redlink=1) integrated cuDNN as a backend, allowing developers to get GPU acceleration with minimal code changes. NVIDIA reported up to a 10× speedup in training throughput when using Caffe with cuDNN compared to Caffe's CPU-only mode, demonstrating the significant performance gains of GPU-accelerated deep learning.[&#91;7&#93;](#cite_note-InfoQSerrano2014-7) The initial cuDNN 1.0 release focused on primitives for convolutional neural networks, including convolution, pooling, softmax, and neuron activations such as [Sigmoid](/wiki/sigmoid_function), [ReLU](/wiki/relu), and [TANH](/index.php?title=Hyperbolic_function&action=edit&redlink=1).[&#91;7&#93;](#cite_note-InfoQSerrano2014-7)

Key milestones in early development included:

- **cuDNN 2.0** (March 2015): Performance improvements and expanded support for different network configurations.

- **cuDNN 3.0** (July 2015): Support for [16-bit floating point](/index.php?title=Half-precision_floating-point_format&action=edit&redlink=1) (FP16) data storage, enabling training of larger models.[&#91;8&#93;](#cite_note-cudnn3-news-8)

- **cuDNN 4.0** (November 2015): Optimizations for [Maxwell](/index.php?title=Maxwell_(microarchitecture)&action=edit&redlink=1) architecture and initial support for [recurrent neural networks](/wiki/recurrent_neural_network) (RNNs).

- **cuDNN 5.0** (May 2016): Major update announced at GTC 2016. Added comprehensive support for recurrent neural networks including [LSTM](/index.php?title=Long_short-term_memory&action=edit&redlink=1) and [GRU](/index.php?title=Gated_recurrent_unit&action=edit&redlink=1) layers for the first time, greatly accelerating sequence learning tasks.[&#91;9&#93;](#cite_note-Appleyard2016-9) Introduced new convolution algorithms including the [Winograd algorithm](/index.php?title=Winograd_filter-based_algorithm&action=edit&redlink=1) for faster convolutions, 3D convolution support, and improved half-precision (FP16) performance on NVIDIA's [Pascal](/index.php?title=Pascal_(microarchitecture)&action=edit&redlink=1) architecture. NVIDIA reported up to 6× speedup in LSTM training when using cuDNN v5's RNN support.[&#91;9&#93;](#cite_note-Appleyard2016-9)

### Tensor Core Era (2017-2020)

cuDNN 6.0 (April 2017) focused on performance tuning and robustness, with improved support for dilated (atrous) convolutions and optimizations targeting the then-new [Volta](/index.php?title=Volta_(microarchitecture)&action=edit&redlink=1) GPU architecture.

cuDNN 7.x (2017–2019) marked a major milestone with support for [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1) on Volta architecture GPUs. This series of releases introduced support for Tensor Cores in deep learning operations, allowing FP16 compute with FP32 accumulation to leverage Volta's Tensor Core units for significant speedups.[&#91;10&#93;](#cite_note-tensor-ops-10) Throughout the 7.x releases, NVIDIA added support for new network layers and optimized existing ones, including improved batch normalization. The library also expanded device support including NVIDIA's embedded Jetson platforms via JetPack.[&#91;1&#93;](#cite_note-cudnn-main-1)

### Graph API Revolution (2020-2023)

cuDNN 8.0 (June 2020) represented a major redesign of cuDNN coinciding with the NVIDIA [Ampere](/index.php?title=Ampere_(microarchitecture)&action=edit&redlink=1) architecture launch. cuDNN 8 was optimized for the [Nvidia A100](/index.php?title=Nvidia_A100&action=edit&redlink=1) GPUs, with NVIDIA reporting up to 5× higher performance on A100 versus V100 out-of-the-box thanks to new optimizations and use of hardware features like [TensorFloat-32](/index.php?title=TensorFloat-32&action=edit&redlink=1) (TF32).[&#91;11&#93;](#cite_note-Hatenablog2020-11)

The flagship feature was the introduction of the declarative Graph API and a runtime fusion engine.[&#91;12&#93;](#cite_note-cudnn-v8-blog-12) This allowed users to express complex, multi-operation computations that cuDNN could then analyze and optimize holistically. The API was overhauled: v8 introduced a new low-level backend API for more flexibility and performance tuning, while providing a compatibility layer for the previous v7 API to ease transition.[&#91;11&#93;](#cite_note-Hatenablog2020-11) New capabilities included improved support for conversational AI, computer vision networks, and the ability to fuse multiple operations through the new graph API. Additionally, cuDNN 8 was modularized into smaller component libraries, so applications could include only the needed portions, making integration more lightweight.[&#91;11&#93;](#cite_note-Hatenablog2020-11)

Subsequent cuDNN 8.x releases (2020–2023) continuously improved performance and added features. These included support for the NVIDIA [Hopper](/index.php?title=Hopper_(microarchitecture)&action=edit&redlink=1) architecture (H100 GPUs), expanded graph API functionalities, and initial support for new data types such as FP8 in late 8.x versions for Hopper. For example, cuDNN 8.9 introduced fused flash attention for training and inference.[&#91;13&#93;](#cite_note-cudnn-890-docs-13)

### Modern Era: Transformer Focus (2024-2025)

cuDNN 9.0 (February 2024) brought the first major version jump in four years, with a primary focus on accelerating [Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)-based models for the era of generative AI and large language models.[&#91;14&#93;](#cite_note-Nicely2024-14) This version introduced extensive enhancements for Scaled Dot-Product Attention (SDPA), including highly optimized kernels inspired by [FlashAttention](/index.php?title=FlashAttention&action=edit&redlink=1) and robust support for the FP8 data type on Hopper and [Blackwell](/wiki/nvidia_blackwell) architecture GPUs, offering up to 2× faster throughput in BF16 and up to 3× in FP8 for attention operations compared to earlier implementations.[&#91;14&#93;](#cite_note-Nicely2024-14)

Key features introduced in cuDNN 9 included:

- **Hardware forward compatibility**: Ensuring that applications compiled against cuDNN 9.0 or later can run on future, unreleased GPU architectures without modification, automatically benefiting from available performance improvements.[&#91;15&#93;](#cite_note-cudnn-9-1-1-rn-15)

- **Mixed input precision** support for matrix multiplications and convolutions (allowing inputs in different precisions, e.g., FP16 and FP32, to be used together in one operation)

- Improved error reporting for developers

- More streamlined installation process

- Library reorganization with dependency change from [cuBLAS](/index.php?title=CuBLAS&action=edit&redlink=1) to cuBLASLt[&#91;15&#93;](#cite_note-cudnn-9-1-1-rn-15)

Subsequent 9.x releases have continued to refine features. As of October 2025, cuDNN 9.14.0 includes automatic runtime configuration, complex datatype support for matrix multiplication, enhanced Blackwell architecture optimizations, and 5-10% SDPA performance improvements on Blackwell GPUs.[&#91;16&#93;](#cite_note-release-notes-16)

## Core Functionality and Primitives

cuDNN provides a comprehensive suite of optimized primitives that form the building blocks of modern deep neural networks. The set of accelerated routines has evolved over time, reflecting the major research trends and computational demands of the deep learning field.[&#91;1&#93;](#cite_note-cudnn-main-1)

### Convolution Operations

As the cornerstone of [Convolutional Neural Networks](/index.php?title=Convolutional_Neural_Network&action=edit&redlink=1) (CNNs), convolution was one of the original and most critical functions of cuDNN. The library offers highly optimized implementations for forward (inference) and backward (training, for both data and filter gradients) passes of 2D and 3D convolutions.[&#91;4&#93;](#cite_note-gfg-cudnn-4)[&#91;17&#93;](#cite_note-cudnn-devguide-870-17) It supports essential features like striding, padding, dilation, and grouped convolutions, along with flexible tensor data layouts such as NCHW and NHWC to minimize data transposition overhead.[&#91;18&#93;](#cite_note-rapid-innovation-cudnn-18)

For convolution operations, cuDNN provides multiple algorithmic implementations including GEMM-based, [FFT](/index.php?title=Fast_Fourier_transform&action=edit&redlink=1)-based, and [Winograd](/index.php?title=Winograd_filter-based_algorithm&action=edit&redlink=1)-based methods.[&#91;5&#93;](#cite_note-caffe-paper-5) The library uses heuristics to automatically select the optimal algorithm for a given input size and GPU architecture.

### Attention Mechanisms

With the rise of the Transformer architecture, attention has become a primary focus of optimization in recent cuDNN versions. The library includes state-of-the-art implementations of Scaled Dot-Product Attention (SDPA), incorporating techniques from algorithms like FlashAttention to reduce memory consumption and accelerate sequence processing.[&#91;19&#93;](#cite_note-ace-cudnn-19)[&#91;14&#93;](#cite_note-Nicely2024-14) This support extends to various use cases, including:

- Fused multi-head attention

- Sliding window attention

- Grouped Query Attention (GQA)

- Relative positional encoding

- Paged attention for efficient KV cache management (v9.4.0+)

These features are vital for training and inferencing large language models.[&#91;20&#93;](#cite_note-cudnn-frontend-releases-20)

### Matrix Multiplication and Tensor Operations

A fundamental operation for fully connected (dense) layers and numerous components within Transformer models, cuDNN provides highly optimized kernels for general matrix multiplication (GEMM).[&#91;1&#93;](#cite_note-cudnn-main-1) In addition to neural-network-specific layers, cuDNN provides fundamental tensor operations like matrix multiplication, tensor transforms (reordering data layouts), and reduction operations optimized for GPUs. Many of these leverage NVIDIA's other libraries (e.g., using cuBLAS/cuBLASLt or direct CUDA kernels) and are tuned for deep learning workloads.

### Pooling and Activation Functions

The library accelerates standard pooling operations like max pooling and average pooling for 2D and 3D spatial dimensions.[&#91;18&#93;](#cite_note-rapid-innovation-cudnn-18) It also provides fast implementations for common non-linear activation functions including [ReLU](/wiki/relu), Sigmoid, Tanh, [GELU](/index.php?title=GELU&action=edit&redlink=1), Swish, and [ELU](/index.php?title=Exponential_linear_unit&action=edit&redlink=1), which can be computed standalone or fused with other operations for efficiency.[&#91;1&#93;](#cite_note-cudnn-main-1)

### Normalization Operations

cuDNN offers efficient implementations of various normalization techniques crucial for training stability and performance, including:

- [Batch normalization](/wiki/batch_normalization)

- [Layer normalization](/index.php?title=Layer_normalization&action=edit&redlink=1)

- [Instance normalization](/index.php?title=Instance_normalization&action=edit&redlink=1)

- RMS normalization (Root Mean Square)

- [Group normalization](/index.php?title=Group_normalization&action=edit&redlink=1)

These support both the training (forward and backward normalization) and inference phases of deep networks.[&#91;21&#93;](#cite_note-cudnn-9-3-0-rn-21)

### Recurrent Neural Networks

Since version 5, cuDNN includes support for recurrent neural network layers. It implements optimized routines for popular RNN architectures including LSTM and GRU networks, as well as simple RNNs with ReLU or tanh activations.[&#91;9&#93;](#cite_note-Appleyard2016-9) These optimized RNN kernels dramatically improve performance for sequence modeling tasks.[&#91;22&#93;](#cite_note-cudnn-backend-docs-22)

## Technical Architecture

### Library Components

Starting with version 8, cuDNN underwent a significant architectural transformation. Modern cuDNN consists of multiple sub-libraries organized by functionality:[&#91;2&#93;](#cite_note-cudnn-docs-main-2)

| Library | Function | Description |
| --- | --- | --- |
| libcudnn_graph.so | Graph API | Main graph API for declarative operation composition |
| libcudnn_engines_precompiled.so | Engines | Pre-compiled kernel implementations |
| libcudnn_engines_runtime_compiled.so | JIT Engines | Runtime kernel generation for fusion patterns |
| libcudnn_heuristic.so | Heuristics | Automatic algorithm selection |
| libcudnn.so | Legacy API | Backward compatibility shim layer |
| libcudnn_cnn.so | CNN Operations | Convolution and pooling operations |
| libcudnn_ops.so | Tensor Operations | Basic tensor operations |
| libcudnn_adv.so | Advanced Operations | RNN and batch normalization |

### The Graph API

Introduced in cuDNN v8, the Graph API allows a developer to define an entire computation, or a segment of it, as a [directed acyclic graph](/index.php?title=Directed_acyclic_graph&action=edit&redlink=1) (DAG). In this graph, operations (like convolution or activation) are represented as nodes, and tensors are represented as edges connecting them.[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;12&#93;](#cite_note-cudnn-v8-blog-12) This declarative approach is a fundamental shift from the legacy model of calling individual functions one by one.

By providing the library with a "global view" of the intended computation, the cuDNN runtime can perform sophisticated, graph-level optimizations that are impossible with a myopic, operation-by-operation perspective. The most significant of these optimizations is [operation fusion](/index.php?title=Operation_fusion&action=edit&redlink=1).[&#91;6&#93;](#cite_note-modal-cudnn-6) This architectural change effectively transforms cuDNN from a library of fast math routines into a domain-specific graph compiler for deep learning.

### API Layers

cuDNN provides three API entry points with different abstraction levels, catering to different use cases and programming environments:[&#91;2&#93;](#cite_note-cudnn-docs-main-2)

#### Frontend API (C++/Python)

The Frontend API is the recommended entry point for most users.[&#91;1&#93;](#cite_note-cudnn-main-1) It is an open-source, header-only C++ library that provides a more concise and user-friendly abstraction over the powerful backend.[&#91;23&#93;](#cite_note-cudnn-frontend-github-23) It also includes Python bindings (available via `nvidia-cudnn-frontend` package), making it directly accessible from popular frameworks.[&#91;23&#93;](#cite_note-cudnn-frontend-github-23) The frontend adds convenience features on top of the backend, such as helpers for autotuning and filters for known hardware or software errata, simplifying the development process.[&#91;23&#93;](#cite_note-cudnn-frontend-github-23)

#### Backend API (C)

The Backend API is the lower-level, closed-source C interface to the cuDNN engine.[&#91;6&#93;](#cite_note-modal-cudnn-6) It exposes the full capabilities of the graph API and is intended for legacy use cases, integration into environments where C++ or Python are not suitable, or for developers who require maximum control.[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;22&#93;](#cite_note-cudnn-backend-docs-22) The open-source Frontend API also serves as a valuable reference implementation for developers working directly with the C backend.[&#91;23&#93;](#cite_note-cudnn-frontend-github-23)

## Key Features and Optimization Techniques

### Operation Fusion

Operation fusion is the process of combining a sequence of distinct neural network operations, such as a convolution followed by a bias addition and a ReLU activation, into a single, monolithic [GPU kernel](/index.php?title=GPU_kernel&action=edit&redlink=1).[&#91;6&#93;](#cite_note-modal-cudnn-6) The primary benefit of this technique is the significant reduction in memory bandwidth requirements. Without fusion, the intermediate result of each operation must be written to the GPU's main memory (global memory) and then read back by the next operation. This round-trip to global memory is a major performance bottleneck.

By fusing operations, intermediate data can be kept in much faster on-chip memory, such as registers or shared memory, throughout the fused sequence.[&#91;6&#93;](#cite_note-modal-cudnn-6) cuDNN can generate kernels for common fusion patterns at runtime or use specialized, pre-written kernels for high-value patterns like fused attention. Common fusion patterns include:

- ConvBiasAct: Convolution + bias + activation

- BnAddRelu: Batch normalization + residual add + ReLU

- Generic fusion patterns with DAG support

The runtime fusion engine with [JIT](/index.php?title=Just-in-time_compilation&action=edit&redlink=1) kernel generation can provide up to 2.5× speedup for common patterns.[&#91;1&#93;](#cite_note-cudnn-main-1)

### Heuristics and Automatic Tuning

For many deep learning primitives, especially convolution, multiple algorithms exist (e.g., GEMM-based, FFT-based, Winograd-based).[&#91;18&#93;](#cite_note-rapid-innovation-cudnn-18)[&#91;5&#93;](#cite_note-caffe-paper-5) The optimal choice depends on numerous factors, including the tensor dimensions, data types, filter sizes, and the specific GPU architecture. cuDNN incorporates a sophisticated heuristics engine that analyzes these parameters and automatically selects the predicted best-performing algorithm for a given workload.[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;6&#93;](#cite_note-modal-cudnn-6) This eliminates the need for developers to perform tedious manual benchmarking.[&#91;19&#93;](#cite_note-ace-cudnn-19)

For users seeking the absolute best performance, cuDNN also offers an autotuning feature. When enabled, the library can empirically benchmark a small set of promising algorithms on the target hardware at runtime and select the fastest one for subsequent executions.[&#91;24&#93;](#cite_note-cudnn-frontend-devguide-24) This combination of heuristics and autotuning functions as a form of JIT compilation, creating a highly optimized execution plan tailored to the specific model and hardware.

### Mixed-Precision and Tensor Core Acceleration

cuDNN is designed to fully exploit specialized hardware units within NVIDIA GPUs known as [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1).[&#91;1&#93;](#cite_note-cudnn-main-1) Tensor Cores provide dramatic speedups for matrix multiplication and convolution operations, which are the computational backbone of deep learning. They achieve maximum throughput using lower-precision numerical formats.

cuDNN supports multiple precision modes:[&#91;2&#93;](#cite_note-cudnn-docs-main-2)

- **FP64**: Double precision

- **FP32**: Single precision (standard floating point)

- **TF32**: TensorFloat-32 (Ampere architecture and later)

- **FP16**: Half precision

- **BF16**: Brain floating point

- **FP8**: 8-bit floating point (Hopper and Blackwell architectures)

- **INT8**: 8-bit integer

- **Complex FP32/FP64**: Complex datatypes (v9.14.0+)

cuDNN provides optimized kernels that utilize Tensor Cores for mixed-precision data types, enabling significantly faster model training and inference while also reducing the memory footprint.[&#91;19&#93;](#cite_note-ace-cudnn-19) The library internally chooses appropriate kernels based on hardware capabilities and user-specified math precision. This allows training in mixed precision (for example, using FP16/BF16 for computations with FP32 accumulation) to improve performance while maintaining accuracy.

### Memory Management

Efficient memory management is critical for handling large models and datasets. Many cuDNN operations require temporary storage buffers, known as "workspace" memory, for their intermediate calculations.[&#91;25&#93;](#cite_note-massed-mem-mgmt-25) The library provides APIs that allow applications to query the required workspace size ahead of time. This enables developers to manage a memory pool efficiently, pre-allocating a single large buffer and sub-allocating from it, which avoids the high overhead of repeated `cudaMalloc` calls.[&#91;25&#93;](#cite_note-massed-mem-mgmt-25)

### Multi-GPU Scaling with NCCL

While cuDNN's API is context-based and facilitates multi-threaded applications where each thread controls a separate GPU, the library itself is focused on optimizing computations on a single* GPU.[&#91;26&#93;](#cite_note-massed-multigpu-26) For scaling deep learning tasks across multiple GPUs or multiple nodes, cuDNN works in concert with the [NVIDIA Collective Communications Library](/index.php?title=NVIDIA_Collective_Communications_Library&action=edit&redlink=1) (NCCL).[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;27&#93;](#cite_note-massed-nccl-vs-cudnn-27)

In a typical [data-parallel](/wiki/data_parallelism) training scenario, the workflow is as follows:

1. Each GPU uses cuDNN to independently compute the forward and backward passes for its assigned mini-batch of data.

2. After gradients are computed on each GPU, NCCL is used to perform a highly efficient All-Reduce collective operation. This operation sums the gradients from all GPUs and distributes the result back to every GPU.

3. Each GPU then uses the averaged gradients to update its local copy of the model weights.

This modular design, which separates intra-GPU computation (cuDNN) from inter-GPU communication (NCCL), is a key strength of the NVIDIA platform. It allows each library to be optimized independently—cuDNN for new on-chip compute features and NCCL for new interconnect technologies like [NVLink](/index.php?title=NVLink&action=edit&redlink=1).[&#91;27&#93;](#cite_note-massed-nccl-vs-cudnn-27)

## Integration with Deep Learning Frameworks

The vast majority of developers interact with cuDNN indirectly through high-level deep learning frameworks.[&#91;19&#93;](#cite_note-ace-cudnn-19)[&#91;4&#93;](#cite_note-gfg-cudnn-4) cuDNN serves as the default, high-performance execution engine for nearly all major frameworks when running on NVIDIA GPUs.[&#91;28&#93;](#cite_note-nvidia-frameworks-28)

This integration is designed to be seamless. When a framework like PyTorch or TensorFlow is installed with GPU support, it automatically detects and utilizes the installed cuDNN library.[&#91;29&#93;](#cite_note-goml-install-29) As a result, developers can write high-level code (e.g., defining a convolutional layer in Python) and the framework's backend will automatically translate that operation into a call to the corresponding optimized cuDNN primitive, unlocking GPU acceleration without requiring any low-level programming.[&#91;3&#93;](#cite_note-cudnn-vs-cuda-3)[&#91;4&#93;](#cite_note-gfg-cudnn-4)

| Framework | Primary Maintainer | Integration Status |
| --- | --- | --- |
| [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) | [Meta AI](/index.php?title=Meta_Platforms&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;30&#93;](#cite_note-pytorch-cudnn-30) |
| [TensorFlow](/wiki/tensorflow) | [Google](/index.php?title=Google&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;28&#93;](#cite_note-nvidia-frameworks-28) |
| [JAX](/index.php?title=JAX_(programming_language)&action=edit&redlink=1) | [Google](/index.php?title=Google&action=edit&redlink=1) | Integrated via [XLA](/index.php?title=XLA_(compiler)&action=edit&redlink=1)[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;19&#93;](#cite_note-ace-cudnn-19) |
| [Apache MXNet](/index.php?title=Apache_MXNet&action=edit&redlink=1) | [Apache Software Foundation](/index.php?title=Apache_Software_Foundation&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;4&#93;](#cite_note-gfg-cudnn-4) |
| [Caffe](/index.php?title=Caffe_(software)&action=edit&redlink=1) / [Caffe2](/index.php?title=Caffe2&action=edit&redlink=1) | Berkeley / [Meta AI](/index.php?title=Meta_Platforms&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;4&#93;](#cite_note-gfg-cudnn-4) |
| [Chainer](/index.php?title=Chainer&action=edit&redlink=1) | Preferred Networks | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1) |
| [Microsoft Cognitive Toolkit](/index.php?title=Microsoft_Cognitive_Toolkit&action=edit&redlink=1) | [Microsoft](/index.php?title=Microsoft&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;28&#93;](#cite_note-nvidia-frameworks-28) |
| [PaddlePaddle](/index.php?title=PaddlePaddle&action=edit&redlink=1) | [Baidu](/index.php?title=Baidu&action=edit&redlink=1) | Native Integration[&#91;1&#93;](#cite_note-cudnn-main-1)[&#91;28&#93;](#cite_note-nvidia-frameworks-28) |
| [Keras](/wiki/keras) | Various | Via TensorFlow/PyTorch backends[&#91;1&#93;](#cite_note-cudnn-main-1) |
| [MATLAB](/index.php?title=MATLAB&action=edit&redlink=1) | [MathWorks](/index.php?title=MathWorks&action=edit&redlink=1) | Deep Learning Toolbox Integration[&#91;1&#93;](#cite_note-cudnn-main-1) |

### PyTorch

PyTorch provides deep cuDNN integration with automatic detection and utilization of the library for operations like Conv2d, LSTM, and BatchNorm2d.[&#91;30&#93;](#cite_note-pytorch-cudnn-30) PyTorch users can enable benchmark mode (`torch.backends.cudnn.benchmark = True`) for automatic algorithm selection, which can provide 10-25% performance improvements.[&#91;30&#93;](#cite_note-pytorch-cudnn-30)

### TensorFlow

TensorFlow automatically detects and uses cuDNN when available.[&#91;31&#93;](#cite_note-tensorflow-gpu-31) Recent versions like TensorFlow 2.18.0 support CUDA 12.3 with cuDNN 8.9, providing 40-50% speedup for LSTM/GRU operations with automatic Tensor Core utilization.[&#91;31&#93;](#cite_note-tensorflow-gpu-31)

### JAX

JAX leverages cuDNN through XLA compiler integration.[&#91;32&#93;](#cite_note-jax-gpu-32) The XLA compiler automatically selects cuDNN operations when beneficial, with automatic backend selection between cuDNN, cuBLAS, and custom kernels.

## Performance

The performance impact of cuDNN is substantial, often providing speedups of one to two orders of magnitude over CPU-only implementations and significant acceleration compared to unoptimized GPU code.[&#91;33&#93;](#cite_note-towards-ai-cudnn-33)

### Benchmarks

cuDNN demonstrates significant performance advantages across various workloads:

- **CPU vs GPU**: 10-100× speedup for deep learning workloads

- **Flash Attention**: Up to 75% speedup over FlashAttention v2 implementations on H100

- **FP8 precision**: Up to 1.2 PFLOPS on H200 for SDPA operations

- **Transformer models**: 1.15× speedup for Llama2 70B with FP8 on H200[&#91;14&#93;](#cite_note-Nicely2024-14)

| GPU | Model | Precision | Performance Metric | Reference |
| --- | --- | --- | --- | --- |
| NVIDIA A100 | [ResNet](/index.php?title=ResNet&action=edit&redlink=1)-50 | FP32 | 7,850 images/sec | [&#91;34&#93;](#cite_note-moldstud-benchmarks-34) |
| NVIDIA A100 | ResNet-50 | FP16 | 20,500 images/sec | [&#91;34&#93;](#cite_note-moldstud-benchmarks-34) |
| NVIDIA H100 (SXM5) | Aggregate Models | Mixed | ~5.7× vs V100 | [&#91;35&#93;](#cite_note-lambda-benchmarks-35) |
| NVIDIA RTX 4090 | Aggregate Models | Mixed | ~2.1× vs V100 | [&#91;35&#93;](#cite_note-lambda-benchmarks-35) |

### MLPerf Results

The NVIDIA AI platform, with cuDNN as a core software component, consistently sets performance records in the industry-standard [MLPerf](/index.php?title=MLPerf&action=edit&redlink=1) benchmarks for both training and inference across a wide variety of AI workloads.[&#91;36&#93;](#cite_note-mlperf-nvidia-36) NVIDIA platforms using cuDNN lead MLPerf benchmarks with results including:

- **ResNet-50 training**: 0.4 minutes at scale

- **BERT training**: 0.32 minutes at scale

- **3D U-Net**: 9.7× speedup with 800 GPUs

- Only platform submitting across all benchmark categories[&#91;36&#93;](#cite_note-mlperf-nvidia-36)

## Hardware Requirements and Compatibility

### GPU Architecture Support

cuDNN version requirements vary by GPU architecture:[&#91;37&#93;](#cite_note-support-matrix-37)

| Architecture | Compute Capability | Example GPUs | cuDNN Support |
| --- | --- | --- | --- |
| [Kepler](/index.php?title=Kepler_(microarchitecture)&action=edit&redlink=1) | 3.0, 3.5, 3.7 | Tesla K80, GTX 780 Ti | Supported in cuDNN 7.x and earlier |
| [Maxwell](/index.php?title=Maxwell_(microarchitecture)&action=edit&redlink=1) | 5.0, 5.2 | GTX 980, GTX 750 Ti | Supported in cuDNN 8.x (CUDA 11.x branch) |
| [Pascal](/index.php?title=Pascal_(microarchitecture)&action=edit&redlink=1) | 6.0, 6.1 | Tesla P100, GTX 1080 | Supported in cuDNN 8.x and 9.x (CUDA 11.x branch) |
| [Volta](/index.php?title=Volta_(microarchitecture)&action=edit&redlink=1) | 7.0 | Tesla V100, Titan V | Full support in cuDNN 8.x and 9.x + Tensor Cores |
| [Turing](/index.php?title=Turing_(microarchitecture)&action=edit&redlink=1) | 7.5 | RTX 2080, Tesla T4 | Full support in cuDNN 8.x and 9.x + Tensor Cores |
| [Ampere](/index.php?title=Ampere_(microarchitecture)&action=edit&redlink=1) | 8.0, 8.6 | A100, RTX 3090 | Full support + Enhanced Tensor Cores |
| [Ada Lovelace](/index.php?title=Ada_Lovelace_(microarchitecture)&action=edit&redlink=1) | 8.9 | RTX 4090, L4, L40 | Full support (requires cuDNN 8.9+) |
| [Hopper](/index.php?title=Hopper_(microarchitecture)&action=edit&redlink=1) | 9.0 | H100, H200 | Full support + FP8 (requires cuDNN 8.9+) |
| [Blackwell](/wiki/nvidia_blackwell) | 10.0 | B100, B200 | Full support + Enhanced FP8 (requires cuDNN 9.7+) |

**Note:** cuDNN 9.x with CUDA 12.x requires Turing architecture or later (compute capability 7.5+). For Maxwell and Pascal support, use cuDNN 8.x or 9.x with CUDA 11.x.[&#91;37&#93;](#cite_note-support-matrix-37)

### CUDA Toolkit Requirements

Each version of cuDNN is built against and requires specific version(s) of the CUDA Toolkit:[&#91;37&#93;](#cite_note-support-matrix-37)

- **cuDNN 9.x** (modern branch):
CUDA 12.6+ for Volta and later architectures

- CUDA 11.8 for Pascal and Maxwell architectures

**cuDNN 8.x**: CUDA 11.0 through CUDA 12.x
**cuDNN 7.x**: CUDA 8.0 through CUDA 10.2 (legacy)
### Operating System Support

Supported operating systems include:[&#91;37&#93;](#cite_note-support-matrix-37)

- Various distributions of [Linux](/index.php?title=Linux&action=edit&redlink=1) (such as [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1), [RHEL](/index.php?title=Red_Hat_Enterprise_Linux&action=edit&redlink=1), and [CentOS](/index.php?title=CentOS&action=edit&redlink=1))

- 64-bit versions of [Microsoft Windows](/index.php?title=Microsoft_Windows&action=edit&redlink=1)

- [Android](/index.php?title=Android_(operating_system)&action=edit&redlink=1) for embedded platforms (Jetson)

## Installation

cuDNN can be installed through various methods, each suited to different workflows and requirements.[&#91;38&#93;](#cite_note-install-guide-38)

### Package Managers

Recommended installation methods include:

**Conda:**

conda install nvidia::cudnn cuda-version=12

**pip:**

pip install nvidia-cudnn-cu12  # For CUDA 12.x
pip install nvidia-cudnn-cu11  # For CUDA 11.x

**Docker:**

docker pull nvidia/cuda:12.8.1-cudnn-devel-ubuntu22.04

### Manual Installation

For Linux systems requiring manual installation:[&#91;38&#93;](#cite_note-install-guide-38)

1. Download from NVIDIA Developer portal (requires NVIDIA Developer Program registration)

2. Extract archive: `tar -xvf cudnn-*.tar.xz`

3. Copy files to CUDA directory

4. Set appropriate permissions and update `LD_LIBRARY_PATH` environment variable

Users must join the NVIDIA Developer Program to download cuDNN packages.[&#91;38&#93;](#cite_note-install-guide-38)

## Applications

cuDNN powers numerous AI applications across industries:[&#91;39&#93;](#cite_note-applications-39)

- **[Computer Vision](/wiki/computer_vision)**: [Image classification](/index.php?title=Image_classification&action=edit&redlink=1), [object detection](/index.php?title=Object_detection&action=edit&redlink=1), [image segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1)

- **[Natural Language Processing](/wiki/natural_language_processing)**: [Large language models](/wiki/large_language_model), [machine translation](/index.php?title=Machine_translation&action=edit&redlink=1), [sentiment analysis](/wiki/sentiment_analysis)

- **[Autonomous vehicles](/index.php?title=Autonomous_vehicle&action=edit&redlink=1)**: Perception pipelines for self-driving cars

- **Healthcare**: Medical imaging analysis, drug discovery

- **[Recommender systems](/index.php?title=Recommender_system&action=edit&redlink=1)**: Deep learning-based recommendation engines

- **Speech Recognition**: [Automatic speech recognition](/index.php?title=Automatic_speech_recognition&action=edit&redlink=1), voice assistants

- **Generative AI**: [Text-to-image models](/index.php?title=Text-to-image_model&action=edit&redlink=1), [text generation](/index.php?title=Text_generation&action=edit&redlink=1), [video synthesis](/index.php?title=Video_synthesis&action=edit&redlink=1)

## Comparison with Alternatives

While cuDNN is the de facto standard for deep learning acceleration on NVIDIA hardware, other hardware vendors provide their own libraries for their respective ecosystems.

### AMD MIOpen

[MIOpen](/index.php?title=MIOpen&action=edit&redlink=1) is an open-source deep learning primitives library developed by [AMD](/index.php?title=AMD&action=edit&redlink=1) for its [ROCm](/index.php?title=ROCm&action=edit&redlink=1) [GPGPU](/index.php?title=GPGPU&action=edit&redlink=1) platform. It is designed to be the AMD equivalent of cuDNN.[&#91;40&#93;](#cite_note-miopen-vs-cudnn-porting-40) While MIOpen provides implementations for many core primitives like convolutions and pooling, it has historically lagged cuDNN in feature completeness and performance.[&#91;40&#93;](#cite_note-miopen-vs-cudnn-porting-40)[&#91;34&#93;](#cite_note-moldstud-benchmarks-34) Benchmarks comparing high-end NVIDIA GPUs with cuDNN against high-end AMD GPUs with MIOpen typically show a significant performance advantage for the NVIDIA ecosystem, particularly on models like ResNet-50 and Transformer-based workloads.[&#91;34&#93;](#cite_note-moldstud-benchmarks-34)

### Intel oneDNN

Intel's [oneAPI Deep Neural Network Library](/index.php?title=OneAPI_Deep_Neural_Network_Library&action=edit&redlink=1) (**oneDNN**), formerly known as MKL-DNN and DNNL, is an open-source performance library for accelerating deep learning applications on Intel architectures, including CPUs and GPUs.[&#91;41&#93;](#cite_note-onednn-github-41) It is a core component of Intel's [oneAPI](/index.php?title=OneAPI&action=edit&redlink=1) initiative. While oneDNN provides excellent performance on Intel hardware, its primary focus is different from cuDNN's. On NVIDIA hardware, oneDNN has experimental support that often functions by calling cuDNN as a backend, rather than acting as a direct competitor.[&#91;42&#93;](#cite_note-phoronix-onednn-42) Performance comparisons show that for GPU-accelerated workloads, the combination of NVIDIA hardware and cuDNN significantly outperforms oneDNN on CPU or GPU hardware.[&#91;43&#93;](#cite_note-massed-vs-other-43)

The competitive landscape highlights that cuDNN's strength comes not just from the library itself, but from its position within a deeply integrated, vertically co-designed ecosystem that spans from silicon architecture (e.g., Tensor Cores) and drivers to the CUDA platform and finally to the high-level frameworks. This tight integration creates a powerful performance advantage that is difficult for competitors to replicate.

| Library | Primary Developer | Primary Hardware Target | Open Source? | Key Differentiator |
| --- | --- | --- | --- | --- |
| **cuDNN** | NVIDIA | NVIDIA GPUs | No (Binary distribution) | Deep integration with CUDA ecosystem, Tensor Cores, and hardware co-design |
| **MIOpen** | AMD | AMD GPUs | Yes | Core component of the open-source AMD ROCm ecosystem |
| **oneDNN** | Intel / UXL Foundation | Intel CPUs & GPUs | Yes | Optimized for Intel Architecture; part of the cross-platform oneAPI standard |

## Licensing

cuDNN is distributed under a proprietary NVIDIA SDK License:[&#91;44&#93;](#cite_note-license-44)

- Free for development, research, and commercial use

- Runtime redistribution allowed with applications

- Requires NVIDIA Developer Program membership for download

- Restrictions on reverse engineering and use in critical applications (e.g., medical devices, nuclear facilities)

cuDNN is distributed free of charge to registered developers as part of NVIDIA's software development kit, but it is proprietary software and its use is governed by NVIDIA's license agreement.[&#91;45&#93;](#cite_note-ArchLinux-45)

## See Also

- [CUDA](/wiki/cuda)

- [Tensor Core](/index.php?title=Tensor_Core&action=edit&redlink=1)

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1)

- [Graphics processing unit](/index.php?title=Graphics_processing_unit&action=edit&redlink=1)

- [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1)

- [TensorFlow](/wiki/tensorflow)

- [NVIDIA](/wiki/nvidia)

- [MLPerf](/index.php?title=MLPerf&action=edit&redlink=1)

- [TensorRT](/index.php?title=TensorRT&action=edit&redlink=1)

- [NVIDIA Collective Communications Library](/index.php?title=NVIDIA_Collective_Communications_Library&action=edit&redlink=1) (NCCL)

- [Convolutional neural network](/wiki/convolutional_neural_network)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

## References

1. ↑ [1.00](#cite_ref-cudnn-main_1-0) [1.01](#cite_ref-cudnn-main_1-1) [1.02](#cite_ref-cudnn-main_1-2) [1.03](#cite_ref-cudnn-main_1-3) [1.04](#cite_ref-cudnn-main_1-4) [1.05](#cite_ref-cudnn-main_1-5) [1.06](#cite_ref-cudnn-main_1-6) [1.07](#cite_ref-cudnn-main_1-7) [1.08](#cite_ref-cudnn-main_1-8) [1.09](#cite_ref-cudnn-main_1-9) [1.10](#cite_ref-cudnn-main_1-10) [1.11](#cite_ref-cudnn-main_1-11) [1.12](#cite_ref-cudnn-main_1-12) [1.13](#cite_ref-cudnn-main_1-13) [1.14](#cite_ref-cudnn-main_1-14) [1.15](#cite_ref-cudnn-main_1-15) [1.16](#cite_ref-cudnn-main_1-16) [1.17](#cite_ref-cudnn-main_1-17) [1.18](#cite_ref-cudnn-main_1-18) [1.19](#cite_ref-cudnn-main_1-19) [1.20](#cite_ref-cudnn-main_1-20) [1.21](#cite_ref-cudnn-main_1-21) ["NVIDIA cuDNN"](https://developer.nvidia.com/cudnn).&#32;NVIDIA Developer.&#32;[https://developer.nvidia.com/cudnn](https://developer.nvidia.com/cudnn).

2. ↑ [2.0](#cite_ref-cudnn-docs-main_2-0) [2.1](#cite_ref-cudnn-docs-main_2-1) [2.2](#cite_ref-cudnn-docs-main_2-2) [2.3](#cite_ref-cudnn-docs-main_2-3) ["NVIDIA cuDNN Documentation"](https://docs.nvidia.com/cudnn/index.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/cudnn/index.html](https://docs.nvidia.com/cudnn/index.html).

3. ↑ [3.0](#cite_ref-cudnn-vs-cuda_3-0) [3.1](#cite_ref-cudnn-vs-cuda_3-1) ["What is cuDNN?"](https://blog.roboflow.com/what-is-cudnn/).&#32;Roboflow.&#32;[https://blog.roboflow.com/what-is-cudnn/](https://blog.roboflow.com/what-is-cudnn/).

4. ↑ [4.0](#cite_ref-gfg-cudnn_4-0) [4.1](#cite_ref-gfg-cudnn_4-1) [4.2](#cite_ref-gfg-cudnn_4-2) [4.3](#cite_ref-gfg-cudnn_4-3) [4.4](#cite_ref-gfg-cudnn_4-4) [4.5](#cite_ref-gfg-cudnn_4-5) ["CUDA Deep Neural Network (cuDNN)"](https://www.geeksforgeeks.org/deep-learning/cuda-deep-neural-network-cudnn/).&#32;GeeksforGeeks.&#32;[https://www.geeksforgeeks.org/deep-learning/cuda-deep-neural-network-cudnn/](https://www.geeksforgeeks.org/deep-learning/cuda-deep-neural-network-cudnn/).

5. ↑ [5.0](#cite_ref-caffe-paper_5-0) [5.1](#cite_ref-caffe-paper_5-1) [5.2](#cite_ref-caffe-paper_5-2) [Template:Cite arXiv](/index.php?title=Template:Cite_arXiv&action=edit&redlink=1)

6. ↑ [6.0](#cite_ref-modal-cudnn_6-0) [6.1](#cite_ref-modal-cudnn_6-1) [6.2](#cite_ref-modal-cudnn_6-2) [6.3](#cite_ref-modal-cudnn_6-3) [6.4](#cite_ref-modal-cudnn_6-4) [6.5](#cite_ref-modal-cudnn_6-5) ["What is cuDNN?"](https://modal.com/gpu-glossary/host-software/cudnn).&#32;Modal Labs.&#32;[https://modal.com/gpu-glossary/host-software/cudnn](https://modal.com/gpu-glossary/host-software/cudnn).

7. ↑ [7.0](#cite_ref-InfoQSerrano2014_7-0) [7.1](#cite_ref-InfoQSerrano2014_7-1) [7.2](#cite_ref-InfoQSerrano2014_7-2) [7.3](#cite_ref-InfoQSerrano2014_7-3) Jérôme Serrano&#32;(2014-09-29).&#32;["Nvidia Introduces cuDNN, a CUDA-based library for Deep Neural Networks"](https://www.infoq.com/news/2014/09/cudnn/).&#32;InfoQ.&#32;[https://www.infoq.com/news/2014/09/cudnn/](https://www.infoq.com/news/2014/09/cudnn/).

8. [↑](#cite_ref-cudnn3-news_8-0) ["NVIDIA Doubles Performance for Deep Learning Training"](https://nvidianews.nvidia.com/news/nvidia-doubles-performance-for-deep-learning-training).&#32;NVIDIA News.&#32;[https://nvidianews.nvidia.com/news/nvidia-doubles-performance-for-deep-learning-training](https://nvidianews.nvidia.com/news/nvidia-doubles-performance-for-deep-learning-training).

9. ↑ [9.0](#cite_ref-Appleyard2016_9-0) [9.1](#cite_ref-Appleyard2016_9-1) [9.2](#cite_ref-Appleyard2016_9-2) Jeremy Appleyard&#32;(2016-04-06).&#32;["Optimizing Recurrent Neural Networks in cuDNN 5"](https://developer.nvidia.com/blog/optimizing-recurrent-neural-networks-cudnn-5/).&#32;NVIDIA Technical Blog.&#32;[https://developer.nvidia.com/blog/optimizing-recurrent-neural-networks-cudnn-5/](https://developer.nvidia.com/blog/optimizing-recurrent-neural-networks-cudnn-5/).

10. [↑](#cite_ref-tensor-ops_10-0) ["Tensor Ops Made Easier in cuDNN"](https://developer.nvidia.com/blog/tensor-ops-made-easier-in-cudnn/).&#32;NVIDIA Developer Blog.&#32;[https://developer.nvidia.com/blog/tensor-ops-made-easier-in-cudnn/](https://developer.nvidia.com/blog/tensor-ops-made-easier-in-cudnn/).

11. ↑ [11.0](#cite_ref-Hatenablog2020_11-0) [11.1](#cite_ref-Hatenablog2020_11-1) [11.2](#cite_ref-Hatenablog2020_11-2) ["cuDNN Release 8.0.3 – Highlights"](https://sdpaninf.hatenablog.com/entry/2020/09/27/215443).&#32;NVIDIA via sdpaninf blog.&#32;2020-09-27.&#32;[https://sdpaninf.hatenablog.com/entry/2020/09/27/215443](https://sdpaninf.hatenablog.com/entry/2020/09/27/215443).

12. ↑ [12.0](#cite_ref-cudnn-v8-blog_12-0) [12.1](#cite_ref-cudnn-v8-blog_12-1) Bill CX.&#32;["cuDNN v8 (2020.4.8 GTC)"](https://medium.com/@billchenxi/cudnn-v8-2020-4-8-gtc-5a86365d33c3).&#32;Medium.&#32;[https://medium.com/@billchenxi/cudnn-v8-2020-4-8-gtc-5a86365d33c3](https://medium.com/@billchenxi/cudnn-v8-2020-4-8-gtc-5a86365d33c3).

13. [↑](#cite_ref-cudnn-890-docs_13-0) ["NVIDIA cuDNN Documentation v8.9.0"](https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-890/index.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-890/index.html](https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-890/index.html).

14. ↑ [14.0](#cite_ref-Nicely2024_14-0) [14.1](#cite_ref-Nicely2024_14-1) [14.2](#cite_ref-Nicely2024_14-2) [14.3](#cite_ref-Nicely2024_14-3) Matthew Nicely&#32;(2024-05-24).&#32;["Accelerating Transformers with NVIDIA cuDNN 9"](https://developer.nvidia.com/blog/accelerating-transformers-with-nvidia-cudnn-9/).&#32;NVIDIA Technical Blog.&#32;[https://developer.nvidia.com/blog/accelerating-transformers-with-nvidia-cudnn-9/](https://developer.nvidia.com/blog/accelerating-transformers-with-nvidia-cudnn-9/).

15. ↑ [15.0](#cite_ref-cudnn-9-1-1-rn_15-0) [15.1](#cite_ref-cudnn-9-1-1-rn_15-1) ["cuDNN 9.1.1 Release Notes"](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.1.1/release-notes.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/backend/v9.1.1/release-notes.html](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.1.1/release-notes.html).

16. [↑](#cite_ref-release-notes_16-0) ["cuDNN Release Notes"](https://docs.nvidia.com/deeplearning/cudnn/backend/latest/release-notes.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/backend/latest/release-notes.html](https://docs.nvidia.com/deeplearning/cudnn/backend/latest/release-notes.html).

17. [↑](#cite_ref-cudnn-devguide-870_17-0) ["NVIDIA cuDNN Developer Guide v8.7.0"](https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-870/pdf/cuDNN-Developer-Guide.pdf).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-870/pdf/cuDNN-Developer-Guide.pdf](https://docs.nvidia.com/deeplearning/cudnn/archives/cudnn-870/pdf/cuDNN-Developer-Guide.pdf).

18. ↑ [18.0](#cite_ref-rapid-innovation-cudnn_18-0) [18.1](#cite_ref-rapid-innovation-cudnn_18-1) [18.2](#cite_ref-rapid-innovation-cudnn_18-2) ["Leveraging NVIDIA CUDA & cuDNN for Accelerated Computer Vision Inference"](https://www.rapidinnovation.io/post/leveraging-nvidia-cuda-cudnn-accelerated-computer-vision-inference).&#32;Rapid Innovation.&#32;[https://www.rapidinnovation.io/post/leveraging-nvidia-cuda-cudnn-accelerated-computer-vision-inference](https://www.rapidinnovation.io/post/leveraging-nvidia-cuda-cudnn-accelerated-computer-vision-inference).

19. ↑ [19.0](#cite_ref-ace-cudnn_19-0) [19.1](#cite_ref-ace-cudnn_19-1) [19.2](#cite_ref-ace-cudnn_19-2) [19.3](#cite_ref-ace-cudnn_19-3) [19.4](#cite_ref-ace-cudnn_19-4) ["What is cuDNN and Install Guide"](https://acecloud.ai/blog/what-is-cudnn-and-install-guide/).&#32;AceCloud.&#32;[https://acecloud.ai/blog/what-is-cudnn-and-install-guide/](https://acecloud.ai/blog/what-is-cudnn-and-install-guide/).

20. [↑](#cite_ref-cudnn-frontend-releases_20-0) ["cuDNN Frontend Releases"](https://github.com/NVIDIA/cudnn-frontend/releases).&#32;NVIDIA via GitHub.&#32;[https://github.com/NVIDIA/cudnn-frontend/releases](https://github.com/NVIDIA/cudnn-frontend/releases).

21. [↑](#cite_ref-cudnn-9-3-0-rn_21-0) ["cuDNN 9.3.0 Release Notes"](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.3.0/release-notes.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/backend/v9.3.0/release-notes.html](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.3.0/release-notes.html).

22. ↑ [22.0](#cite_ref-cudnn-backend-docs_22-0) [22.1](#cite_ref-cudnn-backend-docs_22-1) ["NVIDIA cuDNN Backend Documentation"](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.11.1/index.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/backend/v9.11.1/index.html](https://docs.nvidia.com/deeplearning/cudnn/backend/v9.11.1/index.html).

23. ↑ [23.0](#cite_ref-cudnn-frontend-github_23-0) [23.1](#cite_ref-cudnn-frontend-github_23-1) [23.2](#cite_ref-cudnn-frontend-github_23-2) [23.3](#cite_ref-cudnn-frontend-github_23-3) ["NVIDIA/cudnn-frontend"](https://github.com/NVIDIA/cudnn-frontend).&#32;GitHub.&#32;[https://github.com/NVIDIA/cudnn-frontend](https://github.com/NVIDIA/cudnn-frontend).

24. [↑](#cite_ref-cudnn-frontend-devguide_24-0) ["cuDNN Frontend Developer Guide"](https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html](https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html).

25. ↑ [25.0](#cite_ref-massed-mem-mgmt_25-0) [25.1](#cite_ref-massed-mem-mgmt_25-1) ["How does cuDNN handle memory management in deep learning models?"](https://massedcompute.com/faq-answers/?question=How%20does%20cuDNN%20handle%20memory%20management%20in%20deep%20learning%20models).&#32;Massed Compute.&#32;[https://massedcompute.com/faq-answers/?question=How%20does%20cuDNN%20handle%20memory%20management%20in%20deep%20learning%20models](https://massedcompute.com/faq-answers/?question=How%20does%20cuDNN%20handle%20memory%20management%20in%20deep%20learning%20models).

26. [↑](#cite_ref-massed-multigpu_26-0) ["Can cuDNN handle multi-GPU communication in a cloud-based environment?"](https://massedcompute.com/faq-answers/?question=Can%20cuDNN%20handle%20multi-GPU%20communication%20in%20a%20cloud-based%20environment).&#32;Massed Compute.&#32;[https://massedcompute.com/faq-answers/?question=Can%20cuDNN%20handle%20multi-GPU%20communication%20in%20a%20cloud-based%20environment](https://massedcompute.com/faq-answers/?question=Can%20cuDNN%20handle%20multi-GPU%20communication%20in%20a%20cloud-based%20environment).

27. ↑ [27.0](#cite_ref-massed-nccl-vs-cudnn_27-0) [27.1](#cite_ref-massed-nccl-vs-cudnn_27-1) ["What are the key differences between NCCL and cuDNN for distributed deep learning?"](https://massedcompute.com/faq-answers/?question=What%20are%20the%20key%20differences%20between%20NCCL%20and%20cuDNN%20for%20distributed%20deep%20learning).&#32;Massed Compute.&#32;[https://massedcompute.com/faq-answers/?question=What%20are%20the%20key%20differences%20between%20NCCL%20and%20cuDNN%20for%20distributed%20deep%20learning](https://massedcompute.com/faq-answers/?question=What%20are%20the%20key%20differences%20between%20NCCL%20and%20cuDNN%20for%20distributed%20deep%20learning).

28. ↑ [28.0](#cite_ref-nvidia-frameworks_28-0) [28.1](#cite_ref-nvidia-frameworks_28-1) [28.2](#cite_ref-nvidia-frameworks_28-2) [28.3](#cite_ref-nvidia-frameworks_28-3) ["NVIDIA Deep Learning Frameworks"](https://developer.nvidia.com/deep-learning-frameworks).&#32;NVIDIA Developer.&#32;[https://developer.nvidia.com/deep-learning-frameworks](https://developer.nvidia.com/deep-learning-frameworks).

29. [↑](#cite_ref-goml-install_29-0) ["Enhancing Deep Learning Efficiency with CUDA and cuDNN"](https://www.goml.io/blog/enhancing-deep-learning-efficiency-with-cuda-and-cudnn-a-comprehensive-guide-for-pytorch-and-tensorflow).&#32;GOML.&#32;[https://www.goml.io/blog/enhancing-deep-learning-efficiency-with-cuda-and-cudnn-a-comprehensive-guide-for-pytorch-and-tensorflow](https://www.goml.io/blog/enhancing-deep-learning-efficiency-with-cuda-and-cudnn-a-comprehensive-guide-for-pytorch-and-tensorflow).

30. ↑ [30.0](#cite_ref-pytorch-cudnn_30-0) [30.1](#cite_ref-pytorch-cudnn_30-1) [30.2](#cite_ref-pytorch-cudnn_30-2) ["PyTorch CUDA Semantics"](https://pytorch.org/docs/stable/notes/cuda.html).&#32;PyTorch.&#32;[https://pytorch.org/docs/stable/notes/cuda.html](https://pytorch.org/docs/stable/notes/cuda.html).

31. ↑ [31.0](#cite_ref-tensorflow-gpu_31-0) [31.1](#cite_ref-tensorflow-gpu_31-1) ["GPU support - TensorFlow"](https://www.tensorflow.org/install/gpu).&#32;TensorFlow.&#32;[https://www.tensorflow.org/install/gpu](https://www.tensorflow.org/install/gpu).

32. [↑](#cite_ref-jax-gpu_32-0) ["JAX GPU Support"](https://github.com/google/jax#installation).&#32;Google JAX.&#32;[https://github.com/google/jax#installation](https://github.com/google/jax#installation).

33. [↑](#cite_ref-towards-ai-cudnn_33-0) ["CUDA vs. cuDNN: The Dynamic Duo That Powers Your AI Dreams"](https://towardsai.net/p/l/cuda-vs-cudnn-the-dynamic-duo-that-powers-your-ai-dreams).&#32;Towards AI.&#32;[https://towardsai.net/p/l/cuda-vs-cudnn-the-dynamic-duo-that-powers-your-ai-dreams](https://towardsai.net/p/l/cuda-vs-cudnn-the-dynamic-duo-that-powers-your-ai-dreams).

34. ↑ [34.0](#cite_ref-moldstud-benchmarks_34-0) [34.1](#cite_ref-moldstud-benchmarks_34-1) [34.2](#cite_ref-moldstud-benchmarks_34-2) [34.3](#cite_ref-moldstud-benchmarks_34-3) ["CuDNN vs Other Deep Learning Libraries: Which One Should You Choose for Optimal Performance?"](https://moldstud.com/articles/p-cudnn-vs-other-deep-learning-libraries-which-one-should-you-choose-for-optimal-performance).&#32;MoldStud.&#32;[https://moldstud.com/articles/p-cudnn-vs-other-deep-learning-libraries-which-one-should-you-choose-for-optimal-performance](https://moldstud.com/articles/p-cudnn-vs-other-deep-learning-libraries-which-one-should-you-choose-for-optimal-performance).

35. ↑ [35.0](#cite_ref-lambda-benchmarks_35-0) [35.1](#cite_ref-lambda-benchmarks_35-1) ["GPU Benchmarks for Deep Learning"](https://lambda.ai/gpu-benchmarks).&#32;Lambda.&#32;[https://lambda.ai/gpu-benchmarks](https://lambda.ai/gpu-benchmarks).

36. ↑ [36.0](#cite_ref-mlperf-nvidia_36-0) [36.1](#cite_ref-mlperf-nvidia_36-1) ["NVIDIA AI Platform Sets Records in MLPerf Benchmarks"](https://www.nvidia.com/en-us/data-center/resources/mlperf-benchmarks/).&#32;NVIDIA.&#32;[https://www.nvidia.com/en-us/data-center/resources/mlperf-benchmarks/](https://www.nvidia.com/en-us/data-center/resources/mlperf-benchmarks/).

37. ↑ [37.0](#cite_ref-support-matrix_37-0) [37.1](#cite_ref-support-matrix_37-1) [37.2](#cite_ref-support-matrix_37-2) [37.3](#cite_ref-support-matrix_37-3) ["cuDNN Support Matrix"](https://docs.nvidia.com/deeplearning/cudnn/latest/reference/support-matrix.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/latest/reference/support-matrix.html](https://docs.nvidia.com/deeplearning/cudnn/latest/reference/support-matrix.html).

38. ↑ [38.0](#cite_ref-install-guide_38-0) [38.1](#cite_ref-install-guide_38-1) [38.2](#cite_ref-install-guide_38-2) ["cuDNN Installation Guide"](https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html](https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html).

39. [↑](#cite_ref-applications_39-0) ["Deep Learning Applications"](https://developer.nvidia.com/deep-learning).&#32;NVIDIA.&#32;[https://developer.nvidia.com/deep-learning](https://developer.nvidia.com/deep-learning).

40. ↑ [40.0](#cite_ref-miopen-vs-cudnn-porting_40-0) [40.1](#cite_ref-miopen-vs-cudnn-porting_40-1) ["MIOpen Porting Guide"](https://rocm.docs.amd.com/projects/MIOpen/en/docs-6.4.1/conceptual/porting-guide.html).&#32;AMD.&#32;[https://rocm.docs.amd.com/projects/MIOpen/en/docs-6.4.1/conceptual/porting-guide.html](https://rocm.docs.amd.com/projects/MIOpen/en/docs-6.4.1/conceptual/porting-guide.html).

41. [↑](#cite_ref-onednn-github_41-0) ["oneAPI Deep Neural Network Library (oneDNN)"](https://github.com/uxlfoundation/oneDNN).&#32;GitHub.&#32;[https://github.com/uxlfoundation/oneDNN](https://github.com/uxlfoundation/oneDNN).

42. [↑](#cite_ref-phoronix-onednn_42-0) ["Intel's oneDNN 2.1 Released With NVIDIA GPU Support"](https://www.phoronix.com/news/Intel-oneDNN-2.1-Released).&#32;Phoronix.&#32;[https://www.phoronix.com/news/Intel-oneDNN-2.1-Released](https://www.phoronix.com/news/Intel-oneDNN-2.1-Released).

43. [↑](#cite_ref-massed-vs-other_43-0) ["What are the differences between cuDNN and other deep learning acceleration libraries?"](https://massedcompute.com/faq-answers/?question=What%20are%20the%20differences%20between%20cuDNN%20and%20other%20deep%20learning%20acceleration%20libraries).&#32;Massed Compute.&#32;[https://massedcompute.com/faq-answers/?question=What%20are%20the%20differences%20between%20cuDNN%20and%20other%20deep%20learning%20acceleration%20libraries](https://massedcompute.com/faq-answers/?question=What%20are%20the%20differences%20between%20cuDNN%20and%20other%20deep%20learning%20acceleration%20libraries).

44. [↑](#cite_ref-license_44-0) ["NVIDIA cuDNN License"](https://docs.nvidia.com/deeplearning/cudnn/latest/reference/eula.html).&#32;NVIDIA.&#32;[https://docs.nvidia.com/deeplearning/cudnn/latest/reference/eula.html](https://docs.nvidia.com/deeplearning/cudnn/latest/reference/eula.html).

45. [↑](#cite_ref-ArchLinux_45-0) ["cudnn 9.14.0 – NVIDIA CUDA Deep Neural Network library"](https://archlinux.org/packages/extra/x86_64/cudnn/).&#32;Arch Linux Package Repository.&#32;[https://archlinux.org/packages/extra/x86_64/cudnn/](https://archlinux.org/packages/extra/x86_64/cudnn/).

## External links

- [Official website](https://developer.nvidia.com/cudnn)

- [Official Documentation](https://docs.nvidia.com/deeplearning/cudnn/latest/)

- [cuDNN Frontend on GitHub](https://github.com/NVIDIA/cudnn-frontend)

- [cuDNN Archive](https://developer.nvidia.com/cudnn-archive)

- [NVIDIA Developer Forums - cuDNN](https://forums.developer.nvidia.com/c/ai-deep-learning/cudnn/97)