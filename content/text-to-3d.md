---
title: "Text-to-3D"
slug: "text-to-3d"
categories:
  - "Artificial_intelligence"
  - "Generative_AI"
  - "3D_modeling"
  - "Terms"
---

**Text-to-3D** is a category of [generative AI](/wiki/generative_ai) that creates three-dimensional objects, scenes, or environments from natural language descriptions. Given a text prompt such as "a corgi wearing a top hat," a text-to-3D system produces a 3D representation (such as a mesh, point cloud, or volumetric field) that can be rendered from any viewpoint and, in many cases, exported for use in game engines, [VR/AR](/wiki/virtual_reality) applications, 3D printing, and visual effects pipelines.

Unlike [text-to-image](/wiki/text-to-image) or [text-to-video](/wiki/text-to-video) models, which produce 2D outputs, text-to-3D systems must solve the significantly harder problem of generating geometry that is consistent from all viewing angles while also producing plausible textures, materials, and lighting. The field has evolved rapidly since the publication of DreamFusion in late 2022, moving from slow, research-grade optimizations to commercial platforms that generate production-ready 3D assets in seconds.

Text-to-3D technology has broad applications across gaming, film and visual effects, product design, architecture, VR and AR content creation, and e-commerce. By 2025, AI-driven 3D asset generation tools like Meshy and Tripo AI had begun to enter production workflows, and the technology was recognized as one of the most disruptive trends in the 3D content creation industry.

## History and Evolution

### Foundations: Neural Radiance Fields (2020)

The conceptual foundation for modern text-to-3D generation was laid by the introduction of [Neural Radiance Fields](/wiki/neural_radiance_field) (NeRF) in 2020. A NeRF represents a 3D scene as a continuous volumetric function, implemented as a multilayer perceptron (MLP) that maps spatial coordinates and viewing directions to color and density values. Rendering is performed by casting rays through each pixel, sampling points along those rays, and aggregating the MLP's predictions using the classical volume rendering equation.

Unlike traditional 3D representations such as meshes or voxels, NeRFs offer continuous, smooth interpolation and can represent fine details, reflective surfaces, and transparent objects. The original NeRF required multiple photographs of a scene for reconstruction, but subsequent work demonstrated that NeRFs could also serve as an optimizable 3D representation within generative pipelines.

### DreamFusion and the Birth of Text-to-3D (2022)

**DreamFusion**, published in September 2022 by Ben Poole, Ajay Jain, Jonathan T. Barron, and Ben Mildenhall at Google Research and UC Berkeley, was the landmark paper that demonstrated high-quality text-to-3D generation by leveraging pretrained 2D [text-to-image](/wiki/text-to-image) [diffusion models](/wiki/diffusion_models) as priors. The key insight was that large-scale 3D training data was unnecessary if a pretrained 2D diffusion model could guide the optimization of a 3D representation.

DreamFusion introduced **Score Distillation Sampling (SDS)**, a novel loss function that enables the use of a 2D diffusion model as a prior for optimizing a parametric image generator. SDS works by rendering the current 3D model (a NeRF) from a random viewpoint, adding noise to the rendered image, computing the diffusion model's predicted noise, and using the difference between the predicted and added noise as a gradient signal to update the NeRF parameters. By repeating this process across many random viewpoints, the NeRF converges to a 3D representation that looks plausible from all angles according to the diffusion model.

DreamFusion used Google's Imagen model as its text-to-image prior and produced results with coherent geometry, high-quality normals, surface detail, and relightable Lambertian shading. However, the approach had notable limitations: each scene required 1.5 to 3 hours of optimization on a GPU or TPU, and the reliance on 2D priors without global 3D understanding led to the "Janus problem" (multi-faced artifacts) and mode-seeking solutions for ambiguous or symmetric prompts.

### Rapid Progress (2023)

Following DreamFusion, 2023 saw an explosion of research improving upon the SDS framework:

