---
title: "Inference"
slug: "inference"
categories:
  - "Pages_with_reference_errors"
---[Template:Infobox AI term](/index.php?title=Template:Infobox_AI_term&action=edit&redlink=1)

In the field of [artificial intelligence](/wiki/artificial_intelligence) (AI), **inference** refers to the process of using a trained [neural network](/wiki/neural_network) model to make a prediction or draw a conclusion from new, previously unseen data.[&#91;1&#93;](#cite_note-[1]-1)[&#91;2&#93;](#cite_note-[2]-2) It is the operational or "doing" phase of the AI lifecycle, where the model applies the knowledge and patterns it learned during [AI training](/index.php?title=AI_training&action=edit&redlink=1) to produce real-world results.[&#91;3&#93;](#cite_note-[3]-3) If training is analogous to teaching an AI a new skill, inference is the AI actually using that skill to perform a task.[&#91;1&#93;](#cite_note-[1]-1) This process is fundamental to nearly all practical applications of AI, from identifying objects in photos and translating languages to powering [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1) systems.[&#91;4&#93;](#cite_note-[4]-4)

Inference is distinct from the training phase, which is a computationally intensive process focused on building an accurate model. While training represents a one-time computational investment, inference runs continuously, driving 80-90% of AI's operational costs and lifetime value.[&#91;5&#93;](#cite_note-nvidia-cost-5) Individual inference operations are typically much faster than training, but they must often be executed at massive scale and with very low [latency](/index.php?title=Latency&action=edit&redlink=1) to be useful in real-time applications.[&#91;3&#93;](#cite_note-[3]-3) The efficiency and performance of the inference process are critical for the successful deployment of AI systems, driving a vast field of optimization in both software and hardware.

## History

The concept of inference in AI traces its roots to early efforts in formal reasoning and symbolic manipulation. Philosophers like Aristotle developed syllogistic logic, while later thinkers such as Ramon Llull (1232–1315) and Gottfried Leibniz envisioned mechanical systems for logical deduction.[&#91;6&#93;](#cite_note-wiki_ai_history-6) In the 20th century, breakthroughs in mathematical logic by figures like Alan Turing, Kurt Gödel, and Alonzo Church laid the groundwork for mechanized reasoning, culminating in the Church-Turing thesis, which suggested that any mathematical deduction could be performed by a machine.[&#91;6&#93;](#cite_note-wiki_ai_history-6)

Modern AI inference began in the 1950s with symbolic AI. The Logic Theorist, developed by [Allen Newell](/index.php?title=Allen_Newell&action=edit&redlink=1) and [Herbert A. Simon](/index.php?title=Herbert_A._Simon&action=edit&redlink=1) in 1955, was one of the first programs to perform automated theorem proving, using heuristic search to infer proofs from axioms.[&#91;6&#93;](#cite_note-wiki_ai_history-6)[&#91;7&#93;](#cite_note-ibm_history-7) Presented at the 1956 Dartmouth Workshop—the birthplace of AI—this program demonstrated inference through step-by-step deduction, proving 38 theorems from Russell and Whitehead's *Principia Mathematica*.[&#91;6&#93;](#cite_note-wiki_ai_history-6)

In the 1960s, inference expanded with neural networks. Walter Pitts and Warren McCulloch's 1943 model of artificial neurons influenced early work, but Frank Rosenblatt's Perceptron (1958) introduced pattern-based inference for classification tasks.[&#91;6&#93;](#cite_note-wiki_ai_history-6) Systems like ADALINE (1960) and MADALINE (1962) by Bernard Widrow advanced adaptive inference.[&#91;6&#93;](#cite_note-wiki_ai_history-6) However, Marvin Minsky and Seymour Papert's 1969 book *Perceptrons* highlighted limitations, leading to a decline in neural network funding during the first [AI winter](/index.php?title=AI_winter&action=edit&redlink=1).[&#91;6&#93;](#cite_note-wiki_ai_history-6)

The 1970s saw the rise of [expert systems](/index.php?title=Expert_system&action=edit&redlink=1), where an [inference engine](/index.php?title=Inference_engine&action=edit&redlink=1) applied rules to a [knowledge base](/index.php?title=Knowledge_base&action=edit&redlink=1) for domain-specific reasoning.[&#91;8&#93;](#cite_note-wiki_inf_engine-8) DENDRAL (1965–1983), developed at Stanford, was the first expert system, using inference to analyze mass spectrometry data for organic chemistry.[&#91;7&#93;](#cite_note-ibm_history-7)[&#91;9&#93;](#cite_note-forbes_expert-9) MYCIN (1972), another Stanford project, inferred bacterial infection diagnoses using backward chaining.[&#91;10&#93;](#cite_note-ahistory_expert-10)[&#91;11&#93;](#cite_note-wiki_expert-11) [Edward Feigenbaum](/index.php?title=Edward_Feigenbaum&action=edit&redlink=1) championed expert systems, emphasizing knowledge engineering.[&#91;12&#93;](#cite_note-hpe_history-12)

The 1980s brought commercial expert systems, with inference engines like EMYCIN (from MYCIN) enabling reusable frameworks.[&#91;8&#93;](#cite_note-wiki_inf_engine-8) Systems such as XCON (for [Digital Equipment Corporation](/index.php?title=Digital_Equipment_Corporation&action=edit&redlink=1)) used forward chaining for configuration tasks.[&#91;13&#93;](#cite_note-medium_expert-13) However, maintenance challenges and the "knowledge acquisition bottleneck" led to their decline by the late 1980s.[&#91;14&#93;](#cite_note-retro_expert-14)

Neural networks revived in the 1980s with [backpropagation](/wiki/backpropagation), popularized by [Geoffrey Hinton](/index.php?title=Geoffrey_Hinton&action=edit&redlink=1) and David Rumelhart in 1986, enabling multi-layer networks for more complex inference.[&#91;6&#93;](#cite_note-wiki_ai_history-6) [Yann LeCun](/index.php?title=Yann_LeCun&action=edit&redlink=1)'s [convolutional neural networks](/wiki/convolutional_neural_network) (1990) applied inference to handwriting recognition.[&#91;6&#93;](#cite_note-wiki_ai_history-6)

The 2010s marked the era of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) inference, fueled by [big data](/index.php?title=Big_data&action=edit&redlink=1) and [GPUs](/index.php?title=GPU_computing&action=edit&redlink=1). AlexNet (2012) demonstrated superior image inference.[&#91;6&#93;](#cite_note-wiki_ai_history-6) The [Transformer](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1) architecture (2017) revolutionized [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) inference.[&#91;6&#93;](#cite_note-wiki_ai_history-6) Models like [GPT-3](/wiki/gpt-3) (2020) and [ChatGPT](/wiki/chatgpt) (2022) showcased generative inference, while [OpenAI](/wiki/openai)'s o1 (2024) advanced reasoning inference.[&#91;6&#93;](#cite_note-wiki_ai_history-6)

## Definition and Role in the AI Lifecycle

Inference is the execution phase in the lifecycle of an AI model, where it moves from a state of learning to a state of practical application. It is the point at which a model, having been trained on a large dataset to recognize patterns and relationships, is deployed to draw conclusions from new information it has not previously encountered.[&#91;4&#93;](#cite_note-[4]-4)[&#91;15&#93;](#cite_note-[5]-15) This capability to generalize from training data to new inputs is the core function of inference and is where AI delivers its primary business value.[&#91;3&#93;](#cite_note-[3]-3)

The entire process of bringing an AI model into production involves several key stages, with inference being the final operational step. A typical workflow includes preparing data, selecting and training a model, monitoring its outputs for accuracy and bias, and finally deploying it for inference.[&#91;4&#93;](#cite_note-[4]-4) This deployment is often managed through a process called [AI serving](/index.php?title=AI_serving&action=edit&redlink=1), which involves packaging the model and exposing it via an [API](/index.php?title=API&action=edit&redlink=1) to handle live requests.[&#91;3&#93;](#cite_note-[3]-3)

### Distinction from Training, Fine-Tuning, and Serving

Understanding the role of inference requires distinguishing it from other critical stages in the AI model lifecycle: AI training, [fine-tuning](/index.php?title=Fine-tuning&action=edit&redlink=1), and AI serving. Each stage has a different objective, process, data requirement, and business focus.[&#91;3&#93;](#cite_note-[3]-3)

- **AI Training** is the foundational learning phase. It is a highly resource-intensive process where a model is built from scratch by iteratively analyzing a massive, historical dataset to learn patterns. The primary goal of training is to create a model that is accurate and capable. This phase can take anywhere from hours to weeks and requires powerful hardware accelerators like [GPUs](/index.php?title=Graphics_processing_unit&action=edit&redlink=1).[&#91;3&#93;](#cite_note-[3]-3)

- **AI Fine-Tuning** is an optimization of the training process. Instead of building a model from scratch, it takes a powerful, pre-trained model and adapts it for a more specific task. This is achieved by continuing the training process on a smaller, specialized dataset. Fine-tuning saves significant time, computational resources, and cost compared to full training.[&#91;3&#93;](#cite_note-[3]-3)

- **AI Inference** is the execution phase. It uses the fully trained and fine-tuned model to make fast predictions on new, "unseen" data. Each individual prediction is far less computationally demanding than a training iteration, but delivering millions of predictions in real-time requires a highly optimized and scalable infrastructure. The business focus shifts from model accuracy to operational metrics like speed (latency), scale, and cost-efficiency.[&#91;3&#93;](#cite_note-[3]-3)

- **AI Serving** is the operational infrastructure that makes inference possible at scale. It involves deploying and managing the model, typically by packaging it, setting up an API endpoint, and managing the underlying infrastructure to handle incoming requests reliably and efficiently.[&#91;3&#93;](#cite_note-[3]-3)

The fundamental dichotomy between the computational profiles of training and inference is a primary driver for nearly all specialized fields related to AI deployment. Training is a large-scale, offline, parallel process optimized for throughput over long periods, whereas inference is often an online, real-time process optimized for the lowest possible latency on a single input. This difference in objectives necessitates entirely different approaches to hardware and software. The need for low-latency inference, for example, has directly led to the development of specialized hardware and [ASICs](/index.php?title=ASIC&action=edit&redlink=1) like [TPUs](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1), which are designed to accelerate the specific mathematical operations used in a forward pass. Similarly, the need to deploy models on resource-constrained [edge devices](/index.php?title=Edge_computing&action=edit&redlink=1) has spurred the creation of model compression techniques like quantization and pruning, which are applied post-training to create a smaller, faster model suitable for an efficient inference environment. This distinction is not merely definitional; it is the root cause that gives rise to the entire ecosystem of technologies and practices surrounding AI deployment, including the field of [MLOps](/index.php?title=MLOps&action=edit&redlink=1).

| Stage | Objective | Process | Data | Business Focus |
| --- | --- | --- | --- | --- |
| [Training](/index.php?title=AI_training&action=edit&redlink=1) | Build a new model from scratch. | Iteratively learns from a large dataset. | Large, historical, labeled datasets. | Model accuracy and capability. |
| [Fine-Tuning](/index.php?title=Fine-tuning_(machine_learning)&action=edit&redlink=1) | Adapt a pre-trained model for a specific task. | Refines an existing model with a smaller dataset. | Smaller, task-specific datasets. | Efficiency and customization. |
| Inference | Use a trained model to make predictions. | A single, fast "forward pass" of new data. | Live, real-world, unlabeled data. | Speed (latency), scale, and cost-efficiency. |
| [Serving](/index.php?title=AI_serving&action=edit&redlink=1) | Deploy and manage the model to handle inference requests. | Package the model and expose it as an API. | N/A | Reliability, scalability, and manageability. |

## The Mechanics of Inference

At a technical level, inference in [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) models is executed through a process known as **[forward propagation](/index.php?title=Forward_propagation&action=edit&redlink=1)** or a **forward pass**.[&#91;16&#93;](#cite_note-[6]-16) This is the mechanism by which a [neural network](/wiki/neural_network) takes an input and processes it through its layers to produce an output.[&#91;17&#93;](#cite_note-[7]-17) During inference, the model's learned parameters—its weights and biases—are frozen. The forward pass is therefore a "read-only" operation where the model applies its fixed knowledge without any learning or parameter updates occurring.[&#91;3&#93;](#cite_note-[3]-3) This is in direct contrast to the training process, which involves both a forward pass to generate a prediction and a backward pass ([backpropagation](/wiki/backpropagation)) to calculate the error and update the model's weights.[&#91;17&#93;](#cite_note-[7]-17)

The sequential and computationally deterministic nature of the forward pass is what makes inference a prime target for optimization. Because the sequence of mathematical operations is fixed once a model is trained, it becomes a predictable computational graph. This predictability allows for the creation of highly specialized compilers and runtimes, such as [NVIDIA TensorRT](/index.php?title=NVIDIA_TensorRT&action=edit&redlink=1), which can analyze this graph and apply optimizations like fusing multiple layers into a single operation, selecting the most efficient mathematical kernels for the target hardware, and converting model weights to lower-precision formats.[&#91;18&#93;](#cite_note-[8]-18) Furthermore, while the layers are processed sequentially, the computations within each layer, such as matrix multiplications, are massively parallel. This inherent parallelism is why hardware like GPUs, with their thousands of cores, are exceptionally well-suited for accelerating inference workloads.[&#91;19&#93;](#cite_note-[9]-19) The efficiency of modern AI inference is therefore a result of co-designing software and hardware to perfectly execute this fixed, parallelizable sequence of operations defined by the forward pass.

### Step-by-Step Breakdown

The inference process can be broken down into three main steps:[&#91;3&#93;](#cite_note-[3]-3)

1. **Input Data Preparation**: Before a model can process new data, that data must be converted into a format it understands. This preprocessing step ensures the input matches the format the model was trained on. For an image classification model, this might involve resizing an image to specific dimensions (for example 224x224 pixels) and normalizing its pixel values.[&#91;3&#93;](#cite_note-[3]-3) For a [Large Language Model](/index.php?title=Large_Language_Model&action=edit&redlink=1) (LLM), this involves [tokenization](/index.php?title=Tokenization&action=edit&redlink=1), where a text prompt is broken down into a sequence of numerical tokens that the model can interpret.[&#91;2&#93;](#cite_note-[2]-2)

2. **Model Execution (Forward Pass)**: The preprocessed input data is fed into the first layer of the neural network. The data then flows sequentially through each subsequent layer.
- At each neuron in a layer, a linear operation is performed: a weighted sum of the inputs from the previous layer is calculated, and a bias term is added. This result is often called the "pre-activation" or "logit".[&#91;17&#93;](#cite_note-[7]-17)

- This linear result is then passed through a non-linear [activation function](/wiki/activation_function) (such as [ReLU](/wiki/relu), [Sigmoid](/wiki/sigmoid_function), or [tanh](/index.php?title=Tanh&action=edit&redlink=1)). This non-linearity is crucial, as it allows the network to learn and represent complex, non-linear patterns in the data.[&#91;17&#93;](#cite_note-[7]-17)[&#91;20&#93;](#cite_note-[10]-20)

- The output of the activation function in one layer becomes the input for the next layer, and this process continues until the data reaches the final layer of the network.[&#91;21&#93;](#cite_note-[11]-21)

3. **Output Generation**: The final layer of the network produces the model's output. The form of this output depends on the task. For a classification task, a [Softmax](/index.php?title=Softmax_function&action=edit&redlink=1) activation function is often used in the final layer to convert the logits into a probability distribution across all possible classes.[&#91;22&#93;](#cite_note-[12]-22) For example, an image classifier might output a probability score, such as a 95% chance that an image contains a "dog".[&#91;3&#93;](#cite_note-[3]-3) For a generative model, the output might be the next token in a sentence or a newly generated image. This final result is then sent to the end-user application.[&#91;2&#93;](#cite_note-[2]-2)

There are three primary modes for serving inference requests:

- **Real-time (Online) Inference**: Processes individual requests as they arrive, providing an immediate response, often within milliseconds. This is essential for interactive applications like chatbots, recommendation engines, and fraud detection systems.[&#91;3&#93;](#cite_note-[3]-3)

- **Batch (Offline) Inference**: Processes a large volume of data all at once when immediate responses are not required. This method is more cost-effective and is used for tasks like periodic data analysis, report generation, or pre-calculating recommendations.[&#91;3&#93;](#cite_note-[3]-3)

- **Streaming Inference**: Processes continuous streams of data in real-time, such as from sensors, [IoT](/index.php?title=Internet_of_Things&action=edit&redlink=1) devices, or live video feeds. This mode is used for ongoing anomaly detection or live analytics.[&#91;23&#93;](#cite_note-mirantis_blog-23)

## Theoretical Foundations: Paradigms of Reasoning in AI

At a fundamental level, AI inference is the process of deriving new conclusions from existing information, a task that emulates core aspects of human reasoning.[&#91;16&#93;](#cite_note-[6]-16) This process can be understood through several paradigms of reasoning, which form the theoretical basis for how AI systems operate. These paradigms can be broadly categorized into logical reasoning, which follows formal rules, and statistical reasoning, which deals with uncertainty and probability.[&#91;16&#93;](#cite_note-[6]-16)

Modern deep learning represents a significant shift toward inductive reasoning during the training phase, where models generalize patterns from vast amounts of specific data. However, the application of these trained models during inference functionally blends paradigms that were central to classical, symbolic AI. When a trained model receives a new input, it applies its complex set of learned weights—which act as a vast system of general rules—to produce a specific output. This mirrors the general-to-specific flow of deductive reasoning. Furthermore, when a generative model like an LLM produces a sequence of text, it is not deriving a logically certain outcome but is instead predicting the most plausible continuation. This task of finding the "best explanation" for the preceding context is the essence of abductive reasoning. This reveals that modern connectionist AI has not abandoned the principles of logical reasoning but has instead developed a high-dimensional, statistical analogue to them. The recent emergence of fields like [Causal AI](/index.php?title=Causal_AI&action=edit&redlink=1) represents a more explicit step in this direction, aiming to move beyond the correlational patterns of induction to understand the underlying cause-and-effect relationships that govern data.[&#91;24&#93;](#cite_note-[13]-24)

### Primary Forms of Reasoning

Three primary forms of reasoning are central to both human cognition and artificial intelligence: deductive, inductive, and abductive reasoning.[&#91;25&#93;](#cite_note-[14]-25)

- **[Deductive reasoning](/index.php?title=Deductive_reasoning&action=edit&redlink=1)**: This is a top-down approach that starts with general premises or widely accepted facts and moves to a specific, logically certain conclusion. If the initial premises are true, the conclusion is guaranteed to be true.[&#91;26&#93;](#cite_note-[15]-26) The classic example is a syllogism: "All men are mortal. Socrates is a man. Therefore, Socrates is mortal." In AI, deductive reasoning is the foundation of early [expert systems](/index.php?title=Expert_system&action=edit&redlink=1) and rule-based systems, where a set of predefined rules is applied to specific data to reach a conclusion.[&#91;27&#93;](#cite_note-[16]-27)

- **[Inductive reasoning](/index.php?title=Inductive_reasoning&action=edit&redlink=1)**: This is a bottom-up approach that involves forming a generalized conclusion from specific observations or instances.[&#91;26&#93;](#cite_note-[15]-26) It is the cornerstone of modern machine learning.[&#91;2&#93;](#cite_note-[2]-2) An AI model is trained on a large dataset of specific examples (for example thousands of images labeled "cat") and learns to induce a general pattern or set of rules for what constitutes a cat. When presented with a new image, it uses this generalized knowledge to infer whether the new image is also a cat. Unlike deduction, the conclusions of inductive reasoning are probabilistic, not guaranteed to be true.[&#91;27&#93;](#cite_note-[16]-27)

- **[Abductive reasoning](/index.php?title=Abductive_reasoning&action=edit&redlink=1)**: This form of reasoning seeks to find the most plausible explanation for an incomplete set of observations. It is often described as "inference to the best explanation."[&#91;26&#93;](#cite_note-[15]-26) For example, if you find a half-eaten sandwich on the counter, you might abduce that your son was late for work and left in a hurry.[&#91;26&#93;](#cite_note-[15]-26) In AI, abductive reasoning is crucial for tasks like medical diagnosis, where a system must infer the most likely disease given a set of symptoms, or in [reinforcement learning](/wiki/reinforcement_learning), where an agent must choose the best action based on incomplete information about its environment.[&#91;25&#93;](#cite_note-[14]-25)

### Other Important Reasoning Paradigms

Beyond the primary three, several other reasoning frameworks are important in AI:

- **[Probabilistic Reasoning](/index.php?title=Probabilistic_logic&action=edit&redlink=1)**: This paradigm explicitly handles uncertainty by using the principles of probability theory. The most prominent example is [Bayesian inference](/index.php?title=Bayesian_inference&action=edit&redlink=1), which uses [Bayes' theorem](/index.php?title=Bayes%27_theorem&action=edit&redlink=1) to update the probability of a hypothesis as more evidence becomes available.[&#91;16&#93;](#cite_note-[6]-16) Instead of providing a definitive answer, it provides a degree of belief, which is essential for applications in dynamic environments like risk assessment or recommendation systems.[&#91;27&#93;](#cite_note-[16]-27)

- **[Analogical Reasoning](/index.php?title=Case-based_reasoning&action=edit&redlink=1)**: This involves solving a new problem by identifying and applying the solution from a similar, previously solved problem. An AI system might use this to adapt a route-planning algorithm designed for autonomous cars to navigate delivery drones.[&#91;27&#93;](#cite_note-[16]-27)

- **[Causal Inference](/index.php?title=Causal_reasoning&action=edit&redlink=1)**: A more advanced form of reasoning that aims to understand cause-and-effect relationships, distinguishing them from mere correlations. While traditional machine learning models are excellent at finding correlations (for example ice cream sales and drowning incidents are correlated), they do not understand that both are caused by a third factor (hot weather). [Causal AI](/index.php?title=Causal_AI&action=edit&redlink=1) attempts to model these underlying causal structures to create more robust, fair, and explainable models.[&#91;24&#93;](#cite_note-[13]-24)

- **[Monotonic](/index.php?title=Monotonic_logic&action=edit&redlink=1) vs. [Non-monotonic Reasoning](/index.php?title=Non-monotonic_logic&action=edit&redlink=1)**: This distinction relates to how an AI system handles new information. In monotonic reasoning, once a conclusion is made, it is never retracted, even if new information is introduced. In non-monotonic reasoning, conclusions are provisional and can be revised in light of new evidence that contradicts them. Non-monotonic reasoning is essential for AI systems operating in the real world, where information is often incomplete and subject to change.[&#91;27&#93;](#cite_note-[16]-27)

## Inference Across Key AI Architectures

While the core concept of inference as a forward pass is universal in deep learning, its specific implementation and computational characteristics vary significantly across different model architectures. The unique structure of each architecture creates distinct performance bottlenecks, which in turn drives the development of specialized optimization techniques.

For instance, the inference process in [CNNs](/index.php?title=Convolutional_Neural_Network&action=edit&redlink=1) is dominated by a series of highly parallelizable convolution and matrix multiplication operations, making it a compute-bound task. Optimization efforts for CNNs therefore focus on accelerating these specific computations through specialized hardware like GPUs and TPUs, which feature thousands of cores or systolic arrays, and through the use of efficient mathematical kernels.[&#91;20&#93;](#cite_note-[10]-20)[&#91;28&#93;](#cite_note-[17]-28)

In contrast, the generative inference process in [LLMs](/index.php?title=Large_Language_Model&action=edit&redlink=1) is autoregressive and sequential. While the initial processing of the prompt (the "prefill" stage) is compute-bound, the generation of each subsequent token (the "decode" stage) is severely memory-bandwidth-bound. This is because the entire model's large weight matrices must be loaded from memory to perform a relatively small amount of computation for each new token.[&#91;29&#93;](#cite_note-[18]-29) This specific bottleneck has led to the development of Transformer-specific optimizations like the [KV cache](/index.php?title=KV_cache&action=edit&redlink=1), PagedAttention, and Multi-Query Attention, all of which are designed to reduce the memory footprint and bandwidth requirements of the attention mechanism.[&#91;30&#93;](#cite_note-[19]-30)[&#91;31&#93;](#cite_note-[20]-31)

Probabilistic models like [Bayesian networks](/index.php?title=Bayesian_network&action=edit&redlink=1) present yet another type of challenge. Here, the computational complexity is not determined by floating-point operations but by the combinatorial problem of summing over variables in a graph. The performance bottleneck is directly related to the graph's [treewidth](/index.php?title=Treewidth&action=edit&redlink=1).[&#91;32&#93;](#cite_note-[21]-32) Consequently, optimization strategies focus on either transforming the graph's structure to make it more tractable (as in the Junction Tree algorithm) or abandoning exact computation entirely in favor of approximation algorithms.[&#91;32&#93;](#cite_note-[21]-32)[&#91;33&#93;](#cite_note-[22]-33) This demonstrates that "inference optimization" is not a monolithic field; the optimal strategy is fundamentally dictated by the model's underlying mathematical structure and the specific computational bottleneck it creates.

### Convolutional Neural Networks (CNNs)

Inference in a CNN involves passing an input, typically an image, through a sequence of specialized layers designed to extract features of increasing complexity.[&#91;16&#93;](#cite_note-[6]-16)[&#91;34&#93;](#cite_note-[23]-34) This forward pass transforms the raw pixel data into a final classification. The key layers involved are:

- **[Convolutional Layer](/index.php?title=Convolution_(computer_science)&action=edit&redlink=1)**: This is the core building block of a CNN. It applies a set of learnable filters (or kernels) across the input image. Each filter is a small matrix of weights that is specialized to detect a specific feature, such as an edge, a corner, or a color patch. The filter slides (convolves) over the input, computing the dot product at each location to produce a 2D [feature map](/index.php?title=Feature_map&action=edit&redlink=1). This map indicates where in the input the specific feature was detected.[&#91;20&#93;](#cite_note-[10]-20)[&#91;35&#93;](#cite_note-[24]-35)

- **[Activation Function](/index.php?title=Activation_Function&action=edit&redlink=1)**: After each convolution operation, the feature map is passed through a non-linear activation function, most commonly the Rectified Linear Unit (ReLU). This introduces non-linearity, allowing the network to learn more complex patterns than simple linear combinations of features.[&#91;20&#93;](#cite_note-[10]-20)[&#91;36&#93;](#cite_note-[25]-36)

- **Pooling Layer**: The pooling layer is used to reduce the spatial dimensions (width and height) of the feature maps, a process known as downsampling or subsampling.[&#91;20&#93;](#cite_note-[10]-20)[&#91;20&#93;](#cite_note-[10]-20) The most common form is max pooling, which takes a small window of the feature map and outputs only the maximum value. This makes the network more computationally efficient and provides a degree of translation invariance, meaning the network can recognize a feature regardless of its exact position in the image.[&#91;20&#93;](#cite_note-[10]-20)

- **[Fully Connected Layer](/index.php?title=Artificial_neuron&action=edit&redlink=1)**: After several convolutional and pooling layers have extracted high-level features, the final feature maps are flattened into a one-dimensional vector. This vector is then fed into one or more fully connected layers, which are identical to the layers in a standard neural network. These layers learn to combine the high-level features to make a final classification.[&#91;37&#93;](#cite_note-[26]-37)[&#91;36&#93;](#cite_note-[25]-36)

- **Output Layer**: The final fully connected layer outputs the raw scores (logits) for each class. These are typically passed through a Softmax activation function, which converts the scores into a probability distribution, indicating the model's confidence for each class.[&#91;36&#93;](#cite_note-[25]-36)

### Transformer Models

Inference with Transformer models, particularly for generative tasks like machine translation or text generation, is an **autoregressive** process. This means the model generates its output one token (word or sub-word) at a time, with each new token being conditioned on the previously generated ones.[&#91;38&#93;](#cite_note-[27]-38)

The process differs significantly from training, where the model has access to the entire output sequence at once. During inference, the decoder must build the sequence step-by-step:[&#91;38&#93;](#cite_note-[27]-38)

1. **Encoder Processing**: For models with an encoder-decoder architecture (like those used for translation), the encoder first processes the entire input sequence (for example an English sentence). Using its self-attention mechanism, it builds a set of rich, contextual representations (context vectors) of the input. This step is identical in both training and inference.[&#91;38&#93;](#cite_note-[27]-38)

2. **Decoder Initialization**: The decoder begins with a special "start-of-sequence" (SOS) token as its initial input.[&#91;38&#93;](#cite_note-[27]-38)

3. **Decoder Loop (Token-by-Token Generation)**:
- **Masked Self-Attention**: The decoder applies a masked self-attention mechanism to its current input sequence (which at the first step is just the SOS token). The mask ensures that when predicting a token, the model can only attend to the tokens that came before it, preventing it from "seeing into the future."[&#91;38&#93;](#cite_note-[27]-38)

- **Cross-Attention**: The decoder then uses a cross-attention mechanism. Here, the queries come from the decoder's state, while the keys and values come from the encoder's context vectors. This allows the decoder to focus on the most relevant parts of the original input sentence when generating the next output token.[&#91;38&#93;](#cite_note-[27]-38)

- **Feed-Forward and Prediction**: The output of the cross-attention layer is passed through a feed-forward network. The final output vector is then fed into a linear layer followed by a Softmax function, which produces a probability distribution over the entire vocabulary.[&#91;38&#93;](#cite_note-[27]-38)

- **Sampling**: A token is selected from this distribution. While simply picking the token with the highest probability (greedy sampling) is an option, more sophisticated sampling methods are often used to generate more diverse and natural-sounding text.[&#91;39&#93;](#cite_note-[28]-39)

- **Append and Repeat**: The newly generated token is appended to the decoder's input sequence, and the entire loop is repeated to generate the next token. This continues until the model generates a special "end-of-sequence" (EOS) token.[&#91;38&#93;](#cite_note-[27]-38)

A crucial optimization for this process is the **[KV cache](/index.php?title=KV_cache&action=edit&redlink=1)**. During each decoding step, the key (K) and value (V) vectors computed in the attention layers for all previous tokens are stored in memory. In the next step, the model only needs to compute the K and V vectors for the newest token and can reuse the cached values for all prior tokens. This prevents a massive amount of redundant computation and is essential for achieving practical inference speeds.[&#91;39&#93;](#cite_note-[28]-39)[&#91;30&#93;](#cite_note-[19]-30)

### Probabilistic Graphical Models (Bayesian Networks)

Inference in a Bayesian Network is fundamentally a task of probabilistic querying. It involves calculating the posterior probability distribution for a set of "query" variables, given that another set of "evidence" variables has been observed.[&#91;32&#93;](#cite_note-[21]-32)[&#91;40&#93;](#cite_note-[29]-40) This allows the network to logically update its beliefs in response to new information. Because exact inference in general graphs is [NP-hard](/index.php?title=NP-hardness&action=edit&redlink=1), a variety of algorithms have been developed, which fall into two main categories: exact and approximate inference.[&#91;41&#93;](#cite_note-[30]-41)

#### Exact Inference Algorithms

These algorithms compute the precise posterior probabilities.

- **Variable Elimination**: This is an intuitive algorithm that answers a specific query, such as $P(X|E=e)$, by systematically eliminating all other "hidden" variables from the joint probability distribution one by one.[&#91;42&#93;](#cite_note-[31]-42) Instead of calculating the full joint distribution (which is computationally prohibitive), it leverages the network's structure to "push" summation operations inward, performing them on smaller products of factors (the conditional probability tables).[&#91;43&#93;](#cite_note-[32]-43) While efficient for single queries, the entire process must be re-run for each new query.[&#91;44&#93;](#cite_note-[33]-44)

- **Junction Tree Algorithm** (or Clique Tree Propagation): This is a more general and often more efficient method for exact inference, especially when multiple queries are needed. The algorithm compiles the original graph into a data structure called a junction tree, where the nodes are "cliques" (subsets of fully connected variables) from a triangulated version of the original graph.[&#91;33&#93;](#cite_note-[22]-33)[&#91;44&#93;](#cite_note-[33]-44) Once this tree is constructed, a two-phase message-passing protocol (known as belief propagation) is executed. In the first phase, messages are passed from the leaves of the tree to an arbitrary root, and in the second phase, they are passed back out from the root to the leaves. After this process, the marginal probability for every variable in the network is available, allowing many different queries to be answered without re-computation.[&#91;40&#93;](#cite_note-[29]-40)[&#91;40&#93;](#cite_note-[29]-40)

#### Approximate Inference Algorithms

When the treewidth of a network is too large, exact inference becomes computationally intractable. In such cases, approximate methods are used.[&#91;32&#93;](#cite_note-[21]-32)

- **Stochastic Sampling Methods**: These methods, such as [Markov chain Monte Carlo](/index.php?title=Markov_chain_Monte_Carlo&action=edit&redlink=1) (MCMC), generate a large number of random samples from the probability distribution defined by the network. The desired probabilities are then estimated based on the frequencies of events in these samples.

- **Variational Inference**: This method reframes the inference problem as an optimization problem. It seeks to find a simpler, tractable probability distribution that is as close as possible (in terms of [KL divergence](/index.php?title=Kullback%E2%80%93Leibler_divergence&action=edit&redlink=1)) to the true, complex posterior distribution.

## Evaluating Inference: Performance and Quality Metrics

Evaluating an AI model's inference capabilities is a multifaceted process that requires assessing two distinct but interconnected dimensions: **performance** and **quality**.[&#91;45&#93;](#cite_note-[34]-45) Performance metrics quantify the operational efficiency of the inference process—how fast it runs and how many resources it consumes. Quality metrics, on the other hand, measure the accuracy and utility of the model's outputs.[&#91;46&#93;](#cite_note-[35]-46) These two dimensions are often in a trade-off; techniques that improve performance, such as aggressive model quantization, can sometimes lead to a degradation in quality.[&#91;47&#93;](#cite_note-[36]-47)

The evolution of these evaluation metrics reflects the maturation of AI from a purely academic field to a robust engineering discipline. Early machine learning research focused primarily on quality metrics like classification accuracy.[&#91;48&#93;](#cite_note-[37]-48) However, as models began to be deployed in real-world applications, operational performance became a critical concern, leading to the standardization of metrics for latency and throughput.[&#91;45&#93;](#cite_note-[34]-45)[&#91;29&#93;](#cite_note-[18]-29) With the recent explosion in the scale of AI services, the economic and environmental costs of inference have become significant. This has driven the emergence of efficiency metrics like **cost per million tokens**, **Model Bandwidth Utilization (MBU)**, and **tokens per watt** as first-class concerns for system designers.[&#91;49&#93;](#cite_note-[38]-49)[&#91;49&#93;](#cite_note-[38]-49)

### Performance Metrics: Speed, Scale, and Efficiency

Performance metrics are crucial for assessing the viability of deploying an AI model, especially for interactive and large-scale applications.

#### Latency

Latency measures the time delay for a single inference request and is a critical factor for user-facing applications where responsiveness is key.[&#91;50&#93;](#cite_note-[41]-50) For LLMs, latency is typically broken down into several components:

- **Time to First Token (TTFT)**: The time elapsed from when a user sends a prompt to when the first token of the response is generated. A low TTFT is crucial for making an application feel responsive. For example, some benchmarks show [NVIDIA H100](/index.php?title=NVIDIA_H100&action=edit&redlink=1) GPUs achieving a TTFT of 46ms for an MPT-7B model.[&#91;51&#93;](#cite_note-[42]-51)[&#91;52&#93;](#cite_note-aws-bedrock-52)

- **End-to-End Latency (E2EL)**: The total time from the start of the request to the receipt of the final token. This metric represents the total time a user waits for the complete response.[&#91;51&#93;](#cite_note-[42]-51)

- **Time Per Output Token (TPOT)**: The average time it takes to generate each token after the first one. This metric determines the "streaming" speed of the response. A lower TPOT results in a smoother, faster-feeling generation process.[&#91;51&#93;](#cite_note-[42]-51)[&#91;29&#93;](#cite_note-[18]-29)

- **Inter-Token Latency (ITL)**: The precise time gap between each consecutive pair of tokens. While the average ITL across a single request is equivalent to TPOT, the calculation can differ when averaged across multiple requests.[&#91;51&#93;](#cite_note-[42]-51)[&#91;45&#93;](#cite_note-[34]-45)

| Metric | Definition | Primary Use Case |
| --- | --- | --- |
| Time to First Token (TTFT) | Time to process the prompt and generate the first output token.[&#91;51&#93;](#cite_note-[42]-51) | Measures the perceived responsiveness of interactive applications (for example chatbots). |
| End-to-End Latency (E2EL) | Total time from sending the request to receiving the final token.[&#91;51&#93;](#cite_note-[42]-51) | Measures the total user waiting time for a complete response. |
| Time Per Output Token (TPOT) | Average time to generate each token after the first.[&#91;51&#93;](#cite_note-[42]-51) | Measures the streaming speed of the generated output. |
| Inter-Token Latency (ITL) | The time gap between consecutive tokens.[&#91;51&#93;](#cite_note-[42]-51) | A more granular measure of generation speed; average ITL is often equivalent to TPOT. |
| Throughput (TPS/RPS) | Total number of output tokens (TPS) or requests (RPS) processed by the system per second.[&#91;45&#93;](#cite_note-[34]-45) | Measures the overall capacity and cost-efficiency of the inference server. |

#### Throughput

Throughput measures the total processing capacity of an inference system over a period of time.[&#91;53&#93;](#cite_note-[43]-53) It is typically measured in tokens per second (TPS) or requests per second (RPS).

- **System Throughput**: The total number of tokens per second generated across all concurrent users. This metric reflects the raw processing power of the deployed infrastructure.[&#91;45&#93;](#cite_note-[34]-45)

- **User Throughput**: The effective tokens per second experienced by a single user. As system load increases, user throughput typically decreases because resources are shared.[&#91;45&#93;](#cite_note-[34]-45)

- **Model Bandwidth Utilization (MBU)**: Measures what fraction of peak memory bandwidth the workload achieves. For LLMs, this is often the primary bottleneck, with MBU at batch size 1 typically achieving only 50-60% of theoretical bandwidth.[&#91;29&#93;](#cite_note-[18]-29)

There is a fundamental **latency-throughput trade-off**. To maximize throughput, systems often batch multiple requests together to better utilize the parallel processing capabilities of GPUs. However, this batching increases the latency for each individual request, as it may have to wait for other requests to arrive and be processed.[&#91;29&#93;](#cite_note-[18]-29)[&#91;54&#93;](#cite_note-[44]-54) The optimal balance depends on the application: interactive services prioritize low latency, while offline analytics prioritize high throughput.[&#91;51&#93;](#cite_note-[42]-51)

#### Power and Economic Metrics

With the increasing scale of AI, efficiency has become a critical concern.

- **Tokens per Watt**: Measures the energy efficiency of the hardware and software stack.[&#91;49&#93;](#cite_note-[38]-49)

- **Cost per Million Tokens**: A standard economic metric used by cloud providers to price inference services, reflecting the financial cost of running the model.[&#91;49&#93;](#cite_note-[38]-49)

### Quality and Accuracy Metrics

Quality metrics assess whether the model's outputs are correct, relevant, and useful. The choice of metric depends heavily on the type of task.

#### For Classification Tasks

These metrics are used for tasks where the model must assign an input to one of a predefined set of categories.[&#91;48&#93;](#cite_note-[37]-48)

- **[Confusion matrix](/wiki/confusion_matrix)**: A table that summarizes classification performance by showing the counts of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN).[&#91;46&#93;](#cite_note-[35]-46)[&#91;48&#93;](#cite_note-[37]-48)

- **[Accuracy](/wiki/accuracy)**: The proportion of correct predictions out of the total number of predictions. While intuitive, it can be misleading on datasets with imbalanced classes.[&#91;48&#93;](#cite_note-[37]-48)

- **[Precision](/index.php?title=Precision_and_recall&action=edit&redlink=1)**: Measures the accuracy of the positive predictions ($$TP / (TP + FP)$$). A high precision means that when the model predicts a positive class, it is very likely to be correct.[&#91;46&#93;](#cite_note-[35]-46)[&#91;48&#93;](#cite_note-[37]-48)

- **[Recall](/index.php?title=Precision_and_recall&action=edit&redlink=1)** (or Sensitivity): Measures the proportion of actual positives that were correctly identified ($$TP / (TP + FN)$$). A high recall means the model is good at finding all the positive instances.[&#91;46&#93;](#cite_note-[35]-46)[&#91;48&#93;](#cite_note-[37]-48)

- **[F-score](/index.php?title=F-score&action=edit&redlink=1)**: The harmonic mean of precision and recall, providing a single score that balances both metrics.[&#91;48&#93;](#cite_note-[37]-48)

- **[AUC-ROC](/index.php?title=Receiver_operating_characteristic&action=edit&redlink=1)** and **[AUC-PR](/index.php?title=Precision_and_recall&action=edit&redlink=1)**: The Area Under the Receiver Operating Characteristic curve and the Area Under the Precision-Recall curve, respectively. These metrics evaluate the model's ability to distinguish between classes across all possible classification thresholds.[&#91;46&#93;](#cite_note-[35]-46)[&#91;46&#93;](#cite_note-[35]-46)

#### For Generative Models (LLMs)

Evaluating generative models is more complex, as there is often no single "correct" answer.

- **Computation-based Metrics**: These metrics algorithmically compare the generated text to one or more reference texts. Examples include [BLEU](/index.php?title=BLEU&action=edit&redlink=1), commonly used for machine translation, and [ROUGE](/index.php?title=ROUGE_(metric)&action=edit&redlink=1), used for text summarization.[&#91;55&#93;](#cite_note-[39]-55)

- **Rubric-based Metrics (LLM-as-a-judge)**: A modern approach where a powerful, separate LLM is used to evaluate the output of the model being tested. The judge LLM scores the output based on a predefined **rubric** that might include criteria like fluency, coherence, factuality (grounding), and safety.[&#91;55&#93;](#cite_note-[39]-55)[&#91;56&#93;](#cite_note-[45]-56)

- **Task-Specific Benchmarks**: As AI becomes more integrated into professional workflows, new benchmarks are being developed to measure performance on realistic, economically valuable tasks. An example is **GDPval**, which evaluates models on tasks drawn from real-world knowledge work, using reference files and expecting complex deliverables.[&#91;57&#93;](#cite_note-[40]-57)

### Industry Benchmarks

To standardize the evaluation of AI systems, several industry-wide benchmarks have been established.

- **[MLPerf](/index.php?title=MLPerf&action=edit&redlink=1)**: Maintained by the non-profit consortium [MLCommons](/index.php?title=MLCommons&action=edit&redlink=1), MLPerf is the most widely recognized industry benchmark for AI performance. The MLPerf Inference suite measures the latency and throughput of systems across a range of representative AI tasks, including image classification, object detection, and language processing.[&#91;58&#93;](#cite_note-[46]-58)[&#91;59&#93;](#cite_note-[47]-59) The suite is regularly updated to include state-of-the-art models (such as Llama 3.1 and DeepSeek-R1 in v5.1).[&#91;58&#93;](#cite_note-[46]-58) It also includes an optional power measurement component to evaluate energy efficiency.[&#91;60&#93;](#cite_note-[48]-60)

- **Other [Benchmarks](/wiki/benchmarks)**: Specialized benchmarks are also emerging. The **AI Energy Score** initiative aims to standardize the evaluation of energy efficiency for AI model inference.[&#91;60&#93;](#cite_note-[48]-60) **LLM-Inference-Bench** is a suite designed to provide detailed hardware performance evaluations specifically for LLMs across various AI accelerators.[&#91;61&#93;](#cite_note-[49]-61)

## Optimizing Inference for Efficiency

The substantial computational and memory requirements of modern AI models, particularly LLMs, present significant challenges for deployment. Inference optimization encompasses a wide range of techniques designed to make models smaller, faster, and more cost-effective to run, without a significant loss in accuracy.[&#91;62&#93;](#cite_note-[50]-62)

### Model Compression Techniques

These methods aim to reduce the size of the model, which in turn lowers memory requirements and can accelerate computation.[&#91;47&#93;](#cite_note-[36]-47)

- **[Quantization](/index.php?title=Quantization_(signal_processing)&action=edit&redlink=1)**: This is one of the most effective optimization techniques. It involves reducing the numerical precision of the model's parameters (weights) and intermediate calculations (activations). Models are typically trained using 32-bit floating-point numbers (FP32). Quantization converts these to lower-precision formats, such as 16-bit floating-point (FP16), 8-bit integers (INT8), or even 4-bit integers (INT4).[&#91;63&#93;](#cite_note-[52]-63)[&#91;64&#93;](#cite_note-[53]-64) This reduces the model's memory footprint by up to 8x (for INT4) and can significantly speed up inference on hardware that has specialized support for low-precision arithmetic.[&#91;63&#93;](#cite_note-[52]-63)

1. - *Post-Training Quantization (PTQ)'*: This method is applied to an already trained model. It is relatively easy to implement but can sometimes lead to a noticeable drop in model accuracy.[&#91;65&#93;](#cite_note-[54]-65)

- *Quantization-Aware Training (QAT)'*: This method simulates the effects of quantization during the training process itself. The model learns to be robust to the lower precision, which typically results in higher accuracy after quantization compared to PTQ.[&#91;63&#93;](#cite_note-[52]-63)

- **Pruning**: This technique involves identifying and removing redundant or unimportant parameters from a neural network.[&#91;66&#93;](#cite_note-[55]-66)

1. - *Unstructured Pruning'*: Individual weights with low magnitude are set to zero, creating a sparse weight matrix. This can significantly reduce the model's storage size, but it often does not lead to faster inference unless run on specialized hardware that can efficiently process sparse matrices.[&#91;67&#93;](#cite_note-[56]-67)

- *Structured Pruning'*: Entire groups of parameters, such as neurons, convolutional filters, or attention heads, are removed. This results in a smaller, dense model that can be executed faster on standard hardware like GPUs without any special handling.[&#91;68&#93;](#cite_note-[57]-68)

- **[Knowledge distillation](/wiki/knowledge_distillation)**: This method involves training a smaller "student" model to mimic the behavior of a larger, more powerful "teacher" model.[&#91;69&#93;](#cite_note-[58]-69) Instead of training the student model only on the ground-truth labels, it is also trained to match the output probability distribution (the "soft targets") of the teacher model. This allows the student to learn the more nuanced relationships between classes that the teacher has captured, often achieving performance close to the teacher with a fraction of the parameters.[&#91;69&#93;](#cite_note-[58]-69)[&#91;70&#93;](#cite_note-[59]-70) A well-known example is [DistilBERT](/index.php?title=DistilBERT&action=edit&redlink=1), which is 40% smaller than the original BERT model but retains 97% of its performance.[&#91;30&#93;](#cite_note-[19]-30)[&#91;70&#93;](#cite_note-[59]-70)

### Runtime and System-Level Optimizations

These techniques focus on improving the efficiency of the inference execution without modifying the model's parameters.

- **Batching**: Grouping multiple inference requests together and processing them in a single pass through the model. This dramatically improves GPU utilization and overall throughput by amortizing the overhead of kernel launches and memory transfers.[&#91;30&#93;](#cite_note-[19]-30)[&#91;71&#93;](#cite_note-[51]-71)

- **Continuous Batching**: A state-of-the-art technique for LLM inference where the server dynamically batches requests at the iteration level. Instead of waiting for all sequences in a batch to finish, it can immediately start processing new requests as soon as individual sequences are complete. This can lead to throughput improvements of over 20x compared to simpler batching methods.[&#91;29&#93;](#cite_note-[18]-29)[&#91;72&#93;](#cite_note-anyscale-72)

- **KV Cache Optimization**: For Transformer models, the KV cache can consume a large amount of GPU memory. **PagedAttention**, a technique inspired by virtual memory in operating systems, allows the KV cache to be stored in non-contiguous memory blocks. This significantly reduces memory fragmentation and waste, enabling larger batch sizes and support for longer contexts.[&#91;30&#93;](#cite_note-[19]-30)[&#91;31&#93;](#cite_note-[20]-31)

- **Attention Variants**: The standard self-attention mechanism is computationally expensive.
**[FlashAttention](/index.php?title=FlashAttention&action=edit&redlink=1)** is a hardware-aware attention algorithm that reorders the computation to minimize slow read/write operations to the GPU's high-bandwidth memory (HBM), resulting in significant speedups.[&#91;31&#93;](#cite_note-[20]-31)

- **Multi-Query Attention (MQA)** and **Grouped-Query Attention (GQA)** reduce the size of the KV cache by having multiple query heads share the same key and value heads. This is particularly effective for improving inference speed for long sequences.[&#91;31&#93;](#cite_note-[20]-31)

**Speculative Decoding**: This technique uses a smaller, faster "draft" model to generate a candidate sequence of several tokens. The larger, more accurate "verifier" model then processes this entire candidate sequence in a single forward pass to check its correctness. If the draft is accepted, the model can generate multiple tokens in the time it would normally take to generate one, leading to 2-3x latency reductions in production.[&#91;30&#93;](#cite_note-[19]-30)[&#91;31&#93;](#cite_note-[20]-31)[&#91;73&#93;](#cite_note-google-spec-73)
**[Model Parallelism](/index.php?title=Parallel_computing&action=edit&redlink=1)**: When a model is too large to fit on a single accelerator, it must be distributed across multiple devices. Different strategies exist to split the model, including **tensor parallelism** (splitting individual weight matrices), **pipeline parallelism** (assigning different layers to different devices), and **sequence parallelism** (splitting the input sequence across devices).[&#91;30&#93;](#cite_note-[19]-30)[&#91;31&#93;](#cite_note-[20]-31)
## Inference Serving Frameworks

Specialized software is required to efficiently deploy and serve models in production. These frameworks bridge the gap between a trained model file and a scalable, low-latency web service.

- **[NVIDIA TensorRT](/index.php?title=NVIDIA_TensorRT&action=edit&redlink=1)**: An SDK for high-performance deep learning inference. It optimizes models by performing graph optimizations, layer fusion, and precision calibration (for example to INT8 or FP8), tuning the model for the specific target NVIDIA GPU.[&#91;74&#93;](#cite_note-nvidia-tensorrt-74)

- **[vLLM](/index.php?title=VLLM&action=edit&redlink=1)**: An open-source LLM inference and serving engine that revolutionized serving speeds by implementing PagedAttention and continuous batching. It can achieve up to 24x higher throughput compared to standard HuggingFace Transformers.[&#91;75&#93;](#cite_note-kelk-75)

- **[NVIDIA Triton Inference Server](/wiki/nvidia_triton_inference_server)**: A comprehensive serving solution that can deploy models from multiple frameworks (including TensorRT, TensorFlow, PyTorch, and ONNX). It supports dynamic batching, multi-model serving, and scaling for production environments.[&#91;76&#93;](#cite_note-nvidia-triton-76)

- **[ONNX Runtime](/index.php?title=ONNX_Runtime&action=edit&redlink=1)**: A cross-platform inference and training accelerator that supports models from many frameworks. It is designed to enable high-performance inference on diverse hardware, from cloud CPUs and GPUs to edge devices.[&#91;77&#93;](#cite_note-onnx-77)

- **[TensorFlow Lite](/index.php?title=TensorFlow_Lite&action=edit&redlink=1)**: A set of tools for on-device inference on mobile, embedded, and IoT devices. It focuses on small binary size and low-latency inference, using techniques like quantization and delegation to device-specific accelerators.[&#91;78&#93;](#cite_note-tflite-78)

| Framework | Primary Use Case | Key Features | Hardware Support |
| --- | --- | --- | --- |
| [TensorRT](/index.php?title=NVIDIA_TensorRT&action=edit&redlink=1) | NVIDIA GPU optimization | Graph fusion, quantization | NVIDIA GPUs only |
| [vLLM](/index.php?title=VLLM&action=edit&redlink=1) | LLM serving | PagedAttention, continuous batching | NVIDIA/AMD GPUs |
| [ONNX Runtime](/index.php?title=ONNX_Runtime&action=edit&redlink=1) | Cross-platform | Multi-backend support | CPU, GPU, NPU |
| [TensorFlow Lite](/index.php?title=TensorFlow_Lite&action=edit&redlink=1) | Mobile/edge | Aggressive compression | Mobile GPUs/NPUs |
| [Triton Server](/wiki/nvidia_triton_inference_server) | Production serving | Multi-model, auto-scaling | Various |

## The Hardware Ecosystem for Inference

The performance, cost, and power consumption of AI inference are fundamentally determined by the underlying hardware. The choice of hardware is a critical decision in designing an AI system, with a wide spectrum of options ranging from general-purpose processors to highly specialized custom chips.[&#91;19&#93;](#cite_note-[9]-19)

### Deployment Environments: Cloud vs. Edge

AI inference can be deployed in two primary environments, each with distinct cost structures and performance characteristics.

- **[Cloud Inference](/index.php?title=Cloud_computing&action=edit&redlink=1)**: This involves running inference on powerful servers located in centralized data centers operated by cloud service providers like AWS, Google Cloud, and Microsoft Azure. It leverages virtually unlimited computational resources and is ideal for training large models and serving complex workloads that are not critically sensitive to latency.[&#91;79&#93;](#cite_note-[62]-79) The cost model is typically based on operational expenditure (OpEx), with a pay-as-you-go structure.[&#91;80&#93;](#cite_note-[63]-80)[&#91;81&#93;](#cite_note-[64]-81)

- **[Edge Inference](/index.php?title=Edge_computing&action=edit&redlink=1)**: This involves performing inference directly on a local device, such as a smartphone, an industrial sensor, a smart camera, or a vehicle. This approach is essential for applications that require very low latency, the ability to function without a network connection, and enhanced data privacy, as sensitive data is processed locally.[&#91;82&#93;](#cite_note-[65]-82) The cost model is dominated by capital expenditure (CapEx), as it requires an upfront investment in hardware.[&#91;81&#93;](#cite_note-[64]-81)

### Comparative Analysis of Hardware Accelerators

Different types of processors are optimized for different computational workloads.[&#91;19&#93;](#cite_note-[9]-19)

| Hardware | Key Architectural Feature | Flexibility/Programmability | Performance Profile | Power Efficiency | Ideal Use Cases |
| --- | --- | --- | --- | --- | --- |
| [CPU](/index.php?title=Central_processing_unit&action=edit&redlink=1) | Few powerful cores optimized for sequential, serial processing.[&#91;19&#93;](#cite_note-[9]-19) | Very High (General-purpose) | Low for parallel AI workloads. Suitable for small models or tasks with high latency tolerance.[&#91;83&#93;](#cite_note-[66]-83) | High (relative to GPU for low-intensity tasks).[&#91;19&#93;](#cite_note-[9]-19) | Prototyping, controlling other accelerators, running very small models.[&#91;84&#93;](#cite_note-[60]-84) |
| [GPU](/index.php?title=Graphics_processing_unit&action=edit&redlink=1) | Thousands of simpler cores designed for massive parallel processing (SIMT).[&#91;85&#93;](#cite_note-[67]-85) | High (Programmable via frameworks like [CUDA](/wiki/cuda)) | Very high for parallel tasks like matrix multiplication. The dominant hardware for AI training and inference.[&#91;84&#93;](#cite_note-[60]-84) | Low (High power consumption and heat generation).[&#91;19&#93;](#cite_note-[9]-19) | General-purpose AI training and high-throughput inference in data centers.[&#91;83&#93;](#cite_note-[66]-83) |
| [FPGA](/index.php?title=Field-programmable_gate_array&action=edit&redlink=1) | Reconfigurable hardware fabric; logic gates can be reprogrammed after manufacturing.[&#91;19&#93;](#cite_note-[9]-19) | Medium (Programmable at the hardware level) | High performance with very low and deterministic latency.[&#91;19&#93;](#cite_note-[9]-19) | Medium (More efficient than GPUs as hardware can be fine-tuned to the application).[&#91;19&#93;](#cite_note-[9]-19) | Real-time, ultra-low-latency applications (for example industrial robotics, aerospace) where algorithms may evolve.[&#91;83&#93;](#cite_note-[66]-83) |
| [ASIC](/index.php?title=Application-specific_integrated_circuit&action=edit&redlink=1) / [NPU](/index.php?title=Neural_Processing_Unit&action=edit&redlink=1) | Custom silicon hardwired for a specific task (for example neural network operations). TPUs use a systolic array for matrix multiplication.[&#91;28&#93;](#cite_note-[17]-28)[&#91;86&#93;](#cite_note-[61]-86) | Very Low (Fixed function) | Highest possible performance for its specific task.[&#91;86&#93;](#cite_note-[61]-86) | Very High (Highest performance per watt).[&#91;84&#93;](#cite_note-[60]-84) | Large-scale, high-volume inference where efficiency is paramount (for example Google's services, autonomous vehicles, mobile phones).[&#91;86&#93;](#cite_note-[61]-86) |

#### Specialized Accelerators

- **GPUs**: [NVIDIA](/wiki/nvidia)'s GPUs dominate high-performance inference. The H100 GPU can deliver up to 30x faster LLM inference than its predecessor, the A100. Other competitors like [AMD](/index.php?title=AMD&action=edit&redlink=1)'s MI300X also target this market.[&#91;87&#93;](#cite_note-openmetal-87)

- **TPUs**: [Google](/index.php?title=Google&action=edit&redlink=1)'s [Tensor Processing Unit](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1) (TPU) is a prominent ASIC. Its core innovation is the **systolic array**, a grid of multiply-accumulators that performs massive matrix multiplications with minimal memory access, achieving high throughput and power efficiency.[&#91;28&#93;](#cite_note-[17]-28)[&#91;88&#93;](#cite_note-[69]-88) Google's Ironwood (TPU v7) is the first TPU specifically designed for inference.[&#91;89&#93;](#cite_note-google-tpu-89)

- **Other ASICs/NPUs**: A growing market of specialized chips includes [AWS](/index.php?title=Amazon_AWS&action=edit&redlink=1)'s Inferentia chips, [Groq](/index.php?title=Groq&action=edit&redlink=1)'s Language Processing Units (LPUs), and [Cerebras](/index.php?title=Cerebras&action=edit&redlink=1)'s Wafer Scale Engines, all designed to offer advantages in speed, cost, or power efficiency for inference.[&#91;90&#93;](#cite_note-aws-inferentia-90) On edge devices, [NPUs](/index.php?title=Neural_Processing_Unit&action=edit&redlink=1) like the [Apple Neural Engine](/index.php?title=Apple_Neural_Engine&action=edit&redlink=1) and [Qualcomm Hexagon](/index.php?title=Qualcomm_Hexagon&action=edit&redlink=1) provide high-performance, low-power inference directly on consumer devices.[&#91;91&#93;](#cite_note-apple-neural-91)

| GPU Model | Architecture | Memory | TDP | Tokens/sec (Llama 70B) |
| --- | --- | --- | --- | --- |
| NVIDIA H100 | Hopper | 80GB HBM3 | 700W | ~2,400 |
| NVIDIA A100 | Ampere | 80GB HBM2e | 400W | ~1,200 |
| NVIDIA L4 | Ada Lovelace | 24GB GDDR6 | 72W | ~450 |
| AMD MI300X | CDNA 3 | 192GB HBM3 | 750W | ~2,200 |

## Applications of AI Inference in Practice

AI inference is the engine that powers a vast and growing range of applications across nearly every industry, transforming raw data streams into actionable insights.

The AI inference market is projected to grow from $97 billion in 2024 to $1.3 trillion by 2032, reflecting its central role in AI adoption.[&#91;92&#93;](#cite_note-markets-92)

| Year | Market Size (USD) | Growth Rate |
| --- | --- | --- |
| 2024 | $97 billion | - |
| 2026 | $180 billion | 36.3% |
| 2028 | $405 billion | 39.8% |
| 2030 | $720 billion | 33.5% |
| 2032 | $1.3 trillion | 34.4% |

### Healthcare

- **Medical Imaging and Diagnostics**: CNNs are used to analyze medical scans such as X-rays, CT scans, and MRIs. These systems can infer the presence of anomalies, such as tumors or signs of diabetic retinopathy, assisting healthcare professionals by highlighting areas of concern.[&#91;93&#93;](#cite_note-[71]-93)[&#91;94&#93;](#cite_note-[70]-94)

- **Personalized Medicine**: By analyzing a patient's genetic information, lifestyle data, and clinical history, AI models can infer the most effective treatment plan for an individual.[&#91;94&#93;](#cite_note-[70]-94)

- **Predictive Health Monitoring**: Wearable devices and smart sensors use inference to continuously monitor vital signs and predict the likelihood of adverse events, such as a heart attack or a fall, enabling early intervention.[&#91;95&#93;](#cite_note-[72]-95)

### Financial Services

- **Fraud Detection and Risk Management**: AI inference engines analyze millions of transactions in real-time, inferring patterns of fraudulent behavior from data such as transaction amount, location, and user history. Suspicious transactions can be automatically blocked in milliseconds.[&#91;3&#93;](#cite_note-[3]-3)[&#91;96&#93;](#cite_note-[73]-96)[&#91;97&#93;](#cite_note-[74]-97)

- **Algorithmic Trading**: Predictive models analyze market data, news sentiment, and economic indicators to infer future price movements and execute trades automatically.[&#91;97&#93;](#cite_note-[74]-97)

### Retail and E-commerce

- **Recommendation Engines**: E-commerce and streaming platforms analyze a user's browsing history, past purchases, and real-time interactions to infer their preferences. This knowledge is used to generate hyper-personalized recommendations for products, movies, or music.[&#91;3&#93;](#cite_note-[3]-3)

- **Supply Chain and Inventory Optimization**: AI models analyze historical sales data and external factors to infer future product demand, allowing retailers to optimize inventory levels and reduce waste.[&#91;3&#93;](#cite_note-[3]-3)

### Autonomous Systems

- **[Autonomous car](/index.php?title=Autonomous_car&action=edit&redlink=1)**: A self-driving car's perception system continuously runs inference on data from a suite of sensors (cameras, [Lidar](/index.php?title=Lidar&action=edit&redlink=1), [radar](/index.php?title=Radar&action=edit&redlink=1)). It infers the presence and classification of objects (for example other cars, pedestrians, traffic signs) and makes critical driving decisions in milliseconds.[&#91;98&#93;](#cite_note-[76]-98)[&#91;99&#93;](#cite_note-[77]-99)

- **Robotics and Manufacturing**: In smart factories, AI-powered cameras perform inference for automated quality control, detecting defects on an assembly line. Robots use inference for object recognition and manipulation.[&#91;3&#93;](#cite_note-[3]-3)

### Other Applications

- **Cybersecurity**: Inference models analyze network traffic in real-time to detect anomalies and infer patterns that signal a cyberattack or threat.[&#91;23&#93;](#cite_note-mirantis_blog-23)

- **Natural Language Processing**: Powers applications like text classification, translation, and conversational AI chatbots, which rely on inference to interpret new text and generate responses.[&#91;100&#93;](#cite_note-ibm_art1_ref-100)

## Current Challenges and Future Outlook

While AI inference has enabled transformative applications, the field faces significant challenges as models grow in scale and complexity.

### Current Challenges in AI Inference

- **[Model collapse](/index.php?title=Model_collapse&action=edit&redlink=1)**: A significant emerging threat where new generations of AI models, trained on synthetic data generated by previous models, begin to lose diversity, compound errors, and degrade in quality.[&#91;101&#93;](#cite_note-[78]-101)

- **[Model drift](/index.php?title=Model_drift&action=edit&redlink=1)**: A common problem where a model's performance degrades over time as the real-world data it encounters during inference "drifts" or changes from the data it was trained on. 91% of production ML models suffer from this drift.[&#91;102&#93;](#cite_note-symbl-102)

- **[Explainability](/index.php?title=Explainable_artificial_intelligence&action=edit&redlink=1) and Trust**: Many deep learning models function as "black boxes," making it difficult to understand the reasoning behind their outputs. This lack of transparency is a major obstacle to adoption in high-stakes domains like healthcare and law.[&#91;24&#93;](#cite_note-[13]-24)

- **Security and Privacy**: Inference surfaces novel attack vectors, including model inversion attacks to extract training data, membership inference to violate privacy, and adversarial attacks to bypass safety guardrails.[&#91;23&#93;](#cite_note-mirantis_blog-23)

- **Efficiency, Cost, and Environmental Impact**: The scale of modern LLMs has led to immense computational and energy costs for inference, which can account for 70-80% of a model's total lifetime energy consumption.[&#91;103&#93;](#cite_note-[79]-103)[&#91;104&#93;](#cite_note-[80]-104)

### Future Directions and Emerging Trends

- **Reasoning Models**: The frontier of AI is moving toward models like [OpenAI](/wiki/openai)'s o1 and [DeepSeek](/wiki/deepseek)'s R1, which shift computational effort from training to inference. These "reasoning models" apply substantial compute during query processing to perform complex, multi-step reasoning tasks.[&#91;105&#93;](#cite_note-deepseek-105)

- **Causal AI**: There is a growing movement to develop AI systems that can understand and reason about cause-and-effect relationships, rather than just identifying statistical correlations. Causal AI promises to create models that are more robust, less prone to bias, and inherently more explainable.[&#91;24&#93;](#cite_note-[13]-24)

- **Hardware-Software Co-design**: Achieving the next level of inference efficiency will require tighter integration between model architecture design, software compilers, and hardware accelerators. This involves designing neural networks that are optimized for the strengths of specific hardware and, conversely, designing hardware that is tailored to emerging model architectures.[&#91;62&#93;](#cite_note-[50]-62)

- **Agentic Workflows**: Future AI systems will increasingly function as "agents" that can decompose a complex problem into smaller steps, use external tools (like APIs), and interact with an environment to achieve a goal. This shift dramatically increases the number of inference calls required per user query, making inference efficiency even more critical.[&#91;49&#93;](#cite_note-[38]-49)[&#91;58&#93;](#cite_note-[46]-58)

## See Also

- [Artificial intelligence](/wiki/artificial_intelligence)

- [AI training](/index.php?title=AI_training&action=edit&redlink=1)

- [Convolutional neural network](/wiki/convolutional_neural_network)

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)

- [Expert system](/index.php?title=Expert_system&action=edit&redlink=1)

- [Forward propagation](/index.php?title=Forward_propagation&action=edit&redlink=1)

- [Fine-tuning (machine learning)](/index.php?title=Fine-tuning_(machine_learning)&action=edit&redlink=1)

- [GPU computing](/index.php?title=GPU_computing&action=edit&redlink=1)

- [Inference engine](/index.php?title=Inference_engine&action=edit&redlink=1)

- [Knowledge distillation](/wiki/knowledge_distillation)

- [Large language model](/wiki/large_language_model)

- [Machine learning](/wiki/machine_learning)

- [MLOps](/index.php?title=MLOps&action=edit&redlink=1)

- [MLPerf](/index.php?title=MLPerf&action=edit&redlink=1)

- [Neural network](/wiki/neural_network)

- [NVIDIA TensorRT](/index.php?title=NVIDIA_TensorRT&action=edit&redlink=1)

- [ONNX](/index.php?title=ONNX&action=edit&redlink=1)

- [Pruning](/index.php?title=Pruning_(machine_learning)&action=edit&redlink=1)

- [Quantization](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [Tensor Processing Unit](/index.php?title=Tensor_Processing_Unit&action=edit&redlink=1)

- [vLLM](/index.php?title=VLLM&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-[1]_1-0) [1.1](#cite_ref-[1]_1-1) ["What is AI inference? How it works and examples"](https://cloud.google.com/discover/what-is-ai-inference#:~:text=Think%20of%20it%20this%20way,photo%2C%20or%20makes%20a%20decision.).&#32;Google Cloud.&#32;[https://cloud.google.com/discover/what-is-ai-inference#:~:text=Think%20of%20it%20this%20way,photo%2C%20or%20makes%20a%20decision](https://cloud.google.com/discover/what-is-ai-inference#:~:text=Think%20of%20it%20this%20way,photo%2C%20or%20makes%20a%20decision)..

2. ↑ [2.0](#cite_ref-[2]_2-0) [2.1](#cite_ref-[2]_2-1) [2.2](#cite_ref-[2]_2-2) [2.3](#cite_ref-[2]_2-3) ["Explore NVIDIA AI Inference Tools and Technologies"](https://developer.nvidia.com/topics/ai/ai-inference).&#32;NVIDIA Developer.&#32;[https://developer.nvidia.com/topics/ai/ai-inference](https://developer.nvidia.com/topics/ai/ai-inference).

3. ↑ [3.00](#cite_ref-[3]_3-0) [3.01](#cite_ref-[3]_3-1) [3.02](#cite_ref-[3]_3-2) [3.03](#cite_ref-[3]_3-3) [3.04](#cite_ref-[3]_3-4) [3.05](#cite_ref-[3]_3-5) [3.06](#cite_ref-[3]_3-6) [3.07](#cite_ref-[3]_3-7) [3.08](#cite_ref-[3]_3-8) [3.09](#cite_ref-[3]_3-9) [3.10](#cite_ref-[3]_3-10) [3.11](#cite_ref-[3]_3-11) [3.12](#cite_ref-[3]_3-12) [3.13](#cite_ref-[3]_3-13) [3.14](#cite_ref-[3]_3-14) [3.15](#cite_ref-[3]_3-15) [3.16](#cite_ref-[3]_3-16) [3.17](#cite_ref-[3]_3-17) [3.18](#cite_ref-[3]_3-18) [3.19](#cite_ref-[3]_3-19) ["What is AI inference?"](https://cloud.google.com/discover/what-is-ai-inference).&#32;Google Cloud.&#32;[https://cloud.google.com/discover/what-is-ai-inference](https://cloud.google.com/discover/what-is-ai-inference).

4. ↑ [4.0](#cite_ref-[4]_4-0) [4.1](#cite_ref-[4]_4-1) [4.2](#cite_ref-[4]_4-2) ["What is AI inference?"](https://www.ibm.com/think/topics/ai-inference).&#32;IBM.&#32;[https://www.ibm.com/think/topics/ai-inference](https://www.ibm.com/think/topics/ai-inference).

5. [↑](#cite_ref-nvidia-cost_5-0) ["LLM Inference Benchmarking: How Much Does Your LLM Inference Cost?"](https://developer.nvidia.com/blog/llm-inference-benchmarking-how-much-does-your-llm-inference-cost/).&#32;NVIDIA Developer.&#32;[https://developer.nvidia.com/blog/llm-inference-benchmarking-how-much-does-your-llm-inference-cost/](https://developer.nvidia.com/blog/llm-inference-benchmarking-how-much-does-your-llm-inference-cost/).&#32;Retrieved 2025-01-21.

6. ↑ [6.00](#cite_ref-wiki_ai_history_6-0) [6.01](#cite_ref-wiki_ai_history_6-1) [6.02](#cite_ref-wiki_ai_history_6-2) [6.03](#cite_ref-wiki_ai_history_6-3) [6.04](#cite_ref-wiki_ai_history_6-4) [6.05](#cite_ref-wiki_ai_history_6-5) [6.06](#cite_ref-wiki_ai_history_6-6) [6.07](#cite_ref-wiki_ai_history_6-7) [6.08](#cite_ref-wiki_ai_history_6-8) [6.09](#cite_ref-wiki_ai_history_6-9) [6.10](#cite_ref-wiki_ai_history_6-10) [6.11](#cite_ref-wiki_ai_history_6-11) ["History of artificial intelligence"](https://en.wikipedia.org/wiki/History_of_artificial_intelligence).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/History_of_artificial_intelligence](https://en.wikipedia.org/wiki/History_of_artificial_intelligence).

7. ↑ [7.0](#cite_ref-ibm_history_7-0) [7.1](#cite_ref-ibm_history_7-1) ["The History of Artificial Intelligence"](https://www.ibm.com/think/topics/history-of-artificial-intelligence).&#32;IBM.&#32;[https://www.ibm.com/think/topics/history-of-artificial-intelligence](https://www.ibm.com/think/topics/history-of-artificial-intelligence).

8. ↑ [8.0](#cite_ref-wiki_inf_engine_8-0) [8.1](#cite_ref-wiki_inf_engine_8-1) ["Inference engine"](https://en.wikipedia.org/wiki/Inference_engine).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Inference_engine](https://en.wikipedia.org/wiki/Inference_engine).

9. [↑](#cite_ref-forbes_expert_9-0) ["History Of AI In 33 Breakthroughs: The First Expert System"](https://www.forbes.com/sites/gilpress/2022/10/29/history-of-ai-in-33-breakthroughs-the-first-expert-system/).&#32;Forbes.&#32;[https://www.forbes.com/sites/gilpress/2022/10/29/history-of-ai-in-33-breakthroughs-the-first-expert-system/](https://www.forbes.com/sites/gilpress/2022/10/29/history-of-ai-in-33-breakthroughs-the-first-expert-system/).

10. [↑](#cite_ref-ahistory_expert_10-0) ["Expert system"](https://ahistoryofai.com/expert-system/).&#32;A History of Artificial Intelligence.&#32;[https://ahistoryofai.com/expert-system/](https://ahistoryofai.com/expert-system/).

11. [↑](#cite_ref-wiki_expert_11-0) ["Expert system"](https://en.wikipedia.org/wiki/Expert_system).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Expert_system](https://en.wikipedia.org/wiki/Expert_system).

12. [↑](#cite_ref-hpe_history_12-0) ["A Short History of Artificial Intelligence"](https://community.hpe.com/t5/ai-unlocked/a-short-history-of-artificial-intelligence/ba-p/7172315).&#32;HPE Community.&#32;[https://community.hpe.com/t5/ai-unlocked/a-short-history-of-artificial-intelligence/ba-p/7172315](https://community.hpe.com/t5/ai-unlocked/a-short-history-of-artificial-intelligence/ba-p/7172315).

13. [↑](#cite_ref-medium_expert_13-0) [https.medium.com/version-1/an-overview-of-the-rise-and-fall-of-expert-systems-14e26005e70e "An Overview of the Rise and Fall of Expert Systems"].&#32;Medium.&#32;https.medium.com/version-1/an-overview-of-the-rise-and-fall-of-expert-systems-14e26005e70e.

14. [↑](#cite_ref-retro_expert_14-0) ["Why did expert systems fall?"](https://retrocomputing.stackexchange.com/questions/6456/why-did-expert-systems-fall).&#32;Retrocomputing Stack Exchange.&#32;[https://retrocomputing.stackexchange.com/questions/6456/why-did-expert-systems-fall](https://retrocomputing.stackexchange.com/questions/6456/why-did-expert-systems-fall).

15. [↑](#cite_ref-[5]_15-0) ["Machine learning"](https://www.ibm.com/think/topics/machine-learning).&#32;IBM.&#32;[https://www.ibm.com/think/topics/machine-learning](https://www.ibm.com/think/topics/machine-learning).

16. ↑ [16.0](#cite_ref-[6]_16-0) [16.1](#cite_ref-[6]_16-1) [16.2](#cite_ref-[6]_16-2) [16.3](#cite_ref-[6]_16-3) [16.4](#cite_ref-[6]_16-4) ["Introduction to Inference in Artificial Intelligence"](https://www.pass4sure.com/blog/introduction-to-inference-in-artificial-intelligence/).&#32;Pass4Sure.&#32;[https://www.pass4sure.com/blog/introduction-to-inference-in-artificial-intelligence/](https://www.pass4sure.com/blog/introduction-to-inference-in-artificial-intelligence/).

17. ↑ [17.0](#cite_ref-[7]_17-0) [17.1](#cite_ref-[7]_17-1) [17.2](#cite_ref-[7]_17-2) [17.3](#cite_ref-[7]_17-3) ["What is Forward Propagation in Neural Networks?"](https://www.datacamp.com/tutorial/forward-propagation-neural-networks).&#32;DataCamp.&#32;[https://www.datacamp.com/tutorial/forward-propagation-neural-networks](https://www.datacamp.com/tutorial/forward-propagation-neural-networks).

18. [↑](#cite_ref-[8]_18-0) ["NVIDIA TensorRT"](https://developer.nvidia.com/tensorrt).&#32;NVIDIA.&#32;[https://developer.nvidia.com/tensorrt](https://developer.nvidia.com/tensorrt).

19. ↑ [19.0](#cite_ref-[9]_19-0) [19.1](#cite_ref-[9]_19-1) [19.2](#cite_ref-[9]_19-2) [19.3](#cite_ref-[9]_19-3) [19.4](#cite_ref-[9]_19-4) [19.5](#cite_ref-[9]_19-5) [19.6](#cite_ref-[9]_19-6) [19.7](#cite_ref-[9]_19-7) [19.8](#cite_ref-[9]_19-8) ["FPGA vs GPU vs CPU: Hardware Options for AI Applications"](https://my.avnet.com/silica/resources/article/fpga-vs-gpu-vs-cpu-hardware-options-for-ai-applications/).&#32;Avnet.&#32;[https://my.avnet.com/silica/resources/article/fpga-vs-gpu-vs-cpu-hardware-options-for-ai-applications/](https://my.avnet.com/silica/resources/article/fpga-vs-gpu-vs-cpu-hardware-options-for-ai-applications/).

20. ↑ [20.0](#cite_ref-[10]_20-0) [20.1](#cite_ref-[10]_20-1) [20.2](#cite_ref-[10]_20-2) [20.3](#cite_ref-[10]_20-3) [20.4](#cite_ref-[10]_20-4) [20.5](#cite_ref-[10]_20-5) [20.6](#cite_ref-[10]_20-6) ["Convolutional Neural Network (CNN)"](https://developer.nvidia.com/discover/convolutional-neural-network).&#32;NVIDIA.&#32;[https://developer.nvidia.com/discover/convolutional-neural-network](https://developer.nvidia.com/discover/convolutional-neural-network).

21. [↑](#cite_ref-[11]_21-0) ["Forward propagation"](https://telnyx.com/learn-ai/forward-propogation-ai).&#32;Telnyx.&#32;[https://telnyx.com/learn-ai/forward-propogation-ai](https://telnyx.com/learn-ai/forward-propogation-ai).

22. [↑](#cite_ref-[12]_22-0) ["How to Implement the Forward Method for a CNN in PyTorch"](https://www.youtube.com/watch?v=MasG7tZj-hw).&#32;YouTube.&#32;[https://www.youtube.com/watch?v=MasG7tZj-hw](https://www.youtube.com/watch?v=MasG7tZj-hw).

23. ↑ [23.0](#cite_ref-mirantis_blog_23-0) [23.1](#cite_ref-mirantis_blog_23-1) [23.2](#cite_ref-mirantis_blog_23-2) ["AI Inference: Guide and Best Practices"](https://www.mirantis.com/blog/what-is-ai-inference-a-guide-and-best-practices/).&#32;Mirantis.&#32;[https://www.mirantis.com/blog/what-is-ai-inference-a-guide-and-best-practices/](https://www.mirantis.com/blog/what-is-ai-inference-a-guide-and-best-practices/).

24. ↑ [24.0](#cite_ref-[13]_24-0) [24.1](#cite_ref-[13]_24-1) [24.2](#cite_ref-[13]_24-2) [24.3](#cite_ref-[13]_24-3) ["An explanation of causal AI"](https://www.techtarget.com/whatis/video/An-explanation-of-causal-AI).&#32;TechTarget.&#32;[https://www.techtarget.com/whatis/video/An-explanation-of-causal-AI](https://www.techtarget.com/whatis/video/An-explanation-of-causal-AI).

25. ↑ [25.0](#cite_ref-[14]_25-0) [25.1](#cite_ref-[14]_25-1) ["On AI and Types of Reasoning"](https://towardsdatascience.com/on-ai-and-types-of-reasoning-fc6980295158).&#32;Towards Data Science.&#32;[https://towardsdatascience.com/on-ai-and-types-of-reasoning-fc6980295158](https://towardsdatascience.com/on-ai-and-types-of-reasoning-fc6980295158).

26. ↑ [26.0](#cite_ref-[15]_26-0) [26.1](#cite_ref-[15]_26-1) [26.2](#cite_ref-[15]_26-2) [26.3](#cite_ref-[15]_26-3) ["Deduction vs. Induction vs. Abduction"](https://www.merriam-webster.com/grammar/deduction-vs-induction-vs-abduction).&#32;Merriam-Webster.&#32;[https://www.merriam-webster.com/grammar/deduction-vs-induction-vs-abduction](https://www.merriam-webster.com/grammar/deduction-vs-induction-vs-abduction).

27. ↑ [27.0](#cite_ref-[16]_27-0) [27.1](#cite_ref-[16]_27-1) [27.2](#cite_ref-[16]_27-2) [27.3](#cite_ref-[16]_27-3) [27.4](#cite_ref-[16]_27-4) ["What Are the Different Types of Reasoning in AI?"](https://milvus.io/ai-quick-reference/what-are-the-different-types-of-reasoning-in-ai).&#32;Milvus.&#32;[https://milvus.io/ai-quick-reference/what-are-the-different-types-of-reasoning-in-ai](https://milvus.io/ai-quick-reference/what-are-the-different-types-of-reasoning-in-ai).

28. ↑ [28.0](#cite_ref-[17]_28-0) [28.1](#cite_ref-[17]_28-1) [28.2](#cite_ref-[17]_28-2) ["TPU system architecture"](https://cloud.google.com/tpu/docs/system-architecture-tpu-vm).&#32;Google Cloud.&#32;[https://cloud.google.com/tpu/docs/system-architecture-tpu-vm](https://cloud.google.com/tpu/docs/system-architecture-tpu-vm).

29. ↑ [29.0](#cite_ref-[18]_29-0) [29.1](#cite_ref-[18]_29-1) [29.2](#cite_ref-[18]_29-2) [29.3](#cite_ref-[18]_29-3) [29.4](#cite_ref-[18]_29-4) [29.5](#cite_ref-[18]_29-5) ["LLM Inference Performance Engineering: Best Practices"](https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices).&#32;Databricks.&#32;[https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices](https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices).

30. ↑ [30.0](#cite_ref-[19]_30-0) [30.1](#cite_ref-[19]_30-1) [30.2](#cite_ref-[19]_30-2) [30.3](#cite_ref-[19]_30-3) [30.4](#cite_ref-[19]_30-4) [30.5](#cite_ref-[19]_30-5) [30.6](#cite_ref-[19]_30-6) ["LLM Inference Optimization"](https://www.clarifai.com/blog/llm-inference-optimization/).&#32;Clarifai.&#32;[https://www.clarifai.com/blog/llm-inference-optimization/](https://www.clarifai.com/blog/llm-inference-optimization/).

31. ↑ [31.0](#cite_ref-[20]_31-0) [31.1](#cite_ref-[20]_31-1) [31.2](#cite_ref-[20]_31-2) [31.3](#cite_ref-[20]_31-3) [31.4](#cite_ref-[20]_31-4) [31.5](#cite_ref-[20]_31-5) ["LLM Inference Optimization 101"](https://www.digitalocean.com/community/tutorials/llm-inference-optimization).&#32;DigitalOcean.&#32;[https://www.digitalocean.com/community/tutorials/llm-inference-optimization](https://www.digitalocean.com/community/tutorials/llm-inference-optimization).

32. ↑ [32.0](#cite_ref-[21]_32-0) [32.1](#cite_ref-[21]_32-1) [32.2](#cite_ref-[21]_32-2) [32.3](#cite_ref-[21]_32-3) ["Bayesian network"](https://en.wikipedia.org/wiki/Bayesian_network).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Bayesian_network](https://en.wikipedia.org/wiki/Bayesian_network).

33. ↑ [33.0](#cite_ref-[22]_33-0) [33.1](#cite_ref-[22]_33-1) ["Junction tree algorithm"](https://en.wikipedia.org/wiki/Junction_tree_algorithm).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Junction_tree_algorithm](https://en.wikipedia.org/wiki/Junction_tree_algorithm).

34. [↑](#cite_ref-[23]_34-0) ["A Comprehensive Review of Convolutional Neural Networks"](https://www.mdpi.com/2079-3197/11/3/52).&#32;MDPI.&#32;[https://www.mdpi.com/2079-3197/11/3/52](https://www.mdpi.com/2079-3197/11/3/52).

35. [↑](#cite_ref-[24]_35-0) ["Convolutional neural network"](https://en.wikipedia.org/wiki/Convolutional_neural_network).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Convolutional_neural_network](https://en.wikipedia.org/wiki/Convolutional_neural_network).

36. ↑ [36.0](#cite_ref-[25]_36-0) [36.1](#cite_ref-[25]_36-1) [36.2](#cite_ref-[25]_36-2) ["What is a CNN?"](https://www.hpe.com/us/en/what-is/convolutional-neural-network.html).&#32;HPE.&#32;[https://www.hpe.com/us/en/what-is/convolutional-neural-network.html](https://www.hpe.com/us/en/what-is/convolutional-neural-network.html).

37. [↑](#cite_ref-[26]_37-0) ["What is a Convolution Neural Network?"](https://www.hpe.com/us/en/what-is/convolutional-neural-network.html#:~:text=CNNs%20consist%20of%20layers%20that,features%20to%20the%20final%20output.).&#32;HPE.&#32;[https://www.hpe.com/us/en/what-is/convolutional-neural-network.html#:~:text=CNNs%20consist%20of%20layers%20that,features%20to%20the%20final%20output](https://www.hpe.com/us/en/what-is/convolutional-neural-network.html#:~:text=CNNs%20consist%20of%20layers%20that,features%20to%20the%20final%20output)..

38. ↑ [38.0](#cite_ref-[27]_38-0) [38.1](#cite_ref-[27]_38-1) [38.2](#cite_ref-[27]_38-2) [38.3](#cite_ref-[27]_38-3) [38.4](#cite_ref-[27]_38-4) [38.5](#cite_ref-[27]_38-5) [38.6](#cite_ref-[27]_38-6) [38.7](#cite_ref-[27]_38-7) ["How Inference is Done in Transformer"](https://medium.com/@sachinsoni600517/how-inference-is-done-in-transformer-3a1fd1a8bfea).&#32;Medium.&#32;[https://medium.com/@sachinsoni600517/how-inference-is-done-in-transformer-3a1fd1a8bfea](https://medium.com/@sachinsoni600517/how-inference-is-done-in-transformer-3a1fd1a8bfea).

39. ↑ [39.0](#cite_ref-[28]_39-0) [39.1](#cite_ref-[28]_39-1) ["The Basics of Transformer Inference"](https://jax-ml.github.io/scaling-book/inference/).&#32;JAX-ML.&#32;[https://jax-ml.github.io/scaling-book/inference/](https://jax-ml.github.io/scaling-book/inference/).

40. ↑ [40.0](#cite_ref-[29]_40-0) [40.1](#cite_ref-[29]_40-1) [40.2](#cite_ref-[29]_40-2) ["Exact Inference in Bayesian Networks"](https://www.geeksforgeeks.org/artificial-intelligence/exact-inference-in-bayesian-networks/).&#32;GeeksforGeeks.&#32;[https://www.geeksforgeeks.org/artificial-intelligence/exact-inference-in-bayesian-networks/](https://www.geeksforgeeks.org/artificial-intelligence/exact-inference-in-bayesian-networks/).

41. [↑](#cite_ref-[30]_41-0) ["Inference in Graphical Probability Models"](https://mason.gmu.edu/~klaskey/GraphicalModels/GraphicalModels_Unit4_JTInference.pdf).&#32;George Mason University.&#32;[https://mason.gmu.edu/~klaskey/GraphicalModels/GraphicalModels_Unit4_JTInference.pdf](https://mason.gmu.edu/~klaskey/GraphicalModels/GraphicalModels_Unit4_JTInference.pdf).

42. [↑](#cite_ref-[31]_42-0) ["Exact Inference in Graphical Models"](https://pgmpy.org/detailed_notebooks/5.%20Exact%20Inference%20in%20Graphical%20Models.html).&#32;pgmpy.&#32;[https://pgmpy.org/detailed_notebooks/5.%20Exact%20Inference%20in%20Graphical%20Models.html](https://pgmpy.org/detailed_notebooks/5.%20Exact%20Inference%20in%20Graphical%20Models.html).

43. [↑](#cite_ref-[32]_43-0) ["Exact Inference: Variable Elimination"](https://www.cs.cmu.edu/~epxing/Class/10708-14/scribe_notes/scribe_note_lecture4.pdf).&#32;Carnegie Mellon University.&#32;[https://www.cs.cmu.edu/~epxing/Class/10708-14/scribe_notes/scribe_note_lecture4.pdf](https://www.cs.cmu.edu/~epxing/Class/10708-14/scribe_notes/scribe_note_lecture4.pdf).

44. ↑ [44.0](#cite_ref-[33]_44-0) [44.1](#cite_ref-[33]_44-1) ["From Variable Elimination to the Junction Tree Algorithms"](https://ai.stanford.edu/~paskin/gm-short-course/lec3.pdf).&#32;Stanford AI Lab.&#32;[https://ai.stanford.edu/~paskin/gm-short-course/lec3.pdf](https://ai.stanford.edu/~paskin/gm-short-course/lec3.pdf).

45. ↑ [45.0](#cite_ref-[34]_45-0) [45.1](#cite_ref-[34]_45-1) [45.2](#cite_ref-[34]_45-2) [45.3](#cite_ref-[34]_45-3) [45.4](#cite_ref-[34]_45-4) [45.5](#cite_ref-[34]_45-5) ["Understand LLM latency and throughput metrics"](https://docs.anyscale.com/llm/serving/benchmarking/metrics).&#32;Anyscale.&#32;[https://docs.anyscale.com/llm/serving/benchmarking/metrics](https://docs.anyscale.com/llm/serving/benchmarking/metrics).

46. ↑ [46.0](#cite_ref-[35]_46-0) [46.1](#cite_ref-[35]_46-1) [46.2](#cite_ref-[35]_46-2) [46.3](#cite_ref-[35]_46-3) [46.4](#cite_ref-[35]_46-4) [46.5](#cite_ref-[35]_46-5) ["Introduction to model evaluation"](https://cloud.google.com/vertex-ai/docs/evaluation/introduction).&#32;Vertex AI.&#32;[https://cloud.google.com/vertex-ai/docs/evaluation/introduction](https://cloud.google.com/vertex-ai/docs/evaluation/introduction).

47. ↑ [47.0](#cite_ref-[36]_47-0) [47.1](#cite_ref-[36]_47-1) ["LLM Inference Optimization Techniques: A Comprehensive Analysis"](https://medium.com/@sahin.samia/llm-inference-optimization-techniques-a-comprehensive-analysis-1c434e85ba7c).&#32;Medium.&#32;[https://medium.com/@sahin.samia/llm-inference-optimization-techniques-a-comprehensive-analysis-1c434e85ba7c](https://medium.com/@sahin.samia/llm-inference-optimization-techniques-a-comprehensive-analysis-1c434e85ba7c).

48. ↑ [48.0](#cite_ref-[37]_48-0) [48.1](#cite_ref-[37]_48-1) [48.2](#cite_ref-[37]_48-2) [48.3](#cite_ref-[37]_48-3) [48.4](#cite_ref-[37]_48-4) [48.5](#cite_ref-[37]_48-5) [48.6](#cite_ref-[37]_48-6) ["Performance Metrics in Machine Learning: The Complete Guide"](https://neptune.ai/blog/performance-metrics-in-machine-learning-complete-guide).&#32;Neptune.ai.&#32;[https://neptune.ai/blog/performance-metrics-in-machine-learning-complete-guide](https://neptune.ai/blog/performance-metrics-in-machine-learning-complete-guide).

49. ↑ [49.0](#cite_ref-[38]_49-0) [49.1](#cite_ref-[38]_49-1) [49.2](#cite_ref-[38]_49-2) [49.3](#cite_ref-[38]_49-3) [49.4](#cite_ref-[38]_49-4) ["AI Inference Performance"](https://developer.nvidia.com/deep-learning-performance-training-inference/ai-inference).&#32;NVIDIA.&#32;[https://developer.nvidia.com/deep-learning-performance-training-inference/ai-inference](https://developer.nvidia.com/deep-learning-performance-training-inference/ai-inference).

50. [↑](#cite_ref-[41]_50-0) ["What's the difference between throughput and latency?"](https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/).&#32;AWS.&#32;[https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/](https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/).

51. ↑ [51.0](#cite_ref-[42]_51-0) [51.1](#cite_ref-[42]_51-1) [51.2](#cite_ref-[42]_51-2) [51.3](#cite_ref-[42]_51-3) [51.4](#cite_ref-[42]_51-4) [51.5](#cite_ref-[42]_51-5) [51.6](#cite_ref-[42]_51-6) [51.7](#cite_ref-[42]_51-7) [51.8](#cite_ref-[42]_51-8) ["LLM Inference Metrics: A Comprehensive Guide"](https://bentoml.com/llm/inference-optimization/llm-inference-metrics).&#32;BentoML.&#32;[https://bentoml.com/llm/inference-optimization/llm-inference-metrics](https://bentoml.com/llm/inference-optimization/llm-inference-metrics).

52. [↑](#cite_ref-aws-bedrock_52-0) ["Optimizing AI responsiveness: A practical guide to Amazon Bedrock latency-optimized inference"](https://aws.amazon.com/blogs/machine-learning/optimizing-ai-responsiveness-a-practical-guide-to-amazon-bedrock-latency-optimized-inference/).&#32;AWS.&#32;[https://aws.amazon.com/blogs/machine-learning/optimizing-ai-responsiveness-a-practical-guide-to-amazon-bedrock-latency-optimized-inference/](https://aws.amazon.com/blogs/machine-learning/optimizing-ai-responsiveness-a-practical-guide-to-amazon-bedrock-latency-optimized-inference/).

53. [↑](#cite_ref-[43]_53-0) ["Artificial Intelligence: Understanding Training & Inference"](https://viaphoton.com/artificial-intelligence-understanding-training-inference/).&#32;ViaPhoton.&#32;[https://viaphoton.com/artificial-intelligence-understanding-training-inference/](https://viaphoton.com/artificial-intelligence-understanding-training-inference/).

54. [↑](#cite_ref-[44]_54-0) ["Throughput-Latency Tradeoff in LLM Inference"](https://medium.com/better-ml/throughput-latency-tradeoff-in-llm-inference-5a9e0d1d2c14).&#32;Medium.&#32;[https://medium.com/better-ml/throughput-latency-tradeoff-in-llm-inference-5a9e0d1d2c14](https://medium.com/better-ml/throughput-latency-tradeoff-in-llm-inference-5a9e0d1d2c14).

55. ↑ [55.0](#cite_ref-[39]_55-0) [55.1](#cite_ref-[39]_55-1) ["Define your evaluation metrics"](https://cloud.google.com/vertex-ai/generative-ai/docs/models/determine-eval).&#32;Google Cloud.&#32;[https://cloud.google.com/vertex-ai/generative-ai/docs/models/determine-eval](https://cloud.google.com/vertex-ai/generative-ai/docs/models/determine-eval).

56. [↑](#cite_ref-[45]_56-0) ["LLM Evaluation Metrics: Everything You Need for LLM Evaluation"](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation).&#32;Confident AI.&#32;[https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation).

57. [↑](#cite_ref-[40]_57-0) ["Measuring the performance of our models on real-world tasks"](https://openai.com/index/gdpval/).&#32;OpenAI.&#32;[https://openai.com/index/gdpval/](https://openai.com/index/gdpval/).

58. ↑ [58.0](#cite_ref-[46]_58-0) [58.1](#cite_ref-[46]_58-1) [58.2](#cite_ref-[46]_58-2) ["MLPerf Inference v5.1 Results"](https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/).&#32;MLCommons.&#32;[https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/](https://mlcommons.org/2025/09/mlperf-inference-v5-1-results/).

59. [↑](#cite_ref-[47]_59-0) ["MLPerf Inference: Datcenter"](https://mlcommons.org/benchmarks/inference-datacenter/).&#32;MLCommons.&#32;[https://mlcommons.org/benchmarks/inference-datacenter/](https://mlcommons.org/benchmarks/inference-datacenter/). Cite error: Invalid `<ref>` tag; name "[47]" defined multiple times with different content

60. ↑ [60.0](#cite_ref-[48]_60-0) [60.1](#cite_ref-[48]_60-1) ["AI Energy Score"](https://huggingface.github.io/AIEnergyScore/).&#32;Hugging Face.&#32;[https://huggingface.github.io/AIEnergyScore/](https://huggingface.github.io/AIEnergyScore/).

61. [↑](#cite_ref-[49]_61-0) ["LLM-Inference-Bench: A Comprehensive Benchmarking Suite for LLM Inference"](https://arxiv.org/html/2411.00136v1).&#32;arXiv.&#32;[https://arxiv.org/html/2411.00136v1](https://arxiv.org/html/2411.00136v1).

62. ↑ [62.0](#cite_ref-[50]_62-0) [62.1](#cite_ref-[50]_62-1) ["A Survey on Efficient LLM Inference"](https://arxiv.org/pdf/2404.14294).&#32;arXiv.&#32;[https://arxiv.org/pdf/2404.14294](https://arxiv.org/pdf/2404.14294).

63. ↑ [63.0](#cite_ref-[52]_63-0) [63.1](#cite_ref-[52]_63-1) [63.2](#cite_ref-[52]_63-2) ["Quantization in Deep Learning"](https://www.geeksforgeeks.org/deep-learning/quantization-in-deep-learning/).&#32;GeeksforGeeks.&#32;[https://www.geeksforgeeks.org/deep-learning/quantization-in-deep-learning/](https://www.geeksforgeeks.org/deep-learning/quantization-in-deep-learning/).

64. [↑](#cite_ref-[53]_64-0) ["What is quantization in machine learning?"](https://www.cloudflare.com/learning/ai/what-is-quantization/).&#32;Cloudflare.&#32;[https://www.cloudflare.com/learning/ai/what-is-quantization/](https://www.cloudflare.com/learning/ai/what-is-quantization/).

65. [↑](#cite_ref-[54]_65-0) ["An Introduction to Model Quantization with Large Language Models"](https://www.digitalocean.com/community/tutorials/model-quantization-large-language-models).&#32;DigitalOcean.&#32;[https://www.digitalocean.com/community/tutorials/model-quantization-large-language-models](https://www.digitalocean.com/community/tutorials/model-quantization-large-language-models).

66. [↑](#cite_ref-[55]_66-0) ["A Comprehensive Guide to Neural Network Model Pruning"](https://datature.io/blog/a-comprehensive-guide-to-neural-network-model-pruning).&#32;Datature.&#32;[https://datature.io/blog/a-comprehensive-guide-to-neural-network-model-pruning](https://datature.io/blog/a-comprehensive-guide-to-neural-network-model-pruning).

67. [↑](#cite_ref-[56]_67-0) ["Introduction to Pruning in Deep Learning"](https://medium.com/@anhtuan_40207/introduction-to-pruning-4d60ea4e81e9).&#32;Medium.&#32;[https://medium.com/@anhtuan_40207/introduction-to-pruning-4d60ea4e81e9](https://medium.com/@anhtuan_40207/introduction-to-pruning-4d60ea4e81e9).

68. [↑](#cite_ref-[57]_68-0) ["Neural Network Pruning in Deep Learning"](https://www.geeksforgeeks.org/deep-learning/neural-network-pruning-in-deep-learning/).&#32;GeeksforGeeks.&#32;[https://www.geeksforgeeks.org/deep-learning/neural-network-pruning-in-deep-learning/](https://www.geeksforgeeks.org/deep-learning/neural-network-pruning-in-deep-learning/).

69. ↑ [69.0](#cite_ref-[58]_69-0) [69.1](#cite_ref-[58]_69-1) ["What is Knowledge Distillation?"](https://www.lightly.ai/blog/knowledge-distillation).&#32;Lightly AI.&#32;[https://www.lightly.ai/blog/knowledge-distillation](https://www.lightly.ai/blog/knowledge-distillation).

70. ↑ [70.0](#cite_ref-[59]_70-0) [70.1](#cite_ref-[59]_70-1) ["Knowledge Distillation with Teacher Assistant for Model Compression"](https://www.dailydoseofds.com/p/knowledge-distillation-with-teacher-assistant-for-model-compression/).&#32;The Daily Dose of Data Science.&#32;[https://www.dailydoseofds.com/p/knowledge-distillation-with-teacher-assistant-for-model-compression/](https://www.dailydoseofds.com/p/knowledge-distillation-with-teacher-assistant-for-model-compression/).

71. [↑](#cite_ref-[51]_71-0) ["AI Inference Optimization Techniques and Solutions"](https://nebius.com/blog/posts/inference-optimization-techniques-solutions).&#32;Nebius.&#32;[https://nebius.com/blog/posts/inference-optimization-techniques-solutions](https://nebius.com/blog/posts/inference-optimization-techniques-solutions).

72. [↑](#cite_ref-anyscale_72-0) ["Achieve 23x LLM Inference Throughput & Reduce p50 Latency"](https://www.anyscale.com/blog/continuous-batching-llm-inference).&#32;Anyscale.&#32;[https://www.anyscale.com/blog/continuous-batching-llm-inference](https://www.anyscale.com/blog/continuous-batching-llm-inference).&#32;Retrieved 2025-01-21.

73. [↑](#cite_ref-google-spec_73-0) ["Looking back at speculative decoding"](https://research.google/blog/looking-back-at-speculative-decoding/).&#32;Google Research.&#32;[https://research.google/blog/looking-back-at-speculative-decoding/](https://research.google/blog/looking-back-at-speculative-decoding/).&#32;Retrieved 2025-01-21.

74. [↑](#cite_ref-nvidia-tensorrt_74-0) ["Optimizing and Serving Models with NVIDIA TensorRT and NVIDIA Triton"](https://developer.nvidia.com/blog/optimizing-and-serving-models-with-nvidia-tensorrt-and-nvidia-triton/).&#32;NVIDIA.&#32;[https://developer.nvidia.com/blog/optimizing-and-serving-models-with-nvidia-tensorrt-and-nvidia-triton/](https://developer.nvidia.com/blog/optimizing-and-serving-models-with-nvidia-tensorrt-and-nvidia-triton/).&#32;Retrieved 2025-01-21.

75. [↑](#cite_ref-kelk_75-0) ["Open Source Inference at Full Throttle: Exploring TGI and vLLM"](https://kelk.ai/blog/inference-engines).&#32;Kelk.&#32;[https://kelk.ai/blog/inference-engines](https://kelk.ai/blog/inference-engines).&#32;Retrieved 2025-01-21.

76. [↑](#cite_ref-nvidia-triton_76-0) ["Triton Inference Server"](https://github.com/triton-inference-server/server).&#32;GitHub.&#32;[https://github.com/triton-inference-server/server](https://github.com/triton-inference-server/server).&#32;Retrieved 2025-01-21.

77. [↑](#cite_ref-onnx_77-0) ["ONNX Runtime"](https://onnxruntime.ai/).&#32;Microsoft.&#32;[https://onnxruntime.ai/](https://onnxruntime.ai/).

78. [↑](#cite_ref-tflite_78-0) ["TensorFlow Lite"](https://www.tensorflow.org/lite).&#32;TensorFlow.&#32;[https://www.tensorflow.org/lite](https://www.tensorflow.org/lite).

79. [↑](#cite_ref-[62]_79-0) ["Edge AI vs. cloud AI: What's the difference?"](https://www.ibm.com/think/topics/edge-vs-cloud-ai).&#32;IBM.&#32;[https://www.ibm.com/think/topics/edge-vs-cloud-ai](https://www.ibm.com/think/topics/edge-vs-cloud-ai).

80. [↑](#cite_ref-[63]_80-0) ["Edge AI Cameras vs. Cloud: Balancing Latency, Cost & Reach"](https://medium.com/@API4AI/edge-ai-cameras-vs-cloud-balancing-latency-cost-reach-7e660131977f).&#32;Medium.&#32;[https://medium.com/@API4AI/edge-ai-cameras-vs-cloud-balancing-latency-cost-reach-7e660131977f](https://medium.com/@API4AI/edge-ai-cameras-vs-cloud-balancing-latency-cost-reach-7e660131977f).

81. ↑ [81.0](#cite_ref-[64]_81-0) [81.1](#cite_ref-[64]_81-1) ["The AI Edge Computing Cost: Local Processing vs. Cloud Pricing"](https://www.getmonetizely.com/articles/the-ai-edge-computing-cost-local-processing-vs-cloud-pricing).&#32;Monetizely.&#32;[https://www.getmonetizely.com/articles/the-ai-edge-computing-cost-local-processing-vs-cloud-pricing](https://www.getmonetizely.com/articles/the-ai-edge-computing-cost-local-processing-vs-cloud-pricing).

82. [↑](#cite_ref-[65]_82-0) ["Cloud vs. Edge: Where Should AI Training Really Happen?"](https://www.datacenters.com/news/cloud-vs-edge-where-should-ai-training-really-happen).&#32;Datacenters.com.&#32;[https://www.datacenters.com/news/cloud-vs-edge-where-should-ai-training-really-happen](https://www.datacenters.com/news/cloud-vs-edge-where-should-ai-training-really-happen).

83. ↑ [83.0](#cite_ref-[66]_83-0) [83.1](#cite_ref-[66]_83-1) [83.2](#cite_ref-[66]_83-2) ["AI Deep Learning Inference Acceleration"](https://www.ridgerun.com/post/ai-deep-learning-inference-acceleration).&#32;RidgeRun.&#32;[https://www.ridgerun.com/post/ai-deep-learning-inference-acceleration](https://www.ridgerun.com/post/ai-deep-learning-inference-acceleration).

84. ↑ [84.0](#cite_ref-[60]_84-0) [84.1](#cite_ref-[60]_84-1) [84.2](#cite_ref-[60]_84-2) ["GPU vs FPGA vs ASIC vs CPU: Which Chip is Best for AI?"](https://www.pcbonline.com/blog/gpu-vs-fpga-vs-asic-vs-cpu.html).&#32;PCBONLINE.&#32;[https://www.pcbonline.com/blog/gpu-vs-fpga-vs-asic-vs-cpu.html](https://www.pcbonline.com/blog/gpu-vs-fpga-vs-asic-vs-cpu.html).

85. [↑](#cite_ref-[67]_85-0) ["Inside Google's TPU and GPU Comparisons"](https://skymod.tech/inside-googles-tpu-and-gpu-comparisons/).&#32;SkyMod.&#32;[https://skymod.tech/inside-googles-tpu-and-gpu-comparisons/](https://skymod.tech/inside-googles-tpu-and-gpu-comparisons/).

86. ↑ [86.0](#cite_ref-[61]_86-0) [86.1](#cite_ref-[61]_86-1) [86.2](#cite_ref-[61]_86-2) ["Custom ASICs for Real-Time Inference at the Edge"](https://blog.geetauniversity.edu.in/custom-asics-for-real-time-inference-at-the-edge/).&#32;Geeta University.&#32;[https://blog.geetauniversity.edu.in/custom-asics-for-real-time-inference-at-the-edge/](https://blog.geetauniversity.edu.in/custom-asics-for-real-time-inference-at-the-edge/).

87. [↑](#cite_ref-openmetal_87-0) ["Comparing NVIDIA H100 vs A100 GPUs for AI Workloads"](https://openmetal.io/resources/blog/nvidia-h100-vs-a100-gpu-comparison/).&#32;OpenMetal.&#32;[https://openmetal.io/resources/blog/nvidia-h100-vs-a100-gpu-comparison/](https://openmetal.io/resources/blog/nvidia-h100-vs-a100-gpu-comparison/).

88. [↑](#cite_ref-[69]_88-0) ["Tensor Processing Unit"](https://en.wikipedia.org/wiki/Tensor_Processing_Unit).&#32;Wikipedia.&#32;[https://en.wikipedia.org/wiki/Tensor_Processing_Unit](https://en.wikipedia.org/wiki/Tensor_Processing_Unit).

89. [↑](#cite_ref-google-tpu_89-0) ["Ironwood: The first Google TPU for the age of inference"](https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/).&#32;Google.&#32;[https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/](https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/).

90. [↑](#cite_ref-aws-inferentia_90-0) ["AI Chip - Amazon Inferentia"](https://aws.amazon.com/ai/machine-learning/inferentia/).&#32;AWS.&#32;[https://aws.amazon.com/ai/machine-learning/inferentia/](https://aws.amazon.com/ai/machine-learning/inferentia/).

91. [↑](#cite_ref-apple-neural_91-0) ["What Is Apple's Neural Engine and How Does It Work?"](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/).&#32;MakeUseOf.&#32;[https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/](https://www.makeuseof.com/what-is-a-neural-engine-how-does-it-work/).

92. [↑](#cite_ref-markets_92-0) ["AI Inference Market Size, Share & Growth, 2025 To 2030"](https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html).&#32;MarketsandMarkets.&#32;[https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html](https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html).&#32;Retrieved 2025-01-21.

93. [↑](#cite_ref-[71]_93-0) ["What is AI inference?"](https://www.redhat.com/en/topics/ai/what-is-ai-inference).&#32;Red Hat.&#32;[https://www.redhat.com/en/topics/ai/what-is-ai-inference](https://www.redhat.com/en/topics/ai/what-is-ai-inference).

94. ↑ [94.0](#cite_ref-[70]_94-0) [94.1](#cite_ref-[70]_94-1) ["12 Real Life AI in Healthcare Examples"](https://www.keragon.com/blog/ai-in-healthcare-examples).&#32;Keragon.&#32;[https://www.keragon.com/blog/ai-in-healthcare-examples](https://www.keragon.com/blog/ai-in-healthcare-examples).

95. [↑](#cite_ref-[72]_95-0) ["Artificial Intelligence and Machine Learning (AI/ML)-Enabled Medical Devices"](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device).&#32;FDA.&#32;[https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device).

96. [↑](#cite_ref-[73]_96-0) ["What is AI inference?"](https://www.redhat.com/en/topics/ai/what-is-ai-inference#:~:text=Finance%3A%20After%20being%20trained%20on,privacy%2C%20and%20improve%20brand%20reputation.).&#32;Red Hat.&#32;[https://www.redhat.com/en/topics/ai/what-is-ai-inference#:~:text=Finance%3A%20After%20being%20trained%20on,privacy%2C%20and%20improve%20brand%20reputation](https://www.redhat.com/en/topics/ai/what-is-ai-inference#:~:text=Finance%3A%20After%20being%20trained%20on,privacy%2C%20and%20improve%20brand%20reputation)..

97. ↑ [97.0](#cite_ref-[74]_97-0) [97.1](#cite_ref-[74]_97-1) ["AI in Finance"](https://cloud.google.com/discover/finance-ai).&#32;Google Cloud.&#32;[https://cloud.google.com/discover/finance-ai](https://cloud.google.com/discover/finance-ai).

98. [↑](#cite_ref-[76]_98-0) ["An introduction to AI"](https://www.techtarget.com/whatis/video/An-introduction-to-AI).&#32;TechTarget.&#32;[https://www.techtarget.com/whatis/video/An-introduction-to-AI](https://www.techtarget.com/whatis/video/An-introduction-to-AI).

99. [↑](#cite_ref-[77]_99-0) ["Inference in AI"](https://www.geeksforgeeks.org/artificial-intelligence/inference-in-ai/).&#32;GeeksforGeeks.&#32;[https://www.geeksforgeeks.org/artificial-intelligence/inference-in-ai/](https://www.geeksforgeeks.org/artificial-intelligence/inference-in-ai/).

100. [↑](#cite_ref-ibm_art1_ref_100-0) ["What is Reasoning in AI?"](https://www.ibm.com/think/topics/ai-reasoning).&#32;IBM Think.&#32;[https://www.ibm.com/think/topics/ai-reasoning](https://www.ibm.com/think/topics/ai-reasoning).

101. [↑](#cite_ref-[78]_101-0) ["An explanation of AI model collapse"](https://www.techtarget.com/whatis/video/An-explanation-of-AI-model-collapse).&#32;TechTarget.&#32;[https://www.techtarget.com/whatis/video/An-explanation-of-AI-model-collapse](https://www.techtarget.com/whatis/video/An-explanation-of-AI-model-collapse).

102. [↑](#cite_ref-symbl_102-0) ["A Guide to LLM Inference Performance Monitoring"](https://symbl.ai/developers/blog/a-guide-to-llm-inference-performance-monitoring/).&#32;Symbl.ai.&#32;[https://symbl.ai/developers/blog/a-guide-to-llm-inference-performance-monitoring/](https://symbl.ai/developers/blog/a-guide-to-llm-inference-performance-monitoring/).

103. [↑](#cite_ref-[79]_103-0) ["Power Consumption Benchmark for Embedded AI Inference"](https://www.researchgate.net/publication/385300510_Power_Consumption_Benchmark_for_Embedded_AI_Inference).&#32;ResearchGate.&#32;[https://www.researchgate.net/publication/385300510_Power_Consumption_Benchmark_for_Embedded_AI_Inference](https://www.researchgate.net/publication/385300510_Power_Consumption_Benchmark_for_Embedded_AI_Inference).

104. [↑](#cite_ref-[80]_104-0) ["Energy Use of AI Inference: Efficiency Pathways and Test-Time Compute"](https://www.microsoft.com/en-us/research/publication/energy-use-of-ai-inference-efficiency-pathways-and-test-time-compute/).&#32;Microsoft Research.&#32;[https://www.microsoft.com/en-us/research/publication/energy-use-of-ai-inference-efficiency-pathways-and-test-time-compute/](https://www.microsoft.com/en-us/research/publication/energy-use-of-ai-inference-efficiency-pathways-and-test-time-compute/). Cite error: Invalid `<ref>` tag; name "[80]" defined multiple times with different content

105. [↑](#cite_ref-deepseek_105-0) ["The Economics of AI Training and Inference: How DeepSeek Broke the Cost Curve"](https://blog.adyog.com/2025/02/09/the-economics-of-ai-training-and-inference-how-deepseek-broke-the-cost-curve/).&#32;Adyog.&#32;[https://blog.adyog.com/2025/02/09/the-economics-of-ai-training-and-inference-how-deepseek-broke-the-cost-curve/](https://blog.adyog.com/2025/02/09/the-economics-of-ai-training-and-inference-how-deepseek-broke-the-cost-curve/).