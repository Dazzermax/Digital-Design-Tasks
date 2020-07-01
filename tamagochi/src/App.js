import React from 'react';
import Stats from './stats/stats';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Stats />
        <Stats />
        <Stats />
        <Stats />
      </div>
    );
  }
}

export default App;
