---
title: "Batch"
slug: "batch"
categories:
  - "Terms"
  - "Machine_learning_terms"
  - "Not_updated"
---*See also: [machine learning terms](/wiki/machine_learning_terms)*
Batch is the set of [examples](/wiki/example) used in one [training](/wiki/training) iteration. The [batch size](/wiki/batch_size) determines the number of examples in a batch. In [machine learning](/wiki/machine_learning), batches are subsets of [data](/index.php?title=Data&action=edit&redlink=1) used for training a [model](/wiki/model). The goal is to break up an expansive [dataset](/wiki/dataset) into smaller, more manageable chunks for easier processing.

During the training process, the model is fed a batch of data, and its [parameters](/index.php?title=Parameters&action=edit&redlink=1) are adjusted to minimize any discrepancy between the predicted output and actual output for that batch. This procedure, known as [backpropagation](/wiki/backpropagation), involves computing gradients of the [loss function](/wiki/loss_function) with respect to model parameters which then serve to update those variables accordingly.

The batch size is the number of examples used in each iteration of the training process. A larger batch size may provide faster progress but requires more memory and may not reach an optimal solution as quickly as desired. On the other hand, smaller batches offer better convergence and generalization rates. Ultimately, selecting a batch size depends on your available hardware as well as the specific problem being tackled.