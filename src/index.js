import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.scss';
import './style/body.scss';
import './style/scroll.scss';
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
