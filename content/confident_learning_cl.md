---
title: "Confident Learning (CL)"
slug: "confident_learning_cl"
---## Introduction

Confident Learning (CL) is a subfield of [supervised learning](/wiki/supervised_learning) and [weak-supervision](/index.php?title=Weak-supervision&action=edit&redlink=1) aimed at characterizing [label](/wiki/label) [noise](/wiki/noise), finding label errors, learning with noisy labels and finding ontological issues. CL is based on the principles of pruning noisy data, counting to estimate noise and ranking examples to train with confidence. CL generalizes Angluin and Laird's classification noise process to directly estimate the joint distribution between given and unknown labels. CL requires two inputs: out-of-sample predicted probabilities; and noisy labels. The three steps for weak supervision using CL are: estimating the joint distribution; pruning noisy examples; and re-weighting examples by estimated prior.