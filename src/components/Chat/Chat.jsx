import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatPosts from './ChatPosts/ChatPosts';
import ChatFooter from './ChatFooter/ChatFooter';
import './Chat.scss';

function Chat () {
    return (
        <main className="chat">
            <ChatHeader></ChatHeader>
            <ChatPosts></ChatPosts>
            <ChatFooter></ChatFooter>
        </main>
    )
}

export default Chat;