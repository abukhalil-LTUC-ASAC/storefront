import React from 'react';

import './app.scss';
import Header from './components/header'; 
import Footer from './components/footer'; 
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';

export default (props) => {
  return (
    <>
      <Header/>
      <Categories />
      <Products />
      <Footer/>
    </>
  );
};