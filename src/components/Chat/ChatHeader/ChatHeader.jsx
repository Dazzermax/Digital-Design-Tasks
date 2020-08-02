import React from 'react';
import routesHeader from '../../../routes/routesHeader';
import './ChatHeader.scss';


function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="chat-header__title"># General</div>
            <label className="chat-header__filter">
                <input className="chat-header__input" type="text" placeholder="Search"/>
            </label>
        </div>
    )
}

export default ChatHeader;