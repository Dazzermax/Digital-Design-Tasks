import React from 'react'
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatPosts.scss'

const ChatPosts = observer(() => {
    const { chats } = state;
    return (
        <div className="posts">
            <ul className="posts-container">
                {chats.map(chat => {
                    return (
                        <li className="message">{chat}</li>
                    )
                })}
            </ul>
        </div>
    )
})


export default ChatPosts;