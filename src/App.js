import React from "react";
import Header from "./com/header";
import Footer from "./com/footer";
import Login from "./com/login";
import Body from "./com/body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}