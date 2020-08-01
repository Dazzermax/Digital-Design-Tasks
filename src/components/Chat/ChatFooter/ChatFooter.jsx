import React from 'react';
import './ChatFooter.scss';
import TextareaAutosize from 'react-textarea-autosize';
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';


const ChatFooter = observer(() => {

    // const { sendMessage } = state;
    return (
        <div className="input-wrapper">
           <TextareaAutosize className="message-input" 
                             placeholder="Write a message"
                             onKeyDown = {
                                 (e) => {
                                     if (e.keyCode === 13) {
                                         console.log('jopa');
                                         e.target.value = ''
                                     }
                                 }
                             }

           />
            {/* <button className="btn-send">Send</button> */}
        </div>
    )
})


export default ChatFooter;