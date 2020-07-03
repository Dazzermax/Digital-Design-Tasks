import React from 'react';
import './input.scss';

function input(props) {
    return (
        <input className="entry-input" type="text" placeholder="Insert your command..." onChange={props.changeInput}></input>
    )
}


export default input;