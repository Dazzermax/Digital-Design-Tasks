import React from 'react';
import Parameter from './components/parameters/parameter.jsx';
import Control from './components/controls/control.jsx';
import Input from './components/entry-input/input.jsx'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parameters: [
        {
          title:'Здоровье',
          class: 'progress-bar__parameter-health',
          width: 50
        },
  
        { 
          title:'Жажда',
          class: 'progress-bar__parameter-thrist',
          width: 50
        },
  
        {
          title:'Голод',
          class: 'progress-bar__parameter-hungry',
          width: 50
        },
  
        {
          title:'Усталость',
          class: 'progress-bar__parameter-stamina',
          width: 50
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
  }

  random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  eat = () => {
    const newparameters = this.state.parameters;
    newparameters[0].width += this.random(-2, 2);
    newparameters[2].width += -10;

    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })
    
    this.setState({
      ...this.state,
      parameters: newparameters
    })
  }

  drink = () => {
    const newparameters = this.state.parameters
    newparameters[0].width += this.random(-1, 1);
    newparameters[1].width += -10;

    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })
    
    this.setState({
      ...this.state,
      parameters: newparameters
    })
  }

  chill = () => {
    const newparameters = this.state.parameters
    newparameters[0].width += this.random(10, 15);
    newparameters[1].width += this.random(10, 15);
    newparameters[2].width += this.random(10, 15);
    newparameters[3].width += -10;
    
    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    this.setState({
      ...this.state,
      parameters: newparameters
    })
  }

  work = () => {
    const newparameters = this.state.parameters
    newparameters[0].width += this.random(-15, -10);
    newparameters[1].width += this.random(10, 15);
    newparameters[2].width += this.random(10, 15);
    newparameters[3].width += this.random(10, 15);

    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    this.setState({
      ...this.state,
      parameters: newparameters
    })
  }

  render () {
    const controls = this.state.controls;

    return (
      <>
      <h1>{this.state.title}</h1>
        <div className="container">
            <div className="container__inside">
                <div className="wrapper">
                   {this.state.parameters.map((parameter, i) => {
                      return (
                          <Parameter
                              key = {i}
                              title = {parameter.title}
                              class = {parameter.class}
                              width = {parameter.width}
                          />
                      )
                   })}
                </div>
                <div className="wrapper">
                   {/* {controls.map((control, i) => {
                     return (
                        <Control 
                          key = {i}
                          title = {control.title}
                          class = {control.class}
                          changeWidth = {this.changeHealth}
                        />
                     )
                   })} */}
                   <Control title = {controls[0].title} class = {controls[0].class} control = {this.eat}/>
                   <Control title = {controls[1].title} class = {controls[1].class} control = {this.drink}/>
                   <Control title = {controls[2].title} class = {controls[2].class} control = {this.chill}/>
                   <Control title = {controls[3].title} class = {controls[3].class} control = {this.work}/>
                 
                </div>
            </div>
            <Input />
      </div>
      </>
    );
  }
}

export default App;
