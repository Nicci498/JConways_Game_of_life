import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';


const numRows = 30;
const numCols = 50;
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
function initialState() {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
}
function Grid() {
  const [grid, setGrid] = useState(initialState);
  const [running, setrunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;
  const runSim = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    setTimeout(runSim, 300);
  }, []);
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
        }}
      >
        Clear
      </button>
      </div>
      <div className = 'spacer'>

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
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 14,
                height: 15,
                backgroundColor: grid[i][k] ? '#CB2D6F' : undefined,
                border: 'solid 1.5px #501F3A',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default Grid;