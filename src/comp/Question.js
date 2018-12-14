import React from 'react';
export default function Question(props) {
    return (
        <li style={{textAlign: 'left'}}>
            Question: {props.question} <br></br>
            Response: <input></input>
        </li>
    )
}
