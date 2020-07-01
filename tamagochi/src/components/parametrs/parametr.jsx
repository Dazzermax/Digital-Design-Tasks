import React from 'react';
import './parametr.css';

export default (props) => (
    <div className="progress-bar">
        <span className="progress-bar__title">{props.title}</span>
        <div className="progress-bar__container">
            <div className="progress-bar__parameter progress-bar__parameter-health"></div>
        </div>
    </div>
)