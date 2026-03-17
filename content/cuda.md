---
title: "CUDA"
slug: "cuda"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

**CUDA** (**Compute Unified Device Architecture**) is [NVIDIA](/wiki/nvidia)'s [parallel computing](/index.php?title=Parallel_computing&action=edit&redlink=1) platform and [application programming interface](/index.php?title=Application_programming_interface&action=edit&redlink=1) (API) model that revolutionized how developers harness [GPU](/index.php?title=Graphics_processing_unit&action=edit&redlink=1) power for [general-purpose computing](/index.php?title=General-purpose_computing&action=edit&redlink=1). Released in 2006-2007, CUDA transformed GPUs from graphics-only processors into massively parallel computing engines, enabling breakthrough advances in [artificial intelligence](/wiki/artificial_intelligence), [scientific computing](/index.php?title=Scientific_computing&action=edit&redlink=1), and [high-performance computing](/index.php?title=High-performance_computing&action=edit&redlink=1) (HPC) applications.[&#91;1&#93;](#cite_note-nvidia-cuda-guide-1) Today, CUDA powers over 90% of AI workloads globally and has become the de facto standard for GPU-accelerated computing, with more than 4 million developers worldwide and a software ecosystem comprising 400+ libraries.[&#91;2&#93;](#cite_note-nvidia-cuda-zone-2)

The platform's significance extends beyond technical capability—CUDA sparked the modern [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) revolution. When [AlexNet](/index.php?title=AlexNet&action=edit&redlink=1) won the 2012 [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) competition using CUDA-powered GPUs, it demonstrated that [neural networks](/index.php?title=Neural_networks&action=edit&redlink=1) could achieve unprecedented accuracy through GPU acceleration.[&#91;3&#93;](#cite_note-alexnet-chm-3) This breakthrough enabled today's [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) systems, from [ChatGPT](/wiki/chatgpt) to [Stable Diffusion](/wiki/stable_diffusion), all trained on CUDA infrastructure.

