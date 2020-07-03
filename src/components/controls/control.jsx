import React from 'react';
import './control.scss';

export default (props) => {
        return  <button 
                  className={`control ` + props.class}
                  type="button"
                  onClick={props.control} 
                  >
                  {props.title}
                </button>
}
