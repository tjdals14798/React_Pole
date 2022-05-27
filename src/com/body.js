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
    const {state} = useLocation();
    const [loginState,setloginState] = useState("");

    useEffect(()=>{
      if(state===null) setloginState("로그인");
      else setloginState("로그아웃");
    },[])

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
            <Header loginState={loginState}/>
            <PoleList index={search(index)} onKeyDown={updateRef} onChart={onChart} onInfo={onInfo} loginId={state}/>
            <Footer />
        </div>
    )
}