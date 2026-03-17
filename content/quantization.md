---
title: "Quantization"
slug: "quantization"
---[Template:Infobox AI term](/index.php?title=Template:Infobox_AI_term&action=edit&redlink=1)

**Quantization** in [machine learning](/wiki/machine_learning) and [artificial intelligence](/wiki/artificial_intelligence) is the process of constraining [neural network](/wiki/neural_network) parameters from high-precision formats (typically 32-bit [floating-point](/index.php?title=Floating-point_arithmetic&action=edit&redlink=1)) to lower-precision representations (such as 8-bit integers), enabling 4× model size reduction and 2-4× [inference](/wiki/inference) speedup with minimal accuracy loss.[&#91;1&#93;](#cite_note-huggingface_quant-1)[&#91;2&#93;](#cite_note-ibm_quant-2) This technique has become essential for deploying large models on resource-constrained devices, reducing computational costs, and enabling real-time inference. Originally explored in the 1990s for early neural networks, quantization has experienced explosive growth since 2022 with the emergence of [large language models](/wiki/large_language_model), evolving from simple 8-bit post-training methods to sophisticated 1-bit architectures trained natively at low precision.

The significance of quantization extends beyond mere compression. Modern quantization enables running 70 billion parameter language models on consumer [GPUs](/index.php?title=GPU&action=edit&redlink=1), deploying [computer vision](/wiki/computer_vision) models on smartphones, and executing AI inference on [edge devices](/index.php?title=Edge_computing&action=edit&redlink=1) with 40-80% energy savings.[&#91;3&#93;](#cite_note-cloudflare_quant-3)[&#91;4&#93;](#cite_note-rinf_quant-4) Recent breakthroughs like Microsoft's [BitNet](/index.php?title=BitNet&action=edit&redlink=1) demonstrate that models can be trained from scratch with ternary weights (values constrained to -1, 0, or +1) while matching full-precision performance, fundamentally challenging assumptions about the precision requirements of deep learning. As models continue scaling to trillions of parameters, quantization has transformed from an optimization technique into a necessity for practical AI deployment.

## Core Principles and Mathematical Foundations

Quantization maps continuous floating-point values to a discrete set of integers through an affine transformation defined by two parameters: scale and zero-point. **The fundamental quantization equation** relates a floating-point value **x** to its quantized integer representation **x_q** through the formula:[&#91;1&#93;](#cite_note-huggingface_quant-1)[&#91;5&#93;](#cite_note-mathworks_quant-5)

  
    
      
        x
        =
        S
        &#x00D7;
        (
        
          x
          
            q
          
        
        &#x2212;
        Z
        )
      
    
    {\displaystyle x=S\times (x_{q}-Z)}
  
![{\displaystyle x=S\times (x_{q}-Z)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5f9cf1d0bcdeac38f61df5880e63e351206e5f6a)

where **S** represents the scale factor (a positive floating-point number) and **Z** represents the zero-point (an integer ensuring exact representation of zero).

The forward quantization process applies the inverse mapping with clipping:

  
    
      
        
          x
          
            q
          
        
        =
        
          clip
        
        (
        
          round
        
        (
        x
        
          /
        
        S
        +
        Z
        )
        ,
        
          &#x03B1;
          
            q
          
        
        ,
        
          &#x03B2;
          
            q
          
        
        )
      
    
    {\displaystyle x_{q}={\text{clip}}({\text{round}}(x/S+Z),\alpha _{q},\beta _{q})}
  
![{\displaystyle x_{q}={\text{clip}}({\text{round}}(x/S+Z),\alpha _{q},\beta _{q})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d97968d42e208adb27933f34196e369132d3b500)

where α_q and β_q define the quantization range. For b-bit quantization, typical ranges include [-128, 127] for signed 8-bit integers or [0, 255] for unsigned representations. The scale and zero-point parameters derive from the floating-point range [α, β] through:

  
    
      
        S
        =
        
          
            
              &#x03B2;
              &#x2212;
              &#x03B1;
            
            
              
                &#x03B2;
                
                  q
                
              
              &#x2212;
              
                &#x03B1;
                
                  q
                
              
            
          
        
      
    
    {\displaystyle S={\frac {\beta -\alpha }{\beta _{q}-\alpha _{q}}}}
  
![{\displaystyle S={\frac {\beta -\alpha }{\beta _{q}-\alpha _{q}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b1d2da14a144808116b98b78dbdc8e710b722eef)

  
    
      
        Z
        =
        
          round
        
        
          (
          
            
              
                &#x03B1;
                &#x00D7;
                
                  &#x03B2;
                  
                    q
                  
                
                &#x2212;
                &#x03B2;
                &#x00D7;
                
                  &#x03B1;
                  
                    q
                  
                
              
              
                &#x03B2;
                &#x2212;
                &#x03B1;
              
            
          
          )
        
      
    
    {\displaystyle Z={\text{round}}\left({\frac {\alpha \times \beta _{q}-\beta \times \alpha _{q}}{\beta -\alpha }}\right)}
  
![{\displaystyle Z={\text{round}}\left({\frac {\alpha \times \beta _{q}-\beta \times \alpha _{q}}{\beta -\alpha }}\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/517a6dd9600684c7662e2c417f449f4881aee26b)

This affine scheme generalizes to symmetric quantization when the floating-point range centers around zero. Symmetric quantization enforces Z = 0, simplifying computation by eliminating zero-point adjustments.[&#91;6&#93;](#cite_note-intel_distiller-6) **For INT8 symmetric quantization, the range becomes [-α, α] mapped to [-127, 127]**, deliberately excluding -128 to maintain perfect symmetry. This choice sacrifices one quantization level but enables computational speedups by removing addition operations from the dequantization formula, reducing it to 
  
    
      
        x
        =
        S
        &#x00D7;
        
          x
          
            q
          
        
      
    
    {\displaystyle x=S\times x_{q}}
  
![{\displaystyle x=S\times x_{q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8e8040b1f288da59fe110458a12b0e08497b185a).

### Quantized Matrix Multiplication

**Quantized matrix multiplication** demonstrates how integer arithmetic replaces floating-point operations while maintaining accuracy. For the operation Y = XW + b, the complete quantized formulation expands to account for scale factors and zero-points of all operands. The critical insight is that the term requiring actual computation—the sum of products of quantized values—executes entirely in integer arithmetic, enabling hardware acceleration through specialized units like NVIDIA [Tensor Cores](/index.php?title=Tensor_Core&action=edit&redlink=1) and Google [TPUs](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1).[&#91;7&#93;](#cite_note-jacob2018-7) Several terms involving zero-points and scale factors can be precomputed offline, further reducing inference-time overhead. **Modern hardware achieves 2-4× speedup for INT8 operations compared to FP32**, with theoretical improvements reaching 16× in memory-bandwidth-limited scenarios.[&#91;8&#93;](#cite_note-geeksforgeeks_quant-8)

### Quantization Schemes

| Feature | Symmetric Quantization | Asymmetric (Affine) Quantization |
| --- | --- | --- |
| **Real Value Range** | [-α, α] (centered at 0) | [min, max] (not necessarily centered) |
| **Zero-Point (Z)** | Fixed at 0 | Calculated integer value |
| **Mapping Formula** | 
  
    
      
        x
        =
        S
        &#x00D7;
        
          x
          
            q
          
        
      
    
    {\displaystyle x=S\times x_{q}}
  
![{\displaystyle x=S\times x_{q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8e8040b1f288da59fe110458a12b0e08497b185a) | 
  
    
      
        x
        =
        S
        &#x00D7;
        (
        
          x
          
            q
          
        
        &#x2212;
        Z
        )
      
    
    {\displaystyle x=S\times (x_{q}-Z)}
  
![{\displaystyle x=S\times (x_{q}-Z)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5f9cf1d0bcdeac38f61df5880e63e351206e5f6a) |
| **Pros** | Computationally faster, simpler | More flexible, better represents skewed data |
| **Cons** | May waste integer range if data not zero-centered | Slightly more computational overhead |
| **Typical Use** | Weights (usually zero-centered) | Activations (often skewed, for example post-ReLU) |

**Symmetric quantization** assumes a symmetric range around zero (for example [-127, 127] for INT8), setting Z = 0. This simplifies computations but may waste representation for asymmetric distributions.[&#91;1&#93;](#cite_note-huggingface_quant-1)[&#91;2&#93;](#cite_note-ibm_quant-2) **Asymmetric (affine) quantization** uses a non-zero Z to shift the range, better handling skewed distributions like activations after [ReLU](/wiki/relu) or similar functions, which have ranges [0, +max).[&#91;6&#93;](#cite_note-intel_distiller-6)

### Granularity: Per-Tensor vs. Per-Channel

**Per-tensor quantization** uses one scale and zero-point for an entire tensor (for example all weights in a layer share the same quantization parameters). **Per-channel quantization** (also called per-axis) allows each output channel (or each filter) in a layer to have its own scale and zero-point.[&#91;9&#93;](#cite_note-pytorch_quant-9)[&#91;10&#93;](#cite_note-wandb_qat-10)

Per-channel quantization is commonly used for [convolutional](/wiki/convolutional_neural_network) and [fully-connected](/index.php?title=Fully-connected_layer&action=edit&redlink=1) layer weights, because the distribution of weights can differ between channels. Using a separate scale for each channel often yields better accuracy, since it adapts to each set of values more closely. Activations are typically quantized per-tensor because their statistics can change with every input batch, making it less practical to have distinct parameters per channel.[&#91;11&#93;](#cite_note-static_quant_medium-11)

### Calibration Techniques

Calibration determines ranges for activations in static quantization:

- **Min-Max**: Uses observed minimum and maximum values

- **Mean Square Error (MSE)**: Minimizes quantization error 
  
    
      
        &#x2016;
        x
        &#x2212;
        
          
            
              x
              &#x005E;
            
          
        
        
          &#x2016;
          
            2
          
        
      
    
    {\displaystyle \|x-{\hat {x}}\|^{2}}
  
![{\displaystyle \|x-{\hat {x}}\|^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/406934d895e9c2a882258d4ebfeae49dfc72d36e)

- **Entropy**: Minimizes information loss using Kullback-Leibler divergence

- **Percentile**: Clips outliers using percentiles (typically 99-99.9%)[&#91;12&#93;](#cite_note-nagel2021-12)

**Percentile calibration**, which captures a specified percentage of observed values, often provides superior results by excluding extreme outliers that would otherwise force wasteful quantization ranges.

## History and Evolution

The foundational concepts of neural network quantization emerged in the early 1990s when researchers first explored converting floating-point parameters to low-precision datatypes. Balzer and colleagues published pioneering work on weight quantization for [Boltzmann machines](/index.php?title=Boltzmann_machine&action=edit&redlink=1) in 1991, while Choudry introduced "continuous-discrete learning" that applied quantization during training. These early efforts remained largely academic curiosities until the 2010s, when the success of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) on [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1) reignited interest in compression techniques.[&#91;13&#93;](#cite_note-gupta2015-13)

**The 2015 publication of BinaryConnect by Matthieu Courbariaux and Yoshua Bengio marked the breakthrough moment for modern quantization research.** Released on November 2, 2015, this paper demonstrated that [convolutional neural networks](/wiki/convolutional_neural_network) could train with binary weights during forward and backward propagation, achieving near state-of-the-art results on [MNIST](/wiki/mnist), [CIFAR-10](/index.php?title=CIFAR-10&action=edit&redlink=1), and [SVHN](/index.php?title=SVHN&action=edit&redlink=1) benchmarks. BinaryConnect introduced the [Straight-Through Estimator](/index.php?title=Straight-Through_Estimator&action=edit&redlink=1) (STE), a technique for handling non-differentiable quantization functions during [backpropagation](/wiki/backpropagation) by approximating the gradient as the identity function. **This method became the de facto standard for training quantized networks**, enabling gradient flow through otherwise non-differentiable discretization operations.[&#91;13&#93;](#cite_note-gupta2015-13)

The momentum continued with [BinaryNet](/index.php?title=Binary_neural_network&action=edit&redlink=1) in February 2016, extending binarization to both weights and activations. By constraining all values to {-1, +1}, BinaryNet achieved a remarkable 31.3× memory footprint reduction compared to 32-bit floating-point while maintaining acceptable accuracy. More importantly, binary operations replaced expensive multiply-accumulate instructions with simple [XNOR](/index.php?title=XNOR_gate&action=edit&redlink=1) gates and bit counting, promising dramatic computational speedups on specialized hardware.[&#91;14&#93;](#cite_note-courbariaux2016-14) Han and colleagues' Deep Compression work in 2015 combined [pruning](/index.php?title=Pruning_(artificial_intelligence)&action=edit&redlink=1), quantization, and [Huffman coding](/index.php?title=Huffman_coding&action=edit&redlink=1), demonstrating that AlexNet and [VGG](/index.php?title=VGG&action=edit&redlink=1) could be compressed by 35× and 49× respectively without accuracy loss.[&#91;15&#93;](#cite_note-han2015-15)

The field matured significantly between 2017 and 2021 as researchers systematically explored quantization's capabilities and limitations. Two comprehensive surveys published in 2021—one by Gholami and colleagues at UC Berkeley and another white paper by Qualcomm AI Research—consolidated understanding of post-training quantization and quantization-aware training methodologies.[&#91;16&#93;](#cite_note-gholami2021-16)[&#91;12&#93;](#cite_note-nagel2021-12) **These works established that 8-bit quantization typically incurs less than 1% accuracy loss for convolutional networks, while lower bit-widths require careful quantization-aware training** to maintain performance.

### The Large Language Model Era (2022-2024)

The explosion of large language models in 2022-2023 catalyzed a quantization revolution focused specifically on [transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architectures. **LLM.int8() by Tim Dettmers** (August 2022) pioneered mixed-precision decomposition for handling outlier features in [attention mechanisms](/index.php?title=Attention_mechanism&action=edit&redlink=1), enabling 8-bit inference for models exceeding 30 billion parameters on single GPUs. This work revealed that transformer models develop extreme outlier activations—magnitude 100× larger than typical values—in specific feature dimensions, requiring special treatment for successful quantization.[&#91;17&#93;](#cite_note-dettmers2022-17)

[GPTQ](/index.php?title=GPTQ&action=edit&redlink=1) followed in October 2022, applying layer-wise post-training quantization based on approximate second-order information. **GPTQ successfully quantizes language models to 4-bit, 3-bit, and even 2-bit precision** using Hessian-based error minimization and intelligent error redistribution across layers.[&#91;18&#93;](#cite_note-frantar2023-18) The method gained rapid adoption in production systems, integrated into NVIDIA TensorRT-LLM, [vLLM](/index.php?title=VLLM&action=edit&redlink=1), and Hugging Face Text Generation Inference. [QLoRA](/index.php?title=QLoRA&action=edit&redlink=1) emerged in May 2023, combining 4-bit quantization with [Low-Rank Adapters](/index.php?title=Low-Rank_Adaptation&action=edit&redlink=1) to enable fine-tuning of 65 billion parameter models on single 48GB GPUs while preserving full 16-bit task performance. QLoRA introduced NormalFloat4 (NF4), an information-theoretically optimal quantization format for normally distributed weights, along with double quantization to reduce memory overhead by quantizing the quantization constants themselves.[&#91;19&#93;](#cite_note-dettmers2023-19)

**AWQ (Activation-aware Weight Quantization)** appeared in June 2023, earning the MLSys 2024 Best Paper Award for its innovation in protecting salient weights based on activation distributions.[&#91;20&#93;](#cite_note-lin2023-20) Rather than treating all weights equally, AWQ identifies and preserves the approximately 1% of weights with the highest impact on model outputs, using per-channel scaling without requiring mixed-precision storage. This activation-aware approach often outperforms GPTQ in speed, particularly for instruction-tuned and multi-modal models, while requiring substantially less calibration data.

The year 2024 marked the arrival of 1-bit large language models with Microsoft Research's [BitNet](/index.php?title=BitNet&action=edit&redlink=1) series. **BitNet b1.58, published February 27, 2024, demonstrated that every parameter in a large language model could be constrained to ternary values {-1, 0, +1}—effectively 1.58 bits per parameter—while matching full-precision performance on perplexity and downstream tasks.**[&#91;21&#93;](#cite_note-ma2024-21) The paper's claim to define "a new scaling law and recipe for training new generations of LLMs" proved prescient. BitNet b1.58 replaces matrix multiplications with addition operations, dramatically reducing computational complexity and energy consumption.

## Quantization Methodologies

Quantization strategies divide into two fundamental approaches based on timing: post-training quantization applies to already-trained models, while quantization-aware training incorporates quantization effects during the training process.

### Post-Training Quantization (PTQ)

**Post-Training Quantization** is the process of converting a model's weights and/or activations to a lower precision after the model has been fully trained in high precision.[&#91;2&#93;](#cite_note-ibm_quant-2)[&#91;12&#93;](#cite_note-nagel2021-12) PTQ is widely used due to its simplicity and speed; it does not require retraining the model or having access to the original training dataset and pipeline. This makes it an attractive "push-button" solution for rapid deployment. However, because the model was not trained with quantization in mind, PTQ can lead to a more significant drop in accuracy compared to QAT, especially when quantizing to very low bit-widths (< 8 bits).[&#91;22&#93;](#cite_note-mdpi_survey-22)

PTQ is further divided into two main approaches based on how the activations (the outputs of each layer) are handled.

#### Dynamic PTQ

In **dynamic PTQ** (also known as "dynamic range quantization"), the model's weights are quantized offline, but the activations are quantized "on the fly" or dynamically during the inference process.[&#91;2&#93;](#cite_note-ibm_quant-2)[&#91;1&#93;](#cite_note-huggingface_quant-1) For each input that is fed to the model, the range (min/max values) of the activation tensors is calculated at runtime. These dynamic ranges are then used to compute the quantization parameters for the activations for that specific inference pass.

The main advantage of dynamic PTQ is its flexibility and robustness. It does not require a calibration dataset and can adapt to varying input data distributions, which often results in higher accuracy than static PTQ, particularly for models like LLMs where the activation ranges can vary dramatically depending on the input prompt.[&#91;23&#93;](#cite_note-selek_static_dynamic-23) The trade-off is performance: the runtime computation of activation ranges introduces a significant computational overhead, making inference slower than with static PTQ.

#### Static PTQ

In **static PTQ**, both the model's weights and its activations are quantized offline, before inference begins.[&#91;23&#93;](#cite_note-selek_static_dynamic-23)[&#91;8&#93;](#cite_note-geeksforgeeks_quant-8) While the range of the weights is known from the trained model, the range of the activations is input-dependent and must be estimated. This is achieved through a **calibration** step. During calibration, a small but representative dataset (typically a few hundred samples) is passed through the floating-point model, and observers are used to record the statistical distribution (for example min/max values) of the activations at each layer.[&#91;1&#93;](#cite_note-huggingface_quant-1)[&#91;11&#93;](#cite_note-static_quant_medium-11)

The primary advantage of static PTQ is its high inference speed. Since all quantization parameters are pre-computed, the entire inference process can be executed using highly efficient integer-only arithmetic, with no runtime overhead for calculating scales or zero-points. This makes it the ideal choice for latency-critical applications on edge devices where the input data distribution is relatively stable and predictable, such as in many computer vision tasks.[&#91;24&#93;](#cite_note-google_ptq-24)

| Feature | Static PTQ | Dynamic PTQ |
| --- | --- | --- |
| **Weights Quantization** | Offline (pre-computed) | Offline (pre-computed) |
| **Activations Quantization** | Offline (using calibration data) | On-the-fly (at runtime) |
| **Calibration Required?** | Yes, needs representative dataset | No |
| **Inference Speed** | Very Fast (integer-only arithmetic) | Slower (runtime overhead) |
| **Accuracy** | Good, but sensitive to data shifts | Often higher, more robust |
| **Ideal Use Case** | Edge devices, CNNs for vision | Server-side LLMs with varied inputs |

### Quantization-Aware Training (QAT)

**Quantization-Aware Training** is a more sophisticated and powerful technique that integrates the quantization process directly into the model training or fine-tuning phase.[&#91;25&#93;](#cite_note-ibm_qat-25)[&#91;26&#93;](#cite_note-nvidia_qat-26) While more complex and computationally intensive than PTQ, QAT generally achieves higher accuracy, often recovering nearly all of the performance of the original floating-point model.

#### Simulating Quantization with "Fake Quantize" Operators

The core mechanism of QAT is the simulation of low-precision arithmetic during training. This is accomplished by inserting **"fake quantization"** (or quantize-dequantize) nodes into the model's computation graph, typically after layers that produce weights and activations.[&#91;26&#93;](#cite_note-nvidia_qat-26)[&#91;10&#93;](#cite_note-wandb_qat-10)

In the forward pass of training, these nodes perform a three-step operation:

1. Take a high-precision (FP32) input tensor

2. Quantize the tensor to a low-precision integer format (for example INT8), which simulates the rounding and clipping errors

3. Immediately dequantize the tensor back to FP32

The resulting FP32 tensor now carries the "imprint" of quantization error. This error-injected tensor is then passed to the next layer. By doing this, the model's loss function is directly exposed to the effects of quantization throughout the training process. This forces the optimization algorithm (for example [SGD](/index.php?title=Stochastic_gradient_descent&action=edit&redlink=1), [Adam](/index.php?title=Adam_optimizer&action=edit&redlink=1)) to find a set of weights that is not only good at the task but also robust to the noise and reduced precision of the quantized domain.[&#91;26&#93;](#cite_note-nvidia_qat-26)

#### Gradient Approximation with the Straight-Through Estimator

A critical challenge in QAT is that the rounding operation inherent in quantization is non-differentiable. Its derivative is zero almost everywhere, which would block the flow of gradients during backpropagation and halt the training process.[&#91;25&#93;](#cite_note-ibm_qat-25)[&#91;10&#93;](#cite_note-wandb_qat-10)

To overcome this, QAT relies on a technique called the **Straight-Through Estimator (STE)**. The STE is an approximation for the gradient of the non-differentiable quantization function. During the backward pass, the STE simply treats the quantization node as an identity function, passing the gradient from its output directly to its input without modification.[&#91;26&#93;](#cite_note-nvidia_qat-26)[&#91;27&#93;](#cite_note-yin2019-27) In essence, while the forward pass sees the effects of quantization, the backward pass "looks through" the problematic rounding operation, allowing gradients to flow and the model's full-precision weights to be updated effectively.

| Aspect | PTQ | QAT |
| --- | --- | --- |
| **Complexity** | Low; simple to apply | High; requires retraining/fine-tuning |
| **Data Requirement** | Small calibration set or none | Requires training dataset |
| **Computational Cost** | Low; fast conversion | High; significant compute for fine-tuning |
| **Model Accuracy** | Good, but can degrade at <8 bits | Excellent; near-original accuracy |
| **When to Use** | Rapid deployment, no training access | When accuracy is paramount, low bit-widths |

## Precision Levels and Formats

### INT8 Quantization

**INT8 quantization represents the production standard**, offering 4× model size reduction and 2-4× inference speedup with typically less than 1% accuracy loss.[&#91;28&#93;](#cite_note-clarifai_quant-28)[&#91;29&#93;](#cite_note-analytixlabs_quant-29) Signed 8-bit integers span the range [-128, 127] or [0, 255] for unsigned variants, providing 256 discrete levels to represent continuous floating-point values. Hardware support for INT8 operations is nearly universal across modern processors: NVIDIA Tensor Cores accelerate INT8 matrix multiplication on Volta and newer architectures, Intel CPUs provide optimized VNNI instructions, ARM processors include INT8 NEON extensions, and Google's Edge TPU executes exclusively in INT8.[&#91;6&#93;](#cite_note-intel_distiller-6)

Intel's comprehensive study of 69 models on x86 CPUs demonstrates INT8 quantization achieving **2.97× geometric mean speedup compared to FP32**, with individual models like [MobileNet](/index.php?title=MobileNet&action=edit&redlink=1)V2 reaching 3.94× speedup at batch size 64. ResNet-50 demonstrates typical INT8 characteristics: accuracy drops from 70.07% to 69.85% (0.22% loss), while inference accelerates by 1.59-1.65× on CPUs and approximately 2× on GPUs. Memory consumption decreases proportionally, with models like Qwen-7B-Chat shrinking from 28GB in FP32 to 7GB in INT8.[&#91;6&#93;](#cite_note-intel_distiller-6)

### INT4 and Lower Bit-Widths

**INT4 quantization** occupies the frontier of practical deployment for large language models. 4-bit precision achieves 8× model size reduction, enabling 70 billion parameter models to fit on consumer GPUs with 24GB memory.[&#91;30&#93;](#cite_note-medoid_quant-30) Methods like GPTQ and AWQ demonstrate that 4-bit quantization of LLM weights maintains high quality with proper calibration, typically achieving 98-99% accuracy recovery compared to full-precision baselines.

Pushing below 4 bits presents escalating challenges. **INT2 quantization** compresses models by 16× but frequently causes substantial accuracy degradation without sophisticated techniques. Research shows 2-bit GPTQ quantization of [LLaMA](/wiki/llama)-65B decreases LAMBADA accuracy from 79% to 57%, with mathematical reasoning particularly affected—suffering up to 32.39% accuracy loss.[&#91;18&#93;](#cite_note-frantar2023-18) Recent innovations like Vector Post-Training Quantization (VPTQ) achieve 95% accuracy preservation at 2 bits through vector-wise quantization and advanced codebook optimization.[&#91;31&#93;](#cite_note-vptq2024-31)

### Binary and Ternary Neural Networks

**[Binary neural networks](/index.php?title=Binary_neural_network&action=edit&redlink=1) (BNNs)** and **[Ternary neural networks](/index.php?title=Ternary_neural_network&action=edit&redlink=1) (TNNs)** represent the extreme end of the precision spectrum. BinaryNet demonstrated feasibility in 2016 by constraining weights and activations to {-1, +1}, achieving 32× compression and replacing multiply-accumulate operations with XNOR and bit-counting.[&#91;14&#93;](#cite_note-courbariaux2016-14) However, accuracy losses remained significant for complex tasks until recent architectural innovations.

BitNet b1.58 uses ternary weights {-1, 0, +1} with 8-bit activations, achieving approximately 21× compression.[&#91;21&#93;](#cite_note-ma2024-21) The publicly released BitNet b1.58 2B4T model occupies merely 0.4GB compared to 4-5GB for full-precision 2 billion parameter models. Specialized inference frameworks like bitnet.cpp achieve 1.37-6.17× speedup on CPUs with 55-82% energy reduction compared to full-precision inference, demonstrating that ultra-low-bit models can deliver practical performance.[&#91;32&#93;](#cite_note-bitnet_cpp-32)

**Ternary Neural Networks (TNNs)** represent a compromise between binary and higher precision. Weights are constrained to three values, typically {-W, 0, +W}, where W is a learnable, layer-specific scaling factor.[&#91;33&#93;](#cite_note-zhu2017-33) The inclusion of an explicit zero state introduces [sparsity](/index.php?title=Sparse_matrix&action=edit&redlink=1) into the weight matrices, which can be exploited by hardware to skip computations involving zero, leading to further energy savings.

### FP16, BF16, and FP8 Formats

**FP16 (16-bit floating-point)** and **BF16 (Brain Floating Point 16)** provide 2× compression compared to FP32 while maintaining floating-point representation benefits. BF16 uses the same 8-bit exponent as FP32, providing wider dynamic range than FP16, which makes it more stable for training large models.[&#91;6&#93;](#cite_note-intel_distiller-6)

**FP8 (8-bit floating-point) formats** have emerged as superior alternatives to INT8 for transformer models. The IEEE-standardized E5M2 (5-bit exponent, 2-bit mantissa) and E4M3 (4-bit exponent, 3-bit mantissa) formats provide wider dynamic range than fixed-point integers, better handling the heavy-tailed activation distributions characteristic of large language models.[&#91;34&#93;](#cite_note-nvidia_fp8-34) NVIDIA's H100 GPUs with Hopper architecture provide native FP8 support, achieving 1.95× speedup for Stable Diffusion XL compared to FP16.

| Format | Bit Width | Description | Typical Use Cases |
| --- | --- | --- | --- |
| FP32 | 32 | Full-precision floating-point; training baseline | High-accuracy scenarios, training |
| FP16 | 16 | Half-precision floating-point; maintains dynamic range | GPU inference, mixed-precision training |
| BF16 | 16 | Brain Floating Point; wider exponent for stability | Training large models, [TPUs](/wiki/tpu) |
| FP8 | 8 | E5M2 or E4M3; floating-point with reduced precision | LLM inference on Hopper GPUs |
| INT8 | 8 | 8-bit integer; industry standard | Mobile, edge devices, production inference |
| INT4 | 4 | 4-bit integer; aggressive compression | LLMs on consumer GPUs |
| INT2 | 2 | 2-bit integer; extreme compression | Research, specialized applications |
| NF4 | 4 | NormalFloat4; optimal for normal distributions | QLoRA, LLM fine-tuning |
| Ternary | ~1.58 | Values in {-1, 0, +1} | BitNet, ultra-efficient inference |
| Binary | 1 | Values in {-1, +1} | Extreme edge deployment |

### Mixed-Precision Quantization

**Mixed-precision quantization** assigns different bit-widths to different layers or components based on sensitivity analysis. Hessian-based methods compute second-order information to identify layers where quantization most impacts the loss function, preserving higher precision for sensitive layers.[&#91;12&#93;](#cite_note-nagel2021-12) Common mixed-precision strategies include:

- **W4A8**: 4-bit weights, 8-bit activations

- **W6A6**: 6-bit for both weights and activations

- **W4A16**: 4-bit weights, full-precision activations

- **W8A8**: 8-bit for both (most common balanced approach)

For [vision transformers](/index.php?title=Vision_transformer&action=edit&redlink=1), research demonstrates that multi-head self-attention modules require higher precision than feed-forward networks, with projection layers being most sensitive and fully-connected layers tolerating aggressive quantization.[&#91;35&#93;](#cite_note-liu2021-35)

## Advanced Quantization Algorithms

### GPTQ: Generative Pre-trained Transformer Quantization

**GPTQ** applies optimal brain quantization principles in a one-shot, layer-wise manner. The algorithm processes each layer independently, using approximate second-order information derived from the Hessian matrix to determine optimal quantization.[&#91;18&#93;](#cite_note-frantar2023-18) For each column of weights, GPTQ minimizes reconstruction error by computing:

  
    
      
        
          w
          
            q
          
        
        =
        arg
        &#x2061;
        min
        &#x2016;
        W
        x
        &#x2212;
        
          W
          
            q
          
        
        x
        
          &#x2016;
          
            2
          
        
      
    
    {\displaystyle w_{q}=\arg \min \|Wx-W_{q}x\|^{2}}
  
![{\displaystyle w_{q}=\arg \min \|Wx-W_{q}x\|^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6b0884bdc13885d56c7c1f9f581bc22e978e7888)

where the optimization considers the Hessian 
  
    
      
        H
        =
        2
        
          X
          
            T
          
        
        X
      
    
    {\displaystyle H=2X^{T}X}
  
![{\displaystyle H=2X^{T}X}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5846a3a803529bd022d37c9c595e01cd6fde126e). The elegant aspect lies in error redistribution: quantization errors from earlier weights inform adjustments to later weights in the same row, minimizing accumulated error across the entire layer.

GPTQ's computational efficiency stems from avoiding gradient-based optimization, instead relying on closed-form updates. **Quantizing the OPT-175B model takes approximately 4 GPU-hours**, making the technique practical for the largest publicly available models. The method supports aggressive quantization to 4-bit, 3-bit, and 2-bit precision, though quality degrades significantly below 3 bits without additional techniques like outlier preservation. Production deployments leverage optimized kernels like ExLlama, achieving 2× inference speedup while reducing memory by 4× for 4-bit quantization.

### AWQ: Activation-aware Weight Quantization

**AWQ** introduces the key insight that not all weights contribute equally to model performance. Analyzing activation distributions reveals that approximately 1% of weights—those corresponding to salient activation channels—disproportionately affect model outputs.[&#91;20&#93;](#cite_note-lin2023-20) AWQ protects these salient weights by applying per-channel scaling:

  
    
      
        
          
            
              w
              &#x007E;
            
          
        
        =
        w
        &#x00D7;
        s
      
    
    {\displaystyle {\tilde {w}}=w\times s}
  
![{\displaystyle {\tilde {w}}=w\times s}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ba48d4039422806fdcc8461589169cb71bc6ea83)

where scaling factors **s** amplify important weight magnitudes before uniform quantization. The crucial innovation is that scaling doesn't require mixed-precision arithmetic during inference; instead, scales can be absorbed into subsequent layers or activation functions.

The mathematical formulation seeks scaling factors minimizing quantization error weighted by activation magnitude. For a linear layer 
  
    
      
        Y
        =
        (
        X
        &#x22C5;
        
          diag
        
        (
        s
        )
        )
        (
        
          diag
        
        (
        s
        
          )
          
            &#x2212;
            1
          
        
        W
        )
      
    
    {\displaystyle Y=(X\cdot {\text{diag}}(s))({\text{diag}}(s)^{-1}W)}
  
![{\displaystyle Y=(X\cdot {\text{diag}}(s))({\text{diag}}(s)^{-1}W)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4699e47df19a6eb807376e9103d71adbd18d2365), AWQ optimizes:

  
    
      
        
          s
          
            &#x2217;
          
        
        =
        arg
        &#x2061;
        min
        &#x2016;
        Q
        (
        W
        &#x22C5;
        s
        )
        &#x00D7;
        (
        X
        
          /
        
        s
        )
        &#x2212;
        W
        &#x00D7;
        X
        &#x2016;
      
    
    {\displaystyle s^{*}=\arg \min \|Q(W\cdot s)\times (X/s)-W\times X\|}
  
![{\displaystyle s^{*}=\arg \min \|Q(W\cdot s)\times (X/s)-W\times X\|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3eec4d6cd54fc10fa51b7f62d3cb6fdd48d0f40)

where Q represents the quantization operator. This activation-aware approach provides multiple benefits: faster inference than GPTQ (2.7× speedup on RTX 4090), superior accuracy preservation for instruction-tuned models, reduced calibration data requirements (as few as 128 tokens), and better generalization to multi-modal architectures.

### GGUF and llama.cpp

**GGUF (GPT-Generated Unified Format)** and the llama.cpp framework target CPU-first inference with optional GPU offloading. GGUF represents a quantized model serialization format that stores weights, metadata, and quantization parameters in an efficient binary representation. The format supports block-wise quantization strategies: super-blocks of 256 values subdivide into 8 sub-blocks of 32 values each, with quantization parameters at both levels enabling fine-grained adaptation to local statistics.[&#91;36&#93;](#cite_note-gguf_spec-36)

**GGUF quality levels** span from Q2_K (2.63 bits per weight) through Q8_0 (8.5 bits), allowing users to select accuracy-efficiency trade-offs based on deployment constraints. The llama.cpp inference engine provides CPU implementations optimized for diverse architectures: x86 with AVX, AVX2, and AVX-512 instructions; Apple Silicon leveraging Metal and Accelerate framework; ARM processors using NEON; and GPU backends for CUDA and ROCm.

**Performance benchmarks show 100 billion parameter models executing on single CPU cores at human reading speed (5-7 tokens/second)**, democratizing LLM access for researchers and developers without access to high-end GPUs. GGUF's K-quants variants apply K-means clustering to weight distributions, creating non-uniform quantization levels that concentrate representation capacity where weights densely cluster.

### BitNet: Native 1-bit Training

**BitNet** and **BitNet b1.58** fundamentally differ from post-training methods by training models natively at low precision. The architecture replaces standard Linear layers with BitLinear layers that constrain weights during forward propagation.[&#91;21&#93;](#cite_note-ma2024-21) For BitNet b1.58, weights are quantized to {-1, 0, +1} using:

  
    
      
        
          
            
              w
              &#x007E;
            
          
        
        =
        
          RoundClip
        
        
          (
          
            
              
                w
                
                  &#x03B3;
                  +
                  &#x03F5;
                
              
            
            ,
            &#x2212;
            1
            ,
            1
          
          )
        
      
    
    {\displaystyle {\tilde {w}}={\text{RoundClip}}\left({\frac {w}{\gamma +\epsilon }},-1,1\right)}
  
![{\displaystyle {\tilde {w}}={\text{RoundClip}}\left({\frac {w}{\gamma +\epsilon }},-1,1\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/dbac80b1373328e9776dd4fe8d13dd2a5f6f02fa)

where 
  
    
      
        &#x03B3;
        =
        
          
            1
            
              n
              m
            
          
        
        &#x2016;
        W
        
          &#x2016;
          
            1
          
        
      
    
    {\displaystyle \gamma ={\frac {1}{nm}}\|W\|_{1}}
  
![{\displaystyle \gamma ={\frac {1}{nm}}\|W\|_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9d64792d9120c37b0939e109239448369aaf839c) represents the average absolute weight. Activations undergo 8-bit quantization with similar absmax-based scaling. The critical innovation enabling training involves maintaining high-precision weights for gradient accumulation while simulating low-precision arithmetic during forward and backward passes.

BitNet's computational model replaces floating-point multiplications with integer additions, dramatically reducing arithmetic complexity. **Matrix multiplication W×X with ternary weights decomposes to:**

  
    
      
        Y
        =
        X
        &#x22C5;
        
          
            1
          
          
            mask
          
        
        &#x2212;
        X
        &#x22C5;
        
          
            n
            e
            g
          
          
            mask
          
        
      
    
    {\displaystyle Y=X\cdot \mathbf {1} _{\text{mask}}-X\cdot \mathbf {neg} _{\text{mask}}}
  
![{\displaystyle Y=X\cdot \mathbf {1} _{\text{mask}}-X\cdot \mathbf {neg} _{\text{mask}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/52e35f7a19f2c8518c07a9afa09b085382993e3e)

where masks identify positive and negative weight positions. This formulation requires only additions and subtractions, enabling specialized hardware implementations. The bitnet.cpp framework provides optimized kernels achieving 1.37-6.17× CPU speedup and 55-82% energy reduction compared to full-precision inference, with particularly strong performance on ARM architectures.[&#91;32&#93;](#cite_note-bitnet_cpp-32)

## Performance Characteristics and Benefits

### Model Size Reduction

**Model size reduction represents quantization's most immediate benefit**, with compression ratios directly proportional to bit-width reduction. FP32 to INT8 quantization achieves exactly 4× compression: a 7 billion parameter model decreases from 28GB to 7GB. INT4 quantization doubles this to 8× compression, fitting the same model in 3.5GB.[&#91;28&#93;](#cite_note-clarifai_quant-28)

The landmark Deep Compression work demonstrated extreme ratios combining quantization with pruning and Huffman coding: AlexNet compressed 35× (240MB to 6.9MB) and VGG-16 compressed 49× (552MB to 11.3MB), both without accuracy loss.[&#91;15&#93;](#cite_note-han2015-15) For modern large language models, these reductions transform deployment feasibility—[LLaMA](/wiki/llama) 3.1 70B requires 140GB in FP16 but only 35GB in INT8, crossing the threshold from impossible to practical for consumer GPUs.

### Inference Speed Improvements

**Inference speed improvements vary substantially based on hardware, model architecture, and bottleneck characteristics.** Compute-bound operations—where arithmetic operations dominate execution time—benefit most from quantization's reduced operation complexity. NVIDIA reports 1.8× speedup for W8A8-INT quantization on A100 GPUs, while INT8 operations on Tensor Cores can theoretically reach 4× speedup over FP32.[&#91;37&#93;](#cite_note-nvidia_tensorrt-37)

TensorRT-optimized Stable Diffusion XL achieves 1.72× speedup with INT8 and 1.95× with FP8 on RTX 6000 Ada GPUs. CPU implementations show equally impressive gains: Intel's optimized INT8 operators deliver 2.97× geometric mean speedup across 69 models on x86 processors.[&#91;6&#93;](#cite_note-intel_distiller-6)

Memory bandwidth-bound operations gain from reduced data movement. **Modern GPU inference often stalls waiting for data transfer rather than computation**, particularly for large models where weights cannot fit in high-speed cache. A 4× reduction in model size enables 4× more weights to occupy L2 cache, dramatically reducing expensive DRAM accesses.

### Accuracy Preservation

**Accuracy preservation depends critically on bit-width, quantization method, and model characteristics.** Comprehensive evaluations provide definitive statistics: 8-bit W8A8-INT quantization achieves 99%+ accuracy recovery across all benchmarks, essentially matching full-precision performance. 4-bit W4A16 quantization maintains 98.9% accuracy recovery for code generation, 98.5% for mathematics, and similarly high retention across diverse tasks.[&#91;38&#93;](#cite_note-redhat_quant-38)

Individual model examples corroborate these findings—ResNet-50 INT8 loses only 0.22% top-1 accuracy (70.07% to 69.85%), while MobileNetV2 loses 0.61% (70.14% to 69.53%). Below 4 bits, accuracy degradation accelerates unless sophisticated techniques intervene. Standard 3-bit quantization shows noticeable degradation, with model capacity beginning to deteriorate.[&#91;18&#93;](#cite_note-frantar2023-18)

### Energy Efficiency and Cost Reduction

Energy efficiency gains prove crucial for edge deployment and environmental sustainability. Manufacturing edge AI case studies document dramatic improvements: **hardware costs decreased 92% (from $225,000 for 50 GPU cards to $18,000 for 4 cards) while energy consumption dropped 65-80%** through INT8 quantization.[&#91;39&#93;](#cite_note-edge_case_study-39)

Mobile edge computing research shows up to 40% overall energy reduction, combining computational savings with reduced data transmission. FP32 to FP16 quantization for audio transcription on edge devices achieves 50% energy reduction, while BitNet models demonstrate 55-82% energy savings on CPUs compared to full-precision baselines.[&#91;32&#93;](#cite_note-bitnet_cpp-32)

The bitnet.cpp framework running the 2B4T model achieves remarkable edge device performance: **11 tokens per second on Raspberry Pi 5, 48 tokens per second on Snapdragon X Elite**, and human reading speed (5-7 tokens/second) for 100B parameter models on single CPU cores. These metrics transform deployment economics—models that previously required $10,000+ GPU infrastructure now execute on $100 single-board computers.

## Applications Across Domains

### Computer Vision

**[Convolutional neural networks](/wiki/convolutional_neural_network) demonstrate strong quantization robustness**, with deeper architectures generally more tolerant than compact efficient networks. [ResNet](/index.php?title=ResNet&action=edit&redlink=1) family models quantize successfully to INT8 with minimal accuracy loss: ResNet-18 and ResNet-50 both maintain performance within 0.3% of full-precision baselines while gaining 1.59-1.65× CPU speedup and 4× size reduction.[&#91;6&#93;](#cite_note-intel_distiller-6)

[MobileNet](/index.php?title=MobileNet&action=edit&redlink=1) architectures present greater challenges due to aggressive efficiency optimizations. MobileNetV1 and V2's depth-wise separable convolutions prove sensitive to quantization, with per-tensor INT8 quantization causing 4-5% accuracy degradation. However, per-channel quantization recovers most losses, and quantization-aware training further improves results.[&#91;7&#93;](#cite_note-jacob2018-7)

**Object detection models benefit from hybrid quantization strategies** that apply different bit-widths to backbones versus detection heads. [YOLOv](/index.php?title=YOLO&action=edit&redlink=1)8 quantization with pruning achieves 64.2% compression ratio with approximately 4% detection accuracy loss, maintaining real-time performance on edge devices.[&#91;40&#93;](#cite_note-yolo_quant-40)

### Natural Language Processing and LLMs

**[Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architectures and large language models dominate recent quantization research** due to their scale and deployment challenges. [BERT](/wiki/bert) models quantize successfully to 8 bits with minimal degradation—Q8BERT achieves 4× compression maintaining accuracy, while FP8-BERT addresses outlier challenges through floating-point representation.[&#91;41&#93;](#cite_note-zafrir2019-41)

Large language model quantization has evolved into a sophisticated subfield. **The [LLaMA](/wiki/llama) 3.1 family (8B, 70B, 405B parameters) serves as a benchmark for quantization methods**, with comprehensive evaluations showing 8-bit models maintaining 99%+ baseline accuracy and 4-bit models retaining 98.9% on code generation.[&#91;38&#93;](#cite_note-redhat_quant-38) Different quantization algorithms exhibit distinct strengths:

- **GPTQ**: Excels for GPU deployment with 2× speedup and 4× memory reduction

- **AWQ**: Provides fastest inference with 3× speedup, best for instruction-tuned models

- **GGUF**: Enables CPU deployment with quality-levels from 2 to 8 bits

### Generative Models

Generative models for images and video present unique quantization challenges. **[Stable Diffusion](/wiki/stable_diffusion) XL quantization with TensorRT achieves 1.72× INT8 speedup and 1.95× FP8 speedup** while preserving image quality through percentile-based calibration that excludes extreme outliers.[&#91;37&#93;](#cite_note-nvidia_tensorrt-37) The iterative generation process amplifies quantization error accumulation across diffusion steps, requiring careful validation that perceptual quality remains acceptable.

Research demonstrates that weight-only quantization to INT8 preserves visual fidelity, while more aggressive activation quantization demands calibration on representative prompts covering diverse generation scenarios.[&#91;42&#93;](#cite_note-li2023-42)

### Autonomous Vehicles and Robotics

In [autonomous vehicles](/index.php?title=Autonomous_vehicle&action=edit&redlink=1), perception models that process data from cameras, [LiDAR](/index.php?title=LiDAR&action=edit&redlink=1), and [radar](/index.php?title=Radar&action=edit&redlink=1) must run with extremely low latency to make real-time driving decisions. Quantization is a key technique used to accelerate these critical models on the vehicle's embedded computing hardware, enhancing safety and responsiveness.[&#91;29&#93;](#cite_note-analytixlabs_quant-29)

Edge deployment in robotics benefits from quantization's power efficiency—battery-powered robots require energy-efficient inference to maximize operational time. INT8 quantization of [object detection](/index.php?title=Object_detection&action=edit&redlink=1), [semantic segmentation](/index.php?title=Semantic_segmentation&action=edit&redlink=1), and [SLAM](/index.php?title=Simultaneous_localization_and_mapping&action=edit&redlink=1) models enables real-time processing on embedded GPUs like NVIDIA Jetson with 2-3× speedup and 40-60% power reduction.[&#91;43&#93;](#cite_note-jetson_quant-43)

## Implementation in Deep Learning Frameworks

### PyTorch

**[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) provides three quantization paradigms** reflecting the evolution of the framework's capabilities. Eager Mode Quantization (beta status) offers manual control, requiring explicit fusion and quantization/dequantization module placement. FX Graph Mode Quantization (maintenance mode) automates fusion and quantization through graph-level transformations. PyTorch 2 Export Quantization (prototype) leverages torch.export to capture entire model graphs, enabling more sophisticated optimizations.[&#91;9&#93;](#cite_note-pytorch_quant-9)

The PyTorch quantization API centers on configuration objects (QConfig) specifying observer modules for calibration and fake-quantization modules for QAT. **Backend support spans diverse hardware**: x86 CPUs through fbgemm and onednn libraries, ARM processors via qnnpack and xnnpack, and prototype NVIDIA GPU support through TensorRT integration. Per-tensor and per-channel quantization options enable accuracy-efficiency trade-offs, with per-channel as default for weights.

### TensorFlow and TensorFlow Lite

**[TensorFlow](/wiki/tensorflow) Model Optimization Toolkit** offers comprehensive quantization capabilities through two main pathways. Post-training quantization provides weight-only, dynamic range, and full integer quantization options with simple API calls. Float16 quantization reduces model size by half while maintaining GPU acceleration benefits.[&#91;44&#93;](#cite_note-tensorflow_quant-44)

**Full integer quantization converts weights and activations to 8-bit integers**, achieving maximum efficiency for Edge TPU, NNAPI, and mobile deployment. The toolkit's representative dataset concept enables static quantization calibration—users provide a data generator function that yields calibration samples, from which quantization parameters are derived.[&#91;24&#93;](#cite_note-google_ptq-24)

[TensorFlow Lite](/index.php?title=TensorFlow_Lite&action=edit&redlink=1) specializes in mobile and edge deployment, with quantization as a core optimization. The converter accepts trained SavedModel or Keras models, applying quantization through optimization flags. Models quantized through TensorFlow achieve 2-4× CPU speedup and 4× size reduction in typical computer vision applications, with even greater benefits on specialized accelerators.[&#91;24&#93;](#cite_note-google_ptq-24)

### ONNX Runtime

**[ONNX Runtime](/index.php?title=ONNX_Runtime&action=edit&redlink=1) bridges framework boundaries**, accepting models from PyTorch, TensorFlow, and other frameworks in the standardized ONNX format. Quantization support encompasses dynamic, static, and quantization-aware training with two representation formats. QOperator format represents quantization at the operator level, directly replacing floating-point operators with quantized equivalents. **QDQ (Quantize-DeQuantize) format** explicitly inserts quantization and dequantization nodes in the graph, providing finer granularity and better hardware portability.[&#91;45&#93;](#cite_note-onnx_quant-45)

ONNX Runtime's backend ecosystem enables deployment across diverse hardware. CPU execution through AVX2 and AVX-512 instructions on x86, ARM NEON on mobile processors, and GPU execution via TensorRT Execution Provider on NVIDIA GPUs. Integration with [Hugging Face](/wiki/hugging_face) Optimum provides seamless quantization of transformer models through unified APIs, with automatic backend selection based on target hardware.

### NVIDIA TensorRT

**NVIDIA TensorRT** provides production-grade inference optimization for NVIDIA GPUs, with quantization as a core capability. The framework supports INT8 and INT4 quantization through post-training and quantization-aware training workflows, with recent additions including FP8 and FP4 support via TensorRT Model Optimizer.[&#91;37&#93;](#cite_note-nvidia_tensorrt-37)

**Layer fusion combines operations like convolution, activation, and batch normalization into single optimized kernels**, reducing memory traffic and enabling better quantization by preserving higher precision in intermediate computations. Automatic mixed-precision selects optimal precision for each layer based on hardware capabilities and accuracy impact.

TensorRT's calibration system offers multiple algorithms: entropy calibration minimizing KL divergence between float32 and INT8 distributions, MinMax calibration using observed ranges, and percentile calibration excluding outliers. Performance benchmarks demonstrate TensorRT's optimization strength: 2× speedup for FP16 inference, up to 4× for INT8, and 1.95× for FP8 on Hopper architecture GPUs.

### Hugging Face Transformers

**[Hugging Face](/wiki/hugging_face) Transformers** has become the de facto standard for LLM deployment, with native quantization support for multiple methods. The BitsAndBytesConfig class enables 4-bit and 8-bit quantization through simple parameter specifications during model loading.[&#91;1&#93;](#cite_note-huggingface_quant-1)

**NormalFloat4 (NF4) quantization** provides information-theoretically optimal 4-bit representation for normally distributed weights, while double quantization reduces memory further by quantizing the quantization constants. On-the-fly quantization eliminates calibration requirements—models quantize during loading based on observed weight statistics.

GPTQConfig and AwqConfig provide interfaces to advanced post-training quantization methods. Pre-quantized models on Hugging Face Hub load directly with appropriate configuration objects, enabling immediate deployment without local quantization. [PEFT (Parameter-Efficient Fine-Tuning)](/wiki/lora) integration allows training LoRA adapters on quantized base models, with QLoRA specifically designed for 4-bit quantization.[&#91;19&#93;](#cite_note-dettmers2023-19)

### Intel Neural Compressor

**Intel Neural Compressor** distinguishes itself through accuracy-driven automatic tuning. Rather than applying fixed quantization strategies, the toolkit explores a search space of quantization configurations seeking to meet user-defined accuracy criteria. The framework supports INT8, FP8, INT4, FP4, and NF4 quantization across PyTorch, TensorFlow, and ONNX Runtime.[&#91;46&#93;](#cite_note-inc_docs-46)

**Advanced techniques include SmoothQuant for handling transformer outliers, GPTQ and AWQ integration for LLM weight quantization**, and mixed-precision strategies that assign different bit-widths to different layers based on sensitivity analysis. The accuracy tuning process iteratively evaluates quantization configurations, measuring accuracy on validation data and adjusting parameters to meet targets.

### Apple Core ML Tools

Apple's Core ML Tools provide linear quantization with 8-bit and 4-bit support, per-tensor, per-channel, and per-block granularity, and specialized algorithms like GPTQ integration for sequential models.[&#91;47&#93;](#cite_note-coreml_quant-47) **Per-block quantization** (iOS 18+, macOS 15+) proves particularly effective for 4-bit weights, with blocks of 16-64 values sharing quantization parameters.

The Neural Engine accelerates per-channel INT8 and FP16 operations, GPUs handle per-block quantization efficiently, and CPUs provide flexible support. Integration with PyTorch via coremltools.optimize.torch enables quantization during training, while coremltools.optimize.coreml optimizes already-converted Core ML models.

## Challenges and Research Directions

### Activation Outliers in Transformers

**Activation outliers in transformer models represent the most significant challenge for aggressive quantization.** Models exceeding 6.7 billion parameters develop extreme outlier channels with magnitude 100× larger than typical activations, concentrating in specific feature dimensions corresponding to residual stream layers (query-key-value projections, attention outputs).[&#91;17&#93;](#cite_note-dettmers2022-17) These structured outliers emerge early during pretraining and persist throughout model evolution, preventing accurate per-tensor quantization below 8 bits.

Mathematical analysis reveals that outliers increase Hessian values for corresponding weight channels, making these dimensions highly sensitive to quantization. Current solutions adopt multiple strategies:

- **SmoothQuant**: Migrates quantization difficulty from activations to weights through mathematically equivalent transformations[&#91;48&#93;](#cite_note-xiao2023-48)

- **Mixed-precision**: Preserves outlier channels at higher precision

- **Rotation-based methods**: Apply orthogonal transformations to eliminate outliers before quantization

Recent research introduces activation decomposition—QUAD separates activations into outlier-free components through singular value decomposition, quantizing most components aggressively while retaining critical outlier dimensions at full precision.[&#91;49&#93;](#cite_note-quad2024-49)

### Accuracy Degradation at Ultra-Low Precision

**Accuracy degradation below 4 bits presents fundamental challenges** distinct from outlier problems. Quantization to 3 bits and below causes systematic performance deterioration even with advanced methods. GPTQ 2-bit quantization of LLaMA-65B demonstrates the severity: LAMBADA accuracy collapses from 79% to 57%, and mathematical reasoning suffers 32.39% accuracy loss.[&#91;18&#93;](#cite_note-frantar2023-18)

The information-theoretic perspective illuminates the fundamental constraint: 2-bit quantization provides only 4 discrete levels per parameter, insufficient to represent the rich parameter distributions learned during training. **Quantization error variance increases as bit-width decreases**, with error accumulation across layers amplifying the degradation.

Recent innovations like VPTQ achieve 95% accuracy preservation at 2 bits through vector-wise quantization—grouping parameters into vectors and quantizing vectors jointly rather than independently, leveraging inter-parameter correlations to reduce error.[&#91;31&#93;](#cite_note-vptq2024-31)

### Training Instability in QAT

**Training instability during quantization-aware training** stems from weight oscillations between quantization grid points. During gradient descent updates, weights may cross quantization boundaries, causing sudden discrete changes in quantized values. This oscillation corrupts [batch normalization](/wiki/batch_normalization) statistics computed on quantized activations, leading to training divergence or degraded convergence.[&#91;26&#93;](#cite_note-nvidia_qat-26)

The underlying cause relates to the sharp loss landscape induced by quantization constraints. Small weight changes can cause large accuracy fluctuations when crossing quantization boundaries, creating a non-smooth optimization surface. Solutions include:

- **Oscillation dampening**: Gradually reducing learning rate for oscillating weights

- **Iterative weight freezing**: Permanently quantizing stable weights while allowing others to train

- **Hessian regularization**: Implicitly flattening the loss surface through feature distillation[&#91;12&#93;](#cite_note-nagel2021-12)

### Hardware Fragmentation

**Hardware fragmentation and lack of standardization** complicate practical deployment. INT4 and INT8 support varies across GPU architectures: NVIDIA Ampere provides fast INT4 Tensor Core operations, but newer Hopper and Blackwell architectures remove INT4 support in favor of FP4. CPU instruction set extensions differ across vendors: Intel provides VNNI for fast INT8 dot products, AMD offers similar capabilities through different instructions, and ARM varies by generation.[&#91;6&#93;](#cite_note-intel_distiller-6)

The absence of industry-wide quantization standards forces developers to maintain multiple quantized model versions for different deployment targets. Framework interoperability remains imperfect: PyTorch, TensorFlow, and ONNX use different quantization schemes, complicating model conversion.

Kernel optimization presents a hidden challenge. Standard deep learning frameworks lack specialized implementations for many quantization schemes, particularly exotic formats like 1-bit or mixed-precision. **BitNet models demonstrate this gap starkly: running through standard transformers can be slower than full-precision inference** despite theoretical 32× reduction in arithmetic complexity, because software falls back to inefficient dequantization before every operation.[&#91;21&#93;](#cite_note-ma2024-21)

## Future Directions

### Native Low-Bit Training

**Native low-bit training represents a fundamental paradigm shift** from post-training conversion to direct optimization at target precision. BitNet b1.58 demonstrated feasibility by training large language models from random initialization with ternary weights, achieving full-precision performance through architectural adaptations.[&#91;21&#93;](#cite_note-ma2024-21)

Future research directions include scaling native low-bit training beyond the 2-3 billion parameters demonstrated to date. The recently released BitNet b1.58 2B4T establishes that 1-bit architectures can match efficiency-focused full-precision models, but questions remain about whether 1-bit 70B or 405B parameter models will achieve competitive performance. **Training stability at scale proves challenging**—while 2B parameter models train reliably with ternary weights, preliminary results suggest larger models encounter optimization difficulties requiring algorithmic innovations.

### Rotation-Based Quantization

**Rotation-based quantization methods** apply mathematical transformations eliminating outliers through distributional reshaping rather than outlier preservation. QuaRot uses randomized Hadamard transformations exploiting rotational invariance—rotating weight matrices and activation distributions without changing computed outputs but redistributing outlier magnitude across channels.[&#91;50&#93;](#cite_note-ashkboos2024-50)

SpinQuant extends this concept with learned rotations optimized during fine-tuning to minimize quantization error. **DuQuant combines rotation with zigzag permutation**, redistributing outliers across the feature dimension to balance quantization difficulty.[&#91;51&#93;](#cite_note-duquant2024-51)

These approaches enable 4-bit quantization of weights, activations, and KV cache simultaneously—previously unattainable due to activation outliers. The mathematical insight recognizes that matrix multiplication Y = XW is invariant to orthogonal rotation: 
  
    
      
        Y
        =
        (
        X
        R
        )
        (
        
          R
          
            T
          
        
        W
        )
      
    
    {\displaystyle Y=(XR)(R^{T}W)}
  
![{\displaystyle Y=(XR)(R^{T}W)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6e2c03e5e517a07740620d19e63d695d7d404df0) for any orthogonal matrix R.

### Hardware Co-Design

**Hardware co-design recognizes that optimal quantization depends intimately on underlying compute architecture.** Lookup table-based computation replaces multiplication with memory access, trading arithmetic for memory bandwidth. T-MAC implements mixed-precision matrix multiplication through bit-wise table lookups, precomputing partial products offline and combining them during inference.[&#91;52&#93;](#cite_note-tmac2024-52)

**For low-bit quantization, T-MAC achieves 48 tokens/second for 3B BitNet models on Snapdragon X Elite** (4-5× faster than llama.cpp) and 11 tokens/second on Raspberry Pi 5, demonstrating practical edge deployment. LUT Tensor Cores proposed by Microsoft Research provide specialized hardware for table lookup computation, achieving 20.9× computational density and 11.2× energy efficiency compared to traditional Tensor Cores.[&#91;53&#93;](#cite_note-lut_cores2024-53)

### Automated Mixed-Precision Search

**Automated mixed-precision search** using neural architecture search techniques will determine optimal bit-width allocation per layer. Current mixed-precision approaches rely on heuristics: quantize all layers uniformly then selectively increase precision for sensitive layers, or use Hessian approximations to identify importance. Future methods will jointly optimize architecture and quantization, treating bit-width as a differentiable parameter optimized during training.[&#91;54&#93;](#cite_note-wang2019-54)

The search space extends beyond per-layer decisions to fine-grained choices: different bit-widths for weights versus activations, separate precision for attention queries/keys/values, dynamic precision adjusting based on input characteristics, and temporal precision varying across generation steps for autoregressive models.

### Safety and Alignment Preservation

**Safety and alignment preservation** during quantization represents an emerging concern as models deploy broadly. Recent research demonstrates that quantization correlates with increased safety risks—quantized models generate more harmful outputs than full-precision counterparts when tested on adversarial prompts.[&#91;55&#93;](#cite_note-yuan2024-55)

The theoretical question of whether alignment and capability exhibit different sensitivity to quantization requires investigation. If safety behaviors concentrate in specific model components, selective quantization could preserve alignment while compressing capabilities. Alternatively, post-quantization safety fine-tuning might restore alignment properties lost during quantization.

## See Also

- [Model compression](/index.php?title=Model_compression&action=edit&redlink=1)

- [Neural Network Pruning](/index.php?title=Pruning_(artificial_intelligence)&action=edit&redlink=1)

- [Knowledge distillation](/wiki/knowledge_distillation)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)

- [Edge AI](/index.php?title=Edge_AI&action=edit&redlink=1)

- [TinyML](/index.php?title=TinyML&action=edit&redlink=1)

- [Floating-point arithmetic](/index.php?title=Floating-point_arithmetic&action=edit&redlink=1)

- [Fixed-point arithmetic](/index.php?title=Fixed-point_arithmetic&action=edit&redlink=1)

- [Neural Processing Unit](/index.php?title=Neural_Processing_Unit&action=edit&redlink=1)

- [Tensor Processing Unit](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1)

- [Binary neural network](/index.php?title=Binary_neural_network&action=edit&redlink=1)

- [Low-rank adaptation](/wiki/low-rank_adaptation)

- [Model optimization](/index.php?title=Model_optimization&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-huggingface_quant_1-0) [1.1](#cite_ref-huggingface_quant_1-1) [1.2](#cite_ref-huggingface_quant_1-2) [1.3](#cite_ref-huggingface_quant_1-3) [1.4](#cite_ref-huggingface_quant_1-4) [1.5](#cite_ref-huggingface_quant_1-5) [https://huggingface.co/docs/optimum/en/concept_guides/quantization](https://huggingface.co/docs/optimum/en/concept_guides/quantization) - Hugging Face Optimum Documentation: Quantization

2. ↑ [2.0](#cite_ref-ibm_quant_2-0) [2.1](#cite_ref-ibm_quant_2-1) [2.2](#cite_ref-ibm_quant_2-2) [2.3](#cite_ref-ibm_quant_2-3) [https://www.ibm.com/think/topics/quantization](https://www.ibm.com/think/topics/quantization) - IBM: What is Quantization?

3. [↑](#cite_ref-cloudflare_quant_3-0) [https://www.cloudflare.com/learning/ai/what-is-quantization/](https://www.cloudflare.com/learning/ai/what-is-quantization/) - Cloudflare: What is Quantization in Machine Learning?

4. [↑](#cite_ref-rinf_quant_4-0) [https://www.rinf.tech/5-reasons-why-machine-learning-quantization-is-important-for-ai-projects/](https://www.rinf.tech/5-reasons-why-machine-learning-quantization-is-important-for-ai-projects/) - Rinf.tech: 5 Reasons Why Machine Learning Quantization is Important for AI Projects

5. [↑](#cite_ref-mathworks_quant_5-0) [https://www.mathworks.com/discovery/quantization.html](https://www.mathworks.com/discovery/quantization.html) - MathWorks: What Is Quantization?

6. ↑ [6.0](#cite_ref-intel_distiller_6-0) [6.1](#cite_ref-intel_distiller_6-1) [6.2](#cite_ref-intel_distiller_6-2) [6.3](#cite_ref-intel_distiller_6-3) [6.4](#cite_ref-intel_distiller_6-4) [6.5](#cite_ref-intel_distiller_6-5) [6.6](#cite_ref-intel_distiller_6-6) [6.7](#cite_ref-intel_distiller_6-7) [https://intellabs.github.io/distiller/quantization.html](https://intellabs.github.io/distiller/quantization.html) - Intel Neural Network Distiller: Quantization Guide

7. ↑ [7.0](#cite_ref-jacob2018_7-0) [7.1](#cite_ref-jacob2018_7-1) [https://openaccess.thecvf.com/content_cvpr_2018/papers/Jacob_Quantization_and_Training_CVPR_2018_paper.pdf](https://openaccess.thecvf.com/content_cvpr_2018/papers/Jacob_Quantization_and_Training_CVPR_2018_paper.pdf) - Jacob et al. (2018): Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference

8. ↑ [8.0](#cite_ref-geeksforgeeks_quant_8-0) [8.1](#cite_ref-geeksforgeeks_quant_8-1) [https://www.geeksforgeeks.org/deep-learning/quantization-in-deep-learning/](https://www.geeksforgeeks.org/deep-learning/quantization-in-deep-learning/) - GeeksforGeeks: Quantization in Deep Learning

9. ↑ [9.0](#cite_ref-pytorch_quant_9-0) [9.1](#cite_ref-pytorch_quant_9-1) [https://pytorch.org/blog/quantization-in-practice/](https://pytorch.org/blog/quantization-in-practice/) - PyTorch Blog: Quantization in Practice

10. ↑ [10.0](#cite_ref-wandb_qat_10-0) [10.1](#cite_ref-wandb_qat_10-1) [10.2](#cite_ref-wandb_qat_10-2) [https://wandb.ai/byyoung3/Generative-AI/reports/Quantization-Aware-Training-QAT-A-step-by-step-guide-with-PyTorch--VmlldzoxMTk2NTY2Mw](https://wandb.ai/byyoung3/Generative-AI/reports/Quantization-Aware-Training-QAT-A-step-by-step-guide-with-PyTorch--VmlldzoxMTk2NTY2Mw) - Weights & Biases: Quantization-Aware Training (QAT)

11. ↑ [11.0](#cite_ref-static_quant_medium_11-0) [11.1](#cite_ref-static_quant_medium_11-1) [https://medium.com/@isanghao/static-quantization-and-requantization-for-ai-inference-optimization-f1a683ed5124](https://medium.com/@isanghao/static-quantization-and-requantization-for-ai-inference-optimization-f1a683ed5124) - Static Quantization and Requantization for AI Inference Optimization

12. ↑ [12.0](#cite_ref-nagel2021_12-0) [12.1](#cite_ref-nagel2021_12-1) [12.2](#cite_ref-nagel2021_12-2) [12.3](#cite_ref-nagel2021_12-3) [12.4](#cite_ref-nagel2021_12-4) [https://arxiv.org/pdf/2106.08295.pdf](https://arxiv.org/pdf/2106.08295.pdf) - Nagel et al. (2021): A White Paper on Neural Network Quantization

13. ↑ [13.0](#cite_ref-gupta2015_13-0) [13.1](#cite_ref-gupta2015_13-1) [https://arxiv.org/abs/1502.02551](https://arxiv.org/abs/1502.02551) - Gupta et al. (2015): Deep Learning with Limited Numerical Precision

14. ↑ [14.0](#cite_ref-courbariaux2016_14-0) [14.1](#cite_ref-courbariaux2016_14-1) [https://arxiv.org/abs/1602.02830](https://arxiv.org/abs/1602.02830) - Courbariaux et al. (2016): BinaryNet: Training Deep Neural Networks with Weights and Activations Constrained to +1 or -1

15. ↑ [15.0](#cite_ref-han2015_15-0) [15.1](#cite_ref-han2015_15-1) [https://arxiv.org/abs/1510.00149](https://arxiv.org/abs/1510.00149) - Han et al. (2015): Deep Compression: Compressing Deep Neural Networks with Pruning, Trained Quantization and Huffman Coding

16. [↑](#cite_ref-gholami2021_16-0) [https://arxiv.org/abs/2103.13630](https://arxiv.org/abs/2103.13630) - Gholami et al. (2021): A Survey of Quantization Methods for Efficient Neural Network Inference

17. ↑ [17.0](#cite_ref-dettmers2022_17-0) [17.1](#cite_ref-dettmers2022_17-1) [https://arxiv.org/abs/2208.07339](https://arxiv.org/abs/2208.07339) - Dettmers et al. (2022): LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale

18. ↑ [18.0](#cite_ref-frantar2023_18-0) [18.1](#cite_ref-frantar2023_18-1) [18.2](#cite_ref-frantar2023_18-2) [18.3](#cite_ref-frantar2023_18-3) [18.4](#cite_ref-frantar2023_18-4) [https://arxiv.org/abs/2210.17323](https://arxiv.org/abs/2210.17323) - Frantar et al. (2023): GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers

19. ↑ [19.0](#cite_ref-dettmers2023_19-0) [19.1](#cite_ref-dettmers2023_19-1) [https://arxiv.org/abs/2305.14314](https://arxiv.org/abs/2305.14314) - Dettmers et al. (2023): QLoRA: Efficient Finetuning of Quantized LLMs

20. ↑ [20.0](#cite_ref-lin2023_20-0) [20.1](#cite_ref-lin2023_20-1) [https://arxiv.org/abs/2306.00978](https://arxiv.org/abs/2306.00978) - Lin et al. (2023): AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration

21. ↑ [21.0](#cite_ref-ma2024_21-0) [21.1](#cite_ref-ma2024_21-1) [21.2](#cite_ref-ma2024_21-2) [21.3](#cite_ref-ma2024_21-3) [21.4](#cite_ref-ma2024_21-4) [https://arxiv.org/abs/2402.17764](https://arxiv.org/abs/2402.17764) - Ma et al. (2024): The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits

22. [↑](#cite_ref-mdpi_survey_22-0) [https://www.mdpi.com/2076-3417/14/17/7445](https://www.mdpi.com/2076-3417/14/17/7445) - Applied Sciences (2024): A Survey of Quantization Methods for Efficient Neural Network Inference

23. ↑ [23.0](#cite_ref-selek_static_dynamic_23-0) [23.1](#cite_ref-selek_static_dynamic_23-1) [https://selek.tech/posts/static-vs-dynamic-quantization-in-machine-learning/](https://selek.tech/posts/static-vs-dynamic-quantization-in-machine-learning/) - Selek: Static vs Dynamic Quantization in Machine Learning

24. ↑ [24.0](#cite_ref-google_ptq_24-0) [24.1](#cite_ref-google_ptq_24-1) [24.2](#cite_ref-google_ptq_24-2) [https://ai.google.dev/edge/litert/models/post_training_quantization](https://ai.google.dev/edge/litert/models/post_training_quantization) - Google AI: Post-training quantization (TensorFlow Lite Guide)

25. ↑ [25.0](#cite_ref-ibm_qat_25-0) [25.1](#cite_ref-ibm_qat_25-1) [https://www.ibm.com/think/topics/quantization-aware-training](https://www.ibm.com/think/topics/quantization-aware-training) - IBM: What is Quantization-Aware Training?

26. ↑ [26.0](#cite_ref-nvidia_qat_26-0) [26.1](#cite_ref-nvidia_qat_26-1) [26.2](#cite_ref-nvidia_qat_26-2) [26.3](#cite_ref-nvidia_qat_26-3) [26.4](#cite_ref-nvidia_qat_26-4) [https://developer.nvidia.com/blog/how-quantization-aware-training-enables-low-precision-accuracy-recovery/](https://developer.nvidia.com/blog/how-quantization-aware-training-enables-low-precision-accuracy-recovery/) - NVIDIA: How Quantization-Aware Training Enables Low-Precision Accuracy Recovery

27. [↑](#cite_ref-yin2019_27-0) [https://arxiv.org/abs/1903.05662](https://arxiv.org/abs/1903.05662) - Yin et al. (2019): Understanding Straight-Through Estimator in Training Activation Quantized Neural Nets

28. ↑ [28.0](#cite_ref-clarifai_quant_28-0) [28.1](#cite_ref-clarifai_quant_28-1) [https://www.clarifai.com/blog/model-quantization](https://www.clarifai.com/blog/model-quantization) - Clarifai: What is Model Quantization?

29. ↑ [29.0](#cite_ref-analytixlabs_quant_29-0) [29.1](#cite_ref-analytixlabs_quant_29-1) [https://www.analytixlabs.co.in/blog/model-quantization-for-neural-networks/](https://www.analytixlabs.co.in/blog/model-quantization-for-neural-networks/) - AnalytixLabs: Model Quantization for Neural Networks

30. [↑](#cite_ref-medoid_quant_30-0) [https://www.medoid.ai/blog/a-hands-on-walkthrough-on-model-quantization/](https://www.medoid.ai/blog/a-hands-on-walkthrough-on-model-quantization/) - Medoid AI: A Hands-on Walkthrough on Model Quantization

31. ↑ [31.0](#cite_ref-vptq2024_31-0) [31.1](#cite_ref-vptq2024_31-1) [https://arxiv.org/abs/2409.17066](https://arxiv.org/abs/2409.17066) - VPTQ: Extreme Low-bit Vector Post-Training Quantization for Large Language Models

32. ↑ [32.0](#cite_ref-bitnet_cpp_32-0) [32.1](#cite_ref-bitnet_cpp_32-1) [32.2](#cite_ref-bitnet_cpp_32-2) [https://github.com/microsoft/BitNet](https://github.com/microsoft/BitNet) - Microsoft BitNet: Official 1-bit LLM Framework

33. [↑](#cite_ref-zhu2017_33-0) [https://openreview.net/pdf?id=S1_pAu9xl](https://openreview.net/pdf?id=S1_pAu9xl) - Zhu et al. (2017): Trained Ternary Quantization

34. [↑](#cite_ref-nvidia_fp8_34-0) [https://developer.nvidia.com/blog/nvidia-arm-and-intel-publish-fp8-specification-for-standardization-as-an-interchange-format-for-ai/](https://developer.nvidia.com/blog/nvidia-arm-and-intel-publish-fp8-specification-for-standardization-as-an-interchange-format-for-ai/) - NVIDIA FP8 Formats for Deep Learning

35. [↑](#cite_ref-liu2021_35-0) [https://arxiv.org/abs/2106.08295](https://arxiv.org/abs/2106.08295) - Liu et al. (2021): Post-Training Quantization for Vision Transformer

36. [↑](#cite_ref-gguf_spec_36-0) [https://github.com/ggerganov/ggml/blob/master/docs/gguf.md](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) - GGUF Format Specification

37. ↑ [37.0](#cite_ref-nvidia_tensorrt_37-0) [37.1](#cite_ref-nvidia_tensorrt_37-1) [37.2](#cite_ref-nvidia_tensorrt_37-2) [https://developer.nvidia.com/tensorrt](https://developer.nvidia.com/tensorrt) - NVIDIA TensorRT

38. ↑ [38.0](#cite_ref-redhat_quant_38-0) [38.1](#cite_ref-redhat_quant_38-1) [https://www.redhat.com/en/blog/quantizing-large-language-models](https://www.redhat.com/en/blog/quantizing-large-language-models) - Red Hat: Quantizing Large Language Models

39. [↑](#cite_ref-edge_case_study_39-0) [https://www.Manufacturing.net/operations/article/22875686/ai-at-the-edge-real-benefits-or-more-hype](https://www.Manufacturing.net/operations/article/22875686/ai-at-the-edge-real-benefits-or-more-hype) - Edge AI Manufacturing Case Study

40. [↑](#cite_ref-yolo_quant_40-0) [https://docs.ultralytics.com/guides/model-optimization/](https://docs.ultralytics.com/guides/model-optimization/) - Ultralytics YOLO Quantization Guide

41. [↑](#cite_ref-zafrir2019_41-0) [https://arxiv.org/abs/1910.06188](https://arxiv.org/abs/1910.06188) - Zafrir et al. (2019): Q8BERT: Quantized 8Bit BERT

42. [↑](#cite_ref-li2023_42-0) [https://arxiv.org/abs/2305.18723](https://arxiv.org/abs/2305.18723) - Li et al. (2023): Q-Diffusion: Quantizing Diffusion Models

43. [↑](#cite_ref-jetson_quant_43-0) [https://developer.nvidia.com/embedded/jetson-ai-certification](https://developer.nvidia.com/embedded/jetson-ai-certification) - NVIDIA Jetson AI Quantization

44. [↑](#cite_ref-tensorflow_quant_44-0) [https://www.tensorflow.org/model_optimization/guide/quantization/training](https://www.tensorflow.org/model_optimization/guide/quantization/training) - TensorFlow: Quantization-Aware Training

45. [↑](#cite_ref-onnx_quant_45-0) [https://onnxruntime.ai/docs/performance/model-optimizations/quantization.html](https://onnxruntime.ai/docs/performance/model-optimizations/quantization.html) - ONNX Runtime: Quantization

46. [↑](#cite_ref-inc_docs_46-0) [https://github.com/intel/neural-compressor](https://github.com/intel/neural-compressor) - Intel Neural Compressor Documentation

47. [↑](#cite_ref-coreml_quant_47-0) [https://apple.github.io/coremltools/docs-guides/source/opt-quantization.html](https://apple.github.io/coremltools/docs-guides/source/opt-quantization.html) - Core ML Tools: Quantization

48. [↑](#cite_ref-xiao2023_48-0) [https://arxiv.org/abs/2211.10438](https://arxiv.org/abs/2211.10438) - Xiao et al. (2023): SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models

49. [↑](#cite_ref-quad2024_49-0) [https://arxiv.org/abs/2403.04652](https://arxiv.org/abs/2403.04652) - QUAD: Post-Training Quantization of Large Language Models via Quadratic Decomposition

50. [↑](#cite_ref-ashkboos2024_50-0) [https://arxiv.org/abs/2404.00456](https://arxiv.org/abs/2404.00456) - Ashkboos et al. (2024): QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs

51. [↑](#cite_ref-duquant2024_51-0) [https://arxiv.org/abs/2406.03721](https://arxiv.org/abs/2406.03721) - DuQuant: Distributing Outliers via Dual Transformation Makes Stronger Quantized LLMs

52. [↑](#cite_ref-tmac2024_52-0) [https://arxiv.org/abs/2407.00088](https://arxiv.org/abs/2407.00088) - T-MAC: CPU Renaissance via Table Lookup for Low-Bit LLM Deployment on Edge

53. [↑](#cite_ref-lut_cores2024_53-0) [https://arxiv.org/abs/2411.17153](https://arxiv.org/abs/2411.17153) - LUT Tensor Core: Lookup Table Enables Efficient Low-Bit LLM Inference Acceleration

54. [↑](#cite_ref-wang2019_54-0) [https://arxiv.org/abs/1811.08886](https://arxiv.org/abs/1811.08886) - Wang et al. (2019): HAQ: Hardware-Aware Automated Quantization with Mixed Precision

55. [↑](#cite_ref-yuan2024_55-0) [https://arxiv.org/abs/2406.07015](https://arxiv.org/abs/2406.07015) - Yuan et al. (2024): How Does Quantization Affect Multilingual LLMs?