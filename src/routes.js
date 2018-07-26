import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import App from './components/App'


export default (
  <BrowserRouter>
    <Route path='/' component={App}>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/books' component={Book} />
    </Route>
  </BrowserRouter>
)