CUDA allows software developers to use a CUDA-enabled GPU for general-purpose processing, an approach known as [GPGPU](/index.php?title=GPGPU&action=edit&redlink=1) (General-Purpose computing on Graphics Processing Units). The platform is delivered through the **NVIDIA CUDA Toolkit**, a comprehensive software development kit that includes a compiler ([NVCC](/index.php?title=NVCC&action=edit&redlink=1)), GPU-accelerated libraries, debugging and optimization tools, and the runtime needed to deploy applications.[&#91;4&#93;](#cite_note-cuda-toolkit-docs-4)

## Origins: from academic research to commercial platform

CUDA emerged from a convergence of academic insight and strategic corporate vision. **Ian Buck**, a [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1) Ph.D. student, pioneered the concept in 2003 when he developed Brook, the first widely adopted programming language for general-purpose GPU computing.[&#91;5&#93;](#cite_note-nvidia-gpu-story-5) His research, supported by both NVIDIA and [DARPA](/index.php?title=DARPA&action=edit&redlink=1), demonstrated that GPUs could solve computational problems far beyond graphics rendering.

In 2004, NVIDIA hired Buck and paired him with John Nickolls, the company's director of architecture for GPU computing. Together, they transformed Brook's academic concepts into a production-ready platform. On November 8, 2006, NVIDIA CEO [Jensen Huang](/index.php?title=Jensen_Huang&action=edit&redlink=1) unveiled CUDA at a press event, describing it as "the GPU computing revolution."[&#91;6&#93;](#cite_note-hexus-cuda-launch-6) The announcement positioned CUDA as a fundamentally new computing architecture, featuring the industry's first C-compiler development environment specifically designed for GPUs. The platform launched alongside the [GeForce 8800 GTX](/index.php?title=GeForce_8800_GTX&action=edit&redlink=1) graphics card—the first CUDA-compatible GPU based on the [Tesla](/index.php?title=Tesla_(microarchitecture)&action=edit&redlink=1) architecture.

The initial CUDA SDK became publicly available on February 15, 2007 for [Windows](/index.php?title=Microsoft_Windows&action=edit&redlink=1) and [Linux](/index.php?title=Linux&action=edit&redlink=1), with [macOS](/index.php?title=MacOS&action=edit&redlink=1) support following in February 2008.[&#91;7&#93;](#cite_note-wiki-cuda-7) **CUDA Toolkit 1.0** shipped in June 2007, marking the official production release.[&#91;8&#93;](#cite_note-insidehpc-cuda10-8) This timing proved prescient: CUDA matured just as researchers worldwide were discovering that deep neural networks could achieve remarkable results if only they had sufficient computational power.

Early adoption came from supercomputing facilities. Tokyo Tech's TSUBAME supercomputer deployed CUDA in 2008, followed by Oak Ridge National Laboratory's Titan in 2012. These implementations validated CUDA's capability for large-scale scientific computing while the AI community was beginning its own GPU experiments. Around 2012, CUDA began to play a pivotal role in the resurgence of artificial intelligence, most famously by enabling the AlexNet deep neural network to achieve a breakthrough victory in the ImageNet competition.[&#91;9&#93;](#cite_note-modular-history-9)

## How CUDA works: bridging CPUs and massively parallel GPUs

CUDA operates on a **heterogeneous computing model** where CPUs (hosts) and GPUs (devices) work together, each optimized for different computational patterns.[&#91;10&#93;](#cite_note-cuda-programming-guide-10) The CPU handles sequential logic and system management while the GPU executes thousands of threads in parallel. Both processors maintain separate memory spaces in [DRAM](/index.php?title=DRAM&action=edit&redlink=1), communicating via [PCIe](/index.php?title=PCIe&action=edit&redlink=1) bus for data transfers.

### The kernel execution model

At CUDA's core is the **kernel**—a [C++](/index.php?title=C%2B%2B&action=edit&redlink=1) function that executes N times in parallel by N different GPU threads. Developers define kernels using the `__global__` declaration specifier and launch them with a special syntax specifying the execution configuration:

kernelFunction<<<numBlocks, threadsPerBlock>>>(arguments);

When a kernel launches, the host transfers input data from system memory to GPU memory, the GPU executes the parallel computation with data cached on-chip for performance, then results copy back to host memory. This execution model enables the same CUDA code to automatically scale across different GPU sizes—a GPU with more [Streaming Multiprocessors](/index.php?title=Streaming_Multiprocessor&action=edit&redlink=1) (SMs) simply executes the program faster without code modification.

A typical CUDA program consists of a mix of host code, which runs sequentially on the CPU, and device code, which runs in parallel on the GPU. The overall flow of a CUDA application generally follows these steps:

1. The host allocates memory on the device

2. The host copies input data from host memory to the allocated device memory

3. The host launches a computation kernel on the device

4. The device's parallel cores execute the kernel

5. The host copies the results from device memory back to host memory

6. The host frees the allocated device memory

Function type qualifiers define where code executes: `__global__` for kernels called from host, `__device__` for GPU functions called from device code, and `__host__` (default) for CPU functions. Variable qualifiers specify memory placement: `__shared__` for block-level shared memory, `__constant__` for read-only global constant memory, and `__device__` for global memory variables.

### Thread hierarchy: organizing massive parallelism

CUDA organizes threads in a sophisticated three-level hierarchy designed for both programming clarity and hardware efficiency.[&#91;11&#93;](#cite_note-cuda-thread-block-11) **Individual threads** represent the finest execution granularity, each identified by a unique `threadIdx` (with x, y, z components) and possessing private local memory and registers.

Threads group into **thread blocks**, collections of up to 1,024 threads that cooperate through shared memory and synchronization barriers. All threads within a block can access the same shared memory region (48-228 KB depending on architecture) and synchronize using `__syncthreads()`. This cooperation mechanism enables complex parallel algorithms while the independence requirement between blocks ensures scalability.

Multiple thread blocks form a **grid**—the complete set of blocks executing a single kernel. Grids support up to 2³¹-1 blocks in the x-dimension and 65,535 in y and z dimensions. The GPU scheduler assigns blocks to available Streaming Multiprocessors dynamically, enabling automatic scalability across different GPU configurations.

Both grids and blocks can be organized in one, two, or three dimensions, which is useful for problems involving multi-dimensional data such as images, volumes, or matrices. Within a kernel, threads can determine their unique identity and location using built-in variables:

// Thread position within block
int tid_x = threadIdx.x;
int tid_y = threadIdx.y;
int tid_z = threadIdx.z;

// Block position within grid
int bid_x = blockIdx.x;
int bid_y = blockIdx.y;

// Dimensions
int block_dim_x = blockDim.x;
int grid_dim_x = gridDim.x;

// Global thread index (1D example)
int global_id = blockIdx.x * blockDim.x + threadIdx.x;

### Warps and SIMT architecture

The **warp**, consisting of 32 consecutive threads, forms the fundamental execution unit in NVIDIA's [SIMT](/index.php?title=SIMT&action=edit&redlink=1) (Single Instruction, Multiple Thread) architecture.[&#91;12&#93;](#cite_note-cuda-refresher-12) All threads in a warp execute the same instruction simultaneously while maintaining individual program counters and register states—distinguishing SIMT from traditional [SIMD](/index.php?title=SIMD&action=edit&redlink=1) by allowing divergent execution paths.

When threads within a warp take different execution paths (branching), **warp divergence** occurs. The GPU serializes divergent paths, masking inactive threads while executing each branch sequentially. This significantly impacts performance, making divergence avoidance a critical optimization strategy. Threads reconverge after all divergent paths complete.

The SM's warp scheduler selects ready warps for execution, switching between warps with zero overhead since register states remain on-chip. When one warp stalls waiting for memory, another immediately executes—this **latency hiding** through massive multithreading constitutes GPU performance fundamentals.

The CUDA architecture maps hardware resources to software abstractions in the following ontology:

| Hardware Memory | Code Memory | Hardware Computation | Code Syntax | Code Semantics |
| --- | --- | --- | --- | --- |
| RAM | Non-CUDA variables | Host | Program | One routine call |
| VRAM, GPU L2 cache | Global, const, texture | Device | Grid | Simultaneous subroutine calls on many processors |
| GPU L1 cache | Local, shared | SM | Block | Individual subroutine call |
| - | - | Warp (32 threads) | - | SIMD instructions |
| GPU L0 cache, register | - | Thread (CUDA core) | - | Scalar ops in vector op |

### Memory hierarchy: optimizing data access patterns

CUDA exposes a sophisticated **seven-level memory hierarchy** trading capacity for speed:[&#91;13&#93;](#cite_note-cuda-memory-hierarchy-13)

**Registers** provide the fastest storage—zero-latency access with thousands available per SM. Automatic variables in kernels occupy registers, but excessive register usage reduces occupancy by limiting concurrent threads per SM.

**Shared memory** offers register-speed access (approximately 1 cycle) but remains visible to all threads within a block. This 48-228 KB on-chip memory enables fast inter-thread communication and serves as a user-managed cache. Developers must avoid **bank conflicts**—when threads in a warp access the same memory bank simultaneously—which serialize accesses and degrade performance. Shared memory is organized into 32 equally sized memory modules called banks, and threads in a warp should access different banks to achieve maximum bandwidth.

**L1 and L2 caches** sit between shared memory and global memory. The L1 cache resides on each SM, sharing on-chip resources with shared memory. The L2 cache, shared across all SMs, ranges from 1.5 MB (Kepler) to 50 MB (Hopper).[&#91;14&#93;](#cite_note-hopper-tuning-14) Starting with Ampere architecture (compute capability 8.0), developers can manage L2 cache directly through access policy windows that specify persistence properties for memory regions.

**Global memory**, the largest but slowest memory (200-400 cycles latency), resides in off-chip DRAM with capacities reaching 80+ GB on modern data center GPUs. All threads can read and write global memory, which persists across kernel launches. **Memory coalescing**—ensuring consecutive threads access consecutive memory addresses—remains critical for performance, as the GPU combines such accesses into minimal 128-byte transactions.

**Constant memory** (64 KB) optimizes for broadcast patterns where all threads read the same address. When cached, constant memory achieves register speeds. Constant memory is a read-only region of device memory that is cached on-chip, optimized for cases where all threads in a warp read the same memory address. In this scenario, the value is broadcast to all threads, achieving very high bandwidth comparable to a register read.

**Texture memory**, with dedicated read-only caches, optimizes for 2D spatial locality patterns common in image processing. Originally designed for graphics, it provides hardware support for addressing modes (for example clamping, wrapping) and filtering (for example linear interpolation). Starting with CUDA 3.1, writeable textures, known as **Surfaces**, were introduced.

**Local memory**, despite its name, resides in global memory but remains private to each thread, used for register spills and large structures.

Starting with compute capability 9.0 (Hopper architecture), **thread block clusters** add an optional hierarchy level, grouping blocks that execute together with hardware-supported synchronization and distributed shared memory access across blocks.[&#91;15&#93;](#cite_note-hopper-architecture-15)

| Memory Type | Location | Scope | Lifetime | Access |
| --- | --- | --- | --- | --- |
| **Registers** | On-chip | Thread | Kernel | Read/Write |
| **Local Memory** | Off-chip | Thread | Kernel | Read/Write |
| **Shared Memory** | On-chip | Block | Kernel | Read/Write |
| **Global Memory** | Off-chip | Grid | Application | Read/Write |
| **Constant Memory** | Off-chip | Grid | Application | Read-Only |
| **Texture Memory** | Off-chip | Grid | Application | Read-Only |
| **Unified/Managed** | Host/Device | Host/Device | Application | Read/Write |

### Unified Memory

To simplify the complexities of managing separate host and device memory spaces, NVIDIA introduced **Unified Memory**. This feature creates a single, managed memory pool accessible by both the CPU and GPU using a single pointer. Data is automatically migrated on-demand between physical host and device memory by the CUDA runtime system, driven by page faults.

This abstraction significantly lowers the barrier to entry for GPU programming, as it makes explicit `cudaMemcpy` calls an optimization rather than a requirement. While this automatic management provides ease of use, expert developers can still guide the system using hints (for example `cudaMemAdvise`) or explicitly prefetch data (`cudaMemPrefetchAsync`) to achieve performance closer to that of manual memory management.

### Occupancy and resource constraints

**Occupancy**—the ratio of active warps to maximum possible warps per SM—directly impacts performance through latency hiding. Higher occupancy provides more warps to switch between when memory stalls occur. However, occupancy faces limits from three primary resources:

**Registers per thread** multiply by threads per block to determine total register consumption. When this exceeds the SM's register file (typically 64K registers), fewer blocks can execute concurrently. Register spilling to local memory drastically reduces performance.

**Shared memory per block** must fit within the SM's shared memory capacity (48-228 KB depending on architecture). Applications requiring large shared memory allocations limit concurrent blocks.

**Thread blocks per SM** face architectural maximums (16-32 depending on compute capability) and total thread limits (1,536-2,048 per SM). Balancing these resources requires careful tuning, often using NVIDIA's occupancy calculator tool.

### Synchronization primitives

CUDA provides multiple synchronization levels. **Thread-level synchronization** uses `__syncthreads()` to create barriers where all threads in a block wait until every thread reaches the barrier. This ensures memory consistency for shared memory operations. Warp-level primitives like `__syncwarp()` and shuffle operations enable efficient communication within warps.

**No direct synchronization exists between blocks**—they must execute independently to enable scalability. Inter-block communication requires atomic operations or separate kernel launches. System-level synchronization uses `cudaDeviceSynchronize()` to wait for all GPU work or `cudaStreamSynchronize()` for specific streams.

## CUDA Toolkit and development environment

The **NVIDIA CUDA Toolkit** provides a comprehensive development environment for GPU-accelerated applications, including GPU-accelerated libraries, debugging tools, optimization utilities, the NVCC compiler, and the CUDA runtime.[&#91;4&#93;](#cite_note-cuda-toolkit-docs-4) As of October 2025, **CUDA Toolkit 13.0.2** represents the latest release, introducing support for Blackwell architecture and implementing breaking changes including removal of support for Maxwell, Pascal, and Volta architectures for offline compilation.[&#91;16&#93;](#cite_note-cuda-13-release-notes-16)

### Toolkit evolution and version history

CUDA's version history reflects continuous innovation and expanding capabilities. The platform has evolved significantly since its inception, with each major release introducing new programming features, performance optimizations, and support for new GPU architectures.

| Version | Release Date | Key Features Summary | New Architecture Support |
| --- | --- | --- | --- |
| **1.0** | June 2007 | Initial production release with C compiler, BLAS, and FFT libraries | [Tesla](/index.php?title=Tesla_(microarchitecture)&action=edit&redlink=1) (G80) |
| **2.0** | August 2008 | Added support for macOS, 64-bit OS, and 3D textures | - |
| **3.0** | March 2010 | C++ support (templates, inheritance), OpenCL 1.0 support, unified graphics interop | [Fermi](/index.php?title=Fermi_(microarchitecture)&action=edit&redlink=1) |
| **4.0** | May 2011 | Unified Virtual Addressing (UVA), GPUDirect v2.0 (Peer-to-Peer) | - |
| **5.0** | October 2012 | Dynamic Parallelism (kernels launching kernels), separate compilation (GPU object linking) | [Kepler](/index.php?title=Kepler_(microarchitecture)&action=edit&redlink=1) |
| **6.0** | April 2014 | Unified Memory for simplified memory management | - |
| **7.0** | March 2015 | C++11 support in device code, cuSOLVER library introduced | [Maxwell](/index.php?title=Maxwell_(microarchitecture)&action=edit&redlink=1) (in 6.5) |
| **8.0** | September 2016 | Native FP16/INT8 support, nvGRAPH library, improved Unified Memory | [Pascal](/index.php?title=Pascal_(microarchitecture)&action=edit&redlink=1) |
| **9.0** | September 2017 | Cooperative Groups, C++14 support in device code | [Volta](/index.php?title=Volta_(microarchitecture)&action=edit&redlink=1) |
| **10.0** | September 2018 | CUDA Graphs, Nsight Compute & Systems tools, Vulkan/DX12 interop | [Turing](/index.php?title=Turing_(microarchitecture)&action=edit&redlink=1) |
| **11.0** | June 2020 | Multi-Instance GPU (MIG), 3rd-gen Tensor Cores (TF32, Bfloat16), Arm server support | [Ampere](/index.php?title=Ampere_(microarchitecture)&action=edit&redlink=1) |
| **12.0** | December 2022 | Device-side graph launch, C++20 support, FP8 support | [Hopper](/index.php?title=Hopper_(microarchitecture)&action=edit&redlink=1), [Ada Lovelace](/index.php?title=Ada_Lovelace_(microarchitecture)&action=edit&redlink=1) |
| **13.0** | August 2025 | Foundation for tile-based programming, unified Arm toolchain, Zstd compression | [Blackwell](/wiki/blackwell_microarchitecture) |

#### Detailed release highlights

**CUDA 1.x (2007)**: The first production release, CUDA 1.0, established the core platform. It included the NVCC C compiler, the first versions of the CUBLAS and CUFFT libraries, and an SDK with code examples to help developers get started. It targeted the G80-based Tesla architecture.

**CUDA 2.x (2008-2009)**: This series focused on expanding platform support. CUDA 2.0 notably added support for Mac OS X, as well as 32-bit and 64-bit versions of Windows Vista. It also introduced new technical capabilities like support for 3D textures and hardware interpolation, which were beneficial for applications in medical imaging and scientific visualization.

**CUDA 3.x (2010)**: CUDA 3.0 was a landmark release that brought first-class C++ support, allowing developers to use features like class inheritance and templates in device code. It introduced support for the new Fermi architecture and its features, such as concurrent kernel execution and ECC memory reporting. It also added a unified interoperability API for Direct3D (up to D3D11) and OpenGL and included support for OpenCL 1.0 features.

**CUDA 4.x (2011)**: This version focused on simplifying multi-GPU programming and improving usability. CUDA 4.0 introduced Unified Virtual Addressing (UVA), which provided a single virtual address space for all memory in the system (CPU and all GPUs). It also added GPUDirect v2.0, enabling direct peer-to-peer communication between GPUs on the same PCIe bus without going through host memory. The popular Thrust C++ template library was officially integrated, and the NVIDIA Performance Primitives (NPP) library for image processing was introduced.

**CUDA 5.x (2012-2013)**: The headline feature of CUDA 5.0 was **Dynamic Parallelism**, which for the first time allowed a CUDA kernel running on the GPU to launch another kernel. This enabled more complex, adaptive algorithms to be implemented entirely on the GPU. This release also introduced GPU object linking, allowing device code to be compiled into separate object files and linked together, which greatly improved modularity and build times for large projects.

**CUDA 6.x (2014)**: CUDA 6.0 revolutionized memory management with the introduction of **Unified Memory**. This feature abstracted the separate host and device memory spaces into a single, coherent memory pool, allowing both the CPU and GPU to access data via a single pointer. The CUDA runtime automatically migrates data between the host and device as needed, drastically simplifying the programming model.[&#91;17&#93;](#cite_note-phoronix-cuda6-17) This release also introduced "drop-in" libraries, allowing users to accelerate BLAS and FFTW calls by simply linking against the CUDA-accelerated versions with minimal code changes.

**CUDA 7.x (2015)**: This release brought the CUDA C++ language into the modern era with support for many C++11 features in device code. Developers could now use lambdas, `auto`, range-based for loops, and variadic templates, leading to more expressive and maintainable code. CUDA 7.0 also introduced the cuSOLVER library for dense and sparse direct linear algebra routines.

**CUDA 8.0 (2016)**: With the introduction of the Pascal architecture, CUDA 8.0 added native support for 16-bit floating-point (FP16) and 8-bit integer (INT8) computations. These lower-precision data types offered significant performance gains for deep learning workloads. Unified Memory was also enhanced with hardware page-faulting capabilities, and the new nvGRAPH library for graph analytics was introduced.

**CUDA 9.x (2017)**: Timed with the Volta architecture and its revolutionary Tensor Cores, CUDA 9.0 introduced the **Cooperative Groups** programming model, a more expressive and flexible way to define and synchronize groups of threads than the standard block-level `__syncthreads()`. It also upgraded language support to C++14 in device code.

**CUDA 10.x (2018-2019)**: This series brought support for the Turing architecture. A key innovation was **CUDA Graphs**, an API to define a whole sequence of operations (memory copies, kernel launches) ahead of time and launch it with minimal CPU overhead, which is critical for workloads with many small kernels. This release also marked the debut of the modern Nsight Compute and Nsight Systems profiling tools, replacing the older Visual Profiler and nvprof.

**CUDA 11.x (2020-2022)**: CUDA 11.0 was a major release supporting the Ampere architecture. It introduced **Multi-Instance GPU (MIG)**, allowing a single GPU to be partitioned into multiple secure, isolated GPU instances, a feature particularly valuable for cloud providers. It also enabled the use of Ampere's third-generation Tensor Cores, which added support for the TensorFloat-32 (TF32) and Bfloat16 data types. This version also marked a significant platform expansion, adding production support for Arm64 server CPUs and independent component versioning.[&#91;18&#93;](#cite_note-cuda11-features-18)

**CUDA 12.x (2022-2024)**: This series introduced support for the Hopper and Ada Lovelace architectures. A major enhancement to CUDA Graphs allowed them to be launched from device-side kernels, enabling more dynamic and complex workflows to be managed on the GPU. The compiler added support for C++20, and the libraries exposed new hardware capabilities, such as the FP8 data type for matrix multiplication on Hopper Tensor Cores.

**CUDA 13.0 (2025)**: Supporting the new Blackwell architecture, CUDA 13.0 laid the groundwork for a new **tile-based programming model** as a complement to the traditional thread-based model. It also unified the developer toolchain for Arm server and embedded platforms, allowing a single binary to be deployed across different Arm-based systems. Other improvements included a more efficient fatbin compression scheme using Zstd and updates to all major developer tools and libraries. CUDA 13.0 implements semantic versioning with ABI stability guarantees within the 13.x series and removes legacy tools (NVIDIA Visual Profiler, nvprof).

### Core components

#### NVCC (NVIDIA C/C++ Compiler)

The **NVIDIA C/C++ Compiler (NVCC)** is the core compiler for the CUDA C++ language. It is a front-end driver that processes CUDA source files (typically with a `.cu` extension). NVCC separates the source code into two parts: host code, which runs on the CPU, and device code, which runs on the GPU.

The host code is compiled by a standard host compiler such as [GCC](/index.php?title=GCC&action=edit&redlink=1), [Clang](/index.php?title=Clang&action=edit&redlink=1), or [Microsoft Visual C++](/index.php?title=Microsoft_Visual_C%2B%2B&action=edit&redlink=1). The device code is first compiled into **[PTX](/index.php?title=PTX&action=edit&redlink=1)** (Parallel Thread Execution), a low-level virtual instruction set architecture (ISA).[&#91;9&#93;](#cite_note-modular-history-9) PTX acts as a stable assembly language for the GPU, enabling both forward and backward compatibility. When an application runs, the device driver performs a final just-in-time (JIT) compilation step, translating the PTX code into the native machine code (SASS) for the specific GPU being used.

#### CUDA Runtime and Driver

The toolkit includes the **CUDA Runtime** and the **NVIDIA Driver**, which are essential for executing CUDA applications. The driver is the low-level software that interfaces directly with the GPU hardware. The CUDA Runtime is a higher-level library that provides the functions needed to manage the device, memory, and kernel execution from the host application.

### APIs: Runtime vs. Driver

CUDA exposes its functionality through two main C/C++ APIs: the high-level Runtime API and the low-level Driver API.

- **Runtime API**: This is the more commonly used API, offering a higher level of abstraction that simplifies development. It automatically handles device initialization, context management, and module loading. The Runtime API enables the convenient `<<<...>>>` kernel launch syntax and is generally easier for application developers to use.

- **Driver API**: This is a lower-level, more verbose API that provides finer-grained control over the GPU. It requires manual management of contexts and modules. The Driver API is necessary for more advanced use cases, such as dynamically loading and unloading PTX code at runtime or fine-tuning JIT compilation options.

In modern versions of CUDA, the two APIs are interoperable and can be used together within the same application.

### Developer tools

The CUDA Toolkit is equipped with a powerful suite of tools for debugging, profiling, and optimizing applications.

#### Profiling tools

- **NVIDIA Nsight Suite**: This is the modern, primary family of performance analysis tools.

   *   **Nsight Systems**: A system-wide performance analysis tool that helps visualize the interaction between the CPU and GPU, identifying bottlenecks in API calls, memory transfers, and kernel executions.
   *   **Nsight Compute**: An interactive kernel profiler that provides detailed performance metrics and analysis of CUDA kernels, helping developers understand hardware utilization, memory access patterns, and instruction throughput.
   *   **Nsight Visual Studio Edition**: A plugin that integrates debugging and profiling tools directly into the [Microsoft Visual Studio](/index.php?title=Microsoft_Visual_Studio&action=edit&redlink=1) IDE for Windows developers.

- **nvprof and Visual Profiler**: These are the legacy command-line and graphical profilers that were the standard tools in older versions of the CUDA Toolkit. They have since been superseded by the Nsight suite.

#### Debugging tools

- **CUDA-GDB**: An extension of the [GNU Debugger](/index.php?title=GNU_Debugger&action=edit&redlink=1) (GDB) for debugging CUDA applications on Linux. It allows developers to set breakpoints, inspect variables, and step through code running on both the CPU and the GPU.

- **Compute Sanitizer**: A tool for detecting memory access errors (for example out-of-bounds or misaligned accesses) and synchronization errors (race conditions) within CUDA kernels.

- **CUDA-MEMCHECK**: A legacy memory error detection tool, now largely replaced by the Compute Sanitizer.

## Ecosystem: GPU-accelerated libraries

A primary driver of CUDA's widespread adoption is its extensive ecosystem of highly optimized, GPU-accelerated libraries. These libraries provide pre-built solutions for a wide range of computational domains, allowing developers to leverage the power of GPUs without having to write low-level custom kernels for common tasks. This "stairway of abstraction" caters to everyone from HPC experts to AI practitioners, significantly enhancing productivity and performance.[&#91;9&#93;](#cite_note-modular-history-9)

NVIDIA packages many higher-level libraries and tools under the umbrella of "**CUDA-X**" and "**CUDA-X AI**" to support applications in AI, HPC, data science, and other domains.[&#91;19&#93;](#cite_note-cuda-x-libraries-19)

### Foundational libraries

The CUDA Toolkit includes a core set of libraries for fundamental scientific and engineering computations.

- **[cuBLAS](/index.php?title=CuBLAS&action=edit&redlink=1)**: An implementation of the [Basic Linear Algebra Subprograms](/index.php?title=Basic_Linear_Algebra_Subprograms&action=edit&redlink=1) (BLAS) API for high-performance dense matrix and vector operations. cuBLAS implements all 152 standard BLAS routines with 5-10x CPU speedups.[&#91;20&#93;](#cite_note-cublas-20) The library supports Level 1 (vector-vector), Level 2 (matrix-vector), and Level 3 (matrix-matrix) operations across multiple precisions including FP16, TF32, BF16, FP32, FP64, and INT8. **cuBLASLt** extends functionality with a multi-stage GEMM API offering advanced tuning and fusion capabilities optimized for Tensor Cores, while **cuBLASXt** provides single-process multi-GPU support for large-scale linear algebra.

- **[cuSPARSE](/index.php?title=CuSPARSE&action=edit&redlink=1)**: A library containing a set of basic linear algebra subroutines for handling sparse matrices. cuSPARSE accelerates sparse matrix operations for matrices with 70-99.9% sparsity.[&#91;21&#93;](#cite_note-cusparse-21) Supporting multiple formats (CSR, COO, CSC, Blocked CSR), the library implements sparse matrix-vector (SpMV) and sparse matrix-matrix (SpMM) multiplication with 30-150x CPU speedups. **cuSPARSELt** leverages Sparse Tensor Cores in Ampere+ architectures for structured 2:4 sparsity, delivering additional performance gains for AI workloads.

- **[cuFFT](/index.php?title=CuFFT&action=edit&redlink=1)**: A library for accelerating [Fast Fourier Transform](/index.php?title=Fast_Fourier_Transform&action=edit&redlink=1) (FFT) computations. cuFFT delivers high-performance Fast Fourier Transform implementations for 1D, 2D, and 3D transforms. The library consists of cuFFT (native GPU-optimized) and cuFFTW (FFTW-compatible for easy porting), supporting single, double, and half-precision with batch processing capabilities. Applications include signal processing, computational chemistry, and seismic analysis.

- **[cuRAND](/index.php?title=CuRAND&action=edit&redlink=1)**: A library for generating high-quality pseudorandom and quasirandom numbers on the GPU. cuRAND generates high-quality random numbers using both pseudo-random (XORWOW, MRG32k3a, Philox) and quasi-random generators. Supporting various distributions (uniform, normal, log-normal, Poisson), the library offers host APIs for CPU-side generation and device APIs for direct kernel usage, crucial for Monte Carlo simulations and machine learning initialization.

- **[cuSOLVER](/index.php?title=CuSOLVER&action=edit&redlink=1)**: A high-level library for dense and sparse direct linear solvers, providing functionality similar to [LAPACK](/index.php?title=LAPACK&action=edit&redlink=1). cuSOLVER provides LAPACK-like functionality for dense and sparse linear systems, including LU, QR, SVD, and Cholesky factorizations.[&#91;22&#93;](#cite_note-cusolver-22) The library splits into cuSolverDN (dense), cuSolverSP (sparse), cuSolverRF (refactorization), cuSolverMg (multi-GPU), and cuSolverMp (multi-node multi-GPU), delivering 3-6x speedups versus Intel MKL on data center GPUs.

- **[cuTENSOR](/index.php?title=CuTENSOR&action=edit&redlink=1)**: Implements high-performance tensor contractions and element-wise operations optimized for deep learning and quantum computing workloads, representing the industry's first GPU tensor library specifically designed for these domains.

- **NVIDIA Performance Primitives (NPP)**: A library of functions for image, video, and signal processing. NPP implements over 2,500 image, signal processing, and computer vision routines, including color conversion, filtering, geometry transforms, and morphology operations.

- **nvJPEG / nvJPEG2000**: Libraries providing high-performance, GPU-accelerated encoding and decoding for JPEG and JPEG 2000 image formats. nvJPEG provides hardware-accelerated JPEG encoding/decoding optimized for deep learning data loading pipelines. Related libraries include nvJPEG2000 for medical imaging and nvTIFF for TIFF processing with LZW compression.

### Parallel algorithms: Thrust

**[Thrust](/index.php?title=Thrust&action=edit&redlink=1)** is a C++ parallel algorithms library included in the CUDA Toolkit, modeled after the C++ [Standard Template Library](/index.php?title=Standard_Template_Library&action=edit&redlink=1) (STL).[&#91;23&#93;](#cite_note-thrust-23) It provides a high-level, expressive interface for common parallel operations such as sorting, scanning, transforming, and reducing data. By using Thrust, developers can write concise, readable, and high-performance parallel code, achieving 5-100x speedups versus STL and TBB. Developers use `thrust::host_vector` for CPU data and `thrust::device_vector` for GPU data, with seamless integration to raw CUDA code.

A key feature of Thrust is its performance portability. It uses a backend system that allows the same code to be compiled to run on different parallel architectures, including NVIDIA GPUs (via CUDA), multi-core CPUs (via [OpenMP](/index.php?title=OpenMP&action=edit&redlink=1) or [TBB](/index.php?title=Intel_Threading_Building_Blocks&action=edit&redlink=1)), and other platforms. As of recent CUDA Toolkit releases, Thrust has been unified with the CUB and libcu++ libraries into a single entity known as the **CUDA Core Compute Libraries (CCCL)**.

**CUB** (CUDA UnBound) provides lower-level cooperative primitives for CUDA kernel developers, offering warp-wide and block-wide operations (reductions, scans, sorts) with speed-of-light performance.

### AI and deep learning acceleration

The CUDA ecosystem is central to the field of modern [AI](/wiki/artificial_intelligence), providing specialized libraries that are the performance backbone of virtually all deep learning frameworks.

#### cuDNN

The **NVIDIA CUDA Deep Neural Network library ([cuDNN](/wiki/cudnn))** is a GPU-accelerated library of primitives for deep neural networks.[&#91;24&#93;](#cite_note-cudnn-24) It is not a deep learning framework itself, but rather a low-level performance library that frameworks use to execute standard operations. cuDNN provides highly tuned implementations for fundamental building blocks of deep learning, such as:

- [Convolutions](/index.php?title=Convolutions&action=edit&redlink=1)

- [Pooling](/wiki/pooling)

- [Normalization](/wiki/normalization)

- [Activation functions](/index.php?title=Activation_functions&action=edit&redlink=1)

- [Attention mechanisms](/index.php?title=Attention_mechanisms&action=edit&redlink=1)

- [Matrix multiplications](/index.php?title=Matrix_multiplications&action=edit&redlink=1)

By providing optimized kernels for these routines, cuDNN allows deep learning frameworks like [TensorFlow](/wiki/tensorflow) and [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) to achieve state-of-the-art performance on NVIDIA GPUs without each framework needing to implement its own low-level GPU optimizations. cuDNN supports multiple precisions (FP32/FP64, FP16, integer) and features like batched operations optimized for Tensor Cores. The library is used by PyTorch, TensorFlow, JAX, MXNet, Keras, and other major frameworks.

cuDNN's architecture features three API layers: the high-level Frontend API (recommended for Python/C++), the flexible Graph API for operation graph representation, and the low-level Backend API for specialized control. cuDNN 9.x (2024) introduced multi-operation fusion patterns that combine multiple operations into optimized kernels, delivering significant performance improvements for transformer architectures.

#### TensorRT

The **NVIDIA [TensorRT](/index.php?title=TensorRT&action=edit&redlink=1)** is an SDK and runtime for high-performance deep learning **[inference](/wiki/inference)**.[&#91;25&#93;](#cite_note-tensorrt-25) After a neural network has been trained, TensorRT takes the model and optimizes it for deployment in production environments where low latency and high throughput are critical.

TensorRT performs several key optimizations:

- **Layer and Tensor Fusion**: Merges multiple layers of a neural network into a single kernel to reduce overhead

- **Precision Calibration**: Reduces the numerical precision of model weights (for example from 32-bit float to 16-bit float, 8-bit integer, or even 4-bit integer) with minimal loss of accuracy, which significantly increases throughput and reduces memory usage

- **Kernel Auto-Tuning**: Selects the best pre-implemented kernels for the target GPU architecture

- **Dynamic Tensor Memory**: Minimizes memory footprint by reusing memory for tensors

TensorRT achieves up to 36x inference speedup versus CPU-only platforms. A specialized version, **TensorRT-LLM**, is an open-source library focused on optimizing inference for [Large Language Models (LLMs)](/index.php?title=Large_Language_Model&action=edit&redlink=1).

### Deep learning framework integration

All major deep learning frameworks are built on top of the CUDA platform to enable GPU acceleration. Frameworks like [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) and [TensorFlow](/wiki/tensorflow) provide high-level APIs (typically in Python) that allow users to define and train neural networks.[&#91;26&#93;](#cite_note-deep-learning-software-26) Internally, when these frameworks execute operations on tensors (for example matrix multiplication, convolution), they make calls to the CUDA libraries—primarily cuBLAS and cuDNN—to perform the actual computation on the GPU. This deep integration is what allows data scientists and machine learning engineers to harness the power of GPUs without needing to write low-level CUDA C++ code themselves. The maturity and performance of the CUDA library ecosystem were critical enablers for the rapid development and widespread adoption of these frameworks, fundamentally shaping the modern AI landscape.

PyTorch ships with pre-built CUDA binaries for versions 11.8 through 12.x, accessible via simple pip installation. Developers enable GPU acceleration by calling `.cuda()` on tensors. TensorFlow requires specific CUDA Toolkit and cuDNN version matching. JAX supports CUDA 12 and CUDA 13 with pre-built wheels for Linux.

### Communication and multi-GPU libraries

**[NCCL](/index.php?title=NCCL&action=edit&redlink=1)** (NVIDIA Collective Communications Library) optimizes multi-GPU and multi-node communication with collective operations including all-reduce, all-gather, reduce-scatter, broadcast, and point-to-point send/receive.[&#91;27&#93;](#cite_note-nccl-27) The library automatically detects optimal communication paths across PCIe, NVLink, NVSwitch, InfiniBand, and RoCE networks, using advanced graph search algorithms and parallel aggregated trees for scalability. NCCL 2.23+ (2024) delivers significant improvements for large-scale distributed training, enabling frameworks like PyTorch DDP, TensorFlow, and Horovod to scale efficiently across thousands of GPUs.

**NVSHMEM** implements the OpenSHMEM standard for GPUs, providing partitioned global address space (PGAS) semantics with direct GPU-to-GPU memory access across nodes. One-sided communication primitives and GPU-optimized collective operations improve performance for irregular communication patterns common in HPC applications.

### Data loading and preprocessing

**[DALI](/index.php?title=DALI&action=edit&redlink=1)** (Data Loading Library) offers a complete GPU-accelerated data loading and augmentation pipeline specifically designed for deep learning training. DALI accelerates the entire ETL (Extract, Transform, Load) pipeline, offloading preprocessing from the CPU to the GPU.

## Programming CUDA: languages and interfaces

CUDA supports multiple programming languages and abstraction levels, from low-level C/C++ kernels to high-level Python interfaces. **CUDA C/C++** remains the primary programming interface, extending standard C++ with GPU-specific keywords and compiled using NVCC (NVIDIA CUDA Compiler). The platform supports modern C++ features including C++17 and C++20, with **libcu++** providing the CUDA C++ Standard Library for both host and device code.

**CUDA Fortran** uses PGI's compiler for Fortran programmers, while bindings exist for [Julia](/index.php?title=Julia_(programming_language)&action=edit&redlink=1), [MATLAB](/index.php?title=MATLAB&action=edit&redlink=1), [Java](/index.php?title=Java&action=edit&redlink=1), [.NET](/index.php?title=.NET&action=edit&redlink=1), and other languages.

### Python ecosystem: accessible GPU programming

Python bindings have democratized GPU programming, enabling researchers and data scientists to leverage CUDA without C++ expertise. Multiple approaches serve different use cases and performance requirements.

**[CuPy](/index.php?title=CuPy&action=edit&redlink=1)** provides a drop-in replacement for [NumPy](/wiki/numpy) and [SciPy](/index.php?title=SciPy&action=edit&redlink=1), implementing most functions with identical APIs but GPU execution.[&#91;28&#93;](#cite_note-cupy-28) The library achieves 100x+ speedups for many operations while utilizing cuBLAS, cuRAND, cuSOLVER, cuSPARSE, cuFFT, and cuDNN internally. CuPy supports custom kernels via RawKernel and ElementwiseKernel, multi-GPU workflows, and interoperability with PyTorch and JAX via DLPack. Installation requires matching CUDA versions: `pip install cupy-cuda12x` for CUDA 12.x.

**[Numba](/index.php?title=Numba&action=edit&redlink=1)** offers JIT (just-in-time) compilation of Python functions to GPU code using the `@cuda.jit` decorator. Developers write kernels entirely in Python without C/C++ knowledge, accessing thread/block indexing, shared memory, device functions, and atomic operations. Numba achieves 50-85% of hand-written CUDA C performance for compute-intensive kernels while dramatically reducing development time. The `@vectorize` decorator automatically parallelizes element-wise operations across GPU threads.

**[PyCUDA](/index.php?title=PyCUDA&action=edit&redlink=1)** provides direct access to the CUDA runtime API from Python, embedding C/C++ CUDA kernels in Python strings for maximum control. While requiring C++ knowledge, PyCUDA offers object-oriented interfaces, automatic resource management, and NumPy interoperability for custom kernel development and prototyping.

**Comparison across Python interfaces**: CuPy excels for NumPy users wanting GPU acceleration with minimal code changes. Numba serves developers writing custom GPU algorithms entirely in Python. PyCUDA suits those needing maximum control or integrating existing CUDA C/C++ code.

**Official CUDA Python** bindings provide unified interfaces to CUDA Runtime and Driver APIs, forming the foundation for higher-level libraries. These bindings enable Python framework and library development, used internally by both CuPy and Numba.

## Compute capability and GPU architecture evolution

**Compute capability** defines hardware features and supported instructions for each NVIDIA GPU architecture, using an X.Y versioning scheme where X indicates the core architecture generation and Y represents incremental improvements.[&#91;29&#93;](#cite_note-cuda-compute-capability-29) This version number determines available features, maximum thread/block/grid dimensions, memory capabilities, and concurrent execution support. Each NVIDIA GPU generation introduces new features and higher performance.

### Architecture progression: from Tesla to Blackwell

The evolution from **Tesla** (compute capability 1.x, 2006-2008) to **Blackwell** (10.0/12.0, 2024+) represents nearly two decades of architectural innovation.

**[Tesla](/index.php?title=Tesla&action=edit&redlink=1)** (1.x) introduced basic CUDA support with 8-32 cores per SM, establishing GPU computing fundamentals with unified shader architecture.

**[Fermi](/index.php?title=Fermi&action=edit&redlink=1)** (2.0/2.1, 2010) added L1/L2 cache hierarchy, IEEE 754-2008 compliance, ECC memory support, and concurrent kernel execution—features essential for scientific computing and data center deployment. Fermi introduced unified virtual addressing and improved double-precision performance.

**[Kepler](/index.php?title=Kepler&action=edit&redlink=1)** (3.x, 2012-2014) delivered breakthrough power efficiency with 3x performance per watt versus Fermi while introducing Dynamic Parallelism (kernels launching kernels), Hyper-Q technology with 32 concurrent work queues, and read-only data cache.[&#91;30&#93;](#cite_note-kepler-whitepaper-30) The GK110 chip featuring 192 CUDA cores per SMX achieved over 1 TFLOPS double precision, cementing GPU relevance for HPC applications.

**[Maxwell](/index.php?title=Maxwell&action=edit&redlink=1)** (5.x, 2014-2015) focused on extreme efficiency, achieving 2x performance per watt versus Kepler with 128 cores per SM. While consumer Maxwell cards lacked double precision units, the architecture delivered significant gaming and mainstream computing advances with improved energy efficiency.

**[Pascal](/index.php?title=Pascal&action=edit&redlink=1)** (6.x, 2016-2017) introduced revolutionary interconnect and memory technologies: HBM2 memory with 720 GB/s bandwidth, NVLink high-speed GPU-to-GPU communication, and unified memory with page migration enabling seamless CPU-GPU data movement. The GP100 chip (16nm FinFET, 15 billion transistors) achieved 21 TFLOPS FP16 performance.

### The AI revolution architectures

**[Volta](/index.php?title=Volta&action=edit&redlink=1)** (7.0, 2017) transformed deep learning through **[Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1)**—specialized hardware units performing mixed-precision matrix multiply-accumulate operations. The GV100 (21 billion transistors) combined 64 FP32 cores, 64 INT32 cores, and 8 Tensor Cores per SM, achieving 125 TFLOPS mixed-precision performance. Volta introduced independent thread scheduling, replacing lockstep warp execution with per-thread program counters, enabling more flexible parallel algorithms. The architecture's 900 GB/s HBM2 memory and NVLink 2.0 supported the massive data movement requirements of training large neural networks.

**[Turing](/index.php?title=Turing&action=edit&redlink=1)** (7.5, 2018-2019) added **[RT Cores](/index.php?title=RT_Core&action=edit&redlink=1)** for hardware-accelerated ray tracing alongside 2nd generation Tensor Cores. The TU102 (18.6 billion transistors, 12nm FFN) combined 64 FP32, 64 INT32, 8 Tensor Cores, and 1 RT Core per SM, achieving 10 Gigarays per second for real-time ray tracing. Turing introduced concurrent FP32 and INT32 execution, mesh shading, and variable rate shading—features that revolutionized both gaming and professional visualization.

**[Ampere](/index.php?title=Ampere&action=edit&redlink=1)** (8.x, 2020-2022) delivered 3rd generation Tensor Cores with structured sparsity support, enabling 2x throughput for sparse neural networks. The flagship **[A100](/index.php?title=NVIDIA_A100&action=edit&redlink=1)** (GA100, 54 billion transistors, 7nm TSMC) introduced several groundbreaking features: Multi-Instance GPU (MIG) partitioning a single GPU into up to seven independent instances, TF32 precision (19-bit format combining FP32 range with FP16 performance), FP64 Tensor Cores for HPC applications, and 40 MB L2 cache. The architecture achieved 312 TFLOPS using TF32 Tensor Cores and supported structural sparsity achieving 624 TFLOPS for compatible networks.

**[Hopper](/index.php?title=Hopper&action=edit&redlink=1)** (9.0, 2022) represented the largest generational leap for AI training with 4th generation Tensor Cores supporting **FP8 precision** and the **Transformer Engine**—custom hardware and software delivering 6x faster transformer training.[&#91;31&#93;](#cite_note-hopper-gtc-31) The GH100 (80 billion transistors, TSMC 4N) features 128 FP32 cores, 64 FP64 cores, and 4 Tensor Cores per SM, achieving up to 4 PFLOPS FP8 sparse performance. Innovations include DPX instructions for dynamic programming algorithms, thread block clusters enabling cross-SM communication, distributed shared memory (228 KB per SM), Tensor Memory Accelerator (TMA) for efficient data movement, HBM3 memory (3 TB/s bandwidth), and NVLink 4.0 (900 GB/s per GPU). Hopper also added confidential computing support for secure AI training.

**[Ada Lovelace](/index.php?title=Ada_Lovelace&action=edit&redlink=1)** (8.9, 2022-2023) brought Tensor Cores and ray tracing to consumer and workstation markets with the GeForce RTX 4000 series and professional RTX Ada generation cards. The architecture enhanced ray tracing performance and introduced DLSS 3 with frame generation.

**[Blackwell](/wiki/blackwell)** (10.0/12.0, 2024+) continues innovation with 5th generation Tensor Cores supporting ultra-low **FP4 and FP6 precision** for massive model training. The GB100 (208 billion transistors, TSMC 4NP) delivers up to 20 PFLOPS FP4 performance. The **GB200** combines two Blackwell GPUs with a Grace CPU in a unified package, while the consumer-focused GeForce RTX 5000 series (compute capability 12.0) brings Blackwell to gaming and workstation markets with DLSS 4 support.

### Feature availability by compute capability

| Compute Capability | Architecture | Year | Key Features Introduced |
| --- | --- | --- | --- |
| 1.x | Tesla | 2006-2008 | Basic CUDA support, atomic operations |
| 2.x | Fermi | 2010 | L1/L2 cache, ECC, FP64, concurrent kernels |
| 3.x | Kepler | 2012-2014 | Dynamic Parallelism, Hyper-Q, Unified Memory |
| 5.x | Maxwell | 2014-2015 | Improved efficiency, unified virtual memory |
| 6.x | Pascal | 2016-2017 | HBM2, NVLink, unified memory page migration, FP16 boost |
| 7.0 | Volta | 2017 | **Tensor Cores**, independent thread scheduling, 900 GB/s HBM2 |
| 7.5 | Turing | 2018-2019 | **RT Cores**, 2nd gen Tensor Cores, mesh shading |
| 8.x | Ampere | 2020-2022 | **Sparse Tensor Cores**, TF32, FP64 Tensor Cores, MIG, 3rd gen Tensor Cores |
| 8.9 | Ada Lovelace | 2022-2023 | DLSS 3, enhanced ray tracing, 3rd gen RT Cores |
| 9.0 | Hopper | 2022 | **FP8 Transformer Engine**, thread block clusters, DPX, HBM3, 4th gen Tensor Cores |
| 10.0/12.0 | Blackwell | 2024+ | **FP4/FP6 support**, 5th gen Tensor Cores, dual GPU design |

Each architecture delivers substantial performance improvements: Kepler achieved 3x performance/watt versus Fermi, Maxwell doubled that again, Pascal introduced HBM2 and NVLink, Volta's Tensor Cores enabled the AI boom, and Hopper's FP8 Transformer Engine accelerated large language model training by 6x.

| Compute Capability | Microarchitecture | Example GPUs (GeForce, Quadro, Datacenter) |
| --- | --- | --- |
| 1.0 - 1.3 | Tesla | GeForce 8800 GTX, Quadro FX 5600, Tesla C870 |
| 2.0 - 2.1 | Fermi | GeForce GTX 480, Quadro 6000, Tesla C2050 |
| 3.0 - 3.7 | Kepler | GeForce GTX 780 Ti, Quadro K6000, Tesla K40 |
| 5.0 - 5.3 | Maxwell | GeForce GTX 980, Quadro M6000, Tesla M40 |
| 6.0 - 6.2 | Pascal | GeForce GTX 1080 Ti, Quadro P6000, Tesla P100 |
| 7.0 - 7.2 | Volta | Titan V, Quadro GV100, Tesla V100 |
| 7.5 | Turing | GeForce RTX 2080 Ti, Quadro RTX 8000, Tesla T4 |
| 8.0 - 8.9 | Ampere / Ada Lovelace | GeForce RTX 3090, RTX A6000, A100, RTX 4090 |
| 9.0 | Hopper | H100, H200 |
| 10.0/12.0 | Blackwell | B200, GB200, GeForce RTX 5090 |

## Supported platforms

The CUDA platform is designed to be compatible with a wide range of hardware and software configurations, though it is exclusively for NVIDIA GPUs.

### Hardware compatibility

CUDA is supported on all NVIDIA GPUs from the G8x series (Tesla architecture) onward. The specific set of hardware features a GPU supports is defined by its Compute Capability version number. Higher Compute Capability versions generally correspond to newer microarchitectures and more advanced features.

### Software compatibility

#### Operating systems

The CUDA Toolkit officially supports the most widely used 64-bit operating systems for desktop, server, and cloud environments. Support for macOS was deprecated after CUDA 10.2 and completely removed in CUDA 11.0, though some tools are available for cross-compilation and remote debugging from a macOS host.

| Distribution | Supported Versions | Architectures |
| --- | --- | --- |
| [Ubuntu](/index.php?title=Ubuntu&action=edit&redlink=1) | 24.04 LTS, 22.04 LTS | x86_64, Arm64-sbsa |
| [RHEL](/index.php?title=Red_Hat_Enterprise_Linux&action=edit&redlink=1) | 10.x, 9.x, 8.x | x86_64, Arm64-sbsa |
| [CentOS](/index.php?title=CentOS&action=edit&redlink=1) | 10.x, 9.x, 8.x | x86_64 |
| [Rocky Linux](/index.php?title=Rocky_Linux&action=edit&redlink=1) | 12.x | x86_64 |
| [SLES](/index.php?title=SUSE_Linux_Enterprise_Server&action=edit&redlink=1) | 15.x | x86_64, Arm64-sbsa |
| [Fedora](/index.php?title=Fedora_(operating_system)&action=edit&redlink=1) | 42 | x86_64 |
| [Amazon Linux](/index.php?title=Amazon_Linux&action=edit&redlink=1) | 2023 | x86_64, Arm64-sbsa |

| Operating System | Supported Versions | Architectures |
| --- | --- | --- |
| [Windows 11](/index.php?title=Windows_11&action=edit&redlink=1) | 24H2, 23H2, 22H2 | x86_64 |
| [Windows 10](/index.php?title=Windows_10&action=edit&redlink=1) | 22H2 | x86_64 |
| [Server 2025](/index.php?title=Windows_Server_2025&action=edit&redlink=1) | Server 2025 | x86_64 |
| [Server 2022](/index.php?title=Windows_Server_2022&action=edit&redlink=1) | Server 2022 | x86_64 |

#### Programming languages

The CUDA Toolkit provides native compilers for C, C++, and Fortran. However, the ecosystem extends far beyond these, with a rich collection of third-party libraries and bindings that enable CUDA acceleration from many other popular languages, including Python, Julia, MATLAB, Java, .NET, and others.

## Applications and performance: quantifying CUDA's impact

CUDA acceleration delivers 10-200x performance improvements across diverse computational domains, transforming research and production workloads from impractical to real-time. Performance gains stem from massive parallelism (thousands of cores), high memory bandwidth (up to 3 TB/s), and specialized hardware like Tensor Cores.

### Artificial intelligence and machine learning dominance

All major deep learning frameworks leverage CUDA for training and inference. **FlashAttention** implementations achieve 10x speedups over PyTorch through CUDA optimization, while **Flash Attention-2** delivers 20-50% higher FLOPs per second on H100 versus Ampere architectures. Applications achieve up to 40x higher inference performance on GPUs versus CPU-only platforms.

The impact extends beyond raw performance: CUDA enabled the 2012 **AlexNet breakthrough** when Alex Krizhevsky trained a convolutional neural network on two GeForce GTX 580 GPUs using his custom cuda-convnet framework. AlexNet achieved 15.3% error on ImageNet—nearly half the 26.2% error of the second-place entry—proving that deep learning with GPU acceleration could revolutionize computer vision. This watershed moment, training in Krizhevsky's bedroom rather than requiring supercomputer access, demonstrated CUDA's democratization of AI research.

Modern large language models amplify these advantages. **ChatGPT** initially trained using 10,000+ NVIDIA GPUs, while researchers reproduced GPT-2 (1.5B parameters) for $672 on 8×H100 GPUs in 24 hours using pure C/CUDA implementations (llm.c project). Every major model—GPT-3 (175B parameters), BERT, Llama, Stable Diffusion, DALL-E—trained on CUDA infrastructure.

### Scientific computing accelerations

HPC applications demonstrate dramatic CUDA performance gains. Molecular dynamics simulations show impressive scaling: **LAMMPS** achieves 30x speedup with 8×P100 GPUs versus CPU, **HOOMD-Blue** reaches 25x speedup, and **QUDA** (Lattice Quantum Chromodynamics) delivers 70x speedup. Physics simulations benefit similarly: **MiniFE** (Finite Element Analysis) achieves 40x speedup, **MILC** reaches 60x, and the **HPCG benchmark** demonstrates 35x speedup with 8×P100 GPUs.

OpenACC applications targeting scientific computing show consistent improvements: SPEC ACCEL benchmarks average 2.7x speedup with P100 versus K80, with individual tests ranging 2-12x faster. CloverLeaf, a hydrodynamics code, runs 12.5x faster than a 20-core Xeon E5-2699.

### Medical imaging and computational biology

Medical imaging applications achieve 20-90x speedups for critical tasks. **Image preprocessing and segmentation** accelerate 40-50x using GPU-based parallel techniques. **Haralick feature extraction** (CHASM implementation) shows 20x speedup, while **SOM-based MR image segmentation** achieves 90x speedup versus MATLAB CPU implementations.

Real-time processing becomes feasible: compressed sensing MRI reconstruction processes 256×160×80 volumes in 12 seconds on a single GPU, while 4D denoising operates on 512×512×445×20 CT heart datasets in real-time. Motion estimation in 3D ultrasound sequences accelerates 60x, enabling responsive clinical workflows previously impossible.

### Financial modeling and quantitative analysis

Financial applications leverage CUDA for risk analysis and trading strategies. **Monte Carlo simulations** achieve 50x speedups versus traditional CPU execution—the biggest performance improvements in financial computing. **Finite difference models** for option pricing deliver 50x speedup relative to single-core Xeon (compared to just 5x using OpenMP with 8 cores), with ADI implicit time-marching benefiting from unified GPU memory management.

The gQuant library accelerates 36 technical indicators using RAPIDS/CUDA, significantly reducing execution time for model selection and parameter tuning. Neural networks for financial forecasting using CUBLAS reduce response time for real-time analysis, with some Julia+CUDA implementations achieving 1000x+ speedups versus CPU-only Julia code.

### Computer vision and image processing

OpenCV with CUDA delivers consistent, substantial improvements. Testing across 5,300 configurations showed **GTX 1060 averaged ~100x speedup** versus Intel i5-4120U CPUs, **GTX 950M achieved ~20x**, and even the low-end **GT 730M delivered ~10x**. Mean shift filtering exemplifies peak performance: 100x faster on GTX 1060, reducing processing from 7 seconds to 0.07 seconds. Several operations require logarithmic scales for visualization.

NPP (NVIDIA Performance Primitives) demonstrates 2x faster image processing with Pascal (GTX 1080) versus GTX 980, with over 2,500 optimized routines for color transforms, geometric transforms, filters, statistics, segmentation, and morphology.

### Performance summary across domains

| Application Domain | Typical Speedup | Peak Speedup | Representative Operations |
| --- | --- | --- | --- |
| Deep Learning Training | 10-40x | 50x+ | Neural network forward/backward passes |
| HPC Simulations | 2-30x | 70x | Molecular dynamics, quantum chromodynamics |
| Medical Imaging | 20-60x | 90x | Segmentation, registration, reconstruction |
| Computer Vision | 10-100x | 100x+ | OpenCV functions, filtering, transforms |
| Financial Monte Carlo | 20-50x | 50x+ | Risk analysis, option pricing |
| Graph Analytics | 50-200x | 200x+ | PageRank, shortest path algorithms |
| Linear Algebra | 2-10x | 15x+ | Matrix multiplication (cuBLAS) |
| Image Processing | 3-22x | 60x+ | Medical image segmentation |

These performance improvements translate to economic benefits: reduced training time from weeks to hours, enabled real-time applications previously impossible, lower total cost of ownership versus CPU-only clusters, and superior energy efficiency with higher performance per watt.

## CUDA's role in enabling modern AI

CUDA provided the computational foundation for the deep learning revolution, transforming AI from academic curiosity to transformative technology. The platform's impact spans breakthrough research, production deployments, and industry transformation.

### Framework integration: the software ecosystem moat

Every major deep learning framework implements native CUDA support, creating powerful network effects. PyTorch ships with pre-built CUDA binaries for versions 11.8 through 12.x, accessible via simple pip installation. Developers enable GPU acceleration by calling `.cuda()` on tensors, with over 4 million developers using CUDA-enabled frameworks globally.

TensorFlow requires specific CUDA Toolkit and cuDNN version matching (TensorFlow 2.5.0+ needs CUDA Toolkit and cuDNN SDK 8.1.0+), with NVIDIA providing optimized containers and TensorRT integration. JAX supports CUDA 12 and CUDA 13 with pre-built wheels for Linux, requiring NVIDIA Driver release 515+ and SM version 7.5+ on CUDA 13. MXNet historically supported multiple CUDA versions (9.2, 10.0, 10.2, 11.x) though development has slowed.

cuDNN forms the critical bridge layer, providing GPU-accelerated primitives for convolution, attention mechanisms, matrix multiplication, pooling, normalization, and activation functions used by PyTorch, JAX, TensorFlow, Caffe2, Chainer, Keras, MATLAB, MxNet, and PaddlePaddle. The library's graph-based operation representation and runtime fusion engine automatically optimize neural network execution across framework boundaries.

### Industry adoption and market dominance

NVIDIA commands 80-95% of the AI accelerator market and 92% of the data center GPU market, worth $125 billion annually in 2024. The global GPU for AI market reached $17.58 billion in 2024, projected to grow to $113.93 billion by 2031 (30.60% CAGR). NVIDIA's data center revenue exceeded $115 billion annually in 2024, representing 85%+ of total company revenue—up from 25% five years prior.

Technology giants invest heavily in CUDA infrastructure. **Meta plans to purchase 350,000 H100 GPUs**, while **Microsoft aims to amass 1.8 million GPUs by end of 2024**. Amazon, Google, Microsoft, and Meta collectively expect to spend $210 billion on capital expenditures in 2024, with substantial portions dedicated to NVIDIA GPUs. This concentration creates powerful lock-in: 4 million+ developers trained in CUDA programming, extensive software stacks (cuDNN, cuBLAS, TensorRT, NCCL), deep framework optimization, hardware-software co-design, backward compatibility, and 18 years of ecosystem development.

NVIDIA's market capitalization surpassed $2 trillion in March 2024 and reached $3.3+ trillion by June 2024, briefly becoming the world's most valuable company. Q1 FY2025 revenue hit $26.0 billion (+262% year-over-year), with annual FY2024 revenue of $60.9 billion (+126% YoY) and net income of $29.76 billion (+581.3%).

### Notable implementations and use cases

Real-world deployments demonstrate CUDA's production readiness. NVIDIA uses CUDA-X libraries (cuDF, cuML) internally for chip manufacturing optimization, analyzing wafer fabrication, circuit probing, and packaged chip testing. ML models with SHAP implementations identify redundant test steps, reducing costs through process optimization.

Supercomputing facilities deploy CUDA at scale: Oak Ridge National Laboratory's Summit and Frontier systems, Japan's Fugaku (though primarily Arm-based, uses NVIDIA GPUs for AI), and numerous Top500 systems rely on CUDA acceleration. Cloud providers—AWS, Google Cloud, Microsoft Azure—offer CUDA-accelerated instances as core infrastructure services.

Academic and research applications span diverse fields: biomimetic modeling, computational biology, molecular dynamics simulations, climate modeling (NVIDIA Earth-2), computational chemistry and physics, and seismic exploration. Published research shows clear increases in GPU-accelerated medical imaging publications since CUDA's 2007 release, with CT modality adopting GPU acceleration earlier than MRI.

## Alternatives and competitive landscape

Despite CUDA's dominance, alternatives address vendor lock-in concerns and specific use cases.

**[OpenCL](/index.php?title=OpenCL&action=edit&redlink=1)** (Open Computing Language) provides a vendor-neutral, open standard for parallel programming across CPUs, GPUs, FPGAs, and other processors.[&#91;32&#93;](#cite_note-cuda-vs-opencl-32) Developed by th

1. [↑](#cite_ref-nvidia-cuda-guide_1-0) NVIDIA CUDA C++ Programming Guide, [https://docs.nvidia.com/cuda/cuda-c-programming-guide/](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)

2. [↑](#cite_ref-nvidia-cuda-zone_2-0) NVIDIA CUDA Zone - Library of Resources, [https://developer.nvidia.com/cuda-zone](https://developer.nvidia.com/cuda-zone)

3. [↑](#cite_ref-alexnet-chm_3-0) CHM Releases AlexNet Source Code, Computer History Museum, [https://computerhistory.org/blog/chm-releases-alexnet-source-code/](https://computerhistory.org/blog/chm-releases-alexnet-source-code/)

4. ↑ [4.0](#cite_ref-cuda-toolkit-docs_4-0) [4.1](#cite_ref-cuda-toolkit-docs_4-1) CUDA Toolkit Documentation 13.0 Update 1, NVIDIA, [https://docs.nvidia.com/cuda/](https://docs.nvidia.com/cuda/)

5. [↑](#cite_ref-nvidia-gpu-story_5-0) NVIDIA GPUs story, Medium, [https://medium.com/computing-systems-and-hardware-for-emerging/nvidia-gpus-story-0c7f86afa9a8](https://medium.com/computing-systems-and-hardware-for-emerging/nvidia-gpus-story-0c7f86afa9a8)

6. [↑](#cite_ref-hexus-cuda-launch_6-0) NVIDIA UNVEILS CUDA – THE GPU COMPUTING REVOLUTION BEGINS, HEXUS, [https://hexus.net/tech/items/software/7197-nvidia-unveils-cudatm-the-gpu-computing-revolution-begins/](https://hexus.net/tech/items/software/7197-nvidia-unveils-cudatm-the-gpu-computing-revolution-begins/)

7. [↑](#cite_ref-wiki-cuda_7-0) CUDA, Wikipedia, [https://en.wikipedia.org/wiki/CUDA](https://en.wikipedia.org/wiki/CUDA)

8. [↑](#cite_ref-insidehpc-cuda10_8-0) NVIDIA releases CUDA 1.0, Inside HPC & AI News, [https://insidehpc.com/2007/07/nvidia-releases-cuda-10/](https://insidehpc.com/2007/07/nvidia-releases-cuda-10/)

9. ↑ [9.0](#cite_ref-modular-history_9-0) [9.1](#cite_ref-modular-history_9-1) [9.2](#cite_ref-modular-history_9-2) What exactly is CUDA?, Modular, [https://www.modular.com/blog/democratizing-compute-part-2-what-exactly-is-cuda](https://www.modular.com/blog/democratizing-compute-part-2-what-exactly-is-cuda)

10. [↑](#cite_ref-cuda-programming-guide_10-0) CUDA C++ Programming Guide, NVIDIA Documentation Hub, [https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)

11. [↑](#cite_ref-cuda-thread-block_11-0) Thread block (CUDA programming), Wikipedia, [https://en.wikipedia.org/wiki/Thread_block_(CUDA_programming)](https://en.wikipedia.org/wiki/Thread_block_(CUDA_programming))

12. [↑](#cite_ref-cuda-refresher_12-0) CUDA Refresher: The CUDA Programming Model, NVIDIA Technical Blog, [https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/](https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/)

13. [↑](#cite_ref-cuda-memory-hierarchy_13-0) CUDA - Memory Hierarchy, The Beard Sage, [http://thebeardsage.com/cuda-memory-hierarchy/](http://thebeardsage.com/cuda-memory-hierarchy/)

14. [↑](#cite_ref-hopper-tuning_14-0) NVIDIA Hopper Tuning Guide, NVIDIA, [https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html](https://docs.nvidia.com/cuda/hopper-tuning-guide/index.html)

15. [↑](#cite_ref-hopper-architecture_15-0) NVIDIA Hopper Architecture In-Depth, NVIDIA Technical Blog, [https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/](https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/)

16. [↑](#cite_ref-cuda-13-release-notes_16-0) CUDA Toolkit 13.0 Update 2 - Release Notes, NVIDIA, [https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html)

17. [↑](#cite_ref-phoronix-cuda6_17-0) NVIDIA Officially Releases CUDA 6, Phoronix, [https://www.phoronix.com/news/MTY2NTE](https://www.phoronix.com/news/MTY2NTE)

18. [↑](#cite_ref-cuda11-features_18-0) CUDA 11 Features Revealed, NVIDIA Developer Blog, [https://developer.nvidia.com/blog/cuda-11-features-revealed/](https://developer.nvidia.com/blog/cuda-11-features-revealed/)

19. [↑](#cite_ref-cuda-x-libraries_19-0) CUDA-X GPU-Accelerated Libraries, NVIDIA Developer, [https://developer.nvidia.com/gpu-accelerated-libraries](https://developer.nvidia.com/gpu-accelerated-libraries)

20. [↑](#cite_ref-cublas_20-0) cuBLAS, NVIDIA Developer, [https://developer.nvidia.com/cublas](https://developer.nvidia.com/cublas)

21. [↑](#cite_ref-cusparse_21-0) cuSPARSE, NVIDIA Developer, [https://developer.nvidia.com/cusparse](https://developer.nvidia.com/cusparse)

22. [↑](#cite_ref-cusolver_22-0) cuSOLVER, NVIDIA Developer, [https://developer.nvidia.com/cusolver](https://developer.nvidia.com/cusolver)

23. [↑](#cite_ref-thrust_23-0) Thrust, NVIDIA Developer, [https://developer.nvidia.com/thrust](https://developer.nvidia.com/thrust)

24. [↑](#cite_ref-cudnn_24-0) NVIDIA cuDNN, NVIDIA Developer, [https://developer.nvidia.com/cudnn](https://developer.nvidia.com/cudnn)

25. [↑](#cite_ref-tensorrt_25-0) How to Speed Up Deep Learning Inference Using TensorRT, NVIDIA Technical Blog, [https://developer.nvidia.com/blog/speed-up-inference-tensorrt/](https://developer.nvidia.com/blog/speed-up-inference-tensorrt/)

26. [↑](#cite_ref-deep-learning-software_26-0) Deep Learning Software, NVIDIA Developer, [https://developer.nvidia.com/deep-learning-software](https://developer.nvidia.com/deep-learning-software)

27. [↑](#cite_ref-nccl_27-0) NVIDIA Collective Communications Library (NCCL), NVIDIA Developer, [https://developer.nvidia.com/nccl](https://developer.nvidia.com/nccl)

28. [↑](#cite_ref-cupy_28-0) CuPy: NumPy & SciPy for GPU, [https://cupy.dev/](https://cupy.dev/)

29. [↑](#cite_ref-cuda-compute-capability_29-0) CUDA GPU Compute Capability, NVIDIA Developer, [https://developer.nvidia.com/cuda-gpus](https://developer.nvidia.com/cuda-gpus)

30. [↑](#cite_ref-kepler-whitepaper_30-0) NVIDIA's Next Generation CUDA Compute Architecture: Kepler, NVIDIA, [https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-product-literature/NVIDIA-Kepler-GK110-GK210-Architecture-Whitepaper.pdf](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-product-literature/NVIDIA-Kepler-GK110-GK210-Architecture-Whitepaper.pdf)

31. [↑](#cite_ref-hopper-gtc_31-0) NVIDIA Hopper GPU Architecture, NVIDIA, [https://www.nvidia.com/en-us/data-center/technologies/hopper-architecture/](https://www.nvidia.com/en-us/data-center/technologies/hopper-architecture/)

32. [↑](#cite_ref-cuda-vs-opencl_32-0) CUDA vs OpenCL: Which One For GPU Programming?, Incredibuild, [https://www.incredibuild.com/blog/cuda-vs-opencl-which-to-use-for-gpu-programming](https://www.incredibuild.com/blog/cuda-vs-opencl-which-to-use-for-gpu-programming)