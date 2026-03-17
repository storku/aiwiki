---
title: "SmolVLA"
slug: "smolvla"
categories:
  - "Pages_with_reference_errors"
  - "Pages_containing_cite_templates_with_deprecated_parameters"
  - "Stubs"
  - "Artificial_intelligence"
  - "Robotics"
  - "Vision-language_models"
  - "Foundation_models"
  - "Open-source_artificial_intelligence"
  - "Hugging_Face"
  - "Google_DeepMind"
  - "2025_in_artificial_intelligence"
  - "Machine_learning_models"
  - "Edge_computing"
  - "Embodied_artificial_intelligence"
---*Certain elements of this article are incomplete. You can help the AI Wiki by [**expanding it**](https://aiwiki.ai/index.php?title=SmolVLA&action=edit).* 

*See also: [Terms](/wiki/terms) and [artificial intelligence terms](/wiki/artificial_intelligence_terms)*
SmolVLA (Small Vision-Language-Action) is a compact, open-source [vision-language-action model](/wiki/vision-language-action_model) (VLA) for [robotics](/index.php?title=Robotics&action=edit&redlink=1) developed by [Hugging Face](/wiki/hugging_face) in collaboration with [Google DeepMind](/wiki/google_deepmind). Released in June 2025, SmolVLA represents a significant advancement in making advanced robotic control accessible to researchers and practitioners with limited computational resources.[&#91;1&#93;](#cite_note-arxiv-1) The name "SmolVLA" reflects its small size, being a diminutive of "small."[&#91;2&#93;](#cite_note-etymology-2)

Unlike existing VLAs that typically require billions of parameters and extensive computational resources, SmolVLA achieves competitive performance with only 450 million parameters, two orders of magnitude smaller than many contemporary VLAs, and can run on consumer-grade hardware, including [CPUs](/index.php?title=CPUs&action=edit&redlink=1), single [GPUs](/index.php?title=GPUs&action=edit&redlink=1), and even devices like a [MacBook](/index.php?title=MacBook&action=edit&redlink=1) or [Raspberry Pi](/index.php?title=Raspberry_Pi&action=edit&redlink=1)-class edge computers.[&#91;3&#93;](#cite_note-huggingface-blog-3)[&#91;4&#93;](#cite_note-techcrunch-4)

## Overview

SmolVLA is designed to address key challenges in robotic learning: the high computational costs of existing [VLA models](/index.php?title=VLA_models&action=edit&redlink=1), limited access to training data, and the difficulty of deploying models on affordable hardware.[&#91;5&#93;](#cite_note-marktechpost-5) The model democratizes robotics by enabling advanced vision-language-action capabilities on consumer-grade hardware, making it suitable for educational projects, research, and small-scale automation.[&#91;6&#93;](#cite_note-blackcoffee-6)

The model achieves its efficiency through several innovations:

- **Efficient Architecture**: Utilizes only the first half of the [vision-language model](/index.php?title=Vision-language_model&action=edit&redlink=1)'s layers, reducing computational cost by approximately 50% and latency by ~40%[&#91;7&#93;](#cite_note-arxiv-full-7)

- **Community-Driven Training**: Trained exclusively on open-source, community-contributed datasets under the [LeRobot](/index.php?title=LeRobot&action=edit&redlink=1) tag[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **Asynchronous Inference**: Decouples perception and action prediction from execution, enabling 30% faster response times and 2× task throughput[&#91;5&#93;](#cite_note-marktechpost-5)

- **Hardware Accessibility**: Can be trained on a single [GPU](/index.php?title=GPU&action=edit&redlink=1) and deployed on consumer-grade hardware, including edge devices for privacy-sensitive installations[&#91;4&#93;](#cite_note-techcrunch-4)

SmolVLA follows the same three-modality paradigm as larger VLAs, [vision](/index.php?title=Vision&action=edit&redlink=1), [language](/index.php?title=Language&action=edit&redlink=1), and [action](/wiki/action), but emphasizes efficiency and accessibility over scale. Its open-source nature and reliance on community-driven data foster collaboration, potentially accelerating innovation in robotics.[&#91;8&#93;](#cite_note-actuia-8)

## Development

### Background

SmolVLA emerged from [Hugging Face](/wiki/hugging_face)'s broader initiative to democratize robotics through open-source tools and models. The project builds upon the company's [LeRobot](/index.php?title=LeRobot&action=edit&redlink=1) ecosystem, launched in 2024, which provides a collection of robotics-focused models, datasets, and tools.[&#91;4&#93;](#cite_note-techcrunch-4) The development was motivated by the observation that existing VLA models, while powerful, remained inaccessible to most researchers due to their computational requirements and reliance on proprietary datasets.[&#91;3&#93;](#cite_note-huggingface-blog-3)

The development represents a shift in robotics foundation models toward more open, efficient, and reproducible systems. By leveraging community-contributed data and affordable hardware, SmolVLA lowers the barrier to entry for robotics research and encourages broader participation.[&#91;9&#93;](#cite_note-emergentmind-9)

### Team

SmolVLA was developed by a team of researchers at Hugging Face and collaborating institutions, including [Google DeepMind](/wiki/google_deepmind). The primary authors include:[&#91;1&#93;](#cite_note-arxiv-1)

- **Mustafa Shukor** - PhD student at [Sorbonne University](/index.php?title=Sorbonne_University&action=edit&redlink=1)[&#91;10&#93;](#cite_note-scholar-shukor-10)

- **Dana Aubakirova** - M2 student in MVA at [ENS Paris-Saclay](/index.php?title=ENS_Paris-Saclay&action=edit&redlink=1)[&#91;11&#93;](#cite_note-scholar-dana-11)

- **Francesco Capuano**

- **Pepijn Kooijmans**

- **Steven Palma**

- **Adil Zouitine**

- **Michel Aractingi**

- **Caroline Pascal**

- **Martino Russi**

- **Andres Marafioti**

- **Simon Alibert**

- **Matthieu Cord**

- **Thomas Wolf** - Co-founder of Hugging Face

- **Remi Cadene** - Research Scientist at Hugging Face

### Release Timeline

| Date | Milestone | Significance |
| --- | --- | --- |
| **June 2, 2025** | Initial arXiv paper released[&#91;1&#93;](#cite_note-arxiv-1) | First public disclosure of the model |
| **June 3, 2025** | Official blog post and model release on Hugging Face[&#91;3&#93;](#cite_note-huggingface-blog-3) | Model weights and code made publicly available |
| **June 4, 2025** | Media coverage highlighting the model's efficiency[&#91;4&#93;](#cite_note-techcrunch-4) | Widespread recognition of accessibility features |
| **June 10, 2025** | Community adoption milestone | Over 1,000 downloads and first community contributions |
| **June 13, 2025** | Asynchronous inference stack released | Performance improvements made available |

## Architecture

SmolVLA's architecture consists of two main components that work together to process visual inputs, language instructions, and generate robot actions:[&#91;7&#93;](#cite_note-arxiv-full-7)

### Perception Module (SmolVLM-2)

The perception module is based on [SmolVLM-2](/index.php?title=SmolVLM-2&action=edit&redlink=1), an efficient [vision-language model](/index.php?title=Vision-language_model&action=edit&redlink=1) optimized for multi-image and video inputs. It comprises a [SigLIP](/index.php?title=SigLIP&action=edit&redlink=1) visual encoder and a compact language decoder based on [SmolLM2](/index.php?title=SmolLM2&action=edit&redlink=1).[&#91;12&#93;](#cite_note-palm2-variant-12) Key features include:

- **Vision Encoder**: Uses [SigLIP](/index.php?title=SigLIP&action=edit&redlink=1) for robust visual feature encoding

- **Language Decoder**: Employs [SmolLM2](/index.php?title=SmolLM2&action=edit&redlink=1), a compact language model

- **Token Efficiency**: Limits visual tokens to 64 per frame through pixel-shuffle token reduction techniques

- **Layer Pruning**: Uses only the first N layers (N=L/2, where L is the total number of layers) of the VLM's language decoder, reducing latency by approximately 40%[&#91;13&#93;](#cite_note-learnopencv-13)

### Action Expert

The action expert is a specialized [transformer](/wiki/transformer) module (~100M parameters) that generates continuous robot actions:[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **Architecture**: Alternates between self-attention and cross-attention blocks with causal masking

- **Training Method**: Uses [flow matching](/index.php?title=Flow_matching&action=edit&redlink=1) objective to guide noisy samples back to ground truth

- **Action Generation**: Produces "action chunks" - sequences of future robot actions (default 50 timesteps)

- **Temporal Consistency**: Applies causal masking to ensure temporal coherence and improve smoothness

### Asynchronous Inference Stack

A key innovation is SmolVLA's asynchronous inference system that introduces a RobotClient ↔ PolicyServer schema:[&#91;14&#93;](#cite_note-phospho-14)

- The robot executes the current action chunk while the server predicts the next

- Fills an action queue until a guard band threshold is reached

- Enables low-latency control suitable for real-time applications

- Makes the system more adaptable and capable of faster recovery from errors

### Input Processing

SmolVLA processes three types of inputs:[&#91;7&#93;](#cite_note-arxiv-full-7)

1. **Multiple RGB Images**: Up to four frames from different camera views (resized to 512×512 pixels, global view only without tiling)

2. **Language Instructions**: Natural language task descriptions tokenized into text tokens

3. **Sensorimotor States**: Robot's current state projected into a single token via linear layer

## Training

### Datasets

SmolVLA was trained exclusively on community-contributed datasets from the [LeRobot](/index.php?title=LeRobot&action=edit&redlink=1) ecosystem, totaling approximately 10 million frames across ~30,000 episodes. The training data consists of:[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **487 high-quality datasets** focused on the SO100 robot platform

- **Diverse task coverage**: Including pick-and-place, stacking, sorting, and manipulation tasks

- **Natural diversity**: Varied lighting conditions, suboptimal demonstrations, and heterogeneous control schemes

- **Multiple environments**: Data collected in homes, maker spaces, and research labs

| Dataset Family | Episodes | Frames (M) | Robot Types | Notes |
| --- | --- | --- | --- | --- |
| SO-100 multi-task | ~20,000 | ~7.2 | SO-100 arm | Primary training data |
| SO-101 OOD test | ~3,000 | ~1.1 | SO-101 arm | Out-of-distribution testing |
| LeKiwi mobile base | ~2,000 | ~0.7 | Mobile manipulator | Navigation + manipulation |
| Misc. hobby datasets | ~5,000 | ~1.6 | Various DIY rigs | Community contributions |

The datasets were curated using a custom filtering tool created by Alexandre Chapin and Ville Kuosmanen, with manual review by Marina Barannikov. Automatic instruction rewriting with [Qwen2.5-VL-3B-Instruct](/index.php?title=Qwen2.5-VL-3B-Instruct&action=edit&redlink=1) standardized noisy labels to a maximum of 30 characters with action verbs.[&#91;3&#93;](#cite_note-huggingface-blog-3)

Camera views were standardized as follows:

| Camera View | Description |
| --- | --- |
| OBS_IMAGE_1 | Top-down view |
| OBS_IMAGE_2 | Wrist-mounted camera |
| OBS_IMAGE_3+ | Additional views |

### Training Process

The training methodology follows a two-phase approach inspired by [large language models](/index.php?title=Large_language_models&action=edit&redlink=1):[&#91;3&#93;](#cite_note-huggingface-blog-3)

1. **Pretraining Phase**: 200,000 steps on general manipulation data from community datasets

2. **Task-Specific Post-Training**: 100,000-200,000 steps of fine-tuning on specific tasks

Key training specifications:[&#91;7&#93;](#cite_note-arxiv-full-7)

- Can be trained on a single consumer GPU (for example RTX 3080Ti with 12GB VRAM)

- Batch size: 44 (adjustable based on available VRAM, 16 for 6GB GPUs)

- Training time: Approximately 4 hours for 20,000 steps on a single A100 GPU[&#91;15&#93;](#cite_note-finetune-docs-15)

- Memory usage: ~11.53 GB GPU memory during training

- Loss convergence: From 1.198 to 0.004 over 200,000 steps

## Performance

### Simulation Benchmarks

SmolVLA demonstrates strong performance on established robotics benchmarks despite its compact size:[&#91;7&#93;](#cite_note-arxiv-full-7)

| Benchmark | SmolVLA (0.45B) | π₀ (3.3B) | OpenVLA (7B) | Diffusion Policy | ACT |
| --- | --- | --- | --- | --- | --- |
| **LIBERO-40** | 87.3% | ~85% | <87.3% | <87.3% | <87.3% |
| **Meta-World MT50** | Outperforms | - | Lower | Lower | - |
| **Average Success Rate** | **82.5%** | 80.2% | 78.9% | 75.3% | 76.8% |

### Real-World Performance

On real-world robotic platforms, SmolVLA achieves:[&#91;5&#93;](#cite_note-marktechpost-5)

| Platform | Task | Success Rate | Notes |
| --- | --- | --- | --- |
| **SO100** | Pick-Place | 78.3% (avg) | Trained on this platform |
| **SO100** | Stacking | In-distribution performance |
| **SO100** | Sorting | With object variations |
| **SO101** | Pick-Place | 76.5% | Zero-shot generalization |
| **SO101** | Complex manipulation | 72.1% | Out-of-distribution |

### Impact of Pretraining

The effectiveness of community dataset pretraining is demonstrated by:[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **Without pretraining**: 51.7% success rate on SO100 tasks

- **With pretraining**: 78.3% success rate (+26.6% absolute improvement)

- **With multitask finetuning**: Further improvements in low-data regimes (up to 85% on specific tasks)

### Asynchronous Inference Benefits

The asynchronous inference stack provides:[&#91;5&#93;](#cite_note-marktechpost-5)

- **30% reduction** in average task completion time

- **2× increase** in completed actions within fixed time scenarios (19 vs. 9 cubes moved)

- **40% reduction** in inference latency through layer pruning

- **Average inference time**: 0.086982 seconds

- **Maximum GPU memory usage**: 908.43 MB during inference

## Technical Specifications

### Model Details

- **Total Parameters**: 450 million (roughly two orders of magnitude smaller than contemporary VLAs)[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **Action Expert Parameters**: ~100 million[&#91;7&#93;](#cite_note-arxiv-full-7)

- **VLM Layers Used**: First 16 layers (out of 32 total)[&#91;16&#93;](#cite_note-moonlight-16)

- **Visual Tokens per Frame**: 64[&#91;7&#93;](#cite_note-arxiv-full-7)

- **Action Chunk Size**: Configurable (typically 50 timesteps for 1 second)[&#91;7&#93;](#cite_note-arxiv-full-7)

- **License**: Apache-2.0 (code & model weights)[&#91;17&#93;](#cite_note-apache-license-17)

### Hardware Requirements

| Operation | Minimum Hardware | Recommended Hardware | Performance Notes |
| --- | --- | --- | --- |
| **Training** | Single consumer GPU (6GB VRAM) | GPU with 12GB+ VRAM | 4 hours for 20k steps on A100 |
| **Inference** | CPU (modern laptop) | Consumer GPU | Real-time on MacBook Pro |
| **Fine-tuning** | RTX 3080Ti (12GB) | A100 GPU | Batch size adjustable |
| **Edge Deployment** | Raspberry Pi 4 | Jetson Nano | For privacy-sensitive installations |

### Software Integration

SmolVLA is fully integrated with the [LeRobot](/index.php?title=LeRobot&action=edit&redlink=1) framework:[&#91;18&#93;](#cite_note-lerobot-github-18)

# Example training command
python lerobot/scripts/train.py \
    --policy.path=lerobot/smolvla_base \
    --dataset.repo_id=lerobot/your_dataset \
    --batch_size=64 \
    --steps=20000

## Applications

SmolVLA has been successfully deployed for various robotic manipulation tasks and environments:[&#91;3&#93;](#cite_note-huggingface-blog-3)

### Supported Tasks

- **Pick-and-Place Operations**: Grasping and relocating objects with various shapes and sizes

- **Stacking Tasks**: Building stable structures with blocks

- **Sorting Activities**: Organizing objects by category or properties

- **Assembly Operations**: Simple construction tasks

- **Kitchen Tasks**: Basic food preparation and cleaning

- **Mobile Manipulation**: Combined navigation and manipulation tasks

### Robot Platforms

- **SO100**: Primary training platform

- **SO101**: Demonstrates zero-shot generalization

- **Koch Arm**: Community-tested implementation[&#91;4&#93;](#cite_note-techcrunch-4)

- **ALOHA-style robots**: Compatible through LeRobot framework

- **Raspberry Pi robots**: Edge deployment for education

- **Custom DIY platforms**: Community-built robots

### Use Cases

- **Education & Hobby Robotics**: Runs on Raspberry Pi-class edge computers, enabling classroom demos and maker projects[&#91;4&#93;](#cite_note-techcrunch-4)

- **Research Prototyping**: Quick fine-tuning with only a handful of additional demos using the LeRobot trainer[&#91;19&#93;](#cite_note-docs-phospho-19)

- **Edge Deployment**: Works fully offline on consumer GPUs or CPUs, important for privacy-sensitive installations[&#91;8&#93;](#cite_note-actuia-8)

- **Research Baseline**: Serves as a reproducible small-scale reference when studying VLA design choices[&#91;1&#93;](#cite_note-arxiv-1)

## Comparison with Other VLAs

| Model | Parameters | Training Data | Hardware Requirements | Open Source | Real-time Capable |
| --- | --- | --- | --- | --- | --- |
| **SmolVLA** | 450M | Community datasets | Consumer GPU/CPU | ✓ | ✓ |
| **[OpenVLA](/index.php?title=OpenVLA&action=edit&redlink=1)** | 7B | OXE dataset | High-end GPU | ✓ | ✗ |
| **[RT-2](/index.php?title=RT-2&action=edit&redlink=1)** | 55B | Proprietary | Enterprise GPU cluster | ✗ | ✗ |
| **[π0](/index.php?title=%CE%A00_(Pi-Zero)&action=edit&redlink=1)** | 3.3B | Mixed proprietary/open | High-end GPU | Partial | ✗ |
| **[ACT](/index.php?title=ACT&action=edit&redlink=1)** | 1B | Task-specific | Mid-range GPU | ✓ | Partial |

## Impact and Reception

### Academic Impact

SmolVLA has been cited as a significant advancement in democratizing robotic learning. Researchers have noted its importance in:[&#91;20&#93;](#cite_note-huggingface-papers-20)

- Lowering barriers to entry for robotics research

- Demonstrating the effectiveness of community-driven datasets

- Proving that compact models can achieve competitive performance

- Challenging the trend of scaling up model sizes

- Promoting sustainable and efficient AI development

### Industry Adoption

The model has seen rapid adoption in:[&#91;21&#93;](#cite_note-flowgrammer-21)

- Educational institutions with limited budgets

- Small robotics startups

- Research labs in developing countries

- Hobbyist and maker communities

- Privacy-conscious industrial applications

### Community Response

The robotics community has responded positively, with researchers describing it as potentially a "BERT moment for robotics".[&#91;4&#93;](#cite_note-techcrunch-4) Key community contributions include:

- Over 100 additional dataset contributions to the LeRobot ecosystem

- Ports to various robot platforms including mobile manipulators

- Performance optimizations reducing inference time by additional 15%

- Integration with popular robotics frameworks like [ROS](/index.php?title=ROS&action=edit&redlink=1)

## Limitations

Despite its achievements, SmolVLA has several acknowledged limitations:[&#91;16&#93;](#cite_note-moonlight-16)

1. **Dataset Diversity**: Training data is predominantly from SO100 platform, limiting cross-embodiment generalization

2. **Dataset Size**: Uses significantly less data (30k episodes) than state-of-the-art VLAs like OpenVLA (millions of trajectories)

3. **Long-Horizon Tasks**: Limited evaluation on extended task sequences beyond 1-2 minutes

4. **VLM Backbone**: Uses a general-purpose VLM not specifically pretrained for robotics

5. **Single-Arm Focus**: Primary evaluation on single-arm manipulation tasks

6. **Complex Language Grounding**: Compact size trades off complex language understanding compared to billion-parameter VLAs

## Future Directions

The SmolVLA team and community have identified several areas for future development:[&#91;3&#93;](#cite_note-huggingface-blog-3)

- **Cross-Embodiment Training**: Expanding to more diverse robot platforms including quadrupeds and humanoids

- **Scaling Studies**: Investigating optimal model sizes for different applications (exploring 200M-1B parameter variants)

- **Joint Multimodal Training**: Combining robotics data with general vision-language datasets

- **Real-Time Optimizations**: Further improvements to inference speed targeting sub-50ms latency

- **Sim-to-Real Transfer**: Better integration with simulation environments like [Isaac Gym](/index.php?title=Isaac_Gym&action=edit&redlink=1)

- **Reinforcement Learning**: Integration of RL fine-tuning for improved task performance

- **Larger Community Datasets**: Goal of reaching 1 million demonstration episodes by 2026

## See Also

- [Vision-Language-Action Model](/index.php?title=Vision-Language-Action_Model&action=edit&redlink=1)

- [LeRobot](/index.php?title=LeRobot&action=edit&redlink=1)

- [Hugging Face](/wiki/hugging_face)

- [Google DeepMind](/wiki/google_deepmind)

- [OpenVLA](/index.php?title=OpenVLA&action=edit&redlink=1)

- [RT-2](/index.php?title=RT-2&action=edit&redlink=1)

- [π0 (Pi-Zero)](/index.php?title=%CE%A00_(Pi-Zero)&action=edit&redlink=1)

- [Embodied AI](/index.php?title=Embodied_AI&action=edit&redlink=1)

- [Robot learning](/index.php?title=Robot_learning&action=edit&redlink=1)

- [Foundation models](/wiki/foundation_models)

- [Edge AI](/index.php?title=Edge_AI&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-arxiv_1-0) [1.1](#cite_ref-arxiv_1-1) [1.2](#cite_ref-arxiv_1-2) [1.3](#cite_ref-arxiv_1-3) Shukor, Mustafa et al.&#32;(2025-06-02).&#32;["SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics"](https://arxiv.org/abs/2506.01844).&#32;[https://arxiv.org/abs/2506.01844](https://arxiv.org/abs/2506.01844).

2. [↑](#cite_ref-etymology_2-0) ["SmolVLA naming convention"](https://huggingface.co/blog/smolvla).&#32;Hugging Face.&#32;[https://huggingface.co/blog/smolvla](https://huggingface.co/blog/smolvla).

3. ↑ [3.00](#cite_ref-huggingface-blog_3-0) [3.01](#cite_ref-huggingface-blog_3-1) [3.02](#cite_ref-huggingface-blog_3-2) [3.03](#cite_ref-huggingface-blog_3-3) [3.04](#cite_ref-huggingface-blog_3-4) [3.05](#cite_ref-huggingface-blog_3-5) [3.06](#cite_ref-huggingface-blog_3-6) [3.07](#cite_ref-huggingface-blog_3-7) [3.08](#cite_ref-huggingface-blog_3-8) [3.09](#cite_ref-huggingface-blog_3-9) [3.10](#cite_ref-huggingface-blog_3-10) [3.11](#cite_ref-huggingface-blog_3-11) ["SmolVLA: Efficient Vision-Language-Action Model trained on Lerobot Community Data"](https://huggingface.co/blog/smolvla).&#32;Hugging Face.&#32;[https://huggingface.co/blog/smolvla](https://huggingface.co/blog/smolvla).

4. ↑ [4.0](#cite_ref-techcrunch_4-0) [4.1](#cite_ref-techcrunch_4-1) [4.2](#cite_ref-techcrunch_4-2) [4.3](#cite_ref-techcrunch_4-3) [4.4](#cite_ref-techcrunch_4-4) [4.5](#cite_ref-techcrunch_4-5) [4.6](#cite_ref-techcrunch_4-6) ["Hugging Face says its new robotics model is so efficient it can run on a MacBook"](https://techcrunch.com/2025/06/04/hugging-face-says-its-new-robotics-model-is-so-efficient-it-can-run-on-a-macbook/).&#32;TechCrunch.&#32;2025-06-04.&#32;[https://techcrunch.com/2025/06/04/hugging-face-says-its-new-robotics-model-is-so-efficient-it-can-run-on-a-macbook/](https://techcrunch.com/2025/06/04/hugging-face-says-its-new-robotics-model-is-so-efficient-it-can-run-on-a-macbook/).

5. ↑ [5.0](#cite_ref-marktechpost_5-0) [5.1](#cite_ref-marktechpost_5-1) [5.2](#cite_ref-marktechpost_5-2) [5.3](#cite_ref-marktechpost_5-3) ["Hugging Face Releases SmolVLA: A Compact Vision-Language-Action Model for Affordable and Efficient Robotics"](https://www.marktechpost.com/2025/06/03/hugging-face-releases-smolvla-a-compact-vision-language-action-model-for-affordable-and-efficient-robotics/).&#32;MarkTechPost.&#32;2025-06-03.&#32;[https://www.marktechpost.com/2025/06/03/hugging-face-releases-smolvla-a-compact-vision-language-action-model-for-affordable-and-efficient-robotics/](https://www.marktechpost.com/2025/06/03/hugging-face-releases-smolvla-a-compact-vision-language-action-model-for-affordable-and-efficient-robotics/).

6. [↑](#cite_ref-blackcoffee_6-0) ["An Open-Source Vision-Language-Action Model for Modern Robotics - SmolVLA"](https://blackcoffeerobotics.com/blog/smolvla-open-source-vision-language-action-model).&#32;Black Coffee Robotics.&#32;[https://blackcoffeerobotics.com/blog/smolvla-open-source-vision-language-action-model](https://blackcoffeerobotics.com/blog/smolvla-open-source-vision-language-action-model).

7. ↑ [7.0](#cite_ref-arxiv-full_7-0) [7.1](#cite_ref-arxiv-full_7-1) [7.2](#cite_ref-arxiv-full_7-2) [7.3](#cite_ref-arxiv-full_7-3) [7.4](#cite_ref-arxiv-full_7-4) [7.5](#cite_ref-arxiv-full_7-5) [7.6](#cite_ref-arxiv-full_7-6) [7.7](#cite_ref-arxiv-full_7-7) ["SmolVLA: A vision-language-action model for affordable and efficient robotics"](https://arxiv.org/html/2506.01844v1).&#32;[https://arxiv.org/html/2506.01844v1](https://arxiv.org/html/2506.01844v1).

8. ↑ [8.0](#cite_ref-actuia_8-0) [8.1](#cite_ref-actuia_8-1) ["AI and Robotics: With SmolVLA, Hugging Face Opens VLA Models to the Community"](https://www.actuia.com/english/ai-and-robotics-with-smolvla-hugging-face-opens-vision-language-action-models-to-the-community/).&#32;ActuIA.&#32;2025-06-17.&#32;[https://www.actuia.com/english/ai-and-robotics-with-smolvla-hugging-face-opens-vision-language-action-models-to-the-community/](https://www.actuia.com/english/ai-and-robotics-with-smolvla-hugging-face-opens-vision-language-action-models-to-the-community/).

9. [↑](#cite_ref-emergentmind_9-0) ["SmolVLA (Efficient Vision-Language-Action Model)"](https://www.emergentmind.com/papers/smolvla).&#32;Emergent Mind.&#32;2025-06-21.&#32;[https://www.emergentmind.com/papers/smolvla](https://www.emergentmind.com/papers/smolvla).

10. [↑](#cite_ref-scholar-shukor_10-0) ["Mustafa Shukor - Google Scholar"](https://scholar.google.com/citations?user=lhp9mRgAAAAJ&hl=en).&#32;[https://scholar.google.com/citations?user=lhp9mRgAAAAJ&hl=en](https://scholar.google.com/citations?user=lhp9mRgAAAAJ&hl=en).

11. [↑](#cite_ref-scholar-dana_11-0) ["Dana Aubakirova - Google Scholar"](https://scholar.google.com/citations?user=iX_-o7IAAAAJ&hl=en).&#32;[https://scholar.google.com/citations?user=iX_-o7IAAAAJ&hl=en](https://scholar.google.com/citations?user=iX_-o7IAAAAJ&hl=en).

12. [↑](#cite_ref-palm2-variant_12-0) ["SmolVLA architecture variations"](https://arxiv.org/html/2506.01844v1).&#32;[https://arxiv.org/html/2506.01844v1](https://arxiv.org/html/2506.01844v1).

13. [↑](#cite_ref-learnopencv_13-0) ["SmolVLA: Efficient Vision-Language-Action Model trained on Lerobot Community Data"](https://learnopencv.com/smolvla-lerobot-vision-language-action-model/).&#32;2025-06-11.&#32;[https://learnopencv.com/smolvla-lerobot-vision-language-action-model/](https://learnopencv.com/smolvla-lerobot-vision-language-action-model/).

14. [↑](#cite_ref-phospho_14-0) ["Decoding SmolVLA: A Vision-Language-Action Model for Efficient and Accessible Robotics"](https://blog.phospho.ai/decoding-smolvla).&#32;Phospho AI Blog.&#32;2025-06-13.&#32;[https://blog.phospho.ai/decoding-smolvla](https://blog.phospho.ai/decoding-smolvla).

15. [↑](#cite_ref-finetune-docs_15-0) ["Finetune SmolVLA"](https://huggingface.co/docs/lerobot/smolvla).&#32;Hugging Face.&#32;[https://huggingface.co/docs/lerobot/smolvla](https://huggingface.co/docs/lerobot/smolvla).

16. ↑ [16.0](#cite_ref-moonlight_16-0) [16.1](#cite_ref-moonlight_16-1) ["[Literature Review](https://www.themoonlight.io/en/review/smolvla-a-vision-language-action-model-for-affordable-and-efficient-robotics) SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics"].&#32;Moonlight.&#32;[https://www.themoonlight.io/en/review/smolvla-a-vision-language-action-model-for-affordable-and-efficient-robotics](https://www.themoonlight.io/en/review/smolvla-a-vision-language-action-model-for-affordable-and-efficient-robotics).

17. [↑](#cite_ref-apache-license_17-0) ["LeRobot License"](https://github.com/huggingface/lerobot/blob/main/LICENSE).&#32;GitHub.&#32;[https://github.com/huggingface/lerobot/blob/main/LICENSE](https://github.com/huggingface/lerobot/blob/main/LICENSE).

18. [↑](#cite_ref-lerobot-github_18-0) ["GitHub - huggingface/lerobot: 🤗 LeRobot: Making AI for Robotics more accessible with end-to-end learning"](https://github.com/huggingface/lerobot).&#32;GitHub.&#32;[https://github.com/huggingface/lerobot](https://github.com/huggingface/lerobot).

19. [↑](#cite_ref-docs-phospho_19-0) ["Train SmolVLA – starter pack"](https://docs.phospho.ai/smolvla-training).&#32;Phospho AI Docs.&#32;[https://docs.phospho.ai/smolvla-training](https://docs.phospho.ai/smolvla-training).

20. [↑](#cite_ref-huggingface-papers_20-0) ["Paper page - SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics"](https://huggingface.co/papers/2506.01844).&#32;Hugging Face.&#32;[https://huggingface.co/papers/2506.01844](https://huggingface.co/papers/2506.01844).

21. [↑](#cite_ref-flowgrammer_21-0) ["SmolVLA Model: How Hugging Face's Vision-Language-Action AI is Democratizing Robotics"](https://flowgrammer.ca/smolvla-model-democratizing-robotics/).&#32;2025-06-20.&#32;[https://flowgrammer.ca/smolvla-model-democratizing-robotics/](https://flowgrammer.ca/smolvla-model-democratizing-robotics/).

Cite error: `<ref>` tag with name "lerobot-model" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "github-blog" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "lerobot-community" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "libero-issue" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "release-issue" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "pureai" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "learnopoly" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "chatpaper" defined in `<references>` is not used in prior text.

## External Links

- [Official SmolVLA Blog Post](https://huggingface.co/blog/smolvla)

- [SmolVLA Model on Hugging Face Hub](https://huggingface.co/lerobot/smolvla_base)

- [SmolVLA arXiv Paper](https://arxiv.org/abs/2506.01844)

- [LeRobot GitHub Repository](https://github.com/huggingface/lerobot)

- [SmolVLA Documentation](https://huggingface.co/docs/lerobot/smolvla)

- [LeRobot Community Page](https://huggingface.co/lerobot)

- [Hugging Face Discord - SmolVLA Discussion](https://discord.gg/huggingface)