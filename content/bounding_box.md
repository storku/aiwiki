---
title: "Bounding box"
slug: "bounding_box"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Bounding Box in Machine Learning

### Definition

A **bounding box** is a rectangular box used in [machine learning](/wiki/machine_learning) and [computer vision](/wiki/computer_vision) to represent the spatial extent of an object within an image or a sequence of images. It is generally defined by the coordinates of its top-left corner and its width and height. Bounding boxes are widely employed in object detection, localization, and tracking tasks, where the objective is to identify and localize objects of interest in images or videos.

### Usage in Object Detection and Localization

In object detection and localization tasks, bounding boxes are used to mark the position and size of objects within an image or video frame. The bounding box is typically represented by four parameters: the (x, y) coordinates of the top-left corner, and the width (w) and height (h) of the box. These parameters can be either absolute pixel values or normalized values relative to the dimensions of the image. 

[Convolutional neural networks](/index.php?title=Convolutional_neural_networks&action=edit&redlink=1) (CNNs) and other deep learning models are often trained to predict these parameters for each object in a given image. Some popular object detection algorithms that use bounding boxes include [YOLO](/index.php?title=YOLO&action=edit&redlink=1) (You Only Look Once), [SSD](/index.php?title=SSD&action=edit&redlink=1) (Single Shot MultiBox Detector), and [Faster R-CNN](/index.php?title=Faster_R-CNN&action=edit&redlink=1).

### Intersection over Union (IoU)

In order to evaluate the accuracy of a bounding box, the [Intersection over Union](/index.php?title=Intersection_over_Union&action=edit&redlink=1) (IoU) metric is commonly used. IoU is a measure of the overlap between the ground truth bounding box (provided by human annotators) and the predicted bounding box from a machine learning model. It is calculated by dividing the area of intersection between the two boxes by the area of their union. A higher IoU value indicates a better match between the predicted and ground truth boxes. IoU is often used as a criterion for determining whether a prediction is considered a true positive, false positive, or false negative in object detection tasks.

## Explain Like I'm 5 (ELI5)

A bounding box is like drawing a rectangle around an object in a picture to show where it is. In machine learning, computers learn to find these rectangles by themselves so they can locate different things in a picture, like a dog, a car, or a person. These rectangles help us know where the important things are in the picture. To see if the computer did a good job finding the rectangles, we compare them to rectangles drawn by people and use a special way of measuring how close they are, called Intersection over Union (IoU).