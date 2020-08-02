import React from 'react'
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatPosts.scss'

const ChatPosts = observer((props) => {
    const { channels, currentUser } = state;
    const currentChat = channels.find(channel => channel.name === props.chatName);
  
    return (
        <div className="posts">
            <ul className="posts-container">
                {currentChat.messages.map(message => {
                    return (
                        <li className="message">{
                            (message.userName == currentUser.name ? 'Вы' : message.userName)
                            + ': ' + message.messageText}</li>
                    )
                })}
            </ul>
        </div>
    )
})


export default ChatPosts;