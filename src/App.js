import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {

  render() {
    const questions = [
      { id: 1, r: "What is programming for you?", type: "w"},
      { id: 2, r: "Do you like to program on javascript?", type: "y"},
      { id: 2, r: "What is your favorite language?", type: "s", options: ["Java", "JavaScript"]}
    ];
    return (
      <div className="App">
        <Questions questions={questions} title="Programming questions"></Questions>
      </div>
    );
  }
}

export default App;
