import React, { useState } from "react";
import "./Css/App.css";
import PoleList from "./com/poleList";
import Header from "./com/header";
import index from "./com/pole";
import PoleChart from "./com/chart";

export default function App() {
  const [input,setinput] = useState("");
  const [modal,setmodal] = useState(false);

  function updateRef(e) {
    if(e.key === "Enter"){
      setinput(e.target.value)
    }
  }

  const keys = ["poleNum","poleAdmin"];
  
  const search = (pole) => {
    return pole.filter((item) => 
    keys.some(key => item[key].includes(input))
    );
  }

  return (
    <div>
      <Header />   
      { modal &&<PoleChart closeModal={setmodal}/> }
      <PoleList index={search(index)} onKeyDown={updateRef} openmodal={()=>setmodal(true)}/>
    </div>
  );
}