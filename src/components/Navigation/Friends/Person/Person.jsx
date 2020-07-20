import React from 'react';
import './Person.scss';
    
function Person(props) {
    return (
    <div className="person">
        <div className="person__status"></div>
        <div className="person__avatar"></div>
        <div className="person__name">{props.name}</div>
    </div>
    )
}   


export default Person;
    
    
    
    
    
    
    
    
    
  