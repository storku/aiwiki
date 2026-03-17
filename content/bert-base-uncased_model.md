---
title: "Bert-base-uncased model"
slug: "bert-base-uncased_model"
categories:
  - "Models"
---Bert-base-uncased model

**Hugging Face**

[bert-base-uncased](/index.php?title=Https://huggingface.co/bert-base-uncased&action=edit&redlink=1)

**Name**

[bert-base-uncased](/index.php?title=Bert-base-uncased&action=edit&redlink=1)

**Type**

[Natural Language Processing](/wiki/natural_language_processing)

**Task**

[Fill-Mask](/index.php?title=Fill-Mask&action=edit&redlink=1)

**Library**

[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [TensorFlow](/wiki/tensorflow), [JAX](/index.php?title=JAX&action=edit&redlink=1), [Rust](/index.php?title=Rust&action=edit&redlink=1), [Core ML](/index.php?title=Core_ML&action=edit&redlink=1), [Safetensors](/index.php?title=Safetensors&action=edit&redlink=1), [Transformers](/wiki/transformers)

**Dataset**

[bookcorpus](/index.php?title=Bookcorpus&action=edit&redlink=1), [wikipedia](/index.php?title=Wikipedia&action=edit&redlink=1)

**Language**

[English](/index.php?title=English&action=edit&redlink=1)

**Paper**

[arxiv:1810.04805](https://www.arxiv.org/abs/1810.04805)

**License**

[apache-2.0](/index.php?title=Apache-2.0&action=edit&redlink=1)

**Related to**

[bert](/wiki/bert), [exbert](/index.php?title=Exbert&action=edit&redlink=1), [AutoTrain Compatible](/index.php?title=AutoTrain_Compatible&action=edit&redlink=1)

[Fill-Mask](/index.php?title=Fill-Mask&action=edit&redlink=1), [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [TensorFlow](/wiki/tensorflow), [JAX](/index.php?title=JAX&action=edit&redlink=1), [Rust](/index.php?title=Rust&action=edit&redlink=1), [Core ML](/index.php?title=Core_ML&action=edit&redlink=1), [Safetensors](/index.php?title=Safetensors&action=edit&redlink=1), [Transformers](/wiki/transformers), [bookcorpus](/index.php?title=Bookcorpus&action=edit&redlink=1), [wikipedia](/index.php?title=Wikipedia&action=edit&redlink=1), [English](/index.php?title=English&action=edit&redlink=1), [bert](/wiki/bert), [exbert](/index.php?title=Exbert&action=edit&redlink=1), [AutoTrain Compatible](/index.php?title=AutoTrain_Compatible&action=edit&redlink=1), [arxiv:1810.04805](https://www.arxiv.org/abs/1810.04805), [License: apache-2.0](/index.php?title=License:_apache-2.0&action=edit&redlink=1)
[English](/index.php?title=English&action=edit&redlink=1)

Bert-base-uncased model is a [Natural Language Processing](/wiki/natural_language_processing) [model](/wiki/model) used for [Fill-Mask](/index.php?title=Fill-Mask&action=edit&redlink=1).

## Model Description

## Clone Model Repository

<tabber>
|-|HTTPS=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone https://huggingface.co/bert-base-uncased
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

|-|SSH=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone git@hf.co:bert-base-uncased
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

</tabber>

## Hugging Face Transformers Library

from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

model = AutoModelForMaskedLM.from_pretrained("bert-base-uncased")

## Deployment

### Inference API

<tabber>
|-|Python=

import requests

API_URL = "https://api-inference.huggingface.co/models/bert-base-uncased"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "The answer to the universe is [MASK].",
})

|-|JavaScript=

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/bert-base-uncased",
		{
			headers: { Authorization: "Bearer {API_TOKEN}" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "The answer to the universe is [MASK]."}).then((response) => {
	console.log(JSON.stringify(response));
});

|-|cURL=

curl https://api-inference.huggingface.co/models/bert-base-uncased \
	-X POST \
	-d '{"inputs": "The answer to the universe is [MASK]."}' \
	-H "Authorization: Bearer {API_TOKEN}"

</tabber>

### Amazon SageMaker

    import sagemaker
import boto3
from sagemaker.huggingface import HuggingFaceModel

try:
	role = sagemaker.get_execution_role()
except ValueError:
	iam = boto3.client('iam')
	role = iam.get_role(RoleName='sagemaker_execution_role')['Role']['Arn']

# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'bert-base-uncased',
	'HF_TASK':'fill-mask'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.26.0',
	pytorch_version='1.13.1',
	py_version='py39',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	"inputs": "The answer to the universe is [MASK].",
})
  
### Spaces

```
import gradio as gr

gr.Interface.load("models/bert-base-uncased").launch()

```

## Training

### Amazon SageMaker

## Model Card

## Comments

<comments />