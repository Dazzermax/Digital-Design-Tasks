import React from 'react';
import Pointers from './Pointers/Pointers';
import './ChatInfo.scss';

function ChatInfo() {
    return (
        <div className="template">
            <h1 className="template-title">А сколько личностей живет в тебе?</h1>
                <div className="content">
                    <span className="content-description">Билли Милиган - человек в котором обитало 24 личности</span>
                    <div className="img-wrap" />
                </div>
            <Pointers/>
      </div>
    )
}

export default ChatInfo;




