import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductProvider } from "./Context";

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductProvider>
     
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/details" component={Details}/>
          <Route exact path="/cart" component={Cart}/>
          <Route  component={Default}/>
        </Switch>
        </BrowserRouter> </ProductProvider>


      </React.Fragment>
      

      
    );
  }
}

export default App;
