import React from 'react';
import Parameter from '../parameters/parameter.jsx';
import Control from '../controls/control.jsx';
import Input from '../entry-input/input.jsx';
import Act from '../print-act/print-act.jsx';
import History from '../history/history.jsx';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parameters: [
        {
          title:'Здоровье',
          width: 50
        },
  
        { 
          title:'Жажда',
          width: 50
        },
  
        {
          title:'Голод',
          width: 50
        },
  
        {
          title:'Усталость',
          width: 50
        },

      ],

      classMods: ['health', 'thrist', 'hungry', 'stamina'],
  
      controls: [
        {
          title: 'Есть',
        },
  
        {
          title: 'Пить',
        },
  
        {
          title: 'Отдохнуть',
        },
  
        {
          title: 'Работать',
        },
      ],
      
      act: {
        title: ''
      },

      history: [],
    }
  }

  random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  eat = () => {
    const newparameters = this.state.parameters;
    const newact = this.state.act;
    const newhistory = this.state.history;
    newact.title = 'Вы съели яблоко';
    newhistory.push('Тамагочи поел');

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
      parameters: newparameters,
      act: newact,
      history: newhistory,
    })
  }

  drink = () => {
    const newparameters = this.state.parameters;
    const newact = this.state.act;
    const newhistory = this.state.history;
    
    newact.title = 'Вы попили водички';
    newhistory.push('Тамагочи попил');

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
      parameters: newparameters,
      act: newact,
      history: newhistory,
    })
  }

  chill = () => {
    const newparameters = this.state.parameters;
    const newact = this.state.act;
    const newhistory = this.state.history;

    newact.title = 'Вы хорошо отдохнули';
    newhistory.push('Тамагочи почилил');

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
      parameters: newparameters,
      act: newact,
      history: newhistory,
    })
  }

  work = () => {
    const newparameters = this.state.parameters;
    const newact = this.state.act;
    const newhistory = this.state.history;

    newact.title = 'Вы отлично поработали';
    newhistory.push('Тамагочи поработал');
    
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
      parameters: newparameters,
      act: newact,
      history: newhistory,
    })
  }

  inputChange = (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    
    switch(value) {
      case("есть"):
      this.eat();
      break;

      case("пить"):
      this.drink();
      break;

      case("отдохнуть"):
      this.chill();
      break;

      case("работать"):
      this.work();
      break;

      // no default
    }
  
  }


  render () {
    console.log(this.state.history);
    
    const {controls, parameters, act, classMods, history} = this.state;

    return (
      <> 
        <h1 className="game-title">MiniGame</h1>
        <div className="container">
            <Act title={act.title}/>
            <div className="container__inside">
                <div className="wrapper">
                    {parameters.map((parameter, i) => {
                      return (
                          <Parameter
                              key = {i}
                              title = {parameter.title}
                              classMod = {classMods[i]}
                              width = {parameter.width}
                          />
                      )
                    })}
                </div>
                <div className="wrapper">
                    <Control title = {controls[0].title} classMod = {classMods[0]} control = {this.eat}/>
                    <Control title = {controls[1].title} classMod = {classMods[1]} control = {this.drink}/>
                    <Control title = {controls[2].title} classMod = {classMods[2]} control = {this.chill}/>
                    <Control title = {controls[3].title} classMod = {classMods[3]} control = {this.work}/>
                </div>
            </div>
            <Input change = {this.inputChange}/>
        </div>
        <ol>
            {history.map((hist, i) => {
                return (
                  <History
                    key = {i}
                    title = {hist} 
                    />
                )
              }
            )}
        </ol>
      </>
    );
  }
}

export default App;
