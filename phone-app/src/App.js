import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exactpath="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
