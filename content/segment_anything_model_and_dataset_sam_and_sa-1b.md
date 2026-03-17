---
title: "Segment Anything Model and Dataset (SAM and SA-1B)"
slug: "segment_anything_model_and_dataset_sam_and_sa-1b"
categories:
  - "Papers"
  - "Computer_Vision_Papers"
  - "Models"
  - "Computer_Vision_Models"
  - "Datasets"
  - "Computer_Vision_Datasets"
---*See also: [Papers](/wiki/papers), [Models](/wiki/models) and [Datasets](/wiki/datasets)*
*See also: [Computer Vision Papers](/index.php?title=Computer_Vision_Papers&action=edit&redlink=1), [Computer Vision Models](/wiki/computer_vision_models) and [Computer Vision Datasets](/index.php?title=Computer_Vision_Datasets&action=edit&redlink=1)*
| [Paper](https://ai.facebook.com/research/publications/segment-anything/) | [Website](https://segment-anything.com/) | [Demo](https://segment-anything.com/demo) | [Dataset](https://segment-anything.com/dataset/index.html) | [Blog](https://ai.facebook.com/blog/segment-anything-foundation-model-image-segmentation/) | [GitHub](https://github.com/facebookresearch/segment-anything) |
| --- | --- | --- | --- | --- | --- |

## Introduction

[![Segment anything model demo2.png](/images/thumb/6/66/Segment_anything_model_demo2.png/400px-Segment_anything_model_demo2.png)](/wiki/file_segment_anything_model_demo2_png)

### Model Introduction

**Segment Anything Model (SAM)** is an [artificial intelligence model](/index.php?title=Artificial_intelligence_model&action=edit&redlink=1) developed by [Meta AI](/wiki/meta_ai). This model allows users to effortlessly "cut out" any object within an image using a single click. It is a [promptable](/wiki/prompt) [segmentation system](/index.php?title=Segmentation_system&action=edit&redlink=1) that can generalize to unfamiliar objects and images without additional training.

### Project Introduction

**Segment Anything** is a project aimed at democratizing [image segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1) by providing a [foundation model](/wiki/foundation_model) and [dataset](/wiki/dataset) for the [task](/index.php?title=Task&action=edit&redlink=1). Image segmentation involves identifying which pixels in an image belong to a specific object and is a core component of [computer vision](/wiki/computer_vision). This technology has a wide range of applications, from analyzing [scientific imagery](/index.php?title=Scientific_imagery&action=edit&redlink=1) to [editing photos](/index.php?title=Editing_photos&action=edit&redlink=1). However, creating accurate [segmentation models](/index.php?title=Segmentation_models&action=edit&redlink=1) for specific tasks often necessitates specialized work by technical experts, access to AI training infrastructure, and large amounts of carefully annotated data.

#### Segment Anything Model (SAM) and SA-1B Dataset

On April 5, 2023, the Segment Anything project introduced the [Segment Anything Model](/wiki/segment_anything_model) ([SAM](/wiki/sam)) and the [Segment Anything 1-Billion mask dataset](/index.php?title=Segment_Anything_1-Billion_mask_dataset&action=edit&redlink=1) ([SA-1B](/wiki/sa-1b)), as detailed in a research paper. The SA-1B dataset is the largest-ever segmentation dataset, and its release aims to enable various applications and further research into foundation models for [computer vision](/wiki/computer_vision). The [SA-1B dataset](/index.php?title=SA-1B_dataset&action=edit&redlink=1) is available for research purposes, and the Segment Anything Model is released under an open license (Apache 2.0).

SAM is designed to reduce the need for task-specific modeling expertise, training compute, and custom data annotation in image segmentation. Its goal is to create a foundation model for image segmentation that can be trained on diverse data and adapt to specific tasks, similar to the prompting used in natural language processing models. However, segmentation data required for training such a model is not readily available, unlike images, videos, and text. Consequently, the Segment Anything project set out to develop a general, promptable segmentation model and simultaneously create a segmentation dataset on an unprecedented scale.

## Segmentation Anything Model (SAM) Structure and Implementation

[![Segment anything model1.png](/images/thumb/8/8f/Segment_anything_model1.png/400px-Segment_anything_model1.png)](/wiki/file_segment_anything_model1_png)

SAM's structure consists of three components:

1. A [ViT-H image encoder](/index.php?title=ViT-H_image_encoder&action=edit&redlink=1) that runs once per image and outputs an [image embedding](/index.php?title=Image_embedding&action=edit&redlink=1).

2. A [prompt encoder](/index.php?title=Prompt_encoder&action=edit&redlink=1) that embeds input prompts such as clicks or boxes.

3. A lightweight [transformer-based mask decoder](/index.php?title=Transformer-based_mask_decoder&action=edit&redlink=1) that predicts object masks from the image embedding and prompt embeddings.

The image encoder is implemented in [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1) and requires a [GPU](/index.php?title=GPU&action=edit&redlink=1) for efficient inference. The [prompt encoder](/index.php?title=Prompt_encoder&action=edit&redlink=1) and [mask decoder](/index.php?title=Mask_decoder&action=edit&redlink=1) can either run directly with PyTorch or be converted to [ONNX](/index.php?title=ONNX&action=edit&redlink=1) and run efficiently on CPU or GPU across various platforms that support ONNX runtime.

The image encoder has 632 million parameters, while the prompt encoder and mask decoder together have 4 million parameters.

The image encoder takes approximately 0.15 seconds on an [NVIDIA A100 GPU](/index.php?title=NVIDIA_A100_GPU&action=edit&redlink=1), while the prompt encoder and mask decoder take about 50 milliseconds on a [CPU](/index.php?title=CPU&action=edit&redlink=1) in a browser using multithreaded [SIMD](/index.php?title=SIMD&action=edit&redlink=1) execution.

SAM was trained for 3-5 days on 256 A100 GPUs.

## Segmentation Anything Model (SAM) Overview

[![Segment anything model demo1.png](/images/thumb/d/dd/Segment_anything_model_demo1.png/400px-Segment_anything_model_demo1.png)](/wiki/file_segment_anything_model_demo1_png)

### Input Prompts

SAM utilizes a variety of [input prompts](/index.php?title=Input_prompt&action=edit&redlink=1) to determine which object to segment in an image. These prompts enable the model to execute a wide range of segmentation tasks without further training. SAM can be prompted using interactive points and boxes, automatically segment all objects within an image, or generate multiple valid masks when given ambiguous prompts.

### Integration with Other Systems

The promptable design of SAM allows for seamless integration with other systems. In the future, SAM could take input prompts from systems like [AR](/wiki/ar)/[VR](/index.php?title=VR&action=edit&redlink=1) headsets to select objects based on a user's gaze. Additionally, bounding box prompts from object detectors can enable text-to-object segmentation.

### Extensible Outputs

Output masks generated by SAM can be used as inputs to other AI systems. These masks can be employed for various purposes such as tracking objects in videos, facilitating image editing applications, lifting objects to 3D, or enabling creative tasks like collaging.

### Zero-shot Generalization

SAM possesses a general understanding of what objects are, allowing it to achieve zero-shot generalization to unfamiliar objects and images without the need for supplementary training.

### Background Information

Historically, there have been two main approaches to segmentation problems: [interactive segmentation](/index.php?title=Interactive_segmentation&action=edit&redlink=1) and [automatic segmentation](/index.php?title=Automatic_segmentation&action=edit&redlink=1). Interactive segmentation enables the segmentation of any object class but requires human guidance, while automatic segmentation is specific to predetermined object categories and requires substantial amounts of manually annotated data, compute resources, and technical expertise. SAM is a generalization of these two approaches, capable of performing both interactive and automatic segmentation.

### Promptable Segmentation

[![Segment anything model2.png](/images/thumb/0/08/Segment_anything_model2.png/400px-Segment_anything_model2.png)](/wiki/file_segment_anything_model2_png)

SAM is designed to return a valid segmentation mask for any [prompt](/wiki/prompt), whether it be foreground/background points, a rough box or mask, freeform text, or any other information indicating what to segment in an image. This model has been trained on the SA-1B dataset, which consists of over 1 billion masks, allowing it to generalize to new objects and images beyond its [training data](/wiki/training_data). As a result, practitioners no longer need to collect their own segmentation data and [fine-tune](/index.php?title=Fine-tune&action=edit&redlink=1) a model for their use case.

## Segmenting 1 Billion Masks: Building SA-1B Dataset

[![Segment anything dataset1.png](/images/thumb/9/9b/Segment_anything_dataset1.png/400px-Segment_anything_dataset1.png)](/wiki/file_segment_anything_dataset1_png)

To train SAM, a massive and diverse dataset was needed. The SA-1B dataset was collected using the model itself; annotators used SAM to annotate images interactively, and the newly annotated data was then used to update SAM. This process was repeated multiple times to iteratively improve both the model and the [dataset](/wiki/dataset).

A data engine was built for creating the SA-1B dataset, which has three gears:

1. model-assisted annotation,

2. a mix of fully automatic annotation, and assisted annotation.

3. fully automatic mask creation.

The final dataset includes more than 1.1 billion segmentation masks collected on about 11 million licensed and privacy-preserving images.

## Potential Applications and Future Outlook

SAM has the potential to be used in a wide array of applications, such as [AR](/wiki/ar)/[VR](/index.php?title=VR&action=edit&redlink=1), content creation, scientific domains, and more general AI systems. Its promptable design enables flexible integration with other systems, and its composition allows it to be used in extensible ways, potentially accomplishing tasks unknown at the time of model design. In the future, SAM could be utilized in numerous domains that require finding and segmenting any object in any image, such as agricultural sectors, biological research, or even space exploration. Its ability to localize and track objects in videos could be beneficial for various scientific studies on Earth and beyond.

By sharing the research and dataset, the project aims to accelerate research into segmentation and more general image and video understanding. As a component in a larger system, SAM can perform segmentation tasks and contribute to the more comprehensive multimodal understanding of the world, for example, understanding both the visual and text content of a webpage.

Looking ahead, tighter coupling between understanding images at the pixel level and higher-level semantic understanding of visual content could lead to even more powerful AI systems. The Segment Anything project is a significant step forward in this direction, opening up possibilities for new applications and advancements in computer vision and AI research.

## FAQs and Additional Information

SAM predicts object masks only and does not generate labels. It currently supports images or individual frames extracted from videos, but not videos directly.

The source code for SAM is available on GitHub for users interested in exploring and utilizing the model.

## Reference