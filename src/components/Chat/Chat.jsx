import React from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatPosts from './ChatPosts/ChatPosts';
import ChatFooter from './ChatFooter/ChatFooter';
import routesHeader from '../../routes/routesHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Chat.scss';

function Chat (props) {
    console.log(props)
    // let header = routesHeader.map(route => {
    //     return <Route path={route.url}
    //                   component={route.component}
    //                   exact={route.exact}
    //                   key={route.url}
    //                   title={route.title}
    //             />
    // })


      
    return (
        
        <main className="chat">
            <Router>
                <ChatHeader chatName={props.chatName}/>
                <ChatPosts chatName={props.chatName}/>
                <ChatFooter />
            </Router>
        </main>
        
    )
}

export default Chat;