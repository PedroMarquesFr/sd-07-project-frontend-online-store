import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  // Link,
  Switch,
  //  Redirect,
} from 'react-router-dom';

import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
