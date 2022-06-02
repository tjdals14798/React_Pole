import React from "react";
import "../Css/App.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HederTimer = styled.div`
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
`;

export default function Header({loginState}){

    const Navigate = useNavigate();
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const move = () =>{
        Navigate("/login")
    }

    const home = () =>{
        Navigate("/")
    }

    return(
        <header className="header">
            <button onClick={home} className="headerButton"> Pole Of Pisa </button>
            <HederTimer>{dateString}</HederTimer>
            <button onClick={move} className="headerLogin"> {loginState} </button>
        </header>
    );
}