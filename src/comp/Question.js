import React from 'react';
export default function Question(props) {
    return (
        <li style={{ textAlign: 'left' }}>
            Q: {props.question.r} <br></br>
            R:
            {props.question.type == 'w' &&
                <input  onChange={props.changeDataEvent}></input>
            }
            {props.question.type == 'y' && (
                <label>
                    <input  onChange={props.changeDataEvent} key={props.question.id} type="checkbox" className="radio" value="1" name="yes" />Yes</label>
            )
            }
            {props.question.type == 's' && (
                <select  onChange={props.changeDataEvent}>
                    {props.question.options.map(opc => (<option value={opc}>{opc}</option>))}
                </select>
            )
            }
        </li>
    )
}
