import React from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile'
import Header from '../Header/Header'


function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Chat />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
