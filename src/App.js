import React, { Component } from 'react';
import './App.css';
import Questions from './comp/Questions'

class App extends Component {

  languages = ["Java", "JavaScript", "TypeScript", "Scala", "Python"];
  questionsGeneral = [
    { id: 1, r: "What is programming?", type: "w" },
    { id: 2, r: "What is the most interesting thing you have programmed?", type: "w" },
    { id: 3, r: "What is the difference between programming language and framework?", type: "w" }
  ];

  questionsGeneralBackup = [
    { id: 1, r: "What is programming?", type: "w" },
    { id: 2, r: "What is the most interesting thing you have programmed?", type: "w" },
    { id: 3, r: "What is the difference between programming language and framework?", type: "w" },
    { id: 4, r: "What is objects oriented programming?", type: "W" },
    { id: 5, r: "What is the use of a static variable?", type: "y" },
    { id: 6, r: "What is your favorite language?", type: "s", options: this.languages },
    { id: 7, r: "What is react js?", type: "w" },
    { id: 8, r: "What is the most interesting thing you have ever done with react?", type: "w" },
    { id: 9, r: "What is the difference between state and props?", type: "w" },
    { id: 10, r: "What is virtual DOM?", type: "W" },
    { id: 11, r: "Do you like to program with react js?", type: "y" },
    { id: 12, r: "When to use react js?", type: "w" },
    { id: 13, r: "Have you worked with Angular?", type: "y" },
    { id: 14, r: "What is Angular for you?", type: "w" },
    { id: 15, r: "What is the difference between reactive forms and the ones that are not?", type: "w" },
    { id: 16, r: "What is a router and when should we use it?", type: "w" },
    { id: 17, r: "Have you worked with libraries?", type: "y" },
    { id: 18, r: "When to use a library?", type: "w" },
    { id: 19, r: "Can you work angular with react at the same time?", type: "y" }
  ];

  constructor(props) {
    super(props);
    this.state = { data: { "1": "Init" }, questions: this.questionsGeneral, newQuestion: "", newQuestionType: "" };
    this.changeDataEvent = this.changeDataEvent.bind(this);
    this.saveQuestions = this.saveQuestions.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
    this.openModal = this.openModal.bind(this);
    this.newQuestionChange = this.newQuestionChange.bind(this);
    this.newQuestionTypeChange = this.newQuestionTypeChange.bind(this);
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

  newQuestionChange(event) {
    this.setState({ newQuestion: event.target.value });
  }

  newQuestionTypeChange(event) {
    console.log(event.target);
    this.setState({ newQuestionType: event.target.value });
  }

  saveQuestions() {
    console.log(this.state.data);
  }

  openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  saveQuestion() {
    console.log(this.state.newQuestionType);
    console.log(this.state.newQuestion);

    this.questionsGeneral.push({ id: this.questionsGeneral.length + 1, type: this.state.newQuestionType, r: this.state.newQuestion });
    this.setState({ questions: this.questionsGeneral });
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  render() {
    return (
      <div className="App">
        <Questions openModal={this.openModal} saveQuestion={this.saveQuestion}
          saveQuestions={this.saveQuestions} changeDataEvent={this.changeDataEvent}
          questions={this.state.questions} title="Programming questions"
          newQuestionChange={this.newQuestionChange} newQuestionTypeChange={this.newQuestionTypeChange}
        ></Questions>
      </div>
    );
  }
}

export default App;
