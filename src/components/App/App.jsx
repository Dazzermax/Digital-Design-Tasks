import React from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Route exact path="/">
            <Chat />  
          </Route>
          <Route path="/support">
            <Chat />  
          </Route>
          {/* <Profile /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