**Magic3D** (NVIDIA, November 2022, published 2023) introduced a coarse-to-fine optimization strategy. In the first stage, it generates a coarse model using a low-resolution diffusion prior with a hash grid and sparse acceleration structure. In the second stage, it refines a textured mesh model initialized from the coarse neural representation using a high-resolution latent diffusion model. Magic3D produces 3D content in approximately 40 minutes (2x faster than DreamFusion) with 8x higher resolution supervision. User studies showed that 61.7% of raters preferred Magic3D's results over DreamFusion.

**Point-E** (OpenAI, December 2022) took a fundamentally different approach. Rather than optimizing a NeRF via SDS, Point-E is a two-stage system that first generates a single synthetic view using a text-to-image diffusion model, then produces a 3D point cloud using a second diffusion model conditioned on the generated image. The method is dramatically faster, generating 3D objects in 1 to 2 minutes on a single GPU, though the output quality is lower than optimization-based methods.

**Shap-E** (OpenAI, May 2023) improved upon Point-E by directly generating the parameters of implicit functions that can be rendered as both textured meshes and neural radiance fields. Unlike Point-E, which produces point clouds, Shap-E generates richer 3D representations. It is trained in two stages: first, an encoder learns to deterministically map 3D assets into implicit function parameters; then, a conditional diffusion model is trained on the encoder's outputs. Shap-E converges faster than Point-E and achieves comparable or better sample quality, with smoother edges and clearer shadows.

**ProlificDreamer** (Tsinghua University, May 2023) introduced **Variational Score Distillation (VSD)**, a principled particle-based variational framework that addresses the over-saturation, over-smoothing, and low-diversity problems of SDS. While SDS treats the 3D parameters as a constant, VSD models them as a random variable and infers their distribution. VSD naturally generalizes SDS and produces significantly higher-fidelity and more diverse 3D assets.

### Multi-View Diffusion and Gaussian Splatting (2023-2024)

Two major technical developments reshaped the field in late 2023 and 2024: multi-view diffusion models and 3D Gaussian splatting.

**MVDream** (2023) was a multi-view diffusion model that generates consistent multi-view images from text prompts, providing much stronger 3D priors than single-view diffusion models. By fine-tuning a pretrained 2D diffusion model to produce multiple views simultaneously, MVDream significantly reduced the Janus problem that plagued earlier SDS-based methods.

**3D Gaussian Splatting** (2023) emerged as an alternative 3D representation to NeRFs, using explicit 3D Gaussian primitives that can be rendered in real time. Its explicit nature made it easier to incorporate 3D priors and avoid artifacts like the Janus problem. Several works adapted Gaussian splatting for text-to-3D generation:

- **GSGEN** (CVPR 2024) was the first approach to generate multi-view consistent 3D assets using 3D Gaussian splatting, exploiting the explicit nature of Gaussians to incorporate 3D prior information.
- **GaussianDreamer** (CVPR 2024) bridged 2D and 3D diffusion models, using a 3D diffusion model for initialization and a 2D model for enriching geometry and appearance. It could generate a high-quality 3D instance within 15 minutes on one GPU.

**Direct2.5** (CVPR 2024) employed multi-view 2.5D diffusion fine-tuned from a pretrained 2D model, achieving diverse 3D content generation in only 10 seconds without SDS optimization.

**DMV3D** used a transformer-based 3D large reconstruction model to denoise multi-view diffusion, incorporating a triplane NeRF representation for single-stage 3D generation in 30 seconds.

**SV3D** (Stability AI, 2024) adapted video diffusion models for novel multi-view synthesis, leveraging the generalization and multi-view consistency properties of video models with explicit camera control.

### Commercialization (2024-2025)

By 2024 and 2025, text-to-3D technology had moved from research into commercial products and production-ready workflows.

**Meshy AI** is a commercial platform offering text-to-3D and image-to-3D generation, plus texturing and import/export workflows. It produces 3D models suitable for use by 3D artists, game developers, and creators.

**Tripo AI (Tripo3D)** is a generative AI platform that turns text prompts or images into 3D meshes via a web app, API, and plugins for popular 3D software. Its Algorithm 3.0 beta (August 2025) generates models in just 10 seconds with clean topology, sharp geometry, and intelligent part segmentation.

**Rodin** is another commercial platform noted for producing the best textures in comparative evaluations, though with heavier, less editable meshes.

