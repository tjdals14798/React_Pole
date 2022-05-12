import React, { useState } from "react";
import "./App.css";
import PoleList from "./com/poleList";
import Header from "./com/header";
import index from "./com/pole";

export default function App() {
  const [input,setInput] = useState('');

  const keys = ["poleNum","poleAdmin"];
  
  const search = (pole) => {
    return pole.filter((item) => 
    keys.some(key => item[key].toLowerCase().includes(input))
    );
  }

  return (
    <div>
      <Header />
      <input className="search" placeholder="전주 번호" onChange={e => setInput(e.target.value)}></input>
      <PoleList index={search(index)}/>
    </div>
  );
}

