import React from 'react'
import './ChatFooter.scss'


function ChatFooter() {
    return (
        <div className="input-wrapper">
            <textarea className="message-input" placeholder="Write a message..."></textarea>
            {/* <button className="btn-send">Send</button> */}
        </div>
    )
}

export default ChatFooter;