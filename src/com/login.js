import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import "../Css/App.css"

export default function Login(){

    const Navigate = useNavigate();
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
            if(userinfo.password === password) {
                setLoginCk(true)
                if(loginck) setloginState("로그아웃");
                Navigate("/",{state:inputs.id})
            }
        }else{
            setLoginCk(false)
            alert("실패");
        }
    }
    
    return(
        <>
            <Header />
            <div className="loginDiv">
                <input name="id" className="inputLogin" placeholder="id" value={id} onChange={onChange}></input> <br />
                <input name="password" className="inputLogin" placeholder="password" value={password} onChange={onChange}></input> <br />
                <br />
                <button className="loginBtn" onClick={onClick}>{loginState}</button>
            </div>
            <Footer />
        </>
    );
}