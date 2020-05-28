import React, { useState, useCallback, useRef, useEffect } from 'react';
import produce from 'immer';
var _ = require('lodash');

const initialSize = { 
  numRows: 30,
  numCols: 50,
}

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function Grid() {

  const [size, setSize] = useState(initialSize);
  const [running, setrunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [sum, setSum] = useState(0);
  const runningRef = useRef(running);
  runningRef.current = running;
  const timeRef = useRef(300);
  const numRows = 25;
  const numCols = 70;
  const colors = ["#B39BC8", "#F172A1", "#CB2D6F"]

  function initialState() {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  }

  const [grid, setGrid] = useState(initialState);
  
  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      let validGrid = false;
      validGrid = false;
      return produce(g, (gridCopy) => { // g is og, we have have the copy, which we change, and the copy makes changes to our og, 'g'
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => { //looking for live/dead neighbors in every direction
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              validGrid = true;
              gridCopy[i][k] = 1;
            }
          }
        }
        if(validGrid) {
          setGeneration((num) => (num + 1));
        }
        setSum(
          gridCopy.flat().reduce((acc,cv) => {
            return acc + cv
          })
        )
      });
    });
    setTimeout(runSim, timeRef.current);
  }, [timeRef.current]);
  console.log(timeRef.current)
  return (
    <div className = 'container'>
        <div className = 'buttons'>
      <button
        onClick={() => {
          setrunning(!running);
          if (!running) {
            runningRef.current = true;
            runSim();
          }
        }}
      >
        {!runningRef.current ? 'start' : 'stop'}
      </button>
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        Random
      </button>
      <button
        onClick={() => {
          setGrid(initialState);
          setGeneration(0);
          setSum(0);
        }}
      >
        Reset
      </button>
      </div>
      <div className = 'spacer'>

      </div>
      <div className = 'buttons'>
        <button 
        onClick={() =>{
          timeRef.current = 5
        }}>Go Fast</button>
        <button 
        onClick={() =>{
          timeRef.current = 500
        }}>Go Normal</button>
        <button 
        onClick={() =>{
          timeRef.current = 300
        }}>Go Slow</button>
      </div>
      <div className = 'grid'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols},15px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => { //here we have immer producing a copy of the grid to 'dbl buffer'
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{ //live cells
                width: 14,
                height: 15,
                backgroundColor:
                grid[i][k] && sum > 100
                  ? _.sample(colors)
                  : grid[i][k] && sum > 75
                  ? '#CB2D6F'
                  : grid[i][k] && sum > 50
                  ? '#F172A1'
                  : grid[i][k] && sum >= 0
                  ? '#B39BC8'
                  : undefined,
                border: 'solid 1.5px #501F3A',
              }}
            />
          ))
        )}
      </div>
        <p className='info'> Generation: {generation}</p>
        <p className='info'> Polulation: {sum}</p>
    </div>
  );
}
export default Grid;