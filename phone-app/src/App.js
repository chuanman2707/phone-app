import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";
import ParticleContainer from "./components/ParticleContainer";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Navbar />
      {/* <ParticleContainer /> */}

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
