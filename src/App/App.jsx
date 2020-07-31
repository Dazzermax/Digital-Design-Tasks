import React from 'react';
import './App.scss';
import Navigation from '../components/Navigation/Navigation';
import Chat from '../components/Chat/Chat';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import routes from '../routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  let routesChat = routes.map(route => {
    return <Route path={route.url}
                  component={route.component}
                  exact={route.exact}
                  key={route.url}
            />
  })

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="wrapper">
          <Navigation />
          {routesChat}
          {/* <Profile /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
