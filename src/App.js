import React from "react";
import Home from "./Home.js";
import "./App.scss";
import Nav from "./Nav.js";
import Sign from "./sign.js";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1> this is an web paage/////</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign" element={<Sign />} />
      </Route>
    </Routes>
  );
};

export default App;