These tools represent the beginning of a broader shift in which AI-generated 3D assets enter mainstream production, particularly in gaming, e-commerce, and spatial computing.

## Key Approaches

### Score Distillation Sampling (SDS)

Score Distillation Sampling, introduced by DreamFusion, is the foundational technique for optimization-based text-to-3D generation. The core idea is to use a pretrained 2D text-to-image [diffusion model](/wiki/diffusion_models) to provide gradient signals for optimizing a 3D representation.

The SDS process works as follows:

1. **Render:** The current 3D representation (such as a NeRF or Gaussian splat field) is rendered from a randomly sampled camera viewpoint to produce a 2D image.
2. **Add noise:** Random noise is added to the rendered image at a randomly sampled diffusion timestep.
3. **Predict noise:** The pretrained diffusion model predicts the noise that was added, conditioned on the text prompt.
4. **Compute gradient:** The difference between the predicted noise and the added noise provides a gradient signal indicating how to modify the 3D representation so that its renderings better match the text-conditioned diffusion model's expectation.
5. **Update:** The 3D representation's parameters are updated via gradient descent.
6. **Repeat:** Steps 1 through 5 are repeated across many viewpoints and timesteps until convergence.

SDS enables text-to-3D generation without any 3D training data, relying entirely on the visual knowledge encoded in pretrained 2D diffusion models. However, SDS suffers from known issues including over-saturation, over-smoothing, mode collapse (producing averaged rather than sharp results), and the Janus problem.

### Variational Score Distillation (VSD)

Variational Score Distillation, introduced by ProlificDreamer, extends SDS by modeling the 3D parameters as a random variable rather than a constant. Instead of seeking a single optimal 3D representation, VSD infers a distribution of 3D representations that are consistent with the text prompt.

Key advantages of VSD over SDS include:

- SDS is revealed to be a special case of VSD, explaining its limitations.
- VSD produces higher-fidelity results with more realistic textures and sharper details.
- VSD generates more diverse outputs and works well with various classifier-free guidance (CFG) weights, whereas SDS produces poor samples with both small and large CFG weights.
- VSD provides a more theoretically principled framework grounded in variational inference.

### NeRF-Based Generation

NeRF-based text-to-3D methods optimize a [neural radiance field](/wiki/neural_radiance_field) to match a text description using diffusion model guidance (typically via SDS or VSD).

The NeRF representation maps 3D coordinates (x, y, z) and viewing direction to a color value (r, g, b) and a volumetric density value. This continuous representation allows smooth, high-detail rendering from any viewpoint. During text-to-3D optimization, the NeRF is rendered from random viewpoints and the resulting images are scored by the diffusion model.

**Advantages:** NeRFs produce smooth, continuous geometry with view-dependent effects such as specular highlights and transparency. They are well-suited for rendering high-quality images of the generated 3D content.

**Disadvantages:** NeRFs are implicit representations that are difficult to export directly as meshes for use in game engines or 3D software. Extracting meshes from NeRFs (via marching cubes, for example) can produce noisy or chaotic topology. Rendering is also relatively slow compared to explicit representations.

### Gaussian Splatting-Based Generation

3D Gaussian splatting represents scenes as collections of 3D Gaussian primitives, each with a position, covariance (shape and orientation), opacity, and color/spherical harmonics coefficients. Unlike NeRFs, Gaussians are explicit primitives that can be rendered in real time using a differentiable rasterization pipeline.

For text-to-3D generation, Gaussian splatting offers several advantages:

- **Speed:** Both optimization and rendering are significantly faster than NeRF-based methods. GaussianDreamer generates a 3D object in 15 minutes versus 1.5 to 3 hours for DreamFusion.
- **Explicit geometry:** The explicit nature of Gaussians makes it easier to incorporate 3D priors and constraints, reducing artifacts like the Janus problem.
- **Real-time rendering:** Generated assets can be rendered in real time, enabling interactive exploration and integration with game engines.
- **Controllability:** Methods like MVControl add conditions such as edge maps, depth maps, and normal maps to enhance the controllability of the generation process.

### Multi-View Diffusion

