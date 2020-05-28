# JConways_Game_of_life
Memorial Project for John Conway's Game Of Life

### Cellular Automata, Turing Completeness, & The Game of Life

A cellular automaton is a discrete model studied in automata theory. Cellular automata are also called cellular spaces, tessellation automata, homogeneous structures, cellular structures, tessellation structures, and iterative arrays.s

In the 1980s, Stephen Wolfram engaged in a systematic study of one-dimensional cellular automata, or what he calls elementary cellular automata; his research assistant Matthew Cook showed that one of these rules is Turing-complete. Wolfram published A New Kind of Science in 2002, claiming that cellular automata have applications in many fields of science. These include computer processors and cryptography.

 The primary classifications of cellular automata, as outlined by Wolfram, are numbered one to four. They are, in order, automata in which patterns generally stabilize into homogeneity, automata in which patterns evolve into mostly stable or oscillating structures, automata in which patterns evolve in a seemingly chaotic fashion, and automata in which patterns become extremely complex and may last for a long time, with stable local structures. This last class are thought to be computationally universal, or capable of simulating a Turing machine. 

> https://en.wikipedia.org/wiki/Cellular_automaton


It is possible to build a pattern that acts like a finite-state machine connected to two counters. This has the same computational power as a universal Turing machine, so the Game of Life is theoretically as powerful as any computer with unlimited memory and no time constraints; it is Turing complete

### Tech 

#### React
#### Immer
https://github.com/immerjs/immer

Immer works by writing producers, the produce function takes two arguments, currentState and a producer function. Current state determines the starting point, and the producer tells us what needs to happen to it. The producer function receives one argument, the draft, which is a proxy to the current state you passed in. Any modification you make to the draft will be recorded and used to produce nextState, currentState will be untouched during this process. With Immer, we only need to reason about the changes we want to make relatively to the current state. Without needing to take the effort to actually produce the next state.
> https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3