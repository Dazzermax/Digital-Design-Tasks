import React from 'react';
import routesHeader from '../../../routes/routesHeader';
import './ChatHeader.scss';


function ChatHeader(props) {
    return (
        <div className="chat-header">
            <div className="chat-header__title">{`#${props.chatName}`}</div>
            <label className="chat-header__filter">
                <input className="chat-header__input" type="text" placeholder="Search" onChange={e => props.setFilterFn(e.target.value)}/>
            </label>
        </div>
    )
}

export default ChatHeader;