Multi-view diffusion models generate multiple consistent views of an object simultaneously, rather than independently scoring single views. This approach provides much stronger 3D consistency and significantly mitigates the Janus problem.

Key multi-view diffusion approaches include:

| Method | Key Innovation | Speed |
|---|---|---|
| MVDream | Fine-tunes a pretrained 2D diffusion model for multi-view generation | Used as prior in optimization |
| Direct2.5 | Multi-view 2.5D diffusion with normal-conditioned image generation | ~10 seconds |
| DMV3D | Transformer-based reconstruction model with triplane NeRF | ~30 seconds |
| SV3D | Adapts video diffusion for novel multi-view synthesis | Variable |
| DSplats (Apple) | Denoises multiview images using Gaussian splat-based reconstructors | Variable |
| MVD-Fusion | Depth-consistent multi-view generation with depth projection features | Variable |

Multi-view diffusion models can be used as standalone generation methods or as priors within SDS/VSD optimization pipelines, where they provide multi-view consistent guidance instead of single-view guidance.

### Direct 3D Generation

Some approaches bypass optimization entirely and train models that directly output 3D representations from text or image inputs in a single forward pass.

**Point-E** (OpenAI) generates 3D point clouds in two stages: a text-to-image model produces a synthetic view, then a point cloud diffusion model generates a 3D point cloud conditioned on the image. The entire process takes 1 to 2 minutes.

**Shap-E** (OpenAI) directly generates the parameters of 3D implicit functions (capable of rendering as both meshes and NeRFs) using a conditional diffusion model. It is faster and produces better quality than Point-E.

**Large Reconstruction Models (LRMs)** use transformer architectures to directly predict 3D representations from one or a few input images, achieving near-instant 3D generation.

Direct generation methods trade off some quality for dramatic speed improvements, making them suitable for interactive applications and rapid prototyping.

## Notable Models and Tools

| Model/Tool | Developer | Year | Approach | Speed | Output Format | Open Source |
|---|---|---|---|---|---|---|
| DreamFusion | Google Research / UC Berkeley | 2022 | SDS + NeRF | 1.5-3 hours | NeRF (volumetric) | No (paper only) |
| Point-E | OpenAI | 2022 | Two-stage diffusion | 1-2 minutes | Point cloud | Yes |
| Magic3D | NVIDIA | 2022 | Coarse-to-fine SDS + mesh | ~40 minutes | Textured mesh | No |
| Shap-E | OpenAI | 2023 | Implicit function diffusion | Seconds | Mesh + NeRF | Yes |
| ProlificDreamer | Tsinghua University | 2023 | VSD + NeRF | Hours | NeRF | Yes |
| MVDream | Multi-institution | 2023 | Multi-view diffusion prior | Used in optimization | Views for reconstruction | Yes |
| GSGEN | Multi-institution | 2024 | SDS + Gaussian splatting | Faster than NeRF methods | 3D Gaussians | Yes |
| GaussianDreamer | HUST | 2024 | 2D+3D diffusion + Gaussians | ~15 minutes | 3D Gaussians | Yes |
| Meshy AI | Meshy | 2024+ | Proprietary | Seconds | Textured mesh (various formats) | No |
| Tripo AI | Tripo3D | 2024+ | Proprietary (Algorithm 3.0) | ~10 seconds | Mesh (various formats) | No |
| Rodin | Deemos | 2024+ | Proprietary | Variable | Textured mesh | No |

## Applications

### Gaming

Text-to-3D generation has significant potential in game development, where the creation of 3D assets (characters, props, environments) is one of the most time-consuming and expensive parts of production. AI-generated 3D models can serve as starting points that artists refine, or in some cases can be used directly for background objects and procedurally generated content. Tools like Tripo AI and Meshy provide export formats compatible with major game engines like Unity and [Unreal Engine](/wiki/unreal_engine).

### Virtual Reality and Augmented Reality

The convergence of AI and spatial computing is creating new possibilities for VR and AR content creation. Text-to-3D tools can generate immersive environments and objects for virtual worlds without requiring specialized 3D modeling skills. VRCopilot is one example of a system that integrates generative models into immersive authoring workflows for layout design in VR. The XR market reached a valuation of $92.5 billion in 2024 and is projected to grow to $1.9 trillion by 2032, driving demand for efficient 3D content creation tools.

