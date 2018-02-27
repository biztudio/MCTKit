import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TestTag from './components/testtag';
import MyTestTag from "./components/classtag";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        < TestTag level = "3" / >
        
        <TestTag level = "5" / >

        < TestTag level = "8" />

        < TestTag level="11" />

        <MyTestTag level="1"/>
      </div>
    );
  }
}

export default App;
