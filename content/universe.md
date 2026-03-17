---
title: "Universe"
slug: "universe"
categories:
  - "Artificial_intelligence"
---Universe is an open-source software platform developed by [OpenAI](/wiki/openai) for measuring and training an [artificial intelligence](/wiki/artificial_intelligence) ([AI](/wiki/ai)) general intelligence, also called [strong AI](/index.php?title=Strong_AI&action=edit&redlink=1). [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3) It's a middleware program that supports [OpenAI](/wiki/openai)'s [Gym](/wiki/gym), a toolkit for the development and evaluation of [reinforment learning](/index.php?title=Reinforment_learning&action=edit&redlink=1) ([RL](/wiki/rl)) algorithms. [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3) Games and websites are used to train the AI. Indeed, any task that a person can solve on a computer is theoretically a viable option for training, with researchers being able to plug any application into Universe so AI agents have a common way of interacting with the applications. [&#91;2&#93;](#cite_note-”2”-2) [&#91;4&#93;](#cite_note-”4”-4)

The software environments are instantiated in Docker containers. This way, AI agents are provided with challenges that are interacted with through a virtual keyboard and mouse input using a Virtual Network Computing (VNC) remote desktop. The more interaction the agents have with the environment, the better they become at a specific task. [&#91;3&#93;](#cite_note-”3”-3)

OpenAI gave an example of a game used to train AI through RL, describing an agent playing Slither, a game in which the player has to avoid collision against multiple snakes. After six days of training time, the agent scored "an average of 1,000 points, with a high score of 9,300 points. As a point of comparison, OpenAI machine-learning researcher Rafal Jozefowicz, with five hours of playing experience, averaged about 1,400 points, with a high score of 7,050." [&#91;3&#93;](#cite_note-”3”-3)

Universe has been compared to projects like ImageNet, a massive database of hand-labeled sets of images that has been used by researchers to test image recognition systems. In OpenAI's Universe, images are substituted by flash games, web browsers, photo editors, and CAD software. [&#91;5&#93;](#cite_note-”5”-5)

On release, there were 2500 Atari games, 1000 flash games, and 80 browser environments available. [&#91;5&#93;](#cite_note-”5”-5)

However, this project seems to have been abandoned by OpenAI in favor of [Gym Retro](/wiki/gym_retro). Several of the upcoming developments that were posted in their blog regarding the Universe launch were never released. This included environment integration tools, so any user could contribute with new environment integrations and the public release of human demonstration data on Universe environments. [&#91;6&#93;](#cite_note-”6”-6)

## Objective

According to OpenAI, the goal of the project was to "develop a single AI agent that can flexibly apply its past experience on Universe environments to quickly master unfamiliar, difficult environments, which would be a major step towards general intelligence," something similar to human brain power. According to Ilya Sutskever, an OpenAI researcher, "an AI should be able to solve any problem you throw at it." [&#91;1&#93;](#cite_note-”1”-1) [&#91;4&#93;](#cite_note-”4”-4)

By expanding the number of training resources, it was expected that the education of AI agents would accelerate. Indeed, before the release of OpenAI's platform, the largest RL resource was the Atari Learning Environment which included 55 games. [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3)

On the contrary, Universe released with the largest library of games and resources ever. These included 1,000 flash games, distributed in Docker image, games like slither.io and Starcraft, browser-based tasks and applications like form filling and fold.it. [&#91;1&#93;](#cite_note-”1”-1) [&#91;7&#93;](#cite_note-”7”-7)According to OpenAI, Flash games were a starting point for scaling the platform because they are pervasive on the internet, usually with better graphics than Atari games but are still simple. [&#91;1&#93;](#cite_note-”1”-1)

OpenAI also mentioned that with the environments running asynchronously inside the Docker image with a local network in the cloud, the games usually ran at 60 fps while over public internet this dropped to 20 fps. [&#91;1&#93;](#cite_note-”1”-1)

## Functionality

Universe allows a user to train and evaluate AI agents, with the AI using a computer like a human would. This provides a wide range of real-time and complex environments. [&#91;1&#93;](#cite_note-”1”-1) This platform permits any program to become an [OpenAI Gym](/wiki/openai_gym) environment easily, without needing special access to the program's internal, source code, or APIs. According to OpenAI's Github, it "does this by packaging the program into a Docker container, and presenting the AI with the same interface a human uses: sending keyboard and mouse events, and receiving screen pixels." [&#91;7&#93;](#cite_note-”7”-7) [&#91;8&#93;](#cite_note-”8”-8)

The AI agent explores different environments visually, observing pixels on a screen and inputting keyboard and mouse commands. [&#91;1&#93;](#cite_note-”1”-1)  [&#91;2&#93;](#cite_note-”2”-2)This interface is implemented using the VNC program for remote desktop access. [&#91;2&#93;](#cite_note-”2”-2)

Games in the Universe platform provide the feedback loop necessary for the constant improvement of AI skills, gathering experience in small tasks and resolving new ones faster. [&#91;2&#93;](#cite_note-”2”-2) Ideally, the agent would surpass its specialized knowledge of a specific environment, aiming at a more generalized intelligence that contributes to the resolution of different kinds of problems. [&#91;7&#93;](#cite_note-”7”-7) [&#91;8&#93;](#cite_note-”8”-8) Reward functions are Integral to this, necessary for RL. In many games, there's an on-screen score that can be used as a reward. [&#91;8&#93;](#cite_note-”8”-8)

Besides the game environments, Universe includes browser-based navigation where the agent can interact with the web like people do, learning how to use elements like buttons, lists, and sliders. [&#91;1&#93;](#cite_note-”1”-1) OpenAI developed a benchmark called Mini World of Bits to understand the challenges of browser interactions in a simplified setting. Consisting of 80 environments that range from simple tasks like clicking a specific button to difficult ones like replying to a contact in a simulated email client, OpenAI believes "that mastering these environments provides valuable signal towards models and training techniques that will perform well on full websites and more complex tasks." [&#91;1&#93;](#cite_note-”1”-1) [&#91;5&#93;](#cite_note-”5”-5)

## Properties

During the implementation of this platform, OpenAI had as important properties:

1. Generalization, in which an AI agent can use the interface designed for humans to interact with programs, allowing it to browse the web, play games, interact with a terminal, edit spreadsheets or even operate a photo editing program;

2. Familiarity, since the agents interact with the environments in a way that is usual for humans;

3. VNC as standard, since many implementations of VNC are available online, allowing humans to give demonstrations without installing new software;

4. Easily debugged, the VNC traffic can be saved for analysis and an agent can be observed while in training or being evaluated. [&#91;1&#93;](#cite_note-”1”-1)

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2) [1.3](#cite_ref-”1”_1-3) [1.4](#cite_ref-”1”_1-4) [1.5](#cite_ref-”1”_1-5) [1.6](#cite_ref-”1”_1-6) [1.7](#cite_ref-”1”_1-7) [1.8](#cite_ref-”1”_1-8) [1.9](#cite_ref-”1”_1-9)  OpenAI (2016). Universe. OpenAI. [https://openai.com/blog/universe/](https://openai.com/blog/universe/)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1) [2.2](#cite_ref-”2”_2-2) [2.3](#cite_ref-”2”_2-3) [2.4](#cite_ref-”2”_2-4) [2.5](#cite_ref-”2”_2-5) [2.6](#cite_ref-”2”_2-6)  Sudonull. OpenAI Universe. Open platform for training strong AI. Sudonull. [https://sudonull.com/post/21544-OpenAI-Universe-Open-platform-for-training-strong-AI](https://sudonull.com/post/21544-OpenAI-Universe-Open-platform-for-training-strong-AI)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1) [3.2](#cite_ref-”3”_3-2) [3.3](#cite_ref-”3”_3-3) [3.4](#cite_ref-”3”_3-4)  Claburn, T (2016). Elon Musk-backed OpenAi reveals Universe - a universal training ground for computers. The Register. [https://www.theregister.com/2016/12/05/openai_universe_reinforcement_learning/](https://www.theregister.com/2016/12/05/openai_universe_reinforcement_learning/)

4. ↑ [4.0](#cite_ref-”4”_4-0) [4.1](#cite_ref-”4”_4-1)  Metz, C (2016). In OpenAI's Universe, computers learn to use apps like humans do. Wired. [https://www.wired.com/2016/12/openais-universe-computers-learn-use-apps-like-humans/](https://www.wired.com/2016/12/openais-universe-computers-learn-use-apps-like-humans/)

5. ↑ [5.0](#cite_ref-”5”_5-0) [5.1](#cite_ref-”5”_5-1) [5.2](#cite_ref-”5”_5-2)  Mannes, J (2016). OpenAI's Universe is the fun parent every artificial intelligence deserves. TechCrunch. [https://techcrunch.com/2016/12/05/openais-universe-is-the-fun-parent-every-artificial-intelligence-deserves/](https://techcrunch.com/2016/12/05/openais-universe-is-the-fun-parent-every-artificial-intelligence-deserves/)

6. [↑](#cite_ref-”6”_6-0)  Unixpickle (2017). Why I'm remaking OpenAI Universe. Pickled ML. [https://blog.aqnichol.com/2017/06/11/why-im-remaking-openai-universe/](https://blog.aqnichol.com/2017/06/11/why-im-remaking-openai-universe/)

7. ↑ [7.0](#cite_ref-”7”_7-0) [7.1](#cite_ref-”7”_7-1) [7.2](#cite_ref-”7”_7-2)  Hanley, S (2016). Musk's OpenAI will train artificial intelligence through video game 'Universe'. Teslarati. [https://www.teslarati.com/openai-debuts-universe-training-environment/](https://www.teslarati.com/openai-debuts-universe-training-environment/)

8. ↑ [8.0](#cite_ref-”8”_8-0) [8.1](#cite_ref-”8”_8-1) [8.2](#cite_ref-”8”_8-2)  OpenAI. Universe. Github. [https://github.com/openai/universe](https://github.com/openai/universe)