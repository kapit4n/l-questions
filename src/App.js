import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {
  
  render() {
    const questions = ["what is this", "Who you are with"];
    return (
      <div className="App">
        <Questions questions={questions}></Questions>
      </div>
    );
  }
}

export default App;
