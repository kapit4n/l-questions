import React from 'react';
import Question from './Question'
export default function Questions(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.openModal}>Add</button>
            <ul>
                {props.questions.map(question => (
                    <Question changeDataEvent={e => props.changeDataEvent(e, question)} key={question.id} question={question}></Question>
                ))}
            </ul>
            <button onClick={props.saveQuestions}>Save</button>
            <button>Cancel</button>

            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Write the question..</p>
                    <input onChange={props.newQuestionChange}></input>
                    
                    <select onChange={props.newQuestionTypeChange}>
                        <option value="y">Yes No Question</option>
                        <option value="w">Information Question</option>
                        <option value="s">Selection question</option>
                    </select>

                    <div>
                        <button onClick={props.saveQuestion}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