### Product Design and E-Commerce

Designers use text-to-3D generation to rapidly prototype product concepts, exploring visual possibilities before committing to full production. E-commerce platforms are adopting 3D product visualization to allow customers to view products from any angle, and text-to-3D tools can accelerate the creation of 3D product models from catalog descriptions.

### Architecture and Interior Design

Text-to-3D tools enable architects and interior designers to quickly generate 3D visualizations of building concepts, furniture arrangements, and spatial layouts. AI can generate different design options based on user preferences and requirements, creating a more personalized and efficient design process. The integration of real-time rendering engines (like Unreal Engine 5) with AI-generated 3D content allows designers to view their creations with cinematic lighting in real time.

### Film and Visual Effects

The VFX industry uses text-to-3D generation for rapid asset creation, concept art exploration, and pre-visualization. AI-generated 3D models can serve as starting geometry for artists to refine, significantly reducing the time required for asset production.

### 3D Printing

Text-to-3D models can be exported as mesh files suitable for 3D printing, enabling the rapid creation of physical objects from text descriptions. This application is particularly relevant for rapid prototyping and custom manufacturing.

## Current Limitations

### The Janus Problem (Multi-Face Artifacts)

The Janus problem is one of the most well-known limitations of text-to-3D generation. Named after the two-faced Roman deity, it refers to a failure mode where the generated 3D object displays multiple canonical views (such as multiple faces on a human figure) instead of a single consistent appearance. When asked to generate a 3D model of a person or animal, the model may produce an object with faces visible from multiple directions rather than a proper back view.

The Janus problem arises because the underlying 2D diffusion models are trained on images and lack a true understanding of 3D structure. Consequently, while rendered images might appear plausible from individual viewpoints, they often fail to represent a consistent, unified 3D object. The problem is most severe for symmetric or ambiguous prompts.

Solutions include multi-view diffusion priors (such as MVDream), orientation-controlled diffusion models, negative prompt algorithms (Perp-Neg), and Gaussian splatting-based methods that can incorporate explicit 3D geometric constraints. While these approaches have significantly reduced the frequency of Janus artifacts, the problem is not fully solved.

### Geometric Quality and Topology

Generated 3D models often suffer from issues with mesh topology, including holes, self-intersections, excessive polygon counts, and chaotic surface structure. These issues make the raw output difficult to use directly in production workflows that require clean, well-organized topology (such as character animation rigging). Methods that produce NeRFs require an additional mesh extraction step (such as marching cubes), which can introduce further artifacts.

Commercial tools like Tripo AI have made significant progress on topology quality, with Algorithm 3.0 producing cleaner meshes with intelligent part segmentation, but generated topology still generally falls short of hand-crafted artist work.

### Texture and Material Quality

While text-to-3D models produce textures that look reasonable in rendered images, the underlying UV maps and texture atlases are often of lower quality than those created by human artists. Material properties (metallic, roughness, subsurface scattering) are typically baked into the texture rather than represented as separate PBR (physically-based rendering) channels, limiting the realism of the generated assets under varying lighting conditions.

### Speed vs. Quality Trade-Off

There is a persistent trade-off between generation speed and output quality. Optimization-based methods (SDS/VSD) produce higher-quality results but require minutes to hours of computation. Direct generation methods (Point-E, Shap-E, LRMs) are fast (seconds to minutes) but typically produce lower-fidelity results. Commercial tools have made significant progress in closing this gap, with Tripo AI's Algorithm 3.0 producing results in 10 seconds, but the quality gap with the best optimization-based methods remains.

### Limited Complexity

Current text-to-3D models generally perform best on single objects or simple compositions. Generating complex multi-object scenes, detailed environments, or articulated characters with proper skeletal structure remains challenging. The models also struggle with fine-grained text adherence, particularly for specific quantities, spatial relationships, and small details mentioned in prompts.

### Animation and Rigging

