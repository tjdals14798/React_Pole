import React from "react";
import "../Css/App.css";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const Navigate = useNavigate();

    const move = () =>{
        Navigate("/login")
    }

    const home = () =>{
        Navigate("/")
    }

    return(
        <header className="header">
            <button onClick={home} className="headerButton"> Pole Of Pisa </button>
            <button onClick={move} className="headerLogin"> 로그인 </button>
        </header>
    );
}