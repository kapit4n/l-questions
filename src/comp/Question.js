import React from 'react';
export default function Question(props) {
    return (
        <li style={{textAlign: 'left'}}>
            Q: {props.question} <br></br>
            R: <input></input>
        </li>
    )
}
