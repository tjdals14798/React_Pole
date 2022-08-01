import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PoleList from "../com/poleList";
import { useLocation, useNavigate } from "react-router-dom";
import { addPole } from "../modules/info";
import { logIn } from "../modules/loginck";

function InfoContainer() {
    const info = useSelector(state => state.info);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const location = useLocation();
    const {loginck} = location.state || {};
    const {insertPole} = location.state || {};

    useEffect(()=>{
      // console.log(loginck);
        if(loginck) login(true);
        if(insertPole!==undefined) {
          onCreate(insertPole)
        };
    },[loginck,insertPole]);

    const [input,setinput] = useState("");

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
    const login = ck => dispatch(logIn(ck));
    return <PoleList info={search(info)} onSearch={onSearch} onChart={onChart} onInfo={onInfo}/>
}

export default InfoContainer;