Most text-to-3D methods produce static 3D models without animation rigs, skeletal structures, or blend shapes needed for animation. Producing "animation-ready" 3D assets from text remains an active area of research. Some emerging approaches combine text-to-3D generation with AI-based auto-rigging, but the results are not yet production-quality for most applications.

## Future Directions

### Toward Production-Ready Workflows

The most disruptive trend in the 3D content creation industry is the rapid maturation of AI-powered tools, with what began as experimental text-to-3D concepts evolving into production-ready workflows. By 2026, the focus is expected to shift from manual topology and mesh editing to pure creative direction, empowered by intelligent tools that automate technical hurdles and democratize high-fidelity 3D asset generation.

### Multimodal 3D Generation

Emerging approaches like WorldLabs' Marble aim to generate 3D worlds from multiple input modalities, including text, images, video, and spatial layouts. These multimodal systems promise to create richer, more complex 3D environments than text-only approaches.

### Real-Time Rendering Integration

The integration of AI-generated 3D content with real-time rendering engines (such as [Unreal Engine](/wiki/unreal_engine) 5) is a major trend. This enables artists to view AI-generated 3D models with cinematic lighting in real time and seamlessly incorporate them into interactive applications. AI is also being used to automatically rig and animate static 3D models with realistic physics and movement.

### 4D Generation (3D + Time)

An emerging research direction is "4D generation," which produces 3D objects or scenes that change over time. This combines text-to-3D generation with motion synthesis, producing animated 3D content from text descriptions. Examples include generating a 3D character that walks or a flower that blooms, all from a single text prompt.

### Improved Physical Accuracy

As multi-view diffusion models and 3D-aware architectures mature, future text-to-3D systems are expected to produce outputs with more physically accurate geometry, proper material properties (PBR channels), and correct scale relative to real-world objects. This will be critical for applications in architecture, engineering, and manufacturing.

### Democratization

Tools like Meshy AI and Tripo AI are making 3D content creation accessible to users without traditional 3D modeling expertise. This democratization is expected to accelerate as model quality improves and generation times decrease, potentially transforming industries from independent game development to e-commerce to education.

## See Also

- [Generative AI](/wiki/generative_ai)
- [Text-to-Image](/wiki/text-to-image)
- [Text-to-Video](/wiki/text-to-video)
- [Diffusion Models](/wiki/diffusion_models)
- [Neural Radiance Field](/wiki/neural_radiance_field)
- [Transformer](/wiki/transformer)
- [3D Gaussian Splatting](/wiki/3d_gaussian_splatting)
- [OpenAI](/wiki/openai)
- [Google DeepMind](/wiki/google_deepmind)
- [NVIDIA](/wiki/nvidia)

## References

