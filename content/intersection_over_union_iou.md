---
title: "Intersection over union (IoU)"
slug: "intersection_over_union_iou"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Intersection over Union (IoU)

Intersection over Union (IoU) is a widely used metric for evaluating the performance of object detection and instance segmentation algorithms in machine learning. It measures the degree of overlap between two bounding boxes or shapes, often representing the predicted output and the ground truth. IoU is particularly important in tasks such as object detection, semantic segmentation, and instance segmentation, where the quality of the localization of objects is crucial.

### Definition

Given two sets, *A* and *B*, the Intersection over Union is defined as the ratio between the size of their intersection and the size of their union. Mathematically, it can be written as:

*IoU(A, B) = |A ∩ B| / |A ∪ B|*
In the context of object detection or instance segmentation, the sets *A* and *B* correspond to the areas within two bounding boxes, with *A* usually being the predicted bounding box and *B* being the ground truth bounding box. The intersection represents the area where the boxes overlap, and the union is the total area covered by both boxes.

### Applications

IoU is particularly useful in evaluating the performance of [object detection](/index.php?title=Object_detection&action=edit&redlink=1) and [instance segmentation](/index.php?title=Instance_segmentation&action=edit&redlink=1) algorithms. In these tasks, the primary goal is to accurately locate and classify objects within an image. By comparing the predicted bounding boxes with the ground truth, IoU provides a quantitative measure of the algorithm's localization accuracy.

IoU is also used to determine the optimal set of predicted bounding boxes in algorithms such as [Non-Maximum Suppression (NMS)](/index.php?title=Non-Maximum_Suppression_(NMS)&action=edit&redlink=1). NMS is a post-processing step that removes redundant and overlapping predictions to produce a more concise and accurate set of detections. A threshold IoU value is used to decide whether two bounding boxes are significantly overlapping and, if so, which one to keep and which one to discard.

### Thresholds and Evaluation Metrics

In practice, an IoU threshold is often used to determine whether a predicted bounding box is considered a "correct" detection. A common threshold is 0.5, which means that if the IoU between the predicted bounding box and the ground truth is equal to or greater than 0.5, the prediction is considered correct. However, this threshold can be adjusted depending on the specific application or desired level of precision.

IoU is often combined with other metrics, such as precision and recall, to form a more comprehensive evaluation metric called the [Mean Average Precision (mAP)](/index.php?title=Mean_Average_Precision_(mAP)&action=edit&redlink=1). The mAP takes into account both the localization accuracy (IoU) and the classification accuracy of an object detection algorithm, providing a single value that can be used for comparison and optimization.

## Explain Like I'm 5 (ELI5)

Imagine you're trying to draw a box around your favorite toy on a piece of paper. Now, let's say your friend also draws a box around the same toy. Intersection over Union (IoU) is a way to measure how well your boxes match. If both boxes are exactly the same, the IoU is 1 (perfect match). If the boxes don't overlap at all, the IoU is 0 (no match). In machine learning, we use this measure to see how well our computer program can find and draw boxes around objects in pictures.