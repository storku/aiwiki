---
title: "Isaac GR00T"
slug: "isaac_gr00t"
---[Template:Infobox software](/index.php?title=Template:Infobox_software&action=edit&redlink=1)

![Isaac GR00T1.jpg](/images/thumb/b/b4/Isaac_GR00T1.jpg/300px-Isaac_GR00T1.jpg)

**Isaac GR00T** (short for **Generalist Robot 00 Technology**) is an [artificial intelligence](/wiki/artificial_intelligence) and robotics project by [NVIDIA](/wiki/nvidia) that produced a general-purpose [foundation model](/wiki/foundation_model) for [humanoid robot](/index.php?title=Humanoid_robot&action=edit&redlink=1) control and reasoning.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1) It is a multimodal [vision-language-action model](/wiki/vision-language-action_model) ([VLA](/wiki/vla)) designed to enable humanoid robots to understand [natural language](/index.php?title=Natural_language&action=edit&redlink=1) instructions and learn new skills by observing human actions, thereby acquiring coordination, dexterity and adaptability in real-world environments.[&#91;2&#93;](#cite_note-VentureBeat2024-2)[&#91;3&#93;](#cite_note-PCMag2024-3)

Announced as "Project GR00T" at NVIDIA's [GTC 2024](/index.php?title=GPU_Technology_Conference&action=edit&redlink=1) conference, it was developed as part of the NVIDIA [Isaac robotics platform](/index.php?title=Isaac_(robotics_platform)&action=edit&redlink=1) to accelerate breakthroughs in [embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1) and general-purpose robotics.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;4&#93;](#cite_note-InvestorRelations2024-4) The first model, **Isaac GR00T N1**, was released in 2025 as the world's first open foundation model for generalized humanoid robot skills and reasoning.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5) NVIDIA has since released iterative versions (N1.5 and N1.6) with enhanced capabilities such as improved environment adaptation and integration of higher-level reasoning modules, making Isaac GR00T a centerpiece in efforts to advance "generalist" robots that can perform diverse tasks.[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6)[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

## Development History

### Project GR00T launch (2024)

NVIDIA CEO [Jensen Huang](/index.php?title=Jensen_Huang&action=edit&redlink=1) unveiled Project GR00T in March 2024 at the [GPU Technology Conference](/index.php?title=GPU_Technology_Conference&action=edit&redlink=1) (GTC). It was introduced as a generative AI foundation model initiative for humanoid robots, alongside other major updates to the Isaac platform like the [Jetson Thor](/wiki/jetson_thor) humanoid robot computer.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;4&#93;](#cite_note-InvestorRelations2024-4) Project GR00T (pronounced "Groot") was envisioned to provide humanoid robots with general-purpose cognitive abilities – robots powered by GR00T would be designed to understand natural language and emulate human movements to quickly learn coordination and other skills for navigating and interacting with the real world.[&#91;2&#93;](#cite_note-VentureBeat2024-2)[&#91;3&#93;](#cite_note-PCMag2024-3)

NVIDIA announced collaborations with numerous humanoid robotics companies including [1X Technologies](/index.php?title=1X_Technologies&action=edit&redlink=1), [Agility Robotics](/index.php?title=Agility_Robotics&action=edit&redlink=1), [Apptronik](/index.php?title=Apptronik&action=edit&redlink=1), [Boston Dynamics](/index.php?title=Boston_Dynamics&action=edit&redlink=1), [Figure AI](/wiki/figure_ai), [Fourier Intelligence](/index.php?title=Fourier_Intelligence&action=edit&redlink=1), [Sanctuary AI](/index.php?title=Sanctuary_AI&action=edit&redlink=1), [Unitree Robotics](/index.php?title=Unitree_Robotics&action=edit&redlink=1), and [XPENG Robotics](/index.php?title=XPENG_Robotics&action=edit&redlink=1) to develop the GR00T models and ensure they address real-world use cases.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;8&#93;](#cite_note-Apptronik2024-8) Early demonstrations at GTC 2024 showed concept videos of GR00T-driven robots (such as Agility's Digit and others) performing a variety of tasks via learned skills.[&#91;9&#93;](#cite_note-TechCrunch2024-9)[&#91;10&#93;](#cite_note-RobotReport2024-10)

### Isaac GR00T N1 (2025)

At GTC 2025, NVIDIA announced the first GR00T model, **Isaac GR00T N1**, and made it available as an open-source foundation model for the robotics community.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;11&#93;](#cite_note-TechCrunch2025-11) GR00T N1 is described as the world's first open, fully customizable humanoid robot foundation model, and the first of a family of models that NVIDIA plans to continually pretrain and release to developers.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;12&#93;](#cite_note-HuggingFaceN1-12)

The N1 model features a **dual-system architecture** inspired by human cognition: a "System 2" vision-language model that reasons about its environment and plans actions, and a "System 1" action policy model that translates those plans into continuous robot movements in real time.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5) System 1 (fast-thinking, reflexive) was trained on a large corpus of human demonstration data and millions of synthetic trajectories, while System 2 (slow-thinking, deliberative) uses a transformer-based vision-language model to interpret visual inputs and language instructions.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;14&#93;](#cite_note-LearnOpenCV-14)

