import React from 'react';

import './app.scss';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Checkout from './components/cart/checkout';
import Details from './components/products/details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default (props) => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Categories />
          <Products />
        </Route>
        <Route path="/cart" exact>
          <Checkout />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};