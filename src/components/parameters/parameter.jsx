import React from 'react';
import './parameter.scss';


const Parameter = ({title, classMod, width}) => {
    return (
        <div className="progress-bar">
            <span className="progress-bar__title">{title}</span>
            <div className="progress-bar__container">
                <div className={`progress-bar__parameter progress-bar__parameter--` + classMod} style={{width: width + '%'}}></div>
            </div>
        </div> 
    )
}

export default Parameter;