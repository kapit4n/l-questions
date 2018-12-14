import React from 'react';
import Question from './Question'
export default function Questions(props) {
    return (
        <div>
            <ul>
                {props.questions.map(question => (
                    <Question key={question} question={question}></Question>
                ))}
            </ul>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    );
}

