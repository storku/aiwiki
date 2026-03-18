---
title: "Gym"
slug: "gym"
---*  
Figure 1: OpenAI Gym agent-environment. Source: Velotio Perspectives.
Gym is a standard API for developing and testing learning agents developed by [OpenAI](/wiki/openai), originally built to accelerate the company's [reinforcement learning](/wiki/reinforcement_learning) ([RL](/wiki/rl)) research. While it has been developed for RL, other deep learning approaches can be used. [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3) Open AI Gym has a simple interface, pythonic, capable of representing general RL problems, a diverse collection of environments and a site to compare and reproduce results of different RL algorithms. It is also compatible with algorithms written in other frameworks like Google's [Tensorflow](/index.php?title=Tensorflow&action=edit&redlink=1) or University of Montreal's [Theano](/index.php?title=Theano&action=edit&redlink=1). The beta version was released in 2016. [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3)

The toolkit provides an environment and agent arrangement, meaning that there is an agent that can execute actions in an environment. The agent then receives an observation and reward derived from the particular action executed (figure 1). [&#91;4&#93;](#cite_note-”4”-4)

The environments are virtual spaces where algorithms are tested. OpenAI Gym allows researchers to build algorithms and test them, obtaining feedback relative to an objective test where they can make adjustments and publish their benchmarks for community review. [&#91;5&#93;](#cite_note-”5”-5)

The algorithms shared with the community are promoted according to those that can generalize well and not through leaderboards based on top scoring algorithms. The versatility in being able to complete other similar tasks is a step towards generalization, considered as the main problem for [AI](/wiki/ai) to achieve human level intelligence. According to OpenAI Gym documentation, "It’s not just about maximizing score; it’s about finding solutions which will generalize well. Solutions which involve task-specific hardcoding or otherwise don’t reveal interesting characteristics of learning algorithms are unlikely to pass review." [&#91;3&#93;](#cite_note-”3”-3) [&#91;5&#93;](#cite_note-”5”-5)

## Using OpenAI Gym

Gym can be used to:

1. Learn RL algorithms;

2. Test new ideas for learning agents;

3. Train an agent on cases without modeling in reality;

4. Increase the rate of learning. [&#91;1&#93;](#cite_note-”1”-1)

## Integrations with OpenAI Gym

### Isaac

In 2017, Nvidia announced Isaac. This system uses RL to train robots in virtual environments and employs the OpenAI Gym. [&#91;6&#93;](#cite_note-”6”-6)

### Roboschool

Developed by OpenAI and released in 2017, [Roboschool](/index.php?title=Roboschool&action=edit&redlink=1) is an open-source software for robot simulation that is integrated with OpenAI Gym. [&#91;7&#93;](#cite_note-”7”-7)(7) It expands the Gym's environments library for controlling robots in simulation and also eases the process of training multiple agents together in the same environment. [&#91;8&#93;](#cite_note-”8”-8)

### Gym Retro

[Gym Retro](/wiki/gym_retro) is a platform for RL research on games. The full version was released in 2018 and increased the released games on the platform to over 1,000 while also providing the tool used to add new games to it. [&#91;9&#93;](#cite_note-”9”-9)

OpenAI's uses Gym Retro for research on RL algorithms and generalization since it provides the ability to generalize between games with the same concepts but divergent appearances instead of focusing on the agent's optimization to solve a single task. [&#91;9&#93;](#cite_note-”9”-9)

### Safety Gym

[Safety Gym](/index.php?title=Safety_Gym&action=edit&redlink=1) is a set of environments and tools released in 2019 by OpenAI to accelerate the study of constrained RL for safe exploration [&#91;10&#93;](#cite_note-”10”-10) [&#91;11&#93;](#cite_note-”11”-11). These environments are richer, featuring an increased range of difficulty when compared to other environments for constrained RL. [&#91;10&#93;](#cite_note-”10”-10) According to Ray et al. (2019), "Safety Gym includes a benchmark suite of 18 high-dimensional continuous control environments for safe exploration, plus 9 additional environments for debugging task performance separately from safety requirements, and tools for building additional environments." [&#91;11&#93;](#cite_note-”11”-11)

The two main component of Safety Gym are 1) an environment-builder, allowing the creation of new environments by mixing a variety of physics elements, goals and safety requirements; and 2) pre-configured benchmark environments that help standardize the progress measurement on the safe exploration problem. [&#91;11&#93;](#cite_note-”11”-11)

## Reinforcement Learning

OpenAI Gym centers around reinforcement learning, a subfield of machine learning focused on decision making and motor control. According to OpenAI, it studies "how an agent can learn to achieve goals in a complex, uncertain environment." [&#91;3&#93;](#cite_note-”3”-3) [&#91;5&#93;](#cite_note-”5”-5) When an agent performs well, a reward is given. When it fails, due to the absence of reward, the algorithm with try an alternative. This technique has had good results with robots and video games. [&#91;5&#93;](#cite_note-”5”-5)

RL is not a fully matured technology but it has gained in importance for developing highly-capable [AI](/wiki/ai) systems. It has been used in competitive strategy games like Go and Dota, achieving superhuman performance. On the robotics fields, it has been used to control highly-complex systems and on social media to improve the content presented to users. [&#91;11&#93;](#cite_note-”11”-11)

One advantage of RL is that it is very general, able to be applied to "supervised learning problems with sequential or structured outputs." Also, RL algorithms have achieved good results in difficult environments by using deep RL algorithms that do not make many assumptions about their environment. This way they can be applied to other settings. [&#91;11&#93;](#cite_note-”11”-11)

## Requirements and installation

OpenAI Gym requires Phyton 3.5+ and pip.

### Installation

- pip install gym

To install it from source:

- git clone [https://github.com/openai/gym](https://github.com/openai/gym) && cd gym

- pip install -e [&#91;11&#93;](#cite_note-”11”-11) [&#91;12&#93;](#cite_note-”12”-12)

## Environments

There are various environments available in OpenAI Gym, differing in difficulty.

- Classic control and toy text

- Algorithmic

- Atari

- Board Games

- 2D and 3D robots

To create an environment, first import Gym and then create the environment:

- import gym

- env = gym.make('MountainCar-v0') [&#91;1&#93;](#cite_note-”1”-1)

Four values are returned by the environment for every action taken by the agent:

1. Observation: an environment-specific object representing the observation of the environment;

2. Reward: the reward/score achieved by the last action. The goal is to maximize the reward;

3. Done: whether the episode has ended. Then, the environment may need to be reset;

4. Info: information about the environment or diagnostic information for debugging. [&#91;1&#93;](#cite_note-”1”-1) [&#91;4&#93;](#cite_note-”4”-4) [&#91;12&#93;](#cite_note-”12”-12)

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2) [1.3](#cite_ref-”1”_1-3) Sonawane, B (2018) Getting started with OpenAI Gym. Towards Data Science*. [https://towardsdatascience.com/getting-started-with-openai-gym-d2ac911f5cbc](https://towardsdatascience.com/getting-started-with-openai-gym-d2ac911f5cbc)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1) Gym Documentation. Gym is a standard API for reinforcement learning, and a diverse collection of reference environments​​​​​​​. *Gym Documentation*. [https://www.gymlibrary.dev/](https://www.gymlibrary.dev/)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1) [3.2](#cite_ref-”3”_3-2) [3.3](#cite_ref-”3”_3-3) OpenAI (2016). OpenAI Gym beta. *OpenAI*. [https://openai.com/blog/openai-gym-beta/](https://openai.com/blog/openai-gym-beta/)

4. ↑ [4.0](#cite_ref-”4”_4-0) [4.1](#cite_ref-”4”_4-1) Velotio Technologies (2019). Exploring OpenAi Gym: a platform for reinforcement learning algorithms. *Velotio Technologies*. [https://medium.com/velotio-perspectives/exploring-openai-gym-a-platform-for-reinforcement-learning-algorithms-380beef446dc](https://medium.com/velotio-perspectives/exploring-openai-gym-a-platform-for-reinforcement-learning-algorithms-380beef446dc)

5. ↑ [5.0](#cite_ref-”5”_5-0) [5.1](#cite_ref-”5”_5-1) [5.2](#cite_ref-”5”_5-2) [5.3](#cite_ref-”5”_5-3) Gershgorn, D (2016). Elon Musk's artificial intelligence group opens a 'Gym' to train A.I. *Popular Science*. [https://www.popsci.com/elon-musks-artificial-intelligence-group-opens-gym-to-train-ai/](https://www.popsci.com/elon-musks-artificial-intelligence-group-opens-gym-to-train-ai/)

6. [↑](#cite_ref-”6”_6-0) Wiltz, C (2017). When you train robots with VR, you only have to teach them once. *DesignNews*. [https://www.designnews.com/automation-motion-control/when-you-train-robots-vr-you-only-have-teach-them-once](https://www.designnews.com/automation-motion-control/when-you-train-robots-vr-you-only-have-teach-them-once)

7. [↑](#cite_ref-”7”_7-0) Houser, K (2017). Elon Musk just unveiled breakthrough AI research. Here's what you need to know. *Futurism*. [https://futurism.com/elon-musk-just-unveiled-breakthrough-ai-research-heres-what-your-need-to-know](https://futurism.com/elon-musk-just-unveiled-breakthrough-ai-research-heres-what-your-need-to-know)

8. [↑](#cite_ref-”8”_8-0) OpenAI (2017). Roboschool. *OpenAI*. [https://openai.com/blog/roboschool/](https://openai.com/blog/roboschool/)

9. ↑ [9.0](#cite_ref-”9”_9-0) [9.1](#cite_ref-”9”_9-1) OpenAI (2018). Gym Retro. *OpenAI*. [https://openai.com/blog/gym-retro/](https://openai.com/blog/gym-retro/)

10. ↑ [10.0](#cite_ref-”10”_10-0) [10.1](#cite_ref-”10”_10-1) OpenAI (2019). Safety Gym. *OpenAI*. [https://openai.com/blog/safety-gym/](https://openai.com/blog/safety-gym/)

11. ↑ [11.0](#cite_ref-”11”_11-0) [11.1](#cite_ref-”11”_11-1) [11.2](#cite_ref-”11”_11-2) [11.3](#cite_ref-”11”_11-3) [11.4](#cite_ref-”11”_11-4) [11.5](#cite_ref-”11”_11-5) Ray, A, Achiam, J and Amodei, D (2019) Benchmarking safe exploration in deep reinforcement learning. [https://cdn.openai.com/safexp-short.pdf](https://cdn.openai.com/safexp-short.pdf)

12. ↑ [12.0](#cite_ref-”12”_12-0) [12.1](#cite_ref-”12”_12-1) Kathuria, A (2020). Getting started with OpenAI Gym: the basic building blocks. *Paperspace Blog*. [https://blog.paperspace.com/getting-started-with-openai-gym/](https://blog.paperspace.com/getting-started-with-openai-gym/)