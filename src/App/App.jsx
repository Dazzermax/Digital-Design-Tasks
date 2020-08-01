import React from 'react';
import './App.scss';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Chat />
          {/* <Profile /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
