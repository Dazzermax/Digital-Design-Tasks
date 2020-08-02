import React from 'react';
import './App.scss';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import Pointers from '../components/Chat/ChatInfo/Pointer/Pointers'
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import {observer, inject} from 'mobx-react';
import state from '../store/mainStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = observer(() => {

  const { channels } = state

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Switch>
              {channels.map(channel => {
                return (
                  <Route component={() => <Chat chatName={channel.name} />} path={`/${channel.name}`} />
                )
              })}
          </Switch>
          <Route path={'/'} exact>
              <div className="template">
                {/* <h1 className="template-title">А сколько личностей живет в тебе?</h1> */}

                <Pointers/>
                
              
                {/* <p className="template-text"> Уи́льям Стэ́нли Ми́ллиган , известный как Би́лли Ми́ллиган  — американский гражданин, один из самых известных людей с диагнозом «множественная личность» в истории психиатрии. Расщепления личности Миллигана насчитывали 24 полноценных личности, из которых 10 были основными: сам Миллиган (как главная личность), Артур Смит, Рейджен Вадасковинич, Аллен, Томми, Дэвид, Кристин, Кристофер, Адалана и Денни. В конце 1970-х годов его судили в получившем широкую известность судебном процессе в штате Огайо, США. Миллиган обвинялся в нескольких ограблениях и трёх изнасилованиях, однако его адвокаты заявили о невменяемости своего подзащитного, утверждая, что преступления были совершены двумя его альтернативными личностями и без ведома самого Миллигана. В результате он был оправдан, но направлен на психиатрическое лечение «до тех пор, пока он не выздоровеет». Билли Миллиган стал первым человеком, оправданным в ходе судебного процесса по причине диагноза «множественной личности». В 1988 году после десяти лет в психиатрической клинике Миллиган был признан выздоровевшим и был выписан.
                </p> */}
              </div>
          </Route>
          {/* <Profile /> */}
        </div>
      </div>
    </Router>
  );
})

export default App;
