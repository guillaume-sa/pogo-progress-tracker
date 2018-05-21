import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from "./store";

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {PrivateRoute} from './routes/PrivateRoute'

import LoginForm from './Components/LoginForm'
import App from './App'



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
