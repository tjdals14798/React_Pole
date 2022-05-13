import React, { useState } from "react";
import "./App.css";
import PoleList from "./com/poleList";
import Header from "./com/header";
import index from "./com/pole";
import PoleChart from "./com/chart";

export default function App() {
  const [input,setInput] = useState('');

  const keys = ["poleNum","poleAdmin"];
  
  const search = (pole) => {
    return pole.filter((item) => 
    keys.some(key => item[key].toLowerCase().includes(input))
    );
  }

  const onChange = (e) =>{
    setInput(e.target.value);
  }

  return (
    <div>
      <Header />   
      <PoleList index={search(index)} onChange={onChange}/>
      <PoleChart /> 
    </div>
  );
}