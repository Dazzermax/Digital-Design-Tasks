import React from 'react';
import './control.scss';


const Control = ({classMod, title, control}) => {
  return (
        <button 
          className={`control control--` + classMod}
          type="button"
          onClick={control} 
          >
          {title}
        </button>
  )
}

export default Control;
