import React from 'react';
import Question from './Question'
export default function Questions(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>
                {props.questions.map(question => (
                    <Question changeDataEvent={e => props.changeDataEvent(e, question)} key={question.id} question={question}></Question>
                ))}
            </ul>
            <button onClick={props.saveQuestions}>Save</button>
            <button>Cancel</button>
        </div>
    );
}
