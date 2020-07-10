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

      classMods: ['health', 'thrist', 'hungry', 'stamina'],

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

      showhistory: false,

      inputValue: '',
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
    
    newparameters[0].width += this.random(-2, 2);
    newparameters[2].width += -10;
    
    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    newhistory.push(`Поел! здоровье: ` + newparameters[0].width + ` голод: ` + this.state.parameters[2].width);
    
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

    newparameters[0].width += this.random(-1, 1);
    newparameters[1].width += -10;

    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })
    
    newhistory.push(`Попил! здоровье: ` + newparameters[0].width + ` жажда: ` + this.state.parameters[1].width);

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

    newparameters[0].width += this.random(10, 15);
    newparameters[3].width += -10;
    
    newparameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    newhistory.push(`Почилил! здоровье: ` + newparameters[0].width + ` усталость: ` + this.state.parameters[3].width);

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

    newhistory.push(`Поработал! здоровье: ` + newparameters[0].width +  
                    ` жажда: ` + this.state.parameters[1].width +
                    ` голод: ` + this.state.parameters[2].width +
                    ` усталость: ` + this.state.parameters[2].width 
                    );

    this.setState({
      ...this.state,
      parameters: newparameters,
      act: newact,
      history: newhistory,
    })
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit = (e) => {
      const value = this.state.inputValue.toLowerCase();
      const switchs = value.split(', ');
      console.log(switchs);
      
      switchs.forEach((item) => {
        if (item === "есть") {
          this.eat()
        } else if (item === "пить") {
          this.drink()
        } else if (item === "отдохнуть") {
          this.chill()
        } else if (item === "работать") {
          this.work()
        }
      })
      e.preventDefault();
    }

  toggleHistory = () => {

    this.setState( {
      showhistory: !this.state.showhistory
    })
  }

  render () {
    console.log(this.state.showhistory);
    
    const {controls, parameters, act, classMods, history, showhistory} = this.state;

    let histlist = null;
    let histBtnTitle = 'Показать историю'

    if (showhistory) {
      histlist =
        <ol className="history-wrapper">
            Жизнь Тамагочи:
            { 
              history.map((hist, i) => {
                  return (
                    <History
                      key = {i}
                      title = {hist} 
                      />
                  )
                })
            }
        </ol>
        histBtnTitle = 'Скрыть историю'
    }
    return (
      <> 
        <h1 className="game-title">MiniGame</h1>
        <button className ="toogle-hist" type="button" onClick={this.toggleHistory}>{histBtnTitle}</button>
        <div className="main-container">
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
                    {histlist}
                  </div>
                  <div className="wrapper">
                      <Control title = {controls[0].title} classMod = {classMods[0]} control = {this.eat}/>
                      <Control title = {controls[1].title} classMod = {classMods[1]} control = {this.drink}/>
                      <Control title = {controls[2].title} classMod = {classMods[2]} control = {this.chill}/>
                      <Control title = {controls[3].title} classMod = {classMods[3]} control = {this.work}/>
                  </div>
              </div>
              <Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
