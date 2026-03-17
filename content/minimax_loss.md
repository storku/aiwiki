---
title: "Minimax loss"
slug: "minimax_loss"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_Edited"
  - "Updated"
---*See also: [Machine learning terms](/wiki/machine_learning_terms)*

## Minimax Loss

The minimax loss, also known as the minimax regret, is a performance measure in [machine learning](/wiki/machine_learning) and [game theory](/index.php?title=Game_theory&action=edit&redlink=1) that quantifies the worst-case performance of an algorithm or decision rule under uncertainty. This concept is utilized in various optimization problems, where the goal is to minimize the maximum possible loss or regret under uncertain conditions.

### Definition

Given a decision-making problem, the minimax loss is defined as the highest possible loss incurred by an algorithm or decision rule over all possible scenarios. Formally, for a decision rule *d* and a set of scenarios *S*, the minimax loss is:

*L(d) = max {L(d, s) | s ∈ S}*
where *L(d, s)* represents the loss or regret associated with choosing decision rule *d* in scenario *s*.

### Minimax Loss in Machine Learning

In the context of machine learning, the minimax loss is often used as a performance metric in the design of [learning algorithms](/index.php?title=Learning_algorithms&action=edit&redlink=1) and [model selection](/index.php?title=Model_selection&action=edit&redlink=1). The minimax loss criterion is particularly relevant when facing adversarial or worst-case scenarios, where an algorithm's performance can be significantly degraded by carefully designed inputs or noise.

Some machine learning techniques, such as [support vector machines](/index.php?title=Support_vector_machines&action=edit&redlink=1) (SVMs) and [adversarial training](/index.php?title=Adversarial_training&action=edit&redlink=1), explicitly incorporate the minimax loss in their formulations to enhance the robustness of the learned models. By minimizing the maximum possible loss, these methods strive to achieve better generalization performance and resist potential attacks or input perturbations.

## Explain Like I'm 5 (ELI5)

Imagine you're playing a game of tic-tac-toe, and you want to make sure you don't lose. To do this, you think about the worst move your opponent could make after each of your moves, and then you choose the move that would give you the least amount of trouble if your opponent plays their best. That's what minimax loss is like in machine learning. It's a way to make sure that your machine learning model performs well, even when faced with difficult situations or tricky inputs.