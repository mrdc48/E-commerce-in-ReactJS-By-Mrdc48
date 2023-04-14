import React from "react";
import Home from "./Components/MainDirectory/Home.js";
import "./Components/Css/App.scss";
import Nav from "./Components/Navigation/Nav.js";
import Sign from "./Components/FirestoreForm/sign.js";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Products/Shop.js";
import CartProducts from "../src/Components/CartComponent/CartProducts.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign" element={<Sign />} />
        <Route path="CartProducts" element={<CartProducts />} />
      </Route>
    </Routes>
  );
};

export default App;
