---
title: "Serving"
slug: "serving"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Serving in Machine Learning

Serving in machine learning refers to the process of deploying and utilizing a trained machine learning model to make predictions or decisions based on new input data. This process is an integral part of the [machine learning pipeline](/index.php?title=Machine_learning_pipeline&action=edit&redlink=1), as it allows the machine learning models to be applied to real-world problems and provide value to users. The serving process typically follows the completion of the [training and evaluation](/index.php?title=Training_and_evaluation&action=edit&redlink=1) stages of a machine learning project.

### Model Deployment

Model deployment is the act of integrating the trained machine learning model into an application, system, or service to enable it to make predictions or decisions. There are various deployment methods available, depending on the requirements and constraints of the application. Some common deployment strategies include:

- **Local deployment:** The model is integrated directly into the application or system, running on the same hardware and infrastructure.

- **Cloud-based deployment:** The model is hosted on a cloud service provider, such as [Amazon Web Services](/index.php?title=Amazon_Web_Services&action=edit&redlink=1) or [Google Cloud Platform](/index.php?title=Google_Cloud_Platform&action=edit&redlink=1), allowing for scalability, accessibility, and remote management.

- **Edge deployment:** The model is deployed on edge devices, such as smartphones or IoT devices, to enable real-time predictions or decisions without the need for constant internet connectivity.

### Model Serving Systems

Model serving systems are specialized software or infrastructure designed to manage and serve machine learning models in a production environment. These systems typically handle tasks such as:

- **Model versioning:** Tracking and managing different versions of a model, allowing for updates and rollback capabilities.

- **Model scaling:** Automatically scaling the model serving infrastructure to handle varying levels of request traffic.

- **Model monitoring:** Continuously monitoring the model's performance and health, to detect issues and ensure optimal operation.

- **Model performance optimization:** Utilizing techniques to reduce latency and increase throughput, such as model quantization, parallelization, or hardware acceleration.

Some popular model serving systems include [TensorFlow Serving](/wiki/tensorflow_serving), [NVIDIA Triton Inference Server](/wiki/nvidia_triton_inference_server), and [MLflow](/index.php?title=MLflow&action=edit&redlink=1).

## Explain Like I'm 5 (ELI5)

Imagine you have a smart toy that can recognize shapes. Before it can do that, you have to teach it by showing it many examples of different shapes. This teaching process is called "training." Once the toy has learned what different shapes look like, you can use it to recognize shapes that it has never seen before. This part where the toy uses its knowledge to recognize new shapes is called "serving" in machine learning.

To make the smart toy work well for everyone, you need to put it in a special box (called a "serving system") that takes care of many important things. This box helps the toy remember different versions of its learning, makes sure it can handle many people asking it to recognize shapes at the same time, and checks that the toy is working well and not making mistakes.