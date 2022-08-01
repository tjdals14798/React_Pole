import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../com/login";
import "../modules/member";

function LoginContainer () {
    const member = useSelector(state => state.member);
    const Navigate = useNavigate();
    useEffect(()=>{
        findMember(member);
    });
    const [inputs,setInputs] = useState({
        id: "",
        password: ""
    }); 
    const { id, password } = inputs;
    
    const findMember = (info) => {
        if(info.find((item) => item.id === id && item.password === password)){
            Navigate("/",{state: { loginck:true }});
        }
    }
    const onSearch = useCallback(text => setInputs(text));
      
    return <Login onSearch={onSearch} member={member}/>
}

export default LoginContainer;