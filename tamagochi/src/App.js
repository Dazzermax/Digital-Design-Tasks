import React from 'react';
import Stats from './components/stats/stat.jsx';
import Control from './components/controls/control.jsx';
import Input from './components/entry-input/input.jsx'
import './App.css';

class App extends React.Component {

  state = {
    stats: [
      {name:'Здоровье'},
      {name:'Жажда'},
      {name:'Голод'},
      {name:'Усталось'},
    ]
  }

  changeWidth() {
      console.log('clicked');
  }

  render () {

    const stats = this.state.stats;

    return (
      <>
      <h1 onClick={this.changeWidth}>MiniGame</h1>
        <div className="container">
            <div className="container__inside">
                <div className="wrapper">
                    <Stats name={stats[0].name}/>
                    <Stats name={stats[1].name}/>
                    <Stats name={stats[2].name}/>
                    <Stats name={stats[3].name}/>
                </div>
                <div className="wrapper">
                    <Control />
                    <Control />
                    <Control />
                    <Control />
                </div>
            </div>
            <Input />
      </div>
      </>
    );
  }
}

export default App;
