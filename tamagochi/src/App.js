import React from 'react';
import Parametr from './components/parametrs/parametr.jsx';
import Control from './components/controls/control.jsx';
import Input from './components/entry-input/input.jsx'
import './App.css';

class App extends React.Component {

  state = {
    parametrs: [
      {title:'Здоровье'},
      {title:'Жажда'},
      {title:'Голод'},
      {title:'Усталось'},
    ],
    controls: [
        {name: 'health'},
        {name: 'stamina'},
        {name: 'hungry'},
        {name: 'thrist'},
    ],
    title: 'MiniGame'
  }


  render () {

    const parametrs = this.state.parametrs;

    return (
      <>
      <h1>{this.state.title}</h1>
        <div className="container">
            <div className="container__inside">
                <div className="wrapper">
                   {parametrs.map((parametr, i) => {
                       return (
                           <Parametr
                                key = {i}
                                title={parametr.title}
                            />
                       )
                   })}
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
