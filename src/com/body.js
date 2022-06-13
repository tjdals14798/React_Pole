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
    const [loginState,setloginState] = useState("");
    const [insertPole,setinsertPole] = useState(false);
    const {state} = useLocation();
    
    useEffect(()=>{
      if(state===null) {
        setloginState("로그인");
        setinsertPole(false);
      }
      else{
        setloginState("로그아웃");
        setinsertPole(true);
      }
      //console.log(location.state.poleNum);
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
            <Header loginState={loginState} insertPole={insertPole}/>
            <PoleList index={search(index)} onKeyDown={updateRef} onChart={onChart} onInfo={onInfo} loginId={state}/>
            <Footer />
        </div>
    )
}