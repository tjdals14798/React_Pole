import React from "react";
import "../Css/App.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({ ckLogin, setckLogin }){

    const Navigate = useNavigate();
    const today = new Date();

    const move = () =>{
        if(!ckLogin){
            Navigate("/login");
        }
        else {
            setckLogin(false);
        }
    }

    const date = dayjs(today).format("YYYY년 M월 YY일");
    return(
        <header className="header">
            <button onClick={() =>{Navigate("/")}} className="headerButton"> Pole Of Pisa </button>
            <HederTimer>{date}</HederTimer>
            {ckLogin && (<InsertBtn onClick={() => {Navigate("/insertPole")}}>전주 등록</InsertBtn>)}
            <button onClick={move} className="headerLogin"> {ckLogin?"로그아웃":"로그인"} </button>
        </header>
    );
}

const HederTimer = styled.div`
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
`;

const InsertBtn = styled.button`
    position: absolute;
    background: none;
    color: white;
    right: 6%;
    font-size: 1em;
    cursor: pointer;
`