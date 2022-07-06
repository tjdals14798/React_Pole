import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import PoleList from "./poleList";
import index from "./pole";
import "../Css/App.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Body(){

    const [input,setinput] = useState("");
    const Navigate = useNavigate();
    const [ckLogin,setckLogin] = useState(false);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const {loginck} = location.state || {};
    const {insertPole} = location.state || {};
    useEffect(()=>{
      if(!loginck) setckLogin(false);
      else setckLogin(true);
    },[]);

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
  
    const onChart = (e) =>{
      Navigate("/chart",{state: e.target.value})
    }

    const onInfo = (e) =>{
      Navigate("/info",{state: e.target.value})
  }
  
    return(
        <div>
            <Header ckLogin={ckLogin} setckLogin={setckLogin}/>
            <PoleList index={search(index)} onKeyDown={updateRef} onChart={onChart} onInfo={onInfo} insertPole={insertPole} />
            <Footer />
        </div>
    )
}