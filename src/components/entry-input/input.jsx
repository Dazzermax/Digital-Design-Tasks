import React from 'react';
import './input.scss';


function input({onSubmit, onChange}) {
    return (
        <form className="entry-form" onSubmit={onSubmit}>
           <input className="entry-input" 
           type="text" 
           placeholder="Вводите команды через запятую... пожалуйста" 
           onChange={onChange}>
           </input>
        </form>
    )
}


export default input;