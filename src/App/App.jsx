import React from 'react';
import './App.scss';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import {observer, inject} from 'mobx-react';
import state from '../store/mainStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observe } from 'mobx';


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
          <Profile />
        </div>
      </div>
    </Router>
  );
})

export default App;
