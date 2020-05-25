import React from 'react';
import './App.css';

import Grid from './Grid.js';
import Bio from './Bio.js';
import Header from './Header.js';
import Pic from './Pic.js';

function App() {

  let showGrid = true;
 
  return (
    <div className = 'app'>
      <Header />
      <div className="top">
        {(!showGrid)?(
        <Pic />
        ):(  
        <Grid />  
        )}
      </div>
      <Bio />
    </div>
  );
}
export default App;

