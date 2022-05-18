import React, { useState } from "react";
import PoleList from "./poleList";
import index from "./pole";
import PoleChart from "./chart";
import "../Css/App.css";

export default function Body(){

    const [input,setinput] = useState("");
    const [modal,setmodal] = useState(false);
    const [idx,setIdx] = useState('');
  
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
  
    const onModal = (e) =>{
        setIdx(e.target.value)
        setmodal(true)
    }
  

    return(
        <div>
            { modal && <PoleChart setmodal={setmodal} idx={idx} index={index} /> }
            <PoleList index={search(index)} onKeyDown={updateRef} onModal={onModal} />
        </div>
    )
}