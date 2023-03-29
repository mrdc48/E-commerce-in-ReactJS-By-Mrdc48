import React from "react";
import Home from "./Home.js";
import "./App.scss";
import Nav from "./Nav.js";
import Sign from "./sign.js";
import { Routes, Route } from "react-router-dom";
import Shop from "./Shop.js";
import UserProducts from "./UserProducts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign" element={<Sign />} />
        <Route path="userProducts" element={<UserProducts />} />
      </Route>
    </Routes>
  );
};

export default App;
