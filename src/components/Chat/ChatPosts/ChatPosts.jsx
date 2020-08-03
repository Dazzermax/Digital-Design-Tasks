import React from 'react'
import { observer } from 'mobx-react';
import state from '../../../store/mainStore';
import './ChatPosts.scss'

const ChatPosts = observer(props => {

	const { channels, currentPerson } = state;
	const currentChat = channels.find(channel => channel.name === props.chatName);

	function personTitle(personName) {
	  if (personName == currentPerson.name) {
			return 'Вы'
	  } else return personName
	}

	function parseDate(date) {
		let hours = (date.getHours() < 10) ? '0'+ date.getHours() : date.getHours();
		let minutes = (date.getMinutes() < 10) ? '0'+ date.getMinutes() : date.getMinutes();
		
		return hours + ':' + minutes
	}
	
	let fiteredMessages;

	if (props.filter != '') {
		fiteredMessages = currentChat.messages.filter(message => message.messageText.toLowerCase()
											.includes(props.filter.toLowerCase()))
	} else fiteredMessages = currentChat.messages;
  
	return (
		<div className="posts">
			<ul className="posts-container">
				{fiteredMessages.map(message => {
					return (
						<li className="message">
							<span className="person-name">{personTitle(message.personName) + ': '}</span> 
							<p className="person-message">
								{message.messageText}
								<span className="date-message">{parseDate(message.date)}</span>
							</p>
							
						</li>
					)
				})}
			</ul>
		</div>
	)
})


export default ChatPosts;