import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../com/login";
import "../modules/member";

function LoginContainer () {
    const member = useSelector(state => state.member);
    const Navigate = useNavigate();
    useEffect(()=>{
        login(member);
    });

    const [inputs,setInputs] = useState({
        id: "",
        password: ""
    }); 
    const { id, password } = inputs;
    
    const login = (info) => {
        if(info.find((item) => item.id === id && item.password === password)){
            Navigate("/",{state: { loginck:id }});
        }
    }
    
    const onSearch = useCallback(text => setInputs(text));
      
    return <Login onSearch={onSearch}/>
}

export default LoginContainer;

