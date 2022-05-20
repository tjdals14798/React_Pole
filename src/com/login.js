import React, { useState } from "react";
import "../Css/App.css"

export default function Login(){

    const [loginck,setLoginCk] = useState(false);
    const [userinfo,setUserInfo] = useState({
        id:"tjdals",
        password:"123"
    })
    const [inputs,setInputs] = useState({
        id : '',
        password : ''
    });

    const { id, password } = inputs; 
    
    const onChange = (e) =>{
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick = () =>{
        if(userinfo.id === id){
            if(userinfo.password === password) setLoginCk(true)
        }else{
            setLoginCk(false)
        }
    }
    
    return(
        <>
            <div className="loginDiv">
                <input name="id" className="inputLogin" placeholder="id" value={id} onChange={onChange}></input> <br />
                <input name="password" className="inputLogin" placeholder="password" value={password} onChange={onChange}></input> <br />
                <p>{loginck?"성공":"실패"}</p>
                <button className="loginBtn" onClick={onClick}>로그인</button>
            </div>
        </>
    );
}