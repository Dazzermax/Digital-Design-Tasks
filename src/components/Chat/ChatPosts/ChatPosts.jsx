import React from 'react'
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatPosts.scss'

const ChatPosts = observer((props) => {
    const { channels } = state;
    const currnetChat = channels.find(channel => channel.name === props.chatName)
    return (
        <div className="posts">
            <ul className="posts-container">
                {currnetChat.messages.map(message => {
                    return (
                        <li className="message">Простоо чел пока что: {message}</li>
                    )
                })}
            </ul>
        </div>
    )
})


export default ChatPosts;