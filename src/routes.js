import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import App from './components/App';
import BookDetailsPage from './components/book/BookDetailsPage';
import CartPage from './components/cart/CartPage';

// export default (
//   <Route path='/about' component={About} />
// )

// export default (
//     <Route path='/' component={App}>
//       <Route exact path='/' component={Home} />
//       <Route path='/about' component={About} />
//       <Route path='/books' component={Book} />
//     </Route>
// )

export default (
  <div className="container">
    <Route path='/' component={App} />
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route exact path='/books' component={Book} />
    <Route exact path='/books/:id' component={BookDetailsPage} />
    <Route path="/cart" component={CartPage} />
  </div>
)
