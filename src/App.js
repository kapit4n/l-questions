import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {

  render() {
    const languages = ["Java", "JavaScript", "TypeScript", "Scala", "Python"];
    const questionsGeneral = [
      { id: 1, r: "What is programming?", type: "w"},
      { id: 2, r: "What is the most interesting thing you have programmed?", type: "w"},
      { id: 3, r: "What is the difference between programming language and framework?", type: "w"},
      { id: 4, r: "What is objects oriented programming?", type: "W"},
      { id: 5, r: "What is the use of a static variable?", type: "y"},
      { id: 6, r: "What is your favorite language?", type: "s", options: languages}
    ];
    
    const questionsReact = [
      { id: 1, r: "What is react js?", type: "w"},
      { id: 2, r: "What is the most interesting thing you have ever done with react?", type: "w"},
      { id: 3, r: "What is the difference between state and props?", type: "w"},
      { id: 4, r: "What is virtual DOM?", type: "W"},
      { id: 5, r: "Do you like to program with react js?", type: "y"},
      { id: 6, r: "When to use react js?", type: "w"}
    ];
    
    const questionsAngular = [
      { id: 1, r: "Have you worked with Angular?", type: "y"},
      { id: 2, r: "What is Angular for you?", type: "w"},
      { id: 3, r: "What is the difference between reactive forms and the ones that are not?", type: "w"},
      { id: 4, r: "What is a router and when should we use it?", type: "w"},
      { id: 5, r: "Have you worked with libraries?", type: "y"},
      { id: 6, r: "When to use a library?", type: "w"},
      { id: 7, r: "Can you work angular with react at the same time?", type: "y"}
    ];

    return (
      <div className="App">
        <Questions questions={[questionsGeneral, questionsAngular, questionsReact].flat(1)} title="Programming questions"></Questions>
      </div>
    );
  }
}

export default App;
