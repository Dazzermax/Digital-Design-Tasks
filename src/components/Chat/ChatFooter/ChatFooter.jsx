import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatFooter.scss';


const ChatFooter = observer(props => {
   const {sendMessage} = state;
   const enterKey = 13;
   
	return (
		<div className="input-wrapper">
			<TextareaAutosize className="message-input" 
							placeholder="Write a message"
							onKeyDown = {
								(e) => {
									if (e.keyCode === enterKey) {
										sendMessage(e.target.value, props.chatName);
										e.target.value = '';
									}
								}
							}

			/>
		</div>
	)
})


export default ChatFooter;