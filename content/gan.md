---
title: "GAN"
slug: "gan"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Generative Adversarial Networks (GANs)

Generative Adversarial Networks, or GANs, are a class of machine learning models introduced by [Ian Goodfellow](/index.php?title=Ian_Goodfellow&action=edit&redlink=1) and his colleagues in 2014. GANs consist of two neural networks, a generator and a discriminator, which are trained simultaneously in a process of competing against each other. GANs have been widely used in various applications, including image synthesis, data augmentation, and semi-supervised learning.

### GAN Architecture

The architecture of a GAN is composed of two primary components: the generator (G) and the discriminator (D). The generator takes a random noise vector as input and produces a synthetic data sample, while the discriminator takes both real and synthetic samples and attempts to classify them as either "real" or "generated." The generator and discriminator are usually implemented as deep neural networks.

The training process of GANs involves a minimax game between the generator and the discriminator. The generator aims to produce realistic samples that can fool the discriminator, while the discriminator aims to accurately distinguish between real and generated samples. Through this adversarial training, the generator becomes better at producing realistic samples, and the discriminator becomes better at detecting fake samples.

### Applications of GANs

GANs have been applied in a wide variety of fields due to their capability to generate high-quality data. Some notable applications include:

- **Image synthesis:** GANs can generate realistic images by learning the distribution of a given dataset. Examples include [DeepArt](/index.php?title=DeepArt&action=edit&redlink=1) and [StyleGAN](/index.php?title=StyleGAN&action=edit&redlink=1), which can generate high-resolution images of faces, objects, and scenes.

- **Data augmentation:** GANs can be used to augment datasets by generating additional training samples, which can help improve the performance of machine learning models, especially in cases where the original dataset is small or imbalanced.

- **Semi-supervised learning:** GANs can be combined with other techniques to improve the performance of classifiers in scenarios where labeled data is scarce.

- **Image-to-image translation:** GANs can be used for tasks such as style transfer, where the goal is to transform an image from one domain to another while preserving its content. [CycleGAN](/index.php?title=CycleGAN&action=edit&redlink=1) and [pix2pix](/index.php?title=Pix2pix&action=edit&redlink=1) are popular examples of GANs for this task.

## Explain Like I'm 5 (ELI5)

Imagine that you have two friends, one who is great at drawing (the generator) and another who is great at telling whether a drawing is real or fake (the discriminator). Your drawing friend wants to become better at drawing, so they keep making drawings and showing them to the friend who can tell if they're real or fake. The better the drawing friend becomes, the harder it is for the other friend to tell if the drawing is real or fake. In the end, your drawing friend becomes so good at drawing that it's almost impossible to tell if their drawings are real or fake. This is what GANs do in machine learning, where the generator tries to create realistic data, and the discriminator tries to tell if the data is real or fake.