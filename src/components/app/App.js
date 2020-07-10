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
  
      controls: ['Есть', 'Пить', 'Отдохнуть', 'Работать'],

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
// Методы для контролов
  eat = () => {
    const {parameters, act, history} = this.state;
  
    act.title = 'Вы съели яблоко';
    
    parameters[0].width += this.random(-2, 2);
    parameters[2].width += -10;
    
    parameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    history.push(`Поел! здоровье: ` + parameters[0].width + ` голод: ` + parameters[2].width);
    
    this.setState({
      ...this.state,
      parameters,
      act,
      history,
    })
  }

  drink = () => {
    const {parameters, act, history} = this.state;
    
    act.title = 'Вы попили водички';

    parameters[0].width += this.random(-1, 1);
    parameters[1].width += -10;

    parameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })
    
    history.push(`Попил! здоровье: ` + parameters[0].width + ` жажда: ` + parameters[1].width);

    this.setState({
      ...this.state,
      parameters,
      act,
      history,
    })
  }

  chill = () => {
    const {parameters, act, history} = this.state;

    act.title = 'Вы хорошо отдохнули';

    parameters[0].width += this.random(10, 15);
    parameters[3].width += -10;
    
    parameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    history.push(`Почилил! здоровье: ` + parameters[0].width + ` усталость: ` + this.state.parameters[3].width);

    this.setState({
      ...this.state,
      parameters: parameters,
      act: act,
      history: history,
    })
  }

  work = () => {
    const {parameters, act, history} = this.state;

    act.title = 'Вы отлично поработали';
    
    parameters[0].width += this.random(-15, -10);
    parameters[1].width += this.random(10, 15);
    parameters[2].width += this.random(10, 15);
    parameters[3].width += this.random(10, 15);

    parameters.forEach(parameter => {
      if (parameter.width > 100) {
        parameter.width = 100;
      } else if (parameter.width < 0) {
        parameter.width = 0;
      }
    })

    history.push(`Поработал! здоровье: ` + parameters[0].width +  
                              ` жажда: ` + parameters[1].width +
                              ` голод: ` + parameters[2].width +
                          ` усталость: ` + parameters[2].width 
                );

    this.setState({
      ...this.state,
      parameters,
      act,
      history,
    })
  }
// Методы для инпута
  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  formSubmit = (e) => {
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
    const {controls, parameters, act, classMods, history, showhistory} = this.state;

    let histlist = null;
    let histBtnTitle = 'Показать историю';

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
        <button className="toogle-hist" type="button" onClick={this.toggleHistory}>{histBtnTitle}</button>
        <div className="main-container">
          <div className="container">
              <Act title={act.title}/>
              <div className="container__inside">
                  <div className="wrapper">
                      {parameters.map((parameter, i) => {
                        return (
                            <Parameter
                                key={i}
                                title={parameter.title}
                                classMod={classMods[i]}
                                width={parameter.width}
                            />
                        )
                      })}
                    {histlist}
                  </div>
                  <div className="wrapper">
                      <Control title={controls[0]} classMod={classMods[0]} control={this.eat}/>
                      <Control title={controls[1]} classMod={classMods[1]} control={this.drink}/>
                      <Control title={controls[2]} classMod={classMods[2]} control={this.chill}/>
                      <Control title={controls[3]} classMod={classMods[3]} control={this.work}/>
                  </div>
              </div>
              <Input onChange={this.inputChange} onSubmit={this.formSubmit}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
