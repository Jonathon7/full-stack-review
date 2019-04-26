import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Seller from "./components/Seller/Seller";
import Checkout from "./components/Checkout/Checkout";

export default (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/seller" component={Seller} />
    <Route exact path="/checkout" component={Checkout} />
  </Switch>
);
