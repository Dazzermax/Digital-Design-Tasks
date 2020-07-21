import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatPosts from './ChatPosts/ChatPosts';
import ChatFooter from './ChatFooter/ChatFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Chat.scss';

function Chat () {
    return (
        <main className="chat">
            <Router>
                <ChatHeader></ChatHeader>
                <ChatPosts></ChatPosts>
                <ChatFooter></ChatFooter>
            </Router>
        </main>
    )
}

export default Chat;