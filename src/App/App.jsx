import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import Header from '../components/Header/Header';
import ChatInfo from '../components/Chat/ChatInfo/ChatInfo';
import {observer} from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import state from '../store/mainStore';
import './App.scss';


const App = observer(() => {

  const { channels } = state

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Switch>
              {channels.map(channel => {
                return (
                  <Route component={() => <Chat chatName={channel.name} />} path={`/${channel.name}`} />
                )
              })}
          </Switch>
          <Route path={'/'} exact><ChatInfo /></Route>
        </div>
      </div>
    </Router>
  );
})

export default App;
