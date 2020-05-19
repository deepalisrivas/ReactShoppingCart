import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "./Navbar/navbar";
import Footer from "./Footer/footer";
import Cart from "./Cart-Details/Shopping Cart/cart";
import Shipping from "./Cart-Details/Shipping Details/Shipping";
import Payment from "./Cart-Details/Payment Option/Payment";
import Successful from "./Successful-order/Successful";
import Description from "./Product Description/description";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/Shipping" component={Shipping} />
        <Route path="/Payment" component={Payment} />
        <Route path="/Successful" component={Successful} />
        <Route path="/description" component={Description} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
