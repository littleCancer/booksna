// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const browserHistory = createBrowserHistory();

// render2 (
//   {routes},
//   document.getElementById('app')
// );

render (
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
