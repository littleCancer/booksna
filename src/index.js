// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createBrowserHistory} from 'history';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore'

const browserHistory = createBrowserHistory();

const store = configureStore();

// render2 (
//   {routes},
//   document.getElementById('app')
// );

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
