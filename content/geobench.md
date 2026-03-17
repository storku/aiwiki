---
title: "GeoBench"
slug: "geobench"
categories:
  - "Pages_with_reference_errors"
  - "AI_Benchmarks"
  - "Geospatial_AI_Benchmarks"
  - "Vision-Language_Model_Benchmarks"
  - "Earth_Observation_Benchmarks"
  - "Multimodal_Benchmarks"
  - "2023_Benchmarks"
  - "2024_Benchmarks"
---**

| GeoBench |
| --- |
| Overview |
| Full name | Geospatial Benchmarks Collection |
| Abbreviation | GeoBench |
| Description | A family of benchmarks evaluating AI models on geospatial reasoning, earth monitoring, and geographic localization tasks |
| Release date | 2023-06 |
| Latest version | Multiple variants |
| Benchmark updated | 2024-11 |
| Authors | [CCMDI Team](/index.php?title=CCMDI_Team&action=edit&redlink=1), [ServiceNow Research](/index.php?title=ServiceNow_Research&action=edit&redlink=1), [Muhammad Sohail Danish](/index.php?title=Muhammad_Sohail_Danish&action=edit&redlink=1), [Alexandre Lacoste](/index.php?title=Alexandre_Lacoste&action=edit&redlink=1), [Yoshua Bengio](/index.php?title=Yoshua_Bengio&action=edit&redlink=1), [And others](/index.php?title=And_others&action=edit&redlink=1) |
| Organization | [CCMDI](/index.php?title=CCMDI&action=edit&redlink=1), [ServiceNow Research](/index.php?title=ServiceNow_Research&action=edit&redlink=1), [The AI Alliance](/index.php?title=The_AI_Alliance&action=edit&redlink=1), [AIM UofA](/index.php?title=AIM_UofA&action=edit&redlink=1) |
| Technical Details |
| Type | [Geospatial Reasoning](/index.php?title=Geospatial_Reasoning&action=edit&redlink=1), [Earth Monitoring](/index.php?title=Earth_Monitoring&action=edit&redlink=1), [Visual Geolocation](/index.php?title=Visual_Geolocation&action=edit&redlink=1) |
| Modality | [Vision](/index.php?title=Vision&action=edit&redlink=1), [Text](/index.php?title=Text&action=edit&redlink=1), [Multimodal](/index.php?title=Multimodal&action=edit&redlink=1) |
| Task format | [Classification, Segmentation, Localization, Detection](/index.php?title=Classification,_Segmentation,_Localization,_Detection&action=edit&redlink=1) |
| Number of tasks | Varies by variant (12+ for GEO-Bench, 31 for GEOBench-VLM) |
| Total examples | 10,000+ (GEOBench-VLM), 100-500 (CCMDI GeoBench) |
| Evaluation metric | [Geographic distance](/index.php?title=Geographic_distance&action=edit&redlink=1), [Country accuracy](/index.php?title=Country_accuracy&action=edit&redlink=1), [Classification accuracy](/index.php?title=Classification_accuracy&action=edit&redlink=1), [IoU](/wiki/iou) |
| Domains | [Geography](/wiki/geography), [Remote sensing](/index.php?title=Remote_sensing&action=edit&redlink=1), [Urban planning](/index.php?title=Urban_planning&action=edit&redlink=1), [Environmental monitoring](/index.php?title=Environmental_monitoring&action=edit&redlink=1), [Disaster response](/index.php?title=Disaster_response&action=edit&redlink=1) |
| Languages | English, Multilingual (sign reading) |
| Performance |
| Human performance | 2,109.4 average (GeoGuessr), 4,579.4 expert |
| Baseline | Varies by task |
| SOTA score | 2,268.97 (CCMDI), 41.72% (VLM) |
| SOTA model | [Claude-3.5-Sonnet (CCMDI), LLaVA-OneVision (VLM)](/index.php?title=Claude-3.5-Sonnet_(CCMDI),_LLaVA-OneVision_(VLM)&action=edit&redlink=1) |
| SOTA date | 2024-11 |
| Saturated | No |
| Resources |
| Website | [Official website](https://geobench.org/) |
| Paper | [Paper](https://arxiv.org/abs/2306.03831) |
| GitHub | [Repository](https://github.com/ccmdi/geobench) |
| Dataset | [Download](https://huggingface.co/datasets/servicenow/geo-bench) |
| License | MIT (CCMDI), Apache-2.0 (ServiceNow)

 |

GeoBench** is a comprehensive family of [artificial intelligence](/wiki/artificial_intelligence) benchmarks designed to evaluate models on [geospatial reasoning](/index.php?title=Geospatial_reasoning&action=edit&redlink=1), [earth monitoring](/index.php?title=Earth_monitoring&action=edit&redlink=1), and geographic localization tasks. The GeoBench ecosystem encompasses multiple distinct but related benchmarks, each targeting different aspects of geospatial intelligence: the CCMDI GeoBench for [GeoGuessr](/index.php?title=GeoGuessr&action=edit&redlink=1)-style visual geolocation[&#91;1&#93;](#cite_note-ccmdi-1), ServiceNow's GEO-Bench for [earth observation](/index.php?title=Earth_observation&action=edit&redlink=1) foundation models[&#91;2&#93;](#cite_note-servicenow-2), and GEOBench-VLM for comprehensive [vision-language model](/index.php?title=Vision-language_model&action=edit&redlink=1) evaluation on geospatial tasks[&#91;3&#93;](#cite_note-geobenchvlm-3).

## Overview

The GeoBench family addresses critical gaps in AI evaluation for geospatial applications, ranging from consumer-facing tasks like location guessing to professional applications in [urban planning](/index.php?title=Urban_planning&action=edit&redlink=1), [environmental monitoring](/index.php?title=Environmental_monitoring&action=edit&redlink=1), and [disaster response](/index.php?title=Disaster_response&action=edit&redlink=1). These benchmarks reveal that while modern AI systems have made remarkable progress in language and vision tasks, they still struggle significantly with spatial reasoning and geographic understanding, capabilities that humans develop naturally through experience with the physical world.

### Significance

GeoBench benchmarks are particularly important because:

- They evaluate real-world applicable skills crucial for [autonomous systems](/index.php?title=Autonomous_systems&action=edit&redlink=1), [remote sensing](/index.php?title=Remote_sensing&action=edit&redlink=1), and [geographic information systems](/index.php?title=Geographic_information_systems&action=edit&redlink=1)

- They expose fundamental limitations in current AI's spatial reasoning capabilities

- They provide standardized evaluation protocols for an increasingly important application domain

- They bridge the gap between academic research and practical geospatial applications

## GeoBench Variants

### CCMDI GeoBench (GeoGuessr Benchmark)

The CCMDI GeoBench evaluates [large language models](/index.php?title=Large_language_models&action=edit&redlink=1) and [vision models](/index.php?title=Vision_models&action=edit&redlink=1) on their ability to geolocate images using a [GeoGuessr](/index.php?title=GeoGuessr&action=edit&redlink=1)-inspired framework[&#91;1&#93;](#cite_note-ccmdi-1).

#### Task Description

Models are presented with street-level or ground-level photographs and must:
1. Identify the country where the image was taken
2. Provide precise latitude and longitude coordinates
3. Integrate multiple visual cues including:

  * Vegetation and climate indicators
  * Architectural styles
  * Infrastructure characteristics
  * Visible text in various scripts
  * Road markings and signage

#### Evaluation Methodology

| Metric | Description | Scoring |
| --- | --- | --- |
| **Geographic Distance** | Kilometers from true location | Points decrease with distance |
| **Country Accuracy** | Correct country identification | Binary score |
| **Combined Score** | Weighted combination | Maximum 5,000 points per image |

#### Performance Results (2024)

| Rank | Model | Average Score | Best Score | Worst Score |
| --- | --- | --- | --- | --- |
| 1 | [Claude-3.5-Sonnet](/index.php?title=Claude-3.5-Sonnet&action=edit&redlink=1) | 2,268.97 | 5,000 | 0 |
| 2 | [GPT-4V](/index.php?title=GPT-4V&action=edit&redlink=1) | 2,145.32 | 5,000 | 0 |
| 3 | [Gemini-1.5-Pro](/index.php?title=Gemini-1.5-Pro&action=edit&redlink=1) | 2,087.54 | 5,000 | 0 |
| - | Human Average | 2,109.40 | - | - |
| - | Human Expert | 4,579.40 | - | - |

### ServiceNow GEO-Bench

ServiceNow's GEO-Bench focuses on [foundation models](/wiki/foundation_models) for [earth monitoring](/index.php?title=Earth_monitoring&action=edit&redlink=1) applications[&#91;2&#93;](#cite_note-servicenow-2).

#### Technical Specifications

| Aspect | Details |
| --- | --- |
| **Tasks** | 6 classification + 6 segmentation tasks |
| **Data Volume** | ~65 GB compressed |
| **Modalities** | Multispectral satellite imagery |
| **Baseline Models** | 20 models evaluated |
| **Python Support** | 3.9+ |
| **Installation** | `pip install geobench` |

#### Task Categories

| Category | Example Tasks | Application |
| --- | --- | --- |
| **Land Use Classification** | Urban vs. rural identification | Urban planning |
| **Vegetation Monitoring** | Forest type classification | Environmental protection |
| **Water Body Detection** | Lake and river segmentation | Water resource management |
| **Agricultural Analysis** | Crop type identification | Food security |
| **Disaster Assessment** | Flood extent mapping | Emergency response |
| **Infrastructure Monitoring** | Road network extraction | Transportation planning |

### GEOBench-VLM

GEOBench-VLM provides comprehensive evaluation of [vision-language models](/index.php?title=Vision-language_models&action=edit&redlink=1) on geospatial tasks[&#91;3&#93;](#cite_note-geobenchvlm-3).

#### Scale and Scope

- **Instructions**: Over 10,000 manually verified

- **Categories**: 8 broad categories

- **Sub-tasks**: 31 distinct evaluation types

- **Models Evaluated**: 13 state-of-the-art VLMs

#### Task Taxonomy

| Main Category | Sub-tasks | Complexity |
| --- | --- | --- |
| **Scene Understanding** | Classification, description, analysis | Low-Medium |
| **Object Counting** | Small to large-scale counting | Medium-High |
| **Detection** | Tiny to large object detection | High |
| **Localization** | Spatial reasoning, georeferencing | High |
| **Segmentation** | Semantic and instance segmentation | High |
| **Temporal Analysis** | Change detection, time series | Very High |
| **Damage Assessment** | Disaster impact evaluation | High |
| **Fine-grained Recognition** | Species, vehicle type identification | Medium |

#### Current Performance (2024)

| Rank | Model | Accuracy | Gap to Random |
| --- | --- | --- | --- |
| 1 | [LLaVA-OneVision](/index.php?title=LLaVA-OneVision&action=edit&redlink=1) | 41.72% | +16.72% |
| 2 | [GPT-4o](/index.php?title=GPT-4o&action=edit&redlink=1) | 41.14% | +16.14% |
| 3 | [Qwen2-VL](/index.php?title=Qwen2-VL&action=edit&redlink=1) | 40.25% | +15.25% |
| 4 | [Claude-3.5-Sonnet](/index.php?title=Claude-3.5-Sonnet&action=edit&redlink=1) | 39.87% | +14.87% |
| 5 | [Gemini-1.5-Pro](/index.php?title=Gemini-1.5-Pro&action=edit&redlink=1) | 38.92% | +13.92% |
| - | Random Baseline | 25.00% | - |

## Technical Implementation

### Data Collection and Curation

The GeoBench benchmarks employ various data sources:

| Benchmark | Data Source | Collection Method |
| --- | --- | --- |
| CCMDI GeoBench | GeoGuessr community maps | Crowdsourced gameplay |
| GEO-Bench | Satellite imagery providers | Professional curation |
| GEOBench-VLM | Multiple geospatial datasets | Academic aggregation |

### Evaluation Framework

```python

1. Example usage of CCMDI GeoBench

from geobench import GeoGuesserEvaluator

evaluator = GeoGuesserEvaluator()
result = evaluator.evaluate(

   model=my_model,
   test_set="community_world",
   num_images=100,
   temperature=0.4

)

1. ServiceNow GEO-Bench usage

import geobench
geobench.download()  # Downloads ~65GB dataset

from geobench import TaskLoader
loader = TaskLoader()
train_data = loader.load_task("land_cover_classification", split="train")
```

### Scoring Methodology

Each GeoBench variant uses task-appropriate scoring:

1. **Distance-based** (CCMDI): Haversine distance calculation
2. **Accuracy-based** (GEOBench-VLM): Standard classification metrics
3. **IoU-based** (GEO-Bench segmentation): Intersection over Union

## Key Findings and Insights

### Spatial Reasoning Limitations

All GeoBench variants reveal fundamental limitations in current AI systems:

| Challenge | Description | Impact |
| --- | --- | --- |
| **Scale Variation** | Difficulty handling different zoom levels | Poor generalization |
| **Temporal Reasoning** | Cannot track changes over time | Limited monitoring capability |
| **Spatial Relations** | Struggle with relative positioning | Navigation errors |
| **Cultural Context** | Miss region-specific cues | Reduced accuracy |
| **Multimodal Integration** | Poor text-vision alignment | Information loss |

### Performance Gaps

- **Human vs. AI**: Expert humans achieve 2x better scores on geolocation tasks

- **Random Baseline**: VLMs only 15-17% above random on complex geospatial tasks

- **Cross-domain Transfer**: Models trained on general datasets perform poorly on geospatial data

## Applications and Use Cases

### Real-World Applications

| Domain | Application | GeoBench Relevance |
| --- | --- | --- |
| **Urban Planning** | City development optimization | Land use classification |
| **Agriculture** | Crop yield prediction | Vegetation monitoring |
| **Disaster Response** | Damage assessment | Temporal change detection |
| **Environmental Protection** | Deforestation tracking | Multi-temporal analysis |
| **Navigation** | Autonomous vehicle routing | Spatial reasoning |
| **Intelligence** | Geospatial analysis | Object detection and counting |

### Research Impact

GeoBench has influenced several research directions:
1. Development of geospatial-specific foundation models
2. Improved multimodal architectures for spatial reasoning
3. Novel training strategies for geographic understanding
4. Benchmark-driven improvements in earth observation models

## Related Benchmarks

### Complementary Evaluations

| Benchmark | Focus | Relationship to GeoBench |
| --- | --- | --- |
| [GeoBenchX](/index.php?title=GeoBenchX&action=edit&redlink=1) | Multi-step geospatial tasks | Extended reasoning chains |
| [Spatial457](/index.php?title=Spatial457&action=edit&redlink=1) | 6D spatial reasoning | Fine-grained spatial understanding |
| [WorldQA](/index.php?title=WorldQA&action=edit&redlink=1) | Geographic knowledge QA | Factual knowledge complement |
| [SatlasPretrain](/index.php?title=SatlasPretrain&action=edit&redlink=1) | Satellite image pretraining | Foundation model development |
| [EarthNet2021](/index.php?title=EarthNet2021&action=edit&redlink=1) | Earth surface forecasting | Temporal prediction focus |

## Limitations and Future Directions

### Current Limitations

1. **Data Bias**: Over-representation of certain geographic regions
2. **Task Coverage**: Limited evaluation of 3D spatial reasoning
3. **Temporal Dynamics**: Insufficient long-term temporal evaluation
4. **Multimodal Gaps**: Text-vision alignment remains challenging
5. **Computational Cost**: Large-scale evaluation requires significant resources

### Future Research Directions

| Direction | Description | Potential Impact |
| --- | --- | --- |
| **3D Geospatial Tasks** | Include elevation and volumetric analysis | Enhanced spatial understanding |
| **Real-time Processing** | Streaming data evaluation | Operational applications |
| **Multi-agent Scenarios** | Collaborative geospatial reasoning | Swarm intelligence |
| **Cross-lingual Evaluation** | Multilingual geographic understanding | Global applicability |
| **Uncertainty Quantification** | Confidence estimation in predictions | Reliable deployment |

## Significance

GeoBench represents a crucial evaluation framework for advancing AI's understanding of the physical world. By revealing the significant gap between human and machine performance in geospatial reasoning, these benchmarks highlight both the progress made and the substantial challenges remaining. As AI systems increasingly interact with the physical world through [autonomous vehicles](/index.php?title=Autonomous_vehicles&action=edit&redlink=1), [drones](/index.php?title=Drones&action=edit&redlink=1), and [robotic systems](/index.php?title=Robotic_systems&action=edit&redlink=1), the capabilities tested by GeoBench become essential for safe and effective deployment.

The benchmark family's comprehensive coverage, from street-level photography to satellite imagery, from simple classification to complex temporal analysis, ensures that progress on GeoBench translates to real-world improvements in applications ranging from [environmental monitoring](/index.php?title=Environmental_monitoring&action=edit&redlink=1) to [urban planning](/index.php?title=Urban_planning&action=edit&redlink=1). As foundation models continue to evolve, GeoBench will remain a critical tool for measuring and driving progress in geospatial AI.

## See Also

- [Geospatial Intelligence](/index.php?title=Geospatial_Intelligence&action=edit&redlink=1)

- [Remote Sensing](/index.php?title=Remote_Sensing&action=edit&redlink=1)

- [Earth Observation](/index.php?title=Earth_Observation&action=edit&redlink=1)

- [Vision-Language Models](/index.php?title=Vision-Language_Models&action=edit&redlink=1)

- [Foundation Models](/index.php?title=Foundation_Models&action=edit&redlink=1)

- [GeoGuessr](/index.php?title=GeoGuessr&action=edit&redlink=1)

- [Spatial Reasoning](/index.php?title=Spatial_Reasoning&action=edit&redlink=1)

- [Environmental Monitoring](/index.php?title=Environmental_Monitoring&action=edit&redlink=1)

## References

1. ↑ [1.0](#cite_ref-ccmdi_1-0) [1.1](#cite_ref-ccmdi_1-1) CCMDI. (2024). "GeoBench: Benchmarking LLMs on GeoGuessr". Retrieved from [https://ccmdi.com/blog/GeoBench](https://ccmdi.com/blog/GeoBench)

2. ↑ [2.0](#cite_ref-servicenow_2-0) [2.1](#cite_ref-servicenow_2-1) Lacoste, A., et al. (2023). "GEO-Bench: Toward Foundation Models for Earth Monitoring". arXiv:2306.03831. Retrieved from [https://arxiv.org/abs/2306.03831](https://arxiv.org/abs/2306.03831)

3. ↑ [3.0](#cite_ref-geobenchvlm_3-0) [3.1](#cite_ref-geobenchvlm_3-1) Danish, M.S., et al. (2024). "GEOBench-VLM: Benchmarking Vision-Language Models for Geospatial Tasks". arXiv:2411.19325. Retrieved from [https://arxiv.org/abs/2411.19325](https://arxiv.org/abs/2411.19325)

Cite error: `<ref>` tag with name "geobenchx" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "github" defined in `<references>` is not used in prior text.

Cite error: `<ref>` tag with name "website" defined in `<references>` is not used in prior text.