This design allows GR00T N1 to generalize across many tasks – for example, grasping and moving objects with one or both hands, transferring items between its hands, and performing multi-step operations that combine those skills.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5) Developers can further fine-tune ("post-train") GR00T N1 with additional real or synthetic data for their specific robot embodiment or task.[&#91;15&#93;](#cite_note-GitHubGR00T-15)[&#91;12&#93;](#cite_note-HuggingFaceN1-12)

To address the substantial data requirements of training a generalist robot model, NVIDIA also introduced a synthetic data generation workflow (an "Isaac GR00T blueprint") at GTC 2025. Using the [NVIDIA Omniverse](/wiki/nvidia_omniverse) platform and AI-based world models, this pipeline generated hundreds of thousands of simulated robot motion trajectories to augment GR00T's training data.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;16&#93;](#cite_note-DreamsBlог-16) In one experiment, NVIDIA produced about 780,000 synthetic motion sequences (equivalent to 6,500 hours of human demonstrations) within 11 hours, then combined that synthetic data with real data to improve GR00T N1's performance by roughly 40% compared to using only real-world data.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;16&#93;](#cite_note-DreamsBlог-16)

NVIDIA released the GR00T N1 model, along with a large open-source "Physical AI" dataset of robot trajectories, on platforms like [Hugging Face](/wiki/hugging_face) and [GitHub](/index.php?title=GitHub&action=edit&redlink=1) to encourage adoption and further research.[&#91;12&#93;](#cite_note-HuggingFaceN1-12)[&#91;15&#93;](#cite_note-GitHubGR00T-15)[&#91;17&#93;](#cite_note-PhysicalAI-17) In his 2025 keynote, Huang showcased GR00T N1's capabilities by having a [1X](/index.php?title=1X_Technologies&action=edit&redlink=1) Neo humanoid robot autonomously perform domestic tidying tasks using a policy built on GR00T N1.[&#91;18&#93;](#cite_note-1XTech2025-18) According to 1X, only minimal additional training was needed to deploy GR00T on their robot (demonstrating the model's sample-efficient learning), and the system significantly boosted the robot's reasoning and manipulation skills.[&#91;18&#93;](#cite_note-1XTech2025-18)

Other leading humanoid projects including [Agility Robotics](/index.php?title=Agility_Robotics&action=edit&redlink=1), [Boston Dynamics](/index.php?title=Boston_Dynamics&action=edit&redlink=1), Mentee Robotics, and NEURA Robotics were given early access to GR00T N1 to experiment with their own robots as well.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;19&#93;](#cite_note-BostonDynamics2025-19)[&#91;20&#93;](#cite_note-AgilityRobotics2025-20)

### Updates: GR00T N1.5 and N1.6

In May 2025 (at [COMPUTEX](/index.php?title=COMPUTEX&action=edit&redlink=1)), NVIDIA announced an updated model called **Isaac GR00T N1.5**, the first major refinement to the GR00T foundation model.[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6)[&#91;21&#93;](#cite_note-SPEdge2025-21) GR00T N1.5 introduced better adaptability to new environments and the ability to recognize specific objects via natural-language instructions.[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6)[&#91;22&#93;](#cite_note-ITBriefAsia-22)

Using a new workflow named "Isaac GR00T-Dreams," NVIDIA generated vast amounts of synthetic motion data (nicknamed "neural trajectories") to rapidly retrain the model.[&#91;16&#93;](#cite_note-DreamsBlог-16)[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6) This approach allowed NVIDIA Research to update GR00T N1 into N1.5 in just 36 hours, a process that would have taken nearly three months if relying on manual data collection.[&#91;16&#93;](#cite_note-DreamsBlог-16)[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6) The N1.5 model achieved significantly higher success rates on common manipulation tasks (such as sorting and object storage) compared to N1, with 93.3% language command following on GR-1 manipulation tasks versus 46.6% for N1.[&#91;14&#93;](#cite_note-LearnOpenCV-14)[&#91;23&#93;](#cite_note-HuggingFaceN1.5-23)

Early adopters of the GR00T N1-series, including companies like AeiROBOT, Foxlink, Lightwheel, and NEURA Robotics, began using the models in real-world pilots — for example, to enable natural language pick-and-place commands in industrial settings, improve the flexibility of factory robot arms, validate synthetic training data for faster deployments, and accelerate development of household service robots.[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6)[&#91;24&#93;](#cite_note-Marvik2025-24)

By late 2025, NVIDIA further advanced the platform with **Isaac GR00T N1.6**. Announced at the Conference on Robot Learning (CoRL 2025), GR00T N1.6 integrated an advanced reasoning module called "NVIDIA Cosmos Reason" to give the robot higher-level cognitive skills.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7) Cosmos Reason is an open vision-language model that serves as the robot's "deep thinking" brain, capable of turning vague or high-level instructions into detailed step-by-step action plans using prior knowledge, common sense, and physical reasoning.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)[&#91;25&#93;](#cite_note-Cosmos-25) With this addition, GR00T N1.6 can handle a broader "long tail" of novel situations that were not explicitly seen in training, improving the robot's ability to generalize to new tasks and environments.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

GR00T N1.6 also enabled more complex coordinated behaviors – for instance, it allows a humanoid to move and manipulate objects simultaneously with greater balance and dexterity (such as opening a heavy door with one hand while carrying an object in the other).[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7) Alongside GR00T N1.6, NVIDIA open-sourced its high-fidelity [Newton physics engine](/index.php?title=Newton_(physics_engine)&action=edit&redlink=1) (co-developed with [Google DeepMind](/wiki/google_deepmind) and [Disney Research](/index.php?title=Disney_Research&action=edit&redlink=1)) to enhance simulation realism for robot training.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)[&#91;26&#93;](#cite_note-Newton-26) The GR00T N1.6 model (and associated tools in the Isaac platform) were made available to researchers via NVIDIA Isaac Lab and Hugging Face, underscoring NVIDIA's commitment to an open, cloud-to-robot ecosystem for "physical AI" development.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

#### Version history

| Version | Release date | Key features |
| --- | --- | --- |
| **Isaac GR00T N1** | March 18, 2025 | First open foundation model for humanoid robots; dual-system (two-tier) architecture combining a vision-language reasoning module (2.2B parameters, 1.34B in VLM) with a real-time action generation module; trained on diverse real, human-video, and synthetic data; can be post-trained for specific robot embodiments; 63.9 ms inference time on L40 GPU. |
| **Isaac GR00T N1.5** | May 18, 2025 | Improved generalization to new environments (3B parameters); can interpret object-specific instructions; higher success rate on manipulation tasks (93.3% language following vs 46.6% for N1); created using the GR00T-Dreams synthetic data pipeline, enabling rapid model update (36-hour retraining using AI-generated trajectories); frozen VLM architecture; upgraded Eagle 2.5 with enhanced grounding. |
| **Isaac GR00T N1.6** | September 29, 2025 | Integration of Cosmos Reason high-level VLM for common-sense reasoning; enhanced ability to handle ambiguous or novel instructions by planning with prior knowledge; supports simultaneous locomotion and manipulation (e.g. bimanual tasks while walking); part of an open-source release with the Newton physics engine; available soon on Hugging Face. |

## Architecture and Technology

Isaac GR00T is a **Vision-Language-Action (VLA)** model architecture that combines perception, language understanding, and motor control. It consists of two tightly coupled neural network modules that correspond to the dual-system design inspired by [dual process theory](/index.php?title=Dual_process_theory&action=edit&redlink=1) in human cognitive science.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)

### Dual-System Architecture

The high-level module (analogous to "System 2") is a transformer-based vision-language model (with pre-trained visual and language encoders) that interprets the robot's camera inputs and natural-language instructions to formulate an action plan.[&#91;13&#93;](#cite_note-Arxiv2025-13) In GR00T N1, this is based on the NVIDIA Eagle-2 VLM (built on SmolLM2-1.7B with 1.34 billion parameters and a SigLIP-2 image encoder), operating at 10 Hz on an [NVIDIA L40](/index.php?title=NVIDIA_L40&action=edit&redlink=1) GPU to reason about tasks and provide planning.[&#91;13&#93;](#cite_note-Arxiv2025-13)

The low-level module ("System 1") is a policy network implemented as a [diffusion-based](/wiki/diffusion_model) flow-matching [transformer](/wiki/transformer), which takes the high-level plan and generates precise, continuous control signals for the robot's actuators in real time at 120 Hz.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;12&#93;](#cite_note-HuggingFaceN1-12) This two-stage approach allows GR00T to combine deliberate reasoning with reflex-like execution – for example, System 2 might decide a sequence of steps to pick up and move an object, while System 1 handles the fine-grained coordination of the robot's joints to carry out those steps smoothly.[&#91;13&#93;](#cite_note-Arxiv2025-13)

### Technical Specifications

| Feature | Specification |
| --- | --- |
| **Model Type** | Vision-Language-Action (VLA) with Dual-System Architecture |
| **Total Parameters** | 2.2 Billion |
| **VLM (System 2)** | 1.34B parameters; based on NVIDIA Eagle-2 VLM (SmolLM2-1.7B + SigLIP-2 image encoder) |
| **Action Module (System 1)** | Diffusion Transformer (DiT) / Flow Matching Transformer |
| **Input Modalities** | 2D RGB Images (224×224); 1D State Vector ([proprioception](/index.php?title=Proprioception&action=edit&redlink=1)); 1D Language String (instruction); 1D Embodiment ID |
| **Output Format** | Continuous-value vectors for robot motor control (16-timestep action chunks) |
| **Inference Performance** | 63.9 ms for a chunk of 16 actions (L40 GPU with bf16); 47.88 ms on H100 GPU |
| **Control Frequency** | System 2: 10 Hz (reasoning); System 1: 120 Hz (action generation) |
| **Runtime Engine** | [TensorRT](/index.php?title=TensorRT&action=edit&redlink=1) |
| **Supported Hardware** | NVIDIA Ampere, Blackwell, Hopper, Lovelace; NVIDIA Jetson |

### Training Data and Methodology

The model accepts multiple input modalities simultaneously: visual observations (from the robot's cameras), a text-based or spoken instruction (natural language), and the robot's internal state (proprioceptive sensor readings). In addition, an **embodiment ID** is provided as input to inform the model which robot hardware configuration it is controlling.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;12&#93;](#cite_note-HuggingFaceN1-12) Internally, GR00T uses this embodiment identifier to handle different robot morphologies – the architecture includes separate learned parameters (such as a small MLP head) for each supported robot embodiment's action outputs, enabling one model to drive various robot types.[&#91;13&#93;](#cite_note-Arxiv2025-13)

This cross-embodiment design was validated by training GR00T N1 on data from multiple distinct humanoid robots, which allowed the model to successfully control a new humanoid with minimal additional training.[&#91;13&#93;](#cite_note-Arxiv2025-13) The output of the GR00T model is a continuous vector of motor commands (e.g. joint torques or velocities) that can be sent to the robot's control system to execute the desired actions.[&#91;13&#93;](#cite_note-Arxiv2025-13)

Training the GR00T foundation model required an unprecedented scale of data. NVIDIA's team assembled a heterogeneous dataset comprising **real robot demonstrations**, **human video demonstrations**, and **synthetically generated experiences** in a three-layer "Data Pyramid" strategy.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;14&#93;](#cite_note-LearnOpenCV-14) 

The **base layer** consists of internet-scale data including web videos and human egocentric footage from datasets like [Ego4D](/index.php?title=Ego4D&action=edit&redlink=1) and [EPIC-KITCHENS](/index.php?title=EPIC-KITCHENS&action=edit&redlink=1), trained on 18 quadrillion tokens including 2 million hours of video. This provides broad visual and linguistic understanding, teaching natural motion patterns and task semantics without requiring expensive robot demonstrations.[&#91;13&#93;](#cite_note-Arxiv2025-13)[&#91;25&#93;](#cite_note-Cosmos-25)

The **middle layer** consists of massive synthetic datasets generated in virtual environments using tools like [Isaac Gym](/index.php?title=Isaac_Gym&action=edit&redlink=1)/[Isaac Sim](/index.php?title=Isaac_Sim&action=edit&redlink=1) and the GR00T-Mimic and GR00T-Dreams pipelines. This layer is crucial for scaling and diversifying training data – 780,000 synthetic trajectories (equivalent to 6,500 hours of human demonstrations) were generated in just 11 hours.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;16&#93;](#cite_note-DreamsBlог-16)

The **top layer** contains a smaller but highly valuable set of real-world robot trajectories collected from physical humanoid hardware (88 hours of GR-1 teleoperation data, [Open X-Embodiment](/index.php?title=Open_X-Embodiment&action=edit&redlink=1) dataset). This data grounds the model in real-world physics and bridges the "sim-to-real" gap.[&#91;13&#93;](#cite_note-Arxiv2025-13)

The intent is to expose the model to the "long tail" of situations a robot might encounter, thereby improving its robustness to novel scenarios.[&#91;13&#93;](#cite_note-Arxiv2025-13) The final GR00T N1 model demonstrated superior performance over prior state-of-the-art imitation learning agents. According to the GR00T N1 whitepaper, the model outperformed specialist policies on standard simulation benchmarks across multiple robot embodiments.[&#91;13&#93;](#cite_note-Arxiv2025-13)

### Performance and Benchmarks

GR00T N1 demonstrates strong performance across multiple evaluation benchmarks:

| Benchmark | Tasks | GR00T N1 Success Rate | Baseline Comparison |
| --- | --- | --- | --- |
| [RoboCasa Kitchen](/index.php?title=RoboCasa_Kitchen&action=edit&redlink=1) | 24 tasks | 32.1% (100 demos) | 25.6% (Diffusion Policy) |
| [DexMimicGen](/index.php?title=DexMimicGen&action=edit&redlink=1) | 9 tasks | 66.5% | 46.9% (Diffusion Policy) |
| [GR-1 Tabletop](/index.php?title=GR-1_Tabletop&action=edit&redlink=1) (Simulation) | 24 tasks | 50.0% | 32.7% (Diffusion Policy) |
| **[Real-World GR-1](/index.php?title=Real-World_GR-1&action=edit&redlink=1)** (Full Data) | Bimanual manipulation | **76.8% average** | 46.4% (Baseline) |
| [Real-World GR-1](/index.php?title=Real-World_GR-1&action=edit&redlink=1) (10% Data) | Various tasks | 42.6% | 10.2% (Baseline) |

Real-world evaluations on the [Fourier Intelligence](/index.php?title=Fourier_Intelligence&action=edit&redlink=1) GR-1 robot show high success rates in tasks like bimanual handover (76.6%), pick-and-place (82%), and novel object placement (73.3%).[&#91;13&#93;](#cite_note-Arxiv2025-13) When deployed on a real GR-1 bipedal robot, a GR00T-based policy was able to carry out language-directed bimanual manipulation tasks with high success rates and data efficiency.[&#91;13&#93;](#cite_note-Arxiv2025-13) This indicates the GR00T architecture can transfer its learned skills from simulation into real-world control of physical robots.

GR00T N1.5 introduced substantial improvements: 93.3% language command following on GR-1 manipulation tasks (versus 46.6% for N1), 38.3% success on novel tasks (versus 13.1% for N1), and 73.3% success placing unseen objects into novel containers.[&#91;14&#93;](#cite_note-LearnOpenCV-14)[&#91;23&#93;](#cite_note-HuggingFaceN1.5-23)

## The NVIDIA Isaac Ecosystem

Project GR00T is deeply integrated with the broader NVIDIA Isaac robotics platform, which provides the essential software infrastructure for simulation, training, and orchestration.[&#91;27&#93;](#cite_note-IsaacPlatform-27)

### Simulation and Learning Platforms

- **[NVIDIA Omniverse](/wiki/nvidia_omniverse)**: The foundational platform for creating and collaborating on physically accurate, [USD](/index.php?title=Universal_Scene_Description&action=edit&redlink=1)-based 3D virtual worlds. It provides the base layer for rendering, physics, and connectivity for the entire simulation ecosystem.[&#91;28&#93;](#cite_note-Omniverse-28)

- **[Isaac Sim](/index.php?title=Isaac_Sim&action=edit&redlink=1)**: The core robotics simulation application built on Omniverse. It provides physically accurate virtual environments, powered by [PhysX](/index.php?title=PhysX&action=edit&redlink=1), that are used to test robot designs, validate software, and generate massive synthetic datasets needed for training GR00T models.[&#91;29&#93;](#cite_note-IsaacSim-29)[&#91;24&#93;](#cite_note-Marvik2025-24)

- **[Isaac Lab](/index.php?title=Isaac_Lab&action=edit&redlink=1)**: An open-source, lightweight framework built on Isaac Sim that is specifically optimized for robot learning. It is the primary tool used for training GR00T policies using advanced techniques like [reinforcement learning](/wiki/reinforcement_learning) (RL) and [imitation learning](/index.php?title=Imitation_learning&action=edit&redlink=1). It is designed to run thousands of parallel simulations to accelerate the training process.[&#91;30&#93;](#cite_note-IsaacLab-30)[&#91;31&#93;](#cite_note-IsaacLab2.3-31)

- **[NVIDIA OSMO](/index.php?title=NVIDIA_OSMO&action=edit&redlink=1)**: A cloud-native workflow orchestration service designed to schedule and manage the massive computational workloads required for robotics development. OSMO can distribute tasks like synthetic data generation and reinforcement learning across heterogeneous compute resources, whether on-premises or in the cloud.[&#91;32&#93;](#cite_note-OSMO-32)

- **[Newton Physics Engine](/index.php?title=Newton_(physics_engine)&action=edit&redlink=1)**: An open-source, high-fidelity physics engine co-developed by NVIDIA with [Google DeepMind](/wiki/google_deepmind) and [Disney Research](/index.php?title=Disney_Research&action=edit&redlink=1). It is purpose-built for the complex dynamics of robots, particularly the challenging physics of humanoid balance and movement, ensuring that skills learned in simulation can be transferred reliably to the real world. MuJoCo-Warp delivers 70x+ acceleration for robotics ML workloads.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)[&#91;26&#93;](#cite_note-Newton-26)

### GR00T Workflows

The GR00T development platform is composed of several specialized but interconnected workflows that provide tools for every stage of humanoid robot development.[&#91;33&#93;](#cite_note-WorkflowsBlog-33)

| Workflow | Purpose and Function |
| --- | --- |
| **GR00T-Teleop** | Collects human demonstrations using devices like [Apple Vision Pro](/index.php?title=Apple_Vision_Pro&action=edit&redlink=1) for teleoperation in simulations. Uses Isaac Sim, Isaac Lab, and NVIDIA CloudXR. |
| **GR00T-Gen** | Generates diverse, simulation-ready 3D environments and tasks in OpenUSD using [large language models](/wiki/large_language_model) and [generative AI](/index.php?title=Generative_AI&action=edit&redlink=1), providing rich and varied training scenarios. Includes domain randomization and 3D upscaling. |
| **GR00T-Mimic** | Generates large-scale synthetic motion data from a small number of real-world human demonstrations for [imitation learning](/index.php?title=Imitation_learning&action=edit&redlink=1). Uses Cosmos and synthetic trajectory generation to multiply demonstrations into larger datasets. |
| **GR00T-Dreams** | Creates entirely new synthetic video trajectories and neural trajectories from single images and language instructions using [NVIDIA Cosmos](/index.php?title=NVIDIA_Cosmos&action=edit&redlink=1) world foundation models (Cosmos Predict and Cosmos Reason), enabling rapid model updates. |
| **GR00T-Dexterity** | Provides models and [reinforcement learning](/wiki/reinforcement_learning)-based workflows for developing fine-grained, dexterous manipulation and grasping skills. Includes pixels-to-action grasping systems. |
| **GR00T-Mobility** | A suite of models and policies for locomotion and navigation, enabling robots to move effectively across varied and cluttered environments. Supports differential drive, Ackermann steering, quadrupeds, and humanoids. |
| **GR00T-Control** | A learning-based framework for developing [whole-body control](/index.php?title=Whole-body_control&action=edit&redlink=1) policies that integrate both locomotion and manipulation for complex, coordinated actions. Based on OmniH2O and HOVER research. |
| **GR00T-Perception** | A suite of perception libraries and foundation models (FoundationPose for 6D object pose estimation, RT-DETR for real-time object detection) for advanced multimodal sensing and environmental understanding. Includes ReMEmbR retrieval-augmented memory. |

## Hardware Platform: NVIDIA Jetson Thor

To run a large, multimodal foundation model like GR00T in real-time on a robot requires significant computational power at the edge. To meet this demand, NVIDIA introduced the [Jetson Thor](/wiki/jetson_thor), a new class of robotics computer designed to be the on-robot "brain" for physical AI.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;34&#93;](#cite_note-JetsonThor-34)

Jetson Thor is a [system-on-a-chip](/index.php?title=System-on-a-chip&action=edit&redlink=1) (SoC) that performs real-time inference, processes high-speed data from multiple sensors, and executes the low-latency control loops necessary for a humanoid robot to operate safely and effectively.[&#91;34&#93;](#cite_note-JetsonThor-34)[&#91;35&#93;](#cite_note-JetsonThorDev-35)

| Feature | NVIDIA Jetson Thor (T5000 Module) | NVIDIA Jetson AGX Orin (64GB Module) |
| --- | --- | --- |
| **AI Performance** | Up to 2070 [TOPS](/index.php?title=TOPS&action=edit&redlink=1) (FP4, Sparse) | Up to 275 TOPS (INT8) |
| **GPU Architecture** | NVIDIA [Blackwell](/wiki/blackwell_microarchitecture) | NVIDIA [Ampere](/index.php?title=Ampere_(microarchitecture)&action=edit&redlink=1) |
| **CPU** | 14-core [Arm](/index.php?title=ARM_architecture&action=edit&redlink=1) Neoverse V3AE | 12-core Arm Cortex-A78AE |
| **Memory** | 128 GB LPDDR5X | 64 GB LPDDR5 |
| **Memory Bandwidth** | 273 GB/s | 204.8 GB/s |
| **Networking** | 4x 25 GbE (100 Gbps total) | 1x 10GbE + 1x 1GbE |
| **Power Consumption** | 40W – 130W | 15W – 60W |
| **Performance Uplift** | >7.5x AI compute vs. Orin | Baseline |

The Jetson Thor platform features the NVIDIA Blackwell GPU architecture with 800 teraflops of 8-bit floating-point AI performance, integrated functional safety processor, high-performance CPU, and 100 GB Ethernet bandwidth.[&#91;34&#93;](#cite_note-JetsonThor-34)[&#91;35&#93;](#cite_note-JetsonThorDev-35) For training and development, NVIDIA provides [DGX Blackwell/H100](/index.php?title=NVIDIA_DGX&action=edit&redlink=1) systems for model training and [RTX PRO 6000 Blackwell](/index.php?title=NVIDIA_RTX&action=edit&redlink=1) workstations/servers for Omniverse and Cosmos simulations.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)

## Applications and Adoption

Isaac GR00T is intended to serve as a general "AI brain" for robots in a variety of settings, from factories to homes. Its broad skillset – including grasping objects, using tools, two-handed coordination, and following spoken or written commands – makes it applicable to tasks in manufacturing, logistics, healthcare, and domestic service.[&#91;24&#93;](#cite_note-Marvik2025-24)[&#91;36&#93;](#cite_note-UseCases-36)

### Manufacturing and Industrial Automation

Manufacturing has emerged as the first major adopter of GR00T-powered humanoid robots. The sector's "guard-railed" domain with specific use cases makes it ideal for initial deployment. Early demonstrations focused on household chores (such as tidying rooms and picking up clutter) and basic industrial tasks like sorting items, which showcased the model's ability to learn behaviors that would traditionally require extensive manual programming.[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6)

By fine-tuning GR00T for specific use cases, companies have deployed it in pilot projects. Electronics manufacturer [Foxlink](/index.php?title=Foxlink&action=edit&redlink=1) used GR00T-based models to improve the flexibility and efficiency of robotic arms on its assembly lines, and startup AeiROBOT leveraged GR00T to enable an industrial humanoid to understand natural-language instructions for complex pick-and-place workflows.[&#91;6&#93;](#cite_note-NVIDIA2025N1.5PR-6) [Foxconn](/index.php?title=Foxconn&action=edit&redlink=1) announced plans to deploy humanoid robots powered by the NVIDIA Isaac GR00T N model at its AI server manufacturing plant in Houston, Texas, with deployment targeted for the first quarter of 2026.[&#91;37&#93;](#cite_note-FoxconnAssembly-37)

### Humanoid Robot Partners

NVIDIA has actively partnered with both industry and academia to drive adoption of Isaac GR00T. Leading humanoid robot firms such as 1X Technologies, Agility Robotics, Figure AI, and Sanctuary AI began collaborating with NVIDIA on GR00T early in its development, seeing it as a path to accelerate the creation of versatile, general-purpose robots.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;9&#93;](#cite_note-TechCrunch2024-9)

During the GR00T N1 launch, 1X's CEO described the model as "a significant boost to robot reasoning and skills" that allowed their robot to be deployed with minimal additional data.[&#91;18&#93;](#cite_note-1XTech2025-18) By 2025, many other companies and labs had begun evaluating GR00T: Agility Robotics and Boston Dynamics were early testers for their humanoid platforms, NEURA Robotics explored GR00T for service robots in home environments, and researchers at institutes like [Stanford University](/index.php?title=Stanford_University&action=edit&redlink=1), [ETH Zurich](/index.php?title=ETH_Zurich&action=edit&redlink=1), and the [National University of Singapore](/index.php?title=National_University_of_Singapore&action=edit&redlink=1) integrated GR00T models (along with NVIDIA's open-source Newton simulator) into their robotics research and education programs.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

**[Apptronik](/index.php?title=Apptronik&action=edit&redlink=1)** integrated Project GR00T with its Apollo humanoid robot, which uses NVIDIA Jetson AGX Orin and Jetson Orin NX modules onboard. CEO Jeff Cardenas stated: "Generative AI is currently used to generate text, images, and video. The next frontier is to leverage these AI tools to generate intelligent humanoid robot behavior."[&#91;8&#93;](#cite_note-Apptronik2024-8)[&#91;38&#93;](#cite_note-ApptronikPR-38)

**[Agility Robotics](/index.php?title=Agility_Robotics&action=edit&redlink=1)** expanded its collaboration with NVIDIA in March 2025, with CRO Jonathan Hurst stating: "We are at an inflection point in history, with human-centric robots like Digit poised to change labor forever. Modern AI will accelerate development, paving the way for robots like Digit to help people in all aspects of daily life."[&#91;20&#93;](#cite_note-AgilityRobotics2025-20) The company uses Isaac Lab for training and Isaac Sim for simulation of the Digit humanoid robot, with plans to integrate Jetson Thor computing platforms.[&#91;20&#93;](#cite_note-AgilityRobotics2025-20)[&#91;39&#93;](#cite_note-AgilityBlog-39)

**[Boston Dynamics](/index.php?title=Boston_Dynamics&action=edit&redlink=1)** expanded its collaboration in March 2025, with CTO Aaron Saunders stating: "Robots are the bridge between simulation and the real world. With the current generation of our electric Atlas, we are building the world's most capable humanoid. Collaborating with NVIDIA to integrate Jetson Thor means that robot now has the highest-performance compute platform behind it."[&#91;19&#93;](#cite_note-BostonDynamics2025-19) The company uses Isaac Lab for learned dexterity and locomotion policies.[&#91;19&#93;](#cite_note-BostonDynamics2025-19)[&#91;40&#93;](#cite_note-BDRobotReport-40)

**[Figure AI](/wiki/figure_ai)** received significant investment from NVIDIA as part of a $675 million Series B funding round in February 2024 that valued Figure at $2.6 billion.[&#91;41&#93;](#cite_note-CNBC2024-41) The company uses Isaac Sim, Isaac Lab, and NVIDIA H100 GPUs for training, deploying Figure 02 robots at [BMW](/index.php?title=BMW&action=edit&redlink=1)'s Spartanburg production line.[&#91;42&#93;](#cite_note-FigureBlog-42)

**[Sanctuary AI](/index.php?title=Sanctuary_AI&action=edit&redlink=1)**, ranked third globally for U.S. robotics patents by [Morgan Stanley](/index.php?title=Morgan_Stanley&action=edit&redlink=1), uses Isaac Lab for training hydraulic hands and Isaac Sim for simulation. Co-founder Geordie Rose emphasized: "Embodied AI will not only help address some of humanity's biggest challenges, but also create innovations which are currently beyond our reach or imagination. Technology this important shouldn't be built in silos, which is why we prioritize long-term partners like NVIDIA."[&#91;43&#93;](#cite_note-SanctuaryAI-43)

Additional partners include [Fourier Intelligence](/index.php?title=Fourier_Intelligence&action=edit&redlink=1) (GR-1 humanoid), [Unitree Robotics](/index.php?title=Unitree_Robotics&action=edit&redlink=1), [XPENG Robotics](/index.php?title=XPENG_Robotics&action=edit&redlink=1), [LG Electronics](/index.php?title=LG_Electronics&action=edit&redlink=1), Mentee Robotics, and NEURA Robotics.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;5&#93;](#cite_note-NVIDIA2025N1PR-5)[&#91;44&#93;](#cite_note-LGKoreaHerald-44)

### Other Industry Partners

Beyond humanoid robotics, the ecosystem extends to industrial automation and technology partners:

| Category | Partners |
| --- | --- |
| **Humanoid Robots** | 1X Technologies, Agility Robotics, Apptronik, Boston Dynamics, Figure AI, Fourier Intelligence, Sanctuary AI, Unitree Robotics, XPENG Robotics, LG Electronics, Mentee Robotics, NEURA Robotics |
| **Manufacturing & Industrial** | [Siemens](/index.php?title=Siemens&action=edit&redlink=1) (SIMATIC Robot PickAI), [Foxconn](/index.php?title=Foxconn&action=edit&redlink=1) (virtual factory digital twins, Houston humanoid deployment), Foxlink (flexible robot arms), [BYD Electronics](/index.php?title=BYD_Electronics&action=edit&redlink=1) (autonomous mobile robots), AeiROBOT (industrial humanoids), Lightwheel |
| **Robotic Arms ([Isaac Manipulator](/index.php?title=Isaac_Manipulator&action=edit&redlink=1))** | [Yaskawa](/index.php?title=Yaskawa&action=edit&redlink=1), [Universal Robots](/index.php?title=Universal_Robots&action=edit&redlink=1), PickNik Robotics, Solomon, READY Robotics, [Franka Robotics](/index.php?title=Franka_Robotics&action=edit&redlink=1), Agile Robots |
| **Autonomous Mobile Robots ([Isaac Perceptor](/index.php?title=Isaac_Perceptor&action=edit&redlink=1))** | ArcBest, BYD Electronics, [KION Group](/index.php?title=KION_Group&action=edit&redlink=1) |
| **Technology & Research** | [Google DeepMind](/wiki/google_deepmind) (Newton physics engine), [Disney Research](/index.php?title=Disney_Research&action=edit&redlink=1) (Newton physics engine), Intrinsic (OpenUSD pipelines), [Microsoft Azure](/index.php?title=Microsoft_Azure&action=edit&redlink=1) (cloud compute), Stanford University, ETH Zurich, National University of Singapore |

The introduction of Isaac GR00T and its open model releases has been likened to the impact of [large language models](/wiki/large_language_model) in the [NLP](/index.php?title=Natural_language_processing&action=edit&redlink=1) domain, but for physical robots. By providing a common, pre-trained "generalist" model, NVIDIA aims to lower the barrier for robotics developers to imbue machines with advanced skills, and to foster a community that continuously improves these models. As NVIDIA's Rev Lebaredian summarized: "With NVIDIA Isaac GR00T serving as the robot's brains, Newton simulating their body and NVIDIA Omniverse as their training ground," developers can more rapidly create robots that safely and intelligently perform complex tasks in unstructured environments.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

## Licensing and Availability

The GR00T N1 and N1.5 model weights are released under the **NVIDIA License** with restrictions on commercial use, while the code repositories (Isaac-GR00T on GitHub) are released under the **Apache 2.0** open-source license.[&#91;12&#93;](#cite_note-HuggingFaceN1-12)[&#91;45&#93;](#cite_note-HuggingFaceLicense-45)[&#91;15&#93;](#cite_note-GitHubGR00T-15) The models are available on [Hugging Face](/wiki/hugging_face) (nvidia/GR00T-N1-2B and nvidia/GR00T-N1.5-3B), with complete code repositories, training datasets in the NVIDIA PhysicalAI collection, and interactive demos at build.nvidia.com.[&#91;12&#93;](#cite_note-HuggingFaceN1-12)[&#91;23&#93;](#cite_note-HuggingFaceN1.5-23)[&#91;17&#93;](#cite_note-PhysicalAI-17)[&#91;46&#93;](#cite_note-BuildNVIDIA-46)

Requirements for development include Ubuntu 20.04/22.04, [Python](/index.php?title=Python&action=edit&redlink=1) 3.10, [CUDA](/wiki/cuda) 12.4, and GPUs such as [H100](/index.php?title=NVIDIA_H100&action=edit&redlink=1), [RTX 4090](/index.php?title=NVIDIA_RTX&action=edit&redlink=1), or [RTX A6000](/index.php?title=NVIDIA_RTX&action=edit&redlink=1). Minimum fine-tuning requires approximately 20-24 GB GPU memory for gradient and optimizer state storage, while inference requires 10-12 GB GPU memory.[&#91;15&#93;](#cite_note-GitHubGR00T-15)

## Impact and Future Directions

Since the Jetson platform's 2014 launch, over 2 million developers have used it with 7,000+ customers deploying edge AI. Over 100 companies use Isaac Sim, supported by 150+ hardware, software, and sensor partners.[&#91;36&#93;](#cite_note-UseCases-36) The ecosystem scale manifests in technical achievements: 70x acceleration in robotics ML workloads (MuJoCo-Warp), 80x speedup in path planning (Isaac Manipulator cuMotion), real-time inference in under 64 milliseconds enabling 120 Hz action generation, and demonstrated cross-embodiment learning across humanoids, single-arm manipulators, and bimanual systems.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)[&#91;26&#93;](#cite_note-Newton-26)

Market projections estimate the humanoid robot market could reach $38-76 billion over the next decade, addressing a global labor shortage exceeding 50 million workers.[&#91;47&#93;](#cite_note-MarketAnalysis-47) [Goldman Sachs](/index.php?title=Goldman_Sachs&action=edit&redlink=1) projects AI technologies including physical AI could boost global GDP by 15% over the next decade.[&#91;48&#93;](#cite_note-GoldmanSachs-48)

Jensen Huang has stated that "everything that moves will one day be autonomous" and projected that humanoid robots could be widely used in manufacturing within five years.[&#91;1&#93;](#cite_note-NVIDIA2024PR-1)[&#91;49&#93;](#cite_note-IEEESpectrum-49) Future development focuses on long-horizon tasks, improved synthetic data generation, and enhanced vision-language reasoning.[&#91;13&#93;](#cite_note-Arxiv2025-13) NVIDIA plans continued updates to the GR00T family, fostering community-driven advancements in embodied AI.[&#91;7&#93;](#cite_note-NVIDIA2025N1.6PR-7)

## See Also

- [Embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1)

- [Foundation model](/wiki/foundation_model)

- [Humanoid robot](/index.php?title=Humanoid_robot&action=edit&redlink=1)

- [NVIDIA Isaac](/index.php?title=NVIDIA_Isaac&action=edit&redlink=1)

- [Jetson](/index.php?title=Jetson&action=edit&redlink=1)

- [NVIDIA Omniverse](/wiki/nvidia_omniverse)

- [Vision-language-action model](/wiki/vision-language-action_model)

- [Imitation learning](/index.php?title=Imitation_learning&action=edit&redlink=1)

- [Reinforcement learning](/wiki/reinforcement_learning)

- [Dual process theory](/index.php?title=Dual_process_theory&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-NVIDIA2024PR_1-0) [1.1](#cite_ref-NVIDIA2024PR_1-1) [1.2](#cite_ref-NVIDIA2024PR_1-2) [1.3](#cite_ref-NVIDIA2024PR_1-3) [1.4](#cite_ref-NVIDIA2024PR_1-4) [1.5](#cite_ref-NVIDIA2024PR_1-5) [1.6](#cite_ref-NVIDIA2024PR_1-6) [1.7](#cite_ref-NVIDIA2024PR_1-7) NVIDIA Newsroom (March 18, 2024). "NVIDIA Announces Project GR00T Foundation Model for Humanoid Robots and Major Isaac Robotics Platform Update." URL: [https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform](https://nvidianews.nvidia.com/news/foundation-model-isaac-robotics-platform)

2. ↑ [2.0](#cite_ref-VentureBeat2024_2-0) [2.1](#cite_ref-VentureBeat2024_2-1) Shubham Sharma (March 18, 2024). "Nvidia shows off Project GR00T, a multimodal AI to power humanoids of the future." VentureBeat. URL: [https://venturebeat.com/ai/nvidia-shows-off-project-gr00t-a-multimodal-ai-to-power-humanoids-of-the-future/](https://venturebeat.com/ai/nvidia-shows-off-project-gr00t-a-multimodal-ai-to-power-humanoids-of-the-future/)

3. ↑ [3.0](#cite_ref-PCMag2024_3-0) [3.1](#cite_ref-PCMag2024_3-1) Michael Kan (March 18, 2024). "Nvidia's GR00T Model Tries to Make Humanoid Robots Real." PCMag. URL: [https://www.pcmag.com/news/nvidias-gr00t-model-tries-to-make-humanoid-robots-real](https://www.pcmag.com/news/nvidias-gr00t-model-tries-to-make-humanoid-robots-real)

4. ↑ [4.0](#cite_ref-InvestorRelations2024_4-0) [4.1](#cite_ref-InvestorRelations2024_4-1) NVIDIA Investor Relations (March 18, 2024). "NVIDIA Announces Project GR00T Foundation Model for Humanoid Robots and Major Isaac Robotics Platform Update." URL: [https://investor.nvidia.com/news/press-release-details/2024/NVIDIA-Announces-Project-GR00T-Foundation-Model-for-Humanoid-Robots-and-Major-Isaac-Robotics-Platform-Update/default.aspx](https://investor.nvidia.com/news/press-release-details/2024/NVIDIA-Announces-Project-GR00T-Foundation-Model-for-Humanoid-Robots-and-Major-Isaac-Robotics-Platform-Update/default.aspx)

5. ↑ [5.00](#cite_ref-NVIDIA2025N1PR_5-0) [5.01](#cite_ref-NVIDIA2025N1PR_5-1) [5.02](#cite_ref-NVIDIA2025N1PR_5-2) [5.03](#cite_ref-NVIDIA2025N1PR_5-3) [5.04](#cite_ref-NVIDIA2025N1PR_5-4) [5.05](#cite_ref-NVIDIA2025N1PR_5-5) [5.06](#cite_ref-NVIDIA2025N1PR_5-6) [5.07](#cite_ref-NVIDIA2025N1PR_5-7) [5.08](#cite_ref-NVIDIA2025N1PR_5-8) [5.09](#cite_ref-NVIDIA2025N1PR_5-9) [5.10](#cite_ref-NVIDIA2025N1PR_5-10) [5.11](#cite_ref-NVIDIA2025N1PR_5-11) [5.12](#cite_ref-NVIDIA2025N1PR_5-12) NVIDIA Newsroom (March 18, 2025). "NVIDIA Announces Isaac GR00T N1 — the World's First Open Humanoid Robot Foundation Model — and Simulation Frameworks to Speed Robot Development." URL: [https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks](https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks)

6. ↑ [6.0](#cite_ref-NVIDIA2025N1.5PR_6-0) [6.1](#cite_ref-NVIDIA2025N1.5PR_6-1) [6.2](#cite_ref-NVIDIA2025N1.5PR_6-2) [6.3](#cite_ref-NVIDIA2025N1.5PR_6-3) [6.4](#cite_ref-NVIDIA2025N1.5PR_6-4) [6.5](#cite_ref-NVIDIA2025N1.5PR_6-5) [6.6](#cite_ref-NVIDIA2025N1.5PR_6-6) [6.7](#cite_ref-NVIDIA2025N1.5PR_6-7) NVIDIA Newsroom (May 18, 2025). "NVIDIA Powers Humanoid Robot Industry With Cloud-to-Robot Computing Platforms for Physical AI." URL: [https://nvidianews.nvidia.com/news/nvidia-powers-humanoid-robot-industry-with-cloud-to-robot-computing-platforms-for-physical-ai](https://nvidianews.nvidia.com/news/nvidia-powers-humanoid-robot-industry-with-cloud-to-robot-computing-platforms-for-physical-ai)

7. ↑ [7.00](#cite_ref-NVIDIA2025N1.6PR_7-0) [7.01](#cite_ref-NVIDIA2025N1.6PR_7-1) [7.02](#cite_ref-NVIDIA2025N1.6PR_7-2) [7.03](#cite_ref-NVIDIA2025N1.6PR_7-3) [7.04](#cite_ref-NVIDIA2025N1.6PR_7-4) [7.05](#cite_ref-NVIDIA2025N1.6PR_7-5) [7.06](#cite_ref-NVIDIA2025N1.6PR_7-6) [7.07](#cite_ref-NVIDIA2025N1.6PR_7-7) [7.08](#cite_ref-NVIDIA2025N1.6PR_7-8) [7.09](#cite_ref-NVIDIA2025N1.6PR_7-9) [7.10](#cite_ref-NVIDIA2025N1.6PR_7-10) [7.11](#cite_ref-NVIDIA2025N1.6PR_7-11) NVIDIA Newsroom (September 29, 2025). "NVIDIA Accelerates Robotics Research and Development With New Open Models and Simulation Libraries." URL: [https://nvidianews.nvidia.com/news/nvidia-accelerates-robotics-research-and-development-with-new-open-models-and-simulation-libraries](https://nvidianews.nvidia.com/news/nvidia-accelerates-robotics-research-and-development-with-new-open-models-and-simulation-libraries)

8. ↑ [8.0](#cite_ref-Apptronik2024_8-0) [8.1](#cite_ref-Apptronik2024_8-1) Apptronik (March 18, 2024). "Apptronik Collaborates with NVIDIA to Advance AI for General-Purpose Humanoid Robots." URL: [https://apptronik.com/news-collection/apptronik-collaborates-with-nvidia](https://apptronik.com/news-collection/apptronik-collaborates-with-nvidia)

9. ↑ [9.0](#cite_ref-TechCrunch2024_9-0) [9.1](#cite_ref-TechCrunch2024_9-1) Kyle Wiggers (March 18, 2024). "Nvidia enlists humanoid robotics' biggest names for new AI platform, GR00T." TechCrunch. URL: [https://techcrunch.com/2024/03/18/nvidia-enlists-humanoid-robotics-biggest-names-for-new-ai-platform-gr00t/](https://techcrunch.com/2024/03/18/nvidia-enlists-humanoid-robotics-biggest-names-for-new-ai-platform-gr00t/)

10. [↑](#cite_ref-RobotReport2024_10-0) Mike Oitzman (March 19, 2024). "NVIDIA announces new robotics products at GTC 2024." The Robot Report. URL: [https://www.therobotreport.com/nvidia-announces-new-robotics-products-at-gtc-2024/](https://www.therobotreport.com/nvidia-announces-new-robotics-products-at-gtc-2024/)

11. [↑](#cite_ref-TechCrunch2025_11-0) Kyle Wiggers (March 18, 2025). "Nvidia debuts GR00T N1, a foundation model for humanoid robotics." TechCrunch. URL: [https://techcrunch.com/2025/03/18/nvidia-debuts-groot-n1-a-foundation-model-for-humanoid-robotics/](https://techcrunch.com/2025/03/18/nvidia-debuts-groot-n1-a-foundation-model-for-humanoid-robotics/)

12. ↑ [12.0](#cite_ref-HuggingFaceN1_12-0) [12.1](#cite_ref-HuggingFaceN1_12-1) [12.2](#cite_ref-HuggingFaceN1_12-2) [12.3](#cite_ref-HuggingFaceN1_12-3) [12.4](#cite_ref-HuggingFaceN1_12-4) [12.5](#cite_ref-HuggingFaceN1_12-5) [12.6](#cite_ref-HuggingFaceN1_12-6) NVIDIA (2025). "NVIDIA Isaac GR00T N1 Model Card (GR00T-N1-2B)." Hugging Face. URL: [https://huggingface.co/nvidia/GR00T-N1-2B](https://huggingface.co/nvidia/GR00T-N1-2B)

13. ↑ [13.00](#cite_ref-Arxiv2025_13-0) [13.01](#cite_ref-Arxiv2025_13-1) [13.02](#cite_ref-Arxiv2025_13-2) [13.03](#cite_ref-Arxiv2025_13-3) [13.04](#cite_ref-Arxiv2025_13-4) [13.05](#cite_ref-Arxiv2025_13-5) [13.06](#cite_ref-Arxiv2025_13-6) [13.07](#cite_ref-Arxiv2025_13-7) [13.08](#cite_ref-Arxiv2025_13-8) [13.09](#cite_ref-Arxiv2025_13-9) [13.10](#cite_ref-Arxiv2025_13-10) [13.11](#cite_ref-Arxiv2025_13-11) [13.12](#cite_ref-Arxiv2025_13-12) [13.13](#cite_ref-Arxiv2025_13-13) [13.14](#cite_ref-Arxiv2025_13-14) [13.15](#cite_ref-Arxiv2025_13-15) [13.16](#cite_ref-Arxiv2025_13-16) [13.17](#cite_ref-Arxiv2025_13-17) [13.18](#cite_ref-Arxiv2025_13-18) [13.19](#cite_ref-Arxiv2025_13-19) Björck, Johan; Fan, Linxi; Zhu, Yuke; et al. (March 2025). "GR00T N1: An Open Foundation Model for Generalist Humanoid Robots." arXiv preprint arXiv:2503.14734. URL: [https://arxiv.org/abs/2503.14734](https://arxiv.org/abs/2503.14734)

14. ↑ [14.0](#cite_ref-LearnOpenCV_14-0) [14.1](#cite_ref-LearnOpenCV_14-1) [14.2](#cite_ref-LearnOpenCV_14-2) [14.3](#cite_ref-LearnOpenCV_14-3) LearnOpenCV (2025). "GR00T N1.5 Explained: NVIDIA's Leap Towards Generalist Robots." URL: [https://learnopencv.com/gr00t-n1_5-explained/](https://learnopencv.com/gr00t-n1_5-explained/)

15. ↑ [15.0](#cite_ref-GitHubGR00T_15-0) [15.1](#cite_ref-GitHubGR00T_15-1) [15.2](#cite_ref-GitHubGR00T_15-2) [15.3](#cite_ref-GitHubGR00T_15-3) NVIDIA (2025). "NVIDIA Isaac GR00T GitHub Repository." URL: [https://github.com/NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)

16. ↑ [16.0](#cite_ref-DreamsBlог_16-0) [16.1](#cite_ref-DreamsBlог_16-1) [16.2](#cite_ref-DreamsBlог_16-2) [16.3](#cite_ref-DreamsBlог_16-3) [16.4](#cite_ref-DreamsBlог_16-4) NVIDIA Developer Blog (2025). "Enhance Robot Learning With Synthetic Trajectory Data Generated by World Foundation Models." URL: [https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/](https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/)

17. ↑ [17.0](#cite_ref-PhysicalAI_17-0) [17.1](#cite_ref-PhysicalAI_17-1) NVIDIA (2025). "PhysicalAI Dataset Collection." Hugging Face. URL: [https://huggingface.co/collections/nvidia/physicalai-67c643edbb024053dcbcd6d8](https://huggingface.co/collections/nvidia/physicalai-67c643edbb024053dcbcd6d8)

18. ↑ [18.0](#cite_ref-1XTech2025_18-0) [18.1](#cite_ref-1XTech2025_18-1) [18.2](#cite_ref-1XTech2025_18-2) 1X Technologies (March 2025). "1X Technologies NVIDIA Research Collaboration." URL: [https://www.1x.tech/discover/1X-NVIDIA-Research-Collaboration](https://www.1x.tech/discover/1X-NVIDIA-Research-Collaboration)

19. ↑ [19.0](#cite_ref-BostonDynamics2025_19-0) [19.1](#cite_ref-BostonDynamics2025_19-1) [19.2](#cite_ref-BostonDynamics2025_19-2) Boston Dynamics (March 18, 2025). "Boston Dynamics Expands Collaboration with NVIDIA to Accelerate AI Capabilities in Humanoid Robots." URL: [https://bostondynamics.com/news/boston-dynamics-expands-collaboration-with-nvidia/](https://bostondynamics.com/news/boston-dynamics-expands-collaboration-with-nvidia/)

20. ↑ [20.0](#cite_ref-AgilityRobotics2025_20-0) [20.1](#cite_ref-AgilityRobotics2025_20-1) [20.2](#cite_ref-AgilityRobotics2025_20-2) Agility Robotics (March 18, 2025). "Agility Robotics Expands Relationship with NVIDIA." URL: [https://www.agilityrobotics.com/content/agility-robotics-expands-relationship-with-nvidia](https://www.agilityrobotics.com/content/agility-robotics-expands-relationship-with-nvidia)

21. [↑](#cite_ref-SPEdge2025_21-0) SP Edge (May 18, 2025). "NVIDIA launches the 'Isaac GR00T N1.5' update for humanoid robot development." URL: [https://sp-edge.com/updates/43445](https://sp-edge.com/updates/43445)

22. [↑](#cite_ref-ITBriefAsia_22-0) IT Brief Asia (May 2025). "NVIDIA unveils new Isaac GR00T tools powering robot evolution." URL: [https://itbrief.asia/story/nvidia-unveils-new-isaac-gr00t-tools-powering-robot-evolution](https://itbrief.asia/story/nvidia-unveils-new-isaac-gr00t-tools-powering-robot-evolution)

23. ↑ [23.0](#cite_ref-HuggingFaceN1.5_23-0) [23.1](#cite_ref-HuggingFaceN1.5_23-1) [23.2](#cite_ref-HuggingFaceN1.5_23-2) NVIDIA (2025). "NVIDIA Isaac GR00T N1.5 Model Card (GR00T-N1.5-3B)." Hugging Face. URL: [https://huggingface.co/nvidia/GR00T-N1.5-3B](https://huggingface.co/nvidia/GR00T-N1.5-3B)

24. ↑ [24.0](#cite_ref-Marvik2025_24-0) [24.1](#cite_ref-Marvik2025_24-1) [24.2](#cite_ref-Marvik2025_24-2) Marvik.ai (February 19, 2025). "Exploring NVIDIA Isaac GR00T." URL: [https://blog.marvik.ai/2025/02/19/exploring-nvidia-isaac-gr00t/](https://blog.marvik.ai/2025/02/19/exploring-nvidia-isaac-gr00t/)

25. ↑ [25.0](#cite_ref-Cosmos_25-0) [25.1](#cite_ref-Cosmos_25-1) NVIDIA (2025). "NVIDIA Cosmos Platform." URL: [https://www.nvidia.com/en-us/ai/cosmos/](https://www.nvidia.com/en-us/ai/cosmos/)

26. ↑ [26.0](#cite_ref-Newton_26-0) [26.1](#cite_ref-Newton_26-1) [26.2](#cite_ref-Newton_26-2) NVIDIA Developer (2025). "Newton Physics Engine." URL: [https://developer.nvidia.com/newton-physics](https://developer.nvidia.com/newton-physics)

27. [↑](#cite_ref-IsaacPlatform_27-0) NVIDIA Developer (2024). "NVIDIA Isaac Robotics Platform." URL: [https://developer.nvidia.com/isaac](https://developer.nvidia.com/isaac)

28. [↑](#cite_ref-Omniverse_28-0) NVIDIA (2024). "NVIDIA Omniverse Platform." URL: [https://www.nvidia.com/en-us/omniverse/](https://www.nvidia.com/en-us/omniverse/)

29. [↑](#cite_ref-IsaacSim_29-0) NVIDIA Developer (2024). "Isaac Sim Documentation." URL: [https://developer.nvidia.com/isaac/sim](https://developer.nvidia.com/isaac/sim)

30. [↑](#cite_ref-IsaacLab_30-0) NVIDIA Developer (2025). "Isaac Lab Documentation." URL: [https://developer.nvidia.com/isaac/lab](https://developer.nvidia.com/isaac/lab)

31. [↑](#cite_ref-IsaacLab2.3_31-0) NVIDIA Developer Blog (September 29, 2025). "Streamline Robot Learning with Whole-Body Control and Enhanced Teleoperation in NVIDIA Isaac Lab 2.3." URL: [https://developer.nvidia.com/blog/streamline-robot-learning-with-whole-body-control-and-enhanced-teleoperation-in-nvidia-isaac-lab-2-3/](https://developer.nvidia.com/blog/streamline-robot-learning-with-whole-body-control-and-enhanced-teleoperation-in-nvidia-isaac-lab-2-3/)

32. [↑](#cite_ref-OSMO_32-0) NVIDIA Developer Blog (2024). "Scale AI-Enabled Robotics Development Workloads with NVIDIA OSMO." URL: [https://developer.nvidia.com/blog/scale-ai-enabled-robotics-development-workloads-with-nvidia-osmo/](https://developer.nvidia.com/blog/scale-ai-enabled-robotics-development-workloads-with-nvidia-osmo/)

33. [↑](#cite_ref-WorkflowsBlog_33-0) NVIDIA Developer Blog (2024). "Advancing Humanoid Robot Sight and Skill Development with NVIDIA Project GR00T." URL: [https://developer.nvidia.com/blog/advancing-humanoid-robot-sight-and-skill-development-with-nvidia-project-gr00t/](https://developer.nvidia.com/blog/advancing-humanoid-robot-sight-and-skill-development-with-nvidia-project-gr00t/)

34. ↑ [34.0](#cite_ref-JetsonThor_34-0) [34.1](#cite_ref-JetsonThor_34-1) [34.2](#cite_ref-JetsonThor_34-2) NVIDIA (2025). "NVIDIA Jetson Thor." URL: [https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)

35. ↑ [35.0](#cite_ref-JetsonThorDev_35-0) [35.1](#cite_ref-JetsonThorDev_35-1) NVIDIA Developer Blog (2024). "Introducing NVIDIA Jetson Thor: The Ultimate Platform for Physical AI." URL: [https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai](https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai)

36. ↑ [36.0](#cite_ref-UseCases_36-0) [36.1](#cite_ref-UseCases_36-1) NVIDIA (2025). "Humanoid Robots Use Case." URL: [https://www.nvidia.com/en-us/use-cases/humanoid-robots/](https://www.nvidia.com/en-us/use-cases/humanoid-robots/)

37. [↑](#cite_ref-FoxconnAssembly_37-0) Assembly Magazine (2025). "Foxconn to Deploy Humanoid Robots on Production Line at Houston AI Server Plant." URL: [https://www.assemblymag.com/articles/99628-foxconn-to-deploy-humanoid-robots-on-production-line-at-houston-ai-server-plant](https://www.assemblymag.com/articles/99628-foxconn-to-deploy-humanoid-robots-on-production-line-at-houston-ai-server-plant)

38. [↑](#cite_ref-ApptronikPR_38-0) PR Newswire (March 18, 2024). "Apptronik Collaborates with NVIDIA to Advance AI for General-Purpose Humanoid Robots." URL: [https://www.prnewswire.com/news-releases/apptronik-collaborates-with-nvidia-to-advance-ai-for-general-purpose-humanoid-robots-302092085.html](https://www.prnewswire.com/news-releases/apptronik-collaborates-with-nvidia-to-advance-ai-for-general-purpose-humanoid-robots-302092085.html)

39. [↑](#cite_ref-AgilityBlog_39-0) Agility Robotics (September 10, 2025). "Agility Robotics Powers the Future of Robotics with NVIDIA." URL: [https://www.agilityrobotics.com/content/agility-robotics-powers-the-future-of-robotics-with-nvidia](https://www.agilityrobotics.com/content/agility-robotics-powers-the-future-of-robotics-with-nvidia)

40. [↑](#cite_ref-BDRobotReport_40-0) The Robot Report (March 24, 2025). "Boston Dynamics plans to use NVIDIA's Isaac GR00T to build AI capabilities for Atlas." URL: [https://www.therobotreport.com/boston-dynamics-plans-to-use-nvidias-isaac-gr00t-to-build-ai-capabilities-for-atlas/](https://www.therobotreport.com/boston-dynamics-plans-to-use-nvidias-isaac-gr00t-to-build-ai-capabilities-for-atlas/)

41. [↑](#cite_ref-CNBC2024_41-0) CNBC (February 29, 2024). "Robot startup Figure valued at $2.6 billion by Bezos, Amazon, Nvidia." URL: [https://www.cnbc.com/2024/02/29/robot-startup-figure-valued-at-2point6-billion-by-bezos-amazon-nvidia.html](https://www.cnbc.com/2024/02/29/robot-startup-figure-valued-at-2point6-billion-by-bezos-amazon-nvidia.html)

42. [↑](#cite_ref-FigureBlog_42-0) NVIDIA Blog (2024). "Figure Deploys Humanoid Robots with Autonomous Decision-Making." URL: [https://blogs.nvidia.com/blog/figure-humanoid-robot-autonomous/](https://blogs.nvidia.com/blog/figure-humanoid-robot-autonomous/)

43. [↑](#cite_ref-SanctuaryAI_43-0) Sanctuary AI (2024). "A Transformational Few Months for Sanctuary AI." URL: [https://www.sanctuary.ai/blog/a-transformational-few-months-for-sanctuary-ai](https://www.sanctuary.ai/blog/a-transformational-few-months-for-sanctuary-ai)

44. [↑](#cite_ref-LGKoreaHerald_44-0) The Korea Herald (2024). "LG Electronics deepens partnership with Nvidia for next-gen tech." URL: [https://www.koreaherald.com/article/10606177](https://www.koreaherald.com/article/10606177)

45. [↑](#cite_ref-HuggingFaceLicense_45-0) NVIDIA (2025). "GR00T-N1-2B LICENSE." Hugging Face. URL: [https://huggingface.co/nvidia/GR00T-N1-2B/blob/main/LICENSE](https://huggingface.co/nvidia/GR00T-N1-2B/blob/main/LICENSE)

46. [↑](#cite_ref-BuildNVIDIA_46-0) NVIDIA (2025). "Isaac GR00T Interactive Demo." URL: [https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation](https://build.nvidia.com/nvidia/isaac-gr00t-synthetic-manipulation)

47. [↑](#cite_ref-MarketAnalysis_47-0) SNS Insider (2024). "Humanoid Robot Market Analysis." Various industry reports.

48. [↑](#cite_ref-GoldmanSachs_48-0) Goldman Sachs Research (2024). "AI Investment and Economic Impact Projections."

49. [↑](#cite_ref-IEEESpectrum_49-0) IEEE Spectrum (2024). "Nvidia Announces GR00T, a Foundation Model For Humanoids." URL: [https://spectrum.ieee.org/nvidia-gr00t-ros](https://spectrum.ieee.org/nvidia-gr00t-ros)