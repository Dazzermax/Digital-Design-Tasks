import React from 'react'
import state from '../../../store/mainStore';
import { observer } from 'mobx-react';
import './ChatPosts.scss'

const ChatPosts = observer((props) => {
	const { channels, currentUser } = state;
	const currentChat = channels.find(channel => channel.name === props.chatName);

	function userTitle(userName) {
	  if (userName == currentUser.name) {
			return 'Вы'
	  } else return userName
	}

	function parseDate(date) {
		return date.getHours() + ':' + date.getMinutes()
	}
  
	return (
		<div className="posts">
			<ul className="posts-container">
				{currentChat.messages.map(message => {
					return (
						<>
							<li className="message">{
								userTitle(message.userName) + ': ' + message.messageText}
								{parseDate(message.date)}
							</li>
						</>
					)
				})}
			</ul>
		</div>
	)
})


export default ChatPosts;