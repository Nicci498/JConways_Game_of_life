# JConways_Game_of_life
Memorial Project for John Conway's Game Of Life

### Cellular Automata

### Turing Completeness & The Game of Life

It is possible to build a pattern that acts like a finite-state machine connected to two counters. This has the same computational power as a universal Turing machine, so the Game of Life is theoretically as powerful as any computer with unlimited memory and no time constraints; it is Turing complete

### Tech 

#### React
#### Immer
Immer works by writing producers, the produce function takes two arguments, currentState and a producer function. Current state determines the starting point, and the producer tells us what needs to happen to it. The producer function receives one argument, the draft, which is a proxy to the current state you passed in. Any modification you make to the draft will be recorded and used to produce nextState, currentState will be untouched during this process. With Immer, we only need to reason about the changes we want to make relatively to the current state. Without needing to take the effort to actually produce the next state.
> https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3