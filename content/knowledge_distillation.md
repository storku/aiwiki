---
title: "Knowledge distillation"
slug: "knowledge_distillation"
categories:
  - "Machine_learning"
  - "Deep_learning"
  - "Neural_networks"
  - "Artificial_intelligence"
  - "Model_compression"
  - "Transfer_learning"
---[Template:Infobox machine learning](/index.php?title=Template:Infobox_machine_learning&action=edit&redlink=1)

**Knowledge distillation** (also known as **model distillation**) is a [model compression](/index.php?title=Model_compression&action=edit&redlink=1) technique in [machine learning](/wiki/machine_learning) and [artificial intelligence](/wiki/artificial_intelligence) where a smaller, more efficient "student" [neural network](/wiki/neural_network) learns to replicate the behavior of a larger, more complex "teacher" network. The technique enables powerful neural networks to transfer their learned expertise into smaller, faster models while retaining most of their predictive performance, achieving **40-90% model size reduction with less than 5% performance loss** across [computer vision](/wiki/computer_vision), [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), and [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1) applications.[&#91;1&#93;](#cite_note-hinton2015-1)[&#91;2&#93;](#cite_note-neptune2024-2)

The technique fundamentally reimagines how neural networks learn: rather than training solely on labeled data, smaller student models learn from both ground truth labels and the probability distributions produced by larger teacher models. These [soft targets](/index.php?title=Soft_target&action=edit&redlink=1) contain valuable "dark knowledge" about inter-class similarities—information that standard one-hot labels cannot convey.[&#91;1&#93;](#cite_note-hinton2015-1) The aim is to maintain a high level of accuracy in the compact student model comparable to the larger model, thus achieving model [compression](/index.php?title=Compression&action=edit&redlink=1) without significant loss of validity. Knowledge distillation is commonly used to reduce the size of deep [neural network](/wiki/neural_network) models (or [ensembles](/index.php?title=Ensemble_learning&action=edit&redlink=1) of multiple models) so that they can be deployed on lower-power or edge devices while preserving most of the original model's performance. It has become especially important for compressing very large models like [large language models](/wiki/large_language_model) in recent years.

## History

### Early foundations and precursors

The intellectual roots of knowledge distillation extend back to early work on neural network compression and teacher-student learning paradigms. In the early 1990s, research on theoretical teacher-student models in [statistical mechanics](/index.php?title=Statistical_mechanics&action=edit&redlink=1) explored knowledge transfer mechanisms. Notably, **Jürgen Schmidhuber** in 1991 described a two-network system where one [recurrent neural network](/wiki/recurrent_neural_network) learned from another, representing an early precursor to modern knowledge distillation concepts.[&#91;3&#93;](#cite_note-schmidhuber1991-3) Other researchers in the early 1990s studied theoretical teacher-student configurations in committee machines, exploring statistical mechanics of knowledge transfer.

### Model compression (2006)

The intellectual lineage of modern knowledge distillation directly traces to 2006, when **Cristian Bucilă, Rich Caruana, and Alexandru Niculescu-Mizil** published "Model Compression" at [KDD](/index.php?title=KDD&action=edit&redlink=1) 2006.[&#91;4&#93;](#cite_note-caruana2006-4) This pioneering work demonstrated that large ensembles of hundreds or thousands of classifiers could be compressed into single neural networks with little loss in accuracy. Their method involved using the large ensemble to label a dataset and then training a smaller network on those soft labels, achieving a model "a thousand times smaller and faster" that matched the ensemble's performance. Caruana's team introduced the fundamental concept of using a complex model's predictions as training targets for a simpler model, and developed the MUNGE method for generating synthetic training data when original data was unavailable.

### The Hinton breakthrough (2015)

The field crystallized with **Geoffrey Hinton, Oriol Vinyals, and Jeff Dean's** March 2015 paper "Distilling the Knowledge in a Neural Network," published as arXiv:1503.02531 and presented at the [NIPS](/index.php?title=NIPS&action=edit&redlink=1) 2014 Deep Learning Workshop.[&#91;1&#93;](#cite_note-hinton2015-1) This seminal work introduced three transformative concepts that formalized and popularized the approach:

- The formalization of "distillation" as a knowledge transfer mechanism

- The [temperature](/index.php?title=Temperature_(machine_learning)&action=edit&redlink=1)-based [softmax](/index.php?title=Softmax_function&action=edit&redlink=1) approach for creating soft targets

- The notion of "dark knowledge" residing in the probability distributions over incorrect answers

Hinton's team demonstrated dramatic results on [MNIST](/index.php?title=MNIST_database&action=edit&redlink=1), where a distilled student with 800 hidden units achieved 74 test errors compared to 146 errors when trained conventionally—a **49% error reduction** purely from learning from a larger teacher.[&#91;1&#93;](#cite_note-hinton2015-1) On large-scale [speech recognition](/index.php?title=Speech_recognition&action=edit&redlink=1), they showed that a single distilled model captured 80% of the performance improvement from a 10× ensemble. They also introduced the concept of **specialist ensembles** for handling confusable classes, where specialist models focus on distinguishing between frequently confused classes while a generalist model handles the overall task.

### Rapid methodological expansion (2015-2020)

Knowledge distillation rapidly diversified after 2015 into multiple research directions:

**Feature-based distillation** was established by **Adriana Romero and colleagues** from [Yoshua Bengio](/index.php?title=Yoshua_Bengio&action=edit&redlink=1)'s lab, who published "FitNets: Hints for Thin Deep Nets" at [ICLR](/index.php?title=ICLR&action=edit&redlink=1) 2015.[&#91;5&#93;](#cite_note-romero2015-5) This work extended distillation beyond final outputs to intermediate layer representations, introducing **hint learning** where teacher's hidden layers provide guidance to student layers.

**Attention transfer mechanisms** were introduced by **Sergey Zagoruyko and Nikos Komodakis** in their 2017 ICLR paper "Paying More Attention to Attention," demonstrating that transferring spatial [attention maps](/index.php?title=Attention_mechanism&action=edit&redlink=1) between teacher and student networks improved [CNN](/wiki/convolutional_neural_network) performance.[&#91;6&#93;](#cite_note-zagoruyko2017-6)

**Online distillation** emerged through **Ying Zhang and colleagues** who published "Deep Mutual Learning" at [CVPR](/index.php?title=CVPR&action=edit&redlink=1) 2018, showing that multiple student networks could teach each other simultaneously without requiring a pre-trained teacher.[&#91;7&#93;](#cite_note-zhang2018-7)

**Self-distillation** was established by **Tommaso Furlanello's team** who introduced "Born-Again Neural Networks" at [ICML](/index.php?title=ICML&action=edit&redlink=1) 2018, demonstrating that distilling a network into an identically-sized student could actually surpass the original teacher's performance.[&#91;8&#93;](#cite_note-furlanello2018-8) This established self-distillation as a viable technique for model improvement rather than just compression.

**Relation-based distillation** was advanced by **Wonpyo Park and colleagues** with "Relational Knowledge Distillation" at CVPR 2019, showing that transferring relational knowledge about how samples relate to each other could enable students to outperform teachers in [metric learning](/index.php?title=Metric_learning&action=edit&redlink=1) tasks.[&#91;9&#93;](#cite_note-park2019-9)

By 2020, **Jianping Gou and colleagues** published "Knowledge Distillation: A Survey" in the International Journal of Computer Vision, organizing the field into systematic categories by knowledge type, training schemes, and applications.[&#91;10&#93;](#cite_note-gou2021-10)

## Technical methodology

### Overview

Knowledge distillation operates on the premise that **the knowledge in a neural network resides not just in its learned parameters, but in the learned mapping from inputs to outputs**.[&#91;1&#93;](#cite_note-hinton2015-1) When a well-trained model classifies an image, it produces a probability distribution across all possible classes. These relative probabilities encode rich information about visual similarities and semantic relationships that a binary correct/incorrect label cannot capture.

The distillation framework involves two key participants: the **teacher model**—typically a large, complex network or [ensemble](/index.php?title=Ensemble_learning&action=edit&redlink=1)—trained to high accuracy but requiring substantial computational resources; and the **student model**—a smaller, more efficient architecture—that learns to mimic the teacher's behavior while maintaining practical [inference](/wiki/inference) speed and memory footprint.

### Temperature-scaled softmax

Neural networks typically produce class probabilities through a [softmax function](/index.php?title=Softmax_function&action=edit&redlink=1) that converts [logits](/index.php?title=Logit&action=edit&redlink=1) (unnormalized scores) 
  
    
      
        
          z
          
            i
          
        
      
    
    {\displaystyle z_{i}}
  
![{\displaystyle z_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5c6e920bac39ad09fff4efef16254595091a1025) into probabilities. Knowledge distillation introduces a **temperature parameter** 
  
    
      
        T
      
    
    {\displaystyle T}
  
![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) that controls distribution softness:[&#91;1&#93;](#cite_note-hinton2015-1)

  
    
      
        
          q
          
            i
          
        
        =
        
          
            
              exp
              &#x2061;
              (
              
                z
                
                  i
                
              
              
                /
              
              T
              )
            
            
              
                &#x2211;
                
                  j
                
              
              exp
              &#x2061;
              (
              
                z
                
                  j
                
              
              
                /
              
              T
              )
            
          
        
      
    
    {\displaystyle q_{i}={\frac {\exp(z_{i}/T)}{\sum _{j}\exp(z_{j}/T)}}}
  
![{\displaystyle q_{i}={\frac {\exp(z_{i}/T)}{\sum _{j}\exp(z_{j}/T)}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b42103ee54c6bd6f20256a240e9de4267fb2219f)
At temperature 
  
    
      
        T
        =
        1
      
    
    {\displaystyle T=1}
  
![{\displaystyle T=1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6664a95bcd54fdd09a9178e106bd05b1c849856), this reduces to standard softmax, often producing sharp distributions with one dominant class. As temperature increases, the distribution softens—probability mass spreads more evenly across classes. A higher 
  
    
      
        T
      
    
    {\displaystyle T}
  
![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) produces a "softer" probability distribution that reveals more information about how the teacher model views the similarity between classes. The temperature parameter typically ranges from **2 to 20 for effective distillation**, with common values around 5-10.[&#91;1&#93;](#cite_note-hinton2015-1)[&#91;11&#93;](#cite_note-pytorch2024-11)

### Loss function

Knowledge distillation employs a combined loss function with two complementary components:[&#91;1&#93;](#cite_note-hinton2015-1)[&#91;12&#93;](#cite_note-keras2024-12)

  
    
      
        
          L
          
            t
            o
            t
            a
            l
          
        
        =
        &#x03B1;
        &#x22C5;
        
          L
          
            C
            E
          
        
        (
        
          y
          
            t
            r
            u
            e
          
        
        ,
        &#x03C3;
        (
        
          z
          
            s
          
        
        ;
        T
        =
        1
        )
        )
        +
        (
        1
        &#x2212;
        &#x03B1;
        )
        &#x22C5;
        
          T
          
            2
          
        
        &#x22C5;
        
          L
          
            K
            L
          
        
        (
        &#x03C3;
        (
        
          z
          
            t
          
        
        ;
        T
        =
        &#x03C4;
        )
        ,
        &#x03C3;
        (
        
          z
          
            s
          
        
        ;
        T
        =
        &#x03C4;
        )
        )
      
    
    {\displaystyle L_{total}=\alpha \cdot L_{CE}(y_{true},\sigma (z_{s};T=1))+(1-\alpha )\cdot T^{2}\cdot L_{KL}(\sigma (z_{t};T=\tau ),\sigma (z_{s};T=\tau ))}
  
![{\displaystyle L_{total}=\alpha \cdot L_{CE}(y_{true},\sigma (z_{s};T=1))+(1-\alpha )\cdot T^{2}\cdot L_{KL}(\sigma (z_{t};T=\tau ),\sigma (z_{s};T=\tau ))}](https://wikimedia.org/api/rest_v1/media/math/render/svg/09cec9aea4244e17f8264a16989836f37e32b371)
Where:

- 
  
    
      
        
          L
          
            C
            E
          
        
      
    
    {\displaystyle L_{CE}}
  
![{\displaystyle L_{CE}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/bf2aada2124b02c7e4e66cfe33988138f5cd83b3) is the [cross-entropy loss](/index.php?title=Cross-entropy_loss&action=edit&redlink=1) between the student's predictions and the ground-truth hard labels (**student loss** or **hard loss**)

- 
  
    
      
        
          L
          
            K
            L
          
        
      
    
    {\displaystyle L_{KL}}
  
![{\displaystyle L_{KL}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/63253d5b4799c2a17a4c080541f730aa2cd8d938) is the [Kullback-Leibler divergence](/index.php?title=Kullback-Leibler_divergence&action=edit&redlink=1) between the teacher's soft outputs and the student's soft outputs (**distillation loss** or **soft loss**)

- 
  
    
      
        
          z
          
            s
          
        
      
    
    {\displaystyle z_{s}}
  
![{\displaystyle z_{s}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/890b60b1fc36eae52dc9ca6f8a80cc9996853f7e) and 
  
    
      
        
          z
          
            t
          
        
      
    
    {\displaystyle z_{t}}
  
![{\displaystyle z_{t}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e396fb172660aa223e35c928e2e6985f511d8cc6) are the logits of the student and teacher, respectively

- 
  
    
      
        
          y
          
            t
            r
            u
            e
          
        
      
    
    {\displaystyle y_{true}}
  
![{\displaystyle y_{true}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3c1c94ee8899e15840f2836b2d062e209c928698) is the one-hot encoded ground-truth label

- 
  
    
      
        &#x03C3;
      
    
    {\displaystyle \sigma }
  
![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) is the softmax function with temperature 
  
    
      
        T
      
    
    {\displaystyle T}
  
![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0)

- 
  
    
      
        &#x03C4;
      
    
    {\displaystyle \tau }
  
![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) is the high temperature value used for distillation (
  
    
      
        &#x03C4;
        >
        1
      
    
    {\displaystyle \tau >1}
  
![{\displaystyle \tau >1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecff175786a02d5b6e68996cf5c3f49c4f891a6d))

- 
  
    
      
        &#x03B1;
      
    
    {\displaystyle \alpha }
  
![{\displaystyle \alpha }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b79333175c8b3f0840bfb4ec41b8072c83ea88d3) is the weighting coefficient (typically 0.1 to 0.5) that balances the importance of hard and soft loss terms

- 
  
    
      
        
          T
          
            2
          
        
      
    
    {\displaystyle T^{2}}
  
![{\displaystyle T^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f632936d25e5207ab3ad0e6182882ea3c6a9c7ed) scaling factor balances gradient magnitudes, ensuring that the relative contributions of hard and soft targets remain roughly constant as temperature varies

The **distillation loss** component encourages the student to mimic the teacher by measuring the difference between the soft target distribution produced by the teacher (using high temperature 
  
    
      
        &#x03C4;
      
    
    {\displaystyle \tau }
  
![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c)) and the soft probability distribution produced by the student (using the same temperature 
  
    
      
        &#x03C4;
      
    
    {\displaystyle \tau }
  
![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c)). For a fixed teacher distribution, minimizing KL divergence is equivalent to minimizing the cross-entropy between the two distributions.

The **student loss** component is the standard supervised learning loss that anchors the student's learning to the true data labels. Including this term was found by Hinton et al. to be beneficial, helping when the teacher model is not perfectly accurate.[&#91;1&#93;](#cite_note-hinton2015-1)

It is important to note that the magnitudes of the gradients produced by the soft targets scale by approximately 
  
    
      
        1
        
          /
        
        
          T
          
            2
          
        
      
    
    {\displaystyle 1/T^{2}}
  
![{\displaystyle 1/T^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1343216934067c0db611f32612c229d9452c5bce). Therefore, multiplying the soft loss term by 
  
    
      
        
          T
          
            2
          
        
      
    
    {\displaystyle T^{2}}
  
![{\displaystyle T^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f632936d25e5207ab3ad0e6182882ea3c6a9c7ed) ensures that the relative contributions of the hard and soft targets remain roughly constant as the temperature is varied.[&#91;1&#93;](#cite_note-hinton2015-1)

### Dark knowledge

The **dark knowledge** concept captures information in the teacher's probability distribution over incorrect classes—the relative probabilities of wrong answers that standard cross-entropy training with hard labels cannot access.[&#91;1&#93;](#cite_note-hinton2015-1) Even when the teacher assigns very low probabilities to incorrect classes, the relative magnitudes of these probabilities encode valuable information about similarities between classes (for example recognizing that "7" is more similar to "1" than to "8" in digit recognition). This subtle information in the ratios of unlikely outcomes helps the student learn richer representations and generalize better.

## Taxonomy of approaches

### By knowledge type

This classification focuses on what information is extracted from the teacher model to guide the student. The choice of knowledge source represents a trade-off between simplicity and the richness of the supervisory signal.

#### Response-based distillation

**Response-based distillation** transfers knowledge from the teacher's final output layer—the probability distributions over classes or the logits themselves.[&#91;10&#93;](#cite_note-gou2021-10)[&#91;2&#93;](#cite_note-neptune2024-2) This is the most common and straightforward form of knowledge distillation, directly following the original formulation by Hinton et al. The student model is trained to directly mimic these final predictions using soft targets produced by temperature-scaled softmax. This approach, sometimes called **logit distillation**, is highly versatile because it treats the teacher as a "black box"; it does not require access to the teacher's internal architecture or intermediate representations. This makes it applicable even when the teacher is a proprietary model accessible only through an API. However, its main limitation is that it ignores the vast amount of information encoded in the teacher's hidden layers.

#### Feature-based distillation

**Feature-based distillation** (also known as **hint learning**) transfers knowledge from the intermediate layers (hidden layers) of the teacher model.[&#91;5&#93;](#cite_note-romero2015-5)[&#91;10&#93;](#cite_note-gou2021-10) The rationale is that these layers learn rich, hierarchical feature representations of the data that are crucial to the teacher's performance. The student is guided to learn similar feature maps by minimizing a loss function (for example [L2 loss](/index.php?title=Mean_squared_error&action=edit&redlink=1) or [L1 loss](/index.php?title=L1-norm&action=edit&redlink=1)) between the feature activations of a teacher's "hint" layer and a student's "guided" layer. This provides a more detailed and deep form of supervision, forcing the student to learn not only the final output but also the teacher's internal problem-solving process. This approach often requires some architectural similarity between the teacher and student to effectively match layers, and it can be more complex to implement than response-based methods. However, it enables training thinner and deeper student networks that might be difficult to train from scratch.

#### Relation-based distillation

**Relation-based distillation** focuses on transferring the relationships between data samples or between feature maps, rather than the outputs or features of individual samples.[&#91;9&#93;](#cite_note-park2019-9)[&#91;2&#93;](#cite_note-neptune2024-2) The core idea, inspired by structuralism, is that the meaning of a representation is defined by its relations to other representations. This relational knowledge can be captured by modeling the correlations between feature maps, constructing similarity matrices, distance matrices, or building instance relationship graphs. The student model is then trained to preserve these structural relationships learned by the teacher. This approach has proven particularly effective for tasks like [metric learning](/index.php?title=Metric_learning&action=edit&redlink=1) where the relationships between data points are paramount. Methods include computing distance-wise and angle-wise distillation losses that capture structural knowledge about how samples relate to each other in the teacher's embedding space.

#### Attention-based distillation

**Attention-based distillation** transfers [attention maps](/index.php?title=Attention_mechanism&action=edit&redlink=1) showing where the teacher focuses in the input.[&#91;6&#93;](#cite_note-zagoruyko2017-6) This proves particularly valuable for [object detection](/index.php?title=Object_detection&action=edit&redlink=1), [segmentation](/index.php?title=Image_segmentation&action=edit&redlink=1), and vision tasks where spatial relationships carry semantic meaning. By learning which regions of an image or which parts of a sequence the teacher model considers important, the student can better allocate its limited capacity to the most relevant features.

| Method | Knowledge Source | Mechanism | Advantages | Disadvantages |
| --- | --- | --- | --- | --- |
| Response-Based | Final layer logits/probabilities | Student mimics the teacher's final output distribution. | Simple, universal, architecture-agnostic, teacher can be a black box. | Ignores rich information present in the teacher's intermediate layers. |
| Feature-Based | Intermediate layer feature maps (activations) | Student mimics the teacher's hidden layer representations. | Provides deeper, more detailed supervision ("hints") on the feature extraction process. | Can be complex to match layers between heterogeneous architectures; requires access to teacher's internals. |
| Relation-Based | Relationships between data points or feature maps | Student mimics the structural properties of the teacher's embedding space (for example similarity matrices, feature correlations). | Captures higher-order, structural knowledge; very powerful for tasks like metric learning. | Computationally more intensive; defining and transferring "relations" can be complex. |
| Attention-Based | Spatial or temporal attention maps | Student learns to focus on the same regions or features as the teacher. | Particularly effective for vision and sequence tasks; helps student allocate capacity efficiently. | Requires teacher to have explicit attention mechanisms or spatial structure. |

### By training scheme

This classification is based on how and when the teacher and student models are trained and interact with each other.

#### Offline distillation

**Offline distillation** follows the classic, two-stage approach and is the most common training scheme.[&#91;10&#93;](#cite_note-gou2021-10) In the first stage, a high-capacity teacher model is trained to convergence on a large dataset. In the second stage, the teacher model is "frozen" (its parameters are not updated), and its knowledge is distilled into a separate student model. The main advantage of this method is its simplicity and the ability to leverage powerful, publicly available pre-trained models as off-the-shelf teachers. Hinton's 2015 method and most early works use offline distillation.

#### Online distillation

**Online distillation** trains teacher and student (or multiple students) simultaneously in a single, end-to-end process, with no pre-trained teacher.[&#91;7&#93;](#cite_note-zhang2018-7)[&#91;13&#93;](#cite_note-anil2018-13) Instead, a group of models (peers) are trained from scratch, learning collaboratively and teaching each other. During training, these models learn collaboratively, with the supervisory "teacher" signal for any given student typically generated by an ensemble of the other peer models. This approach is highly efficient as it collapses the two-stage offline process into one, and it is particularly useful in scenarios where a powerful pre-trained teacher is not available. One approach is to have an ensemble of models that learn cooperatively and distill knowledge among themselves during training, sometimes called **mutual learning**.

#### Self-distillation

**Self-distillation** is a special case where the teacher and student models share the same architecture, or where a single model teaches itself.[&#91;8&#93;](#cite_note-furlanello2018-8)[&#91;14&#93;](#cite_note-mobahi2020-14) This can be implemented in several ways: for instance, knowledge from the deeper layers of the network can be used to supervise the shallower layers (a model's later layers act as a teacher for the earlier layers), or the model's predictions from an earlier training epoch can be used as soft targets for a later epoch (an earlier snapshot of the model acts as teacher). Another form is training a model on its own high-confidence predictions alongside ground truth. Counterintuitively, this process has been shown to improve the model's own generalization performance even without an external teacher, acting as a form of implicit regularization that encourages the model to find flatter minima in the loss landscape, which is correlated with better performance on unseen data. Research showed that students can consistently surpass teachers by finding these flatter minima.

| Scheme | Teacher Status | Training Process | Key Advantage | Primary Use Case |
| --- | --- | --- | --- | --- |
| Offline | Pre-trained and frozen | Two-stage: 1. Train teacher. 2. Distill to student. | Simple to implement; can leverage powerful, publicly available models as teachers. | Standard model compression where a strong teacher model already exists. |
| Online | Trained simultaneously with student(s) | Single-stage: All models are trained together, learning from an ensemble of peers. | No need for a pre-trained teacher; more efficient single-stage training pipeline. | Training a group of models from scratch where no single strong teacher is available. |
| Self-Distillation | Is the student model itself | Single-stage: A model's deeper layers or previous states teach its shallower layers or current state. | Improves generalization of a single model without needing an external teacher; acts as a powerful regularizer. | Improving the performance of a given architecture without changing it or adding external dependencies. |

### Advanced variants

Several advanced variants extend the basic knowledge distillation framework:

**Adversarial distillation** uses [GAN](/index.php?title=Generative_adversarial_network&action=edit&redlink=1)-like setups to generate challenging samples or discriminate outputs, where a student and a discriminator network are trained to better match the teacher's output distribution.[&#91;2&#93;](#cite_note-neptune2024-2)

**Multi-teacher distillation** leverages multiple teacher models to transfer diverse knowledge to a single student, with the student learning a weighted combination or ensemble of teacher outputs.[&#91;15&#93;](#cite_note-you2017-15) This can capture complementary expertise from different teachers.

**Cross-modal distillation** transfers knowledge between models that handle different data modalities (for example distilling knowledge from a model trained on images into a model for text, or from RGB to depth images, to transfer high-level reasoning).[&#91;16&#93;](#cite_note-gupta2016-16)

**Data-free distillation** addresses scenarios where original training data is unavailable due to privacy constraints or proprietary restrictions, using techniques like generating synthetic inputs to query the teacher model.[&#91;17&#93;](#cite_note-lopes2017-17)

**Quantized distillation** distills from high-precision (for example FP32) teacher models to low-precision (for example INT8) quantized student models, combining knowledge distillation with [quantization](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1).[&#91;2&#93;](#cite_note-neptune2024-2)

**Lifelong distillation** accumulates knowledge over continual learning scenarios, enabling models to learn new tasks while retaining knowledge from previous tasks.[&#91;2&#93;](#cite_note-neptune2024-2)

**Graph-based distillation** uses graph structures to model intra-data relationships, particularly useful for [graph neural networks](/index.php?title=Graph_neural_networks&action=edit&redlink=1) and relational data.[&#91;2&#93;](#cite_note-neptune2024-2)

**Specialist ensembles** involve using a generalist teacher model along with specialist models that focus on distinguishing confusable classes, as introduced in Hinton's original 2015 paper.[&#91;1&#93;](#cite_note-hinton2015-1) The specialists are trained on data from confusable classes and provide additional supervision for those specific cases.

## Applications

Knowledge distillation has proven to be a versatile and powerful technique, with successful applications across numerous domains in [artificial intelligence](/wiki/artificial_intelligence). Its primary utility lies in enabling the deployment of large, state-of-the-art models in practical, resource-constrained settings.

### Natural language processing

[Natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1) has seen particularly dramatic distillation successes with [transformer](/index.php?title=Transformer_(machine_learning)&action=edit&redlink=1)-based models. Large transformer-based language models such as [BERT](/index.php?title=BERT_(language_model)&action=edit&redlink=1) and [GPT-2](/wiki/gpt-2) achieve high accuracy but are resource-intensive, making knowledge distillation extensively used to compress such models.

#### DistilBERT

A prominent and highly successful example is **[DistilBERT](/index.php?title=DistilBERT&action=edit&redlink=1)**, developed by [Hugging Face](/wiki/hugging_face) researchers in 2019.[&#91;18&#93;](#cite_note-sanh2019-18) Created as a smaller, faster, and lighter version of the [BERT](/index.php?title=BERT_(language_model)&action=edit&redlink=1) model, the distillation process was performed during the pre-training phase. The student model (DistilBERT) was designed with the same general architecture as BERT but with the number of layers reduced by a factor of two (from 12 to 6).

The student was trained to minimize a triple loss function combining:

- A distillation loss (cross-entropy on the teacher's soft predictions)

- The standard masked language modeling (MLM) loss

- A cosine embedding loss to align the hidden state vectors of the student and teacher

The results were remarkable. DistilBERT is **40% smaller** in size (66 million parameters vs. BERT-base's 110 million) and **60% faster** at inference, while retaining **97%** of BERT's language understanding capabilities on the [GLUE benchmark](/index.php?title=GLUE_benchmark&action=edit&redlink=1). This trade-off makes DistilBERT an excellent choice for applications where computational efficiency is critical, without a substantial sacrifice in performance.

#### DistilGPT2

Another notable example is **DistilGPT2**, a distilled version of OpenAI's [GPT-2](/wiki/gpt-2) language model. DistilGPT2 was trained using the smallest GPT-2 (124 million parameters) as the teacher, resulting in a model with 82 million parameters (about **33% fewer parameters**) that is nearly **2× faster** in inference.[&#91;19&#93;](#cite_note-azuredistilgpt2-19) The distilled model does sacrifice some generation quality—for instance, on the WikiText-103 text generation benchmark, GPT-2 achieves a test perplexity of 16.3 whereas DistilGPT2 has a perplexity of 21.1 (lower perplexity is better, indicating the model is more confident in its predictions).

#### Other NLP distillation examples

**TinyBERT** from Huawei Noah's Ark Lab pushed compression further with TinyBERT-4 at only 14.5 million parameters—**7.5× smaller than BERT-base**—achieving 96.8% of BERT's performance with **9.4× faster inference**.[&#91;20&#93;](#cite_note-jiao2020-20)

**MobileBERT**, developed at Google, optimized specifically for mobile deployment with 25.3 million parameters achieving **62 millisecond inference latency on Pixel 4 phones** for 128-token sequences.[&#91;21&#93;](#cite_note-sun2020-21)

The table below summarizes these distilled NLP models:

| Teacher model (size) | Student model (size) | Compression | Student performance |
| --- | --- | --- | --- |
| BERT-base (110M parameters) | **DistilBERT** (66M) | ~40% fewer params, >60% faster inference | ≈97% of teacher accuracy on GLUE benchmark |
| GPT-2 (124M parameters) | **DistilGPT2** (82M) | ~33% fewer params, ~2× faster inference | Perplexity 21.1 vs 16.3 (teacher) on WikiText-103 |
| BERT-base (110M parameters) | **TinyBERT-4** (14.5M) | 7.5× smaller, 9.4× faster inference | 96.8% of teacher accuracy |
| BERT-base (110M parameters) | **MobileBERT** (25.3M) | 4.3× smaller, 62ms latency on mobile | Comparable to BERT-base on downstream tasks |

Distillation has also been used for multilingual models and low-resource languages, enabling efficient deployment for tasks like question answering, machine translation, and text generation on consumer devices or for handling high request volumes.

#### Large language models

With the advent of extremely large language models (LLMs) like [GPT-3](/wiki/gpt-3), [GPT-4](/wiki/gpt-4), and [LLaMA](/wiki/llama), knowledge distillation has become an essential tool for creating smaller, more accessible, and specialized models.[&#91;22&#93;](#cite_note-xu2024-22) Two main approaches are used:

**Black-Box KD** is common when the teacher is a proprietary model accessible only via an API (for example GPT-4). The student model does not have access to the teacher's internal parameters or logits. Instead, it is trained on a dataset of high-quality prompt-response pairs generated by the teacher. The famous Stanford Alpaca model is an example, having been fine-tuned on 52,000 instruction-following examples generated by OpenAI's text-davinci-003 model.

**White-Box KD** is used with open-source LLMs where the full model, including its output distributions and hidden states, is available. This allows for the use of the classic distillation loss on soft targets, which provides a much richer training signal than just the generated text. **MiniLLM** for [LLM](/wiki/large_language_model) distillation uses reverse [KL divergence](/index.php?title=KL_divergence&action=edit&redlink=1) rather than forward KLD to prevent students from overestimating low-probability regions.[&#91;23&#93;](#cite_note-gu2023-23) Researchers have found that for generative tasks, it is often better to use a loss function like reverse KL-divergence, which encourages the student to focus on matching the high-probability outputs (modes) of the teacher's distribution, ensuring correctness and faithfulness.

### Computer vision

[Computer vision](/wiki/computer_vision) applications demonstrate consistent improvements from distillation across multiple tasks. Many state-of-the-art vision models (for image classification, object detection, etc.) are too computationally heavy for real-time use on devices.

#### Image classification

Knowledge distillation was originally demonstrated on image classification tasks. In their 2015 paper, Hinton et al. showed that a student network with 800 rectified linear units, when trained with distillation from a larger teacher, made only 74 errors on the MNIST test set—a significant improvement over the 146 errors it made when trained on the same data with hard labels, and close to the teacher's performance of 67 errors.[&#91;1&#93;](#cite_note-hinton2015-1) Similar successes have been replicated on more complex datasets like [ImageNet](/index.php?title=ImageNet&action=edit&redlink=1), [CIFAR-10](/index.php?title=CIFAR-10&action=edit&redlink=1), and [CIFAR-100](/index.php?title=CIFAR-100&action=edit&redlink=1). Research has applied distillation to tasks like distilling from a ResNet-152 to a ResNet-50 student, often in combination with techniques like **hint training** (matching intermediate feature maps) to further boost the student's performance.

#### Object detection

Applying knowledge distillation to [object detection](/index.php?title=Object_detection&action=edit&redlink=1) is more challenging than to classification because the task is more complex, involving both the classification of objects and the regression of their bounding box coordinates. Chen et al. (2017) showed that a deep detection model (teacher) could distill its knowledge to a faster student detector, achieving better accuracy-speed trade-offs for object detection.[&#91;24&#93;](#cite_note-chen2017-24) Successful techniques for object detection include:

- **Feature-Based Distillation**: Forcing the student to mimic feature maps from the teacher's backbone network, especially for regions corresponding to foreground objects

- **Localization Distillation**: Explicitly transferring knowledge about bounding box regression, for example, by having the student mimic the teacher's predicted box parameters

- **Relation-Based Distillation**: Transferring relational knowledge, such as the rank distribution of candidate anchor boxes, to teach the student how the teacher prioritizes potential objects

- **Handling Class Imbalance**: Using weighted loss functions to address the overwhelming number of background examples compared to foreground objects

Distillation has enabled compact models suitable for mobile devices and embedded systems with minimal loss in accuracy, including compressed [YOLO](/index.php?title=YOLO&action=edit&redlink=1) models for real-time inference on edge devices.

#### Other vision tasks

Subsequent research has applied distillation to tasks like [semantic segmentation](/index.php?title=Semantic_segmentation&action=edit&redlink=1) for medical imaging and autonomous driving.[&#91;25&#93;](#cite_note-liu2019-25) [Vision Transformers](/index.php?title=Vision_Transformer&action=edit&redlink=1) have been distilled to efficient [CNNs](/wiki/convolutional_neural_network) for improved deployment.[&#91;26&#93;](#cite_note-touvron2021-26)

### Speech and audio processing

[Automatic speech recognition](/index.php?title=Automatic_speech_recognition&action=edit&redlink=1) and audio processing have embraced distillation extensively to adapt large acoustic models to smaller footprints. Asami et al. (2017) demonstrated that a large speech acoustic model could teach a smaller student model for a new domain, improving the student's performance in that domain via distillation. An ensemble of multilingual speech recognition models has been distilled into a single model to support under-resourced languages.

Amazon Alexa used knowledge distillation with 1 million hours of unlabeled speech to create efficient on-device acoustic models.[&#91;27&#93;](#cite_note-amazon2019-27) These techniques help deploy speech recognition on devices with limited hardware, such as smartphones or IoT devices, by reducing model size and latency while maintaining accuracy. Speech emotion recognition benefits from distillation with **up to 44.9% model size reduction** and **40.2% faster inference**.[&#91;28&#93;](#cite_note-tung2024-28)

### Edge computing and mobile deployment

Edge computing and [IoT](/index.php?title=Internet_of_Things&action=edit&redlink=1) scenarios demand aggressive compression. The foremost application of knowledge distillation is in the field of [Edge AI](/index.php?title=Edge_AI&action=edit&redlink=1), which involves running AI computations directly on end-user devices like smartphones, autonomous vehicles, and IoT sensors. Large models are often impractical for these devices due to their high latency, large memory footprint, and significant power consumption.[&#91;29&#93;](#cite_note-zhu2021-29) Knowledge distillation addresses this by compressing these models into lightweight student versions that can run efficiently on-device.

This approach offers several key benefits:

- **Reduced Latency**: Processing data locally eliminates the round-trip time to a cloud server, which is critical for real-time applications like autonomous driving

- **Enhanced Privacy**: Sensitive data, such as personal photos or medical information, remains on the user's device, improving privacy and security

- **Lower Operational Costs**: Reduced reliance on cloud infrastructure lowers server and energy costs

- **Improved Reliability**: Applications can function without a constant internet connection

Case studies in this area include deploying efficient vehicle detection models on platforms like the NVIDIA Jetson Nano, where a tiny student model is trained using knowledge from an ensemble of larger, more accurate detectors. KD is also a key enabling technology for [Federated Learning](/index.php?title=Federated_Learning&action=edit&redlink=1) on edge devices, where a global model's knowledge can be distilled into personalized on-device models, or where devices collaboratively train models without sharing raw data. For instance, it has been successfully applied to IoT traffic classification and network intrusion detection systems, where lightweight student models on IoT devices can achieve high accuracy by learning from a powerful centralized teacher model.

### Cross-modal knowledge distillation

Cross-modal KD is an advanced application where knowledge is transferred between models trained on different data modalities. This is particularly useful in scenarios where one modality is rich in information but expensive to acquire or process (for example [LiDAR](/index.php?title=LiDAR&action=edit&redlink=1)), while another is cheaper and more ubiquitous (for example RGB cameras). The goal is to imbue the model operating on the cheaper modality with the knowledge from the more powerful one, which is only needed during the training phase.

Key applications include:

**Autonomous Driving**: A primary use case is distilling knowledge from a LiDAR-based or multi-modal (LiDAR + camera) 3D object detector (teacher) into a camera-only (monocular) student detector.[&#91;16&#93;](#cite_note-gupta2016-16) The student learns to infer 3D spatial information from 2D images by mimicking the teacher's highly accurate 3D predictions and feature representations, thus improving the performance of the cheaper sensor system.

**Human Activity Recognition**: Knowledge can be transferred from a vision-based model (teacher) to a model that uses data from wearable sensors (for example accelerometers) (student). This allows the sensor-based model to achieve higher accuracy without the privacy concerns or environmental limitations (for example occlusion, poor lighting) of cameras during inference.

**Other Modalities**: The technique has been explored in a wide range of pairings, including audio-visual tasks, vision-language distillation, and RGB-to-depth distillation.

### Recommendation systems

[Recommender systems](/index.php?title=Recommender_system&action=edit&redlink=1) face strict latency requirements (typically under 100 milliseconds) while handling massive user and item catalogs, making compression critical. Techniques include topology distillation for graph-based recommendations and ranking distillation for maintaining ranking quality in real-time systems.

### Healthcare and medical imaging

Healthcare applications demand both accuracy and efficiency for real-time diagnosis and deployment on portable medical devices. Applications include:

- Chest X-ray classification for pneumonia detection

- Cervical cell classification

- Malaria diagnosis from blood smear images

- Skin disease classification

- Medical image segmentation

- Breast ultrasound classification

Research has demonstrated significant compression with minimal accuracy loss in medical imaging tasks, enabling deployment on portable diagnostic devices.

### Graph neural networks

Knowledge distillation has been applied to [graph neural networks](/index.php?title=Graph_neural_networks&action=edit&redlink=1)—Yang et al. (2020) distilled knowledge from a large graph convolutional network into a smaller one, enabling efficient graph analytics on non-Euclidean data. This is particularly useful for tasks involving social networks, molecular structures, and knowledge graphs.

### Reinforcement learning

In [reinforcement learning](/wiki/reinforcement_learning), distillation has been used to transfer policies from large ensembles of agents to single agents, enabling more efficient deployment of learned behaviors.

## Advantages

Knowledge distillation offers distinctive advantages that make it a powerful technique for model compression and deployment:[&#91;2&#93;](#cite_note-neptune2024-2)[&#91;30&#93;](#cite_note-ibm2024-30)

- **Model Compression and Efficiency**: The most significant advantage is the ability to create smaller, faster models that require less memory, computational power, and energy, enabling deployment of advanced AI on edge devices

- **Architecture Flexibility**: Unlike [pruning](/index.php?title=Pruning_(neural_networks)&action=edit&redlink=1) or [quantization](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1), distillation allows completely different student architectures optimized for specific hardware or latency requirements

- **Improved Generalization**: By learning from the teacher's soft targets, the student model is exposed to a richer, more nuanced representation of the data's similarity structure. Soft targets act as strong regularizers, reducing [overfitting](/wiki/overfitting) and helping students generalize better to unseen data

- **Training Stability**: Students benefit from structured knowledge of well-trained teachers, often making training more stable

- **Transfer of Specialized Knowledge**: Students can inherit expertise from multiple teachers or specialist models, capturing complementary knowledge

- **Knowledge Transfer from Ensembles**: Provides an effective way to transfer the knowledge from a powerful but computationally prohibitive ensemble of models into a single, deployable model

- **Privacy Preservation**: Distilled models can be shared without exposing raw training data, as knowledge is transferred through model outputs rather than data

- **Energy Efficiency**: Reduced inference time translates to lower energy consumption, crucial for battery-powered devices and environmental sustainability

- **Handles Unlabeled or Limited Data**: Can use unlabeled data via transfer sets, expanding training data availability

## Limitations and challenges

Despite successes, knowledge distillation faces significant limitations and challenges:[&#91;31&#93;](#cite_note-stanton2021-31)[&#91;32&#93;](#cite_note-cho2019-32)

- **Teacher Quality Dependency**: The student's performance is fundamentally bound by the teacher's capabilities. A poorly trained, biased, or suboptimal teacher will inevitably pass on its flaws to students, limiting the potential of the distilled model

- **Teacher-Student Capacity Gap**: A significant mismatch in capacity between a very large teacher and a very small student can hinder the distillation process. The student may not have sufficient capacity to effectively mimic the complex functions learned by the teacher. Counterintuitively, research has shown that a more accurate teacher is not always a better teacher; a slightly less accurate but "simpler" teacher may provide a more digestible learning signal for a small student

- **Negative Distillation**: In some scenarios, particularly in [zero-shot](/index.php?title=Zero-shot_learning&action=edit&redlink=1) cross-lingual transfer, distillation can be detrimental. The student model may perform worse than if it had been trained from scratch on the available data. This can occur if the teacher's knowledge is not well-aligned with the student's task or architecture

- **Complex Hyperparameter Tuning**: Knowledge distillation introduces several new hyperparameters, including the temperature (T) and the weights for the soft and hard loss terms (α, β). Finding the optimal values for these parameters can be a challenging and computationally expensive process that requires extensive experimentation

- **Fidelity vs. Accuracy Trade-off**: Empirical studies have revealed that achieving high student accuracy does not necessarily require high fidelity (i.e., a close match between the student's and teacher's predictive distributions). There can often be a large discrepancy between the teacher's and student's outputs, even when the student performs well on the downstream task. This suggests that the optimization landscape of distillation is unusually challenging and that the benefits may stem more from the regularizing effect of the soft targets' gradients rather than from perfect imitation

- **Loss of Information**: Compression inevitably loses nuances, fine-grained knowledge, or complex reasoning capabilities present in the larger teacher model

- **Training Complexity**: Requires training two models (teacher and student), potentially increasing overall computational cost and complexity

- **Task Limitations**: Works best for discriminative tasks; more limited effectiveness for certain spatial reasoning or highly complex tasks

- **Challenges in Deep Networks**: Distillation can face difficulties when there are large capacity gaps in very deep networks

## Comparison with other compression techniques

Knowledge distillation is one of several major paradigms for model compression. While they all aim to create more efficient models, they operate on fundamentally different principles. These techniques are often complementary and can be used in combination for maximum efficiency.

### Pruning

[Pruning](/index.php?title=Pruning_(neural_networks)&action=edit&redlink=1) operates by removing parts of an already trained network—redundant parameters (weights, neurons, or filters). This can be **unstructured** (removing individual weights) or **structured** (removing entire channels or neurons). Unlike distillation, it modifies an existing model rather than creating a new one. Research shows **combining pruning with distillation provides superior results**.[&#91;33&#93;](#cite_note-han2015-33) Distillation offers architectural flexibility while pruning provides direct parameter reduction. Typically requires fine-tuning the pruned model to recover accuracy.

### Quantization

[Quantization](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1) reduces the bit-precision of weights and activations from high-precision floating-point (for example 32-bit) to lower-precision formats (for example 8-bit integer), achieving **4× reduction for FP32→INT8**.[&#91;34&#93;](#cite_note-jacob2018-34) The architecture remains unchanged, but the data types of parameters are modified. Can be applied post-training (PTQ) or simulated during training for better performance (QAT). Many works distill from full-precision to quantized student models, showing these techniques complement each other.

### Low-rank factorization

[Low-rank factorization](/index.php?title=Low-rank_approximation&action=edit&redlink=1) decomposes large weight matrices into products of smaller, low-rank matrices to reduce parameters. Modifies specific layers (for example fully connected) by replacing them with factorized versions. Requires fine-tuning the model after factorization to regain accuracy. This method excels when combined with other techniques like [LoRA](/wiki/lora) for parameter-efficient fine-tuning.

### Neural architecture search

[Neural architecture search](/index.php?title=Neural_architecture_search&action=edit&redlink=1) (NAS) automates discovering optimal network architectures. NAS for LLM compression showed **up to 9.85% average improvement on 11 diverse downstream tasks** with 22% latency improvement.[&#91;35&#93;](#cite_note-munoz2024-35) These techniques can combine effectively with distillation.

### Hybrid approaches

The most effective compression strategies combine multiple techniques. **Deep Compression** combined pruning, quantization, and Huffman coding to achieve **49× compression for VGG-16** with minimal accuracy loss.[&#91;33&#93;](#cite_note-han2015-33) Successful deployment requires comprehensive analysis and careful hybrid strategy selection. Many state-of-the-art compression pipelines use knowledge distillation in conjunction with pruning, quantization, and low-rank factorization.

| Technique | Mechanism | Granularity | Impact on Architecture | Training Requirement |
| --- | --- | --- | --- | --- |
| Knowledge Distillation | Trains a small student model to mimic a large teacher model. | Model-level | Student architecture can be completely different from the teacher. | Requires training a new student model from scratch or from a pre-trained checkpoint. |
| [Pruning](/wiki/pruning) | Removes redundant parameters (weights, neurons, or filters) from a network. | Parameter/Channel-level | Reduces the number of active parameters within the same or a similar architecture. | Typically requires fine-tuning the pruned model to recover accuracy. |
| [Quantization](/wiki/quantization) | Reduces the bit-precision of weights and activations (for example from 32-bit float to 8-bit integer). | Parameter-level | Architecture remains unchanged, but the data types of the parameters are modified. | Can be applied post-training (PTQ) or simulated during training for better performance (QAT). |
| [Low-Rank Factorization](/index.php?title=Low-Rank_Factorization&action=edit&redlink=1) | Decomposes large weight matrices into smaller, low-rank matrices to reduce parameters. | Layer-level | Modifies specific layers (for example fully connected) by replacing them with factorized versions. | Requires fine-tuning the model after factorization to regain accuracy. |

## Recent developments (2023-2025)

The period 2023-2025 witnessed explosive growth in knowledge distillation research driven by [large language models](/wiki/large_language_model) and [foundation models](/wiki/foundation_model).[&#91;36&#93;](#cite_note-survey2025-36)

### Large language model distillation

LLM distillation emerged as a dominant research direction with two main paradigms:

- **White-box distillation** assumes full access to teacher model internals—architecture, parameters, intermediate representations—allowing for rich distillation losses

- **Black-box distillation** accesses only teacher outputs through APIs, growing in importance as proprietary models restrict internal access[&#91;22&#93;](#cite_note-xu2024-22)

### Breakthrough techniques

Recent breakthrough papers include:

- **MINIPLM**: Introduced offline distillation using "Difference Sampling" that reduces pre-training data requirements by **2.4×**[&#91;37&#93;](#cite_note-kim2024-37)

- **MiniLLM**: Replaced forward KLD with **reverse KLD for generative models**, preventing students from overestimating low-probability regions[&#91;23&#93;](#cite_note-gu2023-23)

- **Lion: Adversarial Distillation**: Using only **70,000 training examples**, achieved **55.4% improvement over Vicuna-13B** on reasoning tasks[&#91;38&#93;](#cite_note-jiang2023-38)

- **Compact Language Models**: NVIDIA researchers combined depth, width, attention, and MLP pruning with KD-based retraining, compressing Nemotron-4 by **2-4× with minimal performance loss**[&#91;35&#93;](#cite_note-munoz2024-35)

### Diffusion model distillation

[Diffusion models](/wiki/diffusion_model) received focused attention for their computational intensity during image generation. Techniques include progressive distillation reducing sampling steps, consistency models enabling direct noise-to-data mapping, and score distillation for text-to-3D generation.[&#91;39&#93;](#cite_note-song2023-39)

## Practical implementations

### Frameworks and tools

Major deep learning platforms provide mature implementations for knowledge distillation:

- **[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1)**: Official tutorials covering output-based distillation, cosine loss for hidden states, and intermediate regressor-based distillation[&#91;11&#93;](#cite_note-pytorch2024-11)

- **[Keras/TensorFlow](/wiki/tensorflow)**: Official examples with custom Distiller classes, temperature-based prediction softening, and KL divergence distillation[&#91;12&#93;](#cite_note-keras2024-12)

- **[Hugging Face](/wiki/hugging_face)**: Production-ready distilled models including DistilBERT, DistilGPT2, and comprehensive Transformers library integration[&#91;40&#93;](#cite_note-huggingface2024-40)

- **torchdistill**: Comprehensive research framework implementing **26+ KD methods** from top conferences with configuration-driven, coding-free approach[&#91;41&#93;](#cite_note-torchdistill2024-41)

## See also

- [Model compression](/index.php?title=Model_compression&action=edit&redlink=1)

- [Neural network pruning](/index.php?title=Neural_network_pruning&action=edit&redlink=1)

- [Quantization (machine learning)](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1)

- [Transfer learning](/wiki/transfer_learning)

- [Ensemble learning](/index.php?title=Ensemble_learning&action=edit&redlink=1)

- [Teacher forcing](/index.php?title=Teacher_forcing&action=edit&redlink=1)

- [Model distillation](/index.php?title=Model_distillation&action=edit&redlink=1)

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1)

- [Machine learning](/wiki/machine_learning)

- [Convolutional neural network](/wiki/convolutional_neural_network)

- [Large language model](/wiki/large_language_model)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)

- [Federated learning](/wiki/federated_learning)

## References

1. ↑ [1.00](#cite_ref-hinton2015_1-0) [1.01](#cite_ref-hinton2015_1-1) [1.02](#cite_ref-hinton2015_1-2) [1.03](#cite_ref-hinton2015_1-3) [1.04](#cite_ref-hinton2015_1-4) [1.05](#cite_ref-hinton2015_1-5) [1.06](#cite_ref-hinton2015_1-6) [1.07](#cite_ref-hinton2015_1-7) [1.08](#cite_ref-hinton2015_1-8) [1.09](#cite_ref-hinton2015_1-9) [1.10](#cite_ref-hinton2015_1-10) [1.11](#cite_ref-hinton2015_1-11) [1.12](#cite_ref-hinton2015_1-12) Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the Knowledge in a Neural Network. arXiv:1503.02531. [https://arxiv.org/abs/1503.02531](https://arxiv.org/abs/1503.02531)

2. ↑ [2.0](#cite_ref-neptune2024_2-0) [2.1](#cite_ref-neptune2024_2-1) [2.2](#cite_ref-neptune2024_2-2) [2.3](#cite_ref-neptune2024_2-3) [2.4](#cite_ref-neptune2024_2-4) [2.5](#cite_ref-neptune2024_2-5) [2.6](#cite_ref-neptune2024_2-6) [2.7](#cite_ref-neptune2024_2-7) Neptune.ai (2024). Knowledge Distillation: Principles, Algorithms, Applications. [https://neptune.ai/blog/knowledge-distillation](https://neptune.ai/blog/knowledge-distillation)

3. [↑](#cite_ref-schmidhuber1991_3-0) Schmidhuber, J. (1991). Learning to control fast-weight memories: An alternative to dynamic recurrent networks. Neural Computation. [https://people.idsia.ch/~juergen/who-invented-knowledge-distillation-with-neural-networks.html](https://people.idsia.ch/~juergen/who-invented-knowledge-distillation-with-neural-networks.html)

4. [↑](#cite_ref-caruana2006_4-0) Bucilă, C., Caruana, R., & Niculescu-Mizil, A. (2006). Model compression. Proceedings of the 12th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. [https://dl.acm.org/doi/10.1145/1150402.1150464](https://dl.acm.org/doi/10.1145/1150402.1150464)

5. ↑ [5.0](#cite_ref-romero2015_5-0) [5.1](#cite_ref-romero2015_5-1) Romero, A., Ballas, N., Kahou, S. E., Chassang, A., Gatta, C., & Bengio, Y. (2015). FitNets: Hints for Thin Deep Nets. arXiv:1412.6550. [https://arxiv.org/abs/1412.6550](https://arxiv.org/abs/1412.6550)

6. ↑ [6.0](#cite_ref-zagoruyko2017_6-0) [6.1](#cite_ref-zagoruyko2017_6-1) Zagoruyko, S., & Komodakis, N. (2017). Paying More Attention to Attention. arXiv:1612.03928. [https://arxiv.org/abs/1612.03928](https://arxiv.org/abs/1612.03928)

7. ↑ [7.0](#cite_ref-zhang2018_7-0) [7.1](#cite_ref-zhang2018_7-1) Zhang, Y., Xiang, T., Hospedales, T. M., & Lu, H. (2018). Deep Mutual Learning. CVPR 2018. [https://arxiv.org/abs/1706.00384](https://arxiv.org/abs/1706.00384)

8. ↑ [8.0](#cite_ref-furlanello2018_8-0) [8.1](#cite_ref-furlanello2018_8-1) Furlanello, T., Lipton, Z., Tschannen, M., Itti, L., & Anandkumar, A. (2018). Born Again Neural Networks. arXiv:1805.04770. [https://arxiv.org/abs/1805.04770](https://arxiv.org/abs/1805.04770)

9. ↑ [9.0](#cite_ref-park2019_9-0) [9.1](#cite_ref-park2019_9-1) Park, W., Kim, D., Lu, Y., & Cho, M. (2019). Relational Knowledge Distillation. CVPR 2019. [https://arxiv.org/abs/1904.05068](https://arxiv.org/abs/1904.05068)

10. ↑ [10.0](#cite_ref-gou2021_10-0) [10.1](#cite_ref-gou2021_10-1) [10.2](#cite_ref-gou2021_10-2) [10.3](#cite_ref-gou2021_10-3) Gou, J., Yu, B., Maybank, S. J., & Tao, D. (2021). Knowledge Distillation: A Survey. International Journal of Computer Vision. [https://link.springer.com/article/10.1007/s11263-021-01453-z](https://link.springer.com/article/10.1007/s11263-021-01453-z)

11. ↑ [11.0](#cite_ref-pytorch2024_11-0) [11.1](#cite_ref-pytorch2024_11-1) PyTorch (2024). Knowledge Distillation Tutorial. [https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html](https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html)

12. ↑ [12.0](#cite_ref-keras2024_12-0) [12.1](#cite_ref-keras2024_12-1) Keras (2024). Knowledge Distillation. [https://keras.io/examples/vision/knowledge_distillation/](https://keras.io/examples/vision/knowledge_distillation/)

13. [↑](#cite_ref-anil2018_13-0) Anil, R., Pereyra, G., Passos, A., Ormandi, R., Dahl, G. E., & Hinton, G. E. (2018). Large Scale Distributed Neural Network Training through Online Distillation. arXiv:1804.03235. [https://arxiv.org/abs/1804.03235](https://arxiv.org/abs/1804.03235)

14. [↑](#cite_ref-mobahi2020_14-0) Mobahi, H., Farajtabar, M., & Bartlett, P. (2020). Self-Distillation Amplifies Regularization in Hilbert Space. NeurIPS 2020. [https://proceedings.neurips.cc/paper/2020/hash/2288f691b58edecadcc9a8691762b4fd-Abstract.html](https://proceedings.neurips.cc/paper/2020/hash/2288f691b58edecadcc9a8691762b4fd-Abstract.html)

15. [↑](#cite_ref-you2017_15-0) You, S., Xu, C., Xu, C., & Tao, D. (2017). Learning from Multiple Teacher Networks. KDD 2017. [https://arxiv.org/abs/1711.00479](https://arxiv.org/abs/1711.00479)

16. ↑ [16.0](#cite_ref-gupta2016_16-0) [16.1](#cite_ref-gupta2016_16-1) Gupta, S., Hoffman, J., & Malik, J. (2016). Cross Modal Distillation for Supervision Transfer. CVPR 2016. [https://arxiv.org/abs/1507.00448](https://arxiv.org/abs/1507.00448)

17. [↑](#cite_ref-lopes2017_17-0) Lopes, R. G., Fenu, S., & Starner, T. (2017). Data-Free Knowledge Distillation for Deep Neural Networks. arXiv:1710.07535. [https://arxiv.org/abs/1710.07535](https://arxiv.org/abs/1710.07535)

18. [↑](#cite_ref-sanh2019_18-0) Sanh, V., Debut, L., Chaumond, J., & Wolf, T. (2019). DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter. arXiv:1910.01108. [https://arxiv.org/abs/1910.01108](https://arxiv.org/abs/1910.01108)

19. [↑](#cite_ref-azuredistilgpt2_19-0) Microsoft Azure AI. DistilGPT2 Model Card. [https://ai.azure.com/catalog/models/distilgpt2](https://ai.azure.com/catalog/models/distilgpt2)

20. [↑](#cite_ref-jiao2020_20-0) Jiao, X., Yin, Y., Shang, L., Jiang, X., Chen, X., Li, L., Wang, F., & Liu, Q. (2020). TinyBERT: Distilling BERT for Natural Language Understanding. arXiv:1909.10351. [https://arxiv.org/abs/1909.10351](https://arxiv.org/abs/1909.10351)

21. [↑](#cite_ref-sun2020_21-0) Sun, Z., Yu, H., Song, X., Liu, R., Yang, Y., & Zhou, D. (2020). MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices. ACL 2020. [https://arxiv.org/abs/2004.02984](https://arxiv.org/abs/2004.02984)

22. ↑ [22.0](#cite_ref-xu2024_22-0) [22.1](#cite_ref-xu2024_22-1) Xu, C., McAuley, J., & Wen, H. (2024). A Survey on Knowledge Distillation of Large Language Models. arXiv:2402.13116. [https://arxiv.org/abs/2402.13116](https://arxiv.org/abs/2402.13116)

23. ↑ [23.0](#cite_ref-gu2023_23-0) [23.1](#cite_ref-gu2023_23-1) Gu, Y., Dong, L., Wei, F., & Huang, M. (2023). MiniLLM: Knowledge Distillation of Large Language Models. arXiv:2306.08543. [https://arxiv.org/abs/2306.08543](https://arxiv.org/abs/2306.08543)

24. [↑](#cite_ref-chen2017_24-0) Chen, G., Choi, W., Yu, X., Han, T., & Chandraker, M. (2017). Learning Efficient Object Detection Models with Knowledge Distillation. NIPS 2017. [https://papers.nips.cc/paper/2017/hash/e1e32e235eee1f970470a3a6658dfdd5-Abstract.html](https://papers.nips.cc/paper/2017/hash/e1e32e235eee1f970470a3a6658dfdd5-Abstract.html)

25. [↑](#cite_ref-liu2019_25-0) Liu, Y., Chen, K., Liu, C., Qin, Z., Luo, Z., & Wang, J. (2019). Structured Knowledge Distillation for Semantic Segmentation. CVPR 2019. [https://arxiv.org/abs/1903.04197](https://arxiv.org/abs/1903.04197)

26. [↑](#cite_ref-touvron2021_26-0) Touvron, H., Cord, M., Douze, M., Massa, F., Sablayrolles, A., & Jégou, H. (2021). Training data-efficient image transformers & distillation through attention. ICML 2021. [https://arxiv.org/abs/2012.12877](https://arxiv.org/abs/2012.12877)

27. [↑](#cite_ref-amazon2019_27-0) Parthasarathi, S. H. K., & Strom, N. (2019). Lessons from Building Acoustic Models with a Million Hours of Speech. ICASSP 2019. [https://ieeexplore.ieee.org/document/8682360](https://ieeexplore.ieee.org/document/8682360)

28. [↑](#cite_ref-tung2024_28-0) Tung, N. M., & Van Thieu, V. (2024). Enhancing Speech Emotion Recognition through Knowledge Distillation. ICTC 2024. [https://github.com/nmihtrug/DistilSER](https://github.com/nmihtrug/DistilSER)

29. [↑](#cite_ref-zhu2021_29-0) Zhu, Z., Hong, J., & Zhou, J. (2021). Data-Free Knowledge Distillation for Heterogeneous Federated Learning. ICML 2021. [https://arxiv.org/abs/2105.10056](https://arxiv.org/abs/2105.10056)

30. [↑](#cite_ref-ibm2024_30-0) IBM (2024). What is Knowledge distillation? [https://www.ibm.com/think/topics/knowledge-distillation](https://www.ibm.com/think/topics/knowledge-distillation)

31. [↑](#cite_ref-stanton2021_31-0) Stanton, S., Izmailov, P., Kirichenko, P., Alemi, A. A., & Wilson, A. G. (2021). Does Knowledge Distillation Really Work? NeurIPS 2021. [https://openreview.net/forum?id=7J-fKoXiReA](https://openreview.net/forum?id=7J-fKoXiReA)

32. [↑](#cite_ref-cho2019_32-0) Cho, J. H., & Hariharan, B. (2019). On the Efficacy of Knowledge Distillation. ICCV 2019. [https://arxiv.org/abs/1910.01348](https://arxiv.org/abs/1910.01348)

33. ↑ [33.0](#cite_ref-han2015_33-0) [33.1](#cite_ref-han2015_33-1) Han, S., Mao, H., & Dally, W. J. (2015). Deep Compression: Compressing Deep Neural Networks with Pruning, Trained Quantization and Huffman Coding. ICLR 2016. [https://arxiv.org/abs/1510.00149](https://arxiv.org/abs/1510.00149)

34. [↑](#cite_ref-jacob2018_34-0) Jacob, B., Kligys, S., Chen, B., Zhu, M., Tang, M., Howard, A., Adam, H., & Kalenichenko, D. (2018). Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference. CVPR 2018. [https://arxiv.org/abs/1712.05877](https://arxiv.org/abs/1712.05877)

35. ↑ [35.0](#cite_ref-munoz2024_35-0) [35.1](#cite_ref-munoz2024_35-1) Muñoz, J. P., Lyakonov, S., & Acun, B. (2024). Compact Language Models via Pruning and Knowledge Distillation. arXiv:2407.14679. [https://arxiv.org/abs/2407.14679](https://arxiv.org/abs/2407.14679)

36. [↑](#cite_ref-survey2025_36-0) Mansourian, M., Kordi, M., Saberi, A., & Rabiee, H. R. (2025). A Comprehensive Survey on Knowledge Distillation. arXiv:2503.12067. [https://arxiv.org/abs/2503.12067](https://arxiv.org/abs/2503.12067)

37. [↑](#cite_ref-kim2024_37-0) Kim, M., Lee, J., & Park, S. (2024). MiniPLM: Knowledge Distillation for Pre-Training Language Models. ICLR 2025. [https://openreview.net/forum?id=vYvTpKf2K7](https://openreview.net/forum?id=vYvTpKf2K7)

38. [↑](#cite_ref-jiang2023_38-0) Jiang, Y., Chan, A., Li, Z., Li, Y., & Chen, D. (2023). Lion: Adversarial Distillation of Proprietary Large Language Models. EMNLP 2023. [https://arxiv.org/abs/2305.12870](https://arxiv.org/abs/2305.12870)

39. [↑](#cite_ref-song2023_39-0) Song, Y., Dhariwal, P., Chen, M., & Sutskever, I. (2023). Consistency Models. ICML 2023. [https://arxiv.org/abs/2303.01469](https://arxiv.org/abs/2303.01469)

40. [↑](#cite_ref-huggingface2024_40-0) Hugging Face (2024). DistilBERT Documentation. [https://huggingface.co/docs/transformers/model_doc/distilbert](https://huggingface.co/docs/transformers/model_doc/distilbert)

41. [↑](#cite_ref-torchdistill2024_41-0) Matsubara, Y. (2024). torchdistill: A Modular, Configuration-Driven Framework for Knowledge Distillation. [https://github.com/yoshitomo-matsubara/torchdistill](https://github.com/yoshitomo-matsubara/torchdistill)

## External links

- [Original Hinton et al. 2015 paper](https://arxiv.org/abs/1503.02531)

- [PyTorch Knowledge Distillation Tutorial](https://docs.pytorch.org/tutorials/beginner/knowledge_distillation_tutorial.html)

- [Keras Knowledge Distillation Example](https://keras.io/examples/vision/knowledge_distillation/)

- [Hugging Face DistilBERT Documentation](https://huggingface.co/docs/transformers/model_doc/distilbert)

- [torchdistill Framework](https://github.com/yoshitomo-matsubara/torchdistill)