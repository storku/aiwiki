---
title: "Runwayml/stable-diffusion-v1-5 model"
slug: "runwayml_stable-diffusion-v1-5_model"
categories:
  - "Models"
---Runwayml/stable-diffusion-v1-5 model

**Hugging Face**

[runwayml/stable-diffusion-v1-5](/index.php?title=Https://huggingface.co/runwayml/stable-diffusion-v1-5&action=edit&redlink=1)

**Name**

[stable-diffusion-v1-5](/index.php?title=Stable-diffusion-v1-5&action=edit&redlink=1)

**User / Organization**

[runwayml](/index.php?title=Https://huggingface.co/runwayml&action=edit&redlink=1)

**Type**

[Multimodal](/index.php?title=Multimodal&action=edit&redlink=1)

**Task**

[Text-to-Image](/index.php?title=Text-to-Image&action=edit&redlink=1)

**Library**

[Diffusers](/index.php?title=Diffusers&action=edit&redlink=1)

**Paper**

[arxiv:2207.12598](https://www.arxiv.org/abs/2207.12598), [arxiv:2112.10752](https://www.arxiv.org/abs/2112.10752), [arxiv:2103.00020](https://www.arxiv.org/abs/2103.00020), [arxiv:2205.11487](https://www.arxiv.org/abs/2205.11487), [arxiv:1910.09700](https://www.arxiv.org/abs/1910.09700)

**License**

[creativeml-openrail-m](/index.php?title=Creativeml-openrail-m&action=edit&redlink=1)

**Related to**

[stable-diffusion](/index.php?title=Stable-diffusion&action=edit&redlink=1), [stable-diffusion-diffusers](/index.php?title=Stable-diffusion-diffusers&action=edit&redlink=1)

[runwayml](/index.php?title=Runwayml&action=edit&redlink=1)
[Text-to-Image](/index.php?title=Text-to-Image&action=edit&redlink=1), [Diffusers](/index.php?title=Diffusers&action=edit&redlink=1), [stable-diffusion](/index.php?title=Stable-diffusion&action=edit&redlink=1), [stable-diffusion-diffusers](/index.php?title=Stable-diffusion-diffusers&action=edit&redlink=1), [arxiv:2207.12598](https://www.arxiv.org/abs/2207.12598), [arxiv:2112.10752](https://www.arxiv.org/abs/2112.10752), [arxiv:2103.00020](https://www.arxiv.org/abs/2103.00020), [arxiv:2205.11487](https://www.arxiv.org/abs/2205.11487), [arxiv:1910.09700](https://www.arxiv.org/abs/1910.09700), [License: creativeml-openrail-m](/index.php?title=License:_creativeml-openrail-m&action=edit&redlink=1)

Runwayml/stable-diffusion-v1-5 model is a [Multimodal](/index.php?title=Multimodal&action=edit&redlink=1) [model](/wiki/model) used for [Text-to-Image](/index.php?title=Text-to-Image&action=edit&redlink=1).

## Model Description

## Clone Model Repository

<tabber>
|-|HTTPS=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone https://huggingface.co/runwayml/stable-diffusion-v1-5
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

|-|SSH=

#Be sure to have git-lfs installed (https://git-lfs.com)
git lfs install
git clone git@hf.co:runwayml/stable-diffusion-v1-5
  
#To clone the repo without large files – just their pointers
#prepend git clone with the following env var:
GIT_LFS_SKIP_SMUDGE=1

</tabber>

## Hugging Face Transformers Library

## Deployment

### Inference API

<tabber>
|-|Python=

import requests

API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content
image_bytes = query({
	"inputs": "Astronaut riding a horse",
})
# You can access the image with PIL.Image for example
import io
from PIL import Image
image = Image.open(io.BytesIO(image_bytes))

|-|JavaScript=

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
		{
			headers: { Authorization: "Bearer {API_TOKEN}" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
query({"inputs": "Astronaut riding a horse"}).then((response) => {
	// Use image
});

|-|cURL=

curl https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5 \
	-X POST \
	-d '{"inputs": "Astronaut riding a horse"}' \
	-H "Authorization: Bearer {API_TOKEN}"

</tabber>

### Amazon SageMaker

### Spaces

import gradio as gr

gr.Interface.load("models/runwayml/stable-diffusion-v1-5").launch()

## Training

## Model Card

## Comments

<comments />