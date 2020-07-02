import React from 'react';
import './parameter.scss';

class Parameters extends React.Component {
    
    render() {
        return (
            <div className="progress-bar">
                <span className="progress-bar__title">{this.props.title}</span>
                <div className="progress-bar__container">
                    <div className={`progress-bar__parameter ` + this.props.class} style={{width: this.props.width + '%'}}></div>
                </div>
            </div>
        )
    }
   
}

export default Parameters 