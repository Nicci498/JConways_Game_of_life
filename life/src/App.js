import React from 'react';
import './App.css';

import Grid from './Grid.js';
import Bio from './Bio.js';
import Header from './Header.js';
import Pic from './Pic.js';

function App() {

 
  return (
    <div className = 'app'>
      <Header />
      <Grid />  
      <Bio />
    </div>
  );
}
export default App;

