import React from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile'


function App() {
  return (
    <div className="app">
     <Navigation />
     <Chat />
     {/* <Profile /> */}
    </div>
  );
}

export default App;
