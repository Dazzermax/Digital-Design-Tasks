import React from 'react';
import './control.css';

function button (props) {
    return (
        <button onClick={props.changeStats} type="button" className="control">Есть</button>
    )
};


export default button;