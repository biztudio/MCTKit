import React, { Component } from 'react';
import './App.css';

import {SudokuTag} from './components/sudoku';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SudokuTag mode = "0" level = "3" />
      </div>
    );
  }
}

export default App;
