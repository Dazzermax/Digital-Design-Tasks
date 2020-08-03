import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatPosts from './ChatPosts/ChatPosts';
import ChatFooter from './ChatFooter/ChatFooter';
import './Chat.scss';

function Chat (props) {
	
	let [filter, setFilter] = React.useState('');

	return (
		<main className="chat">
			<ChatHeader chatName={props.chatName} setFilterFn={setFilter} />
			<ChatPosts chatName={props.chatName} filter={filter} />
			<ChatFooter chatName={props.chatName}/>
		</main>
	)
}

export default Chat;