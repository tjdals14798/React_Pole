import React from "react";
import Login from "./containers/LoginContainer";
import Body from "./containers/InfoContainer";
import PoleInfo from "./containers/TodosContainer";
import PoleChart from "./com/chart";
import InsertPole from "./containers/InsertContainer";
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
        <Route path="/insertPole" element={<InsertPole />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}