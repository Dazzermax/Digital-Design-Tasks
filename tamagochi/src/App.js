import React from 'react';
import Parametr from './components/parametrs/parametr.jsx';
import Control from './components/controls/control.jsx';
import Input from './components/entry-input/input.jsx'
import './App.scss';

class App extends React.Component {

  state = {
    parametrs: [

      {
        title:'Здоровье',
        class: 'progress-bar__parameter-health',
      },

      { 
        title:'Жажда',
        class: 'progress-bar__parameter-thrist',
      },

      {
        title:'Голод',
        class: 'progress-bar__parameter-hungry',
      },

      {
        title:'Усталось',
        class: 'progress-bar__parameter-stamina',
      },

    ],

    controls: [

      {
        title: 'Есть',
        class: 'control-health'
      },

      {
        title: 'Пить',
        class: 'control-thrist'
      },

      {
        title: 'Отдохнуть',
        class: 'control-hungry'
      },

      {
        title: 'Работать',
        class: 'control-stamina'
      },

    ],

    title: 'MiniGame',
  }

  render () {

    const parametrs = this.state.parametrs;
    const controls = this.state.controls;

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
                              title = {parametr.title}
                              class = {parametr.class}
                          />
                      )
                   })}
                </div>
                <div className="wrapper">
                   {controls.map((control, i) => {
                     return (
                        <Control 
                          key = {i}
                          title = {control.title}
                          class = {control.class}
                        />
                     )
                   })}
                </div>
            </div>
            <Input />
      </div>
      </>
    );
  }
}

export default App;
