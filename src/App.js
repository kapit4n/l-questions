import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions></Questions>
      </div>
    );
  }
}

export default App;
