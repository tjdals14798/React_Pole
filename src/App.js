import React from "react";
import Login from "./com/login";
import Body from "./containers/InfoContainer";
import PoleInfo from "./containers/TodosContainer";
import PoleChart from "./com/chart";
import InsertPole from "./com/insertPole";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chart" element={<PoleChart />}/>
        <Route path="/info" element={<PoleInfo />} />
        <Route path="/insertPole" element={<InsertPole />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}