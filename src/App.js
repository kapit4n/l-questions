import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: { "1": "Init" } };
    this.changeDataEvent = this.changeDataEvent.bind(this);
    this.saveQuestions = this.saveQuestions.bind(this);
    this.openModal = this.openModal.bind(this);

  }

  changeData(key, value) {
    console.log(this.state);
    this.setState({
      data: Object.assign(this.state.data, { [key]: value })
    });
  }

  changeDataEvent(event, question) {
    console.log(event.target.value);
    console.log(question.id);
    this.changeData(question.id, event.target.value);
  }

  saveQuestions() {
    console.log(this.state.data);
  }

  openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  }

  render() {
    const languages = ["Java", "JavaScript", "TypeScript", "Scala", "Python"];
    const questionsGeneral = [
      { id: 1, r: "What is programming?", type: "w" },
      { id: 2, r: "What is the most interesting thing you have programmed?", type: "w" },
      { id: 3, r: "What is the difference between programming language and framework?", type: "w" },
      { id: 4, r: "What is objects oriented programming?", type: "W" },
      { id: 5, r: "What is the use of a static variable?", type: "y" },
      { id: 6, r: "What is your favorite language?", type: "s", options: languages }
    ];

    const questionsReact = [
      { id: 7, r: "What is react js?", type: "w" },
      { id: 8, r: "What is the most interesting thing you have ever done with react?", type: "w" },
      { id: 9, r: "What is the difference between state and props?", type: "w" },
      { id: 10, r: "What is virtual DOM?", type: "W" },
      { id: 11, r: "Do you like to program with react js?", type: "y" },
      { id: 12, r: "When to use react js?", type: "w" }
    ];

    const questionsAngular = [
      { id: 13, r: "Have you worked with Angular?", type: "y" },
      { id: 14, r: "What is Angular for you?", type: "w" },
      { id: 15, r: "What is the difference between reactive forms and the ones that are not?", type: "w" },
      { id: 16, r: "What is a router and when should we use it?", type: "w" },
      { id: 17, r: "Have you worked with libraries?", type: "y" },
      { id: 18, r: "When to use a library?", type: "w" },
      { id: 19, r: "Can you work angular with react at the same time?", type: "y" }
    ];

    return (
      <div className="App">
        <Questions openModal={this.openModal} saveQuestions={this.saveQuestions} changeDataEvent={this.changeDataEvent} questions={[questionsGeneral, questionsAngular, questionsReact].flat(1)} title="Programming questions"></Questions>
      </div>
    );
  }
}

export default App;
