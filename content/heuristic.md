---
title: "Heuristic"
slug: "heuristic"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Definition of Heuristic

Heuristics, derived from the Greek word *heuriskein* which means "to discover," are problem-solving techniques that employ a practical approach to finding an adequate, though not always optimal, solution to complex problems. In [machine learning](/wiki/machine_learning), heuristics are often utilized to guide the search for an appropriate model or to optimize algorithmic parameters when an exhaustive search is computationally infeasible.

## Heuristic Methods in Machine Learning

### Heuristic Search

Heuristic search is a technique that uses heuristic functions to guide the search process in the space of possible solutions. In machine learning, heuristic search can be applied in areas such as [feature selection](/index.php?title=Feature_selection&action=edit&redlink=1), [hyperparameter tuning](/index.php?title=Hyperparameter_tuning&action=edit&redlink=1), and model selection. The most common heuristic search algorithms include:

- [Genetic algorithms](/index.php?title=Genetic_algorithms&action=edit&redlink=1): Inspired by the process of natural selection, genetic algorithms encode solutions as "chromosomes" and apply genetic operations such as crossover, mutation, and selection to evolve better solutions over generations.

- [Simulated annealing](/index.php?title=Simulated_annealing&action=edit&redlink=1): This optimization method mimics the annealing process in metallurgy, where a material is heated and then cooled slowly to reach a low-energy state. In the context of optimization, simulated annealing probabilistically accepts inferior solutions to escape local minima, eventually converging to a global minimum as the "temperature" decreases.

- [Tabu search](/index.php?title=Tabu_search&action=edit&redlink=1): This method maintains a list of recently visited solutions, called the "tabu list," to avoid cycling and promote exploration in the solution space. The search process iteratively moves to the best non-tabu solution in the neighborhood, updating the tabu list accordingly.

### Heuristic Evaluation Functions

A heuristic evaluation function, also known as a heuristic function, estimates the quality or desirability of a particular solution without exhaustively exploring all possible outcomes. In machine learning, heuristic evaluation functions are used to rank candidate solutions, enabling algorithms to prioritize exploration or exploitation as appropriate. Examples of heuristic evaluation functions include:

- [A* search algorithm](/index.php?title=A*_search_algorithm&action=edit&redlink=1): A* is an informed search algorithm that uses a heuristic function to estimate the cost to reach the goal from a given node, guiding the search towards the most promising paths.

- Admissible heuristics: These are heuristic functions that never overestimate the actual cost to reach the goal. Admissible heuristics are particularly useful in [graph search](/index.php?title=Graph_search&action=edit&redlink=1) algorithms and can guarantee finding an optimal solution if certain conditions are met.

## Explain Like I'm 5 (ELI5)

Imagine you have a big bag of differently shaped puzzle pieces and you need to find the best piece to fit in a specific spot on the puzzle board. Looking at each piece one by one could take a very long time, especially if there are thousands of pieces. Instead, you can use a "shortcut" to find a piece that's "good enough" to fit the spot without having to check every single piece. This "shortcut" is like a heuristic in machine learning.

In machine learning, we use heuristics to help us solve problems more quickly. We can use different methods, like guessing which piece might fit based on its shape, to find a solution that works well enough without having to try every possibility. This can save a lot of time and effort and still give us a good result.