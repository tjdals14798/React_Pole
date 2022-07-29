import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PoleList from "../com/poleList";
import { useLocation, useNavigate } from "react-router-dom";
import { addPole } from "../modules/info";
import insert from "../modules/insert";

function InfoContainer() {
    const info = useSelector(state => state.info);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const location = useLocation();
    const {loginck} = location.state || {};
    const {insertPole} = location.state || {};

    useEffect(()=>{
        if(!loginck) setckLogin(false);
        else setckLogin(true);
        if(insertPole!==undefined) {
          onCreate(insertPole)
          console.log("추가")
        };
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
    const onCreate = text => dispatch(addPole(text));
    return <PoleList info={search(info)} onSearch={onSearch} ckLogin={ckLogin} setckLogin={setckLogin} onChart={onChart} onInfo={onInfo}/>
}

export default InfoContainer;