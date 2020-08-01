import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.scss';
import './style/body.scss';
import './style/scroll.scss';
import {Provider} from 'mobx-react';
import mainStore from './store/mainStore'
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';

const stores = mainStore;


ReactDOM.render((
    <Provider {...stores}>
        <App /> 
    </Provider>
    ), document.getElementById('root'));


serviceWorker.unregister();
