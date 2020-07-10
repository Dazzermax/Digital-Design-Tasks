import React from 'react';
import './input.scss';


function input(props) {
    return (
        <form className = "entry-form" onSubmit={props.onSubmit}>
           <input className="entry-input" type="text" placeholder="Insert your command..." onChange={props.onChange}></input>
        </form>
    )
}


export default input;