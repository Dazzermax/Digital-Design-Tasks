import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatPosts from './ChatPosts/ChatPosts';
import ChatFooter from './ChatFooter/ChatFooter';
import routesHeader from '../../routes/routesHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Chat.scss';

function Chat (props) {
    console.log(props)

    return (
        <main className="chat">
            <ChatHeader chatName={props.chatName}/>
            <ChatPosts chatName={props.chatName}/>
            <ChatFooter chatName={props.chatName}/>
        </main>
    )
}

export default Chat;