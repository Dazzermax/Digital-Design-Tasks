import React from 'react';
import './parametr.scss';

export default (props) => (
    <div className="progress-bar">
        <span className="progress-bar__title">{props.title}</span>
        <div className="progress-bar__container">
            <div className={`progress-bar__parameter ` + props.class}></div>
        </div>
    </div>
)