1. Poole, B., Jain, A., Barron, J.T., and Mildenhall, B. "DreamFusion: Text-to-3D using 2D Diffusion." arXiv:2209.14988 (2022). [https://arxiv.org/abs/2209.14988](https://arxiv.org/abs/2209.14988)
2. "DreamFusion: Text-to-3D using 2D Diffusion." Project page. [https://dreamfusion3d.github.io/](https://dreamfusion3d.github.io/)
3. Lin, C.H., et al. "Magic3D: High-Resolution Text-to-3D Content Creation." NVIDIA Research. [https://research.nvidia.com/labs/dir/magic3d/](https://research.nvidia.com/labs/dir/magic3d/)
4. "Point-E: A system for generating 3D point clouds from complex prompts." OpenAI. [https://openai.com/index/point-e/](https://openai.com/index/point-e/)
5. "Shap-E: Generating Conditional 3D Implicit Functions." OpenAI, GitHub. [https://github.com/openai/shap-e](https://github.com/openai/shap-e)
6. Wang, Z., et al. "ProlificDreamer: High-Fidelity and Diverse Text-to-3D Generation with Variational Score Distillation." NeurIPS 2023. [https://arxiv.org/abs/2305.16213](https://arxiv.org/abs/2305.16213)
7. Shi, Y., et al. "MVDream: Multi-view Diffusion for 3D Generation." ICLR 2024. [https://arxiv.org/abs/2308.16512](https://arxiv.org/abs/2308.16512)
8. Chen, Z., et al. "Text-to-3D using Gaussian Splatting." CVPR 2024. [https://arxiv.org/abs/2309.16585](https://arxiv.org/abs/2309.16585)
9. Yi, T., et al. "GaussianDreamer: Fast Generation from Text to 3D Gaussians by Bridging 2D and 3D Diffusion Models." CVPR 2024. [https://github.com/hustvl/GaussianDreamer](https://github.com/hustvl/GaussianDreamer)
10. "Neural radiance field." Wikipedia. [https://en.wikipedia.org/wiki/Neural_radiance_field](https://en.wikipedia.org/wiki/Neural_radiance_field)
11. "What is NeRF? Neural Radiance Fields Explained." AWS. [https://aws.amazon.com/what-is/neural-radiance-fields/](https://aws.amazon.com/what-is/neural-radiance-fields/)
12. "Meshy AI: The #1 AI 3D Model Generator." Meshy. [https://www.meshy.ai/](https://www.meshy.ai/)
13. "Tripo AI: From Text Prompt to 3D Model in Seconds." Tripo3D. [https://www.tripo3d.ai/features/text-to-3d-model](https://www.tripo3d.ai/features/text-to-3d-model)
14. Lu, H., et al. "Direct2.5: Diverse Text-to-3D Generation via Multi-view 2.5D Diffusion." CVPR 2024. [https://openaccess.thecvf.com/content/CVPR2024/html/Lu_Direct2.5_Diverse_Text-to-3D_Generation_via_Multi-view_2.5D_Diffusion_CVPR_2024_paper.html](https://openaccess.thecvf.com/content/CVPR2024/html/Lu_Direct2.5_Diverse_Text-to-3D_Generation_via_Multi-view_2.5D_Diffusion_CVPR_2024_paper.html)
15. "DSplats: 3D Generation by Denoising Splats-Based Multiview Diffusion Models." Apple Machine Learning Research. [https://machinelearning.apple.com/research/dsplats-3d-generation](https://machinelearning.apple.com/research/dsplats-3d-generation)
16. "SV3D: Novel Multi-view Synthesis and 3D Generation from a Single Image using Latent Video Diffusion." Project page. [https://sv3d.github.io/](https://sv3d.github.io/)
17. Armandpour, M., et al. "Re-imagine the Negative Prompt Algorithm: Transform 2D Diffusion into 3D, alleviate Janus problem and Beyond." arXiv:2304.04968. [https://arxiv.org/abs/2304.04968](https://arxiv.org/abs/2304.04968)
18. "Tripo AI Review (2025): 3D Model Generation from Text & Images." Skywork AI. [https://skywork.ai/blog/tripo-ai-review-2025/](https://skywork.ai/blog/tripo-ai-review-2025/)
19. "Is AI Ready for High-Quality 3D Assets in 2025?" SimInsights. [https://www.siminsights.com/ai-3d-generators-2025-production-readiness/](https://www.siminsights.com/ai-3d-generators-2025-production-readiness/)
20. "5 AI 3D Breakthroughs in 2025 That Changed Production Forever." Tripo3D. [https://www.tripo3d.ai/blog/5-ai-breakthroughs-in-2025](https://www.tripo3d.ai/blog/5-ai-breakthroughs-in-2025)
21. "3D Design Trends 2026: 8 trends Shaping the Future of 3D." Envato Elements. [https://elements.envato.com/learn/3d-design-trends](https://elements.envato.com/learn/3d-design-trends)
22. "Addressing Janus Issue in Text-to-3D via Orientation-Controlled Diffusion Models." Springer. [https://link.springer.com/article/10.1134/S1054661824700962](https://link.springer.com/article/10.1134/S1054661824700962)
23. "GradeADreamer: Enhanced Text-to-3D Generation Using Gaussian Splatting and Multi-View Diffusion." arXiv. [https://arxiv.org/html/2406.09850v1](https://arxiv.org/html/2406.09850v1)
24. "How Generative AI Is Revolutionizing AR/VR." Travancore Analytics. [https://www.travancoreanalytics.com/en-us/generative-ai-transformation/](https://www.travancoreanalytics.com/en-us/generative-ai-transformation/)
