---
title: "VLA"
slug: "vla"
categories:
  - "Pages_containing_cite_templates_with_deprecated_parameters"
  - "Stubs"
  - "Terms"
  - "Artificial_intelligence_terms_terms"
  - "Artificial_intelligence"
  - "Robotics"
  - "Machine_learning"
  - "Computer_vision"
  - "Natural_language_processing"
  - "Foundation_models"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=VLA&action=edit).* 

*See also: [Terms](/wiki/terms) and [artificial intelligence terms](/wiki/artificial_intelligence_terms)*
A **Vision-Language-Action model** (**VLA**) is a type of [foundation model](/wiki/foundation_model) that enables [robot control](/index.php?title=Robot_control&action=edit&redlink=1) through the integration of visual perception, [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and action generation capabilities.[&#91;1&#93;](#cite_note-rt2-deepmind-1) VLAs represent a significant advancement in [embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1), allowing robots to understand and execute complex tasks based on visual inputs and natural language commands while directly outputting motor control actions.[&#91;2&#93;](#cite_note-wikipedia-vla-2) These models are transforming robotics by reducing the need for complex, task-specific programming, enabling robots to learn from visual and language data much like humans do.[&#91;3&#93;](#cite_note-labellerr-3)

## Overview

VLA models are constructed by extending [vision-language models](/index.php?title=Vision-language_models&action=edit&redlink=1) (VLMs) with the capability to generate robot action sequences.[&#91;4&#93;](#cite_note-openvla-paper-4) Unlike traditional robotic control systems that require separate modules for perception, planning, and control, VLAs provide an end-to-end solution that directly maps visual observations and language instructions to robot actions.[&#91;5&#93;](#cite_note-black-coffee-5)

The key innovation of VLA models is their ability to leverage pre-trained knowledge from large-scale [internet data](/index.php?title=Internet_data&action=edit&redlink=1) while adapting to robotic control tasks.[&#91;6&#93;](#cite_note-rt2-blog-6) This approach addresses one of the fundamental challenges in robotics: the need for extensive task-specific training data for each robot, environment, and application.[&#91;7&#93;](#cite_note-deepmind-scaling-7) Actions are represented in the same token space as text so that gradient updates align linguistic and kinematic concepts, allowing the model to inherit world knowledge from internet-scale corpora while grounding it in robot trajectories.[&#91;8&#93;](#cite_note-survey24-8)

## How It Works

A VLA model typically consists of three main components that work together in a unified, end-to-end system:[&#91;3&#93;](#cite_note-labellerr-3)

### Vision Encoder

This component processes visual input from cameras and other sensors, converting raw pixel data into a meaningful representation of the environment. It identifies objects, understands their spatial relationships, and extracts other relevant visual features.

### Language Model

The language model interprets natural language commands given to the robot in the form of text or speech. It understands the user's intent and extracts the goal of the task, as well as any constraints or preferences.

### Action Policy

This component takes the outputs from the vision encoder and the language model and generates a sequence of actions for the robot to execute. It plans the robot's movements, controls its actuators, and ensures that the task is performed safely and efficiently.

This integrated approach is a key advantage of VLAs over traditional robotic systems, where perception, planning, and control are often treated as separate and independent modules.

## History

The concept of Vision-Language-Action models emerged from the convergence of advances in [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) (LLMs), [computer vision](/wiki/computer_vision), and [robotic learning](/index.php?title=Robotic_learning&action=edit&redlink=1). The term "VLA" was first coined in the [Google RT-2](/index.php?title=Google_RT-2&action=edit&redlink=1) paper, which described the model as transforming "Pixels to Actions".[&#91;9&#93;](#cite_note-learnopencv-9)

### Early Development

The foundation for VLA models was laid by earlier work in robotic learning, including:

- **[RT-1](/index.php?title=RT-1&action=edit&redlink=1) (Robotics Transformer 1)**: Introduced in late 2022, RT-1 was the first "large robot model" trained with robot demonstration data collected from 13 robots over 17 months.[&#91;10&#93;](#cite_note-rt1-blog-10) It demonstrated the potential of [transformer architecture](/index.php?title=Transformer_architecture&action=edit&redlink=1) for robotic control but did not yet integrate vision-language pre-training.

- **[PaLM-E](/index.php?title=PaLM-E&action=edit&redlink=1)**: An embodied multimodal language model that enhanced robots' ability to understand their surroundings through vision models.[&#91;11&#93;](#cite_note-infoq-rt2-11)

### [RT-2](/index.php?title=RT-2&action=edit&redlink=1): The First True VLA

In July 2023, [Google DeepMind](/wiki/google_deepmind) announced Robotic Transformer 2 (RT-2), described as "a first-of-its-kind vision-language-action (VLA) model".[&#91;12&#93;](#cite_note-maginative-12) RT-2 represented a breakthrough in enabling robots to:

- Apply knowledge and reasoning from large web datasets to real-world robotic tasks

- Understand and execute commands not present in robot training data

- Perform rudimentary reasoning in response to user commands

- Use [chain-of-thought reasoning](/index.php?title=Chain-of-thought_reasoning&action=edit&redlink=1) for multi-stage semantic reasoning[&#91;13&#93;](#cite_note-rtinsights-13)

## Architecture

VLA models typically consist of three main components:[&#91;14&#93;](#cite_note-cogact-14)

### Vision Module

The vision module processes raw image inputs into perceptual tokens. Common architectures include:

- [Vision Transformers](/index.php?title=Vision_Transformers&action=edit&redlink=1) (ViT) such as [SigLIP](/index.php?title=SigLIP&action=edit&redlink=1) and [DINOv2](/index.php?title=DINOv2&action=edit&redlink=1)

- Fused visual encoders that combine multiple pre-trained vision models

- Resolution standardization (typically 224×224 pixels for models like [PaliGemma](/index.php?title=PaliGemma&action=edit&redlink=1))[&#91;15&#93;](#cite_note-github-allenzren-15)

### Language Module

The language module integrates visual information with natural language instructions and performs cognitive reasoning. This typically involves:

- Pre-trained [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) such as [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1), [PaLM](/index.php?title=PaLM&action=edit&redlink=1), or [Qwen](/wiki/qwen)

- Token-based processing of both visual and linguistic inputs

- Cross-attention mechanisms between vision and language modalities[&#91;16&#93;](#cite_note-smolvla-16)

### Action Module

The action module generates robot control commands. Two main approaches have emerged:

#### Discrete Action Tokenization

Early VLA models like RT-2 represent robot actions as discrete tokens within the language model's vocabulary. Actions are encoded as text strings (for example "1 128 91 241 5 101 127 217") that map to specific motor commands.[&#91;17&#93;](#cite_note-rt2-website-17)

#### Continuous Action Generation

More recent models employ continuous action generation through:

- **Flow Matching**: Used in models like π0, enabling direct prediction of continuous action sequences at high frequencies (up to 50Hz)[&#91;18&#93;](#cite_note-pi0-blog-18)

- **Diffusion Models**: Applied in models like [CogACT](/index.php?title=CogACT&action=edit&redlink=1) for generating smooth, multi-modal action distributions[&#91;14&#93;](#cite_note-cogact-14)

- **FAST Tokenization**: Frequency-space Action Sequence Tokenization using [Discrete Cosine Transform](/index.php?title=Discrete_Cosine_Transform&action=edit&redlink=1) for efficient autoregressive generation[&#91;19&#93;](#cite_note-huggingface-pi0-19)

## Training

### Data Requirements

VLA models are typically trained on two types of data:

1. **Internet-scale vision-language data**: Provides semantic understanding and reasoning capabilities

2. **Robot demonstration data**: Teaches specific motor control and manipulation skills

The [Open X-Embodiment dataset](/index.php?title=Open_X-Embodiment_dataset&action=edit&redlink=1), released in October 2023, represents the largest collection of robot learning data, containing:[&#91;20&#93;](#cite_note-oxe-arxiv-20)

- Over 1 million real robot trajectories

- 22 different robot embodiments

- 527 skills across 160,266 tasks

- Data from 21 institutions worldwide[&#91;21&#93;](#cite_note-oxe-website-21)

### Training Methodology

VLA training typically involves:

1. **[Pre-training](/wiki/pre-training)**: Starting from a pre-trained VLM to inherit semantic knowledge

2. **[Co-fine-tuning](/index.php?title=Co-fine-tuning&action=edit&redlink=1)**: Training on both vision-language tasks and robot control data simultaneously

3. **[Action representation learning](/index.php?title=Action_representation_learning&action=edit&redlink=1)**: Teaching the model to output appropriate action tokens or continuous values

4. **[Multi-task learning](/index.php?title=Multi-task_learning&action=edit&redlink=1)**: Training on diverse tasks to improve generalization[&#91;22&#93;](#cite_note-github-openvla-22)

## Notable Models

### [RT-2](/index.php?title=RT-2&action=edit&redlink=1) (Robotic Transformer 2)

Developed by [Google DeepMind](/wiki/google_deepmind), RT-2 was the first model to be explicitly called a VLA. It comes in two variants:

- A 12B parameter version based on PaLM-E

- A 55B parameter version based on PaLI-X[&#91;11&#93;](#cite_note-infoq-rt2-11)

Key capabilities include:

- Understanding of spatial relationships and object properties

- Chain-of-thought reasoning for complex tasks

- Generalization to novel objects and instructions[&#91;23&#93;](#cite_note-the-decoder-23)

In over 6,000 physical trials, RT-2 doubled success on unseen tasks (62%) versus RT-1 (32%).[&#91;1&#93;](#cite_note-rt2-deepmind-1)

### [OpenVLA](/index.php?title=OpenVLA&action=edit&redlink=1)

Released in 2024, OpenVLA is a 7B-parameter open-source VLA that democratized access to VLA technology.[&#91;24&#93;](#cite_note-openvla-website-24) Key features include:

- Built on [Llama 2](/index.php?title=Llama_2&action=edit&redlink=1) 7B with fused SigLIP and DinoV2 vision encoders

- Trained on 970k robot manipulation trajectories

- Support for [LoRA](/wiki/lora) fine-tuning for efficient adaptation

- 16.5% better performance than RT-2-X (55B) despite having 7x fewer parameters[&#91;4&#93;](#cite_note-openvla-paper-4)

- Can be fine-tuned on a single GPU[&#91;25&#93;](#cite_note-huggingface-openvla-25)

### [π0](/index.php?title=%CE%A00&action=edit&redlink=1) (Pi-Zero)

Developed by [Physical Intelligence](/index.php?title=Physical_Intelligence&action=edit&redlink=1), π0 introduced several innovations:[&#91;26&#93;](#cite_note-pi0-infoq-26)

- Full upper-body humanoid control including individual finger movements

- Multi-robot collaboration capabilities

- Flow matching for high-frequency (50Hz) continuous control

- Training on data from 7 robotic platforms and 68 unique tasks[&#91;27&#93;](#cite_note-newatlas-27)

### [π0.5](/index.php?title=%CE%A00.5&action=edit&redlink=1)

An extension of π0 that demonstrates "open-world generalization":[&#91;28&#93;](#cite_note-pi05-blog-28)

- Can operate in entirely new environments not seen during training

- Performs long-horizon tasks like cleaning kitchens or bedrooms

- Uses hierarchical reasoning with high-level language planning and low-level motor control

- Co-trained on heterogeneous data sources for improved transfer learning[&#91;29&#93;](#cite_note-mikekalil-29)

### [Gemini Robotics](/index.php?title=Gemini_Robotics&action=edit&redlink=1)

[Google DeepMind](/wiki/google_deepmind)'s Gemini Robotics on-device VLA executes dexterous tasks without cloud connectivity, critical for privacy-sensitive sites and edge deployment.[&#91;30&#93;](#cite_note-gemini-verge-30)

### Other Notable Models

| Model | Developer | Key Features | Parameters |
| --- | --- | --- | --- |
| **[Helix](/index.php?title=Helix&action=edit&redlink=1)** | [Figure AI](/wiki/figure_ai) | First VLA for full humanoid upper-body control, multi-robot collaboration, deployed in BMW factories, runs entirely on embedded GPUs | 7B (System 2), 80M (System 1)[&#91;31&#93;](#cite_note-helix-31) |
| **[VLAS](/index.php?title=VLAS&action=edit&redlink=1)** | Various researchers | First end-to-end model integrating speech modality for robot manipulation | Not specified[&#91;32&#93;](#cite_note-vlas-32) |
| **[CogACT](/index.php?title=CogACT&action=edit&redlink=1)** | Various researchers | Uses Diffusion Transformer for action decoding, strong performance on SIMPLER benchmark | ~7.3B total[&#91;14&#93;](#cite_note-cogact-14) |
| **[SmolVLA](/wiki/smolvla)** | [Hugging Face](/wiki/hugging_face) | Lightweight model optimized for CPU inference and consumer hardware, asynchronous inference stack | 450M[&#91;16&#93;](#cite_note-smolvla-16) |
| **[MiniVLA](/index.php?title=MiniVLA&action=edit&redlink=1)** | [Stanford AI Lab](/index.php?title=Stanford_AI_Lab&action=edit&redlink=1) | 7x smaller than OpenVLA with improved inference speed | ~1B[&#91;33&#93;](#cite_note-minivla-33) |

## Applications

VLA models have demonstrated capabilities across a wide range of robotic manipulation tasks:

### Basic Manipulation

- Pick and place operations

- Opening and closing drawers, doors, and containers

- Grasping objects of various shapes and materials

- Tool use and manipulation[&#91;34&#93;](#cite_note-benchmarking-34)

### Complex Tasks

- Folding laundry from a hamper

- Assembling cardboard boxes

- Table bussing and kitchen cleaning

- Multi-step meal preparation

- Collaborative tasks between multiple robots[&#91;35&#93;](#cite_note-pi0-arxiv-35)

### Industry Applications

- **Manufacturing**: VLA-powered robots automate assembly, packaging, and quality control tasks. [Figure AI](/wiki/figure_ai)'s Helix has been deployed in [BMW](/index.php?title=BMW&action=edit&redlink=1) factories for industrial automation.[&#91;31&#93;](#cite_note-helix-31)

- **Logistics and Warehousing**: Zero-shot grasping of unseen SKUs, sorting packages, and loading/unloading operations. Fine-tuning OpenVLA with few-shot LoRA achieves reliable warehouse picking.[&#91;24&#93;](#cite_note-openvla-website-24)

- **Healthcare**: Assisting with delivering supplies, patient care support, and simple medical procedures, freeing healthcare professionals for more complex tasks.[&#91;3&#93;](#cite_note-labellerr-3)

- **Home and Personal Assistance**: Cooking, cleaning, laundry tasks, and providing companionship and assistance to the elderly and people with disabilities.[&#91;3&#93;](#cite_note-labellerr-3)

- **Disaster Response**: Search and rescue operations, damage assessment, and emergency supply delivery in hazardous environments.[&#91;3&#93;](#cite_note-labellerr-3)

### Emerging Applications

Evidence suggests VLAs are becoming key in fields like:

- [Autonomous vehicles](/index.php?title=Autonomous_vehicles&action=edit&redlink=1) for complex navigation and interaction

- [Precision agriculture](/index.php?title=Precision_agriculture&action=edit&redlink=1) for crop monitoring and harvesting

- [Augmented reality](/wiki/augmented_reality) navigation systems

- Medical robotics for surgical assistance[&#91;8&#93;](#cite_note-survey24-8)

### Emergent Capabilities

VLA models have shown emergent behaviors not explicitly programmed:

- Understanding spatial relationships (for example "pick up the object to the left of the red block")

- Semantic reasoning (for example identifying which object could serve as an improvised hammer)

- Adapting to novel objects and environments

- Following abstract instructions (for example "clean the kitchen")[&#91;1&#93;](#cite_note-rt2-deepmind-1)

## Technical Challenges

### Action Space Representation

One of the key challenges in VLA development is representing the continuous, high-dimensional action space of robots in a way that can be effectively learned and generated by neural networks. Solutions include:

- Discretization into action tokens

- Flow matching for continuous generation

- Hierarchical action representations

- Action chunking for temporal coherence[&#91;36&#93;](#cite_note-awesome-vla-36)

### Real-Time Performance

Achieving real-time control (typically 10-50Hz) while running large neural networks remains challenging. Approaches to address this include:

- Model quantization and optimization

- Efficient inference architectures

- Hardware acceleration

- Asynchronous inference pipelines[&#91;37&#93;](#cite_note-jetson-37)

### Generalization

While VLAs show improved generalization compared to traditional approaches, challenges remain:

- Sim-to-real transfer

- Cross-embodiment transfer between different robot types

- Long-horizon task planning

- Robustness to environmental variations[&#91;38&#93;](#cite_note-knowledge-insulation-38)

### Safety and Reliability

Ensuring the safety and reliability of VLA-powered robots is critical, especially in human-centric environments. Robots must operate safely and predictably, even in the presence of unexpected events and disturbances. Current access to many VLA models remains gated to mitigate potential misuse.[&#91;30&#93;](#cite_note-gemini-verge-30)

### Data Efficiency

Training VLA models requires large amounts of data, which can be expensive and time-consuming to collect. Improving the data efficiency of VLA models through better architectures and training techniques is an active area of research.[&#91;25&#93;](#cite_note-huggingface-openvla-25)

### Ethical Considerations

The development and deployment of VLA-powered robots raise several ethical concerns that need careful consideration:

- Job displacement in manufacturing and service sectors

- Privacy concerns with robots operating in personal spaces

- Bias in decision-making inherited from training data

- Ensuring equitable access to beneficial robotic technologies[&#91;3&#93;](#cite_note-labellerr-3)

## Future Directions

### Research Areas

Active areas of VLA research include:

- **Multi-modal integration**: Incorporating tactile, force, and proprioceptive feedback beyond vision and language

- **Self-improvement**: Enabling robots to learn from their own experience through reinforcement learning

- **Long-horizon planning**: Improving capabilities for complex, multi-step tasks requiring extended reasoning

- **Safety and robustness**: Ensuring reliable operation in human environments with formal verification methods

- **Efficiency**: Reducing computational requirements for deployment on edge devices

- **Agentic AI adaptation**: Enabling VLAs to adapt more independently to new tasks without extensive fine-tuning[&#91;8&#93;](#cite_note-survey24-8)

### Industry Adoption

VLA models are beginning to see widespread adoption in:

- Manufacturing and assembly lines

- Warehouse automation and logistics

- Service robotics in hospitality and retail

- Healthcare applications and elderly care

- Home assistance and personal robotics

- Agricultural automation[&#91;5&#93;](#cite_note-black-coffee-5)

## See Also

- [Vision-language model](/index.php?title=Vision-language_model&action=edit&redlink=1)

- [Embodied artificial intelligence](/index.php?title=Embodied_artificial_intelligence&action=edit&redlink=1)

- [Robot learning](/index.php?title=Robot_learning&action=edit&redlink=1)

- [Transformer (machine learning model)](/index.php?title=Transformer_(machine_learning_model)&action=edit&redlink=1)

- [Foundation model](/wiki/foundation_model)

- [Open X-Embodiment](/index.php?title=Open_X-Embodiment&action=edit&redlink=1)

- [Multimodal learning](/index.php?title=Multimodal_learning&action=edit&redlink=1)

- [SayCan](/index.php?title=SayCan&action=edit&redlink=1)

- [PaLM-E](/index.php?title=PaLM-E&action=edit&redlink=1)

- [Large action model](/index.php?title=Large_action_model&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-rt2-deepmind_1-0) [1.1](#cite_ref-rt2-deepmind_1-1) [1.2](#cite_ref-rt2-deepmind_1-2) ["RT-2: New model translates vision and language into action"](https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/).&#32;Google DeepMind.&#32;[https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/](https://deepmind.google/discover/blog/rt-2-new-model-translates-vision-and-language-into-action/).

2. [↑](#cite_ref-wikipedia-vla_2-0) ["Vision-language-action model - Wikipedia"](https://en.wikipedia.org/wiki/Vision-language-action_model).&#32;[https://en.wikipedia.org/wiki/Vision-language-action_model](https://en.wikipedia.org/wiki/Vision-language-action_model).

3. ↑ [3.0](#cite_ref-labellerr_3-0) [3.1](#cite_ref-labellerr_3-1) [3.2](#cite_ref-labellerr_3-2) [3.3](#cite_ref-labellerr_3-3) [3.4](#cite_ref-labellerr_3-4) [3.5](#cite_ref-labellerr_3-5) ["Vision-Language-Action Models"](https://labellerr.com/blog/vision-language-action-models/).&#32;Labellerr.&#32;[https://labellerr.com/blog/vision-language-action-models/](https://labellerr.com/blog/vision-language-action-models/).

4. ↑ [4.0](#cite_ref-openvla-paper_4-0) [4.1](#cite_ref-openvla-paper_4-1) Kim, Moo Jin et al.&#32;(2024).&#32;["OpenVLA: An Open-Source Vision-Language-Action Model"](https://arxiv.org/abs/2406.09246).&#32;[https://arxiv.org/abs/2406.09246](https://arxiv.org/abs/2406.09246).

5. ↑ [5.0](#cite_ref-black-coffee_5-0) [5.1](#cite_ref-black-coffee_5-1) ["Vision-Language-Action (VLA) Models: LLMs for robots"](https://www.blackcoffeerobotics.com/blog/vision-language-action-vla-models-llms-for-robots).&#32;Black Coffee Robotics.&#32;[https://www.blackcoffeerobotics.com/blog/vision-language-action-vla-models-llms-for-robots](https://www.blackcoffeerobotics.com/blog/vision-language-action-vla-models-llms-for-robots).

6. [↑](#cite_ref-rt2-blog_6-0) ["What is RT-2? Google DeepMind's vision-language-action model for robotics"](https://blog.google/technology/ai/google-deepmind-rt2-robotics-vla-model/).&#32;2023-12-05.&#32;[https://blog.google/technology/ai/google-deepmind-rt2-robotics-vla-model/](https://blog.google/technology/ai/google-deepmind-rt2-robotics-vla-model/).

7. [↑](#cite_ref-deepmind-scaling_7-0) ["Scaling up learning across many different robot types"](https://deepmind.google/discover/blog/scaling-up-learning-across-many-different-robot-types/).&#32;Google DeepMind.&#32;[https://deepmind.google/discover/blog/scaling-up-learning-across-many-different-robot-types/](https://deepmind.google/discover/blog/scaling-up-learning-across-many-different-robot-types/).

8. ↑ [8.0](#cite_ref-survey24_8-0) [8.1](#cite_ref-survey24_8-1) [8.2](#cite_ref-survey24_8-2) ["A Survey on Vision-Language-Action Models for Embodied AI"](https://arxiv.org/abs/2405.14093).&#32;2024.&#32;[https://arxiv.org/abs/2405.14093](https://arxiv.org/abs/2405.14093).

9. [↑](#cite_ref-learnopencv_9-0) ["Vision Language Action Models (VLA) & Policies for Robots"](https://learnopencv.com/vision-language-action-models-lerobot-policy/).&#32;2025-04-11.&#32;[https://learnopencv.com/vision-language-action-models-lerobot-policy/](https://learnopencv.com/vision-language-action-models-lerobot-policy/).

10. [↑](#cite_ref-rt1-blog_10-0) ["RT-1: Robotics Transformer for real-world control at scale"](https://research.google/blog/rt-1-robotics-transformer-for-real-world-control-at-scale/).&#32;Google Research.&#32;[https://research.google/blog/rt-1-robotics-transformer-for-real-world-control-at-scale/](https://research.google/blog/rt-1-robotics-transformer-for-real-world-control-at-scale/).

11. ↑ [11.0](#cite_ref-infoq-rt2_11-0) [11.1](#cite_ref-infoq-rt2_11-1) ["Google DeepMind Announces LLM-Based Robot Controller RT-2"](https://www.infoq.com/news/2023/10/deepmind-robot-transformer/).&#32;2023-10-17.&#32;[https://www.infoq.com/news/2023/10/deepmind-robot-transformer/](https://www.infoq.com/news/2023/10/deepmind-robot-transformer/).

12. [↑](#cite_ref-maginative_12-0) ["Google DeepMind Unveils RT-2, Bringing Robots Closer to General Intelligence"](https://www.maginative.com/article/google-deepmind-unveils-rt-2-bringing-robots-closer-to-general-intelligence/).&#32;2023-07-28.&#32;[https://www.maginative.com/article/google-deepmind-unveils-rt-2-bringing-robots-closer-to-general-intelligence/](https://www.maginative.com/article/google-deepmind-unveils-rt-2-bringing-robots-closer-to-general-intelligence/).

13. [↑](#cite_ref-rtinsights_13-0) ["Enhanced Robotic Control with DeepMind RT-2"](https://www.rtinsights.com/google-deepmind-unveils-enhanced-robotic-control-with-rt-2/).&#32;2023-09-12.&#32;[https://www.rtinsights.com/google-deepmind-unveils-enhanced-robotic-control-with-rt-2/](https://www.rtinsights.com/google-deepmind-unveils-enhanced-robotic-control-with-rt-2/).

14. ↑ [14.0](#cite_ref-cogact_14-0) [14.1](#cite_ref-cogact_14-1) [14.2](#cite_ref-cogact_14-2) ["CogACT: A Foundational Vision-Language-Action Model for Synergizing Cognition and Action in Robotic Manipulation"](https://cogact.github.io/).&#32;[https://cogact.github.io/](https://cogact.github.io/).

15. [↑](#cite_ref-github-allenzren_15-0) ["Re-implementation of pi0 vision-language-action (VLA) model from Physical Intelligence"](https://github.com/allenzren/open-pi-zero).&#32;GitHub.&#32;[https://github.com/allenzren/open-pi-zero](https://github.com/allenzren/open-pi-zero).

16. ↑ [16.0](#cite_ref-smolvla_16-0) [16.1](#cite_ref-smolvla_16-1) ["SmolVLA: Efficient Vision-Language-Action Model trained on Lerobot Community Data"](https://huggingface.co/blog/smolvla).&#32;Hugging Face.&#32;[https://huggingface.co/blog/smolvla](https://huggingface.co/blog/smolvla).

17. [↑](#cite_ref-rt2-website_17-0) ["RT-2: Vision-Language-Action Models"](https://robotics-transformer2.github.io/).&#32;[https://robotics-transformer2.github.io/](https://robotics-transformer2.github.io/).

18. [↑](#cite_ref-pi0-blog_18-0) ["Our First Generalist Policy"](https://www.physicalintelligence.company/blog/pi0).&#32;Physical Intelligence.&#32;2024-10-31.&#32;[https://www.physicalintelligence.company/blog/pi0](https://www.physicalintelligence.company/blog/pi0).

19. [↑](#cite_ref-huggingface-pi0_19-0) ["π0 and π0-FAST: Vision-Language-Action Models for General Robot Control"](https://huggingface.co/blog/pi0).&#32;Hugging Face.&#32;[https://huggingface.co/blog/pi0](https://huggingface.co/blog/pi0).

20. [↑](#cite_ref-oxe-arxiv_20-0) ["Open X-Embodiment: Robotic Learning Datasets and RT-X Models"](https://arxiv.org/abs/2310.08864).&#32;2023.&#32;[https://arxiv.org/abs/2310.08864](https://arxiv.org/abs/2310.08864).

21. [↑](#cite_ref-oxe-website_21-0) ["Open X-Embodiment: Robotic Learning Datasets and RT-X Models"](https://robotics-transformer-x.github.io/).&#32;[https://robotics-transformer-x.github.io/](https://robotics-transformer-x.github.io/).

22. [↑](#cite_ref-github-openvla_22-0) ["OpenVLA: An open-source vision-language-action model for robotic manipulation"](https://github.com/openvla/openvla).&#32;GitHub.&#32;[https://github.com/openvla/openvla](https://github.com/openvla/openvla).

23. [↑](#cite_ref-the-decoder_23-0) ["Google Deepmind's latest AI model RT-2 "can speak robot""](https://the-decoder.com/google-deepminds-latest-ai-model-rt-2-can-speak-robot/).&#32;2023-07-29.&#32;[https://the-decoder.com/google-deepminds-latest-ai-model-rt-2-can-speak-robot/](https://the-decoder.com/google-deepminds-latest-ai-model-rt-2-can-speak-robot/).

24. ↑ [24.0](#cite_ref-openvla-website_24-0) [24.1](#cite_ref-openvla-website_24-1) ["OpenVLA: An Open-Source Vision-Language-Action Model"](https://openvla.github.io/).&#32;[https://openvla.github.io/](https://openvla.github.io/).

25. ↑ [25.0](#cite_ref-huggingface-openvla_25-0) [25.1](#cite_ref-huggingface-openvla_25-1) ["OpenVLA Paper"](https://huggingface.co/papers/2506.01844).&#32;Hugging Face.&#32;[https://huggingface.co/papers/2506.01844](https://huggingface.co/papers/2506.01844).

26. [↑](#cite_ref-pi0-infoq_26-0) ["Physical Intelligence Unveils Robotics Foundation Model Pi-Zero"](https://www.infoq.com/news/2024/12/pi-zero-robot/).&#32;2024-12-03.&#32;[https://www.infoq.com/news/2024/12/pi-zero-robot/](https://www.infoq.com/news/2024/12/pi-zero-robot/).

27. [↑](#cite_ref-newatlas_27-0) ["Incredible generalist robots show us a future free of chores"](https://newatlas.com/robotics/pi-generalist-autonomous-robot/).&#32;2024-11-01.&#32;[https://newatlas.com/robotics/pi-generalist-autonomous-robot/](https://newatlas.com/robotics/pi-generalist-autonomous-robot/).

28. [↑](#cite_ref-pi05-blog_28-0) ["A VLA with Open-World Generalization"](https://www.physicalintelligence.company/blog/pi05).&#32;Physical Intelligence.&#32;2025-04-22.&#32;[https://www.physicalintelligence.company/blog/pi05](https://www.physicalintelligence.company/blog/pi05).

29. [↑](#cite_ref-mikekalil_29-0) ["Physical Intelligence's π0.5 VLA with Open-World Generalization"](https://mikekalil.com/blog/pi-vla-open-world-generalization/).&#32;2025-04-23.&#32;[https://mikekalil.com/blog/pi-vla-open-world-generalization/](https://mikekalil.com/blog/pi-vla-open-world-generalization/).

30. ↑ [30.0](#cite_ref-gemini-verge_30-0) [30.1](#cite_ref-gemini-verge_30-1) ["Google DeepMind's optimized AI model runs directly on robots"](https://theverge.com/google-deepmind-optimized-ai-model-robots).&#32;The Verge.&#32;2024-06-24.&#32;[https://theverge.com/google-deepmind-optimized-ai-model-robots](https://theverge.com/google-deepmind-optimized-ai-model-robots).

31. ↑ [31.0](#cite_ref-helix_31-0) [31.1](#cite_ref-helix_31-1) ["Helix: A Vision-Language-Action Model for Generalist Humanoid Control"](https://www.figure.ai/news/helix).&#32;Figure.&#32;[https://www.figure.ai/news/helix](https://www.figure.ai/news/helix).

32. [↑](#cite_ref-vlas_32-0) ["VLAS: Vision-Language-Action Model with Speech Instructions for Customized Robot Manipulation"](https://openreview.net/forum?id=K4FAFNRpko).&#32;OpenReview.&#32;[https://openreview.net/forum?id=K4FAFNRpko](https://openreview.net/forum?id=K4FAFNRpko).

33. [↑](#cite_ref-minivla_33-0) ["MiniVLA: A Better VLA with a Smaller Footprint"](http://ai.stanford.edu/blog/minivla/).&#32;SAIL Blog.&#32;2024-12-12.&#32;[http://ai.stanford.edu/blog/minivla/](http://ai.stanford.edu/blog/minivla/).

34. [↑](#cite_ref-benchmarking_34-0) ["Benchmarking Vision, Language, & Action Models on Robotic Learning Tasks"](https://arxiv.org/abs/2411.05821).&#32;2024.&#32;[https://arxiv.org/abs/2411.05821](https://arxiv.org/abs/2411.05821).

35. [↑](#cite_ref-pi0-arxiv_35-0) ["π₀: A Vision-Language-Action Flow Model for General Robot Control"](https://arxiv.org/html/2410.24164v1).&#32;[https://arxiv.org/html/2410.24164v1](https://arxiv.org/html/2410.24164v1).

36. [↑](#cite_ref-awesome-vla_36-0) ["A curated list of state-of-the-art research in embodied AI"](https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln).&#32;GitHub.&#32;[https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln](https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln).

37. [↑](#cite_ref-jetson_37-0) ["OpenVLA - NVIDIA Jetson AI Lab"](https://www.jetson-ai-lab.com/openvla.html).&#32;NVIDIA.&#32;[https://www.jetson-ai-lab.com/openvla.html](https://www.jetson-ai-lab.com/openvla.html).

38. [↑](#cite_ref-knowledge-insulation_38-0) ["VLAs that Train Fast, Run Fast, and Generalize Better"](https://www.physicalintelligence.company/research/knowledge_insulation).&#32;Physical Intelligence.&#32;[https://www.physicalintelligence.company/research/knowledge_insulation](https://www.physicalintelligence.company/research/knowledge_insulation).

## External Links

- [Open X-Embodiment Dataset Official Website](https://robotics-transformer-x.github.io/)

- [OpenVLA Project Page](https://openvla.github.io/)

- [Physical Intelligence Company Website](https://www.physicalintelligence.company/)

- [OpenVLA GitHub Repository](https://github.com/openvla/openvla)

- [Physical Intelligence OpenPi Repository](https://github.com/Physical-Intelligence/openpi)

- [OpenVLA Model Collection on Hugging Face](https://huggingface.co/collections/openvla)