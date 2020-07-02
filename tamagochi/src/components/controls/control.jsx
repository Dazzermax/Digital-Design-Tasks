import React from 'react';
import './control.scss';

export default (props) => <button 
                            type="button"
                            onClick={props.control} 
                            className={`control ` + props.class}
                            >
                            {props.title}
                          </button>
