---
title: "IoU"
slug: "iou"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Introduction

In the field of [machine learning](/wiki/machine_learning) and [computer vision](/wiki/computer_vision), **Intersection over Union (IoU)** is a commonly used evaluation metric for object detection and segmentation tasks. This metric measures the overlap between the predicted bounding box (or segmentation mask) and the ground truth bounding box (or segmentation mask), providing a quantitative assessment of the model's performance in terms of its ability to accurately localize objects within an image or video.

## Intersection over Union (IoU) Definition

### Intersection

The **intersection** refers to the common area shared by two sets, in this case, the predicted bounding box (or segmentation mask) and the ground truth bounding box (or segmentation mask). In the context of object detection or segmentation, the intersection is the area where the model's prediction and the actual object's location or shape coincide.

### Union

The **union** represents the total area covered by both the predicted bounding box (or segmentation mask) and the ground truth bounding box (or segmentation mask). This includes the intersection area and any additional areas covered by either the predicted or ground truth bounding boxes (or segmentation masks) but not both.

### IoU Calculation

To calculate the Intersection over Union (IoU) metric, divide the intersection area by the union area:

  
    
      
        I
        o
        U
        =
        
          
            
              A
              r
              e
              a
              &#x005F;
              o
              f
              &#x005F;
              I
              n
              t
              e
              r
              s
              e
              c
              t
              i
              o
              n
            
            
              A
              r
              e
              a
              &#x005F;
              o
              f
              &#x005F;
              U
              n
              i
              o
              n
            
          
        
      
    
    {\displaystyle IoU={\frac {Area\_of\_Intersection}{Area\_of\_Union}}}
  
![{\displaystyle IoU={\frac {Area\_of\_Intersection}{Area\_of\_Union}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a01bbdb096d7f130fa4e8cb10aaad7ac94921f7a)

The result is a value ranging from 0 to 1. An IoU score of 0 indicates that there is no overlap between the predicted and ground truth bounding boxes (or segmentation masks), while an IoU score of 1 indicates a perfect match.

## Applications and Limitations

IoU is widely used as an evaluation metric in various computer vision tasks, such as object detection, instance segmentation, and semantic segmentation. It is particularly useful for comparing the performance of different models or algorithms, as it provides a single, interpretable value that summarizes the model's localization accuracy.

However, IoU has some limitations. For example, it does not account for the quality of the predicted class labels or the number of false positive and false negative predictions. As a result, it is often combined with other evaluation metrics, such as precision, recall, and the F1 score, to provide a more comprehensive assessment of a model's performance.

## Explain Like I'm 5 (ELI5)

Imagine you and your friend both draw a picture of a cat on a piece of paper. Now, you want to compare how similar your drawings are. You can do this by placing one drawing on top of the other and finding the areas where both drawings show the cat (the intersection). Then, you look at the total area covered by both drawings (the union). To find out how similar your drawings are, you divide the intersection area by the union area. This gives you a number between 0 and 1 that tells you how similar your drawings are. In machine learning, this is called the Intersection over Union (IoU), and it's used to measure how well a computer program can find objects in pictures or videos.