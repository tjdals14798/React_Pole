import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PoleList from "../com/poleList";
import { useLocation, useNavigate } from "react-router-dom";
import "../modules/info";

function InfoContainer() {
    const info = useSelector(state => state.info);
    const Navigate = useNavigate();
    const location = useLocation();
    const {loginck} = location.state || {};

    useEffect(()=>{
        if(!loginck) setckLogin(false);
        else setckLogin(true);
    //     if(insertPole){
    //     const pList = {
    //       id: nextId.current,
    //       poleNum: insertPole.poleNum,
    //       poleDate: [insertPole.poleDate,],
    //       poleTilt: [90,],
    //       poleAdmin: insertPole.poleAdmin,
    //       poleImg: insertPole.poleImg,
    //     }
    //     setPole([...Pole,pList])
    //     nextId.current +=1;
    //   }
    },[]);

    const [input,setinput] = useState("");
    const [ckLogin,setckLogin] = useState(false);

    const search = (pole) => {
      return pole.filter((item) => 
          item.poleNum.includes(input)
      );
    }

    const onChart = (e) =>{
      Navigate("/chart",{state: {poleInfo:info[e.target.value]}})
    }
  
    const onInfo = (e) =>{
      Navigate("/info",{state: {poleInfo:info[e.target.value]}})
    }

    const onSearch = text => setinput(text);
    return <PoleList info={search(info)} onSearch={onSearch} ckLogin={ckLogin} setckLogin={setckLogin} onChart={onChart} onInfo={onInfo}/>
}

export default InfoContainer;