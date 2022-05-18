import React from "react";
import "../Css/App.css";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const Navigate = useNavigate();

    const move = () =>{
        Navigate("/login")
        console.log("작동")
    }

    return(
        <header className="header">
            <b>Pole Of Pisa </b>
            <button onClick={move} className="headerLogin"> 로그인 </button>
        </header>
    );
}