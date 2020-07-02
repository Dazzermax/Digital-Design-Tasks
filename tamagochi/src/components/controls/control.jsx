import React from 'react';
import './control.scss';

function button (props) {
    return (
        <button type="button" className={`control ` + props.class}>{props.title}</button>
    )
};


export default button;