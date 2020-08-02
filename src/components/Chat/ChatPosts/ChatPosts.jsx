import React from 'react'
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatPosts.scss'

const ChatPosts = observer(() => {
    const { channels } = state;
    return (
        <div className="posts">
            <ul className="posts-container">
                {channels[0].messages.map(chat => {
                    return (
                        <li className="message">Простоо чел пока что: {chat}</li>
                    )
                })}
            </ul>
        </div>
    )
})


export default ChatPosts;