---
title: "Gym Retro"
slug: "gym_retro"
categories:
  - "Artificial_intelligence"
---Gym Retro is a platform for [Reinforcement Learning](/index.php?title=Reinforcement_Learning&action=edit&redlink=1) ([RL](/wiki/rl)) research on games developed by [OpenAI](/wiki/openai) and released in 2018. It turns retro video games into [Gym](/wiki/gym) environments, using different emulators that support the Libretro API for each system. This makes it easy to add new emulators. A tool to add new games was also made available. [&#91;1&#93;](#cite_note-”1”-1) [&#91;2&#93;](#cite_note-”2”-2) [&#91;3&#93;](#cite_note-”3”-3) The platform was released with over 1,000 games from different developers and publishers like Atari, Sega, Nintendo, and NEC. [&#91;1&#93;](#cite_note-”1”-1)

The initial beta release included 62 Atari 2600 games from the Arcade Learning Environment and 30 Sega genesis games from the SEGA Mega Drive and Genesis Classics Steam Bundle. [&#91;4&#93;](#cite_note-”4”-4)

By using more modern consoles than Atari, RL is improved by expanding the quantity and quality of the games that are available for research. Games like the ones for the Genesis have a higher complexity than the Atari ones since they run on better hardware which allows for a greater range of control inputs and better graphics. (4)

While Gym Retro was inspired by the Retro Learning environment, it is more flexible than it and makes it easier to integrate new games. [&#91;4&#93;](#cite_note-”4”-4) The platform translates games into different RL gym environments by defining a starting state, a reward function, and a done condition. [&#91;3&#93;](#cite_note-”3”-3)

Retro is built upon some of the same ideas as [Universe](/wiki/universe), a platform released by OpenAI in 2016 for RL research but that didn't provide the best results. [&#91;4&#93;](#cite_note-”4”-4)

## Gym Retro and RL research

Like [Universe](/wiki/universe), OpenAI uses Gym Retro for research on RL algorithms for the study of generalization, the ability of an AI agent to solve problems in games with similar concepts but different appearances. [&#91;1&#93;](#cite_note-”1”-1)

The goal of the AI agent is to increase the cumulative rewards based on the goals of the game environment. The agent discovers which actions to take based on which ones yield the most rewards. For this, it is essential to provide a diverse set of environments so that the agent can develop problem-solving skills that can be used in various tasks. Since games have both the complexity and environments for learning developed through experience, they are a great tool for training. [&#91;5&#93;](#cite_note-”5”-5)

## Gym Retro contest

Between April 5th and June 5th of 2018, OpenAI held a contest using the Sonic The Hedgehog™ series of games for SEGA Genesis to have participants create "the best agent for playing custom levels of the Sonic games - without having access to those levels during development." [&#91;6&#93;](#cite_note-”6”-6) It was a way of measuring the ability of an RL algorithm to generalize based on previous experience. This contest used Gym Retro, providing a test for algorithms on previously unseen video game levels. [&#91;4&#93;](#cite_note-”4”-4)

The Retro Contest gave the participants a training set of levels from the Sonic The Hedgehog™ series and OpenAI evaluated the submissions on a [test set](/wiki/test_set) of custom levels created for the contest. [&#91;4&#93;](#cite_note-”4”-4)

OpenAI provided an overview of the contest where participants had to 1) train or script the agent to play Sonic; 2) submit the agent as a Docker container; and then agents received their 3) evaluation on a set of secret test levels; and 5) the agent's score appeared on the leaderboard. [&#91;6&#93;](#cite_note-”6”-6)

### Contest results

Participants tried several approaches but the best results came from tuning or extending existing algorithms like PPO and Rainbow. The top performance after training was 4,692. However, the theoretical maximum was 10,000, indicating there is still room for improvement and that the Sonic benchmark is a good problem for the community to continue to work on. [&#91;7&#93;](#cite_note-”7”-7)

OpenAI had 229 solutions submitted to the leaderboard from 923 registered teams. The research company wrote in its official blog that their "automated evaluation systems conducted a total of 4,448 evaluations of submitted algorithms, corresponding to about 20 submissions per team. The contestants got to see their scores rise on the leaderboard, which was based on a test set of five low-quality levels that we created using a level editor." [&#91;7&#93;](#cite_note-”7”-7)

The first three places were taken by Dharmaraja, mistake, and aborg. [&#91;7&#93;](#cite_note-”7”-7)

## Supported platforms

Gym Retro supports

- Windows 7, 8, 10

- macOS 10.13 (High Sierra), 10.14 (Mojave)

- Linux (manylinux1). [&#91;2&#93;](#cite_note-”2”-2)

The following versions of Python are supported:

- 3.6

- 3.7

- 3.8 [&#91;2&#93;](#cite_note-”2”-2)

OpenAI recommends a CPU with SSSE3 or better.

## Emulated systems

According to the platform's Github, these are the systems that can be emulated:

- Atari
Atari2600 (via Stella)

NEC
- TurboGrafx-16/PC Engine (via Mednafen/Beetle PCE Fast)

Nintendo
- Game Boy/Game Boy Color (via gambatte)

- Game Boy Advance (via mGBA)

- Nintendo Entertainment System (via FCEUmm)

- Super Nintendo Entertainment System (via Snes9x)

Sega
- GameGear (via Genesis Plus GX)

- Genesis/Mega Drive (via Genesis Plus GX)

- Master System (via Genesis Plus GX) [&#91;2&#93;](#cite_note-”2”-2)

## Installation

To install Gym Retro, write the following command on Linux:

- pip3 install gym-retro [&#91;5&#93;](#cite_note-”5”-5)

Alternatively, the following commands can also be used:

- git clone --recursive [https://github.com/openai/retro.git](https://github.com/openai/retro.git) gym-retro

- cd gym-retro

- pip3 install -e . [&#91;8&#93;](#cite_note-”8”-8)

Afterward, to create a Gym environment (using the game Airstriker as an example),

- import retro

- env = retro.make(game='Airstriker-Genesis', record='.' [&#91;5&#93;](#cite_note-”5”-5)

## Adding new games

To add new games, a user has to first integrate a game into Retro Gym by finding a Rom file with the correct extension (e.g. .sfc for the Super Nintendo). Secondly, to install the integration UI which lets the user play the game, creating save states and finding key areas of the game's memory that will help in creating a reward function, a done condition, and other data for the training of the RL agent. After that, it's necessary to configure the rom to create states for Retro Gym environment to load, inspect the rom's memory for points of interest, and finding the address and types of those points. Finally, games on Retro Gym have metadata.json, data.json, scenario.json, and script.lua that need to be created for the game. [&#91;8&#93;](#cite_note-”8”-8)

Roms are not included on the platform but several non-commercial ones are available on the platform for testing purposes. [&#91;2&#93;](#cite_note-”2”-2)

## References

1. ↑ [1.0](#cite_ref-”1”_1-0) [1.1](#cite_ref-”1”_1-1) [1.2](#cite_ref-”1”_1-2)  OpenAI (2018). Gym Retro. OpenAI. [https://openai.com/blog/gym-retro/](https://openai.com/blog/gym-retro/)

2. ↑ [2.0](#cite_ref-”2”_2-0) [2.1](#cite_ref-”2”_2-1) [2.2](#cite_ref-”2”_2-2) [2.3](#cite_ref-”2”_2-3) [2.4](#cite_ref-”2”_2-4)  OpenAI. Retro Games in Gym. Github. [https://github.com/openai/retro#gym-retro](https://github.com/openai/retro#gym-retro)

3. ↑ [3.0](#cite_ref-”3”_3-0) [3.1](#cite_ref-”3”_3-1)  Lobo, MA, Ron, ML and Salvador, MO (2022). Reinforcement learning using the Gym Retro Platform. [https://eprints.ucm.es/id/eprint/74248/1/LLORCA%20RON%2083158_MANUEL_LLORCA_RON_TFG_Aprendizaje_por_refuerzo_en_la_plataforma_Gym_Retro_1398832_680639618.pdf](https://eprints.ucm.es/id/eprint/74248/1/LLORCA%20RON%2083158_MANUEL_LLORCA_RON_TFG_Aprendizaje_por_refuerzo_en_la_plataforma_Gym_Retro_1398832_680639618.pdf)

4. ↑ [4.0](#cite_ref-”4”_4-0) [4.1](#cite_ref-”4”_4-1) [4.2](#cite_ref-”4”_4-2) [4.3](#cite_ref-”4”_4-3) [4.4](#cite_ref-”4”_4-4)  OpenAI (2018). Retro Contest. OpenAI. [https://openai.com/blog/retro-contest/](https://openai.com/blog/retro-contest/)

5. ↑ [5.0](#cite_ref-”5”_5-0) [5.1](#cite_ref-”5”_5-1) [5.2](#cite_ref-”5”_5-2)  Upadhyaya, A (2020). Hands-on guide to creating RL agents using OpenAI Gym Retro. Analytics India Magazine. [https://analyticsindiamag.com/hands-on-guide-reinforcement-learning-openai-gymretro/](https://analyticsindiamag.com/hands-on-guide-reinforcement-learning-openai-gymretro/)

6. ↑ [6.0](#cite_ref-”6”_6-0) [6.1](#cite_ref-”6”_6-1)  OpenAI (2018). OpenAI Retro Contest. Retro Contest. [https://contest.openai.com/2018-1/](https://contest.openai.com/2018-1/)

7. ↑ [7.0](#cite_ref-”7”_7-0) [7.1](#cite_ref-”7”_7-1) [7.2](#cite_ref-”7”_7-2)  OpenAI (2018). Retro contest: results. OpenAI. [https://openai.com/blog/first-retro-contest-retrospective/](https://openai.com/blog/first-retro-contest-retrospective/)

8. ↑ [8.0](#cite_ref-”8”_8-0) [8.1](#cite_ref-”8”_8-1)  AureleanTactics (2018). Integrating new games into Retro Gym. AureleanTactics. [https://medium.com/aureliantactics/integrating-new-games-into-retro-gym-12b237d3ed75](https://medium.com/aureliantactics/integrating-new-games-into-retro-gym-12b237d3ed75)