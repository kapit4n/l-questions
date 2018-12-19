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

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Write the question..</p>
                    <input></input>
                    <select> 
                    <option key="y">Yes No Question</option>
                    <option key="w">Information Question</option>
                    <option key="s">Selection question</option>
                </select>
                </div>
            </div>
        </div>
    );
}
