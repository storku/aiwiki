---
title: "Vimgolf"
slug: "vimgolf"
categories:
  - "AI_Benchmarks"
  - "Benchmarks"
  - "Vim"
  - "Text_editing_benchmarks"
  - "Agent_Benchmarks"
  - "Terminal_Environment_Benchmarks"
  - "2025_Benchmarks"
---**

| vimgolf-gym |
| --- |
| Overview |
| Full name | Vimgolf Gym Environment |
| Abbreviation | vimgolf-gym |
| Description | OpenAI gym like, customizable environment and benchmark for Vimgolf |
| Latest version | 0.1.1 |
| Authors | [James Brown](/index.php?title=James_Brown&action=edit&redlink=1) |
| Organization | [Cybergod AGI Research](/index.php?title=Cybergod_AGI_Research&action=edit&redlink=1) |
| Technical Details |
| Type | [Vim editing challenge evaluation](/index.php?title=Vim_editing_challenge_evaluation&action=edit&redlink=1) |
| Modality | [Text editing](/index.php?title=Text_editing&action=edit&redlink=1), [Vim commands](/index.php?title=Vim_commands&action=edit&redlink=1) |
| Task format | [Vim golf challenges](/index.php?title=Vim_golf_challenges&action=edit&redlink=1)

 |
| Evaluation metric | [Keystroke count (lower is better)](/index.php?title=Keystroke_count_(lower_is_better)&action=edit&redlink=1), [Relative inverse score](/index.php?title=Relative_inverse_score&action=edit&redlink=1) |
| Domains | [Text editing](/index.php?title=Text_editing&action=edit&redlink=1), [Vim proficiency](/index.php?title=Vim_proficiency&action=edit&redlink=1) |
| Languages | Python, Rust |
| Performance

 |
| Saturated | False |
| Resources |
| Website | [Official website](https://james4ever0.github.io/vimgolf-gym) |
| GitHub | [Repository](https://github.com/james4ever0/vimgolf-gym) |
| Dataset | [Download](https://huggingface.co/datasets/James4Ever0/vimgolf_challenges_and_solutions) |
| License | The Unlicense

 |

vimgolf-gym** is an [OpenAI Gym](/wiki/openai_gym)-like customizable environment and benchmark for Vimgolf, designed to evaluate AI agents' ability to solve text editing challenges using [Vim](/index.php?title=Vim&action=edit&redlink=1) commands efficiently.

## Overview

vimgolf-gym provides a standardized testing framework for Vim editing proficiency through golf-style challenges where participants must transform given input text to match desired output text using the fewest possible keystrokes.

### Motivation

The environment was created to:

- Provide a gym-like interface for Vimgolf challenges

- Enable benchmarking of AI agents on Vim text editing tasks

- Support both local and online Vimgolf challenges

- Offer customizable challenge creation

- Facilitate reproducible evaluation of Vim editing performance

## Technical Architecture

### Components

vimgolf-gym consists of several key components:

| Component | Description |
| --- | --- |
| Challenge Environment | Vim instance with specific input/output requirements |
| Local Challenge Dataset | Cached Vimgolf challenges stored at ~/.cache/cybergod-vimgolf-challenges/ |
| Docker Execution | Containerized Vim environment for isolation |
| Evaluation System | Keystroke counting and solution verification |

### Challenge Types

The system supports three types of challenges:

| Type | Format | Description |
| --- | --- | --- |
| Test Challenge | "vimgolf-test" | Basic "hello world" challenge |
| Local Challenge | "vimgolf-local-<challenge_id>" | Challenges from local dataset |
| Online Challenge | "vimgolf-online-<challenge_id>" | Challenges from vimgolf.com |
| Custom Challenge | "vimgolf-custom" | User-defined challenges |

## Usage

### Basic Interaction

The environment provides a Python API for interaction:

```python
import vimgolf_gym

1. Create environment

env = vimgolf_gym.make("vimgolf-test")

1. Take actions (Vim commands)

env.act("ihello world\n")

1. Check buffer state

buffer = env.buffer

1. Verify solutions

success = env.verify_keys("ihello world<NL>hello world<Esc>:wq<NL>")

1. Calculate scores

relative_score = env.calculate_relative_inverse_score(score=100)
```

### Custom Challenges

Custom challenges can be defined using YAML format:

```yaml
input: |

   The second line
   The first line

output: |

   The first line
   The second line

name: Swap lines
description: Swap the first and second lines of the input
solution: null
```

### Evaluation Metrics

| Metric | Description | Formula |
| --- | --- | --- |
| Keystroke Score | Raw keystroke count | Lower is better |
| Relative Inverse Score | Performance relative to worst solution | estimated_worst_solution_score / agent_score |
| Success Rate | Binary completion check | Verified output match |

## Installation

vimgolf-gym can be installed via multiple methods:

```bash

1. PyPI installation

pip install vimgolf-gym

1. GitHub installation

pip install git+[https://github.com/james4ever0/vimgolf-gym.git](https://github.com/james4ever0/vimgolf-gym.git)

1. Docker image

docker pull agile4im/cybergod_vimgolf_gym
```

## Features

### Key Capabilities

- Support for local, online, and custom Vimgolf challenges

- Docker-based execution for environment isolation

- Real-time buffer state inspection

- Solution verification and scoring

| Screenshot capture and rendering

- Challenge metadata access

### Data Management

- Local challenge caching

- Worst solution benchmarking

- Challenge definition access

- Solution header parsing

## License

vimgolf-gym is released under **The Unlicense**, a public domain equivalent license.

## References

- VimGolf AI competition info site: [https://vimgolf.netlify.app](https://vimgolf.netlify.app)

- Official GitHub repository: [https://github.com/james4ever0/vimgolf-gym](https://github.com/james4ever0/vimgolf-gym)

- HuggingFace dataset: [https://huggingface.co/datasets/James4Ever0/vimgolf_challenges_and_solutions](https://huggingface.co/datasets/James4Ever0/vimgolf_challenges_and_solutions)

- Docker image: [https://hub.docker.com/r/agile4im/cybergod_vimgolf_gym](https://hub.docker.com/r/agile4im/cybergod_vimgolf_gym)

- PyPI package: [https://pypi.org/project/vimgolf-gym/](https://pypi.org/project/vimgolf-gym/)