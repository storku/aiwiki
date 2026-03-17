---
title: "Nlpconnect/vit-gpt2-image-captioning model"
slug: "nlpconnect_vit-gpt2-image-captioning_model"
categories:
  - "Models"
---Nlpconnect/vit-gpt2-image-captioning model

**Hugging Face**

[nlpconnect/vit-gpt2-image-captioning](/index.php?title=Https://huggingface.co/nlpconnect/vit-gpt2-image-captioning&action=edit&redlink=1)

**Name**

[vit-gpt2-image-captioning](/index.php?title=Vit-gpt2-image-captioning&action=edit&redlink=1)

**User / Organization**

[nlpconnect](/index.php?title=Https://huggingface.co/nlpconnect&action=edit&redlink=1)

**Type**

[Multimodal](/index.php?title=Multimodal&action=edit&redlink=1)

**Task**

[Image-to-Text](/index.php?title=Image-to-Text&action=edit&redlink=1)

**Library**

[PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [Transformers](/wiki/transformers)

**License**

[apache-2.0](/index.php?title=Apache-2.0&action=edit&redlink=1)

**Related to**

[vision-encoder-decoder](/index.php?title=Vision-encoder-decoder&action=edit&redlink=1), [image-captioning](/index.php?title=Image-captioning&action=edit&redlink=1)

[nlpconnect](/index.php?title=Nlpconnect&action=edit&redlink=1)
[Image-to-Text](/index.php?title=Image-to-Text&action=edit&redlink=1), [PyTorch](/index.php?title=PyTorch&action=edit&redlink=1), [Transformers](/wiki/transformers), [doi:10.57967/hf/0222](https://dx.doi.org/10.57967/hf/0222), [vision-encoder-decoder](/index.php?title=Vision-encoder-decoder&action=edit&redlink=1), [image-captioning](/index.php?title=Image-captioning&action=edit&redlink=1), [License: apache-2.0](/index.php?title=License:_apache-2.0&action=edit&redlink=1)

Nlpconnect/vit-gpt2-image-captioning model is a [Multimodal](/index.php?title=Multimodal&action=edit&redlink=1) [model](/wiki/model) used for [Image-to-Text](/index.php?title=Image-to-Text&action=edit&redlink=1).

## Model Description

## Clone Model Repository

<tabber>
|-|HTTPS=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone https://huggingface.co/nlpconnect/vit-gpt2-image-captioning
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

|-|SSH=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone git@hf.co:nlpconnect/vit-gpt2-image-captioning
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

</tabber>

## Hugging Face Transformers Library

from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

model = AutoModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning")

## Deployment

### Inference API

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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
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
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

|-|
Local Machine=

from sagemaker.huggingface import HuggingFaceModel
import boto3

iam_client = boto3.client('iam')
role = iam_client.get_role(RoleName='{IAM_ROLE_WITH_SAGEMAKER_PERMISSIONS}')['Role']['Arn']
# Hub Model configuration. https://huggingface.co/models
hub = {
	'HF_MODEL_ID':'nlpconnect/vit-gpt2-image-captioning',
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
	'inputs': No input example has been defined for this model task.
})

</tabber>
</tabber>

### Spaces

import gradio as gr

gr.Interface.load("models/nlpconnect/vit-gpt2-image-captioning").launch()

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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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
	'model_name_or_path':'nlpconnect/vit-gpt2-image-captioning',
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