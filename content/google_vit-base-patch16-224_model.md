---
title: "Google/vit-base-patch16-224 model"
slug: "google_vit-base-patch16-224_model"
categories:
  - "Models"
---Google/vit-base-patch16-224 model

**Hugging Face**

[google/vit-base-patch16-224](/index.php?title=Https://huggingface.co/google/vit-base-patch16-224&action=edit&redlink=1)

**Name**

[vit-base-patch16-224](/index.php?title=Vit-base-patch16-224&action=edit&redlink=1)

**User / Organization**

[google](/index.php?title=Https://huggingface.co/google&action=edit&redlink=1)

**Type**

[Computer Vision](/wiki/computer_vision)

**Task**

[Image Classification](/index.php?title=Image_Classification&action=edit&redlink=1)

**Library**

[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [TensorFlow](/wiki/tensorflow), [JAX](/index.php?title=JAX&action=edit&redlink=1), [Transformers](/wiki/transformers)

**Dataset**

[imagenet-1k](/index.php?title=Imagenet-1k&action=edit&redlink=1), [imagenet-21k](/index.php?title=Imagenet-21k&action=edit&redlink=1)

**Paper**

[arxiv:2010.11929](https://www.arxiv.org/abs/2010.11929), [arxiv:2006.03677](https://www.arxiv.org/abs/2006.03677)

**License**

[apache-2.0](/index.php?title=Apache-2.0&action=edit&redlink=1)

**Related to**

[vit](/index.php?title=Vit&action=edit&redlink=1), [vision](/index.php?title=Vision&action=edit&redlink=1), [AutoTrain Compatible](/index.php?title=AutoTrain_Compatible&action=edit&redlink=1)

[google](/index.php?title=Google&action=edit&redlink=1)
[Image Classification](/index.php?title=Image_Classification&action=edit&redlink=1), [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [TensorFlow](/wiki/tensorflow), [JAX](/index.php?title=JAX&action=edit&redlink=1), [Transformers](/wiki/transformers), [imagenet-1k](/index.php?title=Imagenet-1k&action=edit&redlink=1), [imagenet-21k](/index.php?title=Imagenet-21k&action=edit&redlink=1), [vit](/index.php?title=Vit&action=edit&redlink=1), [vision](/index.php?title=Vision&action=edit&redlink=1), [AutoTrain Compatible](/index.php?title=AutoTrain_Compatible&action=edit&redlink=1), [arxiv:2010.11929](https://www.arxiv.org/abs/2010.11929), [arxiv:2006.03677](https://www.arxiv.org/abs/2006.03677), [License: apache-2.0](/index.php?title=License:_apache-2.0&action=edit&redlink=1)

Google/vit-base-patch16-224 model is a [Computer Vision](/wiki/computer_vision) [model](/wiki/model) used for [Image Classification](/index.php?title=Image_Classification&action=edit&redlink=1).

## Model Description

## Clone Model Repository

<tabber>
|-|HTTPS=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone https://huggingface.co/google/vit-base-patch16-224
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

|-|SSH=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone git@hf.co:google/vit-base-patch16-224
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

</tabber>

## Hugging Face Transformers Library

from transformers import AutoFeatureExtractor, AutoModelForImageClassification

extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224")

model = AutoModelForImageClassification.from_pretrained("google/vit-base-patch16-224")

## Deployment

### Inference API

<tabber>
|-|Python=

import requests

API_URL = "https://api-inference.huggingface.co/models/google/vit-base-patch16-224"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

output = query("cats.jpg")

|-|JavaScript=

async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
		{
			headers: { Authorization: "Bearer {API_TOKEN}" },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("cats.jpg").then((response) => {
	console.log(JSON.stringify(response));
});

|-|cURL=

curl https://api-inference.huggingface.co/models/google/vit-base-patch16-224 \
	-X POST \
	--data-binary '@cats.jpg' \
	-H "Authorization: Bearer {API_TOKEN}"

</tabber>

### Amazon SageMaker

<tabber>
|-|Automatic Speech Recognition=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'automatic-speech-recognition'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'automatic-speech-recognition'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Conversational=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'conversational'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'conversational'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Feature Extraction=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'feature-extraction'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'feature-extraction'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Fill-Mask=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'fill-mask'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'fill-mask'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Image Classification=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'image-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'image-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Question Answering=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'question-answering'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'question-answering'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Summarization=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'summarization'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'summarization'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Table Question Answering=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'table-question-answering'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'table-question-answering'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Text Classification=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Text Generation=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text-generation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text-generation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Text2Text Generation=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text2text-generation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'text2text-generation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Token Classification=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'token-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'token-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Translation=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'translation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'translation'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
|-|Zero-Shot Classification=
<tabber>
AWS=

from sagemaker.huggingface import HuggingFaceModel
import sagemaker

role = sagemaker.get_execution_role()
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'zero-shot-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'google/vit-base-patch16-224',
	'HF_TASK':'zero-shot-classification'
}

# create Hugging Face Model Class
huggingface_model = HuggingFaceModel(
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	env=hub,
	role=role, 
)

# deploy model to SageMaker Inference
predictor = huggingface_model.deploy(
	initial_instance_count=1, # number of instances
	instance_type='ml.m5.xlarge' # ec2 instance type
)

predictor.predict({
	'inputs': "cats.jpg"
})

</tabber>
</tabber>

### Spaces

import gradio as gr

gr.Interface.load("models/google/vit-base-patch16-224").launch()

## Training

### Amazon SageMaker

<tabber>
|-|Causal Language Modeling=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/language-modeling
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_clm.py',
	source_dir='./examples/pytorch/language-modeling',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/language-modeling
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_clm.py',
	source_dir='./examples/pytorch/language-modeling',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Masked Language Modeling=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/language-modeling
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_mlm.py',
	source_dir='./examples/pytorch/language-modeling',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/language-modeling
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_mlm.py',
	source_dir='./examples/pytorch/language-modeling',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Question Answering=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/question-answering
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_qa.py',
	source_dir='./examples/pytorch/question-answering',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/question-answering
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_qa.py',
	source_dir='./examples/pytorch/question-answering',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Summarization=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/seq2seq
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_summarization.py',
	source_dir='./examples/pytorch/seq2seq',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/seq2seq
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_summarization.py',
	source_dir='./examples/pytorch/seq2seq',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Text Classification=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/text-classification
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_glue.py',
	source_dir='./examples/pytorch/text-classification',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/text-classification
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_glue.py',
	source_dir='./examples/pytorch/text-classification',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Token Classification=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/token-classification
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_ner.py',
	source_dir='./examples/pytorch/token-classification',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/token-classification
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_ner.py',
	source_dir='./examples/pytorch/token-classification',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
|-|Translation=
<tabber>
AWS=

import sagemaker
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
role = sagemaker.get_execution_role()
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/seq2seq
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_translation.py',
	source_dir='./examples/pytorch/seq2seq',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

|-|
Local Machine=

import sagemaker
import boto3
from sagemaker.huggingface import HuggingFace

# gets role for executing training job
iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
hyperparameters = {
	'model_name_or_path':'google/vit-base-patch16-224',
	'output_dir':'/opt/ml/model'
	# add your remaining hyperparameters
	# more info here https://github.com/huggingface/transformers/tree/v4.17.0/examples/pytorch/seq2seq
}

# git configuration to download our fine-tuning script
git_config = {'repo': 'https://github.com/huggingface/transformers.git','branch': 'v4.17.0'}

# creates Hugging Face estimator
huggingface_estimator = HuggingFace(
	entry_point='run_translation.py',
	source_dir='./examples/pytorch/seq2seq',
	instance_type='ml.p3.2xlarge',
	instance_count=1,
	role=role,
	git_config=git_config,
	transformers_version='4.17.0',
	pytorch_version='1.10.2',
	py_version='py38',
	hyperparameters = hyperparameters
)

# starting the train job
huggingface_estimator.fit()

</tabber>
</tabber>

## Model Card

## Comments

<comments />