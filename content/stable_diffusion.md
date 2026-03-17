---
title: "Stable Diffusion"
slug: "stable_diffusion"
---[![](/images/thumb/7/71/1._Stable_Diffusion_developer_adoption.png/300px-1._Stable_Diffusion_developer_adoption.png)](/wiki/file_1_stable_diffusion_developer_adoption_png)  [](/wiki/file_1_stable_diffusion_developer_adoption_png)
Figure 1. Stable Diffusion developer adoption. Source: A16S and GitHub.
Stable Diffusion is a [text-to-image](/index.php?title=Text-to-image&action=edit&redlink=1) [latent diffusion model](/index.php?title=Latent_diffusion_model&action=edit&redlink=1) developed by [Stability AI](/wiki/stability_ai), allowing users to [generate art](/index.php?title=AI_art&action=edit&redlink=1) in seconds based on their natural language inputs, known as [prompts](/wiki/prompt). [&#91;1&#93;](#cite_note-”1”-1)&#160;[&#91;2&#93;](#cite_note-”2”-2) This model, released to the public with an open-source license, can also perform tasks like inpainting, outpainting, and image translation. [&#91;3&#93;](#cite_note-”3”-3)&#160;[&#91;4&#93;](#cite_note-”4”-4) Furthermore, it can run on consumer GPUs. [&#91;5&#93;](#cite_note-”5”-5)

Stable Diffusion is available in different formats: a public demo on [HuggingFace](/index.php?title=HuggingFace&action=edit&redlink=1), slower and often breaks, a software beta named [DreamStudio](/index.php?title=DreamStudio&action=edit&redlink=1), which is easier to use, faster but the user is charged after a certain number of [image generations](/index.php?title=Image_generation&action=edit&redlink=1), and a full-fat version of the model that everyone can download for unlimited art generation. [&#91;5&#93;](#cite_note-”5”-5)&#160;[&#91;6&#93;](#cite_note-”6”-6) Third-party developers have contributed to make the software easier to download and use, such as in case of the version for macOS with a simple one-click installer. [&#91;6&#93;](#cite_note-”6”-6)

The [AI model](/wiki/ai_model) was funded by [Stability AI](/wiki/stability_ai) and released publicly on August 22nd, 2022. [&#91;4&#93;](#cite_note-”4”-4) It had an immediate impact, being embraced by the [AI art](/index.php?title=AI_art&action=edit&redlink=1) community and criticized by traditional artists. It has been analyzed by the general public, sometimes expressing excitement or concerns over the potential of the technology. While AI-generated art has been gaining popularity, Stable Diffusion could propel adoption even further.&#160;[&#91;6&#93;](#cite_note-”6”-6) The program has topped the trending charts of GitHub repositories by a wide margin. [&#91;7&#93;](#cite_note-”7”-7)

Other image-generation tools are controlled by well-funded companies like [OpenAI](/wiki/openai) ([DALL-E](/wiki/dall-e)) or Google ([Imagen](/index.php?title=Imagen&action=edit&redlink=1)); however, the open access nature of Stable Diffusion, the ease of use and to build on, and being designed for low computational resources has made its growth surpass that "of any recent technology in infrastructure or crypto" (figure 1). [&#91;8&#93;](#cite_note-”8”-8)

The open-source model is a key difference between Stable Diffusion and other [AI art generators](/index.php?title=AI_art_generators&action=edit&redlink=1), allowing total access to the model, which even [Midjourney](/wiki/midjourney), another project outside of Big Tech, doesn't offer. This openness is expected to lead to a faster improvement compared to its rivals. Indeed, on Stable Diffusion's subreddit, users share their favorite [prompts](/wiki/prompt) and come up with new use cases for the model and its integration into established creative tools. [&#91;6&#93;](#cite_note-”6”-6)

## Stable Diffusion 1

The original Stable Diffusion development and release were led by Patrick Esser (Runway ML) and Robin Romback ([Stability AI](/wiki/stability_ai) and Machine Vision & Learning research group at LMU Munich). It was based on their previous work on Latent Diffusion Models at CVPR'22 and combined with support from Eleuther AI, LAION, and [Stability AI](/wiki/stability_ai)'s team. [&#91;1&#93;](#cite_note-”1”-1)&#160;[&#91;9&#93;](#cite_note-”9”-9) The model was first released to researchers and then to the public. [&#91;10&#93;](#cite_note-”10”-10)

Stability AI stated that in cooperation with HuggingFace's legal, ethics, and technology teams the model was released under a Creative ML OpenRAIL-M license, a permissive license that allows for commercial and non-commercial usage. They also developed "an AI-based&#160;Safety Classifier included by default in the overall software package" that removes undesirable outputs. Since Stable Diffusion was trained on image-text pairs from a large database taken from the internet, it can reproduce some societal biases and unsafe content. [&#91;10&#93;](#cite_note-”10”-10)

## Stable Diffusion 2

[![](/images/thumb/a/ad/2._Depth_to_image.png/300px-2._Depth_to_image.png)](/wiki/file_2_depth_to_image_png)  [](/wiki/file_2_depth_to_image_png)
Figure 2. Depth to image. Source: StabilityAI.
[![](/images/thumb/9/9d/3._Examples_of_Stability_2.png/300px-3._Examples_of_Stability_2.png)](/wiki/file_3_examples_of_stability_2_png)  [](/wiki/file_3_examples_of_stability_2_png)
Figure 3. Examples of images generated by Stable Diffusion 2.0 (768x768 resolution). Source: StabilityAI.
[![](/images/thumb/6/60/4._Stability_Upscaler.png/300px-4._Stability_Upscaler.png)](/wiki/file_4_stability_upscaler_png)  [](/wiki/file_4_stability_upscaler_png)
Figure 4. Stability Upscaler. On the feft, a 128x128 image and on the right, 512x512. Source: StabilityAI.
[![](/images/thumb/0/0b/5._Wide_aspect_ratio.png/300px-5._Wide_aspect_ratio.png)](/wiki/file_5_wide_aspect_ratio_png)  [](/wiki/file_5_wide_aspect_ratio_png)
Figure 5. Wide aspect ratio. Source: StabilityAI.
In November 2022, the second version of Stable DIffusion was released, delivering several improvements and features compared to V1. It's also optimized to run on a single GPU, making it accessible to a large number of people. According to Stability AI, new available features like depth2img and higher resolution upscaling capabilities will "serve as the foundation of countless applications and enable an explosion of new creative potential." [&#91;9&#93;](#cite_note-”9”-9)

The new depth-guided stable diffusion model (depth2img) extends the image-to-image feature present in the first version (figure 2). This allows the user new creative applications, transforming images while preserving the coherence and depth of the original. [&#91;9&#93;](#cite_note-”9”-9)

The new version of the model can generate images with a default resolution of 512x512 pixels and 768x768 pixels (figure 3). [&#91;9&#93;](#cite_note-”9”-9) [&#91;11&#93;](#cite_note-”12”-11) It includes an Upscaler Diffusion model "that enhances the resolution of images by a factor of 4" (figure 4). For example, it can increase the resolution of an image from 128x128 to 512x512. It can also generate images with very high resolutions such as 2048x2048 and higher. Its Inpainting diffusion model was also updated, simplifying switching parts of an image. [&#91;9&#93;](#cite_note-”9”-9)

Stable Diffusion 2 was trained using OpenCLIP, a new text encoder developed by LAION, improving the image quality. The training dataset was more diverse and wide-ranging that the first version. Also, adult content was filtered using LAION's NSFW filter. While the training dataset increased image quality, especially in areas like architecture, interior design, wildlife, and landscape scenes, the filter dramatically reduced the number of people in the dataset. However, the filters were later adjusted, still stripping out adult content, but less aggressively. This reduced the number of false positives, resulting in a better balance between the generation of beautiful architectural concepts and natural scenery while also producing good images of people and pop culture. [&#91;12&#93;](#cite_note-”11”-12)

Released on December 2022, version 2.1 of the model delivered further improvements like better anatomy, hands, and a greater range of art styles. It also supports a new prompting style and the capability to render non-standard resolutions, producing images in extreme aspect ratios (figure 5). [&#91;12&#93;](#cite_note-”11”-12)

Negative prompts, which allow the user to write what not to generate, eliminating unwanted details like too many fingers or blurry images, have been further improved in 2.1. [&#91;12&#93;](#cite_note-”11”-12)

Finally, Stability AI stated that "users can prompt the model to have more or less of certain elements in a composition, such as certain colors, objects or properties, using weighted prompts. Starting with a standard prompt and then refining the overall image with prompt weighting to increase or decrease compositional elements gives users greater control over image synthesis." [&#91;12&#93;](#cite_note-”11”-12)

## Architecture

Stable Diffusion is a [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1) (DL) model, a specialized type of [machine learning](/wiki/machine_learning) (ML) which in itself is a subset of [artificial intelligence](/wiki/artificial_intelligence) (AI). By analyzing and exchanging data across different nodes from datasets, simulating communication between neurons, DL tries to enable computers to match the way humans think. It can analyze unstructured data (image, video, audio, and text) using an artificial neural network (ANN), a complex structure of algorithms. [&#91;3&#93;](#cite_note-”3”-3)

Generative AI uses DL algorithms to detect the pattern in the input to produce content like text ([GPT-3](/wiki/gpt-3)), images ([DALL-E](/wiki/dall-e), [Midjourney](/wiki/midjourney)), video or code ([Copilot](/index.php?title=Copilot&action=edit&redlink=1)). In diffusion models, two processes take place: forward diffusion and reverse diffusion. During the first, noise is added to the input image, known as Gaussian noise. In the second process, there is noise reversion where the values of the input image pixels are recovered. [&#91;3&#93;](#cite_note-”3”-3)

## Latent Diffusion Model

[![](/images/thumb/8/8b/6._Overview_of_DM.png/300px-6._Overview_of_DM.png)](/wiki/file_6_overview_of_dm_png)  [](/wiki/file_6_overview_of_dm_png)
Figure 6. Overview of a Diffusion Model. Source: Rombach (2022).
[![](/images/thumb/d/d1/7._Architecture.png/300px-7._Architecture.png)](/wiki/file_7_architecture_png)  [](/wiki/file_7_architecture_png)
Figure 7. Stable Diffusion architecture. Source: Tensorflow.
Stability AI uses a Latent Diffusion Model (LDM), a process more efficient than the regular Diffusion Model. A DM (figure 6) deals with large input data, giving rise to struggles in terms of computation issues. LDM solves this by working with compressed data for faster and more efficient computation. Since the data size is smaller, faster image generation is possible. [&#91;3&#93;](#cite_note-”3”-3)

For the text-to-image system, the capability to control generated imagery by text prompts is necessary. For this end, a DL technique is used, consisting of "concatenating to the noise patch a vector that represents a bit of text, then training the model on a dataset of {image: caption} pairs." [&#91;13&#93;](#cite_note-”13”-13)

Stable Diffusion's architecture (figure 7) consists mainly of three parts:

1. 
2. 
3. 

The text decoder converts the prompt into a latent vector, the diffusion model repeatedly denoises a 64x64 latent image patch, and the decoder converts the final 64x64 latent path into a 512x512 image. [&#91;13&#93;](#cite_note-”13”-13)

## Training

Stable Diffusion was trained on an aesthetic subset of the LAION-5B dataset created by the DeepFloyd Team at Stability AI. [&#91;1&#93;](#cite_note-”1”-1) According to Borgi (2022), it was "trained on 512x512 images from a subset of the LAION-5B database. It uses a frozen CLIP ViT-L/14 text encoder to condition the model on text prompts."&#160;[&#91;4&#93;](#cite_note-”4”-4) The model was trained on a 768x768 dataset after version 2.0, supporting greater coherence at higher native resolutions.

Stability AI mentioned in their official blog that the model was trained in their 4,000 A100 Ezra-1 AI ultracluster. [&#91;1&#93;](#cite_note-”1”-1)

## API

Stability AI made available an API of Stable Diffusion with the goal of making the technology as accessible as possible. This option allows developers to integrate AI-assisted image generation into their projects. [&#91;14&#93;](#cite_note-”14”-14) This is available at Stability's [API platform site](https://platform.stability.ai/).

## Applications

Stable Diffusion can be used in different areas:

- Photography

- Concept Art

- Architecture

- Fashion

- 3D

- Videogames

- Graphic Design

- Wallpaper

- Cinema [&#91;3&#93;](#cite_note-”3”-3)

## Stable Diffusion options

### Hugging Face

Hugging Face hosts a public demo of Stable Diffusion on their [website](https://huggingface.co/spaces/stabilityai/stable-diffusion). To use it, it is simply necessary to enter the prompt in the text box and click "Generate image." Afterward, 4 AI-generated images will be provided. [&#91;3&#93;](#cite_note-”3”-3)

### DreamStudio

DreamStudio beta (beta.dreamstudio.ai) is an in-browser graphical interface for Stable Diffusion. As the official team's interface and API, it gives the user more control and faster image generation.

The GUI uses a credit-based system: the user is given a certain amount of free credits; to generate an image costs 0.2 credits. [&#91;15&#93;](#cite_note-”16”-15) After running out of free credits, the user needs to pay for the membership which costs $10. [&#91;3&#93;](#cite_note-”3”-3)

### Local Machine

As an open-source model, it can be run on Windows, Mac, or Linux computers for free. To run on these operating systems, UnstableFusion, a graphical interface for desktops, is required. Diffusion Bee can also be used but only on Mac computers. [&#91;1&#93;](#cite_note-”1”-1) A full tutorial on how to install Stable Diffusion locally can be found [here](https://www.howtogeek.com/832491/how-to-run-stable-diffusion-locally-with-a-gui-on-windows/). To install the WEB UI version specifically on a windows 10 machine try [here](https://soartificial.com/how-to-install-and-run-stable-diffusion-on-a-windows-pc/)

## DiffusionDB

[DiffusionDB](/index.php?title=DiffusionDB&action=edit&redlink=1) is a large-scale prompt dataset with 14 million images generated by Stable Diffusion and their respective prompts. With the popularity of image generation based on text prompts, prompt engineering has become a field of study to create images with desired details. The database was constructed by collecting images shared on the public Discord server of Stable Diffusion and released with a CC0 1.0 license. The code that collects and processes the images and prompts was open-sourced. [&#91;16&#93;](#cite_note-”17”-16)

According to Want et al. (2022), this database can reveal new prompt patterns and help "researchers to systematically investigate diverse prompts and associated images that were previously not possible. Through analyzing the linguistic patterns of prompts, we discover the common prompt patterns and tokens." [&#91;16&#93;](#cite_note-”17”-16) It can also provide new research directions, creating opportunities for researchers from ML and human-computer interaction areas and in the development of prompt engineering, deepfake detection, and debugging and explaining large generative models. [&#91;16&#93;](#cite_note-”17”-16)

## Differences to other text-to-image AI and concerns

	- Figure 8. Comparison between Stable Diffusion, Midjourney, DALL-E and real images. Source: Borgi (2022).

		- 
			[![Model comparison Stable diffusion.png](/images/thumb/7/7e/Model_comparison_Stable_diffusion.png/120px-Model_comparison_Stable_diffusion.png)](/wiki/file_model_comparison_stable_diffusion_png)

			
			

		

		- 
			[![Model comparison 2.png](/images/thumb/e/ec/Model_comparison_2.png/120px-Model_comparison_2.png)](/wiki/file_model_comparison_2_png)

			
			

		

The main differences between Stable Diffusion and other text-to-image models are the open-source approach and a hands-off attitude to the moderation of generated content. While Stability AI's model has some built-in keyword filters, they can be bypassed, especially while running the program on a local machine. The CEO of Stability AI, Emad Mostaque, mentioned that "Ultimately, it’s peoples’ responsibility as to whether they are ethical, moral, and legal in how they operate this technology,” he says. “The bad stuff that people create with it [...] I think it will be a very, very small percentage of the total use.”&#160;[&#91;6&#93;](#cite_note-”6”-6)

Like with other art-generating AI models, Stable Diffusion has also induced discussions over copyrights. Stability AI does not claim any copyright over the images but the database from which the AI model was trained contains copyrighted material. [&#91;3&#93;](#cite_note-”3”-3) [&#91;6&#93;](#cite_note-”6”-6) Criticism of tools like Stable Diffusion touch upon the possibility of such tools stealing artists' jobs or their misuse for malicious purposes like misinformation and disinformation. [&#91;6&#93;](#cite_note-”6”-6)

Borgi (2022) compared the performance of Stable Diffusion, [Midjourney](/wiki/midjourney), and [DALL-E](/wiki/dall-e) 2 in face generation (figure 8). They discovered that Stability AI's model performed better than the other two in this specific case. [&#91;4&#93;](#cite_note-”4”-4)

## Requirements

- Under 10 GB of VRAM.

- Nvidia GPU (support for AMD GPUs will be added).

- Processor with at least four cores and eight threads or more. [&#91;1&#93;](#cite_note-”1”-1) [&#91;5&#93;](#cite_note-”5”-5) [&#91;17&#93;](#cite_note-”15”-17)

## References

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 
16. 
17.