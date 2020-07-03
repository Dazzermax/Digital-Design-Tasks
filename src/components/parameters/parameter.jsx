import React from 'react';
import './parameter.scss';


export default (props) => {
    return  <div className="progress-bar">
                <span className="progress-bar__title">{props.title}</span>
                <div className="progress-bar__container">
                    <div className={`progress-bar__parameter ` + props.class} style={{width: props.width + '%'}}></div>
                </div>
            </div> 
}