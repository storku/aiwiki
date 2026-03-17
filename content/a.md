---
title: "A*"
slug: "a"
---A* is a popular[([path finding algorithm]] used for finds parsing using stochastic grammars in [[NLP]]

## Definition

A* is mathematically defined as:

  
    
      
        f
        (
        n
        )
        =
        g
        (
        n
        )
        +
        h
        (
        n
        )
      
    
    {\displaystyle f(n)=g(n)+h(n)}
  
*
n* is the next node, *g(n)* is the cost of the path from the start node to *n* and *h(n)* is a [[heuristic]] function that estimates the cost of the cheapest path from *n* to the goal.

A* terminate a path when the path reached its goal or there is no more place to extend