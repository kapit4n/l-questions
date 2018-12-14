import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {

  render() {
    const questions = ["What is programming for you?",
      "How many languages you can handle?",
      "What is your favorite language",
      "What is the diference between angular and react js"];
    return (
      <div className="App">
        <Questions questions={questions} title="Programming questions"></Questions>
      </div>
    );
  }
}

export default App;
