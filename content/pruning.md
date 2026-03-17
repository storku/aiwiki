---
title: "Pruning"
slug: "pruning"
categories:
  - "Pages_with_reference_errors"
---[Template:Infobox machine learning](/index.php?title=Template:Infobox_machine_learning&action=edit&redlink=1)

**Pruning** is a family of techniques used in [machine learning](/wiki/machine_learning) and [artificial intelligence](/wiki/artificial_intelligence) to remove parts of a model or search space that are estimated to be unnecessary for accuracy or optimality. In predictive models (for example [decision trees](/wiki/decision_tree) and [artificial neural networks](/index.php?title=Artificial_neural_network&action=edit&redlink=1)), pruning reduces [overfitting](/wiki/overfitting) and improves efficiency by eliminating branches, neurons, filters, or weights that contribute little to validation performance.[&#91;1&#93;](#cite_note-breiman1984-1)[&#91;2&#93;](#cite_note-obd1989-2) In search algorithms (for example [alpha–beta pruning](/index.php?title=Alpha%E2%80%93beta_pruning&action=edit&redlink=1) for the [minimax](/index.php?title=Minimax&action=edit&redlink=1) procedure), pruning discards branches that provably cannot change the final decision, reducing computation without affecting correctness.[&#91;3&#93;](#cite_note-russell_norvig-3)

In [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1), pruning removes parameters from [artificial neural networks](/index.php?title=Artificial_neural_network&action=edit&redlink=1), creating sparse networks by eliminating unnecessary weights, neurons, filters, or entire layers, enabling deployment on resource-constrained devices and reducing inference costs. The technique has evolved from early theoretical work in the late 1980s to become essential for deploying modern [large language models](/wiki/large_language_model) and [deep neural networks](/index.php?title=Deep_neural_networks&action=edit&redlink=1) on edge devices, achieving compression ratios of 50-95% with minimal accuracy loss. By 2024, over 3,000 pruning papers have been published, with successful deployments by NVIDIA, Meta, Intel, and Qualcomm achieving 2-29× speedups in production systems.[&#91;4&#93;](#cite_note-comprehensive_survey-4)

## Motivation and overview

Many ML models are [overparameterized](/index.php?title=Overparameterization&action=edit&redlink=1), containing redundancies that do not affect generalization. Pruning targets such redundancies to achieve multiple goals:

- **Generalization and regularization**: Reduce [overfitting](/wiki/overfitting) by simplifying the hypothesis. Post-pruned decision trees often outperform fully grown trees on held-out data, and early pruning work in neural networks was motivated primarily by improving generalization rather than compression.[&#91;1&#93;](#cite_note-breiman1984-1)[&#91;2&#93;](#cite_note-obd1989-2)

- **Efficiency**: Decrease parameters, memory, energy, and latency for deployment on edge devices and servers. Deep [model compression](/index.php?title=Model_compression&action=edit&redlink=1) pipelines combining pruning with [quantization](/wiki/quantization) can achieve 35-49× storage reduction on models like AlexNet and VGG-16 without accuracy loss.[&#91;5&#93;](#cite_note-han_deep_compression-5)

- **Search optimization**: Reduce the effective branching factor in combinatorial search while preserving optimal results (for example [alpha–beta pruning](/index.php?title=Alpha%E2%80%93beta_pruning&action=edit&redlink=1)).[&#91;3&#93;](#cite_note-russell_norvig-3)

- **Interpretability**: Create simpler, more transparent models where the decision-making process is easier to understand and explain, particularly important in regulated industries like healthcare and finance.[&#91;6&#93;](#cite_note-jang_decision_trees-6)

The evolution of pruning techniques from focusing on individual weights (unstructured) to entire network components (structured) reflects a maturation of the field, driven by practical engineering challenges of achieving real-world performance gains on existing hardware.

## History

### Early development (1988-1995)

Research on neural network pruning traces back to 1988, emerging from neurobiological studies showing the [human brain](/index.php?title=Human_brain&action=edit&redlink=1)'s resistance to damage and natural synaptic pruning during development.[&#91;7&#93;](#cite_note-wiki_pruning-7) This biological analogy to synaptic pruning in human brains, where unnecessary connections are eliminated during development, provided the conceptual foundation for artificial neural network pruning.[&#91;8&#93;](#cite_note-polukhin_history-8)

At the end of the 1980s and beginning of the 1990s, the field expanded rapidly from seminal studies, with two major branches emerging: sensitivity calculation methods that evaluated each parameter's contribution to the error function, and penalty-term methods using regularization to encourage sparse networks.[&#91;9&#93;](#cite_note-nih_pruning-9)

The original motivation differed from modern applications: pruning was intended to improve generalization rather than compression, based on theory and experience showing that networks with excessive parameters do not generalize well for fixed training data.[&#91;2&#93;](#cite_note-obd1989-2) 

**Yann LeCun**, with John S. Denker and Sara A. Solla, published **Optimal Brain Damage** at NeurIPS 1989, introducing parameter "saliency" computed using diagonal Hessian approximations.[&#91;2&#93;](#cite_note-obd1989-2) This influential work, with 4,897 citations, demonstrated 60% parameter reduction on handwritten digit recognition networks with minimal accuracy impact. The method approximates the change in objective function using Taylor series expansion, showing that removing unimportant weights improves generalization and reduces required training examples.

**Babak Hassibi** and **David G. Stork** extended this work with **Optimal Brain Surgeon** (1992-1993), using the full Hessian matrix rather than diagonal approximations and allowing optimal weight adjustments after pruning.[&#91;10&#93;](#cite_note-obs1993-10) The method achieved 90%, 76%, and 62% weight reduction on MONK's benchmark problems, significantly outperforming magnitude-based methods.

Other foundational contributions included:

- **Mozer and Smolensky's "Skeletonization"** (1989): Early work on removing hidden units

- **E.D. Karnin's simple pruning procedure** (1990): Proposing sensitivity-based approach during training[&#91;11&#93;](#cite_note-karnin1990-11)

- **Randall Reed's comprehensive survey** (1993): Synthesized early approaches, summarizing pruning algorithms from the 1980s and 1990s, highlighting their role in reducing connections based on information theory and heuristics[&#91;12&#93;](#cite_note-reed1993-12)

### Modern resurgence (2015-present)

The field experienced renewed interest starting in 2015 with **Song Han's** work on magnitude-based iterative pruning, demonstrating 9-13× compression on AlexNet and VGGNet.[&#91;13&#93;](#cite_note-han2015-13) His subsequent "Deep Compression" paper (2016) combined pruning with quantization and Huffman coding, achieving 35-49× compression without accuracy loss and becoming one of the top-5 most cited papers in ISCA's 50-year history.[&#91;4&#93;](#cite_note-comprehensive_survey-4)

In 2016, **Hao Li et al.** introduced filter pruning for convolutional networks in "Pruning Filters for Efficient ConvNets", targeting entire convolutional filters to create cascading effects through the network.[&#91;14&#93;](#cite_note-li2016-14)

The **[Lottery Ticket Hypothesis](/index.php?title=Lottery_Ticket_Hypothesis&action=edit&redlink=1)**, proposed by **Jonathan Frankle** and **Michael Carbin** in 2018, revolutionized understanding of pruning by showing that randomly-initialized dense networks contain sparse subnetworks ("winning tickets") that can match full network accuracy when trained in isolation.[&#91;15&#93;](#cite_note-lottery2019-15) This ICLR 2019 Best Paper Award winner demonstrated that networks with 10-20% of original parameters could achieve comparable performance, fundamentally changing perspectives on network sparsity and suggesting that large over-parameterized networks are not just learning effective weights, but acting as a search space to find well-initialized sparse structures.

From 2020-2024, the field exploded with more than 3,000 pruning papers published—representing over half of all neural network compression research.[&#91;4&#93;](#cite_note-comprehensive_survey-4) Recent advances include:

- **Efficient LLM pruning methods**: SparseGPT (2023) enabling one-shot pruning of 175-billion parameter models[&#91;16&#93;](#cite_note-sparsegpt2023-16), and Wanda (2023) combining weight magnitudes with activation norms[&#91;17&#93;](#cite_note-wanda2023-17)

- **[Vision transformer](/index.php?title=Vision_transformer&action=edit&redlink=1) token pruning**: Dynamic sparsification methods

- **Hardware-aware structured pruning techniques**: Methods specifically designed for GPU and edge accelerators

- **Pruning at initialization methods**: SNIP (2019), GraSP (2020), SynFlow (2020)

Major technology companies including NVIDIA, Meta, Intel, AMD, and Qualcomm have deployed pruning in production systems for model compression and edge deployment.

## Pruning in decision trees

A [decision tree](/wiki/decision_tree) grown to purity typically overfits the training data. Decision tree pruning plays a crucial role in preventing overfitting and improving model generalization by simplifying the tree structure. Pruning simplifies the tree by removing nodes and subtrees that do not improve validation accuracy or that add unnecessary complexity.[&#91;18&#93;](#cite_note-scikit_trees-18)

### Pre-pruning (early stopping)

**Pre-pruning**, also known as early stopping, limits growth during induction with constraints applied during the tree-building process. This prevents the tree from growing to its full complexity in the first place.[&#91;19&#93;](#cite_note-tibco_pruning-19) Common pre-pruning criteria include:

- **Maximum Depth**: Limiting the maximum number of levels the tree can grow

- **Minimum Samples per Leaf**: Requiring a leaf node to contain a minimum number of training samples

- **Minimum Samples per Split**: Requiring a node to have at least a certain number of samples before it can be split

- **Minimum Impurity Decrease**: Requiring a split to reduce the node's impurity (for example [Gini impurity](/wiki/gini_impurity) or [entropy](/index.php?title=Information_entropy&action=edit&redlink=1)) by at least a specified threshold

- **Statistical Tests**: Using tests like the [chi-squared test](/index.php?title=Chi-squared_test&action=edit&redlink=1) to determine if a proposed split is statistically significant[&#91;20&#93;](#cite_note-kaur2012-20)

The primary advantage of pre-pruning is its computational efficiency. By preventing the tree from growing to its full complexity, it saves significant training time, which can be crucial for very large datasets.[&#91;21&#93;](#cite_note-lamarr_pruning-21)

However, pre-pruning suffers from a significant drawback known as the **horizon effect**.[&#91;22&#93;](#cite_note-wiki_dt_pruning-22) A split may seem unpromising based on a local stopping criterion, causing the algorithm to halt growth. However, this "weak" split might have led to very informative splits further down the branch. Pre-pruning's greedy nature prevents it from seeing beyond this short-term horizon, potentially leading to a suboptimal, less accurate tree.

### Post-pruning (backward pruning)

**Post-pruning**, sometimes called backward pruning, is the more common and often more effective approach.[&#91;21&#93;](#cite_note-lamarr_pruning-21) In this strategy, the decision tree is first allowed to grow to its maximum size, fitting the training data completely (and thus, overfitting). Afterwards, the algorithm goes back through the tree and systematically removes nodes and subtrees that do not significantly contribute to its predictive accuracy.[&#91;23&#93;](#cite_note-geeks_pruning-23)

The decision to prune a node is typically based on its performance on a separate validation dataset (also called a pruning set) or by using a metric that penalizes complexity.[&#91;22&#93;](#cite_note-wiki_dt_pruning-22) By first growing the full tree, post-pruning avoids the horizon effect, as it has a global view of all potential splits. While this is computationally more expensive than pre-pruning, it generally leads to more accurate and robust models.[&#91;19&#93;](#cite_note-tibco_pruning-19)

Post-pruning algorithms can traverse the tree in two ways:[&#91;22&#93;](#cite_note-wiki_dt_pruning-22)

- **Bottom-up**: The algorithm starts at the leaf nodes and works its way up towards the root. For each internal node, it evaluates whether replacing its subtree with a single leaf node would improve performance. This is the most common approach as it ensures that the relevance of an entire subtree is considered before any pruning decision is made about its parent nodes.

- **Top-down**: The algorithm starts at the root and traverses downwards. This approach is less common because it risks pruning a large subtree that may contain highly valuable nodes deep within it.[&#91;21&#93;](#cite_note-lamarr_pruning-21)

### Post-pruning algorithms

#### Reduced Error Pruning (REP)

**Reduced Error Pruning** is one of the simplest and most intuitive post-pruning algorithms.[&#91;22&#93;](#cite_note-wiki_dt_pruning-22) It relies on a separate dataset, known as a pruning or validation set, which was not used to train the tree. The algorithm works as follows:[&#91;24&#93;](#cite_note-elomaa2001-24)[&#91;25&#93;](#cite_note-banu2020-25)

1. 
2. 
3. 
4. 
5. 
6. 
7. 

The main advantage of REP is its simplicity and speed.[&#91;22&#93;](#cite_note-wiki_dt_pruning-22) However, its effectiveness depends heavily on the size and representativeness of the validation set. If the validation set is too small, the pruning decisions may be unreliable and could lead to removing useful subtrees.

#### Cost-Complexity Pruning (CCP)

**Cost-Complexity Pruning**, also known as weakest link pruning, is a more sophisticated and widely used method introduced in the CART algorithm.[&#91;23&#93;](#cite_note-geeks_pruning-23) Instead of relying solely on a validation set's error rate, CCP introduces a regularization parameter, α (alpha), that explicitly penalizes the complexity of the tree.

The algorithm defines a cost-complexity measure for a tree T as:[&#91;26&#93;](#cite_note-ibm_ccp-26)[&#91;27&#93;](#cite_note-psu_ccp-27)

  
    
      
        
          R
          
            &#x03B1;
          
        
        (
        T
        )
        =
        R
        (
        T
        )
        +
        &#x03B1;
        
          |
        
        
          T
          
            leaves
          
        
        
          |
        
      
    
    {\displaystyle R_{\alpha }(T)=R(T)+\alpha |T_{\text{leaves}}|}
  
*
Where:

- R(T) is the total misclassification error of the tree T on the training data

- |Tleaves| is the number of terminal (leaf) nodes in the tree T, serving as a measure of its complexity

- α ≥ 0 is the complexity parameter. It controls the trade-off between the tree's fit to the training data and its complexity. A value of α=0 means no penalty for complexity, resulting in the largest tree. As α increases, the penalty for having more leaves grows, leading to more aggressive pruning and smaller trees[&#91;28&#93;](#cite_note-geeks_ccp-28)

The CCP algorithm works as follows:[&#91;29&#93;](#cite_note-scikit_ccp-29)[&#91;30&#93;](#cite_note-nandi_pruning-30)

1. 
2. 
3. 
4. 

CCP is a powerful and principled method for finding the right-sized tree. By generating a sequence of candidate trees and using cross-validation, it provides a robust way to select a model that generalizes well. Modern libraries like scikit-learn expose CCP through the `ccp_alpha` hyperparameter.[&#91;31&#93;](#cite_note-scikit_ccp_api-31)

### Comparison of decision tree pruning methods

| Method | When to use | Computational cost | Pros | Cons | Canonical reference |
| --- | --- | --- | --- | --- | --- |
| **Pre-pruning** | Limited data, fast training desired | Low (prevents growth) | Simple; prevents deep overfitting early; computationally efficient | May stop too soon (horizon effect); missed structure | [&#91;18&#93;](#cite_note-scikit_trees-18) |
| **Cost-complexity post-pruning** | Standard CART workflow | High (full tree + pruning) | Strong CV-based model selection; nested subtrees; avoids horizon effect | Requires pruning path & CV; computationally expensive | [&#91;26&#93;](#cite_note-ibm_ccp-26)[&#91;1&#93;](#cite_note-breiman1984-1) |
| **Reduced-error post-pruning** | Separate validation set available | Medium (full tree + validation) | Conceptually simple; robust; easy to implement | Needs hold-out set; can be aggressive; less data for training | [&#91;24&#93;](#cite_note-elomaa2001-24) |

### Practical considerations

Modern libraries expose both pre- and post-pruning controls. For example, scikit-learn's `DecisionTreeClassifier` supports pre-pruning (for example `max_depth`, `min_samples_leaf`, `min_samples_split`, `min_impurity_decrease`) and post-pruning via `ccp_alpha`.[&#91;18&#93;](#cite_note-scikit_trees-18)

The choice between pre-pruning and post-pruning represents a classic algorithmic trade-off between computational efficiency and model optimality. Pre-pruning is computationally cheap, making it suitable for rapid prototyping or on massive datasets where building a full tree is infeasible.[&#91;23&#93;](#cite_note-geeks_pruning-23) In contrast, post-pruning is computationally expensive but makes more globally informed decisions, typically resulting in a more robust final model. The choice is therefore not merely technical but strategic, depending on the available resources and performance requirements of the application.

Classic works in decision tree pruning include Quinlan's C4.5 algorithm, which popularized decision-tree pruning (including a form of pessimistic error-based post-pruning).[&#91;32&#93;](#cite_note-quinlan1993-32)

## Pruning in artificial neural networks

In the domain of [deep learning](/index.php?title=Deep_learning&action=edit&redlink=1), pruning has become an essential technique for model compression and optimization. Modern deep neural networks, such as those used for [computer vision](/wiki/computer_vision) and [natural language processing](/index.php?title=Natural_language_processing&action=edit&redlink=1), are often massively over-parameterized, containing millions or even billions of parameters.[&#91;33&#93;](#cite_note-opendatascience-33) This over-parameterization, while beneficial for achieving high accuracy during training, results in models that are computationally expensive, slow to run, and have large memory footprints, making them difficult to deploy on resource-constrained devices like smartphones or embedded systems.[&#91;34&#93;](#cite_note-geeks_nn_pruning-34)

### Definition and mathematical formulation

Formally, neural network pruning transforms a model f(x; W) into f(x; M ⊙ W'), where M ∈ {0, 1}|W'| is a binary mask setting certain parameters to zero, W' is a (potentially modified) collection of parameters, and ⊙ represents the elementwise product operator.[&#91;8&#93;](#cite_note-polukhin_history-8) The goal is reducing parameter count and computational resources while maintaining accuracy on the task.

The process creates sparsity by eliminating connections (unstructured pruning) or entire structures (structured pruning). For a network with L layers and parameters θ = {W₁, W₂, ..., WL}, pruning identifies a subset S ⊂ θ of parameters to remove, typically by computing importance scores and removing low-importance parameters according to a pruning criterion.

The pruning optimization problem can be formulated as:

minimize: L(f(x; M ⊙ W), y)
subject to: ||M||₀ ≤ k
where L is the loss function, ||M||₀ counts non-zero elements in the mask, and k is the target number of remaining parameters. This NP-hard combinatorial optimization problem requires approximation methods in practice.

### Types of pruning by granularity

| Type | Granularity | Hardware Speedup | Typical Sparsity | Advantages | Disadvantages |
| --- | --- | --- | --- | --- | --- |
| **Unstructured** | Individual weights | Requires specialized hardware | 70-95% | Highest compression, better accuracy | No speedup on standard hardware |
| **Structured** | Filters/channels/layers | Universal speedup | 20-60% | Hardware-friendly, real acceleration | Lower compression, more accuracy loss |
| **Semi-structured** | Block patterns (N:M) | GPU-optimized | 50% (2:4) | Hardware support, good compression | Limited patterns, requires recent GPUs |

#### Unstructured pruning

**Unstructured pruning**, also called fine-grained pruning, removes individual weights anywhere in the network without pattern constraints.[&#91;4&#93;](#cite_note-comprehensive_survey-4) This approach achieves 50-90% sparsity with minimal accuracy loss by creating irregular sparse matrices. For example, VGG-16 on CIFAR-10 achieves 92.36% accuracy at 10% density with unstructured pruning versus 89.33% with structured pruning.[&#91;35&#93;](#cite_note-types_methods-35)

However, unstructured pruning suffers a critical limitation: it provides no speedup on standard hardware without specialized sparse computation libraries or hardware support. GPUs and CPUs are highly optimized for dense matrix operations, and the irregular sparsity pattern created by unstructured pruning means the underlying computation (matrix multiplication) still operates on the original dense matrix dimensions, with many multiplications by zero that are not skipped.[&#91;36&#93;](#cite_note-vadera2022-36)[&#91;37&#93;](#cite_note-kaggle_pruning-37)

#### Structured pruning

**Structured pruning** removes entire filters, channels, neurons, or layers while maintaining regular architecture.[&#91;14&#93;](#cite_note-li2016-14) This hardware-friendly approach achieves universal speedup on standard processors by reducing both memory and FLOPs. For instance, ResNet-50 on ImageNet achieves 2× acceleration with ~1.4% top-5 accuracy loss using L1-norm filter pruning.[&#91;4&#93;](#cite_note-comprehensive_survey-4)

Structured pruning exploits cascading effects: pruning an output filter in layer L automatically removes corresponding input channels in layer L+1, creating architectural modifications without specialized kernels. Research shows VGG-16 contains 90% of weights in fully-connected layers but only 1% of FLOPs in convolutional operations, making filter pruning particularly effective for CNNs.[&#91;38&#93;](#cite_note-gil_pruning-38)

Types of structured pruning include:

- **Neuron pruning**: Removes entire nodes using metrics like Average Percentage of Zeros (APoZ), which identifies neurons outputting mostly zeros on calibration data[&#91;39&#93;](#cite_note-network_trimming-39)

- **Filter/channel pruning**: Targets entire convolutional filters (output channels). Pruning a filter in layer L removes one output channel from layer L and the corresponding input channel for layer L+1[&#91;40&#93;](#cite_note-zia2022-40)[&#91;41&#93;](#cite_note-intel_distiller-41)

- **Layer pruning**: Removes entire layers to reduce network depth. For large language models, the Block Influence (BI) method measures the extent a layer alters hidden states for intelligent layer removal[&#91;42&#93;](#cite_note-shortened_llama-42)

#### Semi-structured pruning

**Semi-structured pruning** represents a middle ground, exemplified by N:M sparsity patterns where N of every M consecutive weights are non-zero.[&#91;43&#93;](#cite_note-nm_sparsity-43) NVIDIA's 2:4 structured sparsity achieves 2× speedup on Ampere A100 GPUs using sparse tensor cores while maintaining 50% sparsity, combining advantages of both approaches. This method is particularly effective because modern NVIDIA GPUs have dedicated hardware support for 2:4 sparsity patterns.

### Types of pruning by timing

Pruning methods can also be categorized based on when pruning is applied relative to the model training process.[&#91;44&#93;](#cite_note-datature_guide-44)

#### Post-training pruning

**Post-training pruning** is the traditional and most common approach. A dense network is first trained to convergence. Then, a pruning algorithm is applied to remove unimportant parameters. This is often followed by a "fine-tuning" phase, where the pruned network is retrained for a few epochs to allow the remaining weights to adjust and recover any accuracy lost during pruning.[&#91;8&#93;](#cite_note-polukhin_history-8)[&#91;44&#93;](#cite_note-datature_guide-44) This is often done iteratively: prune, fine-tune, prune, fine-tune, achieving gradual adaptation to sparsity and reduced catastrophic forgetting.

#### During-training pruning

**During-training pruning** integrates the pruning process directly into the training phase. Sparsity is encouraged from the beginning or introduced gradually as training progresses. This can be achieved through regularization methods (like [L1 regularization](/wiki/l1_regularization), which pushes weights towards zero) or by using dynamic pruning masks that are updated during training.[&#91;44&#93;](#cite_note-datature_guide-44) Methods include DeepR (2018) using stochastic updates, and dynamic pruning where masks change at runtime.

#### Pruning at initialization

**Pruning at initialization** (PaI), also known as pre-training pruning, is where the network is pruned at initialization, before any training has occurred. Inspired by the Lottery Ticket Hypothesis, methods like SNIP (2019) use connection sensitivity to prune one-shot,[&#91;45&#93;](#cite_note-snip2019-45) and GraSP (2020) preserves gradient flow.[&#91;46&#93;](#cite_note-grasp2020-46) Advantages include reduced training costs, though critical analysis by Frankle et al. (2020) showed pruning-at-initialization methods often underperform magnitude pruning after training.[&#91;47&#93;](#cite_note-pruning_at_init_critique-47)

### Global versus local pruning

**Local pruning** applies independent pruning within each layer with uniform or preset ratios, preventing layer collapse but yielding suboptimal sparsity distributions.[&#91;4&#93;](#cite_note-comprehensive_survey-4) This safer approach works well when importance varies greatly across layers and prevents catastrophic performance degradation.

**Global pruning** ranks importance across the entire network, automatically discovering optimal layer-wise sparsity patterns. While generally achieving better accuracy, global pruning risks layer collapse at high speedup ratios.[&#91;35&#93;](#cite_note-types_methods-35) For LLMs, where outlier features exhibit 20× magnitude differences across layers, protected global pruning preserves ≥10% of parameters per group to mitigate this risk.

## Pruning methods and algorithms

### Magnitude-based pruning

Magnitude-based pruning, dating to 1988 and popularized by Han et al. (2015), prunes weights with smallest absolute values: prune if |w| < threshold τ.[&#91;13&#93;](#cite_note-han2015-13) The core assumption is that weights with a small absolute value (magnitude) have a smaller impact on the network's output and thus contribute less to its predictive power.

Despite its simplicity, magnitude pruning remains a strong baseline, with TensorFlow reporting 6× compression with minimal loss.[&#91;48&#93;](#cite_note-tf_pruning-48) This can be applied at different scopes:[&#91;49&#93;](#cite_note-he2018-49)

- **Layer-wise pruning**: A separate pruning threshold (or percentage) is determined for each layer. Weights within each layer are ranked by magnitude, and the lowest-ranking ones are removed.

- **Global pruning**: All weights across the entire network (or all prunable layers) are collected into a single group. They are ranked globally by magnitude, and a single threshold is used to prune the lowest-ranking weights, regardless of which layer they belong to. Global pruning is often more effective as it allows the algorithm to automatically discover which layers are more sensitive to pruning.[&#91;8&#93;](#cite_note-polukhin_history-8)

For filter pruning, L1 and L2 norms rank importance: Score(f) = Σ|wi| for L1, Score(f) = √(Σwi²) for L2. Modern variants include Wanda, which combines weight magnitudes with activation norms: Score(w) = |w| × ||x||, outperforming pure magnitude methods on LLMs.[&#91;17&#93;](#cite_note-wanda2023-17) Recent work includes confident magnitude-based pruning (2024) adding uncertainty quantification.[&#91;50&#93;](#cite_note-confident_pruning-50)

### Gradient-based and second-order methods

#### Optimal Brain Damage

Optimal Brain Damage (OBD) approximates the change in objective function using Taylor series expansion with three key simplifications: diagonal Hessian approximation (cross terms neglected), extremal approximation (gradient term gi = 0 at convergence), and quadratic approximation (higher-order terms discarded).[&#91;2&#93;](#cite_note-obd1989-2)

The final saliency formula becomes:

  
    
      
        
          S
          
            k
          
        
        =
        
          
            
              
                h
                
                  k
                  k
                
              
              
                u
                
                  k
                
                
                  2
                
              
            
            2
          
        
      
    
    {\displaystyle S_{k}={\frac {h_{kk}u_{k}^{2}}{2}}}
  
![{\displaystyle S_{k}={\frac {h_{kk}u_{k}^{2}}{2}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d9526f0cc792d708c76f10624ad1e8df8833f1e2)
where hkk is the diagonal Hessian element computed via backpropagation and uk is the weight value. OBD successfully reduced a 2578-parameter network by 60% (removing 1500 parameters) with minimal accuracy impact, demonstrating that removing unimportant weights improves generalization and reduces required training examples.

#### Optimal Brain Surgeon

Optimal Brain Surgeon (OBS) extends OBD by using the full inverse Hessian H-1 rather than diagonal approximations, allowing weight modifications during pruning.[&#91;10&#93;](#cite_note-obs1993-10) For pruning weight q, optimal weight changes are:

  
    
      
        &#x03B4;
        w
        =
        &#x2212;
        
          
            
              w
              
                q
              
            
            
              (
              
                H
                
                  &#x2212;
                  1
                
              
              
                )
                
                  q
                  q
                
              
            
          
        
        &#x00D7;
        
          H
          
            &#x2212;
            1
          
        
        
          e
          
            q
          
        
      
    
    {\displaystyle \delta w=-{\frac {w_{q}}{(H^{-1})_{qq}}}\times H^{-1}e_{q}}
  
![{\displaystyle \delta w=-{\frac {w_{q}}{(H^{-1})_{qq}}}\times H^{-1}e_{q}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/07d083bdedacf61f8c069377c9b5804d6ad4beba)
with saliency:

  
    
      
        
          L
          
            q
          
        
        =
        
          
            
              w
              
                q
              
              
                2
              
            
            
              2
              [
              
                H
                
                  &#x2212;
                  1
                
              
              
                ]
                
                  q
                  q
                
              
            
          
        
      
    
    {\displaystyle L_{q}={\frac {w_{q}^{2}}{2[H^{-1}]_{qq}}}}
  
![{\displaystyle L_{q}={\frac {w_{q}^{2}}{2[H^{-1}]_{qq}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b2695949401cf8937078a8b0d6c91f031128f30f)
OBS significantly outperforms magnitude-based methods and OBD, which "often remove the wrong weights," permitting more aggressive pruning for the same training error and yielding better test generalization. Extensions include Layer-wise Optimal Brain Surgeon (2017)[&#91;51&#93;](#cite_note-lobs2017-51) and The Combinatorial Brain Surgeon (2022) for simultaneous weight removal.

#### Taylor expansion methods

First-order Taylor expansion approximates loss change when pruning parameter h:

  
    
      
        &#x0394;
        C
        &#x2248;
        
          
            
              &#x2202;
              C
            
            
              &#x2202;
              h
            
          
        
        &#x22C5;
        &#x0394;
        h
      
    
    {\displaystyle \Delta C\approx {\frac {\partial C}{\partial h}}\cdot \Delta h}
  
![{\displaystyle \Delta C\approx {\frac {\partial C}{\partial h}}\cdot \Delta h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae142cd195b65544c5966f47fd5828cc9cb0f3a8)
yielding importance:

  
    
      
        I
        (
        h
        )
        =
        
          |
          
            
              
                
                  &#x2202;
                  C
                
                
                  &#x2202;
                  h
                
              
            
            &#x22C5;
            h
          
          |
        
      
    
    {\displaystyle I(h)=\left|{\frac {\partial C}{\partial h}}\cdot h\right|}
  
![{\displaystyle I(h)=\left|{\frac {\partial C}{\partial h}}\cdot h\right|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b07febeea0f49546e3c520cdc9212471e1f7d9e1)
This computationally efficient criterion requires only first-order gradients, demonstrating 10× reduction on 3D-convolutional filters with small accuracy drops.[&#91;52&#93;](#cite_note-taylor_pruning-52)

Modern gradient-based methods include:

- **SNIP** (Single-shot Network Pruning): Uses connection sensitivity ∂L/∂mc normalized across parameters[&#91;45&#93;](#cite_note-snip2019-45)

- **GraSP**: Removes weights with least effect on gradient flow preservation[&#91;46&#93;](#cite_note-grasp2020-46)

- **Mean Gradient Method**: Novel criterion for CNNs achieving 5.64× FLOPs reduction on VGG-16 CIFAR-10 with <1% accuracy loss[&#91;53&#93;](#cite_note-mean_gradient-53)

### Regularization-based pruning

**L1 regularization** (Lasso) adds penalty λ||θ||₁ = λΣi|θi| to the loss, inducing exact sparsity by driving weights to zero through non-differentiable subgradients. **L2 regularization** (Ridge) adds λ||θ||₂² = λΣiθi², encouraging small weights without exact zeros.[&#91;54&#93;](#cite_note-l1l2_pruning-54)

**Growing Regularization** gradually increases penalty λ(t) over training iterations for improved pruning schedules, addressing Hessian information exploitation. **DeepHoyer** introduces scale-invariant, differentiable sparsity measures: DeepHoyer-Square (DHS) = (||θ||₁/||θ||₂)², optimizable via standard SGD.[&#91;55&#93;](#cite_note-deephoyer-55)

**Network Slimming** (2017) prunes channels by penalizing batch normalization scaling factors with L1 regularization, achieving 20× model size reduction and 5× computing operations reduction on VGG-16 CIFAR-10.[&#91;56&#93;](#cite_note-network_slimming-56)

### Pruning schedules

**One-shot pruning** removes the target percentage in a single step after training, offering negligible pruning cost and fast execution but requiring carefully designed criteria and risking layer collapse.[&#91;4&#93;](#cite_note-comprehensive_survey-4) Examples include SNIP, SynFlow (data-free), and SparseGPT for 100B+ parameter LLMs. One-shot methods are particularly valuable for very large models where iterative retraining is prohibitively expensive.

**Iterative pruning** alternates score-prune-update cycles: train to performance level, prune p% parameters, fine-tune several epochs, repeat until target sparsity.[&#91;13&#93;](#cite_note-han2015-13) While computationally expensive, iterative methods achieve better final accuracy through gradual adaptation to sparsity and reduced catastrophic forgetting. Studies on VGG-16 CIFAR-10 and LLaMA-7B consistently show iterative outperforming one-shot approaches.

**Automated Gradual Pruning** (AGP) uses polynomial sparsity schedules:[&#91;57&#93;](#cite_note-agp2018-57)

  
    
      
        s
        (
        t
        )
        =
        
          s
          
            f
          
        
        +
        (
        
          s
          
            i
          
        
        &#x2212;
        
          s
          
            f
          
        
        )
        
          
            (
            
              1
              &#x2212;
              
                
                  
                    t
                    &#x2212;
                    
                      t
                      
                        0
                      
                    
                  
                  
                    n
                    &#x22C5;
                    &#x0394;
                    t
                  
                
              
            
            )
          
          
            3
          
        
      
    
    {\displaystyle s(t)=s_{f}+(s_{i}-s_{f})\left(1-{\frac {t-t_{0}}{n\cdot \Delta t}}\right)^{3}}
  
![{\displaystyle s(t)=s_{f}+(s_{i}-s_{f})\left(1-{\frac {t-t_{0}}{n\cdot \Delta t}}\right)^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c8756a1e27e6e11ac001dde3f25a98ad2f7ad5c)
where sf is final sparsity, si is initial sparsity, and the schedule gradually increases sparsity over training.

## The Lottery Ticket Hypothesis

The Lottery Ticket Hypothesis, proposed by Jonathan Frankle and Michael Carbin at MIT in 2018, states that randomly-initialized dense networks f(x; θ₀) contain sparse subnetworks f(x; m⊙θ₀) (where m is a binary mask) that, when trained in isolation, reach accuracy comparable to the full network.[&#91;15&#93;](#cite_note-lottery2019-15) This ICLR 2019 Best Paper Award winner demonstrated winning tickets with 10-20% of original parameters achieving full network performance.

The hypothesis provides a powerful theoretical framework for understanding why pruning can be so effective, suggesting that large, over-parameterized networks are not just learning effective weights; they are also acting as a search space to find well-initialized sparse structures that are inherently good at learning.

### Iterative magnitude pruning

The **Iterative Magnitude Pruning** (IMP) algorithm identifies winning tickets:

1. 
2. 
3. 
4. 
5. 

The **rewinding variant**, proposed for stabilizing larger networks, resets to weights at iteration k (not initialization): θpruned = m ⊙ θk, establishing that networks become stable to SGD noise early in training, creating linearly-connected minima.[&#91;58&#93;](#cite_note-lottery_linear-58)

The key insight of the LTH is that the structure of the sparse subnetwork and its specific initial weight values are both crucial. A stronger version of the hypothesis has also been proven, showing that a sufficiently over-parameterized network contains a subnetwork that can approximate a target function well even before* any training.[&#91;59&#93;](#cite_note-wiki_lottery-59)

### Theoretical validation

Malach et al. (2020) provided the first theoretical proof of a strong lottery ticket hypothesis for two-layer networks, formally validating that pruning is sufficient.[&#91;60&#93;](#cite_note-lottery_proof-60) Extensions include applications to pre-trained BERT networks, where matching subnetworks exist at 40-90% sparsity at initialization.[&#91;61&#93;](#cite_note-lottery_bert-61)

Critical analysis by Frankle et al. (2020) showed pruning-at-initialization methods underperform magnitude pruning after training, with shuffling weights preserving accuracy—suggesting these methods identify architecture rather than specific initializations.[&#91;47&#93;](#cite_note-pruning_at_init_critique-47)

## Pruning in search and planning

Outside of model training, pruning is fundamental in symbolic AI search. In two-player games, **[alpha–beta pruning](/index.php?title=Alpha%E2%80%93beta_pruning&action=edit&redlink=1)** eliminates branches that cannot affect the minimax value, enabling deeper searches with the same compute while returning the same optimal move as plain minimax under perfect play.[&#91;3&#93;](#cite_note-russell_norvig-3)

Alpha-beta pruning is a search algorithm that seeks to decrease the number of nodes evaluated by the minimax algorithm in its search tree. It stops evaluating a move when at least one possibility has been found that proves the move to be worse than a previously examined move. Such moves need not be evaluated further. When applied to a standard minimax tree, it returns the same move as minimax would, but prunes away branches that cannot possibly influence the final decision.

The algorithm maintains two values, alpha and beta, which represent the minimum score that the maximizing player is assured of and the maximum score that the minimizing player is assured of, respectively. As the search proceeds, these values are updated, and branches are pruned when beta ≤ alpha, indicating that the current position will not be reached in optimal play.

## Applications and performance

### Computer vision

Pruning achieves substantial compression across vision architectures:

**ResNet models**:

- **ResNet-50 ImageNet**: 2× acceleration with ~1.4% top-5 accuracy loss (L1-norm pruning); 76% top-1 accuracy with only 25% FLOPs (GWCS method)[&#91;62&#93;](#cite_note-gwcs-62)

- **ResNet-56 CIFAR-10**: 25% sparsity shows optimal performance; 50-75% sparsity suboptimal due to low channel counts[&#91;63&#93;](#cite_note-applications-63)

- **ResNet-110 CIFAR-100**: 62% FLOPs reduction with accuracy maintained (HDBOFP method)

**VGG architectures** demonstrate extreme compressibility:

- **VGG-16 CIFAR-10**: 20× model size reduction, 5× computing operations reduction (Network Slimming); 60% channel sparsity with <1% performance drop[&#91;35&#93;](#cite_note-types_methods-35)

- **VGG-16 ImageNet**: 5× acceleration with 0.59% top-5 accuracy loss (FBS method)[&#91;64&#93;](#cite_note-fbs-64)

**Object detection**:

- **YOLOv5l**: 63.8% parameter reduction and 37.4% FLOPs reduction with favorable accuracy balance[&#91;65&#93;](#cite_note-pruned_yolo-65)

- **YOLOv3**: Pruning with quantization enables deployment on Jetson TX2 edge devices with significant energy reduction

### Natural language processing

BERT pruning demonstrates exceptional compression potential:

- **Optimal BERT Surgeon** (oBERT): 10× model size compression with <1% accuracy drop; 10× CPU-inference speedup with <2% accuracy drop; 29× speedup with <7.5% accuracy drop[&#91;66&#93;](#cite_note-obert-66)

- **Rasa BERT** (real-world deployment): 60% neuron sparsity achieving F1 ~0.895 (2.8% relative decrease), 28% inference acceleration, model size 406MB → 197MB (51% reduction); remarkably, 100% WQ and WK pruning (removing self-attention entirely) achieved F1 = 0.897[&#91;67&#93;](#cite_note-rasa_pruning-67)

- **Neural Magic BERT**: 12-layer 90% sparse achieves 4.05× speedup beating 3-layer dense BERT in accuracy; 3-layer 70% sparse achieves 9.20× speedup matching dense accuracy[&#91;68&#93;](#cite_note-neuralmagic_bert-68)

**Large language model pruning** has advanced dramatically:

- **SparseGPT**: First method efficiently pruning 10-100B+ parameter models; OPT-175B and BLOOM-176B pruned to 60% unstructured sparsity in under 4.5 hours with minimized perplexity[&#91;16&#93;](#cite_note-sparsegpt2023-16)

- **Wanda**: Simple weight × activation approach achieving competitive 50% sparsity, 300× faster than SparseGPT, no retraining needed[&#91;17&#93;](#cite_note-wanda2023-17)

- **LLaMA pruning**: Tailored-LLaMA achieves 95.68% accuracy recovery at 20% compression, 86.54% at 50% compression in <1 hour fine-tuning; AMD's LLaMA 3.1 405B conservative pruning removes 26 layers achieving >97% RougeL[&#91;69&#93;](#cite_note-amd_llama-69)

### Vision transformers

Token pruning methods achieve significant speedups:

- **DynamicViT**: Dynamic token sparsification with learnable prediction modules (NeurIPS 2021)

- **SPViT**: Computation-aware soft pruning reducing DeiT-T latency to 26ms on mobile[&#91;70&#93;](#cite_note-spvit-70)

- **NViT** (NVIDIA Research): Hardware-friendly global structural pruning achieving 1.9× speedup with minimal accuracy loss[&#91;71&#93;](#cite_note-nvit-71)

- **Isomorphic Pruning**: Groups sub-structures by topology; improved DeiT-Tiny from 74.52% to 77.50% accuracy by pruning DeiT-Base, and ConvNext-Tiny from 82.06% to 82.18%[&#91;72&#93;](#cite_note-isomorphic-72)

### Edge computing and mobile deployment

Edge applications demonstrate pruning's practical value:

- **MP-YOLO** (autonomous vehicles): Model size 6MB → 2.2MB (63% reduction), +4.7% AP50, +4.2% AP on DAIR-V2X dataset using LAMP pruning[&#91;73&#93;](#cite_note-mp_yolo-73)

- **Industrial IoT**: VGG16 and ResNet18 pruning achieves energy savings without accuracy compromise on BloodMNIST, VisA, MVTec datasets[&#91;74&#93;](#cite_note-industrial_iot-74)

- **Low-Rank LLaMA2-7B**: ~50% faster training vs. 8-bit quantization, ~1.25× inference speed-up, ~50% weights removed without fine-tuning[&#91;75&#93;](#cite_note-lowrank_llama-75)

### Industry use cases

Pruning has found applications across various industries where efficiency and interpretability are important:

- **Healthcare**: In medical diagnostics, pruned decision trees can create simple, interpretable rules for predicting patient risk factors or treatment outcomes. Pruned neural networks can accelerate the analysis of medical images on portable devices.[&#91;6&#93;](#cite_note-jang_decision_trees-6)

- **Finance**: Financial institutions use pruned decision trees for credit scoring and risk assessment. The resulting models are not only faster but also more transparent, making it easier to explain lending decisions to regulators and customers.[&#91;6&#93;](#cite_note-jang_decision_trees-6)

- **Marketing**: Pruned models are used for customer segmentation and targeted advertising. Their simplicity allows marketing teams to understand the key drivers of customer behavior and tailor their strategies accordingly.[&#91;6&#93;](#cite_note-jang_decision_trees-6)

## Advantages and limitations

### Benefits

| Model | Compression Ratio | Speedup | Accuracy Impact | Reference |
| --- | --- | --- | --- | --- |
| BERT-base | 10× | 29× | <7.5% loss | Optimal BERT Surgeon |
| ResNet-50 | 62-76% reduction | 2-5× | ~1.4% top-5 loss | Multiple studies |
| VGG-16 | 20× | 5× | <1% | Network Slimming |
| GPT-2 | 70% | 2.5× | Maintained | Nature 2025 |
| YOLOv4 | 96.7% | — | Balanced | Research papers |

Pruning provides numerous benefits:

- **Model size reduction**: Reduces storage requirements and deployment costs

- **Inference acceleration**: Lowers latency and enables real-time applications

- **Power consumption reduction**: Critical for battery-powered edge devices

- **Memory footprint reduction**: Allows larger batch sizes and more efficient inference

- **Better generalization**: Originally motivating OBD, pruning can act as regularization[&#91;2&#93;](#cite_note-obd1989-2)

- **Bandwidth reduction**: Lower model transfer costs for cloud and edge deployment

- **Cost savings**: Cloud inference cost reductions up to 70%

- **Interpretability**: Simpler models are easier to understand and explain

### Challenges and limitations

**Accuracy-efficiency trade-off**: Excessive pruning loses important information; beyond 80% sparsity, models become incapable of recovery. Different tasks and datasets exhibit varying sensitivity—ImageNet-trained models show more accuracy deterioration than CIFAR100-trained models.[&#91;76&#93;](#cite_note-dataset_sensitivity-76)

**Hardware-software compatibility**: Unstructured pruning requires specialized hardware for actual speedups. The Rasa study found 50%-sparse BERT provides almost no speed-up due to computational overhead, with tf.scatter_nd adding ~15ms. Extreme sparsity (80%+) needed on GPUs to see benefits.[&#91;67&#93;](#cite_note-rasa_pruning-67) Standard GPUs and CPUs are optimized for dense matrix operations, making irregular sparsity patterns inefficient without specialized support.

**Pruning schedule complexity**: Determining optimal schedules is non-trivial—pruning too eagerly (1 epoch) or too slowly both harm models. Different layers have different sensitivities requiring careful calibration.[&#91;67&#93;](#cite_note-rasa_pruning-67)

**Layer collapse**: Global pruning may eliminate entire groups at high speedup ratios. Protected global pruning preserving ≥10% parameters per group mitigates this.[&#91;76&#93;](#cite_note-dataset_sensitivity-76)

**Model and task specificity**: Vision Transformers are harder to compress than CNNs. Each component has characteristic maximum sparsity—BERT self-attention can sustain 100% pruning but intermediate layers cannot.[&#91;67&#93;](#cite_note-rasa_pruning-67) Recovery requirements increase with pruning ratio, making fine-tuning computationally expensive.

**Implementation challenges**: Requires careful tuning of hyperparameters, understanding of model architecture sensitivities, and often multiple iterations to achieve optimal results. The process can be time-consuming and requires expertise.

## Comparison with other model compression techniques

Pruning is one of the three main pillars of [model compression](/index.php?title=Model_compression&action=edit&redlink=1), alongside [quantization](/wiki/quantization) and [knowledge distillation](/wiki/knowledge_distillation). While all three aim to create more efficient models, they operate on different principles.

| Technique | Mechanism | Primary Effect | Typical Accuracy Impact | Hardware Considerations |
| --- | --- | --- | --- | --- |
| **Pruning** | Removes redundant weights, neurons, or filters from the model's architecture | Reduces parameter count and [FLOPs](/index.php?title=Floating-point_operations_per_second&action=edit&redlink=1), leading to a smaller and potentially faster model | Can maintain accuracy with fine-tuning; high pruning rates can cause degradation | Structured pruning is necessary for significant speedups on standard hardware (GPUs/CPUs) |
| **[Quantization](/wiki/quantization)** | Reduces the bit-precision of weights and/or activations (for example from 32-bit floats to 8-bit integers)[&#91;77&#93;](#cite_note-neptune_opt-77) | Reduces model size (memory footprint) and can significantly speed up inference due to faster integer arithmetic | Minor accuracy drop is common, often recoverable with Quantization-Aware Training (QAT) | Most effective with hardware that has native support for low-precision arithmetic (for example Tensor Cores, TPUs) |
| **[Knowledge distillation](/wiki/knowledge_distillation)** | Trains a smaller "student" model to mimic the behavior (output probabilities) of a larger "teacher" model[&#91;78&#93;](#cite_note-phontron_distill-78) | Creates a new, compact model with a different architecture and weights, but trained to capture the "dark knowledge" of the larger model | Aims to transfer the high performance of the teacher to the smaller student; some performance drop is expected but often less than training the small model from scratch | The student model can be designed specifically to be efficient on target hardware |

**Pruning vs. Quantization**: Pruning changes the model's architecture by removing parts of it. Quantization keeps the architecture the same but changes the numerical representation of the parameters. Pruning reduces the *number* of parameters, while quantization reduces the *size* of each parameter.[&#91;78&#93;](#cite_note-phontron_distill-78)

**Pruning vs. Knowledge Distillation**: Pruning is a process of simplifying an existing, trained model. Knowledge distillation is a training process for creating a new, smaller model. Pruning results in a subset of the original model's parameters, whereas the student model in distillation has entirely new parameters learned from scratch.[&#91;77&#93;](#cite_note-neptune_opt-77)

### Synergistic use

These techniques are not mutually exclusive and are often most powerful when used in combination.[&#91;79&#93;](#cite_note-stackexchange_combo-79) A common and highly effective pipeline for model compression involves:

1. 
2. 
3. 

By combining these methods, practitioners can achieve dramatic reductions in model size and latency, often by an order of magnitude or more, making it possible to deploy state-of-the-art AI on a wide variety of hardware.[&#91;80&#93;](#cite_note-reddit_combo-80)

## Advanced topics and modern frontiers

Pruning research continues to evolve, moving beyond simple heuristics applied to standard CNNs. Current research focuses on applying pruning to state-of-the-art architectures, automating the complex process of deciding what and how much to prune, and developing more dynamic and adaptive pruning strategies. This trajectory mirrors the broader evolution of machine learning itself: a progression from static, heuristic-based methods to dynamic, automated, and learned approaches.

### Automated pruning and AutoML

Manually determining the optimal pruning strategy for a given network—deciding which layers to prune and by how much—is a complex and time-consuming process involving extensive trial and error. To address this, the field is moving towards [AutoML](/index.php?title=Automated_machine_learning&action=edit&redlink=1) for pruning, where the pruning policy itself is learned automatically.[&#91;81&#93;](#cite_note-autosculpt-81)

These methods frame the search for the best pruned architecture as an optimization problem:

- **Meta-Learning Approaches**: Methods like MetaPruning train a separate "meta-network" (called a PruningNet) that learns to generate the optimal weights for any given pruned architecture. By sampling different pruned structures during training, the meta-network learns a general mapping from architecture to weights. This allows for a fast search over many candidate pruned networks without having to train each one from scratch.[&#91;82&#93;](#cite_note-metapruning-82)

- **Reinforcement Learning (RL) and Bayesian Methods**: Other approaches use RL agents or Bayesian optimization to explore the space of possible pruning configurations. The agent proposes a pruning action (for example a set of per-layer pruning rates), receives a reward based on the resulting model's accuracy and size, and updates its policy to find configurations that maximize the reward.[&#91;81&#93;](#cite_note-autosculpt-81)[&#91;83&#93;](#cite_note-reddit_bmrs-83)

- **Gradient-Based Automatic Pruning**: Techniques like AutoPrune introduce a set of trainable auxiliary parameters that control the pruning mask. These parameters are optimized via gradient descent alongside the model weights, allowing the network to learn its own sparse structure automatically and robustly, without sensitive hyperparameters like pruning thresholds.[&#91;84&#93;](#cite_note-autoprune-84)

### Dynamic and adaptive pruning

The most advanced frontier in pruning research involves moving away from a static pruned structure. In static pruning, once a network is pruned, its sparse structure remains fixed. Dynamic pruning methods allow this structure to change:

- **Dynamic Pruning During Training**: Some methods allow the pruning mask to be updated during the training process. For example, a technique called RigL (Rigged Lottery) prunes weights with the smallest magnitudes and then reactivates (regrows) connections with the largest gradient magnitudes, allowing the sparse topology to evolve and adapt throughout training.

- **Spatio-Temporal Pruning**: For models that process sequential data, like [spiking neural networks](/index.php?title=Spiking_neural_network&action=edit&redlink=1) (SNNs) used with Dynamic Vision Sensors, pruning can be adapted to the temporal dimension. Spatio-temporal pruning algorithms dynamically adjust the network's structure to reduce not only spatial redundancy (within a single frame) but also temporal redundancy that exists across consecutive frames of data.[&#91;85&#93;](#cite_note-spatio_temporal-85) This represents a highly adaptive form of pruning tailored to the specific characteristics of the data stream.

- **Input-Dependent Dynamic Pruning**: Masks change per input at inference, optimizing for each sample. This allows the model to use different sparse structures for different inputs, allocating computational resources where they are most needed.

## Tools and frameworks

### PyTorch

[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1)'s **torch.nn.utils.prune** module (available since 1.4.0) provides built-in pruning capabilities including random_unstructured(), l1_unstructured(), ln_structured(), and global_unstructured().[&#91;86&#93;](#cite_note-pytorch_docs-86) The module uses forward hooks applying masks during inference, supports iterative pruning with mask accumulation via PruningContainer, and allows custom pruning methods via BasePruningMethod.

**Torch-Pruning**, implementing the DepGraph algorithm (CVPR 2023), provides automatic dependency analysis for structural pruning across LLMs, Vision Transformers, CNNs, and detection models.[&#91;87&#93;](#cite_note-torch_pruning-87) Supporting GroupMagnitudeImportance, GroupTaylorImportance, and custom metrics, it enables high-level pruning with global strategies and isomorphic pruning (ECCV 2024).

### TensorFlow

The **[TensorFlow Model Optimization Toolkit](/index.php?title=TensorFlow_Model_Optimization_Toolkit&action=edit&redlink=1)** provides magnitude-based pruning via prune_low_magnitude() with polynomial decay schedules, integrated with Keras layers.[&#91;48&#93;](#cite_note-tf_pruning-48) Features include UpdatePruningStep and PruningSummaries callbacks, strip_pruning() to remove wrappers, [TensorFlow](/wiki/tensorflow) Lite support with XNNPACK acceleration, and PruneForLatencyOnXNNPack policy for mobile/edge devices. The toolkit supports structured pruning patterns including 2:4 and N:M sparsity.

### [NVIDIA](/wiki/nvidia) tools

**[NVIDIA TensorRT Model Optimizer](/index.php?title=NVIDIA_TensorRT_Model_Optimizer&action=edit&redlink=1)** supports depth pruning (layer removal), width pruning (neurons, attention heads, channels), magnitude-based and activation-based pruning for LLMs and transformers, with TensorRT integration for optimized inference.[&#91;88&#93;](#cite_note-nvidia_trt-88)

**NeMo Framework** provides script-based pruning (scripts/llm/gpt_prune.py) powered by TensorRT Model Optimizer, supporting combined depth and width pruning for Llama, Mistral, and other LLMs with importance calibration using training data.[&#91;89&#93;](#cite_note-nemo_pruning-89)

**[NVIDIA ASP](/index.php?title=NVIDIA_ASP&action=edit&redlink=1)** (Automatic SParsity) enables 2:4 structured sparsity for Ampere GPUs, achieving up to 2× speedup using sparse tensor cores with TensorRT 8.0+ integration.[&#91;90&#93;](#cite_note-nvidia_asp-90)

### Additional frameworks

**[Microsoft NNI](/index.php?title=Microsoft_NNI&action=edit&redlink=1)** (Neural Network Intelligence) provides unified API for 10+ pruning algorithms including L1NormPruner, FPGMPruner, SlimPruner, TaylorFOWeightPruner, with ModelSpeedup for real acceleration, supporting PyTorch and TensorFlow.[&#91;91&#93;](#cite_note-nni_docs-91)

**[JaxPruner](/index.php?title=JaxPruner&action=edit&redlink=1)** (Google Research 2023) offers JAX-based sparsity with magnitude, top-K, random, and gradient-based methods, integrating with Optax optimizers and Flax models, demonstrating minimal overhead with sparsity distributions and scheduling functions.[&#91;92&#93;](#cite_note-jaxpruner-92)

**[ONNX Runtime](/index.php?title=ONNX_Runtime&action=edit&redlink=1)** provides graph optimizations (constant folding, node elimination/fusion), dynamic and static quantization (INT8/INT4), and TensorRT EP integration for cross-platform deployment.[&#91;93&#93;](#cite_note-onnx_opt-93)

## Theoretical foundations

### Generalization bounds

Pruning's generalization benefits have theoretical support. For pruned networks, generalization error bounds:[&#91;94&#93;](#cite_note-theory_generalization-94)

  
    
      
        R
        (
        h
        )
        &#x2264;
        
          
            
              R
              &#x005E;
            
          
        
        (
        h
        )
        +
        O
        
          (
          
            
              
                
                  
                    d
                    
                      eff
                    
                  
                  log
                  &#x2061;
                  (
                  n
                  
                    /
                  
                  
                    d
                    
                      eff
                    
                  
                  )
                
                n
              
            
          
          )
        
      
    
    {\displaystyle R(h)\leq {\hat {R}}(h)+O\left({\sqrt {\frac {d_{\text{eff}}\log(n/d_{\text{eff}})}{n}}}\right)}
  
*
where deff is effective dimensionality (non-zero parameters). This shows generalization improves with higher pruning rates up to a threshold.

**PAC-Bayes compression bounds** provide state-of-the-art guarantees. For stochastic classifier Q, with probability 1-δ:[&#91;95&#93;](#cite_note-pac_bayes-95)

  
    
      
        R
        (
        Q
        )
        &#x2264;
        
          
            
              R
              &#x005E;
            
          
        
        (
        Q
        )
        +
        
          
            
              
                K
                L
                (
                Q
                
                  |
                
                
                  |
                
                P
                )
                +
                log
                &#x2061;
                (
                2
                
                  
                    n
                  
                
                
                  /
                
                &#x03B4;
                )
              
              
                2
                n
                &#x2212;
                1
              
            
          
        
      
    
    {\displaystyle R(Q)\leq {\hat {R}}(Q)+{\sqrt {\frac {KL(Q||P)+\log(2{\sqrt {n}}/\delta )}{2n-1}}}}
  
![{\displaystyle R(Q)\leq {\hat {R}}(Q)+{\sqrt {\frac {KL(Q||P)+\log(2{\sqrt {n}}/\delta )}{2n-1}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2a49d03409c25fc1ae24e396d52b57613557650)
where KL is Kullback-Leibler divergence. Arora et al. (2018) showed compression-based bounds orders of magnitude better than parameter counting, with first non-vacuous ImageNet-scale guarantees achieved in 2019.

**Path-norm bounds** provide rescaling-invariant metrics:[&#91;96&#93;](#cite_note-path_metrics-96)

  
    
      
        
          |
        
        
          |
        
        
          R
          
            &#x03B8;
          
        
        &#x2212;
        
          R
          
            
              &#x03B8;
              &#x2032;
            
          
        
        
          |
        
        
          |
        
        &#x2264;
        C
        &#x22C5;
        
          |
        
        
          |
        
        &#x03A6;
        (
        &#x03B8;
        )
        &#x2212;
        &#x03A6;
        (
        
          &#x03B8;
          &#x2032;
        
        )
        
          |
        
        
          
            |
          
          
            1
          
        
      
    
    {\displaystyle ||R_{\theta }-R_{\theta '}||\leq C\cdot ||\Phi (\theta )-\Phi (\theta ')||_{1}}
  
![{\displaystyle ||R_{\theta }-R_{\theta '}||\leq C\cdot ||\Phi (\theta )-\Phi (\theta ')||_{1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/afd8ff3eb8d123aa5998d1cc9a7cf6fd7d5d69d3)
where Φ(θ) is path-lifting of parameters, applicable to ResNets, VGGs, and U-nets.

### Statistical mechanics analysis

Teacher-student frameworks show sparse networks generalize better than dense networks for fixed parameter counts, with pruning benefit increasing with pruning instability (accuracy drop immediately after pruning)—suggesting pruning regularizes similarly to noise injection, producing flatter models.[&#91;97&#93;](#cite_note-generalization_stability-97)

## Key researchers

**Song Han** (MIT Associate Professor, 80,683+ citations) pioneered magnitude-based pruning (2015), Deep Compression (ICLR 2016 - 35-49× compression), AMC (ECCV 2018 - AutoML compression), and EIE inference engine (ISCA 2016 - top-5 most cited in 50 years). Recent work includes AWQ and SmoothQuant for LLM quantization. Awards include ICLR'16 Best Paper, NSF CAREER, "35 Innovators Under 35", IEEE "AI's 10 to Watch", Sloan Research Fellowship.[&#91;98&#93;](#cite_note-song_han-98)

**Jonathan Frankle** and **Michael Carbin** (MIT) introduced the Lottery Ticket Hypothesis (ICLR 2019 Best Paper), stabilization methods, and critical analysis of pruning-at-initialization, fundamentally changing understanding of network sparsity.[&#91;15&#93;](#cite_note-lottery2019-15)

**Gongfan Fang**, **Xinyin Ma**, and **Xinchao Wang** (National University of Singapore xML Lab) developed DepGraph (CVPR 2023), Isomorphic Pruning (ECCV 2024), LLM-Pruner (NeurIPS 2023), and Structural Pruning for Diffusion Models (NeurIPS 2023), advancing structured pruning across architectures.[&#91;72&#93;](#cite_note-isomorphic-72)

**Elias Frantar** and **Dan Alistarh** (IST Austria) created SparseGPT (ICML 2023), enabling efficient one-shot pruning of 100B+ parameter models.[&#91;16&#93;](#cite_note-sparsegpt2023-16)

**Pavlo Molchanov** and **Huanrui Yang** (NVIDIA Research) contributed Taylor expansion methods (ICLR 2017), importance estimation (CVPR 2019), and NViT (CVPR 2023) for hardware-aware pruning.[&#91;52&#93;](#cite_note-taylor_pruning-52)

**Yann LeCun**, **John S. Denker**, **Sara A. Solla**, **Babak Hassibi**, and **David G. Stork** established foundational second-order methods (OBD, OBS) in the late 1980s-early 1990s that continue influencing modern approaches.[&#91;2&#93;](#cite_note-obd1989-2)[&#91;10&#93;](#cite_note-obs1993-10)

## See also

- [Knowledge distillation](/wiki/knowledge_distillation)

- [Quantization (machine learning)](/index.php?title=Quantization_(machine_learning)&action=edit&redlink=1)

- [Neural architecture search](/index.php?title=Neural_architecture_search&action=edit&redlink=1)

- [Model compression](/index.php?title=Model_compression&action=edit&redlink=1)

- [Sparse matrix](/index.php?title=Sparse_matrix&action=edit&redlink=1)

- [Deep learning](/index.php?title=Deep_learning&action=edit&redlink=1)

- [Edge computing](/index.php?title=Edge_computing&action=edit&redlink=1)

- [Large language model](/wiki/large_language_model)

- [Decision tree learning](/index.php?title=Decision_tree_learning&action=edit&redlink=1)

- [Regularization (machine learning)](/index.php?title=Regularization_(machine_learning)&action=edit&redlink=1)

- [Alpha–beta pruning](/index.php?title=Alpha%E2%80%93beta_pruning&action=edit&redlink=1)

- [Minimax](/index.php?title=Minimax&action=edit&redlink=1)

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
18. 
19. 
20. 
21. 
22. 
23. 
24. 
25. 
26. 
27. 
28. 
29. 
30. 
31. 
32. 
33. 
34. 
35. 
36. 
37. 
38. 
39. 
40. 
41. 
42. 
43. 
44. 
45. 
46. 
47. 
48. 
49. 
50. 
51. 
52. 
53. 
54. 
55. 
56. 
57. 
58. 
59. 
60. 
61. 
62. 
63. 
64. 
65. 
66. 
67. 
68. 
69. 
70. 
71. 
72. 
73. 
74. 
75. 
76. 
77. 
78. 
79. 
80. 
81. 
82. 
83. 
84. 
85. 
86. 
87. 
88. 
89. 
90. 
91. 
92. 
93. 
94. 
95. 
96. 
97. 
98.